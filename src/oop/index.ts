import { EventHandlerDOM } from "./EventHandler";
import ShareButtonPrint from "./ShareButtonPrint";
import ShareButtonURLFacebook from "./ShareButtonURLFacebook";
import ShareButtonURLLinkedin from "./ShareButtonURLLinkedin";
import ShareButtonURLTwitter from "./ShareButtonURLTwitter";

const eventHandler = new EventHandlerDOM();

const print = new ShareButtonPrint(eventHandler, ["btn--print"]);
print.bind();

const twitter = new ShareButtonURLTwitter(
  eventHandler,
  "btn--twitter",
  "https://www.google.com"
);
twitter.bind();

const facebook = new ShareButtonURLFacebook(
  eventHandler,
  "btn--facebook",
  "https://www.google.com"
);
facebook.bind();

const linkedin = new ShareButtonURLLinkedin(
  eventHandler,
  "btn--linkedin",
  "https://www.google.com"
);
linkedin.bind();
