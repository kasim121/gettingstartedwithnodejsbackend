
/*const second = require('./second')//to call second file data means importing the data or accessing the data 
const arr = [2, 4, , 8, 10, 22, 3, 3];
// console.log(arr[3]);
// console.log(second.y);
// console.log(second.z());
let res = arr.filter((item) => { 
    return item === 3
    //return item > 3
    //return item >=4

})
console.warn(res) */

//Core Module
/*
const fs = require('fs');
console.log("global module example");
fs.writeFileSync("nonglobelfileeg.txt","Non global example file")//by default global enviroment nahi hai siliye ise import karna padta hai
*/

const fs = require('fs');
console.log("hi dir", __dirname);
console.log("hi file", __filename);
fs.writeFileSync("createfile.txt", "fle has been created");