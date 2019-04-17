"use strict";
require('../scss/style.scss');

console.log("hello from js")

const form = document.querySelector(".auth-form");

form.addEventListener("submit", (e) => {
  
  e.preventDefault();
  console.log("token sent");
  
  document.querySelector("div.container > form").setAttribute("class", "d-none");
  document.querySelector("div.container > hr").setAttribute("class", "d-none");
  
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
      const resumeData = renderResume(res.payload);
      const contactData = renderFooter(res.payload);
      document.querySelector("main.container").innerHTML = resumeData;
      document.querySelector("#contact").innerHTML = contactData;
    });
});

function renderResume(resume) {
  return `
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
            <dt class="col-sm-4">${entry.stage}</dt>
            <dd class="col-8">${entry.name}<br>${entry.detail}</dd>`
            }).join("")}
          </dl>
        </div>
      </section>

      ${renderNavNext("skills-and-tools")}
      <hr>
      <section id="skills-and-tools">
        ${renderNavTop()}
        
        <div class="row mt-3 mb-5">
          <div class="co1-12 col-md-4 text-md-right">
            <h2>
              Skills and Tools
            </h2>
          </div>
          <div class="col-12 col-md-8">
            ${renderDefintionTable(resume.skillsAndTools.techStack)}
            ${renderDefintionTable(resume.skillsAndTools.ryanStack)} 
          </div> 
        </div>   
      </section>

        ${renderNavNext("recent-work")}    
        <hr>

        <section id="development-experience">
        ${renderNavTop()}
        
          <div class="row mt-3 mb-5">
            <div class="co1-12 col-md-4 text-md-right">
              <h2>
                Development Experience
              </h2>
            </div>
            <div class="col-12 col-md-8">
              ${renderDefintionTable(resume.developmentExperience.slug)} 
            </div>    
          </div>    
        </section>

      ${renderNavNext("recent-work")}    
      <hr>        

        <section id="recent-work">
        ${renderNavTop()}

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
                            <button class="btn btn-link text-white" type="button"   data-toggle="collapse" data-target="#${activity.id}Collapse"   aria-expanded="${index !== 0 ? false : true}"
                              aria-controls="${activity.id}Collapse">
                              ${activity.name}
                            </button>
                          </h5>
                        </div>
                        <div id="${activity.id}Collapse" 
                          class="${index === 0 ? 'collapse show' : 'collapse'}"   aria-labelledby="${activity.id}"
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

        ${renderNavNext("management-experience")}
        <hr>

        <section id="management-experience">
        ${renderNavTop()}
        
        <div class="row mt-3 mb-5">
          <div class="co1-12 col-md-4 text-md-right">
            <h2>
              Management Experience
            </h2>
            <p class="text-muted">
              From 2005 until 2016
            </p>
          </div>
          <div class="col-12 col-md-8">
            ${resume.managementExperience.description.html}
            <div class="row man-exp-row justify-content-center mb-5">
              <div class="col-sm-2 col-3">
                <div class="list-group text-center" id="listManExp" role="tablist">
                  ${resume.managementExperience.chapters.map(
                    (chapter, index, arr) => { return `
                    <a class="list-group-item list-group-item-action 
                        ${ index === 0 ? 'rounded-0 active' 
                          : index === arr.length - 1 ? 'rounded-0'
                          : '' }" 
                        data-toggle="list" href="#${chapter.id}" role="tab">
                      ${chapter.name}
                    </a>
                    `}).join("")
                  } 
                </div>
              </div>
            <div class="col-8">
              <div class="tab-content">
                ${resume.managementExperience.chapters.map(
                  (chapter, index, arr) => { return `
                  <div 
                    class="${index === 0 ? 'active' : ''} tab-pane man-exp-text" 
                    id="${chapter.id}" role="tabpanel">
                      ${chapter.date}
                        ${chapter.position}
                          ${chapter.organisation}
                            ${chapter.location}
                              <br />
                              <hr />
                            ${chapter.highlight}
                  </div>
                  `}).join("")
                }
              </div>
            </div>
          </div>

          <h3>Tasks and Responsibilities</h3>
          <div class="accordion" id="listManTasks">
          ${resume.managementExperience.tasksAndResponsibilities.map(
            (task, index, arr) => { return `
            <div class="card rounded-0">
              <div class="card-header rounded-0 my-green-bg" id="${task.id}">
                <h5 class="mb-0">
                  <button class="btn btn-link text-white" type="button"data-toggle="collapse"   data-target="#${task.id}Collapse"aria-expanded="${index !== 0 ? false :   true}"
                    aria-controls="${task.id}Collapse">
                    ${task.name}
                  </button>
                </h5>
              </div>
              <div id="${task.id}Collapse" class="${index === 0 ? 'collapse show' :'collapse'}  " aria-labelledby="${task.id}"
                data-parent="#listManTasks">
                <div class="card-body">
                  <ul class="list-unstyled">
                    ${task.details.map((detail) => { return `
                      <li>
                        ${detail}
                      </li>
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
      </section>

      ${renderNavNext("training-education")}
      <hr>

      <section id="training-education">
      ${renderNavTop()}

      <div class="row mt-3 mb-5">
        <div class="co1-12 col-md-4 text-md-right">
          <h2>
            Education and Training
          </h2>
          <p class="text-muted">
            The 1990's
          </p>
        </div>
        <div class="col-12 col-md-8">
          ${resume.educationAndTraining.description.html}
          <div class="row">
            <div class="col">
              <div class="accordion" id="trainingList">
                ${resume.educationAndTraining.courses.map(
                  (course, index, arr) => { return `
                  <div class="card rounded-0">
                    <div class="card-header rounded-0 my-green-bg my-green-bg" 
                          id="${course.id}">
                      <h5 class="mb-0">
                        <button 
                          class="btn btn-link text-white" type="button"   data-toggle="collapse" data-target="#${course.id}Collapse"   aria-expanded="${index !== 0 ? false : true}"
                          aria-controls="${course.id}Collapse">
                          ${course.label}
                        </button>
                      </h5>
                    </div>
                    <div id="${course.id}Collapse" 
                      class="${index === 0 ? 'collapse show' : 'collapse'}"aria-labelledby="$    {course.id}"
                      data-parent="#trainingList">
                      <div class="card-body">
                        <dl class="row">
                          <dt class="col-4">
                            ${course.title}
                          </dt>
                          <dd class="col-8">
                            ${course.organisation}
                              <br>
                              ${course.location}
                                <br>
                                ${course.date}
                          </dd>
                        </dl>
                        <ul class="list-unstyled">
                          <li>
                            ${course.outcome}
                          </li>
                          <ul class="small muted">
                            ${course.details.map((detail) => { return `
                              <li>
                                ${detail}
                              </li>
                              `}).join("")
                              }
                          </ul>
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
          <hr>
        </div>
      </section>
    </section>`
};

function renderDefintionTable(item) { return `
    ${item.description.html}
    <dl class="row">
      ${item.details.map((detail) => { return `
      <dt class="col-sm-4">
        ${detail.term}
      </dt>
      <dd class="col-8">
        ${detail.definitions.join(", ")}
      </dd>
      `}).join("")
    }
    </dl>`
}; 

function renderFooter(resume) {
  return `
    <div class="container">
      <div class="row justify-content-end">
        <div class="col-1">
          <nav class="nav justify-content-end">
            <a class="nav-link" href="#top">
              <small>top</small>
            </a>
          </nav>
        </div>
      </div>
      <div class="row py-md-5 pb-sm-5 pt-sm-3 pt-0 pb-3">
        <div class="col-10 offset-2 col-md-4 offset-md-0 text-md-right">
          <h3>
            Contact
          </h3>
        </div>
        <div class="col-10 offset-2 offset-md-0 col-md-4 col-lg-3">
          ${resume.address.html}
        </div>
        <div class="col-10 offset-2 offset-md-0 col-md-4">
          <p>
            <a    href="https://www.linkedin.com/in/ryanjamesoshea/">linkedin.com/ryanjamesoshea</a>
            <br>
            <a href="https://www.exitroute.org" target="_blank">www.exitroute.org</a>
            <br>
            <a href="https://github.com/exitroute">github.com/exitroute</a>
            <br>
          </p>
        </div>
      </div>
    </div>`
  }

function renderNavTop() { 
  return `
    <div class="row justify-content-end">
      <div class="col-1">
        <nav class="nav justify-content-end">
          <a class="nav-link" href="#top">
            <small>top</small>
          </a>
        </nav>
      </div>
    </div>` 
};

function renderNavNext(navItem) {
  return `
    <div class="row justify-content-end">
      <div class="col-1">
        <nav class="nav justify-content-end">
          <a class="nav-link" href="#${navItem}">
            <small>next</small>
          </a>
        </nav>
      </div>
    </div>`
};