import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [];
  },
  activate: function () {
    this.controllerFor('stream').subscribe();
  },
  deactivate: function () {
    this.controllerFor('stream').unsubscribe();
  }
});
