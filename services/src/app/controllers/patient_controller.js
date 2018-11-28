"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const config_1 = require("../config/config");
function search(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/patiens/search`,
        method: "GET",
        'headers': {
            'Authorization': req.headers["authorization"]
        },
        body: req.body,
        json: true
    }, function (error, response, body) {
        if (error) {
            console.log(error);
        }
        res.status(response.statusCode).send(body);
    });
}
exports.search = search;
function quick_search(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/patients/quick_search`,
        method: "GET",
        'headers': {
            'Authorization': req.headers["authorization"]
        },
        qs: req.query,
        json: true
    }, function (error, response, body) {
        if (error) {
            console.log(error);
        }
        res.status(response.statusCode).send(body);
    });
}
exports.quick_search = quick_search;
function patient_header(req, res) {
    //res.send(req.params.id);
    request({
        uri: `${config_1.default.SERVICE_URL}/patients/${req.params.id}/header`,
        method: "GET",
        'headers': {
            'Authorization': req.headers["authorization"]
        },
        body: req.body,
        json: true
    }, function (error, response, body) {
        if (error) {
            console.log(error);
        }
        res.status(response.statusCode).send(body);
    });
}
exports.patient_header = patient_header;
//get patient header selected case info 
function patient_header_Case_info(req, res) {
    //res.send(req.params.id);
    request({
        uri: `${config_1.default.SERVICE_URL}/patients/${req.params.id}/header/case/${req.params.case_id}`,
        method: "GET",
        'headers': {
            'Authorization': req.headers["authorization"]
        },
        body: req.body,
        json: true
    }, function (error, response, body) {
        if (error) {
            console.log(error);
        }
        res.status(response.statusCode).send(body);
    });
}
exports.patient_header_Case_info = patient_header_Case_info;
//Patient Search - Advance Search.
function patients_search(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/patients/search`,
        method: "GET",
        'headers': {
            'Authorization': req.headers["authorization"],
            'Silversurfer': req.headers["silversurfer"]
        },
        body: req.body,
        json: true
    }, function (error, response, body) {
        if (error) {
            console.log(error);
        }
        res.set('Pragma', 'no-cache');
        res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.status(response.statusCode).send(body);
    });
}
exports.patients_search = patients_search;
//Get Patient information
function get_patients(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/patients/${req.params.patient_id}`,
        method: "GET",
        'headers': {
            'Authorization': req.headers["authorization"]
        },
        json: true
    }, function (error, response, body) {
        res.set('Pragma', 'no-cache');
        res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.status(response.statusCode).send(body);
    });
}
exports.get_patients = get_patients;
//Add Patient information
function add_patients(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/patients`,
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
exports.add_patients = add_patients;
//update Patient information
function update_patients(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/patients/${req.params.patient_id}`,
        method: "PUT",
        'headers': {
            'Authorization': req.headers["authorization"]
        },
        body: req.body,
        json: true
    }, function (error, response, body) {
        res.status(response.statusCode).send(body);
    });
}
exports.update_patients = update_patients;
//get  Patient medicare_cap information
function get_patient_medicare_cap(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/patients/${req.params.patient_id}/medicare_caps`,
        method: "GET",
        'headers': {
            'Authorization': req.headers["authorization"]
        },
        json: true
    }, function (error, response, body) {
        res.status(response.statusCode).send(body);
    });
}
exports.get_patient_medicare_cap = get_patient_medicare_cap;
//add update Patient medicare_cap information
function add_update_patient_medicare_cap(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/patients/${req.params.patient_id}/medicare_caps`,
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
exports.add_update_patient_medicare_cap = add_update_patient_medicare_cap;
//get patient details 
function get_patient_details(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/patients/${req.params.patient_id}`,
        method: "GET",
        'headers': {
            'Authorization': req.headers["authorization"]
        },
        json: true
    }, function (error, response, body) {
        if (error) {
            console.log(error);
        }
        res.status(response.statusCode).send(body);
    });
}
exports.get_patient_details = get_patient_details;
//get  Patient task
function get_patient_task(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/tasks/patients/${req.params.patient_id}`,
        method: "GET",
        'headers': {
            'Authorization': req.headers["authorization"]
        },
        json: true
    }, function (error, response, body) {
        res.set('Pragma', 'no-cache');
        res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.status(response.statusCode).send(body);
    });
}
exports.get_patient_task = get_patient_task;
//get  Patient task
function get_patient_account_notes(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/patients/${req.params.patient_id}/accountNote?sticky_code=${req.query.sticky_code}`,
        method: "GET",
        'headers': {
            'Authorization': req.headers["authorization"]
        },
        json: true
    }, function (error, response, body) {
        res.set('Pragma', 'no-cache');
        res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.status(response.statusCode).send(body);
    });
}
exports.get_patient_account_notes = get_patient_account_notes;
//get  Patient Account Notes Tasks
function get_patient_account_notes_codes(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/patients/${req.params.patient_id}/accountNote/note_codes?isFromPatient=${req.params.is_from_patient}`,
        method: "GET",
        'headers': {
            'Authorization': req.headers["authorization"]
        },
        json: true
    }, function (error, response, body) {
        res.status(response.statusCode).send(body);
    });
}
exports.get_patient_account_notes_codes = get_patient_account_notes_codes;
//Add_patient_account_notes
function add_patient_account_notes(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/patients/${req.params.patient_id}/accountNote/add`,
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
exports.add_patient_account_notes = add_patient_account_notes;
//remove patient's account notes
function remove_account_notes(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/patients/${req.params.patient_id}/accountNote/remove`,
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
exports.remove_account_notes = remove_account_notes;
//Add/update  Patient flag
function update_patients_flag(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/patients/${req.params.patient_id}/update_patient_flag`,
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
exports.update_patients_flag = update_patients_flag;
//get  Patient Account Notes Tasks
function get_patient_form_list(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/patients/get_patient_forms`,
        method: "GET",
        'headers': {
            'Authorization': req.headers["authorization"]
        },
        json: true
    }, function (error, response, body) {
        res.status(response.statusCode).send(body);
    });
}
exports.get_patient_form_list = get_patient_form_list;
// print patient account receipt.
function get_patient_account_receipt(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/payments/${req.params.patient_id}/receipt`,
        method: "GET",
        'headers': {
            'Authorization': req.headers["authorization"]
        },
        json: true
    }, function (error, response, body) {
        res.status(response.statusCode).send(body);
    });
}
exports.get_patient_account_receipt = get_patient_account_receipt;
// print medical record credits.
function get_patient_account_credits(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/payments/${req.params.patient_id}/credits`,
        method: "GET",
        'headers': {
            'Authorization': req.headers["authorization"]
        },
        json: true
    }, function (error, response, body) {
        res.status(response.statusCode).send(body);
    });
}
exports.get_patient_account_credits = get_patient_account_credits;
//# sourceMappingURL=patient_controller.js.map