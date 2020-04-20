import { Events } from "./types";

export default interface EventHandler {
  addEventListener(
    event: Events,
    classNames: string,
    callback: () => void
  ): void;
}

export class EventHandlerDOM implements EventHandler {
  addEventListener(
    event: Events,
    classNames: string,
    callback: () => void
  ): void {
    for (const element of document.getElementsByClassName(classNames)) {
      element.addEventListener(event, callback);
    }
  }
}
