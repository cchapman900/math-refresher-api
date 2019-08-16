const Question = require('../models/question');

class QuestionService {
  constructor(db) {
    this.db = db;
  }

  async getQuestions(params) {

    let filter = params.operation ? { operation: params.operation } : null

    return await Question.find(filter);
  }

  async getQuestion(id) {
    return await Question.findOne({firstNumber: id});
  }
}

module.exports = QuestionService;