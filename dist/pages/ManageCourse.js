"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Header = _interopRequireDefault(require("../components/Header"));
var _TeacherSideBar = _interopRequireDefault(require("../components/TeacherSideBar"));
var _reactRouterDom = require("react-router-dom");
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ManageCourse(props) {
  const [searchParams] = (0, _reactRouterDom.useSearchParams)();
  const dataString = searchParams.get('data');
  const data = JSON.parse(decodeURIComponent(dataString));
  console.log(data);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement("section", {
    className: "playlist-videos"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "heading"
  }, "Batches"), /*#__PURE__*/_react.default.createElement("div", {
    className: "box-container"
  }, Array.from({
    length: data && data.numberOfBatches
  }, (_, i) => /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    key: i + 1,
    className: "box",
    to: "/ManageLevel?data=".concat(encodeURIComponent(JSON.stringify({
      "id": data.id,
      "batch": i + 1,
      "adminId": data.adminId,
      "numberOfBatches": data.numberOfBatches
    }))),
    disabled: i + 1 > data.level
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-play"
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: "images/post-1-1.png",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("h3", null, "Batch ", i + 1))), data.numberOfBatches === 0 && /*#__PURE__*/_react.default.createElement("h1", null, "No Batches"), data.numberOfBatches < 2 && /*#__PURE__*/_react.default.createElement("div", null))));
}
var _default = exports.default = ManageCourse;