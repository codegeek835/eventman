import * as express from "express";
import * as request from "request";
import config from "../config/config";



export function log_error(req: express.Request, res: express.Response) {
    request({
        uri: `${config.SERVICE_URL}/message_log/log_error`,
        method: "POST",
        body: req.body,
        json: true
    }, function (error, response, body) {
        if (error) {
            console.log(error);
        }
        res.status(response.statusCode).send(body);
    });
}


//export function clientErr(req: express.Request, res: express.Response) {
//    var errobj = {"error_type": "client_error"};
//    res.send(JSON.stringify(errobj));
    
//}
