import * as express from "express";
import * as request from "request";
import config from "../config/config";

export function savePaymentDetails(req: express.Request, res: express.Response) {
    request({
        uri: `${config.SERVICE_URL}/payments/add_update_credits`,
        method: "POST",
        'headers': {
            'Authorization': req.headers["authorization"],
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

export function getInsurance(req: express.Request, res: express.Response) {
    request({
        uri: `${config.SERVICE_URL}/insurance/${req.params.pateintId}`,
        method: "GET",
        'headers': {
            'Authorization': req.headers["authorization"],
           
        },
    }, function (error, response, body) {
        if (error) {
            console.log(error);
        }
        res.status(response.statusCode).send(body);
    });
}