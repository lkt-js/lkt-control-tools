import { errorPromise, successPromise } from '../src';

test('raw Promise', () => {
  const promise = new Promise((resolve, reject) => {
    resolve(undefined);
  });

  expect(promise).toBeInstanceOf(Promise);
});

test('successPromise', () => {
  expect(successPromise()).toBeInstanceOf(Promise);

  const promise = successPromise(() => { return 1});

  expect(promise).toBeInstanceOf(Promise);

  const promise2 = successPromise(() => { return 1}, 'magic-word');

  let dataFromThenFn: any = null;

  const thenFn = (data: any) => {
    dataFromThenFn = data;
  }

  expect(promise2.then(thenFn).then(() => {
    expect(dataFromThenFn).toEqual('magic-word');
  })).toBeInstanceOf(Promise);
});

test('successPromise 2', () => {
  const promise = successPromise(null, 1);
  promise.then((n: number) => {
    return n + 1;
  }).then((n: number) => {
    return n + 1;
  }).then((n: number) => {
    expect(n).toEqual(3);
  });

});

test('successPromise - readme sample', () => {
  let datum = 'lorem';

  const fn = (data: any) => {
    datum = ['something', datum, data].join('-');
  };

  successPromise(fn, 'ipsum')
    .then(() => {
      datum = [datum, 'ipsum'].join('-');
    })
    .then(() => {
      expect(datum).toEqual('something-lorem-ipsum-ipsum');
    });
});

test('successPromise - readme sample simplified', () => {
  let datum = 'lorem';

  const fn = (data: any) => {
    datum = ['something', datum, data].join('-');
  };

  successPromise(fn, 'ipsum')
    .then(() => {
      expect(datum).toEqual('something-lorem-ipsum');
    });
});

test('errorPromise', () => {
  let datum: any = 'test-word'
  errorPromise().catch(v => {datum = v}).then(() => {
    expect(datum).toEqual(undefined);
  });
});

test('errorPromise converted into successPromise', () => {
  let datum: any = 'test-word'
  errorPromise().catch((datum) => {return successPromise(null, datum)}).then(v => {datum = v}).then(() => {
    expect(datum).toEqual(undefined);
  });
});