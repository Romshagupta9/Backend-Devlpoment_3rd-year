let userContainer = document.querySelector(".userContainer");
console.log(userContainer);

function getUserData(URL){
    fetch(URL)
    .then((res)=>{
         console.log(res);
         return res.json()//to return a json object.., it also returns a prmoise
    })
    // .then((data)=>{ // 2 bar .then lgega
    //      console.log(data); 
    // })

    
    .then((data)=>{
        console.log(data);
        data.forEach(user=>{
            displayUsers(user);
        })
    })
    .catch((err)=>{
         console.log(err);
    });
}

//user's data is shown on the page
function displayUsers(users){
    let li = document.createElement("li");
    li.setAttribute("class", "user-item");
    li.innerHTML = `<div class="userInfo">
                <h1> ${users.name}</h1>
                <p>${users.username}</p>
            </div>
            <div class="userButton">
                <button class="user-delete">Delete</button>
                <button class="user-edit">Edit</button>
            </div>`

            userContainer.appendChild(li);
}

// getUserData('https://jsonplaceholder.typicode.com/users')
getUserData('http://localhost:3000/users'); // Use local server URL

//server bhi apna hoga

