"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const config_1 = require("../config/config");
const bodyParser = require("body-parser");
const patient_controller_1 = require("../controllers/patient_controller");
const router = express.Router();
// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true });
patient_controller_1.get_patient_form_list;
router.get(`${config_1.default.API_VERSION}/patients/get_patient_form_list`, jsonParser, patient_controller_1.get_patient_form_list);
router.get(`${config_1.default.API_VERSION}/patients`, jsonParser, patient_controller_1.search);
router.get(`${config_1.default.API_VERSION}/patients/quick_search`, jsonParser, patient_controller_1.quick_search);
router.get(`${config_1.default.API_VERSION}/patients/:id/header/`, patient_controller_1.patient_header);
router.get(`${config_1.default.API_VERSION}/patients/:id/header/case/:case_id`, patient_controller_1.patient_header_Case_info);
router.get(`${config_1.default.API_VERSION}/patients/search`, patient_controller_1.patients_search);
//Get Patient information
router.get(`${config_1.default.API_VERSION}/patients/:patient_id/`, jsonParser, patient_controller_1.get_patients);
//Add Patient information
router.post(`${config_1.default.API_VERSION}/patients`, jsonParser, patient_controller_1.add_patients);
//update Patient information
router.put(`${config_1.default.API_VERSION}/patients/:patient_id/`, jsonParser, patient_controller_1.update_patients);
//Get Patient medicare_cap information
router.get(`${config_1.default.API_VERSION}/patients/:patient_id/medicare_caps`, jsonParser, patient_controller_1.get_patient_medicare_cap);
////Get Patient task
//router.get(`${config.API_VERSION}task/patients/:patient_id`, jsonParser, get_patient_medicare_cap);
//add update Patient medicare_cap information
router.post(`${config_1.default.API_VERSION}/patients/:patient_id/medicare_caps`, jsonParser, patient_controller_1.add_update_patient_medicare_cap);
//get Patient medicare_cap information
router.get(`${config_1.default.API_VERSION}/patients/:patient_id`, jsonParser, patient_controller_1.get_patient_details);
//Get Patient task
router.get(`${config_1.default.API_VERSION}/tasks/patients/:patient_id`, jsonParser, patient_controller_1.get_patient_task);
//Get Patient account notes
router.get(`${config_1.default.API_VERSION}/patients/:patient_id/account_notes`, jsonParser, patient_controller_1.get_patient_account_notes);
//Get Patient account notes codes
router.get(`${config_1.default.API_VERSION}/patients/:patient_id/account_notes/note_codes/:is_from_patient`, jsonParser, patient_controller_1.get_patient_account_notes_codes);
//Add account notes
router.post(`${config_1.default.API_VERSION}/patients/:patient_id/account_notes/add`, jsonParser, patient_controller_1.add_patient_account_notes);
//Remove Patient account notes
router.post(`${config_1.default.API_VERSION}/patients/:patient_id/account_notes/remove`, jsonParser, patient_controller_1.remove_account_notes);
//Add/update  Patient flag
router.post(`${config_1.default.API_VERSION}/patients/:patient_id/update_patient_flag`, jsonParser, patient_controller_1.update_patients_flag);
router.get(`${config_1.default.API_VERSION}/payments/:patient_id/receipt`, jsonParser, patient_controller_1.get_patient_account_receipt);
router.get(`${config_1.default.API_VERSION}/payments/:patient_id/credits`, jsonParser, patient_controller_1.get_patient_account_credits);
exports.default = router;
//# sourceMappingURL=patient_routes.js.map