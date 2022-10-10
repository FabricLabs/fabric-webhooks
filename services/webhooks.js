'use strict';

// Dependencies
const Service = require('@fabric/core/types/service');
const HTTPServer = require('@fabric/http/types/server');
const handleState = require('../contracts/handleState');

// local state
const state = {};

class WebHooks extends Service {
  constructor (settings = {}) {
    super(settings);

    this.settings = Object.assign({
      hooks: {
        'test': handleState.bind({ state })
      },
      http: {},
      resources: {
        'Hooks': {
          path: '/hooks'
        }
      },
      state: {}
    }, this.settings, settings);

    this.http = new HTTPServer(this.settings.http);

    this._state = {
      content: this.settings.state
    };

    return this;
  }

  async start () {
    for (const hook of Object.entries(this.settings.hooks)) {
      console.log('loading hook:', hook);
      // this.http._add
    }

    await this.http.start();
    return this;
  }

  async stop () {
    await this.http.stop();
    return this;
  }
}

module.exports = WebHooks;
