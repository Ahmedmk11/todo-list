"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["localStorage"],{

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/local-storage.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxTdG9yYWdlLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9sb2NhbC1zdG9yYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTdG9yYWdlIHtcblxuICAgIHN0YXRpYyBzYXZlRGVmYXVsdCh4KSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkZWZhdWx0LXByb2plY3QnLCBKU09OLnN0cmluZ2lmeSh4KSk7XG4gICAgfVxuICAgIFxuICAgIHN0YXRpYyBzYXZlUHJvamVjdEFycih4KSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cy1hcnJheScsIEpTT04uc3RyaW5naWZ5KHgpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2F2ZU1vZGUoeCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbW9kZScsIEpTT04uc3RyaW5naWZ5KHgpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0RGVmYXVsdCgpIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RlZmF1bHQtcHJvamVjdCcpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0UHJvamVjdEFycigpIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzLWFycmF5JykpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRNb2RlKCkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbW9kZScpKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=