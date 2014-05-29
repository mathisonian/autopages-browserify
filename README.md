autopages-browserify
====================

Autopages plugin for compiling browserify js files



### Usage

```js
'use strict';

var Autopages = require('autopages');
var apBrowserify = require('autopages-browserify');

var autopages = new Autopages('API_TOKEN');

var debug = false;

autopages
  .register('username/repository')
  .then(function(processor) {
    processor.use(apBrowserify(debug));
  });

```
