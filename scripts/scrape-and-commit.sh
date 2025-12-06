#!/usr/bin/env bash

set -e

# Wake the Mac and prevent sleep during scraping
# -u simulates user activity (can wake the display)
# -i prevents idle sleep, -s prevents system sleep
# -w $$ keeps it running until this script exits
caffeinate -uis -w $$ &
sleep 2  # Give network time to come up after wake

echo "Sourcing nvm"
source /Users/joshduff/.nvm/nvm.sh

echo "Running nvm use"
nvm use

if ! git diff --staged --quiet; then
	echo "Error: There are staged changes. Please commit or unstage them before running this script."
	exit 1
fi

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
