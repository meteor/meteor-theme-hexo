# CHANGELOG

## vNEXT

* Elements with HTML IDs of `analytics` will no longer break Segment.io.
  [PR #](https://github.com/meteor/meteor-theme-hexo/pull/)

## v1.0.5

* The search box is now pinned to the menu and won't scroll off the page when
  arriving via an anchor link (which intentionally _highlights_ the target page
  in the sidebar.
  [PR #62](https://github.com/meteor/meteor-theme-hexo/pull/62)
* The background color on `<code>` blocks has been re-instated after it was
  inadvertently removed.
  [PR #64](https://github.com/meteor/meteor-theme-hexo/pull/64)

## v1.0.4

* [Prism](http://prismjs.com/) is now used for highlighting, which enables
  the `graphql` syntax and fixes the less-than-ideal `jsx` highlighting!
  [PR #61](https://github.com/meteor/meteor-theme-hexo/pull/61)
* The `versions` property is no longer mandatory in `_config.yml` configurations.
* Fix incorrectly escaped anchor URLs due to bug in ancient version of [`smooth-scroll`](//npm.im/smooth-scroll). [PR #60](https://github.com/meteor/meteor-theme-hexo/pull/60) [Issue #57](https://github.com/meteor/meteor-theme-hexo/issues/57)
* mobile: The menu button no longer necessitates the use of the pinky finger to reliably expand and contract it. [PR #59](https://github.com/meteor/meteor-theme-hexo/pull/59) [Issue #35](https://github.com/meteor/meteor-theme-hexo/issues/35)
* The theme now lives in a repository with the same name as the npm
  (i.e. `meteor-theme-hexo` instead of `meteor-theme-hexo`).  This simplifies
  using a local checkout of the package for testing.

## v1.0.3

* Uses the latest version of the Algolia DocSearch JavaScript library.
* Supports using a specific CSS theme bundle, as defined by the `css_bundle` setting in the deployment's configuration, allowing individual deployments to have isolated CSS bundles, while still sharing most all of the LESS source.  This is automatically set in the global configurations and no changes are necessary. The existing bundle is still being served in the same location as a fallback.  This change eliminates the need for individual deployments to specify their own colors in their `./assets/theme-colors.less` file, but maintains the support for the file in case individual deployments necessitate it in the future.
  [PR #56](https://github.com/meteor/meteor-theme-hexo/pull/56)

## v1.0.2

* Add support for Algolia's `appId` parameter to various repository's `_config.yml` files.
  [PR #54](https://github.com/meteor/meteor-theme-hexo/pull/54).
* Only load Docsearch JavaScript when Docsearch is configured.
  [PR #54](https://github.com/meteor/meteor-theme-hexo/pull/54)
* Rename `_config.yaml` to `_config.yml`.

## v1.0.1

* Initial version of theme published to npm.
