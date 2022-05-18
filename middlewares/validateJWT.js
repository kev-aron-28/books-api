const jwt = require("jsonwebtoken");
const Customer = require("../models/customer");

const validateJWT = async (req, res, next) => {
    const token = req.header('x-token');
    if(!token) {
        return res.status(401).json({ message: 'There should be access token' });
    }

    try {
        const { id } = jwt.verify(token, process.env.SECRETKEY_CUSTOMER);
        const user = Customer.findOne({ where: { customer_id: id, active: true } });
        if(!user) {
            return res.status(404).json({ message: 'Could not find user' });
        }        
        req.user = user;
        next()
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: 'Oops something went wrong' });
    }
}

module.exports = {
    validateJWT
}