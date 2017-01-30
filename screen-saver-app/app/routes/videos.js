import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        // Get the list of videos from the API
        let promise = Ember.$.ajax('http://slide-show.wattydev.com/videoEmbeds.php', {
            method: 'GET'
        });

        // Parse and randomize the videos
        promise = promise.then(videos => {
            videos = JSON.parse(videos);
            shuffle(videos);
            return videos;
        });

        // Return the promise
        return promise;
    }
});

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items The array containing the items.
 */
function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}
