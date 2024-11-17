/**
 * @jest-environment jsdom
 */

const validate = require("../js/checkUrl");

describe("valid url", () => {
  test("random characters are false url", () => {
    expect(validate("asd")).toBeFalsy();
  });
  test("empty value is false", () => {
    expect(validate("")).toBeFalsy();
  });
});
