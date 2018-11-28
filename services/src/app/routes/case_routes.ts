import * as express from "express";
import config from "../config/config";
import * as bodyParser from "body-parser";

import {
    add_case
} from "../controllers/case_controller";

const router = express.Router();

// create application/json parser
var jsonParser = bodyParser.json();
//Add Case information
router.post(`${config.API_VERSION}/patients/:patient_id/cases/add`, jsonParser, add_case);
export default router;