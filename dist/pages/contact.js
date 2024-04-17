"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Header = _interopRequireDefault(require("../components/Header"));
var _StudentSideBar = _interopRequireDefault(require("../components/StudentSideBar"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Contact() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement("section", {
    className: "contact"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "image"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "images/contact-img.svg",
    alt: ""
  })), /*#__PURE__*/_react.default.createElement("form", {
    action: "",
    method: "post"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Get In Touch"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: "Enter your name",
    name: "name",
    required: true,
    maxLength: "50",
    className: "box"
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "email",
    placeholder: "Enter your email",
    name: "email",
    required: true,
    maxLength: "50",
    className: "box"
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "number",
    placeholder: "Enter your number",
    name: "number",
    required: true,
    maxLength: "50",
    className: "box"
  }), /*#__PURE__*/_react.default.createElement("textarea", {
    name: "msg",
    className: "box",
    placeholder: "Enter your message",
    required: true,
    maxLength: "1000",
    cols: "30",
    rows: "10"
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "submit",
    value: "Send message",
    className: "inline-btn",
    name: "submit"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "box-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "box"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-phone"
  }), /*#__PURE__*/_react.default.createElement("h3", null, "Phone Number"), /*#__PURE__*/_react.default.createElement("a", {
    href: "tel:1234567890"
  }, "123-456-7890"), /*#__PURE__*/_react.default.createElement("a", {
    href: "tel:1112223333"
  }, "111-222-3333")), /*#__PURE__*/_react.default.createElement("div", {
    className: "box"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-envelope"
  }), /*#__PURE__*/_react.default.createElement("h3", null, "Email Address"), /*#__PURE__*/_react.default.createElement("a", {
    href: "mailto:shaikhanas@gmail.com"
  }, "rea123@gmail.com"), /*#__PURE__*/_react.default.createElement("a", {
    href: "mailto:anasbhai@gmail.com"
  }, "theREAladmin@gmail.com")), /*#__PURE__*/_react.default.createElement("div", {
    className: "box"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-map-marker-alt"
  }), /*#__PURE__*/_react.default.createElement("h3", null, "Office Address"), /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, "Flat No. 1, A1 Building, Vijayawada, Andhra Pradesh, India - 400104")))));
}
var _default = exports.default = Contact;