const axios = require("axios");

const api = "https://api.meaningcloud.com/sentiment-2.1";

const analyze = async (url, key) => {
  const analysis = await axios
    .get(`${api}?key=${key}&url=${url}&lang=en`)
    .then((res) => {
      const { code } = res.data.status;
      const { msg } = res.data.status;

      if (code == 100) {
        return handleError(code, msg);
      } else if (code == 212) {
        return handleError(code, msg);
      }
      return handleSuccess(res.data, code);
    });

  return analysis;
};

const handleError = (code, msg) => {
  const error = {
    code,
    msg,
  };
  return error;
};

const handleSuccess = (data, code) => {
  const { agreement, subjectivity, confidence, score_tag, irony } = data;
  const sample = {
    agreement,
    subjectivity,
    confidence,
    score_tag,
    irony,
  };

  const result = {
    sample,
    code,
  };
  return result;
};

module.exports = analyze;
