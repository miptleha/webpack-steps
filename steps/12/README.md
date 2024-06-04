## Babel-loader

We have already configured the assembly of `ts` and `tsx` files using `ts-loader`.  
It, in turn, uses `babel-loader` internally.

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

[Project source code](./)
