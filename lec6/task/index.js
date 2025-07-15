const fs=require("fs");
//read data form the demp.txt and demo1.txt and write in new file
fs.readFile("../demo.txt","utf-8",function(err,data){
    if(err) return console.log(err);
    let data1 = data.trim().split(/\s+/).join(" ")
    fs.readFile("../demo2.txt","utf-8",function(err,data){
        if(err) return console.log(err);
       let data2 = data.trim().split(/\s+/).join(" ");  // Clean the second file too

        const merged = data1 + "\n" + data2;
        fs.writeFile("./demo3.txt",merged,function(err){
            if(err) return console.log(err);
            console.log("Files merged");
        })
    } )
})

