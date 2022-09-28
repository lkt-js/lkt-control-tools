export declare const ensureNumberBetween: (n: number, min?: number | undefined, max?: number | undefined) => number;
export declare function assertNever(value: never): never;
export declare const successPromise: (fn?: any, resolveValue?: any) => Promise<unknown>;
export declare const errorPromise: (fn?: any, resolveValue?: any) => Promise<unknown>;
/**
 * @deprecated
 * @param fn
 * @param resolveValue
 */
export declare const emptyPromise: (fn?: any, resolveValue?: any) => Promise<unknown>;
