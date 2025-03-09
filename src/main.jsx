import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

 function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro
          about="Hello, I‘m Mohamed Amine
          Front-End React Developer
          Passionate and driven Front-End Developer "
          name="Mohamed amine Mounir"
        />
     
        <SkillList
          red={{ backgroundColor: "red" }}
          blue={{ backgroundColor: "blue" }}
          yellow={{ backgroundColor: "yellow" }}
          green={{ backgroundColor: "green" }}
          orange={{ backgroundColor: "orange" }}
          purple={{ backgroundColor: "purple" }}
          emoji1="💪"
          skill1="Html+CSS"
          emoji2="💪"
          skill2="JavaScript"
          emoji3="👍"
          skill3="React.Js"
          emoji4="✨"
          skill4="tailwind CSS"
          emoji5="👍"
          skill5="Git and Github"
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

function Avatar() {
  return <img src="myImg.jpeg" alt="image" className="avatar" />;
}
function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.about}</p>
    </div>
  );
}
function SkillList(props) {
  return (
    <div className="skill-list">
      <p className="skill" style={props.purple}>
        {props.skill1}
        {props.emoji1}
      </p>
      <p className="skill" style={props.green}>
        {props.skill2}
        {props.emoji2}
      </p>{" "}
      <p className="skill" style={props.blue}>
        {props.skill3}
        {props.emoji3}
      </p>{" "}
      <p className="skill" style={props.yellow}>
        {props.skill4}
        {props.emoji4}
      </p>
      <p className="skill" style={props.red}>
        {props.skill5}
        {props.emoji5}
      </p>
    </div>
  );
}
