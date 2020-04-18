import AbstractShareButtonLink from "./AbstractShareButtonLink";

export default class ShareButtonFacebook extends AbstractShareButtonLink {
  constructor(clazz: string, url: string) {
    super(clazz, url);
  }

  protected createLink() {
    return `https://facebook.com/share.php?u=${this.url}`;
  }
}
