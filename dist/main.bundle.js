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
    z-index: 50;
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

#deletetask {
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

#edittask {
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

.fa-flag {
    opacity: 70%;
    z-index: 0;
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
    }

    .main {
        grid-template-columns: 1fr;
        grid-template-areas: ' main-area';
    }

    .nav-inner {
        width: 95%;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@10..48,200;10..48,300;10..48,400;10..48,500;10..48,600;10..48,700;10..48,800&display=swap');\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: Ubuntu, sans-serif;\n}\n\nbody {\n    height: 100vh;\n    overflow: auto;\n}\n\n.main-content {\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 45px 1fr;\n    grid-template-areas:\n        'navbar'\n        'main';\n}\n\n.nav {\n    background-color: #344e41;\n    grid-area: navbar;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #f1faee;\n    position: sticky;\n    top: 0;\n    z-index: 100;\n}\n\n.nav-inner {\n    width: 90%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.left-nav,\n.right-nav {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.logo {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding-left: 1.5rem;\n    gap: 0.25rem;\n    font-family: 2rem;\n    color: #f1faee;\n    user-select: none;\n}\n\n.nav .fa-plus {\n    font-size: 1.25rem;\n    background-color: transparent;\n    padding: 0.25rem;\n    border-radius: 5px;\n    color: white;\n    transition: 0.2s ease;\n}\n\n.nav .fa-plus:hover {\n    background-color: #888;\n}\n\n.nav .fa-plus:active {\n    transform: scale(0.95);\n}\n\n.left-nav {\n    display: flex;\n    align-items: center;\n    text-align: center;\n    gap: 1.5rem;\n    font-size: 1.2rem;\n    transition: 0.2s ease;\n}\n\n.left-nav .fa-house {\n    font-size: 1.2rem;\n    transition: 0.3s ease;\n}\n\n.left-nav .fa-bars,\n.fa-bars-staggered {\n    transition: 0.3s ease;\n}\n\n.nav .fa-solid {\n    cursor: pointer;\n    transform: 0.2s ease;\n}\n\n.left-nav .fa-solid:hover {\n    opacity: 50%;\n}\n\n.left-nav .fa-solid:active {\n    transform: scale(0.95);\n}\n\n.center-nav {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n}\n\n#dateInput {\n    background: transparent;\n    border: none;\n    font-size: 1rem;\n    color: white;\n    text-transform: uppercase;\n    background-color: #588157;\n    border-radius: 4px;\n    padding: 0.4rem 1rem;\n    text-align: center;\n    user-select: none;\n}\n\n.main {\n    display: grid;\n    grid-template-rows: 1fr;\n    grid-template-columns: 285px 1fr;\n    grid-template-areas: 'sidebar main-area';\n    height: 100%;\n    transition: 0.3s ease;\n    overflow: hidden;\n}\n\n.sidebar {\n    background-color: #f7f7f7;\n    grid-area: sidebar;\n    padding: 1rem;\n    position: relative;\n    height: 100%;\n    left: 0;\n    transition: 0.3s ease;\n    z-index: 50;\n}\n\n.main-area {\n    grid-area: main-area;\n    padding: 1rem;\n    display: flex;\n    justify-content: center;\n    transition: 0.3s ease;\n    overflow: auto;\n}\n\n.menu {\n    text-decoration: none;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n\n.menu li {\n    display: flex;\n    align-items: center;\n    text-align: center;\n    justify-content: space-between;\n    font-size: 1.1rem;\n    margin-bottom: .6rem;\n    padding: 0.5rem;\n    font-weight: 300;\n    cursor: pointer;\n    border-radius: 5px;\n    transition: background-color 0.2s ease;\n    user-select: none;\n}\n\n.nav-buttons:hover {\n    background-color: rgba(0, 0, 0, 0.075);\n}\n\n.menu li div {\n    display: flex;\n    align-items: center;\n    text-align: center;\n}\n\n.menu li i {\n    padding-right: 1rem;\n}\n\n.nav-buttons.active {\n    font-weight: 500;\n}\n\n.today i {\n    color: crimson;\n    opacity: 50%;\n}\n\n.inbox i {\n    color: gray;\n}\n\n.all i {\n    opacity: 70%;\n}\n\n.upcoming i {\n    color: blue;\n    opacity: 50%;\n}\n\n.important i {\n    color: red;\n    opacity: 50%;\n}\n\n.lists i {\n    color: darkorange;\n    opacity: 60%;\n}\n\n.menu .lists {\n    margin-bottom: .5rem;\n}\n\n.lists .fa-chevron-up {\n    color: black;\n    font-size: 1rem;\n    padding-top: 0.1rem;\n}\n\n.accordion {\n    padding-left: 2.5rem;\n    font-size: 1rem;\n    transition: max-height 0.2s ease-out;\n    overflow: hidden;\n    max-height: 0;\n\n}\n\n.create-new i {\n    padding-right: .25rem;\n    opacity: 65%;\n}\n\n.accordion .create-new {\n    padding-left: 1.5rem;\n    padding-top: .5rem;\n    cursor: pointer;\n    user-select: none;\n    transition: all 0.1s ease-in-out;\n    display: flex;\n    align-items: center;\n    text-align: center;\n}\n\n.accordion .create-new:hover {\n    color: #3a5a40;\n    transform: translateX(-5%);\n}\n\n.accordion .new-lists i {\n    padding-right: .5rem;\n    font-size: .5rem;\n    opacity: 50%;\n}\n\n.the-new-lists {\n    padding: .5rem;\n    width: 100%;\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n    text-align: center;\n    margin-bottom: 0.5rem;\n    user-select: none;\n    cursor: pointer;\n    font-weight: 300;\n    justify-content: space-between;\n}\n\n.the-new-lists div {\n    display: flex;\n    align-items: center;\n}\n\n.the-new-lists .trash {\n    justify-content: flex-end;\n}\n\n.the-new-lists .trash .fa-trash-can {\n    display: none;\n    font-size: 1rem;\n    color: grey;\n    transition: all 0.1s ease-in-out;\n}\n\n.the-new-lists .trash .fa-trash-can:hover {\n    color: black;\n    transform: scale(1.05);\n}\n\n.main-child {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 90%;\n}\n\n.main-area .main-child .title {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    width: 100%;\n    padding-top: 2rem;\n    padding-left: 1rem;\n    font-weight: 400;\n    font-size: 1.75rem;\n    color: #444;\n    user-select: none;\n}\n\n.main-area .main-child .todo-section {\n    width: 90%;\n    padding: 2rem 0rem;\n}\n\n.overlay,\n.overlay2 {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 500;\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    background-color: rgba(0, 0, 0, 0.45);\n    overflow: hidden;\n}\n\n.popup,\n.popup2 {\n    background-color: white;\n    max-width: 500px;\n    width: 100%;\n    border-radius: 5px;\n    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.4);\n    margin: 1rem;\n    z-index: 1000;\n    position: absolute;\n}\n\n.popup .fa-xmark,\n.popup2 .fa-xmark {\n    top: 1rem;\n    right: 1rem;\n    cursor: pointer;\n    padding: .5rem;\n    background-color: #eee;\n    color: #111;\n    border-radius: 50%;\n}\n\n.popup .popup-top,\n.popup2 .popup-top2 {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 1rem;\n    padding: 1.5rem;\n    border-bottom: solid 1px rgba(0, 0, 0, 0.2);\n}\n\n.popup .popup-top p {\n    font-size: 1.75rem;\n}\n\n.popup2 .popup-top2 p {\n    font-size: 1.25rem;\n    text-align: center;\n    padding-top: 1rem;\n}\n\n.popup .popup-mid,\n.popup2 .popup-mid {\n    padding: 0rem 1.5rem;\n    margin-bottom: 1rem;\n}\n\n.popup .popup-mid p,\n.popup2 .popup-mid p {\n    margin-bottom: .5rem;\n}\n\n.popup .popup-mid input,\n.popup2 .popup-mid input {\n    width: 100%;\n    font-size: 1.25rem;\n    padding: 0.25rem 0.2rem;\n    border-radius: 4px;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    transition: all 0.2s ease;\n}\n\n.popup .popup-mid input:hover,\n.popup2 .popup-mid input:hover {\n    border: solid 1px #3a5a40;\n}\n\n.popup .popup-mid input:focus,\n.popup2 .popup-mid input:focus {\n    border: 2px solid #3a5a40;\n    outline: none;\n}\n\n.popup .popup-bot,\n.popup2 .popup-bot2 {\n    padding: 0rem 1.5rem;\n    margin-bottom: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    gap: .5rem;\n}\n\n.popup .popup-bot #close,\n.popup2 .popup-bot2 #close {\n    font-size: 1.1rem;\n    padding: .5rem;\n    border-radius: 4px;\n    outline: none;\n    border: 1px solid rgba(0, 0, 0, 0.6);\n    color: rgba(0, 0, 0, 0.6);\n    background-color: transparent;\n    cursor: pointer;\n}\n\n.popup .popup-bot #close:hover,\n.popup2 .popup-bot2 #close:hover {\n    border: 1px solid transparent;\n    color: white;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.popup .popup-bot #addition,\n.popup2 .popup-bot2 #deletelist {\n    font-size: 1.1rem;\n    padding: .5rem 2rem;\n    border-radius: 4px;\n    outline: none;\n    border: 1px solid transparent;\n    color: white;\n    background-color: #588157;\n    cursor: pointer;\n}\n\n#deletetask {\n    font-size: 1.1rem;\n    padding: .5rem 2rem;\n    border-radius: 4px;\n    outline: none;\n    border: 1px solid transparent;\n    color: white;\n    background-color: #588157;\n    cursor: pointer;\n}\n\n.popup .popup-bot #addition:hover,\n.popup2 .popup-bot2 #deletelist:hover {\n    transform: scale(1.05);\n}\n\n.popup .popup-bot #addition:active,\n.popup2 .popup-bot2 #deletelist:active {\n    transform: scale(1);\n}\n\n.popup .fa-xmark:hover {\n    transform: scale(1.2);\n}\n\n.popup .fa-xmark:active {\n    transform: scale(1);\n}\n\n.popup .popup-bot #addition:hover {\n    transform: scale(1.05);\n}\n\n.popup .popup-bot #addition:active {\n    transform: scale(1);\n}\n\n.popup2 .popup-top2 {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 1rem;\n    padding: 1.5rem;\n    border-bottom: solid 1px rgba(0, 0, 0, 0.2);\n}\n\n.popup2 .popup-top2 .fa-triangle-exclamation {\n    font-size: 4.5rem;\n    color: red;\n    opacity: 70%;\n}\n\n.popup2 .popup-bot2 {\n    padding: 0rem 1.5rem;\n    margin-bottom: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    gap: .5rem;\n}\n\n.popup2 .popup-bot2 #deletelist {\n    font-size: 1.1rem;\n    padding: .5rem;\n    border-radius: 4px;\n    outline: none;\n    border: 1px solid transparent;\n    color: white;\n    background-color: #588157;\n    cursor: pointer;\n}\n\n.popup2 .popup-bot2 #deletelist:hover {\n    transform: scale(1.05);\n}\n\n.popup2 .popup-bot2 #deletelist:active {\n    transform: scale(1);\n}\n\n.popup2 .fa-xmark:hover {\n    transform: scale(1.2);\n}\n\n.popup2 .fa-xmark:active {\n    transform: scale(1);\n}\n\n.popup2 .popup-bot2 #deletelist:hover {\n    transform: scale(1.05);\n}\n\n.popup2 .popup-bot2 #deletelist:active {\n    transform: scale(1);\n}\n\n.popup2 .popup-top2 {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 1rem;\n    padding: 1.5rem;\n    border-bottom: solid 1px rgba(0, 0, 0, 0.2);\n}\n\n.popup2 .popup-top2 .fa-triangle-exclamation {\n    font-size: 4.5rem;\n    color: red;\n    opacity: 70%;\n}\n\n.popup2 .popup-bot2 {\n    padding: 0rem 1.5rem;\n    margin-bottom: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    gap: .5rem;\n}\n\n.popup2 .popup-bot2 #deletelist {\n    font-size: 1.1rem;\n    padding: .5rem;\n    border-radius: 4px;\n    outline: none;\n    border: 1px solid transparent;\n    color: white;\n    background-color: #588157;\n    cursor: pointer;\n}\n\n.popup2 .popup-bot2 #deletelist:hover {\n    transform: scale(1.05);\n}\n\n.popup2 .popup-bot2 #deletelist:active {\n    transform: scale(1);\n}\n\n.popup2 .fa-xmark:hover {\n    transform: scale(1.2);\n}\n\n.popup2 .fa-xmark:active {\n    transform: scale(1);\n}\n\n.popup2 .popup-bot2 #deletelist:hover {\n    transform: scale(1.05);\n}\n\n.popup2 .popup-bot2 #deletelist:active {\n    transform: scale(1);\n}\n\n.overlay3 {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 500;\n    width: 100vw;\n    height: 100vh;\n    position: fixed;\n    background-color: rgba(0, 0, 0, 0.45);\n    overflow: hidden;\n}\n\n.popup3 {\n    background-color: white;\n    max-width: 500px;\n    width: 100%;\n    border-radius: 5px;\n    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.4);\n    margin: 1rem;\n    z-index: 1000;\n    position: absolute;\n}\n\n.popup3 .fa-xmark {\n    top: 1rem;\n    right: 1rem;\n    cursor: pointer;\n    padding: .5rem;\n    background-color: #eee;\n    color: #111;\n    border-radius: 50%;\n}\n\n.popup3 .fa-xmark:hover {\n    transform: scale(1.2);\n}\n\n.popup3 .fa-xmark:active {\n    transform: scale(1);\n}\n\n.popup3 .popup-top3 {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 1rem;\n    padding: 1rem;\n    border-bottom: solid 1px rgba(0, 0, 0, 0.2);\n}\n\n.popup3 .popup-top3 p {\n    font-size: 1.5rem;\n}\n\n.popup3 .popup-mid3 {\n    padding: 0rem 1.5rem;\n    margin-bottom: 1rem;\n    display: flex;\n    gap: 1rem;\n    margin-bottom: 1rem;\n    flex-wrap: wrap;\n}\n\n.mid-left {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    width: 100%;\n}\n\n.mid-right {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    width: 100%;\n}\n\n.popup3 .popup-mid3 label {\n    font-size: 1.1rem;\n    font-weight: 300;\n    padding-top: 0.2rem;\n}\n\n.popup3 .popup-mid3 textarea {\n    resize: none;\n    border-radius: 4px;\n    padding: 0.25rem;\n    font-size: 1rem;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n}\n\n.popup3 .popup-mid3 textarea:focus {\n    border: 2px solid #3a5a40;\n    outline: none;\n}\n\n.popup3 .popup-mid3 input[type='text'] {\n    font-size: 1rem;\n    padding: 0.25rem 0.2rem;\n    border-radius: 4px;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    transition: all 0.2s ease;\n}\n\n.popup3 .popup-mid3 select {\n    font-size: 1rem;\n    padding: 0.25rem;\n    border-radius: 4px;\n    background-color: white;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n}\n\n.popup3 .popup-mid3 .mid-right #task-date {\n    font-size: 1rem;\n    padding: 0.25rem;\n    border-radius: 4px;\n    outline: none;\n    border: solid 1px rgba(0, 0, 0, 0.2);\n    width: 100%;\n}\n\n.popup3 .popup-mid3 input:hover {\n    border: solid 1px #3a5a40;\n}\n\n.popup3 .popup-mid3 input:focus {\n    border: 2px solid #3a5a40;\n    outline: none;\n}\n\n.popup3 .popup-bot3 {\n    padding: 0rem 1.5rem;\n    margin-bottom: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    gap: .5rem;\n}\n\n.popup3 .popup-bot3 #close {\n    font-size: 1.1rem;\n    padding: .5rem;\n    border-radius: 4px;\n    outline: none;\n    border: 1px solid rgba(0, 0, 0, 0.6);\n    color: rgba(0, 0, 0, 0.6);\n    background-color: transparent;\n    cursor: pointer;\n}\n\n.popup3 .popup-bot3 #close:hover {\n    border: 1px solid transparent;\n    color: white;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.popup3 .popup-bot3 #addtask {\n    font-size: 1.1rem;\n    padding: .5rem 2rem;\n    border-radius: 4px;\n    outline: none;\n    border: 1px solid transparent;\n    color: white;\n    background-color: #588157;\n    cursor: pointer;\n}\n\n#edittask {\n    font-size: 1.1rem;\n    padding: .5rem 2rem;\n    border-radius: 4px;\n    outline: none;\n    border: 1px solid transparent;\n    color: white;\n    background-color: #588157;\n    cursor: pointer;\n}\n\n.popup3 .popup-bot3 #addtask:hover {\n    transform: scale(1.05);\n}\n\n.popup3 .popup-bot3 #addtask:active {\n    transform: scale(1);\n}\n\n.task-container {\n    display: flex;\n    width: 100%;\n    flex-direction: column;\n    align-items: center;\n}\n\n.each-task-section-top {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    font-size: 1rem;\n    align-items: center;\n    margin-bottom: 1.5rem;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n    padding-bottom: 1rem;\n    cursor: pointer;\n}\n\n.task-left {\n    display: flex;\n    align-items: center;\n    padding-right: 1rem;\n    gap: .5rem;\n}\n\n.task-left #tasktitle {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 30vw;\n}\n\n.task-right {\n    display: flex;\n    gap: 1rem;\n    align-items: center;\n    color: gray;\n}\n\n.task-right .task-icons {\n    cursor: pointer;\n}\n\n.task-right .task-icons:hover {\n    color: black;\n    transform: scale(1.3);\n}\n\n.task-right .task-icons:active {\n    color: black;\n    transform: scale(1.15);\n}\n\n.each-task-section-bot {\n    overflow: hidden;\n    display: none;\n    align-items: center;\n    flex-wrap: wrap;\n    border-radius: 5px;\n    padding: 1rem;\n    border: 1px solid rgba(0, 0, 0, 0.15);\n    margin-bottom: 1.5rem;\n    margin-top: -.75rem;\n    justify-content: space-between;\n    width: 99%;\n    min-width: 200px;\n}\n\n.each-task-section-bot p {\n    font-weight: 300;\n}\n\n.bot-right,\n.bot-left {\n    width: 49%;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.right-top,\n.right-bot,\n.left-top,\n.left-bot {\n    display: flex;\n    gap: .75rem;\n    flex-wrap: wrap;\n}\n\n.right-top,\n.left-top {\n    padding-bottom: 1rem;\n    align-self: flex-start;\n    display: flex;\n    width: 100%;\n}\n\n.each-task-section-bot p.bolden {\n    font-weight: 500;\n}\n\n.right-top #long,\n.left-top #long {\n    word-wrap: break-word;\n    overflow: hidden;\n}\n\n.fa-flag {\n    opacity: 70%;\n    z-index: 0;\n}\n\n@media (max-width: 600px) {\n    .popup {\n        max-width: 90%;\n    }\n\n    #dateInput {\n        display: none;\n    }\n\n    .popup2 {\n        max-width: 90%;\n    }\n\n    .popup3 {\n        max-width: 90%;\n    }\n}\n\n@media (max-width: 300px) {\n    .main-area .main-child .todo-section {\n        width: 100%;\n    }\n\n    .main-area .main-child {\n        width: 100%;\n    }\n\n    .main-area .main-child .title {\n        padding-top: 0rem;\n        padding-left: 0rem;\n    }\n}\n\n@media (max-width: 480px) {\n    .main-area .main-child .todo-section {\n        width: 95%;\n    }\n\n    .main-area .main-child {\n        width: 100%;\n    }\n\n    .main-area .main-child .title {\n        padding-top: 0rem;\n        padding-left: 0rem;\n    }\n\n    .sidebar {\n        position: fixed;\n        left: -100%;\n    }\n}\n\n@media (max-width: 768px) {\n    .sidebar {\n        position: fixed;\n        left: -100%;\n    }\n\n    .main {\n        grid-template-columns: 1fr;\n        grid-template-areas: ' main-area';\n    }\n\n    .nav-inner {\n        width: 95%;\n    }\n}"],"sourceRoot":""}]);
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
/* harmony export */   findTodoById: () => (/* binding */ findTodoById),
/* harmony export */   getTodoListById: () => (/* binding */ getTodoListById),
/* harmony export */   getTodoLists: () => (/* binding */ getTodoLists),
/* harmony export */   getUsedIds: () => (/* binding */ getUsedIds),
/* harmony export */   saveTodoLists: () => (/* binding */ saveTodoLists),
/* harmony export */   saveUsedIds: () => (/* binding */ saveUsedIds),
/* harmony export */   uniqueId: () => (/* binding */ uniqueId)
/* harmony export */ });
class Todo {
  constructor(title, description, dueDate, priority, id = null) {
    this.id = id || uniqueId();
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
    throw new Error('All possible IDs have been used.');
  }

  let newId;
  do {
    newId = generateRandomId();
  } while (usedIds.includes(newId));

  usedIds.push(newId);
  saveUsedIds(usedIds);
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

function getTodoListById(id) {
  const todoLists = getTodoLists();
  return todoLists.find((todoList) => todoList.id === id);
}

function findTodoById(todoId) {
  const todoLists = getTodoLists();

  for (const todoList of todoLists) {
    const foundTodo = todoList.todos.find((todo) => todo.id === todoId);
    if (foundTodo) {
      return foundTodo;
    }
  }

  return null;
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



(0,_webpage__WEBPACK_IMPORTED_MODULE_1__["default"])();


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
  const mainArea = document.querySelector('.main-area');
  if (mainArea) {
    mainArea.remove();
  }

  const main = document.createElement('div');
  main.classList.add('main-area');

  const mainChild = document.createElement('div');
  mainChild.classList.add('main-child');

  const todoList = (0,_app__WEBPACK_IMPORTED_MODULE_0__.getTodoListById)(id);

  const title = document.createElement('div');
  title.classList.add('title');

  const h1 = document.createElement('p');
  h1.classList.add('todo-title');
  h1.textContent = '';
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

  const taskContainer = document.querySelector('.todo-section');
  taskContainer.innerHTML = '';

  const todoLists = (0,_app__WEBPACK_IMPORTED_MODULE_0__.getTodoLists)();
  let todosToRender = [];

  if (dataListId === '111111') {
    const today = new Date().toISOString().substr(0, 10);
    todosToRender = todoLists.flatMap((todoList) => todoList.todos.filter((todo) => todo.dueDate === today));
  } else if (dataListId === '222222') {
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);
    const nextWeekFormatted = nextWeek.toISOString().substr(0, 10);
    todosToRender = todoLists.flatMap((todoList) => todoList.todos.filter(
      (todo) => todo.dueDate <= nextWeekFormatted
                    && todo.dueDate >= new Date().toISOString().substr(0, 10),
    ));
  } else if (dataListId === '333333') {
    todosToRender = todoLists.flatMap((todoList) => todoList.todos);
  } else if (dataListId === '444444') {
    todosToRender = todoLists.flatMap((todoList) => todoList.todos.filter((todo) => todo.priority === 'high'));
  } else {
    const selectedDataListId = activeNavButton.getAttribute('data-list-id');
    todosToRender = (0,_app__WEBPACK_IMPORTED_MODULE_0__.getTodoListById)(selectedDataListId)?.todos || [];
  }

  todosToRender.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

  todosToRender.forEach((todo) => {
    createTask(
      todo.title,
      todo.dueDate,
      todo.description,
      todo.priority,
      todo.id,
    );
  });

  const mainChild = document.querySelector('.main-child');
  const tasks = mainChild.getElementsByClassName('each-task-section-top');
  for (const task of tasks) {
    task.addEventListener('click', () => {
      const taskParent = task.parentNode;
      const taskbot = taskParent.querySelector('.each-task-section-bot');
      const computedStyle = getComputedStyle(taskbot);
      if (computedStyle.display === 'none') {
        taskbot.style.display = 'flex';
      } else if (computedStyle.display === 'flex') {
        taskbot.style.display = 'none';
      }
    });
  }

  const generatedBins = document.getElementsByClassName('task-deleter');
  for (const bin of generatedBins) {
    bin.addEventListener('click', (event) => {
      event.stopPropagation();
      const taskId = bin.getAttribute('data-list-id');
      deleteTaskPopup(() => deleteTask(taskId));
    });
  }

  const edits = document.getElementsByClassName('task-editor');
  for (const editor of edits) {
    editor.addEventListener('click', (event) => {
      event.stopPropagation();
      const todo = (0,_app__WEBPACK_IMPORTED_MODULE_0__.findTodoById)(editor.getAttribute('data-list-id'));
      editTaskPopup(
        todo.title,
        todo.description,
        todo.dueDate,
        todo.priority,
        todo.id,
      );
      const todoLists = (0,_app__WEBPACK_IMPORTED_MODULE_0__.getTodoLists)();
      createListOptions(todoLists, dataListId);
    });
  }

  const priorityIcons = document.querySelectorAll('.task-priority');
  priorityIcons.forEach((icon) => {
    icon.addEventListener('click', (event) => {
      event.stopPropagation();
      const todoId = icon.getAttribute('data-list-id');
      const todoLists = (0,_app__WEBPACK_IMPORTED_MODULE_0__.getTodoLists)();

      const existingTodo = (0,_app__WEBPACK_IMPORTED_MODULE_0__.findTodoById)(todoId);

      const theTodoPriority = existingTodo.priority;
      console.log(theTodoPriority);

      let newPriority;
      if (theTodoPriority === 'low') {
        newPriority = 'medium';
      } else if (theTodoPriority === 'medium') {
        newPriority = 'high';
      } else if (theTodoPriority === 'high') {
        newPriority = 'low';
      }

      const todoPriority = updateTodoPriority(todoLists, todoId, newPriority);

      if (todoPriority) {
        (0,_app__WEBPACK_IMPORTED_MODULE_0__.saveTodoLists)(todoLists);
        renderTasks();
      }
    });
  });

  const checkboxes = document.querySelectorAll('.task-check');
  for (const checkbox of checkboxes) {
    checkbox.addEventListener('click', (event) => {
      event.stopPropagation();
      const taskId = checkbox.getAttribute('data-list-id');
      deleteTask(taskId);
    });
  }
}

function updateTodoPriority(todoLists, todoId, newPriority) {
  for (const todoList of todoLists) {
    const existingTodoIndex = todoList.todos.findIndex(
      (todo) => todo.id === todoId,
    );
    if (existingTodoIndex !== -1) {
      const existingTodo = todoList.todos[existingTodoIndex];
      const updatedTodo = {
        ...existingTodo,
        priority: newPriority,
      };

      todoList.todos.splice(existingTodoIndex, 1, updatedTodo);
      return true;
    }
  }
  return false;
}

function createTask(taskTitle, dueDate, description, priority, id) {
  const taskContainer = document.querySelector('.todo-section');

  const taskDiv = document.createElement('div');
  taskDiv.className = 'task-container';

  const taskSectionTop = document.createElement('div');
  taskSectionTop.className = 'each-task-section-top';

  const taskLeft = document.createElement('div');
  taskLeft.className = 'task-left';

  const taskCheckbox = document.createElement('input');
  taskCheckbox.type = 'checkbox';
  taskCheckbox.classList.add('task-check');
  taskCheckbox.setAttribute('data-list-id', id);
  taskLeft.appendChild(taskCheckbox);

  const taskTitleP = document.createElement('p');
  taskTitleP.id = 'tasktitle';
  taskTitleP.textContent = taskTitle;
  taskLeft.appendChild(taskTitleP);

  taskSectionTop.appendChild(taskLeft);

  const taskRight = document.createElement('div');
  taskRight.className = 'task-right';

  const editIcon = document.createElement('i');
  editIcon.className = 'fa-regular fa-pen-to-square task-icons task-editor';
  editIcon.setAttribute('data-list-id', id);
  editIcon.title = 'Edit task';
  taskRight.appendChild(editIcon);

  const priorityIcon = document.createElement('i');
  priorityIcon.className = 'fa-solid fa-flag task-icons task-priority';
  priorityIcon.setAttribute('data-list-id', id);
  priorityIcon.title = 'Change priority';
  priorityIcon.style.color = priority === 'high' ? 'red' : priority === 'medium' ? 'darkorange' : 'teal';

  taskRight.appendChild(priorityIcon);

  const deleteIcon = document.createElement('i');
  deleteIcon.className = 'fa-solid fa-trash-can task-icons task-deleter';
  deleteIcon.setAttribute('data-list-id', id);
  deleteIcon.title = 'Delete task';
  taskRight.appendChild(deleteIcon);

  taskSectionTop.appendChild(taskRight);
  taskDiv.appendChild(taskSectionTop);

  const taskSectionBot = document.createElement('div');
  taskSectionBot.className = 'each-task-section-bot';

  const botLeft = document.createElement('div');
  botLeft.className = 'bot-left';

  const leftTop = document.createElement('div');
  leftTop.className = 'left-top';

  const titleBolden = document.createElement('p');
  titleBolden.className = 'bolden';
  titleBolden.textContent = 'Title:';
  leftTop.appendChild(titleBolden);

  const titleP = document.createElement('p');
  titleP.textContent = taskTitle;
  titleP.setAttribute('id', 'long');
  leftTop.appendChild(titleP);

  botLeft.appendChild(leftTop);

  const leftBot = document.createElement('div');
  leftBot.className = 'left-bot';

  const dueDateBolden = document.createElement('p');
  dueDateBolden.className = 'bolden';
  dueDateBolden.textContent = 'Due date:';
  leftBot.appendChild(dueDateBolden);

  const dueDateP = document.createElement('p');
  dueDateP.textContent = dueDate;
  leftBot.appendChild(dueDateP);

  botLeft.appendChild(leftBot);
  taskSectionBot.appendChild(botLeft);

  const botRight = document.createElement('div');
  botRight.className = 'bot-right';

  const rightTop = document.createElement('div');
  rightTop.className = 'right-top';

  const descriptionBolden = document.createElement('p');
  descriptionBolden.className = 'bolden';
  descriptionBolden.textContent = 'Description:';
  rightTop.appendChild(descriptionBolden);

  const descriptionP = document.createElement('p');
  descriptionP.textContent = description;
  descriptionP.setAttribute('id', 'long');
  rightTop.appendChild(descriptionP);

  botRight.appendChild(rightTop);

  const rightBot = document.createElement('div');
  rightBot.className = 'right-bot';

  const priorityBolden = document.createElement('p');
  priorityBolden.className = 'bolden';
  priorityBolden.textContent = 'Priority:';
  rightBot.appendChild(priorityBolden);

  const priorityP = document.createElement('p');
  priorityP.textContent = priority;
  rightBot.appendChild(priorityP);

  botRight.appendChild(rightBot);
  taskSectionBot.appendChild(botRight);
  taskDiv.appendChild(taskSectionBot);

  taskContainer.appendChild(taskDiv);
}

function editTaskPopup(title, description, date, priority, id) {
  const overlay = document.createElement('div');
  overlay.className = 'overlay3';

  const popup = document.createElement('div');
  popup.className = 'popup3';

  const popupTop = document.createElement('div');
  popupTop.className = 'popup-top3';

  const titleText = document.createElement('p');
  titleText.textContent = 'Edit Task';
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
  titleInput.value = title;
  midLeft.appendChild(titleInput);

  const titleAlert = document.createElement('p');
  titleAlert.classList.add('title-alert');
  titleAlert.textContent = 'Title is required.';
  titleAlert.style.color = 'red';
  titleAlert.style.marginTop = '';
  titleAlert.style.display = 'none';
  midLeft.appendChild(titleAlert);

  const descriptionLabel = document.createElement('label');
  descriptionLabel.textContent = 'Description:';
  midLeft.appendChild(descriptionLabel);

  const descriptionTextarea = document.createElement('textarea');
  descriptionTextarea.id = 'description';
  descriptionTextarea.cols = 30;
  descriptionTextarea.rows = 4;
  descriptionTextarea.maxLength = 180;
  descriptionTextarea.value = description;
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
  dateInput.value = date;
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
  ['Low', 'Medium', 'High'].forEach((priorityText) => {
    const option = document.createElement('option');
    option.value = priorityText.toLowerCase();
    option.textContent = priorityText;
    if (priorityText.toLowerCase() === priority) {
      option.selected = true;
    }
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
  addTaskButton.id = 'edittask';
  addTaskButton.textContent = 'Edit Task';
  addTaskButton.addEventListener('click', () => {
    validateAndEditTask(id);
  });
  popupBot.appendChild(addTaskButton);

  popup.appendChild(popupBot);

  overlay.appendChild(popup);

  const mainContent = document.getElementById('content');
  mainContent.appendChild(overlay);
}

function closeOverlay() {
  const overlay = document.querySelector('.overlay3');
  overlay.remove();
}

function deleteTaskPopup(confirmCallback) {
  const overlay = document.createElement('div');
  overlay.className = 'overlay2';

  const popup = document.createElement('div');
  popup.className = 'popup2';

  const popupTop = document.createElement('div');
  popupTop.className = 'popup-top2';

  const triangleIcon = document.createElement('i');
  triangleIcon.className = 'fa-solid fa-triangle-exclamation';

  const popupMessage = document.createElement('p');
  popupMessage.textContent = 'Are you sure you want to delete this task?';

  const popupBot = document.createElement('div');
  popupBot.className = 'popup-bot2';

  const closeButton = document.createElement('button');
  closeButton.id = 'close';
  closeButton.textContent = 'Close';
  closeButton.addEventListener('click', () => {
    closeOverlay2();
  });

  const confirmButton = document.createElement('button');
  confirmButton.id = 'deletetask';
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

function deleteTask(todoId) {
  const todoLists = (0,_app__WEBPACK_IMPORTED_MODULE_0__.getTodoLists)();
  const usedIds = (0,_app__WEBPACK_IMPORTED_MODULE_0__.getUsedIds)();

  for (const todoList of todoLists) {
    const todoIndex = todoList.todos.findIndex((todo) => todo.id === todoId);
    if (todoIndex !== -1) {
      todoList.todos.splice(todoIndex, 1);
      (0,_app__WEBPACK_IMPORTED_MODULE_0__.saveTodoLists)(todoLists);

      const idIndex = usedIds.indexOf(todoId);
      if (idIndex !== -1) {
        usedIds.splice(idIndex, 1);
        (0,_app__WEBPACK_IMPORTED_MODULE_0__.saveUsedIds)(usedIds);
      }

      renderTasks();
      return;
    }
  }

  console.error('Todo not found');
}

function closeOverlay2() {
  const overlay = document.querySelector('.overlay2');
  overlay.remove();
}

function validateAndEditTask(id) {
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

    deleteTask(id);

    const newTodo = new _app__WEBPACK_IMPORTED_MODULE_0__.Todo(
      titleInput.value,
      description.value,
      dateInput.value,
      prioritySelect.value,
      id,
    );

    addTodoToTodoList(selectedValue, newTodo);

    renderTasks();
    closeOverlay();
  }
}

function createListOptions(todoLists, listvalue) {
  const listSelect = document.getElementById('thelist');

  listSelect.innerHTML = '';
  const ignoreIds = ['111111', '222222', '333333', '444444'];

  todoLists.forEach((list) => {
    if (!ignoreIds.includes(list.id)) {
      const listOption = document.createElement('option');
      listOption.value = list.id;
      listOption.textContent = list.name;
      listSelect.appendChild(listOption);
    }
  });

  listSelect.value = listvalue;
}

function addTodoToTodoList(selectedValue, newTodo) {
  const originalTodoList = (0,_app__WEBPACK_IMPORTED_MODULE_0__.getTodoListById)(selectedValue);

  if (!originalTodoList) {
    console.log('TodoList not found for the selected value.');
    return;
  }

  const updatedTodoList = new _app__WEBPACK_IMPORTED_MODULE_0__.TodoList(
    originalTodoList.name,
    originalTodoList.id,
  );

  updatedTodoList.todos = [...originalTodoList.todos, newTodo];

  const todoLists = (0,_app__WEBPACK_IMPORTED_MODULE_0__.getTodoLists)();
  const updatedTodoLists = todoLists.map((todoList) => (todoList.id === selectedValue ? updatedTodoList : todoList));

  localStorage.setItem('todoLists', JSON.stringify(updatedTodoLists));

  renderTasks();
}

function initialiseMain(id) {
  createMain(id);
  renderTasks();
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
  inbox.setAttribute('data-list-id', '000000');
  inbox.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(inbox);
    (0,_main_js__WEBPACK_IMPORTED_MODULE_1__["default"])(inbox.getAttribute('data-list-id'));
  });

  const today = createSidebarItem('today', 'fa-calendar-day', 'Today');
  today.setAttribute('data-list-id', '111111');
  today.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(today);
    (0,_main_js__WEBPACK_IMPORTED_MODULE_1__["default"])(today.getAttribute('data-list-id'));
  });

  const upcoming = createSidebarItem('upcoming', 'fa-calendar-week', 'Upcoming');
  upcoming.setAttribute('data-list-id', '222222');
  upcoming.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(upcoming);
    (0,_main_js__WEBPACK_IMPORTED_MODULE_1__["default"])(upcoming.getAttribute('data-list-id'));
  });

  const all = createSidebarItem('all', 'fa-calendar-days', 'All');
  all.setAttribute('data-list-id', '333333');
  all.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(all);
    (0,_main_js__WEBPACK_IMPORTED_MODULE_1__["default"])(all.getAttribute('data-list-id'));
  });

  const important = createSidebarItem('important', 'fa-star', 'Important');
  important.setAttribute('data-list-id', '444444');
  important.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(important);
    (0,_main_js__WEBPACK_IMPORTED_MODULE_1__["default"])(important.getAttribute('data-list-id'));
  });

  const lists = document.createElement('li');
  lists.classList.add('lists');
  lists.innerHTML = '<div><i class="fa-solid fa-list-check"></i> <p>Lists</p></div> <div><i class="fa-solid fa-chevron-up"></i></div>';
  lists.addEventListener('click', listClick);

  const accordion = document.createElement('div');
  accordion.classList.add('accordion');

  const newLists = document.createElement('div');
  newLists.classList.add('new-lists');

  const createNew = document.createElement('div');
  createNew.classList.add('create-new');
  createNew.innerHTML = '<i class="fa-solid fa-plus"></i> New List';
  createNew.addEventListener('click', () => {
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
  menu.appendChild(accordion);

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
  const buttons = document.querySelectorAll('.nav-buttons');

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove('active');
    }
  });

  button.classList.add('active');
}

function renderTodoLists() {
  const todoLists = (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.getTodoLists)();
  const newLists = document.querySelector('.new-lists');

  newLists.innerHTML = '';

  const nonDefaultTodoLists = todoLists.filter((todoList) => !isDefaultTodoList(todoList.id));

  nonDefaultTodoLists.forEach((todoList) => {
    const listItem = newListItem(todoList.name, todoList.id);
    newLists.appendChild(listItem);
  });

  const title = document.querySelector('.todo-title');
  const titlecontent = title.textContent;

  const generatedDivs = document.getElementsByClassName('the-new-lists');
  for (const div of generatedDivs) {
    if (div.textContent === titlecontent) {
      setActiveButton(div);
    }
    const trashIcon = div.querySelector('.trash .fa-trash-can');
    div.addEventListener('mouseenter', () => {
      trashIcon.style.display = 'block';
    });

    div.addEventListener('mouseleave', () => {
      trashIcon.style.display = 'none';
    });

    div.addEventListener('click', () => {
      if (div.classList.contains('active')) return;
      setActiveButton(div);
      (0,_main_js__WEBPACK_IMPORTED_MODULE_1__["default"])(div.getAttribute('data-list-id'));
    });
  }

  const accordion = document.querySelector('.accordion');
  const generatedBins = accordion.getElementsByClassName('list-deleter');
  for (const bin of generatedBins) {
    bin.addEventListener('click', (event) => {
      event.stopPropagation();
      const listId = bin.getAttribute('data-list-id');
      deleteListPopup(() => deleteList(listId));
    });
  }
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
  closeButton.addEventListener('click', closeOverlay);

  const addButton = document.createElement('button');
  addButton.setAttribute('id', 'addition');
  addButton.textContent = 'Add List';
  addButton.addEventListener('click', addNewList);

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
  closeButton.addEventListener('click', () => {
    closeOverlay2();
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
  overlay.remove();
}

function deleteList(id) {
  const todoLists = (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.getTodoLists)();
  const usedIds = (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.getUsedIds)();

  const idIndex = usedIds.indexOf(id);
  if (idIndex !== -1) {
    usedIds.splice(idIndex, 1);
    (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.saveUsedIds)(usedIds);
  }

  const updatedTodoLists = todoLists.filter((list) => list.id !== id);
  (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.saveTodoLists)(updatedTodoLists);

  renderTodoLists();

  const inbox = document.querySelector('.inbox');
  setActiveButton(inbox);
  (0,_main_js__WEBPACK_IMPORTED_MODULE_1__["default"])('000000');
}

function closeOverlay2() {
  const overlay = document.querySelector('.overlay2');
  overlay.remove();
}

function newListItem(name, id) {
  const newListItem = document.createElement('div');
  newListItem.classList.add('nav-buttons', 'the-new-lists');
  newListItem.setAttribute('data-list-id', id);

  const newListItemChild = document.createElement('div');
  newListItemChild.innerHTML = `<i class="fa-solid fa-circle"></i>${name}</div>`;

  const newListItemChild2 = document.createElement('div');
  newListItemChild2.classList.add('trash');
  const theTrashIcon = document.createElement('i');
  theTrashIcon.classList.add('fa-regular', 'fa-trash-can', 'list-deleter');
  theTrashIcon.setAttribute('data-list-id', id);
  newListItemChild2.appendChild(theTrashIcon);

  newListItem.appendChild(newListItemChild);
  newListItem.appendChild(newListItemChild2);

  return newListItem;
}

function isDefaultTodoList(id) {
  const defaultTodoListIds = ['000000', '111111', '222222', '333333', '444444'];

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

    const newLists = document.querySelector('.new-lists');
    newLists.appendChild(newListItem(inputValue, newList.id));
    input.value = '';

    renderTodoLists();

    panel.style.maxHeight = `${panel.scrollHeight}px`;
    alert.style.display = 'none';

    closeOverlay();
  }
}

function listClick() {
  const lists = document.querySelector('.lists');
  const chevronIcon = lists.querySelector('.fa-chevron-up');
  chevronIcon.classList.toggle('fa-chevron-down');

  const panel = document.querySelector('.accordion');

  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = `${panel.scrollHeight}px`;
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
      main.style.gridTemplateColumns = '1fr';
      main.style.gridTemplateAreas = '"main-area"';
      button.classList.remove('fa-bars-staggered');
      button.classList.add('fa-bars');
    } else if (sidebar.style.left === '-100%') {
      sidebar.style.left = '0';
      sidebar.style.position = 'relative';
      main.style.gridTemplateColumns = '300px 1fr';
      main.style.gridTemplateAreas = '"sidebar main-area"';
      button.classList.remove('fa-bars');
      button.classList.add('fa-bars-staggered');
    }
  } else if (sidebar.style.left === '-100%') {
    sidebar.style.left = '0';
    button.classList.remove('fa-bars');
    button.classList.add('fa-bars-staggered');
  } else if (sidebar.style.left === '' || sidebar.style.left === '0px') {
    sidebar.style.left = '-100%';
    button.classList.remove('fa-bars-staggered');
    button.classList.add('fa-bars');
  }
}

function homeButtonClick() {
  const today = document.querySelector('.today');

  setActiveButton(today);
}

function initializeSidebar() {
  createSidebar();

  const toggleButton = document.getElementById('toggle-sidebar');
  toggleButton.addEventListener('click', sidebarAnimate);

  const homeButton = document.getElementById('toggle-home');
  homeButton.addEventListener('click', homeButtonClick);

  setActiveButton(document.querySelector('.inbox'));
  (0,_main_js__WEBPACK_IMPORTED_MODULE_1__["default"])('000000');

  renderTodoLists();
  (0,_main_js__WEBPACK_IMPORTED_MODULE_1__.renderTasks)();
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
  navInner.classList.add('nav-inner');

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

  centerDiv.appendChild(date);

  const addIcon = document.createElement('i');
  addIcon.classList.add('fa-solid', 'fa-plus');
  addIcon.addEventListener('click', () => {
    newTaskPopup();

    const todoLists = (0,_app_js__WEBPACK_IMPORTED_MODULE_2__.getTodoLists)();
    const navButtons = document.querySelectorAll('.nav-buttons');
    let activeNavButton = null;

    for (const button of navButtons) {
      if (button.classList.contains('active')) {
        activeNavButton = button;
        break;
      }
    }

    const dataListId = activeNavButton.getAttribute('data-list-id');
    createListOptions(todoLists, dataListId);
  });

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

  return nav;
}

function createMain() {
  const main = document.createElement('div');
  main.classList.add('main');
  main.setAttribute('id', 'main');

  return main;
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
  midLeft.appendChild(titleAlert);

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
  ['Low', 'Medium', 'High'].forEach((priorityText) => {
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
  addTaskButton.addEventListener('click', validateAndAddTask);
  popupBot.appendChild(addTaskButton);

  popup.appendChild(popupBot);

  overlay.appendChild(popup);

  const mainContent = document.getElementById('content');
  mainContent.appendChild(overlay);
}

function closeOverlay() {
  const overlay = document.querySelector('.overlay3');
  overlay.remove();
}

function createListOptions(todoLists, listvalue) {
  const listSelect = document.getElementById('thelist');

  listSelect.innerHTML = '';
  const ignoreIds = ['111111', '222222', '333333', '444444'];

  todoLists.forEach((list) => {
    if (!ignoreIds.includes(list.id)) {
      const listOption = document.createElement('option');
      listOption.value = list.id;
      listOption.textContent = list.name;
      listSelect.appendChild(listOption);
    }
  });

  listSelect.value = listvalue;
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

    const theTodo = new _app_js__WEBPACK_IMPORTED_MODULE_2__.Todo(titleInput.value, description.value, dateInput.value, prioritySelect.value);
    addTodoToTodoList(selectedValue, theTodo);

    closeOverlay();
  }
}

function addTodoToTodoList(selectedValue, newTodo) {
  const originalTodoList = (0,_app_js__WEBPACK_IMPORTED_MODULE_2__.getTodoListById)(selectedValue);

  if (!originalTodoList) {
    console.log('TodoList not found for the selected value.');
    return;
  }

  const updatedTodoList = new _app_js__WEBPACK_IMPORTED_MODULE_2__.TodoList(originalTodoList.name, originalTodoList.id);

  updatedTodoList.todos = [...originalTodoList.todos, newTodo];

  const todoLists = (0,_app_js__WEBPACK_IMPORTED_MODULE_2__.getTodoLists)();
  const updatedTodoLists = todoLists.map((todoList) => (todoList.id === selectedValue ? updatedTodoList : todoList));

  localStorage.setItem('todoLists', JSON.stringify(updatedTodoLists));

  (0,_main__WEBPACK_IMPORTED_MODULE_1__.renderTasks)();
}

function createDefaultTodoLists() {
  const defaultListsData = [
    { name: 'Inbox', id: '000000' },
    { name: 'Today', id: '111111' },
    { name: 'Upcoming', id: '222222' },
    { name: 'All', id: '333333' },
    { name: 'Important', id: '444444' },
  ];

  const existingLists = (0,_app_js__WEBPACK_IMPORTED_MODULE_2__.getTodoLists)();
  const missingListsData = defaultListsData.filter((defaultList) => !existingLists.some((existingList) => existingList.name === defaultList.name));

  const updatedLists = existingLists.concat(missingListsData.map((data) => new _app_js__WEBPACK_IMPORTED_MODULE_2__.TodoList(data.name, data.id)));
  (0,_app_js__WEBPACK_IMPORTED_MODULE_2__.saveTodoLists)(updatedLists);

  updateUsedIds(defaultListsData.map((list) => list.id));
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
  const button = document.getElementById('toggle-sidebar');

  if (screenWidth <= 768) {
    if (screenWidth <= 300) {
      sidebar.style.width = `${screenWidth}px`;
    } else {
      sidebar.style.width = '300px';
    }
    sidebar.style.position = 'fixed';
    sidebar.style.left = '-100%';
    main.style.gridTemplateColumns = '1fr';
    main.style.gridTemplateAreas = '"main-area"';
    button.classList.remove('fa-bars-staggered');
    button.classList.add('fa-bars');
  } else {
    sidebar.style.left = '0';
    sidebar.style.position = 'relative';
    sidebar.style.width = '';
    main.style.gridTemplateColumns = '300px 1fr';
    main.style.gridTemplateAreas = '"sidebar main-area"';
    button.classList.remove('fa-bars');
    button.classList.add('fa-bars-staggered');
  }
}

function createWebpage() {
  const mainContent = document.getElementById('content');

  mainContent.appendChild(createNav());
  mainContent.appendChild(createMain());

  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split('T')[0];
  document.getElementById('dateInput').value = formattedDate;

  createDefaultTodoLists();

  (0,_sidebar__WEBPACK_IMPORTED_MODULE_0__["default"])();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHdJQUF3SSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcseUJBQXlCO0FBQ3hOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9B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QTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztB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QTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHdCQUF3Qix5Q0FBSTtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsd0RBQWU7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCQUE4Qiw2Q0FBUTs7QUFFdEM7O0FBRUEsb0JBQW9CLHFEQUFZO0FBQ2hDOztBQUVBOztBQUVBLEVBQUUsa0RBQVc7QUFDYjs7QUFFQTtBQUNBO0FBQ0EsTUFBTSw2QkFBNkI7QUFDbkMsTUFBTSw2QkFBNkI7QUFDbkMsTUFBTSxnQ0FBZ0M7QUFDdEMsTUFBTSwyQkFBMkI7QUFDakMsTUFBTSxpQ0FBaUM7QUFDdkM7O0FBRUEsd0JBQXdCLHFEQUFZO0FBQ3BDOztBQUVBLCtFQUErRSw2Q0FBUTtBQUN2RixFQUFFLHNEQUFhOztBQUVmO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsbURBQVU7QUFDNUI7QUFDQSxFQUFFLG9EQUFXO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLFlBQVk7QUFDM0MsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsRUFBRSxvREFBaUI7O0FBRW5COztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Rlc3QtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVzdC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVzdC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Rlc3QtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZXN0LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Rlc3QtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZXN0LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVzdC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVzdC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGVzdC1wYWdlLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly90ZXN0LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVzdC1wYWdlLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vdGVzdC1wYWdlLy4vc3JjL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdGVzdC1wYWdlLy4vc3JjL3dlYnBhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ccmljb2xhZ2UrR3JvdGVzcXVlOm9wc3osd2dodEAxMC4uNDgsMjAwOzEwLi40OCwzMDA7MTAuLjQ4LDQwMDsxMC4uNDgsNTAwOzEwLi40OCw2MDA7MTAuLjQ4LDcwMDsxMC4uNDgsODAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LWZhbWlseTogVWJ1bnR1LCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5IHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ubWFpbi1jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ1cHggMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgICduYXZiYXInXG4gICAgICAgICdtYWluJztcbn1cblxuLm5hdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0NGU0MTtcbiAgICBncmlkLWFyZWE6IG5hdmJhcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6ICNmMWZhZWU7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogMTAwO1xufVxuXG4ubmF2LWlubmVyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5sZWZ0LW5hdixcbi5yaWdodC1uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmxvZ28ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbiAgICBnYXA6IDAuMjVyZW07XG4gICAgZm9udC1mYW1pbHk6IDJyZW07XG4gICAgY29sb3I6ICNmMWZhZWU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5uYXYgLmZhLXBsdXMge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xufVxuXG4ubmF2IC5mYS1wbHVzOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xufVxuXG4ubmF2IC5mYS1wbHVzOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbn1cblxuLmxlZnQtbmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGdhcDogMS41cmVtO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbn1cblxuLmxlZnQtbmF2IC5mYS1ob3VzZSB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xufVxuXG4ubGVmdC1uYXYgLmZhLWJhcnMsXG4uZmEtYmFycy1zdGFnZ2VyZWQge1xuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbn1cblxuLm5hdiAuZmEtc29saWQge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2Zvcm06IDAuMnMgZWFzZTtcbn1cblxuLmxlZnQtbmF2IC5mYS1zb2xpZDpob3ZlciB7XG4gICAgb3BhY2l0eTogNTAlO1xufVxuXG4ubGVmdC1uYXYgLmZhLXNvbGlkOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbn1cblxuLmNlbnRlci1uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNkYXRlSW5wdXQge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4ODE1NztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogMC40cmVtIDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ubWFpbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI4NXB4IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnc2lkZWJhciBtYWluLWFyZWEnO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNpZGViYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgICB6LWluZGV4OiA1MDtcbn1cblxuLm1haW4tYXJlYSB7XG4gICAgZ3JpZC1hcmVhOiBtYWluLWFyZWE7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLm1lbnUge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4ubWVudSBsaSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogLjZyZW07XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLm5hdi1idXR0b25zOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcbn1cblxuLm1lbnUgbGkgZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWVudSBsaSBpIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xufVxuXG4ubmF2LWJ1dHRvbnMuYWN0aXZlIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udG9kYXkgaSB7XG4gICAgY29sb3I6IGNyaW1zb247XG4gICAgb3BhY2l0eTogNTAlO1xufVxuXG4uaW5ib3ggaSB7XG4gICAgY29sb3I6IGdyYXk7XG59XG5cbi5hbGwgaSB7XG4gICAgb3BhY2l0eTogNzAlO1xufVxuXG4udXBjb21pbmcgaSB7XG4gICAgY29sb3I6IGJsdWU7XG4gICAgb3BhY2l0eTogNTAlO1xufVxuXG4uaW1wb3J0YW50IGkge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgb3BhY2l0eTogNTAlO1xufVxuXG4ubGlzdHMgaSB7XG4gICAgY29sb3I6IGRhcmtvcmFuZ2U7XG4gICAgb3BhY2l0eTogNjAlO1xufVxuXG4ubWVudSAubGlzdHMge1xuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xufVxuXG4ubGlzdHMgLmZhLWNoZXZyb24tdXAge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgcGFkZGluZy10b3A6IDAuMXJlbTtcbn1cblxuLmFjY29yZGlvbiB7XG4gICAgcGFkZGluZy1sZWZ0OiAyLjVyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4ycyBlYXNlLW91dDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1heC1oZWlnaHQ6IDA7XG5cbn1cblxuLmNyZWF0ZS1uZXcgaSB7XG4gICAgcGFkZGluZy1yaWdodDogLjI1cmVtO1xuICAgIG9wYWNpdHk6IDY1JTtcbn1cblxuLmFjY29yZGlvbiAuY3JlYXRlLW5ldyB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gICAgcGFkZGluZy10b3A6IC41cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYWNjb3JkaW9uIC5jcmVhdGUtbmV3OmhvdmVyIHtcbiAgICBjb2xvcjogIzNhNWE0MDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUlKTtcbn1cblxuLmFjY29yZGlvbiAubmV3LWxpc3RzIGkge1xuICAgIHBhZGRpbmctcmlnaHQ6IC41cmVtO1xuICAgIGZvbnQtc2l6ZTogLjVyZW07XG4gICAgb3BhY2l0eTogNTAlO1xufVxuXG4udGhlLW5ldy1saXN0cyB7XG4gICAgcGFkZGluZzogLjVyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnRoZS1uZXctbGlzdHMgZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50aGUtbmV3LWxpc3RzIC50cmFzaCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLnRoZS1uZXctbGlzdHMgLnRyYXNoIC5mYS10cmFzaC1jYW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiBncmV5O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xufVxuXG4udGhlLW5ldy1saXN0cyAudHJhc2ggLmZhLXRyYXNoLWNhbjpob3ZlciB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbi5tYWluLWNoaWxkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogOTAlO1xufVxuXG4ubWFpbi1hcmVhIC5tYWluLWNoaWxkIC50aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEuNzVyZW07XG4gICAgY29sb3I6ICM0NDQ7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5tYWluLWFyZWEgLm1haW4tY2hpbGQgLnRvZG8tc2VjdGlvbiB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBwYWRkaW5nOiAycmVtIDByZW07XG59XG5cbi5vdmVybGF5LFxuLm92ZXJsYXkyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgei1pbmRleDogNTAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucG9wdXAsXG4ucG9wdXAyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnBvcHVwIC5mYS14bWFyayxcbi5wb3B1cDIgLmZhLXhtYXJrIHtcbiAgICB0b3A6IDFyZW07XG4gICAgcmlnaHQ6IDFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IC41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgY29sb3I6ICMxMTE7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ucG9wdXAgLnBvcHVwLXRvcCxcbi5wb3B1cDIgLnBvcHVwLXRvcDIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnBvcHVwIC5wb3B1cC10b3AgcCB7XG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xufVxuXG4ucG9wdXAyIC5wb3B1cC10b3AyIHAge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG59XG5cbi5wb3B1cCAucG9wdXAtbWlkLFxuLnBvcHVwMiAucG9wdXAtbWlkIHtcbiAgICBwYWRkaW5nOiAwcmVtIDEuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4ucG9wdXAgLnBvcHVwLW1pZCBwLFxuLnBvcHVwMiAucG9wdXAtbWlkIHAge1xuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xufVxuXG4ucG9wdXAgLnBvcHVwLW1pZCBpbnB1dCxcbi5wb3B1cDIgLnBvcHVwLW1pZCBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC4ycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbn1cblxuLnBvcHVwIC5wb3B1cC1taWQgaW5wdXQ6aG92ZXIsXG4ucG9wdXAyIC5wb3B1cC1taWQgaW5wdXQ6aG92ZXIge1xuICAgIGJvcmRlcjogc29saWQgMXB4ICMzYTVhNDA7XG59XG5cbi5wb3B1cCAucG9wdXAtbWlkIGlucHV0OmZvY3VzLFxuLnBvcHVwMiAucG9wdXAtbWlkIGlucHV0OmZvY3VzIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjM2E1YTQwO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5wb3B1cCAucG9wdXAtYm90LFxuLnBvcHVwMiAucG9wdXAtYm90MiB7XG4gICAgcGFkZGluZzogMHJlbSAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBnYXA6IC41cmVtO1xufVxuXG4ucG9wdXAgLnBvcHVwLWJvdCAjY2xvc2UsXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNjbG9zZSB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgcGFkZGluZzogLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucG9wdXAgLnBvcHVwLWJvdCAjY2xvc2U6aG92ZXIsXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNjbG9zZTpob3ZlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLnBvcHVwIC5wb3B1cC1ib3QgI2FkZGl0aW9uLFxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdCB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgcGFkZGluZzogLjVyZW0gMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4ODE1NztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNkZWxldGV0YXNrIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBwYWRkaW5nOiAuNXJlbSAycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg4MTU3O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBvcHVwIC5wb3B1cC1ib3QgI2FkZGl0aW9uOmhvdmVyLFxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdDpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLnBvcHVwIC5wb3B1cC1ib3QgI2FkZGl0aW9uOmFjdGl2ZSxcbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4ucG9wdXAgLmZhLXhtYXJrOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbi5wb3B1cCAuZmEteG1hcms6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4ucG9wdXAgLnBvcHVwLWJvdCAjYWRkaXRpb246aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbi5wb3B1cCAucG9wdXAtYm90ICNhZGRpdGlvbjphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5wb3B1cDIgLnBvcHVwLXRvcDIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgcGFkZGluZzogMS41cmVtO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5wb3B1cDIgLnBvcHVwLXRvcDIgLmZhLXRyaWFuZ2xlLWV4Y2xhbWF0aW9uIHtcbiAgICBmb250LXNpemU6IDQuNXJlbTtcbiAgICBjb2xvcjogcmVkO1xuICAgIG9wYWNpdHk6IDcwJTtcbn1cblxuLnBvcHVwMiAucG9wdXAtYm90MiB7XG4gICAgcGFkZGluZzogMHJlbSAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBnYXA6IC41cmVtO1xufVxuXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0IHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4ODE1NztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4ucG9wdXAyIC5mYS14bWFyazpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuXG4ucG9wdXAyIC5mYS14bWFyazphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4ucG9wdXAyIC5wb3B1cC10b3AyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ucG9wdXAyIC5wb3B1cC10b3AyIC5mYS10cmlhbmdsZS1leGNsYW1hdGlvbiB7XG4gICAgZm9udC1zaXplOiA0LjVyZW07XG4gICAgY29sb3I6IHJlZDtcbiAgICBvcGFjaXR5OiA3MCU7XG59XG5cbi5wb3B1cDIgLnBvcHVwLWJvdDIge1xuICAgIHBhZGRpbmc6IDByZW0gMS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgZ2FwOiAuNXJlbTtcbn1cblxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdCB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgcGFkZGluZzogLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODgxNTc7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0OmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0OmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLnBvcHVwMiAuZmEteG1hcms6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuLnBvcHVwMiAuZmEteG1hcms6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0OmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0OmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLm92ZXJsYXkzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgei1pbmRleDogNTAwO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wb3B1cDMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucG9wdXAzIC5mYS14bWFyayB7XG4gICAgdG9wOiAxcmVtO1xuICAgIHJpZ2h0OiAxcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIGNvbG9yOiAjMTExO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnBvcHVwMyAuZmEteG1hcms6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuLnBvcHVwMyAuZmEteG1hcms6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4ucG9wdXAzIC5wb3B1cC10b3AzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ucG9wdXAzIC5wb3B1cC10b3AzIHAge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4ucG9wdXAzIC5wb3B1cC1taWQzIHtcbiAgICBwYWRkaW5nOiAwcmVtIDEuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4ubWlkLWxlZnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDAuNXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm1pZC1yaWdodCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMC41cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ucG9wdXAzIC5wb3B1cC1taWQzIGxhYmVsIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHBhZGRpbmctdG9wOiAwLjJyZW07XG59XG5cbi5wb3B1cDMgLnBvcHVwLW1pZDMgdGV4dGFyZWEge1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogMC4yNXJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ucG9wdXAzIC5wb3B1cC1taWQzIHRleHRhcmVhOmZvY3VzIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjM2E1YTQwO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5wb3B1cDMgLnBvcHVwLW1pZDMgaW5wdXRbdHlwZT0ndGV4dCddIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuXG4ucG9wdXAzIC5wb3B1cC1taWQzIHNlbGVjdCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHBhZGRpbmc6IDAuMjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnBvcHVwMyAucG9wdXAtbWlkMyAubWlkLXJpZ2h0ICN0YXNrLWRhdGUge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnBvcHVwMyAucG9wdXAtbWlkMyBpbnB1dDpob3ZlciB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzNhNWE0MDtcbn1cblxuLnBvcHVwMyAucG9wdXAtbWlkMyBpbnB1dDpmb2N1cyB7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzNhNWE0MDtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4ucG9wdXAzIC5wb3B1cC1ib3QzIHtcbiAgICBwYWRkaW5nOiAwcmVtIDEuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGdhcDogLjVyZW07XG59XG5cbi5wb3B1cDMgLnBvcHVwLWJvdDMgI2Nsb3NlIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wb3B1cDMgLnBvcHVwLWJvdDMgI2Nsb3NlOmhvdmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4ucG9wdXAzIC5wb3B1cC1ib3QzICNhZGR0YXNrIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBwYWRkaW5nOiAuNXJlbSAycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg4MTU3O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2VkaXR0YXNrIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBwYWRkaW5nOiAuNXJlbSAycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg4MTU3O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBvcHVwMyAucG9wdXAtYm90MyAjYWRkdGFzazpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLnBvcHVwMyAucG9wdXAtYm90MyAjYWRkdGFzazphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi50YXNrLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5lYWNoLXRhc2stc2VjdGlvbi10b3Age1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhc2stbGVmdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gICAgZ2FwOiAuNXJlbTtcbn1cblxuLnRhc2stbGVmdCAjdGFza3RpdGxlIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgbWF4LXdpZHRoOiAzMHZ3O1xufVxuXG4udGFzay1yaWdodCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDFyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogZ3JheTtcbn1cblxuLnRhc2stcmlnaHQgLnRhc2staWNvbnMge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhc2stcmlnaHQgLnRhc2staWNvbnM6aG92ZXIge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG59XG5cbi50YXNrLXJpZ2h0IC50YXNrLWljb25zOmFjdGl2ZSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG59XG5cbi5lYWNoLXRhc2stc2VjdGlvbi1ib3Qge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAtLjc1cmVtO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogOTklO1xuICAgIG1pbi13aWR0aDogMjAwcHg7XG59XG5cbi5lYWNoLXRhc2stc2VjdGlvbi1ib3QgcCB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmJvdC1yaWdodCxcbi5ib3QtbGVmdCB7XG4gICAgd2lkdGg6IDQ5JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucmlnaHQtdG9wLFxuLnJpZ2h0LWJvdCxcbi5sZWZ0LXRvcCxcbi5sZWZ0LWJvdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IC43NXJlbTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5yaWdodC10b3AsXG4ubGVmdC10b3Age1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmVhY2gtdGFzay1zZWN0aW9uLWJvdCBwLmJvbGRlbiB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnJpZ2h0LXRvcCAjbG9uZyxcbi5sZWZ0LXRvcCAjbG9uZyB7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5mYS1mbGFnIHtcbiAgICBvcGFjaXR5OiA3MCU7XG4gICAgei1pbmRleDogMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLnBvcHVwIHtcbiAgICAgICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgfVxuXG4gICAgI2RhdGVJbnB1dCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLnBvcHVwMiB7XG4gICAgICAgIG1heC13aWR0aDogOTAlO1xuICAgIH1cblxuICAgIC5wb3B1cDMge1xuICAgICAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzMDBweCkge1xuICAgIC5tYWluLWFyZWEgLm1haW4tY2hpbGQgLnRvZG8tc2VjdGlvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5tYWluLWFyZWEgLm1haW4tY2hpbGQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAubWFpbi1hcmVhIC5tYWluLWNoaWxkIC50aXRsZSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwcmVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDByZW07XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAubWFpbi1hcmVhIC5tYWluLWNoaWxkIC50b2RvLXNlY3Rpb24ge1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgIH1cblxuICAgIC5tYWluLWFyZWEgLm1haW4tY2hpbGQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAubWFpbi1hcmVhIC5tYWluLWNoaWxkIC50aXRsZSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwcmVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDByZW07XG4gICAgfVxuXG4gICAgLnNpZGViYXIge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGxlZnQ6IC0xMDAlO1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLnNpZGViYXIge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGxlZnQ6IC0xMDAlO1xuICAgIH1cblxuICAgIC5tYWluIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICcgbWFpbi1hcmVhJztcbiAgICB9XG5cbiAgICAubmF2LWlubmVyIHtcbiAgICAgICAgd2lkdGg6IDk1JTtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCOztjQUVVO0FBQ2Q7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFD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OztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLFdBQVc7SUFDZjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsV0FBVztJQUNmOztJQUVBO1FBQ0ksMEJBQTBCO1FBQzFCLGlDQUFpQztJQUNyQzs7SUFFQTtRQUNJLFVBQVU7SUFDZDtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJyaWNvbGFnZStHcm90ZXNxdWU6b3Bzeix3Z2h0QDEwLi40OCwyMDA7MTAuLjQ4LDMwMDsxMC4uNDgsNDAwOzEwLi40OCw1MDA7MTAuLjQ4LDYwMDsxMC4uNDgsNzAwOzEwLi40OCw4MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IFVidW50dSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDVweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAnbmF2YmFyJ1xcbiAgICAgICAgJ21haW4nO1xcbn1cXG5cXG4ubmF2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0NGU0MTtcXG4gICAgZ3JpZC1hcmVhOiBuYXZiYXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sb3I6ICNmMWZhZWU7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG4gICAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4ubmF2LWlubmVyIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubGVmdC1uYXYsXFxuLnJpZ2h0LW5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcXG4gICAgZ2FwOiAwLjI1cmVtO1xcbiAgICBmb250LWZhbWlseTogMnJlbTtcXG4gICAgY29sb3I6ICNmMWZhZWU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ubmF2IC5mYS1wbHVzIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgcGFkZGluZzogMC4yNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcXG59XFxuXFxuLm5hdiAuZmEtcGx1czpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ODg7XFxufVxcblxcbi5uYXYgLmZhLXBsdXM6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XFxuXFxuLmxlZnQtbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBnYXA6IDEuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcXG59XFxuXFxuLmxlZnQtbmF2IC5mYS1ob3VzZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XFxufVxcblxcbi5sZWZ0LW5hdiAuZmEtYmFycyxcXG4uZmEtYmFycy1zdGFnZ2VyZWQge1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XFxufVxcblxcbi5uYXYgLmZhLXNvbGlkIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IDAuMnMgZWFzZTtcXG59XFxuXFxuLmxlZnQtbmF2IC5mYS1zb2xpZDpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDUwJTtcXG59XFxuXFxuLmxlZnQtbmF2IC5mYS1zb2xpZDphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbn1cXG5cXG4uY2VudGVyLW5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNkYXRlSW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4ODE1NztcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBwYWRkaW5nOiAwLjRyZW0gMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyODVweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdzaWRlYmFyIG1haW4tYXJlYSc7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcXG4gICAgei1pbmRleDogNTA7XFxufVxcblxcbi5tYWluLWFyZWEge1xcbiAgICBncmlkLWFyZWE6IG1haW4tYXJlYTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5tZW51IHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5tZW51IGxpIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAuNnJlbTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbnM6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcXG59XFxuXFxuLm1lbnUgbGkgZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubWVudSBsaSBpIHtcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcXG59XFxuXFxuLm5hdi1idXR0b25zLmFjdGl2ZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi50b2RheSBpIHtcXG4gICAgY29sb3I6IGNyaW1zb247XFxuICAgIG9wYWNpdHk6IDUwJTtcXG59XFxuXFxuLmluYm94IGkge1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLmFsbCBpIHtcXG4gICAgb3BhY2l0eTogNzAlO1xcbn1cXG5cXG4udXBjb21pbmcgaSB7XFxuICAgIGNvbG9yOiBibHVlO1xcbiAgICBvcGFjaXR5OiA1MCU7XFxufVxcblxcbi5pbXBvcnRhbnQgaSB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIG9wYWNpdHk6IDUwJTtcXG59XFxuXFxuLmxpc3RzIGkge1xcbiAgICBjb2xvcjogZGFya29yYW5nZTtcXG4gICAgb3BhY2l0eTogNjAlO1xcbn1cXG5cXG4ubWVudSAubGlzdHMge1xcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcXG59XFxuXFxuLmxpc3RzIC5mYS1jaGV2cm9uLXVwIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmctdG9wOiAwLjFyZW07XFxufVxcblxcbi5hY2NvcmRpb24ge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMnMgZWFzZS1vdXQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIG1heC1oZWlnaHQ6IDA7XFxuXFxufVxcblxcbi5jcmVhdGUtbmV3IGkge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAuMjVyZW07XFxuICAgIG9wYWNpdHk6IDY1JTtcXG59XFxuXFxuLmFjY29yZGlvbiAuY3JlYXRlLW5ldyB7XFxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xcbiAgICBwYWRkaW5nLXRvcDogLjVyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5hY2NvcmRpb24gLmNyZWF0ZS1uZXc6aG92ZXIge1xcbiAgICBjb2xvcjogIzNhNWE0MDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01JSk7XFxufVxcblxcbi5hY2NvcmRpb24gLm5ldy1saXN0cyBpIHtcXG4gICAgcGFkZGluZy1yaWdodDogLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogLjVyZW07XFxuICAgIG9wYWNpdHk6IDUwJTtcXG59XFxuXFxuLnRoZS1uZXctbGlzdHMge1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRoZS1uZXctbGlzdHMgZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRoZS1uZXctbGlzdHMgLnRyYXNoIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLnRoZS1uZXctbGlzdHMgLnRyYXNoIC5mYS10cmFzaC1jYW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiBncmV5O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRoZS1uZXctbGlzdHMgLnRyYXNoIC5mYS10cmFzaC1jYW46aG92ZXIge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbi5tYWluLWNoaWxkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLm1haW4tYXJlYSAubWFpbi1jaGlsZCAudGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICAgIGNvbG9yOiAjNDQ0O1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLm1haW4tYXJlYSAubWFpbi1jaGlsZCAudG9kby1zZWN0aW9uIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgcGFkZGluZzogMnJlbSAwcmVtO1xcbn1cXG5cXG4ub3ZlcmxheSxcXG4ub3ZlcmxheTIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgei1pbmRleDogNTAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5wb3B1cCxcXG4ucG9wdXAyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4ucG9wdXAgLmZhLXhtYXJrLFxcbi5wb3B1cDIgLmZhLXhtYXJrIHtcXG4gICAgdG9wOiAxcmVtO1xcbiAgICByaWdodDogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gICAgY29sb3I6ICMxMTE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnBvcHVwIC5wb3B1cC10b3AsXFxuLnBvcHVwMiAucG9wdXAtdG9wMiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4ucG9wdXAgLnBvcHVwLXRvcCBwIHtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbn1cXG5cXG4ucG9wdXAyIC5wb3B1cC10b3AyIHAge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxufVxcblxcbi5wb3B1cCAucG9wdXAtbWlkLFxcbi5wb3B1cDIgLnBvcHVwLW1pZCB7XFxuICAgIHBhZGRpbmc6IDByZW0gMS41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4ucG9wdXAgLnBvcHVwLW1pZCBwLFxcbi5wb3B1cDIgLnBvcHVwLW1pZCBwIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XFxufVxcblxcbi5wb3B1cCAucG9wdXAtbWlkIGlucHV0LFxcbi5wb3B1cDIgLnBvcHVwLW1pZCBpbnB1dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC4ycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG59XFxuXFxuLnBvcHVwIC5wb3B1cC1taWQgaW5wdXQ6aG92ZXIsXFxuLnBvcHVwMiAucG9wdXAtbWlkIGlucHV0OmhvdmVyIHtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzNhNWE0MDtcXG59XFxuXFxuLnBvcHVwIC5wb3B1cC1taWQgaW5wdXQ6Zm9jdXMsXFxuLnBvcHVwMiAucG9wdXAtbWlkIGlucHV0OmZvY3VzIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzNhNWE0MDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnBvcHVwIC5wb3B1cC1ib3QsXFxuLnBvcHVwMiAucG9wdXAtYm90MiB7XFxuICAgIHBhZGRpbmc6IDByZW0gMS41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBnYXA6IC41cmVtO1xcbn1cXG5cXG4ucG9wdXAgLnBvcHVwLWJvdCAjY2xvc2UsXFxuLnBvcHVwMiAucG9wdXAtYm90MiAjY2xvc2Uge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucG9wdXAgLnBvcHVwLWJvdCAjY2xvc2U6aG92ZXIsXFxuLnBvcHVwMiAucG9wdXAtYm90MiAjY2xvc2U6aG92ZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5wb3B1cCAucG9wdXAtYm90ICNhZGRpdGlvbixcXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0IHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIHBhZGRpbmc6IC41cmVtIDJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4ODE1NztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jZGVsZXRldGFzayB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBwYWRkaW5nOiAuNXJlbSAycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODgxNTc7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBvcHVwIC5wb3B1cC1ib3QgI2FkZGl0aW9uOmhvdmVyLFxcbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4ucG9wdXAgLnBvcHVwLWJvdCAjYWRkaXRpb246YWN0aXZlLFxcbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLnBvcHVwIC5mYS14bWFyazpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLnBvcHVwIC5mYS14bWFyazphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4ucG9wdXAgLnBvcHVwLWJvdCAjYWRkaXRpb246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4ucG9wdXAgLnBvcHVwLWJvdCAjYWRkaXRpb246YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLnBvcHVwMiAucG9wdXAtdG9wMiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi5wb3B1cDIgLnBvcHVwLXRvcDIgLmZhLXRyaWFuZ2xlLWV4Y2xhbWF0aW9uIHtcXG4gICAgZm9udC1zaXplOiA0LjVyZW07XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIG9wYWNpdHk6IDcwJTtcXG59XFxuXFxuLnBvcHVwMiAucG9wdXAtYm90MiB7XFxuICAgIHBhZGRpbmc6IDByZW0gMS41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBnYXA6IC41cmVtO1xcbn1cXG5cXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0IHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODgxNTc7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdDpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLnBvcHVwMiAuZmEteG1hcms6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5wb3B1cDIgLmZhLXhtYXJrOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0OmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5wb3B1cDIgLnBvcHVwLXRvcDIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4ucG9wdXAyIC5wb3B1cC10b3AyIC5mYS10cmlhbmdsZS1leGNsYW1hdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogNC41cmVtO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBvcGFjaXR5OiA3MCU7XFxufVxcblxcbi5wb3B1cDIgLnBvcHVwLWJvdDIge1xcbiAgICBwYWRkaW5nOiAwcmVtIDEuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgZ2FwOiAuNXJlbTtcXG59XFxuXFxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdCB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg4MTU3O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0OmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5wb3B1cDIgLmZhLXhtYXJrOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4ucG9wdXAyIC5mYS14bWFyazphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0OmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdDphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4ub3ZlcmxheTMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgei1pbmRleDogNTAwO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnBvcHVwMyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLnBvcHVwMyAuZmEteG1hcmsge1xcbiAgICB0b3A6IDFyZW07XFxuICAgIHJpZ2h0OiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgICBjb2xvcjogIzExMTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ucG9wdXAzIC5mYS14bWFyazpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLnBvcHVwMyAuZmEteG1hcms6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLnBvcHVwMyAucG9wdXAtdG9wMyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLnBvcHVwMyAucG9wdXAtdG9wMyBwIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5wb3B1cDMgLnBvcHVwLW1pZDMge1xcbiAgICBwYWRkaW5nOiAwcmVtIDEuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5taWQtbGVmdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1pZC1yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnBvcHVwMyAucG9wdXAtbWlkMyBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBwYWRkaW5nLXRvcDogMC4ycmVtO1xcbn1cXG5cXG4ucG9wdXAzIC5wb3B1cC1taWQzIHRleHRhcmVhIHtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHBhZGRpbmc6IDAuMjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4ucG9wdXAzIC5wb3B1cC1taWQzIHRleHRhcmVhOmZvY3VzIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzNhNWE0MDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnBvcHVwMyAucG9wdXAtbWlkMyBpbnB1dFt0eXBlPSd0ZXh0J10ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC4ycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG59XFxuXFxuLnBvcHVwMyAucG9wdXAtbWlkMyBzZWxlY3Qge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDAuMjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLnBvcHVwMyAucG9wdXAtbWlkMyAubWlkLXJpZ2h0ICN0YXNrLWRhdGUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDAuMjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnBvcHVwMyAucG9wdXAtbWlkMyBpbnB1dDpob3ZlciB7XFxuICAgIGJvcmRlcjogc29saWQgMXB4ICMzYTVhNDA7XFxufVxcblxcbi5wb3B1cDMgLnBvcHVwLW1pZDMgaW5wdXQ6Zm9jdXMge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjM2E1YTQwO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ucG9wdXAzIC5wb3B1cC1ib3QzIHtcXG4gICAgcGFkZGluZzogMHJlbSAxLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGdhcDogLjVyZW07XFxufVxcblxcbi5wb3B1cDMgLnBvcHVwLWJvdDMgI2Nsb3NlIHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBvcHVwMyAucG9wdXAtYm90MyAjY2xvc2U6aG92ZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5wb3B1cDMgLnBvcHVwLWJvdDMgI2FkZHRhc2sge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgcGFkZGluZzogLjVyZW0gMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg4MTU3O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNlZGl0dGFzayB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBwYWRkaW5nOiAuNXJlbSAycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODgxNTc7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBvcHVwMyAucG9wdXAtYm90MyAjYWRkdGFzazpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbi5wb3B1cDMgLnBvcHVwLWJvdDMgI2FkZHRhc2s6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5lYWNoLXRhc2stc2VjdGlvbi10b3Age1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stbGVmdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuICAgIGdhcDogLjVyZW07XFxufVxcblxcbi50YXNrLWxlZnQgI3Rhc2t0aXRsZSB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBtYXgtd2lkdGg6IDMwdnc7XFxufVxcblxcbi50YXNrLXJpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLnRhc2stcmlnaHQgLnRhc2staWNvbnMge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLXJpZ2h0IC50YXNrLWljb25zOmhvdmVyIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxufVxcblxcbi50YXNrLXJpZ2h0IC50YXNrLWljb25zOmFjdGl2ZSB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcXG59XFxuXFxuLmVhY2gtdGFzay1zZWN0aW9uLWJvdCB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxuICAgIG1hcmdpbi10b3A6IC0uNzVyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDk5JTtcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmVhY2gtdGFzay1zZWN0aW9uLWJvdCBwIHtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLmJvdC1yaWdodCxcXG4uYm90LWxlZnQge1xcbiAgICB3aWR0aDogNDklO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5yaWdodC10b3AsXFxuLnJpZ2h0LWJvdCxcXG4ubGVmdC10b3AsXFxuLmxlZnQtYm90IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAuNzVyZW07XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnJpZ2h0LXRvcCxcXG4ubGVmdC10b3Age1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5lYWNoLXRhc2stc2VjdGlvbi1ib3QgcC5ib2xkZW4ge1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ucmlnaHQtdG9wICNsb25nLFxcbi5sZWZ0LXRvcCAjbG9uZyB7XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmZhLWZsYWcge1xcbiAgICBvcGFjaXR5OiA3MCU7XFxuICAgIHotaW5kZXg6IDA7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAucG9wdXAge1xcbiAgICAgICAgbWF4LXdpZHRoOiA5MCU7XFxuICAgIH1cXG5cXG4gICAgI2RhdGVJbnB1dCB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5wb3B1cDIge1xcbiAgICAgICAgbWF4LXdpZHRoOiA5MCU7XFxuICAgIH1cXG5cXG4gICAgLnBvcHVwMyB7XFxuICAgICAgICBtYXgtd2lkdGg6IDkwJTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMzAwcHgpIHtcXG4gICAgLm1haW4tYXJlYSAubWFpbi1jaGlsZCAudG9kby1zZWN0aW9uIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC5tYWluLWFyZWEgLm1haW4tY2hpbGQge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgLm1haW4tYXJlYSAubWFpbi1jaGlsZCAudGl0bGUge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDByZW07XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDByZW07XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAgIC5tYWluLWFyZWEgLm1haW4tY2hpbGQgLnRvZG8tc2VjdGlvbiB7XFxuICAgICAgICB3aWR0aDogOTUlO1xcbiAgICB9XFxuXFxuICAgIC5tYWluLWFyZWEgLm1haW4tY2hpbGQge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgLm1haW4tYXJlYSAubWFpbi1jaGlsZCAudGl0bGUge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDByZW07XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDByZW07XFxuICAgIH1cXG5cXG4gICAgLnNpZGViYXIge1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgbGVmdDogLTEwMCU7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgIC5zaWRlYmFyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIGxlZnQ6IC0xMDAlO1xcbiAgICB9XFxuXFxuICAgIC5tYWluIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJyBtYWluLWFyZWEnO1xcbiAgICB9XFxuXFxuICAgIC5uYXYtaW5uZXIge1xcbiAgICAgICAgd2lkdGg6IDk1JTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpZCA9IG51bGwpIHtcbiAgICB0aGlzLmlkID0gaWQgfHwgdW5pcXVlSWQoKTtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUb2RvTGlzdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGlkID0gbnVsbCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pZCA9IGlkIHx8IHVuaXF1ZUlkKCk7XG4gICAgdGhpcy50b2RvcyA9IFtdO1xuICB9XG5cbiAgYWRkVG9kbyh0b2RvKSB7XG4gICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tSWQoKSB7XG4gIGxldCBpZCA9ICcnO1xuICBjb25zdCBkaWdpdHMgPSAnMDEyMzQ1Njc4OSc7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRpZ2l0cy5sZW5ndGgpO1xuICAgIGlkICs9IGRpZ2l0c1tyYW5kb21JbmRleF07XG4gIH1cblxuICByZXR1cm4gaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlxdWVJZCgpIHtcbiAgY29uc3QgdXNlZElkcyA9IGdldFVzZWRJZHMoKTtcblxuICBpZiAodXNlZElkcy5sZW5ndGggPj0gMTAwMDAwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQWxsIHBvc3NpYmxlIElEcyBoYXZlIGJlZW4gdXNlZC4nKTtcbiAgfVxuXG4gIGxldCBuZXdJZDtcbiAgZG8ge1xuICAgIG5ld0lkID0gZ2VuZXJhdGVSYW5kb21JZCgpO1xuICB9IHdoaWxlICh1c2VkSWRzLmluY2x1ZGVzKG5ld0lkKSk7XG5cbiAgdXNlZElkcy5wdXNoKG5ld0lkKTtcbiAgc2F2ZVVzZWRJZHModXNlZElkcyk7XG4gIHJldHVybiBuZXdJZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZWRJZHMoKSB7XG4gIGNvbnN0IHVzZWRJZHNKU09OID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZWRJZHMnKTtcbiAgcmV0dXJuIHVzZWRJZHNKU09OID8gSlNPTi5wYXJzZSh1c2VkSWRzSlNPTikgOiBbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVVc2VkSWRzKHVzZWRJZHMpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZWRJZHMnLCBKU09OLnN0cmluZ2lmeSh1c2VkSWRzKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb2RvTGlzdHMoKSB7XG4gIGNvbnN0IHRvZG9MaXN0c0pTT04gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb0xpc3RzJyk7XG4gIHJldHVybiB0b2RvTGlzdHNKU09OID8gSlNPTi5wYXJzZSh0b2RvTGlzdHNKU09OKSA6IFtdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVRvZG9MaXN0cyh0b2RvTGlzdHMpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9MaXN0cycsIEpTT04uc3RyaW5naWZ5KHRvZG9MaXN0cykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9kb0xpc3RCeUlkKGlkKSB7XG4gIGNvbnN0IHRvZG9MaXN0cyA9IGdldFRvZG9MaXN0cygpO1xuICByZXR1cm4gdG9kb0xpc3RzLmZpbmQoKHRvZG9MaXN0KSA9PiB0b2RvTGlzdC5pZCA9PT0gaWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZFRvZG9CeUlkKHRvZG9JZCkge1xuICBjb25zdCB0b2RvTGlzdHMgPSBnZXRUb2RvTGlzdHMoKTtcblxuICBmb3IgKGNvbnN0IHRvZG9MaXN0IG9mIHRvZG9MaXN0cykge1xuICAgIGNvbnN0IGZvdW5kVG9kbyA9IHRvZG9MaXN0LnRvZG9zLmZpbmQoKHRvZG8pID0+IHRvZG8uaWQgPT09IHRvZG9JZCk7XG4gICAgaWYgKGZvdW5kVG9kbykge1xuICAgICAgcmV0dXJuIGZvdW5kVG9kbztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGNyZWF0ZVdlYnBhZ2UgZnJvbSAnLi93ZWJwYWdlJztcblxuY3JlYXRlV2VicGFnZSgpO1xuIiwiaW1wb3J0IHtcbiAgVG9kb0xpc3QsXG4gIFRvZG8sXG4gIHNhdmVUb2RvTGlzdHMsXG4gIGdldFRvZG9MaXN0cyxcbiAgZ2V0VG9kb0xpc3RCeUlkLFxuICBmaW5kVG9kb0J5SWQsXG4gIGdldFVzZWRJZHMsXG4gIHNhdmVVc2VkSWRzLFxufSBmcm9tICcuL2FwcCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oaWQpIHtcbiAgY29uc3QgbWFpbkFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1hcmVhJyk7XG4gIGlmIChtYWluQXJlYSkge1xuICAgIG1haW5BcmVhLnJlbW92ZSgpO1xuICB9XG5cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4tYXJlYScpO1xuXG4gIGNvbnN0IG1haW5DaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluQ2hpbGQuY2xhc3NMaXN0LmFkZCgnbWFpbi1jaGlsZCcpO1xuXG4gIGNvbnN0IHRvZG9MaXN0ID0gZ2V0VG9kb0xpc3RCeUlkKGlkKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuXG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBoMS5jbGFzc0xpc3QuYWRkKCd0b2RvLXRpdGxlJyk7XG4gIGgxLnRleHRDb250ZW50ID0gJyc7XG4gIGgxLnRleHRDb250ZW50ID0gdG9kb0xpc3QubmFtZTtcblxuICB0aXRsZS5hcHBlbmRDaGlsZChoMSk7XG5cbiAgY29uc3QgdG9kb1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kb1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgndG9kby1zZWN0aW9uJyk7XG5cbiAgbWFpbkNoaWxkLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgbWFpbkNoaWxkLmFwcGVuZENoaWxkKHRvZG9TZWN0aW9uKTtcblxuICBtYWluLmFwcGVuZENoaWxkKG1haW5DaGlsZCk7XG5cbiAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKG1haW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVGFza3MoKSB7XG4gIGNvbnN0IG5hdkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWJ1dHRvbnMnKTtcbiAgbGV0IGFjdGl2ZU5hdkJ1dHRvbiA9IG51bGw7XG5cbiAgZm9yIChjb25zdCBidXR0b24gb2YgbmF2QnV0dG9ucykge1xuICAgIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgYWN0aXZlTmF2QnV0dG9uID0gYnV0dG9uO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGF0YUxpc3RJZCA9IGFjdGl2ZU5hdkJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1pZCcpO1xuXG4gIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1zZWN0aW9uJyk7XG4gIHRhc2tDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgY29uc3QgdG9kb0xpc3RzID0gZ2V0VG9kb0xpc3RzKCk7XG4gIGxldCB0b2Rvc1RvUmVuZGVyID0gW107XG5cbiAgaWYgKGRhdGFMaXN0SWQgPT09ICcxMTExMTEnKSB7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDAsIDEwKTtcbiAgICB0b2Rvc1RvUmVuZGVyID0gdG9kb0xpc3RzLmZsYXRNYXAoKHRvZG9MaXN0KSA9PiB0b2RvTGlzdC50b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHRvZG8uZHVlRGF0ZSA9PT0gdG9kYXkpKTtcbiAgfSBlbHNlIGlmIChkYXRhTGlzdElkID09PSAnMjIyMjIyJykge1xuICAgIGNvbnN0IG5leHRXZWVrID0gbmV3IERhdGUoKTtcbiAgICBuZXh0V2Vlay5zZXREYXRlKG5leHRXZWVrLmdldERhdGUoKSArIDcpO1xuICAgIGNvbnN0IG5leHRXZWVrRm9ybWF0dGVkID0gbmV4dFdlZWsudG9JU09TdHJpbmcoKS5zdWJzdHIoMCwgMTApO1xuICAgIHRvZG9zVG9SZW5kZXIgPSB0b2RvTGlzdHMuZmxhdE1hcCgodG9kb0xpc3QpID0+IHRvZG9MaXN0LnRvZG9zLmZpbHRlcihcbiAgICAgICh0b2RvKSA9PiB0b2RvLmR1ZURhdGUgPD0gbmV4dFdlZWtGb3JtYXR0ZWRcbiAgICAgICAgICAgICAgICAgICAgJiYgdG9kby5kdWVEYXRlID49IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zdWJzdHIoMCwgMTApLFxuICAgICkpO1xuICB9IGVsc2UgaWYgKGRhdGFMaXN0SWQgPT09ICczMzMzMzMnKSB7XG4gICAgdG9kb3NUb1JlbmRlciA9IHRvZG9MaXN0cy5mbGF0TWFwKCh0b2RvTGlzdCkgPT4gdG9kb0xpc3QudG9kb3MpO1xuICB9IGVsc2UgaWYgKGRhdGFMaXN0SWQgPT09ICc0NDQ0NDQnKSB7XG4gICAgdG9kb3NUb1JlbmRlciA9IHRvZG9MaXN0cy5mbGF0TWFwKCh0b2RvTGlzdCkgPT4gdG9kb0xpc3QudG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLnByaW9yaXR5ID09PSAnaGlnaCcpKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzZWxlY3RlZERhdGFMaXN0SWQgPSBhY3RpdmVOYXZCdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWxpc3QtaWQnKTtcbiAgICB0b2Rvc1RvUmVuZGVyID0gZ2V0VG9kb0xpc3RCeUlkKHNlbGVjdGVkRGF0YUxpc3RJZCk/LnRvZG9zIHx8IFtdO1xuICB9XG5cbiAgdG9kb3NUb1JlbmRlci5zb3J0KChhLCBiKSA9PiBuZXcgRGF0ZShhLmR1ZURhdGUpIC0gbmV3IERhdGUoYi5kdWVEYXRlKSk7XG5cbiAgdG9kb3NUb1JlbmRlci5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgY3JlYXRlVGFzayhcbiAgICAgIHRvZG8udGl0bGUsXG4gICAgICB0b2RvLmR1ZURhdGUsXG4gICAgICB0b2RvLmRlc2NyaXB0aW9uLFxuICAgICAgdG9kby5wcmlvcml0eSxcbiAgICAgIHRvZG8uaWQsXG4gICAgKTtcbiAgfSk7XG5cbiAgY29uc3QgbWFpbkNoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY2hpbGQnKTtcbiAgY29uc3QgdGFza3MgPSBtYWluQ2hpbGQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZWFjaC10YXNrLXNlY3Rpb24tdG9wJyk7XG4gIGZvciAoY29uc3QgdGFzayBvZiB0YXNrcykge1xuICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCB0YXNrUGFyZW50ID0gdGFzay5wYXJlbnROb2RlO1xuICAgICAgY29uc3QgdGFza2JvdCA9IHRhc2tQYXJlbnQucXVlcnlTZWxlY3RvcignLmVhY2gtdGFzay1zZWN0aW9uLWJvdCcpO1xuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGFza2JvdCk7XG4gICAgICBpZiAoY29tcHV0ZWRTdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgdGFza2JvdC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgfSBlbHNlIGlmIChjb21wdXRlZFN0eWxlLmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgICB0YXNrYm90LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBnZW5lcmF0ZWRCaW5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFzay1kZWxldGVyJyk7XG4gIGZvciAoY29uc3QgYmluIG9mIGdlbmVyYXRlZEJpbnMpIHtcbiAgICBiaW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgY29uc3QgdGFza0lkID0gYmluLmdldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJyk7XG4gICAgICBkZWxldGVUYXNrUG9wdXAoKCkgPT4gZGVsZXRlVGFzayh0YXNrSWQpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGVkaXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFzay1lZGl0b3InKTtcbiAgZm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdHMpIHtcbiAgICBlZGl0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgY29uc3QgdG9kbyA9IGZpbmRUb2RvQnlJZChlZGl0b3IuZ2V0QXR0cmlidXRlKCdkYXRhLWxpc3QtaWQnKSk7XG4gICAgICBlZGl0VGFza1BvcHVwKFxuICAgICAgICB0b2RvLnRpdGxlLFxuICAgICAgICB0b2RvLmRlc2NyaXB0aW9uLFxuICAgICAgICB0b2RvLmR1ZURhdGUsXG4gICAgICAgIHRvZG8ucHJpb3JpdHksXG4gICAgICAgIHRvZG8uaWQsXG4gICAgICApO1xuICAgICAgY29uc3QgdG9kb0xpc3RzID0gZ2V0VG9kb0xpc3RzKCk7XG4gICAgICBjcmVhdGVMaXN0T3B0aW9ucyh0b2RvTGlzdHMsIGRhdGFMaXN0SWQpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgcHJpb3JpdHlJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLXByaW9yaXR5Jyk7XG4gIHByaW9yaXR5SWNvbnMuZm9yRWFjaCgoaWNvbikgPT4ge1xuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgY29uc3QgdG9kb0lkID0gaWNvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1pZCcpO1xuICAgICAgY29uc3QgdG9kb0xpc3RzID0gZ2V0VG9kb0xpc3RzKCk7XG5cbiAgICAgIGNvbnN0IGV4aXN0aW5nVG9kbyA9IGZpbmRUb2RvQnlJZCh0b2RvSWQpO1xuXG4gICAgICBjb25zdCB0aGVUb2RvUHJpb3JpdHkgPSBleGlzdGluZ1RvZG8ucHJpb3JpdHk7XG4gICAgICBjb25zb2xlLmxvZyh0aGVUb2RvUHJpb3JpdHkpO1xuXG4gICAgICBsZXQgbmV3UHJpb3JpdHk7XG4gICAgICBpZiAodGhlVG9kb1ByaW9yaXR5ID09PSAnbG93Jykge1xuICAgICAgICBuZXdQcmlvcml0eSA9ICdtZWRpdW0nO1xuICAgICAgfSBlbHNlIGlmICh0aGVUb2RvUHJpb3JpdHkgPT09ICdtZWRpdW0nKSB7XG4gICAgICAgIG5ld1ByaW9yaXR5ID0gJ2hpZ2gnO1xuICAgICAgfSBlbHNlIGlmICh0aGVUb2RvUHJpb3JpdHkgPT09ICdoaWdoJykge1xuICAgICAgICBuZXdQcmlvcml0eSA9ICdsb3cnO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSB1cGRhdGVUb2RvUHJpb3JpdHkodG9kb0xpc3RzLCB0b2RvSWQsIG5ld1ByaW9yaXR5KTtcblxuICAgICAgaWYgKHRvZG9Qcmlvcml0eSkge1xuICAgICAgICBzYXZlVG9kb0xpc3RzKHRvZG9MaXN0cyk7XG4gICAgICAgIHJlbmRlclRhc2tzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1jaGVjaycpO1xuICBmb3IgKGNvbnN0IGNoZWNrYm94IG9mIGNoZWNrYm94ZXMpIHtcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCB0YXNrSWQgPSBjaGVja2JveC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1pZCcpO1xuICAgICAgZGVsZXRlVGFzayh0YXNrSWQpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRvZG9Qcmlvcml0eSh0b2RvTGlzdHMsIHRvZG9JZCwgbmV3UHJpb3JpdHkpIHtcbiAgZm9yIChjb25zdCB0b2RvTGlzdCBvZiB0b2RvTGlzdHMpIHtcbiAgICBjb25zdCBleGlzdGluZ1RvZG9JbmRleCA9IHRvZG9MaXN0LnRvZG9zLmZpbmRJbmRleChcbiAgICAgICh0b2RvKSA9PiB0b2RvLmlkID09PSB0b2RvSWQsXG4gICAgKTtcbiAgICBpZiAoZXhpc3RpbmdUb2RvSW5kZXggIT09IC0xKSB7XG4gICAgICBjb25zdCBleGlzdGluZ1RvZG8gPSB0b2RvTGlzdC50b2Rvc1tleGlzdGluZ1RvZG9JbmRleF07XG4gICAgICBjb25zdCB1cGRhdGVkVG9kbyA9IHtcbiAgICAgICAgLi4uZXhpc3RpbmdUb2RvLFxuICAgICAgICBwcmlvcml0eTogbmV3UHJpb3JpdHksXG4gICAgICB9O1xuXG4gICAgICB0b2RvTGlzdC50b2Rvcy5zcGxpY2UoZXhpc3RpbmdUb2RvSW5kZXgsIDEsIHVwZGF0ZWRUb2RvKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGFza1RpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGlkKSB7XG4gIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1zZWN0aW9uJyk7XG5cbiAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YXNrRGl2LmNsYXNzTmFtZSA9ICd0YXNrLWNvbnRhaW5lcic7XG5cbiAgY29uc3QgdGFza1NlY3Rpb25Ub3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza1NlY3Rpb25Ub3AuY2xhc3NOYW1lID0gJ2VhY2gtdGFzay1zZWN0aW9uLXRvcCc7XG5cbiAgY29uc3QgdGFza0xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza0xlZnQuY2xhc3NOYW1lID0gJ3Rhc2stbGVmdCc7XG5cbiAgY29uc3QgdGFza0NoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdGFza0NoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICB0YXNrQ2hlY2tib3guY2xhc3NMaXN0LmFkZCgndGFzay1jaGVjaycpO1xuICB0YXNrQ2hlY2tib3guc2V0QXR0cmlidXRlKCdkYXRhLWxpc3QtaWQnLCBpZCk7XG4gIHRhc2tMZWZ0LmFwcGVuZENoaWxkKHRhc2tDaGVja2JveCk7XG5cbiAgY29uc3QgdGFza1RpdGxlUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdGFza1RpdGxlUC5pZCA9ICd0YXNrdGl0bGUnO1xuICB0YXNrVGl0bGVQLnRleHRDb250ZW50ID0gdGFza1RpdGxlO1xuICB0YXNrTGVmdC5hcHBlbmRDaGlsZCh0YXNrVGl0bGVQKTtcblxuICB0YXNrU2VjdGlvblRvcC5hcHBlbmRDaGlsZCh0YXNrTGVmdCk7XG5cbiAgY29uc3QgdGFza1JpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhc2tSaWdodC5jbGFzc05hbWUgPSAndGFzay1yaWdodCc7XG5cbiAgY29uc3QgZWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGVkaXRJY29uLmNsYXNzTmFtZSA9ICdmYS1yZWd1bGFyIGZhLXBlbi10by1zcXVhcmUgdGFzay1pY29ucyB0YXNrLWVkaXRvcic7XG4gIGVkaXRJY29uLnNldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJywgaWQpO1xuICBlZGl0SWNvbi50aXRsZSA9ICdFZGl0IHRhc2snO1xuICB0YXNrUmlnaHQuYXBwZW5kQ2hpbGQoZWRpdEljb24pO1xuXG4gIGNvbnN0IHByaW9yaXR5SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgcHJpb3JpdHlJY29uLmNsYXNzTmFtZSA9ICdmYS1zb2xpZCBmYS1mbGFnIHRhc2staWNvbnMgdGFzay1wcmlvcml0eSc7XG4gIHByaW9yaXR5SWNvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1pZCcsIGlkKTtcbiAgcHJpb3JpdHlJY29uLnRpdGxlID0gJ0NoYW5nZSBwcmlvcml0eSc7XG4gIHByaW9yaXR5SWNvbi5zdHlsZS5jb2xvciA9IHByaW9yaXR5ID09PSAnaGlnaCcgPyAncmVkJyA6IHByaW9yaXR5ID09PSAnbWVkaXVtJyA/ICdkYXJrb3JhbmdlJyA6ICd0ZWFsJztcblxuICB0YXNrUmlnaHQuYXBwZW5kQ2hpbGQocHJpb3JpdHlJY29uKTtcblxuICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBkZWxldGVJY29uLmNsYXNzTmFtZSA9ICdmYS1zb2xpZCBmYS10cmFzaC1jYW4gdGFzay1pY29ucyB0YXNrLWRlbGV0ZXInO1xuICBkZWxldGVJY29uLnNldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJywgaWQpO1xuICBkZWxldGVJY29uLnRpdGxlID0gJ0RlbGV0ZSB0YXNrJztcbiAgdGFza1JpZ2h0LmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuXG4gIHRhc2tTZWN0aW9uVG9wLmFwcGVuZENoaWxkKHRhc2tSaWdodCk7XG4gIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza1NlY3Rpb25Ub3ApO1xuXG4gIGNvbnN0IHRhc2tTZWN0aW9uQm90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhc2tTZWN0aW9uQm90LmNsYXNzTmFtZSA9ICdlYWNoLXRhc2stc2VjdGlvbi1ib3QnO1xuXG4gIGNvbnN0IGJvdExlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYm90TGVmdC5jbGFzc05hbWUgPSAnYm90LWxlZnQnO1xuXG4gIGNvbnN0IGxlZnRUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGVmdFRvcC5jbGFzc05hbWUgPSAnbGVmdC10b3AnO1xuXG4gIGNvbnN0IHRpdGxlQm9sZGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0aXRsZUJvbGRlbi5jbGFzc05hbWUgPSAnYm9sZGVuJztcbiAgdGl0bGVCb2xkZW4udGV4dENvbnRlbnQgPSAnVGl0bGU6JztcbiAgbGVmdFRvcC5hcHBlbmRDaGlsZCh0aXRsZUJvbGRlbik7XG5cbiAgY29uc3QgdGl0bGVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0aXRsZVAudGV4dENvbnRlbnQgPSB0YXNrVGl0bGU7XG4gIHRpdGxlUC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvbmcnKTtcbiAgbGVmdFRvcC5hcHBlbmRDaGlsZCh0aXRsZVApO1xuXG4gIGJvdExlZnQuYXBwZW5kQ2hpbGQobGVmdFRvcCk7XG5cbiAgY29uc3QgbGVmdEJvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZWZ0Qm90LmNsYXNzTmFtZSA9ICdsZWZ0LWJvdCc7XG5cbiAgY29uc3QgZHVlRGF0ZUJvbGRlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZHVlRGF0ZUJvbGRlbi5jbGFzc05hbWUgPSAnYm9sZGVuJztcbiAgZHVlRGF0ZUJvbGRlbi50ZXh0Q29udGVudCA9ICdEdWUgZGF0ZTonO1xuICBsZWZ0Qm90LmFwcGVuZENoaWxkKGR1ZURhdGVCb2xkZW4pO1xuXG4gIGNvbnN0IGR1ZURhdGVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkdWVEYXRlUC50ZXh0Q29udGVudCA9IGR1ZURhdGU7XG4gIGxlZnRCb3QuYXBwZW5kQ2hpbGQoZHVlRGF0ZVApO1xuXG4gIGJvdExlZnQuYXBwZW5kQ2hpbGQobGVmdEJvdCk7XG4gIHRhc2tTZWN0aW9uQm90LmFwcGVuZENoaWxkKGJvdExlZnQpO1xuXG4gIGNvbnN0IGJvdFJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJvdFJpZ2h0LmNsYXNzTmFtZSA9ICdib3QtcmlnaHQnO1xuXG4gIGNvbnN0IHJpZ2h0VG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJpZ2h0VG9wLmNsYXNzTmFtZSA9ICdyaWdodC10b3AnO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uQm9sZGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkZXNjcmlwdGlvbkJvbGRlbi5jbGFzc05hbWUgPSAnYm9sZGVuJztcbiAgZGVzY3JpcHRpb25Cb2xkZW4udGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246JztcbiAgcmlnaHRUb3AuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25Cb2xkZW4pO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGVzY3JpcHRpb25QLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gIGRlc2NyaXB0aW9uUC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvbmcnKTtcbiAgcmlnaHRUb3AuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25QKTtcblxuICBib3RSaWdodC5hcHBlbmRDaGlsZChyaWdodFRvcCk7XG5cbiAgY29uc3QgcmlnaHRCb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcmlnaHRCb3QuY2xhc3NOYW1lID0gJ3JpZ2h0LWJvdCc7XG5cbiAgY29uc3QgcHJpb3JpdHlCb2xkZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHByaW9yaXR5Qm9sZGVuLmNsYXNzTmFtZSA9ICdib2xkZW4nO1xuICBwcmlvcml0eUJvbGRlbi50ZXh0Q29udGVudCA9ICdQcmlvcml0eTonO1xuICByaWdodEJvdC5hcHBlbmRDaGlsZChwcmlvcml0eUJvbGRlbik7XG5cbiAgY29uc3QgcHJpb3JpdHlQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwcmlvcml0eVAudGV4dENvbnRlbnQgPSBwcmlvcml0eTtcbiAgcmlnaHRCb3QuYXBwZW5kQ2hpbGQocHJpb3JpdHlQKTtcblxuICBib3RSaWdodC5hcHBlbmRDaGlsZChyaWdodEJvdCk7XG4gIHRhc2tTZWN0aW9uQm90LmFwcGVuZENoaWxkKGJvdFJpZ2h0KTtcbiAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrU2VjdGlvbkJvdCk7XG5cbiAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbn1cblxuZnVuY3Rpb24gZWRpdFRhc2tQb3B1cCh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBpZCkge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG92ZXJsYXkuY2xhc3NOYW1lID0gJ292ZXJsYXkzJztcblxuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwb3B1cC5jbGFzc05hbWUgPSAncG9wdXAzJztcblxuICBjb25zdCBwb3B1cFRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwb3B1cFRvcC5jbGFzc05hbWUgPSAncG9wdXAtdG9wMyc7XG5cbiAgY29uc3QgdGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0aXRsZVRleHQudGV4dENvbnRlbnQgPSAnRWRpdCBUYXNrJztcbiAgcG9wdXBUb3AuYXBwZW5kQ2hpbGQodGl0bGVUZXh0KTtcblxuICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgY2xvc2VCdXR0b24uY2xhc3NOYW1lID0gJ2ZhLXNvbGlkIGZhLXhtYXJrJztcbiAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU92ZXJsYXkpO1xuICBwb3B1cFRvcC5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG5cbiAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBUb3ApO1xuXG4gIGNvbnN0IHBvcHVwTWlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBvcHVwTWlkLmNsYXNzTmFtZSA9ICdwb3B1cC1taWQzJztcblxuICBjb25zdCBtaWRMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1pZExlZnQuY2xhc3NOYW1lID0gJ21pZC1sZWZ0JztcblxuICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZTonO1xuICBtaWRMZWZ0LmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0aXRsZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gIHRpdGxlSW5wdXQubWF4TGVuZ3RoID0gNjA7XG4gIHRpdGxlSW5wdXQuaWQgPSAndGFzay10aXRsZSc7XG4gIHRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICB0aXRsZUlucHV0LnZhbHVlID0gdGl0bGU7XG4gIG1pZExlZnQuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cbiAgY29uc3QgdGl0bGVBbGVydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdGl0bGVBbGVydC5jbGFzc0xpc3QuYWRkKCd0aXRsZS1hbGVydCcpO1xuICB0aXRsZUFsZXJ0LnRleHRDb250ZW50ID0gJ1RpdGxlIGlzIHJlcXVpcmVkLic7XG4gIHRpdGxlQWxlcnQuc3R5bGUuY29sb3IgPSAncmVkJztcbiAgdGl0bGVBbGVydC5zdHlsZS5tYXJnaW5Ub3AgPSAnJztcbiAgdGl0bGVBbGVydC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBtaWRMZWZ0LmFwcGVuZENoaWxkKHRpdGxlQWxlcnQpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uOic7XG4gIG1pZExlZnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25UZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIGRlc2NyaXB0aW9uVGV4dGFyZWEuaWQgPSAnZGVzY3JpcHRpb24nO1xuICBkZXNjcmlwdGlvblRleHRhcmVhLmNvbHMgPSAzMDtcbiAgZGVzY3JpcHRpb25UZXh0YXJlYS5yb3dzID0gNDtcbiAgZGVzY3JpcHRpb25UZXh0YXJlYS5tYXhMZW5ndGggPSAxODA7XG4gIGRlc2NyaXB0aW9uVGV4dGFyZWEudmFsdWUgPSBkZXNjcmlwdGlvbjtcbiAgbWlkTGVmdC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblRleHRhcmVhKTtcblxuICBwb3B1cE1pZC5hcHBlbmRDaGlsZChtaWRMZWZ0KTtcblxuICBjb25zdCBtaWRSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtaWRSaWdodC5jbGFzc05hbWUgPSAnbWlkLXJpZ2h0JztcblxuICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIGRhdGU6JztcbiAgbWlkUmlnaHQuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcblxuICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBkYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgZGF0ZUlucHV0LmlkID0gJ3Rhc2stZGF0ZSc7XG4gIGRhdGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIGRhdGVJbnB1dC52YWx1ZSA9IGRhdGU7XG4gIG1pZFJpZ2h0LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG5cbiAgY29uc3QgZGF0ZUFsZXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkYXRlQWxlcnQuY2xhc3NMaXN0LmFkZCgnZGF0ZS1hbGVydCcpO1xuICBkYXRlQWxlcnQudGV4dENvbnRlbnQgPSAnRGF0ZSBpcyByZXF1aXJlZC4nO1xuICBkYXRlQWxlcnQuc3R5bGUuY29sb3IgPSAncmVkJztcbiAgZGF0ZUFsZXJ0LnN0eWxlLm1hcmdpblRvcCA9ICcnO1xuICBkYXRlQWxlcnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICBtaWRSaWdodC5hcHBlbmRDaGlsZChkYXRlQWxlcnQpO1xuXG4gIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5Oic7XG4gIG1pZFJpZ2h0LmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuXG4gIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIHByaW9yaXR5U2VsZWN0LmlkID0gJ3ByaW9yaXR5JztcbiAgcHJpb3JpdHlTZWxlY3QucmVxdWlyZWQgPSB0cnVlO1xuICBbJ0xvdycsICdNZWRpdW0nLCAnSGlnaCddLmZvckVhY2goKHByaW9yaXR5VGV4dCkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbi52YWx1ZSA9IHByaW9yaXR5VGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByaW9yaXR5VGV4dDtcbiAgICBpZiAocHJpb3JpdHlUZXh0LnRvTG93ZXJDYXNlKCkgPT09IHByaW9yaXR5KSB7XG4gICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9KTtcbiAgbWlkUmlnaHQuYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3QpO1xuXG4gIGNvbnN0IHByaW9yaXR5QWxlcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHByaW9yaXR5QWxlcnQuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktYWxlcnQnKTtcbiAgcHJpb3JpdHlBbGVydC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSBpcyByZXF1aXJlZC4nO1xuICBwcmlvcml0eUFsZXJ0LnN0eWxlLmNvbG9yID0gJ3JlZCc7XG4gIHByaW9yaXR5QWxlcnQuc3R5bGUubWFyZ2luVG9wID0gJyc7XG4gIHByaW9yaXR5QWxlcnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICBtaWRSaWdodC5hcHBlbmRDaGlsZChwcmlvcml0eUFsZXJ0KTtcblxuICBjb25zdCBsaXN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBsaXN0TGFiZWwudGV4dENvbnRlbnQgPSAnTGlzdDonO1xuICBtaWRSaWdodC5hcHBlbmRDaGlsZChsaXN0TGFiZWwpO1xuXG4gIGNvbnN0IGxpc3RTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgbGlzdFNlbGVjdC5pZCA9ICd0aGVsaXN0JztcbiAgbGlzdFNlbGVjdC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgbWlkUmlnaHQuYXBwZW5kQ2hpbGQobGlzdFNlbGVjdCk7XG5cbiAgY29uc3QgbGlzdEFsZXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBsaXN0QWxlcnQuY2xhc3NMaXN0LmFkZCgnbGlzdC1hbGVydCcpO1xuICBsaXN0QWxlcnQudGV4dENvbnRlbnQgPSAnTGlzdCBpcyByZXF1aXJlZC4nO1xuICBsaXN0QWxlcnQuc3R5bGUuY29sb3IgPSAncmVkJztcbiAgbGlzdEFsZXJ0LnN0eWxlLm1hcmdpblRvcCA9ICcnO1xuICBsaXN0QWxlcnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICBtaWRSaWdodC5hcHBlbmRDaGlsZChsaXN0QWxlcnQpO1xuXG4gIHBvcHVwTWlkLmFwcGVuZENoaWxkKG1pZFJpZ2h0KTtcblxuICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cE1pZCk7XG5cbiAgY29uc3QgcG9wdXBCb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcG9wdXBCb3QuY2xhc3NOYW1lID0gJ3BvcHVwLWJvdDMnO1xuXG4gIGNvbnN0IHRleHRDbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICB0ZXh0Q2xvc2VCdXR0b24uaWQgPSAnY2xvc2UnO1xuICB0ZXh0Q2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSAnQ2xvc2UnO1xuICB0ZXh0Q2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU92ZXJsYXkpO1xuICBwb3B1cEJvdC5hcHBlbmRDaGlsZCh0ZXh0Q2xvc2VCdXR0b24pO1xuXG4gIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYWRkVGFza0J1dHRvbi5pZCA9ICdlZGl0dGFzayc7XG4gIGFkZFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnRWRpdCBUYXNrJztcbiAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB2YWxpZGF0ZUFuZEVkaXRUYXNrKGlkKTtcbiAgfSk7XG4gIHBvcHVwQm90LmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24pO1xuXG4gIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwQm90KTtcblxuICBvdmVybGF5LmFwcGVuZENoaWxkKHBvcHVwKTtcblxuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xufVxuXG5mdW5jdGlvbiBjbG9zZU92ZXJsYXkoKSB7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheTMnKTtcbiAgb3ZlcmxheS5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFza1BvcHVwKGNvbmZpcm1DYWxsYmFjaykge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG92ZXJsYXkuY2xhc3NOYW1lID0gJ292ZXJsYXkyJztcblxuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwb3B1cC5jbGFzc05hbWUgPSAncG9wdXAyJztcblxuICBjb25zdCBwb3B1cFRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwb3B1cFRvcC5jbGFzc05hbWUgPSAncG9wdXAtdG9wMic7XG5cbiAgY29uc3QgdHJpYW5nbGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICB0cmlhbmdsZUljb24uY2xhc3NOYW1lID0gJ2ZhLXNvbGlkIGZhLXRyaWFuZ2xlLWV4Y2xhbWF0aW9uJztcblxuICBjb25zdCBwb3B1cE1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHBvcHVwTWVzc2FnZS50ZXh0Q29udGVudCA9ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgdGFzaz8nO1xuXG4gIGNvbnN0IHBvcHVwQm90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBvcHVwQm90LmNsYXNzTmFtZSA9ICdwb3B1cC1ib3QyJztcblxuICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjbG9zZUJ1dHRvbi5pZCA9ICdjbG9zZSc7XG4gIGNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gJ0Nsb3NlJztcbiAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xvc2VPdmVybGF5MigpO1xuICB9KTtcblxuICBjb25zdCBjb25maXJtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbmZpcm1CdXR0b24uaWQgPSAnZGVsZXRldGFzayc7XG4gIGNvbmZpcm1CdXR0b24udGV4dENvbnRlbnQgPSAnQ29uZmlybSc7XG4gIGNvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uZmlybUNhbGxiYWNrKCk7XG4gICAgY2xvc2VPdmVybGF5MigpO1xuICB9KTtcblxuICBwb3B1cFRvcC5hcHBlbmRDaGlsZCh0cmlhbmdsZUljb24pO1xuICBwb3B1cFRvcC5hcHBlbmRDaGlsZChwb3B1cE1lc3NhZ2UpO1xuXG4gIHBvcHVwQm90LmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcbiAgcG9wdXBCb3QuYXBwZW5kQ2hpbGQoY29uZmlybUJ1dHRvbik7XG5cbiAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBUb3ApO1xuICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cEJvdCk7XG5cbiAgb3ZlcmxheS5hcHBlbmRDaGlsZChwb3B1cCk7XG5cbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChvdmVybGF5KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFzayh0b2RvSWQpIHtcbiAgY29uc3QgdG9kb0xpc3RzID0gZ2V0VG9kb0xpc3RzKCk7XG4gIGNvbnN0IHVzZWRJZHMgPSBnZXRVc2VkSWRzKCk7XG5cbiAgZm9yIChjb25zdCB0b2RvTGlzdCBvZiB0b2RvTGlzdHMpIHtcbiAgICBjb25zdCB0b2RvSW5kZXggPSB0b2RvTGlzdC50b2Rvcy5maW5kSW5kZXgoKHRvZG8pID0+IHRvZG8uaWQgPT09IHRvZG9JZCk7XG4gICAgaWYgKHRvZG9JbmRleCAhPT0gLTEpIHtcbiAgICAgIHRvZG9MaXN0LnRvZG9zLnNwbGljZSh0b2RvSW5kZXgsIDEpO1xuICAgICAgc2F2ZVRvZG9MaXN0cyh0b2RvTGlzdHMpO1xuXG4gICAgICBjb25zdCBpZEluZGV4ID0gdXNlZElkcy5pbmRleE9mKHRvZG9JZCk7XG4gICAgICBpZiAoaWRJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdXNlZElkcy5zcGxpY2UoaWRJbmRleCwgMSk7XG4gICAgICAgIHNhdmVVc2VkSWRzKHVzZWRJZHMpO1xuICAgICAgfVxuXG4gICAgICByZW5kZXJUYXNrcygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGNvbnNvbGUuZXJyb3IoJ1RvZG8gbm90IGZvdW5kJyk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlT3ZlcmxheTIoKSB7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheTInKTtcbiAgb3ZlcmxheS5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVBbmRFZGl0VGFzayhpZCkge1xuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stdGl0bGUnKTtcbiAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZGF0ZScpO1xuICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpO1xuICBjb25zdCBsaXN0U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoZWxpc3QnKTtcblxuICBjb25zdCB0aXRsZUFsZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlLWFsZXJ0Jyk7XG4gIGNvbnN0IGRhdGVBbGVydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLWFsZXJ0Jyk7XG4gIGNvbnN0IHByaW9yaXR5QWxlcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHktYWxlcnQnKTtcbiAgY29uc3QgbGlzdEFsZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtYWxlcnQnKTtcblxuICBsZXQgaXNWYWxpZCA9IHRydWU7XG5cbiAgaWYgKHRpdGxlSW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgdGl0bGVBbGVydC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBpc1ZhbGlkID0gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgdGl0bGVBbGVydC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG5cbiAgaWYgKGRhdGVJbnB1dC52YWx1ZSA9PT0gJycpIHtcbiAgICBkYXRlQWxlcnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgaXNWYWxpZCA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIGRhdGVBbGVydC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG5cbiAgaWYgKHByaW9yaXR5U2VsZWN0LnZhbHVlID09PSAnJykge1xuICAgIHByaW9yaXR5QWxlcnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgaXNWYWxpZCA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHByaW9yaXR5QWxlcnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuXG4gIGlmIChsaXN0U2VsZWN0LnZhbHVlID09PSAnJykge1xuICAgIGxpc3RBbGVydC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBpc1ZhbGlkID0gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgbGlzdEFsZXJ0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cblxuICBpZiAoaXNWYWxpZCkge1xuICAgIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSBsaXN0U2VsZWN0LnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJyk7XG5cbiAgICBkZWxldGVUYXNrKGlkKTtcblxuICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9kbyhcbiAgICAgIHRpdGxlSW5wdXQudmFsdWUsXG4gICAgICBkZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgIGRhdGVJbnB1dC52YWx1ZSxcbiAgICAgIHByaW9yaXR5U2VsZWN0LnZhbHVlLFxuICAgICAgaWQsXG4gICAgKTtcblxuICAgIGFkZFRvZG9Ub1RvZG9MaXN0KHNlbGVjdGVkVmFsdWUsIG5ld1RvZG8pO1xuXG4gICAgcmVuZGVyVGFza3MoKTtcbiAgICBjbG9zZU92ZXJsYXkoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVMaXN0T3B0aW9ucyh0b2RvTGlzdHMsIGxpc3R2YWx1ZSkge1xuICBjb25zdCBsaXN0U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoZWxpc3QnKTtcblxuICBsaXN0U2VsZWN0LmlubmVySFRNTCA9ICcnO1xuICBjb25zdCBpZ25vcmVJZHMgPSBbJzExMTExMScsICcyMjIyMjInLCAnMzMzMzMzJywgJzQ0NDQ0NCddO1xuXG4gIHRvZG9MaXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgaWYgKCFpZ25vcmVJZHMuaW5jbHVkZXMobGlzdC5pZCkpIHtcbiAgICAgIGNvbnN0IGxpc3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIGxpc3RPcHRpb24udmFsdWUgPSBsaXN0LmlkO1xuICAgICAgbGlzdE9wdGlvbi50ZXh0Q29udGVudCA9IGxpc3QubmFtZTtcbiAgICAgIGxpc3RTZWxlY3QuYXBwZW5kQ2hpbGQobGlzdE9wdGlvbik7XG4gICAgfVxuICB9KTtcblxuICBsaXN0U2VsZWN0LnZhbHVlID0gbGlzdHZhbHVlO1xufVxuXG5mdW5jdGlvbiBhZGRUb2RvVG9Ub2RvTGlzdChzZWxlY3RlZFZhbHVlLCBuZXdUb2RvKSB7XG4gIGNvbnN0IG9yaWdpbmFsVG9kb0xpc3QgPSBnZXRUb2RvTGlzdEJ5SWQoc2VsZWN0ZWRWYWx1ZSk7XG5cbiAgaWYgKCFvcmlnaW5hbFRvZG9MaXN0KSB7XG4gICAgY29uc29sZS5sb2coJ1RvZG9MaXN0IG5vdCBmb3VuZCBmb3IgdGhlIHNlbGVjdGVkIHZhbHVlLicpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZWRUb2RvTGlzdCA9IG5ldyBUb2RvTGlzdChcbiAgICBvcmlnaW5hbFRvZG9MaXN0Lm5hbWUsXG4gICAgb3JpZ2luYWxUb2RvTGlzdC5pZCxcbiAgKTtcblxuICB1cGRhdGVkVG9kb0xpc3QudG9kb3MgPSBbLi4ub3JpZ2luYWxUb2RvTGlzdC50b2RvcywgbmV3VG9kb107XG5cbiAgY29uc3QgdG9kb0xpc3RzID0gZ2V0VG9kb0xpc3RzKCk7XG4gIGNvbnN0IHVwZGF0ZWRUb2RvTGlzdHMgPSB0b2RvTGlzdHMubWFwKCh0b2RvTGlzdCkgPT4gKHRvZG9MaXN0LmlkID09PSBzZWxlY3RlZFZhbHVlID8gdXBkYXRlZFRvZG9MaXN0IDogdG9kb0xpc3QpKTtcblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb0xpc3RzJywgSlNPTi5zdHJpbmdpZnkodXBkYXRlZFRvZG9MaXN0cykpO1xuXG4gIHJlbmRlclRhc2tzKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYWxpc2VNYWluKGlkKSB7XG4gIGNyZWF0ZU1haW4oaWQpO1xuICByZW5kZXJUYXNrcygpO1xufVxuIiwiaW1wb3J0IHtcbiAgVG9kb0xpc3QsIGdldFRvZG9MaXN0cywgc2F2ZVRvZG9MaXN0cywgZ2V0VXNlZElkcywgc2F2ZVVzZWRJZHMsXG59IGZyb20gJy4vYXBwLmpzJztcbmltcG9ydCBpbml0aWFsaXNlTWFpbiwgeyByZW5kZXJUYXNrcyB9IGZyb20gJy4vbWFpbi5qcyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGViYXIoKSB7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7XG5cbiAgY29uc3Qgc2lkZWJhck1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2lkZWJhck1lbnUuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1tZW51Jyk7XG5cbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuXG4gIGNvbnN0IGluYm94ID0gY3JlYXRlU2lkZWJhckl0ZW0oJ2luYm94JywgJ2ZhLWluYm94JywgJ0luYm94Jyk7XG4gIGluYm94LnNldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJywgJzAwMDAwMCcpO1xuICBpbmJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcbiAgICBzZXRBY3RpdmVCdXR0b24oaW5ib3gpO1xuICAgIGluaXRpYWxpc2VNYWluKGluYm94LmdldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJykpO1xuICB9KTtcblxuICBjb25zdCB0b2RheSA9IGNyZWF0ZVNpZGViYXJJdGVtKCd0b2RheScsICdmYS1jYWxlbmRhci1kYXknLCAnVG9kYXknKTtcbiAgdG9kYXkuc2V0QXR0cmlidXRlKCdkYXRhLWxpc3QtaWQnLCAnMTExMTExJyk7XG4gIHRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuO1xuICAgIHNldEFjdGl2ZUJ1dHRvbih0b2RheSk7XG4gICAgaW5pdGlhbGlzZU1haW4odG9kYXkuZ2V0QXR0cmlidXRlKCdkYXRhLWxpc3QtaWQnKSk7XG4gIH0pO1xuXG4gIGNvbnN0IHVwY29taW5nID0gY3JlYXRlU2lkZWJhckl0ZW0oJ3VwY29taW5nJywgJ2ZhLWNhbGVuZGFyLXdlZWsnLCAnVXBjb21pbmcnKTtcbiAgdXBjb21pbmcuc2V0QXR0cmlidXRlKCdkYXRhLWxpc3QtaWQnLCAnMjIyMjIyJyk7XG4gIHVwY29taW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuO1xuICAgIHNldEFjdGl2ZUJ1dHRvbih1cGNvbWluZyk7XG4gICAgaW5pdGlhbGlzZU1haW4odXBjb21pbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWxpc3QtaWQnKSk7XG4gIH0pO1xuXG4gIGNvbnN0IGFsbCA9IGNyZWF0ZVNpZGViYXJJdGVtKCdhbGwnLCAnZmEtY2FsZW5kYXItZGF5cycsICdBbGwnKTtcbiAgYWxsLnNldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJywgJzMzMzMzMycpO1xuICBhbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm47XG4gICAgc2V0QWN0aXZlQnV0dG9uKGFsbCk7XG4gICAgaW5pdGlhbGlzZU1haW4oYWxsLmdldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJykpO1xuICB9KTtcblxuICBjb25zdCBpbXBvcnRhbnQgPSBjcmVhdGVTaWRlYmFySXRlbSgnaW1wb3J0YW50JywgJ2ZhLXN0YXInLCAnSW1wb3J0YW50Jyk7XG4gIGltcG9ydGFudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1pZCcsICc0NDQ0NDQnKTtcbiAgaW1wb3J0YW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuO1xuICAgIHNldEFjdGl2ZUJ1dHRvbihpbXBvcnRhbnQpO1xuICAgIGluaXRpYWxpc2VNYWluKGltcG9ydGFudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1pZCcpKTtcbiAgfSk7XG5cbiAgY29uc3QgbGlzdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBsaXN0cy5jbGFzc0xpc3QuYWRkKCdsaXN0cycpO1xuICBsaXN0cy5pbm5lckhUTUwgPSAnPGRpdj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLWxpc3QtY2hlY2tcIj48L2k+IDxwPkxpc3RzPC9wPjwvZGl2PiA8ZGl2PjxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2hldnJvbi11cFwiPjwvaT48L2Rpdj4nO1xuICBsaXN0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxpc3RDbGljayk7XG5cbiAgY29uc3QgYWNjb3JkaW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFjY29yZGlvbi5jbGFzc0xpc3QuYWRkKCdhY2NvcmRpb24nKTtcblxuICBjb25zdCBuZXdMaXN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuZXdMaXN0cy5jbGFzc0xpc3QuYWRkKCduZXctbGlzdHMnKTtcblxuICBjb25zdCBjcmVhdGVOZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY3JlYXRlTmV3LmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1uZXcnKTtcbiAgY3JlYXRlTmV3LmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXBsdXNcIj48L2k+IE5ldyBMaXN0JztcbiAgY3JlYXRlTmV3LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG5ld0xpc3RQb3B1cCgpO1xuICB9KTtcblxuICBhY2NvcmRpb24uYXBwZW5kQ2hpbGQobmV3TGlzdHMpO1xuICBhY2NvcmRpb24uYXBwZW5kQ2hpbGQoY3JlYXRlTmV3KTtcblxuICBtZW51LmFwcGVuZENoaWxkKGluYm94KTtcbiAgbWVudS5hcHBlbmRDaGlsZCh0b2RheSk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQodXBjb21pbmcpO1xuICBtZW51LmFwcGVuZENoaWxkKGFsbCk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoaW1wb3J0YW50KTtcbiAgbWVudS5hcHBlbmRDaGlsZChsaXN0cyk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoYWNjb3JkaW9uKTtcblxuICBzaWRlYmFyTWVudS5hcHBlbmRDaGlsZChtZW51KTtcblxuICBzaWRlYmFyLmFwcGVuZENoaWxkKHNpZGViYXJNZW51KTtcblxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChzaWRlYmFyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2lkZWJhckl0ZW0oY2xhc3NOYW1lLCBpY29uQ2xhc3MsIHRleHQpIHtcbiAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGl0ZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUsICduYXYtYnV0dG9ucycpO1xuXG4gIGNvbnN0IGl0ZW1Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGl0ZW1Db250ZW50LmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXNvbGlkICR7aWNvbkNsYXNzfVwiPjwvaT4gPHA+JHt0ZXh0fTwvcD5gO1xuXG4gIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbUNvbnRlbnQpO1xuXG4gIHJldHVybiBpdGVtO1xufVxuXG5mdW5jdGlvbiBzZXRBY3RpdmVCdXR0b24oYnV0dG9uKSB7XG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWJ1dHRvbnMnKTtcblxuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGlmIChidXR0b24gIT09IHRoaXMpIHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG4gIH0pO1xuXG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVG9kb0xpc3RzKCkge1xuICBjb25zdCB0b2RvTGlzdHMgPSBnZXRUb2RvTGlzdHMoKTtcbiAgY29uc3QgbmV3TGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWxpc3RzJyk7XG5cbiAgbmV3TGlzdHMuaW5uZXJIVE1MID0gJyc7XG5cbiAgY29uc3Qgbm9uRGVmYXVsdFRvZG9MaXN0cyA9IHRvZG9MaXN0cy5maWx0ZXIoKHRvZG9MaXN0KSA9PiAhaXNEZWZhdWx0VG9kb0xpc3QodG9kb0xpc3QuaWQpKTtcblxuICBub25EZWZhdWx0VG9kb0xpc3RzLmZvckVhY2goKHRvZG9MaXN0KSA9PiB7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBuZXdMaXN0SXRlbSh0b2RvTGlzdC5uYW1lLCB0b2RvTGlzdC5pZCk7XG4gICAgbmV3TGlzdHMuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICB9KTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLXRpdGxlJyk7XG4gIGNvbnN0IHRpdGxlY29udGVudCA9IHRpdGxlLnRleHRDb250ZW50O1xuXG4gIGNvbnN0IGdlbmVyYXRlZERpdnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aGUtbmV3LWxpc3RzJyk7XG4gIGZvciAoY29uc3QgZGl2IG9mIGdlbmVyYXRlZERpdnMpIHtcbiAgICBpZiAoZGl2LnRleHRDb250ZW50ID09PSB0aXRsZWNvbnRlbnQpIHtcbiAgICAgIHNldEFjdGl2ZUJ1dHRvbihkaXYpO1xuICAgIH1cbiAgICBjb25zdCB0cmFzaEljb24gPSBkaXYucXVlcnlTZWxlY3RvcignLnRyYXNoIC5mYS10cmFzaC1jYW4nKTtcbiAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgIHRyYXNoSWNvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9KTtcblxuICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgdHJhc2hJY29uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG5cbiAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAoZGl2LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcbiAgICAgIHNldEFjdGl2ZUJ1dHRvbihkaXYpO1xuICAgICAgaW5pdGlhbGlzZU1haW4oZGl2LmdldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJykpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgYWNjb3JkaW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbicpO1xuICBjb25zdCBnZW5lcmF0ZWRCaW5zID0gYWNjb3JkaW9uLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xpc3QtZGVsZXRlcicpO1xuICBmb3IgKGNvbnN0IGJpbiBvZiBnZW5lcmF0ZWRCaW5zKSB7XG4gICAgYmluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGNvbnN0IGxpc3RJZCA9IGJpbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1pZCcpO1xuICAgICAgZGVsZXRlTGlzdFBvcHVwKCgpID0+IGRlbGV0ZUxpc3QobGlzdElkKSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbmV3TGlzdFBvcHVwKCkge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheScpO1xuXG4gIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ3BvcHVwJyk7XG5cbiAgY29uc3QgcG9wdXBUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcG9wdXBUb3AuY2xhc3NMaXN0LmFkZCgncG9wdXAtdG9wJyk7XG5cbiAgY29uc3QgdGl0bGVQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRpdGxlUGFyYWdyYXBoLnRleHRDb250ZW50ID0gJ05ldyBMaXN0JztcblxuICBjb25zdCBjbG9zZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGNsb3NlSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS14bWFyaycpO1xuICBjbG9zZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU92ZXJsYXkpO1xuXG4gIHBvcHVwVG9wLmFwcGVuZENoaWxkKHRpdGxlUGFyYWdyYXBoKTtcbiAgcG9wdXBUb3AuYXBwZW5kQ2hpbGQoY2xvc2VJY29uKTtcblxuICBjb25zdCBwb3B1cE1pZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwb3B1cE1pZC5jbGFzc0xpc3QuYWRkKCdwb3B1cC1taWQnKTtcblxuICBjb25zdCBpbnB1dFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgaW5wdXRQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnTmFtZSAobWF4IDEwIGNoYXJhY3RlcnMpOic7XG5cbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld2xpc3RpbnB1dCcpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsICcxMCcpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgdHJ1ZSk7XG5cbiAgY29uc3QgYWxlcnRQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGFsZXJ0UGFyYWdyYXBoLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0Jyk7XG4gIGFsZXJ0UGFyYWdyYXBoLnRleHRDb250ZW50ID0gJ0xpc3QgbmFtZSBpcyByZXF1aXJlZC4nO1xuICBhbGVydFBhcmFncmFwaC5zdHlsZS5jb2xvciA9ICdyZWQnO1xuICBhbGVydFBhcmFncmFwaC5zdHlsZS5tYXJnaW5Ub3AgPSAnLjVyZW0nO1xuICBhbGVydFBhcmFncmFwaC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gIHBvcHVwTWlkLmFwcGVuZENoaWxkKGlucHV0UGFyYWdyYXBoKTtcbiAgcG9wdXBNaWQuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICBwb3B1cE1pZC5hcHBlbmRDaGlsZChhbGVydFBhcmFncmFwaCk7XG5cbiAgY29uc3QgcG9wdXBCb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcG9wdXBCb3QuY2xhc3NMaXN0LmFkZCgncG9wdXAtYm90Jyk7XG5cbiAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY2xvc2VCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdjbG9zZScpO1xuICBjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDbG9zZSc7XG4gIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VPdmVybGF5KTtcblxuICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkaXRpb24nKTtcbiAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBMaXN0JztcbiAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkTmV3TGlzdCk7XG5cbiAgcG9wdXBCb3QuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuICBwb3B1cEJvdC5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuXG4gIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwVG9wKTtcbiAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBNaWQpO1xuICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cEJvdCk7XG5cbiAgb3ZlcmxheS5hcHBlbmRDaGlsZChwb3B1cCk7XG5cbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChvdmVybGF5KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlTGlzdFBvcHVwKGNvbmZpcm1DYWxsYmFjaykge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG92ZXJsYXkuY2xhc3NOYW1lID0gJ292ZXJsYXkyJztcblxuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwb3B1cC5jbGFzc05hbWUgPSAncG9wdXAyJztcblxuICBjb25zdCBwb3B1cFRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwb3B1cFRvcC5jbGFzc05hbWUgPSAncG9wdXAtdG9wMic7XG5cbiAgY29uc3QgdHJpYW5nbGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICB0cmlhbmdsZUljb24uY2xhc3NOYW1lID0gJ2ZhLXNvbGlkIGZhLXRyaWFuZ2xlLWV4Y2xhbWF0aW9uJztcblxuICBjb25zdCBwb3B1cE1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHBvcHVwTWVzc2FnZS50ZXh0Q29udGVudCA9ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgbGlzdD8nO1xuXG4gIGNvbnN0IHBvcHVwQm90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBvcHVwQm90LmNsYXNzTmFtZSA9ICdwb3B1cC1ib3QyJztcblxuICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjbG9zZUJ1dHRvbi5pZCA9ICdjbG9zZSc7XG4gIGNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gJ0Nsb3NlJztcbiAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xvc2VPdmVybGF5MigpO1xuICB9KTtcblxuICBjb25zdCBjb25maXJtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbmZpcm1CdXR0b24uaWQgPSAnZGVsZXRlbGlzdCc7XG4gIGNvbmZpcm1CdXR0b24udGV4dENvbnRlbnQgPSAnQ29uZmlybSc7XG4gIGNvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uZmlybUNhbGxiYWNrKCk7XG4gICAgY2xvc2VPdmVybGF5MigpO1xuICB9KTtcblxuICBwb3B1cFRvcC5hcHBlbmRDaGlsZCh0cmlhbmdsZUljb24pO1xuICBwb3B1cFRvcC5hcHBlbmRDaGlsZChwb3B1cE1lc3NhZ2UpO1xuXG4gIHBvcHVwQm90LmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcbiAgcG9wdXBCb3QuYXBwZW5kQ2hpbGQoY29uZmlybUJ1dHRvbik7XG5cbiAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBUb3ApO1xuICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cEJvdCk7XG5cbiAgb3ZlcmxheS5hcHBlbmRDaGlsZChwb3B1cCk7XG5cbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChvdmVybGF5KTtcbn1cblxuZnVuY3Rpb24gY2xvc2VPdmVybGF5KCkge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcbiAgb3ZlcmxheS5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlTGlzdChpZCkge1xuICBjb25zdCB0b2RvTGlzdHMgPSBnZXRUb2RvTGlzdHMoKTtcbiAgY29uc3QgdXNlZElkcyA9IGdldFVzZWRJZHMoKTtcblxuICBjb25zdCBpZEluZGV4ID0gdXNlZElkcy5pbmRleE9mKGlkKTtcbiAgaWYgKGlkSW5kZXggIT09IC0xKSB7XG4gICAgdXNlZElkcy5zcGxpY2UoaWRJbmRleCwgMSk7XG4gICAgc2F2ZVVzZWRJZHModXNlZElkcyk7XG4gIH1cblxuICBjb25zdCB1cGRhdGVkVG9kb0xpc3RzID0gdG9kb0xpc3RzLmZpbHRlcigobGlzdCkgPT4gbGlzdC5pZCAhPT0gaWQpO1xuICBzYXZlVG9kb0xpc3RzKHVwZGF0ZWRUb2RvTGlzdHMpO1xuXG4gIHJlbmRlclRvZG9MaXN0cygpO1xuXG4gIGNvbnN0IGluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94Jyk7XG4gIHNldEFjdGl2ZUJ1dHRvbihpbmJveCk7XG4gIGluaXRpYWxpc2VNYWluKCcwMDAwMDAnKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VPdmVybGF5MigpIHtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5MicpO1xuICBvdmVybGF5LnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBuZXdMaXN0SXRlbShuYW1lLCBpZCkge1xuICBjb25zdCBuZXdMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuZXdMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCduYXYtYnV0dG9ucycsICd0aGUtbmV3LWxpc3RzJyk7XG4gIG5ld0xpc3RJdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJywgaWQpO1xuXG4gIGNvbnN0IG5ld0xpc3RJdGVtQ2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmV3TGlzdEl0ZW1DaGlsZC5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jaXJjbGVcIj48L2k+JHtuYW1lfTwvZGl2PmA7XG5cbiAgY29uc3QgbmV3TGlzdEl0ZW1DaGlsZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmV3TGlzdEl0ZW1DaGlsZDIuY2xhc3NMaXN0LmFkZCgndHJhc2gnKTtcbiAgY29uc3QgdGhlVHJhc2hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICB0aGVUcmFzaEljb24uY2xhc3NMaXN0LmFkZCgnZmEtcmVndWxhcicsICdmYS10cmFzaC1jYW4nLCAnbGlzdC1kZWxldGVyJyk7XG4gIHRoZVRyYXNoSWNvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1pZCcsIGlkKTtcbiAgbmV3TGlzdEl0ZW1DaGlsZDIuYXBwZW5kQ2hpbGQodGhlVHJhc2hJY29uKTtcblxuICBuZXdMaXN0SXRlbS5hcHBlbmRDaGlsZChuZXdMaXN0SXRlbUNoaWxkKTtcbiAgbmV3TGlzdEl0ZW0uYXBwZW5kQ2hpbGQobmV3TGlzdEl0ZW1DaGlsZDIpO1xuXG4gIHJldHVybiBuZXdMaXN0SXRlbTtcbn1cblxuZnVuY3Rpb24gaXNEZWZhdWx0VG9kb0xpc3QoaWQpIHtcbiAgY29uc3QgZGVmYXVsdFRvZG9MaXN0SWRzID0gWycwMDAwMDAnLCAnMTExMTExJywgJzIyMjIyMicsICczMzMzMzMnLCAnNDQ0NDQ0J107XG5cbiAgcmV0dXJuIGRlZmF1bHRUb2RvTGlzdElkcy5pbmNsdWRlcyhpZCk7XG59XG5cbmZ1bmN0aW9uIGFkZE5ld0xpc3QoKSB7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld2xpc3RpbnB1dCcpO1xuICBjb25zdCBhbGVydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGVydCcpO1xuICBjb25zdCBwYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb24nKTtcblxuICBjb25zdCBpbnB1dFZhbHVlID0gaW5wdXQudmFsdWU7XG5cbiAgaWYgKGlucHV0LmNoZWNrVmFsaWRpdHkoKSA9PT0gZmFsc2UpIHtcbiAgICBhbGVydC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBpbnB1dC5zdHlsZS5ib3JkZXJDb2xvciA9ICdyZWQnO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5ld0xpc3QgPSBuZXcgVG9kb0xpc3QoaW5wdXRWYWx1ZSk7XG4gICAgY29uc3QgdG9kb0xpc3RzID0gZ2V0VG9kb0xpc3RzKCk7XG4gICAgdG9kb0xpc3RzLnB1c2gobmV3TGlzdCk7XG4gICAgc2F2ZVRvZG9MaXN0cyh0b2RvTGlzdHMpO1xuXG4gICAgY29uc3QgbmV3TGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWxpc3RzJyk7XG4gICAgbmV3TGlzdHMuYXBwZW5kQ2hpbGQobmV3TGlzdEl0ZW0oaW5wdXRWYWx1ZSwgbmV3TGlzdC5pZCkpO1xuICAgIGlucHV0LnZhbHVlID0gJyc7XG5cbiAgICByZW5kZXJUb2RvTGlzdHMoKTtcblxuICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IGAke3BhbmVsLnNjcm9sbEhlaWdodH1weGA7XG4gICAgYWxlcnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIGNsb3NlT3ZlcmxheSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxpc3RDbGljaygpIHtcbiAgY29uc3QgbGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdHMnKTtcbiAgY29uc3QgY2hldnJvbkljb24gPSBsaXN0cy5xdWVyeVNlbGVjdG9yKCcuZmEtY2hldnJvbi11cCcpO1xuICBjaGV2cm9uSWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdmYS1jaGV2cm9uLWRvd24nKTtcblxuICBjb25zdCBwYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb24nKTtcblxuICBpZiAocGFuZWwuc3R5bGUubWF4SGVpZ2h0KSB7XG4gICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBgJHtwYW5lbC5zY3JvbGxIZWlnaHR9cHhgO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNpZGViYXJBbmltYXRlKCkge1xuICBjb25zdCBzY3JlZW5XaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZS1zaWRlYmFyJyk7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuXG4gIGlmIChzY3JlZW5XaWR0aCA+IDc2OCkge1xuICAgIGlmIChzaWRlYmFyLnN0eWxlLmxlZnQgPT09ICcnIHx8IHNpZGViYXIuc3R5bGUubGVmdCA9PT0gJzBweCcpIHtcbiAgICAgIHNpZGViYXIuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgc2lkZWJhci5zdHlsZS5sZWZ0ID0gJy0xMDAlJztcbiAgICAgIG1haW4uc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9ICcxZnInO1xuICAgICAgbWFpbi5zdHlsZS5ncmlkVGVtcGxhdGVBcmVhcyA9ICdcIm1haW4tYXJlYVwiJztcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS1iYXJzLXN0YWdnZXJlZCcpO1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ZhLWJhcnMnKTtcbiAgICB9IGVsc2UgaWYgKHNpZGViYXIuc3R5bGUubGVmdCA9PT0gJy0xMDAlJykge1xuICAgICAgc2lkZWJhci5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgICAgc2lkZWJhci5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICBtYWluLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSAnMzAwcHggMWZyJztcbiAgICAgIG1haW4uc3R5bGUuZ3JpZFRlbXBsYXRlQXJlYXMgPSAnXCJzaWRlYmFyIG1haW4tYXJlYVwiJztcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS1iYXJzJyk7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZmEtYmFycy1zdGFnZ2VyZWQnKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoc2lkZWJhci5zdHlsZS5sZWZ0ID09PSAnLTEwMCUnKSB7XG4gICAgc2lkZWJhci5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS1iYXJzJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ZhLWJhcnMtc3RhZ2dlcmVkJyk7XG4gIH0gZWxzZSBpZiAoc2lkZWJhci5zdHlsZS5sZWZ0ID09PSAnJyB8fCBzaWRlYmFyLnN0eWxlLmxlZnQgPT09ICcwcHgnKSB7XG4gICAgc2lkZWJhci5zdHlsZS5sZWZ0ID0gJy0xMDAlJztcbiAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtYmFycy1zdGFnZ2VyZWQnKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZmEtYmFycycpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhvbWVCdXR0b25DbGljaygpIHtcbiAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXknKTtcblxuICBzZXRBY3RpdmVCdXR0b24odG9kYXkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0aWFsaXplU2lkZWJhcigpIHtcbiAgY3JlYXRlU2lkZWJhcigpO1xuXG4gIGNvbnN0IHRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUtc2lkZWJhcicpO1xuICB0b2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaWRlYmFyQW5pbWF0ZSk7XG5cbiAgY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUtaG9tZScpO1xuICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaG9tZUJ1dHRvbkNsaWNrKTtcblxuICBzZXRBY3RpdmVCdXR0b24oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94JykpO1xuICBpbml0aWFsaXNlTWFpbignMDAwMDAwJyk7XG5cbiAgcmVuZGVyVG9kb0xpc3RzKCk7XG4gIHJlbmRlclRhc2tzKCk7XG59XG4iLCJpbXBvcnQgaW5pdGlhbGl6ZVNpZGViYXIgZnJvbSAnLi9zaWRlYmFyJztcbmltcG9ydCB7IHJlbmRlclRhc2tzIH0gZnJvbSAnLi9tYWluJztcbmltcG9ydCB7XG4gIFRvZG8sIFRvZG9MaXN0LCBnZXRUb2RvTGlzdHMsIHNhdmVUb2RvTGlzdHMsIGdldFVzZWRJZHMsIHNhdmVVc2VkSWRzLCBnZXRUb2RvTGlzdEJ5SWQsXG59IGZyb20gJy4vYXBwLmpzJztcblxuZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmF2LmNsYXNzTGlzdC5hZGQoJ25hdicpO1xuXG4gIGNvbnN0IG5hdklubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5hdklubmVyLmNsYXNzTGlzdC5hZGQoJ25hdi1pbm5lcicpO1xuXG4gIGNvbnN0IGxlZnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGVmdERpdi5jbGFzc0xpc3QuYWRkKCdsZWZ0LW5hdicpO1xuXG4gIGNvbnN0IGNlbnRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjZW50ZXJEaXYuY2xhc3NMaXN0LmFkZCgnY2VudGVyLW5hdicpO1xuXG4gIGNvbnN0IHJpZ2h0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJpZ2h0RGl2LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LW5hdicpO1xuXG4gIGNvbnN0IGxvZ29EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbG9nb0Rpdi5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XG5cbiAgY29uc3QgbWVudUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGNvbnN0IHNjcmVlbldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gIGlmIChzY3JlZW5XaWR0aCA+IDc2OCkge1xuICAgIG1lbnVJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLWJhcnMtc3RhZ2dlcmVkJyk7XG4gIH0gZWxzZSB7XG4gICAgbWVudUljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtYmFycycpO1xuICB9XG5cbiAgbWVudUljb24uc2V0QXR0cmlidXRlKCdpZCcsICd0b2dnbGUtc2lkZWJhcicpO1xuXG4gIGNvbnN0IGhvbWVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBob21lSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1ob3VzZScpO1xuICBob21lSWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZ2dsZS1ob21lJyk7XG5cbiAgbGVmdERpdi5hcHBlbmRDaGlsZChtZW51SWNvbik7XG4gIGxlZnREaXYuYXBwZW5kQ2hpbGQoaG9tZUljb24pO1xuXG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBkYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gIGRhdGUuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlSW5wdXQnKTtcblxuICBjZW50ZXJEaXYuYXBwZW5kQ2hpbGQoZGF0ZSk7XG5cbiAgY29uc3QgYWRkSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgYWRkSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1wbHVzJyk7XG4gIGFkZEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbmV3VGFza1BvcHVwKCk7XG5cbiAgICBjb25zdCB0b2RvTGlzdHMgPSBnZXRUb2RvTGlzdHMoKTtcbiAgICBjb25zdCBuYXZCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1idXR0b25zJyk7XG4gICAgbGV0IGFjdGl2ZU5hdkJ1dHRvbiA9IG51bGw7XG5cbiAgICBmb3IgKGNvbnN0IGJ1dHRvbiBvZiBuYXZCdXR0b25zKSB7XG4gICAgICBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgYWN0aXZlTmF2QnV0dG9uID0gYnV0dG9uO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkYXRhTGlzdElkID0gYWN0aXZlTmF2QnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJyk7XG4gICAgY3JlYXRlTGlzdE9wdGlvbnModG9kb0xpc3RzLCBkYXRhTGlzdElkKTtcbiAgfSk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9ICdUb0RvJztcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcblxuICBsb2dvRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICByaWdodERpdi5hcHBlbmRDaGlsZChhZGRJY29uKTtcbiAgcmlnaHREaXYuYXBwZW5kQ2hpbGQobG9nb0Rpdik7XG5cbiAgbmF2SW5uZXIuYXBwZW5kQ2hpbGQobGVmdERpdik7XG4gIG5hdklubmVyLmFwcGVuZENoaWxkKGNlbnRlckRpdik7XG4gIG5hdklubmVyLmFwcGVuZENoaWxkKHJpZ2h0RGl2KTtcblxuICBuYXYuYXBwZW5kQ2hpbGQobmF2SW5uZXIpO1xuXG4gIHJldHVybiBuYXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gIG1haW4uc2V0QXR0cmlidXRlKCdpZCcsICdtYWluJyk7XG5cbiAgcmV0dXJuIG1haW47XG59XG5cbmZ1bmN0aW9uIG5ld1Rhc2tQb3B1cCgpIHtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvdmVybGF5LmNsYXNzTmFtZSA9ICdvdmVybGF5Myc7XG5cbiAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcG9wdXAuY2xhc3NOYW1lID0gJ3BvcHVwMyc7XG5cbiAgY29uc3QgcG9wdXBUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcG9wdXBUb3AuY2xhc3NOYW1lID0gJ3BvcHVwLXRvcDMnO1xuXG4gIGNvbnN0IHRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdGl0bGVUZXh0LnRleHRDb250ZW50ID0gJ05ldyBUYXNrJztcbiAgcG9wdXBUb3AuYXBwZW5kQ2hpbGQodGl0bGVUZXh0KTtcblxuICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgY2xvc2VCdXR0b24uY2xhc3NOYW1lID0gJ2ZhLXNvbGlkIGZhLXhtYXJrJztcbiAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU92ZXJsYXkpO1xuICBwb3B1cFRvcC5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG5cbiAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBUb3ApO1xuXG4gIGNvbnN0IHBvcHVwTWlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBvcHVwTWlkLmNsYXNzTmFtZSA9ICdwb3B1cC1taWQzJztcblxuICBjb25zdCBtaWRMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1pZExlZnQuY2xhc3NOYW1lID0gJ21pZC1sZWZ0JztcblxuICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZTonO1xuICBtaWRMZWZ0LmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0aXRsZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gIHRpdGxlSW5wdXQubWF4TGVuZ3RoID0gNjA7XG4gIHRpdGxlSW5wdXQuaWQgPSAndGFzay10aXRsZSc7XG4gIHRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICBtaWRMZWZ0LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG4gIGNvbnN0IHRpdGxlQWxlcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRpdGxlQWxlcnQuY2xhc3NMaXN0LmFkZCgndGl0bGUtYWxlcnQnKTtcbiAgdGl0bGVBbGVydC50ZXh0Q29udGVudCA9ICdUaXRsZSBpcyByZXF1aXJlZC4nO1xuICB0aXRsZUFsZXJ0LnN0eWxlLmNvbG9yID0gJ3JlZCc7XG4gIHRpdGxlQWxlcnQuc3R5bGUubWFyZ2luVG9wID0gJyc7XG4gIHRpdGxlQWxlcnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgbWlkTGVmdC5hcHBlbmRDaGlsZCh0aXRsZUFsZXJ0KTtcblxuICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbjonO1xuICBtaWRMZWZ0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uVGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICBkZXNjcmlwdGlvblRleHRhcmVhLmlkID0gJ2Rlc2NyaXB0aW9uJztcbiAgZGVzY3JpcHRpb25UZXh0YXJlYS5jb2xzID0gMzA7XG4gIGRlc2NyaXB0aW9uVGV4dGFyZWEucm93cyA9IDQ7XG4gIGRlc2NyaXB0aW9uVGV4dGFyZWEubWF4TGVuZ3RoID0gMTgwO1xuICBtaWRMZWZ0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGV4dGFyZWEpO1xuXG4gIHBvcHVwTWlkLmFwcGVuZENoaWxkKG1pZExlZnQpO1xuXG4gIGNvbnN0IG1pZFJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1pZFJpZ2h0LmNsYXNzTmFtZSA9ICdtaWQtcmlnaHQnO1xuXG4gIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgZGF0ZTonO1xuICBtaWRSaWdodC5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuXG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGRhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuICBkYXRlSW5wdXQuaWQgPSAndGFzay1kYXRlJztcbiAgZGF0ZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgbWlkUmlnaHQuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblxuICBjb25zdCBkYXRlQWxlcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRhdGVBbGVydC5jbGFzc0xpc3QuYWRkKCdkYXRlLWFsZXJ0Jyk7XG4gIGRhdGVBbGVydC50ZXh0Q29udGVudCA9ICdEYXRlIGlzIHJlcXVpcmVkLic7XG4gIGRhdGVBbGVydC5zdHlsZS5jb2xvciA9ICdyZWQnO1xuICBkYXRlQWxlcnQuc3R5bGUubWFyZ2luVG9wID0gJyc7XG4gIGRhdGVBbGVydC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gIG1pZFJpZ2h0LmFwcGVuZENoaWxkKGRhdGVBbGVydCk7XG5cbiAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6JztcbiAgbWlkUmlnaHQuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG5cbiAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgcHJpb3JpdHlTZWxlY3QuaWQgPSAncHJpb3JpdHknO1xuICBwcmlvcml0eVNlbGVjdC5yZXF1aXJlZCA9IHRydWU7XG4gIFsnTG93JywgJ01lZGl1bScsICdIaWdoJ10uZm9yRWFjaCgocHJpb3JpdHlUZXh0KSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uLnZhbHVlID0gcHJpb3JpdHlUZXh0LnRvTG93ZXJDYXNlKCk7XG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJpb3JpdHlUZXh0O1xuICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIH0pO1xuICBtaWRSaWdodC5hcHBlbmRDaGlsZChwcmlvcml0eVNlbGVjdCk7XG5cbiAgY29uc3QgcHJpb3JpdHlBbGVydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcHJpb3JpdHlBbGVydC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1hbGVydCcpO1xuICBwcmlvcml0eUFsZXJ0LnRleHRDb250ZW50ID0gJ1ByaW9yaXR5IGlzIHJlcXVpcmVkLic7XG4gIHByaW9yaXR5QWxlcnQuc3R5bGUuY29sb3IgPSAncmVkJztcbiAgcHJpb3JpdHlBbGVydC5zdHlsZS5tYXJnaW5Ub3AgPSAnJztcbiAgcHJpb3JpdHlBbGVydC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gIG1pZFJpZ2h0LmFwcGVuZENoaWxkKHByaW9yaXR5QWxlcnQpO1xuXG4gIGNvbnN0IGxpc3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGxpc3RMYWJlbC50ZXh0Q29udGVudCA9ICdMaXN0Oic7XG4gIG1pZFJpZ2h0LmFwcGVuZENoaWxkKGxpc3RMYWJlbCk7XG5cbiAgY29uc3QgbGlzdFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBsaXN0U2VsZWN0LmlkID0gJ3RoZWxpc3QnO1xuICBsaXN0U2VsZWN0LnJlcXVpcmVkID0gdHJ1ZTtcblxuICBtaWRSaWdodC5hcHBlbmRDaGlsZChsaXN0U2VsZWN0KTtcblxuICBjb25zdCBsaXN0QWxlcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGxpc3RBbGVydC5jbGFzc0xpc3QuYWRkKCdsaXN0LWFsZXJ0Jyk7XG4gIGxpc3RBbGVydC50ZXh0Q29udGVudCA9ICdMaXN0IGlzIHJlcXVpcmVkLic7XG4gIGxpc3RBbGVydC5zdHlsZS5jb2xvciA9ICdyZWQnO1xuICBsaXN0QWxlcnQuc3R5bGUubWFyZ2luVG9wID0gJyc7XG4gIGxpc3RBbGVydC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gIG1pZFJpZ2h0LmFwcGVuZENoaWxkKGxpc3RBbGVydCk7XG5cbiAgcG9wdXBNaWQuYXBwZW5kQ2hpbGQobWlkUmlnaHQpO1xuXG4gIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwTWlkKTtcblxuICBjb25zdCBwb3B1cEJvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwb3B1cEJvdC5jbGFzc05hbWUgPSAncG9wdXAtYm90Myc7XG5cbiAgY29uc3QgdGV4dENsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHRleHRDbG9zZUJ1dHRvbi5pZCA9ICdjbG9zZSc7XG4gIHRleHRDbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDbG9zZSc7XG4gIHRleHRDbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlT3ZlcmxheSk7XG4gIHBvcHVwQm90LmFwcGVuZENoaWxkKHRleHRDbG9zZUJ1dHRvbik7XG5cbiAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBhZGRUYXNrQnV0dG9uLmlkID0gJ2FkZHRhc2snO1xuICBhZGRUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcbiAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHZhbGlkYXRlQW5kQWRkVGFzayk7XG4gIHBvcHVwQm90LmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24pO1xuXG4gIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwQm90KTtcblxuICBvdmVybGF5LmFwcGVuZENoaWxkKHBvcHVwKTtcblxuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xufVxuXG5mdW5jdGlvbiBjbG9zZU92ZXJsYXkoKSB7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheTMnKTtcbiAgb3ZlcmxheS5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlzdE9wdGlvbnModG9kb0xpc3RzLCBsaXN0dmFsdWUpIHtcbiAgY29uc3QgbGlzdFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGVsaXN0Jyk7XG5cbiAgbGlzdFNlbGVjdC5pbm5lckhUTUwgPSAnJztcbiAgY29uc3QgaWdub3JlSWRzID0gWycxMTExMTEnLCAnMjIyMjIyJywgJzMzMzMzMycsICc0NDQ0NDQnXTtcblxuICB0b2RvTGlzdHMuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgIGlmICghaWdub3JlSWRzLmluY2x1ZGVzKGxpc3QuaWQpKSB7XG4gICAgICBjb25zdCBsaXN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBsaXN0T3B0aW9uLnZhbHVlID0gbGlzdC5pZDtcbiAgICAgIGxpc3RPcHRpb24udGV4dENvbnRlbnQgPSBsaXN0Lm5hbWU7XG4gICAgICBsaXN0U2VsZWN0LmFwcGVuZENoaWxkKGxpc3RPcHRpb24pO1xuICAgIH1cbiAgfSk7XG5cbiAgbGlzdFNlbGVjdC52YWx1ZSA9IGxpc3R2YWx1ZTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVBbmRBZGRUYXNrKCkge1xuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stdGl0bGUnKTtcbiAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZGF0ZScpO1xuICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpO1xuICBjb25zdCBsaXN0U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoZWxpc3QnKTtcblxuICBjb25zdCB0aXRsZUFsZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlLWFsZXJ0Jyk7XG4gIGNvbnN0IGRhdGVBbGVydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLWFsZXJ0Jyk7XG4gIGNvbnN0IHByaW9yaXR5QWxlcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHktYWxlcnQnKTtcbiAgY29uc3QgbGlzdEFsZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtYWxlcnQnKTtcblxuICBsZXQgaXNWYWxpZCA9IHRydWU7XG5cbiAgaWYgKHRpdGxlSW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgdGl0bGVBbGVydC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBpc1ZhbGlkID0gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgdGl0bGVBbGVydC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG5cbiAgaWYgKGRhdGVJbnB1dC52YWx1ZSA9PT0gJycpIHtcbiAgICBkYXRlQWxlcnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgaXNWYWxpZCA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIGRhdGVBbGVydC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG5cbiAgaWYgKHByaW9yaXR5U2VsZWN0LnZhbHVlID09PSAnJykge1xuICAgIHByaW9yaXR5QWxlcnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgaXNWYWxpZCA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHByaW9yaXR5QWxlcnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuXG4gIGlmIChsaXN0U2VsZWN0LnZhbHVlID09PSAnJykge1xuICAgIGxpc3RBbGVydC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBpc1ZhbGlkID0gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgbGlzdEFsZXJ0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cblxuICBpZiAoaXNWYWxpZCkge1xuICAgIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSBsaXN0U2VsZWN0LnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJyk7XG5cbiAgICBjb25zdCB0aGVUb2RvID0gbmV3IFRvZG8odGl0bGVJbnB1dC52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUsIGRhdGVJbnB1dC52YWx1ZSwgcHJpb3JpdHlTZWxlY3QudmFsdWUpO1xuICAgIGFkZFRvZG9Ub1RvZG9MaXN0KHNlbGVjdGVkVmFsdWUsIHRoZVRvZG8pO1xuXG4gICAgY2xvc2VPdmVybGF5KCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkVG9kb1RvVG9kb0xpc3Qoc2VsZWN0ZWRWYWx1ZSwgbmV3VG9kbykge1xuICBjb25zdCBvcmlnaW5hbFRvZG9MaXN0ID0gZ2V0VG9kb0xpc3RCeUlkKHNlbGVjdGVkVmFsdWUpO1xuXG4gIGlmICghb3JpZ2luYWxUb2RvTGlzdCkge1xuICAgIGNvbnNvbGUubG9nKCdUb2RvTGlzdCBub3QgZm91bmQgZm9yIHRoZSBzZWxlY3RlZCB2YWx1ZS4nKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB1cGRhdGVkVG9kb0xpc3QgPSBuZXcgVG9kb0xpc3Qob3JpZ2luYWxUb2RvTGlzdC5uYW1lLCBvcmlnaW5hbFRvZG9MaXN0LmlkKTtcblxuICB1cGRhdGVkVG9kb0xpc3QudG9kb3MgPSBbLi4ub3JpZ2luYWxUb2RvTGlzdC50b2RvcywgbmV3VG9kb107XG5cbiAgY29uc3QgdG9kb0xpc3RzID0gZ2V0VG9kb0xpc3RzKCk7XG4gIGNvbnN0IHVwZGF0ZWRUb2RvTGlzdHMgPSB0b2RvTGlzdHMubWFwKCh0b2RvTGlzdCkgPT4gKHRvZG9MaXN0LmlkID09PSBzZWxlY3RlZFZhbHVlID8gdXBkYXRlZFRvZG9MaXN0IDogdG9kb0xpc3QpKTtcblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb0xpc3RzJywgSlNPTi5zdHJpbmdpZnkodXBkYXRlZFRvZG9MaXN0cykpO1xuXG4gIHJlbmRlclRhc2tzKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRUb2RvTGlzdHMoKSB7XG4gIGNvbnN0IGRlZmF1bHRMaXN0c0RhdGEgPSBbXG4gICAgeyBuYW1lOiAnSW5ib3gnLCBpZDogJzAwMDAwMCcgfSxcbiAgICB7IG5hbWU6ICdUb2RheScsIGlkOiAnMTExMTExJyB9LFxuICAgIHsgbmFtZTogJ1VwY29taW5nJywgaWQ6ICcyMjIyMjInIH0sXG4gICAgeyBuYW1lOiAnQWxsJywgaWQ6ICczMzMzMzMnIH0sXG4gICAgeyBuYW1lOiAnSW1wb3J0YW50JywgaWQ6ICc0NDQ0NDQnIH0sXG4gIF07XG5cbiAgY29uc3QgZXhpc3RpbmdMaXN0cyA9IGdldFRvZG9MaXN0cygpO1xuICBjb25zdCBtaXNzaW5nTGlzdHNEYXRhID0gZGVmYXVsdExpc3RzRGF0YS5maWx0ZXIoKGRlZmF1bHRMaXN0KSA9PiAhZXhpc3RpbmdMaXN0cy5zb21lKChleGlzdGluZ0xpc3QpID0+IGV4aXN0aW5nTGlzdC5uYW1lID09PSBkZWZhdWx0TGlzdC5uYW1lKSk7XG5cbiAgY29uc3QgdXBkYXRlZExpc3RzID0gZXhpc3RpbmdMaXN0cy5jb25jYXQobWlzc2luZ0xpc3RzRGF0YS5tYXAoKGRhdGEpID0+IG5ldyBUb2RvTGlzdChkYXRhLm5hbWUsIGRhdGEuaWQpKSk7XG4gIHNhdmVUb2RvTGlzdHModXBkYXRlZExpc3RzKTtcblxuICB1cGRhdGVVc2VkSWRzKGRlZmF1bHRMaXN0c0RhdGEubWFwKChsaXN0KSA9PiBsaXN0LmlkKSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVVzZWRJZHMoaWRzVG9JbmNsdWRlKSB7XG4gIGNvbnN0IHVzZWRJZHMgPSBnZXRVc2VkSWRzKCk7XG4gIGNvbnN0IHVuaXF1ZVVzZWRJZHMgPSBBcnJheS5mcm9tKG5ldyBTZXQodXNlZElkcy5jb25jYXQoaWRzVG9JbmNsdWRlKSkpO1xuICBzYXZlVXNlZElkcyh1bmlxdWVVc2VkSWRzKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlU2NyZWVuV2lkdGhDaGFuZ2UoKSB7XG4gIGNvbnN0IHNjcmVlbldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZS1zaWRlYmFyJyk7XG5cbiAgaWYgKHNjcmVlbldpZHRoIDw9IDc2OCkge1xuICAgIGlmIChzY3JlZW5XaWR0aCA8PSAzMDApIHtcbiAgICAgIHNpZGViYXIuc3R5bGUud2lkdGggPSBgJHtzY3JlZW5XaWR0aH1weGA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNpZGViYXIuc3R5bGUud2lkdGggPSAnMzAwcHgnO1xuICAgIH1cbiAgICBzaWRlYmFyLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICBzaWRlYmFyLnN0eWxlLmxlZnQgPSAnLTEwMCUnO1xuICAgIG1haW4uc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9ICcxZnInO1xuICAgIG1haW4uc3R5bGUuZ3JpZFRlbXBsYXRlQXJlYXMgPSAnXCJtYWluLWFyZWFcIic7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWJhcnMtc3RhZ2dlcmVkJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ZhLWJhcnMnKTtcbiAgfSBlbHNlIHtcbiAgICBzaWRlYmFyLnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgc2lkZWJhci5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgc2lkZWJhci5zdHlsZS53aWR0aCA9ICcnO1xuICAgIG1haW4uc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9ICczMDBweCAxZnInO1xuICAgIG1haW4uc3R5bGUuZ3JpZFRlbXBsYXRlQXJlYXMgPSAnXCJzaWRlYmFyIG1haW4tYXJlYVwiJztcbiAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtYmFycycpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmYS1iYXJzLXN0YWdnZXJlZCcpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVdlYnBhZ2UoKSB7XG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG5cbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBmb3JtYXR0ZWREYXRlID0gY3VycmVudERhdGUudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZUlucHV0JykudmFsdWUgPSBmb3JtYXR0ZWREYXRlO1xuXG4gIGNyZWF0ZURlZmF1bHRUb2RvTGlzdHMoKTtcblxuICBpbml0aWFsaXplU2lkZWJhcigpO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVTY3JlZW5XaWR0aENoYW5nZSk7XG5cbiAgaGFuZGxlU2NyZWVuV2lkdGhDaGFuZ2UoKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==