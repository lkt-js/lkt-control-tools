const i = (e, r = void 0, n = void 0) => {
    let t = Number(e);
    return r && t < r ? t = r : n && t > n && (t = n), t;
}, c = (e) => {
    throw new Error(`Unhandled discrimination union member: ${JSON.stringify(e)}`);
}, s = (e, r) => {
    const n = new Promise(function (t) {
        t(r);
    });
    return typeof e == "function" && n.then(e), n;
}, u = (e, r) => {
    const n = new Promise(function (t, o) {
        o(r);
    });
    return typeof e == "function" && n.catch(e), n;
}, f = (e, r) => s(e, r);
export { c as assertNever, f as emptyPromise, i as ensureNumberBetween, u as errorPromise, s as successPromise };
