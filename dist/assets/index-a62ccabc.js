var Yd = Object.defineProperty;
var Gd = (e, t, n) =>
  t in e
    ? Yd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Na = (e, t, n) => (Gd(e, typeof t != 'symbol' ? t + '' : t, n), n);
function Xd(e, t) {
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
function Zd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var nc = { exports: {} },
  xo = {},
  rc = { exports: {} },
  H = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var al = Symbol.for('react.element'),
  Jd = Symbol.for('react.portal'),
  qd = Symbol.for('react.fragment'),
  bd = Symbol.for('react.strict_mode'),
  ep = Symbol.for('react.profiler'),
  tp = Symbol.for('react.provider'),
  np = Symbol.for('react.context'),
  rp = Symbol.for('react.forward_ref'),
  lp = Symbol.for('react.suspense'),
  op = Symbol.for('react.memo'),
  ip = Symbol.for('react.lazy'),
  La = Symbol.iterator;
function up(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (La && e[La]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var lc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  oc = Object.assign,
  ic = {};
function rr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ic),
    (this.updater = n || lc);
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
function Su(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ic),
    (this.updater = n || lc);
}
var xu = (Su.prototype = new uc());
xu.constructor = Su;
oc(xu, rr.prototype);
xu.isPureReactComponent = !0;
var Ta = Array.isArray,
  ac = Object.prototype.hasOwnProperty,
  Eu = { current: null },
  sc = { key: !0, ref: !0, __self: !0, __source: !0 };
function cc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      ac.call(t, r) && !sc.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var a = Array(u), s = 0; s < u; s++) a[s] = arguments[s + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: al,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Eu.current,
  };
}
function ap(e, t) {
  return {
    $$typeof: al,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ku(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === al;
}
function sp(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ja = /\/+/g;
function Yo(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? sp('' + e.key)
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
          case al:
          case Jd:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === '' ? '.' + Yo(i, 0) : r),
      Ta(l)
        ? ((n = ''),
          e != null && (n = e.replace(ja, '$&/') + '/'),
          Ol(l, t, n, '', function (s) {
            return s;
          }))
        : l != null &&
          (ku(l) &&
            (l = ap(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ''
                  : ('' + l.key).replace(ja, '$&/') + '/') +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === '' ? '.' : r + ':'), Ta(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var a = r + Yo(o, u);
      i += Ol(o, t, n, a, l);
    }
  else if (((a = up(e)), typeof a == 'function'))
    for (e = a.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + Yo(o, u++)), (i += Ol(o, t, n, a, l));
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
function cp(e) {
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
  fp = {
    ReactCurrentDispatcher: De,
    ReactCurrentBatchConfig: Fl,
    ReactCurrentOwner: Eu,
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
    if (!ku(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
H.Component = rr;
H.Fragment = qd;
H.Profiler = ep;
H.PureComponent = Su;
H.StrictMode = bd;
H.Suspense = lp;
H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fp;
H.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = oc({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Eu.current)),
      t.key !== void 0 && (l = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (a in t)
      ac.call(t, a) &&
        !sc.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var s = 0; s < a; s++) u[s] = arguments[s + 2];
    r.children = u;
  }
  return { $$typeof: al, type: e.type, key: l, ref: o, props: r, _owner: i };
};
H.createContext = function (e) {
  return (
    (e = {
      $$typeof: np,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: tp, _context: e }),
    (e.Consumer = e)
  );
};
H.createElement = cc;
H.createFactory = function (e) {
  var t = cc.bind(null, e);
  return (t.type = e), t;
};
H.createRef = function () {
  return { current: null };
};
H.forwardRef = function (e) {
  return { $$typeof: rp, render: e };
};
H.isValidElement = ku;
H.lazy = function (e) {
  return { $$typeof: ip, _payload: { _status: -1, _result: e }, _init: cp };
};
H.memo = function (e, t) {
  return { $$typeof: op, type: e, compare: t === void 0 ? null : t };
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
rc.exports = H;
var k = rc.exports;
const fc = Zd(k),
  dp = Xd({ __proto__: null, default: fc }, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pp = k,
  hp = Symbol.for('react.element'),
  mp = Symbol.for('react.fragment'),
  vp = Object.prototype.hasOwnProperty,
  gp = pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  yp = { key: !0, ref: !0, __self: !0, __source: !0 };
function dc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) vp.call(t, r) && !yp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: hp,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: gp.current,
  };
}
xo.Fragment = mp;
xo.jsx = dc;
xo.jsxs = dc;
nc.exports = xo;
var R = nc.exports,
  Ei = {},
  pc = { exports: {} },
  Qe = {},
  hc = { exports: {} },
  mc = {};
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
          Rn = j[gt];
        if (0 > l(ln, B))
          gt < q && 0 > l(Rn, ln)
            ? ((j[X] = Rn), (j[gt] = B), (X = gt))
            : ((j[X] = ln), (j[Te] = B), (X = Te));
        else if (gt < q && 0 > l(Rn, B)) (j[X] = Rn), (j[gt] = B), (X = gt);
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
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var a = [],
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
        r(s), (U.sortIndex = U.expirationTime), t(a, U);
      else break;
      U = n(s);
    }
  }
  function c(j) {
    if (((w = !1), h(j), !y))
      if (n(a) !== null) (y = !0), Mt(E);
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
        h(U), v = n(a);
        v !== null && (!(v.expirationTime > U) || (j && !re()));

      ) {
        var X = v.callback;
        if (typeof X == 'function') {
          (v.callback = null), (m = v.priorityLevel);
          var q = X(v.expirationTime <= U);
          (U = e.unstable_now()),
            typeof q == 'function' ? (v.callback = q) : v === n(a) && r(a),
            h(U);
        } else r(a);
        v = n(a);
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
      ae = rn.port2;
    (rn.port1.onmessage = Le),
      (ct = function () {
        ae.postMessage(null);
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
      return n(a);
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
            n(a) === null &&
              j === n(s) &&
              (w ? (d(T), (T = -1)) : (w = !0), vt(c, B - X)))
          : ((j.sortIndex = q), t(a, j), y || x || ((y = !0), Mt(E))),
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
})(mc);
hc.exports = mc;
var wp = hc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vc = k,
  He = wp;
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
var gc = new Set(),
  Vr = {};
function Pn(e, t) {
  Zn(e, t), Zn(e + 'Capture', t);
}
function Zn(e, t) {
  for (Vr[e] = t, e = 0; e < t.length; e++) gc.add(t[e]);
}
var Pt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  ki = Object.prototype.hasOwnProperty,
  Sp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ma = {},
  Da = {};
function xp(e) {
  return ki.call(Da, e)
    ? !0
    : ki.call(Ma, e)
    ? !1
    : Sp.test(e)
    ? (Da[e] = !0)
    : ((Ma[e] = !0), !1);
}
function Ep(e, t, n, r) {
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
function kp(e, t, n, r) {
  if (t === null || typeof t > 'u' || Ep(e, t, n, r)) return !0;
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
var Cu = /[\-:]([a-z])/g;
function Pu(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Cu, Pu);
    Ce[t] = new ze(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Cu, Pu);
    Ce[t] = new ze(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Cu, Pu);
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
function _u(e, t, n, r) {
  var l = Ce.hasOwnProperty(t) ? Ce[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (kp(t, n, l, r) && (n = null),
    r || l === null
      ? xp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
var Lt = vc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  yl = Symbol.for('react.element'),
  Tn = Symbol.for('react.portal'),
  jn = Symbol.for('react.fragment'),
  Ru = Symbol.for('react.strict_mode'),
  Ci = Symbol.for('react.profiler'),
  yc = Symbol.for('react.provider'),
  wc = Symbol.for('react.context'),
  Nu = Symbol.for('react.forward_ref'),
  Pi = Symbol.for('react.suspense'),
  _i = Symbol.for('react.suspense_list'),
  Lu = Symbol.for('react.memo'),
  It = Symbol.for('react.lazy'),
  Sc = Symbol.for('react.offscreen'),
  za = Symbol.iterator;
function mr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (za && e[za]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var ue = Object.assign,
  Go;
function Rr(e) {
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
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var a =
                  `
` + l[i].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    a.includes('<anonymous>') &&
                    (a = a.replace('<anonymous>', e.displayName)),
                  a
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (Xo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Rr(e) : '';
}
function Cp(e) {
  switch (e.tag) {
    case 5:
      return Rr(e.type);
    case 16:
      return Rr('Lazy');
    case 13:
      return Rr('Suspense');
    case 19:
      return Rr('SuspenseList');
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
function Ri(e) {
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
    case Ru:
      return 'StrictMode';
    case Pi:
      return 'Suspense';
    case _i:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case wc:
        return (e.displayName || 'Context') + '.Consumer';
      case yc:
        return (e._context.displayName || 'Context') + '.Provider';
      case Nu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Lu:
        return (
          (t = e.displayName || null), t !== null ? t : Ri(e.type) || 'Memo'
        );
      case It:
        (t = e._payload), (e = e._init);
        try {
          return Ri(e(t));
        } catch {}
    }
  return null;
}
function Pp(e) {
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
      return Ri(t);
    case 8:
      return t === Ru ? 'StrictMode' : 'Mode';
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
function xc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function _p(e) {
  var t = xc(e) ? 'checked' : 'value',
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
  e._valueTracker || (e._valueTracker = _p(e));
}
function Ec(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = xc(e) ? (e.checked ? 'true' : 'false') : e.value),
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
  return ue({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Oa(e, t) {
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
function kc(e, t) {
  (t = t.checked), t != null && _u(e, 'checked', t, !1);
}
function Li(e, t) {
  kc(e, t);
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
function Fa(e, t, n) {
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
  return ue({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Ua(e, t) {
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
function Cc(e, t) {
  var n = qt(t.value),
    r = qt(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Ia(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Pc(e) {
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
    ? Pc(t)
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
  Rp = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(jr).forEach(function (e) {
  Rp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (jr[t] = jr[e]);
  });
});
function Rc(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (jr.hasOwnProperty(e) && jr[e])
    ? ('' + t).trim()
    : t + 'px';
}
function Nc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        l = Rc(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Np = ue(
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
    if (Np[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Tu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Fi = null,
  Hn = null,
  Qn = null;
function Aa(e) {
  if ((e = fl(e))) {
    if (typeof Fi != 'function') throw Error(_(280));
    var t = e.stateNode;
    t && ((t = _o(t)), Fi(e.stateNode, e.type, t));
  }
}
function Lc(e) {
  Hn ? (Qn ? Qn.push(e) : (Qn = [e])) : (Hn = e);
}
function Tc() {
  if (Hn) {
    var e = Hn,
      t = Qn;
    if (((Qn = Hn = null), Aa(e), t)) for (e = 0; e < t.length; e++) Aa(t[e]);
  }
}
function jc(e, t) {
  return e(t);
}
function Mc() {}
var Jo = !1;
function Dc(e, t, n) {
  if (Jo) return e(t, n);
  Jo = !0;
  try {
    return jc(e, t, n);
  } finally {
    (Jo = !1), (Hn !== null || Qn !== null) && (Mc(), Tc());
  }
}
function Hr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = _o(n);
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
function Lp(e, t, n, r, l, o, i, u, a) {
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
  Tp = {
    onError: function (e) {
      (Mr = !0), (Gl = e);
    },
  };
function jp(e, t, n, r, l, o, i, u, a) {
  (Mr = !1), (Gl = null), Lp.apply(Tp, arguments);
}
function Mp(e, t, n, r, l, o, i, u, a) {
  if ((jp.apply(this, arguments), Mr)) {
    if (Mr) {
      var s = Gl;
      (Mr = !1), (Gl = null);
    } else throw Error(_(198));
    Xl || ((Xl = !0), (Ii = s));
  }
}
function _n(e) {
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
function zc(e) {
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
function Ba(e) {
  if (_n(e) !== e) throw Error(_(188));
}
function Dp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = _n(e)), t === null)) throw Error(_(188));
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
        if (o === n) return Ba(l), e;
        if (o === r) return Ba(l), t;
        o = o.sibling;
      }
      throw Error(_(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(_(189));
      }
    }
    if (n.alternate !== r) throw Error(_(190));
  }
  if (n.tag !== 3) throw Error(_(188));
  return n.stateNode.current === n ? e : t;
}
function Oc(e) {
  return (e = Dp(e)), e !== null ? Fc(e) : null;
}
function Fc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Fc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Uc = He.unstable_scheduleCallback,
  $a = He.unstable_cancelCallback,
  zp = He.unstable_shouldYield,
  Op = He.unstable_requestPaint,
  he = He.unstable_now,
  Fp = He.unstable_getCurrentPriorityLevel,
  ju = He.unstable_ImmediatePriority,
  Ic = He.unstable_UserBlockingPriority,
  Zl = He.unstable_NormalPriority,
  Up = He.unstable_LowPriority,
  Ac = He.unstable_IdlePriority,
  Eo = null,
  ht = null;
function Ip(e) {
  if (ht && typeof ht.onCommitFiberRoot == 'function')
    try {
      ht.onCommitFiberRoot(Eo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ut = Math.clz32 ? Math.clz32 : $p,
  Ap = Math.log,
  Bp = Math.LN2;
function $p(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Ap(e) / Bp) | 0)) | 0;
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
    var u = i & ~l;
    u !== 0 ? (r = Lr(u)) : ((o &= i), o !== 0 && (r = Lr(o)));
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
      (n = 31 - ut(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Vp(e, t) {
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
function Wp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - ut(o),
      u = 1 << i,
      a = l[i];
    a === -1
      ? (!(u & n) || u & r) && (l[i] = Vp(u, t))
      : a <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function Ai(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Bc() {
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
    (t = 31 - ut(t)),
    (e[t] = n);
}
function Hp(e, t) {
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
    var l = 31 - ut(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Mu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ut(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var Y = 0;
function $c(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Vc,
  Du,
  Wc,
  Hc,
  Qc,
  Bi = !1,
  kl = [],
  Ht = null,
  Qt = null,
  Kt = null,
  Qr = new Map(),
  Kr = new Map(),
  Bt = [],
  Qp =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function Va(e, t) {
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
      t !== null && ((t = fl(t)), t !== null && Du(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Kp(e, t, n, r, l) {
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
function Kc(e) {
  var t = dn(e.target);
  if (t !== null) {
    var n = _n(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = zc(n)), t !== null)) {
          (e.blockedOn = t),
            Qc(e.priority, function () {
              Wc(n);
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
    } else return (t = fl(n)), t !== null && Du(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Wa(e, t, n) {
  Ul(e) && n.delete(t);
}
function Yp() {
  (Bi = !1),
    Ht !== null && Ul(Ht) && (Ht = null),
    Qt !== null && Ul(Qt) && (Qt = null),
    Kt !== null && Ul(Kt) && (Kt = null),
    Qr.forEach(Wa),
    Kr.forEach(Wa);
}
function yr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Bi ||
      ((Bi = !0),
      He.unstable_scheduleCallback(He.unstable_NormalPriority, Yp)));
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
    Kc(n), n.blockedOn === null && Bt.shift();
}
var Kn = Lt.ReactCurrentBatchConfig,
  ql = !0;
function Gp(e, t, n, r) {
  var l = Y,
    o = Kn.transition;
  Kn.transition = null;
  try {
    (Y = 1), zu(e, t, n, r);
  } finally {
    (Y = l), (Kn.transition = o);
  }
}
function Xp(e, t, n, r) {
  var l = Y,
    o = Kn.transition;
  Kn.transition = null;
  try {
    (Y = 4), zu(e, t, n, r);
  } finally {
    (Y = l), (Kn.transition = o);
  }
}
function zu(e, t, n, r) {
  if (ql) {
    var l = $i(e, t, n, r);
    if (l === null) ai(e, t, r, bl, n), Va(e, r);
    else if (Kp(l, e, t, n, r)) r.stopPropagation();
    else if ((Va(e, r), t & 4 && -1 < Qp.indexOf(e))) {
      for (; l !== null; ) {
        var o = fl(l);
        if (
          (o !== null && Vc(o),
          (o = $i(e, t, n, r)),
          o === null && ai(e, t, r, bl, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else ai(e, t, r, null, n);
  }
}
var bl = null;
function $i(e, t, n, r) {
  if (((bl = null), (e = Tu(r)), (e = dn(e)), e !== null))
    if (((t = _n(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = zc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (bl = e), null;
}
function Yc(e) {
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
      switch (Fp()) {
        case ju:
          return 1;
        case Ic:
          return 4;
        case Zl:
        case Up:
          return 16;
        case Ac:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Vt = null,
  Ou = null,
  Il = null;
function Gc() {
  if (Il) return Il;
  var e,
    t = Ou,
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
function Ha() {
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
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Cl
        : Ha),
      (this.isPropagationStopped = Ha),
      this
    );
  }
  return (
    ue(t.prototype, {
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
  Fu = Ke(lr),
  cl = ue({}, lr, { view: 0, detail: 0 }),
  Zp = Ke(cl),
  bo,
  ei,
  wr,
  ko = ue({}, cl, {
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
    getModifierState: Uu,
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
  Qa = Ke(ko),
  Jp = ue({}, ko, { dataTransfer: 0 }),
  qp = Ke(Jp),
  bp = ue({}, cl, { relatedTarget: 0 }),
  ti = Ke(bp),
  eh = ue({}, lr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  th = Ke(eh),
  nh = ue({}, lr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  rh = Ke(nh),
  lh = ue({}, lr, { data: 0 }),
  Ka = Ke(lh),
  oh = {
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
  ih = {
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
  uh = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function ah(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = uh[e]) ? !!t[e] : !1;
}
function Uu() {
  return ah;
}
var sh = ue({}, cl, {
    key: function (e) {
      if (e.key) {
        var t = oh[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Al(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? ih[e.keyCode] || 'Unidentified'
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
    getModifierState: Uu,
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
  ch = Ke(sh),
  fh = ue({}, ko, {
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
  Ya = Ke(fh),
  dh = ue({}, cl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Uu,
  }),
  ph = Ke(dh),
  hh = ue({}, lr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  mh = Ke(hh),
  vh = ue({}, ko, {
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
  gh = Ke(vh),
  yh = [9, 13, 27, 32],
  Iu = Pt && 'CompositionEvent' in window,
  Dr = null;
Pt && 'documentMode' in document && (Dr = document.documentMode);
var wh = Pt && 'TextEvent' in window && !Dr,
  Xc = Pt && (!Iu || (Dr && 8 < Dr && 11 >= Dr)),
  Ga = String.fromCharCode(32),
  Xa = !1;
function Zc(e, t) {
  switch (e) {
    case 'keyup':
      return yh.indexOf(t.keyCode) !== -1;
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
function Jc(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Mn = !1;
function Sh(e, t) {
  switch (e) {
    case 'compositionend':
      return Jc(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Xa = !0), Ga);
    case 'textInput':
      return (e = t.data), e === Ga && Xa ? null : e;
    default:
      return null;
  }
}
function xh(e, t) {
  if (Mn)
    return e === 'compositionend' || (!Iu && Zc(e, t))
      ? ((e = Gc()), (Il = Ou = Vt = null), (Mn = !1), e)
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
      return Xc && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var Eh = {
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
function Za(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!Eh[e.type] : t === 'textarea';
}
function qc(e, t, n, r) {
  Lc(r),
    (t = eo(t, 'onChange')),
    0 < t.length &&
      ((n = new Fu('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var zr = null,
  Gr = null;
function kh(e) {
  cf(e, 0);
}
function Co(e) {
  var t = On(e);
  if (Ec(t)) return e;
}
function Ch(e, t) {
  if (e === 'change') return t;
}
var bc = !1;
if (Pt) {
  var ni;
  if (Pt) {
    var ri = 'oninput' in document;
    if (!ri) {
      var Ja = document.createElement('div');
      Ja.setAttribute('oninput', 'return;'),
        (ri = typeof Ja.oninput == 'function');
    }
    ni = ri;
  } else ni = !1;
  bc = ni && (!document.documentMode || 9 < document.documentMode);
}
function qa() {
  zr && (zr.detachEvent('onpropertychange', ef), (Gr = zr = null));
}
function ef(e) {
  if (e.propertyName === 'value' && Co(Gr)) {
    var t = [];
    qc(t, Gr, e, Tu(e)), Dc(kh, t);
  }
}
function Ph(e, t, n) {
  e === 'focusin'
    ? (qa(), (zr = t), (Gr = n), zr.attachEvent('onpropertychange', ef))
    : e === 'focusout' && qa();
}
function _h(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return Co(Gr);
}
function Rh(e, t) {
  if (e === 'click') return Co(t);
}
function Nh(e, t) {
  if (e === 'input' || e === 'change') return Co(t);
}
function Lh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var st = typeof Object.is == 'function' ? Object.is : Lh;
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
function ba(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function es(e, t) {
  var n = ba(e);
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
    n = ba(n);
  }
}
function tf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? tf(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function nf() {
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
function Au(e) {
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
function Th(e) {
  var t = nf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    tf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Au(n)) {
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
var jh = Pt && 'documentMode' in document && 11 >= document.documentMode,
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
    'selectionStart' in r && Au(r)
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
        ((t = new Fu('onSelect', 'select', null, t, n)),
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
  rf = {};
Pt &&
  ((rf = document.createElement('div').style),
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
  for (n in t) if (t.hasOwnProperty(n) && n in rf) return (li[e] = t[n]);
  return e;
}
var lf = Po('animationend'),
  of = Po('animationiteration'),
  uf = Po('animationstart'),
  af = Po('transitionend'),
  sf = new Map(),
  ns =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function en(e, t) {
  sf.set(e, t), Pn(t, [e]);
}
for (var oi = 0; oi < ns.length; oi++) {
  var ii = ns[oi],
    Mh = ii.toLowerCase(),
    Dh = ii[0].toUpperCase() + ii.slice(1);
  en(Mh, 'on' + Dh);
}
en(lf, 'onAnimationEnd');
en(of, 'onAnimationIteration');
en(uf, 'onAnimationStart');
en('dblclick', 'onDoubleClick');
en('focusin', 'onFocus');
en('focusout', 'onBlur');
en(af, 'onTransitionEnd');
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
  zh = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Tr));
function rs(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Mp(r, t, void 0, e), (e.currentTarget = null);
}
function cf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            a = u.instance,
            s = u.currentTarget;
          if (((u = u.listener), a !== o && l.isPropagationStopped())) break e;
          rs(l, u, s), (o = a);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (a = u.instance),
            (s = u.currentTarget),
            (u = u.listener),
            a !== o && l.isPropagationStopped())
          )
            break e;
          rs(l, u, s), (o = a);
        }
    }
  }
  if (Xl) throw ((e = Ii), (Xl = !1), (Ii = null), e);
}
function ee(e, t) {
  var n = t[Gi];
  n === void 0 && (n = t[Gi] = new Set());
  var r = e + '__bubble';
  n.has(r) || (ff(t, e, 2, !1), n.add(r));
}
function ui(e, t, n) {
  var r = 0;
  t && (r |= 4), ff(n, e, r, t);
}
var _l = '_reactListening' + Math.random().toString(36).slice(2);
function Zr(e) {
  if (!e[_l]) {
    (e[_l] = !0),
      gc.forEach(function (n) {
        n !== 'selectionchange' && (zh.has(n) || ui(n, !1, e), ui(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[_l] || ((t[_l] = !0), ui('selectionchange', !1, t));
  }
}
function ff(e, t, n, r) {
  switch (Yc(t)) {
    case 1:
      var l = Gp;
      break;
    case 4:
      l = Xp;
      break;
    default:
      l = zu;
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
function ai(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var a = i.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = i.stateNode.containerInfo),
              a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = dn(u)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Dc(function () {
    var s = o,
      p = Tu(n),
      v = [];
    e: {
      var m = sf.get(e);
      if (m !== void 0) {
        var x = Fu,
          y = e;
        switch (e) {
          case 'keypress':
            if (Al(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            x = ch;
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
            x = Qa;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            x = qp;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            x = ph;
            break;
          case lf:
          case of:
          case uf:
            x = th;
            break;
          case af:
            x = mh;
            break;
          case 'scroll':
            x = Zp;
            break;
          case 'wheel':
            x = gh;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            x = rh;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            x = Ya;
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
            (dn(y) || y[_t]))
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
                ((N = _n(y)), y !== N || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((x = null), (y = s)),
          x !== y)
        ) {
          if (
            ((w = Qa),
            (c = 'onMouseLeave'),
            (d = 'onMouseEnter'),
            (f = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((w = Ya),
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
          var E = Ch;
        else if (Za(m))
          if (bc) E = Nh;
          else {
            E = _h;
            var L = Ph;
          }
        else
          (x = m.nodeName) &&
            x.toLowerCase() === 'input' &&
            (m.type === 'checkbox' || m.type === 'radio') &&
            (E = Rh);
        if (E && (E = E(e, s))) {
          qc(v, E, n, p);
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
          (Za(L) || L.contentEditable === 'true') &&
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
          if (jh) break;
        case 'keydown':
        case 'keyup':
          ts(v, n, p);
      }
      var P;
      if (Iu)
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
          ? Zc(e, n) && (T = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (T = 'onCompositionStart');
      T &&
        (Xc &&
          n.locale !== 'ko' &&
          (Mn || T !== 'onCompositionStart'
            ? T === 'onCompositionEnd' && Mn && (P = Gc())
            : ((Vt = p),
              (Ou = 'value' in Vt ? Vt.value : Vt.textContent),
              (Mn = !0))),
        (L = eo(s, T)),
        0 < L.length &&
          ((T = new Ka(T, e, null, n, p)),
          v.push({ event: T, listeners: L }),
          P ? (T.data = P) : ((P = Jc(n)), P !== null && (T.data = P)))),
        (P = wh ? Sh(e, n) : xh(e, n)) &&
          ((s = eo(s, 'onBeforeInput')),
          0 < s.length &&
            ((p = new Ka('onBeforeInput', 'beforeinput', null, n, p)),
            v.push({ event: p, listeners: s }),
            (p.data = P)));
    }
    cf(v, t);
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
    var u = n,
      a = u.alternate,
      s = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 &&
      s !== null &&
      ((u = s),
      l
        ? ((a = Hr(n, o)), a != null && i.unshift(Jr(n, a, u)))
        : l || ((a = Hr(n, o)), a != null && i.push(Jr(n, a, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Oh = /\r\n?/g,
  Fh = /\u0000|\uFFFD/g;
function os(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Oh,
      `
`
    )
    .replace(Fh, '');
}
function Rl(e, t, n) {
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
  Uh = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  is = typeof Promise == 'function' ? Promise : void 0,
  Ih =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof is < 'u'
      ? function (e) {
          return is.resolve(null).then(e).catch(Ah);
        }
      : Yi;
function Ah(e) {
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
function us(e) {
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
  _t = '__reactContainer$' + or,
  Gi = '__reactEvents$' + or,
  Bh = '__reactListeners$' + or,
  $h = '__reactHandles$' + or;
function dn(e) {
  var t = e[pt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[_t] || n[pt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = us(e); e !== null; ) {
          if ((n = e[pt])) return n;
          e = us(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function fl(e) {
  return (
    (e = e[pt] || e[_t]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function On(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(_(33));
}
function _o(e) {
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
function as(e, t, n) {
  if (Ne.current !== bt) throw Error(_(168));
  b(Ne, t), b(Ue, n);
}
function df(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(_(108, Pp(e) || 'Unknown', l));
  return ue({}, n, r);
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
    ? ((e = df(e, t, yn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      te(Ue),
      te(Ne),
      b(Ne, e))
    : te(Ue),
    b(Ue, n);
}
var St = null,
  Ro = !1,
  ci = !1;
function pf(e) {
  St === null ? (St = [e]) : St.push(e);
}
function Vh(e) {
  (Ro = !0), pf(e);
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
      (St = null), (Ro = !1);
    } catch (l) {
      throw (St !== null && (St = St.slice(e + 1)), Uc(ju, nn), l);
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
function hf(e, t, n) {
  (Xe[Ze++] = xt), (Xe[Ze++] = Et), (Xe[Ze++] = wn), (wn = e);
  var r = xt;
  e = Et;
  var l = 32 - ut(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - ut(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (xt = (1 << (32 - ut(t) + l)) | (n << l) | r),
      (Et = o + e);
  } else (xt = (1 << o) | (n << l) | r), (Et = e);
}
function Bu(e) {
  e.return !== null && (sn(e, 1), hf(e, 1, 0));
}
function $u(e) {
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
function mf(e, t) {
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
          ? mf(r, n)
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
    if (Zi(e)) throw (vf(), Error(_(418)));
    for (; t; ) mf(e, t), (t = Yt(t.nextSibling));
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
function vf() {
  for (var e = Ve; e; ) e = Yt(e.nextSibling);
}
function qn() {
  (Ve = We = null), (ne = !1);
}
function Vu(e) {
  it === null ? (it = [e]) : it.push(e);
}
var Wh = Lt.ReactCurrentBatchConfig;
function rt(e, t) {
  if (e && e.defaultProps) {
    (t = ue({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var io = tn(null),
  uo = null,
  An = null,
  Wu = null;
function Hu() {
  Wu = An = uo = null;
}
function Qu(e) {
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
  (uo = e),
    (Wu = An = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Fe = !0), (e.firstContext = null));
}
function be(e) {
  var t = e._currentValue;
  if (Wu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), An === null)) {
      if (uo === null) throw Error(_(308));
      (An = e), (uo.dependencies = { lanes: 0, firstContext: e });
    } else An = An.next = e;
  return t;
}
var pn = null;
function Ku(e) {
  pn === null ? (pn = [e]) : pn.push(e);
}
function gf(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Ku(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Rt(e, r)
  );
}
function Rt(e, t) {
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
function Yu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function yf(e, t) {
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
      Rt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Ku(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Rt(e, n)
  );
}
function Bl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Mu(e, n);
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
function ao(e, t, n, r) {
  var l = e.updateQueue;
  At = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u,
      s = a.next;
    (a.next = null), i === null ? (o = s) : (i.next = s), (i = a);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (u = p.lastBaseUpdate),
      u !== i &&
        (u === null ? (p.firstBaseUpdate = s) : (u.next = s),
        (p.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var v = l.baseState;
    (i = 0), (p = s = a = null), (u = o);
    do {
      var m = u.lane,
        x = u.eventTime;
      if ((r & m) === m) {
        p !== null &&
          (p = p.next =
            {
              eventTime: x,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var y = e,
            w = u;
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
              v = ue({}, v, m);
              break e;
            case 2:
              At = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        (x = {
          eventTime: x,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          p === null ? ((s = p = x), (a = v)) : (p = p.next = x),
          (i |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (p === null && (a = v),
      (l.baseState = a),
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
var wf = new vc.Component().refs;
function bi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ue({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var No = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? _n(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Me(),
      l = Zt(e),
      o = kt(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Gt(e, o, l)),
      t !== null && (at(t, e, l, r), Bl(t, e, l));
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
      t !== null && (at(t, e, l, r), Bl(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Me(),
      r = Zt(e),
      l = kt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Gt(e, l, r)),
      t !== null && (at(t, e, r, n), Bl(t, e, r));
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
function Sf(e, t, n) {
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
function eu(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = wf), Yu(e);
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
      ao(e, n, l, r),
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
            var u = l.refs;
            u === wf && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
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
function xf(e) {
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
  function u(d, f, h, c) {
    return f === null || f.tag !== 6
      ? ((f = gi(h, d.mode, c)), (f.return = d), f)
      : ((f = l(f, h)), (f.return = d), f);
  }
  function a(d, f, h, c) {
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
      return E !== null ? null : u(d, f, '' + h, c);
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case yl:
          return h.key === E ? a(d, f, h, c) : null;
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
      return (d = d.get(h) || null), u(f, d, '' + c, E);
    if (typeof c == 'object' && c !== null) {
      switch (c.$$typeof) {
        case yl:
          return (d = d.get(c.key === null ? h : c.key) || null), a(f, d, c, E);
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
var bn = xf(!0),
  Ef = xf(!1),
  dl = {},
  mt = tn(dl),
  br = tn(dl),
  el = tn(dl);
function hn(e) {
  if (e === dl) throw Error(_(174));
  return e;
}
function Gu(e, t) {
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
function kf(e) {
  hn(el.current);
  var t = hn(mt.current),
    n = Mi(t, e.type);
  t !== n && (b(br, e), b(mt, n));
}
function Xu(e) {
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
function Zu() {
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
  Hh = 0;
function Pe() {
  throw Error(_(321));
}
function Ju(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!st(e[n], t[n])) return !1;
  return !0;
}
function qu(e, t, n, r, l, o) {
  if (
    ((Sn = o),
    (ie = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    ($l.current = e === null || e.memoizedState === null ? Gh : Xh),
    (e = n(r, l)),
    Fr)
  ) {
    o = 0;
    do {
      if (((Fr = !1), (tl = 0), 25 <= o)) throw Error(_(301));
      (o += 1),
        (Se = ye = null),
        (t.updateQueue = null),
        ($l.current = Zh),
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
function bu() {
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
    var u = (i = null),
      a = null,
      s = o;
    do {
      var p = s.lane;
      if ((Sn & p) === p)
        a !== null &&
          (a = a.next =
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
        a === null ? ((u = a = v), (i = r)) : (a = a.next = v),
          (ie.lanes |= p),
          (xn |= p);
      }
      s = s.next;
    } while (s !== null && s !== o);
    a === null ? (i = r) : (a.next = u),
      st(r, t.memoizedState) || (Fe = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
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
function Cf() {}
function Pf(e, t) {
  var n = ie,
    r = et(),
    l = t(),
    o = !st(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (Fe = !0)),
    (r = r.queue),
    ea(Nf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Se !== null && Se.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      rl(9, Rf.bind(null, n, r, l, t), void 0, null),
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
function Rf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Lf(t) && Tf(e);
}
function Nf(e, t, n) {
  return n(function () {
    Lf(t) && Tf(e);
  });
}
function Lf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !st(e, n);
  } catch {
    return !0;
  }
}
function Tf(e) {
  var t = Rt(e, 1);
  t !== null && at(t, e, 1, -1);
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
    (e = e.dispatch = Yh.bind(null, ie, e)),
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
function jf() {
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
    if (((o = i.destroy), r !== null && Ju(r, i.deps))) {
      l.memoizedState = rl(t, n, o, r);
      return;
    }
  }
  (ie.flags |= e), (l.memoizedState = rl(1 | t, n, o, r));
}
function ys(e, t) {
  return Vl(8390656, 8, e, t);
}
function ea(e, t) {
  return Lo(2048, 8, e, t);
}
function Mf(e, t) {
  return Lo(4, 2, e, t);
}
function Df(e, t) {
  return Lo(4, 4, e, t);
}
function zf(e, t) {
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
function Of(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Lo(4, 4, zf.bind(null, t, e), n)
  );
}
function ta() {}
function Ff(e, t) {
  var n = et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ju(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Uf(e, t) {
  var n = et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ju(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function If(e, t, n) {
  return Sn & 21
    ? (st(n, t) || ((n = Bc()), (ie.lanes |= n), (xn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Fe = !0)), (e.memoizedState = n));
}
function Qh(e, t) {
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
function Af() {
  return et().memoizedState;
}
function Kh(e, t, n) {
  var r = Zt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Bf(e))
  )
    $f(t, n);
  else if (((n = gf(e, t, n, r)), n !== null)) {
    var l = Me();
    at(n, e, r, l), Vf(n, t, r);
  }
}
function Yh(e, t, n) {
  var r = Zt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Bf(e)) $f(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), st(u, i))) {
          var a = t.interleaved;
          a === null
            ? ((l.next = l), Ku(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = gf(e, t, l, r)),
      n !== null && ((l = Me()), at(n, e, r, l), Vf(n, t, r));
  }
}
function Bf(e) {
  var t = e.alternate;
  return e === ie || (t !== null && t === ie);
}
function $f(e, t) {
  Fr = co = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Vf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Mu(e, n);
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
  Gh = {
    readContext: be,
    useCallback: function (e, t) {
      return (dt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: be,
    useEffect: ys,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Vl(4194308, 4, zf.bind(null, t, e), n)
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
        (e = e.dispatch = Kh.bind(null, ie, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = dt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: gs,
    useDebugValue: ta,
    useDeferredValue: function (e) {
      return (dt().memoizedState = e);
    },
    useTransition: function () {
      var e = gs(!1),
        t = e[0];
      return (e = Qh.bind(null, e[1])), (dt().memoizedState = e), [t, e];
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
        ys(Nf.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        rl(9, Rf.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = dt(),
        t = xe.identifierPrefix;
      if (ne) {
        var n = Et,
          r = xt;
        (n = (r & ~(1 << (32 - ut(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = tl++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Hh++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Xh = {
    readContext: be,
    useCallback: Ff,
    useContext: be,
    useEffect: ea,
    useImperativeHandle: Of,
    useInsertionEffect: Mf,
    useLayoutEffect: Df,
    useMemo: Uf,
    useReducer: pi,
    useRef: jf,
    useState: function () {
      return pi(nl);
    },
    useDebugValue: ta,
    useDeferredValue: function (e) {
      var t = et();
      return If(t, ye.memoizedState, e);
    },
    useTransition: function () {
      var e = pi(nl)[0],
        t = et().memoizedState;
      return [e, t];
    },
    useMutableSource: Cf,
    useSyncExternalStore: Pf,
    useId: Af,
    unstable_isNewReconciler: !1,
  },
  Zh = {
    readContext: be,
    useCallback: Ff,
    useContext: be,
    useEffect: ea,
    useImperativeHandle: Of,
    useInsertionEffect: Mf,
    useLayoutEffect: Df,
    useMemo: Uf,
    useReducer: hi,
    useRef: jf,
    useState: function () {
      return hi(nl);
    },
    useDebugValue: ta,
    useDeferredValue: function (e) {
      var t = et();
      return ye === null ? (t.memoizedState = e) : If(t, ye.memoizedState, e);
    },
    useTransition: function () {
      var e = hi(nl)[0],
        t = et().memoizedState;
      return [e, t];
    },
    useMutableSource: Cf,
    useSyncExternalStore: Pf,
    useId: Af,
    unstable_isNewReconciler: !1,
  };
function tr(e, t) {
  try {
    var n = '',
      r = t;
    do (n += Cp(r)), (r = r.return);
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
function tu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Jh = typeof WeakMap == 'function' ? WeakMap : Map;
function Wf(e, t, n) {
  (n = kt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ho || ((ho = !0), (fu = r)), tu(e, t);
    }),
    n
  );
}
function Hf(e, t, n) {
  (n = kt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        tu(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        tu(e, t),
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
    r = e.pingCache = new Jh();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = fm.bind(null, e, t, n)), t.then(e, e));
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
var qh = Lt.ReactCurrentOwner,
  Fe = !1;
function je(e, t, n, r) {
  t.child = e === null ? Ef(t, null, n, r) : bn(t, e.child, n, r);
}
function Es(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    Yn(t, l),
    (r = qu(e, t, n, r, o, l)),
    (n = bu()),
    e !== null && !Fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Nt(e, t, l))
      : (ne && n && Bu(t), (t.flags |= 1), je(e, t, r, l), t.child)
  );
}
function ks(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == 'function' &&
      !sa(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Qf(e, t, o, r, l))
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
function Qf(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Xr(o, r) && e.ref === t.ref)
      if (((Fe = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (Fe = !0);
      else return (t.lanes = e.lanes), Nt(e, t, l);
  }
  return nu(e, t, n, r, l);
}
function Kf(e, t, n) {
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
function Yf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function nu(e, t, n, r, l) {
  var o = Ie(n) ? yn : Ne.current;
  return (
    (o = Jn(t, o)),
    Yn(t, l),
    (n = qu(e, t, n, r, o, l)),
    (r = bu()),
    e !== null && !Fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Nt(e, t, l))
      : (ne && r && Bu(t), (t.flags |= 1), je(e, t, n, l), t.child)
  );
}
function Cs(e, t, n, r, l) {
  if (Ie(n)) {
    var o = !0;
    ro(t);
  } else o = !1;
  if ((Yn(t, l), t.stateNode === null))
    Wl(e, t), Sf(t, n, r), eu(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var a = i.context,
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
      ((u !== r || a !== s) && ms(t, i, r, s)),
      (At = !1);
    var m = t.memoizedState;
    (i.state = m),
      ao(t, r, i, l),
      (a = t.memoizedState),
      u !== r || m !== a || Ue.current || At
        ? (typeof p == 'function' && (bi(t, n, p, r), (a = t.memoizedState)),
          (u = At || hs(t, n, u, r, m, a, s))
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
              (t.memoizedState = a)),
          (i.props = r),
          (i.state = a),
          (i.context = s),
          (r = u))
        : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      yf(e, t),
      (u = t.memoizedProps),
      (s = t.type === t.elementType ? u : rt(t.type, u)),
      (i.props = s),
      (v = t.pendingProps),
      (m = i.context),
      (a = n.contextType),
      typeof a == 'object' && a !== null
        ? (a = be(a))
        : ((a = Ie(n) ? yn : Ne.current), (a = Jn(t, a)));
    var x = n.getDerivedStateFromProps;
    (p =
      typeof x == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function') ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((u !== v || m !== a) && ms(t, i, r, a)),
      (At = !1),
      (m = t.memoizedState),
      (i.state = m),
      ao(t, r, i, l);
    var y = t.memoizedState;
    u !== v || m !== y || Ue.current || At
      ? (typeof x == 'function' && (bi(t, n, x, r), (y = t.memoizedState)),
        (s = At || hs(t, n, s, r, m, y, a) || !1)
          ? (p ||
              (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                typeof i.componentWillUpdate != 'function') ||
              (typeof i.componentWillUpdate == 'function' &&
                i.componentWillUpdate(r, y, a),
              typeof i.UNSAFE_componentWillUpdate == 'function' &&
                i.UNSAFE_componentWillUpdate(r, y, a)),
            typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != 'function' ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != 'function' ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (i.props = r),
        (i.state = y),
        (i.context = a),
        (r = s))
      : (typeof i.componentDidUpdate != 'function' ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != 'function' ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ru(e, t, n, r, o, l);
}
function ru(e, t, n, r, l, o) {
  Yf(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && ss(t, n, !1), Nt(e, t, o);
  (r = t.stateNode), (qh.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = bn(t, e.child, null, o)), (t.child = bn(t, null, u, o)))
      : je(e, t, u, o),
    (t.memoizedState = r.state),
    l && ss(t, n, !0),
    t.child
  );
}
function Gf(e) {
  var t = e.stateNode;
  t.pendingContext
    ? as(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && as(e, t.context, !1),
    Gu(e, t.containerInfo);
}
function Ps(e, t, n, r, l) {
  return qn(), Vu(l), (t.flags |= 256), je(e, t, n, r), t.child;
}
var lu = { dehydrated: null, treeContext: null, retryLane: 0 };
function ou(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Xf(e, t, n) {
  var r = t.pendingProps,
    l = oe.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
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
              (t.child.memoizedState = ou(n)),
              (t.memoizedState = lu),
              e)
            : na(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return bh(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var a = { mode: 'hidden', children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Jt(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = Jt(u, o)) : ((o = gn(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? ou(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = lu),
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
function na(e, t) {
  return (
    (t = Mo({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Tl(e, t, n, r) {
  return (
    r !== null && Vu(r),
    bn(t, e.child, null, n),
    (e = na(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function bh(e, t, n, r, l, o, i) {
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
        (t.child.memoizedState = ou(i)),
        (t.memoizedState = lu),
        o);
  if (!(t.mode & 1)) return Tl(e, t, i, null);
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(_(419))), (r = mi(o, r, void 0)), Tl(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), Fe || u)) {
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
          ((o.retryLane = l), Rt(e, l), at(r, e, l, -1));
    }
    return aa(), (r = mi(Error(_(421)))), Tl(e, t, i, r);
  }
  return l.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = dm.bind(null, e)),
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
      (t = na(t, r.children)),
      (t.flags |= 4096),
      t);
}
function _s(e, t, n) {
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
function Zf(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((je(e, t, r.children, n), (r = oe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && _s(e, n, t);
        else if (e.tag === 19) _s(e, n, t);
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
function em(e, t, n) {
  switch (t.tag) {
    case 3:
      Gf(t), qn();
      break;
    case 5:
      kf(t);
      break;
    case 1:
      Ie(t.type) && ro(t);
      break;
    case 4:
      Gu(t, t.stateNode.containerInfo);
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
          ? Xf(e, t, n)
          : (b(oe, oe.current & 1),
            (e = Nt(e, t, n)),
            e !== null ? e.sibling : null);
      b(oe, oe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Zf(e, t, n);
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
      return (t.lanes = 0), Kf(e, t, n);
  }
  return Nt(e, t, n);
}
var Jf, iu, qf, bf;
Jf = function (e, t) {
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
iu = function () {};
qf = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), hn(mt.current);
    var o = null;
    switch (n) {
      case 'input':
        (l = Ni(e, l)), (r = Ni(e, r)), (o = []);
        break;
      case 'select':
        (l = ue({}, l, { value: void 0 })),
          (r = ue({}, r, { value: void 0 })),
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
          var u = l[s];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
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
      var a = r[s];
      if (
        ((u = l != null ? l[s] : void 0),
        r.hasOwnProperty(s) && a !== u && (a != null || u != null))
      )
        if (s === 'style')
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ''));
            for (i in a)
              a.hasOwnProperty(i) &&
                u[i] !== a[i] &&
                (n || (n = {}), (n[i] = a[i]));
          } else n || (o || (o = []), o.push(s, n)), (n = a);
        else
          s === 'dangerouslySetInnerHTML'
            ? ((a = a ? a.__html : void 0),
              (u = u ? u.__html : void 0),
              a != null && u !== a && (o = o || []).push(s, a))
            : s === 'children'
            ? (typeof a != 'string' && typeof a != 'number') ||
              (o = o || []).push(s, '' + a)
            : s !== 'suppressContentEditableWarning' &&
              s !== 'suppressHydrationWarning' &&
              (Vr.hasOwnProperty(s)
                ? (a != null && s === 'onScroll' && ee('scroll', e),
                  o || u === a || (o = []))
                : (o = o || []).push(s, a));
    }
    n && (o = o || []).push('style', n);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
bf = function (e, t, n, r) {
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
function _e(e) {
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
function tm(e, t, n) {
  var r = t.pendingProps;
  switch (($u(t), t.tag)) {
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
      return _e(t), null;
    case 1:
      return Ie(t.type) && no(), _e(t), null;
    case 3:
      return (
        (r = t.stateNode),
        er(),
        te(Ue),
        te(Ne),
        Zu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Nl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), it !== null && (hu(it), (it = null)))),
        iu(e, t),
        _e(t),
        null
      );
    case 5:
      Xu(t);
      var l = hn(el.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        qf(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(_(166));
          return _e(t), null;
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
              Oa(r, o), ee('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                ee('invalid', r);
              break;
            case 'textarea':
              Ua(r, o), ee('invalid', r);
          }
          Di(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === 'children'
                ? typeof u == 'string'
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Rl(r.textContent, u, e),
                    (l = ['children', u]))
                  : typeof u == 'number' &&
                    r.textContent !== '' + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Rl(r.textContent, u, e),
                    (l = ['children', '' + u]))
                : Vr.hasOwnProperty(i) &&
                  u != null &&
                  i === 'onScroll' &&
                  ee('scroll', r);
            }
          switch (n) {
            case 'input':
              wl(r), Fa(r, o, !0);
              break;
            case 'textarea':
              wl(r), Ia(r);
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
            e === 'http://www.w3.org/1999/xhtml' && (e = Pc(n)),
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
            Jf(e, t, !1, !1),
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
                Oa(e, r), (l = Ni(e, r)), ee('invalid', e);
                break;
              case 'option':
                l = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = ue({}, r, { value: void 0 })),
                  ee('invalid', e);
                break;
              case 'textarea':
                Ua(e, r), (l = ji(e, r)), ee('invalid', e);
                break;
              default:
                l = r;
            }
            Di(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var a = u[o];
                o === 'style'
                  ? Nc(e, a)
                  : o === 'dangerouslySetInnerHTML'
                  ? ((a = a ? a.__html : void 0), a != null && _c(e, a))
                  : o === 'children'
                  ? typeof a == 'string'
                    ? (n !== 'textarea' || a !== '') && Wr(e, a)
                    : typeof a == 'number' && Wr(e, '' + a)
                  : o !== 'suppressContentEditableWarning' &&
                    o !== 'suppressHydrationWarning' &&
                    o !== 'autoFocus' &&
                    (Vr.hasOwnProperty(o)
                      ? a != null && o === 'onScroll' && ee('scroll', e)
                      : a != null && _u(e, o, a, i));
              }
            switch (n) {
              case 'input':
                wl(e), Fa(e, r, !1);
                break;
              case 'textarea':
                wl(e), Ia(e);
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
      return _e(t), null;
    case 6:
      if (e && t.stateNode != null) bf(e, t, e.memoizedProps, r);
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
                Rl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Rl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[pt] = t),
            (t.stateNode = r);
      }
      return _e(t), null;
    case 13:
      if (
        (te(oe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ne && Ve !== null && t.mode & 1 && !(t.flags & 128))
          vf(), qn(), (t.flags |= 98560), (o = !1);
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
          _e(t), (o = !1);
        } else it !== null && (hu(it), (it = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || oe.current & 1 ? we === 0 && (we = 3) : aa())),
          t.updateQueue !== null && (t.flags |= 4),
          _e(t),
          null);
    case 4:
      return (
        er(), iu(e, t), e === null && Zr(t.stateNode.containerInfo), _e(t), null
      );
    case 10:
      return Qu(t.type._context), _e(t), null;
    case 17:
      return Ie(t.type) && no(), _e(t), null;
    case 19:
      if ((te(oe), (o = t.memoizedState), o === null)) return _e(t), null;
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
              return _e(t), null;
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
        : (_e(t), null);
    case 22:
    case 23:
      return (
        ua(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Be & 1073741824 && (_e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : _e(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(_(156, t.tag));
}
function nm(e, t) {
  switch (($u(t), t.tag)) {
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
        Zu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Xu(t), null;
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
      return Qu(t.type._context), null;
    case 22:
    case 23:
      return ua(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var jl = !1,
  Re = !1,
  rm = typeof WeakSet == 'function' ? WeakSet : Set,
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
function uu(e, t, n) {
  try {
    n();
  } catch (r) {
    se(e, t, r);
  }
}
var Rs = !1;
function lm(e, t) {
  if (((Hi = ql), (e = nf()), Au(e))) {
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
            u = -1,
            a = -1,
            s = 0,
            p = 0,
            v = e,
            m = null;
          t: for (;;) {
            for (
              var x;
              v !== n || (l !== 0 && v.nodeType !== 3) || (u = i + l),
                v !== o || (r !== 0 && v.nodeType !== 3) || (a = i + r),
                v.nodeType === 3 && (i += v.nodeValue.length),
                (x = v.firstChild) !== null;

            )
              (m = v), (v = x);
            for (;;) {
              if (v === e) break t;
              if (
                (m === n && ++s === l && (u = i),
                m === o && ++p === r && (a = i),
                (x = v.nextSibling) !== null)
              )
                break;
              (v = m), (m = v.parentNode);
            }
            v = x;
          }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
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
  return (y = Rs), (Rs = !1), y;
}
function Ur(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && uu(t, n, o);
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
function au(e) {
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
function ed(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), ed(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[pt], delete t[qr], delete t[Gi], delete t[Bh], delete t[$h])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function td(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ns(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || td(e.return)) return null;
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
function su(e, t, n) {
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
    for (su(e, t, n), e = e.sibling; e !== null; ) su(e, t, n), (e = e.sibling);
}
function cu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (cu(e, t, n), e = e.sibling; e !== null; ) cu(e, t, n), (e = e.sibling);
}
var Ee = null,
  lt = !1;
function Ft(e, t, n) {
  for (n = n.child; n !== null; ) nd(e, t, n), (n = n.sibling);
}
function nd(e, t, n) {
  if (ht && typeof ht.onCommitFiberUnmount == 'function')
    try {
      ht.onCommitFiberUnmount(Eo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Re || Bn(n, t);
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
        !Re &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && uu(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      Ft(e, t, n);
      break;
    case 1:
      if (
        !Re &&
        (Bn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          se(n, t, u);
        }
      Ft(e, t, n);
      break;
    case 21:
      Ft(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Re = (r = Re) || n.memoizedState !== null), Ft(e, t, n), (Re = r))
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
    n === null && (n = e.stateNode = new rm()),
      t.forEach(function (r) {
        var l = pm.bind(null, e, r);
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
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (Ee = u.stateNode), (lt = !1);
              break e;
            case 3:
              (Ee = u.stateNode.containerInfo), (lt = !0);
              break e;
            case 4:
              (Ee = u.stateNode.containerInfo), (lt = !0);
              break e;
          }
          u = u.return;
        }
        if (Ee === null) throw Error(_(160));
        nd(o, i, l), (Ee = null), (lt = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (s) {
        se(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) rd(t, e), (t = t.sibling);
}
function rd(e, t) {
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
          u = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            u === 'input' && o.type === 'radio' && o.name != null && kc(l, o),
              zi(u, i);
            var s = zi(u, o);
            for (i = 0; i < a.length; i += 2) {
              var p = a[i],
                v = a[i + 1];
              p === 'style'
                ? Nc(l, v)
                : p === 'dangerouslySetInnerHTML'
                ? _c(l, v)
                : p === 'children'
                ? Wr(l, v)
                : _u(l, p, v, s);
            }
            switch (u) {
              case 'input':
                Li(l, o);
                break;
              case 'textarea':
                Cc(l, o);
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
            (oa = he())),
        r & 4 && Ls(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Re = (s = Re) || p), nt(t, e), (Re = s)) : nt(t, e),
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
                    : ((u = v.stateNode),
                      (a = v.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty('display')
                          ? a.display
                          : null),
                      (u.style.display = Rc('display', i)));
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
          if (td(n)) {
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
          cu(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = Ns(e);
          su(e, u, i);
          break;
        default:
          throw Error(_(161));
      }
    } catch (a) {
      se(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function om(e, t, n) {
  (D = e), ld(e);
}
function ld(e, t, n) {
  for (var r = (e.mode & 1) !== 0; D !== null; ) {
    var l = D,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || jl;
      if (!i) {
        var u = l.alternate,
          a = (u !== null && u.memoizedState !== null) || Re;
        u = jl;
        var s = Re;
        if (((jl = i), (Re = a) && !s))
          for (D = l; D !== null; )
            (i = D),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Ms(l)
                : a !== null
                ? ((a.return = i), (D = a))
                : Ms(l);
        for (; o !== null; ) (D = o), ld(o), (o = o.sibling);
        (D = l), (jl = u), (Re = s);
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
              Re || To(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Re)
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
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var a = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    a.autoFocus && n.focus();
                    break;
                  case 'img':
                    a.src && (n.src = a.src);
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
        Re || (t.flags & 512 && au(t));
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
          } catch (a) {
            se(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              se(t, l, a);
            }
          }
          var o = t.return;
          try {
            au(t);
          } catch (a) {
            se(t, o, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            au(t);
          } catch (a) {
            se(t, i, a);
          }
      }
    } catch (a) {
      se(t, t.return, a);
    }
    if (t === e) {
      D = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (D = u);
      break;
    }
    D = t.return;
  }
}
var im = Math.ceil,
  po = Lt.ReactCurrentDispatcher,
  ra = Lt.ReactCurrentOwner,
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
  la = 0,
  Ir = null,
  Oe = null,
  oa = 0,
  nr = 1 / 0,
  wt = null,
  ho = !1,
  fu = null,
  Xt = null,
  Ml = !1,
  Wt = null,
  mo = 0,
  Ar = 0,
  du = null,
  Hl = -1,
  Ql = 0;
function Me() {
  return K & 6 ? he() : Hl !== -1 ? Hl : (Hl = he());
}
function Zt(e) {
  return e.mode & 1
    ? K & 2 && ke !== 0
      ? ke & -ke
      : Wh.transition !== null
      ? (Ql === 0 && (Ql = Bc()), Ql)
      : ((e = Y),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Yc(e.type))),
        e)
    : 1;
}
function at(e, t, n, r) {
  if (50 < Ar) throw ((Ar = 0), (du = null), Error(_(185)));
  sl(e, n, r),
    (!(K & 2) || e !== xe) &&
      (e === xe && (!(K & 2) && (jo |= n), we === 4 && $t(e, ke)),
      Ae(e, r),
      n === 1 && K === 0 && !(t.mode & 1) && ((nr = he() + 500), Ro && nn()));
}
function Ae(e, t) {
  var n = e.callbackNode;
  Wp(e, t);
  var r = Jl(e, e === xe ? ke : 0);
  if (r === 0)
    n !== null && $a(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && $a(n), t === 1))
      e.tag === 0 ? Vh(Ds.bind(null, e)) : pf(Ds.bind(null, e)),
        Ih(function () {
          !(K & 6) && nn();
        }),
        (n = null);
    else {
      switch ($c(r)) {
        case 1:
          n = ju;
          break;
        case 4:
          n = Ic;
          break;
        case 16:
          n = Zl;
          break;
        case 536870912:
          n = Ac;
          break;
        default:
          n = Zl;
      }
      n = dd(n, od.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function od(e, t) {
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
        sm();
        break;
      } catch (u) {
        id(e, u);
      }
    while (1);
    Hu(),
      (po.current = o),
      (K = l),
      ve !== null ? (t = 0) : ((xe = null), (ke = 0), (t = we));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Ai(e)), l !== 0 && ((r = l), (t = pu(e, l)))), t === 1)
    )
      throw ((n = ll), vn(e, 0), $t(e, r), Ae(e, he()), n);
    if (t === 6) $t(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !um(l) &&
          ((t = vo(e, r)),
          t === 2 && ((o = Ai(e)), o !== 0 && ((r = o), (t = pu(e, o)))),
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
            ($t(e, r), (r & 130023424) === r && ((t = oa + 500 - he()), 10 < t))
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
            var i = 31 - ut(r);
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
                : 1960 * im(r / 1960)) - r),
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
  return Ae(e, he()), e.callbackNode === n ? od.bind(null, e) : null;
}
function pu(e, t) {
  var n = Ir;
  return (
    e.current.memoizedState.isDehydrated && (vn(e, t).flags |= 256),
    (e = vo(e, t)),
    e !== 2 && ((t = Oe), (Oe = n), t !== null && hu(t)),
    e
  );
}
function hu(e) {
  Oe === null ? (Oe = e) : Oe.push.apply(Oe, e);
}
function um(e) {
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
    t &= ~la,
      t &= ~jo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ut(t),
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
    r !== 0 && ((t = r), (n = pu(e, r)));
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
function ia(e, t) {
  var n = K;
  K |= 1;
  try {
    return e(t);
  } finally {
    (K = n), K === 0 && ((nr = he() + 500), Ro && nn());
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
function ua() {
  (Be = $n.current), te($n);
}
function vn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Uh(n)), ve !== null))
    for (n = ve.return; n !== null; ) {
      var r = n;
      switch (($u(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && no();
          break;
        case 3:
          er(), te(Ue), te(Ne), Zu();
          break;
        case 5:
          Xu(r);
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
          Qu(r.type._context);
          break;
        case 22:
        case 23:
          ua();
      }
      n = n.return;
    }
  if (
    ((xe = e),
    (ve = e = Jt(e.current, null)),
    (ke = Be = t),
    (we = 0),
    (ll = null),
    (la = jo = xn = 0),
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
function id(e, t) {
  do {
    var n = ve;
    try {
      if ((Hu(), ($l.current = fo), co)) {
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
        (ra.current = null),
        n === null || n.return === null)
      ) {
        (we = 1), (ll = t), (ve = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          a = t;
        if (
          ((t = ke),
          (u.flags |= 32768),
          a !== null && typeof a == 'object' && typeof a.then == 'function')
        ) {
          var s = a,
            p = u,
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
              xs(x, i, u, o, t),
              x.mode & 1 && ws(o, s, t),
              (t = x),
              (a = s);
            var y = t.updateQueue;
            if (y === null) {
              var w = new Set();
              w.add(a), (t.updateQueue = w);
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              ws(o, s, t), aa();
              break e;
            }
            a = Error(_(426));
          }
        } else if (ne && u.mode & 1) {
          var N = Ss(i);
          if (N !== null) {
            !(N.flags & 65536) && (N.flags |= 256),
              xs(N, i, u, o, t),
              Vu(tr(a, u));
            break e;
          }
        }
        (o = a = tr(a, u)),
          we !== 4 && (we = 2),
          Ir === null ? (Ir = [o]) : Ir.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var d = Wf(o, a, t);
              ds(o, d);
              break e;
            case 1:
              u = a;
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
                var c = Hf(o, u, t);
                ds(o, c);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      sd(n);
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
function aa() {
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
      am();
      break;
    } catch (l) {
      id(e, l);
    }
  while (1);
  if ((Hu(), (K = n), (po.current = r), ve !== null)) throw Error(_(261));
  return (xe = null), (ke = 0), we;
}
function am() {
  for (; ve !== null; ) ad(ve);
}
function sm() {
  for (; ve !== null && !zp(); ) ad(ve);
}
function ad(e) {
  var t = fd(e.alternate, e, Be);
  (e.memoizedProps = e.pendingProps),
    t === null ? sd(e) : (ve = t),
    (ra.current = null);
}
function sd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = nm(n, t)), n !== null)) {
        (n.flags &= 32767), (ve = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (we = 6), (ve = null);
        return;
      }
    } else if (((n = tm(n, t, Be)), n !== null)) {
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
    (qe.transition = null), (Y = 1), cm(e, t, n, r);
  } finally {
    (qe.transition = l), (Y = r);
  }
  return null;
}
function cm(e, t, n, r) {
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
    (Hp(e, o),
    e === xe && ((ve = xe = null), (ke = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ml ||
      ((Ml = !0),
      dd(Zl, function () {
        return Gn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = qe.transition), (qe.transition = null);
    var i = Y;
    Y = 1;
    var u = K;
    (K |= 4),
      (ra.current = null),
      lm(e, n),
      rd(n, e),
      Th(Qi),
      (ql = !!Hi),
      (Qi = Hi = null),
      (e.current = n),
      om(n),
      Op(),
      (K = u),
      (Y = i),
      (qe.transition = o);
  } else e.current = n;
  if (
    (Ml && ((Ml = !1), (Wt = e), (mo = l)),
    (o = e.pendingLanes),
    o === 0 && (Xt = null),
    Ip(n.stateNode),
    Ae(e, he()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (ho) throw ((ho = !1), (e = fu), (fu = null), e);
  return (
    mo & 1 && e.tag !== 0 && Gn(),
    (o = e.pendingLanes),
    o & 1 ? (e === du ? Ar++ : ((Ar = 0), (du = e))) : (Ar = 0),
    nn(),
    null
  );
}
function Gn() {
  if (Wt !== null) {
    var e = $c(mo),
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
            var u = o.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var s = u[a];
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
                      if ((ed(p), p === s)) {
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
              if (((u = D), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      To(9, u);
                  }
                } catch (E) {
                  se(u, u.return, E);
                }
              if (u === i) {
                D = null;
                break e;
              }
              var c = u.sibling;
              if (c !== null) {
                (c.return = u.return), (D = c);
                break e;
              }
              D = u.return;
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
    (t = Wf(e, t, 1)),
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
            (e = Hf(t, e, 1)),
            (t = Gt(t, e, 1)),
            (e = Me()),
            t !== null && (sl(t, 1, e), Ae(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function fm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Me()),
    (e.pingedLanes |= e.suspendedLanes & n),
    xe === e &&
      (ke & n) === n &&
      (we === 4 || (we === 3 && (ke & 130023424) === ke && 500 > he() - oa)
        ? vn(e, 0)
        : (la |= n)),
    Ae(e, t);
}
function cd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = El), (El <<= 1), !(El & 130023424) && (El = 4194304))
      : (t = 1));
  var n = Me();
  (e = Rt(e, t)), e !== null && (sl(e, t, n), Ae(e, n));
}
function dm(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), cd(e, n);
}
function pm(e, t) {
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
  r !== null && r.delete(t), cd(e, n);
}
var fd;
fd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ue.current) Fe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Fe = !1), em(e, t, n);
      Fe = !!(e.flags & 131072);
    }
  else (Fe = !1), ne && t.flags & 1048576 && hf(t, oo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Wl(e, t), (e = t.pendingProps);
      var l = Jn(t, Ne.current);
      Yn(t, n), (l = qu(null, t, r, e, l, n));
      var o = bu();
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
            Yu(t),
            (l.updater = No),
            (t.stateNode = l),
            (l._reactInternals = t),
            eu(t, r, e, n),
            (t = ru(null, t, r, !0, o, n)))
          : ((t.tag = 0), ne && o && Bu(t), je(null, t, l, n), (t = t.child)),
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
          (l = t.tag = mm(r)),
          (e = rt(r, e)),
          l)
        ) {
          case 0:
            t = nu(null, t, r, e, n);
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
        nu(e, t, r, l, n)
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
        if ((Gf(t), e === null)) throw Error(_(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          yf(e, t),
          ao(t, r, null, n);
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
                n = Ef(t, null, r, n),
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
        kf(t),
        e === null && Ji(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Ki(r, l) ? (i = null) : o !== null && Ki(r, o) && (t.flags |= 32),
        Yf(e, t),
        je(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Ji(t), null;
    case 13:
      return Xf(e, t, n);
    case 4:
      return (
        Gu(t, t.stateNode.containerInfo),
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
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var a = u.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = kt(-1, n & -n)), (a.tag = 2);
                      var s = o.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var p = s.pending;
                        p === null
                          ? (a.next = a)
                          : ((a.next = p.next), (p.next = a)),
                          (s.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      qi(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(_(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
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
      return Qf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : rt(r, l)),
        Wl(e, t),
        (t.tag = 1),
        Ie(r) ? ((e = !0), ro(t)) : (e = !1),
        Yn(t, n),
        Sf(t, r, l),
        eu(t, r, l, n),
        ru(null, t, r, !0, e, n)
      );
    case 19:
      return Zf(e, t, n);
    case 22:
      return Kf(e, t, n);
  }
  throw Error(_(156, t.tag));
};
function dd(e, t) {
  return Uc(e, t);
}
function hm(e, t, n, r) {
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
  return new hm(e, t, n, r);
}
function sa(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function mm(e) {
  if (typeof e == 'function') return sa(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Nu)) return 11;
    if (e === Lu) return 14;
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
  if (((r = e), typeof e == 'function')) sa(e) && (i = 1);
  else if (typeof e == 'string') i = 5;
  else
    e: switch (e) {
      case jn:
        return gn(n.children, l, o, t);
      case Ru:
        (i = 8), (l |= 8);
        break;
      case Ci:
        return (
          (e = Je(12, n, t, l | 2)), (e.elementType = Ci), (e.lanes = o), e
        );
      case Pi:
        return (e = Je(13, n, t, l)), (e.elementType = Pi), (e.lanes = o), e;
      case _i:
        return (e = Je(19, n, t, l)), (e.elementType = _i), (e.lanes = o), e;
      case Sc:
        return Mo(n, l, o, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case yc:
              i = 10;
              break e;
            case wc:
              i = 9;
              break e;
            case Nu:
              i = 11;
              break e;
            case Lu:
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
    (e.elementType = Sc),
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
function vm(e, t, n, r, l) {
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
function ca(e, t, n, r, l, o, i, u, a) {
  return (
    (e = new vm(e, t, n, u, a)),
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
    Yu(o),
    e
  );
}
function gm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Tn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function pd(e) {
  if (!e) return bt;
  e = e._reactInternals;
  e: {
    if (_n(e) !== e || e.tag !== 1) throw Error(_(170));
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
    if (Ie(n)) return df(e, n, t);
  }
  return t;
}
function hd(e, t, n, r, l, o, i, u, a) {
  return (
    (e = ca(n, r, !0, e, l, o, i, u, a)),
    (e.context = pd(null)),
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
    (n = pd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = kt(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Gt(l, t, i)),
    e !== null && (at(e, l, i, o), Bl(e, l, i)),
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
function fa(e, t) {
  Os(e, t), (e = e.alternate) && Os(e, t);
}
function ym() {
  return null;
}
var md =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function da(e) {
  this._internalRoot = e;
}
zo.prototype.render = da.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(_(409));
  Do(e, t, null, null);
};
zo.prototype.unmount = da.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    En(function () {
      Do(null, e, null, null);
    }),
      (t[_t] = null);
  }
};
function zo(e) {
  this._internalRoot = e;
}
zo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Hc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Bt.length && t !== 0 && t < Bt[n].priority; n++);
    Bt.splice(n, 0, e), n === 0 && Kc(e);
  }
};
function pa(e) {
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
function wm(e, t, n, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var o = r;
      r = function () {
        var s = go(i);
        o.call(s);
      };
    }
    var i = hd(t, r, e, 0, null, !1, !1, '', Fs);
    return (
      (e._reactRootContainer = i),
      (e[_t] = i.current),
      Zr(e.nodeType === 8 ? e.parentNode : e),
      En(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == 'function') {
    var u = r;
    r = function () {
      var s = go(a);
      u.call(s);
    };
  }
  var a = ca(e, 0, !1, null, null, !1, !1, '', Fs);
  return (
    (e._reactRootContainer = a),
    (e[_t] = a.current),
    Zr(e.nodeType === 8 ? e.parentNode : e),
    En(function () {
      Do(t, a, n, r);
    }),
    a
  );
}
function Fo(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == 'function') {
      var u = l;
      l = function () {
        var a = go(i);
        u.call(a);
      };
    }
    Do(t, i, e, l);
  } else i = wm(n, t, e, l, r);
  return go(i);
}
Vc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Lr(t.pendingLanes);
        n !== 0 &&
          (Mu(t, n | 1), Ae(t, he()), !(K & 6) && ((nr = he() + 500), nn()));
      }
      break;
    case 13:
      En(function () {
        var r = Rt(e, 1);
        if (r !== null) {
          var l = Me();
          at(r, e, 1, l);
        }
      }),
        fa(e, 1);
  }
};
Du = function (e) {
  if (e.tag === 13) {
    var t = Rt(e, 134217728);
    if (t !== null) {
      var n = Me();
      at(t, e, 134217728, n);
    }
    fa(e, 134217728);
  }
};
Wc = function (e) {
  if (e.tag === 13) {
    var t = Zt(e),
      n = Rt(e, t);
    if (n !== null) {
      var r = Me();
      at(n, e, t, r);
    }
    fa(e, t);
  }
};
Hc = function () {
  return Y;
};
Qc = function (e, t) {
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
            var l = _o(r);
            if (!l) throw Error(_(90));
            Ec(r), Li(r, l);
          }
        }
      }
      break;
    case 'textarea':
      Cc(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Wn(e, !!n.multiple, t, !1);
  }
};
jc = ia;
Mc = En;
var Sm = { usingClientEntryPoint: !1, Events: [fl, On, _o, Lc, Tc, ia] },
  Er = {
    findFiberByHostInstance: dn,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  xm = {
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
      return (e = Oc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Er.findFiberByHostInstance || ym,
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
      (Eo = Dl.inject(xm)), (ht = Dl);
    } catch {}
}
Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sm;
Qe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!pa(t)) throw Error(_(200));
  return gm(e, t, null, n);
};
Qe.createRoot = function (e, t) {
  if (!pa(e)) throw Error(_(299));
  var n = !1,
    r = '',
    l = md;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = ca(e, 1, !1, null, null, n, !1, r, l)),
    (e[_t] = t.current),
    Zr(e.nodeType === 8 ? e.parentNode : e),
    new da(t)
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
  return (e = Oc(t)), (e = e === null ? null : e.stateNode), e;
};
Qe.flushSync = function (e) {
  return En(e);
};
Qe.hydrate = function (e, t, n) {
  if (!Oo(t)) throw Error(_(200));
  return Fo(null, e, t, !0, n);
};
Qe.hydrateRoot = function (e, t, n) {
  if (!pa(e)) throw Error(_(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = '',
    i = md;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = hd(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[_t] = t.current),
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
          (e._reactRootContainer = null), (e[_t] = null);
        });
      }),
      !0)
    : !1;
};
Qe.unstable_batchedUpdates = ia;
Qe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Oo(n)) throw Error(_(200));
  if (e == null || e._reactInternals === void 0) throw Error(_(38));
  return Fo(e, t, n, !1, r);
};
Qe.version = '18.2.0-next-9e3b772b8-20220608';
function vd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vd);
    } catch (e) {
      console.error(e);
    }
}
vd(), (pc.exports = Qe);
var Em = pc.exports,
  Us = Em;
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
function km(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: u } = r.location;
    return ol(
      '',
      { pathname: o, search: i, hash: u },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || 'default'
    );
  }
  function n(r, l) {
    return typeof l == 'string' ? l : Cn(l);
  }
  return Pm(t, n, null, e);
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
function Cm() {
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
      { state: n, key: (t && t.key) || r || Cm() }
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
function Pm(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    u = de.Pop,
    a = null,
    s = p();
  s == null && ((s = 0), i.replaceState(ce({}, i.state, { idx: s }), ''));
  function p() {
    return (i.state || { idx: null }).idx;
  }
  function v() {
    u = de.Pop;
    let N = p(),
      d = N == null ? null : N - s;
    (s = N), a && a({ action: u, location: w.location, delta: d });
  }
  function m(N, d) {
    u = de.Push;
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
    o && a && a({ action: u, location: w.location, delta: 1 });
  }
  function x(N, d) {
    u = de.Replace;
    let f = ol(w.location, N, d);
    n && n(f, N), (s = p());
    let h = As(f, s),
      c = w.createHref(f);
    i.replaceState(h, '', c),
      o && a && a({ action: u, location: w.location, delta: 0 });
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
      return u;
    },
    get location() {
      return e(l, i);
    },
    listen(N) {
      if (a) throw new Error('A history only accepts one active listener');
      return (
        l.addEventListener(Is, v),
        (a = N),
        () => {
          l.removeEventListener(Is, v), (a = null);
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
const _m = new Set([
  'lazy',
  'caseSensitive',
  'path',
  'id',
  'index',
  'children',
]);
function Rm(e) {
  return e.index === !0;
}
function mu(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((l, o) => {
      let i = [...n, o],
        u = typeof l.id == 'string' ? l.id : i.join('-');
      if (
        (W(
          l.index !== !0 || !l.children,
          'Cannot specify children on an index route'
        ),
        W(
          !r[u],
          'Found a route id collision on id "' +
            u +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        Rm(l))
      ) {
        let a = ce({}, l, t(l), { id: u });
        return (r[u] = a), a;
      } else {
        let a = ce({}, l, t(l), { id: u, children: void 0 });
        return (
          (r[u] = a), l.children && (a.children = mu(l.children, t, i, r)), a
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
  let o = gd(e);
  Lm(o);
  let i = null;
  for (let u = 0; i == null && u < o.length; ++u) i = Im(o[u], $m(l));
  return i;
}
function Nm(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function gd(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let l = (o, i, u) => {
    let a = {
      relativePath: u === void 0 ? o.path || '' : u,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    a.relativePath.startsWith('/') &&
      (W(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let s = Ct([r, a.relativePath]),
      p = n.concat(a);
    o.children &&
      o.children.length > 0 &&
      (W(
        o.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + s + '".')
      ),
      gd(o.children, t, p, s)),
      !(o.path == null && !o.index) &&
        t.push({ path: s, score: Fm(s, o.index), routesMeta: p });
  };
  return (
    e.forEach((o, i) => {
      var u;
      if (o.path === '' || !((u = o.path) != null && u.includes('?'))) l(o, i);
      else for (let a of yd(o.path)) l(o, i, a);
    }),
    t
  );
}
function yd(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith('?'),
    o = n.replace(/\?$/, '');
  if (r.length === 0) return l ? [o, ''] : [o];
  let i = yd(r.join('/')),
    u = [];
  return (
    u.push(...i.map((a) => (a === '' ? o : [o, a].join('/')))),
    l && u.push(...i),
    u.map((a) => (e.startsWith('/') && a === '' ? '/' : a))
  );
}
function Lm(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Um(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Tm = /^:\w+$/,
  jm = 3,
  Mm = 2,
  Dm = 1,
  zm = 10,
  Om = -2,
  Bs = (e) => e === '*';
function Fm(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(Bs) && (r += Om),
    t && (r += Mm),
    n
      .filter((l) => !Bs(l))
      .reduce((l, o) => l + (Tm.test(o) ? jm : o === '' ? Dm : zm), r)
  );
}
function Um(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Im(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = '/',
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let u = n[i],
      a = i === n.length - 1,
      s = l === '/' ? t : t.slice(l.length) || '/',
      p = Am(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: a },
        s
      );
    if (!p) return null;
    Object.assign(r, p.params);
    let v = u.route;
    o.push({
      params: r,
      pathname: Ct([l, p.pathname]),
      pathnameBase: Qm(Ct([l, p.pathnameBase])),
      route: v,
    }),
      p.pathnameBase !== '/' && (l = Ct([l, p.pathnameBase]));
  }
  return o;
}
function Am(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Bm(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, '$1'),
    u = l.slice(1);
  return {
    params: r.reduce((s, p, v) => {
      let { paramName: m, isOptional: x } = p;
      if (m === '*') {
        let w = u[v] || '';
        i = o.slice(0, o.length - w.length).replace(/(.)\/+$/, '$1');
      }
      const y = u[v];
      return x && !y ? (s[m] = void 0) : (s[m] = Vm(y || '', m)), s;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function Bm(e, t, n) {
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
          (i, u, a) => (
            r.push({ paramName: u, isOptional: a != null }),
            a ? '/?([^\\/]+)?' : '/([^\\/]+)'
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
function $m(e) {
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
function Vm(e, t) {
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
function Wm(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: n,
    search: r = '',
    hash: l = '',
  } = typeof e == 'string' ? Tt(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : Hm(n, t)) : t,
    search: Km(r),
    hash: Ym(l),
  };
}
function Hm(e, t) {
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
function ha(e, t, n, r) {
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
    u;
  if (r || i == null) u = n;
  else {
    let v = t.length - 1;
    if (i.startsWith('..')) {
      let m = i.split('/');
      for (; m[0] === '..'; ) m.shift(), (v -= 1);
      l.pathname = m.join('/');
    }
    u = v >= 0 ? t[v] : '/';
  }
  let a = Wm(l, u),
    s = i && i !== '/' && i.endsWith('/'),
    p = (o || i === '.') && n.endsWith('/');
  return !a.pathname.endsWith('/') && (s || p) && (a.pathname += '/'), a;
}
const Ct = (e) => e.join('/').replace(/\/\/+/g, '/'),
  Qm = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Km = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  Ym = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
class ma {
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
function wd(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const Sd = ['post', 'put', 'patch', 'delete'],
  Gm = new Set(Sd),
  Xm = ['get', ...Sd],
  Zm = new Set(Xm),
  Jm = new Set([301, 302, 303, 307, 308]),
  qm = new Set([307, 308]),
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
  bm = {
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
  xd = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ev = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Ed = 'remix-router-transitions';
function tv(e) {
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
  } else l = ev;
  let o = {},
    i = mu(e.routes, l, void 0, o),
    u,
    a = e.basename || '/',
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
    N = Vn(i, e.history.location, a),
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
    ae = new Map(),
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
        let O = Ca({
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
      dv(t, $);
      let g = () => pv(t, $);
      t.addEventListener('pagehide', g),
        (F = () => t.removeEventListener('pagehide', g));
    }
    return c.initialized || on(de.Pop, c.location), h;
  }
  function Rn() {
    p && p(),
      F && F(),
      v.clear(),
      P && P.abort(),
      c.fetchers.forEach((g, S) => hl(S)),
      c.blockers.forEach((g, S) => ka(S));
  }
  function zd(g) {
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
    u && ((i = u), (u = void 0)),
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
        restoreScrollPosition: _a(g, S.matches || c.matches),
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
  async function ga(g, S) {
    if (typeof g == 'number') {
      e.history.go(g);
      return;
    }
    let C = vu(
        c.location,
        c.matches,
        a,
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
      Q = Ca({ currentLocation: V, nextLocation: A, historyAction: Z });
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
            ga(g, S);
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
  function Od() {
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
      Hd(c.location, c.matches),
      (L = (C && C.preventScrollReset) === !0),
      (T = (C && C.enableViewTransition) === !0);
    let M = u || i,
      O = C && C.overrideNavigation,
      I = Vn(M, S, a);
    if (!I) {
      let J = Ge(404, { pathname: S.pathname }),
        { matches: ge, route: un } = Gs(M);
      Vo(), cr(S, { matches: ge, loaderData: {}, errors: { [un.id]: J } });
      return;
    }
    if (
      c.initialized &&
      !Le &&
      iv(c.location, S) &&
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
      let J = await Fd(V, S, C.submission, I, { replace: C.replace });
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
    } = await Ud(
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
  async function Fd(g, S, C, M, O) {
    O === void 0 && (O = {}), $o();
    let I = cv(S, C);
    me({ navigation: I });
    let V,
      A = yu(M, S);
    if (!A.route.action && !A.route.lazy)
      V = {
        type: pe.error,
        error: Ge(405, {
          method: g.method,
          pathname: S.pathname,
          routeId: A.route.id,
        }),
      };
    else if (((V = await Cr('action', g, A, M, o, l, a)), g.signal.aborted))
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
  async function Ud(g, S, C, M, O, I, V, A, z) {
    let Z = M || xi(S, O),
      le = O || I || Js(Z),
      Q = u || i,
      [J, ge] = Vs(e.history, c, C, le, S, Le, ct, rn, B, U, Q, a, A, z);
    if (
      (Vo(
        (G) =>
          !(C && C.some((tt) => tt.route.id === G)) ||
          (J && J.some((tt) => tt.route.id === G))
      ),
      (vt = ++Mt),
      J.length === 0 && ge.length === 0)
    ) {
      let G = xa();
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
          fe = _r(void 0, Ot ? Ot.data : void 0);
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
      ae.has(G.key) && Dt(G.key), G.controller && ae.set(G.key, G.controller);
    });
    let un = () => ge.forEach((G) => Dt(G.key));
    P && P.signal.addEventListener('abort', un);
    let {
      results: an,
      loaderResults: pr,
      fetcherResults: Wo,
    } = await wa(c.matches, C, J, ge, g);
    if (g.signal.aborted) return { shortCircuited: !0 };
    P && P.signal.removeEventListener('abort', un),
      ge.forEach((G) => ae.delete(G.key));
    let yt = Xs(an);
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
    let Ho = xa(),
      Qo = Ea(vt),
      Ko = Ho || Qo || ge.length > 0;
    return ce(
      { loaderData: zt, errors: vl },
      Ko ? { fetchers: new Map(c.fetchers) } : {}
    );
  }
  function ya(g) {
    return (
      s.v7_fetcherPersist &&
        (X.set(g, (X.get(g) || 0) + 1), q.has(g) && q.delete(g)),
      c.fetchers.get(g) || bm
    );
  }
  function Id(g, S, C, M) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    ae.has(g) && Dt(g);
    let O = u || i,
      I = vu(
        c.location,
        c.matches,
        a,
        s.v7_prependBasename,
        C,
        S,
        M == null ? void 0 : M.relative
      ),
      V = Vn(O, I, a);
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
    let le = yu(V, A);
    if (((L = (M && M.preventScrollReset) === !0), z && ot(z.formMethod))) {
      Ad(g, S, A, le, V, z);
      return;
    }
    B.set(g, { routeId: S, path: A }), Bd(g, S, A, le, V, z);
  }
  async function Ad(g, S, C, M, O, I) {
    if (($o(), B.delete(g), !M.route.action && !M.route.lazy)) {
      let fe = Ge(405, { method: I.formMethod, pathname: C, routeId: S });
      dr(g, S, fe);
      return;
    }
    let V = c.fetchers.get(g),
      A = fv(I, V);
    c.fetchers.set(g, A), me({ fetchers: new Map(c.fetchers) });
    let z = new AbortController(),
      Z = Pr(e.history, C, z.signal, I);
    ae.set(g, z);
    let le = Mt,
      Q = await Cr('action', Z, M, O, o, l, a);
    if (Z.signal.aborted) {
      ae.get(g) === z && ae.delete(g);
      return;
    }
    if (q.has(g)) {
      c.fetchers.set(g, Ut(void 0)), me({ fetchers: new Map(c.fetchers) });
      return;
    }
    if (Xn(Q))
      if ((ae.delete(g), vt > le)) {
        let fe = Ut(void 0);
        c.fetchers.set(g, fe), me({ fetchers: new Map(c.fetchers) });
        return;
      } else {
        U.add(g);
        let fe = _r(I);
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
      un = u || i,
      an =
        c.navigation.state !== 'idle'
          ? Vn(un, c.navigation.location, a)
          : c.matches;
    W(an, "Didn't find any matches after fetcher action");
    let pr = ++Mt;
    j.set(g, pr);
    let Wo = _r(I, Q.data);
    c.fetchers.set(g, Wo);
    let [yt, zt] = Vs(
      e.history,
      c,
      an,
      I,
      J,
      Le,
      ct,
      rn,
      B,
      U,
      un,
      a,
      { [M.route.id]: Q.data },
      void 0
    );
    zt
      .filter((fe) => fe.key !== g)
      .forEach((fe) => {
        let hr = fe.key,
          Ra = c.fetchers.get(hr),
          Kd = _r(void 0, Ra ? Ra.data : void 0);
        c.fetchers.set(hr, Kd),
          ae.has(hr) && Dt(hr),
          fe.controller && ae.set(hr, fe.controller);
      }),
      me({ fetchers: new Map(c.fetchers) });
    let vl = () => zt.forEach((fe) => Dt(fe.key));
    z.signal.addEventListener('abort', vl);
    let {
      results: Ho,
      loaderResults: Qo,
      fetcherResults: Ko,
    } = await wa(c.matches, an, yt, zt, ge);
    if (z.signal.aborted) return;
    z.signal.removeEventListener('abort', vl),
      j.delete(g),
      ae.delete(g),
      zt.forEach((fe) => ae.delete(fe.key));
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
    Ea(pr),
      c.navigation.state === 'loading' && pr > vt
        ? (W(E, 'Expected pending action'),
          P && P.abort(),
          cr(c.navigation.location, {
            matches: an,
            loaderData: tt,
            errors: Ot,
            fetchers: new Map(c.fetchers),
          }))
        : (me({
            errors: Ot,
            loaderData: Ys(c.loaderData, tt, an, Ot),
            fetchers: new Map(c.fetchers),
          }),
          (Le = !1));
  }
  async function Bd(g, S, C, M, O, I) {
    let V = c.fetchers.get(g),
      A = _r(I, V ? V.data : void 0);
    c.fetchers.set(g, A), me({ fetchers: new Map(c.fetchers) });
    let z = new AbortController(),
      Z = Pr(e.history, C, z.signal);
    ae.set(g, z);
    let le = Mt,
      Q = await Cr('loader', Z, M, O, o, l, a);
    if (
      (mn(Q) && (Q = (await Pd(Q, Z.signal, !0)) || Q),
      ae.get(g) === z && ae.delete(g),
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
      else if (xd.test(S.location)) {
        const ge = e.history.createURL(S.location);
        J = ge.origin !== t.location.origin || ir(ge.pathname, a) == null;
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
    if (qm.has(S.status) && Q && ot(Q.formMethod))
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
  async function wa(g, S, C, M, O) {
    let I = await Promise.all([
        ...C.map((z) => Cr('loader', O, z, S, o, l, a)),
        ...M.map((z) =>
          z.matches && z.match && z.controller
            ? Cr(
                'loader',
                Pr(e.history, z.path, z.controller.signal),
                z.match,
                z.matches,
                o,
                l,
                a
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
        ae.has(S) && (rn.push(S), Dt(S));
      });
  }
  function dr(g, S, C) {
    let M = Br(c.matches, S);
    hl(g), me({ errors: { [M.route.id]: C }, fetchers: new Map(c.fetchers) });
  }
  function hl(g) {
    let S = c.fetchers.get(g);
    ae.has(g) && !(S && S.state === 'loading' && j.has(g)) && Dt(g),
      B.delete(g),
      j.delete(g),
      U.delete(g),
      q.delete(g),
      c.fetchers.delete(g);
  }
  function $d(g) {
    if (s.v7_fetcherPersist) {
      let S = (X.get(g) || 0) - 1;
      S <= 0 ? (X.delete(g), q.add(g)) : X.set(g, S);
    } else hl(g);
    me({ fetchers: new Map(c.fetchers) });
  }
  function Dt(g) {
    let S = ae.get(g);
    W(S, 'Expected fetch controller: ' + g), S.abort(), ae.delete(g);
  }
  function Sa(g) {
    for (let S of g) {
      let C = ya(S),
        M = Ut(C.data);
      c.fetchers.set(S, M);
    }
  }
  function xa() {
    let g = [],
      S = !1;
    for (let C of U) {
      let M = c.fetchers.get(C);
      W(M, 'Expected fetcher: ' + C),
        M.state === 'loading' && (U.delete(C), g.push(C), (S = !0));
    }
    return Sa(g), S;
  }
  function Ea(g) {
    let S = [];
    for (let [C, M] of j)
      if (M < g) {
        let O = c.fetchers.get(C);
        W(O, 'Expected fetcher: ' + C),
          O.state === 'loading' && (Dt(C), j.delete(C), S.push(C));
      }
    return Sa(S), S.length > 0;
  }
  function Vd(g, S) {
    let C = c.blockers.get(g) || kr;
    return Te.get(g) !== S && Te.set(g, S), C;
  }
  function ka(g) {
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
  function Ca(g) {
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
  function Wd(g, S, C) {
    if (((m = g), (y = S), (x = C || null), !w && c.navigation === Si)) {
      w = !0;
      let M = _a(c.location, c.matches);
      M != null && me({ restoreScrollPosition: M });
    }
    return () => {
      (m = null), (y = null), (x = null);
    };
  }
  function Pa(g, S) {
    return (
      (x &&
        x(
          g,
          S.map((M) => Nm(M, c.loaderData))
        )) ||
      g.key
    );
  }
  function Hd(g, S) {
    if (m && y) {
      let C = Pa(g, S);
      m[C] = y();
    }
  }
  function _a(g, S) {
    if (m) {
      let C = Pa(g, S),
        M = m[C];
      if (typeof M == 'number') return M;
    }
    return null;
  }
  function Qd(g) {
    (o = {}), (u = mu(g, l, void 0, o));
  }
  return (
    (h = {
      get basename() {
        return a;
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
      subscribe: zd,
      enableScrollRestoration: Wd,
      navigate: ga,
      fetch: Id,
      revalidate: Od,
      createHref: (g) => e.history.createHref(g),
      encodeLocation: (g) => e.history.encodeLocation(g),
      getFetcher: ya,
      deleteFetcher: $d,
      dispose: Rn,
      getBlocker: Vd,
      deleteBlocker: ka,
      _internalFetchControllers: ae,
      _internalActiveDeferreds: Ye,
      _internalSetRoutes: Qd,
    }),
    h
  );
}
function nv(e) {
  return (
    e != null &&
    (('formData' in e && e.formData != null) ||
      ('body' in e && e.body !== void 0))
  );
}
function vu(e, t, n, r, l, o, i) {
  let u, a;
  if (o != null && i !== 'path') {
    u = [];
    for (let p of t)
      if ((u.push(p), p.route.id === o)) {
        a = p;
        break;
      }
  } else (u = t), (a = t[t.length - 1]);
  let s = ha(
    l || '.',
    Uo(u).map((p) => p.pathnameBase),
    ir(e.pathname, n) || e.pathname,
    i === 'path'
  );
  return (
    l == null && ((s.search = e.search), (s.hash = e.hash)),
    (l == null || l === '' || l === '.') &&
      a &&
      a.route.index &&
      !va(s.search) &&
      (s.search = s.search ? s.search.replace(/^\?/, '?index&') : '?index'),
    r &&
      n !== '/' &&
      (s.pathname = s.pathname === '/' ? n : Ct([n, s.pathname])),
    Cn(s)
  );
}
function $s(e, t, n, r) {
  if (!r || !nv(r)) return { path: n };
  if (r.formMethod && !sv(r.formMethod))
    return { path: n, error: Ge(405, { method: r.formMethod }) };
  let l = () => ({ path: n, error: Ge(400, { type: 'invalid-body' }) }),
    o = r.formMethod || 'get',
    i = e ? o.toUpperCase() : o.toLowerCase(),
    u = Cd(n);
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
          formAction: u,
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
            formAction: u,
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
  let a, s;
  if (r.formData) (a = gu(r.formData)), (s = r.formData);
  else if (r.body instanceof FormData) (a = gu(r.body)), (s = r.body);
  else if (r.body instanceof URLSearchParams) (a = r.body), (s = Qs(a));
  else if (r.body == null) (a = new URLSearchParams()), (s = new FormData());
  else
    try {
      (a = new URLSearchParams(r.body)), (s = Qs(a));
    } catch {
      return l();
    }
  let p = {
    formMethod: i,
    formAction: u,
    formEncType: (r && r.formEncType) || 'application/x-www-form-urlencoded',
    formData: s,
    json: void 0,
    text: void 0,
  };
  if (ot(p.formMethod)) return { path: n, submission: p };
  let v = Tt(n);
  return (
    t && v.search && va(v.search) && a.append('index', ''),
    (v.search = '?' + a),
    { path: Cn(v), submission: p }
  );
}
function rv(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((l) => l.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Vs(e, t, n, r, l, o, i, u, a, s, p, v, m, x) {
  let y = x ? Object.values(x)[0] : m ? Object.values(m)[0] : void 0,
    w = e.createURL(t.location),
    N = e.createURL(l),
    d = x ? Object.keys(x)[0] : void 0,
    h = rv(n, d).filter((E, L) => {
      if (E.route.lazy) return !0;
      if (E.route.loader == null) return !1;
      if (lv(t.loaderData, t.matches[L], E) || i.some(($) => $ === E.route.id))
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
              kd(P, T),
          }
        )
      );
    }),
    c = [];
  return (
    a.forEach((E, L) => {
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
        $ = yu(P, E.path),
        F = !1;
      s.has(L)
        ? (F = !1)
        : u.includes(L)
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
function lv(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function kd(e, t) {
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
    let a = l[i] !== void 0 && i !== 'hasErrorBoundary';
    kn(
      !a,
      'Route "' +
        l.id +
        '" has a static property "' +
        i +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + i + '" will be ignored.')
    ),
      !a && !_m.has(i) && (o[i] = r[i]);
  }
  Object.assign(l, o), Object.assign(l, ce({}, t(l), { lazy: void 0 }));
}
async function Cr(e, t, n, r, l, o, i, u) {
  u === void 0 && (u = {});
  let a,
    s,
    p,
    v = (y) => {
      let w,
        N = new Promise((d, f) => (w = f));
      return (
        (p = () => w()),
        t.signal.addEventListener('abort', p),
        Promise.race([
          y({ request: t, params: n.params, context: u.requestContext }),
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
    (a = pe.error), (s = y);
  } finally {
    p && t.signal.removeEventListener('abort', p);
  }
  if (av(s)) {
    let y = s.status;
    if (Jm.has(y)) {
      let d = s.headers.get('Location');
      if (
        (W(
          d,
          'Redirects returned/thrown from loaders/actions must have a Location header'
        ),
        !xd.test(d))
      )
        d = vu(new URL(t.url), r.slice(0, r.indexOf(n) + 1), i, !0, d);
      else if (!u.isStaticRequest) {
        let f = new URL(t.url),
          h = d.startsWith('//') ? new URL(f.protocol + d) : new URL(d),
          c = ir(h.pathname, i) != null;
        h.origin === f.origin && c && (d = h.pathname + h.search + h.hash);
      }
      if (u.isStaticRequest) throw (s.headers.set('Location', d), s);
      return {
        type: pe.redirect,
        status: y,
        location: d,
        revalidate: s.headers.get('X-Remix-Revalidate') !== null,
        reloadDocument: s.headers.get('X-Remix-Reload-Document') !== null,
      };
    }
    if (u.isRouteRequest)
      throw { type: a === pe.error ? pe.error : pe.data, response: s };
    let w,
      N = s.headers.get('Content-Type');
    return (
      N && /\bapplication\/json\b/.test(N)
        ? (w = await s.json())
        : (w = await s.text()),
      a === pe.error
        ? { type: a, error: new ma(y, s.statusText, w), headers: s.headers }
        : { type: pe.data, data: w, statusCode: s.status, headers: s.headers }
    );
  }
  if (a === pe.error) return { type: a, error: s };
  if (uv(s)) {
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
  let l = e.createURL(Cd(t)).toString(),
    o = { signal: n };
  if (r && ot(r.formMethod)) {
    let { formMethod: i, formEncType: u } = r;
    (o.method = i.toUpperCase()),
      u === 'application/json'
        ? ((o.headers = new Headers({ 'Content-Type': u })),
          (o.body = JSON.stringify(r.json)))
        : u === 'text/plain'
        ? (o.body = r.text)
        : u === 'application/x-www-form-urlencoded' && r.formData
        ? (o.body = gu(r.formData))
        : (o.body = r.formData);
  }
  return new Request(l, o);
}
function gu(e) {
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
function ov(e, t, n, r, l) {
  let o = {},
    i = null,
    u,
    a = !1,
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
          a || ((a = !0), (u = wd(p.error) ? p.error.status : 500)),
          p.headers && (s[m] = p.headers);
      } else
        mn(p)
          ? (l.set(m, p.deferredData), (o[m] = p.deferredData.data))
          : (o[m] = p.data),
          p.statusCode != null &&
            p.statusCode !== 200 &&
            !a &&
            (u = p.statusCode),
          p.headers && (s[m] = p.headers);
    }),
    r && ((i = r), (o[Object.keys(r)[0]] = void 0)),
    { loaderData: o, errors: i, statusCode: u || 200, loaderHeaders: s }
  );
}
function Ks(e, t, n, r, l, o, i, u) {
  let { loaderData: a, errors: s } = ov(t, n, r, l, u);
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
  return { loaderData: a, errors: s };
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
    u = 'Unknown @remix-run/router error';
  return (
    e === 400
      ? ((i = 'Bad Request'),
        l && n && r
          ? (u =
              'You made a ' +
              l +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : o === 'defer-action'
          ? (u = 'defer() is not supported in actions')
          : o === 'invalid-body' && (u = 'Unable to encode submission body'))
      : e === 403
      ? ((i = 'Forbidden'),
        (u = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((i = 'Not Found'), (u = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((i = 'Method Not Allowed'),
        l && n && r
          ? (u =
              'You made a ' +
              l.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : l && (u = 'Invalid request method "' + l.toUpperCase() + '"')),
    new ma(e || 500, i, new Error(u), !0)
  );
}
function Xs(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Xn(n)) return { result: n, idx: t };
  }
}
function Cd(e) {
  let t = typeof e == 'string' ? Tt(e) : e;
  return Cn(ce({}, t, { hash: '' }));
}
function iv(e, t) {
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
function uv(e) {
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
function av(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function sv(e) {
  return Zm.has(e.toLowerCase());
}
function ot(e) {
  return Gm.has(e.toLowerCase());
}
async function Zs(e, t, n, r, l, o) {
  for (let i = 0; i < n.length; i++) {
    let u = n[i],
      a = t[i];
    if (!a) continue;
    let s = e.find((v) => v.route.id === a.route.id),
      p = s != null && !kd(s, a) && (o && o[a.route.id]) !== void 0;
    if (mn(u) && (l || p)) {
      let v = r[i];
      W(v, 'Expected an AbortSignal for revalidating fetcher deferred result'),
        await Pd(u, v, l).then((m) => {
          m && (n[i] = m || n[i]);
        });
    }
  }
}
async function Pd(e, t, n) {
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
function va(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function yu(e, t) {
  let n = typeof t == 'string' ? Tt(t).search : t.search;
  if (e[e.length - 1].route.index && va(n || '')) return e[e.length - 1];
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
function cv(e, t) {
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
function _r(e, t) {
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
function fv(e, t) {
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
function dv(e, t) {
  try {
    let n = e.sessionStorage.getItem(Ed);
    if (n) {
      let r = JSON.parse(n);
      for (let [l, o] of Object.entries(r || {}))
        o && Array.isArray(o) && t.set(l, new Set(o || []));
    }
  } catch {}
}
function pv(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, l] of t) n[r] = [...l];
    try {
      e.sessionStorage.setItem(Ed, JSON.stringify(n));
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
  ur = k.createContext(null),
  Ao = k.createContext(null),
  jt = k.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Rd = k.createContext(null);
function hv(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  pl() || W(!1);
  let { basename: r, navigator: l } = k.useContext(ur),
    { hash: o, pathname: i, search: u } = Ld(e, { relative: n }),
    a = i;
  return (
    r !== '/' && (a = i === '/' ? r : Ct([r, i])),
    l.createHref({ pathname: a, search: u, hash: o })
  );
}
function pl() {
  return k.useContext(Ao) != null;
}
function ar() {
  return pl() || W(!1), k.useContext(Ao).location;
}
function Nd(e) {
  k.useContext(ur).static || k.useLayoutEffect(e);
}
function sr() {
  let { isDataRoute: e } = k.useContext(jt);
  return e ? Lv() : mv();
}
function mv() {
  pl() || W(!1);
  let e = k.useContext(Io),
    { basename: t, navigator: n } = k.useContext(ur),
    { matches: r } = k.useContext(jt),
    { pathname: l } = ar(),
    o = JSON.stringify(Uo(r).map((a) => a.pathnameBase)),
    i = k.useRef(!1);
  return (
    Nd(() => {
      i.current = !0;
    }),
    k.useCallback(
      function (a, s) {
        if ((s === void 0 && (s = {}), !i.current)) return;
        if (typeof a == 'number') {
          n.go(a);
          return;
        }
        let p = ha(a, JSON.parse(o), l, s.relative === 'path');
        e == null &&
          t !== '/' &&
          (p.pathname = p.pathname === '/' ? t : Ct([t, p.pathname])),
          (s.replace ? n.replace : n.push)(p, s.state, s);
      },
      [t, n, o, l, e]
    )
  );
}
const vv = k.createContext(null);
function gv(e) {
  let t = k.useContext(jt).outlet;
  return t && k.createElement(vv.Provider, { value: e }, t);
}
function yv() {
  let { matches: e } = k.useContext(jt),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Ld(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = k.useContext(jt),
    { pathname: l } = ar(),
    o = JSON.stringify(Uo(r).map((i) => i.pathnameBase));
  return k.useMemo(() => ha(e, JSON.parse(o), l, n === 'path'), [e, o, l, n]);
}
function wv(e, t, n) {
  pl() || W(!1);
  let { navigator: r } = k.useContext(ur),
    { matches: l } = k.useContext(jt),
    o = l[l.length - 1],
    i = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : '/';
  o && o.route;
  let a = ar(),
    s;
  if (t) {
    var p;
    let w = typeof t == 'string' ? Tt(t) : t;
    u === '/' || ((p = w.pathname) != null && p.startsWith(u)) || W(!1),
      (s = w);
  } else s = a;
  let v = s.pathname || '/',
    m = u === '/' ? v : v.slice(u.length) || '/',
    x = Vn(e, { pathname: m }),
    y = Cv(
      x &&
        x.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, i, w.params),
            pathname: Ct([
              u,
              r.encodeLocation
                ? r.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === '/'
                ? u
                : Ct([
                    u,
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
function Sv() {
  let e = Nv(),
    t = wd(e)
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
const xv = k.createElement(Sv, null);
class Ev extends k.Component {
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
          k.createElement(Rd.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function kv(e) {
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
function Cv(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var l;
    if ((l = n) != null && l.errors) e = n.matches;
    else return null;
  }
  let o = e,
    i = (r = n) == null ? void 0 : r.errors;
  if (i != null) {
    let u = o.findIndex(
      (a) => a.route.id && (i == null ? void 0 : i[a.route.id])
    );
    u >= 0 || W(!1), (o = o.slice(0, Math.min(o.length, u + 1)));
  }
  return o.reduceRight((u, a, s) => {
    let p = a.route.id ? (i == null ? void 0 : i[a.route.id]) : null,
      v = null;
    n && (v = a.route.errorElement || xv);
    let m = t.concat(o.slice(0, s + 1)),
      x = () => {
        let y;
        return (
          p
            ? (y = v)
            : a.route.Component
            ? (y = k.createElement(a.route.Component, null))
            : a.route.element
            ? (y = a.route.element)
            : (y = u),
          k.createElement(kv, {
            match: a,
            routeContext: { outlet: u, matches: m, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (a.route.ErrorBoundary || a.route.errorElement || s === 0)
      ? k.createElement(Ev, {
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
var Td = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })(Td || {}),
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
function Pv(e) {
  let t = k.useContext(Io);
  return t || W(!1), t;
}
function _v(e) {
  let t = k.useContext(_d);
  return t || W(!1), t;
}
function Rv(e) {
  let t = k.useContext(jt);
  return t || W(!1), t;
}
function jd(e) {
  let t = Rv(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || W(!1), n.route.id;
}
function Nv() {
  var e;
  let t = k.useContext(Rd),
    n = _v(wo.UseRouteError),
    r = jd(wo.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function Lv() {
  let { router: e } = Pv(Td.UseNavigateStable),
    t = jd(wo.UseNavigateStable),
    n = k.useRef(!1);
  return (
    Nd(() => {
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
function Tv(e) {
  return gv(e.context);
}
function jv(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: l = de.Pop,
    navigator: o,
    static: i = !1,
  } = e;
  pl() && W(!1);
  let u = t.replace(/^\/*/, '/'),
    a = k.useMemo(() => ({ basename: u, navigator: o, static: i }), [u, o, i]);
  typeof r == 'string' && (r = Tt(r));
  let {
      pathname: s = '/',
      search: p = '',
      hash: v = '',
      state: m = null,
      key: x = 'default',
    } = r,
    y = k.useMemo(() => {
      let w = ir(s, u);
      return w == null
        ? null
        : {
            location: { pathname: w, search: p, hash: v, state: m, key: x },
            navigationType: l,
          };
    }, [u, s, p, v, m, x, l]);
  return y == null
    ? null
    : k.createElement(
        ur.Provider,
        { value: a },
        k.createElement(Ao.Provider, { children: n, value: y })
      );
}
new Promise(() => {});
function Mv(e) {
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
function Dv(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function zv(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Ov(e, t) {
  return e.button === 0 && (!t || t === '_self') && !zv(e);
}
function wu(e) {
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
function Fv(e, t) {
  let n = wu(e);
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
const Uv = [
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
function Iv(e, t) {
  return tv({
    basename: t == null ? void 0 : t.basename,
    future: il({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: km({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || Av(),
    routes: e,
    mapRouteProperties: Mv,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function Av() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = il({}, t, { errors: Bv(t.errors) })), t;
}
function Bv(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, l] of t)
    if (l && l.__type === 'RouteErrorResponse')
      n[r] = new ma(l.status, l.statusText, l.data, l.internal === !0);
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
const $v = k.createContext({ isTransitioning: !1 }),
  Vv = k.createContext(new Map()),
  Wv = 'startTransition',
  qs = dp[Wv];
function Hv(e) {
  qs ? qs(e) : e();
}
class Qv {
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
function Kv(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [l, o] = k.useState(n.state),
    [i, u] = k.useState(),
    [a, s] = k.useState({ isTransitioning: !1 }),
    [p, v] = k.useState(),
    [m, x] = k.useState(),
    [y, w] = k.useState(),
    N = k.useRef(new Map()),
    { v7_startTransition: d } = r || {},
    f = k.useCallback(
      (P) => {
        d ? Hv(P) : P();
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
            : (u(P),
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
      a.isTransitioning && v(new Qv());
    }, [a.isTransitioning]),
    k.useEffect(() => {
      if (p && i && n.window) {
        let P = i,
          T = p.promise,
          $ = n.window.document.startViewTransition(async () => {
            f(() => o(P)), await T;
          });
        $.finished.finally(() => {
          v(void 0), x(void 0), u(void 0), s({ isTransitioning: !1 });
        }),
          x($);
      }
    }, [f, i, p, n.window]),
    k.useEffect(() => {
      p && i && l.location.key === i.location.key && p.resolve();
    }, [p, m, l.location, i]),
    k.useEffect(() => {
      !a.isTransitioning &&
        y &&
        (u(y.state),
        s({
          isTransitioning: !0,
          currentLocation: y.currentLocation,
          nextLocation: y.nextLocation,
        }),
        w(void 0));
    }, [a.isTransitioning, y]);
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
          Vv.Provider,
          { value: N.current },
          k.createElement(
            $v.Provider,
            { value: a },
            k.createElement(
              jv,
              {
                basename: E,
                location: l.location,
                navigationType: l.historyAction,
                navigator: c,
              },
              l.initialized
                ? k.createElement(Yv, { routes: n.routes, state: l })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
function Yv(e) {
  let { routes: t, state: n } = e;
  return wv(t, void 0, n);
}
const Gv =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  Xv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Zv = k.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: o,
        replace: i,
        state: u,
        target: a,
        to: s,
        preventScrollReset: p,
        unstable_viewTransition: v,
      } = t,
      m = Dv(t, Uv),
      { basename: x } = k.useContext(ur),
      y,
      w = !1;
    if (typeof s == 'string' && Xv.test(s) && ((y = s), Gv))
      try {
        let h = new URL(window.location.href),
          c = s.startsWith('//') ? new URL(h.protocol + s) : new URL(s),
          E = ir(c.pathname, x);
        c.origin === h.origin && E != null
          ? (s = E + c.search + c.hash)
          : (w = !0);
      } catch {}
    let N = hv(s, { relative: l }),
      d = Jv(s, {
        replace: i,
        state: u,
        target: a,
        preventScrollReset: p,
        relative: l,
        unstable_viewTransition: v,
      });
    function f(h) {
      r && r(h), h.defaultPrevented || d(h);
    }
    return k.createElement(
      'a',
      il({}, m, { href: y || N, onClick: w || o ? r : f, ref: n, target: a })
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
function Jv(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: o,
      relative: i,
      unstable_viewTransition: u,
    } = t === void 0 ? {} : t,
    a = sr(),
    s = ar(),
    p = Ld(e, { relative: i });
  return k.useCallback(
    (v) => {
      if (Ov(v, n)) {
        v.preventDefault();
        let m = r !== void 0 ? r : Cn(s) === Cn(p);
        a(e, {
          replace: m,
          state: l,
          preventScrollReset: o,
          relative: i,
          unstable_viewTransition: u,
        });
      }
    },
    [s, a, p, r, l, n, e, o, i, u]
  );
}
function Bo(e) {
  let t = k.useRef(wu(e)),
    n = k.useRef(!1),
    r = ar(),
    l = k.useMemo(() => Fv(r.search, n.current ? null : t.current), [r.search]),
    o = sr(),
    i = k.useCallback(
      (u, a) => {
        const s = wu(typeof u == 'function' ? u(l) : u);
        (n.current = !0), o('?' + s, a);
      },
      [o, l]
    );
  return [l, i];
}
function Md() {
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
function qv({ id: e, character: t }) {
  const { name: n, gender: r, height: l, mass: o, birth_year: i } = t,
    u = sr(),
    a = ar(),
    s = new URLSearchParams(a.search);
  s.set('details', '1');
  const p = () => {
    u(`/${e}?${s.toString()}`);
  };
  return R.jsx('li', {
    className:
      'flex items-center grow w-full gap-5 bg-gray-900/50 text-white rounded-lg',
    children: R.jsxs('div', {
      onClick: p,
      className:
        'flex grow items-center justify-between gap-5 text-white/80 px-5 py-2 cursor-pointer',
      children: [
        R.jsx('h2', { className: 'text-xl font-bold', children: n }),
        R.jsxs('p', {
          children: [R.jsx('strong', { children: 'Birth Year:' }), ' ', i],
        }),
      ],
    }),
  });
}
function bv({ status: e, results: t }) {
  return R.jsx('main', {
    className:
      'p-5 w-full max-w-xl mx-auto flex flex-col items-start bg-gray-700/50 backdrop-blur-sm rounded-lg',
    children: R.jsxs('ul', {
      className: 'flex flex-col gap-2 w-full',
      children: [
        e === 'loading' && R.jsx(Md, {}),
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
            return R.jsx(qv, { id: r, character: n }, r);
          }),
        e === 'active' &&
          t.length === 0 &&
          R.jsx('p', { className: 'text-white', children: 'Nothing found' }),
      ],
    }),
  });
}
function e0({ children: e }) {
  return R.jsx('div', {
    className:
      'p-5 h-full min-h-screen relative flex flex-col gap-5 w-full bg-sw-bg bg-cover bg-no-repeat bg-top',
    children: e,
  });
}
class t0 extends k.Component {
  constructor() {
    super(...arguments);
    Na(this, 'state', { hasError: !1 });
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
function n0() {
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
function r0(e, t) {
  const n = [];
  for (let r = e; r <= t; r++) n.push(r);
  return n;
}
var $e = ((e) => (
  (e.active = 'active'), (e.loading = 'loading'), (e.error = 'error'), e
))($e || {});
function l0({ status: e, currentPage: t, totalPages: n, onPageChange: r }) {
  const l = r0(1, n);
  return (
    e !== $e.loading &&
    n > 1 &&
    R.jsx('div', {
      className:
        'text-white max-w-xl mx-auto flex flex-wrap justify-center gap-3',
      children: l.map((o) =>
        R.jsx(
          Zv,
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
const Dd = 'https://swapi.dev/api/people/',
  fn = 5,
  ul = 10,
  So = 20;
async function o0(e = '', t = 1, n = ul) {
  let r = zl(e, t),
    l,
    o;
  if (n === fn) {
    const i = Math.ceil(t / 2);
    r = zl(e, i);
  }
  if (n === So) {
    const i = t * 2 - 1,
      u = t * 2;
    (l = zl(e, i)), (o = zl(e, u));
  }
  try {
    let i;
    if (
      ((n === fn || n === ul) && (i = await (await fetch(r)).json()),
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
    let u;
    const a = Math.floor(i.count / n);
    i.count % n === 0 ? (u = a) : (u = a + 1);
    let s = i.results;
    return (
      n === fn && (t % 2 !== 0 ? (s = s.slice(0, fn)) : (s = s.slice(fn))),
      { results: s, pages: u }
    );
  } catch (i) {
    throw (console.error(i), i);
  }
}
function zl(e, t) {
  return `${Dd}${e ? `?search=${e.toLowerCase().trim()}` : ''}${
    t === 1 ? '' : `${e ? '&' : '?'}page=${t}`
  }`;
}
async function i0(e) {
  const t = `${Dd}${e}`;
  try {
    return { data: await (await fetch(t)).json() };
  } catch (n) {
    throw (console.error(n), n);
  }
}
function u0({ searchTerm: e, status: t }) {
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
function a0({ searchTerm: e, status: t, onSearchChange: n }) {
  const [r] = Bo(),
    l = sr(),
    o = (i) => {
      i.preventDefault();
      const a = i.target.elements.namedItem('searchTerm').value,
        s = new URLSearchParams(r);
      s.set('page', '1'),
        s.set('details', '0'),
        s.delete('page'),
        s.delete('details'),
        l(`/?${s.toString()}`),
        window.localStorage.setItem('searchTerm', a),
        n(a);
    };
  return R.jsx('header', {
    children: R.jsx('form', {
      className: 'max-w-xl mx-auto',
      onSubmit: o,
      children: R.jsx(u0, { searchTerm: e, status: t }),
    }),
  });
}
function s0({ perPage: e, onSelect: t }) {
  return R.jsxs('div', {
    className: 'w-28 h-20',
    children: [
      R.jsx('label', {
        htmlFor: 'per_page',
        className:
          'block mb-2 text-sm font-medium text-gray-900 dark:text-white',
        children: 'Items per page',
      }),
      R.jsxs('select', {
        id: 'per_page',
        className:
          'w-16 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
        value: e,
        onChange: t,
        children: [
          R.jsx('option', { value: fn, children: fn }),
          R.jsx('option', { value: ul, children: ul }),
          R.jsx('option', { value: So, children: So }),
        ],
      }),
    ],
  });
}
const c0 = () => {
  const [e, t] = k.useState(window.localStorage.getItem('searchTerm') ?? ''),
    [n, r] = k.useState($e.active),
    [l, o] = k.useState([]),
    [i, u] = k.useState(1),
    [a, s] = k.useState(ul),
    [p] = Bo(),
    [v, m] = k.useState(p.get('page') ? Number(p.get('page')) : 1),
    x = sr(),
    y = async (f, h = 1, c) => {
      try {
        r($e.loading);
        const { results: E, pages: L } = await o0(f, h, c);
        o(E), u(L), r($e.active);
      } catch (E) {
        E instanceof Error
          ? console.log(E.message)
          : console.error('An unknown error occurred:', E),
          r($e.error);
      }
    };
  k.useEffect(() => {
    y(e, v, a);
  }, [e, v, a]);
  const w = (f) => {
      m(1), t(f), x('/');
    },
    N = (f) => {
      m(f);
    },
    d = (f) => {
      s(Number(f.target.value)), m(1), x('/');
    };
  return R.jsx(t0, {
    children: R.jsxs(e0, {
      children: [
        R.jsx(a0, { searchTerm: e, status: n, onSearchChange: w }),
        R.jsx(bv, { status: n, results: l }),
        R.jsx(l0, {
          status: n,
          currentPage: v,
          totalPages: i,
          onPageChange: N,
        }),
        R.jsx(s0, { perPage: a, onSelect: d }),
        R.jsx(n0, {}),
        R.jsx(Tv, {}),
      ],
    }),
  });
};
function f0() {
  return R.jsx(c0, {});
}
function d0({ onClose: e }) {
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
function tc({ children: e }) {
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
      children: [
        R.jsx('div', {
          className: 'fixed top-0 left-0 w-full h-full bg-gray-900/30',
          onClick: r,
        }),
        R.jsxs('div', {
          className:
            'z-20 py-20 fixed top-0 right-0 h-full w-96 bg-gray-900/50 backdrop-blur-sm',
          children: [R.jsx(d0, { onClose: r }), e],
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
function p0({ details: e }) {
  const {
    name: t,
    birth_year: n,
    height: r,
    mass: l,
    hair_color: o,
    skin_color: i,
    eye_color: u,
    gender: a,
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
            Ln(u),
          ],
        }),
        R.jsxs('li', {
          className: 'flex justify-between',
          children: [
            R.jsx('span', { className: 'font-bold', children: 'Gender: ' }),
            Ln(a),
          ],
        }),
      ],
    }),
  });
}
function h0() {
  const [e, t] = k.useState(null),
    [n, r] = k.useState($e.active),
    { id: l } = yv(),
    [o] = Bo(),
    i = Number(o.get('details')) === 1 ? 1 : 0;
  return (
    k.useEffect(() => {
      (async () => {
        r($e.loading);
        const { data: a } = await i0(Number(l));
        a && t(a), r($e.active);
      })();
    }, [l]),
    R.jsx(R.Fragment, {
      children:
        i === 1 &&
        R.jsxs(R.Fragment, {
          children: [
            n === $e.loading && R.jsx(tc, { children: R.jsx(Md, {}) }),
            n === $e.active &&
              e !== null &&
              R.jsx(tc, { children: R.jsx(p0, { details: e }) }),
          ],
        }),
    })
  );
}
const m0 = Iv([
  {
    path: '/',
    element: R.jsx(f0, {}),
    children: [{ path: '/:id', element: R.jsx(h0, {}) }],
  },
]);
Ei.createRoot(document.getElementById('root')).render(
  R.jsx(fc.StrictMode, { children: R.jsx(Kv, { router: m0 }) })
);
