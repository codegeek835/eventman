import * as express from "express";
import * as request from "request";
import config from "../config/config";

export function authentication(req: express.Request, res: express.Response) {

    // get client ip
    var client_ip:any = (req.headers['x-forwarded-for'] || req.ip || req.connection.remoteAddress || req.socket.remoteAddress);

    if (client_ip && client_ip != "::1") {
        client_ip = client_ip.split(":")[0];
    }

    request({
        uri: `${config.SERVICE_URL}/authentication/authenticate`,
        method: "POST",   
         'headers': {
             'Client_IP': client_ip 
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

// refresh auth token 
export function refresh_token(req: express.Request, res: express.Response) {

    request({
        uri: `${config.SERVICE_URL}/authentication/refresh_token`,
        method: "POST",
        'headers': {
            'Authorization': req.headers["authorization"]
        },
        qs: req.body,
        json: true
    }, function (error, response, body) {
        //console.log(body);
        res.status(response.statusCode).send(body);
    });

}


export function logout(req: express.Request, res: express.Response) {

    request({
        uri: `${config.SERVICE_URL}/authentication/logout`,
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

export function forgot_password(req: express.Request, res: express.Response) {

    request({
        uri: `${config.SERVICE_URL}/authentication/forgot_password`,
        method: "POST",
        qs:req.body,
        json: true
    }, function (error, response, body) {
        //console.log(body);
        res.status(response.statusCode).send(body);
    });

}

//re-send email for ip enabling
export function send_ip_enabled_email(req: express.Request, res: express.Response) {
    // get client ip
    var client_ip: any = (req.headers['x-forwarded-for'] || req.ip || req.connection.remoteAddress || req.socket.remoteAddress);

    if (client_ip && client_ip != "::1") {
        client_ip = client_ip.split(":")[0];
    }
    request({
        uri: `${config.SERVICE_URL}/authentication/resend_ip_enabled_email`,
        'headers': {
            'Client_IP': client_ip
        },
        method: "POST",
        qs: req.body,
        json: true
    }, function (error, response, body) {
        //console.log(body);
        res.status(response.statusCode).send(body);
    });

}