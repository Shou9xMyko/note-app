/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const NoteInputTitle = ({ value, handleChangeInputTitle }) => {
  return (
    <input
      className="note-input__title"
      type="text"
      placeholder="Ini adalah judul ..."
      value={value}
      onChange={handleChangeInputTitle}
      required
    />
  );
};

export default NoteInputTitle;
