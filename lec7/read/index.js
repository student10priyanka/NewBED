const fs=require("fs");
const { json } = require("stream/consumers");
const {read}=require("../IO/io.js");
const {write} =require("../IO/io.js");
/*



fs.readFile("../demo.txt","utf-8",function(err,data){
    if(err) return console.log(err);
    console.log(data);  //read string as data is passed as string
    //to pass it in objeect use JSON.parse(data);
    let users=JSON.parse(data);
    console.log(users[0]);

})
//in order to work with oebject we use stringfy and parse method , as object cannot direct sent , so method JSon used,



*/

/*
fs.readFile("../demo.txt","utf-8",function(err,data1){
if(err) return console.log(err);
let user1=JSON.parse(data1);
console.log(user1);
fs.readFile("../demo2.txt","utf-8",function(err,data2){
if(err) return console.log(err);
let user2=JSON.parse(data2);
console.log(user2);
let asllUser=user1.concat(user2);
console.log(asllUser);
fs.writeFile("./newTask.txt",JSON.stringify(asllUser),function(err,data3){
if(err) return console.log(err);
console.log("work completed");

})
})
})

//the above created called as callBack hell-> resolved by promise 

*/

async function readUsers(){
    let user1=await read("../demo.txt");
    let user2=await read("../demo2.txt");
    console.log(user1);
    console.log(user2);

}
readUsers().catch(err => console.error("Error:", err.message));

async function task(file1,file2,file3) {
    let user1=await read(file1);
    let user2=await read(file2);
//   let a=JSON.parse(user1)
//   let b=JSON.parse(user2);
  let allusers=user1.concat(user2);
  let message=await write(file3,JSON.stringify(allusers));
  console.log(message);
}
task("../demo.txt","../demo2.txt","./allusers.txt")