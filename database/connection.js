const { Sequelize } = require('sequelize');

const opts = {
    define: {
        //prevent sequelize from pluralizing table names
        freezeTableName: true
    }
}


const db = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASS, {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_POR,
    dialect: 'postgres',
    define: {
        freezeTableName: true,
        timestamps: false,
    },
    logging: false
  })

module.exports = db;