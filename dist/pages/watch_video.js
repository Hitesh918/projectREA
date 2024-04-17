"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function watch_video() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "side-bar"
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "close-btn"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-times"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "profile"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "images/pic-1.jpg",
    className: "image",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("h3", {
    className: "name"
  }, "shaikh anas"), /*#__PURE__*/_react.default.createElement("p", {
    className: "role"
  }, "studen"), /*#__PURE__*/_react.default.createElement("a", {
    href: "/profile",
    className: "btn"
  }, "view profile")), /*#__PURE__*/_react.default.createElement("nav", {
    className: "navbar"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "/"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-home"
  }), /*#__PURE__*/_react.default.createElement("span", null, "home")), /*#__PURE__*/_react.default.createElement("a", {
    href: "/about"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-question"
  }), /*#__PURE__*/_react.default.createElement("span", null, "about")), /*#__PURE__*/_react.default.createElement("a", {
    href: "/courses"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-graduation-cap"
  }), /*#__PURE__*/_react.default.createElement("span", null, "courses")), /*#__PURE__*/_react.default.createElement("a", {
    href: "/teachers"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-chalkboard-user"
  }), /*#__PURE__*/_react.default.createElement("span", null, "teachers")), /*#__PURE__*/_react.default.createElement("a", {
    href: "/contact"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-headset"
  }), /*#__PURE__*/_react.default.createElement("span", null, "contact us")))), /*#__PURE__*/_react.default.createElement("section", {
    className: "watch-video"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "video-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "video"
  }, /*#__PURE__*/_react.default.createElement("video", {
    src: "images/vid-1.mp4",
    controls: true,
    poster: "images/post-1-1.png",
    id: "video"
  })), /*#__PURE__*/_react.default.createElement("h3", {
    className: "title"
  }, "complete tutorial (part 01)"), /*#__PURE__*/_react.default.createElement("div", {
    className: "info"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "date"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-calendar"
  }), /*#__PURE__*/_react.default.createElement("span", null, "22-10-2022")), /*#__PURE__*/_react.default.createElement("p", {
    className: "date"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-heart"
  }), /*#__PURE__*/_react.default.createElement("span", null, "44 likes"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "tutor"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "images/pic-2.jpg",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", null, "john deo"), /*#__PURE__*/_react.default.createElement("span", null, "developer"))), /*#__PURE__*/_react.default.createElement("form", {
    action: "",
    method: "post",
    className: "flex"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "/playlist",
    className: "inline-btn"
  }, "view playlist"), /*#__PURE__*/_react.default.createElement("button", null, /*#__PURE__*/_react.default.createElement("i", {
    className: "far fa-heart"
  }), /*#__PURE__*/_react.default.createElement("span", null, "like"))), /*#__PURE__*/_react.default.createElement("p", {
    className: "description"
  }, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque labore ratione, hic exercitationem mollitia obcaecati culpa dolor placeat provident porro. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid iure autem non fugit sint. A, sequi rerum architecto dolor fugiat illo, iure velit nihil laboriosam cupiditate voluptatum facere cumque nemo!"))), /*#__PURE__*/_react.default.createElement("section", {
    className: "comments"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "heading"
  }, "5 comments"), /*#__PURE__*/_react.default.createElement("form", {
    action: "",
    className: "add-comment"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "add comments"), /*#__PURE__*/_react.default.createElement("textarea", {
    name: "comment_box",
    placeholder: "enter your comment",
    required: true,
    maxlength: "1000",
    cols: "30",
    rows: "10"
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "submit",
    value: "add comment",
    className: "inline-btn",
    name: "add_comment"
  })), /*#__PURE__*/_react.default.createElement("h1", {
    className: "heading"
  }, "user comments"), /*#__PURE__*/_react.default.createElement("div", {
    className: "box-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "user"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "images/pic-1.jpg",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", null, "shaikh anas"), /*#__PURE__*/_react.default.createElement("span", null, "22-10-2022"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "comment-box"
  }, "this is a comment from shaikh anas"), /*#__PURE__*/_react.default.createElement("form", {
    action: "",
    className: "flex-btn"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "submit",
    value: "edit comment",
    name: "edit_comment",
    className: "inline-option-btn"
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "submit",
    value: "delete comment",
    name: "delete_comment",
    className: "inline-delete-btn"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "user"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "images/pic-2.jpg",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", null, "john deo"), /*#__PURE__*/_react.default.createElement("span", null, "22-10-2022"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "comment-box"
  }, "awesome tutorial! keep going!")), /*#__PURE__*/_react.default.createElement("div", {
    className: "box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "user"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "images/pic-3.jpg",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", null, "john deo"), /*#__PURE__*/_react.default.createElement("span", null, "22-10-2022"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "comment-box"
  }, "amazing way of teaching! thank you so much!")), /*#__PURE__*/_react.default.createElement("div", {
    className: "box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "user"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "images/pic-4.jpg",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", null, "john deo"), /*#__PURE__*/_react.default.createElement("span", null, "22-10-2022"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "comment-box"
  }, "loved it, thanks for the tutorial!")), /*#__PURE__*/_react.default.createElement("div", {
    className: "box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "user"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "images/pic-5.jpg",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", null, "john deo"), /*#__PURE__*/_react.default.createElement("span", null, "22-10-2022"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "comment-box"
  }, "this is what I have been looking for! thank you so much!")), /*#__PURE__*/_react.default.createElement("div", {
    className: "box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "user"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "images/pic-2.jpg",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", null, "john deo"), /*#__PURE__*/_react.default.createElement("span", null, "22-10-2022"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "comment-box"
  }, "thanks for the tutorial! how to download source code file?")))));
}
var _default = exports.default = watch_video;