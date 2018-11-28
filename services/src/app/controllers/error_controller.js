"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const config_1 = require("../config/config");
function log_error(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/message_log/log_error`,
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
exports.log_error = log_error;
//export function clientErr(req: express.Request, res: express.Response) {
//    var errobj = {"error_type": "client_error"};
//    res.send(JSON.stringify(errobj));
//}
//# sourceMappingURL=error_controller.js.map