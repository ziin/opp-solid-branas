import ShareButtonURL from "./ShareButtonURL";

export default class ShareButtonURLTwitter extends ShareButtonURL {
  protected getShareLink(): string {
    return `https://twitter.com/share?url=${this.url}`;
  }
}
