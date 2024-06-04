## Typescript loaders

We already have loaders installed in our project for building `typescript`: `ts-loader` and `babel-loader`.  
Let's add a few more famous ones:  
```
npm add -D @swc/core swc-loader
npm add -D esbuild-loader
```

Now in [webpack.config.ts](webpack.config.ts) for `tsx?` files in the `use` field we can use one of the values:
- ts-loader
- babel-loader
- swc-loader
- esbuild-loader

I note that `ts-loader` is the only one that does type checking, others require `fork-ts-checker-webpack-plugin`.  
The disadvantage of this plugin is that it greatly reduces the speed of the first application launch by `npm start`.  
Alternatively, you can add a call to the `tsc` command in [package.json](package.json) in the `scripts` section.

Let's take an application template and experiment with different loaders.

![app.png](app.png)

[Project source code](./)
