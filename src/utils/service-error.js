const { StatusCodes } = require('http-status-codes');
class ServiceError extends Error{
    constructor(message = 'Something went wrong',
         explanation ='Something wrong in the service', 
         statusCode = StatusCodes.INTERNAL_SERVER_ERROR){
        super(message);
        this.explanation = explanation;
        this.statusCode = statusCode;
    }
};

module.exports = ServiceError;