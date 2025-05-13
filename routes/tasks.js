const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const auth = require('../middlewares/auth');

// Protected routes
router.use(auth);

// CRUD routes
router.get('/', taskController.getTasks);
router.post('/', taskController.createTask);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

// Import/Export routes
router.get('/export', taskController.exportTasks);
router.get('/template', taskController.getTemplate);
router.post('/import', taskController.importTasks);

module.exports = router; 