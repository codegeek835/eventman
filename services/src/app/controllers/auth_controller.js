"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const config_1 = require("../config/config");
function authentication(req, res) {
    // get client ip
    var client_ip = (req.headers['x-forwarded-for'] || req.ip || req.connection.remoteAddress || req.socket.remoteAddress);
    if (client_ip && client_ip != "::1") {
        client_ip = client_ip.split(":")[0];
    }
    request({
        uri: `${config_1.default.SERVICE_URL}/authentication/authenticate`,
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
exports.authentication = authentication;
// refresh auth token 
function refresh_token(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/authentication/refresh_token`,
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
exports.refresh_token = refresh_token;
function logout(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/authentication/logout`,
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
exports.logout = logout;
function forgot_password(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/authentication/forgot_password`,
        method: "POST",
        qs: req.body,
        json: true
    }, function (error, response, body) {
        //console.log(body);
        res.status(response.statusCode).send(body);
    });
}
exports.forgot_password = forgot_password;
//re-send email for ip enabling
function send_ip_enabled_email(req, res) {
    // get client ip
    var client_ip = (req.headers['x-forwarded-for'] || req.ip || req.connection.remoteAddress || req.socket.remoteAddress);
    if (client_ip && client_ip != "::1") {
        client_ip = client_ip.split(":")[0];
    }
    request({
        uri: `${config_1.default.SERVICE_URL}/authentication/resend_ip_enabled_email`,
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
exports.send_ip_enabled_email = send_ip_enabled_email;
//# sourceMappingURL=auth_controller.js.map