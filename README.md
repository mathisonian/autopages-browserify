autopages-browserify
====================

Autopages plugin for compiling browserify js files



### Usage

```js
'use strict';

var Autopages = require('autopages');
var apBrowserify = require('autopages-browserify');

var autopages = new Autopages('ab27c98fa86a48376c14f104d366df46d5787ab5');

var debug = false;

autopages
  .register('username/repository')
  .then(function(processor) {
    processor.use(apBrowserify(debug));
  });

```
