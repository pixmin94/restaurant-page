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

eval("// alert(\"hello!\")\n\nfunction createHeader() {\n    const header = document.createElement(\"header\");\n    header.classList.add(\"header\");\n  \n    const restaurantName = document.createElement(\"h1\");\n    restaurantName.classList.add(\"restaurant-name\");\n    restaurantName.textContent = \"ChakoEats\";\n  \n    header.appendChild(restaurantName);\n    console.log(header)\n  \n    return header;\n  }\n\n  function createMain() {\n    const main = document.createElement(\"main\");\n    main.classList.add(\"main\");\n    main.textContent = \"test\";\n    main.setAttribute(\"id\", \"main\");\n    return main;\n  }\n\n  function createNavBar(id) {\n    const nav = document.createElement('nav');\n    nav.setAttribute('id', id);\n\n    const homeBtn = createBtn('home', 'home');\n    const menuBtn = createBtn('menu', 'menu');\n    const contactBtn = createBtn('contact', 'contact');\n\n    nav.appendChild(homeBtn);\n    nav.appendChild(menuBtn);\n    nav.appendChild(contactBtn);\n    return nav;\n  }\n\n  function createBtn(id, text) {\n    const btn = document.createElement('button');\n    btn.setAttribute('id', id);\n    const span = document.createElement('span');\n    span.textContent = text;\n    btn.appendChild(span);\n    btn.classList.add('tab');\n    return btn;\n  }\n\n  function init(){\n    const content = document.getElementById(\"content\");\n    console.log(content)\n    content.appendChild(createHeader());\n    content.appendChild(createNavBar());\n    content.appendChild(createMain());\n  }\n\n  init();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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