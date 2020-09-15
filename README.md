# React Fun With flags

OBS! This library is still under development and may change it's api without warning. Use at your own risk.

### Installation

```
npm install react-fun-with-flags
```

or

```
npm install react-fun-with-flags
```

### Usage

Add the `FlagProvider` to your `App`.

```jsx
import React from 'react';
import { FlagProvider } from 'react-fun-with-flags';

const flags = {
	fun: true,
	with: true,
	trains: false
}
<FlagProvider flags={flags}>
  {...}
</FlagProvider>
```

Then toggle your components with the help of the `Flag`, `FlagEnabled`, `FlagDisabled` components.

Example:

```jsx
import React from 'react';
import { FlagEnabled } from 'react-fun-with-flags';


const MyComponent = ({}) => (
  <div>
    <span>Hello</span>
    <FlagEnabled name="fun">
      <span>World</span>
    </FlagEnabled>
  </div>
);

export default MyComponent;
```
