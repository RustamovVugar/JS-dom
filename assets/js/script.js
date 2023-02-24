"use strict";

// let show = console.log.bind(console)

// show(document)

// let elems = document.getElementsByTagName("h1")

// for (const elem of elems) {
//     console.log(elem);
// }

// let elems = document.getElementsByClassName("header");


// let elem = document.getElementById("products");

// let span = document.querySelector("#product span");

// let text = document.querySelector("#product .item p")

// console.log(text)

// 

// let spans =document.querySelectorAll("#product span");

// for (const item of spans) {
//     if(item.innerText == "Bye3"){
//         item.style.color = "red";
//     }
// }

// let elem = document.querySelector("h2");

// elem.innerText  = "Welcome";

// console.log(elem.innerHTML);

// elem.innerHTML = "<span>Resulllll</span>";


// elem.style.backgroundColor = "yellow";
// elem.style.position = "relative";
// elem.style.top = "200px";


// elem.style.cssText = ` 
// background-color: yellow;
// position:relativ;
// top:200px
//  `;


// let h1 =document.querySelector("h1")

// console.log(h1)

//  h1.className = "test";

// h1.classList.add("test")

// h1.classList.remove("header")

// console.log(h1.classList.contains("headessr"))

// let button = document.querySelector("#products button");

// let h1 = document.querySelector("#products h1");


// button.onclick = function () {
//     alert("salam1")
// }

// button.onclick = function () {
//     alert("salam2")
// }

// function test(){
//     alert("test function")
// }

// button.addEventListener("click",test)

// button.addEventListener("click",function(){

//     // h1.className = "h1-design";

//     h1.classList.add("h1-design");
// })

// let btnOn = document.querySelector("#products .on")

// let btnOff = document.querySelector("#products .off")

// let icon = document.querySelector("#products i");

// let body = document.querySelector("body");
// let h1 = document.querySelector("#products h1");

// btnOn.addEventListener("click", function () {

//     h1.classList.add("active");
//     if (h1.classList.contains("inActive")){
//         h1.classList.remove("inActive");
//     }

// })

// btnOff.addEventListener("click", function () {

//     h1.classList.add("inActive");
//     if(h1.classList.contains("active"))
//     h1.classList.remove("active");

// })

// btnOn.addEventListener("click", function () {
// console.log(event.target)


//     if(icon.classList.contains("active") && body.classList.contains("active-body")){
//         icon.classList.remove("active") 
//         body.classList.remove("active-body") 
//         this.innerText = "On"
//         this.classList.add("btn-success")
//         this.classList.remove("btn-danger")

//     }else{
//         icon.classList.add("active") 
//         body.classList.add("active-body") 
//         this.innerText = "Off"
//         this.classList.remove("btn-success")
//         this.classList.add("btn-danger")
//     }

// })

// document.querySelector("a").addEventListener("click",function(e){
//     e.preventDefault();
//     console.log("Resul")
// })

// icon.addEventListener("mouseover", function(){

//     icon.classList.add("active"); 
//     body.classList.add("active-body"); 

// })

// icon.addEventListener("mouseout",function(){

//     icon.classList.remove("active"); 
//     body.classList.remove("active-body"); 

// })

let input = document.querySelector("#products input");

let button = document.querySelector("#products button")

let ul = document.querySelector("#products ul");

// document.querySelector("h1").innerText = input.value;

// button.addEventListener("click", function(){
//     console.log(input.value)
//     input.value = "";
// })

//<li class="list-group-item my-1">salam</li>

button.addEventListener("click", function () {
  let inputValue = input.value;

  if (inputValue == "") {
    alert("Dont empty");
    return;
  }


  let list = document.querySelectorAll("#products li");

  for (const item of list) {
    if (item.innerText == inputValue) {
      alert("Item already exist");
      input.value = "";
      return;
    }
  }

  // if(!!!inputValue){
  //   alert("Dont empty");
  //   return;
  // }

  // ul.innerHTML += `<li class="list-group-item my-1">${inputValue}</li>`

  let li = document.createElement("li");

  li.className = "list-group-item my-1";

  li.innerText = inputValue;

  ul.append(li);



  input.value = "";

})