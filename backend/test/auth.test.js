const mongoose = require("mongoose");
const User = require("../model/User");

const url =
  "mongodb+srv://crowdly:crowdly@cluster0.uxbeslb.mongodb.net/?retryWrites=true&w=majority";

beforeAll(async () => {
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Testing user schema", () => {
  //the code below is for insert testing
  it("create user testing", () => {
    const userData = {
      username: "JohnDoe",
      email: "JohnDoe@gmail.com",
      password: "password",
      name:"JohnDoe",
      usertype:"individual"
    };
    return User.create(userData).then((res) => {
      expect(res.username).toEqual("JohnDoe");
    });
  });


  


  //the below code is for update testing here
});
