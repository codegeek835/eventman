"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const config_1 = require("../config/config");
const bodyParser = require("body-parser");
const barcode_controller_1 = require("../controllers/barcode_controller");
const router = express.Router();
// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true });
router.get(`${config_1.default.API_VERSION}/barcode/gernerate_barcodes/:patient_id`, jsonParser, barcode_controller_1.generate_barcodes);
exports.default = router;
//# sourceMappingURL=barcode_routes.js.map