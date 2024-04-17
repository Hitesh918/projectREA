"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import { useHistory } from 'react-router-dom';

function Main() {
  // const history = useHistory();

  const handleMessage = event => {
    if (event.data === 'loginClicked') {
      // Navigate to login page
      // history.push('/login');
      window.open("http://localhost:3000/login", "_self");
    }
  };
  _react.default.useEffect(() => {
    // Add event listener for receiving messages from the iframe
    window.addEventListener('message', handleMessage);
    return () => {
      // Cleanup function to remove event listener
      window.removeEventListener('message', handleMessage);
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("iframe", {
    src: "http://localhost:3001/",
    style: {
      width: '124%',
      height: '163rem',
      border: 'none',
      position: "relative",
      right: "300px"
    }
  }));
}
var _default = exports.default = Main;