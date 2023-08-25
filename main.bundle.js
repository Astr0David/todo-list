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

function saveTodoLists(todoLists) {
    localStorage.setItem('todoLists', JSON.stringify(todoLists));
}

function getTodoListById(id) {
    const todoLists = getTodoLists();
    return todoLists.find(todoList => todoList.id === id);
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
            event.stopPropagation();
            const todoId = icon.getAttribute('data-list-id');
            const todoLists = (0,_app__WEBPACK_IMPORTED_MODULE_0__.getTodoLists)();

            const existingTodo = (0,_app__WEBPACK_IMPORTED_MODULE_0__.findTodoById)(todoId)

            const theTodoPriority = existingTodo.priority
            console.log(theTodoPriority)

            let newPriority;
            if (theTodoPriority === 'low') {
                newPriority = 'medium';
            } else if (theTodoPriority === 'medium') {
                newPriority = 'high';
            } else if (theTodoPriority === 'high') {
                newPriority = 'low';
            }

            const todoPriority = updateTodoPriority(todoLists, todoId, newPriority)

            if (todoPriority) {
                (0,_app__WEBPACK_IMPORTED_MODULE_0__.saveTodoLists)(todoLists);
                renderTasks();
            }
        });
    });


    const checkboxes = document.querySelectorAll('.task-check')
    for (const checkbox of checkboxes) {
        checkbox.addEventListener('click', function (event) {
            event.stopPropagation();
            const taskId = checkbox.getAttribute('data-list-id');
            deleteTask(taskId)
        })
    }
}

function updateTodoPriority(todoLists, todoId, newPriority) {
    for (const todoList of todoLists) {
        const existingTodoIndex = todoList.todos.findIndex(todo => todo.id === todoId);
        if (existingTodoIndex !== -1) {
            const existingTodo = todoList.todos[existingTodoIndex];
            const updatedTodo = {
                ...existingTodo,
                priority: newPriority
            };

            todoList.todos.splice(existingTodoIndex, 1, updatedTodo);
            return true;
        }
    }
    return false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHdJQUF3SSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcseUJBQXlCO0FBQ3hOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9B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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLGtEQUFZO0FBQ2xDLG9CQUFvQixnREFBVTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1EQUFhOztBQUV6QjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaURBQVc7QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIsc0NBQUk7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLHFEQUFlOztBQUU1QztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0MsMENBQVE7O0FBRXhDOztBQUVBLHNCQUFzQixrREFBWTtBQUNsQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM29CeUY7QUFDbEM7O0FBRXZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQWM7QUFDdEIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBYztBQUN0QixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFjO0FBQ3RCLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQWM7QUFDdEIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBYztBQUN0QixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0QsVUFBVSxZQUFZLEtBQUs7O0FBRTdFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixxREFBWTtBQUNsQyxvQkFBb0IsbURBQVU7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQVc7QUFDbkI7O0FBRUE7QUFDQSxJQUFJLHNEQUFhOztBQUVqQjs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxxREFBYztBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNFQUFzRSxLQUFLOztBQUUzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLHFEQUFZO0FBQ2xDOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0RBQWM7O0FBRTFCLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLDRCQUE0Qiw2Q0FBUTtBQUNwQywwQkFBMEIscURBQVk7QUFDdEM7QUFDQSxRQUFRLHNEQUFhOzs7O0FBSXJCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFZTtBQUNmOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUksb0RBQWM7O0FBRWxCO0FBQ0EsSUFBSSxzREFBVztBQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxYnlDO0FBQ0w7QUFDNEU7O0FBRWhIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLHFEQUFZO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDRCQUE0Qix5Q0FBSTtBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsd0RBQWU7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUFnQyw2Q0FBUTs7QUFFeEM7O0FBRUEsc0JBQXNCLHFEQUFZO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxJQUFJLGtEQUFXO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSw2QkFBNkI7QUFDdkMsVUFBVSw2QkFBNkI7QUFDdkMsVUFBVSxnQ0FBZ0M7QUFDMUMsVUFBVSwyQkFBMkI7QUFDckMsVUFBVTtBQUNWOztBQUVBLDBCQUEwQixxREFBWTtBQUN0QztBQUNBO0FBQ0E7O0FBRUEsK0VBQStFLDZDQUFRO0FBQ3ZGLElBQUksc0RBQWE7O0FBRWpCO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsbURBQVU7QUFDOUI7QUFDQSxJQUFJLG9EQUFXO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxJQUFJLG9EQUFpQjs7QUFFckI7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGVzdC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZXN0LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZXN0LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGVzdC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Rlc3QtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGVzdC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Rlc3QtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZXN0LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZXN0LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZXN0LXBhZ2UvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL3Rlc3QtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZXN0LXBhZ2UvLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly90ZXN0LXBhZ2UvLi9zcmMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90ZXN0LXBhZ2UvLi9zcmMvd2VicGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJyaWNvbGFnZStHcm90ZXNxdWU6b3Bzeix3Z2h0QDEwLi40OCwyMDA7MTAuLjQ4LDMwMDsxMC4uNDgsNDAwOzEwLi40OCw1MDA7MTAuLjQ4LDYwMDsxMC4uNDgsNzAwOzEwLi40OCw4MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OiBVYnVudHUsIHNhbnMtc2VyaWY7XG59XG5cbmJvZHkge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5tYWluLWNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDVweCAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgJ25hdmJhcidcbiAgICAgICAgJ21haW4nO1xufVxuXG4ubmF2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ0ZTQxO1xuICAgIGdyaWQtYXJlYTogbmF2YmFyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogI2YxZmFlZTtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAxMDA7XG59XG5cbi5uYXYtaW5uZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmxlZnQtbmF2LFxuLnJpZ2h0LW5hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubG9nbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xuICAgIGdhcDogMC4yNXJlbTtcbiAgICBmb250LWZhbWlseTogMnJlbTtcbiAgICBjb2xvcjogI2YxZmFlZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLm5hdiAuZmEtcGx1cyB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDAuMjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG59XG5cbi5uYXYgLmZhLXBsdXM6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ODg7XG59XG5cbi5uYXYgLmZhLXBsdXM6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xufVxuXG4ubGVmdC1uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZ2FwOiAxLjVyZW07XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xufVxuXG4ubGVmdC1uYXYgLmZhLWhvdXNlIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG59XG5cbi5sZWZ0LW5hdiAuZmEtYmFycyxcbi5mYS1iYXJzLXN0YWdnZXJlZCB7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xufVxuXG4ubmF2IC5mYS1zb2xpZCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zZm9ybTogMC4ycyBlYXNlO1xufVxuXG4ubGVmdC1uYXYgLmZhLXNvbGlkOmhvdmVyIHtcbiAgICBvcGFjaXR5OiA1MCU7XG59XG5cbi5sZWZ0LW5hdiAuZmEtc29saWQ6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xufVxuXG4uY2VudGVyLW5hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2RhdGVJbnB1dCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg4MTU3O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nOiAwLjRyZW0gMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5tYWluIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjg1cHggMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdzaWRlYmFyIG1haW4tYXJlYSc7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2lkZWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICAgIHotaW5kZXg6IDUwO1xufVxuXG4ubWFpbi1hcmVhIHtcbiAgICBncmlkLWFyZWE6IG1haW4tYXJlYTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ubWVudSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5tZW51IGxpIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAuNnJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ubmF2LWJ1dHRvbnM6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xufVxuXG4ubWVudSBsaSBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tZW51IGxpIGkge1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG59XG5cbi5uYXYtYnV0dG9ucy5hY3RpdmUge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi50b2RheSBpIHtcbiAgICBjb2xvcjogY3JpbXNvbjtcbiAgICBvcGFjaXR5OiA1MCU7XG59XG5cbi5pbmJveCBpIHtcbiAgICBjb2xvcjogZ3JheTtcbn1cblxuLmFsbCBpIHtcbiAgICBvcGFjaXR5OiA3MCU7XG59XG5cbi51cGNvbWluZyBpIHtcbiAgICBjb2xvcjogYmx1ZTtcbiAgICBvcGFjaXR5OiA1MCU7XG59XG5cbi5pbXBvcnRhbnQgaSB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBvcGFjaXR5OiA1MCU7XG59XG5cbi5saXN0cyBpIHtcbiAgICBjb2xvcjogZGFya29yYW5nZTtcbiAgICBvcGFjaXR5OiA2MCU7XG59XG5cbi5tZW51IC5saXN0cyB7XG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG59XG5cbi5saXN0cyAuZmEtY2hldnJvbi11cCB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBwYWRkaW5nLXRvcDogMC4xcmVtO1xufVxuXG4uYWNjb3JkaW9uIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjJzIGVhc2Utb3V0O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWF4LWhlaWdodDogMDtcblxufVxuXG4uY3JlYXRlLW5ldyBpIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAuMjVyZW07XG4gICAgb3BhY2l0eTogNjUlO1xufVxuXG4uYWNjb3JkaW9uIC5jcmVhdGUtbmV3IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbiAgICBwYWRkaW5nLXRvcDogLjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hY2NvcmRpb24gLmNyZWF0ZS1uZXc6aG92ZXIge1xuICAgIGNvbG9yOiAjM2E1YTQwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNSUpO1xufVxuXG4uYWNjb3JkaW9uIC5uZXctbGlzdHMgaSB7XG4gICAgcGFkZGluZy1yaWdodDogLjVyZW07XG4gICAgZm9udC1zaXplOiAuNXJlbTtcbiAgICBvcGFjaXR5OiA1MCU7XG59XG5cbi50aGUtbmV3LWxpc3RzIHtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4udGhlLW5ldy1saXN0cyBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRoZS1uZXctbGlzdHMgLnRyYXNoIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4udGhlLW5ldy1saXN0cyAudHJhc2ggLmZhLXRyYXNoLWNhbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6IGdyZXk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi50aGUtbmV3LWxpc3RzIC50cmFzaCAuZmEtdHJhc2gtY2FuOmhvdmVyIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLm1haW4tY2hpbGQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA5MCU7XG59XG5cbi5tYWluLWFyZWEgLm1haW4tY2hpbGQgLnRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgICBjb2xvcjogIzQ0NDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLm1haW4tYXJlYSAubWFpbi1jaGlsZCAudG9kby1zZWN0aW9uIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIHBhZGRpbmc6IDJyZW0gMHJlbTtcbn1cblxuLm92ZXJsYXksXG4ub3ZlcmxheTIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB6LWluZGV4OiA1MDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wb3B1cCxcbi5wb3B1cDIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucG9wdXAgLmZhLXhtYXJrLFxuLnBvcHVwMiAuZmEteG1hcmsge1xuICAgIHRvcDogMXJlbTtcbiAgICByaWdodDogMXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBjb2xvcjogIzExMTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5wb3B1cCAucG9wdXAtdG9wLFxuLnBvcHVwMiAucG9wdXAtdG9wMiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ucG9wdXAgLnBvcHVwLXRvcCBwIHtcbiAgICBmb250LXNpemU6IDEuNzVyZW07XG59XG5cbi5wb3B1cDIgLnBvcHVwLXRvcDIgcCB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbn1cblxuLnBvcHVwIC5wb3B1cC1taWQsXG4ucG9wdXAyIC5wb3B1cC1taWQge1xuICAgIHBhZGRpbmc6IDByZW0gMS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5wb3B1cCAucG9wdXAtbWlkIHAsXG4ucG9wdXAyIC5wb3B1cC1taWQgcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG59XG5cbi5wb3B1cCAucG9wdXAtbWlkIGlucHV0LFxuLnBvcHVwMiAucG9wdXAtbWlkIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuXG4ucG9wdXAgLnBvcHVwLW1pZCBpbnB1dDpob3Zlcixcbi5wb3B1cDIgLnBvcHVwLW1pZCBpbnB1dDpob3ZlciB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzNhNWE0MDtcbn1cblxuLnBvcHVwIC5wb3B1cC1taWQgaW5wdXQ6Zm9jdXMsXG4ucG9wdXAyIC5wb3B1cC1taWQgaW5wdXQ6Zm9jdXMge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzYTVhNDA7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLnBvcHVwIC5wb3B1cC1ib3QsXG4ucG9wdXAyIC5wb3B1cC1ib3QyIHtcbiAgICBwYWRkaW5nOiAwcmVtIDEuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGdhcDogLjVyZW07XG59XG5cbi5wb3B1cCAucG9wdXAtYm90ICNjbG9zZSxcbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2Nsb3NlIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wb3B1cCAucG9wdXAtYm90ICNjbG9zZTpob3Zlcixcbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2Nsb3NlOmhvdmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4ucG9wdXAgLnBvcHVwLWJvdCAjYWRkaXRpb24sXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0IHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBwYWRkaW5nOiAuNXJlbSAycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg4MTU3O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2RlbGV0ZXRhc2sge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIHBhZGRpbmc6IC41cmVtIDJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODgxNTc7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucG9wdXAgLnBvcHVwLWJvdCAjYWRkaXRpb246aG92ZXIsXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0OmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG4ucG9wdXAgLnBvcHVwLWJvdCAjYWRkaXRpb246YWN0aXZlLFxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdDphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5wb3B1cCAuZmEteG1hcms6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuLnBvcHVwIC5mYS14bWFyazphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5wb3B1cCAucG9wdXAtYm90ICNhZGRpdGlvbjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLnBvcHVwIC5wb3B1cC1ib3QgI2FkZGl0aW9uOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLnBvcHVwMiAucG9wdXAtdG9wMiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnBvcHVwMiAucG9wdXAtdG9wMiAuZmEtdHJpYW5nbGUtZXhjbGFtYXRpb24ge1xuICAgIGZvbnQtc2l6ZTogNC41cmVtO1xuICAgIGNvbG9yOiByZWQ7XG4gICAgb3BhY2l0eTogNzAlO1xufVxuXG4ucG9wdXAyIC5wb3B1cC1ib3QyIHtcbiAgICBwYWRkaW5nOiAwcmVtIDEuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGdhcDogLjVyZW07XG59XG5cbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Qge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIHBhZGRpbmc6IC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg4MTU3O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdDpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdDphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5wb3B1cDIgLmZhLXhtYXJrOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbi5wb3B1cDIgLmZhLXhtYXJrOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdDpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdDphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5wb3B1cDIgLnBvcHVwLXRvcDIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgcGFkZGluZzogMS41cmVtO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5wb3B1cDIgLnBvcHVwLXRvcDIgLmZhLXRyaWFuZ2xlLWV4Y2xhbWF0aW9uIHtcbiAgICBmb250LXNpemU6IDQuNXJlbTtcbiAgICBjb2xvcjogcmVkO1xuICAgIG9wYWNpdHk6IDcwJTtcbn1cblxuLnBvcHVwMiAucG9wdXAtYm90MiB7XG4gICAgcGFkZGluZzogMHJlbSAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBnYXA6IC41cmVtO1xufVxuXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0IHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4ODE1NztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4ucG9wdXAyIC5mYS14bWFyazpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuXG4ucG9wdXAyIC5mYS14bWFyazphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4ub3ZlcmxheTMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB6LWluZGV4OiA1MDA7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnBvcHVwMyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5wb3B1cDMgLmZhLXhtYXJrIHtcbiAgICB0b3A6IDFyZW07XG4gICAgcmlnaHQ6IDFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IC41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgY29sb3I6ICMxMTE7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ucG9wdXAzIC5mYS14bWFyazpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuXG4ucG9wdXAzIC5mYS14bWFyazphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5wb3B1cDMgLnBvcHVwLXRvcDMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5wb3B1cDMgLnBvcHVwLXRvcDMgcCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5wb3B1cDMgLnBvcHVwLW1pZDMge1xuICAgIHBhZGRpbmc6IDByZW0gMS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5taWQtbGVmdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMC41cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubWlkLXJpZ2h0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAwLjVyZW07XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5wb3B1cDMgLnBvcHVwLW1pZDMgbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgcGFkZGluZy10b3A6IDAuMnJlbTtcbn1cblxuLnBvcHVwMyAucG9wdXAtbWlkMyB0ZXh0YXJlYSB7XG4gICAgcmVzaXplOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5wb3B1cDMgLnBvcHVwLW1pZDMgdGV4dGFyZWE6Zm9jdXMge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzYTVhNDA7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLnBvcHVwMyAucG9wdXAtbWlkMyBpbnB1dFt0eXBlPSd0ZXh0J10ge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5cbi5wb3B1cDMgLnBvcHVwLW1pZDMgc2VsZWN0IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgcGFkZGluZzogMC4yNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ucG9wdXAzIC5wb3B1cC1taWQzIC5taWQtcmlnaHQgI3Rhc2stZGF0ZSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHBhZGRpbmc6IDAuMjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ucG9wdXAzIC5wb3B1cC1taWQzIGlucHV0OmhvdmVyIHtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjM2E1YTQwO1xufVxuXG4ucG9wdXAzIC5wb3B1cC1taWQzIGlucHV0OmZvY3VzIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjM2E1YTQwO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5wb3B1cDMgLnBvcHVwLWJvdDMge1xuICAgIHBhZGRpbmc6IDByZW0gMS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgZ2FwOiAuNXJlbTtcbn1cblxuLnBvcHVwMyAucG9wdXAtYm90MyAjY2xvc2Uge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIHBhZGRpbmc6IC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBvcHVwMyAucG9wdXAtYm90MyAjY2xvc2U6aG92ZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5wb3B1cDMgLnBvcHVwLWJvdDMgI2FkZHRhc2sge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIHBhZGRpbmc6IC41cmVtIDJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODgxNTc7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jZWRpdHRhc2sge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIHBhZGRpbmc6IC41cmVtIDJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODgxNTc7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucG9wdXAzIC5wb3B1cC1ib3QzICNhZGR0YXNrOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG4ucG9wdXAzIC5wb3B1cC1ib3QzICNhZGR0YXNrOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLnRhc2stY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmVhY2gtdGFzay1zZWN0aW9uLXRvcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFzay1sZWZ0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgICBnYXA6IC41cmVtO1xufVxuXG4udGFzay1sZWZ0ICN0YXNrdGl0bGUge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBtYXgtd2lkdGg6IDMwdnc7XG59XG5cbi50YXNrLXJpZ2h0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMXJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiBncmF5O1xufVxuXG4udGFzay1yaWdodCAudGFzay1pY29ucyB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFzay1yaWdodCAudGFzay1pY29uczpob3ZlciB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbn1cblxuLnRhc2stcmlnaHQgLnRhc2staWNvbnM6YWN0aXZlIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbn1cblxuLmVhY2gtdGFzay1zZWN0aW9uLWJvdCB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIG1hcmdpbi10b3A6IC0uNzVyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHdpZHRoOiA5OSU7XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbn1cblxuLmVhY2gtdGFzay1zZWN0aW9uLWJvdCBwIHtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uYm90LXJpZ2h0LFxuLmJvdC1sZWZ0IHtcbiAgICB3aWR0aDogNDklO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5yaWdodC10b3AsXG4ucmlnaHQtYm90LFxuLmxlZnQtdG9wLFxuLmxlZnQtYm90IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogLjc1cmVtO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnJpZ2h0LXRvcCxcbi5sZWZ0LXRvcCB7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZWFjaC10YXNrLXNlY3Rpb24tYm90IHAuYm9sZGVuIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ucmlnaHQtdG9wICNsb25nLFxuLmxlZnQtdG9wICNsb25nIHtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmZhLWZsYWcge1xuICAgIG9wYWNpdHk6IDcwJTtcbiAgICB6LWluZGV4OiAwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAucG9wdXAge1xuICAgICAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICB9XG5cbiAgICAjZGF0ZUlucHV0IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAucG9wdXAyIHtcbiAgICAgICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgfVxuXG4gICAgLnBvcHVwMyB7XG4gICAgICAgIG1heC13aWR0aDogOTAlO1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDMwMHB4KSB7XG4gICAgLm1haW4tYXJlYSAubWFpbi1jaGlsZCAudG9kby1zZWN0aW9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLm1haW4tYXJlYSAubWFpbi1jaGlsZCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5tYWluLWFyZWEgLm1haW4tY2hpbGQgLnRpdGxlIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDByZW07XG4gICAgICAgIHBhZGRpbmctbGVmdDogMHJlbTtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIC5tYWluLWFyZWEgLm1haW4tY2hpbGQgLnRvZG8tc2VjdGlvbiB7XG4gICAgICAgIHdpZHRoOiA5NSU7XG4gICAgfVxuXG4gICAgLm1haW4tYXJlYSAubWFpbi1jaGlsZCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5tYWluLWFyZWEgLm1haW4tY2hpbGQgLnRpdGxlIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDByZW07XG4gICAgICAgIHBhZGRpbmctbGVmdDogMHJlbTtcbiAgICB9XG5cbiAgICAuc2lkZWJhciB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgbGVmdDogLTEwMCU7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuc2lkZWJhciB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgbGVmdDogLTEwMCU7XG4gICAgfVxuXG4gICAgLm1haW4ge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJyBtYWluLWFyZWEnO1xuICAgIH1cblxuICAgIC5uYXYtaW5uZXIge1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUI7O2NBRVU7QUFDZDs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7O0FBRUE7O0lBRUksYUFBYTtJQUNiLG1CQUFt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Q3RCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsV0FBVztJQUNmO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGVBQWU7UUFDZixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSwwQkFBMEI7UUFDMUIsaUNBQWlDO0lBQ3JDOztJQUVBO1FBQ0ksVUFBVTtJQUNkO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QnJpY29sYWdlK0dyb3Rlc3F1ZTpvcHN6LHdnaHRAMTAuLjQ4LDIwMDsxMC4uNDgsMzAwOzEwLi40OCw0MDA7MTAuLjQ4LDUwMDsxMC4uNDgsNjAwOzEwLi40OCw3MDA7MTAuLjQ4LDgwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogVWJ1bnR1LCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0NXB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgICduYXZiYXInXFxuICAgICAgICAnbWFpbic7XFxufVxcblxcbi5uYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ0ZTQxO1xcbiAgICBncmlkLWFyZWE6IG5hdmJhcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjb2xvcjogI2YxZmFlZTtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi5uYXYtaW5uZXIge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5sZWZ0LW5hdixcXG4ucmlnaHQtbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xcbiAgICBnYXA6IDAuMjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAycmVtO1xcbiAgICBjb2xvcjogI2YxZmFlZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5uYXYgLmZhLXBsdXMge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xcbn1cXG5cXG4ubmF2IC5mYS1wbHVzOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg4ODtcXG59XFxuXFxuLm5hdiAuZmEtcGx1czphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbn1cXG5cXG4ubGVmdC1uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdhcDogMS41cmVtO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xcbn1cXG5cXG4ubGVmdC1uYXYgLmZhLWhvdXNlIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcXG59XFxuXFxuLmxlZnQtbmF2IC5mYS1iYXJzLFxcbi5mYS1iYXJzLXN0YWdnZXJlZCB7XFxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcXG59XFxuXFxuLm5hdiAuZmEtc29saWQge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogMC4ycyBlYXNlO1xcbn1cXG5cXG4ubGVmdC1uYXYgLmZhLXNvbGlkOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogNTAlO1xcbn1cXG5cXG4ubGVmdC1uYXYgLmZhLXNvbGlkOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxufVxcblxcbi5jZW50ZXItbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2RhdGVJbnB1dCB7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg4MTU3O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI4NXB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ3NpZGViYXIgbWFpbi1hcmVhJztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcXG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbGVmdDogMDtcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xcbiAgICB6LWluZGV4OiA1MDtcXG59XFxuXFxuLm1haW4tYXJlYSB7XFxuICAgIGdyaWQtYXJlYTogbWFpbi1hcmVhO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLm1lbnUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLm1lbnUgbGkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IC42cmVtO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5uYXYtYnV0dG9uczpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xcbn1cXG5cXG4ubWVudSBsaSBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tZW51IGxpIGkge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbnMuYWN0aXZlIHtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnRvZGF5IGkge1xcbiAgICBjb2xvcjogY3JpbXNvbjtcXG4gICAgb3BhY2l0eTogNTAlO1xcbn1cXG5cXG4uaW5ib3ggaSB7XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4uYWxsIGkge1xcbiAgICBvcGFjaXR5OiA3MCU7XFxufVxcblxcbi51cGNvbWluZyBpIHtcXG4gICAgY29sb3I6IGJsdWU7XFxuICAgIG9wYWNpdHk6IDUwJTtcXG59XFxuXFxuLmltcG9ydGFudCBpIHtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgb3BhY2l0eTogNTAlO1xcbn1cXG5cXG4ubGlzdHMgaSB7XFxuICAgIGNvbG9yOiBkYXJrb3JhbmdlO1xcbiAgICBvcGFjaXR5OiA2MCU7XFxufVxcblxcbi5tZW51IC5saXN0cyB7XFxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xcbn1cXG5cXG4ubGlzdHMgLmZhLWNoZXZyb24tdXAge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZy10b3A6IDAuMXJlbTtcXG59XFxuXFxuLmFjY29yZGlvbiB7XFxuICAgIHBhZGRpbmctbGVmdDogMi41cmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4ycyBlYXNlLW91dDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgbWF4LWhlaWdodDogMDtcXG5cXG59XFxuXFxuLmNyZWF0ZS1uZXcgaSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IC4yNXJlbTtcXG4gICAgb3BhY2l0eTogNjUlO1xcbn1cXG5cXG4uYWNjb3JkaW9uIC5jcmVhdGUtbmV3IHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XFxuICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmFjY29yZGlvbiAuY3JlYXRlLW5ldzpob3ZlciB7XFxuICAgIGNvbG9yOiAjM2E1YTQwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUlKTtcXG59XFxuXFxuLmFjY29yZGlvbiAubmV3LWxpc3RzIGkge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAuNXJlbTtcXG4gICAgZm9udC1zaXplOiAuNXJlbTtcXG4gICAgb3BhY2l0eTogNTAlO1xcbn1cXG5cXG4udGhlLW5ldy1saXN0cyB7XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udGhlLW5ldy1saXN0cyBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGhlLW5ldy1saXN0cyAudHJhc2gge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4udGhlLW5ldy1saXN0cyAudHJhc2ggLmZhLXRyYXNoLWNhbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IGdyZXk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udGhlLW5ldy1saXN0cyAudHJhc2ggLmZhLXRyYXNoLWNhbjpob3ZlciB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLm1haW4tY2hpbGQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogOTAlO1xcbn1cXG5cXG4ubWFpbi1hcmVhIC5tYWluLWNoaWxkIC50aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gICAgY29sb3I6ICM0NDQ7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ubWFpbi1hcmVhIC5tYWluLWNoaWxkIC50b2RvLXNlY3Rpb24ge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBwYWRkaW5nOiAycmVtIDByZW07XFxufVxcblxcbi5vdmVybGF5LFxcbi5vdmVybGF5MiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB6LWluZGV4OiA1MDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnBvcHVwLFxcbi5wb3B1cDIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5wb3B1cCAuZmEteG1hcmssXFxuLnBvcHVwMiAuZmEteG1hcmsge1xcbiAgICB0b3A6IDFyZW07XFxuICAgIHJpZ2h0OiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgICBjb2xvcjogIzExMTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ucG9wdXAgLnBvcHVwLXRvcCxcXG4ucG9wdXAyIC5wb3B1cC10b3AyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi5wb3B1cCAucG9wdXAtdG9wIHAge1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxufVxcblxcbi5wb3B1cDIgLnBvcHVwLXRvcDIgcCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG59XFxuXFxuLnBvcHVwIC5wb3B1cC1taWQsXFxuLnBvcHVwMiAucG9wdXAtbWlkIHtcXG4gICAgcGFkZGluZzogMHJlbSAxLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5wb3B1cCAucG9wdXAtbWlkIHAsXFxuLnBvcHVwMiAucG9wdXAtbWlkIHAge1xcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcXG59XFxuXFxuLnBvcHVwIC5wb3B1cC1taWQgaW5wdXQsXFxuLnBvcHVwMiAucG9wdXAtbWlkIGlucHV0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbn1cXG5cXG4ucG9wdXAgLnBvcHVwLW1pZCBpbnB1dDpob3ZlcixcXG4ucG9wdXAyIC5wb3B1cC1taWQgaW5wdXQ6aG92ZXIge1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjM2E1YTQwO1xcbn1cXG5cXG4ucG9wdXAgLnBvcHVwLW1pZCBpbnB1dDpmb2N1cyxcXG4ucG9wdXAyIC5wb3B1cC1taWQgaW5wdXQ6Zm9jdXMge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjM2E1YTQwO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ucG9wdXAgLnBvcHVwLWJvdCxcXG4ucG9wdXAyIC5wb3B1cC1ib3QyIHtcXG4gICAgcGFkZGluZzogMHJlbSAxLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGdhcDogLjVyZW07XFxufVxcblxcbi5wb3B1cCAucG9wdXAtYm90ICNjbG9zZSxcXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNjbG9zZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wb3B1cCAucG9wdXAtYm90ICNjbG9zZTpob3ZlcixcXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNjbG9zZTpob3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLnBvcHVwIC5wb3B1cC1ib3QgI2FkZGl0aW9uLFxcbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Qge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgcGFkZGluZzogLjVyZW0gMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg4MTU3O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNkZWxldGV0YXNrIHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIHBhZGRpbmc6IC41cmVtIDJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4ODE1NztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucG9wdXAgLnBvcHVwLWJvdCAjYWRkaXRpb246aG92ZXIsXFxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdDpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbi5wb3B1cCAucG9wdXAtYm90ICNhZGRpdGlvbjphY3RpdmUsXFxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdDphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4ucG9wdXAgLmZhLXhtYXJrOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4ucG9wdXAgLmZhLXhtYXJrOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5wb3B1cCAucG9wdXAtYm90ICNhZGRpdGlvbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbi5wb3B1cCAucG9wdXAtYm90ICNhZGRpdGlvbjphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4ucG9wdXAyIC5wb3B1cC10b3AyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLnBvcHVwMiAucG9wdXAtdG9wMiAuZmEtdHJpYW5nbGUtZXhjbGFtYXRpb24ge1xcbiAgICBmb250LXNpemU6IDQuNXJlbTtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgb3BhY2l0eTogNzAlO1xcbn1cXG5cXG4ucG9wdXAyIC5wb3B1cC1ib3QyIHtcXG4gICAgcGFkZGluZzogMHJlbSAxLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGdhcDogLjVyZW07XFxufVxcblxcbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Qge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4ODE1NztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0OmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdDphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4ucG9wdXAyIC5mYS14bWFyazpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLnBvcHVwMiAuZmEteG1hcms6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdDpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLnBvcHVwMiAucG9wdXAtdG9wMiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi5wb3B1cDIgLnBvcHVwLXRvcDIgLmZhLXRyaWFuZ2xlLWV4Y2xhbWF0aW9uIHtcXG4gICAgZm9udC1zaXplOiA0LjVyZW07XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIG9wYWNpdHk6IDcwJTtcXG59XFxuXFxuLnBvcHVwMiAucG9wdXAtYm90MiB7XFxuICAgIHBhZGRpbmc6IDByZW0gMS41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBnYXA6IC41cmVtO1xcbn1cXG5cXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0IHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODgxNTc7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBvcHVwMiAucG9wdXAtYm90MiAjZGVsZXRlbGlzdDpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLnBvcHVwMiAuZmEteG1hcms6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5wb3B1cDIgLmZhLXhtYXJrOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5wb3B1cDIgLnBvcHVwLWJvdDIgI2RlbGV0ZWxpc3Q6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4ucG9wdXAyIC5wb3B1cC1ib3QyICNkZWxldGVsaXN0OmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5vdmVybGF5MyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB6LWluZGV4OiA1MDA7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ucG9wdXAzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4ucG9wdXAzIC5mYS14bWFyayB7XFxuICAgIHRvcDogMXJlbTtcXG4gICAgcmlnaHQ6IDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICAgIGNvbG9yOiAjMTExO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5wb3B1cDMgLmZhLXhtYXJrOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4ucG9wdXAzIC5mYS14bWFyazphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4ucG9wdXAzIC5wb3B1cC10b3AzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4ucG9wdXAzIC5wb3B1cC10b3AzIHAge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnBvcHVwMyAucG9wdXAtbWlkMyB7XFxuICAgIHBhZGRpbmc6IDByZW0gMS41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLm1pZC1sZWZ0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubWlkLXJpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucG9wdXAzIC5wb3B1cC1taWQzIGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIHBhZGRpbmctdG9wOiAwLjJyZW07XFxufVxcblxcbi5wb3B1cDMgLnBvcHVwLW1pZDMgdGV4dGFyZWEge1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgcGFkZGluZzogMC4yNXJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi5wb3B1cDMgLnBvcHVwLW1pZDMgdGV4dGFyZWE6Zm9jdXMge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjM2E1YTQwO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ucG9wdXAzIC5wb3B1cC1taWQzIGlucHV0W3R5cGU9J3RleHQnXSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbn1cXG5cXG4ucG9wdXAzIC5wb3B1cC1taWQzIHNlbGVjdCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogMC4yNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4ucG9wdXAzIC5wb3B1cC1taWQzIC5taWQtcmlnaHQgI3Rhc2stZGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogMC4yNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucG9wdXAzIC5wb3B1cC1taWQzIGlucHV0OmhvdmVyIHtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzNhNWE0MDtcXG59XFxuXFxuLnBvcHVwMyAucG9wdXAtbWlkMyBpbnB1dDpmb2N1cyB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzYTVhNDA7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5wb3B1cDMgLnBvcHVwLWJvdDMge1xcbiAgICBwYWRkaW5nOiAwcmVtIDEuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgZ2FwOiAuNXJlbTtcXG59XFxuXFxuLnBvcHVwMyAucG9wdXAtYm90MyAjY2xvc2Uge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucG9wdXAzIC5wb3B1cC1ib3QzICNjbG9zZTpob3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLnBvcHVwMyAucG9wdXAtYm90MyAjYWRkdGFzayB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBwYWRkaW5nOiAuNXJlbSAycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODgxNTc7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2VkaXR0YXNrIHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIHBhZGRpbmc6IC41cmVtIDJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4ODE1NztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucG9wdXAzIC5wb3B1cC1ib3QzICNhZGR0YXNrOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLnBvcHVwMyAucG9wdXAtYm90MyAjYWRkdGFzazphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmVhY2gtdGFzay1zZWN0aW9uLXRvcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1sZWZ0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcXG4gICAgZ2FwOiAuNXJlbTtcXG59XFxuXFxuLnRhc2stbGVmdCAjdGFza3RpdGxlIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG1heC13aWR0aDogMzB2dztcXG59XFxuXFxuLnRhc2stcmlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4udGFzay1yaWdodCAudGFzay1pY29ucyB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stcmlnaHQgLnRhc2staWNvbnM6aG92ZXIge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG59XFxuXFxuLnRhc2stcmlnaHQgLnRhc2staWNvbnM6YWN0aXZlIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xcbn1cXG5cXG4uZWFjaC10YXNrLXNlY3Rpb24tYm90IHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG4gICAgbWFyZ2luLXRvcDogLS43NXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogOTklO1xcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uZWFjaC10YXNrLXNlY3Rpb24tYm90IHAge1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4uYm90LXJpZ2h0LFxcbi5ib3QtbGVmdCB7XFxuICAgIHdpZHRoOiA0OSU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnJpZ2h0LXRvcCxcXG4ucmlnaHQtYm90LFxcbi5sZWZ0LXRvcCxcXG4ubGVmdC1ib3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IC43NXJlbTtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ucmlnaHQtdG9wLFxcbi5sZWZ0LXRvcCB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmVhY2gtdGFzay1zZWN0aW9uLWJvdCBwLmJvbGRlbiB7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5yaWdodC10b3AgI2xvbmcsXFxuLmxlZnQtdG9wICNsb25nIHtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uZmEtZmxhZyB7XFxuICAgIG9wYWNpdHk6IDcwJTtcXG4gICAgei1pbmRleDogMDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIC5wb3B1cCB7XFxuICAgICAgICBtYXgtd2lkdGg6IDkwJTtcXG4gICAgfVxcblxcbiAgICAjZGF0ZUlucHV0IHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLnBvcHVwMiB7XFxuICAgICAgICBtYXgtd2lkdGg6IDkwJTtcXG4gICAgfVxcblxcbiAgICAucG9wdXAzIHtcXG4gICAgICAgIG1heC13aWR0aDogOTAlO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAzMDBweCkge1xcbiAgICAubWFpbi1hcmVhIC5tYWluLWNoaWxkIC50b2RvLXNlY3Rpb24ge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgLm1haW4tYXJlYSAubWFpbi1jaGlsZCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAubWFpbi1hcmVhIC5tYWluLWNoaWxkIC50aXRsZSB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMHJlbTtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHJlbTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gICAgLm1haW4tYXJlYSAubWFpbi1jaGlsZCAudG9kby1zZWN0aW9uIHtcXG4gICAgICAgIHdpZHRoOiA5NSU7XFxuICAgIH1cXG5cXG4gICAgLm1haW4tYXJlYSAubWFpbi1jaGlsZCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAubWFpbi1hcmVhIC5tYWluLWNoaWxkIC50aXRsZSB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMHJlbTtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHJlbTtcXG4gICAgfVxcblxcbiAgICAuc2lkZWJhciB7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICBsZWZ0OiAtMTAwJTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgLnNpZGViYXIge1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgbGVmdDogLTEwMCU7XFxuICAgIH1cXG5cXG4gICAgLm1haW4ge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnIG1haW4tYXJlYSc7XFxuICAgIH1cXG5cXG4gICAgLm5hdi1pbm5lciB7XFxuICAgICAgICB3aWR0aDogOTUlO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY2xhc3MgVG9kbyB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaWQgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZCB8fCB1bmlxdWVJZCgpO1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRvZG9MaXN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBpZCA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkIHx8IHVuaXF1ZUlkKCk7XG4gICAgICAgIHRoaXMudG9kb3MgPSBbXTtcbiAgICB9XG5cbiAgICBhZGRUb2RvKHRvZG8pIHtcbiAgICAgICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21JZCgpIHtcbiAgICBsZXQgaWQgPSAnJztcbiAgICBjb25zdCBkaWdpdHMgPSAnMDEyMzQ1Njc4OSc7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRpZ2l0cy5sZW5ndGgpO1xuICAgICAgICBpZCArPSBkaWdpdHNbcmFuZG9tSW5kZXhdO1xuICAgIH1cblxuICAgIHJldHVybiBpZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaXF1ZUlkKCkge1xuICAgIGNvbnN0IHVzZWRJZHMgPSBnZXRVc2VkSWRzKCk7XG5cbiAgICBpZiAodXNlZElkcy5sZW5ndGggPj0gMTAwMDAwMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBbGwgcG9zc2libGUgSURzIGhhdmUgYmVlbiB1c2VkLlwiKTtcbiAgICB9XG5cbiAgICBsZXQgbmV3SWQ7XG4gICAgZG8ge1xuICAgICAgICBuZXdJZCA9IGdlbmVyYXRlUmFuZG9tSWQoKTtcbiAgICB9IHdoaWxlICh1c2VkSWRzLmluY2x1ZGVzKG5ld0lkKSk7XG5cbiAgICB1c2VkSWRzLnB1c2gobmV3SWQpO1xuICAgIHNhdmVVc2VkSWRzKHVzZWRJZHMpO1xuICAgIHJldHVybiBuZXdJZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZWRJZHMoKSB7XG4gICAgY29uc3QgdXNlZElkc0pTT04gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlZElkcycpO1xuICAgIHJldHVybiB1c2VkSWRzSlNPTiA/IEpTT04ucGFyc2UodXNlZElkc0pTT04pIDogW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlVXNlZElkcyh1c2VkSWRzKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZWRJZHMnLCBKU09OLnN0cmluZ2lmeSh1c2VkSWRzKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb2RvTGlzdHMoKSB7XG4gICAgY29uc3QgdG9kb0xpc3RzSlNPTiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvTGlzdHMnKTtcbiAgICByZXR1cm4gdG9kb0xpc3RzSlNPTiA/IEpTT04ucGFyc2UodG9kb0xpc3RzSlNPTikgOiBbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVUb2RvTGlzdHModG9kb0xpc3RzKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9MaXN0cycsIEpTT04uc3RyaW5naWZ5KHRvZG9MaXN0cykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9kb0xpc3RCeUlkKGlkKSB7XG4gICAgY29uc3QgdG9kb0xpc3RzID0gZ2V0VG9kb0xpc3RzKCk7XG4gICAgcmV0dXJuIHRvZG9MaXN0cy5maW5kKHRvZG9MaXN0ID0+IHRvZG9MaXN0LmlkID09PSBpZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kVG9kb0J5SWQodG9kb0lkKSB7XG4gICAgY29uc3QgdG9kb0xpc3RzID0gZ2V0VG9kb0xpc3RzKCk7XG5cbiAgICBmb3IgKGNvbnN0IHRvZG9MaXN0IG9mIHRvZG9MaXN0cykge1xuICAgICAgICBjb25zdCBmb3VuZFRvZG8gPSB0b2RvTGlzdC50b2Rvcy5maW5kKHRvZG8gPT4gdG9kby5pZCA9PT0gdG9kb0lkKTtcbiAgICAgICAgaWYgKGZvdW5kVG9kbykge1xuICAgICAgICAgICAgcmV0dXJuIGZvdW5kVG9kbztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xufSIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGNyZWF0ZVdlYnBhZ2UgZnJvbSAnLi93ZWJwYWdlJztcblxuY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5jcmVhdGVXZWJwYWdlKClcblxuIiwiaW1wb3J0IHsgVG9kb0xpc3QsIFRvZG8sIHNhdmVUb2RvTGlzdHMsIGdldFRvZG9MaXN0cywgZ2V0VG9kb0xpc3RCeUlkLCBmaW5kVG9kb0J5SWQsIGdldFVzZWRJZHMsIHNhdmVVc2VkSWRzIH0gZnJvbSBcIi4vYXBwXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oaWQpIHtcbiAgICBjb25zdCBtYWluQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWFyZWEnKTtcbiAgICBpZiAobWFpbkFyZWEpIHtcbiAgICAgICAgbWFpbkFyZWEucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbi1hcmVhJyk7XG5cbiAgICBjb25zdCBtYWluQ2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluQ2hpbGQuY2xhc3NMaXN0LmFkZCgnbWFpbi1jaGlsZCcpO1xuXG4gICAgY29uc3QgdG9kb0xpc3QgPSBnZXRUb2RvTGlzdEJ5SWQoaWQpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaDEuY2xhc3NMaXN0LmFkZCgndG9kby10aXRsZScpO1xuICAgIGgxLnRleHRDb250ZW50ID0gJyc7XG4gICAgaDEudGV4dENvbnRlbnQgPSB0b2RvTGlzdC5uYW1lO1xuXG4gICAgdGl0bGUuYXBwZW5kQ2hpbGQoaDEpO1xuXG4gICAgY29uc3QgdG9kb1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLXNlY3Rpb24nKTtcblxuICAgIG1haW5DaGlsZC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgbWFpbkNoaWxkLmFwcGVuZENoaWxkKHRvZG9TZWN0aW9uKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQobWFpbkNoaWxkKTtcblxuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKG1haW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVGFza3MoKSB7XG4gICAgY29uc3QgbmF2QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtYnV0dG9ucycpO1xuICAgIGxldCBhY3RpdmVOYXZCdXR0b24gPSBudWxsO1xuXG4gICAgZm9yIChjb25zdCBidXR0b24gb2YgbmF2QnV0dG9ucykge1xuICAgICAgICBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgIGFjdGl2ZU5hdkJ1dHRvbiA9IGJ1dHRvbjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YUxpc3RJZCA9IGFjdGl2ZU5hdkJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1pZCcpO1xuXG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLXNlY3Rpb24nKTtcbiAgICB0YXNrQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3QgdG9kb0xpc3RzID0gZ2V0VG9kb0xpc3RzKCk7XG4gICAgbGV0IHRvZG9zVG9SZW5kZXIgPSBbXTtcblxuICAgIGlmIChkYXRhTGlzdElkID09PSAnMTExMTExJykge1xuICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zdWJzdHIoMCwgMTApO1xuICAgICAgICB0b2Rvc1RvUmVuZGVyID0gdG9kb0xpc3RzLmZsYXRNYXAodG9kb0xpc3QgPT5cbiAgICAgICAgICAgIHRvZG9MaXN0LnRvZG9zLmZpbHRlcih0b2RvID0+IHRvZG8uZHVlRGF0ZSA9PT0gdG9kYXkpXG4gICAgICAgICk7XG4gICAgfSBlbHNlIGlmIChkYXRhTGlzdElkID09PSAnMjIyMjIyJykge1xuICAgICAgICBjb25zdCBuZXh0V2VlayA9IG5ldyBEYXRlKCk7XG4gICAgICAgIG5leHRXZWVrLnNldERhdGUobmV4dFdlZWsuZ2V0RGF0ZSgpICsgNyk7XG4gICAgICAgIGNvbnN0IG5leHRXZWVrRm9ybWF0dGVkID0gbmV4dFdlZWsudG9JU09TdHJpbmcoKS5zdWJzdHIoMCwgMTApO1xuICAgICAgICB0b2Rvc1RvUmVuZGVyID0gdG9kb0xpc3RzLmZsYXRNYXAodG9kb0xpc3QgPT5cbiAgICAgICAgICAgIHRvZG9MaXN0LnRvZG9zLmZpbHRlcihcbiAgICAgICAgICAgICAgICB0b2RvID0+XG4gICAgICAgICAgICAgICAgICAgIHRvZG8uZHVlRGF0ZSA8PSBuZXh0V2Vla0Zvcm1hdHRlZCAmJiB0b2RvLmR1ZURhdGUgPj0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnN1YnN0cigwLCAxMClcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGRhdGFMaXN0SWQgPT09ICczMzMzMzMnKSB7XG4gICAgICAgIHRvZG9zVG9SZW5kZXIgPSB0b2RvTGlzdHMuZmxhdE1hcCh0b2RvTGlzdCA9PiB0b2RvTGlzdC50b2Rvcyk7XG4gICAgfSBlbHNlIGlmIChkYXRhTGlzdElkID09PSAnNDQ0NDQ0Jykge1xuICAgICAgICB0b2Rvc1RvUmVuZGVyID0gdG9kb0xpc3RzLmZsYXRNYXAodG9kb0xpc3QgPT5cbiAgICAgICAgICAgIHRvZG9MaXN0LnRvZG9zLmZpbHRlcih0b2RvID0+IHRvZG8ucHJpb3JpdHkgPT09ICdoaWdoJylcbiAgICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzZWxlY3RlZERhdGFMaXN0SWQgPSBhY3RpdmVOYXZCdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWxpc3QtaWQnKTtcbiAgICAgICAgdG9kb3NUb1JlbmRlciA9IGdldFRvZG9MaXN0QnlJZChzZWxlY3RlZERhdGFMaXN0SWQpPy50b2RvcyB8fCBbXTtcbiAgICB9XG5cbiAgICB0b2Rvc1RvUmVuZGVyLnNvcnQoKGEsIGIpID0+IG5ldyBEYXRlKGEuZHVlRGF0ZSkgLSBuZXcgRGF0ZShiLmR1ZURhdGUpKTtcblxuICAgIHRvZG9zVG9SZW5kZXIuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgY3JlYXRlVGFzayh0b2RvLnRpdGxlLCB0b2RvLmR1ZURhdGUsIHRvZG8uZGVzY3JpcHRpb24sIHRvZG8ucHJpb3JpdHksIHRvZG8uaWQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbWFpbkNoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY2hpbGQnKTtcbiAgICBjb25zdCB0YXNrcyA9IG1haW5DaGlsZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlYWNoLXRhc2stc2VjdGlvbi10b3AnKTtcbiAgICBmb3IgKGNvbnN0IHRhc2sgb2YgdGFza3MpIHtcbiAgICAgICAgdGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tQYXJlbnQgPSB0YXNrLnBhcmVudE5vZGU7XG4gICAgICAgICAgICBjb25zdCB0YXNrYm90ID0gdGFza1BhcmVudC5xdWVyeVNlbGVjdG9yKCcuZWFjaC10YXNrLXNlY3Rpb24tYm90Jyk7XG4gICAgICAgICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0YXNrYm90KTtcbiAgICAgICAgICAgIGlmIChjb21wdXRlZFN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgICAgICAgIHRhc2tib3Quc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tcHV0ZWRTdHlsZS5kaXNwbGF5ID09PSAnZmxleCcpIHtcbiAgICAgICAgICAgICAgICB0YXNrYm90LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZ2VuZXJhdGVkQmlucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Rhc2stZGVsZXRlcicpO1xuICAgIGZvciAoY29uc3QgYmluIG9mIGdlbmVyYXRlZEJpbnMpIHtcbiAgICAgICAgYmluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgY29uc3QgdGFza0lkID0gYmluLmdldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJyk7XG4gICAgICAgICAgICBkZWxldGVUYXNrUG9wdXAoKCkgPT4gZGVsZXRlVGFzayh0YXNrSWQpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZWRpdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YXNrLWVkaXRvcicpO1xuICAgIGZvciAoY29uc3QgZWRpdG9yIG9mIGVkaXRzKSB7XG4gICAgICAgIGVkaXRvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIGNvbnN0IHRvZG8gPSBmaW5kVG9kb0J5SWQoZWRpdG9yLmdldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJykpO1xuICAgICAgICAgICAgZWRpdFRhc2tQb3B1cCh0b2RvLnRpdGxlLCB0b2RvLmRlc2NyaXB0aW9uLCB0b2RvLmR1ZURhdGUsIHRvZG8ucHJpb3JpdHksIHRvZG8uaWQpXG4gICAgICAgICAgICBjb25zdCB0b2RvTGlzdHMgPSBnZXRUb2RvTGlzdHMoKTtcbiAgICAgICAgICAgIGNyZWF0ZUxpc3RPcHRpb25zKHRvZG9MaXN0cywgZGF0YUxpc3RJZCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgcHJpb3JpdHlJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLXByaW9yaXR5Jyk7XG4gICAgcHJpb3JpdHlJY29ucy5mb3JFYWNoKGljb24gPT4ge1xuICAgICAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9JZCA9IGljb24uZ2V0QXR0cmlidXRlKCdkYXRhLWxpc3QtaWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9MaXN0cyA9IGdldFRvZG9MaXN0cygpO1xuXG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ1RvZG8gPSBmaW5kVG9kb0J5SWQodG9kb0lkKVxuXG4gICAgICAgICAgICBjb25zdCB0aGVUb2RvUHJpb3JpdHkgPSBleGlzdGluZ1RvZG8ucHJpb3JpdHlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoZVRvZG9Qcmlvcml0eSlcblxuICAgICAgICAgICAgbGV0IG5ld1ByaW9yaXR5O1xuICAgICAgICAgICAgaWYgKHRoZVRvZG9Qcmlvcml0eSA9PT0gJ2xvdycpIHtcbiAgICAgICAgICAgICAgICBuZXdQcmlvcml0eSA9ICdtZWRpdW0nO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGVUb2RvUHJpb3JpdHkgPT09ICdtZWRpdW0nKSB7XG4gICAgICAgICAgICAgICAgbmV3UHJpb3JpdHkgPSAnaGlnaCc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoZVRvZG9Qcmlvcml0eSA9PT0gJ2hpZ2gnKSB7XG4gICAgICAgICAgICAgICAgbmV3UHJpb3JpdHkgPSAnbG93JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdG9kb1ByaW9yaXR5ID0gdXBkYXRlVG9kb1ByaW9yaXR5KHRvZG9MaXN0cywgdG9kb0lkLCBuZXdQcmlvcml0eSlcblxuICAgICAgICAgICAgaWYgKHRvZG9Qcmlvcml0eSkge1xuICAgICAgICAgICAgICAgIHNhdmVUb2RvTGlzdHModG9kb0xpc3RzKTtcbiAgICAgICAgICAgICAgICByZW5kZXJUYXNrcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuXG4gICAgY29uc3QgY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWNoZWNrJylcbiAgICBmb3IgKGNvbnN0IGNoZWNrYm94IG9mIGNoZWNrYm94ZXMpIHtcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgY29uc3QgdGFza0lkID0gY2hlY2tib3guZ2V0QXR0cmlidXRlKCdkYXRhLWxpc3QtaWQnKTtcbiAgICAgICAgICAgIGRlbGV0ZVRhc2sodGFza0lkKVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlVG9kb1ByaW9yaXR5KHRvZG9MaXN0cywgdG9kb0lkLCBuZXdQcmlvcml0eSkge1xuICAgIGZvciAoY29uc3QgdG9kb0xpc3Qgb2YgdG9kb0xpc3RzKSB7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nVG9kb0luZGV4ID0gdG9kb0xpc3QudG9kb3MuZmluZEluZGV4KHRvZG8gPT4gdG9kby5pZCA9PT0gdG9kb0lkKTtcbiAgICAgICAgaWYgKGV4aXN0aW5nVG9kb0luZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdUb2RvID0gdG9kb0xpc3QudG9kb3NbZXhpc3RpbmdUb2RvSW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlZFRvZG8gPSB7XG4gICAgICAgICAgICAgICAgLi4uZXhpc3RpbmdUb2RvLFxuICAgICAgICAgICAgICAgIHByaW9yaXR5OiBuZXdQcmlvcml0eVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdG9kb0xpc3QudG9kb3Muc3BsaWNlKGV4aXN0aW5nVG9kb0luZGV4LCAxLCB1cGRhdGVkVG9kbyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlVGFzayh0YXNrVGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgaWQpIHtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tc2VjdGlvbicpXG5cbiAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrRGl2LmNsYXNzTmFtZSA9IFwidGFzay1jb250YWluZXJcIjtcblxuICAgIGNvbnN0IHRhc2tTZWN0aW9uVG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrU2VjdGlvblRvcC5jbGFzc05hbWUgPSBcImVhY2gtdGFzay1zZWN0aW9uLXRvcFwiO1xuXG5cbiAgICBjb25zdCB0YXNrTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0xlZnQuY2xhc3NOYW1lID0gXCJ0YXNrLWxlZnRcIjtcblxuICAgIGNvbnN0IHRhc2tDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0YXNrQ2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICB0YXNrQ2hlY2tib3guY2xhc3NMaXN0LmFkZCgndGFzay1jaGVjaycpO1xuICAgIHRhc2tDaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1pZCcsIGlkKVxuICAgIHRhc2tMZWZ0LmFwcGVuZENoaWxkKHRhc2tDaGVja2JveCk7XG5cbiAgICBjb25zdCB0YXNrVGl0bGVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGFza1RpdGxlUC5pZCA9IFwidGFza3RpdGxlXCI7XG4gICAgdGFza1RpdGxlUC50ZXh0Q29udGVudCA9IHRhc2tUaXRsZTtcbiAgICB0YXNrTGVmdC5hcHBlbmRDaGlsZCh0YXNrVGl0bGVQKTtcblxuICAgIHRhc2tTZWN0aW9uVG9wLmFwcGVuZENoaWxkKHRhc2tMZWZ0KTtcblxuICAgIGNvbnN0IHRhc2tSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza1JpZ2h0LmNsYXNzTmFtZSA9IFwidGFzay1yaWdodFwiO1xuXG4gICAgY29uc3QgZWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICBlZGl0SWNvbi5jbGFzc05hbWUgPSBcImZhLXJlZ3VsYXIgZmEtcGVuLXRvLXNxdWFyZSB0YXNrLWljb25zIHRhc2stZWRpdG9yXCI7XG4gICAgZWRpdEljb24uc2V0QXR0cmlidXRlKCdkYXRhLWxpc3QtaWQnLCBpZClcbiAgICBlZGl0SWNvbi50aXRsZSA9IFwiRWRpdCB0YXNrXCI7XG4gICAgdGFza1JpZ2h0LmFwcGVuZENoaWxkKGVkaXRJY29uKTtcblxuICAgIGNvbnN0IHByaW9yaXR5SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIHByaW9yaXR5SWNvbi5jbGFzc05hbWUgPSBcImZhLXNvbGlkIGZhLWZsYWcgdGFzay1pY29ucyB0YXNrLXByaW9yaXR5XCI7XG4gICAgcHJpb3JpdHlJY29uLnNldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJywgaWQpO1xuICAgIHByaW9yaXR5SWNvbi50aXRsZSA9IFwiQ2hhbmdlIHByaW9yaXR5XCI7XG4gICAgcHJpb3JpdHlJY29uLnN0eWxlLmNvbG9yID0gKHByaW9yaXR5ID09PSAnaGlnaCcpID8gJ3JlZCcgOiAocHJpb3JpdHkgPT09ICdtZWRpdW0nKSA/ICdkYXJrb3JhbmdlJyA6ICd0ZWFsJztcblxuICAgIHRhc2tSaWdodC5hcHBlbmRDaGlsZChwcmlvcml0eUljb24pO1xuXG4gICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIGRlbGV0ZUljb24uY2xhc3NOYW1lID0gXCJmYS1zb2xpZCBmYS10cmFzaC1jYW4gdGFzay1pY29ucyB0YXNrLWRlbGV0ZXJcIjtcbiAgICBkZWxldGVJY29uLnNldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJywgaWQpXG4gICAgZGVsZXRlSWNvbi50aXRsZSA9IFwiRGVsZXRlIHRhc2tcIjtcbiAgICB0YXNrUmlnaHQuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XG5cbiAgICB0YXNrU2VjdGlvblRvcC5hcHBlbmRDaGlsZCh0YXNrUmlnaHQpO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza1NlY3Rpb25Ub3ApO1xuXG4gICAgY29uc3QgdGFza1NlY3Rpb25Cb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tTZWN0aW9uQm90LmNsYXNzTmFtZSA9IFwiZWFjaC10YXNrLXNlY3Rpb24tYm90XCI7XG5cbiAgICBjb25zdCBib3RMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBib3RMZWZ0LmNsYXNzTmFtZSA9IFwiYm90LWxlZnRcIjtcblxuICAgIGNvbnN0IGxlZnRUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxlZnRUb3AuY2xhc3NOYW1lID0gXCJsZWZ0LXRvcFwiO1xuXG4gICAgY29uc3QgdGl0bGVCb2xkZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0aXRsZUJvbGRlbi5jbGFzc05hbWUgPSBcImJvbGRlblwiO1xuICAgIHRpdGxlQm9sZGVuLnRleHRDb250ZW50ID0gXCJUaXRsZTpcIjtcbiAgICBsZWZ0VG9wLmFwcGVuZENoaWxkKHRpdGxlQm9sZGVuKTtcblxuICAgIGNvbnN0IHRpdGxlUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRpdGxlUC50ZXh0Q29udGVudCA9IHRhc2tUaXRsZTtcbiAgICB0aXRsZVAuc2V0QXR0cmlidXRlKCdpZCcsICdsb25nJylcbiAgICBsZWZ0VG9wLmFwcGVuZENoaWxkKHRpdGxlUCk7XG5cbiAgICBib3RMZWZ0LmFwcGVuZENoaWxkKGxlZnRUb3ApO1xuXG4gICAgY29uc3QgbGVmdEJvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGVmdEJvdC5jbGFzc05hbWUgPSBcImxlZnQtYm90XCI7XG5cbiAgICBjb25zdCBkdWVEYXRlQm9sZGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZHVlRGF0ZUJvbGRlbi5jbGFzc05hbWUgPSBcImJvbGRlblwiO1xuICAgIGR1ZURhdGVCb2xkZW4udGV4dENvbnRlbnQgPSBcIkR1ZSBkYXRlOlwiO1xuICAgIGxlZnRCb3QuYXBwZW5kQ2hpbGQoZHVlRGF0ZUJvbGRlbik7XG5cbiAgICBjb25zdCBkdWVEYXRlUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGR1ZURhdGVQLnRleHRDb250ZW50ID0gZHVlRGF0ZTtcbiAgICBsZWZ0Qm90LmFwcGVuZENoaWxkKGR1ZURhdGVQKTtcblxuICAgIGJvdExlZnQuYXBwZW5kQ2hpbGQobGVmdEJvdCk7XG4gICAgdGFza1NlY3Rpb25Cb3QuYXBwZW5kQ2hpbGQoYm90TGVmdCk7XG5cbiAgICBjb25zdCBib3RSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm90UmlnaHQuY2xhc3NOYW1lID0gXCJib3QtcmlnaHRcIjtcblxuICAgIGNvbnN0IHJpZ2h0VG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByaWdodFRvcC5jbGFzc05hbWUgPSBcInJpZ2h0LXRvcFwiO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25Cb2xkZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkZXNjcmlwdGlvbkJvbGRlbi5jbGFzc05hbWUgPSBcImJvbGRlblwiO1xuICAgIGRlc2NyaXB0aW9uQm9sZGVuLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjpcIjtcbiAgICByaWdodFRvcC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkJvbGRlbik7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvblAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkZXNjcmlwdGlvblAudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgICBkZXNjcmlwdGlvblAuc2V0QXR0cmlidXRlKCdpZCcsICdsb25nJylcbiAgICByaWdodFRvcC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblApO1xuXG4gICAgYm90UmlnaHQuYXBwZW5kQ2hpbGQocmlnaHRUb3ApO1xuXG4gICAgY29uc3QgcmlnaHRCb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJpZ2h0Qm90LmNsYXNzTmFtZSA9IFwicmlnaHQtYm90XCI7XG5cbiAgICBjb25zdCBwcmlvcml0eUJvbGRlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByaW9yaXR5Qm9sZGVuLmNsYXNzTmFtZSA9IFwiYm9sZGVuXCI7XG4gICAgcHJpb3JpdHlCb2xkZW4udGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OlwiO1xuICAgIHJpZ2h0Qm90LmFwcGVuZENoaWxkKHByaW9yaXR5Qm9sZGVuKTtcblxuICAgIGNvbnN0IHByaW9yaXR5UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByaW9yaXR5UC50ZXh0Q29udGVudCA9IHByaW9yaXR5O1xuICAgIHJpZ2h0Qm90LmFwcGVuZENoaWxkKHByaW9yaXR5UCk7XG5cbiAgICBib3RSaWdodC5hcHBlbmRDaGlsZChyaWdodEJvdCk7XG4gICAgdGFza1NlY3Rpb25Cb3QuYXBwZW5kQ2hpbGQoYm90UmlnaHQpO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza1NlY3Rpb25Cb3QpO1xuXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbn1cblxuZnVuY3Rpb24gZWRpdFRhc2tQb3B1cCh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBpZCkge1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvdmVybGF5LmNsYXNzTmFtZSA9ICdvdmVybGF5Myc7XG5cbiAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcHVwLmNsYXNzTmFtZSA9ICdwb3B1cDMnO1xuXG4gICAgY29uc3QgcG9wdXBUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3B1cFRvcC5jbGFzc05hbWUgPSAncG9wdXAtdG9wMyc7XG5cbiAgICBjb25zdCB0aXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGl0bGVUZXh0LnRleHRDb250ZW50ID0gJ0VkaXQgVGFzayc7XG4gICAgcG9wdXBUb3AuYXBwZW5kQ2hpbGQodGl0bGVUZXh0KTtcblxuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIGNsb3NlQnV0dG9uLmNsYXNzTmFtZSA9ICdmYS1zb2xpZCBmYS14bWFyayc7XG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU92ZXJsYXkpO1xuICAgIHBvcHVwVG9wLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcblxuICAgIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwVG9wKTtcblxuICAgIGNvbnN0IHBvcHVwTWlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9wdXBNaWQuY2xhc3NOYW1lID0gJ3BvcHVwLW1pZDMnO1xuXG4gICAgY29uc3QgbWlkTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1pZExlZnQuY2xhc3NOYW1lID0gJ21pZC1sZWZ0JztcblxuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAnVGl0bGU6JztcbiAgICBtaWRMZWZ0LmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGl0bGVJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIHRpdGxlSW5wdXQubWF4TGVuZ3RoID0gNjA7XG4gICAgdGl0bGVJbnB1dC5pZCA9ICd0YXNrLXRpdGxlJztcbiAgICB0aXRsZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICB0aXRsZUlucHV0LnZhbHVlID0gdGl0bGU7XG4gICAgbWlkTGVmdC5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICAgIGNvbnN0IHRpdGxlQWxlcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGl0bGVBbGVydC5jbGFzc0xpc3QuYWRkKCd0aXRsZS1hbGVydCcpO1xuICAgIHRpdGxlQWxlcnQudGV4dENvbnRlbnQgPSAnVGl0bGUgaXMgcmVxdWlyZWQuJztcbiAgICB0aXRsZUFsZXJ0LnN0eWxlLmNvbG9yID0gJ3JlZCc7XG4gICAgdGl0bGVBbGVydC5zdHlsZS5tYXJnaW5Ub3AgPSAnJztcbiAgICB0aXRsZUFsZXJ0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgbWlkTGVmdC5hcHBlbmRDaGlsZCh0aXRsZUFsZXJ0KVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbjonO1xuICAgIG1pZExlZnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvblRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBkZXNjcmlwdGlvblRleHRhcmVhLmlkID0gJ2Rlc2NyaXB0aW9uJztcbiAgICBkZXNjcmlwdGlvblRleHRhcmVhLmNvbHMgPSAzMDtcbiAgICBkZXNjcmlwdGlvblRleHRhcmVhLnJvd3MgPSA0O1xuICAgIGRlc2NyaXB0aW9uVGV4dGFyZWEubWF4TGVuZ3RoID0gMTgwO1xuICAgIGRlc2NyaXB0aW9uVGV4dGFyZWEudmFsdWUgPSBkZXNjcmlwdGlvbjtcbiAgICBtaWRMZWZ0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGV4dGFyZWEpO1xuXG4gICAgcG9wdXBNaWQuYXBwZW5kQ2hpbGQobWlkTGVmdCk7XG5cbiAgICBjb25zdCBtaWRSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1pZFJpZ2h0LmNsYXNzTmFtZSA9ICdtaWQtcmlnaHQnO1xuXG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIGRhdGU6JztcbiAgICBtaWRSaWdodC5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuXG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgICBkYXRlSW5wdXQuaWQgPSAndGFzay1kYXRlJztcbiAgICBkYXRlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIGRhdGVJbnB1dC52YWx1ZSA9IGRhdGU7XG4gICAgbWlkUmlnaHQuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblxuICAgIGNvbnN0IGRhdGVBbGVydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkYXRlQWxlcnQuY2xhc3NMaXN0LmFkZCgnZGF0ZS1hbGVydCcpO1xuICAgIGRhdGVBbGVydC50ZXh0Q29udGVudCA9ICdEYXRlIGlzIHJlcXVpcmVkLic7XG4gICAgZGF0ZUFsZXJ0LnN0eWxlLmNvbG9yID0gJ3JlZCc7XG4gICAgZGF0ZUFsZXJ0LnN0eWxlLm1hcmdpblRvcCA9ICcnO1xuICAgIGRhdGVBbGVydC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgbWlkUmlnaHQuYXBwZW5kQ2hpbGQoZGF0ZUFsZXJ0KTtcblxuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6JztcbiAgICBtaWRSaWdodC5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcblxuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgcHJpb3JpdHlTZWxlY3QuaWQgPSAncHJpb3JpdHknO1xuICAgIHByaW9yaXR5U2VsZWN0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBbJ0xvdycsICdNZWRpdW0nLCAnSGlnaCddLmZvckVhY2gocHJpb3JpdHlUZXh0ID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHByaW9yaXR5VGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcmlvcml0eVRleHQ7XG4gICAgICAgIGlmIChwcmlvcml0eVRleHQudG9Mb3dlckNhc2UoKSA9PT0gcHJpb3JpdHkpIHtcbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KTtcbiAgICBtaWRSaWdodC5hcHBlbmRDaGlsZChwcmlvcml0eVNlbGVjdCk7XG5cbiAgICBjb25zdCBwcmlvcml0eUFsZXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHByaW9yaXR5QWxlcnQuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktYWxlcnQnKTtcbiAgICBwcmlvcml0eUFsZXJ0LnRleHRDb250ZW50ID0gJ1ByaW9yaXR5IGlzIHJlcXVpcmVkLic7XG4gICAgcHJpb3JpdHlBbGVydC5zdHlsZS5jb2xvciA9ICdyZWQnO1xuICAgIHByaW9yaXR5QWxlcnQuc3R5bGUubWFyZ2luVG9wID0gJyc7XG4gICAgcHJpb3JpdHlBbGVydC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgbWlkUmlnaHQuYXBwZW5kQ2hpbGQocHJpb3JpdHlBbGVydCk7XG5cbiAgICBjb25zdCBsaXN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxpc3RMYWJlbC50ZXh0Q29udGVudCA9ICdMaXN0Oic7XG4gICAgbWlkUmlnaHQuYXBwZW5kQ2hpbGQobGlzdExhYmVsKTtcblxuICAgIGNvbnN0IGxpc3RTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBsaXN0U2VsZWN0LmlkID0gJ3RoZWxpc3QnO1xuICAgIGxpc3RTZWxlY3QucmVxdWlyZWQgPSB0cnVlO1xuXG4gICAgbWlkUmlnaHQuYXBwZW5kQ2hpbGQobGlzdFNlbGVjdCk7XG5cbiAgICBjb25zdCBsaXN0QWxlcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbGlzdEFsZXJ0LmNsYXNzTGlzdC5hZGQoJ2xpc3QtYWxlcnQnKTtcbiAgICBsaXN0QWxlcnQudGV4dENvbnRlbnQgPSAnTGlzdCBpcyByZXF1aXJlZC4nO1xuICAgIGxpc3RBbGVydC5zdHlsZS5jb2xvciA9ICdyZWQnO1xuICAgIGxpc3RBbGVydC5zdHlsZS5tYXJnaW5Ub3AgPSAnJztcbiAgICBsaXN0QWxlcnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIG1pZFJpZ2h0LmFwcGVuZENoaWxkKGxpc3RBbGVydCk7XG5cbiAgICBwb3B1cE1pZC5hcHBlbmRDaGlsZChtaWRSaWdodCk7XG5cbiAgICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cE1pZCk7XG5cbiAgICBjb25zdCBwb3B1cEJvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcHVwQm90LmNsYXNzTmFtZSA9ICdwb3B1cC1ib3QzJztcblxuICAgIGNvbnN0IHRleHRDbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRleHRDbG9zZUJ1dHRvbi5pZCA9ICdjbG9zZSc7XG4gICAgdGV4dENsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gJ0Nsb3NlJztcbiAgICB0ZXh0Q2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU92ZXJsYXkpO1xuICAgIHBvcHVwQm90LmFwcGVuZENoaWxkKHRleHRDbG9zZUJ1dHRvbik7XG5cbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkVGFza0J1dHRvbi5pZCA9ICdlZGl0dGFzayc7XG4gICAgYWRkVGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdFZGl0IFRhc2snO1xuICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhbGlkYXRlQW5kRWRpdFRhc2soaWQpO1xuICAgIH0pXG4gICAgcG9wdXBCb3QuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XG5cbiAgICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cEJvdCk7XG5cbiAgICBvdmVybGF5LmFwcGVuZENoaWxkKHBvcHVwKTtcblxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChvdmVybGF5KTtcbn1cblxuZnVuY3Rpb24gY2xvc2VPdmVybGF5KCkge1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheTMnKTtcbiAgICBvdmVybGF5LnJlbW92ZSgpXG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2tQb3B1cChjb25maXJtQ2FsbGJhY2spIHtcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3ZlcmxheS5jbGFzc05hbWUgPSAnb3ZlcmxheTInO1xuXG4gICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3B1cC5jbGFzc05hbWUgPSAncG9wdXAyJztcblxuICAgIGNvbnN0IHBvcHVwVG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9wdXBUb3AuY2xhc3NOYW1lID0gJ3BvcHVwLXRvcDInO1xuXG4gICAgY29uc3QgdHJpYW5nbGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIHRyaWFuZ2xlSWNvbi5jbGFzc05hbWUgPSAnZmEtc29saWQgZmEtdHJpYW5nbGUtZXhjbGFtYXRpb24nO1xuXG4gICAgY29uc3QgcG9wdXBNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBvcHVwTWVzc2FnZS50ZXh0Q29udGVudCA9ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgdGFzaz8nO1xuXG4gICAgY29uc3QgcG9wdXBCb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3B1cEJvdC5jbGFzc05hbWUgPSAncG9wdXAtYm90Mic7XG5cbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNsb3NlQnV0dG9uLmlkID0gJ2Nsb3NlJztcbiAgICBjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDbG9zZSc7XG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsb3NlT3ZlcmxheTIoKVxuICAgIH0pO1xuXG4gICAgY29uc3QgY29uZmlybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbmZpcm1CdXR0b24uaWQgPSAnZGVsZXRldGFzayc7XG4gICAgY29uZmlybUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb25maXJtJztcbiAgICBjb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25maXJtQ2FsbGJhY2soKTtcbiAgICAgICAgY2xvc2VPdmVybGF5MigpO1xuICAgIH0pO1xuXG4gICAgcG9wdXBUb3AuYXBwZW5kQ2hpbGQodHJpYW5nbGVJY29uKTtcbiAgICBwb3B1cFRvcC5hcHBlbmRDaGlsZChwb3B1cE1lc3NhZ2UpO1xuXG4gICAgcG9wdXBCb3QuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuICAgIHBvcHVwQm90LmFwcGVuZENoaWxkKGNvbmZpcm1CdXR0b24pO1xuXG4gICAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBUb3ApO1xuICAgIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwQm90KTtcblxuICAgIG92ZXJsYXkuYXBwZW5kQ2hpbGQocG9wdXApO1xuXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrKHRvZG9JZCkge1xuICAgIGNvbnN0IHRvZG9MaXN0cyA9IGdldFRvZG9MaXN0cygpO1xuICAgIGNvbnN0IHVzZWRJZHMgPSBnZXRVc2VkSWRzKCk7XG5cbiAgICBmb3IgKGNvbnN0IHRvZG9MaXN0IG9mIHRvZG9MaXN0cykge1xuICAgICAgICBjb25zdCB0b2RvSW5kZXggPSB0b2RvTGlzdC50b2Rvcy5maW5kSW5kZXgodG9kbyA9PiB0b2RvLmlkID09PSB0b2RvSWQpO1xuICAgICAgICBpZiAodG9kb0luZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdG9kb0xpc3QudG9kb3Muc3BsaWNlKHRvZG9JbmRleCwgMSk7XG4gICAgICAgICAgICBzYXZlVG9kb0xpc3RzKHRvZG9MaXN0cyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGlkSW5kZXggPSB1c2VkSWRzLmluZGV4T2YodG9kb0lkKTtcbiAgICAgICAgICAgIGlmIChpZEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHVzZWRJZHMuc3BsaWNlKGlkSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHNhdmVVc2VkSWRzKHVzZWRJZHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZW5kZXJUYXNrcygpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zb2xlLmVycm9yKCdUb2RvIG5vdCBmb3VuZCcpO1xufVxuXG5mdW5jdGlvbiBjbG9zZU92ZXJsYXkyKCkge1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheTInKTtcbiAgICBvdmVybGF5LnJlbW92ZSgpXG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQW5kRWRpdFRhc2soaWQpIHtcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stdGl0bGUnKTtcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kYXRlJyk7XG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKTtcbiAgICBjb25zdCBsaXN0U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoZWxpc3QnKTtcblxuICAgIGNvbnN0IHRpdGxlQWxlcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUtYWxlcnQnKTtcbiAgICBjb25zdCBkYXRlQWxlcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZS1hbGVydCcpO1xuICAgIGNvbnN0IHByaW9yaXR5QWxlcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHktYWxlcnQnKTtcbiAgICBjb25zdCBsaXN0QWxlcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1hbGVydCcpO1xuXG4gICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xuXG4gICAgaWYgKHRpdGxlSW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgIHRpdGxlQWxlcnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aXRsZUFsZXJ0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgaWYgKGRhdGVJbnB1dC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgZGF0ZUFsZXJ0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGF0ZUFsZXJ0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgaWYgKHByaW9yaXR5U2VsZWN0LnZhbHVlID09PSAnJykge1xuICAgICAgICBwcmlvcml0eUFsZXJ0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJpb3JpdHlBbGVydC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIGlmIChsaXN0U2VsZWN0LnZhbHVlID09PSAnJykge1xuICAgICAgICBsaXN0QWxlcnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsaXN0QWxlcnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG5cbiAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICBjb25zdCBzZWxlY3RlZFZhbHVlID0gbGlzdFNlbGVjdC52YWx1ZTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKTtcblxuICAgICAgICBkZWxldGVUYXNrKGlkKTtcblxuICAgICAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG8odGl0bGVJbnB1dC52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUsIGRhdGVJbnB1dC52YWx1ZSwgcHJpb3JpdHlTZWxlY3QudmFsdWUsIGlkKTtcblxuICAgICAgICBhZGRUb2RvVG9Ub2RvTGlzdChzZWxlY3RlZFZhbHVlLCBuZXdUb2RvKTtcbiAgICAgICAgO1xuICAgICAgICByZW5kZXJUYXNrcygpXG4gICAgICAgIGNsb3NlT3ZlcmxheSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlzdE9wdGlvbnModG9kb0xpc3RzLCBsaXN0dmFsdWUpIHtcbiAgICBjb25zdCBsaXN0U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoZWxpc3QnKTtcblxuICAgIGxpc3RTZWxlY3QuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgaWdub3JlSWRzID0gWycxMTExMTEnLCAnMjIyMjIyJywgJzMzMzMzMycsICc0NDQ0NDQnXVxuXG5cbiAgICB0b2RvTGlzdHMuZm9yRWFjaChsaXN0ID0+IHtcbiAgICAgICAgaWYgKCFpZ25vcmVJZHMuaW5jbHVkZXMobGlzdC5pZCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIGxpc3RPcHRpb24udmFsdWUgPSBsaXN0LmlkO1xuICAgICAgICAgICAgbGlzdE9wdGlvbi50ZXh0Q29udGVudCA9IGxpc3QubmFtZTtcbiAgICAgICAgICAgIGxpc3RTZWxlY3QuYXBwZW5kQ2hpbGQobGlzdE9wdGlvbik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGxpc3RTZWxlY3QudmFsdWUgPSBsaXN0dmFsdWU7XG59XG5cbmZ1bmN0aW9uIGFkZFRvZG9Ub1RvZG9MaXN0KHNlbGVjdGVkVmFsdWUsIG5ld1RvZG8pIHtcbiAgICBjb25zdCBvcmlnaW5hbFRvZG9MaXN0ID0gZ2V0VG9kb0xpc3RCeUlkKHNlbGVjdGVkVmFsdWUpO1xuXG4gICAgaWYgKCFvcmlnaW5hbFRvZG9MaXN0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVG9kb0xpc3Qgbm90IGZvdW5kIGZvciB0aGUgc2VsZWN0ZWQgdmFsdWUuXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlZFRvZG9MaXN0ID0gbmV3IFRvZG9MaXN0KG9yaWdpbmFsVG9kb0xpc3QubmFtZSwgb3JpZ2luYWxUb2RvTGlzdC5pZCk7XG5cbiAgICB1cGRhdGVkVG9kb0xpc3QudG9kb3MgPSBbLi4ub3JpZ2luYWxUb2RvTGlzdC50b2RvcywgbmV3VG9kb107XG5cbiAgICBjb25zdCB0b2RvTGlzdHMgPSBnZXRUb2RvTGlzdHMoKTtcbiAgICBjb25zdCB1cGRhdGVkVG9kb0xpc3RzID0gdG9kb0xpc3RzLm1hcCh0b2RvTGlzdCA9PlxuICAgICAgICB0b2RvTGlzdC5pZCA9PT0gc2VsZWN0ZWRWYWx1ZSA/IHVwZGF0ZWRUb2RvTGlzdCA6IHRvZG9MaXN0XG4gICAgKTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvTGlzdHMnLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkVG9kb0xpc3RzKSk7XG5cbiAgICByZW5kZXJUYXNrcygpXG4gICAgICAgIDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdGlhbGlzZU1haW4oaWQpIHtcbiAgICBjcmVhdGVNYWluKGlkKTtcbiAgICByZW5kZXJUYXNrcygpXG59IiwiaW1wb3J0IHsgVG9kb0xpc3QsIGdldFRvZG9MaXN0cywgc2F2ZVRvZG9MaXN0cywgZ2V0VXNlZElkcywgc2F2ZVVzZWRJZHMgfSBmcm9tIFwiLi9hcHAuanNcIlxuaW1wb3J0IGluaXRpYWxpc2VNYWluLCB7IHJlbmRlclRhc2tzIH0gZnJvbSBcIi4vbWFpbi5qc1wiXG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGViYXIoKSB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xuXG4gICAgY29uc3Qgc2lkZWJhck1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlYmFyTWVudS5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLW1lbnUnKTtcblxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuXG4gICAgY29uc3QgaW5ib3ggPSBjcmVhdGVTaWRlYmFySXRlbSgnaW5ib3gnLCAnZmEtaW5ib3gnLCAnSW5ib3gnKTtcbiAgICBpbmJveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1pZCcsICcwMDAwMDAnKVxuICAgIGluYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgICAgIHNldEFjdGl2ZUJ1dHRvbihpbmJveCk7XG4gICAgICAgIGluaXRpYWxpc2VNYWluKGluYm94LmdldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJykpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdG9kYXkgPSBjcmVhdGVTaWRlYmFySXRlbSgndG9kYXknLCAnZmEtY2FsZW5kYXItZGF5JywgJ1RvZGF5Jyk7XG4gICAgdG9kYXkuc2V0QXR0cmlidXRlKCdkYXRhLWxpc3QtaWQnLCAnMTExMTExJylcbiAgICB0b2RheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xuICAgICAgICBzZXRBY3RpdmVCdXR0b24odG9kYXkpO1xuICAgICAgICBpbml0aWFsaXNlTWFpbih0b2RheS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1pZCcpKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHVwY29taW5nID0gY3JlYXRlU2lkZWJhckl0ZW0oJ3VwY29taW5nJywgJ2ZhLWNhbGVuZGFyLXdlZWsnLCAnVXBjb21pbmcnKTtcbiAgICB1cGNvbWluZy5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1pZCcsICcyMjIyMjInKVxuICAgIHVwY29taW5nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgICAgIHNldEFjdGl2ZUJ1dHRvbih1cGNvbWluZyk7XG4gICAgICAgIGluaXRpYWxpc2VNYWluKHVwY29taW5nLmdldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJykpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYWxsID0gY3JlYXRlU2lkZWJhckl0ZW0oJ2FsbCcsICdmYS1jYWxlbmRhci1kYXlzJywgJ0FsbCcpO1xuICAgIGFsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1pZCcsICczMzMzMzMnKVxuICAgIGFsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xuICAgICAgICBzZXRBY3RpdmVCdXR0b24oYWxsKTtcbiAgICAgICAgaW5pdGlhbGlzZU1haW4oYWxsLmdldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJykpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgaW1wb3J0YW50ID0gY3JlYXRlU2lkZWJhckl0ZW0oJ2ltcG9ydGFudCcsICdmYS1zdGFyJywgJ0ltcG9ydGFudCcpO1xuICAgIGltcG9ydGFudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1pZCcsICc0NDQ0NDQnKVxuICAgIGltcG9ydGFudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xuICAgICAgICBzZXRBY3RpdmVCdXR0b24oaW1wb3J0YW50KTtcbiAgICAgICAgaW5pdGlhbGlzZU1haW4oaW1wb3J0YW50LmdldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJykpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbGlzdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpc3RzLmNsYXNzTGlzdC5hZGQoJ2xpc3RzJyk7XG4gICAgbGlzdHMuaW5uZXJIVE1MID0gJzxkaXY+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1saXN0LWNoZWNrXCI+PC9pPiA8cD5MaXN0czwvcD48L2Rpdj4gPGRpdj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNoZXZyb24tdXBcIj48L2k+PC9kaXY+JztcbiAgICBsaXN0cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbGlzdENsaWNrKTtcblxuICAgIGNvbnN0IGFjY29yZGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFjY29yZGlvbi5jbGFzc0xpc3QuYWRkKCdhY2NvcmRpb24nKTtcblxuICAgIGNvbnN0IG5ld0xpc3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3TGlzdHMuY2xhc3NMaXN0LmFkZCgnbmV3LWxpc3RzJyk7XG5cbiAgICBjb25zdCBjcmVhdGVOZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjcmVhdGVOZXcuY2xhc3NMaXN0LmFkZCgnY3JlYXRlLW5ldycpO1xuICAgIGNyZWF0ZU5ldy5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1wbHVzXCI+PC9pPiBOZXcgTGlzdCdcbiAgICBjcmVhdGVOZXcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG5ld0xpc3RQb3B1cCgpO1xuICAgIH0pO1xuXG4gICAgYWNjb3JkaW9uLmFwcGVuZENoaWxkKG5ld0xpc3RzKTtcbiAgICBhY2NvcmRpb24uYXBwZW5kQ2hpbGQoY3JlYXRlTmV3KTtcblxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoaW5ib3gpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQodG9kYXkpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQodXBjb21pbmcpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoYWxsKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKGltcG9ydGFudCk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChsaXN0cyk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChhY2NvcmRpb24pXG5cbiAgICBzaWRlYmFyTWVudS5hcHBlbmRDaGlsZChtZW51KTtcblxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoc2lkZWJhck1lbnUpO1xuXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChzaWRlYmFyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2lkZWJhckl0ZW0oY2xhc3NOYW1lLCBpY29uQ2xhc3MsIHRleHQpIHtcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lLCAnbmF2LWJ1dHRvbnMnKTtcblxuICAgIGNvbnN0IGl0ZW1Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbUNvbnRlbnQuaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtc29saWQgJHtpY29uQ2xhc3N9XCI+PC9pPiA8cD4ke3RleHR9PC9wPmA7XG5cbiAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1Db250ZW50KTtcblxuICAgIHJldHVybiBpdGVtO1xufVxuXG5mdW5jdGlvbiBuZXdMaXN0UG9wdXAoKSB7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheScpO1xuXG4gICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKCdwb3B1cCcpO1xuXG4gICAgY29uc3QgcG9wdXBUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3B1cFRvcC5jbGFzc0xpc3QuYWRkKCdwb3B1cC10b3AnKTtcblxuICAgIGNvbnN0IHRpdGxlUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRpdGxlUGFyYWdyYXBoLnRleHRDb250ZW50ID0gJ05ldyBMaXN0JztcblxuICAgIGNvbnN0IGNsb3NlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBjbG9zZUljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEteG1hcmsnKTtcbiAgICBjbG9zZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU92ZXJsYXkpO1xuXG4gICAgcG9wdXBUb3AuYXBwZW5kQ2hpbGQodGl0bGVQYXJhZ3JhcGgpO1xuICAgIHBvcHVwVG9wLmFwcGVuZENoaWxkKGNsb3NlSWNvbik7XG5cbiAgICBjb25zdCBwb3B1cE1pZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcHVwTWlkLmNsYXNzTGlzdC5hZGQoJ3BvcHVwLW1pZCcpO1xuXG4gICAgY29uc3QgaW5wdXRQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaW5wdXRQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnTmFtZSAobWF4IDEwIGNoYXJhY3RlcnMpOic7XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICduZXdsaXN0aW5wdXQnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgJzEwJyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsIHRydWUpO1xuXG4gICAgY29uc3QgYWxlcnRQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWxlcnRQYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgnYWxlcnQnKTtcbiAgICBhbGVydFBhcmFncmFwaC50ZXh0Q29udGVudCA9ICdMaXN0IG5hbWUgaXMgcmVxdWlyZWQuJztcbiAgICBhbGVydFBhcmFncmFwaC5zdHlsZS5jb2xvciA9ICdyZWQnO1xuICAgIGFsZXJ0UGFyYWdyYXBoLnN0eWxlLm1hcmdpblRvcCA9ICcuNXJlbSc7XG4gICAgYWxlcnRQYXJhZ3JhcGguc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIHBvcHVwTWlkLmFwcGVuZENoaWxkKGlucHV0UGFyYWdyYXBoKTtcbiAgICBwb3B1cE1pZC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgcG9wdXBNaWQuYXBwZW5kQ2hpbGQoYWxlcnRQYXJhZ3JhcGgpO1xuXG4gICAgY29uc3QgcG9wdXBCb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3B1cEJvdC5jbGFzc0xpc3QuYWRkKCdwb3B1cC1ib3QnKTtcblxuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2xvc2VCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdjbG9zZScpO1xuICAgIGNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gJ0Nsb3NlJztcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlT3ZlcmxheSlcblxuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZGl0aW9uJyk7XG4gICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBMaXN0JztcbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGROZXdMaXN0KVxuXG4gICAgcG9wdXBCb3QuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuICAgIHBvcHVwQm90LmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG5cbiAgICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cFRvcCk7XG4gICAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBNaWQpO1xuICAgIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwQm90KTtcblxuICAgIG92ZXJsYXkuYXBwZW5kQ2hpbGQocG9wdXApO1xuXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVMaXN0UG9wdXAoY29uZmlybUNhbGxiYWNrKSB7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG92ZXJsYXkuY2xhc3NOYW1lID0gJ292ZXJsYXkyJztcblxuICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9wdXAuY2xhc3NOYW1lID0gJ3BvcHVwMic7XG5cbiAgICBjb25zdCBwb3B1cFRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcHVwVG9wLmNsYXNzTmFtZSA9ICdwb3B1cC10b3AyJztcblxuICAgIGNvbnN0IHRyaWFuZ2xlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICB0cmlhbmdsZUljb24uY2xhc3NOYW1lID0gJ2ZhLXNvbGlkIGZhLXRyaWFuZ2xlLWV4Y2xhbWF0aW9uJztcblxuICAgIGNvbnN0IHBvcHVwTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwb3B1cE1lc3NhZ2UudGV4dENvbnRlbnQgPSAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGxpc3Q/JztcblxuICAgIGNvbnN0IHBvcHVwQm90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9wdXBCb3QuY2xhc3NOYW1lID0gJ3BvcHVwLWJvdDInO1xuXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjbG9zZUJ1dHRvbi5pZCA9ICdjbG9zZSc7XG4gICAgY2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSAnQ2xvc2UnO1xuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjbG9zZU92ZXJsYXkyKClcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25maXJtQnV0dG9uLmlkID0gJ2RlbGV0ZWxpc3QnO1xuICAgIGNvbmZpcm1CdXR0b24udGV4dENvbnRlbnQgPSAnQ29uZmlybSc7XG4gICAgY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uZmlybUNhbGxiYWNrKCk7XG4gICAgICAgIGNsb3NlT3ZlcmxheTIoKTtcbiAgICB9KTtcblxuICAgIHBvcHVwVG9wLmFwcGVuZENoaWxkKHRyaWFuZ2xlSWNvbik7XG4gICAgcG9wdXBUb3AuYXBwZW5kQ2hpbGQocG9wdXBNZXNzYWdlKTtcblxuICAgIHBvcHVwQm90LmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcbiAgICBwb3B1cEJvdC5hcHBlbmRDaGlsZChjb25maXJtQnV0dG9uKTtcblxuICAgIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwVG9wKTtcbiAgICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cEJvdCk7XG5cbiAgICBvdmVybGF5LmFwcGVuZENoaWxkKHBvcHVwKTtcblxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChvdmVybGF5KTtcbn1cblxuZnVuY3Rpb24gY2xvc2VPdmVybGF5KCkge1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xuICAgIG92ZXJsYXkucmVtb3ZlKClcbn1cblxuZnVuY3Rpb24gZGVsZXRlTGlzdChpZCkge1xuICAgIGNvbnN0IHRvZG9MaXN0cyA9IGdldFRvZG9MaXN0cygpO1xuICAgIGNvbnN0IHVzZWRJZHMgPSBnZXRVc2VkSWRzKCk7XG5cbiAgICBjb25zdCBpZEluZGV4ID0gdXNlZElkcy5pbmRleE9mKGlkKTtcbiAgICBpZiAoaWRJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdXNlZElkcy5zcGxpY2UoaWRJbmRleCwgMSk7XG4gICAgICAgIHNhdmVVc2VkSWRzKHVzZWRJZHMpO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZWRUb2RvTGlzdHMgPSB0b2RvTGlzdHMuZmlsdGVyKGxpc3QgPT4gbGlzdC5pZCAhPT0gaWQpO1xuICAgIHNhdmVUb2RvTGlzdHModXBkYXRlZFRvZG9MaXN0cyk7XG5cbiAgICByZW5kZXJUb2RvTGlzdHMoKTtcblxuICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94Jyk7XG4gICAgc2V0QWN0aXZlQnV0dG9uKGluYm94KVxuICAgIGluaXRpYWxpc2VNYWluKCcwMDAwMDAnKVxufVxuXG5mdW5jdGlvbiBjbG9zZU92ZXJsYXkyKCkge1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheTInKTtcbiAgICBvdmVybGF5LnJlbW92ZSgpXG59XG5cbmZ1bmN0aW9uIG5ld0xpc3RJdGVtKG5hbWUsIGlkKSB7XG4gICAgY29uc3QgbmV3TGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCduYXYtYnV0dG9ucycsICd0aGUtbmV3LWxpc3RzJyk7XG4gICAgbmV3TGlzdEl0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1saXN0LWlkXCIsIGlkKTtcblxuICAgIGNvbnN0IG5ld0xpc3RJdGVtQ2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdMaXN0SXRlbUNoaWxkLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNpcmNsZVwiPjwvaT4ke25hbWV9PC9kaXY+YDtcblxuICAgIGNvbnN0IG5ld0xpc3RJdGVtQ2hpbGQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3TGlzdEl0ZW1DaGlsZDIuY2xhc3NMaXN0LmFkZCgndHJhc2gnKTtcbiAgICBjb25zdCB0aGVUcmFzaEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgdGhlVHJhc2hJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXJlZ3VsYXInLCAnZmEtdHJhc2gtY2FuJywgJ2xpc3QtZGVsZXRlcicpO1xuICAgIHRoZVRyYXNoSWNvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWxpc3QtaWRcIiwgaWQpO1xuICAgIG5ld0xpc3RJdGVtQ2hpbGQyLmFwcGVuZENoaWxkKHRoZVRyYXNoSWNvbik7XG5cbiAgICBuZXdMaXN0SXRlbS5hcHBlbmRDaGlsZChuZXdMaXN0SXRlbUNoaWxkKTtcbiAgICBuZXdMaXN0SXRlbS5hcHBlbmRDaGlsZChuZXdMaXN0SXRlbUNoaWxkMik7XG5cbiAgICByZXR1cm4gbmV3TGlzdEl0ZW1cbn1cblxuZnVuY3Rpb24gcmVuZGVyVG9kb0xpc3RzKCkge1xuICAgIGNvbnN0IHRvZG9MaXN0cyA9IGdldFRvZG9MaXN0cygpO1xuICAgIGNvbnN0IG5ld0xpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1saXN0cycpO1xuXG4gICAgbmV3TGlzdHMuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBub25EZWZhdWx0VG9kb0xpc3RzID0gdG9kb0xpc3RzLmZpbHRlcih0b2RvTGlzdCA9PiAhaXNEZWZhdWx0VG9kb0xpc3QodG9kb0xpc3QuaWQpKTtcblxuICAgIG5vbkRlZmF1bHRUb2RvTGlzdHMuZm9yRWFjaCh0b2RvTGlzdCA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gbmV3TGlzdEl0ZW0odG9kb0xpc3QubmFtZSwgdG9kb0xpc3QuaWQpO1xuICAgICAgICBuZXdMaXN0cy5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLXRpdGxlJyk7XG4gICAgY29uc3QgdGl0bGVjb250ZW50ID0gdGl0bGUudGV4dENvbnRlbnQ7XG5cblxuXG4gICAgY29uc3QgZ2VuZXJhdGVkRGl2cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0aGUtbmV3LWxpc3RzXCIpO1xuICAgIGZvciAoY29uc3QgZGl2IG9mIGdlbmVyYXRlZERpdnMpIHtcbiAgICAgICAgaWYgKGRpdi50ZXh0Q29udGVudCA9PT0gdGl0bGVjb250ZW50KSB7XG4gICAgICAgICAgICBzZXRBY3RpdmVCdXR0b24oZGl2KVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRyYXNoSWNvbiA9IGRpdi5xdWVyeVNlbGVjdG9yKFwiLnRyYXNoIC5mYS10cmFzaC1jYW5cIik7XG4gICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB7XG4gICAgICAgICAgICB0cmFzaEljb24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRyYXNoSWNvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChkaXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgICAgICAgICBzZXRBY3RpdmVCdXR0b24oZGl2KTtcbiAgICAgICAgICAgIGluaXRpYWxpc2VNYWluKGRpdi5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1pZCcpKVxuXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgYWNjb3JkaW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbicpO1xuICAgIGNvbnN0IGdlbmVyYXRlZEJpbnMgPSBhY2NvcmRpb24uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGlzdC1kZWxldGVyJyk7XG4gICAgZm9yIChjb25zdCBiaW4gb2YgZ2VuZXJhdGVkQmlucykge1xuICAgICAgICBiaW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICBjb25zdCBsaXN0SWQgPSBiaW4uZ2V0QXR0cmlidXRlKCdkYXRhLWxpc3QtaWQnKTtcbiAgICAgICAgICAgIGRlbGV0ZUxpc3RQb3B1cCgoKSA9PiBkZWxldGVMaXN0KGxpc3RJZCkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gaXNEZWZhdWx0VG9kb0xpc3QoaWQpIHtcbiAgICBjb25zdCBkZWZhdWx0VG9kb0xpc3RJZHMgPSBbXCIwMDAwMDBcIiwgXCIxMTExMTFcIiwgXCIyMjIyMjJcIiwgXCIzMzMzMzNcIiwgXCI0NDQ0NDRcIl07XG5cbiAgICByZXR1cm4gZGVmYXVsdFRvZG9MaXN0SWRzLmluY2x1ZGVzKGlkKTtcbn1cblxuZnVuY3Rpb24gYWRkTmV3TGlzdCgpIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdsaXN0aW5wdXQnKTtcbiAgICBjb25zdCBhbGVydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGVydCcpO1xuICAgIGNvbnN0IHBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbicpO1xuXG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGlucHV0LnZhbHVlO1xuXG4gICAgaWYgKGlucHV0LmNoZWNrVmFsaWRpdHkoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYWxlcnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGlucHV0LnN0eWxlLmJvcmRlckNvbG9yID0gJ3JlZCc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV3TGlzdCA9IG5ldyBUb2RvTGlzdChpbnB1dFZhbHVlKTtcbiAgICAgICAgY29uc3QgdG9kb0xpc3RzID0gZ2V0VG9kb0xpc3RzKCk7XG4gICAgICAgIHRvZG9MaXN0cy5wdXNoKG5ld0xpc3QpO1xuICAgICAgICBzYXZlVG9kb0xpc3RzKHRvZG9MaXN0cyk7XG5cblxuXG4gICAgICAgIGNvbnN0IG5ld0xpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1saXN0cycpO1xuICAgICAgICBuZXdMaXN0cy5hcHBlbmRDaGlsZChuZXdMaXN0SXRlbShpbnB1dFZhbHVlLCBuZXdMaXN0LmlkKSk7XG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG5cbiAgICAgICAgcmVuZGVyVG9kb0xpc3RzKClcblxuICAgICAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBwYW5lbC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIGFsZXJ0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cblxuICAgICAgICBjbG9zZU92ZXJsYXkoKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gc2V0QWN0aXZlQnV0dG9uKGJ1dHRvbikge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1idXR0b25zXCIpO1xuXG4gICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgaWYgKGJ1dHRvbiAhPT0gdGhpcykge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuXG5mdW5jdGlvbiBsaXN0Q2xpY2soKSB7XG4gICAgY29uc3QgbGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdHMnKVxuICAgIGNvbnN0IGNoZXZyb25JY29uID0gbGlzdHMucXVlcnlTZWxlY3RvcihcIi5mYS1jaGV2cm9uLXVwXCIpO1xuICAgIGNoZXZyb25JY29uLmNsYXNzTGlzdC50b2dnbGUoXCJmYS1jaGV2cm9uLWRvd25cIik7XG5cbiAgICBjb25zdCBwYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb24nKTtcblxuICAgIGlmIChwYW5lbC5zdHlsZS5tYXhIZWlnaHQpIHtcbiAgICAgICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBwYW5lbC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzaWRlYmFyQW5pbWF0ZSgpIHtcbiAgICBjb25zdCBzY3JlZW5XaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUtc2lkZWJhcicpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuXG4gICAgaWYgKHNjcmVlbldpZHRoID4gNzY4KSB7XG4gICAgICAgIGlmIChzaWRlYmFyLnN0eWxlLmxlZnQgPT09ICcnIHx8IHNpZGViYXIuc3R5bGUubGVmdCA9PT0gJzBweCcpIHtcbiAgICAgICAgICAgIHNpZGViYXIuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgICAgICAgc2lkZWJhci5zdHlsZS5sZWZ0ID0gJy0xMDAlJztcbiAgICAgICAgICAgIG1haW4uc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9ICcxZnInXG4gICAgICAgICAgICBtYWluLnN0eWxlLmdyaWRUZW1wbGF0ZUFyZWFzID0gJ1wibWFpbi1hcmVhXCInXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtYmFycy1zdGFnZ2VyZWQnKTtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmYS1iYXJzJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoc2lkZWJhci5zdHlsZS5sZWZ0ID09PSAnLTEwMCUnKSB7XG4gICAgICAgICAgICBzaWRlYmFyLnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgICAgICAgICBzaWRlYmFyLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgICAgIG1haW4uc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9ICczMDBweCAxZnInXG4gICAgICAgICAgICBtYWluLnN0eWxlLmdyaWRUZW1wbGF0ZUFyZWFzID0gJ1wic2lkZWJhciBtYWluLWFyZWFcIidcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS1iYXJzJyk7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZmEtYmFycy1zdGFnZ2VyZWQnKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzaWRlYmFyLnN0eWxlLmxlZnQgPT09ICctMTAwJScpIHtcbiAgICAgICAgICAgIHNpZGViYXIuc3R5bGUubGVmdCA9ICcwJztcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS1iYXJzJyk7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZmEtYmFycy1zdGFnZ2VyZWQnKTtcbiAgICAgICAgfSBlbHNlIGlmIChzaWRlYmFyLnN0eWxlLmxlZnQgPT09ICcnIHx8IHNpZGViYXIuc3R5bGUubGVmdCA9PT0gJzBweCcpIHtcbiAgICAgICAgICAgIHNpZGViYXIuc3R5bGUubGVmdCA9ICctMTAwJSc7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtYmFycy1zdGFnZ2VyZWQnKTtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmYS1iYXJzJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhvbWVCdXR0b25DbGljaygpIHtcbiAgICBjb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXlcIik7XG5cbiAgICBzZXRBY3RpdmVCdXR0b24odG9kYXkpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYWxpemVTaWRlYmFyKCkge1xuICAgIGNyZWF0ZVNpZGViYXIoKTtcblxuICAgIGNvbnN0IHRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUtc2lkZWJhcicpO1xuICAgIHRvZ2dsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNpZGViYXJBbmltYXRlKTtcblxuICAgIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlLWhvbWUnKTtcbiAgICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaG9tZUJ1dHRvbkNsaWNrKVxuXG4gICAgc2V0QWN0aXZlQnV0dG9uKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5ib3hcIikpO1xuICAgIGluaXRpYWxpc2VNYWluKCcwMDAwMDAnKVxuXG4gICAgcmVuZGVyVG9kb0xpc3RzKClcbiAgICByZW5kZXJUYXNrcygpXG59XG4iLCJpbXBvcnQgaW5pdGlhbGl6ZVNpZGViYXIgZnJvbSAnLi9zaWRlYmFyJ1xuaW1wb3J0IHsgcmVuZGVyVGFza3MgfSBmcm9tICcuL21haW4nXG5pbXBvcnQgeyBUb2RvLCBUb2RvTGlzdCwgZ2V0VG9kb0xpc3RzLCBzYXZlVG9kb0xpc3RzLCBnZXRVc2VkSWRzLCBzYXZlVXNlZElkcywgZ2V0VG9kb0xpc3RCeUlkIH0gZnJvbSAnLi9hcHAuanMnXG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXYuY2xhc3NMaXN0LmFkZCgnbmF2Jyk7XG5cbiAgICBjb25zdCBuYXZJbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdklubmVyLmNsYXNzTGlzdC5hZGQoJ25hdi1pbm5lcicpXG5cbiAgICBjb25zdCBsZWZ0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGVmdERpdi5jbGFzc0xpc3QuYWRkKCdsZWZ0LW5hdicpO1xuXG4gICAgY29uc3QgY2VudGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2VudGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2NlbnRlci1uYXYnKTtcblxuICAgIGNvbnN0IHJpZ2h0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmlnaHREaXYuY2xhc3NMaXN0LmFkZCgncmlnaHQtbmF2Jyk7XG5cbiAgICBjb25zdCBsb2dvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG9nb0Rpdi5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XG5cbiAgICBjb25zdCBtZW51SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBjb25zdCBzY3JlZW5XaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGlmIChzY3JlZW5XaWR0aCA+IDc2OCkge1xuICAgICAgICBtZW51SWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1iYXJzLXN0YWdnZXJlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1lbnVJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLWJhcnMnKTtcbiAgICB9XG5cbiAgICBtZW51SWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZ2dsZS1zaWRlYmFyJyk7XG5cbiAgICBjb25zdCBob21lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBob21lSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1ob3VzZScpO1xuICAgIGhvbWVJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9nZ2xlLWhvbWUnKTtcblxuICAgIGxlZnREaXYuYXBwZW5kQ2hpbGQobWVudUljb24pO1xuICAgIGxlZnREaXYuYXBwZW5kQ2hpbGQoaG9tZUljb24pO1xuXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgIGRhdGUuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlSW5wdXQnKTtcblxuICAgIGNlbnRlckRpdi5hcHBlbmRDaGlsZChkYXRlKVxuXG4gICAgY29uc3QgYWRkSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBhZGRJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLXBsdXMnKTtcbiAgICBhZGRJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBuZXdUYXNrUG9wdXAoKTtcblxuICAgICAgICBjb25zdCB0b2RvTGlzdHMgPSBnZXRUb2RvTGlzdHMoKTtcbiAgICAgICAgY29uc3QgbmF2QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtYnV0dG9ucycpO1xuICAgICAgICBsZXQgYWN0aXZlTmF2QnV0dG9uID0gbnVsbDtcblxuICAgICAgICBmb3IgKGNvbnN0IGJ1dHRvbiBvZiBuYXZCdXR0b25zKSB7XG4gICAgICAgICAgICBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVOYXZCdXR0b24gPSBidXR0b247XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkYXRhTGlzdElkID0gYWN0aXZlTmF2QnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJyk7XG4gICAgICAgIGNyZWF0ZUxpc3RPcHRpb25zKHRvZG9MaXN0cywgZGF0YUxpc3RJZCk7XG4gICAgfSlcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdUb0RvJztcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuXG4gICAgbG9nb0Rpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICByaWdodERpdi5hcHBlbmRDaGlsZChhZGRJY29uKTtcbiAgICByaWdodERpdi5hcHBlbmRDaGlsZChsb2dvRGl2KTtcblxuICAgIG5hdklubmVyLmFwcGVuZENoaWxkKGxlZnREaXYpO1xuICAgIG5hdklubmVyLmFwcGVuZENoaWxkKGNlbnRlckRpdik7XG4gICAgbmF2SW5uZXIuYXBwZW5kQ2hpbGQocmlnaHREaXYpO1xuXG4gICAgbmF2LmFwcGVuZENoaWxkKG5hdklubmVyKTtcblxuICAgIHJldHVybiBuYXZcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgbWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4nKTtcblxuXG4gICAgcmV0dXJuIG1haW5cbn1cblxuZnVuY3Rpb24gbmV3VGFza1BvcHVwKCkge1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvdmVybGF5LmNsYXNzTmFtZSA9ICdvdmVybGF5Myc7XG5cbiAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcHVwLmNsYXNzTmFtZSA9ICdwb3B1cDMnO1xuXG4gICAgY29uc3QgcG9wdXBUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3B1cFRvcC5jbGFzc05hbWUgPSAncG9wdXAtdG9wMyc7XG5cbiAgICBjb25zdCB0aXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGl0bGVUZXh0LnRleHRDb250ZW50ID0gJ05ldyBUYXNrJztcbiAgICBwb3B1cFRvcC5hcHBlbmRDaGlsZCh0aXRsZVRleHQpO1xuXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgY2xvc2VCdXR0b24uY2xhc3NOYW1lID0gJ2ZhLXNvbGlkIGZhLXhtYXJrJztcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlT3ZlcmxheSk7XG4gICAgcG9wdXBUb3AuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuXG4gICAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBUb3ApO1xuXG4gICAgY29uc3QgcG9wdXBNaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3B1cE1pZC5jbGFzc05hbWUgPSAncG9wdXAtbWlkMyc7XG5cbiAgICBjb25zdCBtaWRMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWlkTGVmdC5jbGFzc05hbWUgPSAnbWlkLWxlZnQnO1xuXG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZTonO1xuICAgIG1pZExlZnQuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG5cbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0aXRsZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgdGl0bGVJbnB1dC5tYXhMZW5ndGggPSA2MDtcbiAgICB0aXRsZUlucHV0LmlkID0gJ3Rhc2stdGl0bGUnO1xuICAgIHRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIG1pZExlZnQuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cbiAgICBjb25zdCB0aXRsZUFsZXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRpdGxlQWxlcnQuY2xhc3NMaXN0LmFkZCgndGl0bGUtYWxlcnQnKTtcbiAgICB0aXRsZUFsZXJ0LnRleHRDb250ZW50ID0gJ1RpdGxlIGlzIHJlcXVpcmVkLic7XG4gICAgdGl0bGVBbGVydC5zdHlsZS5jb2xvciA9ICdyZWQnO1xuICAgIHRpdGxlQWxlcnQuc3R5bGUubWFyZ2luVG9wID0gJyc7XG4gICAgdGl0bGVBbGVydC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIG1pZExlZnQuYXBwZW5kQ2hpbGQodGl0bGVBbGVydClcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246JztcbiAgICBtaWRMZWZ0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25UZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS5pZCA9ICdkZXNjcmlwdGlvbic7XG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS5jb2xzID0gMzA7XG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS5yb3dzID0gNDtcbiAgICBkZXNjcmlwdGlvblRleHRhcmVhLm1heExlbmd0aCA9IDE4MDtcbiAgICBtaWRMZWZ0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGV4dGFyZWEpO1xuXG4gICAgcG9wdXBNaWQuYXBwZW5kQ2hpbGQobWlkTGVmdCk7XG5cbiAgICBjb25zdCBtaWRSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1pZFJpZ2h0LmNsYXNzTmFtZSA9ICdtaWQtcmlnaHQnO1xuXG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIGRhdGU6JztcbiAgICBtaWRSaWdodC5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuXG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgICBkYXRlSW5wdXQuaWQgPSAndGFzay1kYXRlJztcbiAgICBkYXRlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIG1pZFJpZ2h0LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG5cbiAgICBjb25zdCBkYXRlQWxlcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGF0ZUFsZXJ0LmNsYXNzTGlzdC5hZGQoJ2RhdGUtYWxlcnQnKTtcbiAgICBkYXRlQWxlcnQudGV4dENvbnRlbnQgPSAnRGF0ZSBpcyByZXF1aXJlZC4nO1xuICAgIGRhdGVBbGVydC5zdHlsZS5jb2xvciA9ICdyZWQnO1xuICAgIGRhdGVBbGVydC5zdHlsZS5tYXJnaW5Ub3AgPSAnJztcbiAgICBkYXRlQWxlcnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIG1pZFJpZ2h0LmFwcGVuZENoaWxkKGRhdGVBbGVydCk7XG5cbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5Oic7XG4gICAgbWlkUmlnaHQuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG5cbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHByaW9yaXR5U2VsZWN0LmlkID0gJ3ByaW9yaXR5JztcbiAgICBwcmlvcml0eVNlbGVjdC5yZXF1aXJlZCA9IHRydWU7XG4gICAgWydMb3cnLCAnTWVkaXVtJywgJ0hpZ2gnXS5mb3JFYWNoKHByaW9yaXR5VGV4dCA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBwcmlvcml0eVRleHQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJpb3JpdHlUZXh0O1xuICAgICAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xuICAgIG1pZFJpZ2h0LmFwcGVuZENoaWxkKHByaW9yaXR5U2VsZWN0KTtcblxuICAgIGNvbnN0IHByaW9yaXR5QWxlcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJpb3JpdHlBbGVydC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1hbGVydCcpO1xuICAgIHByaW9yaXR5QWxlcnQudGV4dENvbnRlbnQgPSAnUHJpb3JpdHkgaXMgcmVxdWlyZWQuJztcbiAgICBwcmlvcml0eUFsZXJ0LnN0eWxlLmNvbG9yID0gJ3JlZCc7XG4gICAgcHJpb3JpdHlBbGVydC5zdHlsZS5tYXJnaW5Ub3AgPSAnJztcbiAgICBwcmlvcml0eUFsZXJ0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICBtaWRSaWdodC5hcHBlbmRDaGlsZChwcmlvcml0eUFsZXJ0KTtcblxuICAgIGNvbnN0IGxpc3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGlzdExhYmVsLnRleHRDb250ZW50ID0gJ0xpc3Q6JztcbiAgICBtaWRSaWdodC5hcHBlbmRDaGlsZChsaXN0TGFiZWwpO1xuXG4gICAgY29uc3QgbGlzdFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIGxpc3RTZWxlY3QuaWQgPSAndGhlbGlzdCc7XG4gICAgbGlzdFNlbGVjdC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICBtaWRSaWdodC5hcHBlbmRDaGlsZChsaXN0U2VsZWN0KTtcblxuICAgIGNvbnN0IGxpc3RBbGVydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsaXN0QWxlcnQuY2xhc3NMaXN0LmFkZCgnbGlzdC1hbGVydCcpO1xuICAgIGxpc3RBbGVydC50ZXh0Q29udGVudCA9ICdMaXN0IGlzIHJlcXVpcmVkLic7XG4gICAgbGlzdEFsZXJ0LnN0eWxlLmNvbG9yID0gJ3JlZCc7XG4gICAgbGlzdEFsZXJ0LnN0eWxlLm1hcmdpblRvcCA9ICcnO1xuICAgIGxpc3RBbGVydC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgbWlkUmlnaHQuYXBwZW5kQ2hpbGQobGlzdEFsZXJ0KTtcblxuICAgIHBvcHVwTWlkLmFwcGVuZENoaWxkKG1pZFJpZ2h0KTtcblxuICAgIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwTWlkKTtcblxuICAgIGNvbnN0IHBvcHVwQm90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9wdXBCb3QuY2xhc3NOYW1lID0gJ3BvcHVwLWJvdDMnO1xuXG4gICAgY29uc3QgdGV4dENsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGV4dENsb3NlQnV0dG9uLmlkID0gJ2Nsb3NlJztcbiAgICB0ZXh0Q2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSAnQ2xvc2UnO1xuICAgIHRleHRDbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlT3ZlcmxheSk7XG4gICAgcG9wdXBCb3QuYXBwZW5kQ2hpbGQodGV4dENsb3NlQnV0dG9uKTtcblxuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRUYXNrQnV0dG9uLmlkID0gJ2FkZHRhc2snO1xuICAgIGFkZFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xuICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB2YWxpZGF0ZUFuZEFkZFRhc2spXG4gICAgcG9wdXBCb3QuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XG5cbiAgICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cEJvdCk7XG5cbiAgICBvdmVybGF5LmFwcGVuZENoaWxkKHBvcHVwKTtcblxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChvdmVybGF5KTtcbn1cblxuZnVuY3Rpb24gY2xvc2VPdmVybGF5KCkge1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheTMnKTtcbiAgICBvdmVybGF5LnJlbW92ZSgpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpc3RPcHRpb25zKHRvZG9MaXN0cywgbGlzdHZhbHVlKSB7XG4gICAgY29uc3QgbGlzdFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGVsaXN0Jyk7XG5cbiAgICBsaXN0U2VsZWN0LmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IGlnbm9yZUlkcyA9IFsnMTExMTExJywgJzIyMjIyMicsICczMzMzMzMnLCAnNDQ0NDQ0J11cblxuXG4gICAgdG9kb0xpc3RzLmZvckVhY2gobGlzdCA9PiB7XG4gICAgICAgIGlmICghaWdub3JlSWRzLmluY2x1ZGVzKGxpc3QuaWQpKSB7XG4gICAgICAgICAgICBjb25zdCBsaXN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBsaXN0T3B0aW9uLnZhbHVlID0gbGlzdC5pZDtcbiAgICAgICAgICAgIGxpc3RPcHRpb24udGV4dENvbnRlbnQgPSBsaXN0Lm5hbWU7XG4gICAgICAgICAgICBsaXN0U2VsZWN0LmFwcGVuZENoaWxkKGxpc3RPcHRpb24pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBsaXN0U2VsZWN0LnZhbHVlID0gbGlzdHZhbHVlO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUFuZEFkZFRhc2soKSB7XG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXRpdGxlJyk7XG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZGF0ZScpO1xuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5Jyk7XG4gICAgY29uc3QgbGlzdFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGVsaXN0Jyk7XG5cbiAgICBjb25zdCB0aXRsZUFsZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlLWFsZXJ0Jyk7XG4gICAgY29uc3QgZGF0ZUFsZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtYWxlcnQnKTtcbiAgICBjb25zdCBwcmlvcml0eUFsZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5LWFsZXJ0Jyk7XG4gICAgY29uc3QgbGlzdEFsZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtYWxlcnQnKTtcblxuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcblxuICAgIGlmICh0aXRsZUlucHV0LnZhbHVlID09PSAnJykge1xuICAgICAgICB0aXRsZUFsZXJ0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGl0bGVBbGVydC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIGlmIChkYXRlSW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgIGRhdGVBbGVydC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGVBbGVydC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIGlmIChwcmlvcml0eVNlbGVjdC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgcHJpb3JpdHlBbGVydC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHByaW9yaXR5QWxlcnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG5cbiAgICBpZiAobGlzdFNlbGVjdC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgbGlzdEFsZXJ0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGlzdEFsZXJ0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IGxpc3RTZWxlY3QudmFsdWU7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJyk7XG5cbiAgICAgICAgY29uc3QgdGhlVG9kbyA9IG5ldyBUb2RvKHRpdGxlSW5wdXQudmFsdWUsIGRlc2NyaXB0aW9uLnZhbHVlLCBkYXRlSW5wdXQudmFsdWUsIHByaW9yaXR5U2VsZWN0LnZhbHVlKVxuICAgICAgICBhZGRUb2RvVG9Ub2RvTGlzdChzZWxlY3RlZFZhbHVlLCB0aGVUb2RvKTtcblxuICAgICAgICBjbG9zZU92ZXJsYXkoKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkVG9kb1RvVG9kb0xpc3Qoc2VsZWN0ZWRWYWx1ZSwgbmV3VG9kbykge1xuICAgIGNvbnN0IG9yaWdpbmFsVG9kb0xpc3QgPSBnZXRUb2RvTGlzdEJ5SWQoc2VsZWN0ZWRWYWx1ZSk7XG5cbiAgICBpZiAoIW9yaWdpbmFsVG9kb0xpc3QpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUb2RvTGlzdCBub3QgZm91bmQgZm9yIHRoZSBzZWxlY3RlZCB2YWx1ZS5cIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVkVG9kb0xpc3QgPSBuZXcgVG9kb0xpc3Qob3JpZ2luYWxUb2RvTGlzdC5uYW1lLCBvcmlnaW5hbFRvZG9MaXN0LmlkKTtcblxuICAgIHVwZGF0ZWRUb2RvTGlzdC50b2RvcyA9IFsuLi5vcmlnaW5hbFRvZG9MaXN0LnRvZG9zLCBuZXdUb2RvXTtcblxuICAgIGNvbnN0IHRvZG9MaXN0cyA9IGdldFRvZG9MaXN0cygpO1xuICAgIGNvbnN0IHVwZGF0ZWRUb2RvTGlzdHMgPSB0b2RvTGlzdHMubWFwKHRvZG9MaXN0ID0+XG4gICAgICAgIHRvZG9MaXN0LmlkID09PSBzZWxlY3RlZFZhbHVlID8gdXBkYXRlZFRvZG9MaXN0IDogdG9kb0xpc3RcbiAgICApO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9MaXN0cycsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRUb2RvTGlzdHMpKTtcblxuICAgIHJlbmRlclRhc2tzKClcbiAgICAgICAgO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEZWZhdWx0VG9kb0xpc3RzKCkge1xuICAgIGNvbnN0IGRlZmF1bHRMaXN0c0RhdGEgPSBbXG4gICAgICAgIHsgbmFtZTogXCJJbmJveFwiLCBpZDogXCIwMDAwMDBcIiB9LFxuICAgICAgICB7IG5hbWU6IFwiVG9kYXlcIiwgaWQ6IFwiMTExMTExXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIlVwY29taW5nXCIsIGlkOiBcIjIyMjIyMlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJBbGxcIiwgaWQ6IFwiMzMzMzMzXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIkltcG9ydGFudFwiLCBpZDogXCI0NDQ0NDRcIiB9XG4gICAgXTtcblxuICAgIGNvbnN0IGV4aXN0aW5nTGlzdHMgPSBnZXRUb2RvTGlzdHMoKTtcbiAgICBjb25zdCBtaXNzaW5nTGlzdHNEYXRhID0gZGVmYXVsdExpc3RzRGF0YS5maWx0ZXIoZGVmYXVsdExpc3QgPT5cbiAgICAgICAgIWV4aXN0aW5nTGlzdHMuc29tZShleGlzdGluZ0xpc3QgPT4gZXhpc3RpbmdMaXN0Lm5hbWUgPT09IGRlZmF1bHRMaXN0Lm5hbWUpXG4gICAgKTtcblxuICAgIGNvbnN0IHVwZGF0ZWRMaXN0cyA9IGV4aXN0aW5nTGlzdHMuY29uY2F0KG1pc3NpbmdMaXN0c0RhdGEubWFwKGRhdGEgPT4gbmV3IFRvZG9MaXN0KGRhdGEubmFtZSwgZGF0YS5pZCkpKTtcbiAgICBzYXZlVG9kb0xpc3RzKHVwZGF0ZWRMaXN0cyk7XG5cbiAgICB1cGRhdGVVc2VkSWRzKGRlZmF1bHRMaXN0c0RhdGEubWFwKGxpc3QgPT4gbGlzdC5pZCkpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVVc2VkSWRzKGlkc1RvSW5jbHVkZSkge1xuICAgIGNvbnN0IHVzZWRJZHMgPSBnZXRVc2VkSWRzKCk7XG4gICAgY29uc3QgdW5pcXVlVXNlZElkcyA9IEFycmF5LmZyb20obmV3IFNldCh1c2VkSWRzLmNvbmNhdChpZHNUb0luY2x1ZGUpKSk7XG4gICAgc2F2ZVVzZWRJZHModW5pcXVlVXNlZElkcyk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVNjcmVlbldpZHRoQ2hhbmdlKCkge1xuICAgIGNvbnN0IHNjcmVlbldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZS1zaWRlYmFyJyk7XG5cbiAgICBpZiAoc2NyZWVuV2lkdGggPD0gNzY4KSB7XG4gICAgICAgIGlmIChzY3JlZW5XaWR0aCA8PSAzMDApIHtcbiAgICAgICAgICAgIHNpZGViYXIuc3R5bGUud2lkdGggPSBzY3JlZW5XaWR0aCArICdweCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaWRlYmFyLnN0eWxlLndpZHRoID0gJzMwMHB4JztcbiAgICAgICAgfVxuICAgICAgICBzaWRlYmFyLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgICAgc2lkZWJhci5zdHlsZS5sZWZ0ID0gJy0xMDAlJztcbiAgICAgICAgbWFpbi5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gJzFmcidcbiAgICAgICAgbWFpbi5zdHlsZS5ncmlkVGVtcGxhdGVBcmVhcyA9ICdcIm1haW4tYXJlYVwiJ1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtYmFycy1zdGFnZ2VyZWQnKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ZhLWJhcnMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzaWRlYmFyLnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgICAgIHNpZGViYXIuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICBzaWRlYmFyLnN0eWxlLndpZHRoID0gJyc7XG4gICAgICAgIG1haW4uc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9ICczMDBweCAxZnInXG4gICAgICAgIG1haW4uc3R5bGUuZ3JpZFRlbXBsYXRlQXJlYXMgPSAnXCJzaWRlYmFyIG1haW4tYXJlYVwiJ1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtYmFycycpO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZmEtYmFycy1zdGFnZ2VyZWQnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVdlYnBhZ2UoKSB7XG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcblxuICAgIHZhciBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgdmFyIGZvcm1hdHRlZERhdGUgPSBjdXJyZW50RGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlSW5wdXRcIikudmFsdWUgPSBmb3JtYXR0ZWREYXRlO1xuXG4gICAgY3JlYXRlRGVmYXVsdFRvZG9MaXN0cygpO1xuXG4gICAgaW5pdGlhbGl6ZVNpZGViYXIoKVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVNjcmVlbldpZHRoQ2hhbmdlKTtcblxuICAgIGhhbmRsZVNjcmVlbldpZHRoQ2hhbmdlKCk7XG59XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9