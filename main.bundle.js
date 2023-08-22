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
    color: #f1faee;
    position: sticky;
    top: 0;
    z-index: 100;
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
    background-color: transparent;
    padding: 0.25rem;
    border-radius: 5px;
    color: white;
    transition: 0.2s ease;
}

.nav .fa-plus:hover {
    background-color: #888;
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
    color: white;
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
    padding: 1rem 0rem;
    padding-left: 1rem;
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
    font-weight: 500;
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

.accordion .new-lists i {
    padding-right: .5rem;
    font-size: .5rem;
    opacity: 50%;
}

.the-new-lists {
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
    justify-content: space-between;
}

.the-new-lists div {
    display: flex;
    align-items: center;
}

.the-new-lists .trash {
    justify-content: flex-end;
}

.the-new-lists .trash .fa-trash-can {
    display: none;
    font-size: 1rem;
    color: grey;
    transition: all 0.1s ease-in-out;
}

.the-new-lists .trash .fa-trash-can:hover {
    color: black;
    transform: scale(1.05);
}

.main-area {
    grid-area: main-area;
    padding: 1rem 0rem;
    display: flex;
    justify-content: center;
}

.main-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
}

.main-area .main-child .title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding-top: 2rem;
    padding-left: 1rem;
    font-weight: 400;
    font-size: 1.75rem;
    color: #444;
}

.main-area .main-child .todo-section {
    width: 90%;
}

.overlay, .overlay2 {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 500;
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.45);
    overflow: hidden;
}

.popup, .popup2 {
    background-color: white;
    max-width: 500px;
    width: 100%;
    border-radius: 5px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.4);
    margin: 1rem;
    z-index: 1000;
    position: absolute;
}

.popup .fa-xmark, .popup2 .fa-xmark {
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    padding: .5rem;
    background-color: #eee;
    color: #111;
    border-radius: 50%;
}

.popup .popup-top, .popup2 .popup-top2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    padding: 1.5rem;
    border-bottom: solid 1px rgba(0, 0, 0, 0.2);
}

.popup .popup-top p {
    font-size: 1.75rem;
}

.popup2 .popup-top2 p {
    font-size: 1.25rem;
    text-align: center;
    padding-top: 1rem;
}

.popup .popup-mid, .popup2 .popup-mid {
    padding: 0rem 1.5rem;
    margin-bottom: 1rem;
}

.popup .popup-mid p, .popup2 .popup-mid p {
    margin-bottom: .5rem;
}

.popup .popup-mid input, .popup2 .popup-mid input {
    width: 100%;
    font-size: 1.25rem;
    padding: 0.25rem 0.2rem;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease;
}

.popup .popup-mid input:hover, .popup2 .popup-mid input:hover {
    border: solid 1px #3a5a40;
}

.popup .popup-mid input:focus, .popup2 .popup-mid input:focus {
    border: 2px solid #3a5a40;
    outline: none;
}

.popup .popup-bot, .popup2 .popup-bot2 {
    padding: 0rem 1.5rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: .5rem;
}

.popup .popup-bot #close, .popup2 .popup-bot2 #close {
    font-size: 1.1rem;
    padding: .5rem;
    border-radius: 4px;
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.6);
    color: rgba(0, 0, 0, 0.6);
    background-color: transparent;
    cursor: pointer;
}

.popup .popup-bot #close:hover, .popup2 .popup-bot2 #close:hover {
    border: 1px solid transparent;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
}

.popup .popup-bot #addition, .popup2 .popup-bot2 #deletelist {
    font-size: 1.1rem;
    padding: .5rem 2rem;
    border-radius: 4px;
    outline: none;
    border: 1px solid transparent;
    color: white;
    background-color: #588157;
    cursor: pointer;
}

.popup .popup-bot #addition:hover, .popup2 .popup-bot2 #deletelist:hover {
    transform: scale(1.05);
}

.popup .popup-bot #addition:active, .popup2 .popup-bot2 #deletelist:active {
    transform: scale(1);
}

.popup .fa-xmark:hover {
    transform: scale(1.2);
}

.popup .fa-xmark:active {
    transform: scale(1);
}

.popup .popup-bot #addition:hover {
    transform: scale(1.05);
}

.popup .popup-bot #addition:active {
    transform: scale(1);
}

.popup2 .popup-top2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    padding: 1.5rem;
    border-bottom: solid 1px rgba(0, 0, 0, 0.2);
}

.popup2 .popup-top2 .fa-triangle-exclamation {
    font-size: 4.5rem;
    color: red;
    opacity: 70%;
}

.popup2 .popup-bot2 {
    padding: 0rem 1.5rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: .5rem;
}

.popup2 .popup-bot2 #deletelist {
    font-size: 1.1rem;
    padding: .5rem;
    border-radius: 4px;
    outline: none;
    border: 1px solid transparent;
    color: white;
    background-color: #588157;
    cursor: pointer;
}

.popup2 .popup-bot2 #deletelist:hover {
    transform: scale(1.05);
}

.popup2 .popup-bot2 #deletelist:active {
    transform: scale(1);
}

.popup2 .fa-xmark:hover {
    transform: scale(1.2);
}

.popup2 .fa-xmark:active {
    transform: scale(1);
}

.popup2 .popup-bot2 #deletelist:hover {
    transform: scale(1.05);
}

.popup2 .popup-bot2 #deletelist:active {
    transform: scale(1);
}

.popup2 .popup-top2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    padding: 1.5rem;
    border-bottom: solid 1px rgba(0, 0, 0, 0.2);
}

.popup2 .popup-top2 .fa-triangle-exclamation {
    font-size: 4.5rem;
    color: red;
    opacity: 70%;
}

.popup2 .popup-bot2 {
    padding: 0rem 1.5rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: .5rem;
}

.popup2 .popup-bot2 #deletelist {
    font-size: 1.1rem;
    padding: .5rem;
    border-radius: 4px;
    outline: none;
    border: 1px solid transparent;
    color: white;
    background-color: #588157;
    cursor: pointer;
}

.popup2 .popup-bot2 #deletelist:hover {
    transform: scale(1.05);
}

.popup2 .popup-bot2 #deletelist:active {
    transform: scale(1);
}

.popup2 .fa-xmark:hover {
    transform: scale(1.2);
}

.popup2 .fa-xmark:active {
    transform: scale(1);
}

.popup2 .popup-bot2 #deletelist:hover {
    transform: scale(1.05);
}

.popup2 .popup-bot2 #deletelist:active {
    transform: scale(1);
}

@media (max-width: 600px) {
    .popup {
        max-width: 90%;
    }

    #dateInput {
        display: none;
    }

    .popup2 {
        max-width: 90%;
    }
}

@media (max-width: 280px) {
    .main {
        grid-template-columns: 100% 1fr;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@10..48,200;10..48,300;10..48,400;10..48,500;10..48,600;10..48,700;10..48,800&display=swap');\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: Ubuntu, sans-serif;\n}\n\nbody {\n    height: 100vh;\n}\n\n.main-content {\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 45px 1fr;\n    grid-template-areas:\n        'navbar'\n        'main';\n}\n\n.nav {\n    background-color: #344e41;\n    grid-area: navbar;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #f1faee;\n    position: sticky;\n    top: 0;\n    z-index: 100;\n}\n\n.nav-inner {\n    width: 90%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.left-nav,\n.right-nav {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.logo {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding-left: 1.5rem;\n    gap: 0.25rem;\n    font-family: 2rem;\n    color: #f1faee;\n    user-select: none;\n}\n\n.nav .fa-plus {\n    font-size: 1.25rem;\n    background-color: transparent;\n    padding: 0.25rem;\n    border-radius: 5px;\n    color: white;\n    transition: 0.2s ease;\n}\n\n.nav .fa-plus:hover {\n    background-color: #888;\n}\n\n.nav .fa-plus:active {\n    transform: scale(0.95);\n}\n\n.left-nav {\n    display: flex;\n    align-items: center;\n    text-align: center;\n    gap: 1.5rem;\n    font-size: 1.2rem;\n    transition: 0.2s ease;\n}\n\n.left-nav .fa-house {\n    font-size: 1.2rem;\n    transition: 0.3s ease;\n}\n\n.left-nav .fa-bars,\n.fa-bars-staggered {\n    transition: 0.3s ease;\n}\n\n.nav .fa-solid {\n    cursor: pointer;\n    transform: 0.2s ease;\n}\n\n.left-nav .fa-solid:hover {\n    opacity: 50%;\n}\n\n.left-nav .fa-solid:active {\n    transform: scale(0.95);\n}\n\n.center-nav {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n}\n\n#dateInput {\n    background: transparent;\n    border: none;\n    font-size: 1rem;\n    color: white;\n    text-transform: uppercase;\n    background-color: #588157;\n    border-radius: 4px;\n    padding: 0.4rem 1rem;\n    text-align: center;\n}\n\n.main {\n    grid-area: main;\n    display: grid;\n    grid-template-rows: 1fr;\n    grid-template-columns: 300px 1fr;\n    grid-template-areas:\n        'sidebar main-area';\n}\n\n.sidebar {\n    background-color: #a3b18a;\n    grid-area: sidebar;\n    padding: 1rem 0rem;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    position: relative;\n    transition: 0.3s ease;\n    left: 0;\n}\n\n.menu {\n    text-decoration: none;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n\n.menu li {\n    display: flex;\n    align-items: center;\n    text-align: center;\n    justify-content: space-between;\n    font-size: 1.1rem;\n    margin-bottom: .6rem;\n    padding: 0.5rem;\n    font-weight: 300;\n    cursor: pointer;\n    border-radius: 5px;\n    transition: background-color 0.2s ease;\n    user-select: none;\n}\n\n.nav-buttons:hover {\n    background-color: #dad7cd;\n}\n\n.menu li div {\n    display: flex;\n    align-items: center;\n    text-align: center;\n}\n\n.menu li i {\n    padding-right: 1rem;\n}\n\n.nav-buttons.active {\n    font-weight: 500;\n}\n\n.today i {\n    color: crimson;\n    opacity: 50%;\n}\n\n.inbox i {\n    color: gray;\n}\n\n.all i {\n    opacity: 70%;\n}\n\n.upcoming i {\n    color: blue;\n    opacity: 50%;\n}\n\n.important i {\n    color: red;\n    opacity: 50%;\n}\n\n.lists i {\n    color: green;\n}\n\n.menu .lists {\n    margin-bottom: .5rem;\n}\n\n.lists .fa-chevron-up {\n    color: black;\n    font-size: 1rem;\n    padding-top: 0.1rem;\n}\n\n.accordion {\n    padding-left: 2.5rem;\n    font-size: 1rem;\n    transition: max-height 0.2s ease-out;\n    overflow: hidden;\n    max-height: 0;\n\n}\n\n.create-new i {\n    padding-right: .25rem;\n    opacity: 65%;\n}\n\n.accordion .create-new {\n    padding-left: 1.5rem;\n    padding-top: .5rem;\n    cursor: pointer;\n    user-select: none;\n    transition: all 0.1s ease-in-out;\n    display: flex;\n    align-items: center;\n    text-align: center;\n}\n\n.accordion .create-new:hover {\n    color: white;\n    transform: translateX(-5%)\n}\n\n.accordion .new-lists i {\n    padding-right: .5rem;\n    font-size: .5rem;\n    opacity: 50%;\n}\n\n.the-new-lists {\n    padding: .5rem;\n    width: 100%;\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n    text-align: center;\n    margin-bottom: 0.5rem;\n    user-select: none;\n    cursor: pointer;\n    font-weight: 300;\n    justify-content: space-between;\n}\n\n.the-new-lists div {\n    display: flex;\n    align-items: center;\n}\n\n.the-new-lists .trash {\n    justify-content: flex-end;\n}\n\n.the-new-lists .trash .fa-trash-can {\n    display: none;\n    font-size: 1rem;\n    color: grey;\n    transition: all 0.1s ease-in-out;\n}\n\n.the-new-lists .trash .fa-trash-can:hover {\n    color: black;\n    transform: scale(1.05);\n}\n\n.main-area {\n    grid-area: main-area;\n    padding: 1rem 0rem;\n    display: flex;\n    justify-content: center;\n}\n\n.main-child {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 90%;\n}\n\n.main-area .main-child .title {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    width: 100%;\n    padding-top: 2rem;\n    padding-left: 1rem;\n    font-weight: 400;\n    font-size: 1.75rem;\n    color: #444;\n}\n\n.main-area .main-child .todo-section {\n    width: 90%;\n}\n\n.overlay, .overlay2 {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 500;\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    background-color: rgba(0, 0, 0, 0.45);\n    overflow: hidden;\n}\n\n.popup, .popup2 {\n    background-color: white;\n    max-width: 500px;\n    width: 100%;\n    border-radius: 5px;\n    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.4);\n    margin: 1rem;\n    z-index: 1000;\n    position: absolute;\n}\n\n.popup .fa-xmark, .popup2 .fa-xmark {\n    top: 1rem;\n    right: 1rem;\n    cursor: pointer;\n    padding: .5rem;\n    background-color: #eee;\n    color: #111;\n    border-radius: 50%;\n}\n\n.popup .popup-top, .popup2 .popup-top2 {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 1rem;\n    padding: 1.5rem;\n    border-bottom: solid 1px rgba(0, 0, 0, 0.2);\n}\n\n.popup .popup-top p {\n    font-size: 1.75rem;\n}\n\n.popup2 .popup-top2 p {\n    font-size: 1.25rem;\n    text-align: center;\n    padding-top: 1rem;\n}\n\n.popup .popup-mid, .popup2 .popup-mid {\n    padding: 0rem 1.5rem;\n    margin-bottom: 1rem;\n}\n\n.popup .popup-mid p, .popup2 .popup-mid p {\n    margin-bottom: .5rem;\n}\n\n.popup .popup-mid input, .popup2 .popup-mid input {\n    width: 100%;\n    font-size: 1.25rem;\n    padding: 0.25rem 0.2rem;\n    border-radius: 4px;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    transition: all 0.2s ease;\n}\n\n.popup .popup-mid input:hover, .popup2 .popup-mid input:hover {\n    border: solid 1px #3a5a40;\n}\n\n.popup .popup-mid input:focus, .popup2 .popup-mid input:focus {\n    border: 2px solid #3a5a40;\n    outline: none;\n}\n\n.popup .popup-bot, .popup2 .popup-bot2 {\n    padding: 0rem 1.5rem;\n    margin-bottom: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    gap: .5rem;\n}\n\n.popup .popup-bot #close, .popup2 .popup-bot2 #close {\n    font-size: 1.1rem;\n    padding: .5rem;\n    border-radius: 4px;\n    outline: none;\n    border: 1px solid rgba(0, 0, 0, 0.6);\n    color: rgba(0, 0, 0, 0.6);\n    background-color: transparent;\n    cursor: pointer;\n}\n\n.popup .popup-bot #close:hover, .popup2 .popup-bot2 #close:hover {\n    border: 1px solid transparent;\n    color: white;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.popup .popup-bot #addition, .popup2 .popup-bot2 #deletelist {\n    font-size: 1.1rem;\n    padding: .5rem 2rem;\n    border-radius: 4px;\n    outline: none;\n    border: 1px solid transparent;\n    color: white;\n    background-color: #588157;\n    cursor: pointer;\n}\n\n.popup .popup-bot #addition:hover, .popup2 .popup-bot2 #deletelist:hover {\n    transform: scale(1.05);\n}\n\n.popup .popup-bot #addition:active, .popup2 .popup-bot2 #deletelist:active {\n    transform: scale(1);\n}\n\n.popup .fa-xmark:hover {\n    transform: scale(1.2);\n}\n\n.popup .fa-xmark:active {\n    transform: scale(1);\n}\n\n.popup .popup-bot #addition:hover {\n    transform: scale(1.05);\n}\n\n.popup .popup-bot #addition:active {\n    transform: scale(1);\n}\n\n.popup2 .popup-top2 {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 1rem;\n    padding: 1.5rem;\n    border-bottom: solid 1px rgba(0, 0, 0, 0.2);\n}\n\n.popup2 .popup-top2 .fa-triangle-exclamation {\n    font-size: 4.5rem;\n    color: red;\n    opacity: 70%;\n}\n\n.popup2 .popup-bot2 {\n    padding: 0rem 1.5rem;\n    margin-bottom: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    gap: .5rem;\n}\n\n.popup2 .popup-bot2 #deletelist {\n    font-size: 1.1rem;\n    padding: .5rem;\n    border-radius: 4px;\n    outline: none;\n    border: 1px solid transparent;\n    color: white;\n    background-color: #588157;\n    cursor: pointer;\n}\n\n.popup2 .popup-bot2 #deletelist:hover {\n    transform: scale(1.05);\n}\n\n.popup2 .popup-bot2 #deletelist:active {\n    transform: scale(1);\n}\n\n.popup2 .fa-xmark:hover {\n    transform: scale(1.2);\n}\n\n.popup2 .fa-xmark:active {\n    transform: scale(1);\n}\n\n.popup2 .popup-bot2 #deletelist:hover {\n    transform: scale(1.05);\n}\n\n.popup2 .popup-bot2 #deletelist:active {\n    transform: scale(1);\n}\n\n.popup2 .popup-top2 {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 1rem;\n    padding: 1.5rem;\n    border-bottom: solid 1px rgba(0, 0, 0, 0.2);\n}\n\n.popup2 .popup-top2 .fa-triangle-exclamation {\n    font-size: 4.5rem;\n    color: red;\n    opacity: 70%;\n}\n\n.popup2 .popup-bot2 {\n    padding: 0rem 1.5rem;\n    margin-bottom: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    gap: .5rem;\n}\n\n.popup2 .popup-bot2 #deletelist {\n    font-size: 1.1rem;\n    padding: .5rem;\n    border-radius: 4px;\n    outline: none;\n    border: 1px solid transparent;\n    color: white;\n    background-color: #588157;\n    cursor: pointer;\n}\n\n.popup2 .popup-bot2 #deletelist:hover {\n    transform: scale(1.05);\n}\n\n.popup2 .popup-bot2 #deletelist:active {\n    transform: scale(1);\n}\n\n.popup2 .fa-xmark:hover {\n    transform: scale(1.2);\n}\n\n.popup2 .fa-xmark:active {\n    transform: scale(1);\n}\n\n.popup2 .popup-bot2 #deletelist:hover {\n    transform: scale(1.05);\n}\n\n.popup2 .popup-bot2 #deletelist:active {\n    transform: scale(1);\n}\n\n@media (max-width: 600px) {\n    .popup {\n        max-width: 90%;\n    }\n\n    #dateInput {\n        display: none;\n    }\n\n    .popup2 {\n        max-width: 90%;\n    }\n}\n\n@media (max-width: 280px) {\n    .main {\n        grid-template-columns: 100% 1fr;\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todo: () => (/* binding */ Todo),
/* harmony export */   TodoList: () => (/* binding */ TodoList),
/* harmony export */   getTodoLists: () => (/* binding */ getTodoLists),
/* harmony export */   getUsedIds: () => (/* binding */ getUsedIds),
/* harmony export */   logTodoListsToConsole: () => (/* binding */ logTodoListsToConsole),
/* harmony export */   saveTodoLists: () => (/* binding */ saveTodoLists),
/* harmony export */   saveUsedIds: () => (/* binding */ saveUsedIds),
/* harmony export */   uniqueId: () => (/* binding */ uniqueId)
/* harmony export */ });
class Todo {
    constructor(id, title, description, dueDate, priority) {
        this.id = uniqueId();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

class TodoList {
    constructor(name, id = null) {
        this.name = name;
        this.id = id || uniqueId();
        this.todos = [];
    }

    addTodo(todo) {
        this.todos.push(todo);
    }
}

function generateRandomId() {
    let id = '';
    const digits = '0123456789';

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * digits.length);
        id += digits[randomIndex];
    }

    return id;
}

function uniqueId() {
    const usedIds = getUsedIds();

    if (usedIds.length >= 1000000) {
        throw new Error("All possible IDs have been used.");
    }

    let newId;
    do {
        newId = generateRandomId();
    } while (usedIds.includes(newId));

    usedIds.push(newId);
    saveUsedIds(usedIds);
    console.log(usedIds);
    return newId;
}

function getUsedIds() {
    const usedIdsJSON = localStorage.getItem('usedIds');
    return usedIdsJSON ? JSON.parse(usedIdsJSON) : [];
}

function saveUsedIds(usedIds) {
    localStorage.setItem('usedIds', JSON.stringify(usedIds));
}

function getTodoLists() {
    const todoListsJSON = localStorage.getItem('todoLists');
    return todoListsJSON ? JSON.parse(todoListsJSON) : [];
}

function saveTodoLists(todoLists) {
    localStorage.setItem('todoLists', JSON.stringify(todoLists));
}

function logTodoListsToConsole() {
    const todoLists = getTodoLists();
    console.log(JSON.stringify(todoLists, null, 2));
}

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

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initialiseMain)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.js");


function createMain(id) {
    const main = document.createElement('div');
    main.classList.add('main-area');
    
    const mainChild = document.createElement('div');
    mainChild.classList.add('main-child');

    const todoList = getTodoListById(id);

    const title = document.createElement('div');
    title.classList.add('title');

    const h1 = document.createElement('p');
    h1.classList.add('todo-title');
    h1.textContent = todoList.name;

    title.appendChild(h1);

    const todoSection = document.createElement('div');
    todoSection.classList.add('todo-section');

    mainChild.appendChild(title);
    mainChild.appendChild(todoSection);

    main.appendChild(mainChild);

    const parent = document.getElementById('main');
    parent.appendChild(main);
}

function getTodoListById(id) {
    const todoLists = (0,_app__WEBPACK_IMPORTED_MODULE_0__.getTodoLists)();
    return todoLists.find(todoList => todoList.id === id);
}

function initialiseMain(id) {
    createMain(id);
}

/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initializeSidebar)
/* harmony export */ });
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ "./src/app.js");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ "./src/main.js");




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
        (0,_main_js__WEBPACK_IMPORTED_MODULE_1__["default"])('000000');
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
    newLists.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(e.target);
    });

    const createNew = document.createElement('div');
    createNew.classList.add('create-new');
    createNew.innerHTML = '<i class="fa-solid fa-plus"></i> New List'
    createNew.addEventListener('click', function () {
        newListPopup();
    });

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

function newListPopup() {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    const popup = document.createElement('div');
    popup.classList.add('popup');

    const popupTop = document.createElement('div');
    popupTop.classList.add('popup-top');

    const titleParagraph = document.createElement('p');
    titleParagraph.textContent = 'New List';

    const closeIcon = document.createElement('i');
    closeIcon.classList.add('fa-solid', 'fa-xmark');
    closeIcon.addEventListener('click', closeOverlay);

    popupTop.appendChild(titleParagraph);
    popupTop.appendChild(closeIcon);

    const popupMid = document.createElement('div');
    popupMid.classList.add('popup-mid');

    const inputParagraph = document.createElement('p');
    inputParagraph.textContent = 'Name (max 10 characters):';

    const input = document.createElement('input');
    input.setAttribute('id', 'newlistinput');
    input.setAttribute('type', 'text');
    input.setAttribute('maxlength', '10');
    input.setAttribute('required', true);

    const alertParagraph = document.createElement('p');
    alertParagraph.classList.add('alert');
    alertParagraph.textContent = 'List name is required.';
    alertParagraph.style.color = 'red';
    alertParagraph.style.marginTop = '.5rem';
    alertParagraph.style.display = 'none';

    popupMid.appendChild(inputParagraph);
    popupMid.appendChild(input);
    popupMid.appendChild(alertParagraph);

    const popupBot = document.createElement('div');
    popupBot.classList.add('popup-bot');

    const closeButton = document.createElement('button');
    closeButton.setAttribute('id', 'close');
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', closeOverlay)

    const addButton = document.createElement('button');
    addButton.setAttribute('id', 'addition');
    addButton.textContent = 'Add List';
    addButton.addEventListener('click', addNewList)

    popupBot.appendChild(closeButton);
    popupBot.appendChild(addButton);

    popup.appendChild(popupTop);
    popup.appendChild(popupMid);
    popup.appendChild(popupBot);

    overlay.appendChild(popup);

    const mainContent = document.getElementById('content');
    mainContent.appendChild(overlay);
}

function deleteListPopup(confirmCallback) {
    const overlay = document.createElement('div');
    overlay.className = 'overlay2';

    const popup = document.createElement('div');
    popup.className = 'popup2';

    const popupTop = document.createElement('div');
    popupTop.className = 'popup-top2';

    const triangleIcon = document.createElement('i');
    triangleIcon.className = 'fa-solid fa-triangle-exclamation';

    const popupMessage = document.createElement('p');
    popupMessage.textContent = 'Are you sure you want to delete this list?';

    const popupBot = document.createElement('div');
    popupBot.className = 'popup-bot2';

    const closeButton = document.createElement('button');
    closeButton.id = 'close';
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', function () {
        closeOverlay2()
    });

    const confirmButton = document.createElement('button');
    confirmButton.id = 'deletelist';
    confirmButton.textContent = 'Confirm';
    confirmButton.addEventListener('click', () => {
        confirmCallback();
        closeOverlay2();
    });

    popupTop.appendChild(triangleIcon);
    popupTop.appendChild(popupMessage);

    popupBot.appendChild(closeButton);
    popupBot.appendChild(confirmButton);

    popup.appendChild(popupTop);
    popup.appendChild(popupBot);

    overlay.appendChild(popup);

    const mainContent = document.getElementById('content');
    mainContent.appendChild(overlay);
}

function closeOverlay() {
    const overlay = document.querySelector('.overlay');
    overlay.remove()
}

function deleteList(id) {
    const todoLists = (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.getTodoLists)();
    const usedIds = (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.getUsedIds)();

    const idIndex = usedIds.indexOf(id);
    if (idIndex !== -1) {
        usedIds.splice(idIndex, 1);
        (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.saveUsedIds)(usedIds);
    }

    const updatedTodoLists = todoLists.filter(list => list.id !== id);
    (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.saveTodoLists)(updatedTodoLists);

    renderTodoLists();
}

function closeOverlay2() {
    const overlay = document.querySelector('.overlay2');
    overlay.remove()
}

function newListItem(name, id) {
    const newListItem = document.createElement('div');
    newListItem.classList.add('nav-buttons', 'the-new-lists');

    const newListItemChild = document.createElement('div');
    newListItemChild.innerHTML = `<i class="fa-solid fa-circle"></i>${name}</div>`;

    const newListItemChild2 = document.createElement('div');
    newListItemChild2.classList.add('trash');
    const theTrashIcon = document.createElement('i');
    theTrashIcon.classList.add('fa-regular', 'fa-trash-can');
    theTrashIcon.setAttribute("data-list-id", id);
    newListItemChild2.appendChild(theTrashIcon);

    newListItem.appendChild(newListItemChild);
    newListItem.appendChild(newListItemChild2);

    return newListItem
}

function renderTodoLists() {
    const todoLists = (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.getTodoLists)();
    const newLists = document.querySelector('.new-lists');

    newLists.innerHTML = '';

    const nonDefaultTodoLists = todoLists.filter(todoList => !isDefaultTodoList(todoList.id));

    nonDefaultTodoLists.forEach(todoList => {
        const listItem = newListItem(todoList.name, todoList.id);
        newLists.appendChild(listItem);
    });

    const generatedDivs = document.getElementsByClassName("the-new-lists");
    for (const div of generatedDivs) {
        const trashIcon = div.querySelector(".trash .fa-trash-can");
        div.addEventListener("mouseenter", () => {
            trashIcon.style.display = "block";
        });

        div.addEventListener("mouseleave", () => {
            trashIcon.style.display = "none";
        });
    }

    const generatedBins = document.getElementsByClassName('fa-trash-can');
    for (const bin of generatedBins) {
        bin.addEventListener('click', function () {
            const listId = bin.getAttribute('data-list-id');
            deleteListPopup(() => deleteList(listId));
        });
    }
}

function isDefaultTodoList(id) {
    const defaultTodoListIds = ["000000", "111111", "222222", "333333", "444444"];

    return defaultTodoListIds.includes(id);
}

function addNewList() {
    const input = document.getElementById('newlistinput');
    const alert = document.querySelector('.alert');
    const panel = document.querySelector('.accordion');

    const inputValue = input.value;

    if (input.checkValidity() === false) {
        alert.style.display = 'block';
        input.style.borderColor = 'red';
    } else {
        const newList = new _app_js__WEBPACK_IMPORTED_MODULE_0__.TodoList(inputValue);

        const todoLists = (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.getTodoLists)();
        todoLists.push(newList);
        (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.saveTodoLists)(todoLists);

        (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.logTodoListsToConsole)()

        const newLists = document.querySelector('.new-lists');
        newLists.appendChild(newListItem(inputValue, newList.id));
        input.value = '';

        renderTodoLists()

        panel.style.maxHeight = panel.scrollHeight + "px";
        alert.style.display = 'none';


        closeOverlay()
    }
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

    setActiveButton(document.querySelector(".inbox"));
    (0,_main_js__WEBPACK_IMPORTED_MODULE_1__["default"])('000000')

    renderTodoLists()
}


/***/ }),

/***/ "./src/webpage.js":
/*!************************!*\
  !*** ./src/webpage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createWebpage)
/* harmony export */ });
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.js */ "./src/app.js");



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

function createDefaultTodoLists() {
    const defaultListsData = [
        { name: "Inbox", id: "000000" },
        { name: "Today", id: "111111" },
        { name: "Upcoming", id: "222222" },
        { name: "All", id: "333333" },
        { name: "Important", id: "444444" }
    ];

    const existingLists = (0,_app_js__WEBPACK_IMPORTED_MODULE_1__.getTodoLists)();
    const missingListsData = defaultListsData.filter(defaultList => 
        !existingLists.some(existingList => existingList.name === defaultList.name)
    );

    const updatedLists = existingLists.concat(missingListsData.map(data => new _app_js__WEBPACK_IMPORTED_MODULE_1__.TodoList(data.name, data.id)));
    (0,_app_js__WEBPACK_IMPORTED_MODULE_1__.saveTodoLists)(updatedLists);

    updateUsedIds(defaultListsData.map(list => list.id));
}

function updateUsedIds(idsToInclude) {
    const usedIds = (0,_app_js__WEBPACK_IMPORTED_MODULE_1__.getUsedIds)();
    const uniqueUsedIds = Array.from(new Set(usedIds.concat(idsToInclude)));
    (0,_app_js__WEBPACK_IMPORTED_MODULE_1__.saveUsedIds)(uniqueUsedIds);
}

function createWebpage() {
    const mainContent = document.getElementById("content");

    mainContent.appendChild(createNav());
    mainContent.appendChild(createMain());

    var currentDate = new Date();
    var formattedDate = currentDate.toISOString().split('T')[0];
    document.getElementById("dateInput").value = formattedDate;

    createDefaultTodoLists();

    (0,_sidebar__WEBPACK_IMPORTED_MODULE_0__["default"])()
}




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHdJQUF3SSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcseUJBQXlCO0FBQ3hOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sT0FBTyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLHdIQUF3SCxXQUFXLFdBQVcsV0FBVyxXQUFXLFdB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USxvREFBYztBQUN0QixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRCxVQUFVLFlBQVksS0FBSzs7QUFFN0U7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLHFEQUFZO0FBQ2xDLG9CQUFvQixtREFBVTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBVztBQUNuQjs7QUFFQTtBQUNBLElBQUksc0RBQWE7O0FBRWpCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0VBQXNFLEtBQUs7O0FBRTNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IscURBQVk7QUFDbEM7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLDRCQUE0Qiw2Q0FBUTs7QUFFcEMsMEJBQTBCLHFEQUFZO0FBQ3RDO0FBQ0EsUUFBUSxzREFBYTs7QUFFckIsUUFBUSw4REFBcUI7O0FBRTdCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRWU7QUFDZjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLG9EQUFjOztBQUVsQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzNZeUM7QUFDcUU7O0FBRTlHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLDZCQUE2QjtBQUN2QyxVQUFVLDZCQUE2QjtBQUN2QyxVQUFVLGdDQUFnQztBQUMxQyxVQUFVLDJCQUEyQjtBQUNyQyxVQUFVO0FBQ1Y7O0FBRUEsMEJBQTBCLHFEQUFZO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQSwrRUFBK0UsNkNBQVE7QUFDdkYsSUFBSSxzREFBYTs7QUFFakI7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixtREFBVTtBQUM5QjtBQUNBLElBQUksb0RBQVc7QUFDZjs7QUFFZTtBQUNmOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLElBQUksb0RBQWlCO0FBQ3JCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90ZXN0LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Rlc3QtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Rlc3QtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90ZXN0LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVzdC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZXN0LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVzdC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Rlc3QtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Rlc3QtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Rlc3QtcGFnZS8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vdGVzdC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Rlc3QtcGFnZS8uL3NyYy9tYWluLmpzIiwid2VicGFjazovL3Rlc3QtcGFnZS8uL3NyYy9zaWRlYmFyLmpzIiwid2VicGFjazovL3Rlc3QtcGFnZS8uL3NyYy93ZWJwYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QnJpY29sYWdlK0dyb3Rlc3F1ZTpvcHN6LHdnaHRAMTAuLjQ4LDIwMDsxMC4uNDgsMzAwOzEwLi40OCw0MDA7MTAuLjQ4LDUwMDsxMC4uNDgsNjAwOzEwLi40OCw3MDA7MTAuLjQ4LDgwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1mYW1pbHk6IFVidW50dSwgc2Fucy1zZXJpZjtcbn1cblxuYm9keSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLm1haW4tY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0NXB4IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAnbmF2YmFyJ1xuICAgICAgICAnbWFpbic7XG59XG5cbi5uYXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDRlNDE7XG4gICAgZ3JpZC1hcmVhOiBuYXZiYXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiAjZjFmYWVlO1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDEwMDtcbn1cblxuLm5hdi1pbm5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubGVmdC1uYXYsXG4ucmlnaHQtbmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5sb2dvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gICAgZ2FwOiAwLjI1cmVtO1xuICAgIGZvbnQtZmFtaWx5OiAycmVtO1xuICAgIGNvbG9yOiAjZjFmYWVlO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ubmF2IC5mYS1wbHVzIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogMC4yNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbn1cblxuLm5hdiAuZmEtcGx1czpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg4ODtcbn1cblxuLm5hdiAuZmEtcGx1czphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG59XG5cbi5sZWZ0LW5hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBnYXA6IDEuNXJlbTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG59XG5cbi5sZWZ0LW5hdiAuZmEtaG91c2Uge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbn1cblxuLmxlZnQtbmF2IC5mYS1iYXJzLFxuLmZhLWJhcnMtc3RhZ2dlcmVkIHtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG59XG5cbi5uYXYgLmZhLXNvbGlkIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNmb3JtOiAwLjJzIGVhc2U7XG59XG5cbi5sZWZ0LW5hdiAuZmEtc29saWQ6aG92ZXIge1xuICAgIG9wYWNpdHk6IDUwJTtcbn1cblxuLmxlZnQtbmF2IC5mYS1zb2xpZDphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG59XG5cbi5jZW50ZXItbmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jZGF0ZUlucHV0IHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODgxNTc7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1haW4ge1xuICAgIGdyaWQtYXJlYTogbWFpbjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgICdzaWRlYmFyIG1haW4tYXJlYSc7XG59XG5cbi5zaWRlYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTNiMThhO1xuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcbiAgICBwYWRkaW5nOiAxcmVtIDByZW07XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgICBsZWZ0OiAwO1xufVxuXG4ubWVudSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5tZW51IGxpIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAuNnJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ubmF2LWJ1dHRvbnM6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWQ3Y2Q7XG59XG5cbi5tZW51IGxpIGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1lbnUgbGkgaSB7XG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcbn1cblxuLm5hdi1idXR0b25zLmFjdGl2ZSB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnRvZGF5IGkge1xuICAgIGNvbG9yOiBjcmltc29uO1xuICAgIG9wYWNpdHk6IDUwJTtcbn1cblxuLmluYm94IGkge1xuICAgIGNvbG9yOiBncmF5O1xufVxuXG4uYWxsIGkge1xuICAgIG9wYWNpdHk6IDcwJTtcbn1cblxuLnVwY29taW5nIGkge1xuICAgIGNvbG9yOiBibHVlO1xuICAgIG9wYWNpdHk6IDUwJTtcbn1cblxuLmltcG9ydGFudCBpIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIG9wYWNpdHk6IDUwJTtcbn1cblxuLmxpc3RzIGkge1xuICAgIGNvbG9yOiBncmVlbjtcbn1cblxuLm1lbnUgLmxpc3RzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbn1cblxuLmxpc3RzIC5mYS1jaGV2cm9uLXVwIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHBhZGRpbmctdG9wOiAwLjFyZW07XG59XG5cbi5hY2NvcmRpb24ge1xuICAgIHBhZGRpbmctbGVmdDogMi41cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMnMgZWFzZS1vdXQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXgtaGVpZ2h0OiAwO1xuXG59XG5cbi5jcmVhdGUtbmV3IGkge1xuICAgIHBhZGRpbmctcmlnaHQ6IC4yNXJlbTtcbiAgICBvcGFjaXR5OiA2NSU7XG59XG5cbi5hY2NvcmRpb24gLmNyZWF0ZS1uZXcge1xuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xuICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFjY29yZGlvbiAuY3JlYXRlLW5ldzpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNSUpXG59XG5cbi5hY2NvcmRpb24gLm5ldy1saXN0cyBpIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAuNXJlbTtcbiAgICBmb250LXNpemU6IC41cmVtO1xuICAgIG9wYWNpdHk6IDUwJTtcbn1cblxuLnRoZS1uZXctbGlzdHMge1xuICAgIHBhZGRpbmc6IC41cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi50aGUtbmV3LWxpc3RzIGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGhlLW5ldy1saXN0cyAudHJhc2gge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi50aGUtbmV3LWxpc3RzIC50cmFzaCAuZmEtdHJhc2gtY2FuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogZ3JleTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcbn1cblxuLnRoZS1uZXctbGlzdHMgLnRyYXNoIC5mYS10cmFzaC1jYW46aG92ZXIge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG4ubWFpbi1hcmVhIHtcbiAgICBncmlkLWFyZWE6IG1haW4tYXJlYTtcbiAgICBwYWRkaW5nOiAxcmVtIDByZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1haW4tY2hpbGQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA5MCU7XG59XG5cbi5tYWluLWFyZWEgLm1haW4tY2hpbGQgLnRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgICBjb2xvcjogIzQ0NDtcbn1cblxuLm1haW4tYXJlYSAubWFpbi1jaGlsZCAudG9kby1zZWN0aW9uIHtcbiAgICB3aWR0aDogOTAlO1xufVxuXG4ub3ZlcmxheSwgLm92ZXJsYXkyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgei1pbmRleDogNTAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucG9wdXAsIC5wb3B1cDIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucG9wdXAgLmZhLXhtYXJrLCAucG9wdXAyIC5mYS14bWFyayB7XG4gICAgdG9wOiAxcmVtO1xuICAgIHJpZ2h0OiAxcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIGNvbG9yOiAjMTExO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnBvcHVwIC5wb3B1cC10b3AsIC5wb3B1cDIgLnBvcHVwLXRvcDIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnBvcHVwIC5wb3B1cC10b3AgcCB7XG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xufVxuXG4ucG9wdXAyIC5wb3B1cC10b3AyIHAge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG59XG5cbi5wb3B1cCAucG9wdXAtbWlkLCAucG9wdXAyIC5wb3B1cC1taWQge1xuICAgIHBhZGRpbmc6IDByZW0gMS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5wb3B1cCAucG9wdXAtbWlkIHAsIC5wb3B1cDIgLnBvcHVwLW1pZCBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbn1cblxuLnBvcHVwIC5wb3B1cC1taWQgaW5wdXQsIC5wb3B1cDIgLnBvcHVwLW1pZCBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC4ycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbn1cblxuLnBvcHVwIC5wb3B1cC1taWQgaW5wdXQ6aG92ZXIsIC5wb3B1cDIgLnBvcHVwLW1pZCBpbnB1dDpob3ZlciB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzNhNWE0MDtcbn1cblxuLnBvcHVwIC5wb3B1cC1taWQgaW5wdXQ6Zm9jdXMsIC5wb3B1cDIgLnBvcHVwLW1pZCBpbnB1dDpmb2N1cyB7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzNhNWE0MDtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4ucG9wdXAgLnBvcHVwLWJvdCwgLnBvcHVwMiAucG9wdXAtYm90MiB7XG4gICAgcGFkZGluZzogMHJlbSAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBnYXA6IC41cmVtO1xufVxuXG4ucG9wdXAgLnBvcHVwLWJvdCAjY2xvc2UsIC5wb3B1cDIgLnBvcHVwLWJvdDIgI2Nsb3NlIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wb3B1cCAucG9wdXAtYm90ICNjbG9zZTpob3ZlciwgLnBvcHVwMiAucG9wdXAtYm90MiAjY2xvc2U6aG92ZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5wb3B1cCAucG9wdXAtYm90ICNhZGRpdGlvbiwgLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdCB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgcGFkZGluZzogLjVyZW0gMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4ODE1NztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wb3B1cCAucG9wdXAtYm90ICNhZGRpdGlvbjpob3ZlciwgLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdDpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLnBvcHVwIC5wb3B1cC1ib3QgI2FkZGl0aW9uOmFjdGl2ZSwgLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdDphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5wb3B1cCAuZmEteG1hcms6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuLnBvcHVwIC5mYS14bWFyazphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5wb3B1cCAucG9wdXAtYm90ICNhZGRpdGlvbjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLnBvcHVwIC5wb3B1cC1ib3QgI2FkZGl0aW9uOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLnBvcHVwMiAucG9wdXAtdG9wMiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnBvcHVwMiAucG9wdXAtdG9wMiAuZmEtdHJpYW5nbGUtZXhjbGFtYXRpb24ge1xuICAgIGZvbnQtc2l6ZTogNC41cmVtO1xuICAgIGNvbG9yOiByZWQ7XG4gICAgb3BhY2l0eTogNzAlO1xufVxuXG4ucG9wdXAyIC5wb3B1cC1ib3QyIHtcbiAgICBwYWRkaW5nOiAwcmVtIDEuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGdhcDogLjVyZW07XG59XG5cbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Qge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIHBhZGRpbmc6IC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg4MTU3O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdDpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdDphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5wb3B1cDIgLmZhLXhtYXJrOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbi5wb3B1cDIgLmZhLXhtYXJrOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdDpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdDphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5wb3B1cDIgLnBvcHVwLXRvcDIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgcGFkZGluZzogMS41cmVtO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5wb3B1cDIgLnBvcHVwLXRvcDIgLmZhLXRyaWFuZ2xlLWV4Y2xhbWF0aW9uIHtcbiAgICBmb250LXNpemU6IDQuNXJlbTtcbiAgICBjb2xvcjogcmVkO1xuICAgIG9wYWNpdHk6IDcwJTtcbn1cblxuLnBvcHVwMiAucG9wdXAtYm90MiB7XG4gICAgcGFkZGluZzogMHJlbSAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBnYXA6IC41cmVtO1xufVxuXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0IHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4ODE1NztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4ucG9wdXAyIC5mYS14bWFyazpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuXG4ucG9wdXAyIC5mYS14bWFyazphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAucG9wdXAge1xuICAgICAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICB9XG5cbiAgICAjZGF0ZUlucHV0IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAucG9wdXAyIHtcbiAgICAgICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMjgwcHgpIHtcbiAgICAubWFpbiB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJSAxZnI7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNC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QUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSwrQkFBK0I7SUFDbkM7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ccmljb2xhZ2UrR3JvdGVzcXVlOm9wc3osd2dodEAxMC4uNDgsMjAwOzEwLi40OCwzMDA7MTAuLjQ4LDQwMDsxMC4uNDgsNTAwOzEwLi40OCw2MDA7MTAuLjQ4LDcwMDsxMC4uNDgsODAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBVYnVudHUsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDVweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAnbmF2YmFyJ1xcbiAgICAgICAgJ21haW4nO1xcbn1cXG5cXG4ubmF2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0NGU0MTtcXG4gICAgZ3JpZC1hcmVhOiBuYXZiYXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sb3I6ICNmMWZhZWU7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG4gICAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4ubmF2LWlubmVyIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubGVmdC1uYXYsXFxuLnJpZ2h0LW5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcXG4gICAgZ2FwOiAwLjI1cmVtO1xcbiAgICBmb250LWZhbWlseTogMnJlbTtcXG4gICAgY29sb3I6ICNmMWZhZWU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ubmF2IC5mYS1wbHVzIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgcGFkZGluZzogMC4yNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcXG59XFxuXFxuLm5hdiAuZmEtcGx1czpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ODg7XFxufVxcblxcbi5uYXYgLmZhLXBsdXM6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XFxuXFxuLmxlZnQtbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBnYXA6IDEuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcXG59XFxuXFxuLmxlZnQtbmF2IC5mYS1ob3VzZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XFxufVxcblxcbi5sZWZ0LW5hdiAuZmEtYmFycyxcXG4uZmEtYmFycy1zdGFnZ2VyZWQge1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XFxufVxcblxcbi5uYXYgLmZhLXNvbGlkIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IDAuMnMgZWFzZTtcXG59XFxuXFxuLmxlZnQtbmF2IC5mYS1zb2xpZDpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDUwJTtcXG59XFxuXFxuLmxlZnQtbmF2IC5mYS1zb2xpZDphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbn1cXG5cXG4uY2VudGVyLW5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNkYXRlSW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4ODE1NztcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBwYWRkaW5nOiAwLjRyZW0gMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgJ3NpZGViYXIgbWFpbi1hcmVhJztcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTNiMThhO1xcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICAgIHBhZGRpbmc6IDFyZW0gMHJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcXG4gICAgbGVmdDogMDtcXG59XFxuXFxuLm1lbnUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLm1lbnUgbGkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IC42cmVtO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5uYXYtYnV0dG9uczpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWQ3Y2Q7XFxufVxcblxcbi5tZW51IGxpIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUgbGkgaSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxufVxcblxcbi5uYXYtYnV0dG9ucy5hY3RpdmUge1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4udG9kYXkgaSB7XFxuICAgIGNvbG9yOiBjcmltc29uO1xcbiAgICBvcGFjaXR5OiA1MCU7XFxufVxcblxcbi5pbmJveCBpIHtcXG4gICAgY29sb3I6IGdyYXk7XFxufVxcblxcbi5hbGwgaSB7XFxuICAgIG9wYWNpdHk6IDcwJTtcXG59XFxuXFxuLnVwY29taW5nIGkge1xcbiAgICBjb2xvcjogYmx1ZTtcXG4gICAgb3BhY2l0eTogNTAlO1xcbn1cXG5cXG4uaW1wb3J0YW50IGkge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBvcGFjaXR5OiA1MCU7XFxufVxcblxcbi5saXN0cyBpIHtcXG4gICAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4ubWVudSAubGlzdHMge1xcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcXG59XFxuXFxuLmxpc3RzIC5mYS1jaGV2cm9uLXVwIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmctdG9wOiAwLjFyZW07XFxufVxcblxcbi5hY2NvcmRpb24ge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMnMgZWFzZS1vdXQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIG1heC1oZWlnaHQ6IDA7XFxuXFxufVxcblxcbi5jcmVhdGUtbmV3IGkge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAuMjVyZW07XFxuICAgIG9wYWNpdHk6IDY1JTtcXG59XFxuXFxuLmFjY29yZGlvbiAuY3JlYXRlLW5ldyB7XFxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xcbiAgICBwYWRkaW5nLXRvcDogLjVyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5hY2NvcmRpb24gLmNyZWF0ZS1uZXc6aG92ZXIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNSUpXFxufVxcblxcbi5hY2NvcmRpb24gLm5ldy1saXN0cyBpIHtcXG4gICAgcGFkZGluZy1yaWdodDogLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogLjVyZW07XFxuICAgIG9wYWNpdHk6IDUwJTtcXG59XFxuXFxuLnRoZS1uZXctbGlzdHMge1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRoZS1uZXctbGlzdHMgZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRoZS1uZXctbGlzdHMgLnRyYXNoIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLnRoZS1uZXctbGlzdHMgLnRyYXNoIC5mYS10cmFzaC1jYW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiBncmV5O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRoZS1uZXctbGlzdHMgLnRyYXNoIC5mYS10cmFzaC1jYW46aG92ZXIge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbi5tYWluLWFyZWEge1xcbiAgICBncmlkLWFyZWE6IG1haW4tYXJlYTtcXG4gICAgcGFkZGluZzogMXJlbSAwcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4tY2hpbGQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogOTAlO1xcbn1cXG5cXG4ubWFpbi1hcmVhIC5tYWluLWNoaWxkIC50aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gICAgY29sb3I6ICM0NDQ7XFxufVxcblxcbi5tYWluLWFyZWEgLm1haW4tY2hpbGQgLnRvZG8tc2VjdGlvbiB7XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcblxcbi5vdmVybGF5LCAub3ZlcmxheTIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgei1pbmRleDogNTAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5wb3B1cCwgLnBvcHVwMiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLnBvcHVwIC5mYS14bWFyaywgLnBvcHVwMiAuZmEteG1hcmsge1xcbiAgICB0b3A6IDFyZW07XFxuICAgIHJpZ2h0OiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgICBjb2xvcjogIzExMTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ucG9wdXAgLnBvcHVwLXRvcCwgLnBvcHVwMiAucG9wdXAtdG9wMiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4ucG9wdXAgLnBvcHVwLXRvcCBwIHtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbn1cXG5cXG4ucG9wdXAyIC5wb3B1cC10b3AyIHAge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxufVxcblxcbi5wb3B1cCAucG9wdXAtbWlkLCAucG9wdXAyIC5wb3B1cC1taWQge1xcbiAgICBwYWRkaW5nOiAwcmVtIDEuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnBvcHVwIC5wb3B1cC1taWQgcCwgLnBvcHVwMiAucG9wdXAtbWlkIHAge1xcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcXG59XFxuXFxuLnBvcHVwIC5wb3B1cC1taWQgaW5wdXQsIC5wb3B1cDIgLnBvcHVwLW1pZCBpbnB1dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC4ycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG59XFxuXFxuLnBvcHVwIC5wb3B1cC1taWQgaW5wdXQ6aG92ZXIsIC5wb3B1cDIgLnBvcHVwLW1pZCBpbnB1dDpob3ZlciB7XFxuICAgIGJvcmRlcjogc29saWQgMXB4ICMzYTVhNDA7XFxufVxcblxcbi5wb3B1cCAucG9wdXAtbWlkIGlucHV0OmZvY3VzLCAucG9wdXAyIC5wb3B1cC1taWQgaW5wdXQ6Zm9jdXMge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjM2E1YTQwO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ucG9wdXAgLnBvcHVwLWJvdCwgLnBvcHVwMiAucG9wdXAtYm90MiB7XFxuICAgIHBhZGRpbmc6IDByZW0gMS41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBnYXA6IC41cmVtO1xcbn1cXG5cXG4ucG9wdXAgLnBvcHVwLWJvdCAjY2xvc2UsIC5wb3B1cDIgLnBvcHVwLWJvdDIgI2Nsb3NlIHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBvcHVwIC5wb3B1cC1ib3QgI2Nsb3NlOmhvdmVyLCAucG9wdXAyIC5wb3B1cC1ib3QyICNjbG9zZTpob3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLnBvcHVwIC5wb3B1cC1ib3QgI2FkZGl0aW9uLCAucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0IHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIHBhZGRpbmc6IC41cmVtIDJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4ODE1NztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucG9wdXAgLnBvcHVwLWJvdCAjYWRkaXRpb246aG92ZXIsIC5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4ucG9wdXAgLnBvcHVwLWJvdCAjYWRkaXRpb246YWN0aXZlLCAucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0OmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5wb3B1cCAuZmEteG1hcms6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5wb3B1cCAuZmEteG1hcms6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLnBvcHVwIC5wb3B1cC1ib3QgI2FkZGl0aW9uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLnBvcHVwIC5wb3B1cC1ib3QgI2FkZGl0aW9uOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5wb3B1cDIgLnBvcHVwLXRvcDIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4ucG9wdXAyIC5wb3B1cC10b3AyIC5mYS10cmlhbmdsZS1leGNsYW1hdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogNC41cmVtO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBvcGFjaXR5OiA3MCU7XFxufVxcblxcbi5wb3B1cDIgLnBvcHVwLWJvdDIge1xcbiAgICBwYWRkaW5nOiAwcmVtIDEuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgZ2FwOiAuNXJlbTtcXG59XFxuXFxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdCB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg4MTU3O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0OmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5wb3B1cDIgLmZhLXhtYXJrOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4ucG9wdXAyIC5mYS14bWFyazphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0OmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdDphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4ucG9wdXAyIC5wb3B1cC10b3AyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLnBvcHVwMiAucG9wdXAtdG9wMiAuZmEtdHJpYW5nbGUtZXhjbGFtYXRpb24ge1xcbiAgICBmb250LXNpemU6IDQuNXJlbTtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgb3BhY2l0eTogNzAlO1xcbn1cXG5cXG4ucG9wdXAyIC5wb3B1cC1ib3QyIHtcXG4gICAgcGFkZGluZzogMHJlbSAxLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGdhcDogLjVyZW07XFxufVxcblxcbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Qge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4ODE1NztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0OmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdDphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4ucG9wdXAyIC5mYS14bWFyazpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLnBvcHVwMiAuZmEteG1hcms6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdDpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIC5wb3B1cCB7XFxuICAgICAgICBtYXgtd2lkdGg6IDkwJTtcXG4gICAgfVxcblxcbiAgICAjZGF0ZUlucHV0IHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLnBvcHVwMiB7XFxuICAgICAgICBtYXgtd2lkdGg6IDkwJTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMjgwcHgpIHtcXG4gICAgLm1haW4ge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlIDFmcjtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMuaWQgPSB1bmlxdWVJZCgpO1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRvZG9MaXN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBpZCA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkIHx8IHVuaXF1ZUlkKCk7XG4gICAgICAgIHRoaXMudG9kb3MgPSBbXTtcbiAgICB9XG5cbiAgICBhZGRUb2RvKHRvZG8pIHtcbiAgICAgICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21JZCgpIHtcbiAgICBsZXQgaWQgPSAnJztcbiAgICBjb25zdCBkaWdpdHMgPSAnMDEyMzQ1Njc4OSc7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRpZ2l0cy5sZW5ndGgpO1xuICAgICAgICBpZCArPSBkaWdpdHNbcmFuZG9tSW5kZXhdO1xuICAgIH1cblxuICAgIHJldHVybiBpZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaXF1ZUlkKCkge1xuICAgIGNvbnN0IHVzZWRJZHMgPSBnZXRVc2VkSWRzKCk7XG5cbiAgICBpZiAodXNlZElkcy5sZW5ndGggPj0gMTAwMDAwMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBbGwgcG9zc2libGUgSURzIGhhdmUgYmVlbiB1c2VkLlwiKTtcbiAgICB9XG5cbiAgICBsZXQgbmV3SWQ7XG4gICAgZG8ge1xuICAgICAgICBuZXdJZCA9IGdlbmVyYXRlUmFuZG9tSWQoKTtcbiAgICB9IHdoaWxlICh1c2VkSWRzLmluY2x1ZGVzKG5ld0lkKSk7XG5cbiAgICB1c2VkSWRzLnB1c2gobmV3SWQpO1xuICAgIHNhdmVVc2VkSWRzKHVzZWRJZHMpO1xuICAgIGNvbnNvbGUubG9nKHVzZWRJZHMpO1xuICAgIHJldHVybiBuZXdJZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZWRJZHMoKSB7XG4gICAgY29uc3QgdXNlZElkc0pTT04gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlZElkcycpO1xuICAgIHJldHVybiB1c2VkSWRzSlNPTiA/IEpTT04ucGFyc2UodXNlZElkc0pTT04pIDogW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlVXNlZElkcyh1c2VkSWRzKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZWRJZHMnLCBKU09OLnN0cmluZ2lmeSh1c2VkSWRzKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb2RvTGlzdHMoKSB7XG4gICAgY29uc3QgdG9kb0xpc3RzSlNPTiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvTGlzdHMnKTtcbiAgICByZXR1cm4gdG9kb0xpc3RzSlNPTiA/IEpTT04ucGFyc2UodG9kb0xpc3RzSlNPTikgOiBbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVUb2RvTGlzdHModG9kb0xpc3RzKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9MaXN0cycsIEpTT04uc3RyaW5naWZ5KHRvZG9MaXN0cykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9nVG9kb0xpc3RzVG9Db25zb2xlKCkge1xuICAgIGNvbnN0IHRvZG9MaXN0cyA9IGdldFRvZG9MaXN0cygpO1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRvZG9MaXN0cywgbnVsbCwgMikpO1xufSIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGNyZWF0ZVdlYnBhZ2UgZnJvbSAnLi93ZWJwYWdlJztcblxuY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5jcmVhdGVXZWJwYWdlKCkiLCJpbXBvcnQgeyBUb2RvTGlzdCwgVG9kbywgc2F2ZVRvZG9MaXN0cywgZ2V0VG9kb0xpc3RzIH0gZnJvbSBcIi4vYXBwXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oaWQpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluLWFyZWEnKTtcbiAgICBcbiAgICBjb25zdCBtYWluQ2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluQ2hpbGQuY2xhc3NMaXN0LmFkZCgnbWFpbi1jaGlsZCcpO1xuXG4gICAgY29uc3QgdG9kb0xpc3QgPSBnZXRUb2RvTGlzdEJ5SWQoaWQpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaDEuY2xhc3NMaXN0LmFkZCgndG9kby10aXRsZScpO1xuICAgIGgxLnRleHRDb250ZW50ID0gdG9kb0xpc3QubmFtZTtcblxuICAgIHRpdGxlLmFwcGVuZENoaWxkKGgxKTtcblxuICAgIGNvbnN0IHRvZG9TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgndG9kby1zZWN0aW9uJyk7XG5cbiAgICBtYWluQ2hpbGQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIG1haW5DaGlsZC5hcHBlbmRDaGlsZCh0b2RvU2VjdGlvbik7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5DaGlsZCk7XG5cbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChtYWluKTtcbn1cblxuZnVuY3Rpb24gZ2V0VG9kb0xpc3RCeUlkKGlkKSB7XG4gICAgY29uc3QgdG9kb0xpc3RzID0gZ2V0VG9kb0xpc3RzKCk7XG4gICAgcmV0dXJuIHRvZG9MaXN0cy5maW5kKHRvZG9MaXN0ID0+IHRvZG9MaXN0LmlkID09PSBpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYWxpc2VNYWluKGlkKSB7XG4gICAgY3JlYXRlTWFpbihpZCk7XG59IiwiaW1wb3J0IHsgVG9kb0xpc3QsIGdldFRvZG9MaXN0cywgc2F2ZVRvZG9MaXN0cywgbG9nVG9kb0xpc3RzVG9Db25zb2xlLCBnZXRVc2VkSWRzLCBzYXZlVXNlZElkcyB9IGZyb20gXCIuL2FwcC5qc1wiXG5pbXBvcnQgaW5pdGlhbGlzZU1haW4gZnJvbSBcIi4vbWFpbi5qc1wiXG5cblxuZnVuY3Rpb24gY3JlYXRlU2lkZWJhcigpIHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7XG5cbiAgICBjb25zdCBzaWRlYmFyTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXJNZW51LmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItbWVudScpO1xuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5cbiAgICBjb25zdCBpbmJveCA9IGNyZWF0ZVNpZGViYXJJdGVtKCdpbmJveCcsICdmYS1pbmJveCcsICdJbmJveCcpO1xuICAgIGluYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgICAgIHNldEFjdGl2ZUJ1dHRvbihpbmJveCk7XG4gICAgICAgIGluaXRpYWxpc2VNYWluKCcwMDAwMDAnKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRvZGF5ID0gY3JlYXRlU2lkZWJhckl0ZW0oJ3RvZGF5JywgJ2ZhLWNhbGVuZGFyLWRheScsICdUb2RheScpO1xuICAgIHRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgICAgIHNldEFjdGl2ZUJ1dHRvbih0b2RheSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB1cGNvbWluZyA9IGNyZWF0ZVNpZGViYXJJdGVtKCd1cGNvbWluZycsICdmYS1jYWxlbmRhci13ZWVrJywgJ1VwY29taW5nJyk7XG4gICAgdXBjb21pbmcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcbiAgICAgICAgc2V0QWN0aXZlQnV0dG9uKHVwY29taW5nKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGFsbCA9IGNyZWF0ZVNpZGViYXJJdGVtKCdhbGwnLCAnZmEtY2FsZW5kYXItZGF5cycsICdBbGwnKTtcbiAgICBhbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcbiAgICAgICAgc2V0QWN0aXZlQnV0dG9uKGFsbCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBpbXBvcnRhbnQgPSBjcmVhdGVTaWRlYmFySXRlbSgnaW1wb3J0YW50JywgJ2ZhLXN0YXInLCAnSW1wb3J0YW50Jyk7XG4gICAgaW1wb3J0YW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgICAgIHNldEFjdGl2ZUJ1dHRvbihpbXBvcnRhbnQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbGlzdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpc3RzLmNsYXNzTGlzdC5hZGQoJ2xpc3RzJyk7XG4gICAgbGlzdHMuaW5uZXJIVE1MID0gJzxkaXY+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1saXN0LWNoZWNrXCI+PC9pPiA8cD5MaXN0czwvcD48L2Rpdj4gPGRpdj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNoZXZyb24tdXBcIj48L2k+PC9kaXY+JztcbiAgICBsaXN0cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbGlzdENsaWNrKTtcblxuICAgIGNvbnN0IGFjY29yZGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFjY29yZGlvbi5jbGFzc0xpc3QuYWRkKCdhY2NvcmRpb24nKTtcblxuICAgIGNvbnN0IG5ld0xpc3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3TGlzdHMuY2xhc3NMaXN0LmFkZCgnbmV3LWxpc3RzJyk7XG4gICAgbmV3TGlzdHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcbiAgICAgICAgc2V0QWN0aXZlQnV0dG9uKGUudGFyZ2V0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNyZWF0ZU5ldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNyZWF0ZU5ldy5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtbmV3Jyk7XG4gICAgY3JlYXRlTmV3LmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXBsdXNcIj48L2k+IE5ldyBMaXN0J1xuICAgIGNyZWF0ZU5ldy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbmV3TGlzdFBvcHVwKCk7XG4gICAgfSk7XG5cbiAgICBhY2NvcmRpb24uYXBwZW5kQ2hpbGQobmV3TGlzdHMpO1xuICAgIGFjY29yZGlvbi5hcHBlbmRDaGlsZChjcmVhdGVOZXcpO1xuXG4gICAgbWVudS5hcHBlbmRDaGlsZChpbmJveCk7XG4gICAgbWVudS5hcHBlbmRDaGlsZCh0b2RheSk7XG4gICAgbWVudS5hcHBlbmRDaGlsZCh1cGNvbWluZyk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChhbGwpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoaW1wb3J0YW50KTtcbiAgICBtZW51LmFwcGVuZENoaWxkKGxpc3RzKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKGFjY29yZGlvbilcblxuICAgIHNpZGViYXJNZW51LmFwcGVuZENoaWxkKG1lbnUpO1xuXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyTWVudSk7XG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHNpZGViYXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTaWRlYmFySXRlbShjbGFzc05hbWUsIGljb25DbGFzcywgdGV4dCkge1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUsICduYXYtYnV0dG9ucycpO1xuXG4gICAgY29uc3QgaXRlbUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtQ29udGVudC5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCAke2ljb25DbGFzc31cIj48L2k+IDxwPiR7dGV4dH08L3A+YDtcblxuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbUNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIGl0ZW07XG59XG5cbmZ1bmN0aW9uIG5ld0xpc3RQb3B1cCgpIHtcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5Jyk7XG5cbiAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ3BvcHVwJyk7XG5cbiAgICBjb25zdCBwb3B1cFRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcHVwVG9wLmNsYXNzTGlzdC5hZGQoJ3BvcHVwLXRvcCcpO1xuXG4gICAgY29uc3QgdGl0bGVQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGl0bGVQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnTmV3IExpc3QnO1xuXG4gICAgY29uc3QgY2xvc2VJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIGNsb3NlSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS14bWFyaycpO1xuICAgIGNsb3NlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlT3ZlcmxheSk7XG5cbiAgICBwb3B1cFRvcC5hcHBlbmRDaGlsZCh0aXRsZVBhcmFncmFwaCk7XG4gICAgcG9wdXBUb3AuYXBwZW5kQ2hpbGQoY2xvc2VJY29uKTtcblxuICAgIGNvbnN0IHBvcHVwTWlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9wdXBNaWQuY2xhc3NMaXN0LmFkZCgncG9wdXAtbWlkJyk7XG5cbiAgICBjb25zdCBpbnB1dFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpbnB1dFBhcmFncmFwaC50ZXh0Q29udGVudCA9ICdOYW1lIChtYXggMTAgY2hhcmFjdGVycyk6JztcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld2xpc3RpbnB1dCcpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnMTAnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgdHJ1ZSk7XG5cbiAgICBjb25zdCBhbGVydFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhbGVydFBhcmFncmFwaC5jbGFzc0xpc3QuYWRkKCdhbGVydCcpO1xuICAgIGFsZXJ0UGFyYWdyYXBoLnRleHRDb250ZW50ID0gJ0xpc3QgbmFtZSBpcyByZXF1aXJlZC4nO1xuICAgIGFsZXJ0UGFyYWdyYXBoLnN0eWxlLmNvbG9yID0gJ3JlZCc7XG4gICAgYWxlcnRQYXJhZ3JhcGguc3R5bGUubWFyZ2luVG9wID0gJy41cmVtJztcbiAgICBhbGVydFBhcmFncmFwaC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgcG9wdXBNaWQuYXBwZW5kQ2hpbGQoaW5wdXRQYXJhZ3JhcGgpO1xuICAgIHBvcHVwTWlkLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBwb3B1cE1pZC5hcHBlbmRDaGlsZChhbGVydFBhcmFncmFwaCk7XG5cbiAgICBjb25zdCBwb3B1cEJvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcHVwQm90LmNsYXNzTGlzdC5hZGQoJ3BvcHVwLWJvdCcpO1xuXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjbG9zZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Nsb3NlJyk7XG4gICAgY2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSAnQ2xvc2UnO1xuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VPdmVybGF5KVxuXG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkaXRpb24nKTtcbiAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIExpc3QnO1xuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZE5ld0xpc3QpXG5cbiAgICBwb3B1cEJvdC5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG4gICAgcG9wdXBCb3QuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcblxuICAgIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwVG9wKTtcbiAgICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cE1pZCk7XG4gICAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBCb3QpO1xuXG4gICAgb3ZlcmxheS5hcHBlbmRDaGlsZChwb3B1cCk7XG5cbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUxpc3RQb3B1cChjb25maXJtQ2FsbGJhY2spIHtcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3ZlcmxheS5jbGFzc05hbWUgPSAnb3ZlcmxheTInO1xuXG4gICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3B1cC5jbGFzc05hbWUgPSAncG9wdXAyJztcblxuICAgIGNvbnN0IHBvcHVwVG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9wdXBUb3AuY2xhc3NOYW1lID0gJ3BvcHVwLXRvcDInO1xuXG4gICAgY29uc3QgdHJpYW5nbGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIHRyaWFuZ2xlSWNvbi5jbGFzc05hbWUgPSAnZmEtc29saWQgZmEtdHJpYW5nbGUtZXhjbGFtYXRpb24nO1xuXG4gICAgY29uc3QgcG9wdXBNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBvcHVwTWVzc2FnZS50ZXh0Q29udGVudCA9ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgbGlzdD8nO1xuXG4gICAgY29uc3QgcG9wdXBCb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3B1cEJvdC5jbGFzc05hbWUgPSAncG9wdXAtYm90Mic7XG5cbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNsb3NlQnV0dG9uLmlkID0gJ2Nsb3NlJztcbiAgICBjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDbG9zZSc7XG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsb3NlT3ZlcmxheTIoKVxuICAgIH0pO1xuXG4gICAgY29uc3QgY29uZmlybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbmZpcm1CdXR0b24uaWQgPSAnZGVsZXRlbGlzdCc7XG4gICAgY29uZmlybUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb25maXJtJztcbiAgICBjb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25maXJtQ2FsbGJhY2soKTtcbiAgICAgICAgY2xvc2VPdmVybGF5MigpO1xuICAgIH0pO1xuXG4gICAgcG9wdXBUb3AuYXBwZW5kQ2hpbGQodHJpYW5nbGVJY29uKTtcbiAgICBwb3B1cFRvcC5hcHBlbmRDaGlsZChwb3B1cE1lc3NhZ2UpO1xuXG4gICAgcG9wdXBCb3QuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuICAgIHBvcHVwQm90LmFwcGVuZENoaWxkKGNvbmZpcm1CdXR0b24pO1xuXG4gICAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBUb3ApO1xuICAgIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwQm90KTtcblxuICAgIG92ZXJsYXkuYXBwZW5kQ2hpbGQocG9wdXApO1xuXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xufVxuXG5mdW5jdGlvbiBjbG9zZU92ZXJsYXkoKSB7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG4gICAgb3ZlcmxheS5yZW1vdmUoKVxufVxuXG5mdW5jdGlvbiBkZWxldGVMaXN0KGlkKSB7XG4gICAgY29uc3QgdG9kb0xpc3RzID0gZ2V0VG9kb0xpc3RzKCk7XG4gICAgY29uc3QgdXNlZElkcyA9IGdldFVzZWRJZHMoKTtcblxuICAgIGNvbnN0IGlkSW5kZXggPSB1c2VkSWRzLmluZGV4T2YoaWQpO1xuICAgIGlmIChpZEluZGV4ICE9PSAtMSkge1xuICAgICAgICB1c2VkSWRzLnNwbGljZShpZEluZGV4LCAxKTtcbiAgICAgICAgc2F2ZVVzZWRJZHModXNlZElkcyk7XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlZFRvZG9MaXN0cyA9IHRvZG9MaXN0cy5maWx0ZXIobGlzdCA9PiBsaXN0LmlkICE9PSBpZCk7XG4gICAgc2F2ZVRvZG9MaXN0cyh1cGRhdGVkVG9kb0xpc3RzKTtcblxuICAgIHJlbmRlclRvZG9MaXN0cygpO1xufVxuXG5mdW5jdGlvbiBjbG9zZU92ZXJsYXkyKCkge1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheTInKTtcbiAgICBvdmVybGF5LnJlbW92ZSgpXG59XG5cbmZ1bmN0aW9uIG5ld0xpc3RJdGVtKG5hbWUsIGlkKSB7XG4gICAgY29uc3QgbmV3TGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCduYXYtYnV0dG9ucycsICd0aGUtbmV3LWxpc3RzJyk7XG5cbiAgICBjb25zdCBuZXdMaXN0SXRlbUNoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3TGlzdEl0ZW1DaGlsZC5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jaXJjbGVcIj48L2k+JHtuYW1lfTwvZGl2PmA7XG5cbiAgICBjb25zdCBuZXdMaXN0SXRlbUNoaWxkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld0xpc3RJdGVtQ2hpbGQyLmNsYXNzTGlzdC5hZGQoJ3RyYXNoJyk7XG4gICAgY29uc3QgdGhlVHJhc2hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIHRoZVRyYXNoSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1yZWd1bGFyJywgJ2ZhLXRyYXNoLWNhbicpO1xuICAgIHRoZVRyYXNoSWNvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWxpc3QtaWRcIiwgaWQpO1xuICAgIG5ld0xpc3RJdGVtQ2hpbGQyLmFwcGVuZENoaWxkKHRoZVRyYXNoSWNvbik7XG5cbiAgICBuZXdMaXN0SXRlbS5hcHBlbmRDaGlsZChuZXdMaXN0SXRlbUNoaWxkKTtcbiAgICBuZXdMaXN0SXRlbS5hcHBlbmRDaGlsZChuZXdMaXN0SXRlbUNoaWxkMik7XG5cbiAgICByZXR1cm4gbmV3TGlzdEl0ZW1cbn1cblxuZnVuY3Rpb24gcmVuZGVyVG9kb0xpc3RzKCkge1xuICAgIGNvbnN0IHRvZG9MaXN0cyA9IGdldFRvZG9MaXN0cygpO1xuICAgIGNvbnN0IG5ld0xpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1saXN0cycpO1xuXG4gICAgbmV3TGlzdHMuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBub25EZWZhdWx0VG9kb0xpc3RzID0gdG9kb0xpc3RzLmZpbHRlcih0b2RvTGlzdCA9PiAhaXNEZWZhdWx0VG9kb0xpc3QodG9kb0xpc3QuaWQpKTtcblxuICAgIG5vbkRlZmF1bHRUb2RvTGlzdHMuZm9yRWFjaCh0b2RvTGlzdCA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gbmV3TGlzdEl0ZW0odG9kb0xpc3QubmFtZSwgdG9kb0xpc3QuaWQpO1xuICAgICAgICBuZXdMaXN0cy5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBnZW5lcmF0ZWREaXZzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRoZS1uZXctbGlzdHNcIik7XG4gICAgZm9yIChjb25zdCBkaXYgb2YgZ2VuZXJhdGVkRGl2cykge1xuICAgICAgICBjb25zdCB0cmFzaEljb24gPSBkaXYucXVlcnlTZWxlY3RvcihcIi50cmFzaCAuZmEtdHJhc2gtY2FuXCIpO1xuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdHJhc2hJY29uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICB0cmFzaEljb24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBnZW5lcmF0ZWRCaW5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmEtdHJhc2gtY2FuJyk7XG4gICAgZm9yIChjb25zdCBiaW4gb2YgZ2VuZXJhdGVkQmlucykge1xuICAgICAgICBiaW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBsaXN0SWQgPSBiaW4uZ2V0QXR0cmlidXRlKCdkYXRhLWxpc3QtaWQnKTtcbiAgICAgICAgICAgIGRlbGV0ZUxpc3RQb3B1cCgoKSA9PiBkZWxldGVMaXN0KGxpc3RJZCkpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzRGVmYXVsdFRvZG9MaXN0KGlkKSB7XG4gICAgY29uc3QgZGVmYXVsdFRvZG9MaXN0SWRzID0gW1wiMDAwMDAwXCIsIFwiMTExMTExXCIsIFwiMjIyMjIyXCIsIFwiMzMzMzMzXCIsIFwiNDQ0NDQ0XCJdO1xuXG4gICAgcmV0dXJuIGRlZmF1bHRUb2RvTGlzdElkcy5pbmNsdWRlcyhpZCk7XG59XG5cbmZ1bmN0aW9uIGFkZE5ld0xpc3QoKSB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3bGlzdGlucHV0Jyk7XG4gICAgY29uc3QgYWxlcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxlcnQnKTtcbiAgICBjb25zdCBwYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb24nKTtcblxuICAgIGNvbnN0IGlucHV0VmFsdWUgPSBpbnB1dC52YWx1ZTtcblxuICAgIGlmIChpbnB1dC5jaGVja1ZhbGlkaXR5KCkgPT09IGZhbHNlKSB7XG4gICAgICAgIGFsZXJ0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBpbnB1dC5zdHlsZS5ib3JkZXJDb2xvciA9ICdyZWQnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5ld0xpc3QgPSBuZXcgVG9kb0xpc3QoaW5wdXRWYWx1ZSk7XG5cbiAgICAgICAgY29uc3QgdG9kb0xpc3RzID0gZ2V0VG9kb0xpc3RzKCk7XG4gICAgICAgIHRvZG9MaXN0cy5wdXNoKG5ld0xpc3QpO1xuICAgICAgICBzYXZlVG9kb0xpc3RzKHRvZG9MaXN0cyk7XG5cbiAgICAgICAgbG9nVG9kb0xpc3RzVG9Db25zb2xlKClcblxuICAgICAgICBjb25zdCBuZXdMaXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctbGlzdHMnKTtcbiAgICAgICAgbmV3TGlzdHMuYXBwZW5kQ2hpbGQobmV3TGlzdEl0ZW0oaW5wdXRWYWx1ZSwgbmV3TGlzdC5pZCkpO1xuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuXG4gICAgICAgIHJlbmRlclRvZG9MaXN0cygpXG5cbiAgICAgICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gcGFuZWwuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICBhbGVydC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG5cbiAgICAgICAgY2xvc2VPdmVybGF5KClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZUJ1dHRvbihidXR0b24pIHtcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtYnV0dG9uc1wiKTtcblxuICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGlmIChidXR0b24gIT09IHRoaXMpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cblxuZnVuY3Rpb24gbGlzdENsaWNrKCkge1xuICAgIGNvbnN0IGxpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RzJylcbiAgICBjb25zdCBjaGV2cm9uSWNvbiA9IGxpc3RzLnF1ZXJ5U2VsZWN0b3IoXCIuZmEtY2hldnJvbi11cFwiKTtcbiAgICBjaGV2cm9uSWNvbi5jbGFzc0xpc3QudG9nZ2xlKFwiZmEtY2hldnJvbi1kb3duXCIpO1xuXG4gICAgY29uc3QgcGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uJyk7XG5cbiAgICBpZiAocGFuZWwuc3R5bGUubWF4SGVpZ2h0KSB7XG4gICAgICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gcGFuZWwuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2lkZWJhckFuaW1hdGUoKSB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZS1zaWRlYmFyJyk7XG5cbiAgICBpZiAoc2lkZWJhci5zdHlsZS5sZWZ0ID09PSAnJyB8fCBzaWRlYmFyLnN0eWxlLmxlZnQgPT09ICcwcHgnKSB7XG4gICAgICAgIHNpZGViYXIuc3R5bGUubGVmdCA9ICctMTAwJSc7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS1iYXJzLXN0YWdnZXJlZCcpO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZmEtYmFycycpO1xuICAgIH0gZWxzZSBpZiAoc2lkZWJhci5zdHlsZS5sZWZ0ID09PSAnLTEwMCUnKSB7XG4gICAgICAgIHNpZGViYXIuc3R5bGUubGVmdCA9ICcwJztcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWJhcnMnKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ZhLWJhcnMtc3RhZ2dlcmVkJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBob21lQnV0dG9uQ2xpY2soKSB7XG4gICAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5XCIpO1xuXG4gICAgc2V0QWN0aXZlQnV0dG9uKHRvZGF5KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0aWFsaXplU2lkZWJhcigpIHtcbiAgICBjcmVhdGVTaWRlYmFyKCk7XG5cbiAgICBjb25zdCB0b2dnbGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlLXNpZGViYXInKTtcbiAgICB0b2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaWRlYmFyQW5pbWF0ZSk7XG5cbiAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZS1ob21lJyk7XG4gICAgaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhvbWVCdXR0b25DbGljaylcblxuICAgIHNldEFjdGl2ZUJ1dHRvbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluYm94XCIpKTtcbiAgICBpbml0aWFsaXNlTWFpbignMDAwMDAwJylcblxuICAgIHJlbmRlclRvZG9MaXN0cygpXG59XG4iLCJpbXBvcnQgaW5pdGlhbGl6ZVNpZGViYXIgZnJvbSAnLi9zaWRlYmFyJ1xuaW1wb3J0IHsgVG9kb0xpc3QsZ2V0VG9kb0xpc3RzLHNhdmVUb2RvTGlzdHMsIGxvZ1RvZG9MaXN0c1RvQ29uc29sZSwgZ2V0VXNlZElkcywgc2F2ZVVzZWRJZHMgfSBmcm9tICcuL2FwcC5qcydcblxuZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdi5jbGFzc0xpc3QuYWRkKCduYXYnKTtcblxuICAgIGNvbnN0IG5hdklubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2SW5uZXIuY2xhc3NMaXN0LmFkZCgnbmF2LWlubmVyJylcblxuICAgIGNvbnN0IGxlZnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZWZ0RGl2LmNsYXNzTGlzdC5hZGQoJ2xlZnQtbmF2Jyk7XG5cbiAgICBjb25zdCBjZW50ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjZW50ZXJEaXYuY2xhc3NMaXN0LmFkZCgnY2VudGVyLW5hdicpO1xuXG4gICAgY29uc3QgcmlnaHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByaWdodERpdi5jbGFzc0xpc3QuYWRkKCdyaWdodC1uYXYnKTtcblxuICAgIGNvbnN0IGxvZ29EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2dvRGl2LmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcblxuICAgIGNvbnN0IG1lbnVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIG1lbnVJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLWJhcnMtc3RhZ2dlcmVkJyk7XG4gICAgbWVudUljb24uc2V0QXR0cmlidXRlKCdpZCcsICd0b2dnbGUtc2lkZWJhcicpO1xuXG4gICAgY29uc3QgaG9tZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgaG9tZUljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtaG91c2UnKTtcbiAgICBob21lSWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZ2dsZS1ob21lJyk7XG5cbiAgICBsZWZ0RGl2LmFwcGVuZENoaWxkKG1lbnVJY29uKTtcbiAgICBsZWZ0RGl2LmFwcGVuZENoaWxkKGhvbWVJY29uKTtcblxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICBkYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGF0ZUlucHV0Jyk7XG5cbiAgICBjZW50ZXJEaXYuYXBwZW5kQ2hpbGQoZGF0ZSlcblxuICAgIGNvbnN0IGFkZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgYWRkSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1wbHVzJyk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnVG9Ebyc7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcblxuICAgIGxvZ29EaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgcmlnaHREaXYuYXBwZW5kQ2hpbGQoYWRkSWNvbik7XG4gICAgcmlnaHREaXYuYXBwZW5kQ2hpbGQobG9nb0Rpdik7XG5cbiAgICBuYXZJbm5lci5hcHBlbmRDaGlsZChsZWZ0RGl2KTtcbiAgICBuYXZJbm5lci5hcHBlbmRDaGlsZChjZW50ZXJEaXYpO1xuICAgIG5hdklubmVyLmFwcGVuZENoaWxkKHJpZ2h0RGl2KTtcblxuICAgIG5hdi5hcHBlbmRDaGlsZChuYXZJbm5lcik7XG5cbiAgICByZXR1cm4gbmF2XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICAgIG1haW4uc2V0QXR0cmlidXRlKCdpZCcsICdtYWluJyk7XG5cblxuICAgIHJldHVybiBtYWluXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRUb2RvTGlzdHMoKSB7XG4gICAgY29uc3QgZGVmYXVsdExpc3RzRGF0YSA9IFtcbiAgICAgICAgeyBuYW1lOiBcIkluYm94XCIsIGlkOiBcIjAwMDAwMFwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJUb2RheVwiLCBpZDogXCIxMTExMTFcIiB9LFxuICAgICAgICB7IG5hbWU6IFwiVXBjb21pbmdcIiwgaWQ6IFwiMjIyMjIyXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIkFsbFwiLCBpZDogXCIzMzMzMzNcIiB9LFxuICAgICAgICB7IG5hbWU6IFwiSW1wb3J0YW50XCIsIGlkOiBcIjQ0NDQ0NFwiIH1cbiAgICBdO1xuXG4gICAgY29uc3QgZXhpc3RpbmdMaXN0cyA9IGdldFRvZG9MaXN0cygpO1xuICAgIGNvbnN0IG1pc3NpbmdMaXN0c0RhdGEgPSBkZWZhdWx0TGlzdHNEYXRhLmZpbHRlcihkZWZhdWx0TGlzdCA9PiBcbiAgICAgICAgIWV4aXN0aW5nTGlzdHMuc29tZShleGlzdGluZ0xpc3QgPT4gZXhpc3RpbmdMaXN0Lm5hbWUgPT09IGRlZmF1bHRMaXN0Lm5hbWUpXG4gICAgKTtcblxuICAgIGNvbnN0IHVwZGF0ZWRMaXN0cyA9IGV4aXN0aW5nTGlzdHMuY29uY2F0KG1pc3NpbmdMaXN0c0RhdGEubWFwKGRhdGEgPT4gbmV3IFRvZG9MaXN0KGRhdGEubmFtZSwgZGF0YS5pZCkpKTtcbiAgICBzYXZlVG9kb0xpc3RzKHVwZGF0ZWRMaXN0cyk7XG5cbiAgICB1cGRhdGVVc2VkSWRzKGRlZmF1bHRMaXN0c0RhdGEubWFwKGxpc3QgPT4gbGlzdC5pZCkpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVVc2VkSWRzKGlkc1RvSW5jbHVkZSkge1xuICAgIGNvbnN0IHVzZWRJZHMgPSBnZXRVc2VkSWRzKCk7XG4gICAgY29uc3QgdW5pcXVlVXNlZElkcyA9IEFycmF5LmZyb20obmV3IFNldCh1c2VkSWRzLmNvbmNhdChpZHNUb0luY2x1ZGUpKSk7XG4gICAgc2F2ZVVzZWRJZHModW5pcXVlVXNlZElkcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVdlYnBhZ2UoKSB7XG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcblxuICAgIHZhciBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgdmFyIGZvcm1hdHRlZERhdGUgPSBjdXJyZW50RGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlSW5wdXRcIikudmFsdWUgPSBmb3JtYXR0ZWREYXRlO1xuXG4gICAgY3JlYXRlRGVmYXVsdFRvZG9MaXN0cygpO1xuXG4gICAgaW5pdGlhbGl6ZVNpZGViYXIoKVxufVxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==