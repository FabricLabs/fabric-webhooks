'use strict';

const assert = require('assert');
const WebHooks = require('../services/webhooks');

describe('@fabric/webhooks', function () {
  describe('WebHooks', function () {
    it('can smoothly create a new instance', function () {
      const webhooks = new WebHooks();
      assert.ok(webhooks);
      assert.ok(webhooks.id);
    });

    it('can start and stop', async function () {
      const webhooks = new WebHooks();
      await webhooks.start();
      await webhooks.stop();
      assert.ok(webhooks);
      assert.ok(webhooks.id);
    });
  });
});
