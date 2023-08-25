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
            const listId = bin.getAttribute('data-list-id');
            deleteTaskPopup(() => deleteTask(listId));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHdJQUF3SSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcseUJBQXlCO0FBQ3hOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlB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RUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0Isa0RBQVk7QUFDbEMsb0JBQW9CLGdEQUFVOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbURBQWE7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpREFBVztBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixzQ0FBSTs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIscURBQWU7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUFnQywwQ0FBUTs7QUFFeEM7O0FBRUEsc0JBQXNCLGtEQUFZO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3bkJ5RjtBQUNsQzs7QUFFdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBYztBQUN0QixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFjO0FBQ3RCLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQWM7QUFDdEIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBYztBQUN0QixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFjO0FBQ3RCLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRCxVQUFVLFlBQVksS0FBSzs7QUFFN0U7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLHFEQUFZO0FBQ2xDLG9CQUFvQixtREFBVTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBVztBQUNuQjs7QUFFQTtBQUNBLElBQUksc0RBQWE7O0FBRWpCOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHFEQUFjO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0VBQXNFLEtBQUs7O0FBRTNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IscURBQVk7QUFDbEM7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvREFBYzs7QUFFMUIsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sNEJBQTRCLDZDQUFRO0FBQ3BDLDBCQUEwQixxREFBWTtBQUN0QztBQUNBLFFBQVEsc0RBQWE7Ozs7QUFJckI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVlO0FBQ2Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxvREFBYzs7QUFFbEI7QUFDQSxJQUFJLHNEQUFXO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFieUM7QUFDTDtBQUM0RTs7QUFFaEg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIscURBQVk7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLHlDQUFJO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2Qix3REFBZTs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLDZDQUFROztBQUV4Qzs7QUFFQSxzQkFBc0IscURBQVk7QUFDbEM7QUFDQTtBQUNBOztBQUVBOztBQUVBLElBQUksa0RBQVc7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLDZCQUE2QjtBQUN2QyxVQUFVLDZCQUE2QjtBQUN2QyxVQUFVLGdDQUFnQztBQUMxQyxVQUFVLDJCQUEyQjtBQUNyQyxVQUFVO0FBQ1Y7O0FBRUEsMEJBQTBCLHFEQUFZO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQSwrRUFBK0UsNkNBQVE7QUFDdkYsSUFBSSxzREFBYTs7QUFFakI7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixtREFBVTtBQUM5QjtBQUNBLElBQUksb0RBQVc7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLElBQUksb0RBQWlCOztBQUVyQjs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90ZXN0LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Rlc3QtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Rlc3QtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90ZXN0LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVzdC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZXN0LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVzdC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Rlc3QtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Rlc3QtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Rlc3QtcGFnZS8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vdGVzdC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Rlc3QtcGFnZS8uL3NyYy9tYWluLmpzIiwid2VicGFjazovL3Rlc3QtcGFnZS8uL3NyYy9zaWRlYmFyLmpzIiwid2VicGFjazovL3Rlc3QtcGFnZS8uL3NyYy93ZWJwYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QnJpY29sYWdlK0dyb3Rlc3F1ZTpvcHN6LHdnaHRAMTAuLjQ4LDIwMDsxMC4uNDgsMzAwOzEwLi40OCw0MDA7MTAuLjQ4LDUwMDsxMC4uNDgsNjAwOzEwLi40OCw3MDA7MTAuLjQ4LDgwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1mYW1pbHk6IFVidW50dSwgc2Fucy1zZXJpZjtcbn1cblxuYm9keSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLm1haW4tY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0NXB4IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAnbmF2YmFyJ1xuICAgICAgICAnbWFpbic7XG59XG5cbi5uYXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDRlNDE7XG4gICAgZ3JpZC1hcmVhOiBuYXZiYXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiAjZjFmYWVlO1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDEwMDtcbn1cblxuLm5hdi1pbm5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubGVmdC1uYXYsXG4ucmlnaHQtbmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5sb2dvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gICAgZ2FwOiAwLjI1cmVtO1xuICAgIGZvbnQtZmFtaWx5OiAycmVtO1xuICAgIGNvbG9yOiAjZjFmYWVlO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ubmF2IC5mYS1wbHVzIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogMC4yNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbn1cblxuLm5hdiAuZmEtcGx1czpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg4ODtcbn1cblxuLm5hdiAuZmEtcGx1czphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG59XG5cbi5sZWZ0LW5hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBnYXA6IDEuNXJlbTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG59XG5cbi5sZWZ0LW5hdiAuZmEtaG91c2Uge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbn1cblxuLmxlZnQtbmF2IC5mYS1iYXJzLFxuLmZhLWJhcnMtc3RhZ2dlcmVkIHtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG59XG5cbi5uYXYgLmZhLXNvbGlkIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNmb3JtOiAwLjJzIGVhc2U7XG59XG5cbi5sZWZ0LW5hdiAuZmEtc29saWQ6aG92ZXIge1xuICAgIG9wYWNpdHk6IDUwJTtcbn1cblxuLmxlZnQtbmF2IC5mYS1zb2xpZDphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG59XG5cbi5jZW50ZXItbmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jZGF0ZUlucHV0IHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODgxNTc7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLm1haW4ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyODVweCAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ3NpZGViYXIgbWFpbi1hcmVhJztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zaWRlYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG59XG5cbi5tYWluLWFyZWEge1xuICAgIGdyaWQtYXJlYTogbWFpbi1hcmVhO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5tZW51IHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLm1lbnUgbGkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IC42cmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5uYXYtYnV0dG9uczpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3NSk7XG59XG5cbi5tZW51IGxpIGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1lbnUgbGkgaSB7XG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcbn1cblxuLm5hdi1idXR0b25zLmFjdGl2ZSB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnRvZGF5IGkge1xuICAgIGNvbG9yOiBjcmltc29uO1xuICAgIG9wYWNpdHk6IDUwJTtcbn1cblxuLmluYm94IGkge1xuICAgIGNvbG9yOiBncmF5O1xufVxuXG4uYWxsIGkge1xuICAgIG9wYWNpdHk6IDcwJTtcbn1cblxuLnVwY29taW5nIGkge1xuICAgIGNvbG9yOiBibHVlO1xuICAgIG9wYWNpdHk6IDUwJTtcbn1cblxuLmltcG9ydGFudCBpIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIG9wYWNpdHk6IDUwJTtcbn1cblxuLmxpc3RzIGkge1xuICAgIGNvbG9yOiBkYXJrb3JhbmdlO1xuICAgIG9wYWNpdHk6IDYwJTtcbn1cblxuLm1lbnUgLmxpc3RzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbn1cblxuLmxpc3RzIC5mYS1jaGV2cm9uLXVwIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHBhZGRpbmctdG9wOiAwLjFyZW07XG59XG5cbi5hY2NvcmRpb24ge1xuICAgIHBhZGRpbmctbGVmdDogMi41cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMnMgZWFzZS1vdXQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXgtaGVpZ2h0OiAwO1xuXG59XG5cbi5jcmVhdGUtbmV3IGkge1xuICAgIHBhZGRpbmctcmlnaHQ6IC4yNXJlbTtcbiAgICBvcGFjaXR5OiA2NSU7XG59XG5cbi5hY2NvcmRpb24gLmNyZWF0ZS1uZXcge1xuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xuICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFjY29yZGlvbiAuY3JlYXRlLW5ldzpob3ZlciB7XG4gICAgY29sb3I6ICMzYTVhNDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01JSk7XG59XG5cbi5hY2NvcmRpb24gLm5ldy1saXN0cyBpIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAuNXJlbTtcbiAgICBmb250LXNpemU6IC41cmVtO1xuICAgIG9wYWNpdHk6IDUwJTtcbn1cblxuLnRoZS1uZXctbGlzdHMge1xuICAgIHBhZGRpbmc6IC41cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi50aGUtbmV3LWxpc3RzIGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGhlLW5ldy1saXN0cyAudHJhc2gge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi50aGUtbmV3LWxpc3RzIC50cmFzaCAuZmEtdHJhc2gtY2FuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogZ3JleTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcbn1cblxuLnRoZS1uZXctbGlzdHMgLnRyYXNoIC5mYS10cmFzaC1jYW46aG92ZXIge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG4ubWFpbi1jaGlsZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDkwJTtcbn1cblxuLm1haW4tYXJlYSAubWFpbi1jaGlsZCAudGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICAgIGNvbG9yOiAjNDQ0O1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ubWFpbi1hcmVhIC5tYWluLWNoaWxkIC50b2RvLXNlY3Rpb24ge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgcGFkZGluZzogMnJlbSAwcmVtO1xufVxuXG4ub3ZlcmxheSxcbi5vdmVybGF5MiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHotaW5kZXg6IDUwMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnBvcHVwLFxuLnBvcHVwMiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5wb3B1cCAuZmEteG1hcmssXG4ucG9wdXAyIC5mYS14bWFyayB7XG4gICAgdG9wOiAxcmVtO1xuICAgIHJpZ2h0OiAxcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIGNvbG9yOiAjMTExO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnBvcHVwIC5wb3B1cC10b3AsXG4ucG9wdXAyIC5wb3B1cC10b3AyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgcGFkZGluZzogMS41cmVtO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5wb3B1cCAucG9wdXAtdG9wIHAge1xuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbn1cblxuLnBvcHVwMiAucG9wdXAtdG9wMiBwIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xufVxuXG4ucG9wdXAgLnBvcHVwLW1pZCxcbi5wb3B1cDIgLnBvcHVwLW1pZCB7XG4gICAgcGFkZGluZzogMHJlbSAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLnBvcHVwIC5wb3B1cC1taWQgcCxcbi5wb3B1cDIgLnBvcHVwLW1pZCBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbn1cblxuLnBvcHVwIC5wb3B1cC1taWQgaW5wdXQsXG4ucG9wdXAyIC5wb3B1cC1taWQgaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5cbi5wb3B1cCAucG9wdXAtbWlkIGlucHV0OmhvdmVyLFxuLnBvcHVwMiAucG9wdXAtbWlkIGlucHV0OmhvdmVyIHtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjM2E1YTQwO1xufVxuXG4ucG9wdXAgLnBvcHVwLW1pZCBpbnB1dDpmb2N1cyxcbi5wb3B1cDIgLnBvcHVwLW1pZCBpbnB1dDpmb2N1cyB7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzNhNWE0MDtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4ucG9wdXAgLnBvcHVwLWJvdCxcbi5wb3B1cDIgLnBvcHVwLWJvdDIge1xuICAgIHBhZGRpbmc6IDByZW0gMS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgZ2FwOiAuNXJlbTtcbn1cblxuLnBvcHVwIC5wb3B1cC1ib3QgI2Nsb3NlLFxuLnBvcHVwMiAucG9wdXAtYm90MiAjY2xvc2Uge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIHBhZGRpbmc6IC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBvcHVwIC5wb3B1cC1ib3QgI2Nsb3NlOmhvdmVyLFxuLnBvcHVwMiAucG9wdXAtYm90MiAjY2xvc2U6aG92ZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5wb3B1cCAucG9wdXAtYm90ICNhZGRpdGlvbixcbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Qge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIHBhZGRpbmc6IC41cmVtIDJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODgxNTc7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jZGVsZXRldGFzayB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgcGFkZGluZzogLjVyZW0gMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4ODE1NztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wb3B1cCAucG9wdXAtYm90ICNhZGRpdGlvbjpob3Zlcixcbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbi5wb3B1cCAucG9wdXAtYm90ICNhZGRpdGlvbjphY3RpdmUsXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0OmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLnBvcHVwIC5mYS14bWFyazpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuXG4ucG9wdXAgLmZhLXhtYXJrOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLnBvcHVwIC5wb3B1cC1ib3QgI2FkZGl0aW9uOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG4ucG9wdXAgLnBvcHVwLWJvdCAjYWRkaXRpb246YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4ucG9wdXAyIC5wb3B1cC10b3AyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ucG9wdXAyIC5wb3B1cC10b3AyIC5mYS10cmlhbmdsZS1leGNsYW1hdGlvbiB7XG4gICAgZm9udC1zaXplOiA0LjVyZW07XG4gICAgY29sb3I6IHJlZDtcbiAgICBvcGFjaXR5OiA3MCU7XG59XG5cbi5wb3B1cDIgLnBvcHVwLWJvdDIge1xuICAgIHBhZGRpbmc6IDByZW0gMS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgZ2FwOiAuNXJlbTtcbn1cblxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdCB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgcGFkZGluZzogLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODgxNTc7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0OmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0OmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLnBvcHVwMiAuZmEteG1hcms6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuLnBvcHVwMiAuZmEteG1hcms6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0OmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0OmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLnBvcHVwMiAucG9wdXAtdG9wMiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnBvcHVwMiAucG9wdXAtdG9wMiAuZmEtdHJpYW5nbGUtZXhjbGFtYXRpb24ge1xuICAgIGZvbnQtc2l6ZTogNC41cmVtO1xuICAgIGNvbG9yOiByZWQ7XG4gICAgb3BhY2l0eTogNzAlO1xufVxuXG4ucG9wdXAyIC5wb3B1cC1ib3QyIHtcbiAgICBwYWRkaW5nOiAwcmVtIDEuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGdhcDogLjVyZW07XG59XG5cbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Qge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIHBhZGRpbmc6IC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg4MTU3O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdDpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdDphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5wb3B1cDIgLmZhLXhtYXJrOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbi5wb3B1cDIgLmZhLXhtYXJrOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdDpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdDphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5vdmVybGF5MyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHotaW5kZXg6IDUwMDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucG9wdXAzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnBvcHVwMyAuZmEteG1hcmsge1xuICAgIHRvcDogMXJlbTtcbiAgICByaWdodDogMXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBjb2xvcjogIzExMTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5wb3B1cDMgLmZhLXhtYXJrOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbi5wb3B1cDMgLmZhLXhtYXJrOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLnBvcHVwMyAucG9wdXAtdG9wMyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnBvcHVwMyAucG9wdXAtdG9wMyBwIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLnBvcHVwMyAucG9wdXAtbWlkMyB7XG4gICAgcGFkZGluZzogMHJlbSAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLm1pZC1sZWZ0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAwLjVyZW07XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5taWQtcmlnaHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDAuNXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnBvcHVwMyAucG9wdXAtbWlkMyBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBwYWRkaW5nLXRvcDogMC4ycmVtO1xufVxuXG4ucG9wdXAzIC5wb3B1cC1taWQzIHRleHRhcmVhIHtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDAuMjVyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnBvcHVwMyAucG9wdXAtbWlkMyB0ZXh0YXJlYTpmb2N1cyB7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzNhNWE0MDtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4ucG9wdXAzIC5wb3B1cC1taWQzIGlucHV0W3R5cGU9J3RleHQnXSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC4ycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbn1cblxuLnBvcHVwMyAucG9wdXAtbWlkMyBzZWxlY3Qge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5wb3B1cDMgLnBvcHVwLW1pZDMgLm1pZC1yaWdodCAjdGFzay1kYXRlIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgcGFkZGluZzogMC4yNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5wb3B1cDMgLnBvcHVwLW1pZDMgaW5wdXQ6aG92ZXIge1xuICAgIGJvcmRlcjogc29saWQgMXB4ICMzYTVhNDA7XG59XG5cbi5wb3B1cDMgLnBvcHVwLW1pZDMgaW5wdXQ6Zm9jdXMge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzYTVhNDA7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLnBvcHVwMyAucG9wdXAtYm90MyB7XG4gICAgcGFkZGluZzogMHJlbSAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBnYXA6IC41cmVtO1xufVxuXG4ucG9wdXAzIC5wb3B1cC1ib3QzICNjbG9zZSB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgcGFkZGluZzogLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucG9wdXAzIC5wb3B1cC1ib3QzICNjbG9zZTpob3ZlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLnBvcHVwMyAucG9wdXAtYm90MyAjYWRkdGFzayB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgcGFkZGluZzogLjVyZW0gMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4ODE1NztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNlZGl0dGFzayB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgcGFkZGluZzogLjVyZW0gMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4ODE1NztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wb3B1cDMgLnBvcHVwLWJvdDMgI2FkZHRhc2s6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbi5wb3B1cDMgLnBvcHVwLWJvdDMgI2FkZHRhc2s6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4udGFzay1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZWFjaC10YXNrLXNlY3Rpb24tdG9wIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YXNrLWxlZnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICAgIGdhcDogLjVyZW07XG59XG5cbi50YXNrLWxlZnQgI3Rhc2t0aXRsZSB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG1heC13aWR0aDogMzB2dztcbn1cblxuLnRhc2stcmlnaHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxcmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IGdyYXk7XG59XG5cbi50YXNrLXJpZ2h0IC50YXNrLWljb25zIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YXNrLXJpZ2h0IC50YXNrLWljb25zOmhvdmVyIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xufVxuXG4udGFzay1yaWdodCAudGFzay1pY29uczphY3RpdmUge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xufVxuXG4uZWFjaC10YXNrLXNlY3Rpb24tYm90IHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgbWFyZ2luLXRvcDogLS43NXJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDk5JTtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xufVxuXG4uZWFjaC10YXNrLXNlY3Rpb24tYm90IHAge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5ib3QtcmlnaHQsXG4uYm90LWxlZnQge1xuICAgIHdpZHRoOiA0OSU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnJpZ2h0LXRvcCxcbi5yaWdodC1ib3QsXG4ubGVmdC10b3AsXG4ubGVmdC1ib3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAuNzVyZW07XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4ucmlnaHQtdG9wLFxuLmxlZnQtdG9wIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5lYWNoLXRhc2stc2VjdGlvbi1ib3QgcC5ib2xkZW4ge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5yaWdodC10b3AgI2xvbmcsXG4ubGVmdC10b3AgI2xvbmcge1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZmEtZmxhZyB7XG4gICAgb3BhY2l0eTogNzAlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAucG9wdXAge1xuICAgICAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICB9XG5cbiAgICAjZGF0ZUlucHV0IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAucG9wdXAyIHtcbiAgICAgICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgfVxuXG4gICAgLnBvcHVwMyB7XG4gICAgICAgIG1heC13aWR0aDogOTAlO1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDMwMHB4KSB7XG4gICAgLm1haW4tYXJlYSAubWFpbi1jaGlsZCAudG9kby1zZWN0aW9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLm1haW4tYXJlYSAubWFpbi1jaGlsZCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5tYWluLWFyZWEgLm1haW4tY2hpbGQgLnRpdGxlIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDByZW07XG4gICAgICAgIHBhZGRpbmctbGVmdDogMHJlbTtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIC5tYWluLWFyZWEgLm1haW4tY2hpbGQgLnRvZG8tc2VjdGlvbiB7XG4gICAgICAgIHdpZHRoOiA5NSU7XG4gICAgfVxuXG4gICAgLm1haW4tYXJlYSAubWFpbi1jaGlsZCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5tYWluLWFyZWEgLm1haW4tY2hpbGQgLnRpdGxlIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDByZW07XG4gICAgICAgIHBhZGRpbmctbGVmdDogMHJlbTtcbiAgICB9XG5cbiAgICAuc2lkZWJhciB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgbGVmdDogLTEwMCU7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuc2lkZWJhciB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgbGVmdDogLTEwMCU7XG4gICAgfVxuXG4gICAgLm1haW4ge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJyBtYWluLWFyZWEnO1xuICAgIH1cblxuICAgIC5uYXYtaW5uZXIge1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUI7O2NBRVU7QUFDZDs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7O0FBRUE7O0lBRUksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsaUJBQWlC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O1FBQ0ksZUFBZTtRQUNmLFdBQVc7SUFDZjs7SUFFQTtRQUNJLDBCQUEwQjtRQUMxQixpQ0FBaUM7SUFDckM7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ccmljb2xhZ2UrR3JvdGVzcXVlOm9wc3osd2dodEAxMC4uNDgsMjAwOzEwLi40OCwzMDA7MTAuLjQ4LDQwMDsxMC4uNDgsNTAwOzEwLi40OCw2MDA7MTAuLjQ4LDcwMDsxMC4uNDgsODAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBVYnVudHUsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLm1haW4tY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ1cHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgJ25hdmJhcidcXG4gICAgICAgICdtYWluJztcXG59XFxuXFxuLm5hdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDRlNDE7XFxuICAgIGdyaWQtYXJlYTogbmF2YmFyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjZjFmYWVlO1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxuICAgIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuLm5hdi1pbm5lciB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmxlZnQtbmF2LFxcbi5yaWdodC1uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XFxuICAgIGdhcDogMC4yNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6IDJyZW07XFxuICAgIGNvbG9yOiAjZjFmYWVlO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLm5hdiAuZmEtcGx1cyB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIHBhZGRpbmc6IDAuMjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XFxufVxcblxcbi5uYXYgLmZhLXBsdXM6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xcbn1cXG5cXG4ubmF2IC5mYS1wbHVzOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxufVxcblxcbi5sZWZ0LW5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZ2FwOiAxLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XFxufVxcblxcbi5sZWZ0LW5hdiAuZmEtaG91c2Uge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xcbn1cXG5cXG4ubGVmdC1uYXYgLmZhLWJhcnMsXFxuLmZhLWJhcnMtc3RhZ2dlcmVkIHtcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xcbn1cXG5cXG4ubmF2IC5mYS1zb2xpZCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNmb3JtOiAwLjJzIGVhc2U7XFxufVxcblxcbi5sZWZ0LW5hdiAuZmEtc29saWQ6aG92ZXIge1xcbiAgICBvcGFjaXR5OiA1MCU7XFxufVxcblxcbi5sZWZ0LW5hdiAuZmEtc29saWQ6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XFxuXFxuLmNlbnRlci1uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jZGF0ZUlucHV0IHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODgxNTc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgcGFkZGluZzogMC40cmVtIDFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5tYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjg1cHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnc2lkZWJhciBtYWluLWFyZWEnO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XFxufVxcblxcbi5tYWluLWFyZWEge1xcbiAgICBncmlkLWFyZWE6IG1haW4tYXJlYTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5tZW51IHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5tZW51IGxpIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAuNnJlbTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbnM6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcXG59XFxuXFxuLm1lbnUgbGkgZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubWVudSBsaSBpIHtcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcXG59XFxuXFxuLm5hdi1idXR0b25zLmFjdGl2ZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi50b2RheSBpIHtcXG4gICAgY29sb3I6IGNyaW1zb247XFxuICAgIG9wYWNpdHk6IDUwJTtcXG59XFxuXFxuLmluYm94IGkge1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLmFsbCBpIHtcXG4gICAgb3BhY2l0eTogNzAlO1xcbn1cXG5cXG4udXBjb21pbmcgaSB7XFxuICAgIGNvbG9yOiBibHVlO1xcbiAgICBvcGFjaXR5OiA1MCU7XFxufVxcblxcbi5pbXBvcnRhbnQgaSB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIG9wYWNpdHk6IDUwJTtcXG59XFxuXFxuLmxpc3RzIGkge1xcbiAgICBjb2xvcjogZGFya29yYW5nZTtcXG4gICAgb3BhY2l0eTogNjAlO1xcbn1cXG5cXG4ubWVudSAubGlzdHMge1xcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcXG59XFxuXFxuLmxpc3RzIC5mYS1jaGV2cm9uLXVwIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmctdG9wOiAwLjFyZW07XFxufVxcblxcbi5hY2NvcmRpb24ge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMnMgZWFzZS1vdXQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIG1heC1oZWlnaHQ6IDA7XFxuXFxufVxcblxcbi5jcmVhdGUtbmV3IGkge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAuMjVyZW07XFxuICAgIG9wYWNpdHk6IDY1JTtcXG59XFxuXFxuLmFjY29yZGlvbiAuY3JlYXRlLW5ldyB7XFxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xcbiAgICBwYWRkaW5nLXRvcDogLjVyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5hY2NvcmRpb24gLmNyZWF0ZS1uZXc6aG92ZXIge1xcbiAgICBjb2xvcjogIzNhNWE0MDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01JSk7XFxufVxcblxcbi5hY2NvcmRpb24gLm5ldy1saXN0cyBpIHtcXG4gICAgcGFkZGluZy1yaWdodDogLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogLjVyZW07XFxuICAgIG9wYWNpdHk6IDUwJTtcXG59XFxuXFxuLnRoZS1uZXctbGlzdHMge1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRoZS1uZXctbGlzdHMgZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRoZS1uZXctbGlzdHMgLnRyYXNoIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLnRoZS1uZXctbGlzdHMgLnRyYXNoIC5mYS10cmFzaC1jYW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiBncmV5O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRoZS1uZXctbGlzdHMgLnRyYXNoIC5mYS10cmFzaC1jYW46aG92ZXIge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbi5tYWluLWNoaWxkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLm1haW4tYXJlYSAubWFpbi1jaGlsZCAudGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICAgIGNvbG9yOiAjNDQ0O1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLm1haW4tYXJlYSAubWFpbi1jaGlsZCAudG9kby1zZWN0aW9uIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgcGFkZGluZzogMnJlbSAwcmVtO1xcbn1cXG5cXG4ub3ZlcmxheSxcXG4ub3ZlcmxheTIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgei1pbmRleDogNTAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5wb3B1cCxcXG4ucG9wdXAyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4ucG9wdXAgLmZhLXhtYXJrLFxcbi5wb3B1cDIgLmZhLXhtYXJrIHtcXG4gICAgdG9wOiAxcmVtO1xcbiAgICByaWdodDogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gICAgY29sb3I6ICMxMTE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnBvcHVwIC5wb3B1cC10b3AsXFxuLnBvcHVwMiAucG9wdXAtdG9wMiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4ucG9wdXAgLnBvcHVwLXRvcCBwIHtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbn1cXG5cXG4ucG9wdXAyIC5wb3B1cC10b3AyIHAge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxufVxcblxcbi5wb3B1cCAucG9wdXAtbWlkLFxcbi5wb3B1cDIgLnBvcHVwLW1pZCB7XFxuICAgIHBhZGRpbmc6IDByZW0gMS41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4ucG9wdXAgLnBvcHVwLW1pZCBwLFxcbi5wb3B1cDIgLnBvcHVwLW1pZCBwIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XFxufVxcblxcbi5wb3B1cCAucG9wdXAtbWlkIGlucHV0LFxcbi5wb3B1cDIgLnBvcHVwLW1pZCBpbnB1dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC4ycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG59XFxuXFxuLnBvcHVwIC5wb3B1cC1taWQgaW5wdXQ6aG92ZXIsXFxuLnBvcHVwMiAucG9wdXAtbWlkIGlucHV0OmhvdmVyIHtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzNhNWE0MDtcXG59XFxuXFxuLnBvcHVwIC5wb3B1cC1taWQgaW5wdXQ6Zm9jdXMsXFxuLnBvcHVwMiAucG9wdXAtbWlkIGlucHV0OmZvY3VzIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzNhNWE0MDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnBvcHVwIC5wb3B1cC1ib3QsXFxuLnBvcHVwMiAucG9wdXAtYm90MiB7XFxuICAgIHBhZGRpbmc6IDByZW0gMS41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBnYXA6IC41cmVtO1xcbn1cXG5cXG4ucG9wdXAgLnBvcHVwLWJvdCAjY2xvc2UsXFxuLnBvcHVwMiAucG9wdXAtYm90MiAjY2xvc2Uge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucG9wdXAgLnBvcHVwLWJvdCAjY2xvc2U6aG92ZXIsXFxuLnBvcHVwMiAucG9wdXAtYm90MiAjY2xvc2U6aG92ZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5wb3B1cCAucG9wdXAtYm90ICNhZGRpdGlvbixcXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0IHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIHBhZGRpbmc6IC41cmVtIDJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4ODE1NztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jZGVsZXRldGFzayB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBwYWRkaW5nOiAuNXJlbSAycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODgxNTc7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBvcHVwIC5wb3B1cC1ib3QgI2FkZGl0aW9uOmhvdmVyLFxcbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4ucG9wdXAgLnBvcHVwLWJvdCAjYWRkaXRpb246YWN0aXZlLFxcbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLnBvcHVwIC5mYS14bWFyazpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLnBvcHVwIC5mYS14bWFyazphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4ucG9wdXAgLnBvcHVwLWJvdCAjYWRkaXRpb246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4ucG9wdXAgLnBvcHVwLWJvdCAjYWRkaXRpb246YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLnBvcHVwMiAucG9wdXAtdG9wMiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi5wb3B1cDIgLnBvcHVwLXRvcDIgLmZhLXRyaWFuZ2xlLWV4Y2xhbWF0aW9uIHtcXG4gICAgZm9udC1zaXplOiA0LjVyZW07XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIG9wYWNpdHk6IDcwJTtcXG59XFxuXFxuLnBvcHVwMiAucG9wdXAtYm90MiB7XFxuICAgIHBhZGRpbmc6IDByZW0gMS41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBnYXA6IC41cmVtO1xcbn1cXG5cXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0IHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODgxNTc7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdDpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLnBvcHVwMiAuZmEteG1hcms6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5wb3B1cDIgLmZhLXhtYXJrOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0OmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5wb3B1cDIgLnBvcHVwLXRvcDIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4ucG9wdXAyIC5wb3B1cC10b3AyIC5mYS10cmlhbmdsZS1leGNsYW1hdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogNC41cmVtO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBvcGFjaXR5OiA3MCU7XFxufVxcblxcbi5wb3B1cDIgLnBvcHVwLWJvdDIge1xcbiAgICBwYWRkaW5nOiAwcmVtIDEuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgZ2FwOiAuNXJlbTtcXG59XFxuXFxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdCB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg4MTU3O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0OmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5wb3B1cDIgLmZhLXhtYXJrOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4ucG9wdXAyIC5mYS14bWFyazphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0OmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdDphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4ub3ZlcmxheTMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgei1pbmRleDogNTAwO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnBvcHVwMyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLnBvcHVwMyAuZmEteG1hcmsge1xcbiAgICB0b3A6IDFyZW07XFxuICAgIHJpZ2h0OiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgICBjb2xvcjogIzExMTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ucG9wdXAzIC5mYS14bWFyazpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLnBvcHVwMyAuZmEteG1hcms6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLnBvcHVwMyAucG9wdXAtdG9wMyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLnBvcHVwMyAucG9wdXAtdG9wMyBwIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5wb3B1cDMgLnBvcHVwLW1pZDMge1xcbiAgICBwYWRkaW5nOiAwcmVtIDEuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5taWQtbGVmdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1pZC1yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnBvcHVwMyAucG9wdXAtbWlkMyBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBwYWRkaW5nLXRvcDogMC4ycmVtO1xcbn1cXG5cXG4ucG9wdXAzIC5wb3B1cC1taWQzIHRleHRhcmVhIHtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHBhZGRpbmc6IDAuMjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4ucG9wdXAzIC5wb3B1cC1taWQzIHRleHRhcmVhOmZvY3VzIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzNhNWE0MDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnBvcHVwMyAucG9wdXAtbWlkMyBpbnB1dFt0eXBlPSd0ZXh0J10ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC4ycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG59XFxuXFxuLnBvcHVwMyAucG9wdXAtbWlkMyBzZWxlY3Qge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDAuMjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLnBvcHVwMyAucG9wdXAtbWlkMyAubWlkLXJpZ2h0ICN0YXNrLWRhdGUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDAuMjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnBvcHVwMyAucG9wdXAtbWlkMyBpbnB1dDpob3ZlciB7XFxuICAgIGJvcmRlcjogc29saWQgMXB4ICMzYTVhNDA7XFxufVxcblxcbi5wb3B1cDMgLnBvcHVwLW1pZDMgaW5wdXQ6Zm9jdXMge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjM2E1YTQwO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ucG9wdXAzIC5wb3B1cC1ib3QzIHtcXG4gICAgcGFkZGluZzogMHJlbSAxLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGdhcDogLjVyZW07XFxufVxcblxcbi5wb3B1cDMgLnBvcHVwLWJvdDMgI2Nsb3NlIHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBvcHVwMyAucG9wdXAtYm90MyAjY2xvc2U6aG92ZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5wb3B1cDMgLnBvcHVwLWJvdDMgI2FkZHRhc2sge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgcGFkZGluZzogLjVyZW0gMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg4MTU3O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNlZGl0dGFzayB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBwYWRkaW5nOiAuNXJlbSAycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODgxNTc7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBvcHVwMyAucG9wdXAtYm90MyAjYWRkdGFzazpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbi5wb3B1cDMgLnBvcHVwLWJvdDMgI2FkZHRhc2s6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5lYWNoLXRhc2stc2VjdGlvbi10b3Age1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stbGVmdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuICAgIGdhcDogLjVyZW07XFxufVxcblxcbi50YXNrLWxlZnQgI3Rhc2t0aXRsZSB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBtYXgtd2lkdGg6IDMwdnc7XFxufVxcblxcbi50YXNrLXJpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLnRhc2stcmlnaHQgLnRhc2staWNvbnMge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLXJpZ2h0IC50YXNrLWljb25zOmhvdmVyIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxufVxcblxcbi50YXNrLXJpZ2h0IC50YXNrLWljb25zOmFjdGl2ZSB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcXG59XFxuXFxuLmVhY2gtdGFzay1zZWN0aW9uLWJvdCB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxuICAgIG1hcmdpbi10b3A6IC0uNzVyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDk5JTtcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmVhY2gtdGFzay1zZWN0aW9uLWJvdCBwIHtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLmJvdC1yaWdodCxcXG4uYm90LWxlZnQge1xcbiAgICB3aWR0aDogNDklO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5yaWdodC10b3AsXFxuLnJpZ2h0LWJvdCxcXG4ubGVmdC10b3AsXFxuLmxlZnQtYm90IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAuNzVyZW07XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnJpZ2h0LXRvcCxcXG4ubGVmdC10b3Age1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5lYWNoLXRhc2stc2VjdGlvbi1ib3QgcC5ib2xkZW4ge1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ucmlnaHQtdG9wICNsb25nLFxcbi5sZWZ0LXRvcCAjbG9uZyB7XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmZhLWZsYWcge1xcbiAgICBvcGFjaXR5OiA3MCU7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAucG9wdXAge1xcbiAgICAgICAgbWF4LXdpZHRoOiA5MCU7XFxuICAgIH1cXG5cXG4gICAgI2RhdGVJbnB1dCB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5wb3B1cDIge1xcbiAgICAgICAgbWF4LXdpZHRoOiA5MCU7XFxuICAgIH1cXG5cXG4gICAgLnBvcHVwMyB7XFxuICAgICAgICBtYXgtd2lkdGg6IDkwJTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMzAwcHgpIHtcXG4gICAgLm1haW4tYXJlYSAubWFpbi1jaGlsZCAudG9kby1zZWN0aW9uIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC5tYWluLWFyZWEgLm1haW4tY2hpbGQge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgLm1haW4tYXJlYSAubWFpbi1jaGlsZCAudGl0bGUge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDByZW07XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDByZW07XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAgIC5tYWluLWFyZWEgLm1haW4tY2hpbGQgLnRvZG8tc2VjdGlvbiB7XFxuICAgICAgICB3aWR0aDogOTUlO1xcbiAgICB9XFxuXFxuICAgIC5tYWluLWFyZWEgLm1haW4tY2hpbGQge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgLm1haW4tYXJlYSAubWFpbi1jaGlsZCAudGl0bGUge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDByZW07XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDByZW07XFxuICAgIH1cXG5cXG4gICAgLnNpZGViYXIge1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgbGVmdDogLTEwMCU7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgIC5zaWRlYmFyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIGxlZnQ6IC0xMDAlO1xcbiAgICB9XFxuXFxuICAgIC5tYWluIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJyBtYWluLWFyZWEnO1xcbiAgICB9XFxuXFxuICAgIC5uYXYtaW5uZXIge1xcbiAgICAgICAgd2lkdGg6IDk1JTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlkID0gbnVsbCkge1xuICAgICAgICB0aGlzLmlkID0gaWQgfHwgdW5pcXVlSWQoKTtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUb2RvTGlzdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgaWQgPSBudWxsKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuaWQgPSBpZCB8fCB1bmlxdWVJZCgpO1xuICAgICAgICB0aGlzLnRvZG9zID0gW107XG4gICAgfVxuXG4gICAgYWRkVG9kbyh0b2RvKSB7XG4gICAgICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tSWQoKSB7XG4gICAgbGV0IGlkID0gJyc7XG4gICAgY29uc3QgZGlnaXRzID0gJzAxMjM0NTY3ODknO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkaWdpdHMubGVuZ3RoKTtcbiAgICAgICAgaWQgKz0gZGlnaXRzW3JhbmRvbUluZGV4XTtcbiAgICB9XG5cbiAgICByZXR1cm4gaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlxdWVJZCgpIHtcbiAgICBjb25zdCB1c2VkSWRzID0gZ2V0VXNlZElkcygpO1xuXG4gICAgaWYgKHVzZWRJZHMubGVuZ3RoID49IDEwMDAwMDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWxsIHBvc3NpYmxlIElEcyBoYXZlIGJlZW4gdXNlZC5cIik7XG4gICAgfVxuXG4gICAgbGV0IG5ld0lkO1xuICAgIGRvIHtcbiAgICAgICAgbmV3SWQgPSBnZW5lcmF0ZVJhbmRvbUlkKCk7XG4gICAgfSB3aGlsZSAodXNlZElkcy5pbmNsdWRlcyhuZXdJZCkpO1xuXG4gICAgdXNlZElkcy5wdXNoKG5ld0lkKTtcbiAgICBzYXZlVXNlZElkcyh1c2VkSWRzKTtcbiAgICByZXR1cm4gbmV3SWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VkSWRzKCkge1xuICAgIGNvbnN0IHVzZWRJZHNKU09OID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZWRJZHMnKTtcbiAgICByZXR1cm4gdXNlZElkc0pTT04gPyBKU09OLnBhcnNlKHVzZWRJZHNKU09OKSA6IFtdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVVzZWRJZHModXNlZElkcykge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VkSWRzJywgSlNPTi5zdHJpbmdpZnkodXNlZElkcykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9kb0xpc3RzKCkge1xuICAgIGNvbnN0IHRvZG9MaXN0c0pTT04gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb0xpc3RzJyk7XG4gICAgcmV0dXJuIHRvZG9MaXN0c0pTT04gPyBKU09OLnBhcnNlKHRvZG9MaXN0c0pTT04pIDogW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb2RvTGlzdEJ5SWQoaWQpIHtcbiAgICBjb25zdCB0b2RvTGlzdHMgPSBnZXRUb2RvTGlzdHMoKTtcbiAgICByZXR1cm4gdG9kb0xpc3RzLmZpbmQodG9kb0xpc3QgPT4gdG9kb0xpc3QuaWQgPT09IGlkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVUb2RvTGlzdHModG9kb0xpc3RzKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9MaXN0cycsIEpTT04uc3RyaW5naWZ5KHRvZG9MaXN0cykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZFRvZG9CeUlkKHRvZG9JZCkge1xuICAgIGNvbnN0IHRvZG9MaXN0cyA9IGdldFRvZG9MaXN0cygpO1xuXG4gICAgZm9yIChjb25zdCB0b2RvTGlzdCBvZiB0b2RvTGlzdHMpIHtcbiAgICAgICAgY29uc3QgZm91bmRUb2RvID0gdG9kb0xpc3QudG9kb3MuZmluZCh0b2RvID0+IHRvZG8uaWQgPT09IHRvZG9JZCk7XG4gICAgICAgIGlmIChmb3VuZFRvZG8pIHtcbiAgICAgICAgICAgIHJldHVybiBmb3VuZFRvZG87XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBjcmVhdGVXZWJwYWdlIGZyb20gJy4vd2VicGFnZSc7XG5cbmNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuY3JlYXRlV2VicGFnZSgpXG5cbiIsImltcG9ydCB7IFRvZG9MaXN0LCBUb2RvLCBzYXZlVG9kb0xpc3RzLCBnZXRUb2RvTGlzdHMsIGdldFRvZG9MaXN0QnlJZCwgZmluZFRvZG9CeUlkLCBnZXRVc2VkSWRzLCBzYXZlVXNlZElkcyB9IGZyb20gXCIuL2FwcFwiO1xuXG5mdW5jdGlvbiBjcmVhdGVNYWluKGlkKSB7XG4gICAgY29uc3QgbWFpbkFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1hcmVhJyk7XG4gICAgaWYgKG1haW5BcmVhKSB7XG4gICAgICAgIG1haW5BcmVhLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4tYXJlYScpO1xuXG4gICAgY29uc3QgbWFpbkNoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkNoaWxkLmNsYXNzTGlzdC5hZGQoJ21haW4tY2hpbGQnKTtcblxuICAgIGNvbnN0IHRvZG9MaXN0ID0gZ2V0VG9kb0xpc3RCeUlkKGlkKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcblxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGgxLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdGl0bGUnKTtcbiAgICBoMS50ZXh0Q29udGVudCA9ICcnO1xuICAgIGgxLnRleHRDb250ZW50ID0gdG9kb0xpc3QubmFtZTtcblxuICAgIHRpdGxlLmFwcGVuZENoaWxkKGgxKTtcblxuICAgIGNvbnN0IHRvZG9TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgndG9kby1zZWN0aW9uJyk7XG5cbiAgICBtYWluQ2hpbGQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIG1haW5DaGlsZC5hcHBlbmRDaGlsZCh0b2RvU2VjdGlvbik7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5DaGlsZCk7XG5cbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChtYWluKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRhc2tzKCkge1xuICAgIGNvbnN0IG5hdkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWJ1dHRvbnMnKTtcbiAgICBsZXQgYWN0aXZlTmF2QnV0dG9uID0gbnVsbDtcblxuICAgIGZvciAoY29uc3QgYnV0dG9uIG9mIG5hdkJ1dHRvbnMpIHtcbiAgICAgICAgaWYgKGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICBhY3RpdmVOYXZCdXR0b24gPSBidXR0b247XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRhdGFMaXN0SWQgPSBhY3RpdmVOYXZCdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWxpc3QtaWQnKTtcblxuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1zZWN0aW9uJyk7XG4gICAgdGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IHRvZG9MaXN0cyA9IGdldFRvZG9MaXN0cygpO1xuICAgIGxldCB0b2Rvc1RvUmVuZGVyID0gW107XG5cbiAgICBpZiAoZGF0YUxpc3RJZCA9PT0gJzExMTExMScpIHtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDAsIDEwKTtcbiAgICAgICAgdG9kb3NUb1JlbmRlciA9IHRvZG9MaXN0cy5mbGF0TWFwKHRvZG9MaXN0ID0+XG4gICAgICAgICAgICB0b2RvTGlzdC50b2Rvcy5maWx0ZXIodG9kbyA9PiB0b2RvLmR1ZURhdGUgPT09IHRvZGF5KVxuICAgICAgICApO1xuICAgIH0gZWxzZSBpZiAoZGF0YUxpc3RJZCA9PT0gJzIyMjIyMicpIHtcbiAgICAgICAgY29uc3QgbmV4dFdlZWsgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBuZXh0V2Vlay5zZXREYXRlKG5leHRXZWVrLmdldERhdGUoKSArIDcpO1xuICAgICAgICBjb25zdCBuZXh0V2Vla0Zvcm1hdHRlZCA9IG5leHRXZWVrLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDAsIDEwKTtcbiAgICAgICAgdG9kb3NUb1JlbmRlciA9IHRvZG9MaXN0cy5mbGF0TWFwKHRvZG9MaXN0ID0+XG4gICAgICAgICAgICB0b2RvTGlzdC50b2Rvcy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgdG9kbyA9PlxuICAgICAgICAgICAgICAgICAgICB0b2RvLmR1ZURhdGUgPD0gbmV4dFdlZWtGb3JtYXR0ZWQgJiYgdG9kby5kdWVEYXRlID49IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zdWJzdHIoMCwgMTApXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSBlbHNlIGlmIChkYXRhTGlzdElkID09PSAnMzMzMzMzJykge1xuICAgICAgICB0b2Rvc1RvUmVuZGVyID0gdG9kb0xpc3RzLmZsYXRNYXAodG9kb0xpc3QgPT4gdG9kb0xpc3QudG9kb3MpO1xuICAgIH0gZWxzZSBpZiAoZGF0YUxpc3RJZCA9PT0gJzQ0NDQ0NCcpIHtcbiAgICAgICAgdG9kb3NUb1JlbmRlciA9IHRvZG9MaXN0cy5mbGF0TWFwKHRvZG9MaXN0ID0+XG4gICAgICAgICAgICB0b2RvTGlzdC50b2Rvcy5maWx0ZXIodG9kbyA9PiB0b2RvLnByaW9yaXR5ID09PSAnaGlnaCcpXG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWREYXRhTGlzdElkID0gYWN0aXZlTmF2QnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJyk7XG4gICAgICAgIHRvZG9zVG9SZW5kZXIgPSBnZXRUb2RvTGlzdEJ5SWQoc2VsZWN0ZWREYXRhTGlzdElkKT8udG9kb3MgfHwgW107XG4gICAgfVxuXG4gICAgdG9kb3NUb1JlbmRlci5zb3J0KChhLCBiKSA9PiBuZXcgRGF0ZShhLmR1ZURhdGUpIC0gbmV3IERhdGUoYi5kdWVEYXRlKSk7XG5cbiAgICB0b2Rvc1RvUmVuZGVyLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgIGNyZWF0ZVRhc2sodG9kby50aXRsZSwgdG9kby5kdWVEYXRlLCB0b2RvLmRlc2NyaXB0aW9uLCB0b2RvLnByaW9yaXR5LCB0b2RvLmlkKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG1haW5DaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNoaWxkJyk7XG4gICAgY29uc3QgdGFza3MgPSBtYWluQ2hpbGQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZWFjaC10YXNrLXNlY3Rpb24tdG9wJyk7XG4gICAgZm9yIChjb25zdCB0YXNrIG9mIHRhc2tzKSB7XG4gICAgICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCB0YXNrUGFyZW50ID0gdGFzay5wYXJlbnROb2RlO1xuICAgICAgICAgICAgY29uc3QgdGFza2JvdCA9IHRhc2tQYXJlbnQucXVlcnlTZWxlY3RvcignLmVhY2gtdGFzay1zZWN0aW9uLWJvdCcpO1xuICAgICAgICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGFza2JvdCk7XG4gICAgICAgICAgICBpZiAoY29tcHV0ZWRTdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICB0YXNrYm90LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbXB1dGVkU3R5bGUuZGlzcGxheSA9PT0gJ2ZsZXgnKSB7XG4gICAgICAgICAgICAgICAgdGFza2JvdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGdlbmVyYXRlZEJpbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YXNrLWRlbGV0ZXInKTtcbiAgICBmb3IgKGNvbnN0IGJpbiBvZiBnZW5lcmF0ZWRCaW5zKSB7XG4gICAgICAgIGJpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIGNvbnN0IGxpc3RJZCA9IGJpbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1pZCcpO1xuICAgICAgICAgICAgZGVsZXRlVGFza1BvcHVwKCgpID0+IGRlbGV0ZVRhc2sobGlzdElkKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGVkaXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFzay1lZGl0b3InKTtcbiAgICBmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0cykge1xuICAgICAgICBlZGl0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICBjb25zdCB0b2RvID0gZmluZFRvZG9CeUlkKGVkaXRvci5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1pZCcpKTtcbiAgICAgICAgICAgIGVkaXRUYXNrUG9wdXAodG9kby50aXRsZSwgdG9kby5kZXNjcmlwdGlvbiwgdG9kby5kdWVEYXRlLCB0b2RvLnByaW9yaXR5LCB0b2RvLmlkKVxuICAgICAgICAgICAgY29uc3QgdG9kb0xpc3RzID0gZ2V0VG9kb0xpc3RzKCk7XG4gICAgICAgICAgICBjcmVhdGVMaXN0T3B0aW9ucyh0b2RvTGlzdHMsIGRhdGFMaXN0SWQpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHByaW9yaXR5SWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1wcmlvcml0eScpO1xuICAgIHByaW9yaXR5SWNvbnMuZm9yRWFjaChpY29uID0+IHtcbiAgICAgICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIGNvbnN0IHRvZG9JZCA9IGljb24uZ2V0QXR0cmlidXRlKCdkYXRhLWxpc3QtaWQnKTtcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nVG9kbyA9IGZpbmRUb2RvQnlJZCh0b2RvSWQpXG5cbiAgICAgICAgICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGV4aXN0aW5nVG9kby5wcmlvcml0eVxuXG4gICAgICAgICAgICBsZXQgbmV3UHJpb3JpdHk7XG4gICAgICAgICAgICBpZiAodG9kb1ByaW9yaXR5ID09PSAnbG93Jykge1xuICAgICAgICAgICAgICAgIG5ld1ByaW9yaXR5ID0gJ21lZGl1bSc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRvZG9Qcmlvcml0eSA9PT0gJ21lZGl1bScpIHtcbiAgICAgICAgICAgICAgICBuZXdQcmlvcml0eSA9ICdoaWdoJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodG9kb1ByaW9yaXR5ID09PSAnaGlnaCcpIHtcbiAgICAgICAgICAgICAgICBuZXdQcmlvcml0eSA9ICdsb3cnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZXhpc3RpbmdUb2RvKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlVGFzayhleGlzdGluZ1RvZG8uaWQpXG5cbiAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkVG9kbyA9IG5ldyBUb2RvKFxuICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1RvZG8udGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nVG9kby5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdUb2RvLmR1ZURhdGUsXG4gICAgICAgICAgICAgICAgICAgIG5ld1ByaW9yaXR5LFxuICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1RvZG8uaWRcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgYWRkVG9kb1RvVG9kb0xpc3QoZGF0YUxpc3RJZCwgdXBkYXRlZFRvZG8pO1xuICAgICAgICAgICAgICAgIHNhdmVUb2RvTGlzdHMoZ2V0VG9kb0xpc3RzKCkpO1xuXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIHJlbmRlclRhc2tzKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVByaW9yaXR5KCkge1xuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGFza1RpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGlkKSB7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLXNlY3Rpb24nKVxuXG4gICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0Rpdi5jbGFzc05hbWUgPSBcInRhc2stY29udGFpbmVyXCI7XG5cbiAgICBjb25zdCB0YXNrU2VjdGlvblRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza1NlY3Rpb25Ub3AuY2xhc3NOYW1lID0gXCJlYWNoLXRhc2stc2VjdGlvbi10b3BcIjtcblxuXG4gICAgY29uc3QgdGFza0xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tMZWZ0LmNsYXNzTmFtZSA9IFwidGFzay1sZWZ0XCI7XG5cbiAgICBjb25zdCB0YXNrQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGFza0NoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgdGFza0NoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICB9KVxuICAgIHRhc2tMZWZ0LmFwcGVuZENoaWxkKHRhc2tDaGVja2JveCk7XG5cbiAgICBjb25zdCB0YXNrVGl0bGVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGFza1RpdGxlUC5pZCA9IFwidGFza3RpdGxlXCI7XG4gICAgdGFza1RpdGxlUC50ZXh0Q29udGVudCA9IHRhc2tUaXRsZTtcbiAgICB0YXNrTGVmdC5hcHBlbmRDaGlsZCh0YXNrVGl0bGVQKTtcblxuICAgIHRhc2tTZWN0aW9uVG9wLmFwcGVuZENoaWxkKHRhc2tMZWZ0KTtcblxuICAgIGNvbnN0IHRhc2tSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza1JpZ2h0LmNsYXNzTmFtZSA9IFwidGFzay1yaWdodFwiO1xuXG4gICAgY29uc3QgZWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICBlZGl0SWNvbi5jbGFzc05hbWUgPSBcImZhLXJlZ3VsYXIgZmEtcGVuLXRvLXNxdWFyZSB0YXNrLWljb25zIHRhc2stZWRpdG9yXCI7XG4gICAgZWRpdEljb24uc2V0QXR0cmlidXRlKCdkYXRhLWxpc3QtaWQnLCBpZClcbiAgICBlZGl0SWNvbi50aXRsZSA9IFwiRWRpdCB0YXNrXCI7XG4gICAgdGFza1JpZ2h0LmFwcGVuZENoaWxkKGVkaXRJY29uKTtcblxuICAgIGNvbnN0IHByaW9yaXR5SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIHByaW9yaXR5SWNvbi5jbGFzc05hbWUgPSBcImZhLXNvbGlkIGZhLWZsYWcgdGFzay1pY29ucyB0YXNrLXByaW9yaXR5XCI7XG4gICAgcHJpb3JpdHlJY29uLnNldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJywgaWQpO1xuICAgIHByaW9yaXR5SWNvbi50aXRsZSA9IFwiQ2hhbmdlIHByaW9yaXR5XCI7XG4gICAgcHJpb3JpdHlJY29uLnN0eWxlLmNvbG9yID0gKHByaW9yaXR5ID09PSAnaGlnaCcpID8gJ3JlZCcgOiAocHJpb3JpdHkgPT09ICdtZWRpdW0nKSA/ICdkYXJrb3JhbmdlJyA6ICd0ZWFsJztcblxuICAgIHRhc2tSaWdodC5hcHBlbmRDaGlsZChwcmlvcml0eUljb24pO1xuXG4gICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIGRlbGV0ZUljb24uY2xhc3NOYW1lID0gXCJmYS1zb2xpZCBmYS10cmFzaC1jYW4gdGFzay1pY29ucyB0YXNrLWRlbGV0ZXJcIjtcbiAgICBkZWxldGVJY29uLnNldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJywgaWQpXG4gICAgZGVsZXRlSWNvbi50aXRsZSA9IFwiRGVsZXRlIHRhc2tcIjtcbiAgICB0YXNrUmlnaHQuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XG5cbiAgICB0YXNrU2VjdGlvblRvcC5hcHBlbmRDaGlsZCh0YXNrUmlnaHQpO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza1NlY3Rpb25Ub3ApO1xuXG4gICAgY29uc3QgdGFza1NlY3Rpb25Cb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tTZWN0aW9uQm90LmNsYXNzTmFtZSA9IFwiZWFjaC10YXNrLXNlY3Rpb24tYm90XCI7XG5cbiAgICBjb25zdCBib3RMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBib3RMZWZ0LmNsYXNzTmFtZSA9IFwiYm90LWxlZnRcIjtcblxuICAgIGNvbnN0IGxlZnRUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxlZnRUb3AuY2xhc3NOYW1lID0gXCJsZWZ0LXRvcFwiO1xuXG4gICAgY29uc3QgdGl0bGVCb2xkZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0aXRsZUJvbGRlbi5jbGFzc05hbWUgPSBcImJvbGRlblwiO1xuICAgIHRpdGxlQm9sZGVuLnRleHRDb250ZW50ID0gXCJUaXRsZTpcIjtcbiAgICBsZWZ0VG9wLmFwcGVuZENoaWxkKHRpdGxlQm9sZGVuKTtcblxuICAgIGNvbnN0IHRpdGxlUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRpdGxlUC50ZXh0Q29udGVudCA9IHRhc2tUaXRsZTtcbiAgICB0aXRsZVAuc2V0QXR0cmlidXRlKCdpZCcsICdsb25nJylcbiAgICBsZWZ0VG9wLmFwcGVuZENoaWxkKHRpdGxlUCk7XG5cbiAgICBib3RMZWZ0LmFwcGVuZENoaWxkKGxlZnRUb3ApO1xuXG4gICAgY29uc3QgbGVmdEJvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGVmdEJvdC5jbGFzc05hbWUgPSBcImxlZnQtYm90XCI7XG5cbiAgICBjb25zdCBkdWVEYXRlQm9sZGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZHVlRGF0ZUJvbGRlbi5jbGFzc05hbWUgPSBcImJvbGRlblwiO1xuICAgIGR1ZURhdGVCb2xkZW4udGV4dENvbnRlbnQgPSBcIkR1ZSBkYXRlOlwiO1xuICAgIGxlZnRCb3QuYXBwZW5kQ2hpbGQoZHVlRGF0ZUJvbGRlbik7XG5cbiAgICBjb25zdCBkdWVEYXRlUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGR1ZURhdGVQLnRleHRDb250ZW50ID0gZHVlRGF0ZTtcbiAgICBsZWZ0Qm90LmFwcGVuZENoaWxkKGR1ZURhdGVQKTtcblxuICAgIGJvdExlZnQuYXBwZW5kQ2hpbGQobGVmdEJvdCk7XG4gICAgdGFza1NlY3Rpb25Cb3QuYXBwZW5kQ2hpbGQoYm90TGVmdCk7XG5cbiAgICBjb25zdCBib3RSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm90UmlnaHQuY2xhc3NOYW1lID0gXCJib3QtcmlnaHRcIjtcblxuICAgIGNvbnN0IHJpZ2h0VG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByaWdodFRvcC5jbGFzc05hbWUgPSBcInJpZ2h0LXRvcFwiO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25Cb2xkZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkZXNjcmlwdGlvbkJvbGRlbi5jbGFzc05hbWUgPSBcImJvbGRlblwiO1xuICAgIGRlc2NyaXB0aW9uQm9sZGVuLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjpcIjtcbiAgICByaWdodFRvcC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkJvbGRlbik7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvblAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkZXNjcmlwdGlvblAudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgICBkZXNjcmlwdGlvblAuc2V0QXR0cmlidXRlKCdpZCcsICdsb25nJylcbiAgICByaWdodFRvcC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblApO1xuXG4gICAgYm90UmlnaHQuYXBwZW5kQ2hpbGQocmlnaHRUb3ApO1xuXG4gICAgY29uc3QgcmlnaHRCb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJpZ2h0Qm90LmNsYXNzTmFtZSA9IFwicmlnaHQtYm90XCI7XG5cbiAgICBjb25zdCBwcmlvcml0eUJvbGRlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByaW9yaXR5Qm9sZGVuLmNsYXNzTmFtZSA9IFwiYm9sZGVuXCI7XG4gICAgcHJpb3JpdHlCb2xkZW4udGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OlwiO1xuICAgIHJpZ2h0Qm90LmFwcGVuZENoaWxkKHByaW9yaXR5Qm9sZGVuKTtcblxuICAgIGNvbnN0IHByaW9yaXR5UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByaW9yaXR5UC50ZXh0Q29udGVudCA9IHByaW9yaXR5O1xuICAgIHJpZ2h0Qm90LmFwcGVuZENoaWxkKHByaW9yaXR5UCk7XG5cbiAgICBib3RSaWdodC5hcHBlbmRDaGlsZChyaWdodEJvdCk7XG4gICAgdGFza1NlY3Rpb25Cb3QuYXBwZW5kQ2hpbGQoYm90UmlnaHQpO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza1NlY3Rpb25Cb3QpO1xuXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbn1cblxuZnVuY3Rpb24gZWRpdFRhc2tQb3B1cCh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBpZCkge1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvdmVybGF5LmNsYXNzTmFtZSA9ICdvdmVybGF5Myc7XG5cbiAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcHVwLmNsYXNzTmFtZSA9ICdwb3B1cDMnO1xuXG4gICAgY29uc3QgcG9wdXBUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3B1cFRvcC5jbGFzc05hbWUgPSAncG9wdXAtdG9wMyc7XG5cbiAgICBjb25zdCB0aXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGl0bGVUZXh0LnRleHRDb250ZW50ID0gJ0VkaXQgVGFzayc7XG4gICAgcG9wdXBUb3AuYXBwZW5kQ2hpbGQodGl0bGVUZXh0KTtcblxuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIGNsb3NlQnV0dG9uLmNsYXNzTmFtZSA9ICdmYS1zb2xpZCBmYS14bWFyayc7XG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU92ZXJsYXkpO1xuICAgIHBvcHVwVG9wLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcblxuICAgIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwVG9wKTtcblxuICAgIGNvbnN0IHBvcHVwTWlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9wdXBNaWQuY2xhc3NOYW1lID0gJ3BvcHVwLW1pZDMnO1xuXG4gICAgY29uc3QgbWlkTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1pZExlZnQuY2xhc3NOYW1lID0gJ21pZC1sZWZ0JztcblxuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAnVGl0bGU6JztcbiAgICBtaWRMZWZ0LmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGl0bGVJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIHRpdGxlSW5wdXQubWF4TGVuZ3RoID0gNjA7XG4gICAgdGl0bGVJbnB1dC5pZCA9ICd0YXNrLXRpdGxlJztcbiAgICB0aXRsZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICB0aXRsZUlucHV0LnZhbHVlID0gdGl0bGU7XG4gICAgbWlkTGVmdC5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICAgIGNvbnN0IHRpdGxlQWxlcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGl0bGVBbGVydC5jbGFzc0xpc3QuYWRkKCd0aXRsZS1hbGVydCcpO1xuICAgIHRpdGxlQWxlcnQudGV4dENvbnRlbnQgPSAnVGl0bGUgaXMgcmVxdWlyZWQuJztcbiAgICB0aXRsZUFsZXJ0LnN0eWxlLmNvbG9yID0gJ3JlZCc7XG4gICAgdGl0bGVBbGVydC5zdHlsZS5tYXJnaW5Ub3AgPSAnJztcbiAgICB0aXRsZUFsZXJ0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgbWlkTGVmdC5hcHBlbmRDaGlsZCh0aXRsZUFsZXJ0KVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbjonO1xuICAgIG1pZExlZnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvblRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBkZXNjcmlwdGlvblRleHRhcmVhLmlkID0gJ2Rlc2NyaXB0aW9uJztcbiAgICBkZXNjcmlwdGlvblRleHRhcmVhLmNvbHMgPSAzMDtcbiAgICBkZXNjcmlwdGlvblRleHRhcmVhLnJvd3MgPSA0O1xuICAgIGRlc2NyaXB0aW9uVGV4dGFyZWEubWF4TGVuZ3RoID0gMTgwO1xuICAgIGRlc2NyaXB0aW9uVGV4dGFyZWEudmFsdWUgPSBkZXNjcmlwdGlvbjtcbiAgICBtaWRMZWZ0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGV4dGFyZWEpO1xuXG4gICAgcG9wdXBNaWQuYXBwZW5kQ2hpbGQobWlkTGVmdCk7XG5cbiAgICBjb25zdCBtaWRSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1pZFJpZ2h0LmNsYXNzTmFtZSA9ICdtaWQtcmlnaHQnO1xuXG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIGRhdGU6JztcbiAgICBtaWRSaWdodC5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuXG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgICBkYXRlSW5wdXQuaWQgPSAndGFzay1kYXRlJztcbiAgICBkYXRlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIGRhdGVJbnB1dC52YWx1ZSA9IGRhdGU7XG4gICAgbWlkUmlnaHQuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblxuICAgIGNvbnN0IGRhdGVBbGVydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkYXRlQWxlcnQuY2xhc3NMaXN0LmFkZCgnZGF0ZS1hbGVydCcpO1xuICAgIGRhdGVBbGVydC50ZXh0Q29udGVudCA9ICdEYXRlIGlzIHJlcXVpcmVkLic7XG4gICAgZGF0ZUFsZXJ0LnN0eWxlLmNvbG9yID0gJ3JlZCc7XG4gICAgZGF0ZUFsZXJ0LnN0eWxlLm1hcmdpblRvcCA9ICcnO1xuICAgIGRhdGVBbGVydC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgbWlkUmlnaHQuYXBwZW5kQ2hpbGQoZGF0ZUFsZXJ0KTtcblxuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6JztcbiAgICBtaWRSaWdodC5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcblxuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgcHJpb3JpdHlTZWxlY3QuaWQgPSAncHJpb3JpdHknO1xuICAgIHByaW9yaXR5U2VsZWN0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBbJ0xvdycsICdNZWRpdW0nLCAnSGlnaCddLmZvckVhY2gocHJpb3JpdHlUZXh0ID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHByaW9yaXR5VGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcmlvcml0eVRleHQ7XG4gICAgICAgIGlmIChwcmlvcml0eVRleHQudG9Mb3dlckNhc2UoKSA9PT0gcHJpb3JpdHkpIHtcbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KTtcbiAgICBtaWRSaWdodC5hcHBlbmRDaGlsZChwcmlvcml0eVNlbGVjdCk7XG5cbiAgICBjb25zdCBwcmlvcml0eUFsZXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHByaW9yaXR5QWxlcnQuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktYWxlcnQnKTtcbiAgICBwcmlvcml0eUFsZXJ0LnRleHRDb250ZW50ID0gJ1ByaW9yaXR5IGlzIHJlcXVpcmVkLic7XG4gICAgcHJpb3JpdHlBbGVydC5zdHlsZS5jb2xvciA9ICdyZWQnO1xuICAgIHByaW9yaXR5QWxlcnQuc3R5bGUubWFyZ2luVG9wID0gJyc7XG4gICAgcHJpb3JpdHlBbGVydC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgbWlkUmlnaHQuYXBwZW5kQ2hpbGQocHJpb3JpdHlBbGVydCk7XG5cbiAgICBjb25zdCBsaXN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxpc3RMYWJlbC50ZXh0Q29udGVudCA9ICdMaXN0Oic7XG4gICAgbWlkUmlnaHQuYXBwZW5kQ2hpbGQobGlzdExhYmVsKTtcblxuICAgIGNvbnN0IGxpc3RTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBsaXN0U2VsZWN0LmlkID0gJ3RoZWxpc3QnO1xuICAgIGxpc3RTZWxlY3QucmVxdWlyZWQgPSB0cnVlO1xuXG4gICAgbWlkUmlnaHQuYXBwZW5kQ2hpbGQobGlzdFNlbGVjdCk7XG5cbiAgICBjb25zdCBsaXN0QWxlcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbGlzdEFsZXJ0LmNsYXNzTGlzdC5hZGQoJ2xpc3QtYWxlcnQnKTtcbiAgICBsaXN0QWxlcnQudGV4dENvbnRlbnQgPSAnTGlzdCBpcyByZXF1aXJlZC4nO1xuICAgIGxpc3RBbGVydC5zdHlsZS5jb2xvciA9ICdyZWQnO1xuICAgIGxpc3RBbGVydC5zdHlsZS5tYXJnaW5Ub3AgPSAnJztcbiAgICBsaXN0QWxlcnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIG1pZFJpZ2h0LmFwcGVuZENoaWxkKGxpc3RBbGVydCk7XG5cbiAgICBwb3B1cE1pZC5hcHBlbmRDaGlsZChtaWRSaWdodCk7XG5cbiAgICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cE1pZCk7XG5cbiAgICBjb25zdCBwb3B1cEJvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcHVwQm90LmNsYXNzTmFtZSA9ICdwb3B1cC1ib3QzJztcblxuICAgIGNvbnN0IHRleHRDbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRleHRDbG9zZUJ1dHRvbi5pZCA9ICdjbG9zZSc7XG4gICAgdGV4dENsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gJ0Nsb3NlJztcbiAgICB0ZXh0Q2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU92ZXJsYXkpO1xuICAgIHBvcHVwQm90LmFwcGVuZENoaWxkKHRleHRDbG9zZUJ1dHRvbik7XG5cbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkVGFza0J1dHRvbi5pZCA9ICdlZGl0dGFzayc7XG4gICAgYWRkVGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdFZGl0IFRhc2snO1xuICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhbGlkYXRlQW5kRWRpdFRhc2soaWQpO1xuICAgIH0pXG4gICAgcG9wdXBCb3QuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XG5cbiAgICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cEJvdCk7XG5cbiAgICBvdmVybGF5LmFwcGVuZENoaWxkKHBvcHVwKTtcblxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChvdmVybGF5KTtcbn1cblxuZnVuY3Rpb24gY2xvc2VPdmVybGF5KCkge1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheTMnKTtcbiAgICBvdmVybGF5LnJlbW92ZSgpXG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2tQb3B1cChjb25maXJtQ2FsbGJhY2spIHtcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3ZlcmxheS5jbGFzc05hbWUgPSAnb3ZlcmxheTInO1xuXG4gICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3B1cC5jbGFzc05hbWUgPSAncG9wdXAyJztcblxuICAgIGNvbnN0IHBvcHVwVG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9wdXBUb3AuY2xhc3NOYW1lID0gJ3BvcHVwLXRvcDInO1xuXG4gICAgY29uc3QgdHJpYW5nbGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIHRyaWFuZ2xlSWNvbi5jbGFzc05hbWUgPSAnZmEtc29saWQgZmEtdHJpYW5nbGUtZXhjbGFtYXRpb24nO1xuXG4gICAgY29uc3QgcG9wdXBNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBvcHVwTWVzc2FnZS50ZXh0Q29udGVudCA9ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgdGFzaz8nO1xuXG4gICAgY29uc3QgcG9wdXBCb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3B1cEJvdC5jbGFzc05hbWUgPSAncG9wdXAtYm90Mic7XG5cbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNsb3NlQnV0dG9uLmlkID0gJ2Nsb3NlJztcbiAgICBjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDbG9zZSc7XG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsb3NlT3ZlcmxheTIoKVxuICAgIH0pO1xuXG4gICAgY29uc3QgY29uZmlybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbmZpcm1CdXR0b24uaWQgPSAnZGVsZXRldGFzayc7XG4gICAgY29uZmlybUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb25maXJtJztcbiAgICBjb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25maXJtQ2FsbGJhY2soKTtcbiAgICAgICAgY2xvc2VPdmVybGF5MigpO1xuICAgIH0pO1xuXG4gICAgcG9wdXBUb3AuYXBwZW5kQ2hpbGQodHJpYW5nbGVJY29uKTtcbiAgICBwb3B1cFRvcC5hcHBlbmRDaGlsZChwb3B1cE1lc3NhZ2UpO1xuXG4gICAgcG9wdXBCb3QuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuICAgIHBvcHVwQm90LmFwcGVuZENoaWxkKGNvbmZpcm1CdXR0b24pO1xuXG4gICAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBUb3ApO1xuICAgIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwQm90KTtcblxuICAgIG92ZXJsYXkuYXBwZW5kQ2hpbGQocG9wdXApO1xuXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrKHRvZG9JZCkge1xuICAgIGNvbnN0IHRvZG9MaXN0cyA9IGdldFRvZG9MaXN0cygpO1xuICAgIGNvbnN0IHVzZWRJZHMgPSBnZXRVc2VkSWRzKCk7XG5cbiAgICBmb3IgKGNvbnN0IHRvZG9MaXN0IG9mIHRvZG9MaXN0cykge1xuICAgICAgICBjb25zdCB0b2RvSW5kZXggPSB0b2RvTGlzdC50b2Rvcy5maW5kSW5kZXgodG9kbyA9PiB0b2RvLmlkID09PSB0b2RvSWQpO1xuICAgICAgICBpZiAodG9kb0luZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdG9kb0xpc3QudG9kb3Muc3BsaWNlKHRvZG9JbmRleCwgMSk7XG4gICAgICAgICAgICBzYXZlVG9kb0xpc3RzKHRvZG9MaXN0cyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGlkSW5kZXggPSB1c2VkSWRzLmluZGV4T2YodG9kb0lkKTtcbiAgICAgICAgICAgIGlmIChpZEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHVzZWRJZHMuc3BsaWNlKGlkSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHNhdmVVc2VkSWRzKHVzZWRJZHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZW5kZXJUYXNrcygpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zb2xlLmVycm9yKCdUb2RvIG5vdCBmb3VuZCcpO1xufVxuXG5mdW5jdGlvbiBjbG9zZU92ZXJsYXkyKCkge1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheTInKTtcbiAgICBvdmVybGF5LnJlbW92ZSgpXG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQW5kRWRpdFRhc2soaWQpIHtcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stdGl0bGUnKTtcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kYXRlJyk7XG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKTtcbiAgICBjb25zdCBsaXN0U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoZWxpc3QnKTtcblxuICAgIGNvbnN0IHRpdGxlQWxlcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUtYWxlcnQnKTtcbiAgICBjb25zdCBkYXRlQWxlcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZS1hbGVydCcpO1xuICAgIGNvbnN0IHByaW9yaXR5QWxlcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHktYWxlcnQnKTtcbiAgICBjb25zdCBsaXN0QWxlcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1hbGVydCcpO1xuXG4gICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xuXG4gICAgaWYgKHRpdGxlSW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgIHRpdGxlQWxlcnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aXRsZUFsZXJ0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgaWYgKGRhdGVJbnB1dC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgZGF0ZUFsZXJ0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGF0ZUFsZXJ0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgaWYgKHByaW9yaXR5U2VsZWN0LnZhbHVlID09PSAnJykge1xuICAgICAgICBwcmlvcml0eUFsZXJ0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJpb3JpdHlBbGVydC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIGlmIChsaXN0U2VsZWN0LnZhbHVlID09PSAnJykge1xuICAgICAgICBsaXN0QWxlcnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsaXN0QWxlcnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG5cbiAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICBjb25zdCBzZWxlY3RlZFZhbHVlID0gbGlzdFNlbGVjdC52YWx1ZTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKTtcblxuICAgICAgICBkZWxldGVUYXNrKGlkKTtcblxuICAgICAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG8odGl0bGVJbnB1dC52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUsIGRhdGVJbnB1dC52YWx1ZSwgcHJpb3JpdHlTZWxlY3QudmFsdWUsIGlkKTtcblxuICAgICAgICBhZGRUb2RvVG9Ub2RvTGlzdChzZWxlY3RlZFZhbHVlLCBuZXdUb2RvKTtcbiAgICAgICAgO1xuICAgICAgICByZW5kZXJUYXNrcygpXG4gICAgICAgIGNsb3NlT3ZlcmxheSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlzdE9wdGlvbnModG9kb0xpc3RzLCBsaXN0dmFsdWUpIHtcbiAgICBjb25zdCBsaXN0U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoZWxpc3QnKTtcblxuICAgIGxpc3RTZWxlY3QuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgaWdub3JlSWRzID0gWycxMTExMTEnLCAnMjIyMjIyJywgJzMzMzMzMycsICc0NDQ0NDQnXVxuXG5cbiAgICB0b2RvTGlzdHMuZm9yRWFjaChsaXN0ID0+IHtcbiAgICAgICAgaWYgKCFpZ25vcmVJZHMuaW5jbHVkZXMobGlzdC5pZCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIGxpc3RPcHRpb24udmFsdWUgPSBsaXN0LmlkO1xuICAgICAgICAgICAgbGlzdE9wdGlvbi50ZXh0Q29udGVudCA9IGxpc3QubmFtZTtcbiAgICAgICAgICAgIGxpc3RTZWxlY3QuYXBwZW5kQ2hpbGQobGlzdE9wdGlvbik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGxpc3RTZWxlY3QudmFsdWUgPSBsaXN0dmFsdWU7XG59XG5cbmZ1bmN0aW9uIGFkZFRvZG9Ub1RvZG9MaXN0KHNlbGVjdGVkVmFsdWUsIG5ld1RvZG8pIHtcbiAgICBjb25zdCBvcmlnaW5hbFRvZG9MaXN0ID0gZ2V0VG9kb0xpc3RCeUlkKHNlbGVjdGVkVmFsdWUpO1xuXG4gICAgaWYgKCFvcmlnaW5hbFRvZG9MaXN0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVG9kb0xpc3Qgbm90IGZvdW5kIGZvciB0aGUgc2VsZWN0ZWQgdmFsdWUuXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlZFRvZG9MaXN0ID0gbmV3IFRvZG9MaXN0KG9yaWdpbmFsVG9kb0xpc3QubmFtZSwgb3JpZ2luYWxUb2RvTGlzdC5pZCk7XG5cbiAgICB1cGRhdGVkVG9kb0xpc3QudG9kb3MgPSBbLi4ub3JpZ2luYWxUb2RvTGlzdC50b2RvcywgbmV3VG9kb107XG5cbiAgICBjb25zdCB0b2RvTGlzdHMgPSBnZXRUb2RvTGlzdHMoKTtcbiAgICBjb25zdCB1cGRhdGVkVG9kb0xpc3RzID0gdG9kb0xpc3RzLm1hcCh0b2RvTGlzdCA9PlxuICAgICAgICB0b2RvTGlzdC5pZCA9PT0gc2VsZWN0ZWRWYWx1ZSA/IHVwZGF0ZWRUb2RvTGlzdCA6IHRvZG9MaXN0XG4gICAgKTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvTGlzdHMnLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkVG9kb0xpc3RzKSk7XG5cbiAgICByZW5kZXJUYXNrcygpXG4gICAgICAgIDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdGlhbGlzZU1haW4oaWQpIHtcbiAgICBjcmVhdGVNYWluKGlkKTtcbiAgICByZW5kZXJUYXNrcygpXG59IiwiaW1wb3J0IHsgVG9kb0xpc3QsIGdldFRvZG9MaXN0cywgc2F2ZVRvZG9MaXN0cywgZ2V0VXNlZElkcywgc2F2ZVVzZWRJZHMgfSBmcm9tIFwiLi9hcHAuanNcIlxuaW1wb3J0IGluaXRpYWxpc2VNYWluLCB7IHJlbmRlclRhc2tzIH0gZnJvbSBcIi4vbWFpbi5qc1wiXG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGViYXIoKSB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xuXG4gICAgY29uc3Qgc2lkZWJhck1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlYmFyTWVudS5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLW1lbnUnKTtcblxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuXG4gICAgY29uc3QgaW5ib3ggPSBjcmVhdGVTaWRlYmFySXRlbSgnaW5ib3gnLCAnZmEtaW5ib3gnLCAnSW5ib3gnKTtcbiAgICBpbmJveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1pZCcsICcwMDAwMDAnKVxuICAgIGluYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgICAgIHNldEFjdGl2ZUJ1dHRvbihpbmJveCk7XG4gICAgICAgIGluaXRpYWxpc2VNYWluKGluYm94LmdldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJykpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdG9kYXkgPSBjcmVhdGVTaWRlYmFySXRlbSgndG9kYXknLCAnZmEtY2FsZW5kYXItZGF5JywgJ1RvZGF5Jyk7XG4gICAgdG9kYXkuc2V0QXR0cmlidXRlKCdkYXRhLWxpc3QtaWQnLCAnMTExMTExJylcbiAgICB0b2RheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xuICAgICAgICBzZXRBY3RpdmVCdXR0b24odG9kYXkpO1xuICAgICAgICBpbml0aWFsaXNlTWFpbih0b2RheS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1pZCcpKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHVwY29taW5nID0gY3JlYXRlU2lkZWJhckl0ZW0oJ3VwY29taW5nJywgJ2ZhLWNhbGVuZGFyLXdlZWsnLCAnVXBjb21pbmcnKTtcbiAgICB1cGNvbWluZy5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1pZCcsICcyMjIyMjInKVxuICAgIHVwY29taW5nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgICAgIHNldEFjdGl2ZUJ1dHRvbih1cGNvbWluZyk7XG4gICAgICAgIGluaXRpYWxpc2VNYWluKHVwY29taW5nLmdldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJykpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYWxsID0gY3JlYXRlU2lkZWJhckl0ZW0oJ2FsbCcsICdmYS1jYWxlbmRhci1kYXlzJywgJ0FsbCcpO1xuICAgIGFsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1pZCcsICczMzMzMzMnKVxuICAgIGFsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xuICAgICAgICBzZXRBY3RpdmVCdXR0b24oYWxsKTtcbiAgICAgICAgaW5pdGlhbGlzZU1haW4oYWxsLmdldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJykpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgaW1wb3J0YW50ID0gY3JlYXRlU2lkZWJhckl0ZW0oJ2ltcG9ydGFudCcsICdmYS1zdGFyJywgJ0ltcG9ydGFudCcpO1xuICAgIGltcG9ydGFudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1pZCcsICc0NDQ0NDQnKVxuICAgIGltcG9ydGFudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xuICAgICAgICBzZXRBY3RpdmVCdXR0b24oaW1wb3J0YW50KTtcbiAgICAgICAgaW5pdGlhbGlzZU1haW4oaW1wb3J0YW50LmdldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJykpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbGlzdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpc3RzLmNsYXNzTGlzdC5hZGQoJ2xpc3RzJyk7XG4gICAgbGlzdHMuaW5uZXJIVE1MID0gJzxkaXY+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1saXN0LWNoZWNrXCI+PC9pPiA8cD5MaXN0czwvcD48L2Rpdj4gPGRpdj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNoZXZyb24tdXBcIj48L2k+PC9kaXY+JztcbiAgICBsaXN0cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbGlzdENsaWNrKTtcblxuICAgIGNvbnN0IGFjY29yZGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFjY29yZGlvbi5jbGFzc0xpc3QuYWRkKCdhY2NvcmRpb24nKTtcblxuICAgIGNvbnN0IG5ld0xpc3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3TGlzdHMuY2xhc3NMaXN0LmFkZCgnbmV3LWxpc3RzJyk7XG5cbiAgICBjb25zdCBjcmVhdGVOZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjcmVhdGVOZXcuY2xhc3NMaXN0LmFkZCgnY3JlYXRlLW5ldycpO1xuICAgIGNyZWF0ZU5ldy5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1wbHVzXCI+PC9pPiBOZXcgTGlzdCdcbiAgICBjcmVhdGVOZXcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG5ld0xpc3RQb3B1cCgpO1xuICAgIH0pO1xuXG4gICAgYWNjb3JkaW9uLmFwcGVuZENoaWxkKG5ld0xpc3RzKTtcbiAgICBhY2NvcmRpb24uYXBwZW5kQ2hpbGQoY3JlYXRlTmV3KTtcblxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoaW5ib3gpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQodG9kYXkpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQodXBjb21pbmcpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoYWxsKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKGltcG9ydGFudCk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChsaXN0cyk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChhY2NvcmRpb24pXG5cbiAgICBzaWRlYmFyTWVudS5hcHBlbmRDaGlsZChtZW51KTtcblxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoc2lkZWJhck1lbnUpO1xuXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChzaWRlYmFyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2lkZWJhckl0ZW0oY2xhc3NOYW1lLCBpY29uQ2xhc3MsIHRleHQpIHtcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lLCAnbmF2LWJ1dHRvbnMnKTtcblxuICAgIGNvbnN0IGl0ZW1Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbUNvbnRlbnQuaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtc29saWQgJHtpY29uQ2xhc3N9XCI+PC9pPiA8cD4ke3RleHR9PC9wPmA7XG5cbiAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1Db250ZW50KTtcblxuICAgIHJldHVybiBpdGVtO1xufVxuXG5mdW5jdGlvbiBuZXdMaXN0UG9wdXAoKSB7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheScpO1xuXG4gICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKCdwb3B1cCcpO1xuXG4gICAgY29uc3QgcG9wdXBUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3B1cFRvcC5jbGFzc0xpc3QuYWRkKCdwb3B1cC10b3AnKTtcblxuICAgIGNvbnN0IHRpdGxlUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRpdGxlUGFyYWdyYXBoLnRleHRDb250ZW50ID0gJ05ldyBMaXN0JztcblxuICAgIGNvbnN0IGNsb3NlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBjbG9zZUljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEteG1hcmsnKTtcbiAgICBjbG9zZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU92ZXJsYXkpO1xuXG4gICAgcG9wdXBUb3AuYXBwZW5kQ2hpbGQodGl0bGVQYXJhZ3JhcGgpO1xuICAgIHBvcHVwVG9wLmFwcGVuZENoaWxkKGNsb3NlSWNvbik7XG5cbiAgICBjb25zdCBwb3B1cE1pZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcHVwTWlkLmNsYXNzTGlzdC5hZGQoJ3BvcHVwLW1pZCcpO1xuXG4gICAgY29uc3QgaW5wdXRQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaW5wdXRQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnTmFtZSAobWF4IDEwIGNoYXJhY3RlcnMpOic7XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICduZXdsaXN0aW5wdXQnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgJzEwJyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsIHRydWUpO1xuXG4gICAgY29uc3QgYWxlcnRQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWxlcnRQYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgnYWxlcnQnKTtcbiAgICBhbGVydFBhcmFncmFwaC50ZXh0Q29udGVudCA9ICdMaXN0IG5hbWUgaXMgcmVxdWlyZWQuJztcbiAgICBhbGVydFBhcmFncmFwaC5zdHlsZS5jb2xvciA9ICdyZWQnO1xuICAgIGFsZXJ0UGFyYWdyYXBoLnN0eWxlLm1hcmdpblRvcCA9ICcuNXJlbSc7XG4gICAgYWxlcnRQYXJhZ3JhcGguc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIHBvcHVwTWlkLmFwcGVuZENoaWxkKGlucHV0UGFyYWdyYXBoKTtcbiAgICBwb3B1cE1pZC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgcG9wdXBNaWQuYXBwZW5kQ2hpbGQoYWxlcnRQYXJhZ3JhcGgpO1xuXG4gICAgY29uc3QgcG9wdXBCb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3B1cEJvdC5jbGFzc0xpc3QuYWRkKCdwb3B1cC1ib3QnKTtcblxuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2xvc2VCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdjbG9zZScpO1xuICAgIGNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gJ0Nsb3NlJztcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlT3ZlcmxheSlcblxuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZGl0aW9uJyk7XG4gICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBMaXN0JztcbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGROZXdMaXN0KVxuXG4gICAgcG9wdXBCb3QuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuICAgIHBvcHVwQm90LmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG5cbiAgICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cFRvcCk7XG4gICAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBNaWQpO1xuICAgIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwQm90KTtcblxuICAgIG92ZXJsYXkuYXBwZW5kQ2hpbGQocG9wdXApO1xuXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVMaXN0UG9wdXAoY29uZmlybUNhbGxiYWNrKSB7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG92ZXJsYXkuY2xhc3NOYW1lID0gJ292ZXJsYXkyJztcblxuICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9wdXAuY2xhc3NOYW1lID0gJ3BvcHVwMic7XG5cbiAgICBjb25zdCBwb3B1cFRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcHVwVG9wLmNsYXNzTmFtZSA9ICdwb3B1cC10b3AyJztcblxuICAgIGNvbnN0IHRyaWFuZ2xlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICB0cmlhbmdsZUljb24uY2xhc3NOYW1lID0gJ2ZhLXNvbGlkIGZhLXRyaWFuZ2xlLWV4Y2xhbWF0aW9uJztcblxuICAgIGNvbnN0IHBvcHVwTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwb3B1cE1lc3NhZ2UudGV4dENvbnRlbnQgPSAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGxpc3Q/JztcblxuICAgIGNvbnN0IHBvcHVwQm90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9wdXBCb3QuY2xhc3NOYW1lID0gJ3BvcHVwLWJvdDInO1xuXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjbG9zZUJ1dHRvbi5pZCA9ICdjbG9zZSc7XG4gICAgY2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSAnQ2xvc2UnO1xuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjbG9zZU92ZXJsYXkyKClcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25maXJtQnV0dG9uLmlkID0gJ2RlbGV0ZWxpc3QnO1xuICAgIGNvbmZpcm1CdXR0b24udGV4dENvbnRlbnQgPSAnQ29uZmlybSc7XG4gICAgY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uZmlybUNhbGxiYWNrKCk7XG4gICAgICAgIGNsb3NlT3ZlcmxheTIoKTtcbiAgICB9KTtcblxuICAgIHBvcHVwVG9wLmFwcGVuZENoaWxkKHRyaWFuZ2xlSWNvbik7XG4gICAgcG9wdXBUb3AuYXBwZW5kQ2hpbGQocG9wdXBNZXNzYWdlKTtcblxuICAgIHBvcHVwQm90LmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcbiAgICBwb3B1cEJvdC5hcHBlbmRDaGlsZChjb25maXJtQnV0dG9uKTtcblxuICAgIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwVG9wKTtcbiAgICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cEJvdCk7XG5cbiAgICBvdmVybGF5LmFwcGVuZENoaWxkKHBvcHVwKTtcblxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChvdmVybGF5KTtcbn1cblxuZnVuY3Rpb24gY2xvc2VPdmVybGF5KCkge1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xuICAgIG92ZXJsYXkucmVtb3ZlKClcbn1cblxuZnVuY3Rpb24gZGVsZXRlTGlzdChpZCkge1xuICAgIGNvbnN0IHRvZG9MaXN0cyA9IGdldFRvZG9MaXN0cygpO1xuICAgIGNvbnN0IHVzZWRJZHMgPSBnZXRVc2VkSWRzKCk7XG5cbiAgICBjb25zdCBpZEluZGV4ID0gdXNlZElkcy5pbmRleE9mKGlkKTtcbiAgICBpZiAoaWRJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdXNlZElkcy5zcGxpY2UoaWRJbmRleCwgMSk7XG4gICAgICAgIHNhdmVVc2VkSWRzKHVzZWRJZHMpO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZWRUb2RvTGlzdHMgPSB0b2RvTGlzdHMuZmlsdGVyKGxpc3QgPT4gbGlzdC5pZCAhPT0gaWQpO1xuICAgIHNhdmVUb2RvTGlzdHModXBkYXRlZFRvZG9MaXN0cyk7XG5cbiAgICByZW5kZXJUb2RvTGlzdHMoKTtcblxuICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94Jyk7XG4gICAgc2V0QWN0aXZlQnV0dG9uKGluYm94KVxuICAgIGluaXRpYWxpc2VNYWluKCcwMDAwMDAnKVxufVxuXG5mdW5jdGlvbiBjbG9zZU92ZXJsYXkyKCkge1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheTInKTtcbiAgICBvdmVybGF5LnJlbW92ZSgpXG59XG5cbmZ1bmN0aW9uIG5ld0xpc3RJdGVtKG5hbWUsIGlkKSB7XG4gICAgY29uc3QgbmV3TGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCduYXYtYnV0dG9ucycsICd0aGUtbmV3LWxpc3RzJyk7XG4gICAgbmV3TGlzdEl0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1saXN0LWlkXCIsIGlkKTtcblxuICAgIGNvbnN0IG5ld0xpc3RJdGVtQ2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdMaXN0SXRlbUNoaWxkLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNpcmNsZVwiPjwvaT4ke25hbWV9PC9kaXY+YDtcblxuICAgIGNvbnN0IG5ld0xpc3RJdGVtQ2hpbGQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3TGlzdEl0ZW1DaGlsZDIuY2xhc3NMaXN0LmFkZCgndHJhc2gnKTtcbiAgICBjb25zdCB0aGVUcmFzaEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgdGhlVHJhc2hJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXJlZ3VsYXInLCAnZmEtdHJhc2gtY2FuJywgJ2xpc3QtZGVsZXRlcicpO1xuICAgIHRoZVRyYXNoSWNvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWxpc3QtaWRcIiwgaWQpO1xuICAgIG5ld0xpc3RJdGVtQ2hpbGQyLmFwcGVuZENoaWxkKHRoZVRyYXNoSWNvbik7XG5cbiAgICBuZXdMaXN0SXRlbS5hcHBlbmRDaGlsZChuZXdMaXN0SXRlbUNoaWxkKTtcbiAgICBuZXdMaXN0SXRlbS5hcHBlbmRDaGlsZChuZXdMaXN0SXRlbUNoaWxkMik7XG5cbiAgICByZXR1cm4gbmV3TGlzdEl0ZW1cbn1cblxuZnVuY3Rpb24gcmVuZGVyVG9kb0xpc3RzKCkge1xuICAgIGNvbnN0IHRvZG9MaXN0cyA9IGdldFRvZG9MaXN0cygpO1xuICAgIGNvbnN0IG5ld0xpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1saXN0cycpO1xuXG4gICAgbmV3TGlzdHMuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBub25EZWZhdWx0VG9kb0xpc3RzID0gdG9kb0xpc3RzLmZpbHRlcih0b2RvTGlzdCA9PiAhaXNEZWZhdWx0VG9kb0xpc3QodG9kb0xpc3QuaWQpKTtcblxuICAgIG5vbkRlZmF1bHRUb2RvTGlzdHMuZm9yRWFjaCh0b2RvTGlzdCA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gbmV3TGlzdEl0ZW0odG9kb0xpc3QubmFtZSwgdG9kb0xpc3QuaWQpO1xuICAgICAgICBuZXdMaXN0cy5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLXRpdGxlJyk7XG4gICAgY29uc3QgdGl0bGVjb250ZW50ID0gdGl0bGUudGV4dENvbnRlbnQ7XG5cblxuXG4gICAgY29uc3QgZ2VuZXJhdGVkRGl2cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0aGUtbmV3LWxpc3RzXCIpO1xuICAgIGZvciAoY29uc3QgZGl2IG9mIGdlbmVyYXRlZERpdnMpIHtcbiAgICAgICAgaWYgKGRpdi50ZXh0Q29udGVudCA9PT0gdGl0bGVjb250ZW50KSB7XG4gICAgICAgICAgICBzZXRBY3RpdmVCdXR0b24oZGl2KVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRyYXNoSWNvbiA9IGRpdi5xdWVyeVNlbGVjdG9yKFwiLnRyYXNoIC5mYS10cmFzaC1jYW5cIik7XG4gICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB7XG4gICAgICAgICAgICB0cmFzaEljb24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRyYXNoSWNvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChkaXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgICAgICAgICBzZXRBY3RpdmVCdXR0b24oZGl2KTtcbiAgICAgICAgICAgIGluaXRpYWxpc2VNYWluKGRpdi5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1pZCcpKVxuXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgYWNjb3JkaW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbicpO1xuICAgIGNvbnN0IGdlbmVyYXRlZEJpbnMgPSBhY2NvcmRpb24uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGlzdC1kZWxldGVyJyk7XG4gICAgZm9yIChjb25zdCBiaW4gb2YgZ2VuZXJhdGVkQmlucykge1xuICAgICAgICBiaW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICBjb25zdCBsaXN0SWQgPSBiaW4uZ2V0QXR0cmlidXRlKCdkYXRhLWxpc3QtaWQnKTtcbiAgICAgICAgICAgIGRlbGV0ZUxpc3RQb3B1cCgoKSA9PiBkZWxldGVMaXN0KGxpc3RJZCkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gaXNEZWZhdWx0VG9kb0xpc3QoaWQpIHtcbiAgICBjb25zdCBkZWZhdWx0VG9kb0xpc3RJZHMgPSBbXCIwMDAwMDBcIiwgXCIxMTExMTFcIiwgXCIyMjIyMjJcIiwgXCIzMzMzMzNcIiwgXCI0NDQ0NDRcIl07XG5cbiAgICByZXR1cm4gZGVmYXVsdFRvZG9MaXN0SWRzLmluY2x1ZGVzKGlkKTtcbn1cblxuZnVuY3Rpb24gYWRkTmV3TGlzdCgpIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdsaXN0aW5wdXQnKTtcbiAgICBjb25zdCBhbGVydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGVydCcpO1xuICAgIGNvbnN0IHBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbicpO1xuXG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGlucHV0LnZhbHVlO1xuXG4gICAgaWYgKGlucHV0LmNoZWNrVmFsaWRpdHkoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYWxlcnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGlucHV0LnN0eWxlLmJvcmRlckNvbG9yID0gJ3JlZCc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV3TGlzdCA9IG5ldyBUb2RvTGlzdChpbnB1dFZhbHVlKTtcbiAgICAgICAgY29uc3QgdG9kb0xpc3RzID0gZ2V0VG9kb0xpc3RzKCk7XG4gICAgICAgIHRvZG9MaXN0cy5wdXNoKG5ld0xpc3QpO1xuICAgICAgICBzYXZlVG9kb0xpc3RzKHRvZG9MaXN0cyk7XG5cblxuXG4gICAgICAgIGNvbnN0IG5ld0xpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1saXN0cycpO1xuICAgICAgICBuZXdMaXN0cy5hcHBlbmRDaGlsZChuZXdMaXN0SXRlbShpbnB1dFZhbHVlLCBuZXdMaXN0LmlkKSk7XG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG5cbiAgICAgICAgcmVuZGVyVG9kb0xpc3RzKClcblxuICAgICAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBwYW5lbC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIGFsZXJ0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cblxuICAgICAgICBjbG9zZU92ZXJsYXkoKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gc2V0QWN0aXZlQnV0dG9uKGJ1dHRvbikge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1idXR0b25zXCIpO1xuXG4gICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgaWYgKGJ1dHRvbiAhPT0gdGhpcykge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuXG5mdW5jdGlvbiBsaXN0Q2xpY2soKSB7XG4gICAgY29uc3QgbGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdHMnKVxuICAgIGNvbnN0IGNoZXZyb25JY29uID0gbGlzdHMucXVlcnlTZWxlY3RvcihcIi5mYS1jaGV2cm9uLXVwXCIpO1xuICAgIGNoZXZyb25JY29uLmNsYXNzTGlzdC50b2dnbGUoXCJmYS1jaGV2cm9uLWRvd25cIik7XG5cbiAgICBjb25zdCBwYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb24nKTtcblxuICAgIGlmIChwYW5lbC5zdHlsZS5tYXhIZWlnaHQpIHtcbiAgICAgICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBwYW5lbC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzaWRlYmFyQW5pbWF0ZSgpIHtcbiAgICBjb25zdCBzY3JlZW5XaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUtc2lkZWJhcicpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuXG4gICAgaWYgKHNjcmVlbldpZHRoID4gNzY4KSB7XG4gICAgICAgIGlmIChzaWRlYmFyLnN0eWxlLmxlZnQgPT09ICcnIHx8IHNpZGViYXIuc3R5bGUubGVmdCA9PT0gJzBweCcpIHtcbiAgICAgICAgICAgIHNpZGViYXIuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgICAgICAgc2lkZWJhci5zdHlsZS5sZWZ0ID0gJy0xMDAlJztcbiAgICAgICAgICAgIG1haW4uc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9ICcxZnInXG4gICAgICAgICAgICBtYWluLnN0eWxlLmdyaWRUZW1wbGF0ZUFyZWFzID0gJ1wibWFpbi1hcmVhXCInXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtYmFycy1zdGFnZ2VyZWQnKTtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmYS1iYXJzJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoc2lkZWJhci5zdHlsZS5sZWZ0ID09PSAnLTEwMCUnKSB7XG4gICAgICAgICAgICBzaWRlYmFyLnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgICAgICAgICBzaWRlYmFyLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgICAgIG1haW4uc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9ICczMDBweCAxZnInXG4gICAgICAgICAgICBtYWluLnN0eWxlLmdyaWRUZW1wbGF0ZUFyZWFzID0gJ1wic2lkZWJhciBtYWluLWFyZWFcIidcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS1iYXJzJyk7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZmEtYmFycy1zdGFnZ2VyZWQnKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzaWRlYmFyLnN0eWxlLmxlZnQgPT09ICctMTAwJScpIHtcbiAgICAgICAgICAgIHNpZGViYXIuc3R5bGUubGVmdCA9ICcwJztcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS1iYXJzJyk7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZmEtYmFycy1zdGFnZ2VyZWQnKTtcbiAgICAgICAgfSBlbHNlIGlmIChzaWRlYmFyLnN0eWxlLmxlZnQgPT09ICcnIHx8IHNpZGViYXIuc3R5bGUubGVmdCA9PT0gJzBweCcpIHtcbiAgICAgICAgICAgIHNpZGViYXIuc3R5bGUubGVmdCA9ICctMTAwJSc7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtYmFycy1zdGFnZ2VyZWQnKTtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmYS1iYXJzJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhvbWVCdXR0b25DbGljaygpIHtcbiAgICBjb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXlcIik7XG5cbiAgICBzZXRBY3RpdmVCdXR0b24odG9kYXkpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYWxpemVTaWRlYmFyKCkge1xuICAgIGNyZWF0ZVNpZGViYXIoKTtcblxuICAgIGNvbnN0IHRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUtc2lkZWJhcicpO1xuICAgIHRvZ2dsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNpZGViYXJBbmltYXRlKTtcblxuICAgIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlLWhvbWUnKTtcbiAgICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaG9tZUJ1dHRvbkNsaWNrKVxuXG4gICAgc2V0QWN0aXZlQnV0dG9uKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5ib3hcIikpO1xuICAgIGluaXRpYWxpc2VNYWluKCcwMDAwMDAnKVxuXG4gICAgcmVuZGVyVG9kb0xpc3RzKClcbiAgICByZW5kZXJUYXNrcygpXG59XG4iLCJpbXBvcnQgaW5pdGlhbGl6ZVNpZGViYXIgZnJvbSAnLi9zaWRlYmFyJ1xuaW1wb3J0IHsgcmVuZGVyVGFza3MgfSBmcm9tICcuL21haW4nXG5pbXBvcnQgeyBUb2RvLCBUb2RvTGlzdCwgZ2V0VG9kb0xpc3RzLCBzYXZlVG9kb0xpc3RzLCBnZXRVc2VkSWRzLCBzYXZlVXNlZElkcywgZ2V0VG9kb0xpc3RCeUlkIH0gZnJvbSAnLi9hcHAuanMnXG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXYuY2xhc3NMaXN0LmFkZCgnbmF2Jyk7XG5cbiAgICBjb25zdCBuYXZJbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdklubmVyLmNsYXNzTGlzdC5hZGQoJ25hdi1pbm5lcicpXG5cbiAgICBjb25zdCBsZWZ0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGVmdERpdi5jbGFzc0xpc3QuYWRkKCdsZWZ0LW5hdicpO1xuXG4gICAgY29uc3QgY2VudGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2VudGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2NlbnRlci1uYXYnKTtcblxuICAgIGNvbnN0IHJpZ2h0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmlnaHREaXYuY2xhc3NMaXN0LmFkZCgncmlnaHQtbmF2Jyk7XG5cbiAgICBjb25zdCBsb2dvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG9nb0Rpdi5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XG5cbiAgICBjb25zdCBtZW51SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBjb25zdCBzY3JlZW5XaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGlmIChzY3JlZW5XaWR0aCA+IDc2OCkge1xuICAgICAgICBtZW51SWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1iYXJzLXN0YWdnZXJlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1lbnVJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLWJhcnMnKTtcbiAgICB9XG5cbiAgICBtZW51SWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZ2dsZS1zaWRlYmFyJyk7XG5cbiAgICBjb25zdCBob21lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBob21lSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1ob3VzZScpO1xuICAgIGhvbWVJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9nZ2xlLWhvbWUnKTtcblxuICAgIGxlZnREaXYuYXBwZW5kQ2hpbGQobWVudUljb24pO1xuICAgIGxlZnREaXYuYXBwZW5kQ2hpbGQoaG9tZUljb24pO1xuXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgIGRhdGUuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlSW5wdXQnKTtcblxuICAgIGNlbnRlckRpdi5hcHBlbmRDaGlsZChkYXRlKVxuXG4gICAgY29uc3QgYWRkSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBhZGRJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLXBsdXMnKTtcbiAgICBhZGRJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBuZXdUYXNrUG9wdXAoKTtcblxuICAgICAgICBjb25zdCB0b2RvTGlzdHMgPSBnZXRUb2RvTGlzdHMoKTtcbiAgICAgICAgY29uc3QgbmF2QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtYnV0dG9ucycpO1xuICAgICAgICBsZXQgYWN0aXZlTmF2QnV0dG9uID0gbnVsbDtcblxuICAgICAgICBmb3IgKGNvbnN0IGJ1dHRvbiBvZiBuYXZCdXR0b25zKSB7XG4gICAgICAgICAgICBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVOYXZCdXR0b24gPSBidXR0b247XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkYXRhTGlzdElkID0gYWN0aXZlTmF2QnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJyk7XG4gICAgICAgIGNyZWF0ZUxpc3RPcHRpb25zKHRvZG9MaXN0cywgZGF0YUxpc3RJZCk7XG4gICAgfSlcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdUb0RvJztcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuXG4gICAgbG9nb0Rpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICByaWdodERpdi5hcHBlbmRDaGlsZChhZGRJY29uKTtcbiAgICByaWdodERpdi5hcHBlbmRDaGlsZChsb2dvRGl2KTtcblxuICAgIG5hdklubmVyLmFwcGVuZENoaWxkKGxlZnREaXYpO1xuICAgIG5hdklubmVyLmFwcGVuZENoaWxkKGNlbnRlckRpdik7XG4gICAgbmF2SW5uZXIuYXBwZW5kQ2hpbGQocmlnaHREaXYpO1xuXG4gICAgbmF2LmFwcGVuZENoaWxkKG5hdklubmVyKTtcblxuICAgIHJldHVybiBuYXZcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgbWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4nKTtcblxuXG4gICAgcmV0dXJuIG1haW5cbn1cblxuZnVuY3Rpb24gbmV3VGFza1BvcHVwKCkge1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvdmVybGF5LmNsYXNzTmFtZSA9ICdvdmVybGF5Myc7XG5cbiAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcHVwLmNsYXNzTmFtZSA9ICdwb3B1cDMnO1xuXG4gICAgY29uc3QgcG9wdXBUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3B1cFRvcC5jbGFzc05hbWUgPSAncG9wdXAtdG9wMyc7XG5cbiAgICBjb25zdCB0aXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGl0bGVUZXh0LnRleHRDb250ZW50ID0gJ05ldyBUYXNrJztcbiAgICBwb3B1cFRvcC5hcHBlbmRDaGlsZCh0aXRsZVRleHQpO1xuXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgY2xvc2VCdXR0b24uY2xhc3NOYW1lID0gJ2ZhLXNvbGlkIGZhLXhtYXJrJztcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlT3ZlcmxheSk7XG4gICAgcG9wdXBUb3AuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuXG4gICAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBUb3ApO1xuXG4gICAgY29uc3QgcG9wdXBNaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3B1cE1pZC5jbGFzc05hbWUgPSAncG9wdXAtbWlkMyc7XG5cbiAgICBjb25zdCBtaWRMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWlkTGVmdC5jbGFzc05hbWUgPSAnbWlkLWxlZnQnO1xuXG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZTonO1xuICAgIG1pZExlZnQuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG5cbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0aXRsZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgdGl0bGVJbnB1dC5tYXhMZW5ndGggPSA2MDtcbiAgICB0aXRsZUlucHV0LmlkID0gJ3Rhc2stdGl0bGUnO1xuICAgIHRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIG1pZExlZnQuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cbiAgICBjb25zdCB0aXRsZUFsZXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRpdGxlQWxlcnQuY2xhc3NMaXN0LmFkZCgndGl0bGUtYWxlcnQnKTtcbiAgICB0aXRsZUFsZXJ0LnRleHRDb250ZW50ID0gJ1RpdGxlIGlzIHJlcXVpcmVkLic7XG4gICAgdGl0bGVBbGVydC5zdHlsZS5jb2xvciA9ICdyZWQnO1xuICAgIHRpdGxlQWxlcnQuc3R5bGUubWFyZ2luVG9wID0gJyc7XG4gICAgdGl0bGVBbGVydC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIG1pZExlZnQuYXBwZW5kQ2hpbGQodGl0bGVBbGVydClcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246JztcbiAgICBtaWRMZWZ0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25UZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS5pZCA9ICdkZXNjcmlwdGlvbic7XG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS5jb2xzID0gMzA7XG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS5yb3dzID0gNDtcbiAgICBkZXNjcmlwdGlvblRleHRhcmVhLm1heExlbmd0aCA9IDE4MDtcbiAgICBtaWRMZWZ0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGV4dGFyZWEpO1xuXG4gICAgcG9wdXBNaWQuYXBwZW5kQ2hpbGQobWlkTGVmdCk7XG5cbiAgICBjb25zdCBtaWRSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1pZFJpZ2h0LmNsYXNzTmFtZSA9ICdtaWQtcmlnaHQnO1xuXG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIGRhdGU6JztcbiAgICBtaWRSaWdodC5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuXG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgICBkYXRlSW5wdXQuaWQgPSAndGFzay1kYXRlJztcbiAgICBkYXRlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIG1pZFJpZ2h0LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG5cbiAgICBjb25zdCBkYXRlQWxlcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGF0ZUFsZXJ0LmNsYXNzTGlzdC5hZGQoJ2RhdGUtYWxlcnQnKTtcbiAgICBkYXRlQWxlcnQudGV4dENvbnRlbnQgPSAnRGF0ZSBpcyByZXF1aXJlZC4nO1xuICAgIGRhdGVBbGVydC5zdHlsZS5jb2xvciA9ICdyZWQnO1xuICAgIGRhdGVBbGVydC5zdHlsZS5tYXJnaW5Ub3AgPSAnJztcbiAgICBkYXRlQWxlcnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIG1pZFJpZ2h0LmFwcGVuZENoaWxkKGRhdGVBbGVydCk7XG5cbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5Oic7XG4gICAgbWlkUmlnaHQuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG5cbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHByaW9yaXR5U2VsZWN0LmlkID0gJ3ByaW9yaXR5JztcbiAgICBwcmlvcml0eVNlbGVjdC5yZXF1aXJlZCA9IHRydWU7XG4gICAgWydMb3cnLCAnTWVkaXVtJywgJ0hpZ2gnXS5mb3JFYWNoKHByaW9yaXR5VGV4dCA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBwcmlvcml0eVRleHQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJpb3JpdHlUZXh0O1xuICAgICAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xuICAgIG1pZFJpZ2h0LmFwcGVuZENoaWxkKHByaW9yaXR5U2VsZWN0KTtcblxuICAgIGNvbnN0IHByaW9yaXR5QWxlcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJpb3JpdHlBbGVydC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1hbGVydCcpO1xuICAgIHByaW9yaXR5QWxlcnQudGV4dENvbnRlbnQgPSAnUHJpb3JpdHkgaXMgcmVxdWlyZWQuJztcbiAgICBwcmlvcml0eUFsZXJ0LnN0eWxlLmNvbG9yID0gJ3JlZCc7XG4gICAgcHJpb3JpdHlBbGVydC5zdHlsZS5tYXJnaW5Ub3AgPSAnJztcbiAgICBwcmlvcml0eUFsZXJ0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICBtaWRSaWdodC5hcHBlbmRDaGlsZChwcmlvcml0eUFsZXJ0KTtcblxuICAgIGNvbnN0IGxpc3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGlzdExhYmVsLnRleHRDb250ZW50ID0gJ0xpc3Q6JztcbiAgICBtaWRSaWdodC5hcHBlbmRDaGlsZChsaXN0TGFiZWwpO1xuXG4gICAgY29uc3QgbGlzdFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIGxpc3RTZWxlY3QuaWQgPSAndGhlbGlzdCc7XG4gICAgbGlzdFNlbGVjdC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICBtaWRSaWdodC5hcHBlbmRDaGlsZChsaXN0U2VsZWN0KTtcblxuICAgIGNvbnN0IGxpc3RBbGVydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsaXN0QWxlcnQuY2xhc3NMaXN0LmFkZCgnbGlzdC1hbGVydCcpO1xuICAgIGxpc3RBbGVydC50ZXh0Q29udGVudCA9ICdMaXN0IGlzIHJlcXVpcmVkLic7XG4gICAgbGlzdEFsZXJ0LnN0eWxlLmNvbG9yID0gJ3JlZCc7XG4gICAgbGlzdEFsZXJ0LnN0eWxlLm1hcmdpblRvcCA9ICcnO1xuICAgIGxpc3RBbGVydC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgbWlkUmlnaHQuYXBwZW5kQ2hpbGQobGlzdEFsZXJ0KTtcblxuICAgIHBvcHVwTWlkLmFwcGVuZENoaWxkKG1pZFJpZ2h0KTtcblxuICAgIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwTWlkKTtcblxuICAgIGNvbnN0IHBvcHVwQm90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9wdXBCb3QuY2xhc3NOYW1lID0gJ3BvcHVwLWJvdDMnO1xuXG4gICAgY29uc3QgdGV4dENsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGV4dENsb3NlQnV0dG9uLmlkID0gJ2Nsb3NlJztcbiAgICB0ZXh0Q2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSAnQ2xvc2UnO1xuICAgIHRleHRDbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlT3ZlcmxheSk7XG4gICAgcG9wdXBCb3QuYXBwZW5kQ2hpbGQodGV4dENsb3NlQnV0dG9uKTtcblxuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRUYXNrQnV0dG9uLmlkID0gJ2FkZHRhc2snO1xuICAgIGFkZFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xuICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB2YWxpZGF0ZUFuZEFkZFRhc2spXG4gICAgcG9wdXBCb3QuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XG5cbiAgICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cEJvdCk7XG5cbiAgICBvdmVybGF5LmFwcGVuZENoaWxkKHBvcHVwKTtcblxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChvdmVybGF5KTtcbn1cblxuZnVuY3Rpb24gY2xvc2VPdmVybGF5KCkge1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheTMnKTtcbiAgICBvdmVybGF5LnJlbW92ZSgpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpc3RPcHRpb25zKHRvZG9MaXN0cywgbGlzdHZhbHVlKSB7XG4gICAgY29uc3QgbGlzdFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGVsaXN0Jyk7XG5cbiAgICBsaXN0U2VsZWN0LmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IGlnbm9yZUlkcyA9IFsnMTExMTExJywgJzIyMjIyMicsICczMzMzMzMnLCAnNDQ0NDQ0J11cblxuXG4gICAgdG9kb0xpc3RzLmZvckVhY2gobGlzdCA9PiB7XG4gICAgICAgIGlmICghaWdub3JlSWRzLmluY2x1ZGVzKGxpc3QuaWQpKSB7XG4gICAgICAgICAgICBjb25zdCBsaXN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBsaXN0T3B0aW9uLnZhbHVlID0gbGlzdC5pZDtcbiAgICAgICAgICAgIGxpc3RPcHRpb24udGV4dENvbnRlbnQgPSBsaXN0Lm5hbWU7XG4gICAgICAgICAgICBsaXN0U2VsZWN0LmFwcGVuZENoaWxkKGxpc3RPcHRpb24pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBsaXN0U2VsZWN0LnZhbHVlID0gbGlzdHZhbHVlO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUFuZEFkZFRhc2soKSB7XG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXRpdGxlJyk7XG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZGF0ZScpO1xuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5Jyk7XG4gICAgY29uc3QgbGlzdFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGVsaXN0Jyk7XG5cbiAgICBjb25zdCB0aXRsZUFsZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlLWFsZXJ0Jyk7XG4gICAgY29uc3QgZGF0ZUFsZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtYWxlcnQnKTtcbiAgICBjb25zdCBwcmlvcml0eUFsZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5LWFsZXJ0Jyk7XG4gICAgY29uc3QgbGlzdEFsZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtYWxlcnQnKTtcblxuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcblxuICAgIGlmICh0aXRsZUlucHV0LnZhbHVlID09PSAnJykge1xuICAgICAgICB0aXRsZUFsZXJ0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGl0bGVBbGVydC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIGlmIChkYXRlSW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgIGRhdGVBbGVydC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGVBbGVydC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIGlmIChwcmlvcml0eVNlbGVjdC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgcHJpb3JpdHlBbGVydC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHByaW9yaXR5QWxlcnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG5cbiAgICBpZiAobGlzdFNlbGVjdC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgbGlzdEFsZXJ0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGlzdEFsZXJ0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IGxpc3RTZWxlY3QudmFsdWU7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJyk7XG5cbiAgICAgICAgY29uc3QgdGhlVG9kbyA9IG5ldyBUb2RvKHRpdGxlSW5wdXQudmFsdWUsIGRlc2NyaXB0aW9uLnZhbHVlLCBkYXRlSW5wdXQudmFsdWUsIHByaW9yaXR5U2VsZWN0LnZhbHVlKVxuICAgICAgICBhZGRUb2RvVG9Ub2RvTGlzdChzZWxlY3RlZFZhbHVlLCB0aGVUb2RvKTtcblxuICAgICAgICBjbG9zZU92ZXJsYXkoKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkVG9kb1RvVG9kb0xpc3Qoc2VsZWN0ZWRWYWx1ZSwgbmV3VG9kbykge1xuICAgIGNvbnN0IG9yaWdpbmFsVG9kb0xpc3QgPSBnZXRUb2RvTGlzdEJ5SWQoc2VsZWN0ZWRWYWx1ZSk7XG5cbiAgICBpZiAoIW9yaWdpbmFsVG9kb0xpc3QpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUb2RvTGlzdCBub3QgZm91bmQgZm9yIHRoZSBzZWxlY3RlZCB2YWx1ZS5cIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVkVG9kb0xpc3QgPSBuZXcgVG9kb0xpc3Qob3JpZ2luYWxUb2RvTGlzdC5uYW1lLCBvcmlnaW5hbFRvZG9MaXN0LmlkKTtcblxuICAgIHVwZGF0ZWRUb2RvTGlzdC50b2RvcyA9IFsuLi5vcmlnaW5hbFRvZG9MaXN0LnRvZG9zLCBuZXdUb2RvXTtcblxuICAgIGNvbnN0IHRvZG9MaXN0cyA9IGdldFRvZG9MaXN0cygpO1xuICAgIGNvbnN0IHVwZGF0ZWRUb2RvTGlzdHMgPSB0b2RvTGlzdHMubWFwKHRvZG9MaXN0ID0+XG4gICAgICAgIHRvZG9MaXN0LmlkID09PSBzZWxlY3RlZFZhbHVlID8gdXBkYXRlZFRvZG9MaXN0IDogdG9kb0xpc3RcbiAgICApO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9MaXN0cycsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRUb2RvTGlzdHMpKTtcblxuICAgIHJlbmRlclRhc2tzKClcbiAgICAgICAgO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEZWZhdWx0VG9kb0xpc3RzKCkge1xuICAgIGNvbnN0IGRlZmF1bHRMaXN0c0RhdGEgPSBbXG4gICAgICAgIHsgbmFtZTogXCJJbmJveFwiLCBpZDogXCIwMDAwMDBcIiB9LFxuICAgICAgICB7IG5hbWU6IFwiVG9kYXlcIiwgaWQ6IFwiMTExMTExXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIlVwY29taW5nXCIsIGlkOiBcIjIyMjIyMlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJBbGxcIiwgaWQ6IFwiMzMzMzMzXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIkltcG9ydGFudFwiLCBpZDogXCI0NDQ0NDRcIiB9XG4gICAgXTtcblxuICAgIGNvbnN0IGV4aXN0aW5nTGlzdHMgPSBnZXRUb2RvTGlzdHMoKTtcbiAgICBjb25zdCBtaXNzaW5nTGlzdHNEYXRhID0gZGVmYXVsdExpc3RzRGF0YS5maWx0ZXIoZGVmYXVsdExpc3QgPT5cbiAgICAgICAgIWV4aXN0aW5nTGlzdHMuc29tZShleGlzdGluZ0xpc3QgPT4gZXhpc3RpbmdMaXN0Lm5hbWUgPT09IGRlZmF1bHRMaXN0Lm5hbWUpXG4gICAgKTtcblxuICAgIGNvbnN0IHVwZGF0ZWRMaXN0cyA9IGV4aXN0aW5nTGlzdHMuY29uY2F0KG1pc3NpbmdMaXN0c0RhdGEubWFwKGRhdGEgPT4gbmV3IFRvZG9MaXN0KGRhdGEubmFtZSwgZGF0YS5pZCkpKTtcbiAgICBzYXZlVG9kb0xpc3RzKHVwZGF0ZWRMaXN0cyk7XG5cbiAgICB1cGRhdGVVc2VkSWRzKGRlZmF1bHRMaXN0c0RhdGEubWFwKGxpc3QgPT4gbGlzdC5pZCkpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVVc2VkSWRzKGlkc1RvSW5jbHVkZSkge1xuICAgIGNvbnN0IHVzZWRJZHMgPSBnZXRVc2VkSWRzKCk7XG4gICAgY29uc3QgdW5pcXVlVXNlZElkcyA9IEFycmF5LmZyb20obmV3IFNldCh1c2VkSWRzLmNvbmNhdChpZHNUb0luY2x1ZGUpKSk7XG4gICAgc2F2ZVVzZWRJZHModW5pcXVlVXNlZElkcyk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVNjcmVlbldpZHRoQ2hhbmdlKCkge1xuICAgIGNvbnN0IHNjcmVlbldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZS1zaWRlYmFyJyk7XG5cbiAgICBpZiAoc2NyZWVuV2lkdGggPD0gNzY4KSB7XG4gICAgICAgIGlmIChzY3JlZW5XaWR0aCA8PSAzMDApIHtcbiAgICAgICAgICAgIHNpZGViYXIuc3R5bGUud2lkdGggPSBzY3JlZW5XaWR0aCArICdweCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaWRlYmFyLnN0eWxlLndpZHRoID0gJzMwMHB4JztcbiAgICAgICAgfVxuICAgICAgICBzaWRlYmFyLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgICAgc2lkZWJhci5zdHlsZS5sZWZ0ID0gJy0xMDAlJztcbiAgICAgICAgbWFpbi5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gJzFmcidcbiAgICAgICAgbWFpbi5zdHlsZS5ncmlkVGVtcGxhdGVBcmVhcyA9ICdcIm1haW4tYXJlYVwiJ1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtYmFycy1zdGFnZ2VyZWQnKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ZhLWJhcnMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzaWRlYmFyLnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgICAgIHNpZGViYXIuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICBzaWRlYmFyLnN0eWxlLndpZHRoID0gJyc7XG4gICAgICAgIG1haW4uc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9ICczMDBweCAxZnInXG4gICAgICAgIG1haW4uc3R5bGUuZ3JpZFRlbXBsYXRlQXJlYXMgPSAnXCJzaWRlYmFyIG1haW4tYXJlYVwiJ1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtYmFycycpO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZmEtYmFycy1zdGFnZ2VyZWQnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVdlYnBhZ2UoKSB7XG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcblxuICAgIHZhciBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgdmFyIGZvcm1hdHRlZERhdGUgPSBjdXJyZW50RGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlSW5wdXRcIikudmFsdWUgPSBmb3JtYXR0ZWREYXRlO1xuXG4gICAgY3JlYXRlRGVmYXVsdFRvZG9MaXN0cygpO1xuXG4gICAgaW5pdGlhbGl6ZVNpZGViYXIoKVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVNjcmVlbldpZHRoQ2hhbmdlKTtcblxuICAgIGhhbmRsZVNjcmVlbldpZHRoQ2hhbmdlKCk7XG59XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9