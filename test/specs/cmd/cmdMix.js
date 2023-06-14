describe("Tester comment utiliser les éléments du navigateur", () => {
  describe("Utilisation de waitForClickable", () => {
    it("sur twitter.com", async () => {
      await browser.url("https://twitter.com");
      const elem = await $("//a[@href='/i/flow/signup']");

      await elem.waitForClickable({ timeout: 3000 });
    });

    it("sur statmuse.com", async () => {
      await browser.url("https://www.statmuse.com");
      const elem = await $("//input[@value='Subscribe']");

      await elem.waitForClickable({ reverse: false });
    });
  });

  describe("Utilisation de parentElement", () => {
    it("sur vuejs.org", async () => {
      await browser.url("https://vuejs.org");
      const elem = await $$("//h1[@class='tagline']");
      const parent = await elem[0].parentElement();

      console.log(await parent.getAttribute("class"));
    });
  });

  describe("Utilisation de saveScreenshot", () => {
    it("sur daooda.dev", async () => {
      await browser.url("https://www.daooda.dev");

      const elem = await $("//main");
      await elem.saveScreenshot("./scrns/elemScreenshot.png");
    });
  });

  describe("Utilisation de saveScreenshot", () => {
    it("sur mega.nz/login", async () => {
      await browser.url("https://mega.nz/login");
      const login = await $("//input[@name='login-name2']");
      const pass = await $("//input[@name='login-password2']");
      const button = await $(
        "//button[@class='mega-button positive login-button large right']"
      );

      await login.setValue("daooda");
      await browser.pause(2000);
      await pass.setValue("0123456789");
      await browser.pause(2000);
      await button.click();
      await browser.pause(3000);
    });
  });
});
