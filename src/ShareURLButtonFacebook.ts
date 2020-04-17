import { AbstractShareURLButton } from "./AbstractShareURLButton";

export class ShareURLButtonFacebook extends AbstractShareURLButton {
  constructor(clazz: string, url: string) {
    super(clazz, url);
  }

  protected createLink() {
    return `https://facebook.com/share.php?u=${this.url}`;
  }
}
