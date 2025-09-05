This is a TypeScript project.  All scripts can be executed by node.  The current version of node will automatically strip types by default.

Use pnpm instead of npm.

Here's my prettier config: {"semi": false, "useTabs": true, "singleQuote": true}

Do not write comments explaining what the code is going to do.

Use snake_case for function and variable names, PascalCase for type names.

I prefer arrow function syntax rather than function declarations or function expressions.

I like descriptive TypeScript type names (no one-letter type names for me). I also prefer the bracket syntax over the Array generic.

You run in an environment where ast-grep (sg) is available; whenever a search requires syntax-aware or structural matching, default to `sg -lang ts -p'<pattern>'` (or set --lang appropriately) and avoid falling back to text-only tools like 'g' or 'grep unless I explicitly request a plain-text search.

# Project Structure

This is a web scraping project for PSA Dagger firearms data from Palmetto State Armory.

## Key Directories
- `psa-parsers/` - Main scraping and parsing scripts
  - `listing-pages/` - Contains downloaded HTML pages from product listing pages
  - `products/` - Contains daggers.json and individual product page HTML files
  - `download-listings.ts` - Downloads paginated listing pages using puppeteer
  - `download-product-pages.ts` - Downloads individual product page HTML from URLs in daggers.json
  - `puppeteer-scraper.ts` - Core puppeteer scraping functionality with pagination support
  - `parse-listings.ts` - Parses listing pages to extract product data

## Data Flow
1. `download-listings.ts` scrapes listing pages from PSA website
2. `parse-listings.ts` extracts product URLs and titles from listing pages into `products/daggers.json`
3. `download-product-pages.ts` reads `daggers.json` and downloads individual product page HTML files

## Scripts Usage
All scripts are executable with `node <script>.ts` thanks to Node's built-in TypeScript support.

## Dependencies
- puppeteer - For web scraping
- Standard Node.js fs/path modules for file operations
