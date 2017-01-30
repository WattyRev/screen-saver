import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let promise = Ember.$.ajax('http://slide-show.wattydev.com/videoEmbeds.json', {
      method: 'GET'
    });

    promise = promise.catch(() => Ember.RSVP.resolve([
      {
        embed: "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/rnI5iwsyM9U\" frameborder=\"0\" allowfullscreen></iframe>",
        duration: 239
      }
    ]));

    return promise;
  }
});
