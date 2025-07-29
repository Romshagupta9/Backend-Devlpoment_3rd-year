//accessing DOM elememt
//1)using ID
//2)using class
//3)using tag name
//4)using query selector

// let el1=document.getElementById("heading");
// console.log(el1);
// let el2=document.getElementsByClassName("mydiv"); //pass index
// console.log(el2[0]); // Accessing the first element with class "mydiv"
// let el3=document.getElementsByTagName("p");     //pass index
// console.log(el3);
// let el4=document.querySelector("p"); //tagname,class,ID 
// console.log(el4); // Accessing the first <p> element in the document
// let el5=document.querySelector(".item"); //tagname,class,ID
// console.log(el5); // Accessing all elements with class "item"

//properties 
//innerHTML
//innertext
//innercontent

// let el=document.querySelector("#container");
// console.log(el.innertext); // Accessing the inner HTML of the element with ID "

// let data=el4.innertext;
// console.log(data); // Accessing the inner text of the first <p> element


// let ul=document.querySelector("#container");
// let data=el4.innerText;
// console.log(data); // Accessing the inner text of the first <p> element
// el4.innerText="changed using js";
// let data2=ul.innerHTML;
// console.log(data2); // Accessing the inner HTML of the first <p> element

// let data3=ul.innerText; 
// console.log(data3); // Accessing the inner text of the first <p> element

// let data4=ul.textContent;
// console.log(data4); // Accessing the text content of the first <p> element

// ul.innerHTML=`<li class="item">Item 1</li>
// <li class="item">Item 2</li>
// <li class="item">Item odhos</li>`

/*
getAttribute
setAttribute
classList
*/




// let el5=document.querySelector(".item");
// console.dir(el5);
// // console.log(el5.getAttribute("id")); // Accessing the class attribute of the first element with class "item"
// // console.log(el5.getAttribute("class")); // Accessing the class attribute of the first element with class "item"
// // el5.setAttribute("id","js");
// console.log(el5.getAttribute("id"));

// //classList
// console.log(el5.classList.contains("delete"));
//  // Accessing the class list of the first element with class "item"
// console.log(el5.classList); // Accessing the class list of the first element with class "item"
// console.log(el5.classList.contains("item")); // Check if the class list contains "item"




//form should be visible by clicking the button and hidden by clicking the button 




