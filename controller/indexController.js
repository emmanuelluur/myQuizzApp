const model = require('../model/quizModel');
const Op = model.Operators;
const quizz = model.Quiz;


exports.getIndex= (req, res) => {

    quizz.findAll()
    .then((quizzes) => res.render("index", {title: "QuizMVC", message: "MVC: Quizzes", author: "Emmanuelluur", quiz: quizzes}) )
    .catch((error) => `DB Error:\n${error}`);
    
}

