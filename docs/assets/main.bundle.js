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

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./src/assets/js/index.js":
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

__webpack_require__(/*! ../scss/style.scss */ "./src/assets/scss/style.scss");

console.log("hello from js");

var form = document.querySelector(".auth-form");

form.addEventListener("submit", function (e) {

  e.preventDefault();
  console.log("token sent");

  document.querySelector("div.container > form").setAttribute("class", "d-none");
  document.querySelector("div.container > hr").setAttribute("class", "d-none");

  fetch(process.env.API_URL + "/auth", {

    method: "POST",
    mode: "no-cors",
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

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