"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StatusError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}
exports.default = StatusError;
//# sourceMappingURL=status_error.js.map