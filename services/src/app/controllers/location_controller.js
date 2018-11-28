"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const config_1 = require("../config/config");
function placeSearch(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/locations/place_of_service`,
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
exports.placeSearch = placeSearch;
function providerSearch(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/provider_config/billing_provider/${req.params.locationId}`,
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
exports.providerSearch = providerSearch;
function quick_search_location(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/locations/quick_search_place_of_service`,
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
exports.quick_search_location = quick_search_location;
function quick_search_provider(req, res) {
    request({
        uri: `${config_1.default.SERVICE_URL}/provider_config/quick_search_billing_and_treating_provider/${req.params.locationId}`,
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
exports.quick_search_provider = quick_search_provider;
//# sourceMappingURL=location_controller.js.map