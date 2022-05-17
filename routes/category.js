const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();

const { createCategory } = require("../controllers/category");

router.post('/', [
    check('name').isString().notEmpty(),
    check('last_update').isDate()
], createCategory)

module.exports = router;