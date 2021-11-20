const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

verifyToken = (req, res, next) => {

    console.log(req.headers);

    // Comprobar que existe el token
    if (!req.headers.authorization) {
        res.status(401).json({ msg: "Acceso no autorizado" });
    } else {

        // Comrpobar la validez de este token
        let token = req.headers.authorization.split(" ")[1];

        // Comprobar la validez de este token
        jwt.verify(token, authConfig.secret, (err, decoded) => {

            if (err) {
                res.status(500).json({ msg: "Ha ocurrido un problema al decodificar el token", err });
            } else {
                req.user = decoded;
                next();
            }

        })
    }

};

isAdmin = (req, res, next) => {

    console.log(req.headers);

    // Comprobar que existe el token
    if (!req.headers.authorization) {
        res.status(401).json({ msg: "Unauthorized Access" });
    } else {

        // Comprobar la validez de este token
        let token = req.headers.authorization.split(" ")[1];

        // Comprobar la validez de este token
        jwt.verify(token, authConfig.secret, (err, decoded) => {

            if (!decoded.user.admin) {
                res.status(500).json({ msg: "you are not an admin", err });
            } else {
                req.user = decoded;
                next();
            }

        })
    }

};

const authJwt = {
    verifyToken: verifyToken,
    isAdmin: isAdmin
};
module.exports = authJwt;