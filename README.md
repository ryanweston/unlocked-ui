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

Unlocked is a forward thinking, modern Tailwind based component library built for Vue. 

We're currently solely maintained by Unlocked's creator [Ryan Weston](github.com/ryanweston). Unlocked was built with the aim to help tackle issues presented by utilising component libraries, especially tackling the pain points you get when trying to transition your product into using a design system. 

We follow the atomic design principles, providing base components within our component library, then providing copy and pastable molecules and organisms under the name 'compositions. These can be found at [Unlocked compositions](https://unlocked.to/compositions). 

This is all with the aim to invert provide the ability for you be able to quickly scale up your product with customisable, premade components. All while providing utilities to invert control. Giving you the ability to easily change complex components without having to wrap them, preintergrated design tokens and a theming system that gives you complete control!

Unlocked is community driven and relies on feedback to help improve. 🎉

- [Join our Discord](github.com/ryanweston)
- [Follow our Twitter](github.com/ryanweston)

## 🚀 Features

- ⚡️ Treeshakable imports
- 🧱 Atomic interface components
- 🎨 Theming system
- 📚 Custom tokens
- 🦄 Easy integration with UI kit

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
<u-button>Button</u-button>
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
