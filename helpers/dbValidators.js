const Custumer = require('../models/costumer');
const emailExists = async (email) => {
    const emailExist = await Custumer.findOne({ email });
    if(emailExist) {
        throw new Error('Email already exists');
    }
}

module.exports = {
    emailExists
}