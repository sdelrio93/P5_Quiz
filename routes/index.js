var express = require('express');
var router = express.Router();

const Sequelize=require("sequelize");
const models=require("../models");
const quizController = require("../controllers/quiz");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

// Get controla creditos
router.get('/credits', function(req, res, next) {
    res.render('credits', { title: 'Quiz' });
});

// Get controla quizzes
router.get('/quizzes', quizController.index);

module.exports = router;
