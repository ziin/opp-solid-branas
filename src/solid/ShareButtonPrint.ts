import AbstractShareButton from './AbstractShareButton'

export default class ShareButtonPrint extends AbstractShareButton {
  protected createAction () {
    return () => window.print()
  }
}
