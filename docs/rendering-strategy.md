# Rendering Strategy – HUSTL

This document explains how **HUSTL** uses different rendering strategies in **Next.js App Router** to improve performance, scalability, and user experience.

---

## Rendering Modes Used

### Static Rendering (SSG)

* **Used for:** Landing page, About page, FAQ
* **Why:** Content is the same for all users and rarely changes
* **Impact:** Very fast load times and no server overhead

---

### Dynamic Rendering (SSR)

* **Used for:** Student, Mentor, and Admin dashboards; Profile pages
* **Why:** These pages display real-time, user-specific data
* **Impact:** Ensures accuracy, security, and personalization

---

### Hybrid Rendering (ISR)

* **Used for:** Internship listings and internship detail pages
* **Why:** Internship data changes occasionally but does not require real-time updates
* **Impact:** Combines static performance with periodic data freshness

---

## Rendering Strategy Summary

| Page Type        | Rendering Strategy | Purpose                      |
| ---------------- | ------------------ | ---------------------------- |
| Public pages     | Static (SSG)       | Fast and scalable            |
| Internship pages | Hybrid (ISR)       | Balanced speed and freshness |
| Dashboards       | Dynamic (SSR)      | Real-time and secure data    |

---

## Scalability Consideration

If HUSTL scales to a much larger number of users, static and hybrid rendering will be used wherever possible to reduce server load. Dynamic rendering will be limited to authenticated dashboards where real-time data is essential.

---

## Conclusion

By selectively using static, dynamic, and hybrid rendering, HUSTL achieves a balance between speed, reliability, and scalability while avoiding unnecessary server costs.


