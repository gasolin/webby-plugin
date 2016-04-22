Webby-plugin
============
[![npm](https://img.shields.io/npm/v/webby-plugin.svg)](https://www.npmjs.com/package/webby-plugin)

Hubot plugin template written in plain javascript, compatible with webbybot.

## Installation

* Run the `npm install` command.

```
$ npm install webby-plugin
```

* Add the following code in your `external-scripts.json` file.

```
["webby-plugin"]
```

[webby-template](https://github.com/gasolin/webby-template) already bundled with webby-plugin. You can check it for reference.

## Sample Interaction

```sh
webby> webby hello
webby> world!
```

## Development

Run code style check via

```
npm run lint
```

Add tests in `test/` folder. Run tests via

```
npm test
```
