export {}; 

const BASE_URL = process.env.APP_URL ?? "http://localhost:3000";

describe("Smoke Test - Health Endpoint", () => {
  test("health endpoint returns OK", async () => {
    const response = await fetch(`${BASE_URL}/api/health`);

    expect(response.status).toBe(200);

    const data = await response.json();
    expect(data.status).toBe("ok");
  });
});
