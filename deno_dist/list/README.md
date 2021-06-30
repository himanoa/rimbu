<p align="center">
    <img src="../../assets/rimbu_logo.svg" />
</p>

# @rimbu/list

The List is an immutable ordered sequence of elements that can be manipulated and accessed randomly in a relatively efficient way.

For complete documentation please visit the _[Rimbu Docs](http://rimbu.org)_.

## Installation

All types are exported through [`@rimbu/core`](../core). It is recommended to use this package.

To install separately:

> `yarn add @rimbu/list`

or

> `npm i @rimbu/list`

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
import { List } from '@rimbu/list';

console.log(List.of(1, 3, 2, 4, 3, 1).toString());
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