const i = (e, r = void 0, t = void 0) => {
  let n = Number(e);
  return r && n < r ? n = r : t && n > t && (n = t), n;
};
function o(e) {
  throw new Error(
    `Unhandled discrimination union member: ${JSON.stringify(e)}`
  );
}
const s = (e) => new Promise(function(r, t) {
  typeof e == "function" && e(), r(void 0);
});
export {
  o as assertNever,
  s as emptyPromise,
  i as ensureNumberBetween
};
