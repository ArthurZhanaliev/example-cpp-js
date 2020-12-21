'use strict';

const addon = require('bindings')('example-cpp-js');

console.log(addon.hello());
console.log(addon.add(1, 3));
addon.func((val => { console.log(val) }));
console.log(addon.imshow("starry_night.jpg"));
