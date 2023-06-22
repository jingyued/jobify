import { StatusCodes } from 'http-status-codes'
import CustomAPIError from './custom-api.js'

// The ErrorResponse class has a property called message
// that holds the message that will be sent to the user in the event of an error.
class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.BAD_REQUEST
  }
}

export default BadRequestError
