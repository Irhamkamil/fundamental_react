import React from "react";
import PropTypes from "prop-types";
import NotesItemBody from "./NotesItemBody";
import { useNavigate } from "react-router-dom";

function NotesDetail({ title, createdAt, body, id }) {
  const navigate = useNavigate();

  function onDetailHandler() {
    navigate(`/detail/${id}`);
  }

  return (
    <div id="full" className="note-item">
      <div id="click" onClick={() => onDetailHandler()}>
        <NotesItemBody title={title} createdAt={createdAt} body={body} />
      </div>
    </div>
  );
}

NotesDetail.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default NotesDetail;
