const models = require("../models");


exports.index = (req, res, next) => {
	const quizzes = models.quiz.findAll();

	res.render("quizzes/index.ejs", {quizzes});
};

exports.show = (req, res, next) => {
	const quizId = Number(req.params.quizId);
	const quiz = models.quiz.findById(quizId);

	if(quiz) {
		res.render("quizzes/show", {quiz});
	} else {
		next(new Error("No exite un quiz con id= " + quizId));
	}
	
};