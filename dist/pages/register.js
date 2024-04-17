"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function contact() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "side-bar"
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "close-btn"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-times"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "profile"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "images/pic-1.jpg",
    className: "image",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("h3", {
    className: "name"
  }, "Swathi"), /*#__PURE__*/_react.default.createElement("p", {
    className: "role"
  }, "Student"), /*#__PURE__*/_react.default.createElement("a", {
    href: "/profile",
    className: "btn"
  }, "View Profile")), /*#__PURE__*/_react.default.createElement("nav", {
    className: "navbar"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "/"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-home"
  }), /*#__PURE__*/_react.default.createElement("span", null, "Home")), /*#__PURE__*/_react.default.createElement("a", {
    href: "/about"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-question"
  }), /*#__PURE__*/_react.default.createElement("span", null, "About")), /*#__PURE__*/_react.default.createElement("a", {
    href: "/courses"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-graduation-cap"
  }), /*#__PURE__*/_react.default.createElement("span", null, "Courses")), /*#__PURE__*/_react.default.createElement("a", {
    href: "/teachers"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-chalkboard-user"
  }), /*#__PURE__*/_react.default.createElement("span", null, "Teachers")), /*#__PURE__*/_react.default.createElement("a", {
    href: "/contact"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-headset"
  }), /*#__PURE__*/_react.default.createElement("span", null, "Contact Us")))), /*#__PURE__*/_react.default.createElement("section", {
    className: "form-container"
  }, /*#__PURE__*/_react.default.createElement("form", {
    action: "",
    method: "post",
    encType: "multipart/form-data"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Register Now"), /*#__PURE__*/_react.default.createElement("p", null, "Your Name ", /*#__PURE__*/_react.default.createElement("span", null, "*")), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    name: "name",
    placeholder: "enter your name",
    required: true,
    maxLength: "50",
    className: "box"
  }), /*#__PURE__*/_react.default.createElement("p", null, "Your Email ", /*#__PURE__*/_react.default.createElement("span", null, "*")), /*#__PURE__*/_react.default.createElement("input", {
    type: "email",
    name: "email",
    placeholder: "enter your email",
    required: true,
    maxLength: "50",
    className: "box"
  }), /*#__PURE__*/_react.default.createElement("p", null, "Your Password ", /*#__PURE__*/_react.default.createElement("span", null, "*")), /*#__PURE__*/_react.default.createElement("input", {
    type: "password",
    name: "pass",
    placeholder: "enter your password",
    required: true,
    maxLength: "20",
    className: "box"
  }), /*#__PURE__*/_react.default.createElement("p", null, "Confirm Password ", /*#__PURE__*/_react.default.createElement("span", null, "*")), /*#__PURE__*/_react.default.createElement("input", {
    type: "password",
    name: "c_pass",
    placeholder: "confirm your password",
    required: true,
    maxLength: "20",
    className: "box"
  }), /*#__PURE__*/_react.default.createElement("p", null, "Select Profile ", /*#__PURE__*/_react.default.createElement("span", null, "*")), /*#__PURE__*/_react.default.createElement("input", {
    type: "file",
    name: "profile_image",
    accept: "image/*",
    required: true,
    className: "box"
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "submit",
    value: "register new",
    name: "submit",
    className: "btn"
  }))));
}
var _default = exports.default = contact;