const app = require("../server");
const request = require("supertest");
// const file = require("../public/uploads/download.jpg");

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzZhMzYwYWYxY2RjNTFjYjM3OTc5MmIiLCJpYXQiOjE2Njg2MDIyNzYsImV4cCI6MTY2ODY4ODY3Nn0.bWT_77aS9h3XdJUsw_PJetDJbRXEJTH_ggzfm1MIZqI";

it("Post / upload ===> 400 on success ", () => {
  return request(app)
    .post("/api/v1/posts/upload")
    .send({
      location: "kathmandu",
    })
    .set("Authorization", `Bearer ${token}`)
    .expect("Content-Type", /json/)
    .expect(400);
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

it("Post / like ===> 200 on success ", () => {
  return request(app)
    .patch("/api/v1/posts/likepost/6373b72313a2ae8caa653af8")
    .set("Authorization", `Bearer ${token}`)
    .expect(200);
});

it("Post / unlike ===> 200 on success ", () => {
  return request(app)
    .patch("/api/v1/posts/unlikepost/6373b72313a2ae8caa653af8")
    .set("Authorization", `Bearer ${token}`)
    .expect("Content-Type", /json/)
    .expect(200);
});
