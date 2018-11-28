import * as express from "express";

import config from "../config/config";
import { get } from "../controllers/index_controller";
import { log_error } from "../controllers/error_controller";
import { getInsurance, savePaymentDetails} from '../controllers/payment_controller';

import * as bodyParser from "body-parser";

const router = express.Router();

// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true });

router.get("/", get);
router.post(`${config.API_VERSION}/log_error`, jsonParser, log_error);
router.post(`${config.API_VERSION}/payments/add_update_credits`, jsonParser, savePaymentDetails);
router.get(`${config.API_VERSION}/insurance/:pateintId`, jsonParser, getInsurance);
export default router;
