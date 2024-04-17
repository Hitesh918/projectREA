"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Header = _interopRequireDefault(require("../components/Header"));
var _StudentSideBar = _interopRequireDefault(require("../components/StudentSideBar"));
var _reactRouterDom = require("react-router-dom");
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Levels(props) {
  const [searchParams] = (0, _reactRouterDom.useSearchParams)();
  const dataString = searchParams.get('data');
  const data = JSON.parse(decodeURIComponent(dataString));
  const [courseDetails, setCourseDetails] = _react.default.useState({});
  _react.default.useEffect(() => {
    if (props && props.id && data && data.id) {
      async function getCourseDetails() {
        const res = await _axios.default.get("http://localhost:5000/getCourseDetails?courseId=".concat(data.id, "&studentId=").concat(props.id));
        setCourseDetails(res.data);
      }
      getCourseDetails();
    }
    console.log("courseDetails", courseDetails);
  }, [data.id, props.id]);

  // console.log(props)
  // console.log(data)
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement("section", {
    className: "playlist-details"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "heading"
  }, "Course details"), /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "column"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "thumb"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "images/thumb-1.png",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("span", null, data && data.numberOfLevels, " levels"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "column"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "tutor"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "images/pic-2.jpg",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", null, courseDetails.teacherName))), /*#__PURE__*/_react.default.createElement("div", {
    className: "details"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "About Teacher"), courseDetails && courseDetails.profile && /*#__PURE__*/_react.default.createElement("p", null, courseDetails.profile, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("p", null))))))), /*#__PURE__*/_react.default.createElement("section", {
    className: "playlist-videos"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "heading"
  }, "Levels"), /*#__PURE__*/_react.default.createElement("div", {
    className: "box-container"
  }, Array.from({
    length: data && data.numberOfLevels
  }, (_, i) =>
  /*#__PURE__*/
  // <a
  //     key={i + 1}
  //     className={`box ${i + 1 > data.level ? 'disabled-link' : ''}`}
  //     href={`/resource?data=${encodeURIComponent(JSON.stringify({ "id": data.id, "level": i + 1 , "studentId" : data.studentId}))}`}
  // >
  //     <i className="fas fa-play"></i>
  //     <img src="images/post-1-1.png" alt="" />
  //     <h3>Level {i + 1}</h3>
  // </a>
  _react.default.createElement(_reactRouterDom.Link, {
    to: "/resource?data=".concat(encodeURIComponent(JSON.stringify({
      "id": data.id,
      "level": data.level,
      "studentId": data.studentId
    }))),
    className: "box ".concat(i + 1 > data.level ? 'disabled-link' : '')
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-play"
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: "images/post-1-1.png",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("h3", null, "Level ", i + 1))))));
}
var _default = exports.default = Levels;