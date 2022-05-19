const { DataTypes } = require('sequelize');
const sequelize = require("../database/connection");

const Customer = sequelize.define('customer', {
  customer_id: {
    type: DataTypes.STRING,
    primaryKey: true,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  first_name: {
    type: DataTypes.STRING,
  },
  last_name: {
    type: DataTypes.STRING,
  },
  active: {
    type: DataTypes.BOOLEAN,
  },
  adress: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  phone: {
	type: DataTypes.STRING,
  },
  age: {
	type: DataTypes.INTEGER,
  },
});

Customer.prototype.toJSON = function () {
    var values = Object.assign({}, this.get());
  
    delete values.password;
    return values;
}

module.exports = Customer;
