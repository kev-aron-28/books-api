const Custumer = require('../models/customer');
const emailExists = async (email) => {
    console.log(email);
    const emailExist = await Custumer.findOne({ where: { email }});
    if(emailExist) {
        throw new Error('Email already exists');
    }
}

module.exports = {
    emailExists
}