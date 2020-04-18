import EventHandler from "./EventHandler";

export default abstract class AbstractShareButton {
  private eventHandler: EventHandler;
  private clazz: string;

  constructor(eventHandler: EventHandler, clazz: string) {
    this.clazz = clazz;
    this.eventHandler = eventHandler;
  }

  protected abstract createAction(): any;

  // GoF: template method design pattern
  bind() {
    const action = this.createAction();
    this.eventHandler.addEventListenerToClass(this.clazz, "click", action);
  }
}
