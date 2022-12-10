import React from "react";
import PropTypes from "prop-types";

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      titleLimit: 50,
    };

    this.onJudulChangeEventHandler = this.onJudulChangeEventHandler.bind(this);
    this.onIsi_noteChangeEventHandler =
      this.onIsi_noteChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onJudulChangeEventHandler(event) {
    if (this.state.titleLimit >= 0 && event.target.value.length <= 50) {
      this.setState(() => {
        return {
          title: event.target.value,
          titleLimit: 50 - event.target.value.length,
        };
      });
    }
  }

  onIsi_noteChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    console.log(this.state);
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <h2>Buat Catatan</h2>
        <p className="note-input__title__char-limit">
          Sisa Karakter : {this.state.titleLimit}
        </p>
        <input
          className="note-input__title"
          type="text"
          placeholder="Tulis Judul Note"
          value={this.state.title}
          onChange={this.onJudulChangeEventHandler}
        />
        <textarea
          className="note-input__body"
          type="text"
          placeholder="Tulis Isi Note"
          value={this.state.body}
          onChange={this.onIsi_noteChangeEventHandler}
        />
        <button type="submit">Tambah</button>
      </form>
    );
  }
}

NotesInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NotesInput;
