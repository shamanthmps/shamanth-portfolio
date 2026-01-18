# Shamanth Kumar M - Portfolio Website

## Overview
This is a personal portfolio website for Shamanth Kumar M, a Staff TPM, Agile Delivery Leader, and AI-First Builder. The site showcases professional experience, skills, projects, and education.

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
To push this project to GitHub reliably:

1. Create a Personal Access Token (PAT) on GitHub (Settings > Developer Settings > Personal Access Tokens > Tokens Classic) with `repo` scope.
2. In Replit, open the **Secrets** tab and create a new secret:
   - Key: `GIT_URL`
   - Value: `https://shamanthmps:<your-token>@github.com/shamanthmps/shamanth-portfolio.git`
3. Open the **Shell** tab and run:
   ```bash
   # Add the remote using the secret (if origin already exists, remove it first)
   git remote remove origin 
   git remote add origin $GIT_URL
   
   # Push the changes
   git push -u origin main
   ```

*Note: The `$GIT_URL` will automatically expand in the shell to include your credentials securely.*
