# Unlocked

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

# Commit style
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
