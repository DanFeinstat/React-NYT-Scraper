const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Article.find(req.query)
      .sort({ date: -1 })
      .then(results => res.json(results))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body);
    db.Article.create(req.body)
      .then(results => res.json(results))
      .catch(err => res.status(422).json(err));
  },
  deleteArticle: function(req, res) {
    db.Article.deleteOne({ _id: req.params.id })
      .then(results => res.json(results))
      .catch(err => res.status(422).json(err));
  },
};
