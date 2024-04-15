## Basic JS application
Create empty Node.JS project
```
yarn init -Y
```

Let's create two js files in [src](src) folder, define a function in one of them and call it in the other.  
Node.ds by default cannot run this app. Let's install a bundler to combine all the files into one.
```
yarn add webpack webpack-cli -D
```

Add build script to [project.json](project.json) and build application.
```
node run build
```

