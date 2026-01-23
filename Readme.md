# 🚀 HUSTL

> **“Stop juggling tabs. Start hustling smart.”**

**HUSTL** is a unified internship and mentorship platform that helps students track internship applications, organize mentor feedback, and turn guidance into real progress — all from a single dashboard.

Built by **Team NoSleep** 😴⚡ for students who refuse to fall behind.

---

## 🧠 Why HUSTL?

Applying everywhere.
Feedback everywhere.
Progress? Nowhere.

Students lose clarity because applications, notes, and mentor advice live in different places. **HUSTL fixes that** by giving you one system to **track, reflect, and improve**.

---

## 💡 What HUSTL Does

* 📋 Tracks all your internship applications in one place
* 🔄 Shows clear application statuses (Applied → Interview → Offer)
* 🧑‍🏫 Stores structured mentor feedback
* 📝 Turns feedback into actionable improvement steps
* 📊 Gives a clear snapshot of your progress

> **HUSTL helps you hustle smarter — not harder.**

---

## 👥 Who Is It For?

* 🎓 College students applying for internships
* 🧑‍🏫 Mentors guiding students
* 🛠️ Admins managing the platform

---

## ✨ MVP Features

* 🔐 Authentication (Student, Mentor, Admin)
* 📋 Internship application CRUD
* 🔄 Status tracking
* 🧑‍🏫 Mentor feedback system
* 📊 Student dashboard
* 🔐 Role-based access
* 📱 Responsive UI

---

## 🛠️ Tech Stack

* **Framework:** Next.js (App Router)
* **UI:** React + Tailwind CSS
* **Backend:** Next.js API Routes
* **Auth:** JWT + HTTP-only cookies
* **Database:** MongoDB + Mongoose
* **Deployment:** Vercel
* **Tools:** Git, GitHub, Postman

---

## 🚀 Future Enhancements

* AI resume insights
* Internship recommendations
* Notifications
* Advanced analytics
* Recruiter access

---

## 👨‍💻 Team

**Team Name:** No Sleep
**Project:** HUSTL

---
Perfect 👍
Below is a **clean, minimal “Concept-1” section** that fits naturally into your **existing README** without making it bulky or overly technical.

👉 You can **copy-paste this directly** into your README (best place: **after Tech Stack** or **before Future Enhancements**).

---

## 🧩 Concept 1 – Advanced Data Fetching & Rendering Strategy

HUSTL uses **Next.js App Router** rendering strategies to balance performance, scalability, and data freshness by combining **Static**, **Dynamic**, and **Hybrid** rendering approaches.

### Rendering Strategies Used

**Static Rendering (SSG)**
Used for public pages such as the Landing page and informational content.
These pages are pre-rendered and load instantly for all users.

**Dynamic Rendering (SSR)**
Used for authenticated dashboards (Student, Mentor, Admin).
These pages require real-time, user-specific data and are rendered on each request to ensure accuracy and security.

**Hybrid Rendering (ISR)**
Used for internship listings and internship detail pages.
This allows pages to load quickly like static pages while periodically updating to reflect new or closed internships.

### Why This Approach?

* Improves performance for public and high-traffic pages
* Reduces server load and infrastructure cost
* Ensures real-time accuracy for personalized dashboards
* Scales efficiently as the number of users increases

### Scalability Reflection

If HUSTL scales to a significantly larger user base, static and hybrid rendering will be preferred wherever possible, while dynamic rendering will remain limited to critical authenticated pages only.

---

### 🔗 Related Documentation

Detailed rendering strategy documentation is available here:
📄 `docs/rendering-strategy.md`

---

## ⭐ Final Line

> **HUSTL is where applications meet direction — and effort turns into outcomes.**

## Technology Orientation – Learnings

In this sprint, I learned how a modern full-stack application is structured using Next.js and cloud technologies.

I understood the role of Next.js in handling both frontend and backend logic, and how databases like PostgreSQL connect to the application through Prisma ORM.

I also learned how Redis improves performance through caching, how Docker ensures consistent environments, and how CI/CD with AWS or Azure helps in deploying and scaling applications.