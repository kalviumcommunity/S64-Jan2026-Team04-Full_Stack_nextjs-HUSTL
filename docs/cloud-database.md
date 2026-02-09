## 1. Overview

HUSTL uses a managed PostgreSQL database to store user data, internship records, applications, and feedback securely and reliably.
A managed database service offloads operational responsibilities such as backups, patching, and scaling, allowing the development team to focus on application logic.

---

## 2. Why Managed PostgreSQL?

Managed database services such as **AWS RDS** or **Azure Database for PostgreSQL** provide:

* Automated backups
* High availability and failover support
* Patch management
* Secure network access controls
* Monitoring and scaling capabilities

This approach is aligned with production-grade SaaS architectures.

---

## 3. Selected Database Strategy

For HUSTL, a **managed PostgreSQL service** is used (conceptually equivalent to AWS RDS or Azure PostgreSQL).

| Component       | Choice                                      |
| --------------- | ------------------------------------------- |
| Database Engine | PostgreSQL                                  |
| Deployment Type | Managed Cloud Database                      |
| Access Model    | Secure connection via environment variables |
| ORM             | Prisma                                      |

This setup ensures scalability, reliability, and clean separation between application logic and data storage.

---

## 4. Provisioning Process (Conceptual)

### AWS RDS (PostgreSQL)

* Database engine selected: PostgreSQL
* Instance configured using free-tier / dev settings
* Credentials generated securely
* Network access controlled via security groups
* Public access enabled only for testing purposes

### Azure Database for PostgreSQL

* PostgreSQL single-server configuration
* Firewall rules restrict access to trusted IPs
* Managed backups enabled by default

---

## 5. Network & Security Configuration

To prevent unauthorized access:

* Database access is restricted using IP allowlisting or private networking
* Credentials are never hardcoded
* All database connections use secure connection strings

In production, the database would be accessible only from the application server.

---

## 6. Application Connection Strategy

The Next.js application connects to the PostgreSQL database using an environment variable:

* `DATABASE_URL` stored in `.env.local`
* Connection handled through Prisma ORM
* Credentials injected at runtime

This ensures:

* Secure credential management
* Environment-specific configuration
* No secrets committed to version control

---

## 7. Verification & Validation

Database connectivity can be verified by:

* Running a simple query from the application
* Connecting via admin tools (pgAdmin / Azure Data Studio / psql)
* Confirming successful authentication and query execution

Successful connection confirms correct provisioning and network configuration.

---

## 8. Backup & Maintenance Strategy

Managed PostgreSQL services provide:

* Daily automated backups
* Point-in-time recovery
* Maintenance windows for updates

These features ensure data durability and minimal downtime in case of failures.

---

## 9. Scalability & Future Enhancements

As HUSTL grows, the database can scale by:

* Increasing instance size
* Adding read replicas
* Enabling high availability configurations
* Restricting access via private endpoints

This design supports long-term platform growth.

---

## 10. Reflection

Using a managed PostgreSQL database significantly reduces operational complexity while improving reliability and security.
This approach aligns with real-world SaaS deployments and prepares HUSTL for future scaling without architectural changes.

