"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const config_1 = require("../config/config");
function doctors_orders_visit(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/subscriber/doctors_orders_visit`,
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
exports.doctors_orders_visit = doctors_orders_visit;
//# sourceMappingURL=subscriber_controller.js.map