"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const config_1 = require("../config/config");
function savePaymentDetails(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/payments/add_update_credits`,
        method: "POST",
        'headers': {
            'Authorization': req.headers["authorization"],
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
exports.savePaymentDetails = savePaymentDetails;
function getInsurance(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/insurance/${req.params.pateintId}`,
        method: "GET",
        'headers': {
            'Authorization': req.headers["authorization"],
        },
    }, function (error, response, body) {
        if (error) {
            console.log(error);
        }
        res.status(response.statusCode).send(body);
    });
}
exports.getInsurance = getInsurance;
//# sourceMappingURL=payment_controller.js.map