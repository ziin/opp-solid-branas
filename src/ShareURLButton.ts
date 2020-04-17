export class ShareURLButton {
  private url: string;
  constructor(url: string) {
    this.url = url;
  }

  bind(clazz: string) {
    let link: string;
    if (clazz === "btn--facebook") {
      link = `https://facebook.com/share.php?u=${this.url}`;
    } else if (clazz === "btn--twitter") {
      link = `https://twitter.com/share?url=${this.url}`;
    } else if (clazz === "btn--linkedin") {
      link = `https://linkedin.com/shareArticle?url=${this.url}`;
    }

    const elements = document.getElementsByClassName(clazz);
    for (const element of elements) {
      element.addEventListener("click", () => window.open(link));
    }
  }
}
