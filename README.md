# GitHub Finder

GitHub Finder is a React application built using Vite that utilizes the GitHub API to search for users and view detailed profiles. It provides a simple interface to search GitHub users, display a list of results, and view individual user profiles with details such as repositories, followers, and more.

> This project is a **study case** from the Udemy course [React Front To Back](https://www.udemy.com/course/modern-react-front-to-back/) by Brad Traversy. It was built to practice React, modern JavaScript, API interaction, and state management.

## Live Preview

Check out the live version of the app here: [GitHub Finder on Vercel](https://github-finder-inky-ten.vercel.app/)

## Features

- **User Search**: Search for GitHub users by username.
- **User Profile View**: View detailed user profiles with information like repositories, followers, following, and more.
- **Responsive UI**: Clean and responsive interface built with Tailwind CSS and DaisyUI.
- **Routing**: Navigates between user search results and profile pages using React Router.

## Tech Stack

### Core:

- **React 18**: JavaScript library for building user interfaces.
- **Vite**: Fast development build tool for modern web projects.
- **GitHub API**: Used for fetching user data and profile details.
- **Axios**: For making HTTP requests to the GitHub API.
- **React Router**: Handles client-side routing for smooth navigation.

### Styling:

- **Tailwind CSS**: Utility-first CSS framework for responsive design.
- **DaisyUI**: Tailwind CSS components for consistent styling.

### Development:

- **ESLint**: Linting and code quality checks.
- **Vite**: Fast builds, live reload, and optimized production builds.

## Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/github-finder.git
   cd github-finder
2. **Install dependencies:**:
   ```bash
   npm install
3. **Create a .env file:**:
   ```bash
   //Set up a .env file at the root of your project and add your GitHub API key:
   VITE_GITHUB_API_KEY=your_github_personal_access_token
