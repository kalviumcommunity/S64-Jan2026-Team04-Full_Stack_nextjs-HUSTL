# 🚀 HUSTL

> **“Stop juggling tabs. Start hustling smart.”**

**HUSTL** is a unified internship and mentorship platform that helps students track internship applications, manage mentor feedback, and turn guidance into measurable progress — all from a single dashboard.

Built by **Team NoSleep 😴⚡** for students who refuse to fall behind.

---

## 🧠 Why HUSTL?

Applying everywhere.
Feedback everywhere.
Progress? **Nowhere.**

Students lose clarity because applications, notes, and mentor advice live in different tools. **HUSTL fixes this** by providing one structured system to track applications, reflect on feedback, and improve consistently.

---

## 💡 What HUSTL Does

* 📋 Tracks all internship applications in one place
* 🔄 Visualizes application status (Applied → Interview → Offer)
* 🧑‍🏫 Stores structured mentor feedback
* 📝 Converts feedback into actionable improvement steps
* 📊 Provides a clear snapshot of student progress

**HUSTL helps students hustle smarter — not harder.**

---

## 👥 Who Is It For?

* 🎓 College students applying for internships
* 🧑‍🏫 Mentors guiding students
* 🛠️ Admins managing the platform

---

## ✨ MVP Features

* 🔐 Authentication (Student, Mentor, Admin)
* 📋 Internship application CRUD
* 🔄 Application status tracking
* 🧑‍🏫 Mentor feedback system
* 📊 Student dashboard
* 🔐 Role-based access control
* 📱 Fully responsive UI

---

## 🛠️ Tech Stack

* **Framework:** Next.js (App Router)
* **UI:** React + Tailwind CSS
* **Backend:** Next.js API Routes
* **ORM:** Prisma
* **Database:** Relational DB (SQLite for development, PostgreSQL-ready)
* **Authentication:** JWT + HTTP-only cookies
* **Containerization:** Docker
* **CI/CD:** GitHub Actions
* **Deployment:** Vercel (App) / Cloud VM (Demo)
* **Tools:** Git, GitHub, Postman

---

## 🔁 Concept 1 – Transactions & Data Consistency

HUSTL uses **Prisma transactions** to ensure **atomic operations** when multiple database actions must succeed or fail together.

### Example Use Case

When a student applies for an internship:

1. Validate user existence
2. Validate internship existence
3. Create the application

All steps are wrapped in a transaction. If any step fails, **no partial data is written**.

### Rollback Handling

Prisma automatically rolls back the transaction when an error is thrown inside the transaction block. This ensures:

* No orphaned records
* No inconsistent application state
* Strong data integrity

---

## ⚡ Concept 2 – Query Optimization & Indexing

To improve read performance and scalability, database indexes are added to frequently queried fields.

### Indexed Fields

* `Application.userId`
* `Application.internshipId`
* `Application.status`
* `TestAttempt.userId`
* `TestAttempt.testId`
* `TestAttempt.createdAt`
* `Feedback.mentorId`
* `Feedback.applicationId`

### Benefits

* Faster filtering and lookups
* Reduced full-table scans
* Improved dashboard and reporting queries

Indexes are managed using **Prisma migrations**, ensuring schema changes are versioned and reproducible.

---

## ☁️ Secure File Uploads with Pre-Signed URLs

HUSTL implements secure file uploads using cloud storage pre-signed URLs.

### Upload Flow
Client → Request Pre-Signed URL → Upload Directly to Cloud → Store File URL in DB

### Why Pre-Signed URLs?
- Backend never handles raw files
- No credentials exposed to clients
- Scales efficiently for large uploads
- Reduces server memory and load

### Validation
- Allowed types: images, PDFs
- Max size: 5MB
- Invalid uploads are rejected before URL generation

### URL Expiry
Upload URLs expire after 60 seconds to limit misuse and replay attacks.

### Public vs Private Access
For assignment testing, files are uploaded with public-read access.
In production, files would be private and accessed via signed download URLs.

### Lifecycle Management
Cloud lifecycle policies can auto-delete files after a fixed period
(e.g., 30 days) to reduce storage costs and prevent stale data buildup.

### Security Reflection
Public access simplifies sharing but increases exposure risk.
Pre-signed URLs balance usability and security by granting time-limited access.

## 🧩 Reusable Layout & Component Architecture

HUSTL uses a modular component-based architecture to ensure visual consistency,
accessibility, and scalability across the application.

## 📝 Forms with React Hook Form & Zod

HUSTL uses React Hook Form (RHF) with Zod to build dynamic, accessible,
and type-safe forms.

### Form Setup
- RHF manages form state and submission
- Zod defines the validation schema
- `zodResolver` binds schema validation to RHF

### Reusable Input Components
Common input logic is extracted into a reusable `FormInput` component,
reducing duplication and enforcing consistent validation and styling.

### Validation Behavior
- Errors appear when validation fails
- Invalid submissions are blocked automatically
- Success feedback is shown on valid data

### Component Hierarchy

LayoutWrapper
 ├── Header
 ├── Sidebar
 └── Page Content

### Reusable Layout Components
- Header: Global navigation and branding
- Sidebar: Contextual navigation
- LayoutWrapper: Shared layout template applied globally

### Reusable UI Components
- Button: Variant-based action component
- Card: Generic content container

### Props Contracts
Each reusable component defines an explicit TypeScript interface for its props,
making usage predictable, self-documenting, and type-safe.

### Accessibility Considerations
- Semantic HTML elements (`header`, `nav`, `aside`, `main`)
- Keyboard-accessible navigation
- Focus indicators for interactive elements
- ARIA labels for navigation regions

### Visual Consistency
A shared layout ensures consistent spacing, navigation, and structure across
all pages. Tailwind utility classes provide a unified design language.

### Scalability Reflection
This structure allows new pages and components to be added without duplicating
layout logic. The trade-off is reduced per-page customization, which is an
acceptable compromise for long-term maintainability.

## ⏳ Loading States & Error Handling

HUSTL uses Next.js App Router’s built-in `loading.js` and `error.js` files
to handle slow or failed data fetching gracefully.

### Loading Fallbacks
Skeleton UIs are displayed while async data is loading, providing immediate
visual feedback and preventing layout shifts.

### Error Boundaries
Route-level error boundaries catch rendering and data-fetching failures,
display a friendly message, and allow users to retry without a full page reload.

### Retry Logic
The retry button uses Next.js’s `reset()` function to re-render the route
after a failure, improving resilience and recovery.

### User Experience Benefits
- Reduces confusion during slow network conditions
- Prevents blank or broken screens
- Builds user trust through clear feedback and recovery options

### Reflection
Loading and error fallbacks improve perceived performance and reliability.
By explicitly handling failure states, the application feels more stable
and predictable even under poor network conditions.

## ☁️ Secure File Uploads with Cloud Object Storage

HUSTL uses AWS S3 with pre-signed URLs to securely handle file uploads.

### Upload Flow
Client → Request Pre-Signed URL → Upload Directly to S3 → Optional Retrieval via Signed URL

### Security Measures
- Private S3 bucket (public access blocked)
- Least-privilege IAM permissions
- Short-lived pre-signed URLs (60s)
- Server-side file validation (type + size)
- Client-side validation to reduce misuse

### File Validation
- Allowed types: JPG, PNG
- Max size: 2MB
- Invalid files rejected before URL generation

### Lifecycle Considerations
S3 lifecycle rules can be applied to auto-delete or archive files
(e.g., after 30 days) to control storage cost and data retention.

### Security Reflection
Using pre-signed URLs ensures credentials are never exposed
and allows uploads to scale without increasing backend load.

## 🔒 Custom Domain & SSL/TLS Configuration

HUSTL is mapped to a custom domain and secured using HTTPS with
TLS certificates managed by AWS Certificate Manager (ACM).

### DNS Configuration
- Route 53 public hosted zone created for the domain
- A (Alias) record maps the root domain to the application load balancer
- CNAME record maps `www` to the root domain

### SSL Certificate
- Public certificate issued via AWS Certificate Manager
- DNS validation used for automated issuance and renewal
- Wildcard domain (`*.myapp.com`) included for subdomain support

### HTTPS Enforcement
- HTTP traffic is redirected to HTTPS at the load balancer level
- Optional application-level redirects enforce HTTPS as defense-in-depth

### Security Reflection
Using ACM ensures certificates are automatically renewed with no downtime.
TLS encryption protects data in transit and builds user trust through
browser-verified HTTPS connections.

### Multi-Environment Strategy
Separate domains or subdomains (e.g., `staging.myapp.com`) can be routed
to different environments using DNS records and additional certificates.

## 🔁 Continuous Integration (CI)

HUSTL uses GitHub Actions to automate code validation on every
push and pull request.

### Workflow Location
`.github/workflows/ci.yml`

### Pipeline Stages
1. Install Dependencies
2. Run ESLint
3. Execute Unit Tests (with coverage)
4. Build Next.js Application
5. Deploy (main branch only)

### Optimizations
- Node dependency caching enabled
- Concurrency control prevents overlapping runs
- Separate deploy stage triggered only on main branch

### Secrets Management
Deployment credentials are stored securely using GitHub Secrets.
No sensitive keys are committed to the repository.

### Reflection
CI ensures code quality, stability, and consistent builds across environments.
It prevents broken code from reaching production and enables safe collaboration.

## 🧪 Performance Verification

Query performance was validated using:

* Prisma query logging
* SQL `EXPLAIN` / query plan inspection

After indexing:

* Sequential scans were replaced with index scans
* Query execution time was reduced for common access patterns

---

## 🗄️ Database Schema Design (Relational)

### Core Entities

* User
* Internship
* Application
* EligibilityTest
* TestQuestion
* TestAttempt
* Feedback

### Relationships

* One user → many applications
* One internship → many applications
* One internship → one eligibility test
* One test → many questions
* One application → many feedback entries

### Data Integrity

* Foreign keys enforce relationships
* Cascade deletes prevent orphaned records
* Unique constraints prevent duplicate users

### Normalization

* 1NF: Atomic fields
* 2NF: No partial dependencies
* 3NF: No redundant data

---

## 🔐 Environment & Secrets Management

* Environment variables are used for configuration
* Sensitive values are never committed to the repository
* `.env` files are excluded from version control
* Production secrets are injected via CI/CD or cloud configuration

### Required Variables

#### Server-only

* `DATABASE_URL` – Database connection string

#### Client-side

* `NEXT_PUBLIC_API_BASE_URL` – API base URL

---

## 🔀 Team Branching & PR Workflow

HUSTL follows a structured GitHub workflow inspired by real-world engineering teams.

### Branch Naming

* `feature/<feature-name>`
* `fix/<bug-name>`
* `chore/<task-name>`
* `docs/<update-name>`

### Rules

* No direct commits to `main`
* All changes go through Pull Requests
* Code reviews required before merge

---

## 📄 Pull Request Standards

Each PR includes:

* Summary of changes
* Key updates
* Evidence or screenshots (if applicable)
* Checklist for validation

---

## 🔒 Branch Protection

* PR required before merging
* At least one approval required
* All conversations must be resolved

This ensures code quality and traceability.

---

## 🚀 Future Enhancements

* AI resume insights
* Internship recommendations
* Notifications
* Advanced analytics
* Recruiter access

---

# Environment Variables

Include:

1️⃣ Table of variables

Example:

Variable	Description	Scope
DATABASE_URL	PostgreSQL connection string	Server
JWT_SECRET	JWT signing secret	Server
REDIS_URL	Redis connection URL	Server
NEXT_PUBLIC_APP_NAME	App name used in UI	Client
NEXT_PUBLIC_API_URL	Base API URL	Client


2️⃣ Explanation section

.env.local stores real secrets and is ignored by Git.

.env.example provides structure for other developers.

Server-only variables are accessed via process.env.

Client variables use NEXT_PUBLIC_ prefix.

Sensitive data is protected from exposure.

---

## ⭐ Final Line

> **HUSTL is where applications meet direction — and effort turns into outcomes.**

---


