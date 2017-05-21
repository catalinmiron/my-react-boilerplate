# React boilerplate
## Tasks

### Bundle dev/production

**Make the dev build with Hot Module Replacement on `localhost:3000`**

```
yarn start
```

**Make the production build**

```
yarn build
```

**Running tests with jest**

```
yarn test
```

or in watch

```
yarn test -- --watch
```

Tests are placed in `__tests__` folder or you can add `{componentName}.test.js` file and `Jest` will run that as well.


### Deployment

**Deploy to Surge.sh**

Replace YOUR_DOMAIN with your desired domain name.

```
yarn deploy
```


**Deploy to Github pages**

```
yarn deploy-gh
```
