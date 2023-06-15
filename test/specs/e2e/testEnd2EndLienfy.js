require("../global.js");

describe("Test End2End raccorcir url sur Lienfy", () => {
  describe("Lienfy.com", () => {
    it("Accés page d'accueil", async () => {
      await browser.url("https://lienfy.com");

      await $(global.lienfyXPath.urlInput).setValue("https://just4test.fr");
      await $(global.lienfyXPath.submitButton).click();
      await browser.pause(3000);

      await $(global.lienfyXPath.copyButton).click();
      await browser.pause(3000);
    });

    it("Accés page d'accueil", async () => {
      await browser.url("https://lienfy.com");

      await $(global.lienfyXPath.urlInput).setValue("https://just4test.fr");
      await $(global.lienfyXPath.submitButton).click();
      await browser.pause(3000);

      await $(global.lienfyXPath.copyButton).click();
      await browser.pause(3000);
    });
  });
});
