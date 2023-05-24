describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    await browser.url(`https://the-internet.herokuapp.com/login`);
    await browser.pause(3000);
    // await $("#username").setValue("tomsmith");
    await $("//input[@id='username']").setValue("tomsmith");
    await browser.pause(3000);
    // await $("#password").setValue("SuperSecretPassword!");
    await $("//input[@id='password']").setValue("SuperSecretPassword!");
    await browser.pause(3000);
    // await $('button[type="submit"]').click();
    await $("//button[@type='submit']").click();
    await browser.pause(3000);

    // await expect($("#flash")).toBeExisting();
    let Element = await $("//*[@id='flash']");
    await expect($(Element)).toBeExisting();
    await browser.pause(3000);
    await expect($("#flash")).toHaveTextContaining(
      "You logged into a secure area!"
    );
  });
});
