const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;

const isAuth = (request,response, next) => {
    // extract authorization header
    const authHeader = request.headers.authorization;
    if(!authHeader) {
        request.isAuth = false;
        return next();
    };

    let token = null;
    if (authHeader && authHeader.split(' ')[0] === 'Bearer') { 
        token = authHeader.split(' ')[1];
    } else if (request.query && request.query.token) {
        token = request.query.token;
    } else if (request.cookies && request.cookies.token) {
        token = request.cookies.token;
    }

    if(!token || token === "") {
        request.isAuth = false;
        return next();
    }

    let decodedToken;
    try {
        decodedToken = jwt.verify(token, SECRET_KEY);
    }catch(err) {
        request.isAuth = false;
        return next();
    }

    request.isAuth = true;
    request.userId = decodedToken._id;
    next();
}