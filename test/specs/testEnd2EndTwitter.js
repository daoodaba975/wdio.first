require("dotenv").config();
const username = process.env.USERNAME;
const badUsername = process.env.BAD_USERNAME;
const pass = process.env.PASSWORD;
const badPass = process.env.BAD_PASSWORD;

describe("Test End2End faire un tweet avec son compte Twitter", () => {
  describe("Login à Twitter", () => {
    it("Accés page connexion", async () => {
      await browser.url("https://twitter.com/");

      const boutonConnexion = await $("//a[@href='/login']");
      const champUsername = await $("//input[@autocomplete='username']");

      await boutonConnexion.click();
      await browser.pause(3000);

      await expect(champUsername).toBeDisplayed();
      await browser.pause(3000);
    });

    it("Vérification de la connexion avec bon username", async () => {
      await browser.url("https://twitter.com/");

      const boutonConnexion = await $("//a[@href='/login']");
      const champUsername = await $("//input[@autocomplete='username']");
      const boutonSuivant = await $("//span[contains(text(),'Suivant')]");
      const champPassword = await $("//input[@name='password']");

      await boutonConnexion.click();
      await browser.pause(3000);

      await champUsername.setValue(username);
      await boutonSuivant.click();
      await browser.pause(3000);

      await expect(champPassword).toBeDisplayed();
      await browser.pause(3000);
    });

    it("Vérification de la connexion avec mauvais username", async () => {
      await browser.url("https://twitter.com/");

      const boutonConnexion = await $("//a[@href='/login']");
      const champUsername = await $("//input[@autocomplete='username']");
      const boutonSuivant = await $("//span[contains(text(),'Suivant')]");
      const errorUsername = await $(
        "//div[@class='css-901oao r-jwli3a r-1wbh5a2 r-37j5jr r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-1e081e0 r-qvutc0']//span[@class='css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0']"
      );

      await boutonConnexion.click();
      await browser.pause(3000);

      await champUsername.setValue(badUsername);
      await boutonSuivant.click();
      await browser.pause(3000);

      await expect(errorUsername).toBeDisplayed();
      await browser.pause(3000);
    });

    it("Vérification de la connexion avec bon password", async () => {
      await browser.url("https://twitter.com/");

      const boutonConnexion = await $("//a[@href='/login']");
      const champUsername = await $("//input[@autocomplete='username']");
      const boutonSuivant = await $("//span[contains(text(),'Suivant')]");
      const champPassword = await $("//input[@name='password']");
      const boutonSeConnecter = await $(
        "//div[@role='dialog']//span[contains(text(),'Se connecter')]"
      );
      const boutonProfile = await $("//a[@href='/testerturing']");

      await boutonConnexion.click();
      await browser.pause(3000);

      await champUsername.setValue(username);
      await boutonSuivant.click();
      await browser.pause(3000);

      await champPassword.setValue(pass);
      await boutonSeConnecter.click();
      await browser.pause(5000);

      await expect(boutonProfile).toHaveHref("/testerturing");
      await browser.pause(3000);
    });

    it("Vérification de la connexion avec mauvais password", async () => {
      await browser.url("https://twitter.com/");

      const boutonConnexion = await $("//a[@href='/login']");
      const champUsername = await $("//input[@autocomplete='username']");
      const boutonSuivant = await $("//span[contains(text(),'Suivant')]");
      const champPassword = await $("//input[@name='password']");
      const boutonSeConnecter = await $(
        "//div[@role='dialog']//span[contains(text(),'Se connecter')]"
      );
      errorPassword = await $(
        "//span[normalize-space()='Mot de passe incorrect !']"
      );

      await boutonConnexion.click();
      await browser.pause(3000);

      await champUsername.setValue(username);
      await boutonSuivant.click();
      await browser.pause(3000);

      await champPassword.setValue(badPass);
      await boutonSeConnecter.click();
      await browser.pause(5000);

      await expect(errorPassword).toBeDisplayed();
      await browser.pause(3000);
    });

    it("Vérification affichage champ de tweet", async () => {
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

      await boutonConnexion.click();
      await browser.pause(3000);

      await champUsername.setValue(username);
      await boutonSuivant.click();
      await browser.pause(3000);

      await champPassword.setValue(pass);
      await boutonSeConnecter.click();
      await browser.pause(5000);

      await expect(champTweet).toBeExisting();
      await browser.pause(3000);
    });

    it("Vérification du tweet", async () => {
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

      await champUsername.setValue(username);
      await boutonSuivant.click();
      await browser.pause(3000);

      await champPassword.setValue(pass);
      await boutonSeConnecter.click();
      await browser.pause(5000);

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
