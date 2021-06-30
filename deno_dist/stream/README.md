<p align="center">
    <img src="../../assets/rimbu_logo.svg" />
</p>

# @rimbu/stream

A Stream is an Iterable-like structure that represents a source that can stream values when requested. The source is unspecified, it may be a materialized object (e.g. an Array), or a calculated sequence (e.g. the fibonacci numbers). However, unlike an Iterable, a Stream offers many methods to change the values produced by the Stream, before it is consumed, without the need to `materialize` intermediate instances.

This package exports the following main types:

| Name              | Description                                                                                          |
| ----------------- | ---------------------------------------------------------------------------------------------------- |
| `FastIterator<T>` | an Iterable that supports faster iterating than the `Iterable` type                                  |
| `FastIterator<T>` | an Iterator that supports faster iterating than the `Iterator` type                                  |
| `Stream<T>`       | an Iterable-like structure that represents a source that can produce values of type T when requested |
| `Streamable<T>`   | an interface requiring that an object has a `.stream()` method                                       |
| `StreamSource<T>` | a convenience type that covers all types that can be automatically converted to a `Stream`           |

For complete documentation please visit the _[Rimbu Docs](http://rimbu.org)_.

## Installation

All types are exported through [`@rimbu/core`](../core). It is recommended to use this package.

To install separately:

> `yarn add @rimbu/stream`

or

> `npm i @rimbu/stream`

### recommended tsconfig settings

Rimbu uses advanced and recursive typing, potentially making the TypeScript compiler quite slow in some cases, or causing infinite recursion. It is recommended to set the following values in the `tsconfig.json` file of your project:

```json
{
  //  ...
  "compilerOptions": {
    // ...
    "skipLibCheck": true,
    "noStrictGenericChecks": true
  }
}
```

## Usage

```ts
import { Stream } from '@rimbu/stream';

console.log(Stream.range({ start: 10, amount: 15 }).toArray());
```

## Author

[Arvid Nicolaas](https://github.com/vitoke)

## Contributing

Feel very welcome to contribute to further improve Rimbu. Please read our [Contributing guide](../../CONTRIBUTING.md).

## Contributors

<img src = "https://contrib.rocks/image?repo=vitoke/iternal"/>

Made with [contributors-img](https://contrib.rocks).

## License

Licensed under the MIT License, Copyright © 2020-present Arvid Nicolaas.

See [LICENSE](./LICENSE) for more information.