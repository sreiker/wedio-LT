exports.config = {
    user: process.env.LT_USERNAME || "YOUR_USERNAME",
    key: process.env.LT_ACCESS_KEY || "YOUR_ACCESS_KEY",
  
    updateJob: false,
    specs: ["C:/Users/sunilr.LT-LP-153/Desktop/webdriverio/LT-appium-nodejs-webdriverio/specs/ios-web-test.js"],
    exclude: [],
  
    maxInstances: 10,
    // commonCapabilities: {
    //   build: "LT_Appium_NodeJS_WebDriverIO_ltoptions_w3_Web_Automation",
    //   visual: true,
    // },
  
    capabilities: [
      {
        "browserName": "Chrome",
        "browserVersion": "124.0",
        "lt:options": {
          // deviceName: ".*",
          // platformName: "iOS",
          name: "ios_ltOptions_w3c",
          // isRealMobile: true,
          w3c: true,
          enableCustomTranslation: true,
          build: "LT_Appium_NodeJS_WebDriverIO_ltoptions_w3_Web_Automation",
          visual: true,
          network: true,
          platformName: "Windows 10",
          console: true
          // lambdaMaskCommands: ['postUrl','setValues'],
        }
      }
    ],
  
    logLevel: "info",
    coloredLogs: true,
    screenshotPath: "./errorShots/",
    baseUrl: "",
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    path: "/wd/hub",
    hostname: process.env.LT_GRID_URL||"hub.lambdatest.com",
    port: 80,
  
    framework: "mocha",
    mochaOpts: {
      ui: "bdd",
      timeout: 20000,
    },
  };
  
  // Code to support common capabilities
  exports.config.capabilities.forEach(function (caps) {
    for (var i in exports.config.commonCapabilities)
      caps[i] = caps[i] || exports.config.commonCapabilities[i];
  });
  