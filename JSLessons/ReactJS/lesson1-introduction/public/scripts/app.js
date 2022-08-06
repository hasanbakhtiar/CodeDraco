"use strict";

var list = /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", {
  className: "btn btn-success"
}, "pen"), /*#__PURE__*/React.createElement("li", null, "book"), /*#__PURE__*/React.createElement("li", null, "table"));
var temp = /*#__PURE__*/React.createElement("div", {
  style: {
    "color": "red"
  }
}, list, list, list, list, list);
ReactDOM.render(temp, document.querySelector("#root"));
