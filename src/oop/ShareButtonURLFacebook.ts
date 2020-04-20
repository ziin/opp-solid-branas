import ShareButtonURL from "./ShareButtonURL";

export default class ShareButtonURLFacebook extends ShareButtonURL {
  protected getShareLink() {
    return `https://facebook.com/share.php?u=${this.url}`;
  }
}
