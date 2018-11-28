"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const config_1 = require("../config/config");
const index_controller_1 = require("../controllers/index_controller");
const error_controller_1 = require("../controllers/error_controller");
const payment_controller_1 = require("../controllers/payment_controller");
const bodyParser = require("body-parser");
const router = express.Router();
// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true });
router.get("/", index_controller_1.get);
router.post(`${config_1.default.API_VERSION}/log_error`, jsonParser, error_controller_1.log_error);
router.post(`${config_1.default.API_VERSION}/payments/add_update_credits`, jsonParser, payment_controller_1.savePaymentDetails);
router.get(`${config_1.default.API_VERSION}/insurance/:pateintId`, jsonParser, payment_controller_1.getInsurance);
exports.default = router;
//# sourceMappingURL=payment_routes.js.map