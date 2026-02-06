# 🔐 Role-Based Access Control (RBAC) – HUSTL

## 1. Overview

Role-Based Access Control (RBAC) is used in HUSTL to ensure that users can only access features and resources permitted by their role.
Instead of assigning permissions to individual users, permissions are grouped by role, improving security, scalability, and maintainability.

HUSTL supports multiple user types, making RBAC essential for enforcing clear boundaries between students, mentors, and administrators.

---

## 2. Roles Defined in HUSTL

HUSTL uses a small, well-defined set of roles to avoid unnecessary complexity.

| Role    | Description                                                             |
| ------- | ----------------------------------------------------------------------- |
| Student | Applies for internships, takes eligibility tests, views mentor feedback |
| Mentor  | Reviews students, provides structured feedback, evaluates test results  |
| Admin   | Manages users, internships, mentors, and platform configuration         |

---

## 3. Permissions Mapping

Permissions are grouped by role instead of user identity.

| Permission                  | Student | Mentor | Admin |
| --------------------------- | ------- | ------ | ----- |
| Read internships            | ✅       | ✅      | ✅     |
| Apply internship            | ✅       | ❌      | ❌     |
| Take eligibility test       | ✅       | ❌      | ❌     |
| View student data           | ❌       | ✅      | ✅     |
| Give feedback               | ❌       | ✅      | ❌     |
| Manage users                | ❌       | ❌      | ✅     |
| Create / update internships | ❌       | ❌      | ✅     |

This structure ensures clarity and avoids overlapping responsibilities.

---

## 4. Role Storage & Authentication Context

A user’s role is stored as part of their authentication context (JWT or session data).
After login, the role is attached to the authenticated user payload and used across the application for authorization checks.

This allows both API routes and UI components to make access decisions consistently.

---

## 5. RBAC Enforcement Strategy

### Backend (API-Level Enforcement)

* Sensitive API routes validate the user’s role before executing actions.
* Permission checks are enforced server-side to prevent unauthorized access even if the UI is bypassed.

Example logic (conceptual):

* If a user does not have permission for an action → request is denied.
* If the role matches required permissions → request proceeds.

---

### Frontend (UI-Level Control)

* UI elements such as buttons, pages, or sections are conditionally rendered based on user role.
* Unauthorized actions are hidden to reduce confusion and improve UX.

This dual-layer approach ensures both **security** and **usability**.

---

## 6. Audit & Logging (Conceptual)

RBAC decisions can be logged to track access attempts:

* Successful access (allowed)
* Blocked access (denied)

These logs help with:

* Debugging permission issues
* Auditing user actions
* Improving future security policies

---

## 7. Scalability & Future Improvements

The current RBAC design is intentionally simple and scalable.

Future enhancements could include:

* Permission-based access (policy-driven)
* Role inheritance
* Fine-grained permissions per resource
* Admin-managed roles stored in the database

---

## 8. Reflection

Implementing RBAC early ensures that HUSTL remains secure as new features and user roles are introduced.
By centralizing permission logic and enforcing it at both the API and UI layers, the platform avoids unauthorized access while maintaining clarity and maintainability.

This design aligns with real-world SaaS security practices.

---