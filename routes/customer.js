const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();

const { createCustomer, updateCustomer } = require("../controllers/customer");
const { emailExists } = require("../helpers");
const { validateFields, validateJWT } = require('../middlewares');

router.post('/',
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
    createCustomer
);

router.put('/:id',
    [
        validateJWT,
        check('id').not().isEmpty(),
        check('id').isUUID(4),
        validateFields
    ],
    updateCustomer
);

module.exports = router;