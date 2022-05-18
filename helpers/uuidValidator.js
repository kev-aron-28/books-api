const { validate, version } = require("uuid")

const validateIdV4 = (uuid = '') => {
    if(!validate(uuid) || !version(uuid) === 4) {
        throw new Error('Should be a valid id');
    }
}

module.exports = {
    validateIdV4
}