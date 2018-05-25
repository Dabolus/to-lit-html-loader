const loaderUtils = require('loader-utils');

module.exports = function () {};

module.exports.pitch = function (remainingRequest) {
  this.cacheable && this.cacheable();

  return `
    const {html} = require('lit-html');
    const content = require(${loaderUtils.stringifyRequest(this, '!!' + remainingRequest)});
    const str = typeof result === 'string' ? result : result.toString();
    module.exports = html([str]);
  `;
};
