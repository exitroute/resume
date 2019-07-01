/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/index.js":
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

__webpack_require__(/*! ../scss/style.scss */ "./src/assets/scss/style.scss");

console.log("hello from js");

var form = document.querySelector(".auth-form");

form.addEventListener("submit", function (e) {

  e.preventDefault();
  console.log("token sent");

  document.querySelector("div.container > form").setAttribute("class", "d-none");
  document.querySelector("div.container > hr").setAttribute("class", "d-none");

  fetch("http://localhost:3000" + "/auth", {

    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + new URLSearchParams(window.location.search).get("token")
    }
  }).then(function (res) {
    return res.json();
  }).then(function (res) {
    var resumeData = renderResume(res.payload);
    var contactData = renderFooter(res.payload);
    document.querySelector("main.container").innerHTML = resumeData;
    document.querySelector("#contact").innerHTML = contactData;
  });
});

function renderResume(resume) {
  return "\n    <section class=\"main-content\">\n      <section class=\"row mt-5\" id=\"about\">\n        <div class=\"co1-12 col-md-4 text-md-right\">\n          <h2>\n            About\n          </h2>\n        </div>\n        <div class=\"col-12 col-md-8\">\n            " + resume.about.description.html + "  \n          <dl class=\"row\">\n            " + resume.about.overview.map(function (entry) {
    return "\n            <dt class=\"col-sm-4\">" + entry.stage + "</dt>\n            <dd class=\"col-8\">" + entry.name + "<br>" + entry.detail + "</dd>";
  }).join("") + "\n          </dl>\n        </div>\n      </section>\n\n      " + renderNavNext("skills-and-tools") + "\n      <hr>\n      <section id=\"skills-and-tools\">\n        " + renderNavTop() + "\n        \n        <div class=\"row mt-3 mb-5\">\n          <div class=\"co1-12 col-md-4 text-md-right\">\n            <h2>\n              Skills and Tools\n            </h2>\n          </div>\n          <div class=\"col-12 col-md-8\">\n            " + renderDefintionTable(resume.skillsAndTools.techStack) + "\n            " + renderDefintionTable(resume.skillsAndTools.ryanStack) + " \n          </div> \n        </div>   \n      </section>\n\n      " + renderNavNext("recent-work") + "    \n      <hr>\n\n      <section id=\"development-experience\">\n      " + renderNavTop() + "\n      \n        <div class=\"row mt-3 mb-5\">\n          <div class=\"co1-12 col-md-4 text-md-right\">\n            <h2>\n              Development Experience\n            </h2>\n          </div>\n          <div class=\"col-12 col-md-8\">\n            " + renderDefintionTable(resume.developmentExperience.slug) + " \n          </div>    \n        </div>    \n      </section>\n\n      " + renderNavNext("recent-work") + "    \n      <hr>        \n\n        <section id=\"recent-work\">\n        " + renderNavTop() + "\n\n          <div class=\"row mt-3 mb-5\">\n            <div class=\"co1-12 col-md-4 text-md-right\">\n              <h2>\n                Recent Work\n              </h2>\n              <p class=\"text-muted\">\n                Since July 2016\n              </p>\n            </div>\n\n            <div class=\"col-12 col-md-8\">\n              " + resume.recentWork.description.html + "\n              <div class=\"row\">\n                <div class=\"col\">\n                  <div class=\"accordion\" id=\"recentwork-list\">\n                    " + resume.recentWork.activities.map(function (activity, index) {
    return "\n                      <div class=\"card rounded-0\">\n                        <div class=\"card-header rounded-0 my-green-bg\" id \"" + activity.id + "\">\n                          <h5 class=\"mb-0\">\n                            <button class=\"btn btn-link text-white\" type=\"button\"   data-toggle=\"collapse\" data-target=\"#" + activity.id + "Collapse\"   aria-expanded=\"" + (index !== 0 ? false : true) + "\"\n                              aria-controls=\"" + activity.id + "Collapse\">\n                              " + activity.name + "\n                            </button>\n                          </h5>\n                        </div>\n                        <div id=\"" + activity.id + "Collapse\" \n                          class=\"" + (index === 0 ? 'collapse show' : 'collapse') + "\"   aria-labelledby=\"" + activity.id + "\"\n                          data-parent=\"#recentwork-list\">\n                          <div class=\"card-body\">\n                            <ul class=\"list-unstyled\">\n                              " + activity.details.map(function (detail) {
      return "\n                                <li>\n                                  " + detail.description + "\n                                </li>\n                                <ul class=\"list-unstyled\">\n                                  <li>\n                                    <i>\n                                      " + detail.date + "\n                                    </i>\n                                  </li>\n                                </ul>\n                                ";
    }).join("") + "\n                            </ul>\n                          </div>\n                        </div>\n                      </div>\n                      ";
  }).join("") + "\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </section>\n\n        " + renderNavNext("management-experience") + "\n        <hr>\n\n        <section id=\"management-experience\">\n        " + renderNavTop() + "\n        \n        <div class=\"row mt-3 mb-5\">\n          <div class=\"co1-12 col-md-4 text-md-right\">\n            <h2>\n              Management Experience\n            </h2>\n            <p class=\"text-muted\">\n              From 2005 until 2016\n            </p>\n          </div>\n          <div class=\"col-12 col-md-8\">\n            " + resume.managementExperience.description.html + "\n            <div class=\"row man-exp-row justify-content-center mb-5\">\n              <div class=\"col-sm-2 col-3\">\n                <div class=\"list-group text-center\" id=\"listManExp\" role=\"tablist\">\n                  " + resume.managementExperience.chapters.map(function (chapter, index, arr) {
    return "\n                    <a class=\"list-group-item list-group-item-action \n                        " + (index === 0 ? 'rounded-0 active' : index === arr.length - 1 ? 'rounded-0' : '') + "\" \n                        data-toggle=\"list\" href=\"#" + chapter.id + "\" role=\"tab\">\n                      " + chapter.name + "\n                    </a>\n                    ";
  }).join("") + " \n                </div>\n              </div>\n            <div class=\"col-8\">\n              <div class=\"tab-content\">\n                " + resume.managementExperience.chapters.map(function (chapter, index, arr) {
    return "\n                  <div \n                    class=\"" + (index === 0 ? 'active' : '') + " tab-pane man-exp-text\" \n                    id=\"" + chapter.id + "\" role=\"tabpanel\">\n                      " + chapter.date + "\n                        " + chapter.position + "\n                          " + chapter.organisation + "\n                            " + chapter.location + "\n                              <br />\n                              <hr />\n                            " + chapter.highlight + "\n                  </div>\n                  ";
  }).join("") + "\n              </div>\n            </div>\n          </div>\n\n          <h3>Tasks and Responsibilities</h3>\n          <div class=\"accordion\" id=\"listManTasks\">\n          " + resume.managementExperience.tasksAndResponsibilities.map(function (task, index, arr) {
    return "\n            <div class=\"card rounded-0\">\n              <div class=\"card-header rounded-0 my-green-bg\" id=\"" + task.id + "\">\n                <h5 class=\"mb-0\">\n                  <button class=\"btn btn-link text-white\" type=\"button\"data-toggle=\"collapse\"   data-target=\"#" + task.id + "Collapse\"aria-expanded=\"" + (index !== 0 ? false : true) + "\"\n                    aria-controls=\"" + task.id + "Collapse\">\n                    " + task.name + "\n                  </button>\n                </h5>\n              </div>\n              <div id=\"" + task.id + "Collapse\" class=\"" + (index === 0 ? 'collapse show' : 'collapse') + "  \" aria-labelledby=\"" + task.id + "\"\n                data-parent=\"#listManTasks\">\n                <div class=\"card-body\">\n                  <ul class=\"list-unstyled\">\n                    " + task.details.map(function (detail) {
      return "\n                      <li>\n                        " + detail + "\n                      </li>\n                      ";
    }).join("") + "\n                  </ul>\n                </div>\n              </div>\n            </div>\n            ";
  }).join("") + "\n          </div>\n        </div>\n      </section>\n\n      " + renderNavNext("training-education") + "\n      <hr>\n\n      <section id=\"training-education\">\n      " + renderNavTop() + "\n\n      <div class=\"row mt-3 mb-5\">\n        <div class=\"co1-12 col-md-4 text-md-right\">\n          <h2>\n            Education and Training\n          </h2>\n          <p class=\"text-muted\">\n            The 1990's\n          </p>\n        </div>\n        <div class=\"col-12 col-md-8\">\n          " + resume.educationAndTraining.description.html + "\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"accordion\" id=\"trainingList\">\n                " + resume.educationAndTraining.courses.map(function (course, index, arr) {
    return "\n                  <div class=\"card rounded-0\">\n                    <div class=\"card-header rounded-0 my-green-bg my-green-bg\" \n                          id=\"" + course.id + "\">\n                      <h5 class=\"mb-0\">\n                        <button \n                          class=\"btn btn-link text-white\" type=\"button\"   data-toggle=\"collapse\" data-target=\"#" + course.id + "Collapse\"   aria-expanded=\"" + (index !== 0 ? false : true) + "\"\n                          aria-controls=\"" + course.id + "Collapse\">\n                          " + course.label + "\n                        </button>\n                      </h5>\n                    </div>\n                    <div id=\"" + course.id + "Collapse\" \n                      class=\"" + (index === 0 ? 'collapse show' : 'collapse') + "\"aria-labelledby=\"$    {course.id}\"\n                      data-parent=\"#trainingList\">\n                      <div class=\"card-body\">\n                        <dl class=\"row\">\n                          <dt class=\"col-4\">\n                            " + course.title + "\n                          </dt>\n                          <dd class=\"col-8\">\n                            " + course.organisation + "\n                              <br>\n                              " + course.location + "\n                                <br>\n                                " + course.date + "\n                          </dd>\n                        </dl>\n                        <ul class=\"list-unstyled\">\n                          <li>\n                            " + course.outcome + "\n                          </li>\n                          <ul class=\"small muted\">\n                            " + course.details.map(function (detail) {
      return "\n                              <li>\n                                " + detail + "\n                              </li>\n                              ";
    }).join("") + "\n                          </ul>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                  ";
  }).join("") + "\n                </div>\n              </div>\n            </div>\n          </div>\n          <hr>\n        </div>\n      </section>\n    </section>";
};

function renderDefintionTable(item) {
  return "\n    " + item.description.html + "\n    <dl class=\"row\">\n      " + item.details.map(function (detail) {
    return "\n      <dt class=\"col-sm-4\">\n        " + detail.term + "\n      </dt>\n      <dd class=\"col-8\">\n        \n        " + (_typeof(detail.definitions[0]) === "object" ? detail.definitions.map(function (item) {
      return "\n          <dl>\n            <dt>" + item.name + "</dt>\n            <dd>" + item.description.join(",<br>") + "</dd>\n          </dl>\n          ";
    }).join("") : detail.definitions.join(", ")) + "\n      </dd>\n      ";
  }).join("") + "\n    </dl>";
};

function renderFooter(resume) {
  return "\n    <div class=\"container\">\n      <div class=\"row justify-content-end\">\n        <div class=\"col-1\">\n          <nav class=\"nav justify-content-end\">\n            <a class=\"nav-link\" href=\"#top\">\n              <small>top</small>\n            </a>\n          </nav>\n        </div>\n      </div>\n      <div class=\"row py-md-5 pb-sm-5 pt-sm-3 pt-0 pb-3\">\n        <div class=\"col-10 offset-2 col-md-4 offset-md-0 text-md-right\">\n          <h3>\n            Contact\n          </h3>\n        </div>\n        <div class=\"col-10 offset-2 offset-md-0 col-md-4 col-lg-3\">\n          " + resume.address.html + "\n        </div>\n        <div class=\"col-10 offset-2 offset-md-0 col-md-4\">\n          <p>\n            <a    href=\"https://www.linkedin.com/in/ryanjamesoshea/\">linkedin.com/ryanjamesoshea</a>\n            <br>\n            <a href=\"https://www.exitroute.org\" target=\"_blank\">www.exitroute.org</a>\n            <br>\n            <a href=\"https://github.com/exitroute\">github.com/exitroute</a>\n            <br>\n          </p>\n        </div>\n      </div>\n    </div>";
}

function renderNavTop() {
  return "\n    <div class=\"row justify-content-end\">\n      <div class=\"col-1\">\n        <nav class=\"nav justify-content-end\">\n          <a class=\"nav-link\" href=\"#top\">\n            <small>top</small>\n          </a>\n        </nav>\n      </div>\n    </div>";
};

function renderNavNext(navItem) {
  return "\n    <div class=\"row justify-content-end\">\n      <div class=\"col-1\">\n        <nav class=\"nav justify-content-end\">\n          <a class=\"nav-link\" href=\"#" + navItem + "\">\n            <small>next</small>\n          </a>\n        </nav>\n      </div>\n    </div>";
};

/***/ }),

/***/ "./src/assets/scss/style.scss":
/*!************************************!*\
  !*** ./src/assets/scss/style.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map