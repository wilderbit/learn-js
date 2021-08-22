## Docs

#### Creating Project and Installing Dependencies
- `npm init --y`
- `npm i react@16.12.0 react-dom@16.12.0 express@4.17.1`
- `npm i -D @babel/core@7.7.7 @babel/node@7.7.7 babel-loader@8.0.6`
- `npm install --save-dev webpack@4.41.5 webpack-cli@3.3.10 webpack-dev-server@3.10.1`
- `npm i -D @babel/preset-env@7.7.7 @babel/preset-react@7.7.4`


## What is Babel
- Node utility which converts code from one language to another.
- Define `.babelrc` file and Define JSX transform
- Specify `npm start` script and Runs express server with `babel-node` 

## Rehydration
- The process of restoring interactivity and functionality to server rendered components
- React running on client recognizes server output as React and binds to it
- React instantly and seamlessly substitutes fully functional app for server-rendered facade.
- Lightweight HTML, JS Libraries Needed
- Fully Interactive
- React and JavaScript must both be running on client's Device
- High-performance updates based on changing state, interactions
