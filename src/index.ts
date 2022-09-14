export const ensureNumberBetween = (
    n: number,
    min: number | undefined = undefined,
    max: number | undefined = undefined
): number => {
  let r = Number(n);

  if (min && r < min) {
    r = min;
  } else if (max && r > max) {
    r = max;
  }

  return r;
};

export function assertNever(value: never): never {
  throw new Error(
      `Unhandled discrimination union member: ${JSON.stringify(value)}`
  );
}

export const emptyPromise = (cb?: any) => {
  return new Promise(function (resolve, reject) {
    if (typeof cb === 'function') {
      cb();
    }
    resolve(undefined);
  });
};