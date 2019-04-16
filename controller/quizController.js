const model = require('../model/quizModel');
const Op = model.Operators;
const quizz = model.Quiz;

exports.editQuestion =  (req, res) => {
    quizz.findOne({
        where : { id: req.params.id}
    }).then(response => {
        res.render('setQuiz', {
            title: "QuizMVC",
            author: "Emmanuelluur",
            message: "Nueva Pregunta", 
            event: "update", 
            id: response.id, 
            question: response.question, 
            answer: response.answer
        });
    }).catch(() =>
        res.send("No existe en BD")
    );
}


exports.setQuestion = (req, res) => {
    res.render('setQuiz', {
        title: "QuizMVC",
        author: "Emmanuelluur",
        message: "Nueva Pregunta", 
        event: "create", 
        id:null, 
        question:"", 
        answer:""
    });
}