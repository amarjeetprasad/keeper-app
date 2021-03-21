import React, { useState } from "react";
import "./style.css";

export default function AddNote({ updateNotes }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function AddTitle(e) {
    setTitle(e.target.value);
  }

  function AddContent(e) {
    setContent(e.target.value);
  }

  return (
    <div className="add-note">
      <input
        className="note-input-box note-title"
        type="text"
        placeholder="Title..."
        name="note"
        onChange={AddTitle}
        value={title}
      />
      <input
        className="note-input-box"
        type="text"
        placeholder="Type a Note..."
        name="note"
        onChange={AddContent}
        value={content}
      />
      <button
        className="add-button"
        onClick={() => {
          setTitle("");
          setContent("");
          return updateNotes(title, content);
        }}
      >
        Add
      </button>
    </div>
  );
}
