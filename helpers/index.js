const dbValidators = require('./dbValidators');
const jwt = require('./jwt');
const uuidValidator = require('./uuidValidator');
module.exports = {
    ...dbValidators,
    ...jwt,
    ...uuidValidator
}