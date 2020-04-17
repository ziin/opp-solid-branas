export class EventHandler {
  addEventListenerToClass(clazz: string, event: string, fn: any) {
    const elements = document.getElementsByClassName(clazz);
    for (const element of elements) {
      element.addEventListener(event, fn);
    }
  }
}
