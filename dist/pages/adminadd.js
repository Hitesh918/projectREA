"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function validateForm(event) {
  event.preventDefault(); // Prevent default form submission

  var fullName = document.getElementById("fullName").value.trim();
  var email = document.getElementById("email").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var courses = document.getElementById("courses").value.trim();
  var batch = document.getElementById("batch").value.trim();
  if (fullName === "" || email === "" || phone === "" || courses === "" || batch === "") {
    alert("Please fill out all fields.");
    return false;
  }

  // Confirmation dialog handled outside of JSX
  var confirmed = window.confirm("Are you sure you want to add this student?");
  if (confirmed) {
    // Here you can perform any action you want after confirmation
    // For now, let's just log a message
    console.log("Student added successfully!");
  }
  return confirmed; // Return true if confirmed, false otherwise
}
function AdminAbout() {
  // Function to handle the click event

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "form-title"
  }, "Add Student"), /*#__PURE__*/_react.default.createElement("form", {
    id: "addStudentForm",
    onSubmit: validateForm
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "fullName"
  }, "Full Name:"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    id: "fullName",
    name: "fullName",
    required: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "email"
  }, "Email ID:"), /*#__PURE__*/_react.default.createElement("input", {
    type: "email",
    id: "email",
    name: "email",
    required: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "phone"
  }, "Phone Number:"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    id: "phone",
    name: "phone",
    required: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "courses"
  }, "Courses:"), /*#__PURE__*/_react.default.createElement("select", {
    id: "courses",
    name: "courses",
    required: true
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: ""
  }, "Select Course"), /*#__PURE__*/_react.default.createElement("option", {
    value: "Abacus"
  }, "Abacus"), /*#__PURE__*/_react.default.createElement("option", {
    value: "Vedic Math"
  }, "Vedic Math"), /*#__PURE__*/_react.default.createElement("option", {
    value: "E Kids"
  }, "E Kids"), /*#__PURE__*/_react.default.createElement("option", {
    value: "Memory Technique"
  }, "Memory Technique"), /*#__PURE__*/_react.default.createElement("option", {
    value: "Cursive Writing"
  }, "Cursive Writing"), /*#__PURE__*/_react.default.createElement("option", {
    value: "Rubik Cube"
  }, "Rubik Cube"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "batch"
  }, "Batch:"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    id: "batch",
    name: "batch",
    required: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "submit"
  }, "Submit")))), /*#__PURE__*/_react.default.createElement("img", {
    src: "images\\REA_LOGO_Transparent (1).png",
    alt: "Logo",
    className: "logo"
  }));
}
var _default = exports.default = AdminAbout;