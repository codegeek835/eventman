"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const config_1 = require("../config/config");
const bodyParser = require("body-parser");
const auth_controller_1 = require("../controllers/auth_controller");
const router = express.Router();
// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true });
router.post(`${config_1.default.API_VERSION}/authentication`, urlencodedParser, auth_controller_1.authentication);
router.post(`${config_1.default.API_VERSION}/forgot_password`, urlencodedParser, auth_controller_1.forgot_password);
router.post(`${config_1.default.API_VERSION}/logout`, urlencodedParser, auth_controller_1.logout);
// Refresh Token
router.post(`${config_1.default.API_VERSION}/refresh_token`, urlencodedParser, auth_controller_1.refresh_token);
//re-send email for ip enabling
router.post(`${config_1.default.API_VERSION}/send_ip_enabled_email`, urlencodedParser, auth_controller_1.send_ip_enabled_email);
exports.default = router;
//# sourceMappingURL=auth_routes.js.map