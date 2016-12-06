// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/docs/referenceConf.js

/*global jasmine */
var SpecReporter = require('jasmine-spec-reporter');

chromeDriverPath = process.platform === 'win32' ? 'node_modules/webdriver-manager/selenium/chromedriver_2.22.exe' : 'node_modules/webdriver-manager/selenium/chromedriver_2.22';

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  multiCapabilities: [
    {
      'browserName': 'chrome',
      'chromeOptions': {
        'binary': '/usr/bin/google-chrome',
        'args': [],
        'extensions': []
      }
    }
  ],
  chromeDriver: chromeDriverPath,
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  useAllAngular2AppRoots: true,
  beforeLaunch: function() {
    require('ts-node').register({
      project: 'e2e'
    });
  },
  onPrepare: function() {
    jasmine.getEnv().addReporter(new SpecReporter());
  }
};
