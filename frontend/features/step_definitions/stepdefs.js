const { expect } = require("chai");
const { Given, When, Then } = require("@cucumber/cucumber");
const webdriver = require("selenium-webdriver");
const { By, until } = require("selenium-webdriver");
let driver = new webdriver.Builder().forBrowser("chrome").build();

Given("I visit Crowdly Registration Page", { timeout: 60 * 1000 }, async () => {
  await driver.get("http://localhost:3000/login");
});

When("I enter my fullname", async () => {
  await driver.findElement(By.name("name")).sendKeys("Test User");
});

When("I enter my username", async () => {
  await driver.findElement(By.name("username")).sendKeys("TestUser");
});

When("I enter my email", async () => {
  await driver.findElement(By.name("email")).sendKeys("testuser@gmail.com");
});

When("I select applicant", async () => {
  let element = driver.wait(
    until.elementLocated(By.xpath("//div[@class='singleselectinput']"))
  );
  element.click();
  let candidate = driver.wait(
    until.elementLocated(By.xpath("//li[normalize-space()='individual']"))
  );
  candidate.click();
});

When("I enter my password", async () => {
  await driver.findElement(By.name("password")).sendKeys("password");
});

When("I press submit", async () => {
  let submit = driver.wait(
    until.elementLocated(By.xpath("//button[normalize-space()='Submit']"))
  );
  submit.click();
});

Then('I should be told "Success"', async () => {
  // driver.findElement(By.)
});

//User Created!: Redirection...
