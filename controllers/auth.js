const bcryptjs = require('bcryptjs');

const Customer = require('../models/customer');
const { generateJWT } = require("../helpers");

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const customer = await Customer.findOne({ where: { email } });
        if(!customer) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        if(!customer.active) {
            return res.status(400).json({
                msg: 'This account does not exist'
            });
        }

        const isValidPassword = bcryptjs.compareSync(password, customer.password);
        if(!isValidPassword) {
            return res.status(400).json({
                msg: 'Wrong password or email'
            })
        }

        const token = await generateJWT(customer.customer_id);

        return res.json({ 
            token,
            customer
        });
    } catch (error) {
        return res.status(400).json({
            msg: 'Oops! something went wrong'
        })
    }
}


module.exports = {
    login
}