import AbstractShareButtonLink from './AbstractShareButtonLink'

export default class ShareButtonFacebook extends AbstractShareButtonLink {
  protected createLink: string () {
    return `https://facebook.com/share.php?u=${this.url}`
  }
}
