## Create React API
1. Install Node
2. `npm -g create-react-app && create-react-app cra-test` or `npx create-react-app cra-test`
3. https://jscomplete.com/learn/1rd-reactful


## Init the project from start
1. `mkdir fulljs`
2. `cd fulljs`
3. `npm init`
4. `npm i express`
5. `npm i react react-dom`
6. `npm i webpack webpack-cli` It's a module bundler.
7. `npm i babel-loader @babel/core @babel/node @babel/preset-env @babel/preset-react`
8. `npm i -D nodemon`
9. `npm i -D eslint babel-eslint eslint-plugin-react eslint-plugin-react-hooks` create `.eslint.rc` file
10. `mkdir dist`
11. `mkdir src`
12. `mkdir src/components`
13. `mkdir src/server`
14. create a new file `babel.conf.js` 
15. `@babel/core babel-loader @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties @babel/plugin-syntax-dynamic-import css-loader style-loader html-webpack-plugin webpack webpack-dev-server webpack-cli -D`
16. `react react-dom prop-types react-router-dom semantic-ui-react`
```js
module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
};
```

15. create a new file `webpack.config.js`
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
```

16. Update `package.json` file
 ```js
{
    "scripts": {
        "test": "jest", 
        "dev:server": "nodemon --exec babel-node src/server/server.js --ignore dist/", 
        "dev:bundler": "webpack -w --mode=development"    
    }
}    
```   

17. Bundle the files `npm run dev:bundler`

18. Run the Server `npm run dev:server`

19. Can see all docs [here](https://jscomplete.com/learn/1rd-reactful)

20. We can also use ``npx reactful star-match``

21. Learn [more...](https://jscomplete.com/learn/react-beyond-basics/introduction) 
