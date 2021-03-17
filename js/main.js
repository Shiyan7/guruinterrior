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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

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

var burger = document.querySelector(".burger");

var burgerOpen = function burgerOpen() {
  burger.classList.toggle("burger-close");
};

burger.addEventListener("click", burgerOpen);

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

var dropdownBtn = document.querySelectorAll(".dropdown__btn");
dropdownBtn.forEach(function (el) {
  el.addEventListener("click", function () {
    el.parentElement.querySelector(".dropdown").classList.toggle("is-open");

    if (el.classList.contains("user__btn")) {
      el.classList.toggle("user__btn--active");
    }
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

/***/ "./src/blocks/modules/stages/accordion.js":
/*!************************************************!*\
  !*** ./src/blocks/modules/stages/accordion.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var accordionTops = document.querySelectorAll(".accordion__top");
accordionTops.forEach(function (btn) {
  var accordionBtn = btn.querySelector(".accordion__btn");
  btn.addEventListener("click", function (e) {
    accordionBtn.classList.toggle("accordion__btn--active");
    accordionBottom = e.currentTarget.parentElement.querySelector(".accordion__bottom");
    accordionBottom.classList.toggle("show");
  });
});

/***/ }),

/***/ "./src/blocks/modules/stages/save.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/stages/save.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var stageSave = document.querySelectorAll(".stage__item-save");

if (stageSave) {
  stageSave.forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.currentTarget.classList.toggle("stage__item-save--active");
    });
  });
}

/***/ }),

/***/ "./src/blocks/modules/stages/tabs.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/stages/tabs.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var tabsBtn = document.querySelectorAll('.tabs__btn');
var tabsContent = document.querySelectorAll(".tabs__content");
tabsContent.forEach(function (el) {
  var switchContent = function switchContent(path) {
    tabsContent.forEach(function (el) {
      el.classList.remove('tabs__content--active');
    });
    document.querySelector("[data-tabs-target=\"".concat(path, "\"]")).classList.add('tabs__content--active');
  };

  tabsBtn.forEach(function (el) {
    el.addEventListener('click', function (e) {
      var tabsPath = el.getAttribute("data-tabs-path");
      tabsBtn.forEach(function (el) {
        el.classList.remove('stages__tabs-btn--active');
      });
      document.querySelector("[data-tabs-path=\"".concat(tabsPath, "\"]")).classList.add('stages__tabs-btn--active');
      switchContent(tabsPath);
    });
  });
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
/* harmony import */ var _modules_stages_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/stages/tabs */ "./src/blocks/modules/stages/tabs.js");
/* harmony import */ var _modules_stages_tabs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_stages_tabs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_stages_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/stages/accordion */ "./src/blocks/modules/stages/accordion.js");
/* harmony import */ var _modules_stages_accordion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_stages_accordion__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_stages_save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/stages/save */ "./src/blocks/modules/stages/save.js");
/* harmony import */ var _modules_stages_save__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_stages_save__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_hero_hero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/hero/hero */ "./src/blocks/modules/hero/hero.js");
/* harmony import */ var _modules_hero_hero__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_hero_hero__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_7__);









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