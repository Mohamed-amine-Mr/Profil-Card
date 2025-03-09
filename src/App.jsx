
import "./style.css";
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#E34F26"
  },
  {
    skill: "Next.js",
    level: "advanced",
    color: "#091999"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#F7DF1E"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#F05032"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#61DAFB"
  },
  {
    skill: "Tailwind CSS",
    level: "beginner",
    color: "#38B2AC"
  }
];
 function App() {
  return (
    <div className="card" >
      <Avatar imgSrc="myImg.jpeg"/>
      <div className="skillsObj">
        <Intro
          aboutMe="front-End Developer specializing in React.js , Beyond coding, I enjoy creating content about web development, sharing my knowledge, and helping others learn."
          name="Mohamed amine Mounir"
      />
        <SkillList/>
      </div>
    </div>
  );
}
export default App




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
     {skills.map((data)=>
    <Skill 
    skillsObj={data}key={data.name} />
    )}
      
    </div>
  );
}

function Skill({skillsObj}){



  return (
    <div>
 <p className="skill" style={{backgroundColor:skillsObj.color}} >
    {skillsObj.skill}

  
  <span>{skillsObj.level==="advanced" && "👍"}</span>
  <span>{skillsObj.level==="beginner" && "👶"}</span>
  <span>{skillsObj.level==="intermediate" && "💪"}</span>
  </p>
  </div>
   
  )
}