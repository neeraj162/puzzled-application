const express = require('express');
const router = express.Router();
const Game = require('../models/Game');
const fetchUser = require('../middleware/fetchUser');
const _ = require('lodash');


// Route 1: Create a Game storage which tracks information using POST "/game/update". Required to be authenticated.

router.post('/update', fetchUser, async (req, res) => {

    try {
        const { solution_found, total_time, final_score, clues_found, dead_ends } = req.body;
        const game = new Game({
            user: req.user.id,
            solution_found,
            total_time,
            final_score,
            clues_found,
            dead_ends
        })
        const savedGame = await game.save()
        res.json(savedGame);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error occured");
    }
})

// ROUTE 2: Get all game histories of a user using GET "/game/fetch". Required to be authenticated.
router.get('/fetch', fetchUser, async (req, res) => {
    try {
        const games = await Game.find({ user: req.user.id });
        res.json(games)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error occured");
    }
})

// Route 3: Get leaderboard details using: GET "/game/leaderboard". Login required
router.get('/leaderboard', async (req, res) => {
    try {
        // Retrieve the game data and populate the associated user data
        const games = await Game.find()
            .populate('user', 'name')
            .select('user final_score total_time')
            .lean();

        // Group the game data by user ID and compute the max score and min time for each user
        const userStats = _(games)
            .groupBy('user._id')
            .mapValues((games) => ({
                name: games[0].user.name,
                maxScore: _.maxBy(games, 'final_score').final_score,
                minTime: _.minBy(games, 'total_time').total_time,
            }))
            .values()
            .sortBy(({ maxScore, minTime }) => [-maxScore, minTime])
            .value();

        // Return the leaderboard data
        const leaderboard = userStats.map(({ name, maxScore, minTime }) => ({
            name,
            final_score: maxScore,
            total_time: minTime,
        }));

        leaderboard.sort((a, b) => {
            if (a.final_score > b.final_score) {
                return -1;
            } else if (a.final_score < b.final_score) {
                return 1;
            } else {
                const aTime = a.total_time.split(':');
                const bTime = b.total_time.split(':');
                const aMinutes = parseInt(aTime[0]);
                const bMinutes = parseInt(bTime[0]);
                const aSeconds = parseInt(aTime[1]);
                const bSeconds = parseInt(bTime[1]);
                if (aMinutes < bMinutes) {
                    return -1;
                } else if (aMinutes > bMinutes) {
                    return 1;
                } else {
                    if (aSeconds < bSeconds) {
                        return -1;
                    } else if (aSeconds > bSeconds) {
                        return 1;
                    } else {
                        return 0;
                    }
                }
            }
        });

        // console.log(leaderboard);
        res.json(leaderboard);



    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error occured");
    }
})

module.exports = router