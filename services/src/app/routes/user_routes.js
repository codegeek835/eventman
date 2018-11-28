"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const config_1 = require("../config/config");
const bodyParser = require("body-parser");
const user_controller_1 = require("../controllers/user_controller");
const router = express.Router();
// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true });
router.get(`${config_1.default.API_VERSION}/user/permissions`, urlencodedParser, user_controller_1.user_permissions);
router.post(`${config_1.default.API_VERSION}/user_forgot_password_token_validation`, urlencodedParser, user_controller_1.user_forgot_password_token_validation);
router.get(`${config_1.default.API_VERSION}/company/quick_search`, jsonParser, user_controller_1.company_search);
router.post(`${config_1.default.API_VERSION}/reset_password`, jsonParser, user_controller_1.reset_password);
// User data - Manage My Account
router.get(`${config_1.default.API_VERSION}/user/:id`, user_controller_1.get_user_data);
//validated IP Register  request
router.post(`${config_1.default.API_VERSION}/register_ip`, urlencodedParser, user_controller_1.register_ip);
router.get(`${config_1.default.API_VERSION}/company/lookup`, jsonParser, user_controller_1.company_lookup);
//Update User data - Manage My Account
router.post(`${config_1.default.API_VERSION}/user/:id`, jsonParser, user_controller_1.update_user_data);
//Update User Password - Manage My Account
router.post(`${config_1.default.API_VERSION}/change_password`, jsonParser, user_controller_1.update_user_password);
router.post(`${config_1.default.API_VERSION}/r2_url`, jsonParser, user_controller_1.get_r2_url);
//check if have access for change company
router.get(`${config_1.default.API_VERSION}/user/:id/has_default_company_permission`, user_controller_1.have_default_access);
exports.default = router;
//# sourceMappingURL=user_routes.js.map