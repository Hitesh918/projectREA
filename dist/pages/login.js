"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _auth = require("firebase/auth");
var _firebase = require("../firebase");
var _reactRouterDom = require("react-router-dom");
var _Loader = _interopRequireDefault(require("../components/Loader"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function Login() {
  const firebase_auth = _firebase.auth;
  const navigate = (0, _reactRouterDom.useNavigate)();
  const [loading, setLoading] = (0, _react.useState)(true);
  const [signInDetails, setSignInDetails] = _react.default.useState({
    email: "",
    password: ""
  });
  (0, _react.useEffect)(() => {
    (0, _auth.onAuthStateChanged)(_firebase.auth, user => {
      setTimeout(() => {
        setLoading(false);
        if (user) {
          console.log(user.email.substring(4, 7));
          if (user.email.substring(4, 8) === "sudo") {
            navigate("/Admin", {
              replace: true
            });
          } else if (user.email.substring(4, 7) === "adm") {
            navigate("/Teacher", {
              replace: true
            });
          } else if (user.email.substring(4, 7) === "stu") {
            navigate("/Student", {
              replace: true
            });
          } else {
            navigate("/login", {
              replace: true
            });
          }
        } else {
          navigate("/LogIn", {
            replace: true
          });
        }
      }, 1000);
    });
  });
  function handleSignInChange(e) {
    const {
      name,
      value
    } = e.target;
    e.preventDefault();
    setSignInDetails(prev => {
      return {
        ...prev,
        [name]: value
      };
    });
  }
  function handleSignIn(e) {
    e.preventDefault();
    setLoading(true);
    (0, _auth.signInWithEmailAndPassword)(_firebase.auth, signInDetails.email + "@gmail.com", signInDetails.password).then(() => {
      // console.log(signInDetails.email.substring(4, 8))
      setTimeout(() => {
        if (signInDetails.email.substring(4, 8) === "sudo") {
          navigate("/SuperAdmin", {
            replace: true
          });
        } else if (signInDetails.email.substring(4, 7) === "adm") {
          navigate("/Admin", {
            replace: true
          });
        } else if (signInDetails.email.substring(4, 7) === "stu") {
          navigate("/Student", {
            replace: true
          });
        } else {
          navigate("/login", {
            replace: true
          });
        }
      }, 1000);
    }).catch(error => {
      alert(error.message);
      setLoading(false);
    });
  }
  return /*#__PURE__*/_react.default.createElement("div", null, loading ? /*#__PURE__*/_react.default.createElement(_Loader.default, null) : /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: "relative",
      right: "13rem"
    }
  }, /*#__PURE__*/_react.default.createElement("section", {
    className: "form-container"
  }, /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement("h3", null, "login "), /*#__PURE__*/_react.default.createElement("p", null, "Username ", /*#__PURE__*/_react.default.createElement("span", null, "*")), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    name: "email",
    onChange: handleSignInChange,
    placeholder: "Enter your Username",
    required: true,
    maxLength: "50",
    className: "box"
  }), /*#__PURE__*/_react.default.createElement("p", null, "Password ", /*#__PURE__*/_react.default.createElement("span", null, "*")), /*#__PURE__*/_react.default.createElement("input", {
    type: "password",
    name: "password",
    onChange: handleSignInChange,
    placeholder: "Enter your Password",
    required: true,
    maxLength: "20",
    className: "box"
  }), /*#__PURE__*/_react.default.createElement("button", {
    onClick: handleSignIn,
    className: "btn"
  }, "Log In")))));
}
var _default = exports.default = Login;