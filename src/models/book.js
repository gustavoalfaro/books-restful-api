
const BookModel = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    name: DataTypes.STRING,
  }, {})

  // Book.associate = function(models) {
  //   // associations can be defined here
  // };
  return Book
}

export default BookModel
