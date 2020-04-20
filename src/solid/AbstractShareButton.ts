import EventHandler from './EventHandler';

export default abstract class AbstractShareButton {
  private readonly eventHandler: EventHandler;
  private readonly clazz: string;

  constructor (eventHandler: EventHandler, clazz: string) {
    this.clazz = clazz
    this.eventHandler = eventHandler
  }

  protected abstract createAction(): string;

  // GoF: template method design pattern
  bind () {
    const action = this.createAction()
    this.eventHandler.addEventListenerToClass(this.clazz, 'click', action)
  }
}
