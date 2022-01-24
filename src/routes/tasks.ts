import { Router } from 'express';
import { getTask, createTask, updateTask, deleteTask } from '../controllers/TaskController';

const router = Router();

//curl --location --request POST 'localhost:3000/tasks'
router.post('/', createTask);

//curl --location --request GET 'localhost:3000/tasks'
router.get('/', getTask);


//curl --location --request PATCH 'localhost:3000/tasks/1'
router.patch('/:id', updateTask);


//curl --location --request DELETE 'localhost:3000/tasks/1'
router.delete('/:id', deleteTask);

export default router;