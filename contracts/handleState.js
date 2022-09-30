'use strict';

module.exports = function handleState (state) {
  if (!this) throw new Error('Invalid context:', this);
  this.state = Object.assign({}, this.state, state);
  return this;
};
