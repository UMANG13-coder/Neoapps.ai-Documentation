---
id: databaseguidelines
title: Database Creation Guidelines
sidebar_position: 2
---

# Database Creation Guidelines

## Overview

> This document provides detailed guidelines for developers on how to create MySQL databases that are compatible with our no-code app builder. Following these guidelines ensures seamless integration and optimal performance of your applications.

## General Guidelines

- **Database Naming**: Use lowercase, descriptive names, including a prefix indicating the environment (`prod_`, `dev_`).
- **Character Set and Collation**: Default to UTF-8 (`utf8mb4`) and use the collation that best suits your language requirements.

## Table Design Guidelines

### Naming Conventions

- Tables and columns should use lowercase, descriptive names, with underscores separating words (e.g., `user_accounts`).

### Primary Keys

- Use integers with auto-increment.
- Must Avoid composite primary keys.

### Data Types

- `VARCHAR(n)`: For strings, where `n` is the maximum length.
- `INT`, `SMALLINT`, `MEDIUMINT`, `BIGINT`: For integers, chosen based on data range.
- `FLOAT`, `DOUBLE`: For floating-point numbers.
- `DATE`, `DATETIME`, `TIMESTAMP`: For dates and times.
- `TEXT`: For long text fields.
- Avoid `ENUM`; consider additional configuration tables if necessary.

> Provide Example what does it mean avoid ENUM here.

### Column Attributes

- Use NOT NULL for mandatory fields.
- Provide default values where applicable.
- Include `isActive` (BOOLEAN, default TRUE), `createdBy` (VARCHAR), `createdAt` (DATETIME), `modifiedBy` (VARCHAR, nullable), `modifiedAt` (DATETIME, nullable).

### Indexes and Foreign Keys

- Create unique indexes for non-primary key columns that must be unique.
- Define foreign key constraints with appropriate ON DELETE and ON UPDATE actions.

### System reserved database tables

- Do not use `users` as database table name as its reserved for AI generator to give you access in deployed application.

## Additional Guidelines

1. **Foreign Key Naming**

- Use a consistent naming convention, like `fk_child_parent_column`.

2. **Cascading Actions**

- Choose actions based on application logic, defaulting to RESTRICT.

3. **Commenting and Documentation**

- Comment tables and columns to explain their purpose or any peculiarities.

4. **Version Control**

- Maintain scripts in a version-controlled repository.

## Script Example

> Below is an example `CREATE TABLE` script following these guidelines:

```sql
CREATE TABLE user_accounts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  is_active BOOLEAN DEFAULT TRUE,
  createdAt VARCHAR(255) NOT NULL,
  modifiedAt DATETIME NOT NULL,
  modifiedBy VARCHAR(255),
  modifiedAt DATETIME,
  FOREIGN KEY (created_by) REFERENCES users(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

<!-- ### Check, Copy and Use our Imaginary Split-the-bill application : MySQL Database -->

### Dive into MySQL Database with our Spilt-the-bill Project Script

```
CREATE TABLE Appusers (
  app_user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  createdBy VARCHAR(255) NOT NULL,
  modifiedBy VARCHAR(255) NOT NULL,
  createdAt datetime NOT NULL,
  modifiedAt datetime NOT NULL,
  isActive tinyint(1) NOT NULL DEFAULT '1'
);
CREATE TABLE expense_categories (
  expense_category_id INT PRIMARY KEY AUTO_INCREMENT,
  category_name VARCHAR(255),
  createdBy VARCHAR(255) NOT NULL,
  modifiedBy VARCHAR(255) NOT NULL,
  createdAt datetime NOT NULL,
  modifiedAt datetime NOT NULL,
  isActive tinyint(1) NOT NULL DEFAULT '1'
);

CREATE TABLE group_table (
  group_id INT PRIMARY KEY AUTO_INCREMENT,
  group_name VARCHAR(255),
  createdBy VARCHAR(255) NOT NULL,
  modifiedBy VARCHAR(255) NOT NULL,
  createdAt datetime NOT NULL,
  modifiedAt datetime NOT NULL,
  isActive tinyint(1) NOT NULL
);
CREATE TABLE group_balances (
  balance_id INT PRIMARY KEY AUTO_INCREMENT,
  group_id INT,
  app_user_id INT,
  balance_amount FLOAT,
  FOREIGN KEY (group_id) REFERENCES group_table(group_id),
  FOREIGN KEY (app_user_id) REFERENCES Appusers(app_user_id),
  createdBy VARCHAR(255) NOT NULL,
  modifiedBy VARCHAR(255) NOT NULL,
  createdAt datetime NOT NULL,
  modifiedAt datetime NOT NULL,
  isActive tinyint(1) NOT NULL
);
CREATE TABLE currencies (
  currency_id INT PRIMARY KEY AUTO_INCREMENT,
  currency_name VARCHAR(255),
  currency_code VARCHAR(10),
  createdBy VARCHAR(255) NOT NULL,
  modifiedBy VARCHAR(255) NOT NULL,
  createdAt datetime NOT NULL,
  modifiedAt datetime NOT NULL,
  isActive tinyint(1) NOT NULL DEFAULT '1'
);

CREATE TABLE debt_calculations (
  debt_calculation_id INT PRIMARY KEY AUTO_INCREMENT,
  group_id INT,
  app_user_id INT,
  receiver_id INT,
  amount FLOAT,
  currency_id INT,
  is_partial INT,
  date DATE,
  FOREIGN KEY (group_id) REFERENCES group_table(group_id),
  FOREIGN KEY (app_user_id) REFERENCES Appusers(app_user_id),
  FOREIGN KEY (currency_id) REFERENCES currencies(currency_id),
  createdBy VARCHAR(255) NOT NULL,
  modifiedBy VARCHAR(255) NOT NULL,
  createdAt datetime NOT NULL,
  modifiedAt datetime NOT NULL,
  isActive tinyint(1) NOT NULL DEFAULT '1'
);
CREATE TABLE expense_split_rules (
  rule_id INT PRIMARY KEY AUTO_INCREMENT,
  group_id INT,
  split_type VARCHAR(255),
  details TEXT,
  FOREIGN KEY (group_id) REFERENCES group_table(group_id),
  createdBy VARCHAR(255) NOT NULL,
  modifiedBy VARCHAR(255) NOT NULL,
  createdAt datetime NOT NULL,
  modifiedAt datetime NOT NULL,
  isActive tinyint(1) NOT NULL
);
CREATE TABLE expenses (
  expense_id INT PRIMARY KEY AUTO_INCREMENT,
  group_id INT,
  app_user_id INT,
  amount FLOAT,
  currency_id INT,
  expense_category_id INT,
  date DATE,
  FOREIGN KEY (group_id) REFERENCES group_table(group_id),
  FOREIGN KEY (app_user_id) REFERENCES Appusers(app_user_id),
  FOREIGN KEY (currency_id) REFERENCES currencies(currency_id),
  FOREIGN KEY (expense_category_id) REFERENCES expense_categories(expense_category_id),
  createdBy VARCHAR(255) NOT NULL,
  modifiedBy VARCHAR(255) NOT NULL,
  createdAt datetime NOT NULL,
  modifiedAt datetime NOT NULL,
  isActive tinyint(1) NOT NULL DEFAULT '1'
);
CREATE TABLE group_memberships (
  membership_id INT PRIMARY KEY AUTO_INCREMENT,
  group_id INT,
  app_user_id INT,
  FOREIGN KEY (group_id) REFERENCES group_table(group_id),
  FOREIGN KEY (app_user_id) REFERENCES Appusers(app_user_id),
  isActive tinyint(1) NOT NULL DEFAULT '1',
  createdBy VARCHAR(255) NOT NULL,
  modifiedBy VARCHAR(255) NOT NULL,
  createdAt datetime NOT NULL,
  modifiedAt datetime NOT NULL

);

CREATE TABLE reminders (
  reminder_id INT PRIMARY KEY AUTO_INCREMENT,
  app_user_id INT,
  reminder_frequency VARCHAR(255),
  last_reminder_date DATE,
  FOREIGN KEY (app_user_id) REFERENCES Appusers(app_user_id),
  createdBy VARCHAR(255) NOT NULL,
  modifiedBy VARCHAR(255) NOT NULL,
  createdAt datetime NOT NULL,
  modifiedAt datetime NOT NULL,
  isActive tinyint(1) NOT NULL DEFAULT '1'

);

CREATE TABLE user_preferences (
  user_preference_id INT PRIMARY KEY AUTO_INCREMENT,
  app_user_id INT,
  currency_id INT,
  reminder_frequency VARCHAR(255),
  FOREIGN KEY (app_user_id) REFERENCES Appusers(app_user_id),
  FOREIGN KEY (currency_id) REFERENCES currencies(currency_id),
  createdBy VARCHAR(255) NOT NULL,
  modifiedBy VARCHAR(255) NOT NULL,
  createdAt datetime NOT NULL,
  modifiedAt datetime NOT NULL,
  isActive tinyint(1) NOT NULL DEFAULT '1'

);
```

# Generative AI Integration

> Utilize our accessible GPT service to tailor your database design according to the specified requirements and guidelines mentioned previously. Access to this feature necessitates an active ChatGPT subscription along with adherence to the provided database guidelines.

> The integration of AI facilitates the generation of requirements, user stories, user journeys, and wireframe specifications. However, please note that these advanced capabilities are exclusive to our Enterprise version.

> For inquiries or to obtain the Enterprise version for comprehensive AI access, please do not hesitate to reach out and contact us.

> Additionally, explore the functionality of our chatbot through QA-based sessions, acting as a Virtual Business Analyst. We're continuously working to enhance our offerings with more advanced features planned for the future. Stay tuned for updates and make sure to check our roadmap for what's coming next.

[![Video Title](http://img.youtube.com/vi/VIDEO_ID/0.jpg)](http://www.youtube.com/watch?v=VIDEO_ID "Video Title")

<!-- ## Generative AI Integration and Usage

**Public GPT link** -

  1.**[Project Requirements Wizard](https://chat.openai.com/g/g-4Kd60CdM0-1-project-requirements-wizard)** - Neutral, in-depth requirements generator for diverse projects.
  2.**[Story Weaver](https://chat.openai.com/g/g-KkjJ24bBr-2-story-weaver)** - I convert app requirements into user stories and journeys.
  3.**[Database Architect](https://chat.openai.com/g/g-Q8j3HqdNs-3-database-architect)** - To create your database from your Business and Functional requirements.
  4.**[Workflow Analyzer](https://chat.openai.com/g/g-ycNQ21ntX-4-workflow-analyzer)** - Analyzes databases to identify and explain API workflows.
Once you outline everything and create the database. You can still verify for the database script or errors online. We recommend to not put database if its Intellectual Property specific. Consult us and we will explain the best way or tools to use in order to verify the script.
https://sqltest.net/ -->

## Generative AI Integration and Usage

> Leverage our Generative AI tools to streamline your project development process. Below are the links to our specialized AI services:

1. **Project Requirements Wizard**: A neutral and comprehensive requirements generator for a variety of projects.

- [Explore Project Requirements Wizard](https://chat.openai.com/g/g-4Kd60CdM0-1-project-requirements-wizard)

2. **Story Weaver**: Transforms app requirements into detailed user stories and journeys.

- [Check out Story Weaver](https://chat.openai.com/g/g-KkjJ24bBr-2-story-weaver)

3. **Database Architect**: Assists in creating databases tailored to your Business and Functional requirements.

- [Visit Database Architect](https://chat.openai.com/g/g-Q8j3HqdNs-3-database-architect)

4. **Workflow Analyzer**: Provides analysis of databases to delineate and clarify API workflows.

- [Discover Workflow Analyzer](https://chat.openai.com/g/g-ycNQ21ntX-4-workflow-analyzer)

> After finalizing your project requirements and database design, it's possible to check the database script for errors. For scripts not bound by Intellectual Property constraints, consider using online verification tools like [SQLTest.net](https://sqltest.net/) for script validation. Should your database contain IP-sensitive information, please consult with us directly for guidance on the most appropriate verification methods or tools.

# Database Connectivity and Management Scenarios

> In the light of our discussions on no-code app builders and their adaptability, we delve into various scenarios for connecting to and managing databases. These scenarios address challenges like managing large databases, separating portal instances, and efficiently handling traffic loads. We also touch upon the need for distinct frontend and backend administrative interfaces, and strategies for staging versus production environments, and integrating a microservices architecture.

![Placeholder for content image](https://via.placeholder.com/150)

## Scenario 1: Single UI, Single Database

- **Use Case**: Ideal for straightforward applications with a tightly integrated frontend and backend, offering a unified user experience and data management strategy.

- **Example**: A small business's inventory management system, where the same interface handles viewing and managing inventory data.

## Scenario 2: Multiple UIs, Single Database

- **Use Case**: Applies when different user interfaces (UIs) are needed for various user roles (e.g., customers vs. administrators), all interacting with the same database.

- **Strategy**: Implement two projects under separate licenses to facilitate unique portal experiences, requiring customization to ensure efficient content and functionality delivery for each portal. Efforts to streamline this feature for easier interface separation are in progress. Please check our roadmap.

## Scenario 3: Multiple UIs, Multiple Databases

- **Use Case**: Fits complex applications that require separating operational data from analytics or managing data for different service regions with individual databases.

- **Strategy**: Use multiple licenses for separate application copies, each with its own database. This arrangement supports separate staging and production environments and is conducive to a microservices architecture for scalability and isolation.

## Scenario 4: Microservices Architecture

- **Use Case**: For complex or scalable applications, dividing functionalities into microservices, each with its database, is beneficial.

- **Strategy**: Create several databases and portals, with each microservice managing its part of the application. Utilize Node-RED APIs for inter-service communication, promoting seamless data exchange and workflow automation.

- **Consultation and Customization**: For unique setups (e.g., separating frontend and backend panels), consulting the platform's support team for customization services is recommended to tailor the architecture to the application's requirements.

## Scenario 5: Hybrid Database Architecture with NoSQL Integration via Node-RED

- **Adjusted Strategy**: Interface with NoSQL databases like MongoDB using Node-RED, allowing the application to interact with both SQL and NoSQL databases for a hybrid solution.

- **Implementation**: Use Node-RED flows with MongoDB nodes for CRUD operations on a NoSQL database, triggered by application events or API calls for smooth data interaction.

- **Use Case Benefits**: This setup takes advantage of both relational and document-oriented data models, catering to diverse data storage and processing needs.

## Scenario 6: Multi-Tenancy for SaaS Applications via Cloning

- **Adjusted Strategy**: Support multi-tenant architectures through multiple application instances, each with its database, by cloning the application for each tenant.

- **Implementation**: Develop a master application template and clone it for each new tenant, ensuring isolated and customizable environments.

- **Use Case Benefits**: This strategy offers a practical solution for SaaS applications to serve multiple customers, simplifying data isolation, security, and customization per tenant.

## Conclusion

> The choice between single or multiple UIs and databases depends on the application's complexity, scalability needs, and user roles. The platform's evolving capabilities are designed to simplify these choices, providing developers and businesses with the flexibility to tailor their applications to specific operational and user experience objectives.
