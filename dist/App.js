"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _AdminLanding = _interopRequireDefault(require("./pages/AdminLanding.jsx"));
var _adminAddStudent = _interopRequireDefault(require("./pages/adminAddStudent.jsx"));
var _AdminAddTeacher = _interopRequireDefault(require("./pages/AdminAddTeacher.jsx"));
var _adminupdate = _interopRequireDefault(require("./pages/adminupdate.jsx"));
var _adminProfile = _interopRequireDefault(require("./pages/adminProfile.jsx"));
var _AdminUploadMaterial = _interopRequireDefault(require("./pages/AdminUploadMaterial.jsx"));
var _AdminViewTeacherProfile = _interopRequireDefault(require("./pages/AdminViewTeacherProfile.jsx"));
var _AdminViewCourse = _interopRequireDefault(require("./pages/AdminViewCourse.jsx"));
var _AdminViewStudent = _interopRequireDefault(require("./pages/AdminViewStudent.jsx"));
var _teacherLanding = _interopRequireDefault(require("./pages/teacherLanding.jsx"));
var _teacher_profile = _interopRequireDefault(require("./pages/teacher_profile.jsx"));
var _ViewStudent = _interopRequireDefault(require("./pages/ViewStudent.jsx"));
var _ManageCourse = _interopRequireDefault(require("./pages/ManageCourse.jsx"));
var _manageLevel = _interopRequireDefault(require("./pages/manageLevel.jsx"));
var _StudnetLanding = _interopRequireDefault(require("./pages/StudnetLanding.jsx"));
var _about = _interopRequireDefault(require("./pages/about.jsx"));
var _contact = _interopRequireDefault(require("./pages/contact.jsx"));
var _courses = _interopRequireDefault(require("./pages/courses.jsx"));
var _Levels = _interopRequireDefault(require("./pages/Levels.jsx"));
var _Resource = _interopRequireDefault(require("./pages/Resource.jsx"));
var _StudentProfile = _interopRequireDefault(require("./pages/StudentProfile.jsx"));
var _playlist = _interopRequireDefault(require("./pages/playlist.jsx"));
var _teachers = _interopRequireDefault(require("./pages/teachers.jsx"));
var _register = _interopRequireDefault(require("./pages/register.jsx"));
var _update = _interopRequireDefault(require("./pages/update.jsx"));
var _watch_video = _interopRequireDefault(require("./pages/watch_video.jsx"));
var _login = _interopRequireDefault(require("./pages/login.jsx"));
var _ChangePassword = _interopRequireDefault(require("./pages/ChangePassword.jsx"));
var _Header = _interopRequireDefault(require("./components/Header.jsx"));
var _AdminSideBar = _interopRequireDefault(require("./components/AdminSideBar.jsx"));
var _TeacherSideBar = _interopRequireDefault(require("./components/TeacherSideBar.jsx"));
var _StudentSideBar = _interopRequireDefault(require("./components/StudentSideBar.jsx"));
var _auth = require("firebase/auth");
var _firebase = require("./firebase.js");
var _axios = _interopRequireDefault(require("axios"));
var _Landing = _interopRequireDefault(require("./pages/Landing.jsx"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function App() {
  const [allCourses, setAllCourses] = (0, _react.useState)([]);
  const [userRole, setUserRole] = (0, _react.useState)(null);
  const [userMail, setUserMail] = (0, _react.useState)("");
  const [userData, setUserData] = (0, _react.useState)(null);
  (0, _react.useEffect)(() => {
    const unsubscribe = (0, _auth.onAuthStateChanged)(_firebase.auth, user => {
      if (user) {
        console.log(user.email);
        if (user.email.substring(4, 8) === "sudo") {
          setUserRole("admin");
          setUserMail(user.email);
        } else if (user.email.substring(4, 7) === "adm") {
          setUserRole("teacher");
          setUserMail(user.email);
        } else if (user.email.substring(4, 7) === "stu") {
          setUserRole("student");
          setUserMail(user.email);
        }
      } else {
        setUserRole(null);
      }
    });
    return () => unsubscribe(); // Clean up the subscription
  }, []);
  (0, _react.useEffect)(() => {
    const fetchDataForStudentPages = async id => {
      console.log("callllllled");
      try {
        const studentDetails = await _axios.default.get("http://localhost:5000/studentDetails", {
          params: {
            studentId: id
          }
        });
        return studentDetails.data;
      } catch (error) {
        console.error("Error fetching student details:", error);
        throw error; // Rethrow error for further handling if needed
      }
    };
    const fetchDataForAdminPages = async id => {
      console.log("callllllled");
      try {
        const adminDetails = await _axios.default.get("http://localhost:5000/adminDetails", {
          params: {
            adminId: id
          }
        });
        return adminDetails.data;
      } catch (error) {
        console.error("Error fetching admin details:", error);
        throw error;
      }
    };
    const fetchDataForSuperAdminPages = async id => {
      console.log("callllllled");
      try {
        const superAdminDetails = await _axios.default.get("http://localhost:5000/superAdminDetails", {
          params: {
            superAdminId: id
          }
        });
        console.log("superAdminDetails", superAdminDetails);
        return superAdminDetails.data;
      } catch (error) {
        console.error("Error fetching superAdmin details:", error);
        throw error;
      }
    };
    const fetchCourseList = async () => {
      console.log("callllllled");
      try {
        const courses = await _axios.default.get("http://localhost:5000/courseList");
        return courses.data;
      } catch (error) {
        console.error("Error fetching admin details:", error);
        throw error;
      }
    };
    const fetchData = async id => {
      try {
        if (userRole === 'admin') {
          const superAdminData = await fetchDataForSuperAdminPages(id);
          let courses = await fetchCourseList();
          setAllCourses(courses);
          setUserData(superAdminData);
        } else if (userRole === 'teacher') {
          const adminData = await fetchDataForAdminPages(id);
          setUserData(adminData);
        } else if (userRole === 'student') {
          const studentData = await fetchDataForStudentPages(id);
          setUserData(studentData);
        } else {}
      } catch (error) {
        console.log(error);
      }
    };
    if (userRole && userMail) {
      if (userRole === "admin") {
        fetchData(userMail.substring(8, 13));
      } else {
        fetchData(userMail.substring(7, 12));
      }
    }
  }, [userRole, userMail]);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement("div", null, userRole === "admin" && userData && /*#__PURE__*/_react.default.createElement(_AdminSideBar.default, {
    name: userData && userData.name,
    role: userRole,
    id: userData && userData.superAdminId,
    dp: userData && userData.dp
  }), userRole === "teacher" && userData && /*#__PURE__*/_react.default.createElement(_TeacherSideBar.default, {
    name: userData && userData.name,
    role: userRole,
    id: userData && userData.adminId,
    dp: userData && userData.dp
  }), userRole === "student" && userData && /*#__PURE__*/_react.default.createElement(_StudentSideBar.default, {
    name: userData && userData.name,
    role: userRole,
    id: userData && userData.studentId,
    dp: userData && userData.dp
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/_react.default.createElement(_Landing.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/changePassword",
    element: /*#__PURE__*/_react.default.createElement(_ChangePassword.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/login",
    element: /*#__PURE__*/_react.default.createElement(_login.default, null)
  }), userRole === 'admin' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/Admin",
    element: /*#__PURE__*/_react.default.createElement(_AdminLanding.default, {
      courses: allCourses,
      userRole: userRole,
      id: userData && userData.superAdminId
    })
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/AdminAddStudent",
    element: /*#__PURE__*/_react.default.createElement(_adminAddStudent.default, {
      courses: userData && userData.courses,
      id: userData && userData.superAdminId
    })
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/AdminAddTeacher",
    element: /*#__PURE__*/_react.default.createElement(_AdminAddTeacher.default, {
      courses: allCourses,
      id: userData && userData.superAdminId
    })
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/AdminProfile",
    element: /*#__PURE__*/_react.default.createElement(_adminProfile.default, {
      details: userData
    })
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/AdminUploadMaterial",
    element: /*#__PURE__*/_react.default.createElement(_AdminUploadMaterial.default, {
      courses: allCourses
    })
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/AdminViewCourses",
    element: /*#__PURE__*/_react.default.createElement(_AdminViewCourse.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/AdminViewTeacherProfile",
    element: /*#__PURE__*/_react.default.createElement(_AdminViewTeacherProfile.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/AdminViewStudent",
    element: /*#__PURE__*/_react.default.createElement(_AdminViewStudent.default, null)
  })), userRole === "teacher" && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/Teacher",
    element: /*#__PURE__*/_react.default.createElement(_teacherLanding.default, {
      courses: userData && userData.courses,
      adminId: userData && userData.adminId
    })
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/TeacherProfile",
    element: /*#__PURE__*/_react.default.createElement(_teacher_profile.default, {
      details: userData
    })
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/ViewStudent",
    element: /*#__PURE__*/_react.default.createElement(_ViewStudent.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/ManageCourse",
    element: /*#__PURE__*/_react.default.createElement(_ManageCourse.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/ManageLevel",
    element: /*#__PURE__*/_react.default.createElement(_manageLevel.default, null)
  })), userRole === 'student' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/Student",
    element: /*#__PURE__*/_react.default.createElement(_StudnetLanding.default, {
      courses: userData && userData.courses,
      userRole: userRole,
      id: userData && userData.studentId
    })
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/playlist",
    element: /*#__PURE__*/_react.default.createElement(_playlist.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/StudentProfile",
    element: /*#__PURE__*/_react.default.createElement(_StudentProfile.default, {
      details: userData
    })
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/levels",
    element: /*#__PURE__*/_react.default.createElement(_Levels.default, {
      id: userData && userData.studentId
    })
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/resource",
    element: /*#__PURE__*/_react.default.createElement(_Resource.default, {
      id: userData && userData.studentId
    })
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/about",
    element: /*#__PURE__*/_react.default.createElement(_about.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/contact",
    element: /*#__PURE__*/_react.default.createElement(_contact.default, null)
  })), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/courses",
    element: /*#__PURE__*/_react.default.createElement(_courses.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/register",
    element: /*#__PURE__*/_react.default.createElement(_register.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/teachers",
    element: /*#__PURE__*/_react.default.createElement(_teachers.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/teacher_profile",
    element: /*#__PURE__*/_react.default.createElement(_teacher_profile.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/update",
    element: /*#__PURE__*/_react.default.createElement(_update.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/watch_video",
    element: /*#__PURE__*/_react.default.createElement(_watch_video.default, null)
  })))));
}
var _default = exports.default = App;