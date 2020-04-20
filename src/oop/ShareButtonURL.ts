import EventHandler from "./EventHandler";
import ShareButton from "./ShareButton";

export default abstract class ShareButtonURL extends ShareButton {
  protected url: string;
  constructor(
    eventHandler: EventHandler,
    classNames: string | string[],
    url: string
  ) {
    super(eventHandler, classNames);
    this.url = url;
  }

  protected abstract getShareLink(): string;

  protected createOnClickAction() {
    return () => window.open(this.getShareLink());
  }
}
