import * as express from "express";
import config from "../config/config";
import * as bodyParser from "body-parser";
import {
    user_permissions,
    user_forgot_password_token_validation,
    reset_password,
    get_user_data,
    company_search,
    register_ip,
    company_lookup,
    update_user_data,
    update_user_password,
    get_r2_url,
    have_default_access
} from '../controllers/user_controller';

const router = express.Router();

// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true });

router.get(`${config.API_VERSION}/user/permissions`, urlencodedParser, user_permissions);
router.post(`${config.API_VERSION}/user_forgot_password_token_validation`, urlencodedParser, user_forgot_password_token_validation);
router.get(`${config.API_VERSION}/company/quick_search`, jsonParser, company_search);
router.post(`${config.API_VERSION}/reset_password`, jsonParser, reset_password);
// User data - Manage My Account
router.get(`${config.API_VERSION}/user/:id`, get_user_data);
//validated IP Register  request
router.post(`${config.API_VERSION}/register_ip`, urlencodedParser, register_ip);
router.get(`${config.API_VERSION}/company/lookup`, jsonParser, company_lookup);
//Update User data - Manage My Account
router.post(`${config.API_VERSION}/user/:id`, jsonParser, update_user_data);
//Update User Password - Manage My Account
router.post(`${config.API_VERSION}/change_password`, jsonParser, update_user_password);
router.post(`${config.API_VERSION}/r2_url`, jsonParser, get_r2_url);
//check if have access for change company
router.get(`${config.API_VERSION}/user/:id/has_default_company_permission`, have_default_access);

export default router;