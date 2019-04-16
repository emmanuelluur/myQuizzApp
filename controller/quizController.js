const model = require('../model/quizModel');
const Op = model.Operators;
const quizz = model.Quiz;

exports.editQuestion = (req, res) => {
    quizz.findOne({
        where: { id: req.params.id }
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
exports.createController = (req, res) => {
    let newQuiz = quizz.build(req.fields);
    newQuiz.save()
        .then(() => res.send('Guardado Correctamente!'))
        .catch((err) => { console.log(err); })
}

exports.updateController = (req, res) => {
    let idQuiz = req.fields.quizid

    quizz.update({
        question: req.fields.question,
        answer: req.fields.answer
    }, {
            where: { id: idQuiz }
        })
        .then(() => res.send('Actualizado Correctamente!'))
        .catch((err) => { console.log(err); })
}

exports.deleteController = (req, res) => {
    //  console.log(req.fields) muestra en linea de comandos los campos
    quizz.destroy({
        where: {
            id: req.fields.quizid
        }
    }).then(() => {
        res.send();
    });
}
exports.setQuestion = (req, res) => {
    res.render('setQuiz', {
        title: "QuizMVC",
        author: "Emmanuelluur",
        message: "Nueva Pregunta",
        event: "create",
        id: null,
        question: "",
        answer: ""
    });
}