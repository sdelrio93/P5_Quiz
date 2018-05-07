const modelos = require('../models/index.js');

exports.index = (req, res, next) =>{

    modelos.models.quiz.findAll()
    .then(quizzes =>{

        res.render("quizzes", {quizzes})
    })
    .catch(error => next(error));

}