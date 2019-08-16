/**
 * Create a response
 * @param statusCode
 * @param message
 */

module.exports.createResponse = (statusCode, message) => {
  let response = {
    statusCode: statusCode
  };

  if (message) {
    response.body = JSON.stringify(message);
  }

  return response
};