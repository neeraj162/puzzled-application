const mongoose = require('mongoose');
const { Schema } = mongoose;

const GameSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    solution_found:{
        type: Boolean,
        default: false,
    },
    total_time:{
        type: String,
    },
    final_score: {
        type: Number,
    },
    clues_found:[{
        clue_id: {
            type: Number,
        },
        description: {
            type: String,
        },
        time:{
            type: String,
        },
        attempts:{
            type:Number,
            default: 1,
        },
        score:{
            type:Number
        }
    }],
    dead_ends:{
        type: Number,
        default: 0,
    },
})

module.exports = mongoose.model('game',GameSchema)