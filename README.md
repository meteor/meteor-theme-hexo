[Read the docs docs.](https://docs-docs.netlify.com/docs/docs/)

## Usage

The theme is available on `npm` as `meteor-theme-hexo` (please note the slight naming difference to this repository).  The theme can be used by either:

1. (preferred) Installing the theme from `npm` and allowing dependency auto-update tools, like @renovate-bot or @greenkeeperio-bot, to update the npm for you.  This requires you to set the `theme` in your `_config.yml` as `../node_modules/meteor-theme-hexo`; or
2. (less preferred) Cloning this repository into Hexo's `themes/meteor` directory and referring to the `theme` in your `_config.yml` as `meteor.  This will require you to update the theme, or at least its submodule, manually!

## npm

This theme deploys to npm as [`meteor-theme-hexo`](https://www.npmjs.com/packages/meteor-theme-hexo).  The package is named slightly different from its GitHub repository because without this naming convention, Hexo believes this to be a plugin!  (Hexo doesn't typically endorse installing a theme from npm.)

> TODO: Rename this repository?

## Known deployments

> Important: Please submit a PR to update this list when making new deployments to ensure they receive important PRs (such as dependency and repo consistency updates).

| GitHub Repo :octocat:  | Deployment URL :rocket: |
| --- | --- |
| [meteor/guide](https://github.com/meteor/guide/) | https://guide.meteor.com/ |
| [meteor/docs](https://github.com/meteor/docs/) | https://docs.meteor.com/ |
| [meteor/galaxy-docs](https://github.com/meteor/galaxy-docs/) | https://galaxy-guide.meteor.com/ |
| [apollographql/apollo](https://github.com/apollographql/apollo/) | https://www.apollographql.com/docs/ |
| [apollographql/apollo-client](https://github.com/apollographql/apollo-client/) | https://www.apollographql.com/docs/react/ |
| [apollographql/apollo-link](https://github.com/apollographql/apollo-link/) | https://www.apollographql.com/docs/link/ |
| [apollographql/apollo-angular](https://github.com/apollographql/apollo-angular/) | https://www.apollographql.com/docs/angular/ |
| [apollographql/apollo-ios](https://github.com/apollographql/apollo-ios/) | https://www.apollographql.com/docs/ios/ |
| [apollographql/apollo-android](https://github.com/apollographql/apollo-android/) | https://www.apollographql.com/docs/android/ |
| [apollographql/docs-docs](https://github.com/apollographql/docs-docs/) | https://docs-docs.netlify.com/docs/docs/ |
| [apollographql/graphql-tools](https://github.com/apollographql/graphql-tools/) | https://apollographql.com/docs/graphql-tools/ |
| [apollographql/apollo-server](https://github.com/apollographql/apollo-server/) | https://apollographql.com/docs/apollo-server/ |
| [apollographql/subscriptions-transport-ws](https://github.com/apollographql/subscriptions-transport-ws/) | https://www.apollographql.com/docs/graphql-subscriptions/ |
| [apollographql/engine-docs](https://github.com/apollographql/engine-docs/) | https://www.apollographql.com/docs/engine/ |
| [apollographql/community](https://github.com/apollographql/community/) | https://www.apollographql.com/docs/community/ |

If a change to this theme is made, those repos need to update either their submodule or their `meteor-theme-hexo`

**Please update/submit a PR if you find other locations where the update is necessary!**
