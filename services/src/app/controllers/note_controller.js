"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const config_1 = require("../config/config");
// Output reports for medical record. 
function get_medical_output_reports(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/patients/${req.params.patient_id}/notes?patientId=${req.params.patient_id}`,
        method: "GET",
        'headers': {
            'Authorization': req.headers["authorization"]
        },
        json: true
    }, function (error, response, body) {
        res.status(response.statusCode).send(body);
    });
}
exports.get_medical_output_reports = get_medical_output_reports;
// Scanned documents for medical record.
function get_medical_scanned_documents(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/patients/${req.params.patient_id}/notes/scanned_document?patientId=${req.params.patient_id}`,
        method: "GET",
        'headers': {
            'Authorization': req.headers["authorization"]
        },
        json: true
    }, function (error, response, body) {
        res.status(response.statusCode).send(body);
    });
}
exports.get_medical_scanned_documents = get_medical_scanned_documents;
// print medical record reports.
function print_patient_output_report(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/patients/${req.params.patient_id}/notes/print_patient_output_report`,
        method: "GET",
        encoding: null,
        'headers': {
            'Authorization': req.headers["authorization"],
            'Silversurfer': req.headers["silversurfer"]
        },
    }, function (error, response, body) {
        res.status(response.statusCode).send(body);
    });
}
exports.print_patient_output_report = print_patient_output_report;
//  print medical record Scanned Document.
function print_patient_scanned_document(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/patients/${req.params.patient_id}/notes/print_scanned_documents`,
        method: "POST",
        'headers': {
            'Authorization': req.headers["authorization"],
        },
        body: req.body,
        json: true
    }, function (error, response, body) {
        res.status(response.statusCode).send(body);
    });
}
exports.print_patient_scanned_document = print_patient_scanned_document;
// get PDF by guid
function get_PDF_by_guid(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/patients/${req.params.patient_id}/notes/open_pdf_by_guid/${req.query.key_guid}`,
        method: "GET",
        encoding: null,
        'headers': {
            'Authorization': req.headers["authorization"]
        },
    }, function (error, response, body) {
        res.status(response.statusCode).send(body);
    });
}
exports.get_PDF_by_guid = get_PDF_by_guid;
// open_scanned_document
function open_scanned_document(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/patients/${req.params.patient_id}/notes/open_scanned_document/${req.params.image_index_id}`,
        method: "GET",
        encoding: null,
        'headers': {
            'Authorization': req.headers["authorization"]
        },
    }, function (error, response, body) {
        res.status(response.statusCode).send(body);
    });
}
exports.open_scanned_document = open_scanned_document;
//# sourceMappingURL=note_controller.js.map