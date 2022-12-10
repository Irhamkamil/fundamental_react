import React from "react";
import { addNotes } from "../utils/Api";
import NotesInput from "../components/NotesInput";
import { useNavigate } from "react-router-dom";

function AddPage() {
  const navigate = useNavigate();

  async function onAddContactHandler(title, body) {
    await addNotes(title, body);
    navigate("/home");
  }

  return (
    <section>
      <NotesInput addNote={onAddContactHandler} />
    </section>
  );
}

export default AddPage;
