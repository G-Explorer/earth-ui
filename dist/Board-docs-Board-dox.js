(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Board-docs-Board-dox"],{

/***/ "./src/components/Board/docs/Board.dox":
/*!*********************************************!*\
  !*** ./src/components/Board/docs/Board.dox ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var earth_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! earth-ui */ \"./src/components/index.js\");\n/* harmony import */ var widgets_Demo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! widgets/Demo */ \"./site/widgets/Demo/index.js\");\n/* harmony import */ var widgets_Doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! widgets/Doc */ \"./site/widgets/Doc/index.js\");\n/* harmony import */ var widgets_Markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! widgets/Markdown */ \"./site/widgets/Markdown/index.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\n\n\nvar codeBoardBasic = \"import { Board, BoardHeader, BoardBody } from 'earth-ui'\\n\\nconst BoardBasic = () => {\\n  return (\\n    <div>\\n      <Board>\\n        <BoardBody>\\n          The classic board looks like this.\\n        </BoardBody>\\n      </Board>\\n      <Board theme=\\\"simple\\\">\\n        <BoardBody>\\n          The simple board looks like this.\\n        </BoardBody>\\n      </Board>\\n    </div>\\n  )\\n}\";\n\nvar BoardBasic = function BoardBasic() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Board\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"BoardBody\"], null, \"The classic board looks like this.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Board\"], {\n    theme: \"simple\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"BoardBody\"], null, \"The simple board looks like this.\")));\n};\n\nvar codeBoardWithTitle = \"import { Board, BoardHeader, BoardBody } from 'earth-ui'\\n\\nconst BoardWithTitle = () => {\\n  return (\\n    <div>\\n      <Board>\\n        <BoardHeader title=\\\"My Board\\\" />\\n        <BoardBody>\\n          The classic Board with title looks like this.\\n        </BoardBody>\\n      </Board>\\n      <Board theme=\\\"simple\\\">\\n        <BoardHeader title=\\\"My Board\\\" />\\n        <BoardBody>\\n          The simple Board with title looks like this.\\n        </BoardBody>\\n      </Board>\\n    </div>\\n  )\\n}\";\n\nvar BoardWithTitle = function BoardWithTitle() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Board\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"BoardHeader\"], {\n    title: \"My Board\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"BoardBody\"], null, \"The classic Board with title looks like this.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Board\"], {\n    theme: \"simple\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"BoardHeader\"], {\n    title: \"My Board\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"BoardBody\"], null, \"The simple Board with title looks like this.\")));\n};\n\nvar codeBoardWithButtons = \"import { Board, BoardHeader, BoardBody, Button } from 'earth-ui'\\n\\nconst BoardWithButtons = () => {\\n  return (\\n    <Board title=\\\"My Board\\\">\\n      <BoardHeader>\\n        <Button type=\\\"primary\\\" size=\\\"sm\\\">one</Button>\\n        <Button size=\\\"sm\\\">two</Button>\\n        <Button onClick={()=> notification.success('Clicked!')} size=\\\"sm\\\">three</Button>\\n      </BoardHeader>\\n      <BoardBody>\\n        The classic Board with buttons looks like this.\\n      </BoardBody>\\n    </Board>\\n  )\\n}\";\n\nvar BoardWithButtons = function BoardWithButtons() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Board\"], {\n    title: \"My Board\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"BoardHeader\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    type: \"primary\",\n    size: \"sm\"\n  }, \"one\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    size: \"sm\"\n  }, \"two\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: function onClick() {\n      return notification.success('Clicked!');\n    },\n    size: \"sm\"\n  }, \"three\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"BoardBody\"], null, \"The classic Board with buttons looks like this.\"));\n};\n\nvar codeBoardWithTabs = \"import { Board, BoardHeader, BoardBody, Tabs, TabList, Tab, TabPanel } from 'earth-ui'\\n\\nconst BoardWithTabs = () => {\\n  return (\\n    <Board>\\n      <Tabs>\\n        <BoardHeader>\\n          <TabList>\\n            <Tab>One</Tab>\\n            <Tab>Two</Tab>\\n            <Tab>Three</Tab>\\n          </TabList>\\n        </BoardHeader>\\n        <BoardBody>\\n          <TabPanel tab=\\\"One\\\">Content of Tab Board 1</TabPanel>\\n          <TabPanel tab=\\\"Two\\\">Content of Tab Board 2</TabPanel>\\n          <TabPanel tab=\\\"Three\\\">Content of Tab Board 3</TabPanel>\\n        </BoardBody>\\n      </Tabs>\\n    </Board>\\n  )\\n}\";\n\nvar BoardWithTabs = function BoardWithTabs() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Board\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Tabs\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"BoardHeader\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"TabList\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Tab\"], null, \"One\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Tab\"], null, \"Two\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Tab\"], null, \"Three\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"BoardBody\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"TabPanel\"], {\n    tab: \"One\"\n  }, \"Content of Tab Board 1\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"TabPanel\"], {\n    tab: \"Two\"\n  }, \"Content of Tab Board 2\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"TabPanel\"], {\n    tab: \"Three\"\n  }, \"Content of Tab Board 3\"))));\n};\n\nvar summary = \"\";\nvar docs = [{\n  \"name\": \"Board\",\n  \"defaultProps\": {},\n  \"props\": [{\n    \"name\": \"theme\",\n    \"desc\": \"<p>The theme style of Board, default value is <code>classic</code></p>\\n\",\n    \"type\": \"classic | simple\",\n    \"required\": false\n  }],\n  \"apis\": []\n}, {\n  \"name\": \"BoardHeader\",\n  \"defaultProps\": {},\n  \"props\": [{\n    \"name\": \"title\",\n    \"desc\": \"<p>The title of Board</p>\\n\",\n    \"type\": \"string\",\n    \"required\": false\n  }],\n  \"apis\": []\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, !!summary && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    col: \"md-16\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Markdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    html: summary\n  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Demo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Basic Usage\",\n    code: codeBoardBasic,\n    desc: \"<p>Board provides the <code>theme</code> property which allows you to choose between two theme styles: <code>classic</code> and <code>simple</code>. The default value is <code>classic</code> which is the style of white background with borders.</p>\\n\",\n    note: \"\",\n    renderModel: \"right\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BoardBasic, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Demo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Board with Title\",\n    code: codeBoardWithTitle,\n    desc: \"<p>The <code>title</code> property on the <code>BoardHeader</code> allows you to customize the title and also supports all theme styles.</p>\\n\",\n    note: \"\",\n    renderModel: \"right\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BoardWithTitle, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Demo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Board with Buttons\",\n    code: codeBoardWithButtons,\n    desc: \"\",\n    note: \"\",\n    renderModel: \"right\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BoardWithButtons, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Demo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Board with Tabs\",\n    code: codeBoardWithTabs,\n    desc: \"\",\n    note: \"\",\n    renderModel: \"right\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BoardWithTabs, null)), docs.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    col: \"md-16\"\n  }, docs.map(function (doc) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Doc__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _extends({\n      key: doc.name\n    }, doc));\n  }))));\n});\n\n//# sourceURL=webpack:///./src/components/Board/docs/Board.dox?");

/***/ })

}]);