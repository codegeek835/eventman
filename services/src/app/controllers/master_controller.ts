import * as express from "express";
import * as request from "request";
import config from "../config/config";

//get all msater Data
export function get_master_data(req: express.Request, res: express.Response) {
    request({
        uri: `${config.SERVICE_URL}/master/data`,
        method: "GET",
        'headers': {
            'Authorization': req.headers["authorization"]
        },
        qs: req.query,
        json: true
    }, function (error, response, body) {
        
        //set cache and expire time, If both Expires and max-age are set max-age will take precedence.
        res.header('Cache-Control', 'public, max-age=' + config.Cache_Expires.high+'');
        //res.header("Cache_Expires_in_sec", config.Cache_Expires.high);
        res.header("Expires", config.Cache_Expires.high);
        res.status(response.statusCode).send(body);
    });
}

//get all msater Data by type
export function get_master_data_by_type(req: express.Request, res: express.Response) {
    request({
        uri: `${config.SERVICE_URL}/master/data_by_type`,
        method: "GET",
        'headers': {
            'Authorization': req.headers["authorization"]
        },
        qs: req.query,
        json: true
    }, function (error, response, body) {

        //set cache and expire time, If both Expires and max-age are set max-age will take precedence.
        res.header('Cache-Control', 'public, max-age=' + config.Cache_Expires.high + '');
        //res.header("Cache_Expires_in_sec", config.Cache_Expires.high);
        res.header("Expires", config.Cache_Expires.high);
        res.status(response.statusCode).send(body);
    });
}

//get get_Serach_control_data
export function get_Serach_control_data(req: express.Request, res: express.Response) {
    request({
        uri: `${config.SERVICE_URL}/master/control/${req.params.control_id}`,
        method: "GET",
        'headers': {
            'Authorization': req.headers["authorization"]
        },
        qs: req.query,
        json: true
    }, function (error, response, body) {
        res.status(response.statusCode).send(body);
    });
}