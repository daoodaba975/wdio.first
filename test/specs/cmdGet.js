describe("Tester comment utiliser les éléments du navigateur", () => {
  describe("Utilisation de isClickable", () => {
    it("sur trello.com", async () => {
      await browser.url(`https://trello.com`);
      await browser.pause(3000);

      const element = await $(
        '//button[@aria-label="Sign up for Trello - it’s free!"]'
      );
      let clickable = await element.isClickable();
      console.log(clickable);

      await browser.waitUntil(() => element.isClickable());
    });
  });

  describe("Utilisation de isEnabled", () => {
    it("sur canva.com", async () => {
      await browser.url(`https://canva.com`);
      await browser.pause(3000);

      const element = await $("//input[@type='search']");
      let isEnabled = await element.isEnabled();
      console.log(isEnabled);
    });
  });

  describe("Utilisation de isExisting", () => {
    it("sur xarala.co", async () => {
      await browser.url(`https://www.xarala.co`);
      await browser.pause(3000);

      element = await $("//img[@alt='Logo Xarala']");
      isExisting = await element.isExisting();
      console.log(isExisting);
    });
  });

  describe("Utilisation de isSelected", () => {
    it("sur facebook.com", async () => {
      await browser.url(`https://www.facebook.com`);
      await browser.pause(3000);

      await $("//a[@data-testid='open-registration-form-button']").click();
      await browser.pause(3000);

      element = await $("//select[@name='birthday_month']");
      console.log(await element.isSelected());
    });
  });
});
