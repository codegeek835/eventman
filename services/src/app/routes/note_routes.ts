import * as express from "express";
import config from "../config/config";
import * as bodyParser from "body-parser";

import {
    get_medical_output_reports,
    get_medical_scanned_documents,
    print_patient_output_report,
    print_patient_scanned_document,
    get_PDF_by_guid,
    open_scanned_document
} from "../controllers/note_controller";

const router = express.Router();

// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true });



// Get - Output reports for medical record.
router.get(`${config.API_VERSION}/patients/:patient_id/notes`, get_medical_output_reports);

// Get - Scanned documents for medical record.
router.get(`${config.API_VERSION}/patients/:patient_id/notes/scanned_document`, get_medical_scanned_documents);

// print medical record reports.
router.get(`${config.API_VERSION}/patients/:patient_id/notes/print_patient_output_report`, jsonParser, print_patient_output_report);

// print medical record Scanned Document.
router.post(`${config.API_VERSION}/patients/:patient_id/notes/print_scanned_documents`, jsonParser, print_patient_scanned_document);

// get PDF by guid
router.get(`${config.API_VERSION}/patients/:patient_id/notes/open_pdf_by_guid`, get_PDF_by_guid);
//open_scanned_document
router.get(`${config.API_VERSION}/patients/:patient_id/notes/open_scanned_document/:image_index_id`, open_scanned_document);

export default router;