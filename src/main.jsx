
import "./style.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


 function App() {
  return (
    <div className="card" >
      <Avatar imgSrc="myImg.jpeg"/>
      <div className="data">
        <Intro
          aboutMe="front-End Developer specializing in React.js , Beyond coding, I enjoy creating content about web development, sharing my knowledge, and helping others learn."
          name="Mohamed amine Mounir"
      />
        <SkillList/>
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

function Avatar({imgSrc}) {
  return <img src={imgSrc} alt="image" className="avatar" />;
}
function Intro({name,aboutMe}) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{aboutMe}</p>
    </div>
  );
}


function SkillList() {
  return (
    <div className="skill-list">
      <Skill    
          emoji="💪"
          skill="Html+CSS"
          color={{ backgroundColor: "red" }}
          />
      <Skill    
          emoji="💪"
          skill="JavaScript"
          color={{ backgroundColor: "blue" }}
          />
      <Skill   
          emoji="👍"
          skill="React.Js"
          color={{ backgroundColor: "yellow" }}/>
      <Skill 
          emoji="✨"
          skill="tailwind CSS"
          color={{ backgroundColor: "green" }}/>
      
      <Skill 
          emoji="👍"
          skill="Git and Github"
          color={{ backgroundColor: "orange" }}/>
    </div>
  );
}

function Skill({skill, color,emoji}){
  return (
    <p className="skill" style={color}>
    {skill}
    {emoji}
  </p>
  )
}