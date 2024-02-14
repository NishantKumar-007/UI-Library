'use strict';

const customLibrary = require('..');
const assert = require('assert').strict;

assert.strictEqual(customLibrary(), 'Hello from customLibrary');
console.info('customLibrary tests passed');
