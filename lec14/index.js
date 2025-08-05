const express=require("express");
const app=express();
const fs=require("fs");
app.get("/users",(req,res)=>{
    fs.readFile("./user.json","utf-8",function(err,data){
        if(err) return res.send(arr);
        let user=JSON.parseInt(data);
        res.json(user);
    })
})
app.listen(3002,()=>{
    console.log("started");
})