import * as express from "express";
import * as request from "request";
import config from "../config/config";

// gernerate barcodes
export function generate_barcodes(req: express.Request, res: express.Response) {

    request({
        uri: `${config.SERVICE_URL}/barcode/gernerate_barcodes/${req.params.patient_id}`,
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