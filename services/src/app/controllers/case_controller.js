"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const config_1 = require("../config/config");
//Add Patient information
function add_case(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/patients/${req.params.patient_id}/cases/add`,
        method: "POST",
        'headers': {
            'Authorization': req.headers["authorization"]
        },
        body: req.body,
        json: true
    }, function (error, response, body) {
        res.status(response.statusCode).send(body);
    });
}
exports.add_case = add_case;
//# sourceMappingURL=case_controller.js.map