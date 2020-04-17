import { EventHandler } from "./EventHandler";

export class ShareURLButton {
  private eventHandler: EventHandler;
  private url: string;
  constructor(url: string) {
    this.url = url;
    this.eventHandler = new EventHandler();
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

    this.eventHandler.addEventListenerToClass(clazz, "click", () =>
      window.open(link)
    );
  }
}
