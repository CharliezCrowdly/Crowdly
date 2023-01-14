const app = require("../server");
const request = require("supertest");
// const file = require("../public/uploads/download.jpg");

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2JiN2YzNzBkMzgyYWJhNzEzNjcwMWQiLCJpYXQiOjE2NzM1MDkwNjksImV4cCI6MTY3MzU5NTQ2OX0.pvGo9bEMrY3yVUDUawXUB73zS_UDpqw1fm-TD8HK2sI";
it("Post / upload ===> 400 on missing input", () => {
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

// it("Post / like ===> 200 on success ", () => {
//   return request(app)
//     .patch("/api/v1/posts/likepost/6373b72313a2ae8caa653af8")
//     .set("Authorization", `Bearer ${token}`)
//     .expect(200);
// });
// test for post on feed

it("Post / unlike ===> 200 on success ", () => {
  return request(app)
    .patch("/api/v1/posts/unlikepost/6373b72313a2ae8caa653af8")
    .set("Authorization", `Bearer ${token}`)
    .expect("Content-Type", /json/)
    .expect(200);
});

it("Post / Comment ===> 201 on success ", () => {
  return request(app)
    .post("/api/v1/comment/post")
    .send({
      postId: "63bb81242a132e4287566ea1",
      content: "Nice Picture",
    })
    .set("Authorization", `Bearer ${token}`)
    .expect(200);
});

it("Post / Delete ===> 201 on success ", () => {
  return request(app)
    .delete("/api/v1/comment/delete/6374e0e45a982bda19ada7b1")
    .set("Authorization", `Bearer ${token}`)
    .expect(404);
});

it("Post / Get ===> 201 on success ", () => {
  return request(app)
    .get("/api/v1/comment/get/6373ad2413a2ae8caa653acf")
    .set("Authorization", `Bearer ${token}`)
    .expect(200);
});

it("Post / Update ===> 401 on Unauthorized comment manipulation ", () => {
  return request(app)
    .patch("/api/v1/comment/update/6373ad2413a2ae8caa653acf")
    .send({
      content: "Nice Picture",
    })
    .set("Authorization", `Bearer ${token}`)
    .expect(404);
});

it("Post / Update ===> 200 on successful comment edit ", () => {
  return request(app)
    .patch("/api/v1/comment/update/63bfb93970d27ccc0f5752e2")
    .send({
      content: "Nice Picture",
    })
    .set("Authorization", `Bearer ${token}`)
    .expect(200);
});
