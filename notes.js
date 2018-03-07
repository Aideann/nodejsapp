console.log('Starting notes.js');

const fs = require('fs');

const fetchNotes = () => {
    try {
        const notesString = fs.readFileSync('notes-data.json');

        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

const addNote = (title, body) => {
    let notes = fetchNotes();
    const note = {
        title,
        body
    };

    const duplicatesNotes = notes.filter((note) => note.title === title);

    if (duplicatesNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }
};

const getAll = () => {
    console.log('Getting all notes');
};

const getNote = (title) => {
    console.log('Getting note:', title);
};

const removeNote = (title) => {
    console.log('Removing note:', title);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};