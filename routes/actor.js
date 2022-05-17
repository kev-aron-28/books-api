const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();

const { createActor } = require("../controllers/actor");

router.post('/', [
    check('first_name').isString().notEmpty(),
    check('last_name').isString().notEmpty(),
    check('last_update').isDate()
], createActor)

module.exports = router;