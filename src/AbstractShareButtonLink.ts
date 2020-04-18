import AbstractShareButton from "./AbstractShareButton";

export default abstract class AbstractShareButtonLink extends AbstractShareButton {
  protected url: string;

  constructor(clazz: string, url: string) {
    super(clazz);
    this.url = url;
  }

  protected abstract createLink(): string;

  createAction() {
    const link = this.createLink();
    return () => window.open(link);
  }
}
