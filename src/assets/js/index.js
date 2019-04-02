"use strict";
require('../scss/style.scss');

console.log("hello from js")

const form = document.querySelector(".auth-form");

form.addEventListener("submit", (e) => {
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
      // call resumeRender with res.resume as argument
      // document.querySelector(".resume").innerHTML = res.value
      const html = renderResume(res.payload);
      console.log(html) 
    })
});

function renderResume(resume) {
  return 
    `<section class="row mt-5" id="about">
      <div class="co1-12 col-md-4 text-md-right">
        <h2>
          About
        </h2>
      </div>
      <div class="col-12 col-md-8">
        ${resume.about.description.html}
      </div>
    </section>`
}