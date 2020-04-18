import AbstractShareButtonLink from "./AbstractShareButtonLink";

export default class ShareButtonTwitter extends AbstractShareButtonLink {
  constructor(clazz: string, url: string) {
    super(clazz, url);
  }

  protected createLink() {
    return `https://twitter.com/share?url=${this.url}`;
  }
}
