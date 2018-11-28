"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const config_1 = require("../config/config");
const index_controller_1 = require("../controllers/index_controller");
const error_controller_1 = require("../controllers/error_controller");
const location_controller_1 = require("../controllers/location_controller");
const bodyParser = require("body-parser");
const router = express.Router();
// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true });
router.get("/", index_controller_1.get);
router.post(`${config_1.default.API_VERSION}/log_error`, jsonParser, error_controller_1.log_error);
router.get(`${config_1.default.API_VERSION}/locations/place_of_service`, jsonParser, location_controller_1.placeSearch);
router.get(`${config_1.default.API_VERSION}/provider_config/billing_provider/:locationId`, jsonParser, location_controller_1.providerSearch);
router.get(`${config_1.default.API_VERSION}/locations/quick_search_place_of_service`, jsonParser, location_controller_1.quick_search_location);
router.get(`${config_1.default.API_VERSION}/provider_config/quick_search_billing_and_treating_provider/:locationId`, jsonParser, location_controller_1.quick_search_provider);
exports.default = router;
//# sourceMappingURL=location_routes.js.map