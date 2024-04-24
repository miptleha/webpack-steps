## Use styles

Let's add the ability to include styles for our application.  
Make changes to [webpack.config.ts](webpack.config.ts).  
In the product build, styles will be build in a separate file to speed up the loading of the application.  
For successful assembly you will need to install the following plugins:
```
npm add -D css-loader sass-loader sass style-loader mini-css-extract-plugin
```

We can use styles as [css modules](https://css-tricks.com/css-modules-part-1-need/).  
In the production build, the class names will be hashes, and in the development build they will contain the path to the class.

[Project source code](./)
