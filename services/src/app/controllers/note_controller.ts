import * as express from "express";
import * as request from "request";
import config from "../config/config";


// Output reports for medical record. 
export function get_medical_output_reports(req: express.Request, res: express.Response) {
    request({
        uri: `${config.SERVICE_URL}/patients/${req.params.patient_id}/notes?patientId=${req.params.patient_id}`,
        method: "GET",
        'headers': {
            'Authorization': req.headers["authorization"]
        },
        json: true
    }, function (error, response, body) {
        res.status(response.statusCode).send(body);
    });
}

// Scanned documents for medical record.
export function get_medical_scanned_documents(req: express.Request, res: express.Response) {
    request({
        uri: `${config.SERVICE_URL}/patients/${req.params.patient_id}/notes/scanned_document?patientId=${req.params.patient_id}`,
        method: "GET",
        'headers': {
            'Authorization': req.headers["authorization"]
        },
        json: true
    }, function (error, response, body) {
        res.status(response.statusCode).send(body);
    });
}


// print medical record reports.
export function print_patient_output_report(req: express.Request, res: express.Response) {
    request({
        uri: `${config.SERVICE_URL}/patients/${req.params.patient_id}/notes/print_patient_output_report`,
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

//  print medical record Scanned Document.
export function print_patient_scanned_document(req: express.Request, res: express.Response) {
    request({
        uri: `${config.SERVICE_URL}/patients/${req.params.patient_id}/notes/print_scanned_documents`,
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


// get PDF by guid
export function get_PDF_by_guid(req: express.Request, res: express.Response) {
    request({
        uri: `${config.SERVICE_URL}/patients/${req.params.patient_id}/notes/open_pdf_by_guid/${req.query.key_guid}`,
        method: "GET",
        encoding:null,
        'headers': {
            'Authorization': req.headers["authorization"]
        },
    }, function (error, response, body) {
        res.status(response.statusCode).send(body);
    });
}

// open_scanned_document
export function open_scanned_document(req: express.Request, res: express.Response) {
    request({
        uri: `${config.SERVICE_URL}/patients/${req.params.patient_id}/notes/open_scanned_document/${req.params.image_index_id}`,
        method: "GET",
        encoding: null,
        'headers': {
            'Authorization': req.headers["authorization"]
        },
    }, function (error, response, body) {
        res.status(response.statusCode).send(body);
    });
}