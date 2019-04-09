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
      res.payload.about.overview.map(entry => console.log(entry));
      const html = renderResume(res.payload);
      document.querySelector(".resume").innerHTML = html
    })
});

function renderResume(resume) {
  return `
  <main class="container">
    <section class="main-content">
      <section class="row mt-5" id="about">
        <div class="co1-12 col-md-4 text-md-right">
          <h2>
            About
          </h2>
        </div>
        <div class="col-12 col-md-8">
            ${resume.about.description.html}  
          <dl class="row">
            ${resume.about.overview.map((entry) => { return `
            <dt class="col-4">${entry.stage}</dt>
            <dd class="col-8">${entry.name}<br>${entry.detail}</dd>`
            }).join("")}
          </dl>
        </div>
      </section>
        <div class="row justify-content-end">
          <div class="col-1">
            <nav class="nav justify-content-end">
              <a class="nav-link" href="#skills-and-tools">
                <small>next</small>
              </a>
            </nav>
          </div>
        </div>
        <hr>
        <section id="skills-and-tools">
        <div class="row justify-content-end">
          <div class="col-1">
            <nav class="nav justify-content-end">
              <a class="nav-link" href="#top">
                <small>top</small>
              </a>
            </nav>
          </div>
        </div>
        <div class="row mt-3 mb-5">

        <div class="co1-12 col-md-4 text-md-right">
          <h2>
            Skills and Tools
          </h2>
        </div>
        <div class="col-12 col-md-8">
          ${resume.skillsAndTools.description.html}
          <div class="row">
            ${resume.skillsAndTools.detail.map((entry) => { return `
            <div class="col-6 col-md-4 order-1 order-md-1 my-green-bg py-3 border border-white border border-white text-center">
              <h5 class="font-weight-bold text-white text-center">
                ${entry.name}
              </h5>
              ${ entry.descriptors.length > 0 
                ? entry.descriptors.map((descriptor) => { return `
                  <span class="d-inline-block bg-white rounded-left rounded-right m-1p-1">
                    ${descriptor}
                  </span>`}).join("") 
                : `<p class="bg-white rounded-left rounded-right text-left m-1 p-1">
                    ${entry.description}
                  </p>`}
            </div>`}).join("")}
          </div>
        </div>
      </section>
      <div class="row justify-content-end">
      <div class="col-1">
        <nav class="nav justify-content-end">
          <a class="nav-link" href="#recent-work">
            <small>next</small>
          </a>
        </nav>
      </div>
    </div>
    <hr>

    <section id="recent-work">

      <div class="row justify-content-end">
        <div class="col-1">
          <nav class="nav justify-content-end">
            <a class="nav-link" href="#top">
              <small>top</small>
            </a>
          </nav>
        </div>
      </div>

      <div class="row mt-3 mb-5">

        <div class="co1-12 col-md-4 text-md-right">
          <h2>
            Recent Work
          </h2>
          <p class="text-muted">
            Since July 2016
          </p>
        </div>

        <div class="col-12 col-md-8">
          ${resume.recentWork.description.html}
            <div class="row">
              <div class="col">
                <div class="accordion" id="recentwork-list">
                  ${resume.recentWork.activities.map((activity, index) => { return `
                    <div class="card rounded-0">
                      <div class="card-header rounded-0 my-green-bg" id "${activity.id}">
                        <h5 class="mb-0">
                          <button class="btn btn-link text-white" type="button" data-toggle="collapse" data-target="#${activity.id}Collapse" aria-expanded="${index !== 0 ? false : true}"
                            aria-controls="${activity.id}Collapse">
                            ${activity.name}
                          </button>
                        </h5>
                      </div>
                      <div id="${activity.id}Collapse" class="${index === 0 ? 'collapse show' : 'collapse'}" aria-labelledby="${activity.id}"
                        data-parent="#recentwork-list">
                        <div class="card-body">
                          <ul class="list-unstyled">
                            ${activity.details.map((detail) => { return `
                              <li>
                                ${detail.description}
                              </li>
                              <ul class="list-unstyled">
                                <li>
                                  <i>
                                    ${detail.date}
                                  </i>
                                </li>
                              </ul>
                              `}).join("")
                            }
                          </ul>
                        </div>
                      </div>
                    </div>
                    `}).join("")
                  }
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>

    <div class="row justify-content-end">
      <div class="col-1">
        <nav class="nav justify-content-end">
          <a class="nav-link" href="#management-experience">
            <small>next</small>
          </a>
        </nav>
      </div>
    </div>
    <hr>
    </section>
  </main>`
};