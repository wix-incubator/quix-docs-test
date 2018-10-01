const base = {
  name: 'Gatsby Starter Kit',
  url: 'https://github.com/wix-incubator/quix-docs-test'
};

const social = {
  github: 'svitlanako',
  twitter: 'svetlana_apr'
}

const config = {
  /* meta tags */
  siteTitle: `${base.name} - a series of GatsbyJS starters`,
  siteTitlePostfix: ` - ${base.name}`,
  siteDescription: `${
    base.name
  } is a series starters: Minimal, Equipped, Themed, Website, Blog.`,
  siteImage: 'preview.jpg',
  siteLanguage: 'en',

  /* site header */
  headerTitle: `${base.name}`,
  headerSubTitle: 'a series of starters for GatsbyJS',

  /* url */
  siteUrl: base.url,
  // pathPrefix: '',

  /* social */
  gitUrl: `http://github.com/${social.github}`,
  twitterUrl: `http://twitter.com/${social.twitter}`,

  pathPrefix: "/quix-docs-test" // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
};

module.exports = config;