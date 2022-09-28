const s = (e, r = void 0, n = void 0) => {
  let t = Number(e);
  return r && t < r ? t = r : n && t > n && (t = n), t;
};
function c(e) {
  throw new Error(
    `Unhandled discrimination union member: ${JSON.stringify(e)}`
  );
}
const i = (e, r) => {
  const n = new Promise(function(t) {
    t(r);
  });
  return typeof e == "function" && n.then(e), n;
}, u = (e, r) => {
  const n = new Promise(function(t, o) {
    o(r);
  });
  return typeof e == "function" && n.catch(e), n;
}, f = (e, r) => i(e, r);
export {
  c as assertNever,
  f as emptyPromise,
  s as ensureNumberBetween,
  u as errorPromise,
  i as successPromise
};
