import React from "react";
import { deleteNotes, archiveNote, getActiveNotes } from "../utils/Data";
import NotesBody from "../components/NotesBody";
import NotesHeader from "../components/NotesHeader";
import { ThemeProvider } from "../contexts/ThemeContext";
import ToggleTheme from "../components/ToggleTheme";
import { getNotes } from "../utils/Api";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getNotes(),
      searchedNotes: [],
      searchTitle: "",

      theme: "light",
      toggleTheme: () => {
        this.setState((prevState) => {
          return {
            theme: prevState.theme === "light" ? "dark" : "light",
          };
        });
      },
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSearchChangeEventHandler =
      this.onSearchChangeEventHandler.bind(this);
    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
  }

  async componentDidMount() {
    const { data } = await getNotes();

    this.setState(() => {
      return {
        contacts: data,
      };
    });
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

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  onArchiveHandler(id) {
    archiveNote(id);

    this.setState(() => {
      return {
        notes: getActiveNotes(),
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

  componentDidUpdate(prevState) {
    if (prevState.theme !== this.state.theme) {
      document.documentElement.setAttribute("data-theme", this.state.theme);
    }
  }

  render() {
    return (
      <ThemeProvider value={this.state}>
        <div>
          <NotesHeader
            onSearchChange={this.onSearchChangeEventHandler}
            searchTitle={this.state.searchTitle}
          />
          <div className="theme">
            <ToggleTheme />
          </div>
          <NotesBody
            notes={this.state.notes}
            searchedNotes={this.state.searchedNotes}
            searchedTitle={this.state.searchTitle}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
            addNote={this.onAddNoteHandler}
          />
        </div>
      </ThemeProvider>
    );
  }
}

export default NotesApp;
