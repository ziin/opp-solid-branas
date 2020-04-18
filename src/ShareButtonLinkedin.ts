import AbstractShareButtonLink from "./AbstractShareButtonLink";

export default class ShareButtonLinkedin extends AbstractShareButtonLink {
  constructor(clazz: string, url: string) {
    super(clazz, url);
  }

  protected createLink() {
    return `https://linkedin.com/shareArticle?url=${this.url}`;
  }
}
