---
id: overview
title: Overview
---

# How to Use API / Test API with Bearer Token

Interacting with the API is a critical aspect of extending your app's functionality. This section provides a step-by-step guide on how to authenticate API requests using a Bearer Token and test the API for your development needs.

## Authentication with Bearer Token

- **Generating Tokens**: How to obtain a Bearer Token for authentication.
- **Making Authenticated Requests**: Example requests using the Bearer Token for authorization.

## Testing the API

- **API Testing Tools**: Recommended tools for testing API requests.
- **Sample Requests**: Examples of common API requests to get you started.

Learn how to securely interact with the API to fetch data, update records, and integrate external services into your app.

# How to Use Drag and Drop Designer

The Drag and Drop Designer simplifies the app development process, allowing users to visually assemble applications without writing code.

## Getting Started

- Familiarize yourself with the designer interface.
- Learn to drag components from the toolbox into your workspace.
- Understand how to configure properties for each component to customize their behavior and appearance.

This guide will walk you through creating your first application using the drag and drop method.

# NodeRED Integration

NodeRED is a programming tool for wiring together hardware devices, APIs, and online services in new and interesting ways.

## How to Create a Pie Chart

- Instructions on integrating NodeRED for visualizing data using pie charts.
- Connecting to data sources and configuring the pie chart node.

## API Integration

- Guide on how to connect NodeRED to external APIs to fetch or send data.

## Handling IoT Data

- Steps to receive and process IoT data from sensors or devices.

Each section provides detailed steps on leveraging NodeRED for specific tasks, enhancing your application's capabilities.

# Local Development with Code

Developing locally involves running and testing your application code on your own machine.

## Handling MySQL Script Import Issues

- Troubleshooting steps if a MySQL script cannot be imported due to encoding issues.

This section ensures you can efficiently work with your application code and databases locally.

# Deployment to Your Favorite Cloud Server

Deploying your application to cloud services like Azure, AWS, GCP, and DigitalOcean.

## General Deployment Steps

- Preparing your application for deployment.
- Choosing the right service for your needs.

### Specific Guides for Cloud Services

- **Azure**: Deploying as an Azure Web App and as a managed AKS service.
- **AWS, GCP, DigitalOcean**: Custom instructions for each platform.

This documentation covers the essentials of deploying to major cloud platforms, ensuring your application is accessible online.

# Export and Import Configuration

Managing your application's configuration is crucial for maintaining consistency across environments.

## Exporting Configurations

- Steps to package your current application settings for backup or transfer.

## Importing Configurations

- How to apply a previously saved configuration to your app.

Special Note: Utilizing S3 buckets from Amazon and setting up MinIO docker in Azure for S3 compatibility is a critical aspect of managing files and storage within your app.

# Troubleshooting Common Issues

Addressing common issues encountered during application development.

## Issue 1: Chart Names in Builder vs. Frontend

- Solutions for ensuring chart names are consistent across the chart builder and frontend templates.

## Issue 2: Component Dropdown Display

- Fixing the issue where all components are displayed in a dropdown, regardless of their relevance.

This section aims to help you quickly resolve these basic UX issues to ensure a smooth development process.

# API and Security

Ensuring the security and proper use of APIs within your generated app is paramount.

## RBAC in Generated App API

- Implementing Role-Based Access Control (RBAC) for secure API interaction.

## Managing Global Tokens

- The necessity of storing global tokens securely, away from app settings or Node-RED configurations.

This guide emphasizes best practices for API use and security within your application.

# All Charts and Their Configuration

Visual data representation is crucial for app usability and data analysis.

## Configuring Charts

- Detailed instructions on setting up various charts within your app.
- Customizing charts to fit your data visualization needs.

## Managing Data Tables

- How to effectively use data tables for displaying and managing data within your application.

This documentation provides comprehensive guidance on utilizing charts and data tables, enhancing your app's analytical capabilities.

# Product Overview

Welcome to our comprehensive development platform, designed to streamline the creation of your database, backend, workflows, and frontend applications. This guide provides an overview of each component and how to utilize them effectively within our portal.

## Key Features

- **Database Creation**: Easily set up and manage your database schema.
- **Backend Development**: Generate backend services with customizable templates.
- **Workflow Management**: Integrate Node-RED for advanced workflow configurations.
- **Frontend Design**: Utilize drag-and-drop functionality for UI/UX design.
- **Application Deployment**: Download your code for deployment on your preferred server.

# Database Creation

Creating and managing your database is a foundational step in developing your application.

## Getting Started

- Introduction to the database management interface.
- Steps to create your database schema within the portal.

This section will guide you through setting up your database, defining tables, and configuring relationships.

# Backend Development

Developing your application's backend is streamlined with our platform, offering both manual and AI-powered options.

## Backend Template API using ChatGPT

- Utilizing ChatGPT for generating backend API templates.
- Customizing your API based on your application's needs.

This guide will show you how to leverage AI to rapidly create and customize your application's backend services.

# Frontend Development

Creating the user interface and user experience of your application is made intuitive with our tools.

## Template using ChatGPT

- How to use ChatGPT for generating frontend templates.
- Customizing the generated templates to match your application's branding and requirements.

Follow these steps to design your application's frontend using AI-powered templates for efficiency and consistency.

# Drag-and-Drop (DnD) Interface

Our Drag-and-Drop interface simplifies the process of designing your application's frontend.

## How to Use DnD

- Navigating the DnD interface.
- Adding and configuring components for your application's pages.

This section provides a comprehensive guide on using the DnD tool to create engaging and functional user interfaces.

# Downloading Your Code

Once your application is designed to your satisfaction, the next step is preparing it for deployment.

## Steps to Download

- How to prepare your application for download.
- Downloading your complete application code, including database, backend, and frontend components.

This guide will walk you through the process of downloading your application code, ready for deployment on any server or platform you choose.

# Conclusion

Our platform offers a complete suite of tools for developing your application from the ground up, from database creation to frontend design. By following the guides provided in this documentation, you'll be well on your way to creating a robust, scalable application tailored to your specific needs. Stay tuned for more updates and features to enhance your development experience.

# Using the Drag and Drop Designer

The Drag and Drop Designer simplifies UI/UX design, allowing you to visually construct your application without extensive coding knowledge.

## Getting Started

- Access the designer through the main dashboard of your development environment.
- Familiarize yourself with the component library and drag components onto the canvas to design your app layout.
- Use the properties panel to customize component behavior and appearance.

# Integrating NodeRED for Enhanced Functionality

NodeRED is a powerful tool for connecting devices, APIs, and online services.

## Creating a Pie Chart with NodeRED

- Navigate to your NodeRED instance and use the `ui_chart` node to create pie charts by feeding it data from your application's API.

## API Integration and IoT Handling

- Utilize `http request` nodes to connect to external APIs and process data.
- For IoT data, employ `mqtt in` or `http in` nodes to receive data from IoT devices and sensors.

Ensure your flows are correctly configured to handle data processing and visualization needs.

# Local Development and Handling MySQL Encoding Issues

Developing locally involves running your application and its database on your machine.

## Resolving MySQL Script Import Errors

- If encountering encoding issues when importing MySQL scripts, ensure your database and client are configured to use the same character set, typically UTF-8.

# Deployment on Your Favorite Cloud Server

Deploying your application to cloud services like Azure, AWS, GCP, and DigitalOcean.

## General Steps for Deployment

1. Package your application into a Docker container for portability.
2. Push your Docker image to a container registry (e.g., Docker Hub, AWS ECR).

### Azure Deployment

#### Deploy as Azure Web App

- Use the Azure Portal to create a Web App and configure it to pull and run your Docker image.

#### Deploy as Managed AKS Service

- Create an AKS cluster and use Kubernetes manifests to deploy your application.

### NOTE: S3 Bucket and MinIO

For file storage, utilize Amazon S3 buckets directly or deploy MinIO on Azure as an S3-compatible storage solution. This is critical for managing files within your application.

# Troubleshooting Common Issues and Configuration Management

## UX Issues

- For inconsistencies in chart names, verify the configuration in both the chart builder and frontend template.

## API Security: RBAC and Global Tokens

- Implement RBAC in your app's API for secure access control.
- Store global tokens for system services in a secure database, allowing regeneration by users for enhanced security.

## API CRUD Operations

- Ensure your API supports CRUD operations, providing comprehensive interaction with application data.

## Managing Data Tables and Charts

- Data tables and charts are essential for displaying information. Use the appropriate configurations to ensure they meet your app's requirements.

## Exporting and Importing Configurations

- Regularly export your application's configuration for backup or migration purposes.
- Import configuration when setting up your application in a new environment or restoring from a backup.

# Renewing SSL Certificates Every 3 Months

SSL certificate renewal is crucial for maintaining the security of your application.

## Manual Renewal Process

- Monitor the expiration dates of your SSL certificates.
- Follow your certificate authority's process for renewal.
- Update your application or server configuration with the new certificate details.
