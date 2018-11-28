import * as express from "express";
import * as request from "request";
import config from "../config/config";

export function placeSearch(req: express.Request, res: express.Response) {
    request({
        uri: `${config.SERVICE_URL}/locations/place_of_service`,
        method: "GET",
        'headers': {
            'Authorization': req.headers["authorization"],
            'Silversurfer': req.headers["silversurfer"]
        },
    }, function (error, response, body) {
        if (error) {
            console.log(error);
        }
        res.status(response.statusCode).send(body);
    });
}

export function providerSearch(req: express.Request, res: express.Response) {
    request({
        uri: `${config.SERVICE_URL}/provider_config/billing_provider/${req.params.locationId}`,
        method: "GET",
        'headers': {
            'Authorization': req.headers["authorization"],
            'Silversurfer': req.headers["silversurfer"]
        },
    }, function (error, response, body) {
        if (error) {
            console.log(error);
        }
        res.status(response.statusCode).send(body);
    });
}
export function quick_search_location(req: express.Request, res: express.Response) {
    request({
        uri: `${config.SERVICE_URL}/locations/quick_search_place_of_service`,
        method: "GET",
        'headers': {
            'Authorization': req.headers["authorization"],
        },
        qs: req.query,
    }, function (error, response, body) {
        if (error) {
            console.log(error);
        }
        res.status(response.statusCode).send(body);
    });
}

export function quick_search_provider(req: express.Request, res: express.Response) {
    request({
        uri: `${config.SERVICE_URL}/provider_config/quick_search_billing_and_treating_provider/${req.params.locationId}`,
        method: "GET",
        'headers': {
            'Authorization': req.headers["authorization"],
        },
        qs: req.query,
    }, function (error, response, body) {
        if (error) {
            console.log(error);
        }
        res.status(response.statusCode).send(body);
    });
}
