## Decomposition

In this chapter we will not add anything, but split config into small parts, responsible for a specific section.  
Let's put them in the [config/build](config/build) folder.  
Since the paths are relative, we will define them in [webpack.config.ts](webpack.config.ts) and pass them along the chain
into generator functions for parts of the `webpack` configuration.

After making the changes, let's check that all 3 build options work:
```
npm run build:dev
npm run build:prod
npm start
```

[Project source code](./)
