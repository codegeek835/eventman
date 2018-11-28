"use strict";
/**
 * Normalize a port into a number, string, or false.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function normalizePort(val) {
    const parsedPort = parseInt(val, 10);
    if (isNaN(parsedPort)) {
        return val;
    }
    if (parsedPort >= 0) {
        // port number
        return parsedPort;
    }
    return false;
}
exports.port = normalizePort(process.env.PORT || "1339");
//# sourceMappingURL=index.js.map