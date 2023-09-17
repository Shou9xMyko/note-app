/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const DeleteNoteButton = ({ id, onDelete }) => {
  return (
    <button className="note-item__delete-button" onClick={() => onDelete(id)}>
      Delete
    </button>
  );
};

export default DeleteNoteButton;
