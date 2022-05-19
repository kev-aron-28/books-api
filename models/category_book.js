const { DataTypes } = require('sequelize');
const sequelize = require("../database/connection");

const Category_Book = sequelize.define('category_book', {
  category_book_id: {
    type: DataTypes.STRING,
    primaryKey: true,
    unique: true
  },
  book_id: {
      type: DataTypes.STRING,
      foreignKey: true
  }
});


module.exports = Category_Book;
