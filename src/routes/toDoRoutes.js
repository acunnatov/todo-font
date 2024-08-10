import express from 'express';
import { getTodos, addTodo, updateTodo, deleteTodo} from '../controller/Todocontroller.js';


const router = express.Router();

router.get('/todo', getTodos);
router.post('/todo', addTodo);
router.put('/todo/:id', updateTodo);
router.delete('/todo/:id', deleteTodo);

export default router;
