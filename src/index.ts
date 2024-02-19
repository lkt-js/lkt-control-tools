const ensureNumberBetween = (
    n: number,
    min: number | undefined = undefined,
    max: number | undefined = undefined
): number => {
    let r = Number(n);
    if (min && r < min) r = min;
    else if (max && r > max) r = max;
    return r;
};

const assertNever = (value: never): never => {
    throw new Error(
        `Unhandled discrimination union member: ${JSON.stringify(value)}`
    );
}

const successPromise = (fn?: any, resolveValue?: any) => {
    const r = new Promise(function (resolve) {
        resolve(resolveValue);
    });

    if (typeof fn === 'function') r.then(fn);
    return r;
};

const errorPromise = (fn?: any, resolveValue?: any) => {
    const r = new Promise(function (_, reject) {
        reject(resolveValue);
    });

    if (typeof fn === 'function') r.catch(fn);
    return r;
};

/** @deprecated */
const emptyPromise = (fn?: any, resolveValue?: any) => {
    return successPromise(fn, resolveValue);
};

export {
    ensureNumberBetween,
    assertNever,
    successPromise,
    errorPromise,
    emptyPromise,
}