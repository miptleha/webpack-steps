## Typescript project
We will follow the [instruction](https://webpack.js.org/guides/typescript/).  
Let's take the project from the previous step and replace the file extensions js with ts. Then install the following packages:
```
yarn add typescript ts-loader -D
```

Add recommended file [tsconfig.json](tsconfig.json) to the project and add the typescript loader to [webpack.config.js](webpack.config.ts).  
The build is successful, the web application works in the browser.

Now we will [convert](https://webpack.js.org/configuration/configuration-languages/) the webpack configuration file from javascript to typescript.

[Project source code](./)
