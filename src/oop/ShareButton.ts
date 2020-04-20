import EventHandler from "./EventHandler";
import { Events } from "./types";

export default abstract class ShareButton {
  private eventHandler: EventHandler;
  private classNames: string;

  constructor(eventHandler: EventHandler, classNames: string | string[]) {
    this.classNames =
      typeof classNames === "string" ? classNames : classNames.join(" ");
    this.eventHandler = eventHandler;
  }

  protected abstract createOnClickAction(): () => void;

  bind() {
    this.eventHandler.addEventListener(
      Events.click,
      this.classNames,
      this.createOnClickAction()
    );
  }
}
