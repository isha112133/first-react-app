import React from "react";
import "../index.css";

const skills = [
  { skill: "HTML+CSS", level: "advanced", color: "#2662EA" },
  { skill: "Web Design", level: "advanced", color: "#C3DCAF" },
  { skill: "JavaScript", level: "advanced", color: "#EFD81D" },
  { skill: "Git and GitHub", level: "intermediate", color: "#E84F33" },
  { skill: "React-Native", level: "beginner", color: "#60DAFB" },
  { skill: "Tailwindcss", level: "advanced", color: "#FF3000" },
];
// 💪 👍 ✌️
const Challenge1 = () => {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Introduction />
        <SkillList />
      </div>
    </div>
  );
};
const Avatar = () => {
  return <img src="intros/baby4.jpg" alt="Isha Meel" className="avatar" />;
};
const Introduction = () => {
  return (
    <div>
      <h1>Isha Meel</h1>
      <p>Front-end developer and freelancer yoga instructor. When not working , I like to workout, to cook, or to just enjoy the weather.</p>
    </div>
  );
};
const SkillList = () => {
  return (
    <div className="skill-list">
      {skills.map((item, index) => (
        <div key={index} className="skill" style={{ backgroundColor: item.color, gap: 4 }}>
          <span>{item.skill}</span>
          {/* <span>{item.emoji}</span> */}
          <span>
            {item.level === "beginner" && "👍"}
            {item.level === "intermediate" && "✌️"}
            {item.level === "advanced" && "💪"}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Challenge1;
