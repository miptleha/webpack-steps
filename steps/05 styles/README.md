## Use styles

To be able to use CSS in your webpack app, you need to set up [css-loader](https://webpack.js.org/loaders/css-loader/).  
Let's look [recommended](https://github.com/webpack-contrib/css-loader?tab=readme-ov-file#recommend) sample.  
Make changes to [webpack.config.ts](webpack.config.ts).  
In the product build, styles will be build in a separate file to speed up the loading of the application.  
We will need to install the following plugins:
```
npm add -D css-loader sass-loader sass style-loader mini-css-extract-plugin
```

To avoid import error and enable intelisense support, add file [global.d.ts](src/global.d.ts).  
You can use global styles and [CSS modules](https://css-tricks.com/css-modules-part-1-need/).  
In the production build, the class names will be hashes, and in the development build they will contain the path to the class.

[Project source code](./)
