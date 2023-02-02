const taskController = require('../controllers/taskController');
const validator = require('../middlewares/middleware');
const router = require('express').Router();

router.get('/', taskController.getHomePage);
router.get('/tasks',taskController.getAlltasks);
router.get('/tasks/:id', validator.validateGetTaskById, taskController.getTaskById);

router.post('/tasks', validator.validatePostTask, taskController.postTask);
router.put('/tasks/:id', validator.validateUpdateTask, taskController.updateTask);
router.delete('/tasks', taskController.deleteCompletedTasks);

module.exports = router;