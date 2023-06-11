const express = require("express");
const router = express.Router();

const TasksController = require("../app/controllers/api/TasksController");
const AgendasController = require("../app/controllers/api/AgendasController")

// Rotas das Tarefas
router.get('/tasks', TasksController.list)
router.get('/tasks/:id', TasksController.show)
router.post('/tasks', TasksController.save)
router.delete('/tasks/:id', TasksController.remove)
router.put('/tasks/:id', TasksController.update)
router.put('/tasks/:id/update-status', TasksController.updateStatus)

router.get('/agenda', AgendasController.list)
router.get('/agenda/:id', AgendasController.show)
router.post('/agenda', AgendasController.save)
router.delete('/agenda/:id', AgendasController.remove)
router.put('/agenda/:id', AgendasController.update)
// router.put('/agenda/:id/update-status', AgendasController.updateStatus)


module.exports = router;