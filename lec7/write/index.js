const fs=require("fs");
let users=[{
    id:1,
    name:"Nitesh",
    age:"25"
},{
    id:2,
    name:"Dev",
    age:"25"
}]
fs.writeFile("../demo.txt",/*users.toString()* in plaxce of this use*/  JSON.stringify(users),function(err,data){
if(err) return console.log(err);
console.log("users Written")
})
//[object Object],[object Object]   -> ehen converted to string  it is passed a sobejct
// in oreder to pass as data we pass Using standard by JSON.stringyFy notation 
fs.writeFile("../demo2.txt",/*users.toString()* in plaxce of this use*/  JSON.stringify(users),function(err,data){
if(err) return console.log(err);
console.log("users Written")
})