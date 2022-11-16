const app = require("../server");
const request = require("supertest");
const file  = require("../public/uploads/download.jpg");

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzczYzBhMGEzMDY2M2JhZTVmOWI1NTkiLCJpYXQiOjE2Njg1NjUwMDEsImV4cCI6MTY2ODY1MTQwMX0.ggoIdK2Wwyr-yrTmzpKQ-phPYL9L3Z-TyPjQNC6tARs";

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



it("Post / upload ===> 400 on success ", () => {
  return request(app)
    .post("/api/v1/posts/upload")
    .send({
      location: "kathmandu",
      filetype: "image/jpg",
      description: "wow hurry",
    })
    .attach(
      "postfile",
      file,
    )
    .set("Authorization", `Bearer ${token}`)
    .expect("Content-Type", /json/)
    .expect(201);
});
