import React from "react";
import PropTypes from "prop-types";

function NotesItemAction({ id, onDelete, onArchive, isArchived }) {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button" onClick={() => onDelete(id)}>
        Hapus
      </button>

      <button
        className="note-item__archive-button"
        onClick={() => {
          onArchive(id);
          console.log("note");
        }}
      >
        {isArchived ? "Pindahkan" : "Arsipkan"}
      </button>
    </div>
  );
}

NotesItemAction.propTypes = {
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  isArchived: PropTypes.bool.isRequired,
};

export default NotesItemAction;
