const Note = require('../../db/models/note');

class NoteController {
    saveNote(req, res){

        // const newNote = new Note({
        //     title: 'zrobic zakupy',
        //     body: 'mleko jajka woda'
        // });
        
        // newNote.save().then(() => {
        //     console.log('notatka została zapisana')
        // });

        const title = req.body.title;
        const body = req.body.body;

        res.send('Notatka została stworzona. Tytuł: '+ title+ ' Tresć: '+ body);
    }


    getAllNotes(req,res){
        //pobieranie notatek
        res.send('Api działa!');
    }
    
    getNote(req,res){
        //pobieranie konkretnej notatki
        res.send('Info o notatce');
    }

    editNote(req,res){
        //edycja notatki
        res.send('Notatka zaktualizowana');
    }

   deleteNote(req,res){
        //usuwanie notatki

        const id = req.params.id;
        res.send('Notatka usunięta. ID: '+ id);

   }
}

module.exports = new NoteController();