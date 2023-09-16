/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const CharLimit = ({ charLimit }) => {
  return (
    <p className="note-input__title__char-limit">Sisa karakter: {charLimit}</p>
  );
};

export default CharLimit;
