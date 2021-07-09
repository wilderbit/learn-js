#### Webpack
Webpack to compile ES6 and JSX into JavaScript

#### Setting Up Webpack to Compile Our Application

- Webpack
  - Uses babel used to convert .jsx and ES6 files into .js files
  - Bundles set of files connected by import statement into one file
  - Uses webpack-dev-server plugin to create convenient environment
Install Webpack, Babel and other libraries needed for bundling and transpilation
    
Install Webpack `npm install --save-dev webpack`

Install Webpack Cli `npm install --save-dev webpack-cli webpack-dev-server`

Install Babel `npm install -D @babel/core @babel/node @babel/preset-env @babel/preset-react @babel/register` 

Create `.babelrc` file to define how `.jsx` and `ES6` should be handled.

Create `webpack.config.js` file to describe how our app should be bundled

Create stubs for `index.html` and `index.jsx`, which will form the basis of our app