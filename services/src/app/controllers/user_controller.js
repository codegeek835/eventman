"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const config_1 = require("../config/config");
function user_permissions(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/user/permissions`,
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
exports.user_permissions = user_permissions;
function user_forgot_password_token_validation(req, res) {
    // get client ip
    var client_ip = (req.headers['x-forwarded-for'] || req.ip || req.connection.remoteAddress || req.socket.remoteAddress);
    if (client_ip && client_ip != "::1") {
        client_ip = client_ip.split(":")[0];
    }
    request({
        uri: `${config_1.default.SERVICE_URL}/authentication/forgot_password_token_validate`,
        method: "POST",
        'headers': {
            'Client_IP': client_ip
        },
        qs: req.body,
        json: true
    }, function (error, response, body) {
        if (error) {
            console.log(error);
        }
        res.status(response.statusCode).send(body);
    });
}
exports.user_forgot_password_token_validation = user_forgot_password_token_validation;
function reset_password(req, res) {
    // get client ip
    var client_ip = (req.headers['x-forwarded-for'] || req.ip || req.connection.remoteAddress || req.socket.remoteAddress);
    if (client_ip && client_ip != "::1") {
        client_ip = client_ip.split(":")[0];
    }
    request({
        uri: `${config_1.default.SERVICE_URL}/authentication/reset_password`,
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
exports.reset_password = reset_password;
function get_user_data(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/user/${req.params.id}`,
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
exports.get_user_data = get_user_data;
function company_search(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/company/quick_search`,
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
exports.company_search = company_search;
function update_user_data(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/user/${req.params.id}`,
        method: "PUT",
        headers: {
            'Authorization': req.headers["authorization"]
        },
        json: true,
        body: req.body,
    }, function (error, response, body) {
        if (error) {
            console.log(error);
        }
        res.status(response.statusCode).send(body);
    });
}
exports.update_user_data = update_user_data;
function update_user_password(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/user/change_password`,
        method: "POST",
        headers: {
            'Authorization': req.headers["authorization"]
        },
        json: true,
        body: req.body,
    }, function (error, response, body) {
        if (error) {
            console.log(error);
        }
        res.status(response.statusCode).send(body);
    });
}
exports.update_user_password = update_user_password;
function register_ip(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/authentication/register_ip`,
        method: "POST",
        qs: req.body,
        json: true
    }, function (error, response, body) {
        if (error) {
            console.log(error);
        }
        res.status(response.statusCode).send(body);
    });
}
exports.register_ip = register_ip;
function company_lookup(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/company/lookup`,
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
exports.company_lookup = company_lookup;
function get_r2_url(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/user/r2_url`,
        method: "POST",
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
exports.get_r2_url = get_r2_url;
function have_default_access(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/user/${req.params.id}/has_default_company_permission`,
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
exports.have_default_access = have_default_access;
//# sourceMappingURL=user_controller.js.map