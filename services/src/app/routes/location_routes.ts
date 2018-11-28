import * as express from "express";

import config from "../config/config";
import { get } from "../controllers/index_controller";
import { log_error } from "../controllers/error_controller";
import { placeSearch, providerSearch, quick_search_location ,quick_search_provider} from '../controllers/location_controller';

import * as bodyParser from "body-parser";

const router = express.Router();

// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true });

router.get("/", get);
router.post(`${config.API_VERSION}/log_error`, jsonParser, log_error);
router.get(`${config.API_VERSION}/locations/place_of_service`, jsonParser, placeSearch);
router.get(`${config.API_VERSION}/provider_config/billing_provider/:locationId`, jsonParser, providerSearch);
router.get(`${config.API_VERSION}/locations/quick_search_place_of_service`, jsonParser, quick_search_location);
router.get(`${config.API_VERSION}/provider_config/quick_search_billing_and_treating_provider/:locationId`, jsonParser, quick_search_provider);
export default router;
