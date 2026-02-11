# 🚦 GitHub Actions CI Pipeline – HUSTL

## 📌 Overview

This document explains the Continuous Integration (CI) setup for the HUSTL project using GitHub Actions.

The CI pipeline automatically runs on every push or pull request to verify code quality, ensure successful builds, and maintain production readiness.

---

## ⚙️ Workflow Location

.github/workflows/ci.yml

The workflow triggers on:

- Push to `main`
- Push to `develop`
- Pull requests targeting `main` or `develop`

---

## 🔄 CI Pipeline Stages

### 1️⃣ Lint Stage
- Runs ESLint to maintain code quality and consistency.
- Detects syntax errors and unused variables.

Command:
npm run lint

---

### 2️⃣ Test Stage
- Executes unit tests (if available).
- Prevents broken logic from being merged.

Command:
npm test

If no tests exist, a fallback script ensures the pipeline does not fail.

---

### 3️⃣ Build Stage
- Compiles the Next.js application.
- Verifies TypeScript correctness and configuration integrity.
- Ensures the application is production-ready.

Command:
npm run build

If this step fails, the pipeline stops and prevents unsafe merges.

---

## 🚀 Workflow Behavior

- Uses Node.js v18 environment.
- Caches dependencies for faster builds.
- Prevents overlapping runs using concurrency control.
- Fails fast if any stage fails.

---

## 🔐 Secrets Management

Sensitive credentials are stored securely using:

GitHub → Settings → Secrets and Variables → Actions

Secrets are injected during workflow execution and never committed to the repository.

---

## 📊 Validation

After pushing changes:

1. Navigate to the **Actions** tab in GitHub.
2. Open the latest CI run.
3. Confirm all stages (Lint → Test → Build) pass successfully.
4. Capture a screenshot as proof of successful execution.

---

## 💡 Importance of CI

Continuous Integration ensures:

- Early detection of bugs
- Consistent code quality
- Reliable builds
- Safe and controlled merges
- Reduced manual verification effort

---

## 🧠 Reflection

The CI pipeline improves development efficiency by automatically validating changes before they reach the main branch. It enforces best practices and prepares the project for scalable deployment workflows.

Future improvements may include:

- Automated deployment (CD)
- Docker image builds
- Code coverage reports
- Security scanning integrations

---

## ✅ Deliverables

- CI workflow file created
- Lint, Test, and Build stages configured
- Successful GitHub Actions run verified
- Documentation added
