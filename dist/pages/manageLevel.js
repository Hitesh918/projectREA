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
function ManageLevel(props) {
  const [searchParams] = (0, _reactRouterDom.useSearchParams)();
  const dataString = searchParams.get('data');
  const data = JSON.parse(decodeURIComponent(dataString));
  const [students, setStudents] = _react.default.useState([]);
  const [choosenBatch, setChoosenBatch] = _react.default.useState(-1);
  _react.default.useEffect(() => {
    async function getCourseDetails() {
      const res = await _axios.default.get("http://localhost:5000/getStudentList", {
        params: {
          courseId: data.id,
          adminId: data.adminId,
          batch: data.batch
        }
      });
      setStudents(res.data);
    }
    getCourseDetails();
  }, [data.id, data.batch, data.adminId]);

  // async function handleChange(e) {
  //     setChoosenBatch(e.target.value)
  //     var confirmed = window.confirm("Are you sure you want to put thhis student into new batch?");
  //     if (confirmed) {
  //         try {
  //             const res = await axios.post("http://localhost:5000/changeBatch", {}, {
  //                 params: {
  //                     studentId: e.target.value,
  //                     courseId: data.id,
  //                     batch: e.target.value
  //                 }
  //             });
  //             console.log(res.data)
  //             // if(res.data === "success"){
  //             //     window.location.reload()
  //             // }
  //         }
  //         catch (error) {
  //             console.error('An error occurred:', error);
  //         }
  //     }
  // }
  async function handleChange(studentId, index, newValue) {
    // Here you have access to studentId, index, and the new value (newValue)
    // You can perform any necessary logic here
    console.log("Student ID:", studentId);
    console.log("New Value:", newValue);
    var confirmed = window.confirm("Are you sure you want to put this student into new batch?");
    if (confirmed) {
      try {
        const res = await _axios.default.post("http://localhost:5000/changeBatch", {}, {
          params: {
            studentId: studentId,
            courseId: data.id,
            batch: newValue
          }
        });
        console.log(res.data);
        // if(res.data === "success"){
        //     window.location.reload()
        // }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    }
  }
  async function startGoogleMeetCall() {
    try {
      const resp = await _axios.default.get("http://localhost:4000/api/createMeeting");
      console.log(resp.data);
      await _axios.default.post("http://localhost:5000/updateClassLink", {}, {
        params: {
          adminId: data.adminId,
          batch: data.batch,
          courseId: data.id,
          classLink: resp.data.meetingLink
        }
      });
      window.open(resp.data.meetingLink, "_blank");
      console.log("updated class link");
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  // console.log(resources)
  console.log(data);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement("section", {
    className: "playlist-details"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "heading"
  }, "Batch ", data.batch), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "meetclass"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "title"
  }, "Start Class "), /*#__PURE__*/_react.default.createElement("p", {
    className: "tutor"
  }, "Begin Your Classes"), /*#__PURE__*/_react.default.createElement("button", {
    id: "startClassBtn",
    onClick: startGoogleMeetCall
  }, "Start Class"))), /*#__PURE__*/_react.default.createElement("br", null), " ", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("h1", {
    className: "heading"
  }, "Students"), /*#__PURE__*/_react.default.createElement("div", {
    className: "container",
    style: {
      minWidth: "80%"
    }
  }, /*#__PURE__*/_react.default.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '20px'
    }
  }, /*#__PURE__*/_react.default.createElement("tr", {
    style: {
      backgroundColor: '#8E44AD'
    }
  }, /*#__PURE__*/_react.default.createElement("th", {
    style: {
      padding: '10px',
      border: '1px solid #e8e6e6'
    }
  }, "Student Id"), /*#__PURE__*/_react.default.createElement("th", {
    style: {
      padding: '10px',
      border: '1px solid #e8e6e6'
    }
  }, "Full Name"), /*#__PURE__*/_react.default.createElement("th", {
    style: {
      padding: '10px',
      border: '1px solid #ddd'
    }
  }, "Phone Number"), /*#__PURE__*/_react.default.createElement("th", {
    style: {
      padding: '10px',
      border: '1px solid #ddd'
    }
  }, "Actions")), students.map((student, index) => {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("td", {
      style: {
        padding: '10px',
        border: '1px solid #ddd',
        color: 'black'
      }
    }, student.studentId), /*#__PURE__*/_react.default.createElement("td", {
      style: {
        padding: '10px',
        border: '1px solid #ddd',
        color: 'black'
      }
    }, student.name), /*#__PURE__*/_react.default.createElement("td", {
      style: {
        padding: '10px',
        border: '1px solid #ddd',
        color: 'black'
      }
    }, student.mobile), /*#__PURE__*/_react.default.createElement("td", {
      style: {
        padding: '10px',
        border: '1px solid #ddd',
        color: 'black',
        textAlign: "center"
      }
    }, /*#__PURE__*/_react.default.createElement("select", {
      onChange: e => handleChange(student.studentId, index, e.target.value),
      style: {
        marginRight: "1rem"
      },
      className: "add-btn"
    }, /*#__PURE__*/_react.default.createElement("option", {
      value: "1"
    }, "Change Batch"), Array.from({
      length: data.numberOfBatches
    }, (_, i) => i + 1).map((data, index) => {
      return /*#__PURE__*/_react.default.createElement("option", {
        key: index,
        value: data
      }, data);
    })), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "/ViewStudent?data=".concat(encodeURIComponent(JSON.stringify({
        "id": student.studentId
      }))),
      className: "profile-btn"
    }, "View Profile")));
  })))));
}
var _default = exports.default = ManageLevel;