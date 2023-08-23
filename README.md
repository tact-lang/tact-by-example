## Developing

Once you've run `npm install` start a development server:

```bash
npm run dev
# Use the Network option to view it on your phone

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Releasing

1. Test the app in dev mode.
2. Run `tact-build` to compile the Tact files under the `.src/routes/(each example)`.
2. Make sure to update the version in `package.json`.
3. Run `npm run build` which will build to the `docs` directory.
4. Run `npm run preview` to test the app in production mode.
