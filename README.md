# file-watcher for NodeCG

file-watcher is a [NodeCG](http://github.com/nodecg/nodecg) bundle. It works with NodeCG versions which satisfy this [semver](https://docs.npmjs.com/getting-started/semantic-versioning) range: `^1.1.1`

This bundle includes a server-side extension that watches for all file changes under the `bundles/` directory.

## File change events

When files change, the extension sends out a message that you can listen for in other bundles like so:

```
nodecg.listenFor(
  'bundleFileChanged',
  'file-watcher',
  ({ bundleName, file }) =>
    nodecg.log.debug(
      `File ${file} changed in bundle ${bundleName}`
    )
);
```

## Reloading pages

This bundle also mounts a web directory with some utility scripts. In particular, you can include this utility on dashboard and graphics pages to auto-reload on changes:

```
import reloadOnFileChange from 
  '/bundles/file-watcher/public/file-watcher.mjs';
reloadOnFileChange(nodecg);
```
