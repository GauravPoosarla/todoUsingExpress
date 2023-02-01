const db = require('../database/models');

exports.getAllTasks = async () => {
  const result = await db.Tasks.findAll();
  return result;
}

exports.getTaskById = async (id) => {
  let userFound = await db.Tasks.findOne({where: {id: id}});
  return userFound;
}

exports.postTask = async (task) => {
  const result = await db.Tasks.create(task);
  return result;
}

exports.updateTask = async (id) => {
  const result = await db.Tasks.update({isCompleted: true},{where: {id: id}});
  return result;
}

exports.deleteCompletedTasks = async () => {
  await db.Tasks.destroy({where: {isCompleted: true}});
}