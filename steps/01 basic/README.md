## Basic JS application
Let's [get started](https://webpack.js.org/guides/getting-started/) with webpack.  
Create empty Node.JS project.  
```
npm init -y
```

Create two js files in [src](src) folder, define a function in one of them and call it in the other.  
Node by default cannot run this app. Let's install a bundler to combine all the files into one.
```
npm add -D webpack webpack-cli
```

Add build to [package.json](package.json) and try them.
```
npm run build
```

Let's create a web application, for this we will need [index.html](src/index.html) and basic config [webpack.config.js](webpack.config.js) with html-webpack-plugin.
```
npm add -D html-webpack-plugin
```

It remains to eliminate the warning that the mode option is not specified. Both modes will be useful, add them into [package.json](package.json).
```
npm run build:dev
npm run build:prod
```

You can open the created html from `dist` folder in the browser and make sure that this is [index.html](src/index.html) to which the bundled js is connected (`hello` message in console).

[Project source code](./)
