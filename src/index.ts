import { ShareURLButtonFacebook } from "./ShareURLButtonFacebook";
import { ShareURLButtonLinkedin } from "./ShareURLButtonLinkedin";
import { ShareURLButtonTwitter } from "./ShareURLButtonTwitter";

const facebook = new ShareURLButtonFacebook(
  "btn--facebook",
  "https://www.google.com"
);
facebook.bind();

const twitter = new ShareURLButtonTwitter(
  "btn--twitter",
  "https://www.google.com"
);
twitter.bind();

const linkedin = new ShareURLButtonLinkedin(
  "btn--linkedin",
  "https://www.google.com"
);
linkedin.bind();
