# System Design & Architecture – HUSTL

This document describes the **system-level planning and architecture**
for the HUSTL platform. It focuses on **design decisions, structure,
and technical strategy** without implementation details.

This file represents the **pre-coding phase** of the project and is
intended to align the team on architecture before development.

---

## 1. Project Overview

HUSTL is a unified internship and mentorship platform that helps students
track internship applications, manage mentor feedback, and monitor
progress through a single dashboard.

The system is designed to support three primary roles:
- Students
- Mentors
- Admins

This document outlines how the application is structured at a system
level to ensure scalability, maintainability, and performance.

---

## 2. Planned Project Folder Structure

The project follows the **Next.js App Router architecture**, separating
frontend pages, backend APIs, shared utilities, and documentation.

```

hustl/
├── app/
│   ├── page.tsx                # Public landing page
│   ├── login/                  # Authentication pages
│   ├── dashboard/              # Protected dashboards
│   ├── users/[id]/             # Dynamic user profile pages
│   ├── layout.tsx              # Global layout wrapper
│   ├── not-found.tsx           # Custom 404 page
│   └── api/                    # Backend API routes
│       ├── auth/               # Signup/Login APIs
│       ├── users/              # User management APIs
│       └── internships/        # Internship listing APIs
│
├── lib/
│   ├── prisma.ts               # Prisma client configuration
│   ├── redis.ts                # Redis client configuration
│   ├── responseHandler.ts      # Standard API responses
│   └── schemas/                # Zod validation schemas
│
├── prisma/
│   ├── schema.prisma           # PostgreSQL schema
│   └── migrations/             # Database migrations
│
├── middleware.ts               # Route protection middleware
├── docs/                       # Design & documentation
└── README.md

```

This structure ensures clear separation of concerns between UI,
business logic, database access, and documentation.

---

## 3. Database Design (PostgreSQL)

HUSTL uses **PostgreSQL** as a relational database to ensure
data consistency, integrity, and scalability.

### Core Entities

- **User** – Represents students, mentors, and admins
- **Internship** – Represents internship opportunities
- **Application** – Links users to internships they apply for
- **MentorFeedback** – Stores structured feedback from mentors
- **EligibilityTest** – Defines screening tests for internships
- **TestAttempt** – Tracks student test attempts and scores

### Relationships

- A user can apply to multiple internships
- An internship can receive multiple applications
- Each application belongs to one user and one internship
- Mentor feedback is linked to a specific user and internship
- Test attempts link users to eligibility tests

---

## 4. Keys, Constraints & Normalization

### Keys & Constraints

- **Primary Keys (PK):** Uniquely identify records
- **Foreign Keys (FK):** Define relationships between tables
- **UNIQUE constraints:** Prevent duplicate emails
- **NOT NULL constraints:** Enforce required fields
- **ON DELETE CASCADE:** Maintain referential integrity

### Normalization

The schema follows standard normalization rules:

- **1NF:** Atomic values, no repeating groups
- **2NF:** No partial dependency on composite keys
- **3NF:** No transitive dependencies

This reduces redundancy and improves data integrity.

---

## 5. Prisma ORM – Architectural Role

Prisma ORM acts as the **data access layer** between the application
and PostgreSQL.

### Why Prisma?

- Type-safe database queries
- Auto-generated client
- Schema-driven development
- Safer and repeatable migrations
- Reduced runtime errors

Prisma ensures database structure and application logic remain aligned
through a single source of truth.

---

## 6. API Route Design (Planned)

The backend follows **RESTful API conventions** using
Next.js file-based routing.

### Planned API Endpoints

- `POST /api/auth/signup` – User registration
- `POST /api/auth/login` – User authentication
- `GET /api/users` – Fetch users
- `GET /api/internships` – Fetch internship listings
- `POST /api/applications` – Apply for internships

Routes are designed using:
- Plural nouns
- Clear resource-based naming
- Consistent HTTP verbs

This improves predictability and maintainability.

---

## 7. Caching Strategy (Redis – Planned)

Redis will be used as an **in-memory caching layer** to improve
performance and reduce database load.

### Cached Data

- Internship listings
- Dashboard summary statistics

### Caching Approach

- Cache-aside (lazy loading) pattern
- Time-to-Live (TTL) to auto-expire data
- Cache invalidation after create/update operations

This ensures faster responses while preventing stale data issues.

---

## 8. Routing Strategy (Next.js App Router)

### Public Routes
- `/`
- `/login`

### Protected Routes
- `/dashboard`
- `/users/[id]`

Dynamic routing enables scalable profile and detail pages.
Middleware will enforce authentication for protected routes.

---

## 9. Reflection

Designing the system architecture before implementation provides
a clear development roadmap and reduces future technical debt.

By defining:
- Folder structure
- Database relationships
- API design
- Caching strategy

the project becomes easier to scale, maintain, and collaborate on.
This design-first approach reflects real-world engineering practices.
```

