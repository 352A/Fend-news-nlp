/**
 * @jest-environment jsdom
 */

const handleSubmit = require("../js/handleSubmit");

describe("handleSubmit", () => {
  it("should be defined", () => {
    expect(handleSubmit).toBeDefined();
  });
});
