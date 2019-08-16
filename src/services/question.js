const Question = require('../models/question');

class QuestionService {
  constructor(db) {
    this.db = db;
  }

  async question(id) {
    const questionResponse = await Question.findOne({firstNumber: id});

    return questionResponse;
  }
}

module.exports = QuestionService;