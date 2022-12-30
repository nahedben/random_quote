import React from "react";
import {
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  FacebookShareCount,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import QuoteBox from "./quoteEl";

class ShareButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fparse.com" */}
        {/* {`http://www.facebook.com/dialog/send?=${this.props.urlTwit}` */}
        <FacebookShareButton
          url="https://www.facebook.com/sharer.php?u=http://localhost:3000/"
          quote="here what!"
          hashtag="#Imthere"
        >
          <FacebookIcon
            logoFillColor="white"
            round={true}
            style={{ margin: 5 }}
          ></FacebookIcon>
        </FacebookShareButton>

        <TwitterShareButton url={this.props.urlTwit}>
          <TwitterIcon
            logoFillColor="white"
            round={true}
            style={{ margin: 5 }}
          ></TwitterIcon>
        </TwitterShareButton>
      </div>
    );
  }
}

export default ShareButton;
