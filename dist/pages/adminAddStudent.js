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

function AdminAddStudent(props) {
  const [isNew, setNew] = _react.default.useState(true);
  const [courses, setCourses] = _react.default.useState([]);
  const [index, setIndex] = _react.default.useState(-1);
  // const [teacherId, setTeacherId] = React.useState("")

  _react.default.useEffect(() => {
    const fetchData = async () => {
      console.log("fn called");
      try {
        const response = await _axios.default.get("http://localhost:5000/courseList");
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // console.log(courses);

  function handleChange(e) {
    if (e.target.value === "new") {
      setNew(true);
    } else {
      setNew(false);
    }
  }
  function handleChange2(e) {
    let id = e.target.value;
    // console.log("id", id)
    let ind = courses.findIndex(course => course.courseId === parseInt(id));
    // console.log("index", ind)
    setIndex(ind);
    // console.log("courses", courses[ind])
  }

  // function handleChange3(e) {
  //     setTeacherId(e.target.value)
  // }

  function validateForm(event) {
    event.preventDefault();
    var fullName = document.getElementById("fullName").value.trim();
    var emaill = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var courses = document.getElementById("courses").value.trim();
    var teacher = document.getElementById("teacher").value.trim();
    if (fullName === "" || emaill === "" || phone === "" || courses === "" || teacher === "") {
      alert("Please fill out all fields.");
      return false;
    }

    // Confirmation dialog handled outside of JSX
    var confirmed = window.confirm("Are you sure you want to add this student?");
    if (confirmed) {
      //console.log("Student added successfully!");
      if (props) {
        _axios.default.post("http://localhost:5000/newStudent", {}, {
          params: {
            name: fullName,
            email: emaill,
            mobile: phone,
            course: courses,
            adminId: teacher
          }
        }).then(res => {
          alert("Student added successfully with the id ".concat(res.data.id));
          console.log(res);
          (0, _auth.createUserWithEmailAndPassword)(_firebase.anotherAuth, "rea.stu".concat(res.data.id, "@gmail.com"), "stu".concat(res.data.id)).catch(error => {
            alert(error.message);
          });
        }).catch(e => {
          console.log(e);
        });
      }
    }
    return confirmed; // Return true if confirmed, false otherwise
  }
  function handleSubmit(event) {
    event.preventDefault();
    var course = document.getElementById("courses").value.trim();
    var teacher = document.getElementById("teacher").value.trim();
    var userName = document.getElementById("userName").value.trim();
    if (userName === "" || course === "" || teacher === "") {
      alert("Please fill out all fields.");
      return false;
    }
    var confirmed = window.confirm("Are you sure you want to add this student?");
    if (confirmed) {
      _axios.default.post("http://localhost:5000/addStudent", {}, {
        params: {
          studentId: userName.substring(7),
          courseId: course,
          adminId: teacher
        }
      }).then(res => {
        if (res.data === "Student added to the course") {
          alert("Student added successfully!");
        } else {
          alert("Student already exists in the course");
        }
      }).catch(e => {
        console.log("Student could not be added due to an error");
        console.log(e);
      });
    }
  }

  // console.log(props)

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement("section", {
    className: "home-grid"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "heading"
  }, "Add Student"), /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("select", {
    onChange: handleChange
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "new"
  }, "New to Institution"), /*#__PURE__*/_react.default.createElement("option", {
    value: "old"
  }, "New to Course"))), isNew ? /*#__PURE__*/_react.default.createElement("form", {
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
  }, "Course:"), /*#__PURE__*/_react.default.createElement("select", {
    onChange: handleChange2,
    id: "courses",
    name: "courses",
    required: true
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "",
    disabled: true,
    selected: true
  }, "Select Course"), courses.length && courses.map((course, index) => /*#__PURE__*/_react.default.createElement("option", {
    value: course.courseId
  }, course.courseName)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "teacher"
  }, "Teacher:"), /*#__PURE__*/_react.default.createElement("select", {
    id: "teacher",
    name: "teacher",
    required: true
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "",
    disabled: true,
    selected: true
  }, "Select Teacher"), courses.length && index > -1 && courses[index].teacherList.map((teacher, ind) => /*#__PURE__*/_react.default.createElement("option", {
    value: teacher.teacherId
  }, teacher.teacherName)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "submit"
  }, "Submit"))) : /*#__PURE__*/_react.default.createElement("form", {
    style: {
      fontSize: "1.3rem"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "userName"
  }, "Username"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    id: "userName",
    name: "userName",
    required: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "courses"
  }, "Course:"), /*#__PURE__*/_react.default.createElement("select", {
    onChange: handleChange2,
    id: "courses",
    name: "courses",
    required: true
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "",
    disabled: true,
    selected: true
  }, "Select Course"), courses.length && courses.map((course, index) => /*#__PURE__*/_react.default.createElement("option", {
    value: course.courseId
  }, course.courseName)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "teacher"
  }, "Teacher:"), /*#__PURE__*/_react.default.createElement("select", {
    id: "teacher",
    name: "teacher",
    required: true
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "",
    disabled: true,
    selected: true
  }, "Select Teacher"), courses.length && index > -1 && courses[index].teacherList.map((teacher, ind) => /*#__PURE__*/_react.default.createElement("option", {
    value: teacher.teacherId
  }, teacher.teacherName)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: handleSubmit,
    type: "submit"
  }, "Submit"))))));
}
var _default = exports.default = AdminAddStudent;