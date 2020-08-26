console.log("I am connected")
const _ = require('lodash');
const data = require('./data')
const functions = require('./functions')

console.log(_.filter(data.dataArrayKey, function (e) { return e.population < 100000; }))
console.log(_.filter(data.dataArrayKey, function (e) { return e.population > 100000; }))