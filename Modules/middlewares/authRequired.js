const jwt = require('jsonwebtoken');

exports.authRequired =  (req, res, next) => {
    const authorization = req.headers.authorization;
    console.log(req.headers);
    if (!authorization) {   return 
        res.status(402).json({ Error: "Missing authorization header"}); }

        const token = authorization.split(" ")[1];
        if (!token) {   return  res.status(402).json({ Error:"Please provide a valid authorization"}); }

        //const decoded = jwt.verify(token, process.env.JWT_SECRET);
// alternative code above can be used to verify the authorization
        const user = jwt.verify(token, 'e81b2d8db76edd0c42ee7b3e4dbeb168');

        req.user = user;
        console.log(user);

    next();

};
