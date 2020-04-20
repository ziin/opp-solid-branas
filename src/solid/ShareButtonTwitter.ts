import AbstractShareButtonLink from './AbstractShareButtonLink'

export default class ShareButtonTwitter extends AbstractShareButtonLink {
  protected createLink () {
    return `https://twitter.com/share?url=${this.url}`
  }
}
