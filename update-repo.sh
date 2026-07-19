#!/bin/bash
set -euo pipefail

echo "Staging all changes..."
git add --all

if git diff --cached --quiet; then
    echo "No changes to commit."
    exit 0
fi

read -rp "Enter your commit message: " commit_message

if [[ -z "$commit_message" ]]; then
    echo "Error: Commit message cannot be empty."
    exit 1
fi

echo "Committing local changes..."
git commit -m "$commit_message"

echo "Integrating remote changes..."
git pull --rebase origin main

echo "Pushing changes..."
git push origin main

echo "Git operations completed successfully."
