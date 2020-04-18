import AbstractShareButton from "./AbstractShareButton";
import ShareButtonFacebook from "./ShareButtonFacebook";
import ShareButtonLinkedin from "./ShareButtonLinkedin";
import ShareButtonPrint from "./ShareButtonPrint";
import ShareButtonTwitter from "./ShareButtonTwitter";

const facebook: AbstractShareButton = new ShareButtonFacebook(
  "btn--facebook",
  "https://www.google.com"
);
facebook.bind();

const twitter: AbstractShareButton = new ShareButtonTwitter(
  "btn--twitter",
  "https://www.google.com"
);
twitter.bind();

const linkedin: AbstractShareButton = new ShareButtonLinkedin(
  "btn--linkedin",
  "https://www.google.com"
);
linkedin.bind();

const print: AbstractShareButton = new ShareButtonPrint("btn--print");
print.bind();
