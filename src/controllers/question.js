'use strict';
const helper = require('./_helper');
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

  const response = await questionService.question(questionId);

  return helper.createResponse(200, response);

};
