import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        let promise = Ember.$.ajax('http://slide-show.wattydev.com/videoEmbeds.php', {
            method: 'GET'
        });

        return promise;
    }
});
