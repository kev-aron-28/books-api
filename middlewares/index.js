const validateFields = require('./checkFields');
const validateJWT = require('./validateJWT');

module.exports = {
    ...validateFields,
    ...validateJWT
};