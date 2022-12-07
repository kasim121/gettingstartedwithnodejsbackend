//What is Node Js?

//Node is Runtime Enviroment for executing  Java Script Code.

/*First Script with Node
    Script with commenad Line// rarely used
    MAke Folder and file
    Write first code and run
    Interview question
*/
/*
inside cmd 

node -v

node

console.log("like");
o/p: like
undefined

var x = 10;
console.log(x)
o/p: 10
undefined 

why undefined?
 even if you print in browser console in that also you will find undefined as well 
 
 go to chrome-> console->
 write 
 console.log("node js is cool!")
 node js is cool!
 undefined
 
 why is it happening ?
 
 that means that above code statment has been written that dosnt return anything thats why it shows you,  
 above code statement console.log() just printing the value not returnning anything!

 for adding two value
 var x = 20;
 var y = 30;
 console.log(x+y); OR console.warn() //will also work same 
 o/p: 30
 undefined

 Note: because ye bahut jiyada usefull nahi hai kiyuki na to hi hum is program ko save kar sakte hain kahi 
       jaise hi cmd close karenge wo program bhi close ho jayega
*/



/*make folder in side any drive as nodejsbackendmasterclass 
    open cmd
    code . // for aopening the vscode
    inside vscode make folder and create index.js file

    Intresting fact:

    Kam hum node ka kar rahe hain nut jo humne file ki extension rakhi hai wo js rakhi hai aisa kiyu?

    ans: kyuki Node Js ek lanuage nahi hai ye ek runtime enviroment hai jo ki Java Script ka code run karta hai
         kaise V8 Engine ki help se

    write first program in vscode inside index.js
     
     var x = 10;
     var y = 20;
     var y = 30;

     console.log(x+y+z); 
     OR console.warn(x+y+z);

     node .\index.js  // to execute the code in terminal

     Interesting Fact: 

     hum chrome browser k andar bhi console use karte hain and vscode k andar node js k sath bhi
     to kya ye dono console.log same hai ? because hum yahan .js file use karrahhe hain 

     ans: No, dono ala alag hain ap bologe why dono jaah use ho raha hai that means ye Java Script ka hi to hoga tabhi to hum log run kar pa rahe hain 
     ans: Ji nahi

     in browser wo java script ka hota hai and wo java script ko run karta hai

     but in node js iske pass koi browser nahi hota to internally ek module bana k rakhta hai
     go to node js > doc> there u will see that:

     ye debugging k liye use hota;

     ye similar hota hai but exact same nahi hota 

   
*/

//-------------------------------------------------------------------------------------------

/*
Fundamentals of Node JS
    JavaScript fundamentals for Node js 
    Condition loop and array
    The import function and vriables from another file.
    Interview Question
    

*/

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

// const fs = require('fs');
// console.log("hi dir", __dirname);
// console.log("hi file", __filename);
// fs.writeFileSync("createfile.txt", "fle has been created");

/*
const fs = require('fs').writeFileSync;
fs("abc.text","Node js is cool")
const mks = require('fs').writeFileSync;
mks("xyz.text", "Node js Backend is cool")
*/

 