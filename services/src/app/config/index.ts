
/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val: string) {
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

export const port = normalizePort(process.env.PORT || "1339");



