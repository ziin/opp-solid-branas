import AbstractShareButton from "./AbstractShareButton";
import EventHandler from "./EventHandler";

export default abstract class AbstractShareButtonLink extends AbstractShareButton {
  protected url: string;

  constructor(eventHandler: EventHandler, clazz: string, url: string) {
    super(eventHandler, clazz);
    this.url = url;
  }

  protected abstract createLink(): string;

  createAction() {
    const link = this.createLink();
    return () => window.open(link);
  }
}
