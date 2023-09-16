/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import NoteItemTitle from "./NoteItemTitle";
import NoteItemDate from "./NoteItemDate";
import NoteItemBody from "./NoteItemBody";

const NoteItemContent = ({ title, formatedDate, body }) => {
  return (
    <div className="note-item__content">
      <NoteItemTitle title={title} />
      <NoteItemDate formatedDate={formatedDate} />
      <NoteItemBody body={body} />
    </div>
  );
};

export default NoteItemContent;
