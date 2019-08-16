const Question = require('../models/question');

class QuestionService {
  constructor(db) {
    this.db = db;
  }

  async getQuestion(id) {
    return await Question.findOne({firstNumber: id});
  }
}

module.exports = QuestionService;