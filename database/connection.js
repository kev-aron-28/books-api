const { Sequelize } = require('sequelize');

const db = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASS, {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_POR,
    dialect: 'postgres',
    logging: false
  })

module.exports = db;