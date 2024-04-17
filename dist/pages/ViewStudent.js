"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Header = _interopRequireDefault(require("../components/Header"));
var _reactRouterDom = require("react-router-dom");
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ViewStudent(props) {
  const [searchParams] = (0, _reactRouterDom.useSearchParams)();
  const dataString = searchParams.get('data');
  const data = JSON.parse(decodeURIComponent(dataString));
  const [details, setDetails] = _react.default.useState({});
  _react.default.useEffect(() => {
    async function getStudentDetails() {
      const res = await _axios.default.get("http://localhost:5000/studentDetails", {
        params: {
          studentId: data.id
        }
      });
      setDetails(res.data);
      console.log("Details", res.data);
    }
    getStudentDetails();
  }, [data.id]);
  console.log(data);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement("section", {
    className: "teacher-profile",
    style: {
      color: 'black',
      padding: '20px'
    }
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "heading"
  }, "Student Profile"), /*#__PURE__*/_react.default.createElement("div", {
    className: "details",
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: '20px'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "tutor",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: details && details.dp,
    className: "image",
    alt: "",
    style: {
      border: '2px solid black',
      width: '150px',
      height: '150px'
    }
  }), /*#__PURE__*/_react.default.createElement("h3", null, details.name), /*#__PURE__*/_react.default.createElement("span", {
    className: "adminId1",
    style: {
      fontSize: '20px'
    }
  }, "Admin ID: ", details.studentId), /*#__PURE__*/_react.default.createElement("p", {
    className: "mobile1",
    style: {
      fontSize: '20px'
    }
  }, "Mobile: ", details.mobile), /*#__PURE__*/_react.default.createElement("p", {
    className: "mobile1",
    style: {
      fontSize: '20px'
    }
  }, "Email: ", details.email)), /*#__PURE__*/_react.default.createElement("div", {
    className: "courses",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "sub-heading"
  }, "Courses Enrolled"), details.courses && details.courses.map((course, index) => /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "box",
    key: index,
    style: {
      padding: '10px',
      border: '1px solid black',
      marginBottom: '20px',
      maxWidth: '300px',
      alignItems: 'center',
      display: 'inline-block',
      justifyContent: 'center',
      fontSize: '18px',
      borderRadius: '5px',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: 'white',
      display: "inline-block",
      marginRight: "1rem"
    }
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "title",
    style: {
      fontSize: '20px',
      display: "inline-block"
    }
  }, course.courseDetails.courseName)), /*#__PURE__*/_react.default.createElement("div", {
    className: "box",
    key: index,
    style: {
      padding: '10px',
      border: '1px solid black',
      marginBottom: '20px',
      maxWidth: '300px',
      alignItems: 'center',
      display: 'inline-block',
      justifyContent: 'center',
      fontSize: '18px',
      borderRadius: '5px',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: 'white',
      display: "inline-block"
    }
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "title",
    style: {
      fontSize: '20px',
      display: "inline-block"
    }
  }, "Level ", course.presentLevel)))))), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("h1", {
    className: "heading"
  }, "Performance in this course")));
}
var _default = exports.default = ViewStudent;