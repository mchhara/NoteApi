const express = require('express');
const router = express.Router();

const noteControler = require('../actions/api/noteController');




//pobieranie wszystkich notatek
router.get('/notes', noteControler.getAllNotes);
//pobieranie konkretnej notatki
router.get('/notes/:id', noteControler.getNote);
//zapisywanie notatek
router.post('/notes', noteControler.saveNote);
//edytowanie notatek
router.put('/notes/:id', noteControler.editNote);
//usuwanie notatek
router.delete('/notes/:id', noteControler.deleteNote);


module.exports = router;