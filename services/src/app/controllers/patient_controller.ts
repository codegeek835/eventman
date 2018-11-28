import * as express from "express";
import * as request from "request";
import config from "../config/config";

export function search(req: express.Request, res: express.Response) {
    request({
        uri: `${config.SERVICE_URL}/patiens/search`,
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

export function quick_search(req: express.Request, res: express.Response) {
    request({
        uri: `${config.SERVICE_URL}/patients/quick_search`,
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

export function patient_header(req: express.Request, res: express.Response) {
      //res.send(req.params.id);
    request({
        uri: `${config.SERVICE_URL}/patients/${req.params.id}/header`,
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

//get patient header selected case info 
export function patient_header_Case_info(req: express.Request, res: express.Response) {
    //res.send(req.params.id);
    request({
        uri: `${config.SERVICE_URL}/patients/${req.params.id}/header/case/${req.params.case_id}`,
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


//Patient Search - Advance Search.
export function patients_search(req: express.Request, res: express.Response) {
    
    request({
        uri: `${config.SERVICE_URL}/patients/search`,
        method: "GET",
        'headers': {
            'Authorization': req.headers["authorization"],
            'Silversurfer': req.headers["silversurfer"]
        },
        body: req.body,
        json: true
    }, function(error, response, body) {
        if (error) {
            console.log(error);
        }

        res.set('Pragma', 'no-cache');
        res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.status(response.statusCode).send(body);
    });

    
}

//Get Patient information
export function get_patients(req: express.Request, res: express.Response) {

    request({
        uri: `${config.SERVICE_URL}/patients/${req.params.patient_id}`,
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

//Add Patient information
export function add_patients(req: express.Request, res: express.Response) {

    request({
        uri: `${config.SERVICE_URL}/patients`,
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

//update Patient information
export function update_patients(req: express.Request, res: express.Response) {

    request({
        uri: `${config.SERVICE_URL}/patients/${req.params.patient_id}`,
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

//get  Patient medicare_cap information
export function get_patient_medicare_cap(req: express.Request, res: express.Response) {

    request({
        uri: `${config.SERVICE_URL}/patients/${req.params.patient_id}/medicare_caps`,
        method: "GET",
        'headers': {
            'Authorization': req.headers["authorization"]
        },
        json: true
    }, function (error, response, body) {

        res.status(response.statusCode).send(body);
    });
}

//add update Patient medicare_cap information
export function add_update_patient_medicare_cap(req: express.Request, res: express.Response) {

    request({
        uri: `${config.SERVICE_URL}/patients/${req.params.patient_id}/medicare_caps`,
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

//get patient details 
export function get_patient_details(req: express.Request, res: express.Response) {

    request({
        uri: `${config.SERVICE_URL}/patients/${req.params.patient_id}`,
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


//get  Patient task
export function get_patient_task(req: express.Request, res: express.Response) {

    request({
        uri: `${config.SERVICE_URL}/tasks/patients/${req.params.patient_id}`,
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

//get  Patient task
export function get_patient_account_notes(req: express.Request, res: express.Response) {

    request({
        uri: `${config.SERVICE_URL}/patients/${req.params.patient_id}/accountNote?sticky_code=${req.query.sticky_code}`,
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


    //get  Patient Account Notes Tasks
    export function get_patient_account_notes_codes(req: express.Request, res: express.Response) {

        request({
            uri: `${config.SERVICE_URL}/patients/${req.params.patient_id}/accountNote/note_codes?isFromPatient=${req.params.is_from_patient}`,
            method: "GET",
            'headers': {
                'Authorization': req.headers["authorization"]
            },
            json: true
        }, function (error, response, body) {

            res.status(response.statusCode).send(body);
        });
    }

    //Add_patient_account_notes
    export function add_patient_account_notes(req: express.Request, res: express.Response) {

        request({
            uri: `${config.SERVICE_URL}/patients/${req.params.patient_id}/accountNote/add`,
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

    //remove patient's account notes
    export function remove_account_notes(req: express.Request, res: express.Response) {

        request({
            uri: `${config.SERVICE_URL}/patients/${req.params.patient_id}/accountNote/remove`,
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

//Add/update  Patient flag
export function update_patients_flag(req: express.Request, res: express.Response) {

    request({
        uri: `${config.SERVICE_URL}/patients/${req.params.patient_id}/update_patient_flag`,
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

//get  Patient Account Notes Tasks
export function get_patient_form_list(req: express.Request, res: express.Response) {

    request({
        uri: `${config.SERVICE_URL}/patients/get_patient_forms`,
        method: "GET",
        'headers': {
            'Authorization': req.headers["authorization"]
        },
        json: true
    }, function (error, response, body) {

        res.status(response.statusCode).send(body);
    });
}

// print patient account receipt.
export function get_patient_account_receipt(req: express.Request, res: express.Response) {
    request({
        uri: `${config.SERVICE_URL}/payments/${req.params.patient_id}/receipt`,
        method: "GET",
        'headers': {
            'Authorization': req.headers["authorization"]
        },
        json: true
    }, function (error, response, body) {
        res.status(response.statusCode).send(body);
    });
}
// print medical record credits.
export function get_patient_account_credits(req: express.Request, res: express.Response) {
    request({
        uri: `${config.SERVICE_URL}/payments/${req.params.patient_id}/credits`,
        method: "GET",
        'headers': {
            'Authorization': req.headers["authorization"]
        },
        json: true
    }, function (error, response, body) {
        res.status(response.statusCode).send(body);
    });
}