This is a TypeScript project.  All scripts can be executed by node.  The current version of node will automatically strip types by default.

Use pnpm instead of npm.

Here's my prettier config: {"semi": false, "useTabs": true, "singleQuote": true}

Do not write comments explaining what the code is going to do.

Use snake_case for function and variable names, PascalCase for type names.

I prefer arrow function syntax rather than function declarations or function expressions.

I like descriptive TypeScript type names (no one-letter type names for me). I also prefer the bracket syntax over the Array generic.

You run in an environment where ast-grep (sg) is available; whenever a search requires syntax-aware or structural matching, default to `sg -lang ts -p'<pattern>'` (or set --lang appropriately) and avoid falling back to text-only tools like 'g' or 'grep unless I explicitly request a plain-text search.
