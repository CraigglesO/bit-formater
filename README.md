# Typed Bit Formater  [![Build Status](https://travis-ci.org/CraigglesO/bit-formater.svg?branch=master)](https://travis-ci.org/CraigglesO/bit-formater)
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/bit-formater.svg
[npm-url]: https://npmjs.org/package/bit-formater
[downloads-url]: https://npmjs.org/package/bit-formater

Format bit input. Options of a function and class

## LICENSE

MIT

## install

NPM:
`npm install bit-formater`


## How to Use

``` typescript
import { formatBytes, byteFormater } from 'bit-formater';


  let x = formatBytes(234567543, 2);

  let y = new byteFormater();
  let r = y.add(12346765432);
  console.log(r); // '12 GB 346 MB 765 KB and 432 Bytes downloaded'
  r = y.add(93484952492834);
  console.log(r); // '93 TB 496 GB 1298 MB 1258 KB and 1266 Bytes downloaded'

```

## Contributing

```sh
# Fork this repo, then
npm install

npm run watch

# add tests, make changes, pass tests ... then [ctrl+c]
npm run publish
```

## Updating

Update `typings.json/version` to match the source version you are typing against.
e.g. if you are creating typings for `bit-formater@0.5.0`, then:

```js
// typings.json
{
  "version": "0.5.0"
  // ...
}
```

----
