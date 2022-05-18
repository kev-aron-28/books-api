const bcryptjs = require("bcryptjs");
const Customer = require("../models/customer")
const { v4: uuidv4 } = require('uuid');
const { generateJWT } = require("../helpers");

const createCustomer = async (req, res) => {
    const { email, password, first_name, last_name, adress, phone, age } = req.body;
    const id = uuidv4();
    const newUser = Customer.build({
        customer_id: id,
        email,
        first_name,
        last_name,
        active: true,
        adress,
        phone,
        age,
    })
    const salt = bcryptjs.genSaltSync();
    newUser.password = bcryptjs.hashSync(password, salt);

    try {
        const token = await generateJWT(id);
        await newUser.save()
        return res.json({
            id,
            token
        })
    } catch (error) {
        return res.status(400).json({
            msg: 'Error creating costumer'
        });
    }

}

const updateCustomer = async (req, res) => {
    res.json({ 
        msg: 'Updating'
    })
}

module.exports = {
    createCustomer,
    updateCustomer
}