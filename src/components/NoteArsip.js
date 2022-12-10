import React from "react";
import NotesList from "./NotesList";
import PropTypes from "prop-types";
import NotesEmptyMessage from "./NotesEmptyMessage";

function NotesArsip({
  notes,
  searchedNotes,
  onDelete,
  onArchive,
  searchedTitle,
}) {
  let arsipNotes = null;

  if (searchedTitle.length > 0) {
    arsipNotes = searchedNotes.filter((note) => note.archived === true);
  } else {
    arsipNotes = notes.filter((note) => note.archived === true);
  }

  return (
    <div className="note-app__body">
      <h2>Arsip</h2>
      {arsipNotes.length > 0 ? (
        <NotesList
          notes={arsipNotes}
          onDelete={onDelete}
          onArchive={onArchive}
        />
      ) : (
        <NotesEmptyMessage />
      )}
    </div>
  );
}

NotesArsip.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  searchedTitle: PropTypes.string.isRequired,
  searchedNotes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NotesArsip;
