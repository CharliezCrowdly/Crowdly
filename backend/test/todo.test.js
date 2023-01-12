const app = require("../server");
const request = require("supertest");

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2JiODA2OTBkMzgyYWJhNzEzNjcwNDQiLCJpYXQiOjE2NzM1MzUxMDAsImV4cCI6MTY3MzYyMTUwMH0.FbLd4ZozJloNUp3AZ6lqJtDYj4zU2yBtKCSSM1gxuhI";
it("todo / add ===> 200 on success", () => {
  return request(app)
    .post("/api/v1/todo/add")
    .send({
      text: "test",
    })
    .set("Authorization", `Bearer ${token}`)
    .expect("Content-Type", /json/)
    .expect(200);
});
it("todo / get ===> 200 on success", () => {
  return request(app)
    .get("/api/v1/todo/get")
    .set("Authorization", `Bearer ${token}`)
    .expect("Content-Type", /json/)
    .expect(200);
});

// it("Post / upload ===> 400 on success ", () => {
//   return request(app)
//     .post("/api/v1/posts/upload")
//     .send({
//       location: "kathmandu",
//       filetype: "image/jpg",
//       description: "wow hurry",
//     })
//     .attach("postfile", file)
//     .set("Authorization", `Bearer ${token}`)
//     .expect("Content-Type", /json/)
//     .expect(201);
// });

// it("Post / like ===> 200 on success ", () => {
//   return request(app)
//     .patch("/api/v1/posts/likepost/6373b72313a2ae8caa653af8")
//     .set("Authorization", `Bearer ${token}`)
//     .expect(200);
// });

// it("Post / unlike ===> 200 on success ", () => {
//   return request(app)
//     .patch("/api/v1/posts/unlikepost/6373b72313a2ae8caa653af8")
//     .set("Authorization", `Bearer ${token}`)
//     .expect("Content-Type", /json/)
//     .expect(200);
// });

// it("Post / Comment ===> 201 on success ", () => {
//   return request(app)
//     .post("/api/v1/comment/post")
//     .send({
//       postId: "6373b72313a2ae8caa653af8",
//       content: "Nice Picture",
//     })
//     .set("Authorization", `Bearer ${token}`)
//     .expect(200);
// });

// it("Post / Delete ===> 201 on success ", () => {
//   return request(app)
//     .delete("/api/v1/comment/delete/6374e0e45a982bda19ada7b1")
//     .set("Authorization", `Bearer ${token}`)
//     .expect(404);
// });

// it("Post / Get ===> 201 on success ", () => {
//   return request(app)
//     .get("/api/v1/comment/get/6373ad2413a2ae8caa653acf")
//     .set("Authorization", `Bearer ${token}`)
//     .expect(200);
// });

// it("Post / Update ===> 401 on Unauthorized comment manipulation ", () => {
//   return request(app)
//     .patch("/api/v1/comment/update/6373ad2413a2ae8caa653acf")
//     .send({
//       content: "Nice Picture",
//     })
//     .set("Authorization", `Bearer ${token}`)
//     .expect(401);
// });

// it("Post / Update ===> 200 on successful comment edit ", () => {
//   return request(app)
//     .patch("/api/v1/comment/update/6374eadf6a6555b7f09786b2")
//     .send({
//       content: "Nice Picture",
//     })
//     .set("Authorization", `Bearer ${token}`)
//     .expect(200);
// });
