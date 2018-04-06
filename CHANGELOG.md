# CHANGELOG

## vNEXT

* [Prism](http://prismjs.com/) is now used for highlighting, which enables
  the `graphql` syntax and fixes the less-than-ideal `jsx` highlighting!
  [PR #61](https://github.com/meteor/meteor-theme-hexo/pull/61)
* The `versions` property is no longer mandatory in `_config.yml` configurations.
* Fix incorrectly escaped anchor URLs due to bug in ancient version of [`smooth-scroll`](//npm.im/smooth-scroll). [PR #60](https://github.com/meteor/hexo-theme-meteor/pull/60) [Issue #57](https://github.com/meteor/hexo-theme-meteor/issues/57)
* mobile: The menu button no longer necessitates the use of the pinky finger to reliably expand and contract it. [PR #59](https://github.com/meteor/hexo-theme-meteor/pull/59) [Issue #35](https://github.com/meteor/hexo-theme-meteor/issues/35)
* The theme now lives in a repository with the same name as the npm
  (i.e. `meteor-theme-hexo` instead of `hexo-theme-meteor`).  This simplifies
  using a local checkout of the package for testing.

## v1.0.3

* Uses the latest version of the Algolia DocSearch JavaScript library.
* Supports using a specific CSS theme bundle, as defined by the `css_bundle` setting in the deployment's configuration, allowing individual deployments to have isolated CSS bundles, while still sharing most all of the LESS source.  This is automatically set in the global configurations and no changes are necessary. The existing bundle is still being served in the same location as a fallback.  This change eliminates the need for individual deployments to specify their own colors in their `./assets/theme-colors.less` file, but maintains the support for the file in case individual deployments necessitate it in the future.
  [PR #56](https://github.com/meteor/hexo-theme-meteor/pull/56)

## v1.0.2

* Add support for Algolia's `appId` parameter to various repository's `_config.yml` files.
  [PR #54](https://github.com/meteor/hexo-theme-meteor/pull/54).
* Only load Docsearch JavaScript when Docsearch is configured.
  [PR #54](https://github.com/meteor/hexo-theme-meteor/pull/54)
* Rename `_config.yaml` to `_config.yml`.

## v1.0.1

* Initial version of theme published to npm.
