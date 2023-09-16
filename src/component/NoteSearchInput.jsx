/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const NoteSearchInput = ({ inputValue, handleChangeInputSearch }) => {
  return (
    <input
      type="text"
      placeholder="Cari catatan ..."
      value={inputValue}
      onChange={handleChangeInputSearch}
    />
  );
};

export default NoteSearchInput;
