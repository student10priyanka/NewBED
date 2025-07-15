const fs=require("fs");
fs.readFile("../demo.txt",function(err,data){  //<Buffer 68 65 6c 6c 6f 20 67 32 37> gave this output
    if(err) return console.log(err);
    console.log(data);
})
//the above gave output in binary
fs.readFile("../demo2.txt","utf-8",function(err,data){
    if(err) return console.log(err);
    console.log(data);
})



