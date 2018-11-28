import * as express from "express";

import config from "../config/config";
import { get } from "../controllers/index_controller";
import { log_error } from "../controllers/error_controller";
import { doctors_orders_visit } from '../controllers/subscriber_controller';

import * as bodyParser from "body-parser";

const router = express.Router();

// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true });

router.get("/", get);
router.post(`${config.API_VERSION}/log_error`, jsonParser, log_error);
router.get(`${config.API_VERSION}/subscriber/doctors_orders_visit`, urlencodedParser,  doctors_orders_visit);

export default router;
