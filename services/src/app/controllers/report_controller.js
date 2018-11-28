"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const config_1 = require("../config/config");
//report information
function get_ledger_report_data(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/Report/LedgerFullReportData/${req.params.patient_id}/${req.params.start_date}/${req.params.end_date}/${req.params.is_active}`,
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
exports.get_ledger_report_data = get_ledger_report_data;
function get_report_ledger_visit_data(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/Report/subreportdata`,
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
exports.get_report_ledger_visit_data = get_report_ledger_visit_data;
function get_patient_payment_adjustment_report_data(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/Report/GetLedgerPaymentAdjustment/${req.params.patient_id}/${req.params.charge_id}`,
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
exports.get_patient_payment_adjustment_report_data = get_patient_payment_adjustment_report_data;
function get_charge_report_data(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/Report/GetLedgerCharge/${req.params.patient_id}/${req.params.charge_id}`,
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
exports.get_charge_report_data = get_charge_report_data;
function get_claim_report_data(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/Report/GetLedgerClaim/${req.params.charge_id}`,
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
exports.get_claim_report_data = get_claim_report_data;
function get_patient_claim_data(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/Report/PatientClaims`,
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
exports.get_patient_claim_data = get_patient_claim_data;
function get_charge_report_title(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/Report/ChargeReportTitle`,
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
exports.get_charge_report_title = get_charge_report_title;
function get_patient_payment_adjustments(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/Report/PatientPaymentAdjustments`,
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
exports.get_patient_payment_adjustments = get_patient_payment_adjustments;
//Get Reports MetaData for controllers
function get_report_metadata(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/Report/reportMetadata`,
        method: "GET",
        'headers': {
            'Authorization': req.headers["authorization"]
        },
        qs: req.query
    }, function (error, response, body) {
        res.status(response.statusCode).send(body);
    });
}
exports.get_report_metadata = get_report_metadata;
//Get Reports MetaData for controllers
function get_updated_dropdown_data(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/Report/updatedPPList`,
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
exports.get_updated_dropdown_data = get_updated_dropdown_data;
//Get Reports MetaData for controllers
function get_report_data(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/Report/reportData`,
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
exports.get_report_data = get_report_data;
//# sourceMappingURL=report_controller.js.map