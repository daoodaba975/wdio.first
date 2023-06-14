describe("Tester comment utiliser les éléments du navigateur", () => {
  describe("Utilisation de getAttribute", () => {
    it("sur dev.to", async () => {
      await browser.url(`https://dev.to`);
      await browser.pause(3000);

      let valeurPremierAttribut = await $(
        "//a[@data-text='Relevant']"
      ).getAttribute("data-text");
      console.log(valeurPremierAttribut);

      console.log("#############################");

      let valeurDeuxiemeAttribut = await $(
        "//a[@data-text='Relevant']"
      ).getAttribute("href");
      console.log(valeurDeuxiemeAttribut);
    });
  });

  describe("Utilisation de getCSSProperty", () => {
    it("(color) sur canva.com", async () => {
      await browser.url(`https://www.canva.com/`);
      await browser.pause(3000);

      let elementCouleur = await $(
        "//button/span[text()='Se connecter']"
      ).getCSSProperty("color");
      console.log(elementCouleur);
    });

    it("(font) sur twitter.com", async () => {
      await browser.url(`https://www.twitter.com`);
      await browser.pause(3000);

      let elementFont = await $("//span[text()='Explorer']").getCSSProperty(
        "font"
      );
      console.log(elementFont);
    });
  });

  describe("Utilisation de getComputedLabel", () => {
    it("sur google.com", async () => {
      await browser.url("https://www.google.com");
      await browser.pause(3000);

      const elem = await $('*[name="q"]');
      console.log(await elem.getComputedLabel());
    });
  });

  describe("Utilisation de getLocation", () => {
    it("sur openclassrooms.com", async () => {
      await browser.url("https://openclassrooms.com");
      const logo = await $(
        "//a[@href='https://www.facebook.com/openclassroomsfr/']"
      );
      const location = await logo.getLocation();
      console.log(location);

      const xLocation = await logo.getLocation("x");
      console.log(xLocation);

      const yLocation = await logo.getLocation("y");
      console.log(yLocation);
    });
  });
});
