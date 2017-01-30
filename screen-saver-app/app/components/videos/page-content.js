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
        return this.get('videos')[this.get('currentIndex')];
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
     * @return {Void}
     * @private
     */
    _startTimer: Ember.on('didInsertElement', function () {
        this.set('_timer', Ember.run.later(() => {
            this._updateIndex();
            this._startTimer();
        }, this.get('currentVideo.duration') * 60));
    }),

    /**
     * Update the index for the current video.
     *
     * @method _updateIndex
     * @return {Void}
     * @private
     */
    _updateIndex() {
        let maxIndex = this.get('videos.length') - 1;
        let currentIndex = this.get('currentIndex');
        if (currentIndex === maxIndex) {
            this.set('currentIndex', 0);
            return;
        }
        this.set('currentIndex', currentIndex + 1);
    }
});
