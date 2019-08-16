const Question = require('../models/test');

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