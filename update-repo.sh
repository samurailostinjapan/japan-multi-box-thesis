#!/bin/bash
set -euo pipefail

#echo "Pulling the latest changes from the remote repository..."
#git pull --rebase

echo "Staging all changes..."
git add --all

if git diff --cached --quiet; then
    echo "No changes to commit."
    exit 0
fi

read -rp "Enter your commit message: " commit_message

if [[ -z "$commit_message" ]]; then
    echo "Error: Commit message cannot be empty. Aborting commit."
    exit 1
fi

echo "Committing changes..."
git commit -m "$commit_message"

echo "Pushing changes to the remote repository..."
git push

echo "Git operations completed successfully."
