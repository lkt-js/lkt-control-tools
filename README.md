# LKT Control Tools

## Functions

### assertNever

Assert all enum values are implemented in a switch.

| Arg         | Type | Description    |
|-------------|------|----------------|
| enumValue   | any  | Var to check   |

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

| Arg    | Type   | Description     |
|--------|--------|-----------------|
| number | number | Number to check |
| min    | number | Min value       |
| max    | number | Max value       |

#### Usage

```js
import {ensureNumberBetween} from "lkt-control-tools";

console.log(ensureNumberBetween(2, 1, 3)); // Will return 2
```

### successPromise

Returns a successful Promise instance

| Arg          | Type     | Description                                                               |
|--------------|----------|---------------------------------------------------------------------------|
| cb           | Function | Callback to execute on promise resolve                                    |
| resolveValue | any      | Value which will be resolved in the generated promise  |

#### Usage

```js
import {successPromise} from "lkt-control-tools";

let datum = 'lorem';

const fn = (data: any) => {
    datum = ['something', datum, data].join('-');
};

successPromise(fn, 'ipsum')
    .then(() => {
        console.log(datum); // something-lorem-ipsum
    });
```

### errorPromise

Returns a failed Promise instance

| Arg          | Type     | Description                                           |
|--------------|----------|-------------------------------------------------------|
| cb           | Function | Callback to execute on promise reject                 |
| resolveValue | any      | Value which will be resolved in the generated promise |

#### Usage

```js
import {errorPromise} from "lkt-control-tools";

let datum = 'lorem';

const fn = (data: any) => {
    datum = ['something', datum, data].join('-');
};

successPromise(fn, 'ipsum')
    .catch(() => {
        console.log(datum); // something-lorem-ipsum
    });
```