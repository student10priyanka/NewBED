const fs=require("fs");
function read(file){
    return new Promise((resolve,reject)=>{
        fs.readFile("../demo.txt","utf-8",function(err,data){
    if(err) return reject(err);
    console.log(data);  //read string as data is passed as string
    //to pass it in objeect use JSON.parse(data);
    let users=JSON.parse(data);
    resolve(users);

});
    });
}
function write(file,data){
    return new Promise((resolve,reject)=>{
        fs.writeFile(file,data,function(err){
            if(err) return reject(err);
            console.log(data);
            resolve("Write success");
        });
    });
}
module.exports.read=read;
module.exports.write=write;