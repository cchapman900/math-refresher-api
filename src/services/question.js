const Question = require('../models/question');

class QuestionService {
  constructor(db) {
    this.db = db;
  }

  async question(id) {
    const questionResponse = await Question.findOne({firstNumber: id});

    console.log(questionResponse)

    return questionResponse;
  }
}

module.exports = QuestionService;