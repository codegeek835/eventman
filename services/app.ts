"use strict";

import * as compression from "compression";
import * as express from "express";
import * as path from "path";
import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";
import * as helmet from "helmet";

import { port } from "./src/app/config/index";
import StatusError from "./src/app/errors/status_error";
import indexRouter from "./src/app/routes/index";
import patient_Route from "./src/app/routes/patient_routes";
import auth_Route from "./src/app/routes/auth_routes";
import user_Route from "./src/app/routes/user_routes";
import master_routes from "./src/app/routes/master_routes";
import report_routes from "./src/app/routes/report_routes";
import barcode_routes from "./src/app/routes/barcode_routes";
import note_routes from './src/app/routes/note_routes';
import payment_routes from './src/app/routes/payment_routes';
import location_routes from './src/app/routes/location_routes';
import case_routes from './src/app/routes/case_routes';
//import v1Router from "./src/app/routes/v1Router";
//import clientErr from "./src/app/routes/clientErr"

const app = express();

// Middleware

app.use(helmet());

app.use(compression());

// view engine setup
app.set('views', path.join(__dirname, './src/app/views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, './src/app/public')));

//To ebabled the proxy for trust
app.enable('trust proxy');

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization,Silversurfer');

    //var client_ip = (req.headers['x-forwarded-for'] || req.ip || req.connection.remoteAddress || req.socket.remoteAddress);
    //req.headers['Client_IP'] = client_ip;
    // Pass to next layer of middleware
    next();

});

// Routes
app.use("/", indexRouter);
app.use("/", patient_Route);
app.use("/", auth_Route);
app.use("/", user_Route);
app.use("/", master_routes);
app.use("/", report_routes);
app.use("/", barcode_routes)
app.use("/", note_routes);
app.use("/", location_routes);
app.use("/", payment_routes);
app.use("/", case_routes);
app.set("port", port);
app.listen(port);



// 404 - error handler
app.use(
    (
        _req: express.Request,
        _res: express.Response,
        next: express.NextFunction
    ) => {

        next(new StatusError("Not Found", 404));
    }
);

// 500 - error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    if (res.headersSent) {
        return next(err);
    }

    // set locals, only providing error in development.
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    res.status(err.status || 500).json({ "error": err.status || 500 });
    res.send();
});


module.exports.app = app;