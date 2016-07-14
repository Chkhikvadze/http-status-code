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
    res.ok({}); // > OK
    res.bedRequest({}); // > Bed request
    res.notFound(); // > Not found
    res.forbidden(); // > Forbidden
};

result :
{
code: "OK",
message: "API server is working",
data: { }
}
```

## Protocols

#### Status Codes
- 200: OK
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 401: Token has been expired
- 403: Forbidden
- 404: Not Found
- 409: Conflict
- 500: Internal Server Error