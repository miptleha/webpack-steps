## Favicon + Copy plugin

In part [01](../01/README.md) `HtmlWebpackPlugin` was used to create a start page from an html template.  
Let's make changes to [webpack.config.ts](webpack.config.ts) by passing `favicon` argument with path to icon file.

See the documentation for [CopyWebpackPlugin](https://webpack.js.org/plugins/copy-webpack-plugin/).  
It allows you to copy existing files and folders that are not processed by `webpack`.  
Create a static page with [cats](public/cats/) to the `public` folder.  
When `devServer` starts, it will be used automatically, but it will need to be copied in `build:dev` and `build:prod`.  
Do this in `new CopyPlugin` section of [webpack.config.ts](webpack.config.ts).

![app.png](app.png)

[Project source code](./)
