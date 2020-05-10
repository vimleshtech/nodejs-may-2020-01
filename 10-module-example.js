
const Calc = require("./library/1-calc-example")
const FileConverter = require("./library/2-file-converter-example")


//import {Calc} from './library/1-calc-example'

var res = Calc.add(11,33);
console.log(res)

var res = Calc.mul(11,33);
console.log(res)

var res = Calc.sub(11,33);
console.log(res)


FileConverter.jsonToCSV("user-data.json","user-data.csv");
