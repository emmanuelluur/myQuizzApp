/**
 * Written by Emmanuel Lucio Urbina
 */
const model = require('../model/quizModel');
const Op = model.Operators;
const quizz = model.Quiz;


exports.getIndex= (req, res) => {

    quizz.findAll()
    .then((quizzes) => res.render("index", {title: "QuizMVC", message: "MVC: Quizzes", author: "Emmanuelluur", quiz: quizzes}) )
    .then(()=> console.log(`Response Code for Index ${res.statusCode}`))
    .catch((error) => `DB Error:\n${error}`);
    
}

