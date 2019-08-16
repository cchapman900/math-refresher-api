const mongoose = require('mongoose');

const schema = new mongoose.Schema({ firstNumber: 'number', secondNumber: 'number', answer: 'number', operation: 'string' });

const question = mongoose.model('Question', schema);

module.exports = question;