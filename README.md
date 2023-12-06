# 🐒 never-console-loader

> 🙈🙈🙈 Remove console print information

Minimal requirements:

- webpack >=5.0.0

## Installation

```sh
npm install never-console-loader
```

## Usage

```javascript
// webpack.config.js
export default {
  module: {
    rules: [
      {
        test: /\.m?js$/i,
        use: [{ loader: 'never-console-loader' }],
      },
    ],
  },
}
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
