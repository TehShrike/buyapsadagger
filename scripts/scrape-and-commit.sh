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

FILES_TO_COMMIT=(psa-parsers/products/*.json public/images client/daggers-data.ts)

reset_files() {
	echo "Resetting changed files..."
	git checkout -- "${FILES_TO_COMMIT[@]}"
	# Clean any untracked files in public/images
	git clean -fd public/images
}

echo "Running product scrapers..."
if ! npm run update_daggers; then
	echo "update_daggers failed!"
	reset_files
	exit 1
fi

echo ""
echo "Validating products..."
if ! npm run validate_products; then
	echo "validate_products failed!"
	reset_files
	exit 1
fi

echo ""
echo "Committing changes..."
git add "${FILES_TO_COMMIT[@]}"

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
