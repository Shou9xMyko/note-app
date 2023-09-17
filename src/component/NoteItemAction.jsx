/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import DeleteNoteButton from "./DeleteNoteButton";
import ArchiveNoteButton from "./ArchiveNoteButton";

const NoteItemAction = ({ id, archived, onDelete, onArchive }) => {
  return (
    <div className="note-item__action">
      <DeleteNoteButton id={id} onDelete={onDelete} />
      <ArchiveNoteButton id={id} onArchive={onArchive} archived={archived} />
    </div>
  );
};

export default NoteItemAction;
