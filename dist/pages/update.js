"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function update() {
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
  }, "shaikh anas"), /*#__PURE__*/_react.default.createElement("p", {
    className: "role"
  }, "studen"), /*#__PURE__*/_react.default.createElement("a", {
    href: "/profile",
    className: "btn"
  }, "view profile")), /*#__PURE__*/_react.default.createElement("nav", {
    className: "navbar"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "/"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-home"
  }), /*#__PURE__*/_react.default.createElement("span", null, "home")), /*#__PURE__*/_react.default.createElement("a", {
    href: "/about"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-question"
  }), /*#__PURE__*/_react.default.createElement("span", null, "about")), /*#__PURE__*/_react.default.createElement("a", {
    href: "/courses"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-graduation-cap"
  }), /*#__PURE__*/_react.default.createElement("span", null, "courses")), /*#__PURE__*/_react.default.createElement("a", {
    href: "/teachers"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-chalkboard-user"
  }), /*#__PURE__*/_react.default.createElement("span", null, "teachers")), /*#__PURE__*/_react.default.createElement("a", {
    href: "/contact"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-headset"
  }), /*#__PURE__*/_react.default.createElement("span", null, "contact us")))), /*#__PURE__*/_react.default.createElement("section", {
    className: "form-container"
  }, /*#__PURE__*/_react.default.createElement("form", {
    action: "",
    method: "post",
    encType: "multipart/form-data"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "update profile"), /*#__PURE__*/_react.default.createElement("p", null, "update name"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    name: "name",
    placeholder: "shaikh anas",
    maxLength: "50",
    className: "box"
  }), /*#__PURE__*/_react.default.createElement("p", null, "update email"), /*#__PURE__*/_react.default.createElement("input", {
    type: "email",
    name: "email",
    placeholder: "shaikh@gmail.com",
    maxLength: "50",
    className: "box"
  }), /*#__PURE__*/_react.default.createElement("p", null, "previous password"), /*#__PURE__*/_react.default.createElement("input", {
    type: "password",
    name: "old_pass",
    placeholder: "enter your old password",
    maxLength: "20",
    className: "box"
  }), /*#__PURE__*/_react.default.createElement("p", null, "new password"), /*#__PURE__*/_react.default.createElement("input", {
    type: "password",
    name: "new_pass",
    placeholder: "enter your new password",
    maxLength: "20",
    className: "box"
  }), /*#__PURE__*/_react.default.createElement("p", null, "confirm password"), /*#__PURE__*/_react.default.createElement("input", {
    type: "password",
    name: "c_pass",
    placeholder: "confirm your new password",
    maxLength: "20",
    className: "box"
  }), /*#__PURE__*/_react.default.createElement("p", null, "update pic"), /*#__PURE__*/_react.default.createElement("input", {
    type: "file",
    accept: "image/*",
    className: "box"
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "submit",
    value: "update profile",
    name: "submit",
    className: "btn"
  }))));
}
var _default = exports.default = update;