# StudentKit

StudentKit is a minimal, clean, and fast collection of free online tools for students. It requires no backend, database, or API, and everything processes instantly in the browser.

## Features
- **Zero Dependencies**: Calculations run entirely locally in the browser using Vanilla JS.
- **20+ Tools**: Covers Academic, Attendance, Study, Date/Time, and Everyday needs.
- **Blazing Fast**: Built with Astro and Tailwind CSS. Ships pure static HTML and minimal JS.
- **Offline Ready**: Once the page loads, calculators can be used without an internet connection.

## Development

First, install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

## Adding a New Tool

1. **Add to Data**: Open `src/data/tools.js` and add your new tool object to the array.
2. **Create Page**: Create a new file in `src/pages/tools/[your-tool-name].astro`.
3. **Copy Layout**: Copy an existing tool's layout (like `word-counter.astro`) and replace the logic inside the `<script>` tag.

## Building for Production

To generate the static HTML files:

```bash
npm run build
```

This will output all static files into the `dist/` directory.

## Deployment

The website can be deployed to any static host instantly without any special configuration.

### GitHub Pages
1. Push this repository to GitHub.
2. Go to Settings > Pages.
3. Select "GitHub Actions" or choose the `dist` folder.

### Vercel / Cloudflare Pages / Netlify
1. Connect your GitHub repository.
2. The platform will automatically detect Astro.
3. Build command: `npm run build`
4. Output directory: `dist`
