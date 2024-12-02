import React from "react";
import "../index.css";

// JSX rules
// 1. JSX works like HTML, but we can enter JS mode by using {} (for text or attributed, can place JS expressions inside {})
// 2. const el = <h1>Hello React!</h1>; === const el1 = React.createElement("h1", null, "Hello React!");
// 3. Can only have 1 root element, If you need more, use <React.Fragment> (or <>)
// Diff b/w JSX & HTML

const Intro = () => {
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
      <p>
        Front-end developer and freelancer yoga instructor. When not working , I
        like to workout, to cook, or to just enjoy the weather.
      </p>
    </div>
  );
};
const SkillList = () => {
  return (
    <div className="skill-list">
      <Skill Skill="React" emoji="✌️" color="#123456" />
      <Skill Skill="HTML+CSS" emoji="💪" color="orangered" />
      <Skill skill="JavaScript" emoji="👍" color="yellow" />
      <Skill skill="Git and GitHub" emoji="✌️" color="orange" />
      <Skill skill="React-Native" emoji="👍" color="#123456" />
      <Skill skill="TailwindCSS" emoji="💪" color="orangered" />
    </div>
  );
};

const Skill = (props) => {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
};
export default Intro;
