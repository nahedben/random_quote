import React from "react";
import quotes from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialLink from "./bootbutton";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      element: quotes[Math.floor(Math.random() * quotes.length)],
      col1: Math.floor(Math.random() * 230),
      col2: Math.floor(Math.random() * 230),
      col3: Math.floor(Math.random() * 230),
      stcolor: "rgb(" + this.col1 + "," + this.col2 + "," + this.col3 + ")",
    };
    this.handleActualisation = this.handleActualisation.bind(this);
    const bgrC = "rgb(" + this.col1 + "," + this.col2 + "," + this.col3 + ")";
  }
  // const bgrC="rgb(" + this.col1 + "," + this.col2 + "," + this.col3 + ")"
  componentDidMount() {
    this.setState({
      element: quotes[Math.floor(Math.random() * quotes.length)],
      col1: Math.floor(Math.random() * 230),
      col2: Math.floor(Math.random() * 230),
      col3: Math.floor(Math.random() * 230),
      stcolor:
        "rgb(" +
        this.state.col1 +
        "," +
        this.state.col2 +
        "," +
        this.state.col3 +
        ")",
    });
    // let x =
    //   "rgb(" +
    //   this.state.col1 +
    //   "," +
    //   this.state.col2 +
    //   "," +
    //   this.state.col3 +
    //   ")";

    document.body.style.backgroundColor = this.state.stcolor;

    document.getElementById("new-quote").style.backgroundColor = "black";
    // "rgb(" +
    // this.state.col1 +
    // "," +
    // this.state.col2 +
    // "," +
    // this.state.col3 +
    // ")";
    // document.getElementById("new-quote").style.backgroundColor = x;

    // "rgb(" +
    // this.state.col1 +
    // "," +
    // this.state.col2 +
    // "," +
    // this.state.col3 +
    // ")";
    // document.getElementbon.style.backgroundColor = this.state.stcolor;
  }

  handleActualisation(event) {
    this.setState({
      element: quotes[Math.floor(Math.random() * quotes.length)],
      col1: Math.floor(Math.random() * 230),
      col2: Math.floor(Math.random() * 230),
      col3: Math.floor(Math.random() * 230),
      stcolor:
        "rgb(" +
        this.state.col1 +
        "," +
        this.state.col2 +
        "," +
        this.state.col3 +
        ")",
    });

    document.body.style.backgroundColor = this.state.stcolor;
    document.getElementById(
      "new-quote"
    ).style.backgroundColor = this.state.stcolor;
    // document.getElementById("new-quote").style.borderColor = this.state.stcolor;
    // document.body.style.backgroundColor = this.state.stcolor;
    // document.getElementById(
    //   "new-quote"
    // ).style.backgroundColor = this.state.stcolor;
    // "rgb(" +
    //   this.state.col1 +
    //   "," +
    //   this.state.col2 +
    //   "," +
    //   this.state.col3 +
    //   ")";
  }
  handleTweetPost(event) {}

  render() {
    let tweet = this.state.element.text + "   De: " + this.state.element.author;

    const el2 = <FontAwesomeIcon icon={faQuoteLeft} />;

    return (
      <div
        id="quote-box"
        className="quote-b"
        style={{ borderRadius: 5, backgroundColor: "#fefefe" }}
      >
        <h2 id="text">
          {el2} {this.state.element.text}
        </h2>
        <h5
          style={{
            textAlign: "right",
            marginTop: "20px",
            fontSize: "0.8rem",
            fontFamily: "sans-serif",
            fontWeight: "bolder",
          }}
          id="author"
        >
          De {this.state.element.author}
        </h5>
        <button
          class="btn btn-secondary"
          onClick={this.handleActualisation}
          id="new-quote"
          style={{
            margin: "10px",
            fontFamily: "sans-serif",
          }}
        >
          New Quote!!
        </button>

        <SocialLink urlTweet={tweet} />
      </div>
    );
  }
}

export default QuoteBox;
