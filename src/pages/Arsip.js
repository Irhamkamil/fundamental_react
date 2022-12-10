import React from "react";
import {
  getNotes,
  deleteNotes,
  getArchivedNotes,
  unarchiveNote,
} from "../utils/Data";
import NotesArsip from "../components/NoteArsip";
import NotesHeader from "../components/NotesHeader";

class Arsip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getArchivedNotes(),
      searchedNotes: [],
      searchTitle: "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSearchChangeEventHandler =
      this.onSearchChangeEventHandler.bind(this);
    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
  }

  onDeleteHandler(id) {
    this.setState({ searchTitle: "" });
    deleteNotes(id);
    this.setState(() => {
      return {
        notes: getNotes(),
      };
    });
  }

  onArchiveHandler(id) {
    unarchiveNote(id);
    this.setState(() => {
      return {
        archived: getArchivedNotes(),
      };
    });
  }

  onSearchChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        searchTitle: event.target.value,
      };
    });
    this.onSearchEventHandler(event.target.value);
  }

  onSearchEventHandler(searchedTitle) {
    let searchedNotes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(searchedTitle.toLocaleLowerCase())
    );

    if (this.state.searchTitle.length >= 0) {
      this.setState({ searchedNotes: null });
      this.setState({ searchedNotes: searchedNotes });
    } else {
      this.setState({ searchedNotes: null });
      this.setState({ searchedNotes: this.state.notes });
    }
  }

  render() {
    console.log(this.state.notes);
    return (
      <div>
        <NotesHeader
          onSearchChange={this.onSearchChangeEventHandler}
          searchTitle={this.state.searchTitle}
        />
        <NotesArsip
          notes={this.state.notes}
          searchedNotes={this.state.searchedNotes}
          searchedTitle={this.state.searchTitle}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
      </div>
    );
  }
}

export default Arsip;
