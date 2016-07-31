# HTTP Status Codes
Access the status codes you need, with the protocol being used. If no protocol is given, all status codes are used.

## Install
```
npm install http-status-code-lib --save
```

## Usage
```javascript

// register responses
require('http-status-code-lib').forEach(function (response) {
    app.use(response);
});

function login(req, res){
    res.ok({});         // 400 - Operation is successfully executed    
    res.created();      // 402 - The request has been fulfilled and resulted in a new resource being created
    res.forbidden();    // 403 - User not authorized to perform the operation
    res.bedRequest({}); // 400 - The request cannot be fulfilled due to bad syntax
    res.unauthorized(); // 401 - Missing or invalid authentication token
    res.tokenExpired(); // 401 - Not found
    res.forbidden();    // 403 - orbidden
    res.serverError();  // 500 - Something bad happened on the server
    res.notMatched();   // 403 - User id not matches the current user
    res.conflict();     // 409 - Duplicate item
};

res.ok({}) => return :{  
                status: 200,
                code: "OK",
                message: 'Operation is successfully executed',
                data: { }
           }
           
res.created({}) => return :{
             status: 201,
             code: 'CREATED',
             message: 'The request has been fulfilled and resulted in a new resource being created',
             data: {}
           };
           
res.notFound({}) => return :{
             status: 404,
             code: 'E_NOT_FOUND',
             message: 'The requested resource could not be found but may be available again in the future',
             data: {}
           };
```

## Protocols

#### Status Codes
- 200: OK
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 401: Token has been expired
- 403: Forbidden
- 403: Not matched
- 404: Not Found
- 409: Conflict
- 500: Internal Server Error