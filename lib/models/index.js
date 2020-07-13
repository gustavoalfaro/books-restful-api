"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Books = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _book = _interopRequireDefault(require("./book"));

var _config = _interopRequireDefault(require("../../config/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sequelize = new _sequelize["default"](_config["default"].database, _config["default"].username, _config["default"].password, _config["default"]);
sequelize.authenticate().then(function () {
  console.log('Database connection has been established successfully.'); // eslint-disable-line no-console
})["catch"](function (error) {
  console.log('Unable to connect to the database: ', error); // eslint-disable-line no-console
});
var Books = (0, _book["default"])(sequelize, _sequelize["default"]); // eslint-disable-next-line

exports.Books = Books;