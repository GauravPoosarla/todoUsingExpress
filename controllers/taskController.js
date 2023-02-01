const services = require('../services/taskService');
const joi = require('joi');

exports.getHomePage = (req, res) => {
  res.send('Hello World!');
};

exports.getAlltasks = async (req, res) => {
  const result = await services.getAllTasks();
  res.json({data: result});
};

exports.getTaskById = async (req, res) => {
  const schema  = joi.object({
    id: joi.number().required()
  });

  const id = req.params.id;
  const {error} = schema.validate({id});
  if (error) {
    res.status(400).json({message: error.details[0].message});
    return;
  }
  const result = await services.getTaskById(id);
  res.json({result});
};

exports.postTask = async (req, res) => { 
  const schema  = joi.object({
    taskName: joi.string().required()
  });
  let task = req.body;
  const {error} = schema.validate(task);
  if (error) {
    res.status(400).json({message: error.details[0].message});
    return;
  }
  console.log(task);
  task['isCompleted'] = false;
  const result = await services.postTask(task);
  res.send(result);
};

exports.updateTask = async (req, res) => {
  const schema = joi.object({
    id: joi.number().required()
  });
  const id = req.params.id;
  const {error} = schema.validate(id);
  if (error) {
    res.status(400).json({message: error.details[0].message});
    return;
  }
  const result = await services.updateTask(id);
  res.json({result});
};

exports.deleteCompletedTasks = async (req, res) => {
  await services.deleteCompletedTasks();
  res.json({message: 'All completed tasks deleted'});
};
