// const express = require('express');
// const authMiddleware = require('../middlewares/auth')

const Quiz = require('../models/quiz');

// const router = express.Router();

// router.use(authMiddleware);

module.exports ={
  async store(req,res) {
    try {
      const { title, bg, description, questions } = req.body;
  
      const quizzes = await Quiz.create({ title, bg, description, questions, user: req.userId});
  
      await quizzes.save();
  
      return res.send({ quizzes });
    } catch (err) {
      return res.status(400).send({ error: 'Error creating new quiz' });
    }
  },

  async update(req,res) {
    try {
      const { title, bg, description, questions } = req.body;
  
      const quizzes = await Quiz.findByIdAndUpdate(req.params.quizId,{ 
        title,
        bg,
        description,
        questions,
      },  { new: true });
  
      await quizzes.save();
  
      return res.send({ quizzes });
    } catch (err) {
      return res.status(400).send({ error: 'Error updating quiz' });
    }
  },
  async destroy(req,res) {
    try {
      await Quiz.findByIdAndRemove(req.params.quizId);
      
      return res.send();
    } catch (err) {
      return res.status(400).send({ error: 'Erro deleting quiz' });
    }
  }
}