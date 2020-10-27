(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["LetterLoading"] = factory();
	else
		root["LetterLoading"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/letterloading.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/defaults.js":
/*!*************************!*\
  !*** ./src/defaults.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const defaults = {
  loadspeed: 9,
  defaultspeed: 8,
  char: "-",
  hideChaar: true,
  delay: 2500,
  loop: true
};
/* harmony default export */ __webpack_exports__["default"] = (defaults);

/***/ }),

/***/ "./src/letterloading.js":
/*!******************************!*\
  !*** ./src/letterloading.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LetterLoading; });
/* harmony import */ var _loadinitializer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadinitializer.js */ "./src/loadinitializer.js");

/**
 * Hey, tell me you love to simulate letter loading...
 * 
 * @param {string} el, this can be an HMTL element ID or element
 * @param {object} options options is an object that has some of the requirements...check './defaults.js to learn more
 * @returns {object} a new LetterLoading object
 */

class LetterLoading {
  constructor(el, options) {
    _loadinitializer_js__WEBPACK_IMPORTED_MODULE_0__["loadinitializer"].load(this, el, options);
    this.beginAnimation();
  }

  destroy() {
    this.reset(false); //this.options.onDestroy(this);
  }

  reset(restart = true) {
    clearInterval(this.timeout);
    this.insertText('');
    this.currentStrPos = 0;
    this.ArrayIndex = 0;
  }

  beginAnimation() {
    // (this)=> {}
    this.timeout = setTimeout(() => {
      // get a random string from options.STRINGS array if _shuffle is true   
      this.randomMize(); //this.random();

      this.beginAnime(this.currentStrPos, this.strings[this.ArrayIndex]);
    }, 500);
  }

  beginAnime(i, curr, str = []) {
    // set this.currentString to the passed string args
    this.currentString = curr; // creates a randomArray element usable to suff our strings

    this.random(); // start our funny fetching strings

    this.startFetching(i, curr, str);
  }

  startFetching(i, curr, str) {
    // increase the speed at some point
    if (i >= curr.length / 3) {
      this.loadSpeed = this.loadSpeed - 2;
    } // get default speed
    // make a simulating speed


    const humanize = this.humanize(this.loadSpeed); // check state if its empty

    if (Object.keys(str).length === 0) str = this.getSudoStringArray(curr.length, this.char);

    if (i > curr.length - 1) {
      this.ArrayIndex++;
      this.currentStrPos = 0;
      this.loadSpeed = this.defaultSpeed; // console.log(this.strings[this.ArrayIndex])

      if (this.ArrayIndex === this.strings.length) {
        if (!this.loop) return;
        this.ArrayIndex = 0;
        this.timeout = setTimeout(() => {
          this.beginAnimation();
        }, this.delay);
      } else {
        this.timeout = setTimeout(() => {
          this.beginAnime(this.currentStrPos, this.strings[this.ArrayIndex]);
        }, this.delay);
      }
    } else {
      i++;
      this.timeout = setTimeout(() => {
        this.doAnime(str, i);
      }, humanize);
    }
  }

  doAnime(str, i) {
    //let currstr = '"'+this.currentString+'"'
    str[this.randomEl[i - 1]] = this.currentString[this.randomEl[i - 1]];
    let newstr = str.join("");
    this.insertText(newstr);
    this.startFetching(i, this.currentString, str);
  }

  getSudoStringArray(length, char) {
    let initialArrayContent = [];

    for (let i = 0; i < length; i++) {
      initialArrayContent.push(char);
    }

    return initialArrayContent;
  }

  getStringKeysIntoArray(stringlength) {
    let strings = [];

    for (let i = 0; i < stringlength; i++) {
      strings.push(i);
    }

    return strings;
  }

  random() {
    const randomEl = this.getStringKeysIntoArray(this.currentString.length);
    this.randomEl = randomEl.sort(() => Math.random() - 0.5);
  }

  humanize(speed) {
    return Math.round(Math.random() * (speed * 100) / 2) + speed * 100;
  }

  insertText(str) {
    this.el.innerHTML = str;
  }

  randomMize() {
    if (!this._shuffle) return;
    this.sequence = this.sequence.sort(() => Math.random() - 0.5);
  }

}

/***/ }),

/***/ "./src/loadinitializer.js":
/*!********************************!*\
  !*** ./src/loadinitializer.js ***!
  \********************************/
/*! exports provided: default, loadinitializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoadInitializer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadinitializer", function() { return loadinitializer; });
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaults.js */ "./src/defaults.js");

class LoadInitializer {
  load(self, el, options) {
    if (typeof el === "string") {
      self.el = document.querySelector(el);
    } else {
      self.el = el;
    } // make options from default s and the rest


    self.options = { ..._defaults_js__WEBPACK_IMPORTED_MODULE_0__["default"],
      ...options
    };
    self.initialElContent = self.el.textContent; //loading speed

    self.loadSpeed = self.options.loadspeed; // generate default speed

    self.defaultSpeed = self.options.defaultspeed; //loop

    self.loop = self.options.loop; // strings

    self.strings = self.options.strings; //current string position

    self.currentStrPos = 0; //default shuffling

    self._shuffle = false; // bind currentString

    self.currentString; // get randomelement

    self.randomEl; // hidden char to fill space

    self.char = self.options.char; //if hide char

    self.hideChar = self.options.hideChaar; // array index

    self.ArrayIndex = 0; // delay before continuing to loop over string

    self.delay = self.options.delay; // stringlength
    // get order in which strings appeared in array

    self.sequence = [];

    for (let i in self.strings) {
      self.sequence[i] = i;
    }

    this.appendCsstoHead(self);
    this.hideCharByForce(self);
  }

  hideCharByForce(self) {
    if (!self.hideChar) return;
    self.char = `<span class="data-hide">${self.char}</span>`;
  }

  appendCsstoHead(self) {
    const cssname = "data-hide";

    if (!self.hideChar) {
      return;
    }

    if (document.querySelector(`[${cssname}]`)) {
      return;
    }

    let css = document.createElement("style");
    css.type = "text/css";
    css.setAttribute(cssname, true);
    let innerCss = "";

    if (self.hideChar) {
      innerCss += `
              .data-hide{
                opacity: 0;}`;
    }

    if (css.length === 0) {
      return;
    }

    css.innerHTML = innerCss;
    document.body.appendChild(css);
  }

}
let loadinitializer = new LoadInitializer();

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=letterloading.js.map