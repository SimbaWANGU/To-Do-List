/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  background-color: rgba(220, 220, 220, 0.1);\\r\\n}\\r\\n\\r\\n.container {\\r\\n  width: 70%;\\r\\n  margin: auto;\\r\\n  margin-top: 50px;\\r\\n  box-shadow: 1px 1px 2px 2px rgba(220, 220, 220, 0.9);\\r\\n}\\r\\n\\r\\n.todoDiv {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  height: 50px;\\r\\n  background-color: white;\\r\\n  border: 1px solid gainsboro;\\r\\n}\\r\\n\\r\\n.todays {\\r\\n  margin: auto;\\r\\n  margin-left: 5%;\\r\\n  opacity: 0.8;\\r\\n}\\r\\n\\r\\n.reload {\\r\\n  height: 30%;\\r\\n  margin: 17px 10px 0 0;\\r\\n  opacity: 0.3;\\r\\n}\\r\\n\\r\\n.addtoList {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  height: 50px;\\r\\n  background-color: white;\\r\\n  border: 1px solid gainsboro;\\r\\n}\\r\\n\\r\\n.addToList {\\r\\n  margin: auto;\\r\\n  margin-left: 5%;\\r\\n  opacity: 0.6;\\r\\n  font-style: italic;\\r\\n  border: none;\\r\\n  width: 70%;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.enter {\\r\\n  height: 30%;\\r\\n  margin: 17px 10px 0 0;\\r\\n  opacity: 0.3;\\r\\n}\\r\\n\\r\\n.list {\\r\\n  list-style-type: none;\\r\\n  margin: auto;\\r\\n  margin-left: 0;\\r\\n  padding-left: 0;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.list_item {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  border: 1px solid gainsboro;\\r\\n  background-color: white;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\n.list-content {\\r\\n  height: 50px;\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n}\\r\\n\\r\\n.list-content-2 {\\r\\n  height: 50px;\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  background-color: rgba(255, 187, 80, 0.4);\\r\\n  transition: 0.5s;\\r\\n}\\r\\n\\r\\n.checkbox {\\r\\n  margin: auto;\\r\\n  margin-top: 17px;\\r\\n  margin-left: 10px;\\r\\n  margin-right: 10px;\\r\\n  opacity: 0.6;\\r\\n  position: fixed;\\r\\n}\\r\\n\\r\\n.task {\\r\\n  margin: auto;\\r\\n  margin-left: 15%;\\r\\n  opacity: 0.8;\\r\\n}\\r\\n\\r\\n.checkedTask {\\r\\n  margin: auto;\\r\\n  margin-left: 15%;\\r\\n  opacity: 0.4;\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\n.icon {\\r\\n  height: 30%;\\r\\n  margin: 17px 10px 0 0;\\r\\n  opacity: 0.3;\\r\\n}\\r\\n\\r\\n.editText {\\r\\n  margin: auto;\\r\\n  margin-left: 15%;\\r\\n  border: none;\\r\\n  width: 70%;\\r\\n  outline: none;\\r\\n  background-color: rgba(255, 187, 80, 0);\\r\\n}\\r\\n\\r\\n.delete {\\r\\n  height: 30%;\\r\\n  margin: 17px 10px 0 0;\\r\\n  opacity: 0.3;\\r\\n}\\r\\n\\r\\n.completed {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  height: 50px;\\r\\n  background-color: rgba(220, 220, 220, 0.1);\\r\\n  border: 1px solid gainsboro;\\r\\n}\\r\\n\\r\\n.completedButton {\\r\\n  background: transparent;\\r\\n  position: relative;\\r\\n  border: none;\\r\\n  margin: auto;\\r\\n  display: block;\\r\\n  outline: none;\\r\\n  transition: 0.3s;\\r\\n  padding: 4px 10px 4px 10px;\\r\\n  opacity: 0.8;\\r\\n}\\r\\n\\r\\n.completedButton::before {\\r\\n  content: '';\\r\\n  border-bottom: 1px solid black;\\r\\n  opacity: 0.8;\\r\\n  padding: 0 10px;\\r\\n  position: absolute;\\r\\n  bottom: 0;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  margin: 0 auto;\\r\\n  width: 0;\\r\\n  transition: 0.3s;\\r\\n}\\r\\n\\r\\n.completedButton:hover::before {\\r\\n  width: 85%;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n.hide {\\r\\n  display: none;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/delete.png":
/*!************************!*\
  !*** ./src/delete.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1ce1f523c16f7af7ecc0.png\";\n\n//# sourceURL=webpack://to-do-list/./src/delete.png?");

/***/ }),

/***/ "./src/menu.png":
/*!**********************!*\
  !*** ./src/menu.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b18266b40d400f0d8724.png\";\n\n//# sourceURL=webpack://to-do-list/./src/menu.png?");

/***/ }),

/***/ "./src/reload.png":
/*!************************!*\
  !*** ./src/reload.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"573f8bf282d92beace11.png\";\n\n//# sourceURL=webpack://to-do-list/./src/reload.png?");

/***/ }),

/***/ "./src/to-left.png":
/*!*************************!*\
  !*** ./src/to-left.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b895fc9813ebae0a2f08.png\";\n\n//# sourceURL=webpack://to-do-list/./src/to-left.png?");

/***/ }),

/***/ "./src/declarations.js":
/*!*****************************!*\
  !*** ./src/declarations.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"arr\": () => (/* binding */ arr),\n/* harmony export */   \"i\": () => (/* binding */ i),\n/* harmony export */   \"j\": () => (/* binding */ j),\n/* harmony export */   \"taskArray\": () => (/* binding */ taskArray)\n/* harmony export */ });\nconst taskArray = JSON.parse(localStorage.getItem('task')) || [];\r\nconst arr = [];\r\nconst i = 1;\r\nconst j = 1;\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/declarations.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _menu_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.png */ \"./src/menu.png\");\n/* harmony import */ var _reload_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reload.png */ \"./src/reload.png\");\n/* harmony import */ var _to_left_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./to-left.png */ \"./src/to-left.png\");\n/* harmony import */ var _delete_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delete.png */ \"./src/delete.png\");\n/* harmony import */ var _declarations_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./declarations.js */ \"./src/declarations.js\");\n/* harmony import */ var _taskFunctionality_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./taskFunctionality.js */ \"./src/taskFunctionality.js\");\n/* harmony import */ var _statusUpdates_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./statusUpdates.js */ \"./src/statusUpdates.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction component() {\r\n  const toDo = document.getElementById('toDo');\r\n  toDo.classList.add('container');\r\n\r\n  const todoDiv = document.createElement('div');\r\n  todoDiv.classList.add('todoDiv');\r\n\r\n  const todaysToDo = document.createElement('p');\r\n  todaysToDo.classList.add('todays');\r\n  todaysToDo.innerText = \"Today's To Do\";\r\n\r\n  const myImage2 = new Image();\r\n  myImage2.src = _reload_png__WEBPACK_IMPORTED_MODULE_2__;\r\n  myImage2.classList.add('reload');\r\n\r\n  todoDiv.appendChild(todaysToDo);\r\n  todoDiv.appendChild(myImage2);\r\n  toDo.appendChild(todoDiv);\r\n\r\n  const addtoList = document.createElement('div');\r\n  addtoList.classList.add('addtoList');\r\n\r\n  const addToList = document.createElement('input');\r\n  addToList.classList.add('addToList');\r\n  addToList.setAttribute('placeholder', 'Add to your List...');\r\n  addtoList.appendChild(addToList);\r\n\r\n  const myImage3 = new Image();\r\n  myImage3.src = _to_left_png__WEBPACK_IMPORTED_MODULE_3__;\r\n  myImage3.classList.add('enter');\r\n  addtoList.appendChild(myImage3);\r\n\r\n  toDo.appendChild(addtoList);\r\n\r\n  addToList.addEventListener('keypress', (e) => {\r\n    if (e.key === 'Enter') {\r\n      (0,_taskFunctionality_js__WEBPACK_IMPORTED_MODULE_6__.addTask)(addToList);\r\n      window.location.reload(true);\r\n    }\r\n  });\r\n\r\n  myImage3.addEventListener('click', () => {\r\n    if (addToList.value !== '') {\r\n      (0,_taskFunctionality_js__WEBPACK_IMPORTED_MODULE_6__.addTask)(addToList);\r\n      window.location.reload(true);\r\n    }\r\n  });\r\n\r\n  _declarations_js__WEBPACK_IMPORTED_MODULE_5__.taskArray.sort((a, b) => a.index - b.index);\r\n\r\n  const unorderedList = document.createElement('ul');\r\n  unorderedList.classList.add('list');\r\n\r\n  let i = 1;\r\n  const j = 1;\r\n  _declarations_js__WEBPACK_IMPORTED_MODULE_5__.taskArray.forEach((task) => {\r\n    // eslint-disable-next-line no-plusplus\r\n    task.index = i++;\r\n    const listItem = document.createElement('li');\r\n    listItem.classList.add('list_item');\r\n\r\n    const div = document.createElement('div');\r\n    div.classList.add('list-content');\r\n\r\n    const checkBox = document.createElement('input');\r\n    checkBox.setAttribute('type', 'checkbox');\r\n    checkBox.classList.add('checkbox');\r\n\r\n    checkBox.addEventListener('change', () => {\r\n      (0,_statusUpdates_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(checkBox, task);\r\n    });\r\n\r\n    const taskText = document.createElement('p');\r\n    taskText.classList.add('task');\r\n    taskText.innerText = task.description;\r\n\r\n    const myImage = new Image();\r\n    myImage.src = _menu_png__WEBPACK_IMPORTED_MODULE_1__;\r\n    myImage.classList.add('icon');\r\n\r\n    myImage.addEventListener('click', () => {\r\n      myImage.parentElement.classList.toggle('hide');\r\n      const div = document.createElement('div');\r\n      div.classList.add('list-content-2');\r\n\r\n      const checkBox = document.createElement('input');\r\n      checkBox.setAttribute('type', 'checkbox');\r\n      checkBox.classList.add('checkbox');\r\n\r\n      const editText = document.createElement('input');\r\n      editText.classList.add('editText');\r\n      editText.setAttribute('value', taskText.innerText);\r\n\r\n      editText.addEventListener('keypress', (e) => {\r\n        if (e.key === 'Enter') {\r\n          (0,_taskFunctionality_js__WEBPACK_IMPORTED_MODULE_6__.editTask)(editText, task);\r\n          \r\n        }\r\n      });\r\n\r\n      const myImage4 = new Image();\r\n      myImage4.src = _delete_png__WEBPACK_IMPORTED_MODULE_4__;\r\n      myImage4.classList.add('delete');\r\n\r\n      myImage4.addEventListener('click', () => {\r\n        (0,_taskFunctionality_js__WEBPACK_IMPORTED_MODULE_6__.deleteEditTask)(myImage4, j);\r\n        window.location.reload(true);\r\n      });\r\n\r\n      div.appendChild(editText);\r\n      div.appendChild(checkBox);\r\n      div.appendChild(myImage4);\r\n\r\n      listItem.appendChild(div);\r\n    });\r\n\r\n    div.appendChild(checkBox);\r\n    div.appendChild(taskText);\r\n    div.appendChild(myImage);\r\n\r\n    listItem.appendChild(div);\r\n\r\n    unorderedList.appendChild(listItem);\r\n  });\r\n  toDo.appendChild(unorderedList);\r\n\r\n  const completed = document.createElement('div');\r\n  completed.classList.add('completed');\r\n\r\n  const completedButton = document.createElement('button');\r\n  completedButton.classList.add('completedButton');\r\n  completedButton.innerText = 'Clear all Completed';\r\n  completed.appendChild(completedButton);\r\n\r\n  completedButton.addEventListener('click', () => {\r\n    (0,_taskFunctionality_js__WEBPACK_IMPORTED_MODULE_6__.deleteTasks)(j);\r\n    window.location.reload(true);\r\n  });\r\n\r\n  toDo.appendChild(completed);\r\n}\r\ndocument.body.appendChild(component());\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/statusUpdates.js":
/*!******************************!*\
  !*** ./src/statusUpdates.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst statusUpdate = (checkBox, task) => {\r\n  checkBox.nextElementSibling.classList.toggle('checkedTask');\r\n  const updateStorage = JSON.parse(localStorage.getItem('task'));\r\n  updateStorage[task.index - 1].completed = checkBox.checked;\r\n  localStorage.setItem('task', JSON.stringify(updateStorage));\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (statusUpdate);\n\n//# sourceURL=webpack://to-do-list/./src/statusUpdates.js?");

/***/ }),

/***/ "./src/taskFunctionality.js":
/*!**********************************!*\
  !*** ./src/taskFunctionality.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"deleteEditTask\": () => (/* binding */ deleteEditTask),\n/* harmony export */   \"deleteTasks\": () => (/* binding */ deleteTasks),\n/* harmony export */   \"editTask\": () => (/* binding */ editTask)\n/* harmony export */ });\n/* harmony import */ var _declarations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./declarations.js */ \"./src/declarations.js\");\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.js */ \"./src/tasks.js\");\n\r\n\r\n\r\nconst addTask = (addToList) => {\r\n  if (addToList.value !== '') {\r\n    const task = new _tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](addToList.value);\r\n    _declarations_js__WEBPACK_IMPORTED_MODULE_0__.taskArray.push(task);\r\n    localStorage.setItem('task', JSON.stringify(_declarations_js__WEBPACK_IMPORTED_MODULE_0__.taskArray));\r\n    addToList.value = '';\r\n  }\r\n  return _declarations_js__WEBPACK_IMPORTED_MODULE_0__.taskArray\r\n};\r\n\r\nconst deleteTasks = (j) => {\r\n  document.querySelectorAll('.checkbox').forEach((check) => {\r\n    if (check.checked === false) {\r\n      _declarations_js__WEBPACK_IMPORTED_MODULE_0__.arr.push(check.nextElementSibling.innerText);\r\n    }\r\n  });\r\n  const newtaskArray = _declarations_js__WEBPACK_IMPORTED_MODULE_0__.taskArray.filter((item) => _declarations_js__WEBPACK_IMPORTED_MODULE_0__.arr.includes(item.description));\r\n  newtaskArray.forEach((task) => {\r\n  // eslint-disable-next-line no-plusplus\r\n    task.index = j++;\r\n  });\r\n  localStorage.setItem('task', JSON.stringify(newtaskArray));\r\n  return newtaskArray;\r\n};\r\n\r\nconst editTask = (editText, task) => {\r\n  const updateStorage = JSON.parse(localStorage.getItem('task'));\r\n  updateStorage[task.index - 1].description = editText.value;\r\n  localStorage.setItem('task', JSON.stringify(updateStorage));\r\n  window.location.reload(true);\r\n};\r\n\r\nconst deleteEditTask = (myImage4, j) => {\r\n  const newtaskArray = _declarations_js__WEBPACK_IMPORTED_MODULE_0__.taskArray.filter(({ description }) => !description\r\n    .includes(myImage4.previousElementSibling.previousElementSibling.value));\r\n  newtaskArray.forEach((task) => {\r\n    // eslint-disable-next-line no-plusplus\r\n    task.index = j++;\r\n  });\r\n  localStorage.setItem('task', JSON.stringify(newtaskArray));\r\n  return newtaskArray;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/taskFunctionality.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var _declarations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./declarations.js */ \"./src/declarations.js\");\n\r\n\r\nclass Task {\r\n  constructor(inputFieldValue) {\r\n    this.description = inputFieldValue;\r\n    this.completed = false;\r\n    this.index = _declarations_js__WEBPACK_IMPORTED_MODULE_0__.taskArray.length + 1;\r\n  }\r\n}\n\n//# sourceURL=webpack://to-do-list/./src/tasks.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;