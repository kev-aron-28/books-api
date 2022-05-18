const bcryptjs = require("bcryptjs");
const Customer = require("../models/costumer")
const { v4: uuidv4 } = require('uuid');

const createCostumer = async (req, res) => {
    const { email, password, first_name, last_name, adress, phone, age} = req.body;
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
       await newUser.save()
        res.json({
            id
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            msg: 'Error creating costumer'
        });
    }

}

module.exports = {
    createCostumer
}