---
id: getting-started
title: Getting Started with Your NeoApps.AI
sidebar_position: 1
---

# Getting Started with Your NeoApps.AI

Welcome to the first steps of using the NeoApps.AI! This guide will walk you through signing up, navigating the interface, starting a new project, and adding your first components.

## Sign Up and Log In

1. **Sign Up**: Go to the NeoApps.AI's website and click on the "Sign Up" button. Fill out the registration form with your details.
2. **Verify Email**: Check your email for a verification link and click on it to activate your account.
3. **Log In**: Return to the NeoApps.AI site and log in with your new credentials.

## Navigating the Interface

Once logged in, you'll see the main dashboard. Familiarize yourself with these key areas:

- **Dashboard**: Access your recent projects and find quick links to create new ones.
- **Projects**: View all your projects and open the one you wish to work on.
- **Settings**: Adjust your account and project settings here.

## Starting a New Project

To start a new project:

1. Click the "New Project" button from your dashboard.
2. Select whether to start from a blank project or use a pre-designed template.
3. Name your project and configure any initial settings required.

## Adding Components

Your project can have various components, from input forms to data displays:

1. Browse the component library to see what's available.
2. Drag and drop your chosen components onto the canvas.
3. Configure each component to suit your project's needs.

## Configuring Components

Customize each component by selecting it and adjusting its properties:

- **Layout and Design**: Set sizes, margins, and alignment.
- **Data Binding**: Connect the component to your data sources.
- **Styling Options**: Choose colors, fonts, and other style settings.

## Previewing and Testing

Use the preview feature to test your app as you build it. This can help you spot issues and refine the user experience before finalizing your project.

## What's Next?

Now that you've started your journey with the NeoApps.AI, dive deeper into specific features and capabilities. Explore further documentation on customizing components, setting up data sources, and deploying your app. Happy building!

Remember to replace placeholders with actual images that align with the content. This structure provides a clear, step-by-step guide for users new to the NeoApps.AI, ensuring they have a solid foundation to start creating their own applications.

# Platform Features and User Guide

## Getting Started

- **Login**
- **Signup**
- **Forget Password**

## Project Management

- **Create a New Project**
  - Use a valid Name.
  - Create a subdomain.
    - Enter a valid name.
    - Ensure the domain is not already in use.
  - Understand the different statuses of generate, build, and deploy processes.
  - Familiarize with various messages.
  - Navigate your project dashboard and its details.
  - Update project name.

### Database Creation

- **Create Database**
  - There are three ways to create a database:
    1. **Import Your Own Script**
       - Follow guidelines for database creation.
    2. **Design Database on Portal**
       - Utilize the database designer to create a database.
    3. **Connect to an Existing Database**
       - For apps built on the current AI platform, reuse the database.
       - Discuss scenarios for connecting to an existing database, like managing large databases or separating portal instances and traffic loads.

### Backend Generation

- **Generate Backend**
  - Neoapps.AI supports independent backend generation, compatible with any popular app builder supporting OpenAPI.
  - Two methods for backend generation:
    1. **Create Regular Restful API**
       - Includes endpoints for create, read, update, delete, relational, and reporting APIs.
    2. **Use AI Template**
       - Details TBD - Refer to the Roadmap.

### Frontend Generation

- **Generate Frontend**
  - Learn to create two versions of your frontend user interface:
    1. DND designer.
    2. Actual frontend website.

### Workflow Generation

- **Generate Workflows**
  - Generate Node-RED workflows.
  - Explore various uses of Node-RED workflows to connect your application to other apps/RESTful APIs.
  - Learn to use Node-RED workflows as a webhook to connect independent applications of the neoapps.ai portal.
  - Discover different ways to use Node-RED workflows.

## Advanced Features

- **Upgrade Project**
- **Update Profile Details**
- **Cancel Plan**
- **Upgrade Server Resources**
  - Resources upgrade is supported based on individual requests.
  - Contact us via live chat to request resource upgrades and setup separate environments/releases.

## Troubleshooting

- **Reset Everything**
  - Instructions for when you're stuck or need to restart.
- **Database Changes**
  - Guidance for changing your database setup, including warnings about wiping existing settings.
- **Handling Errors**
  - Strategies for diagnosing and resolving generate, build, and deployment errors.
- **Understanding Backup Process**
  - Steps to backup your database, Node-RED workflows, and drag and drop configurations before making significant changes.

## Design Considerations

- **Web Page Design Changes**
  - Advice for making changes to web page design without losing existing data.
- **Creating Multiple Versions of Your UI**
  - Guidelines for exporting and re-importing UI configurations to manage multiple versions.

> Note: The roadmap and newsletter subscription offer insights into upcoming features and updates.

## Original Thoughts Draft

-Login
-Signup
-Forget Password
-Create a new project - Use valid Name - Create a subdomain - Enter valid name - it will not allow to use domain if already used. - Understand different status of generate,build and deploy process. - Understand different messaages. - Understand your project dashboard and each detail. - Update project name
Create Database - 3 ways of creating database 1. Import your own script - Check guidelines for database creation 2. Design database on portal - Use database designer to create database. 3. Connect to existing database - If you have build app with us already on current AI platform then use that database. - Why you want connect with existing database ? - There are many scenarios where you want connect your existing database like you have created large database but you want to seperate the portan instance and traffic load.
Example - Your main application and your backend administrative application. - Generate Backend - You can use neoapps.AI for Independant backend generator as well and you can use it any other popular app builder where OpenAPI can be supported with bring your own API. - There are two methods of Backend generation 1. Create Regular Restful API which will regular endpoints for create , read, update , delete , and relational API and reporting API. - Understand each api how it works and what you can achieve with it ? 2. Use AI template created using AI. - TBD - Check Roadmap.
Generate Frontend - Understand how you can create two version of your frontend User interface. 1. DND designer 2. Your actual frontend website.
Generate workflows - Understand how you can generate node red workflows. - Understand various ways to use Node-red workflows to connect your application to other apps/restful apis. - Understand how you can use node-red workflows as webhook to connect independant application of neoapps.ai portal - Check different ways how you can Node-red worlflows in its seperate section.
Upgrade Project.
Update profile details.
Cancel Plan.
Upgrade server resources. - We are supporting upgradation of resources based per request only. - We request to contact us by sending message message on our live chat for request of to upgrade resource and set seperate environment/releases for your permanent basis with nominal fees of setup. - Other automation of server upgrades - TBD and check roadmap for more updates or subscribe for our newsletter.

- How to reset everything if you feel you are stuck
- What if you want to add change database
  - We are using database first appraoch, so you have created database and you might want to make change in database then platform will wipe out your existing settings. We advise you to carefully create the database and use different method suggested to create database , generate requirements and use Generative AI (Chatgpt) to generate the database from requirements. We advise yout make sure your database does not have errors and compile the mysql script with available popular online compiler for errors. We will integrate mysql script validator in upcoming releases.
  - We have different blogs published (Refer blog sections) for how to generate requirements using our GPTS , how to generate user stories , user journeys , database diagrams, sequence diagrams,different workflow logics based on requirements.We suggest you to use GPT-4 subscription and we are planning to integrate such help portal in upcoming releases.Check roadmap.
- What if you dont want to change in database but you are stuck and seeing errors
- Understand possible reason of generate,build and deployment errors.
- Always reach out in this type of error , we will provide you free support in such situation. We have spent enough time create our AI based code generation solid but there will be always a chance where generative ai can make mistakes and invalid templates which lead to unwanted errors.
- What if you dont want to change in database and you are half way in your design
  - If you are not changing database and there will no change in API but there will be still changes in API if you are prefering template based API for various types.
    - In this case we advise you to test everything before you proceed. These are pure developer steps so if you are not sure how to do and want to save your time then please contact us on live chat and we will provide you support for your queries on minimal charges.
    - Also , you can test your API with swagger by refering document of how to use Swagger in your API.
    - If you change database then your api will be reset,frontend,node-red workflow and you might need to work through again.
    - So in this situation , we advise you to take backup
- Understand backup process before wiping out your database , api , design, workflows etc.
- Make sure you if you are changing in database you have to redo everything. We are sorry for you.
  - Export database
  - Export Node-red workflows.
  - Export drag and drop configuration.
- What if there is no change in database and api and you are at 100% at your backend requirements and want to change Web page design without loosing any design data.
  - This means that you are in frontend stage and creating workflows and designing your portal.
  - So we advise you to export web page drag and drop configuration.
    -Refer document how to export and re-import.
- What if you want to create multiple versions of your UI
- In this case you just have to simply export the configuration and re-import later whenever you need it.
  - If you have made change in database then sorry , go and restart everything.
