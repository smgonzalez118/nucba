import { Router } from 'express';
import { ACAVANLASFUNCIONESCONTROLLERS } from '../controllers/controller.js';
// los controllers son el segundo argumento de los verbos http del router.

const router = Router();

//api/v1/todo
router.get('/', FUNCION1);
router.put('/', FUNCION2);
router.post('/', FUNCION3);

//api/v1/todo/lakSJDFHLkajsdnñlakCNSlsdiufh
router.delete('/:id', deleteTodo);

export { router as mainRouter };
