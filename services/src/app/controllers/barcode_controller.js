"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const config_1 = require("../config/config");
// gernerate barcodes
function generate_barcodes(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/barcode/gernerate_barcodes/${req.params.patient_id}`,
        method: "GET",
        'headers': {
            'Authorization': req.headers["authorization"],
            'Silversurfer': req.headers["silversurfer"]
        },
        body: req.query,
        json: true
    }, function (error, response, body) {
        res.set('Pragma', 'no-cache');
        res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.status(response.statusCode).send(body);
    });
}
exports.generate_barcodes = generate_barcodes;
//# sourceMappingURL=barcode_controller.js.map