import ShareButtonURL from "./ShareButtonURL";

export default class ShareButtonURLLinkedin extends ShareButtonURL {
  protected getShareLink() {
    return `https://linkedin.com/shareArticle?url=${this.url}`;
  }
}
