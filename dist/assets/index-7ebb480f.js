var Xd = Object.defineProperty;
var Zd = (e, t, n) =>
  t in e
    ? Xd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Nu = (e, t, n) => (Zd(e, typeof t != 'symbol' ? t + '' : t, n), n);
function Jd(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const l in r)
        if (l !== 'default' && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  );
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === 'childList')
        for (const i of o.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : l.crossOrigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function qd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var rc = { exports: {} },
  xo = {},
  lc = { exports: {} },
  H = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ul = Symbol.for('react.element'),
  bd = Symbol.for('react.portal'),
  ep = Symbol.for('react.fragment'),
  tp = Symbol.for('react.strict_mode'),
  np = Symbol.for('react.profiler'),
  rp = Symbol.for('react.provider'),
  lp = Symbol.for('react.context'),
  op = Symbol.for('react.forward_ref'),
  ip = Symbol.for('react.suspense'),
  ap = Symbol.for('react.memo'),
  up = Symbol.for('react.lazy'),
  Lu = Symbol.iterator;
function sp(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Lu && e[Lu]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var oc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ic = Object.assign,
  ac = {};
function rr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ac),
    (this.updater = n || oc);
}
rr.prototype.isReactComponent = {};
rr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
rr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function uc() {}
uc.prototype = rr.prototype;
function Sa(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ac),
    (this.updater = n || oc);
}
var xa = (Sa.prototype = new uc());
xa.constructor = Sa;
ic(xa, rr.prototype);
xa.isPureReactComponent = !0;
var Tu = Array.isArray,
  sc = Object.prototype.hasOwnProperty,
  Ea = { current: null },
  cc = { key: !0, ref: !0, __self: !0, __source: !0 };
function fc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      sc.call(t, r) && !cc.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: ul,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Ea.current,
  };
}
function cp(e, t) {
  return {
    $$typeof: ul,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ka(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === ul;
}
function fp(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ju = /\/+/g;
function Yo(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? fp('' + e.key)
    : t.toString(36);
}
function Ol(e, t, n, r, l) {
  var o = typeof e;
  (o === 'undefined' || o === 'boolean') && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case 'string':
      case 'number':
        i = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case ul:
          case bd:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === '' ? '.' + Yo(i, 0) : r),
      Tu(l)
        ? ((n = ''),
          e != null && (n = e.replace(ju, '$&/') + '/'),
          Ol(l, t, n, '', function (s) {
            return s;
          }))
        : l != null &&
          (ka(l) &&
            (l = cp(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ''
                  : ('' + l.key).replace(ju, '$&/') + '/') +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === '' ? '.' : r + ':'), Tu(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var u = r + Yo(o, a);
      i += Ol(o, t, n, u, l);
    }
  else if (((u = sp(e)), typeof u == 'function'))
    for (e = u.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + Yo(o, a++)), (i += Ol(o, t, n, u, l));
  else if (o === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return i;
}
function gl(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Ol(e, r, '', '', function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function dp(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var De = { current: null },
  Fl = { transition: null },
  pp = {
    ReactCurrentDispatcher: De,
    ReactCurrentBatchConfig: Fl,
    ReactCurrentOwner: Ea,
  };
H.Children = {
  map: gl,
  forEach: function (e, t, n) {
    gl(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      gl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      gl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ka(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
H.Component = rr;
H.Fragment = ep;
H.Profiler = np;
H.PureComponent = Sa;
H.StrictMode = tp;
H.Suspense = ip;
H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pp;
H.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = ic({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Ea.current)),
      t.key !== void 0 && (l = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      sc.call(t, u) &&
        !cc.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
    r.children = a;
  }
  return { $$typeof: ul, type: e.type, key: l, ref: o, props: r, _owner: i };
};
H.createContext = function (e) {
  return (
    (e = {
      $$typeof: lp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: rp, _context: e }),
    (e.Consumer = e)
  );
};
H.createElement = fc;
H.createFactory = function (e) {
  var t = fc.bind(null, e);
  return (t.type = e), t;
};
H.createRef = function () {
  return { current: null };
};
H.forwardRef = function (e) {
  return { $$typeof: op, render: e };
};
H.isValidElement = ka;
H.lazy = function (e) {
  return { $$typeof: up, _payload: { _status: -1, _result: e }, _init: dp };
};
H.memo = function (e, t) {
  return { $$typeof: ap, type: e, compare: t === void 0 ? null : t };
};
H.startTransition = function (e) {
  var t = Fl.transition;
  Fl.transition = {};
  try {
    e();
  } finally {
    Fl.transition = t;
  }
};
H.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
H.useCallback = function (e, t) {
  return De.current.useCallback(e, t);
};
H.useContext = function (e) {
  return De.current.useContext(e);
};
H.useDebugValue = function () {};
H.useDeferredValue = function (e) {
  return De.current.useDeferredValue(e);
};
H.useEffect = function (e, t) {
  return De.current.useEffect(e, t);
};
H.useId = function () {
  return De.current.useId();
};
H.useImperativeHandle = function (e, t, n) {
  return De.current.useImperativeHandle(e, t, n);
};
H.useInsertionEffect = function (e, t) {
  return De.current.useInsertionEffect(e, t);
};
H.useLayoutEffect = function (e, t) {
  return De.current.useLayoutEffect(e, t);
};
H.useMemo = function (e, t) {
  return De.current.useMemo(e, t);
};
H.useReducer = function (e, t, n) {
  return De.current.useReducer(e, t, n);
};
H.useRef = function (e) {
  return De.current.useRef(e);
};
H.useState = function (e) {
  return De.current.useState(e);
};
H.useSyncExternalStore = function (e, t, n) {
  return De.current.useSyncExternalStore(e, t, n);
};
H.useTransition = function () {
  return De.current.useTransition();
};
H.version = '18.2.0';
lc.exports = H;
var k = lc.exports;
const dc = qd(k),
  hp = Jd({ __proto__: null, default: dc }, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mp = k,
  vp = Symbol.for('react.element'),
  gp = Symbol.for('react.fragment'),
  yp = Object.prototype.hasOwnProperty,
  wp = mp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Sp = { key: !0, ref: !0, __self: !0, __source: !0 };
function pc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) yp.call(t, r) && !Sp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: vp,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: wp.current,
  };
}
xo.Fragment = gp;
xo.jsx = pc;
xo.jsxs = pc;
rc.exports = xo;
var R = rc.exports,
  Ei = {},
  hc = { exports: {} },
  Qe = {},
  mc = { exports: {} },
  vc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(j, U) {
    var B = j.length;
    j.push(U);
    e: for (; 0 < B; ) {
      var X = (B - 1) >>> 1,
        q = j[X];
      if (0 < l(q, U)) (j[X] = U), (j[B] = q), (B = X);
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var U = j[0],
      B = j.pop();
    if (B !== U) {
      j[0] = B;
      e: for (var X = 0, q = j.length, Ye = q >>> 1; X < Ye; ) {
        var Te = 2 * (X + 1) - 1,
          ln = j[Te],
          gt = Te + 1,
          _n = j[gt];
        if (0 > l(ln, B))
          gt < q && 0 > l(_n, ln)
            ? ((j[X] = _n), (j[gt] = B), (X = gt))
            : ((j[X] = ln), (j[Te] = B), (X = Te));
        else if (gt < q && 0 > l(_n, B)) (j[X] = _n), (j[gt] = B), (X = gt);
        else break e;
      }
    }
    return U;
  }
  function l(j, U) {
    var B = j.sortIndex - U.sortIndex;
    return B !== 0 ? B : j.id - U.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      a = i.now();
    e.unstable_now = function () {
      return i.now() - a;
    };
  }
  var u = [],
    s = [],
    p = 1,
    v = null,
    m = 3,
    x = !1,
    y = !1,
    w = !1,
    N = typeof setTimeout == 'function' ? setTimeout : null,
    d = typeof clearTimeout == 'function' ? clearTimeout : null,
    f = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(j) {
    for (var U = n(s); U !== null; ) {
      if (U.callback === null) r(s);
      else if (U.startTime <= j)
        r(s), (U.sortIndex = U.expirationTime), t(u, U);
      else break;
      U = n(s);
    }
  }
  function c(j) {
    if (((w = !1), h(j), !y))
      if (n(u) !== null) (y = !0), Mt(E);
      else {
        var U = n(s);
        U !== null && vt(c, U.startTime - j);
      }
  }
  function E(j, U) {
    (y = !1), w && ((w = !1), d(T), (T = -1)), (x = !0);
    var B = m;
    try {
      for (
        h(U), v = n(u);
        v !== null && (!(v.expirationTime > U) || (j && !re()));

      ) {
        var X = v.callback;
        if (typeof X == 'function') {
          (v.callback = null), (m = v.priorityLevel);
          var q = X(v.expirationTime <= U);
          (U = e.unstable_now()),
            typeof q == 'function' ? (v.callback = q) : v === n(u) && r(u),
            h(U);
        } else r(u);
        v = n(u);
      }
      if (v !== null) var Ye = !0;
      else {
        var Te = n(s);
        Te !== null && vt(c, Te.startTime - U), (Ye = !1);
      }
      return Ye;
    } finally {
      (v = null), (m = B), (x = !1);
    }
  }
  var L = !1,
    P = null,
    T = -1,
    $ = 5,
    F = -1;
  function re() {
    return !(e.unstable_now() - F < $);
  }
  function Le() {
    if (P !== null) {
      var j = e.unstable_now();
      F = j;
      var U = !0;
      try {
        U = P(!0, j);
      } finally {
        U ? ct() : ((L = !1), (P = null));
      }
    } else L = !1;
  }
  var ct;
  if (typeof f == 'function')
    ct = function () {
      f(Le);
    };
  else if (typeof MessageChannel < 'u') {
    var rn = new MessageChannel(),
      ue = rn.port2;
    (rn.port1.onmessage = Le),
      (ct = function () {
        ue.postMessage(null);
      });
  } else
    ct = function () {
      N(Le, 0);
    };
  function Mt(j) {
    (P = j), L || ((L = !0), ct());
  }
  function vt(j, U) {
    T = N(function () {
      j(e.unstable_now());
    }, U);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || x || ((y = !0), Mt(E));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : ($ = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (j) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var U = 3;
          break;
        default:
          U = m;
      }
      var B = m;
      m = U;
      try {
        return j();
      } finally {
        m = B;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, U) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var B = m;
      m = j;
      try {
        return U();
      } finally {
        m = B;
      }
    }),
    (e.unstable_scheduleCallback = function (j, U, B) {
      var X = e.unstable_now();
      switch (
        (typeof B == 'object' && B !== null
          ? ((B = B.delay), (B = typeof B == 'number' && 0 < B ? X + B : X))
          : (B = X),
        j)
      ) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return (
        (q = B + q),
        (j = {
          id: p++,
          callback: U,
          priorityLevel: j,
          startTime: B,
          expirationTime: q,
          sortIndex: -1,
        }),
        B > X
          ? ((j.sortIndex = B),
            t(s, j),
            n(u) === null &&
              j === n(s) &&
              (w ? (d(T), (T = -1)) : (w = !0), vt(c, B - X)))
          : ((j.sortIndex = q), t(u, j), y || x || ((y = !0), Mt(E))),
        j
      );
    }),
    (e.unstable_shouldYield = re),
    (e.unstable_wrapCallback = function (j) {
      var U = m;
      return function () {
        var B = m;
        m = U;
        try {
          return j.apply(this, arguments);
        } finally {
          m = B;
        }
      };
    });
})(vc);
mc.exports = vc;
var xp = mc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gc = k,
  He = xp;
function _(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var yc = new Set(),
  Vr = {};
function Pn(e, t) {
  Zn(e, t), Zn(e + 'Capture', t);
}
function Zn(e, t) {
  for (Vr[e] = t, e = 0; e < t.length; e++) yc.add(t[e]);
}
var Pt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  ki = Object.prototype.hasOwnProperty,
  Ep =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Mu = {},
  Du = {};
function kp(e) {
  return ki.call(Du, e)
    ? !0
    : ki.call(Mu, e)
    ? !1
    : Ep.test(e)
    ? (Du[e] = !0)
    : ((Mu[e] = !0), !1);
}
function Cp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function Pp(e, t, n, r) {
  if (t === null || typeof t > 'u' || Cp(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ze(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var Ce = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Ce[e] = new ze(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  Ce[t] = new ze(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Ce[e] = new ze(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  Ce[e] = new ze(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Ce[e] = new ze(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Ce[e] = new ze(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  Ce[e] = new ze(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Ce[e] = new ze(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  Ce[e] = new ze(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ca = /[\-:]([a-z])/g;
function Pa(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Ca, Pa);
    Ce[t] = new ze(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Ca, Pa);
    Ce[t] = new ze(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Ca, Pa);
  Ce[t] = new ze(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  Ce[e] = new ze(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ce.xlinkHref = new ze(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Ce[e] = new ze(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ra(e, t, n, r) {
  var l = Ce.hasOwnProperty(t) ? Ce[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (Pp(t, n, l, r) && (n = null),
    r || l === null
      ? kp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Lt = gc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  yl = Symbol.for('react.element'),
  Tn = Symbol.for('react.portal'),
  jn = Symbol.for('react.fragment'),
  _a = Symbol.for('react.strict_mode'),
  Ci = Symbol.for('react.profiler'),
  wc = Symbol.for('react.provider'),
  Sc = Symbol.for('react.context'),
  Na = Symbol.for('react.forward_ref'),
  Pi = Symbol.for('react.suspense'),
  Ri = Symbol.for('react.suspense_list'),
  La = Symbol.for('react.memo'),
  It = Symbol.for('react.lazy'),
  xc = Symbol.for('react.offscreen'),
  zu = Symbol.iterator;
function mr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (zu && e[zu]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var ae = Object.assign,
  Go;
function _r(e) {
  if (Go === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Go = (t && t[1]) || '';
    }
  return (
    `
` +
    Go +
    e
  );
}
var Xo = !1;
function Zo(e, t) {
  if (!e || Xo) return '';
  Xo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == 'string') {
      for (
        var l = s.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          a = o.length - 1;
        1 <= i && 0 <= a && l[i] !== o[a];

      )
        a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (l[i] !== o[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || l[i] !== o[a])) {
                var u =
                  `
` + l[i].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    u.includes('<anonymous>') &&
                    (u = u.replace('<anonymous>', e.displayName)),
                  u
                );
              }
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    (Xo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? _r(e) : '';
}
function Rp(e) {
  switch (e.tag) {
    case 5:
      return _r(e.type);
    case 16:
      return _r('Lazy');
    case 13:
      return _r('Suspense');
    case 19:
      return _r('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Zo(e.type, !1)), e;
    case 11:
      return (e = Zo(e.type.render, !1)), e;
    case 1:
      return (e = Zo(e.type, !0)), e;
    default:
      return '';
  }
}
function _i(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case jn:
      return 'Fragment';
    case Tn:
      return 'Portal';
    case Ci:
      return 'Profiler';
    case _a:
      return 'StrictMode';
    case Pi:
      return 'Suspense';
    case Ri:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Sc:
        return (e.displayName || 'Context') + '.Consumer';
      case wc:
        return (e._context.displayName || 'Context') + '.Provider';
      case Na:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case La:
        return (
          (t = e.displayName || null), t !== null ? t : _i(e.type) || 'Memo'
        );
      case It:
        (t = e._payload), (e = e._init);
        try {
          return _i(e(t));
        } catch {}
    }
  return null;
}
function _p(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return _i(t);
    case 8:
      return t === _a ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function qt(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Ec(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function Np(e) {
  var t = Ec(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = '' + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = '' + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function wl(e) {
  e._valueTracker || (e._valueTracker = Np(e));
}
function kc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = Ec(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Yl(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ni(e, t) {
  var n = t.checked;
  return ae({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ou(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = qt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function Cc(e, t) {
  (t = t.checked), t != null && Ra(e, 'checked', t, !1);
}
function Li(e, t) {
  Cc(e, t);
  var n = qt(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? Ti(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Ti(e, t.type, qt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Fu(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function Ti(e, t, n) {
  (t !== 'number' || Yl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Nr = Array.isArray;
function Wn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + qt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ji(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
  return ae({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Uu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(_(92));
      if (Nr(n)) {
        if (1 < n.length) throw Error(_(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: qt(n) };
}
function Pc(e, t) {
  var n = qt(t.value),
    r = qt(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Iu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Rc(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Mi(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Rc(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var Sl,
  _c = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        Sl = Sl || document.createElement('div'),
          Sl.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Sl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Wr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var jr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Lp = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(jr).forEach(function (e) {
  Lp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (jr[t] = jr[e]);
  });
});
function Nc(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (jr.hasOwnProperty(e) && jr[e])
    ? ('' + t).trim()
    : t + 'px';
}
function Lc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        l = Nc(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Tp = ae(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Di(e, t) {
  if (t) {
    if (Tp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(_(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(_(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(_(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(_(62));
  }
}
function zi(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var Oi = null;
function Ta(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Fi = null,
  Hn = null,
  Qn = null;
function Au(e) {
  if ((e = fl(e))) {
    if (typeof Fi != 'function') throw Error(_(280));
    var t = e.stateNode;
    t && ((t = Ro(t)), Fi(e.stateNode, e.type, t));
  }
}
function Tc(e) {
  Hn ? (Qn ? Qn.push(e) : (Qn = [e])) : (Hn = e);
}
function jc() {
  if (Hn) {
    var e = Hn,
      t = Qn;
    if (((Qn = Hn = null), Au(e), t)) for (e = 0; e < t.length; e++) Au(t[e]);
  }
}
function Mc(e, t) {
  return e(t);
}
function Dc() {}
var Jo = !1;
function zc(e, t, n) {
  if (Jo) return e(t, n);
  Jo = !0;
  try {
    return Mc(e, t, n);
  } finally {
    (Jo = !1), (Hn !== null || Qn !== null) && (Dc(), jc());
  }
}
function Hr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ro(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(_(231, t, typeof n));
  return n;
}
var Ui = !1;
if (Pt)
  try {
    var vr = {};
    Object.defineProperty(vr, 'passive', {
      get: function () {
        Ui = !0;
      },
    }),
      window.addEventListener('test', vr, vr),
      window.removeEventListener('test', vr, vr);
  } catch {
    Ui = !1;
  }
function jp(e, t, n, r, l, o, i, a, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (p) {
    this.onError(p);
  }
}
var Mr = !1,
  Gl = null,
  Xl = !1,
  Ii = null,
  Mp = {
    onError: function (e) {
      (Mr = !0), (Gl = e);
    },
  };
function Dp(e, t, n, r, l, o, i, a, u) {
  (Mr = !1), (Gl = null), jp.apply(Mp, arguments);
}
function zp(e, t, n, r, l, o, i, a, u) {
  if ((Dp.apply(this, arguments), Mr)) {
    if (Mr) {
      var s = Gl;
      (Mr = !1), (Gl = null);
    } else throw Error(_(198));
    Xl || ((Xl = !0), (Ii = s));
  }
}
function Rn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Oc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Bu(e) {
  if (Rn(e) !== e) throw Error(_(188));
}
function Op(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Rn(e)), t === null)) throw Error(_(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Bu(l), e;
        if (o === r) return Bu(l), t;
        o = o.sibling;
      }
      throw Error(_(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, a = l.child; a; ) {
        if (a === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (a === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = o.child; a; ) {
          if (a === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (a === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(_(189));
      }
    }
    if (n.alternate !== r) throw Error(_(190));
  }
  if (n.tag !== 3) throw Error(_(188));
  return n.stateNode.current === n ? e : t;
}
function Fc(e) {
  return (e = Op(e)), e !== null ? Uc(e) : null;
}
function Uc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Uc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ic = He.unstable_scheduleCallback,
  $u = He.unstable_cancelCallback,
  Fp = He.unstable_shouldYield,
  Up = He.unstable_requestPaint,
  he = He.unstable_now,
  Ip = He.unstable_getCurrentPriorityLevel,
  ja = He.unstable_ImmediatePriority,
  Ac = He.unstable_UserBlockingPriority,
  Zl = He.unstable_NormalPriority,
  Ap = He.unstable_LowPriority,
  Bc = He.unstable_IdlePriority,
  Eo = null,
  ht = null;
function Bp(e) {
  if (ht && typeof ht.onCommitFiberRoot == 'function')
    try {
      ht.onCommitFiberRoot(Eo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var at = Math.clz32 ? Math.clz32 : Wp,
  $p = Math.log,
  Vp = Math.LN2;
function Wp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - (($p(e) / Vp) | 0)) | 0;
}
var xl = 64,
  El = 4194304;
function Lr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Jl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~l;
    a !== 0 ? (r = Lr(a)) : ((o &= i), o !== 0 && (r = Lr(o)));
  } else (i = n & ~l), i !== 0 ? (r = Lr(i)) : o !== 0 && (r = Lr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - at(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Hp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Qp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - at(o),
      a = 1 << i,
      u = l[i];
    u === -1
      ? (!(a & n) || a & r) && (l[i] = Hp(a, t))
      : u <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function Ai(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function $c() {
  var e = xl;
  return (xl <<= 1), !(xl & 4194240) && (xl = 64), e;
}
function qo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function sl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - at(t)),
    (e[t] = n);
}
function Kp(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - at(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Ma(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - at(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var Y = 0;
function Vc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Wc,
  Da,
  Hc,
  Qc,
  Kc,
  Bi = !1,
  kl = [],
  Ht = null,
  Qt = null,
  Kt = null,
  Qr = new Map(),
  Kr = new Map(),
  Bt = [],
  Yp =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function Vu(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Ht = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Qt = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Kt = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Qr.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Kr.delete(t.pointerId);
  }
}
function gr(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = fl(t)), t !== null && Da(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Gp(e, t, n, r, l) {
  switch (t) {
    case 'focusin':
      return (Ht = gr(Ht, e, t, n, r, l)), !0;
    case 'dragenter':
      return (Qt = gr(Qt, e, t, n, r, l)), !0;
    case 'mouseover':
      return (Kt = gr(Kt, e, t, n, r, l)), !0;
    case 'pointerover':
      var o = l.pointerId;
      return Qr.set(o, gr(Qr.get(o) || null, e, t, n, r, l)), !0;
    case 'gotpointercapture':
      return (
        (o = l.pointerId), Kr.set(o, gr(Kr.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Yc(e) {
  var t = dn(e.target);
  if (t !== null) {
    var n = Rn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Oc(n)), t !== null)) {
          (e.blockedOn = t),
            Kc(e.priority, function () {
              Hc(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ul(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = $i(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Oi = r), n.target.dispatchEvent(r), (Oi = null);
    } else return (t = fl(n)), t !== null && Da(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Wu(e, t, n) {
  Ul(e) && n.delete(t);
}
function Xp() {
  (Bi = !1),
    Ht !== null && Ul(Ht) && (Ht = null),
    Qt !== null && Ul(Qt) && (Qt = null),
    Kt !== null && Ul(Kt) && (Kt = null),
    Qr.forEach(Wu),
    Kr.forEach(Wu);
}
function yr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Bi ||
      ((Bi = !0),
      He.unstable_scheduleCallback(He.unstable_NormalPriority, Xp)));
}
function Yr(e) {
  function t(l) {
    return yr(l, e);
  }
  if (0 < kl.length) {
    yr(kl[0], e);
    for (var n = 1; n < kl.length; n++) {
      var r = kl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ht !== null && yr(Ht, e),
      Qt !== null && yr(Qt, e),
      Kt !== null && yr(Kt, e),
      Qr.forEach(t),
      Kr.forEach(t),
      n = 0;
    n < Bt.length;
    n++
  )
    (r = Bt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Bt.length && ((n = Bt[0]), n.blockedOn === null); )
    Yc(n), n.blockedOn === null && Bt.shift();
}
var Kn = Lt.ReactCurrentBatchConfig,
  ql = !0;
function Zp(e, t, n, r) {
  var l = Y,
    o = Kn.transition;
  Kn.transition = null;
  try {
    (Y = 1), za(e, t, n, r);
  } finally {
    (Y = l), (Kn.transition = o);
  }
}
function Jp(e, t, n, r) {
  var l = Y,
    o = Kn.transition;
  Kn.transition = null;
  try {
    (Y = 4), za(e, t, n, r);
  } finally {
    (Y = l), (Kn.transition = o);
  }
}
function za(e, t, n, r) {
  if (ql) {
    var l = $i(e, t, n, r);
    if (l === null) ui(e, t, r, bl, n), Vu(e, r);
    else if (Gp(l, e, t, n, r)) r.stopPropagation();
    else if ((Vu(e, r), t & 4 && -1 < Yp.indexOf(e))) {
      for (; l !== null; ) {
        var o = fl(l);
        if (
          (o !== null && Wc(o),
          (o = $i(e, t, n, r)),
          o === null && ui(e, t, r, bl, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else ui(e, t, r, null, n);
  }
}
var bl = null;
function $i(e, t, n, r) {
  if (((bl = null), (e = Ta(r)), (e = dn(e)), e !== null))
    if (((t = Rn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Oc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (bl = e), null;
}
function Gc(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (Ip()) {
        case ja:
          return 1;
        case Ac:
          return 4;
        case Zl:
        case Ap:
          return 16;
        case Bc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Vt = null,
  Oa = null,
  Il = null;
function Xc() {
  if (Il) return Il;
  var e,
    t = Oa,
    n = t.length,
    r,
    l = 'value' in Vt ? Vt.value : Vt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Il = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Al(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Cl() {
  return !0;
}
function Hu() {
  return !1;
}
function Ke(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Cl
        : Hu),
      (this.isPropagationStopped = Hu),
      this
    );
  }
  return (
    ae(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Cl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Cl));
      },
      persist: function () {},
      isPersistent: Cl,
    }),
    t
  );
}
var lr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Fa = Ke(lr),
  cl = ae({}, lr, { view: 0, detail: 0 }),
  qp = Ke(cl),
  bo,
  ei,
  wr,
  ko = ae({}, cl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ua,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== wr &&
            (wr && e.type === 'mousemove'
              ? ((bo = e.screenX - wr.screenX), (ei = e.screenY - wr.screenY))
              : (ei = bo = 0),
            (wr = e)),
          bo);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : ei;
    },
  }),
  Qu = Ke(ko),
  bp = ae({}, ko, { dataTransfer: 0 }),
  eh = Ke(bp),
  th = ae({}, cl, { relatedTarget: 0 }),
  ti = Ke(th),
  nh = ae({}, lr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  rh = Ke(nh),
  lh = ae({}, lr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  oh = Ke(lh),
  ih = ae({}, lr, { data: 0 }),
  Ku = Ke(ih),
  ah = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  uh = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  sh = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function ch(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = sh[e]) ? !!t[e] : !1;
}
function Ua() {
  return ch;
}
var fh = ae({}, cl, {
    key: function (e) {
      if (e.key) {
        var t = ah[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Al(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? uh[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ua,
    charCode: function (e) {
      return e.type === 'keypress' ? Al(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Al(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  dh = Ke(fh),
  ph = ae({}, ko, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Yu = Ke(ph),
  hh = ae({}, cl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ua,
  }),
  mh = Ke(hh),
  vh = ae({}, lr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  gh = Ke(vh),
  yh = ae({}, ko, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  wh = Ke(yh),
  Sh = [9, 13, 27, 32],
  Ia = Pt && 'CompositionEvent' in window,
  Dr = null;
Pt && 'documentMode' in document && (Dr = document.documentMode);
var xh = Pt && 'TextEvent' in window && !Dr,
  Zc = Pt && (!Ia || (Dr && 8 < Dr && 11 >= Dr)),
  Gu = String.fromCharCode(32),
  Xu = !1;
function Jc(e, t) {
  switch (e) {
    case 'keyup':
      return Sh.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function qc(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Mn = !1;
function Eh(e, t) {
  switch (e) {
    case 'compositionend':
      return qc(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Xu = !0), Gu);
    case 'textInput':
      return (e = t.data), e === Gu && Xu ? null : e;
    default:
      return null;
  }
}
function kh(e, t) {
  if (Mn)
    return e === 'compositionend' || (!Ia && Jc(e, t))
      ? ((e = Xc()), (Il = Oa = Vt = null), (Mn = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return Zc && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var Ch = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Zu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!Ch[e.type] : t === 'textarea';
}
function bc(e, t, n, r) {
  Tc(r),
    (t = eo(t, 'onChange')),
    0 < t.length &&
      ((n = new Fa('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var zr = null,
  Gr = null;
function Ph(e) {
  ff(e, 0);
}
function Co(e) {
  var t = On(e);
  if (kc(t)) return e;
}
function Rh(e, t) {
  if (e === 'change') return t;
}
var ef = !1;
if (Pt) {
  var ni;
  if (Pt) {
    var ri = 'oninput' in document;
    if (!ri) {
      var Ju = document.createElement('div');
      Ju.setAttribute('oninput', 'return;'),
        (ri = typeof Ju.oninput == 'function');
    }
    ni = ri;
  } else ni = !1;
  ef = ni && (!document.documentMode || 9 < document.documentMode);
}
function qu() {
  zr && (zr.detachEvent('onpropertychange', tf), (Gr = zr = null));
}
function tf(e) {
  if (e.propertyName === 'value' && Co(Gr)) {
    var t = [];
    bc(t, Gr, e, Ta(e)), zc(Ph, t);
  }
}
function _h(e, t, n) {
  e === 'focusin'
    ? (qu(), (zr = t), (Gr = n), zr.attachEvent('onpropertychange', tf))
    : e === 'focusout' && qu();
}
function Nh(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return Co(Gr);
}
function Lh(e, t) {
  if (e === 'click') return Co(t);
}
function Th(e, t) {
  if (e === 'input' || e === 'change') return Co(t);
}
function jh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var st = typeof Object.is == 'function' ? Object.is : jh;
function Xr(e, t) {
  if (st(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ki.call(t, l) || !st(e[l], t[l])) return !1;
  }
  return !0;
}
function bu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function es(e, t) {
  var n = bu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = bu(n);
  }
}
function nf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? nf(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function rf() {
  for (var e = window, t = Yl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Yl(e.document);
  }
  return t;
}
function Aa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function Mh(e) {
  var t = rf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    nf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Aa(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = es(n, o));
        var i = es(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Dh = Pt && 'documentMode' in document && 11 >= document.documentMode,
  Dn = null,
  Vi = null,
  Or = null,
  Wi = !1;
function ts(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Wi ||
    Dn == null ||
    Dn !== Yl(r) ||
    ((r = Dn),
    'selectionStart' in r && Aa(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Or && Xr(Or, r)) ||
      ((Or = r),
      (r = eo(Vi, 'onSelect')),
      0 < r.length &&
        ((t = new Fa('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Dn))));
}
function Pl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var zn = {
    animationend: Pl('Animation', 'AnimationEnd'),
    animationiteration: Pl('Animation', 'AnimationIteration'),
    animationstart: Pl('Animation', 'AnimationStart'),
    transitionend: Pl('Transition', 'TransitionEnd'),
  },
  li = {},
  lf = {};
Pt &&
  ((lf = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete zn.animationend.animation,
    delete zn.animationiteration.animation,
    delete zn.animationstart.animation),
  'TransitionEvent' in window || delete zn.transitionend.transition);
function Po(e) {
  if (li[e]) return li[e];
  if (!zn[e]) return e;
  var t = zn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in lf) return (li[e] = t[n]);
  return e;
}
var of = Po('animationend'),
  af = Po('animationiteration'),
  uf = Po('animationstart'),
  sf = Po('transitionend'),
  cf = new Map(),
  ns =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function en(e, t) {
  cf.set(e, t), Pn(t, [e]);
}
for (var oi = 0; oi < ns.length; oi++) {
  var ii = ns[oi],
    zh = ii.toLowerCase(),
    Oh = ii[0].toUpperCase() + ii.slice(1);
  en(zh, 'on' + Oh);
}
en(of, 'onAnimationEnd');
en(af, 'onAnimationIteration');
en(uf, 'onAnimationStart');
en('dblclick', 'onDoubleClick');
en('focusin', 'onFocus');
en('focusout', 'onBlur');
en(sf, 'onTransitionEnd');
Zn('onMouseEnter', ['mouseout', 'mouseover']);
Zn('onMouseLeave', ['mouseout', 'mouseover']);
Zn('onPointerEnter', ['pointerout', 'pointerover']);
Zn('onPointerLeave', ['pointerout', 'pointerover']);
Pn(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
Pn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
Pn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Pn(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
Pn(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
Pn(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var Tr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Fh = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Tr));
function rs(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), zp(r, t, void 0, e), (e.currentTarget = null);
}
function ff(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            u = a.instance,
            s = a.currentTarget;
          if (((a = a.listener), u !== o && l.isPropagationStopped())) break e;
          rs(l, a, s), (o = u);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]),
            (u = a.instance),
            (s = a.currentTarget),
            (a = a.listener),
            u !== o && l.isPropagationStopped())
          )
            break e;
          rs(l, a, s), (o = u);
        }
    }
  }
  if (Xl) throw ((e = Ii), (Xl = !1), (Ii = null), e);
}
function ee(e, t) {
  var n = t[Gi];
  n === void 0 && (n = t[Gi] = new Set());
  var r = e + '__bubble';
  n.has(r) || (df(t, e, 2, !1), n.add(r));
}
function ai(e, t, n) {
  var r = 0;
  t && (r |= 4), df(n, e, r, t);
}
var Rl = '_reactListening' + Math.random().toString(36).slice(2);
function Zr(e) {
  if (!e[Rl]) {
    (e[Rl] = !0),
      yc.forEach(function (n) {
        n !== 'selectionchange' && (Fh.has(n) || ai(n, !1, e), ai(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Rl] || ((t[Rl] = !0), ai('selectionchange', !1, t));
  }
}
function df(e, t, n, r) {
  switch (Gc(t)) {
    case 1:
      var l = Zp;
      break;
    case 4:
      l = Jp;
      break;
    default:
      l = za;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Ui ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function ui(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var u = i.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = i.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; a !== null; ) {
          if (((i = dn(a)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = o = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  zc(function () {
    var s = o,
      p = Ta(n),
      v = [];
    e: {
      var m = cf.get(e);
      if (m !== void 0) {
        var x = Fa,
          y = e;
        switch (e) {
          case 'keypress':
            if (Al(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            x = dh;
            break;
          case 'focusin':
            (y = 'focus'), (x = ti);
            break;
          case 'focusout':
            (y = 'blur'), (x = ti);
            break;
          case 'beforeblur':
          case 'afterblur':
            x = ti;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            x = Qu;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            x = eh;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            x = mh;
            break;
          case of:
          case af:
          case uf:
            x = rh;
            break;
          case sf:
            x = gh;
            break;
          case 'scroll':
            x = qp;
            break;
          case 'wheel':
            x = wh;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            x = oh;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            x = Yu;
        }
        var w = (t & 4) !== 0,
          N = !w && e === 'scroll',
          d = w ? (m !== null ? m + 'Capture' : null) : m;
        w = [];
        for (var f = s, h; f !== null; ) {
          h = f;
          var c = h.stateNode;
          if (
            (h.tag === 5 &&
              c !== null &&
              ((h = c),
              d !== null && ((c = Hr(f, d)), c != null && w.push(Jr(f, c, h)))),
            N)
          )
            break;
          f = f.return;
        }
        0 < w.length &&
          ((m = new x(m, y, null, n, p)), v.push({ event: m, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === 'mouseover' || e === 'pointerover'),
          (x = e === 'mouseout' || e === 'pointerout'),
          m &&
            n !== Oi &&
            (y = n.relatedTarget || n.fromElement) &&
            (dn(y) || y[Rt]))
        )
          break e;
        if (
          (x || m) &&
          ((m =
            p.window === p
              ? p
              : (m = p.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          x
            ? ((y = n.relatedTarget || n.toElement),
              (x = s),
              (y = y ? dn(y) : null),
              y !== null &&
                ((N = Rn(y)), y !== N || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((x = null), (y = s)),
          x !== y)
        ) {
          if (
            ((w = Qu),
            (c = 'onMouseLeave'),
            (d = 'onMouseEnter'),
            (f = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((w = Yu),
              (c = 'onPointerLeave'),
              (d = 'onPointerEnter'),
              (f = 'pointer')),
            (N = x == null ? m : On(x)),
            (h = y == null ? m : On(y)),
            (m = new w(c, f + 'leave', x, n, p)),
            (m.target = N),
            (m.relatedTarget = h),
            (c = null),
            dn(p) === s &&
              ((w = new w(d, f + 'enter', y, n, p)),
              (w.target = h),
              (w.relatedTarget = N),
              (c = w)),
            (N = c),
            x && y)
          )
            t: {
              for (w = x, d = y, f = 0, h = w; h; h = Nn(h)) f++;
              for (h = 0, c = d; c; c = Nn(c)) h++;
              for (; 0 < f - h; ) (w = Nn(w)), f--;
              for (; 0 < h - f; ) (d = Nn(d)), h--;
              for (; f--; ) {
                if (w === d || (d !== null && w === d.alternate)) break t;
                (w = Nn(w)), (d = Nn(d));
              }
              w = null;
            }
          else w = null;
          x !== null && ls(v, m, x, w, !1),
            y !== null && N !== null && ls(v, N, y, w, !0);
        }
      }
      e: {
        if (
          ((m = s ? On(s) : window),
          (x = m.nodeName && m.nodeName.toLowerCase()),
          x === 'select' || (x === 'input' && m.type === 'file'))
        )
          var E = Rh;
        else if (Zu(m))
          if (ef) E = Th;
          else {
            E = Nh;
            var L = _h;
          }
        else
          (x = m.nodeName) &&
            x.toLowerCase() === 'input' &&
            (m.type === 'checkbox' || m.type === 'radio') &&
            (E = Lh);
        if (E && (E = E(e, s))) {
          bc(v, E, n, p);
          break e;
        }
        L && L(e, m, s),
          e === 'focusout' &&
            (L = m._wrapperState) &&
            L.controlled &&
            m.type === 'number' &&
            Ti(m, 'number', m.value);
      }
      switch (((L = s ? On(s) : window), e)) {
        case 'focusin':
          (Zu(L) || L.contentEditable === 'true') &&
            ((Dn = L), (Vi = s), (Or = null));
          break;
        case 'focusout':
          Or = Vi = Dn = null;
          break;
        case 'mousedown':
          Wi = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Wi = !1), ts(v, n, p);
          break;
        case 'selectionchange':
          if (Dh) break;
        case 'keydown':
        case 'keyup':
          ts(v, n, p);
      }
      var P;
      if (Ia)
        e: {
          switch (e) {
            case 'compositionstart':
              var T = 'onCompositionStart';
              break e;
            case 'compositionend':
              T = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              T = 'onCompositionUpdate';
              break e;
          }
          T = void 0;
        }
      else
        Mn
          ? Jc(e, n) && (T = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (T = 'onCompositionStart');
      T &&
        (Zc &&
          n.locale !== 'ko' &&
          (Mn || T !== 'onCompositionStart'
            ? T === 'onCompositionEnd' && Mn && (P = Xc())
            : ((Vt = p),
              (Oa = 'value' in Vt ? Vt.value : Vt.textContent),
              (Mn = !0))),
        (L = eo(s, T)),
        0 < L.length &&
          ((T = new Ku(T, e, null, n, p)),
          v.push({ event: T, listeners: L }),
          P ? (T.data = P) : ((P = qc(n)), P !== null && (T.data = P)))),
        (P = xh ? Eh(e, n) : kh(e, n)) &&
          ((s = eo(s, 'onBeforeInput')),
          0 < s.length &&
            ((p = new Ku('onBeforeInput', 'beforeinput', null, n, p)),
            v.push({ event: p, listeners: s }),
            (p.data = P)));
    }
    ff(v, t);
  });
}
function Jr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function eo(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Hr(e, n)),
      o != null && r.unshift(Jr(e, o, l)),
      (o = Hr(e, t)),
      o != null && r.push(Jr(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Nn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ls(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      s = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      s !== null &&
      ((a = s),
      l
        ? ((u = Hr(n, o)), u != null && i.unshift(Jr(n, u, a)))
        : l || ((u = Hr(n, o)), u != null && i.push(Jr(n, u, a)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Uh = /\r\n?/g,
  Ih = /\u0000|\uFFFD/g;
function os(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Uh,
      `
`
    )
    .replace(Ih, '');
}
function _l(e, t, n) {
  if (((t = os(t)), os(e) !== t && n)) throw Error(_(425));
}
function to() {}
var Hi = null,
  Qi = null;
function Ki(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Yi = typeof setTimeout == 'function' ? setTimeout : void 0,
  Ah = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  is = typeof Promise == 'function' ? Promise : void 0,
  Bh =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof is < 'u'
      ? function (e) {
          return is.resolve(null).then(e).catch($h);
        }
      : Yi;
function $h(e) {
  setTimeout(function () {
    throw e;
  });
}
function si(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(l), Yr(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = l;
  } while (n);
  Yr(t);
}
function Yt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function as(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var or = Math.random().toString(36).slice(2),
  pt = '__reactFiber$' + or,
  qr = '__reactProps$' + or,
  Rt = '__reactContainer$' + or,
  Gi = '__reactEvents$' + or,
  Vh = '__reactListeners$' + or,
  Wh = '__reactHandles$' + or;
function dn(e) {
  var t = e[pt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Rt] || n[pt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = as(e); e !== null; ) {
          if ((n = e[pt])) return n;
          e = as(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function fl(e) {
  return (
    (e = e[pt] || e[Rt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function On(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(_(33));
}
function Ro(e) {
  return e[qr] || null;
}
var Xi = [],
  Fn = -1;
function tn(e) {
  return { current: e };
}
function te(e) {
  0 > Fn || ((e.current = Xi[Fn]), (Xi[Fn] = null), Fn--);
}
function b(e, t) {
  Fn++, (Xi[Fn] = e.current), (e.current = t);
}
var bt = {},
  Ne = tn(bt),
  Ue = tn(!1),
  yn = bt;
function Jn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return bt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Ie(e) {
  return (e = e.childContextTypes), e != null;
}
function no() {
  te(Ue), te(Ne);
}
function us(e, t, n) {
  if (Ne.current !== bt) throw Error(_(168));
  b(Ne, t), b(Ue, n);
}
function pf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(_(108, _p(e) || 'Unknown', l));
  return ae({}, n, r);
}
function ro(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || bt),
    (yn = Ne.current),
    b(Ne, e),
    b(Ue, Ue.current),
    !0
  );
}
function ss(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(_(169));
  n
    ? ((e = pf(e, t, yn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      te(Ue),
      te(Ne),
      b(Ne, e))
    : te(Ue),
    b(Ue, n);
}
var St = null,
  _o = !1,
  ci = !1;
function hf(e) {
  St === null ? (St = [e]) : St.push(e);
}
function Hh(e) {
  (_o = !0), hf(e);
}
function nn() {
  if (!ci && St !== null) {
    ci = !0;
    var e = 0,
      t = Y;
    try {
      var n = St;
      for (Y = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (St = null), (_o = !1);
    } catch (l) {
      throw (St !== null && (St = St.slice(e + 1)), Ic(ja, nn), l);
    } finally {
      (Y = t), (ci = !1);
    }
  }
  return null;
}
var Un = [],
  In = 0,
  lo = null,
  oo = 0,
  Xe = [],
  Ze = 0,
  wn = null,
  xt = 1,
  Et = '';
function sn(e, t) {
  (Un[In++] = oo), (Un[In++] = lo), (lo = e), (oo = t);
}
function mf(e, t, n) {
  (Xe[Ze++] = xt), (Xe[Ze++] = Et), (Xe[Ze++] = wn), (wn = e);
  var r = xt;
  e = Et;
  var l = 32 - at(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - at(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (xt = (1 << (32 - at(t) + l)) | (n << l) | r),
      (Et = o + e);
  } else (xt = (1 << o) | (n << l) | r), (Et = e);
}
function Ba(e) {
  e.return !== null && (sn(e, 1), mf(e, 1, 0));
}
function $a(e) {
  for (; e === lo; )
    (lo = Un[--In]), (Un[In] = null), (oo = Un[--In]), (Un[In] = null);
  for (; e === wn; )
    (wn = Xe[--Ze]),
      (Xe[Ze] = null),
      (Et = Xe[--Ze]),
      (Xe[Ze] = null),
      (xt = Xe[--Ze]),
      (Xe[Ze] = null);
}
var We = null,
  Ve = null,
  ne = !1,
  it = null;
function vf(e, t) {
  var n = Je(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function cs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (We = e), (Ve = Yt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (We = e), (Ve = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = wn !== null ? { id: xt, overflow: Et } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Je(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (We = e),
            (Ve = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Zi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ji(e) {
  if (ne) {
    var t = Ve;
    if (t) {
      var n = t;
      if (!cs(e, t)) {
        if (Zi(e)) throw Error(_(418));
        t = Yt(n.nextSibling);
        var r = We;
        t && cs(e, t)
          ? vf(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ne = !1), (We = e));
      }
    } else {
      if (Zi(e)) throw Error(_(418));
      (e.flags = (e.flags & -4097) | 2), (ne = !1), (We = e);
    }
  }
}
function fs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  We = e;
}
function Nl(e) {
  if (e !== We) return !1;
  if (!ne) return fs(e), (ne = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Ki(e.type, e.memoizedProps))),
    t && (t = Ve))
  ) {
    if (Zi(e)) throw (gf(), Error(_(418)));
    for (; t; ) vf(e, t), (t = Yt(t.nextSibling));
  }
  if ((fs(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(_(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              Ve = Yt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      Ve = null;
    }
  } else Ve = We ? Yt(e.stateNode.nextSibling) : null;
  return !0;
}
function gf() {
  for (var e = Ve; e; ) e = Yt(e.nextSibling);
}
function qn() {
  (Ve = We = null), (ne = !1);
}
function Va(e) {
  it === null ? (it = [e]) : it.push(e);
}
var Qh = Lt.ReactCurrentBatchConfig;
function rt(e, t) {
  if (e && e.defaultProps) {
    (t = ae({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var io = tn(null),
  ao = null,
  An = null,
  Wa = null;
function Ha() {
  Wa = An = ao = null;
}
function Qa(e) {
  var t = io.current;
  te(io), (e._currentValue = t);
}
function qi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Yn(e, t) {
  (ao = e),
    (Wa = An = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Fe = !0), (e.firstContext = null));
}
function be(e) {
  var t = e._currentValue;
  if (Wa !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), An === null)) {
      if (ao === null) throw Error(_(308));
      (An = e), (ao.dependencies = { lanes: 0, firstContext: e });
    } else An = An.next = e;
  return t;
}
var pn = null;
function Ka(e) {
  pn === null ? (pn = [e]) : pn.push(e);
}
function yf(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Ka(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    _t(e, r)
  );
}
function _t(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var At = !1;
function Ya(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function wf(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function kt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Gt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), K & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      _t(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Ka(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    _t(e, n)
  );
}
function Bl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ma(e, n);
  }
}
function ds(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function uo(e, t, n, r) {
  var l = e.updateQueue;
  At = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a,
      s = u.next;
    (u.next = null), i === null ? (o = s) : (i.next = s), (i = u);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (a = p.lastBaseUpdate),
      a !== i &&
        (a === null ? (p.firstBaseUpdate = s) : (a.next = s),
        (p.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var v = l.baseState;
    (i = 0), (p = s = u = null), (a = o);
    do {
      var m = a.lane,
        x = a.eventTime;
      if ((r & m) === m) {
        p !== null &&
          (p = p.next =
            {
              eventTime: x,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var y = e,
            w = a;
          switch (((m = t), (x = n), w.tag)) {
            case 1:
              if (((y = w.payload), typeof y == 'function')) {
                v = y.call(x, v, m);
                break e;
              }
              v = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = w.payload),
                (m = typeof y == 'function' ? y.call(x, v, m) : y),
                m == null)
              )
                break e;
              v = ae({}, v, m);
              break e;
            case 2:
              At = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [a]) : m.push(a));
      } else
        (x = {
          eventTime: x,
          lane: m,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          p === null ? ((s = p = x), (u = v)) : (p = p.next = x),
          (i |= m);
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        (m = a),
          (a = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (p === null && (u = v),
      (l.baseState = u),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = p),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (xn |= i), (e.lanes = i), (e.memoizedState = v);
  }
}
function ps(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != 'function'))
          throw Error(_(191, l));
        l.call(r);
      }
    }
}
var Sf = new gc.Component().refs;
function bi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ae({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var No = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Rn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Me(),
      l = Zt(e),
      o = kt(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Gt(e, o, l)),
      t !== null && (ut(t, e, l, r), Bl(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Me(),
      l = Zt(e),
      o = kt(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Gt(e, o, l)),
      t !== null && (ut(t, e, l, r), Bl(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Me(),
      r = Zt(e),
      l = kt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Gt(e, l, r)),
      t !== null && (ut(t, e, r, n), Bl(t, e, r));
  },
};
function hs(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Xr(n, r) || !Xr(l, o)
      : !0
  );
}
function xf(e, t, n) {
  var r = !1,
    l = bt,
    o = t.contextType;
  return (
    typeof o == 'object' && o !== null
      ? (o = be(o))
      : ((l = Ie(t) ? yn : Ne.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Jn(e, l) : bt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = No),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function ms(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && No.enqueueReplaceState(t, t.state, null);
}
function ea(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Sf), Ya(e);
  var o = t.contextType;
  typeof o == 'object' && o !== null
    ? (l.context = be(o))
    : ((o = Ie(t) ? yn : Ne.current), (l.context = Jn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (bi(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function' ||
      (typeof l.UNSAFE_componentWillMount != 'function' &&
        typeof l.componentWillMount != 'function') ||
      ((t = l.state),
      typeof l.componentWillMount == 'function' && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == 'function' &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && No.enqueueReplaceState(l, l.state, null),
      uo(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Sr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(_(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(_(147, e));
      var l = r,
        o = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var a = l.refs;
            a === Sf && (a = l.refs = {}),
              i === null ? delete a[o] : (a[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != 'string') throw Error(_(284));
    if (!n._owner) throw Error(_(290, e));
  }
  return e;
}
function Ll(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      _(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function vs(e) {
  var t = e._init;
  return t(e._payload);
}
function Ef(e) {
  function t(d, f) {
    if (e) {
      var h = d.deletions;
      h === null ? ((d.deletions = [f]), (d.flags |= 16)) : h.push(f);
    }
  }
  function n(d, f) {
    if (!e) return null;
    for (; f !== null; ) t(d, f), (f = f.sibling);
    return null;
  }
  function r(d, f) {
    for (d = new Map(); f !== null; )
      f.key !== null ? d.set(f.key, f) : d.set(f.index, f), (f = f.sibling);
    return d;
  }
  function l(d, f) {
    return (d = Jt(d, f)), (d.index = 0), (d.sibling = null), d;
  }
  function o(d, f, h) {
    return (
      (d.index = h),
      e
        ? ((h = d.alternate),
          h !== null
            ? ((h = h.index), h < f ? ((d.flags |= 2), f) : h)
            : ((d.flags |= 2), f))
        : ((d.flags |= 1048576), f)
    );
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function a(d, f, h, c) {
    return f === null || f.tag !== 6
      ? ((f = gi(h, d.mode, c)), (f.return = d), f)
      : ((f = l(f, h)), (f.return = d), f);
  }
  function u(d, f, h, c) {
    var E = h.type;
    return E === jn
      ? p(d, f, h.props.children, c, h.key)
      : f !== null &&
        (f.elementType === E ||
          (typeof E == 'object' &&
            E !== null &&
            E.$$typeof === It &&
            vs(E) === f.type))
      ? ((c = l(f, h.props)), (c.ref = Sr(d, f, h)), (c.return = d), c)
      : ((c = Kl(h.type, h.key, h.props, null, d.mode, c)),
        (c.ref = Sr(d, f, h)),
        (c.return = d),
        c);
  }
  function s(d, f, h, c) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== h.containerInfo ||
      f.stateNode.implementation !== h.implementation
      ? ((f = yi(h, d.mode, c)), (f.return = d), f)
      : ((f = l(f, h.children || [])), (f.return = d), f);
  }
  function p(d, f, h, c, E) {
    return f === null || f.tag !== 7
      ? ((f = gn(h, d.mode, c, E)), (f.return = d), f)
      : ((f = l(f, h)), (f.return = d), f);
  }
  function v(d, f, h) {
    if ((typeof f == 'string' && f !== '') || typeof f == 'number')
      return (f = gi('' + f, d.mode, h)), (f.return = d), f;
    if (typeof f == 'object' && f !== null) {
      switch (f.$$typeof) {
        case yl:
          return (
            (h = Kl(f.type, f.key, f.props, null, d.mode, h)),
            (h.ref = Sr(d, null, f)),
            (h.return = d),
            h
          );
        case Tn:
          return (f = yi(f, d.mode, h)), (f.return = d), f;
        case It:
          var c = f._init;
          return v(d, c(f._payload), h);
      }
      if (Nr(f) || mr(f))
        return (f = gn(f, d.mode, h, null)), (f.return = d), f;
      Ll(d, f);
    }
    return null;
  }
  function m(d, f, h, c) {
    var E = f !== null ? f.key : null;
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return E !== null ? null : a(d, f, '' + h, c);
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case yl:
          return h.key === E ? u(d, f, h, c) : null;
        case Tn:
          return h.key === E ? s(d, f, h, c) : null;
        case It:
          return (E = h._init), m(d, f, E(h._payload), c);
      }
      if (Nr(h) || mr(h)) return E !== null ? null : p(d, f, h, c, null);
      Ll(d, h);
    }
    return null;
  }
  function x(d, f, h, c, E) {
    if ((typeof c == 'string' && c !== '') || typeof c == 'number')
      return (d = d.get(h) || null), a(f, d, '' + c, E);
    if (typeof c == 'object' && c !== null) {
      switch (c.$$typeof) {
        case yl:
          return (d = d.get(c.key === null ? h : c.key) || null), u(f, d, c, E);
        case Tn:
          return (d = d.get(c.key === null ? h : c.key) || null), s(f, d, c, E);
        case It:
          var L = c._init;
          return x(d, f, h, L(c._payload), E);
      }
      if (Nr(c) || mr(c)) return (d = d.get(h) || null), p(f, d, c, E, null);
      Ll(f, c);
    }
    return null;
  }
  function y(d, f, h, c) {
    for (
      var E = null, L = null, P = f, T = (f = 0), $ = null;
      P !== null && T < h.length;
      T++
    ) {
      P.index > T ? (($ = P), (P = null)) : ($ = P.sibling);
      var F = m(d, P, h[T], c);
      if (F === null) {
        P === null && (P = $);
        break;
      }
      e && P && F.alternate === null && t(d, P),
        (f = o(F, f, T)),
        L === null ? (E = F) : (L.sibling = F),
        (L = F),
        (P = $);
    }
    if (T === h.length) return n(d, P), ne && sn(d, T), E;
    if (P === null) {
      for (; T < h.length; T++)
        (P = v(d, h[T], c)),
          P !== null &&
            ((f = o(P, f, T)), L === null ? (E = P) : (L.sibling = P), (L = P));
      return ne && sn(d, T), E;
    }
    for (P = r(d, P); T < h.length; T++)
      ($ = x(P, d, T, h[T], c)),
        $ !== null &&
          (e && $.alternate !== null && P.delete($.key === null ? T : $.key),
          (f = o($, f, T)),
          L === null ? (E = $) : (L.sibling = $),
          (L = $));
    return (
      e &&
        P.forEach(function (re) {
          return t(d, re);
        }),
      ne && sn(d, T),
      E
    );
  }
  function w(d, f, h, c) {
    var E = mr(h);
    if (typeof E != 'function') throw Error(_(150));
    if (((h = E.call(h)), h == null)) throw Error(_(151));
    for (
      var L = (E = null), P = f, T = (f = 0), $ = null, F = h.next();
      P !== null && !F.done;
      T++, F = h.next()
    ) {
      P.index > T ? (($ = P), (P = null)) : ($ = P.sibling);
      var re = m(d, P, F.value, c);
      if (re === null) {
        P === null && (P = $);
        break;
      }
      e && P && re.alternate === null && t(d, P),
        (f = o(re, f, T)),
        L === null ? (E = re) : (L.sibling = re),
        (L = re),
        (P = $);
    }
    if (F.done) return n(d, P), ne && sn(d, T), E;
    if (P === null) {
      for (; !F.done; T++, F = h.next())
        (F = v(d, F.value, c)),
          F !== null &&
            ((f = o(F, f, T)), L === null ? (E = F) : (L.sibling = F), (L = F));
      return ne && sn(d, T), E;
    }
    for (P = r(d, P); !F.done; T++, F = h.next())
      (F = x(P, d, T, F.value, c)),
        F !== null &&
          (e && F.alternate !== null && P.delete(F.key === null ? T : F.key),
          (f = o(F, f, T)),
          L === null ? (E = F) : (L.sibling = F),
          (L = F));
    return (
      e &&
        P.forEach(function (Le) {
          return t(d, Le);
        }),
      ne && sn(d, T),
      E
    );
  }
  function N(d, f, h, c) {
    if (
      (typeof h == 'object' &&
        h !== null &&
        h.type === jn &&
        h.key === null &&
        (h = h.props.children),
      typeof h == 'object' && h !== null)
    ) {
      switch (h.$$typeof) {
        case yl:
          e: {
            for (var E = h.key, L = f; L !== null; ) {
              if (L.key === E) {
                if (((E = h.type), E === jn)) {
                  if (L.tag === 7) {
                    n(d, L.sibling),
                      (f = l(L, h.props.children)),
                      (f.return = d),
                      (d = f);
                    break e;
                  }
                } else if (
                  L.elementType === E ||
                  (typeof E == 'object' &&
                    E !== null &&
                    E.$$typeof === It &&
                    vs(E) === L.type)
                ) {
                  n(d, L.sibling),
                    (f = l(L, h.props)),
                    (f.ref = Sr(d, L, h)),
                    (f.return = d),
                    (d = f);
                  break e;
                }
                n(d, L);
                break;
              } else t(d, L);
              L = L.sibling;
            }
            h.type === jn
              ? ((f = gn(h.props.children, d.mode, c, h.key)),
                (f.return = d),
                (d = f))
              : ((c = Kl(h.type, h.key, h.props, null, d.mode, c)),
                (c.ref = Sr(d, f, h)),
                (c.return = d),
                (d = c));
          }
          return i(d);
        case Tn:
          e: {
            for (L = h.key; f !== null; ) {
              if (f.key === L)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === h.containerInfo &&
                  f.stateNode.implementation === h.implementation
                ) {
                  n(d, f.sibling),
                    (f = l(f, h.children || [])),
                    (f.return = d),
                    (d = f);
                  break e;
                } else {
                  n(d, f);
                  break;
                }
              else t(d, f);
              f = f.sibling;
            }
            (f = yi(h, d.mode, c)), (f.return = d), (d = f);
          }
          return i(d);
        case It:
          return (L = h._init), N(d, f, L(h._payload), c);
      }
      if (Nr(h)) return y(d, f, h, c);
      if (mr(h)) return w(d, f, h, c);
      Ll(d, h);
    }
    return (typeof h == 'string' && h !== '') || typeof h == 'number'
      ? ((h = '' + h),
        f !== null && f.tag === 6
          ? (n(d, f.sibling), (f = l(f, h)), (f.return = d), (d = f))
          : (n(d, f), (f = gi(h, d.mode, c)), (f.return = d), (d = f)),
        i(d))
      : n(d, f);
  }
  return N;
}
var bn = Ef(!0),
  kf = Ef(!1),
  dl = {},
  mt = tn(dl),
  br = tn(dl),
  el = tn(dl);
function hn(e) {
  if (e === dl) throw Error(_(174));
  return e;
}
function Ga(e, t) {
  switch ((b(el, t), b(br, e), b(mt, dl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Mi(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Mi(t, e));
  }
  te(mt), b(mt, t);
}
function er() {
  te(mt), te(br), te(el);
}
function Cf(e) {
  hn(el.current);
  var t = hn(mt.current),
    n = Mi(t, e.type);
  t !== n && (b(br, e), b(mt, n));
}
function Xa(e) {
  br.current === e && (te(mt), te(br));
}
var oe = tn(0);
function so(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var fi = [];
function Za() {
  for (var e = 0; e < fi.length; e++)
    fi[e]._workInProgressVersionPrimary = null;
  fi.length = 0;
}
var $l = Lt.ReactCurrentDispatcher,
  di = Lt.ReactCurrentBatchConfig,
  Sn = 0,
  ie = null,
  ye = null,
  Se = null,
  co = !1,
  Fr = !1,
  tl = 0,
  Kh = 0;
function Pe() {
  throw Error(_(321));
}
function Ja(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!st(e[n], t[n])) return !1;
  return !0;
}
function qa(e, t, n, r, l, o) {
  if (
    ((Sn = o),
    (ie = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    ($l.current = e === null || e.memoizedState === null ? Zh : Jh),
    (e = n(r, l)),
    Fr)
  ) {
    o = 0;
    do {
      if (((Fr = !1), (tl = 0), 25 <= o)) throw Error(_(301));
      (o += 1),
        (Se = ye = null),
        (t.updateQueue = null),
        ($l.current = qh),
        (e = n(r, l));
    } while (Fr);
  }
  if (
    (($l.current = fo),
    (t = ye !== null && ye.next !== null),
    (Sn = 0),
    (Se = ye = ie = null),
    (co = !1),
    t)
  )
    throw Error(_(300));
  return e;
}
function ba() {
  var e = tl !== 0;
  return (tl = 0), e;
}
function dt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Se === null ? (ie.memoizedState = Se = e) : (Se = Se.next = e), Se;
}
function et() {
  if (ye === null) {
    var e = ie.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ye.next;
  var t = Se === null ? ie.memoizedState : Se.next;
  if (t !== null) (Se = t), (ye = e);
  else {
    if (e === null) throw Error(_(310));
    (ye = e),
      (e = {
        memoizedState: ye.memoizedState,
        baseState: ye.baseState,
        baseQueue: ye.baseQueue,
        queue: ye.queue,
        next: null,
      }),
      Se === null ? (ie.memoizedState = Se = e) : (Se = Se.next = e);
  }
  return Se;
}
function nl(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function pi(e) {
  var t = et(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = ye,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var a = (i = null),
      u = null,
      s = o;
    do {
      var p = s.lane;
      if ((Sn & p) === p)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var v = {
          lane: p,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        u === null ? ((a = u = v), (i = r)) : (u = u.next = v),
          (ie.lanes |= p),
          (xn |= p);
      }
      s = s.next;
    } while (s !== null && s !== o);
    u === null ? (i = r) : (u.next = a),
      st(r, t.memoizedState) || (Fe = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (ie.lanes |= o), (xn |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function hi(e) {
  var t = et(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    st(o, t.memoizedState) || (Fe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Pf() {}
function Rf(e, t) {
  var n = ie,
    r = et(),
    l = t(),
    o = !st(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (Fe = !0)),
    (r = r.queue),
    eu(Lf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Se !== null && Se.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      rl(9, Nf.bind(null, n, r, l, t), void 0, null),
      xe === null)
    )
      throw Error(_(349));
    Sn & 30 || _f(n, t, l);
  }
  return l;
}
function _f(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ie.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ie.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Nf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Tf(t) && jf(e);
}
function Lf(e, t, n) {
  return n(function () {
    Tf(t) && jf(e);
  });
}
function Tf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !st(e, n);
  } catch {
    return !0;
  }
}
function jf(e) {
  var t = _t(e, 1);
  t !== null && ut(t, e, 1, -1);
}
function gs(e) {
  var t = dt();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: nl,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Xh.bind(null, ie, e)),
    [t.memoizedState, e]
  );
}
function rl(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ie.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ie.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Mf() {
  return et().memoizedState;
}
function Vl(e, t, n, r) {
  var l = dt();
  (ie.flags |= e),
    (l.memoizedState = rl(1 | t, n, void 0, r === void 0 ? null : r));
}
function Lo(e, t, n, r) {
  var l = et();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ye !== null) {
    var i = ye.memoizedState;
    if (((o = i.destroy), r !== null && Ja(r, i.deps))) {
      l.memoizedState = rl(t, n, o, r);
      return;
    }
  }
  (ie.flags |= e), (l.memoizedState = rl(1 | t, n, o, r));
}
function ys(e, t) {
  return Vl(8390656, 8, e, t);
}
function eu(e, t) {
  return Lo(2048, 8, e, t);
}
function Df(e, t) {
  return Lo(4, 2, e, t);
}
function zf(e, t) {
  return Lo(4, 4, e, t);
}
function Of(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Ff(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Lo(4, 4, Of.bind(null, t, e), n)
  );
}
function tu() {}
function Uf(e, t) {
  var n = et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ja(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function If(e, t) {
  var n = et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ja(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Af(e, t, n) {
  return Sn & 21
    ? (st(n, t) || ((n = $c()), (ie.lanes |= n), (xn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Fe = !0)), (e.memoizedState = n));
}
function Yh(e, t) {
  var n = Y;
  (Y = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = di.transition;
  di.transition = {};
  try {
    e(!1), t();
  } finally {
    (Y = n), (di.transition = r);
  }
}
function Bf() {
  return et().memoizedState;
}
function Gh(e, t, n) {
  var r = Zt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    $f(e))
  )
    Vf(t, n);
  else if (((n = yf(e, t, n, r)), n !== null)) {
    var l = Me();
    ut(n, e, r, l), Wf(n, t, r);
  }
}
function Xh(e, t, n) {
  var r = Zt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if ($f(e)) Vf(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          a = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), st(a, i))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), Ka(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = yf(e, t, l, r)),
      n !== null && ((l = Me()), ut(n, e, r, l), Wf(n, t, r));
  }
}
function $f(e) {
  var t = e.alternate;
  return e === ie || (t !== null && t === ie);
}
function Vf(e, t) {
  Fr = co = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Wf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ma(e, n);
  }
}
var fo = {
    readContext: be,
    useCallback: Pe,
    useContext: Pe,
    useEffect: Pe,
    useImperativeHandle: Pe,
    useInsertionEffect: Pe,
    useLayoutEffect: Pe,
    useMemo: Pe,
    useReducer: Pe,
    useRef: Pe,
    useState: Pe,
    useDebugValue: Pe,
    useDeferredValue: Pe,
    useTransition: Pe,
    useMutableSource: Pe,
    useSyncExternalStore: Pe,
    useId: Pe,
    unstable_isNewReconciler: !1,
  },
  Zh = {
    readContext: be,
    useCallback: function (e, t) {
      return (dt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: be,
    useEffect: ys,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Vl(4194308, 4, Of.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Vl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Vl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = dt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = dt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Gh.bind(null, ie, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = dt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: gs,
    useDebugValue: tu,
    useDeferredValue: function (e) {
      return (dt().memoizedState = e);
    },
    useTransition: function () {
      var e = gs(!1),
        t = e[0];
      return (e = Yh.bind(null, e[1])), (dt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ie,
        l = dt();
      if (ne) {
        if (n === void 0) throw Error(_(407));
        n = n();
      } else {
        if (((n = t()), xe === null)) throw Error(_(349));
        Sn & 30 || _f(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        ys(Lf.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        rl(9, Nf.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = dt(),
        t = xe.identifierPrefix;
      if (ne) {
        var n = Et,
          r = xt;
        (n = (r & ~(1 << (32 - at(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = tl++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Kh++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Jh = {
    readContext: be,
    useCallback: Uf,
    useContext: be,
    useEffect: eu,
    useImperativeHandle: Ff,
    useInsertionEffect: Df,
    useLayoutEffect: zf,
    useMemo: If,
    useReducer: pi,
    useRef: Mf,
    useState: function () {
      return pi(nl);
    },
    useDebugValue: tu,
    useDeferredValue: function (e) {
      var t = et();
      return Af(t, ye.memoizedState, e);
    },
    useTransition: function () {
      var e = pi(nl)[0],
        t = et().memoizedState;
      return [e, t];
    },
    useMutableSource: Pf,
    useSyncExternalStore: Rf,
    useId: Bf,
    unstable_isNewReconciler: !1,
  },
  qh = {
    readContext: be,
    useCallback: Uf,
    useContext: be,
    useEffect: eu,
    useImperativeHandle: Ff,
    useInsertionEffect: Df,
    useLayoutEffect: zf,
    useMemo: If,
    useReducer: hi,
    useRef: Mf,
    useState: function () {
      return hi(nl);
    },
    useDebugValue: tu,
    useDeferredValue: function (e) {
      var t = et();
      return ye === null ? (t.memoizedState = e) : Af(t, ye.memoizedState, e);
    },
    useTransition: function () {
      var e = hi(nl)[0],
        t = et().memoizedState;
      return [e, t];
    },
    useMutableSource: Pf,
    useSyncExternalStore: Rf,
    useId: Bf,
    unstable_isNewReconciler: !1,
  };
function tr(e, t) {
  try {
    var n = '',
      r = t;
    do (n += Rp(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function mi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ta(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var bh = typeof WeakMap == 'function' ? WeakMap : Map;
function Hf(e, t, n) {
  (n = kt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ho || ((ho = !0), (fa = r)), ta(e, t);
    }),
    n
  );
}
function Qf(e, t, n) {
  (n = kt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        ta(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        ta(e, t),
          typeof r != 'function' &&
            (Xt === null ? (Xt = new Set([this])) : Xt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : '',
        });
      }),
    n
  );
}
function ws(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new bh();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = pm.bind(null, e, t, n)), t.then(e, e));
}
function Ss(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function xs(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = kt(-1, 1)), (t.tag = 2), Gt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var em = Lt.ReactCurrentOwner,
  Fe = !1;
function je(e, t, n, r) {
  t.child = e === null ? kf(t, null, n, r) : bn(t, e.child, n, r);
}
function Es(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    Yn(t, l),
    (r = qa(e, t, n, r, o, l)),
    (n = ba()),
    e !== null && !Fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Nt(e, t, l))
      : (ne && n && Ba(t), (t.flags |= 1), je(e, t, r, l), t.child)
  );
}
function ks(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == 'function' &&
      !su(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Kf(e, t, o, r, l))
      : ((e = Kl(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Xr), n(i, r) && e.ref === t.ref)
    )
      return Nt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Jt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Kf(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Xr(o, r) && e.ref === t.ref)
      if (((Fe = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (Fe = !0);
      else return (t.lanes = e.lanes), Nt(e, t, l);
  }
  return na(e, t, n, r, l);
}
function Yf(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        b($n, Be),
        (Be |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          b($n, Be),
          (Be |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        b($n, Be),
        (Be |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      b($n, Be),
      (Be |= r);
  return je(e, t, l, n), t.child;
}
function Gf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function na(e, t, n, r, l) {
  var o = Ie(n) ? yn : Ne.current;
  return (
    (o = Jn(t, o)),
    Yn(t, l),
    (n = qa(e, t, n, r, o, l)),
    (r = ba()),
    e !== null && !Fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Nt(e, t, l))
      : (ne && r && Ba(t), (t.flags |= 1), je(e, t, n, l), t.child)
  );
}
function Cs(e, t, n, r, l) {
  if (Ie(n)) {
    var o = !0;
    ro(t);
  } else o = !1;
  if ((Yn(t, l), t.stateNode === null))
    Wl(e, t), xf(t, n, r), ea(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var u = i.context,
      s = n.contextType;
    typeof s == 'object' && s !== null
      ? (s = be(s))
      : ((s = Ie(n) ? yn : Ne.current), (s = Jn(t, s)));
    var p = n.getDerivedStateFromProps,
      v =
        typeof p == 'function' ||
        typeof i.getSnapshotBeforeUpdate == 'function';
    v ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((a !== r || u !== s) && ms(t, i, r, s)),
      (At = !1);
    var m = t.memoizedState;
    (i.state = m),
      uo(t, r, i, l),
      (u = t.memoizedState),
      a !== r || m !== u || Ue.current || At
        ? (typeof p == 'function' && (bi(t, n, p, r), (u = t.memoizedState)),
          (a = At || hs(t, n, a, r, m, u, s))
            ? (v ||
                (typeof i.UNSAFE_componentWillMount != 'function' &&
                  typeof i.componentWillMount != 'function') ||
                (typeof i.componentWillMount == 'function' &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == 'function' &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = s),
          (r = a))
        : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      wf(e, t),
      (a = t.memoizedProps),
      (s = t.type === t.elementType ? a : rt(t.type, a)),
      (i.props = s),
      (v = t.pendingProps),
      (m = i.context),
      (u = n.contextType),
      typeof u == 'object' && u !== null
        ? (u = be(u))
        : ((u = Ie(n) ? yn : Ne.current), (u = Jn(t, u)));
    var x = n.getDerivedStateFromProps;
    (p =
      typeof x == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function') ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((a !== v || m !== u) && ms(t, i, r, u)),
      (At = !1),
      (m = t.memoizedState),
      (i.state = m),
      uo(t, r, i, l);
    var y = t.memoizedState;
    a !== v || m !== y || Ue.current || At
      ? (typeof x == 'function' && (bi(t, n, x, r), (y = t.memoizedState)),
        (s = At || hs(t, n, s, r, m, y, u) || !1)
          ? (p ||
              (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                typeof i.componentWillUpdate != 'function') ||
              (typeof i.componentWillUpdate == 'function' &&
                i.componentWillUpdate(r, y, u),
              typeof i.UNSAFE_componentWillUpdate == 'function' &&
                i.UNSAFE_componentWillUpdate(r, y, u)),
            typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != 'function' ||
              (a === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != 'function' ||
              (a === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (i.props = r),
        (i.state = y),
        (i.context = u),
        (r = s))
      : (typeof i.componentDidUpdate != 'function' ||
          (a === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != 'function' ||
          (a === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ra(e, t, n, r, o, l);
}
function ra(e, t, n, r, l, o) {
  Gf(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && ss(t, n, !1), Nt(e, t, o);
  (r = t.stateNode), (em.current = t);
  var a =
    i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = bn(t, e.child, null, o)), (t.child = bn(t, null, a, o)))
      : je(e, t, a, o),
    (t.memoizedState = r.state),
    l && ss(t, n, !0),
    t.child
  );
}
function Xf(e) {
  var t = e.stateNode;
  t.pendingContext
    ? us(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && us(e, t.context, !1),
    Ga(e, t.containerInfo);
}
function Ps(e, t, n, r, l) {
  return qn(), Va(l), (t.flags |= 256), je(e, t, n, r), t.child;
}
var la = { dehydrated: null, treeContext: null, retryLane: 0 };
function oa(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Zf(e, t, n) {
  var r = t.pendingProps,
    l = oe.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    b(oe, l & 1),
    e === null)
  )
    return (
      Ji(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: 'hidden', children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Mo(i, r, 0, null)),
              (e = gn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = oa(n)),
              (t.memoizedState = la),
              e)
            : nu(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return tm(e, t, i, r, a, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (a = l.sibling);
    var u = { mode: 'hidden', children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Jt(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (o = Jt(a, o)) : ((o = gn(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? oa(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = la),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Jt(o, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function nu(e, t) {
  return (
    (t = Mo({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Tl(e, t, n, r) {
  return (
    r !== null && Va(r),
    bn(t, e.child, null, n),
    (e = nu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function tm(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = mi(Error(_(422)))), Tl(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = Mo({ mode: 'visible', children: r.children }, l, 0, null)),
        (o = gn(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && bn(t, e.child, null, i),
        (t.child.memoizedState = oa(i)),
        (t.memoizedState = la),
        o);
  if (!(t.mode & 1)) return Tl(e, t, i, null);
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(_(419))), (r = mi(o, r, void 0)), Tl(e, t, i, r);
  }
  if (((a = (i & e.childLanes) !== 0), Fe || a)) {
    if (((r = xe), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), _t(e, l), ut(r, e, l, -1));
    }
    return uu(), (r = mi(Error(_(421)))), Tl(e, t, i, r);
  }
  return l.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = hm.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ve = Yt(l.nextSibling)),
      (We = t),
      (ne = !0),
      (it = null),
      e !== null &&
        ((Xe[Ze++] = xt),
        (Xe[Ze++] = Et),
        (Xe[Ze++] = wn),
        (xt = e.id),
        (Et = e.overflow),
        (wn = t)),
      (t = nu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Rs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), qi(e.return, t, n);
}
function vi(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function Jf(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((je(e, t, r.children, n), (r = oe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Rs(e, n, t);
        else if (e.tag === 19) Rs(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((b(oe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case 'forwards':
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && so(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          vi(t, !1, l, n, o);
        break;
      case 'backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && so(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        vi(t, !0, n, null, o);
        break;
      case 'together':
        vi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Wl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Nt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (xn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(_(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Jt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Jt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function nm(e, t, n) {
  switch (t.tag) {
    case 3:
      Xf(t), qn();
      break;
    case 5:
      Cf(t);
      break;
    case 1:
      Ie(t.type) && ro(t);
      break;
    case 4:
      Ga(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      b(io, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (b(oe, oe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Zf(e, t, n)
          : (b(oe, oe.current & 1),
            (e = Nt(e, t, n)),
            e !== null ? e.sibling : null);
      b(oe, oe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Jf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        b(oe, oe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Yf(e, t, n);
  }
  return Nt(e, t, n);
}
var qf, ia, bf, ed;
qf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ia = function () {};
bf = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), hn(mt.current);
    var o = null;
    switch (n) {
      case 'input':
        (l = Ni(e, l)), (r = Ni(e, r)), (o = []);
        break;
      case 'select':
        (l = ae({}, l, { value: void 0 })),
          (r = ae({}, r, { value: void 0 })),
          (o = []);
        break;
      case 'textarea':
        (l = ji(e, l)), (r = ji(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = to);
    }
    Di(n, r);
    var i;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === 'style') {
          var a = l[s];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
        } else
          s !== 'dangerouslySetInnerHTML' &&
            s !== 'children' &&
            s !== 'suppressContentEditableWarning' &&
            s !== 'suppressHydrationWarning' &&
            s !== 'autoFocus' &&
            (Vr.hasOwnProperty(s)
              ? o || (o = [])
              : (o = o || []).push(s, null));
    for (s in r) {
      var u = r[s];
      if (
        ((a = l != null ? l[s] : void 0),
        r.hasOwnProperty(s) && u !== a && (u != null || a != null))
      )
        if (s === 'style')
          if (a) {
            for (i in a)
              !a.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ''));
            for (i in u)
              u.hasOwnProperty(i) &&
                a[i] !== u[i] &&
                (n || (n = {}), (n[i] = u[i]));
          } else n || (o || (o = []), o.push(s, n)), (n = u);
        else
          s === 'dangerouslySetInnerHTML'
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (o = o || []).push(s, u))
            : s === 'children'
            ? (typeof u != 'string' && typeof u != 'number') ||
              (o = o || []).push(s, '' + u)
            : s !== 'suppressContentEditableWarning' &&
              s !== 'suppressHydrationWarning' &&
              (Vr.hasOwnProperty(s)
                ? (u != null && s === 'onScroll' && ee('scroll', e),
                  o || a === u || (o = []))
                : (o = o || []).push(s, u));
    }
    n && (o = o || []).push('style', n);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
ed = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function xr(e, t) {
  if (!ne)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Re(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function rm(e, t, n) {
  var r = t.pendingProps;
  switch (($a(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Re(t), null;
    case 1:
      return Ie(t.type) && no(), Re(t), null;
    case 3:
      return (
        (r = t.stateNode),
        er(),
        te(Ue),
        te(Ne),
        Za(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Nl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), it !== null && (ha(it), (it = null)))),
        ia(e, t),
        Re(t),
        null
      );
    case 5:
      Xa(t);
      var l = hn(el.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        bf(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(_(166));
          return Re(t), null;
        }
        if (((e = hn(mt.current)), Nl(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[pt] = t), (r[qr] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              ee('cancel', r), ee('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              ee('load', r);
              break;
            case 'video':
            case 'audio':
              for (l = 0; l < Tr.length; l++) ee(Tr[l], r);
              break;
            case 'source':
              ee('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              ee('error', r), ee('load', r);
              break;
            case 'details':
              ee('toggle', r);
              break;
            case 'input':
              Ou(r, o), ee('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                ee('invalid', r);
              break;
            case 'textarea':
              Uu(r, o), ee('invalid', r);
          }
          Di(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var a = o[i];
              i === 'children'
                ? typeof a == 'string'
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      _l(r.textContent, a, e),
                    (l = ['children', a]))
                  : typeof a == 'number' &&
                    r.textContent !== '' + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      _l(r.textContent, a, e),
                    (l = ['children', '' + a]))
                : Vr.hasOwnProperty(i) &&
                  a != null &&
                  i === 'onScroll' &&
                  ee('scroll', r);
            }
          switch (n) {
            case 'input':
              wl(r), Fu(r, o, !0);
              break;
            case 'textarea':
              wl(r), Iu(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof o.onClick == 'function' && (r.onclick = to);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Rc(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = i.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === 'select' &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[pt] = t),
            (e[qr] = r),
            qf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = zi(n, r)), n)) {
              case 'dialog':
                ee('cancel', e), ee('close', e), (l = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                ee('load', e), (l = r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < Tr.length; l++) ee(Tr[l], e);
                l = r;
                break;
              case 'source':
                ee('error', e), (l = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                ee('error', e), ee('load', e), (l = r);
                break;
              case 'details':
                ee('toggle', e), (l = r);
                break;
              case 'input':
                Ou(e, r), (l = Ni(e, r)), ee('invalid', e);
                break;
              case 'option':
                l = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = ae({}, r, { value: void 0 })),
                  ee('invalid', e);
                break;
              case 'textarea':
                Uu(e, r), (l = ji(e, r)), ee('invalid', e);
                break;
              default:
                l = r;
            }
            Di(n, l), (a = l);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var u = a[o];
                o === 'style'
                  ? Lc(e, u)
                  : o === 'dangerouslySetInnerHTML'
                  ? ((u = u ? u.__html : void 0), u != null && _c(e, u))
                  : o === 'children'
                  ? typeof u == 'string'
                    ? (n !== 'textarea' || u !== '') && Wr(e, u)
                    : typeof u == 'number' && Wr(e, '' + u)
                  : o !== 'suppressContentEditableWarning' &&
                    o !== 'suppressHydrationWarning' &&
                    o !== 'autoFocus' &&
                    (Vr.hasOwnProperty(o)
                      ? u != null && o === 'onScroll' && ee('scroll', e)
                      : u != null && Ra(e, o, u, i));
              }
            switch (n) {
              case 'input':
                wl(e), Fu(e, r, !1);
                break;
              case 'textarea':
                wl(e), Iu(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + qt(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Wn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Wn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == 'function' && (e.onclick = to);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Re(t), null;
    case 6:
      if (e && t.stateNode != null) ed(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(_(166));
        if (((n = hn(el.current)), hn(mt.current), Nl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[pt] = t),
            (o = r.nodeValue !== n) && ((e = We), e !== null))
          )
            switch (e.tag) {
              case 3:
                _l(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  _l(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[pt] = t),
            (t.stateNode = r);
      }
      return Re(t), null;
    case 13:
      if (
        (te(oe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ne && Ve !== null && t.mode & 1 && !(t.flags & 128))
          gf(), qn(), (t.flags |= 98560), (o = !1);
        else if (((o = Nl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(_(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(_(317));
            o[pt] = t;
          } else
            qn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Re(t), (o = !1);
        } else it !== null && (ha(it), (it = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || oe.current & 1 ? we === 0 && (we = 3) : uu())),
          t.updateQueue !== null && (t.flags |= 4),
          Re(t),
          null);
    case 4:
      return (
        er(), ia(e, t), e === null && Zr(t.stateNode.containerInfo), Re(t), null
      );
    case 10:
      return Qa(t.type._context), Re(t), null;
    case 17:
      return Ie(t.type) && no(), Re(t), null;
    case 19:
      if ((te(oe), (o = t.memoizedState), o === null)) return Re(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) xr(o, !1);
        else {
          if (we !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = so(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    xr(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return b(oe, (oe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            he() > nr &&
            ((t.flags |= 128), (r = !0), xr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = so(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              xr(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !i.alternate && !ne)
            )
              return Re(t), null;
          } else
            2 * he() - o.renderingStartTime > nr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), xr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = he()),
          (t.sibling = null),
          (n = oe.current),
          b(oe, r ? (n & 1) | 2 : n & 1),
          t)
        : (Re(t), null);
    case 22:
    case 23:
      return (
        au(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Be & 1073741824 && (Re(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Re(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(_(156, t.tag));
}
function lm(e, t) {
  switch (($a(t), t.tag)) {
    case 1:
      return (
        Ie(t.type) && no(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        er(),
        te(Ue),
        te(Ne),
        Za(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Xa(t), null;
    case 13:
      if (
        (te(oe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(_(340));
        qn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return te(oe), null;
    case 4:
      return er(), null;
    case 10:
      return Qa(t.type._context), null;
    case 22:
    case 23:
      return au(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var jl = !1,
  _e = !1,
  om = typeof WeakSet == 'function' ? WeakSet : Set,
  D = null;
function Bn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        se(e, t, r);
      }
    else n.current = null;
}
function aa(e, t, n) {
  try {
    n();
  } catch (r) {
    se(e, t, r);
  }
}
var _s = !1;
function im(e, t) {
  if (((Hi = ql), (e = rf()), Aa(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            a = -1,
            u = -1,
            s = 0,
            p = 0,
            v = e,
            m = null;
          t: for (;;) {
            for (
              var x;
              v !== n || (l !== 0 && v.nodeType !== 3) || (a = i + l),
                v !== o || (r !== 0 && v.nodeType !== 3) || (u = i + r),
                v.nodeType === 3 && (i += v.nodeValue.length),
                (x = v.firstChild) !== null;

            )
              (m = v), (v = x);
            for (;;) {
              if (v === e) break t;
              if (
                (m === n && ++s === l && (a = i),
                m === o && ++p === r && (u = i),
                (x = v.nextSibling) !== null)
              )
                break;
              (v = m), (m = v.parentNode);
            }
            v = x;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Qi = { focusedElem: e, selectionRange: n }, ql = !1, D = t; D !== null; )
    if (((t = D), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (D = e);
    else
      for (; D !== null; ) {
        t = D;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var w = y.memoizedProps,
                    N = y.memoizedState,
                    d = t.stateNode,
                    f = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : rt(t.type, w),
                      N
                    );
                  d.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = '')
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(_(163));
            }
        } catch (c) {
          se(t, t.return, c);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (D = e);
          break;
        }
        D = t.return;
      }
  return (y = _s), (_s = !1), y;
}
function Ur(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && aa(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function To(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ua(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function td(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), td(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[pt], delete t[qr], delete t[Gi], delete t[Vh], delete t[Wh])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function nd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ns(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || nd(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function sa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = to));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (sa(e, t, n), e = e.sibling; e !== null; ) sa(e, t, n), (e = e.sibling);
}
function ca(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ca(e, t, n), e = e.sibling; e !== null; ) ca(e, t, n), (e = e.sibling);
}
var Ee = null,
  lt = !1;
function Ft(e, t, n) {
  for (n = n.child; n !== null; ) rd(e, t, n), (n = n.sibling);
}
function rd(e, t, n) {
  if (ht && typeof ht.onCommitFiberUnmount == 'function')
    try {
      ht.onCommitFiberUnmount(Eo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      _e || Bn(n, t);
    case 6:
      var r = Ee,
        l = lt;
      (Ee = null),
        Ft(e, t, n),
        (Ee = r),
        (lt = l),
        Ee !== null &&
          (lt
            ? ((e = Ee),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ee.removeChild(n.stateNode));
      break;
    case 18:
      Ee !== null &&
        (lt
          ? ((e = Ee),
            (n = n.stateNode),
            e.nodeType === 8
              ? si(e.parentNode, n)
              : e.nodeType === 1 && si(e, n),
            Yr(e))
          : si(Ee, n.stateNode));
      break;
    case 4:
      (r = Ee),
        (l = lt),
        (Ee = n.stateNode.containerInfo),
        (lt = !0),
        Ft(e, t, n),
        (Ee = r),
        (lt = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !_e &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && aa(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      Ft(e, t, n);
      break;
    case 1:
      if (
        !_e &&
        (Bn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          se(n, t, a);
        }
      Ft(e, t, n);
      break;
    case 21:
      Ft(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((_e = (r = _e) || n.memoizedState !== null), Ft(e, t, n), (_e = r))
        : Ft(e, t, n);
      break;
    default:
      Ft(e, t, n);
  }
}
function Ls(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new om()),
      t.forEach(function (r) {
        var l = mm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function nt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          a = i;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ee = a.stateNode), (lt = !1);
              break e;
            case 3:
              (Ee = a.stateNode.containerInfo), (lt = !0);
              break e;
            case 4:
              (Ee = a.stateNode.containerInfo), (lt = !0);
              break e;
          }
          a = a.return;
        }
        if (Ee === null) throw Error(_(160));
        rd(o, i, l), (Ee = null), (lt = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (s) {
        se(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) ld(t, e), (t = t.sibling);
}
function ld(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((nt(t, e), ft(e), r & 4)) {
        try {
          Ur(3, e, e.return), To(3, e);
        } catch (w) {
          se(e, e.return, w);
        }
        try {
          Ur(5, e, e.return);
        } catch (w) {
          se(e, e.return, w);
        }
      }
      break;
    case 1:
      nt(t, e), ft(e), r & 512 && n !== null && Bn(n, n.return);
      break;
    case 5:
      if (
        (nt(t, e),
        ft(e),
        r & 512 && n !== null && Bn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Wr(l, '');
        } catch (w) {
          se(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === 'input' && o.type === 'radio' && o.name != null && Cc(l, o),
              zi(a, i);
            var s = zi(a, o);
            for (i = 0; i < u.length; i += 2) {
              var p = u[i],
                v = u[i + 1];
              p === 'style'
                ? Lc(l, v)
                : p === 'dangerouslySetInnerHTML'
                ? _c(l, v)
                : p === 'children'
                ? Wr(l, v)
                : Ra(l, p, v, s);
            }
            switch (a) {
              case 'input':
                Li(l, o);
                break;
              case 'textarea':
                Pc(l, o);
                break;
              case 'select':
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var x = o.value;
                x != null
                  ? Wn(l, !!o.multiple, x, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Wn(l, !!o.multiple, o.defaultValue, !0)
                      : Wn(l, !!o.multiple, o.multiple ? [] : '', !1));
            }
            l[qr] = o;
          } catch (w) {
            se(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((nt(t, e), ft(e), r & 4)) {
        if (e.stateNode === null) throw Error(_(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (w) {
          se(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (nt(t, e), ft(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Yr(t.containerInfo);
        } catch (w) {
          se(e, e.return, w);
        }
      break;
    case 4:
      nt(t, e), ft(e);
      break;
    case 13:
      nt(t, e),
        ft(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (ou = he())),
        r & 4 && Ls(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((_e = (s = _e) || p), nt(t, e), (_e = s)) : nt(t, e),
        ft(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !p && e.mode & 1)
        )
          for (D = e, p = e.child; p !== null; ) {
            for (v = D = p; D !== null; ) {
              switch (((m = D), (x = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ur(4, m, m.return);
                  break;
                case 1:
                  Bn(m, m.return);
                  var y = m.stateNode;
                  if (typeof y.componentWillUnmount == 'function') {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (w) {
                      se(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Bn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    js(v);
                    continue;
                  }
              }
              x !== null ? ((x.return = m), (D = x)) : js(v);
            }
            p = p.sibling;
          }
        e: for (p = null, v = e; ; ) {
          if (v.tag === 5) {
            if (p === null) {
              p = v;
              try {
                (l = v.stateNode),
                  s
                    ? ((o = l.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((a = v.stateNode),
                      (u = v.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty('display')
                          ? u.display
                          : null),
                      (a.style.display = Nc('display', i)));
              } catch (w) {
                se(e, e.return, w);
              }
            }
          } else if (v.tag === 6) {
            if (p === null)
              try {
                v.stateNode.nodeValue = s ? '' : v.memoizedProps;
              } catch (w) {
                se(e, e.return, w);
              }
          } else if (
            ((v.tag !== 22 && v.tag !== 23) ||
              v.memoizedState === null ||
              v === e) &&
            v.child !== null
          ) {
            (v.child.return = v), (v = v.child);
            continue;
          }
          if (v === e) break e;
          for (; v.sibling === null; ) {
            if (v.return === null || v.return === e) break e;
            p === v && (p = null), (v = v.return);
          }
          p === v && (p = null), (v.sibling.return = v.return), (v = v.sibling);
        }
      }
      break;
    case 19:
      nt(t, e), ft(e), r & 4 && Ls(e);
      break;
    case 21:
      break;
    default:
      nt(t, e), ft(e);
  }
}
function ft(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (nd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(_(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Wr(l, ''), (r.flags &= -33));
          var o = Ns(e);
          ca(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = Ns(e);
          sa(e, a, i);
          break;
        default:
          throw Error(_(161));
      }
    } catch (u) {
      se(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function am(e, t, n) {
  (D = e), od(e);
}
function od(e, t, n) {
  for (var r = (e.mode & 1) !== 0; D !== null; ) {
    var l = D,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || jl;
      if (!i) {
        var a = l.alternate,
          u = (a !== null && a.memoizedState !== null) || _e;
        a = jl;
        var s = _e;
        if (((jl = i), (_e = u) && !s))
          for (D = l; D !== null; )
            (i = D),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Ms(l)
                : u !== null
                ? ((u.return = i), (D = u))
                : Ms(l);
        for (; o !== null; ) (D = o), od(o), (o = o.sibling);
        (D = l), (jl = a), (_e = s);
      }
      Ts(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (D = o)) : Ts(e);
  }
}
function Ts(e) {
  for (; D !== null; ) {
    var t = D;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              _e || To(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !_e)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : rt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && ps(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ps(t, i, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    u.autoFocus && n.focus();
                    break;
                  case 'img':
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var p = s.memoizedState;
                  if (p !== null) {
                    var v = p.dehydrated;
                    v !== null && Yr(v);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(_(163));
          }
        _e || (t.flags & 512 && ua(t));
      } catch (m) {
        se(t, t.return, m);
      }
    }
    if (t === e) {
      D = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (D = n);
      break;
    }
    D = t.return;
  }
}
function js(e) {
  for (; D !== null; ) {
    var t = D;
    if (t === e) {
      D = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (D = n);
      break;
    }
    D = t.return;
  }
}
function Ms(e) {
  for (; D !== null; ) {
    var t = D;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            To(4, t);
          } catch (u) {
            se(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              se(t, l, u);
            }
          }
          var o = t.return;
          try {
            ua(t);
          } catch (u) {
            se(t, o, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ua(t);
          } catch (u) {
            se(t, i, u);
          }
      }
    } catch (u) {
      se(t, t.return, u);
    }
    if (t === e) {
      D = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (D = a);
      break;
    }
    D = t.return;
  }
}
var um = Math.ceil,
  po = Lt.ReactCurrentDispatcher,
  ru = Lt.ReactCurrentOwner,
  qe = Lt.ReactCurrentBatchConfig,
  K = 0,
  xe = null,
  ve = null,
  ke = 0,
  Be = 0,
  $n = tn(0),
  we = 0,
  ll = null,
  xn = 0,
  jo = 0,
  lu = 0,
  Ir = null,
  Oe = null,
  ou = 0,
  nr = 1 / 0,
  wt = null,
  ho = !1,
  fa = null,
  Xt = null,
  Ml = !1,
  Wt = null,
  mo = 0,
  Ar = 0,
  da = null,
  Hl = -1,
  Ql = 0;
function Me() {
  return K & 6 ? he() : Hl !== -1 ? Hl : (Hl = he());
}
function Zt(e) {
  return e.mode & 1
    ? K & 2 && ke !== 0
      ? ke & -ke
      : Qh.transition !== null
      ? (Ql === 0 && (Ql = $c()), Ql)
      : ((e = Y),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Gc(e.type))),
        e)
    : 1;
}
function ut(e, t, n, r) {
  if (50 < Ar) throw ((Ar = 0), (da = null), Error(_(185)));
  sl(e, n, r),
    (!(K & 2) || e !== xe) &&
      (e === xe && (!(K & 2) && (jo |= n), we === 4 && $t(e, ke)),
      Ae(e, r),
      n === 1 && K === 0 && !(t.mode & 1) && ((nr = he() + 500), _o && nn()));
}
function Ae(e, t) {
  var n = e.callbackNode;
  Qp(e, t);
  var r = Jl(e, e === xe ? ke : 0);
  if (r === 0)
    n !== null && $u(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && $u(n), t === 1))
      e.tag === 0 ? Hh(Ds.bind(null, e)) : hf(Ds.bind(null, e)),
        Bh(function () {
          !(K & 6) && nn();
        }),
        (n = null);
    else {
      switch (Vc(r)) {
        case 1:
          n = ja;
          break;
        case 4:
          n = Ac;
          break;
        case 16:
          n = Zl;
          break;
        case 536870912:
          n = Bc;
          break;
        default:
          n = Zl;
      }
      n = pd(n, id.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function id(e, t) {
  if (((Hl = -1), (Ql = 0), K & 6)) throw Error(_(327));
  var n = e.callbackNode;
  if (Gn() && e.callbackNode !== n) return null;
  var r = Jl(e, e === xe ? ke : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = vo(e, r);
  else {
    t = r;
    var l = K;
    K |= 2;
    var o = ud();
    (xe !== e || ke !== t) && ((wt = null), (nr = he() + 500), vn(e, t));
    do
      try {
        fm();
        break;
      } catch (a) {
        ad(e, a);
      }
    while (1);
    Ha(),
      (po.current = o),
      (K = l),
      ve !== null ? (t = 0) : ((xe = null), (ke = 0), (t = we));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Ai(e)), l !== 0 && ((r = l), (t = pa(e, l)))), t === 1)
    )
      throw ((n = ll), vn(e, 0), $t(e, r), Ae(e, he()), n);
    if (t === 6) $t(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !sm(l) &&
          ((t = vo(e, r)),
          t === 2 && ((o = Ai(e)), o !== 0 && ((r = o), (t = pa(e, o)))),
          t === 1))
      )
        throw ((n = ll), vn(e, 0), $t(e, r), Ae(e, he()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(_(345));
        case 2:
          cn(e, Oe, wt);
          break;
        case 3:
          if (
            ($t(e, r), (r & 130023424) === r && ((t = ou + 500 - he()), 10 < t))
          ) {
            if (Jl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Me(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Yi(cn.bind(null, e, Oe, wt), t);
            break;
          }
          cn(e, Oe, wt);
          break;
        case 4:
          if (($t(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - at(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = he() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * um(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Yi(cn.bind(null, e, Oe, wt), r);
            break;
          }
          cn(e, Oe, wt);
          break;
        case 5:
          cn(e, Oe, wt);
          break;
        default:
          throw Error(_(329));
      }
    }
  }
  return Ae(e, he()), e.callbackNode === n ? id.bind(null, e) : null;
}
function pa(e, t) {
  var n = Ir;
  return (
    e.current.memoizedState.isDehydrated && (vn(e, t).flags |= 256),
    (e = vo(e, t)),
    e !== 2 && ((t = Oe), (Oe = n), t !== null && ha(t)),
    e
  );
}
function ha(e) {
  Oe === null ? (Oe = e) : Oe.push.apply(Oe, e);
}
function sm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!st(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function $t(e, t) {
  for (
    t &= ~lu,
      t &= ~jo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - at(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ds(e) {
  if (K & 6) throw Error(_(327));
  Gn();
  var t = Jl(e, 0);
  if (!(t & 1)) return Ae(e, he()), null;
  var n = vo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ai(e);
    r !== 0 && ((t = r), (n = pa(e, r)));
  }
  if (n === 1) throw ((n = ll), vn(e, 0), $t(e, t), Ae(e, he()), n);
  if (n === 6) throw Error(_(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    cn(e, Oe, wt),
    Ae(e, he()),
    null
  );
}
function iu(e, t) {
  var n = K;
  K |= 1;
  try {
    return e(t);
  } finally {
    (K = n), K === 0 && ((nr = he() + 500), _o && nn());
  }
}
function En(e) {
  Wt !== null && Wt.tag === 0 && !(K & 6) && Gn();
  var t = K;
  K |= 1;
  var n = qe.transition,
    r = Y;
  try {
    if (((qe.transition = null), (Y = 1), e)) return e();
  } finally {
    (Y = r), (qe.transition = n), (K = t), !(K & 6) && nn();
  }
}
function au() {
  (Be = $n.current), te($n);
}
function vn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Ah(n)), ve !== null))
    for (n = ve.return; n !== null; ) {
      var r = n;
      switch (($a(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && no();
          break;
        case 3:
          er(), te(Ue), te(Ne), Za();
          break;
        case 5:
          Xa(r);
          break;
        case 4:
          er();
          break;
        case 13:
          te(oe);
          break;
        case 19:
          te(oe);
          break;
        case 10:
          Qa(r.type._context);
          break;
        case 22:
        case 23:
          au();
      }
      n = n.return;
    }
  if (
    ((xe = e),
    (ve = e = Jt(e.current, null)),
    (ke = Be = t),
    (we = 0),
    (ll = null),
    (lu = jo = xn = 0),
    (Oe = Ir = null),
    pn !== null)
  ) {
    for (t = 0; t < pn.length; t++)
      if (((n = pn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    pn = null;
  }
  return e;
}
function ad(e, t) {
  do {
    var n = ve;
    try {
      if ((Ha(), ($l.current = fo), co)) {
        for (var r = ie.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        co = !1;
      }
      if (
        ((Sn = 0),
        (Se = ye = ie = null),
        (Fr = !1),
        (tl = 0),
        (ru.current = null),
        n === null || n.return === null)
      ) {
        (we = 1), (ll = t), (ve = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          a = n,
          u = t;
        if (
          ((t = ke),
          (a.flags |= 32768),
          u !== null && typeof u == 'object' && typeof u.then == 'function')
        ) {
          var s = u,
            p = a,
            v = p.tag;
          if (!(p.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var m = p.alternate;
            m
              ? ((p.updateQueue = m.updateQueue),
                (p.memoizedState = m.memoizedState),
                (p.lanes = m.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var x = Ss(i);
          if (x !== null) {
            (x.flags &= -257),
              xs(x, i, a, o, t),
              x.mode & 1 && ws(o, s, t),
              (t = x),
              (u = s);
            var y = t.updateQueue;
            if (y === null) {
              var w = new Set();
              w.add(u), (t.updateQueue = w);
            } else y.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              ws(o, s, t), uu();
              break e;
            }
            u = Error(_(426));
          }
        } else if (ne && a.mode & 1) {
          var N = Ss(i);
          if (N !== null) {
            !(N.flags & 65536) && (N.flags |= 256),
              xs(N, i, a, o, t),
              Va(tr(u, a));
            break e;
          }
        }
        (o = u = tr(u, a)),
          we !== 4 && (we = 2),
          Ir === null ? (Ir = [o]) : Ir.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var d = Hf(o, u, t);
              ds(o, d);
              break e;
            case 1:
              a = u;
              var f = o.type,
                h = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof f.getDerivedStateFromError == 'function' ||
                  (h !== null &&
                    typeof h.componentDidCatch == 'function' &&
                    (Xt === null || !Xt.has(h))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var c = Qf(o, a, t);
                ds(o, c);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      cd(n);
    } catch (E) {
      (t = E), ve === n && n !== null && (ve = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function ud() {
  var e = po.current;
  return (po.current = fo), e === null ? fo : e;
}
function uu() {
  (we === 0 || we === 3 || we === 2) && (we = 4),
    xe === null || (!(xn & 268435455) && !(jo & 268435455)) || $t(xe, ke);
}
function vo(e, t) {
  var n = K;
  K |= 2;
  var r = ud();
  (xe !== e || ke !== t) && ((wt = null), vn(e, t));
  do
    try {
      cm();
      break;
    } catch (l) {
      ad(e, l);
    }
  while (1);
  if ((Ha(), (K = n), (po.current = r), ve !== null)) throw Error(_(261));
  return (xe = null), (ke = 0), we;
}
function cm() {
  for (; ve !== null; ) sd(ve);
}
function fm() {
  for (; ve !== null && !Fp(); ) sd(ve);
}
function sd(e) {
  var t = dd(e.alternate, e, Be);
  (e.memoizedProps = e.pendingProps),
    t === null ? cd(e) : (ve = t),
    (ru.current = null);
}
function cd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = lm(n, t)), n !== null)) {
        (n.flags &= 32767), (ve = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (we = 6), (ve = null);
        return;
      }
    } else if (((n = rm(n, t, Be)), n !== null)) {
      ve = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ve = t;
      return;
    }
    ve = t = e;
  } while (t !== null);
  we === 0 && (we = 5);
}
function cn(e, t, n) {
  var r = Y,
    l = qe.transition;
  try {
    (qe.transition = null), (Y = 1), dm(e, t, n, r);
  } finally {
    (qe.transition = l), (Y = r);
  }
  return null;
}
function dm(e, t, n, r) {
  do Gn();
  while (Wt !== null);
  if (K & 6) throw Error(_(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(_(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Kp(e, o),
    e === xe && ((ve = xe = null), (ke = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ml ||
      ((Ml = !0),
      pd(Zl, function () {
        return Gn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = qe.transition), (qe.transition = null);
    var i = Y;
    Y = 1;
    var a = K;
    (K |= 4),
      (ru.current = null),
      im(e, n),
      ld(n, e),
      Mh(Qi),
      (ql = !!Hi),
      (Qi = Hi = null),
      (e.current = n),
      am(n),
      Up(),
      (K = a),
      (Y = i),
      (qe.transition = o);
  } else e.current = n;
  if (
    (Ml && ((Ml = !1), (Wt = e), (mo = l)),
    (o = e.pendingLanes),
    o === 0 && (Xt = null),
    Bp(n.stateNode),
    Ae(e, he()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (ho) throw ((ho = !1), (e = fa), (fa = null), e);
  return (
    mo & 1 && e.tag !== 0 && Gn(),
    (o = e.pendingLanes),
    o & 1 ? (e === da ? Ar++ : ((Ar = 0), (da = e))) : (Ar = 0),
    nn(),
    null
  );
}
function Gn() {
  if (Wt !== null) {
    var e = Vc(mo),
      t = qe.transition,
      n = Y;
    try {
      if (((qe.transition = null), (Y = 16 > e ? 16 : e), Wt === null))
        var r = !1;
      else {
        if (((e = Wt), (Wt = null), (mo = 0), K & 6)) throw Error(_(331));
        var l = K;
        for (K |= 4, D = e.current; D !== null; ) {
          var o = D,
            i = o.child;
          if (D.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var s = a[u];
                for (D = s; D !== null; ) {
                  var p = D;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ur(8, p, o);
                  }
                  var v = p.child;
                  if (v !== null) (v.return = p), (D = v);
                  else
                    for (; D !== null; ) {
                      p = D;
                      var m = p.sibling,
                        x = p.return;
                      if ((td(p), p === s)) {
                        D = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = x), (D = m);
                        break;
                      }
                      D = x;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var w = y.child;
                if (w !== null) {
                  y.child = null;
                  do {
                    var N = w.sibling;
                    (w.sibling = null), (w = N);
                  } while (w !== null);
                }
              }
              D = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (D = i);
          else
            e: for (; D !== null; ) {
              if (((o = D), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ur(9, o, o.return);
                }
              var d = o.sibling;
              if (d !== null) {
                (d.return = o.return), (D = d);
                break e;
              }
              D = o.return;
            }
        }
        var f = e.current;
        for (D = f; D !== null; ) {
          i = D;
          var h = i.child;
          if (i.subtreeFlags & 2064 && h !== null) (h.return = i), (D = h);
          else
            e: for (i = f; D !== null; ) {
              if (((a = D), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      To(9, a);
                  }
                } catch (E) {
                  se(a, a.return, E);
                }
              if (a === i) {
                D = null;
                break e;
              }
              var c = a.sibling;
              if (c !== null) {
                (c.return = a.return), (D = c);
                break e;
              }
              D = a.return;
            }
        }
        if (
          ((K = l), nn(), ht && typeof ht.onPostCommitFiberRoot == 'function')
        )
          try {
            ht.onPostCommitFiberRoot(Eo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Y = n), (qe.transition = t);
    }
  }
  return !1;
}
function zs(e, t, n) {
  (t = tr(n, t)),
    (t = Hf(e, t, 1)),
    (e = Gt(e, t, 1)),
    (t = Me()),
    e !== null && (sl(e, 1, t), Ae(e, t));
}
function se(e, t, n) {
  if (e.tag === 3) zs(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        zs(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (Xt === null || !Xt.has(r)))
        ) {
          (e = tr(n, e)),
            (e = Qf(t, e, 1)),
            (t = Gt(t, e, 1)),
            (e = Me()),
            t !== null && (sl(t, 1, e), Ae(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function pm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Me()),
    (e.pingedLanes |= e.suspendedLanes & n),
    xe === e &&
      (ke & n) === n &&
      (we === 4 || (we === 3 && (ke & 130023424) === ke && 500 > he() - ou)
        ? vn(e, 0)
        : (lu |= n)),
    Ae(e, t);
}
function fd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = El), (El <<= 1), !(El & 130023424) && (El = 4194304))
      : (t = 1));
  var n = Me();
  (e = _t(e, t)), e !== null && (sl(e, t, n), Ae(e, n));
}
function hm(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), fd(e, n);
}
function mm(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(_(314));
  }
  r !== null && r.delete(t), fd(e, n);
}
var dd;
dd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ue.current) Fe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Fe = !1), nm(e, t, n);
      Fe = !!(e.flags & 131072);
    }
  else (Fe = !1), ne && t.flags & 1048576 && mf(t, oo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Wl(e, t), (e = t.pendingProps);
      var l = Jn(t, Ne.current);
      Yn(t, n), (l = qa(null, t, r, e, l, n));
      var o = ba();
      return (
        (t.flags |= 1),
        typeof l == 'object' &&
        l !== null &&
        typeof l.render == 'function' &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ie(r) ? ((o = !0), ro(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Ya(t),
            (l.updater = No),
            (t.stateNode = l),
            (l._reactInternals = t),
            ea(t, r, e, n),
            (t = ra(null, t, r, !0, o, n)))
          : ((t.tag = 0), ne && o && Ba(t), je(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Wl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = gm(r)),
          (e = rt(r, e)),
          l)
        ) {
          case 0:
            t = na(null, t, r, e, n);
            break e;
          case 1:
            t = Cs(null, t, r, e, n);
            break e;
          case 11:
            t = Es(null, t, r, e, n);
            break e;
          case 14:
            t = ks(null, t, r, rt(r.type, e), n);
            break e;
        }
        throw Error(_(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : rt(r, l)),
        na(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : rt(r, l)),
        Cs(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Xf(t), e === null)) throw Error(_(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          wf(e, t),
          uo(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = tr(Error(_(423)), t)), (t = Ps(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = tr(Error(_(424)), t)), (t = Ps(e, t, r, n, l));
            break e;
          } else
            for (
              Ve = Yt(t.stateNode.containerInfo.firstChild),
                We = t,
                ne = !0,
                it = null,
                n = kf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((qn(), r === l)) {
            t = Nt(e, t, n);
            break e;
          }
          je(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Cf(t),
        e === null && Ji(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Ki(r, l) ? (i = null) : o !== null && Ki(r, o) && (t.flags |= 32),
        Gf(e, t),
        je(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Ji(t), null;
    case 13:
      return Zf(e, t, n);
    case 4:
      return (
        Ga(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = bn(t, null, r, n)) : je(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : rt(r, l)),
        Es(e, t, r, l, n)
      );
    case 7:
      return je(e, t, t.pendingProps, n), t.child;
    case 8:
      return je(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return je(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          b(io, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (st(o.value, i)) {
            if (o.children === l.children && !Ue.current) {
              t = Nt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                i = o.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = kt(-1, n & -n)), (u.tag = 2);
                      var s = o.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var p = s.pending;
                        p === null
                          ? (u.next = u)
                          : ((u.next = p.next), (p.next = u)),
                          (s.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      qi(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(_(341));
                (i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  qi(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        je(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Yn(t, n),
        (l = be(l)),
        (r = r(l)),
        (t.flags |= 1),
        je(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = rt(r, t.pendingProps)),
        (l = rt(r.type, l)),
        ks(e, t, r, l, n)
      );
    case 15:
      return Kf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : rt(r, l)),
        Wl(e, t),
        (t.tag = 1),
        Ie(r) ? ((e = !0), ro(t)) : (e = !1),
        Yn(t, n),
        xf(t, r, l),
        ea(t, r, l, n),
        ra(null, t, r, !0, e, n)
      );
    case 19:
      return Jf(e, t, n);
    case 22:
      return Yf(e, t, n);
  }
  throw Error(_(156, t.tag));
};
function pd(e, t) {
  return Ic(e, t);
}
function vm(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Je(e, t, n, r) {
  return new vm(e, t, n, r);
}
function su(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function gm(e) {
  if (typeof e == 'function') return su(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Na)) return 11;
    if (e === La) return 14;
  }
  return 2;
}
function Jt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Je(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Kl(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == 'function')) su(e) && (i = 1);
  else if (typeof e == 'string') i = 5;
  else
    e: switch (e) {
      case jn:
        return gn(n.children, l, o, t);
      case _a:
        (i = 8), (l |= 8);
        break;
      case Ci:
        return (
          (e = Je(12, n, t, l | 2)), (e.elementType = Ci), (e.lanes = o), e
        );
      case Pi:
        return (e = Je(13, n, t, l)), (e.elementType = Pi), (e.lanes = o), e;
      case Ri:
        return (e = Je(19, n, t, l)), (e.elementType = Ri), (e.lanes = o), e;
      case xc:
        return Mo(n, l, o, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case wc:
              i = 10;
              break e;
            case Sc:
              i = 9;
              break e;
            case Na:
              i = 11;
              break e;
            case La:
              i = 14;
              break e;
            case It:
              (i = 16), (r = null);
              break e;
          }
        throw Error(_(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = Je(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function gn(e, t, n, r) {
  return (e = Je(7, e, r, t)), (e.lanes = n), e;
}
function Mo(e, t, n, r) {
  return (
    (e = Je(22, e, r, t)),
    (e.elementType = xc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function gi(e, t, n) {
  return (e = Je(6, e, null, t)), (e.lanes = n), e;
}
function yi(e, t, n) {
  return (
    (t = Je(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function ym(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = qo(0)),
    (this.expirationTimes = qo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = qo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function cu(e, t, n, r, l, o, i, a, u) {
  return (
    (e = new ym(e, t, n, a, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Je(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ya(o),
    e
  );
}
function wm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Tn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function hd(e) {
  if (!e) return bt;
  e = e._reactInternals;
  e: {
    if (Rn(e) !== e || e.tag !== 1) throw Error(_(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ie(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(_(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ie(n)) return pf(e, n, t);
  }
  return t;
}
function md(e, t, n, r, l, o, i, a, u) {
  return (
    (e = cu(n, r, !0, e, l, o, i, a, u)),
    (e.context = hd(null)),
    (n = e.current),
    (r = Me()),
    (l = Zt(n)),
    (o = kt(r, l)),
    (o.callback = t ?? null),
    Gt(n, o, l),
    (e.current.lanes = l),
    sl(e, l, r),
    Ae(e, r),
    e
  );
}
function Do(e, t, n, r) {
  var l = t.current,
    o = Me(),
    i = Zt(l);
  return (
    (n = hd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = kt(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Gt(l, t, i)),
    e !== null && (ut(e, l, i, o), Bl(e, l, i)),
    i
  );
}
function go(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Os(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function fu(e, t) {
  Os(e, t), (e = e.alternate) && Os(e, t);
}
function Sm() {
  return null;
}
var vd =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function du(e) {
  this._internalRoot = e;
}
zo.prototype.render = du.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(_(409));
  Do(e, t, null, null);
};
zo.prototype.unmount = du.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    En(function () {
      Do(null, e, null, null);
    }),
      (t[Rt] = null);
  }
};
function zo(e) {
  this._internalRoot = e;
}
zo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Qc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Bt.length && t !== 0 && t < Bt[n].priority; n++);
    Bt.splice(n, 0, e), n === 0 && Yc(e);
  }
};
function pu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Oo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Fs() {}
function xm(e, t, n, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var o = r;
      r = function () {
        var s = go(i);
        o.call(s);
      };
    }
    var i = md(t, r, e, 0, null, !1, !1, '', Fs);
    return (
      (e._reactRootContainer = i),
      (e[Rt] = i.current),
      Zr(e.nodeType === 8 ? e.parentNode : e),
      En(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == 'function') {
    var a = r;
    r = function () {
      var s = go(u);
      a.call(s);
    };
  }
  var u = cu(e, 0, !1, null, null, !1, !1, '', Fs);
  return (
    (e._reactRootContainer = u),
    (e[Rt] = u.current),
    Zr(e.nodeType === 8 ? e.parentNode : e),
    En(function () {
      Do(t, u, n, r);
    }),
    u
  );
}
function Fo(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == 'function') {
      var a = l;
      l = function () {
        var u = go(i);
        a.call(u);
      };
    }
    Do(t, i, e, l);
  } else i = xm(n, t, e, l, r);
  return go(i);
}
Wc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Lr(t.pendingLanes);
        n !== 0 &&
          (Ma(t, n | 1), Ae(t, he()), !(K & 6) && ((nr = he() + 500), nn()));
      }
      break;
    case 13:
      En(function () {
        var r = _t(e, 1);
        if (r !== null) {
          var l = Me();
          ut(r, e, 1, l);
        }
      }),
        fu(e, 1);
  }
};
Da = function (e) {
  if (e.tag === 13) {
    var t = _t(e, 134217728);
    if (t !== null) {
      var n = Me();
      ut(t, e, 134217728, n);
    }
    fu(e, 134217728);
  }
};
Hc = function (e) {
  if (e.tag === 13) {
    var t = Zt(e),
      n = _t(e, t);
    if (n !== null) {
      var r = Me();
      ut(n, e, t, r);
    }
    fu(e, t);
  }
};
Qc = function () {
  return Y;
};
Kc = function (e, t) {
  var n = Y;
  try {
    return (Y = e), t();
  } finally {
    Y = n;
  }
};
Fi = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Li(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Ro(r);
            if (!l) throw Error(_(90));
            kc(r), Li(r, l);
          }
        }
      }
      break;
    case 'textarea':
      Pc(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Wn(e, !!n.multiple, t, !1);
  }
};
Mc = iu;
Dc = En;
var Em = { usingClientEntryPoint: !1, Events: [fl, On, Ro, Tc, jc, iu] },
  Er = {
    findFiberByHostInstance: dn,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  km = {
    bundleType: Er.bundleType,
    version: Er.version,
    rendererPackageName: Er.rendererPackageName,
    rendererConfig: Er.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Lt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Fc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Er.findFiberByHostInstance || Sm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Dl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Dl.isDisabled && Dl.supportsFiber)
    try {
      (Eo = Dl.inject(km)), (ht = Dl);
    } catch {}
}
Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Em;
Qe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!pu(t)) throw Error(_(200));
  return wm(e, t, null, n);
};
Qe.createRoot = function (e, t) {
  if (!pu(e)) throw Error(_(299));
  var n = !1,
    r = '',
    l = vd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = cu(e, 1, !1, null, null, n, !1, r, l)),
    (e[Rt] = t.current),
    Zr(e.nodeType === 8 ? e.parentNode : e),
    new du(t)
  );
};
Qe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(_(188))
      : ((e = Object.keys(e).join(',')), Error(_(268, e)));
  return (e = Fc(t)), (e = e === null ? null : e.stateNode), e;
};
Qe.flushSync = function (e) {
  return En(e);
};
Qe.hydrate = function (e, t, n) {
  if (!Oo(t)) throw Error(_(200));
  return Fo(null, e, t, !0, n);
};
Qe.hydrateRoot = function (e, t, n) {
  if (!pu(e)) throw Error(_(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = '',
    i = vd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = md(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Rt] = t.current),
    Zr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new zo(t);
};
Qe.render = function (e, t, n) {
  if (!Oo(t)) throw Error(_(200));
  return Fo(null, e, t, !1, n);
};
Qe.unmountComponentAtNode = function (e) {
  if (!Oo(e)) throw Error(_(40));
  return e._reactRootContainer
    ? (En(function () {
        Fo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Rt] = null);
        });
      }),
      !0)
    : !1;
};
Qe.unstable_batchedUpdates = iu;
Qe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Oo(n)) throw Error(_(200));
  if (e == null || e._reactInternals === void 0) throw Error(_(38));
  return Fo(e, t, n, !1, r);
};
Qe.version = '18.2.0-next-9e3b772b8-20220608';
function gd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gd);
    } catch (e) {
      console.error(e);
    }
}
gd(), (hc.exports = Qe);
var Cm = hc.exports,
  Us = Cm;
(Ei.createRoot = Us.createRoot), (Ei.hydrateRoot = Us.hydrateRoot);
/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ce() {
  return (
    (ce = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ce.apply(this, arguments)
  );
}
var de;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(de || (de = {}));
const Is = 'popstate';
function Pm(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: a } = r.location;
    return ol(
      '',
      { pathname: o, search: i, hash: a },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || 'default'
    );
  }
  function n(r, l) {
    return typeof l == 'string' ? l : Cn(l);
  }
  return _m(t, n, null, e);
}
function W(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function kn(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Rm() {
  return Math.random().toString(36).substr(2, 8);
}
function As(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ol(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ce(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? Tt(t) : t,
      { state: n, key: (t && t.key) || r || Rm() }
    )
  );
}
function Cn(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function Tt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function _m(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    a = de.Pop,
    u = null,
    s = p();
  s == null && ((s = 0), i.replaceState(ce({}, i.state, { idx: s }), ''));
  function p() {
    return (i.state || { idx: null }).idx;
  }
  function v() {
    a = de.Pop;
    let N = p(),
      d = N == null ? null : N - s;
    (s = N), u && u({ action: a, location: w.location, delta: d });
  }
  function m(N, d) {
    a = de.Push;
    let f = ol(w.location, N, d);
    n && n(f, N), (s = p() + 1);
    let h = As(f, s),
      c = w.createHref(f);
    try {
      i.pushState(h, '', c);
    } catch (E) {
      if (E instanceof DOMException && E.name === 'DataCloneError') throw E;
      l.location.assign(c);
    }
    o && u && u({ action: a, location: w.location, delta: 1 });
  }
  function x(N, d) {
    a = de.Replace;
    let f = ol(w.location, N, d);
    n && n(f, N), (s = p());
    let h = As(f, s),
      c = w.createHref(f);
    i.replaceState(h, '', c),
      o && u && u({ action: a, location: w.location, delta: 0 });
  }
  function y(N) {
    let d = l.location.origin !== 'null' ? l.location.origin : l.location.href,
      f = typeof N == 'string' ? N : Cn(N);
    return (
      W(
        d,
        'No window.location.(origin|href) available to create URL for href: ' +
          f
      ),
      new URL(f, d)
    );
  }
  let w = {
    get action() {
      return a;
    },
    get location() {
      return e(l, i);
    },
    listen(N) {
      if (u) throw new Error('A history only accepts one active listener');
      return (
        l.addEventListener(Is, v),
        (u = N),
        () => {
          l.removeEventListener(Is, v), (u = null);
        }
      );
    },
    createHref(N) {
      return t(l, N);
    },
    createURL: y,
    encodeLocation(N) {
      let d = y(N);
      return { pathname: d.pathname, search: d.search, hash: d.hash };
    },
    push: m,
    replace: x,
    go(N) {
      return i.go(N);
    },
  };
  return w;
}
var pe;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(pe || (pe = {}));
const Nm = new Set([
  'lazy',
  'caseSensitive',
  'path',
  'id',
  'index',
  'children',
]);
function Lm(e) {
  return e.index === !0;
}
function ma(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((l, o) => {
      let i = [...n, o],
        a = typeof l.id == 'string' ? l.id : i.join('-');
      if (
        (W(
          l.index !== !0 || !l.children,
          'Cannot specify children on an index route'
        ),
        W(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        Lm(l))
      ) {
        let u = ce({}, l, t(l), { id: a });
        return (r[a] = u), u;
      } else {
        let u = ce({}, l, t(l), { id: a, children: void 0 });
        return (
          (r[a] = u), l.children && (u.children = ma(l.children, t, i, r)), u
        );
      }
    })
  );
}
function Vn(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? Tt(t) : t,
    l = ir(r.pathname || '/', n);
  if (l == null) return null;
  let o = yd(e);
  jm(o);
  let i = null;
  for (let a = 0; i == null && a < o.length; ++a) i = Bm(o[a], Wm(l));
  return i;
}
function Tm(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function yd(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let l = (o, i, a) => {
    let u = {
      relativePath: a === void 0 ? o.path || '' : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    u.relativePath.startsWith('/') &&
      (W(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let s = Ct([r, u.relativePath]),
      p = n.concat(u);
    o.children &&
      o.children.length > 0 &&
      (W(
        o.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + s + '".')
      ),
      yd(o.children, t, p, s)),
      !(o.path == null && !o.index) &&
        t.push({ path: s, score: Im(s, o.index), routesMeta: p });
  };
  return (
    e.forEach((o, i) => {
      var a;
      if (o.path === '' || !((a = o.path) != null && a.includes('?'))) l(o, i);
      else for (let u of wd(o.path)) l(o, i, u);
    }),
    t
  );
}
function wd(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith('?'),
    o = n.replace(/\?$/, '');
  if (r.length === 0) return l ? [o, ''] : [o];
  let i = wd(r.join('/')),
    a = [];
  return (
    a.push(...i.map((u) => (u === '' ? o : [o, u].join('/')))),
    l && a.push(...i),
    a.map((u) => (e.startsWith('/') && u === '' ? '/' : u))
  );
}
function jm(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Am(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Mm = /^:\w+$/,
  Dm = 3,
  zm = 2,
  Om = 1,
  Fm = 10,
  Um = -2,
  Bs = (e) => e === '*';
function Im(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(Bs) && (r += Um),
    t && (r += zm),
    n
      .filter((l) => !Bs(l))
      .reduce((l, o) => l + (Mm.test(o) ? Dm : o === '' ? Om : Fm), r)
  );
}
function Am(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Bm(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = '/',
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let a = n[i],
      u = i === n.length - 1,
      s = l === '/' ? t : t.slice(l.length) || '/',
      p = $m(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        s
      );
    if (!p) return null;
    Object.assign(r, p.params);
    let v = a.route;
    o.push({
      params: r,
      pathname: Ct([l, p.pathname]),
      pathnameBase: Ym(Ct([l, p.pathnameBase])),
      route: v,
    }),
      p.pathnameBase !== '/' && (l = Ct([l, p.pathnameBase]));
  }
  return o;
}
function $m(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Vm(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, '$1'),
    a = l.slice(1);
  return {
    params: r.reduce((s, p, v) => {
      let { paramName: m, isOptional: x } = p;
      if (m === '*') {
        let w = a[v] || '';
        i = o.slice(0, o.length - w.length).replace(/(.)\/+$/, '$1');
      }
      const y = a[v];
      return x && !y ? (s[m] = void 0) : (s[m] = Hm(y || '', m)), s;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function Vm(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    kn(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    );
  let r = [],
    l =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:(\w+)(\?)?/g,
          (i, a, u) => (
            r.push({ paramName: a, isOptional: u != null }),
            u ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        );
  return (
    e.endsWith('*')
      ? (r.push({ paramName: '*' }),
        (l += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (l += '\\/*$')
      : e !== '' && e !== '/' && (l += '(?:(?=\\/|$))'),
    [new RegExp(l, t ? void 0 : 'i'), r]
  );
}
function Wm(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      kn(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    );
  }
}
function Hm(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      kn(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + n + ').')
      ),
      e
    );
  }
}
function ir(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function Qm(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: n,
    search: r = '',
    hash: l = '',
  } = typeof e == 'string' ? Tt(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : Km(n, t)) : t,
    search: Gm(r),
    hash: Xm(l),
  };
}
function Km(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((l) => {
      l === '..' ? n.length > 1 && n.pop() : l !== '.' && n.push(l);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function wi(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Uo(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function hu(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == 'string'
    ? (l = Tt(e))
    : ((l = ce({}, e)),
      W(
        !l.pathname || !l.pathname.includes('?'),
        wi('?', 'pathname', 'search', l)
      ),
      W(
        !l.pathname || !l.pathname.includes('#'),
        wi('#', 'pathname', 'hash', l)
      ),
      W(!l.search || !l.search.includes('#'), wi('#', 'search', 'hash', l)));
  let o = e === '' || l.pathname === '',
    i = o ? '/' : l.pathname,
    a;
  if (r || i == null) a = n;
  else {
    let v = t.length - 1;
    if (i.startsWith('..')) {
      let m = i.split('/');
      for (; m[0] === '..'; ) m.shift(), (v -= 1);
      l.pathname = m.join('/');
    }
    a = v >= 0 ? t[v] : '/';
  }
  let u = Qm(l, a),
    s = i && i !== '/' && i.endsWith('/'),
    p = (o || i === '.') && n.endsWith('/');
  return !u.pathname.endsWith('/') && (s || p) && (u.pathname += '/'), u;
}
const Ct = (e) => e.join('/').replace(/\/\/+/g, '/'),
  Ym = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Gm = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  Xm = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
class mu {
  constructor(t, n, r, l) {
    l === void 0 && (l = !1),
      (this.status = t),
      (this.statusText = n || ''),
      (this.internal = l),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function Sd(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const xd = ['post', 'put', 'patch', 'delete'],
  Zm = new Set(xd),
  Jm = ['get', ...xd],
  qm = new Set(Jm),
  bm = new Set([301, 302, 303, 307, 308]),
  ev = new Set([307, 308]),
  Si = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  tv = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  kr = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  Ed = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  nv = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  kd = 'remix-router-transitions';
function rv(e) {
  const t = e.window ? e.window : typeof window < 'u' ? window : void 0,
    n =
      typeof t < 'u' &&
      typeof t.document < 'u' &&
      typeof t.document.createElement < 'u',
    r = !n;
  W(
    e.routes.length > 0,
    'You must provide a non-empty routes array to createRouter'
  );
  let l;
  if (e.mapRouteProperties) l = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let g = e.detectErrorBoundary;
    l = (S) => ({ hasErrorBoundary: g(S) });
  } else l = nv;
  let o = {},
    i = ma(e.routes, l, void 0, o),
    a,
    u = e.basename || '/',
    s = ce(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_prependBasename: !1,
      },
      e.future
    ),
    p = null,
    v = new Set(),
    m = null,
    x = null,
    y = null,
    w = e.hydrationData != null,
    N = Vn(i, e.history.location, u),
    d = null;
  if (N == null) {
    let g = Ge(404, { pathname: e.history.location.pathname }),
      { matches: S, route: C } = Gs(i);
    (N = S), (d = { [C.id]: g });
  }
  let f =
      !N.some((g) => g.route.lazy) &&
      (!N.some((g) => g.route.loader) || e.hydrationData != null),
    h,
    c = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: N,
      initialized: f,
      navigation: Si,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || d,
      fetchers: new Map(),
      blockers: new Map(),
    },
    E = de.Pop,
    L = !1,
    P,
    T = !1,
    $ = new Map(),
    F = null,
    re = !1,
    Le = !1,
    ct = [],
    rn = [],
    ue = new Map(),
    Mt = 0,
    vt = -1,
    j = new Map(),
    U = new Set(),
    B = new Map(),
    X = new Map(),
    q = new Set(),
    Ye = new Map(),
    Te = new Map(),
    ln = !1;
  function gt() {
    if (
      ((p = e.history.listen((g) => {
        let { action: S, location: C, delta: M } = g;
        if (ln) {
          ln = !1;
          return;
        }
        kn(
          Te.size === 0 || M != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.'
        );
        let O = Cu({
          currentLocation: c.location,
          nextLocation: C,
          historyAction: S,
        });
        if (O && M != null) {
          (ln = !0),
            e.history.go(M * -1),
            ml(O, {
              state: 'blocked',
              location: C,
              proceed() {
                ml(O, {
                  state: 'proceeding',
                  proceed: void 0,
                  reset: void 0,
                  location: C,
                }),
                  e.history.go(M);
              },
              reset() {
                let I = new Map(c.blockers);
                I.set(O, kr), me({ blockers: I });
              },
            });
          return;
        }
        return on(S, C);
      })),
      n)
    ) {
      hv(t, $);
      let g = () => mv(t, $);
      t.addEventListener('pagehide', g),
        (F = () => t.removeEventListener('pagehide', g));
    }
    return c.initialized || on(de.Pop, c.location), h;
  }
  function _n() {
    p && p(),
      F && F(),
      v.clear(),
      P && P.abort(),
      c.fetchers.forEach((g, S) => hl(S)),
      c.blockers.forEach((g, S) => ku(S));
  }
  function Fd(g) {
    return v.add(g), () => v.delete(g);
  }
  function me(g, S) {
    c = ce({}, c, g);
    let C = [],
      M = [];
    s.v7_fetcherPersist &&
      c.fetchers.forEach((O, I) => {
        O.state === 'idle' && (q.has(I) ? M.push(I) : C.push(I));
      }),
      v.forEach((O) =>
        O(c, { deletedFetchers: M, unstable_viewTransitionOpts: S })
      ),
      s.v7_fetcherPersist &&
        (C.forEach((O) => c.fetchers.delete(O)), M.forEach((O) => hl(O)));
  }
  function cr(g, S) {
    var C, M;
    let O =
        c.actionData != null &&
        c.navigation.formMethod != null &&
        ot(c.navigation.formMethod) &&
        c.navigation.state === 'loading' &&
        ((C = g.state) == null ? void 0 : C._isRedirect) !== !0,
      I;
    S.actionData
      ? Object.keys(S.actionData).length > 0
        ? (I = S.actionData)
        : (I = null)
      : O
      ? (I = c.actionData)
      : (I = null);
    let V = S.loaderData
        ? Ys(c.loaderData, S.loaderData, S.matches || [], S.errors)
        : c.loaderData,
      A = c.blockers;
    A.size > 0 && ((A = new Map(A)), A.forEach((le, Q) => A.set(Q, kr)));
    let z =
      L === !0 ||
      (c.navigation.formMethod != null &&
        ot(c.navigation.formMethod) &&
        ((M = g.state) == null ? void 0 : M._isRedirect) !== !0);
    a && ((i = a), (a = void 0)),
      re ||
        E === de.Pop ||
        (E === de.Push
          ? e.history.push(g, g.state)
          : E === de.Replace && e.history.replace(g, g.state));
    let Z;
    if (E === de.Pop) {
      let le = $.get(c.location.pathname);
      le && le.has(g.pathname)
        ? (Z = { currentLocation: c.location, nextLocation: g })
        : $.has(g.pathname) &&
          (Z = { currentLocation: g, nextLocation: c.location });
    } else if (T) {
      let le = $.get(c.location.pathname);
      le
        ? le.add(g.pathname)
        : ((le = new Set([g.pathname])), $.set(c.location.pathname, le)),
        (Z = { currentLocation: c.location, nextLocation: g });
    }
    me(
      ce({}, S, {
        actionData: I,
        loaderData: V,
        historyAction: E,
        location: g,
        initialized: !0,
        navigation: Si,
        revalidation: 'idle',
        restoreScrollPosition: Ru(g, S.matches || c.matches),
        preventScrollReset: z,
        blockers: A,
      }),
      Z
    ),
      (E = de.Pop),
      (L = !1),
      (T = !1),
      (re = !1),
      (Le = !1),
      (ct = []),
      (rn = []);
  }
  async function gu(g, S) {
    if (typeof g == 'number') {
      e.history.go(g);
      return;
    }
    let C = va(
        c.location,
        c.matches,
        u,
        s.v7_prependBasename,
        g,
        S == null ? void 0 : S.fromRouteId,
        S == null ? void 0 : S.relative
      ),
      {
        path: M,
        submission: O,
        error: I,
      } = $s(s.v7_normalizeFormMethod, !1, C, S),
      V = c.location,
      A = ol(c.location, M, S && S.state);
    A = ce({}, A, e.history.encodeLocation(A));
    let z = S && S.replace != null ? S.replace : void 0,
      Z = de.Push;
    z === !0
      ? (Z = de.Replace)
      : z === !1 ||
        (O != null &&
          ot(O.formMethod) &&
          O.formAction === c.location.pathname + c.location.search &&
          (Z = de.Replace));
    let le =
        S && 'preventScrollReset' in S ? S.preventScrollReset === !0 : void 0,
      Q = Cu({ currentLocation: V, nextLocation: A, historyAction: Z });
    if (Q) {
      ml(Q, {
        state: 'blocked',
        location: A,
        proceed() {
          ml(Q, {
            state: 'proceeding',
            proceed: void 0,
            reset: void 0,
            location: A,
          }),
            gu(g, S);
        },
        reset() {
          let J = new Map(c.blockers);
          J.set(Q, kr), me({ blockers: J });
        },
      });
      return;
    }
    return await on(Z, A, {
      submission: O,
      pendingError: I,
      preventScrollReset: le,
      replace: S && S.replace,
      enableViewTransition: S && S.unstable_viewTransition,
    });
  }
  function Ud() {
    if (
      ($o(),
      me({ revalidation: 'loading' }),
      c.navigation.state !== 'submitting')
    ) {
      if (c.navigation.state === 'idle') {
        on(c.historyAction, c.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      on(E || c.historyAction, c.navigation.location, {
        overrideNavigation: c.navigation,
      });
    }
  }
  async function on(g, S, C) {
    P && P.abort(),
      (P = null),
      (E = g),
      (re = (C && C.startUninterruptedRevalidation) === !0),
      Kd(c.location, c.matches),
      (L = (C && C.preventScrollReset) === !0),
      (T = (C && C.enableViewTransition) === !0);
    let M = a || i,
      O = C && C.overrideNavigation,
      I = Vn(M, S, u);
    if (!I) {
      let J = Ge(404, { pathname: S.pathname }),
        { matches: ge, route: an } = Gs(M);
      Vo(), cr(S, { matches: ge, loaderData: {}, errors: { [an.id]: J } });
      return;
    }
    if (
      c.initialized &&
      !Le &&
      uv(c.location, S) &&
      !(C && C.submission && ot(C.submission.formMethod))
    ) {
      cr(S, { matches: I });
      return;
    }
    P = new AbortController();
    let V = Pr(e.history, S, P.signal, C && C.submission),
      A,
      z;
    if (C && C.pendingError) z = { [Br(I).route.id]: C.pendingError };
    else if (C && C.submission && ot(C.submission.formMethod)) {
      let J = await Id(V, S, C.submission, I, { replace: C.replace });
      if (J.shortCircuited) return;
      (A = J.pendingActionData),
        (z = J.pendingActionError),
        (O = xi(S, C.submission)),
        (V = new Request(V.url, { signal: V.signal }));
    }
    let {
      shortCircuited: Z,
      loaderData: le,
      errors: Q,
    } = await Ad(
      V,
      S,
      I,
      O,
      C && C.submission,
      C && C.fetcherSubmission,
      C && C.replace,
      A,
      z
    );
    Z ||
      ((P = null),
      cr(
        S,
        ce({ matches: I }, A ? { actionData: A } : {}, {
          loaderData: le,
          errors: Q,
        })
      ));
  }
  async function Id(g, S, C, M, O) {
    O === void 0 && (O = {}), $o();
    let I = dv(S, C);
    me({ navigation: I });
    let V,
      A = ya(M, S);
    if (!A.route.action && !A.route.lazy)
      V = {
        type: pe.error,
        error: Ge(405, {
          method: g.method,
          pathname: S.pathname,
          routeId: A.route.id,
        }),
      };
    else if (((V = await Cr('action', g, A, M, o, l, u)), g.signal.aborted))
      return { shortCircuited: !0 };
    if (Xn(V)) {
      let z;
      return (
        O && O.replace != null
          ? (z = O.replace)
          : (z = V.location === c.location.pathname + c.location.search),
        await fr(c, V, { submission: C, replace: z }),
        { shortCircuited: !0 }
      );
    }
    if ($r(V)) {
      let z = Br(M, A.route.id);
      return (
        (O && O.replace) !== !0 && (E = de.Push),
        { pendingActionData: {}, pendingActionError: { [z.route.id]: V.error } }
      );
    }
    if (mn(V)) throw Ge(400, { type: 'defer-action' });
    return { pendingActionData: { [A.route.id]: V.data } };
  }
  async function Ad(g, S, C, M, O, I, V, A, z) {
    let Z = M || xi(S, O),
      le = O || I || Js(Z),
      Q = a || i,
      [J, ge] = Vs(e.history, c, C, le, S, Le, ct, rn, B, U, Q, u, A, z);
    if (
      (Vo(
        (G) =>
          !(C && C.some((tt) => tt.route.id === G)) ||
          (J && J.some((tt) => tt.route.id === G))
      ),
      (vt = ++Mt),
      J.length === 0 && ge.length === 0)
    ) {
      let G = xu();
      return (
        cr(
          S,
          ce(
            { matches: C, loaderData: {}, errors: z || null },
            A ? { actionData: A } : {},
            G ? { fetchers: new Map(c.fetchers) } : {}
          )
        ),
        { shortCircuited: !0 }
      );
    }
    if (!re) {
      ge.forEach((tt) => {
        let Ot = c.fetchers.get(tt.key),
          fe = Rr(void 0, Ot ? Ot.data : void 0);
        c.fetchers.set(tt.key, fe);
      });
      let G = A || c.actionData;
      me(
        ce(
          { navigation: Z },
          G
            ? Object.keys(G).length === 0
              ? { actionData: null }
              : { actionData: G }
            : {},
          ge.length > 0 ? { fetchers: new Map(c.fetchers) } : {}
        )
      );
    }
    ge.forEach((G) => {
      ue.has(G.key) && Dt(G.key), G.controller && ue.set(G.key, G.controller);
    });
    let an = () => ge.forEach((G) => Dt(G.key));
    P && P.signal.addEventListener('abort', an);
    let {
      results: un,
      loaderResults: pr,
      fetcherResults: Wo,
    } = await wu(c.matches, C, J, ge, g);
    if (g.signal.aborted) return { shortCircuited: !0 };
    P && P.signal.removeEventListener('abort', an),
      ge.forEach((G) => ue.delete(G.key));
    let yt = Xs(un);
    if (yt) {
      if (yt.idx >= J.length) {
        let G = ge[yt.idx - J.length].key;
        U.add(G);
      }
      return await fr(c, yt.result, { replace: V }), { shortCircuited: !0 };
    }
    let { loaderData: zt, errors: vl } = Ks(c, C, J, pr, z, ge, Wo, Ye);
    Ye.forEach((G, tt) => {
      G.subscribe((Ot) => {
        (Ot || G.done) && Ye.delete(tt);
      });
    });
    let Ho = xu(),
      Qo = Eu(vt),
      Ko = Ho || Qo || ge.length > 0;
    return ce(
      { loaderData: zt, errors: vl },
      Ko ? { fetchers: new Map(c.fetchers) } : {}
    );
  }
  function yu(g) {
    return (
      s.v7_fetcherPersist &&
        (X.set(g, (X.get(g) || 0) + 1), q.has(g) && q.delete(g)),
      c.fetchers.get(g) || tv
    );
  }
  function Bd(g, S, C, M) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    ue.has(g) && Dt(g);
    let O = a || i,
      I = va(
        c.location,
        c.matches,
        u,
        s.v7_prependBasename,
        C,
        S,
        M == null ? void 0 : M.relative
      ),
      V = Vn(O, I, u);
    if (!V) {
      dr(g, S, Ge(404, { pathname: I }));
      return;
    }
    let {
      path: A,
      submission: z,
      error: Z,
    } = $s(s.v7_normalizeFormMethod, !0, I, M);
    if (Z) {
      dr(g, S, Z);
      return;
    }
    let le = ya(V, A);
    if (((L = (M && M.preventScrollReset) === !0), z && ot(z.formMethod))) {
      $d(g, S, A, le, V, z);
      return;
    }
    B.set(g, { routeId: S, path: A }), Vd(g, S, A, le, V, z);
  }
  async function $d(g, S, C, M, O, I) {
    if (($o(), B.delete(g), !M.route.action && !M.route.lazy)) {
      let fe = Ge(405, { method: I.formMethod, pathname: C, routeId: S });
      dr(g, S, fe);
      return;
    }
    let V = c.fetchers.get(g),
      A = pv(I, V);
    c.fetchers.set(g, A), me({ fetchers: new Map(c.fetchers) });
    let z = new AbortController(),
      Z = Pr(e.history, C, z.signal, I);
    ue.set(g, z);
    let le = Mt,
      Q = await Cr('action', Z, M, O, o, l, u);
    if (Z.signal.aborted) {
      ue.get(g) === z && ue.delete(g);
      return;
    }
    if (q.has(g)) {
      c.fetchers.set(g, Ut(void 0)), me({ fetchers: new Map(c.fetchers) });
      return;
    }
    if (Xn(Q))
      if ((ue.delete(g), vt > le)) {
        let fe = Ut(void 0);
        c.fetchers.set(g, fe), me({ fetchers: new Map(c.fetchers) });
        return;
      } else {
        U.add(g);
        let fe = Rr(I);
        return (
          c.fetchers.set(g, fe),
          me({ fetchers: new Map(c.fetchers) }),
          fr(c, Q, { fetcherSubmission: I })
        );
      }
    if ($r(Q)) {
      dr(g, S, Q.error);
      return;
    }
    if (mn(Q)) throw Ge(400, { type: 'defer-action' });
    let J = c.navigation.location || c.location,
      ge = Pr(e.history, J, z.signal),
      an = a || i,
      un =
        c.navigation.state !== 'idle'
          ? Vn(an, c.navigation.location, u)
          : c.matches;
    W(un, "Didn't find any matches after fetcher action");
    let pr = ++Mt;
    j.set(g, pr);
    let Wo = Rr(I, Q.data);
    c.fetchers.set(g, Wo);
    let [yt, zt] = Vs(
      e.history,
      c,
      un,
      I,
      J,
      Le,
      ct,
      rn,
      B,
      U,
      an,
      u,
      { [M.route.id]: Q.data },
      void 0
    );
    zt
      .filter((fe) => fe.key !== g)
      .forEach((fe) => {
        let hr = fe.key,
          _u = c.fetchers.get(hr),
          Gd = Rr(void 0, _u ? _u.data : void 0);
        c.fetchers.set(hr, Gd),
          ue.has(hr) && Dt(hr),
          fe.controller && ue.set(hr, fe.controller);
      }),
      me({ fetchers: new Map(c.fetchers) });
    let vl = () => zt.forEach((fe) => Dt(fe.key));
    z.signal.addEventListener('abort', vl);
    let {
      results: Ho,
      loaderResults: Qo,
      fetcherResults: Ko,
    } = await wu(c.matches, un, yt, zt, ge);
    if (z.signal.aborted) return;
    z.signal.removeEventListener('abort', vl),
      j.delete(g),
      ue.delete(g),
      zt.forEach((fe) => ue.delete(fe.key));
    let G = Xs(Ho);
    if (G) {
      if (G.idx >= yt.length) {
        let fe = zt[G.idx - yt.length].key;
        U.add(fe);
      }
      return fr(c, G.result);
    }
    let { loaderData: tt, errors: Ot } = Ks(
      c,
      c.matches,
      yt,
      Qo,
      void 0,
      zt,
      Ko,
      Ye
    );
    if (c.fetchers.has(g)) {
      let fe = Ut(Q.data);
      c.fetchers.set(g, fe);
    }
    Eu(pr),
      c.navigation.state === 'loading' && pr > vt
        ? (W(E, 'Expected pending action'),
          P && P.abort(),
          cr(c.navigation.location, {
            matches: un,
            loaderData: tt,
            errors: Ot,
            fetchers: new Map(c.fetchers),
          }))
        : (me({
            errors: Ot,
            loaderData: Ys(c.loaderData, tt, un, Ot),
            fetchers: new Map(c.fetchers),
          }),
          (Le = !1));
  }
  async function Vd(g, S, C, M, O, I) {
    let V = c.fetchers.get(g),
      A = Rr(I, V ? V.data : void 0);
    c.fetchers.set(g, A), me({ fetchers: new Map(c.fetchers) });
    let z = new AbortController(),
      Z = Pr(e.history, C, z.signal);
    ue.set(g, z);
    let le = Mt,
      Q = await Cr('loader', Z, M, O, o, l, u);
    if (
      (mn(Q) && (Q = (await Rd(Q, Z.signal, !0)) || Q),
      ue.get(g) === z && ue.delete(g),
      Z.signal.aborted)
    )
      return;
    if (q.has(g)) {
      c.fetchers.set(g, Ut(void 0)), me({ fetchers: new Map(c.fetchers) });
      return;
    }
    if (Xn(Q))
      if (vt > le) {
        let ge = Ut(void 0);
        c.fetchers.set(g, ge), me({ fetchers: new Map(c.fetchers) });
        return;
      } else {
        U.add(g), await fr(c, Q);
        return;
      }
    if ($r(Q)) {
      dr(g, S, Q.error);
      return;
    }
    W(!mn(Q), 'Unhandled fetcher deferred data');
    let J = Ut(Q.data);
    c.fetchers.set(g, J), me({ fetchers: new Map(c.fetchers) });
  }
  async function fr(g, S, C) {
    let {
      submission: M,
      fetcherSubmission: O,
      replace: I,
    } = C === void 0 ? {} : C;
    S.revalidate && (Le = !0);
    let V = ol(g.location, S.location, { _isRedirect: !0 });
    if ((W(V, 'Expected a location on the redirect navigation'), n)) {
      let J = !1;
      if (S.reloadDocument) J = !0;
      else if (Ed.test(S.location)) {
        const ge = e.history.createURL(S.location);
        J = ge.origin !== t.location.origin || ir(ge.pathname, u) == null;
      }
      if (J) {
        I ? t.location.replace(S.location) : t.location.assign(S.location);
        return;
      }
    }
    P = null;
    let A = I === !0 ? de.Replace : de.Push,
      { formMethod: z, formAction: Z, formEncType: le } = g.navigation;
    !M && !O && z && Z && le && (M = Js(g.navigation));
    let Q = M || O;
    if (ev.has(S.status) && Q && ot(Q.formMethod))
      await on(A, V, {
        submission: ce({}, Q, { formAction: S.location }),
        preventScrollReset: L,
      });
    else {
      let J = xi(V, M);
      await on(A, V, {
        overrideNavigation: J,
        fetcherSubmission: O,
        preventScrollReset: L,
      });
    }
  }
  async function wu(g, S, C, M, O) {
    let I = await Promise.all([
        ...C.map((z) => Cr('loader', O, z, S, o, l, u)),
        ...M.map((z) =>
          z.matches && z.match && z.controller
            ? Cr(
                'loader',
                Pr(e.history, z.path, z.controller.signal),
                z.match,
                z.matches,
                o,
                l,
                u
              )
            : { type: pe.error, error: Ge(404, { pathname: z.path }) }
        ),
      ]),
      V = I.slice(0, C.length),
      A = I.slice(C.length);
    return (
      await Promise.all([
        Zs(
          g,
          C,
          V,
          V.map(() => O.signal),
          !1,
          c.loaderData
        ),
        Zs(
          g,
          M.map((z) => z.match),
          A,
          M.map((z) => (z.controller ? z.controller.signal : null)),
          !0
        ),
      ]),
      { results: I, loaderResults: V, fetcherResults: A }
    );
  }
  function $o() {
    (Le = !0),
      ct.push(...Vo()),
      B.forEach((g, S) => {
        ue.has(S) && (rn.push(S), Dt(S));
      });
  }
  function dr(g, S, C) {
    let M = Br(c.matches, S);
    hl(g), me({ errors: { [M.route.id]: C }, fetchers: new Map(c.fetchers) });
  }
  function hl(g) {
    let S = c.fetchers.get(g);
    ue.has(g) && !(S && S.state === 'loading' && j.has(g)) && Dt(g),
      B.delete(g),
      j.delete(g),
      U.delete(g),
      q.delete(g),
      c.fetchers.delete(g);
  }
  function Wd(g) {
    if (s.v7_fetcherPersist) {
      let S = (X.get(g) || 0) - 1;
      S <= 0 ? (X.delete(g), q.add(g)) : X.set(g, S);
    } else hl(g);
    me({ fetchers: new Map(c.fetchers) });
  }
  function Dt(g) {
    let S = ue.get(g);
    W(S, 'Expected fetch controller: ' + g), S.abort(), ue.delete(g);
  }
  function Su(g) {
    for (let S of g) {
      let C = yu(S),
        M = Ut(C.data);
      c.fetchers.set(S, M);
    }
  }
  function xu() {
    let g = [],
      S = !1;
    for (let C of U) {
      let M = c.fetchers.get(C);
      W(M, 'Expected fetcher: ' + C),
        M.state === 'loading' && (U.delete(C), g.push(C), (S = !0));
    }
    return Su(g), S;
  }
  function Eu(g) {
    let S = [];
    for (let [C, M] of j)
      if (M < g) {
        let O = c.fetchers.get(C);
        W(O, 'Expected fetcher: ' + C),
          O.state === 'loading' && (Dt(C), j.delete(C), S.push(C));
      }
    return Su(S), S.length > 0;
  }
  function Hd(g, S) {
    let C = c.blockers.get(g) || kr;
    return Te.get(g) !== S && Te.set(g, S), C;
  }
  function ku(g) {
    c.blockers.delete(g), Te.delete(g);
  }
  function ml(g, S) {
    let C = c.blockers.get(g) || kr;
    W(
      (C.state === 'unblocked' && S.state === 'blocked') ||
        (C.state === 'blocked' && S.state === 'blocked') ||
        (C.state === 'blocked' && S.state === 'proceeding') ||
        (C.state === 'blocked' && S.state === 'unblocked') ||
        (C.state === 'proceeding' && S.state === 'unblocked'),
      'Invalid blocker state transition: ' + C.state + ' -> ' + S.state
    );
    let M = new Map(c.blockers);
    M.set(g, S), me({ blockers: M });
  }
  function Cu(g) {
    let { currentLocation: S, nextLocation: C, historyAction: M } = g;
    if (Te.size === 0) return;
    Te.size > 1 && kn(!1, 'A router only supports one blocker at a time');
    let O = Array.from(Te.entries()),
      [I, V] = O[O.length - 1],
      A = c.blockers.get(I);
    if (
      !(A && A.state === 'proceeding') &&
      V({ currentLocation: S, nextLocation: C, historyAction: M })
    )
      return I;
  }
  function Vo(g) {
    let S = [];
    return (
      Ye.forEach((C, M) => {
        (!g || g(M)) && (C.cancel(), S.push(M), Ye.delete(M));
      }),
      S
    );
  }
  function Qd(g, S, C) {
    if (((m = g), (y = S), (x = C || null), !w && c.navigation === Si)) {
      w = !0;
      let M = Ru(c.location, c.matches);
      M != null && me({ restoreScrollPosition: M });
    }
    return () => {
      (m = null), (y = null), (x = null);
    };
  }
  function Pu(g, S) {
    return (
      (x &&
        x(
          g,
          S.map((M) => Tm(M, c.loaderData))
        )) ||
      g.key
    );
  }
  function Kd(g, S) {
    if (m && y) {
      let C = Pu(g, S);
      m[C] = y();
    }
  }
  function Ru(g, S) {
    if (m) {
      let C = Pu(g, S),
        M = m[C];
      if (typeof M == 'number') return M;
    }
    return null;
  }
  function Yd(g) {
    (o = {}), (a = ma(g, l, void 0, o));
  }
  return (
    (h = {
      get basename() {
        return u;
      },
      get state() {
        return c;
      },
      get routes() {
        return i;
      },
      get window() {
        return t;
      },
      initialize: gt,
      subscribe: Fd,
      enableScrollRestoration: Qd,
      navigate: gu,
      fetch: Bd,
      revalidate: Ud,
      createHref: (g) => e.history.createHref(g),
      encodeLocation: (g) => e.history.encodeLocation(g),
      getFetcher: yu,
      deleteFetcher: Wd,
      dispose: _n,
      getBlocker: Hd,
      deleteBlocker: ku,
      _internalFetchControllers: ue,
      _internalActiveDeferreds: Ye,
      _internalSetRoutes: Yd,
    }),
    h
  );
}
function lv(e) {
  return (
    e != null &&
    (('formData' in e && e.formData != null) ||
      ('body' in e && e.body !== void 0))
  );
}
function va(e, t, n, r, l, o, i) {
  let a, u;
  if (o != null && i !== 'path') {
    a = [];
    for (let p of t)
      if ((a.push(p), p.route.id === o)) {
        u = p;
        break;
      }
  } else (a = t), (u = t[t.length - 1]);
  let s = hu(
    l || '.',
    Uo(a).map((p) => p.pathnameBase),
    ir(e.pathname, n) || e.pathname,
    i === 'path'
  );
  return (
    l == null && ((s.search = e.search), (s.hash = e.hash)),
    (l == null || l === '' || l === '.') &&
      u &&
      u.route.index &&
      !vu(s.search) &&
      (s.search = s.search ? s.search.replace(/^\?/, '?index&') : '?index'),
    r &&
      n !== '/' &&
      (s.pathname = s.pathname === '/' ? n : Ct([n, s.pathname])),
    Cn(s)
  );
}
function $s(e, t, n, r) {
  if (!r || !lv(r)) return { path: n };
  if (r.formMethod && !fv(r.formMethod))
    return { path: n, error: Ge(405, { method: r.formMethod }) };
  let l = () => ({ path: n, error: Ge(400, { type: 'invalid-body' }) }),
    o = r.formMethod || 'get',
    i = e ? o.toUpperCase() : o.toLowerCase(),
    a = Pd(n);
  if (r.body !== void 0) {
    if (r.formEncType === 'text/plain') {
      if (!ot(i)) return l();
      let m =
        typeof r.body == 'string'
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((x, y) => {
              let [w, N] = y;
              return (
                '' +
                x +
                w +
                '=' +
                N +
                `
`
              );
            }, '')
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: i,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: m,
        },
      };
    } else if (r.formEncType === 'application/json') {
      if (!ot(i)) return l();
      try {
        let m = typeof r.body == 'string' ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: i,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: m,
            text: void 0,
          },
        };
      } catch {
        return l();
      }
    }
  }
  W(
    typeof FormData == 'function',
    'FormData is not available in this environment'
  );
  let u, s;
  if (r.formData) (u = ga(r.formData)), (s = r.formData);
  else if (r.body instanceof FormData) (u = ga(r.body)), (s = r.body);
  else if (r.body instanceof URLSearchParams) (u = r.body), (s = Qs(u));
  else if (r.body == null) (u = new URLSearchParams()), (s = new FormData());
  else
    try {
      (u = new URLSearchParams(r.body)), (s = Qs(u));
    } catch {
      return l();
    }
  let p = {
    formMethod: i,
    formAction: a,
    formEncType: (r && r.formEncType) || 'application/x-www-form-urlencoded',
    formData: s,
    json: void 0,
    text: void 0,
  };
  if (ot(p.formMethod)) return { path: n, submission: p };
  let v = Tt(n);
  return (
    t && v.search && vu(v.search) && u.append('index', ''),
    (v.search = '?' + u),
    { path: Cn(v), submission: p }
  );
}
function ov(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((l) => l.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Vs(e, t, n, r, l, o, i, a, u, s, p, v, m, x) {
  let y = x ? Object.values(x)[0] : m ? Object.values(m)[0] : void 0,
    w = e.createURL(t.location),
    N = e.createURL(l),
    d = x ? Object.keys(x)[0] : void 0,
    h = ov(n, d).filter((E, L) => {
      if (E.route.lazy) return !0;
      if (E.route.loader == null) return !1;
      if (iv(t.loaderData, t.matches[L], E) || i.some(($) => $ === E.route.id))
        return !0;
      let P = t.matches[L],
        T = E;
      return Ws(
        E,
        ce(
          {
            currentUrl: w,
            currentParams: P.params,
            nextUrl: N,
            nextParams: T.params,
          },
          r,
          {
            actionResult: y,
            defaultShouldRevalidate:
              o ||
              w.pathname + w.search === N.pathname + N.search ||
              w.search !== N.search ||
              Cd(P, T),
          }
        )
      );
    }),
    c = [];
  return (
    u.forEach((E, L) => {
      if (!n.some((re) => re.route.id === E.routeId)) return;
      let P = Vn(p, E.path, v);
      if (!P) {
        c.push({
          key: L,
          routeId: E.routeId,
          path: E.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let T = t.fetchers.get(L),
        $ = ya(P, E.path),
        F = !1;
      s.has(L)
        ? (F = !1)
        : a.includes(L)
        ? (F = !0)
        : T && T.state !== 'idle' && T.data === void 0
        ? (F = o)
        : (F = Ws(
            $,
            ce(
              {
                currentUrl: w,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: N,
                nextParams: n[n.length - 1].params,
              },
              r,
              { actionResult: y, defaultShouldRevalidate: o }
            )
          )),
        F &&
          c.push({
            key: L,
            routeId: E.routeId,
            path: E.path,
            matches: P,
            match: $,
            controller: new AbortController(),
          });
    }),
    [h, c]
  );
}
function iv(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function Cd(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith('*') && e.params['*'] !== t.params['*'])
  );
}
function Ws(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == 'boolean') return n;
  }
  return t.defaultShouldRevalidate;
}
async function Hs(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let l = n[e.id];
  W(l, 'No route found in manifest');
  let o = {};
  for (let i in r) {
    let u = l[i] !== void 0 && i !== 'hasErrorBoundary';
    kn(
      !u,
      'Route "' +
        l.id +
        '" has a static property "' +
        i +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + i + '" will be ignored.')
    ),
      !u && !Nm.has(i) && (o[i] = r[i]);
  }
  Object.assign(l, o), Object.assign(l, ce({}, t(l), { lazy: void 0 }));
}
async function Cr(e, t, n, r, l, o, i, a) {
  a === void 0 && (a = {});
  let u,
    s,
    p,
    v = (y) => {
      let w,
        N = new Promise((d, f) => (w = f));
      return (
        (p = () => w()),
        t.signal.addEventListener('abort', p),
        Promise.race([
          y({ request: t, params: n.params, context: a.requestContext }),
          N,
        ])
      );
    };
  try {
    let y = n.route[e];
    if (n.route.lazy)
      if (y) {
        let w,
          N = await Promise.all([
            v(y).catch((d) => {
              w = d;
            }),
            Hs(n.route, o, l),
          ]);
        if (w) throw w;
        s = N[0];
      } else if ((await Hs(n.route, o, l), (y = n.route[e]), y)) s = await v(y);
      else if (e === 'action') {
        let w = new URL(t.url),
          N = w.pathname + w.search;
        throw Ge(405, { method: t.method, pathname: N, routeId: n.route.id });
      } else return { type: pe.data, data: void 0 };
    else if (y) s = await v(y);
    else {
      let w = new URL(t.url),
        N = w.pathname + w.search;
      throw Ge(404, { pathname: N });
    }
    W(
      s !== void 0,
      'You defined ' +
        (e === 'action' ? 'an action' : 'a loader') +
        ' for route ' +
        ('"' +
          n.route.id +
          '" but didn\'t return anything from your `' +
          e +
          '` ') +
        'function. Please return a value or `null`.'
    );
  } catch (y) {
    (u = pe.error), (s = y);
  } finally {
    p && t.signal.removeEventListener('abort', p);
  }
  if (cv(s)) {
    let y = s.status;
    if (bm.has(y)) {
      let d = s.headers.get('Location');
      if (
        (W(
          d,
          'Redirects returned/thrown from loaders/actions must have a Location header'
        ),
        !Ed.test(d))
      )
        d = va(new URL(t.url), r.slice(0, r.indexOf(n) + 1), i, !0, d);
      else if (!a.isStaticRequest) {
        let f = new URL(t.url),
          h = d.startsWith('//') ? new URL(f.protocol + d) : new URL(d),
          c = ir(h.pathname, i) != null;
        h.origin === f.origin && c && (d = h.pathname + h.search + h.hash);
      }
      if (a.isStaticRequest) throw (s.headers.set('Location', d), s);
      return {
        type: pe.redirect,
        status: y,
        location: d,
        revalidate: s.headers.get('X-Remix-Revalidate') !== null,
        reloadDocument: s.headers.get('X-Remix-Reload-Document') !== null,
      };
    }
    if (a.isRouteRequest)
      throw { type: u === pe.error ? pe.error : pe.data, response: s };
    let w,
      N = s.headers.get('Content-Type');
    return (
      N && /\bapplication\/json\b/.test(N)
        ? (w = await s.json())
        : (w = await s.text()),
      u === pe.error
        ? { type: u, error: new mu(y, s.statusText, w), headers: s.headers }
        : { type: pe.data, data: w, statusCode: s.status, headers: s.headers }
    );
  }
  if (u === pe.error) return { type: u, error: s };
  if (sv(s)) {
    var m, x;
    return {
      type: pe.deferred,
      deferredData: s,
      statusCode: (m = s.init) == null ? void 0 : m.status,
      headers:
        ((x = s.init) == null ? void 0 : x.headers) &&
        new Headers(s.init.headers),
    };
  }
  return { type: pe.data, data: s };
}
function Pr(e, t, n, r) {
  let l = e.createURL(Pd(t)).toString(),
    o = { signal: n };
  if (r && ot(r.formMethod)) {
    let { formMethod: i, formEncType: a } = r;
    (o.method = i.toUpperCase()),
      a === 'application/json'
        ? ((o.headers = new Headers({ 'Content-Type': a })),
          (o.body = JSON.stringify(r.json)))
        : a === 'text/plain'
        ? (o.body = r.text)
        : a === 'application/x-www-form-urlencoded' && r.formData
        ? (o.body = ga(r.formData))
        : (o.body = r.formData);
  }
  return new Request(l, o);
}
function ga(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == 'string' ? r : r.name);
  return t;
}
function Qs(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function av(e, t, n, r, l) {
  let o = {},
    i = null,
    a,
    u = !1,
    s = {};
  return (
    n.forEach((p, v) => {
      let m = t[v].route.id;
      if (
        (W(!Xn(p), 'Cannot handle redirect results in processLoaderData'),
        $r(p))
      ) {
        let x = Br(e, m),
          y = p.error;
        r && ((y = Object.values(r)[0]), (r = void 0)),
          (i = i || {}),
          i[x.route.id] == null && (i[x.route.id] = y),
          (o[m] = void 0),
          u || ((u = !0), (a = Sd(p.error) ? p.error.status : 500)),
          p.headers && (s[m] = p.headers);
      } else
        mn(p)
          ? (l.set(m, p.deferredData), (o[m] = p.deferredData.data))
          : (o[m] = p.data),
          p.statusCode != null &&
            p.statusCode !== 200 &&
            !u &&
            (a = p.statusCode),
          p.headers && (s[m] = p.headers);
    }),
    r && ((i = r), (o[Object.keys(r)[0]] = void 0)),
    { loaderData: o, errors: i, statusCode: a || 200, loaderHeaders: s }
  );
}
function Ks(e, t, n, r, l, o, i, a) {
  let { loaderData: u, errors: s } = av(t, n, r, l, a);
  for (let p = 0; p < o.length; p++) {
    let { key: v, match: m, controller: x } = o[p];
    W(
      i !== void 0 && i[p] !== void 0,
      'Did not find corresponding fetcher result'
    );
    let y = i[p];
    if (!(x && x.signal.aborted))
      if ($r(y)) {
        let w = Br(e.matches, m == null ? void 0 : m.route.id);
        (s && s[w.route.id]) || (s = ce({}, s, { [w.route.id]: y.error })),
          e.fetchers.delete(v);
      } else if (Xn(y)) W(!1, 'Unhandled fetcher revalidation redirect');
      else if (mn(y)) W(!1, 'Unhandled fetcher deferred data');
      else {
        let w = Ut(y.data);
        e.fetchers.set(v, w);
      }
  }
  return { loaderData: u, errors: s };
}
function Ys(e, t, n, r) {
  let l = ce({}, t);
  for (let o of n) {
    let i = o.route.id;
    if (
      (t.hasOwnProperty(i)
        ? t[i] !== void 0 && (l[i] = t[i])
        : e[i] !== void 0 && o.route.loader && (l[i] = e[i]),
      r && r.hasOwnProperty(i))
    )
      break;
  }
  return l;
}
function Br(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Gs(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === '/') || {
          id: '__shim-error-route__',
        };
  return {
    matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }],
    route: t,
  };
}
function Ge(e, t) {
  let { pathname: n, routeId: r, method: l, type: o } = t === void 0 ? {} : t,
    i = 'Unknown Server Error',
    a = 'Unknown @remix-run/router error';
  return (
    e === 400
      ? ((i = 'Bad Request'),
        l && n && r
          ? (a =
              'You made a ' +
              l +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : o === 'defer-action'
          ? (a = 'defer() is not supported in actions')
          : o === 'invalid-body' && (a = 'Unable to encode submission body'))
      : e === 403
      ? ((i = 'Forbidden'),
        (a = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((i = 'Not Found'), (a = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((i = 'Method Not Allowed'),
        l && n && r
          ? (a =
              'You made a ' +
              l.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : l && (a = 'Invalid request method "' + l.toUpperCase() + '"')),
    new mu(e || 500, i, new Error(a), !0)
  );
}
function Xs(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Xn(n)) return { result: n, idx: t };
  }
}
function Pd(e) {
  let t = typeof e == 'string' ? Tt(e) : e;
  return Cn(ce({}, t, { hash: '' }));
}
function uv(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ''
    ? t.hash !== ''
    : e.hash === t.hash
    ? !0
    : t.hash !== '';
}
function mn(e) {
  return e.type === pe.deferred;
}
function $r(e) {
  return e.type === pe.error;
}
function Xn(e) {
  return (e && e.type) === pe.redirect;
}
function sv(e) {
  let t = e;
  return (
    t &&
    typeof t == 'object' &&
    typeof t.data == 'object' &&
    typeof t.subscribe == 'function' &&
    typeof t.cancel == 'function' &&
    typeof t.resolveData == 'function'
  );
}
function cv(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function fv(e) {
  return qm.has(e.toLowerCase());
}
function ot(e) {
  return Zm.has(e.toLowerCase());
}
async function Zs(e, t, n, r, l, o) {
  for (let i = 0; i < n.length; i++) {
    let a = n[i],
      u = t[i];
    if (!u) continue;
    let s = e.find((v) => v.route.id === u.route.id),
      p = s != null && !Cd(s, u) && (o && o[u.route.id]) !== void 0;
    if (mn(a) && (l || p)) {
      let v = r[i];
      W(v, 'Expected an AbortSignal for revalidating fetcher deferred result'),
        await Rd(a, v, l).then((m) => {
          m && (n[i] = m || n[i]);
        });
    }
  }
}
async function Rd(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: pe.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: pe.error, error: l };
      }
    return { type: pe.data, data: e.deferredData.data };
  }
}
function vu(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function ya(e, t) {
  let n = typeof t == 'string' ? Tt(t).search : t.search;
  if (e[e.length - 1].route.index && vu(n || '')) return e[e.length - 1];
  let r = Uo(e);
  return r[r.length - 1];
}
function Js(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: l,
    formData: o,
    json: i,
  } = e;
  if (!(!t || !n || !r)) {
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: l,
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0,
      };
    if (i !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: i,
        text: void 0,
      };
  }
}
function xi(e, t) {
  return t
    ? {
        state: 'loading',
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: 'loading',
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function dv(e, t) {
  return {
    state: 'submitting',
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Rr(e, t) {
  return e
    ? {
        state: 'loading',
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: 'loading',
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function pv(e, t) {
  return {
    state: 'submitting',
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Ut(e) {
  return {
    state: 'idle',
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function hv(e, t) {
  try {
    let n = e.sessionStorage.getItem(kd);
    if (n) {
      let r = JSON.parse(n);
      for (let [l, o] of Object.entries(r || {}))
        o && Array.isArray(o) && t.set(l, new Set(o || []));
    }
  } catch {}
}
function mv(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, l] of t) n[r] = [...l];
    try {
      e.sessionStorage.setItem(kd, JSON.stringify(n));
    } catch (r) {
      kn(
        !1,
        'Failed to save applied view transitions in sessionStorage (' + r + ').'
      );
    }
  }
}
/**
 * React Router v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function yo() {
  return (
    (yo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    yo.apply(this, arguments)
  );
}
const Io = k.createContext(null),
  _d = k.createContext(null),
  ar = k.createContext(null),
  Ao = k.createContext(null),
  jt = k.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Nd = k.createContext(null);
function vv(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  pl() || W(!1);
  let { basename: r, navigator: l } = k.useContext(ar),
    { hash: o, pathname: i, search: a } = Td(e, { relative: n }),
    u = i;
  return (
    r !== '/' && (u = i === '/' ? r : Ct([r, i])),
    l.createHref({ pathname: u, search: a, hash: o })
  );
}
function pl() {
  return k.useContext(Ao) != null;
}
function ur() {
  return pl() || W(!1), k.useContext(Ao).location;
}
function Ld(e) {
  k.useContext(ar).static || k.useLayoutEffect(e);
}
function sr() {
  let { isDataRoute: e } = k.useContext(jt);
  return e ? jv() : gv();
}
function gv() {
  pl() || W(!1);
  let e = k.useContext(Io),
    { basename: t, navigator: n } = k.useContext(ar),
    { matches: r } = k.useContext(jt),
    { pathname: l } = ur(),
    o = JSON.stringify(Uo(r).map((u) => u.pathnameBase)),
    i = k.useRef(!1);
  return (
    Ld(() => {
      i.current = !0;
    }),
    k.useCallback(
      function (u, s) {
        if ((s === void 0 && (s = {}), !i.current)) return;
        if (typeof u == 'number') {
          n.go(u);
          return;
        }
        let p = hu(u, JSON.parse(o), l, s.relative === 'path');
        e == null &&
          t !== '/' &&
          (p.pathname = p.pathname === '/' ? t : Ct([t, p.pathname])),
          (s.replace ? n.replace : n.push)(p, s.state, s);
      },
      [t, n, o, l, e]
    )
  );
}
const yv = k.createContext(null);
function wv(e) {
  let t = k.useContext(jt).outlet;
  return t && k.createElement(yv.Provider, { value: e }, t);
}
function Sv() {
  let { matches: e } = k.useContext(jt),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Td(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = k.useContext(jt),
    { pathname: l } = ur(),
    o = JSON.stringify(Uo(r).map((i) => i.pathnameBase));
  return k.useMemo(() => hu(e, JSON.parse(o), l, n === 'path'), [e, o, l, n]);
}
function xv(e, t, n) {
  pl() || W(!1);
  let { navigator: r } = k.useContext(ar),
    { matches: l } = k.useContext(jt),
    o = l[l.length - 1],
    i = o ? o.params : {};
  o && o.pathname;
  let a = o ? o.pathnameBase : '/';
  o && o.route;
  let u = ur(),
    s;
  if (t) {
    var p;
    let w = typeof t == 'string' ? Tt(t) : t;
    a === '/' || ((p = w.pathname) != null && p.startsWith(a)) || W(!1),
      (s = w);
  } else s = u;
  let v = s.pathname || '/',
    m = a === '/' ? v : v.slice(a.length) || '/',
    x = Vn(e, { pathname: m }),
    y = Rv(
      x &&
        x.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, i, w.params),
            pathname: Ct([
              a,
              r.encodeLocation
                ? r.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === '/'
                ? a
                : Ct([
                    a,
                    r.encodeLocation
                      ? r.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          })
        ),
      l,
      n
    );
  return t && y
    ? k.createElement(
        Ao.Provider,
        {
          value: {
            location: yo(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              s
            ),
            navigationType: de.Pop,
          },
        },
        y
      )
    : y;
}
function Ev() {
  let e = Tv(),
    t = Sd(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
    o = null;
  return k.createElement(
    k.Fragment,
    null,
    k.createElement('h2', null, 'Unexpected Application Error!'),
    k.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? k.createElement('pre', { style: l }, n) : null,
    o
  );
}
const kv = k.createElement(Ev, null);
class Cv extends k.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      'React Router caught the following error during render',
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? k.createElement(
          jt.Provider,
          { value: this.props.routeContext },
          k.createElement(Nd.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Pv(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = k.useContext(Io);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    k.createElement(jt.Provider, { value: t }, r)
  );
}
function Rv(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var l;
    if ((l = n) != null && l.errors) e = n.matches;
    else return null;
  }
  let o = e,
    i = (r = n) == null ? void 0 : r.errors;
  if (i != null) {
    let a = o.findIndex(
      (u) => u.route.id && (i == null ? void 0 : i[u.route.id])
    );
    a >= 0 || W(!1), (o = o.slice(0, Math.min(o.length, a + 1)));
  }
  return o.reduceRight((a, u, s) => {
    let p = u.route.id ? (i == null ? void 0 : i[u.route.id]) : null,
      v = null;
    n && (v = u.route.errorElement || kv);
    let m = t.concat(o.slice(0, s + 1)),
      x = () => {
        let y;
        return (
          p
            ? (y = v)
            : u.route.Component
            ? (y = k.createElement(u.route.Component, null))
            : u.route.element
            ? (y = u.route.element)
            : (y = a),
          k.createElement(Pv, {
            match: u,
            routeContext: { outlet: a, matches: m, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (u.route.ErrorBoundary || u.route.errorElement || s === 0)
      ? k.createElement(Cv, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: p,
          children: x(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : x();
  }, null);
}
var jd = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })(jd || {}),
  wo = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    );
  })(wo || {});
function _v(e) {
  let t = k.useContext(Io);
  return t || W(!1), t;
}
function Nv(e) {
  let t = k.useContext(_d);
  return t || W(!1), t;
}
function Lv(e) {
  let t = k.useContext(jt);
  return t || W(!1), t;
}
function Md(e) {
  let t = Lv(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || W(!1), n.route.id;
}
function Tv() {
  var e;
  let t = k.useContext(Nd),
    n = Nv(wo.UseRouteError),
    r = Md(wo.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function jv() {
  let { router: e } = _v(jd.UseNavigateStable),
    t = Md(wo.UseNavigateStable),
    n = k.useRef(!1);
  return (
    Ld(() => {
      n.current = !0;
    }),
    k.useCallback(
      function (l, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof l == 'number'
              ? e.navigate(l)
              : e.navigate(l, yo({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function Mv(e) {
  return wv(e.context);
}
function Dv(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: l = de.Pop,
    navigator: o,
    static: i = !1,
  } = e;
  pl() && W(!1);
  let a = t.replace(/^\/*/, '/'),
    u = k.useMemo(() => ({ basename: a, navigator: o, static: i }), [a, o, i]);
  typeof r == 'string' && (r = Tt(r));
  let {
      pathname: s = '/',
      search: p = '',
      hash: v = '',
      state: m = null,
      key: x = 'default',
    } = r,
    y = k.useMemo(() => {
      let w = ir(s, a);
      return w == null
        ? null
        : {
            location: { pathname: w, search: p, hash: v, state: m, key: x },
            navigationType: l,
          };
    }, [a, s, p, v, m, x, l]);
  return y == null
    ? null
    : k.createElement(
        ar.Provider,
        { value: u },
        k.createElement(Ao.Provider, { children: n, value: y })
      );
}
new Promise(() => {});
function zv(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: k.createElement(e.Component),
        Component: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: k.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function il() {
  return (
    (il = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    il.apply(this, arguments)
  );
}
function Ov(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function Fv(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Uv(e, t) {
  return e.button === 0 && (!t || t === '_self') && !Fv(e);
}
function wa(e) {
  return (
    e === void 0 && (e = ''),
    new URLSearchParams(
      typeof e == 'string' || Array.isArray(e) || e instanceof URLSearchParams
        ? e
        : Object.keys(e).reduce((t, n) => {
            let r = e[n];
            return t.concat(Array.isArray(r) ? r.map((l) => [n, l]) : [[n, r]]);
          }, [])
    )
  );
}
function Iv(e, t) {
  let n = wa(e);
  return (
    t &&
      t.forEach((r, l) => {
        n.has(l) ||
          t.getAll(l).forEach((o) => {
            n.append(l, o);
          });
      }),
    n
  );
}
const Av = [
  'onClick',
  'relative',
  'reloadDocument',
  'replace',
  'state',
  'target',
  'to',
  'preventScrollReset',
  'unstable_viewTransition',
];
function Bv(e, t) {
  return rv({
    basename: t == null ? void 0 : t.basename,
    future: il({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: Pm({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || $v(),
    routes: e,
    mapRouteProperties: zv,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function $v() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = il({}, t, { errors: Vv(t.errors) })), t;
}
function Vv(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, l] of t)
    if (l && l.__type === 'RouteErrorResponse')
      n[r] = new mu(l.status, l.statusText, l.data, l.internal === !0);
    else if (l && l.__type === 'Error') {
      if (l.__subType) {
        let o = window[l.__subType];
        if (typeof o == 'function')
          try {
            let i = new o(l.message);
            (i.stack = ''), (n[r] = i);
          } catch {}
      }
      if (n[r] == null) {
        let o = new Error(l.message);
        (o.stack = ''), (n[r] = o);
      }
    } else n[r] = l;
  return n;
}
const Wv = k.createContext({ isTransitioning: !1 }),
  Hv = k.createContext(new Map()),
  Qv = 'startTransition',
  qs = hp[Qv];
function Kv(e) {
  qs ? qs(e) : e();
}
class Yv {
  constructor() {
    (this.status = 'pending'),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === 'pending' && ((this.status = 'resolved'), t(r));
        }),
          (this.reject = (r) => {
            this.status === 'pending' && ((this.status = 'rejected'), n(r));
          });
      }));
  }
}
function Gv(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [l, o] = k.useState(n.state),
    [i, a] = k.useState(),
    [u, s] = k.useState({ isTransitioning: !1 }),
    [p, v] = k.useState(),
    [m, x] = k.useState(),
    [y, w] = k.useState(),
    N = k.useRef(new Map()),
    { v7_startTransition: d } = r || {},
    f = k.useCallback(
      (P) => {
        d ? Kv(P) : P();
      },
      [d]
    ),
    h = k.useCallback(
      (P, T) => {
        let { deletedFetchers: $, unstable_viewTransitionOpts: F } = T;
        $.forEach((re) => N.current.delete(re)),
          P.fetchers.forEach((re, Le) => {
            re.data !== void 0 && N.current.set(Le, re.data);
          }),
          !F ||
          n.window == null ||
          typeof n.window.document.startViewTransition != 'function'
            ? f(() => o(P))
            : m && p
            ? (p.resolve(),
              m.skipTransition(),
              w({
                state: P,
                currentLocation: F.currentLocation,
                nextLocation: F.nextLocation,
              }))
            : (a(P),
              s({
                isTransitioning: !0,
                currentLocation: F.currentLocation,
                nextLocation: F.nextLocation,
              }));
      },
      [n.window, m, p, N, f]
    );
  k.useLayoutEffect(() => n.subscribe(h), [n, h]),
    k.useEffect(() => {
      u.isTransitioning && v(new Yv());
    }, [u.isTransitioning]),
    k.useEffect(() => {
      if (p && i && n.window) {
        let P = i,
          T = p.promise,
          $ = n.window.document.startViewTransition(async () => {
            f(() => o(P)), await T;
          });
        $.finished.finally(() => {
          v(void 0), x(void 0), a(void 0), s({ isTransitioning: !1 });
        }),
          x($);
      }
    }, [f, i, p, n.window]),
    k.useEffect(() => {
      p && i && l.location.key === i.location.key && p.resolve();
    }, [p, m, l.location, i]),
    k.useEffect(() => {
      !u.isTransitioning &&
        y &&
        (a(y.state),
        s({
          isTransitioning: !0,
          currentLocation: y.currentLocation,
          nextLocation: y.nextLocation,
        }),
        w(void 0));
    }, [u.isTransitioning, y]);
  let c = k.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (P) => n.navigate(P),
        push: (P, T, $) =>
          n.navigate(P, {
            state: T,
            preventScrollReset: $ == null ? void 0 : $.preventScrollReset,
          }),
        replace: (P, T, $) =>
          n.navigate(P, {
            replace: !0,
            state: T,
            preventScrollReset: $ == null ? void 0 : $.preventScrollReset,
          }),
      }),
      [n]
    ),
    E = n.basename || '/',
    L = k.useMemo(
      () => ({ router: n, navigator: c, static: !1, basename: E }),
      [n, c, E]
    );
  return k.createElement(
    k.Fragment,
    null,
    k.createElement(
      Io.Provider,
      { value: L },
      k.createElement(
        _d.Provider,
        { value: l },
        k.createElement(
          Hv.Provider,
          { value: N.current },
          k.createElement(
            Wv.Provider,
            { value: u },
            k.createElement(
              Dv,
              {
                basename: E,
                location: l.location,
                navigationType: l.historyAction,
                navigator: c,
              },
              l.initialized
                ? k.createElement(Xv, { routes: n.routes, state: l })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
function Xv(e) {
  let { routes: t, state: n } = e;
  return xv(t, void 0, n);
}
const Zv =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  Jv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  qv = k.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: o,
        replace: i,
        state: a,
        target: u,
        to: s,
        preventScrollReset: p,
        unstable_viewTransition: v,
      } = t,
      m = Ov(t, Av),
      { basename: x } = k.useContext(ar),
      y,
      w = !1;
    if (typeof s == 'string' && Jv.test(s) && ((y = s), Zv))
      try {
        let h = new URL(window.location.href),
          c = s.startsWith('//') ? new URL(h.protocol + s) : new URL(s),
          E = ir(c.pathname, x);
        c.origin === h.origin && E != null
          ? (s = E + c.search + c.hash)
          : (w = !0);
      } catch {}
    let N = vv(s, { relative: l }),
      d = bv(s, {
        replace: i,
        state: a,
        target: u,
        preventScrollReset: p,
        relative: l,
        unstable_viewTransition: v,
      });
    function f(h) {
      r && r(h), h.defaultPrevented || d(h);
    }
    return k.createElement(
      'a',
      il({}, m, { href: y || N, onClick: w || o ? r : f, ref: n, target: u })
    );
  });
var bs;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState');
})(bs || (bs = {}));
var ec;
(function (e) {
  (e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(ec || (ec = {}));
function bv(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: o,
      relative: i,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    u = sr(),
    s = ur(),
    p = Td(e, { relative: i });
  return k.useCallback(
    (v) => {
      if (Uv(v, n)) {
        v.preventDefault();
        let m = r !== void 0 ? r : Cn(s) === Cn(p);
        u(e, {
          replace: m,
          state: l,
          preventScrollReset: o,
          relative: i,
          unstable_viewTransition: a,
        });
      }
    },
    [s, u, p, r, l, n, e, o, i, a]
  );
}
function Bo(e) {
  let t = k.useRef(wa(e)),
    n = k.useRef(!1),
    r = ur(),
    l = k.useMemo(() => Iv(r.search, n.current ? null : t.current), [r.search]),
    o = sr(),
    i = k.useCallback(
      (a, u) => {
        const s = wa(typeof a == 'function' ? a(l) : a);
        (n.current = !0), o('?' + s, u);
      },
      [o, l]
    );
  return [l, i];
}
function Dd() {
  return R.jsxs('div', {
    role: 'status',
    className: 'mx-auto',
    children: [
      R.jsxs('svg', {
        'aria-hidden': 'true',
        className:
          'w-8 h-8 mx-auto text-gray-200 animate-spin dark:text-gray-600 fill-blue-600',
        viewBox: '0 0 100 101',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        children: [
          R.jsx('path', {
            d: 'M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z',
            fill: 'currentColor',
          }),
          R.jsx('path', {
            d: 'M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z',
            fill: 'currentFill',
          }),
        ],
      }),
      R.jsx('span', { className: 'sr-only', children: 'Loading...' }),
    ],
  });
}
function e0({ id: e, character: t }) {
  const { name: n, gender: r, height: l, mass: o, birth_year: i } = t,
    a = sr(),
    u = ur(),
    s = new URLSearchParams(u.search);
  s.set('details', '1');
  const p = () => {
    a(`/search/${e}?${s.toString()}`);
  };
  return R.jsx('li', {
    className:
      'flex items-center grow w-full gap-5 bg-gray-900/50 text-white rounded-lg',
    children: R.jsxs('div', {
      onClick: p,
      className:
        'flex grow items-center justify-between gap-5 text-white px-5 py-2 cursor-pointer',
      children: [
        R.jsx('h2', { className: 'text-xl font-bold', children: n }),
        R.jsxs('p', {
          children: [R.jsx('strong', { children: 'Birth Year:' }), ' ', i],
        }),
      ],
    }),
  });
}
function t0({ status: e, results: t }) {
  return R.jsx('main', {
    className:
      'p-5 w-full max-w-xl mx-auto flex flex-col items-start bg-gray-700/50 backdrop-blur-sm rounded-lg',
    children: R.jsxs('ul', {
      className: 'flex flex-col gap-2 w-full',
      children: [
        e === 'loading' && R.jsx(Dd, {}),
        e === 'error' &&
          R.jsx('p', {
            className: 'text-white',
            children: 'Something went wrong',
          }),
        e === 'active' &&
          t.length > 0 &&
          t.map((n) => {
            const r = Number(
              n.url
                .split('/')
                .filter((l) => l)
                .pop()
            );
            return R.jsx(e0, { id: r, character: n }, r);
          }),
        e === 'active' &&
          t.length === 0 &&
          R.jsx('p', { className: 'text-white', children: 'Nothing found' }),
      ],
    }),
  });
}
function n0({ children: e }) {
  return R.jsx('div', {
    className:
      'p-5 h-full min-h-screen relative flex flex-col gap-5 w-full bg-sw-bg bg-cover bg-no-repeat bg-top',
    children: e,
  });
}
class r0 extends k.Component {
  constructor() {
    super(...arguments);
    Nu(this, 'state', { hasError: !1 });
  }
  componentDidCatch(n, r) {
    this.setState({ hasError: !0 }),
      console.error('Error caught by error boundary:', n, r);
  }
  render() {
    return this.state.hasError
      ? R.jsx('div', {
          className: 'w-full h-screen bg-sw-bg bg-cover bg-no-repeat bg-top',
          children: R.jsx('div', {
            className: 'p-5 max-w-3xl mx-auto',
            children: R.jsx('p', {
              className: 'text-white',
              children: 'Something went wrong.',
            }),
          }),
        })
      : this.props.children;
  }
}
function l0() {
  const [e, t] = k.useState(!1);
  if (e) throw new Error('An error occurred and caught by the ErrorBoundary.');
  return R.jsx('div', {
    className: 'p-5 fixed bottom-5 right-5',
    children: R.jsx('button', {
      className:
        'focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900',
      onClick: () => t(!0),
      children: 'Throw Error',
    }),
  });
}
function o0(e, t) {
  const n = [];
  for (let r = e; r <= t; r++) n.push(r);
  return n;
}
var $e = ((e) => (
  (e.active = 'active'), (e.loading = 'loading'), (e.error = 'error'), e
))($e || {});
function i0({ status: e, currentPage: t, totalPages: n, onPageChange: r }) {
  const l = o0(1, n);
  return (
    e !== $e.loading &&
    n > 1 &&
    R.jsx('div', {
      className:
        'text-white max-w-xl mx-auto flex flex-wrap justify-center gap-3',
      children: l.map((o) =>
        R.jsx(
          qv,
          {
            to: `/?page=${o}`,
            onClick: () => r(o),
            className: `w-8 h-8 text-sm flex items-center justify-center transition   rounded ${
              t === o
                ? 'bg-white text-gray-500'
                : 'bg-gray-500/50 hover:bg-gray-500/70'
            }`,
            children: o,
          },
          o
        )
      ),
    })
  );
}
const zd = 'https://swapi.dev/api/people/',
  fn = 5,
  al = 10,
  So = 20;
async function a0(e = '', t = 1, n = al) {
  let r = zl(e, t),
    l,
    o;
  if (n === fn) {
    const i = Math.ceil(t / 2);
    r = zl(e, i);
  }
  if (n === So) {
    const i = t * 2 - 1,
      a = t * 2;
    (l = zl(e, i)), (o = zl(e, a));
  }
  try {
    let i;
    if (
      ((n === fn || n === al) && (i = await (await fetch(r)).json()),
      n === So && l && o)
    ) {
      const p = [
        fetch(l).then((y) => y.json()),
        fetch(o).then((y) => y.json()),
      ];
      let v = 0;
      const m = [],
        x = await Promise.allSettled(p).then((y) =>
          y.forEach((w) => {
            w.status === 'fulfilled' &&
              Array.isArray(w.value.results) &&
              (m.push(...w.value.results),
              w.value.count > v && (v = w.value.count));
          })
        );
      i = { count: v, results: m };
    }
    let a;
    const u = Math.floor(i.count / n);
    i.count % n === 0 ? (a = u) : (a = u + 1);
    let s = i.results;
    return (
      n === fn && (t % 2 !== 0 ? (s = s.slice(0, fn)) : (s = s.slice(fn))),
      { results: s, pages: a }
    );
  } catch (i) {
    throw (console.error(i), i);
  }
}
function zl(e, t) {
  return `${zd}${e ? `?search=${e.toLowerCase().trim()}` : ''}${
    t === 1 ? '' : `${e ? '&' : '?'}page=${t}`
  }`;
}
async function u0(e) {
  const t = `${zd}${e}`;
  try {
    return { data: await (await fetch(t)).json() };
  } catch (n) {
    throw (console.error(n), n);
  }
}
function s0({ searchTerm: e, status: t }) {
  return R.jsxs(R.Fragment, {
    children: [
      R.jsx('label', {
        htmlFor: 'default-search',
        className:
          'mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white',
        children: 'Search',
      }),
      R.jsxs('div', {
        className: 'relative',
        children: [
          R.jsx('div', {
            className:
              'absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none',
            children: R.jsx('svg', {
              className: 'w-4 h-4 text-gray-500 dark:text-gray-400 z-10',
              'aria-hidden': 'true',
              xmlns: 'http://www.w3.org/2000/svg',
              fill: 'none',
              viewBox: '0 0 20 20',
              children: R.jsx('path', {
                stroke: 'currentColor',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '2',
                d: 'm19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z',
              }),
            }),
          }),
          R.jsx('input', {
            type: 'search',
            id: 'searchTerm',
            name: 'searchTerm',
            defaultValue: e,
            autoComplete: 'off',
            className:
              'block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700/50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 backdrop-blur-lg',
            placeholder: 'Search a Star Wars character',
            disabled: t === $e.loading,
          }),
          R.jsx('button', {
            type: 'submit',
            className:
              'text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
            disabled: t === $e.loading,
            children: 'Search',
          }),
        ],
      }),
    ],
  });
}
function c0({ searchTerm: e, status: t, onSearchChange: n }) {
  const [r] = Bo(),
    l = sr(),
    o = (i) => {
      i.preventDefault();
      const u = i.target.elements.namedItem('searchTerm').value,
        s = new URLSearchParams(r);
      s.set('page', '1'),
        s.set('details', '0'),
        s.delete('page'),
        s.delete('details'),
        l(`/?${s.toString()}`),
        window.localStorage.setItem('searchTerm', u),
        n(u);
    };
  return R.jsx('div', {
    className: 'grow',
    children: R.jsx('form', {
      className: '',
      onSubmit: o,
      children: R.jsx(s0, { searchTerm: e, status: t }),
    }),
  });
}
function f0({ perPage: e, onSelect: t }) {
  return R.jsxs('div', {
    className: 'w-28 h-20 gap-2 flex flex-col justify-end',
    children: [
      R.jsx('label', {
        htmlFor: 'per_page',
        className: 'block text-sm font-medium text-gray-900 dark:text-white',
        children: 'Items per page',
      }),
      R.jsxs('select', {
        id: 'per_page',
        className:
          'w-full h-12 bg-gray-50/50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700/50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 backdrop-blur-lg',
        value: e,
        onChange: t,
        children: [
          R.jsx('option', { value: fn, children: fn }),
          R.jsx('option', { value: al, children: al }),
          R.jsx('option', { value: So, children: So }),
        ],
      }),
    ],
  });
}
const Od = k.createContext({
  searchTerm: '',
  setSearchTerm: () => {},
  results: [],
  setResults: () => {},
});
function d0({ children: e }) {
  const [t, n] = k.useState(window.localStorage.getItem('searchTerm') ?? ''),
    [r, l] = k.useState([]);
  return R.jsx(Od.Provider, {
    value: { searchTerm: t, setSearchTerm: n, results: r, setResults: l },
    children: e,
  });
}
function p0() {
  const e = k.useContext(Od);
  if (e === void 0)
    throw new Error('SearchContext was used outside of the SearchProvider');
  return e;
}
const h0 = () => {
  const { searchTerm: e, setSearchTerm: t, results: n, setResults: r } = p0(),
    [l, o] = k.useState($e.active),
    [i, a] = k.useState(1),
    [u, s] = k.useState(al),
    [p] = Bo(),
    [v, m] = k.useState(p.get('page') ? Number(p.get('page')) : 1),
    x = sr(),
    y = k.useCallback(
      async (f, h = 1, c) => {
        try {
          o($e.loading);
          const { results: E, pages: L } = await a0(f, h, c);
          r(E), a(L), o($e.active);
        } catch (E) {
          E instanceof Error
            ? console.log(E.message)
            : console.error('An unknown error occurred:', E),
            o($e.error);
        }
      },
      [r]
    );
  k.useEffect(() => {
    y(e, v, u);
  }, [e, v, u, y]);
  const w = (f) => {
      m(1), t(f), x('/');
    },
    N = (f) => {
      m(f);
    },
    d = (f) => {
      s(Number(f.target.value)), m(1), x('/');
    };
  return R.jsx(r0, {
    children: R.jsxs(n0, {
      children: [
        R.jsxs('header', {
          className: 'flex w-full items-end max-w-xl mx-auto gap-5',
          children: [
            R.jsx(c0, { searchTerm: e, status: l, onSearchChange: w }),
            R.jsx(f0, { perPage: u, onSelect: d }),
          ],
        }),
        R.jsx(t0, { status: l, results: n }),
        R.jsx(i0, {
          status: l,
          currentPage: v,
          totalPages: i,
          onPageChange: N,
        }),
        R.jsx(l0, {}),
        R.jsx(Mv, {}),
      ],
    }),
  });
};
function tc() {
  return R.jsx(h0, {});
}
function m0({ onClose: e }) {
  return R.jsx('button', {
    onClick: e,
    className: 'fixed top-4 right-4',
    children: R.jsx('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      fill: 'none',
      viewBox: '0 0 24 24',
      strokeWidth: 1.5,
      stroke: 'white',
      className: 'w-6 h-6',
      children: R.jsx('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        d: 'M6 18L18 6M6 6l12 12',
      }),
    }),
  });
}
function nc({ children: e }) {
  const t = sr(),
    [n] = Bo(),
    r = k.useCallback(() => {
      const l = new URLSearchParams(n);
      l.set('details', '0'), l.delete('details'), t(`?${l.toString()}`);
    }, [n, t]);
  return (
    k.useEffect(() => {
      function l(o) {
        o.code === 'Escape' && r();
      }
      return (
        window.addEventListener('keydown', l),
        () => {
          window.removeEventListener('keydown', l);
        }
      );
    }, [r]),
    R.jsxs('div', {
      id: 'modal',
      className: 'fixed top-0 left-0 w-full h-full',
      children: [
        R.jsx('div', { className: 'w-full h-full bg-gray-900/30', onClick: r }),
        R.jsxs('div', {
          className:
            'z-20 py-20 fixed top-0 right-0 h-full w-96 bg-gray-900/50 backdrop-blur-sm',
          children: [R.jsx(m0, { onClose: r }), e],
        }),
      ],
    })
  );
}
const Ln = (e) =>
  e
    .split(' ')
    .map((t) => t.charAt(0).toUpperCase() + t.slice(1))
    .join(' ');
function v0({ details: e }) {
  const {
    name: t,
    birth_year: n,
    height: r,
    mass: l,
    hair_color: o,
    skin_color: i,
    eye_color: a,
    gender: u,
  } = e;
  return R.jsx('div', {
    className: 'text-white py-20 px-5',
    children: R.jsxs('ul', {
      className: 'flex flex-col gap-3',
      children: [
        R.jsxs('li', {
          className: 'flex justify-between',
          children: [
            R.jsx('span', { className: 'font-bold', children: 'Name: ' }),
            Ln(t),
          ],
        }),
        R.jsxs('li', {
          className: 'flex justify-between',
          children: [
            R.jsx('span', { className: 'font-bold', children: 'Birth Year: ' }),
            Ln(n),
          ],
        }),
        R.jsxs('li', {
          className: 'flex justify-between',
          children: [
            R.jsx('span', { className: 'font-bold', children: 'Height: ' }),
            r,
          ],
        }),
        R.jsxs('li', {
          className: 'flex justify-between',
          children: [
            R.jsx('span', { className: 'font-bold', children: 'Mass: ' }),
            l,
          ],
        }),
        R.jsxs('li', {
          className: 'flex justify-between',
          children: [
            R.jsx('span', { className: 'font-bold', children: 'Hair Color: ' }),
            Ln(o),
          ],
        }),
        R.jsxs('li', {
          className: 'flex justify-between',
          children: [
            R.jsx('span', { className: 'font-bold', children: 'Skin Color: ' }),
            Ln(i),
          ],
        }),
        R.jsxs('li', {
          className: 'flex justify-between',
          children: [
            R.jsx('span', { className: 'font-bold', children: 'Eye Color: ' }),
            Ln(a),
          ],
        }),
        R.jsxs('li', {
          className: 'flex justify-between',
          children: [
            R.jsx('span', { className: 'font-bold', children: 'Gender: ' }),
            Ln(u),
          ],
        }),
      ],
    }),
  });
}
function g0() {
  const [e, t] = k.useState(null),
    [n, r] = k.useState($e.active),
    { id: l } = Sv(),
    [o] = Bo(),
    i = Number(o.get('details')) === 1 ? 1 : 0;
  return (
    k.useEffect(() => {
      (async () => {
        r($e.loading);
        const { data: u } = await u0(Number(l));
        u && t(u), r($e.active);
      })();
    }, [l]),
    R.jsx(R.Fragment, {
      children:
        i === 1 &&
        R.jsxs(R.Fragment, {
          children: [
            n === $e.loading && R.jsx(nc, { children: R.jsx(Dd, {}) }),
            n === $e.active &&
              e !== null &&
              R.jsx(nc, { children: R.jsx(v0, { details: e }) }),
          ],
        }),
    })
  );
}
function y0() {
  return R.jsx('div', {
    className: 'w-full h-screen bg-sw-bg bg-cover bg-no-repeat bg-top',
    children: R.jsx('div', {
      className: 'p-5 max-w-3xl mx-auto',
      children: R.jsx('p', {
        className: 'text-white',
        children: '404 Not Found.',
      }),
    }),
  });
}
const w0 = Bv([
  { path: '/', element: R.jsx(tc, {}) },
  {
    path: '/search',
    element: R.jsx(tc, {}),
    children: [{ path: ':id', element: R.jsx(g0, {}) }],
  },
  { path: '*', element: R.jsx(y0, {}) },
]);
Ei.createRoot(document.getElementById('root')).render(
  R.jsx(dc.StrictMode, {
    children: R.jsx(d0, { children: R.jsx(Gv, { router: w0 }) }),
  })
);
