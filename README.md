# on-build-webpack

[Webpack](http://webpack.github.io/) plugin that gives ability to add callback
after build.

## Installation

```
npm install --save-dev on-build-webpack
```

## Usage

In webpack config file:

``` javascript
var WebpackOnBuildPlugin = require('on-build-webpack');

module.exports = {
  // ...
  plugins: [
    new WebpackOnBuildPlugin(function(stats) {
      // Do whatever you want...
    }),
  ],
  // ...
}
```

