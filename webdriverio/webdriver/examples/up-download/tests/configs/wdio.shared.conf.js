/**
 * This file holds all the shared config options
 * The rest of the files will extend options
 * More information about the config can be found
 * here https://webdriver.io/docs/configurationfile.html
 */
exports.config = {
  // ====================
  // Runner Configuration
  // ====================
  runner: 'local',

  // ===================
  // Test Configurations
  // ===================
  sync: true,
  logLevel: 'silent',
  coloredLogs: true,
  deprecationWarnings: true,
  baseUrl: 'https://the-internet.herokuapp.com/',
  waitforTimeout: 10000,
  // A timeout of 3 min
  connectionRetryTimeout: 3 * 60 * 1000,
  connectionRetryCount: 3,

  // ==============
  // Test Framework
  // ==============
  framework: 'jasmine',
  reporters: ['spec'],
  jasmineOpts: {
    defaultTimeoutInterval: 60000,
    // Babel setup
    helpers: [require.resolve('@babel/register')],
  },

  // ========
  // Services
  // ========
  services: [],

  // =======
  // Retries
  // =======
  // Normally a bad practice, but there could be an environmental issue
  // when this is needed.
  specFileRetries: 1,
  specFileRetriesDelay: 0,
  specFileRetriesDeferred: false,
};
