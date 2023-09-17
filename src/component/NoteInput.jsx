/* eslint-disable react/prop-types */
import React from "react";
import NoteInputTitle from "./NoteInputTitle";
import NoteInputBody from "./NoteInputBody";
import CharLimit from "./CharLimit";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputTitle: "",
      inputBody: "",
      inputLength: 50,
    };

    this.handleChangeInputTitle = this.handleChangeInputTitle.bind(this);
    this.handleChangeInputBody = this.handleChangeInputBody.bind(this);
    this.handleSubmitCreateNote = this.handleSubmitCreateNote.bind(this);
  }

  handleChangeInputTitle(event) {
    const inputTitle = event.target.value;

    if (inputTitle.length <= 50) {
      this.setState({
        inputTitle: inputTitle,
        inputLength: 50 - inputTitle.length,
      });
    }
  }
  handleChangeInputBody(event) {
    const inputBody = event.target.value;
    this.setState({ inputBody });
  }

  handleSubmitCreateNote(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat catatan</h2>
        <form onSubmit={this.handleSubmitCreateNote}>
          <CharLimit charLimit={this.state.inputLength} />
          <NoteInputTitle
            value={this.state.inputTitle}
            handleChangeInputTitle={this.handleChangeInputTitle}
          />
          <NoteInputBody
            value={this.state.inputBody}
            handleChangeInputBody={this.handleChangeInputBody}
          />
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
