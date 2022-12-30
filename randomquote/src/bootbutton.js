import { useState } from "react";

import React from "react";
class SocialLink extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* <h4>Here we are using bootstrap</h4> */}

        <div className="social">
          <a
            href={`https://twitter.com/intent/tweet?text= ${this.props.urlTweet}`}
            target="_blank"
            id="tweet-quote"
          >
            <i
              class="bi bi-twitter"
              style={{
                fontSize: "2rem",
                color: "#00acee",
              }}
              onMouseOver={({ target }) => {
                // target.style.color = "#747DFA";
                target.style.fontSize = "2.2rem";
              }}
              onMouseOut={({ target }) => {
                // target.style.color = "#00acee";
                target.style.fontSize = "2rem";
              }}
            ></i>
          </a>
          <spam>
            <div style={{ width: "0.6rem", height: "1rem" }}></div>{" "}
          </spam>
          <a
            href="https://www.facebook.com/sharer.php?u=http://localhost:3000/"
            target="_blank"
          >
            <i
              class="bi bi-facebook"
              style={{ fontSize: "2rem", color: "#4267B2" }}
              onMouseOver={({ target }) => {
                // target.style.color = "#00acee";

                target.style.fontSize = "2.2rem";
              }}
              onMouseOut={({ target }) => {
                // target.style.color = "#4267B2";
                target.style.fontSize = "2rem";
              }}
            ></i>
          </a>
        </div>
        {/* <i></i> */}
        {/* <i class="bi bi-facebook"></i> */}
      </div>
    );
  }
}
export default SocialLink;
