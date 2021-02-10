const express = require('express');
const routes = express.Router();

const QuizController = require('./controllers/QuizController');
const QuizListController = require('./controllers/QuizListController');
//Cadastro e Login
routes.get('/quizzes', QuizListController.index);
routes.get('/quizzes/:quizId', QuizListController.show);
routes.post('/quiz', QuizController.store);
routes.put('/quiz/:quizId', QuizController.update);
routes.delete('/quiz/?quizId', QuizController.destroy);