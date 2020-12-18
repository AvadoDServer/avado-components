# avado-components

> AVADO style components

[![NPM](https://img.shields.io/npm/v/avado-components.svg)](https://www.npmjs.com/package/avado-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


# running the styleguide

`yarn`

`yarn styleguide`

then open `http://localhost:6060/`

## Install

```bash
npm install --save avado-components
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'avado-components'
import 'avado-components/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

## Development

In this repo
` npm link`

In other repo
`npm link avado-components`


## License

MIT © [sponnet](https://github.com/sponnet)
