// 1.)creata a new element using createElement function
//2.)add / insert requuired data in that element using (.innerHTML or by .innerText)
//3.)insert new element int the parent using appendChild function
let todoContainer=document.querySelector(".todoContainer");
let todo=[{
    id:2343,
    title:"study daily"
},
{
    id:36578,
    title:"study tomorrow"
}]


function addTodo(todo){
    let li=document.createElement("li");
    li.innerHTML=`<div>
                <input type="checkbox" name="" id="">
                <h1>${todo.title}</h1>
                <div>
                    <button>❌</button>
                    <button>✔️</button>
                </div>

            </div>`
        todoContainer.appendChild(li);

}
function showAllTodos(todos){
    todos.forEach(todo => { 
        addTodo(todo);
    });
}
showAllTodos(todo); 

