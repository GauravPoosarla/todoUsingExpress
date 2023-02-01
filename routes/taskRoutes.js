const taskController = require('../controllers/taskController');
const router = require('express').Router();

router.get('/', taskController.getHomePage);
router.get('/tasks', taskController.getAlltasks);
router.get('/tasks/:id', taskController.getTaskById);

router.post('/tasks', taskController.postTask);
router.put('/tasks/:id', taskController.updateTask);
router.delete('/tasks', taskController.deleteCompletedTasks);

module.exports = router;