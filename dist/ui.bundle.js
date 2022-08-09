"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["ui"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/main.otf */ "./src/assets/fonts/main.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/body.otf */ "./src/assets/fonts/body.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: main;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n  font-family: main;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\nhtml {\n  font-size: 100%;\n  padding: 0%;\n  margin: 0%;\n  height: 100%;\n}\n\nbody {\n  min-height: 100%;\n  height: fit-content;\n  color: white;\n  font-family: body;\n  background-color: #2c2c2c;\n  background-size: cover;\n  background-attachment: fixed;\n  user-select: none;\n  margin: 0%;\n  display: flex;\n  flex-direction: column;\n  justify-content: stretch;\n  align-items: center;\n}\nbody img {\n  -webkit-user-drag: none;\n  -khtml-user-drag: none;\n  -moz-user-drag: none;\n  -o-user-drag: none;\n}\n\nheader {\n  font-family: Arial, Helvetica, sans-serif;\n  background-color: black;\n  width: 100%;\n  height: 24%;\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: flex-end;\n  align-items: center;\n}\nheader h1 {\n  font-size: 3rem;\n  margin-left: 0.5em;\n  font-family: main !important;\n}\nheader img {\n  margin-left: 1em;\n  transition: transform 300ms ease-in-out;\n  -webkit-transition: transform 300ms ease-in-out;\n  -moz-transition: transform 300ms ease-in-out;\n  -ms-transition: transform 300ms ease-in-out;\n  -o-transition: transform 300ms ease-in-out;\n}\nheader img:hover {\n  cursor: pointer;\n  background-color: rgba(94, 94, 94, 0.4);\n}\nheader img.show {\n  transform: rotate(-180deg);\n  -webkit-transform: rotate(-180deg);\n  -moz-transform: rotate(-180deg);\n  -ms-transform: rotate(-180deg);\n  -o-transform: rotate(-180deg);\n}\n\nfooter {\n  font-family: Arial, Helvetica, sans-serif;\n  background-color: black;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 15%;\n}\nfooter p {\n  margin: 0.4em;\n  color: white;\n}\nfooter p a:visited {\n  color: white;\n}\nfooter p a:hover {\n  color: white;\n}\n\n#side-bar {\n  color: black;\n  background-color: #f2f3f4;\n  border: black 2px solid;\n  width: 20%;\n  min-width: 280px;\n  min-height: 100%;\n  margin-right: 1em;\n  padding: 1em;\n  box-sizing: border-box;\n  transition: transform 300ms ease-in-out;\n  -webkit-transition: transform 300ms ease-in-out;\n  -moz-transition: transform 300ms ease-in-out;\n  -ms-transition: transform 300ms ease-in-out;\n  -o-transition: transform 300ms ease-in-out;\n}\n\n#date-icon, #tag-icon, #priority-icon {\n  position: relative;\n}\n\n#date-drpdn, #priority-drpdn, #tag-drpdn {\n  display: none;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.8);\n  min-width: 160px;\n  max-height: 350px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  margin: 0%;\n}\n#date-drpdn p, #priority-drpdn p, #tag-drpdn p {\n  margin: 0%;\n  font-size: 1rem;\n  color: white;\n  padding: 1em;\n  text-decoration: none;\n  display: block;\n}\n#date-drpdn p:hover, #priority-drpdn p:hover, #tag-drpdn p:hover {\n  background-color: #ddd;\n  cursor: pointer;\n  color: black;\n}\n\n.translate {\n  transform: translate(70px);\n  -webkit-transform: translate(70px);\n  -moz-transform: translate(70px);\n  -ms-transform: translate(70px);\n  -o-transform: translate(70px);\n}\n\n#date-icon:hover #date-drpdn {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n#tag-icon:hover #tag-drpdn {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n#priority-icon:hover #priority-drpdn {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n#date-icon, #finished-icon, #tag-icon, #priority-icon {\n  max-height: 100px;\n  margin: 1em;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-evenly;\n}\n#date-icon #date-t, #date-icon #tags-t, #date-icon #finished-t, #date-icon #priority-t, #finished-icon #date-t, #finished-icon #tags-t, #finished-icon #finished-t, #finished-icon #priority-t, #tag-icon #date-t, #tag-icon #tags-t, #tag-icon #finished-t, #tag-icon #priority-t, #priority-icon #date-t, #priority-icon #tags-t, #priority-icon #finished-t, #priority-icon #priority-t {\n  font-size: 1.35rem;\n  margin: 0%;\n  font-weight: 900;\n  display: inline-block;\n  position: relative;\n  color: black;\n}\n#date-icon #date-t::after, #date-icon #tags-t::after, #date-icon #finished-t::after, #date-icon #priority-t::after, #finished-icon #date-t::after, #finished-icon #tags-t::after, #finished-icon #finished-t::after, #finished-icon #priority-t::after, #tag-icon #date-t::after, #tag-icon #tags-t::after, #tag-icon #finished-t::after, #tag-icon #priority-t::after, #priority-icon #date-t::after, #priority-icon #tags-t::after, #priority-icon #finished-t::after, #priority-icon #priority-t::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  transform: scaleX(0);\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: black;\n  transform-origin: bottom right;\n  transition: transform 500ms ease-out;\n  -webkit-transition: transform 500ms ease-out;\n  -moz-transition: transform 500ms ease-out;\n  -ms-transition: transform 500ms ease-out;\n  -o-transition: transform 500ms ease-out;\n}\n#date-icon #date-t:hover::after, #date-icon #tags-t:hover::after, #date-icon #finished-t:hover::after, #date-icon #priority-t:hover::after, #finished-icon #date-t:hover::after, #finished-icon #tags-t:hover::after, #finished-icon #finished-t:hover::after, #finished-icon #priority-t:hover::after, #tag-icon #date-t:hover::after, #tag-icon #tags-t:hover::after, #tag-icon #finished-t:hover::after, #tag-icon #priority-t:hover::after, #priority-icon #date-t:hover::after, #priority-icon #tags-t:hover::after, #priority-icon #finished-t:hover::after, #priority-icon #priority-t:hover::after {\n  transform: scaleX(1);\n  transform-origin: bottom left;\n}\n#date-icon #date-t:hover, #date-icon #tags-t:hover, #date-icon #finished-t:hover, #date-icon #priority-t:hover, #finished-icon #date-t:hover, #finished-icon #tags-t:hover, #finished-icon #finished-t:hover, #finished-icon #priority-t:hover, #tag-icon #date-t:hover, #tag-icon #tags-t:hover, #tag-icon #finished-t:hover, #tag-icon #priority-t:hover, #priority-icon #date-t:hover, #priority-icon #tags-t:hover, #priority-icon #finished-t:hover, #priority-icon #priority-t:hover {\n  cursor: pointer;\n}\n\n#side-bar.slide {\n  transform: translate(-150%);\n  -webkit-transform: translate(-150%);\n  -moz-transform: translate(-150%);\n  -ms-transform: translate(-150%);\n  -o-transform: translate(-150%);\n}\n\n#middle {\n  display: flex;\n  justify-content: flex-start;\n  width: 100%;\n  flex-grow: 1;\n}\n\n#one, #two {\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: flex-end;\n  align-items: center;\n}\n#one h3, #two h3 {\n  font-size: 1.7rem;\n  text-decoration: underline;\n}\n#one img, #two img {\n  width: 30px;\n  margin-right: 0.7em;\n  transition: transform 300ms ease-in-out;\n  -webkit-transition: transform 300ms ease-in-out;\n  -moz-transition: transform 300ms ease-in-out;\n  -ms-transition: transform 300ms ease-in-out;\n  -o-transition: transform 300ms ease-in-out;\n}\n\n#all {\n  height: 60px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  margin-bottom: 0.1em;\n  padding: 1em;\n  box-sizing: border-box;\n}\n#all img {\n  width: 20px;\n  margin-right: 0.6em;\n}\n\n#tasks-header {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n}\n#tasks-header img {\n  align-self: center;\n  margin-left: 2em;\n  cursor: pointer;\n  transition: transform 100ms ease-in-out;\n  -webkit-transition: transform 100ms ease-in-out;\n  -moz-transition: transform 100ms ease-in-out;\n  -ms-transition: transform 100ms ease-in-out;\n  -o-transition: transform 100ms ease-in-out;\n}\n#tasks-header img:hover {\n  transform: scale(1.1);\n  -webkit-transform: scale(1.1);\n  -moz-transform: scale(1.1);\n  -ms-transform: scale(1.1);\n  -o-transform: scale(1.1);\n}\n#tasks-header img:active {\n  transform: scale(0.95);\n  -webkit-transform: scale(0.95);\n  -moz-transform: scale(0.95);\n  -ms-transform: scale(0.95);\n  -o-transform: scale(0.95);\n}\n\n.project-class {\n  height: 60px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  margin-bottom: 0.1em;\n  padding: 1em;\n  box-sizing: border-box;\n}\n.project-class div {\n  width: 30%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n.project-class img {\n  width: 20px;\n  margin-right: 0.6em;\n}\n.project-class .del-project {\n  width: 25px;\n  transition: transform 100ms ease-in-out;\n  -webkit-transition: transform 100ms ease-in-out;\n  -moz-transition: transform 100ms ease-in-out;\n  -ms-transition: transform 100ms ease-in-out;\n  -o-transition: transform 100ms ease-in-out;\n}\n.project-class .del-project:hover {\n  transform: scale(1.1);\n  -webkit-transform: scale(1.1);\n  -moz-transform: scale(1.1);\n  -ms-transform: scale(1.1);\n  -o-transform: scale(1.1);\n}\n.project-class .del-project:active {\n  transform: scale(0.95);\n  -webkit-transform: scale(0.95);\n  -moz-transform: scale(0.95);\n  -ms-transform: scale(0.95);\n  -o-transform: scale(0.95);\n}\n\n.project-class:hover {\n  background-color: rgba(94, 94, 94, 0.4);\n}\n\n.list-icon, .del-project {\n  cursor: pointer;\n}\n\n.list-icon:hover, .del-project:hover {\n  transform: scale(1.1);\n  -webkit-transform: scale(1.1);\n  -moz-transform: scale(1.1);\n  -ms-transform: scale(1.1);\n  -o-transform: scale(1.1);\n}\n\n.list-icon:active, .del-project:active {\n  transform: scale(0.95);\n  -webkit-transform: scale(0.95);\n  -moz-transform: scale(0.95);\n  -ms-transform: scale(0.95);\n  -o-transform: scale(0.95);\n}\n\n#form3, #form4, #form6 {\n  cursor: pointer;\n}\n\n#projects {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: flex-end;\n}\n#projects #plus-icon-side {\n  align-self: center;\n  margin-top: 1em;\n  transition: transform 100ms ease-in-out;\n  -webkit-transition: transform 100ms ease-in-out;\n  -moz-transition: transform 100ms ease-in-out;\n  -ms-transition: transform 100ms ease-in-out;\n  -o-transition: transform 100ms ease-in-out;\n}\n#projects #plus-icon-side:hover {\n  cursor: pointer;\n  transform: scale(1.15);\n  -webkit-transform: scale(1.15);\n  -moz-transform: scale(1.15);\n  -ms-transform: scale(1.15);\n  -o-transform: scale(1.15);\n}\n#projects #plus-icon-side:active {\n  transform: scale(0.95);\n  -webkit-transform: scale(0.95);\n  -moz-transform: scale(0.95);\n  -ms-transform: scale(0.95);\n  -o-transform: scale(0.95);\n}\n#projects h4 {\n  font-size: 1.32em;\n  font-weight: 800;\n  margin: 0%;\n  text-transform: capitalize;\n}\n#projects #form-container {\n  width: 100%;\n  height: 150px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n}\n#projects #form-container form {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n}\n#projects #form-container form input {\n  padding: 1.1em;\n  width: 100%;\n  height: 70px;\n  display: inline-block;\n  border-radius: 8px;\n  box-sizing: border-box;\n  -webkit-border-radius: 8px;\n  -moz-border-radius: 8px;\n  -ms-border-radius: 8px;\n  -o-border-radius: 8px;\n  outline: none;\n  border: 2px solid;\n  background-color: white;\n  font-size: 1.2rem;\n}\n#projects #form-container form input::placeholder {\n  font-size: 0.81rem;\n  color: black;\n  transition: transform 300ms ease-in-out;\n  -webkit-transition: transform 300ms ease-in-out;\n  -moz-transition: transform 300ms ease-in-out;\n  -ms-transition: transform 300ms ease-in-out;\n  -o-transition: transform 300ms ease-in-out;\n}\n#projects #form-container form input:focus::placeholder {\n  transform: translateY(-18px);\n  -webkit-transform: translateY(-18px);\n  -moz-transform: translateY(-18px);\n  -ms-transform: translateY(-18px);\n  -o-transform: translateY(-18px);\n}\n#projects #form-container form input:invalid:focus {\n  border-color: red;\n}\n#projects #form-container form input:focus {\n  outline: none;\n}\n#projects #form-container form input:valid {\n  border-color: green;\n}\n#projects #form-container #btns {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n#projects #form-container #btns button {\n  width: 50%;\n  padding: 1em;\n  border: 1px solid black;\n  background-color: white;\n  color: black;\n  font-size: 1.13rem;\n  font-weight: 900;\n  border-radius: 8px;\n  -webkit-border-radius: 8px;\n  -moz-border-radius: 8px;\n  -ms-border-radius: 8px;\n  -o-border-radius: 8px;\n  transition: transform 100ms ease-in-out;\n  -webkit-transition: transform 100ms ease-in-out;\n  -moz-transition: transform 100ms ease-in-out;\n  -ms-transition: transform 100ms ease-in-out;\n  -o-transition: transform 100ms ease-in-out;\n}\n#projects #form-container #btns button:hover {\n  transform: scale(1.1);\n  -webkit-transform: scale(1.1);\n  -moz-transform: scale(1.1);\n  -ms-transform: scale(1.1);\n  -o-transform: scale(1.1);\n  cursor: pointer;\n}\n#projects #form-container #btns button:active {\n  transform: scale(0.95);\n  -webkit-transform: scale(0.95);\n  -moz-transform: scale(0.95);\n  -ms-transform: scale(0.95);\n  -o-transform: scale(0.95);\n}\n\n#tasks {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  min-height: 100%;\n  height: fit-content;\n  text-align: center;\n  transition: transform 300ms ease-in-out;\n  -webkit-transition: transform 300ms ease-in-out;\n  -moz-transition: transform 300ms ease-in-out;\n  -ms-transition: transform 300ms ease-in-out;\n  -o-transition: transform 300ms ease-in-out;\n}\n#tasks h2 {\n  width: 20%;\n  padding: 0.8em;\n  box-sizing: border-box;\n  border: 4px solid white;\n  border-radius: 15px;\n  -webkit-border-radius: 15px;\n  -moz-border-radius: 15px;\n  -ms-border-radius: 15px;\n  -o-border-radius: 15px;\n}\n#tasks .task-item {\n  height: 110px;\n  min-width: 1100px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  text-align: start;\n  border: 2px solid white;\n  margin: 1em;\n  margin-left: 0%;\n  border-radius: 10px;\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;\n  -ms-border-radius: 10px;\n  -o-border-radius: 10px;\n  padding: 0.8em;\n  box-sizing: border-box;\n  transition: transform 50ms ease-in-out;\n  -webkit-transition: transform 50ms ease-in-out;\n  -moz-transition: transform 50ms ease-in-out;\n  -ms-transition: transform 50ms ease-in-out;\n  -o-transition: transform 50ms ease-in-out;\n}\n#tasks .task-item p {\n  text-align: center;\n  font-size: 1.2rem;\n  margin: 1em;\n  max-width: 16%;\n  min-width: 16%;\n  overflow-wrap: break-word;\n}\n#tasks .task-item p#priority-input {\n  text-align: center;\n  font-size: 1.2rem;\n  margin: 0%;\n  max-width: 5%;\n  min-width: 5%;\n}\n#tasks .task-item #schedule {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  max-width: 15%;\n  min-width: 15%;\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n}\n#tasks .task-item #schedule p {\n  min-width: 100%;\n  margin: 0%;\n}\n#tasks .task-item .edit {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  max-height: 110px;\n  max-width: 13%;\n  min-width: 13%;\n}\n#tasks .task-item .edit div {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-evenly;\n  width: 100%;\n  padding: 0.2em;\n  height: 42px;\n  box-sizing: border-box;\n  font-size: 1.5rem;\n  font-weight: 900;\n  color: black;\n  border: 2px solid black;\n  background-color: white;\n  border-radius: 8px;\n  -webkit-border-radius: 8px;\n  -moz-border-radius: 8px;\n  -ms-border-radius: 8px;\n  -o-border-radius: 8px;\n  transition: transform 80ms ease-in-out;\n  -webkit-transition: transform 80ms ease-in-out;\n  -moz-transition: transform 80ms ease-in-out;\n  -ms-transition: transform 80ms ease-in-out;\n  -o-transition: transform 80ms ease-in-out;\n}\n#tasks .task-item .edit div p {\n  min-width: fit-content;\n}\n#tasks .task-item .edit div:hover {\n  transform: scale(1.1);\n  -webkit-transform: scale(1.1);\n  -moz-transform: scale(1.1);\n  -ms-transform: scale(1.1);\n  -o-transform: scale(1.1);\n  cursor: pointer;\n}\n#tasks .task-item .edit div:active {\n  transform: scale(0.95);\n  -webkit-transform: scale(0.95);\n  -moz-transform: scale(0.95);\n  -ms-transform: scale(0.95);\n  -o-transform: scale(0.95);\n}\n#tasks .task-item .task-name {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  font-size: 1.4rem;\n  max-width: 20%;\n  min-width: 20%;\n  color: black;\n  padding: 0.2em;\n  background-color: white;\n  border: 2px solid black;\n  border-radius: 8px;\n  -webkit-border-radius: 8px;\n  -moz-border-radius: 8px;\n  -ms-border-radius: 8px;\n  -o-border-radius: 8px;\n  height: 80%;\n  text-transform: capitalize;\n}\n#tasks .task-item .description {\n  min-width: 22%;\n  max-width: 22%;\n  overflow-wrap: break-word;\n  margin-left: 1em;\n}\n#tasks .task-item:hover {\n  background-color: rgba(94, 94, 94, 0.4);\n}\n\n.slide-left {\n  transform: translate(-20%);\n  -webkit-transform: translate(-20%);\n  -moz-transform: translate(-20%);\n  -ms-transform: translate(-20%);\n  -o-transform: translate(-20%);\n}\n\n#date-icon, #finished-icon, #tag-icon, #priority-icon {\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: flex-end;\n  align-items: center;\n  width: 30%;\n}\n#date-icon img, #finished-icon img, #tag-icon img, #priority-icon img {\n  margin-right: 0.5em;\n  width: 20px;\n}\n\n#content {\n  width: 75%;\n  height: 100%;\n  transition: transform 300ms ease-in-out;\n  -webkit-transition: transform 300ms ease-in-out;\n  -moz-transition: transform 300ms ease-in-out;\n  -ms-transition: transform 300ms ease-in-out;\n  -o-transition: transform 300ms ease-in-out;\n}\n\n#task-form-container {\n  background-color: white;\n  width: 350px;\n  height: 500px;\n  padding: 2em;\n  position: absolute;\n  border: 2px solid black;\n  z-index: 9999;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 20px;\n  -webkit-border-radius: 20px;\n  -moz-border-radius: 20px;\n  -ms-border-radius: 20px;\n  -o-border-radius: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n#task-form-container img {\n  user-select: none;\n  cursor: pointer;\n  margin-bottom: 1em;\n  align-self: flex-start;\n  padding: 0%;\n  transition: transform 100ms ease-in-out;\n  -webkit-transition: transform 100ms ease-in-out;\n  -moz-transition: transform 100ms ease-in-out;\n  -ms-transition: transform 100ms ease-in-out;\n  -o-transition: transform 100ms ease-in-out;\n}\n#task-form-container img:hover {\n  transform: scale(1.15);\n  -webkit-transform: scale(1.15);\n  -moz-transform: scale(1.15);\n  -ms-transform: scale(1.15);\n  -o-transform: scale(1.15);\n}\n#task-form-container img:active {\n  transform: scale(0.95);\n  -webkit-transform: scale(0.95);\n  -moz-transform: scale(0.95);\n  -ms-transform: scale(0.95);\n  -o-transform: scale(0.95);\n}\n#task-form-container button {\n  background-color: black;\n  border: 2px white solid;\n  color: white;\n  padding: 0.75em 1.5em;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 1.2rem;\n  cursor: pointer;\n  margin-top: 1.2em;\n  font-family: Arial, Helvetica, sans-serif;\n  transition: transform 100ms ease-in-out;\n  -webkit-transition: transform 100ms ease-in-out;\n  -moz-transition: transform 100ms ease-in-out;\n  -ms-transition: transform 100ms ease-in-out;\n  -o-transition: transform 100ms ease-in-out;\n  border-radius: 10px;\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;\n  -ms-border-radius: 10px;\n  -o-border-radius: 10px;\n}\n#task-form-container button:hover {\n  transform: scale(1.1);\n  -webkit-transform: scale(1.1);\n  -moz-transform: scale(1.1);\n  -ms-transform: scale(1.1);\n  -o-transform: scale(1.1);\n}\n#task-form-container button:active {\n  transform: scale(0.95);\n  -webkit-transform: scale(0.95);\n  -moz-transform: scale(0.95);\n  -ms-transform: scale(0.95);\n  -o-transform: scale(0.95);\n}\n\n#add-task-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n#add-task-form input, #add-task-form select {\n  min-height: 50px;\n  width: 100%;\n  padding: 0.2em;\n  font-size: 1rem;\n  border: 2px solid black;\n  border-radius: 8px;\n  -webkit-border-radius: 8px;\n  -moz-border-radius: 8px;\n  -ms-border-radius: 8px;\n  -o-border-radius: 8px;\n  box-sizing: border-box;\n}\n#add-task-form input:invalid:focus, #add-task-form select:invalid:focus {\n  border-color: red;\n}\n#add-task-form input:focus, #add-task-form select:focus {\n  outline: none;\n}\n#add-task-form input:valid, #add-task-form select:valid {\n  border-color: green;\n}\n\n.popup {\n  filter: blur(20px);\n  -webkit-filter: blur(10px);\n}\n\n#mask {\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 9000;\n  opacity: 0;\n}\n\n.crossed {\n  text-decoration: line-through;\n}\n\n.disabled {\n  background-color: rgba(255, 255, 255, 0.2) !important;\n  pointer-events: none !important;\n}\n\n/*# sourceMappingURL=style.css.map */\n", "",{"version":3,"sources":["webpack://./src/styles/style.scss","webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
class Project {
    constructor(title) {
        this.title = title;
        this.tasks = [];
    }
}

class Task {
    constructor(title, description, dueDate,
    dueTime, priority, tags = '') {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.dueTime = dueTime;
        this.priority = priority;
        this.tags = tags;
        this.finished = false;
    }
}


/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_default": () => (/* binding */ _default),
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "onDeleteProj": () => (/* binding */ onDeleteProj),
/* harmony export */   "onDeleteTask": () => (/* binding */ onDeleteTask),
/* harmony export */   "onFinished": () => (/* binding */ onFinished),
/* harmony export */   "projectsArr": () => (/* binding */ projectsArr)
/* harmony export */ });
/* harmony import */ var _assets_images_quit_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/quit.png */ "./src/assets/images/quit.png");
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.js */ "./src/scripts/ui.js");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.js */ "./src/scripts/app.js");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local-storage */ "./src/scripts/local-storage.js");





let projectsArr = [];
let _default = new _app_js__WEBPACK_IMPORTED_MODULE_2__.Project('All Tasks');
if (_local_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.getProjectArr() == []) {
    _local_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.saveProjectArr([]);
}
let formFlag = true;
let formFlag2 = true;

let f = _local_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.getProjectArr();
let f2 = _local_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.getDefault();
let f3 = _local_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.getMode();

if (f) {
    projectsArr = JSON.parse(f);
}

if (f2) {
    _default = JSON.parse(f2);
}

if (f3) {
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.setMode)(JSON.parse(f3));
}

(0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.showProjects)(projectsArr);
(0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.showTasks)(_default.tasks);

const sidebar = document.getElementById('side-bar');
const sidebarIcon = document.getElementById('side-bar-icon');
const projectPlus = document.getElementById('plus-icon-side');
const taskPlus = document.getElementById('task-add-plus');

sidebarIcon.addEventListener('click', () => {
    sidebarIcon.classList.toggle('show');
    sidebar.classList.toggle('slide');
    document.getElementById('content').classList.toggle('slide-left');
});

projectPlus.addEventListener('click', addProject);
taskPlus.addEventListener('click', addTask);

function addProject() {
    if (formFlag) {
        const container = document.createElement('div');
        const buttons = document.createElement('div');
        const form = document.createElement('form');
        const input = document.createElement('input');
        const add = document.createElement('button');
        const cancel = document.createElement('button');
        add.textContent = 'Add';
        cancel.textContent = 'Cancel';
        
        form.setAttribute('action', '#');
        form.setAttribute('method', 'get');
        form.setAttribute('name', 'projectForm');

        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', 'Project Title');
        input.setAttribute('minlength', '1');
        input.setAttribute('maxlength', '12');
        input.setAttribute('autocomplete', 'off');
        input.setAttribute('required', '');
        
        form.id = 'project-form';
        input.id = 'project-form-name';

        container.id = 'form-container';
        add.id = 'add-button';
        cancel.id = 'cancel-button';
        buttons.id = 'btns';
        buttons.appendChild(add);
        buttons.appendChild(cancel);
        form.appendChild(input);
        container.appendChild(form);
        container.appendChild(buttons);
        projectPlus.parentNode.insertBefore(container, projectPlus);
        add.addEventListener('click', onAddProject);
        cancel.addEventListener('click', onCancel);
        formFlag = false;
    }
}

function onAddProject() {
    const input = document.getElementById('project-form-name');
    if (input.reportValidity()) {
        const add = document.getElementById('add-button');
        let project = new _app_js__WEBPACK_IMPORTED_MODULE_2__.Project(input.value);
        projectsArr.push(project);
        _local_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.saveProjectArr(projectsArr);
        (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.showProjects)(projectsArr);
        formFlag = true;

        add.removeEventListener('click', onAddProject);
    }
}

function onCancel() {
    const cancel = document.getElementById('cancel-button');
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.showProjects)(projectsArr);
    formFlag = true;
    cancel.removeEventListener('click', onAddProject);
}

function onDeleteProj(event) {
    const project = event.target.parentNode;
    const index = project.id.split('-')[1];
    let rtasks = projectsArr[project.id.split('-')[1]].tasks
    _default.tasks.forEach(element => {
        if (rtasks.includes(element)) {
            _default.tasks.splice(_default.tasks.indexOf(element), 1)
        }
    });
    _local_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.saveDefault(_default);
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.setMode)(_default.title);
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.showTasks)(_default.tasks);
    projectsArr.splice(index, 1)
    _local_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.saveProjectArr(projectsArr);
    project.parentNode.removeChild(project);
    let i = 0;
    let flag = true;
    let arr = [].slice.call(document.getElementById('projects').children);
    arr.forEach(element => {
        if (element.tagName !== 'IMG'){
            if (flag) {
                flag = false;
                return;
            }
            element.id = `project-${i}`;
            i++;
        }
    });
}

function addTask() {
    if (formFlag2) {
        const quit = new Image();
        const div = document.createElement('div');
        const add = document.createElement('button');
        const form = document.createElement('form');
        const title = document.createElement('input');
        const desc = document.createElement('input');
        const dueDate = document.createElement('input');
        const dueTime = document.createElement('input');
        const priority = document.createElement('input');
        const tags = document.createElement('select');
        const op1 = document.createElement('option');
        const op2 = document.createElement('option');
        const op3 = document.createElement('option');
        const op4 = document.createElement('option');
        const op5 = document.createElement('option');
        const op6 = document.createElement('option');
        const mask = document.createElement('div');

        title.id = 'form1';
        desc.id = 'form2';
        dueDate.id = 'form3';
        dueTime.id = 'form4';
        priority.id = 'form5';
        tags.id = 'form6';

        form.setAttribute('action', '#');
        form.setAttribute('method', 'get');
        form.setAttribute('name', 'taskForm');

        title.setAttribute('type', 'text');
        title.setAttribute('placeholder', '*Task Title');
        title.setAttribute('minlength', '1');
        title.setAttribute('maxlength', '12');
        title.setAttribute('autocomplete', 'off');
        title.setAttribute('required', '');

        desc.setAttribute('type', 'text');
        desc.setAttribute('placeholder', '*Description');
        desc.setAttribute('minlength', '1');
        desc.setAttribute('maxlength', '78');
        desc.setAttribute('autocomplete', 'off');
        desc.setAttribute('required', '');

        dueDate.setAttribute('type', 'date');
        dueDate.setAttribute('min', new Date().toJSON().slice(0,10));
        dueDate.setAttribute('required', '');
        
        dueTime.setAttribute('type', 'time');
        dueTime.setAttribute('required', '');

        tags.setAttribute('name', 'tagSelect');
        tags.setAttribute('required', '');

        op1.setAttribute('value', '');
        op1.setAttribute('disabled', '');
        op1.setAttribute('selected', '');

        op2.setAttribute('value', 'red');
        op3.setAttribute('value', 'blue');
        op4.setAttribute('value', 'green');
        op5.setAttribute('value', 'yellow');
        op6.setAttribute('value', 'purple');

        priority.setAttribute('type', 'number');
        priority.setAttribute('placeholder', '*Priority (1-3)');
        priority.setAttribute('maxlength', '1');
        priority.setAttribute('min', '1');
        priority.setAttribute('max', '3');
        priority.setAttribute('autocomplete', 'off');
        priority.setAttribute('required', '');

        quit.src = _assets_images_quit_png__WEBPACK_IMPORTED_MODULE_0__;
        add.textContent = 'Add';
        op1.textContent = 'Tag';
        op2.textContent = 'Red';
        op3.textContent = 'Blue';
        op4.textContent = 'Green';
        op5.textContent = 'Yellow';
        op6.textContent = 'Purple';

        form.id = 'add-task-form';
        div.id = 'task-form-container';
        mask.id = 'mask';
        add.id = 'task-add-btn';

        document.getElementById('middle').classList.add('popup');
        document.querySelector('header').classList.add('popup');
        document.querySelector('footer').classList.add('popup');
        document.body.appendChild(mask);

        tags.append(op1);
        tags.append(op2);
        tags.append(op3);
        tags.append(op4);
        tags.append(op5);
        tags.append(op6);
        form.appendChild(title);
        form.appendChild(desc);
        form.appendChild(dueDate);
        form.appendChild(dueTime);
        form.appendChild(tags);
        form.appendChild(priority);
        div.appendChild(quit);
        div.appendChild(form);
        div.appendChild(add);
        document.body.appendChild(div);
        add.addEventListener('click', onAddTask);

        quit.addEventListener('click', () => {
            document.getElementById('middle').classList.remove('popup');
            document.querySelector('header').classList.remove('popup');
            document.querySelector('footer').classList.remove('popup');
            document.body.removeChild(mask);
            document.body.removeChild(div);
            formFlag2 = true;
        })

        formFlag2 = false;
    }
}

function onAddTask() {
    const title = document.getElementById('form1');
    const desc = document.getElementById('form2');
    const date = document.getElementById('form3');
    const time = document.getElementById('form4');
    const priority = document.getElementById('form5');
    const tags = document.getElementById('form6');

    if (title.reportValidity() && desc.reportValidity() && date.reportValidity()
    && time.reportValidity() && priority.reportValidity() && tags.reportValidity()) {
        const add = document.getElementById('task-add-btn');

        let task = new _app_js__WEBPACK_IMPORTED_MODULE_2__.Task(title.value, desc.value, new Date(date.value).toLocaleDateString(), time.value, priority.value, tags.value);
        _default.tasks.push(task);
        projectsArr.forEach(element => {
            if (element.title === (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.getMode)()) {
                element.tasks.push(task);
                (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.showTasks)(element.tasks);
            }
        });

        if ((0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.getMode)() === 'All Tasks') {
            (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.showTasks)(_default.tasks);
        }

        _local_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.saveDefault(_default);
        
        const taskPlus = document.getElementById('task-add-plus');
        taskPlus.addEventListener('click', addTask);
        add.removeEventListener('click', onAddTask);
        document.getElementById('middle').classList.remove('popup');
        document.querySelector('header').classList.remove('popup');
        document.querySelector('footer').classList.remove('popup');
        document.body.removeChild(document.getElementById('mask'));
        document.body.removeChild(document.getElementById('task-form-container'));
        formFlag2 = true;
    }
}

function onFinished(event) {
    let task;
    if (event.target.tagName === 'DIV'){
        task = event.target.parentNode.parentNode;
    } else {
        task = event.target.parentNode.parentNode.parentNode;
    }
    const index = task.id.split('-')[1];
    _default.tasks[index].finished = true;
    _local_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.saveDefault(_default);
    let name = task.children[0].children[1];
    name.classList.add('crossed');
}

function onDeleteTask(event) {
    let task;
    if (event.target.tagName === 'DIV'){
        task = event.target.parentNode.parentNode;
    } else {
        task = event.target.parentNode.parentNode.parentNode;
    }
    const index = task.id.split('-')[1];
    _default.tasks.splice(index,1);
    _local_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.saveDefault(_default);
    task.parentNode.removeChild(task);
    let i = 0;
    let arr = [].slice.call(document.getElementById('tasks').children);
    arr.forEach(element => {
        if (element.classList.contains('task-item')) {
            element.id = `task-${i}`;
            i++;
        }
    });
}

const finishedBtn = document.getElementById('finished-t');
const date1 = document.getElementById('today-dd');
const date2 = document.getElementById('this-week-dd');
const date3 = document.getElementById('this-month-dd');
const tag1 = document.getElementById('red-dd');
const tag2 = document.getElementById('blue-dd');
const tag3 = document.getElementById('green-dd');
const tag4 = document.getElementById('yellow-dd');
const tag5 = document.getElementById('purple-dd');
const priority1 = document.getElementById('one-dd');
const priority2 = document.getElementById('two-dd');
const priority3 = document.getElementById('three-dd');

finishedBtn.addEventListener('click', () => {
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.setMode)('Finished Tasks');
    let arr = _default.tasks.filter(task => task.finished);
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.showTasks)(arr);
});

date1.addEventListener('click', () => {
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.setMode)('Today');
    const today = new Date().toLocaleDateString();
    let arr = [];
    for (let i = 0; i < _default.tasks.length; i++) {
        let task = _default.tasks[i];
        let taskDate = new Date(task.dueDate).toLocaleDateString();
        if (taskDate === today) {
            arr.push(task);
        }
    }
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.showTasks)(arr);
});

date2.addEventListener('click', () => {
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.setMode)('This Week');
    const day = new Date().getDate() + 7;
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const week = new Date(`${month}/${day}/${year}`)
    
    let arr = [];
    for (let i = 0; i < _default.tasks.length; i++) {
        let task = _default.tasks[i];
        let taskDate = new Date(task.dueDate);
        if (getDifferenceInDays(taskDate, week) <= 7) {
            arr.push(task);
        }
    }
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.showTasks)(arr);
});

date3.addEventListener('click', () => {
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.setMode)('This Month');
    const month = new Date().getMonth();
    
    let arr = [];
    for (let i = 0; i < _default.tasks.length; i++) {
        let task = _default.tasks[i];
        let taskDate = new Date(task.dueDate);
        if (taskDate.getMonth() == month) {
            arr.push(task);
        }
    }
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.showTasks)(arr);
});

tag1.addEventListener('click', () => {
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.setMode)('Red');
    let arr = _default.tasks.filter(task => task.tags === 'red');
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.showTasks)(arr);
});

tag2.addEventListener('click', () => {
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.setMode)('Blue');
    let arr = _default.tasks.filter(task => task.tags === 'blue');
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.showTasks)(arr);
});

tag3.addEventListener('click', () => {
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.setMode)('Green');
    let arr = _default.tasks.filter(task => task.tags === 'green');
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.showTasks)(arr);
});

tag4.addEventListener('click', () => {
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.setMode)('Yellow');
    let arr = _default.tasks.filter(task => task.tags === 'yellow');
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.showTasks)(arr);
});

tag5.addEventListener('click', () => {
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.setMode)('Purple');
    let arr = _default.tasks.filter(task => task.tags === 'purple');
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.showTasks)(arr);
});

priority1.addEventListener('click', () => {
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.setMode)('Low Priority');
    let arr = _default.tasks.filter(task => task.priority == '1');
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.showTasks)(arr);
});

priority2.addEventListener('click', () => {
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.setMode)('Medium Priority');
    let arr = _default.tasks.filter(task => task.priority == '2');
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.showTasks)(arr);
});

priority3.addEventListener('click', () => {
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.setMode)('High Priority');
    let arr = _default.tasks.filter(task => task.priority == '3');
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.showTasks)(arr);
});

function getDifferenceInDays(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60 * 60 * 24);
}


/***/ }),

/***/ "./src/scripts/local-storage.js":
/*!**************************************!*\
  !*** ./src/scripts/local-storage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Storage": () => (/* binding */ Storage)
/* harmony export */ });
class Storage {

    static saveDefault(x) {
        localStorage.setItem('default-project', JSON.stringify(x));
    }
    
    static saveProjectArr(x) {
        localStorage.setItem('projects-array', JSON.stringify(x));
    }

    static saveMode(x) {
        localStorage.setItem('mode', JSON.stringify(x));
    }

    static getDefault() {
        return localStorage.getItem('default-project');
    }

    static getProjectArr() {
        return localStorage.getItem('projects-array');
    }

    static getMode() {
        return localStorage.getItem('mode');
    }
}


/***/ }),

/***/ "./src/scripts/ui.js":
/*!***************************!*\
  !*** ./src/scripts/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMode": () => (/* binding */ getMode),
/* harmony export */   "setMode": () => (/* binding */ setMode),
/* harmony export */   "showProjects": () => (/* binding */ showProjects),
/* harmony export */   "showTasks": () => (/* binding */ showTasks)
/* harmony export */ });
/* harmony import */ var _assets_images_side_bar_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/side-bar.png */ "./src/assets/images/side-bar.png");
/* harmony import */ var _assets_images_plus_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/plus.png */ "./src/assets/images/plus.png");
/* harmony import */ var _assets_images_projects_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/projects.png */ "./src/assets/images/projects.png");
/* harmony import */ var _assets_images_home_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/home.png */ "./src/assets/images/home.png");
/* harmony import */ var _assets_images_list_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/list.png */ "./src/assets/images/list.png");
/* harmony import */ var _assets_images_calendar_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/calendar.png */ "./src/assets/images/calendar.png");
/* harmony import */ var _assets_images_tick_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/tick.png */ "./src/assets/images/tick.png");
/* harmony import */ var _assets_images_tag_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/images/tag.png */ "./src/assets/images/tag.png");
/* harmony import */ var _assets_images_priority_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/images/priority.png */ "./src/assets/images/priority.png");
/* harmony import */ var _assets_images_finish_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/images/finish.png */ "./src/assets/images/finish.png");
/* harmony import */ var _assets_images_delete_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/images/delete.png */ "./src/assets/images/delete.png");
/* harmony import */ var _assets_images_delete2_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/images/delete2.png */ "./src/assets/images/delete2.png");
/* harmony import */ var _assets_images_task_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/images/task.png */ "./src/assets/images/task.png");
/* harmony import */ var _assets_images_addplus_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/images/addplus.png */ "./src/assets/images/addplus.png");
/* harmony import */ var _assets_images_red_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/images/red.png */ "./src/assets/images/red.png");
/* harmony import */ var _assets_images_blue_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/images/blue.png */ "./src/assets/images/blue.png");
/* harmony import */ var _assets_images_green_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/images/green.png */ "./src/assets/images/green.png");
/* harmony import */ var _assets_images_yellow_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/images/yellow.png */ "./src/assets/images/yellow.png");
/* harmony import */ var _assets_images_purple_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/images/purple.png */ "./src/assets/images/purple.png");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./index.js */ "./src/scripts/index.js");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./local-storage */ "./src/scripts/local-storage.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");























let mode;
setMode('All Tasks');

const sidebarIcon = new Image();
const homeIcon = new Image();
const projectsIcon = new Image();
const dateIcon = new Image();
const finishedIcon = new Image();
const tagIcon = new Image();
const priorityIcon = new Image();
const plusIcon = new Image();
const projects = document.getElementById('projects');
const header = document.querySelector('header');
const one = document.getElementById('one');
const two = document.getElementById('two');
const date = document.getElementById('date-icon');
const finished = document.getElementById('finished-icon');
const tag = document.getElementById('tag-icon');
const priority = document.getElementById('priority-icon');
const content = document.getElementById('content');

sidebarIcon.src = _assets_images_side_bar_png__WEBPACK_IMPORTED_MODULE_0__;
homeIcon.src = _assets_images_home_png__WEBPACK_IMPORTED_MODULE_3__;
projectsIcon.src = _assets_images_projects_png__WEBPACK_IMPORTED_MODULE_2__;
dateIcon.src = _assets_images_calendar_png__WEBPACK_IMPORTED_MODULE_5__;
finishedIcon.src = _assets_images_tick_png__WEBPACK_IMPORTED_MODULE_6__;
tagIcon.src = _assets_images_tag_png__WEBPACK_IMPORTED_MODULE_7__;
priorityIcon.src = _assets_images_priority_png__WEBPACK_IMPORTED_MODULE_8__;
plusIcon.src = _assets_images_plus_png__WEBPACK_IMPORTED_MODULE_1__;

sidebarIcon.id = 'side-bar-icon';
plusIcon.id = 'plus-icon-side';

projects.appendChild(plusIcon);
header.appendChild(sidebarIcon);
one.appendChild(homeIcon);
two.appendChild(projectsIcon);
date.appendChild(dateIcon);
finished.appendChild(finishedIcon);
tag.appendChild(tagIcon);
priority.appendChild(priorityIcon);

function showTasks(tasks) {
    content.innerHTML = '';
    const tasksContainer = document.createElement('div');
    const header = document.createElement('h2');
    const div = document.createElement('div');
    const add = new Image();
    add.src = _assets_images_addplus_png__WEBPACK_IMPORTED_MODULE_13__;
    add.id = 'task-add-plus';
    tasksContainer.id = 'tasks';
    header.id = 'current-project';
    div.id = 'tasks-header';
    header.textContent = mode;
    add.addEventListener('click', _index_js__WEBPACK_IMPORTED_MODULE_19__.addTask);
    div.appendChild(header);
    div.appendChild(add);
    tasksContainer.appendChild(div);
    
    if (tasks.length > 0) {
        for (let i = 0; i < tasks.length; i++) {
            const editIcon = new Image();
            const deleteIcon = new Image();
            const taskIcon = new Image();
            const task = document.createElement('div');
            const nameDiv = document.createElement('div');
            const name = document.createElement('h3');
            const description = document.createElement('p');
            const scheduleDiv = document.createElement('div');
            const priority = document.createElement('p');
            const date = document.createElement('p');
            const time = document.createElement('p');
            const editDiv = document.createElement('div');
            const edit = document.createElement('div');
            const deleteTask = document.createElement('div');
            const editP = document.createElement('p');
            const deleteTaskP = document.createElement('p');
    
            task.classList.add('task-item');
            description.classList.add('description');
            editDiv.classList.add('edit');
            nameDiv.classList.add('task-name');
            scheduleDiv.id = ('schedule');
            priority.id = 'priority-input';
    
            editIcon.src = _assets_images_finish_png__WEBPACK_IMPORTED_MODULE_9__;
            deleteIcon.src = _assets_images_delete_png__WEBPACK_IMPORTED_MODULE_10__;
            taskIcon.src = _assets_images_task_png__WEBPACK_IMPORTED_MODULE_12__;
    
            name.textContent = tasks[i].title;
            if (tasks[i].finished) {
                name.classList.add('crossed');
            }
            description.textContent = tasks[i].description;
            priority.textContent = '!'.repeat(tasks[i].priority);
            date.textContent = tasks[i].dueDate;
            time.textContent = tasks[i].dueTime;
            editP.textContent = 'Done';
            deleteTaskP.textContent = 'Delete';
            
            let element;
    
            if (tasks[i].tags.length > 0) {
                element = new Image();
                switch (tasks[i].tags) {
                    case 'red':
                        element.src = _assets_images_red_png__WEBPACK_IMPORTED_MODULE_14__;
                        break;
                    case 'blue':
                        element.src = _assets_images_blue_png__WEBPACK_IMPORTED_MODULE_15__;
                        break;
                    case 'green':
                        element.src = _assets_images_green_png__WEBPACK_IMPORTED_MODULE_16__;
                        break;
                    case 'yellow':
                        element.src = _assets_images_yellow_png__WEBPACK_IMPORTED_MODULE_17__;
                        break;
                    case 'purple':
                        element.src = _assets_images_purple_png__WEBPACK_IMPORTED_MODULE_18__;
                        break;
                    default:
                        break;
                }
            } else {
                element = document.createElement('p');
                element.textContent = 'No Tags';
            }

            edit.addEventListener('click', _index_js__WEBPACK_IMPORTED_MODULE_19__.onFinished);
            deleteTask.addEventListener('click', _index_js__WEBPACK_IMPORTED_MODULE_19__.onDeleteTask);
            if (mode === 'Finished Tasks' || mode === 'Today' || mode === 'This Week' 
            || mode === 'This Month' || mode === 'Red' || mode === 'Blue' || mode === 'Green' 
            || mode === 'Yellow' || mode === 'Purple' || mode === 'Low Priority'
            || mode === 'Medium Priority' || mode === 'High Priority') {
                edit.removeEventListener('click', _index_js__WEBPACK_IMPORTED_MODULE_19__.onFinished);
                deleteTask.removeEventListener('click', _index_js__WEBPACK_IMPORTED_MODULE_19__.onDeleteTask);
                edit.classList.add('disabled');
                deleteTask.classList.add('disabled');
            }

            nameDiv.appendChild(taskIcon);
            nameDiv.appendChild(name);
            edit.appendChild(editIcon);
            edit.appendChild(editP);
            deleteTask.appendChild(deleteIcon);
            deleteTask.appendChild(deleteTaskP);
            editDiv.appendChild(edit);
            editDiv.appendChild(deleteTask);
            scheduleDiv.appendChild(date);
            scheduleDiv.appendChild(time);
            task.appendChild(nameDiv);
            task.appendChild(description);
            task.appendChild(scheduleDiv);
            task.appendChild(priority);
            task.appendChild(element);
            task.appendChild(editDiv);
            task.id = `task-${i}`;
            tasksContainer.appendChild(task);
        }
    } else {
        const none = document.createElement('h3');
        none.textContent = 'No tasks yet, start adding now!';
        none.setAttribute('style', 'text-align: start;');
        tasksContainer.appendChild(none);
    }
    content.appendChild(tasksContainer);
}

function showProjects(projectsArr) {
    while (projects.childElementCount > 1){
        projects.removeChild(projects.firstChild);
    }

    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    const icn = new Image();
    icn.src = _assets_images_list_png__WEBPACK_IMPORTED_MODULE_4__;
    icn.classList.add('list-icon');
    div.id = 'all';
    div.classList.add('project-class');
    h4.textContent = 'All Tasks';
    div.appendChild(icn);
    div.appendChild(h4);
    plusIcon.parentNode.insertBefore(div, plusIcon);

    icn.addEventListener('click', () => {
        setMode(_index_js__WEBPACK_IMPORTED_MODULE_19__._default.title);
        showTasks(_index_js__WEBPACK_IMPORTED_MODULE_19__._default.tasks)
    });

    for (let i = 0; i < projectsArr.length; i++) {
        const header = document.createElement('h4');
        const projectDiv = document.createElement('div');
        const div = document.createElement('div');
        const projectIcon = new Image();
        const del = new Image();
        
        del.src = _assets_images_delete2_png__WEBPACK_IMPORTED_MODULE_11__;
        del.classList.add('del-project');
        projectIcon.src = _assets_images_list_png__WEBPACK_IMPORTED_MODULE_4__;
        projectIcon.classList.add('list-icon');
        projectDiv.classList.add('project-class');
        header.textContent = projectsArr[i].title;

        del.addEventListener('click', _index_js__WEBPACK_IMPORTED_MODULE_19__.onDeleteProj)

        div.appendChild(projectIcon);
        div.appendChild(header);
        projectDiv.appendChild(div);
        projectDiv.appendChild(del);
        projectDiv.id = `project-${i}`;
        plusIcon.parentNode.insertBefore(projectDiv, plusIcon);

        if (projectsArr.length > 0) {
            projectIcon.addEventListener('click', () => {
                setMode(projectsArr[i].title);
                showTasks(projectsArr[i].tasks)
            });
        } else {
            showTasks(_index_js__WEBPACK_IMPORTED_MODULE_19__._default.tasks);
        }
    }
}

function setMode(value) {
    mode = value;
    _local_storage__WEBPACK_IMPORTED_MODULE_20__.Storage.saveMode(value);
}

function getMode() {
    return mode;
}

/***/ }),

/***/ "./src/assets/fonts/body.otf":
/*!***********************************!*\
  !*** ./src/assets/fonts/body.otf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3d81d0e1fdbd5f69b232.otf";

/***/ }),

/***/ "./src/assets/fonts/main.otf":
/*!***********************************!*\
  !*** ./src/assets/fonts/main.otf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "76e6daa1c9100e32f75e.otf";

/***/ }),

/***/ "./src/assets/images/addplus.png":
/*!***************************************!*\
  !*** ./src/assets/images/addplus.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "90aa3cff881079c0dc46.png";

/***/ }),

/***/ "./src/assets/images/blue.png":
/*!************************************!*\
  !*** ./src/assets/images/blue.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "01aff6408aa254b597ff.png";

/***/ }),

/***/ "./src/assets/images/calendar.png":
/*!****************************************!*\
  !*** ./src/assets/images/calendar.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ea6a646ee06165fe68db.png";

/***/ }),

/***/ "./src/assets/images/delete.png":
/*!**************************************!*\
  !*** ./src/assets/images/delete.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ba399250b023115bd475.png";

/***/ }),

/***/ "./src/assets/images/delete2.png":
/*!***************************************!*\
  !*** ./src/assets/images/delete2.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "037aa4e7053ac499a89c.png";

/***/ }),

/***/ "./src/assets/images/finish.png":
/*!**************************************!*\
  !*** ./src/assets/images/finish.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "adceb20ddbc279b51d7b.png";

/***/ }),

/***/ "./src/assets/images/green.png":
/*!*************************************!*\
  !*** ./src/assets/images/green.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b5cb96c02727aa49865b.png";

/***/ }),

/***/ "./src/assets/images/home.png":
/*!************************************!*\
  !*** ./src/assets/images/home.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bd34f14818a2523223c6.png";

/***/ }),

/***/ "./src/assets/images/list.png":
/*!************************************!*\
  !*** ./src/assets/images/list.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ef1e2f680c23fee544a4.png";

/***/ }),

/***/ "./src/assets/images/plus.png":
/*!************************************!*\
  !*** ./src/assets/images/plus.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "546272d48cc8d094c89e.png";

/***/ }),

/***/ "./src/assets/images/priority.png":
/*!****************************************!*\
  !*** ./src/assets/images/priority.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "13b9984a21fa0646bb23.png";

/***/ }),

/***/ "./src/assets/images/projects.png":
/*!****************************************!*\
  !*** ./src/assets/images/projects.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a65be8030458c864ac38.png";

/***/ }),

/***/ "./src/assets/images/purple.png":
/*!**************************************!*\
  !*** ./src/assets/images/purple.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "607db75d0a0c6912c19c.png";

/***/ }),

/***/ "./src/assets/images/quit.png":
/*!************************************!*\
  !*** ./src/assets/images/quit.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "22eeacc5f3e210344161.png";

/***/ }),

/***/ "./src/assets/images/red.png":
/*!***********************************!*\
  !*** ./src/assets/images/red.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "03d96aace5d7357bcf03.png";

/***/ }),

/***/ "./src/assets/images/side-bar.png":
/*!****************************************!*\
  !*** ./src/assets/images/side-bar.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "360d0dcab772fd97d50f.png";

/***/ }),

/***/ "./src/assets/images/tag.png":
/*!***********************************!*\
  !*** ./src/assets/images/tag.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7dcfcbbc4d01231cfd37.png";

/***/ }),

/***/ "./src/assets/images/task.png":
/*!************************************!*\
  !*** ./src/assets/images/task.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7032ef2a90b09348a252.png";

/***/ }),

/***/ "./src/assets/images/tick.png":
/*!************************************!*\
  !*** ./src/assets/images/tick.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7a9625aff33d7c4e502c.png";

/***/ }),

/***/ "./src/assets/images/yellow.png":
/*!**************************************!*\
  !*** ./src/assets/images/yellow.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3830de96a930aa27da57.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/ui.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0MsR0FBRyxlQUFlLDBEQUEwRCxvQ0FBb0MsR0FBRyxrREFBa0QsMkhBQTJILFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFX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aEM7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsb0RBQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0Isc0RBQWM7QUFDOUIsa0JBQWtCLHNEQUFjO0FBQ2hDLEtBQUs7O0FBRUwsb0JBQW9CLHdCQUF3QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0RBQVU7QUFDNUI7QUFDQSwwQkFBMEIsb0RBQU87QUFDakM7QUFDQTtBQUNBOztBQUVBLHNDQUFzQyxvREFBWTs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsRUFBRTtBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixVQUFVO0FBQ1Ysc0JBQXNCLHNEQUFjO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0EsSUFBSSw2REFBZ0I7QUFDcEI7O0FBRU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvbG9jYWwtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy91aS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ZvbnRzL21haW4ub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ZvbnRzL2JvZHkub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IG1haW47XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IG1haW47XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcbmh0bWwge1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgcGFkZGluZzogMCU7XFxuICBtYXJnaW46IDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IGJvZHk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMyYzJjO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIG1hcmdpbjogMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmJvZHkgaW1nIHtcXG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xcbiAgLWtodG1sLXVzZXItZHJhZzogbm9uZTtcXG4gIC1tb3otdXNlci1kcmFnOiBub25lO1xcbiAgLW8tdXNlci1kcmFnOiBub25lO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyNCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmhlYWRlciBoMSB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBtYXJnaW4tbGVmdDogMC41ZW07XFxuICBmb250LWZhbWlseTogbWFpbiAhaW1wb3J0YW50O1xcbn1cXG5oZWFkZXIgaW1nIHtcXG4gIG1hcmdpbi1sZWZ0OiAxZW07XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG4gIC1tb3otdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLW1zLXRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG4gIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG59XFxuaGVhZGVyIGltZzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk0LCA5NCwgOTQsIDAuNCk7XFxufVxcbmhlYWRlciBpbWcuc2hvdyB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XFxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XFxufVxcblxcbmZvb3RlciB7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTUlO1xcbn1cXG5mb290ZXIgcCB7XFxuICBtYXJnaW46IDAuNGVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5mb290ZXIgcCBhOnZpc2l0ZWQge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5mb290ZXIgcCBhOmhvdmVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI3NpZGUtYmFyIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYzZjQ7XFxuICBib3JkZXI6IGJsYWNrIDJweCBzb2xpZDtcXG4gIHdpZHRoOiAyMCU7XFxuICBtaW4td2lkdGg6IDI4MHB4O1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIG1hcmdpbi1yaWdodDogMWVtO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLW1vei10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtbXMtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLW8tdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jZGF0ZS1pY29uLCAjdGFnLWljb24sICNwcmlvcml0eS1pY29uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2RhdGUtZHJwZG4sICNwcmlvcml0eS1kcnBkbiwgI3RhZy1kcnBkbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgbWluLXdpZHRoOiAxNjBweDtcXG4gIG1heC1oZWlnaHQ6IDM1MHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICB6LWluZGV4OiAxO1xcbiAgbWFyZ2luOiAwJTtcXG59XFxuI2RhdGUtZHJwZG4gcCwgI3ByaW9yaXR5LWRycGRuIHAsICN0YWctZHJwZG4gcCB7XFxuICBtYXJnaW46IDAlO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbiNkYXRlLWRycGRuIHA6aG92ZXIsICNwcmlvcml0eS1kcnBkbiBwOmhvdmVyLCAjdGFnLWRycGRuIHA6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnRyYW5zbGF0ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg3MHB4KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNzBweCk7XFxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDcwcHgpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDcwcHgpO1xcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoNzBweCk7XFxufVxcblxcbiNkYXRlLWljb246aG92ZXIgI2RhdGUtZHJwZG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiN0YWctaWNvbjpob3ZlciAjdGFnLWRycGRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jcHJpb3JpdHktaWNvbjpob3ZlciAjcHJpb3JpdHktZHJwZG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNkYXRlLWljb24sICNmaW5pc2hlZC1pY29uLCAjdGFnLWljb24sICNwcmlvcml0eS1pY29uIHtcXG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xcbiAgbWFyZ2luOiAxZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcbiNkYXRlLWljb24gI2RhdGUtdCwgI2RhdGUtaWNvbiAjdGFncy10LCAjZGF0ZS1pY29uICNmaW5pc2hlZC10LCAjZGF0ZS1pY29uICNwcmlvcml0eS10LCAjZmluaXNoZWQtaWNvbiAjZGF0ZS10LCAjZmluaXNoZWQtaWNvbiAjdGFncy10LCAjZmluaXNoZWQtaWNvbiAjZmluaXNoZWQtdCwgI2ZpbmlzaGVkLWljb24gI3ByaW9yaXR5LXQsICN0YWctaWNvbiAjZGF0ZS10LCAjdGFnLWljb24gI3RhZ3MtdCwgI3RhZy1pY29uICNmaW5pc2hlZC10LCAjdGFnLWljb24gI3ByaW9yaXR5LXQsICNwcmlvcml0eS1pY29uICNkYXRlLXQsICNwcmlvcml0eS1pY29uICN0YWdzLXQsICNwcmlvcml0eS1pY29uICNmaW5pc2hlZC10LCAjcHJpb3JpdHktaWNvbiAjcHJpb3JpdHktdCB7XFxuICBmb250LXNpemU6IDEuMzVyZW07XFxuICBtYXJnaW46IDAlO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuI2RhdGUtaWNvbiAjZGF0ZS10OjphZnRlciwgI2RhdGUtaWNvbiAjdGFncy10OjphZnRlciwgI2RhdGUtaWNvbiAjZmluaXNoZWQtdDo6YWZ0ZXIsICNkYXRlLWljb24gI3ByaW9yaXR5LXQ6OmFmdGVyLCAjZmluaXNoZWQtaWNvbiAjZGF0ZS10OjphZnRlciwgI2ZpbmlzaGVkLWljb24gI3RhZ3MtdDo6YWZ0ZXIsICNmaW5pc2hlZC1pY29uICNmaW5pc2hlZC10OjphZnRlciwgI2ZpbmlzaGVkLWljb24gI3ByaW9yaXR5LXQ6OmFmdGVyLCAjdGFnLWljb24gI2RhdGUtdDo6YWZ0ZXIsICN0YWctaWNvbiAjdGFncy10OjphZnRlciwgI3RhZy1pY29uICNmaW5pc2hlZC10OjphZnRlciwgI3RhZy1pY29uICNwcmlvcml0eS10OjphZnRlciwgI3ByaW9yaXR5LWljb24gI2RhdGUtdDo6YWZ0ZXIsICNwcmlvcml0eS1pY29uICN0YWdzLXQ6OmFmdGVyLCAjcHJpb3JpdHktaWNvbiAjZmluaXNoZWQtdDo6YWZ0ZXIsICNwcmlvcml0eS1pY29uICNwcmlvcml0eS10OjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICBoZWlnaHQ6IDJweDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSByaWdodDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcyBlYXNlLW91dDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zIGVhc2Utb3V0O1xcbiAgLW1vei10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXMgZWFzZS1vdXQ7XFxuICAtbXMtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zIGVhc2Utb3V0O1xcbiAgLW8tdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zIGVhc2Utb3V0O1xcbn1cXG4jZGF0ZS1pY29uICNkYXRlLXQ6aG92ZXI6OmFmdGVyLCAjZGF0ZS1pY29uICN0YWdzLXQ6aG92ZXI6OmFmdGVyLCAjZGF0ZS1pY29uICNmaW5pc2hlZC10OmhvdmVyOjphZnRlciwgI2RhdGUtaWNvbiAjcHJpb3JpdHktdDpob3Zlcjo6YWZ0ZXIsICNmaW5pc2hlZC1pY29uICNkYXRlLXQ6aG92ZXI6OmFmdGVyLCAjZmluaXNoZWQtaWNvbiAjdGFncy10OmhvdmVyOjphZnRlciwgI2ZpbmlzaGVkLWljb24gI2ZpbmlzaGVkLXQ6aG92ZXI6OmFmdGVyLCAjZmluaXNoZWQtaWNvbiAjcHJpb3JpdHktdDpob3Zlcjo6YWZ0ZXIsICN0YWctaWNvbiAjZGF0ZS10OmhvdmVyOjphZnRlciwgI3RhZy1pY29uICN0YWdzLXQ6aG92ZXI6OmFmdGVyLCAjdGFnLWljb24gI2ZpbmlzaGVkLXQ6aG92ZXI6OmFmdGVyLCAjdGFnLWljb24gI3ByaW9yaXR5LXQ6aG92ZXI6OmFmdGVyLCAjcHJpb3JpdHktaWNvbiAjZGF0ZS10OmhvdmVyOjphZnRlciwgI3ByaW9yaXR5LWljb24gI3RhZ3MtdDpob3Zlcjo6YWZ0ZXIsICNwcmlvcml0eS1pY29uICNmaW5pc2hlZC10OmhvdmVyOjphZnRlciwgI3ByaW9yaXR5LWljb24gI3ByaW9yaXR5LXQ6aG92ZXI6OmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XFxufVxcbiNkYXRlLWljb24gI2RhdGUtdDpob3ZlciwgI2RhdGUtaWNvbiAjdGFncy10OmhvdmVyLCAjZGF0ZS1pY29uICNmaW5pc2hlZC10OmhvdmVyLCAjZGF0ZS1pY29uICNwcmlvcml0eS10OmhvdmVyLCAjZmluaXNoZWQtaWNvbiAjZGF0ZS10OmhvdmVyLCAjZmluaXNoZWQtaWNvbiAjdGFncy10OmhvdmVyLCAjZmluaXNoZWQtaWNvbiAjZmluaXNoZWQtdDpob3ZlciwgI2ZpbmlzaGVkLWljb24gI3ByaW9yaXR5LXQ6aG92ZXIsICN0YWctaWNvbiAjZGF0ZS10OmhvdmVyLCAjdGFnLWljb24gI3RhZ3MtdDpob3ZlciwgI3RhZy1pY29uICNmaW5pc2hlZC10OmhvdmVyLCAjdGFnLWljb24gI3ByaW9yaXR5LXQ6aG92ZXIsICNwcmlvcml0eS1pY29uICNkYXRlLXQ6aG92ZXIsICNwcmlvcml0eS1pY29uICN0YWdzLXQ6aG92ZXIsICNwcmlvcml0eS1pY29uICNmaW5pc2hlZC10OmhvdmVyLCAjcHJpb3JpdHktaWNvbiAjcHJpb3JpdHktdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNzaWRlLWJhci5zbGlkZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTUwJSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNTAlKTtcXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE1MCUpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNTAlKTtcXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNTAlKTtcXG59XFxuXFxuI21pZGRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbiNvbmUsICN0d28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jb25lIGgzLCAjdHdvIGgzIHtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbiNvbmUgaW1nLCAjdHdvIGltZyB7XFxuICB3aWR0aDogMzBweDtcXG4gIG1hcmdpbi1yaWdodDogMC43ZW07XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG4gIC1tb3otdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLW1zLXRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG4gIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuI2FsbCB7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDAuMWVtO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuI2FsbCBpbWcge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNmVtO1xcbn1cXG5cXG4jdGFza3MtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG4jdGFza3MtaGVhZGVyIGltZyB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtbW96LXRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcyBlYXNlLWluLW91dDtcXG4gIC1tcy10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbiN0YXNrcy1oZWFkZXIgaW1nOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG4jdGFza3MtaGVhZGVyIGltZzphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XFxuXFxuLnByb2plY3QtY2xhc3Mge1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjFlbTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5wcm9qZWN0LWNsYXNzIGRpdiB7XFxuICB3aWR0aDogMzAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucHJvamVjdC1jbGFzcyBpbWcge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNmVtO1xcbn1cXG4ucHJvamVjdC1jbGFzcyAuZGVsLXByb2plY3Qge1xcbiAgd2lkdGg6IDI1cHg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcyBlYXNlLWluLW91dDtcXG4gIC1tb3otdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLW1zLXRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcyBlYXNlLWluLW91dDtcXG4gIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcyBlYXNlLWluLW91dDtcXG59XFxuLnByb2plY3QtY2xhc3MgLmRlbC1wcm9qZWN0OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG4ucHJvamVjdC1jbGFzcyAuZGVsLXByb2plY3Q6YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxufVxcblxcbi5wcm9qZWN0LWNsYXNzOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTQsIDk0LCA5NCwgMC40KTtcXG59XFxuXFxuLmxpc3QtaWNvbiwgLmRlbC1wcm9qZWN0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxpc3QtaWNvbjpob3ZlciwgLmRlbC1wcm9qZWN0OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4ubGlzdC1pY29uOmFjdGl2ZSwgLmRlbC1wcm9qZWN0OmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbn1cXG5cXG4jZm9ybTMsICNmb3JtNCwgI2Zvcm02IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3Byb2plY3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcbiNwcm9qZWN0cyAjcGx1cy1pY29uLXNpZGUge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtbW96LXRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcyBlYXNlLWluLW91dDtcXG4gIC1tcy10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbiNwcm9qZWN0cyAjcGx1cy1pY29uLXNpZGU6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcXG59XFxuI3Byb2plY3RzICNwbHVzLWljb24tc2lkZTphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XFxuI3Byb2plY3RzIGg0IHtcXG4gIGZvbnQtc2l6ZTogMS4zMmVtO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIG1hcmdpbjogMCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuI3Byb2plY3RzICNmb3JtLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI3Byb2plY3RzICNmb3JtLWNvbnRhaW5lciBmb3JtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNwcm9qZWN0cyAjZm9ybS1jb250YWluZXIgZm9ybSBpbnB1dCB7XFxuICBwYWRkaW5nOiAxLjFlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtbXMtYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLW8tYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuI3Byb2plY3RzICNmb3JtLWNvbnRhaW5lciBmb3JtIGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBmb250LXNpemU6IDAuODFyZW07XFxuICBjb2xvcjogYmxhY2s7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG4gIC1tb3otdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLW1zLXRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG4gIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG59XFxuI3Byb2plY3RzICNmb3JtLWNvbnRhaW5lciBmb3JtIGlucHV0OmZvY3VzOjpwbGFjZWhvbGRlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE4cHgpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE4cHgpO1xcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE4cHgpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMThweCk7XFxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE4cHgpO1xcbn1cXG4jcHJvamVjdHMgI2Zvcm0tY29udGFpbmVyIGZvcm0gaW5wdXQ6aW52YWxpZDpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6IHJlZDtcXG59XFxuI3Byb2plY3RzICNmb3JtLWNvbnRhaW5lciBmb3JtIGlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbiNwcm9qZWN0cyAjZm9ybS1jb250YWluZXIgZm9ybSBpbnB1dDp2YWxpZCB7XFxuICBib3JkZXItY29sb3I6IGdyZWVuO1xcbn1cXG4jcHJvamVjdHMgI2Zvcm0tY29udGFpbmVyICNidG5zIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jcHJvamVjdHMgI2Zvcm0tY29udGFpbmVyICNidG5zIGJ1dHRvbiB7XFxuICB3aWR0aDogNTAlO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtc2l6ZTogMS4xM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC1vLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcyBlYXNlLWluLW91dDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLW1vei10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtbXMtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLW8tdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG4jcHJvamVjdHMgI2Zvcm0tY29udGFpbmVyICNidG5zIGJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI3Byb2plY3RzICNmb3JtLWNvbnRhaW5lciAjYnRucyBidXR0b246YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxufVxcblxcbiN0YXNrcyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLW1vei10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtbXMtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLW8tdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG4jdGFza3MgaDIge1xcbiAgd2lkdGg6IDIwJTtcXG4gIHBhZGRpbmc6IDAuOGVtO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIC1tcy1ib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgLW8tYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuI3Rhc2tzIC50YXNrLWl0ZW0ge1xcbiAgaGVpZ2h0OiAxMTBweDtcXG4gIG1pbi13aWR0aDogMTEwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIG1hcmdpbjogMWVtO1xcbiAgbWFyZ2luLWxlZnQ6IDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC1tcy1ib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLW8tYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDAuOGVtO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MG1zIGVhc2UtaW4tb3V0O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTBtcyBlYXNlLWluLW91dDtcXG4gIC1tb3otdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwbXMgZWFzZS1pbi1vdXQ7XFxuICAtbXMtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwbXMgZWFzZS1pbi1vdXQ7XFxuICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTBtcyBlYXNlLWluLW91dDtcXG59XFxuI3Rhc2tzIC50YXNrLWl0ZW0gcCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIG1hcmdpbjogMWVtO1xcbiAgbWF4LXdpZHRoOiAxNiU7XFxuICBtaW4td2lkdGg6IDE2JTtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcbiN0YXNrcyAudGFzay1pdGVtIHAjcHJpb3JpdHktaW5wdXQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBtYXJnaW46IDAlO1xcbiAgbWF4LXdpZHRoOiA1JTtcXG4gIG1pbi13aWR0aDogNSU7XFxufVxcbiN0YXNrcyAudGFzay1pdGVtICNzY2hlZHVsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1heC13aWR0aDogMTUlO1xcbiAgbWluLXdpZHRoOiAxNSU7XFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG4jdGFza3MgLnRhc2staXRlbSAjc2NoZWR1bGUgcCB7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDAlO1xcbn1cXG4jdGFza3MgLnRhc2staXRlbSAuZWRpdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIG1heC1oZWlnaHQ6IDExMHB4O1xcbiAgbWF4LXdpZHRoOiAxMyU7XFxuICBtaW4td2lkdGg6IDEzJTtcXG59XFxuI3Rhc2tzIC50YXNrLWl0ZW0gLmVkaXQgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjJlbTtcXG4gIGhlaWdodDogNDJweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC1tcy1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtby1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gODBtcyBlYXNlLWluLW91dDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDgwbXMgZWFzZS1pbi1vdXQ7XFxuICAtbW96LXRyYW5zaXRpb246IHRyYW5zZm9ybSA4MG1zIGVhc2UtaW4tb3V0O1xcbiAgLW1zLXRyYW5zaXRpb246IHRyYW5zZm9ybSA4MG1zIGVhc2UtaW4tb3V0O1xcbiAgLW8tdHJhbnNpdGlvbjogdHJhbnNmb3JtIDgwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbiN0YXNrcyAudGFzay1pdGVtIC5lZGl0IGRpdiBwIHtcXG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcbiN0YXNrcyAudGFzay1pdGVtIC5lZGl0IGRpdjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI3Rhc2tzIC50YXNrLWl0ZW0gLmVkaXQgZGl2OmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbn1cXG4jdGFza3MgLnRhc2staXRlbSAudGFzay1uYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBtYXgtd2lkdGg6IDIwJTtcXG4gIG1pbi13aWR0aDogMjAlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogMC4yZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC1tcy1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtby1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG4jdGFza3MgLnRhc2staXRlbSAuZGVzY3JpcHRpb24ge1xcbiAgbWluLXdpZHRoOiAyMiU7XFxuICBtYXgtd2lkdGg6IDIyJTtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICBtYXJnaW4tbGVmdDogMWVtO1xcbn1cXG4jdGFza3MgLnRhc2staXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk0LCA5NCwgOTQsIDAuNCk7XFxufVxcblxcbi5zbGlkZS1sZWZ0IHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMCUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjAlKTtcXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIwJSk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIwJSk7XFxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjAlKTtcXG59XFxuXFxuI2RhdGUtaWNvbiwgI2ZpbmlzaGVkLWljb24sICN0YWctaWNvbiwgI3ByaW9yaXR5LWljb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDMwJTtcXG59XFxuI2RhdGUtaWNvbiBpbWcsICNmaW5pc2hlZC1pY29uIGltZywgI3RhZy1pY29uIGltZywgI3ByaW9yaXR5LWljb24gaW1nIHtcXG4gIG1hcmdpbi1yaWdodDogMC41ZW07XFxuICB3aWR0aDogMjBweDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgd2lkdGg6IDc1JTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLW1vei10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtbXMtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLW8tdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jdGFzay1mb3JtLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAzNTBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBwYWRkaW5nOiAyZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIHotaW5kZXg6IDk5OTk7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIC1tcy1ib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgLW8tYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI3Rhc2stZm9ybS1jb250YWluZXIgaW1nIHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIHBhZGRpbmc6IDAlO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtbW96LXRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcyBlYXNlLWluLW91dDtcXG4gIC1tcy10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbiN0YXNrLWZvcm0tY29udGFpbmVyIGltZzpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XFxuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xcbn1cXG4jdGFzay1mb3JtLWNvbnRhaW5lciBpbWc6YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxufVxcbiN0YXNrLWZvcm0tY29udGFpbmVyIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlcjogMnB4IHdoaXRlIHNvbGlkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMC43NWVtIDEuNWVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxLjJlbTtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtbW96LXRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcyBlYXNlLWluLW91dDtcXG4gIC1tcy10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQ7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtby1ib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4jdGFzay1mb3JtLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcbiN0YXNrLWZvcm0tY29udGFpbmVyIGJ1dHRvbjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XFxuXFxuI2FkZC10YXNrLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbiNhZGQtdGFzay1mb3JtIGlucHV0LCAjYWRkLXRhc2stZm9ybSBzZWxlY3Qge1xcbiAgbWluLWhlaWdodDogNTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC4yZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtbXMtYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLW8tYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuI2FkZC10YXNrLWZvcm0gaW5wdXQ6aW52YWxpZDpmb2N1cywgI2FkZC10YXNrLWZvcm0gc2VsZWN0OmludmFsaWQ6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XFxufVxcbiNhZGQtdGFzay1mb3JtIGlucHV0OmZvY3VzLCAjYWRkLXRhc2stZm9ybSBzZWxlY3Q6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuI2FkZC10YXNrLWZvcm0gaW5wdXQ6dmFsaWQsICNhZGQtdGFzay1mb3JtIHNlbGVjdDp2YWxpZCB7XFxuICBib3JkZXItY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4ucG9wdXAge1xcbiAgZmlsdGVyOiBibHVyKDIwcHgpO1xcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMTBweCk7XFxufVxcblxcbiNtYXNrIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgei1pbmRleDogOTAwMDtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5jcm9zc2VkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpICFpbXBvcnRhbnQ7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZS5jc3MubWFwICovXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsNENBQUE7QUNDSjtBREVBO0VBQ0ksaUJBQUE7RUFDQSw0Q0FBQTtBQ0FKO0FER0E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDREo7O0FESUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VB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c291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsXG4gICAgZHVlVGltZSwgcHJpb3JpdHksIHRhZ3MgPSAnJykge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5kdWVUaW1lID0gZHVlVGltZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLnRhZ3MgPSB0YWdzO1xuICAgICAgICB0aGlzLmZpbmlzaGVkID0gZmFsc2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IFF1aXQgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9xdWl0LnBuZyc7XG5pbXBvcnQge3Nob3dQcm9qZWN0cywgc2hvd1Rhc2tzLCBnZXRNb2RlLCBzZXRNb2RlfSBmcm9tICcuL3VpLmpzJztcbmltcG9ydCB7VGFzaywgUHJvamVjdH0gZnJvbSAnLi9hcHAuanMnO1xuaW1wb3J0IHtTdG9yYWdlfSBmcm9tICcuL2xvY2FsLXN0b3JhZ2UnO1xuXG5leHBvcnQgbGV0IHByb2plY3RzQXJyID0gW107XG5leHBvcnQgbGV0IF9kZWZhdWx0ID0gbmV3IFByb2plY3QoJ0FsbCBUYXNrcycpO1xuaWYgKFN0b3JhZ2UuZ2V0UHJvamVjdEFycigpID09IFtdKSB7XG4gICAgU3RvcmFnZS5zYXZlUHJvamVjdEFycihbXSk7XG59XG5sZXQgZm9ybUZsYWcgPSB0cnVlO1xubGV0IGZvcm1GbGFnMiA9IHRydWU7XG5cbmxldCBmID0gU3RvcmFnZS5nZXRQcm9qZWN0QXJyKCk7XG5sZXQgZjIgPSBTdG9yYWdlLmdldERlZmF1bHQoKTtcbmxldCBmMyA9IFN0b3JhZ2UuZ2V0TW9kZSgpO1xuXG5pZiAoZikge1xuICAgIHByb2plY3RzQXJyID0gSlNPTi5wYXJzZShmKTtcbn1cblxuaWYgKGYyKSB7XG4gICAgX2RlZmF1bHQgPSBKU09OLnBhcnNlKGYyKTtcbn1cblxuaWYgKGYzKSB7XG4gICAgc2V0TW9kZShKU09OLnBhcnNlKGYzKSk7XG59XG5cbnNob3dQcm9qZWN0cyhwcm9qZWN0c0Fycik7XG5zaG93VGFza3MoX2RlZmF1bHQudGFza3MpO1xuXG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGUtYmFyJyk7XG5jb25zdCBzaWRlYmFySWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlLWJhci1pY29uJyk7XG5jb25zdCBwcm9qZWN0UGx1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbHVzLWljb24tc2lkZScpO1xuY29uc3QgdGFza1BsdXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1hZGQtcGx1cycpO1xuXG5zaWRlYmFySWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzaWRlYmFySWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QudG9nZ2xlKCdzbGlkZScpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuY2xhc3NMaXN0LnRvZ2dsZSgnc2xpZGUtbGVmdCcpO1xufSk7XG5cbnByb2plY3RQbHVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUHJvamVjdCk7XG50YXNrUGx1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFRhc2spO1xuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xuICAgIGlmIChmb3JtRmxhZykge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IGFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYWRkLnRleHRDb250ZW50ID0gJ0FkZCc7XG4gICAgICAgIGNhbmNlbC50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgICAgICBcbiAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICcjJyk7XG4gICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKCdtZXRob2QnLCAnZ2V0Jyk7XG4gICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKCduYW1lJywgJ3Byb2plY3RGb3JtJyk7XG5cbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdQcm9qZWN0IFRpdGxlJyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbWlubGVuZ3RoJywgJzEnKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnMTInKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhdXRvY29tcGxldGUnLCAnb2ZmJyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gICAgICAgIFxuICAgICAgICBmb3JtLmlkID0gJ3Byb2plY3QtZm9ybSc7XG4gICAgICAgIGlucHV0LmlkID0gJ3Byb2plY3QtZm9ybS1uYW1lJztcblxuICAgICAgICBjb250YWluZXIuaWQgPSAnZm9ybS1jb250YWluZXInO1xuICAgICAgICBhZGQuaWQgPSAnYWRkLWJ1dHRvbic7XG4gICAgICAgIGNhbmNlbC5pZCA9ICdjYW5jZWwtYnV0dG9uJztcbiAgICAgICAgYnV0dG9ucy5pZCA9ICdidG5zJztcbiAgICAgICAgYnV0dG9ucy5hcHBlbmRDaGlsZChhZGQpO1xuICAgICAgICBidXR0b25zLmFwcGVuZENoaWxkKGNhbmNlbCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25zKTtcbiAgICAgICAgcHJvamVjdFBsdXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY29udGFpbmVyLCBwcm9qZWN0UGx1cyk7XG4gICAgICAgIGFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQWRkUHJvamVjdCk7XG4gICAgICAgIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2FuY2VsKTtcbiAgICAgICAgZm9ybUZsYWcgPSBmYWxzZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG9uQWRkUHJvamVjdCgpIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWZvcm0tbmFtZScpO1xuICAgIGlmIChpbnB1dC5yZXBvcnRWYWxpZGl0eSgpKSB7XG4gICAgICAgIGNvbnN0IGFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtYnV0dG9uJyk7XG4gICAgICAgIGxldCBwcm9qZWN0ID0gbmV3IFByb2plY3QoaW5wdXQudmFsdWUpO1xuICAgICAgICBwcm9qZWN0c0Fyci5wdXNoKHByb2plY3QpO1xuICAgICAgICBTdG9yYWdlLnNhdmVQcm9qZWN0QXJyKHByb2plY3RzQXJyKTtcbiAgICAgICAgc2hvd1Byb2plY3RzKHByb2plY3RzQXJyKTtcbiAgICAgICAgZm9ybUZsYWcgPSB0cnVlO1xuXG4gICAgICAgIGFkZC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQWRkUHJvamVjdCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBvbkNhbmNlbCgpIHtcbiAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsLWJ1dHRvbicpO1xuICAgIHNob3dQcm9qZWN0cyhwcm9qZWN0c0Fycik7XG4gICAgZm9ybUZsYWcgPSB0cnVlO1xuICAgIGNhbmNlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQWRkUHJvamVjdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkRlbGV0ZVByb2ooZXZlbnQpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgY29uc3QgaW5kZXggPSBwcm9qZWN0LmlkLnNwbGl0KCctJylbMV07XG4gICAgbGV0IHJ0YXNrcyA9IHByb2plY3RzQXJyW3Byb2plY3QuaWQuc3BsaXQoJy0nKVsxXV0udGFza3NcbiAgICBfZGVmYXVsdC50YXNrcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBpZiAocnRhc2tzLmluY2x1ZGVzKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICBfZGVmYXVsdC50YXNrcy5zcGxpY2UoX2RlZmF1bHQudGFza3MuaW5kZXhPZihlbGVtZW50KSwgMSlcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFN0b3JhZ2Uuc2F2ZURlZmF1bHQoX2RlZmF1bHQpO1xuICAgIHNldE1vZGUoX2RlZmF1bHQudGl0bGUpO1xuICAgIHNob3dUYXNrcyhfZGVmYXVsdC50YXNrcyk7XG4gICAgcHJvamVjdHNBcnIuc3BsaWNlKGluZGV4LCAxKVxuICAgIFN0b3JhZ2Uuc2F2ZVByb2plY3RBcnIocHJvamVjdHNBcnIpO1xuICAgIHByb2plY3QucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwcm9qZWN0KTtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGZsYWcgPSB0cnVlO1xuICAgIGxldCBhcnIgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpLmNoaWxkcmVuKTtcbiAgICBhcnIuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZSAhPT0gJ0lNRycpe1xuICAgICAgICAgICAgaWYgKGZsYWcpIHtcbiAgICAgICAgICAgICAgICBmbGFnID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxlbWVudC5pZCA9IGBwcm9qZWN0LSR7aX1gO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUYXNrKCkge1xuICAgIGlmIChmb3JtRmxhZzIpIHtcbiAgICAgICAgY29uc3QgcXVpdCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgYWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCBkdWVUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCB0YWdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIGNvbnN0IG9wMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBjb25zdCBvcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgY29uc3Qgb3AzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGNvbnN0IG9wNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBjb25zdCBvcDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgY29uc3Qgb3A2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGNvbnN0IG1hc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICB0aXRsZS5pZCA9ICdmb3JtMSc7XG4gICAgICAgIGRlc2MuaWQgPSAnZm9ybTInO1xuICAgICAgICBkdWVEYXRlLmlkID0gJ2Zvcm0zJztcbiAgICAgICAgZHVlVGltZS5pZCA9ICdmb3JtNCc7XG4gICAgICAgIHByaW9yaXR5LmlkID0gJ2Zvcm01JztcbiAgICAgICAgdGFncy5pZCA9ICdmb3JtNic7XG5cbiAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICcjJyk7XG4gICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKCdtZXRob2QnLCAnZ2V0Jyk7XG4gICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKCduYW1lJywgJ3Rhc2tGb3JtJyk7XG5cbiAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICcqVGFzayBUaXRsZScpO1xuICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ21pbmxlbmd0aCcsICcxJyk7XG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgJzEyJyk7XG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpO1xuICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuXG4gICAgICAgIGRlc2Muc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgZGVzYy5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJypEZXNjcmlwdGlvbicpO1xuICAgICAgICBkZXNjLnNldEF0dHJpYnV0ZSgnbWlubGVuZ3RoJywgJzEnKTtcbiAgICAgICAgZGVzYy5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsICc3OCcpO1xuICAgICAgICBkZXNjLnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpO1xuICAgICAgICBkZXNjLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG5cbiAgICAgICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgICAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZSgnbWluJywgbmV3IERhdGUoKS50b0pTT04oKS5zbGljZSgwLDEwKSk7XG4gICAgICAgIGR1ZURhdGUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgICAgICAgXG4gICAgICAgIGR1ZVRpbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RpbWUnKTtcbiAgICAgICAgZHVlVGltZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuXG4gICAgICAgIHRhZ3Muc2V0QXR0cmlidXRlKCduYW1lJywgJ3RhZ1NlbGVjdCcpO1xuICAgICAgICB0YWdzLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG5cbiAgICAgICAgb3AxLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnJyk7XG4gICAgICAgIG9wMS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xuICAgICAgICBvcDEuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICcnKTtcblxuICAgICAgICBvcDIuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdyZWQnKTtcbiAgICAgICAgb3AzLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnYmx1ZScpO1xuICAgICAgICBvcDQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdncmVlbicpO1xuICAgICAgICBvcDUuc2V0QXR0cmlidXRlKCd2YWx1ZScsICd5ZWxsb3cnKTtcbiAgICAgICAgb3A2LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAncHVycGxlJyk7XG5cbiAgICAgICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xuICAgICAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJypQcmlvcml0eSAoMS0zKScpO1xuICAgICAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsICcxJyk7XG4gICAgICAgIHByaW9yaXR5LnNldEF0dHJpYnV0ZSgnbWluJywgJzEnKTtcbiAgICAgICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCdtYXgnLCAnMycpO1xuICAgICAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2F1dG9jb21wbGV0ZScsICdvZmYnKTtcbiAgICAgICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcblxuICAgICAgICBxdWl0LnNyYyA9IFF1aXQ7XG4gICAgICAgIGFkZC50ZXh0Q29udGVudCA9ICdBZGQnO1xuICAgICAgICBvcDEudGV4dENvbnRlbnQgPSAnVGFnJztcbiAgICAgICAgb3AyLnRleHRDb250ZW50ID0gJ1JlZCc7XG4gICAgICAgIG9wMy50ZXh0Q29udGVudCA9ICdCbHVlJztcbiAgICAgICAgb3A0LnRleHRDb250ZW50ID0gJ0dyZWVuJztcbiAgICAgICAgb3A1LnRleHRDb250ZW50ID0gJ1llbGxvdyc7XG4gICAgICAgIG9wNi50ZXh0Q29udGVudCA9ICdQdXJwbGUnO1xuXG4gICAgICAgIGZvcm0uaWQgPSAnYWRkLXRhc2stZm9ybSc7XG4gICAgICAgIGRpdi5pZCA9ICd0YXNrLWZvcm0tY29udGFpbmVyJztcbiAgICAgICAgbWFzay5pZCA9ICdtYXNrJztcbiAgICAgICAgYWRkLmlkID0gJ3Rhc2stYWRkLWJ0bic7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pZGRsZScpLmNsYXNzTGlzdC5hZGQoJ3BvcHVwJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLmNsYXNzTGlzdC5hZGQoJ3BvcHVwJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpLmNsYXNzTGlzdC5hZGQoJ3BvcHVwJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFzayk7XG5cbiAgICAgICAgdGFncy5hcHBlbmQob3AxKTtcbiAgICAgICAgdGFncy5hcHBlbmQob3AyKTtcbiAgICAgICAgdGFncy5hcHBlbmQob3AzKTtcbiAgICAgICAgdGFncy5hcHBlbmQob3A0KTtcbiAgICAgICAgdGFncy5hcHBlbmQob3A1KTtcbiAgICAgICAgdGFncy5hcHBlbmQob3A2KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzYyk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZHVlVGltZSk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGFncyk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQocXVpdCk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGFkZCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25BZGRUYXNrKTtcblxuICAgICAgICBxdWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pZGRsZScpLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHVwJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKS5jbGFzc0xpc3QucmVtb3ZlKCdwb3B1cCcpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJykuY2xhc3NMaXN0LnJlbW92ZSgncG9wdXAnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobWFzayk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRpdik7XG4gICAgICAgICAgICBmb3JtRmxhZzIgPSB0cnVlO1xuICAgICAgICB9KVxuXG4gICAgICAgIGZvcm1GbGFnMiA9IGZhbHNlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gb25BZGRUYXNrKCkge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0xJyk7XG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtMicpO1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybTMnKTtcbiAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm00Jyk7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybTUnKTtcbiAgICBjb25zdCB0YWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm02Jyk7XG5cbiAgICBpZiAodGl0bGUucmVwb3J0VmFsaWRpdHkoKSAmJiBkZXNjLnJlcG9ydFZhbGlkaXR5KCkgJiYgZGF0ZS5yZXBvcnRWYWxpZGl0eSgpXG4gICAgJiYgdGltZS5yZXBvcnRWYWxpZGl0eSgpICYmIHByaW9yaXR5LnJlcG9ydFZhbGlkaXR5KCkgJiYgdGFncy5yZXBvcnRWYWxpZGl0eSgpKSB7XG4gICAgICAgIGNvbnN0IGFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWFkZC1idG4nKTtcblxuICAgICAgICBsZXQgdGFzayA9IG5ldyBUYXNrKHRpdGxlLnZhbHVlLCBkZXNjLnZhbHVlLCBuZXcgRGF0ZShkYXRlLnZhbHVlKS50b0xvY2FsZURhdGVTdHJpbmcoKSwgdGltZS52YWx1ZSwgcHJpb3JpdHkudmFsdWUsIHRhZ3MudmFsdWUpO1xuICAgICAgICBfZGVmYXVsdC50YXNrcy5wdXNoKHRhc2spO1xuICAgICAgICBwcm9qZWN0c0Fyci5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGl0bGUgPT09IGdldE1vZGUoKSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQudGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgICAgICAgICBzaG93VGFza3MoZWxlbWVudC50YXNrcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChnZXRNb2RlKCkgPT09ICdBbGwgVGFza3MnKSB7XG4gICAgICAgICAgICBzaG93VGFza3MoX2RlZmF1bHQudGFza3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgU3RvcmFnZS5zYXZlRGVmYXVsdChfZGVmYXVsdCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0YXNrUGx1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWFkZC1wbHVzJyk7XG4gICAgICAgIHRhc2tQbHVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVGFzayk7XG4gICAgICAgIGFkZC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQWRkVGFzayk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaWRkbGUnKS5jbGFzc0xpc3QucmVtb3ZlKCdwb3B1cCcpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKS5jbGFzc0xpc3QucmVtb3ZlKCdwb3B1cCcpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKS5jbGFzc0xpc3QucmVtb3ZlKCdwb3B1cCcpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXNrJykpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWZvcm0tY29udGFpbmVyJykpO1xuICAgICAgICBmb3JtRmxhZzIgPSB0cnVlO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uRmluaXNoZWQoZXZlbnQpIHtcbiAgICBsZXQgdGFzaztcbiAgICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdESVYnKXtcbiAgICAgICAgdGFzayA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGFzayA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSB0YXNrLmlkLnNwbGl0KCctJylbMV07XG4gICAgX2RlZmF1bHQudGFza3NbaW5kZXhdLmZpbmlzaGVkID0gdHJ1ZTtcbiAgICBTdG9yYWdlLnNhdmVEZWZhdWx0KF9kZWZhdWx0KTtcbiAgICBsZXQgbmFtZSA9IHRhc2suY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV07XG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKCdjcm9zc2VkJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkRlbGV0ZVRhc2soZXZlbnQpIHtcbiAgICBsZXQgdGFzaztcbiAgICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdESVYnKXtcbiAgICAgICAgdGFzayA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGFzayA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSB0YXNrLmlkLnNwbGl0KCctJylbMV07XG4gICAgX2RlZmF1bHQudGFza3Muc3BsaWNlKGluZGV4LDEpO1xuICAgIFN0b3JhZ2Uuc2F2ZURlZmF1bHQoX2RlZmF1bHQpO1xuICAgIHRhc2sucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YXNrKTtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGFyciA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tzJykuY2hpbGRyZW4pO1xuICAgIGFyci5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2staXRlbScpKSB7XG4gICAgICAgICAgICBlbGVtZW50LmlkID0gYHRhc2stJHtpfWA7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuY29uc3QgZmluaXNoZWRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmluaXNoZWQtdCcpO1xuY29uc3QgZGF0ZTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktZGQnKTtcbmNvbnN0IGRhdGUyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoaXMtd2Vlay1kZCcpO1xuY29uc3QgZGF0ZTMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhpcy1tb250aC1kZCcpO1xuY29uc3QgdGFnMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWQtZGQnKTtcbmNvbnN0IHRhZzIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmx1ZS1kZCcpO1xuY29uc3QgdGFnMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdncmVlbi1kZCcpO1xuY29uc3QgdGFnNCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd5ZWxsb3ctZGQnKTtcbmNvbnN0IHRhZzUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHVycGxlLWRkJyk7XG5jb25zdCBwcmlvcml0eTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb25lLWRkJyk7XG5jb25zdCBwcmlvcml0eTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHdvLWRkJyk7XG5jb25zdCBwcmlvcml0eTMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhyZWUtZGQnKTtcblxuZmluaXNoZWRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2V0TW9kZSgnRmluaXNoZWQgVGFza3MnKTtcbiAgICBsZXQgYXJyID0gX2RlZmF1bHQudGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5maW5pc2hlZCk7XG4gICAgc2hvd1Rhc2tzKGFycik7XG59KTtcblxuZGF0ZTEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2V0TW9kZSgnVG9kYXknKTtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4gICAgbGV0IGFyciA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX2RlZmF1bHQudGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHRhc2sgPSBfZGVmYXVsdC50YXNrc1tpXTtcbiAgICAgICAgbGV0IHRhc2tEYXRlID0gbmV3IERhdGUodGFzay5kdWVEYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKTtcbiAgICAgICAgaWYgKHRhc2tEYXRlID09PSB0b2RheSkge1xuICAgICAgICAgICAgYXJyLnB1c2godGFzayk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2hvd1Rhc2tzKGFycik7XG59KTtcblxuZGF0ZTIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2V0TW9kZSgnVGhpcyBXZWVrJyk7XG4gICAgY29uc3QgZGF5ID0gbmV3IERhdGUoKS5nZXREYXRlKCkgKyA3O1xuICAgIGNvbnN0IG1vbnRoID0gbmV3IERhdGUoKS5nZXRNb250aCgpICsgMTtcbiAgICBjb25zdCB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IHdlZWsgPSBuZXcgRGF0ZShgJHttb250aH0vJHtkYXl9LyR7eWVhcn1gKVxuICAgIFxuICAgIGxldCBhcnIgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9kZWZhdWx0LnRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0YXNrID0gX2RlZmF1bHQudGFza3NbaV07XG4gICAgICAgIGxldCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2suZHVlRGF0ZSk7XG4gICAgICAgIGlmIChnZXREaWZmZXJlbmNlSW5EYXlzKHRhc2tEYXRlLCB3ZWVrKSA8PSA3KSB7XG4gICAgICAgICAgICBhcnIucHVzaCh0YXNrKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzaG93VGFza3MoYXJyKTtcbn0pO1xuXG5kYXRlMy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzZXRNb2RlKCdUaGlzIE1vbnRoJyk7XG4gICAgY29uc3QgbW9udGggPSBuZXcgRGF0ZSgpLmdldE1vbnRoKCk7XG4gICAgXG4gICAgbGV0IGFyciA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX2RlZmF1bHQudGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHRhc2sgPSBfZGVmYXVsdC50YXNrc1tpXTtcbiAgICAgICAgbGV0IHRhc2tEYXRlID0gbmV3IERhdGUodGFzay5kdWVEYXRlKTtcbiAgICAgICAgaWYgKHRhc2tEYXRlLmdldE1vbnRoKCkgPT0gbW9udGgpIHtcbiAgICAgICAgICAgIGFyci5wdXNoKHRhc2spO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNob3dUYXNrcyhhcnIpO1xufSk7XG5cbnRhZzEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2V0TW9kZSgnUmVkJyk7XG4gICAgbGV0IGFyciA9IF9kZWZhdWx0LnRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2sudGFncyA9PT0gJ3JlZCcpO1xuICAgIHNob3dUYXNrcyhhcnIpO1xufSk7XG5cbnRhZzIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2V0TW9kZSgnQmx1ZScpO1xuICAgIGxldCBhcnIgPSBfZGVmYXVsdC50YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLnRhZ3MgPT09ICdibHVlJyk7XG4gICAgc2hvd1Rhc2tzKGFycik7XG59KTtcblxudGFnMy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzZXRNb2RlKCdHcmVlbicpO1xuICAgIGxldCBhcnIgPSBfZGVmYXVsdC50YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLnRhZ3MgPT09ICdncmVlbicpO1xuICAgIHNob3dUYXNrcyhhcnIpO1xufSk7XG5cbnRhZzQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2V0TW9kZSgnWWVsbG93Jyk7XG4gICAgbGV0IGFyciA9IF9kZWZhdWx0LnRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2sudGFncyA9PT0gJ3llbGxvdycpO1xuICAgIHNob3dUYXNrcyhhcnIpO1xufSk7XG5cbnRhZzUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2V0TW9kZSgnUHVycGxlJyk7XG4gICAgbGV0IGFyciA9IF9kZWZhdWx0LnRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2sudGFncyA9PT0gJ3B1cnBsZScpO1xuICAgIHNob3dUYXNrcyhhcnIpO1xufSk7XG5cbnByaW9yaXR5MS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzZXRNb2RlKCdMb3cgUHJpb3JpdHknKTtcbiAgICBsZXQgYXJyID0gX2RlZmF1bHQudGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5wcmlvcml0eSA9PSAnMScpO1xuICAgIHNob3dUYXNrcyhhcnIpO1xufSk7XG5cbnByaW9yaXR5Mi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzZXRNb2RlKCdNZWRpdW0gUHJpb3JpdHknKTtcbiAgICBsZXQgYXJyID0gX2RlZmF1bHQudGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5wcmlvcml0eSA9PSAnMicpO1xuICAgIHNob3dUYXNrcyhhcnIpO1xufSk7XG5cbnByaW9yaXR5My5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzZXRNb2RlKCdIaWdoIFByaW9yaXR5Jyk7XG4gICAgbGV0IGFyciA9IF9kZWZhdWx0LnRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2sucHJpb3JpdHkgPT0gJzMnKTtcbiAgICBzaG93VGFza3MoYXJyKTtcbn0pO1xuXG5mdW5jdGlvbiBnZXREaWZmZXJlbmNlSW5EYXlzKGRhdGUxLCBkYXRlMikge1xuICAgIGNvbnN0IGRpZmZJbk1zID0gTWF0aC5hYnMoZGF0ZTIgLSBkYXRlMSk7XG4gICAgcmV0dXJuIGRpZmZJbk1zIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpO1xufVxuIiwiZXhwb3J0IGNsYXNzIFN0b3JhZ2Uge1xuXG4gICAgc3RhdGljIHNhdmVEZWZhdWx0KHgpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RlZmF1bHQtcHJvamVjdCcsIEpTT04uc3RyaW5naWZ5KHgpKTtcbiAgICB9XG4gICAgXG4gICAgc3RhdGljIHNhdmVQcm9qZWN0QXJyKHgpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzLWFycmF5JywgSlNPTi5zdHJpbmdpZnkoeCkpO1xuICAgIH1cblxuICAgIHN0YXRpYyBzYXZlTW9kZSh4KSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtb2RlJywgSlNPTi5zdHJpbmdpZnkoeCkpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXREZWZhdWx0KCkge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RlZmF1bHQtcHJvamVjdCcpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRQcm9qZWN0QXJyKCkge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzLWFycmF5Jyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldE1vZGUoKSB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbW9kZScpO1xuICAgIH1cbn1cbiIsImltcG9ydCBTaWRlYmFySWNuIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvc2lkZS1iYXIucG5nJztcbmltcG9ydCBQbHVzSWNuIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvcGx1cy5wbmcnO1xuaW1wb3J0IFByb2plY3RJY24gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy5wbmcnO1xuaW1wb3J0IEhvbWVJY24gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9ob21lLnBuZyc7XG5pbXBvcnQgTGlzdEljbiBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2xpc3QucG5nJztcbmltcG9ydCBEYXRlSWNuIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvY2FsZW5kYXIucG5nJztcbmltcG9ydCBGaW5pc2hlZEljbiBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3RpY2sucG5nJztcbmltcG9ydCBUYWdJY24gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy90YWcucG5nJztcbmltcG9ydCBQcmlvcml0eUljbiBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3ByaW9yaXR5LnBuZyc7XG5pbXBvcnQgRWRpdEljbiBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2ZpbmlzaC5wbmcnO1xuaW1wb3J0IERlbGV0ZUljbiBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2RlbGV0ZS5wbmcnO1xuaW1wb3J0IERlbGV0ZUljbjIgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9kZWxldGUyLnBuZyc7XG5pbXBvcnQgVGFza0ljbiBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3Rhc2sucG5nJztcbmltcG9ydCBBZGQgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9hZGRwbHVzLnBuZyc7XG5pbXBvcnQgUmVkIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvcmVkLnBuZyc7XG5pbXBvcnQgQmx1ZSBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2JsdWUucG5nJztcbmltcG9ydCBHcmVlbiBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2dyZWVuLnBuZyc7XG5pbXBvcnQgWWVsbG93IGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMveWVsbG93LnBuZyc7XG5pbXBvcnQgUHVycGxlIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvcHVycGxlLnBuZyc7XG5pbXBvcnQge29uRGVsZXRlUHJvaiwgb25EZWxldGVUYXNrLCBfZGVmYXVsdCwgYWRkVGFzaywgb25GaW5pc2hlZH0gZnJvbSAnLi9pbmRleC5qcyc7XG5pbXBvcnQge1N0b3JhZ2V9IGZyb20gJy4vbG9jYWwtc3RvcmFnZSc7XG5pbXBvcnQgJy4uL3N0eWxlcy9zdHlsZS5jc3MnO1xuXG5sZXQgbW9kZTtcbnNldE1vZGUoJ0FsbCBUYXNrcycpO1xuXG5jb25zdCBzaWRlYmFySWNvbiA9IG5ldyBJbWFnZSgpO1xuY29uc3QgaG9tZUljb24gPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IHByb2plY3RzSWNvbiA9IG5ldyBJbWFnZSgpO1xuY29uc3QgZGF0ZUljb24gPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGZpbmlzaGVkSWNvbiA9IG5ldyBJbWFnZSgpO1xuY29uc3QgdGFnSWNvbiA9IG5ldyBJbWFnZSgpO1xuY29uc3QgcHJpb3JpdHlJY29uID0gbmV3IEltYWdlKCk7XG5jb25zdCBwbHVzSWNvbiA9IG5ldyBJbWFnZSgpO1xuY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKTtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuY29uc3Qgb25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29uZScpO1xuY29uc3QgdHdvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R3bycpO1xuY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlLWljb24nKTtcbmNvbnN0IGZpbmlzaGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbmlzaGVkLWljb24nKTtcbmNvbnN0IHRhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWctaWNvbicpO1xuY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHktaWNvbicpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbnNpZGViYXJJY29uLnNyYyA9IFNpZGViYXJJY247XG5ob21lSWNvbi5zcmMgPSBIb21lSWNuO1xucHJvamVjdHNJY29uLnNyYyA9IFByb2plY3RJY247XG5kYXRlSWNvbi5zcmMgPSBEYXRlSWNuO1xuZmluaXNoZWRJY29uLnNyYyA9IEZpbmlzaGVkSWNuO1xudGFnSWNvbi5zcmMgPSBUYWdJY247XG5wcmlvcml0eUljb24uc3JjID0gUHJpb3JpdHlJY247XG5wbHVzSWNvbi5zcmMgPSBQbHVzSWNuO1xuXG5zaWRlYmFySWNvbi5pZCA9ICdzaWRlLWJhci1pY29uJztcbnBsdXNJY29uLmlkID0gJ3BsdXMtaWNvbi1zaWRlJztcblxucHJvamVjdHMuYXBwZW5kQ2hpbGQocGx1c0ljb24pO1xuaGVhZGVyLmFwcGVuZENoaWxkKHNpZGViYXJJY29uKTtcbm9uZS5hcHBlbmRDaGlsZChob21lSWNvbik7XG50d28uYXBwZW5kQ2hpbGQocHJvamVjdHNJY29uKTtcbmRhdGUuYXBwZW5kQ2hpbGQoZGF0ZUljb24pO1xuZmluaXNoZWQuYXBwZW5kQ2hpbGQoZmluaXNoZWRJY29uKTtcbnRhZy5hcHBlbmRDaGlsZCh0YWdJY29uKTtcbnByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5SWNvbik7XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93VGFza3ModGFza3MpIHtcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBhZGQgPSBuZXcgSW1hZ2UoKTtcbiAgICBhZGQuc3JjID0gQWRkO1xuICAgIGFkZC5pZCA9ICd0YXNrLWFkZC1wbHVzJztcbiAgICB0YXNrc0NvbnRhaW5lci5pZCA9ICd0YXNrcyc7XG4gICAgaGVhZGVyLmlkID0gJ2N1cnJlbnQtcHJvamVjdCc7XG4gICAgZGl2LmlkID0gJ3Rhc2tzLWhlYWRlcic7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gbW9kZTtcbiAgICBhZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUYXNrKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYWRkKTtcbiAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xuICAgIFxuICAgIGlmICh0YXNrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVkaXRJY29uID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBjb25zdCBkZWxldGVJY29uID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBjb25zdCB0YXNrSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgbmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGNvbnN0IHNjaGVkdWxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgY29uc3QgZWRpdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgZGVsZXRlVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgZWRpdFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBjb25zdCBkZWxldGVUYXNrUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBcbiAgICAgICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzay1pdGVtJyk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgZWRpdERpdi5jbGFzc0xpc3QuYWRkKCdlZGl0Jyk7XG4gICAgICAgICAgICBuYW1lRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stbmFtZScpO1xuICAgICAgICAgICAgc2NoZWR1bGVEaXYuaWQgPSAoJ3NjaGVkdWxlJyk7XG4gICAgICAgICAgICBwcmlvcml0eS5pZCA9ICdwcmlvcml0eS1pbnB1dCc7XG4gICAgXG4gICAgICAgICAgICBlZGl0SWNvbi5zcmMgPSBFZGl0SWNuO1xuICAgICAgICAgICAgZGVsZXRlSWNvbi5zcmMgPSBEZWxldGVJY247XG4gICAgICAgICAgICB0YXNrSWNvbi5zcmMgPSBUYXNrSWNuO1xuICAgIFxuICAgICAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IHRhc2tzW2ldLnRpdGxlO1xuICAgICAgICAgICAgaWYgKHRhc2tzW2ldLmZpbmlzaGVkKSB7XG4gICAgICAgICAgICAgICAgbmFtZS5jbGFzc0xpc3QuYWRkKCdjcm9zc2VkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2tzW2ldLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSAnIScucmVwZWF0KHRhc2tzW2ldLnByaW9yaXR5KTtcbiAgICAgICAgICAgIGRhdGUudGV4dENvbnRlbnQgPSB0YXNrc1tpXS5kdWVEYXRlO1xuICAgICAgICAgICAgdGltZS50ZXh0Q29udGVudCA9IHRhc2tzW2ldLmR1ZVRpbWU7XG4gICAgICAgICAgICBlZGl0UC50ZXh0Q29udGVudCA9ICdEb25lJztcbiAgICAgICAgICAgIGRlbGV0ZVRhc2tQLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBlbGVtZW50O1xuICAgIFxuICAgICAgICAgICAgaWYgKHRhc2tzW2ldLnRhZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRhc2tzW2ldLnRhZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncmVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3JjID0gUmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2JsdWUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zcmMgPSBCbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2dyZWVuJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3JjID0gR3JlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAneWVsbG93JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3JjID0gWWVsbG93O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3B1cnBsZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNyYyA9IFB1cnBsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSAnTm8gVGFncyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkZpbmlzaGVkKTtcbiAgICAgICAgICAgIGRlbGV0ZVRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkRlbGV0ZVRhc2spO1xuICAgICAgICAgICAgaWYgKG1vZGUgPT09ICdGaW5pc2hlZCBUYXNrcycgfHwgbW9kZSA9PT0gJ1RvZGF5JyB8fCBtb2RlID09PSAnVGhpcyBXZWVrJyBcbiAgICAgICAgICAgIHx8IG1vZGUgPT09ICdUaGlzIE1vbnRoJyB8fCBtb2RlID09PSAnUmVkJyB8fCBtb2RlID09PSAnQmx1ZScgfHwgbW9kZSA9PT0gJ0dyZWVuJyBcbiAgICAgICAgICAgIHx8IG1vZGUgPT09ICdZZWxsb3cnIHx8IG1vZGUgPT09ICdQdXJwbGUnIHx8IG1vZGUgPT09ICdMb3cgUHJpb3JpdHknXG4gICAgICAgICAgICB8fCBtb2RlID09PSAnTWVkaXVtIFByaW9yaXR5JyB8fCBtb2RlID09PSAnSGlnaCBQcmlvcml0eScpIHtcbiAgICAgICAgICAgICAgICBlZGl0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25GaW5pc2hlZCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlVGFzay5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9uRGVsZXRlVGFzayk7XG4gICAgICAgICAgICAgICAgZWRpdC5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZVRhc2suY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmFtZURpdi5hcHBlbmRDaGlsZCh0YXNrSWNvbik7XG4gICAgICAgICAgICBuYW1lRGl2LmFwcGVuZENoaWxkKG5hbWUpO1xuICAgICAgICAgICAgZWRpdC5hcHBlbmRDaGlsZChlZGl0SWNvbik7XG4gICAgICAgICAgICBlZGl0LmFwcGVuZENoaWxkKGVkaXRQKTtcbiAgICAgICAgICAgIGRlbGV0ZVRhc2suYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XG4gICAgICAgICAgICBkZWxldGVUYXNrLmFwcGVuZENoaWxkKGRlbGV0ZVRhc2tQKTtcbiAgICAgICAgICAgIGVkaXREaXYuYXBwZW5kQ2hpbGQoZWRpdCk7XG4gICAgICAgICAgICBlZGl0RGl2LmFwcGVuZENoaWxkKGRlbGV0ZVRhc2spO1xuICAgICAgICAgICAgc2NoZWR1bGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgICAgICAgICBzY2hlZHVsZURpdi5hcHBlbmRDaGlsZCh0aW1lKTtcbiAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQobmFtZURpdik7XG4gICAgICAgICAgICB0YXNrLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoc2NoZWR1bGVEaXYpO1xuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgICAgICAgICB0YXNrLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZChlZGl0RGl2KTtcbiAgICAgICAgICAgIHRhc2suaWQgPSBgdGFzay0ke2l9YDtcbiAgICAgICAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2spO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgbm9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIG5vbmUudGV4dENvbnRlbnQgPSAnTm8gdGFza3MgeWV0LCBzdGFydCBhZGRpbmcgbm93ISc7XG4gICAgICAgIG5vbmUuc2V0QXR0cmlidXRlKCdzdHlsZScsICd0ZXh0LWFsaWduOiBzdGFydDsnKTtcbiAgICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQobm9uZSk7XG4gICAgfVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza3NDb250YWluZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1Byb2plY3RzKHByb2plY3RzQXJyKSB7XG4gICAgd2hpbGUgKHByb2plY3RzLmNoaWxkRWxlbWVudENvdW50ID4gMSl7XG4gICAgICAgIHByb2plY3RzLnJlbW92ZUNoaWxkKHByb2plY3RzLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBjb25zdCBpY24gPSBuZXcgSW1hZ2UoKTtcbiAgICBpY24uc3JjID0gTGlzdEljbjtcbiAgICBpY24uY2xhc3NMaXN0LmFkZCgnbGlzdC1pY29uJyk7XG4gICAgZGl2LmlkID0gJ2FsbCc7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY2xhc3MnKTtcbiAgICBoNC50ZXh0Q29udGVudCA9ICdBbGwgVGFza3MnO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpY24pO1xuICAgIGRpdi5hcHBlbmRDaGlsZChoNCk7XG4gICAgcGx1c0ljb24ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZGl2LCBwbHVzSWNvbik7XG5cbiAgICBpY24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHNldE1vZGUoX2RlZmF1bHQudGl0bGUpO1xuICAgICAgICBzaG93VGFza3MoX2RlZmF1bHQudGFza3MpXG4gICAgfSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RJY29uID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGNvbnN0IGRlbCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBcbiAgICAgICAgZGVsLnNyYyA9IERlbGV0ZUljbjI7XG4gICAgICAgIGRlbC5jbGFzc0xpc3QuYWRkKCdkZWwtcHJvamVjdCcpO1xuICAgICAgICBwcm9qZWN0SWNvbi5zcmMgPSBMaXN0SWNuO1xuICAgICAgICBwcm9qZWN0SWNvbi5jbGFzc0xpc3QuYWRkKCdsaXN0LWljb24nKTtcbiAgICAgICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNsYXNzJyk7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHByb2plY3RzQXJyW2ldLnRpdGxlO1xuXG4gICAgICAgIGRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uRGVsZXRlUHJvailcblxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQocHJvamVjdEljb24pO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKGRlbCk7XG4gICAgICAgIHByb2plY3REaXYuaWQgPSBgcHJvamVjdC0ke2l9YDtcbiAgICAgICAgcGx1c0ljb24ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocHJvamVjdERpdiwgcGx1c0ljb24pO1xuXG4gICAgICAgIGlmIChwcm9qZWN0c0Fyci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBwcm9qZWN0SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRNb2RlKHByb2plY3RzQXJyW2ldLnRpdGxlKTtcbiAgICAgICAgICAgICAgICBzaG93VGFza3MocHJvamVjdHNBcnJbaV0udGFza3MpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNob3dUYXNrcyhfZGVmYXVsdC50YXNrcyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRNb2RlKHZhbHVlKSB7XG4gICAgbW9kZSA9IHZhbHVlO1xuICAgIFN0b3JhZ2Uuc2F2ZU1vZGUodmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9kZSgpIHtcbiAgICByZXR1cm4gbW9kZTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=