import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils/Data";

function NotesItemBody({ title, body, createdAt }) {
  return (
    <div className="note-item__content">
      <h2 className="note-item__title">{title}</h2>
      <p className="note-item__date">{showFormattedDate(createdAt)}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
}

NotesItemBody.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NotesItemBody;
