"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Header = _interopRequireDefault(require("../components/Header"));
var _AdminSideBar = _interopRequireDefault(require("../components/AdminSideBar"));
var _reactRouterDom = require("react-router-dom");
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function AdminViewCourses(props) {
  const [searchParams] = (0, _reactRouterDom.useSearchParams)();
  const dataString = searchParams.get('data');
  const data = JSON.parse(decodeURIComponent(dataString));
  const [teachers, setTeachers] = _react.default.useState([]);
  const [teacherList, setTeacherList] = _react.default.useState([]);

  // const [courseDetails, setCourseDetails] = React.useState({});

  _react.default.useEffect(() => {
    async function getTeachers() {
      try {
        const res = await _axios.default.get("http://localhost:5000/sudoTeacherList?courseId=".concat(data.id));
        setTeachers(res.data);
        setTeacherList(res.data.map(teacher => ({
          "adminId": teacher.adminId,
          "name": teacher.name
        })));
        console.log(res.data);
      } catch (e) {
        console.log(e);
      }
    }
    getTeachers();
  }, [data.id]);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement("section", {
    className: "playlist-videos"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "heading"
  }, "Teachers"), /*#__PURE__*/_react.default.createElement("div", {
    className: "container",
    style: {
      minWidth: "80%"
    }
  }, /*#__PURE__*/_react.default.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '20px'
    }
  }, /*#__PURE__*/_react.default.createElement("tr", {
    style: {
      backgroundColor: '#8E44AD'
    }
  }, /*#__PURE__*/_react.default.createElement("th", {
    style: {
      padding: '10px',
      border: '1px solid #e8e6e6'
    }
  }, "Teacher Id"), /*#__PURE__*/_react.default.createElement("th", {
    style: {
      padding: '10px',
      border: '1px solid #e8e6e6'
    }
  }, "Full Name"), /*#__PURE__*/_react.default.createElement("th", {
    style: {
      padding: '10px',
      border: '1px solid #ddd'
    }
  }, "Phone Number"), /*#__PURE__*/_react.default.createElement("th", {
    style: {
      padding: '10px',
      border: '1px solid #ddd'
    }
  }, "Actions")), teachers.map((teacher, index) => {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("td", {
      style: {
        padding: '10px',
        border: '1px solid #ddd',
        color: 'black'
      }
    }, teacher.adminId), /*#__PURE__*/_react.default.createElement("td", {
      style: {
        padding: '10px',
        border: '1px solid #ddd',
        color: 'black'
      }
    }, teacher.name), /*#__PURE__*/_react.default.createElement("td", {
      style: {
        padding: '10px',
        border: '1px solid #ddd',
        color: 'black'
      }
    }, teacher.mobile), /*#__PURE__*/_react.default.createElement("td", {
      style: {
        padding: '10px',
        border: '1px solid #ddd',
        color: 'black',
        textAlign: "center"
      }
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "/AdminViewTeacherProfile?data=".concat(encodeURIComponent(JSON.stringify({
        "id": teacher.adminId,
        "courseId": data.id,
        "teacherList": teacherList
      }))),
      className: "profile-btn"
    }, "View Profile")));
  })))));
}
var _default = exports.default = AdminViewCourses;