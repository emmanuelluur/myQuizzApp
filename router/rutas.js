const express = require('express');
const router = express.Router();
const index = require('../controller/indexController');
const quiz = require('../controller/quizController');

router.get('/', index.getIndex)
router.get('/quiz/new', quiz.setQuestion);
router.get('/quiz/edit/:id', quiz.editQuestion);
// post

router.post('/create/quiz', quiz.createController);
router.post('/update/quiz', quiz.updateController);
router.post('/delete/quiz', quiz.deleteController);
// 404 error
router.get('*', (req, res)=>{
    res.send("404 Recurso no encontrado");
});
module.exports = router;