import * as express from "express";
import config from "../config/config";
import * as bodyParser from "body-parser";
import {
    get_ledger_report_data,
    get_patient_payment_adjustment_report_data,
    get_charge_report_data,
    get_claim_report_data,
    get_report_ledger_visit_data,
    get_charge_report_title,
    get_patient_claim_data,
    get_patient_payment_adjustments,
    get_report_metadata,
    get_report_data,
    get_updated_dropdown_data
} from "../controllers/report_controller";

const router = express.Router();
// create application/json parser
var jsonParser = bodyParser.json();
router.post(`${config.API_VERSION}/Report/LedgerFullReportData/:patient_id/:start_date/:end_date/:is_active`, get_ledger_report_data);
router.post(`${config.API_VERSION}/report/subreportdata`, jsonParser, get_report_ledger_visit_data);
router.post(`${config.API_VERSION}/Report/GetLedgerPaymentAdjustment/:patient_id/:charge_id`, get_patient_payment_adjustment_report_data);
router.post(`${config.API_VERSION}/Report/GetLedgerCharge/:patient_id/:charge_id`, get_charge_report_data);
router.post(`${config.API_VERSION}/Report/GetLedgerClaim/:charge_id`, get_claim_report_data);
router.post(`${config.API_VERSION}/report/patient-claims`, jsonParser,get_patient_claim_data);
router.post(`${config.API_VERSION}/report/charge-report-title`, jsonParser, get_charge_report_title);
router.post(`${config.API_VERSION}/report/patient-payment-adjustments`, jsonParser, get_patient_payment_adjustments);
router.get(`${config.API_VERSION}/report/report_meta_data`, jsonParser, get_report_metadata);
router.post(`${config.API_VERSION}/report/updatedPPList`, jsonParser, get_updated_dropdown_data);
router.post(`${config.API_VERSION}/report/report_data`, jsonParser, get_report_data);

export default router;