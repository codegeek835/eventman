"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const config_1 = require("../config/config");
//get all msater Data
function get_master_data(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/master/data`,
        method: "GET",
        'headers': {
            'Authorization': req.headers["authorization"]
        },
        qs: req.query,
        json: true
    }, function (error, response, body) {
        //set cache and expire time, If both Expires and max-age are set max-age will take precedence.
        res.header('Cache-Control', 'public, max-age=' + config_1.default.Cache_Expires.high + '');
        //res.header("Cache_Expires_in_sec", config.Cache_Expires.high);
        res.header("Expires", config_1.default.Cache_Expires.high);
        res.status(response.statusCode).send(body);
    });
}
exports.get_master_data = get_master_data;
//get all msater Data by type
function get_master_data_by_type(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/master/data_by_type`,
        method: "GET",
        'headers': {
            'Authorization': req.headers["authorization"]
        },
        qs: req.query,
        json: true
    }, function (error, response, body) {
        //set cache and expire time, If both Expires and max-age are set max-age will take precedence.
        res.header('Cache-Control', 'public, max-age=' + config_1.default.Cache_Expires.high + '');
        //res.header("Cache_Expires_in_sec", config.Cache_Expires.high);
        res.header("Expires", config_1.default.Cache_Expires.high);
        res.status(response.statusCode).send(body);
    });
}
exports.get_master_data_by_type = get_master_data_by_type;
//get get_Serach_control_data
function get_Serach_control_data(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/master/control/${req.params.control_id}`,
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
exports.get_Serach_control_data = get_Serach_control_data;
//# sourceMappingURL=master_controller.js.map