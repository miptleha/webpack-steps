## Live reloading
We will further [set up the development environment](https://webpack.js.org/guides/development/), which simplifies the development of the application.  
Let's add the ability to automatically rebuild when the source code changes. For this we will use devServer:
```
npm add -D webpack-dev-server
```

Let's perform the recommended settings, namely, add the `webpack serve` launch to [package.json](package.json).  
Also add the `devServer` section to [webpack.config.ts](webpack.config.ts).  
We can run application in live reloading mode (no need to build the app):
```
npm start
```

Now let's set up debugging of the application in a Browser and VS Code. To do this, specify `devtool` in [webpack.config.ts](webpack.config.ts).  
We will also create a default configuration `Chrome: Launch` on the `Run and Debug` tab in VS Code.  
As a result, the file [.vscode/launch.json](.vscode/launch.json) will be created.  
Now we can set breakpoints both in any Browser and in VS Code.

[Project source code](./)
