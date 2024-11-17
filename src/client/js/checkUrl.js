const validUrl = require("valid-url");

const isValidUrl = (url) => Boolean(validUrl.isWebUri(`${url}`));

const validate = (url) => {
  return isValidUrl(url);
};

module.exports = validate;
