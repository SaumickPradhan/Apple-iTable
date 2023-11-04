import React, { useState } from 'react';

function NotesPopup({ onClose, name }) {
  const [notes, setNotes] = useState(['Task 1', 'Task 2', 'Task 3']);
  const [newNote, setNewNote] = useState('');

  const addNote = () => {
    if (newNote.trim() !== '') {
      setNotes([...notes, newNote]);
      setNewNote('');
    }
  };

  const toggleCheck = (index) => {
    const updatedNotes = [...notes];
    updatedNotes[index] = '✓ ' + updatedNotes[index];
    setNotes(updatedNotes);
  };

  return (
    <div className="notes-popup">
      <h1>{name}</h1>
      <div className="notes-list">
        {notes.map((note, index) => (
          <div key={index} className="note-item">
            <label>
              <input type="checkbox" onClick={() => toggleCheck(index)} />
              {note}
            </label>
          </div>
        ))}
      </div>
      <div className="add-note">
        <input
          type="text"
          placeholder="Add a new note"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button onClick={addNote}>Add</button>
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default NotesPopup;
