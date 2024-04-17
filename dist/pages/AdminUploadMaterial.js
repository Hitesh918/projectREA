"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Header = _interopRequireDefault(require("../components/Header"));
var _AdminSideBar = _interopRequireDefault(require("../components/AdminSideBar"));
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function AdminUploadMaterial(props) {
  const [file, setFile] = (0, _react.useState)("");
  const [choosenCourse, setChoosenCourse] = (0, _react.useState)(null);
  const [numberOfLevels, setNumberOfLevels] = (0, _react.useState)(null);
  const convertBase64 = file => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = error => {
        reject(error);
      };
    });
  };

  // console.log("props", props)

  const upload = async () => {
    if (choosenCourse === null || document.getElementById("levels").value === "" || file === "") {
      alert("Please fill in the details");
      return;
    }
    const base64 = await convertBase64(file);
    _axios.default.post("http://localhost:5000/upload", {
      image: base64,
      courseName: choosenCourse,
      level: document.getElementById("levels").value
    }).then(res => {
      if (res.data === "Resource added") {
        setFile("");
        alert("Resource added");
      } else {
        alert("Failed to upload");
      }
      console.log(res);
    }).catch(e => {
      console.log(e);
    });
  };
  const handleChange = e => {
    setChoosenCourse(e.target.value);
    // console.log(choosenCourse)
    props.courses.map((course, index) => {
      if (course.courseName === e.target.value) {
        setNumberOfLevels(course.numberOfLevels);
      }
    });
  };
  console.log(props.courses);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement("section", {
    className: "home-grid"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "heading"
  }, "Upload Resources"), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginTop: "10rem",
      color: "black",
      height: "35rem"
    },
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Course"), /*#__PURE__*/_react.default.createElement("select", {
    onChange: handleChange,
    id: "courses",
    name: "courses",
    required: true
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "",
    disabled: true,
    selected: true
  }, "Select Course"), props && props.courses && props.courses.map((course, index) => /*#__PURE__*/_react.default.createElement("option", {
    value: course.courseName
  }, course.courseName)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Level"), /*#__PURE__*/_react.default.createElement("select", {
    id: "levels",
    name: "courses",
    required: true
  }, numberOfLevels && Array.from({
    length: numberOfLevels
  }, (_, i) => i + 1).map((level, index) => /*#__PURE__*/_react.default.createElement("option", {
    value: level
  }, level)))), /*#__PURE__*/_react.default.createElement("input", {
    style: {
      color: "black"
    },
    type: "file",
    onChange: e => {
      setFile(e.target.files[0]);
    }
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("button", {
    className: "inline-btn",
    style: {
      marginTop: "6rem"
    },
    onClick: upload
  }, "Upload"))));
}
var _default = exports.default = AdminUploadMaterial;