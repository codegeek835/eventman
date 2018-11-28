import * as jsonfile from "jsonfile";

let configName = process.env.NODE_ENV || 'development';

let config = jsonfile.readFileSync(`${__dirname}/etc/${configName}.json`);

export default config;