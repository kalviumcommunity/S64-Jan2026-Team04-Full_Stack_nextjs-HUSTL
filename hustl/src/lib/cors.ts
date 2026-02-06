export function applyCorsHeaders(response: Response) {
  response.headers.set(
    "Access-Control-Allow-Origin",
    "http://localhost:3000"
  );

  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE"
  );

  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  return response;
}
