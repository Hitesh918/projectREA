"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _StudentSideBar = _interopRequireDefault(require("../components/StudentSideBar"));
var _Header = _interopRequireDefault(require("../components/Header"));
var _firebase = _interopRequireDefault(require("../firebase"));
var _auth = require("firebase/auth");
var _reactRouterDom = require("react-router-dom");
var _Loader = _interopRequireDefault(require("../components/Loader"));
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function StudentLanding(props) {
  const navigate = (0, _reactRouterDom.useNavigate)();
  const [loading, setLoading] = _react.default.useState(false);
  // const [courses , setCourses] = React.useState([])
  // const [studentName , setStudentName] = React.useState("")

  // React.useEffect(() => {
  //    const fetchData = async () => {
  //       try {
  //          const user = await new Promise((resolve, reject) => {
  //             onAuthStateChanged(auth, (user) => {
  //                resolve(user);
  //             });
  //          });

  //          setTimeout(async () => {
  //             setLoading(false);
  //             if (user && user.email.substring(4, 7) === "stu") {
  //                const studentDetails = await axios.get("http://localhost:5000/coursesEnrolledIn", {
  //                   params: {
  //                      studentId: user.email.substring(7, 12)
  //                   }
  //                });
  //                console.log("Student Details:", studentDetails);
  //                setStudentName(studentDetails.data.name);
  //                setCourses(studentDetails.data.courses);
  //                navigate("/Student", { replace: true });
  //             } else {
  //                navigate("/logIn", { replace: true });
  //             }
  //          }, 1000);
  //       } catch (error) {
  //          console.error("Error fetching student details:", error);
  //          // Handle error as needed
  //       }
  //    };

  //    fetchData();
  // }, []);
  console.log("props ", props.courses);
  return /*#__PURE__*/_react.default.createElement("div", null, loading ? /*#__PURE__*/_react.default.createElement(_Loader.default, null) : /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement("section", {
    className: "courses"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "heading"
  }, "Courses"), /*#__PURE__*/_react.default.createElement("div", {
    className: "box-container"
  }, props && props.courses && props.courses.map(course => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "box",
      key: course._id
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "tutor"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "images/pic-2.jpg",
      alt: ""
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("h3", null, course.teacherName))), /*#__PURE__*/_react.default.createElement("div", {
      className: "thumb"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "images/".concat(course.courseId, ".png"),
      alt: ""
    }), /*#__PURE__*/_react.default.createElement("span", null, course && course.courseDetails.numberOfLevels, "  Levels")), /*#__PURE__*/_react.default.createElement("h3", {
      className: "title"
    }, course.courseDetails.courseName), /*#__PURE__*/_react.default.createElement("h2", {
      style: {
        color: "black"
      }
    }, "Level ", course.presentLevel), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: {
        pathname: '/levels',
        search: "?data=".concat(encodeURIComponent(JSON.stringify({
          "id": course.courseDetails.courseId,
          "level": course.presentLevel,
          "numberOfLevels": course.courseDetails.numberOfLevels,
          "studentId": props.id
        })))
      },
      className: "inline-btn"
    }, "Continue Learning ", /*#__PURE__*/_react.default.createElement("i", {
      className: "fa-solid fa-arrow-right"
    })));
  }), props && props.courses && props.courses.length === 0 && /*#__PURE__*/_react.default.createElement("h1", null, "No Courses Enrolled"), props && props.courses && props.courses.length < 2 && /*#__PURE__*/_react.default.createElement("div", null)), /*#__PURE__*/_react.default.createElement("div", {
    className: "more-btn"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "/courses",
    className: "inline-option-btn"
  }, "View All Courses")))));
}
var _default = exports.default = StudentLanding;