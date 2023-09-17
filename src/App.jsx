import React from "react";
import NoteArchive from "./components/NoteArchive";
import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";
import NoteSearch from "./components/NoteSearch";
import { getInitialData, showFormattedDate } from "./utils/utils";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initialData: getInitialData(),
      searchKeyword: "",
      formatedDate: showFormattedDate(new Date()),
      archivedNote: [],
    };

    this.getKeywordSearchValue = this.getKeywordSearchValue.bind(this);
    this.addNoteHandler = this.addNoteHandler.bind(this);
    this.deleteNoteHandler = this.deleteNoteHandler.bind(this);
    this.archiveNoteHandler = this.archiveNoteHandler.bind(this);
    this.deleteArchiveNoteHandler = this.deleteArchiveNoteHandler.bind(this);
    this.moveArchiveNoteHandle = this.moveArchiveNoteHandle.bind(this);
  }

  getKeywordSearchValue({ keyword }) {
    this.setState({ searchKeyword: keyword });
  }

  addNoteHandler({ inputTitle, inputBody }) {
    this.setState((prevState) => {
      return {
        initialData: [
          ...prevState.initialData,
          {
            id: +new Date(),
            title: inputTitle,
            body: inputBody,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  deleteNoteHandler(id) {
    const initialData = this.state.initialData.filter((note) => note.id != id);

    this.setState({ initialData });
  }

  archiveNoteHandler(id) {
    const noteToArchive = this.state.initialData.find((note) => note.id == id);

    if (noteToArchive) {
      noteToArchive.archived = true;

      const updateInitilData = this.state.initialData.filter(
        (note) => note.id != id
      );

      this.setState({
        initialData: updateInitilData,
        archivedNote: [...this.state.archivedNote, noteToArchive],
      });
    }
  }

  deleteArchiveNoteHandler(id) {
    const archivedNote = this.state.archivedNote.filter(
      (note) => note.id != id
    );

    this.setState({ archivedNote });
  }

  moveArchiveNoteHandle(id) {
    const moveArchive = this.state.archivedNote.filter((note) => note.id == id);
    if (moveArchive) {
      moveArchive[0].archived = false;

      const deleteFromArchive = this.state.archivedNote.filter(
        (note) => note.id != id
      );

      this.setState({
        initialData: [...this.state.initialData, ...moveArchive],
        archivedNote: deleteFromArchive,
      });
    }
  }

  render() {
    return (
      <>
        <NoteSearch keyword={this.getKeywordSearchValue} />
        <div className="note-app__body">
          <NoteInput addNote={this.addNoteHandler} />
          <NoteList
            initialData={this.state.initialData}
            formatedDate={this.state.formatedDate}
            deleteNote={this.deleteNoteHandler}
            archiveNote={this.archiveNoteHandler}
            searchKeyword={this.state.searchKeyword}
          />
          <NoteArchive
            noteArchived={this.state.archivedNote}
            formatedDate={this.state.formatedDate}
            deleteArchive={this.deleteArchiveNoteHandler}
            moveArchive={this.moveArchiveNoteHandle}
            searchKeyword={this.state.searchKeyword}
          />
        </div>
      </>
    );
  }
}

export default App;
