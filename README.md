# Fintech-Dashboard

### Framework : Next.js

### Why Choose Next.js?
- It has a built-in clean folder structure such as /app for routing.
- It includes special files meant for specific purposes, such as page.tsx/jsx for routes and not-found.tsx for handling 404 pages.
- It is scalable since it is a framework (not just a library), which helps keep code organized through its conventions and built-in features.
- Dashboards typically require persistent UI elements such as a sidebar and header.
- Next.js supports shared layouts, allowing these components to remain consistent across pages while only the main content updates, improving both developer experience and UI consistency.
- Due to its routing, layout handling, and structured approach, Next.js is well-suited for multi-page, data-driven interfaces like financial dashboards.

### Asset's Source
Favicon source : https://icon-icons.com/icon/chart-sales-performance-coins-money/157294

### File Naming Convension
- All component names use PascalCase, as React treats capitalized names as components.
- Route files such as page.tsx are lowercase because they follow Next.js file-based routing conventions. These are special reserved filenames used by the framework.

### Folder Structure
- app : nextjs app router for routing pages
- components : it keep resuable components, elements used in other component seperate from routes
- mock : keep dummy data in central location
- utils : maintain utility fucntion commonly shared across components to reduce redundacy and accessibility
