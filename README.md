# Japan's Multi-Box Compression

This repository contains a chapter-based thesis website on Japan's fiscal, monetary, demographic, corporate, household, and political compression.

The site is intentionally simple:

- one page explaining the thesis;
- one page showing the chapter structure;
- one page for sources;
- one Markdown file per chapter;
- one GitHub Pages workflow.

## Local preview

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

## Build

```bash
mkdocs build --strict
```

## Publish

Push to `main`, then set:

**GitHub → Settings → Pages → Source → GitHub Actions**

The included workflow will publish the site automatically.
