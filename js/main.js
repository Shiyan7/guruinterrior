/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/components/quill.js":
/*!****************************************!*\
  !*** ./src/blocks/components/quill.js ***!
  \****************************************/
/*! exports provided: QuillEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuillEditor", function() { return QuillEditor; });
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill */ "./node_modules/quill/dist/quill.js");
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill__WEBPACK_IMPORTED_MODULE_0__);

var QuillEditor = function QuillEditor(quillElement) {
  if (quillElement) {
    var quill = new quill__WEBPACK_IMPORTED_MODULE_0___default.a(quillElement, {
      placeholder: 'Описание проекта',
      modules: {
        toolbar: '.toolbar'
      }
    });
  }
};

/***/ }),

/***/ "./src/blocks/components/select.js":
/*!*****************************************!*\
  !*** ./src/blocks/components/select.js ***!
  \*****************************************/
/*! exports provided: initializeSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeSelect", function() { return initializeSelect; });
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! choices.js */ "./node_modules/choices.js/public/assets/scripts/choices.js");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_0__);

var selects = document.querySelectorAll(".select");
document.addEventListener("DOMContentLoaded", function () {
  if (selects) {
    selects.forEach(function (el) {
      if (el.classList.contains("select") && !el.classList.contains("choices__input")) {
        initializeSelect(el);
      }
    });
  }
});
var initializeSelect = function initializeSelect(select) {
  var choices = new choices_js__WEBPACK_IMPORTED_MODULE_0___default.a(select, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false
  });
};

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/burger.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/burger.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", function () {
  var burger = document.querySelector(".burger");
  var nav = document.querySelector(".nav");
  var overlay = document.querySelector(".overlay");
  var body = document.body;

  if (burger && nav) {
    var menuClose = function menuClose() {
      burger.classList.toggle("burger--close");
      nav.classList.toggle("nav--open");
      body.classList.toggle("lock");
      overlay.classList.toggle("overlay--show");
    };

    overlay.addEventListener("click", function () {
      if (nav.classList.contains("nav--open")) {
        menuClose();
      }
    });
    burger.addEventListener("click", menuClose);
  }
});

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/user.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/header/user.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", function () {
  var dropdownBtn = document.querySelectorAll(".dropdown__btn");
  var overlay = document.querySelector(".overlay");
  dropdownBtn === null || dropdownBtn === void 0 ? void 0 : dropdownBtn.forEach(function (el) {
    el.addEventListener("click", function () {
      overlay.style.cssText = "opacity: 1; visibility: visible;";
      el.parentElement.querySelector(".dropdown").classList.add("is-open");

      if (el.classList.contains("user__btn")) {
        el.classList.add("user__btn--active");
      }
    });
    overlay === null || overlay === void 0 ? void 0 : overlay.addEventListener("click", function () {
      overlay.style.cssText = "";
      el.parentElement.querySelector(".dropdown").classList.remove("is-open");

      if (el.classList.contains("user__btn")) {
        el.classList.remove("user__btn--active");
      }
    });
  });
});

/***/ }),

/***/ "./src/blocks/modules/hero/hero.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/hero/hero.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* import swiper from "swiper/bundle"; */

/***/ }),

/***/ "./src/blocks/modules/login/validate-form.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/login/validate-form.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {

function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

(function () {
  var typesToPatch = ['DocumentType', 'Element', 'CharacterData'],
      remove = function remove() {
    // The check here seems pointless, since we're not adding this
    // method to the prototypes of any any elements that CAN be the
    // root of the DOM. However, it's required by spec (see point 1 of
    // https://dom.spec.whatwg.org/#dom-childnode-remove) and would
    // theoretically make a difference if somebody .apply()ed this
    // method to the DOM's root node, so let's roll with it.
    if (this.parentNode != null) {
      this.parentNode.removeChild(this);
    }
  };

  for (var i = 0; i < typesToPatch.length; i++) {
    var type = typesToPatch[i];

    if (window[type] && !window[type].prototype.remove) {
      window[type].prototype.remove = remove;
    }
  }
})();

(function (root) {
  // Store setTimeout reference so promise-polyfill will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var setTimeoutFunc = setTimeout;

  function noop() {} // Polyfill for Function.prototype.bind


  function bind(fn, thisArg) {
    return function () {
      fn.apply(thisArg, arguments);
    };
  }

  function Promise(fn) {
    if (_typeof(this) !== 'object') throw new TypeError('Promises must be constructed via new');
    if (typeof fn !== 'function') throw new TypeError('not a function');
    this._state = 0;
    this._handled = false;
    this._value = undefined;
    this._deferreds = [];
    doResolve(fn, this);
  }

  function handle(self, deferred) {
    while (self._state === 3) {
      self = self._value;
    }

    if (self._state === 0) {
      self._deferreds.push(deferred);

      return;
    }

    self._handled = true;

    Promise._immediateFn(function () {
      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;

      if (cb === null) {
        (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
        return;
      }

      var ret;

      try {
        ret = cb(self._value);
      } catch (e) {
        reject(deferred.promise, e);
        return;
      }

      resolve(deferred.promise, ret);
    });
  }

  function resolve(self, newValue) {
    try {
      // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
      if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');

      if (newValue && ((typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) === 'object' || typeof newValue === 'function')) {
        var then = newValue.then;

        if (newValue instanceof Promise) {
          self._state = 3;
          self._value = newValue;
          finale(self);
          return;
        } else if (typeof then === 'function') {
          doResolve(bind(then, newValue), self);
          return;
        }
      }

      self._state = 1;
      self._value = newValue;
      finale(self);
    } catch (e) {
      reject(self, e);
    }
  }

  function reject(self, newValue) {
    self._state = 2;
    self._value = newValue;
    finale(self);
  }

  function finale(self) {
    if (self._state === 2 && self._deferreds.length === 0) {
      Promise._immediateFn(function () {
        if (!self._handled) {
          Promise._unhandledRejectionFn(self._value);
        }
      });
    }

    for (var i = 0, len = self._deferreds.length; i < len; i++) {
      handle(self, self._deferreds[i]);
    }

    self._deferreds = null;
  }

  function Handler(onFulfilled, onRejected, promise) {
    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
    this.promise = promise;
  }
  /**
   * Take a potentially misbehaving resolver function and make sure
   * onFulfilled and onRejected are only called once.
   *
   * Makes no guarantees about asynchrony.
   */


  function doResolve(fn, self) {
    var done = false;

    try {
      fn(function (value) {
        if (done) return;
        done = true;
        resolve(self, value);
      }, function (reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      });
    } catch (ex) {
      if (done) return;
      done = true;
      reject(self, ex);
    }
  }

  Promise.prototype['catch'] = function (onRejected) {
    return this.then(null, onRejected);
  };

  Promise.prototype.then = function (onFulfilled, onRejected) {
    var prom = new this.constructor(noop);
    handle(this, new Handler(onFulfilled, onRejected, prom));
    return prom;
  };

  Promise.all = function (arr) {
    var args = Array.prototype.slice.call(arr);
    return new Promise(function (resolve, reject) {
      if (args.length === 0) return resolve([]);
      var remaining = args.length;

      function res(i, val) {
        try {
          if (val && ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' || typeof val === 'function')) {
            var then = val.then;

            if (typeof then === 'function') {
              then.call(val, function (val) {
                res(i, val);
              }, reject);
              return;
            }
          }

          args[i] = val;

          if (--remaining === 0) {
            resolve(args);
          }
        } catch (ex) {
          reject(ex);
        }
      }

      for (var i = 0; i < args.length; i++) {
        res(i, args[i]);
      }
    });
  };

  Promise.resolve = function (value) {
    if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.constructor === Promise) {
      return value;
    }

    return new Promise(function (resolve) {
      resolve(value);
    });
  };

  Promise.reject = function (value) {
    return new Promise(function (resolve, reject) {
      reject(value);
    });
  };

  Promise.race = function (values) {
    return new Promise(function (resolve, reject) {
      for (var i = 0, len = values.length; i < len; i++) {
        values[i].then(resolve, reject);
      }
    });
  }; // Use polyfill for setImmediate for performance gains


  Promise._immediateFn = typeof setImmediate === 'function' && function (fn) {
    setImmediate(fn);
  } || function (fn) {
    setTimeoutFunc(fn, 0);
  };

  Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
    if (typeof console !== 'undefined' && console) {
      console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
    }
  };
  /**
   * Set the immediate function to execute callbacks
   * @param fn {function} Function to execute
   * @deprecated
   */


  Promise._setImmediateFn = function _setImmediateFn(fn) {
    Promise._immediateFn = fn;
  };
  /**
   * Change the function to execute on unhandled rejection
   * @param {function} fn Function to execute on unhandled rejection
   * @deprecated
   */


  Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
    Promise._unhandledRejectionFn = fn;
  };

  if ( true && module.exports) {
    module.exports = Promise;
  } else if (!root.Promise) {
    root.Promise = Promise;
  }
})(window);
/* global Promise */


(function (window) {
  'use strict';

  if (!window.Promise) {
    window.Promise = Promise;
  }

  var RULE_REQUIRED = 'required',
      RULE_EMAIL = 'email',
      RULE_MINLENGTH = 'minLength',
      RULE_MAXLENGTH = 'maxLength',
      RULE_PASSWORD = 'password',
      RULE_ZIP = 'zip',
      RULE_PHONE = 'phone',
      RULE_REMOTE = 'remote',
      RULE_STRENGTH = 'strength',
      RULE_FUNCTION = 'function';

  var formatParams = function formatParams(params, method) {
    if (typeof params === 'string') {
      return params;
    }

    var letter = method.toLowerCase() === 'post' ? '' : '?';

    if (Array.isArray(params)) {
      return letter + params.map(function (obj) {
        return obj.name + '=' + obj.value;
      }).join('&');
    }

    return letter + Object.keys(params).map(function (key) {
      return key + '=' + params[key];
    }).join('&');
  };

  var ajax = function ajax(options) {
    var url = options.url,
        method = options.method,
        data = options.data,
        debug = options.debug,
        callback = options.callback,
        error = options.error;

    if (debug) {
      callback('test');
      return;
    }

    var async = options.async === false ? false : true;
    var xhr = new XMLHttpRequest();
    var params = formatParams(data, 'get');
    var body = null;

    if (method.toLowerCase() === 'post') {
      body = formatParams(data, 'post');
      params = '';
    }

    xhr.open(method, url + params, async);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          callback(this.responseText);
        } else {
          error && error(this.responseText);
        }
      }
    };

    xhr.send(body);
  };

  var JustValidate = function JustValidate(selector, options) {
    this.options = options || {};
    this.rules = this.options.rules || {};
    this.messages = this.options.messages || undefined;
    this.colorWrong = this.options.colorWrong || '#B81111';
    this.result = {};
    this.elements = [];
    this.tooltip = this.options.tooltip || {};
    this.tooltipFadeOutTime = this.tooltip.fadeOutTime || 5000;
    this.tooltipFadeOutClass = this.tooltip.fadeOutClass || 'just-validate-tooltip-hide';
    this.tooltipSelectorWrap = document.querySelectorAll(this.tooltip.selectorWrap).length ? document.querySelectorAll(this.tooltip.selectorWrap) : document.querySelectorAll('.just-validate-tooltip-container');
    this.bindHandlerKeyup = this.handlerKeyup.bind(this);
    this.submitHandler = this.options.submitHandler || undefined;
    this.invalidFormCallback = this.options.invalidFormCallback || undefined;
    this.promisesRemote = [];
    this.isValidationSuccess = false;
    this.focusWrongField = this.options.focusWrongField || false;
    this.REGEXP = {
      // eslint-disable-next-line max-len
      email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      zip: /^\d{5}(-\d{4})?$/,
      phone: /^([0-9]( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{7})$/,
      password: /[^\w\d]*(([0-9]+.*[A-Za-z]+.*)|[A-Za-z]+.*([0-9]+.*))/,
      strengthPass: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/
    };
    this.DEFAULT_REMOTE_ERROR = 'Error';
    this.state = {
      tooltipsTimer: null
    };
    this.setForm(document.querySelector(selector));
  };

  JustValidate.prototype = {
    defaultRules: {
      email: {
        required: true,
        email: true
      },
      name: {
        required: true,
        minLength: 3,
        maxLength: 15
      },
      text: {
        required: true,
        maxLength: 300,
        minLength: 5
      },
      password: {
        required: true,
        password: true,
        minLength: 4,
        maxLength: 8
      },
      zip: {
        required: true,
        zip: true
      },
      phone: {
        phone: true
      }
    },
    defaultMessages: {
      required: 'Поле обязательно для заполнения',
      email: 'Пожалуйста, введите правильный адрес электронной почты',
      maxLength: 'The field must contain a maximum of :value characters',
      minLength: 'The field must contain a minimum of :value characters',
      password: 'Password is not valid',
      remote: 'Email already exists',
      strength: 'Password must contents at least one uppercase letter, one lowercase letter and one number',
      function: 'Function returned false'
    },

    /**
     * Keyup handler
     * @param ev
     */
    handlerKeyup: function handlerKeyup(ev) {
      var elem = ev.target,
          item = {
        name: elem.getAttribute('data-validate-field'),
        value: elem.value
      };
      delete this.result[item.name];
      this.validateItem({
        name: item.name,
        value: item.value,
        group: [],
        isKeyupChange: true
      });
      this.renderErrors();
    },
    setterEventListener: function setterEventListener(item, event, handler, type) {
      if (event === 'keyup') {
        handler = this.bindHandlerKeyup;
      }

      switch (type) {
        case 'add':
          {
            item.addEventListener(event, handler);
            break;
          }

        case 'remove':
          {
            item.removeEventListener(event, handler);
            break;
          }
      }
    },
    getElementsRealValue: function getElementsRealValue() {
      var $elems = this.$form.querySelectorAll('*'),
          name = void 0,
          result = {};

      for (var i = 0, len = $elems.length; i < len; ++i) {
        name = $elems[i].getAttribute('name');

        if (name) {
          if ($elems[i].type === 'checkbox') {
            result[name] = $elems[i].checked;
            continue;
          }

          result[name] = $elems[i].value;
        }
      }

      return result;
    },
    validationFailed: function validationFailed() {
      if (this.invalidFormCallback) {
        this.invalidFormCallback(this.result);
      }

      var $firstErrorField = document.querySelector('.js-validate-error-field');

      if (this.focusWrongField && $firstErrorField && $firstErrorField.focus) {
        $firstErrorField.focus();
      }
    },
    validationSuccess: function validationSuccess() {
      if (Object.keys(this.result).length === 0) {
        this.isValidationSuccess = false;

        if (this.submitHandler) {
          var realValues = this.getElementsRealValue();
          this.submitHandler(this.$form, realValues, ajax);
          return;
        }

        this.$form.submit();
      }
    },
    setForm: function setForm(form) {
      var _this = this;

      this.$form = form;
      this.$form.setAttribute('novalidate', 'novalidate');
      this.$form.addEventListener('submit', function (ev) {
        ev.preventDefault();
        _this.result = [];

        _this.getElements();

        if (!_this.promisesRemote.length) {
          if (_this.isValidationSuccess) {
            _this.validationSuccess();
          } else {
            _this.validationFailed();
          }

          return;
        }

        Promise.all(_this.promisesRemote).then(function () {
          _this.promisesRemote = [];

          if (_this.isValidationSuccess) {
            _this.validationSuccess();
          } else {
            _this.validationFailed();
          }
        });
      });
    },
    isEmail: function isEmail(email) {
      return this.REGEXP.email.test(email);
    },
    isZip: function isZip(zip) {
      return this.REGEXP.zip.test(zip);
    },
    isPhone: function isPhone(phone) {
      return this.REGEXP.phone.test(phone);
    },
    isPassword: function isPassword(password) {
      return this.REGEXP.password.test(password);
    },
    isEmpty: function isEmpty(val) {
      var newVal = val;

      if (val.trim) {
        newVal = val.trim();
      }

      return !newVal;
    },
    checkLengthMax: function checkLengthMax(text, max) {
      return text.length <= max;
    },
    checkLengthMin: function checkLengthMin(text, min) {
      return text.length >= min;
    },
    checkStrengthPass: function checkStrengthPass(password) {
      return this.REGEXP.strengthPass.test(password);
    },
    getElements: function getElements() {
      var _this2 = this;

      var elems = this.$form.querySelectorAll('[data-validate-field]');
      this.elements = [];

      var _loop = function _loop(i, len) {
        var item = elems[i],
            name = item.getAttribute('data-validate-field'),
            value = item.value,
            isElemInGroup = false,
            group = [];

        if (item.type === 'checkbox') {
          value = item.checked || '';
          item.addEventListener('change', function (ev) {
            var elem = ev.target,
                item = {
              name: elem.getAttribute('data-validate-field'),
              value: elem.checked
            };
            delete _this2.result[item.name];

            _this2.validateItem({
              name: item.name,
              value: item.value,
              group: []
            });

            _this2.renderErrors();
          });
        }

        if (item.type === 'radio') {
          var findElem = _this2.elements.filter(function (item) {
            if (item.name === name) {
              return item;
            }
          })[0];

          if (findElem) {
            findElem.group.push(item.checked);
            isElemInGroup = true;
          } else {
            group.push(item.checked);
          }

          item.addEventListener('change', function (ev) {
            var elem = ev.target,
                item = {
              name: elem.getAttribute('data-validate-field'),
              value: elem.checked
            };
            delete _this2.result[item.name];

            _this2.validateItem({
              name: item.name,
              value: item.value,
              group: []
            });

            _this2.renderErrors();
          });
        }

        _this2.setterEventListener(item, 'keyup', _this2.handlerKeyup, 'add');

        if (!isElemInGroup) {
          _this2.elements.push({
            name: name,
            value: value,
            group: group
          });
        }
      };

      for (var i = 0, len = elems.length; i < len; ++i) {
        _loop(i, len);
      }

      this.validateElements();
    },

    /**
     * Validate Required field
     * @param {string} value Value for validate
     * @returns {boolean} True if validate is OK
     */
    validateRequired: function validateRequired(value) {
      return !this.isEmpty(value);
    },

    /**
     * Validate Email field
     * @param {string} value Value for validate
     * @returns {boolean} True if validate is OK
     */
    validateEmail: function validateEmail(value) {
      return this.isEmail(value);
    },

    /**
     * Validate Phone field
     * @param {string} value Value for validate
     * @returns {boolean} True if validate is OK
     */
    validatePhone: function validatePhone(value) {
      return this.isPhone(value);
    },

    /**
     * Validate field for Min Length
     * @param {string} value Value for validate
     * @param {integer} min
     * @returns {boolean} True if validate is OK
     */
    validateMinLength: function validateMinLength(value, min) {
      return this.checkLengthMin(value, min);
    },

    /**
     * Validate field for Max Length
     * @param {string} value Value for validate
     * @param {integer} max
     * @returns {boolean} True if validate is OK
     */
    validateMaxLength: function validateMaxLength(value, max) {
      return this.checkLengthMax(value, max);
    },

    /**
     * Validate field for strength password
     * @param {string} password Value for validate
     * @returns {boolean} True if validate is OK
     */
    validateStrengthPass: function validateStrengthPass(password) {
      return this.checkStrengthPass(password);
    },

    /**
     * Validate Password field
     * @param {string} value Value for validate
     * @returns {boolean} True if validate is OK
     */
    validatePassword: function validatePassword(value) {
      return this.isPassword(value);
    },

    /**
     * Validate ZIP field
     * @param {string} value Value for validate
     * @returns {boolean} True if validate is OK
     */
    validateZip: function validateZip(value) {
      return this.isZip(value);
    },

    /**
     * Validate for remote check
     * @param value
     * @param name
     * @param {string} url
     * @param {string} successAnswer
     * @returns {boolean} True if validate is OK
     */
    validateRemote: function validateRemote(_ref) {
      var value = _ref.value,
          name = _ref.name,
          url = _ref.url,
          successAnswer = _ref.successAnswer,
          sendParam = _ref.sendParam,
          method = _ref.method;
      return new Promise(function (resolve) {
        ajax({
          url: url,
          method: method,
          data: _defineProperty({}, sendParam, value),
          async: true,
          callback: function callback(data) {
            if (data.toLowerCase() === successAnswer.toLowerCase()) {
              resolve('ok');
            }

            resolve({
              type: 'incorrect',
              name: name
            });
          },
          error: function error() {
            resolve({
              type: 'error',
              name: name
            });
          }
        });
      });
    },
    generateMessage: function generateMessage(rule, name, value) {
      var messages = this.messages || this.defaultMessages;
      var customMessage = messages[name] && messages[name][rule] || this.messages && typeof this.messages[name] === 'string' && messages[name] || // (messages[name][rule]) ||
      this.defaultMessages[rule] || this.DEFAULT_REMOTE_ERROR;

      if (value) {
        customMessage = customMessage.replace(':value', value.toString());
      }

      this.result[name] = {
        message: customMessage
      };
    },
    validateElements: function validateElements() {
      var _this3 = this;

      this.lockForm();
      this.elements.forEach(function (item) {
        _this3.validateItem({
          name: item.name,
          value: item.value,
          group: item.group
        });
      });

      if (!this.promisesRemote.length) {
        this.renderErrors();
        return;
      }

      Promise.all(this.promisesRemote).then(function (resp) {
        resp.forEach(function (result) {
          if (result === 'ok') {
            _this3.renderErrors();

            return;
          }

          if (result.type === 'error') {
            alert('Server error occured. Please try later.');
          }

          _this3.generateMessage(RULE_REMOTE, result.name);

          _this3.renderErrors();
        });
      });
    },
    validateItem: function validateItem(_ref2) {
      var _this4 = this;

      var name = _ref2.name,
          group = _ref2.group,
          value = _ref2.value,
          isKeyupChange = _ref2.isKeyupChange;
      var rules = this.rules[name] || this.defaultRules[name] || false;

      if (!rules) {
        return;
      }

      for (var rule in rules) {
        var ruleValue = rules[rule];

        if (rule !== RULE_REQUIRED && rule !== RULE_FUNCTION && value == '') {
          return;
        }

        switch (rule) {
          case RULE_FUNCTION:
            {
              if (typeof ruleValue !== 'function') {
                break;
              }

              if (ruleValue(name, value)) {
                break;
              }

              this.generateMessage(RULE_FUNCTION, name, ruleValue);
              return;
            }

          case RULE_REQUIRED:
            {
              if (!ruleValue) {
                break;
              }

              if (group.length) {
                var isSuccessValidateGroup = false; // At least one item in group

                group.forEach(function (item) {
                  if (_this4.validateRequired(item)) {
                    isSuccessValidateGroup = true;
                  }
                });

                if (isSuccessValidateGroup) {
                  break;
                }
              } else {
                if (this.validateRequired(value)) {
                  break;
                }
              }

              this.generateMessage(RULE_REQUIRED, name);
              return;
            }

          case RULE_EMAIL:
            {
              if (!ruleValue) {
                break;
              }

              if (this.validateEmail(value)) {
                break;
              }

              this.generateMessage(RULE_EMAIL, name);
              return;
            }

          case RULE_MINLENGTH:
            {
              if (!ruleValue) {
                break;
              }

              if (this.validateMinLength(value, ruleValue)) {
                break;
              }

              this.generateMessage(RULE_MINLENGTH, name, ruleValue);
              return;
            }

          case RULE_MAXLENGTH:
            {
              if (!ruleValue) {
                break;
              }

              if (this.validateMaxLength(value, ruleValue)) {
                break;
              }

              this.generateMessage(RULE_MAXLENGTH, name, ruleValue);
              return;
            }

          case RULE_PHONE:
            {
              if (!ruleValue) {
                break;
              }

              if (this.validatePhone(value)) {
                break;
              }

              this.generateMessage(RULE_PHONE, name);
              return;
            }

          case RULE_PASSWORD:
            {
              if (!ruleValue) {
                break;
              }

              if (this.validatePassword(value)) {
                break;
              }

              this.generateMessage(RULE_PASSWORD, name);
              return;
            }

          case RULE_STRENGTH:
            {
              if (!ruleValue || (typeof ruleValue === 'undefined' ? 'undefined' : _typeof(ruleValue)) !== 'object') {
                break;
              }

              if (ruleValue.default && this.validateStrengthPass(value)) {
                break;
              }

              if (ruleValue.custom) {
                var regexp = void 0;

                try {
                  regexp = new RegExp(ruleValue.custom);
                } catch (e) {
                  regexp = this.REGEXP.strengthPass; // eslint-disable-next-line no-console

                  console.error('Custom regexp for strength rule is not valid. Default regexp was used.');
                }

                if (regexp.test(value)) {
                  break;
                }
              }

              this.generateMessage(RULE_STRENGTH, name);
              return;
            }

          case RULE_ZIP:
            {
              if (!ruleValue) {
                break;
              }

              if (this.validateZip(value)) {
                break;
              }

              this.generateMessage(RULE_ZIP, name);
              return;
            }

          case RULE_REMOTE:
            {
              if (isKeyupChange) {
                break;
              }

              if (!ruleValue) {
                break;
              }

              var url = ruleValue.url,
                  successAnswer = ruleValue.successAnswer,
                  method = ruleValue.method,
                  sendParam = ruleValue.sendParam;
              var $elem = this.$form.querySelector('input[data-validate-field="' + name + '"]');
              this.setterEventListener($elem, 'keyup', this.handlerKeyup, 'remove');
              this.promisesRemote.push(this.validateRemote({
                name: name,
                value: value,
                url: url,
                method: method,
                sendParam: sendParam,
                successAnswer: successAnswer
              }));
              return;
            }
        }
      }
    },
    clearErrors: function clearErrors() {
      var $elems = document.querySelectorAll('.js-validate-error-label');

      for (var i = 0, len = $elems.length; i < len; ++i) {
        $elems[i].remove();
      }

      $elems = document.querySelectorAll('.js-validate-error-field');

      for (var _i = 0, _len = $elems.length; _i < _len; ++_i) {
        $elems[_i].classList.remove('js-validate-error-field');

        $elems[_i].style.border = '';
        $elems[_i].style.color = '';
      }
    },
    renderErrors: function renderErrors() {
      var _this5 = this;

      this.clearErrors();
      this.unlockForm();
      this.isValidationSuccess = false;

      if (Object.keys(this.result).length === 0) {
        this.isValidationSuccess = true;
        return;
      }

      for (var _item in this.result) {
        var message = this.result[_item].message;
        var $elems = this.$form.querySelectorAll('[data-validate-field="' + _item + '"]');
        var $elem = $elems[$elems.length - 1];
        var div = document.createElement('div');
        div.innerHTML = message;
        div.className = 'js-validate-error-label';
        div.setAttribute('style', 'color: ' + this.colorWrong);
        $elem.style.border = '1px solid ' + this.colorWrong;
        $elem.style.color = '' + this.colorWrong;
        $elem.classList.add('js-validate-error-field');

        if ($elem.type === 'checkbox' || $elem.type === 'radio') {
          var $label = document.querySelector('label[for="' + $elem.getAttribute('id') + '"]');

          if ($elem.parentNode.tagName.toLowerCase() === 'label') {
            $elem.parentNode.parentNode.insertBefore(div, null);
          } else if ($label) {
            $label.parentNode.insertBefore(div, $label.nextSibling);
          } else {
            $elem.parentNode.insertBefore(div, $elem.nextSibling);
          }
        } else {
          $elem.parentNode.insertBefore(div, $elem.nextSibling);
        }
      }

      if (!this.tooltipSelectorWrap.length) {
        return;
      }

      this.state.tooltipsTimer = setTimeout(function () {
        _this5.hideTooltips();
      }, this.tooltipFadeOutTime);
    },
    hideTooltips: function hideTooltips() {
      var _this6 = this;

      var $elemsErrorLabel = document.querySelectorAll('.js-validate-error-label');
      $elemsErrorLabel.forEach(function (item) {
        item.classList.add(_this6.tooltipFadeOutClass);
      });
      this.state.tooltipsTimer = null;
    },
    lockForm: function lockForm() {
      var $elems = this.$form.querySelectorAll('input, textarea, button, select');

      for (var i = 0, len = $elems.length; i < len; ++i) {
        $elems[i].setAttribute('disabled', 'disabled');
        $elems[i].style.pointerEvents = 'none';
        $elems[i].style.webitFilter = 'grayscale(100%)';
        $elems[i].style.filter = 'grayscale(100%)';
      }
    },
    unlockForm: function unlockForm() {
      var $elems = this.$form.querySelectorAll('input, textarea, button, select');

      for (var i = 0, len = $elems.length; i < len; ++i) {
        $elems[i].removeAttribute('disabled');
        $elems[i].style.pointerEvents = '';
        $elems[i].style.webitFilter = '';
        $elems[i].style.filter = '';
      }
    }
  };
  window.JustValidate = JustValidate;
})(window);

var validateForm = document.querySelector(".validate-form");
var validateForm2 = document.querySelector(".validate-form--2");
var validateForm3 = document.querySelector(".validate-form--3");

if (validateForm) {
  new window.JustValidate('.validate-form', {
    rules: {
      email: {
        required: true,
        email: false
      },
      name: {
        required: true
      },
      text: {
        required: true
      },
      tel: {
        required: true
      },
      password: {
        required: true,
        password: false
      },
      password2: {
        required: true,
        password: false
      },
      checkbox1: {
        required: true
      },
      checkbox2: {
        required: true
      }
    }
  });
}

if (validateForm2) {
  new window.JustValidate('.validate-form--2', {
    rules: {
      email: {
        required: true,
        email: false
      },
      name: {
        required: true
      },
      text: {
        required: true
      },
      tel: {
        required: true
      },
      password: {
        required: true,
        password: false
      },
      password2: {
        required: true,
        password: false
      },
      checkbox1: {
        required: true
      },
      checkbox2: {
        required: true
      }
    }
  });
}

if (validateForm3) {
  new window.JustValidate('.validate-form--3', {
    rules: {
      email: {
        required: true,
        email: false
      },
      name: {
        required: true
      },
      text: {
        required: true
      },
      tel: {
        required: true
      },
      password: {
        required: true,
        password: false
      },
      password2: {
        required: true,
        password: false
      },
      checkbox1: {
        required: true
      },
      checkbox2: {
        required: true
      }
    }
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./src/blocks/modules/new-project/create-data.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/new-project/create-data.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/select */ "./src/blocks/components/select.js");

document.addEventListener("DOMContentLoaded", function () {
  /* Функции */
  var createProjectBlock = function createProjectBlock() {
    return "\n            <div class=\"new-project__data-block\">\n                <select class=\"select\">\n                    <option value=\"\">\u041D\u0435\u0442 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F</option>\n                    <option value=\"bathroom\">\u0412\u0430\u043D\u043D\u0430\u044F</option>\n                    <option value=\"brick\">\u0414\u0435\u0442\u0441\u043A\u0430\u044F</option>\n                    <option value=\"children\">\u041A\u0430\u0431\u0438\u043D\u0435\u0442</option>\n                    <option value=\"brick\">\u041A\u043E\u0440\u0438\u0434\u043E\u0440</option>\n                    <option value=\"corridor\">\u041B\u043E\u0434\u0436\u0438\u044F</option>\n                    <option value=\"kitchen\">\u041A\u0443\u0445\u043D\u044F</option>\n                    <option value=\"bedroom\">\u0421\u043F\u0430\u043B\u044C\u043D\u044F</option>\n                    <option value=\"canteen\">\u0421\u0442\u043E\u043B\u043E\u0432\u0430\u044F</option>\n                    <option value=\"wardrobe\">\u0413\u0430\u0440\u0434\u0435\u0440\u043E\u0431</option>\n                    <option value=\"another\">\u0414\u0440\u0443\u0433\u043E\u0435...</option>\n                </select>\n                <button class=\"btn-reset btn-remove remove-data\" type=\"button\"></button>\n                <input class=\"new-item__input new-project__data-input\" type=\"text\" name=\"area\" placeholder=\"\u041F\u043B\u043E\u0449\u0430\u0434\u044C, \u043C\xB2\">\n            </div>\n        ";
  };

  var createProjectData = function createProjectData(element) {
    element.insertAdjacentHTML("beforeend", createProjectBlock());
  };
  /* Логика */


  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("create-data")) {
      var newProjectDataLeft = e.target.closest(".new-project__data-left");
      createProjectData(newProjectDataLeft);
    }

    if (e.target.classList.contains("remove-data")) {
      e.target.closest(".new-project__data-block").remove();
    }

    var selects = document.querySelectorAll('.select');
    selects.forEach(function (el) {
      if (el.classList.contains("select") && !el.classList.contains("choices__input")) {
        Object(_components_select__WEBPACK_IMPORTED_MODULE_0__["initializeSelect"])(el);
      }
    });
  });
});

/***/ }),

/***/ "./src/blocks/modules/new-project/description-project.js":
/*!***************************************************************!*\
  !*** ./src/blocks/modules/new-project/description-project.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_quill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/quill */ "./src/blocks/components/quill.js");

var quillElement = document.querySelector(".editor");
Object(_components_quill__WEBPACK_IMPORTED_MODULE_0__["QuillEditor"])(quillElement);

/***/ }),

/***/ "./src/blocks/modules/new-project/input-type-date.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/new-project/input-type-date.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! imask */ "./node_modules/imask/esm/index.js");

document.addEventListener("DOMContentLoaded", function () {
  var newItemDates = document.querySelectorAll(".new-item__date");
  newItemDates.forEach(function (el) {
    var numberMask = IMask(el, {
      mask: Date
    });
  });
});

/***/ }),

/***/ "./src/blocks/modules/new-project/new-item-bottom.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/new-project/new-item-bottom.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/select */ "./src/blocks/components/select.js");

document.addEventListener("DOMContentLoaded", function () {
  var selects = document.querySelectorAll('.select');
  /* Функции */

  var createBottomElem = function createBottomElem() {
    return "\n            <div class=\"new-item__bottom\">\n                <div class=\"new-item__bottom-left\">\n                    <select class=\"select\">\n                        <option>\u041E\u0431\u043C\u0435\u0440\u043D\u044B\u0439 \u043F\u043B\u0430\u043D</option>\n                        <option>\u0424\u043E\u0442\u043E \u043E\u0431\u044A\u0435\u043A\u0442\u0430</option>\n                        <option>\u0420\u0435\u0444\u0435\u0440\u0435\u043D\u0441\u044B</option>\n                        <option>\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B</option>\n                        <option>\u0414\u0440\u0443\u0433\u043E\u0435</option>\n                    </select>\n                    <button class=\"btn-reset btn-remove remove-upload\" type=\"button\"></button>\n                </div>\n                <div class=\"input-file__container\">\n                    <input class=\"input-file__input\" id=\"input__file\" name=\"file\" type=\"file\" multiple=\"\">\n                    <label class=\"input-file__button\" for=\"input__file\">\n                        <svg class=\"svg-icon name-file__icon\">\n                            <use xlink:href=\"./img/sprites/sprite.svg#upload\"></use>\n                        </svg>\n                        \u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u0430\u0439\u043B\n                    </label>\n                </div>\n                <div class=\"name-file\">\n                    <a class=\"btn-reset name-file__close\"></a>\n                    <span class=\"name-file__desc\">\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0444\u0430\u0439\u043B\u0430</span>\n                    <span class=\"name-file__type\">PNG</span>\n                </div>\n            </div>\n        ";
  };

  var createItemBottom = function createItemBottom(event) {
    var newItemBottom = event.target.closest(".new-item__content");
    newItemBottom.insertAdjacentHTML("beforeend", createBottomElem());
  };

  var removeItemBottom = function removeItemBottom(element) {
    element.closest(".new-item__bottom").remove();
  };
  /* Логика */


  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("create-upload")) {
      createItemBottom(e);
    }

    if (e.target.classList.contains("remove-upload")) {
      removeItemBottom(e.target);
    }
  });
});

/***/ }),

/***/ "./src/blocks/modules/new-project/requisites-form.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/new-project/requisites-form.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", function () {
  var addRequisites = document.querySelector(".add-requisites");

  var createContractTemplateForm = function createContractTemplateForm() {
    return "\n            <div class=\"requisites-form\">\n                <input class=\"new-item__input requisites-form__name\" type=\"text\" name=\"name-project2\" placeholder=\"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u0434\u043B\u044F \u0443\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u0432 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0435\">\n                    <div class=\"requisites-form__column\">\n                        <span class=\"requisites-form__column-desc\">\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440 (\u0432\u044B)</span>\n                        <select class=\"select requisites-form__input\" name=\"person\">\n                            <option value=\"physical\"> \u0424\u0438\u0437. \u043B\u0438\u0446\u043E</option>\n                            <option value=\"legal\">\u042E\u0440. \u043B\u0438\u0446\u043E</option>\n                        </select>\n                        <input class=\"new-item__input requisites-form__input\" type=\"text\" name=\"full name\" placeholder=\"\u0424\u0418\u041E\">\n                        <input class=\"new-item__input requisites-form__input\" type=\"text\" name=\"Full name in genitive\" placeholder=\"\u0424\u0418\u041E \u0432 \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u043C \u043F\u0430\u0434\u0435\u0436\u0435\">\n                        <input class=\"new-item__input requisites-form__input\" type=\"text\" name=\"inn\" placeholder=\"\u0418\u041D\u041D\">\n                        <textarea class=\"new-item__input requisites-form__input requisites-form__textarea\" type=\"text\" name=\"place of residence\" placeholder=\"\u0410\u0434\u0440\u0435\u0441 \u043F\u0440\u043E\u043F\u0438\u0441\u043A\u0438\"></textarea>\n                        <input class=\"new-item__input requisites-form__input\" type=\"text\" name=\"passport, series number\" placeholder=\"\u041F\u0430\u0441\u043F\u043E\u0440\u0442, \u0441\u0435\u0440\u0438\u044F \u043D\u043E\u043C\u0435\u0440\">\n                        <input class=\"new-item__input requisites-form__input\" type=\"tel\" name=\"phone\" placeholder=\"\u0422\u0435\u043B\u0435\u0444\u043E\u043D\">\n                        <input class=\"new-item__input requisites-form__input\" type=\"email\" name=\"Email\" placeholder=\"Email\">\n                    </div>\n                    <div class=\"requisites-form__column\">\n                        <span class=\"requisites-form__column-desc\">\u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A</span>\n                        <select class=\"select requisites-form__input\" name=\"person\">\n                            <option value=\"physical\"> \u0424\u0438\u0437. \u043B\u0438\u0446\u043E</option>\n                            <option value=\"legal\">\u042E\u0440. \u043B\u0438\u0446\u043E</option>\n                        </select>\n                        <input class=\"new-item__input requisites-form__input\" type=\"text\" name=\"full name\" placeholder=\"\u0424\u0418\u041E\">\n                        <input class=\"new-item__input requisites-form__input\" type=\"text\" name=\"Full name in genitive\" placeholder=\"\u0424\u0418\u041E \u0432 \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u043C \u043F\u0430\u0434\u0435\u0436\u0435\">\n                        <input class=\"new-item__input requisites-form__input\" type=\"text\" name=\"inn\" placeholder=\"\u0418\u041D\u041D\">\n                        <textarea class=\"new-item__input requisites-form__input requisites-form__textarea\" type=\"text\" name=\"place of residence\" placeholder=\"\u0410\u0434\u0440\u0435\u0441 \u043F\u0440\u043E\u043F\u0438\u0441\u043A\u0438\"></textarea>\n                        <input class=\"new-item__input requisites-form__input\" type=\"text\" name=\"passport, series number\" placeholder=\"\u041F\u0430\u0441\u043F\u043E\u0440\u0442, \u0441\u0435\u0440\u0438\u044F \u043D\u043E\u043C\u0435\u0440\">\n                        <input class=\"new-item__input requisites-form__input\" type=\"tel\" name=\"phone\" placeholder=\"\u0422\u0435\u043B\u0435\u0444\u043E\u043D\">\n                        <input class=\"new-item__input requisites-form__input\" type=\"email\" name=\"Email\" placeholder=\"Email\">\n                    </div>\n                <p class=\"requisites-form__desc new-item__desc\">\u0414\u0430\u043D\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D, \u043A\u0430\u043A \u0433\u043E\u0442\u043E\u0432\u044B\u0439 \u043A \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u044E \u043F\u0440\u0438\u043C\u0435\u0440. <br><br> \u041A\u043E\u043B\u043B\u0435\u0433\u0438, \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435, \u0447\u0442\u043E \u043C\u044B \u043D\u0435 \u0431\u0435\u0440\u0435\u043C \u043D\u0430 \u0441\u0435\u0431\u044F \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0437\u0430 \u0442\u0435 \u0438\u043B\u0438 \u0438\u043D\u044B\u0435 \u0430\u0441\u043F\u0435\u043A\u0442\u044B \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u0438\u0445 \xAB\u043A\u0430\u043A \u0435\u0441\u0442\u044C\xBB (\u0431\u0435\u0437 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0439 \u0438\u043B\u0438 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432 \u0441 \u043D\u0430\u0448\u0435\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u044B).</p>\n            </div>\n        \n        ";
  };

  if (addRequisites) {
    var flag = 0;
    addRequisites.addEventListener("click", function (e) {
      var newItem = e.currentTarget.closest(".new-item");
      var newItemContent = newItem.querySelector(".new-item__content");

      if (flag == 0) {
        e.currentTarget.innerHTML = "Пропустить";
        newItem.classList.add("is-active");
        newItemContent.insertAdjacentHTML("beforeend", createContractTemplateForm());
        flag++;
      } else {
        var requisitesForm = document.querySelector(".requisites-form");
        e.currentTarget.innerHTML = "Добавить";
        newItem.classList.remove("is-active");
        requisitesForm.remove();
        flag--;
      }
    });
  }
});

/***/ }),

/***/ "./src/blocks/modules/new-project/select.js":
/*!**************************************************!*\
  !*** ./src/blocks/modules/new-project/select.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", function () {
  var newItemAuthor = document.querySelectorAll(".new-item__author");
  var newItemMembers = document.querySelector(".new-item__members");

  var removeChoicesImages = function removeChoicesImages(choicesItem) {
    var images = choicesItem.querySelectorAll("img");
    images.forEach(function (el) {
      return el.remove();
    });
  };

  if (newItemAuthor && newItemMembers) {
    newItemMembers.addEventListener("change", function (e) {
      var specialists = document.querySelector('[value="members"]');
      var btnClear = document.querySelector(".btn-clear");

      var createItemsAuthors = function createItemsAuthors() {
        return "\n                    <div class=\"new-item__authors\">\n                        <button class=\"btn-reset author new-item__author\" type=\"button\" data-name=\"\u041A\u043E\u0440\u043E\u0431\u043A\u043E\u0432\u0430 \u0410\u043D\u043D\u0430\" data-src=\"img/stage-1.png\"><img class=\"author__image\" src=\"img/stage-1.png\" alt=\"\u041A\u043E\u0440\u043E\u0431\u043A\u043E\u0432\u0430 \u0410\u043D\u043D\u0430\"><span class=\"author__name\">\u041A\u043E\u0440\u043E\u0431\u043A\u043E\u0432\u0430 \u0410\u043D\u043D\u0430</span></button>\n                        <button class=\"btn-reset author new-item__author\" type=\"button\" data-name=\"\u041A\u043E\u0440\u043E\u0431\u043A\u043E\u0432\u0430 \u0410\u043D\u043D\u0430\" data-src=\"img/stage-2.png\"><img class=\"author__image\" src=\"img/stage-2.png\" alt=\"\u041A\u043E\u0440\u043E\u0431\u043A\u043E\u0432\u0430 \u0410\u043D\u043D\u0430\"><span class=\"author__name\">\u041A\u043E\u0440\u043E\u0431\u043A\u043E\u0432\u0430 \u0410\u043D\u043D\u0430</span></button>\n                        <button class=\"btn-reset author new-item__author\" type=\"button\" data-name=\"\u041A\u043E\u0440\u043E\u0431\u043A\u043E\u0432\u0430 \u0410\u043D\u043D\u0430\" data-src=\"img/stage-3.png\"><img class=\"author__image\" src=\"img/stage-3.png\" alt=\"\u041A\u043E\u0440\u043E\u0431\u043A\u043E\u0432\u0430 \u0410\u043D\u043D\u0430\"><span class=\"author__name\">\u041A\u043E\u0440\u043E\u0431\u043A\u043E\u0432\u0430 \u0410\u043D\u043D\u0430</span></button>\n                        <button class=\"btn-reset author new-item__author\" type=\"button\" data-name=\"\u0415\u043A\u0430\u0442\u0435\u0433\u0440\u0438\u043D\u0430 \u041D\u0438\u043A\u043E\u043B\u0430\u0435\u0432\u043D\u0430\" data-src=\"img/stage-4.png\"><img class=\"author__image\" src=\"img/stage-4.png\" alt=\"\u0415\u043A\u0430\u0442\u0435\u0433\u0440\u0438\u043D\u0430 \u041D\u0438\u043A\u043E\u043B\u0430\u0435\u0432\u043D\u0430\"><span class=\"author__name\">\u0415\u043A\u0430\u0442\u0435\u0433\u0440\u0438\u043D\u0430 \u041D\u0438\u043A\u043E\u043B\u0430\u0435\u0432\u043D\u0430</span></button>\n                        <button class=\"btn-reset author new-item__author\" type=\"button\" data-name=\"\u041A\u043E\u0440\u043E\u0431\u043A\u043E\u0432\u0430 \u0410\u043D\u043D\u0430\" data-src=\"img/stage-5.png\"><img class=\"author__image\" src=\"img/stage-5.png\" alt=\"\u041A\u043E\u0440\u043E\u0431\u043A\u043E\u0432\u0430 \u0410\u043D\u043D\u0430\"><span class=\"author__name\">\u041A\u043E\u0440\u043E\u0431\u043A\u043E\u0432\u0430 \u0410\u043D\u043D\u0430</span></button>\n                    </div>\n                ";
      };

      var createImgAuthor = function createImgAuthor(src, name) {
        return "\n                    <img class=\"author__image author__image--small\" src=\"".concat(src, "\" alt=\"").concat(name, "\">\n                ");
      };

      if (specialists) {
        btnClear.insertAdjacentHTML('beforebegin', createItemsAuthors());
        var newItemAuthors = document.querySelector(".new-item__authors");

        var _newItemAuthor = document.querySelectorAll(".new-item__author");

        _newItemAuthor.forEach(function (el) {
          el.addEventListener("click", function (e) {
            el.classList.toggle("new-item__author--active");
            var choicesItem = newItemMembers.querySelector(".choices__item--selectable");
            var dataSrc = el.dataset.src;
            var dataName = el.dataset.name;

            if (el.classList.contains("new-item__author--active")) {
              choicesItem.innerHTML += createImgAuthor(dataSrc, dataName);
            } else {
              choicesItem.querySelector("[src=\"".concat(dataSrc, "\"]")).remove();
            }
          });
        });
      } else {
        var _newItemAuthors = document.querySelector(".new-item__authors");

        var _newItemAuthor2 = document.querySelectorAll(".new-item__author");

        _newItemAuthor2.forEach(function (el) {
          return el.classList.remove("new-item__author--active");
        });

        if (_newItemAuthors) {
          _newItemAuthors.remove();
        }
      }

      btnClear.addEventListener("click", function (e) {
        var newItemAuthors = document.querySelector(".new-item__authors");
        var newItemAuthor = document.querySelectorAll(".new-item__author");
        var choicesItem = newItemMembers.querySelector(".choices__item--selectable");
        newItemAuthor.forEach(function (el) {
          return el.classList.remove("new-item__author--active");
        });
        removeChoicesImages(choicesItem);
      });
    });
  }
});

/***/ }),

/***/ "./src/blocks/modules/new-project/type-file-close.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/new-project/type-file-close.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("name-file__close")) {
      e.target.parentElement.classList.add("name-file--hidden");
    }
  });
});

/***/ }),

/***/ "./src/blocks/modules/projects/more-projects.js":
/*!******************************************************!*\
  !*** ./src/blocks/modules/projects/more-projects.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", function () {
  var moreBtnProjects = document.querySelector(".projects__more-btn");
  var hiddenProjectsItems = document.querySelectorAll(".project-item--hidden");

  if (moreBtnProjects) {
    hiddenProjectsItems.forEach(function (el) {
      var flag = 0;
      moreBtnProjects.addEventListener("click", function (e) {
        if (flag == 0) {
          e.currentTarget.innerHTML = "Скрыть";
          el.classList.remove("project-item--hidden");
          flag++;
        } else {
          el.classList.add("project-item--hidden");
          e.currentTarget.innerHTML = "Ещё 12 проектов";
          flag--;
        }
      });
    });
  }
});

/***/ }),

/***/ "./src/blocks/modules/projects/project-title.js":
/*!******************************************************!*\
  !*** ./src/blocks/modules/projects/project-title.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;document.addEventListener("DOMContentLoaded", function () {
  (function () {
    'use strict';

    var defaultConf = {
      ellipsis: '…',
      debounce: 0,
      responsive: true,
      className: '.clamp',
      lines: 2,
      portrait: null,
      break_word: true
    };
    var _idCounter = 0;
    var RAF_SUPPORTED = !!window.requestAnimationFrame;

    var newId = function newId() {
      _idCounter += 1;
      return _idCounter;
    };

    var setIdAttribute = function setIdAttribute(element, id) {
      element.setAttribute('data-ellipsis-id', id);
    };

    var getIdAttribute = function getIdAttribute(element) {
      return element.getAttribute('data-ellipsis-id');
    };

    var storeCache = function storeCache(cache, element) {
      var id = newId();
      setIdAttribute(element, id);
      cache[id] = cache[id] || {};
      cache[id].element = element;
      cache[id].innerHTML = element.innerHTML;
    };

    var retrieveCache = function retrieveCache(cache, element) {
      if (cache) {
        return cache[getIdAttribute(element)];
      } else {
        return null;
      }
    };

    var getCachedElements = function getCachedElements(cache) {
      return Object.keys(cache).map(function (value, index) {
        return cache[value].element;
      });
    };

    var merge = function merge(obj1, obj2) {
      var obj3 = {};

      for (var attrn in obj1) {
        obj3[attrn] = obj1[attrn];
      }

      for (var attrnm in obj2) {
        obj3[attrnm] = obj2[attrnm];
      }

      return obj3;
    };

    function Ellipsis(opts) {
      var conf = merge(defaultConf, opts || {});
      this.create(conf);
      this.add();
    }

    Ellipsis.prototype = {
      conf: {},
      prop: {},
      lines: {},
      temp: null,
      listener: null,
      create: function create(opts) {
        this.conf = opts;
        this.lines = {
          get current() {
            if (opts.portrait && window.innerHeight > window.innerWidth) {
              return opts.portrait;
            }

            return opts.lines;
          }

        };

        if (this.conf.responsive) {
          this.temp = {};
          var debounceTime = this.conf.debounce;
          var listener;

          if (RAF_SUPPORTED && !debounceTime) {
            this._isScheduled = false;
            var self = this;

            listener = function listener(event) {
              if (!self._isScheduled) {
                self._isScheduled = true;
                window.requestAnimationFrame(function () {
                  self._isScheduled = false;
                  self.add(getCachedElements(self.temp));
                });
              }
            };
          } else {
            // This is for in case the `debounce` is set to 0 and the browser
            // does not support requestAnimationFrame. We don't want to swamp
            // the browser on a resize so we "fake" the requestAnimationFrame
            // functionality with the same debounce time (60 FPS).
            debounceTime = debounceTime || 16;
            var debounce;

            listener = function listener(event) {
              clearTimeout(debounce);
              debounce = setTimeout(function () {
                this.add(getCachedElements(this.temp));
              }.bind(this), debounceTime);
            };
          }

          this.listener = listener.bind(this);
          window.addEventListener('resize', this.listener, false);
          window.removeEventListener('beforeunload', this.listener, false);
        }
      },
      destroy: function destroy() {
        this.listener && window.removeEventListener('resize', this.listener, false);
      },
      createProp: function createProp(element) {
        this.prop = {
          get height() {
            var viewportOffset = element.getBoundingClientRect();
            return parseInt(viewportOffset.bottom - viewportOffset.top, 10);
          },

          get lineheight() {
            var lineh = getComputedStyle(element).getPropertyValue("line-height");

            if (String('normal|initial|inherit').indexOf(lineh) > -1) {
              //very specific case
              lineh = parseInt(getComputedStyle(element).getPropertyValue("font-size"), 10) + 2;
            }

            return parseInt(lineh, 10);
          }

        };
      },
      add: function add(elements) {
        if (!elements && this.conf.className) {
          elements = document.querySelectorAll(this.conf.className);
        }

        if (elements) {
          if (elements.length) {
            for (var i = 0; i < elements.length; i++) {
              this.addElement(elements[i]);
            }
          } else if (elements.length === undefined) {
            this.addElement(elements);
          }
        }
      },
      addElement: function addElement(element) {
        if (this.conf.responsive) {
          var cached = retrieveCache(this.temp, element);

          if (!cached) {
            storeCache(this.temp, element);
          } else {
            // insert cached element for Resizing
            if (element.innerHTML !== cached.innerHTML) {
              element.innerHTML = cached.innerHTML;
            }
          }
        }

        this.createProp(element);

        if (this.isNotCorrect()) {
          if (element.childNodes.length && element.childNodes.length > 1) {
            this.handleChildren(element);
          } else if (element.childNodes.length && element.childNodes.length === 1 && element.childNodes[0].nodeType === 3) {
            this.simpleText(element);
          }
        }
      },
      breakWord: function breakWord(str, str2, fix) {
        var words = str.split(' ');
        words.pop();

        if (fix) {
          words.pop();
        }

        if (!str2) {
          if (words[words.length - 1]) {
            words[words.length - 1] = words[words.length - 1].replace(/(,$)/g, "").replace(/(\.$)/g, "");
          }

          words.push(this.conf.ellipsis);
          return words.join(' ');
        } else {
          if (words[words.length - 1]) {
            words[words.length - 1] = words[words.length - 1].replace(/(,$)/g, "").replace(/(\.$)/g, "");
            words.push(this.conf.ellipsis);
            return [words.join(' '), str2];
          } else if (!words[words.length - 1] && str2) {
            var st = ' ' + str2.trim().replace(/(,$)/g, "").replace(/(\.$)/g, "") + ' ';
            words.push(this.conf.ellipsis);
            return [words.join(' '), st];
          }
        }
      },
      simpleText: function simpleText(element) {
        var childText = element.childNodes[0].nodeValue;

        while (this.prop.height > this.prop.lineheight * this.lines.current) {
          element.childNodes[0].nodeValue = childText.slice(0, -1);
          childText = element.childNodes[0].nodeValue;
        }

        if (this.conf.break_word) {
          element.childNodes[0].nodeValue = childText.slice(0, -this.conf.ellipsis.length) + this.conf.ellipsis;

          if (this.isNotCorrect()) {
            //edge case
            element.childNodes[0].nodeValue = ' ' + element.childNodes[0].nodeValue.slice(0, -(this.conf.ellipsis.length + 1)).trim().slice(0, -this.conf.ellipsis.length) + this.conf.ellipsis;
          }
        } else {
          element.childNodes[0].nodeValue = this.breakWord(element.childNodes[0].nodeValue);

          if (this.isNotCorrect()) {
            //edge case
            element.childNodes[0].nodeValue = this.breakWord(element.childNodes[0].nodeValue, null, true);
          }
        }
      },
      isNotCorrect: function isNotCorrect() {
        return this.prop.height > this.prop.lineheight * this.lines.current;
      },
      processBreak: function processBreak(dOne, dTwo, fix) {
        var r = this.breakWord(dOne.innerText || dOne.nodeValue, dTwo.innerText || dTwo.nodeValue, fix);

        if (dOne.innerText) {
          dOne.innerText = r[0];
        } else {
          dOne.nodeValue = r[0];
        }

        if (dTwo.innerText) {
          dTwo.innerText = r[1];
        } else {
          dTwo.nodeValue = r[1];
        }
      },
      handleChildren: function handleChildren(e) {
        var domChildren = e.childNodes;
        var childText;

        for (var i = domChildren.length - 1; i >= 0; i--) {
          var displayOrigin;

          if (domChildren[i].nodeType === 8) {
            continue; // skip comment nodes
          }

          if (domChildren[i].nodeType === 3) {
            displayOrigin = domChildren[i].nodeValue;
            domChildren[i].nodeValue = '';
          } else {
            displayOrigin = getComputedStyle(domChildren[i]).getPropertyValue("display");
            domChildren[i].style.display = 'none';
          }

          if (this.prop.height <= this.prop.lineheight * this.lines.current) {
            if (domChildren[i].nodeType === 3) {
              domChildren[i].nodeValue = displayOrigin;
              childText = domChildren[i].nodeValue;

              while (this.prop.height > this.prop.lineheight * this.lines.current) {
                domChildren[i].nodeValue = childText.slice(0, -1);
                childText = domChildren[i].nodeValue;
              }

              if (this.conf.break_word) {
                domChildren[i].nodeValue = childText.slice(0, -this.conf.ellipsis.length) + this.conf.ellipsis;

                if (this.isNotCorrect()) {
                  //edge case
                  domChildren[i].nodeValue = ' ' + domChildren[i].nodeValue.slice(0, -this.conf.ellipsis.length).trim().slice(0, -this.conf.ellipsis.length);

                  if (domChildren[i].nodeValue.length > 1) {
                    domChildren[i].nodeValue = domChildren[i].nodeValue.slice(0, -this.conf.ellipsis.length) + this.conf.ellipsis;
                  } else {
                    continue;
                  }
                }
              } else {
                if (!domChildren[i].innerText && !domChildren[i].nodeValue) {
                  continue;
                }

                this.processBreak(domChildren[i], domChildren[i - 1]);

                if (this.isNotCorrect()) {
                  //edge case
                  this.processBreak(domChildren[i], domChildren[i - 1], true);

                  if (this.isNotCorrect()) {
                    e.removeChild(domChildren[i]);
                    continue;
                  }
                }
              }
            } else {
              domChildren[i].style.display = displayOrigin;
              childText = domChildren[i].innerText;

              while (this.prop.height > this.prop.lineheight * this.lines.current) {
                domChildren[i].innerText = childText.slice(0, -1);
                childText = domChildren[i].innerText;
              }

              if (this.conf.break_word) {
                domChildren[i].innerText = childText.slice(0, -this.conf.ellipsis.length) + this.conf.ellipsis;

                if (this.isNotCorrect()) {
                  //edge case
                  domChildren[i].innerText = ' ' + domChildren[i].innerText.slice(0, -this.conf.ellipsis.length).trim().slice(0, -this.conf.ellipsis.length);

                  if (domChildren[i].innerText.length > 1) {
                    domChildren[i].innerText = domChildren[i].innerText.slice(0, -this.conf.ellipsis.length) + this.conf.ellipsis;
                  } else {
                    continue;
                  }
                }
              } else {
                if (!domChildren[i].innerText && !domChildren[i].nodeValue) {
                  continue;
                }

                this.processBreak(domChildren[i], domChildren[i - 1]);

                if (this.isNotCorrect()) {
                  //edge case
                  this.processBreak(domChildren[i], domChildren[i - 1], true);

                  if (this.isNotCorrect()) {
                    e.removeChild(domChildren[i]);
                    continue;
                  }
                }
              }
            }

            break;
          } else {
            e.removeChild(domChildren[i]);
          }
        }
      }
    };

    var EllipsisClass = function EllipsisClass(opts) {
      return new Ellipsis(opts);
    }; //RequireJS Style


    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
        return EllipsisClass;
      }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }

    self.Ellipsis = EllipsisClass;
    return EllipsisClass;
  })();

  Ellipsis({
    lines: 3,
    break_word: false,
    className: '.project-item__title'
  });
});

/***/ }),

/***/ "./src/blocks/modules/register/nouislider.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/register/nouislider.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/distribute/nouislider.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_0__);

var sliders = document.querySelectorAll('.slider');

if (sliders) {
  sliders.forEach(function (slider) {
    nouislider__WEBPACK_IMPORTED_MODULE_0___default.a.create(slider, {
      start: [100, 5000],
      connect: true,
      tooltips: true,
      range: {
        'min': 100,
        'max': 8000
      },
      format: {
        from: function from(value) {
          return parseInt(value);
        },
        to: function to(value) {
          return parseInt(value);
        }
      }
    });
  });
}

/***/ }),

/***/ "./src/blocks/modules/register/tabs.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/register/tabs.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", function () {
  var tabsBtn = document.querySelectorAll(".tabs__btn");
  tabsBtn.forEach(function (el) {
    el.addEventListener("click", function () {
      var tabsPath = el.getAttribute("data-tabs-path");
      el.closest(".tabs-box").querySelector('.tabs__btn--active').classList.remove('tabs__btn--active');
      el.closest(".tabs-box").querySelector("[data-tabs-path=\"".concat(tabsPath, "\"]")).classList.add('tabs__btn--active');
      var tabsContent = el.closest(".tabs-box").querySelectorAll(".tabs__content");

      var switchContent = function switchContent(path, element) {
        tabsContent.forEach(function (el) {
          el.classList.remove('tabs__content--active');
        });
        element.closest(".tabs-box").querySelector("[data-tabs-target=\"".concat(path, "\"]")).classList.add('tabs__content--active');
      };

      switchContent(tabsPath, el);
    });
  });
});

/***/ }),

/***/ "./src/blocks/modules/stages/accordion.js":
/*!************************************************!*\
  !*** ./src/blocks/modules/stages/accordion.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", function () {
  var accordionTops = document.querySelectorAll(".accordion__top");
  accordionTops.forEach(function (btn) {
    var accordionBtn = btn.querySelector(".accordion__btn");
    btn.addEventListener("click", function (e) {
      accordionBtn.classList.toggle("accordion__btn--active");
      accordionBottom = e.currentTarget.parentElement.querySelector(".accordion__bottom");
      accordionBottom.classList.toggle("show");
    });
  });
});

/***/ }),

/***/ "./src/blocks/modules/stages/author.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/stages/author.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", function () {
  var authorSearchLeft = document.querySelector(".author-search__left");
  var overlay = document.querySelector(".overlay");

  if (authorSearchLeft) {
    authorSearchLeft.addEventListener("click", function (e) {
      e.currentTarget.parentElement.classList.add("author-search--active");
      overlay.classList.add("overlay--show");
    });
    overlay.addEventListener("click", function (e) {
      overlay.classList.remove("overlay--show");
      authorSearchLeft.parentElement.classList.remove("author-search--active");
    });
  }
});

/***/ }),

/***/ "./src/blocks/modules/stages/save.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/stages/save.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", function () {
  var stageSave = document.querySelectorAll(".stage__item-save");

  if (stageSave) {
    stageSave.forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.currentTarget.classList.toggle("stage__item-save--active");
      });
    });
  }
});

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_header_burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/header/burger */ "./src/blocks/modules/header/burger.js");
/* harmony import */ var _modules_header_burger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_header_burger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_header_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/header/user */ "./src/blocks/modules/header/user.js");
/* harmony import */ var _modules_header_user__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_header_user__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_stages_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/stages/accordion */ "./src/blocks/modules/stages/accordion.js");
/* harmony import */ var _modules_stages_accordion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_stages_accordion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_stages_save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/stages/save */ "./src/blocks/modules/stages/save.js");
/* harmony import */ var _modules_stages_save__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_stages_save__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_stages_author__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/stages/author */ "./src/blocks/modules/stages/author.js");
/* harmony import */ var _modules_stages_author__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_stages_author__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_hero_hero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/hero/hero */ "./src/blocks/modules/hero/hero.js");
/* harmony import */ var _modules_hero_hero__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_hero_hero__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_projects_project_title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/projects/project-title */ "./src/blocks/modules/projects/project-title.js");
/* harmony import */ var _modules_projects_project_title__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_projects_project_title__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_projects_more_projects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/projects/more-projects */ "./src/blocks/modules/projects/more-projects.js");
/* harmony import */ var _modules_projects_more_projects__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_modules_projects_more_projects__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modules_new_project_description_project__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/new-project/description-project */ "./src/blocks/modules/new-project/description-project.js");
/* harmony import */ var _modules_new_project_type_file_close__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/new-project/type-file-close */ "./src/blocks/modules/new-project/type-file-close.js");
/* harmony import */ var _modules_new_project_type_file_close__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_modules_new_project_type_file_close__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _modules_new_project_new_item_bottom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! %modules%/new-project/new-item-bottom */ "./src/blocks/modules/new-project/new-item-bottom.js");
/* harmony import */ var _modules_new_project_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! %modules%/new-project/select */ "./src/blocks/modules/new-project/select.js");
/* harmony import */ var _modules_new_project_select__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_modules_new_project_select__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _modules_new_project_create_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! %modules%/new-project/create-data */ "./src/blocks/modules/new-project/create-data.js");
/* harmony import */ var _modules_new_project_requisites_form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! %modules%/new-project/requisites-form */ "./src/blocks/modules/new-project/requisites-form.js");
/* harmony import */ var _modules_new_project_requisites_form__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_modules_new_project_requisites_form__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _modules_new_project_input_type_date__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! %modules%/new-project/input-type-date */ "./src/blocks/modules/new-project/input-type-date.js");
/* harmony import */ var _modules_login_validate_form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! %modules%/login/validate-form */ "./src/blocks/modules/login/validate-form.js");
/* harmony import */ var _modules_login_validate_form__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_modules_login_validate_form__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _modules_register_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! %modules%/register/tabs */ "./src/blocks/modules/register/tabs.js");
/* harmony import */ var _modules_register_tabs__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_modules_register_tabs__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _modules_register_nouislider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! %modules%/register/nouislider */ "./src/blocks/modules/register/nouislider.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_19__);





















/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_1__);



/***/ })

/******/ });
//# sourceMappingURL=main.js.map