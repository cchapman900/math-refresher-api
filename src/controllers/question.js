'use strict';
const createResponse = require('./_helper').createResponse;
const QuestionService = require('../services/question');

const db = require('../utils/db').connect();

let questionService = new QuestionService(db);

/**
 * Get Question
 * @param {{
 *   pathParameters: {
 *     questionId: string
 *   }
 * }} event
 * @returns {Promise<{statusCode}>}
 */
module.exports.getQuestion = async event => {

  const questionId = event.pathParameters.questionId;

  const response = await questionService.getQuestion(questionId);

  if (response) {
    return createResponse(200, response);
  } else {
    return createResponse(404, `Could not find question with id: ${questionId}`);
  }
};
