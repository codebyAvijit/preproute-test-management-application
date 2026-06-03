# Preproute Test Management Application

A modern Test Management System built with React, TypeScript, Redux Toolkit, React Query, and Tailwind CSS. The application enables administrators to create, manage, review, and publish MCQ-based tests through a streamlined multi-step workflow.

This project was developed as part of the Frontend Developer Technical Assessment for Preproute, focusing on frontend architecture, API integration, CRUD operations, form validation, state management, and responsive UI implementation.

---

## Features

### Authentication

* JWT-based authentication
* Protected routes
* Session persistence using local storage
* Login validation and error handling

### Test Management

* View all tests in a dashboard
* Create new tests
* Edit existing tests
* Delete tests
* Search and filter tests (if implemented)

### Test Configuration

* Select subject, topics, and sub-topics
* Configure test type and difficulty
* Define marking scheme
* Configure total marks and duration

### Question Management

* Add MCQ questions
* Manage answer options
* Select correct answers
* Add explanations and metadata
* Edit and delete questions

### Preview & Publish

* Preview complete test details
* Review all questions before publishing
* Publish tests through API integration

### User Experience

* Responsive design
* Loading states
* Error handling
* Toast notifications
* Form validation

---

## Tech Stack

### Frontend

* React 19
* TypeScript
* Vite
* Tailwind CSS

### State Management

* Redux Toolkit
* React Redux

### Server State & API

* TanStack React Query
* Axios

### Forms & Validation

* React Hook Form
* Zod
* Hookform Resolvers

### Routing

* React Router DOM

### Utilities

* React Hot Toast
* clsx

---

## Project Structure

```text
src
│
├── api
├── app
├── assets
├── components
│   ├── common
│   └── layout
│
├── constants
├── hooks
├── layouts
│
├── pages
│   ├── Login
│   ├── Dashboard
│   ├── CreateTest
│   ├── Questions
│   └── Preview
│
├── routes
├── schemas
├── store
│   └── auth
│
├── types
├── utils
```

---

## Architecture Highlights

* Feature-oriented scalable folder structure
* Centralized API layer
* Reusable component architecture
* Type-safe development using TypeScript
* React Query for server-state management and caching
* Redux Toolkit for application-level state management
* Protected routing and authentication handling
* Environment-based configuration management
* Modular and maintainable code organization

---

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_API_BASE_URL=https://admin-moderator-backend-staging.up.railway.app/api
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd preproute-test-management-application
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

---

## API Integration

The application integrates with the provided backend services for:

* Authentication
* Subjects
* Topics
* Sub-topics
* Tests
* Questions
* Test Publishing

Authentication is handled using JWT tokens attached to all protected API requests through Axios interceptors.

---

## Future Enhancements

* Advanced search and filtering
* Pagination support
* Question import/export
* Draft autosave
* Dark mode support
* Unit and integration testing
* Role-based access control

---

## Assessment Objective

This project demonstrates proficiency in:

* React and TypeScript development
* API integration
* State management
* Form handling and validation
* Responsive UI implementation
* Application architecture
* Clean code and maintainability

Built with a focus on scalability, maintainability, and production-grade frontend development practices.
