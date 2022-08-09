"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["index"],{

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
    _local_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.saveProjectArr(projectsArr);
}

let formFlag = true;
let formFlag2 = true;

(0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.setMode)(_local_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.getMode());
projectsArr = _local_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.getProjectArr();
_default = _local_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.getDefault();
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
        return JSON.parse(localStorage.getItem('default-project'));
    }

    static getProjectArr() {
        return JSON.parse(localStorage.getItem('projects-array'));
    }

    static getMode() {
        return JSON.parse(localStorage.getItem('mode'));
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBa0MsR0FBRyxlQUFlLDBEQUEwRCxvQ0FBb0MsR0FBRyxrREFBa0QsMkhBQTJILFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxX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O0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG9EQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLHNEQUFjO0FBQzlCLGtCQUFrQixzREFBYztBQUNoQyxLQUFLOztBQUVMLG9CQUFvQix3QkFBd0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdEQUFVO0FBQzVCO0FBQ0EsMEJBQTBCLG9EQUFPO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0Msb0RBQVk7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLEVBQUU7QUFDckM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsVUFBVTtBQUNWLHNCQUFzQixzREFBYztBQUNwQztBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBLElBQUksNkRBQWdCO0FBQ3BCOztBQUVPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvYXBwLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2xvY2FsLXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvdWkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9mb250cy9tYWluLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9mb250cy9ib2R5Lm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBtYWluO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBtYWluO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIHBhZGRpbmc6IDAlO1xcbiAgbWFyZ2luOiAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBib2R5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjMmMyYztcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBtYXJnaW46IDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5ib2R5IGltZyB7XFxuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcXG4gIC1raHRtbC11c2VyLWRyYWc6IG5vbmU7XFxuICAtbW96LXVzZXItZHJhZzogbm9uZTtcXG4gIC1vLXVzZXItZHJhZzogbm9uZTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjQlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5oZWFkZXIgaDEge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xcbiAgZm9udC1mYW1pbHk6IG1haW4gIWltcG9ydGFudDtcXG59XFxuaGVhZGVyIGltZyB7XFxuICBtYXJnaW4tbGVmdDogMWVtO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtbW96LXRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG4gIC1tcy10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbmhlYWRlciBpbWc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NCwgOTQsIDk0LCAwLjQpO1xcbn1cXG5oZWFkZXIgaW1nLnNob3cge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDE1JTtcXG59XFxuZm9vdGVyIHAge1xcbiAgbWFyZ2luOiAwLjRlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuZm9vdGVyIHAgYTp2aXNpdGVkIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuZm9vdGVyIHAgYTpob3ZlciB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNzaWRlLWJhciB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmM2Y0O1xcbiAgYm9yZGVyOiBibGFjayAycHggc29saWQ7XFxuICB3aWR0aDogMjAlO1xcbiAgbWluLXdpZHRoOiAyODBweDtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG4gIC1tb3otdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLW1zLXRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG4gIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuI2RhdGUtaWNvbiwgI3RhZy1pY29uLCAjcHJpb3JpdHktaWNvbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNkYXRlLWRycGRuLCAjcHJpb3JpdHktZHJwZG4sICN0YWctZHJwZG4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIG1pbi13aWR0aDogMTYwcHg7XFxuICBtYXgtaGVpZ2h0OiAzNTBweDtcXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgei1pbmRleDogMTtcXG4gIG1hcmdpbjogMCU7XFxufVxcbiNkYXRlLWRycGRuIHAsICNwcmlvcml0eS1kcnBkbiBwLCAjdGFnLWRycGRuIHAge1xcbiAgbWFyZ2luOiAwJTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4jZGF0ZS1kcnBkbiBwOmhvdmVyLCAjcHJpb3JpdHktZHJwZG4gcDpob3ZlciwgI3RhZy1kcnBkbiBwOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi50cmFuc2xhdGUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNzBweCk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDcwcHgpO1xcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSg3MHB4KTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSg3MHB4KTtcXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDcwcHgpO1xcbn1cXG5cXG4jZGF0ZS1pY29uOmhvdmVyICNkYXRlLWRycGRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jdGFnLWljb246aG92ZXIgI3RhZy1kcnBkbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI3ByaW9yaXR5LWljb246aG92ZXIgI3ByaW9yaXR5LWRycGRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jZGF0ZS1pY29uLCAjZmluaXNoZWQtaWNvbiwgI3RhZy1pY29uLCAjcHJpb3JpdHktaWNvbiB7XFxuICBtYXgtaGVpZ2h0OiAxMDBweDtcXG4gIG1hcmdpbjogMWVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG4jZGF0ZS1pY29uICNkYXRlLXQsICNkYXRlLWljb24gI3RhZ3MtdCwgI2RhdGUtaWNvbiAjZmluaXNoZWQtdCwgI2RhdGUtaWNvbiAjcHJpb3JpdHktdCwgI2ZpbmlzaGVkLWljb24gI2RhdGUtdCwgI2ZpbmlzaGVkLWljb24gI3RhZ3MtdCwgI2ZpbmlzaGVkLWljb24gI2ZpbmlzaGVkLXQsICNmaW5pc2hlZC1pY29uICNwcmlvcml0eS10LCAjdGFnLWljb24gI2RhdGUtdCwgI3RhZy1pY29uICN0YWdzLXQsICN0YWctaWNvbiAjZmluaXNoZWQtdCwgI3RhZy1pY29uICNwcmlvcml0eS10LCAjcHJpb3JpdHktaWNvbiAjZGF0ZS10LCAjcHJpb3JpdHktaWNvbiAjdGFncy10LCAjcHJpb3JpdHktaWNvbiAjZmluaXNoZWQtdCwgI3ByaW9yaXR5LWljb24gI3ByaW9yaXR5LXQge1xcbiAgZm9udC1zaXplOiAxLjM1cmVtO1xcbiAgbWFyZ2luOiAwJTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbiNkYXRlLWljb24gI2RhdGUtdDo6YWZ0ZXIsICNkYXRlLWljb24gI3RhZ3MtdDo6YWZ0ZXIsICNkYXRlLWljb24gI2ZpbmlzaGVkLXQ6OmFmdGVyLCAjZGF0ZS1pY29uICNwcmlvcml0eS10OjphZnRlciwgI2ZpbmlzaGVkLWljb24gI2RhdGUtdDo6YWZ0ZXIsICNmaW5pc2hlZC1pY29uICN0YWdzLXQ6OmFmdGVyLCAjZmluaXNoZWQtaWNvbiAjZmluaXNoZWQtdDo6YWZ0ZXIsICNmaW5pc2hlZC1pY29uICNwcmlvcml0eS10OjphZnRlciwgI3RhZy1pY29uICNkYXRlLXQ6OmFmdGVyLCAjdGFnLWljb24gI3RhZ3MtdDo6YWZ0ZXIsICN0YWctaWNvbiAjZmluaXNoZWQtdDo6YWZ0ZXIsICN0YWctaWNvbiAjcHJpb3JpdHktdDo6YWZ0ZXIsICNwcmlvcml0eS1pY29uICNkYXRlLXQ6OmFmdGVyLCAjcHJpb3JpdHktaWNvbiAjdGFncy10OjphZnRlciwgI3ByaW9yaXR5LWljb24gI2ZpbmlzaGVkLXQ6OmFmdGVyLCAjcHJpb3JpdHktaWNvbiAjcHJpb3JpdHktdDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gcmlnaHQ7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXMgZWFzZS1vdXQ7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcyBlYXNlLW91dDtcXG4gIC1tb3otdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zIGVhc2Utb3V0O1xcbiAgLW1zLXRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcyBlYXNlLW91dDtcXG4gIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcyBlYXNlLW91dDtcXG59XFxuI2RhdGUtaWNvbiAjZGF0ZS10OmhvdmVyOjphZnRlciwgI2RhdGUtaWNvbiAjdGFncy10OmhvdmVyOjphZnRlciwgI2RhdGUtaWNvbiAjZmluaXNoZWQtdDpob3Zlcjo6YWZ0ZXIsICNkYXRlLWljb24gI3ByaW9yaXR5LXQ6aG92ZXI6OmFmdGVyLCAjZmluaXNoZWQtaWNvbiAjZGF0ZS10OmhvdmVyOjphZnRlciwgI2ZpbmlzaGVkLWljb24gI3RhZ3MtdDpob3Zlcjo6YWZ0ZXIsICNmaW5pc2hlZC1pY29uICNmaW5pc2hlZC10OmhvdmVyOjphZnRlciwgI2ZpbmlzaGVkLWljb24gI3ByaW9yaXR5LXQ6aG92ZXI6OmFmdGVyLCAjdGFnLWljb24gI2RhdGUtdDpob3Zlcjo6YWZ0ZXIsICN0YWctaWNvbiAjdGFncy10OmhvdmVyOjphZnRlciwgI3RhZy1pY29uICNmaW5pc2hlZC10OmhvdmVyOjphZnRlciwgI3RhZy1pY29uICNwcmlvcml0eS10OmhvdmVyOjphZnRlciwgI3ByaW9yaXR5LWljb24gI2RhdGUtdDpob3Zlcjo6YWZ0ZXIsICNwcmlvcml0eS1pY29uICN0YWdzLXQ6aG92ZXI6OmFmdGVyLCAjcHJpb3JpdHktaWNvbiAjZmluaXNoZWQtdDpob3Zlcjo6YWZ0ZXIsICNwcmlvcml0eS1pY29uICNwcmlvcml0eS10OmhvdmVyOjphZnRlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xcbn1cXG4jZGF0ZS1pY29uICNkYXRlLXQ6aG92ZXIsICNkYXRlLWljb24gI3RhZ3MtdDpob3ZlciwgI2RhdGUtaWNvbiAjZmluaXNoZWQtdDpob3ZlciwgI2RhdGUtaWNvbiAjcHJpb3JpdHktdDpob3ZlciwgI2ZpbmlzaGVkLWljb24gI2RhdGUtdDpob3ZlciwgI2ZpbmlzaGVkLWljb24gI3RhZ3MtdDpob3ZlciwgI2ZpbmlzaGVkLWljb24gI2ZpbmlzaGVkLXQ6aG92ZXIsICNmaW5pc2hlZC1pY29uICNwcmlvcml0eS10OmhvdmVyLCAjdGFnLWljb24gI2RhdGUtdDpob3ZlciwgI3RhZy1pY29uICN0YWdzLXQ6aG92ZXIsICN0YWctaWNvbiAjZmluaXNoZWQtdDpob3ZlciwgI3RhZy1pY29uICNwcmlvcml0eS10OmhvdmVyLCAjcHJpb3JpdHktaWNvbiAjZGF0ZS10OmhvdmVyLCAjcHJpb3JpdHktaWNvbiAjdGFncy10OmhvdmVyLCAjcHJpb3JpdHktaWNvbiAjZmluaXNoZWQtdDpob3ZlciwgI3ByaW9yaXR5LWljb24gI3ByaW9yaXR5LXQ6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jc2lkZS1iYXIuc2xpZGUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE1MCUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTUwJSk7XFxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNTAlKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTUwJSk7XFxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTUwJSk7XFxufVxcblxcbiNtaWRkbGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4jb25lLCAjdHdvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI29uZSBoMywgI3R3byBoMyB7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4jb25lIGltZywgI3R3byBpbWcge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDAuN2VtO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtbW96LXRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG4gIC1tcy10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNhbGwge1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjFlbTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbiNhbGwgaW1nIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjZlbTtcXG59XFxuXFxuI3Rhc2tzLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuI3Rhc2tzLWhlYWRlciBpbWcge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcyBlYXNlLWluLW91dDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLW1vei10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtbXMtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLW8tdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG4jdGFza3MtaGVhZGVyIGltZzpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuI3Rhc2tzLWhlYWRlciBpbWc6YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxufVxcblxcbi5wcm9qZWN0LWNsYXNzIHtcXG4gIGhlaWdodDogNjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC4xZW07XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4ucHJvamVjdC1jbGFzcyBkaXYge1xcbiAgd2lkdGg6IDMwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnByb2plY3QtY2xhc3MgaW1nIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjZlbTtcXG59XFxuLnByb2plY3QtY2xhc3MgLmRlbC1wcm9qZWN0IHtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtbW96LXRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcyBlYXNlLWluLW91dDtcXG4gIC1tcy10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5wcm9qZWN0LWNsYXNzIC5kZWwtcHJvamVjdDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuLnByb2plY3QtY2xhc3MgLmRlbC1wcm9qZWN0OmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbn1cXG5cXG4ucHJvamVjdC1jbGFzczpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk0LCA5NCwgOTQsIDAuNCk7XFxufVxcblxcbi5saXN0LWljb24sIC5kZWwtcHJvamVjdCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5saXN0LWljb246aG92ZXIsIC5kZWwtcHJvamVjdDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLmxpc3QtaWNvbjphY3RpdmUsIC5kZWwtcHJvamVjdDphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XFxuXFxuI2Zvcm0zLCAjZm9ybTQsICNmb3JtNiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNwcm9qZWN0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG4jcHJvamVjdHMgI3BsdXMtaWNvbi1zaWRlIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcyBlYXNlLWluLW91dDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLW1vei10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtbXMtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLW8tdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG4jcHJvamVjdHMgI3BsdXMtaWNvbi1zaWRlOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XFxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XFxufVxcbiNwcm9qZWN0cyAjcGx1cy1pY29uLXNpZGU6YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxufVxcbiNwcm9qZWN0cyBoNCB7XFxuICBmb250LXNpemU6IDEuMzJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBtYXJnaW46IDAlO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcbiNwcm9qZWN0cyAjZm9ybS1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNwcm9qZWN0cyAjZm9ybS1jb250YWluZXIgZm9ybSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jcHJvamVjdHMgI2Zvcm0tY29udGFpbmVyIGZvcm0gaW5wdXQge1xcbiAgcGFkZGluZzogMS4xZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNzBweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC1vLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDJweCBzb2xpZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcbiNwcm9qZWN0cyAjZm9ybS1jb250YWluZXIgZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgZm9udC1zaXplOiAwLjgxcmVtO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtbW96LXRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG4gIC1tcy10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbiNwcm9qZWN0cyAjZm9ybS1jb250YWluZXIgZm9ybSBpbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xOHB4KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xOHB4KTtcXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xOHB4KTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE4cHgpO1xcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xOHB4KTtcXG59XFxuI3Byb2plY3RzICNmb3JtLWNvbnRhaW5lciBmb3JtIGlucHV0OmludmFsaWQ6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XFxufVxcbiNwcm9qZWN0cyAjZm9ybS1jb250YWluZXIgZm9ybSBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4jcHJvamVjdHMgI2Zvcm0tY29udGFpbmVyIGZvcm0gaW5wdXQ6dmFsaWQge1xcbiAgYm9yZGVyLWNvbG9yOiBncmVlbjtcXG59XFxuI3Byb2plY3RzICNmb3JtLWNvbnRhaW5lciAjYnRucyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI3Byb2plY3RzICNmb3JtLWNvbnRhaW5lciAjYnRucyBidXR0b24ge1xcbiAgd2lkdGg6IDUwJTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDEuMTNyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC1tcy1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtby1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcyBlYXNlLWluLW91dDtcXG4gIC1tb3otdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLW1zLXRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcyBlYXNlLWluLW91dDtcXG4gIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcyBlYXNlLWluLW91dDtcXG59XFxuI3Byb2plY3RzICNmb3JtLWNvbnRhaW5lciAjYnRucyBidXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNwcm9qZWN0cyAjZm9ybS1jb250YWluZXIgI2J0bnMgYnV0dG9uOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbn1cXG5cXG4jdGFza3Mge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG4gIC1tb3otdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLW1zLXRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG4gIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG59XFxuI3Rhc2tzIGgyIHtcXG4gIHdpZHRoOiAyMCU7XFxuICBwYWRkaW5nOiAwLjhlbTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAtbXMtYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIC1vLWJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcbiN0YXNrcyAudGFzay1pdGVtIHtcXG4gIGhlaWdodDogMTEwcHg7XFxuICBtaW4td2lkdGg6IDExMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICBtYXJnaW46IDFlbTtcXG4gIG1hcmdpbi1sZWZ0OiAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtbXMtYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC1vLWJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAwLjhlbTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTBtcyBlYXNlLWluLW91dDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwbXMgZWFzZS1pbi1vdXQ7XFxuICAtbW96LXRyYW5zaXRpb246IHRyYW5zZm9ybSA1MG1zIGVhc2UtaW4tb3V0O1xcbiAgLW1zLXRyYW5zaXRpb246IHRyYW5zZm9ybSA1MG1zIGVhc2UtaW4tb3V0O1xcbiAgLW8tdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbiN0YXNrcyAudGFzay1pdGVtIHAge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBtYXJnaW46IDFlbTtcXG4gIG1heC13aWR0aDogMTYlO1xcbiAgbWluLXdpZHRoOiAxNiU7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG4jdGFza3MgLnRhc2staXRlbSBwI3ByaW9yaXR5LWlucHV0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgbWFyZ2luOiAwJTtcXG4gIG1heC13aWR0aDogNSU7XFxuICBtaW4td2lkdGg6IDUlO1xcbn1cXG4jdGFza3MgLnRhc2staXRlbSAjc2NoZWR1bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IDE1JTtcXG4gIG1pbi13aWR0aDogMTUlO1xcbiAgbWFyZ2luLXRvcDogMC41ZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuI3Rhc2tzIC50YXNrLWl0ZW0gI3NjaGVkdWxlIHAge1xcbiAgbWluLXdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwJTtcXG59XFxuI3Rhc2tzIC50YXNrLWl0ZW0gLmVkaXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBtYXgtaGVpZ2h0OiAxMTBweDtcXG4gIG1heC13aWR0aDogMTMlO1xcbiAgbWluLXdpZHRoOiAxMyU7XFxufVxcbiN0YXNrcyAudGFzay1pdGVtIC5lZGl0IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC4yZW07XFxuICBoZWlnaHQ6IDQycHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtbXMtYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLW8tYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDgwbXMgZWFzZS1pbi1vdXQ7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSA4MG1zIGVhc2UtaW4tb3V0O1xcbiAgLW1vei10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gODBtcyBlYXNlLWluLW91dDtcXG4gIC1tcy10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gODBtcyBlYXNlLWluLW91dDtcXG4gIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSA4MG1zIGVhc2UtaW4tb3V0O1xcbn1cXG4jdGFza3MgLnRhc2staXRlbSAuZWRpdCBkaXYgcCB7XFxuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG4jdGFza3MgLnRhc2staXRlbSAuZWRpdCBkaXY6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiN0YXNrcyAudGFzay1pdGVtIC5lZGl0IGRpdjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XFxuI3Rhc2tzIC50YXNrLWl0ZW0gLnRhc2stbmFtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgbWF4LXdpZHRoOiAyMCU7XFxuICBtaW4td2lkdGg6IDIwJTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDAuMmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtbXMtYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLW8tYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgaGVpZ2h0OiA4MCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuI3Rhc2tzIC50YXNrLWl0ZW0gLmRlc2NyaXB0aW9uIHtcXG4gIG1pbi13aWR0aDogMjIlO1xcbiAgbWF4LXdpZHRoOiAyMiU7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcXG59XFxuI3Rhc2tzIC50YXNrLWl0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NCwgOTQsIDk0LCAwLjQpO1xcbn1cXG5cXG4uc2xpZGUtbGVmdCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjAlKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIwJSk7XFxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMCUpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMCUpO1xcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIwJSk7XFxufVxcblxcbiNkYXRlLWljb24sICNmaW5pc2hlZC1pY29uLCAjdGFnLWljb24sICNwcmlvcml0eS1pY29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAzMCU7XFxufVxcbiNkYXRlLWljb24gaW1nLCAjZmluaXNoZWQtaWNvbiBpbWcsICN0YWctaWNvbiBpbWcsICNwcmlvcml0eS1pY29uIGltZyB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIHdpZHRoOiA3NSU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG4gIC1tb3otdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLW1zLXRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG4gIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuI3Rhc2stZm9ybS1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMzUwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgcGFkZGluZzogMmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICB6LWluZGV4OiA5OTk5O1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAtbXMtYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIC1vLWJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiN0YXNrLWZvcm0tY29udGFpbmVyIGltZyB7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nOiAwJTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcyBlYXNlLWluLW91dDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLW1vei10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtbXMtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLW8tdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG4jdGFzay1mb3JtLWNvbnRhaW5lciBpbWc6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcXG59XFxuI3Rhc2stZm9ybS1jb250YWluZXIgaW1nOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbn1cXG4jdGFzay1mb3JtLWNvbnRhaW5lciBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBib3JkZXI6IDJweCB3aGl0ZSBzb2xpZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDAuNzVlbSAxLjVlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLXRvcDogMS4yZW07XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcyBlYXNlLWluLW91dDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLW1vei10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtbXMtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLW8tdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGVhc2UtaW4tb3V0O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC1tcy1ib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLW8tYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuI3Rhc2stZm9ybS1jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG4jdGFzay1mb3JtLWNvbnRhaW5lciBidXR0b246YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxufVxcblxcbiNhZGQtdGFzay1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4jYWRkLXRhc2stZm9ybSBpbnB1dCwgI2FkZC10YXNrLWZvcm0gc2VsZWN0IHtcXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuMmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC1vLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbiNhZGQtdGFzay1mb3JtIGlucHV0OmludmFsaWQ6Zm9jdXMsICNhZGQtdGFzay1mb3JtIHNlbGVjdDppbnZhbGlkOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogcmVkO1xcbn1cXG4jYWRkLXRhc2stZm9ybSBpbnB1dDpmb2N1cywgI2FkZC10YXNrLWZvcm0gc2VsZWN0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbiNhZGQtdGFzay1mb3JtIGlucHV0OnZhbGlkLCAjYWRkLXRhc2stZm9ybSBzZWxlY3Q6dmFsaWQge1xcbiAgYm9yZGVyLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnBvcHVwIHtcXG4gIGZpbHRlcjogYmx1cigyMHB4KTtcXG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDEwcHgpO1xcbn1cXG5cXG4jbWFzayB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHotaW5kZXg6IDkwMDA7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uY3Jvc3NlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLmRpc2FibGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAhaW1wb3J0YW50O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxpQkFBQTtFQUNBLDRDQUFBO0FDQ0o7QURFQTtFQUNJLGlCQUFBO0VBQ0EsNENBQUE7QUNBSjtBREdBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0RKOztBRElBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBRUEsc0JBQUE7RUFDQSw0QkFB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X19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLFxuICAgIGR1ZVRpbWUsIHByaW9yaXR5LCB0YWdzID0gJycpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMuZHVlVGltZSA9IGR1ZVRpbWU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy50YWdzID0gdGFncztcbiAgICAgICAgdGhpcy5maW5pc2hlZCA9IGZhbHNlO1xuICAgIH1cbn1cbiIsImltcG9ydCBRdWl0IGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvcXVpdC5wbmcnO1xuaW1wb3J0IHtzaG93UHJvamVjdHMsIHNob3dUYXNrcywgZ2V0TW9kZSwgc2V0TW9kZX0gZnJvbSAnLi91aS5qcyc7XG5pbXBvcnQge1Rhc2ssIFByb2plY3R9IGZyb20gJy4vYXBwLmpzJztcbmltcG9ydCB7U3RvcmFnZX0gZnJvbSAnLi9sb2NhbC1zdG9yYWdlJztcblxuZXhwb3J0IGxldCBwcm9qZWN0c0FyciA9IFtdO1xuZXhwb3J0IGxldCBfZGVmYXVsdCA9IG5ldyBQcm9qZWN0KCdBbGwgVGFza3MnKTtcbmlmIChTdG9yYWdlLmdldFByb2plY3RBcnIoKSA9PSBbXSkge1xuICAgIFN0b3JhZ2Uuc2F2ZVByb2plY3RBcnIocHJvamVjdHNBcnIpO1xufVxuXG5sZXQgZm9ybUZsYWcgPSB0cnVlO1xubGV0IGZvcm1GbGFnMiA9IHRydWU7XG5cbnNldE1vZGUoU3RvcmFnZS5nZXRNb2RlKCkpO1xucHJvamVjdHNBcnIgPSBTdG9yYWdlLmdldFByb2plY3RBcnIoKTtcbl9kZWZhdWx0ID0gU3RvcmFnZS5nZXREZWZhdWx0KCk7XG5zaG93UHJvamVjdHMocHJvamVjdHNBcnIpO1xuc2hvd1Rhc2tzKF9kZWZhdWx0LnRhc2tzKTtcblxuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlLWJhcicpO1xuY29uc3Qgc2lkZWJhckljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZS1iYXItaWNvbicpO1xuY29uc3QgcHJvamVjdFBsdXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGx1cy1pY29uLXNpZGUnKTtcbmNvbnN0IHRhc2tQbHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stYWRkLXBsdXMnKTtcblxuc2lkZWJhckljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2lkZWJhckljb24uY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LnRvZ2dsZSgnc2xpZGUnKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmNsYXNzTGlzdC50b2dnbGUoJ3NsaWRlLWxlZnQnKTtcbn0pO1xuXG5wcm9qZWN0UGx1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFByb2plY3QpO1xudGFza1BsdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUYXNrKTtcblxuZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcbiAgICBpZiAoZm9ybUZsYWcpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCBhZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFkZC50ZXh0Q29udGVudCA9ICdBZGQnO1xuICAgICAgICBjYW5jZWwudGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgICAgICAgXG4gICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnIycpO1xuICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZSgnbWV0aG9kJywgJ2dldCcpO1xuICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcm9qZWN0Rm9ybScpO1xuXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnUHJvamVjdCBUaXRsZScpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbmxlbmd0aCcsICcxJyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgJzEyJyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgICAgICBcbiAgICAgICAgZm9ybS5pZCA9ICdwcm9qZWN0LWZvcm0nO1xuICAgICAgICBpbnB1dC5pZCA9ICdwcm9qZWN0LWZvcm0tbmFtZSc7XG5cbiAgICAgICAgY29udGFpbmVyLmlkID0gJ2Zvcm0tY29udGFpbmVyJztcbiAgICAgICAgYWRkLmlkID0gJ2FkZC1idXR0b24nO1xuICAgICAgICBjYW5jZWwuaWQgPSAnY2FuY2VsLWJ1dHRvbic7XG4gICAgICAgIGJ1dHRvbnMuaWQgPSAnYnRucyc7XG4gICAgICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoYWRkKTtcbiAgICAgICAgYnV0dG9ucy5hcHBlbmRDaGlsZChjYW5jZWwpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9ucyk7XG4gICAgICAgIHByb2plY3RQbHVzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNvbnRhaW5lciwgcHJvamVjdFBsdXMpO1xuICAgICAgICBhZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkFkZFByb2plY3QpO1xuICAgICAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNhbmNlbCk7XG4gICAgICAgIGZvcm1GbGFnID0gZmFsc2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBvbkFkZFByb2plY3QoKSB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1mb3JtLW5hbWUnKTtcbiAgICBpZiAoaW5wdXQucmVwb3J0VmFsaWRpdHkoKSkge1xuICAgICAgICBjb25zdCBhZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWJ1dHRvbicpO1xuICAgICAgICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KGlucHV0LnZhbHVlKTtcbiAgICAgICAgcHJvamVjdHNBcnIucHVzaChwcm9qZWN0KTtcbiAgICAgICAgU3RvcmFnZS5zYXZlUHJvamVjdEFycihwcm9qZWN0c0Fycik7XG4gICAgICAgIHNob3dQcm9qZWN0cyhwcm9qZWN0c0Fycik7XG4gICAgICAgIGZvcm1GbGFnID0gdHJ1ZTtcblxuICAgICAgICBhZGQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkFkZFByb2plY3QpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gb25DYW5jZWwoKSB7XG4gICAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbC1idXR0b24nKTtcbiAgICBzaG93UHJvamVjdHMocHJvamVjdHNBcnIpO1xuICAgIGZvcm1GbGFnID0gdHJ1ZTtcbiAgICBjYW5jZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkFkZFByb2plY3QpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25EZWxldGVQcm9qKGV2ZW50KSB7XG4gICAgY29uc3QgcHJvamVjdCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlO1xuICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdC5pZC5zcGxpdCgnLScpWzFdO1xuICAgIGxldCBydGFza3MgPSBwcm9qZWN0c0Fycltwcm9qZWN0LmlkLnNwbGl0KCctJylbMV1dLnRhc2tzXG4gICAgX2RlZmF1bHQudGFza3MuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgaWYgKHJ0YXNrcy5pbmNsdWRlcyhlbGVtZW50KSkge1xuICAgICAgICAgICAgX2RlZmF1bHQudGFza3Muc3BsaWNlKF9kZWZhdWx0LnRhc2tzLmluZGV4T2YoZWxlbWVudCksIDEpXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBTdG9yYWdlLnNhdmVEZWZhdWx0KF9kZWZhdWx0KTtcbiAgICBzZXRNb2RlKF9kZWZhdWx0LnRpdGxlKTtcbiAgICBzaG93VGFza3MoX2RlZmF1bHQudGFza3MpO1xuICAgIHByb2plY3RzQXJyLnNwbGljZShpbmRleCwgMSlcbiAgICBTdG9yYWdlLnNhdmVQcm9qZWN0QXJyKHByb2plY3RzQXJyKTtcbiAgICBwcm9qZWN0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocHJvamVjdCk7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBmbGFnID0gdHJ1ZTtcbiAgICBsZXQgYXJyID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKS5jaGlsZHJlbik7XG4gICAgYXJyLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgIT09ICdJTUcnKXtcbiAgICAgICAgICAgIGlmIChmbGFnKSB7XG4gICAgICAgICAgICAgICAgZmxhZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsZW1lbnQuaWQgPSBgcHJvamVjdC0ke2l9YDtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVGFzaygpIHtcbiAgICBpZiAoZm9ybUZsYWcyKSB7XG4gICAgICAgIGNvbnN0IHF1aXQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgZHVlVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgdGFncyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBjb25zdCBvcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgY29uc3Qgb3AyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGNvbnN0IG9wMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBjb25zdCBvcDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgY29uc3Qgb3A1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGNvbnN0IG9wNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBjb25zdCBtYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgdGl0bGUuaWQgPSAnZm9ybTEnO1xuICAgICAgICBkZXNjLmlkID0gJ2Zvcm0yJztcbiAgICAgICAgZHVlRGF0ZS5pZCA9ICdmb3JtMyc7XG4gICAgICAgIGR1ZVRpbWUuaWQgPSAnZm9ybTQnO1xuICAgICAgICBwcmlvcml0eS5pZCA9ICdmb3JtNSc7XG4gICAgICAgIHRhZ3MuaWQgPSAnZm9ybTYnO1xuXG4gICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnIycpO1xuICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZSgnbWV0aG9kJywgJ2dldCcpO1xuICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZSgnbmFtZScsICd0YXNrRm9ybScpO1xuXG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnKlRhc2sgVGl0bGUnKTtcbiAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdtaW5sZW5ndGgnLCAnMScpO1xuICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsICcxMicpO1xuICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2F1dG9jb21wbGV0ZScsICdvZmYnKTtcbiAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcblxuICAgICAgICBkZXNjLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgIGRlc2Muc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICcqRGVzY3JpcHRpb24nKTtcbiAgICAgICAgZGVzYy5zZXRBdHRyaWJ1dGUoJ21pbmxlbmd0aCcsICcxJyk7XG4gICAgICAgIGRlc2Muc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnNzgnKTtcbiAgICAgICAgZGVzYy5zZXRBdHRyaWJ1dGUoJ2F1dG9jb21wbGV0ZScsICdvZmYnKTtcbiAgICAgICAgZGVzYy5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuXG4gICAgICAgIGR1ZURhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICAgICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ21pbicsIG5ldyBEYXRlKCkudG9KU09OKCkuc2xpY2UoMCwxMCkpO1xuICAgICAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gICAgICAgIFxuICAgICAgICBkdWVUaW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0aW1lJyk7XG4gICAgICAgIGR1ZVRpbWUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcblxuICAgICAgICB0YWdzLnNldEF0dHJpYnV0ZSgnbmFtZScsICd0YWdTZWxlY3QnKTtcbiAgICAgICAgdGFncy5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuXG4gICAgICAgIG9wMS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJycpO1xuICAgICAgICBvcDEuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcbiAgICAgICAgb3AxLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnJyk7XG5cbiAgICAgICAgb3AyLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAncmVkJyk7XG4gICAgICAgIG9wMy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2JsdWUnKTtcbiAgICAgICAgb3A0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnZ3JlZW4nKTtcbiAgICAgICAgb3A1LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAneWVsbG93Jyk7XG4gICAgICAgIG9wNi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ3B1cnBsZScpO1xuXG4gICAgICAgIHByaW9yaXR5LnNldEF0dHJpYnV0ZSgndHlwZScsICdudW1iZXInKTtcbiAgICAgICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICcqUHJpb3JpdHkgKDEtMyknKTtcbiAgICAgICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnMScpO1xuICAgICAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ21pbicsICcxJyk7XG4gICAgICAgIHByaW9yaXR5LnNldEF0dHJpYnV0ZSgnbWF4JywgJzMnKTtcbiAgICAgICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCdhdXRvY29tcGxldGUnLCAnb2ZmJyk7XG4gICAgICAgIHByaW9yaXR5LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG5cbiAgICAgICAgcXVpdC5zcmMgPSBRdWl0O1xuICAgICAgICBhZGQudGV4dENvbnRlbnQgPSAnQWRkJztcbiAgICAgICAgb3AxLnRleHRDb250ZW50ID0gJ1RhZyc7XG4gICAgICAgIG9wMi50ZXh0Q29udGVudCA9ICdSZWQnO1xuICAgICAgICBvcDMudGV4dENvbnRlbnQgPSAnQmx1ZSc7XG4gICAgICAgIG9wNC50ZXh0Q29udGVudCA9ICdHcmVlbic7XG4gICAgICAgIG9wNS50ZXh0Q29udGVudCA9ICdZZWxsb3cnO1xuICAgICAgICBvcDYudGV4dENvbnRlbnQgPSAnUHVycGxlJztcblxuICAgICAgICBmb3JtLmlkID0gJ2FkZC10YXNrLWZvcm0nO1xuICAgICAgICBkaXYuaWQgPSAndGFzay1mb3JtLWNvbnRhaW5lcic7XG4gICAgICAgIG1hc2suaWQgPSAnbWFzayc7XG4gICAgICAgIGFkZC5pZCA9ICd0YXNrLWFkZC1idG4nO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaWRkbGUnKS5jbGFzc0xpc3QuYWRkKCdwb3B1cCcpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKS5jbGFzc0xpc3QuYWRkKCdwb3B1cCcpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKS5jbGFzc0xpc3QuYWRkKCdwb3B1cCcpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1hc2spO1xuXG4gICAgICAgIHRhZ3MuYXBwZW5kKG9wMSk7XG4gICAgICAgIHRhZ3MuYXBwZW5kKG9wMik7XG4gICAgICAgIHRhZ3MuYXBwZW5kKG9wMyk7XG4gICAgICAgIHRhZ3MuYXBwZW5kKG9wNCk7XG4gICAgICAgIHRhZ3MuYXBwZW5kKG9wNSk7XG4gICAgICAgIHRhZ3MuYXBwZW5kKG9wNik7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2MpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGR1ZVRpbWUpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRhZ3MpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHF1aXQpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChhZGQpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIGFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQWRkVGFzayk7XG5cbiAgICAgICAgcXVpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaWRkbGUnKS5jbGFzc0xpc3QucmVtb3ZlKCdwb3B1cCcpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuY2xhc3NMaXN0LnJlbW92ZSgncG9wdXAnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHVwJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG1hc2spO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkaXYpO1xuICAgICAgICAgICAgZm9ybUZsYWcyID0gdHJ1ZTtcbiAgICAgICAgfSlcblxuICAgICAgICBmb3JtRmxhZzIgPSBmYWxzZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG9uQWRkVGFzaygpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtMScpO1xuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybTInKTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0zJyk7XG4gICAgY29uc3QgdGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtNCcpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm01Jyk7XG4gICAgY29uc3QgdGFncyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtNicpO1xuXG4gICAgaWYgKHRpdGxlLnJlcG9ydFZhbGlkaXR5KCkgJiYgZGVzYy5yZXBvcnRWYWxpZGl0eSgpICYmIGRhdGUucmVwb3J0VmFsaWRpdHkoKVxuICAgICYmIHRpbWUucmVwb3J0VmFsaWRpdHkoKSAmJiBwcmlvcml0eS5yZXBvcnRWYWxpZGl0eSgpICYmIHRhZ3MucmVwb3J0VmFsaWRpdHkoKSkge1xuICAgICAgICBjb25zdCBhZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1hZGQtYnRuJyk7XG5cbiAgICAgICAgbGV0IHRhc2sgPSBuZXcgVGFzayh0aXRsZS52YWx1ZSwgZGVzYy52YWx1ZSwgbmV3IERhdGUoZGF0ZS52YWx1ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCksIHRpbWUudmFsdWUsIHByaW9yaXR5LnZhbHVlLCB0YWdzLnZhbHVlKTtcbiAgICAgICAgX2RlZmF1bHQudGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgcHJvamVjdHNBcnIuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRpdGxlID09PSBnZXRNb2RlKCkpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnRhc2tzLnB1c2godGFzayk7XG4gICAgICAgICAgICAgICAgc2hvd1Rhc2tzKGVsZW1lbnQudGFza3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoZ2V0TW9kZSgpID09PSAnQWxsIFRhc2tzJykge1xuICAgICAgICAgICAgc2hvd1Rhc2tzKF9kZWZhdWx0LnRhc2tzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFN0b3JhZ2Uuc2F2ZURlZmF1bHQoX2RlZmF1bHQpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdGFza1BsdXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1hZGQtcGx1cycpO1xuICAgICAgICB0YXNrUGx1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFRhc2spO1xuICAgICAgICBhZGQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkFkZFRhc2spO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlkZGxlJykuY2xhc3NMaXN0LnJlbW92ZSgncG9wdXAnKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuY2xhc3NMaXN0LnJlbW92ZSgncG9wdXAnKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJykuY2xhc3NMaXN0LnJlbW92ZSgncG9wdXAnKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFzaycpKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1mb3JtLWNvbnRhaW5lcicpKTtcbiAgICAgICAgZm9ybUZsYWcyID0gdHJ1ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkZpbmlzaGVkKGV2ZW50KSB7XG4gICAgbGV0IHRhc2s7XG4gICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnRElWJyl7XG4gICAgICAgIHRhc2sgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRhc2sgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gdGFzay5pZC5zcGxpdCgnLScpWzFdO1xuICAgIF9kZWZhdWx0LnRhc2tzW2luZGV4XS5maW5pc2hlZCA9IHRydWU7XG4gICAgU3RvcmFnZS5zYXZlRGVmYXVsdChfZGVmYXVsdCk7XG4gICAgbGV0IG5hbWUgPSB0YXNrLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdO1xuICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgnY3Jvc3NlZCcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25EZWxldGVUYXNrKGV2ZW50KSB7XG4gICAgbGV0IHRhc2s7XG4gICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnRElWJyl7XG4gICAgICAgIHRhc2sgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRhc2sgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gdGFzay5pZC5zcGxpdCgnLScpWzFdO1xuICAgIF9kZWZhdWx0LnRhc2tzLnNwbGljZShpbmRleCwxKTtcbiAgICBTdG9yYWdlLnNhdmVEZWZhdWx0KF9kZWZhdWx0KTtcbiAgICB0YXNrLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGFzayk7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBhcnIgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrcycpLmNoaWxkcmVuKTtcbiAgICBhcnIuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrLWl0ZW0nKSkge1xuICAgICAgICAgICAgZWxlbWVudC5pZCA9IGB0YXNrLSR7aX1gO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmNvbnN0IGZpbmlzaGVkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbmlzaGVkLXQnKTtcbmNvbnN0IGRhdGUxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5LWRkJyk7XG5jb25zdCBkYXRlMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGlzLXdlZWstZGQnKTtcbmNvbnN0IGRhdGUzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoaXMtbW9udGgtZGQnKTtcbmNvbnN0IHRhZzEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVkLWRkJyk7XG5jb25zdCB0YWcyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JsdWUtZGQnKTtcbmNvbnN0IHRhZzMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JlZW4tZGQnKTtcbmNvbnN0IHRhZzQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneWVsbG93LWRkJyk7XG5jb25zdCB0YWc1ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3B1cnBsZS1kZCcpO1xuY29uc3QgcHJpb3JpdHkxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29uZS1kZCcpO1xuY29uc3QgcHJpb3JpdHkyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R3by1kZCcpO1xuY29uc3QgcHJpb3JpdHkzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RocmVlLWRkJyk7XG5cbmZpbmlzaGVkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNldE1vZGUoJ0ZpbmlzaGVkIFRhc2tzJyk7XG4gICAgbGV0IGFyciA9IF9kZWZhdWx0LnRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suZmluaXNoZWQpO1xuICAgIHNob3dUYXNrcyhhcnIpO1xufSk7XG5cbmRhdGUxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNldE1vZGUoJ1RvZGF5Jyk7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9kZWZhdWx0LnRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0YXNrID0gX2RlZmF1bHQudGFza3NbaV07XG4gICAgICAgIGxldCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2suZHVlRGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4gICAgICAgIGlmICh0YXNrRGF0ZSA9PT0gdG9kYXkpIHtcbiAgICAgICAgICAgIGFyci5wdXNoKHRhc2spO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNob3dUYXNrcyhhcnIpO1xufSk7XG5cbmRhdGUyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNldE1vZGUoJ1RoaXMgV2VlaycpO1xuICAgIGNvbnN0IGRheSA9IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpICsgNztcbiAgICBjb25zdCBtb250aCA9IG5ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDE7XG4gICAgY29uc3QgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCB3ZWVrID0gbmV3IERhdGUoYCR7bW9udGh9LyR7ZGF5fS8ke3llYXJ9YClcbiAgICBcbiAgICBsZXQgYXJyID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfZGVmYXVsdC50YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdGFzayA9IF9kZWZhdWx0LnRhc2tzW2ldO1xuICAgICAgICBsZXQgdGFza0RhdGUgPSBuZXcgRGF0ZSh0YXNrLmR1ZURhdGUpO1xuICAgICAgICBpZiAoZ2V0RGlmZmVyZW5jZUluRGF5cyh0YXNrRGF0ZSwgd2VlaykgPD0gNykge1xuICAgICAgICAgICAgYXJyLnB1c2godGFzayk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2hvd1Rhc2tzKGFycik7XG59KTtcblxuZGF0ZTMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2V0TW9kZSgnVGhpcyBNb250aCcpO1xuICAgIGNvbnN0IG1vbnRoID0gbmV3IERhdGUoKS5nZXRNb250aCgpO1xuICAgIFxuICAgIGxldCBhcnIgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9kZWZhdWx0LnRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0YXNrID0gX2RlZmF1bHQudGFza3NbaV07XG4gICAgICAgIGxldCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2suZHVlRGF0ZSk7XG4gICAgICAgIGlmICh0YXNrRGF0ZS5nZXRNb250aCgpID09IG1vbnRoKSB7XG4gICAgICAgICAgICBhcnIucHVzaCh0YXNrKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzaG93VGFza3MoYXJyKTtcbn0pO1xuXG50YWcxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNldE1vZGUoJ1JlZCcpO1xuICAgIGxldCBhcnIgPSBfZGVmYXVsdC50YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLnRhZ3MgPT09ICdyZWQnKTtcbiAgICBzaG93VGFza3MoYXJyKTtcbn0pO1xuXG50YWcyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNldE1vZGUoJ0JsdWUnKTtcbiAgICBsZXQgYXJyID0gX2RlZmF1bHQudGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay50YWdzID09PSAnYmx1ZScpO1xuICAgIHNob3dUYXNrcyhhcnIpO1xufSk7XG5cbnRhZzMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2V0TW9kZSgnR3JlZW4nKTtcbiAgICBsZXQgYXJyID0gX2RlZmF1bHQudGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay50YWdzID09PSAnZ3JlZW4nKTtcbiAgICBzaG93VGFza3MoYXJyKTtcbn0pO1xuXG50YWc0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNldE1vZGUoJ1llbGxvdycpO1xuICAgIGxldCBhcnIgPSBfZGVmYXVsdC50YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLnRhZ3MgPT09ICd5ZWxsb3cnKTtcbiAgICBzaG93VGFza3MoYXJyKTtcbn0pO1xuXG50YWc1LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNldE1vZGUoJ1B1cnBsZScpO1xuICAgIGxldCBhcnIgPSBfZGVmYXVsdC50YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLnRhZ3MgPT09ICdwdXJwbGUnKTtcbiAgICBzaG93VGFza3MoYXJyKTtcbn0pO1xuXG5wcmlvcml0eTEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2V0TW9kZSgnTG93IFByaW9yaXR5Jyk7XG4gICAgbGV0IGFyciA9IF9kZWZhdWx0LnRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2sucHJpb3JpdHkgPT0gJzEnKTtcbiAgICBzaG93VGFza3MoYXJyKTtcbn0pO1xuXG5wcmlvcml0eTIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2V0TW9kZSgnTWVkaXVtIFByaW9yaXR5Jyk7XG4gICAgbGV0IGFyciA9IF9kZWZhdWx0LnRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2sucHJpb3JpdHkgPT0gJzInKTtcbiAgICBzaG93VGFza3MoYXJyKTtcbn0pO1xuXG5wcmlvcml0eTMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2V0TW9kZSgnSGlnaCBQcmlvcml0eScpO1xuICAgIGxldCBhcnIgPSBfZGVmYXVsdC50YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLnByaW9yaXR5ID09ICczJyk7XG4gICAgc2hvd1Rhc2tzKGFycik7XG59KTtcblxuZnVuY3Rpb24gZ2V0RGlmZmVyZW5jZUluRGF5cyhkYXRlMSwgZGF0ZTIpIHtcbiAgICBjb25zdCBkaWZmSW5NcyA9IE1hdGguYWJzKGRhdGUyIC0gZGF0ZTEpO1xuICAgIHJldHVybiBkaWZmSW5NcyAvICgxMDAwICogNjAgKiA2MCAqIDI0KTtcbn1cbiIsImV4cG9ydCBjbGFzcyBTdG9yYWdlIHtcblxuICAgIHN0YXRpYyBzYXZlRGVmYXVsdCh4KSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkZWZhdWx0LXByb2plY3QnLCBKU09OLnN0cmluZ2lmeSh4KSk7XG4gICAgfVxuICAgIFxuICAgIHN0YXRpYyBzYXZlUHJvamVjdEFycih4KSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cy1hcnJheScsIEpTT04uc3RyaW5naWZ5KHgpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2F2ZU1vZGUoeCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbW9kZScsIEpTT04uc3RyaW5naWZ5KHgpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0RGVmYXVsdCgpIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RlZmF1bHQtcHJvamVjdCcpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0UHJvamVjdEFycigpIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzLWFycmF5JykpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRNb2RlKCkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbW9kZScpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgU2lkZWJhckljbiBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3NpZGUtYmFyLnBuZyc7XG5pbXBvcnQgUGx1c0ljbiBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3BsdXMucG5nJztcbmltcG9ydCBQcm9qZWN0SWNuIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvcHJvamVjdHMucG5nJztcbmltcG9ydCBIb21lSWNuIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvaG9tZS5wbmcnO1xuaW1wb3J0IExpc3RJY24gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9saXN0LnBuZyc7XG5pbXBvcnQgRGF0ZUljbiBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2NhbGVuZGFyLnBuZyc7XG5pbXBvcnQgRmluaXNoZWRJY24gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy90aWNrLnBuZyc7XG5pbXBvcnQgVGFnSWNuIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvdGFnLnBuZyc7XG5pbXBvcnQgUHJpb3JpdHlJY24gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9wcmlvcml0eS5wbmcnO1xuaW1wb3J0IEVkaXRJY24gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9maW5pc2gucG5nJztcbmltcG9ydCBEZWxldGVJY24gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9kZWxldGUucG5nJztcbmltcG9ydCBEZWxldGVJY24yIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvZGVsZXRlMi5wbmcnO1xuaW1wb3J0IFRhc2tJY24gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy90YXNrLnBuZyc7XG5pbXBvcnQgQWRkIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvYWRkcGx1cy5wbmcnO1xuaW1wb3J0IFJlZCBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3JlZC5wbmcnO1xuaW1wb3J0IEJsdWUgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9ibHVlLnBuZyc7XG5pbXBvcnQgR3JlZW4gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9ncmVlbi5wbmcnO1xuaW1wb3J0IFllbGxvdyBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3llbGxvdy5wbmcnO1xuaW1wb3J0IFB1cnBsZSBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3B1cnBsZS5wbmcnO1xuaW1wb3J0IHtvbkRlbGV0ZVByb2osIG9uRGVsZXRlVGFzaywgX2RlZmF1bHQsIGFkZFRhc2ssIG9uRmluaXNoZWR9IGZyb20gJy4vaW5kZXguanMnO1xuaW1wb3J0IHtTdG9yYWdlfSBmcm9tICcuL2xvY2FsLXN0b3JhZ2UnO1xuaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGUuY3NzJztcblxubGV0IG1vZGU7XG5zZXRNb2RlKCdBbGwgVGFza3MnKTtcblxuY29uc3Qgc2lkZWJhckljb24gPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGhvbWVJY29uID0gbmV3IEltYWdlKCk7XG5jb25zdCBwcm9qZWN0c0ljb24gPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGRhdGVJY29uID0gbmV3IEltYWdlKCk7XG5jb25zdCBmaW5pc2hlZEljb24gPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IHRhZ0ljb24gPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IHByaW9yaXR5SWNvbiA9IG5ldyBJbWFnZSgpO1xuY29uc3QgcGx1c0ljb24gPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJyk7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbmNvbnN0IG9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvbmUnKTtcbmNvbnN0IHR3byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0d28nKTtcbmNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZS1pY29uJyk7XG5jb25zdCBmaW5pc2hlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaW5pc2hlZC1pY29uJyk7XG5jb25zdCB0YWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFnLWljb24nKTtcbmNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5LWljb24nKTtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5zaWRlYmFySWNvbi5zcmMgPSBTaWRlYmFySWNuO1xuaG9tZUljb24uc3JjID0gSG9tZUljbjtcbnByb2plY3RzSWNvbi5zcmMgPSBQcm9qZWN0SWNuO1xuZGF0ZUljb24uc3JjID0gRGF0ZUljbjtcbmZpbmlzaGVkSWNvbi5zcmMgPSBGaW5pc2hlZEljbjtcbnRhZ0ljb24uc3JjID0gVGFnSWNuO1xucHJpb3JpdHlJY29uLnNyYyA9IFByaW9yaXR5SWNuO1xucGx1c0ljb24uc3JjID0gUGx1c0ljbjtcblxuc2lkZWJhckljb24uaWQgPSAnc2lkZS1iYXItaWNvbic7XG5wbHVzSWNvbi5pZCA9ICdwbHVzLWljb24tc2lkZSc7XG5cbnByb2plY3RzLmFwcGVuZENoaWxkKHBsdXNJY29uKTtcbmhlYWRlci5hcHBlbmRDaGlsZChzaWRlYmFySWNvbik7XG5vbmUuYXBwZW5kQ2hpbGQoaG9tZUljb24pO1xudHdvLmFwcGVuZENoaWxkKHByb2plY3RzSWNvbik7XG5kYXRlLmFwcGVuZENoaWxkKGRhdGVJY29uKTtcbmZpbmlzaGVkLmFwcGVuZENoaWxkKGZpbmlzaGVkSWNvbik7XG50YWcuYXBwZW5kQ2hpbGQodGFnSWNvbik7XG5wcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvcml0eUljb24pO1xuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1Rhc2tzKHRhc2tzKSB7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYWRkID0gbmV3IEltYWdlKCk7XG4gICAgYWRkLnNyYyA9IEFkZDtcbiAgICBhZGQuaWQgPSAndGFzay1hZGQtcGx1cyc7XG4gICAgdGFza3NDb250YWluZXIuaWQgPSAndGFza3MnO1xuICAgIGhlYWRlci5pZCA9ICdjdXJyZW50LXByb2plY3QnO1xuICAgIGRpdi5pZCA9ICd0YXNrcy1oZWFkZXInO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IG1vZGU7XG4gICAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVGFzayk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGFkZCk7XG4gICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICBcbiAgICBpZiAodGFza3MubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlZGl0SWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgY29uc3QgZGVsZXRlSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgY29uc3QgdGFza0ljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IG5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBjb25zdCBzY2hlZHVsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGNvbnN0IGVkaXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGVkaXRQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgY29uc3QgZGVsZXRlVGFza1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgXG4gICAgICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2staXRlbScpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgIGVkaXREaXYuY2xhc3NMaXN0LmFkZCgnZWRpdCcpO1xuICAgICAgICAgICAgbmFtZURpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLW5hbWUnKTtcbiAgICAgICAgICAgIHNjaGVkdWxlRGl2LmlkID0gKCdzY2hlZHVsZScpO1xuICAgICAgICAgICAgcHJpb3JpdHkuaWQgPSAncHJpb3JpdHktaW5wdXQnO1xuICAgIFxuICAgICAgICAgICAgZWRpdEljb24uc3JjID0gRWRpdEljbjtcbiAgICAgICAgICAgIGRlbGV0ZUljb24uc3JjID0gRGVsZXRlSWNuO1xuICAgICAgICAgICAgdGFza0ljb24uc3JjID0gVGFza0ljbjtcbiAgICBcbiAgICAgICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSB0YXNrc1tpXS50aXRsZTtcbiAgICAgICAgICAgIGlmICh0YXNrc1tpXS5maW5pc2hlZCkge1xuICAgICAgICAgICAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgnY3Jvc3NlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrc1tpXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gJyEnLnJlcGVhdCh0YXNrc1tpXS5wcmlvcml0eSk7XG4gICAgICAgICAgICBkYXRlLnRleHRDb250ZW50ID0gdGFza3NbaV0uZHVlRGF0ZTtcbiAgICAgICAgICAgIHRpbWUudGV4dENvbnRlbnQgPSB0YXNrc1tpXS5kdWVUaW1lO1xuICAgICAgICAgICAgZWRpdFAudGV4dENvbnRlbnQgPSAnRG9uZSc7XG4gICAgICAgICAgICBkZWxldGVUYXNrUC50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgZWxlbWVudDtcbiAgICBcbiAgICAgICAgICAgIGlmICh0YXNrc1tpXS50YWdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0YXNrc1tpXS50YWdzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JlZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNyYyA9IFJlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdibHVlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3JjID0gQmx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdncmVlbic6XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNyYyA9IEdyZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3llbGxvdyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNyYyA9IFllbGxvdztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdwdXJwbGUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zcmMgPSBQdXJwbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gJ05vIFRhZ3MnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25GaW5pc2hlZCk7XG4gICAgICAgICAgICBkZWxldGVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25EZWxldGVUYXNrKTtcbiAgICAgICAgICAgIGlmIChtb2RlID09PSAnRmluaXNoZWQgVGFza3MnIHx8IG1vZGUgPT09ICdUb2RheScgfHwgbW9kZSA9PT0gJ1RoaXMgV2VlaycgXG4gICAgICAgICAgICB8fCBtb2RlID09PSAnVGhpcyBNb250aCcgfHwgbW9kZSA9PT0gJ1JlZCcgfHwgbW9kZSA9PT0gJ0JsdWUnIHx8IG1vZGUgPT09ICdHcmVlbicgXG4gICAgICAgICAgICB8fCBtb2RlID09PSAnWWVsbG93JyB8fCBtb2RlID09PSAnUHVycGxlJyB8fCBtb2RlID09PSAnTG93IFByaW9yaXR5J1xuICAgICAgICAgICAgfHwgbW9kZSA9PT0gJ01lZGl1bSBQcmlvcml0eScgfHwgbW9kZSA9PT0gJ0hpZ2ggUHJpb3JpdHknKSB7XG4gICAgICAgICAgICAgICAgZWRpdC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9uRmluaXNoZWQpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZVRhc2sucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkRlbGV0ZVRhc2spO1xuICAgICAgICAgICAgICAgIGVkaXQuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICBkZWxldGVUYXNrLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5hbWVEaXYuYXBwZW5kQ2hpbGQodGFza0ljb24pO1xuICAgICAgICAgICAgbmFtZURpdi5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICAgICAgICAgIGVkaXQuYXBwZW5kQ2hpbGQoZWRpdEljb24pO1xuICAgICAgICAgICAgZWRpdC5hcHBlbmRDaGlsZChlZGl0UCk7XG4gICAgICAgICAgICBkZWxldGVUYXNrLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuICAgICAgICAgICAgZGVsZXRlVGFzay5hcHBlbmRDaGlsZChkZWxldGVUYXNrUCk7XG4gICAgICAgICAgICBlZGl0RGl2LmFwcGVuZENoaWxkKGVkaXQpO1xuICAgICAgICAgICAgZWRpdERpdi5hcHBlbmRDaGlsZChkZWxldGVUYXNrKTtcbiAgICAgICAgICAgIHNjaGVkdWxlRGl2LmFwcGVuZENoaWxkKGRhdGUpO1xuICAgICAgICAgICAgc2NoZWR1bGVEaXYuYXBwZW5kQ2hpbGQodGltZSk7XG4gICAgICAgICAgICB0YXNrLmFwcGVuZENoaWxkKG5hbWVEaXYpO1xuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgICAgICB0YXNrLmFwcGVuZENoaWxkKHNjaGVkdWxlRGl2KTtcbiAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoZWRpdERpdik7XG4gICAgICAgICAgICB0YXNrLmlkID0gYHRhc2stJHtpfWA7XG4gICAgICAgICAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBub25lLnRleHRDb250ZW50ID0gJ05vIHRhc2tzIHlldCwgc3RhcnQgYWRkaW5nIG5vdyEnO1xuICAgICAgICBub25lLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAndGV4dC1hbGlnbjogc3RhcnQ7Jyk7XG4gICAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5vbmUpO1xuICAgIH1cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRhc2tzQ29udGFpbmVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dQcm9qZWN0cyhwcm9qZWN0c0Fycikge1xuICAgIHdoaWxlIChwcm9qZWN0cy5jaGlsZEVsZW1lbnRDb3VudCA+IDEpe1xuICAgICAgICBwcm9qZWN0cy5yZW1vdmVDaGlsZChwcm9qZWN0cy5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgY29uc3QgaWNuID0gbmV3IEltYWdlKCk7XG4gICAgaWNuLnNyYyA9IExpc3RJY247XG4gICAgaWNuLmNsYXNzTGlzdC5hZGQoJ2xpc3QtaWNvbicpO1xuICAgIGRpdi5pZCA9ICdhbGwnO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNsYXNzJyk7XG4gICAgaDQudGV4dENvbnRlbnQgPSAnQWxsIFRhc2tzJztcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaWNuKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaDQpO1xuICAgIHBsdXNJY29uLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRpdiwgcGx1c0ljb24pO1xuXG4gICAgaWNuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzZXRNb2RlKF9kZWZhdWx0LnRpdGxlKTtcbiAgICAgICAgc2hvd1Rhc2tzKF9kZWZhdWx0LnRhc2tzKVxuICAgIH0pO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0Fyci5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBwcm9qZWN0SWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBjb25zdCBkZWwgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgXG4gICAgICAgIGRlbC5zcmMgPSBEZWxldGVJY24yO1xuICAgICAgICBkZWwuY2xhc3NMaXN0LmFkZCgnZGVsLXByb2plY3QnKTtcbiAgICAgICAgcHJvamVjdEljb24uc3JjID0gTGlzdEljbjtcbiAgICAgICAgcHJvamVjdEljb24uY2xhc3NMaXN0LmFkZCgnbGlzdC1pY29uJyk7XG4gICAgICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jbGFzcycpO1xuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0c0FycltpXS50aXRsZTtcblxuICAgICAgICBkZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkRlbGV0ZVByb2opXG5cbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHByb2plY3RJY29uKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChkZWwpO1xuICAgICAgICBwcm9qZWN0RGl2LmlkID0gYHByb2plY3QtJHtpfWA7XG4gICAgICAgIHBsdXNJY29uLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHByb2plY3REaXYsIHBsdXNJY29uKTtcblxuICAgICAgICBpZiAocHJvamVjdHNBcnIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcHJvamVjdEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0TW9kZShwcm9qZWN0c0FycltpXS50aXRsZSk7XG4gICAgICAgICAgICAgICAgc2hvd1Rhc2tzKHByb2plY3RzQXJyW2ldLnRhc2tzKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaG93VGFza3MoX2RlZmF1bHQudGFza3MpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TW9kZSh2YWx1ZSkge1xuICAgIG1vZGUgPSB2YWx1ZTtcbiAgICBTdG9yYWdlLnNhdmVNb2RlKHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vZGUoKSB7XG4gICAgcmV0dXJuIG1vZGU7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9