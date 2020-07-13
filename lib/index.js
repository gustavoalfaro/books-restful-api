"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _v = _interopRequireDefault(require("./api/v1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use((0, _cors["default"])());

_dotenv["default"].config();

(0, _v["default"])(app);
var PORT = process.env.PORT;
app.listen(PORT, function () {
  console.log("Running on port ".concat(PORT)); // eslint-disable-line no-console
});