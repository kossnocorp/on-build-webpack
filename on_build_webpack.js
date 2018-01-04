/**
 * @module WebpackOnBuildPlugin
 */

/**
 * @constructor
 * @param {onBuildCallback} callback - will be called right after build.
 * @param {boolean} beforeBuild - Toggle to run the callback before the build.
 */
function WebpackOnBuildPlugin(callback, beforeBuild) {
  this.callback = callback;
  this.event = beforeBuild ? 'compile' : 'done';
};

/**
 * @callback onBuildCallback
 * @param {object} stats - webpack stats object
 */

/**
 * @param {object} compiler
 */
WebpackOnBuildPlugin.prototype.apply = function(compiler) {
  compiler.plugin(this.event, this.callback);
};

module.exports = WebpackOnBuildPlugin;
