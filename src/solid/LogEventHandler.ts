import EventHandler from './EventHandler'

export default class LogEventHandler implements EventHandler {
  addEventListenerToClass (clazz: string, event: string, fn: any) {
    const elements = document.getElementsByClassName(clazz)
    for (const element of elements) {
      element.addEventListener(event, () => console.log(clazz))
    }
  }
}
