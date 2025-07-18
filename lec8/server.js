const express=require("express");
const app=express();

app.get("/",(req,res)=>{  //endpoint created for get request, two object req- jo bhi re, arei hai usy relatedsari ing - res-> carry all methods to send in response
console.log(req);
//res.send("hello send");
  res.json({
  name:"Nitesh",
  address:"delhi",
  isLogin:true
  })

})
app.get("/users/:id",(req,res)=>{
    console.log("id saved")//console.log(req.params.id);
    let id=req.params.id;

    
    res.send(id);
})
app.get("/blogs",(req,res)=>{
    console.log(req.query.title);
    res.send("got it");
})
app.get("/")
app.listen(2222,()=>{
    console.log("server started");
})
