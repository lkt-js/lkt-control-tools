import {assertNever, ensureNumberBetween} from '../src';

test('assertNever', () => {
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
        //@ts-ignore
        assertNever(value);
    }
    return false;
  };

  const test = () => {
    return fnKO(SampleEnum.ipsum);
  }
  expect(fnOK(SampleEnum.ipsum)).toEqual(true);
  expect(test).toThrowError();
});