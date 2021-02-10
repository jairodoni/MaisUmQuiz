const mongoose = require('../database');

const QuizSchema = new mongoose.Schema({
  bg:{
    type: String,
    require: true,
  },
  title:{
    type: String,
    require: true,
  },
  description:{
    type: String,
    require: true,
  },
  questions:[{
    type: String,
    require: true,
  }],
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true,
  },
  createdAt: {
    type:Date,
    default: Date.now,
  },
});

const Quiz = mongoose.model("Quiz", QuizSchema);

module.exports = Quiz;