import * as express from "express";
import * as request from "request";
import config from "../config/config";

export function doctors_orders_visit(req: express.Request, res: express.Response) {
    request({
        uri: `${config.SERVICE_URL}/subscriber/doctors_orders_visit`,
        method: "GET",
        'headers': {
            'Authorization': req.headers["authorization"]
        },
        qs: req.query,
        json: true
    }, function (error, response, body) {
        console.log(body);
        res.status(response.statusCode).send(body);
    });
}