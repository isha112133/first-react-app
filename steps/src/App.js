import React, { useState } from "react";
import "./index.css";

const messages = ["Learn React ⚛️", "Apply for jobs 💼", "Invest your new income 🤑"];

// STATE- data that a component can hold over time, necessary for info that it needs to remember throughout the app's lifecycle
// component's memory (e.g. active tab, notification count, text content of input field, content of a shopping cart)
const App = () => {
  // const step = 1;
  const [step, setStep] = useState(1);
  //console.log(step);
  function handlePrevious() {
    // this fn's an event handler fn i.e.probably being used somewhere in JSX of that component.
    alert("Previous");
  }

  function handleNext() {
    setStep(step + 1);
  }

  console.log("messages", messages[step - 1]);
  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>
      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>
      <div className="button">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          // onClick={() => alert("Previous")} // we don't directly define the event handler function here in onclick prop, instead we create a separate fn then pass that fn here.
          // onClick={() => handlePrevious()} // it's just a fn that calls another fn
          onClick={handlePrevious}
          // onMouseEnter={() => alert("TEST")}
        >
          Previous
        </button>
        <button style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
