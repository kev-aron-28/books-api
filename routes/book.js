const { Router } = require("express");
const { check } = require("express-validator");
const { createBook } = require("../controllers/book");
const router = Router();

const { validateFields } = require('../middlewares');

router.post('/',
    [ 
        check('title').isString().notEmpty(),
        check('number_pages').isDecimal().notEmpty(),
        check('release_date').isString().notEmpty(),
        check('editorial').isString().notEmpty(),
        check('lenguage').isString().notEmpty(),
        validateFields
    ],
    createBook
);

module.exports = router;