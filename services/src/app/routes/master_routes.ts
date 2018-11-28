import * as express from "express";

import config from "../config/config";
import {
    get_master_data,
    get_Serach_control_data,
    get_master_data_by_type
} from '../controllers/master_controller';

import * as bodyParser from "body-parser";

const router = express.Router();

// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true });

//get all msater Data
router.get(`${config.API_VERSION}/master/get_master_data/:type`, jsonParser, get_master_data);
//get all msater Data by type
router.get(`${config.API_VERSION}/master/data_by_type/:type`, jsonParser, get_master_data_by_type);
//get get_Serach_control_data
router.get(`${config.API_VERSION}/master/get_Serach_control_data/:control_id`, jsonParser, get_Serach_control_data);

export default router;
