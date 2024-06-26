﻿## Babel-loader

We have already configured the assembly of `ts` and `tsx` files using `ts-loader`.  
As an alternative to the `ts-loader` there can be a `babel-loader`.

Let's remove the link to `ts-loader` from [package.json](package.json),  
Install `babel-loader`:  
```
npm add -D @babel/core babel-loader
```

In the file [webpack.config.ts](webpack.config.ts) replace `ts-loader` with `babel-loader`.  
If you try to build the project now, you will get an error that the required presets are not installed.  
Let's indicate them in the file [babel.config.json](babel.config.json).

I didn’t install the presets separately, they were picked up from me anyway.  
You can add them if necessary:  
```
npm add -D @babel/preset-typescript @babel/preset-react
```

If we make an error with types in the source file, it will be highlighted in the editor.  
But will not appear in the browser (webpack build will be successful).  
To fix this we need a [plugin](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin):  
```
npm add -D fork-ts-checker-webpack-plugin
```

Add it to [webpack.config.ts](webpack.config.ts)

[Project source code](./)
