const request = require("supertest");
const app = require("./app.js");

describe("Express API", () => {
  test("GET / returns the greeting message", async () => {
    const response = await request(app).get("/");

    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello World!");
  });

  test("GET /api/users returns all mock users", async () => {
    const response = await request(app).get("/api/users");

    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      { id: 1, username: "Alex", displayname: "Alex" },
      { id: 2, username: "Anoop", displayname: "Anoop" },
    ]);
  });

  test("GET /api/users/:id returns the requested user or 404", async () => {
    const existingUser = await request(app).get("/api/users/2");
    const missingUser = await request(app).get("/api/users/999");

    expect(existingUser.status).toBe(200);
    expect(existingUser.body).toEqual({
      id: 2,
      username: "Anoop",
      displayname: "Anoop",
    });

    expect(missingUser.status).toBe(404);
    expect(missingUser.body).toEqual({ message: "User not found" });
  });
});
