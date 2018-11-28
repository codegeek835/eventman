import * as express from "express";
import * as request from "request";
import config from "../config/config";


//report information
export function get_ledger_report_data(req: express.Request, res: express.Response) {
    request({
        uri: `${config.SERVICE_URL}/Report/LedgerFullReportData/${req.params.patient_id}/${req.params.start_date}/${req.params.end_date}/${req.params.is_active}`,
        method: "POST",
        'headers': {
            'Authorization': req.headers["authorization"]
        },
        body: req.body,
        json: true
    }, function (error, response, body) {
        res.status(response.statusCode).send(body);
    });
}

export function get_report_ledger_visit_data(req: express.Request, res: express.Response) {
    request({
        uri: `${config.SERVICE_URL}/Report/subreportdata`,
        method: "POST",
        'headers': {
            'Authorization': req.headers["authorization"]
        },
        body: req.body,
        json: true
    }, function (error, response, body) {
        res.status(response.statusCode).send(body);
    });
}


export function get_patient_payment_adjustment_report_data(req: express.Request, res: express.Response) {
    request({
        uri: `${config.SERVICE_URL}/Report/GetLedgerPaymentAdjustment/${req.params.patient_id}/${req.params.charge_id}`,
        method: "POST",
        'headers': {
            'Authorization': req.headers["authorization"]
        },
        body: req.body,
        json: true
    }, function (error, response, body) {
        res.status(response.statusCode).send(body);
    });
}


export function get_charge_report_data(req: express.Request, res: express.Response) {
    request({
        uri: `${config.SERVICE_URL}/Report/GetLedgerCharge/${req.params.patient_id}/${req.params.charge_id}`,
        method: "POST",
        'headers': {
            'Authorization': req.headers["authorization"]
        },
        body: req.body,
        json: true
    }, function (error, response, body) {
        res.status(response.statusCode).send(body);
    });
}


export function get_claim_report_data(req: express.Request, res: express.Response) {
    request({
        uri: `${config.SERVICE_URL}/Report/GetLedgerClaim/${req.params.charge_id}`,
        method: "POST",
        'headers': {
            'Authorization': req.headers["authorization"]
        },
        body: req.body,
        json: true
    }, function (error, response, body) {
        res.status(response.statusCode).send(body);
    });
}


export function get_patient_claim_data(req: express.Request, res: express.Response) {
    request({
        uri: `${config.SERVICE_URL}/Report/PatientClaims`,
        method: "POST",
        'headers': {
            'Authorization': req.headers["authorization"]
        },
        body: req.body.param,
        json: true
    }, function (error, response, body) {
        res.status(response.statusCode).send(body);
    });
}

export function get_charge_report_title(req: express.Request, res: express.Response) {
    request({
        uri: `${config.SERVICE_URL}/Report/ChargeReportTitle`,
        method: "POST",
        'headers': {
            'Authorization': req.headers["authorization"]
        },
        body: req.body.param,
        json: true
    }, function (error, response, body) {
        res.status(response.statusCode).send(body);
    });
}

export function get_patient_payment_adjustments(req: express.Request, res: express.Response) {
    request({
        uri: `${config.SERVICE_URL}/Report/PatientPaymentAdjustments`,
        method: "POST",
        'headers': {
            'Authorization': req.headers["authorization"]
        },
        body: req.body.param,
        json: true
    }, function (error, response, body) {
        res.status(response.statusCode).send(body);
    });
}

//Get Reports MetaData for controllers
export function get_report_metadata(req: express.Request, res: express.Response) {
    request({
        uri: `${config.SERVICE_URL}/Report/reportMetadata`,
        method: "GET",
        'headers': {
            'Authorization': req.headers["authorization"]
        },
        qs: req.query
    }, function (error, response, body) {
        res.status(response.statusCode).send(body);
    });
}

//Get Reports MetaData for controllers
export function get_updated_dropdown_data(req: express.Request, res: express.Response) {
    request({
        uri: `${config.SERVICE_URL}/Report/updatedPPList`,
        method: "POST",
        'headers': {
            'Authorization': req.headers["authorization"]
        },
        body: req.body,
        json: true
    }, function (error, response, body) {
        res.status(response.statusCode).send(body);
    });
}


//Get Reports MetaData for controllers
export function get_report_data(req: express.Request, res: express.Response) {
    request({
        uri: `${config.SERVICE_URL}/Report/reportData`,
        method: "POST",
        'headers': {
            'Authorization': req.headers["authorization"]
        },
        qs: req.query,
        body: req.body,
        json: true
    }, function (error, response, body) {
        res.status(response.statusCode).send(body);
    });
}