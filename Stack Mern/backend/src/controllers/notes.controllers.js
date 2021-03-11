const notesCtrl = {};

notesCtrl.getNotes = (req, res) => res.json({title: 'Get notes'})

notesCtrl.getNote = (req, res) => res.json({message: 'Get note'})

notesCtrl.createNote = (req, res) => res.json({message: 'Create note'})

notesCtrl.updateNote = (req, res) => res.json({message: 'Update note'})

notesCtrl.deleteNote = (req, res) => res.json({message: 'Delete note'})

module.exports = notesCtrl;