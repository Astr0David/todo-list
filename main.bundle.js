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
    overflow: auto;
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
    user-select: none;
}

.main {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 285px 1fr;
    grid-template-areas: 'sidebar main-area';
    height: 100%;
    transition: 0.3s ease;
    overflow: hidden;
}

.sidebar {
    background-color: #f7f7f7;
    grid-area: sidebar;
    padding: 1rem;
    position: relative;
    height: 100%;
    left: 0;
    transition: 0.3s ease;
}

.main-area {
    grid-area: main-area;
    padding: 1rem;
    display: flex;
    justify-content: center;
    transition: 0.3s ease;
    overflow: auto;
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
    background-color: rgba(0, 0, 0, 0.075);
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
    color: darkorange;
    opacity: 60%;
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
    color: #3a5a40;
    transform: translateX(-5%);
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
    user-select: none;
}

.main-area .main-child .todo-section {
    width: 90%;
    padding: 2rem 0rem;
}

.overlay,
.overlay2 {
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

.popup,
.popup2 {
    background-color: white;
    max-width: 500px;
    width: 100%;
    border-radius: 5px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.4);
    margin: 1rem;
    z-index: 1000;
    position: absolute;
}

.popup .fa-xmark,
.popup2 .fa-xmark {
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    padding: .5rem;
    background-color: #eee;
    color: #111;
    border-radius: 50%;
}

.popup .popup-top,
.popup2 .popup-top2 {
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

.popup .popup-mid,
.popup2 .popup-mid {
    padding: 0rem 1.5rem;
    margin-bottom: 1rem;
}

.popup .popup-mid p,
.popup2 .popup-mid p {
    margin-bottom: .5rem;
}

.popup .popup-mid input,
.popup2 .popup-mid input {
    width: 100%;
    font-size: 1.25rem;
    padding: 0.25rem 0.2rem;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease;
}

.popup .popup-mid input:hover,
.popup2 .popup-mid input:hover {
    border: solid 1px #3a5a40;
}

.popup .popup-mid input:focus,
.popup2 .popup-mid input:focus {
    border: 2px solid #3a5a40;
    outline: none;
}

.popup .popup-bot,
.popup2 .popup-bot2 {
    padding: 0rem 1.5rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: .5rem;
}

.popup .popup-bot #close,
.popup2 .popup-bot2 #close {
    font-size: 1.1rem;
    padding: .5rem;
    border-radius: 4px;
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.6);
    color: rgba(0, 0, 0, 0.6);
    background-color: transparent;
    cursor: pointer;
}

.popup .popup-bot #close:hover,
.popup2 .popup-bot2 #close:hover {
    border: 1px solid transparent;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
}

.popup .popup-bot #addition,
.popup2 .popup-bot2 #deletelist {
    font-size: 1.1rem;
    padding: .5rem 2rem;
    border-radius: 4px;
    outline: none;
    border: 1px solid transparent;
    color: white;
    background-color: #588157;
    cursor: pointer;
}

.popup .popup-bot #addition:hover,
.popup2 .popup-bot2 #deletelist:hover {
    transform: scale(1.05);
}

.popup .popup-bot #addition:active,
.popup2 .popup-bot2 #deletelist:active {
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

.overlay3 {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 500;
    width: 100vw;
    height: 100vh;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.45);
    overflow: hidden;
}

.popup3 {
    background-color: white;
    max-width: 500px;
    width: 100%;
    border-radius: 5px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.4);
    margin: 1rem;
    z-index: 1000;
    position: absolute;
}

.popup3 .fa-xmark {
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    padding: .5rem;
    background-color: #eee;
    color: #111;
    border-radius: 50%;
}

.popup3 .fa-xmark:hover {
    transform: scale(1.2);
}

.popup3 .fa-xmark:active {
    transform: scale(1);
}

.popup3 .popup-top3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    padding: 1rem;
    border-bottom: solid 1px rgba(0, 0, 0, 0.2);
}

.popup3 .popup-top3 p {
    font-size: 1.5rem;
}

.popup3 .popup-mid3 {
    padding: 0rem 1.5rem;
    margin-bottom: 1rem;
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;
}

.mid-left {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
}

.mid-right {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
}

.popup3 .popup-mid3 label {
    font-size: 1.1rem;
    font-weight: 300;
    padding-top: 0.2rem;
}

.popup3 .popup-mid3 textarea {
    resize: none;
    border-radius: 4px;
    padding: 0.25rem;
    font-size: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
}

.popup3 .popup-mid3 textarea:focus {
    border: 2px solid #3a5a40;
    outline: none;
}

.popup3 .popup-mid3 input[type='text'] {
    font-size: 1rem;
    padding: 0.25rem 0.2rem;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease;
}

.popup3 .popup-mid3 select {
    font-size: 1rem;
    padding: 0.25rem;
    border-radius: 4px;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.2);
}

.popup3 .popup-mid3 .mid-right #task-date {
    font-size: 1rem;
    padding: 0.25rem;
    border-radius: 4px;
    outline: none;
    border: solid 1px rgba(0, 0, 0, 0.2);
    width: 100%;
}

.popup3 .popup-mid3 input:hover {
    border: solid 1px #3a5a40;
}

.popup3 .popup-mid3 input:focus {
    border: 2px solid #3a5a40;
    outline: none;
}

.popup3 .popup-bot3 {
    padding: 0rem 1.5rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: .5rem;
}

.popup3 .popup-bot3 #close {
    font-size: 1.1rem;
    padding: .5rem;
    border-radius: 4px;
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.6);
    color: rgba(0, 0, 0, 0.6);
    background-color: transparent;
    cursor: pointer;
}

.popup3 .popup-bot3 #close:hover {
    border: 1px solid transparent;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
}

.popup3 .popup-bot3 #addtask {
    font-size: 1.1rem;
    padding: .5rem 2rem;
    border-radius: 4px;
    outline: none;
    border: 1px solid transparent;
    color: white;
    background-color: #588157;
    cursor: pointer;
}

.popup3 .popup-bot3 #addtask:hover {
    transform: scale(1.05);
}

.popup3 .popup-bot3 #addtask:active {
    transform: scale(1);
}

.task-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
}

.each-task-section-top {
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 1rem;
    align-items: center;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 1rem;
    cursor: pointer;
}

.task-left {
    display: flex;
    align-items: center;
    padding-right: 1rem;
    gap: .5rem;
}

.task-left #tasktitle {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 30vw;
}

.task-right {
    display: flex;
    gap: 1rem;
    align-items: center;
    color: gray;
}

.task-right .task-icons {
    cursor: pointer;
}

.task-right .task-icons:hover {
    color: black;
    transform: scale(1.3);
}

.task-right .task-icons:active {
    color: black;
    transform: scale(1.15);
}

.each-task-section-bot {
    overflow: hidden;
    display: none;
    align-items: center;
    flex-wrap: wrap;
    border-radius: 5px;
    padding: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.15);
    margin-bottom: 1.5rem;
    margin-top: -.75rem;
    justify-content: space-between;
    width: 99%;
    min-width: 200px;
}

.each-task-section-bot p {
    font-weight: 300;
}

.bot-right,
.bot-left {
    width: 49%;
    display: flex;
    flex-direction: column;
    height: 100%;
}

.right-top,
.right-bot,
.left-top,
.left-bot {
    display: flex;
    gap: .75rem;
    flex-wrap: wrap;
}

.right-top,
.left-top {
    padding-bottom: 1rem;
    align-self: flex-start;
    display: flex;
    width: 100%;
}

.each-task-section-bot p.bolden {
    font-weight: 500;
}

.right-top #long,
.left-top #long {
    word-wrap: break-word;
    overflow: hidden;
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

    .popup3 {
        max-width: 90%;
    }
}

@media (max-width: 300px) {
    .main-area .main-child .todo-section {
        width: 100%;
    }

    .main-area .main-child {
        width: 100%;
    }

    .main-area .main-child .title {
        padding-top: 0rem;
        padding-left: 0rem;
    }
}

@media (max-width: 480px) {
    .main-area .main-child .todo-section {
        width: 95%;
    }

    .main-area .main-child {
        width: 100%;
    }

    .main-area .main-child .title {
        padding-top: 0rem;
        padding-left: 0rem;
    }

    .sidebar {
        position: fixed;
        left: -100%;
    }
}

@media (max-width: 768px) {
    .sidebar {
        position: fixed;
        left: -100%;
        width: 300px;
    }

    .main {
        grid-template-columns: 1fr;
        grid-template-areas: ' main-area';
    }

    .nav-inner {
        width: 95%;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@10..48,200;10..48,300;10..48,400;10..48,500;10..48,600;10..48,700;10..48,800&display=swap');\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: Ubuntu, sans-serif;\n}\n\nbody {\n    height: 100vh;\n    overflow: auto;\n}\n\n.main-content {\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 45px 1fr;\n    grid-template-areas:\n        'navbar'\n        'main';\n}\n\n.nav {\n    background-color: #344e41;\n    grid-area: navbar;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #f1faee;\n    position: sticky;\n    top: 0;\n    z-index: 100;\n}\n\n.nav-inner {\n    width: 90%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.left-nav,\n.right-nav {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.logo {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding-left: 1.5rem;\n    gap: 0.25rem;\n    font-family: 2rem;\n    color: #f1faee;\n    user-select: none;\n}\n\n.nav .fa-plus {\n    font-size: 1.25rem;\n    background-color: transparent;\n    padding: 0.25rem;\n    border-radius: 5px;\n    color: white;\n    transition: 0.2s ease;\n}\n\n.nav .fa-plus:hover {\n    background-color: #888;\n}\n\n.nav .fa-plus:active {\n    transform: scale(0.95);\n}\n\n.left-nav {\n    display: flex;\n    align-items: center;\n    text-align: center;\n    gap: 1.5rem;\n    font-size: 1.2rem;\n    transition: 0.2s ease;\n}\n\n.left-nav .fa-house {\n    font-size: 1.2rem;\n    transition: 0.3s ease;\n}\n\n.left-nav .fa-bars,\n.fa-bars-staggered {\n    transition: 0.3s ease;\n}\n\n.nav .fa-solid {\n    cursor: pointer;\n    transform: 0.2s ease;\n}\n\n.left-nav .fa-solid:hover {\n    opacity: 50%;\n}\n\n.left-nav .fa-solid:active {\n    transform: scale(0.95);\n}\n\n.center-nav {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n}\n\n#dateInput {\n    background: transparent;\n    border: none;\n    font-size: 1rem;\n    color: white;\n    text-transform: uppercase;\n    background-color: #588157;\n    border-radius: 4px;\n    padding: 0.4rem 1rem;\n    text-align: center;\n    user-select: none;\n}\n\n.main {\n    display: grid;\n    grid-template-rows: 1fr;\n    grid-template-columns: 285px 1fr;\n    grid-template-areas: 'sidebar main-area';\n    height: 100%;\n    transition: 0.3s ease;\n    overflow: hidden;\n}\n\n.sidebar {\n    background-color: #f7f7f7;\n    grid-area: sidebar;\n    padding: 1rem;\n    position: relative;\n    height: 100%;\n    left: 0;\n    transition: 0.3s ease;\n}\n\n.main-area {\n    grid-area: main-area;\n    padding: 1rem;\n    display: flex;\n    justify-content: center;\n    transition: 0.3s ease;\n    overflow: auto;\n}\n\n.menu {\n    text-decoration: none;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n\n.menu li {\n    display: flex;\n    align-items: center;\n    text-align: center;\n    justify-content: space-between;\n    font-size: 1.1rem;\n    margin-bottom: .6rem;\n    padding: 0.5rem;\n    font-weight: 300;\n    cursor: pointer;\n    border-radius: 5px;\n    transition: background-color 0.2s ease;\n    user-select: none;\n}\n\n.nav-buttons:hover {\n    background-color: rgba(0, 0, 0, 0.075);\n}\n\n.menu li div {\n    display: flex;\n    align-items: center;\n    text-align: center;\n}\n\n.menu li i {\n    padding-right: 1rem;\n}\n\n.nav-buttons.active {\n    font-weight: 500;\n}\n\n.today i {\n    color: crimson;\n    opacity: 50%;\n}\n\n.inbox i {\n    color: gray;\n}\n\n.all i {\n    opacity: 70%;\n}\n\n.upcoming i {\n    color: blue;\n    opacity: 50%;\n}\n\n.important i {\n    color: red;\n    opacity: 50%;\n}\n\n.lists i {\n    color: darkorange;\n    opacity: 60%;\n}\n\n.menu .lists {\n    margin-bottom: .5rem;\n}\n\n.lists .fa-chevron-up {\n    color: black;\n    font-size: 1rem;\n    padding-top: 0.1rem;\n}\n\n.accordion {\n    padding-left: 2.5rem;\n    font-size: 1rem;\n    transition: max-height 0.2s ease-out;\n    overflow: hidden;\n    max-height: 0;\n\n}\n\n.create-new i {\n    padding-right: .25rem;\n    opacity: 65%;\n}\n\n.accordion .create-new {\n    padding-left: 1.5rem;\n    padding-top: .5rem;\n    cursor: pointer;\n    user-select: none;\n    transition: all 0.1s ease-in-out;\n    display: flex;\n    align-items: center;\n    text-align: center;\n}\n\n.accordion .create-new:hover {\n    color: #3a5a40;\n    transform: translateX(-5%);\n}\n\n.accordion .new-lists i {\n    padding-right: .5rem;\n    font-size: .5rem;\n    opacity: 50%;\n}\n\n.the-new-lists {\n    padding: .5rem;\n    width: 100%;\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n    text-align: center;\n    margin-bottom: 0.5rem;\n    user-select: none;\n    cursor: pointer;\n    font-weight: 300;\n    justify-content: space-between;\n}\n\n.the-new-lists div {\n    display: flex;\n    align-items: center;\n}\n\n.the-new-lists .trash {\n    justify-content: flex-end;\n}\n\n.the-new-lists .trash .fa-trash-can {\n    display: none;\n    font-size: 1rem;\n    color: grey;\n    transition: all 0.1s ease-in-out;\n}\n\n.the-new-lists .trash .fa-trash-can:hover {\n    color: black;\n    transform: scale(1.05);\n}\n\n.main-child {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 90%;\n}\n\n.main-area .main-child .title {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    width: 100%;\n    padding-top: 2rem;\n    padding-left: 1rem;\n    font-weight: 400;\n    font-size: 1.75rem;\n    color: #444;\n    user-select: none;\n}\n\n.main-area .main-child .todo-section {\n    width: 90%;\n    padding: 2rem 0rem;\n}\n\n.overlay,\n.overlay2 {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 500;\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    background-color: rgba(0, 0, 0, 0.45);\n    overflow: hidden;\n}\n\n.popup,\n.popup2 {\n    background-color: white;\n    max-width: 500px;\n    width: 100%;\n    border-radius: 5px;\n    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.4);\n    margin: 1rem;\n    z-index: 1000;\n    position: absolute;\n}\n\n.popup .fa-xmark,\n.popup2 .fa-xmark {\n    top: 1rem;\n    right: 1rem;\n    cursor: pointer;\n    padding: .5rem;\n    background-color: #eee;\n    color: #111;\n    border-radius: 50%;\n}\n\n.popup .popup-top,\n.popup2 .popup-top2 {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 1rem;\n    padding: 1.5rem;\n    border-bottom: solid 1px rgba(0, 0, 0, 0.2);\n}\n\n.popup .popup-top p {\n    font-size: 1.75rem;\n}\n\n.popup2 .popup-top2 p {\n    font-size: 1.25rem;\n    text-align: center;\n    padding-top: 1rem;\n}\n\n.popup .popup-mid,\n.popup2 .popup-mid {\n    padding: 0rem 1.5rem;\n    margin-bottom: 1rem;\n}\n\n.popup .popup-mid p,\n.popup2 .popup-mid p {\n    margin-bottom: .5rem;\n}\n\n.popup .popup-mid input,\n.popup2 .popup-mid input {\n    width: 100%;\n    font-size: 1.25rem;\n    padding: 0.25rem 0.2rem;\n    border-radius: 4px;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    transition: all 0.2s ease;\n}\n\n.popup .popup-mid input:hover,\n.popup2 .popup-mid input:hover {\n    border: solid 1px #3a5a40;\n}\n\n.popup .popup-mid input:focus,\n.popup2 .popup-mid input:focus {\n    border: 2px solid #3a5a40;\n    outline: none;\n}\n\n.popup .popup-bot,\n.popup2 .popup-bot2 {\n    padding: 0rem 1.5rem;\n    margin-bottom: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    gap: .5rem;\n}\n\n.popup .popup-bot #close,\n.popup2 .popup-bot2 #close {\n    font-size: 1.1rem;\n    padding: .5rem;\n    border-radius: 4px;\n    outline: none;\n    border: 1px solid rgba(0, 0, 0, 0.6);\n    color: rgba(0, 0, 0, 0.6);\n    background-color: transparent;\n    cursor: pointer;\n}\n\n.popup .popup-bot #close:hover,\n.popup2 .popup-bot2 #close:hover {\n    border: 1px solid transparent;\n    color: white;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.popup .popup-bot #addition,\n.popup2 .popup-bot2 #deletelist {\n    font-size: 1.1rem;\n    padding: .5rem 2rem;\n    border-radius: 4px;\n    outline: none;\n    border: 1px solid transparent;\n    color: white;\n    background-color: #588157;\n    cursor: pointer;\n}\n\n.popup .popup-bot #addition:hover,\n.popup2 .popup-bot2 #deletelist:hover {\n    transform: scale(1.05);\n}\n\n.popup .popup-bot #addition:active,\n.popup2 .popup-bot2 #deletelist:active {\n    transform: scale(1);\n}\n\n.popup .fa-xmark:hover {\n    transform: scale(1.2);\n}\n\n.popup .fa-xmark:active {\n    transform: scale(1);\n}\n\n.popup .popup-bot #addition:hover {\n    transform: scale(1.05);\n}\n\n.popup .popup-bot #addition:active {\n    transform: scale(1);\n}\n\n.popup2 .popup-top2 {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 1rem;\n    padding: 1.5rem;\n    border-bottom: solid 1px rgba(0, 0, 0, 0.2);\n}\n\n.popup2 .popup-top2 .fa-triangle-exclamation {\n    font-size: 4.5rem;\n    color: red;\n    opacity: 70%;\n}\n\n.popup2 .popup-bot2 {\n    padding: 0rem 1.5rem;\n    margin-bottom: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    gap: .5rem;\n}\n\n.popup2 .popup-bot2 #deletelist {\n    font-size: 1.1rem;\n    padding: .5rem;\n    border-radius: 4px;\n    outline: none;\n    border: 1px solid transparent;\n    color: white;\n    background-color: #588157;\n    cursor: pointer;\n}\n\n.popup2 .popup-bot2 #deletelist:hover {\n    transform: scale(1.05);\n}\n\n.popup2 .popup-bot2 #deletelist:active {\n    transform: scale(1);\n}\n\n.popup2 .fa-xmark:hover {\n    transform: scale(1.2);\n}\n\n.popup2 .fa-xmark:active {\n    transform: scale(1);\n}\n\n.popup2 .popup-bot2 #deletelist:hover {\n    transform: scale(1.05);\n}\n\n.popup2 .popup-bot2 #deletelist:active {\n    transform: scale(1);\n}\n\n.popup2 .popup-top2 {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 1rem;\n    padding: 1.5rem;\n    border-bottom: solid 1px rgba(0, 0, 0, 0.2);\n}\n\n.popup2 .popup-top2 .fa-triangle-exclamation {\n    font-size: 4.5rem;\n    color: red;\n    opacity: 70%;\n}\n\n.popup2 .popup-bot2 {\n    padding: 0rem 1.5rem;\n    margin-bottom: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    gap: .5rem;\n}\n\n.popup2 .popup-bot2 #deletelist {\n    font-size: 1.1rem;\n    padding: .5rem;\n    border-radius: 4px;\n    outline: none;\n    border: 1px solid transparent;\n    color: white;\n    background-color: #588157;\n    cursor: pointer;\n}\n\n.popup2 .popup-bot2 #deletelist:hover {\n    transform: scale(1.05);\n}\n\n.popup2 .popup-bot2 #deletelist:active {\n    transform: scale(1);\n}\n\n.popup2 .fa-xmark:hover {\n    transform: scale(1.2);\n}\n\n.popup2 .fa-xmark:active {\n    transform: scale(1);\n}\n\n.popup2 .popup-bot2 #deletelist:hover {\n    transform: scale(1.05);\n}\n\n.popup2 .popup-bot2 #deletelist:active {\n    transform: scale(1);\n}\n\n.overlay3 {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 500;\n    width: 100vw;\n    height: 100vh;\n    position: fixed;\n    background-color: rgba(0, 0, 0, 0.45);\n    overflow: hidden;\n}\n\n.popup3 {\n    background-color: white;\n    max-width: 500px;\n    width: 100%;\n    border-radius: 5px;\n    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.4);\n    margin: 1rem;\n    z-index: 1000;\n    position: absolute;\n}\n\n.popup3 .fa-xmark {\n    top: 1rem;\n    right: 1rem;\n    cursor: pointer;\n    padding: .5rem;\n    background-color: #eee;\n    color: #111;\n    border-radius: 50%;\n}\n\n.popup3 .fa-xmark:hover {\n    transform: scale(1.2);\n}\n\n.popup3 .fa-xmark:active {\n    transform: scale(1);\n}\n\n.popup3 .popup-top3 {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 1rem;\n    padding: 1rem;\n    border-bottom: solid 1px rgba(0, 0, 0, 0.2);\n}\n\n.popup3 .popup-top3 p {\n    font-size: 1.5rem;\n}\n\n.popup3 .popup-mid3 {\n    padding: 0rem 1.5rem;\n    margin-bottom: 1rem;\n    display: flex;\n    gap: 1rem;\n    margin-bottom: 1rem;\n    flex-wrap: wrap;\n}\n\n.mid-left {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    width: 100%;\n}\n\n.mid-right {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    width: 100%;\n}\n\n.popup3 .popup-mid3 label {\n    font-size: 1.1rem;\n    font-weight: 300;\n    padding-top: 0.2rem;\n}\n\n.popup3 .popup-mid3 textarea {\n    resize: none;\n    border-radius: 4px;\n    padding: 0.25rem;\n    font-size: 1rem;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n}\n\n.popup3 .popup-mid3 textarea:focus {\n    border: 2px solid #3a5a40;\n    outline: none;\n}\n\n.popup3 .popup-mid3 input[type='text'] {\n    font-size: 1rem;\n    padding: 0.25rem 0.2rem;\n    border-radius: 4px;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    transition: all 0.2s ease;\n}\n\n.popup3 .popup-mid3 select {\n    font-size: 1rem;\n    padding: 0.25rem;\n    border-radius: 4px;\n    background-color: white;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n}\n\n.popup3 .popup-mid3 .mid-right #task-date {\n    font-size: 1rem;\n    padding: 0.25rem;\n    border-radius: 4px;\n    outline: none;\n    border: solid 1px rgba(0, 0, 0, 0.2);\n    width: 100%;\n}\n\n.popup3 .popup-mid3 input:hover {\n    border: solid 1px #3a5a40;\n}\n\n.popup3 .popup-mid3 input:focus {\n    border: 2px solid #3a5a40;\n    outline: none;\n}\n\n.popup3 .popup-bot3 {\n    padding: 0rem 1.5rem;\n    margin-bottom: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    gap: .5rem;\n}\n\n.popup3 .popup-bot3 #close {\n    font-size: 1.1rem;\n    padding: .5rem;\n    border-radius: 4px;\n    outline: none;\n    border: 1px solid rgba(0, 0, 0, 0.6);\n    color: rgba(0, 0, 0, 0.6);\n    background-color: transparent;\n    cursor: pointer;\n}\n\n.popup3 .popup-bot3 #close:hover {\n    border: 1px solid transparent;\n    color: white;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.popup3 .popup-bot3 #addtask {\n    font-size: 1.1rem;\n    padding: .5rem 2rem;\n    border-radius: 4px;\n    outline: none;\n    border: 1px solid transparent;\n    color: white;\n    background-color: #588157;\n    cursor: pointer;\n}\n\n.popup3 .popup-bot3 #addtask:hover {\n    transform: scale(1.05);\n}\n\n.popup3 .popup-bot3 #addtask:active {\n    transform: scale(1);\n}\n\n.task-container {\n    display: flex;\n    width: 100%;\n    flex-direction: column;\n    align-items: center;\n}\n\n.each-task-section-top {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    font-size: 1rem;\n    align-items: center;\n    margin-bottom: 1.5rem;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n    padding-bottom: 1rem;\n    cursor: pointer;\n}\n\n.task-left {\n    display: flex;\n    align-items: center;\n    padding-right: 1rem;\n    gap: .5rem;\n}\n\n.task-left #tasktitle {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 30vw;\n}\n\n.task-right {\n    display: flex;\n    gap: 1rem;\n    align-items: center;\n    color: gray;\n}\n\n.task-right .task-icons {\n    cursor: pointer;\n}\n\n.task-right .task-icons:hover {\n    color: black;\n    transform: scale(1.3);\n}\n\n.task-right .task-icons:active {\n    color: black;\n    transform: scale(1.15);\n}\n\n.each-task-section-bot {\n    overflow: hidden;\n    display: none;\n    align-items: center;\n    flex-wrap: wrap;\n    border-radius: 5px;\n    padding: 1rem;\n    border: 1px solid rgba(0, 0, 0, 0.15);\n    margin-bottom: 1.5rem;\n    margin-top: -.75rem;\n    justify-content: space-between;\n    width: 99%;\n    min-width: 200px;\n}\n\n.each-task-section-bot p {\n    font-weight: 300;\n}\n\n.bot-right,\n.bot-left {\n    width: 49%;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.right-top,\n.right-bot,\n.left-top,\n.left-bot {\n    display: flex;\n    gap: .75rem;\n    flex-wrap: wrap;\n}\n\n.right-top,\n.left-top {\n    padding-bottom: 1rem;\n    align-self: flex-start;\n    display: flex;\n    width: 100%;\n}\n\n.each-task-section-bot p.bolden {\n    font-weight: 500;\n}\n\n.right-top #long,\n.left-top #long {\n    word-wrap: break-word;\n    overflow: hidden;\n}\n\n@media (max-width: 600px) {\n    .popup {\n        max-width: 90%;\n    }\n\n    #dateInput {\n        display: none;\n    }\n\n    .popup2 {\n        max-width: 90%;\n    }\n\n    .popup3 {\n        max-width: 90%;\n    }\n}\n\n@media (max-width: 300px) {\n    .main-area .main-child .todo-section {\n        width: 100%;\n    }\n\n    .main-area .main-child {\n        width: 100%;\n    }\n\n    .main-area .main-child .title {\n        padding-top: 0rem;\n        padding-left: 0rem;\n    }\n}\n\n@media (max-width: 480px) {\n    .main-area .main-child .todo-section {\n        width: 95%;\n    }\n\n    .main-area .main-child {\n        width: 100%;\n    }\n\n    .main-area .main-child .title {\n        padding-top: 0rem;\n        padding-left: 0rem;\n    }\n\n    .sidebar {\n        position: fixed;\n        left: -100%;\n    }\n}\n\n@media (max-width: 768px) {\n    .sidebar {\n        position: fixed;\n        left: -100%;\n        width: 300px;\n    }\n\n    .main {\n        grid-template-columns: 1fr;\n        grid-template-areas: ' main-area';\n    }\n\n    .nav-inner {\n        width: 95%;\n    }\n}"],"sourceRoot":""}]);
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
/* harmony export */   getTodoListById: () => (/* binding */ getTodoListById),
/* harmony export */   getTodoLists: () => (/* binding */ getTodoLists),
/* harmony export */   getUsedIds: () => (/* binding */ getUsedIds),
/* harmony export */   logTodoListsToConsole: () => (/* binding */ logTodoListsToConsole),
/* harmony export */   saveTodoLists: () => (/* binding */ saveTodoLists),
/* harmony export */   saveUsedIds: () => (/* binding */ saveUsedIds),
/* harmony export */   uniqueId: () => (/* binding */ uniqueId)
/* harmony export */ });
class Todo {
    constructor(title, description, dueDate, priority) {
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

function getTodoListById(id) {
    const todoLists = getTodoLists();
    return todoLists.find(todoList => todoList.id === id);
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
/* harmony export */   "default": () => (/* binding */ initialiseMain),
/* harmony export */   renderTasks: () => (/* binding */ renderTasks)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.js");


function createMain(id) {
    const main = document.createElement('div');
    main.classList.add('main-area');

    const mainChild = document.createElement('div');
    mainChild.classList.add('main-child');

    const todoList = (0,_app__WEBPACK_IMPORTED_MODULE_0__.getTodoListById)(id);

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

function renderTasks() {
    const navButtons = document.querySelectorAll('.nav-buttons');
    let activeNavButton = null;

    for (const button of navButtons) {
        if (button.classList.contains('active')) {
            activeNavButton = button;
            break;
        }
    }

    const dataListId = activeNavButton.getAttribute('data-list-id');

    const todoList = (0,_app__WEBPACK_IMPORTED_MODULE_0__.getTodoListById)(dataListId);
    if (!todoList) {
        console.error('Todo list not found');
        return;
    }

    todoList.todos.forEach(todo => {
        createTask(todo.title, todo.dueDate, todo.description, todo.priority);
    });

    const tasks = document.getElementsByClassName('each-task-section-top');
    for (const task of tasks) {
        task.addEventListener('click', function () {
            const taskParent = task.parentNode;
            const taskbot = taskParent.querySelector('.each-task-section-bot');
            const computedStyle = getComputedStyle(taskbot);
            if (computedStyle.display === 'none') {
                taskbot.style.display = 'flex';
            } else if (computedStyle.display === 'flex') {
                taskbot.style.display = 'none';
            }
        })
    }
}

function createTask(taskTitle, dueDate, description, priority) {
    const taskContainer = document.querySelector('.todo-section')

    const taskDiv = document.createElement("div");
    taskDiv.className = "task-container";

    const taskSectionTop = document.createElement("div");
    taskSectionTop.className = "each-task-section-top";


    const taskLeft = document.createElement("div");
    taskLeft.className = "task-left";

    const taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    taskCheckbox.addEventListener('click', (event) => {
        event.stopPropagation();
        event.stopImmediatePropagation(); 
    })
    taskLeft.appendChild(taskCheckbox);

    const taskTitleP = document.createElement("p");
    taskTitleP.id = "tasktitle";
    taskTitleP.textContent = taskTitle;
    taskLeft.appendChild(taskTitleP);

    taskSectionTop.appendChild(taskLeft);

    const taskRight = document.createElement("div");
    taskRight.className = "task-right";

    const editIcon = document.createElement("i");
    editIcon.className = "fa-regular fa-pen-to-square task-icons";
    editIcon.title = "Edit task";
    taskRight.appendChild(editIcon);

    const priorityIcon = document.createElement("i");
    priorityIcon.className = "fa-solid fa-flag task-icons";
    priorityIcon.title = "Change priority";
    taskRight.appendChild(priorityIcon);

    const moveIcon = document.createElement("i");
    moveIcon.className = "fa-regular fa-square-caret-up task-icons";
    moveIcon.title = "Move list";
    taskRight.appendChild(moveIcon);

    const deleteIcon = document.createElement("i");
    deleteIcon.className = "fa-solid fa-trash-can task-icons";
    deleteIcon.title = "Delete task";
    taskRight.appendChild(deleteIcon);

    taskSectionTop.appendChild(taskRight);
    taskDiv.appendChild(taskSectionTop);

    const taskSectionBot = document.createElement("div");
    taskSectionBot.className = "each-task-section-bot";

    const botLeft = document.createElement("div");
    botLeft.className = "bot-left";

    const leftTop = document.createElement("div");
    leftTop.className = "left-top";

    const titleBolden = document.createElement("p");
    titleBolden.className = "bolden";
    titleBolden.textContent = "Title:";
    leftTop.appendChild(titleBolden);

    const titleP = document.createElement("p");
    titleP.textContent = taskTitle;
    titleP.setAttribute('id','long')
    leftTop.appendChild(titleP);

    botLeft.appendChild(leftTop);

    const leftBot = document.createElement("div");
    leftBot.className = "left-bot";

    const dueDateBolden = document.createElement("p");
    dueDateBolden.className = "bolden";
    dueDateBolden.textContent = "Due date:";
    leftBot.appendChild(dueDateBolden);

    const dueDateP = document.createElement("p");
    dueDateP.textContent = dueDate;
    leftBot.appendChild(dueDateP);

    botLeft.appendChild(leftBot);
    taskSectionBot.appendChild(botLeft);

    const botRight = document.createElement("div");
    botRight.className = "bot-right";

    const rightTop = document.createElement("div");
    rightTop.className = "right-top";

    const descriptionBolden = document.createElement("p");
    descriptionBolden.className = "bolden";
    descriptionBolden.textContent = "Description:";
    rightTop.appendChild(descriptionBolden);

    const descriptionP = document.createElement("p");
    descriptionP.textContent = description;
    descriptionP.setAttribute('id', 'long')
    rightTop.appendChild(descriptionP);

    botRight.appendChild(rightTop);

    const rightBot = document.createElement("div");
    rightBot.className = "right-bot";

    const priorityBolden = document.createElement("p");
    priorityBolden.className = "bolden";
    priorityBolden.textContent = "Priority:";
    rightBot.appendChild(priorityBolden);

    const priorityP = document.createElement("p");
    priorityP.textContent = priority;
    rightBot.appendChild(priorityP);

    botRight.appendChild(rightBot);
    taskSectionBot.appendChild(botRight);
    taskDiv.appendChild(taskSectionBot);

    taskContainer.appendChild(taskDiv);
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
    inbox.setAttribute('data-list-id', '000000')
    inbox.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(inbox);
        (0,_main_js__WEBPACK_IMPORTED_MODULE_1__["default"])(inbox.getAttribute('data-list-id'));
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
    newListItem.setAttribute("data-list-id", id);

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
    const screenWidth = window.innerWidth;
    const sidebar = document.querySelector('.sidebar');
    const button = document.getElementById('toggle-sidebar');
    const main = document.querySelector('.main');
    
    if (screenWidth > 768) {
        if (sidebar.style.left === '' || sidebar.style.left === '0px') {
            sidebar.style.position = 'fixed';
            sidebar.style.left = '-100%';
            main.style.gridTemplateColumns = '1fr'
            main.style.gridTemplateAreas = '"main-area"'
            button.classList.remove('fa-bars-staggered');
            button.classList.add('fa-bars');
        } else if (sidebar.style.left === '-100%') {
            sidebar.style.left = '0';
            sidebar.style.position = 'relative';
            main.style.gridTemplateColumns = '300px 1fr'
            main.style.gridTemplateAreas = '"sidebar main-area"'
            button.classList.remove('fa-bars');
            button.classList.add('fa-bars-staggered');
        }
    } else {
        if (sidebar.style.left === '-100%') {
            sidebar.style.left = '0';
            button.classList.remove('fa-bars');
            button.classList.add('fa-bars-staggered');
        } else if (sidebar.style.left === '' || sidebar.style.left === '0px') {
            sidebar.style.left = '-100%';
            button.classList.remove('fa-bars-staggered');
            button.classList.add('fa-bars');
        }
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
    ;(0,_main_js__WEBPACK_IMPORTED_MODULE_1__.renderTasks)()
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
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ "./src/main.js");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.js */ "./src/app.js");




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
    const screenWidth = window.innerWidth;
    if (screenWidth > 768) {
        menuIcon.classList.add('fa-solid', 'fa-bars-staggered');
    } else {
        menuIcon.classList.add('fa-solid', 'fa-bars');
    }

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
    addIcon.addEventListener('click', function () {
        newTaskPopup();
        const todoLists = (0,_app_js__WEBPACK_IMPORTED_MODULE_2__.getTodoLists)();
        createListOptions(todoLists);
    })

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

function newTaskPopup() {
    const overlay = document.createElement('div');
    overlay.className = 'overlay3';

    const popup = document.createElement('div');
    popup.className = 'popup3';

    const popupTop = document.createElement('div');
    popupTop.className = 'popup-top3';

    const titleText = document.createElement('p');
    titleText.textContent = 'New Task';
    popupTop.appendChild(titleText);

    const closeButton = document.createElement('i');
    closeButton.className = 'fa-solid fa-xmark';
    closeButton.addEventListener('click', closeOverlay);
    popupTop.appendChild(closeButton);

    popup.appendChild(popupTop);

    const popupMid = document.createElement('div');
    popupMid.className = 'popup-mid3';

    const midLeft = document.createElement('div');
    midLeft.className = 'mid-left';

    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title:';
    midLeft.appendChild(titleLabel);

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.maxLength = 60;
    titleInput.id = 'task-title';
    titleInput.required = true;
    midLeft.appendChild(titleInput);

    const titleAlert = document.createElement('p');
    titleAlert.classList.add('title-alert');
    titleAlert.textContent = 'Title is required.';
    titleAlert.style.color = 'red';
    titleAlert.style.marginTop = '';
    titleAlert.style.display = 'none';
    midLeft.appendChild(titleAlert)

    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description:';
    midLeft.appendChild(descriptionLabel);

    const descriptionTextarea = document.createElement('textarea');
    descriptionTextarea.id = 'description';
    descriptionTextarea.cols = 30;
    descriptionTextarea.rows = 4;
    descriptionTextarea.maxLength = 180;
    midLeft.appendChild(descriptionTextarea);

    popupMid.appendChild(midLeft);

    const midRight = document.createElement('div');
    midRight.className = 'mid-right';

    const dateLabel = document.createElement('label');
    dateLabel.textContent = 'Due date:';
    midRight.appendChild(dateLabel);

    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.id = 'task-date';
    dateInput.required = true;
    midRight.appendChild(dateInput);

    const dateAlert = document.createElement('p');
    dateAlert.classList.add('date-alert');
    dateAlert.textContent = 'Date is required.';
    dateAlert.style.color = 'red';
    dateAlert.style.marginTop = '';
    dateAlert.style.display = 'none';

    midRight.appendChild(dateAlert);

    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority:';
    midRight.appendChild(priorityLabel);

    const prioritySelect = document.createElement('select');
    prioritySelect.id = 'priority';
    prioritySelect.required = true;
    ['Low', 'Medium', 'High'].forEach(priorityText => {
        const option = document.createElement('option');
        option.value = priorityText.toLowerCase();
        option.textContent = priorityText;
        prioritySelect.appendChild(option);
    });
    midRight.appendChild(prioritySelect);

    const priorityAlert = document.createElement('p');
    priorityAlert.classList.add('priority-alert');
    priorityAlert.textContent = 'Priority is required.';
    priorityAlert.style.color = 'red';
    priorityAlert.style.marginTop = '';
    priorityAlert.style.display = 'none';

    midRight.appendChild(priorityAlert);

    const listLabel = document.createElement('label');
    listLabel.textContent = 'List:';
    midRight.appendChild(listLabel);

    const listSelect = document.createElement('select');
    listSelect.id = 'thelist';
    listSelect.required = true;

    midRight.appendChild(listSelect);

    const listAlert = document.createElement('p');
    listAlert.classList.add('list-alert');
    listAlert.textContent = 'List is required.';
    listAlert.style.color = 'red';
    listAlert.style.marginTop = '';
    listAlert.style.display = 'none';

    midRight.appendChild(listAlert);

    popupMid.appendChild(midRight);

    popup.appendChild(popupMid);

    const popupBot = document.createElement('div');
    popupBot.className = 'popup-bot3';

    const textCloseButton = document.createElement('button');
    textCloseButton.id = 'close';
    textCloseButton.textContent = 'Close';
    textCloseButton.addEventListener('click', closeOverlay);
    popupBot.appendChild(textCloseButton);

    const addTaskButton = document.createElement('button');
    addTaskButton.id = 'addtask';
    addTaskButton.textContent = 'Add Task';
    addTaskButton.addEventListener('click', validateAndAddTask)
    popupBot.appendChild(addTaskButton);

    popup.appendChild(popupBot);

    overlay.appendChild(popup);

    const mainContent = document.getElementById('content');
    mainContent.appendChild(overlay);
}

function closeOverlay() {
    const overlay = document.querySelector('.overlay3');
    overlay.remove()
}

function createListOptions(todoLists) {
    const listSelect = document.getElementById('thelist');

    listSelect.innerHTML = '';
    const ignoreIds = ['111111', '222222', '333333', '444444']


    todoLists.forEach(list => {
        if (!ignoreIds.includes(list.id)) {
            const listOption = document.createElement('option');
            listOption.value = list.id;
            listOption.textContent = list.name;
            listSelect.appendChild(listOption);
        }
    });
}

function validateAndAddTask() {
    const titleInput = document.getElementById('task-title');
    const dateInput = document.getElementById('task-date');
    const prioritySelect = document.getElementById('priority');
    const listSelect = document.getElementById('thelist');

    const titleAlert = document.querySelector('.title-alert');
    const dateAlert = document.querySelector('.date-alert');
    const priorityAlert = document.querySelector('.priority-alert');
    const listAlert = document.querySelector('.list-alert');

    let isValid = true;

    if (titleInput.value === '') {
        titleAlert.style.display = 'block';
        isValid = false;
    } else {
        titleAlert.style.display = 'none';
    }

    if (dateInput.value === '') {
        dateAlert.style.display = 'block';
        isValid = false;
    } else {
        dateAlert.style.display = 'none';
    }

    if (prioritySelect.value === '') {
        priorityAlert.style.display = 'block';
        isValid = false;
    } else {
        priorityAlert.style.display = 'none';
    }

    if (listSelect.value === '') {
        listAlert.style.display = 'block';
        isValid = false;
    } else {
        listAlert.style.display = 'none';
    }

    if (isValid) {
        const selectedValue = listSelect.value;
        const description = document.getElementById('description');

        const theTodo = new _app_js__WEBPACK_IMPORTED_MODULE_2__.Todo(titleInput.value, description.value, dateInput.value, prioritySelect.value)
        addTodoToTodoList(selectedValue, theTodo);
        (0,_app_js__WEBPACK_IMPORTED_MODULE_2__.logTodoListsToConsole)()
        closeOverlay()
    }
}

function addTodoToTodoList(selectedValue, newTodo) {
    const originalTodoList = (0,_app_js__WEBPACK_IMPORTED_MODULE_2__.getTodoListById)(selectedValue);

    if (!originalTodoList) {
        console.log("TodoList not found for the selected value.");
        return;
    }

    const updatedTodoList = new _app_js__WEBPACK_IMPORTED_MODULE_2__.TodoList(originalTodoList.name, originalTodoList.id);

    updatedTodoList.todos = [...originalTodoList.todos, newTodo];

    const todoLists = (0,_app_js__WEBPACK_IMPORTED_MODULE_2__.getTodoLists)();
    const updatedTodoLists = todoLists.map(todoList =>
        todoList.id === selectedValue ? updatedTodoList : todoList
    );

    localStorage.setItem('todoLists', JSON.stringify(updatedTodoLists));

    (0,_main__WEBPACK_IMPORTED_MODULE_1__.renderTasks)()
    ;(0,_app_js__WEBPACK_IMPORTED_MODULE_2__.logTodoListsToConsole)();
}

function createDefaultTodoLists() {
    const defaultListsData = [
        { name: "Inbox", id: "000000" },
        { name: "Today", id: "111111" },
        { name: "Upcoming", id: "222222" },
        { name: "All", id: "333333" },
        { name: "Important", id: "444444" }
    ];

    const existingLists = (0,_app_js__WEBPACK_IMPORTED_MODULE_2__.getTodoLists)();
    const missingListsData = defaultListsData.filter(defaultList =>
        !existingLists.some(existingList => existingList.name === defaultList.name)
    );

    const updatedLists = existingLists.concat(missingListsData.map(data => new _app_js__WEBPACK_IMPORTED_MODULE_2__.TodoList(data.name, data.id)));
    (0,_app_js__WEBPACK_IMPORTED_MODULE_2__.saveTodoLists)(updatedLists);

    updateUsedIds(defaultListsData.map(list => list.id));
}

function updateUsedIds(idsToInclude) {
    const usedIds = (0,_app_js__WEBPACK_IMPORTED_MODULE_2__.getUsedIds)();
    const uniqueUsedIds = Array.from(new Set(usedIds.concat(idsToInclude)));
    (0,_app_js__WEBPACK_IMPORTED_MODULE_2__.saveUsedIds)(uniqueUsedIds);
}

function handleScreenWidthChange() {
    const screenWidth = window.innerWidth;
    const sidebar = document.querySelector('.sidebar');
    const main = document.querySelector('.main');

    if (screenWidth <= 768) {
        if (screenWidth <= 300) {
            sidebar.style.width = screenWidth;
        }
        sidebar.style.position = 'fixed';
        sidebar.style.left = '-100%';
        main.style.gridTemplateColumns = '1fr'
        main.style.gridTemplateAreas = '"main-area"'
    } else {
        sidebar.style.left = '0';
        sidebar.style.position = 'relative';
        sidebar.style.width = '';
        main.style.gridTemplateColumns = '300px 1fr'
        main.style.gridTemplateAreas = '"sidebar main-area"'
    }
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

    window.addEventListener('resize', handleScreenWidthChange);

    handleScreenWidthChange();
}




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHdJQUF3SSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcseUJBQXlCO0FBQ3hOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sUUFBUSxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8s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Q0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2TWdIO0FBQ3pEOztBQUV2RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFjO0FBQ3RCLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtELFVBQVUsWUFBWSxLQUFLOztBQUU3RTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IscURBQVk7QUFDbEMsb0JBQW9CLG1EQUFVOztBQUU5QjtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFXO0FBQ25COztBQUVBO0FBQ0EsSUFBSSxzREFBYTs7QUFFakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNFQUFzRSxLQUFLOztBQUUzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLHFEQUFZO0FBQ2xDOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTiw0QkFBNEIsNkNBQVE7QUFDcEMsMEJBQTBCLHFEQUFZO0FBQ3RDO0FBQ0EsUUFBUSxzREFBYTs7QUFFckIsUUFBUSw4REFBcUI7O0FBRTdCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRWU7QUFDZjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLG9EQUFjOztBQUVsQjtBQUNBLElBQUksc0RBQVc7QUFDZjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaGF5QztBQUNMO0FBQ21HOztBQUV2STtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHFEQUFZO0FBQ3RDO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIseUNBQUk7QUFDaEM7QUFDQSxRQUFRLDhEQUFxQjtBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsd0RBQWU7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUFnQyw2Q0FBUTs7QUFFeEM7O0FBRUEsc0JBQXNCLHFEQUFZO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxJQUFJLGtEQUFXO0FBQ2YsSUFBSSwrREFBcUI7QUFDekI7O0FBRUE7QUFDQTtBQUNBLFVBQVUsNkJBQTZCO0FBQ3ZDLFVBQVUsNkJBQTZCO0FBQ3ZDLFVBQVUsZ0NBQWdDO0FBQzFDLFVBQVUsMkJBQTJCO0FBQ3JDLFVBQVU7QUFDVjs7QUFFQSwwQkFBMEIscURBQVk7QUFDdEM7QUFDQTtBQUNBOztBQUVBLCtFQUErRSw2Q0FBUTtBQUN2RixJQUFJLHNEQUFhOztBQUVqQjtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLG1EQUFVO0FBQzlCO0FBQ0EsSUFBSSxvREFBVztBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxJQUFJLG9EQUFpQjs7QUFFckI7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGVzdC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZXN0LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZXN0LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGVzdC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Rlc3QtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGVzdC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Rlc3QtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZXN0LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZXN0LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZXN0LXBhZ2UvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL3Rlc3QtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZXN0LXBhZ2UvLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly90ZXN0LXBhZ2UvLi9zcmMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90ZXN0LXBhZ2UvLi9zcmMvd2VicGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJyaWNvbGFnZStHcm90ZXNxdWU6b3Bzeix3Z2h0QDEwLi40OCwyMDA7MTAuLjQ4LDMwMDsxMC4uNDgsNDAwOzEwLi40OCw1MDA7MTAuLjQ4LDYwMDsxMC4uNDgsNzAwOzEwLi40OCw4MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OiBVYnVudHUsIHNhbnMtc2VyaWY7XG59XG5cbmJvZHkge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5tYWluLWNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDVweCAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgJ25hdmJhcidcbiAgICAgICAgJ21haW4nO1xufVxuXG4ubmF2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ0ZTQxO1xuICAgIGdyaWQtYXJlYTogbmF2YmFyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogI2YxZmFlZTtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAxMDA7XG59XG5cbi5uYXYtaW5uZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmxlZnQtbmF2LFxuLnJpZ2h0LW5hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubG9nbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xuICAgIGdhcDogMC4yNXJlbTtcbiAgICBmb250LWZhbWlseTogMnJlbTtcbiAgICBjb2xvcjogI2YxZmFlZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLm5hdiAuZmEtcGx1cyB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDAuMjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG59XG5cbi5uYXYgLmZhLXBsdXM6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ODg7XG59XG5cbi5uYXYgLmZhLXBsdXM6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xufVxuXG4ubGVmdC1uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZ2FwOiAxLjVyZW07XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xufVxuXG4ubGVmdC1uYXYgLmZhLWhvdXNlIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG59XG5cbi5sZWZ0LW5hdiAuZmEtYmFycyxcbi5mYS1iYXJzLXN0YWdnZXJlZCB7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xufVxuXG4ubmF2IC5mYS1zb2xpZCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zZm9ybTogMC4ycyBlYXNlO1xufVxuXG4ubGVmdC1uYXYgLmZhLXNvbGlkOmhvdmVyIHtcbiAgICBvcGFjaXR5OiA1MCU7XG59XG5cbi5sZWZ0LW5hdiAuZmEtc29saWQ6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xufVxuXG4uY2VudGVyLW5hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2RhdGVJbnB1dCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg4MTU3O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nOiAwLjRyZW0gMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5tYWluIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjg1cHggMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdzaWRlYmFyIG1haW4tYXJlYSc7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2lkZWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xufVxuXG4ubWFpbi1hcmVhIHtcbiAgICBncmlkLWFyZWE6IG1haW4tYXJlYTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ubWVudSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5tZW51IGxpIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAuNnJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ubmF2LWJ1dHRvbnM6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xufVxuXG4ubWVudSBsaSBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tZW51IGxpIGkge1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG59XG5cbi5uYXYtYnV0dG9ucy5hY3RpdmUge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi50b2RheSBpIHtcbiAgICBjb2xvcjogY3JpbXNvbjtcbiAgICBvcGFjaXR5OiA1MCU7XG59XG5cbi5pbmJveCBpIHtcbiAgICBjb2xvcjogZ3JheTtcbn1cblxuLmFsbCBpIHtcbiAgICBvcGFjaXR5OiA3MCU7XG59XG5cbi51cGNvbWluZyBpIHtcbiAgICBjb2xvcjogYmx1ZTtcbiAgICBvcGFjaXR5OiA1MCU7XG59XG5cbi5pbXBvcnRhbnQgaSB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBvcGFjaXR5OiA1MCU7XG59XG5cbi5saXN0cyBpIHtcbiAgICBjb2xvcjogZGFya29yYW5nZTtcbiAgICBvcGFjaXR5OiA2MCU7XG59XG5cbi5tZW51IC5saXN0cyB7XG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG59XG5cbi5saXN0cyAuZmEtY2hldnJvbi11cCB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBwYWRkaW5nLXRvcDogMC4xcmVtO1xufVxuXG4uYWNjb3JkaW9uIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjJzIGVhc2Utb3V0O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWF4LWhlaWdodDogMDtcblxufVxuXG4uY3JlYXRlLW5ldyBpIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAuMjVyZW07XG4gICAgb3BhY2l0eTogNjUlO1xufVxuXG4uYWNjb3JkaW9uIC5jcmVhdGUtbmV3IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbiAgICBwYWRkaW5nLXRvcDogLjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hY2NvcmRpb24gLmNyZWF0ZS1uZXc6aG92ZXIge1xuICAgIGNvbG9yOiAjM2E1YTQwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNSUpO1xufVxuXG4uYWNjb3JkaW9uIC5uZXctbGlzdHMgaSB7XG4gICAgcGFkZGluZy1yaWdodDogLjVyZW07XG4gICAgZm9udC1zaXplOiAuNXJlbTtcbiAgICBvcGFjaXR5OiA1MCU7XG59XG5cbi50aGUtbmV3LWxpc3RzIHtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4udGhlLW5ldy1saXN0cyBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRoZS1uZXctbGlzdHMgLnRyYXNoIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4udGhlLW5ldy1saXN0cyAudHJhc2ggLmZhLXRyYXNoLWNhbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6IGdyZXk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi50aGUtbmV3LWxpc3RzIC50cmFzaCAuZmEtdHJhc2gtY2FuOmhvdmVyIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLm1haW4tY2hpbGQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA5MCU7XG59XG5cbi5tYWluLWFyZWEgLm1haW4tY2hpbGQgLnRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgICBjb2xvcjogIzQ0NDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLm1haW4tYXJlYSAubWFpbi1jaGlsZCAudG9kby1zZWN0aW9uIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIHBhZGRpbmc6IDJyZW0gMHJlbTtcbn1cblxuLm92ZXJsYXksXG4ub3ZlcmxheTIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB6LWluZGV4OiA1MDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wb3B1cCxcbi5wb3B1cDIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucG9wdXAgLmZhLXhtYXJrLFxuLnBvcHVwMiAuZmEteG1hcmsge1xuICAgIHRvcDogMXJlbTtcbiAgICByaWdodDogMXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBjb2xvcjogIzExMTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5wb3B1cCAucG9wdXAtdG9wLFxuLnBvcHVwMiAucG9wdXAtdG9wMiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ucG9wdXAgLnBvcHVwLXRvcCBwIHtcbiAgICBmb250LXNpemU6IDEuNzVyZW07XG59XG5cbi5wb3B1cDIgLnBvcHVwLXRvcDIgcCB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbn1cblxuLnBvcHVwIC5wb3B1cC1taWQsXG4ucG9wdXAyIC5wb3B1cC1taWQge1xuICAgIHBhZGRpbmc6IDByZW0gMS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5wb3B1cCAucG9wdXAtbWlkIHAsXG4ucG9wdXAyIC5wb3B1cC1taWQgcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG59XG5cbi5wb3B1cCAucG9wdXAtbWlkIGlucHV0LFxuLnBvcHVwMiAucG9wdXAtbWlkIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuXG4ucG9wdXAgLnBvcHVwLW1pZCBpbnB1dDpob3Zlcixcbi5wb3B1cDIgLnBvcHVwLW1pZCBpbnB1dDpob3ZlciB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzNhNWE0MDtcbn1cblxuLnBvcHVwIC5wb3B1cC1taWQgaW5wdXQ6Zm9jdXMsXG4ucG9wdXAyIC5wb3B1cC1taWQgaW5wdXQ6Zm9jdXMge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzYTVhNDA7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLnBvcHVwIC5wb3B1cC1ib3QsXG4ucG9wdXAyIC5wb3B1cC1ib3QyIHtcbiAgICBwYWRkaW5nOiAwcmVtIDEuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGdhcDogLjVyZW07XG59XG5cbi5wb3B1cCAucG9wdXAtYm90ICNjbG9zZSxcbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2Nsb3NlIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wb3B1cCAucG9wdXAtYm90ICNjbG9zZTpob3Zlcixcbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2Nsb3NlOmhvdmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4ucG9wdXAgLnBvcHVwLWJvdCAjYWRkaXRpb24sXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0IHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBwYWRkaW5nOiAuNXJlbSAycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg4MTU3O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBvcHVwIC5wb3B1cC1ib3QgI2FkZGl0aW9uOmhvdmVyLFxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdDpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLnBvcHVwIC5wb3B1cC1ib3QgI2FkZGl0aW9uOmFjdGl2ZSxcbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4ucG9wdXAgLmZhLXhtYXJrOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbi5wb3B1cCAuZmEteG1hcms6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4ucG9wdXAgLnBvcHVwLWJvdCAjYWRkaXRpb246aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbi5wb3B1cCAucG9wdXAtYm90ICNhZGRpdGlvbjphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5wb3B1cDIgLnBvcHVwLXRvcDIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgcGFkZGluZzogMS41cmVtO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5wb3B1cDIgLnBvcHVwLXRvcDIgLmZhLXRyaWFuZ2xlLWV4Y2xhbWF0aW9uIHtcbiAgICBmb250LXNpemU6IDQuNXJlbTtcbiAgICBjb2xvcjogcmVkO1xuICAgIG9wYWNpdHk6IDcwJTtcbn1cblxuLnBvcHVwMiAucG9wdXAtYm90MiB7XG4gICAgcGFkZGluZzogMHJlbSAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBnYXA6IC41cmVtO1xufVxuXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0IHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4ODE1NztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4ucG9wdXAyIC5mYS14bWFyazpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuXG4ucG9wdXAyIC5mYS14bWFyazphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4ucG9wdXAyIC5wb3B1cC10b3AyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ucG9wdXAyIC5wb3B1cC10b3AyIC5mYS10cmlhbmdsZS1leGNsYW1hdGlvbiB7XG4gICAgZm9udC1zaXplOiA0LjVyZW07XG4gICAgY29sb3I6IHJlZDtcbiAgICBvcGFjaXR5OiA3MCU7XG59XG5cbi5wb3B1cDIgLnBvcHVwLWJvdDIge1xuICAgIHBhZGRpbmc6IDByZW0gMS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgZ2FwOiAuNXJlbTtcbn1cblxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdCB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgcGFkZGluZzogLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODgxNTc7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0OmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0OmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLnBvcHVwMiAuZmEteG1hcms6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuLnBvcHVwMiAuZmEteG1hcms6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0OmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0OmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLm92ZXJsYXkzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgei1pbmRleDogNTAwO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wb3B1cDMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucG9wdXAzIC5mYS14bWFyayB7XG4gICAgdG9wOiAxcmVtO1xuICAgIHJpZ2h0OiAxcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIGNvbG9yOiAjMTExO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnBvcHVwMyAuZmEteG1hcms6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuLnBvcHVwMyAuZmEteG1hcms6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4ucG9wdXAzIC5wb3B1cC10b3AzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ucG9wdXAzIC5wb3B1cC10b3AzIHAge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4ucG9wdXAzIC5wb3B1cC1taWQzIHtcbiAgICBwYWRkaW5nOiAwcmVtIDEuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4ubWlkLWxlZnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDAuNXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm1pZC1yaWdodCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMC41cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ucG9wdXAzIC5wb3B1cC1taWQzIGxhYmVsIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHBhZGRpbmctdG9wOiAwLjJyZW07XG59XG5cbi5wb3B1cDMgLnBvcHVwLW1pZDMgdGV4dGFyZWEge1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogMC4yNXJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ucG9wdXAzIC5wb3B1cC1taWQzIHRleHRhcmVhOmZvY3VzIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjM2E1YTQwO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5wb3B1cDMgLnBvcHVwLW1pZDMgaW5wdXRbdHlwZT0ndGV4dCddIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuXG4ucG9wdXAzIC5wb3B1cC1taWQzIHNlbGVjdCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHBhZGRpbmc6IDAuMjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnBvcHVwMyAucG9wdXAtbWlkMyAubWlkLXJpZ2h0ICN0YXNrLWRhdGUge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnBvcHVwMyAucG9wdXAtbWlkMyBpbnB1dDpob3ZlciB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzNhNWE0MDtcbn1cblxuLnBvcHVwMyAucG9wdXAtbWlkMyBpbnB1dDpmb2N1cyB7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzNhNWE0MDtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4ucG9wdXAzIC5wb3B1cC1ib3QzIHtcbiAgICBwYWRkaW5nOiAwcmVtIDEuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGdhcDogLjVyZW07XG59XG5cbi5wb3B1cDMgLnBvcHVwLWJvdDMgI2Nsb3NlIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wb3B1cDMgLnBvcHVwLWJvdDMgI2Nsb3NlOmhvdmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4ucG9wdXAzIC5wb3B1cC1ib3QzICNhZGR0YXNrIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBwYWRkaW5nOiAuNXJlbSAycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg4MTU3O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBvcHVwMyAucG9wdXAtYm90MyAjYWRkdGFzazpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLnBvcHVwMyAucG9wdXAtYm90MyAjYWRkdGFzazphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi50YXNrLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5lYWNoLXRhc2stc2VjdGlvbi10b3Age1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhc2stbGVmdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gICAgZ2FwOiAuNXJlbTtcbn1cblxuLnRhc2stbGVmdCAjdGFza3RpdGxlIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgbWF4LXdpZHRoOiAzMHZ3O1xufVxuXG4udGFzay1yaWdodCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDFyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogZ3JheTtcbn1cblxuLnRhc2stcmlnaHQgLnRhc2staWNvbnMge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhc2stcmlnaHQgLnRhc2staWNvbnM6aG92ZXIge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG59XG5cbi50YXNrLXJpZ2h0IC50YXNrLWljb25zOmFjdGl2ZSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG59XG5cbi5lYWNoLXRhc2stc2VjdGlvbi1ib3Qge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAtLjc1cmVtO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogOTklO1xuICAgIG1pbi13aWR0aDogMjAwcHg7XG59XG5cbi5lYWNoLXRhc2stc2VjdGlvbi1ib3QgcCB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmJvdC1yaWdodCxcbi5ib3QtbGVmdCB7XG4gICAgd2lkdGg6IDQ5JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucmlnaHQtdG9wLFxuLnJpZ2h0LWJvdCxcbi5sZWZ0LXRvcCxcbi5sZWZ0LWJvdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IC43NXJlbTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5yaWdodC10b3AsXG4ubGVmdC10b3Age1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmVhY2gtdGFzay1zZWN0aW9uLWJvdCBwLmJvbGRlbiB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnJpZ2h0LXRvcCAjbG9uZyxcbi5sZWZ0LXRvcCAjbG9uZyB7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5wb3B1cCB7XG4gICAgICAgIG1heC13aWR0aDogOTAlO1xuICAgIH1cblxuICAgICNkYXRlSW5wdXQge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5wb3B1cDIge1xuICAgICAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICB9XG5cbiAgICAucG9wdXAzIHtcbiAgICAgICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMzAwcHgpIHtcbiAgICAubWFpbi1hcmVhIC5tYWluLWNoaWxkIC50b2RvLXNlY3Rpb24ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAubWFpbi1hcmVhIC5tYWluLWNoaWxkIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLm1haW4tYXJlYSAubWFpbi1jaGlsZCAudGl0bGUge1xuICAgICAgICBwYWRkaW5nLXRvcDogMHJlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcmVtO1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgLm1haW4tYXJlYSAubWFpbi1jaGlsZCAudG9kby1zZWN0aW9uIHtcbiAgICAgICAgd2lkdGg6IDk1JTtcbiAgICB9XG5cbiAgICAubWFpbi1hcmVhIC5tYWluLWNoaWxkIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLm1haW4tYXJlYSAubWFpbi1jaGlsZCAudGl0bGUge1xuICAgICAgICBwYWRkaW5nLXRvcDogMHJlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcmVtO1xuICAgIH1cblxuICAgIC5zaWRlYmFyIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBsZWZ0OiAtMTAwJTtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5zaWRlYmFyIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBsZWZ0OiAtMTAwJTtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgIH1cblxuICAgIC5tYWluIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICcgbWFpbi1hcmVhJztcbiAgICB9XG5cbiAgICAubmF2LWlubmVyIHtcbiAgICAgICAgd2lkdGg6IDk1JTtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7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VztJQUNmOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLFdBQVc7SUFDZjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsV0FBVztRQUNYLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSwwQkFBMEI7UUFDMUIsaUNBQWlDO0lBQ3JDOztJQUVBO1FBQ0ksVUFBVTtJQUNkO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QnJpY29sYWdlK0dyb3Rlc3F1ZTpvcHN6LHdnaHRAMTAuLjQ4LDIwMDsxMC4uNDgsMzAwOzEwLi40OCw0MDA7MTAuLjQ4LDUwMDsxMC4uNDgsNjAwOzEwLi40OCw3MDA7MTAuLjQ4LDgwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogVWJ1bnR1LCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0NXB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgICduYXZiYXInXFxuICAgICAgICAnbWFpbic7XFxufVxcblxcbi5uYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ0ZTQxO1xcbiAgICBncmlkLWFyZWE6IG5hdmJhcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjb2xvcjogI2YxZmFlZTtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi5uYXYtaW5uZXIge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5sZWZ0LW5hdixcXG4ucmlnaHQtbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xcbiAgICBnYXA6IDAuMjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAycmVtO1xcbiAgICBjb2xvcjogI2YxZmFlZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5uYXYgLmZhLXBsdXMge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xcbn1cXG5cXG4ubmF2IC5mYS1wbHVzOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg4ODtcXG59XFxuXFxuLm5hdiAuZmEtcGx1czphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbn1cXG5cXG4ubGVmdC1uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdhcDogMS41cmVtO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xcbn1cXG5cXG4ubGVmdC1uYXYgLmZhLWhvdXNlIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcXG59XFxuXFxuLmxlZnQtbmF2IC5mYS1iYXJzLFxcbi5mYS1iYXJzLXN0YWdnZXJlZCB7XFxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcXG59XFxuXFxuLm5hdiAuZmEtc29saWQge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogMC4ycyBlYXNlO1xcbn1cXG5cXG4ubGVmdC1uYXYgLmZhLXNvbGlkOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogNTAlO1xcbn1cXG5cXG4ubGVmdC1uYXYgLmZhLXNvbGlkOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxufVxcblxcbi5jZW50ZXItbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2RhdGVJbnB1dCB7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg4MTU3O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI4NXB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ3NpZGViYXIgbWFpbi1hcmVhJztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcXG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbGVmdDogMDtcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xcbn1cXG5cXG4ubWFpbi1hcmVhIHtcXG4gICAgZ3JpZC1hcmVhOiBtYWluLWFyZWE7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubWVudSBsaSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogLjZyZW07XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLm5hdi1idXR0b25zOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3NSk7XFxufVxcblxcbi5tZW51IGxpIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUgbGkgaSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxufVxcblxcbi5uYXYtYnV0dG9ucy5hY3RpdmUge1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4udG9kYXkgaSB7XFxuICAgIGNvbG9yOiBjcmltc29uO1xcbiAgICBvcGFjaXR5OiA1MCU7XFxufVxcblxcbi5pbmJveCBpIHtcXG4gICAgY29sb3I6IGdyYXk7XFxufVxcblxcbi5hbGwgaSB7XFxuICAgIG9wYWNpdHk6IDcwJTtcXG59XFxuXFxuLnVwY29taW5nIGkge1xcbiAgICBjb2xvcjogYmx1ZTtcXG4gICAgb3BhY2l0eTogNTAlO1xcbn1cXG5cXG4uaW1wb3J0YW50IGkge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBvcGFjaXR5OiA1MCU7XFxufVxcblxcbi5saXN0cyBpIHtcXG4gICAgY29sb3I6IGRhcmtvcmFuZ2U7XFxuICAgIG9wYWNpdHk6IDYwJTtcXG59XFxuXFxuLm1lbnUgLmxpc3RzIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XFxufVxcblxcbi5saXN0cyAuZmEtY2hldnJvbi11cCB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMC4xcmVtO1xcbn1cXG5cXG4uYWNjb3JkaW9uIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAyLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjJzIGVhc2Utb3V0O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBtYXgtaGVpZ2h0OiAwO1xcblxcbn1cXG5cXG4uY3JlYXRlLW5ldyBpIHtcXG4gICAgcGFkZGluZy1yaWdodDogLjI1cmVtO1xcbiAgICBvcGFjaXR5OiA2NSU7XFxufVxcblxcbi5hY2NvcmRpb24gLmNyZWF0ZS1uZXcge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcXG4gICAgcGFkZGluZy10b3A6IC41cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYWNjb3JkaW9uIC5jcmVhdGUtbmV3OmhvdmVyIHtcXG4gICAgY29sb3I6ICMzYTVhNDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNSUpO1xcbn1cXG5cXG4uYWNjb3JkaW9uIC5uZXctbGlzdHMgaSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IC41cmVtO1xcbiAgICBmb250LXNpemU6IC41cmVtO1xcbiAgICBvcGFjaXR5OiA1MCU7XFxufVxcblxcbi50aGUtbmV3LWxpc3RzIHtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50aGUtbmV3LWxpc3RzIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50aGUtbmV3LWxpc3RzIC50cmFzaCB7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi50aGUtbmV3LWxpc3RzIC50cmFzaCAuZmEtdHJhc2gtY2FuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogZ3JleTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50aGUtbmV3LWxpc3RzIC50cmFzaCAuZmEtdHJhc2gtY2FuOmhvdmVyIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4ubWFpbi1jaGlsZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcblxcbi5tYWluLWFyZWEgLm1haW4tY2hpbGQgLnRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgICBjb2xvcjogIzQ0NDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5tYWluLWFyZWEgLm1haW4tY2hpbGQgLnRvZG8tc2VjdGlvbiB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIHBhZGRpbmc6IDJyZW0gMHJlbTtcXG59XFxuXFxuLm92ZXJsYXksXFxuLm92ZXJsYXkyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDUwMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ucG9wdXAsXFxuLnBvcHVwMiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLnBvcHVwIC5mYS14bWFyayxcXG4ucG9wdXAyIC5mYS14bWFyayB7XFxuICAgIHRvcDogMXJlbTtcXG4gICAgcmlnaHQ6IDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICAgIGNvbG9yOiAjMTExO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5wb3B1cCAucG9wdXAtdG9wLFxcbi5wb3B1cDIgLnBvcHVwLXRvcDIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLnBvcHVwIC5wb3B1cC10b3AgcCB7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG59XFxuXFxuLnBvcHVwMiAucG9wdXAtdG9wMiBwIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbn1cXG5cXG4ucG9wdXAgLnBvcHVwLW1pZCxcXG4ucG9wdXAyIC5wb3B1cC1taWQge1xcbiAgICBwYWRkaW5nOiAwcmVtIDEuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnBvcHVwIC5wb3B1cC1taWQgcCxcXG4ucG9wdXAyIC5wb3B1cC1taWQgcCB7XFxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xcbn1cXG5cXG4ucG9wdXAgLnBvcHVwLW1pZCBpbnB1dCxcXG4ucG9wdXAyIC5wb3B1cC1taWQgaW5wdXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxufVxcblxcbi5wb3B1cCAucG9wdXAtbWlkIGlucHV0OmhvdmVyLFxcbi5wb3B1cDIgLnBvcHVwLW1pZCBpbnB1dDpob3ZlciB7XFxuICAgIGJvcmRlcjogc29saWQgMXB4ICMzYTVhNDA7XFxufVxcblxcbi5wb3B1cCAucG9wdXAtbWlkIGlucHV0OmZvY3VzLFxcbi5wb3B1cDIgLnBvcHVwLW1pZCBpbnB1dDpmb2N1cyB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzYTVhNDA7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5wb3B1cCAucG9wdXAtYm90LFxcbi5wb3B1cDIgLnBvcHVwLWJvdDIge1xcbiAgICBwYWRkaW5nOiAwcmVtIDEuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgZ2FwOiAuNXJlbTtcXG59XFxuXFxuLnBvcHVwIC5wb3B1cC1ib3QgI2Nsb3NlLFxcbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2Nsb3NlIHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBvcHVwIC5wb3B1cC1ib3QgI2Nsb3NlOmhvdmVyLFxcbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2Nsb3NlOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4ucG9wdXAgLnBvcHVwLWJvdCAjYWRkaXRpb24sXFxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdCB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBwYWRkaW5nOiAuNXJlbSAycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODgxNTc7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBvcHVwIC5wb3B1cC1ib3QgI2FkZGl0aW9uOmhvdmVyLFxcbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4ucG9wdXAgLnBvcHVwLWJvdCAjYWRkaXRpb246YWN0aXZlLFxcbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLnBvcHVwIC5mYS14bWFyazpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLnBvcHVwIC5mYS14bWFyazphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4ucG9wdXAgLnBvcHVwLWJvdCAjYWRkaXRpb246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4ucG9wdXAgLnBvcHVwLWJvdCAjYWRkaXRpb246YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLnBvcHVwMiAucG9wdXAtdG9wMiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi5wb3B1cDIgLnBvcHVwLXRvcDIgLmZhLXRyaWFuZ2xlLWV4Y2xhbWF0aW9uIHtcXG4gICAgZm9udC1zaXplOiA0LjVyZW07XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIG9wYWNpdHk6IDcwJTtcXG59XFxuXFxuLnBvcHVwMiAucG9wdXAtYm90MiB7XFxuICAgIHBhZGRpbmc6IDByZW0gMS41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBnYXA6IC41cmVtO1xcbn1cXG5cXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0IHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODgxNTc7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdDpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLnBvcHVwMiAuZmEteG1hcms6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5wb3B1cDIgLmZhLXhtYXJrOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0OmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5wb3B1cDIgLnBvcHVwLXRvcDIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4ucG9wdXAyIC5wb3B1cC10b3AyIC5mYS10cmlhbmdsZS1leGNsYW1hdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogNC41cmVtO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBvcGFjaXR5OiA3MCU7XFxufVxcblxcbi5wb3B1cDIgLnBvcHVwLWJvdDIge1xcbiAgICBwYWRkaW5nOiAwcmVtIDEuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgZ2FwOiAuNXJlbTtcXG59XFxuXFxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdCB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg4MTU3O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0OmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5wb3B1cDIgLmZhLXhtYXJrOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4ucG9wdXAyIC5mYS14bWFyazphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0OmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdDphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4ub3ZlcmxheTMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgei1pbmRleDogNTAwO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnBvcHVwMyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLnBvcHVwMyAuZmEteG1hcmsge1xcbiAgICB0b3A6IDFyZW07XFxuICAgIHJpZ2h0OiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgICBjb2xvcjogIzExMTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ucG9wdXAzIC5mYS14bWFyazpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLnBvcHVwMyAuZmEteG1hcms6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLnBvcHVwMyAucG9wdXAtdG9wMyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLnBvcHVwMyAucG9wdXAtdG9wMyBwIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5wb3B1cDMgLnBvcHVwLW1pZDMge1xcbiAgICBwYWRkaW5nOiAwcmVtIDEuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5taWQtbGVmdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1pZC1yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnBvcHVwMyAucG9wdXAtbWlkMyBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBwYWRkaW5nLXRvcDogMC4ycmVtO1xcbn1cXG5cXG4ucG9wdXAzIC5wb3B1cC1taWQzIHRleHRhcmVhIHtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHBhZGRpbmc6IDAuMjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4ucG9wdXAzIC5wb3B1cC1taWQzIHRleHRhcmVhOmZvY3VzIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzNhNWE0MDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnBvcHVwMyAucG9wdXAtbWlkMyBpbnB1dFt0eXBlPSd0ZXh0J10ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC4ycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG59XFxuXFxuLnBvcHVwMyAucG9wdXAtbWlkMyBzZWxlY3Qge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDAuMjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLnBvcHVwMyAucG9wdXAtbWlkMyAubWlkLXJpZ2h0ICN0YXNrLWRhdGUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDAuMjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnBvcHVwMyAucG9wdXAtbWlkMyBpbnB1dDpob3ZlciB7XFxuICAgIGJvcmRlcjogc29saWQgMXB4ICMzYTVhNDA7XFxufVxcblxcbi5wb3B1cDMgLnBvcHVwLW1pZDMgaW5wdXQ6Zm9jdXMge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjM2E1YTQwO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ucG9wdXAzIC5wb3B1cC1ib3QzIHtcXG4gICAgcGFkZGluZzogMHJlbSAxLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGdhcDogLjVyZW07XFxufVxcblxcbi5wb3B1cDMgLnBvcHVwLWJvdDMgI2Nsb3NlIHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBvcHVwMyAucG9wdXAtYm90MyAjY2xvc2U6aG92ZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5wb3B1cDMgLnBvcHVwLWJvdDMgI2FkZHRhc2sge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgcGFkZGluZzogLjVyZW0gMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg4MTU3O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wb3B1cDMgLnBvcHVwLWJvdDMgI2FkZHRhc2s6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4ucG9wdXAzIC5wb3B1cC1ib3QzICNhZGR0YXNrOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZWFjaC10YXNrLXNlY3Rpb24tdG9wIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWxlZnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgICBnYXA6IC41cmVtO1xcbn1cXG5cXG4udGFzay1sZWZ0ICN0YXNrdGl0bGUge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgbWF4LXdpZHRoOiAzMHZ3O1xcbn1cXG5cXG4udGFzay1yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IGdyYXk7XFxufVxcblxcbi50YXNrLXJpZ2h0IC50YXNrLWljb25zIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1yaWdodCAudGFzay1pY29uczpob3ZlciB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xcbn1cXG5cXG4udGFzay1yaWdodCAudGFzay1pY29uczphY3RpdmUge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XFxufVxcblxcbi5lYWNoLXRhc2stc2VjdGlvbi1ib3Qge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAtLjc1cmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiA5OSU7XFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxufVxcblxcbi5lYWNoLXRhc2stc2VjdGlvbi1ib3QgcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbi5ib3QtcmlnaHQsXFxuLmJvdC1sZWZ0IHtcXG4gICAgd2lkdGg6IDQ5JTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ucmlnaHQtdG9wLFxcbi5yaWdodC1ib3QsXFxuLmxlZnQtdG9wLFxcbi5sZWZ0LWJvdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogLjc1cmVtO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5yaWdodC10b3AsXFxuLmxlZnQtdG9wIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZWFjaC10YXNrLXNlY3Rpb24tYm90IHAuYm9sZGVuIHtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnJpZ2h0LXRvcCAjbG9uZyxcXG4ubGVmdC10b3AgI2xvbmcge1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAucG9wdXAge1xcbiAgICAgICAgbWF4LXdpZHRoOiA5MCU7XFxuICAgIH1cXG5cXG4gICAgI2RhdGVJbnB1dCB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5wb3B1cDIge1xcbiAgICAgICAgbWF4LXdpZHRoOiA5MCU7XFxuICAgIH1cXG5cXG4gICAgLnBvcHVwMyB7XFxuICAgICAgICBtYXgtd2lkdGg6IDkwJTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMzAwcHgpIHtcXG4gICAgLm1haW4tYXJlYSAubWFpbi1jaGlsZCAudG9kby1zZWN0aW9uIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC5tYWluLWFyZWEgLm1haW4tY2hpbGQge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgLm1haW4tYXJlYSAubWFpbi1jaGlsZCAudGl0bGUge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDByZW07XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDByZW07XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAgIC5tYWluLWFyZWEgLm1haW4tY2hpbGQgLnRvZG8tc2VjdGlvbiB7XFxuICAgICAgICB3aWR0aDogOTUlO1xcbiAgICB9XFxuXFxuICAgIC5tYWluLWFyZWEgLm1haW4tY2hpbGQge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgLm1haW4tYXJlYSAubWFpbi1jaGlsZCAudGl0bGUge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDByZW07XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDByZW07XFxuICAgIH1cXG5cXG4gICAgLnNpZGViYXIge1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgbGVmdDogLTEwMCU7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgIC5zaWRlYmFyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIGxlZnQ6IC0xMDAlO1xcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xcbiAgICB9XFxuXFxuICAgIC5tYWluIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJyBtYWluLWFyZWEnO1xcbiAgICB9XFxuXFxuICAgIC5uYXYtaW5uZXIge1xcbiAgICAgICAgd2lkdGg6IDk1JTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy5pZCA9IHVuaXF1ZUlkKCk7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVG9kb0xpc3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGlkID0gbnVsbCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmlkID0gaWQgfHwgdW5pcXVlSWQoKTtcbiAgICAgICAgdGhpcy50b2RvcyA9IFtdO1xuICAgIH1cblxuICAgIGFkZFRvZG8odG9kbykge1xuICAgICAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbUlkKCkge1xuICAgIGxldCBpZCA9ICcnO1xuICAgIGNvbnN0IGRpZ2l0cyA9ICcwMTIzNDU2Nzg5JztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGlnaXRzLmxlbmd0aCk7XG4gICAgICAgIGlkICs9IGRpZ2l0c1tyYW5kb21JbmRleF07XG4gICAgfVxuXG4gICAgcmV0dXJuIGlkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pcXVlSWQoKSB7XG4gICAgY29uc3QgdXNlZElkcyA9IGdldFVzZWRJZHMoKTtcblxuICAgIGlmICh1c2VkSWRzLmxlbmd0aCA+PSAxMDAwMDAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFsbCBwb3NzaWJsZSBJRHMgaGF2ZSBiZWVuIHVzZWQuXCIpO1xuICAgIH1cblxuICAgIGxldCBuZXdJZDtcbiAgICBkbyB7XG4gICAgICAgIG5ld0lkID0gZ2VuZXJhdGVSYW5kb21JZCgpO1xuICAgIH0gd2hpbGUgKHVzZWRJZHMuaW5jbHVkZXMobmV3SWQpKTtcblxuICAgIHVzZWRJZHMucHVzaChuZXdJZCk7XG4gICAgc2F2ZVVzZWRJZHModXNlZElkcyk7XG4gICAgY29uc29sZS5sb2codXNlZElkcyk7XG4gICAgcmV0dXJuIG5ld0lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlZElkcygpIHtcbiAgICBjb25zdCB1c2VkSWRzSlNPTiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VkSWRzJyk7XG4gICAgcmV0dXJuIHVzZWRJZHNKU09OID8gSlNPTi5wYXJzZSh1c2VkSWRzSlNPTikgOiBbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVVc2VkSWRzKHVzZWRJZHMpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlZElkcycsIEpTT04uc3RyaW5naWZ5KHVzZWRJZHMpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvZG9MaXN0cygpIHtcbiAgICBjb25zdCB0b2RvTGlzdHNKU09OID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9MaXN0cycpO1xuICAgIHJldHVybiB0b2RvTGlzdHNKU09OID8gSlNPTi5wYXJzZSh0b2RvTGlzdHNKU09OKSA6IFtdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9kb0xpc3RCeUlkKGlkKSB7XG4gICAgY29uc3QgdG9kb0xpc3RzID0gZ2V0VG9kb0xpc3RzKCk7XG4gICAgcmV0dXJuIHRvZG9MaXN0cy5maW5kKHRvZG9MaXN0ID0+IHRvZG9MaXN0LmlkID09PSBpZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlVG9kb0xpc3RzKHRvZG9MaXN0cykge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvTGlzdHMnLCBKU09OLnN0cmluZ2lmeSh0b2RvTGlzdHMpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ1RvZG9MaXN0c1RvQ29uc29sZSgpIHtcbiAgICBjb25zdCB0b2RvTGlzdHMgPSBnZXRUb2RvTGlzdHMoKTtcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0b2RvTGlzdHMsIG51bGwsIDIpKTtcbn0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBjcmVhdGVXZWJwYWdlIGZyb20gJy4vd2VicGFnZSc7XG5cbmNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuY3JlYXRlV2VicGFnZSgpXG5cbiIsImltcG9ydCB7IFRvZG9MaXN0LCBUb2RvLCBzYXZlVG9kb0xpc3RzLCBnZXRUb2RvTGlzdHMsIGdldFRvZG9MaXN0QnlJZCB9IGZyb20gXCIuL2FwcFwiO1xuXG5mdW5jdGlvbiBjcmVhdGVNYWluKGlkKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbi1hcmVhJyk7XG5cbiAgICBjb25zdCBtYWluQ2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluQ2hpbGQuY2xhc3NMaXN0LmFkZCgnbWFpbi1jaGlsZCcpO1xuXG4gICAgY29uc3QgdG9kb0xpc3QgPSBnZXRUb2RvTGlzdEJ5SWQoaWQpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaDEuY2xhc3NMaXN0LmFkZCgndG9kby10aXRsZScpO1xuICAgIGgxLnRleHRDb250ZW50ID0gdG9kb0xpc3QubmFtZTtcblxuICAgIHRpdGxlLmFwcGVuZENoaWxkKGgxKTtcblxuICAgIGNvbnN0IHRvZG9TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgndG9kby1zZWN0aW9uJyk7XG5cbiAgICBtYWluQ2hpbGQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIG1haW5DaGlsZC5hcHBlbmRDaGlsZCh0b2RvU2VjdGlvbik7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5DaGlsZCk7XG5cbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChtYWluKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRhc2tzKCkge1xuICAgIGNvbnN0IG5hdkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWJ1dHRvbnMnKTtcbiAgICBsZXQgYWN0aXZlTmF2QnV0dG9uID0gbnVsbDtcblxuICAgIGZvciAoY29uc3QgYnV0dG9uIG9mIG5hdkJ1dHRvbnMpIHtcbiAgICAgICAgaWYgKGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICBhY3RpdmVOYXZCdXR0b24gPSBidXR0b247XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRhdGFMaXN0SWQgPSBhY3RpdmVOYXZCdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWxpc3QtaWQnKTtcblxuICAgIGNvbnN0IHRvZG9MaXN0ID0gZ2V0VG9kb0xpc3RCeUlkKGRhdGFMaXN0SWQpO1xuICAgIGlmICghdG9kb0xpc3QpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignVG9kbyBsaXN0IG5vdCBmb3VuZCcpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9kb0xpc3QudG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgY3JlYXRlVGFzayh0b2RvLnRpdGxlLCB0b2RvLmR1ZURhdGUsIHRvZG8uZGVzY3JpcHRpb24sIHRvZG8ucHJpb3JpdHkpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlYWNoLXRhc2stc2VjdGlvbi10b3AnKTtcbiAgICBmb3IgKGNvbnN0IHRhc2sgb2YgdGFza3MpIHtcbiAgICAgICAgdGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tQYXJlbnQgPSB0YXNrLnBhcmVudE5vZGU7XG4gICAgICAgICAgICBjb25zdCB0YXNrYm90ID0gdGFza1BhcmVudC5xdWVyeVNlbGVjdG9yKCcuZWFjaC10YXNrLXNlY3Rpb24tYm90Jyk7XG4gICAgICAgICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0YXNrYm90KTtcbiAgICAgICAgICAgIGlmIChjb21wdXRlZFN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgICAgICAgIHRhc2tib3Quc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tcHV0ZWRTdHlsZS5kaXNwbGF5ID09PSAnZmxleCcpIHtcbiAgICAgICAgICAgICAgICB0YXNrYm90LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKHRhc2tUaXRsZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5KSB7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLXNlY3Rpb24nKVxuXG4gICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0Rpdi5jbGFzc05hbWUgPSBcInRhc2stY29udGFpbmVyXCI7XG5cbiAgICBjb25zdCB0YXNrU2VjdGlvblRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza1NlY3Rpb25Ub3AuY2xhc3NOYW1lID0gXCJlYWNoLXRhc2stc2VjdGlvbi10b3BcIjtcblxuXG4gICAgY29uc3QgdGFza0xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tMZWZ0LmNsYXNzTmFtZSA9IFwidGFzay1sZWZ0XCI7XG5cbiAgICBjb25zdCB0YXNrQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGFza0NoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgdGFza0NoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTsgXG4gICAgfSlcbiAgICB0YXNrTGVmdC5hcHBlbmRDaGlsZCh0YXNrQ2hlY2tib3gpO1xuXG4gICAgY29uc3QgdGFza1RpdGxlUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRhc2tUaXRsZVAuaWQgPSBcInRhc2t0aXRsZVwiO1xuICAgIHRhc2tUaXRsZVAudGV4dENvbnRlbnQgPSB0YXNrVGl0bGU7XG4gICAgdGFza0xlZnQuYXBwZW5kQ2hpbGQodGFza1RpdGxlUCk7XG5cbiAgICB0YXNrU2VjdGlvblRvcC5hcHBlbmRDaGlsZCh0YXNrTGVmdCk7XG5cbiAgICBjb25zdCB0YXNrUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tSaWdodC5jbGFzc05hbWUgPSBcInRhc2stcmlnaHRcIjtcblxuICAgIGNvbnN0IGVkaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgZWRpdEljb24uY2xhc3NOYW1lID0gXCJmYS1yZWd1bGFyIGZhLXBlbi10by1zcXVhcmUgdGFzay1pY29uc1wiO1xuICAgIGVkaXRJY29uLnRpdGxlID0gXCJFZGl0IHRhc2tcIjtcbiAgICB0YXNrUmlnaHQuYXBwZW5kQ2hpbGQoZWRpdEljb24pO1xuXG4gICAgY29uc3QgcHJpb3JpdHlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgcHJpb3JpdHlJY29uLmNsYXNzTmFtZSA9IFwiZmEtc29saWQgZmEtZmxhZyB0YXNrLWljb25zXCI7XG4gICAgcHJpb3JpdHlJY29uLnRpdGxlID0gXCJDaGFuZ2UgcHJpb3JpdHlcIjtcbiAgICB0YXNrUmlnaHQuYXBwZW5kQ2hpbGQocHJpb3JpdHlJY29uKTtcblxuICAgIGNvbnN0IG1vdmVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgbW92ZUljb24uY2xhc3NOYW1lID0gXCJmYS1yZWd1bGFyIGZhLXNxdWFyZS1jYXJldC11cCB0YXNrLWljb25zXCI7XG4gICAgbW92ZUljb24udGl0bGUgPSBcIk1vdmUgbGlzdFwiO1xuICAgIHRhc2tSaWdodC5hcHBlbmRDaGlsZChtb3ZlSWNvbik7XG5cbiAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgZGVsZXRlSWNvbi5jbGFzc05hbWUgPSBcImZhLXNvbGlkIGZhLXRyYXNoLWNhbiB0YXNrLWljb25zXCI7XG4gICAgZGVsZXRlSWNvbi50aXRsZSA9IFwiRGVsZXRlIHRhc2tcIjtcbiAgICB0YXNrUmlnaHQuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XG5cbiAgICB0YXNrU2VjdGlvblRvcC5hcHBlbmRDaGlsZCh0YXNrUmlnaHQpO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza1NlY3Rpb25Ub3ApO1xuXG4gICAgY29uc3QgdGFza1NlY3Rpb25Cb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tTZWN0aW9uQm90LmNsYXNzTmFtZSA9IFwiZWFjaC10YXNrLXNlY3Rpb24tYm90XCI7XG5cbiAgICBjb25zdCBib3RMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBib3RMZWZ0LmNsYXNzTmFtZSA9IFwiYm90LWxlZnRcIjtcblxuICAgIGNvbnN0IGxlZnRUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxlZnRUb3AuY2xhc3NOYW1lID0gXCJsZWZ0LXRvcFwiO1xuXG4gICAgY29uc3QgdGl0bGVCb2xkZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0aXRsZUJvbGRlbi5jbGFzc05hbWUgPSBcImJvbGRlblwiO1xuICAgIHRpdGxlQm9sZGVuLnRleHRDb250ZW50ID0gXCJUaXRsZTpcIjtcbiAgICBsZWZ0VG9wLmFwcGVuZENoaWxkKHRpdGxlQm9sZGVuKTtcblxuICAgIGNvbnN0IHRpdGxlUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRpdGxlUC50ZXh0Q29udGVudCA9IHRhc2tUaXRsZTtcbiAgICB0aXRsZVAuc2V0QXR0cmlidXRlKCdpZCcsJ2xvbmcnKVxuICAgIGxlZnRUb3AuYXBwZW5kQ2hpbGQodGl0bGVQKTtcblxuICAgIGJvdExlZnQuYXBwZW5kQ2hpbGQobGVmdFRvcCk7XG5cbiAgICBjb25zdCBsZWZ0Qm90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZWZ0Qm90LmNsYXNzTmFtZSA9IFwibGVmdC1ib3RcIjtcblxuICAgIGNvbnN0IGR1ZURhdGVCb2xkZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkdWVEYXRlQm9sZGVuLmNsYXNzTmFtZSA9IFwiYm9sZGVuXCI7XG4gICAgZHVlRGF0ZUJvbGRlbi50ZXh0Q29udGVudCA9IFwiRHVlIGRhdGU6XCI7XG4gICAgbGVmdEJvdC5hcHBlbmRDaGlsZChkdWVEYXRlQm9sZGVuKTtcblxuICAgIGNvbnN0IGR1ZURhdGVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZHVlRGF0ZVAudGV4dENvbnRlbnQgPSBkdWVEYXRlO1xuICAgIGxlZnRCb3QuYXBwZW5kQ2hpbGQoZHVlRGF0ZVApO1xuXG4gICAgYm90TGVmdC5hcHBlbmRDaGlsZChsZWZ0Qm90KTtcbiAgICB0YXNrU2VjdGlvbkJvdC5hcHBlbmRDaGlsZChib3RMZWZ0KTtcblxuICAgIGNvbnN0IGJvdFJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBib3RSaWdodC5jbGFzc05hbWUgPSBcImJvdC1yaWdodFwiO1xuXG4gICAgY29uc3QgcmlnaHRUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJpZ2h0VG9wLmNsYXNzTmFtZSA9IFwicmlnaHQtdG9wXCI7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbkJvbGRlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NyaXB0aW9uQm9sZGVuLmNsYXNzTmFtZSA9IFwiYm9sZGVuXCI7XG4gICAgZGVzY3JpcHRpb25Cb2xkZW4udGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOlwiO1xuICAgIHJpZ2h0VG9wLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uQm9sZGVuKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NyaXB0aW9uUC50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuICAgIGRlc2NyaXB0aW9uUC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvbmcnKVxuICAgIHJpZ2h0VG9wLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uUCk7XG5cbiAgICBib3RSaWdodC5hcHBlbmRDaGlsZChyaWdodFRvcCk7XG5cbiAgICBjb25zdCByaWdodEJvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmlnaHRCb3QuY2xhc3NOYW1lID0gXCJyaWdodC1ib3RcIjtcblxuICAgIGNvbnN0IHByaW9yaXR5Qm9sZGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJpb3JpdHlCb2xkZW4uY2xhc3NOYW1lID0gXCJib2xkZW5cIjtcbiAgICBwcmlvcml0eUJvbGRlbi50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6XCI7XG4gICAgcmlnaHRCb3QuYXBwZW5kQ2hpbGQocHJpb3JpdHlCb2xkZW4pO1xuXG4gICAgY29uc3QgcHJpb3JpdHlQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJpb3JpdHlQLnRleHRDb250ZW50ID0gcHJpb3JpdHk7XG4gICAgcmlnaHRCb3QuYXBwZW5kQ2hpbGQocHJpb3JpdHlQKTtcblxuICAgIGJvdFJpZ2h0LmFwcGVuZENoaWxkKHJpZ2h0Qm90KTtcbiAgICB0YXNrU2VjdGlvbkJvdC5hcHBlbmRDaGlsZChib3RSaWdodCk7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrU2VjdGlvbkJvdCk7XG5cbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEaXYpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0aWFsaXNlTWFpbihpZCkge1xuICAgIGNyZWF0ZU1haW4oaWQpO1xufSIsImltcG9ydCB7IFRvZG9MaXN0LCBnZXRUb2RvTGlzdHMsIHNhdmVUb2RvTGlzdHMsIGxvZ1RvZG9MaXN0c1RvQ29uc29sZSwgZ2V0VXNlZElkcywgc2F2ZVVzZWRJZHMgfSBmcm9tIFwiLi9hcHAuanNcIlxuaW1wb3J0IGluaXRpYWxpc2VNYWluLCB7IHJlbmRlclRhc2tzIH0gZnJvbSBcIi4vbWFpbi5qc1wiXG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGViYXIoKSB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xuXG4gICAgY29uc3Qgc2lkZWJhck1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlYmFyTWVudS5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLW1lbnUnKTtcblxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuXG4gICAgY29uc3QgaW5ib3ggPSBjcmVhdGVTaWRlYmFySXRlbSgnaW5ib3gnLCAnZmEtaW5ib3gnLCAnSW5ib3gnKTtcbiAgICBpbmJveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1pZCcsICcwMDAwMDAnKVxuICAgIGluYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgICAgIHNldEFjdGl2ZUJ1dHRvbihpbmJveCk7XG4gICAgICAgIGluaXRpYWxpc2VNYWluKGluYm94LmdldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJykpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdG9kYXkgPSBjcmVhdGVTaWRlYmFySXRlbSgndG9kYXknLCAnZmEtY2FsZW5kYXItZGF5JywgJ1RvZGF5Jyk7XG4gICAgdG9kYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcbiAgICAgICAgc2V0QWN0aXZlQnV0dG9uKHRvZGF5KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHVwY29taW5nID0gY3JlYXRlU2lkZWJhckl0ZW0oJ3VwY29taW5nJywgJ2ZhLWNhbGVuZGFyLXdlZWsnLCAnVXBjb21pbmcnKTtcbiAgICB1cGNvbWluZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xuICAgICAgICBzZXRBY3RpdmVCdXR0b24odXBjb21pbmcpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYWxsID0gY3JlYXRlU2lkZWJhckl0ZW0oJ2FsbCcsICdmYS1jYWxlbmRhci1kYXlzJywgJ0FsbCcpO1xuICAgIGFsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xuICAgICAgICBzZXRBY3RpdmVCdXR0b24oYWxsKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGltcG9ydGFudCA9IGNyZWF0ZVNpZGViYXJJdGVtKCdpbXBvcnRhbnQnLCAnZmEtc3RhcicsICdJbXBvcnRhbnQnKTtcbiAgICBpbXBvcnRhbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcbiAgICAgICAgc2V0QWN0aXZlQnV0dG9uKGltcG9ydGFudCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBsaXN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGlzdHMuY2xhc3NMaXN0LmFkZCgnbGlzdHMnKTtcbiAgICBsaXN0cy5pbm5lckhUTUwgPSAnPGRpdj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLWxpc3QtY2hlY2tcIj48L2k+IDxwPkxpc3RzPC9wPjwvZGl2PiA8ZGl2PjxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2hldnJvbi11cFwiPjwvaT48L2Rpdj4nO1xuICAgIGxpc3RzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsaXN0Q2xpY2spO1xuXG4gICAgY29uc3QgYWNjb3JkaW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWNjb3JkaW9uLmNsYXNzTGlzdC5hZGQoJ2FjY29yZGlvbicpO1xuXG4gICAgY29uc3QgbmV3TGlzdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdMaXN0cy5jbGFzc0xpc3QuYWRkKCduZXctbGlzdHMnKTtcbiAgICBuZXdMaXN0cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xuICAgICAgICBzZXRBY3RpdmVCdXR0b24oZS50YXJnZXQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY3JlYXRlTmV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY3JlYXRlTmV3LmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1uZXcnKTtcbiAgICBjcmVhdGVOZXcuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGx1c1wiPjwvaT4gTmV3IExpc3QnXG4gICAgY3JlYXRlTmV3LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBuZXdMaXN0UG9wdXAoKTtcbiAgICB9KTtcblxuICAgIGFjY29yZGlvbi5hcHBlbmRDaGlsZChuZXdMaXN0cyk7XG4gICAgYWNjb3JkaW9uLmFwcGVuZENoaWxkKGNyZWF0ZU5ldyk7XG5cbiAgICBtZW51LmFwcGVuZENoaWxkKGluYm94KTtcbiAgICBtZW51LmFwcGVuZENoaWxkKHRvZGF5KTtcbiAgICBtZW51LmFwcGVuZENoaWxkKHVwY29taW5nKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKGFsbCk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChpbXBvcnRhbnQpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobGlzdHMpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoYWNjb3JkaW9uKVxuXG4gICAgc2lkZWJhck1lbnUuYXBwZW5kQ2hpbGQobWVudSk7XG5cbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHNpZGViYXJNZW51KTtcblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGViYXJJdGVtKGNsYXNzTmFtZSwgaWNvbkNsYXNzLCB0ZXh0KSB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSwgJ25hdi1idXR0b25zJyk7XG5cbiAgICBjb25zdCBpdGVtQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1Db250ZW50LmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXNvbGlkICR7aWNvbkNsYXNzfVwiPjwvaT4gPHA+JHt0ZXh0fTwvcD5gO1xuXG4gICAgaXRlbS5hcHBlbmRDaGlsZChpdGVtQ29udGVudCk7XG5cbiAgICByZXR1cm4gaXRlbTtcbn1cblxuZnVuY3Rpb24gbmV3TGlzdFBvcHVwKCkge1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ292ZXJsYXknKTtcblxuICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9wdXAuY2xhc3NMaXN0LmFkZCgncG9wdXAnKTtcblxuICAgIGNvbnN0IHBvcHVwVG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9wdXBUb3AuY2xhc3NMaXN0LmFkZCgncG9wdXAtdG9wJyk7XG5cbiAgICBjb25zdCB0aXRsZVBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0aXRsZVBhcmFncmFwaC50ZXh0Q29udGVudCA9ICdOZXcgTGlzdCc7XG5cbiAgICBjb25zdCBjbG9zZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgY2xvc2VJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLXhtYXJrJyk7XG4gICAgY2xvc2VJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VPdmVybGF5KTtcblxuICAgIHBvcHVwVG9wLmFwcGVuZENoaWxkKHRpdGxlUGFyYWdyYXBoKTtcbiAgICBwb3B1cFRvcC5hcHBlbmRDaGlsZChjbG9zZUljb24pO1xuXG4gICAgY29uc3QgcG9wdXBNaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3B1cE1pZC5jbGFzc0xpc3QuYWRkKCdwb3B1cC1taWQnKTtcblxuICAgIGNvbnN0IGlucHV0UGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGlucHV0UGFyYWdyYXBoLnRleHRDb250ZW50ID0gJ05hbWUgKG1heCAxMCBjaGFyYWN0ZXJzKTonO1xuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3bGlzdGlucHV0Jyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsICcxMCcpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCB0cnVlKTtcblxuICAgIGNvbnN0IGFsZXJ0UGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGFsZXJ0UGFyYWdyYXBoLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0Jyk7XG4gICAgYWxlcnRQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnTGlzdCBuYW1lIGlzIHJlcXVpcmVkLic7XG4gICAgYWxlcnRQYXJhZ3JhcGguc3R5bGUuY29sb3IgPSAncmVkJztcbiAgICBhbGVydFBhcmFncmFwaC5zdHlsZS5tYXJnaW5Ub3AgPSAnLjVyZW0nO1xuICAgIGFsZXJ0UGFyYWdyYXBoLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICBwb3B1cE1pZC5hcHBlbmRDaGlsZChpbnB1dFBhcmFncmFwaCk7XG4gICAgcG9wdXBNaWQuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIHBvcHVwTWlkLmFwcGVuZENoaWxkKGFsZXJ0UGFyYWdyYXBoKTtcblxuICAgIGNvbnN0IHBvcHVwQm90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9wdXBCb3QuY2xhc3NMaXN0LmFkZCgncG9wdXAtYm90Jyk7XG5cbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNsb3NlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2xvc2UnKTtcbiAgICBjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDbG9zZSc7XG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU92ZXJsYXkpXG5cbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdhZGRpdGlvbicpO1xuICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgTGlzdCc7XG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkTmV3TGlzdClcblxuICAgIHBvcHVwQm90LmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcbiAgICBwb3B1cEJvdC5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuXG4gICAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBUb3ApO1xuICAgIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwTWlkKTtcbiAgICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cEJvdCk7XG5cbiAgICBvdmVybGF5LmFwcGVuZENoaWxkKHBvcHVwKTtcblxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChvdmVybGF5KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlTGlzdFBvcHVwKGNvbmZpcm1DYWxsYmFjaykge1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvdmVybGF5LmNsYXNzTmFtZSA9ICdvdmVybGF5Mic7XG5cbiAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcHVwLmNsYXNzTmFtZSA9ICdwb3B1cDInO1xuXG4gICAgY29uc3QgcG9wdXBUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3B1cFRvcC5jbGFzc05hbWUgPSAncG9wdXAtdG9wMic7XG5cbiAgICBjb25zdCB0cmlhbmdsZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgdHJpYW5nbGVJY29uLmNsYXNzTmFtZSA9ICdmYS1zb2xpZCBmYS10cmlhbmdsZS1leGNsYW1hdGlvbic7XG5cbiAgICBjb25zdCBwb3B1cE1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcG9wdXBNZXNzYWdlLnRleHRDb250ZW50ID0gJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBsaXN0Pyc7XG5cbiAgICBjb25zdCBwb3B1cEJvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcHVwQm90LmNsYXNzTmFtZSA9ICdwb3B1cC1ib3QyJztcblxuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2xvc2VCdXR0b24uaWQgPSAnY2xvc2UnO1xuICAgIGNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gJ0Nsb3NlJztcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2xvc2VPdmVybGF5MigpXG4gICAgfSk7XG5cbiAgICBjb25zdCBjb25maXJtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uZmlybUJ1dHRvbi5pZCA9ICdkZWxldGVsaXN0JztcbiAgICBjb25maXJtQnV0dG9uLnRleHRDb250ZW50ID0gJ0NvbmZpcm0nO1xuICAgIGNvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbmZpcm1DYWxsYmFjaygpO1xuICAgICAgICBjbG9zZU92ZXJsYXkyKCk7XG4gICAgfSk7XG5cbiAgICBwb3B1cFRvcC5hcHBlbmRDaGlsZCh0cmlhbmdsZUljb24pO1xuICAgIHBvcHVwVG9wLmFwcGVuZENoaWxkKHBvcHVwTWVzc2FnZSk7XG5cbiAgICBwb3B1cEJvdC5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG4gICAgcG9wdXBCb3QuYXBwZW5kQ2hpbGQoY29uZmlybUJ1dHRvbik7XG5cbiAgICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cFRvcCk7XG4gICAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBCb3QpO1xuXG4gICAgb3ZlcmxheS5hcHBlbmRDaGlsZChwb3B1cCk7XG5cbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlT3ZlcmxheSgpIHtcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcbiAgICBvdmVybGF5LnJlbW92ZSgpXG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUxpc3QoaWQpIHtcbiAgICBjb25zdCB0b2RvTGlzdHMgPSBnZXRUb2RvTGlzdHMoKTtcbiAgICBjb25zdCB1c2VkSWRzID0gZ2V0VXNlZElkcygpO1xuXG4gICAgY29uc3QgaWRJbmRleCA9IHVzZWRJZHMuaW5kZXhPZihpZCk7XG4gICAgaWYgKGlkSW5kZXggIT09IC0xKSB7XG4gICAgICAgIHVzZWRJZHMuc3BsaWNlKGlkSW5kZXgsIDEpO1xuICAgICAgICBzYXZlVXNlZElkcyh1c2VkSWRzKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVkVG9kb0xpc3RzID0gdG9kb0xpc3RzLmZpbHRlcihsaXN0ID0+IGxpc3QuaWQgIT09IGlkKTtcbiAgICBzYXZlVG9kb0xpc3RzKHVwZGF0ZWRUb2RvTGlzdHMpO1xuXG4gICAgcmVuZGVyVG9kb0xpc3RzKCk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlT3ZlcmxheTIoKSB7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5MicpO1xuICAgIG92ZXJsYXkucmVtb3ZlKClcbn1cblxuZnVuY3Rpb24gbmV3TGlzdEl0ZW0obmFtZSwgaWQpIHtcbiAgICBjb25zdCBuZXdMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld0xpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b25zJywgJ3RoZS1uZXctbGlzdHMnKTtcbiAgICBuZXdMaXN0SXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWxpc3QtaWRcIiwgaWQpO1xuXG4gICAgY29uc3QgbmV3TGlzdEl0ZW1DaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld0xpc3RJdGVtQ2hpbGQuaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2lyY2xlXCI+PC9pPiR7bmFtZX08L2Rpdj5gO1xuXG4gICAgY29uc3QgbmV3TGlzdEl0ZW1DaGlsZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdMaXN0SXRlbUNoaWxkMi5jbGFzc0xpc3QuYWRkKCd0cmFzaCcpO1xuICAgIGNvbnN0IHRoZVRyYXNoSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICB0aGVUcmFzaEljb24uY2xhc3NMaXN0LmFkZCgnZmEtcmVndWxhcicsICdmYS10cmFzaC1jYW4nKTtcbiAgICB0aGVUcmFzaEljb24uc2V0QXR0cmlidXRlKFwiZGF0YS1saXN0LWlkXCIsIGlkKTtcbiAgICBuZXdMaXN0SXRlbUNoaWxkMi5hcHBlbmRDaGlsZCh0aGVUcmFzaEljb24pO1xuXG4gICAgbmV3TGlzdEl0ZW0uYXBwZW5kQ2hpbGQobmV3TGlzdEl0ZW1DaGlsZCk7XG4gICAgbmV3TGlzdEl0ZW0uYXBwZW5kQ2hpbGQobmV3TGlzdEl0ZW1DaGlsZDIpO1xuXG4gICAgcmV0dXJuIG5ld0xpc3RJdGVtXG59XG5cbmZ1bmN0aW9uIHJlbmRlclRvZG9MaXN0cygpIHtcbiAgICBjb25zdCB0b2RvTGlzdHMgPSBnZXRUb2RvTGlzdHMoKTtcbiAgICBjb25zdCBuZXdMaXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctbGlzdHMnKTtcblxuICAgIG5ld0xpc3RzLmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3Qgbm9uRGVmYXVsdFRvZG9MaXN0cyA9IHRvZG9MaXN0cy5maWx0ZXIodG9kb0xpc3QgPT4gIWlzRGVmYXVsdFRvZG9MaXN0KHRvZG9MaXN0LmlkKSk7XG5cbiAgICBub25EZWZhdWx0VG9kb0xpc3RzLmZvckVhY2godG9kb0xpc3QgPT4ge1xuICAgICAgICBjb25zdCBsaXN0SXRlbSA9IG5ld0xpc3RJdGVtKHRvZG9MaXN0Lm5hbWUsIHRvZG9MaXN0LmlkKTtcbiAgICAgICAgbmV3TGlzdHMuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZ2VuZXJhdGVkRGl2cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0aGUtbmV3LWxpc3RzXCIpO1xuICAgIGZvciAoY29uc3QgZGl2IG9mIGdlbmVyYXRlZERpdnMpIHtcbiAgICAgICAgY29uc3QgdHJhc2hJY29uID0gZGl2LnF1ZXJ5U2VsZWN0b3IoXCIudHJhc2ggLmZhLXRyYXNoLWNhblwiKTtcbiAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRyYXNoSWNvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9KTtcblxuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdHJhc2hJY29uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2VuZXJhdGVkQmlucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZhLXRyYXNoLWNhbicpO1xuICAgIGZvciAoY29uc3QgYmluIG9mIGdlbmVyYXRlZEJpbnMpIHtcbiAgICAgICAgYmluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgbGlzdElkID0gYmluLmdldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJyk7XG4gICAgICAgICAgICBkZWxldGVMaXN0UG9wdXAoKCkgPT4gZGVsZXRlTGlzdChsaXN0SWQpKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc0RlZmF1bHRUb2RvTGlzdChpZCkge1xuICAgIGNvbnN0IGRlZmF1bHRUb2RvTGlzdElkcyA9IFtcIjAwMDAwMFwiLCBcIjExMTExMVwiLCBcIjIyMjIyMlwiLCBcIjMzMzMzM1wiLCBcIjQ0NDQ0NFwiXTtcblxuICAgIHJldHVybiBkZWZhdWx0VG9kb0xpc3RJZHMuaW5jbHVkZXMoaWQpO1xufVxuXG5mdW5jdGlvbiBhZGROZXdMaXN0KCkge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld2xpc3RpbnB1dCcpO1xuICAgIGNvbnN0IGFsZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsZXJ0Jyk7XG4gICAgY29uc3QgcGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uJyk7XG5cbiAgICBjb25zdCBpbnB1dFZhbHVlID0gaW5wdXQudmFsdWU7XG5cbiAgICBpZiAoaW5wdXQuY2hlY2tWYWxpZGl0eSgpID09PSBmYWxzZSkge1xuICAgICAgICBhbGVydC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgaW5wdXQuc3R5bGUuYm9yZGVyQ29sb3IgPSAncmVkJztcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuZXdMaXN0ID0gbmV3IFRvZG9MaXN0KGlucHV0VmFsdWUpO1xuICAgICAgICBjb25zdCB0b2RvTGlzdHMgPSBnZXRUb2RvTGlzdHMoKTtcbiAgICAgICAgdG9kb0xpc3RzLnB1c2gobmV3TGlzdCk7XG4gICAgICAgIHNhdmVUb2RvTGlzdHModG9kb0xpc3RzKTtcblxuICAgICAgICBsb2dUb2RvTGlzdHNUb0NvbnNvbGUoKVxuXG4gICAgICAgIGNvbnN0IG5ld0xpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1saXN0cycpO1xuICAgICAgICBuZXdMaXN0cy5hcHBlbmRDaGlsZChuZXdMaXN0SXRlbShpbnB1dFZhbHVlLCBuZXdMaXN0LmlkKSk7XG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG5cbiAgICAgICAgcmVuZGVyVG9kb0xpc3RzKClcblxuICAgICAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBwYW5lbC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIGFsZXJ0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cblxuICAgICAgICBjbG9zZU92ZXJsYXkoKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gc2V0QWN0aXZlQnV0dG9uKGJ1dHRvbikge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1idXR0b25zXCIpO1xuXG4gICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgaWYgKGJ1dHRvbiAhPT0gdGhpcykge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuXG5mdW5jdGlvbiBsaXN0Q2xpY2soKSB7XG4gICAgY29uc3QgbGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdHMnKVxuICAgIGNvbnN0IGNoZXZyb25JY29uID0gbGlzdHMucXVlcnlTZWxlY3RvcihcIi5mYS1jaGV2cm9uLXVwXCIpO1xuICAgIGNoZXZyb25JY29uLmNsYXNzTGlzdC50b2dnbGUoXCJmYS1jaGV2cm9uLWRvd25cIik7XG5cbiAgICBjb25zdCBwYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb24nKTtcblxuICAgIGlmIChwYW5lbC5zdHlsZS5tYXhIZWlnaHQpIHtcbiAgICAgICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBwYW5lbC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzaWRlYmFyQW5pbWF0ZSgpIHtcbiAgICBjb25zdCBzY3JlZW5XaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUtc2lkZWJhcicpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIFxuICAgIGlmIChzY3JlZW5XaWR0aCA+IDc2OCkge1xuICAgICAgICBpZiAoc2lkZWJhci5zdHlsZS5sZWZ0ID09PSAnJyB8fCBzaWRlYmFyLnN0eWxlLmxlZnQgPT09ICcwcHgnKSB7XG4gICAgICAgICAgICBzaWRlYmFyLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgICAgICAgIHNpZGViYXIuc3R5bGUubGVmdCA9ICctMTAwJSc7XG4gICAgICAgICAgICBtYWluLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSAnMWZyJ1xuICAgICAgICAgICAgbWFpbi5zdHlsZS5ncmlkVGVtcGxhdGVBcmVhcyA9ICdcIm1haW4tYXJlYVwiJ1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWJhcnMtc3RhZ2dlcmVkJyk7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZmEtYmFycycpO1xuICAgICAgICB9IGVsc2UgaWYgKHNpZGViYXIuc3R5bGUubGVmdCA9PT0gJy0xMDAlJykge1xuICAgICAgICAgICAgc2lkZWJhci5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgICAgICAgICAgc2lkZWJhci5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgICAgICBtYWluLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSAnMzAwcHggMWZyJ1xuICAgICAgICAgICAgbWFpbi5zdHlsZS5ncmlkVGVtcGxhdGVBcmVhcyA9ICdcInNpZGViYXIgbWFpbi1hcmVhXCInXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtYmFycycpO1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ZhLWJhcnMtc3RhZ2dlcmVkJyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc2lkZWJhci5zdHlsZS5sZWZ0ID09PSAnLTEwMCUnKSB7XG4gICAgICAgICAgICBzaWRlYmFyLnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtYmFycycpO1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ZhLWJhcnMtc3RhZ2dlcmVkJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoc2lkZWJhci5zdHlsZS5sZWZ0ID09PSAnJyB8fCBzaWRlYmFyLnN0eWxlLmxlZnQgPT09ICcwcHgnKSB7XG4gICAgICAgICAgICBzaWRlYmFyLnN0eWxlLmxlZnQgPSAnLTEwMCUnO1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWJhcnMtc3RhZ2dlcmVkJyk7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZmEtYmFycycpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBob21lQnV0dG9uQ2xpY2soKSB7XG4gICAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5XCIpO1xuXG4gICAgc2V0QWN0aXZlQnV0dG9uKHRvZGF5KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0aWFsaXplU2lkZWJhcigpIHtcbiAgICBjcmVhdGVTaWRlYmFyKCk7XG5cbiAgICBjb25zdCB0b2dnbGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlLXNpZGViYXInKTtcbiAgICB0b2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaWRlYmFyQW5pbWF0ZSk7XG5cbiAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZS1ob21lJyk7XG4gICAgaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhvbWVCdXR0b25DbGljaylcblxuICAgIHNldEFjdGl2ZUJ1dHRvbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluYm94XCIpKTtcbiAgICBpbml0aWFsaXNlTWFpbignMDAwMDAwJylcblxuICAgIHJlbmRlclRvZG9MaXN0cygpXG4gICAgcmVuZGVyVGFza3MoKVxufVxuIiwiaW1wb3J0IGluaXRpYWxpemVTaWRlYmFyIGZyb20gJy4vc2lkZWJhcidcbmltcG9ydCB7IHJlbmRlclRhc2tzIH0gZnJvbSAnLi9tYWluJ1xuaW1wb3J0IHsgVG9kbywgVG9kb0xpc3QsIGdldFRvZG9MaXN0cywgc2F2ZVRvZG9MaXN0cywgbG9nVG9kb0xpc3RzVG9Db25zb2xlLCBnZXRVc2VkSWRzLCBzYXZlVXNlZElkcywgZ2V0VG9kb0xpc3RCeUlkIH0gZnJvbSAnLi9hcHAuanMnXG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXYuY2xhc3NMaXN0LmFkZCgnbmF2Jyk7XG5cbiAgICBjb25zdCBuYXZJbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdklubmVyLmNsYXNzTGlzdC5hZGQoJ25hdi1pbm5lcicpXG5cbiAgICBjb25zdCBsZWZ0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGVmdERpdi5jbGFzc0xpc3QuYWRkKCdsZWZ0LW5hdicpO1xuXG4gICAgY29uc3QgY2VudGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2VudGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2NlbnRlci1uYXYnKTtcblxuICAgIGNvbnN0IHJpZ2h0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmlnaHREaXYuY2xhc3NMaXN0LmFkZCgncmlnaHQtbmF2Jyk7XG5cbiAgICBjb25zdCBsb2dvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG9nb0Rpdi5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XG5cbiAgICBjb25zdCBtZW51SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBjb25zdCBzY3JlZW5XaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGlmIChzY3JlZW5XaWR0aCA+IDc2OCkge1xuICAgICAgICBtZW51SWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1iYXJzLXN0YWdnZXJlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1lbnVJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLWJhcnMnKTtcbiAgICB9XG5cbiAgICBtZW51SWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZ2dsZS1zaWRlYmFyJyk7XG5cbiAgICBjb25zdCBob21lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBob21lSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1ob3VzZScpO1xuICAgIGhvbWVJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9nZ2xlLWhvbWUnKTtcblxuICAgIGxlZnREaXYuYXBwZW5kQ2hpbGQobWVudUljb24pO1xuICAgIGxlZnREaXYuYXBwZW5kQ2hpbGQoaG9tZUljb24pO1xuXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgIGRhdGUuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlSW5wdXQnKTtcblxuICAgIGNlbnRlckRpdi5hcHBlbmRDaGlsZChkYXRlKVxuXG4gICAgY29uc3QgYWRkSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBhZGRJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLXBsdXMnKTtcbiAgICBhZGRJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBuZXdUYXNrUG9wdXAoKTtcbiAgICAgICAgY29uc3QgdG9kb0xpc3RzID0gZ2V0VG9kb0xpc3RzKCk7XG4gICAgICAgIGNyZWF0ZUxpc3RPcHRpb25zKHRvZG9MaXN0cyk7XG4gICAgfSlcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdUb0RvJztcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuXG4gICAgbG9nb0Rpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICByaWdodERpdi5hcHBlbmRDaGlsZChhZGRJY29uKTtcbiAgICByaWdodERpdi5hcHBlbmRDaGlsZChsb2dvRGl2KTtcblxuICAgIG5hdklubmVyLmFwcGVuZENoaWxkKGxlZnREaXYpO1xuICAgIG5hdklubmVyLmFwcGVuZENoaWxkKGNlbnRlckRpdik7XG4gICAgbmF2SW5uZXIuYXBwZW5kQ2hpbGQocmlnaHREaXYpO1xuXG4gICAgbmF2LmFwcGVuZENoaWxkKG5hdklubmVyKTtcblxuICAgIHJldHVybiBuYXZcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgbWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4nKTtcblxuXG4gICAgcmV0dXJuIG1haW5cbn1cblxuZnVuY3Rpb24gbmV3VGFza1BvcHVwKCkge1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvdmVybGF5LmNsYXNzTmFtZSA9ICdvdmVybGF5Myc7XG5cbiAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcHVwLmNsYXNzTmFtZSA9ICdwb3B1cDMnO1xuXG4gICAgY29uc3QgcG9wdXBUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3B1cFRvcC5jbGFzc05hbWUgPSAncG9wdXAtdG9wMyc7XG5cbiAgICBjb25zdCB0aXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGl0bGVUZXh0LnRleHRDb250ZW50ID0gJ05ldyBUYXNrJztcbiAgICBwb3B1cFRvcC5hcHBlbmRDaGlsZCh0aXRsZVRleHQpO1xuXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgY2xvc2VCdXR0b24uY2xhc3NOYW1lID0gJ2ZhLXNvbGlkIGZhLXhtYXJrJztcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlT3ZlcmxheSk7XG4gICAgcG9wdXBUb3AuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuXG4gICAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBUb3ApO1xuXG4gICAgY29uc3QgcG9wdXBNaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3B1cE1pZC5jbGFzc05hbWUgPSAncG9wdXAtbWlkMyc7XG5cbiAgICBjb25zdCBtaWRMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWlkTGVmdC5jbGFzc05hbWUgPSAnbWlkLWxlZnQnO1xuXG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZTonO1xuICAgIG1pZExlZnQuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG5cbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0aXRsZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgdGl0bGVJbnB1dC5tYXhMZW5ndGggPSA2MDtcbiAgICB0aXRsZUlucHV0LmlkID0gJ3Rhc2stdGl0bGUnO1xuICAgIHRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIG1pZExlZnQuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cbiAgICBjb25zdCB0aXRsZUFsZXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRpdGxlQWxlcnQuY2xhc3NMaXN0LmFkZCgndGl0bGUtYWxlcnQnKTtcbiAgICB0aXRsZUFsZXJ0LnRleHRDb250ZW50ID0gJ1RpdGxlIGlzIHJlcXVpcmVkLic7XG4gICAgdGl0bGVBbGVydC5zdHlsZS5jb2xvciA9ICdyZWQnO1xuICAgIHRpdGxlQWxlcnQuc3R5bGUubWFyZ2luVG9wID0gJyc7XG4gICAgdGl0bGVBbGVydC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIG1pZExlZnQuYXBwZW5kQ2hpbGQodGl0bGVBbGVydClcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246JztcbiAgICBtaWRMZWZ0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25UZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS5pZCA9ICdkZXNjcmlwdGlvbic7XG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS5jb2xzID0gMzA7XG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS5yb3dzID0gNDtcbiAgICBkZXNjcmlwdGlvblRleHRhcmVhLm1heExlbmd0aCA9IDE4MDtcbiAgICBtaWRMZWZ0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGV4dGFyZWEpO1xuXG4gICAgcG9wdXBNaWQuYXBwZW5kQ2hpbGQobWlkTGVmdCk7XG5cbiAgICBjb25zdCBtaWRSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1pZFJpZ2h0LmNsYXNzTmFtZSA9ICdtaWQtcmlnaHQnO1xuXG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIGRhdGU6JztcbiAgICBtaWRSaWdodC5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuXG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgICBkYXRlSW5wdXQuaWQgPSAndGFzay1kYXRlJztcbiAgICBkYXRlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIG1pZFJpZ2h0LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG5cbiAgICBjb25zdCBkYXRlQWxlcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGF0ZUFsZXJ0LmNsYXNzTGlzdC5hZGQoJ2RhdGUtYWxlcnQnKTtcbiAgICBkYXRlQWxlcnQudGV4dENvbnRlbnQgPSAnRGF0ZSBpcyByZXF1aXJlZC4nO1xuICAgIGRhdGVBbGVydC5zdHlsZS5jb2xvciA9ICdyZWQnO1xuICAgIGRhdGVBbGVydC5zdHlsZS5tYXJnaW5Ub3AgPSAnJztcbiAgICBkYXRlQWxlcnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIG1pZFJpZ2h0LmFwcGVuZENoaWxkKGRhdGVBbGVydCk7XG5cbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5Oic7XG4gICAgbWlkUmlnaHQuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG5cbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHByaW9yaXR5U2VsZWN0LmlkID0gJ3ByaW9yaXR5JztcbiAgICBwcmlvcml0eVNlbGVjdC5yZXF1aXJlZCA9IHRydWU7XG4gICAgWydMb3cnLCAnTWVkaXVtJywgJ0hpZ2gnXS5mb3JFYWNoKHByaW9yaXR5VGV4dCA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBwcmlvcml0eVRleHQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJpb3JpdHlUZXh0O1xuICAgICAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xuICAgIG1pZFJpZ2h0LmFwcGVuZENoaWxkKHByaW9yaXR5U2VsZWN0KTtcblxuICAgIGNvbnN0IHByaW9yaXR5QWxlcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJpb3JpdHlBbGVydC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1hbGVydCcpO1xuICAgIHByaW9yaXR5QWxlcnQudGV4dENvbnRlbnQgPSAnUHJpb3JpdHkgaXMgcmVxdWlyZWQuJztcbiAgICBwcmlvcml0eUFsZXJ0LnN0eWxlLmNvbG9yID0gJ3JlZCc7XG4gICAgcHJpb3JpdHlBbGVydC5zdHlsZS5tYXJnaW5Ub3AgPSAnJztcbiAgICBwcmlvcml0eUFsZXJ0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICBtaWRSaWdodC5hcHBlbmRDaGlsZChwcmlvcml0eUFsZXJ0KTtcblxuICAgIGNvbnN0IGxpc3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGlzdExhYmVsLnRleHRDb250ZW50ID0gJ0xpc3Q6JztcbiAgICBtaWRSaWdodC5hcHBlbmRDaGlsZChsaXN0TGFiZWwpO1xuXG4gICAgY29uc3QgbGlzdFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIGxpc3RTZWxlY3QuaWQgPSAndGhlbGlzdCc7XG4gICAgbGlzdFNlbGVjdC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICBtaWRSaWdodC5hcHBlbmRDaGlsZChsaXN0U2VsZWN0KTtcblxuICAgIGNvbnN0IGxpc3RBbGVydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsaXN0QWxlcnQuY2xhc3NMaXN0LmFkZCgnbGlzdC1hbGVydCcpO1xuICAgIGxpc3RBbGVydC50ZXh0Q29udGVudCA9ICdMaXN0IGlzIHJlcXVpcmVkLic7XG4gICAgbGlzdEFsZXJ0LnN0eWxlLmNvbG9yID0gJ3JlZCc7XG4gICAgbGlzdEFsZXJ0LnN0eWxlLm1hcmdpblRvcCA9ICcnO1xuICAgIGxpc3RBbGVydC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgbWlkUmlnaHQuYXBwZW5kQ2hpbGQobGlzdEFsZXJ0KTtcblxuICAgIHBvcHVwTWlkLmFwcGVuZENoaWxkKG1pZFJpZ2h0KTtcblxuICAgIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwTWlkKTtcblxuICAgIGNvbnN0IHBvcHVwQm90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9wdXBCb3QuY2xhc3NOYW1lID0gJ3BvcHVwLWJvdDMnO1xuXG4gICAgY29uc3QgdGV4dENsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGV4dENsb3NlQnV0dG9uLmlkID0gJ2Nsb3NlJztcbiAgICB0ZXh0Q2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSAnQ2xvc2UnO1xuICAgIHRleHRDbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlT3ZlcmxheSk7XG4gICAgcG9wdXBCb3QuYXBwZW5kQ2hpbGQodGV4dENsb3NlQnV0dG9uKTtcblxuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRUYXNrQnV0dG9uLmlkID0gJ2FkZHRhc2snO1xuICAgIGFkZFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xuICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB2YWxpZGF0ZUFuZEFkZFRhc2spXG4gICAgcG9wdXBCb3QuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XG5cbiAgICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cEJvdCk7XG5cbiAgICBvdmVybGF5LmFwcGVuZENoaWxkKHBvcHVwKTtcblxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChvdmVybGF5KTtcbn1cblxuZnVuY3Rpb24gY2xvc2VPdmVybGF5KCkge1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheTMnKTtcbiAgICBvdmVybGF5LnJlbW92ZSgpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpc3RPcHRpb25zKHRvZG9MaXN0cykge1xuICAgIGNvbnN0IGxpc3RTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhlbGlzdCcpO1xuXG4gICAgbGlzdFNlbGVjdC5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCBpZ25vcmVJZHMgPSBbJzExMTExMScsICcyMjIyMjInLCAnMzMzMzMzJywgJzQ0NDQ0NCddXG5cblxuICAgIHRvZG9MaXN0cy5mb3JFYWNoKGxpc3QgPT4ge1xuICAgICAgICBpZiAoIWlnbm9yZUlkcy5pbmNsdWRlcyhsaXN0LmlkKSkge1xuICAgICAgICAgICAgY29uc3QgbGlzdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgbGlzdE9wdGlvbi52YWx1ZSA9IGxpc3QuaWQ7XG4gICAgICAgICAgICBsaXN0T3B0aW9uLnRleHRDb250ZW50ID0gbGlzdC5uYW1lO1xuICAgICAgICAgICAgbGlzdFNlbGVjdC5hcHBlbmRDaGlsZChsaXN0T3B0aW9uKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUFuZEFkZFRhc2soKSB7XG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXRpdGxlJyk7XG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZGF0ZScpO1xuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5Jyk7XG4gICAgY29uc3QgbGlzdFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGVsaXN0Jyk7XG5cbiAgICBjb25zdCB0aXRsZUFsZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlLWFsZXJ0Jyk7XG4gICAgY29uc3QgZGF0ZUFsZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtYWxlcnQnKTtcbiAgICBjb25zdCBwcmlvcml0eUFsZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5LWFsZXJ0Jyk7XG4gICAgY29uc3QgbGlzdEFsZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtYWxlcnQnKTtcblxuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcblxuICAgIGlmICh0aXRsZUlucHV0LnZhbHVlID09PSAnJykge1xuICAgICAgICB0aXRsZUFsZXJ0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGl0bGVBbGVydC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIGlmIChkYXRlSW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgIGRhdGVBbGVydC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGVBbGVydC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIGlmIChwcmlvcml0eVNlbGVjdC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgcHJpb3JpdHlBbGVydC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHByaW9yaXR5QWxlcnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG5cbiAgICBpZiAobGlzdFNlbGVjdC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgbGlzdEFsZXJ0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGlzdEFsZXJ0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IGxpc3RTZWxlY3QudmFsdWU7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJyk7XG5cbiAgICAgICAgY29uc3QgdGhlVG9kbyA9IG5ldyBUb2RvKHRpdGxlSW5wdXQudmFsdWUsIGRlc2NyaXB0aW9uLnZhbHVlLCBkYXRlSW5wdXQudmFsdWUsIHByaW9yaXR5U2VsZWN0LnZhbHVlKVxuICAgICAgICBhZGRUb2RvVG9Ub2RvTGlzdChzZWxlY3RlZFZhbHVlLCB0aGVUb2RvKTtcbiAgICAgICAgbG9nVG9kb0xpc3RzVG9Db25zb2xlKClcbiAgICAgICAgY2xvc2VPdmVybGF5KClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkZFRvZG9Ub1RvZG9MaXN0KHNlbGVjdGVkVmFsdWUsIG5ld1RvZG8pIHtcbiAgICBjb25zdCBvcmlnaW5hbFRvZG9MaXN0ID0gZ2V0VG9kb0xpc3RCeUlkKHNlbGVjdGVkVmFsdWUpO1xuXG4gICAgaWYgKCFvcmlnaW5hbFRvZG9MaXN0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVG9kb0xpc3Qgbm90IGZvdW5kIGZvciB0aGUgc2VsZWN0ZWQgdmFsdWUuXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlZFRvZG9MaXN0ID0gbmV3IFRvZG9MaXN0KG9yaWdpbmFsVG9kb0xpc3QubmFtZSwgb3JpZ2luYWxUb2RvTGlzdC5pZCk7XG5cbiAgICB1cGRhdGVkVG9kb0xpc3QudG9kb3MgPSBbLi4ub3JpZ2luYWxUb2RvTGlzdC50b2RvcywgbmV3VG9kb107XG5cbiAgICBjb25zdCB0b2RvTGlzdHMgPSBnZXRUb2RvTGlzdHMoKTtcbiAgICBjb25zdCB1cGRhdGVkVG9kb0xpc3RzID0gdG9kb0xpc3RzLm1hcCh0b2RvTGlzdCA9PlxuICAgICAgICB0b2RvTGlzdC5pZCA9PT0gc2VsZWN0ZWRWYWx1ZSA/IHVwZGF0ZWRUb2RvTGlzdCA6IHRvZG9MaXN0XG4gICAgKTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvTGlzdHMnLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkVG9kb0xpc3RzKSk7XG5cbiAgICByZW5kZXJUYXNrcygpXG4gICAgbG9nVG9kb0xpc3RzVG9Db25zb2xlKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRUb2RvTGlzdHMoKSB7XG4gICAgY29uc3QgZGVmYXVsdExpc3RzRGF0YSA9IFtcbiAgICAgICAgeyBuYW1lOiBcIkluYm94XCIsIGlkOiBcIjAwMDAwMFwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJUb2RheVwiLCBpZDogXCIxMTExMTFcIiB9LFxuICAgICAgICB7IG5hbWU6IFwiVXBjb21pbmdcIiwgaWQ6IFwiMjIyMjIyXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIkFsbFwiLCBpZDogXCIzMzMzMzNcIiB9LFxuICAgICAgICB7IG5hbWU6IFwiSW1wb3J0YW50XCIsIGlkOiBcIjQ0NDQ0NFwiIH1cbiAgICBdO1xuXG4gICAgY29uc3QgZXhpc3RpbmdMaXN0cyA9IGdldFRvZG9MaXN0cygpO1xuICAgIGNvbnN0IG1pc3NpbmdMaXN0c0RhdGEgPSBkZWZhdWx0TGlzdHNEYXRhLmZpbHRlcihkZWZhdWx0TGlzdCA9PlxuICAgICAgICAhZXhpc3RpbmdMaXN0cy5zb21lKGV4aXN0aW5nTGlzdCA9PiBleGlzdGluZ0xpc3QubmFtZSA9PT0gZGVmYXVsdExpc3QubmFtZSlcbiAgICApO1xuXG4gICAgY29uc3QgdXBkYXRlZExpc3RzID0gZXhpc3RpbmdMaXN0cy5jb25jYXQobWlzc2luZ0xpc3RzRGF0YS5tYXAoZGF0YSA9PiBuZXcgVG9kb0xpc3QoZGF0YS5uYW1lLCBkYXRhLmlkKSkpO1xuICAgIHNhdmVUb2RvTGlzdHModXBkYXRlZExpc3RzKTtcblxuICAgIHVwZGF0ZVVzZWRJZHMoZGVmYXVsdExpc3RzRGF0YS5tYXAobGlzdCA9PiBsaXN0LmlkKSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVVzZWRJZHMoaWRzVG9JbmNsdWRlKSB7XG4gICAgY29uc3QgdXNlZElkcyA9IGdldFVzZWRJZHMoKTtcbiAgICBjb25zdCB1bmlxdWVVc2VkSWRzID0gQXJyYXkuZnJvbShuZXcgU2V0KHVzZWRJZHMuY29uY2F0KGlkc1RvSW5jbHVkZSkpKTtcbiAgICBzYXZlVXNlZElkcyh1bmlxdWVVc2VkSWRzKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlU2NyZWVuV2lkdGhDaGFuZ2UoKSB7XG4gICAgY29uc3Qgc2NyZWVuV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcblxuICAgIGlmIChzY3JlZW5XaWR0aCA8PSA3NjgpIHtcbiAgICAgICAgaWYgKHNjcmVlbldpZHRoIDw9IDMwMCkge1xuICAgICAgICAgICAgc2lkZWJhci5zdHlsZS53aWR0aCA9IHNjcmVlbldpZHRoO1xuICAgICAgICB9XG4gICAgICAgIHNpZGViYXIuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgICBzaWRlYmFyLnN0eWxlLmxlZnQgPSAnLTEwMCUnO1xuICAgICAgICBtYWluLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSAnMWZyJ1xuICAgICAgICBtYWluLnN0eWxlLmdyaWRUZW1wbGF0ZUFyZWFzID0gJ1wibWFpbi1hcmVhXCInXG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2lkZWJhci5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgICAgICBzaWRlYmFyLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgc2lkZWJhci5zdHlsZS53aWR0aCA9ICcnO1xuICAgICAgICBtYWluLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSAnMzAwcHggMWZyJ1xuICAgICAgICBtYWluLnN0eWxlLmdyaWRUZW1wbGF0ZUFyZWFzID0gJ1wic2lkZWJhciBtYWluLWFyZWFcIidcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVdlYnBhZ2UoKSB7XG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcblxuICAgIHZhciBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgdmFyIGZvcm1hdHRlZERhdGUgPSBjdXJyZW50RGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlSW5wdXRcIikudmFsdWUgPSBmb3JtYXR0ZWREYXRlO1xuXG4gICAgY3JlYXRlRGVmYXVsdFRvZG9MaXN0cygpO1xuXG4gICAgaW5pdGlhbGl6ZVNpZGViYXIoKVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVNjcmVlbldpZHRoQ2hhbmdlKTtcblxuICAgIGhhbmRsZVNjcmVlbldpZHRoQ2hhbmdlKCk7XG59XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9