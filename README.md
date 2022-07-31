<p align="center">
  <a href="https://unlocked.to" target="_blank">
    <img alt="Unlocked logo" width="100" src="https://unlocked.to/logo-dark.svg">
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

We're currently solely maintained by Unlocked's creator [Ryan Weston](github.com/ryanweston). Unlocked was built with the aim to help provide a foundation for your design system and to enable developers and designers to be able to quickly prototype and build modern applications with ease. 

As we look to the future of the web, we're looking to provide tools for developers adopting new forward thinking web technologies such as Web3, AR & VR. We're adopting this ethos as we built out our [Web3 components](unlocked.to/web3). These are compositional components, inspired by TailwindUI and built with Unlocked, to help fastrack your Web3 projects. 🚀

Unlocked is community driven and relies on feedback to help improve. 🎉

- [Join our Discord](github.com/ryanweston)
- [Follow our Twitter](github.com/ryanweston)

## Getting started

For more complete documentation, please refer to our [official documentation](docs.unlocked.to).

To install in your Vue application: 

```bash 
yarn add @unlocked/foundation
```

 ```js
 import { unlockedGlobal, defaultTheme } from '@unlocked/foundation'
 
 app.use(unlockedGlobal, { 
  theme: defaultTheme
 })
 ```

## Commit style
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

## Release
When ready to release ensure you utilise the correct workflow.

```console
yarn release
```
