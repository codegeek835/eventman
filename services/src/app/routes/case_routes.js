"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const config_1 = require("../config/config");
const bodyParser = require("body-parser");
const case_controller_1 = require("../controllers/case_controller");
const router = express.Router();
// create application/json parser
var jsonParser = bodyParser.json();
//Add Case information
router.post(`${config_1.default.API_VERSION}/patients/:patient_id/cases/add`, jsonParser, case_controller_1.add_case);
exports.default = router;
//# sourceMappingURL=case_routes.js.map