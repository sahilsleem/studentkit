# StudentKit

[**StudentKit**](https://studentkit.in/) is a collection of free tools built to make studying and everyday academic tasks simpler. Designed as a privacy-conscious, static web platform, it provides students with instant access to a wide range of academic utilities directly in the browser�no account creation, logins, or server-side processing required.

## The Ecosystem

StudentKit is divided into four main areas:

- **Calculators & Academic Tools**: A comprehensive directory of calculators, measurement converters, grade estimators, and science utilities for complex problems.
- **Tests & Assessments**: Interactive cognitive and numerical reasoning assessments designed for practice, skill-building, and self-evaluation.
- **Anti-Brainrot**: Short, focused cognitive exercises and mental math challenges designed to sharpen attention, focus, and working memory.
- **Everyday Utilities**: Practical, easy-to-use tools for daily student needs, from text formatting to date calculations.

## Features

- **Privacy-Conscious & Client-Side**: Almost all calculations and exercises execute entirely on your own device. We do not transmit or store your tool inputs on remote servers.
- **Fast & Simple**: Built to be a lightweight, tool-first experience. There is no search engine filler�just the tools you need.
- **Zero Friction**: Completely free to use with no paywalls, sign-ups, or verification emails.
- **Offline Capable**: Once the page loads, most tools and calculators can be used without an active internet connection.

## Technology Stack

StudentKit is a static web platform built with modern web standards to ensure speed and reliability.

- **Framework**: [Astro](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Logic**: Vanilla JavaScript & [Math.js](https://mathjs.org/)
- **Animations**: [GSAP](https://gsap.com/)

## Development

First, install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

This will output all static files into the `dist/` directory, ready to be deployed to any static hosting provider.
