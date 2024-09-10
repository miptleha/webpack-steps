## Source maps

To find the exact location of the exception and debug the application, you will need to connect `source maps`.  
First, in the [tsconfig.json](tsconfig.json) file you need to specify the `sourceMap` property.  
Secondly, set the value [devtool](https://webpack.js.org/configuration/devtool/) in the [webpack.config.ts](webpack.config.ts) file.  
To speed up the build, I chose `eval-source-map` for `development` mode, and `source-map` for `production` mode.

Let's compile the `production` assembly:
```
npm run build:prod
```
And open the file `dist/index.html` in the browser.

When you click on the `Compose email` button, the exact stacktrace of the error will appear in the console, when you click on it we will see the application sources and the line where the error occurred.  
Despite the fact that the file with js code is minimized, the user has full access to the sources.  
To exclude the sources, but at the same time leave the correct stacktrace (with the source files), we will specify the `nosources-source-map` mode for `production`.

[Project source code](./)
