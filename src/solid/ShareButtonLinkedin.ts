import AbstractShareButtonLink from './AbstractShareButtonLink'

export default class ShareButtonLinkedin extends AbstractShareButtonLink {
  protected createLink () {
    return `https://linkedin.com/shareArticle?url=${this.url}`
  }
}
