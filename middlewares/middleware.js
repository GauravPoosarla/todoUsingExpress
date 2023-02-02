const schema = require('./schema');
const Joi = require('joi');

exports.validatePostTask = (req, res, next) => {
  const { error, value } = schema.postTaskSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
}

exports.validateUpdateTask = (req, res, next) => {
  const { error } = schema.updateTaskSchema.validate(req.params);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
}

exports.validateGetTaskById = (req, res, next) => {
  const { error } = schema.getTaskByIdSchema.validate(req.params);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
}
