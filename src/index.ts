import AbstractShareButton from "./AbstractShareButton";
import DOMEventHandler from "./DOMEventHandler";
import ShareButtonFacebook from "./ShareButtonFacebook";
import ShareButtonLinkedin from "./ShareButtonLinkedin";
import ShareButtonPrint from "./ShareButtonPrint";
import ShareButtonTwitter from "./ShareButtonTwitter";

const eventHandler = new DOMEventHandler();
// const eventHandler = new LogEventHandler();

const facebook: AbstractShareButton = new ShareButtonFacebook(
  eventHandler,
  "btn--facebook",
  "https://www.google.com"
);
facebook.bind();

const twitter: AbstractShareButton = new ShareButtonTwitter(
  eventHandler,
  "btn--twitter",
  "https://www.google.com"
);
twitter.bind();

const linkedin: AbstractShareButton = new ShareButtonLinkedin(
  eventHandler,
  "btn--linkedin",
  "https://www.google.com"
);
linkedin.bind();

const print: AbstractShareButton = new ShareButtonPrint(
  eventHandler,
  "btn--print"
);
print.bind();
