- [🔍 Changelog](/CHANGELOG.md)
- [🫂 Telegram Group Chat](https://t.me/tactlang)

## Developing

### About Tact Source Code

1. Tact code is under the `src` directory. The `src` directory contains the following files: `src/routes/(examples)` - The source code for the examples.
2. The terminal output is located in `src/routes/(examples)/+layout.svelte` file.

Once you've run `npm install` start a development server:

```bash
npm run dev
# Use the Network option to view it on your phone

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Releasing

1. Test the app in dev mode.
2. Make sure to update the version in `package.json`.
3. Run `npm run build` which will build to the `docs` directory.
4. Run `npm run preview` to test the app in production mode.
