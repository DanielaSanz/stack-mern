const notesCtrl = {};

const NoteModel = require('../models/Note');

notesCtrl.getNotes = async (req, res) => {
    //Buscar las notas de la base
    const notes = await NoteModel.find();
    res.json(notes)
}

notesCtrl.createNote = async (req, res) => {
    //representa los datos que envia el cliente
    console.log(req.body)
    //para destructurar el request
    const { title , content, date, author } = req.body;
    //Crear el nuevo objeto
    const newNote = new NoteModel({
        "title": title,
        "content": content,
        "date": date,
        "author": author
    })
    console.log(newNote);
    //Hasta acá solo lo crea, necesito esta sentencia para guardarla.
    await newNote.save();
    res.json({message: 'Note saved'})
}

notesCtrl.getNote = async (req, res) => {
    //parametro que me pasen por url
    const note = await NoteModel.findById(req.params.id);
    console.log(req.params.id)
    res.json(note)
    console.log(note);
}

/* notesCtrl.updateNote = async (req, res) => {
    //Necesito los datos que voy a actulizar y los actualizados
    console.log(req.params.id, req.body)
    await Note.findByIdAndUpdate(req.params.id, req.body)
    res.json({message: 'Update note'})
} */

//Con destructuracíon de objeto
notesCtrl.updateNote = async (req, res) => {
    //Necesito los datos que voy a actulizar y los actualizados
    console.log(req.params.id, req.body)
    const { title, content, author } = req.body;
    //o asi NoteModel.findOneAndUpdate({_id: req.params.id})
    await NoteModel.findOneAndUpdate(req.params.id, {
        //Se puede poner así apra no repetir
        title,
        content,
        author
    })
    res.json({message: 'Update note'})
}

notesCtrl.deleteNote = async (req, res) => {
    const note = await NoteModel.findByIdAndDelete(req.params.id)
    res.json({message: 'Note deleted'})
}

module.exports = notesCtrl;