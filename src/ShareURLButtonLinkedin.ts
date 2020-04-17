import { AbstractShareURLButton } from "./AbstractShareURLButton";

export class ShareURLButtonLinkedin extends AbstractShareURLButton {
  constructor(clazz: string, url: string) {
    super(clazz, url);
  }

  protected createLink() {
    return `https://linkedin.com/shareArticle?url=${this.url}`;
  }
}
