/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ArchiveNoteButton = ({ id, onArchive }) => {
  return (
    <button className="note-item__archive-button" onClick={() => onArchive(id)}>
      Arsipkan
    </button>
  );
};

export default ArchiveNoteButton;
