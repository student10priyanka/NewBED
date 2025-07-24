const express=require("express");
const app=express();
app.use(express.static(__dirname+"/public"));
app.use(express.urlencoded({extended:true}));
app.use("/addUser",(req,res)=>{
    console.log(req.body);
    let username=req.body.username;
     let password=req.body.password;
    // res.send("check terminal ");
    res.json({
        username,
        password
    }
)
})



app.listen(2222,()=>{
    console.log("server started");
})






/*
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})
    


app.get("/about",(req,res)=>{
    res.sendFile(__dirname+"/about.html");
})
    */




//send file mein absolute path dena hota hai
//vo jis directory mein ho vha tak path leleo