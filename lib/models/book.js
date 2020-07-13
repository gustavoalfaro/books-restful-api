"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var BookModel = function BookModel(sequelize, DataTypes) {
  var Book = sequelize.define('Book', {
    name: DataTypes.STRING
  }, {}); // Book.associate = function(models) {
  //   // associations can be defined here
  // };

  return Book;
};

var _default = BookModel;
exports["default"] = _default;