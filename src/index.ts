import { ShareURLButton } from "./ShareURLButton";

const shareURLButton = new ShareURLButton("https://www.google.com");
shareURLButton.bind("btn--facebook");
shareURLButton.bind("btn--twitter");
shareURLButton.bind("btn--linkedin");
