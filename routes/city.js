const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();

const { createCity } = require("../controllers/city");
const { isDataBaseId } = require('../helpers/db_validators');

router.post('/', [
    check('city').isString().notEmpty(),
    check('last_update').isDate(),
    check('country_id').custom(isDataBaseId),
], createCity)

module.exports = router;