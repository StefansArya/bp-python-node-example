> This is just an example for JavaScript and Python nodes.

## Local module server for development
To begin the development, please clone this repository and start the module server.

```sh
$ cd /your/project/folder
$ git clone --depth 1 https://github.com/StefansArya/bp-python-node-example .
$ pnpm i
$ npm start
 >> [Browsersync] Access URLs:
 >> -----------------------------------
 >> Local: http://localhost:6791
 >> -----------------------------------
```

Copy the `http://localhost:6791` URL and go to online Blackprint Editor. <br>
Go to [editor's development mode](https://blackprint.github.io/dev.html#page/sketch/1), and paste it to remote module server. Then refresh the page, after that you can modify the code from your favorite text editor. The compiler will watch every changes inside this folder by following the configuration in `blackprint.config.js`.

Before opening `.sf` file, please install the [syntax highlighter](https://github.com/StefansArya/scarletsframe-compiler/tree/master/syntax-highlighter) for your text editor.

> BPIC = Blackprint Interface Component

![brave_7NcrWUt66n](https://user-images.githubusercontent.com/11073373/159176092-7271f980-2a70-4e38-8830-e9746170426d.png)

## Trying the example
The `example` folder contains example for running the exported Blackprint instance (JSON) for Node.js and Python 3. The exported instance can be imported to the editor that already connected to the module server and it can be visualized like below:

![brave_P4CF4EhINq](https://user-images.githubusercontent.com/11073373/226105575-b295e85c-e497-405d-9e19-51d3f73d6f60.jpg)

If you want to try for Node.js, make sure the compiled module already in `dist` folder. If not, then you can run below:

```sh
$ npm run build-prod

# Then run the example
$ node ./example/test.mjs
```

For Python, make sure you already have the latest version of `blackprint-engine`.
```sh
$ pip install blackprint-engine --upgrade

# Then run the example
$ python ./example/test.py
```

Both Node.js and Python will output `[16]` just like the Logger in the editor.
![Code_y2aM0x42HQ](https://user-images.githubusercontent.com/11073373/226104487-506821d7-0cb6-4c76-ad6e-40ab790efe8f.jpg)

### License
MIT