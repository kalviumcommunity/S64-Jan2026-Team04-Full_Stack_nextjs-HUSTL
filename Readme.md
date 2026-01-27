# 🚀 HUSTL

> **“Stop juggling tabs. Start hustling smart.”**

**HUSTL** is a unified internship and mentorship platform that helps students track internship applications, organize mentor feedback, and turn guidance into real progress — all from a single dashboard.

Built by **Team NoSleep 😴⚡** for students who refuse to fall behind.

---

## 🧠 Why HUSTL?

Applying everywhere.
Feedback everywhere.
Progress? **Nowhere.**

Students lose clarity because applications, notes, and mentor advice live in different places. **HUSTL fixes that** by giving students **one structured system** to track applications, reflect on feedback, and improve consistently.

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
* **Authentication:** JWT + HTTP-only cookies
* **Database:** MongoDB + Mongoose
* **Containerization:** Docker
* **CI/CD:** GitHub Actions
* **Deployment:** Vercel (App) / AWS or Azure (Demo Deployment)
* **Tools:** Git, GitHub, Postman

---

## 🧩 Concept 1 – Advanced Data Fetching & Rendering Strategy

HUSTL leverages **Next.js App Router** rendering strategies to balance performance, scalability, and data freshness using **Static**, **Dynamic**, and **Hybrid** rendering.

### Rendering Strategies Used

* **Static Rendering (SSG)**
  Used for public pages such as the landing page and informational content. These pages are pre-rendered and load instantly.

* **Dynamic Rendering (SSR)**
  Used for authenticated dashboards (Student, Mentor, Admin) where real-time and user-specific data is required.

* **Hybrid Rendering (ISR)**
  Used for internship listings and detail pages to enable fast load times while periodically refreshing data.

### Why This Approach?

* Improves performance for public and high-traffic pages
* Reduces server load and infrastructure cost
* Ensures real-time accuracy for personalized dashboards
* Scales efficiently as the user base grows

### Scalability Reflection

As HUSTL scales, static and hybrid rendering will be preferred wherever possible, while dynamic rendering will remain limited to critical authenticated routes.

📄 **Related Documentation:** `docs/rendering-strategy.md`

---

## 🔐 Concept 2 – Environment Segregation & Secure Secrets Management

### Why Environment Segregation Is Essential

HUSTL uses **separate environments** to ensure safety and reliability:

* **Development:** Local feature development and testing
* **Staging:** Production-like testing before release
* **Production:** Live users and real internship data

Each environment has its own configuration, ensuring changes in development or staging never impact production.

---

### Secure Secret Management

Sensitive data such as database URLs, authentication secrets, and cloud credentials are **never committed to the repository**.

Instead:

* Secrets are stored securely using **GitHub Secrets**
* Values are injected only during build or runtime
* Environment mix-ups are prevented by strict separation

---

### Case Study: *The Staging Secret That Broke Production*

A common failure scenario occurs when staging credentials are accidentally used in production, leading to data corruption.

This is prevented in HUSTL by:

* Strict environment separation
* Secure secret managers (GitHub Secrets, AWS Parameter Store, Azure Key Vault)
* Environment-specific secret injection

This ensures production builds can access **only production credentials**.

---

## ☁️ Concept 3 – Cloud Deployments 101: Docker → CI/CD → AWS/Azure

HUSTL follows a modern cloud deployment workflow using **containerization**, **automation**, and **cloud infrastructure**.

### Docker

The application is containerized using Docker to ensure consistent behavior across local development, CI pipelines, and production environments.

**Benefits:**

* Eliminates “works on my machine” issues
* Enables reproducible builds
* Simplifies rollbacks using versioned images

---

### CI/CD Pipeline

A GitHub Actions workflow automates the build process on every push or pull request.

This ensures:

* Early detection of build failures
* Consistent deployment artifacts
* Reduced manual deployment errors

---

### Secure Configuration & Environment Management

* Environment variables are stored using `.env` files locally
* Sensitive values are excluded from version control
* Production secrets are injected via AWS or Azure configuration
* Secrets are never hardcoded into Docker images

---

### Case Study: *The Never-Ending Deployment Loop*

A deployment failure can occur when:

* Environment variables are missing
* Old containers continue running
* Multiple containers bind to the same port

These issues are resolved by:

* Validating required environment variables at startup
* Replacing running containers instead of parallel launches
* Deploying versioned Docker images instead of `latest`

---

### Reflection

The most challenging part was understanding the separation between **build-time** and **runtime** configuration.
Future improvements include health checks, staged deployments, and automated rollback strategies.

---

## 🔁 Team Branching & PR Workflow Setup

HUSTL follows a structured GitHub workflow inspired by real-world engineering teams to ensure clean collaboration, code quality, and traceability across the development process.

### 🌿 Branch Naming Conventions

All work is done on dedicated branches using a consistent naming pattern:

* **feature/<feature-name>** – New features
* **fix/<bug-name>** – Bug fixes
* **chore/<task-name>** – Maintenance or setup tasks
* **docs/<update-name>** – Documentation updates

**Examples:**

* `feature/login-auth`
* `fix/navbar-alignment`
* `docs/git-workflow-setup`

Direct commits to the `main` branch are not allowed. All changes must go through a Pull Request.

---

## 🗄️ PostgreSQL Schema Design

### Core Entities
The database schema includes the following entities:
- User
- Internship
- Application
- EligibilityTest
- TestQuestion
- TestAttempt
- Feedback

### Relationships & Constraints
- One user can apply to multiple internships
- One internship can have multiple applications
- Each internship has one eligibility test
- Each test contains multiple questions
- Applications store mentor feedback
- Foreign keys enforce relational integrity
- Unique constraints prevent duplicate users
- Cascade deletes ensure data consistency

### Normalization
- 1NF: All fields are atomic
- 2NF: No partial dependency on composite keys
- 3NF: No redundant or derived data stored

### Scalability & Query Support
This schema supports efficient querying for:
- Fetching student applications
- Listing applicants for an internship
- Retrieving mentor feedback
- Verifying eligibility test results

The normalized design ensures scalability, consistency, and performance as the system grows.

--- 

### 📄 Pull Request (PR) Template

A standardized Pull Request template is used to ensure clarity and consistency during reviews.
Each PR includes:

* A brief summary of the change
* A list of key updates
* Screenshots or evidence (if applicable)
* A checklist to verify build, review, and linkage to tasks

This helps reviewers quickly understand the purpose and scope of each change.

---

### ✅ Code Review Checklist

Before merging any Pull Request, the following checks are performed:

* Code follows the project’s structure and naming conventions
* Functionality is tested locally
* No console errors or warnings are present
* Linting and formatting rules are satisfied
* Documentation is updated where required
* No sensitive data (API keys, secrets) is exposed

---

### 🔒 Branch Protection Rules

The `main` branch is protected using GitHub branch protection rules to enforce quality and consistency:

* Pull Requests are required before merging
* At least one approval is required
* All review conversations must be resolved
* Rules apply to all contributors, including administrators

This ensures that only reviewed and validated changes are merged into the main branch.

---

### 🔍 Workflow Reflection

This workflow encourages disciplined collaboration by enforcing reviews and structured branching. It reduces the risk of unreviewed code reaching production, improves code quality, and enables the team to scale development efficiently.

---

### 🎯 One-Line Summary

> HUSTL uses a professional GitHub workflow with structured branching, PR templates, reviews, and protected branches to ensure high code quality and smooth team collaboration.


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

