"use strict";

console.log("hello from js")
require('../scss/style.scss');


// this code gets sent to the client a get request is made
// when button is clicked server.js file logs result
// 1. create simple server file


// add form, input and button -> use button as is
// querySelector to get the form element 

const form = document.querySelector(".auth-form");

form.addEventListener("submit", (e) => {

  console.log("token sent");
  fetch("https://localhost:3000", {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer 1888"
    }
  }).then(res => res.json())
    .then(res => {
      document.querySelector(".resume").textContent = res.value
    })
});



// addEventListener(submit)
// handleEvent -> console.log() 
// send get request to resume-api 