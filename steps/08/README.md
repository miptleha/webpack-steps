## Assets

The project may contain images or fonts that we want to import onto the page.  
I create a folder [src/assets](src/assets) and place different types of images there.

We will display images in the header.  
Add images with the `import` directive and then specify them in the `src` property of the `img` element.  
Do this in the file [src/components/Layout.tsx](src/components/Layout.tsx).

During build there will be an error that the loader for new file types is not installed.  
According to [doc](https://webpack.js.org/guides/asset-modules/)
add a new rule to [webpack.config.ts](webpack.config.ts).  
In `output` we will add the property `assetModuleFilename`,
in order to collect icons in a separate folder (for prod build).

You also need to tell `typescript` about new file extensions.
To do this, let's make changes to the file [global.d.ts](global.d.ts).

Now there are no errors and the images are successfully displayed in the header.

[Project source code](./)