let todo={
    id:2345,
    title:"todo"

}
let ul=document.querySelector(".ul")
function addTODO(todo){
let li=document.createElement("li");
li.innerHTML=` <div>
            <input type="text">
            <h1> ${todo.title}</h1>
       <div>
        <button class="edit" >edit</button>
        <button class="delete">delete</button>
        <p>Hello world</p>
        </div> 
     </div>`
     ul.append(li);
}
addTODO(todo);