import React from "react";
import PropTypes from "prop-types";
import NotesItemBody from "./NotesItemBody";
import NotesItemAction from "./NotesItemAction";
import { useNavigate } from "react-router-dom";

function NotesItem({
  title,
  createdAt,
  body,
  id,
  onDelete,
  onArchive,
  isArchived,
}) {
  const navigate = useNavigate();

  function onDetailHandler() {
    navigate(`/detail/${id}`);
  }

  return (
    <div className="note-item">
      <div id="click" onClick={() => onDetailHandler()}>
        <NotesItemBody title={title} createdAt={createdAt} body={body} />
      </div>
      <NotesItemAction
        id={id}
        onDelete={onDelete}
        onArchive={onArchive}
        isArchived={isArchived}
      />
    </div>
  );
}

NotesItem.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  isArchived: PropTypes.bool.isRequired,
};

export default NotesItem;
