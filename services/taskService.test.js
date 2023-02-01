const service = require('./taskService');
const model = require('../database/models');

describe('getAllTasks', () => {
  it('should return all tasks', async () => {
    jest.spyOn(model.Tasks, 'findAll').mockResolvedValue([{
      id: 1,
      task: 'task1',
      isCompleted: false
    },
    {
      id: 2,
      task: 'task2',
      isCompleted: false
    }]);
    const result = await service.getAllTasks();
    expect(result).toEqual([{
      id: 1,
      task: 'task1',
      isCompleted: false
    },
    {
      id: 2,
      task: 'task2',
      isCompleted: false
    }]);
  });
});

describe('getTaskById', () => {
  it('should return task with id 1', async () => {
    jest.spyOn(model.Tasks, 'findOne').mockResolvedValue({
      id: 1,
      task: 'task1',
      isCompleted: false
    });
    const result = await service.getTaskById(1);
    expect(result).toEqual({
      id: 1,
      task: 'task1',
      isCompleted: false
    });
  });
});

describe('postTask', () => {
  it('should post a task', async () => {
    jest.spyOn(model.Tasks, 'create').mockResolvedValue({
      id: 1,
      task: 'task1',
      isCompleted: false
    });
    const result = await service.postTask({
      id: 1,
      task: 'task1',
      isCompleted: false
    });
    expect(result).toEqual({
      id: 1,
      task: 'task1',
      isCompleted: false
    });
  });
});

describe('updateTask', () => {
  it('should update a task', async () => {
    jest.spyOn(model.Tasks, 'update').mockResolvedValue([1]);
    const result = await service.updateTask(1);
    expect(result).toEqual([1]);
  });
});

// deleteCompletedTasks