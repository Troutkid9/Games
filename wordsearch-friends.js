"function" != typeof Math.rangeInt &&
  (Math.rangeInt = function (n, t) {
    return (
      void 0 == t && ((t = n), (n = 0)),
      Math.floor(Math.random() * (t - n + 1)) + n
    );
  }),
  "function" != typeof Object.merge &&
    (Object.merge = function (n, t) {
      for (var e in n) t[e] = n[e];
      return t;
    });
