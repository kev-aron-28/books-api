const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();

const { createCustomer } = require("../controllers/customer");
const { validateFields } = require('../middlewares');

router.post(
    '/login',
    [ 
        check('email').isString().notEmpty(),
        check('password').isLength({
            min: 6,
        }),
        validateFields
    ],
    createCustomer
  );
module.exports = router;