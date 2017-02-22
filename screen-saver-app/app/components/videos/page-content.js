import Ember from 'ember';

export default Ember.Component.extend({
    /**
     * The videos retrieved by the route.
     *
     * @property videos
     * @type {Object[]}
     */
    videos: null,

    /**
     * The index of the video currently playing.
     *
     * @property currentIndex
     * @type {Number}
     */
    currentIndex: 0,

    /**
     * The video currently playing.
     *
     * @property currentVideo
     * @type {Object}
     */
    currentVideo: Ember.computed('currentIndex', 'videos.[]', function () {
        let currentVideo = this.get('videos')[this.get('currentIndex')];

        if (Ember.get(currentVideo, 'type') === 'youtube') {
            window.youtubeVideoId = Ember.get(currentVideo, 'videoId');
        }

        return currentVideo;
    }),

    /**
     * A container for the timer to change videos.
     *
     * @property _timer
     * @type {*}
     * @private
     */
    _timer: null,

    /**
     * Start the timer loop.
     *
     * @method _startTimer
     * @return {this}
     * @private
     */
    _startTimer: Ember.on('didInsertElement', function () {
        this.set('_timer', Ember.run.later(() => {
            this._updateIndex()._startTimer();
        }, this.get('currentVideo.duration') * 1000));
        return this;
    }),

    /**
     * Move to the next video when a youtube video is finished.
     *
     * @method _watchForYouTubeEnded
     * @return {this}
     */
    _watchForYouTubeEnded: Ember.on('didInsertElement', function () {
        Ember.$('body').on('YouTubeEnded', () => {
            this._stopTimer()._updateIndex()._startTimer();
        });
        return this;
    }),

    /**
     * Toggle for rendering the youtube shit to the page.
     *
     * @property showYoutube
     * @type {Boolean}
     */
    showYoutube: true,

    /**
     * Update the index for the current video.
     *
     * @method _updateIndex
     * @return {this}
     * @private
     */
    _updateIndex() {
        let maxIndex = this.get('videos.length') - 1;
        let currentIndex = this.get('currentIndex');
        this.set('showYoutube', false);
        window.YT = {};
        if (currentIndex === maxIndex) {
            Ember.run.later(() => {
                this.set('currentIndex', 0);
                this.set('showYoutube', true);
            }, 1000);
            return this;
        }
        Ember.run.later(() => {
            this.set('currentIndex', currentIndex + 1);
            this.set('showYoutube', true);
        }, 1000);
        return this;
    },

    /**
     * Stop the timer when the component is destroyed.
     *
     * @method _stopTimer
     * @return {this}
     * @private
     */
    _stopTimer: Ember.on('willDestroy', function () {
        Ember.run.cancel(this.get('_timer'));
        return this;
    })
});
