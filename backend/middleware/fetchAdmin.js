const jwt = require('jsonwebtoken');
const User = require('../models/User')

const fetchAdmin = async (req, res, next) => {
    // get the user from the jwtToken and add id to request object
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" });
    }
    try {
        const data = jwt.verify(token, process.env.JWT_SECRET);
        req.user = data.user;
        const user = await User.findById(req.user.id);
        if(user.role === 'admin'){
            next()
        }
        else{
            res.status(401).send({ error: "Please authenticate using a valid token" });
        }
        
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" });
    }
}
module.exports = fetchAdmin;