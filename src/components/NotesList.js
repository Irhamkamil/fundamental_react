import React from "react";
import PropTypes from "prop-types";
import NotesItem from "./NotesItem";

function NotesList({ notes, onDelete, onArchive }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NotesItem
          key={note.id}
          id={note.id}
          onDelete={onDelete}
          onArchive={onArchive}
          isArchived={note.archived}
          {...note}
        />
      ))}
    </div>
  );
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default NotesList;
