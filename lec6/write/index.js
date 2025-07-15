const fs=require("fs");
fs.writeFile("../demo.txt","hello g27",function(err,data){
if(err) return console.log(err);

//console.log(data);// udefined qki secnong paramenter nhi dena hota;
console.log("success");
});
fs.writeFile("../demo2.txt","i have created 1 more file",function(err,data){
    if(err) return console.log(err);
    console.log("generated sucessfully");
})