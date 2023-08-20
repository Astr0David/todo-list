"use strict";
(self["webpackChunktest_page"] = self["webpackChunktest_page"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@10..48,200;10..48,300;10..48,400;10..48,500;10..48,600;10..48,700;10..48,800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Ubuntu, sans-serif;
}

body {
    height: 100vh;
}

.main-content {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 45px 1fr;
    grid-template-areas:
        'navbar'
        'main';
}

.nav {
    background-color: #344e41;
    grid-area: navbar;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    color: #f1faee;
    position: sticky;
    z-index: 1000;
}

.nav-inner {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.left-nav,
.right-nav {
    display: flex;
    align-items: center;
    justify-content: center;
}

.logo {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 1.5rem;
    gap: 0.25rem;
    font-family: 2rem;
    color: #f1faee;
    user-select: none;
}

.nav .fa-plus {
    font-size: 1.25rem;
    background-color: #f1faee;
    padding: 0.25rem;
    border-radius: 5px;
    color: #1d3557;
}

.nav .fa-plus:hover {
    opacity: 50%;
}

.nav .fa-plus:active {
    transform: scale(0.95);
}

.left-nav {
    display: flex;
    align-items: center;
    text-align: center;
    gap: 1.5rem;
    font-size: 1.2rem;
    transition: 0.2s ease;
}

.left-nav .fa-house {
    font-size: 1.2rem;
    transition: 0.3s ease;
}

.left-nav .fa-bars,
.fa-bars-staggered {
    transition: 0.3s ease;
}

.nav .fa-solid {
    cursor: pointer;
    transform: 0.2s ease;
}

.left-nav .fa-solid:hover {
    opacity: 50%;
}

.left-nav .fa-solid:active {
    transform: scale(0.95);
}

.center-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

#dateInput {
    background: transparent;
    border: none;
    font-size: 1rem;
    color: #dad7cd;
    text-transform: uppercase;
    background-color: #588157;
    border-radius: 4px;
    padding: 0.4rem 1rem;
    text-align: center;
  }

.main {
    grid-area: main;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 300px 1fr;
    grid-template-areas:
        'sidebar main-area';
}

.sidebar {
    background-color: #a3b18a;
    grid-area: sidebar;
    padding: 2.5rem 0rem;
    padding-left: 3rem;
    padding-right: 1rem;
    position: relative;
    transition: 0.3s ease;
    left: 0;
}

.menu {
    text-decoration: none;
    list-style: none;
    padding: 0;
    margin: 0;
}

.menu li {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    font-size: 1.1rem;
    margin-bottom: .6rem;
    padding: 0.5rem;
    font-weight: 300;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.2s ease;
    user-select: none;
}

.nav-buttons:hover {
    background-color: #dad7cd;
}

.menu li div {
    display: flex;
    align-items: center;
    text-align: center;
}

.menu li i {
    padding-right: 1rem;
}

.nav-buttons.active {
    font-weight: 400;
}

.today i {
    color: crimson;
    opacity: 50%;
}

.inbox i {
    color: gray;
}

.all i {
    opacity: 70%;
}

.upcoming i {
    color: blue;
    opacity: 50%;
}

.important i {
    color: red;
    opacity: 50%;
}

.lists i {
    color: green;
}

.menu .lists {
    margin-bottom: .5rem;
}

.lists .fa-chevron-up {
    color: black;
    font-size: 1rem;
    padding-top: 0.1rem;
}

.accordion {
    padding-left: 2.5rem;
    font-size: 1rem;
    transition: max-height 0.2s ease-out;
    overflow: hidden;
    max-height: 0;

}

.create-new i {
    padding-right: .25rem;
    opacity: 65%;
}

.accordion .create-new {
    padding-left: 1.5rem;
    padding-top: .5rem;
    cursor: pointer;
    user-select: none;
    transition: all 0.1s ease-in-out;
    display: flex;
    align-items: center;
    text-align: center;
}

.accordion .create-new:hover {
    color: white;
    transform: translateX(-5%)
}

.accordion .create-new:active {
    color: black;
    opacity: 80%;
}

.accordion .new-lists i {
    padding-right: .5rem;
    font-size: .5rem;
    opacity: 50%;
}

.new-lists div {
    padding: .5rem;
    width: 100%;
    border-radius: 5px;
    display: flex;
    align-items: center;
    text-align: center;
    margin-bottom: 0.5rem;
    user-select: none;
    cursor: pointer;
    font-weight: 300;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@10..48,200;10..48,300;10..48,400;10..48,500;10..48,600;10..48,700;10..48,800&display=swap');\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: Ubuntu, sans-serif;\n}\n\nbody {\n    height: 100vh;\n}\n\n.main-content {\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 45px 1fr;\n    grid-template-areas:\n        'navbar'\n        'main';\n}\n\n.nav {\n    background-color: #344e41;\n    grid-area: navbar;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 45px;\n    color: #f1faee;\n    position: sticky;\n    z-index: 1000;\n}\n\n.nav-inner {\n    width: 90%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.left-nav,\n.right-nav {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.logo {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding-left: 1.5rem;\n    gap: 0.25rem;\n    font-family: 2rem;\n    color: #f1faee;\n    user-select: none;\n}\n\n.nav .fa-plus {\n    font-size: 1.25rem;\n    background-color: #f1faee;\n    padding: 0.25rem;\n    border-radius: 5px;\n    color: #1d3557;\n}\n\n.nav .fa-plus:hover {\n    opacity: 50%;\n}\n\n.nav .fa-plus:active {\n    transform: scale(0.95);\n}\n\n.left-nav {\n    display: flex;\n    align-items: center;\n    text-align: center;\n    gap: 1.5rem;\n    font-size: 1.2rem;\n    transition: 0.2s ease;\n}\n\n.left-nav .fa-house {\n    font-size: 1.2rem;\n    transition: 0.3s ease;\n}\n\n.left-nav .fa-bars,\n.fa-bars-staggered {\n    transition: 0.3s ease;\n}\n\n.nav .fa-solid {\n    cursor: pointer;\n    transform: 0.2s ease;\n}\n\n.left-nav .fa-solid:hover {\n    opacity: 50%;\n}\n\n.left-nav .fa-solid:active {\n    transform: scale(0.95);\n}\n\n.center-nav {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n}\n\n#dateInput {\n    background: transparent;\n    border: none;\n    font-size: 1rem;\n    color: #dad7cd;\n    text-transform: uppercase;\n    background-color: #588157;\n    border-radius: 4px;\n    padding: 0.4rem 1rem;\n    text-align: center;\n  }\n\n.main {\n    grid-area: main;\n    display: grid;\n    grid-template-rows: 1fr;\n    grid-template-columns: 300px 1fr;\n    grid-template-areas:\n        'sidebar main-area';\n}\n\n.sidebar {\n    background-color: #a3b18a;\n    grid-area: sidebar;\n    padding: 2.5rem 0rem;\n    padding-left: 3rem;\n    padding-right: 1rem;\n    position: relative;\n    transition: 0.3s ease;\n    left: 0;\n}\n\n.menu {\n    text-decoration: none;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n\n.menu li {\n    display: flex;\n    align-items: center;\n    text-align: center;\n    justify-content: space-between;\n    font-size: 1.1rem;\n    margin-bottom: .6rem;\n    padding: 0.5rem;\n    font-weight: 300;\n    cursor: pointer;\n    border-radius: 5px;\n    transition: background-color 0.2s ease;\n    user-select: none;\n}\n\n.nav-buttons:hover {\n    background-color: #dad7cd;\n}\n\n.menu li div {\n    display: flex;\n    align-items: center;\n    text-align: center;\n}\n\n.menu li i {\n    padding-right: 1rem;\n}\n\n.nav-buttons.active {\n    font-weight: 400;\n}\n\n.today i {\n    color: crimson;\n    opacity: 50%;\n}\n\n.inbox i {\n    color: gray;\n}\n\n.all i {\n    opacity: 70%;\n}\n\n.upcoming i {\n    color: blue;\n    opacity: 50%;\n}\n\n.important i {\n    color: red;\n    opacity: 50%;\n}\n\n.lists i {\n    color: green;\n}\n\n.menu .lists {\n    margin-bottom: .5rem;\n}\n\n.lists .fa-chevron-up {\n    color: black;\n    font-size: 1rem;\n    padding-top: 0.1rem;\n}\n\n.accordion {\n    padding-left: 2.5rem;\n    font-size: 1rem;\n    transition: max-height 0.2s ease-out;\n    overflow: hidden;\n    max-height: 0;\n\n}\n\n.create-new i {\n    padding-right: .25rem;\n    opacity: 65%;\n}\n\n.accordion .create-new {\n    padding-left: 1.5rem;\n    padding-top: .5rem;\n    cursor: pointer;\n    user-select: none;\n    transition: all 0.1s ease-in-out;\n    display: flex;\n    align-items: center;\n    text-align: center;\n}\n\n.accordion .create-new:hover {\n    color: white;\n    transform: translateX(-5%)\n}\n\n.accordion .create-new:active {\n    color: black;\n    opacity: 80%;\n}\n\n.accordion .new-lists i {\n    padding-right: .5rem;\n    font-size: .5rem;\n    opacity: 50%;\n}\n\n.new-lists div {\n    padding: .5rem;\n    width: 100%;\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n    text-align: center;\n    margin-bottom: 0.5rem;\n    user-select: none;\n    cursor: pointer;\n    font-weight: 300;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _webpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webpage */ "./src/webpage.js");



const mainContent = document.getElementById('content');

(0,_webpage__WEBPACK_IMPORTED_MODULE_1__["default"])()

/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createSidebar() {
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    const sidebarMenu = document.createElement('div');
    sidebarMenu.classList.add('sidebar-menu');

    const menu = document.createElement('ul');
    menu.classList.add('menu');

    const inbox = createSidebarItem('inbox', 'fa-inbox', 'Inbox');
    inbox.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(inbox);
    });

    const today = createSidebarItem('today', 'fa-calendar-day', 'Today');
    today.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(today);
    });

    const upcoming = createSidebarItem('upcoming', 'fa-calendar-week', 'Upcoming');
    upcoming.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(upcoming);
    });

    const all = createSidebarItem('all', 'fa-calendar-days', 'All');
    all.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(all);
    });

    const important = createSidebarItem('important', 'fa-star', 'Important');
    important.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(important);
    });

    const lists = document.createElement('li');
    lists.classList.add('lists');
    lists.innerHTML = '<div><i class="fa-solid fa-list-check"></i> <p>Lists</p></div> <div><i class="fa-solid fa-chevron-up"></i></div>';
    lists.addEventListener("click", listClick);

    const accordion = document.createElement('div');
    accordion.classList.add('accordion');

    const newLists = document.createElement('div');
    newLists.classList.add('new-lists');
    newLists.innerHTML = '<div class = "nav-buttons"><i class="fa-solid fa-circle"></i>Daily Tasks</div><div class = "nav-buttons"><i class="fa-solid fa-circle"></i>Daily Tasks</div>'
    newLists.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(e.target);
    });

    const createNew = document.createElement('div');
    createNew.classList.add('create-new');
    createNew.innerHTML = '<i class="fa-solid fa-plus"></i> New List'

    accordion.appendChild(newLists);
    accordion.appendChild(createNew);

    menu.appendChild(inbox);
    menu.appendChild(today);
    menu.appendChild(upcoming);
    menu.appendChild(all);
    menu.appendChild(important);
    menu.appendChild(lists);
    menu.appendChild(accordion)

    sidebarMenu.appendChild(menu);

    sidebar.appendChild(sidebarMenu);

    const main = document.getElementById('main');
    main.appendChild(sidebar);
}

function createSidebarItem(className, iconClass, text) {
    const item = document.createElement('li');
    item.classList.add(className, 'nav-buttons');

    const itemContent = document.createElement('div');
    itemContent.innerHTML = `<i class="fa-solid ${iconClass}"></i> <p>${text}</p>`;

    item.appendChild(itemContent);

    return item;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".nav-buttons");

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove("active");
        }
    });

    button.classList.add("active");
}

function listClick() {
    const lists = document.querySelector('.lists')
    const chevronIcon = lists.querySelector(".fa-chevron-up");
    chevronIcon.classList.toggle("fa-chevron-down");

    const panel = document.querySelector('.accordion');

    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
}

function sidebarAnimate() {
    const sidebar = document.querySelector('.sidebar');
    const button = document.getElementById('toggle-sidebar');

    if (sidebar.style.left === '' || sidebar.style.left === '0px') {
        sidebar.style.left = '-100%';
        button.classList.remove('fa-bars-staggered');
        button.classList.add('fa-bars');
    } else if (sidebar.style.left === '-100%') {
        sidebar.style.left = '0';
        button.classList.remove('fa-bars');
        button.classList.add('fa-bars-staggered');
    }
}

function homeButtonClick() {
    const today = document.querySelector(".today");

    setActiveButton(today)
}

function initializeSidebar() {
    createSidebar();

    const toggleButton = document.getElementById('toggle-sidebar');
    toggleButton.addEventListener('click', sidebarAnimate);

    const homeButton = document.getElementById('toggle-home');
    homeButton.addEventListener('click', homeButtonClick)

    setActiveButton(document.querySelector(".today"));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeSidebar);


/***/ }),

/***/ "./src/webpage.js":
/*!************************!*\
  !*** ./src/webpage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");


function createNav() {
    const nav = document.createElement('div');
    nav.classList.add('nav');

    const navInner = document.createElement('div');
    navInner.classList.add('nav-inner')

    const leftDiv = document.createElement('div');
    leftDiv.classList.add('left-nav');

    const centerDiv = document.createElement('div');
    centerDiv.classList.add('center-nav');

    const rightDiv = document.createElement('div');
    rightDiv.classList.add('right-nav');

    const logoDiv = document.createElement('div');
    logoDiv.classList.add('logo');

    const menuIcon = document.createElement('i');
    menuIcon.classList.add('fa-solid', 'fa-bars-staggered');
    menuIcon.setAttribute('id', 'toggle-sidebar');

    const homeIcon = document.createElement('i');
    homeIcon.classList.add('fa-solid', 'fa-house');
    homeIcon.setAttribute('id', 'toggle-home');

    leftDiv.appendChild(menuIcon);
    leftDiv.appendChild(homeIcon);

    const date = document.createElement('input');
    date.setAttribute('type', 'date');
    date.setAttribute('id', 'dateInput');

    centerDiv.appendChild(date)

    const addIcon = document.createElement('i');
    addIcon.classList.add('fa-solid', 'fa-plus');

    const title = document.createElement('h1');
    title.textContent = 'ToDo';
    title.classList.add('title');

    logoDiv.appendChild(title);

    rightDiv.appendChild(addIcon);
    rightDiv.appendChild(logoDiv);

    navInner.appendChild(leftDiv);
    navInner.appendChild(centerDiv);
    navInner.appendChild(rightDiv);

    nav.appendChild(navInner);

    return nav
}

function createMain() {
    const main = document.createElement('div');
    main.classList.add('main');
    main.setAttribute('id', 'main');


    return main
}

function createWebpage() {
    const mainContent = document.getElementById("content");

    mainContent.appendChild(createNav());
    mainContent.appendChild(createMain());

    var currentDate = new Date();
    var formattedDate = currentDate.toISOString().split('T')[0];
    document.getElementById("dateInput").value = formattedDate;

    (0,_sidebar__WEBPACK_IMPORTED_MODULE_0__["default"])()
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createWebpage);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHdJQUF3SSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcseUJBQXlCO0FBQ3hOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxV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Q0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2JxQjtBQUNpQjs7QUFFdEM7O0FBRUEsb0RBQWE7Ozs7Ozs7Ozs7Ozs7O0FDTGI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtELFVBQVUsWUFBWSxLQUFLOztBQUU3RTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsaUJBQWlCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0SlE7O0FBRXpDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxvREFBaUI7QUFDckI7O0FBRUEsaUVBQWUsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90ZXN0LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Rlc3QtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Rlc3QtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90ZXN0LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVzdC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZXN0LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVzdC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Rlc3QtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Rlc3QtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Rlc3QtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZXN0LXBhZ2UvLi9zcmMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90ZXN0LXBhZ2UvLi9zcmMvd2VicGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJyaWNvbGFnZStHcm90ZXNxdWU6b3Bzeix3Z2h0QDEwLi40OCwyMDA7MTAuLjQ4LDMwMDsxMC4uNDgsNDAwOzEwLi40OCw1MDA7MTAuLjQ4LDYwMDsxMC4uNDgsNzAwOzEwLi40OCw4MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OiBVYnVudHUsIHNhbnMtc2VyaWY7XG59XG5cbmJvZHkge1xuICAgIGhlaWdodDogMTAwdmg7XG59XG5cbi5tYWluLWNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDVweCAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgJ25hdmJhcidcbiAgICAgICAgJ21haW4nO1xufVxuXG4ubmF2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ0ZTQxO1xuICAgIGdyaWQtYXJlYTogbmF2YmFyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgY29sb3I6ICNmMWZhZWU7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB6LWluZGV4OiAxMDAwO1xufVxuXG4ubmF2LWlubmVyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5sZWZ0LW5hdixcbi5yaWdodC1uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmxvZ28ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbiAgICBnYXA6IDAuMjVyZW07XG4gICAgZm9udC1mYW1pbHk6IDJyZW07XG4gICAgY29sb3I6ICNmMWZhZWU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5uYXYgLmZhLXBsdXMge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmYWVlO1xuICAgIHBhZGRpbmc6IDAuMjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiAjMWQzNTU3O1xufVxuXG4ubmF2IC5mYS1wbHVzOmhvdmVyIHtcbiAgICBvcGFjaXR5OiA1MCU7XG59XG5cbi5uYXYgLmZhLXBsdXM6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xufVxuXG4ubGVmdC1uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZ2FwOiAxLjVyZW07XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xufVxuXG4ubGVmdC1uYXYgLmZhLWhvdXNlIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG59XG5cbi5sZWZ0LW5hdiAuZmEtYmFycyxcbi5mYS1iYXJzLXN0YWdnZXJlZCB7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xufVxuXG4ubmF2IC5mYS1zb2xpZCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zZm9ybTogMC4ycyBlYXNlO1xufVxuXG4ubGVmdC1uYXYgLmZhLXNvbGlkOmhvdmVyIHtcbiAgICBvcGFjaXR5OiA1MCU7XG59XG5cbi5sZWZ0LW5hdiAuZmEtc29saWQ6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xufVxuXG4uY2VudGVyLW5hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2RhdGVJbnB1dCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogI2RhZDdjZDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODgxNTc7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4ubWFpbiB7XG4gICAgZ3JpZC1hcmVhOiBtYWluO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgJ3NpZGViYXIgbWFpbi1hcmVhJztcbn1cblxuLnNpZGViYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhM2IxOGE7XG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xuICAgIHBhZGRpbmc6IDIuNXJlbSAwcmVtO1xuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gICAgbGVmdDogMDtcbn1cblxuLm1lbnUge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4ubWVudSBsaSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogLjZyZW07XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLm5hdi1idXR0b25zOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkN2NkO1xufVxuXG4ubWVudSBsaSBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tZW51IGxpIGkge1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG59XG5cbi5uYXYtYnV0dG9ucy5hY3RpdmUge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi50b2RheSBpIHtcbiAgICBjb2xvcjogY3JpbXNvbjtcbiAgICBvcGFjaXR5OiA1MCU7XG59XG5cbi5pbmJveCBpIHtcbiAgICBjb2xvcjogZ3JheTtcbn1cblxuLmFsbCBpIHtcbiAgICBvcGFjaXR5OiA3MCU7XG59XG5cbi51cGNvbWluZyBpIHtcbiAgICBjb2xvcjogYmx1ZTtcbiAgICBvcGFjaXR5OiA1MCU7XG59XG5cbi5pbXBvcnRhbnQgaSB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBvcGFjaXR5OiA1MCU7XG59XG5cbi5saXN0cyBpIHtcbiAgICBjb2xvcjogZ3JlZW47XG59XG5cbi5tZW51IC5saXN0cyB7XG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG59XG5cbi5saXN0cyAuZmEtY2hldnJvbi11cCB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBwYWRkaW5nLXRvcDogMC4xcmVtO1xufVxuXG4uYWNjb3JkaW9uIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjJzIGVhc2Utb3V0O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWF4LWhlaWdodDogMDtcblxufVxuXG4uY3JlYXRlLW5ldyBpIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAuMjVyZW07XG4gICAgb3BhY2l0eTogNjUlO1xufVxuXG4uYWNjb3JkaW9uIC5jcmVhdGUtbmV3IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbiAgICBwYWRkaW5nLXRvcDogLjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hY2NvcmRpb24gLmNyZWF0ZS1uZXc6aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUlKVxufVxuXG4uYWNjb3JkaW9uIC5jcmVhdGUtbmV3OmFjdGl2ZSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIG9wYWNpdHk6IDgwJTtcbn1cblxuLmFjY29yZGlvbiAubmV3LWxpc3RzIGkge1xuICAgIHBhZGRpbmctcmlnaHQ6IC41cmVtO1xuICAgIGZvbnQtc2l6ZTogLjVyZW07XG4gICAgb3BhY2l0eTogNTAlO1xufVxuXG4ubmV3LWxpc3RzIGRpdiB7XG4gICAgcGFkZGluZzogLjVyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUI7O2NBRVU7QUFDZDs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7O0FBRUE7O0lBRUksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCOztBQUVBOztJQUVJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixlQUFlO0lBQ2YsY0FBYztJQUNkLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixrQkFBa0I7RUFDcEI7O0FBRUY7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQ0FBZ0M7SUFDaEM7MkJBQ3VCO0FBQzNCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLE9BQU87QUFDWDs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixzQ0FBc0M7SUFDdEMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ccmljb2xhZ2UrR3JvdGVzcXVlOm9wc3osd2dodEAxMC4uNDgsMjAwOzEwLi40OCwzMDA7MTAuLjQ4LDQwMDsxMC4uNDgsNTAwOzEwLi40OCw2MDA7MTAuLjQ4LDcwMDsxMC4uNDgsODAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBVYnVudHUsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDVweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAnbmF2YmFyJ1xcbiAgICAgICAgJ21haW4nO1xcbn1cXG5cXG4ubmF2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0NGU0MTtcXG4gICAgZ3JpZC1hcmVhOiBuYXZiYXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICBjb2xvcjogI2YxZmFlZTtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgei1pbmRleDogMTAwMDtcXG59XFxuXFxuLm5hdi1pbm5lciB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmxlZnQtbmF2LFxcbi5yaWdodC1uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XFxuICAgIGdhcDogMC4yNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6IDJyZW07XFxuICAgIGNvbG9yOiAjZjFmYWVlO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLm5hdiAuZmEtcGx1cyB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZmFlZTtcXG4gICAgcGFkZGluZzogMC4yNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjogIzFkMzU1NztcXG59XFxuXFxuLm5hdiAuZmEtcGx1czpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDUwJTtcXG59XFxuXFxuLm5hdiAuZmEtcGx1czphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbn1cXG5cXG4ubGVmdC1uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdhcDogMS41cmVtO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xcbn1cXG5cXG4ubGVmdC1uYXYgLmZhLWhvdXNlIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcXG59XFxuXFxuLmxlZnQtbmF2IC5mYS1iYXJzLFxcbi5mYS1iYXJzLXN0YWdnZXJlZCB7XFxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcXG59XFxuXFxuLm5hdiAuZmEtc29saWQge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogMC4ycyBlYXNlO1xcbn1cXG5cXG4ubGVmdC1uYXYgLmZhLXNvbGlkOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogNTAlO1xcbn1cXG5cXG4ubGVmdC1uYXYgLmZhLXNvbGlkOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxufVxcblxcbi5jZW50ZXItbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2RhdGVJbnB1dCB7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6ICNkYWQ3Y2Q7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODgxNTc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgcGFkZGluZzogMC40cmVtIDFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4ubWFpbiB7XFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgJ3NpZGViYXIgbWFpbi1hcmVhJztcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTNiMThhO1xcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICAgIHBhZGRpbmc6IDIuNXJlbSAwcmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xcbiAgICBsZWZ0OiAwO1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubWVudSBsaSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogLjZyZW07XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLm5hdi1idXR0b25zOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RhZDdjZDtcXG59XFxuXFxuLm1lbnUgbGkgZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubWVudSBsaSBpIHtcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcXG59XFxuXFxuLm5hdi1idXR0b25zLmFjdGl2ZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi50b2RheSBpIHtcXG4gICAgY29sb3I6IGNyaW1zb247XFxuICAgIG9wYWNpdHk6IDUwJTtcXG59XFxuXFxuLmluYm94IGkge1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLmFsbCBpIHtcXG4gICAgb3BhY2l0eTogNzAlO1xcbn1cXG5cXG4udXBjb21pbmcgaSB7XFxuICAgIGNvbG9yOiBibHVlO1xcbiAgICBvcGFjaXR5OiA1MCU7XFxufVxcblxcbi5pbXBvcnRhbnQgaSB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIG9wYWNpdHk6IDUwJTtcXG59XFxuXFxuLmxpc3RzIGkge1xcbiAgICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5tZW51IC5saXN0cyB7XFxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xcbn1cXG5cXG4ubGlzdHMgLmZhLWNoZXZyb24tdXAge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZy10b3A6IDAuMXJlbTtcXG59XFxuXFxuLmFjY29yZGlvbiB7XFxuICAgIHBhZGRpbmctbGVmdDogMi41cmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4ycyBlYXNlLW91dDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgbWF4LWhlaWdodDogMDtcXG5cXG59XFxuXFxuLmNyZWF0ZS1uZXcgaSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IC4yNXJlbTtcXG4gICAgb3BhY2l0eTogNjUlO1xcbn1cXG5cXG4uYWNjb3JkaW9uIC5jcmVhdGUtbmV3IHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XFxuICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmFjY29yZGlvbiAuY3JlYXRlLW5ldzpob3ZlciB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01JSlcXG59XFxuXFxuLmFjY29yZGlvbiAuY3JlYXRlLW5ldzphY3RpdmUge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIG9wYWNpdHk6IDgwJTtcXG59XFxuXFxuLmFjY29yZGlvbiAubmV3LWxpc3RzIGkge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAuNXJlbTtcXG4gICAgZm9udC1zaXplOiAuNXJlbTtcXG4gICAgb3BhY2l0eTogNTAlO1xcbn1cXG5cXG4ubmV3LWxpc3RzIGRpdiB7XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGNyZWF0ZVdlYnBhZ2UgZnJvbSAnLi93ZWJwYWdlJztcblxuY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5jcmVhdGVXZWJwYWdlKCkiLCJmdW5jdGlvbiBjcmVhdGVTaWRlYmFyKCkge1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKTtcblxuICAgIGNvbnN0IHNpZGViYXJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZWJhck1lbnUuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1tZW51Jyk7XG5cbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcblxuICAgIGNvbnN0IGluYm94ID0gY3JlYXRlU2lkZWJhckl0ZW0oJ2luYm94JywgJ2ZhLWluYm94JywgJ0luYm94Jyk7XG4gICAgaW5ib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcbiAgICAgICAgc2V0QWN0aXZlQnV0dG9uKGluYm94KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRvZGF5ID0gY3JlYXRlU2lkZWJhckl0ZW0oJ3RvZGF5JywgJ2ZhLWNhbGVuZGFyLWRheScsICdUb2RheScpO1xuICAgIHRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgICAgIHNldEFjdGl2ZUJ1dHRvbih0b2RheSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB1cGNvbWluZyA9IGNyZWF0ZVNpZGViYXJJdGVtKCd1cGNvbWluZycsICdmYS1jYWxlbmRhci13ZWVrJywgJ1VwY29taW5nJyk7XG4gICAgdXBjb21pbmcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcbiAgICAgICAgc2V0QWN0aXZlQnV0dG9uKHVwY29taW5nKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGFsbCA9IGNyZWF0ZVNpZGViYXJJdGVtKCdhbGwnLCAnZmEtY2FsZW5kYXItZGF5cycsICdBbGwnKTtcbiAgICBhbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcbiAgICAgICAgc2V0QWN0aXZlQnV0dG9uKGFsbCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBpbXBvcnRhbnQgPSBjcmVhdGVTaWRlYmFySXRlbSgnaW1wb3J0YW50JywgJ2ZhLXN0YXInLCAnSW1wb3J0YW50Jyk7XG4gICAgaW1wb3J0YW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgICAgIHNldEFjdGl2ZUJ1dHRvbihpbXBvcnRhbnQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbGlzdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpc3RzLmNsYXNzTGlzdC5hZGQoJ2xpc3RzJyk7XG4gICAgbGlzdHMuaW5uZXJIVE1MID0gJzxkaXY+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1saXN0LWNoZWNrXCI+PC9pPiA8cD5MaXN0czwvcD48L2Rpdj4gPGRpdj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNoZXZyb24tdXBcIj48L2k+PC9kaXY+JztcbiAgICBsaXN0cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbGlzdENsaWNrKTtcblxuICAgIGNvbnN0IGFjY29yZGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFjY29yZGlvbi5jbGFzc0xpc3QuYWRkKCdhY2NvcmRpb24nKTtcblxuICAgIGNvbnN0IG5ld0xpc3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3TGlzdHMuY2xhc3NMaXN0LmFkZCgnbmV3LWxpc3RzJyk7XG4gICAgbmV3TGlzdHMuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3MgPSBcIm5hdi1idXR0b25zXCI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jaXJjbGVcIj48L2k+RGFpbHkgVGFza3M8L2Rpdj48ZGl2IGNsYXNzID0gXCJuYXYtYnV0dG9uc1wiPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2lyY2xlXCI+PC9pPkRhaWx5IFRhc2tzPC9kaXY+J1xuICAgIG5ld0xpc3RzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgICAgIHNldEFjdGl2ZUJ1dHRvbihlLnRhcmdldCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjcmVhdGVOZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjcmVhdGVOZXcuY2xhc3NMaXN0LmFkZCgnY3JlYXRlLW5ldycpO1xuICAgIGNyZWF0ZU5ldy5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1wbHVzXCI+PC9pPiBOZXcgTGlzdCdcblxuICAgIGFjY29yZGlvbi5hcHBlbmRDaGlsZChuZXdMaXN0cyk7XG4gICAgYWNjb3JkaW9uLmFwcGVuZENoaWxkKGNyZWF0ZU5ldyk7XG5cbiAgICBtZW51LmFwcGVuZENoaWxkKGluYm94KTtcbiAgICBtZW51LmFwcGVuZENoaWxkKHRvZGF5KTtcbiAgICBtZW51LmFwcGVuZENoaWxkKHVwY29taW5nKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKGFsbCk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChpbXBvcnRhbnQpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobGlzdHMpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoYWNjb3JkaW9uKVxuXG4gICAgc2lkZWJhck1lbnUuYXBwZW5kQ2hpbGQobWVudSk7XG5cbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHNpZGViYXJNZW51KTtcblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGViYXJJdGVtKGNsYXNzTmFtZSwgaWNvbkNsYXNzLCB0ZXh0KSB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSwgJ25hdi1idXR0b25zJyk7XG5cbiAgICBjb25zdCBpdGVtQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1Db250ZW50LmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXNvbGlkICR7aWNvbkNsYXNzfVwiPjwvaT4gPHA+JHt0ZXh0fTwvcD5gO1xuXG4gICAgaXRlbS5hcHBlbmRDaGlsZChpdGVtQ29udGVudCk7XG5cbiAgICByZXR1cm4gaXRlbTtcbn1cblxuZnVuY3Rpb24gc2V0QWN0aXZlQnV0dG9uKGJ1dHRvbikge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1idXR0b25zXCIpO1xuXG4gICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgaWYgKGJ1dHRvbiAhPT0gdGhpcykge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuXG5mdW5jdGlvbiBsaXN0Q2xpY2soKSB7XG4gICAgY29uc3QgbGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdHMnKVxuICAgIGNvbnN0IGNoZXZyb25JY29uID0gbGlzdHMucXVlcnlTZWxlY3RvcihcIi5mYS1jaGV2cm9uLXVwXCIpO1xuICAgIGNoZXZyb25JY29uLmNsYXNzTGlzdC50b2dnbGUoXCJmYS1jaGV2cm9uLWRvd25cIik7XG5cbiAgICBjb25zdCBwYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb24nKTtcblxuICAgIGlmIChwYW5lbC5zdHlsZS5tYXhIZWlnaHQpIHtcbiAgICAgICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBwYW5lbC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzaWRlYmFyQW5pbWF0ZSgpIHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlLXNpZGViYXInKTtcblxuICAgIGlmIChzaWRlYmFyLnN0eWxlLmxlZnQgPT09ICcnIHx8IHNpZGViYXIuc3R5bGUubGVmdCA9PT0gJzBweCcpIHtcbiAgICAgICAgc2lkZWJhci5zdHlsZS5sZWZ0ID0gJy0xMDAlJztcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWJhcnMtc3RhZ2dlcmVkJyk7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmYS1iYXJzJyk7XG4gICAgfSBlbHNlIGlmIChzaWRlYmFyLnN0eWxlLmxlZnQgPT09ICctMTAwJScpIHtcbiAgICAgICAgc2lkZWJhci5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtYmFycycpO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZmEtYmFycy1zdGFnZ2VyZWQnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhvbWVCdXR0b25DbGljaygpIHtcbiAgICBjb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXlcIik7XG5cbiAgICBzZXRBY3RpdmVCdXR0b24odG9kYXkpXG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVTaWRlYmFyKCkge1xuICAgIGNyZWF0ZVNpZGViYXIoKTtcblxuICAgIGNvbnN0IHRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUtc2lkZWJhcicpO1xuICAgIHRvZ2dsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNpZGViYXJBbmltYXRlKTtcblxuICAgIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlLWhvbWUnKTtcbiAgICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaG9tZUJ1dHRvbkNsaWNrKVxuXG4gICAgc2V0QWN0aXZlQnV0dG9uKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXlcIikpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsaXplU2lkZWJhcjtcbiIsImltcG9ydCBpbml0aWFsaXplU2lkZWJhciBmcm9tICcuL3NpZGViYXInXG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXYuY2xhc3NMaXN0LmFkZCgnbmF2Jyk7XG5cbiAgICBjb25zdCBuYXZJbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdklubmVyLmNsYXNzTGlzdC5hZGQoJ25hdi1pbm5lcicpXG5cbiAgICBjb25zdCBsZWZ0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGVmdERpdi5jbGFzc0xpc3QuYWRkKCdsZWZ0LW5hdicpO1xuXG4gICAgY29uc3QgY2VudGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2VudGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2NlbnRlci1uYXYnKTtcblxuICAgIGNvbnN0IHJpZ2h0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmlnaHREaXYuY2xhc3NMaXN0LmFkZCgncmlnaHQtbmF2Jyk7XG5cbiAgICBjb25zdCBsb2dvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG9nb0Rpdi5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XG5cbiAgICBjb25zdCBtZW51SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBtZW51SWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1iYXJzLXN0YWdnZXJlZCcpO1xuICAgIG1lbnVJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9nZ2xlLXNpZGViYXInKTtcblxuICAgIGNvbnN0IGhvbWVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIGhvbWVJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLWhvdXNlJyk7XG4gICAgaG9tZUljb24uc2V0QXR0cmlidXRlKCdpZCcsICd0b2dnbGUtaG9tZScpO1xuXG4gICAgbGVmdERpdi5hcHBlbmRDaGlsZChtZW51SWNvbik7XG4gICAgbGVmdERpdi5hcHBlbmRDaGlsZChob21lSWNvbik7XG5cbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RhdGVJbnB1dCcpO1xuXG4gICAgY2VudGVyRGl2LmFwcGVuZENoaWxkKGRhdGUpXG5cbiAgICBjb25zdCBhZGRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIGFkZEljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtcGx1cycpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1RvRG8nO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG5cbiAgICBsb2dvRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIHJpZ2h0RGl2LmFwcGVuZENoaWxkKGFkZEljb24pO1xuICAgIHJpZ2h0RGl2LmFwcGVuZENoaWxkKGxvZ29EaXYpO1xuXG4gICAgbmF2SW5uZXIuYXBwZW5kQ2hpbGQobGVmdERpdik7XG4gICAgbmF2SW5uZXIuYXBwZW5kQ2hpbGQoY2VudGVyRGl2KTtcbiAgICBuYXZJbm5lci5hcHBlbmRDaGlsZChyaWdodERpdik7XG5cbiAgICBuYXYuYXBwZW5kQ2hpbGQobmF2SW5uZXIpO1xuXG4gICAgcmV0dXJuIG5hdlxufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICBtYWluLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbicpO1xuXG5cbiAgICByZXR1cm4gbWFpblxufVxuXG5mdW5jdGlvbiBjcmVhdGVXZWJwYWdlKCkge1xuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KCkpO1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG5cbiAgICB2YXIgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIHZhciBmb3JtYXR0ZWREYXRlID0gY3VycmVudERhdGUudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZUlucHV0XCIpLnZhbHVlID0gZm9ybWF0dGVkRGF0ZTtcblxuICAgIGluaXRpYWxpemVTaWRlYmFyKClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlV2VicGFnZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==