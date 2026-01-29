## 🔌 API Route Structure & Naming

### API Hierarchy
The backend APIs are organized using Next.js App Router and file-based routing:

- /api/users
- /api/users/[id]
- /api/internships
- /api/internships/[id]
- /api/applications
- /api/applications/[id]

### RESTful Conventions
- Resource-based naming using plural nouns
- Proper HTTP methods (GET, POST, PUT, DELETE)
- Clean and predictable URL structure

### Status Codes & Error Handling
- 200 for successful GET requests
- 201 for resource creation
- 404 for missing resources
- 400 for invalid input

### Pagination Support
GET endpoints support pagination using query parameters such as `page` and `limit`.

### Testing
APIs were tested using browser and Postman to verify correct responses, status codes, and JSON structures.

### Reflection
Consistent API naming and structure improves maintainability, reduces integration errors, and makes the backend predictable for frontend and third-party consumers.
