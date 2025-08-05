let conatiner=document.querySelector("userConatiner");
function todo(URL){
    fetch(URL)
    .then((res)=>{
        console.log(res);
        return res.json();
    })
    .then((data)=>{
        console.log(data);
         data.forEach((list) => {
                displayUser(list);
            });
    })
    .catch((err)=>{
        console.log(err);
    });
    
}
todo('https://jsonplaceholder.typicode.com/todos');


function display(list){
    const li=document.createElement("li");
    li.innerHTML=`<div class="userId">
                <p>${list.Id}</p>
            </div>
           <div class="title">
            <h1>${title}</h1>
           </div>`
           userContainer.append(li);

}