"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function AdminUpdate() {
  // Define state for form values
  const [formValues, setFormValues] = (0, _react.useState)({
    name: '',
    email: '',
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    // Here you can perform form submission logic
    console.log('Form submitted:', formValues);
    // Reset form values after submission
    setFormValues({
      name: '',
      email: '',
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  }

  // Function to handle input changes
  function handleChange(event) {
    const {
      name,
      value
    } = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  }
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("header", {
    className: "header"
  }, /*#__PURE__*/_react.default.createElement("section", {
    className: "flex"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "profile"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "images/pic-1.jpg",
    className: "image",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("h3", {
    className: "name"
  }, "Raj"), /*#__PURE__*/_react.default.createElement("p", {
    className: "role"
  }, "Admin"), /*#__PURE__*/_react.default.createElement("a", {
    href: "/adminprofile",
    className: "btn"
  }, "view profile"), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-btn"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "/adminlogin",
    className: "option-btn"
  }, "login"), /*#__PURE__*/_react.default.createElement("a", {
    href: "/adminregister",
    className: "option-btn"
  }, "register"))))), /*#__PURE__*/_react.default.createElement("div", {
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
  }, "Raj"), /*#__PURE__*/_react.default.createElement("p", {
    className: "role"
  }, "Admin"), /*#__PURE__*/_react.default.createElement("a", {
    href: "/adminprofile",
    className: "btn"
  }, "view profile")), /*#__PURE__*/_react.default.createElement("nav", {
    className: "navbar"
  }, " ", /*#__PURE__*/_react.default.createElement("a", {
    href: "/adminabout"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-home"
  }), /*#__PURE__*/_react.default.createElement("span", null, "home")), /*#__PURE__*/_react.default.createElement("a", {
    href: "/adminAddStudent"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-question"
  }), /*#__PURE__*/_react.default.createElement("span", null, "Add/Remove Students")), /*#__PURE__*/_react.default.createElement("a", {
    href: "/adminuploadmaterial"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-graduation-cap"
  }), /*#__PURE__*/_react.default.createElement("span", null, "upload material")))), /*#__PURE__*/_react.default.createElement("section", {
    className: "form-container"
  }, /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleSubmit,
    method: "post",
    encType: "multipart/form-data"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "update profile"), /*#__PURE__*/_react.default.createElement("p", null, "update name"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    name: "name",
    placeholder: "Raj",
    maxLength: "50",
    className: "box",
    value: formValues.name,
    onChange: handleChange
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "submit",
    value: "update profile",
    name: "submit",
    className: "btn"
  }))));
}
var _default = exports.default = AdminUpdate;