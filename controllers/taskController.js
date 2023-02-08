const services = require('../services/taskService');
const joi = require('joi');

exports.getHomePage = (req, res) => {
  res.send('Hello World!');
};

exports.getAlltasks = async (req, res) => {
  try {
    const result = await services.getAllTasks();
    res.json({data: result});
  } catch (err) {
    res.status(500).json({message: err.message});
  }  
};

exports.getTaskById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await services.getTaskById(id);
    res.json({result});
  }
  catch (err) {
    res.status(500).json({message: err.message});
  }
};

exports.postTask = async (req, res) => { 
  try {
    let task = req.body;
    task['isCompleted'] = false;
    const result = await services.postTask(task);
    res.send(result);
  }
  catch (err) {
    res.status(500).json({message: err.message});
  }
};

exports.updateTask = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await services.updateTask(id);
    res.json({result});
  }
  catch (err) {
    res.status(500).json({message: err.message});
  }
};

exports.deleteCompletedTasks = async (req, res) => {
  try {
    await services.deleteCompletedTasks();
    res.json({message: 'All completed tasks deleted'});
  }
  catch (err) {
    res.status(500).json({message: err.message});
  }
};
