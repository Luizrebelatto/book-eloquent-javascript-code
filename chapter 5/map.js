const SCRIPTS = require("../datas/SCRIPT");

function map(array, transform){
    let mapped = []
    for(let element of array){
        mapped.push(transform(element))
    }
    return mapped;
}
let rtlScripts = SCRIPTS.filter(item => item.direction == "rtl")
console.log(map(rtlScripts, s => s.name))