# Remix-Shadcn-Template

Welcome to the **Remix-Shadcn-Template**! This project serves as a template for building modern web applications using Remix, ShadCN UI components, and other popular technologies.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Customizing with `siteData.ts`](#customizing-with-sitedatat)

## Features

- Server-side rendering with Remix for optimized performance
- Responsive design using ShadCN UI components
- Easy-to-use data fetching and routing mechanisms
- Built-in styling with Tailwind CSS
- Simple navigation and routing setup
- Component-based architecture for reusability

## Tech Stack

This project is built using the following technologies:

- [Remix](https://remix.run/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ShadCN UI](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [TypeScript](https://www.typescriptlang.org/)

## Installation

To get started with this project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/remix-shadcn-template.git
   cd remix-shadcn-template
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Usage

After setting up the project, you can begin building your application. The template includes various pre-configured components and layouts to help you get started quickly.

## Folder Structure

The folder structure is organized as follows:

```
/app
  /components   # Reusable UI components
  /data         # Data files like siteData.ts
  /routes       # Application routes
  /styles       # Tailwind CSS configurations
  ...
```

## Customizing with `siteData.ts`

The template is designed to be easily customized through the `siteData.ts` file. Here are simple instructions to modify the data:

1. **Locate the `siteData.ts` file**: This file is typically found in the `app/data/` directory of your project.

2. **Edit the Data**: Inside `siteData.ts`, you will find various data structures representing different components of the site (e.g., publications, education, testimonials). Each section is clearly labeled.

3. **Add or Update Entries**: To add a new entry, follow the existing format. To update an entry, modify the relevant fields. Your changes will automatically reflect on the site without further adjustments in the component files.

4. **Save and Refresh**: After making your changes, save the `siteData.ts` file and refresh your browser to see the updates.

## License

This project is licensed under the MIT License.
