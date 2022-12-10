import React from "react";
import NotesList from "./NotesList";
import PropTypes from "prop-types";
import NotesEmptyMessage from "./NotesEmptyMessage";

function NotesBody({
  notes,
  searchedNotes,
  onDelete,
  onArchive,
  searchedTitle,
}) {
  let aktifNotes = null;

  if (searchedTitle.length > 0) {
    aktifNotes = searchedNotes.filter((note) => note.archived === false);
  } else {
    aktifNotes = notes.filter((note) => note.archived === false);
  }

  console.log(notes);

  return (
    <div className="note-app__body">
      <h2>Catatan Aktif</h2>
      {aktifNotes.length > 0 ? (
        <NotesList
          notes={aktifNotes}
          onDelete={onDelete}
          onArchive={onArchive}
        />
      ) : (
        <NotesEmptyMessage />
      )}
    </div>
  );
}

NotesBody.propTypes = {
  notes: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  searchedTitle: PropTypes.string.isRequired,
  searchedNotes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NotesBody;
