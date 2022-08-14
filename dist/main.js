/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// alert(\"hello!\")\n\nfunction createHeader() {\n    const header = document.createElement(\"header\");\n    header.classList.add(\"header\");\n  \n    const restaurantName = document.createElement(\"h1\");\n    restaurantName.classList.add(\"restaurant-name\");\n    restaurantName.textContent = \"ChakoEats\";\n  \n    header.appendChild(restaurantName);\n    console.log(header)\n  \n    const content = document.getElementById(\"content\");\n    console.log(content)\n    content.appendChild(header);\n  }\n\n  createHeader();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;