const express = require('express');
const controller = require('../controllers/connectionController');
const router = express.Router();

// GET /connections: send connections to user
router.get('/', controller.index);

// GET /connections/new: send html form for new connection
router.get('/new', controller.new);

// POST /connections: create new connection
router.post('/', controller.create);

// GET /connections/:id: send details of story identified by id
router.get('/:id', controller.show);

// GET /connections/:id/edit: send html form for editing a story
router.get('/:id/edit', controller.edit);

// PUT /connections/:id: update connection by id
router.put('/:id', controller.update);

//  DELETE /connections/:id: delete story by id
router.delete('/:id', controller.delete);

module.exports = router;
