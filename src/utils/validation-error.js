const {StatusCodes} = require('http-status-codes');
class ValidationError extends Error {
    constructor(error) {
        let explanation = [];
        error.errors.forEach((err) => {
            explanation.push(err.message);
        });
        this.name = "ValidationError";
        this.message = 'Not able to validate the data sent in the Request';
        this.explanation = explanation;
        this.StatusCodes = StatusCodes.BAD_REQUEST;
    }
}

module.exports = ValidationError;