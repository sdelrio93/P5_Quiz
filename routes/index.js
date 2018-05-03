var express = require('express');
var router = express.Router();

const Sequelize=require("sequelize");
const models=require("../models");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

// Get controla creditos
router.get('/credits', function(req, res, next) {
    res.render('credits', { title: 'Quiz' });
});

// Get controla quizzes
router.get('/quizzes', (req, res, next) => {
    models.quiz.findAll()
    .then(quizzes => {
        res.render("quizzes", {quizzes})
    })
    .catch(error => next(error));
    }
);

module.exports = router;
