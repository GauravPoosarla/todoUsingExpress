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
  const id = req.params.id;
  const result = await services.getTaskById(id);
  res.json({result});
};

exports.postTask = async (req, res) => { 
  let task = req.body;
  task['isCompleted'] = false;
  const result = await services.postTask(task);
  res.send(result);
};

exports.updateTask = async (req, res) => {
  const id = req.params.id;
  const result = await services.updateTask(id);
  res.json({result});
};

exports.deleteCompletedTasks = async (req, res) => {
  await services.deleteCompletedTasks();
  res.json({message: 'All completed tasks deleted'});
};
