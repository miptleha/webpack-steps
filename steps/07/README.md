##Aliases

Using relative paths may not be very convenient,  
I would like to specify the path relative to the root folder in imports.  
We will denote the path from the root folder with the `@` symbol.

Let's make changes to the file [webpack.config.ts](webpack.config.ts),  
adding the `alias` property to the `resolve` section.

We will also need to configure `typescript`,  
so that the editor does not swear at such imports.  
Let's add `paths` to [tsconfig.json](tsconfig.json).

The application is assembled and working. [File](src/pages/Blog/Blog.tsx) with a new path type.
  
[Project source code](./)