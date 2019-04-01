"use strict";
// require("dotenv").config({ path: "./.env" });
require('../scss/style.scss');

console.log("hello from js")

// this code gets sent to the client a get request is made
// when button is clicked server.js file logs result
// 1. create simple server file

// add form, input and button -> use button as is
// querySelector to get the form element 

const button = document.querySelector(".auth-form");

button.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("token sent");
  fetch(`${process.env.DOMAIN}/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${
        new URLSearchParams(window.location.search).get("token")
      }`
    }
  }).then(res => res.json())
    .then(res => {
      console.log(res);
      // document.querySelector(".resume").textContent = res.value
    })
});



// addEventListener(submit)
// handleEvent -> console.log() 
// send get request to resume-api 