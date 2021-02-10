const express = require('express');
const authMiddleware = require('../app/middlewares/auth')

const Quiz = require('../models/quiz');

const router = express.Router();

router.use(authMiddleware);

module.exports ={
  async index(req,res) {
    try {
      const quizzes = await Quiz.find().populate(['user']);
  
      return res.send({ quizzes });
    } catch (error) {
      return res.status(400).send({ error: 'Erro loading quiz' });
    }
  },

  async show(req,res) {
    try {
      const quizzes = await Quiz.findById(req.params.quizId).populate('user');
  
      return res.send({ quizzes });
    } catch (error) {
      return res.status(400).send({ error: 'Erro loading quiz' });
    }
  }
}

