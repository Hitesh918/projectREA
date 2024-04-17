"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _firebase = require("../firebase");
var _auth = require("firebase/auth");
var _reactRouterDom = require("react-router-dom");
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function TeacherSideBar(props) {
  const location = (0, _reactRouterDom.useLocation)();
  const navigate = (0, _reactRouterDom.useNavigate)();
  const [profilePic, setProfilePic] = (0, _react.useState)("images/pic-1.jpg");
  const fileInput = (0, _react.useRef)(null); //reference to file input

  function handleLogOut(e) {
    e.preventDefault();
    (0, _auth.signOut)(_firebase.auth).then(() => {
      setTimeout(() => {
        navigate("/login", {
          replace: true
        });
      }, 1000);
    }).catch(e => {
      alert(e);
    });
  }
  function handleProfilePicChange(e) {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = e => {
        const base64Image = e.target.result;
        setProfilePic(base64Image);
        _axios.default.post("http://localhost:5000/uploadDP", {
          image: base64Image,
          role: props.role,
          id: props.id
        }).then(res => {
          if (res.data === "Resource added") {
            alert("DP updated successfully");
          } else {
            alert("Failed to upload");
          }
          console.log(res);
        }).catch(error => {
          console.log(error);
          alert("Failed to upload profile picture . Please try again later.");
        });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }
  _react.default.useEffect(() => {
    setProfilePic(props.dp);
  }, [props.dp]);

  // console.log("props in sidebar" , props)

  if (location.pathname === "/" || location.pathname === "/login" || location.pathname === "/changePassword") {
    return null;
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "side-bar"
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "close-btn"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-times"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "profile"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: profilePic,
    className: "image",
    alt: "",
    title: "Click here to change profile picture.",
    onMouseOver: () => document.getElementById('profilePicInput').style.display = 'block',
    onMouseOut: () => document.getElementById('profilePicInput').style.display = 'none',
    onClick: () => fileInput.current.click()
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "file",
    id: "profilePicInput",
    style: {
      display: 'none'
    },
    onChange: handleProfilePicChange,
    ref: fileInput
  }), /*#__PURE__*/_react.default.createElement("h3", {
    className: "name"
  }, props.name), /*#__PURE__*/_react.default.createElement("p", {
    className: "role"
  }, "Teacher"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/teacherprofile",
    className: "btn"
  }, "View Profile")), /*#__PURE__*/_react.default.createElement("nav", {
    className: "navbar"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/teacher"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-home"
  }), /*#__PURE__*/_react.default.createElement("span", null, "Home")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/logout",
    onClick: handleLogOut
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-right-from-bracket"
  }), /*#__PURE__*/_react.default.createElement("span", null, "Log Out"))));
}
var _default = exports.default = TeacherSideBar;