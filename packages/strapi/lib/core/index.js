'use strict';

const loadConfig = require('./load-config');
const loadApis = require('./load-apis');
const loadAdmin = require('./load-admin');
const loadPlugins = require('./load-plugins');
const loadMiddlewares = require('./load-middlewares');
const loadExtensions = require('./load-extensions');
const loadHooks = require('./load-hooks');
const bootstrap = require('./bootstrap');
const initCoreStore = require('./init-core-store');
const loadComponents = require('./load-components');

module.exports = {
  loadConfig,
  loadApis,
  loadAdmin,
  loadPlugins,
  loadMiddlewares,
  loadHooks,
  loadExtensions,
  loadComponents,
  bootstrap,
  initCoreStore,
};
