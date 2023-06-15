require("../global.js");

describe("Test End2End rechercher un article sur DevTo", () => {
  describe("Dev.to", () => {
    it("Accés page d'accueil", async () => {
      await browser.url("https://dev.to");

      if ($(global.devtoXPath.searchInput).isDisplayed()) {
        console.log("L'élément champ de recherche est présent.");
      } else {
        console.log("L'élément champ de recherche n'est pas présent.");
      }
    });

    it("Récupération résultat après recherche avec bonne requete", async () => {
      await browser.url("https://dev.to");

      await $(global.devtoXPath.searchInput).setValue("daoodaba975");
      await $(global.devtoXPath.searchButton).click();
      await browser.pause(3000);

      if ($(global.devtoXPath.link).isExisting()) {
        console.log("L'élément champ de recherche est présent.");
      } else {
        console.log("L'élément champ de recherche n'est pas présent.");
      }
    });

    it("Récupération résultat après recherche avec mauvaise requete", async () => {
      await browser.url("https://dev.to");

      await $(global.devtoXPath.searchInput).setValue("975daoodaba");
      await $(global.devtoXPath.searchButton).click();
      await browser.pause(3000);

      if ($(global.devtoXPath.link).isExisting()) {
        console.log("L'élément champ de recherche est présent.");
      } else {
        console.log("L'élément champ de recherche n'est pas présent.");
      }
    });

    it("Vérification affichage de l'article", async () => {
      await browser.url("https://dev.to");

      await $(global.devtoXPath.searchInput).setValue("daoodaba975");
      await $(global.devtoXPath.searchButton).click();
      await browser.pause(3000);

      await $(global.devtoXPath.link).click();
      await browser.pause(3000);

      if (
        expect(browser).toHaveUrl(
          "https://dev.to/daoodaba975/5-good-reasons-to-use-nuxtjs-3fp2"
        )
      ) {
        console.log("L'élément champ de recherche est présent.");
      } else {
        console.log("L'élément champ de recherche n'est pas présent.");
      }
    });
  });
});
