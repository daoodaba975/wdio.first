require("dotenv").config();
const email = process.env.EMAIL;
const badEmail = process.env.BAD_EMAIL;
const pass = process.env.PASSWORD;
const badPass = process.env.BAD_PASSWORD;

describe("Test End2End connexion compte Gmail pour ouvrir mail", () => {
  describe("Login à Gmail", () => {
    it("Accés page connexion", async () => {
      await browser.url("https://www.google.com/intl/fr/gmail/about/");

      const boutonConnexion = await $("//a[contains(text(),'Connexion')]");
      const boutonSuivant = await $(
        "//button//span[contains(text(),'Suivant')]"
      );

      await boutonConnexion.click();
      await browser.pause(3000);

      await expect(boutonSuivant).toBeDisplayed();
      await browser.pause(3000);
    });

    it("Vérification de la connexion avec bon email", async () => {
      await browser.url("https://www.google.com/intl/fr/gmail/about/");

      const boutonConnexion = await $("//a[contains(text(),'Connexion')]");
      const champEmail = await $("//input[@type='email']");
      const champPassword = await $("//input[@type='password']");
      const boutonSuivant = await $(
        "//button//span[contains(text(),'Suivant')]"
      );

      await boutonConnexion.click();
      await browser.pause(3000);

      await expect(boutonSuivant).toBeDisplayed();
      await browser.pause(3000);

      await champEmail.setValue(email);
      await boutonSuivant.click();
      await browser.pause(5000);

      await expect(champPassword).toBeExisting();
    });

    it("Vérification de la connexion avec mauvais email", async () => {
      await browser.url("https://www.google.com/intl/fr/gmail/about/");

      const boutonConnexion = await $("//a[contains(text(),'Connexion')]");
      const champEmail = await $("//input[@type='email']");
      const champPassword = await $("//input[@type='password']");
      const boutonSuivant = await $(
        "//button//span[contains(text(),'Suivant')]"
      );

      await boutonConnexion.click();
      await browser.pause(3000);

      await expect(boutonSuivant).toBeDisplayed();
      await browser.pause(3000);

      await champEmail.setValue(badEmail);
      await boutonSuivant.click();
      await browser.pause(5000);

      await expect(champPassword).not.toBeDisplayed();
    });

    it("Vérification de l'affichage du message erreur avec mauvais email", async () => {
      await browser.url("https://www.google.com/intl/fr/gmail/about/");

      const boutonConnexion = await $("//a[contains(text(),'Connexion')]");
      const champEmail = await $("//input[@type='email']");
      const boutonSuivant = await $(
        "//button//span[contains(text(),'Suivant')]"
      );
      const erreurMail = await $(
        "//*[contains(text(),'Impossible de trouver votre compte Google')]"
      );

      await boutonConnexion.click();
      await browser.pause(3000);

      await expect(boutonSuivant).toBeDisplayed();
      await browser.pause(3000);

      await champEmail.setValue(badEmail);
      await boutonSuivant.click();
      await browser.pause(5000);

      await expect(erreurMail).toBeDisplayed();
    });

    it("Vérification de la connexion avec bon mot de passe", async () => {
      await browser.url("https://www.google.com/intl/fr/gmail/about/");

      const boutonConnexion = await $("//a[contains(text(),'Connexion')]");
      const champEmail = await $("//input[@type='email']");
      const champPassword = await $("//input[@type='password']");
      const boutonSuivant = await $(
        "//button//span[contains(text(),'Suivant')]"
      );

      await boutonConnexion.click();
      await browser.pause(3000);

      await expect(boutonSuivant).toBeDisplayed();
      await browser.pause(3000);

      await champEmail.setValue(email);
      await boutonSuivant.click();
      await browser.pause(5000);

      await expect(champPassword).toBeExisting();

      await champPassword.setValue(pass);
      await boutonSuivant.click();
      await browser.pause(8000);

      await expect(browser).toHaveTitleContaining(email);
      await browser.pause(3000);
    });

    it("Vérification de la connexion avec mauvais mot de passe", async () => {
      await browser.url("https://www.google.com/intl/fr/gmail/about/");

      const boutonConnexion = await $("//a[contains(text(),'Connexion')]");
      const champEmail = await $("//input[@type='email']");
      const champPassword = await $("//input[@type='password']");
      const boutonSuivant = await $(
        "//button//span[contains(text(),'Suivant')]"
      );

      await boutonConnexion.click();
      await browser.pause(3000);

      await expect(boutonSuivant).toBeDisplayed();
      await browser.pause(3000);

      await champEmail.setValue(email);
      await boutonSuivant.click();
      await browser.pause(5000);

      await expect(champPassword).toBeExisting();

      await champPassword.setValue(pass);
      await boutonSuivant.click();
      await browser.pause(8000);

      await expect(browser).not.toHaveTitleContaining(email);
    });

    it("Vérification de l'affichage du message erreur avec mauvais mot de passe", async () => {
      await browser.url("https://www.google.com/intl/fr/gmail/about/");

      const boutonConnexion = await $("//a[contains(text(),'Connexion')]");
      const champEmail = await $("//input[@type='email']");
      const champPassword = await $("//input[@type='password']");
      const boutonSuivant = await $(
        "//button//span[contains(text(),'Suivant')]"
      );
      const erreurMdp = await $(
        "//*[contains(text(),'Mot de passe incorrect.')]"
      );
      await boutonConnexion.click();
      await browser.pause(3000);

      await expect(boutonSuivant).toBeDisplayed();
      await browser.pause(3000);

      await champEmail.setValue(email);
      await boutonSuivant.click();
      await browser.pause(5000);

      await expect(champPassword).toBeExisting();

      await champPassword.setValue(pass);
      await boutonSuivant.click();
      await browser.pause(8000);

      await expect(erreurMdp).toBeDisplayed();
    });

    it("Vérification de l'affichage du message de l'email", async () => {
      await browser.url("https://www.google.com/intl/fr/gmail/about/");

      const boutonConnexion = await $("//a[contains(text(),'Connexion')]");
      const champEmail = await $("//input[@type='email']");
      const champPassword = await $("//input[@type='password']");
      const boutonSuivant = await $(
        "//button//span[contains(text(),'Suivant')]"
      );
      const premierMail = await $(
        "//table[@aria-readonly='true']//tbody//tr[1]"
      );
      const retourMail = await $("//a[@aria-label='Boîte de réception']");
      const testverif = await $("//td[contains(text(),'Essayer')]");

      await boutonConnexion.click();
      await browser.pause(3000);

      await expect(boutonSuivant).toBeDisplayed();
      await browser.pause(3000);

      await champEmail.setValue(email);
      await boutonSuivant.click();
      await browser.pause(5000);

      await expect(champPassword).toBeExisting();

      await champPassword.setValue(badPass);
      await boutonSuivant.click();
      await browser.pause(8000);

      await expect(browser).toHaveTitleContaining(email);
      await browser.pause(3000);

      await premierMail.click();
      await browser.pause(8000);

      await expect(testverif).toBeDisplayed();

      await retourMail.click();
      await browser.pause(8000);
    });
  });
});
