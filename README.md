Results in this error when run with the 1.3 beta:

```
[[[[[ ~/git/gql-experiment ]]]]]

=> Started proxy.
=> Started MongoDB.
W20151214-19:29:34.516(-8)? (STDERR)
W20151214-19:29:34.586(-8)? (STDERR) /Users/sashko/git/gql-experiment/.meteor/local/build/programs/server/app/app.js:752
W20151214-19:29:34.586(-8)? (STDERR)   "100": "Continue",
W20151214-19:29:34.586(-8)? (STDERR)        ^
W20151214-19:29:34.586(-8)? (STDERR) SyntaxError: Unexpected token :
W20151214-19:29:34.586(-8)? (STDERR)     at /Users/sashko/git/gql-experiment/.meteor/local/build/programs/server/boot.js:241:30
W20151214-19:29:34.586(-8)? (STDERR)     at Array.forEach (native)
W20151214-19:29:34.586(-8)? (STDERR)     at Function._.each._.forEach (/Users/sashko/git/meteor/dev_bundle/server-lib/node_modules/underscore/underscore.js:79:11)
W20151214-19:29:34.587(-8)? (STDERR)     at /Users/sashko/git/gql-experiment/.meteor/local/build/programs/server/boot.js:137:5
=> Exited with code: 8
```
