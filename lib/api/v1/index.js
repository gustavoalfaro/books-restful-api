"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _books = _interopRequireDefault(require("./schema/books"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createV1(app) {
  var v1 = _express["default"].Router();

  (0, _books["default"])(v1);
  app.use('/api/v1', v1);
  app.use('/api/', v1);
}

var _default = createV1;
exports["default"] = _default;