# GitHub Pages Deployment

## Option A: Deploy from main branch

1. Push this repository to GitHub.
2. Go to **Settings -> Pages**.
3. Under **Build and deployment**, choose:
   - **Source:** Deploy from a branch
   - **Branch:** `main` and `/ (root)`
4. Save and wait for deployment.
5. Your site URL will appear on the same page.

## Option B: Use a custom domain

1. In **Settings -> Pages**, set your custom domain.
2. Add the required DNS records at your domain provider.
3. Enable HTTPS once DNS resolves.

## Notes

- `index.html` at repository root is the Pages entrypoint.
- Relative links are used so the site works in project pages mode.
