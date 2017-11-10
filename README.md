# Node.js scripting - examples for SKM meeting

At this repository you will find few simple examples of Node.js usage.

## The examples

You can track all changes commit by commit - same way I did during presentation :sunglasses:

Also - check all branches in this repository, they also reflect my presentation flow.

At least you can grab them directly here - in few separate folders:
* [gulp-example](./gulp-example): simple example of using `gulp` as `npm` scipt
* [ts-and-scrips-example](./ts-and-scrips-example): same application as in gulp-example but we dropped gulp, moved it to typescript (as fast as we could) and added node script to resize images
* [html-to-pdf-script](./html-to-pdf-script): example of node script to convert html to pdf files
* [html-to-pdf-as-server](./html-to-pdf-as-server): now we can use `html-to-pdf` as standalone server, and call it via HTTP to generate .pdf file

Of course feel free to play with this code and tweak it :muscle:

## :running: How to run the examples
Every folder is a separate `npm` package.

Please run `npm install` before running the scripts to download dependencies :package: