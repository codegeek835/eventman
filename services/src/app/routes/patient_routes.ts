import * as express from "express";
import config from "../config/config";
import * as bodyParser from "body-parser";

import {
    search, patient_header,
    quick_search,
    patients_search,
    patient_header_Case_info,
    get_patients,
    add_patients,
    update_patients,
    get_patient_medicare_cap,
    add_update_patient_medicare_cap,
    get_patient_details,
    get_patient_task,
    get_patient_account_notes,
    get_patient_account_notes_codes,
    add_patient_account_notes,
    remove_account_notes,
    update_patients_flag,
    get_patient_form_list,
    get_patient_account_receipt, get_patient_account_credits
} from "../controllers/patient_controller";

const router = express.Router();

// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true });

get_patient_form_list
router.get(`${config.API_VERSION}/patients/get_patient_form_list`, jsonParser, get_patient_form_list);

router.get(`${config.API_VERSION}/patients`, jsonParser, search);
router.get(`${config.API_VERSION}/patients/quick_search`, jsonParser, quick_search);
router.get(`${config.API_VERSION}/patients/:id/header/`, patient_header);
router.get(`${config.API_VERSION}/patients/:id/header/case/:case_id`, patient_header_Case_info);
router.get(`${config.API_VERSION}/patients/search`, patients_search);
//Get Patient information
router.get(`${config.API_VERSION}/patients/:patient_id/`, jsonParser, get_patients);
//Add Patient information
router.post(`${config.API_VERSION}/patients`, jsonParser, add_patients);
//update Patient information
router.put(`${config.API_VERSION}/patients/:patient_id/`, jsonParser, update_patients);

//Get Patient medicare_cap information
router.get(`${config.API_VERSION}/patients/:patient_id/medicare_caps`, jsonParser, get_patient_medicare_cap);

////Get Patient task
//router.get(`${config.API_VERSION}task/patients/:patient_id`, jsonParser, get_patient_medicare_cap);

//add update Patient medicare_cap information
router.post(`${config.API_VERSION}/patients/:patient_id/medicare_caps`, jsonParser, add_update_patient_medicare_cap);

//get Patient medicare_cap information
router.get(`${config.API_VERSION}/patients/:patient_id`, jsonParser, get_patient_details);

//Get Patient task
router.get(`${config.API_VERSION}/tasks/patients/:patient_id`, jsonParser, get_patient_task);

//Get Patient account notes
router.get(`${config.API_VERSION}/patients/:patient_id/account_notes`, jsonParser, get_patient_account_notes);

//Get Patient account notes codes
router.get(`${config.API_VERSION}/patients/:patient_id/account_notes/note_codes/:is_from_patient`, jsonParser, get_patient_account_notes_codes);

//Add account notes
router.post(`${config.API_VERSION}/patients/:patient_id/account_notes/add`, jsonParser, add_patient_account_notes);



//Remove Patient account notes
router.post(`${config.API_VERSION}/patients/:patient_id/account_notes/remove`, jsonParser, remove_account_notes);

//Add/update  Patient flag
router.post(`${config.API_VERSION}/patients/:patient_id/update_patient_flag`, jsonParser, update_patients_flag);

router.get(`${config.API_VERSION}/payments/:patient_id/receipt`, jsonParser, get_patient_account_receipt);
router.get(`${config.API_VERSION}/payments/:patient_id/credits`, jsonParser, get_patient_account_credits);

export default router;