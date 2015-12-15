Results in this error when run with the 1.3 beta:

```
[[[[[ ~/git/gql-experiment ]]]]]

=> Started proxy.
=> Started MongoDB.

ReferenceError: dirPath is not defined
    at ImportScanner._tryToResolveImportedPath (/tools/isobuild/import-scanner.js:273:27)
    at /tools/isobuild/import-scanner.js:96:36
    at Array.forEach (native)
    at Function._.each._.forEach (/Users/sashko/git/meteor/dev_bundle/lib/node_modules/underscore/underscore.js:79:11)
    at ImportScanner._scanDeps (/tools/isobuild/import-scanner.js:95:5)
    at /tools/isobuild/import-scanner.js:142:27
    at Array.forEach (native)
    at Function._.each._.forEach (/Users/sashko/git/meteor/dev_bundle/lib/node_modules/underscore/underscore.js:79:11)
    at ImportScanner._scanDeps (/tools/isobuild/import-scanner.js:95:5)
    at /tools/isobuild/import-scanner.js:68:24
    at Array.forEach (native)
    at ImportScanner.getOutputFiles (/tools/isobuild/import-scanner.js:66:22)
    at Object.fullLink (/tools/isobuild/linker.js:969:8)
    at /tools/isobuild/compiler-plugin.js:686:28
    at /tools/utils/buildmessage.js:359:18
    at [object Object]._.extend.withValue (/tools/utils/fiber-helpers.js:89:14)
    at /tools/utils/buildmessage.js:352:34
    at [object Object]._.extend.withValue (/tools/utils/fiber-helpers.js:89:14)
    at /tools/utils/buildmessage.js:350:23
    at [object Object]._.extend.withValue (/tools/utils/fiber-helpers.js:89:14)
    at Object.enterJob (/tools/utils/buildmessage.js:324:26)
    at PackageSourceBatch._linkJS (/tools/isobuild/compiler-plugin.js:685:18)
    at PackageSourceBatch.getResources (/tools/isobuild/compiler-plugin.js:586:48)
    at /tools/isobuild/bundler.js:753:37
    at Array.forEach (native)
    at ServerTarget._emitResources (/tools/isobuild/bundler.js:736:19)
    at /tools/isobuild/bundler.js:515:12
    at /tools/utils/buildmessage.js:359:18
    at [object Object]._.extend.withValue (/tools/utils/fiber-helpers.js:89:14)
    at /tools/utils/buildmessage.js:352:34
    at [object Object]._.extend.withValue (/tools/utils/fiber-helpers.js:89:14)
    at /tools/utils/buildmessage.js:350:23
    at [object Object]._.extend.withValue (/tools/utils/fiber-helpers.js:89:14)
    at Object.enterJob (/tools/utils/buildmessage.js:324:26)
    at ServerTarget.make (/tools/isobuild/bundler.js:506:18)
    at /tools/isobuild/bundler.js:2227:14
    at /tools/isobuild/bundler.js:2295:20
    at /tools/utils/buildmessage.js:271:13
    at [object Object]._.extend.withValue (/tools/utils/fiber-helpers.js:89:14)
    at /tools/utils/buildmessage.js:264:29
    at [object Object]._.extend.withValue (/tools/utils/fiber-helpers.js:89:14)
    at /tools/utils/buildmessage.js:262:18
    at [object Object]._.extend.withValue (/tools/utils/fiber-helpers.js:89:14)
    at /tools/utils/buildmessage.js:253:23
    at [object Object]._.extend.withValue (/tools/utils/fiber-helpers.js:89:14)
    at Object.capture (/tools/utils/buildmessage.js:252:19)
    at Object.exports.bundle (/tools/isobuild/bundler.js:2180:31)
    at /tools/runners/run-app.js:585:36
    at time (/tools/tool-env/profile.js:238:28)
    at Function.run (/tools/tool-env/profile.js:391:12)
    at bundleApp (/tools/runners/run-app.js:575:34)
    at [object Object]._.extend._runOnce (/tools/runners/run-app.js:628:35)
    at [object Object]._.extend._fiber (/tools/runners/run-app.js:880:28)
    at /tools/runners/run-app.js:402:12
```
