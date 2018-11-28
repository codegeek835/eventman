import * as express from "express";
import config from "../config/config";
import * as bodyParser from "body-parser";

import { generate_barcodes } from '../controllers/barcode_controller';
const router = express.Router();


// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true });

router.get(`${config.API_VERSION}/barcode/gernerate_barcodes/:patient_id`, jsonParser, generate_barcodes);

export default router;