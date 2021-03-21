import "./style.css";
export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return <p className="footer">---copyright@ {year}---</p>;
}
