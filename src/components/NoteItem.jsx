/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

const NoteItem = ({
  id,
  title,
  formatedDate,
  body,
  archived,
  onDelete,
  onArchive,
}) => {
  return (
    <div className="note-item" key={id}>
      <NoteItemContent title={title} formatedDate={formatedDate} body={body} />
      <NoteItemAction
        id={id}
        archived={archived}
        onDelete={onDelete}
        onArchive={onArchive}
      />
    </div>
  );
};

export default NoteItem;
