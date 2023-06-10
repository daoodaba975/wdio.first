require("dotenv").config();
const email = process.env.EMAIL;
const pass = process.env.PASSWORD;

describe("Test End2End connexion compte YouTube pour faire une recherche", () => {
  describe("Login à YouTube", () => {
    it("Accés page connexion", async () => {
      await browser.url("https://www.youtube.com/");

      const boutonSeConnecter = await $(
        "//a[@aria-label='Se connecter']//div[@class='yt-spec-touch-feedback-shape__fill']"
      );
      const champEmail = await $("//input[@id='identifierId']");
      const boutonSuivant = await $("//span[normalize-space()='Suivant']");
      const champPassword = await $("//input[@name='Passwd']");
      const champSearch = await $("//input[@id='search']");
      const boutonSearch = await $(
        "//button[@id='search-icon-legacy']//yt-icon[@class='style-scope ytd-searchbox']//div"
      );

      await boutonSeConnecter.click();
      await browser.pause(3000);

      // await expect(boutonSuivant).toBeDisplayed();
      // await browser.pause(3000);

      await champEmail.setValue(email);
      await boutonSuivant.click();
      await browser.pause(5000);

      // await expect(champPassword).toBeExisting();
      // await browser.pause(3000);

      await champPassword.setValue(pass);
      await boutonSuivant.click();
      await browser.pause(5000);

      // await expect(champSearch).toBeExisting();
      // await browser.pause(3000);

      await champSearch.setValue("Sénégal");
      await boutonSearch.click();
      await browser.pause(8000);
    });
  });
});
