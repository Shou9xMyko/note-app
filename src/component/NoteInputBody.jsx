/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const NoteInputBody = ({ value, handleChangeInputBody }) => {
  return (
    <textarea
      className="note-input__body"
      type="text"
      placeholder="Tuliskan catatanmu di sini ..."
      value={value}
      onChange={handleChangeInputBody}
      required
    ></textarea>
  );
};

export default NoteInputBody;
