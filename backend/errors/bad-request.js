const { StatusCodes } = require("http-status-codes");

const CustomAPIError = require("./custom-api");

class BAD_REQUESTError extends CustomAPIError {
  constructor(message) {
    super(message);

    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BAD_REQUESTError;
