// Requirejs Configuration Options
requirejs.config({
  // to set the default folder
  baseUrl: 'src',
  // paths: maps ids with paths (no extension)
  paths: {
      'jasmine': '../lib/jasmine/jasmine',
      'jasmine-html': '../lib/jasmine/jasmine-html',
      'jasmine-boot': '../lib/jasmine/boot',
      'squire': '../lib/squire/Squire'
  },
  // shim: makes external libraries compatible with requirejs (AMD)
  shim: {
    'jasmine-html': {
        deps : ['jasmine']
    },
    'jasmine-boot': {
        deps : ['jasmine', 'jasmine-html']
    },
    'squire': {
        exports: 'squire'
    }
  }
});

// List of the jasmine specs to run
var specs = [
  'test-my-dependency-module'
];

require(['jasmine-boot'], function () {
    require(specs, function () {
        window.onload();
    });
});
