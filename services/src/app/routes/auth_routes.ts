import * as express from "express";
import config from "../config/config";
import * as bodyParser from "body-parser";

import {
    authentication,
    logout,
    forgot_password,
    refresh_token,
    send_ip_enabled_email
} from "../controllers/auth_controller";

const router = express.Router();

// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true });


router.post(`${config.API_VERSION}/authentication`, urlencodedParser, authentication);
router.post(`${config.API_VERSION}/forgot_password`, urlencodedParser, forgot_password);
router.post(`${config.API_VERSION}/logout`, urlencodedParser, logout);
// Refresh Token
router.post(`${config.API_VERSION}/refresh_token`, urlencodedParser, refresh_token);
//re-send email for ip enabling
router.post(`${config.API_VERSION}/send_ip_enabled_email`, urlencodedParser, send_ip_enabled_email);

export default router;