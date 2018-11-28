import * as express from "express";
import * as request from "request";
import config from "../config/config";

//Add Patient information
export function add_case(req: express.Request, res: express.Response) {

    request({
        uri: `${config.SERVICE_URL}/patients/${req.params.patient_id}/cases/add`,
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