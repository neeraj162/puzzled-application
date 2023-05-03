const express = require('express');
const router = express.Router();
const Game = require('../models/Game');
const User = require('../models/User');
const fetchAdmin = require('../middleware/fetchUser');

// ROUTE 1: Get all users and their games using GET "/admin/fetch". Required to be authenticated.
router.get('/fetch', fetchAdmin, async (req, res) => {
    try {
        const usersWithTodos = await Game.find().populate({
            path: 'user',
            select: '-password'
          });
        res.json(usersWithTodos);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error occured");
    }
})

module.exports = router;