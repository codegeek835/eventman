"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const config_1 = require("../config/config");
const bodyParser = require("body-parser");
const report_controller_1 = require("../controllers/report_controller");
const router = express.Router();
// create application/json parser
var jsonParser = bodyParser.json();
router.post(`${config_1.default.API_VERSION}/Report/LedgerFullReportData/:patient_id/:start_date/:end_date/:is_active`, report_controller_1.get_ledger_report_data);
router.post(`${config_1.default.API_VERSION}/report/subreportdata`, jsonParser, report_controller_1.get_report_ledger_visit_data);
router.post(`${config_1.default.API_VERSION}/Report/GetLedgerPaymentAdjustment/:patient_id/:charge_id`, report_controller_1.get_patient_payment_adjustment_report_data);
router.post(`${config_1.default.API_VERSION}/Report/GetLedgerCharge/:patient_id/:charge_id`, report_controller_1.get_charge_report_data);
router.post(`${config_1.default.API_VERSION}/Report/GetLedgerClaim/:charge_id`, report_controller_1.get_claim_report_data);
router.post(`${config_1.default.API_VERSION}/report/patient-claims`, jsonParser, report_controller_1.get_patient_claim_data);
router.post(`${config_1.default.API_VERSION}/report/charge-report-title`, jsonParser, report_controller_1.get_charge_report_title);
router.post(`${config_1.default.API_VERSION}/report/patient-payment-adjustments`, jsonParser, report_controller_1.get_patient_payment_adjustments);
router.get(`${config_1.default.API_VERSION}/report/report_meta_data`, jsonParser, report_controller_1.get_report_metadata);
router.post(`${config_1.default.API_VERSION}/report/updatedPPList`, jsonParser, report_controller_1.get_updated_dropdown_data);
router.post(`${config_1.default.API_VERSION}/report/report_data`, jsonParser, report_controller_1.get_report_data);
exports.default = router;
//# sourceMappingURL=report_routes.js.map