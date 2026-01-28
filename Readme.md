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

## ⭐ Final Line

> **HUSTL is where applications meet direction — and effort turns into outcomes.**

---
