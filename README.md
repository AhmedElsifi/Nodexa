# NodeXa

A community-built learning portal for ITI students to learn, revise, and practice Node.js and backend development.

> **Disclaimer:** NodeXa is an independent project and is **not** officially affiliated with, endorsed by, or operated by ITI (Information Technology Institute). The creator is not an ITI employee. This platform was built independently to help fellow students.

---

## Overview

NodeXa is a single-page learning platform designed around a structured study flow: read summaries, complete hands-on tasks, take quizzes, and track your progress over time. It covers six core sections of Node.js backend development, from fundamentals to deployment.

## Why NodeXa

During the ITI Summer Code Camp, there was no centralized platform for reviewing material, practicing tasks, or tracking learning progress in one place. NodeXa fills that gap as a lightweight, self-contained tool built by a student, for students.

## Features

- **Structured Learning Flow** -- Each section follows the same path: Summary, Tasks, Quiz
- **Markdown-Based Content** -- Summaries are written in Markdown with syntax-highlighted code blocks and callouts
- **Task Completion Tracking** -- Mark individual tasks as done with hints and solutions available
- **MCQ Quizzes** -- Multiple-choice questions with instant scoring and a detailed review showing correct/incorrect answers
- **Progress Analytics** -- Per-section progress bars, overall completion percentage, strongest/weakest section insights
- **Persistent Progress** -- All progress is saved to localStorage and survives page refreshes
- **Search** -- Global search across sections, tasks, quizzes, and resources
- **Responsive Design** -- Works on desktop and mobile with a slide-out navigation drawer
- **Themed UI** -- Dark theme with a green primary accent, custom text selection, and smooth hover animations

## Learning Flow

```
Section Overview --> Summary (read & mark complete)
                --> Tasks (complete challenges)
                --> Quiz (answer MCQs, review results)
                --> Progress (track overall completion)
```

Each section must be completed in order. When you finish one part, a "Next" button appears to guide you to the next.

## Sections Covered

| # | Title | Category |
|---|-------|----------|
| 01 | Intro to Node.js | Fundamentals |
| 02 | NPM & Packages | Core JS |
| 03 | Async Programming | Core JS |
| 04 | Data Persistence | Database |
| 05 | RESTful API Design | Architecture |
| 06 | Deployment & Scaling | DevOps |

## Tech Stack

- **React 19** -- UI library
- **Vite 8** -- Build tool and dev server
- **Tailwind CSS 4** -- Utility-first styling
- **React Router 7** -- Client-side routing
- **React Markdown** -- Markdown content rendering
- **React Syntax Highlighter** -- Code block syntax highlighting
- **ESLint** -- Code linting with React Compiler support

## Project Structure

```
src/
  components/
    layout/       -- NavBar, Footer, RootLayout, SearchModal, MobileDrawer, UsernamePrompt
    ui/           -- ProgressBar, FilterPills, SectionCard, HomeSectionCard, MarkdownRenderer, Callout
    quiz/         -- QuizResult, QuizQuestion
    search/       -- SearchResults, SearchResultItem
    progress/     -- StatCard, SectionProgressRow
    sections/     -- SectionNavCard
    tasks/        -- EasyTaskCard, MediumTaskCard, HardTaskCard, TaskCompletionButton, TaskActions, HintPanel, SolutionPanel, DifficultyBadge
  pages/
    home/         -- Landing page with hero, progress overview, current focus
    sections/     -- AllSections, SectionDetail, SectionSummary, Tasks
    quiz/         -- MCQuiz (question flow + results)
    progress/     -- Analytics dashboard
    resources/    -- External resource links
  context/        -- UserDataContext (global state provider)
  hooks/          -- useUserData, useOverallStats
  data/           -- sections.json, tasks.json, quizzes.json, resources.json, sectionContent.json
  content/        -- Markdown lesson files (sections 01-06)
  utils/          -- localStorage helpers
```

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

### Installation

```bash
git clone https://github.com/AhmedElsifi/Nodexa.git
cd Nodexa
npm install
```

### Development

```bash
npm run dev
```

Opens the app at `http://localhost:5173`.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## How Progress Works

All user progress is stored in the browser's localStorage under the key `nodexa_user_data`. This includes:

- User name
- Last visited section
- Per-section data:
  - Summary reading percentage and completion status
  - Completed task IDs
  - Quiz attempts, scores, and answer records

No data is sent to any server. Everything stays in your browser.

## Contributing

Contributions are welcome. To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m "Add your feature"`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

Please ensure `npm run lint` passes before submitting.

## Future Roadmap

- [ ] Additional sections and quiz questions
- [ ] User authentication and cloud-synced progress
- [ ] Dark/light theme toggle
- [ ] Certificate of completion
- [ ] Community discussion board
- [ ] Admin panel for content management

## License

This project is open source. No license file has been added yet.

---

**Built independently by a fellow ITI student to help the community learn and grow.**
