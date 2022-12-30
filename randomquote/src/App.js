import logo from "./logo.svg";
import "./App.css";
import quotes from "./data";
import React from "react";
import QuoteBox from "./quoteEl";
import SocialLink from "./bootbutton";
function App() {
  let col1 = Math.floor(Math.random() * 220);
  let col2 = Math.floor(Math.random() * 220);
  let col3 = Math.floor(Math.random() * 220);
  return (
    <div
      className="App"
      style={{
        height: "50%",
        width: "50%",
        margin: "100px auto auto auto",
        padding: 10,
        background: "offWhite",
      }}
    >
      <div className="box-container">
        <QuoteBox
          className="QuoteBox"
          style={{ margin: "auto" }}
          col1={col1}
          col2={col2}
          col3={col3}
        />
      </div>
    </div>
  );
}

export default App;
