const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String
    },
    picture: {
        type: String
    },
    youtube: {
        type: String
    },
    description: {
        type: String
    },
    rating: {
        type: Array
    },
    comments: {
        type: Array
    },
    genre: {
        type: String
    }
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;