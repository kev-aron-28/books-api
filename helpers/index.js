const dbValidators = require('./dbValidators');
const jwt = require('./jwt');
const uuidValidator = require('./uuidValidator');
const cloudinary = require('./uploadCloudinary');

module.exports = {
    ...dbValidators,
    ...jwt,
    ...uuidValidator,
    ...cloudinary
}