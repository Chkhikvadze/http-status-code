var debug = require('debug')('status-code');

module.exports = [
    require('./responses/badRequest'),
    require('./responses/created'),
    require('./responses/forbidden'),
    require('./responses/notFound'),
    require('./responses/ok'),
    require('./responses/serverError'),
    require('./responses/unauthorized'),
    require('./responses/tokenExpired'),
    require('./responses/conflict')
].map(function (desc) {
    return function (req, res, next) {
        res[desc.name] = function (data, code, message) {
            if (data instanceof Error) {
                // log error 
                debug(data);
                
                // clear data variable, do not send it to client
                data = undefined;
            }

            var response = {
                code: code || desc.code,
                message: message || desc.message,
                data: data || desc.data
            };

            return res.status(desc.status).json(response);
        };

        next();
    };
});