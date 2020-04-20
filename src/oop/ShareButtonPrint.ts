import ShareButton from "./ShareButton";

export default class ShareButtonPrint extends ShareButton {
  createOnClickAction() {
    return () => window.print();
  }
}
