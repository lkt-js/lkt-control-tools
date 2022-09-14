# LKT Control Tools

## Functions

### assertNever

Assert all enum values are implemented in a switch.

#### Args
- enumValue <mixed>

#### Usage

```ts
import {assertNever} from "lkt-control-tools";

const enum SampleEnum {
    lorem = 'lorem',
    ipsum = 'ipsum'
} 

// Everything works fine
const fnOK = (value: SampleEnum): boolean => {
  switch (value) {
    case SampleEnum.lorem:
    case SampleEnum.ipsum:
      return true;
    default:
      assertNever(value);
  }
  return false;
};

// Bad code: won't compile
const fnKO = (value: SampleEnum): boolean => {
  switch (value) {
    case SampleEnum.lorem:
      return true;
    default:
      assertNever(value);
  }
  return false;
};
```

### ensureNumberBetween

Checks if a given number is between a min and a max value. If below, min will be returned. If it's above, max will be returned.

#### Args
- number <number>
- min <number>
- max <number>

#### Usage

```js
import {ensureNumberBetween} from "lkt-control-tools";

console.log(ensureNumberBetween(2, 1, 3)); // Will return 2
```