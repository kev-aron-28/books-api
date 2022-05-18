const jwt = require("jsonwebtoken");

const generateJWT = (id = '') => {
    return new Promise((resolve, reject) => {
        const payload = { id };
        jwt.sign(
            payload,
            process.env.SECRETKEY_CUSTOMER,
            {
                expiresIn: '7d'
            },
            (err, token) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(token);
                }
            }
        );
    });
}

module.exports = {
    generateJWT
};