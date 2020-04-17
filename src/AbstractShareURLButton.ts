import { EventHandler } from "./EventHandler";

export abstract class AbstractShareURLButton {
  private eventHandler: EventHandler;
  protected url: string;
  private clazz: string;

  constructor(clazz: string, url: string) {
    this.url = url;
    this.clazz = clazz;
    this.eventHandler = new EventHandler();
  }

  protected abstract createLink(): string;

  // GoF: template method design pattern
  bind() {
    const link = this.createLink();
    this.eventHandler.addEventListenerToClass(this.clazz, "click", () =>
      window.open(link)
    );
  }
}
