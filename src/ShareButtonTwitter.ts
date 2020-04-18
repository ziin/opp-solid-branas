import AbstractShareButtonLink from "./AbstractShareButtonLink";
import EventHandler from "./EventHandler";

export default class ShareButtonTwitter extends AbstractShareButtonLink {
  constructor(eventHandler: EventHandler, clazz: string, url: string) {
    super(eventHandler, clazz, url);
  }

  protected createLink() {
    return `https://twitter.com/share?url=${this.url}`;
  }
}
