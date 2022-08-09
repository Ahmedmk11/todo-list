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




let projectsArr = [];
let formFlag = true;
let formFlag2 = true;

let _default = new _app_js__WEBPACK_IMPORTED_MODULE_2__.Project('All Tasks');

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
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.setMode)(_default.title);
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.showTasks)(_default.tasks);
    projectsArr.splice(index, 1)
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
            if (element.title === _ui_js__WEBPACK_IMPORTED_MODULE_1__.mode) {
                element.tasks.push(task);
                (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.showTasks)(element.tasks);
            }
        });

        if (_ui_js__WEBPACK_IMPORTED_MODULE_1__.mode === 'All Tasks') {
            (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.showTasks)(_default.tasks);
        }
        
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
        console.log(taskDate)
        console.log(today)
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
        console.log(taskDate)
        console.log(week)
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
        console.log(taskDate.getMonth())
        console.log(month)
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

window.addEventListener('storage', function(e) {

});
  

/***/ }),

/***/ "./src/scripts/ui.js":
/*!***************************!*\
  !*** ./src/scripts/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mode": () => (/* binding */ mode),
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
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");






















let mode = 'All Tasks';

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
        mode = _index_js__WEBPACK_IMPORTED_MODULE_19__._default.title;
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
                mode = projectsArr[i].title;
                showTasks(projectsArr[i].tasks)
            });
        } else {
            showTasks(_index_js__WEBPACK_IMPORTED_MODULE_19__._default.tasks);
        }
    }
}

function setMode(value) {
    mode = value;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0MsR0FBRyxlQUFlLDBEQUEwRCxvQ0FBb0MsR0FBRyxrREFBa0QsMkhBQTJILFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFX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QUNBLG1DQUFtQyxFQUFFO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFVBQVU7QUFDVixzQkFBc0Isc0RBQWM7QUFDcEM7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvYXBwLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL3VpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvbWFpbi5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvYm9keS5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogbWFpbjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogbWFpbjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuaHRtbCB7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBwYWRkaW5nOiAwJTtcXG4gIG1hcmdpbjogMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogYm9keTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzJjMmM7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgbWFyZ2luOiAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuYm9keSBpbWcge1xcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XFxuICAta2h0bWwtdXNlci1kcmFnOiBub25lO1xcbiAgLW1vei11c2VyLWRyYWc6IG5vbmU7XFxuICAtby11c2VyLWRyYWc6IG5vbmU7XFxufVxcblxcbmhlYWRlciB7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDI0JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuaGVhZGVyIGgxIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG4gIGZvbnQtZmFtaWx5OiBtYWluICFpbXBvcnRhbnQ7XFxufVxcbmhlYWRlciBpbWcge1xcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLW1vei10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtbXMtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLW8tdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5oZWFkZXIgaW1nOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTQsIDk0LCA5NCwgMC40KTtcXG59XFxuaGVhZGVyIGltZy5zaG93IHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XFxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XFxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxNSU7XFxufVxcbmZvb3RlciBwIHtcXG4gIG1hcmdpbjogMC40ZW07XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbmZvb3RlciBwIGE6dmlzaXRlZCB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbmZvb3RlciBwIGE6aG92ZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jc2lkZS1iYXIge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjNmNDtcXG4gIGJvcmRlcjogYmxhY2sgMnB4IHNvbGlkO1xcbiAgd2lkdGg6IDIwJTtcXG4gIG1pbi13aWR0aDogMjgwcHg7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtbW96LXRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG4gIC1tcy10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNkYXRlLWljb24sICN0YWctaWNvbiwgI3ByaW9yaXR5LWljb24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jZGF0ZS1kcnBkbiwgI3ByaW9yaXR5LWRycGRuLCAjdGFnLWRycGRuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICBtaW4td2lkdGg6IDE2MHB4O1xcbiAgbWF4LWhlaWdodDogMzUwcHg7XFxuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIHotaW5kZXg6IDE7XFxuICBtYXJnaW46IDAlO1xcbn1cXG4jZGF0ZS1kcnBkbiBwLCAjcHJpb3JpdHktZHJwZG4gcCwgI3RhZy1kcnBkbiBwIHtcXG4gIG1hcmdpbjogMCU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxZW07XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuI2RhdGUtZHJwZG4gcDpob3ZlciwgI3ByaW9yaXR5LWRycGRuIHA6aG92ZXIsICN0YWctZHJwZG4gcDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4udHJhbnNsYXRlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDcwcHgpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSg3MHB4KTtcXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoNzBweCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNzBweCk7XFxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSg3MHB4KTtcXG59XFxuXFxuI2RhdGUtaWNvbjpob3ZlciAjZGF0ZS1kcnBkbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI3RhZy1pY29uOmhvdmVyICN0YWctZHJwZG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNwcmlvcml0eS1pY29uOmhvdmVyICNwcmlvcml0eS1kcnBkbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2RhdGUtaWNvbiwgI2ZpbmlzaGVkLWljb24sICN0YWctaWNvbiwgI3ByaW9yaXR5LWljb24ge1xcbiAgbWF4LWhlaWdodDogMTAwcHg7XFxuICBtYXJnaW46IDFlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuI2RhdGUtaWNvbiAjZGF0ZS10LCAjZGF0ZS1pY29uICN0YWdzLXQsICNkYXRlLWljb24gI2ZpbmlzaGVkLXQsICNkYXRlLWljb24gI3ByaW9yaXR5LXQsICNmaW5pc2hlZC1pY29uICNkYXRlLXQsICNmaW5pc2hlZC1pY29uICN0YWdzLXQsICNmaW5pc2hlZC1pY29uICNmaW5pc2hlZC10LCAjZmluaXNoZWQtaWNvbiAjcHJpb3JpdHktdCwgI3RhZy1pY29uICNkYXRlLXQsICN0YWctaWNvbiAjdGFncy10LCAjdGFnLWljb24gI2ZpbmlzaGVkLXQsICN0YWctaWNvbiAjcHJpb3JpdHktdCwgI3ByaW9yaXR5LWljb24gI2RhdGUtdCwgI3ByaW9yaXR5LWljb24gI3RhZ3MtdCwgI3ByaW9yaXR5LWljb24gI2ZpbmlzaGVkLXQsICNwcmlvcml0eS1pY29uICNwcmlvcml0eS10IHtcXG4gIGZvbnQtc2l6ZTogMS4zNXJlbTtcXG4gIG1hcmdpbjogMCU7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4jZGF0ZS1pY29uICNkYXRlLXQ6OmFmdGVyLCAjZGF0ZS1pY29uICN0YWdzLXQ6OmFmdGVyLCAjZGF0ZS1pY29uICNmaW5pc2hlZC10OjphZnRlciwgI2RhdGUtaWNvbiAjcHJpb3JpdHktdDo6YWZ0ZXIsICNmaW5pc2hlZC1pY29uICNkYXRlLXQ6OmFmdGVyLCAjZmluaXNoZWQtaWNvbiAjdGFncy10OjphZnRlciwgI2ZpbmlzaGVkLWljb24gI2ZpbmlzaGVkLXQ6OmFmdGVyLCAjZmluaXNoZWQtaWNvbiAjcHJpb3JpdHktdDo6YWZ0ZXIsICN0YWctaWNvbiAjZGF0ZS10OjphZnRlciwgI3RhZy1pY29uICN0YWdzLXQ6OmFmdGVyLCAjdGFnLWljb24gI2ZpbmlzaGVkLXQ6OmFmdGVyLCAjdGFnLWljb24gI3ByaW9yaXR5LXQ6OmFmdGVyLCAjcHJpb3JpdHktaWNvbiAjZGF0ZS10OjphZnRlciwgI3ByaW9yaXR5LWljb24gI3RhZ3MtdDo6YWZ0ZXIsICNwcmlvcml0eS1pY29uICNmaW5pc2hlZC10OjphZnRlciwgI3ByaW9yaXR5LWljb24gI3ByaW9yaXR5LXQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gIGhlaWdodDogMnB4O1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIHJpZ2h0O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zIGVhc2Utb3V0O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXMgZWFzZS1vdXQ7XFxuICAtbW96LXRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcyBlYXNlLW91dDtcXG4gIC1tcy10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXMgZWFzZS1vdXQ7XFxuICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXMgZWFzZS1vdXQ7XFxufVxcbiNkYXRlLWljb24gI2RhdGUtdDpob3Zlcjo6YWZ0ZXIsICNkYXRlLWljb24gI3RhZ3MtdDpob3Zlcjo6YWZ0ZXIsICNkYXRlLWljb24gI2ZpbmlzaGVkLXQ6aG92ZXI6OmFmdGVyLCAjZGF0ZS1pY29uICNwcmlvcml0eS10OmhvdmVyOjphZnRlciwgI2ZpbmlzaGVkLWljb24gI2RhdGUtdDpob3Zlcjo6YWZ0ZXIsICNmaW5pc2hlZC1pY29uICN0YWdzLXQ6aG92ZXI6OmFmdGVyLCAjZmluaXNoZWQtaWNvbiAjZmluaXNoZWQtdDpob3Zlcjo6YWZ0ZXIsICNmaW5pc2hlZC1pY29uICNwcmlvcml0eS10OmhvdmVyOjphZnRlciwgI3RhZy1pY29uICNkYXRlLXQ6aG92ZXI6OmFmdGVyLCAjdGFnLWljb24gI3RhZ3MtdDpob3Zlcjo6YWZ0ZXIsICN0YWctaWNvbiAjZmluaXNoZWQtdDpob3Zlcjo6YWZ0ZXIsICN0YWctaWNvbiAjcHJpb3JpdHktdDpob3Zlcjo6YWZ0ZXIsICNwcmlvcml0eS1pY29uICNkYXRlLXQ6aG92ZXI6OmFmdGVyLCAjcHJpb3JpdHktaWNvbiAjdGFncy10OmhvdmVyOjphZnRlciwgI3ByaW9yaXR5LWljb24gI2ZpbmlzaGVkLXQ6aG92ZXI6OmFmdGVyLCAjcHJpb3JpdHktaWNvbiAjcHJpb3JpdHktdDpob3Zlcjo6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcXG59XFxuI2RhdGUtaWNvbiAjZGF0ZS10OmhvdmVyLCAjZGF0ZS1pY29uICN0YWdzLXQ6aG92ZXIsICNkYXRlLWljb24gI2ZpbmlzaGVkLXQ6aG92ZXIsICNkYXRlLWljb24gI3ByaW9yaXR5LXQ6aG92ZXIsICNmaW5pc2hlZC1pY29uICNkYXRlLXQ6aG92ZXIsICNmaW5pc2hlZC1pY29uICN0YWdzLXQ6aG92ZXIsICNmaW5pc2hlZC1pY29uICNmaW5pc2hlZC10OmhvdmVyLCAjZmluaXNoZWQtaWNvbiAjcHJpb3JpdHktdDpob3ZlciwgI3RhZy1pY29uICNkYXRlLXQ6aG92ZXIsICN0YWctaWNvbiAjdGFncy10OmhvdmVyLCAjdGFnLWljb24gI2ZpbmlzaGVkLXQ6aG92ZXIsICN0YWctaWNvbiAjcHJpb3JpdHktdDpob3ZlciwgI3ByaW9yaXR5LWljb24gI2RhdGUtdDpob3ZlciwgI3ByaW9yaXR5LWljb24gI3RhZ3MtdDpob3ZlciwgI3ByaW9yaXR5LWljb24gI2ZpbmlzaGVkLXQ6aG92ZXIsICNwcmlvcml0eS1pY29uICNwcmlvcml0eS10OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3NpZGUtYmFyLnNsaWRlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNTAlKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE1MCUpO1xcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTUwJSk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE1MCUpO1xcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE1MCUpO1xcbn1cXG5cXG4jbWlkZGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuI29uZSwgI3R3byB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNvbmUgaDMsICN0d28gaDMge1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuI29uZSBpbWcsICN0d28gaW1nIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjdlbTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLW1vei10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtbXMtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLW8tdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jYWxsIHtcXG4gIGhlaWdodDogNjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC4xZW07XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4jYWxsIGltZyB7XFxuICB3aWR0aDogMjBweDtcXG4gIG1hcmdpbi1yaWdodDogMC42ZW07XFxufVxcblxcbiN0YXNrcy1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcbiN0YXNrcy1oZWFkZXIgaW1nIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcyBlYXNlLWluLW91dDtcXG4gIC1tb3otdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLW1zLXRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcyBlYXNlLWluLW91dDtcXG4gIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcyBlYXNlLWluLW91dDtcXG59XFxuI3Rhc2tzLWhlYWRlciBpbWc6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcbiN0YXNrcy1oZWFkZXIgaW1nOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbn1cXG5cXG4ucHJvamVjdC1jbGFzcyB7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDAuMWVtO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLnByb2plY3QtY2xhc3MgZGl2IHtcXG4gIHdpZHRoOiAzMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wcm9qZWN0LWNsYXNzIGltZyB7XFxuICB3aWR0aDogMjBweDtcXG4gIG1hcmdpbi1yaWdodDogMC42ZW07XFxufVxcbi5wcm9qZWN0LWNsYXNzIC5kZWwtcHJvamVjdCB7XFxuICB3aWR0aDogMjVweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcyBlYXNlLWluLW91dDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLW1vei10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtbXMtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLW8tdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG4ucHJvamVjdC1jbGFzcyAuZGVsLXByb2plY3Q6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcbi5wcm9qZWN0LWNsYXNzIC5kZWwtcHJvamVjdDphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XFxuXFxuLnByb2plY3QtY2xhc3M6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NCwgOTQsIDk0LCAwLjQpO1xcbn1cXG5cXG4ubGlzdC1pY29uLCAuZGVsLXByb2plY3Qge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubGlzdC1pY29uOmhvdmVyLCAuZGVsLXByb2plY3Q6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi5saXN0LWljb246YWN0aXZlLCAuZGVsLXByb2plY3Q6YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxufVxcblxcbiNmb3JtMywgI2Zvcm00LCAjZm9ybTYge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jcHJvamVjdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuI3Byb2plY3RzICNwbHVzLWljb24tc2lkZSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxZW07XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcyBlYXNlLWluLW91dDtcXG4gIC1tb3otdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLW1zLXRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcyBlYXNlLWluLW91dDtcXG4gIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcyBlYXNlLWluLW91dDtcXG59XFxuI3Byb2plY3RzICNwbHVzLWljb24tc2lkZTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XFxuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xcbn1cXG4jcHJvamVjdHMgI3BsdXMtaWNvbi1zaWRlOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbn1cXG4jcHJvamVjdHMgaDQge1xcbiAgZm9udC1zaXplOiAxLjMyZW07XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgbWFyZ2luOiAwJTtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG4jcHJvamVjdHMgI2Zvcm0tY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jcHJvamVjdHMgI2Zvcm0tY29udGFpbmVyIGZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI3Byb2plY3RzICNmb3JtLWNvbnRhaW5lciBmb3JtIGlucHV0IHtcXG4gIHBhZGRpbmc6IDEuMWVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC1tcy1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtby1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAycHggc29saWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG4jcHJvamVjdHMgI2Zvcm0tY29udGFpbmVyIGZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc2l6ZTogMC44MXJlbTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLW1vei10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtbXMtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLW8tdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG4jcHJvamVjdHMgI2Zvcm0tY29udGFpbmVyIGZvcm0gaW5wdXQ6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMThweCk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMThweCk7XFxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMThweCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xOHB4KTtcXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMThweCk7XFxufVxcbiNwcm9qZWN0cyAjZm9ybS1jb250YWluZXIgZm9ybSBpbnB1dDppbnZhbGlkOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogcmVkO1xcbn1cXG4jcHJvamVjdHMgI2Zvcm0tY29udGFpbmVyIGZvcm0gaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuI3Byb2plY3RzICNmb3JtLWNvbnRhaW5lciBmb3JtIGlucHV0OnZhbGlkIHtcXG4gIGJvcmRlci1jb2xvcjogZ3JlZW47XFxufVxcbiNwcm9qZWN0cyAjZm9ybS1jb250YWluZXIgI2J0bnMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNwcm9qZWN0cyAjZm9ybS1jb250YWluZXIgI2J0bnMgYnV0dG9uIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC1zaXplOiAxLjEzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtbXMtYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLW8tYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtbW96LXRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcyBlYXNlLWluLW91dDtcXG4gIC1tcy10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbiNwcm9qZWN0cyAjZm9ybS1jb250YWluZXIgI2J0bnMgYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jcHJvamVjdHMgI2Zvcm0tY29udGFpbmVyICNidG5zIGJ1dHRvbjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XFxuXFxuI3Rhc2tzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtbW96LXRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG4gIC1tcy10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbiN0YXNrcyBoMiB7XFxuICB3aWR0aDogMjAlO1xcbiAgcGFkZGluZzogMC44ZW07XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiA0cHggc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAtby1ib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG4jdGFza3MgLnRhc2staXRlbSB7XFxuICBoZWlnaHQ6IDExMHB4O1xcbiAgbWluLXdpZHRoOiAxMTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgbWFyZ2luOiAxZW07XFxuICBtYXJnaW4tbGVmdDogMCU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtby1ib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMC44ZW07XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwbXMgZWFzZS1pbi1vdXQ7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSA1MG1zIGVhc2UtaW4tb3V0O1xcbiAgLW1vei10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTBtcyBlYXNlLWluLW91dDtcXG4gIC1tcy10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTBtcyBlYXNlLWluLW91dDtcXG4gIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSA1MG1zIGVhc2UtaW4tb3V0O1xcbn1cXG4jdGFza3MgLnRhc2staXRlbSBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgbWFyZ2luOiAxZW07XFxuICBtYXgtd2lkdGg6IDE2JTtcXG4gIG1pbi13aWR0aDogMTYlO1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuI3Rhc2tzIC50YXNrLWl0ZW0gcCNwcmlvcml0eS1pbnB1dCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIG1hcmdpbjogMCU7XFxuICBtYXgtd2lkdGg6IDUlO1xcbiAgbWluLXdpZHRoOiA1JTtcXG59XFxuI3Rhc2tzIC50YXNrLWl0ZW0gI3NjaGVkdWxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiAxNSU7XFxuICBtaW4td2lkdGg6IDE1JTtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcbiN0YXNrcyAudGFzay1pdGVtICNzY2hlZHVsZSBwIHtcXG4gIG1pbi13aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMCU7XFxufVxcbiN0YXNrcyAudGFzay1pdGVtIC5lZGl0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgbWF4LWhlaWdodDogMTEwcHg7XFxuICBtYXgtd2lkdGg6IDEzJTtcXG4gIG1pbi13aWR0aDogMTMlO1xcbn1cXG4jdGFza3MgLnRhc2staXRlbSAuZWRpdCBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuMmVtO1xcbiAgaGVpZ2h0OiA0MnB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC1vLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA4MG1zIGVhc2UtaW4tb3V0O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gODBtcyBlYXNlLWluLW91dDtcXG4gIC1tb3otdHJhbnNpdGlvbjogdHJhbnNmb3JtIDgwbXMgZWFzZS1pbi1vdXQ7XFxuICAtbXMtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDgwbXMgZWFzZS1pbi1vdXQ7XFxuICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gODBtcyBlYXNlLWluLW91dDtcXG59XFxuI3Rhc2tzIC50YXNrLWl0ZW0gLmVkaXQgZGl2IHAge1xcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuI3Rhc2tzIC50YXNrLWl0ZW0gLmVkaXQgZGl2OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jdGFza3MgLnRhc2staXRlbSAuZWRpdCBkaXY6YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxufVxcbiN0YXNrcyAudGFzay1pdGVtIC50YXNrLW5hbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIG1heC13aWR0aDogMjAlO1xcbiAgbWluLXdpZHRoOiAyMCU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiAwLjJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC1vLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGhlaWdodDogODAlO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcbiN0YXNrcyAudGFzay1pdGVtIC5kZXNjcmlwdGlvbiB7XFxuICBtaW4td2lkdGg6IDIyJTtcXG4gIG1heC13aWR0aDogMjIlO1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gIG1hcmdpbi1sZWZ0OiAxZW07XFxufVxcbiN0YXNrcyAudGFzay1pdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTQsIDk0LCA5NCwgMC40KTtcXG59XFxuXFxuLnNsaWRlLWxlZnQge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIwJSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMCUpO1xcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjAlKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjAlKTtcXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMCUpO1xcbn1cXG5cXG4jZGF0ZS1pY29uLCAjZmluaXNoZWQtaWNvbiwgI3RhZy1pY29uLCAjcHJpb3JpdHktaWNvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMzAlO1xcbn1cXG4jZGF0ZS1pY29uIGltZywgI2ZpbmlzaGVkLWljb24gaW1nLCAjdGFnLWljb24gaW1nLCAjcHJpb3JpdHktaWNvbiBpbWcge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcXG4gIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICB3aWR0aDogNzUlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtbW96LXRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG4gIC1tcy10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiN0YXNrLWZvcm0tY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgei1pbmRleDogOTk5OTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAtby1ib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jdGFzay1mb3JtLWNvbnRhaW5lciBpbWcge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgcGFkZGluZzogMCU7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcyBlYXNlLWluLW91dDtcXG4gIC1tb3otdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLW1zLXRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcyBlYXNlLWluLW91dDtcXG4gIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcyBlYXNlLWluLW91dDtcXG59XFxuI3Rhc2stZm9ybS1jb250YWluZXIgaW1nOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XFxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XFxufVxcbiN0YXNrLWZvcm0tY29udGFpbmVyIGltZzphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XFxuI3Rhc2stZm9ybS1jb250YWluZXIgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyOiAycHggd2hpdGUgc29saWQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAwLjc1ZW0gMS41ZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi10b3A6IDEuMmVtO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQ7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcyBlYXNlLWluLW91dDtcXG4gIC1tb3otdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGVhc2UtaW4tb3V0O1xcbiAgLW1zLXRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcyBlYXNlLWluLW91dDtcXG4gIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcyBlYXNlLWluLW91dDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtbXMtYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC1vLWJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbiN0YXNrLWZvcm0tY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuI3Rhc2stZm9ybS1jb250YWluZXIgYnV0dG9uOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbn1cXG5cXG4jYWRkLXRhc2stZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuI2FkZC10YXNrLWZvcm0gaW5wdXQsICNhZGQtdGFzay1mb3JtIHNlbGVjdCB7XFxuICBtaW4taGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC1tcy1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtby1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4jYWRkLXRhc2stZm9ybSBpbnB1dDppbnZhbGlkOmZvY3VzLCAjYWRkLXRhc2stZm9ybSBzZWxlY3Q6aW52YWxpZDpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6IHJlZDtcXG59XFxuI2FkZC10YXNrLWZvcm0gaW5wdXQ6Zm9jdXMsICNhZGQtdGFzay1mb3JtIHNlbGVjdDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4jYWRkLXRhc2stZm9ybSBpbnB1dDp2YWxpZCwgI2FkZC10YXNrLWZvcm0gc2VsZWN0OnZhbGlkIHtcXG4gIGJvcmRlci1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5wb3B1cCB7XFxuICBmaWx0ZXI6IGJsdXIoMjBweCk7XFxuICAtd2Via2l0LWZpbHRlcjogYmx1cigxMHB4KTtcXG59XFxuXFxuI21hc2sge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB6LWluZGV4OiA5MDAwO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmNyb3NzZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5kaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgIWltcG9ydGFudDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlLmNzcy5tYXAgKi9cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksaUJBQUE7RUFDQSw0Q0FBQTtBQ0NKO0FERUE7RUFDSSxpQkFBQTtFQUNBLDRDQUFBO0FDQUo7QURHQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNESjs7QURJQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUVBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FDRko7QURHSTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDRFI7O0FES0E7RUFDSSx5Q0FBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDRko7QURHSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0FDRFI7QURHSTtFQUNJLGdCQUFBO0VBQ0EsdUNBQUE7RUFDQSwrQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsMkNBQUE7RUFDQSwwQ0FBQTtBQ0RSO0FER0k7RUFDSSxlQUFBO0VBQ0EsdUNBQUE7QUNEUjtBREdJO0VBQ0ksMEJBQUE7RUFDQSxr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QTtBQ1BSOztBRFdBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDUko7QURTSTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUNQUjtBRFNJO0VBQ0ksaUJBQUE7QUNQUjtBRFNJO0VBQ0ksYUFBQTtBQ1BSO0FEU0k7RUFDSSxtQkFBQTtBQ1BSOztBRFdBO0VBQ0ksa0JBQUE7RUFDQSwwQkFBQTtBQ1JKOztBRFdBO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUNSSjs7QURXQTtFQUNJLDZCQUFBO0FDUko7O0FEV0E7RUFDSSxxREFBQTtFQUNBLCtCQUFBO0FDUko7O0FBRUEsb0NBQW9DXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSxcbiAgICBkdWVUaW1lLCBwcmlvcml0eSwgdGFncyA9ICcnKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLmR1ZVRpbWUgPSBkdWVUaW1lO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMudGFncyA9IHRhZ3M7XG4gICAgICAgIHRoaXMuZmluaXNoZWQgPSBmYWxzZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUXVpdCBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3F1aXQucG5nJztcbmltcG9ydCB7c2hvd1Byb2plY3RzLCBzaG93VGFza3MsIG1vZGUsIHNldE1vZGV9IGZyb20gJy4vdWkuanMnXG5pbXBvcnQge1Rhc2ssIFByb2plY3R9IGZyb20gJy4vYXBwLmpzJ1xuXG5leHBvcnQgbGV0IHByb2plY3RzQXJyID0gW107XG5sZXQgZm9ybUZsYWcgPSB0cnVlO1xubGV0IGZvcm1GbGFnMiA9IHRydWU7XG5cbmV4cG9ydCBsZXQgX2RlZmF1bHQgPSBuZXcgUHJvamVjdCgnQWxsIFRhc2tzJyk7XG5cbnNob3dQcm9qZWN0cyhwcm9qZWN0c0Fycik7XG5zaG93VGFza3MoX2RlZmF1bHQudGFza3MpO1xuXG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGUtYmFyJyk7XG5jb25zdCBzaWRlYmFySWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlLWJhci1pY29uJyk7XG5jb25zdCBwcm9qZWN0UGx1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbHVzLWljb24tc2lkZScpO1xuY29uc3QgdGFza1BsdXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1hZGQtcGx1cycpO1xuXG5zaWRlYmFySWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzaWRlYmFySWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QudG9nZ2xlKCdzbGlkZScpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuY2xhc3NMaXN0LnRvZ2dsZSgnc2xpZGUtbGVmdCcpO1xufSk7XG5cbnByb2plY3RQbHVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUHJvamVjdCk7XG50YXNrUGx1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFRhc2spO1xuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xuICAgIGlmIChmb3JtRmxhZykge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IGFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYWRkLnRleHRDb250ZW50ID0gJ0FkZCc7XG4gICAgICAgIGNhbmNlbC50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgICAgICBcbiAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICcjJyk7XG4gICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKCdtZXRob2QnLCAnZ2V0Jyk7XG4gICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKCduYW1lJywgJ3Byb2plY3RGb3JtJyk7XG5cbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdQcm9qZWN0IFRpdGxlJyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbWlubGVuZ3RoJywgJzEnKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnMTInKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhdXRvY29tcGxldGUnLCAnb2ZmJyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gICAgICAgIFxuICAgICAgICBmb3JtLmlkID0gJ3Byb2plY3QtZm9ybSc7XG4gICAgICAgIGlucHV0LmlkID0gJ3Byb2plY3QtZm9ybS1uYW1lJztcblxuICAgICAgICBjb250YWluZXIuaWQgPSAnZm9ybS1jb250YWluZXInO1xuICAgICAgICBhZGQuaWQgPSAnYWRkLWJ1dHRvbic7XG4gICAgICAgIGNhbmNlbC5pZCA9ICdjYW5jZWwtYnV0dG9uJztcbiAgICAgICAgYnV0dG9ucy5pZCA9ICdidG5zJztcbiAgICAgICAgYnV0dG9ucy5hcHBlbmRDaGlsZChhZGQpO1xuICAgICAgICBidXR0b25zLmFwcGVuZENoaWxkKGNhbmNlbCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25zKTtcbiAgICAgICAgcHJvamVjdFBsdXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY29udGFpbmVyLCBwcm9qZWN0UGx1cyk7XG4gICAgICAgIGFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQWRkUHJvamVjdCk7XG4gICAgICAgIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2FuY2VsKTtcbiAgICAgICAgZm9ybUZsYWcgPSBmYWxzZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG9uQWRkUHJvamVjdCgpIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWZvcm0tbmFtZScpO1xuICAgIGlmIChpbnB1dC5yZXBvcnRWYWxpZGl0eSgpKSB7XG4gICAgICAgIGNvbnN0IGFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtYnV0dG9uJyk7XG4gICAgICAgIGxldCBwcm9qZWN0ID0gbmV3IFByb2plY3QoaW5wdXQudmFsdWUpO1xuICAgICAgICBwcm9qZWN0c0Fyci5wdXNoKHByb2plY3QpO1xuICAgICAgICBzaG93UHJvamVjdHMocHJvamVjdHNBcnIpO1xuICAgICAgICBmb3JtRmxhZyA9IHRydWU7XG5cbiAgICAgICAgYWRkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25BZGRQcm9qZWN0KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG9uQ2FuY2VsKCkge1xuICAgIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWwtYnV0dG9uJyk7XG4gICAgc2hvd1Byb2plY3RzKHByb2plY3RzQXJyKTtcbiAgICBmb3JtRmxhZyA9IHRydWU7XG4gICAgY2FuY2VsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25BZGRQcm9qZWN0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uRGVsZXRlUHJvaihldmVudCkge1xuICAgIGNvbnN0IHByb2plY3QgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZTtcbiAgICBjb25zdCBpbmRleCA9IHByb2plY3QuaWQuc3BsaXQoJy0nKVsxXTtcbiAgICBsZXQgcnRhc2tzID0gcHJvamVjdHNBcnJbcHJvamVjdC5pZC5zcGxpdCgnLScpWzFdXS50YXNrc1xuICAgIF9kZWZhdWx0LnRhc2tzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGlmIChydGFza3MuaW5jbHVkZXMoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIF9kZWZhdWx0LnRhc2tzLnNwbGljZShfZGVmYXVsdC50YXNrcy5pbmRleE9mKGVsZW1lbnQpLCAxKVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgc2V0TW9kZShfZGVmYXVsdC50aXRsZSk7XG4gICAgc2hvd1Rhc2tzKF9kZWZhdWx0LnRhc2tzKTtcbiAgICBwcm9qZWN0c0Fyci5zcGxpY2UoaW5kZXgsIDEpXG4gICAgcHJvamVjdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHByb2plY3QpO1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgZmxhZyA9IHRydWU7XG4gICAgbGV0IGFyciA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJykuY2hpbGRyZW4pO1xuICAgIGFyci5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudC50YWdOYW1lICE9PSAnSU1HJyl7XG4gICAgICAgICAgICBpZiAoZmxhZykge1xuICAgICAgICAgICAgICAgIGZsYWcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbGVtZW50LmlkID0gYHByb2plY3QtJHtpfWA7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRhc2soKSB7XG4gICAgaWYgKGZvcm1GbGFnMikge1xuICAgICAgICBjb25zdCBxdWl0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBhZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IGR1ZVRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IHRhZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgY29uc3Qgb3AxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGNvbnN0IG9wMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBjb25zdCBvcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgY29uc3Qgb3A0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGNvbnN0IG9wNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBjb25zdCBvcDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgY29uc3QgbWFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHRpdGxlLmlkID0gJ2Zvcm0xJztcbiAgICAgICAgZGVzYy5pZCA9ICdmb3JtMic7XG4gICAgICAgIGR1ZURhdGUuaWQgPSAnZm9ybTMnO1xuICAgICAgICBkdWVUaW1lLmlkID0gJ2Zvcm00JztcbiAgICAgICAgcHJpb3JpdHkuaWQgPSAnZm9ybTUnO1xuICAgICAgICB0YWdzLmlkID0gJ2Zvcm02JztcblxuICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgJyMnKTtcbiAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdnZXQnKTtcbiAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGFza0Zvcm0nKTtcblxuICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJypUYXNrIFRpdGxlJyk7XG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnbWlubGVuZ3RoJywgJzEnKTtcbiAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnMTInKTtcbiAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdhdXRvY29tcGxldGUnLCAnb2ZmJyk7XG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG5cbiAgICAgICAgZGVzYy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICBkZXNjLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnKkRlc2NyaXB0aW9uJyk7XG4gICAgICAgIGRlc2Muc2V0QXR0cmlidXRlKCdtaW5sZW5ndGgnLCAnMScpO1xuICAgICAgICBkZXNjLnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgJzc4Jyk7XG4gICAgICAgIGRlc2Muc2V0QXR0cmlidXRlKCdhdXRvY29tcGxldGUnLCAnb2ZmJyk7XG4gICAgICAgIGRlc2Muc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcblxuICAgICAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgICAgIGR1ZURhdGUuc2V0QXR0cmlidXRlKCdtaW4nLCBuZXcgRGF0ZSgpLnRvSlNPTigpLnNsaWNlKDAsMTApKTtcbiAgICAgICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgICAgICBcbiAgICAgICAgZHVlVGltZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGltZScpO1xuICAgICAgICBkdWVUaW1lLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG5cbiAgICAgICAgdGFncy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGFnU2VsZWN0Jyk7XG4gICAgICAgIHRhZ3Muc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcblxuICAgICAgICBvcDEuc2V0QXR0cmlidXRlKCd2YWx1ZScsICcnKTtcbiAgICAgICAgb3AxLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJyk7XG4gICAgICAgIG9wMS5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJycpO1xuXG4gICAgICAgIG9wMi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ3JlZCcpO1xuICAgICAgICBvcDMuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdibHVlJyk7XG4gICAgICAgIG9wNC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2dyZWVuJyk7XG4gICAgICAgIG9wNS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ3llbGxvdycpO1xuICAgICAgICBvcDYuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdwdXJwbGUnKTtcblxuICAgICAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJyk7XG4gICAgICAgIHByaW9yaXR5LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnKlByaW9yaXR5ICgxLTMpJyk7XG4gICAgICAgIHByaW9yaXR5LnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgJzEnKTtcbiAgICAgICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCdtaW4nLCAnMScpO1xuICAgICAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ21heCcsICczJyk7XG4gICAgICAgIHByaW9yaXR5LnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpO1xuICAgICAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuXG4gICAgICAgIHF1aXQuc3JjID0gUXVpdDtcbiAgICAgICAgYWRkLnRleHRDb250ZW50ID0gJ0FkZCc7XG4gICAgICAgIG9wMS50ZXh0Q29udGVudCA9ICdUYWcnO1xuICAgICAgICBvcDIudGV4dENvbnRlbnQgPSAnUmVkJztcbiAgICAgICAgb3AzLnRleHRDb250ZW50ID0gJ0JsdWUnO1xuICAgICAgICBvcDQudGV4dENvbnRlbnQgPSAnR3JlZW4nO1xuICAgICAgICBvcDUudGV4dENvbnRlbnQgPSAnWWVsbG93JztcbiAgICAgICAgb3A2LnRleHRDb250ZW50ID0gJ1B1cnBsZSc7XG5cbiAgICAgICAgZm9ybS5pZCA9ICdhZGQtdGFzay1mb3JtJztcbiAgICAgICAgZGl2LmlkID0gJ3Rhc2stZm9ybS1jb250YWluZXInO1xuICAgICAgICBtYXNrLmlkID0gJ21hc2snO1xuICAgICAgICBhZGQuaWQgPSAndGFzay1hZGQtYnRuJztcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlkZGxlJykuY2xhc3NMaXN0LmFkZCgncG9wdXAnKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuY2xhc3NMaXN0LmFkZCgncG9wdXAnKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJykuY2xhc3NMaXN0LmFkZCgncG9wdXAnKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYXNrKTtcblxuICAgICAgICB0YWdzLmFwcGVuZChvcDEpO1xuICAgICAgICB0YWdzLmFwcGVuZChvcDIpO1xuICAgICAgICB0YWdzLmFwcGVuZChvcDMpO1xuICAgICAgICB0YWdzLmFwcGVuZChvcDQpO1xuICAgICAgICB0YWdzLmFwcGVuZChvcDUpO1xuICAgICAgICB0YWdzLmFwcGVuZChvcDYpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkdWVUaW1lKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0YWdzKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChxdWl0KTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGZvcm0pO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYWRkKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICBhZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkFkZFRhc2spO1xuXG4gICAgICAgIHF1aXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlkZGxlJykuY2xhc3NMaXN0LnJlbW92ZSgncG9wdXAnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHVwJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKS5jbGFzc0xpc3QucmVtb3ZlKCdwb3B1cCcpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChtYXNrKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgIGZvcm1GbGFnMiA9IHRydWU7XG4gICAgICAgIH0pXG5cbiAgICAgICAgZm9ybUZsYWcyID0gZmFsc2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBvbkFkZFRhc2soKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybTEnKTtcbiAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0yJyk7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtMycpO1xuICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybTQnKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtNScpO1xuICAgIGNvbnN0IHRhZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybTYnKTtcblxuICAgIGlmICh0aXRsZS5yZXBvcnRWYWxpZGl0eSgpICYmIGRlc2MucmVwb3J0VmFsaWRpdHkoKSAmJiBkYXRlLnJlcG9ydFZhbGlkaXR5KClcbiAgICAmJiB0aW1lLnJlcG9ydFZhbGlkaXR5KCkgJiYgcHJpb3JpdHkucmVwb3J0VmFsaWRpdHkoKSAmJiB0YWdzLnJlcG9ydFZhbGlkaXR5KCkpIHtcbiAgICAgICAgY29uc3QgYWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stYWRkLWJ0bicpO1xuXG4gICAgICAgIGxldCB0YXNrID0gbmV3IFRhc2sodGl0bGUudmFsdWUsIGRlc2MudmFsdWUsIG5ldyBEYXRlKGRhdGUudmFsdWUpLnRvTG9jYWxlRGF0ZVN0cmluZygpLCB0aW1lLnZhbHVlLCBwcmlvcml0eS52YWx1ZSwgdGFncy52YWx1ZSk7XG4gICAgICAgIF9kZWZhdWx0LnRhc2tzLnB1c2godGFzayk7XG4gICAgICAgIHByb2plY3RzQXJyLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC50aXRsZSA9PT0gbW9kZSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQudGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgICAgICAgICBzaG93VGFza3MoZWxlbWVudC50YXNrcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtb2RlID09PSAnQWxsIFRhc2tzJykge1xuICAgICAgICAgICAgc2hvd1Rhc2tzKF9kZWZhdWx0LnRhc2tzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgdGFza1BsdXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1hZGQtcGx1cycpO1xuICAgICAgICB0YXNrUGx1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFRhc2spO1xuICAgICAgICBhZGQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkFkZFRhc2spO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlkZGxlJykuY2xhc3NMaXN0LnJlbW92ZSgncG9wdXAnKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuY2xhc3NMaXN0LnJlbW92ZSgncG9wdXAnKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJykuY2xhc3NMaXN0LnJlbW92ZSgncG9wdXAnKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFzaycpKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1mb3JtLWNvbnRhaW5lcicpKTtcbiAgICAgICAgZm9ybUZsYWcyID0gdHJ1ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkZpbmlzaGVkKGV2ZW50KSB7XG4gICAgbGV0IHRhc2s7XG4gICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnRElWJyl7XG4gICAgICAgIHRhc2sgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRhc2sgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gdGFzay5pZC5zcGxpdCgnLScpWzFdO1xuICAgIF9kZWZhdWx0LnRhc2tzW2luZGV4XS5maW5pc2hlZCA9IHRydWU7XG4gICAgbGV0IG5hbWUgPSB0YXNrLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdO1xuICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgnY3Jvc3NlZCcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25EZWxldGVUYXNrKGV2ZW50KSB7XG4gICAgbGV0IHRhc2s7XG4gICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnRElWJyl7XG4gICAgICAgIHRhc2sgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRhc2sgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gdGFzay5pZC5zcGxpdCgnLScpWzFdO1xuICAgIF9kZWZhdWx0LnRhc2tzLnNwbGljZShpbmRleCwxKTtcbiAgICB0YXNrLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGFzayk7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBhcnIgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrcycpLmNoaWxkcmVuKTtcbiAgICBhcnIuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrLWl0ZW0nKSkge1xuICAgICAgICAgICAgZWxlbWVudC5pZCA9IGB0YXNrLSR7aX1gO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmNvbnN0IGZpbmlzaGVkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbmlzaGVkLXQnKTtcbmNvbnN0IGRhdGUxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5LWRkJyk7XG5jb25zdCBkYXRlMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGlzLXdlZWstZGQnKTtcbmNvbnN0IGRhdGUzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoaXMtbW9udGgtZGQnKTtcbmNvbnN0IHRhZzEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVkLWRkJyk7XG5jb25zdCB0YWcyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JsdWUtZGQnKTtcbmNvbnN0IHRhZzMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JlZW4tZGQnKTtcbmNvbnN0IHRhZzQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneWVsbG93LWRkJyk7XG5jb25zdCB0YWc1ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3B1cnBsZS1kZCcpO1xuY29uc3QgcHJpb3JpdHkxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29uZS1kZCcpO1xuY29uc3QgcHJpb3JpdHkyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R3by1kZCcpO1xuY29uc3QgcHJpb3JpdHkzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RocmVlLWRkJyk7XG5cbmZpbmlzaGVkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNldE1vZGUoJ0ZpbmlzaGVkIFRhc2tzJyk7XG4gICAgbGV0IGFyciA9IF9kZWZhdWx0LnRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suZmluaXNoZWQpO1xuICAgIHNob3dUYXNrcyhhcnIpO1xufSk7XG5cbmRhdGUxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNldE1vZGUoJ1RvZGF5Jyk7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9kZWZhdWx0LnRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0YXNrID0gX2RlZmF1bHQudGFza3NbaV07XG4gICAgICAgIGxldCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2suZHVlRGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4gICAgICAgIGlmICh0YXNrRGF0ZSA9PT0gdG9kYXkpIHtcbiAgICAgICAgICAgIGFyci5wdXNoKHRhc2spO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tEYXRlKVxuICAgICAgICBjb25zb2xlLmxvZyh0b2RheSlcbiAgICB9XG4gICAgc2hvd1Rhc2tzKGFycik7XG59KTtcblxuZGF0ZTIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2V0TW9kZSgnVGhpcyBXZWVrJyk7XG4gICAgY29uc3QgZGF5ID0gbmV3IERhdGUoKS5nZXREYXRlKCkgKyA3O1xuICAgIGNvbnN0IG1vbnRoID0gbmV3IERhdGUoKS5nZXRNb250aCgpICsgMTtcbiAgICBjb25zdCB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IHdlZWsgPSBuZXcgRGF0ZShgJHttb250aH0vJHtkYXl9LyR7eWVhcn1gKVxuICAgIFxuICAgIGxldCBhcnIgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9kZWZhdWx0LnRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0YXNrID0gX2RlZmF1bHQudGFza3NbaV07XG4gICAgICAgIGxldCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2suZHVlRGF0ZSk7XG4gICAgICAgIGlmIChnZXREaWZmZXJlbmNlSW5EYXlzKHRhc2tEYXRlLCB3ZWVrKSA8PSA3KSB7XG4gICAgICAgICAgICBhcnIucHVzaCh0YXNrKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrRGF0ZSlcbiAgICAgICAgY29uc29sZS5sb2cod2VlaylcbiAgICB9XG4gICAgc2hvd1Rhc2tzKGFycik7XG59KTtcblxuZGF0ZTMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2V0TW9kZSgnVGhpcyBNb250aCcpO1xuICAgIGNvbnN0IG1vbnRoID0gbmV3IERhdGUoKS5nZXRNb250aCgpO1xuICAgIFxuICAgIGxldCBhcnIgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9kZWZhdWx0LnRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0YXNrID0gX2RlZmF1bHQudGFza3NbaV07XG4gICAgICAgIGxldCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2suZHVlRGF0ZSk7XG4gICAgICAgIGlmICh0YXNrRGF0ZS5nZXRNb250aCgpID09IG1vbnRoKSB7XG4gICAgICAgICAgICBhcnIucHVzaCh0YXNrKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrRGF0ZS5nZXRNb250aCgpKVxuICAgICAgICBjb25zb2xlLmxvZyhtb250aClcbiAgICB9XG4gICAgc2hvd1Rhc2tzKGFycik7XG59KTtcblxudGFnMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzZXRNb2RlKCdSZWQnKTtcbiAgICBsZXQgYXJyID0gX2RlZmF1bHQudGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay50YWdzID09PSAncmVkJyk7XG4gICAgc2hvd1Rhc2tzKGFycik7XG59KTtcblxudGFnMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzZXRNb2RlKCdCbHVlJyk7XG4gICAgbGV0IGFyciA9IF9kZWZhdWx0LnRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2sudGFncyA9PT0gJ2JsdWUnKTtcbiAgICBzaG93VGFza3MoYXJyKTtcbn0pO1xuXG50YWczLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNldE1vZGUoJ0dyZWVuJyk7XG4gICAgbGV0IGFyciA9IF9kZWZhdWx0LnRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2sudGFncyA9PT0gJ2dyZWVuJyk7XG4gICAgc2hvd1Rhc2tzKGFycik7XG59KTtcblxudGFnNC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzZXRNb2RlKCdZZWxsb3cnKTtcbiAgICBsZXQgYXJyID0gX2RlZmF1bHQudGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay50YWdzID09PSAneWVsbG93Jyk7XG4gICAgc2hvd1Rhc2tzKGFycik7XG59KTtcblxudGFnNS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzZXRNb2RlKCdQdXJwbGUnKTtcbiAgICBsZXQgYXJyID0gX2RlZmF1bHQudGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay50YWdzID09PSAncHVycGxlJyk7XG4gICAgc2hvd1Rhc2tzKGFycik7XG59KTtcblxucHJpb3JpdHkxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNldE1vZGUoJ0xvdyBQcmlvcml0eScpO1xuICAgIGxldCBhcnIgPSBfZGVmYXVsdC50YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLnByaW9yaXR5ID09ICcxJyk7XG4gICAgc2hvd1Rhc2tzKGFycik7XG59KTtcblxucHJpb3JpdHkyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNldE1vZGUoJ01lZGl1bSBQcmlvcml0eScpO1xuICAgIGxldCBhcnIgPSBfZGVmYXVsdC50YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLnByaW9yaXR5ID09ICcyJyk7XG4gICAgc2hvd1Rhc2tzKGFycik7XG59KTtcblxucHJpb3JpdHkzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNldE1vZGUoJ0hpZ2ggUHJpb3JpdHknKTtcbiAgICBsZXQgYXJyID0gX2RlZmF1bHQudGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5wcmlvcml0eSA9PSAnMycpO1xuICAgIHNob3dUYXNrcyhhcnIpO1xufSk7XG5cbmZ1bmN0aW9uIGdldERpZmZlcmVuY2VJbkRheXMoZGF0ZTEsIGRhdGUyKSB7XG4gICAgY29uc3QgZGlmZkluTXMgPSBNYXRoLmFicyhkYXRlMiAtIGRhdGUxKTtcbiAgICByZXR1cm4gZGlmZkluTXMgLyAoMTAwMCAqIDYwICogNjAgKiAyNCk7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgZnVuY3Rpb24oZSkge1xuXG59KTtcbiAgIiwiaW1wb3J0IFNpZGViYXJJY24gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9zaWRlLWJhci5wbmcnO1xuaW1wb3J0IFBsdXNJY24gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9wbHVzLnBuZyc7XG5pbXBvcnQgUHJvamVjdEljbiBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3Byb2plY3RzLnBuZyc7XG5pbXBvcnQgSG9tZUljbiBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2hvbWUucG5nJztcbmltcG9ydCBMaXN0SWNuIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvbGlzdC5wbmcnO1xuaW1wb3J0IERhdGVJY24gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9jYWxlbmRhci5wbmcnO1xuaW1wb3J0IEZpbmlzaGVkSWNuIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvdGljay5wbmcnO1xuaW1wb3J0IFRhZ0ljbiBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3RhZy5wbmcnO1xuaW1wb3J0IFByaW9yaXR5SWNuIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvcHJpb3JpdHkucG5nJztcbmltcG9ydCBFZGl0SWNuIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvZmluaXNoLnBuZyc7XG5pbXBvcnQgRGVsZXRlSWNuIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvZGVsZXRlLnBuZyc7XG5pbXBvcnQgRGVsZXRlSWNuMiBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2RlbGV0ZTIucG5nJztcbmltcG9ydCBUYXNrSWNuIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvdGFzay5wbmcnO1xuaW1wb3J0IEFkZCBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2FkZHBsdXMucG5nJztcbmltcG9ydCBSZWQgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9yZWQucG5nJztcbmltcG9ydCBCbHVlIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvYmx1ZS5wbmcnO1xuaW1wb3J0IEdyZWVuIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvZ3JlZW4ucG5nJztcbmltcG9ydCBZZWxsb3cgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy95ZWxsb3cucG5nJztcbmltcG9ydCBQdXJwbGUgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9wdXJwbGUucG5nJztcbmltcG9ydCB7b25EZWxldGVQcm9qLCBvbkRlbGV0ZVRhc2ssIF9kZWZhdWx0LCBhZGRUYXNrLCBvbkZpbmlzaGVkfSBmcm9tICcuL2luZGV4LmpzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGUuY3NzJztcblxuZXhwb3J0IGxldCBtb2RlID0gJ0FsbCBUYXNrcyc7XG5cbmNvbnN0IHNpZGViYXJJY29uID0gbmV3IEltYWdlKCk7XG5jb25zdCBob21lSWNvbiA9IG5ldyBJbWFnZSgpO1xuY29uc3QgcHJvamVjdHNJY29uID0gbmV3IEltYWdlKCk7XG5jb25zdCBkYXRlSWNvbiA9IG5ldyBJbWFnZSgpO1xuY29uc3QgZmluaXNoZWRJY29uID0gbmV3IEltYWdlKCk7XG5jb25zdCB0YWdJY29uID0gbmV3IEltYWdlKCk7XG5jb25zdCBwcmlvcml0eUljb24gPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IHBsdXNJY29uID0gbmV3IEltYWdlKCk7XG5jb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpO1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG5jb25zdCBvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb25lJyk7XG5jb25zdCB0d28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHdvJyk7XG5jb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUtaWNvbicpO1xuY29uc3QgZmluaXNoZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmluaXNoZWQtaWNvbicpO1xuY29uc3QgdGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhZy1pY29uJyk7XG5jb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eS1pY29uJyk7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuc2lkZWJhckljb24uc3JjID0gU2lkZWJhckljbjtcbmhvbWVJY29uLnNyYyA9IEhvbWVJY247XG5wcm9qZWN0c0ljb24uc3JjID0gUHJvamVjdEljbjtcbmRhdGVJY29uLnNyYyA9IERhdGVJY247XG5maW5pc2hlZEljb24uc3JjID0gRmluaXNoZWRJY247XG50YWdJY29uLnNyYyA9IFRhZ0ljbjtcbnByaW9yaXR5SWNvbi5zcmMgPSBQcmlvcml0eUljbjtcbnBsdXNJY29uLnNyYyA9IFBsdXNJY247XG5cbnNpZGViYXJJY29uLmlkID0gJ3NpZGUtYmFyLWljb24nO1xucGx1c0ljb24uaWQgPSAncGx1cy1pY29uLXNpZGUnO1xuXG5wcm9qZWN0cy5hcHBlbmRDaGlsZChwbHVzSWNvbik7XG5oZWFkZXIuYXBwZW5kQ2hpbGQoc2lkZWJhckljb24pO1xub25lLmFwcGVuZENoaWxkKGhvbWVJY29uKTtcbnR3by5hcHBlbmRDaGlsZChwcm9qZWN0c0ljb24pO1xuZGF0ZS5hcHBlbmRDaGlsZChkYXRlSWNvbik7XG5maW5pc2hlZC5hcHBlbmRDaGlsZChmaW5pc2hlZEljb24pO1xudGFnLmFwcGVuZENoaWxkKHRhZ0ljb24pO1xucHJpb3JpdHkuYXBwZW5kQ2hpbGQocHJpb3JpdHlJY29uKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dUYXNrcyh0YXNrcykge1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGFkZCA9IG5ldyBJbWFnZSgpO1xuICAgIGFkZC5zcmMgPSBBZGQ7XG4gICAgYWRkLmlkID0gJ3Rhc2stYWRkLXBsdXMnO1xuICAgIHRhc2tzQ29udGFpbmVyLmlkID0gJ3Rhc2tzJztcbiAgICBoZWFkZXIuaWQgPSAnY3VycmVudC1wcm9qZWN0JztcbiAgICBkaXYuaWQgPSAndGFza3MtaGVhZGVyJztcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBtb2RlO1xuICAgIGFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFRhc2spO1xuICAgIGRpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChhZGQpO1xuICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG4gICAgXG4gICAgaWYgKHRhc2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWRpdEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tJY29uID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgY29uc3Qgc2NoZWR1bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBjb25zdCBlZGl0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBkZWxldGVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBlZGl0UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZVRhc2tQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIFxuICAgICAgICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrLWl0ZW0nKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICBlZGl0RGl2LmNsYXNzTGlzdC5hZGQoJ2VkaXQnKTtcbiAgICAgICAgICAgIG5hbWVEaXYuY2xhc3NMaXN0LmFkZCgndGFzay1uYW1lJyk7XG4gICAgICAgICAgICBzY2hlZHVsZURpdi5pZCA9ICgnc2NoZWR1bGUnKTtcbiAgICAgICAgICAgIHByaW9yaXR5LmlkID0gJ3ByaW9yaXR5LWlucHV0JztcbiAgICBcbiAgICAgICAgICAgIGVkaXRJY29uLnNyYyA9IEVkaXRJY247XG4gICAgICAgICAgICBkZWxldGVJY29uLnNyYyA9IERlbGV0ZUljbjtcbiAgICAgICAgICAgIHRhc2tJY29uLnNyYyA9IFRhc2tJY247XG4gICAgXG4gICAgICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gdGFza3NbaV0udGl0bGU7XG4gICAgICAgICAgICBpZiAodGFza3NbaV0uZmluaXNoZWQpIHtcbiAgICAgICAgICAgICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ2Nyb3NzZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFza3NbaV0uZGVzY3JpcHRpb247XG4gICAgICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9ICchJy5yZXBlYXQodGFza3NbaV0ucHJpb3JpdHkpO1xuICAgICAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IHRhc2tzW2ldLmR1ZURhdGU7XG4gICAgICAgICAgICB0aW1lLnRleHRDb250ZW50ID0gdGFza3NbaV0uZHVlVGltZTtcbiAgICAgICAgICAgIGVkaXRQLnRleHRDb250ZW50ID0gJ0RvbmUnO1xuICAgICAgICAgICAgZGVsZXRlVGFza1AudGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGVsZW1lbnQ7XG4gICAgXG4gICAgICAgICAgICBpZiAodGFza3NbaV0udGFncy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodGFza3NbaV0udGFncykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdyZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zcmMgPSBSZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYmx1ZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNyYyA9IEJsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZ3JlZW4nOlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zcmMgPSBHcmVlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd5ZWxsb3cnOlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zcmMgPSBZZWxsb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncHVycGxlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3JjID0gUHVycGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9ICdObyBUYWdzJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uRmluaXNoZWQpO1xuICAgICAgICAgICAgZGVsZXRlVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uRGVsZXRlVGFzayk7XG4gICAgICAgICAgICBpZiAobW9kZSA9PT0gJ0ZpbmlzaGVkIFRhc2tzJyB8fCBtb2RlID09PSAnVG9kYXknIHx8IG1vZGUgPT09ICdUaGlzIFdlZWsnIFxuICAgICAgICAgICAgfHwgbW9kZSA9PT0gJ1RoaXMgTW9udGgnIHx8IG1vZGUgPT09ICdSZWQnIHx8IG1vZGUgPT09ICdCbHVlJyB8fCBtb2RlID09PSAnR3JlZW4nIFxuICAgICAgICAgICAgfHwgbW9kZSA9PT0gJ1llbGxvdycgfHwgbW9kZSA9PT0gJ1B1cnBsZScgfHwgbW9kZSA9PT0gJ0xvdyBQcmlvcml0eSdcbiAgICAgICAgICAgIHx8IG1vZGUgPT09ICdNZWRpdW0gUHJpb3JpdHknIHx8IG1vZGUgPT09ICdIaWdoIFByaW9yaXR5Jykge1xuICAgICAgICAgICAgICAgIGVkaXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkZpbmlzaGVkKTtcbiAgICAgICAgICAgICAgICBkZWxldGVUYXNrLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25EZWxldGVUYXNrKTtcbiAgICAgICAgICAgICAgICBlZGl0LmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgZGVsZXRlVGFzay5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuYW1lRGl2LmFwcGVuZENoaWxkKHRhc2tJY29uKTtcbiAgICAgICAgICAgIG5hbWVEaXYuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgICAgICAgICBlZGl0LmFwcGVuZENoaWxkKGVkaXRJY29uKTtcbiAgICAgICAgICAgIGVkaXQuYXBwZW5kQ2hpbGQoZWRpdFApO1xuICAgICAgICAgICAgZGVsZXRlVGFzay5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcbiAgICAgICAgICAgIGRlbGV0ZVRhc2suYXBwZW5kQ2hpbGQoZGVsZXRlVGFza1ApO1xuICAgICAgICAgICAgZWRpdERpdi5hcHBlbmRDaGlsZChlZGl0KTtcbiAgICAgICAgICAgIGVkaXREaXYuYXBwZW5kQ2hpbGQoZGVsZXRlVGFzayk7XG4gICAgICAgICAgICBzY2hlZHVsZURpdi5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICAgICAgICAgIHNjaGVkdWxlRGl2LmFwcGVuZENoaWxkKHRpbWUpO1xuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZChuYW1lRGl2KTtcbiAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZChzY2hlZHVsZURpdik7XG4gICAgICAgICAgICB0YXNrLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICB0YXNrLmFwcGVuZENoaWxkKGVkaXREaXYpO1xuICAgICAgICAgICAgdGFzay5pZCA9IGB0YXNrLSR7aX1gO1xuICAgICAgICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgbm9uZS50ZXh0Q29udGVudCA9ICdObyB0YXNrcyB5ZXQsIHN0YXJ0IGFkZGluZyBub3chJztcbiAgICAgICAgbm9uZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3RleHQtYWxpZ246IHN0YXJ0OycpO1xuICAgICAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChub25lKTtcbiAgICB9XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0YXNrc0NvbnRhaW5lcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93UHJvamVjdHMocHJvamVjdHNBcnIpIHtcbiAgICB3aGlsZSAocHJvamVjdHMuY2hpbGRFbGVtZW50Q291bnQgPiAxKXtcbiAgICAgICAgcHJvamVjdHMucmVtb3ZlQ2hpbGQocHJvamVjdHMuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGNvbnN0IGljbiA9IG5ldyBJbWFnZSgpO1xuICAgIGljbi5zcmMgPSBMaXN0SWNuO1xuICAgIGljbi5jbGFzc0xpc3QuYWRkKCdsaXN0LWljb24nKTtcbiAgICBkaXYuaWQgPSAnYWxsJztcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jbGFzcycpO1xuICAgIGg0LnRleHRDb250ZW50ID0gJ0FsbCBUYXNrcyc7XG4gICAgZGl2LmFwcGVuZENoaWxkKGljbik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGg0KTtcbiAgICBwbHVzSWNvbi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkaXYsIHBsdXNJY29uKTtcblxuICAgIGljbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbW9kZSA9IF9kZWZhdWx0LnRpdGxlO1xuICAgICAgICBzaG93VGFza3MoX2RlZmF1bHQudGFza3MpXG4gICAgfSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RJY29uID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGNvbnN0IGRlbCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBcbiAgICAgICAgZGVsLnNyYyA9IERlbGV0ZUljbjI7XG4gICAgICAgIGRlbC5jbGFzc0xpc3QuYWRkKCdkZWwtcHJvamVjdCcpO1xuICAgICAgICBwcm9qZWN0SWNvbi5zcmMgPSBMaXN0SWNuO1xuICAgICAgICBwcm9qZWN0SWNvbi5jbGFzc0xpc3QuYWRkKCdsaXN0LWljb24nKTtcbiAgICAgICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNsYXNzJyk7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHByb2plY3RzQXJyW2ldLnRpdGxlO1xuXG4gICAgICAgIGRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uRGVsZXRlUHJvailcblxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQocHJvamVjdEljb24pO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKGRlbCk7XG4gICAgICAgIHByb2plY3REaXYuaWQgPSBgcHJvamVjdC0ke2l9YDtcbiAgICAgICAgcGx1c0ljb24ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocHJvamVjdERpdiwgcGx1c0ljb24pO1xuXG4gICAgICAgIGlmIChwcm9qZWN0c0Fyci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBwcm9qZWN0SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBtb2RlID0gcHJvamVjdHNBcnJbaV0udGl0bGU7XG4gICAgICAgICAgICAgICAgc2hvd1Rhc2tzKHByb2plY3RzQXJyW2ldLnRhc2tzKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaG93VGFza3MoX2RlZmF1bHQudGFza3MpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TW9kZSh2YWx1ZSkge1xuICAgIG1vZGUgPSB2YWx1ZTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==