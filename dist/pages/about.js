"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Header = _interopRequireDefault(require("../components/Header"));
var _StudentSideBar = _interopRequireDefault(require("../components/StudentSideBar"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function about() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement("section", {
    className: "about"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "image"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "images/about-img.svg",
    alt: ""
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "content"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Why Choose Us?"), /*#__PURE__*/_react.default.createElement("p", null, "Raja Educational Academy offers a unique blend of experienced leadership, holistic education, and innovative teaching methods. Our focus on traditional techniques like Abacus and Vedic Maths, combined with modern approaches, ensures comprehensive skill development for students. Experience the transformative impact on confidence, academic performance, and community engagement. Choose Raja Educational Academy for excellence in education and preparation for a brighter future."), "         ", /*#__PURE__*/_react.default.createElement("a", {
    href: "/courses",
    className: "inline-btn"
  }, "our courses"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "box-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "box"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-graduation-cap"
  }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", null, "6"), /*#__PURE__*/_react.default.createElement("p", null, "Online Courses"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "box"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-user-graduate"
  }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", null, "+1000"), /*#__PURE__*/_react.default.createElement("p", null, "Brilliant Students"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "box"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-chalkboard-user"
  }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", null, "+50"), /*#__PURE__*/_react.default.createElement("p", null, "Expert Tutors"))))), /*#__PURE__*/_react.default.createElement("script", {
    src: "js/script.js"
  }));
}
var _default = exports.default = about;