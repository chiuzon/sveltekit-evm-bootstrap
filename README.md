# SvelteKit-EVM-Bootstrap

SvelteKit-EVM-Bootstrap is a boilerplate project built using SvelteKit, which provides a modern, lightweight framework for building web3 applications. It includes several popular libraries and tools to help you quickly build and deploy your blockchain-based web application, such as Web3-Onboard, Viem, Typescript, Tailwind, Playwright, Vitest, Prettier, and ESLint.

## Stack

- [SvelteKit](https://kit.svelte.dev/)
  A lightweight framework for building web applications using Svelte.
- [Web3-Onboard](https://onboard.blocknative.com/)
  A library that helps connect Web3 wallets to your application, supporting most of the popular wallets.
- [Viem](https://viem.sh/)
  A smart contract management library that handles everything from deploying contracts to reading and writing data on the blockchain.
- [Typescript](https://www.typescriptlang.org/)
  A typed superset of JavaScript that provides a more robust development experience.
- [Tailwind](https://tailwindcss.com/)
  A utility-first CSS framework that helps you quickly build responsive, modern web interfaces.
- [Playwright](https://playwright.dev/)
  A library that allows for end-to-end testing of web applications in multiple browsers.
- [Vitest](https://vitest.dev/)
  A fast and modern test runner for JavaScript projects.
- [Prettier](https://prettier.io/)
  A code formatter that automatically formats your code to ensure consistent styling.
- [ESLint](https://eslint.org/)
  A linter that checks your code for common errors and stylistic issues.

## Getting Started

```bash
# Install dependencies
pnpm install

# To run the development server, run:
pnpm dev

# or

# This will start the server and open the app in a new browser tab. You can also run the server without opening the app with:
pnpm dev -- --open
```

## Building

To create a production version of your app:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Stack Explaination

- Viem
  Viem is a smart contract management library that makes it easy to deploy and interact with smart contracts on the blockchain.
  For more information, please refer to the [Viem Documentation](https://viem.sh/docs/introduction.html)

- Web3-Onboard
  Web3-Onboard is a library that helps connect web3 wallets to your application, supporting most of the popular wallets. For more information, please refer to the
  [Web3-Onboard Documentation](https://onboard.blocknative.com/docs/overview/introduction#features)

## Hooks in SvelteKit ?!

Although `useAuth()` might look like a hook, it's actually just a function that names the connection function and makes it easier to access the Onboard object instance. You can use Viem without using the concept of hooks, as you would in the examples provided in their respective documentation.
