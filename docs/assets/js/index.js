"use strict";

console.log("hello from js")
require('../scss/style.scss');


// this code gets sent to the client a get request is made
// when button is clicked server.js file logs result
// 1. create simple server file


// add form, input and button -> use button as is
// querySelector to get the form element 

const button = document.querySelector(".auth-form");

button.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("token sent");
  fetch("https://api.chucknorris.io/jokes/random").then(res => res.json())
    .then(res => {
      document.querySelector(".resume").textContent = res.value
    })
});



// addEventListener(submit)
// handleEvent -> console.log() 
// send get request to resume-api 