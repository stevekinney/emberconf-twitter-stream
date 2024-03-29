/* global io */

import Ember from 'ember';

export default Ember.Object.extend({
  _setup: function () {
    this.socket = io(`${window.location.hostname}:8080`);
  }.on('init'),

  send: function (message) {
    this.socket.emit('message', message);
  }
});
