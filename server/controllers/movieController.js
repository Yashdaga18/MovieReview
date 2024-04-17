const db = require("../models");
const auth = require("../middleware/auth");

module.exports = {
  getSavedMovies: function (req, res) {
    const genre = req.query.genre
    if (!genre) {

      db.Movie.find({}).then(dbMovieData => res.json(dbMovieData)).catch(err => {
        console.log(err);
        res.json(err);
      });
    }
    else {
      db.Movie.find({ genre: genre }).then(dbMovieData => res.json(dbMovieData)).catch(err => {
        console.log(err);
        res.json(err);
      });
    }
  },

  saveMovie: function (req, res) {
    db.Movie.create(req.body).then(dbMovieData => res.json(dbMovieData)).catch(err => {
      console.log(err);
      res.json(err);
    });
  },
  removeMovie: function (req, res) {


    db.Movie.remove({
      _id: req.params.id
    }).then(dbMovieData => res.json(dbMovieData)).catch(err => {
      console.log(err);
      res.json(err);
    });
  },
  updateMovie: function (req, res) {
    db.Movie.findOneAndUpdate({ _id: req.params.id }, { $push: req.body })
      .then(dbMovieData => res.json(dbMovieData)).catch(err => {
        console.log(err);
        res.json(err);
      });
  }
};

