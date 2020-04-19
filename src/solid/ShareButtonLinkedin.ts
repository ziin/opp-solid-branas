import AbstractShareButtonLink from "./AbstractShareButtonLink";
import EventHandler from "./EventHandler";

export default class ShareButtonLinkedin extends AbstractShareButtonLink {
  constructor(eventHandler: EventHandler, clazz: string, url: string) {
    super(eventHandler, clazz, url);
  }

  protected createLink() {
    return `https://linkedin.com/shareArticle?url=${this.url}`;
  }
}
