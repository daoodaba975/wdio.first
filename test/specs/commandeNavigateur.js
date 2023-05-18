describe("Tester comment utiliser les éléments du navigateur", () => {
  describe("Utilisation de la commande getAttribute", () => {
    it("getAttribute sur dev.to", async () => {
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

  describe("Utilisation de la commande cssSelector", () => {
    it("cssSelector sur canva.com", async () => {
      await browser.url(`https://www.canva.com/`);
      await browser.pause(3000);

      let elementCouleur = await $(
        "//button/span[text()='Se connecter']"
      ).getCSSProperty("color");

      console.log(elementCouleur);
    });

    it("cssSelector(font) sur twitter.com", async () => {
      await browser.url(`https://www.twitter.com`);
      await browser.pause(3000);

      let elementFont = await $("//span[text()='Explorer']").getCSSProperty(
        "font"
      );

      console.log(elementFont);
    });
  });
});
