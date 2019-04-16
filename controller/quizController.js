/**
 * Written by Emmanuel Lucio Urbina
 */
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
    })
        .then(() => console.log(`Response Code for Edit ${res.statusCode}`))
        .catch(() =>
            res.send("No existe en BD")
        );
}
exports.createController = (req, res) => {
    let newQuiz = quizz.build(req.fields);
    newQuiz.save()
        .then(() => res.send('Guardado Correctamente!'))
        .then(() => console.log(`Response Code ${res.statusCode}`))
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
        .then(() => console.log(`Response Code ${res.statusCode}`))
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
    new Promise((resolve, reject)=>{
        res.render('setQuiz', {
            title: "QuizMVC",
            author: "Emmanuelluur",
            message: "Nueva Pregunta",
            event: "create",
            id: null,
            question: "",
            answer: ""
        })
        resolve();
    })
    .then(() => console.log(`Response Code  ${res.statusCode}`));
}

exports.playController = (req, res) => {
    quizz.findOne({
        where: { id: req.params.id }
    }).then(response => {
        res.render('play', {
            title: "QuizMVC",
            author: "Emmanuelluur",

            id: response.id,
            question: response.question,
            answer: ''
        });
    })
        .then(() => console.log(`Response Code  ${res.statusCode}`))
        .catch(() =>
            res.send("No existe en BD")
        );
}

exports.checkController = (req, res) => {
    let clientanswer = req.fields.answer;
    quizz.findOne({
        where: { id: req.fields.quizid }
    }).then(response => {
        let answerdb = response.answer;
        (clientanswer == answerdb) ?
            res.send({ msg: `La respuesta ${clientanswer} es Correcta`, class: 'alert alert-success' }) :
            res.send({ msg: `La respuesta ${clientanswer} es Incorrecta`, class: 'alert alert-danger' });
    })
        .then(() => console.log(`Response Code ${res.statusCode}`))
        .catch(() =>
            res.send("No existe en BD")
        );
}