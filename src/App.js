import Heading from "./components/heading";
import Note from "./components/note";
import Footer from "./components/footer";
import notes from "./components/noteContents";
import AddNote from "./components/addNote";
import "./styles.css";
import { useState } from "react";
export default function App() {
  const [Notes, setNotes] = useState(notes);

  function updateNotes(title, content) {
    setNotes((pre) => {
      const note = {
        id: Notes.length + 1,
        title: title,
        content: content
      };
      return [...pre, note];
    });
  }
  function allDone() {
    setNotes([]);
    alert("All work has been Done!");
  }

  return (
    <div className="">
      <Heading />
      <AddNote updateNotes={updateNotes} />
      <div className="body">
        {Notes.map((e) => (
          <Note key={e.id} id={e.id} title={e.title} content={e.content} />
        ))}
      </div>
      <div className="all-done">
        <button className="all-done-btn" onClick={allDone}>
          All Done
        </button>
      </div>
      <Footer />
    </div>
  );
}
