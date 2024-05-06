# useProxyState

`useProxyState` is a custom React hook that utilizes JavaScript Proxies to enable state management with automatic component re-rendering upon state mutation. This hook simplifies state management in React components by creating a proxy around the state object, allowing direct mutations while still triggering component updates.

## Installation

To install this hook into your React project, use npm or yarn as follows:

```sh
# npm
npm install use-proxy-state

# yarn
yarn add use-proxy-state

# pnpm
pnpm add use-proxy-state
```

## Usage

Import `useProxyState` from the package and use it within your functional React components just like you would use the standard `useState`.

```jsx
import React from 'react';
import useProxyState from 'use-proxy-state';

function App() {
  const state = useProxyState({ count: 0 });

  const increment = () => {
    state.count += 1; // Direct mutation
  };

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
```

## Features

- **Direct State Mutation**: Unlike `useState`, `useProxyState` allows you to mutate state properties directly and still triggers re-renders.
- **Easy to Use**: Integrates seamlessly with existing React applications and doesn't require changes in the component logic.
- **Performance**: Reduces the overhead of calling state setter functions, especially useful in performance-critical applications.

## API

### `useProxyState(initialState)`

Creates a proxy around the provided initial state that tracks mutations and triggers component updates.

**Parameters:**

- `initialState` (Object): The initial state object.

**Returns:**

- `Proxy<T>`: A proxy to the initial state that will trigger re-renders upon mutations.

## Contributing

Contributions to `useProxyState` are welcome. Please ensure that your contributions adhere to the coding standards and include appropriate tests. Fork the repository, make your changes, and submit a pull request.

## License

This project is dedicated to the public domain. See the [LICENSE](./LICENSE) file for the full text of the CC0 1.0 Universal (CC0 1.0) Public Domain Dedication.
