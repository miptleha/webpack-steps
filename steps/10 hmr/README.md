## HMR React

Webpack by default runs `devServer` with support for [Hot Module Replacement](https://webpack.js.org/guides/hot-module-replacement),  
thanks to which all changes in the source code are immediately loaded onto the page without completely updating it.  


However, changing react components causes a complete update of the application.  
Let's fix this by installing `react-refresh-webpack-plugin`.
```
npm i -D @pmmmwh/react-refresh-webpack-plugin react-refresh react-refresh-typescript
```

And connect this plugin in [webpack.config.ts](webpack.config.ts).  
Changes are now displayed faster and state is preserved.

As a bonus, let's also include the `ProgressPlugin` that comes with webpack.  
Now when you launch a webpack, the build progress is displayed as a percentage.

[Project source code](./)
