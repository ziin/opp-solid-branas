import { AbstractShareURLButton } from "./AbstractShareURLButton";

export class ShareURLButtonTwitter extends AbstractShareURLButton {
  constructor(clazz: string, url: string) {
    super(clazz, url);
  }

  protected createLink() {
    return `https://twitter.com/share?url=${this.url}`;
  }
}
