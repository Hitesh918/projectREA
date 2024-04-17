"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Header = _interopRequireDefault(require("../components/Header"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import AdminSideBar from '../components/AdminSideBar';

function AdminProfile(props) {
  const [details, setDetails] = _react.default.useState({});
  _react.default.useEffect(() => {
    setDetails(props.details);
  }, [props]);
  console.log(props);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement("section", {
    className: "admin-profile",
    style: {
      marginTop: "3rem",
      color: 'black',
      padding: '20px',
      backgroundColor: 'white',
      borderRadius: '10px',
      boxShadow: '5px 5px 10px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif'
    }
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "heading",
    style: {
      marginBottom: '20px'
    }
  }, "Profile Details"), /*#__PURE__*/_react.default.createElement("div", {
    className: "details",
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: '20px'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "admin",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '10px'
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: details && details.dp,
    className: "image",
    alt: "",
    style: {
      border: '2px solid black',
      width: '100px',
      height: '100px',
      borderRadius: '50%'
    }
  }), /*#__PURE__*/_react.default.createElement("h1", null, details && details.name), /*#__PURE__*/_react.default.createElement("span", {
    className: "adminId1",
    style: {
      fontSize: '20px'
    }
  }, "Super Admin ID: ", details && details.superAdminId), /*#__PURE__*/_react.default.createElement("p", {
    className: "mobile1",
    style: {
      fontSize: '20px'
    }
  }, "Mobile: ", details && details.mobile), /*#__PURE__*/_react.default.createElement("p", {
    className: "email1",
    style: {
      fontSize: '20px'
    }
  }, "Email: ", details && details.email), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/changePassword",
    className: "profile-btn"
  }, "Change password")))));
}
var _default = exports.default = AdminProfile;