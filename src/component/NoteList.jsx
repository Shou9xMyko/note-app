/* eslint-disable react/prop-types */
import React from "react";
import NoteItem from "./NoteItem";
import NoteEmptyMessage from "./NoteEmptyMessage";

class NoteList extends React.Component {
  constructor(props) {
    super(props);

    this.deleteNote = this.deleteNote.bind(this);
    this.archiveNote = this.archiveNote.bind(this);
  }

  deleteNote(id) {
    this.props.deleteNote(id);
  }

  archiveNote(id) {
    this.props.archiveNote(id);
  }

  render() {
    const { initialData, formatedDate, searchKeyword } = this.props;
    const sortASCNoteList = initialData.sort((a, b) => a.id - b.id);
    const NoteList = sortASCNoteList.filter((note) =>
      note.title.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    console.log("ini notelist search", searchKeyword);

    return (
      <>
        <h2>Catatan Aktif</h2>
        {NoteList.length == 0 ? (
          <NoteEmptyMessage />
        ) : (
          <div className="notes-list">
            {NoteList.map((item) => (
              <React.Fragment key={item.id}>
                <NoteItem
                  id={item.id}
                  title={item.title}
                  formatedDate={formatedDate}
                  body={item.body}
                  onDelete={this.deleteNote}
                  onArchive={this.archiveNote}
                />
              </React.Fragment>

              // <div className="note-item" key={item.id}>
              //   <div className="note-item__content">
              //     <h3 className="note-item__title">{item.title}</h3>
              //     <p className="note-item__date">{formatedDate}</p>
              //     <p className="note-item__body">{item.body}</p>
              //   </div>
              //   <div className="note-item__action">
              //     <button
              //       className="note-item__delete-button"
              //       onClick={() => this.deleteNote(item.id)}
              //     >
              //       Delete
              //     </button>
              //     <button
              //       className="note-item__archive-button"
              //       onClick={() => this.archiveNote(item.id)}
              //     >
              //       Arsipkan
              //     </button>
              //   </div>
              // </div>
            ))}
          </div>
        )}
      </>
    );
  }
}
export default NoteList;
