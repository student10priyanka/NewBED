//accessing DOM element/node
//1. using id
let res=document.getElementById("mydiv");
//console.log(res);
console.dir(res);
//2. using class
let h2=document.getElementsByClassName("h2");
console.log(h2);
//3. query selector
let out=document.querySelector("#mydiv");
let out2=document.querySelectorAll("p");
console.log(out2);


//document properties
//1. accessing element content and change it
//*innerHTML
console.log(res.innerHTML);  //getter
res.innerHTML=<p>Changed using DOM manipulation</p>  //setter
//*innerText
console.log(res.innerText);  //getter
res.innerText="hello world " //setter
//*textContent
//2. accessing element, class, id
//i. getAttribute
console.log(res.getAttribute("id"));
let btn = document.querySelector(".btn")
btn.addEventListener("click", ()=>{
    res.setAttribute("class", "js");

})
//ii. only for class attribute
//*classList -> add, remove
let myh= document.querySelector(".myh")
console.log(myh.classList);
myh.classList.add("hii");
myh.classList.remove("myh");
let form=document.querySelector(".signup");
btn.addEventListener("click",()=>{
    form.classList.toggle("hide");
})