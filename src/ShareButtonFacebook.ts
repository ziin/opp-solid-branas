import AbstractShareButtonLink from "./AbstractShareButtonLink";
import EventHandler from "./EventHandler";

export default class ShareButtonFacebook extends AbstractShareButtonLink {
  constructor(eventHandler: EventHandler, clazz: string, url: string) {
    super(eventHandler, clazz, url);
  }

  protected createLink() {
    return `https://facebook.com/share.php?u=${this.url}`;
  }
}
