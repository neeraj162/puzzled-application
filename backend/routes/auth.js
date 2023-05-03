const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchUser');


// Route 1: Create a user using POST "/auth/createUser". Doesnt require to be authenticated
router.post('/createUser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 6 characters').isLength({ min: 6 }),

], async (req, res) => {
    let success = false;

    // If there are errors return bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({success, errors: errors.array() });
    }



    try {
        // Check whether the user with this email exists already
        let user1 = await User.findOne({ email: req.body.name });
        if (user1) {
            return res.status(409).json({success, errors: 'Sorry a user exists with this name' })
        }
        
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(409).json({success, errors: 'Sorry a user exists with this email' })
        }

        // password to hash
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        // create a new User
        user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email,
            role: req.body.role,
        })


        // sending jwt token as response
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, process.env.JWT_SECRET);
        success=true;
        res.json({success,role:user.role, authToken: authToken });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error occured");
    }

})



// Route 2: Authenticate a user using: POST "auth/login". No login required
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
    // If there are errors return bad request and errors
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({success, errors: errors.array() });
    }

    // destructuring email and password from request
    const { email, password } = req.body;

    try {
        // Finding if user exists from email
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({success, error: "Please enter valid credentials" });
        }

        // validating password
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({success, error: "Please enter valid credentials" });
        }

        // sending jwt token as response
        const data = {
            user: {
                id: user.id
            }
        }

        const authToken = jwt.sign(data, process.env.JWT_SECRET);
        success=true;
        res.json({success, name:user.name, role:user.role, authToken: authToken });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error occured");
    }

})


module.exports = router