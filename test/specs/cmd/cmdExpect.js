describe("Tester comment utiliser les éléments (Expect) du navigateur", () => {
  describe("Utilisation de toHaveUrl", () => {
    it("sur instagram.com", async () => {
      await browser.url("https://www.instagram.com/");
      await expect(browser).toHaveUrl("https://www.instagram.com/");
    });
  });

  describe("Utilisation de toHaveTitle", () => {
    it("sur daooda.dev", async () => {
      await browser.url("https://www.daooda.dev");
      await expect(browser).toHaveTitle("Daouda BA 👨🏽‍💻 FullStack Developer");
    });
  });

  describe("Utilisation de toBePresent", () => {
    it("sur coderadio.freecodecamp.org", async () => {
      await browser.url("https://coderadio.freecodecamp.org");
      const elem = await $("//button[@aria-label='Play']");
      await expect(elem).toBePresent();
    });
  });

  describe("Utilisation de toHaveHref", () => {
    it("sur remove.bg/fr", async () => {
      await browser.url("https://www.remove.bg/fr");
      const link = await $("//a[@href='/fr/help']");
      await expect(link).toHaveHref("/fr/help");
    });
  });
});
