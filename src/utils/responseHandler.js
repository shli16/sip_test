// /utils/responseHandler.js

/**
 * Send a success response with data.
 * @param {object} res - Express response object.
 * @param {number} statusCode - HTTP status code (default = 200).
 * @param {any} data - The data to send in the response.
 */
function sendSuccess(res, statusCode = 200, data = {}) {
    return res.status(statusCode).json({
      success: true,
      data
    });
  }
  
  /**
   * Send an error response with a message.
   * @param {object} res - Express response object.
   * @param {number} statusCode - HTTP status code (default = 400).
   * @param {string} message - Error message.
   */
  function sendError(res, statusCode = 400, message = "An error occurred") {
    return res.status(statusCode).json({
      success: false,
      error: message
    });
  }
  
  module.exports = {
    sendSuccess,
    sendError
  };
  