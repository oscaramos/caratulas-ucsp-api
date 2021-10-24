const linkToCover = require("./link-to-cover");

it("Convert path to link", () => {
  const path1 = "/app/user/caratulas-ucsp-api/public/7e3caad1.pdf";
  const path2 = "/app/user/caratulas-ucsp-api/public/gcte3ce2.pdf";
  expect(linkToCover(path1)).toBe("http://localhost:4000/7e3caad1.pdf");
  expect(linkToCover(path2)).toBe("http://localhost:4000/gcte3ce2.pdf");
});
