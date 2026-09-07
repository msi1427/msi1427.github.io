# Sabik Irbaz | Personal portfolio

A complete static redesign for https://msi1427.github.io. No npm, Hugo, API keys, or build step required. Content updated using the September 3, 2026 CV and public professional sources.

## Publish on GitHub Pages

1. Unzip this package. Copy its contents directly into your `msi1427.github.io` repository root. `index.html` must be at the top level, not inside another folder.
2. Commit the files to `main`. Keep `.nojekyll` (it may be hidden by your file manager).
3. In **Settings → Pages**, choose **Deploy from a branch**, branch **main**, folder **/(root)**, then Save. Change an existing `/docs` setting to `/(root)`.
4. If the repository has an older Hugo publishing workflow, disable that workflow so it does not overwrite this static site. The old `config.toml`, `content`, `themes`, and `docs` directories are no longer used by this version.
5. Wait for the Pages deployment to finish in Actions, then visit https://msi1427.github.io/.

GitHub instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

The repository source is intended for the account site above. Main-page assets are relative; archive routing and the 404 page assume hosting at the domain root.

## Preview locally

Open `index.html` directly to review the new homepage. For archive navigation, serve the folder with `python -m http.server 8000`, then visit http://localhost:8000. The archive uses root-relative paths.

## Update content

- `index.html`: all visible portfolio content, publication links, and metadata.
- `assets/style.css`: responsive layout, typography, colors, print and reduced-motion styles.
- `assets/app.js`: accessible mobile menu and compatibility with older section links.
- `assets/sabik.webp`: optimized version of your original photograph.
- `cv/MSI_CV_20260903.pdf`: supplied CV, unchanged. `cv/MSI_CV.pdf` also serves that updated CV for the earlier download path.
- `archive/`: earlier published site and supporting PDFs/images, with a historical-content notice. This is retained for earlier projects, talks, and hobbies, rather than used for current credentials. Its older external links were not all reverified.
- `CONTENT-SOURCES.md`: source mapping, status decisions, and maintenance notes.

No analytics, third-party font requests, or API calls are needed by the new homepage. External destinations open in the same tab. Historical archive pages retain their original dependencies. Main content and links remain usable without JavaScript; on small screens the section menu uses JavaScript.

## Validation

JavaScript syntax, main-page local assets, anchor targets, duplicate IDs, CSS brace balance, and archive entrypoint references were checked. Desktop/mobile layouts were implemented through responsive CSS. No live browser or deployed GitHub Pages test was performed in this environment.

## Credits

The archive retains the original Dimension / HTML5 UP theme credits and licensing notices. The photograph and CV were supplied by the site owner. Research outcomes are attributed to collaborative work; preprints, accepted work, and ongoing work are labeled separately.
