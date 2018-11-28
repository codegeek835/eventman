"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonfile = require("jsonfile");
let configName = process.env.NODE_ENV || 'development';
let config = jsonfile.readFileSync(`${__dirname}/etc/${configName}.json`);
exports.default = config;
//# sourceMappingURL=config.js.map