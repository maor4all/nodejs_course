//const mathUtil = require('./math-util')//old syntax
import * as mathUtils from './math-util.js' 
import {plus, minus } from './math-util.js' 

//const sum = mathUtil.plus(5, 3)
const sum = mathUtils.plus(5, 3)
const sum2 = plus(5, 3)
console.log(sum)

console.log("Nice Job!")