const { DataTypes } = require('sequelize');
const sequelize = require("../database/connection");

const Book = sequelize.define('book', {
  book_id: {
    type: DataTypes.STRING,
    primaryKey: true,
    unique: true
  },
  title: {
    type: DataTypes.STRING,
    unique: true
  },
  number_pages: {
    type: DataTypes.INTEGER,
  },
  release_date: {
    type: DataTypes.STRING,
  },
  editorial: {
    type: DataTypes.STRING,
  },
  lenguage: {
	type: DataTypes.STRING,
  },
  image: {
	type: DataTypes.STRING,
  },
  format: {
    type: DataTypes.STRING,
  }
});

module.exports = Book;
