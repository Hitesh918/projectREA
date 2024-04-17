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
function Resource(props) {
  const [searchParams] = (0, _reactRouterDom.useSearchParams)();
  const dataString = searchParams.get('data');
  const data = JSON.parse(decodeURIComponent(dataString));
  const [link, setLink] = _react.default.useState("");
  const [resources, setResources] = _react.default.useState([]);

  // React.useEffect(() => {
  //     async function getCourseDetails() {
  //         const res = await axios.get(`http://localhost:5000/getResources`, {
  //             params: {
  //                 courseId: data.id,
  //                 level: data.level
  //             }
  //         });
  //         setResources(res.data);
  //     }
  //     getCourseDetails();
  // }, [data.id, data.level]);

  _react.default.useEffect(() => {
    async function getLink() {
      try {
        const res = await _axios.default.get("http://localhost:5000/getClassLink", {
          params: {
            studentId: data.studentId,
            courseId: data.id
          }
        });
        console.log(res.data);
        setLink(res.data.classLink);
      } catch (error) {
        console.error('An error occurred:', error);
      }
    }
    getLink();
  }, [data.id, props]);
  const openLink = () => {
    window.open(link, '_blank');
  };
  console.log(props);
  // console.log(resources)

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement("section", {
    className: "playlist-details"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "meetclass"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "tutor"
  }, "Attend Your Classes here"), " ", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("button", {
    onClick: openLink,
    id: "startClassBtn"
  }, "Join Class")), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("h1", {
    className: "heading"
  }, "Resources"), /*#__PURE__*/_react.default.createElement("div", null)));
}
var _default = exports.default = Resource;