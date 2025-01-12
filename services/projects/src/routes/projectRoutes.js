// Este archivo exporta las rutas del servicio de proyectos utilizando ProjectController para manejar las solicitudes HTTP.

const express = require('express');
const ProjectController = require('../controllers/projectController');

const router = express.Router();
const projectController = new ProjectController();

router.post('/', projectController.createProject);
router.get('/:id', projectController.getProject);
router.put('/:id', projectController.updateProject);
router.delete('/:id', projectController.deleteProject);

module.exports = router;