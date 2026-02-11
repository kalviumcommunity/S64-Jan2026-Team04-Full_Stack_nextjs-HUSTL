export {}; 

const BASE_URL = process.env.APP_URL ?? "http://localhost:3000";

describe("Smoke Test - Homepage", () => {
  test("homepage renders successfully", async () => {
    const response = await fetch(BASE_URL);
    expect(response.status).toBe(200);
  });
});
