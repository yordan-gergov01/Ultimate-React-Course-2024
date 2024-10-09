import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="MyProfile.jpeg" alt="profile-picture" />;
}

function Intro() {
  return (
    <div>
      <h1>Yordan Gergov</h1>
      <p>
        Front-End Developer, ambitious and goal-oriented, I am passionate about
        self-improvement and growth, always eager to learn, love spending time
        coding and reading books, with a keen interest in natural bodybuilding
        as a hobby.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" color="lightblue" />
      <Skill skill="HTML and CSS" color="purple" />
      <Skill skill="JavaScript" color="yellow" />
      <Skill skill="NodeJS" color="lightgreen" />
      <Skill skill="Express" color="red" />
      <Skill skill="PostgreSQL" color="blue" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      {props.skill}
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
