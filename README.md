# Next.js Blog for victorbarros.com

## Concepts

- [ ] Authentication
- [x] CMS Headless using [Storyblok](https://www.storyblok.com/)
- [ ] Theme
- [ ] Payments
- [ ] Localization
- [ ] Design System
- [ ] Monorepo

## Packages

- [x] React@17
- [x] Next.js@10
- [ ] SWR
- [x] Material-UI
- [ ] Storybook

## Material-UI

There is some important adjustments that are needed in order to use `Material-UI` with Next.js

1. Must install dependencies related to `@emotion`:

```bash
yarn add @emotion/css @emotion/cache @emotion/server
```

2. Expose `_document.js` and adjust `_app.js` to cache and handle with specific CSS
3. Adjust usage of Next.js `Link`

## References

- [ESlint and Prettier for React apps (Bonus - Next.js and TypeScript)](https://dev.to/onygami/eslint-and-prettier-for-react-apps-bonus-next-js-and-typescript-3e46)
- [The Complete Guide to Build a Full Blown Multilanguage Website with Next.js](https://www.storyblok.com/tp/next-js-react-guide)
- [Use absolute imports in Next.js app deployed with ZEIT Now](https://stackoverflow.com/questions/57234811/use-absolute-imports-in-next-js-app-deployed-with-zeit-now/61780091#61780091)
- [Material-UI with Next.js](https://github.com/mui-org/material-ui/tree/next/examples/nextjs)
