## Typescript project
We will follow the [instruction](https://webpack.js.org/guides/typescript/).  
Let's take the project from the previous step and replace the file extensions js with ts. Then install the following packages:
```
npm add -D typescript ts-loader
```

Add recommended file [tsconfig.json](tsconfig.json) to the project and add the typescript loader to [webpack.config.js](webpack.config.ts).  
The build is successful, the web application works in the browser.

Now we will [convert](https://webpack.js.org/configuration/configuration-languages/) the webpack configuration file from javascript to typescript.

Add ts-node and types to project.
```
npm add -D ts-node @types/node @types/webpack @types/html-webpack-plugin
```

Rename webpack.config.js to [webpack.config.ts](webpack.config.ts). Change `require` to `import`, `module.exports` to `export default`, do variable typing.  
Also make recommended compiler options in [tsconfig.json](tsconfig.json).

Check that the build is still working:
```
npm run build
```
Open `index.html` from `dist` folder in browser.

**PS**  
To support `js` and `jsx` files in a project, just add these extensions to the `test` option for `ts-loader`.  
I forgot to do this, so further source codes will only be for `typescript`.

[Project source code](./)
