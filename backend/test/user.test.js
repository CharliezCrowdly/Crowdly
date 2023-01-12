const request = require("supertest");
const { response } = require("../server");
const app = require("../server");
it("test should run", () => {});

it("Post /Register ==> 400 if all value is not provided ", () => {
  return request(app)
    .post("/api/v1/auth/register")
    .send({
      name: "JohnDoe",
      email: "JohnDoe@gmail.com",
      usertype: "individaul",
      username: "JohnDoe",
    })
    .expect("Content-Type", /json/)
    .expect(400)
    .then((response) => {
      expect(response.body).toEqual(
        expect.objectContaining({
          msg: "please provide all the values",
        })
      );
    });
});

it("Post /Register ==> 400 if email already in use ", async () => {
  const response = await request(app)
    .post("/api/v1/auth/register")
    .send({
      name: "JohnDoe",
      email: "JohnDoe@gmail.com",

      usertype: "individaul",
      username: "JohnDwwoe",
      password: "neymar123",
    })
    .expect(400);
  expect(response.body).toEqual(
    expect.objectContaining({
      msg: "confrim password fail",
    })
  );
});

it("Post /Register ==> 400 if Username already in use ", async () => {
  const response = await request(app)
    .post("/api/v1/auth/register")
    .send({
      name: "JohnDoe",
      email: "JohnDoe111@gmail.com",
      usertype: "individaul",
      username: "JohnDoe",
      password: "neymar123",
      cpassword: "neymar123",
    })
    .expect(400);
  expect(response.body).toEqual(
    expect.objectContaining({
      msg: "Email already in use",
    })
  );
});

it("Post /Register 400 if name is too short ", () => {
  return request(app)
    .post("/api/v1/auth/register")
    .send({
      name: "we",
      usertype: "individaul",
      username: "webdev2122",
      email: "webdev@gmail.com",
      password: "webdev222",
    })
    .expect("Content-Type", /json/)
    .expect(400)
    .then((response) => {
      expect(response.body).toEqual(
        expect.objectContaining({
          msg: "Name is too short",
        })
      );
    });
});

it("Post /Register 400 if password is too short ", () => {
  return request(app)
    .post("/api/v1/auth/register")
    .send({
      name: "wewwww",
      usertype: "individaul",
      username: "webd2ev2122",
      email: "webdev22@gmail.com",
      password: "web",
    })
    .expect("Content-Type", /json/)
    .expect(400)
    .then((response) => {
      expect(response.body).toEqual(
        expect.objectContaining({
          msg: "Password is too short",
        })
      );
    });
});

// it("Post / 201 on success register ", () => {
//   return request(app)
//     .post("/api/v1/auth/register")
//     .send({
//       name: "webdev",
//       usertype: "individaul",
//       username: "webdev2122",
//       email: "webdev@gmail.com",
//       password: "webdev222",
//     })
//     .expect("Content-Type", /json/)
//     .expect(201)
//     .then((response) => {
//       expect(response.body).toEqual(
//         expect.objectContaining({
//           user: expect.any(Object),
//           token: expect.any(String),
//         })
//       );
//     });
// });

it("Post / Login ===> 200 on success ", () => {
  return request(app)
    .post("/api/v1/auth/login")
    .send({
      email: "chiragsimkhada@gmail.com",
      password: "Abcd@1234",
    })
    .expect("Content-Type", /json/)
    .expect(200)
    .then((response) => {
      expect(response.body).toEqual(
        expect.objectContaining({
          user: expect.any(Object),
          token: expect.any(String),
        })
      );
    });
});

it("Post / Login ===> 400 if not all value provided ", () => {
  return request(app)
    .post("/api/v1/auth/login")
    .send({
      password: "cristiano",
    })
    .expect("Content-Type", /json/)
    .expect(400)
    .then((response) => {
      expect(response.body).toEqual(
        expect.objectContaining({
          msg: "Please provide all values",
        })
      );
    });
});

it("Post / Login ===> 401 if Email or Username is incorrect ", () => {
  return request(app)
    .post("/api/v1/auth/login")
    .send({
      email: "cristiano22@gmail.com",
      password: "cristiano",
    })
    .expect("Content-Type", /json/)
    .expect(401)
    .then((response) => {
      expect(response.body).toEqual(
        expect.objectContaining({
          msg: "Invalid Email or Username",
        })
      );
    });
});

it("Post / Login ===> 401 if Password is incorrect ", () => {
  return request(app)
    .post("/api/v1/auth/login")
    .send({
      email: "cristia@gmail.com",
      password: "cristiano22",
    })
    .expect("Content-Type", /json/)
    .expect(401)
    .then((response) => {
      expect(response.body).toEqual(
        expect.objectContaining({
          msg: "Invalid Email or Username",
        })
      );
    });
});
