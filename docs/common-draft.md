---
id: common-draft
title: Common Draft DND Usage
sidebar_position: 9
---

# Common Draft

For Non-Technical Users

Getting Started with Your NeoApps.AI

Adding a Data Component

Drag the CRUD Component: Start by dragging the CRUD (Create, Read, Update, Delete) component from the left sidebar onto your workspace. This component acts as a bridge to any database table you wish to interact with.

Configuring Your Component

Choose Your Mode: Once the component is placed, you'll see options to configure it for different purposes:

Create Mode: To add new entries to your database.

Create Mode /Validation

Expanding Create Mode for User-Friendly Data Entry

Create Mode Enhancements:

User-Friendly Labels: When adding new entries to your database, you can now set clear and descriptive labels for each input field. This helps users understand what information they need to provide.

Reference Values Display: You can choose to display specific values from connected tables. For example, if you’re adding a transaction, you can display user names from the users table instead of having to remember their IDs.

Input Control Selection: Our system allows you to choose the type of input control (like text boxes, file upload, or date pickers) that suits the data you're asking users to input, ensuring compatibility and ease of use based on the data type of your database columns.

For text or varchar columns, options include text, file uploads, rich text editors, URLs, and signatures.

For datetime columns, you can use date pickers or datetime controls.

Simplified Data Entry: You can hide certain fields by default if they are not necessary for every entry, and even set default values for these hidden fields to avoid errors. This streamlines the data entry process.

Layout Customization: Adjust how fields are displayed using the MUI 12-column layout, including options for new lines, to make forms more intuitive and visually appealing.

File Upload Configuration: Set up a location for file uploads, such as a temporary S3 bucket, to manage file storage securely and efficiently. However, be cautious with sensitive information during development or testing phases.

Security and Deployment Tips:

Secure File Handling: Be mindful of not uploading sensitive data in development or testing environments. When setting up your S3 bucket for file storage, ensure it's done in a way that doesn't compromise security.

Custom S3 Buckets: If you plan to download your app's code and use your own S3 bucket, refer to our documentation for necessary adjustments to deploy on your server.

Create Mode Validation:

Error Handling: Customize error messages to guide users through correcting inputs, enhancing the form-filling experience.

Validation Rules: While you cannot use required (non-null) reference columns for validation due to database constraints, optional (null-acceptable) reference fields can be configured for validations, offering flexibility in data integrity checks.

Edit Mode: Allow entry to directly Edit it.

By selecting diffrernt combination of mode you can directly go to edit mode of the given component if it has value from previous component.

View Mode: To display existing data.

Set Up Data Display: You can display your database information in a tabular format. Customize your view by hiding/unhiding columns or changing how data is displayed using the layout builder.

View Mode Overview: In View Mode, your app presents the data that's already in your database. It's like looking through a window at your data, arranged neatly for you to see and interact with.

Set Up Data Display:

Tabular Format: Think of this as organizing your data into rows and columns, like a spreadsheet. This format makes it easy to browse through your information.

Customize Your View: You have the power to decide which columns of data are visible and how they're arranged. This means you can simplify your view to only see the information that matters to you.

Customization Options:

Search Bar: If you decide you don't need the search bar, you can hide it, making the interface cleaner. But remember, hiding it means you won't be able to search through your data directly from the page.

Headings: The main titles above your data columns (like "Heading1" and "Heading2") can be shown or hidden based on your needs. This helps in focusing your attention on the most important data.

Delete Button: By default, each row of data comes with a delete button, allowing you to remove entries directly from this view. If you prefer not to have this option visible, you can hide it to prevent accidental deletions.

Renaming Columns:

Enter New Column Name: This feature lets you rename the columns in your display. Instead of sticking with the default database column names, which might be technical or unclear, you can choose names that make sense to you and your app's users.

Separate Label Configuration: When setting up your data table, you can decide whether to use the default database column names or your customized names. This flexibility allows you to tailor the data presentation to your audience's needs.

Displaying Meaningful Information with Foreign Key (FK) References

When your app uses tables that are connected (for example, one table has a list of activities and another table has user information), it's often more useful to show real names instead of codes or IDs. Imagine you have a list that mentions "User ID: 12345" but instead of this number, you want to see the actual name, like "John Doe." Our app builder allows you to easily display "John Doe" in your main list by linking that "User ID" with the name in the users' table. This makes your app's information easier to understand for everyone.

Enabling Breadcrumbs:

In the view mode of a component, breadcrumbs can be activated to reflect the hierarchical path taken by the user. This feature is contingent upon the existence of a navigational flow, where one component redirects to another, culminating in the current component where breadcrumbs are displayed.

Use Case Scenario:

Suppose you have an application with a layered view structure, where Component A leads to Component B, and then to Component C. If breadcrumbs are enabled on Component C, users will see a navigational trail like "Home > Component A > Component B > Component C," allowing them to navigate back to any previous component directly.

Enhance Data Representation: For tables with foreign key (FK) references, you can choose to display related information (e.g., showing a username instead of a user_id).

Configure Dynamic Navigation: Link components for seamless navigation. For instance, you can set up a link from an expense record to view detailed user expenses.

Understanding Navigation and Component Configuration

When setting up your app's navigation, it's essential to start with the end goal in mind and work your way back. This approach ensures that your app's flow is intuitive for the user. Here’s how you can enhance your app's navigation:

1. Adding Links to Your App's Navigation:

You can add links to the left navigation menu of your app, making it easier for users to find their way around. These links can be organized into a hierarchy with a main page and subpages, helping users navigate through different sections of your app. However, the main pages in this hierarchy are not clickable, serving more as category headers.

2. Popup Navigation Pages:

You can set certain components to open as popups. This is useful for displaying additional information without navigating away from the current page.

3. Sidebar Drawer Pages:

Some components can be added to slide in from the right as a sidebar drawer. This feature is handy for providing quick access to tools or information.

4. Sidebar Component Pages:

This allows you to layer different views or components within a single component. It's a flexible way to build your app's interface, letting you embed multiple components within each other. However, linking these components for navigation requires a bit of setup, where you need to designate how each component leads to the next.

Mix and Match Navigation Views: Your app can have various navigation styles depending on what you're trying to achieve. For example, moving from one component to another can be set up in several ways:

As a slide-in drawer, which is useful for showing related information without leaving the current view.

As a popup, for immediate, focused interaction.

As a redirect, taking the user to a new page with a different set of data.

Buttons in Sidebar Components: Buttons can be placed within sidebar components for direct navigation to specific parts of your app. Currently, these buttons take users to a component displaying all its associated records without filtering. Future updates may allow for more specific data filtering based on user interactions or selections.

Personalizing the UI

Customize the Look: Use the configuration tabs to personalize your UI. You can adjust colors, font family, and sizes to match your branding.

Customizing Your App's Look with Easy Configuration

Making your app look unique and aligned with your brand is crucial for creating an engaging user experience. Here's how you can easily adjust colors and text styles within your app using the configuration options:

Accessing Configuration Settings:

Look for the Configuration button, which you'll find at the bottom right corner of the burger (three horizontal lines) menu at the top right of your screen. This is your gateway to customizing your app's appearance.

Modifying Inner Content Colors and Text: Once you're in the configuration settings, you can personalize various aspects of your app:

Global Color Settings: This option allows you to set a primary color that's used throughout your app, ensuring consistency and alignment with your brand identity.

Background Color: Change the background color of your app's pages to match your style or to improve readability for your users.

Sidebar Customization Options:

Sidebar Background Color: Adjust the color of the sidebar's background to make it stand out or blend in with the rest of your app.

Sidebar Menu Text Color: Change the color of the text in your sidebar menu to ensure it's easy to read against the background.

Sidebar Menu Text Background Color: Modify the background color of the text in your sidebar menu for added contrast or aesthetic appeal.

Sidebar Sub Menu Text Color: For dropdowns or nested menus within your sidebar, you can specify a different text color to differentiate them from main menu items.

Sidebar Sub Menu Text Background Color: Similarly, change the background color of these submenu texts for clarity or visual effect.

Navigation and Views: Define how users interact with the app through various navigation types, visibility settings, and input controls for a user-friendly experience.

Preview and Save Your Work: Regularly preview your changes to ensure they match your vision. Remember, configurations are not saved to the database until you explicitly save them.

Essential Tools

Left Sidebar: Access components, charts, and navigation tabs.

Bottom Toolbar: Update UI, release changes, or preview your app. Use Import/Export Config for backup or transfer of settings.

Adding a Search Box to the Top Left Sidebar:

To make your experience even smoother, we've included a search box within the top left sidebar. This handy feature allows you to quickly find and add different components to your app without having to scroll through the menu. Whether you need to add a data table, a chart, or navigation tabs, just type what you're looking for into the search box, and it will show you all the relevant components.

Comprehensive Tool Access and App Management:

Database Table Components & More: Easily find and integrate various elements like database tables, charts, and tabs into your app by using the search functionality, enhancing your app’s functionality and user experience.

Streamlined Development Tools: The bottom part of the left sidebar remains your go-to for saving changes (Update UI), publishing updates (Release UI), previewing your work (Preview UI), and managing configurations (Import/Export Config). The search box adds an extra layer of efficiency, helping you quickly navigate through these tools and components.

Top Left Sidebar - Accessing Tools for Your App:

The sidebar on the top left of your screen is your toolbox, offering a variety of components to add to your app. Here you'll find:

Database Table Components: Drag and drop elements that represent the different tables in your database, allowing you to display and interact with your data.

Chart Component: Add visual data representations to make your app more informative and engaging.

Tabs Component: Incorporate tabs into your app for better organization and navigation, making it easier for users to find what they need.

Bottom Part of Left Sidebar - Managing Your App's Development:

Update UI: Clicking this saves any changes you've made to the app's interface directly into the database, ensuring your latest adjustments won't be lost.

Release UI: This crucial step publishes your app to the actual front-facing website or mobile app, making your updates available to your users.

Preview UI: Offers a sneak peek of your changes in real-time, mirroring your app's frontend. It's a safe way to check your work before making it live.

Import Config / Export Config:

Import Config: If you've previously saved your configuration settings, this option lets you upload those settings from your local computer. It's a time-saver, helping you avoid setting up everything from scratch. However, it's crucial that your database design hasn't changed since you last exported the configuration.

Export Config: This option packages your current configuration settings into a zip file containing three crucial files. When you want to replicate your setup elsewhere or back it up, use this feature. Be cautious and review each file to ensure they're correctly prepared for future importing.

Exiting and Cleaning Up:

Exit: When you're done, use this option to log out securely from the builder.

Trash: Made a mistake or changed your mind? Drag components you no longer need to the trash. This action helps keep your workspace clean and organized.

Final Steps

Save and Exit: Confirm your changes are as desired, then save. Note that changes are temporary until saved.

For Technical Users

Advanced Configuration and Design

Component Integration

CRUD Component Deployment: Utilize the CRUD component to directly interact with database tables, ensuring dynamic data management within your application.

Mode Selection: Implement different modes (Create, View) to tailor component behavior according to user interaction requirements.

Enhancing Create Mode with Advanced Data Entry and Validation Configurations

Create Mode Features:

Display Label Configuration: Empowers developers to configure intuitive labels for input fields, improving end-user comprehension.

Referenced Table Value Display: Allows for the selection and display of specific referenced table values within dropdowns or selection inputs, enhancing data relational integrity and user interface usability.

Input Control Customization: Offers a selection of input controls tailored to the data type defined in the database schema:

Text-based inputs include text fields, file uploads, rich text editors, URLs, and signature fields.

Date/time inputs offer date and datetime picker controls.

Column Visibility and Default Values: Provides options to hide specific columns by default in the UI and set default values for these columns, preventing API call failures due to missing data.

UI Layout Customization: Leverages the MUI 12-column grid layout for arranging form elements, including options for organizing inputs on new lines, allowing for a more structured and visually appealing form design.

File Upload Management: Integrates configuration for file upload destinations, specifically for temporary storage in S3 buckets, with a focus on security and efficiency in data handling.

Advises caution with sensitive data during development/testing phases.

Includes guidance for configuring S3 bucket components within the app, not necessarily exposed in the main interface.

Security Considerations and Deployment Guidance:

Encourages careful management of file uploads, especially regarding sensitive information during development or testing, and outlines steps for configuring custom S3 bucket usage within application deployment processes.

Create Mode and Validation Configuration:

Error Validation Messaging: Enables the customization of validation error messages for enhanced user guidance during data entry errors.

Referenced Column Validation: Details restrictions on validation configurations for required (non-null) reference columns while allowing flexibility for optional (null-acceptable) references, facilitating nuanced data validation strategies that respect database integrity constraints.

UI and UX Customization

Dynamic Data Visualization: Leverage the layout builder for sophisticated data presentation. Implement conditional visibility and FK resolution for enriched data insights.

Dynamic Navigation Setup: Establish intricate navigation patterns (e.g., data-driven redirections) to enhance the application flow based on specific user actions or data states.

Configuring Navigation and Component Interactions

In application development, particularly within no-code platforms, the configuration of navigation and component hierarchy follows a bottom-up approach, emphasizing the importance of planning the user journey from the end state backward. Here's how to implement advanced navigation strategies:

1. Structured Navigation Links:

Implement navigation links within the app’s left menu, organizing them into a main/subpage hierarchy up to two levels deep. This structure aids in compartmentalizing the application into distinct functional areas, though main pages act as non-interactive headers to categorize the subpages.

2. Popup and Sidebar Drawer Implementations:

Components can be configured to appear as popups or sidebar drawers, offering dynamic interaction models for accessing content without leaving the current context. This flexibility supports a wide range of use cases, from detailed content review to quick access sidebars.

3. Nested Component Pages:

A more complex setup involves nesting multiple components within a single component page, allowing for the creation of layered views or tab interfaces. This requires careful planning of component-to-component navigation, ensuring each link correctly passes relevant data and context to subsequent components.

4. Navigation View Variations:

Navigation between components can be customized to suit different interaction patterns, such as direct redirects, slide-in drawers for supplementary information, or popups for focused content engagement. These patterns can be mixed and matched based on the data volume and user interaction goals, providing a tailored app experience.

5. Sidebar Button Limitations:

While sidebar buttons facilitate direct navigation to specific components, they currently lack the capability to filter data dynamically based on properties passed at runtime. This limitation affects the ability to display contextually relevant data, such as filtering expenses by user or date directly through button-initiated navigation.

Detailed Configuration Options

UI Personalization: Dive deep into UI customization with detailed configuration tabs, adjusting everything from font aesthetics to color schemes for headers and tables.

Advanced UI Configuration for App Customization

A critical aspect of app development is the ability to customize the user interface to reflect the application's branding and improve user experience. The configuration options provided allow for detailed customization of UI components:

Accessing UI Configuration Options:

Utilize the Configuration button located within the burger menu's (top right) submenu at the bottom right for accessing UI customization settings.

Detailed Customization of Inner Content and Global UI Elements:

Global Color Configuration: Offers the ability to define a global theme color that applies to key UI elements, promoting a cohesive visual identity across the app.

Background Color Adjustment: Enables the setting of a specific background color for the app's content area, enhancing the aesthetic appeal and readability.

Sidebar UI Customization:

Sidebar Background Color: Tailor the background color of the sidebar for visual separation or integration with the overall UI design.

Sidebar Menu Text Color: Specify the color of the sidebar menu text, ensuring optimal readability and visual harmony with the background.

Sidebar Menu Text Background Color: Set a distinct background color for menu text items to create depth or highlight sections within the sidebar.

Sidebar Sub Menu Text Color: Differentiate sub menu items with a unique text color, aiding user navigation through nested menu structures.

Sidebar Sub Menu Text Background Color: Apply a specific background color to sub menu texts, facilitating a layered visual effect for complex navigation layouts.

Comprehensive Guide to UI/UX Configuration and Management

Top Left Sidebar - Component Integration:

The sidebar is the gateway to integrating various components into your application, including:

Database Table Components: Facilitates direct manipulation and display of database content within the app.

Chart Component: Allows for the incorporation of data visualization elements, enhancing analytical insights.

Tabs Component: Enables structured navigation and content segmentation, improving overall user experience.

Bottom Part of Left Sidebar - Application Lifecycle Management:

Update UI: Commits the current state of the UI design to the database, preserving changes and ensuring consistency across development sessions.

Release UI: Transitions the development-stage UI to the live environment, updating the end-user-facing application with the latest features and fixes.

Preview UI: Mirrors the end-user interface within the development environment, allowing for real-time review and adjustment of UI changes.

Configuration Management:

Import Config: Provides a mechanism for reapplying saved UI/UX settings, streamlining the development process. This feature assumes static database schemas to ensure compatibility.

Export Config: Packages the app's UI configuration into a downloadable zip file, which is crucial for backup, migration, or version control. This exported package demands careful examination to guarantee that subsequent imports align with intended design specifications.

Exit and Cleanup Utilities:

Exit: Securely ends the current session, ensuring no unauthorized changes can be made in your absence.

Trash: Offers a direct method to remove unwanted elements or configurations, aiding in maintaining a clutter-free development environment.

op Left Sidebar - Optimized Component Discovery:

The integration of a search box within the top left sidebar revolutionizes component discovery and integration. Developers can now expediently search for specific UI components such as database table components, chart components, and tabs for navigation, significantly reducing development time and enhancing workflow efficiency.

Facilitating Rapid Access to Development Resources:

Comprehensive Component Search: This feature enables immediate access to a broad spectrum of components, streamlining the design and development process by allowing quick searches instead of manual browsing through categories.

Efficient Application Lifecycle Tools: The lower section of the sidebar provides essential functionalities for UI updates, releases, previews, and configuration management. The search functionality complements these tools by facilitating faster access to various components and settings, ensuring a seamless development experience.

Application Management and Cleanup:

The addition of the search box complements existing features like Exit and Trash, providing a comprehensive toolset for developers to efficiently manage their app development lifecycle, from component integration to session management and workspace organization.

Advantages

Benefits of NeoApps.AIs Compared to Custom Development

1. Speed of Development:

No-Code: Enables rapid prototyping and deployment. Drag-and-drop interfaces and pre-built templates allow for the quick assembly of applications.

Custom Development: Requires time for setup, coding, testing, and deployment, which can extend development cycles.

2. Cost Efficiency:

No-Code: Significantly reduces development costs as it requires less specialized labor and reduces the time to market.

Custom Development: Often involves higher costs due to the need for experienced developers and extended development time.

3. Accessibility for Non-Technical Users:

No-Code: Allows individuals without programming knowledge to create, customize, and manage applications, democratizing app development.

Custom Development: Typically requires a team with coding skills, making it less accessible to non-technical users.

4. Flexibility and Customization:

No-Code: While offering a range of customization options, no-code platforms may have limitations in terms of unique functionality or highly specific custom needs.

Custom Development: Provides complete control over the application, allowing for extensive customization and the integration of complex features.

Steps Involved and Potential Bottlenecks

NeoApps.AIs:

Steps Involved: Selection of a template or starting from scratch, drag-and-drop component placement, UI customization, workflow configuration, testing, and deployment.

Bottlenecks: May include limitations in customization, performance concerns for complex applications, and dependency on the platform provider for updates and security.

Custom Development:

Steps Involved: Requirements gathering, system design, coding, testing, deployment, and maintenance.

Bottlenecks: Longer development time, higher costs, and the need for ongoing maintenance and updates by skilled developers.

Relevance to Different User Groups

Developers:

NeoApps.AIs: Offer a quick way to prototype ideas, handle simpler projects, or work on projects where time and budget are constrained.

Custom Development: Remains essential for building complex, highly customized applications or when specific technologies and integrations are required.

Non-Technical Users:

NeoApps.AIs: Provide an accessible entry point into app development, enabling them to bring ideas to life without the need for programming skills.

Custom Development: May be less relevant directly, but understanding the process can help in effectively communicating requirements to developers.

Enhanced Development Lifecycle with NeoApps.AIs

Initial Development and Prototyping:

No-Code Platforms: Allow for quick assembly of app prototypes and basic applications through user-friendly interfaces, speeding up the design and feedback cycles.

Advantages for All Users: Both non-technical users and developers benefit from the ability to rapidly prototype and iterate on application designs without committing extensive time and resources.

Customization and Scalability:

Post-Download Code Customization: After the initial development phase, developers can download the application code generated by the no-code platform. This code can then be customized at a granular level, allowing for the addition of complex functionalities, integrations, and optimizations that the no-code platform may not natively support.

Scalability: With the ability to customize the code, developers can ensure the application scales efficiently, managing increased user loads, data processing needs, and integrating advanced technologies as required.

Steps Involved and Expanded Capabilities

1. Rapid Development and Feedback: Start with no-code tools for immediate prototyping and user testing. 2. Code Exportation: Once the initial design is validated, export the application code for detailed customization. 3. Advanced Customization: Developers enhance and refine the application, adding unique features and optimizing performance. 4. Scalability Enhancements: Implement scalability solutions, including cloud services integration, database optimization, and load balancing. 5. Deployment and Iteration: Deploy the customized application, monitoring performance and user feedback for continuous improvement.

Easing Complex Customizations:

The use of popular programming languages and frameworks, such as React for front-end development, C# for API services, and MySQL for databases, leverages familiar ecosystems for developers. This familiarity accelerates the learning curve and integration process for adding complex functionalities or optimizations post-export. The app builder's semantic approach simplifies the understanding of how components interact and integrate, making it easier for developers to apply their knowledge effectively and efficiently.

Enhancing Code Quality and Maintainability:

By generating code that adheres to well-known semantic standards and structuring components in an intuitive manner, the app builder ensures that the exported code is not only of high quality but also maintains readability and ease of maintenance. This approach diminishes concerns over code complexity and fosters an environment where developers can quickly understand and modify the codebase. The simplification of view and form components enhances the ability to make UI/UX adjustments without extensive effort.

Deployment and Scaling with Modern Technologies:

Leveraging Kubernetes and Docker for deployment aligns the app with contemporary best practices for containerization and orchestration, facilitating scalable and reliable application environments. This infrastructure supports seamless scaling and updates, allowing developers to focus on feature development rather than deployment complexities.

Use Case/Case Study: Splitwise Type Application Development

Task

Custom Development Process

NeoApps.AI Process with AI Integration

Time Savings with No-Code and AI

1. Conceptualization

Brainstorming, conducting market research, and specifying application requirements.

Generative AI enhances concept development by generating requirements and narratives, leading to swift prototyping and validation.

Significant, with AI speeding up the ideation phase and enriching it with data-informed insights.

2. UI/UX Design

Creating initial sketches, wireframes, and prototypes manually, often requiring multiple revisions.

Choosing from a selection of templates and utilizing drag-and-drop functionality for UI/UX creation, with immediate previews available.

Considerably, as the reliance on templates and modular components shortens the design cycle.

3. Database Design

Manually crafting the database schema, initializing databases, and configuring server settings.

AI-driven database design tailored to business and functional needs, coupled with straightforward table and relationship setup via the app builder.

Considerably, eliminating the need for hands-on database construction and coding.

4. Backend Development

Developing server logic, establishing APIs, and linking database functions by hand.

Applying ready-made backend logic and auto-generating APIs based on the structured database schema.

Substantial, as it removes the necessity for manual backend programming and API configuration.

5. Frontend Development

Hand-coding the user interface, merging APIs, and executing interaction tests.

Streamlining page and element configuration in the app builder, inclusive of automated API integration.

Vast, by replacing manual coding and integration with streamlined setup processes.

6. Testing and Debugging

Undertaking extensive testing manually and through automation across various platforms and devices.

Leveraging robust code generation that minimizes developer testing, focusing instead on business logic and requirements verification.

Considerable, by reducing the reliance on developing test cases, unit testing, and test automation.

7. Deployment

Manually managing hosting setups, server configurations, and application deployment.

Offering automated deployment solutions, often with hosting services included, simplifying the launch process.

Significant, as auto-deployment features minimize manual deployment efforts.

8. Maintenance

Continuous manual interventions for updates, bug resolution, and server upkeep.

Managing updates via the app builder’s control panel, with server management handled by the platform.

Substantial, thanks to the platform's automated updates and reduced manual maintenance needs.
