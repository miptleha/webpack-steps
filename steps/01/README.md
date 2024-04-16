## Basic JS application
Create empty Node.JS project
```
yarn init -Y
```

Let's create two js files in [src](src) folder, define a function in one of them and call it in the other.  
Node by default cannot run this app. Let's install a bundler to combine all the files into one.
```
yarn add webpack webpack-cli -D
```

Add build and start script to [package.json](package.json) and try them.
```
yarn run build
yarn start
```

Let's create a web application, for this we will need [index.html](src/index.html) and basic config [webpack.config.js](webpack.config.js) with html-webpack-plugin.
```
yarn add html-webpack-plugin -D
```

It remains to eliminate the warning that the mode option is not specified. Both modes will be useful, add them into [package.json](package.json).
```
yarn run build:dev
yarn run build:prod
```

You can open the created page from `dist` folder in the browser and make sure that this is the template html to which the bundled js is connected.
