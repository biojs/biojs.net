---
title: "Speeding up biojs.io"
layout: post
date: 2015-02-22 20:54:16
---

Hi all,

we are happy to announce that we moved [`biojs.io`](http://biojs.io) from Github Pages
to Amazon S3 and Cloudfront (Amazon's CDN).

You can still access the `gh-pages` development branch under [dev.biojs.io](http://dev.biojs.io).
However all commits to `stable` will trigger a [Travis build](https://github.com/biojs/registry-ui/blob/gh-pages/.travis.yml).
Our current build script does the usual minimization jobs like

* bundles our 24 angular scripts to a single one
* minifies the bundled JS source code
* compresses the HTML + CSS sources

Everything is then pushed to S3 and served to you via Cloudfront.
Those tiny changes reduced the `DOMContentLoaded` event to 500-800ms
(depending on your connection and [distance to next CloudFront](https://aws.amazon.com/cloudfront/details/) ).
Subsequent reloads will be even faster as all assets are cached in your browser -
`biojs.io` will load in about 300ms.

We hope you enjoy the speed improvements ;-)
