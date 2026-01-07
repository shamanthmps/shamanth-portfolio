# Shamanth Kumar M - Portfolio Website

## Overview
This is a personal portfolio website for Shamanth Kumar M, a Project Lead, Agile Delivery Leader, and AI-First Builder. The site showcases professional experience, skills, projects, and education.

## Tech Stack
- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router DOM
- **State Management**: TanStack React Query
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Project Structure
```
src/
├── assets/          # Static assets (images, etc.)
├── components/      # Reusable UI components
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── pages/           # Page components
├── App.tsx          # Main application component
├── App.css          # Application styles
├── index.css        # Global styles with Tailwind
└── main.tsx         # Application entry point
```

## Development
- **Dev Server**: Runs on port 5000
- **Command**: `npm run dev`

## GitHub Deployment (Manual)
To push this project to GitHub using the provided `GITHUB_TOKEN`:
1. Open the **Shell** tab.
2. Run the following commands:
   ```bash
   # Initialize git (if not already done)
   git init
   git config user.email "your-email@example.com"
   git config user.name "Your Name"
   git add .
   git commit -m "Initial commit from Replit"

   # Create a repository on GitHub (replace <repo-name> with your choice)
   curl -H "Authorization: token $GITHUB_TOKEN" https://api.github.com/user/repos -d '{"name":"<repo-name>"}'

   # Add remote and push
   git remote add origin https://x-access-token:$GITHUB_TOKEN@github.com/your-username/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```
