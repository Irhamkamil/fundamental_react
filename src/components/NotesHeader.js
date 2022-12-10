import React from "react";
import PropTypes from "prop-types";
import { Route, Routes } from "react-router-dom";
import AddPage from "../pages/AddPage";

function NotesHeader({ onSearchChange, searchTitle }) {
  return (
    <div className="note-app__header">
      <div className="note-search">
        <input
          type="text"
          placeholder="Cari catatan..."
          value={searchTitle}
          onChange={(event) => onSearchChange(event)}
        />
      </div>
      <Routes>
        <Route path="/add" element={<AddPage />} />
      </Routes>
    </div>
  );
}

NotesHeader.propTypes = {
  searchTitle: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default NotesHeader;
