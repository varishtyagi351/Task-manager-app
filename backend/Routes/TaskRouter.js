const { createTask, fetchAllTasks, updateTaskById,deleteTaskById } = require('../Controllers/TaskController');
const router = require('express').Router();

//To get all the tasks;
router.get('/', fetchAllTasks);

//To create a task
router.post('/', createTask);

//To update the task
router.put('/:id', updateTaskById);

//to delete the task
router.delete('/:id',deleteTaskById);


module.exports=router;