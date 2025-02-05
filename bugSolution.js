```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Tailwind CSS Bug</title>
</head>
<body>
  <div class="bg-red-500 p-4">
      This div is red.
  </div>
</body>
</html>
```

To use this solution:
1. Make sure you have Node.js and npm (or yarn) installed.
2. Run `npm install -D tailwindcss postcss autoprefixer`.
3. Run `npx tailwindcss init -p` to generate `tailwind.config.cjs`.
4. Add `tailwindcss` and `autoprefixer` to your `postcss.config.js`.
5. Add the correct content array to your `tailwind.config.cjs`.
6. Import Tailwind into your main CSS file (e.g., `src/input.css`): `@tailwind base; @tailwind components; @tailwind utilities`
7. Include the generated CSS file (`src/output.css`) in your HTML file.

Now, the Tailwind classes should work correctly.