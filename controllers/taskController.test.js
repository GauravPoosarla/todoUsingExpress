const services = require('../services/taskService');
const controllers = require('./taskController');

describe('getAllTasks', () => {
  it('should return all tasks', async () => {
    jest.spyOn(services, 'getAllTasks').mockResolvedValue([{
      id: 1,
      task: 'task1',
      isCompleted: false
    },
    {
      id: 2,
      task: 'task2',
      isCompleted: false
    }]);
    const mockreq = {};
    const mockres = {
      json: jest.fn()
    };
    await controllers.getAlltasks(mockreq, mockres);
    expect(mockres.json).toHaveBeenCalledWith({
      data: [{
        id: 1,
        task: 'task1',
        isCompleted: false
      },
      {
        id: 2,
        task: 'task2',
        isCompleted: false
      }]
    });
  });
});

describe('getTaskById', () => {
  it('should return task with id 1', async () => {
    jest.spyOn(services, 'getTaskById').mockResolvedValue({
      id: 1,
      task: 'task1',
      isCompleted: false
    });
    const mockreq = {
      params: {
        id: 1
      }
    };
    const mockres = {
      json: jest.fn()
    };
    await controllers.getTaskById(mockreq, mockres);
    expect(mockres.json).toHaveBeenCalledWith({
      result: {
        id: 1,
        task: 'task1',
        isCompleted: false
      }
    });
  });
});

describe('postTask', () => {
  it('should post a task', async () => {
    jest.spyOn(services, 'postTask').mockResolvedValue({
      id: 1,
      task: 'task1',
      isCompleted: false
    });
    const mockreq = {
      body: {
        task: 'task1'
      }
    };
    const mockres = {
      send: jest.fn()
    };
    await controllers.postTask(mockreq, mockres);
    expect(mockres.send).toHaveBeenCalledWith({
      id: 1,
      task: 'task1',
      isCompleted: false
    });
  });
});

describe('updateTask', () => {
  it('should update task with id 1', async () => {
    jest.spyOn(services, 'updateTask').mockResolvedValue([1]);
    const mockreq = {
      params: {
        id: 1
      }
    };
    const mockres = {
      json: jest.fn()
    };
    await controllers.updateTask(mockreq, mockres);
    expect(mockres.json).toHaveBeenCalledWith({
      result: [1]
    });
  });
});

describe('deleteCompletedTasks', () => {
  it('should delete completed tasks', async () => {
    jest.spyOn(services, 'deleteCompletedTasks').mockResolvedValue();
    const mockreq = {};
    const mockres = {
      json: jest.fn()
    };
    await controllers.deleteCompletedTasks(mockreq, mockres);
    expect(mockres.json).toHaveBeenCalledWith({
      message: 'All completed tasks deleted'
    });
  });
});