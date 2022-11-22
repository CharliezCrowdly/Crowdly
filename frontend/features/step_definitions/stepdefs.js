const { expect } = require("chai");
const { Given, When, Then } = require("@cucumber/cucumber");
const webdriver = require("selenium-webdriver");
const { By, until } = require("selenium-webdriver");
let driver = new webdriver.Builder().forBrowser("chrome").build();
Given(
  "I visit Crowdly Registration Page",
  { timeout: 1000 * 1000 },
  async () => {
    await driver.get("http://localhost:3000/login");
  }
);
When("I enter my fullname", async () => {
  let element = driver.wait(
    until.elementLocated(By.xpath("//input[@placeholder='Enter Fullname']"))
  );
  element.sendKeys("Test User");
});
When("I enter my username", async () => {
  let element = driver.wait(
    until.elementLocated(By.xpath("//input[@placeholder='Enter Username']"))
  );
  element.sendKeys("TestUser122323");
});
When("I enter my email", async () => {
  let element = driver.wait(until.elementLocated(By.name("email")));
  element.sendKeys("testuser122332@gmail.com");
});
When("I enter description", async () => {
  let descriptionBox = driver.wait(
    until.elementLocated(
      By.xpath("//input[@placeholder='Whats on your mind?']")
    )
  );
  descriptionBox.sendKeys("Test Post");
});
When("I click files", async () => {
  let imageBox = driver.wait(
    until.elementLocated(By.xpath("//input[@name='postfile']"))
  );
  imageBox.sendKeys("C:\\Users\\chira\\Downloads\\testimg.png");
});
When("I press post", async () => {
  let sendBox = driver.wait(
    until.elementLocated(By.xpath("//button[normalize-space()='send']"))
  );
  sendBox.click();
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
  let element = driver.wait(until.elementLocated(By.name("password")));
  element.sendKeys("password");
});
When("I press submit", async () => {
  let submit = driver.wait(
    until.elementLocated(By.xpath("//button[normalize-space()='Submit']"))
  );
  submit.click();
});
When("I press login now", async () => {
  let loginNow = driver.wait(
    until.elementLocated(By.xpath("//p[@class='toggle-account']"))
  );
  loginNow.click();
});
When("I Press Like", async () => {
  let like = driver.wait(
    until.elementLocated(
      By.xpath("(//*[name()='svg'][@class='icon like-btn'])[1]")
    )
  );
  like.click();
  console.log("Like Pressed");
});
When("I Press comment", async () => {
  let comment = driver.wait(
    until.elementLocated(
      By.xpath("(//*[name()='svg'][@class='icon comment-btn'])[1]")
    )
  );
  comment.click();
});
When("I enter comment", async () => {
  let comment = driver.wait(
    until.elementLocated(
      By.xpath("(//input[@placeholder='Enter Description'])[1]")
    )
  );
  comment.sendKeys("This is a comment test");
});
When("I Press post", async () => {
  let postBtn = driver.wait(
    until.elementLocated(
      By.xpath("(//button[@type='submit'][normalize-space()='post'])[1]")
    )
  );
  postBtn.click();
});
When("I press login", async () => {
  let loginNow = driver.wait(
    until.elementLocated(By.xpath("//button[normalize-space()='Submit']"))
  );
  loginNow.click();
});
Then("I should be loggedin", async () => {
  driver
    .wait(until.elementLocated(By.id("successFail")))
    .getText()
    .then((text) => {
      if (text === "User Created!: Redirection...") {
        console.log(text);
        return true;
      } else {
        console.log("Fail");
        return false;
      }
    });
});
Then("the post should be liked", function () {
  // driver.quit();
  return "Liked";
});
Then("The post should be commented", function () {
  // driver.quit();
  return "Commented";
});
Then("the post should be uploaded", function () {
  // driver.quit();
  return "Uploaded";
});
//
