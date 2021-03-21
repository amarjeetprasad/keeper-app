import { useState } from "react";
import { MdDoneAll } from "react-icons/md";
export default function Note(props) {
  const [style, setStyle] = useState({ backgroundColor: "rgba(250,0,0,0.3)" });
  const [isDone, setIsDone] = useState(true);
  function changeBackground() {
    if (isDone) {
      setStyle({ backgroundColor: "rgba(0,250,0,0.3)" });
      setIsDone(false);
      alert("Done!");
    } else {
      setStyle({ backgroundColor: "rgba(250,0,0,0.3)" });
      setIsDone(true);
      alert("Not Done!");
    }
  }
  return (
    <div className="note" style={style}>
      <h1>
        {props.id}. {props.title}
      </h1>
      <hr />
      <br />
      <p>{props.content}</p>
      <button className="btn" onClick={changeBackground}>
        <MdDoneAll />
      </button>
    </div>
  );
}
