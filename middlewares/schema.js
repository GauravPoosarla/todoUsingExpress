const Joi = require('joi');

exports.postTaskSchema = Joi.object({
  taskName: Joi.string().min(3).required()
});

exports.updateTaskSchema = Joi.object({
  id: Joi.number().required()
});

exports.getTaskByIdSchema = Joi.object({
  id: Joi.number().required()
});
