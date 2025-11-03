#!/usr/bin/env bash

set -e

echo "Running product scrapers..."
npm run update_daggers

echo ""
echo "Validating products..."
npm run validate_products

echo ""
echo "Committing changes..."
git add psa-parsers/products/*.json public/images client/daggers-data.ts

if git diff --staged --quiet; then
	echo "No changes to commit"
	exit 0
fi

git commit -m "Update scraped product data"

echo ""
echo "Pushing to remote..."
git push

echo ""
echo "Done! Changes committed and pushed."
