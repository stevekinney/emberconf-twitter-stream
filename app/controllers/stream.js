import Ember from 'ember';

export default Ember.Controller.extend({

  tweetSorting: ['timestamp_ms:desc'],
  tweets: Ember.computed.sort('model', 'tweetSorting'),

  websocket: Ember.inject.service(),

  subscribe: function () {
    let socket = this.get('websocket.socket');
    socket.on('tweet', (tweet) => {
      this.get('model').pushObject(tweet);
    });
  },

  unsubscribe: function () {
    let socket = this.get('websocket.socket');
    socket.removeAllListeners();
  }

});
