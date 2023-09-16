/* eslint-disable react/prop-types */
import React from "react";
import NoteEmptyMessage from "./NoteEmptyMessage";
import NoteItem from "./NoteItem";

class NoteArchive extends React.Component {
  constructor(props) {
    super(props);

    this.deleteArchive = this.deleteArchive.bind(this);
    this.moveArchive = this.moveArchive.bind(this);
  }

  deleteArchive(id) {
    this.props.deleteArchive(id);
  }
  moveArchive(id) {
    this.props.moveArchive(id);
  }

  render() {
    const { noteArchived, formatedDate, searchKeyword } = this.props;
    const archiveList = noteArchived.sort((a, b) => a.id - b.id);
    const NoteArchivedList = archiveList.filter((note) =>
      note.title.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    return (
      <>
        <h2>Arsip</h2>
        {NoteArchivedList.length == 0 ? (
          <NoteEmptyMessage />
        ) : (
          <div className="notes-list">
            {NoteArchivedList.map((item) => (
              <React.Fragment key={item.id}>
                <NoteItem
                  id={item.id}
                  title={item.title}
                  formatedDate={formatedDate}
                  body={item.body}
                  onDelete={this.deleteArchive}
                  onArchive={this.moveArchive}
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
              //       onClick={() => this.deleteArchive(item.id)}
              //     >
              //       Delete
              //     </button>
              //     <button
              //       className="note-item__archive-button"
              //       onClick={() => this.moveArchive(item.id)}
              //     >
              //       Pindahkan
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

export default NoteArchive;
