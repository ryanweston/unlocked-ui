⚠️ This is an unmaintained university project.

<p align="center">
  <a href="https://unlocked.to" target="_blank">
    <img alt="Unlocked logo" width="100" src="https://unlocked.to/images/logo/logo-dark.svg">
  </a>
</p>



<p align="center">
  
   <a href="https://app.netlify.com/sites/unlocked-storybook/deploys">
    <img src="https://img.shields.io/npm/v/@unlocked/base">
  </a>
  
  <a href="https://app.netlify.com/sites/unlocked-storybook/deploys">
    <img src="https://api.netlify.com/api/v1/badges/3bff2f88-9c28-4f9f-84de-a52a0d175fd8/deploy-status">
  </a>
  
  <a href="#">
    <img src="https://img.shields.io/npm/dm/@unlocked/base">
  </a>
  
</p>

# Unlocked UI

Unlocked is an experimental Tailwind based component library built for Vue 3. Providing base components within our component library as well as copy and pastable molecules and organisms under the name 'compositions. These can be found at [Unlocked compositions](https://unlocked.to/compositions). 

## 🚀 Features

- ⚡️ Treeshakable imports
- 🧱 Atomic interface components
- 🎨 Theming system
- 📚 Custom tokens
- 🦄 Easy integration with Figma

## 📦 Getting started

For more complete documentation, please refer to our [official documentation](docs.unlocked.to).

### Installation

To install in your Vue application: 

```console
yarn add @unlocked/foundation
```

 ```js
 import { unlockedGlobal, defaultTheme } from '@unlocked/foundation'
 
 app.use(unlocked, { 
  theme: defaultTheme
 })
 ```
 
 ### Usage
 
 With global registration, your components don't need to be imported! If you want a modular apporach, please refer to our [official documentation](docs.unlocked.to).
 
 ```html
<UButton>Button</UButton>
```

### Customisation

For more information on customisationa and managing your theme, please refer to our [official documentation](docs.unlocked.to).


## 🔧 Development & maintenance

### Commit style
Commit messages must conform to the to the [conventional commits format](https://www.conventionalcommits.org/en/v1.0.0/#summary).

```bash 
type(scope?): subject  #scope is optional
```

Message types:
- chore
- feat
- fix
- refactor
- revert
- style
- test

### Build
Ensure all packages are installed.

```console
yarn
```

Build the library

```console
yarn build:lib
```

### Storybook
Please ensure that Storybook's static build has been tested before you push to master.

```console
yarn build:storybook
```

```console
npx http-server storybook-static
```

### Release
When ready to release ensure you utilise the correct workflow.

```console
yarn release
```

## 📄 License

[MIT License](https://github.com/UnlockedUI/unlocked-ui/blob/master/LICENSE) © 2022-PRESENT [Ryan Weston](https://github.com/ryanweston)
