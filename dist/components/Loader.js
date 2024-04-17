"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _lottieReact = _interopRequireDefault(require("lottie-react"));
var _react = _interopRequireDefault(require("react"));
var _anim = _interopRequireDefault(require("../assets/anim.json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Loader() {
  return /*#__PURE__*/_react.default.createElement(_lottieReact.default, {
    style: {
      width: 350,
      height: 350,
      position: "absolute",
      top: "22%",
      left: "40%"
    },
    animationData: _anim.default,
    loop: true
  });
}
var _default = exports.default = Loader;