describe("Proverbial APK", () => {

  it("app uninstallation", async()=>{
     await driver.executeScript("lambda-uninstall-app=ai.nuralogix.nura",[]);
     await driver.executeScript("lambda-biometric-injection=pass",[]);
  });
  it("app insatllation", async()=>{
    await driver.executeScript("lambda-install-app=lt://APP10160161211712848848050320",[]);
    await driver.activateApp("ai.nuralogix.nura");
  });


  // it("Changes color", async () => {
  //   var color = await $("id=color");
  //   await color.waitForDisplayed({ timeout: 30000 });
  //   await color.click();
  //   await color.click();
  // });

  // it("Changes text", async () => {
  //   var text = await $("id=Text");
  //   await text.waitForDisplayed({ timeout: 30000 });
  //   await text.click();
  // });

  // it("Toast", async () => {
  //   var toast = await $("id=toast");
  //   await toast.waitForDisplayed({ timeout: 30000 });
  //   await toast.click();
  // });

  // it("Notification", async () => {
  //   var nf = await $("id=notification");
  //   await nf.waitForDisplayed({ timeout: 30000 });
  //   await nf.click();
  // });

  // it("Geolocation", async () => {
  //   var geo = await $("id=geoLocation");
  //   await geo.waitForDisplayed({ timeout: 30000 });
  //   await geo.click();
//     await browser.pause(10000);
//     await driver.back();
//   });
 });
