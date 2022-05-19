const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();

const { validateFields } = require('../middlewares');
const { login } = require("../controllers/auth");

router.post(
    '/login',
    [ 
        check('email').isString().notEmpty(),
        check('password').isString().notEmpty(),
        validateFields
    ],
    login
  );
module.exports = router;