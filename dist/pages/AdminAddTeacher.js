"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _Header = _interopRequireDefault(require("../components/Header"));
var _AdminSideBar = _interopRequireDefault(require("../components/AdminSideBar"));
var _auth = require("firebase/auth");
var _firebase = require("../firebase");
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Import Link from React Router

function CourseCheckbox(_ref) {
  let {
    course,
    isChecked,
    onChange
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    value: course.courseId,
    checked: isChecked,
    onChange: onChange
  }), course.courseName);
}
function AdminAddTeacher(props) {
  const [courses, setCourses] = _react.default.useState([]);
  const [checkedCourses, setCheckedCourses] = _react.default.useState({});
  const handleCheckboxChange = event => {
    const courseId = parseInt(event.target.value);
    setCheckedCourses({
      ...checkedCourses,
      [courseId]: event.target.checked
    });
  };
  _react.default.useEffect(() => {
    // const fetchData = async () => {
    //     console.log("fn called")
    //     try {
    //         const response = await axios.get("http://localhost:5000/courseList");
    //         setCourses(response.data);
    //     } catch (error) {
    //         console.error("Error fetching data:", error);
    //     }
    // };

    // fetchData();
    setCourses(props.courses);
  }, []);
  console.log(courses);
  function validateForm(event) {
    event.preventDefault();
    var fullName = document.getElementById("fullName").value.trim();
    var emaill = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var courses = Object.keys(checkedCourses).filter(courseId => checkedCourses[courseId]).map(courseId => parseInt(courseId));
    var profile = document.getElementById("profile").value.trim();
    var adminId = document.getElementById("adminId").value.trim();
    if (fullName === "" || emaill === "" || phone === "" || adminId === "") {
      alert("Please fill out all fields.");
      return false;
    }

    // Confirmation dialog handled outside of JSX
    var confirmed = window.confirm("Are you sure you want to add this Teacher?");
    if (confirmed) {
      //console.log("Student added successfully!");
      if (props) {
        _axios.default.post("http://localhost:5000/newTeacher", {}, {
          params: {
            name: fullName,
            email: emaill,
            mobile: phone,
            course: courses,
            info: profile,
            id: adminId
          }
        }).then(res => {
          alert("Teacher added successfully!");
          console.log(res);
          (0, _auth.createUserWithEmailAndPassword)(_firebase.anotherAuth, "rea.adm".concat(res.data.id, "@gmail.com"), "adm".concat(res.data.id)).catch(error => {
            alert(error.message);
          });
        }).catch(e => {
          console.log(e);
        });
      }
    }
    return confirmed; // Return true if confirmed, false otherwise
  }

  // console.log(props)

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement("section", {
    className: "home-grid"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "heading"
  }, "Add Teacher"), /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("form", {
    style: {
      fontSize: "1.3rem"
    },
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
    htmlFor: "adminId"
  }, "Teacher ID:"), /*#__PURE__*/_react.default.createElement("input", {
    style: {
      width: "45rem",
      border: "1px solid",
      height: "3.4rem",
      borderRadius: "5px",
      padding: "10px"
    },
    type: "number",
    id: "adminId",
    name: "adminId",
    inputMode: "numeric",
    pattern: "[0-9]*",
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
  }, "Course:"), courses.length && courses.map((course, index) => /*#__PURE__*/_react.default.createElement(CourseCheckbox, {
    key: course.courseId,
    course: course,
    isChecked: checkedCourses[course.courseId] || false,
    onChange: handleCheckboxChange
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "profile"
  }, "Profile:"), /*#__PURE__*/_react.default.createElement("textarea", {
    id: "profile",
    name: "profile",
    rows: "4",
    cols: "50",
    placeholder: "Enter teacher's INFO",
    style: {
      border: "1px solid #ccc",
      borderRadius: "5px"
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "submit"
  }, "Submit"))))));
}
var _default = exports.default = AdminAddTeacher;