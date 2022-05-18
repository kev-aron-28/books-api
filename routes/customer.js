const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();

const { createCostumer } = require("../controllers/costumer");
const { emailExists } = require("../helpers");
const { validateFields } = require('../middlewares');

router.post(
    '/',
    [ 
        check('email').isString().notEmpty(),
        check('email').custom(emailExists),
        check('first_name').isString().notEmpty(),
        check('last_name').isString().notEmpty(),
        check('password').isLength({
            min: 6,
        }),
        check('adress').isString().notEmpty(),
        check('phone').isMobilePhone(),
        check('age').notEmpty(),
        validateFields
    ],
    createCostumer
  );
module.exports = router;