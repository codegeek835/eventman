"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const config_1 = require("../config/config");
const master_controller_1 = require("../controllers/master_controller");
const bodyParser = require("body-parser");
const router = express.Router();
// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true });
//get all msater Data
router.get(`${config_1.default.API_VERSION}/master/get_master_data/:type`, jsonParser, master_controller_1.get_master_data);
//get all msater Data by type
router.get(`${config_1.default.API_VERSION}/master/data_by_type/:type`, jsonParser, master_controller_1.get_master_data_by_type);
//get get_Serach_control_data
router.get(`${config_1.default.API_VERSION}/master/get_Serach_control_data/:control_id`, jsonParser, master_controller_1.get_Serach_control_data);
exports.default = router;
//# sourceMappingURL=master_routes.js.map