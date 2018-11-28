"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const config_1 = require("../config/config");
const index_controller_1 = require("../controllers/index_controller");
const error_controller_1 = require("../controllers/error_controller");
const subscriber_controller_1 = require("../controllers/subscriber_controller");
const bodyParser = require("body-parser");
const router = express.Router();
// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true });
router.get("/", index_controller_1.get);
router.post(`${config_1.default.API_VERSION}/log_error`, jsonParser, error_controller_1.log_error);
router.get(`${config_1.default.API_VERSION}/subscriber/doctors_orders_visit`, urlencodedParser, subscriber_controller_1.doctors_orders_visit);
exports.default = router;
//# sourceMappingURL=index.js.map