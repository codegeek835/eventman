"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const config_1 = require("../config/config");
const bodyParser = require("body-parser");
const note_controller_1 = require("../controllers/note_controller");
const router = express.Router();
// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true });
// Get - Output reports for medical record.
router.get(`${config_1.default.API_VERSION}/patients/:patient_id/notes`, note_controller_1.get_medical_output_reports);
// Get - Scanned documents for medical record.
router.get(`${config_1.default.API_VERSION}/patients/:patient_id/notes/scanned_document`, note_controller_1.get_medical_scanned_documents);
// print medical record reports.
router.get(`${config_1.default.API_VERSION}/patients/:patient_id/notes/print_patient_output_report`, jsonParser, note_controller_1.print_patient_output_report);
// print medical record Scanned Document.
router.post(`${config_1.default.API_VERSION}/patients/:patient_id/notes/print_scanned_documents`, jsonParser, note_controller_1.print_patient_scanned_document);
// get PDF by guid
router.get(`${config_1.default.API_VERSION}/patients/:patient_id/notes/open_pdf_by_guid`, note_controller_1.get_PDF_by_guid);
//open_scanned_document
router.get(`${config_1.default.API_VERSION}/patients/:patient_id/notes/open_scanned_document/:image_index_id`, note_controller_1.open_scanned_document);
exports.default = router;
//# sourceMappingURL=note_routes.js.map