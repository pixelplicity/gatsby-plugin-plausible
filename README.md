# gatsby-plugin-plausible

[![npm package](https://flat.badgen.net/npm/v/gatsby-plugin-plausible)](https://badgen.net/npm/v/gatsby-plugin-plausible)
[![Maintainability](https://flat.badgen.net/codeclimate/maintainability/Aquilio/gatsby-plugin-plausible)](https://codeclimate.com/github/Aquilio/gatsby-plugin-plausible/maintainability)
![Dependabot](https://flat.badgen.net/dependabot/thepracticaldev/dev.to?icon=dependabot)

A Gatsby plugin for adding [Plausible](https://plausible.io/) analytics to your Gatsby site.

The plugin includes the Plausible tracking script. It supports using a custom domain, optional referrer tracking and excluding specific paths from recording page views.

---

- [Install](#install)
- [How to use](#how-to-use)
  - [Options](#options)
  - [Pageview events](#pageview-events)
  - [Triggering custom events](#triggering-custom-events)
- [Changelog](#changelog)
- [License](#license)

## Install

`npm install --save gatsby-plugin-plausible`

## How to use

```javascript
// In your gatsby-config.js
module.exports = {
  plugins: [
    // The only required option is the domain
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `aquil.io`,
      },
    },
  ],
};
```

_NOTE: By default, this plugin only generates output when run in production mode. To test your tracking code, run `gatsby build && gatsby serve`_.

### Options

| Option             | Explanation                                                                                 |
| ------------------ | ------------------------------------------------------------------------------------------- |
| `domain`           | The domain configured in Plausible (required)                                               |
| `customDomain`     | Custom domain (if configured in Plausible's dashboard)                                      |
| `trackAcquisition` | Whether to enable referral tracking (This will add special cookie for acquisition tracking) |
| `excludePaths`     | Array of pathnames where page views will not be sent                                        |

### Pageview events

Pageviews are sent automatically when a user changes routes, including the initial load of your site.

### Triggering custom events

To track goals and conversions you have to trigger custom events first.

```js
window.plausible('Signup', {
  callback: () => console.info('Sent Signup event'),
});
```

The event name can be anything. The second argument is an object with options. The only supported option is `callback` that is called once the event has been sent.

_NOTE: Custom events will not show up right away. You have to configure a goal in your Plausible dashboard_.

## Changelog

See [CHANGELOG.md](CHANGELOG.md).

## License

[MIT](https://github.com/Aquilio/gatsby-plugin-plausible/blob/master/LICENSE) © [Aquil.io](https://aquil.io)
