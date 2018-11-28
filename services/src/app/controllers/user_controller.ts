import * as express from "express";
import * as request from "request";
import config from "../config/config";

export function user_permissions(req: express.Request, res: express.Response) {
    request({
        uri: `${config.SERVICE_URL}/user/permissions`,
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

export function user_forgot_password_token_validation(req: express.Request, res: express.Response) {
    // get client ip
    var client_ip:any = (req.headers['x-forwarded-for'] || req.ip || req.connection.remoteAddress || req.socket.remoteAddress);

    if (client_ip && client_ip != "::1") {
        client_ip = client_ip.split(":")[0];
    }
    request({
        uri: `${config.SERVICE_URL}/authentication/forgot_password_token_validate`,
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

export function reset_password(req: express.Request, res: express.Response) {
    // get client ip
    var client_ip: any = (req.headers['x-forwarded-for'] || req.ip || req.connection.remoteAddress || req.socket.remoteAddress);

    if (client_ip && client_ip != "::1") {
        client_ip = client_ip.split(":")[0];
    }

    request({
        uri: `${config.SERVICE_URL}/authentication/reset_password`,
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
export function get_user_data(req: express.Request, res: express.Response) {
    request({
        uri: `${config.SERVICE_URL}/user/${req.params.id}`,
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
export function company_search(req: express.Request, res: express.Response) {
    request({
        uri: `${config.SERVICE_URL}/company/quick_search`,
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


export function update_user_data(req: express.Request, res: express.Response) {
    
    request({
        uri: `${config.SERVICE_URL}/user/${req.params.id}`,
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


export function update_user_password(req: express.Request, res: express.Response) {
    
    request({
        uri: `${config.SERVICE_URL}/user/change_password`,
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
export function register_ip(req: express.Request, res: express.Response) {
    request({
        uri: `${config.SERVICE_URL}/authentication/register_ip`,
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
export function company_lookup(req: express.Request, res: express.Response) {
    request({
        uri: `${config.SERVICE_URL}/company/lookup`,
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

export function get_r2_url(req: express.Request, res: express.Response) {
    request({
        uri: `${config.SERVICE_URL}/user/r2_url`,
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
export function have_default_access(req: express.Request, res: express.Response) {
    request({
        uri: `${config.SERVICE_URL}/user/${req.params.id}/has_default_company_permission`,
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