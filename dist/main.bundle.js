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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@10..48,200;10..48,300;10..48,400;10..48,500;10..48,600;10..48,700;10..48,800&display=swap');\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: Ubuntu, sans-serif;\n}\n\nbody {\n    height: 100vh;\n    overflow: auto;\n}\n\n.main-content {\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 45px 1fr;\n    grid-template-areas:\n        'navbar'\n        'main';\n}\n\n.nav {\n    background-color: #344e41;\n    grid-area: navbar;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #f1faee;\n    position: sticky;\n    top: 0;\n    z-index: 100;\n}\n\n.nav-inner {\n    width: 90%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.left-nav,\n.right-nav {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.logo {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding-left: 1.5rem;\n    gap: 0.25rem;\n    font-family: 2rem;\n    color: #f1faee;\n    user-select: none;\n}\n\n.nav .fa-plus {\n    font-size: 1.25rem;\n    background-color: transparent;\n    padding: 0.25rem;\n    border-radius: 5px;\n    color: white;\n    transition: 0.2s ease;\n}\n\n.nav .fa-plus:hover {\n    background-color: #888;\n}\n\n.nav .fa-plus:active {\n    transform: scale(0.95);\n}\n\n.left-nav {\n    display: flex;\n    align-items: center;\n    text-align: center;\n    gap: 1.5rem;\n    font-size: 1.2rem;\n    transition: 0.2s ease;\n}\n\n.left-nav .fa-house {\n    font-size: 1.2rem;\n    transition: 0.3s ease;\n}\n\n.left-nav .fa-bars,\n.fa-bars-staggered {\n    transition: 0.3s ease;\n}\n\n.nav .fa-solid {\n    cursor: pointer;\n    transform: 0.2s ease;\n}\n\n.left-nav .fa-solid:hover {\n    opacity: 50%;\n}\n\n.left-nav .fa-solid:active {\n    transform: scale(0.95);\n}\n\n.center-nav {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n}\n\n#dateInput {\n    background: transparent;\n    border: none;\n    font-size: 1rem;\n    color: white;\n    text-transform: uppercase;\n    background-color: #588157;\n    border-radius: 4px;\n    padding: 0.4rem 1rem;\n    text-align: center;\n    user-select: none;\n}\n\n.main {\n    display: grid;\n    grid-template-rows: 1fr;\n    grid-template-columns: 285px 1fr;\n    grid-template-areas: 'sidebar main-area';\n    height: 100%;\n    transition: 0.3s ease;\n    overflow: hidden;\n}\n\n.sidebar {\n    background-color: #f7f7f7;\n    grid-area: sidebar;\n    padding: 1rem;\n    position: relative;\n    height: 100%;\n    left: 0;\n    transition: 0.3s ease;\n}\n\n.main-area {\n    grid-area: main-area;\n    padding: 1rem;\n    display: flex;\n    justify-content: center;\n    transition: 0.3s ease;\n    overflow: auto;\n}\n\n.menu {\n    text-decoration: none;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n\n.menu li {\n    display: flex;\n    align-items: center;\n    text-align: center;\n    justify-content: space-between;\n    font-size: 1.1rem;\n    margin-bottom: .6rem;\n    padding: 0.5rem;\n    font-weight: 300;\n    cursor: pointer;\n    border-radius: 5px;\n    transition: background-color 0.2s ease;\n    user-select: none;\n}\n\n.nav-buttons:hover {\n    background-color: rgba(0, 0, 0, 0.075);\n}\n\n.menu li div {\n    display: flex;\n    align-items: center;\n    text-align: center;\n}\n\n.menu li i {\n    padding-right: 1rem;\n}\n\n.nav-buttons.active {\n    font-weight: 500;\n}\n\n.today i {\n    color: crimson;\n    opacity: 50%;\n}\n\n.inbox i {\n    color: gray;\n}\n\n.all i {\n    opacity: 70%;\n}\n\n.upcoming i {\n    color: blue;\n    opacity: 50%;\n}\n\n.important i {\n    color: red;\n    opacity: 50%;\n}\n\n.lists i {\n    color: darkorange;\n    opacity: 60%;\n}\n\n.menu .lists {\n    margin-bottom: .5rem;\n}\n\n.lists .fa-chevron-up {\n    color: black;\n    font-size: 1rem;\n    padding-top: 0.1rem;\n}\n\n.accordion {\n    padding-left: 2.5rem;\n    font-size: 1rem;\n    transition: max-height 0.2s ease-out;\n    overflow: hidden;\n    max-height: 0;\n\n}\n\n.create-new i {\n    padding-right: .25rem;\n    opacity: 65%;\n}\n\n.accordion .create-new {\n    padding-left: 1.5rem;\n    padding-top: .5rem;\n    cursor: pointer;\n    user-select: none;\n    transition: all 0.1s ease-in-out;\n    display: flex;\n    align-items: center;\n    text-align: center;\n}\n\n.accordion .create-new:hover {\n    color: #3a5a40;\n    transform: translateX(-5%);\n}\n\n.accordion .new-lists i {\n    padding-right: .5rem;\n    font-size: .5rem;\n    opacity: 50%;\n}\n\n.the-new-lists {\n    padding: .5rem;\n    width: 100%;\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n    text-align: center;\n    margin-bottom: 0.5rem;\n    user-select: none;\n    cursor: pointer;\n    font-weight: 300;\n    justify-content: space-between;\n}\n\n.the-new-lists div {\n    display: flex;\n    align-items: center;\n}\n\n.the-new-lists .trash {\n    justify-content: flex-end;\n}\n\n.the-new-lists .trash .fa-trash-can {\n    display: none;\n    font-size: 1rem;\n    color: grey;\n    transition: all 0.1s ease-in-out;\n}\n\n.the-new-lists .trash .fa-trash-can:hover {\n    color: black;\n    transform: scale(1.05);\n}\n\n.main-child {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 90%;\n}\n\n.main-area .main-child .title {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    width: 100%;\n    padding-top: 2rem;\n    padding-left: 1rem;\n    font-weight: 400;\n    font-size: 1.75rem;\n    color: #444;\n    user-select: none;\n}\n\n.main-area .main-child .todo-section {\n    width: 90%;\n    padding: 2rem 0rem;\n}\n\n.overlay,\n.overlay2 {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 500;\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    background-color: rgba(0, 0, 0, 0.45);\n    overflow: hidden;\n}\n\n.popup,\n.popup2 {\n    background-color: white;\n    max-width: 500px;\n    width: 100%;\n    border-radius: 5px;\n    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.4);\n    margin: 1rem;\n    z-index: 1000;\n    position: absolute;\n}\n\n.popup .fa-xmark,\n.popup2 .fa-xmark {\n    top: 1rem;\n    right: 1rem;\n    cursor: pointer;\n    padding: .5rem;\n    background-color: #eee;\n    color: #111;\n    border-radius: 50%;\n}\n\n.popup .popup-top,\n.popup2 .popup-top2 {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 1rem;\n    padding: 1.5rem;\n    border-bottom: solid 1px rgba(0, 0, 0, 0.2);\n}\n\n.popup .popup-top p {\n    font-size: 1.75rem;\n}\n\n.popup2 .popup-top2 p {\n    font-size: 1.25rem;\n    text-align: center;\n    padding-top: 1rem;\n}\n\n.popup .popup-mid,\n.popup2 .popup-mid {\n    padding: 0rem 1.5rem;\n    margin-bottom: 1rem;\n}\n\n.popup .popup-mid p,\n.popup2 .popup-mid p {\n    margin-bottom: .5rem;\n}\n\n.popup .popup-mid input,\n.popup2 .popup-mid input {\n    width: 100%;\n    font-size: 1.25rem;\n    padding: 0.25rem 0.2rem;\n    border-radius: 4px;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    transition: all 0.2s ease;\n}\n\n.popup .popup-mid input:hover,\n.popup2 .popup-mid input:hover {\n    border: solid 1px #3a5a40;\n}\n\n.popup .popup-mid input:focus,\n.popup2 .popup-mid input:focus {\n    border: 2px solid #3a5a40;\n    outline: none;\n}\n\n.popup .popup-bot,\n.popup2 .popup-bot2 {\n    padding: 0rem 1.5rem;\n    margin-bottom: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    gap: .5rem;\n}\n\n.popup .popup-bot #close,\n.popup2 .popup-bot2 #close {\n    font-size: 1.1rem;\n    padding: .5rem;\n    border-radius: 4px;\n    outline: none;\n    border: 1px solid rgba(0, 0, 0, 0.6);\n    color: rgba(0, 0, 0, 0.6);\n    background-color: transparent;\n    cursor: pointer;\n}\n\n.popup .popup-bot #close:hover,\n.popup2 .popup-bot2 #close:hover {\n    border: 1px solid transparent;\n    color: white;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.popup .popup-bot #addition,\n.popup2 .popup-bot2 #deletelist {\n    font-size: 1.1rem;\n    padding: .5rem 2rem;\n    border-radius: 4px;\n    outline: none;\n    border: 1px solid transparent;\n    color: white;\n    background-color: #588157;\n    cursor: pointer;\n}\n\n#deletetask {\n    font-size: 1.1rem;\n    padding: .5rem 2rem;\n    border-radius: 4px;\n    outline: none;\n    border: 1px solid transparent;\n    color: white;\n    background-color: #588157;\n    cursor: pointer;\n}\n\n.popup .popup-bot #addition:hover,\n.popup2 .popup-bot2 #deletelist:hover {\n    transform: scale(1.05);\n}\n\n.popup .popup-bot #addition:active,\n.popup2 .popup-bot2 #deletelist:active {\n    transform: scale(1);\n}\n\n.popup .fa-xmark:hover {\n    transform: scale(1.2);\n}\n\n.popup .fa-xmark:active {\n    transform: scale(1);\n}\n\n.popup .popup-bot #addition:hover {\n    transform: scale(1.05);\n}\n\n.popup .popup-bot #addition:active {\n    transform: scale(1);\n}\n\n.popup2 .popup-top2 {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 1rem;\n    padding: 1.5rem;\n    border-bottom: solid 1px rgba(0, 0, 0, 0.2);\n}\n\n.popup2 .popup-top2 .fa-triangle-exclamation {\n    font-size: 4.5rem;\n    color: red;\n    opacity: 70%;\n}\n\n.popup2 .popup-bot2 {\n    padding: 0rem 1.5rem;\n    margin-bottom: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    gap: .5rem;\n}\n\n.popup2 .popup-bot2 #deletelist {\n    font-size: 1.1rem;\n    padding: .5rem;\n    border-radius: 4px;\n    outline: none;\n    border: 1px solid transparent;\n    color: white;\n    background-color: #588157;\n    cursor: pointer;\n}\n\n.popup2 .popup-bot2 #deletelist:hover {\n    transform: scale(1.05);\n}\n\n.popup2 .popup-bot2 #deletelist:active {\n    transform: scale(1);\n}\n\n.popup2 .fa-xmark:hover {\n    transform: scale(1.2);\n}\n\n.popup2 .fa-xmark:active {\n    transform: scale(1);\n}\n\n.popup2 .popup-bot2 #deletelist:hover {\n    transform: scale(1.05);\n}\n\n.popup2 .popup-bot2 #deletelist:active {\n    transform: scale(1);\n}\n\n.popup2 .popup-top2 {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 1rem;\n    padding: 1.5rem;\n    border-bottom: solid 1px rgba(0, 0, 0, 0.2);\n}\n\n.popup2 .popup-top2 .fa-triangle-exclamation {\n    font-size: 4.5rem;\n    color: red;\n    opacity: 70%;\n}\n\n.popup2 .popup-bot2 {\n    padding: 0rem 1.5rem;\n    margin-bottom: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    gap: .5rem;\n}\n\n.popup2 .popup-bot2 #deletelist {\n    font-size: 1.1rem;\n    padding: .5rem;\n    border-radius: 4px;\n    outline: none;\n    border: 1px solid transparent;\n    color: white;\n    background-color: #588157;\n    cursor: pointer;\n}\n\n.popup2 .popup-bot2 #deletelist:hover {\n    transform: scale(1.05);\n}\n\n.popup2 .popup-bot2 #deletelist:active {\n    transform: scale(1);\n}\n\n.popup2 .fa-xmark:hover {\n    transform: scale(1.2);\n}\n\n.popup2 .fa-xmark:active {\n    transform: scale(1);\n}\n\n.popup2 .popup-bot2 #deletelist:hover {\n    transform: scale(1.05);\n}\n\n.popup2 .popup-bot2 #deletelist:active {\n    transform: scale(1);\n}\n\n.overlay3 {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 500;\n    width: 100vw;\n    height: 100vh;\n    position: fixed;\n    background-color: rgba(0, 0, 0, 0.45);\n    overflow: hidden;\n}\n\n.popup3 {\n    background-color: white;\n    max-width: 500px;\n    width: 100%;\n    border-radius: 5px;\n    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.4);\n    margin: 1rem;\n    z-index: 1000;\n    position: absolute;\n}\n\n.popup3 .fa-xmark {\n    top: 1rem;\n    right: 1rem;\n    cursor: pointer;\n    padding: .5rem;\n    background-color: #eee;\n    color: #111;\n    border-radius: 50%;\n}\n\n.popup3 .fa-xmark:hover {\n    transform: scale(1.2);\n}\n\n.popup3 .fa-xmark:active {\n    transform: scale(1);\n}\n\n.popup3 .popup-top3 {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 1rem;\n    padding: 1rem;\n    border-bottom: solid 1px rgba(0, 0, 0, 0.2);\n}\n\n.popup3 .popup-top3 p {\n    font-size: 1.5rem;\n}\n\n.popup3 .popup-mid3 {\n    padding: 0rem 1.5rem;\n    margin-bottom: 1rem;\n    display: flex;\n    gap: 1rem;\n    margin-bottom: 1rem;\n    flex-wrap: wrap;\n}\n\n.mid-left {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    width: 100%;\n}\n\n.mid-right {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    width: 100%;\n}\n\n.popup3 .popup-mid3 label {\n    font-size: 1.1rem;\n    font-weight: 300;\n    padding-top: 0.2rem;\n}\n\n.popup3 .popup-mid3 textarea {\n    resize: none;\n    border-radius: 4px;\n    padding: 0.25rem;\n    font-size: 1rem;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n}\n\n.popup3 .popup-mid3 textarea:focus {\n    border: 2px solid #3a5a40;\n    outline: none;\n}\n\n.popup3 .popup-mid3 input[type='text'] {\n    font-size: 1rem;\n    padding: 0.25rem 0.2rem;\n    border-radius: 4px;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    transition: all 0.2s ease;\n}\n\n.popup3 .popup-mid3 select {\n    font-size: 1rem;\n    padding: 0.25rem;\n    border-radius: 4px;\n    background-color: white;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n}\n\n.popup3 .popup-mid3 .mid-right #task-date {\n    font-size: 1rem;\n    padding: 0.25rem;\n    border-radius: 4px;\n    outline: none;\n    border: solid 1px rgba(0, 0, 0, 0.2);\n    width: 100%;\n}\n\n.popup3 .popup-mid3 input:hover {\n    border: solid 1px #3a5a40;\n}\n\n.popup3 .popup-mid3 input:focus {\n    border: 2px solid #3a5a40;\n    outline: none;\n}\n\n.popup3 .popup-bot3 {\n    padding: 0rem 1.5rem;\n    margin-bottom: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    gap: .5rem;\n}\n\n.popup3 .popup-bot3 #close {\n    font-size: 1.1rem;\n    padding: .5rem;\n    border-radius: 4px;\n    outline: none;\n    border: 1px solid rgba(0, 0, 0, 0.6);\n    color: rgba(0, 0, 0, 0.6);\n    background-color: transparent;\n    cursor: pointer;\n}\n\n.popup3 .popup-bot3 #close:hover {\n    border: 1px solid transparent;\n    color: white;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.popup3 .popup-bot3 #addtask {\n    font-size: 1.1rem;\n    padding: .5rem 2rem;\n    border-radius: 4px;\n    outline: none;\n    border: 1px solid transparent;\n    color: white;\n    background-color: #588157;\n    cursor: pointer;\n}\n\n#edittask {\n    font-size: 1.1rem;\n    padding: .5rem 2rem;\n    border-radius: 4px;\n    outline: none;\n    border: 1px solid transparent;\n    color: white;\n    background-color: #588157;\n    cursor: pointer;\n}\n\n.popup3 .popup-bot3 #addtask:hover {\n    transform: scale(1.05);\n}\n\n.popup3 .popup-bot3 #addtask:active {\n    transform: scale(1);\n}\n\n.task-container {\n    display: flex;\n    width: 100%;\n    flex-direction: column;\n    align-items: center;\n}\n\n.each-task-section-top {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    font-size: 1rem;\n    align-items: center;\n    margin-bottom: 1.5rem;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n    padding-bottom: 1rem;\n    cursor: pointer;\n}\n\n.task-left {\n    display: flex;\n    align-items: center;\n    padding-right: 1rem;\n    gap: .5rem;\n}\n\n.task-left #tasktitle {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 30vw;\n}\n\n.task-right {\n    display: flex;\n    gap: 1rem;\n    align-items: center;\n    color: gray;\n}\n\n.task-right .task-icons {\n    cursor: pointer;\n}\n\n.task-right .task-icons:hover {\n    color: black;\n    transform: scale(1.3);\n}\n\n.task-right .task-icons:active {\n    color: black;\n    transform: scale(1.15);\n}\n\n.each-task-section-bot {\n    overflow: hidden;\n    display: none;\n    align-items: center;\n    flex-wrap: wrap;\n    border-radius: 5px;\n    padding: 1rem;\n    border: 1px solid rgba(0, 0, 0, 0.15);\n    margin-bottom: 1.5rem;\n    margin-top: -.75rem;\n    justify-content: space-between;\n    width: 99%;\n    min-width: 200px;\n}\n\n.each-task-section-bot p {\n    font-weight: 300;\n}\n\n.bot-right,\n.bot-left {\n    width: 49%;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.right-top,\n.right-bot,\n.left-top,\n.left-bot {\n    display: flex;\n    gap: .75rem;\n    flex-wrap: wrap;\n}\n\n.right-top,\n.left-top {\n    padding-bottom: 1rem;\n    align-self: flex-start;\n    display: flex;\n    width: 100%;\n}\n\n.each-task-section-bot p.bolden {\n    font-weight: 500;\n}\n\n.right-top #long,\n.left-top #long {\n    word-wrap: break-word;\n    overflow: hidden;\n}\n\n.fa-flag {\n    opacity: 70%;\n}\n\n@media (max-width: 600px) {\n    .popup {\n        max-width: 90%;\n    }\n\n    #dateInput {\n        display: none;\n    }\n\n    .popup2 {\n        max-width: 90%;\n    }\n\n    .popup3 {\n        max-width: 90%;\n    }\n}\n\n@media (max-width: 300px) {\n    .main-area .main-child .todo-section {\n        width: 100%;\n    }\n\n    .main-area .main-child {\n        width: 100%;\n    }\n\n    .main-area .main-child .title {\n        padding-top: 0rem;\n        padding-left: 0rem;\n    }\n}\n\n@media (max-width: 480px) {\n    .main-area .main-child .todo-section {\n        width: 95%;\n    }\n\n    .main-area .main-child {\n        width: 100%;\n    }\n\n    .main-area .main-child .title {\n        padding-top: 0rem;\n        padding-left: 0rem;\n    }\n\n    .sidebar {\n        position: fixed;\n        left: -100%;\n    }\n}\n\n@media (max-width: 768px) {\n    .sidebar {\n        position: fixed;\n        left: -100%;\n    }\n\n    .main {\n        grid-template-columns: 1fr;\n        grid-template-areas: ' main-area';\n    }\n\n    .nav-inner {\n        width: 95%;\n    }\n}"],"sourceRoot":""}]);
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
        throw new Error("All possible IDs have been used.");
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

function getTodoListById(id) {
    const todoLists = getTodoLists();
    return todoLists.find(todoList => todoList.id === id);
}

function saveTodoLists(todoLists) {
    localStorage.setItem('todoLists', JSON.stringify(todoLists));
}

function findTodoById(todoId) {
    const todoLists = getTodoLists();

    for (const todoList of todoLists) {
        const foundTodo = todoList.todos.find(todo => todo.id === todoId);
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
        todosToRender = todoLists.flatMap(todoList =>
            todoList.todos.filter(todo => todo.dueDate === today)
        );
    } else if (dataListId === '222222') {
        const nextWeek = new Date();
        nextWeek.setDate(nextWeek.getDate() + 7);
        const nextWeekFormatted = nextWeek.toISOString().substr(0, 10);
        todosToRender = todoLists.flatMap(todoList =>
            todoList.todos.filter(
                todo =>
                    todo.dueDate <= nextWeekFormatted && todo.dueDate >= new Date().toISOString().substr(0, 10)
            )
        );
    } else if (dataListId === '333333') {
        todosToRender = todoLists.flatMap(todoList => todoList.todos);
    } else if (dataListId === '444444') {
        todosToRender = todoLists.flatMap(todoList =>
            todoList.todos.filter(todo => todo.priority === 'high')
        );
    } else {
        const selectedDataListId = activeNavButton.getAttribute('data-list-id');
        todosToRender = (0,_app__WEBPACK_IMPORTED_MODULE_0__.getTodoListById)(selectedDataListId)?.todos || [];
    }

    todosToRender.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

    todosToRender.forEach(todo => {
        createTask(todo.title, todo.dueDate, todo.description, todo.priority, todo.id);
    });

    const mainChild = document.querySelector('.main-child');
    const tasks = mainChild.getElementsByClassName('each-task-section-top');
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

    const generatedBins = document.getElementsByClassName('task-deleter');
    for (const bin of generatedBins) {
        bin.addEventListener('click', function (event) {
            event.stopPropagation()
            const taskId = bin.getAttribute('data-list-id');
            deleteTaskPopup(() => deleteTask(taskId));
        });
    }

    const edits = document.getElementsByClassName('task-editor');
    for (const editor of edits) {
        editor.addEventListener('click', function (event) {
            event.stopPropagation()
            const todo = (0,_app__WEBPACK_IMPORTED_MODULE_0__.findTodoById)(editor.getAttribute('data-list-id'));
            editTaskPopup(todo.title, todo.description, todo.dueDate, todo.priority, todo.id)
            const todoLists = (0,_app__WEBPACK_IMPORTED_MODULE_0__.getTodoLists)();
            createListOptions(todoLists, dataListId);
        })
    }

    const priorityIcons = document.querySelectorAll('.task-priority');
    priorityIcons.forEach(icon => {
        icon.addEventListener('click', (event) => {
            event.stopPropagation()
            const todoId = icon.getAttribute('data-list-id');
            const existingTodo = (0,_app__WEBPACK_IMPORTED_MODULE_0__.findTodoById)(todoId)

            const todoPriority = existingTodo.priority

            let newPriority;
            if (todoPriority === 'low') {
                newPriority = 'medium';
            } else if (todoPriority === 'medium') {
                newPriority = 'high';
            } else if (todoPriority === 'high') {
                newPriority = 'low';
            }

            if (existingTodo) {
                deleteTask(existingTodo.id)

                const updatedTodo = new _app__WEBPACK_IMPORTED_MODULE_0__.Todo(
                    existingTodo.title,
                    existingTodo.description,
                    existingTodo.dueDate,
                    newPriority,
                    existingTodo.id
                );

                addTodoToTodoList(dataListId, updatedTodo);
                (0,_app__WEBPACK_IMPORTED_MODULE_0__.saveTodoLists)((0,_app__WEBPACK_IMPORTED_MODULE_0__.getTodoLists)());

                ;
                renderTasks()
            }
        });
    });

    const checkboxes = document.querySelectorAll('.task-check')
    for (const checkbox of checkboxes) {
        checkbox.addEventListener('click', function(event) {
            event.stopPropagation();
            const taskId = checkbox.getAttribute('data-list-id');
            deleteTask(taskId)
        })
    }
}

function changePriority() {

}

function createTask(taskTitle, dueDate, description, priority, id) {
    const taskContainer = document.querySelector('.todo-section')

    const taskDiv = document.createElement("div");
    taskDiv.className = "task-container";

    const taskSectionTop = document.createElement("div");
    taskSectionTop.className = "each-task-section-top";


    const taskLeft = document.createElement("div");
    taskLeft.className = "task-left";

    const taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    taskCheckbox.classList.add('task-check');
    taskCheckbox.setAttribute('data-list-id', id)
    taskLeft.appendChild(taskCheckbox);

    const taskTitleP = document.createElement("p");
    taskTitleP.id = "tasktitle";
    taskTitleP.textContent = taskTitle;
    taskLeft.appendChild(taskTitleP);

    taskSectionTop.appendChild(taskLeft);

    const taskRight = document.createElement("div");
    taskRight.className = "task-right";

    const editIcon = document.createElement("i");
    editIcon.className = "fa-regular fa-pen-to-square task-icons task-editor";
    editIcon.setAttribute('data-list-id', id)
    editIcon.title = "Edit task";
    taskRight.appendChild(editIcon);

    const priorityIcon = document.createElement("i");
    priorityIcon.className = "fa-solid fa-flag task-icons task-priority";
    priorityIcon.setAttribute('data-list-id', id);
    priorityIcon.title = "Change priority";
    priorityIcon.style.color = (priority === 'high') ? 'red' : (priority === 'medium') ? 'darkorange' : 'teal';

    taskRight.appendChild(priorityIcon);

    const deleteIcon = document.createElement("i");
    deleteIcon.className = "fa-solid fa-trash-can task-icons task-deleter";
    deleteIcon.setAttribute('data-list-id', id)
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
    titleP.setAttribute('id', 'long')
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
    midLeft.appendChild(titleAlert)

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
    ['Low', 'Medium', 'High'].forEach(priorityText => {
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
    addTaskButton.addEventListener('click', function () {
        validateAndEditTask(id);
    })
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
    closeButton.addEventListener('click', function () {
        closeOverlay2()
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
        const todoIndex = todoList.todos.findIndex(todo => todo.id === todoId);
        if (todoIndex !== -1) {
            todoList.todos.splice(todoIndex, 1);
            (0,_app__WEBPACK_IMPORTED_MODULE_0__.saveTodoLists)(todoLists);

            const idIndex = usedIds.indexOf(todoId);
            if (idIndex !== -1) {
                usedIds.splice(idIndex, 1);
                (0,_app__WEBPACK_IMPORTED_MODULE_0__.saveUsedIds)(usedIds);
            }

            renderTasks()
            return;
        }
    }

    console.error('Todo not found');
}

function closeOverlay2() {
    const overlay = document.querySelector('.overlay2');
    overlay.remove()
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

        const newTodo = new _app__WEBPACK_IMPORTED_MODULE_0__.Todo(titleInput.value, description.value, dateInput.value, prioritySelect.value, id);

        addTodoToTodoList(selectedValue, newTodo);
        ;
        renderTasks()
        closeOverlay();
    }
}

function createListOptions(todoLists, listvalue) {
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

    listSelect.value = listvalue;
}

function addTodoToTodoList(selectedValue, newTodo) {
    const originalTodoList = (0,_app__WEBPACK_IMPORTED_MODULE_0__.getTodoListById)(selectedValue);

    if (!originalTodoList) {
        console.log("TodoList not found for the selected value.");
        return;
    }

    const updatedTodoList = new _app__WEBPACK_IMPORTED_MODULE_0__.TodoList(originalTodoList.name, originalTodoList.id);

    updatedTodoList.todos = [...originalTodoList.todos, newTodo];

    const todoLists = (0,_app__WEBPACK_IMPORTED_MODULE_0__.getTodoLists)();
    const updatedTodoLists = todoLists.map(todoList =>
        todoList.id === selectedValue ? updatedTodoList : todoList
    );

    localStorage.setItem('todoLists', JSON.stringify(updatedTodoLists));

    renderTasks()
        ;
}

function initialiseMain(id) {
    createMain(id);
    renderTasks()
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
    today.setAttribute('data-list-id', '111111')
    today.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(today);
        (0,_main_js__WEBPACK_IMPORTED_MODULE_1__["default"])(today.getAttribute('data-list-id'));
    });

    const upcoming = createSidebarItem('upcoming', 'fa-calendar-week', 'Upcoming');
    upcoming.setAttribute('data-list-id', '222222')
    upcoming.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(upcoming);
        (0,_main_js__WEBPACK_IMPORTED_MODULE_1__["default"])(upcoming.getAttribute('data-list-id'));
    });

    const all = createSidebarItem('all', 'fa-calendar-days', 'All');
    all.setAttribute('data-list-id', '333333')
    all.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(all);
        (0,_main_js__WEBPACK_IMPORTED_MODULE_1__["default"])(all.getAttribute('data-list-id'));
    });

    const important = createSidebarItem('important', 'fa-star', 'Important');
    important.setAttribute('data-list-id', '444444')
    important.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(important);
        (0,_main_js__WEBPACK_IMPORTED_MODULE_1__["default"])(important.getAttribute('data-list-id'));
    });

    const lists = document.createElement('li');
    lists.classList.add('lists');
    lists.innerHTML = '<div><i class="fa-solid fa-list-check"></i> <p>Lists</p></div> <div><i class="fa-solid fa-chevron-up"></i></div>';
    lists.addEventListener("click", listClick);

    const accordion = document.createElement('div');
    accordion.classList.add('accordion');

    const newLists = document.createElement('div');
    newLists.classList.add('new-lists');

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

    const inbox = document.querySelector('.inbox');
    setActiveButton(inbox)
    ;(0,_main_js__WEBPACK_IMPORTED_MODULE_1__["default"])('000000')
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
    theTrashIcon.classList.add('fa-regular', 'fa-trash-can', 'list-deleter');
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

    const title = document.querySelector('.todo-title');
    const titlecontent = title.textContent;



    const generatedDivs = document.getElementsByClassName("the-new-lists");
    for (const div of generatedDivs) {
        if (div.textContent === titlecontent) {
            setActiveButton(div)
        }
        const trashIcon = div.querySelector(".trash .fa-trash-can");
        div.addEventListener("mouseenter", () => {
            trashIcon.style.display = "block";
        });

        div.addEventListener("mouseleave", () => {
            trashIcon.style.display = "none";
        });

        div.addEventListener('click', function () {
            if (div.classList.contains("active")) return;
            setActiveButton(div);
            (0,_main_js__WEBPACK_IMPORTED_MODULE_1__["default"])(div.getAttribute('data-list-id'))

        })
    }

    const accordion = document.querySelector('.accordion');
    const generatedBins = accordion.getElementsByClassName('list-deleter');
    for (const bin of generatedBins) {
        bin.addEventListener('click', function (event) {
            event.stopPropagation()
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

function createListOptions(todoLists, listvalue) {
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

        const theTodo = new _app_js__WEBPACK_IMPORTED_MODULE_2__.Todo(titleInput.value, description.value, dateInput.value, prioritySelect.value)
        addTodoToTodoList(selectedValue, theTodo);

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
        ;
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
    const button = document.getElementById('toggle-sidebar');

    if (screenWidth <= 768) {
        if (screenWidth <= 300) {
            sidebar.style.width = screenWidth + 'px';
        } else {
            sidebar.style.width = '300px';
        }
        sidebar.style.position = 'fixed';
        sidebar.style.left = '-100%';
        main.style.gridTemplateColumns = '1fr'
        main.style.gridTemplateAreas = '"main-area"'
        button.classList.remove('fa-bars-staggered');
        button.classList.add('fa-bars');
    } else {
        sidebar.style.left = '0';
        sidebar.style.position = 'relative';
        sidebar.style.width = '';
        main.style.gridTemplateColumns = '300px 1fr'
        main.style.gridTemplateAreas = '"sidebar main-area"'
        button.classList.remove('fa-bars');
        button.classList.add('fa-bars-staggered');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHdJQUF3SSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcseUJBQXlCO0FBQ3hOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlB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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLGtEQUFZO0FBQ2xDLG9CQUFvQixnREFBVTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1EQUFhOztBQUV6QjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaURBQVc7QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIsc0NBQUk7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLHFEQUFlOztBQUU1QztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0MsMENBQVE7O0FBRXhDOztBQUVBLHNCQUFzQixrREFBWTtBQUNsQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcG9CeUY7QUFDbEM7O0FBRXZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQWM7QUFDdEIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBYztBQUN0QixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFjO0FBQ3RCLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQWM7QUFDdEIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBYztBQUN0QixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0QsVUFBVSxZQUFZLEtBQUs7O0FBRTdFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixxREFBWTtBQUNsQyxvQkFBb0IsbURBQVU7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQVc7QUFDbkI7O0FBRUE7QUFDQSxJQUFJLHNEQUFhOztBQUVqQjs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxxREFBYztBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNFQUFzRSxLQUFLOztBQUUzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLHFEQUFZO0FBQ2xDOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0RBQWM7O0FBRTFCLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLDRCQUE0Qiw2Q0FBUTtBQUNwQywwQkFBMEIscURBQVk7QUFDdEM7QUFDQSxRQUFRLHNEQUFhOzs7O0FBSXJCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFZTtBQUNmOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUksb0RBQWM7O0FBRWxCO0FBQ0EsSUFBSSxzREFBVztBQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxYnlDO0FBQ0w7QUFDNEU7O0FBRWhIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLHFEQUFZO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDRCQUE0Qix5Q0FBSTtBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsd0RBQWU7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUFnQyw2Q0FBUTs7QUFFeEM7O0FBRUEsc0JBQXNCLHFEQUFZO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxJQUFJLGtEQUFXO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSw2QkFBNkI7QUFDdkMsVUFBVSw2QkFBNkI7QUFDdkMsVUFBVSxnQ0FBZ0M7QUFDMUMsVUFBVSwyQkFBMkI7QUFDckMsVUFBVTtBQUNWOztBQUVBLDBCQUEwQixxREFBWTtBQUN0QztBQUNBO0FBQ0E7O0FBRUEsK0VBQStFLDZDQUFRO0FBQ3ZGLElBQUksc0RBQWE7O0FBRWpCO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsbURBQVU7QUFDOUI7QUFDQSxJQUFJLG9EQUFXO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxJQUFJLG9EQUFpQjs7QUFFckI7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGVzdC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZXN0LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZXN0LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGVzdC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Rlc3QtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGVzdC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Rlc3QtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZXN0LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZXN0LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZXN0LXBhZ2UvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL3Rlc3QtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZXN0LXBhZ2UvLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly90ZXN0LXBhZ2UvLi9zcmMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90ZXN0LXBhZ2UvLi9zcmMvd2VicGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJyaWNvbGFnZStHcm90ZXNxdWU6b3Bzeix3Z2h0QDEwLi40OCwyMDA7MTAuLjQ4LDMwMDsxMC4uNDgsNDAwOzEwLi40OCw1MDA7MTAuLjQ4LDYwMDsxMC4uNDgsNzAwOzEwLi40OCw4MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OiBVYnVudHUsIHNhbnMtc2VyaWY7XG59XG5cbmJvZHkge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5tYWluLWNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDVweCAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgJ25hdmJhcidcbiAgICAgICAgJ21haW4nO1xufVxuXG4ubmF2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ0ZTQxO1xuICAgIGdyaWQtYXJlYTogbmF2YmFyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogI2YxZmFlZTtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAxMDA7XG59XG5cbi5uYXYtaW5uZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmxlZnQtbmF2LFxuLnJpZ2h0LW5hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubG9nbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xuICAgIGdhcDogMC4yNXJlbTtcbiAgICBmb250LWZhbWlseTogMnJlbTtcbiAgICBjb2xvcjogI2YxZmFlZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLm5hdiAuZmEtcGx1cyB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDAuMjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG59XG5cbi5uYXYgLmZhLXBsdXM6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ODg7XG59XG5cbi5uYXYgLmZhLXBsdXM6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xufVxuXG4ubGVmdC1uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZ2FwOiAxLjVyZW07XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xufVxuXG4ubGVmdC1uYXYgLmZhLWhvdXNlIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG59XG5cbi5sZWZ0LW5hdiAuZmEtYmFycyxcbi5mYS1iYXJzLXN0YWdnZXJlZCB7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xufVxuXG4ubmF2IC5mYS1zb2xpZCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zZm9ybTogMC4ycyBlYXNlO1xufVxuXG4ubGVmdC1uYXYgLmZhLXNvbGlkOmhvdmVyIHtcbiAgICBvcGFjaXR5OiA1MCU7XG59XG5cbi5sZWZ0LW5hdiAuZmEtc29saWQ6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xufVxuXG4uY2VudGVyLW5hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2RhdGVJbnB1dCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg4MTU3O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nOiAwLjRyZW0gMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5tYWluIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjg1cHggMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdzaWRlYmFyIG1haW4tYXJlYSc7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2lkZWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xufVxuXG4ubWFpbi1hcmVhIHtcbiAgICBncmlkLWFyZWE6IG1haW4tYXJlYTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ubWVudSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5tZW51IGxpIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAuNnJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ubmF2LWJ1dHRvbnM6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xufVxuXG4ubWVudSBsaSBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tZW51IGxpIGkge1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG59XG5cbi5uYXYtYnV0dG9ucy5hY3RpdmUge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi50b2RheSBpIHtcbiAgICBjb2xvcjogY3JpbXNvbjtcbiAgICBvcGFjaXR5OiA1MCU7XG59XG5cbi5pbmJveCBpIHtcbiAgICBjb2xvcjogZ3JheTtcbn1cblxuLmFsbCBpIHtcbiAgICBvcGFjaXR5OiA3MCU7XG59XG5cbi51cGNvbWluZyBpIHtcbiAgICBjb2xvcjogYmx1ZTtcbiAgICBvcGFjaXR5OiA1MCU7XG59XG5cbi5pbXBvcnRhbnQgaSB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBvcGFjaXR5OiA1MCU7XG59XG5cbi5saXN0cyBpIHtcbiAgICBjb2xvcjogZGFya29yYW5nZTtcbiAgICBvcGFjaXR5OiA2MCU7XG59XG5cbi5tZW51IC5saXN0cyB7XG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG59XG5cbi5saXN0cyAuZmEtY2hldnJvbi11cCB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBwYWRkaW5nLXRvcDogMC4xcmVtO1xufVxuXG4uYWNjb3JkaW9uIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjJzIGVhc2Utb3V0O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWF4LWhlaWdodDogMDtcblxufVxuXG4uY3JlYXRlLW5ldyBpIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAuMjVyZW07XG4gICAgb3BhY2l0eTogNjUlO1xufVxuXG4uYWNjb3JkaW9uIC5jcmVhdGUtbmV3IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbiAgICBwYWRkaW5nLXRvcDogLjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hY2NvcmRpb24gLmNyZWF0ZS1uZXc6aG92ZXIge1xuICAgIGNvbG9yOiAjM2E1YTQwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNSUpO1xufVxuXG4uYWNjb3JkaW9uIC5uZXctbGlzdHMgaSB7XG4gICAgcGFkZGluZy1yaWdodDogLjVyZW07XG4gICAgZm9udC1zaXplOiAuNXJlbTtcbiAgICBvcGFjaXR5OiA1MCU7XG59XG5cbi50aGUtbmV3LWxpc3RzIHtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4udGhlLW5ldy1saXN0cyBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRoZS1uZXctbGlzdHMgLnRyYXNoIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4udGhlLW5ldy1saXN0cyAudHJhc2ggLmZhLXRyYXNoLWNhbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6IGdyZXk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi50aGUtbmV3LWxpc3RzIC50cmFzaCAuZmEtdHJhc2gtY2FuOmhvdmVyIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLm1haW4tY2hpbGQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA5MCU7XG59XG5cbi5tYWluLWFyZWEgLm1haW4tY2hpbGQgLnRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgICBjb2xvcjogIzQ0NDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLm1haW4tYXJlYSAubWFpbi1jaGlsZCAudG9kby1zZWN0aW9uIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIHBhZGRpbmc6IDJyZW0gMHJlbTtcbn1cblxuLm92ZXJsYXksXG4ub3ZlcmxheTIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB6LWluZGV4OiA1MDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wb3B1cCxcbi5wb3B1cDIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucG9wdXAgLmZhLXhtYXJrLFxuLnBvcHVwMiAuZmEteG1hcmsge1xuICAgIHRvcDogMXJlbTtcbiAgICByaWdodDogMXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBjb2xvcjogIzExMTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5wb3B1cCAucG9wdXAtdG9wLFxuLnBvcHVwMiAucG9wdXAtdG9wMiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ucG9wdXAgLnBvcHVwLXRvcCBwIHtcbiAgICBmb250LXNpemU6IDEuNzVyZW07XG59XG5cbi5wb3B1cDIgLnBvcHVwLXRvcDIgcCB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbn1cblxuLnBvcHVwIC5wb3B1cC1taWQsXG4ucG9wdXAyIC5wb3B1cC1taWQge1xuICAgIHBhZGRpbmc6IDByZW0gMS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5wb3B1cCAucG9wdXAtbWlkIHAsXG4ucG9wdXAyIC5wb3B1cC1taWQgcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG59XG5cbi5wb3B1cCAucG9wdXAtbWlkIGlucHV0LFxuLnBvcHVwMiAucG9wdXAtbWlkIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuXG4ucG9wdXAgLnBvcHVwLW1pZCBpbnB1dDpob3Zlcixcbi5wb3B1cDIgLnBvcHVwLW1pZCBpbnB1dDpob3ZlciB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzNhNWE0MDtcbn1cblxuLnBvcHVwIC5wb3B1cC1taWQgaW5wdXQ6Zm9jdXMsXG4ucG9wdXAyIC5wb3B1cC1taWQgaW5wdXQ6Zm9jdXMge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzYTVhNDA7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLnBvcHVwIC5wb3B1cC1ib3QsXG4ucG9wdXAyIC5wb3B1cC1ib3QyIHtcbiAgICBwYWRkaW5nOiAwcmVtIDEuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGdhcDogLjVyZW07XG59XG5cbi5wb3B1cCAucG9wdXAtYm90ICNjbG9zZSxcbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2Nsb3NlIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wb3B1cCAucG9wdXAtYm90ICNjbG9zZTpob3Zlcixcbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2Nsb3NlOmhvdmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4ucG9wdXAgLnBvcHVwLWJvdCAjYWRkaXRpb24sXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0IHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBwYWRkaW5nOiAuNXJlbSAycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg4MTU3O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2RlbGV0ZXRhc2sge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIHBhZGRpbmc6IC41cmVtIDJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODgxNTc7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucG9wdXAgLnBvcHVwLWJvdCAjYWRkaXRpb246aG92ZXIsXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0OmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG4ucG9wdXAgLnBvcHVwLWJvdCAjYWRkaXRpb246YWN0aXZlLFxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdDphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5wb3B1cCAuZmEteG1hcms6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuLnBvcHVwIC5mYS14bWFyazphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5wb3B1cCAucG9wdXAtYm90ICNhZGRpdGlvbjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLnBvcHVwIC5wb3B1cC1ib3QgI2FkZGl0aW9uOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLnBvcHVwMiAucG9wdXAtdG9wMiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnBvcHVwMiAucG9wdXAtdG9wMiAuZmEtdHJpYW5nbGUtZXhjbGFtYXRpb24ge1xuICAgIGZvbnQtc2l6ZTogNC41cmVtO1xuICAgIGNvbG9yOiByZWQ7XG4gICAgb3BhY2l0eTogNzAlO1xufVxuXG4ucG9wdXAyIC5wb3B1cC1ib3QyIHtcbiAgICBwYWRkaW5nOiAwcmVtIDEuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGdhcDogLjVyZW07XG59XG5cbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Qge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIHBhZGRpbmc6IC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg4MTU3O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdDpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdDphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5wb3B1cDIgLmZhLXhtYXJrOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbi5wb3B1cDIgLmZhLXhtYXJrOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdDpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdDphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5wb3B1cDIgLnBvcHVwLXRvcDIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgcGFkZGluZzogMS41cmVtO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5wb3B1cDIgLnBvcHVwLXRvcDIgLmZhLXRyaWFuZ2xlLWV4Y2xhbWF0aW9uIHtcbiAgICBmb250LXNpemU6IDQuNXJlbTtcbiAgICBjb2xvcjogcmVkO1xuICAgIG9wYWNpdHk6IDcwJTtcbn1cblxuLnBvcHVwMiAucG9wdXAtYm90MiB7XG4gICAgcGFkZGluZzogMHJlbSAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBnYXA6IC41cmVtO1xufVxuXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0IHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4ODE1NztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4ucG9wdXAyIC5mYS14bWFyazpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuXG4ucG9wdXAyIC5mYS14bWFyazphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4ub3ZlcmxheTMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB6LWluZGV4OiA1MDA7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnBvcHVwMyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5wb3B1cDMgLmZhLXhtYXJrIHtcbiAgICB0b3A6IDFyZW07XG4gICAgcmlnaHQ6IDFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IC41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgY29sb3I6ICMxMTE7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ucG9wdXAzIC5mYS14bWFyazpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuXG4ucG9wdXAzIC5mYS14bWFyazphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5wb3B1cDMgLnBvcHVwLXRvcDMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5wb3B1cDMgLnBvcHVwLXRvcDMgcCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5wb3B1cDMgLnBvcHVwLW1pZDMge1xuICAgIHBhZGRpbmc6IDByZW0gMS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5taWQtbGVmdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMC41cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubWlkLXJpZ2h0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAwLjVyZW07XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5wb3B1cDMgLnBvcHVwLW1pZDMgbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgcGFkZGluZy10b3A6IDAuMnJlbTtcbn1cblxuLnBvcHVwMyAucG9wdXAtbWlkMyB0ZXh0YXJlYSB7XG4gICAgcmVzaXplOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5wb3B1cDMgLnBvcHVwLW1pZDMgdGV4dGFyZWE6Zm9jdXMge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzYTVhNDA7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLnBvcHVwMyAucG9wdXAtbWlkMyBpbnB1dFt0eXBlPSd0ZXh0J10ge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5cbi5wb3B1cDMgLnBvcHVwLW1pZDMgc2VsZWN0IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgcGFkZGluZzogMC4yNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ucG9wdXAzIC5wb3B1cC1taWQzIC5taWQtcmlnaHQgI3Rhc2stZGF0ZSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHBhZGRpbmc6IDAuMjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ucG9wdXAzIC5wb3B1cC1taWQzIGlucHV0OmhvdmVyIHtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjM2E1YTQwO1xufVxuXG4ucG9wdXAzIC5wb3B1cC1taWQzIGlucHV0OmZvY3VzIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjM2E1YTQwO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5wb3B1cDMgLnBvcHVwLWJvdDMge1xuICAgIHBhZGRpbmc6IDByZW0gMS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgZ2FwOiAuNXJlbTtcbn1cblxuLnBvcHVwMyAucG9wdXAtYm90MyAjY2xvc2Uge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIHBhZGRpbmc6IC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBvcHVwMyAucG9wdXAtYm90MyAjY2xvc2U6aG92ZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5wb3B1cDMgLnBvcHVwLWJvdDMgI2FkZHRhc2sge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIHBhZGRpbmc6IC41cmVtIDJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODgxNTc7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jZWRpdHRhc2sge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIHBhZGRpbmc6IC41cmVtIDJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODgxNTc7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucG9wdXAzIC5wb3B1cC1ib3QzICNhZGR0YXNrOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG4ucG9wdXAzIC5wb3B1cC1ib3QzICNhZGR0YXNrOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLnRhc2stY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmVhY2gtdGFzay1zZWN0aW9uLXRvcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFzay1sZWZ0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgICBnYXA6IC41cmVtO1xufVxuXG4udGFzay1sZWZ0ICN0YXNrdGl0bGUge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBtYXgtd2lkdGg6IDMwdnc7XG59XG5cbi50YXNrLXJpZ2h0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMXJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiBncmF5O1xufVxuXG4udGFzay1yaWdodCAudGFzay1pY29ucyB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFzay1yaWdodCAudGFzay1pY29uczpob3ZlciB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbn1cblxuLnRhc2stcmlnaHQgLnRhc2staWNvbnM6YWN0aXZlIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbn1cblxuLmVhY2gtdGFzay1zZWN0aW9uLWJvdCB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIG1hcmdpbi10b3A6IC0uNzVyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHdpZHRoOiA5OSU7XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbn1cblxuLmVhY2gtdGFzay1zZWN0aW9uLWJvdCBwIHtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uYm90LXJpZ2h0LFxuLmJvdC1sZWZ0IHtcbiAgICB3aWR0aDogNDklO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5yaWdodC10b3AsXG4ucmlnaHQtYm90LFxuLmxlZnQtdG9wLFxuLmxlZnQtYm90IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogLjc1cmVtO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnJpZ2h0LXRvcCxcbi5sZWZ0LXRvcCB7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZWFjaC10YXNrLXNlY3Rpb24tYm90IHAuYm9sZGVuIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ucmlnaHQtdG9wICNsb25nLFxuLmxlZnQtdG9wICNsb25nIHtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmZhLWZsYWcge1xuICAgIG9wYWNpdHk6IDcwJTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLnBvcHVwIHtcbiAgICAgICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgfVxuXG4gICAgI2RhdGVJbnB1dCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLnBvcHVwMiB7XG4gICAgICAgIG1heC13aWR0aDogOTAlO1xuICAgIH1cblxuICAgIC5wb3B1cDMge1xuICAgICAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzMDBweCkge1xuICAgIC5tYWluLWFyZWEgLm1haW4tY2hpbGQgLnRvZG8tc2VjdGlvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5tYWluLWFyZWEgLm1haW4tY2hpbGQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAubWFpbi1hcmVhIC5tYWluLWNoaWxkIC50aXRsZSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwcmVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDByZW07XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAubWFpbi1hcmVhIC5tYWluLWNoaWxkIC50b2RvLXNlY3Rpb24ge1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgIH1cblxuICAgIC5tYWluLWFyZWEgLm1haW4tY2hpbGQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAubWFpbi1hcmVhIC5tYWluLWNoaWxkIC50aXRsZSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwcmVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDByZW07XG4gICAgfVxuXG4gICAgLnNpZGViYXIge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGxlZnQ6IC0xMDAlO1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLnNpZGViYXIge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGxlZnQ6IC0xMDAlO1xuICAgIH1cblxuICAgIC5tYWluIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICcgbWFpbi1hcmVhJztcbiAgICB9XG5cbiAgICAubmF2LWlubmVyIHtcbiAgICAgICAgd2lkdGg6IDk1JTtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCOztjQUVVO0FBQ2Q7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBOztJQUVJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFD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O1FBQ2YsV0FBVztJQUNmO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGVBQWU7UUFDZixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSwwQkFBMEI7UUFDMUIsaUNBQWlDO0lBQ3JDOztJQUVBO1FBQ0ksVUFBVTtJQUNkO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QnJpY29sYWdlK0dyb3Rlc3F1ZTpvcHN6LHdnaHRAMTAuLjQ4LDIwMDsxMC4uNDgsMzAwOzEwLi40OCw0MDA7MTAuLjQ4LDUwMDsxMC4uNDgsNjAwOzEwLi40OCw3MDA7MTAuLjQ4LDgwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogVWJ1bnR1LCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0NXB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgICduYXZiYXInXFxuICAgICAgICAnbWFpbic7XFxufVxcblxcbi5uYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ0ZTQxO1xcbiAgICBncmlkLWFyZWE6IG5hdmJhcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjb2xvcjogI2YxZmFlZTtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi5uYXYtaW5uZXIge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5sZWZ0LW5hdixcXG4ucmlnaHQtbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xcbiAgICBnYXA6IDAuMjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAycmVtO1xcbiAgICBjb2xvcjogI2YxZmFlZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5uYXYgLmZhLXBsdXMge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xcbn1cXG5cXG4ubmF2IC5mYS1wbHVzOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg4ODtcXG59XFxuXFxuLm5hdiAuZmEtcGx1czphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbn1cXG5cXG4ubGVmdC1uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdhcDogMS41cmVtO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xcbn1cXG5cXG4ubGVmdC1uYXYgLmZhLWhvdXNlIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcXG59XFxuXFxuLmxlZnQtbmF2IC5mYS1iYXJzLFxcbi5mYS1iYXJzLXN0YWdnZXJlZCB7XFxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcXG59XFxuXFxuLm5hdiAuZmEtc29saWQge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogMC4ycyBlYXNlO1xcbn1cXG5cXG4ubGVmdC1uYXYgLmZhLXNvbGlkOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogNTAlO1xcbn1cXG5cXG4ubGVmdC1uYXYgLmZhLXNvbGlkOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxufVxcblxcbi5jZW50ZXItbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2RhdGVJbnB1dCB7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg4MTU3O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI4NXB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ3NpZGViYXIgbWFpbi1hcmVhJztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcXG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbGVmdDogMDtcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xcbn1cXG5cXG4ubWFpbi1hcmVhIHtcXG4gICAgZ3JpZC1hcmVhOiBtYWluLWFyZWE7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubWVudSBsaSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogLjZyZW07XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLm5hdi1idXR0b25zOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3NSk7XFxufVxcblxcbi5tZW51IGxpIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUgbGkgaSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxufVxcblxcbi5uYXYtYnV0dG9ucy5hY3RpdmUge1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4udG9kYXkgaSB7XFxuICAgIGNvbG9yOiBjcmltc29uO1xcbiAgICBvcGFjaXR5OiA1MCU7XFxufVxcblxcbi5pbmJveCBpIHtcXG4gICAgY29sb3I6IGdyYXk7XFxufVxcblxcbi5hbGwgaSB7XFxuICAgIG9wYWNpdHk6IDcwJTtcXG59XFxuXFxuLnVwY29taW5nIGkge1xcbiAgICBjb2xvcjogYmx1ZTtcXG4gICAgb3BhY2l0eTogNTAlO1xcbn1cXG5cXG4uaW1wb3J0YW50IGkge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBvcGFjaXR5OiA1MCU7XFxufVxcblxcbi5saXN0cyBpIHtcXG4gICAgY29sb3I6IGRhcmtvcmFuZ2U7XFxuICAgIG9wYWNpdHk6IDYwJTtcXG59XFxuXFxuLm1lbnUgLmxpc3RzIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XFxufVxcblxcbi5saXN0cyAuZmEtY2hldnJvbi11cCB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMC4xcmVtO1xcbn1cXG5cXG4uYWNjb3JkaW9uIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAyLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjJzIGVhc2Utb3V0O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBtYXgtaGVpZ2h0OiAwO1xcblxcbn1cXG5cXG4uY3JlYXRlLW5ldyBpIHtcXG4gICAgcGFkZGluZy1yaWdodDogLjI1cmVtO1xcbiAgICBvcGFjaXR5OiA2NSU7XFxufVxcblxcbi5hY2NvcmRpb24gLmNyZWF0ZS1uZXcge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcXG4gICAgcGFkZGluZy10b3A6IC41cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYWNjb3JkaW9uIC5jcmVhdGUtbmV3OmhvdmVyIHtcXG4gICAgY29sb3I6ICMzYTVhNDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNSUpO1xcbn1cXG5cXG4uYWNjb3JkaW9uIC5uZXctbGlzdHMgaSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IC41cmVtO1xcbiAgICBmb250LXNpemU6IC41cmVtO1xcbiAgICBvcGFjaXR5OiA1MCU7XFxufVxcblxcbi50aGUtbmV3LWxpc3RzIHtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50aGUtbmV3LWxpc3RzIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50aGUtbmV3LWxpc3RzIC50cmFzaCB7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi50aGUtbmV3LWxpc3RzIC50cmFzaCAuZmEtdHJhc2gtY2FuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogZ3JleTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50aGUtbmV3LWxpc3RzIC50cmFzaCAuZmEtdHJhc2gtY2FuOmhvdmVyIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4ubWFpbi1jaGlsZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcblxcbi5tYWluLWFyZWEgLm1haW4tY2hpbGQgLnRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgICBjb2xvcjogIzQ0NDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5tYWluLWFyZWEgLm1haW4tY2hpbGQgLnRvZG8tc2VjdGlvbiB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIHBhZGRpbmc6IDJyZW0gMHJlbTtcXG59XFxuXFxuLm92ZXJsYXksXFxuLm92ZXJsYXkyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDUwMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ucG9wdXAsXFxuLnBvcHVwMiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLnBvcHVwIC5mYS14bWFyayxcXG4ucG9wdXAyIC5mYS14bWFyayB7XFxuICAgIHRvcDogMXJlbTtcXG4gICAgcmlnaHQ6IDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICAgIGNvbG9yOiAjMTExO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5wb3B1cCAucG9wdXAtdG9wLFxcbi5wb3B1cDIgLnBvcHVwLXRvcDIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLnBvcHVwIC5wb3B1cC10b3AgcCB7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG59XFxuXFxuLnBvcHVwMiAucG9wdXAtdG9wMiBwIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbn1cXG5cXG4ucG9wdXAgLnBvcHVwLW1pZCxcXG4ucG9wdXAyIC5wb3B1cC1taWQge1xcbiAgICBwYWRkaW5nOiAwcmVtIDEuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnBvcHVwIC5wb3B1cC1taWQgcCxcXG4ucG9wdXAyIC5wb3B1cC1taWQgcCB7XFxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xcbn1cXG5cXG4ucG9wdXAgLnBvcHVwLW1pZCBpbnB1dCxcXG4ucG9wdXAyIC5wb3B1cC1taWQgaW5wdXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxufVxcblxcbi5wb3B1cCAucG9wdXAtbWlkIGlucHV0OmhvdmVyLFxcbi5wb3B1cDIgLnBvcHVwLW1pZCBpbnB1dDpob3ZlciB7XFxuICAgIGJvcmRlcjogc29saWQgMXB4ICMzYTVhNDA7XFxufVxcblxcbi5wb3B1cCAucG9wdXAtbWlkIGlucHV0OmZvY3VzLFxcbi5wb3B1cDIgLnBvcHVwLW1pZCBpbnB1dDpmb2N1cyB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzYTVhNDA7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5wb3B1cCAucG9wdXAtYm90LFxcbi5wb3B1cDIgLnBvcHVwLWJvdDIge1xcbiAgICBwYWRkaW5nOiAwcmVtIDEuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgZ2FwOiAuNXJlbTtcXG59XFxuXFxuLnBvcHVwIC5wb3B1cC1ib3QgI2Nsb3NlLFxcbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2Nsb3NlIHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBvcHVwIC5wb3B1cC1ib3QgI2Nsb3NlOmhvdmVyLFxcbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2Nsb3NlOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4ucG9wdXAgLnBvcHVwLWJvdCAjYWRkaXRpb24sXFxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdCB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBwYWRkaW5nOiAuNXJlbSAycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODgxNTc7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2RlbGV0ZXRhc2sge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgcGFkZGluZzogLjVyZW0gMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg4MTU3O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wb3B1cCAucG9wdXAtYm90ICNhZGRpdGlvbjpob3ZlcixcXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0OmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLnBvcHVwIC5wb3B1cC1ib3QgI2FkZGl0aW9uOmFjdGl2ZSxcXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0OmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5wb3B1cCAuZmEteG1hcms6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5wb3B1cCAuZmEteG1hcms6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLnBvcHVwIC5wb3B1cC1ib3QgI2FkZGl0aW9uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLnBvcHVwIC5wb3B1cC1ib3QgI2FkZGl0aW9uOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5wb3B1cDIgLnBvcHVwLXRvcDIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4ucG9wdXAyIC5wb3B1cC10b3AyIC5mYS10cmlhbmdsZS1leGNsYW1hdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogNC41cmVtO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBvcGFjaXR5OiA3MCU7XFxufVxcblxcbi5wb3B1cDIgLnBvcHVwLWJvdDIge1xcbiAgICBwYWRkaW5nOiAwcmVtIDEuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgZ2FwOiAuNXJlbTtcXG59XFxuXFxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdCB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg4MTU3O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0OmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5wb3B1cDIgLmZhLXhtYXJrOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4ucG9wdXAyIC5mYS14bWFyazphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0OmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdDphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4ucG9wdXAyIC5wb3B1cC10b3AyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLnBvcHVwMiAucG9wdXAtdG9wMiAuZmEtdHJpYW5nbGUtZXhjbGFtYXRpb24ge1xcbiAgICBmb250LXNpemU6IDQuNXJlbTtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgb3BhY2l0eTogNzAlO1xcbn1cXG5cXG4ucG9wdXAyIC5wb3B1cC1ib3QyIHtcXG4gICAgcGFkZGluZzogMHJlbSAxLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGdhcDogLjVyZW07XFxufVxcblxcbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Qge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4ODE1NztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0OmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdDphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4ucG9wdXAyIC5mYS14bWFyazpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLnBvcHVwMiAuZmEteG1hcms6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdDpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLm92ZXJsYXkzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDUwMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5wb3B1cDMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5wb3B1cDMgLmZhLXhtYXJrIHtcXG4gICAgdG9wOiAxcmVtO1xcbiAgICByaWdodDogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gICAgY29sb3I6ICMxMTE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnBvcHVwMyAuZmEteG1hcms6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5wb3B1cDMgLmZhLXhtYXJrOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5wb3B1cDMgLnBvcHVwLXRvcDMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi5wb3B1cDMgLnBvcHVwLXRvcDMgcCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4ucG9wdXAzIC5wb3B1cC1taWQzIHtcXG4gICAgcGFkZGluZzogMHJlbSAxLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ubWlkLWxlZnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5taWQtcmlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wb3B1cDMgLnBvcHVwLW1pZDMgbGFiZWwge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgcGFkZGluZy10b3A6IDAuMnJlbTtcXG59XFxuXFxuLnBvcHVwMyAucG9wdXAtbWlkMyB0ZXh0YXJlYSB7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLnBvcHVwMyAucG9wdXAtbWlkMyB0ZXh0YXJlYTpmb2N1cyB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzYTVhNDA7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5wb3B1cDMgLnBvcHVwLW1pZDMgaW5wdXRbdHlwZT0ndGV4dCddIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxufVxcblxcbi5wb3B1cDMgLnBvcHVwLW1pZDMgc2VsZWN0IHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi5wb3B1cDMgLnBvcHVwLW1pZDMgLm1pZC1yaWdodCAjdGFzay1kYXRlIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wb3B1cDMgLnBvcHVwLW1pZDMgaW5wdXQ6aG92ZXIge1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjM2E1YTQwO1xcbn1cXG5cXG4ucG9wdXAzIC5wb3B1cC1taWQzIGlucHV0OmZvY3VzIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzNhNWE0MDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnBvcHVwMyAucG9wdXAtYm90MyB7XFxuICAgIHBhZGRpbmc6IDByZW0gMS41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBnYXA6IC41cmVtO1xcbn1cXG5cXG4ucG9wdXAzIC5wb3B1cC1ib3QzICNjbG9zZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wb3B1cDMgLnBvcHVwLWJvdDMgI2Nsb3NlOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4ucG9wdXAzIC5wb3B1cC1ib3QzICNhZGR0YXNrIHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIHBhZGRpbmc6IC41cmVtIDJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4ODE1NztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jZWRpdHRhc2sge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgcGFkZGluZzogLjVyZW0gMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg4MTU3O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wb3B1cDMgLnBvcHVwLWJvdDMgI2FkZHRhc2s6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4ucG9wdXAzIC5wb3B1cC1ib3QzICNhZGR0YXNrOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZWFjaC10YXNrLXNlY3Rpb24tdG9wIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWxlZnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgICBnYXA6IC41cmVtO1xcbn1cXG5cXG4udGFzay1sZWZ0ICN0YXNrdGl0bGUge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgbWF4LXdpZHRoOiAzMHZ3O1xcbn1cXG5cXG4udGFzay1yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IGdyYXk7XFxufVxcblxcbi50YXNrLXJpZ2h0IC50YXNrLWljb25zIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1yaWdodCAudGFzay1pY29uczpob3ZlciB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xcbn1cXG5cXG4udGFzay1yaWdodCAudGFzay1pY29uczphY3RpdmUge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XFxufVxcblxcbi5lYWNoLXRhc2stc2VjdGlvbi1ib3Qge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAtLjc1cmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiA5OSU7XFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxufVxcblxcbi5lYWNoLXRhc2stc2VjdGlvbi1ib3QgcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbi5ib3QtcmlnaHQsXFxuLmJvdC1sZWZ0IHtcXG4gICAgd2lkdGg6IDQ5JTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ucmlnaHQtdG9wLFxcbi5yaWdodC1ib3QsXFxuLmxlZnQtdG9wLFxcbi5sZWZ0LWJvdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogLjc1cmVtO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5yaWdodC10b3AsXFxuLmxlZnQtdG9wIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZWFjaC10YXNrLXNlY3Rpb24tYm90IHAuYm9sZGVuIHtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnJpZ2h0LXRvcCAjbG9uZyxcXG4ubGVmdC10b3AgI2xvbmcge1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5mYS1mbGFnIHtcXG4gICAgb3BhY2l0eTogNzAlO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgLnBvcHVwIHtcXG4gICAgICAgIG1heC13aWR0aDogOTAlO1xcbiAgICB9XFxuXFxuICAgICNkYXRlSW5wdXQge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAucG9wdXAyIHtcXG4gICAgICAgIG1heC13aWR0aDogOTAlO1xcbiAgICB9XFxuXFxuICAgIC5wb3B1cDMge1xcbiAgICAgICAgbWF4LXdpZHRoOiA5MCU7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDMwMHB4KSB7XFxuICAgIC5tYWluLWFyZWEgLm1haW4tY2hpbGQgLnRvZG8tc2VjdGlvbiB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAubWFpbi1hcmVhIC5tYWluLWNoaWxkIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC5tYWluLWFyZWEgLm1haW4tY2hpbGQgLnRpdGxlIHtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcmVtO1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcmVtO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgICAubWFpbi1hcmVhIC5tYWluLWNoaWxkIC50b2RvLXNlY3Rpb24ge1xcbiAgICAgICAgd2lkdGg6IDk1JTtcXG4gICAgfVxcblxcbiAgICAubWFpbi1hcmVhIC5tYWluLWNoaWxkIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC5tYWluLWFyZWEgLm1haW4tY2hpbGQgLnRpdGxlIHtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcmVtO1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcmVtO1xcbiAgICB9XFxuXFxuICAgIC5zaWRlYmFyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIGxlZnQ6IC0xMDAlO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAuc2lkZWJhciB7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICBsZWZ0OiAtMTAwJTtcXG4gICAgfVxcblxcbiAgICAubWFpbiB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICcgbWFpbi1hcmVhJztcXG4gICAgfVxcblxcbiAgICAubmF2LWlubmVyIHtcXG4gICAgICAgIHdpZHRoOiA5NSU7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjbGFzcyBUb2RvIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpZCA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkIHx8IHVuaXF1ZUlkKCk7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVG9kb0xpc3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGlkID0gbnVsbCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmlkID0gaWQgfHwgdW5pcXVlSWQoKTtcbiAgICAgICAgdGhpcy50b2RvcyA9IFtdO1xuICAgIH1cblxuICAgIGFkZFRvZG8odG9kbykge1xuICAgICAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbUlkKCkge1xuICAgIGxldCBpZCA9ICcnO1xuICAgIGNvbnN0IGRpZ2l0cyA9ICcwMTIzNDU2Nzg5JztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGlnaXRzLmxlbmd0aCk7XG4gICAgICAgIGlkICs9IGRpZ2l0c1tyYW5kb21JbmRleF07XG4gICAgfVxuXG4gICAgcmV0dXJuIGlkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pcXVlSWQoKSB7XG4gICAgY29uc3QgdXNlZElkcyA9IGdldFVzZWRJZHMoKTtcblxuICAgIGlmICh1c2VkSWRzLmxlbmd0aCA+PSAxMDAwMDAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFsbCBwb3NzaWJsZSBJRHMgaGF2ZSBiZWVuIHVzZWQuXCIpO1xuICAgIH1cblxuICAgIGxldCBuZXdJZDtcbiAgICBkbyB7XG4gICAgICAgIG5ld0lkID0gZ2VuZXJhdGVSYW5kb21JZCgpO1xuICAgIH0gd2hpbGUgKHVzZWRJZHMuaW5jbHVkZXMobmV3SWQpKTtcblxuICAgIHVzZWRJZHMucHVzaChuZXdJZCk7XG4gICAgc2F2ZVVzZWRJZHModXNlZElkcyk7XG4gICAgcmV0dXJuIG5ld0lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlZElkcygpIHtcbiAgICBjb25zdCB1c2VkSWRzSlNPTiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VkSWRzJyk7XG4gICAgcmV0dXJuIHVzZWRJZHNKU09OID8gSlNPTi5wYXJzZSh1c2VkSWRzSlNPTikgOiBbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVVc2VkSWRzKHVzZWRJZHMpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlZElkcycsIEpTT04uc3RyaW5naWZ5KHVzZWRJZHMpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvZG9MaXN0cygpIHtcbiAgICBjb25zdCB0b2RvTGlzdHNKU09OID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9MaXN0cycpO1xuICAgIHJldHVybiB0b2RvTGlzdHNKU09OID8gSlNPTi5wYXJzZSh0b2RvTGlzdHNKU09OKSA6IFtdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9kb0xpc3RCeUlkKGlkKSB7XG4gICAgY29uc3QgdG9kb0xpc3RzID0gZ2V0VG9kb0xpc3RzKCk7XG4gICAgcmV0dXJuIHRvZG9MaXN0cy5maW5kKHRvZG9MaXN0ID0+IHRvZG9MaXN0LmlkID09PSBpZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlVG9kb0xpc3RzKHRvZG9MaXN0cykge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvTGlzdHMnLCBKU09OLnN0cmluZ2lmeSh0b2RvTGlzdHMpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRUb2RvQnlJZCh0b2RvSWQpIHtcbiAgICBjb25zdCB0b2RvTGlzdHMgPSBnZXRUb2RvTGlzdHMoKTtcblxuICAgIGZvciAoY29uc3QgdG9kb0xpc3Qgb2YgdG9kb0xpc3RzKSB7XG4gICAgICAgIGNvbnN0IGZvdW5kVG9kbyA9IHRvZG9MaXN0LnRvZG9zLmZpbmQodG9kbyA9PiB0b2RvLmlkID09PSB0b2RvSWQpO1xuICAgICAgICBpZiAoZm91bmRUb2RvKSB7XG4gICAgICAgICAgICByZXR1cm4gZm91bmRUb2RvO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG59IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgY3JlYXRlV2VicGFnZSBmcm9tICcuL3dlYnBhZ2UnO1xuXG5jb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmNyZWF0ZVdlYnBhZ2UoKVxuXG4iLCJpbXBvcnQgeyBUb2RvTGlzdCwgVG9kbywgc2F2ZVRvZG9MaXN0cywgZ2V0VG9kb0xpc3RzLCBnZXRUb2RvTGlzdEJ5SWQsIGZpbmRUb2RvQnlJZCwgZ2V0VXNlZElkcywgc2F2ZVVzZWRJZHMgfSBmcm9tIFwiLi9hcHBcIjtcblxuZnVuY3Rpb24gY3JlYXRlTWFpbihpZCkge1xuICAgIGNvbnN0IG1haW5BcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tYXJlYScpO1xuICAgIGlmIChtYWluQXJlYSkge1xuICAgICAgICBtYWluQXJlYS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluLWFyZWEnKTtcblxuICAgIGNvbnN0IG1haW5DaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5DaGlsZC5jbGFzc0xpc3QuYWRkKCdtYWluLWNoaWxkJyk7XG5cbiAgICBjb25zdCB0b2RvTGlzdCA9IGdldFRvZG9MaXN0QnlJZChpZCk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG5cbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBoMS5jbGFzc0xpc3QuYWRkKCd0b2RvLXRpdGxlJyk7XG4gICAgaDEudGV4dENvbnRlbnQgPSAnJztcbiAgICBoMS50ZXh0Q29udGVudCA9IHRvZG9MaXN0Lm5hbWU7XG5cbiAgICB0aXRsZS5hcHBlbmRDaGlsZChoMSk7XG5cbiAgICBjb25zdCB0b2RvU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9TZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZG8tc2VjdGlvbicpO1xuXG4gICAgbWFpbkNoaWxkLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBtYWluQ2hpbGQuYXBwZW5kQ2hpbGQodG9kb1NlY3Rpb24pO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChtYWluQ2hpbGQpO1xuXG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUYXNrcygpIHtcbiAgICBjb25zdCBuYXZCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1idXR0b25zJyk7XG4gICAgbGV0IGFjdGl2ZU5hdkJ1dHRvbiA9IG51bGw7XG5cbiAgICBmb3IgKGNvbnN0IGJ1dHRvbiBvZiBuYXZCdXR0b25zKSB7XG4gICAgICAgIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgYWN0aXZlTmF2QnV0dG9uID0gYnV0dG9uO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkYXRhTGlzdElkID0gYWN0aXZlTmF2QnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJyk7XG5cbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tc2VjdGlvbicpO1xuICAgIHRhc2tDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCB0b2RvTGlzdHMgPSBnZXRUb2RvTGlzdHMoKTtcbiAgICBsZXQgdG9kb3NUb1JlbmRlciA9IFtdO1xuXG4gICAgaWYgKGRhdGFMaXN0SWQgPT09ICcxMTExMTEnKSB7XG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnN1YnN0cigwLCAxMCk7XG4gICAgICAgIHRvZG9zVG9SZW5kZXIgPSB0b2RvTGlzdHMuZmxhdE1hcCh0b2RvTGlzdCA9PlxuICAgICAgICAgICAgdG9kb0xpc3QudG9kb3MuZmlsdGVyKHRvZG8gPT4gdG9kby5kdWVEYXRlID09PSB0b2RheSlcbiAgICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGRhdGFMaXN0SWQgPT09ICcyMjIyMjInKSB7XG4gICAgICAgIGNvbnN0IG5leHRXZWVrID0gbmV3IERhdGUoKTtcbiAgICAgICAgbmV4dFdlZWsuc2V0RGF0ZShuZXh0V2Vlay5nZXREYXRlKCkgKyA3KTtcbiAgICAgICAgY29uc3QgbmV4dFdlZWtGb3JtYXR0ZWQgPSBuZXh0V2Vlay50b0lTT1N0cmluZygpLnN1YnN0cigwLCAxMCk7XG4gICAgICAgIHRvZG9zVG9SZW5kZXIgPSB0b2RvTGlzdHMuZmxhdE1hcCh0b2RvTGlzdCA9PlxuICAgICAgICAgICAgdG9kb0xpc3QudG9kb3MuZmlsdGVyKFxuICAgICAgICAgICAgICAgIHRvZG8gPT5cbiAgICAgICAgICAgICAgICAgICAgdG9kby5kdWVEYXRlIDw9IG5leHRXZWVrRm9ybWF0dGVkICYmIHRvZG8uZHVlRGF0ZSA+PSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDAsIDEwKVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0gZWxzZSBpZiAoZGF0YUxpc3RJZCA9PT0gJzMzMzMzMycpIHtcbiAgICAgICAgdG9kb3NUb1JlbmRlciA9IHRvZG9MaXN0cy5mbGF0TWFwKHRvZG9MaXN0ID0+IHRvZG9MaXN0LnRvZG9zKTtcbiAgICB9IGVsc2UgaWYgKGRhdGFMaXN0SWQgPT09ICc0NDQ0NDQnKSB7XG4gICAgICAgIHRvZG9zVG9SZW5kZXIgPSB0b2RvTGlzdHMuZmxhdE1hcCh0b2RvTGlzdCA9PlxuICAgICAgICAgICAgdG9kb0xpc3QudG9kb3MuZmlsdGVyKHRvZG8gPT4gdG9kby5wcmlvcml0eSA9PT0gJ2hpZ2gnKVxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkRGF0YUxpc3RJZCA9IGFjdGl2ZU5hdkJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1pZCcpO1xuICAgICAgICB0b2Rvc1RvUmVuZGVyID0gZ2V0VG9kb0xpc3RCeUlkKHNlbGVjdGVkRGF0YUxpc3RJZCk/LnRvZG9zIHx8IFtdO1xuICAgIH1cblxuICAgIHRvZG9zVG9SZW5kZXIuc29ydCgoYSwgYikgPT4gbmV3IERhdGUoYS5kdWVEYXRlKSAtIG5ldyBEYXRlKGIuZHVlRGF0ZSkpO1xuXG4gICAgdG9kb3NUb1JlbmRlci5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICBjcmVhdGVUYXNrKHRvZG8udGl0bGUsIHRvZG8uZHVlRGF0ZSwgdG9kby5kZXNjcmlwdGlvbiwgdG9kby5wcmlvcml0eSwgdG9kby5pZCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBtYWluQ2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jaGlsZCcpO1xuICAgIGNvbnN0IHRhc2tzID0gbWFpbkNoaWxkLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2VhY2gtdGFzay1zZWN0aW9uLXRvcCcpO1xuICAgIGZvciAoY29uc3QgdGFzayBvZiB0YXNrcykge1xuICAgICAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgdGFza1BhcmVudCA9IHRhc2sucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tib3QgPSB0YXNrUGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5lYWNoLXRhc2stc2VjdGlvbi1ib3QnKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRhc2tib3QpO1xuICAgICAgICAgICAgaWYgKGNvbXB1dGVkU3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgdGFza2JvdC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb21wdXRlZFN0eWxlLmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgICAgICAgICAgIHRhc2tib3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBnZW5lcmF0ZWRCaW5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFzay1kZWxldGVyJyk7XG4gICAgZm9yIChjb25zdCBiaW4gb2YgZ2VuZXJhdGVkQmlucykge1xuICAgICAgICBiaW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICBjb25zdCB0YXNrSWQgPSBiaW4uZ2V0QXR0cmlidXRlKCdkYXRhLWxpc3QtaWQnKTtcbiAgICAgICAgICAgIGRlbGV0ZVRhc2tQb3B1cCgoKSA9PiBkZWxldGVUYXNrKHRhc2tJZCkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBlZGl0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Rhc2stZWRpdG9yJyk7XG4gICAgZm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdHMpIHtcbiAgICAgICAgZWRpdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgY29uc3QgdG9kbyA9IGZpbmRUb2RvQnlJZChlZGl0b3IuZ2V0QXR0cmlidXRlKCdkYXRhLWxpc3QtaWQnKSk7XG4gICAgICAgICAgICBlZGl0VGFza1BvcHVwKHRvZG8udGl0bGUsIHRvZG8uZGVzY3JpcHRpb24sIHRvZG8uZHVlRGF0ZSwgdG9kby5wcmlvcml0eSwgdG9kby5pZClcbiAgICAgICAgICAgIGNvbnN0IHRvZG9MaXN0cyA9IGdldFRvZG9MaXN0cygpO1xuICAgICAgICAgICAgY3JlYXRlTGlzdE9wdGlvbnModG9kb0xpc3RzLCBkYXRhTGlzdElkKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBwcmlvcml0eUljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stcHJpb3JpdHknKTtcbiAgICBwcmlvcml0eUljb25zLmZvckVhY2goaWNvbiA9PiB7XG4gICAgICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICBjb25zdCB0b2RvSWQgPSBpY29uLmdldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJyk7XG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ1RvZG8gPSBmaW5kVG9kb0J5SWQodG9kb0lkKVxuXG4gICAgICAgICAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBleGlzdGluZ1RvZG8ucHJpb3JpdHlcblxuICAgICAgICAgICAgbGV0IG5ld1ByaW9yaXR5O1xuICAgICAgICAgICAgaWYgKHRvZG9Qcmlvcml0eSA9PT0gJ2xvdycpIHtcbiAgICAgICAgICAgICAgICBuZXdQcmlvcml0eSA9ICdtZWRpdW0nO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0b2RvUHJpb3JpdHkgPT09ICdtZWRpdW0nKSB7XG4gICAgICAgICAgICAgICAgbmV3UHJpb3JpdHkgPSAnaGlnaCc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRvZG9Qcmlvcml0eSA9PT0gJ2hpZ2gnKSB7XG4gICAgICAgICAgICAgICAgbmV3UHJpb3JpdHkgPSAnbG93JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGV4aXN0aW5nVG9kbykge1xuICAgICAgICAgICAgICAgIGRlbGV0ZVRhc2soZXhpc3RpbmdUb2RvLmlkKVxuXG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZFRvZG8gPSBuZXcgVG9kbyhcbiAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdUb2RvLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1RvZG8uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nVG9kby5kdWVEYXRlLFxuICAgICAgICAgICAgICAgICAgICBuZXdQcmlvcml0eSxcbiAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdUb2RvLmlkXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGFkZFRvZG9Ub1RvZG9MaXN0KGRhdGFMaXN0SWQsIHVwZGF0ZWRUb2RvKTtcbiAgICAgICAgICAgICAgICBzYXZlVG9kb0xpc3RzKGdldFRvZG9MaXN0cygpKTtcblxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICByZW5kZXJUYXNrcygpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWNoZWNrJylcbiAgICBmb3IgKGNvbnN0IGNoZWNrYm94IG9mIGNoZWNrYm94ZXMpIHtcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBjb25zdCB0YXNrSWQgPSBjaGVja2JveC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1pZCcpO1xuICAgICAgICAgICAgZGVsZXRlVGFzayh0YXNrSWQpXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VQcmlvcml0eSgpIHtcblxufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKHRhc2tUaXRsZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBpZCkge1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1zZWN0aW9uJylcblxuICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tEaXYuY2xhc3NOYW1lID0gXCJ0YXNrLWNvbnRhaW5lclwiO1xuXG4gICAgY29uc3QgdGFza1NlY3Rpb25Ub3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tTZWN0aW9uVG9wLmNsYXNzTmFtZSA9IFwiZWFjaC10YXNrLXNlY3Rpb24tdG9wXCI7XG5cblxuICAgIGNvbnN0IHRhc2tMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrTGVmdC5jbGFzc05hbWUgPSBcInRhc2stbGVmdFwiO1xuXG4gICAgY29uc3QgdGFza0NoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRhc2tDaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIHRhc2tDaGVja2JveC5jbGFzc0xpc3QuYWRkKCd0YXNrLWNoZWNrJyk7XG4gICAgdGFza0NoZWNrYm94LnNldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJywgaWQpXG4gICAgdGFza0xlZnQuYXBwZW5kQ2hpbGQodGFza0NoZWNrYm94KTtcblxuICAgIGNvbnN0IHRhc2tUaXRsZVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0YXNrVGl0bGVQLmlkID0gXCJ0YXNrdGl0bGVcIjtcbiAgICB0YXNrVGl0bGVQLnRleHRDb250ZW50ID0gdGFza1RpdGxlO1xuICAgIHRhc2tMZWZ0LmFwcGVuZENoaWxkKHRhc2tUaXRsZVApO1xuXG4gICAgdGFza1NlY3Rpb25Ub3AuYXBwZW5kQ2hpbGQodGFza0xlZnQpO1xuXG4gICAgY29uc3QgdGFza1JpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrUmlnaHQuY2xhc3NOYW1lID0gXCJ0YXNrLXJpZ2h0XCI7XG5cbiAgICBjb25zdCBlZGl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIGVkaXRJY29uLmNsYXNzTmFtZSA9IFwiZmEtcmVndWxhciBmYS1wZW4tdG8tc3F1YXJlIHRhc2staWNvbnMgdGFzay1lZGl0b3JcIjtcbiAgICBlZGl0SWNvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1pZCcsIGlkKVxuICAgIGVkaXRJY29uLnRpdGxlID0gXCJFZGl0IHRhc2tcIjtcbiAgICB0YXNrUmlnaHQuYXBwZW5kQ2hpbGQoZWRpdEljb24pO1xuXG4gICAgY29uc3QgcHJpb3JpdHlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgcHJpb3JpdHlJY29uLmNsYXNzTmFtZSA9IFwiZmEtc29saWQgZmEtZmxhZyB0YXNrLWljb25zIHRhc2stcHJpb3JpdHlcIjtcbiAgICBwcmlvcml0eUljb24uc2V0QXR0cmlidXRlKCdkYXRhLWxpc3QtaWQnLCBpZCk7XG4gICAgcHJpb3JpdHlJY29uLnRpdGxlID0gXCJDaGFuZ2UgcHJpb3JpdHlcIjtcbiAgICBwcmlvcml0eUljb24uc3R5bGUuY29sb3IgPSAocHJpb3JpdHkgPT09ICdoaWdoJykgPyAncmVkJyA6IChwcmlvcml0eSA9PT0gJ21lZGl1bScpID8gJ2RhcmtvcmFuZ2UnIDogJ3RlYWwnO1xuXG4gICAgdGFza1JpZ2h0LmFwcGVuZENoaWxkKHByaW9yaXR5SWNvbik7XG5cbiAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgZGVsZXRlSWNvbi5jbGFzc05hbWUgPSBcImZhLXNvbGlkIGZhLXRyYXNoLWNhbiB0YXNrLWljb25zIHRhc2stZGVsZXRlclwiO1xuICAgIGRlbGV0ZUljb24uc2V0QXR0cmlidXRlKCdkYXRhLWxpc3QtaWQnLCBpZClcbiAgICBkZWxldGVJY29uLnRpdGxlID0gXCJEZWxldGUgdGFza1wiO1xuICAgIHRhc2tSaWdodC5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcblxuICAgIHRhc2tTZWN0aW9uVG9wLmFwcGVuZENoaWxkKHRhc2tSaWdodCk7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrU2VjdGlvblRvcCk7XG5cbiAgICBjb25zdCB0YXNrU2VjdGlvbkJvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza1NlY3Rpb25Cb3QuY2xhc3NOYW1lID0gXCJlYWNoLXRhc2stc2VjdGlvbi1ib3RcIjtcblxuICAgIGNvbnN0IGJvdExlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJvdExlZnQuY2xhc3NOYW1lID0gXCJib3QtbGVmdFwiO1xuXG4gICAgY29uc3QgbGVmdFRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGVmdFRvcC5jbGFzc05hbWUgPSBcImxlZnQtdG9wXCI7XG5cbiAgICBjb25zdCB0aXRsZUJvbGRlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRpdGxlQm9sZGVuLmNsYXNzTmFtZSA9IFwiYm9sZGVuXCI7XG4gICAgdGl0bGVCb2xkZW4udGV4dENvbnRlbnQgPSBcIlRpdGxlOlwiO1xuICAgIGxlZnRUb3AuYXBwZW5kQ2hpbGQodGl0bGVCb2xkZW4pO1xuXG4gICAgY29uc3QgdGl0bGVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGl0bGVQLnRleHRDb250ZW50ID0gdGFza1RpdGxlO1xuICAgIHRpdGxlUC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvbmcnKVxuICAgIGxlZnRUb3AuYXBwZW5kQ2hpbGQodGl0bGVQKTtcblxuICAgIGJvdExlZnQuYXBwZW5kQ2hpbGQobGVmdFRvcCk7XG5cbiAgICBjb25zdCBsZWZ0Qm90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZWZ0Qm90LmNsYXNzTmFtZSA9IFwibGVmdC1ib3RcIjtcblxuICAgIGNvbnN0IGR1ZURhdGVCb2xkZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkdWVEYXRlQm9sZGVuLmNsYXNzTmFtZSA9IFwiYm9sZGVuXCI7XG4gICAgZHVlRGF0ZUJvbGRlbi50ZXh0Q29udGVudCA9IFwiRHVlIGRhdGU6XCI7XG4gICAgbGVmdEJvdC5hcHBlbmRDaGlsZChkdWVEYXRlQm9sZGVuKTtcblxuICAgIGNvbnN0IGR1ZURhdGVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZHVlRGF0ZVAudGV4dENvbnRlbnQgPSBkdWVEYXRlO1xuICAgIGxlZnRCb3QuYXBwZW5kQ2hpbGQoZHVlRGF0ZVApO1xuXG4gICAgYm90TGVmdC5hcHBlbmRDaGlsZChsZWZ0Qm90KTtcbiAgICB0YXNrU2VjdGlvbkJvdC5hcHBlbmRDaGlsZChib3RMZWZ0KTtcblxuICAgIGNvbnN0IGJvdFJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBib3RSaWdodC5jbGFzc05hbWUgPSBcImJvdC1yaWdodFwiO1xuXG4gICAgY29uc3QgcmlnaHRUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJpZ2h0VG9wLmNsYXNzTmFtZSA9IFwicmlnaHQtdG9wXCI7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbkJvbGRlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NyaXB0aW9uQm9sZGVuLmNsYXNzTmFtZSA9IFwiYm9sZGVuXCI7XG4gICAgZGVzY3JpcHRpb25Cb2xkZW4udGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOlwiO1xuICAgIHJpZ2h0VG9wLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uQm9sZGVuKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NyaXB0aW9uUC50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuICAgIGRlc2NyaXB0aW9uUC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvbmcnKVxuICAgIHJpZ2h0VG9wLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uUCk7XG5cbiAgICBib3RSaWdodC5hcHBlbmRDaGlsZChyaWdodFRvcCk7XG5cbiAgICBjb25zdCByaWdodEJvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmlnaHRCb3QuY2xhc3NOYW1lID0gXCJyaWdodC1ib3RcIjtcblxuICAgIGNvbnN0IHByaW9yaXR5Qm9sZGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJpb3JpdHlCb2xkZW4uY2xhc3NOYW1lID0gXCJib2xkZW5cIjtcbiAgICBwcmlvcml0eUJvbGRlbi50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6XCI7XG4gICAgcmlnaHRCb3QuYXBwZW5kQ2hpbGQocHJpb3JpdHlCb2xkZW4pO1xuXG4gICAgY29uc3QgcHJpb3JpdHlQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJpb3JpdHlQLnRleHRDb250ZW50ID0gcHJpb3JpdHk7XG4gICAgcmlnaHRCb3QuYXBwZW5kQ2hpbGQocHJpb3JpdHlQKTtcblxuICAgIGJvdFJpZ2h0LmFwcGVuZENoaWxkKHJpZ2h0Qm90KTtcbiAgICB0YXNrU2VjdGlvbkJvdC5hcHBlbmRDaGlsZChib3RSaWdodCk7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrU2VjdGlvbkJvdCk7XG5cbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEaXYpO1xufVxuXG5mdW5jdGlvbiBlZGl0VGFza1BvcHVwKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHksIGlkKSB7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG92ZXJsYXkuY2xhc3NOYW1lID0gJ292ZXJsYXkzJztcblxuICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9wdXAuY2xhc3NOYW1lID0gJ3BvcHVwMyc7XG5cbiAgICBjb25zdCBwb3B1cFRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcHVwVG9wLmNsYXNzTmFtZSA9ICdwb3B1cC10b3AzJztcblxuICAgIGNvbnN0IHRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0aXRsZVRleHQudGV4dENvbnRlbnQgPSAnRWRpdCBUYXNrJztcbiAgICBwb3B1cFRvcC5hcHBlbmRDaGlsZCh0aXRsZVRleHQpO1xuXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgY2xvc2VCdXR0b24uY2xhc3NOYW1lID0gJ2ZhLXNvbGlkIGZhLXhtYXJrJztcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlT3ZlcmxheSk7XG4gICAgcG9wdXBUb3AuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuXG4gICAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBUb3ApO1xuXG4gICAgY29uc3QgcG9wdXBNaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3B1cE1pZC5jbGFzc05hbWUgPSAncG9wdXAtbWlkMyc7XG5cbiAgICBjb25zdCBtaWRMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWlkTGVmdC5jbGFzc05hbWUgPSAnbWlkLWxlZnQnO1xuXG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZTonO1xuICAgIG1pZExlZnQuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG5cbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0aXRsZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgdGl0bGVJbnB1dC5tYXhMZW5ndGggPSA2MDtcbiAgICB0aXRsZUlucHV0LmlkID0gJ3Rhc2stdGl0bGUnO1xuICAgIHRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIHRpdGxlSW5wdXQudmFsdWUgPSB0aXRsZTtcbiAgICBtaWRMZWZ0LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG4gICAgY29uc3QgdGl0bGVBbGVydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0aXRsZUFsZXJ0LmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWFsZXJ0Jyk7XG4gICAgdGl0bGVBbGVydC50ZXh0Q29udGVudCA9ICdUaXRsZSBpcyByZXF1aXJlZC4nO1xuICAgIHRpdGxlQWxlcnQuc3R5bGUuY29sb3IgPSAncmVkJztcbiAgICB0aXRsZUFsZXJ0LnN0eWxlLm1hcmdpblRvcCA9ICcnO1xuICAgIHRpdGxlQWxlcnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBtaWRMZWZ0LmFwcGVuZENoaWxkKHRpdGxlQWxlcnQpXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uOic7XG4gICAgbWlkTGVmdC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uVGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGRlc2NyaXB0aW9uVGV4dGFyZWEuaWQgPSAnZGVzY3JpcHRpb24nO1xuICAgIGRlc2NyaXB0aW9uVGV4dGFyZWEuY29scyA9IDMwO1xuICAgIGRlc2NyaXB0aW9uVGV4dGFyZWEucm93cyA9IDQ7XG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS5tYXhMZW5ndGggPSAxODA7XG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS52YWx1ZSA9IGRlc2NyaXB0aW9uO1xuICAgIG1pZExlZnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UZXh0YXJlYSk7XG5cbiAgICBwb3B1cE1pZC5hcHBlbmRDaGlsZChtaWRMZWZ0KTtcblxuICAgIGNvbnN0IG1pZFJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWlkUmlnaHQuY2xhc3NOYW1lID0gJ21pZC1yaWdodCc7XG5cbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgZGF0ZTonO1xuICAgIG1pZFJpZ2h0LmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG5cbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgIGRhdGVJbnB1dC5pZCA9ICd0YXNrLWRhdGUnO1xuICAgIGRhdGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgZGF0ZUlucHV0LnZhbHVlID0gZGF0ZTtcbiAgICBtaWRSaWdodC5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuXG4gICAgY29uc3QgZGF0ZUFsZXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRhdGVBbGVydC5jbGFzc0xpc3QuYWRkKCdkYXRlLWFsZXJ0Jyk7XG4gICAgZGF0ZUFsZXJ0LnRleHRDb250ZW50ID0gJ0RhdGUgaXMgcmVxdWlyZWQuJztcbiAgICBkYXRlQWxlcnQuc3R5bGUuY29sb3IgPSAncmVkJztcbiAgICBkYXRlQWxlcnQuc3R5bGUubWFyZ2luVG9wID0gJyc7XG4gICAgZGF0ZUFsZXJ0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICBtaWRSaWdodC5hcHBlbmRDaGlsZChkYXRlQWxlcnQpO1xuXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eTonO1xuICAgIG1pZFJpZ2h0LmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuXG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBwcmlvcml0eVNlbGVjdC5pZCA9ICdwcmlvcml0eSc7XG4gICAgcHJpb3JpdHlTZWxlY3QucmVxdWlyZWQgPSB0cnVlO1xuICAgIFsnTG93JywgJ01lZGl1bScsICdIaWdoJ10uZm9yRWFjaChwcmlvcml0eVRleHQgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gcHJpb3JpdHlUZXh0LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByaW9yaXR5VGV4dDtcbiAgICAgICAgaWYgKHByaW9yaXR5VGV4dC50b0xvd2VyQ2FzZSgpID09PSBwcmlvcml0eSkge1xuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xuICAgIG1pZFJpZ2h0LmFwcGVuZENoaWxkKHByaW9yaXR5U2VsZWN0KTtcblxuICAgIGNvbnN0IHByaW9yaXR5QWxlcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJpb3JpdHlBbGVydC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1hbGVydCcpO1xuICAgIHByaW9yaXR5QWxlcnQudGV4dENvbnRlbnQgPSAnUHJpb3JpdHkgaXMgcmVxdWlyZWQuJztcbiAgICBwcmlvcml0eUFsZXJ0LnN0eWxlLmNvbG9yID0gJ3JlZCc7XG4gICAgcHJpb3JpdHlBbGVydC5zdHlsZS5tYXJnaW5Ub3AgPSAnJztcbiAgICBwcmlvcml0eUFsZXJ0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICBtaWRSaWdodC5hcHBlbmRDaGlsZChwcmlvcml0eUFsZXJ0KTtcblxuICAgIGNvbnN0IGxpc3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGlzdExhYmVsLnRleHRDb250ZW50ID0gJ0xpc3Q6JztcbiAgICBtaWRSaWdodC5hcHBlbmRDaGlsZChsaXN0TGFiZWwpO1xuXG4gICAgY29uc3QgbGlzdFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIGxpc3RTZWxlY3QuaWQgPSAndGhlbGlzdCc7XG4gICAgbGlzdFNlbGVjdC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICBtaWRSaWdodC5hcHBlbmRDaGlsZChsaXN0U2VsZWN0KTtcblxuICAgIGNvbnN0IGxpc3RBbGVydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsaXN0QWxlcnQuY2xhc3NMaXN0LmFkZCgnbGlzdC1hbGVydCcpO1xuICAgIGxpc3RBbGVydC50ZXh0Q29udGVudCA9ICdMaXN0IGlzIHJlcXVpcmVkLic7XG4gICAgbGlzdEFsZXJ0LnN0eWxlLmNvbG9yID0gJ3JlZCc7XG4gICAgbGlzdEFsZXJ0LnN0eWxlLm1hcmdpblRvcCA9ICcnO1xuICAgIGxpc3RBbGVydC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgbWlkUmlnaHQuYXBwZW5kQ2hpbGQobGlzdEFsZXJ0KTtcblxuICAgIHBvcHVwTWlkLmFwcGVuZENoaWxkKG1pZFJpZ2h0KTtcblxuICAgIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwTWlkKTtcblxuICAgIGNvbnN0IHBvcHVwQm90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9wdXBCb3QuY2xhc3NOYW1lID0gJ3BvcHVwLWJvdDMnO1xuXG4gICAgY29uc3QgdGV4dENsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGV4dENsb3NlQnV0dG9uLmlkID0gJ2Nsb3NlJztcbiAgICB0ZXh0Q2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSAnQ2xvc2UnO1xuICAgIHRleHRDbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlT3ZlcmxheSk7XG4gICAgcG9wdXBCb3QuYXBwZW5kQ2hpbGQodGV4dENsb3NlQnV0dG9uKTtcblxuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRUYXNrQnV0dG9uLmlkID0gJ2VkaXR0YXNrJztcbiAgICBhZGRUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gJ0VkaXQgVGFzayc7XG4gICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFsaWRhdGVBbmRFZGl0VGFzayhpZCk7XG4gICAgfSlcbiAgICBwb3B1cEJvdC5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcblxuICAgIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwQm90KTtcblxuICAgIG92ZXJsYXkuYXBwZW5kQ2hpbGQocG9wdXApO1xuXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xufVxuXG5mdW5jdGlvbiBjbG9zZU92ZXJsYXkoKSB7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5MycpO1xuICAgIG92ZXJsYXkucmVtb3ZlKClcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFza1BvcHVwKGNvbmZpcm1DYWxsYmFjaykge1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvdmVybGF5LmNsYXNzTmFtZSA9ICdvdmVybGF5Mic7XG5cbiAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcHVwLmNsYXNzTmFtZSA9ICdwb3B1cDInO1xuXG4gICAgY29uc3QgcG9wdXBUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3B1cFRvcC5jbGFzc05hbWUgPSAncG9wdXAtdG9wMic7XG5cbiAgICBjb25zdCB0cmlhbmdsZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgdHJpYW5nbGVJY29uLmNsYXNzTmFtZSA9ICdmYS1zb2xpZCBmYS10cmlhbmdsZS1leGNsYW1hdGlvbic7XG5cbiAgICBjb25zdCBwb3B1cE1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcG9wdXBNZXNzYWdlLnRleHRDb250ZW50ID0gJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyB0YXNrPyc7XG5cbiAgICBjb25zdCBwb3B1cEJvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcHVwQm90LmNsYXNzTmFtZSA9ICdwb3B1cC1ib3QyJztcblxuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2xvc2VCdXR0b24uaWQgPSAnY2xvc2UnO1xuICAgIGNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gJ0Nsb3NlJztcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2xvc2VPdmVybGF5MigpXG4gICAgfSk7XG5cbiAgICBjb25zdCBjb25maXJtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uZmlybUJ1dHRvbi5pZCA9ICdkZWxldGV0YXNrJztcbiAgICBjb25maXJtQnV0dG9uLnRleHRDb250ZW50ID0gJ0NvbmZpcm0nO1xuICAgIGNvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbmZpcm1DYWxsYmFjaygpO1xuICAgICAgICBjbG9zZU92ZXJsYXkyKCk7XG4gICAgfSk7XG5cbiAgICBwb3B1cFRvcC5hcHBlbmRDaGlsZCh0cmlhbmdsZUljb24pO1xuICAgIHBvcHVwVG9wLmFwcGVuZENoaWxkKHBvcHVwTWVzc2FnZSk7XG5cbiAgICBwb3B1cEJvdC5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG4gICAgcG9wdXBCb3QuYXBwZW5kQ2hpbGQoY29uZmlybUJ1dHRvbik7XG5cbiAgICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cFRvcCk7XG4gICAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBCb3QpO1xuXG4gICAgb3ZlcmxheS5hcHBlbmRDaGlsZChwb3B1cCk7XG5cbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2sodG9kb0lkKSB7XG4gICAgY29uc3QgdG9kb0xpc3RzID0gZ2V0VG9kb0xpc3RzKCk7XG4gICAgY29uc3QgdXNlZElkcyA9IGdldFVzZWRJZHMoKTtcblxuICAgIGZvciAoY29uc3QgdG9kb0xpc3Qgb2YgdG9kb0xpc3RzKSB7XG4gICAgICAgIGNvbnN0IHRvZG9JbmRleCA9IHRvZG9MaXN0LnRvZG9zLmZpbmRJbmRleCh0b2RvID0+IHRvZG8uaWQgPT09IHRvZG9JZCk7XG4gICAgICAgIGlmICh0b2RvSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0b2RvTGlzdC50b2Rvcy5zcGxpY2UodG9kb0luZGV4LCAxKTtcbiAgICAgICAgICAgIHNhdmVUb2RvTGlzdHModG9kb0xpc3RzKTtcblxuICAgICAgICAgICAgY29uc3QgaWRJbmRleCA9IHVzZWRJZHMuaW5kZXhPZih0b2RvSWQpO1xuICAgICAgICAgICAgaWYgKGlkSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdXNlZElkcy5zcGxpY2UoaWRJbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgc2F2ZVVzZWRJZHModXNlZElkcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlbmRlclRhc2tzKClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnNvbGUuZXJyb3IoJ1RvZG8gbm90IGZvdW5kJyk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlT3ZlcmxheTIoKSB7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5MicpO1xuICAgIG92ZXJsYXkucmVtb3ZlKClcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVBbmRFZGl0VGFzayhpZCkge1xuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay10aXRsZScpO1xuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWRhdGUnKTtcbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpO1xuICAgIGNvbnN0IGxpc3RTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhlbGlzdCcpO1xuXG4gICAgY29uc3QgdGl0bGVBbGVydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZS1hbGVydCcpO1xuICAgIGNvbnN0IGRhdGVBbGVydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLWFsZXJ0Jyk7XG4gICAgY29uc3QgcHJpb3JpdHlBbGVydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eS1hbGVydCcpO1xuICAgIGNvbnN0IGxpc3RBbGVydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LWFsZXJ0Jyk7XG5cbiAgICBsZXQgaXNWYWxpZCA9IHRydWU7XG5cbiAgICBpZiAodGl0bGVJbnB1dC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgdGl0bGVBbGVydC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRpdGxlQWxlcnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG5cbiAgICBpZiAoZGF0ZUlucHV0LnZhbHVlID09PSAnJykge1xuICAgICAgICBkYXRlQWxlcnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkYXRlQWxlcnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG5cbiAgICBpZiAocHJpb3JpdHlTZWxlY3QudmFsdWUgPT09ICcnKSB7XG4gICAgICAgIHByaW9yaXR5QWxlcnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwcmlvcml0eUFsZXJ0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgaWYgKGxpc3RTZWxlY3QudmFsdWUgPT09ICcnKSB7XG4gICAgICAgIGxpc3RBbGVydC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxpc3RBbGVydC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSBsaXN0U2VsZWN0LnZhbHVlO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpO1xuXG4gICAgICAgIGRlbGV0ZVRhc2soaWQpO1xuXG4gICAgICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9kbyh0aXRsZUlucHV0LnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgZGF0ZUlucHV0LnZhbHVlLCBwcmlvcml0eVNlbGVjdC52YWx1ZSwgaWQpO1xuXG4gICAgICAgIGFkZFRvZG9Ub1RvZG9MaXN0KHNlbGVjdGVkVmFsdWUsIG5ld1RvZG8pO1xuICAgICAgICA7XG4gICAgICAgIHJlbmRlclRhc2tzKClcbiAgICAgICAgY2xvc2VPdmVybGF5KCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVMaXN0T3B0aW9ucyh0b2RvTGlzdHMsIGxpc3R2YWx1ZSkge1xuICAgIGNvbnN0IGxpc3RTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhlbGlzdCcpO1xuXG4gICAgbGlzdFNlbGVjdC5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCBpZ25vcmVJZHMgPSBbJzExMTExMScsICcyMjIyMjInLCAnMzMzMzMzJywgJzQ0NDQ0NCddXG5cblxuICAgIHRvZG9MaXN0cy5mb3JFYWNoKGxpc3QgPT4ge1xuICAgICAgICBpZiAoIWlnbm9yZUlkcy5pbmNsdWRlcyhsaXN0LmlkKSkge1xuICAgICAgICAgICAgY29uc3QgbGlzdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgbGlzdE9wdGlvbi52YWx1ZSA9IGxpc3QuaWQ7XG4gICAgICAgICAgICBsaXN0T3B0aW9uLnRleHRDb250ZW50ID0gbGlzdC5uYW1lO1xuICAgICAgICAgICAgbGlzdFNlbGVjdC5hcHBlbmRDaGlsZChsaXN0T3B0aW9uKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGlzdFNlbGVjdC52YWx1ZSA9IGxpc3R2YWx1ZTtcbn1cblxuZnVuY3Rpb24gYWRkVG9kb1RvVG9kb0xpc3Qoc2VsZWN0ZWRWYWx1ZSwgbmV3VG9kbykge1xuICAgIGNvbnN0IG9yaWdpbmFsVG9kb0xpc3QgPSBnZXRUb2RvTGlzdEJ5SWQoc2VsZWN0ZWRWYWx1ZSk7XG5cbiAgICBpZiAoIW9yaWdpbmFsVG9kb0xpc3QpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUb2RvTGlzdCBub3QgZm91bmQgZm9yIHRoZSBzZWxlY3RlZCB2YWx1ZS5cIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVkVG9kb0xpc3QgPSBuZXcgVG9kb0xpc3Qob3JpZ2luYWxUb2RvTGlzdC5uYW1lLCBvcmlnaW5hbFRvZG9MaXN0LmlkKTtcblxuICAgIHVwZGF0ZWRUb2RvTGlzdC50b2RvcyA9IFsuLi5vcmlnaW5hbFRvZG9MaXN0LnRvZG9zLCBuZXdUb2RvXTtcblxuICAgIGNvbnN0IHRvZG9MaXN0cyA9IGdldFRvZG9MaXN0cygpO1xuICAgIGNvbnN0IHVwZGF0ZWRUb2RvTGlzdHMgPSB0b2RvTGlzdHMubWFwKHRvZG9MaXN0ID0+XG4gICAgICAgIHRvZG9MaXN0LmlkID09PSBzZWxlY3RlZFZhbHVlID8gdXBkYXRlZFRvZG9MaXN0IDogdG9kb0xpc3RcbiAgICApO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9MaXN0cycsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRUb2RvTGlzdHMpKTtcblxuICAgIHJlbmRlclRhc2tzKClcbiAgICAgICAgO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0aWFsaXNlTWFpbihpZCkge1xuICAgIGNyZWF0ZU1haW4oaWQpO1xuICAgIHJlbmRlclRhc2tzKClcbn0iLCJpbXBvcnQgeyBUb2RvTGlzdCwgZ2V0VG9kb0xpc3RzLCBzYXZlVG9kb0xpc3RzLCBnZXRVc2VkSWRzLCBzYXZlVXNlZElkcyB9IGZyb20gXCIuL2FwcC5qc1wiXG5pbXBvcnQgaW5pdGlhbGlzZU1haW4sIHsgcmVuZGVyVGFza3MgfSBmcm9tIFwiLi9tYWluLmpzXCJcblxuZnVuY3Rpb24gY3JlYXRlU2lkZWJhcigpIHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7XG5cbiAgICBjb25zdCBzaWRlYmFyTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXJNZW51LmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItbWVudScpO1xuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5cbiAgICBjb25zdCBpbmJveCA9IGNyZWF0ZVNpZGViYXJJdGVtKCdpbmJveCcsICdmYS1pbmJveCcsICdJbmJveCcpO1xuICAgIGluYm94LnNldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJywgJzAwMDAwMCcpXG4gICAgaW5ib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcbiAgICAgICAgc2V0QWN0aXZlQnV0dG9uKGluYm94KTtcbiAgICAgICAgaW5pdGlhbGlzZU1haW4oaW5ib3guZ2V0QXR0cmlidXRlKCdkYXRhLWxpc3QtaWQnKSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0b2RheSA9IGNyZWF0ZVNpZGViYXJJdGVtKCd0b2RheScsICdmYS1jYWxlbmRhci1kYXknLCAnVG9kYXknKTtcbiAgICB0b2RheS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1pZCcsICcxMTExMTEnKVxuICAgIHRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgICAgIHNldEFjdGl2ZUJ1dHRvbih0b2RheSk7XG4gICAgICAgIGluaXRpYWxpc2VNYWluKHRvZGF5LmdldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJykpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdXBjb21pbmcgPSBjcmVhdGVTaWRlYmFySXRlbSgndXBjb21pbmcnLCAnZmEtY2FsZW5kYXItd2VlaycsICdVcGNvbWluZycpO1xuICAgIHVwY29taW5nLnNldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJywgJzIyMjIyMicpXG4gICAgdXBjb21pbmcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcbiAgICAgICAgc2V0QWN0aXZlQnV0dG9uKHVwY29taW5nKTtcbiAgICAgICAgaW5pdGlhbGlzZU1haW4odXBjb21pbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWxpc3QtaWQnKSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhbGwgPSBjcmVhdGVTaWRlYmFySXRlbSgnYWxsJywgJ2ZhLWNhbGVuZGFyLWRheXMnLCAnQWxsJyk7XG4gICAgYWxsLnNldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJywgJzMzMzMzMycpXG4gICAgYWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgICAgIHNldEFjdGl2ZUJ1dHRvbihhbGwpO1xuICAgICAgICBpbml0aWFsaXNlTWFpbihhbGwuZ2V0QXR0cmlidXRlKCdkYXRhLWxpc3QtaWQnKSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBpbXBvcnRhbnQgPSBjcmVhdGVTaWRlYmFySXRlbSgnaW1wb3J0YW50JywgJ2ZhLXN0YXInLCAnSW1wb3J0YW50Jyk7XG4gICAgaW1wb3J0YW50LnNldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJywgJzQ0NDQ0NCcpXG4gICAgaW1wb3J0YW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgICAgIHNldEFjdGl2ZUJ1dHRvbihpbXBvcnRhbnQpO1xuICAgICAgICBpbml0aWFsaXNlTWFpbihpbXBvcnRhbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWxpc3QtaWQnKSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBsaXN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGlzdHMuY2xhc3NMaXN0LmFkZCgnbGlzdHMnKTtcbiAgICBsaXN0cy5pbm5lckhUTUwgPSAnPGRpdj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLWxpc3QtY2hlY2tcIj48L2k+IDxwPkxpc3RzPC9wPjwvZGl2PiA8ZGl2PjxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2hldnJvbi11cFwiPjwvaT48L2Rpdj4nO1xuICAgIGxpc3RzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsaXN0Q2xpY2spO1xuXG4gICAgY29uc3QgYWNjb3JkaW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWNjb3JkaW9uLmNsYXNzTGlzdC5hZGQoJ2FjY29yZGlvbicpO1xuXG4gICAgY29uc3QgbmV3TGlzdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdMaXN0cy5jbGFzc0xpc3QuYWRkKCduZXctbGlzdHMnKTtcblxuICAgIGNvbnN0IGNyZWF0ZU5ldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNyZWF0ZU5ldy5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtbmV3Jyk7XG4gICAgY3JlYXRlTmV3LmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXBsdXNcIj48L2k+IE5ldyBMaXN0J1xuICAgIGNyZWF0ZU5ldy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbmV3TGlzdFBvcHVwKCk7XG4gICAgfSk7XG5cbiAgICBhY2NvcmRpb24uYXBwZW5kQ2hpbGQobmV3TGlzdHMpO1xuICAgIGFjY29yZGlvbi5hcHBlbmRDaGlsZChjcmVhdGVOZXcpO1xuXG4gICAgbWVudS5hcHBlbmRDaGlsZChpbmJveCk7XG4gICAgbWVudS5hcHBlbmRDaGlsZCh0b2RheSk7XG4gICAgbWVudS5hcHBlbmRDaGlsZCh1cGNvbWluZyk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChhbGwpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoaW1wb3J0YW50KTtcbiAgICBtZW51LmFwcGVuZENoaWxkKGxpc3RzKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKGFjY29yZGlvbilcblxuICAgIHNpZGViYXJNZW51LmFwcGVuZENoaWxkKG1lbnUpO1xuXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyTWVudSk7XG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHNpZGViYXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTaWRlYmFySXRlbShjbGFzc05hbWUsIGljb25DbGFzcywgdGV4dCkge1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUsICduYXYtYnV0dG9ucycpO1xuXG4gICAgY29uc3QgaXRlbUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtQ29udGVudC5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCAke2ljb25DbGFzc31cIj48L2k+IDxwPiR7dGV4dH08L3A+YDtcblxuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbUNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIGl0ZW07XG59XG5cbmZ1bmN0aW9uIG5ld0xpc3RQb3B1cCgpIHtcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5Jyk7XG5cbiAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ3BvcHVwJyk7XG5cbiAgICBjb25zdCBwb3B1cFRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcHVwVG9wLmNsYXNzTGlzdC5hZGQoJ3BvcHVwLXRvcCcpO1xuXG4gICAgY29uc3QgdGl0bGVQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGl0bGVQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnTmV3IExpc3QnO1xuXG4gICAgY29uc3QgY2xvc2VJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIGNsb3NlSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS14bWFyaycpO1xuICAgIGNsb3NlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlT3ZlcmxheSk7XG5cbiAgICBwb3B1cFRvcC5hcHBlbmRDaGlsZCh0aXRsZVBhcmFncmFwaCk7XG4gICAgcG9wdXBUb3AuYXBwZW5kQ2hpbGQoY2xvc2VJY29uKTtcblxuICAgIGNvbnN0IHBvcHVwTWlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9wdXBNaWQuY2xhc3NMaXN0LmFkZCgncG9wdXAtbWlkJyk7XG5cbiAgICBjb25zdCBpbnB1dFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpbnB1dFBhcmFncmFwaC50ZXh0Q29udGVudCA9ICdOYW1lIChtYXggMTAgY2hhcmFjdGVycyk6JztcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld2xpc3RpbnB1dCcpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnMTAnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgdHJ1ZSk7XG5cbiAgICBjb25zdCBhbGVydFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhbGVydFBhcmFncmFwaC5jbGFzc0xpc3QuYWRkKCdhbGVydCcpO1xuICAgIGFsZXJ0UGFyYWdyYXBoLnRleHRDb250ZW50ID0gJ0xpc3QgbmFtZSBpcyByZXF1aXJlZC4nO1xuICAgIGFsZXJ0UGFyYWdyYXBoLnN0eWxlLmNvbG9yID0gJ3JlZCc7XG4gICAgYWxlcnRQYXJhZ3JhcGguc3R5bGUubWFyZ2luVG9wID0gJy41cmVtJztcbiAgICBhbGVydFBhcmFncmFwaC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgcG9wdXBNaWQuYXBwZW5kQ2hpbGQoaW5wdXRQYXJhZ3JhcGgpO1xuICAgIHBvcHVwTWlkLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBwb3B1cE1pZC5hcHBlbmRDaGlsZChhbGVydFBhcmFncmFwaCk7XG5cbiAgICBjb25zdCBwb3B1cEJvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcHVwQm90LmNsYXNzTGlzdC5hZGQoJ3BvcHVwLWJvdCcpO1xuXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjbG9zZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Nsb3NlJyk7XG4gICAgY2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSAnQ2xvc2UnO1xuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VPdmVybGF5KVxuXG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkaXRpb24nKTtcbiAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIExpc3QnO1xuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZE5ld0xpc3QpXG5cbiAgICBwb3B1cEJvdC5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG4gICAgcG9wdXBCb3QuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcblxuICAgIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwVG9wKTtcbiAgICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cE1pZCk7XG4gICAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBCb3QpO1xuXG4gICAgb3ZlcmxheS5hcHBlbmRDaGlsZChwb3B1cCk7XG5cbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUxpc3RQb3B1cChjb25maXJtQ2FsbGJhY2spIHtcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3ZlcmxheS5jbGFzc05hbWUgPSAnb3ZlcmxheTInO1xuXG4gICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3B1cC5jbGFzc05hbWUgPSAncG9wdXAyJztcblxuICAgIGNvbnN0IHBvcHVwVG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9wdXBUb3AuY2xhc3NOYW1lID0gJ3BvcHVwLXRvcDInO1xuXG4gICAgY29uc3QgdHJpYW5nbGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIHRyaWFuZ2xlSWNvbi5jbGFzc05hbWUgPSAnZmEtc29saWQgZmEtdHJpYW5nbGUtZXhjbGFtYXRpb24nO1xuXG4gICAgY29uc3QgcG9wdXBNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBvcHVwTWVzc2FnZS50ZXh0Q29udGVudCA9ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgbGlzdD8nO1xuXG4gICAgY29uc3QgcG9wdXBCb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3B1cEJvdC5jbGFzc05hbWUgPSAncG9wdXAtYm90Mic7XG5cbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNsb3NlQnV0dG9uLmlkID0gJ2Nsb3NlJztcbiAgICBjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDbG9zZSc7XG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsb3NlT3ZlcmxheTIoKVxuICAgIH0pO1xuXG4gICAgY29uc3QgY29uZmlybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbmZpcm1CdXR0b24uaWQgPSAnZGVsZXRlbGlzdCc7XG4gICAgY29uZmlybUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb25maXJtJztcbiAgICBjb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25maXJtQ2FsbGJhY2soKTtcbiAgICAgICAgY2xvc2VPdmVybGF5MigpO1xuICAgIH0pO1xuXG4gICAgcG9wdXBUb3AuYXBwZW5kQ2hpbGQodHJpYW5nbGVJY29uKTtcbiAgICBwb3B1cFRvcC5hcHBlbmRDaGlsZChwb3B1cE1lc3NhZ2UpO1xuXG4gICAgcG9wdXBCb3QuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuICAgIHBvcHVwQm90LmFwcGVuZENoaWxkKGNvbmZpcm1CdXR0b24pO1xuXG4gICAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBUb3ApO1xuICAgIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwQm90KTtcblxuICAgIG92ZXJsYXkuYXBwZW5kQ2hpbGQocG9wdXApO1xuXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xufVxuXG5mdW5jdGlvbiBjbG9zZU92ZXJsYXkoKSB7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG4gICAgb3ZlcmxheS5yZW1vdmUoKVxufVxuXG5mdW5jdGlvbiBkZWxldGVMaXN0KGlkKSB7XG4gICAgY29uc3QgdG9kb0xpc3RzID0gZ2V0VG9kb0xpc3RzKCk7XG4gICAgY29uc3QgdXNlZElkcyA9IGdldFVzZWRJZHMoKTtcblxuICAgIGNvbnN0IGlkSW5kZXggPSB1c2VkSWRzLmluZGV4T2YoaWQpO1xuICAgIGlmIChpZEluZGV4ICE9PSAtMSkge1xuICAgICAgICB1c2VkSWRzLnNwbGljZShpZEluZGV4LCAxKTtcbiAgICAgICAgc2F2ZVVzZWRJZHModXNlZElkcyk7XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlZFRvZG9MaXN0cyA9IHRvZG9MaXN0cy5maWx0ZXIobGlzdCA9PiBsaXN0LmlkICE9PSBpZCk7XG4gICAgc2F2ZVRvZG9MaXN0cyh1cGRhdGVkVG9kb0xpc3RzKTtcblxuICAgIHJlbmRlclRvZG9MaXN0cygpO1xuXG4gICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gnKTtcbiAgICBzZXRBY3RpdmVCdXR0b24oaW5ib3gpXG4gICAgaW5pdGlhbGlzZU1haW4oJzAwMDAwMCcpXG59XG5cbmZ1bmN0aW9uIGNsb3NlT3ZlcmxheTIoKSB7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5MicpO1xuICAgIG92ZXJsYXkucmVtb3ZlKClcbn1cblxuZnVuY3Rpb24gbmV3TGlzdEl0ZW0obmFtZSwgaWQpIHtcbiAgICBjb25zdCBuZXdMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld0xpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b25zJywgJ3RoZS1uZXctbGlzdHMnKTtcbiAgICBuZXdMaXN0SXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWxpc3QtaWRcIiwgaWQpO1xuXG4gICAgY29uc3QgbmV3TGlzdEl0ZW1DaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld0xpc3RJdGVtQ2hpbGQuaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2lyY2xlXCI+PC9pPiR7bmFtZX08L2Rpdj5gO1xuXG4gICAgY29uc3QgbmV3TGlzdEl0ZW1DaGlsZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdMaXN0SXRlbUNoaWxkMi5jbGFzc0xpc3QuYWRkKCd0cmFzaCcpO1xuICAgIGNvbnN0IHRoZVRyYXNoSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICB0aGVUcmFzaEljb24uY2xhc3NMaXN0LmFkZCgnZmEtcmVndWxhcicsICdmYS10cmFzaC1jYW4nLCAnbGlzdC1kZWxldGVyJyk7XG4gICAgdGhlVHJhc2hJY29uLnNldEF0dHJpYnV0ZShcImRhdGEtbGlzdC1pZFwiLCBpZCk7XG4gICAgbmV3TGlzdEl0ZW1DaGlsZDIuYXBwZW5kQ2hpbGQodGhlVHJhc2hJY29uKTtcblxuICAgIG5ld0xpc3RJdGVtLmFwcGVuZENoaWxkKG5ld0xpc3RJdGVtQ2hpbGQpO1xuICAgIG5ld0xpc3RJdGVtLmFwcGVuZENoaWxkKG5ld0xpc3RJdGVtQ2hpbGQyKTtcblxuICAgIHJldHVybiBuZXdMaXN0SXRlbVxufVxuXG5mdW5jdGlvbiByZW5kZXJUb2RvTGlzdHMoKSB7XG4gICAgY29uc3QgdG9kb0xpc3RzID0gZ2V0VG9kb0xpc3RzKCk7XG4gICAgY29uc3QgbmV3TGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWxpc3RzJyk7XG5cbiAgICBuZXdMaXN0cy5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IG5vbkRlZmF1bHRUb2RvTGlzdHMgPSB0b2RvTGlzdHMuZmlsdGVyKHRvZG9MaXN0ID0+ICFpc0RlZmF1bHRUb2RvTGlzdCh0b2RvTGlzdC5pZCkpO1xuXG4gICAgbm9uRGVmYXVsdFRvZG9MaXN0cy5mb3JFYWNoKHRvZG9MaXN0ID0+IHtcbiAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSBuZXdMaXN0SXRlbSh0b2RvTGlzdC5uYW1lLCB0b2RvTGlzdC5pZCk7XG4gICAgICAgIG5ld0xpc3RzLmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tdGl0bGUnKTtcbiAgICBjb25zdCB0aXRsZWNvbnRlbnQgPSB0aXRsZS50ZXh0Q29udGVudDtcblxuXG5cbiAgICBjb25zdCBnZW5lcmF0ZWREaXZzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRoZS1uZXctbGlzdHNcIik7XG4gICAgZm9yIChjb25zdCBkaXYgb2YgZ2VuZXJhdGVkRGl2cykge1xuICAgICAgICBpZiAoZGl2LnRleHRDb250ZW50ID09PSB0aXRsZWNvbnRlbnQpIHtcbiAgICAgICAgICAgIHNldEFjdGl2ZUJ1dHRvbihkaXYpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdHJhc2hJY29uID0gZGl2LnF1ZXJ5U2VsZWN0b3IoXCIudHJhc2ggLmZhLXRyYXNoLWNhblwiKTtcbiAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRyYXNoSWNvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9KTtcblxuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdHJhc2hJY29uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGRpdi5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcbiAgICAgICAgICAgIHNldEFjdGl2ZUJ1dHRvbihkaXYpO1xuICAgICAgICAgICAgaW5pdGlhbGlzZU1haW4oZGl2LmdldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJykpXG5cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBhY2NvcmRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uJyk7XG4gICAgY29uc3QgZ2VuZXJhdGVkQmlucyA9IGFjY29yZGlvbi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsaXN0LWRlbGV0ZXInKTtcbiAgICBmb3IgKGNvbnN0IGJpbiBvZiBnZW5lcmF0ZWRCaW5zKSB7XG4gICAgICAgIGJpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIGNvbnN0IGxpc3RJZCA9IGJpbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1pZCcpO1xuICAgICAgICAgICAgZGVsZXRlTGlzdFBvcHVwKCgpID0+IGRlbGV0ZUxpc3QobGlzdElkKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5mdW5jdGlvbiBpc0RlZmF1bHRUb2RvTGlzdChpZCkge1xuICAgIGNvbnN0IGRlZmF1bHRUb2RvTGlzdElkcyA9IFtcIjAwMDAwMFwiLCBcIjExMTExMVwiLCBcIjIyMjIyMlwiLCBcIjMzMzMzM1wiLCBcIjQ0NDQ0NFwiXTtcblxuICAgIHJldHVybiBkZWZhdWx0VG9kb0xpc3RJZHMuaW5jbHVkZXMoaWQpO1xufVxuXG5mdW5jdGlvbiBhZGROZXdMaXN0KCkge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld2xpc3RpbnB1dCcpO1xuICAgIGNvbnN0IGFsZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsZXJ0Jyk7XG4gICAgY29uc3QgcGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uJyk7XG5cbiAgICBjb25zdCBpbnB1dFZhbHVlID0gaW5wdXQudmFsdWU7XG5cbiAgICBpZiAoaW5wdXQuY2hlY2tWYWxpZGl0eSgpID09PSBmYWxzZSkge1xuICAgICAgICBhbGVydC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgaW5wdXQuc3R5bGUuYm9yZGVyQ29sb3IgPSAncmVkJztcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuZXdMaXN0ID0gbmV3IFRvZG9MaXN0KGlucHV0VmFsdWUpO1xuICAgICAgICBjb25zdCB0b2RvTGlzdHMgPSBnZXRUb2RvTGlzdHMoKTtcbiAgICAgICAgdG9kb0xpc3RzLnB1c2gobmV3TGlzdCk7XG4gICAgICAgIHNhdmVUb2RvTGlzdHModG9kb0xpc3RzKTtcblxuXG5cbiAgICAgICAgY29uc3QgbmV3TGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWxpc3RzJyk7XG4gICAgICAgIG5ld0xpc3RzLmFwcGVuZENoaWxkKG5ld0xpc3RJdGVtKGlucHV0VmFsdWUsIG5ld0xpc3QuaWQpKTtcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcblxuICAgICAgICByZW5kZXJUb2RvTGlzdHMoKVxuXG4gICAgICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IHBhbmVsLnNjcm9sbEhlaWdodCArIFwicHhcIjtcbiAgICAgICAgYWxlcnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuXG4gICAgICAgIGNsb3NlT3ZlcmxheSgpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBzZXRBY3RpdmVCdXR0b24oYnV0dG9uKSB7XG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWJ1dHRvbnNcIik7XG5cbiAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBpZiAoYnV0dG9uICE9PSB0aGlzKSB7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59XG5cbmZ1bmN0aW9uIGxpc3RDbGljaygpIHtcbiAgICBjb25zdCBsaXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0cycpXG4gICAgY29uc3QgY2hldnJvbkljb24gPSBsaXN0cy5xdWVyeVNlbGVjdG9yKFwiLmZhLWNoZXZyb24tdXBcIik7XG4gICAgY2hldnJvbkljb24uY2xhc3NMaXN0LnRvZ2dsZShcImZhLWNoZXZyb24tZG93blwiKTtcblxuICAgIGNvbnN0IHBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbicpO1xuXG4gICAgaWYgKHBhbmVsLnN0eWxlLm1heEhlaWdodCkge1xuICAgICAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IHBhbmVsLnNjcm9sbEhlaWdodCArIFwicHhcIjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNpZGViYXJBbmltYXRlKCkge1xuICAgIGNvbnN0IHNjcmVlbldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZS1zaWRlYmFyJyk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG5cbiAgICBpZiAoc2NyZWVuV2lkdGggPiA3NjgpIHtcbiAgICAgICAgaWYgKHNpZGViYXIuc3R5bGUubGVmdCA9PT0gJycgfHwgc2lkZWJhci5zdHlsZS5sZWZ0ID09PSAnMHB4Jykge1xuICAgICAgICAgICAgc2lkZWJhci5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgICAgICBzaWRlYmFyLnN0eWxlLmxlZnQgPSAnLTEwMCUnO1xuICAgICAgICAgICAgbWFpbi5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gJzFmcidcbiAgICAgICAgICAgIG1haW4uc3R5bGUuZ3JpZFRlbXBsYXRlQXJlYXMgPSAnXCJtYWluLWFyZWFcIidcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS1iYXJzLXN0YWdnZXJlZCcpO1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ZhLWJhcnMnKTtcbiAgICAgICAgfSBlbHNlIGlmIChzaWRlYmFyLnN0eWxlLmxlZnQgPT09ICctMTAwJScpIHtcbiAgICAgICAgICAgIHNpZGViYXIuc3R5bGUubGVmdCA9ICcwJztcbiAgICAgICAgICAgIHNpZGViYXIuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICAgICAgbWFpbi5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gJzMwMHB4IDFmcidcbiAgICAgICAgICAgIG1haW4uc3R5bGUuZ3JpZFRlbXBsYXRlQXJlYXMgPSAnXCJzaWRlYmFyIG1haW4tYXJlYVwiJ1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWJhcnMnKTtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmYS1iYXJzLXN0YWdnZXJlZCcpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHNpZGViYXIuc3R5bGUubGVmdCA9PT0gJy0xMDAlJykge1xuICAgICAgICAgICAgc2lkZWJhci5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWJhcnMnKTtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmYS1iYXJzLXN0YWdnZXJlZCcpO1xuICAgICAgICB9IGVsc2UgaWYgKHNpZGViYXIuc3R5bGUubGVmdCA9PT0gJycgfHwgc2lkZWJhci5zdHlsZS5sZWZ0ID09PSAnMHB4Jykge1xuICAgICAgICAgICAgc2lkZWJhci5zdHlsZS5sZWZ0ID0gJy0xMDAlJztcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS1iYXJzLXN0YWdnZXJlZCcpO1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ZhLWJhcnMnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gaG9tZUJ1dHRvbkNsaWNrKCkge1xuICAgIGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheVwiKTtcblxuICAgIHNldEFjdGl2ZUJ1dHRvbih0b2RheSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdGlhbGl6ZVNpZGViYXIoKSB7XG4gICAgY3JlYXRlU2lkZWJhcigpO1xuXG4gICAgY29uc3QgdG9nZ2xlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZS1zaWRlYmFyJyk7XG4gICAgdG9nZ2xlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2lkZWJhckFuaW1hdGUpO1xuXG4gICAgY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUtaG9tZScpO1xuICAgIGhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBob21lQnV0dG9uQ2xpY2spXG5cbiAgICBzZXRBY3RpdmVCdXR0b24oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmJveFwiKSk7XG4gICAgaW5pdGlhbGlzZU1haW4oJzAwMDAwMCcpXG5cbiAgICByZW5kZXJUb2RvTGlzdHMoKVxuICAgIHJlbmRlclRhc2tzKClcbn1cbiIsImltcG9ydCBpbml0aWFsaXplU2lkZWJhciBmcm9tICcuL3NpZGViYXInXG5pbXBvcnQgeyByZW5kZXJUYXNrcyB9IGZyb20gJy4vbWFpbidcbmltcG9ydCB7IFRvZG8sIFRvZG9MaXN0LCBnZXRUb2RvTGlzdHMsIHNhdmVUb2RvTGlzdHMsIGdldFVzZWRJZHMsIHNhdmVVc2VkSWRzLCBnZXRUb2RvTGlzdEJ5SWQgfSBmcm9tICcuL2FwcC5qcydcblxuZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdi5jbGFzc0xpc3QuYWRkKCduYXYnKTtcblxuICAgIGNvbnN0IG5hdklubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2SW5uZXIuY2xhc3NMaXN0LmFkZCgnbmF2LWlubmVyJylcblxuICAgIGNvbnN0IGxlZnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZWZ0RGl2LmNsYXNzTGlzdC5hZGQoJ2xlZnQtbmF2Jyk7XG5cbiAgICBjb25zdCBjZW50ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjZW50ZXJEaXYuY2xhc3NMaXN0LmFkZCgnY2VudGVyLW5hdicpO1xuXG4gICAgY29uc3QgcmlnaHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByaWdodERpdi5jbGFzc0xpc3QuYWRkKCdyaWdodC1uYXYnKTtcblxuICAgIGNvbnN0IGxvZ29EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2dvRGl2LmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcblxuICAgIGNvbnN0IG1lbnVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIGNvbnN0IHNjcmVlbldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgaWYgKHNjcmVlbldpZHRoID4gNzY4KSB7XG4gICAgICAgIG1lbnVJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLWJhcnMtc3RhZ2dlcmVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWVudUljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtYmFycycpO1xuICAgIH1cblxuICAgIG1lbnVJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9nZ2xlLXNpZGViYXInKTtcblxuICAgIGNvbnN0IGhvbWVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIGhvbWVJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLWhvdXNlJyk7XG4gICAgaG9tZUljb24uc2V0QXR0cmlidXRlKCdpZCcsICd0b2dnbGUtaG9tZScpO1xuXG4gICAgbGVmdERpdi5hcHBlbmRDaGlsZChtZW51SWNvbik7XG4gICAgbGVmdERpdi5hcHBlbmRDaGlsZChob21lSWNvbik7XG5cbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RhdGVJbnB1dCcpO1xuXG4gICAgY2VudGVyRGl2LmFwcGVuZENoaWxkKGRhdGUpXG5cbiAgICBjb25zdCBhZGRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIGFkZEljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtcGx1cycpO1xuICAgIGFkZEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG5ld1Rhc2tQb3B1cCgpO1xuXG4gICAgICAgIGNvbnN0IHRvZG9MaXN0cyA9IGdldFRvZG9MaXN0cygpO1xuICAgICAgICBjb25zdCBuYXZCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1idXR0b25zJyk7XG4gICAgICAgIGxldCBhY3RpdmVOYXZCdXR0b24gPSBudWxsO1xuXG4gICAgICAgIGZvciAoY29uc3QgYnV0dG9uIG9mIG5hdkJ1dHRvbnMpIHtcbiAgICAgICAgICAgIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZU5hdkJ1dHRvbiA9IGJ1dHRvbjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRhdGFMaXN0SWQgPSBhY3RpdmVOYXZCdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWxpc3QtaWQnKTtcbiAgICAgICAgY3JlYXRlTGlzdE9wdGlvbnModG9kb0xpc3RzLCBkYXRhTGlzdElkKTtcbiAgICB9KVxuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1RvRG8nO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG5cbiAgICBsb2dvRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIHJpZ2h0RGl2LmFwcGVuZENoaWxkKGFkZEljb24pO1xuICAgIHJpZ2h0RGl2LmFwcGVuZENoaWxkKGxvZ29EaXYpO1xuXG4gICAgbmF2SW5uZXIuYXBwZW5kQ2hpbGQobGVmdERpdik7XG4gICAgbmF2SW5uZXIuYXBwZW5kQ2hpbGQoY2VudGVyRGl2KTtcbiAgICBuYXZJbm5lci5hcHBlbmRDaGlsZChyaWdodERpdik7XG5cbiAgICBuYXYuYXBwZW5kQ2hpbGQobmF2SW5uZXIpO1xuXG4gICAgcmV0dXJuIG5hdlxufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICBtYWluLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbicpO1xuXG5cbiAgICByZXR1cm4gbWFpblxufVxuXG5mdW5jdGlvbiBuZXdUYXNrUG9wdXAoKSB7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG92ZXJsYXkuY2xhc3NOYW1lID0gJ292ZXJsYXkzJztcblxuICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9wdXAuY2xhc3NOYW1lID0gJ3BvcHVwMyc7XG5cbiAgICBjb25zdCBwb3B1cFRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcHVwVG9wLmNsYXNzTmFtZSA9ICdwb3B1cC10b3AzJztcblxuICAgIGNvbnN0IHRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0aXRsZVRleHQudGV4dENvbnRlbnQgPSAnTmV3IFRhc2snO1xuICAgIHBvcHVwVG9wLmFwcGVuZENoaWxkKHRpdGxlVGV4dCk7XG5cbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBjbG9zZUJ1dHRvbi5jbGFzc05hbWUgPSAnZmEtc29saWQgZmEteG1hcmsnO1xuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VPdmVybGF5KTtcbiAgICBwb3B1cFRvcC5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG5cbiAgICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cFRvcCk7XG5cbiAgICBjb25zdCBwb3B1cE1pZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcHVwTWlkLmNsYXNzTmFtZSA9ICdwb3B1cC1taWQzJztcblxuICAgIGNvbnN0IG1pZExlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtaWRMZWZ0LmNsYXNzTmFtZSA9ICdtaWQtbGVmdCc7XG5cbiAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlOic7XG4gICAgbWlkTGVmdC5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcblxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRpdGxlSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICB0aXRsZUlucHV0Lm1heExlbmd0aCA9IDYwO1xuICAgIHRpdGxlSW5wdXQuaWQgPSAndGFzay10aXRsZSc7XG4gICAgdGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgbWlkTGVmdC5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICAgIGNvbnN0IHRpdGxlQWxlcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGl0bGVBbGVydC5jbGFzc0xpc3QuYWRkKCd0aXRsZS1hbGVydCcpO1xuICAgIHRpdGxlQWxlcnQudGV4dENvbnRlbnQgPSAnVGl0bGUgaXMgcmVxdWlyZWQuJztcbiAgICB0aXRsZUFsZXJ0LnN0eWxlLmNvbG9yID0gJ3JlZCc7XG4gICAgdGl0bGVBbGVydC5zdHlsZS5tYXJnaW5Ub3AgPSAnJztcbiAgICB0aXRsZUFsZXJ0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgbWlkTGVmdC5hcHBlbmRDaGlsZCh0aXRsZUFsZXJ0KVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbjonO1xuICAgIG1pZExlZnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvblRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBkZXNjcmlwdGlvblRleHRhcmVhLmlkID0gJ2Rlc2NyaXB0aW9uJztcbiAgICBkZXNjcmlwdGlvblRleHRhcmVhLmNvbHMgPSAzMDtcbiAgICBkZXNjcmlwdGlvblRleHRhcmVhLnJvd3MgPSA0O1xuICAgIGRlc2NyaXB0aW9uVGV4dGFyZWEubWF4TGVuZ3RoID0gMTgwO1xuICAgIG1pZExlZnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UZXh0YXJlYSk7XG5cbiAgICBwb3B1cE1pZC5hcHBlbmRDaGlsZChtaWRMZWZ0KTtcblxuICAgIGNvbnN0IG1pZFJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWlkUmlnaHQuY2xhc3NOYW1lID0gJ21pZC1yaWdodCc7XG5cbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgZGF0ZTonO1xuICAgIG1pZFJpZ2h0LmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG5cbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgIGRhdGVJbnB1dC5pZCA9ICd0YXNrLWRhdGUnO1xuICAgIGRhdGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgbWlkUmlnaHQuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblxuICAgIGNvbnN0IGRhdGVBbGVydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkYXRlQWxlcnQuY2xhc3NMaXN0LmFkZCgnZGF0ZS1hbGVydCcpO1xuICAgIGRhdGVBbGVydC50ZXh0Q29udGVudCA9ICdEYXRlIGlzIHJlcXVpcmVkLic7XG4gICAgZGF0ZUFsZXJ0LnN0eWxlLmNvbG9yID0gJ3JlZCc7XG4gICAgZGF0ZUFsZXJ0LnN0eWxlLm1hcmdpblRvcCA9ICcnO1xuICAgIGRhdGVBbGVydC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgbWlkUmlnaHQuYXBwZW5kQ2hpbGQoZGF0ZUFsZXJ0KTtcblxuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6JztcbiAgICBtaWRSaWdodC5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcblxuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgcHJpb3JpdHlTZWxlY3QuaWQgPSAncHJpb3JpdHknO1xuICAgIHByaW9yaXR5U2VsZWN0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBbJ0xvdycsICdNZWRpdW0nLCAnSGlnaCddLmZvckVhY2gocHJpb3JpdHlUZXh0ID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHByaW9yaXR5VGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcmlvcml0eVRleHQ7XG4gICAgICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSk7XG4gICAgbWlkUmlnaHQuYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3QpO1xuXG4gICAgY29uc3QgcHJpb3JpdHlBbGVydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcmlvcml0eUFsZXJ0LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWFsZXJ0Jyk7XG4gICAgcHJpb3JpdHlBbGVydC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSBpcyByZXF1aXJlZC4nO1xuICAgIHByaW9yaXR5QWxlcnQuc3R5bGUuY29sb3IgPSAncmVkJztcbiAgICBwcmlvcml0eUFsZXJ0LnN0eWxlLm1hcmdpblRvcCA9ICcnO1xuICAgIHByaW9yaXR5QWxlcnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIG1pZFJpZ2h0LmFwcGVuZENoaWxkKHByaW9yaXR5QWxlcnQpO1xuXG4gICAgY29uc3QgbGlzdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsaXN0TGFiZWwudGV4dENvbnRlbnQgPSAnTGlzdDonO1xuICAgIG1pZFJpZ2h0LmFwcGVuZENoaWxkKGxpc3RMYWJlbCk7XG5cbiAgICBjb25zdCBsaXN0U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgbGlzdFNlbGVjdC5pZCA9ICd0aGVsaXN0JztcbiAgICBsaXN0U2VsZWN0LnJlcXVpcmVkID0gdHJ1ZTtcblxuICAgIG1pZFJpZ2h0LmFwcGVuZENoaWxkKGxpc3RTZWxlY3QpO1xuXG4gICAgY29uc3QgbGlzdEFsZXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxpc3RBbGVydC5jbGFzc0xpc3QuYWRkKCdsaXN0LWFsZXJ0Jyk7XG4gICAgbGlzdEFsZXJ0LnRleHRDb250ZW50ID0gJ0xpc3QgaXMgcmVxdWlyZWQuJztcbiAgICBsaXN0QWxlcnQuc3R5bGUuY29sb3IgPSAncmVkJztcbiAgICBsaXN0QWxlcnQuc3R5bGUubWFyZ2luVG9wID0gJyc7XG4gICAgbGlzdEFsZXJ0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICBtaWRSaWdodC5hcHBlbmRDaGlsZChsaXN0QWxlcnQpO1xuXG4gICAgcG9wdXBNaWQuYXBwZW5kQ2hpbGQobWlkUmlnaHQpO1xuXG4gICAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBNaWQpO1xuXG4gICAgY29uc3QgcG9wdXBCb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3B1cEJvdC5jbGFzc05hbWUgPSAncG9wdXAtYm90Myc7XG5cbiAgICBjb25zdCB0ZXh0Q2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0ZXh0Q2xvc2VCdXR0b24uaWQgPSAnY2xvc2UnO1xuICAgIHRleHRDbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDbG9zZSc7XG4gICAgdGV4dENsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VPdmVybGF5KTtcbiAgICBwb3B1cEJvdC5hcHBlbmRDaGlsZCh0ZXh0Q2xvc2VCdXR0b24pO1xuXG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFRhc2tCdXR0b24uaWQgPSAnYWRkdGFzayc7XG4gICAgYWRkVGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XG4gICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHZhbGlkYXRlQW5kQWRkVGFzaylcbiAgICBwb3B1cEJvdC5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcblxuICAgIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwQm90KTtcblxuICAgIG92ZXJsYXkuYXBwZW5kQ2hpbGQocG9wdXApO1xuXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xufVxuXG5mdW5jdGlvbiBjbG9zZU92ZXJsYXkoKSB7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5MycpO1xuICAgIG92ZXJsYXkucmVtb3ZlKClcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlzdE9wdGlvbnModG9kb0xpc3RzLCBsaXN0dmFsdWUpIHtcbiAgICBjb25zdCBsaXN0U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoZWxpc3QnKTtcblxuICAgIGxpc3RTZWxlY3QuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgaWdub3JlSWRzID0gWycxMTExMTEnLCAnMjIyMjIyJywgJzMzMzMzMycsICc0NDQ0NDQnXVxuXG5cbiAgICB0b2RvTGlzdHMuZm9yRWFjaChsaXN0ID0+IHtcbiAgICAgICAgaWYgKCFpZ25vcmVJZHMuaW5jbHVkZXMobGlzdC5pZCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIGxpc3RPcHRpb24udmFsdWUgPSBsaXN0LmlkO1xuICAgICAgICAgICAgbGlzdE9wdGlvbi50ZXh0Q29udGVudCA9IGxpc3QubmFtZTtcbiAgICAgICAgICAgIGxpc3RTZWxlY3QuYXBwZW5kQ2hpbGQobGlzdE9wdGlvbik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGxpc3RTZWxlY3QudmFsdWUgPSBsaXN0dmFsdWU7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQW5kQWRkVGFzaygpIHtcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stdGl0bGUnKTtcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kYXRlJyk7XG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKTtcbiAgICBjb25zdCBsaXN0U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoZWxpc3QnKTtcblxuICAgIGNvbnN0IHRpdGxlQWxlcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUtYWxlcnQnKTtcbiAgICBjb25zdCBkYXRlQWxlcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZS1hbGVydCcpO1xuICAgIGNvbnN0IHByaW9yaXR5QWxlcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHktYWxlcnQnKTtcbiAgICBjb25zdCBsaXN0QWxlcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1hbGVydCcpO1xuXG4gICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xuXG4gICAgaWYgKHRpdGxlSW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgIHRpdGxlQWxlcnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aXRsZUFsZXJ0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgaWYgKGRhdGVJbnB1dC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgZGF0ZUFsZXJ0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGF0ZUFsZXJ0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgaWYgKHByaW9yaXR5U2VsZWN0LnZhbHVlID09PSAnJykge1xuICAgICAgICBwcmlvcml0eUFsZXJ0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJpb3JpdHlBbGVydC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIGlmIChsaXN0U2VsZWN0LnZhbHVlID09PSAnJykge1xuICAgICAgICBsaXN0QWxlcnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsaXN0QWxlcnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG5cbiAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICBjb25zdCBzZWxlY3RlZFZhbHVlID0gbGlzdFNlbGVjdC52YWx1ZTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKTtcblxuICAgICAgICBjb25zdCB0aGVUb2RvID0gbmV3IFRvZG8odGl0bGVJbnB1dC52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUsIGRhdGVJbnB1dC52YWx1ZSwgcHJpb3JpdHlTZWxlY3QudmFsdWUpXG4gICAgICAgIGFkZFRvZG9Ub1RvZG9MaXN0KHNlbGVjdGVkVmFsdWUsIHRoZVRvZG8pO1xuXG4gICAgICAgIGNsb3NlT3ZlcmxheSgpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBhZGRUb2RvVG9Ub2RvTGlzdChzZWxlY3RlZFZhbHVlLCBuZXdUb2RvKSB7XG4gICAgY29uc3Qgb3JpZ2luYWxUb2RvTGlzdCA9IGdldFRvZG9MaXN0QnlJZChzZWxlY3RlZFZhbHVlKTtcblxuICAgIGlmICghb3JpZ2luYWxUb2RvTGlzdCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRvZG9MaXN0IG5vdCBmb3VuZCBmb3IgdGhlIHNlbGVjdGVkIHZhbHVlLlwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZWRUb2RvTGlzdCA9IG5ldyBUb2RvTGlzdChvcmlnaW5hbFRvZG9MaXN0Lm5hbWUsIG9yaWdpbmFsVG9kb0xpc3QuaWQpO1xuXG4gICAgdXBkYXRlZFRvZG9MaXN0LnRvZG9zID0gWy4uLm9yaWdpbmFsVG9kb0xpc3QudG9kb3MsIG5ld1RvZG9dO1xuXG4gICAgY29uc3QgdG9kb0xpc3RzID0gZ2V0VG9kb0xpc3RzKCk7XG4gICAgY29uc3QgdXBkYXRlZFRvZG9MaXN0cyA9IHRvZG9MaXN0cy5tYXAodG9kb0xpc3QgPT5cbiAgICAgICAgdG9kb0xpc3QuaWQgPT09IHNlbGVjdGVkVmFsdWUgPyB1cGRhdGVkVG9kb0xpc3QgOiB0b2RvTGlzdFxuICAgICk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb0xpc3RzJywgSlNPTi5zdHJpbmdpZnkodXBkYXRlZFRvZG9MaXN0cykpO1xuXG4gICAgcmVuZGVyVGFza3MoKVxuICAgICAgICA7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRUb2RvTGlzdHMoKSB7XG4gICAgY29uc3QgZGVmYXVsdExpc3RzRGF0YSA9IFtcbiAgICAgICAgeyBuYW1lOiBcIkluYm94XCIsIGlkOiBcIjAwMDAwMFwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJUb2RheVwiLCBpZDogXCIxMTExMTFcIiB9LFxuICAgICAgICB7IG5hbWU6IFwiVXBjb21pbmdcIiwgaWQ6IFwiMjIyMjIyXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIkFsbFwiLCBpZDogXCIzMzMzMzNcIiB9LFxuICAgICAgICB7IG5hbWU6IFwiSW1wb3J0YW50XCIsIGlkOiBcIjQ0NDQ0NFwiIH1cbiAgICBdO1xuXG4gICAgY29uc3QgZXhpc3RpbmdMaXN0cyA9IGdldFRvZG9MaXN0cygpO1xuICAgIGNvbnN0IG1pc3NpbmdMaXN0c0RhdGEgPSBkZWZhdWx0TGlzdHNEYXRhLmZpbHRlcihkZWZhdWx0TGlzdCA9PlxuICAgICAgICAhZXhpc3RpbmdMaXN0cy5zb21lKGV4aXN0aW5nTGlzdCA9PiBleGlzdGluZ0xpc3QubmFtZSA9PT0gZGVmYXVsdExpc3QubmFtZSlcbiAgICApO1xuXG4gICAgY29uc3QgdXBkYXRlZExpc3RzID0gZXhpc3RpbmdMaXN0cy5jb25jYXQobWlzc2luZ0xpc3RzRGF0YS5tYXAoZGF0YSA9PiBuZXcgVG9kb0xpc3QoZGF0YS5uYW1lLCBkYXRhLmlkKSkpO1xuICAgIHNhdmVUb2RvTGlzdHModXBkYXRlZExpc3RzKTtcblxuICAgIHVwZGF0ZVVzZWRJZHMoZGVmYXVsdExpc3RzRGF0YS5tYXAobGlzdCA9PiBsaXN0LmlkKSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVVzZWRJZHMoaWRzVG9JbmNsdWRlKSB7XG4gICAgY29uc3QgdXNlZElkcyA9IGdldFVzZWRJZHMoKTtcbiAgICBjb25zdCB1bmlxdWVVc2VkSWRzID0gQXJyYXkuZnJvbShuZXcgU2V0KHVzZWRJZHMuY29uY2F0KGlkc1RvSW5jbHVkZSkpKTtcbiAgICBzYXZlVXNlZElkcyh1bmlxdWVVc2VkSWRzKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlU2NyZWVuV2lkdGhDaGFuZ2UoKSB7XG4gICAgY29uc3Qgc2NyZWVuV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlLXNpZGViYXInKTtcblxuICAgIGlmIChzY3JlZW5XaWR0aCA8PSA3NjgpIHtcbiAgICAgICAgaWYgKHNjcmVlbldpZHRoIDw9IDMwMCkge1xuICAgICAgICAgICAgc2lkZWJhci5zdHlsZS53aWR0aCA9IHNjcmVlbldpZHRoICsgJ3B4JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNpZGViYXIuc3R5bGUud2lkdGggPSAnMzAwcHgnO1xuICAgICAgICB9XG4gICAgICAgIHNpZGViYXIuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgICBzaWRlYmFyLnN0eWxlLmxlZnQgPSAnLTEwMCUnO1xuICAgICAgICBtYWluLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSAnMWZyJ1xuICAgICAgICBtYWluLnN0eWxlLmdyaWRUZW1wbGF0ZUFyZWFzID0gJ1wibWFpbi1hcmVhXCInXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS1iYXJzLXN0YWdnZXJlZCcpO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZmEtYmFycycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNpZGViYXIuc3R5bGUubGVmdCA9ICcwJztcbiAgICAgICAgc2lkZWJhci5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgIHNpZGViYXIuc3R5bGUud2lkdGggPSAnJztcbiAgICAgICAgbWFpbi5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gJzMwMHB4IDFmcidcbiAgICAgICAgbWFpbi5zdHlsZS5ncmlkVGVtcGxhdGVBcmVhcyA9ICdcInNpZGViYXIgbWFpbi1hcmVhXCInXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS1iYXJzJyk7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmYS1iYXJzLXN0YWdnZXJlZCcpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlV2VicGFnZSgpIHtcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKTtcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xuXG4gICAgdmFyIGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICB2YXIgZm9ybWF0dGVkRGF0ZSA9IGN1cnJlbnREYXRlLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVJbnB1dFwiKS52YWx1ZSA9IGZvcm1hdHRlZERhdGU7XG5cbiAgICBjcmVhdGVEZWZhdWx0VG9kb0xpc3RzKCk7XG5cbiAgICBpbml0aWFsaXplU2lkZWJhcigpXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlU2NyZWVuV2lkdGhDaGFuZ2UpO1xuXG4gICAgaGFuZGxlU2NyZWVuV2lkdGhDaGFuZ2UoKTtcbn1cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=