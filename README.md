# \<login-logout>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.
This project is still under development as a test application.
It has multiple ways of working with components, with imports and still hackish solution for the state
handling, and in tackling web-components and lit limitations like nested components and components reactive desired behavior.
The app is made of a parent js file, the login-logout which renders, conditionally, either the login template, or the navbar corresponding to a user being granted access;
The user details is a separate component that listens to loggedIn and loggedOut custom events, by getting some division from the parent index.html already defined elements and manipulating those so the state of the app is guarded (no 'hard reset' needed, ex. window.location.reload());
Still, some elements needs refactoring, this is just a POC.

## Installation

```bash
npm i login-logout
```

## Usage

```html
<script type="module">
  import 'login-logout/login-logout.js';
</script>

<login-logout></login-logout>
```

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

## Testing with Web Test Runner

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```

## Demoing with Storybook

To run a local instance of Storybook for your component, run

```bash
npm run storybook
```

To build a production version of Storybook, run

```bash
npm run storybook:build
```

## Tooling configs

For most of the tools, the configuration is in the `package.json` to minimize the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
