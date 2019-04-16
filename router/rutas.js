/**
 * Written by Emmanuel Lucio Urbina
 */
const express = require('express');
const router = express.Router();
const index = require('../controller/indexController');
const quiz = require('../controller/quizController');

router.get('/', index.getIndex)
router.get('/quiz/new', quiz.setQuestion);
router.get('/quiz/edit/:id', quiz.editQuestion);
router.get('/quiz/play/:id', quiz.playController);
// post

router.post('/create/quiz', quiz.createController);
router.post('/update/quiz', quiz.updateController);
router.post('/delete/quiz', quiz.deleteController);

// post check answer

router.post('/quiz/check', quiz.checkController);
// 404 error
router.get('*', (req, res) => {
    res.render('404', {
        title: "QuizMVC",
        author: "Emmanuelluur",

        id:"",
        question: "",
        answer: ''
    });
});
module.exports = router;