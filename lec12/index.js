let box=document.querySelector("#box");
let btn=document.querySelector("#button");
let stp=document.querySelector("#stop");
let colors=["red" ,"brown","grren","yellow","white","purple","black","orange","lavender","golden"];
function generateColors(){
    let indx=Math.floor(Math.random()*10);
    let randomClr=colors[indx];
    box.style.backgroundColor=randomClr;

}
button.addEventListener("click",function(){
    //generateColors();
    setInterval(()=>{
        generateColors();
    },100);
})
stop.addEventListener("click",function(){
    if()
})

