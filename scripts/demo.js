'use strict';

const WebHooks = require('../services/webhooks');
const handleState = require('../contracts/handleState');

const state = {};
const settings = {
  hooks: {
    'test': handleState.bind({ state })
  }
};

async function main (input = {}) {
  const webhooks = new WebHooks(input);
  await webhooks.start();
  return { id: webhooks.id };
}

main(settings).catch((exception) => {

}).then((output) => {

});
