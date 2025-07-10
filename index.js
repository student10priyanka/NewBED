
function buyProduct(product_name,cb){
 //some sync.functon
 //1.get product detail
 //2.write order detail  in user db
 // agr kisi function mein asnccode hai function bhi async hoga

 setTimeout(()=>{
    console.log(product_name+"Order complete");
    cb();
 }) 
}
buyProduct("Inphone 16",function(){
    console.log("product is purchased");
});
//console.log("product is purchased");// phle ye chlega kyuki asyn wait nhi krta chlne ka
//so to handle asyn use callBack or promise,you habve to pass fuction in buyproduct 

