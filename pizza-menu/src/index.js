import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Intro from "./components/intro";
import Challenge1 from "./components/challenge1";

// index.js why? => because webpack which is the module bundler in this project expects the entry point to be called index.js
// What JSX? => Declarative syntax to describe what components look like and how they work.
// Extension of JS that allows us to embed JS, CSS & React components into HTML
// Each JSX element is converted to a React.createElement fn call
// Why JSX is declarative? => what UI should look like using JSX, based on current data(props & state), happens without any DOM manipulation
// So there're no query selector, no event listeners, no class lists, React is an abstraction away from DOM: we never touch the DOM
// Instead we think of UI as a reflection of current data & let React automatically sync the UI with that data.

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const App = () => {
  // function Pizza() {
  //   return <h2>Pizza</h2>;
  // }
  return (
    <div>
      {/* <Intro /> */}
      <Challenge1 />
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

function Header() {
  const style = {
    // color: "purple",
    // fontSize: "36px",
    // textTransform: "uppercase",
  };
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

// Passing & receiving props- (i) we pass props into component (ii) we receive the props in component that we pass them into.
// So components've to be pure in terms of their props & state because this allows react to optimize your app & avoids bugs
// that can appear when you manipulate external data. So components should never mutate any data that we write outside of its functional scope ↓

// let x = 7;
// function component() {
//   x = 10;
//   return <h1>Number {x}</h1>;
// }
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length; // giving zero on screen because of short circuiting

  return (
    <main className="menu">
      <h2>Our menu</h2>
      {/* {numPizzas > 0 && ( */}
      {numPizzas > 0 ? ( // React fragment- group some elements without leaving any trace in HTML tree, so in the DOM. if we want component directly in the root. Basically allows us to have more than just 1 element inside a piece of JSX.
        <React.Fragment key="jejej">
          <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
          <ul className="pizzas">
            {pizzas.map((pizza, index) => (
              <Pizza
                key={index}
                pizzaObj={pizza}
                // key={index}
                // name={item.name}
                // ingredients={item.ingredients}
                // photoName={item.photoName}
                // price={item.price}
              />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>We're still working on our menu. Please come back late:</p>
      )}
      {/* If else will not produce any value that's why we use ternary operator */}
      {/* {if(numPizzas > 0) <ul className="pizzas"> {pizzas.map((pizza, index) => (
            <Pizza
              key={index}
              pizzaObj={pizza} /></ul>} */}
    </main>
  );
}

// React uses 1-way data flow. what does that've to with props? In react, data can only be passed by parent to child by using props.
// 1-way=> easy to debug, more control over the data
// In angular, 2-way data flow => less-efficient so less performant
function Footer(props) {
  console.log(props);
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;
  // if (hour >= openHour && hour <= closeHour) {
  //   alert("We're currently open!");
  // } else {
  //   alert("Sorry we're closed!");
  // }
  console.log(hour, isOpen);

  // this early return is more useful when we want render entire components conditionally but not just some piece of JSX.
  // if (!isOpen)
  //   return (
  //     <p>
  //       CLOSED We're happy to welcome you between {openHour}:00 and {closeHour}
  //       :00.
  //     </p>
  //   );

  return (
    <footer className="footer">
      {/* {new Date().toLocaleDateString()} We're currently open! */}
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        // <div className="order">
        //   <p>We're open until {closeHour}:00. Come visit us or order online.</p>
        //   <button className="btn">Order Now</button>
        // </div>
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
      {false}
    </footer>
  );
  // return React.createElement("footer", null, "We're currently open!");
  // "footer"- HTML element, null- props, "We're currently open!"- child element
}

function Order({ closeHour, openHour, test }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order online. {test}
      </p>
    </div>
  );
}
// so never nest the fn declaration but always declare all your component in the top level
// STATES- is internal component data that can be updated by component's logic
// PROPS- is data coming from the outside & can only be updated by the parent component (immutable)
// if you need to mutate props, you actually need state

function Pizza({ pizzaObj }) {
  // console.log(props);
  // conditional rendering with multiple returns
  // if (props.pizzaObj.soldOut) return <Header />;
  // if (pizzaObj.soldOut) return null;
  console.log(pizzaObj);
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h2>{pizzaObj.name}</h2>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>

      {/* <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h2>{props.pizzaObj.name}</h2>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div> */}
    </li>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;

// React before 18
// React.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
