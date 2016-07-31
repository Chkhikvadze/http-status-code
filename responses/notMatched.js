/**
 * 403 (Forbidden) Response
 *
 * The request was a legal request, but the server is refusing to respond to it.
 * Unlike a 401 Unauthorized response, authenticating will make no difference.
 * Error code for user not authorized to perform the operation or the resource is unavailable for some reason.
 */

module.exports = {
  status: 403,
  name: 'forbidden',
  code: 'E_NON_MATCHED',
  message: 'User id not matches the current user',
  data: {}
};