(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["TextOverflow-docs-TextOverflow-dox"],{

/***/ "./src/components/TextOverflow/docs/TextOverflow.dox":
/*!***********************************************************!*\
  !*** ./src/components/TextOverflow/docs/TextOverflow.dox ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var earth_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! earth-ui */ \"./src/components/index.js\");\n/* harmony import */ var widgets_Demo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! widgets/Demo */ \"./site/widgets/Demo/index.js\");\n/* harmony import */ var widgets_Doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! widgets/Doc */ \"./site/widgets/Doc/index.js\");\n/* harmony import */ var widgets_Markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! widgets/Markdown */ \"./site/widgets/Markdown/index.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\nvar codeTextOverflowBasic = \"import { TextOverflow } from 'earth-ui'\\n\\nconst TextOverflowBasic = () => {\\n  return (\\n    <TextOverflow>\\n      <p style={{width: '100px'}}>I am a very long text, the mouse over can show all.</p>\\n    </TextOverflow>\\n  )\\n}\";\n\nvar TextOverflowBasic = function TextOverflowBasic() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"TextOverflow\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    style: {\n      width: '100px'\n    }\n  }, \"I am a very long text, the mouse over can show all.\"));\n};\n\nvar summary = \"\";\nvar docs = [{\n  \"name\": \"TextOverflow\",\n  \"defaultProps\": {},\n  \"props\": [{\n    \"name\": \"direction\",\n    \"desc\": \"<p>The direction of tips, default value is <code>up</code></p>\\n\",\n    \"type\": \"up | down | left | right\",\n    \"required\": false\n  }, {\n    \"name\": \"align\",\n    \"desc\": \"<p>The alignment of tips, default value is <code>middle</code></p>\\n\",\n    \"type\": \"top | right | bottom | left | middle\",\n    \"required\": false\n  }],\n  \"apis\": []\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, !!summary && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    col: \"md-16\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Markdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    html: summary\n  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Demo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Basic Usage\",\n    code: codeTextOverflowBasic,\n    desc: \"<p>The target element is triggered if it satisfies the text-overflow condition (non-inline element and content overflow)</p>\\n\",\n    note: \"\",\n    renderModel: \"left\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextOverflowBasic, null)), docs.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    col: \"md-16\"\n  }, docs.map(function (doc) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Doc__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _extends({\n      key: doc.name\n    }, doc));\n  }))));\n});\n\n//# sourceURL=webpack:///./src/components/TextOverflow/docs/TextOverflow.dox?");

/***/ })

}]);