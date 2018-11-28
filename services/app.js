"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compression = require("compression");
const express = require("express");
const path = require("path");
const helmet = require("helmet");
const index_1 = require("./src/app/config/index");
const status_error_1 = require("./src/app/errors/status_error");
const index_2 = require("./src/app/routes/index");
const patient_routes_1 = require("./src/app/routes/patient_routes");
const auth_routes_1 = require("./src/app/routes/auth_routes");
const user_routes_1 = require("./src/app/routes/user_routes");
const master_routes_1 = require("./src/app/routes/master_routes");
const report_routes_1 = require("./src/app/routes/report_routes");
const barcode_routes_1 = require("./src/app/routes/barcode_routes");
const note_routes_1 = require("./src/app/routes/note_routes");
const payment_routes_1 = require("./src/app/routes/payment_routes");
const location_routes_1 = require("./src/app/routes/location_routes");
const case_routes_1 = require("./src/app/routes/case_routes");
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
app.use("/", index_2.default);
app.use("/", patient_routes_1.default);
app.use("/", auth_routes_1.default);
app.use("/", user_routes_1.default);
app.use("/", master_routes_1.default);
app.use("/", report_routes_1.default);
app.use("/", barcode_routes_1.default);
app.use("/", note_routes_1.default);
app.use("/", location_routes_1.default);
app.use("/", payment_routes_1.default);
app.use("/", case_routes_1.default);
app.set("port", index_1.port);
app.listen(index_1.port);
// 404 - error handler
app.use((_req, _res, next) => {
    next(new status_error_1.default("Not Found", 404));
});
// 500 - error handler
app.use((err, req, res, next) => {
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
//# sourceMappingURL=app.js.map