#!/usr/bin/env bash

exec >> /tmp/scraper.log 2>> /tmp/scraper.err

set -e

echo "Setting the path"
export PATH="/opt/homebrew/bin:/Users/joshduff/.nvm/versions/node/v24.10.0/:$PATH"

echo "Sourcing nvm"
source /Users/joshduff/.nvm/nvm.sh

pushd /Users/joshduff/git/buyapsadagger

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

popd
