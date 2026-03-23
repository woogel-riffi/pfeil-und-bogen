

## Problem: Site won't load on Plesk external hosting

The `index.html` references the source file directly:

```html
<script type="module" src="/src/main.tsx"></script>
```

This only works in Vite's dev server. On external hosting (Plesk), you need to serve the **built output**, not the source files.

## What you need to do

**You must build the project first**, then deploy the `dist/` folder contents to Plesk -- not the repository root.

### Steps:

1. **Build the project** by running `npm run build` (or `bun run build`) in your repo. This creates a `dist/` folder with a production-ready `index.html` and bundled JS/CSS files.

2. **Deploy the `dist/` folder** to Plesk. Point your Plesk site's document root to the `dist/` directory contents, not the project root.

3. **SPA routing fix**: Since this is a React SPA with client-side routing, you also need to add a redirect rule so all routes serve `index.html`. Create an `.htaccess` file in your `dist/` folder (if Apache):

```text
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Optional: Automate with GitHub Actions

If you want automatic deploys when pushing to GitHub, you can set up a GitHub Action that runs `npm run build` and deploys the `dist/` folder to your Plesk server via FTP/SSH.

## Summary

The `index.html` in your repo root is a **development template** -- it references `.tsx` source files that browsers can't run directly. You need to deploy the **built output** from the `dist/` folder.

