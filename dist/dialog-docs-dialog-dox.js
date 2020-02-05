(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dialog-docs-dialog-dox"],{

/***/ "./src/components/dialog/docs/dialog.dox":
/*!***********************************************!*\
  !*** ./src/components/dialog/docs/dialog.dox ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var earth_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! earth-ui */ \"./src/components/index.js\");\n/* harmony import */ var widgets_Demo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! widgets/Demo */ \"./site/widgets/Demo/index.js\");\n/* harmony import */ var widgets_Doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! widgets/Doc */ \"./site/widgets/Doc/index.js\");\n/* harmony import */ var widgets_Markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! widgets/Markdown */ \"./site/widgets/Markdown/index.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nvar codeDialogBasic = \"import { dialog, notification, Button } from 'earth-ui'\\n\\nclass DialogBasic extends Component {\\n  handleClick = () => {\\n    dialog.confirm('Will you try?', {\\n      onAccept: function() {\\n        notification.success('Good luck');\\n      },\\n      onCancel: function() {\\n        notification.success('Come back later');\\n      }\\n    })\\n  }\\n  render() {\\n    return <Button type=\\\"primary\\\" onClick={this.handleClick} ghost>OPEN DIALOG</Button>\\n  }\\n}\";\n\nvar DialogBasic =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(DialogBasic, _Component);\n\n  function DialogBasic() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, DialogBasic);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DialogBasic)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this), \"handleClick\", function () {\n      earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"dialog\"].confirm('Will you try?', {\n        onAccept: function onAccept() {\n          earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"notification\"].success('Good luck');\n        },\n        onCancel: function onCancel() {\n          earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"notification\"].success('Come back later');\n        }\n      });\n    });\n\n    return _this;\n  }\n\n  _createClass(DialogBasic, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n        type: \"primary\",\n        onClick: this.handleClick,\n        ghost: true\n      }, \"OPEN DIALOG\");\n    }\n  }]);\n\n  return DialogBasic;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar codeDialogTypes = \"import { dialog, Button } from 'earth-ui'\\n\\nclass DialogTypes extends Component {\\n  handleClick = type => {\\n    dialog[type](`Dialog ${type} message`)\\n  }\\n  render() {\\n    return (\\n      <div>\\n        <Button type=\\\"primary\\\" onClick={() => this.handleClick('confirm')} ghost>CONFIRM</Button>\\n        <Button type=\\\"primary\\\" onClick={() => this.handleClick('accept')} ghost>ACCEPT</Button>\\n        <Button type=\\\"primary\\\" onClick={() => this.handleClick('warning')} ghost>WARNING</Button>\\n        <Button type=\\\"primary\\\" onClick={() => this.handleClick('danger')} ghost>DANGER</Button>\\n      </div>\\n    )\\n  }\\n}\";\n\nvar DialogTypes =\n/*#__PURE__*/\nfunction (_Component2) {\n  _inherits(DialogTypes, _Component2);\n\n  function DialogTypes() {\n    var _getPrototypeOf3;\n\n    var _this2;\n\n    _classCallCheck(this, DialogTypes);\n\n    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n      args[_key2] = arguments[_key2];\n    }\n\n    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(DialogTypes)).call.apply(_getPrototypeOf3, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this2), \"handleClick\", function (type) {\n      earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"dialog\"][type](\"Dialog \".concat(type, \" message\"));\n    });\n\n    return _this2;\n  }\n\n  _createClass(DialogTypes, [{\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n        type: \"primary\",\n        onClick: function onClick() {\n          return _this3.handleClick('confirm');\n        },\n        ghost: true\n      }, \"CONFIRM\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n        type: \"primary\",\n        onClick: function onClick() {\n          return _this3.handleClick('accept');\n        },\n        ghost: true\n      }, \"ACCEPT\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n        type: \"primary\",\n        onClick: function onClick() {\n          return _this3.handleClick('warning');\n        },\n        ghost: true\n      }, \"WARNING\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n        type: \"primary\",\n        onClick: function onClick() {\n          return _this3.handleClick('danger');\n        },\n        ghost: true\n      }, \"DANGER\"));\n    }\n  }]);\n\n  return DialogTypes;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar codeDialogWarning = \"import { dialog, Button } from 'earth-ui'\\n\\nclass DialogWarning extends Component {\\n  handleClick = () => {\\n    ;dialog.warning('This will delete the thing.', 'DELETE IT ?', {\\n    \\tonAccept: function() {\\n    \\t\\tdialog.danger(\\n    \\t\\t\\t'Are you absolutely sure you want to ' +\\n    \\t\\t\\t'*permanently* delete the whole thing?',\\n    \\t\\t\\t'CONFIRM'\\n    \\t\\t)\\n    \\t}\\n    });\\n  }\\n  render() {\\n    return (\\n      <div>\\n        <Button onClick={this.handleClick} size=\\\"sm\\\">RUN THIS CODE</Button>\\n      </div>\\n    )\\n  }\\n}\";\n\nvar DialogWarning =\n/*#__PURE__*/\nfunction (_Component3) {\n  _inherits(DialogWarning, _Component3);\n\n  function DialogWarning() {\n    var _getPrototypeOf4;\n\n    var _this4;\n\n    _classCallCheck(this, DialogWarning);\n\n    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {\n      args[_key3] = arguments[_key3];\n    }\n\n    _this4 = _possibleConstructorReturn(this, (_getPrototypeOf4 = _getPrototypeOf(DialogWarning)).call.apply(_getPrototypeOf4, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this4), \"handleClick\", function () {\n      ;\n      earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"dialog\"].warning('This will delete the thing.', 'DELETE IT ?', {\n        onAccept: function onAccept() {\n          earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"dialog\"].danger('Are you absolutely sure you want to ' + '*permanently* delete the whole thing?', 'CONFIRM');\n        }\n      });\n    });\n\n    return _this4;\n  }\n\n  _createClass(DialogWarning, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n        onClick: this.handleClick,\n        size: \"sm\"\n      }, \"RUN THIS CODE\"));\n    }\n  }]);\n\n  return DialogWarning;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar codeDialogButtonsLabel = \"import { dialog, Button } from 'earth-ui'\\n\\nclass DialogButtonsLabel extends Component {\\n  handleClick = () => {\\n    ;dialog.confirm('Will you try?', 'JOIN NOW', 'NOT NOW');\\n  }\\n  render() {\\n    return <Button onClick={this.handleClick} size=\\\"sm\\\">RUN THIS CODE</Button>\\n  }\\n}\";\n\nvar DialogButtonsLabel =\n/*#__PURE__*/\nfunction (_Component4) {\n  _inherits(DialogButtonsLabel, _Component4);\n\n  function DialogButtonsLabel() {\n    var _getPrototypeOf5;\n\n    var _this5;\n\n    _classCallCheck(this, DialogButtonsLabel);\n\n    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {\n      args[_key4] = arguments[_key4];\n    }\n\n    _this5 = _possibleConstructorReturn(this, (_getPrototypeOf5 = _getPrototypeOf(DialogButtonsLabel)).call.apply(_getPrototypeOf5, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this5), \"handleClick\", function () {\n      ;\n      earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"dialog\"].confirm('Will you try?', 'JOIN NOW', 'NOT NOW');\n    });\n\n    return _this5;\n  }\n\n  _createClass(DialogButtonsLabel, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n        onClick: this.handleClick,\n        size: \"sm\"\n      }, \"RUN THIS CODE\");\n    }\n  }]);\n\n  return DialogButtonsLabel;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar codeDialogIcon = \"import { dialog, Button } from 'earth-ui'\\n\\nclass DialogIcon extends Component {\\n  handleClick = () => {\\n    ;dialog.confirm('Proceed to Checkout?', 'CHECK OUT', {\\n      icon: 'cart'\\n    });\\n  }\\n  render() {\\n    return <Button onClick={this.handleClick} size=\\\"sm\\\">RUN THIS CODE</Button>\\n  }\\n}\";\n\nvar DialogIcon =\n/*#__PURE__*/\nfunction (_Component5) {\n  _inherits(DialogIcon, _Component5);\n\n  function DialogIcon() {\n    var _getPrototypeOf6;\n\n    var _this6;\n\n    _classCallCheck(this, DialogIcon);\n\n    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {\n      args[_key5] = arguments[_key5];\n    }\n\n    _this6 = _possibleConstructorReturn(this, (_getPrototypeOf6 = _getPrototypeOf(DialogIcon)).call.apply(_getPrototypeOf6, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this6), \"handleClick\", function () {\n      ;\n      earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"dialog\"].confirm('Proceed to Checkout?', 'CHECK OUT', {\n        icon: 'cart'\n      });\n    });\n\n    return _this6;\n  }\n\n  _createClass(DialogIcon, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n        onClick: this.handleClick,\n        size: \"sm\"\n      }, \"RUN THIS CODE\");\n    }\n  }]);\n\n  return DialogIcon;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar summary = \"<blockquote>\\n<p>Dialogs are used for <code>upcoming</code> events that require the user to choose whether to proceed, similar to the JavaScript <code>comfirm()</code> method. Various types of dialogs and custom configuration are supported while text content also supports the basic markdown syntax.</p>\\n</blockquote>\\n\";\nvar docs = [];\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, !!summary && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    col: \"md-16\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Markdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    html: summary\n  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Demo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Basic Usage\",\n    code: codeDialogBasic,\n    desc: \"\",\n    note: \"\",\n    renderModel: \"left\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DialogBasic, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Demo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Type\",\n    code: codeDialogTypes,\n    desc: \"<p>There are four basic dialogs including <code>confirm</code>, <code>accept</code>, <code>warning</code> and <code>danger</code>.</p>\\n\",\n    note: \"\",\n    renderModel: \"left\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DialogTypes, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Demo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"null\",\n    code: codeDialogWarning,\n    desc: \"<p>The <code>danger</code> type dialog can be nested in the <code>warning</code> type dialog, so that the interaction will have a sense of hierarchy from weak to strong.</p>\\n\",\n    note: \"\",\n    renderModel: \"run\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DialogWarning, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Demo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Custom Text of Button\",\n    code: codeDialogButtonsLabel,\n    desc: \"<p>You can customize the button text. The second and third arguments of <code>string</code> type will correspond to the text of the <code>ACCEPT</code> and <code>CANCEL</code> buttons respectively.</p>\\n\",\n    note: \"\",\n    renderModel: \"run\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DialogButtonsLabel, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Demo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Custom Icon\",\n    code: codeDialogIcon,\n    desc: \"<p>You can change any supported <a href='/components/Icon-all-icons'>Icon</a>, but use common icons whenever possible so that the users can quickly recognize which type of dialog is.</p>\\n\",\n    note: \"\",\n    renderModel: \"run\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DialogIcon, null)), docs.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    col: \"md-16\"\n  }, docs.map(function (doc) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Doc__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _extends({\n      key: doc.name\n    }, doc));\n  }))));\n});\n\n//# sourceURL=webpack:///./src/components/dialog/docs/dialog.dox?");

/***/ })

}]);