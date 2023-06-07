require("dotenv").config();
const username = process.env.USERNAME;
const badUsername = process.env.BAD_USERNAME;
const pass = process.env.PASSWORD;
const badPass = process.env.BAD_PASSWORD;

describe("Test End2End faire un tweet avec son compte Twitter", () => {
  describe("Login à Gmail", () => {
    it("connexion compte Twitter", async () => {
      await browser.url("https://twitter.com/");

      const boutonConnexion = await $("//a[@href='/login']");
      const champUsername = await $("//input[@autocomplete='username']");
      const boutonSuivant = await $("//span[contains(text(),'Suivant')]");
      const champPassword = await $("//input[@name='password']");
      const boutonSeConnecter = await $(
        "//div[@role='dialog']//span[contains(text(),'Se connecter')]"
      );
      const champTweet = await $(
        "//div[@role='textbox'][@aria-multiline='true']"
      );
      const boutonTweet = await $(
        "//div[@role='button']//span[contains(text(),'Tweet')]"
      );
      const boutonProfile = await $("//a[@href='/testerturing']");
      const verifTweet = await $(
        "//div[@data-testid='cellInnerDiv'][4]//div[@dir='auto']//span"
      );

      await boutonConnexion.click();
      await browser.pause(3000);

      await expect(boutonSuivant).toBeDisplayed();
      await browser.pause(3000);

      await champUsername.setValue(username);
      await boutonSuivant.click();
      await browser.pause(3000);

      // await expect(champPassword).toBeExisting();

      await champPassword.setValue(pass);
      await boutonSeConnecter.click();
      await browser.pause(5000);

      // await expect(champTweet).toBeExisting();

      await champTweet.click();
      await browser.pause(3000);

      await champTweet.setValue("Execution of 1 workers started");
      await browser.pause(3000);

      await boutonTweet.click();
      await browser.pause(5000);

      await boutonProfile.click();
      await browser.pause(3000);

      await expect(verifTweet).toHaveTextContaining("Execution");
      await browser.pause(3000);
    });
  });
});
