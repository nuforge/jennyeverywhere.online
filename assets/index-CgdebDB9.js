const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/StoryView-BWQiFUEQ.js',
      'assets/001-5tJZwWY5.js',
      'assets/StoryView-B3Rx6nwd.css',
      'assets/TimelineView-DL8x-yH1.js',
      'assets/jenny-everywhere-avatar-13-DOE0bc9J.js',
    ]),
) => i.map((i) => d[i])
var fh = Object.defineProperty
var vh = (e, t, n) =>
  t in e ? fh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n)
var tt = (e, t, n) => vh(e, typeof t != 'symbol' ? t + '' : t, n)
;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) l(a)
  new MutationObserver((a) => {
    for (const o of a)
      if (o.type === 'childList')
        for (const i of o.addedNodes) i.tagName === 'LINK' && i.rel === 'modulepreload' && l(i)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(a) {
    const o = {}
    return (
      a.integrity && (o.integrity = a.integrity),
      a.referrerPolicy && (o.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : a.crossOrigin === 'anonymous'
          ? (o.credentials = 'omit')
          : (o.credentials = 'same-origin'),
      o
    )
  }
  function l(a) {
    if (a.ep) return
    a.ep = !0
    const o = n(a)
    fetch(a.href, o)
  }
})()
/**
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Cr(e) {
  const t = Object.create(null)
  for (const n of e.split(',')) t[n] = 1
  return (n) => n in t
}
const He = {},
  Il = [],
  hn = () => {},
  mh = () => !1,
  Bo = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  kr = (e) => e.startsWith('onUpdate:'),
  lt = Object.assign,
  xr = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  hh = Object.prototype.hasOwnProperty,
  Fe = (e, t) => hh.call(e, t),
  Ce = Array.isArray,
  Tl = (e) => Lo(e) === '[object Map]',
  rd = (e) => Lo(e) === '[object Set]',
  Ve = (e) => typeof e == 'function',
  Qe = (e) => typeof e == 'string',
  jn = (e) => typeof e == 'symbol',
  Ge = (e) => e !== null && typeof e == 'object',
  sd = (e) => (Ge(e) || Ve(e)) && Ve(e.then) && Ve(e.catch),
  ud = Object.prototype.toString,
  Lo = (e) => ud.call(e),
  gh = (e) => Lo(e).slice(8, -1),
  cd = (e) => Lo(e) === '[object Object]',
  Vr = (e) => Qe(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  la = Cr(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
  ),
  Ro = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  yh = /-(\w)/g,
  It = Ro((e) => e.replace(yh, (t, n) => (n ? n.toUpperCase() : ''))),
  bh = /\B([A-Z])/g,
  zn = Ro((e) => e.replace(bh, '-$1').toLowerCase()),
  En = Ro((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  ii = Ro((e) => (e ? `on${En(e)}` : '')),
  Dn = (e, t) => !Object.is(e, t),
  to = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t)
  },
  dd = (e, t, n, l = !1) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, writable: l, value: n })
  },
  Ri = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  },
  ph = (e) => {
    const t = Qe(e) ? Number(e) : NaN
    return isNaN(t) ? e : t
  }
let Gs
const Fo = () =>
  Gs ||
  (Gs =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {})
function Er(e) {
  if (Ce(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const l = e[n],
        a = Qe(l) ? Ch(l) : Er(l)
      if (a) for (const o in a) t[o] = a[o]
    }
    return t
  } else if (Qe(e) || Ge(e)) return e
}
const Sh = /;(?![^(]*\))/g,
  _h = /:([^]+)/,
  wh = /\/\*[^]*?\*\//g
function Ch(e) {
  const t = {}
  return (
    e
      .replace(wh, '')
      .split(Sh)
      .forEach((n) => {
        if (n) {
          const l = n.split(_h)
          l.length > 1 && (t[l[0].trim()] = l[1].trim())
        }
      }),
    t
  )
}
function Pr(e) {
  let t = ''
  if (Qe(e)) t = e
  else if (Ce(e))
    for (let n = 0; n < e.length; n++) {
      const l = Pr(e[n])
      l && (t += l + ' ')
    }
  else if (Ge(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
const kh = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  xh = Cr(kh)
function fd(e) {
  return !!e || e === ''
}
const vd = (e) => !!(e && e.__v_isRef === !0),
  zt = (e) =>
    Qe(e)
      ? e
      : e == null
        ? ''
        : Ce(e) || (Ge(e) && (e.toString === ud || !Ve(e.toString)))
          ? vd(e)
            ? zt(e.value)
            : JSON.stringify(e, md, 2)
          : String(e),
  md = (e, t) =>
    vd(t)
      ? md(e, t.value)
      : Tl(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [l, a], o) => ((n[ri(l, o) + ' =>'] = a), n),
              {},
            ),
          }
        : rd(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => ri(n)) }
          : jn(t)
            ? ri(t)
            : Ge(t) && !Ce(t) && !cd(t)
              ? String(t)
              : t,
  ri = (e, t = '') => {
    var n
    return jn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  }
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let wt
class hd {
  constructor(t = !1) {
    ;(this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = wt),
      !t && wt && (this.index = (wt.scopes || (wt.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  pause() {
    if (this._active) {
      this._isPaused = !0
      let t, n
      if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause()
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause()
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1
      let t, n
      if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume()
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume()
    }
  }
  run(t) {
    if (this._active) {
      const n = wt
      try {
        return (wt = this), t()
      } finally {
        wt = n
      }
    }
  }
  on() {
    wt = this
  }
  off() {
    wt = this.parent
  }
  stop(t) {
    if (this._active) {
      this._active = !1
      let n, l
      for (n = 0, l = this.effects.length; n < l; n++) this.effects[n].stop()
      for (this.effects.length = 0, n = 0, l = this.cleanups.length; n < l; n++) this.cleanups[n]()
      if (((this.cleanups.length = 0), this.scopes)) {
        for (n = 0, l = this.scopes.length; n < l; n++) this.scopes[n].stop(!0)
        this.scopes.length = 0
      }
      if (!this.detached && this.parent && !t) {
        const a = this.parent.scopes.pop()
        a && a !== this && ((this.parent.scopes[this.index] = a), (a.index = this.index))
      }
      this.parent = void 0
    }
  }
}
function Ta(e) {
  return new hd(e)
}
function gd() {
  return wt
}
function bt(e, t = !1) {
  wt && wt.cleanups.push(e)
}
let Ue
const si = new WeakSet()
class yd {
  constructor(t) {
    ;(this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      wt && wt.active && wt.effects.push(this)
  }
  pause() {
    this.flags |= 64
  }
  resume() {
    this.flags & 64 && ((this.flags &= -65), si.has(this) && (si.delete(this), this.trigger()))
  }
  notify() {
    ;(this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || pd(this)
  }
  run() {
    if (!(this.flags & 1)) return this.fn()
    ;(this.flags |= 2), Ys(this), Sd(this)
    const t = Ue,
      n = ln
    ;(Ue = this), (ln = !0)
    try {
      return this.fn()
    } finally {
      _d(this), (Ue = t), (ln = n), (this.flags &= -3)
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Tr(t)
      ;(this.deps = this.depsTail = void 0),
        Ys(this),
        this.onStop && this.onStop(),
        (this.flags &= -2)
    }
  }
  trigger() {
    this.flags & 64 ? si.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
  }
  runIfDirty() {
    Fi(this) && this.run()
  }
  get dirty() {
    return Fi(this)
  }
}
let bd = 0,
  aa,
  oa
function pd(e, t = !1) {
  if (((e.flags |= 8), t)) {
    ;(e.next = oa), (oa = e)
    return
  }
  ;(e.next = aa), (aa = e)
}
function Ar() {
  bd++
}
function Ir() {
  if (--bd > 0) return
  if (oa) {
    let t = oa
    for (oa = void 0; t; ) {
      const n = t.next
      ;(t.next = void 0), (t.flags &= -9), (t = n)
    }
  }
  let e
  for (; aa; ) {
    let t = aa
    for (aa = void 0; t; ) {
      const n = t.next
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger()
        } catch (l) {
          e || (e = l)
        }
      t = n
    }
  }
  if (e) throw e
}
function Sd(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1), (t.prevActiveLink = t.dep.activeLink), (t.dep.activeLink = t)
}
function _d(e) {
  let t,
    n = e.depsTail,
    l = n
  for (; l; ) {
    const a = l.prevDep
    l.version === -1 ? (l === n && (n = a), Tr(l), Vh(l)) : (t = l),
      (l.dep.activeLink = l.prevActiveLink),
      (l.prevActiveLink = void 0),
      (l = a)
  }
  ;(e.deps = t), (e.depsTail = n)
}
function Fi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (wd(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0
  return !!e._dirty
}
function wd(e) {
  if ((e.flags & 4 && !(e.flags & 16)) || ((e.flags &= -17), e.globalVersion === ma)) return
  e.globalVersion = ma
  const t = e.dep
  if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !Fi(e))) {
    e.flags &= -3
    return
  }
  const n = Ue,
    l = ln
  ;(Ue = e), (ln = !0)
  try {
    Sd(e)
    const a = e.fn(e._value)
    ;(t.version === 0 || Dn(a, e._value)) && ((e._value = a), t.version++)
  } catch (a) {
    throw (t.version++, a)
  } finally {
    ;(Ue = n), (ln = l), _d(e), (e.flags &= -3)
  }
}
function Tr(e, t = !1) {
  const { dep: n, prevSub: l, nextSub: a } = e
  if (
    (l && ((l.nextSub = a), (e.prevSub = void 0)),
    a && ((a.prevSub = l), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = l), !l && n.computed))
  ) {
    n.computed.flags &= -5
    for (let o = n.computed.deps; o; o = o.nextDep) Tr(o, !0)
  }
  !t && !--n.sc && n.map && n.map.delete(n.key)
}
function Vh(e) {
  const { prevDep: t, nextDep: n } = e
  t && ((t.nextDep = n), (e.prevDep = void 0)), n && ((n.prevDep = t), (e.nextDep = void 0))
}
let ln = !0
const Cd = []
function Wn() {
  Cd.push(ln), (ln = !1)
}
function Un() {
  const e = Cd.pop()
  ln = e === void 0 ? !0 : e
}
function Ys(e) {
  const { cleanup: t } = e
  if (((e.cleanup = void 0), t)) {
    const n = Ue
    Ue = void 0
    try {
      t()
    } finally {
      Ue = n
    }
  }
}
let ma = 0
class Eh {
  constructor(t, n) {
    ;(this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0)
  }
}
class Or {
  constructor(t) {
    ;(this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0)
  }
  track(t) {
    if (!Ue || !ln || Ue === this.computed) return
    let n = this.activeLink
    if (n === void 0 || n.sub !== Ue)
      (n = this.activeLink = new Eh(Ue, this)),
        Ue.deps
          ? ((n.prevDep = Ue.depsTail), (Ue.depsTail.nextDep = n), (Ue.depsTail = n))
          : (Ue.deps = Ue.depsTail = n),
        kd(n)
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const l = n.nextDep
      ;(l.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = l),
        (n.prevDep = Ue.depsTail),
        (n.nextDep = void 0),
        (Ue.depsTail.nextDep = n),
        (Ue.depsTail = n),
        Ue.deps === n && (Ue.deps = l)
    }
    return n
  }
  trigger(t) {
    this.version++, ma++, this.notify(t)
  }
  notify(t) {
    Ar()
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify()
    } finally {
      Ir()
    }
  }
}
function kd(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed
    if (t && !e.dep.subs) {
      t.flags |= 20
      for (let l = t.deps; l; l = l.nextDep) kd(l)
    }
    const n = e.dep.subs
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e)
  }
}
const so = new WeakMap(),
  al = Symbol(''),
  Mi = Symbol(''),
  ha = Symbol('')
function vt(e, t, n) {
  if (ln && Ue) {
    let l = so.get(e)
    l || so.set(e, (l = new Map()))
    let a = l.get(n)
    a || (l.set(n, (a = new Or())), (a.map = l), (a.key = n)), a.track()
  }
}
function wn(e, t, n, l, a, o) {
  const i = so.get(e)
  if (!i) {
    ma++
    return
  }
  const r = (s) => {
    s && s.trigger()
  }
  if ((Ar(), t === 'clear')) i.forEach(r)
  else {
    const s = Ce(e),
      c = s && Vr(n)
    if (s && n === 'length') {
      const u = Number(l)
      i.forEach((d, v) => {
        ;(v === 'length' || v === ha || (!jn(v) && v >= u)) && r(d)
      })
    } else
      switch (((n !== void 0 || i.has(void 0)) && r(i.get(n)), c && r(i.get(ha)), t)) {
        case 'add':
          s ? c && r(i.get('length')) : (r(i.get(al)), Tl(e) && r(i.get(Mi)))
          break
        case 'delete':
          s || (r(i.get(al)), Tl(e) && r(i.get(Mi)))
          break
        case 'set':
          Tl(e) && r(i.get(al))
          break
      }
  }
  Ir()
}
function Ph(e, t) {
  const n = so.get(e)
  return n && n.get(t)
}
function yl(e) {
  const t = we(e)
  return t === e ? t : (vt(t, 'iterate', ha), Gt(e) ? t : t.map(mt))
}
function Mo(e) {
  return vt((e = we(e)), 'iterate', ha), e
}
const Ah = {
  __proto__: null,
  [Symbol.iterator]() {
    return ui(this, Symbol.iterator, mt)
  },
  concat(...e) {
    return yl(this).concat(...e.map((t) => (Ce(t) ? yl(t) : t)))
  },
  entries() {
    return ui(this, 'entries', (e) => ((e[1] = mt(e[1])), e))
  },
  every(e, t) {
    return pn(this, 'every', e, t, void 0, arguments)
  },
  filter(e, t) {
    return pn(this, 'filter', e, t, (n) => n.map(mt), arguments)
  },
  find(e, t) {
    return pn(this, 'find', e, t, mt, arguments)
  },
  findIndex(e, t) {
    return pn(this, 'findIndex', e, t, void 0, arguments)
  },
  findLast(e, t) {
    return pn(this, 'findLast', e, t, mt, arguments)
  },
  findLastIndex(e, t) {
    return pn(this, 'findLastIndex', e, t, void 0, arguments)
  },
  forEach(e, t) {
    return pn(this, 'forEach', e, t, void 0, arguments)
  },
  includes(...e) {
    return ci(this, 'includes', e)
  },
  indexOf(...e) {
    return ci(this, 'indexOf', e)
  },
  join(e) {
    return yl(this).join(e)
  },
  lastIndexOf(...e) {
    return ci(this, 'lastIndexOf', e)
  },
  map(e, t) {
    return pn(this, 'map', e, t, void 0, arguments)
  },
  pop() {
    return Ql(this, 'pop')
  },
  push(...e) {
    return Ql(this, 'push', e)
  },
  reduce(e, ...t) {
    return qs(this, 'reduce', e, t)
  },
  reduceRight(e, ...t) {
    return qs(this, 'reduceRight', e, t)
  },
  shift() {
    return Ql(this, 'shift')
  },
  some(e, t) {
    return pn(this, 'some', e, t, void 0, arguments)
  },
  splice(...e) {
    return Ql(this, 'splice', e)
  },
  toReversed() {
    return yl(this).toReversed()
  },
  toSorted(e) {
    return yl(this).toSorted(e)
  },
  toSpliced(...e) {
    return yl(this).toSpliced(...e)
  },
  unshift(...e) {
    return Ql(this, 'unshift', e)
  },
  values() {
    return ui(this, 'values', mt)
  },
}
function ui(e, t, n) {
  const l = Mo(e),
    a = l[t]()
  return (
    l !== e &&
      !Gt(e) &&
      ((a._next = a.next),
      (a.next = () => {
        const o = a._next()
        return o.value && (o.value = n(o.value)), o
      })),
    a
  )
}
const Ih = Array.prototype
function pn(e, t, n, l, a, o) {
  const i = Mo(e),
    r = i !== e && !Gt(e),
    s = i[t]
  if (s !== Ih[t]) {
    const d = s.apply(e, o)
    return r ? mt(d) : d
  }
  let c = n
  i !== e &&
    (r
      ? (c = function (d, v) {
          return n.call(this, mt(d), v, e)
        })
      : n.length > 2 &&
        (c = function (d, v) {
          return n.call(this, d, v, e)
        }))
  const u = s.call(i, c, l)
  return r && a ? a(u) : u
}
function qs(e, t, n, l) {
  const a = Mo(e)
  let o = n
  return (
    a !== e &&
      (Gt(e)
        ? n.length > 3 &&
          (o = function (i, r, s) {
            return n.call(this, i, r, s, e)
          })
        : (o = function (i, r, s) {
            return n.call(this, i, mt(r), s, e)
          })),
    a[t](o, ...l)
  )
}
function ci(e, t, n) {
  const l = we(e)
  vt(l, 'iterate', ha)
  const a = l[t](...n)
  return (a === -1 || a === !1) && Rr(n[0]) ? ((n[0] = we(n[0])), l[t](...n)) : a
}
function Ql(e, t, n = []) {
  Wn(), Ar()
  const l = we(e)[t].apply(e, n)
  return Ir(), Un(), l
}
const Th = Cr('__proto__,__v_isRef,__isVue'),
  xd = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(jn),
  )
function Oh(e) {
  jn(e) || (e = String(e))
  const t = we(this)
  return vt(t, 'has', e), t.hasOwnProperty(e)
}
class Vd {
  constructor(t = !1, n = !1) {
    ;(this._isReadonly = t), (this._isShallow = n)
  }
  get(t, n, l) {
    if (n === '__v_skip') return t.__v_skip
    const a = this._isReadonly,
      o = this._isShallow
    if (n === '__v_isReactive') return !a
    if (n === '__v_isReadonly') return a
    if (n === '__v_isShallow') return o
    if (n === '__v_raw')
      return l === (a ? (o ? jh : Id) : o ? Ad : Pd).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(l)
        ? t
        : void 0
    const i = Ce(t)
    if (!a) {
      let s
      if (i && (s = Ah[n])) return s
      if (n === 'hasOwnProperty') return Oh
    }
    const r = Reflect.get(t, n, Ne(t) ? t : l)
    return (jn(n) ? xd.has(n) : Th(n)) || (a || vt(t, 'get', n), o)
      ? r
      : Ne(r)
        ? i && Vr(n)
          ? r
          : r.value
        : Ge(r)
          ? a
            ? Oa(r)
            : rt(r)
          : r
  }
}
class Ed extends Vd {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, l, a) {
    let o = t[n]
    if (!this._isShallow) {
      const s = ul(o)
      if ((!Gt(l) && !ul(l) && ((o = we(o)), (l = we(l))), !Ce(t) && Ne(o) && !Ne(l)))
        return s ? !1 : ((o.value = l), !0)
    }
    const i = Ce(t) && Vr(n) ? Number(n) < t.length : Fe(t, n),
      r = Reflect.set(t, n, l, Ne(t) ? t : a)
    return t === we(a) && (i ? Dn(l, o) && wn(t, 'set', n, l) : wn(t, 'add', n, l)), r
  }
  deleteProperty(t, n) {
    const l = Fe(t, n)
    t[n]
    const a = Reflect.deleteProperty(t, n)
    return a && l && wn(t, 'delete', n, void 0), a
  }
  has(t, n) {
    const l = Reflect.has(t, n)
    return (!jn(n) || !xd.has(n)) && vt(t, 'has', n), l
  }
  ownKeys(t) {
    return vt(t, 'iterate', Ce(t) ? 'length' : al), Reflect.ownKeys(t)
  }
}
class Bh extends Vd {
  constructor(t = !1) {
    super(!0, t)
  }
  set(t, n) {
    return !0
  }
  deleteProperty(t, n) {
    return !0
  }
}
const Lh = new Ed(),
  Rh = new Bh(),
  Fh = new Ed(!0)
const Di = (e) => e,
  Wa = (e) => Reflect.getPrototypeOf(e)
function Mh(e, t, n) {
  return function (...l) {
    const a = this.__v_raw,
      o = we(a),
      i = Tl(o),
      r = e === 'entries' || (e === Symbol.iterator && i),
      s = e === 'keys' && i,
      c = a[e](...l),
      u = n ? Di : t ? $i : mt
    return (
      !t && vt(o, 'iterate', s ? Mi : al),
      {
        next() {
          const { value: d, done: v } = c.next()
          return v ? { value: d, done: v } : { value: r ? [u(d[0]), u(d[1])] : u(d), done: v }
        },
        [Symbol.iterator]() {
          return this
        },
      }
    )
  }
}
function Ua(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this
  }
}
function Dh(e, t) {
  const n = {
    get(a) {
      const o = this.__v_raw,
        i = we(o),
        r = we(a)
      e || (Dn(a, r) && vt(i, 'get', a), vt(i, 'get', r))
      const { has: s } = Wa(i),
        c = t ? Di : e ? $i : mt
      if (s.call(i, a)) return c(o.get(a))
      if (s.call(i, r)) return c(o.get(r))
      o !== i && o.get(a)
    },
    get size() {
      const a = this.__v_raw
      return !e && vt(we(a), 'iterate', al), Reflect.get(a, 'size', a)
    },
    has(a) {
      const o = this.__v_raw,
        i = we(o),
        r = we(a)
      return (
        e || (Dn(a, r) && vt(i, 'has', a), vt(i, 'has', r)),
        a === r ? o.has(a) : o.has(a) || o.has(r)
      )
    },
    forEach(a, o) {
      const i = this,
        r = i.__v_raw,
        s = we(r),
        c = t ? Di : e ? $i : mt
      return !e && vt(s, 'iterate', al), r.forEach((u, d) => a.call(o, c(u), c(d), i))
    },
  }
  return (
    lt(
      n,
      e
        ? { add: Ua('add'), set: Ua('set'), delete: Ua('delete'), clear: Ua('clear') }
        : {
            add(a) {
              !t && !Gt(a) && !ul(a) && (a = we(a))
              const o = we(this)
              return Wa(o).has.call(o, a) || (o.add(a), wn(o, 'add', a, a)), this
            },
            set(a, o) {
              !t && !Gt(o) && !ul(o) && (o = we(o))
              const i = we(this),
                { has: r, get: s } = Wa(i)
              let c = r.call(i, a)
              c || ((a = we(a)), (c = r.call(i, a)))
              const u = s.call(i, a)
              return i.set(a, o), c ? Dn(o, u) && wn(i, 'set', a, o) : wn(i, 'add', a, o), this
            },
            delete(a) {
              const o = we(this),
                { has: i, get: r } = Wa(o)
              let s = i.call(o, a)
              s || ((a = we(a)), (s = i.call(o, a))), r && r.call(o, a)
              const c = o.delete(a)
              return s && wn(o, 'delete', a, void 0), c
            },
            clear() {
              const a = we(this),
                o = a.size !== 0,
                i = a.clear()
              return o && wn(a, 'clear', void 0, void 0), i
            },
          },
    ),
    ['keys', 'values', 'entries', Symbol.iterator].forEach((a) => {
      n[a] = Mh(a, e, t)
    }),
    n
  )
}
function Br(e, t) {
  const n = Dh(e, t)
  return (l, a, o) =>
    a === '__v_isReactive'
      ? !e
      : a === '__v_isReadonly'
        ? e
        : a === '__v_raw'
          ? l
          : Reflect.get(Fe(n, a) && a in l ? n : l, a, o)
}
const $h = { get: Br(!1, !1) },
  Nh = { get: Br(!1, !0) },
  Hh = { get: Br(!0, !1) }
const Pd = new WeakMap(),
  Ad = new WeakMap(),
  Id = new WeakMap(),
  jh = new WeakMap()
function zh(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function Wh(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : zh(gh(e))
}
function rt(e) {
  return ul(e) ? e : Lr(e, !1, Lh, $h, Pd)
}
function Td(e) {
  return Lr(e, !1, Fh, Nh, Ad)
}
function Oa(e) {
  return Lr(e, !0, Rh, Hh, Id)
}
function Lr(e, t, n, l, a) {
  if (!Ge(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const o = a.get(e)
  if (o) return o
  const i = Wh(e)
  if (i === 0) return e
  const r = new Proxy(e, i === 2 ? l : n)
  return a.set(e, r), r
}
function $n(e) {
  return ul(e) ? $n(e.__v_raw) : !!(e && e.__v_isReactive)
}
function ul(e) {
  return !!(e && e.__v_isReadonly)
}
function Gt(e) {
  return !!(e && e.__v_isShallow)
}
function Rr(e) {
  return e ? !!e.__v_raw : !1
}
function we(e) {
  const t = e && e.__v_raw
  return t ? we(t) : e
}
function Do(e) {
  return !Fe(e, '__v_skip') && Object.isExtensible(e) && dd(e, '__v_skip', !0), e
}
const mt = (e) => (Ge(e) ? rt(e) : e),
  $i = (e) => (Ge(e) ? Oa(e) : e)
function Ne(e) {
  return e ? e.__v_isRef === !0 : !1
}
function H(e) {
  return Od(e, !1)
}
function ue(e) {
  return Od(e, !0)
}
function Od(e, t) {
  return Ne(e) ? e : new Uh(e, t)
}
class Uh {
  constructor(t, n) {
    ;(this.dep = new Or()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : we(t)),
      (this._value = n ? t : mt(t)),
      (this.__v_isShallow = n)
  }
  get value() {
    return this.dep.track(), this._value
  }
  set value(t) {
    const n = this._rawValue,
      l = this.__v_isShallow || Gt(t) || ul(t)
    ;(t = l ? t : we(t)),
      Dn(t, n) && ((this._rawValue = t), (this._value = l ? t : mt(t)), this.dep.trigger())
  }
}
function nt(e) {
  return Ne(e) ? e.value : e
}
const Kh = {
  get: (e, t, n) => (t === '__v_raw' ? e : nt(Reflect.get(e, t, n))),
  set: (e, t, n, l) => {
    const a = e[t]
    return Ne(a) && !Ne(n) ? ((a.value = n), !0) : Reflect.set(e, t, n, l)
  },
}
function Bd(e) {
  return $n(e) ? e : new Proxy(e, Kh)
}
function Ba(e) {
  const t = Ce(e) ? new Array(e.length) : {}
  for (const n in e) t[n] = Ld(e, n)
  return t
}
class Gh {
  constructor(t, n, l) {
    ;(this._object = t),
      (this._key = n),
      (this._defaultValue = l),
      (this.__v_isRef = !0),
      (this._value = void 0)
  }
  get value() {
    const t = this._object[this._key]
    return (this._value = t === void 0 ? this._defaultValue : t)
  }
  set value(t) {
    this._object[this._key] = t
  }
  get dep() {
    return Ph(we(this._object), this._key)
  }
}
class Yh {
  constructor(t) {
    ;(this._getter = t), (this.__v_isRef = !0), (this.__v_isReadonly = !0), (this._value = void 0)
  }
  get value() {
    return (this._value = this._getter())
  }
}
function ae(e, t, n) {
  return Ne(e) ? e : Ve(e) ? new Yh(e) : Ge(e) && arguments.length > 1 ? Ld(e, t, n) : H(e)
}
function Ld(e, t, n) {
  const l = e[t]
  return Ne(l) ? l : new Gh(e, t, n)
}
class qh {
  constructor(t, n, l) {
    ;(this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new Or(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = ma - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = l)
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && Ue !== this)) return pd(this, !0), !0
  }
  get value() {
    const t = this.dep.track()
    return wd(this), t && (t.version = this.dep.version), this._value
  }
  set value(t) {
    this.setter && this.setter(t)
  }
}
function Xh(e, t, n = !1) {
  let l, a
  return Ve(e) ? (l = e) : ((l = e.get), (a = e.set)), new qh(l, a, n)
}
const Ka = {},
  uo = new WeakMap()
let tl
function Qh(e, t = !1, n = tl) {
  if (n) {
    let l = uo.get(n)
    l || uo.set(n, (l = [])), l.push(e)
  }
}
function Zh(e, t, n = He) {
  const { immediate: l, deep: a, once: o, scheduler: i, augmentJob: r, call: s } = n,
    c = (k) => (a ? k : Gt(k) || a === !1 || a === 0 ? Cn(k, 1) : Cn(k))
  let u,
    d,
    v,
    m,
    h = !1,
    g = !1
  if (
    (Ne(e)
      ? ((d = () => e.value), (h = Gt(e)))
      : $n(e)
        ? ((d = () => c(e)), (h = !0))
        : Ce(e)
          ? ((g = !0),
            (h = e.some((k) => $n(k) || Gt(k))),
            (d = () =>
              e.map((k) => {
                if (Ne(k)) return k.value
                if ($n(k)) return c(k)
                if (Ve(k)) return s ? s(k, 2) : k()
              })))
          : Ve(e)
            ? t
              ? (d = s ? () => s(e, 2) : e)
              : (d = () => {
                  if (v) {
                    Wn()
                    try {
                      v()
                    } finally {
                      Un()
                    }
                  }
                  const k = tl
                  tl = u
                  try {
                    return s ? s(e, 3, [m]) : e(m)
                  } finally {
                    tl = k
                  }
                })
            : (d = hn),
    t && a)
  ) {
    const k = d,
      I = a === !0 ? 1 / 0 : a
    d = () => Cn(k(), I)
  }
  const y = gd(),
    p = () => {
      u.stop(), y && y.active && xr(y.effects, u)
    }
  if (o && t) {
    const k = t
    t = (...I) => {
      k(...I), p()
    }
  }
  let _ = g ? new Array(e.length).fill(Ka) : Ka
  const C = (k) => {
    if (!(!(u.flags & 1) || (!u.dirty && !k)))
      if (t) {
        const I = u.run()
        if (a || h || (g ? I.some((P, A) => Dn(P, _[A])) : Dn(I, _))) {
          v && v()
          const P = tl
          tl = u
          try {
            const A = [I, _ === Ka ? void 0 : g && _[0] === Ka ? [] : _, m]
            s ? s(t, 3, A) : t(...A), (_ = I)
          } finally {
            tl = P
          }
        }
      } else u.run()
  }
  return (
    r && r(C),
    (u = new yd(d)),
    (u.scheduler = i ? () => i(C, !1) : C),
    (m = (k) => Qh(k, !1, u)),
    (v = u.onStop =
      () => {
        const k = uo.get(u)
        if (k) {
          if (s) s(k, 4)
          else for (const I of k) I()
          uo.delete(u)
        }
      }),
    t ? (l ? C(!0) : (_ = u.run())) : i ? i(C.bind(null, !0), !0) : u.run(),
    (p.pause = u.pause.bind(u)),
    (p.resume = u.resume.bind(u)),
    (p.stop = p),
    p
  )
}
function Cn(e, t = 1 / 0, n) {
  if (t <= 0 || !Ge(e) || e.__v_skip || ((n = n || new Set()), n.has(e))) return e
  if ((n.add(e), t--, Ne(e))) Cn(e.value, t, n)
  else if (Ce(e)) for (let l = 0; l < e.length; l++) Cn(e[l], t, n)
  else if (rd(e) || Tl(e))
    e.forEach((l) => {
      Cn(l, t, n)
    })
  else if (cd(e)) {
    for (const l in e) Cn(e[l], t, n)
    for (const l of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, l) && Cn(e[l], t, n)
  }
  return e
}
/**
 * @vue/runtime-core v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function La(e, t, n, l) {
  try {
    return l ? e(...l) : e()
  } catch (a) {
    $o(a, t, n)
  }
}
function an(e, t, n, l) {
  if (Ve(e)) {
    const a = La(e, t, n, l)
    return (
      a &&
        sd(a) &&
        a.catch((o) => {
          $o(o, t, n)
        }),
      a
    )
  }
  if (Ce(e)) {
    const a = []
    for (let o = 0; o < e.length; o++) a.push(an(e[o], t, n, l))
    return a
  }
}
function $o(e, t, n, l = !0) {
  const a = t ? t.vnode : null,
    { errorHandler: o, throwUnhandledErrorInProduction: i } = (t && t.appContext.config) || He
  if (t) {
    let r = t.parent
    const s = t.proxy,
      c = `https://vuejs.org/error-reference/#runtime-${n}`
    for (; r; ) {
      const u = r.ec
      if (u) {
        for (let d = 0; d < u.length; d++) if (u[d](e, s, c) === !1) return
      }
      r = r.parent
    }
    if (o) {
      Wn(), La(o, null, 10, [e, s, c]), Un()
      return
    }
  }
  Jh(e, n, a, l, i)
}
function Jh(e, t, n, l = !0, a = !1) {
  if (a) throw e
  console.error(e)
}
const Ct = []
let vn = -1
const Ol = []
let Ln = null,
  Cl = 0
const Rd = Promise.resolve()
let co = null
function Ke(e) {
  const t = co || Rd
  return e ? t.then(this ? e.bind(this) : e) : t
}
function eg(e) {
  let t = vn + 1,
    n = Ct.length
  for (; t < n; ) {
    const l = (t + n) >>> 1,
      a = Ct[l],
      o = ga(a)
    o < e || (o === e && a.flags & 2) ? (t = l + 1) : (n = l)
  }
  return t
}
function Fr(e) {
  if (!(e.flags & 1)) {
    const t = ga(e),
      n = Ct[Ct.length - 1]
    !n || (!(e.flags & 2) && t >= ga(n)) ? Ct.push(e) : Ct.splice(eg(t), 0, e), (e.flags |= 1), Fd()
  }
}
function Fd() {
  co || (co = Rd.then(Dd))
}
function tg(e) {
  Ce(e)
    ? Ol.push(...e)
    : Ln && e.id === -1
      ? Ln.splice(Cl + 1, 0, e)
      : e.flags & 1 || (Ol.push(e), (e.flags |= 1)),
    Fd()
}
function Xs(e, t, n = vn + 1) {
  for (; n < Ct.length; n++) {
    const l = Ct[n]
    if (l && l.flags & 2) {
      if (e && l.id !== e.uid) continue
      Ct.splice(n, 1), n--, l.flags & 4 && (l.flags &= -2), l(), l.flags & 4 || (l.flags &= -2)
    }
  }
}
function Md(e) {
  if (Ol.length) {
    const t = [...new Set(Ol)].sort((n, l) => ga(n) - ga(l))
    if (((Ol.length = 0), Ln)) {
      Ln.push(...t)
      return
    }
    for (Ln = t, Cl = 0; Cl < Ln.length; Cl++) {
      const n = Ln[Cl]
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2)
    }
    ;(Ln = null), (Cl = 0)
  }
}
const ga = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id)
function Dd(e) {
  try {
    for (vn = 0; vn < Ct.length; vn++) {
      const t = Ct[vn]
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2), La(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2))
    }
  } finally {
    for (; vn < Ct.length; vn++) {
      const t = Ct[vn]
      t && (t.flags &= -2)
    }
    ;(vn = -1), (Ct.length = 0), Md(), (co = null), (Ct.length || Ol.length) && Dd()
  }
}
let xt = null,
  $d = null
function fo(e) {
  const t = xt
  return (xt = e), ($d = (e && e.type.__scopeId) || null), t
}
function ce(e, t = xt, n) {
  if (!t || e._n) return e
  const l = (...a) => {
    l._d && uu(-1)
    const o = fo(t)
    let i
    try {
      i = e(...a)
    } finally {
      fo(o), l._d && uu(1)
    }
    return i
  }
  return (l._n = !0), (l._c = !0), (l._d = !0), l
}
function Ye(e, t) {
  if (xt === null) return e
  const n = zo(xt),
    l = e.dirs || (e.dirs = [])
  for (let a = 0; a < t.length; a++) {
    let [o, i, r, s = He] = t[a]
    o &&
      (Ve(o) && (o = { mounted: o, updated: o }),
      o.deep && Cn(i),
      l.push({ dir: o, instance: n, value: i, oldValue: void 0, arg: r, modifiers: s }))
  }
  return e
}
function Xn(e, t, n, l) {
  const a = e.dirs,
    o = t && t.dirs
  for (let i = 0; i < a.length; i++) {
    const r = a[i]
    o && (r.oldValue = o[i].value)
    let s = r.dir[l]
    s && (Wn(), an(s, n, 8, [e.el, r, e, t]), Un())
  }
}
const Nd = Symbol('_vte'),
  Hd = (e) => e.__isTeleport,
  ia = (e) => e && (e.disabled || e.disabled === ''),
  Qs = (e) => e && (e.defer || e.defer === ''),
  Zs = (e) => typeof SVGElement < 'u' && e instanceof SVGElement,
  Js = (e) => typeof MathMLElement == 'function' && e instanceof MathMLElement,
  Ni = (e, t) => {
    const n = e && e.to
    return Qe(n) ? (t ? t(n) : null) : n
  },
  jd = {
    name: 'Teleport',
    __isTeleport: !0,
    process(e, t, n, l, a, o, i, r, s, c) {
      const {
          mc: u,
          pc: d,
          pbc: v,
          o: { insert: m, querySelector: h, createText: g, createComment: y },
        } = c,
        p = ia(t.props)
      let { shapeFlag: _, children: C, dynamicChildren: k } = t
      if (e == null) {
        const I = (t.el = g('')),
          P = (t.anchor = g(''))
        m(I, n, l), m(P, n, l)
        const A = (x, O) => {
            _ & 16 && (a && a.isCE && (a.ce._teleportTarget = x), u(C, x, O, a, o, i, r, s))
          },
          V = () => {
            const x = (t.target = Ni(t.props, h)),
              O = zd(x, t, g, m)
            x &&
              (i !== 'svg' && Zs(x) ? (i = 'svg') : i !== 'mathml' && Js(x) && (i = 'mathml'),
              p || (A(x, O), no(t, !1)))
          }
        p && (A(n, P), no(t, !0)),
          Qs(t.props)
            ? _t(() => {
                V(), (t.el.__isMounted = !0)
              }, o)
            : V()
      } else {
        if (Qs(t.props) && !e.el.__isMounted) {
          _t(() => {
            jd.process(e, t, n, l, a, o, i, r, s, c), delete e.el.__isMounted
          }, o)
          return
        }
        ;(t.el = e.el), (t.targetStart = e.targetStart)
        const I = (t.anchor = e.anchor),
          P = (t.target = e.target),
          A = (t.targetAnchor = e.targetAnchor),
          V = ia(e.props),
          x = V ? n : P,
          O = V ? I : A
        if (
          (i === 'svg' || Zs(P) ? (i = 'svg') : (i === 'mathml' || Js(P)) && (i = 'mathml'),
          k
            ? (v(e.dynamicChildren, k, x, a, o, i, r), Ur(e, t, !0))
            : s || d(e, t, x, O, a, o, i, r, !1),
          p)
        )
          V
            ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to)
            : Ga(t, n, I, c, 1)
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const T = (t.target = Ni(t.props, h))
          T && Ga(t, T, null, c, 0)
        } else V && Ga(t, P, A, c, 1)
        no(t, p)
      }
    },
    remove(e, t, n, { um: l, o: { remove: a } }, o) {
      const {
        shapeFlag: i,
        children: r,
        anchor: s,
        targetStart: c,
        targetAnchor: u,
        target: d,
        props: v,
      } = e
      if ((d && (a(c), a(u)), o && a(s), i & 16)) {
        const m = o || !ia(v)
        for (let h = 0; h < r.length; h++) {
          const g = r[h]
          l(g, t, n, m, !!g.dynamicChildren)
        }
      }
    },
    move: Ga,
    hydrate: ng,
  }
function Ga(e, t, n, { o: { insert: l }, m: a }, o = 2) {
  o === 0 && l(e.targetAnchor, t, n)
  const { el: i, anchor: r, shapeFlag: s, children: c, props: u } = e,
    d = o === 2
  if ((d && l(i, t, n), (!d || ia(u)) && s & 16))
    for (let v = 0; v < c.length; v++) a(c[v], t, n, 2)
  d && l(r, t, n)
}
function ng(
  e,
  t,
  n,
  l,
  a,
  o,
  { o: { nextSibling: i, parentNode: r, querySelector: s, insert: c, createText: u } },
  d,
) {
  const v = (t.target = Ni(t.props, s))
  if (v) {
    const m = ia(t.props),
      h = v._lpa || v.firstChild
    if (t.shapeFlag & 16)
      if (m)
        (t.anchor = d(i(e), t, r(e), n, l, a, o)), (t.targetStart = h), (t.targetAnchor = h && i(h))
      else {
        t.anchor = i(e)
        let g = h
        for (; g; ) {
          if (g && g.nodeType === 8) {
            if (g.data === 'teleport start anchor') t.targetStart = g
            else if (g.data === 'teleport anchor') {
              ;(t.targetAnchor = g), (v._lpa = t.targetAnchor && i(t.targetAnchor))
              break
            }
          }
          g = i(g)
        }
        t.targetAnchor || zd(v, t, u, c), d(h && i(h), t, v, n, l, a, o)
      }
    no(t, m)
  }
  return t.anchor && i(t.anchor)
}
const lg = jd
function no(e, t) {
  const n = e.ctx
  if (n && n.ut) {
    let l, a
    for (
      t ? ((l = e.el), (a = e.anchor)) : ((l = e.targetStart), (a = e.targetAnchor));
      l && l !== a;

    )
      l.nodeType === 1 && l.setAttribute('data-v-owner', n.uid), (l = l.nextSibling)
    n.ut()
  }
}
function zd(e, t, n, l) {
  const a = (t.targetStart = n('')),
    o = (t.targetAnchor = n(''))
  return (a[Nd] = o), e && (l(a, e), l(o, e)), o
}
const Rn = Symbol('_leaveCb'),
  Ya = Symbol('_enterCb')
function Wd() {
  const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map() }
  return (
    Vt(() => {
      e.isMounted = !0
    }),
    ut(() => {
      e.isUnmounting = !0
    }),
    e
  )
}
const jt = [Function, Array],
  Ud = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: jt,
    onEnter: jt,
    onAfterEnter: jt,
    onEnterCancelled: jt,
    onBeforeLeave: jt,
    onLeave: jt,
    onAfterLeave: jt,
    onLeaveCancelled: jt,
    onBeforeAppear: jt,
    onAppear: jt,
    onAfterAppear: jt,
    onAppearCancelled: jt,
  },
  Kd = (e) => {
    const t = e.subTree
    return t.component ? Kd(t.component) : t
  },
  ag = {
    name: 'BaseTransition',
    props: Ud,
    setup(e, { slots: t }) {
      const n = Yr(),
        l = Wd()
      return () => {
        const a = t.default && Mr(t.default(), !0)
        if (!a || !a.length) return
        const o = Gd(a),
          i = we(e),
          { mode: r } = i
        if (l.isLeaving) return di(o)
        const s = eu(o)
        if (!s) return di(o)
        let c = ya(s, i, l, n, (d) => (c = d))
        s.type !== kt && cl(s, c)
        let u = n.subTree && eu(n.subTree)
        if (u && u.type !== kt && !nl(s, u) && Kd(n).type !== kt) {
          let d = ya(u, i, l, n)
          if ((cl(u, d), r === 'out-in' && s.type !== kt))
            return (
              (l.isLeaving = !0),
              (d.afterLeave = () => {
                ;(l.isLeaving = !1),
                  n.job.flags & 8 || n.update(),
                  delete d.afterLeave,
                  (u = void 0)
              }),
              di(o)
            )
          r === 'in-out' && s.type !== kt
            ? (d.delayLeave = (v, m, h) => {
                const g = Yd(l, u)
                ;(g[String(u.key)] = u),
                  (v[Rn] = () => {
                    m(), (v[Rn] = void 0), delete c.delayedLeave, (u = void 0)
                  }),
                  (c.delayedLeave = () => {
                    h(), delete c.delayedLeave, (u = void 0)
                  })
              })
            : (u = void 0)
        } else u && (u = void 0)
        return o
      }
    },
  }
function Gd(e) {
  let t = e[0]
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== kt) {
        t = n
        break
      }
  }
  return t
}
const og = ag
function Yd(e, t) {
  const { leavingVNodes: n } = e
  let l = n.get(t.type)
  return l || ((l = Object.create(null)), n.set(t.type, l)), l
}
function ya(e, t, n, l, a) {
  const {
      appear: o,
      mode: i,
      persisted: r = !1,
      onBeforeEnter: s,
      onEnter: c,
      onAfterEnter: u,
      onEnterCancelled: d,
      onBeforeLeave: v,
      onLeave: m,
      onAfterLeave: h,
      onLeaveCancelled: g,
      onBeforeAppear: y,
      onAppear: p,
      onAfterAppear: _,
      onAppearCancelled: C,
    } = t,
    k = String(e.key),
    I = Yd(n, e),
    P = (x, O) => {
      x && an(x, l, 9, O)
    },
    A = (x, O) => {
      const T = O[1]
      P(x, O), Ce(x) ? x.every((E) => E.length <= 1) && T() : x.length <= 1 && T()
    },
    V = {
      mode: i,
      persisted: r,
      beforeEnter(x) {
        let O = s
        if (!n.isMounted)
          if (o) O = y || s
          else return
        x[Rn] && x[Rn](!0)
        const T = I[k]
        T && nl(e, T) && T.el[Rn] && T.el[Rn](), P(O, [x])
      },
      enter(x) {
        let O = c,
          T = u,
          E = d
        if (!n.isMounted)
          if (o) (O = p || c), (T = _ || u), (E = C || d)
          else return
        let R = !1
        const N = (x[Ya] = (q) => {
          R ||
            ((R = !0),
            q ? P(E, [x]) : P(T, [x]),
            V.delayedLeave && V.delayedLeave(),
            (x[Ya] = void 0))
        })
        O ? A(O, [x, N]) : N()
      },
      leave(x, O) {
        const T = String(e.key)
        if ((x[Ya] && x[Ya](!0), n.isUnmounting)) return O()
        P(v, [x])
        let E = !1
        const R = (x[Rn] = (N) => {
          E ||
            ((E = !0), O(), N ? P(g, [x]) : P(h, [x]), (x[Rn] = void 0), I[T] === e && delete I[T])
        })
        ;(I[T] = e), m ? A(m, [x, R]) : R()
      },
      clone(x) {
        const O = ya(x, t, n, l, a)
        return a && a(O), O
      },
    }
  return V
}
function di(e) {
  if (No(e)) return (e = kn(e)), (e.children = null), e
}
function eu(e) {
  if (!No(e)) return Hd(e.type) && e.children ? Gd(e.children) : e
  const { shapeFlag: t, children: n } = e
  if (n) {
    if (t & 16) return n[0]
    if (t & 32 && Ve(n.default)) return n.default()
  }
}
function cl(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), cl(e.component.subTree, t))
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t)
}
function Mr(e, t = !1, n) {
  let l = [],
    a = 0
  for (let o = 0; o < e.length; o++) {
    let i = e[o]
    const r = n == null ? i.key : String(n) + String(i.key != null ? i.key : o)
    i.type === ke
      ? (i.patchFlag & 128 && a++, (l = l.concat(Mr(i.children, t, r))))
      : (t || i.type !== kt) && l.push(r != null ? kn(i, { key: r }) : i)
  }
  if (a > 1) for (let o = 0; o < l.length; o++) l[o].patchFlag = -2
  return l
}
/*! #__NO_SIDE_EFFECTS__ */ function at(e, t) {
  return Ve(e) ? lt({ name: e.name }, t, { setup: e }) : e
}
function qd(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + '-', 0, 0]
}
function vo(e, t, n, l, a = !1) {
  if (Ce(e)) {
    e.forEach((h, g) => vo(h, t && (Ce(t) ? t[g] : t), n, l, a))
    return
  }
  if (ra(l) && !a) {
    l.shapeFlag & 512 &&
      l.type.__asyncResolved &&
      l.component.subTree.component &&
      vo(e, t, n, l.component.subTree)
    return
  }
  const o = l.shapeFlag & 4 ? zo(l.component) : l.el,
    i = a ? null : o,
    { i: r, r: s } = e,
    c = t && t.r,
    u = r.refs === He ? (r.refs = {}) : r.refs,
    d = r.setupState,
    v = we(d),
    m = d === He ? () => !1 : (h) => Fe(v, h)
  if (
    (c != null &&
      c !== s &&
      (Qe(c) ? ((u[c] = null), m(c) && (d[c] = null)) : Ne(c) && (c.value = null)),
    Ve(s))
  )
    La(s, r, 12, [i, u])
  else {
    const h = Qe(s),
      g = Ne(s)
    if (h || g) {
      const y = () => {
        if (e.f) {
          const p = h ? (m(s) ? d[s] : u[s]) : s.value
          a
            ? Ce(p) && xr(p, o)
            : Ce(p)
              ? p.includes(o) || p.push(o)
              : h
                ? ((u[s] = [o]), m(s) && (d[s] = u[s]))
                : ((s.value = [o]), e.k && (u[e.k] = s.value))
        } else h ? ((u[s] = i), m(s) && (d[s] = i)) : g && ((s.value = i), e.k && (u[e.k] = i))
      }
      i ? ((y.id = -1), _t(y, n)) : y()
    }
  }
}
Fo().requestIdleCallback
Fo().cancelIdleCallback
const ra = (e) => !!e.type.__asyncLoader,
  No = (e) => e.type.__isKeepAlive
function Xd(e, t) {
  Qd(e, 'a', t)
}
function Dr(e, t) {
  Qd(e, 'da', t)
}
function Qd(e, t, n = st) {
  const l =
    e.__wdc ||
    (e.__wdc = () => {
      let a = n
      for (; a; ) {
        if (a.isDeactivated) return
        a = a.parent
      }
      return e()
    })
  if ((Ho(t, l, n), n)) {
    let a = n.parent
    for (; a && a.parent; ) No(a.parent.vnode) && ig(l, t, n, a), (a = a.parent)
  }
}
function ig(e, t, n, l) {
  const a = Ho(t, e, l, !0)
  Nr(() => {
    xr(l[t], a)
  }, n)
}
function Ho(e, t, n = st, l = !1) {
  if (n) {
    const a = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          Wn()
          const r = Ma(n),
            s = an(t, n, e, i)
          return r(), Un(), s
        })
    return l ? a.unshift(o) : a.push(o), o
  }
}
const Pn =
    (e) =>
    (t, n = st) => {
      ;(!Sa || e === 'sp') && Ho(e, (...l) => t(...l), n)
    },
  $l = Pn('bm'),
  Vt = Pn('m'),
  rg = Pn('bu'),
  $r = Pn('u'),
  ut = Pn('bum'),
  Nr = Pn('um'),
  sg = Pn('sp'),
  ug = Pn('rtg'),
  cg = Pn('rtc')
function dg(e, t = st) {
  Ho('ec', e, t)
}
const Hr = 'components',
  fg = 'directives'
function ye(e, t) {
  return jr(Hr, e, !0, t) || e
}
const vg = Symbol.for('v-ndc')
function mg(e) {
  return (Qe(e) && jr(Hr, e, !1)) || e
}
function qt(e) {
  return jr(fg, e)
}
function jr(e, t, n = !0, l = !1) {
  const a = xt || st
  if (a) {
    const o = a.type
    if (e === Hr) {
      const r = ey(o, !1)
      if (r && (r === t || r === It(t) || r === En(It(t)))) return o
    }
    const i = tu(a[e] || o[e], t) || tu(a.appContext[e], t)
    return !i && l ? o : i
  }
}
function tu(e, t) {
  return e && (e[t] || e[It(t)] || e[En(It(t))])
}
function Zd(e, t, n, l) {
  let a
  const o = n,
    i = Ce(e)
  if (i || Qe(e)) {
    const r = i && $n(e)
    let s = !1
    r && ((s = !Gt(e)), (e = Mo(e))), (a = new Array(e.length))
    for (let c = 0, u = e.length; c < u; c++) a[c] = t(s ? mt(e[c]) : e[c], c, void 0, o)
  } else if (typeof e == 'number') {
    a = new Array(e)
    for (let r = 0; r < e; r++) a[r] = t(r + 1, r, void 0, o)
  } else if (Ge(e))
    if (e[Symbol.iterator]) a = Array.from(e, (r, s) => t(r, s, void 0, o))
    else {
      const r = Object.keys(e)
      a = new Array(r.length)
      for (let s = 0, c = r.length; s < c; s++) {
        const u = r[s]
        a[s] = t(e[u], u, s, o)
      }
    }
  else a = []
  return a
}
function Jd(e, t) {
  for (let n = 0; n < t.length; n++) {
    const l = t[n]
    if (Ce(l)) for (let a = 0; a < l.length; a++) e[l[a].name] = l[a].fn
    else
      l &&
        (e[l.name] = l.key
          ? (...a) => {
              const o = l.fn(...a)
              return o && (o.key = l.key), o
            }
          : l.fn)
  }
  return e
}
const Hi = (e) => (e ? (bf(e) ? zo(e) : Hi(e.parent)) : null),
  sa = lt(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Hi(e.parent),
    $root: (e) => Hi(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => zr(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        Fr(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = Ke.bind(e.proxy)),
    $watch: (e) => Fg.bind(e),
  }),
  fi = (e, t) => e !== He && !e.__isScriptSetup && Fe(e, t),
  hg = {
    get({ _: e }, t) {
      if (t === '__v_skip') return !0
      const { ctx: n, setupState: l, data: a, props: o, accessCache: i, type: r, appContext: s } = e
      let c
      if (t[0] !== '$') {
        const m = i[t]
        if (m !== void 0)
          switch (m) {
            case 1:
              return l[t]
            case 2:
              return a[t]
            case 4:
              return n[t]
            case 3:
              return o[t]
          }
        else {
          if (fi(l, t)) return (i[t] = 1), l[t]
          if (a !== He && Fe(a, t)) return (i[t] = 2), a[t]
          if ((c = e.propsOptions[0]) && Fe(c, t)) return (i[t] = 3), o[t]
          if (n !== He && Fe(n, t)) return (i[t] = 4), n[t]
          ji && (i[t] = 0)
        }
      }
      const u = sa[t]
      let d, v
      if (u) return t === '$attrs' && vt(e.attrs, 'get', ''), u(e)
      if ((d = r.__cssModules) && (d = d[t])) return d
      if (n !== He && Fe(n, t)) return (i[t] = 4), n[t]
      if (((v = s.config.globalProperties), Fe(v, t))) return v[t]
    },
    set({ _: e }, t, n) {
      const { data: l, setupState: a, ctx: o } = e
      return fi(a, t)
        ? ((a[t] = n), !0)
        : l !== He && Fe(l, t)
          ? ((l[t] = n), !0)
          : Fe(e.props, t) || (t[0] === '$' && t.slice(1) in e)
            ? !1
            : ((o[t] = n), !0)
    },
    has(
      { _: { data: e, setupState: t, accessCache: n, ctx: l, appContext: a, propsOptions: o } },
      i,
    ) {
      let r
      return (
        !!n[i] ||
        (e !== He && Fe(e, i)) ||
        fi(t, i) ||
        ((r = o[0]) && Fe(r, i)) ||
        Fe(l, i) ||
        Fe(sa, i) ||
        Fe(a.config.globalProperties, i)
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null ? (e._.accessCache[t] = 0) : Fe(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    },
  }
function nu(e) {
  return Ce(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let ji = !0
function gg(e) {
  const t = zr(e),
    n = e.proxy,
    l = e.ctx
  ;(ji = !1), t.beforeCreate && lu(t.beforeCreate, e, 'bc')
  const {
    data: a,
    computed: o,
    methods: i,
    watch: r,
    provide: s,
    inject: c,
    created: u,
    beforeMount: d,
    mounted: v,
    beforeUpdate: m,
    updated: h,
    activated: g,
    deactivated: y,
    beforeDestroy: p,
    beforeUnmount: _,
    destroyed: C,
    unmounted: k,
    render: I,
    renderTracked: P,
    renderTriggered: A,
    errorCaptured: V,
    serverPrefetch: x,
    expose: O,
    inheritAttrs: T,
    components: E,
    directives: R,
    filters: N,
  } = t
  if ((c && yg(c, l, null), i))
    for (const ee in i) {
      const X = i[ee]
      Ve(X) && (l[ee] = X.bind(n))
    }
  if (a) {
    const ee = a.call(n, n)
    Ge(ee) && (e.data = rt(ee))
  }
  if (((ji = !0), o))
    for (const ee in o) {
      const X = o[ee],
        U = Ve(X) ? X.bind(n, n) : Ve(X.get) ? X.get.bind(n, n) : hn,
        F = !Ve(X) && Ve(X.set) ? X.set.bind(n) : hn,
        M = b({ get: U, set: F })
      Object.defineProperty(l, ee, {
        enumerable: !0,
        configurable: !0,
        get: () => M.value,
        set: (ne) => (M.value = ne),
      })
    }
  if (r) for (const ee in r) ef(r[ee], l, n, ee)
  if (s) {
    const ee = Ve(s) ? s.call(n) : s
    Reflect.ownKeys(ee).forEach((X) => {
      Ze(X, ee[X])
    })
  }
  u && lu(u, e, 'c')
  function G(ee, X) {
    Ce(X) ? X.forEach((U) => ee(U.bind(n))) : X && ee(X.bind(n))
  }
  if (
    (G($l, d),
    G(Vt, v),
    G(rg, m),
    G($r, h),
    G(Xd, g),
    G(Dr, y),
    G(dg, V),
    G(cg, P),
    G(ug, A),
    G(ut, _),
    G(Nr, k),
    G(sg, x),
    Ce(O))
  )
    if (O.length) {
      const ee = e.exposed || (e.exposed = {})
      O.forEach((X) => {
        Object.defineProperty(ee, X, { get: () => n[X], set: (U) => (n[X] = U) })
      })
    } else e.exposed || (e.exposed = {})
  I && e.render === hn && (e.render = I),
    T != null && (e.inheritAttrs = T),
    E && (e.components = E),
    R && (e.directives = R),
    x && qd(e)
}
function yg(e, t, n = hn) {
  Ce(e) && (e = zi(e))
  for (const l in e) {
    const a = e[l]
    let o
    Ge(a)
      ? 'default' in a
        ? (o = Ie(a.from || l, a.default, !0))
        : (o = Ie(a.from || l))
      : (o = Ie(a)),
      Ne(o)
        ? Object.defineProperty(t, l, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (i) => (o.value = i),
          })
        : (t[l] = o)
  }
}
function lu(e, t, n) {
  an(Ce(e) ? e.map((l) => l.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function ef(e, t, n, l) {
  let a = l.includes('.') ? vf(n, l) : () => n[l]
  if (Qe(e)) {
    const o = t[e]
    Ve(o) && me(a, o)
  } else if (Ve(e)) me(a, e.bind(n))
  else if (Ge(e))
    if (Ce(e)) e.forEach((o) => ef(o, t, n, l))
    else {
      const o = Ve(e.handler) ? e.handler.bind(n) : t[e.handler]
      Ve(o) && me(a, o, e)
    }
}
function zr(e) {
  const t = e.type,
    { mixins: n, extends: l } = t,
    {
      mixins: a,
      optionsCache: o,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    r = o.get(t)
  let s
  return (
    r
      ? (s = r)
      : !a.length && !n && !l
        ? (s = t)
        : ((s = {}), a.length && a.forEach((c) => mo(s, c, i, !0)), mo(s, t, i)),
    Ge(t) && o.set(t, s),
    s
  )
}
function mo(e, t, n, l = !1) {
  const { mixins: a, extends: o } = t
  o && mo(e, o, n, !0), a && a.forEach((i) => mo(e, i, n, !0))
  for (const i in t)
    if (!(l && i === 'expose')) {
      const r = bg[i] || (n && n[i])
      e[i] = r ? r(e[i], t[i]) : t[i]
    }
  return e
}
const bg = {
  data: au,
  props: ou,
  emits: ou,
  methods: na,
  computed: na,
  beforeCreate: St,
  created: St,
  beforeMount: St,
  mounted: St,
  beforeUpdate: St,
  updated: St,
  beforeDestroy: St,
  beforeUnmount: St,
  destroyed: St,
  unmounted: St,
  activated: St,
  deactivated: St,
  errorCaptured: St,
  serverPrefetch: St,
  components: na,
  directives: na,
  watch: Sg,
  provide: au,
  inject: pg,
}
function au(e, t) {
  return t
    ? e
      ? function () {
          return lt(Ve(e) ? e.call(this, this) : e, Ve(t) ? t.call(this, this) : t)
        }
      : t
    : e
}
function pg(e, t) {
  return na(zi(e), zi(t))
}
function zi(e) {
  if (Ce(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function St(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function na(e, t) {
  return e ? lt(Object.create(null), e, t) : t
}
function ou(e, t) {
  return e
    ? Ce(e) && Ce(t)
      ? [...new Set([...e, ...t])]
      : lt(Object.create(null), nu(e), nu(t ?? {}))
    : t
}
function Sg(e, t) {
  if (!e) return t
  if (!t) return e
  const n = lt(Object.create(null), e)
  for (const l in t) n[l] = St(e[l], t[l])
  return n
}
function tf() {
  return {
    app: null,
    config: {
      isNativeTag: mh,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  }
}
let _g = 0
function wg(e, t) {
  return function (l, a = null) {
    Ve(l) || (l = lt({}, l)), a != null && !Ge(a) && (a = null)
    const o = tf(),
      i = new WeakSet(),
      r = []
    let s = !1
    const c = (o.app = {
      _uid: _g++,
      _component: l,
      _props: a,
      _container: null,
      _context: o,
      _instance: null,
      version: ny,
      get config() {
        return o.config
      },
      set config(u) {},
      use(u, ...d) {
        return (
          i.has(u) ||
            (u && Ve(u.install) ? (i.add(u), u.install(c, ...d)) : Ve(u) && (i.add(u), u(c, ...d))),
          c
        )
      },
      mixin(u) {
        return o.mixins.includes(u) || o.mixins.push(u), c
      },
      component(u, d) {
        return d ? ((o.components[u] = d), c) : o.components[u]
      },
      directive(u, d) {
        return d ? ((o.directives[u] = d), c) : o.directives[u]
      },
      mount(u, d, v) {
        if (!s) {
          const m = c._ceVNode || f(l, a)
          return (
            (m.appContext = o),
            v === !0 ? (v = 'svg') : v === !1 && (v = void 0),
            d && t ? t(m, u) : e(m, u, v),
            (s = !0),
            (c._container = u),
            (u.__vue_app__ = c),
            zo(m.component)
          )
        }
      },
      onUnmount(u) {
        r.push(u)
      },
      unmount() {
        s && (an(r, c._instance, 16), e(null, c._container), delete c._container.__vue_app__)
      },
      provide(u, d) {
        return (o.provides[u] = d), c
      },
      runWithContext(u) {
        const d = ol
        ol = c
        try {
          return u()
        } finally {
          ol = d
        }
      },
    })
    return c
  }
}
let ol = null
function Ze(e, t) {
  if (st) {
    let n = st.provides
    const l = st.parent && st.parent.provides
    l === n && (n = st.provides = Object.create(l)), (n[e] = t)
  }
}
function Ie(e, t, n = !1) {
  const l = st || xt
  if (l || ol) {
    const a = ol
      ? ol._context.provides
      : l
        ? l.parent == null
          ? l.vnode.appContext && l.vnode.appContext.provides
          : l.parent.provides
        : void 0
    if (a && e in a) return a[e]
    if (arguments.length > 1) return n && Ve(t) ? t.call(l && l.proxy) : t
  }
}
function Cg() {
  return !!(st || xt || ol)
}
const nf = {},
  lf = () => Object.create(nf),
  af = (e) => Object.getPrototypeOf(e) === nf
function kg(e, t, n, l = !1) {
  const a = {},
    o = lf()
  ;(e.propsDefaults = Object.create(null)), of(e, t, a, o)
  for (const i in e.propsOptions[0]) i in a || (a[i] = void 0)
  n ? (e.props = l ? a : Td(a)) : e.type.props ? (e.props = a) : (e.props = o), (e.attrs = o)
}
function xg(e, t, n, l) {
  const {
      props: a,
      attrs: o,
      vnode: { patchFlag: i },
    } = e,
    r = we(a),
    [s] = e.propsOptions
  let c = !1
  if ((l || i > 0) && !(i & 16)) {
    if (i & 8) {
      const u = e.vnode.dynamicProps
      for (let d = 0; d < u.length; d++) {
        let v = u[d]
        if (jo(e.emitsOptions, v)) continue
        const m = t[v]
        if (s)
          if (Fe(o, v)) m !== o[v] && ((o[v] = m), (c = !0))
          else {
            const h = It(v)
            a[h] = Wi(s, r, h, m, e, !1)
          }
        else m !== o[v] && ((o[v] = m), (c = !0))
      }
    }
  } else {
    of(e, t, a, o) && (c = !0)
    let u
    for (const d in r)
      (!t || (!Fe(t, d) && ((u = zn(d)) === d || !Fe(t, u)))) &&
        (s
          ? n && (n[d] !== void 0 || n[u] !== void 0) && (a[d] = Wi(s, r, d, void 0, e, !0))
          : delete a[d])
    if (o !== r) for (const d in o) (!t || !Fe(t, d)) && (delete o[d], (c = !0))
  }
  c && wn(e.attrs, 'set', '')
}
function of(e, t, n, l) {
  const [a, o] = e.propsOptions
  let i = !1,
    r
  if (t)
    for (let s in t) {
      if (la(s)) continue
      const c = t[s]
      let u
      a && Fe(a, (u = It(s)))
        ? !o || !o.includes(u)
          ? (n[u] = c)
          : ((r || (r = {}))[u] = c)
        : jo(e.emitsOptions, s) || ((!(s in l) || c !== l[s]) && ((l[s] = c), (i = !0)))
    }
  if (o) {
    const s = we(n),
      c = r || He
    for (let u = 0; u < o.length; u++) {
      const d = o[u]
      n[d] = Wi(a, s, d, c[d], e, !Fe(c, d))
    }
  }
  return i
}
function Wi(e, t, n, l, a, o) {
  const i = e[n]
  if (i != null) {
    const r = Fe(i, 'default')
    if (r && l === void 0) {
      const s = i.default
      if (i.type !== Function && !i.skipFactory && Ve(s)) {
        const { propsDefaults: c } = a
        if (n in c) l = c[n]
        else {
          const u = Ma(a)
          ;(l = c[n] = s.call(null, t)), u()
        }
      } else l = s
      a.ce && a.ce._setProp(n, l)
    }
    i[0] && (o && !r ? (l = !1) : i[1] && (l === '' || l === zn(n)) && (l = !0))
  }
  return l
}
const Vg = new WeakMap()
function rf(e, t, n = !1) {
  const l = n ? Vg : t.propsCache,
    a = l.get(e)
  if (a) return a
  const o = e.props,
    i = {},
    r = []
  let s = !1
  if (!Ve(e)) {
    const u = (d) => {
      s = !0
      const [v, m] = rf(d, t, !0)
      lt(i, v), m && r.push(...m)
    }
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u)
  }
  if (!o && !s) return Ge(e) && l.set(e, Il), Il
  if (Ce(o))
    for (let u = 0; u < o.length; u++) {
      const d = It(o[u])
      iu(d) && (i[d] = He)
    }
  else if (o)
    for (const u in o) {
      const d = It(u)
      if (iu(d)) {
        const v = o[u],
          m = (i[d] = Ce(v) || Ve(v) ? { type: v } : lt({}, v)),
          h = m.type
        let g = !1,
          y = !0
        if (Ce(h))
          for (let p = 0; p < h.length; ++p) {
            const _ = h[p],
              C = Ve(_) && _.name
            if (C === 'Boolean') {
              g = !0
              break
            } else C === 'String' && (y = !1)
          }
        else g = Ve(h) && h.name === 'Boolean'
        ;(m[0] = g), (m[1] = y), (g || Fe(m, 'default')) && r.push(d)
      }
    }
  const c = [i, r]
  return Ge(e) && l.set(e, c), c
}
function iu(e) {
  return e[0] !== '$' && !la(e)
}
const sf = (e) => e[0] === '_' || e === '$stable',
  Wr = (e) => (Ce(e) ? e.map(mn) : [mn(e)]),
  Eg = (e, t, n) => {
    if (t._n) return t
    const l = ce((...a) => Wr(t(...a)), n)
    return (l._c = !1), l
  },
  uf = (e, t, n) => {
    const l = e._ctx
    for (const a in e) {
      if (sf(a)) continue
      const o = e[a]
      if (Ve(o)) t[a] = Eg(a, o, l)
      else if (o != null) {
        const i = Wr(o)
        t[a] = () => i
      }
    }
  },
  cf = (e, t) => {
    const n = Wr(t)
    e.slots.default = () => n
  },
  df = (e, t, n) => {
    for (const l in t) (n || l !== '_') && (e[l] = t[l])
  },
  Pg = (e, t, n) => {
    const l = (e.slots = lf())
    if (e.vnode.shapeFlag & 32) {
      const a = t._
      a ? (df(l, t, n), n && dd(l, '_', a, !0)) : uf(t, l)
    } else t && cf(e, t)
  },
  Ag = (e, t, n) => {
    const { vnode: l, slots: a } = e
    let o = !0,
      i = He
    if (l.shapeFlag & 32) {
      const r = t._
      r ? (n && r === 1 ? (o = !1) : df(a, t, n)) : ((o = !t.$stable), uf(t, a)), (i = t)
    } else t && (cf(e, t), (i = { default: 1 }))
    if (o) for (const r in a) !sf(r) && i[r] == null && delete a[r]
  },
  _t = zg
function Ig(e) {
  return Tg(e)
}
function Tg(e, t) {
  const n = Fo()
  n.__VUE__ = !0
  const {
      insert: l,
      remove: a,
      patchProp: o,
      createElement: i,
      createText: r,
      createComment: s,
      setText: c,
      setElementText: u,
      parentNode: d,
      nextSibling: v,
      setScopeId: m = hn,
      insertStaticContent: h,
    } = e,
    g = (
      S,
      w,
      B,
      z = null,
      D = null,
      W = null,
      se = void 0,
      te = null,
      re = !!w.dynamicChildren,
    ) => {
      if (S === w) return
      S && !nl(S, w) && ((z = L(S)), ne(S, D, W, !0), (S = null)),
        w.patchFlag === -2 && ((re = !1), (w.dynamicChildren = null))
      const { type: Q, ref: _e, shapeFlag: fe } = w
      switch (Q) {
        case Ra:
          y(S, w, B, z)
          break
        case kt:
          p(S, w, B, z)
          break
        case hi:
          S == null && _(w, B, z, se)
          break
        case ke:
          E(S, w, B, z, D, W, se, te, re)
          break
        default:
          fe & 1
            ? I(S, w, B, z, D, W, se, te, re)
            : fe & 6
              ? R(S, w, B, z, D, W, se, te, re)
              : (fe & 64 || fe & 128) && Q.process(S, w, B, z, D, W, se, te, re, le)
      }
      _e != null && D && vo(_e, S && S.ref, W, w || S, !w)
    },
    y = (S, w, B, z) => {
      if (S == null) l((w.el = r(w.children)), B, z)
      else {
        const D = (w.el = S.el)
        w.children !== S.children && c(D, w.children)
      }
    },
    p = (S, w, B, z) => {
      S == null ? l((w.el = s(w.children || '')), B, z) : (w.el = S.el)
    },
    _ = (S, w, B, z) => {
      ;[S.el, S.anchor] = h(S.children, w, B, z, S.el, S.anchor)
    },
    C = ({ el: S, anchor: w }, B, z) => {
      let D
      for (; S && S !== w; ) (D = v(S)), l(S, B, z), (S = D)
      l(w, B, z)
    },
    k = ({ el: S, anchor: w }) => {
      let B
      for (; S && S !== w; ) (B = v(S)), a(S), (S = B)
      a(w)
    },
    I = (S, w, B, z, D, W, se, te, re) => {
      w.type === 'svg' ? (se = 'svg') : w.type === 'math' && (se = 'mathml'),
        S == null ? P(w, B, z, D, W, se, te, re) : x(S, w, D, W, se, te, re)
    },
    P = (S, w, B, z, D, W, se, te) => {
      let re, Q
      const { props: _e, shapeFlag: fe, transition: Se, dirs: xe } = S
      if (
        ((re = S.el = i(S.type, W, _e && _e.is, _e)),
        fe & 8 ? u(re, S.children) : fe & 16 && V(S.children, re, null, z, D, vi(S, W), se, te),
        xe && Xn(S, null, z, 'created'),
        A(re, S, S.scopeId, se, z),
        _e)
      ) {
        for (const We in _e) We !== 'value' && !la(We) && o(re, We, null, _e[We], W, z)
        'value' in _e && o(re, 'value', null, _e.value, W),
          (Q = _e.onVnodeBeforeMount) && dn(Q, z, S)
      }
      xe && Xn(S, null, z, 'beforeMount')
      const Oe = Og(D, Se)
      Oe && Se.beforeEnter(re),
        l(re, w, B),
        ((Q = _e && _e.onVnodeMounted) || Oe || xe) &&
          _t(() => {
            Q && dn(Q, z, S), Oe && Se.enter(re), xe && Xn(S, null, z, 'mounted')
          }, D)
    },
    A = (S, w, B, z, D) => {
      if ((B && m(S, B), z)) for (let W = 0; W < z.length; W++) m(S, z[W])
      if (D) {
        let W = D.subTree
        if (w === W || (hf(W.type) && (W.ssContent === w || W.ssFallback === w))) {
          const se = D.vnode
          A(S, se, se.scopeId, se.slotScopeIds, D.parent)
        }
      }
    },
    V = (S, w, B, z, D, W, se, te, re = 0) => {
      for (let Q = re; Q < S.length; Q++) {
        const _e = (S[Q] = te ? Fn(S[Q]) : mn(S[Q]))
        g(null, _e, w, B, z, D, W, se, te)
      }
    },
    x = (S, w, B, z, D, W, se) => {
      const te = (w.el = S.el)
      let { patchFlag: re, dynamicChildren: Q, dirs: _e } = w
      re |= S.patchFlag & 16
      const fe = S.props || He,
        Se = w.props || He
      let xe
      if (
        (B && Qn(B, !1),
        (xe = Se.onVnodeBeforeUpdate) && dn(xe, B, w, S),
        _e && Xn(w, S, B, 'beforeUpdate'),
        B && Qn(B, !0),
        ((fe.innerHTML && Se.innerHTML == null) || (fe.textContent && Se.textContent == null)) &&
          u(te, ''),
        Q
          ? O(S.dynamicChildren, Q, te, B, z, vi(w, D), W)
          : se || X(S, w, te, null, B, z, vi(w, D), W, !1),
        re > 0)
      ) {
        if (re & 16) T(te, fe, Se, B, D)
        else if (
          (re & 2 && fe.class !== Se.class && o(te, 'class', null, Se.class, D),
          re & 4 && o(te, 'style', fe.style, Se.style, D),
          re & 8)
        ) {
          const Oe = w.dynamicProps
          for (let We = 0; We < Oe.length; We++) {
            const De = Oe[We],
              Bt = fe[De],
              ft = Se[De]
            ;(ft !== Bt || De === 'value') && o(te, De, Bt, ft, D, B)
          }
        }
        re & 1 && S.children !== w.children && u(te, w.children)
      } else !se && Q == null && T(te, fe, Se, B, D)
      ;((xe = Se.onVnodeUpdated) || _e) &&
        _t(() => {
          xe && dn(xe, B, w, S), _e && Xn(w, S, B, 'updated')
        }, z)
    },
    O = (S, w, B, z, D, W, se) => {
      for (let te = 0; te < w.length; te++) {
        const re = S[te],
          Q = w[te],
          _e = re.el && (re.type === ke || !nl(re, Q) || re.shapeFlag & 70) ? d(re.el) : B
        g(re, Q, _e, null, z, D, W, se, !0)
      }
    },
    T = (S, w, B, z, D) => {
      if (w !== B) {
        if (w !== He) for (const W in w) !la(W) && !(W in B) && o(S, W, w[W], null, D, z)
        for (const W in B) {
          if (la(W)) continue
          const se = B[W],
            te = w[W]
          se !== te && W !== 'value' && o(S, W, te, se, D, z)
        }
        'value' in B && o(S, 'value', w.value, B.value, D)
      }
    },
    E = (S, w, B, z, D, W, se, te, re) => {
      const Q = (w.el = S ? S.el : r('')),
        _e = (w.anchor = S ? S.anchor : r(''))
      let { patchFlag: fe, dynamicChildren: Se, slotScopeIds: xe } = w
      xe && (te = te ? te.concat(xe) : xe),
        S == null
          ? (l(Q, B, z), l(_e, B, z), V(w.children || [], B, _e, D, W, se, te, re))
          : fe > 0 && fe & 64 && Se && S.dynamicChildren
            ? (O(S.dynamicChildren, Se, B, D, W, se, te),
              (w.key != null || (D && w === D.subTree)) && Ur(S, w, !0))
            : X(S, w, B, _e, D, W, se, te, re)
    },
    R = (S, w, B, z, D, W, se, te, re) => {
      ;(w.slotScopeIds = te),
        S == null
          ? w.shapeFlag & 512
            ? D.ctx.activate(w, B, z, se, re)
            : N(w, B, z, D, W, se, re)
          : q(S, w, re)
    },
    N = (S, w, B, z, D, W, se) => {
      const te = (S.component = qg(S, z, D))
      if ((No(S) && (te.ctx.renderer = le), Xg(te, !1, se), te.asyncDep)) {
        if ((D && D.registerDep(te, G, se), !S.el)) {
          const re = (te.subTree = f(kt))
          p(null, re, w, B)
        }
      } else G(te, S, w, B, D, W, se)
    },
    q = (S, w, B) => {
      const z = (w.component = S.component)
      if (Hg(S, w, B))
        if (z.asyncDep && !z.asyncResolved) {
          ee(z, w, B)
          return
        } else (z.next = w), z.update()
      else (w.el = S.el), (z.vnode = w)
    },
    G = (S, w, B, z, D, W, se) => {
      const te = () => {
        if (S.isMounted) {
          let { next: fe, bu: Se, u: xe, parent: Oe, vnode: We } = S
          {
            const Lt = ff(S)
            if (Lt) {
              fe && ((fe.el = We.el), ee(S, fe, se)),
                Lt.asyncDep.then(() => {
                  S.isUnmounted || te()
                })
              return
            }
          }
          let De = fe,
            Bt
          Qn(S, !1),
            fe ? ((fe.el = We.el), ee(S, fe, se)) : (fe = We),
            Se && to(Se),
            (Bt = fe.props && fe.props.onVnodeBeforeUpdate) && dn(Bt, Oe, fe, We),
            Qn(S, !0)
          const ft = mi(S),
            tn = S.subTree
          ;(S.subTree = ft),
            g(tn, ft, d(tn.el), L(tn), S, D, W),
            (fe.el = ft.el),
            De === null && jg(S, ft.el),
            xe && _t(xe, D),
            (Bt = fe.props && fe.props.onVnodeUpdated) && _t(() => dn(Bt, Oe, fe, We), D)
        } else {
          let fe
          const { el: Se, props: xe } = w,
            { bm: Oe, m: We, parent: De, root: Bt, type: ft } = S,
            tn = ra(w)
          if (
            (Qn(S, !1),
            Oe && to(Oe),
            !tn && (fe = xe && xe.onVnodeBeforeMount) && dn(fe, De, w),
            Qn(S, !0),
            Se && de)
          ) {
            const Lt = () => {
              ;(S.subTree = mi(S)), de(Se, S.subTree, S, D, null)
            }
            tn && ft.__asyncHydrate ? ft.__asyncHydrate(Se, S, Lt) : Lt()
          } else {
            Bt.ce && Bt.ce._injectChildStyle(ft)
            const Lt = (S.subTree = mi(S))
            g(null, Lt, B, z, S, D, W), (w.el = Lt.el)
          }
          if ((We && _t(We, D), !tn && (fe = xe && xe.onVnodeMounted))) {
            const Lt = w
            _t(() => dn(fe, De, Lt), D)
          }
          ;(w.shapeFlag & 256 || (De && ra(De.vnode) && De.vnode.shapeFlag & 256)) &&
            S.a &&
            _t(S.a, D),
            (S.isMounted = !0),
            (w = B = z = null)
        }
      }
      S.scope.on()
      const re = (S.effect = new yd(te))
      S.scope.off()
      const Q = (S.update = re.run.bind(re)),
        _e = (S.job = re.runIfDirty.bind(re))
      ;(_e.i = S), (_e.id = S.uid), (re.scheduler = () => Fr(_e)), Qn(S, !0), Q()
    },
    ee = (S, w, B) => {
      w.component = S
      const z = S.vnode.props
      ;(S.vnode = w), (S.next = null), xg(S, w.props, z, B), Ag(S, w.children, B), Wn(), Xs(S), Un()
    },
    X = (S, w, B, z, D, W, se, te, re = !1) => {
      const Q = S && S.children,
        _e = S ? S.shapeFlag : 0,
        fe = w.children,
        { patchFlag: Se, shapeFlag: xe } = w
      if (Se > 0) {
        if (Se & 128) {
          F(Q, fe, B, z, D, W, se, te, re)
          return
        } else if (Se & 256) {
          U(Q, fe, B, z, D, W, se, te, re)
          return
        }
      }
      xe & 8
        ? (_e & 16 && j(Q, D, W), fe !== Q && u(B, fe))
        : _e & 16
          ? xe & 16
            ? F(Q, fe, B, z, D, W, se, te, re)
            : j(Q, D, W, !0)
          : (_e & 8 && u(B, ''), xe & 16 && V(fe, B, z, D, W, se, te, re))
    },
    U = (S, w, B, z, D, W, se, te, re) => {
      ;(S = S || Il), (w = w || Il)
      const Q = S.length,
        _e = w.length,
        fe = Math.min(Q, _e)
      let Se
      for (Se = 0; Se < fe; Se++) {
        const xe = (w[Se] = re ? Fn(w[Se]) : mn(w[Se]))
        g(S[Se], xe, B, null, D, W, se, te, re)
      }
      Q > _e ? j(S, D, W, !0, !1, fe) : V(w, B, z, D, W, se, te, re, fe)
    },
    F = (S, w, B, z, D, W, se, te, re) => {
      let Q = 0
      const _e = w.length
      let fe = S.length - 1,
        Se = _e - 1
      for (; Q <= fe && Q <= Se; ) {
        const xe = S[Q],
          Oe = (w[Q] = re ? Fn(w[Q]) : mn(w[Q]))
        if (nl(xe, Oe)) g(xe, Oe, B, null, D, W, se, te, re)
        else break
        Q++
      }
      for (; Q <= fe && Q <= Se; ) {
        const xe = S[fe],
          Oe = (w[Se] = re ? Fn(w[Se]) : mn(w[Se]))
        if (nl(xe, Oe)) g(xe, Oe, B, null, D, W, se, te, re)
        else break
        fe--, Se--
      }
      if (Q > fe) {
        if (Q <= Se) {
          const xe = Se + 1,
            Oe = xe < _e ? w[xe].el : z
          for (; Q <= Se; ) g(null, (w[Q] = re ? Fn(w[Q]) : mn(w[Q])), B, Oe, D, W, se, te, re), Q++
        }
      } else if (Q > Se) for (; Q <= fe; ) ne(S[Q], D, W, !0), Q++
      else {
        const xe = Q,
          Oe = Q,
          We = new Map()
        for (Q = Oe; Q <= Se; Q++) {
          const Rt = (w[Q] = re ? Fn(w[Q]) : mn(w[Q]))
          Rt.key != null && We.set(Rt.key, Q)
        }
        let De,
          Bt = 0
        const ft = Se - Oe + 1
        let tn = !1,
          Lt = 0
        const Xl = new Array(ft)
        for (Q = 0; Q < ft; Q++) Xl[Q] = 0
        for (Q = xe; Q <= fe; Q++) {
          const Rt = S[Q]
          if (Bt >= ft) {
            ne(Rt, D, W, !0)
            continue
          }
          let cn
          if (Rt.key != null) cn = We.get(Rt.key)
          else
            for (De = Oe; De <= Se; De++)
              if (Xl[De - Oe] === 0 && nl(Rt, w[De])) {
                cn = De
                break
              }
          cn === void 0
            ? ne(Rt, D, W, !0)
            : ((Xl[cn - Oe] = Q + 1),
              cn >= Lt ? (Lt = cn) : (tn = !0),
              g(Rt, w[cn], B, null, D, W, se, te, re),
              Bt++)
        }
        const Us = tn ? Bg(Xl) : Il
        for (De = Us.length - 1, Q = ft - 1; Q >= 0; Q--) {
          const Rt = Oe + Q,
            cn = w[Rt],
            Ks = Rt + 1 < _e ? w[Rt + 1].el : z
          Xl[Q] === 0
            ? g(null, cn, B, Ks, D, W, se, te, re)
            : tn && (De < 0 || Q !== Us[De] ? M(cn, B, Ks, 2) : De--)
        }
      }
    },
    M = (S, w, B, z, D = null) => {
      const { el: W, type: se, transition: te, children: re, shapeFlag: Q } = S
      if (Q & 6) {
        M(S.component.subTree, w, B, z)
        return
      }
      if (Q & 128) {
        S.suspense.move(w, B, z)
        return
      }
      if (Q & 64) {
        se.move(S, w, B, le)
        return
      }
      if (se === ke) {
        l(W, w, B)
        for (let fe = 0; fe < re.length; fe++) M(re[fe], w, B, z)
        l(S.anchor, w, B)
        return
      }
      if (se === hi) {
        C(S, w, B)
        return
      }
      if (z !== 2 && Q & 1 && te)
        if (z === 0) te.beforeEnter(W), l(W, w, B), _t(() => te.enter(W), D)
        else {
          const { leave: fe, delayLeave: Se, afterLeave: xe } = te,
            Oe = () => l(W, w, B),
            We = () => {
              fe(W, () => {
                Oe(), xe && xe()
              })
            }
          Se ? Se(W, Oe, We) : We()
        }
      else l(W, w, B)
    },
    ne = (S, w, B, z = !1, D = !1) => {
      const {
        type: W,
        props: se,
        ref: te,
        children: re,
        dynamicChildren: Q,
        shapeFlag: _e,
        patchFlag: fe,
        dirs: Se,
        cacheIndex: xe,
      } = S
      if (
        (fe === -2 && (D = !1),
        te != null && vo(te, null, B, S, !0),
        xe != null && (w.renderCache[xe] = void 0),
        _e & 256)
      ) {
        w.ctx.deactivate(S)
        return
      }
      const Oe = _e & 1 && Se,
        We = !ra(S)
      let De
      if ((We && (De = se && se.onVnodeBeforeUnmount) && dn(De, w, S), _e & 6))
        pe(S.component, B, z)
      else {
        if (_e & 128) {
          S.suspense.unmount(B, z)
          return
        }
        Oe && Xn(S, null, w, 'beforeUnmount'),
          _e & 64
            ? S.type.remove(S, w, B, le, z)
            : Q && !Q.hasOnce && (W !== ke || (fe > 0 && fe & 64))
              ? j(Q, w, B, !1, !0)
              : ((W === ke && fe & 384) || (!D && _e & 16)) && j(re, w, B),
          z && be(S)
      }
      ;((We && (De = se && se.onVnodeUnmounted)) || Oe) &&
        _t(() => {
          De && dn(De, w, S), Oe && Xn(S, null, w, 'unmounted')
        }, B)
    },
    be = (S) => {
      const { type: w, el: B, anchor: z, transition: D } = S
      if (w === ke) {
        ie(B, z)
        return
      }
      if (w === hi) {
        k(S)
        return
      }
      const W = () => {
        a(B), D && !D.persisted && D.afterLeave && D.afterLeave()
      }
      if (S.shapeFlag & 1 && D && !D.persisted) {
        const { leave: se, delayLeave: te } = D,
          re = () => se(B, W)
        te ? te(S.el, W, re) : re()
      } else W()
    },
    ie = (S, w) => {
      let B
      for (; S !== w; ) (B = v(S)), a(S), (S = B)
      a(w)
    },
    pe = (S, w, B) => {
      const { bum: z, scope: D, job: W, subTree: se, um: te, m: re, a: Q } = S
      ru(re),
        ru(Q),
        z && to(z),
        D.stop(),
        W && ((W.flags |= 8), ne(se, S, w, B)),
        te && _t(te, w),
        _t(() => {
          S.isUnmounted = !0
        }, w),
        w &&
          w.pendingBranch &&
          !w.isUnmounted &&
          S.asyncDep &&
          !S.asyncResolved &&
          S.suspenseId === w.pendingId &&
          (w.deps--, w.deps === 0 && w.resolve())
    },
    j = (S, w, B, z = !1, D = !1, W = 0) => {
      for (let se = W; se < S.length; se++) ne(S[se], w, B, z, D)
    },
    L = (S) => {
      if (S.shapeFlag & 6) return L(S.component.subTree)
      if (S.shapeFlag & 128) return S.suspense.next()
      const w = v(S.anchor || S.el),
        B = w && w[Nd]
      return B ? v(B) : w
    }
  let Y = !1
  const Z = (S, w, B) => {
      S == null
        ? w._vnode && ne(w._vnode, null, null, !0)
        : g(w._vnode || null, S, w, null, null, null, B),
        (w._vnode = S),
        Y || ((Y = !0), Xs(), Md(), (Y = !1))
    },
    le = { p: g, um: ne, m: M, r: be, mt: N, mc: V, pc: X, pbc: O, n: L, o: e }
  let K, de
  return { render: Z, hydrate: K, createApp: wg(Z, K) }
}
function vi({ type: e, props: t }, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' && e === 'annotation-xml' && t && t.encoding && t.encoding.includes('html'))
    ? void 0
    : n
}
function Qn({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5))
}
function Og(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function Ur(e, t, n = !1) {
  const l = e.children,
    a = t.children
  if (Ce(l) && Ce(a))
    for (let o = 0; o < l.length; o++) {
      const i = l[o]
      let r = a[o]
      r.shapeFlag & 1 &&
        !r.dynamicChildren &&
        ((r.patchFlag <= 0 || r.patchFlag === 32) && ((r = a[o] = Fn(a[o])), (r.el = i.el)),
        !n && r.patchFlag !== -2 && Ur(i, r)),
        r.type === Ra && (r.el = i.el)
    }
}
function Bg(e) {
  const t = e.slice(),
    n = [0]
  let l, a, o, i, r
  const s = e.length
  for (l = 0; l < s; l++) {
    const c = e[l]
    if (c !== 0) {
      if (((a = n[n.length - 1]), e[a] < c)) {
        ;(t[l] = a), n.push(l)
        continue
      }
      for (o = 0, i = n.length - 1; o < i; ) (r = (o + i) >> 1), e[n[r]] < c ? (o = r + 1) : (i = r)
      c < e[n[o]] && (o > 0 && (t[l] = n[o - 1]), (n[o] = l))
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; ) (n[o] = i), (i = t[i])
  return n
}
function ff(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : ff(t)
}
function ru(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8
}
const Lg = Symbol.for('v-scx'),
  Rg = () => Ie(Lg)
function yt(e, t) {
  return Kr(e, null, t)
}
function me(e, t, n) {
  return Kr(e, t, n)
}
function Kr(e, t, n = He) {
  const { immediate: l, deep: a, flush: o, once: i } = n,
    r = lt({}, n),
    s = (t && l) || (!t && o !== 'post')
  let c
  if (Sa) {
    if (o === 'sync') {
      const m = Rg()
      c = m.__watcherHandles || (m.__watcherHandles = [])
    } else if (!s) {
      const m = () => {}
      return (m.stop = hn), (m.resume = hn), (m.pause = hn), m
    }
  }
  const u = st
  r.call = (m, h, g) => an(m, u, h, g)
  let d = !1
  o === 'post'
    ? (r.scheduler = (m) => {
        _t(m, u && u.suspense)
      })
    : o !== 'sync' &&
      ((d = !0),
      (r.scheduler = (m, h) => {
        h ? m() : Fr(m)
      })),
    (r.augmentJob = (m) => {
      t && (m.flags |= 4), d && ((m.flags |= 2), u && ((m.id = u.uid), (m.i = u)))
    })
  const v = Zh(e, t, r)
  return Sa && (c ? c.push(v) : s && v()), v
}
function Fg(e, t, n) {
  const l = this.proxy,
    a = Qe(e) ? (e.includes('.') ? vf(l, e) : () => l[e]) : e.bind(l, l)
  let o
  Ve(t) ? (o = t) : ((o = t.handler), (n = t))
  const i = Ma(this),
    r = Kr(a, o.bind(l), n)
  return i(), r
}
function vf(e, t) {
  const n = t.split('.')
  return () => {
    let l = e
    for (let a = 0; a < n.length && l; a++) l = l[n[a]]
    return l
  }
}
const Mg = (e, t) =>
  t === 'modelValue' || t === 'model-value'
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${It(t)}Modifiers`] || e[`${zn(t)}Modifiers`]
function Dg(e, t, ...n) {
  if (e.isUnmounted) return
  const l = e.vnode.props || He
  let a = n
  const o = t.startsWith('update:'),
    i = o && Mg(l, t.slice(7))
  i && (i.trim && (a = n.map((u) => (Qe(u) ? u.trim() : u))), i.number && (a = n.map(Ri)))
  let r,
    s = l[(r = ii(t))] || l[(r = ii(It(t)))]
  !s && o && (s = l[(r = ii(zn(t)))]), s && an(s, e, 6, a)
  const c = l[r + 'Once']
  if (c) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[r]) return
    ;(e.emitted[r] = !0), an(c, e, 6, a)
  }
}
function mf(e, t, n = !1) {
  const l = t.emitsCache,
    a = l.get(e)
  if (a !== void 0) return a
  const o = e.emits
  let i = {},
    r = !1
  if (!Ve(e)) {
    const s = (c) => {
      const u = mf(c, t, !0)
      u && ((r = !0), lt(i, u))
    }
    !n && t.mixins.length && t.mixins.forEach(s),
      e.extends && s(e.extends),
      e.mixins && e.mixins.forEach(s)
  }
  return !o && !r
    ? (Ge(e) && l.set(e, null), null)
    : (Ce(o) ? o.forEach((s) => (i[s] = null)) : lt(i, o), Ge(e) && l.set(e, i), i)
}
function jo(e, t) {
  return !e || !Bo(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      Fe(e, t[0].toLowerCase() + t.slice(1)) || Fe(e, zn(t)) || Fe(e, t))
}
function mi(e) {
  const {
      type: t,
      vnode: n,
      proxy: l,
      withProxy: a,
      propsOptions: [o],
      slots: i,
      attrs: r,
      emit: s,
      render: c,
      renderCache: u,
      props: d,
      data: v,
      setupState: m,
      ctx: h,
      inheritAttrs: g,
    } = e,
    y = fo(e)
  let p, _
  try {
    if (n.shapeFlag & 4) {
      const k = a || l,
        I = k
      ;(p = mn(c.call(I, k, u, d, m, v, h))), (_ = r)
    } else {
      const k = t
      ;(p = mn(k.length > 1 ? k(d, { attrs: r, slots: i, emit: s }) : k(d, null))),
        (_ = t.props ? r : $g(r))
    }
  } catch (k) {
    ;(ua.length = 0), $o(k, e, 1), (p = f(kt))
  }
  let C = p
  if (_ && g !== !1) {
    const k = Object.keys(_),
      { shapeFlag: I } = C
    k.length && I & 7 && (o && k.some(kr) && (_ = Ng(_, o)), (C = kn(C, _, !1, !0)))
  }
  return (
    n.dirs && ((C = kn(C, null, !1, !0)), (C.dirs = C.dirs ? C.dirs.concat(n.dirs) : n.dirs)),
    n.transition && cl(C, n.transition),
    (p = C),
    fo(y),
    p
  )
}
const $g = (e) => {
    let t
    for (const n in e) (n === 'class' || n === 'style' || Bo(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  Ng = (e, t) => {
    const n = {}
    for (const l in e) (!kr(l) || !(l.slice(9) in t)) && (n[l] = e[l])
    return n
  }
function Hg(e, t, n) {
  const { props: l, children: a, component: o } = e,
    { props: i, children: r, patchFlag: s } = t,
    c = o.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && s >= 0) {
    if (s & 1024) return !0
    if (s & 16) return l ? su(l, i, c) : !!i
    if (s & 8) {
      const u = t.dynamicProps
      for (let d = 0; d < u.length; d++) {
        const v = u[d]
        if (i[v] !== l[v] && !jo(c, v)) return !0
      }
    }
  } else
    return (a || r) && (!r || !r.$stable) ? !0 : l === i ? !1 : l ? (i ? su(l, i, c) : !0) : !!i
  return !1
}
function su(e, t, n) {
  const l = Object.keys(t)
  if (l.length !== Object.keys(e).length) return !0
  for (let a = 0; a < l.length; a++) {
    const o = l[a]
    if (t[o] !== e[o] && !jo(n, o)) return !0
  }
  return !1
}
function jg({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const l = t.subTree
    if ((l.suspense && l.suspense.activeBranch === e && (l.el = e.el), l === e))
      ((e = t.vnode).el = n), (t = t.parent)
    else break
  }
}
const hf = (e) => e.__isSuspense
function zg(e, t) {
  t && t.pendingBranch ? (Ce(e) ? t.effects.push(...e) : t.effects.push(e)) : tg(e)
}
const ke = Symbol.for('v-fgt'),
  Ra = Symbol.for('v-txt'),
  kt = Symbol.for('v-cmt'),
  hi = Symbol.for('v-stc'),
  ua = []
let Mt = null
function Le(e = !1) {
  ua.push((Mt = e ? null : []))
}
function Wg() {
  ua.pop(), (Mt = ua[ua.length - 1] || null)
}
let ba = 1
function uu(e, t = !1) {
  ;(ba += e), e < 0 && Mt && t && (Mt.hasOnce = !0)
}
function gf(e) {
  return (e.dynamicChildren = ba > 0 ? Mt || Il : null), Wg(), ba > 0 && Mt && Mt.push(e), e
}
function ho(e, t, n, l, a, o) {
  return gf(Fa(e, t, n, l, a, o, !0))
}
function ze(e, t, n, l, a) {
  return gf(f(e, t, n, l, a, !0))
}
function pa(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function nl(e, t) {
  return e.type === t.type && e.key === t.key
}
const yf = ({ key: e }) => e ?? null,
  lo = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null ? (Qe(e) || Ne(e) || Ve(e) ? { i: xt, r: e, k: t, f: !!n } : e) : null
  )
function Fa(e, t = null, n = null, l = 0, a = null, o = e === ke ? 0 : 1, i = !1, r = !1) {
  const s = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && yf(t),
    ref: t && lo(t),
    scopeId: $d,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: l,
    dynamicProps: a,
    dynamicChildren: null,
    appContext: null,
    ctx: xt,
  }
  return (
    r ? (Gr(s, n), o & 128 && e.normalize(s)) : n && (s.shapeFlag |= Qe(n) ? 8 : 16),
    ba > 0 && !i && Mt && (s.patchFlag > 0 || o & 6) && s.patchFlag !== 32 && Mt.push(s),
    s
  )
}
const f = Ug
function Ug(e, t = null, n = null, l = 0, a = null, o = !1) {
  if (((!e || e === vg) && (e = kt), pa(e))) {
    const r = kn(e, t, !0)
    return (
      n && Gr(r, n),
      ba > 0 && !o && Mt && (r.shapeFlag & 6 ? (Mt[Mt.indexOf(e)] = r) : Mt.push(r)),
      (r.patchFlag = -2),
      r
    )
  }
  if ((ty(e) && (e = e.__vccOpts), t)) {
    t = Kg(t)
    let { class: r, style: s } = t
    r && !Qe(r) && (t.class = Pr(r)),
      Ge(s) && (Rr(s) && !Ce(s) && (s = lt({}, s)), (t.style = Er(s)))
  }
  const i = Qe(e) ? 1 : hf(e) ? 128 : Hd(e) ? 64 : Ge(e) ? 4 : Ve(e) ? 2 : 0
  return Fa(e, t, n, l, a, i, o, !0)
}
function Kg(e) {
  return e ? (Rr(e) || af(e) ? lt({}, e) : e) : null
}
function kn(e, t, n = !1, l = !1) {
  const { props: a, ref: o, patchFlag: i, children: r, transition: s } = e,
    c = t ? ve(a || {}, t) : a,
    u = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: c,
      key: c && yf(c),
      ref: t && t.ref ? (n && o ? (Ce(o) ? o.concat(lo(t)) : [o, lo(t)]) : lo(t)) : o,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: r,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== ke ? (i === -1 ? 16 : i | 16) : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: s,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && kn(e.ssContent),
      ssFallback: e.ssFallback && kn(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    }
  return s && l && cl(u, s.clone(u)), u
}
function Xe(e = ' ', t = 0) {
  return f(Ra, null, e, t)
}
function Nn(e = '', t = !1) {
  return t ? (Le(), ze(kt, null, e)) : f(kt, null, e)
}
function mn(e) {
  return e == null || typeof e == 'boolean'
    ? f(kt)
    : Ce(e)
      ? f(ke, null, e.slice())
      : pa(e)
        ? Fn(e)
        : f(Ra, null, String(e))
}
function Fn(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : kn(e)
}
function Gr(e, t) {
  let n = 0
  const { shapeFlag: l } = e
  if (t == null) t = null
  else if (Ce(t)) n = 16
  else if (typeof t == 'object')
    if (l & 65) {
      const a = t.default
      a && (a._c && (a._d = !1), Gr(e, a()), a._c && (a._d = !0))
      return
    } else {
      n = 32
      const a = t._
      !a && !af(t)
        ? (t._ctx = xt)
        : a === 3 && xt && (xt.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    Ve(t)
      ? ((t = { default: t, _ctx: xt }), (n = 32))
      : ((t = String(t)), l & 64 ? ((n = 16), (t = [Xe(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function ve(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const l = e[n]
    for (const a in l)
      if (a === 'class') t.class !== l.class && (t.class = Pr([t.class, l.class]))
      else if (a === 'style') t.style = Er([t.style, l.style])
      else if (Bo(a)) {
        const o = t[a],
          i = l[a]
        i && o !== i && !(Ce(o) && o.includes(i)) && (t[a] = o ? [].concat(o, i) : i)
      } else a !== '' && (t[a] = l[a])
  }
  return t
}
function dn(e, t, n, l = null) {
  an(e, t, 7, [n, l])
}
const Gg = tf()
let Yg = 0
function qg(e, t, n) {
  const l = e.type,
    a = (t ? t.appContext : e.appContext) || Gg,
    o = {
      uid: Yg++,
      vnode: e,
      type: l,
      parent: t,
      appContext: a,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new hd(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(a.provides),
      ids: t ? t.ids : ['', 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: rf(l, a),
      emitsOptions: mf(l, a),
      emit: null,
      emitted: null,
      propsDefaults: He,
      inheritAttrs: l.inheritAttrs,
      ctx: He,
      data: He,
      props: He,
      attrs: He,
      slots: He,
      refs: He,
      setupState: He,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    }
  return (
    (o.ctx = { _: o }), (o.root = t ? t.root : o), (o.emit = Dg.bind(null, o)), e.ce && e.ce(o), o
  )
}
let st = null
const Yr = () => st || xt
let go, Ui
{
  const e = Fo(),
    t = (n, l) => {
      let a
      return (
        (a = e[n]) || (a = e[n] = []),
        a.push(l),
        (o) => {
          a.length > 1 ? a.forEach((i) => i(o)) : a[0](o)
        }
      )
    }
  ;(go = t('__VUE_INSTANCE_SETTERS__', (n) => (st = n))),
    (Ui = t('__VUE_SSR_SETTERS__', (n) => (Sa = n)))
}
const Ma = (e) => {
    const t = st
    return (
      go(e),
      e.scope.on(),
      () => {
        e.scope.off(), go(t)
      }
    )
  },
  cu = () => {
    st && st.scope.off(), go(null)
  }
function bf(e) {
  return e.vnode.shapeFlag & 4
}
let Sa = !1
function Xg(e, t = !1, n = !1) {
  t && Ui(t)
  const { props: l, children: a } = e.vnode,
    o = bf(e)
  kg(e, l, o, t), Pg(e, a, n)
  const i = o ? Qg(e, t) : void 0
  return t && Ui(!1), i
}
function Qg(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, hg))
  const { setup: l } = n
  if (l) {
    Wn()
    const a = (e.setupContext = l.length > 1 ? Jg(e) : null),
      o = Ma(e),
      i = La(l, e, 0, [e.props, a]),
      r = sd(i)
    if ((Un(), o(), (r || e.sp) && !ra(e) && qd(e), r)) {
      if ((i.then(cu, cu), t))
        return i
          .then((s) => {
            du(e, s, t)
          })
          .catch((s) => {
            $o(s, e, 0)
          })
      e.asyncDep = i
    } else du(e, i, t)
  } else pf(e, t)
}
function du(e, t, n) {
  Ve(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Ge(t) && (e.setupState = Bd(t)),
    pf(e, n)
}
let fu
function pf(e, t, n) {
  const l = e.type
  if (!e.render) {
    if (!t && fu && !l.render) {
      const a = l.template || zr(e).template
      if (a) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config,
          { delimiters: r, compilerOptions: s } = l,
          c = lt(lt({ isCustomElement: o, delimiters: r }, i), s)
        l.render = fu(a, c)
      }
    }
    e.render = l.render || hn
  }
  {
    const a = Ma(e)
    Wn()
    try {
      gg(e)
    } finally {
      Un(), a()
    }
  }
}
const Zg = {
  get(e, t) {
    return vt(e, 'get', ''), e[t]
  },
}
function Jg(e) {
  const t = (n) => {
    e.exposed = n || {}
  }
  return { attrs: new Proxy(e.attrs, Zg), slots: e.slots, emit: e.emit, expose: t }
}
function zo(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(Bd(Do(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n]
            if (n in sa) return sa[n](e)
          },
          has(t, n) {
            return n in t || n in sa
          },
        }))
    : e.proxy
}
function ey(e, t = !0) {
  return Ve(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function ty(e) {
  return Ve(e) && '__vccOpts' in e
}
const b = (e, t) => Xh(e, t, Sa)
function sn(e, t, n) {
  const l = arguments.length
  return l === 2
    ? Ge(t) && !Ce(t)
      ? pa(t)
        ? f(e, null, [t])
        : f(e, t)
      : f(e, null, t)
    : (l > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : l === 3 && pa(n) && (n = [n]),
      f(e, t, n))
}
const ny = '3.5.13'
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Ki
const vu = typeof window < 'u' && window.trustedTypes
if (vu)
  try {
    Ki = vu.createPolicy('vue', { createHTML: (e) => e })
  } catch {}
const Sf = Ki ? (e) => Ki.createHTML(e) : (e) => e,
  ly = 'http://www.w3.org/2000/svg',
  ay = 'http://www.w3.org/1998/Math/MathML',
  _n = typeof document < 'u' ? document : null,
  mu = _n && _n.createElement('template'),
  oy = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, l) => {
      const a =
        t === 'svg'
          ? _n.createElementNS(ly, e)
          : t === 'mathml'
            ? _n.createElementNS(ay, e)
            : n
              ? _n.createElement(e, { is: n })
              : _n.createElement(e)
      return e === 'select' && l && l.multiple != null && a.setAttribute('multiple', l.multiple), a
    },
    createText: (e) => _n.createTextNode(e),
    createComment: (e) => _n.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => _n.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, n, l, a, o) {
      const i = n ? n.previousSibling : t.lastChild
      if (a && (a === o || a.nextSibling))
        for (; t.insertBefore(a.cloneNode(!0), n), !(a === o || !(a = a.nextSibling)); );
      else {
        mu.innerHTML = Sf(
          l === 'svg' ? `<svg>${e}</svg>` : l === 'mathml' ? `<math>${e}</math>` : e,
        )
        const r = mu.content
        if (l === 'svg' || l === 'mathml') {
          const s = r.firstChild
          for (; s.firstChild; ) r.appendChild(s.firstChild)
          r.removeChild(s)
        }
        t.insertBefore(r, n)
      }
      return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    },
  },
  In = 'transition',
  Zl = 'animation',
  Bl = Symbol('_vtc'),
  _f = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  wf = lt({}, Ud, _f),
  iy = (e) => ((e.displayName = 'Transition'), (e.props = wf), e),
  Hn = iy((e, { slots: t }) => sn(og, Cf(e), t)),
  Zn = (e, t = []) => {
    Ce(e) ? e.forEach((n) => n(...t)) : e && e(...t)
  },
  hu = (e) => (e ? (Ce(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1)
function Cf(e) {
  const t = {}
  for (const E in e) E in _f || (t[E] = e[E])
  if (e.css === !1) return t
  const {
      name: n = 'v',
      type: l,
      duration: a,
      enterFromClass: o = `${n}-enter-from`,
      enterActiveClass: i = `${n}-enter-active`,
      enterToClass: r = `${n}-enter-to`,
      appearFromClass: s = o,
      appearActiveClass: c = i,
      appearToClass: u = r,
      leaveFromClass: d = `${n}-leave-from`,
      leaveActiveClass: v = `${n}-leave-active`,
      leaveToClass: m = `${n}-leave-to`,
    } = e,
    h = ry(a),
    g = h && h[0],
    y = h && h[1],
    {
      onBeforeEnter: p,
      onEnter: _,
      onEnterCancelled: C,
      onLeave: k,
      onLeaveCancelled: I,
      onBeforeAppear: P = p,
      onAppear: A = _,
      onAppearCancelled: V = C,
    } = t,
    x = (E, R, N, q) => {
      ;(E._enterCancelled = q), On(E, R ? u : r), On(E, R ? c : i), N && N()
    },
    O = (E, R) => {
      ;(E._isLeaving = !1), On(E, d), On(E, m), On(E, v), R && R()
    },
    T = (E) => (R, N) => {
      const q = E ? A : _,
        G = () => x(R, E, N)
      Zn(q, [R, G]),
        gu(() => {
          On(R, E ? s : o), fn(R, E ? u : r), hu(q) || yu(R, l, g, G)
        })
    }
  return lt(t, {
    onBeforeEnter(E) {
      Zn(p, [E]), fn(E, o), fn(E, i)
    },
    onBeforeAppear(E) {
      Zn(P, [E]), fn(E, s), fn(E, c)
    },
    onEnter: T(!1),
    onAppear: T(!0),
    onLeave(E, R) {
      E._isLeaving = !0
      const N = () => O(E, R)
      fn(E, d),
        E._enterCancelled ? (fn(E, v), Gi()) : (Gi(), fn(E, v)),
        gu(() => {
          E._isLeaving && (On(E, d), fn(E, m), hu(k) || yu(E, l, y, N))
        }),
        Zn(k, [E, N])
    },
    onEnterCancelled(E) {
      x(E, !1, void 0, !0), Zn(C, [E])
    },
    onAppearCancelled(E) {
      x(E, !0, void 0, !0), Zn(V, [E])
    },
    onLeaveCancelled(E) {
      O(E), Zn(I, [E])
    },
  })
}
function ry(e) {
  if (e == null) return null
  if (Ge(e)) return [gi(e.enter), gi(e.leave)]
  {
    const t = gi(e)
    return [t, t]
  }
}
function gi(e) {
  return ph(e)
}
function fn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Bl] || (e[Bl] = new Set())).add(t)
}
function On(e, t) {
  t.split(/\s+/).forEach((l) => l && e.classList.remove(l))
  const n = e[Bl]
  n && (n.delete(t), n.size || (e[Bl] = void 0))
}
function gu(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
let sy = 0
function yu(e, t, n, l) {
  const a = (e._endId = ++sy),
    o = () => {
      a === e._endId && l()
    }
  if (n != null) return setTimeout(o, n)
  const { type: i, timeout: r, propCount: s } = kf(e, t)
  if (!i) return l()
  const c = i + 'end'
  let u = 0
  const d = () => {
      e.removeEventListener(c, v), o()
    },
    v = (m) => {
      m.target === e && ++u >= s && d()
    }
  setTimeout(() => {
    u < s && d()
  }, r + 1),
    e.addEventListener(c, v)
}
function kf(e, t) {
  const n = window.getComputedStyle(e),
    l = (h) => (n[h] || '').split(', '),
    a = l(`${In}Delay`),
    o = l(`${In}Duration`),
    i = bu(a, o),
    r = l(`${Zl}Delay`),
    s = l(`${Zl}Duration`),
    c = bu(r, s)
  let u = null,
    d = 0,
    v = 0
  t === In
    ? i > 0 && ((u = In), (d = i), (v = o.length))
    : t === Zl
      ? c > 0 && ((u = Zl), (d = c), (v = s.length))
      : ((d = Math.max(i, c)),
        (u = d > 0 ? (i > c ? In : Zl) : null),
        (v = u ? (u === In ? o.length : s.length) : 0))
  const m = u === In && /\b(transform|all)(,|$)/.test(l(`${In}Property`).toString())
  return { type: u, timeout: d, propCount: v, hasTransform: m }
}
function bu(e, t) {
  for (; e.length < t.length; ) e = e.concat(e)
  return Math.max(...t.map((n, l) => pu(n) + pu(e[l])))
}
function pu(e) {
  return e === 'auto' ? 0 : Number(e.slice(0, -1).replace(',', '.')) * 1e3
}
function Gi() {
  return document.body.offsetHeight
}
function uy(e, t, n) {
  const l = e[Bl]
  l && (t = (t ? [t, ...l] : [...l]).join(' ')),
    t == null ? e.removeAttribute('class') : n ? e.setAttribute('class', t) : (e.className = t)
}
const yo = Symbol('_vod'),
  xf = Symbol('_vsh'),
  Xt = {
    beforeMount(e, { value: t }, { transition: n }) {
      ;(e[yo] = e.style.display === 'none' ? '' : e.style.display),
        n && t ? n.beforeEnter(e) : Jl(e, t)
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e)
    },
    updated(e, { value: t, oldValue: n }, { transition: l }) {
      !t != !n &&
        (l
          ? t
            ? (l.beforeEnter(e), Jl(e, !0), l.enter(e))
            : l.leave(e, () => {
                Jl(e, !1)
              })
          : Jl(e, t))
    },
    beforeUnmount(e, { value: t }) {
      Jl(e, t)
    },
  }
function Jl(e, t) {
  ;(e.style.display = t ? e[yo] : 'none'), (e[xf] = !t)
}
const cy = Symbol(''),
  dy = /(^|;)\s*display\s*:/
function fy(e, t, n) {
  const l = e.style,
    a = Qe(n)
  let o = !1
  if (n && !a) {
    if (t)
      if (Qe(t))
        for (const i of t.split(';')) {
          const r = i.slice(0, i.indexOf(':')).trim()
          n[r] == null && ao(l, r, '')
        }
      else for (const i in t) n[i] == null && ao(l, i, '')
    for (const i in n) i === 'display' && (o = !0), ao(l, i, n[i])
  } else if (a) {
    if (t !== n) {
      const i = l[cy]
      i && (n += ';' + i), (l.cssText = n), (o = dy.test(n))
    }
  } else t && e.removeAttribute('style')
  yo in e && ((e[yo] = o ? l.display : ''), e[xf] && (l.display = 'none'))
}
const Su = /\s*!important$/
function ao(e, t, n) {
  if (Ce(n)) n.forEach((l) => ao(e, t, l))
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n)
  else {
    const l = vy(e, t)
    Su.test(n) ? e.setProperty(zn(l), n.replace(Su, ''), 'important') : (e[l] = n)
  }
}
const _u = ['Webkit', 'Moz', 'ms'],
  yi = {}
function vy(e, t) {
  const n = yi[t]
  if (n) return n
  let l = It(t)
  if (l !== 'filter' && l in e) return (yi[t] = l)
  l = En(l)
  for (let a = 0; a < _u.length; a++) {
    const o = _u[a] + l
    if (o in e) return (yi[t] = o)
  }
  return t
}
const wu = 'http://www.w3.org/1999/xlink'
function Cu(e, t, n, l, a, o = xh(t)) {
  l && t.startsWith('xlink:')
    ? n == null
      ? e.removeAttributeNS(wu, t.slice(6, t.length))
      : e.setAttributeNS(wu, t, n)
    : n == null || (o && !fd(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? '' : jn(n) ? String(n) : n)
}
function ku(e, t, n, l, a) {
  if (t === 'innerHTML' || t === 'textContent') {
    n != null && (e[t] = t === 'innerHTML' ? Sf(n) : n)
    return
  }
  const o = e.tagName
  if (t === 'value' && o !== 'PROGRESS' && !o.includes('-')) {
    const r = o === 'OPTION' ? e.getAttribute('value') || '' : e.value,
      s = n == null ? (e.type === 'checkbox' ? 'on' : '') : String(n)
    ;(r !== s || !('_value' in e)) && (e.value = s),
      n == null && e.removeAttribute(t),
      (e._value = n)
    return
  }
  let i = !1
  if (n === '' || n == null) {
    const r = typeof e[t]
    r === 'boolean'
      ? (n = fd(n))
      : n == null && r === 'string'
        ? ((n = ''), (i = !0))
        : r === 'number' && ((n = 0), (i = !0))
  }
  try {
    e[t] = n
  } catch {}
  i && e.removeAttribute(a || t)
}
function kl(e, t, n, l) {
  e.addEventListener(t, n, l)
}
function my(e, t, n, l) {
  e.removeEventListener(t, n, l)
}
const xu = Symbol('_vei')
function hy(e, t, n, l, a = null) {
  const o = e[xu] || (e[xu] = {}),
    i = o[t]
  if (l && i) i.value = l
  else {
    const [r, s] = gy(t)
    if (l) {
      const c = (o[t] = py(l, a))
      kl(e, r, c, s)
    } else i && (my(e, r, i, s), (o[t] = void 0))
  }
}
const Vu = /(?:Once|Passive|Capture)$/
function gy(e) {
  let t
  if (Vu.test(e)) {
    t = {}
    let l
    for (; (l = e.match(Vu)); )
      (e = e.slice(0, e.length - l[0].length)), (t[l[0].toLowerCase()] = !0)
  }
  return [e[2] === ':' ? e.slice(3) : zn(e.slice(2)), t]
}
let bi = 0
const yy = Promise.resolve(),
  by = () => bi || (yy.then(() => (bi = 0)), (bi = Date.now()))
function py(e, t) {
  const n = (l) => {
    if (!l._vts) l._vts = Date.now()
    else if (l._vts <= n.attached) return
    an(Sy(l, n.value), t, 5, [l])
  }
  return (n.value = e), (n.attached = by()), n
}
function Sy(e, t) {
  if (Ce(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map((l) => (a) => !a._stopped && l && l(a))
    )
  } else return t
}
const Eu = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  _y = (e, t, n, l, a, o) => {
    const i = a === 'svg'
    t === 'class'
      ? uy(e, l, i)
      : t === 'style'
        ? fy(e, n, l)
        : Bo(t)
          ? kr(t) || hy(e, t, n, l, o)
          : (
                t[0] === '.'
                  ? ((t = t.slice(1)), !0)
                  : t[0] === '^'
                    ? ((t = t.slice(1)), !1)
                    : wy(e, t, l, i)
              )
            ? (ku(e, t, l),
              !e.tagName.includes('-') &&
                (t === 'value' || t === 'checked' || t === 'selected') &&
                Cu(e, t, l, i, o, t !== 'value'))
            : e._isVueCE && (/[A-Z]/.test(t) || !Qe(l))
              ? ku(e, It(t), l, o, t)
              : (t === 'true-value'
                  ? (e._trueValue = l)
                  : t === 'false-value' && (e._falseValue = l),
                Cu(e, t, l, i))
  }
function wy(e, t, n, l) {
  if (l) return !!(t === 'innerHTML' || t === 'textContent' || (t in e && Eu(t) && Ve(n)))
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1
  if (t === 'width' || t === 'height') {
    const a = e.tagName
    if (a === 'IMG' || a === 'VIDEO' || a === 'CANVAS' || a === 'SOURCE') return !1
  }
  return Eu(t) && Qe(n) ? !1 : t in e
}
const Vf = new WeakMap(),
  Ef = new WeakMap(),
  bo = Symbol('_moveCb'),
  Pu = Symbol('_enterCb'),
  Cy = (e) => (delete e.props.mode, e),
  ky = Cy({
    name: 'TransitionGroup',
    props: lt({}, wf, { tag: String, moveClass: String }),
    setup(e, { slots: t }) {
      const n = Yr(),
        l = Wd()
      let a, o
      return (
        $r(() => {
          if (!a.length) return
          const i = e.moveClass || `${e.name || 'v'}-move`
          if (!Py(a[0].el, n.vnode.el, i)) return
          a.forEach(xy), a.forEach(Vy)
          const r = a.filter(Ey)
          Gi(),
            r.forEach((s) => {
              const c = s.el,
                u = c.style
              fn(c, i), (u.transform = u.webkitTransform = u.transitionDuration = '')
              const d = (c[bo] = (v) => {
                ;(v && v.target !== c) ||
                  ((!v || /transform$/.test(v.propertyName)) &&
                    (c.removeEventListener('transitionend', d), (c[bo] = null), On(c, i)))
              })
              c.addEventListener('transitionend', d)
            })
        }),
        () => {
          const i = we(e),
            r = Cf(i)
          let s = i.tag || ke
          if (((a = []), o))
            for (let c = 0; c < o.length; c++) {
              const u = o[c]
              u.el &&
                u.el instanceof Element &&
                (a.push(u), cl(u, ya(u, r, l, n)), Vf.set(u, u.el.getBoundingClientRect()))
            }
          o = t.default ? Mr(t.default()) : []
          for (let c = 0; c < o.length; c++) {
            const u = o[c]
            u.key != null && cl(u, ya(u, r, l, n))
          }
          return f(s, null, o)
        }
      )
    },
  }),
  qr = ky
function xy(e) {
  const t = e.el
  t[bo] && t[bo](), t[Pu] && t[Pu]()
}
function Vy(e) {
  Ef.set(e, e.el.getBoundingClientRect())
}
function Ey(e) {
  const t = Vf.get(e),
    n = Ef.get(e),
    l = t.left - n.left,
    a = t.top - n.top
  if (l || a) {
    const o = e.el.style
    return (
      (o.transform = o.webkitTransform = `translate(${l}px,${a}px)`),
      (o.transitionDuration = '0s'),
      e
    )
  }
}
function Py(e, t, n) {
  const l = e.cloneNode(),
    a = e[Bl]
  a &&
    a.forEach((r) => {
      r.split(/\s+/).forEach((s) => s && l.classList.remove(s))
    }),
    n.split(/\s+/).forEach((r) => r && l.classList.add(r)),
    (l.style.display = 'none')
  const o = t.nodeType === 1 ? t : t.parentNode
  o.appendChild(l)
  const { hasTransform: i } = kf(l)
  return o.removeChild(l), i
}
const Au = (e) => {
  const t = e.props['onUpdate:modelValue'] || !1
  return Ce(t) ? (n) => to(t, n) : t
}
function Ay(e) {
  e.target.composing = !0
}
function Iu(e) {
  const t = e.target
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event('input')))
}
const pi = Symbol('_assign'),
  Iy = {
    created(e, { modifiers: { lazy: t, trim: n, number: l } }, a) {
      e[pi] = Au(a)
      const o = l || (a.props && a.props.type === 'number')
      kl(e, t ? 'change' : 'input', (i) => {
        if (i.target.composing) return
        let r = e.value
        n && (r = r.trim()), o && (r = Ri(r)), e[pi](r)
      }),
        n &&
          kl(e, 'change', () => {
            e.value = e.value.trim()
          }),
        t || (kl(e, 'compositionstart', Ay), kl(e, 'compositionend', Iu), kl(e, 'change', Iu))
    },
    mounted(e, { value: t }) {
      e.value = t ?? ''
    },
    beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: l, trim: a, number: o } }, i) {
      if (((e[pi] = Au(i)), e.composing)) return
      const r = (o || e.type === 'number') && !/^0\d/.test(e.value) ? Ri(e.value) : e.value,
        s = t ?? ''
      r !== s &&
        ((document.activeElement === e &&
          e.type !== 'range' &&
          ((l && t === n) || (a && e.value.trim() === s))) ||
          (e.value = s))
    },
  },
  Ty = ['ctrl', 'shift', 'alt', 'meta'],
  Oy = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => 'button' in e && e.button !== 0,
    middle: (e) => 'button' in e && e.button !== 1,
    right: (e) => 'button' in e && e.button !== 2,
    exact: (e, t) => Ty.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  po = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      l = t.join('.')
    return (
      n[l] ||
      (n[l] = (a, ...o) => {
        for (let i = 0; i < t.length; i++) {
          const r = Oy[t[i]]
          if (r && r(a, t)) return
        }
        return e(a, ...o)
      })
    )
  },
  By = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace',
  },
  Si = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}),
      l = t.join('.')
    return (
      n[l] ||
      (n[l] = (a) => {
        if (!('key' in a)) return
        const o = zn(a.key)
        if (t.some((i) => i === o || By[i] === o)) return e(a)
      })
    )
  },
  Ly = lt({ patchProp: _y }, oy)
let Tu
function Ry() {
  return Tu || (Tu = Ig(Ly))
}
const Fy = (...e) => {
  const t = Ry().createApp(...e),
    { mount: n } = t
  return (
    (t.mount = (l) => {
      const a = Dy(l)
      if (!a) return
      const o = t._component
      !Ve(o) && !o.render && !o.template && (o.template = a.innerHTML),
        a.nodeType === 1 && (a.textContent = '')
      const i = n(a, !1, My(a))
      return (
        a instanceof Element && (a.removeAttribute('v-cloak'), a.setAttribute('data-v-app', '')), i
      )
    }),
    t
  )
}
function My(e) {
  if (e instanceof SVGElement) return 'svg'
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement) return 'mathml'
}
function Dy(e) {
  return Qe(e) ? document.querySelector(e) : e
}
var $y = !1
/*!
 * pinia v2.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ let Pf
const Wo = (e) => (Pf = e),
  Af = Symbol()
function Yi(e) {
  return (
    e &&
    typeof e == 'object' &&
    Object.prototype.toString.call(e) === '[object Object]' &&
    typeof e.toJSON != 'function'
  )
}
var ca
;(function (e) {
  ;(e.direct = 'direct'), (e.patchObject = 'patch object'), (e.patchFunction = 'patch function')
})(ca || (ca = {}))
function Ny() {
  const e = Ta(!0),
    t = e.run(() => H({}))
  let n = [],
    l = []
  const a = Do({
    install(o) {
      Wo(a),
        (a._a = o),
        o.provide(Af, a),
        (o.config.globalProperties.$pinia = a),
        l.forEach((i) => n.push(i)),
        (l = [])
    },
    use(o) {
      return !this._a && !$y ? l.push(o) : n.push(o), this
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  })
  return a
}
const If = () => {}
function Ou(e, t, n, l = If) {
  e.push(t)
  const a = () => {
    const o = e.indexOf(t)
    o > -1 && (e.splice(o, 1), l())
  }
  return !n && gd() && bt(a), a
}
function bl(e, ...t) {
  e.slice().forEach((n) => {
    n(...t)
  })
}
const Hy = (e) => e(),
  Bu = Symbol(),
  _i = Symbol()
function qi(e, t) {
  e instanceof Map && t instanceof Map
    ? t.forEach((n, l) => e.set(l, n))
    : e instanceof Set && t instanceof Set && t.forEach(e.add, e)
  for (const n in t) {
    if (!t.hasOwnProperty(n)) continue
    const l = t[n],
      a = e[n]
    Yi(a) && Yi(l) && e.hasOwnProperty(n) && !Ne(l) && !$n(l) ? (e[n] = qi(a, l)) : (e[n] = l)
  }
  return e
}
const jy = Symbol()
function zy(e) {
  return !Yi(e) || !e.hasOwnProperty(jy)
}
const { assign: Bn } = Object
function Wy(e) {
  return !!(Ne(e) && e.effect)
}
function Uy(e, t, n, l) {
  const { state: a, actions: o, getters: i } = t,
    r = n.state.value[e]
  let s
  function c() {
    r || (n.state.value[e] = a ? a() : {})
    const u = Ba(n.state.value[e])
    return Bn(
      u,
      o,
      Object.keys(i || {}).reduce(
        (d, v) => (
          (d[v] = Do(
            b(() => {
              Wo(n)
              const m = n._s.get(e)
              return i[v].call(m, m)
            }),
          )),
          d
        ),
        {},
      ),
    )
  }
  return (s = Tf(e, c, t, n, l, !0)), s
}
function Tf(e, t, n = {}, l, a, o) {
  let i
  const r = Bn({ actions: {} }, n),
    s = { deep: !0 }
  let c,
    u,
    d = [],
    v = [],
    m
  const h = l.state.value[e]
  !o && !h && (l.state.value[e] = {}), H({})
  let g
  function y(V) {
    let x
    ;(c = u = !1),
      typeof V == 'function'
        ? (V(l.state.value[e]), (x = { type: ca.patchFunction, storeId: e, events: m }))
        : (qi(l.state.value[e], V),
          (x = { type: ca.patchObject, payload: V, storeId: e, events: m }))
    const O = (g = Symbol())
    Ke().then(() => {
      g === O && (c = !0)
    }),
      (u = !0),
      bl(d, x, l.state.value[e])
  }
  const p = o
    ? function () {
        const { state: x } = n,
          O = x ? x() : {}
        this.$patch((T) => {
          Bn(T, O)
        })
      }
    : If
  function _() {
    i.stop(), (d = []), (v = []), l._s.delete(e)
  }
  const C = (V, x = '') => {
      if (Bu in V) return (V[_i] = x), V
      const O = function () {
        Wo(l)
        const T = Array.from(arguments),
          E = [],
          R = []
        function N(ee) {
          E.push(ee)
        }
        function q(ee) {
          R.push(ee)
        }
        bl(v, { args: T, name: O[_i], store: I, after: N, onError: q })
        let G
        try {
          G = V.apply(this && this.$id === e ? this : I, T)
        } catch (ee) {
          throw (bl(R, ee), ee)
        }
        return G instanceof Promise
          ? G.then((ee) => (bl(E, ee), ee)).catch((ee) => (bl(R, ee), Promise.reject(ee)))
          : (bl(E, G), G)
      }
      return (O[Bu] = !0), (O[_i] = x), O
    },
    k = {
      _p: l,
      $id: e,
      $onAction: Ou.bind(null, v),
      $patch: y,
      $reset: p,
      $subscribe(V, x = {}) {
        const O = Ou(d, V, x.detached, () => T()),
          T = i.run(() =>
            me(
              () => l.state.value[e],
              (E) => {
                ;(x.flush === 'sync' ? u : c) && V({ storeId: e, type: ca.direct, events: m }, E)
              },
              Bn({}, s, x),
            ),
          )
        return O
      },
      $dispose: _,
    },
    I = rt(k)
  l._s.set(e, I)
  const A = ((l._a && l._a.runWithContext) || Hy)(() =>
    l._e.run(() => (i = Ta()).run(() => t({ action: C }))),
  )
  for (const V in A) {
    const x = A[V]
    if ((Ne(x) && !Wy(x)) || $n(x))
      o || (h && zy(x) && (Ne(x) ? (x.value = h[V]) : qi(x, h[V])), (l.state.value[e][V] = x))
    else if (typeof x == 'function') {
      const O = C(x, V)
      ;(A[V] = O), (r.actions[V] = x)
    }
  }
  return (
    Bn(I, A),
    Bn(we(I), A),
    Object.defineProperty(I, '$state', {
      get: () => l.state.value[e],
      set: (V) => {
        y((x) => {
          Bn(x, V)
        })
      },
    }),
    l._p.forEach((V) => {
      Bn(
        I,
        i.run(() => V({ store: I, app: l._a, pinia: l, options: r })),
      )
    }),
    h && o && n.hydrate && n.hydrate(I.$state, h),
    (c = !0),
    (u = !0),
    I
  )
}
/*! #__NO_SIDE_EFFECTS__ */ function fl(e, t, n) {
  let l, a
  const o = typeof t == 'function'
  typeof e == 'string' ? ((l = e), (a = o ? n : t)) : ((a = e), (l = e.id))
  function i(r, s) {
    const c = Cg()
    return (
      (r = r || (c ? Ie(Af, null) : null)),
      r && Wo(r),
      (r = Pf),
      r._s.has(l) || (o ? Tf(l, t, a, r) : Uy(l, a, r)),
      r._s.get(l)
    )
  }
  return (i.$id = l), i
}
function Pt(e, t) {
  let n
  function l() {
    ;(n = Ta()),
      n.run(() =>
        t.length
          ? t(() => {
              n == null || n.stop(), l()
            })
          : t(),
      )
  }
  me(
    e,
    (a) => {
      a && !n ? l() : a || (n == null || n.stop(), (n = void 0))
    },
    { immediate: !0 },
  ),
    bt(() => {
      n == null || n.stop()
    })
}
const Be = typeof window < 'u',
  Xr = Be && 'IntersectionObserver' in window,
  Ky = Be && ('ontouchstart' in window || window.navigator.maxTouchPoints > 0),
  Lu = Be && 'EyeDropper' in window
function Ru(e, t, n) {
  Gy(e, t), t.set(e, n)
}
function Gy(e, t) {
  if (t.has(e))
    throw new TypeError('Cannot initialize the same private elements twice on an object')
}
function Yy(e, t, n) {
  return e.set(Of(e, t), n), n
}
function Jn(e, t) {
  return e.get(Of(e, t))
}
function Of(e, t, n) {
  if (typeof e == 'function' ? e === t : e.has(t)) return arguments.length < 3 ? t : n
  throw new TypeError('Private element is not present on this object')
}
function Bf(e, t, n) {
  const l = t.length - 1
  if (l < 0) return e === void 0 ? n : e
  for (let a = 0; a < l; a++) {
    if (e == null) return n
    e = e[t[a]]
  }
  return e == null || e[t[l]] === void 0 ? n : e[t[l]]
}
function vl(e, t) {
  if (e === t) return !0
  if (
    (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime()) ||
    e !== Object(e) ||
    t !== Object(t)
  )
    return !1
  const n = Object.keys(e)
  return n.length !== Object.keys(t).length ? !1 : n.every((l) => vl(e[l], t[l]))
}
function Xi(e, t, n) {
  return e == null || !t || typeof t != 'string'
    ? n
    : e[t] !== void 0
      ? e[t]
      : ((t = t.replace(/\[(\w+)\]/g, '.$1')), (t = t.replace(/^\./, '')), Bf(e, t.split('.'), n))
}
function Wt(e, t, n) {
  if (t === !0) return e === void 0 ? n : e
  if (t == null || typeof t == 'boolean') return n
  if (e !== Object(e)) {
    if (typeof t != 'function') return n
    const a = t(e, n)
    return typeof a > 'u' ? n : a
  }
  if (typeof t == 'string') return Xi(e, t, n)
  if (Array.isArray(t)) return Bf(e, t, n)
  if (typeof t != 'function') return n
  const l = t(e, n)
  return typeof l > 'u' ? n : l
}
function Qr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0
  return Array.from({ length: e }, (n, l) => t + l)
}
function he(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'px'
  if (!(e == null || e === ''))
    return isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${t}` : void 0
}
function Lf(e) {
  return e !== null && typeof e == 'object' && !Array.isArray(e)
}
function Fu(e) {
  let t
  return (
    e !== null &&
    typeof e == 'object' &&
    ((t = Object.getPrototypeOf(e)) === Object.prototype || t === null)
  )
}
function Rf(e) {
  if (e && '$el' in e) {
    const t = e.$el
    return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE ? t.nextElementSibling : t
  }
  return e
}
const Mu = Object.freeze({
    enter: 13,
    tab: 9,
    delete: 46,
    esc: 27,
    space: 32,
    up: 38,
    down: 40,
    left: 37,
    right: 39,
    end: 35,
    home: 36,
    del: 46,
    backspace: 8,
    insert: 45,
    pageup: 33,
    pagedown: 34,
    shift: 16,
  }),
  qy = Object.freeze({
    enter: 'Enter',
    tab: 'Tab',
    delete: 'Delete',
    esc: 'Escape',
    space: 'Space',
    up: 'ArrowUp',
    down: 'ArrowDown',
    left: 'ArrowLeft',
    right: 'ArrowRight',
    end: 'End',
    home: 'Home',
    del: 'Delete',
    backspace: 'Backspace',
    insert: 'Insert',
    pageup: 'PageUp',
    pagedown: 'PageDown',
    shift: 'Shift',
  })
function Ff(e) {
  return Object.keys(e)
}
function ll(e, t) {
  return t.every((n) => e.hasOwnProperty(n))
}
function Mf(e, t) {
  const n = {},
    l = new Set(Object.keys(e))
  for (const a of t) l.has(a) && (n[a] = e[a])
  return n
}
function Qi(e, t, n) {
  const l = Object.create(null),
    a = Object.create(null)
  for (const o in e)
    t.some((i) => (i instanceof RegExp ? i.test(o) : i === o)) &&
    !(n != null && n.some((i) => i === o))
      ? (l[o] = e[o])
      : (a[o] = e[o])
  return [l, a]
}
function Dt(e, t) {
  const n = { ...e }
  return t.forEach((l) => delete n[l]), n
}
function Zr(e, t) {
  const n = {}
  return t.forEach((l) => (n[l] = e[l])), n
}
const Df = /^on[^a-z]/,
  Jr = (e) => Df.test(e),
  Xy = [
    'onAfterscriptexecute',
    'onAnimationcancel',
    'onAnimationend',
    'onAnimationiteration',
    'onAnimationstart',
    'onAuxclick',
    'onBeforeinput',
    'onBeforescriptexecute',
    'onChange',
    'onClick',
    'onCompositionend',
    'onCompositionstart',
    'onCompositionupdate',
    'onContextmenu',
    'onCopy',
    'onCut',
    'onDblclick',
    'onFocusin',
    'onFocusout',
    'onFullscreenchange',
    'onFullscreenerror',
    'onGesturechange',
    'onGestureend',
    'onGesturestart',
    'onGotpointercapture',
    'onInput',
    'onKeydown',
    'onKeypress',
    'onKeyup',
    'onLostpointercapture',
    'onMousedown',
    'onMousemove',
    'onMouseout',
    'onMouseover',
    'onMouseup',
    'onMousewheel',
    'onPaste',
    'onPointercancel',
    'onPointerdown',
    'onPointerenter',
    'onPointerleave',
    'onPointermove',
    'onPointerout',
    'onPointerover',
    'onPointerup',
    'onReset',
    'onSelect',
    'onSubmit',
    'onTouchcancel',
    'onTouchend',
    'onTouchmove',
    'onTouchstart',
    'onTransitioncancel',
    'onTransitionend',
    'onTransitionrun',
    'onTransitionstart',
    'onWheel',
  ]
function Da(e) {
  const [t, n] = Qi(e, [Df]),
    l = Dt(t, Xy),
    [a, o] = Qi(n, ['class', 'style', 'id', /^data-/])
  return Object.assign(a, t), Object.assign(o, l), [a, o]
}
function gt(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e]
}
function Qy(e, t) {
  let n = 0
  const l = function () {
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
    clearTimeout(n), (n = setTimeout(() => e(...o), nt(t)))
  }
  return (
    (l.clear = () => {
      clearTimeout(n)
    }),
    (l.immediate = e),
    l
  )
}
function dt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1
  return Math.max(t, Math.min(n, e))
}
function Du(e) {
  const t = e.toString().trim()
  return t.includes('.') ? t.length - t.indexOf('.') - 1 : 0
}
function $u(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '0'
  return e + n.repeat(Math.max(0, t - e.length))
}
function Nu(e, t) {
  return (
    (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '0').repeat(
      Math.max(0, t - e.length),
    ) + e
  )
}
function Zy(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1
  const n = []
  let l = 0
  for (; l < e.length; ) n.push(e.substr(l, t)), (l += t)
  return n
}
function Hu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e3
  if (e < t) return `${e} B`
  const n = t === 1024 ? ['Ki', 'Mi', 'Gi'] : ['k', 'M', 'G']
  let l = -1
  for (; Math.abs(e) >= t && l < n.length - 1; ) (e /= t), ++l
  return `${e.toFixed(1)} ${n[l]}B`
}
function ht() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = arguments.length > 2 ? arguments[2] : void 0
  const l = {}
  for (const a in e) l[a] = e[a]
  for (const a in t) {
    const o = e[a],
      i = t[a]
    if (Fu(o) && Fu(i)) {
      l[a] = ht(o, i, n)
      continue
    }
    if (n && Array.isArray(o) && Array.isArray(i)) {
      l[a] = n(o, i)
      continue
    }
    l[a] = i
  }
  return l
}
function $f(e) {
  return e.map((t) => (t.type === ke ? $f(t.children) : t)).flat()
}
function il() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ''
  if (il.cache.has(e)) return il.cache.get(e)
  const t = e
    .replace(/[^a-z]/gi, '-')
    .replace(/\B([A-Z])/g, '-$1')
    .toLowerCase()
  return il.cache.set(e, t), t
}
il.cache = new Map()
function Vl(e, t) {
  if (!t || typeof t != 'object') return []
  if (Array.isArray(t)) return t.map((n) => Vl(e, n)).flat(1)
  if (t.suspense) return Vl(e, t.ssContent)
  if (Array.isArray(t.children)) return t.children.map((n) => Vl(e, n)).flat(1)
  if (t.component) {
    if (Object.getOwnPropertySymbols(t.component.provides).includes(e)) return [t.component]
    if (t.component.subTree) return Vl(e, t.component.subTree).flat(1)
  }
  return []
}
var qa = new WeakMap(),
  pl = new WeakMap()
class Jy {
  constructor(t) {
    Ru(this, qa, []), Ru(this, pl, 0), (this.size = t)
  }
  push(t) {
    ;(Jn(qa, this)[Jn(pl, this)] = t), Yy(pl, this, (Jn(pl, this) + 1) % this.size)
  }
  values() {
    return Jn(qa, this)
      .slice(Jn(pl, this))
      .concat(Jn(qa, this).slice(0, Jn(pl, this)))
  }
}
function eb(e) {
  return 'touches' in e
    ? { clientX: e.touches[0].clientX, clientY: e.touches[0].clientY }
    : { clientX: e.clientX, clientY: e.clientY }
}
function es(e) {
  const t = rt({}),
    n = b(e)
  return (
    yt(
      () => {
        for (const l in n.value) t[l] = n.value[l]
      },
      { flush: 'sync' },
    ),
    Ba(t)
  )
}
function So(e, t) {
  return e.includes(t)
}
function Nf(e) {
  return e[2].toLowerCase() + e.slice(3)
}
const At = () => [Function, Array]
function ju(e, t) {
  return (
    (t = 'on' + En(t)),
    !!(e[t] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`])
  )
}
function ts(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
    n[l - 1] = arguments[l]
  if (Array.isArray(e)) for (const a of e) a(...n)
  else typeof e == 'function' && e(...n)
}
function _a(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0
  const n = ['button', '[href]', 'input:not([type="hidden"])', 'select', 'textarea', '[tabindex]']
    .map((l) => `${l}${t ? ':not([tabindex="-1"])' : ''}:not([disabled])`)
    .join(', ')
  return [...e.querySelectorAll(n)]
}
function Hf(e, t, n) {
  let l,
    a = e.indexOf(document.activeElement)
  const o = t === 'next' ? 1 : -1
  do (a += o), (l = e[a])
  while (
    (!l || l.offsetParent == null || !((n == null ? void 0 : n(l)) ?? !0)) &&
    a < e.length &&
    a >= 0
  )
  return l
}
function da(e, t) {
  var l, a, o, i
  const n = _a(e)
  if (!t)
    (e === document.activeElement || !e.contains(document.activeElement)) &&
      ((l = n[0]) == null || l.focus())
  else if (t === 'first') (a = n[0]) == null || a.focus()
  else if (t === 'last') (o = n.at(-1)) == null || o.focus()
  else if (typeof t == 'number') (i = n[t]) == null || i.focus()
  else {
    const r = Hf(n, t)
    r ? r.focus() : da(e, t === 'next' ? 'first' : 'last')
  }
}
function tb() {}
function Ll(e, t) {
  if (!(Be && typeof CSS < 'u' && typeof CSS.supports < 'u' && CSS.supports(`selector(${t})`)))
    return null
  try {
    return !!e && e.matches(t)
  } catch {
    return null
  }
}
function ns(e) {
  return e.some((t) => (pa(t) ? (t.type === kt ? !1 : t.type !== ke || ns(t.children)) : !0))
    ? e
    : null
}
function nb(e, t) {
  if (!Be || e === 0) return t(), () => {}
  const n = window.setTimeout(t, e)
  return () => window.clearTimeout(n)
}
function lb(e, t) {
  const n = e.clientX,
    l = e.clientY,
    a = t.getBoundingClientRect(),
    o = a.left,
    i = a.top,
    r = a.right,
    s = a.bottom
  return n >= o && n <= r && l >= i && l <= s
}
function Zi() {
  const e = ue(),
    t = (n) => {
      e.value = n
    }
  return (
    Object.defineProperty(t, 'value', {
      enumerable: !0,
      get: () => e.value,
      set: (n) => (e.value = n),
    }),
    Object.defineProperty(t, 'el', { enumerable: !0, get: () => Rf(e.value) }),
    t
  )
}
function Ji(e) {
  const t = e.key.length === 1,
    n = !e.ctrlKey && !e.metaKey && !e.altKey
  return t && n
}
const jf = ['top', 'bottom'],
  ab = ['start', 'end', 'left', 'right']
function er(e, t) {
  let [n, l] = e.split(' ')
  return (
    l || (l = So(jf, n) ? 'start' : So(ab, n) ? 'top' : 'center'),
    { side: tr(n, t), align: tr(l, t) }
  )
}
function tr(e, t) {
  return e === 'start' ? (t ? 'right' : 'left') : e === 'end' ? (t ? 'left' : 'right') : e
}
function wi(e) {
  return {
    side: { center: 'center', top: 'bottom', bottom: 'top', left: 'right', right: 'left' }[e.side],
    align: e.align,
  }
}
function Ci(e) {
  return {
    side: e.side,
    align: { center: 'center', top: 'bottom', bottom: 'top', left: 'right', right: 'left' }[
      e.align
    ],
  }
}
function zu(e) {
  return { side: e.align, align: e.side }
}
function Wu(e) {
  return So(jf, e.side) ? 'y' : 'x'
}
class rl {
  constructor(t) {
    let { x: n, y: l, width: a, height: o } = t
    ;(this.x = n), (this.y = l), (this.width = a), (this.height = o)
  }
  get top() {
    return this.y
  }
  get bottom() {
    return this.y + this.height
  }
  get left() {
    return this.x
  }
  get right() {
    return this.x + this.width
  }
}
function Uu(e, t) {
  return {
    x: { before: Math.max(0, t.left - e.left), after: Math.max(0, e.right - t.right) },
    y: { before: Math.max(0, t.top - e.top), after: Math.max(0, e.bottom - t.bottom) },
  }
}
function zf(e) {
  return Array.isArray(e)
    ? new rl({ x: e[0], y: e[1], width: 0, height: 0 })
    : e.getBoundingClientRect()
}
function ls(e) {
  const t = e.getBoundingClientRect(),
    n = getComputedStyle(e),
    l = n.transform
  if (l) {
    let a, o, i, r, s
    if (l.startsWith('matrix3d('))
      (a = l.slice(9, -1).split(/, /)), (o = +a[0]), (i = +a[5]), (r = +a[12]), (s = +a[13])
    else if (l.startsWith('matrix('))
      (a = l.slice(7, -1).split(/, /)), (o = +a[0]), (i = +a[3]), (r = +a[4]), (s = +a[5])
    else return new rl(t)
    const c = n.transformOrigin,
      u = t.x - r - (1 - o) * parseFloat(c),
      d = t.y - s - (1 - i) * parseFloat(c.slice(c.indexOf(' ') + 1)),
      v = o ? t.width / o : e.offsetWidth + 1,
      m = i ? t.height / i : e.offsetHeight + 1
    return new rl({ x: u, y: d, width: v, height: m })
  } else return new rl(t)
}
function El(e, t, n) {
  if (typeof e.animate > 'u') return { finished: Promise.resolve() }
  let l
  try {
    l = e.animate(t, n)
  } catch {
    return { finished: Promise.resolve() }
  }
  return (
    typeof l.finished > 'u' &&
      (l.finished = new Promise((a) => {
        l.onfinish = () => {
          a(l)
        }
      })),
    l
  )
}
const oo = new WeakMap()
function ob(e, t) {
  Object.keys(t).forEach((n) => {
    if (Jr(n)) {
      const l = Nf(n),
        a = oo.get(e)
      if (t[n] == null)
        a == null ||
          a.forEach((o) => {
            const [i, r] = o
            i === l && (e.removeEventListener(l, r), a.delete(o))
          })
      else if (!a || ![...a].some((o) => o[0] === l && o[1] === t[n])) {
        e.addEventListener(l, t[n])
        const o = a || new Set()
        o.add([l, t[n]]), oo.has(e) || oo.set(e, o)
      }
    } else t[n] == null ? e.removeAttribute(n) : e.setAttribute(n, t[n])
  })
}
function ib(e, t) {
  Object.keys(t).forEach((n) => {
    if (Jr(n)) {
      const l = Nf(n),
        a = oo.get(e)
      a == null ||
        a.forEach((o) => {
          const [i, r] = o
          i === l && (e.removeEventListener(l, r), a.delete(o))
        })
    } else e.removeAttribute(n)
  })
}
const Sl = 2.4,
  Ku = 0.2126729,
  Gu = 0.7151522,
  Yu = 0.072175,
  rb = 0.55,
  sb = 0.58,
  ub = 0.57,
  cb = 0.62,
  Xa = 0.03,
  qu = 1.45,
  db = 5e-4,
  fb = 1.25,
  vb = 1.25,
  Xu = 0.078,
  Qu = 12.82051282051282,
  Qa = 0.06,
  Zu = 0.001
function Ju(e, t) {
  const n = (e.r / 255) ** Sl,
    l = (e.g / 255) ** Sl,
    a = (e.b / 255) ** Sl,
    o = (t.r / 255) ** Sl,
    i = (t.g / 255) ** Sl,
    r = (t.b / 255) ** Sl
  let s = n * Ku + l * Gu + a * Yu,
    c = o * Ku + i * Gu + r * Yu
  if ((s <= Xa && (s += (Xa - s) ** qu), c <= Xa && (c += (Xa - c) ** qu), Math.abs(c - s) < db))
    return 0
  let u
  if (c > s) {
    const d = (c ** rb - s ** sb) * fb
    u = d < Zu ? 0 : d < Xu ? d - d * Qu * Qa : d - Qa
  } else {
    const d = (c ** cb - s ** ub) * vb
    u = d > -Zu ? 0 : d > -Xu ? d - d * Qu * Qa : d + Qa
  }
  return u * 100
}
function mb(e, t) {
  t = Array.isArray(t)
    ? t
        .slice(0, -1)
        .map((n) => `'${n}'`)
        .join(', ') + ` or '${t.at(-1)}'`
    : `'${t}'`
}
const _o = 0.20689655172413793,
  hb = (e) => (e > _o ** 3 ? Math.cbrt(e) : e / (3 * _o ** 2) + 4 / 29),
  gb = (e) => (e > _o ? e ** 3 : 3 * _o ** 2 * (e - 4 / 29))
function Wf(e) {
  const t = hb,
    n = t(e[1])
  return [116 * n - 16, 500 * (t(e[0] / 0.95047) - n), 200 * (n - t(e[2] / 1.08883))]
}
function Uf(e) {
  const t = gb,
    n = (e[0] + 16) / 116
  return [t(n + e[1] / 500) * 0.95047, t(n), t(n - e[2] / 200) * 1.08883]
}
const yb = [
    [3.2406, -1.5372, -0.4986],
    [-0.9689, 1.8758, 0.0415],
    [0.0557, -0.204, 1.057],
  ],
  bb = (e) => (e <= 0.0031308 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055),
  pb = [
    [0.4124, 0.3576, 0.1805],
    [0.2126, 0.7152, 0.0722],
    [0.0193, 0.1192, 0.9505],
  ],
  Sb = (e) => (e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4)
function Kf(e) {
  const t = Array(3),
    n = bb,
    l = yb
  for (let a = 0; a < 3; ++a)
    t[a] = Math.round(dt(n(l[a][0] * e[0] + l[a][1] * e[1] + l[a][2] * e[2])) * 255)
  return { r: t[0], g: t[1], b: t[2] }
}
function as(e) {
  let { r: t, g: n, b: l } = e
  const a = [0, 0, 0],
    o = Sb,
    i = pb
  ;(t = o(t / 255)), (n = o(n / 255)), (l = o(l / 255))
  for (let r = 0; r < 3; ++r) a[r] = i[r][0] * t + i[r][1] * n + i[r][2] * l
  return a
}
function nr(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e)
}
function _b(e) {
  return nr(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e)
}
const ec = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,
  wb = {
    rgb: (e, t, n, l) => ({ r: e, g: t, b: n, a: l }),
    rgba: (e, t, n, l) => ({ r: e, g: t, b: n, a: l }),
    hsl: (e, t, n, l) => tc({ h: e, s: t, l: n, a: l }),
    hsla: (e, t, n, l) => tc({ h: e, s: t, l: n, a: l }),
    hsv: (e, t, n, l) => xn({ h: e, s: t, v: n, a: l }),
    hsva: (e, t, n, l) => xn({ h: e, s: t, v: n, a: l }),
  }
function Ut(e) {
  if (typeof e == 'number') return { r: (e & 16711680) >> 16, g: (e & 65280) >> 8, b: e & 255 }
  if (typeof e == 'string' && ec.test(e)) {
    const { groups: t } = e.match(ec),
      { fn: n, values: l } = t,
      a = l
        .split(/,\s*/)
        .map((o) =>
          o.endsWith('%') && ['hsl', 'hsla', 'hsv', 'hsva'].includes(n)
            ? parseFloat(o) / 100
            : parseFloat(o),
        )
    return wb[n](...a)
  } else if (typeof e == 'string') {
    let t = e.startsWith('#') ? e.slice(1) : e
    return (
      [3, 4].includes(t.length)
        ? (t = t
            .split('')
            .map((n) => n + n)
            .join(''))
        : [6, 8].includes(t.length),
      Qf(t)
    )
  } else if (typeof e == 'object') {
    if (ll(e, ['r', 'g', 'b'])) return e
    if (ll(e, ['h', 's', 'l'])) return xn(os(e))
    if (ll(e, ['h', 's', 'v'])) return xn(e)
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)
}
function xn(e) {
  const { h: t, s: n, v: l, a } = e,
    o = (r) => {
      const s = (r + t / 60) % 6
      return l - l * n * Math.max(Math.min(s, 4 - s, 1), 0)
    },
    i = [o(5), o(3), o(1)].map((r) => Math.round(r * 255))
  return { r: i[0], g: i[1], b: i[2], a }
}
function tc(e) {
  return xn(os(e))
}
function Uo(e) {
  if (!e) return { h: 0, s: 1, v: 1, a: 1 }
  const t = e.r / 255,
    n = e.g / 255,
    l = e.b / 255,
    a = Math.max(t, n, l),
    o = Math.min(t, n, l)
  let i = 0
  a !== o &&
    (a === t
      ? (i = 60 * (0 + (n - l) / (a - o)))
      : a === n
        ? (i = 60 * (2 + (l - t) / (a - o)))
        : a === l && (i = 60 * (4 + (t - n) / (a - o)))),
    i < 0 && (i = i + 360)
  const r = a === 0 ? 0 : (a - o) / a,
    s = [i, r, a]
  return { h: s[0], s: s[1], v: s[2], a: e.a }
}
function Gf(e) {
  const { h: t, s: n, v: l, a } = e,
    o = l - (l * n) / 2,
    i = o === 1 || o === 0 ? 0 : (l - o) / Math.min(o, 1 - o)
  return { h: t, s: i, l: o, a }
}
function os(e) {
  const { h: t, s: n, l, a } = e,
    o = l + n * Math.min(l, 1 - l),
    i = o === 0 ? 0 : 2 - (2 * l) / o
  return { h: t, s: i, v: o, a }
}
function Yf(e) {
  let { r: t, g: n, b: l, a } = e
  return a === void 0 ? `rgb(${t}, ${n}, ${l})` : `rgba(${t}, ${n}, ${l}, ${a})`
}
function qf(e) {
  return Yf(xn(e))
}
function Za(e) {
  const t = Math.round(e).toString(16)
  return ('00'.substr(0, 2 - t.length) + t).toUpperCase()
}
function Xf(e) {
  let { r: t, g: n, b: l, a } = e
  return `#${[Za(t), Za(n), Za(l), a !== void 0 ? Za(Math.round(a * 255)) : ''].join('')}`
}
function Qf(e) {
  e = Cb(e)
  let [t, n, l, a] = Zy(e, 2).map((o) => parseInt(o, 16))
  return (a = a === void 0 ? a : a / 255), { r: t, g: n, b: l, a }
}
function Zf(e) {
  const t = Qf(e)
  return Uo(t)
}
function Jf(e) {
  return Xf(xn(e))
}
function Cb(e) {
  return (
    e.startsWith('#') && (e = e.slice(1)),
    (e = e.replace(/([^0-9a-f])/gi, 'F')),
    (e.length === 3 || e.length === 4) &&
      (e = e
        .split('')
        .map((t) => t + t)
        .join('')),
    e.length !== 6 && (e = $u($u(e, 6), 8, 'F')),
    e
  )
}
function kb(e, t) {
  const n = Wf(as(e))
  return (n[0] = n[0] + t * 10), Kf(Uf(n))
}
function xb(e, t) {
  const n = Wf(as(e))
  return (n[0] = n[0] - t * 10), Kf(Uf(n))
}
function lr(e) {
  const t = Ut(e)
  return as(t)[1]
}
function Vb(e, t) {
  const n = lr(e),
    l = lr(t),
    a = Math.max(n, l),
    o = Math.min(n, l)
  return (a + 0.05) / (o + 0.05)
}
function ev(e) {
  const t = Math.abs(Ju(Ut(0), Ut(e)))
  return Math.abs(Ju(Ut(16777215), Ut(e))) > Math.min(t, 50) ? '#fff' : '#000'
}
function $(e, t) {
  return (n) =>
    Object.keys(e).reduce((l, a) => {
      const i =
        typeof e[a] == 'object' && e[a] != null && !Array.isArray(e[a]) ? e[a] : { type: e[a] }
      return (
        n && a in n ? (l[a] = { ...i, default: n[a] }) : (l[a] = i),
        t && !l[a].source && (l[a].source = t),
        l
      )
    }, {})
}
const ge = $(
  { class: [String, Array, Object], style: { type: [String, Array, Object], default: null } },
  'component',
)
function et(e, t) {
  const n = Yr()
  if (!n) throw new Error(`[Vuetify] ${e} must be called from inside a setup function`)
  return n
}
function bn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'composables'
  const t = et(e).type
  return il((t == null ? void 0 : t.aliasName) || (t == null ? void 0 : t.name))
}
let tv = 0,
  io = new WeakMap()
function $t() {
  const e = et('getUid')
  if (io.has(e)) return io.get(e)
  {
    const t = tv++
    return io.set(e, t), t
  }
}
$t.reset = () => {
  ;(tv = 0), (io = new WeakMap())
}
function Eb(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : et('injectSelf')
  const { provides: n } = t
  if (n && e in n) return n[e]
}
const Rl = Symbol.for('vuetify:defaults')
function Pb(e) {
  return H(e)
}
function is() {
  const e = Ie(Rl)
  if (!e) throw new Error('[Vuetify] Could not find defaults instance')
  return e
}
function Qt(e, t) {
  const n = is(),
    l = H(e),
    a = b(() => {
      if (nt(t == null ? void 0 : t.disabled)) return n.value
      const i = nt(t == null ? void 0 : t.scoped),
        r = nt(t == null ? void 0 : t.reset),
        s = nt(t == null ? void 0 : t.root)
      if (l.value == null && !(i || r || s)) return n.value
      let c = ht(l.value, { prev: n.value })
      if (i) return c
      if (r || s) {
        const u = Number(r || 1 / 0)
        for (let d = 0; d <= u && !(!c || !('prev' in c)); d++) c = c.prev
        return c && typeof s == 'string' && s in c && (c = ht(ht(c, { prev: c }), c[s])), c
      }
      return c.prev ? ht(c.prev, c) : c
    })
  return Ze(Rl, a), a
}
function Ab(e, t) {
  var n, l
  return (
    typeof ((n = e.props) == null ? void 0 : n[t]) < 'u' ||
    typeof ((l = e.props) == null ? void 0 : l[il(t)]) < 'u'
  )
}
function Ib() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = arguments.length > 1 ? arguments[1] : void 0,
    n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : is()
  const l = et('useDefaults')
  if (((t = t ?? l.type.name ?? l.type.__name), !t))
    throw new Error('[Vuetify] Could not determine component name')
  const a = b(() => {
      var s
      return (s = n.value) == null ? void 0 : s[e._as ?? t]
    }),
    o = new Proxy(e, {
      get(s, c) {
        var d, v, m, h, g, y, p
        const u = Reflect.get(s, c)
        return c === 'class' || c === 'style'
          ? [(d = a.value) == null ? void 0 : d[c], u].filter((_) => _ != null)
          : typeof c == 'string' && !Ab(l.vnode, c)
            ? ((v = a.value) == null ? void 0 : v[c]) !== void 0
              ? (m = a.value) == null
                ? void 0
                : m[c]
              : ((g = (h = n.value) == null ? void 0 : h.global) == null ? void 0 : g[c]) !== void 0
                ? (p = (y = n.value) == null ? void 0 : y.global) == null
                  ? void 0
                  : p[c]
                : u
            : u
      },
    }),
    i = ue()
  yt(() => {
    if (a.value) {
      const s = Object.entries(a.value).filter((c) => {
        let [u] = c
        return u.startsWith(u[0].toUpperCase())
      })
      i.value = s.length ? Object.fromEntries(s) : void 0
    } else i.value = void 0
  })
  function r() {
    const s = Eb(Rl, l)
    Ze(
      Rl,
      b(() =>
        i.value ? ht((s == null ? void 0 : s.value) ?? {}, i.value) : s == null ? void 0 : s.value,
      ),
    )
  }
  return { props: o, provideSubDefaults: r }
}
function un(e) {
  if (((e._setup = e._setup ?? e.setup), !e.name)) return e
  if (e._setup) {
    e.props = $(e.props ?? {}, e.name)()
    const t = Object.keys(e.props).filter((n) => n !== 'class' && n !== 'style')
    ;(e.filterProps = function (l) {
      return Mf(l, t)
    }),
      (e.props._as = String),
      (e.setup = function (l, a) {
        const o = is()
        if (!o.value) return e._setup(l, a)
        const { props: i, provideSubDefaults: r } = Ib(l, l._as ?? e.name, o),
          s = e._setup(i, a)
        return r(), s
      })
  }
  return e
}
function J() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0
  return (t) => (e ? un : at)(t)
}
function Ko(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'div',
    n = arguments.length > 2 ? arguments[2] : void 0
  return J()({
    name: n ?? En(It(e.replace(/__/g, '-'))),
    props: { tag: { type: String, default: t }, ...ge() },
    setup(l, a) {
      let { slots: o } = a
      return () => {
        var i
        return sn(
          l.tag,
          { class: [e, l.class], style: l.style },
          (i = o.default) == null ? void 0 : i.call(o),
        )
      }
    },
  })
}
function nv(e) {
  if (typeof e.getRootNode != 'function') {
    for (; e.parentNode; ) e = e.parentNode
    return e !== document ? null : document
  }
  const t = e.getRootNode()
  return t !== document && t.getRootNode({ composed: !0 }) !== document ? null : t
}
const wo = 'cubic-bezier(0.4, 0, 0.2, 1)',
  Tb = 'cubic-bezier(0.0, 0, 0.2, 1)',
  Ob = 'cubic-bezier(0.4, 0, 1, 1)'
function lv(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
  for (; e; ) {
    if (t ? Bb(e) : rs(e)) return e
    e = e.parentElement
  }
  return document.scrollingElement
}
function Co(e, t) {
  const n = []
  if (t && e && !t.contains(e)) return n
  for (; e && (rs(e) && n.push(e), e !== t); ) e = e.parentElement
  return n
}
function rs(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1
  const t = window.getComputedStyle(e)
  return t.overflowY === 'scroll' || (t.overflowY === 'auto' && e.scrollHeight > e.clientHeight)
}
function Bb(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1
  const t = window.getComputedStyle(e)
  return ['scroll', 'auto'].includes(t.overflowY)
}
function Lb(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === 'fixed') return !0
    e = e.offsetParent
  }
  return !1
}
function oe(e) {
  const t = et('useRender')
  t.render = e
}
function Ae(e, t, n) {
  let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (d) => d,
    a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (d) => d
  const o = et('useProxiedModel'),
    i = H(e[t] !== void 0 ? e[t] : n),
    r = il(t),
    c = b(
      r !== t
        ? () => {
            var d, v, m, h
            return (
              e[t],
              !!(
                (((d = o.vnode.props) != null && d.hasOwnProperty(t)) ||
                  ((v = o.vnode.props) != null && v.hasOwnProperty(r))) &&
                (((m = o.vnode.props) != null && m.hasOwnProperty(`onUpdate:${t}`)) ||
                  ((h = o.vnode.props) != null && h.hasOwnProperty(`onUpdate:${r}`)))
              )
            )
          }
        : () => {
            var d, v
            return (
              e[t],
              !!(
                (d = o.vnode.props) != null &&
                d.hasOwnProperty(t) &&
                (v = o.vnode.props) != null &&
                v.hasOwnProperty(`onUpdate:${t}`)
              )
            )
          },
    )
  Pt(
    () => !c.value,
    () => {
      me(
        () => e[t],
        (d) => {
          i.value = d
        },
      )
    },
  )
  const u = b({
    get() {
      const d = e[t]
      return l(c.value ? d : i.value)
    },
    set(d) {
      const v = a(d),
        m = we(c.value ? e[t] : i.value)
      m === v || l(m) === d || ((i.value = v), o == null || o.emit(`update:${t}`, v))
    },
  })
  return Object.defineProperty(u, 'externalValue', { get: () => (c.value ? e[t] : i.value) }), u
}
const Rb = {
    badge: 'Badge',
    open: 'Open',
    close: 'Close',
    dismiss: 'Dismiss',
    confirmEdit: { ok: 'OK', cancel: 'Cancel' },
    dataIterator: { noResultsText: 'No matching records found', loadingText: 'Loading items...' },
    dataTable: {
      itemsPerPageText: 'Rows per page:',
      ariaLabel: {
        sortDescending: 'Sorted descending.',
        sortAscending: 'Sorted ascending.',
        sortNone: 'Not sorted.',
        activateNone: 'Activate to remove sorting.',
        activateDescending: 'Activate to sort descending.',
        activateAscending: 'Activate to sort ascending.',
      },
      sortBy: 'Sort by',
    },
    dataFooter: {
      itemsPerPageText: 'Items per page:',
      itemsPerPageAll: 'All',
      nextPage: 'Next page',
      prevPage: 'Previous page',
      firstPage: 'First page',
      lastPage: 'Last page',
      pageText: '{0}-{1} of {2}',
    },
    dateRangeInput: { divider: 'to' },
    datePicker: {
      itemsSelected: '{0} selected',
      range: { title: 'Select dates', header: 'Enter dates' },
      title: 'Select date',
      header: 'Enter date',
      input: { placeholder: 'Enter date' },
    },
    noDataText: 'No data available',
    carousel: {
      prev: 'Previous visual',
      next: 'Next visual',
      ariaLabel: { delimiter: 'Carousel slide {0} of {1}' },
    },
    calendar: { moreEvents: '{0} more', today: 'Today' },
    input: {
      clear: 'Clear {0}',
      prependAction: '{0} prepended action',
      appendAction: '{0} appended action',
      otp: 'Please enter OTP character {0}',
    },
    fileInput: { counter: '{0} files', counterSize: '{0} files ({1} in total)' },
    fileUpload: { title: 'Drag and drop files here', divider: 'or', browse: 'Browse Files' },
    timePicker: { am: 'AM', pm: 'PM', title: 'Select Time' },
    pagination: {
      ariaLabel: {
        root: 'Pagination Navigation',
        next: 'Next page',
        previous: 'Previous page',
        page: 'Go to page {0}',
        currentPage: 'Page {0}, Current page',
        first: 'First page',
        last: 'Last page',
      },
    },
    stepper: { next: 'Next', prev: 'Previous' },
    rating: { ariaLabel: { item: 'Rating {0} of {1}' } },
    loading: 'Loading...',
    infiniteScroll: { loadMore: 'Load more', empty: 'No more' },
  },
  nc = '$vuetify.',
  lc = (e, t) => e.replace(/\{(\d+)\}/g, (n, l) => String(t[+l])),
  av = (e, t, n) =>
    function (l) {
      for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), i = 1; i < a; i++)
        o[i - 1] = arguments[i]
      if (!l.startsWith(nc)) return lc(l, o)
      const r = l.replace(nc, ''),
        s = e.value && n.value[e.value],
        c = t.value && n.value[t.value]
      let u = Xi(s, r, null)
      return (
        u || (`${l}${e.value}`, (u = Xi(c, r, null))),
        u || (u = l),
        typeof u != 'string' && (u = l),
        lc(u, o)
      )
    }
function ov(e, t) {
  return (n, l) => new Intl.NumberFormat([e.value, t.value], l).format(n)
}
function ki(e, t, n) {
  const l = Ae(e, t, e[t] ?? n.value)
  return (
    (l.value = e[t] ?? n.value),
    me(n, (a) => {
      e[t] == null && (l.value = n.value)
    }),
    l
  )
}
function iv(e) {
  return (t) => {
    const n = ki(t, 'locale', e.current),
      l = ki(t, 'fallback', e.fallback),
      a = ki(t, 'messages', e.messages)
    return {
      name: 'vuetify',
      current: n,
      fallback: l,
      messages: a,
      t: av(n, l, a),
      n: ov(n, l),
      provide: iv({ current: n, fallback: l, messages: a }),
    }
  }
}
function Fb(e) {
  const t = ue((e == null ? void 0 : e.locale) ?? 'en'),
    n = ue((e == null ? void 0 : e.fallback) ?? 'en'),
    l = H({ en: Rb, ...(e == null ? void 0 : e.messages) })
  return {
    name: 'vuetify',
    current: t,
    fallback: n,
    messages: l,
    t: av(t, n, l),
    n: ov(t, n),
    provide: iv({ current: t, fallback: n, messages: l }),
  }
}
const ko = Symbol.for('vuetify:locale')
function Mb(e) {
  return e.name != null
}
function Db(e) {
  const t =
      e != null && e.adapter && Mb(e == null ? void 0 : e.adapter)
        ? e == null
          ? void 0
          : e.adapter
        : Fb(e),
    n = Nb(t, e)
  return { ...t, ...n }
}
function Kn() {
  const e = Ie(ko)
  if (!e) throw new Error('[Vuetify] Could not find injected locale instance')
  return e
}
function $b() {
  return {
    af: !1,
    ar: !0,
    bg: !1,
    ca: !1,
    ckb: !1,
    cs: !1,
    de: !1,
    el: !1,
    en: !1,
    es: !1,
    et: !1,
    fa: !0,
    fi: !1,
    fr: !1,
    hr: !1,
    hu: !1,
    he: !0,
    id: !1,
    it: !1,
    ja: !1,
    km: !1,
    ko: !1,
    lv: !1,
    lt: !1,
    nl: !1,
    no: !1,
    pl: !1,
    pt: !1,
    ro: !1,
    ru: !1,
    sk: !1,
    sl: !1,
    srCyrl: !1,
    srLatn: !1,
    sv: !1,
    th: !1,
    tr: !1,
    az: !1,
    uk: !1,
    vi: !1,
    zhHans: !1,
    zhHant: !1,
  }
}
function Nb(e, t) {
  const n = H((t == null ? void 0 : t.rtl) ?? $b()),
    l = b(() => n.value[e.current.value] ?? !1)
  return { isRtl: l, rtl: n, rtlClasses: b(() => `v-locale--is-${l.value ? 'rtl' : 'ltr'}`) }
}
function ct() {
  const e = Ie(ko)
  if (!e) throw new Error('[Vuetify] Could not find injected rtl instance')
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses }
}
const Go = {
  '001': 1,
  AD: 1,
  AE: 6,
  AF: 6,
  AG: 0,
  AI: 1,
  AL: 1,
  AM: 1,
  AN: 1,
  AR: 1,
  AS: 0,
  AT: 1,
  AU: 1,
  AX: 1,
  AZ: 1,
  BA: 1,
  BD: 0,
  BE: 1,
  BG: 1,
  BH: 6,
  BM: 1,
  BN: 1,
  BR: 0,
  BS: 0,
  BT: 0,
  BW: 0,
  BY: 1,
  BZ: 0,
  CA: 0,
  CH: 1,
  CL: 1,
  CM: 1,
  CN: 1,
  CO: 0,
  CR: 1,
  CY: 1,
  CZ: 1,
  DE: 1,
  DJ: 6,
  DK: 1,
  DM: 0,
  DO: 0,
  DZ: 6,
  EC: 1,
  EE: 1,
  EG: 6,
  ES: 1,
  ET: 0,
  FI: 1,
  FJ: 1,
  FO: 1,
  FR: 1,
  GB: 1,
  'GB-alt-variant': 0,
  GE: 1,
  GF: 1,
  GP: 1,
  GR: 1,
  GT: 0,
  GU: 0,
  HK: 0,
  HN: 0,
  HR: 1,
  HU: 1,
  ID: 0,
  IE: 1,
  IL: 0,
  IN: 0,
  IQ: 6,
  IR: 6,
  IS: 1,
  IT: 1,
  JM: 0,
  JO: 6,
  JP: 0,
  KE: 0,
  KG: 1,
  KH: 0,
  KR: 0,
  KW: 6,
  KZ: 1,
  LA: 0,
  LB: 1,
  LI: 1,
  LK: 1,
  LT: 1,
  LU: 1,
  LV: 1,
  LY: 6,
  MC: 1,
  MD: 1,
  ME: 1,
  MH: 0,
  MK: 1,
  MM: 0,
  MN: 1,
  MO: 0,
  MQ: 1,
  MT: 0,
  MV: 5,
  MX: 0,
  MY: 1,
  MZ: 0,
  NI: 0,
  NL: 1,
  NO: 1,
  NP: 0,
  NZ: 1,
  OM: 6,
  PA: 0,
  PE: 0,
  PH: 0,
  PK: 0,
  PL: 1,
  PR: 0,
  PT: 0,
  PY: 0,
  QA: 6,
  RE: 1,
  RO: 1,
  RS: 1,
  RU: 1,
  SA: 0,
  SD: 6,
  SE: 1,
  SG: 0,
  SI: 1,
  SK: 1,
  SM: 1,
  SV: 0,
  SY: 6,
  TH: 0,
  TJ: 1,
  TM: 1,
  TR: 1,
  TT: 0,
  TW: 0,
  UA: 1,
  UM: 0,
  US: 0,
  UY: 1,
  UZ: 1,
  VA: 1,
  VE: 0,
  VI: 0,
  VN: 1,
  WS: 0,
  XK: 1,
  YE: 0,
  ZA: 0,
  ZW: 0,
}
function Hb(e, t, n) {
  const l = []
  let a = []
  const o = rv(e),
    i = sv(e),
    r = n ?? Go[t.slice(-2).toUpperCase()] ?? 0,
    s = (o.getDay() - r + 7) % 7,
    c = (i.getDay() - r + 7) % 7
  for (let u = 0; u < s; u++) {
    const d = new Date(o)
    d.setDate(d.getDate() - (s - u)), a.push(d)
  }
  for (let u = 1; u <= i.getDate(); u++) {
    const d = new Date(e.getFullYear(), e.getMonth(), u)
    a.push(d), a.length === 7 && (l.push(a), (a = []))
  }
  for (let u = 1; u < 7 - c; u++) {
    const d = new Date(i)
    d.setDate(d.getDate() + u), a.push(d)
  }
  return a.length > 0 && l.push(a), l
}
function jb(e, t, n) {
  const l = n ?? Go[t.slice(-2).toUpperCase()] ?? 0,
    a = new Date(e)
  for (; a.getDay() !== l; ) a.setDate(a.getDate() - 1)
  return a
}
function zb(e, t) {
  const n = new Date(e),
    l = ((Go[t.slice(-2).toUpperCase()] ?? 0) + 6) % 7
  for (; n.getDay() !== l; ) n.setDate(n.getDate() + 1)
  return n
}
function rv(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1)
}
function sv(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0)
}
function Wb(e) {
  const t = e.split('-').map(Number)
  return new Date(t[0], t[1] - 1, t[2])
}
const Ub = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/
function uv(e) {
  if (e == null) return new Date()
  if (e instanceof Date) return e
  if (typeof e == 'string') {
    let t
    if (Ub.test(e)) return Wb(e)
    if (((t = Date.parse(e)), !isNaN(t))) return new Date(t)
  }
  return null
}
const ac = new Date(2e3, 0, 2)
function Kb(e, t) {
  const n = t ?? Go[e.slice(-2).toUpperCase()] ?? 0
  return Qr(7).map((l) => {
    const a = new Date(ac)
    return (
      a.setDate(ac.getDate() + n + l), new Intl.DateTimeFormat(e, { weekday: 'narrow' }).format(a)
    )
  })
}
function Gb(e, t, n, l) {
  const a = uv(e) ?? new Date(),
    o = l == null ? void 0 : l[t]
  if (typeof o == 'function') return o(a, t, n)
  let i = {}
  switch (t) {
    case 'fullDate':
      i = { year: 'numeric', month: 'long', day: 'numeric' }
      break
    case 'fullDateWithWeekday':
      i = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      break
    case 'normalDate':
      const r = a.getDate(),
        s = new Intl.DateTimeFormat(n, { month: 'long' }).format(a)
      return `${r} ${s}`
    case 'normalDateWithWeekday':
      i = { weekday: 'short', day: 'numeric', month: 'short' }
      break
    case 'shortDate':
      i = { month: 'short', day: 'numeric' }
      break
    case 'year':
      i = { year: 'numeric' }
      break
    case 'month':
      i = { month: 'long' }
      break
    case 'monthShort':
      i = { month: 'short' }
      break
    case 'monthAndYear':
      i = { month: 'long', year: 'numeric' }
      break
    case 'monthAndDate':
      i = { month: 'long', day: 'numeric' }
      break
    case 'weekday':
      i = { weekday: 'long' }
      break
    case 'weekdayShort':
      i = { weekday: 'short' }
      break
    case 'dayOfMonth':
      return new Intl.NumberFormat(n).format(a.getDate())
    case 'hours12h':
      i = { hour: 'numeric', hour12: !0 }
      break
    case 'hours24h':
      i = { hour: 'numeric', hour12: !1 }
      break
    case 'minutes':
      i = { minute: 'numeric' }
      break
    case 'seconds':
      i = { second: 'numeric' }
      break
    case 'fullTime':
      i = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: !0 }
      break
    case 'fullTime12h':
      i = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: !0 }
      break
    case 'fullTime24h':
      i = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: !1 }
      break
    case 'fullDateTime':
      i = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: !0,
      }
      break
    case 'fullDateTime12h':
      i = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: !0,
      }
      break
    case 'fullDateTime24h':
      i = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: !1,
      }
      break
    case 'keyboardDate':
      i = { year: 'numeric', month: '2-digit', day: '2-digit' }
      break
    case 'keyboardDateTime':
      i = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: !1,
      }
      break
    case 'keyboardDateTime12h':
      i = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: !0,
      }
      break
    case 'keyboardDateTime24h':
      i = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: !1,
      }
      break
    default:
      i = o ?? { timeZone: 'UTC', timeZoneName: 'short' }
  }
  return new Intl.DateTimeFormat(n, i).format(a)
}
function Yb(e, t) {
  const n = e.toJsDate(t),
    l = n.getFullYear(),
    a = Nu(String(n.getMonth() + 1), 2, '0'),
    o = Nu(String(n.getDate()), 2, '0')
  return `${l}-${a}-${o}`
}
function qb(e) {
  const [t, n, l] = e.split('-').map(Number)
  return new Date(t, n - 1, l)
}
function Xb(e, t) {
  const n = new Date(e)
  return n.setMinutes(n.getMinutes() + t), n
}
function Qb(e, t) {
  const n = new Date(e)
  return n.setHours(n.getHours() + t), n
}
function Zb(e, t) {
  const n = new Date(e)
  return n.setDate(n.getDate() + t), n
}
function Jb(e, t) {
  const n = new Date(e)
  return n.setDate(n.getDate() + t * 7), n
}
function ep(e, t) {
  const n = new Date(e)
  return n.setDate(1), n.setMonth(n.getMonth() + t), n
}
function tp(e) {
  return e.getFullYear()
}
function np(e) {
  return e.getMonth()
}
function lp(e) {
  return e.getDate()
}
function ap(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 1)
}
function op(e) {
  return new Date(e.getFullYear(), e.getMonth() - 1, 1)
}
function ip(e) {
  return e.getHours()
}
function rp(e) {
  return e.getMinutes()
}
function sp(e) {
  return new Date(e.getFullYear(), 0, 1)
}
function up(e) {
  return new Date(e.getFullYear(), 11, 31)
}
function cp(e, t) {
  return xo(e, t[0]) && vp(e, t[1])
}
function dp(e) {
  const t = new Date(e)
  return t instanceof Date && !isNaN(t.getTime())
}
function xo(e, t) {
  return e.getTime() > t.getTime()
}
function fp(e, t) {
  return xo(ar(e), ar(t))
}
function vp(e, t) {
  return e.getTime() < t.getTime()
}
function oc(e, t) {
  return e.getTime() === t.getTime()
}
function mp(e, t) {
  return (
    e.getDate() === t.getDate() &&
    e.getMonth() === t.getMonth() &&
    e.getFullYear() === t.getFullYear()
  )
}
function hp(e, t) {
  return e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear()
}
function gp(e, t) {
  return e.getFullYear() === t.getFullYear()
}
function yp(e, t, n) {
  const l = new Date(e),
    a = new Date(t)
  switch (n) {
    case 'years':
      return l.getFullYear() - a.getFullYear()
    case 'quarters':
      return Math.floor(
        (l.getMonth() - a.getMonth() + (l.getFullYear() - a.getFullYear()) * 12) / 4,
      )
    case 'months':
      return l.getMonth() - a.getMonth() + (l.getFullYear() - a.getFullYear()) * 12
    case 'weeks':
      return Math.floor((l.getTime() - a.getTime()) / (1e3 * 60 * 60 * 24 * 7))
    case 'days':
      return Math.floor((l.getTime() - a.getTime()) / (1e3 * 60 * 60 * 24))
    case 'hours':
      return Math.floor((l.getTime() - a.getTime()) / (1e3 * 60 * 60))
    case 'minutes':
      return Math.floor((l.getTime() - a.getTime()) / (1e3 * 60))
    case 'seconds':
      return Math.floor((l.getTime() - a.getTime()) / 1e3)
    default:
      return l.getTime() - a.getTime()
  }
}
function bp(e, t) {
  const n = new Date(e)
  return n.setHours(t), n
}
function pp(e, t) {
  const n = new Date(e)
  return n.setMinutes(t), n
}
function Sp(e, t) {
  const n = new Date(e)
  return n.setMonth(t), n
}
function _p(e, t) {
  const n = new Date(e)
  return n.setDate(t), n
}
function wp(e, t) {
  const n = new Date(e)
  return n.setFullYear(t), n
}
function ar(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0)
}
function Cp(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59, 999)
}
class kp {
  constructor(t) {
    ;(this.locale = t.locale), (this.formats = t.formats)
  }
  date(t) {
    return uv(t)
  }
  toJsDate(t) {
    return t
  }
  toISO(t) {
    return Yb(this, t)
  }
  parseISO(t) {
    return qb(t)
  }
  addMinutes(t, n) {
    return Xb(t, n)
  }
  addHours(t, n) {
    return Qb(t, n)
  }
  addDays(t, n) {
    return Zb(t, n)
  }
  addWeeks(t, n) {
    return Jb(t, n)
  }
  addMonths(t, n) {
    return ep(t, n)
  }
  getWeekArray(t, n) {
    return Hb(t, this.locale, n ? Number(n) : void 0)
  }
  startOfWeek(t, n) {
    return jb(t, this.locale, n ? Number(n) : void 0)
  }
  endOfWeek(t) {
    return zb(t, this.locale)
  }
  startOfMonth(t) {
    return rv(t)
  }
  endOfMonth(t) {
    return sv(t)
  }
  format(t, n) {
    return Gb(t, n, this.locale, this.formats)
  }
  isEqual(t, n) {
    return oc(t, n)
  }
  isValid(t) {
    return dp(t)
  }
  isWithinRange(t, n) {
    return cp(t, n)
  }
  isAfter(t, n) {
    return xo(t, n)
  }
  isAfterDay(t, n) {
    return fp(t, n)
  }
  isBefore(t, n) {
    return !xo(t, n) && !oc(t, n)
  }
  isSameDay(t, n) {
    return mp(t, n)
  }
  isSameMonth(t, n) {
    return hp(t, n)
  }
  isSameYear(t, n) {
    return gp(t, n)
  }
  setMinutes(t, n) {
    return pp(t, n)
  }
  setHours(t, n) {
    return bp(t, n)
  }
  setMonth(t, n) {
    return Sp(t, n)
  }
  setDate(t, n) {
    return _p(t, n)
  }
  setYear(t, n) {
    return wp(t, n)
  }
  getDiff(t, n, l) {
    return yp(t, n, l)
  }
  getWeekdays(t) {
    return Kb(this.locale, t ? Number(t) : void 0)
  }
  getYear(t) {
    return tp(t)
  }
  getMonth(t) {
    return np(t)
  }
  getDate(t) {
    return lp(t)
  }
  getNextMonth(t) {
    return ap(t)
  }
  getPreviousMonth(t) {
    return op(t)
  }
  getHours(t) {
    return ip(t)
  }
  getMinutes(t) {
    return rp(t)
  }
  startOfDay(t) {
    return ar(t)
  }
  endOfDay(t) {
    return Cp(t)
  }
  startOfYear(t) {
    return sp(t)
  }
  endOfYear(t) {
    return up(t)
  }
}
const xp = Symbol.for('vuetify:date-options'),
  ic = Symbol.for('vuetify:date-adapter')
function Vp(e, t) {
  const n = ht(
    {
      adapter: kp,
      locale: {
        af: 'af-ZA',
        bg: 'bg-BG',
        ca: 'ca-ES',
        ckb: '',
        cs: 'cs-CZ',
        de: 'de-DE',
        el: 'el-GR',
        en: 'en-US',
        et: 'et-EE',
        fa: 'fa-IR',
        fi: 'fi-FI',
        hr: 'hr-HR',
        hu: 'hu-HU',
        he: 'he-IL',
        id: 'id-ID',
        it: 'it-IT',
        ja: 'ja-JP',
        ko: 'ko-KR',
        lv: 'lv-LV',
        lt: 'lt-LT',
        nl: 'nl-NL',
        no: 'no-NO',
        pl: 'pl-PL',
        pt: 'pt-PT',
        ro: 'ro-RO',
        ru: 'ru-RU',
        sk: 'sk-SK',
        sl: 'sl-SI',
        srCyrl: 'sr-SP',
        srLatn: 'sr-SP',
        sv: 'sv-SE',
        th: 'th-TH',
        tr: 'tr-TR',
        az: 'az-AZ',
        uk: 'uk-UA',
        vi: 'vi-VN',
        zhHans: 'zh-CN',
        zhHant: 'zh-TW',
      },
    },
    e,
  )
  return { options: n, instance: Ep(n, t) }
}
function Ep(e, t) {
  const n = rt(
    typeof e.adapter == 'function'
      ? new e.adapter({ locale: e.locale[t.current.value] ?? t.current.value, formats: e.formats })
      : e.adapter,
  )
  return (
    me(t.current, (l) => {
      n.locale = e.locale[l] ?? l ?? n.locale
    }),
    n
  )
}
const Yo = ['sm', 'md', 'lg', 'xl', 'xxl'],
  or = Symbol.for('vuetify:display'),
  rc = {
    mobileBreakpoint: 'lg',
    thresholds: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920, xxl: 2560 },
  },
  Pp = function () {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : rc
    return ht(rc, e)
  }
function sc(e) {
  return Be && !e ? window.innerWidth : (typeof e == 'object' && e.clientWidth) || 0
}
function uc(e) {
  return Be && !e ? window.innerHeight : (typeof e == 'object' && e.clientHeight) || 0
}
function cc(e) {
  const t = Be && !e ? window.navigator.userAgent : 'ssr'
  function n(h) {
    return !!t.match(h)
  }
  const l = n(/android/i),
    a = n(/iphone|ipad|ipod/i),
    o = n(/cordova/i),
    i = n(/electron/i),
    r = n(/chrome/i),
    s = n(/edge/i),
    c = n(/firefox/i),
    u = n(/opera/i),
    d = n(/win/i),
    v = n(/mac/i),
    m = n(/linux/i)
  return {
    android: l,
    ios: a,
    cordova: o,
    electron: i,
    chrome: r,
    edge: s,
    firefox: c,
    opera: u,
    win: d,
    mac: v,
    linux: m,
    touch: Ky,
    ssr: t === 'ssr',
  }
}
function Ap(e, t) {
  const { thresholds: n, mobileBreakpoint: l } = Pp(e),
    a = ue(uc(t)),
    o = ue(cc(t)),
    i = rt({}),
    r = ue(sc(t))
  function s() {
    ;(a.value = uc()), (r.value = sc())
  }
  function c() {
    s(), (o.value = cc())
  }
  return (
    yt(() => {
      const u = r.value < n.sm,
        d = r.value < n.md && !u,
        v = r.value < n.lg && !(d || u),
        m = r.value < n.xl && !(v || d || u),
        h = r.value < n.xxl && !(m || v || d || u),
        g = r.value >= n.xxl,
        y = u ? 'xs' : d ? 'sm' : v ? 'md' : m ? 'lg' : h ? 'xl' : 'xxl',
        p = typeof l == 'number' ? l : n[l],
        _ = r.value < p
      ;(i.xs = u),
        (i.sm = d),
        (i.md = v),
        (i.lg = m),
        (i.xl = h),
        (i.xxl = g),
        (i.smAndUp = !u),
        (i.mdAndUp = !(u || d)),
        (i.lgAndUp = !(u || d || v)),
        (i.xlAndUp = !(u || d || v || m)),
        (i.smAndDown = !(v || m || h || g)),
        (i.mdAndDown = !(m || h || g)),
        (i.lgAndDown = !(h || g)),
        (i.xlAndDown = !g),
        (i.name = y),
        (i.height = a.value),
        (i.width = r.value),
        (i.mobile = _),
        (i.mobileBreakpoint = l),
        (i.platform = o.value),
        (i.thresholds = n)
    }),
    Be && window.addEventListener('resize', s, { passive: !0 }),
    { ...Ba(i), update: c, ssr: !!t }
  )
}
const ss = $(
  { mobile: { type: Boolean, default: !1 }, mobileBreakpoint: [Number, String] },
  'display',
)
function $a() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : bn()
  const n = Ie(or)
  if (!n) throw new Error('Could not find Vuetify display injection')
  const l = b(() => {
      if (e.mobile != null) return e.mobile
      if (!e.mobileBreakpoint) return n.mobile.value
      const o =
        typeof e.mobileBreakpoint == 'number'
          ? e.mobileBreakpoint
          : n.thresholds.value[e.mobileBreakpoint]
      return n.width.value < o
    }),
    a = b(() => (t ? { [`${t}--mobile`]: l.value } : {}))
  return { ...n, displayClasses: a, mobile: l }
}
const cv = Symbol.for('vuetify:goto')
function dv() {
  return {
    container: void 0,
    duration: 300,
    layout: !1,
    offset: 0,
    easing: 'easeInOutCubic',
    patterns: {
      linear: (e) => e,
      easeInQuad: (e) => e ** 2,
      easeOutQuad: (e) => e * (2 - e),
      easeInOutQuad: (e) => (e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e),
      easeInCubic: (e) => e ** 3,
      easeOutCubic: (e) => (--e) ** 3 + 1,
      easeInOutCubic: (e) => (e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
      easeInQuart: (e) => e ** 4,
      easeOutQuart: (e) => 1 - (--e) ** 4,
      easeInOutQuart: (e) => (e < 0.5 ? 8 * e ** 4 : 1 - 8 * (--e) ** 4),
      easeInQuint: (e) => e ** 5,
      easeOutQuint: (e) => 1 + (--e) ** 5,
      easeInOutQuint: (e) => (e < 0.5 ? 16 * e ** 5 : 1 + 16 * (--e) ** 5),
    },
  }
}
function Ip(e) {
  return us(e) ?? (document.scrollingElement || document.body)
}
function us(e) {
  return typeof e == 'string' ? document.querySelector(e) : Rf(e)
}
function xi(e, t, n) {
  if (typeof e == 'number') return t && n ? -e : e
  let l = us(e),
    a = 0
  for (; l; ) (a += t ? l.offsetLeft : l.offsetTop), (l = l.offsetParent)
  return a
}
function Tp(e, t) {
  return { rtl: t.isRtl, options: ht(dv(), e) }
}
async function dc(e, t, n, l) {
  const a = n ? 'scrollLeft' : 'scrollTop',
    o = ht((l == null ? void 0 : l.options) ?? dv(), t),
    i = l == null ? void 0 : l.rtl.value,
    r = (typeof e == 'number' ? e : us(e)) ?? 0,
    s = o.container === 'parent' && r instanceof HTMLElement ? r.parentElement : Ip(o.container),
    c = typeof o.easing == 'function' ? o.easing : o.patterns[o.easing]
  if (!c) throw new TypeError(`Easing function "${o.easing}" not found.`)
  let u
  if (typeof r == 'number') u = xi(r, n, i)
  else if (((u = xi(r, n, i) - xi(s, n, i)), o.layout)) {
    const h = window.getComputedStyle(r).getPropertyValue('--v-layout-top')
    h && (u -= parseInt(h, 10))
  }
  ;(u += o.offset), (u = Bp(s, u, !!i, !!n))
  const d = s[a] ?? 0
  if (u === d) return Promise.resolve(u)
  const v = performance.now()
  return new Promise((m) =>
    requestAnimationFrame(function h(g) {
      const p = (g - v) / o.duration,
        _ = Math.floor(d + (u - d) * c(dt(p, 0, 1)))
      if (((s[a] = _), p >= 1 && Math.abs(_ - s[a]) < 10)) return m(u)
      if (p > 2) return m(s[a])
      requestAnimationFrame(h)
    }),
  )
}
function Op() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
  const t = Ie(cv),
    { isRtl: n } = ct()
  if (!t) throw new Error('[Vuetify] Could not find injected goto instance')
  const l = { ...t, rtl: b(() => t.rtl.value || n.value) }
  async function a(o, i) {
    return dc(o, ht(e, i), !1, l)
  }
  return (a.horizontal = async (o, i) => dc(o, ht(e, i), !0, l)), a
}
function Bp(e, t, n, l) {
  const { scrollWidth: a, scrollHeight: o } = e,
    [i, r] =
      e === document.scrollingElement
        ? [window.innerWidth, window.innerHeight]
        : [e.offsetWidth, e.offsetHeight]
  let s, c
  return (
    l ? (n ? ((s = -(a - i)), (c = 0)) : ((s = 0), (c = a - i))) : ((s = 0), (c = o + -r)),
    Math.max(Math.min(t, c), s)
  )
}
const fv = {
    collapse: 'mdi-chevron-up',
    complete: 'mdi-check',
    cancel: 'mdi-close-circle',
    close: 'mdi-close',
    delete: 'mdi-close-circle',
    clear: 'mdi-close-circle',
    success: 'mdi-check-circle',
    info: 'mdi-information',
    warning: 'mdi-alert-circle',
    error: 'mdi-close-circle',
    prev: 'mdi-chevron-left',
    next: 'mdi-chevron-right',
    checkboxOn: 'mdi-checkbox-marked',
    checkboxOff: 'mdi-checkbox-blank-outline',
    checkboxIndeterminate: 'mdi-minus-box',
    delimiter: 'mdi-circle',
    sortAsc: 'mdi-arrow-up',
    sortDesc: 'mdi-arrow-down',
    expand: 'mdi-chevron-down',
    menu: 'mdi-menu',
    subgroup: 'mdi-menu-down',
    dropdown: 'mdi-menu-down',
    radioOn: 'mdi-radiobox-marked',
    radioOff: 'mdi-radiobox-blank',
    edit: 'mdi-pencil',
    ratingEmpty: 'mdi-star-outline',
    ratingFull: 'mdi-star',
    ratingHalf: 'mdi-star-half-full',
    loading: 'mdi-cached',
    first: 'mdi-page-first',
    last: 'mdi-page-last',
    unfold: 'mdi-unfold-more-horizontal',
    file: 'mdi-paperclip',
    plus: 'mdi-plus',
    minus: 'mdi-minus',
    calendar: 'mdi-calendar',
    treeviewCollapse: 'mdi-menu-down',
    treeviewExpand: 'mdi-menu-right',
    eyeDropper: 'mdi-eyedropper',
    upload: 'mdi-cloud-upload',
  },
  vv = { component: (e) => sn(cs, { ...e, class: 'mdi' }) },
  Ee = [String, Function, Object, Array],
  ir = Symbol.for('vuetify:icons'),
  qo = $({ icon: { type: Ee }, tag: { type: String, required: !0 } }, 'icon'),
  fc = J()({
    name: 'VComponentIcon',
    props: qo(),
    setup(e, t) {
      let { slots: n } = t
      return () => {
        const l = e.icon
        return f(e.tag, null, {
          default: () => {
            var a
            return [e.icon ? f(l, null, null) : (a = n.default) == null ? void 0 : a.call(n)]
          },
        })
      }
    },
  }),
  mv = un({
    name: 'VSvgIcon',
    inheritAttrs: !1,
    props: qo(),
    setup(e, t) {
      let { attrs: n } = t
      return () =>
        f(e.tag, ve(n, { style: null }), {
          default: () => [
            f(
              'svg',
              {
                class: 'v-icon__svg',
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                role: 'img',
                'aria-hidden': 'true',
              },
              [
                Array.isArray(e.icon)
                  ? e.icon.map((l) =>
                      Array.isArray(l)
                        ? f('path', { d: l[0], 'fill-opacity': l[1] }, null)
                        : f('path', { d: l }, null),
                    )
                  : f('path', { d: e.icon }, null),
              ],
            ),
          ],
        })
    },
  }),
  Lp = un({
    name: 'VLigatureIcon',
    props: qo(),
    setup(e) {
      return () => f(e.tag, null, { default: () => [e.icon] })
    },
  }),
  cs = un({
    name: 'VClassIcon',
    props: qo(),
    setup(e) {
      return () => f(e.tag, { class: e.icon }, null)
    },
  })
function Rp() {
  return { svg: { component: mv }, class: { component: cs } }
}
function Fp(e) {
  const t = Rp(),
    n = (e == null ? void 0 : e.defaultSet) ?? 'mdi'
  return (
    n === 'mdi' && !t.mdi && (t.mdi = vv),
    ht(
      {
        defaultSet: n,
        sets: t,
        aliases: {
          ...fv,
          vuetify: [
            'M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z',
            [
              'M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z',
              0.6,
            ],
          ],
          'vuetify-outline':
            'svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z',
          'vuetify-play': [
            'm6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z',
            [
              'M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z',
              0.6,
            ],
          ],
        },
      },
      e,
    )
  )
}
const Mp = (e) => {
    const t = Ie(ir)
    if (!t) throw new Error('Missing Vuetify Icons provide!')
    return {
      iconData: b(() => {
        var s
        const l = nt(e)
        if (!l) return { component: fc }
        let a = l
        if (
          (typeof a == 'string' &&
            ((a = a.trim()),
            a.startsWith('$') && (a = (s = t.aliases) == null ? void 0 : s[a.slice(1)])),
          Array.isArray(a))
        )
          return { component: mv, icon: a }
        if (typeof a != 'string') return { component: fc, icon: a }
        const o = Object.keys(t.sets).find((c) => typeof a == 'string' && a.startsWith(`${c}:`)),
          i = o ? a.slice(o.length + 1) : a
        return { component: t.sets[o ?? t.defaultSet].component, icon: i }
      }),
    }
  },
  wa = Symbol.for('vuetify:theme'),
  $e = $({ theme: String }, 'theme')
function vc() {
  return {
    defaultTheme: 'light',
    variations: { colors: [], lighten: 0, darken: 0 },
    themes: {
      light: {
        dark: !1,
        colors: {
          background: '#FFFFFF',
          surface: '#FFFFFF',
          'surface-bright': '#FFFFFF',
          'surface-light': '#EEEEEE',
          'surface-variant': '#424242',
          'on-surface-variant': '#EEEEEE',
          primary: '#1867C0',
          'primary-darken-1': '#1F5592',
          secondary: '#48A9A6',
          'secondary-darken-1': '#018786',
          error: '#B00020',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
        },
        variables: {
          'border-color': '#000000',
          'border-opacity': 0.12,
          'high-emphasis-opacity': 0.87,
          'medium-emphasis-opacity': 0.6,
          'disabled-opacity': 0.38,
          'idle-opacity': 0.04,
          'hover-opacity': 0.04,
          'focus-opacity': 0.12,
          'selected-opacity': 0.08,
          'activated-opacity': 0.12,
          'pressed-opacity': 0.12,
          'dragged-opacity': 0.08,
          'theme-kbd': '#212529',
          'theme-on-kbd': '#FFFFFF',
          'theme-code': '#F5F5F5',
          'theme-on-code': '#000000',
        },
      },
      dark: {
        dark: !0,
        colors: {
          background: '#121212',
          surface: '#212121',
          'surface-bright': '#ccbfd6',
          'surface-light': '#424242',
          'surface-variant': '#a3a3a3',
          'on-surface-variant': '#424242',
          primary: '#2196F3',
          'primary-darken-1': '#277CC1',
          secondary: '#54B6B2',
          'secondary-darken-1': '#48A9A6',
          error: '#CF6679',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
        },
        variables: {
          'border-color': '#FFFFFF',
          'border-opacity': 0.12,
          'high-emphasis-opacity': 1,
          'medium-emphasis-opacity': 0.7,
          'disabled-opacity': 0.5,
          'idle-opacity': 0.1,
          'hover-opacity': 0.04,
          'focus-opacity': 0.12,
          'selected-opacity': 0.08,
          'activated-opacity': 0.12,
          'pressed-opacity': 0.16,
          'dragged-opacity': 0.08,
          'theme-kbd': '#212529',
          'theme-on-kbd': '#FFFFFF',
          'theme-code': '#343434',
          'theme-on-code': '#CCCCCC',
        },
      },
    },
  }
}
function Dp() {
  var l, a
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : vc()
  const t = vc()
  if (!e) return { ...t, isDisabled: !0 }
  const n = {}
  for (const [o, i] of Object.entries(e.themes ?? {})) {
    const r =
      i.dark || o === 'dark'
        ? (l = t.themes) == null
          ? void 0
          : l.dark
        : (a = t.themes) == null
          ? void 0
          : a.light
    n[o] = ht(r, i)
  }
  return ht(t, { ...e, themes: n })
}
function $p(e) {
  const t = Dp(e),
    n = H(t.defaultTheme),
    l = H(t.themes),
    a = b(() => {
      const u = {}
      for (const [d, v] of Object.entries(l.value)) {
        const m = (u[d] = { ...v, colors: { ...v.colors } })
        if (t.variations)
          for (const h of t.variations.colors) {
            const g = m.colors[h]
            if (g)
              for (const y of ['lighten', 'darken']) {
                const p = y === 'lighten' ? kb : xb
                for (const _ of Qr(t.variations[y], 1)) m.colors[`${h}-${y}-${_}`] = Xf(p(Ut(g), _))
              }
          }
        for (const h of Object.keys(m.colors)) {
          if (/^on-[a-z]/.test(h) || m.colors[`on-${h}`]) continue
          const g = `on-${h}`,
            y = Ut(m.colors[h])
          m.colors[g] = ev(y)
        }
      }
      return u
    }),
    o = b(() => a.value[n.value]),
    i = b(() => {
      var h
      const u = []
      ;(h = o.value) != null && h.dark && el(u, ':root', ['color-scheme: dark']),
        el(u, ':root', mc(o.value))
      for (const [g, y] of Object.entries(a.value))
        el(u, `.v-theme--${g}`, [`color-scheme: ${y.dark ? 'dark' : 'normal'}`, ...mc(y)])
      const d = [],
        v = [],
        m = new Set(Object.values(a.value).flatMap((g) => Object.keys(g.colors)))
      for (const g of m)
        /^on-[a-z]/.test(g)
          ? el(v, `.${g}`, [`color: rgb(var(--v-theme-${g})) !important`])
          : (el(d, `.bg-${g}`, [
              `--v-theme-overlay-multiplier: var(--v-theme-${g}-overlay-multiplier)`,
              `background-color: rgb(var(--v-theme-${g})) !important`,
              `color: rgb(var(--v-theme-on-${g})) !important`,
            ]),
            el(v, `.text-${g}`, [`color: rgb(var(--v-theme-${g})) !important`]),
            el(v, `.border-${g}`, [`--v-border-color: var(--v-theme-${g})`]))
      return u.push(...d, ...v), u.map((g, y) => (y === 0 ? g : `    ${g}`)).join('')
    })
  function r() {
    return {
      style: [{ children: i.value, id: 'vuetify-theme-stylesheet', nonce: t.cspNonce || !1 }],
    }
  }
  function s(u) {
    if (t.isDisabled) return
    const d = u._context.provides.usehead
    if (d)
      if (d.push) {
        const v = d.push(r)
        Be &&
          me(i, () => {
            v.patch(r)
          })
      } else Be ? (d.addHeadObjs(b(r)), yt(() => d.updateDOM())) : d.addHeadObjs(r())
    else {
      let m = function () {
          if (typeof document < 'u' && !v) {
            const h = document.createElement('style')
            ;(h.type = 'text/css'),
              (h.id = 'vuetify-theme-stylesheet'),
              t.cspNonce && h.setAttribute('nonce', t.cspNonce),
              (v = h),
              document.head.appendChild(v)
          }
          v && (v.innerHTML = i.value)
        },
        v = Be ? document.getElementById('vuetify-theme-stylesheet') : null
      Be ? me(i, m, { immediate: !0 }) : m()
    }
  }
  const c = b(() => (t.isDisabled ? void 0 : `v-theme--${n.value}`))
  return {
    install: s,
    isDisabled: t.isDisabled,
    name: n,
    themes: l,
    current: o,
    computedThemes: a,
    themeClasses: c,
    styles: i,
    global: { name: n, current: o },
  }
}
function qe(e) {
  et('provideTheme')
  const t = Ie(wa, null)
  if (!t) throw new Error('Could not find Vuetify theme injection')
  const n = b(() => e.theme ?? t.name.value),
    l = b(() => t.themes.value[n.value]),
    a = b(() => (t.isDisabled ? void 0 : `v-theme--${n.value}`)),
    o = { ...t, name: n, current: l, themeClasses: a }
  return Ze(wa, o), o
}
function hv() {
  et('useTheme')
  const e = Ie(wa, null)
  if (!e) throw new Error('Could not find Vuetify theme injection')
  return e
}
function el(e, t, n) {
  e.push(
    `${t} {
`,
    ...n.map(
      (l) => `  ${l};
`,
    ),
    `}
`,
  )
}
function mc(e) {
  const t = e.dark ? 2 : 1,
    n = e.dark ? 1 : 2,
    l = []
  for (const [a, o] of Object.entries(e.colors)) {
    const i = Ut(o)
    l.push(`--v-theme-${a}: ${i.r},${i.g},${i.b}`),
      a.startsWith('on-') || l.push(`--v-theme-${a}-overlay-multiplier: ${lr(o) > 0.18 ? t : n}`)
  }
  for (const [a, o] of Object.entries(e.variables)) {
    const i = typeof o == 'string' && o.startsWith('#') ? Ut(o) : void 0,
      r = i ? `${i.r}, ${i.g}, ${i.b}` : void 0
    l.push(`--v-${a}: ${r ?? o}`)
  }
  return l
}
function Vn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'content'
  const n = Zi(),
    l = H()
  if (Be) {
    const a = new ResizeObserver((o) => {
      e == null || e(o, a),
        o.length &&
          (t === 'content'
            ? (l.value = o[0].contentRect)
            : (l.value = o[0].target.getBoundingClientRect()))
    })
    ut(() => {
      a.disconnect()
    }),
      me(
        () => n.el,
        (o, i) => {
          i && (a.unobserve(i), (l.value = void 0)), o && a.observe(o)
        },
        { flush: 'post' },
      )
  }
  return { resizeRef: n, contentRect: Oa(l) }
}
const Vo = Symbol.for('vuetify:layout'),
  gv = Symbol.for('vuetify:layout-item'),
  hc = 1e3,
  yv = $({ overlaps: { type: Array, default: () => [] }, fullHeight: Boolean }, 'layout'),
  Nl = $(
    { name: { type: String }, order: { type: [Number, String], default: 0 }, absolute: Boolean },
    'layout-item',
  )
function Np() {
  const e = Ie(Vo)
  if (!e) throw new Error('[Vuetify] Could not find injected layout')
  return { getLayoutItem: e.getLayoutItem, mainRect: e.mainRect, mainStyles: e.mainStyles }
}
function Hl(e) {
  const t = Ie(Vo)
  if (!t) throw new Error('[Vuetify] Could not find injected layout')
  const n = e.id ?? `layout-item-${$t()}`,
    l = et('useLayoutItem')
  Ze(gv, { id: n })
  const a = ue(!1)
  Dr(() => (a.value = !0)), Xd(() => (a.value = !1))
  const { layoutItemStyles: o, layoutItemScrimStyles: i } = t.register(l, {
    ...e,
    active: b(() => (a.value ? !1 : e.active.value)),
    id: n,
  })
  return (
    ut(() => t.unregister(n)),
    { layoutItemStyles: o, layoutRect: t.layoutRect, layoutItemScrimStyles: i }
  )
}
const Hp = (e, t, n, l) => {
  let a = { top: 0, left: 0, right: 0, bottom: 0 }
  const o = [{ id: '', layer: { ...a } }]
  for (const i of e) {
    const r = t.get(i),
      s = n.get(i),
      c = l.get(i)
    if (!r || !s || !c) continue
    const u = { ...a, [r.value]: parseInt(a[r.value], 10) + (c.value ? parseInt(s.value, 10) : 0) }
    o.push({ id: i, layer: u }), (a = u)
  }
  return o
}
function bv(e) {
  const t = Ie(Vo, null),
    n = b(() => (t ? t.rootZIndex.value - 100 : hc)),
    l = H([]),
    a = rt(new Map()),
    o = rt(new Map()),
    i = rt(new Map()),
    r = rt(new Map()),
    s = rt(new Map()),
    { resizeRef: c, contentRect: u } = Vn(),
    d = b(() => {
      const P = new Map(),
        A = e.overlaps ?? []
      for (const V of A.filter((x) => x.includes(':'))) {
        const [x, O] = V.split(':')
        if (!l.value.includes(x) || !l.value.includes(O)) continue
        const T = a.get(x),
          E = a.get(O),
          R = o.get(x),
          N = o.get(O)
        !T ||
          !E ||
          !R ||
          !N ||
          (P.set(O, { position: T.value, amount: parseInt(R.value, 10) }),
          P.set(x, { position: E.value, amount: -parseInt(N.value, 10) }))
      }
      return P
    }),
    v = b(() => {
      const P = [...new Set([...i.values()].map((V) => V.value))].sort((V, x) => V - x),
        A = []
      for (const V of P) {
        const x = l.value.filter((O) => {
          var T
          return ((T = i.get(O)) == null ? void 0 : T.value) === V
        })
        A.push(...x)
      }
      return Hp(A, a, o, r)
    }),
    m = b(() => !Array.from(s.values()).some((P) => P.value)),
    h = b(() => v.value[v.value.length - 1].layer),
    g = b(() => ({
      '--v-layout-left': he(h.value.left),
      '--v-layout-right': he(h.value.right),
      '--v-layout-top': he(h.value.top),
      '--v-layout-bottom': he(h.value.bottom),
      ...(m.value ? void 0 : { transition: 'none' }),
    })),
    y = b(() =>
      v.value.slice(1).map((P, A) => {
        let { id: V } = P
        const { layer: x } = v.value[A],
          O = o.get(V),
          T = a.get(V)
        return { id: V, ...x, size: Number(O.value), position: T.value }
      }),
    ),
    p = (P) => y.value.find((A) => A.id === P),
    _ = et('createLayout'),
    C = ue(!1)
  Vt(() => {
    C.value = !0
  }),
    Ze(Vo, {
      register: (P, A) => {
        let {
          id: V,
          order: x,
          position: O,
          layoutSize: T,
          elementSize: E,
          active: R,
          disableTransitions: N,
          absolute: q,
        } = A
        i.set(V, x), a.set(V, O), o.set(V, T), r.set(V, R), N && s.set(V, N)
        const ee = Vl(gv, _ == null ? void 0 : _.vnode).indexOf(P)
        ee > -1 ? l.value.splice(ee, 0, V) : l.value.push(V)
        const X = b(() => y.value.findIndex((ne) => ne.id === V)),
          U = b(() => n.value + v.value.length * 2 - X.value * 2),
          F = b(() => {
            const ne = O.value === 'left' || O.value === 'right',
              be = O.value === 'right',
              ie = O.value === 'bottom',
              pe = E.value ?? T.value,
              j = pe === 0 ? '%' : 'px',
              L = {
                [O.value]: 0,
                zIndex: U.value,
                transform: `translate${ne ? 'X' : 'Y'}(${(R.value ? 0 : -(pe === 0 ? 100 : pe)) * (be || ie ? -1 : 1)}${j})`,
                position: q.value || n.value !== hc ? 'absolute' : 'fixed',
                ...(m.value ? void 0 : { transition: 'none' }),
              }
            if (!C.value) return L
            const Y = y.value[X.value]
            if (!Y) throw new Error(`[Vuetify] Could not find layout item "${V}"`)
            const Z = d.value.get(V)
            return (
              Z && (Y[Z.position] += Z.amount),
              {
                ...L,
                height: ne
                  ? `calc(100% - ${Y.top}px - ${Y.bottom}px)`
                  : E.value
                    ? `${E.value}px`
                    : void 0,
                left: be ? void 0 : `${Y.left}px`,
                right: be ? `${Y.right}px` : void 0,
                top: O.value !== 'bottom' ? `${Y.top}px` : void 0,
                bottom: O.value !== 'top' ? `${Y.bottom}px` : void 0,
                width: ne
                  ? E.value
                    ? `${E.value}px`
                    : void 0
                  : `calc(100% - ${Y.left}px - ${Y.right}px)`,
              }
            )
          }),
          M = b(() => ({ zIndex: U.value - 1 }))
        return { layoutItemStyles: F, layoutItemScrimStyles: M, zIndex: U }
      },
      unregister: (P) => {
        i.delete(P),
          a.delete(P),
          o.delete(P),
          r.delete(P),
          s.delete(P),
          (l.value = l.value.filter((A) => A !== P))
      },
      mainRect: h,
      mainStyles: g,
      getLayoutItem: p,
      items: y,
      layoutRect: u,
      rootZIndex: n,
    })
  const k = b(() => ['v-layout', { 'v-layout--full-height': e.fullHeight }]),
    I = b(() => ({
      zIndex: t ? n.value : void 0,
      position: t ? 'relative' : void 0,
      overflow: t ? 'hidden' : void 0,
    }))
  return {
    layoutClasses: k,
    layoutStyles: I,
    getLayoutItem: p,
    items: y,
    layoutRect: u,
    layoutRef: c,
  }
}
function pv() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
  const { blueprint: t, ...n } = e,
    l = ht(t, n),
    { aliases: a = {}, components: o = {}, directives: i = {} } = l,
    r = Pb(l.defaults),
    s = Ap(l.display, l.ssr),
    c = $p(l.theme),
    u = Fp(l.icons),
    d = Db(l.locale),
    v = Vp(l.date, d),
    m = Tp(l.goTo, d)
  return {
    install: (g) => {
      for (const y in i) g.directive(y, i[y])
      for (const y in o) g.component(y, o[y])
      for (const y in a) g.component(y, un({ ...a[y], name: y, aliasName: a[y].name }))
      if (
        (c.install(g),
        g.provide(Rl, r),
        g.provide(or, s),
        g.provide(wa, c),
        g.provide(ir, u),
        g.provide(ko, d),
        g.provide(xp, v.options),
        g.provide(ic, v.instance),
        g.provide(cv, m),
        Be && l.ssr)
      )
        if (g.$nuxt)
          g.$nuxt.hook('app:suspense:resolve', () => {
            s.update()
          })
        else {
          const { mount: y } = g
          g.mount = function () {
            const p = y(...arguments)
            return Ke(() => s.update()), (g.mount = y), p
          }
        }
      $t.reset(),
        g.mixin({
          computed: {
            $vuetify() {
              return rt({
                defaults: _l.call(this, Rl),
                display: _l.call(this, or),
                theme: _l.call(this, wa),
                icons: _l.call(this, ir),
                locale: _l.call(this, ko),
                date: _l.call(this, ic),
              })
            },
          },
        })
    },
    defaults: r,
    display: s,
    theme: c,
    icons: u,
    locale: d,
    date: v,
    goTo: m,
  }
}
const jp = '3.7.6'
pv.version = jp
function _l(e) {
  var l, a
  const t = this.$,
    n =
      ((l = t.parent) == null ? void 0 : l.provides) ??
      ((a = t.vnode.appContext) == null ? void 0 : a.provides)
  if (n && e in n) return n[e]
}
const zp = {
    collapse: 'keyboard_arrow_up',
    complete: 'check',
    cancel: 'cancel',
    close: 'close',
    delete: 'cancel',
    clear: 'cancel',
    success: 'check_circle',
    info: 'info',
    warning: 'priority_high',
    error: 'warning',
    prev: 'chevron_left',
    next: 'chevron_right',
    checkboxOn: 'check_box',
    checkboxOff: 'check_box_outline_blank',
    checkboxIndeterminate: 'indeterminate_check_box',
    delimiter: 'fiber_manual_record',
    sortAsc: 'arrow_upward',
    sortDesc: 'arrow_downward',
    expand: 'keyboard_arrow_down',
    menu: 'menu',
    subgroup: 'arrow_drop_down',
    dropdown: 'arrow_drop_down',
    radioOn: 'radio_button_checked',
    radioOff: 'radio_button_unchecked',
    edit: 'edit',
    ratingEmpty: 'star_border',
    ratingFull: 'star',
    ratingHalf: 'star_half',
    loading: 'cached',
    first: 'first_page',
    last: 'last_page',
    unfold: 'unfold_more',
    file: 'attach_file',
    plus: 'add',
    minus: 'remove',
    calendar: 'event',
    treeviewCollapse: 'arrow_drop_down',
    treeviewExpand: 'arrow_right',
    eyeDropper: 'colorize',
  },
  Wp = { component: (e) => sn(Lp, { ...e, class: 'material-icons' }) },
  Up = {
    collapse: 'fas fa-chevron-up',
    complete: 'fas fa-check',
    cancel: 'fas fa-times-circle',
    close: 'fas fa-times',
    delete: 'fas fa-times-circle',
    clear: 'fas fa-times-circle',
    success: 'fas fa-check-circle',
    info: 'fas fa-info-circle',
    warning: 'fas fa-exclamation',
    error: 'fas fa-exclamation-triangle',
    prev: 'fas fa-chevron-left',
    next: 'fas fa-chevron-right',
    checkboxOn: 'fas fa-check-square',
    checkboxOff: 'far fa-square',
    checkboxIndeterminate: 'fas fa-minus-square',
    delimiter: 'fas fa-circle',
    sortAsc: 'fas fa-arrow-up',
    sortDesc: 'fas fa-arrow-down',
    expand: 'fas fa-chevron-down',
    menu: 'fas fa-bars',
    subgroup: 'fas fa-caret-down',
    dropdown: 'fas fa-caret-down',
    radioOn: 'far fa-dot-circle',
    radioOff: 'far fa-circle',
    edit: 'fas fa-edit',
    ratingEmpty: 'far fa-star',
    ratingFull: 'fas fa-star',
    ratingHalf: 'fas fa-star-half',
    loading: 'fas fa-sync',
    first: 'fas fa-step-backward',
    last: 'fas fa-step-forward',
    unfold: 'fas fa-arrows-alt-v',
    file: 'fas fa-paperclip',
    plus: 'fas fa-plus',
    minus: 'fas fa-minus',
    calendar: 'fas fa-calendar',
    treeviewCollapse: 'fas fa-caret-down',
    treeviewExpand: 'fas fa-caret-right',
    eyeDropper: 'fas fa-eye-dropper',
  },
  Kp = { component: cs },
  Ja = ':',
  Gp = '-',
  Al = class Al {
    constructor(t, n) {
      tt(this, '_id')
      tt(this, '_name')
      tt(this, '_space')
      tt(this, '_style', {})
      const l = t.toString()
      this._id = n || Al.normalizeTagName(l)
      const { value: a, namespace: o } = Al.splitTag(l)
      return (this._name = a), (this._space = o), this
    }
    set(t, n) {
      ;(this._name = t), (this._space = n)
    }
    get name() {
      return this._name
    }
    set name(t) {
      this._name = t
    }
    get id() {
      return this._id
    }
    set id(t) {
      this._id = t
    }
    get namespace() {
      return this._space
    }
    set namespace(t) {
      this._space = t
    }
    get space() {
      return this._space
    }
    set space(t) {
      this._space = t
    }
    get icon() {
      return this._style.icon
    }
    set symbol(t) {
      ;(this._style.icon = t.icon), (this._style.color = t.color)
    }
    set icon(t) {
      this._style.icon = t
    }
    get color() {
      return this._style.color
    }
    set color(t) {
      this._style.color = t
    }
  }
tt(Al, 'normalizeTagName', (t) => t.toString().toLowerCase().replace(/\s/g, Gp)),
  tt(Al, 'splitTag', (t) => {
    const n = t.toString(),
      l = n.includes(Ja) ? n.split(Ja)[1] : n,
      a = n.includes(Ja) ? n.split(Ja)[0] : void 0
    return { value: l, namespace: a }
  })
let nn = Al
const Yp = fl('bottom-sheet', () => {
    const e = H(!1),
      t = H(new nn('tag'))
    function n(r, s, c) {
      const u = new nn(r)
      ;(u.color = s), (u.icon = c), (t.value = u)
    }
    function l(r, s, c) {
      n(r, s, c), a()
    }
    function a() {
      e.value = !0
    }
    function o() {
      e.value = !1
    }
    function i() {
      e.value = !e.value
    }
    return { display: e, show: a, hide: o, toggle: i, data: t, setTag: n, openTag: l }
  }),
  qp = at({
    __name: 'VTag',
    props: {
      icon: { type: String, default: '' },
      label: { type: String, default: '' },
      value: { type: String || Number, default: '' },
      color: { type: String, default: '' },
      noLabel: { type: Boolean, default: !1 },
      noValue: { type: Boolean, default: !1 },
      noIcon: { type: Boolean, default: !1 },
      tooltip: { type: Boolean, default: !1 },
      bottom: { type: Boolean, default: !1 },
      closer: { type: Boolean, default: !1 },
      isHovering: { type: Boolean, default: !1 },
    },
    setup(e) {
      const t = H(Yp())
      return (n, l) => {
        const a = ye('v-icon'),
          o = ye('v-tooltip'),
          i = ye('v-chip')
        return (
          Le(),
          ze(
            i,
            {
              value: e.value,
              onClick:
                l[0] || (l[0] = (r) => (e.bottom ? t.value.openTag(e.value, e.color, e.icon) : !1)),
              tile: '',
              closable: e.closer,
              class: 'rounded-lg',
              variant: 'text',
              density: 'comfortable',
              color: e.noIcon ? e.color : 'text',
            },
            Jd({ _: 2 }, [
              e.noIcon
                ? void 0
                : {
                    name: 'prepend',
                    fn: ce(() => [
                      f(
                        a,
                        {
                          icon: e.icon ? e.icon : '$tag',
                          color: e.color,
                          start: !e.noLabel,
                          id: 'tooltip-activator',
                        },
                        null,
                        8,
                        ['icon', 'color', 'start'],
                      ),
                      f(
                        o,
                        {
                          activator: 'parent',
                          location: 'bottom',
                          'content-class': 'bg-surface',
                          elevated: '',
                        },
                        {
                          default: ce(() => [
                            e.icon
                              ? (Le(),
                                ze(a, { key: 0, icon: e.icon, color: e.color }, null, 8, [
                                  'icon',
                                  'color',
                                ]))
                              : Nn('', !0),
                            Xe(' ' + zt(e.label), 1),
                          ]),
                          _: 1,
                        },
                      ),
                    ]),
                    key: '0',
                  },
              e.noLabel
                ? void 0
                : { name: 'default', fn: ce(() => [Xe(zt(e.label), 1)]), key: '1' },
              e.noIcon && e.noLabel
                ? {
                    name: 'append',
                    fn: ce(() => [
                      f(
                        a,
                        {
                          icon: '$no-tag',
                          color: e.color,
                          start: !e.noLabel,
                          id: 'tooltip-activator',
                        },
                        null,
                        8,
                        ['color', 'start'],
                      ),
                      f(
                        o,
                        {
                          activator: 'parent',
                          location: 'bottom',
                          'content-class': 'bg-surface',
                          elevated: '',
                        },
                        {
                          default: ce(() => [
                            e.icon
                              ? (Le(),
                                ze(a, { key: 0, icon: e.icon, color: e.color }, null, 8, [
                                  'icon',
                                  'color',
                                ]))
                              : Nn('', !0),
                            Xe(' ' + zt(e.label), 1),
                          ]),
                          _: 1,
                        },
                      ),
                    ]),
                    key: '2',
                  }
                : void 0,
            ]),
            1032,
            ['value', 'closable', 'color'],
          )
        )
      }
    },
  }),
  Xp = { class: 'opacity-50' },
  rr = at({
    __name: 'VTagItem',
    props: {
      icon: { type: String, default: '' },
      label: { type: String, default: '' },
      value: { type: String || Number, default: '' },
      space: { type: String, default: '' },
      color: { type: String, default: '' },
      noLabel: { type: Boolean, default: !1 },
      noValue: { type: Boolean, default: !1 },
      noIcon: { type: Boolean, default: !1 },
      tooltip: { type: Boolean, default: !1 },
      bottom: { type: Boolean, default: !1 },
      isHovering: { type: Boolean, default: !1 },
    },
    setup(e) {
      return (t, n) => {
        const l = ye('v-icon'),
          a = ye('v-tooltip'),
          o = ye('v-chip')
        return (
          Le(),
          ze(
            o,
            {
              variant: 'text',
              density: 'comfortable',
              tile: '',
              class: 'rounded-lg',
              color: e.noIcon ? e.color : void 0,
              value: e.value,
            },
            Jd({ _: 2 }, [
              e.noIcon
                ? void 0
                : {
                    name: 'prepend',
                    fn: ce(() => [
                      f(
                        l,
                        { icon: e.icon ? e.icon : '$tag', color: e.color, start: !e.noLabel },
                        null,
                        8,
                        ['icon', 'color', 'start'],
                      ),
                      f(
                        a,
                        { activator: 'parent', location: 'bottom', 'content-class': 'bg-surface' },
                        {
                          default: ce(() => [
                            e.icon
                              ? (Le(),
                                ze(l, { key: 0, icon: e.icon, color: e.color }, null, 8, [
                                  'icon',
                                  'color',
                                ]))
                              : Nn('', !0),
                            n[0] || (n[0] = Xe()),
                            Fa('span', Xp, zt(e.space ? `${e.space} : ` : ''), 1),
                            Xe(' ' + zt(e.label), 1),
                          ]),
                          _: 1,
                        },
                      ),
                    ]),
                    key: '0',
                  },
              e.noLabel
                ? void 0
                : { name: 'default', fn: ce(() => [Xe(zt(e.label), 1)]), key: '1' },
              e.noIcon && e.noLabel
                ? {
                    name: 'append',
                    fn: ce(() => [
                      f(
                        l,
                        {
                          icon: '$no-tag',
                          color: e.color,
                          start: !e.noLabel,
                          id: 'tooltip-activator',
                        },
                        null,
                        8,
                        ['color', 'start'],
                      ),
                      f(
                        a,
                        {
                          activator: 'parent',
                          location: 'bottom',
                          'content-class': 'bg-surface',
                          elevated: '',
                        },
                        {
                          default: ce(() => [
                            e.icon
                              ? (Le(),
                                ze(l, { key: 0, icon: e.icon, color: e.color }, null, 8, [
                                  'icon',
                                  'color',
                                ]))
                              : Nn('', !0),
                            Xe(' ' + zt(e.space) + ' ' + zt(e.label), 1),
                          ]),
                          _: 1,
                        },
                      ),
                    ]),
                    key: '2',
                  }
                : void 0,
            ]),
            1032,
            ['color', 'value'],
          )
        )
      }
    },
  }),
  Qp = '-'
class Sv {
  constructor() {
    tt(this, '_tags', {})
    tt(this, 'addTag', (t) => (this._tags[t.id] = t))
    tt(this, 'createTag', (t, n, l) => {
      const a = nn.normalizeTagName(t),
        o = this._tags[a] ? this._tags[a] : new nn(t)
      return (o.icon = l), (o.color = n), (this._tags[o.id] = o)
    })
    tt(this, 'stringTag', (t = 'tag') => {
      const n = new nn(t)
      return (
        n.space &&
          this._tags[n.space] &&
          ((n.icon = this._tags[n.space].icon), (n.color = this._tags[n.space].color)),
        (this._tags[n.id] = n)
      )
    })
    tt(this, 'removeTag', (t) => {
      delete this._tags[t]
    })
    return (this._tags = {}), this
  }
  get tags() {
    return this._tags
  }
  get tagList() {
    return Object.values(this._tags)
  }
  get tagKeys() {
    return Object.keys(this._tags)
  }
  getTag(t) {
    return this._tags[t]
  }
  linkText(t) {
    let n = t
    return (
      Object.keys(this._tags).forEach((l) => {
        if (!this._tags[l]) return
        const a = this._tags[l].name,
          o = typeof a == 'string' ? a.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') : a,
          i = typeof a == 'string' ? new RegExp(o, 'g') : a
        n = n.replace(i, (r) => `[${r}](${r.toLowerCase().replace(/\s/g, Qp)})`)
      }),
      n
    )
  }
}
tt(Sv, 'normalizeTagName', (t) => nn.normalizeTagName(t))
const Zp = '-',
  ds = fl('selection', () => {
    const e = H(['jenny-everywhere']),
      t = H(new Sv()),
      n = b(() => t.value.tags),
      l = (u) => u.toString().toLowerCase().replace(/\s/g, Zp),
      a = (u) => t.value.addTag(u),
      o = (u) => {
        t.value.addTag(u)
      },
      i = (u, d, v) => {
        const m = l(u),
          h = t.value.getTag(m) ? t.value.getTag(m) : new nn(u)
        return (h.icon = v), (h.color = d), t.value.addTag(h)
      },
      r = (u = 'tag') => {
        const d = new nn(u)
        return (
          d.space &&
            t.value.getTag(d.space) &&
            ((d.icon = t.value.getTag(d.space).icon), (d.color = t.value.getTag(d.space).color)),
          t.value.addTag(d)
        )
      },
      s = (u) => {
        t.value.removeTag(u), (e.value = e.value.filter((d) => d !== u))
      }
    function c(u) {
      let d = u
      return (
        e.value.forEach((v) => {
          if (!t.value.getTag(v)) return
          const m = t.value.getTag(v).name,
            h = typeof m == 'string' ? m.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') : m,
            g = typeof m == 'string' ? new RegExp(h, 'g') : m
          d = d.replace(g, (y) => `[${y}](${y.toLowerCase().replace(/\s/g, '-')})`)
        }),
        d
      )
    }
    return {
      selection: e,
      taglist: t,
      tags: n,
      addTag: o,
      createTag: r,
      addLabel: i,
      removeTag: s,
      linkText: c,
      copyTag: a,
      normalizeTagName: l,
    }
  }),
  Xo = fl('state', () => {
    const e = H('dark'),
      t = H(!0),
      n = H(!0),
      l = H(!1)
    function a() {
      e.value = e.value === 'dark' ? 'light' : 'dark'
    }
    function o() {
      l.value = !l.value
    }
    function i() {
      t.value = !t.value
    }
    function r() {
      n.value = !n.value
    }
    return {
      theme: e,
      tags: t,
      dice: n,
      drawer: l,
      changeTheme: a,
      toggleTags: i,
      toggleDice: r,
      toggleDrawer: o,
    }
  }),
  Jp =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAA2CAYAAACCwNb3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA8XSURBVHgB7V1fbNvGGf+OlFxvDRplKLYOaxOmW4fMyVAXHbY2sVMZwx6Kpo30srfN9tJt2FOcJgb2FvlpQ5fN9tOAtYllDMMeJactimEDQs/5Uwwdoib9k6EbyrRFV/Sl6rC1jiXx9n0USR1piqJIKpYS/gBZvOPd8Sjed9/3/b47mkFE7DlRykoAWQ5QfetUfgESJLiFkIII2DNTUmQmnTOTGn4SAUlwS0GCCEilQIEECW5hRBKQBAludSQCkiCBDyL5IF5QZkqZO1OsBIwpEBq8qut87q1f58v7kATgTFqyzwBXGbAsdI1Wm3tnV96xcxmrMF3PhOovg/Ibzx4+tvfE2Rlg/KiV3ajpE9cW8hp0ib2z5cvYaMboF9eX3zyVL0CCLUXsAvL5NBQg1AAWwUCS2NLoTEmtNzOU1hk2BaHQbBMPyo72OFdQOCAUOMwgi7eSrjeKtbR0EnOMwS2lYAq/CtAFRp4pTWFvRq30UAqKkGDLEbuAMI6DhIlpfaJeNxguX0hpyEhMynEOJ82szDp+3B1EOnlRr+mB2DIiEVD7lMAcuMK30EHQcLbO6zWodmqP+shAnsdeZO08HZTKQl4dmS0towgaWoQx6SgK9wLmd2zThixZ9033uFr5ZfcaKEH8iF1AROCD1t44lVe7qFLZe6I8hSNsV7sCOtfLXZgvmjhwPfvIufrmr/IVCAg0+eZQ6LLu/CEZFmoNsK6TudHUIoEE2TAjBa2G91iABH2BW99J5xB8Fg+AespbGzZnfKZaacbYJAQEB2ZrD9Jo17qbVBL0EAmLFSMYb8zZx+hP0CqDTnUo2IrSZJdDc28OEvQNEgGJEa83Z37bXJOZfLJTHZaSCq0EaGjuFSFB36D/BISx7TDIQHpWSGQfmC2NtitK2kNi0DLF0B+CBH2FnjrpSGZl0Ok+10UFYpkyMMBI1wEpX7Ap37RuOOszXmUlCbKOujJPzKs+Q681SMawr4N+hDjAoIKoXaS2F600k6RJpHy9hV6gdlF9FBNqt/+QMtR8ms1T/ILrfPnN38RqA9NgyUNIEJ2LFKgCA4ZUHSnfdCues5EyNEhBLEOBQSZQuw3OlyFB3yElpaVzxoOi4J7EVyFG0B6RN25DypK0yN7Zs6odUGQS+RkFsQyTWjQwBQYTarc/IYmzWIL44KR8QREpXwoMitQuhgaLkKAv0XcsFpl81gcGGE3KtxU4FCnfBkhTdsGE2u1r9JTFCgM5hYPKXGqCQrIbBhm8sQL2shSeNbRIHTSR2k0Cg/2NnmoQNuCUbVQQ5Ytf9lIXiUPOERgEYw2XCgn6Fk4Ngs7kyPHyrqCVeWf/JTMyWy6B3sV6KJ+FioMGctbR31jkrEnnEuULIP4WCbXb7yABoQdmzPSGwy6F3W/RBGdI7QppBiwXVk8NY9/qMNhwU76iVk0Cg/2PFAd9gnGpiLRLNHOIMYPHH6pBYSMNozgQHoOQwLpVztmcOQNDv2Mpm82sr6/bv9/PXnlFs443Ub4mOIcVS3v41Q+K3z7yiNLu3PDwcHVaVWNZ1ezuazdw98PrvsO07/V7+f0e3fSTvfDCC1nGmLipKAwqtVotj9CwvQK2Z82Y6qFDhyaCNvLiiy/SspSslcY2d2CbVcyfwTaPQgRwzsvYl2PmdbhwSoXmvbeL4mvYjwm6N0qUSqVMOp1+x6xD7c599OwvNOyfvS24obOJH58/r4qNfPN4KadLki3tP31QgvszTV1be+9d+PiPfwC/+p1w5uAB6pPSvFm8J9b6HbGP00fWLhYhIk6PH1hizFg6EwFcY9LQQzQATx/cX2DiUv/mQs8wqykqP/rrhYfoAAVM4Y3aknj/oXqp88KR8xfnJAQ92KjO9CgOGmOA1Ot1cZNQlgQwSAMvv/yyAuC4qSIJh5k/jw9ZifLBNmZI0DwuTdf0eygK3pt9T9QnLkS9SXC/8MxsGURnnOmb9oLogoB/eRvYwkH47OoVR1mZ8Y6rgEWcHt8/BY6oPIvddHtu7JFsdOEgMEVv3JhqczLsUqPR58cfzdEB1zdmogoHAQO5haXs/tGUOXgsGJogSANDQ0MkVCexfs7MUuiPOeOr0BrsdF7t1F6j0ciJaWsQosApzLlnvIh9DDQAUqmUQhOAcI8PehQzNAR0BxIIe/egLMs5DnzRmg2xvzmcyY5Zatq952PsK637aXzyCay/ftXZOj7g58bGskG1iKCxEXw1lWpoXJehl0AT8diRtQuBdkwas7peI+tAMTIYy3i3GYemc7Z9Y6OxO6jJ+rv9KBApdrmVIzm3fGMHVyxTIgjOnj27jAMw587XdX0R87NGdxmbRLOkQILj1xbNxHh9K6k9+eSTqlc5Epwu+kgm30oH80zt5p4J1DdxEsB7nZSkoTwOArqOsSJZp5nMXF4iUrs7kHn41j0t1uLTV//meQ1Z0gNNLDSzg2O7Ll/orWg0IcmsErQsThQamlPLLnNqEzZqugoxoxt/7icXL1bOPHbgOpqoNpMaKQ6CA89z0KM2UKFlcpDNPuXTDJAZ5tJkKsSHWJxTN8j3EJLZu48fJ/NgxcrAwXCUHE73ng9RexA2/vm2mBQWLLJJqg8dIEvylNAr7em1S2VIEBt6Eih02+mIw37lUdCmxHRQE2orYWo4W/jIzEHnuigUyeiNjZx7z8feu1sCQqYVmVgE/L2KTErPOOo3tVBbkOmCX0JUHhLaOGb0MpIuzmS+zjoOLpESrnRr8mwVcFAvCknSIhWDQTKBWmRS3PPx8D0MTayWgPzvwpp9LMnSsuGzOOv7Mndo0hWEZLUXJsrtjkgCggOkrQlgzrDXhaycV7mXXnppSjSvyH+BGMEiveHRHyZjZ2sRJAVmHAwSOtv3/eddxUqOC+YVUbuW9iDHelptOuQuBipDzrrXtU3zy55YiMYOEz+5WUBhV6DPYfymHBxbvh1OOjmzOGCDv66G+wcXDbOB2cyOp7MusGAGTP+lLbCdeXSQg/oVfvGNyKB7Qc24bJEA9I1aZOHj+VP26oSHP/w7vH/XTrh/O9G73tQumkZF65iYqzPjB+w4hkn5qu5rk/kmCj9qDz/z6jDGSbqijpv94hVJHpr2CjJinKCEbXbzHKKGEkLBjA8FAmrkTf10r+bNdBr03YBmWHTQ7WUWprNuU4MU40CBEP2TICxazwZ8SDgoX7pHkfL92sdvwx31G2heDdsVnNQu19zUJtZftt8/3IbydVG7K37ag2hnCAESQIwrkBXg5Qtt2aDvEgpEgFtAlmnWhxBAqnPTbOIREyFhsAUEzamsWB7TRegAYo/wWhqEALavQcxwU76Iwy7KF75bfRWp3YN2HdH3cPkxBnDWLmP9eau+m/J9fnwc07pipZkkLYAPONePSTIPzG5xLqsW1cldJocFnet5WeYVCAEGwz1hFj2vJTUibJkYrrrjIG3jDxFA1GfWPDacdeEaotrXnnrqqSAPUX3iiSdU6COQ0LJWIDD7wQ+eyX3wp79kyLwifPvrzomW/A8LG7XNA9dchrHYihsYlG/BMnUk0AXnnWvT6gUVfMGq0+olDQICYwEdy2BwFNs8r0GfY1qN5pf1fEchUrZFcMYiDHWPvs5oD2MfNxUk8CggmpXedgdb+teOB+zzQztbK/jd1G470wi1kKgVbMrXoHYd66wSareXiLSjkBbuIXNj+wRe2sfDkTWcdRwcDrsW82Nlr8Q+QstWrnaK6IcFmm/Lll/w1QyD/35xJ7z3/n3wwK4MyNtbVopoXvk51qQtzhzcj9qXGT6aSfkWnNTuZv+lX0HLOGS56T82GlChqDX0IWhNFzOXq5CpG/F/FKZGcVCcMz9LPkVFM8JwZF2xDw3Npp78YES90upb8zMPPYKb8n34Swwu3XsA7jwwbpdxU7udaNmG7vAtMs+PPUpCYpManA+O1pVTQKzbEn3oGPoU6N8uWP3EpzrqFpCesBLuqDM0FzkqVgJn38BmQpwsW5wwVw/YWnDsXgnu2r3ToT3aUbvtYDBXghDgwyuA8Iw6ULs9BbKPg8BgQZDlOn7wioPswgcd1AxRApYz2BqBmnR0ulPsQwQOEoqDHIbguGm0cPkf9Up+T9o4/hz+sj/cJ9vxkE7UbjvoIC2iU541k/bv5ue/3AxITCoZ8Zrg2BJ6Hmnqy9hPLVBhevWtsFCRkCLnUpzN3YG7wB3h/LrfeTR1iigIJz3qrfrFPog+Flb5EhT8TEEIoKZahR7i0ofS1IP3cHGvhz2gndRucMf66bW1shmQc0wqtDQFbiJSKdC47soMu++Cd/6PY2GBlHaFNV/UZ4IRqaFACKyv1zXSIHkz4h1aFRE9jDb4lF+Zxx9/XMOZnyjfUVfdol898k3QyZ8znfwofVxFAbV8oetC/icQA2jVLmNw+M/XOXx/GBxrrvT19Wrt3x+8ZrzmArpf1k0CxZhj4qp2pnZbb8nUeZdxI27ENzQz8Rr9JboU4y95iTVmIAI4Z2Vbe5KgsFY/aasrRMSRtUsLpw+O4RTljLF1iarOZdTQFzQGCWLBN06sFK1l7bTn4+ffkcVZv3jo0KFpSDBwSP6BTgxw7/kwTSxb2w3C8v0E3ui7NytuBTBWokAE/P4tOffRp03z6bMGVL+3y2GuFgdl+f4gQFGUzLZt20bRpNeuXbumUd6ePXsU+hbTdExlKa1pWtWqi2Zchs5RmXU0femcmG8dU3k6z1xv+EgQM9DHmejB8p3bEjSoMZZFe8aNAUwb7a5cubK8b98+isNlZVneQefQ13wHtfZuLFvAtHL16tUslcdy9MadSUzvxmN6E812rLMbhc2I5wl1LGugmJhYvYWWCEd8oMFL27xxgJMNSwtrC+J5HOjdEgiZNnVW6Rr4mZbENUQJ4kU3AdAEnYECkcXf1Nr3rwL9WwnTvKJ0t0wn7XfxeqEHaRbUMFlqO4U0aoTlwAkS3HQY/gSFFsTXQRGNj2nyTXKu10S1Bb03gYLX+D3qqkOviyoODQ0tJE56gkGD5X8Y3xQ7QaEwTtBqDXoFkyuw3Ba0YoTqoB8ivnKK8l+z/JbEB0kwSCiTkz0yMkLB5kk8riDEdwIsuLZQ2OaSWWcTsE7Zr04iIAkGBiQA5KTjjH+ZWCvUFo7gqyksqphnmk/nsM6CV5skYT51Ir0POkGCLYHgmPcc/wd7CwsE+cFnEAAAAABJRU5ErkJggg=='
class e0 {
  constructor(t = 0) {
    tt(this, '_name', 'Counter')
    tt(this, '_count')
    tt(this, '_max', 9)
    tt(this, '_min', 0)
    tt(this, '_icon', 'mdi-circle')
    if (t < this._min || t > this._max)
      throw new Error(`${this._name} count must be between ${this._min} and ${this._max}.`)
    this._count = t
  }
  get count() {
    return this._count
  }
  set count(t) {
    if (t < this._min || t > this._max)
      throw new Error(`${this._name} count must be between ${this._min} and ${this._max}.`)
    this._count = t
  }
  increment() {
    this._count = this._count < this._max ? this._count + 1 : 0
  }
  decrement() {
    this._count > this._min && this._count--
  }
  clear() {
    this._count = 0
  }
  getIcon(t = this._count) {
    return t >= 1 && t <= 8
      ? `${this._icon}-slice-${t}`
      : t === 0
        ? `${this._icon}-outline`
        : `${this._icon}-multiple`
  }
}
const t0 = fl('counter', () => {
    const e = H(new e0())
    function t() {
      e.value.increment()
    }
    function n() {
      e.value.decrement()
    }
    function l() {
      return e.value.count
    }
    function a() {
      return e.value.getIcon()
    }
    return { counter: e, increment: t, decrement: n, count: l, icon: a }
  }),
  n0 = at({
    __name: 'CounterTag',
    setup(e) {
      const t = H(t0())
      return (n, l) => {
        const a = ye('v-btn')
        return (
          Le(),
          ze(
            a,
            {
              'prepend-icon': t.value.icon(),
              onClick: [
                l[0] || (l[0] = po((o) => t.value.decrement(), ['alt', 'exact'])),
                l[1] || (l[1] = po((o) => t.value.increment(), ['exact'])),
              ],
              color: 'text',
              text: t.value.count().toString(),
            },
            null,
            8,
            ['prepend-icon', 'text'],
          )
        )
      }
    },
  }),
  l0 = ['src'],
  a0 = at({
    __name: 'HeaderLayout',
    setup(e) {
      return (t, n) => {
        const l = ye('router-link'),
          a = ye('v-app-bar-title'),
          o = ye('v-app-bar')
        return (
          Le(),
          ze(
            o,
            { absolute: '', elevation: '0', class: 'bg-transparent' },
            {
              append: ce(() => [f(n0)]),
              default: ce(() => [
                f(a, null, {
                  default: ce(() => [
                    f(
                      l,
                      { to: '/' },
                      {
                        default: ce(() => [
                          Fa(
                            'img',
                            { src: nt(Jp), style: { 'vertical-align': 'middle' } },
                            null,
                            8,
                            l0,
                          ),
                        ]),
                        _: 1,
                      },
                    ),
                  ]),
                  _: 1,
                }),
              ]),
              _: 1,
            },
          )
        )
      }
    },
  }),
  o0 = at({
    __name: 'DiceFab',
    setup(e) {
      const t = H(Xo())
      return (n, l) => {
        const a = ye('v-fab')
        return (
          Le(),
          ze(
            a,
            {
              icon: t.value.dice ? '$dice' : '$no-dice',
              variant: 'plain',
              location: 'bottom end',
              app: '',
              appear: '',
              onClick: t.value.toggleDice,
              attach: 'parent',
            },
            null,
            8,
            ['icon', 'onClick'],
          )
        )
      }
    },
  }),
  i0 = at({
    __name: 'TagFab',
    setup(e) {
      const t = H(Xo())
      return (n, l) => {
        const a = ye('v-fab')
        return (
          Le(),
          ze(
            a,
            {
              icon: t.value.drawer ? '$tags' : '$no-tags',
              variant: 'plain',
              location: 'bottom start',
              app: '',
              appear: '',
              onClick: t.value.toggleDrawer,
              attach: 'parent',
            },
            null,
            8,
            ['icon', 'onClick'],
          )
        )
      }
    },
  }),
  r0 = 'modulepreload',
  s0 = function (e) {
    return '/jennyeverywhere.online/' + e
  },
  gc = {},
  Pe = function (t, n, l) {
    let a = Promise.resolve()
    if (n && n.length > 0) {
      document.getElementsByTagName('link')
      const i = document.querySelector('meta[property=csp-nonce]'),
        r = (i == null ? void 0 : i.nonce) || (i == null ? void 0 : i.getAttribute('nonce'))
      a = Promise.allSettled(
        n.map((s) => {
          if (((s = s0(s)), s in gc)) return
          gc[s] = !0
          const c = s.endsWith('.css'),
            u = c ? '[rel="stylesheet"]' : ''
          if (document.querySelector(`link[href="${s}"]${u}`)) return
          const d = document.createElement('link')
          if (
            ((d.rel = c ? 'stylesheet' : r0),
            c || (d.as = 'script'),
            (d.crossOrigin = ''),
            (d.href = s),
            r && d.setAttribute('nonce', r),
            document.head.appendChild(d),
            c)
          )
            return new Promise((v, m) => {
              d.addEventListener('load', v),
                d.addEventListener('error', () => m(new Error(`Unable to preload CSS for ${s}`)))
            })
        }),
      )
    }
    function o(i) {
      const r = new Event('vite:preloadError', { cancelable: !0 })
      if (((r.payload = i), window.dispatchEvent(r), !r.defaultPrevented)) throw i
    }
    return a.then((i) => {
      for (const r of i || []) r.status === 'rejected' && o(r.reason)
      return t().catch(o)
    })
  },
  u0 = (e, t, n) => {
    const l = e[t]
    return l
      ? typeof l == 'function'
        ? l()
        : Promise.resolve(l)
      : new Promise((a, o) => {
          ;(typeof queueMicrotask == 'function' ? queueMicrotask : setTimeout)(
            o.bind(
              null,
              new Error(
                'Unknown variable dynamic import: ' +
                  t +
                  (t.split('/').length !== n
                    ? '. Note that variables only represent file names one level deep.'
                    : ''),
              ),
            ),
          )
        })
  },
  c0 = fl('persona', () => {
    const e = H(!1),
      t = H(null),
      n = H(null)
    function l() {
      e.value = !0
    }
    function a() {
      e.value = !1
    }
    function o() {
      e.value = !e.value
    }
    async function i() {
      const r = Math.floor(Math.random() * 32)
      await u0(
        Object.assign({
          '../assets/images/avatars/jenny-everywhere-avatar-00.png': () =>
            Pe(() => import('./jenny-everywhere-avatar-00-BycitFRG.js'), []),
          '../assets/images/avatars/jenny-everywhere-avatar-01.png': () =>
            Pe(() => import('./jenny-everywhere-avatar-01-BQiDo49v.js'), []),
          '../assets/images/avatars/jenny-everywhere-avatar-02.png': () =>
            Pe(() => import('./jenny-everywhere-avatar-02-CiqHVJ2k.js'), []),
          '../assets/images/avatars/jenny-everywhere-avatar-03.png': () =>
            Pe(() => import('./jenny-everywhere-avatar-03-N7fNm_5T.js'), []),
          '../assets/images/avatars/jenny-everywhere-avatar-04.png': () =>
            Pe(() => import('./jenny-everywhere-avatar-04-CCy65Q_P.js'), []),
          '../assets/images/avatars/jenny-everywhere-avatar-05.png': () =>
            Pe(() => import('./jenny-everywhere-avatar-05-B0D68Swz.js'), []),
          '../assets/images/avatars/jenny-everywhere-avatar-06.png': () =>
            Pe(() => import('./jenny-everywhere-avatar-06-Bwg7DLY4.js'), []),
          '../assets/images/avatars/jenny-everywhere-avatar-07.png': () =>
            Pe(() => import('./jenny-everywhere-avatar-07-D0QbRT4o.js'), []),
          '../assets/images/avatars/jenny-everywhere-avatar-08.png': () =>
            Pe(() => import('./jenny-everywhere-avatar-08-CtxHdntK.js'), []),
          '../assets/images/avatars/jenny-everywhere-avatar-09.png': () =>
            Pe(() => import('./jenny-everywhere-avatar-09-BTjXnIDC.js'), []),
          '../assets/images/avatars/jenny-everywhere-avatar-10.png': () =>
            Pe(() => import('./jenny-everywhere-avatar-10-DYGn7NwJ.js'), []),
          '../assets/images/avatars/jenny-everywhere-avatar-11.png': () =>
            Pe(() => import('./jenny-everywhere-avatar-11-BPf7riGI.js'), []),
          '../assets/images/avatars/jenny-everywhere-avatar-12.png': () =>
            Pe(() => import('./jenny-everywhere-avatar-12-CbaOz2H5.js'), []),
          '../assets/images/avatars/jenny-everywhere-avatar-13.png': () =>
            Pe(() => import('./jenny-everywhere-avatar-13-DOE0bc9J.js'), []),
          '../assets/images/avatars/jenny-everywhere-avatar-14.png': () =>
            Pe(() => import('./jenny-everywhere-avatar-14-DTkJHxs_.js'), []),
          '../assets/images/avatars/jenny-everywhere-avatar-15.png': () =>
            Pe(() => import('./jenny-everywhere-avatar-15-y_QKlRBC.js'), []),
          '../assets/images/avatars/jenny-everywhere-avatar-16.png': () =>
            Pe(() => import('./jenny-everywhere-avatar-16-BCxfyAiX.js'), []),
          '../assets/images/avatars/jenny-everywhere-avatar-17.png': () =>
            Pe(() => import('./jenny-everywhere-avatar-17-ygWNoe0Q.js'), []),
          '../assets/images/avatars/jenny-everywhere-avatar-18.png': () =>
            Pe(() => import('./jenny-everywhere-avatar-18-DeiMpX2p.js'), []),
          '../assets/images/avatars/jenny-everywhere-avatar-19.png': () =>
            Pe(() => import('./jenny-everywhere-avatar-19-Wq1IRstM.js'), []),
          '../assets/images/avatars/jenny-everywhere-avatar-20.png': () =>
            Pe(() => import('./jenny-everywhere-avatar-20-BSodWoK1.js'), []),
          '../assets/images/avatars/jenny-everywhere-avatar-21.png': () =>
            Pe(() => import('./jenny-everywhere-avatar-21-e0LlAAzR.js'), []),
          '../assets/images/avatars/jenny-everywhere-avatar-22.png': () =>
            Pe(() => import('./jenny-everywhere-avatar-22-C5cL5qxO.js'), []),
          '../assets/images/avatars/jenny-everywhere-avatar-23.png': () =>
            Pe(() => import('./jenny-everywhere-avatar-23-CCBUxcWA.js'), []),
          '../assets/images/avatars/jenny-everywhere-avatar-24.png': () =>
            Pe(() => import('./jenny-everywhere-avatar-24-DXjynR7K.js'), []),
          '../assets/images/avatars/jenny-everywhere-avatar-25.png': () =>
            Pe(() => import('./jenny-everywhere-avatar-25-jmILpU-a.js'), []),
          '../assets/images/avatars/jenny-everywhere-avatar-26.png': () =>
            Pe(() => import('./jenny-everywhere-avatar-26-Bo6yauHQ.js'), []),
          '../assets/images/avatars/jenny-everywhere-avatar-27.png': () =>
            Pe(() => import('./jenny-everywhere-avatar-27-DBRlWmvB.js'), []),
          '../assets/images/avatars/jenny-everywhere-avatar-28.png': () =>
            Pe(() => import('./jenny-everywhere-avatar-28-9LWjd55-.js'), []),
          '../assets/images/avatars/jenny-everywhere-avatar-29.png': () =>
            Pe(() => import('./jenny-everywhere-avatar-29-CfQVDr2i.js'), []),
          '../assets/images/avatars/jenny-everywhere-avatar-30.png': () =>
            Pe(() => import('./jenny-everywhere-avatar-30-DKev00KC.js'), []),
          '../assets/images/avatars/jenny-everywhere-avatar-31.png': () =>
            Pe(() => import('./jenny-everywhere-avatar-31-BQRrk461.js'), []),
          '../assets/images/avatars/jenny-everywhere-avatar-32.png': () =>
            Pe(() => import('./jenny-everywhere-avatar-32-BYKIrXW2.js'), []),
        }),
        `../assets/images/avatars/jenny-everywhere-avatar-${r.toString().padStart(2, '0')}.png`,
        5,
      )
        .then((s) => (n.value = s.default))
        .catch((s) => console.error(s))
    }
    return { display: e, name: t, avatar: n, show: l, hide: a, toggle: o, randomAvatar: i }
  }),
  d0 = at({
    __name: 'PersonaAvatar',
    setup(e) {
      const t = H(c0())
      return (
        Vt(async () => {
          t.value.randomAvatar()
        }),
        (n, l) => {
          const a = ye('v-avatar'),
            o = ye('v-icon'),
            i = ye('v-tooltip'),
            r = ye('router-link')
          return (
            Le(),
            ze(
              r,
              { to: '/persona' },
              {
                default: ce(() => [
                  t.value.avatar
                    ? (Le(),
                      ze(a, { key: 0, image: t.value.avatar, rounded: '0' }, null, 8, ['image']))
                    : Nn('', !0),
                  f(
                    i,
                    {
                      activator: 'parent',
                      location: 'top',
                      'content-class': 'bg-surface',
                      elevated: '',
                    },
                    {
                      default: ce(() => [
                        f(o, { icon: 'mdi-account-circle' }),
                        l[0] || (l[0] = Xe(' Jenny Everywhere ')),
                      ]),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            )
          )
        }
      )
    },
  }),
  f0 = at({
    __name: 'BottomNavigationLayout',
    setup(e) {
      return (t, n) => {
        const l = ye('v-btn'),
          a = ye('v-bottom-navigation')
        return (
          Le(),
          ze(
            a,
            { app: '', elevation: '2' },
            {
              default: ce(() => [
                f(l, { value: 'home', icon: '$home', to: '/' }),
                f(
                  l,
                  { value: 'home', icon: '$home', to: '/jenny-everywhere' },
                  {
                    default: ce(() => [f(d0, { location: 'top', to: '/jenny-everywhere' })]),
                    _: 1,
                  },
                ),
                f(l, { value: 'timeline', icon: '$events', to: 'timeline' }),
              ]),
              _: 1,
            },
          )
        )
      }
    },
  }),
  v0 = { key: 0 },
  m0 = at({
    __name: 'DiceTag',
    props: { faces: {}, value: {}, rolls: {} },
    setup(e) {
      const t = e,
        n = () => {
          console.log(Math.floor(Math.random() * t.faces) + 1)
        }
      return (l, a) => {
        const o = ye('v-icon'),
          i = ye('v-btn')
        return (
          Le(),
          ze(
            i,
            {
              'prepend-icon': `$d${l.faces}`,
              onClick: a[0] || (a[0] = (r) => n()),
              text: l.value.toString().padStart(2, '0'),
              dark: '',
            },
            {
              prepend: ce(() => [
                l.rolls.length > 1 ? (Le(), ho('sub', v0, zt(l.rolls.length), 1)) : Nn('', !0),
                f(o, { color: `d${l.faces}` }, null, 8, ['color']),
              ]),
              _: 1,
            },
            8,
            ['prepend-icon', 'text'],
          )
        )
      }
    },
  })
class h0 {
  constructor(t) {
    tt(this, '_faces')
    tt(this, '_value')
    tt(this, '_rolls')
    ;(this._faces = t), (this._value = 0), (this._rolls = [])
  }
  get value() {
    return this._value
  }
  get results() {
    return this._value
  }
  get rolls() {
    return this._rolls
  }
  get faces() {
    return this._faces
  }
  roll(t = 1) {
    this._rolls = []
    for (let n = 0; n < t; n++) this._rolls.push(Math.floor(Math.random() * this._faces) + 1)
    return (
      (this._value = this._rolls.reduce((n, l) => n + l, 0)),
      console.log(`roll: ${t}d${this._faces} : ${this._value}`),
      this._value
    )
  }
}
const g0 = fl('dice', () => {
    const e = H(new h0(20))
    function t() {
      return e.value.results
    }
    function n() {
      return e.value.faces
    }
    function l() {
      return e.value.rolls
    }
    return { die: e, getResults: t, getFaces: n, getRolls: l }
  }),
  y0 = at({
    __name: 'DiceManagerLayout',
    setup(e) {
      const t = H(g0())
      return (n, l) => {
        const a = ye('v-col'),
          o = ye('v-row'),
          i = ye('v-container')
        return (
          Le(),
          ze(
            i,
            { class: 'bg-surface rounded-t-lg mx-auto' },
            {
              default: ce(() => [
                f(o, null, {
                  default: ce(() => [
                    f(
                      a,
                      { class: 'bg-background rounded-lg py-1 mb-4 text-right' },
                      {
                        default: ce(() => [
                          f(
                            m0,
                            {
                              faces: t.value.getFaces(),
                              value: t.value.getResults(),
                              rolls: t.value.getRolls(),
                            },
                            null,
                            8,
                            ['faces', 'value', 'rolls'],
                          ),
                        ]),
                        _: 1,
                      },
                    ),
                  ]),
                  _: 1,
                }),
              ]),
              _: 1,
            },
          )
        )
      }
    },
  }),
  b0 = at({
    __name: 'ColorPickerDialog',
    props: { modelValue: { type: Boolean, default: !1 } },
    emits: ['apply-color'],
    setup(e, { emit: t }) {
      const n = H(!0),
        l = H(!0),
        a = H(!0),
        o = H(!1),
        i = H(!1),
        r = H('#FFFFFF'),
        s = t
      function c() {
        s('apply-color', r.value), (i.value = !1)
      }
      return (u, d) => {
        const v = ye('v-btn'),
          m = ye('v-color-picker'),
          h = ye('v-icon'),
          g = ye('v-tooltip'),
          y = ye('v-btn-toggle'),
          p = ye('v-spacer'),
          _ = ye('v-card-actions'),
          C = ye('v-card'),
          k = ye('v-dialog')
        return (
          Le(),
          ze(
            k,
            {
              width: 'auto',
              modelValue: i.value,
              'onUpdate:modelValue': d[5] || (d[5] = (I) => (i.value = I)),
              scrim: !1,
              persistent: '',
            },
            {
              activator: ce(({ props: I }) => [
                f(
                  v,
                  ve({ icon: 'mdi-palette' }, I, {
                    size: 'small',
                    density: 'compact',
                    variant: 'plain',
                    ripple: !1,
                  }),
                  null,
                  16,
                ),
              ]),
              default: ce(({ isActive: I }) => [
                f(
                  C,
                  { class: 'bg-surface rounded-lg elevation-8' },
                  {
                    default: ce(() => [
                      f(
                        m,
                        {
                          label: 'color',
                          density: 'compact',
                          mode: 'hex',
                          modes: ['hex'],
                          modelValue: r.value,
                          'onUpdate:modelValue': d[0] || (d[0] = (P) => (r.value = P)),
                          'show-swatches': o.value,
                          'hide-canvas': !n.value,
                          'hide-inputs': !l.value,
                          'hide-sliders': !a.value,
                        },
                        null,
                        8,
                        [
                          'modelValue',
                          'show-swatches',
                          'hide-canvas',
                          'hide-inputs',
                          'hide-sliders',
                        ],
                      ),
                      f(
                        _,
                        null,
                        {
                          default: ce(() => [
                            f(
                              y,
                              { multiple: '', density: 'compact' },
                              {
                                default: ce(() => [
                                  f(
                                    v,
                                    {
                                      icon: '',
                                      onClick: d[1] || (d[1] = (P) => (n.value = !n.value)),
                                      variant: 'plain',
                                    },
                                    {
                                      default: ce(() => [
                                        f(
                                          h,
                                          {
                                            icon: n.value
                                              ? 'mdi-rectangle'
                                              : 'mdi-rectangle-outline',
                                          },
                                          null,
                                          8,
                                          ['icon'],
                                        ),
                                        f(g, {
                                          activator: 'parent',
                                          text: 'Canvas',
                                          location: 'bottom',
                                        }),
                                      ]),
                                      _: 1,
                                    },
                                  ),
                                  f(
                                    v,
                                    {
                                      icon: '',
                                      onClick: d[2] || (d[2] = (P) => (a.value = !a.value)),
                                      variant: 'plain',
                                    },
                                    {
                                      default: ce(() => [
                                        f(
                                          h,
                                          { icon: a.value ? '$dropper' : '$no-dropper' },
                                          null,
                                          8,
                                          ['icon'],
                                        ),
                                        f(g, {
                                          activator: 'parent',
                                          text: 'Dropper',
                                          location: 'bottom',
                                        }),
                                      ]),
                                      _: 1,
                                    },
                                  ),
                                  f(
                                    v,
                                    {
                                      icon: '',
                                      onClick: d[3] || (d[3] = (P) => (l.value = !l.value)),
                                      variant: 'plain',
                                    },
                                    {
                                      default: ce(() => [
                                        f(
                                          h,
                                          {
                                            icon: l.value
                                              ? 'mdi-pound-box'
                                              : 'mdi-pound-box-outline',
                                          },
                                          null,
                                          8,
                                          ['icon'],
                                        ),
                                        f(g, {
                                          activator: 'parent',
                                          text: 'Inputs',
                                          location: 'bottom',
                                        }),
                                      ]),
                                      _: 1,
                                    },
                                  ),
                                  f(
                                    v,
                                    {
                                      icon: '',
                                      onClick: d[4] || (d[4] = (P) => (o.value = !o.value)),
                                      variant: 'plain',
                                    },
                                    {
                                      default: ce(() => [
                                        f(
                                          h,
                                          { icon: o.value ? '$swatches' : '$no-swatches' },
                                          null,
                                          8,
                                          ['icon'],
                                        ),
                                        f(g, {
                                          activator: 'parent',
                                          text: 'Swatches',
                                          location: 'bottom',
                                        }),
                                      ]),
                                      _: 1,
                                    },
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            f(p),
                            f(
                              v,
                              {
                                icon: '',
                                size: 'small',
                                onClick: (P) => (I.value = !1),
                                variant: 'plain',
                              },
                              {
                                default: ce(() => [
                                  f(h, null, {
                                    default: ce(() => d[6] || (d[6] = [Xe('mdi-close')])),
                                    _: 1,
                                  }),
                                ]),
                                _: 2,
                              },
                              1032,
                              ['onClick'],
                            ),
                            f(
                              v,
                              { icon: '', size: 'small', onClick: c },
                              {
                                default: ce(() => [
                                  f(h, null, {
                                    default: ce(() => d[7] || (d[7] = [Xe('mdi-check')])),
                                    _: 1,
                                  }),
                                ]),
                                _: 1,
                              },
                            ),
                          ]),
                          _: 2,
                        },
                        1024,
                      ),
                    ]),
                    _: 2,
                  },
                  1024,
                ),
              ]),
              _: 1,
            },
            8,
            ['modelValue'],
          )
        )
      }
    },
  }),
  p0 = { class: 'd-flex flex-wrap justify-start ga-1' },
  S0 = at({
    __name: 'TagAddForm',
    setup(e) {
      const t = H(ds()),
        n = H('mdi-tag-outline'),
        l = H(''),
        a = H('#FFFFFF'),
        o = H(
          b(() => {
            const s = new nn(l.value)
            return { id: s.id, name: s.name, space: s.space, color: a.value, icon: n.value }
          }),
        )
      function i(s) {
        a.value = s
      }
      function r() {
        t.value.addLabel(l.value, a.value, n.value), (l.value = '')
      }
      return (s, c) => {
        const u = ye('v-text-field'),
          d = ye('v-btn'),
          v = ye('v-icon'),
          m = ye('v-card-text'),
          h = ye('v-col'),
          g = ye('v-divider'),
          y = ye('v-card-actions'),
          p = ye('v-row'),
          _ = ye('v-form')
        return (
          Le(),
          ze(
            _,
            { onSubmit: c[7] || (c[7] = po(() => {}, ['prevent'])) },
            {
              default: ce(() => [
                f(p, null, {
                  default: ce(() => [
                    f(h, null, {
                      default: ce(() => [
                        f(m, null, {
                          default: ce(() => [
                            f(
                              u,
                              {
                                label: 'label',
                                modelValue: l.value,
                                'onUpdate:modelValue': c[0] || (c[0] = (C) => (l.value = C)),
                                density: 'compact',
                                onKeydown: c[1] || (c[1] = Si((C) => r(), ['enter'])),
                                variant: 'outlined',
                                'prepend-inner-icon': 'mdi-label-outline',
                                autofocus: '',
                                'persistent-counter': '',
                              },
                              null,
                              8,
                              ['modelValue'],
                            ),
                            f(
                              u,
                              {
                                label: 'icon',
                                modelValue: n.value,
                                'onUpdate:modelValue': c[2] || (c[2] = (C) => (n.value = C)),
                                density: 'compact',
                                onKeydown: c[3] || (c[3] = Si((C) => r(), ['enter'])),
                                variant: 'outlined',
                                'prepend-inner-icon': n.value,
                              },
                              {
                                append: ce(() => [
                                  f(d, {
                                    icon: 'mdi-search-web',
                                    target: '_blank',
                                    rel: 'noopener noreferrer',
                                    href: 'https://pictogrammers.com/library/mdi/',
                                    size: 'small',
                                    density: 'compact',
                                    variant: 'plain',
                                    ripple: !1,
                                  }),
                                ]),
                                _: 1,
                              },
                              8,
                              ['modelValue', 'prepend-inner-icon'],
                            ),
                            f(
                              u,
                              {
                                label: 'color',
                                modelValue: a.value,
                                'onUpdate:modelValue': c[4] || (c[4] = (C) => (a.value = C)),
                                density: 'compact',
                                onKeydown: c[5] || (c[5] = Si((C) => r(), ['enter'])),
                                variant: 'outlined',
                              },
                              {
                                'prepend-inner': ce(() => [
                                  f(v, { icon: 'mdi-circle-opacity', color: a.value }, null, 8, [
                                    'color',
                                  ]),
                                ]),
                                append: ce(() => [f(b0, { onApplyColor: i })]),
                                _: 1,
                              },
                              8,
                              ['modelValue'],
                            ),
                          ]),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    f(g, { vertical: '' }),
                    f(h, null, {
                      default: ce(() => [
                        f(
                          m,
                          { class: 'text-center' },
                          {
                            default: ce(() => [
                              f(g, null, {
                                default: ce(() => c[8] || (c[8] = [Xe('sample')])),
                                _: 1,
                              }),
                              f(
                                rr,
                                {
                                  label: o.value.name,
                                  icon: n.value,
                                  color: a.value,
                                  value: l.value,
                                  variant: 'tonal',
                                  class: 'elevation-4',
                                },
                                null,
                                8,
                                ['label', 'icon', 'color', 'value'],
                              ),
                              f(g, null, {
                                default: ce(() => c[9] || (c[9] = [Xe('details')])),
                                _: 1,
                              }),
                              Fa('div', p0, [
                                (Le(!0),
                                ho(
                                  ke,
                                  null,
                                  Zd(
                                    o.value,
                                    (C, k) => (
                                      Le(),
                                      ho('div', { key: k }, [
                                        C !== void 0
                                          ? (Le(),
                                            ze(
                                              rr,
                                              {
                                                key: 0,
                                                label: `${C}`,
                                                value: `${C}`,
                                                variant: 'tonal',
                                                class: 'elevation-4',
                                                icon: `$${k}`,
                                                space: `${k}`,
                                              },
                                              null,
                                              8,
                                              ['label', 'value', 'icon', 'space'],
                                            ))
                                          : Nn('', !0),
                                      ])
                                    ),
                                  ),
                                  128,
                                )),
                              ]),
                            ]),
                            _: 1,
                          },
                        ),
                        f(y, null, {
                          default: ce(() => [
                            f(
                              d,
                              {
                                onClick: c[6] || (c[6] = (C) => r()),
                                density: 'comfortable',
                                'prepend-icon': 'mdi-tag-plus',
                                disabled: !l.value,
                                variant: 'tonal',
                                block: '',
                              },
                              null,
                              8,
                              ['disabled'],
                            ),
                          ]),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
              ]),
              _: 1,
            },
          )
        )
      }
    },
  }),
  _0 = at({
    __name: 'AddTag',
    setup(e) {
      return (t, n) => {
        const l = ye('v-card-title'),
          a = ye('v-card-item'),
          o = ye('v-card')
        return (
          Le(),
          ze(
            o,
            { elevation: '0', id: 'color-picker-attach' },
            {
              default: ce(() => [
                f(a, null, {
                  default: ce(() => [
                    f(l, null, { default: ce(() => n[0] || (n[0] = [Xe('Add Tag')])), _: 1 }),
                    f(S0),
                  ]),
                  _: 1,
                }),
              ]),
              _: 1,
            },
          )
        )
      }
    },
  }),
  w0 = at({
    __name: 'TagGroup',
    props: {
      tags: { type: Object },
      noLabel: { type: Boolean, default: !1 },
      noValue: { type: Boolean, default: !1 },
      noIcon: { type: Boolean, default: !1 },
      closable: { type: Boolean, default: !1 },
      tooltip: { type: Boolean, default: !1 },
    },
    emits: ['ctrl-click'],
    setup(e, { emit: t }) {
      const n = t
      function l(a) {
        console.log('ctrl-click', a), n('ctrl-click', a)
      }
      return (a, o) => {
        const i = ye('v-tag-item'),
          r = ye('v-chip-group')
        return (
          Le(),
          ze(
            r,
            { column: '', multiple: '' },
            {
              default: ce(() => [
                (Le(!0),
                ho(
                  ke,
                  null,
                  Zd(
                    e.tags,
                    (s, c) => (
                      Le(),
                      ze(
                        i,
                        {
                          key: c,
                          value: s.id,
                          icon: s.icon,
                          label: s.name,
                          color: s.color,
                          space: s.space,
                          noValue: e.noValue,
                          noLabel: e.noLabel,
                          noIcon: e.noIcon,
                          tooltip: '',
                          onClick: po((u) => l(s), ['ctrl', 'exact']),
                          closable: e.closable,
                        },
                        null,
                        8,
                        [
                          'value',
                          'icon',
                          'label',
                          'color',
                          'space',
                          'noValue',
                          'noLabel',
                          'noIcon',
                          'onClick',
                          'closable',
                        ],
                      )
                    ),
                  ),
                  128,
                )),
              ]),
              _: 1,
            },
          )
        )
      }
    },
  }),
  _v = fl('styles', () => {
    const e = H(!1),
      t = H(!1),
      n = H(!1),
      l = H(!1)
    return { closable: e, add: t, labels: n, icons: l }
  }),
  C0 = at({
    __name: 'TagStyles',
    setup(e) {
      const t = H(_v())
      return (n, l) => {
        const a = ye('v-icon'),
          o = ye('v-tooltip'),
          i = ye('v-btn'),
          r = ye('v-spacer'),
          s = ye('v-btn-toggle')
        return (
          Le(),
          ze(
            s,
            {
              density: 'compact',
              class: 'd-flex justify-space-between bg-surface rounded-t-lg',
              variant: 'plain',
            },
            {
              default: ce(() => [
                f(
                  i,
                  {
                    onClick: l[0] || (l[0] = (c) => (t.value.add = !t.value.add)),
                    'prepend-icon': t.value.add ? 'mdi-tag-plus' : 'mdi-tag-plus-outline',
                    ripple: !1,
                  },
                  {
                    default: ce(() => [
                      f(
                        o,
                        { activator: 'parent', location: 'top' },
                        {
                          default: ce(() => [
                            f(
                              a,
                              { icon: t.value.add ? 'mdi-tag-plus' : 'mdi-tag-plus-outline' },
                              null,
                              8,
                              ['icon'],
                            ),
                            l[4] || (l[4] = Xe(' Add Tag ')),
                          ]),
                          _: 1,
                        },
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ['prepend-icon'],
                ),
                f(r),
                f(
                  i,
                  {
                    onClick: l[1] || (l[1] = (c) => (t.value.labels = !t.value.labels)),
                    'prepend-icon': t.value.labels ? 'mdi-label-off-outline' : 'mdi-label',
                    ripple: !1,
                  },
                  {
                    default: ce(() => [
                      f(
                        o,
                        { activator: 'parent', location: 'top' },
                        {
                          default: ce(() => [
                            l[5] || (l[5] = Xe(' Show labels: ')),
                            f(
                              a,
                              { icon: t.value.labels ? 'mdi-label-off-outline' : 'mdi-label' },
                              null,
                              8,
                              ['icon'],
                            ),
                            Xe(' ' + zt(!t.value.labels), 1),
                          ]),
                          _: 1,
                        },
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ['prepend-icon'],
                ),
                f(
                  i,
                  {
                    onClick: l[2] || (l[2] = (c) => (t.value.icons = !t.value.icons)),
                    'prepend-icon': t.value.icons ? 'mdi-eye-off-outline' : 'mdi-eye',
                    ripple: !1,
                  },
                  {
                    default: ce(() => [
                      f(
                        o,
                        { activator: 'parent', location: 'top' },
                        {
                          default: ce(() => [
                            l[6] || (l[6] = Xe(' Show icons: ')),
                            f(
                              a,
                              { icon: t.value.icons ? 'mdi-eye-off-outline' : 'mdi-eye' },
                              null,
                              8,
                              ['icon'],
                            ),
                            Xe(' ' + zt(!t.value.icons), 1),
                          ]),
                          _: 1,
                        },
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ['prepend-icon'],
                ),
                f(r),
                f(
                  i,
                  {
                    onClick: l[3] || (l[3] = (c) => (t.value.closable = !t.value.closable)),
                    'prepend-icon': t.value.closable ? 'mdi-delete' : 'mdi-delete-outline',
                    ripple: !1,
                  },
                  {
                    default: ce(() => [
                      f(o, {
                        activator: 'parent',
                        location: 'top',
                        text: 'Delete Tags',
                        variant: 'text',
                      }),
                    ]),
                    _: 1,
                  },
                  8,
                  ['prepend-icon'],
                ),
              ]),
              _: 1,
            },
          )
        )
      }
    },
  }),
  k0 = at({
    __name: 'TagManagerLayout',
    setup(e) {
      const t = H(_v()),
        n = H(ds())
      return (l, a) => {
        const o = ye('v-col'),
          i = ye('v-row'),
          r = ye('v-container')
        return (
          Le(),
          ze(
            r,
            { class: 'bg-surface rounded-t-lg' },
            {
              default: ce(() => [
                t.value.add
                  ? (Le(), ze(_0, { key: 0, class: 'bg-background rounded-lg py-1 mb-4' }))
                  : Nn('', !0),
                f(i, null, {
                  default: ce(() => [
                    f(o, { class: 'pa-0' }, { default: ce(() => [f(C0)]), _: 1 }),
                  ]),
                  _: 1,
                }),
                f(i, null, {
                  default: ce(() => [
                    f(
                      o,
                      { class: 'bg-background rounded-lg py-1 mb-4' },
                      {
                        default: ce(() => [
                          f(
                            w0,
                            {
                              tags: n.value.tags,
                              column: '',
                              class: 'bg-background rounded elevation-4 px-2',
                              noLabel: t.value.labels,
                              noIcon: t.value.icons,
                              closable: t.value.closable,
                              modelValue: n.value.selection,
                              'onUpdate:modelValue':
                                a[0] || (a[0] = (s) => (n.value.selection = s)),
                            },
                            null,
                            8,
                            ['tags', 'noLabel', 'noIcon', 'closable', 'modelValue'],
                          ),
                        ]),
                        _: 1,
                      },
                    ),
                  ]),
                  _: 1,
                }),
              ]),
              _: 1,
            },
          )
        )
      }
    },
  }),
  x0 = at({
    __name: 'ManagerDrawerLayout',
    setup(e) {
      const t = H(Xo())
      return (n, l) => {
        const a = ye('v-col'),
          o = ye('v-scale-transition'),
          i = ye('v-container'),
          r = ye('v-navigation-drawer')
        return (
          Le(),
          ze(
            r,
            {
              location: 'bottom',
              scrim: !1,
              class: 'bg-transparent border-t-0',
              modelValue: t.value.drawer,
              'onUpdate:modelValue': l[0] || (l[0] = (s) => (t.value.drawer = s)),
            },
            {
              default: ce(() => [
                f(
                  i,
                  { class: 'bg-surface rounded-t-lg d-flex justify-center pa-0', flat: '' },
                  {
                    default: ce(() => [
                      f(o, null, {
                        default: ce(() => [
                          Ye(f(a, { flat: '' }, { default: ce(() => [f(k0)]), _: 1 }, 512), [
                            [Xt, t.value.tags],
                          ]),
                        ]),
                        _: 1,
                      }),
                      f(o, null, {
                        default: ce(() => [
                          f(a, { cols: 'auto', flat: '' }, { default: ce(() => [f(y0)]), _: 1 }),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  },
                ),
              ]),
              _: 1,
            },
            8,
            ['modelValue'],
          )
        )
      }
    },
  }),
  V0 = at({
    __name: 'App',
    setup(e) {
      const t = H(Xo()),
        n = H(ds())
      return (
        Vt(async () => {
          n.value.addLabel('Jenny Everywhere', 'primary', 'mdi-account-circle'),
            n.value.addLabel('green portal', 'green', 'mdi-orbit'),
            n.value.addLabel('flamethrower', 'red', 'mdi-fire'),
            n.value.addLabel('jetpack', 'warning', 'mdi-rocket-launch'),
            n.value.addLabel('dude with a mohawk', 'text', 'mdi-account-circle-outline')
        }),
        (l, a) => {
          const o = ye('RouterView'),
            i = ye('v-main'),
            r = ye('router-link'),
            s = ye('v-footer'),
            c = ye('v-app'),
            u = ye('v-responsive')
          return (
            Le(),
            ze(
              u,
              { class: 'border rounded' },
              {
                default: ce(() => [
                  f(
                    c,
                    { theme: t.value.theme },
                    {
                      default: ce(() => [
                        f(o0, { location: 'bottom end' }),
                        f(i0, { location: 'bottom start' }),
                        f(a0),
                        f(i, null, { default: ce(() => [f(o)]), _: 1 }),
                        f(s, null, {
                          default: ce(() => [
                            a[1] || (a[1] = Xe('© 2025 - ')),
                            f(
                              r,
                              { to: '/' },
                              {
                                default: ce(() => a[0] || (a[0] = [Xe('JennyEverywhere.online')])),
                                _: 1,
                              },
                            ),
                          ]),
                          _: 1,
                        }),
                        f(x0),
                        f(f0, { app: '', elevation: '2' }),
                      ]),
                      _: 1,
                    },
                    8,
                    ['theme'],
                  ),
                ]),
                _: 1,
              },
            )
          )
        }
      )
    },
  }),
  E0 = (e, t) => {
    const n = e.__vccOpts || e
    for (const [l, a] of t) n[l] = a
    return n
  },
  P0 = E0(V0, [['__scopeId', 'data-v-23751cbf']])
/*!
 * vue-router v4.5.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const xl = typeof document < 'u'
function wv(e) {
  return typeof e == 'object' || 'displayName' in e || 'props' in e || '__vccOpts' in e
}
function A0(e) {
  return e.__esModule || e[Symbol.toStringTag] === 'Module' || (e.default && wv(e.default))
}
const Re = Object.assign
function Vi(e, t) {
  const n = {}
  for (const l in t) {
    const a = t[l]
    n[l] = on(a) ? a.map(e) : e(a)
  }
  return n
}
const fa = () => {},
  on = Array.isArray,
  Cv = /#/g,
  I0 = /&/g,
  T0 = /\//g,
  O0 = /=/g,
  B0 = /\?/g,
  kv = /\+/g,
  L0 = /%5B/g,
  R0 = /%5D/g,
  xv = /%5E/g,
  F0 = /%60/g,
  Vv = /%7B/g,
  M0 = /%7C/g,
  Ev = /%7D/g,
  D0 = /%20/g
function fs(e) {
  return encodeURI('' + e)
    .replace(M0, '|')
    .replace(L0, '[')
    .replace(R0, ']')
}
function $0(e) {
  return fs(e).replace(Vv, '{').replace(Ev, '}').replace(xv, '^')
}
function sr(e) {
  return fs(e)
    .replace(kv, '%2B')
    .replace(D0, '+')
    .replace(Cv, '%23')
    .replace(I0, '%26')
    .replace(F0, '`')
    .replace(Vv, '{')
    .replace(Ev, '}')
    .replace(xv, '^')
}
function N0(e) {
  return sr(e).replace(O0, '%3D')
}
function H0(e) {
  return fs(e).replace(Cv, '%23').replace(B0, '%3F')
}
function j0(e) {
  return e == null ? '' : H0(e).replace(T0, '%2F')
}
function Ca(e) {
  try {
    return decodeURIComponent('' + e)
  } catch {}
  return '' + e
}
const z0 = /\/$/,
  W0 = (e) => e.replace(z0, '')
function Ei(e, t, n = '/') {
  let l,
    a = {},
    o = '',
    i = ''
  const r = t.indexOf('#')
  let s = t.indexOf('?')
  return (
    r < s && r >= 0 && (s = -1),
    s > -1 && ((l = t.slice(0, s)), (o = t.slice(s + 1, r > -1 ? r : t.length)), (a = e(o))),
    r > -1 && ((l = l || t.slice(0, r)), (i = t.slice(r, t.length))),
    (l = Y0(l ?? t, n)),
    { fullPath: l + (o && '?') + o + i, path: l, query: a, hash: Ca(i) }
  )
}
function U0(e, t) {
  const n = t.query ? e(t.query) : ''
  return t.path + (n && '?') + n + (t.hash || '')
}
function yc(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || '/'
}
function K0(e, t, n) {
  const l = t.matched.length - 1,
    a = n.matched.length - 1
  return (
    l > -1 &&
    l === a &&
    Fl(t.matched[l], n.matched[a]) &&
    Pv(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  )
}
function Fl(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function Pv(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (!G0(e[n], t[n])) return !1
  return !0
}
function G0(e, t) {
  return on(e) ? bc(e, t) : on(t) ? bc(t, e) : e === t
}
function bc(e, t) {
  return on(t)
    ? e.length === t.length && e.every((n, l) => n === t[l])
    : e.length === 1 && e[0] === t
}
function Y0(e, t) {
  if (e.startsWith('/')) return e
  if (!e) return t
  const n = t.split('/'),
    l = e.split('/'),
    a = l[l.length - 1]
  ;(a === '..' || a === '.') && l.push('')
  let o = n.length - 1,
    i,
    r
  for (i = 0; i < l.length; i++)
    if (((r = l[i]), r !== '.'))
      if (r === '..') o > 1 && o--
      else break
  return n.slice(0, o).join('/') + '/' + l.slice(i).join('/')
}
const Tn = {
  path: '/',
  name: void 0,
  params: {},
  query: {},
  hash: '',
  fullPath: '/',
  matched: [],
  meta: {},
  redirectedFrom: void 0,
}
var ka
;(function (e) {
  ;(e.pop = 'pop'), (e.push = 'push')
})(ka || (ka = {}))
var va
;(function (e) {
  ;(e.back = 'back'), (e.forward = 'forward'), (e.unknown = '')
})(va || (va = {}))
function q0(e) {
  if (!e)
    if (xl) {
      const t = document.querySelector('base')
      ;(e = (t && t.getAttribute('href')) || '/'), (e = e.replace(/^\w+:\/\/[^\/]+/, ''))
    } else e = '/'
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), W0(e)
}
const X0 = /^[^#]+#/
function Q0(e, t) {
  return e.replace(X0, '#') + t
}
function Z0(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    l = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: l.left - n.left - (t.left || 0),
    top: l.top - n.top - (t.top || 0),
  }
}
const Qo = () => ({ left: window.scrollX, top: window.scrollY })
function J0(e) {
  let t
  if ('el' in e) {
    const n = e.el,
      l = typeof n == 'string' && n.startsWith('#'),
      a =
        typeof n == 'string'
          ? l
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n
    if (!a) return
    t = Z0(a, e)
  } else t = e
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY,
      )
}
function pc(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const ur = new Map()
function eS(e, t) {
  ur.set(e, t)
}
function tS(e) {
  const t = ur.get(e)
  return ur.delete(e), t
}
let nS = () => location.protocol + '//' + location.host
function Av(e, t) {
  const { pathname: n, search: l, hash: a } = t,
    o = e.indexOf('#')
  if (o > -1) {
    let r = a.includes(e.slice(o)) ? e.slice(o).length : 1,
      s = a.slice(r)
    return s[0] !== '/' && (s = '/' + s), yc(s, '')
  }
  return yc(n, e) + l + a
}
function lS(e, t, n, l) {
  let a = [],
    o = [],
    i = null
  const r = ({ state: v }) => {
    const m = Av(e, location),
      h = n.value,
      g = t.value
    let y = 0
    if (v) {
      if (((n.value = m), (t.value = v), i && i === h)) {
        i = null
        return
      }
      y = g ? v.position - g.position : 0
    } else l(m)
    a.forEach((p) => {
      p(n.value, h, {
        delta: y,
        type: ka.pop,
        direction: y ? (y > 0 ? va.forward : va.back) : va.unknown,
      })
    })
  }
  function s() {
    i = n.value
  }
  function c(v) {
    a.push(v)
    const m = () => {
      const h = a.indexOf(v)
      h > -1 && a.splice(h, 1)
    }
    return o.push(m), m
  }
  function u() {
    const { history: v } = window
    v.state && v.replaceState(Re({}, v.state, { scroll: Qo() }), '')
  }
  function d() {
    for (const v of o) v()
    ;(o = []),
      window.removeEventListener('popstate', r),
      window.removeEventListener('beforeunload', u)
  }
  return (
    window.addEventListener('popstate', r),
    window.addEventListener('beforeunload', u, { passive: !0 }),
    { pauseListeners: s, listen: c, destroy: d }
  )
}
function Sc(e, t, n, l = !1, a = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: l,
    position: window.history.length,
    scroll: a ? Qo() : null,
  }
}
function aS(e) {
  const { history: t, location: n } = window,
    l = { value: Av(e, n) },
    a = { value: t.state }
  a.value ||
    o(
      l.value,
      {
        back: null,
        current: l.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0,
    )
  function o(s, c, u) {
    const d = e.indexOf('#'),
      v = d > -1 ? (n.host && document.querySelector('base') ? e : e.slice(d)) + s : nS() + e + s
    try {
      t[u ? 'replaceState' : 'pushState'](c, '', v), (a.value = c)
    } catch (m) {
      console.error(m), n[u ? 'replace' : 'assign'](v)
    }
  }
  function i(s, c) {
    const u = Re({}, t.state, Sc(a.value.back, s, a.value.forward, !0), c, {
      position: a.value.position,
    })
    o(s, u, !0), (l.value = s)
  }
  function r(s, c) {
    const u = Re({}, a.value, t.state, { forward: s, scroll: Qo() })
    o(u.current, u, !0)
    const d = Re({}, Sc(l.value, s, null), { position: u.position + 1 }, c)
    o(s, d, !1), (l.value = s)
  }
  return { location: l, state: a, push: r, replace: i }
}
function oS(e) {
  e = q0(e)
  const t = aS(e),
    n = lS(e, t.state, t.location, t.replace)
  function l(o, i = !0) {
    i || n.pauseListeners(), history.go(o)
  }
  const a = Re({ location: '', base: e, go: l, createHref: Q0.bind(null, e) }, t, n)
  return (
    Object.defineProperty(a, 'location', { enumerable: !0, get: () => t.location.value }),
    Object.defineProperty(a, 'state', { enumerable: !0, get: () => t.state.value }),
    a
  )
}
function iS(e) {
  return typeof e == 'string' || (e && typeof e == 'object')
}
function Iv(e) {
  return typeof e == 'string' || typeof e == 'symbol'
}
const Tv = Symbol('')
var _c
;(function (e) {
  ;(e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated')
})(_c || (_c = {}))
function Ml(e, t) {
  return Re(new Error(), { type: e, [Tv]: !0 }, t)
}
function Sn(e, t) {
  return e instanceof Error && Tv in e && (t == null || !!(e.type & t))
}
const wc = '[^/]+?',
  rS = { sensitive: !1, strict: !1, start: !0, end: !0 },
  sS = /[.+*?^${}()[\]/\\]/g
function uS(e, t) {
  const n = Re({}, rS, t),
    l = []
  let a = n.start ? '^' : ''
  const o = []
  for (const c of e) {
    const u = c.length ? [] : [90]
    n.strict && !c.length && (a += '/')
    for (let d = 0; d < c.length; d++) {
      const v = c[d]
      let m = 40 + (n.sensitive ? 0.25 : 0)
      if (v.type === 0) d || (a += '/'), (a += v.value.replace(sS, '\\$&')), (m += 40)
      else if (v.type === 1) {
        const { value: h, repeatable: g, optional: y, regexp: p } = v
        o.push({ name: h, repeatable: g, optional: y })
        const _ = p || wc
        if (_ !== wc) {
          m += 10
          try {
            new RegExp(`(${_})`)
          } catch (k) {
            throw new Error(`Invalid custom RegExp for param "${h}" (${_}): ` + k.message)
          }
        }
        let C = g ? `((?:${_})(?:/(?:${_}))*)` : `(${_})`
        d || (C = y && c.length < 2 ? `(?:/${C})` : '/' + C),
          y && (C += '?'),
          (a += C),
          (m += 20),
          y && (m += -8),
          g && (m += -20),
          _ === '.*' && (m += -50)
      }
      u.push(m)
    }
    l.push(u)
  }
  if (n.strict && n.end) {
    const c = l.length - 1
    l[c][l[c].length - 1] += 0.7000000000000001
  }
  n.strict || (a += '/?'), n.end ? (a += '$') : n.strict && !a.endsWith('/') && (a += '(?:/|$)')
  const i = new RegExp(a, n.sensitive ? '' : 'i')
  function r(c) {
    const u = c.match(i),
      d = {}
    if (!u) return null
    for (let v = 1; v < u.length; v++) {
      const m = u[v] || '',
        h = o[v - 1]
      d[h.name] = m && h.repeatable ? m.split('/') : m
    }
    return d
  }
  function s(c) {
    let u = '',
      d = !1
    for (const v of e) {
      ;(!d || !u.endsWith('/')) && (u += '/'), (d = !1)
      for (const m of v)
        if (m.type === 0) u += m.value
        else if (m.type === 1) {
          const { value: h, repeatable: g, optional: y } = m,
            p = h in c ? c[h] : ''
          if (on(p) && !g)
            throw new Error(
              `Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`,
            )
          const _ = on(p) ? p.join('/') : p
          if (!_)
            if (y) v.length < 2 && (u.endsWith('/') ? (u = u.slice(0, -1)) : (d = !0))
            else throw new Error(`Missing required param "${h}"`)
          u += _
        }
    }
    return u || '/'
  }
  return { re: i, score: l, keys: o, parse: r, stringify: s }
}
function cS(e, t) {
  let n = 0
  for (; n < e.length && n < t.length; ) {
    const l = t[n] - e[n]
    if (l) return l
    n++
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 80
      ? -1
      : 1
    : e.length > t.length
      ? t.length === 1 && t[0] === 80
        ? 1
        : -1
      : 0
}
function Ov(e, t) {
  let n = 0
  const l = e.score,
    a = t.score
  for (; n < l.length && n < a.length; ) {
    const o = cS(l[n], a[n])
    if (o) return o
    n++
  }
  if (Math.abs(a.length - l.length) === 1) {
    if (Cc(l)) return 1
    if (Cc(a)) return -1
  }
  return a.length - l.length
}
function Cc(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const dS = { type: 0, value: '' },
  fS = /[a-zA-Z0-9_]/
function vS(e) {
  if (!e) return [[]]
  if (e === '/') return [[dS]]
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`)
  function t(m) {
    throw new Error(`ERR (${n})/"${c}": ${m}`)
  }
  let n = 0,
    l = n
  const a = []
  let o
  function i() {
    o && a.push(o), (o = [])
  }
  let r = 0,
    s,
    c = '',
    u = ''
  function d() {
    c &&
      (n === 0
        ? o.push({ type: 0, value: c })
        : n === 1 || n === 2 || n === 3
          ? (o.length > 1 &&
              (s === '*' || s === '+') &&
              t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),
            o.push({
              type: 1,
              value: c,
              regexp: u,
              repeatable: s === '*' || s === '+',
              optional: s === '*' || s === '?',
            }))
          : t('Invalid state to consume buffer'),
      (c = ''))
  }
  function v() {
    c += s
  }
  for (; r < e.length; ) {
    if (((s = e[r++]), s === '\\' && n !== 2)) {
      ;(l = n), (n = 4)
      continue
    }
    switch (n) {
      case 0:
        s === '/' ? (c && d(), i()) : s === ':' ? (d(), (n = 1)) : v()
        break
      case 4:
        v(), (n = l)
        break
      case 1:
        s === '('
          ? (n = 2)
          : fS.test(s)
            ? v()
            : (d(), (n = 0), s !== '*' && s !== '?' && s !== '+' && r--)
        break
      case 2:
        s === ')' ? (u[u.length - 1] == '\\' ? (u = u.slice(0, -1) + s) : (n = 3)) : (u += s)
        break
      case 3:
        d(), (n = 0), s !== '*' && s !== '?' && s !== '+' && r--, (u = '')
        break
      default:
        t('Unknown state')
        break
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), d(), i(), a
}
function mS(e, t, n) {
  const l = uS(vS(e.path), n),
    a = Re(l, { record: e, parent: t, children: [], alias: [] })
  return t && !a.record.aliasOf == !t.record.aliasOf && t.children.push(a), a
}
function hS(e, t) {
  const n = [],
    l = new Map()
  t = Ec({ strict: !1, end: !0, sensitive: !1 }, t)
  function a(d) {
    return l.get(d)
  }
  function o(d, v, m) {
    const h = !m,
      g = xc(d)
    g.aliasOf = m && m.record
    const y = Ec(t, d),
      p = [g]
    if ('alias' in d) {
      const k = typeof d.alias == 'string' ? [d.alias] : d.alias
      for (const I of k)
        p.push(
          xc(
            Re({}, g, {
              components: m ? m.record.components : g.components,
              path: I,
              aliasOf: m ? m.record : g,
            }),
          ),
        )
    }
    let _, C
    for (const k of p) {
      const { path: I } = k
      if (v && I[0] !== '/') {
        const P = v.record.path,
          A = P[P.length - 1] === '/' ? '' : '/'
        k.path = v.record.path + (I && A + I)
      }
      if (
        ((_ = mS(k, v, y)),
        m
          ? m.alias.push(_)
          : ((C = C || _), C !== _ && C.alias.push(_), h && d.name && !Vc(_) && i(d.name)),
        Bv(_) && s(_),
        g.children)
      ) {
        const P = g.children
        for (let A = 0; A < P.length; A++) o(P[A], _, m && m.children[A])
      }
      m = m || _
    }
    return C
      ? () => {
          i(C)
        }
      : fa
  }
  function i(d) {
    if (Iv(d)) {
      const v = l.get(d)
      v && (l.delete(d), n.splice(n.indexOf(v), 1), v.children.forEach(i), v.alias.forEach(i))
    } else {
      const v = n.indexOf(d)
      v > -1 &&
        (n.splice(v, 1),
        d.record.name && l.delete(d.record.name),
        d.children.forEach(i),
        d.alias.forEach(i))
    }
  }
  function r() {
    return n
  }
  function s(d) {
    const v = bS(d, n)
    n.splice(v, 0, d), d.record.name && !Vc(d) && l.set(d.record.name, d)
  }
  function c(d, v) {
    let m,
      h = {},
      g,
      y
    if ('name' in d && d.name) {
      if (((m = l.get(d.name)), !m)) throw Ml(1, { location: d })
      ;(y = m.record.name),
        (h = Re(
          kc(
            v.params,
            m.keys
              .filter((C) => !C.optional)
              .concat(m.parent ? m.parent.keys.filter((C) => C.optional) : [])
              .map((C) => C.name),
          ),
          d.params &&
            kc(
              d.params,
              m.keys.map((C) => C.name),
            ),
        )),
        (g = m.stringify(h))
    } else if (d.path != null)
      (g = d.path), (m = n.find((C) => C.re.test(g))), m && ((h = m.parse(g)), (y = m.record.name))
    else {
      if (((m = v.name ? l.get(v.name) : n.find((C) => C.re.test(v.path))), !m))
        throw Ml(1, { location: d, currentLocation: v })
      ;(y = m.record.name), (h = Re({}, v.params, d.params)), (g = m.stringify(h))
    }
    const p = []
    let _ = m
    for (; _; ) p.unshift(_.record), (_ = _.parent)
    return { name: y, path: g, params: h, matched: p, meta: yS(p) }
  }
  e.forEach((d) => o(d))
  function u() {
    ;(n.length = 0), l.clear()
  }
  return {
    addRoute: o,
    resolve: c,
    removeRoute: i,
    clearRoutes: u,
    getRoutes: r,
    getRecordMatcher: a,
  }
}
function kc(e, t) {
  const n = {}
  for (const l of t) l in e && (n[l] = e[l])
  return n
}
function xc(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: gS(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: 'components' in e ? e.components || null : e.component && { default: e.component },
  }
  return Object.defineProperty(t, 'mods', { value: {} }), t
}
function gS(e) {
  const t = {},
    n = e.props || !1
  if ('component' in e) t.default = n
  else for (const l in e.components) t[l] = typeof n == 'object' ? n[l] : n
  return t
}
function Vc(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function yS(e) {
  return e.reduce((t, n) => Re(t, n.meta), {})
}
function Ec(e, t) {
  const n = {}
  for (const l in e) n[l] = l in t ? t[l] : e[l]
  return n
}
function bS(e, t) {
  let n = 0,
    l = t.length
  for (; n !== l; ) {
    const o = (n + l) >> 1
    Ov(e, t[o]) < 0 ? (l = o) : (n = o + 1)
  }
  const a = pS(e)
  return a && (l = t.lastIndexOf(a, l - 1)), l
}
function pS(e) {
  let t = e
  for (; (t = t.parent); ) if (Bv(t) && Ov(e, t) === 0) return t
}
function Bv({ record: e }) {
  return !!(e.name || (e.components && Object.keys(e.components).length) || e.redirect)
}
function SS(e) {
  const t = {}
  if (e === '' || e === '?') return t
  const l = (e[0] === '?' ? e.slice(1) : e).split('&')
  for (let a = 0; a < l.length; ++a) {
    const o = l[a].replace(kv, ' '),
      i = o.indexOf('='),
      r = Ca(i < 0 ? o : o.slice(0, i)),
      s = i < 0 ? null : Ca(o.slice(i + 1))
    if (r in t) {
      let c = t[r]
      on(c) || (c = t[r] = [c]), c.push(s)
    } else t[r] = s
  }
  return t
}
function Pc(e) {
  let t = ''
  for (let n in e) {
    const l = e[n]
    if (((n = N0(n)), l == null)) {
      l !== void 0 && (t += (t.length ? '&' : '') + n)
      continue
    }
    ;(on(l) ? l.map((o) => o && sr(o)) : [l && sr(l)]).forEach((o) => {
      o !== void 0 && ((t += (t.length ? '&' : '') + n), o != null && (t += '=' + o))
    })
  }
  return t
}
function _S(e) {
  const t = {}
  for (const n in e) {
    const l = e[n]
    l !== void 0 &&
      (t[n] = on(l) ? l.map((a) => (a == null ? null : '' + a)) : l == null ? l : '' + l)
  }
  return t
}
const wS = Symbol(''),
  Ac = Symbol(''),
  vs = Symbol(''),
  Lv = Symbol(''),
  cr = Symbol('')
function ea() {
  let e = []
  function t(l) {
    return (
      e.push(l),
      () => {
        const a = e.indexOf(l)
        a > -1 && e.splice(a, 1)
      }
    )
  }
  function n() {
    e = []
  }
  return { add: t, list: () => e.slice(), reset: n }
}
function Mn(e, t, n, l, a, o = (i) => i()) {
  const i = l && (l.enterCallbacks[a] = l.enterCallbacks[a] || [])
  return () =>
    new Promise((r, s) => {
      const c = (v) => {
          v === !1
            ? s(Ml(4, { from: n, to: t }))
            : v instanceof Error
              ? s(v)
              : iS(v)
                ? s(Ml(2, { from: t, to: v }))
                : (i && l.enterCallbacks[a] === i && typeof v == 'function' && i.push(v), r())
        },
        u = o(() => e.call(l && l.instances[a], t, n, c))
      let d = Promise.resolve(u)
      e.length < 3 && (d = d.then(c)), d.catch((v) => s(v))
    })
}
function Pi(e, t, n, l, a = (o) => o()) {
  const o = []
  for (const i of e)
    for (const r in i.components) {
      let s = i.components[r]
      if (!(t !== 'beforeRouteEnter' && !i.instances[r]))
        if (wv(s)) {
          const u = (s.__vccOpts || s)[t]
          u && o.push(Mn(u, n, l, i, r, a))
        } else {
          let c = s()
          o.push(() =>
            c.then((u) => {
              if (!u) throw new Error(`Couldn't resolve component "${r}" at "${i.path}"`)
              const d = A0(u) ? u.default : u
              ;(i.mods[r] = u), (i.components[r] = d)
              const m = (d.__vccOpts || d)[t]
              return m && Mn(m, n, l, i, r, a)()
            }),
          )
        }
    }
  return o
}
function Ic(e) {
  const t = Ie(vs),
    n = Ie(Lv),
    l = b(() => {
      const s = nt(e.to)
      return t.resolve(s)
    }),
    a = b(() => {
      const { matched: s } = l.value,
        { length: c } = s,
        u = s[c - 1],
        d = n.matched
      if (!u || !d.length) return -1
      const v = d.findIndex(Fl.bind(null, u))
      if (v > -1) return v
      const m = Tc(s[c - 2])
      return c > 1 && Tc(u) === m && d[d.length - 1].path !== m
        ? d.findIndex(Fl.bind(null, s[c - 2]))
        : v
    }),
    o = b(() => a.value > -1 && ES(n.params, l.value.params)),
    i = b(() => a.value > -1 && a.value === n.matched.length - 1 && Pv(n.params, l.value.params))
  function r(s = {}) {
    if (VS(s)) {
      const c = t[nt(e.replace) ? 'replace' : 'push'](nt(e.to)).catch(fa)
      return (
        e.viewTransition &&
          typeof document < 'u' &&
          'startViewTransition' in document &&
          document.startViewTransition(() => c),
        c
      )
    }
    return Promise.resolve()
  }
  return { route: l, href: b(() => l.value.href), isActive: o, isExactActive: i, navigate: r }
}
function CS(e) {
  return e.length === 1 ? e[0] : e
}
const kS = at({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' },
    },
    useLink: Ic,
    setup(e, { slots: t }) {
      const n = rt(Ic(e)),
        { options: l } = Ie(vs),
        a = b(() => ({
          [Oc(e.activeClass, l.linkActiveClass, 'router-link-active')]: n.isActive,
          [Oc(e.exactActiveClass, l.linkExactActiveClass, 'router-link-exact-active')]:
            n.isExactActive,
        }))
      return () => {
        const o = t.default && CS(t.default(n))
        return e.custom
          ? o
          : sn(
              'a',
              {
                'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: a.value,
              },
              o,
            )
      }
    },
  }),
  xS = kS
function VS(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target')
      if (/\b_blank\b/i.test(t)) return
    }
    return e.preventDefault && e.preventDefault(), !0
  }
}
function ES(e, t) {
  for (const n in t) {
    const l = t[n],
      a = e[n]
    if (typeof l == 'string') {
      if (l !== a) return !1
    } else if (!on(a) || a.length !== l.length || l.some((o, i) => o !== a[i])) return !1
  }
  return !0
}
function Tc(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ''
}
const Oc = (e, t, n) => e ?? t ?? n,
  PS = at({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const l = Ie(cr),
        a = b(() => e.route || l.value),
        o = Ie(Ac, 0),
        i = b(() => {
          let c = nt(o)
          const { matched: u } = a.value
          let d
          for (; (d = u[c]) && !d.components; ) c++
          return c
        }),
        r = b(() => a.value.matched[i.value])
      Ze(
        Ac,
        b(() => i.value + 1),
      ),
        Ze(wS, r),
        Ze(cr, a)
      const s = H()
      return (
        me(
          () => [s.value, r.value, e.name],
          ([c, u, d], [v, m, h]) => {
            u &&
              ((u.instances[d] = c),
              m &&
                m !== u &&
                c &&
                c === v &&
                (u.leaveGuards.size || (u.leaveGuards = m.leaveGuards),
                u.updateGuards.size || (u.updateGuards = m.updateGuards))),
              c && u && (!m || !Fl(u, m) || !v) && (u.enterCallbacks[d] || []).forEach((g) => g(c))
          },
          { flush: 'post' },
        ),
        () => {
          const c = a.value,
            u = e.name,
            d = r.value,
            v = d && d.components[u]
          if (!v) return Bc(n.default, { Component: v, route: c })
          const m = d.props[u],
            h = m ? (m === !0 ? c.params : typeof m == 'function' ? m(c) : m) : null,
            y = sn(
              v,
              Re({}, h, t, {
                onVnodeUnmounted: (p) => {
                  p.component.isUnmounted && (d.instances[u] = null)
                },
                ref: s,
              }),
            )
          return Bc(n.default, { Component: y, route: c }) || y
        }
      )
    },
  })
function Bc(e, t) {
  if (!e) return null
  const n = e(t)
  return n.length === 1 ? n[0] : n
}
const AS = PS
function IS(e) {
  const t = hS(e.routes, e),
    n = e.parseQuery || SS,
    l = e.stringifyQuery || Pc,
    a = e.history,
    o = ea(),
    i = ea(),
    r = ea(),
    s = ue(Tn)
  let c = Tn
  xl && e.scrollBehavior && 'scrollRestoration' in history && (history.scrollRestoration = 'manual')
  const u = Vi.bind(null, (L) => '' + L),
    d = Vi.bind(null, j0),
    v = Vi.bind(null, Ca)
  function m(L, Y) {
    let Z, le
    return Iv(L) ? ((Z = t.getRecordMatcher(L)), (le = Y)) : (le = L), t.addRoute(le, Z)
  }
  function h(L) {
    const Y = t.getRecordMatcher(L)
    Y && t.removeRoute(Y)
  }
  function g() {
    return t.getRoutes().map((L) => L.record)
  }
  function y(L) {
    return !!t.getRecordMatcher(L)
  }
  function p(L, Y) {
    if (((Y = Re({}, Y || s.value)), typeof L == 'string')) {
      const w = Ei(n, L, Y.path),
        B = t.resolve({ path: w.path }, Y),
        z = a.createHref(w.fullPath)
      return Re(w, B, { params: v(B.params), hash: Ca(w.hash), redirectedFrom: void 0, href: z })
    }
    let Z
    if (L.path != null) Z = Re({}, L, { path: Ei(n, L.path, Y.path).path })
    else {
      const w = Re({}, L.params)
      for (const B in w) w[B] == null && delete w[B]
      ;(Z = Re({}, L, { params: d(w) })), (Y.params = d(Y.params))
    }
    const le = t.resolve(Z, Y),
      K = L.hash || ''
    le.params = u(v(le.params))
    const de = U0(l, Re({}, L, { hash: $0(K), path: le.path })),
      S = a.createHref(de)
    return Re({ fullPath: de, hash: K, query: l === Pc ? _S(L.query) : L.query || {} }, le, {
      redirectedFrom: void 0,
      href: S,
    })
  }
  function _(L) {
    return typeof L == 'string' ? Ei(n, L, s.value.path) : Re({}, L)
  }
  function C(L, Y) {
    if (c !== L) return Ml(8, { from: Y, to: L })
  }
  function k(L) {
    return A(L)
  }
  function I(L) {
    return k(Re(_(L), { replace: !0 }))
  }
  function P(L) {
    const Y = L.matched[L.matched.length - 1]
    if (Y && Y.redirect) {
      const { redirect: Z } = Y
      let le = typeof Z == 'function' ? Z(L) : Z
      return (
        typeof le == 'string' &&
          ((le = le.includes('?') || le.includes('#') ? (le = _(le)) : { path: le }),
          (le.params = {})),
        Re({ query: L.query, hash: L.hash, params: le.path != null ? {} : L.params }, le)
      )
    }
  }
  function A(L, Y) {
    const Z = (c = p(L)),
      le = s.value,
      K = L.state,
      de = L.force,
      S = L.replace === !0,
      w = P(Z)
    if (w)
      return A(
        Re(_(w), { state: typeof w == 'object' ? Re({}, K, w.state) : K, force: de, replace: S }),
        Y || Z,
      )
    const B = Z
    B.redirectedFrom = Y
    let z
    return (
      !de && K0(l, le, Z) && ((z = Ml(16, { to: B, from: le })), M(le, le, !0, !1)),
      (z ? Promise.resolve(z) : O(B, le))
        .catch((D) => (Sn(D) ? (Sn(D, 2) ? D : F(D)) : X(D, B, le)))
        .then((D) => {
          if (D) {
            if (Sn(D, 2))
              return A(
                Re({ replace: S }, _(D.to), {
                  state: typeof D.to == 'object' ? Re({}, K, D.to.state) : K,
                  force: de,
                }),
                Y || B,
              )
          } else D = E(B, le, !0, S, K)
          return T(B, le, D), D
        })
    )
  }
  function V(L, Y) {
    const Z = C(L, Y)
    return Z ? Promise.reject(Z) : Promise.resolve()
  }
  function x(L) {
    const Y = ie.values().next().value
    return Y && typeof Y.runWithContext == 'function' ? Y.runWithContext(L) : L()
  }
  function O(L, Y) {
    let Z
    const [le, K, de] = TS(L, Y)
    Z = Pi(le.reverse(), 'beforeRouteLeave', L, Y)
    for (const w of le)
      w.leaveGuards.forEach((B) => {
        Z.push(Mn(B, L, Y))
      })
    const S = V.bind(null, L, Y)
    return (
      Z.push(S),
      j(Z)
        .then(() => {
          Z = []
          for (const w of o.list()) Z.push(Mn(w, L, Y))
          return Z.push(S), j(Z)
        })
        .then(() => {
          Z = Pi(K, 'beforeRouteUpdate', L, Y)
          for (const w of K)
            w.updateGuards.forEach((B) => {
              Z.push(Mn(B, L, Y))
            })
          return Z.push(S), j(Z)
        })
        .then(() => {
          Z = []
          for (const w of de)
            if (w.beforeEnter)
              if (on(w.beforeEnter)) for (const B of w.beforeEnter) Z.push(Mn(B, L, Y))
              else Z.push(Mn(w.beforeEnter, L, Y))
          return Z.push(S), j(Z)
        })
        .then(
          () => (
            L.matched.forEach((w) => (w.enterCallbacks = {})),
            (Z = Pi(de, 'beforeRouteEnter', L, Y, x)),
            Z.push(S),
            j(Z)
          ),
        )
        .then(() => {
          Z = []
          for (const w of i.list()) Z.push(Mn(w, L, Y))
          return Z.push(S), j(Z)
        })
        .catch((w) => (Sn(w, 8) ? w : Promise.reject(w)))
    )
  }
  function T(L, Y, Z) {
    r.list().forEach((le) => x(() => le(L, Y, Z)))
  }
  function E(L, Y, Z, le, K) {
    const de = C(L, Y)
    if (de) return de
    const S = Y === Tn,
      w = xl ? history.state : {}
    Z &&
      (le || S
        ? a.replace(L.fullPath, Re({ scroll: S && w && w.scroll }, K))
        : a.push(L.fullPath, K)),
      (s.value = L),
      M(L, Y, Z, S),
      F()
  }
  let R
  function N() {
    R ||
      (R = a.listen((L, Y, Z) => {
        if (!pe.listening) return
        const le = p(L),
          K = P(le)
        if (K) {
          A(Re(K, { replace: !0, force: !0 }), le).catch(fa)
          return
        }
        c = le
        const de = s.value
        xl && eS(pc(de.fullPath, Z.delta), Qo()),
          O(le, de)
            .catch((S) =>
              Sn(S, 12)
                ? S
                : Sn(S, 2)
                  ? (A(Re(_(S.to), { force: !0 }), le)
                      .then((w) => {
                        Sn(w, 20) && !Z.delta && Z.type === ka.pop && a.go(-1, !1)
                      })
                      .catch(fa),
                    Promise.reject())
                  : (Z.delta && a.go(-Z.delta, !1), X(S, le, de)),
            )
            .then((S) => {
              ;(S = S || E(le, de, !1)),
                S &&
                  (Z.delta && !Sn(S, 8)
                    ? a.go(-Z.delta, !1)
                    : Z.type === ka.pop && Sn(S, 20) && a.go(-1, !1)),
                T(le, de, S)
            })
            .catch(fa)
      }))
  }
  let q = ea(),
    G = ea(),
    ee
  function X(L, Y, Z) {
    F(L)
    const le = G.list()
    return le.length ? le.forEach((K) => K(L, Y, Z)) : console.error(L), Promise.reject(L)
  }
  function U() {
    return ee && s.value !== Tn
      ? Promise.resolve()
      : new Promise((L, Y) => {
          q.add([L, Y])
        })
  }
  function F(L) {
    return ee || ((ee = !L), N(), q.list().forEach(([Y, Z]) => (L ? Z(L) : Y())), q.reset()), L
  }
  function M(L, Y, Z, le) {
    const { scrollBehavior: K } = e
    if (!xl || !K) return Promise.resolve()
    const de =
      (!Z && tS(pc(L.fullPath, 0))) || ((le || !Z) && history.state && history.state.scroll) || null
    return Ke()
      .then(() => K(L, Y, de))
      .then((S) => S && J0(S))
      .catch((S) => X(S, L, Y))
  }
  const ne = (L) => a.go(L)
  let be
  const ie = new Set(),
    pe = {
      currentRoute: s,
      listening: !0,
      addRoute: m,
      removeRoute: h,
      clearRoutes: t.clearRoutes,
      hasRoute: y,
      getRoutes: g,
      resolve: p,
      options: e,
      push: k,
      replace: I,
      go: ne,
      back: () => ne(-1),
      forward: () => ne(1),
      beforeEach: o.add,
      beforeResolve: i.add,
      afterEach: r.add,
      onError: G.add,
      isReady: U,
      install(L) {
        const Y = this
        L.component('RouterLink', xS),
          L.component('RouterView', AS),
          (L.config.globalProperties.$router = Y),
          Object.defineProperty(L.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => nt(s),
          }),
          xl && !be && s.value === Tn && ((be = !0), k(a.location).catch((K) => {}))
        const Z = {}
        for (const K in Tn) Object.defineProperty(Z, K, { get: () => s.value[K], enumerable: !0 })
        L.provide(vs, Y), L.provide(Lv, Td(Z)), L.provide(cr, s)
        const le = L.unmount
        ie.add(L),
          (L.unmount = function () {
            ie.delete(L),
              ie.size < 1 && ((c = Tn), R && R(), (R = null), (s.value = Tn), (be = !1), (ee = !1)),
              le()
          })
      },
    }
  function j(L) {
    return L.reduce((Y, Z) => Y.then(() => x(Z)), Promise.resolve())
  }
  return pe
}
function TS(e, t) {
  const n = [],
    l = [],
    a = [],
    o = Math.max(t.matched.length, e.matched.length)
  for (let i = 0; i < o; i++) {
    const r = t.matched[i]
    r && (e.matched.find((c) => Fl(c, r)) ? l.push(r) : n.push(r))
    const s = e.matched[i]
    s && (t.matched.find((c) => Fl(c, s)) || a.push(s))
  }
  return [n, l, a]
}
const OS = IS({
    history: oS('/jennyeverywhere.online/'),
    routes: [
      {
        path: '/',
        name: 'home',
        component: () => Pe(() => import('./StoryView-BWQiFUEQ.js'), __vite__mapDeps([0, 1, 2])),
      },
      {
        path: '/about',
        name: 'about',
        component: () => Pe(() => import('./AboutView-BBDFvrOB.js'), []),
      },
      {
        path: '/character',
        name: 'character',
        component: () => Pe(() => import('./CharacterView-BAJQ1iW1.js'), []),
        alias: ['/jenny-everywhere', '/newbie'],
      },
      {
        path: '/persona',
        name: 'persona',
        component: () => Pe(() => import('./PersonaView-6xvxutlC.js'), []),
      },
      {
        path: '/timeline',
        name: 'timeline',
        component: () => Pe(() => import('./TimelineView-DL8x-yH1.js'), __vite__mapDeps([3, 4, 1])),
      },
    ],
  }),
  BS = $({ ...ge(), ...yv({ fullHeight: !0 }), ...$e() }, 'VApp'),
  LS = J()({
    name: 'VApp',
    props: BS(),
    setup(e, t) {
      let { slots: n } = t
      const l = qe(e),
        { layoutClasses: a, getLayoutItem: o, items: i, layoutRef: r } = bv(e),
        { rtlClasses: s } = ct()
      return (
        oe(() => {
          var c
          return f(
            'div',
            {
              ref: r,
              class: ['v-application', l.themeClasses.value, a.value, s.value, e.class],
              style: [e.style],
            },
            [
              f('div', { class: 'v-application__wrap' }, [
                (c = n.default) == null ? void 0 : c.call(n),
              ]),
            ],
          )
        }),
        { getLayoutItem: o, items: i, theme: l }
      )
    },
  }),
  Te = $({ tag: { type: String, default: 'div' } }, 'tag'),
  Rv = $({ text: String, ...ge(), ...Te() }, 'VToolbarTitle'),
  ms = J()({
    name: 'VToolbarTitle',
    props: Rv(),
    setup(e, t) {
      let { slots: n } = t
      return (
        oe(() => {
          const l = !!(n.default || n.text || e.text)
          return f(
            e.tag,
            { class: ['v-toolbar-title', e.class], style: e.style },
            {
              default: () => {
                var a
                return [
                  l &&
                    f('div', { class: 'v-toolbar-title__placeholder' }, [
                      n.text ? n.text() : e.text,
                      (a = n.default) == null ? void 0 : a.call(n),
                    ]),
                ]
              },
            },
          )
        }),
        {}
      )
    },
  }),
  RS = $(
    {
      disabled: Boolean,
      group: Boolean,
      hideOnLeave: Boolean,
      leaveAbsolute: Boolean,
      mode: String,
      origin: String,
    },
    'transition',
  )
function Nt(e, t, n) {
  return J()({
    name: e,
    props: RS({ mode: n, origin: t }),
    setup(l, a) {
      let { slots: o } = a
      const i = {
        onBeforeEnter(r) {
          l.origin && (r.style.transformOrigin = l.origin)
        },
        onLeave(r) {
          if (l.leaveAbsolute) {
            const { offsetTop: s, offsetLeft: c, offsetWidth: u, offsetHeight: d } = r
            ;(r._transitionInitialStyles = {
              position: r.style.position,
              top: r.style.top,
              left: r.style.left,
              width: r.style.width,
              height: r.style.height,
            }),
              (r.style.position = 'absolute'),
              (r.style.top = `${s}px`),
              (r.style.left = `${c}px`),
              (r.style.width = `${u}px`),
              (r.style.height = `${d}px`)
          }
          l.hideOnLeave && r.style.setProperty('display', 'none', 'important')
        },
        onAfterLeave(r) {
          if (l.leaveAbsolute && r != null && r._transitionInitialStyles) {
            const { position: s, top: c, left: u, width: d, height: v } = r._transitionInitialStyles
            delete r._transitionInitialStyles,
              (r.style.position = s || ''),
              (r.style.top = c || ''),
              (r.style.left = u || ''),
              (r.style.width = d || ''),
              (r.style.height = v || '')
          }
        },
      }
      return () => {
        const r = l.group ? qr : Hn
        return sn(
          r,
          {
            name: l.disabled ? '' : e,
            css: !l.disabled,
            ...(l.group ? void 0 : { mode: l.mode }),
            ...(l.disabled ? {} : i),
          },
          o.default,
        )
      }
    },
  })
}
function Fv(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 'in-out'
  return J()({
    name: e,
    props: { mode: { type: String, default: n }, disabled: Boolean, group: Boolean },
    setup(l, a) {
      let { slots: o } = a
      const i = l.group ? qr : Hn
      return () =>
        sn(i, { name: l.disabled ? '' : e, css: !l.disabled, ...(l.disabled ? {} : t) }, o.default)
    },
  })
}
function Mv() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ''
  const n = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1)
      ? 'width'
      : 'height',
    l = It(`offset-${n}`)
  return {
    onBeforeEnter(i) {
      ;(i._parent = i.parentNode),
        (i._initialStyle = {
          transition: i.style.transition,
          overflow: i.style.overflow,
          [n]: i.style[n],
        })
    },
    onEnter(i) {
      const r = i._initialStyle
      i.style.setProperty('transition', 'none', 'important'), (i.style.overflow = 'hidden')
      const s = `${i[l]}px`
      ;(i.style[n] = '0'),
        i.offsetHeight,
        (i.style.transition = r.transition),
        e && i._parent && i._parent.classList.add(e),
        requestAnimationFrame(() => {
          i.style[n] = s
        })
    },
    onAfterEnter: o,
    onEnterCancelled: o,
    onLeave(i) {
      ;(i._initialStyle = { transition: '', overflow: i.style.overflow, [n]: i.style[n] }),
        (i.style.overflow = 'hidden'),
        (i.style[n] = `${i[l]}px`),
        i.offsetHeight,
        requestAnimationFrame(() => (i.style[n] = '0'))
    },
    onAfterLeave: a,
    onLeaveCancelled: a,
  }
  function a(i) {
    e && i._parent && i._parent.classList.remove(e), o(i)
  }
  function o(i) {
    const r = i._initialStyle[n]
    ;(i.style.overflow = i._initialStyle.overflow),
      r != null && (i.style[n] = r),
      delete i._initialStyle
  }
}
const FS = $({ target: [Object, Array] }, 'v-dialog-transition'),
  hs = J()({
    name: 'VDialogTransition',
    props: FS(),
    setup(e, t) {
      let { slots: n } = t
      const l = {
        onBeforeEnter(a) {
          ;(a.style.pointerEvents = 'none'), (a.style.visibility = 'hidden')
        },
        async onEnter(a, o) {
          var v
          await new Promise((m) => requestAnimationFrame(m)),
            await new Promise((m) => requestAnimationFrame(m)),
            (a.style.visibility = '')
          const { x: i, y: r, sx: s, sy: c, speed: u } = Rc(e.target, a),
            d = El(
              a,
              [{ transform: `translate(${i}px, ${r}px) scale(${s}, ${c})`, opacity: 0 }, {}],
              { duration: 225 * u, easing: Tb },
            )
          ;(v = Lc(a)) == null ||
            v.forEach((m) => {
              El(m, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], {
                duration: 225 * 2 * u,
                easing: wo,
              })
            }),
            d.finished.then(() => o())
        },
        onAfterEnter(a) {
          a.style.removeProperty('pointer-events')
        },
        onBeforeLeave(a) {
          a.style.pointerEvents = 'none'
        },
        async onLeave(a, o) {
          var v
          await new Promise((m) => requestAnimationFrame(m))
          const { x: i, y: r, sx: s, sy: c, speed: u } = Rc(e.target, a)
          El(a, [{}, { transform: `translate(${i}px, ${r}px) scale(${s}, ${c})`, opacity: 0 }], {
            duration: 125 * u,
            easing: Ob,
          }).finished.then(() => o()),
            (v = Lc(a)) == null ||
              v.forEach((m) => {
                El(m, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], {
                  duration: 125 * 2 * u,
                  easing: wo,
                })
              })
        },
        onAfterLeave(a) {
          a.style.removeProperty('pointer-events')
        },
      }
      return () =>
        e.target
          ? f(Hn, ve({ name: 'dialog-transition' }, l, { css: !1 }), n)
          : f(Hn, { name: 'dialog-transition' }, n)
    },
  })
function Lc(e) {
  var n
  const t =
    (n = e.querySelector(':scope > .v-card, :scope > .v-sheet, :scope > .v-list')) == null
      ? void 0
      : n.children
  return t && [...t]
}
function Rc(e, t) {
  const n = zf(e),
    l = ls(t),
    [a, o] = getComputedStyle(t)
      .transformOrigin.split(' ')
      .map((p) => parseFloat(p)),
    [i, r] = getComputedStyle(t).getPropertyValue('--v-overlay-anchor-origin').split(' ')
  let s = n.left + n.width / 2
  i === 'left' || r === 'left'
    ? (s -= n.width / 2)
    : (i === 'right' || r === 'right') && (s += n.width / 2)
  let c = n.top + n.height / 2
  i === 'top' || r === 'top'
    ? (c -= n.height / 2)
    : (i === 'bottom' || r === 'bottom') && (c += n.height / 2)
  const u = n.width / l.width,
    d = n.height / l.height,
    v = Math.max(1, u, d),
    m = u / v || 0,
    h = d / v || 0,
    g = (l.width * l.height) / (window.innerWidth * window.innerHeight),
    y = g > 0.12 ? Math.min(1.5, (g - 0.12) * 10 + 1) : 1
  return { x: s - (a + l.left), y: c - (o + l.top), sx: m, sy: h, speed: y }
}
Nt('fab-transition', 'center center', 'out-in')
Nt('dialog-bottom-transition')
Nt('dialog-top-transition')
const Fc = Nt('fade-transition'),
  Dv = Nt('scale-transition')
Nt('scroll-x-transition')
Nt('scroll-x-reverse-transition')
Nt('scroll-y-transition')
Nt('scroll-y-reverse-transition')
Nt('slide-x-transition')
Nt('slide-x-reverse-transition')
const $v = Nt('slide-y-transition')
Nt('slide-y-reverse-transition')
const gs = Fv('expand-transition', Mv()),
  ys = Fv('expand-x-transition', Mv('', !0)),
  MS = $(
    {
      defaults: Object,
      disabled: Boolean,
      reset: [Number, String],
      root: [Boolean, String],
      scoped: Boolean,
    },
    'VDefaultsProvider',
  ),
  Me = J(!1)({
    name: 'VDefaultsProvider',
    props: MS(),
    setup(e, t) {
      let { slots: n } = t
      const { defaults: l, disabled: a, reset: o, root: i, scoped: r } = Ba(e)
      return (
        Qt(l, { reset: o, root: i, scoped: r, disabled: a }),
        () => {
          var s
          return (s = n.default) == null ? void 0 : s.call(n)
        }
      )
    },
  }),
  Tt = $(
    {
      height: [Number, String],
      maxHeight: [Number, String],
      maxWidth: [Number, String],
      minHeight: [Number, String],
      minWidth: [Number, String],
      width: [Number, String],
    },
    'dimension',
  )
function Ot(e) {
  return {
    dimensionStyles: b(() => {
      const n = {},
        l = he(e.height),
        a = he(e.maxHeight),
        o = he(e.maxWidth),
        i = he(e.minHeight),
        r = he(e.minWidth),
        s = he(e.width)
      return (
        l != null && (n.height = l),
        a != null && (n.maxHeight = a),
        o != null && (n.maxWidth = o),
        i != null && (n.minHeight = i),
        r != null && (n.minWidth = r),
        s != null && (n.width = s),
        n
      )
    }),
  }
}
function DS(e) {
  return {
    aspectStyles: b(() => {
      const t = Number(e.aspectRatio)
      return t ? { paddingBottom: String((1 / t) * 100) + '%' } : void 0
    }),
  }
}
const Nv = $(
    { aspectRatio: [String, Number], contentClass: null, inline: Boolean, ...ge(), ...Tt() },
    'VResponsive',
  ),
  dr = J()({
    name: 'VResponsive',
    props: Nv(),
    setup(e, t) {
      let { slots: n } = t
      const { aspectStyles: l } = DS(e),
        { dimensionStyles: a } = Ot(e)
      return (
        oe(() => {
          var o
          return f(
            'div',
            {
              class: ['v-responsive', { 'v-responsive--inline': e.inline }, e.class],
              style: [a.value, e.style],
            },
            [
              f('div', { class: 'v-responsive__sizer', style: l.value }, null),
              (o = n.additional) == null ? void 0 : o.call(n),
              n.default &&
                f('div', { class: ['v-responsive__content', e.contentClass] }, [n.default()]),
            ],
          )
        }),
        {}
      )
    },
  })
function bs(e) {
  return es(() => {
    const t = [],
      n = {}
    if (e.value.background)
      if (nr(e.value.background)) {
        if (((n.backgroundColor = e.value.background), !e.value.text && _b(e.value.background))) {
          const l = Ut(e.value.background)
          if (l.a == null || l.a === 1) {
            const a = ev(l)
            ;(n.color = a), (n.caretColor = a)
          }
        }
      } else t.push(`bg-${e.value.background}`)
    return (
      e.value.text &&
        (nr(e.value.text)
          ? ((n.color = e.value.text), (n.caretColor = e.value.text))
          : t.push(`text-${e.value.text}`)),
      { colorClasses: t, colorStyles: n }
    )
  })
}
function Yt(e, t) {
  const n = b(() => ({ text: Ne(e) ? e.value : t ? e[t] : null })),
    { colorClasses: l, colorStyles: a } = bs(n)
  return { textColorClasses: l, textColorStyles: a }
}
function Je(e, t) {
  const n = b(() => ({ background: Ne(e) ? e.value : t ? e[t] : null })),
    { colorClasses: l, colorStyles: a } = bs(n)
  return { backgroundColorClasses: l, backgroundColorStyles: a }
}
const ot = $(
  { rounded: { type: [Boolean, Number, String], default: void 0 }, tile: Boolean },
  'rounded',
)
function it(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : bn()
  return {
    roundedClasses: b(() => {
      const l = Ne(e) ? e.value : e.rounded,
        a = Ne(e) ? e.value : e.tile,
        o = []
      if (l === !0 || l === '') o.push(`${t}--rounded`)
      else if (typeof l == 'string' || l === 0)
        for (const i of String(l).split(' ')) o.push(`rounded-${i}`)
      else (a || l === !1) && o.push('rounded-0')
      return o
    }),
  }
}
const Gn = $(
    {
      transition: {
        type: [Boolean, String, Object],
        default: 'fade-transition',
        validator: (e) => e !== !0,
      },
    },
    'transition',
  ),
  Kt = (e, t) => {
    let { slots: n } = t
    const { transition: l, disabled: a, group: o, ...i } = e,
      { component: r = o ? qr : Hn, ...s } = typeof l == 'object' ? l : {}
    return sn(
      r,
      ve(
        typeof l == 'string' ? { name: a ? '' : l } : s,
        typeof l == 'string'
          ? {}
          : Object.fromEntries(
              Object.entries({ disabled: a, group: o }).filter((c) => {
                let [u, d] = c
                return d !== void 0
              }),
            ),
        i,
      ),
      n,
    )
  }
function $S(e, t) {
  if (!Xr) return
  const n = t.modifiers || {},
    l = t.value,
    { handler: a, options: o } = typeof l == 'object' ? l : { handler: l, options: {} },
    i = new IntersectionObserver(function () {
      var d
      let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
        s = arguments.length > 1 ? arguments[1] : void 0
      const c = (d = e._observe) == null ? void 0 : d[t.instance.$.uid]
      if (!c) return
      const u = r.some((v) => v.isIntersecting)
      a && (!n.quiet || c.init) && (!n.once || u || c.init) && a(u, r, s),
        u && n.once ? Hv(e, t) : (c.init = !0)
    }, o)
  ;(e._observe = Object(e._observe)),
    (e._observe[t.instance.$.uid] = { init: !1, observer: i }),
    i.observe(e)
}
function Hv(e, t) {
  var l
  const n = (l = e._observe) == null ? void 0 : l[t.instance.$.uid]
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid])
}
const ps = { mounted: $S, unmounted: Hv },
  NS = $(
    {
      absolute: Boolean,
      alt: String,
      cover: Boolean,
      color: String,
      draggable: { type: [Boolean, String], default: void 0 },
      eager: Boolean,
      gradient: String,
      lazySrc: String,
      options: {
        type: Object,
        default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }),
      },
      sizes: String,
      src: { type: [String, Object], default: '' },
      crossorigin: String,
      referrerpolicy: String,
      srcset: String,
      position: String,
      ...Nv(),
      ...ge(),
      ...ot(),
      ...Gn(),
    },
    'VImg',
  ),
  Na = J()({
    name: 'VImg',
    directives: { intersect: ps },
    props: NS(),
    emits: { loadstart: (e) => !0, load: (e) => !0, error: (e) => !0 },
    setup(e, t) {
      let { emit: n, slots: l } = t
      const { backgroundColorClasses: a, backgroundColorStyles: o } = Je(ae(e, 'color')),
        { roundedClasses: i } = it(e),
        r = et('VImg'),
        s = ue(''),
        c = H(),
        u = ue(e.eager ? 'loading' : 'idle'),
        d = ue(),
        v = ue(),
        m = b(() =>
          e.src && typeof e.src == 'object'
            ? {
                src: e.src.src,
                srcset: e.srcset || e.src.srcset,
                lazySrc: e.lazySrc || e.src.lazySrc,
                aspect: Number(e.aspectRatio || e.src.aspect || 0),
              }
            : {
                src: e.src,
                srcset: e.srcset,
                lazySrc: e.lazySrc,
                aspect: Number(e.aspectRatio || 0),
              },
        ),
        h = b(() => m.value.aspect || d.value / v.value || 0)
      me(
        () => e.src,
        () => {
          g(u.value !== 'idle')
        },
      ),
        me(h, (E, R) => {
          !E && R && c.value && k(c.value)
        }),
        $l(() => g())
      function g(E) {
        if (!(e.eager && E) && !(Xr && !E && !e.eager)) {
          if (((u.value = 'loading'), m.value.lazySrc)) {
            const R = new Image()
            ;(R.src = m.value.lazySrc), k(R, null)
          }
          m.value.src &&
            Ke(() => {
              var R
              n('loadstart', ((R = c.value) == null ? void 0 : R.currentSrc) || m.value.src),
                setTimeout(() => {
                  var N
                  if (!r.isUnmounted)
                    if ((N = c.value) != null && N.complete) {
                      if ((c.value.naturalWidth || p(), u.value === 'error')) return
                      h.value || k(c.value, null), u.value === 'loading' && y()
                    } else h.value || k(c.value), _()
                })
            })
        }
      }
      function y() {
        var E
        r.isUnmounted ||
          (_(),
          k(c.value),
          (u.value = 'loaded'),
          n('load', ((E = c.value) == null ? void 0 : E.currentSrc) || m.value.src))
      }
      function p() {
        var E
        r.isUnmounted ||
          ((u.value = 'error'),
          n('error', ((E = c.value) == null ? void 0 : E.currentSrc) || m.value.src))
      }
      function _() {
        const E = c.value
        E && (s.value = E.currentSrc || E.src)
      }
      let C = -1
      ut(() => {
        clearTimeout(C)
      })
      function k(E) {
        let R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100
        const N = () => {
          if ((clearTimeout(C), r.isUnmounted)) return
          const { naturalHeight: q, naturalWidth: G } = E
          q || G
            ? ((d.value = G), (v.value = q))
            : !E.complete && u.value === 'loading' && R != null
              ? (C = window.setTimeout(N, R))
              : (E.currentSrc.endsWith('.svg') || E.currentSrc.startsWith('data:image/svg+xml')) &&
                ((d.value = 1), (v.value = 1))
        }
        N()
      }
      const I = b(() => ({ 'v-img__img--cover': e.cover, 'v-img__img--contain': !e.cover })),
        P = () => {
          var N
          if (!m.value.src || u.value === 'idle') return null
          const E = f(
              'img',
              {
                class: ['v-img__img', I.value],
                style: { objectPosition: e.position },
                src: m.value.src,
                srcset: m.value.srcset,
                alt: e.alt,
                crossorigin: e.crossorigin,
                referrerpolicy: e.referrerpolicy,
                draggable: e.draggable,
                sizes: e.sizes,
                ref: c,
                onLoad: y,
                onError: p,
              },
              null,
            ),
            R = (N = l.sources) == null ? void 0 : N.call(l)
          return f(
            Kt,
            { transition: e.transition, appear: !0 },
            {
              default: () => [
                Ye(R ? f('picture', { class: 'v-img__picture' }, [R, E]) : E, [
                  [Xt, u.value === 'loaded'],
                ]),
              ],
            },
          )
        },
        A = () =>
          f(
            Kt,
            { transition: e.transition },
            {
              default: () => [
                m.value.lazySrc &&
                  u.value !== 'loaded' &&
                  f(
                    'img',
                    {
                      class: ['v-img__img', 'v-img__img--preload', I.value],
                      style: { objectPosition: e.position },
                      src: m.value.lazySrc,
                      alt: e.alt,
                      crossorigin: e.crossorigin,
                      referrerpolicy: e.referrerpolicy,
                      draggable: e.draggable,
                    },
                    null,
                  ),
              ],
            },
          ),
        V = () =>
          l.placeholder
            ? f(
                Kt,
                { transition: e.transition, appear: !0 },
                {
                  default: () => [
                    (u.value === 'loading' || (u.value === 'error' && !l.error)) &&
                      f('div', { class: 'v-img__placeholder' }, [l.placeholder()]),
                  ],
                },
              )
            : null,
        x = () =>
          l.error
            ? f(
                Kt,
                { transition: e.transition, appear: !0 },
                {
                  default: () => [
                    u.value === 'error' && f('div', { class: 'v-img__error' }, [l.error()]),
                  ],
                },
              )
            : null,
        O = () =>
          e.gradient
            ? f(
                'div',
                {
                  class: 'v-img__gradient',
                  style: { backgroundImage: `linear-gradient(${e.gradient})` },
                },
                null,
              )
            : null,
        T = ue(!1)
      {
        const E = me(h, (R) => {
          R &&
            (requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                T.value = !0
              })
            }),
            E())
        })
      }
      return (
        oe(() => {
          const E = dr.filterProps(e)
          return Ye(
            f(
              dr,
              ve(
                {
                  class: [
                    'v-img',
                    { 'v-img--absolute': e.absolute, 'v-img--booting': !T.value },
                    a.value,
                    i.value,
                    e.class,
                  ],
                  style: [{ width: he(e.width === 'auto' ? d.value : e.width) }, o.value, e.style],
                },
                E,
                { aspectRatio: h.value, 'aria-label': e.alt, role: e.alt ? 'img' : void 0 },
              ),
              {
                additional: () =>
                  f(ke, null, [
                    f(P, null, null),
                    f(A, null, null),
                    f(O, null, null),
                    f(V, null, null),
                    f(x, null, null),
                  ]),
                default: l.default,
              },
            ),
            [[qt('intersect'), { handler: g, options: e.options }, null, { once: !0 }]],
          )
        }),
        { currentSrc: s, image: c, state: u, naturalWidth: d, naturalHeight: v }
      )
    },
  }),
  Zt = $({ border: [Boolean, Number, String] }, 'border')
function Jt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : bn()
  return {
    borderClasses: b(() => {
      const l = Ne(e) ? e.value : e.border,
        a = []
      if (l === !0 || l === '') a.push(`${t}--border`)
      else if (typeof l == 'string' || l === 0)
        for (const o of String(l).split(' ')) a.push(`border-${o}`)
      return a
    }),
  }
}
const pt = $(
  {
    elevation: {
      type: [Number, String],
      validator(e) {
        const t = parseInt(e)
        return !isNaN(t) && t >= 0 && t <= 24
      },
    },
  },
  'elevation',
)
function Et(e) {
  return {
    elevationClasses: b(() => {
      const n = Ne(e) ? e.value : e.elevation,
        l = []
      return n == null || l.push(`elevation-${n}`), l
    }),
  }
}
const HS = [null, 'prominent', 'default', 'comfortable', 'compact'],
  jv = $(
    {
      absolute: Boolean,
      collapse: Boolean,
      color: String,
      density: { type: String, default: 'default', validator: (e) => HS.includes(e) },
      extended: Boolean,
      extensionHeight: { type: [Number, String], default: 48 },
      flat: Boolean,
      floating: Boolean,
      height: { type: [Number, String], default: 64 },
      image: String,
      title: String,
      ...Zt(),
      ...ge(),
      ...pt(),
      ...ot(),
      ...Te({ tag: 'header' }),
      ...$e(),
    },
    'VToolbar',
  ),
  fr = J()({
    name: 'VToolbar',
    props: jv(),
    setup(e, t) {
      var m
      let { slots: n } = t
      const { backgroundColorClasses: l, backgroundColorStyles: a } = Je(ae(e, 'color')),
        { borderClasses: o } = Jt(e),
        { elevationClasses: i } = Et(e),
        { roundedClasses: r } = it(e),
        { themeClasses: s } = qe(e),
        { rtlClasses: c } = ct(),
        u = ue(!!(e.extended || ((m = n.extension) != null && m.call(n)))),
        d = b(() =>
          parseInt(
            Number(e.height) +
              (e.density === 'prominent' ? Number(e.height) : 0) -
              (e.density === 'comfortable' ? 8 : 0) -
              (e.density === 'compact' ? 16 : 0),
            10,
          ),
        ),
        v = b(() =>
          u.value
            ? parseInt(
                Number(e.extensionHeight) +
                  (e.density === 'prominent' ? Number(e.extensionHeight) : 0) -
                  (e.density === 'comfortable' ? 4 : 0) -
                  (e.density === 'compact' ? 8 : 0),
                10,
              )
            : 0,
        )
      return (
        Qt({ VBtn: { variant: 'text' } }),
        oe(() => {
          var p
          const h = !!(e.title || n.title),
            g = !!(n.image || e.image),
            y = (p = n.extension) == null ? void 0 : p.call(n)
          return (
            (u.value = !!(e.extended || y)),
            f(
              e.tag,
              {
                class: [
                  'v-toolbar',
                  {
                    'v-toolbar--absolute': e.absolute,
                    'v-toolbar--collapse': e.collapse,
                    'v-toolbar--flat': e.flat,
                    'v-toolbar--floating': e.floating,
                    [`v-toolbar--density-${e.density}`]: !0,
                  },
                  l.value,
                  o.value,
                  i.value,
                  r.value,
                  s.value,
                  c.value,
                  e.class,
                ],
                style: [a.value, e.style],
              },
              {
                default: () => [
                  g &&
                    f('div', { key: 'image', class: 'v-toolbar__image' }, [
                      n.image
                        ? f(
                            Me,
                            {
                              key: 'image-defaults',
                              disabled: !e.image,
                              defaults: { VImg: { cover: !0, src: e.image } },
                            },
                            n.image,
                          )
                        : f(Na, { key: 'image-img', cover: !0, src: e.image }, null),
                    ]),
                  f(
                    Me,
                    { defaults: { VTabs: { height: he(d.value) } } },
                    {
                      default: () => {
                        var _, C, k
                        return [
                          f(
                            'div',
                            { class: 'v-toolbar__content', style: { height: he(d.value) } },
                            [
                              n.prepend &&
                                f('div', { class: 'v-toolbar__prepend' }, [
                                  (_ = n.prepend) == null ? void 0 : _.call(n),
                                ]),
                              h && f(ms, { key: 'title', text: e.title }, { text: n.title }),
                              (C = n.default) == null ? void 0 : C.call(n),
                              n.append &&
                                f('div', { class: 'v-toolbar__append' }, [
                                  (k = n.append) == null ? void 0 : k.call(n),
                                ]),
                            ],
                          ),
                        ]
                      },
                    },
                  ),
                  f(
                    Me,
                    { defaults: { VTabs: { height: he(v.value) } } },
                    {
                      default: () => [
                        f(gs, null, {
                          default: () => [
                            u.value &&
                              f(
                                'div',
                                { class: 'v-toolbar__extension', style: { height: he(v.value) } },
                                [y],
                              ),
                          ],
                        }),
                      ],
                    },
                  ),
                ],
              },
            )
          )
        }),
        { contentHeight: d, extensionHeight: v }
      )
    },
  }),
  jS = $(
    { scrollTarget: { type: String }, scrollThreshold: { type: [String, Number], default: 300 } },
    'scroll',
  )
function zS(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
  const { canScroll: n } = t
  let l = 0,
    a = 0
  const o = H(null),
    i = ue(0),
    r = ue(0),
    s = ue(0),
    c = ue(!1),
    u = ue(!1),
    d = b(() => Number(e.scrollThreshold)),
    v = b(() => dt((d.value - i.value) / d.value || 0)),
    m = () => {
      const h = o.value
      if (!h || (n && !n.value)) return
      ;(l = i.value), (i.value = 'window' in h ? h.pageYOffset : h.scrollTop)
      const g = h instanceof Window ? document.documentElement.scrollHeight : h.scrollHeight
      if (a !== g) {
        a = g
        return
      }
      ;(u.value = i.value < l), (s.value = Math.abs(i.value - d.value))
    }
  return (
    me(u, () => {
      r.value = r.value || i.value
    }),
    me(c, () => {
      r.value = 0
    }),
    Vt(() => {
      me(
        () => e.scrollTarget,
        (h) => {
          var y
          const g = h ? document.querySelector(h) : window
          g &&
            g !== o.value &&
            ((y = o.value) == null || y.removeEventListener('scroll', m),
            (o.value = g),
            o.value.addEventListener('scroll', m, { passive: !0 }))
        },
        { immediate: !0 },
      )
    }),
    ut(() => {
      var h
      ;(h = o.value) == null || h.removeEventListener('scroll', m)
    }),
    n && me(n, m, { immediate: !0 }),
    {
      scrollThreshold: d,
      currentScroll: i,
      currentThreshold: s,
      isScrollActive: c,
      scrollRatio: v,
      isScrollingUp: u,
      savedScroll: r,
    }
  )
}
function ml() {
  const e = ue(!1)
  return (
    Vt(() => {
      window.requestAnimationFrame(() => {
        e.value = !0
      })
    }),
    {
      ssrBootStyles: b(() => (e.value ? void 0 : { transition: 'none !important' })),
      isBooted: Oa(e),
    }
  )
}
const WS = $(
    {
      scrollBehavior: String,
      modelValue: { type: Boolean, default: !0 },
      location: { type: String, default: 'top', validator: (e) => ['top', 'bottom'].includes(e) },
      ...jv(),
      ...Nl(),
      ...jS(),
      height: { type: [Number, String], default: 64 },
    },
    'VAppBar',
  ),
  US = J()({
    name: 'VAppBar',
    props: WS(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const l = H(),
        a = Ae(e, 'modelValue'),
        o = b(() => {
          var C
          const _ = new Set(((C = e.scrollBehavior) == null ? void 0 : C.split(' ')) ?? [])
          return {
            hide: _.has('hide'),
            fullyHide: _.has('fully-hide'),
            inverted: _.has('inverted'),
            collapse: _.has('collapse'),
            elevate: _.has('elevate'),
            fadeImage: _.has('fade-image'),
          }
        }),
        i = b(() => {
          const _ = o.value
          return (
            _.hide ||
            _.fullyHide ||
            _.inverted ||
            _.collapse ||
            _.elevate ||
            _.fadeImage ||
            !a.value
          )
        }),
        {
          currentScroll: r,
          scrollThreshold: s,
          isScrollingUp: c,
          scrollRatio: u,
        } = zS(e, { canScroll: i }),
        d = b(() => o.value.hide || o.value.fullyHide),
        v = b(
          () =>
            e.collapse || (o.value.collapse && (o.value.inverted ? u.value > 0 : u.value === 0)),
        ),
        m = b(
          () =>
            e.flat ||
            (o.value.fullyHide && !a.value) ||
            (o.value.elevate && (o.value.inverted ? r.value > 0 : r.value === 0)),
        ),
        h = b(() => (o.value.fadeImage ? (o.value.inverted ? 1 - u.value : u.value) : void 0)),
        g = b(() => {
          var k, I
          if (o.value.hide && o.value.inverted) return 0
          const _ = ((k = l.value) == null ? void 0 : k.contentHeight) ?? 0,
            C = ((I = l.value) == null ? void 0 : I.extensionHeight) ?? 0
          return d.value ? (r.value < s.value || o.value.fullyHide ? _ + C : _) : _ + C
        })
      Pt(
        b(() => !!e.scrollBehavior),
        () => {
          yt(() => {
            d.value
              ? o.value.inverted
                ? (a.value = r.value > s.value)
                : (a.value = c.value || r.value < s.value)
              : (a.value = !0)
          })
        },
      )
      const { ssrBootStyles: y } = ml(),
        { layoutItemStyles: p } = Hl({
          id: e.name,
          order: b(() => parseInt(e.order, 10)),
          position: ae(e, 'location'),
          layoutSize: g,
          elementSize: ue(void 0),
          active: a,
          absolute: ae(e, 'absolute'),
        })
      return (
        oe(() => {
          const _ = fr.filterProps(e)
          return f(
            fr,
            ve(
              {
                ref: l,
                class: ['v-app-bar', { 'v-app-bar--bottom': e.location === 'bottom' }, e.class],
                style: [
                  { ...p.value, '--v-toolbar-image-opacity': h.value, height: void 0, ...y.value },
                  e.style,
                ],
              },
              _,
              { collapse: v.value, flat: m.value },
            ),
            n,
          )
        }),
        {}
      )
    },
  }),
  KS = [null, 'default', 'comfortable', 'compact'],
  Ht = $(
    { density: { type: String, default: 'default', validator: (e) => KS.includes(e) } },
    'density',
  )
function en(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : bn()
  return { densityClasses: b(() => `${t}--density-${e.density}`) }
}
const GS = ['elevated', 'flat', 'tonal', 'outlined', 'text', 'plain']
function jl(e, t) {
  return f(ke, null, [
    e && f('span', { key: 'overlay', class: `${t}__overlay` }, null),
    f('span', { key: 'underlay', class: `${t}__underlay` }, null),
  ])
}
const Yn = $(
  {
    color: String,
    variant: { type: String, default: 'elevated', validator: (e) => GS.includes(e) },
  },
  'variant',
)
function Ha(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : bn()
  const n = b(() => {
      const { variant: o } = nt(e)
      return `${t}--variant-${o}`
    }),
    { colorClasses: l, colorStyles: a } = bs(
      b(() => {
        const { variant: o, color: i } = nt(e)
        return { [['elevated', 'flat'].includes(o) ? 'background' : 'text']: i }
      }),
    )
  return { colorClasses: l, colorStyles: a, variantClasses: n }
}
const zv = $(
    {
      baseColor: String,
      divided: Boolean,
      ...Zt(),
      ...ge(),
      ...Ht(),
      ...pt(),
      ...ot(),
      ...Te(),
      ...$e(),
      ...Yn(),
    },
    'VBtnGroup',
  ),
  Mc = J()({
    name: 'VBtnGroup',
    props: zv(),
    setup(e, t) {
      let { slots: n } = t
      const { themeClasses: l } = qe(e),
        { densityClasses: a } = en(e),
        { borderClasses: o } = Jt(e),
        { elevationClasses: i } = Et(e),
        { roundedClasses: r } = it(e)
      Qt({
        VBtn: {
          height: 'auto',
          baseColor: ae(e, 'baseColor'),
          color: ae(e, 'color'),
          density: ae(e, 'density'),
          flat: !0,
          variant: ae(e, 'variant'),
        },
      }),
        oe(() =>
          f(
            e.tag,
            {
              class: [
                'v-btn-group',
                { 'v-btn-group--divided': e.divided },
                l.value,
                o.value,
                a.value,
                i.value,
                r.value,
                e.class,
              ],
              style: e.style,
            },
            n,
          ),
        )
    },
  }),
  zl = $(
    {
      modelValue: { type: null, default: void 0 },
      multiple: Boolean,
      mandatory: [Boolean, String],
      max: Number,
      selectedClass: String,
      disabled: Boolean,
    },
    'group',
  ),
  Wl = $({ value: null, disabled: Boolean, selectedClass: String }, 'group-item')
function Ul(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0
  const l = et('useGroupItem')
  if (!l)
    throw new Error(
      '[Vuetify] useGroupItem composable must be used inside a component setup function',
    )
  const a = $t()
  Ze(Symbol.for(`${t.description}:id`), a)
  const o = Ie(t, null)
  if (!o) {
    if (!n) return o
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)
  }
  const i = ae(e, 'value'),
    r = b(() => !!(o.disabled.value || e.disabled))
  o.register({ id: a, value: i, disabled: r }, l),
    ut(() => {
      o.unregister(a)
    })
  const s = b(() => o.isSelected(a)),
    c = b(() => o.items.value[0].id === a),
    u = b(() => o.items.value[o.items.value.length - 1].id === a),
    d = b(() => s.value && [o.selectedClass.value, e.selectedClass])
  return (
    me(
      s,
      (v) => {
        l.emit('group:selected', { value: v })
      },
      { flush: 'sync' },
    ),
    {
      id: a,
      isSelected: s,
      isFirst: c,
      isLast: u,
      toggle: () => o.select(a, !s.value),
      select: (v) => o.select(a, v),
      selectedClass: d,
      value: i,
      disabled: r,
      group: o,
    }
  )
}
function hl(e, t) {
  let n = !1
  const l = rt([]),
    a = Ae(
      e,
      'modelValue',
      [],
      (v) => (v == null ? [] : Wv(l, gt(v))),
      (v) => {
        const m = qS(l, v)
        return e.multiple ? m : m[0]
      },
    ),
    o = et('useGroup')
  function i(v, m) {
    const h = v,
      g = Symbol.for(`${t.description}:id`),
      p = Vl(g, o == null ? void 0 : o.vnode).indexOf(m)
    nt(h.value) == null && ((h.value = p), (h.useIndexAsValue = !0)),
      p > -1 ? l.splice(p, 0, h) : l.push(h)
  }
  function r(v) {
    if (n) return
    s()
    const m = l.findIndex((h) => h.id === v)
    l.splice(m, 1)
  }
  function s() {
    const v = l.find((m) => !m.disabled)
    v && e.mandatory === 'force' && !a.value.length && (a.value = [v.id])
  }
  Vt(() => {
    s()
  }),
    ut(() => {
      n = !0
    }),
    $r(() => {
      for (let v = 0; v < l.length; v++) l[v].useIndexAsValue && (l[v].value = v)
    })
  function c(v, m) {
    const h = l.find((g) => g.id === v)
    if (!(m && h != null && h.disabled))
      if (e.multiple) {
        const g = a.value.slice(),
          y = g.findIndex((_) => _ === v),
          p = ~y
        if (
          ((m = m ?? !p),
          (p && e.mandatory && g.length <= 1) || (!p && e.max != null && g.length + 1 > e.max))
        )
          return
        y < 0 && m ? g.push(v) : y >= 0 && !m && g.splice(y, 1), (a.value = g)
      } else {
        const g = a.value.includes(v)
        if (e.mandatory && g) return
        a.value = (m ?? !g) ? [v] : []
      }
  }
  function u(v) {
    if ((e.multiple, a.value.length)) {
      const m = a.value[0],
        h = l.findIndex((p) => p.id === m)
      let g = (h + v) % l.length,
        y = l[g]
      for (; y.disabled && g !== h; ) (g = (g + v) % l.length), (y = l[g])
      if (y.disabled) return
      a.value = [l[g].id]
    } else {
      const m = l.find((h) => !h.disabled)
      m && (a.value = [m.id])
    }
  }
  const d = {
    register: i,
    unregister: r,
    selected: a,
    select: c,
    disabled: ae(e, 'disabled'),
    prev: () => u(l.length - 1),
    next: () => u(1),
    isSelected: (v) => a.value.includes(v),
    selectedClass: b(() => e.selectedClass),
    items: b(() => l),
    getItemIndex: (v) => YS(l, v),
  }
  return Ze(t, d), d
}
function YS(e, t) {
  const n = Wv(e, [t])
  return n.length ? e.findIndex((l) => l.id === n[0]) : -1
}
function Wv(e, t) {
  const n = []
  return (
    t.forEach((l) => {
      const a = e.find((i) => vl(l, i.value)),
        o = e[l]
      ;(a == null ? void 0 : a.value) != null ? n.push(a.id) : o != null && n.push(o.id)
    }),
    n
  )
}
function qS(e, t) {
  const n = []
  return (
    t.forEach((l) => {
      const a = e.findIndex((o) => o.id === l)
      if (~a) {
        const o = e[a]
        n.push(o.value != null ? o.value : a)
      }
    }),
    n
  )
}
const Ss = Symbol.for('vuetify:v-btn-toggle'),
  XS = $({ ...zv(), ...zl() }, 'VBtnToggle'),
  QS = J()({
    name: 'VBtnToggle',
    props: XS(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const { isSelected: l, next: a, prev: o, select: i, selected: r } = hl(e, Ss)
      return (
        oe(() => {
          const s = Mc.filterProps(e)
          return f(Mc, ve({ class: ['v-btn-toggle', e.class] }, s, { style: e.style }), {
            default: () => {
              var c
              return [
                (c = n.default) == null
                  ? void 0
                  : c.call(n, { isSelected: l, next: a, prev: o, select: i, selected: r }),
              ]
            },
          })
        }),
        { next: a, prev: o, select: i }
      )
    },
  }),
  ZS = ['x-small', 'small', 'default', 'large', 'x-large'],
  gl = $({ size: { type: [String, Number], default: 'default' } }, 'size')
function Kl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : bn()
  return es(() => {
    let n, l
    return (
      So(ZS, e.size)
        ? (n = `${t}--size-${e.size}`)
        : e.size && (l = { width: he(e.size), height: he(e.size) }),
      { sizeClasses: n, sizeStyles: l }
    )
  })
}
const JS = $(
    {
      color: String,
      disabled: Boolean,
      start: Boolean,
      end: Boolean,
      icon: Ee,
      ...ge(),
      ...gl(),
      ...Te({ tag: 'i' }),
      ...$e(),
    },
    'VIcon',
  ),
  je = J()({
    name: 'VIcon',
    props: JS(),
    setup(e, t) {
      let { attrs: n, slots: l } = t
      const a = H(),
        { themeClasses: o } = qe(e),
        { iconData: i } = Mp(b(() => a.value || e.icon)),
        { sizeClasses: r } = Kl(e),
        { textColorClasses: s, textColorStyles: c } = Yt(ae(e, 'color'))
      return (
        oe(() => {
          var v, m
          const u = (v = l.default) == null ? void 0 : v.call(l)
          u &&
            (a.value =
              (m = $f(u).filter(
                (h) => h.type === Ra && h.children && typeof h.children == 'string',
              )[0]) == null
                ? void 0
                : m.children)
          const d = !!(n.onClick || n.onClickOnce)
          return f(
            i.value.component,
            {
              tag: e.tag,
              icon: i.value.icon,
              class: [
                'v-icon',
                'notranslate',
                o.value,
                r.value,
                s.value,
                {
                  'v-icon--clickable': d,
                  'v-icon--disabled': e.disabled,
                  'v-icon--start': e.start,
                  'v-icon--end': e.end,
                },
                e.class,
              ],
              style: [
                r.value ? void 0 : { fontSize: he(e.size), height: he(e.size), width: he(e.size) },
                c.value,
                e.style,
              ],
              role: d ? 'button' : void 0,
              'aria-hidden': !d,
              tabindex: d ? (e.disabled ? -1 : 0) : void 0,
            },
            { default: () => [u] },
          )
        }),
        {}
      )
    },
  })
function Uv(e, t) {
  const n = H(),
    l = ue(!1)
  if (Xr) {
    const a = new IntersectionObserver((o) => {
      l.value = !!o.find((i) => i.isIntersecting)
    }, t)
    ut(() => {
      a.disconnect()
    }),
      me(
        n,
        (o, i) => {
          i && (a.unobserve(i), (l.value = !1)), o && a.observe(o)
        },
        { flush: 'post' },
      )
  }
  return { intersectionRef: n, isIntersecting: l }
}
const e_ = $(
    {
      bgColor: String,
      color: String,
      indeterminate: [Boolean, String],
      modelValue: { type: [Number, String], default: 0 },
      rotate: { type: [Number, String], default: 0 },
      width: { type: [Number, String], default: 4 },
      ...ge(),
      ...gl(),
      ...Te({ tag: 'div' }),
      ...$e(),
    },
    'VProgressCircular',
  ),
  t_ = J()({
    name: 'VProgressCircular',
    props: e_(),
    setup(e, t) {
      let { slots: n } = t
      const l = 20,
        a = 2 * Math.PI * l,
        o = H(),
        { themeClasses: i } = qe(e),
        { sizeClasses: r, sizeStyles: s } = Kl(e),
        { textColorClasses: c, textColorStyles: u } = Yt(ae(e, 'color')),
        { textColorClasses: d, textColorStyles: v } = Yt(ae(e, 'bgColor')),
        { intersectionRef: m, isIntersecting: h } = Uv(),
        { resizeRef: g, contentRect: y } = Vn(),
        p = b(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))),
        _ = b(() => Number(e.width)),
        C = b(() => (s.value ? Number(e.size) : y.value ? y.value.width : Math.max(_.value, 32))),
        k = b(() => (l / (1 - _.value / C.value)) * 2),
        I = b(() => (_.value / C.value) * k.value),
        P = b(() => he(((100 - p.value) / 100) * a))
      return (
        yt(() => {
          ;(m.value = o.value), (g.value = o.value)
        }),
        oe(() =>
          f(
            e.tag,
            {
              ref: o,
              class: [
                'v-progress-circular',
                {
                  'v-progress-circular--indeterminate': !!e.indeterminate,
                  'v-progress-circular--visible': h.value,
                  'v-progress-circular--disable-shrink': e.indeterminate === 'disable-shrink',
                },
                i.value,
                r.value,
                c.value,
                e.class,
              ],
              style: [s.value, u.value, e.style],
              role: 'progressbar',
              'aria-valuemin': '0',
              'aria-valuemax': '100',
              'aria-valuenow': e.indeterminate ? void 0 : p.value,
            },
            {
              default: () => [
                f(
                  'svg',
                  {
                    style: { transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))` },
                    xmlns: 'http://www.w3.org/2000/svg',
                    viewBox: `0 0 ${k.value} ${k.value}`,
                  },
                  [
                    f(
                      'circle',
                      {
                        class: ['v-progress-circular__underlay', d.value],
                        style: v.value,
                        fill: 'transparent',
                        cx: '50%',
                        cy: '50%',
                        r: l,
                        'stroke-width': I.value,
                        'stroke-dasharray': a,
                        'stroke-dashoffset': 0,
                      },
                      null,
                    ),
                    f(
                      'circle',
                      {
                        class: 'v-progress-circular__overlay',
                        fill: 'transparent',
                        cx: '50%',
                        cy: '50%',
                        r: l,
                        'stroke-width': I.value,
                        'stroke-dasharray': a,
                        'stroke-dashoffset': P.value,
                      },
                      null,
                    ),
                  ],
                ),
                n.default &&
                  f('div', { class: 'v-progress-circular__content' }, [
                    n.default({ value: p.value }),
                  ]),
              ],
            },
          ),
        ),
        {}
      )
    },
  }),
  Dc = { center: 'center', top: 'bottom', bottom: 'top', left: 'right', right: 'left' },
  Gl = $({ location: String }, 'location')
function ja(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
    n = arguments.length > 2 ? arguments[2] : void 0
  const { isRtl: l } = ct()
  return {
    locationStyles: b(() => {
      if (!e.location) return {}
      const { side: o, align: i } = er(
        e.location.split(' ').length > 1 ? e.location : `${e.location} center`,
        l.value,
      )
      function r(c) {
        return n ? n(c) : 0
      }
      const s = {}
      return (
        o !== 'center' && (t ? (s[Dc[o]] = `calc(100% - ${r(o)}px)`) : (s[o] = 0)),
        i !== 'center'
          ? t
            ? (s[Dc[i]] = `calc(100% - ${r(i)}px)`)
            : (s[i] = 0)
          : (o === 'center'
              ? (s.top = s.left = '50%')
              : (s[{ top: 'left', bottom: 'left', left: 'top', right: 'top' }[o]] = '50%'),
            (s.transform = {
              top: 'translateX(-50%)',
              bottom: 'translateX(-50%)',
              left: 'translateY(-50%)',
              right: 'translateY(-50%)',
              center: 'translate(-50%, -50%)',
            }[o])),
        s
      )
    }),
  }
}
const n_ = $(
    {
      absolute: Boolean,
      active: { type: Boolean, default: !0 },
      bgColor: String,
      bgOpacity: [Number, String],
      bufferValue: { type: [Number, String], default: 0 },
      bufferColor: String,
      bufferOpacity: [Number, String],
      clickable: Boolean,
      color: String,
      height: { type: [Number, String], default: 4 },
      indeterminate: Boolean,
      max: { type: [Number, String], default: 100 },
      modelValue: { type: [Number, String], default: 0 },
      opacity: [Number, String],
      reverse: Boolean,
      stream: Boolean,
      striped: Boolean,
      roundedBar: Boolean,
      ...ge(),
      ...Gl({ location: 'top' }),
      ...ot(),
      ...Te(),
      ...$e(),
    },
    'VProgressLinear',
  ),
  l_ = J()({
    name: 'VProgressLinear',
    props: n_(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      var T
      let { slots: n } = t
      const l = Ae(e, 'modelValue'),
        { isRtl: a, rtlClasses: o } = ct(),
        { themeClasses: i } = qe(e),
        { locationStyles: r } = ja(e),
        { textColorClasses: s, textColorStyles: c } = Yt(e, 'color'),
        { backgroundColorClasses: u, backgroundColorStyles: d } = Je(b(() => e.bgColor || e.color)),
        { backgroundColorClasses: v, backgroundColorStyles: m } = Je(
          b(() => e.bufferColor || e.bgColor || e.color),
        ),
        { backgroundColorClasses: h, backgroundColorStyles: g } = Je(e, 'color'),
        { roundedClasses: y } = it(e),
        { intersectionRef: p, isIntersecting: _ } = Uv(),
        C = b(() => parseFloat(e.max)),
        k = b(() => parseFloat(e.height)),
        I = b(() => dt((parseFloat(e.bufferValue) / C.value) * 100, 0, 100)),
        P = b(() => dt((parseFloat(l.value) / C.value) * 100, 0, 100)),
        A = b(() => a.value !== e.reverse),
        V = b(() => (e.indeterminate ? 'fade-transition' : 'slide-x-transition')),
        x =
          Be &&
          ((T = window.matchMedia) == null
            ? void 0
            : T.call(window, '(forced-colors: active)').matches)
      function O(E) {
        if (!p.value) return
        const { left: R, right: N, width: q } = p.value.getBoundingClientRect(),
          G = A.value ? q - E.clientX + (N - q) : E.clientX - R
        l.value = Math.round((G / q) * C.value)
      }
      return (
        oe(() =>
          f(
            e.tag,
            {
              ref: p,
              class: [
                'v-progress-linear',
                {
                  'v-progress-linear--absolute': e.absolute,
                  'v-progress-linear--active': e.active && _.value,
                  'v-progress-linear--reverse': A.value,
                  'v-progress-linear--rounded': e.rounded,
                  'v-progress-linear--rounded-bar': e.roundedBar,
                  'v-progress-linear--striped': e.striped,
                },
                y.value,
                i.value,
                o.value,
                e.class,
              ],
              style: [
                {
                  bottom: e.location === 'bottom' ? 0 : void 0,
                  top: e.location === 'top' ? 0 : void 0,
                  height: e.active ? he(k.value) : 0,
                  '--v-progress-linear-height': he(k.value),
                  ...(e.absolute ? r.value : {}),
                },
                e.style,
              ],
              role: 'progressbar',
              'aria-hidden': e.active ? 'false' : 'true',
              'aria-valuemin': '0',
              'aria-valuemax': e.max,
              'aria-valuenow': e.indeterminate ? void 0 : P.value,
              onClick: e.clickable && O,
            },
            {
              default: () => [
                e.stream &&
                  f(
                    'div',
                    {
                      key: 'stream',
                      class: ['v-progress-linear__stream', s.value],
                      style: {
                        ...c.value,
                        [A.value ? 'left' : 'right']: he(-k.value),
                        borderTop: `${he(k.value / 2)} dotted`,
                        opacity: parseFloat(e.bufferOpacity),
                        top: `calc(50% - ${he(k.value / 4)})`,
                        width: he(100 - I.value, '%'),
                        '--v-progress-linear-stream-to': he(k.value * (A.value ? 1 : -1)),
                      },
                    },
                    null,
                  ),
                f(
                  'div',
                  {
                    class: ['v-progress-linear__background', x ? void 0 : u.value],
                    style: [
                      d.value,
                      { opacity: parseFloat(e.bgOpacity), width: e.stream ? 0 : void 0 },
                    ],
                  },
                  null,
                ),
                f(
                  'div',
                  {
                    class: ['v-progress-linear__buffer', x ? void 0 : v.value],
                    style: [
                      m.value,
                      { opacity: parseFloat(e.bufferOpacity), width: he(I.value, '%') },
                    ],
                  },
                  null,
                ),
                f(
                  Hn,
                  { name: V.value },
                  {
                    default: () => [
                      e.indeterminate
                        ? f('div', { class: 'v-progress-linear__indeterminate' }, [
                            ['long', 'short'].map((E) =>
                              f(
                                'div',
                                {
                                  key: E,
                                  class: [
                                    'v-progress-linear__indeterminate',
                                    E,
                                    x ? void 0 : h.value,
                                  ],
                                  style: g.value,
                                },
                                null,
                              ),
                            ),
                          ])
                        : f(
                            'div',
                            {
                              class: ['v-progress-linear__determinate', x ? void 0 : h.value],
                              style: [g.value, { width: he(P.value, '%') }],
                            },
                            null,
                          ),
                    ],
                  },
                ),
                n.default &&
                  f('div', { class: 'v-progress-linear__content' }, [
                    n.default({ value: P.value, buffer: I.value }),
                  ]),
              ],
            },
          ),
        ),
        {}
      )
    },
  }),
  _s = $({ loading: [Boolean, String] }, 'loader')
function ws(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : bn()
  return { loaderClasses: b(() => ({ [`${t}--loading`]: e.loading })) }
}
function Kv(e, t) {
  var l
  let { slots: n } = t
  return f('div', { class: `${e.name}__loader` }, [
    ((l = n.default) == null ? void 0 : l.call(n, { color: e.color, isActive: e.active })) ||
      f(
        l_,
        { absolute: e.absolute, active: e.active, color: e.color, height: '2', indeterminate: !0 },
        null,
      ),
  ])
}
const a_ = ['static', 'relative', 'fixed', 'absolute', 'sticky'],
  Cs = $({ position: { type: String, validator: (e) => a_.includes(e) } }, 'position')
function ks(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : bn()
  return { positionClasses: b(() => (e.position ? `${t}--${e.position}` : void 0)) }
}
function o_() {
  const e = et('useRoute')
  return b(() => {
    var t
    return (t = e == null ? void 0 : e.proxy) == null ? void 0 : t.$route
  })
}
function Gv() {
  var e, t
  return (t = (e = et('useRouter')) == null ? void 0 : e.proxy) == null ? void 0 : t.$router
}
function Zo(e, t) {
  var d, v
  const n = mg('RouterLink'),
    l = b(() => !!(e.href || e.to)),
    a = b(() => (l == null ? void 0 : l.value) || ju(t, 'click') || ju(e, 'click'))
  if (typeof n == 'string' || !('useLink' in n)) {
    const m = ae(e, 'href')
    return { isLink: l, isClickable: a, href: m, linkProps: rt({ href: m }) }
  }
  const o = b(() => ({ ...e, to: ae(() => e.to || '') })),
    i = n.useLink(o.value),
    r = b(() => (e.to ? i : void 0)),
    s = o_(),
    c = b(() => {
      var m, h, g
      return r.value
        ? e.exact
          ? s.value
            ? ((g = r.value.isExactActive) == null ? void 0 : g.value) &&
              vl(r.value.route.value.query, s.value.query)
            : (((h = r.value.isExactActive) == null ? void 0 : h.value) ?? !1)
          : (((m = r.value.isActive) == null ? void 0 : m.value) ?? !1)
        : !1
    }),
    u = b(() => {
      var m
      return e.to ? ((m = r.value) == null ? void 0 : m.route.value.href) : e.href
    })
  return {
    isLink: l,
    isClickable: a,
    isActive: c,
    route: (d = r.value) == null ? void 0 : d.route,
    navigate: (v = r.value) == null ? void 0 : v.navigate,
    href: u,
    linkProps: rt({ href: u, 'aria-current': b(() => (c.value ? 'page' : void 0)) }),
  }
}
const Jo = $({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, 'router')
let Ai = !1
function i_(e, t) {
  let n = !1,
    l,
    a
  Be &&
    (Ke(() => {
      window.addEventListener('popstate', o),
        (l =
          e == null
            ? void 0
            : e.beforeEach((i, r, s) => {
                Ai ? (n ? t(s) : s()) : setTimeout(() => (n ? t(s) : s())), (Ai = !0)
              })),
        (a =
          e == null
            ? void 0
            : e.afterEach(() => {
                Ai = !1
              }))
    }),
    bt(() => {
      window.removeEventListener('popstate', o), l == null || l(), a == null || a()
    }))
  function o(i) {
    var r
    ;((r = i.state) != null && r.replaced) || ((n = !0), setTimeout(() => (n = !1)))
  }
}
function r_(e, t) {
  me(
    () => {
      var n
      return (n = e.isActive) == null ? void 0 : n.value
    },
    (n) => {
      e.isLink.value &&
        n &&
        t &&
        Ke(() => {
          t(!0)
        })
    },
    { immediate: !0 },
  )
}
const vr = Symbol('rippleStop'),
  s_ = 80
function $c(e, t) {
  ;(e.style.transform = t), (e.style.webkitTransform = t)
}
function mr(e) {
  return e.constructor.name === 'TouchEvent'
}
function Yv(e) {
  return e.constructor.name === 'KeyboardEvent'
}
const u_ = function (e, t) {
    var d
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      l = 0,
      a = 0
    if (!Yv(e)) {
      const v = t.getBoundingClientRect(),
        m = mr(e) ? e.touches[e.touches.length - 1] : e
      ;(l = m.clientX - v.left), (a = m.clientY - v.top)
    }
    let o = 0,
      i = 0.3
    ;(d = t._ripple) != null && d.circle
      ? ((i = 0.15),
        (o = t.clientWidth / 2),
        (o = n.center ? o : o + Math.sqrt((l - o) ** 2 + (a - o) ** 2) / 4))
      : (o = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2)
    const r = `${(t.clientWidth - o * 2) / 2}px`,
      s = `${(t.clientHeight - o * 2) / 2}px`,
      c = n.center ? r : `${l - o}px`,
      u = n.center ? s : `${a - o}px`
    return { radius: o, scale: i, x: c, y: u, centerX: r, centerY: s }
  },
  Eo = {
    show(e, t) {
      var m
      let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
      if (!((m = t == null ? void 0 : t._ripple) != null && m.enabled)) return
      const l = document.createElement('span'),
        a = document.createElement('span')
      l.appendChild(a),
        (l.className = 'v-ripple__container'),
        n.class && (l.className += ` ${n.class}`)
      const { radius: o, scale: i, x: r, y: s, centerX: c, centerY: u } = u_(e, t, n),
        d = `${o * 2}px`
      ;(a.className = 'v-ripple__animation'),
        (a.style.width = d),
        (a.style.height = d),
        t.appendChild(l)
      const v = window.getComputedStyle(t)
      v &&
        v.position === 'static' &&
        ((t.style.position = 'relative'), (t.dataset.previousPosition = 'static')),
        a.classList.add('v-ripple__animation--enter'),
        a.classList.add('v-ripple__animation--visible'),
        $c(a, `translate(${r}, ${s}) scale3d(${i},${i},${i})`),
        (a.dataset.activated = String(performance.now())),
        setTimeout(() => {
          a.classList.remove('v-ripple__animation--enter'),
            a.classList.add('v-ripple__animation--in'),
            $c(a, `translate(${c}, ${u}) scale3d(1,1,1)`)
        }, 0)
    },
    hide(e) {
      var o
      if (!((o = e == null ? void 0 : e._ripple) != null && o.enabled)) return
      const t = e.getElementsByClassName('v-ripple__animation')
      if (t.length === 0) return
      const n = t[t.length - 1]
      if (n.dataset.isHiding) return
      n.dataset.isHiding = 'true'
      const l = performance.now() - Number(n.dataset.activated),
        a = Math.max(250 - l, 0)
      setTimeout(() => {
        n.classList.remove('v-ripple__animation--in'),
          n.classList.add('v-ripple__animation--out'),
          setTimeout(() => {
            var r
            e.getElementsByClassName('v-ripple__animation').length === 1 &&
              e.dataset.previousPosition &&
              ((e.style.position = e.dataset.previousPosition), delete e.dataset.previousPosition),
              ((r = n.parentNode) == null ? void 0 : r.parentNode) === e &&
                e.removeChild(n.parentNode)
          }, 300)
      }, a)
    },
  }
function qv(e) {
  return typeof e > 'u' || !!e
}
function xa(e) {
  const t = {},
    n = e.currentTarget
  if (!(!(n != null && n._ripple) || n._ripple.touched || e[vr])) {
    if (((e[vr] = !0), mr(e))) (n._ripple.touched = !0), (n._ripple.isTouch = !0)
    else if (n._ripple.isTouch) return
    if (
      ((t.center = n._ripple.centered || Yv(e)),
      n._ripple.class && (t.class = n._ripple.class),
      mr(e))
    ) {
      if (n._ripple.showTimerCommit) return
      ;(n._ripple.showTimerCommit = () => {
        Eo.show(e, n, t)
      }),
        (n._ripple.showTimer = window.setTimeout(() => {
          var l
          ;(l = n == null ? void 0 : n._ripple) != null &&
            l.showTimerCommit &&
            (n._ripple.showTimerCommit(), (n._ripple.showTimerCommit = null))
        }, s_))
    } else Eo.show(e, n, t)
  }
}
function Nc(e) {
  e[vr] = !0
}
function Ft(e) {
  const t = e.currentTarget
  if (t != null && t._ripple) {
    if (
      (window.clearTimeout(t._ripple.showTimer), e.type === 'touchend' && t._ripple.showTimerCommit)
    ) {
      t._ripple.showTimerCommit(),
        (t._ripple.showTimerCommit = null),
        (t._ripple.showTimer = window.setTimeout(() => {
          Ft(e)
        }))
      return
    }
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = !1)
    }),
      Eo.hide(t)
  }
}
function Xv(e) {
  const t = e.currentTarget
  t != null &&
    t._ripple &&
    (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null),
    window.clearTimeout(t._ripple.showTimer))
}
let Va = !1
function Qv(e) {
  !Va && (e.keyCode === Mu.enter || e.keyCode === Mu.space) && ((Va = !0), xa(e))
}
function Zv(e) {
  ;(Va = !1), Ft(e)
}
function Jv(e) {
  Va && ((Va = !1), Ft(e))
}
function em(e, t, n) {
  const { value: l, modifiers: a } = t,
    o = qv(l)
  if (
    (o || Eo.hide(e),
    (e._ripple = e._ripple ?? {}),
    (e._ripple.enabled = o),
    (e._ripple.centered = a.center),
    (e._ripple.circle = a.circle),
    Lf(l) && l.class && (e._ripple.class = l.class),
    o && !n)
  ) {
    if (a.stop) {
      e.addEventListener('touchstart', Nc, { passive: !0 }), e.addEventListener('mousedown', Nc)
      return
    }
    e.addEventListener('touchstart', xa, { passive: !0 }),
      e.addEventListener('touchend', Ft, { passive: !0 }),
      e.addEventListener('touchmove', Xv, { passive: !0 }),
      e.addEventListener('touchcancel', Ft),
      e.addEventListener('mousedown', xa),
      e.addEventListener('mouseup', Ft),
      e.addEventListener('mouseleave', Ft),
      e.addEventListener('keydown', Qv),
      e.addEventListener('keyup', Zv),
      e.addEventListener('blur', Jv),
      e.addEventListener('dragstart', Ft, { passive: !0 })
  } else !o && n && tm(e)
}
function tm(e) {
  e.removeEventListener('mousedown', xa),
    e.removeEventListener('touchstart', xa),
    e.removeEventListener('touchend', Ft),
    e.removeEventListener('touchmove', Xv),
    e.removeEventListener('touchcancel', Ft),
    e.removeEventListener('mouseup', Ft),
    e.removeEventListener('mouseleave', Ft),
    e.removeEventListener('keydown', Qv),
    e.removeEventListener('keyup', Zv),
    e.removeEventListener('dragstart', Ft),
    e.removeEventListener('blur', Jv)
}
function c_(e, t) {
  em(e, t, !1)
}
function d_(e) {
  delete e._ripple, tm(e)
}
function f_(e, t) {
  if (t.value === t.oldValue) return
  const n = qv(t.oldValue)
  em(e, t, n)
}
const qn = { mounted: c_, unmounted: d_, updated: f_ },
  xs = $(
    {
      active: { type: Boolean, default: void 0 },
      activeColor: String,
      baseColor: String,
      symbol: { type: null, default: Ss },
      flat: Boolean,
      icon: [Boolean, String, Function, Object],
      prependIcon: Ee,
      appendIcon: Ee,
      block: Boolean,
      readonly: Boolean,
      slim: Boolean,
      stacked: Boolean,
      ripple: { type: [Boolean, Object], default: !0 },
      text: String,
      ...Zt(),
      ...ge(),
      ...Ht(),
      ...Tt(),
      ...pt(),
      ...Wl(),
      ..._s(),
      ...Gl(),
      ...Cs(),
      ...ot(),
      ...Jo(),
      ...gl(),
      ...Te({ tag: 'button' }),
      ...$e(),
      ...Yn({ variant: 'elevated' }),
    },
    'VBtn',
  ),
  gn = J()({
    name: 'VBtn',
    props: xs(),
    emits: { 'group:selected': (e) => !0 },
    setup(e, t) {
      let { attrs: n, slots: l } = t
      const { themeClasses: a } = qe(e),
        { borderClasses: o } = Jt(e),
        { densityClasses: i } = en(e),
        { dimensionStyles: r } = Ot(e),
        { elevationClasses: s } = Et(e),
        { loaderClasses: c } = ws(e),
        { locationStyles: u } = ja(e),
        { positionClasses: d } = ks(e),
        { roundedClasses: v } = it(e),
        { sizeClasses: m, sizeStyles: h } = Kl(e),
        g = Ul(e, e.symbol, !1),
        y = Zo(e, n),
        p = b(() => {
          var T
          return e.active !== void 0
            ? e.active
            : y.isLink.value
              ? (T = y.isActive) == null
                ? void 0
                : T.value
              : g == null
                ? void 0
                : g.isSelected.value
        }),
        _ = b(() => (p.value ? (e.activeColor ?? e.color) : e.color)),
        C = b(() => {
          var E, R
          return {
            color:
              ((g == null ? void 0 : g.isSelected.value) &&
                (!y.isLink.value || ((E = y.isActive) == null ? void 0 : E.value))) ||
              !g ||
              ((R = y.isActive) == null ? void 0 : R.value)
                ? (_.value ?? e.baseColor)
                : e.baseColor,
            variant: e.variant,
          }
        }),
        { colorClasses: k, colorStyles: I, variantClasses: P } = Ha(C),
        A = b(() => (g == null ? void 0 : g.disabled.value) || e.disabled),
        V = b(() => e.variant === 'elevated' && !(e.disabled || e.flat || e.border)),
        x = b(() => {
          if (!(e.value === void 0 || typeof e.value == 'symbol'))
            return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value
        })
      function O(T) {
        var E
        A.value ||
          (y.isLink.value &&
            (T.metaKey || T.ctrlKey || T.shiftKey || T.button !== 0 || n.target === '_blank')) ||
          ((E = y.navigate) == null || E.call(y, T), g == null || g.toggle())
      }
      return (
        r_(y, g == null ? void 0 : g.select),
        oe(() => {
          const T = y.isLink.value ? 'a' : e.tag,
            E = !!(e.prependIcon || l.prepend),
            R = !!(e.appendIcon || l.append),
            N = !!(e.icon && e.icon !== !0)
          return Ye(
            f(
              T,
              ve(
                {
                  type: T === 'a' ? void 0 : 'button',
                  class: [
                    'v-btn',
                    g == null ? void 0 : g.selectedClass.value,
                    {
                      'v-btn--active': p.value,
                      'v-btn--block': e.block,
                      'v-btn--disabled': A.value,
                      'v-btn--elevated': V.value,
                      'v-btn--flat': e.flat,
                      'v-btn--icon': !!e.icon,
                      'v-btn--loading': e.loading,
                      'v-btn--readonly': e.readonly,
                      'v-btn--slim': e.slim,
                      'v-btn--stacked': e.stacked,
                    },
                    a.value,
                    o.value,
                    k.value,
                    i.value,
                    s.value,
                    c.value,
                    d.value,
                    v.value,
                    m.value,
                    P.value,
                    e.class,
                  ],
                  style: [I.value, r.value, u.value, h.value, e.style],
                  'aria-busy': e.loading ? !0 : void 0,
                  disabled: A.value || void 0,
                  tabindex: e.loading || e.readonly ? -1 : void 0,
                  onClick: O,
                  value: x.value,
                },
                y.linkProps,
              ),
              {
                default: () => {
                  var q
                  return [
                    jl(!0, 'v-btn'),
                    !e.icon &&
                      E &&
                      f('span', { key: 'prepend', class: 'v-btn__prepend' }, [
                        l.prepend
                          ? f(
                              Me,
                              {
                                key: 'prepend-defaults',
                                disabled: !e.prependIcon,
                                defaults: { VIcon: { icon: e.prependIcon } },
                              },
                              l.prepend,
                            )
                          : f(je, { key: 'prepend-icon', icon: e.prependIcon }, null),
                      ]),
                    f('span', { class: 'v-btn__content', 'data-no-activator': '' }, [
                      !l.default && N
                        ? f(je, { key: 'content-icon', icon: e.icon }, null)
                        : f(
                            Me,
                            {
                              key: 'content-defaults',
                              disabled: !N,
                              defaults: { VIcon: { icon: e.icon } },
                            },
                            {
                              default: () => {
                                var G
                                return [((G = l.default) == null ? void 0 : G.call(l)) ?? e.text]
                              },
                            },
                          ),
                    ]),
                    !e.icon &&
                      R &&
                      f('span', { key: 'append', class: 'v-btn__append' }, [
                        l.append
                          ? f(
                              Me,
                              {
                                key: 'append-defaults',
                                disabled: !e.appendIcon,
                                defaults: { VIcon: { icon: e.appendIcon } },
                              },
                              l.append,
                            )
                          : f(je, { key: 'append-icon', icon: e.appendIcon }, null),
                      ]),
                    !!e.loading &&
                      f('span', { key: 'loader', class: 'v-btn__loader' }, [
                        ((q = l.loader) == null ? void 0 : q.call(l)) ??
                          f(
                            t_,
                            {
                              color: typeof e.loading == 'boolean' ? void 0 : e.loading,
                              indeterminate: !0,
                              width: '2',
                            },
                            null,
                          ),
                      ]),
                  ]
                },
              },
            ),
            [[qn, !A.value && e.ripple, '', { center: !!e.icon }]],
          )
        }),
        { group: g }
      )
    },
  }),
  v_ = $({ ...xs({ icon: '$menu', variant: 'text' }) }, 'VAppBarNavIcon'),
  m_ = J()({
    name: 'VAppBarNavIcon',
    props: v_(),
    setup(e, t) {
      let { slots: n } = t
      return oe(() => f(gn, ve(e, { class: ['v-app-bar-nav-icon'] }), n)), {}
    },
  }),
  h_ = J()({
    name: 'VAppBarTitle',
    props: Rv(),
    setup(e, t) {
      let { slots: n } = t
      return oe(() => f(ms, ve(e, { class: 'v-app-bar-title' }), n)), {}
    },
  }),
  g_ = $(
    {
      start: Boolean,
      end: Boolean,
      icon: Ee,
      image: String,
      text: String,
      ...Zt(),
      ...ge(),
      ...Ht(),
      ...ot(),
      ...gl(),
      ...Te(),
      ...$e(),
      ...Yn({ variant: 'flat' }),
    },
    'VAvatar',
  ),
  rn = J()({
    name: 'VAvatar',
    props: g_(),
    setup(e, t) {
      let { slots: n } = t
      const { themeClasses: l } = qe(e),
        { borderClasses: a } = Jt(e),
        { colorClasses: o, colorStyles: i, variantClasses: r } = Ha(e),
        { densityClasses: s } = en(e),
        { roundedClasses: c } = it(e),
        { sizeClasses: u, sizeStyles: d } = Kl(e)
      return (
        oe(() =>
          f(
            e.tag,
            {
              class: [
                'v-avatar',
                { 'v-avatar--start': e.start, 'v-avatar--end': e.end },
                l.value,
                a.value,
                o.value,
                s.value,
                c.value,
                u.value,
                r.value,
                e.class,
              ],
              style: [i.value, d.value, e.style],
            },
            {
              default: () => [
                n.default
                  ? f(
                      Me,
                      {
                        key: 'content-defaults',
                        defaults: { VImg: { cover: !0, src: e.image }, VIcon: { icon: e.icon } },
                      },
                      { default: () => [n.default()] },
                    )
                  : e.image
                    ? f(Na, { key: 'image', src: e.image, alt: '', cover: !0 }, null)
                    : e.icon
                      ? f(je, { key: 'icon', icon: e.icon }, null)
                      : e.text,
                jl(!1, 'v-avatar'),
              ],
            },
          ),
        ),
        {}
      )
    },
  }),
  y_ = $({ text: String, onClick: At(), ...ge(), ...$e() }, 'VLabel'),
  ei = J()({
    name: 'VLabel',
    props: y_(),
    setup(e, t) {
      let { slots: n } = t
      return (
        oe(() => {
          var l
          return f(
            'label',
            {
              class: ['v-label', { 'v-label--clickable': !!e.onClick }, e.class],
              style: e.style,
              onClick: e.onClick,
            },
            [e.text, (l = n.default) == null ? void 0 : l.call(n)],
          )
        }),
        {}
      )
    },
  }),
  nm = Symbol.for('vuetify:selection-control-group'),
  lm = $(
    {
      color: String,
      disabled: { type: Boolean, default: null },
      defaultsTarget: String,
      error: Boolean,
      id: String,
      inline: Boolean,
      falseIcon: Ee,
      trueIcon: Ee,
      ripple: { type: [Boolean, Object], default: !0 },
      multiple: { type: Boolean, default: null },
      name: String,
      readonly: { type: Boolean, default: null },
      modelValue: null,
      type: String,
      valueComparator: { type: Function, default: vl },
      ...ge(),
      ...Ht(),
      ...$e(),
    },
    'SelectionControlGroup',
  ),
  b_ = $({ ...lm({ defaultsTarget: 'VSelectionControl' }) }, 'VSelectionControlGroup')
J()({
  name: 'VSelectionControlGroup',
  props: b_(),
  emits: { 'update:modelValue': (e) => !0 },
  setup(e, t) {
    let { slots: n } = t
    const l = Ae(e, 'modelValue'),
      a = $t(),
      o = b(() => e.id || `v-selection-control-group-${a}`),
      i = b(() => e.name || o.value),
      r = new Set()
    return (
      Ze(nm, {
        modelValue: l,
        forceUpdate: () => {
          r.forEach((s) => s())
        },
        onForceUpdate: (s) => {
          r.add(s),
            bt(() => {
              r.delete(s)
            })
        },
      }),
      Qt({
        [e.defaultsTarget]: {
          color: ae(e, 'color'),
          disabled: ae(e, 'disabled'),
          density: ae(e, 'density'),
          error: ae(e, 'error'),
          inline: ae(e, 'inline'),
          modelValue: l,
          multiple: b(() => !!e.multiple || (e.multiple == null && Array.isArray(l.value))),
          name: i,
          falseIcon: ae(e, 'falseIcon'),
          trueIcon: ae(e, 'trueIcon'),
          readonly: ae(e, 'readonly'),
          ripple: ae(e, 'ripple'),
          type: ae(e, 'type'),
          valueComparator: ae(e, 'valueComparator'),
        },
      }),
      oe(() => {
        var s
        return f(
          'div',
          {
            class: [
              'v-selection-control-group',
              { 'v-selection-control-group--inline': e.inline },
              e.class,
            ],
            style: e.style,
            role: e.type === 'radio' ? 'radiogroup' : void 0,
          },
          [(s = n.default) == null ? void 0 : s.call(n)],
        )
      }),
      {}
    )
  },
})
const am = $(
  {
    label: String,
    baseColor: String,
    trueValue: null,
    falseValue: null,
    value: null,
    ...ge(),
    ...lm(),
  },
  'VSelectionControl',
)
function p_(e) {
  const t = Ie(nm, void 0),
    { densityClasses: n } = en(e),
    l = Ae(e, 'modelValue'),
    a = b(() => (e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : !0)),
    o = b(() => (e.falseValue !== void 0 ? e.falseValue : !1)),
    i = b(() => !!e.multiple || (e.multiple == null && Array.isArray(l.value))),
    r = b({
      get() {
        const m = t ? t.modelValue.value : l.value
        return i.value
          ? gt(m).some((h) => e.valueComparator(h, a.value))
          : e.valueComparator(m, a.value)
      },
      set(m) {
        if (e.readonly) return
        const h = m ? a.value : o.value
        let g = h
        i.value &&
          (g = m ? [...gt(l.value), h] : gt(l.value).filter((y) => !e.valueComparator(y, a.value))),
          t ? (t.modelValue.value = g) : (l.value = g)
      },
    }),
    { textColorClasses: s, textColorStyles: c } = Yt(
      b(() => {
        if (!(e.error || e.disabled)) return r.value ? e.color : e.baseColor
      }),
    ),
    { backgroundColorClasses: u, backgroundColorStyles: d } = Je(
      b(() => (r.value && !e.error && !e.disabled ? e.color : e.baseColor)),
    ),
    v = b(() => (r.value ? e.trueIcon : e.falseIcon))
  return {
    group: t,
    densityClasses: n,
    trueValue: a,
    falseValue: o,
    model: r,
    textColorClasses: s,
    textColorStyles: c,
    backgroundColorClasses: u,
    backgroundColorStyles: d,
    icon: v,
  }
}
const Hc = J()({
    name: 'VSelectionControl',
    directives: { Ripple: qn },
    inheritAttrs: !1,
    props: am(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { attrs: n, slots: l } = t
      const {
          group: a,
          densityClasses: o,
          icon: i,
          model: r,
          textColorClasses: s,
          textColorStyles: c,
          backgroundColorClasses: u,
          backgroundColorStyles: d,
          trueValue: v,
        } = p_(e),
        m = $t(),
        h = ue(!1),
        g = ue(!1),
        y = H(),
        p = b(() => e.id || `input-${m}`),
        _ = b(() => !e.disabled && !e.readonly)
      a == null ||
        a.onForceUpdate(() => {
          y.value && (y.value.checked = r.value)
        })
      function C(A) {
        _.value && ((h.value = !0), Ll(A.target, ':focus-visible') !== !1 && (g.value = !0))
      }
      function k() {
        ;(h.value = !1), (g.value = !1)
      }
      function I(A) {
        A.stopPropagation()
      }
      function P(A) {
        if (!_.value) {
          y.value && (y.value.checked = r.value)
          return
        }
        e.readonly && a && Ke(() => a.forceUpdate()), (r.value = A.target.checked)
      }
      return (
        oe(() => {
          var T, E
          const A = l.label ? l.label({ label: e.label, props: { for: p.value } }) : e.label,
            [V, x] = Da(n),
            O = f(
              'input',
              ve(
                {
                  ref: y,
                  checked: r.value,
                  disabled: !!e.disabled,
                  id: p.value,
                  onBlur: k,
                  onFocus: C,
                  onInput: P,
                  'aria-disabled': !!e.disabled,
                  'aria-label': e.label,
                  type: e.type,
                  value: v.value,
                  name: e.name,
                  'aria-checked': e.type === 'checkbox' ? r.value : void 0,
                },
                x,
              ),
              null,
            )
          return f(
            'div',
            ve(
              {
                class: [
                  'v-selection-control',
                  {
                    'v-selection-control--dirty': r.value,
                    'v-selection-control--disabled': e.disabled,
                    'v-selection-control--error': e.error,
                    'v-selection-control--focused': h.value,
                    'v-selection-control--focus-visible': g.value,
                    'v-selection-control--inline': e.inline,
                  },
                  o.value,
                  e.class,
                ],
              },
              V,
              { style: e.style },
            ),
            [
              f('div', { class: ['v-selection-control__wrapper', s.value], style: c.value }, [
                (T = l.default) == null
                  ? void 0
                  : T.call(l, { backgroundColorClasses: u, backgroundColorStyles: d }),
                Ye(
                  f('div', { class: ['v-selection-control__input'] }, [
                    ((E = l.input) == null
                      ? void 0
                      : E.call(l, {
                          model: r,
                          textColorClasses: s,
                          textColorStyles: c,
                          backgroundColorClasses: u,
                          backgroundColorStyles: d,
                          inputNode: O,
                          icon: i.value,
                          props: { onFocus: C, onBlur: k, id: p.value },
                        })) ??
                      f(ke, null, [i.value && f(je, { key: 'icon', icon: i.value }, null), O]),
                  ]),
                  [
                    [
                      qt('ripple'),
                      e.ripple && [!e.disabled && !e.readonly, null, ['center', 'circle']],
                    ],
                  ],
                ),
              ]),
              A && f(ei, { for: p.value, onClick: I }, { default: () => [A] }),
            ],
          )
        }),
        { isFocused: h, input: y }
      )
    },
  }),
  om = $(
    {
      indeterminate: Boolean,
      indeterminateIcon: { type: Ee, default: '$checkboxIndeterminate' },
      ...am({ falseIcon: '$checkboxOff', trueIcon: '$checkboxOn' }),
    },
    'VCheckboxBtn',
  ),
  Po = J()({
    name: 'VCheckboxBtn',
    props: om(),
    emits: { 'update:modelValue': (e) => !0, 'update:indeterminate': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const l = Ae(e, 'indeterminate'),
        a = Ae(e, 'modelValue')
      function o(s) {
        l.value && (l.value = !1)
      }
      const i = b(() => (l.value ? e.indeterminateIcon : e.falseIcon)),
        r = b(() => (l.value ? e.indeterminateIcon : e.trueIcon))
      return (
        oe(() => {
          const s = Dt(Hc.filterProps(e), ['modelValue'])
          return f(
            Hc,
            ve(s, {
              modelValue: a.value,
              'onUpdate:modelValue': [(c) => (a.value = c), o],
              class: ['v-checkbox-btn', e.class],
              style: e.style,
              type: 'checkbox',
              falseIcon: i.value,
              trueIcon: r.value,
              'aria-checked': l.value ? 'mixed' : void 0,
            }),
            n,
          )
        }),
        {}
      )
    },
  })
function im(e) {
  const { t } = Kn()
  function n(l) {
    let { name: a } = l
    const o = {
        prepend: 'prependAction',
        prependInner: 'prependAction',
        append: 'appendAction',
        appendInner: 'appendAction',
        clear: 'clear',
      }[a],
      i = e[`onClick:${a}`],
      r = i && o ? t(`$vuetify.input.${o}`, e.label ?? '') : void 0
    return f(je, { icon: e[`${a}Icon`], 'aria-label': r, onClick: i }, null)
  }
  return { InputIcon: n }
}
const S_ = $(
    {
      active: Boolean,
      color: String,
      messages: { type: [Array, String], default: () => [] },
      ...ge(),
      ...Gn({ transition: { component: $v, leaveAbsolute: !0, group: !0 } }),
    },
    'VMessages',
  ),
  __ = J()({
    name: 'VMessages',
    props: S_(),
    setup(e, t) {
      let { slots: n } = t
      const l = b(() => gt(e.messages)),
        { textColorClasses: a, textColorStyles: o } = Yt(b(() => e.color))
      return (
        oe(() =>
          f(
            Kt,
            {
              transition: e.transition,
              tag: 'div',
              class: ['v-messages', a.value, e.class],
              style: [o.value, e.style],
              role: 'alert',
              'aria-live': 'polite',
            },
            {
              default: () => [
                e.active &&
                  l.value.map((i, r) =>
                    f('div', { class: 'v-messages__message', key: `${r}-${l.value}` }, [
                      n.message ? n.message({ message: i }) : i,
                    ]),
                  ),
              ],
            },
          ),
        ),
        {}
      )
    },
  }),
  Vs = $({ focused: Boolean, 'onUpdate:focused': At() }, 'focus')
function Yl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : bn()
  const n = Ae(e, 'focused'),
    l = b(() => ({ [`${t}--focused`]: n.value }))
  function a() {
    n.value = !0
  }
  function o() {
    n.value = !1
  }
  return { focusClasses: l, isFocused: n, focus: a, blur: o }
}
const rm = Symbol.for('vuetify:form'),
  w_ = $(
    {
      disabled: Boolean,
      fastFail: Boolean,
      readonly: Boolean,
      modelValue: { type: Boolean, default: null },
      validateOn: { type: String, default: 'input' },
    },
    'form',
  )
function C_(e) {
  const t = Ae(e, 'modelValue'),
    n = b(() => e.disabled),
    l = b(() => e.readonly),
    a = ue(!1),
    o = H([]),
    i = H([])
  async function r() {
    const u = []
    let d = !0
    ;(i.value = []), (a.value = !0)
    for (const v of o.value) {
      const m = await v.validate()
      if ((m.length > 0 && ((d = !1), u.push({ id: v.id, errorMessages: m })), !d && e.fastFail))
        break
    }
    return (i.value = u), (a.value = !1), { valid: d, errors: i.value }
  }
  function s() {
    o.value.forEach((u) => u.reset())
  }
  function c() {
    o.value.forEach((u) => u.resetValidation())
  }
  return (
    me(
      o,
      () => {
        let u = 0,
          d = 0
        const v = []
        for (const m of o.value)
          m.isValid === !1
            ? (d++, v.push({ id: m.id, errorMessages: m.errorMessages }))
            : m.isValid === !0 && u++
        ;(i.value = v), (t.value = d > 0 ? !1 : u === o.value.length ? !0 : null)
      },
      { deep: !0, flush: 'post' },
    ),
    Ze(rm, {
      register: (u) => {
        let { id: d, vm: v, validate: m, reset: h, resetValidation: g } = u
        o.value.some((y) => y.id === d),
          o.value.push({
            id: d,
            validate: m,
            reset: h,
            resetValidation: g,
            vm: Do(v),
            isValid: null,
            errorMessages: [],
          })
      },
      unregister: (u) => {
        o.value = o.value.filter((d) => d.id !== u)
      },
      update: (u, d, v) => {
        const m = o.value.find((h) => h.id === u)
        m && ((m.isValid = d), (m.errorMessages = v))
      },
      isDisabled: n,
      isReadonly: l,
      isValidating: a,
      isValid: t,
      items: o,
      validateOn: ae(e, 'validateOn'),
    }),
    {
      errors: i,
      isDisabled: n,
      isReadonly: l,
      isValidating: a,
      isValid: t,
      items: o,
      validate: r,
      reset: s,
      resetValidation: c,
    }
  )
}
function Es(e) {
  const t = Ie(rm, null)
  return {
    ...t,
    isReadonly: b(
      () => !!((e == null ? void 0 : e.readonly) ?? (t == null ? void 0 : t.isReadonly.value)),
    ),
    isDisabled: b(
      () => !!((e == null ? void 0 : e.disabled) ?? (t == null ? void 0 : t.isDisabled.value)),
    ),
  }
}
const k_ = $(
  {
    disabled: { type: Boolean, default: null },
    error: Boolean,
    errorMessages: { type: [Array, String], default: () => [] },
    maxErrors: { type: [Number, String], default: 1 },
    name: String,
    label: String,
    readonly: { type: Boolean, default: null },
    rules: { type: Array, default: () => [] },
    modelValue: null,
    validateOn: String,
    validationValue: null,
    ...Vs(),
  },
  'validation',
)
function x_(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : bn(),
    n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : $t()
  const l = Ae(e, 'modelValue'),
    a = b(() => (e.validationValue === void 0 ? l.value : e.validationValue)),
    o = Es(e),
    i = H([]),
    r = ue(!0),
    s = b(
      () =>
        !!(
          gt(l.value === '' ? null : l.value).length || gt(a.value === '' ? null : a.value).length
        ),
    ),
    c = b(() => {
      var C
      return (C = e.errorMessages) != null && C.length
        ? gt(e.errorMessages).concat(i.value).slice(0, Math.max(0, +e.maxErrors))
        : i.value
    }),
    u = b(() => {
      var I
      let C = (e.validateOn ?? ((I = o.validateOn) == null ? void 0 : I.value)) || 'input'
      C === 'lazy' && (C = 'input lazy'), C === 'eager' && (C = 'input eager')
      const k = new Set((C == null ? void 0 : C.split(' ')) ?? [])
      return {
        input: k.has('input'),
        blur: k.has('blur') || k.has('input') || k.has('invalid-input'),
        invalidInput: k.has('invalid-input'),
        lazy: k.has('lazy'),
        eager: k.has('eager'),
      }
    }),
    d = b(() => {
      var C
      return e.error || ((C = e.errorMessages) != null && C.length)
        ? !1
        : e.rules.length
          ? r.value
            ? i.value.length || u.value.lazy
              ? null
              : !0
            : !i.value.length
          : !0
    }),
    v = ue(!1),
    m = b(() => ({
      [`${t}--error`]: d.value === !1,
      [`${t}--dirty`]: s.value,
      [`${t}--disabled`]: o.isDisabled.value,
      [`${t}--readonly`]: o.isReadonly.value,
    })),
    h = et('validation'),
    g = b(() => e.name ?? nt(n))
  $l(() => {
    var C
    ;(C = o.register) == null ||
      C.call(o, { id: g.value, vm: h, validate: _, reset: y, resetValidation: p })
  }),
    ut(() => {
      var C
      ;(C = o.unregister) == null || C.call(o, g.value)
    }),
    Vt(async () => {
      var C
      u.value.lazy || (await _(!u.value.eager)),
        (C = o.update) == null || C.call(o, g.value, d.value, c.value)
    }),
    Pt(
      () => u.value.input || (u.value.invalidInput && d.value === !1),
      () => {
        me(a, () => {
          if (a.value != null) _()
          else if (e.focused) {
            const C = me(
              () => e.focused,
              (k) => {
                k || _(), C()
              },
            )
          }
        })
      },
    ),
    Pt(
      () => u.value.blur,
      () => {
        me(
          () => e.focused,
          (C) => {
            C || _()
          },
        )
      },
    ),
    me([d, c], () => {
      var C
      ;(C = o.update) == null || C.call(o, g.value, d.value, c.value)
    })
  async function y() {
    ;(l.value = null), await Ke(), await p()
  }
  async function p() {
    ;(r.value = !0), u.value.lazy ? (i.value = []) : await _(!u.value.eager)
  }
  async function _() {
    let C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1
    const k = []
    v.value = !0
    for (const I of e.rules) {
      if (k.length >= +(e.maxErrors ?? 1)) break
      const A = await (typeof I == 'function' ? I : () => I)(a.value)
      if (A !== !0) {
        if (A !== !1 && typeof A != 'string') {
          console.warn(
            `${A} is not a valid value. Rule functions must return boolean true or a string.`,
          )
          continue
        }
        k.push(A || '')
      }
    }
    return (i.value = k), (v.value = !1), (r.value = C), i.value
  }
  return {
    errorMessages: c,
    isDirty: s,
    isDisabled: o.isDisabled,
    isReadonly: o.isReadonly,
    isPristine: r,
    isValid: d,
    isValidating: v,
    reset: y,
    resetValidation: p,
    validate: _,
    validationClasses: m,
  }
}
const ql = $(
    {
      id: String,
      appendIcon: Ee,
      centerAffix: { type: Boolean, default: !0 },
      prependIcon: Ee,
      hideDetails: [Boolean, String],
      hideSpinButtons: Boolean,
      hint: String,
      persistentHint: Boolean,
      messages: { type: [Array, String], default: () => [] },
      direction: {
        type: String,
        default: 'horizontal',
        validator: (e) => ['horizontal', 'vertical'].includes(e),
      },
      'onClick:prepend': At(),
      'onClick:append': At(),
      ...ge(),
      ...Ht(),
      ...Zr(Tt(), ['maxWidth', 'minWidth', 'width']),
      ...$e(),
      ...k_(),
    },
    'VInput',
  ),
  yn = J()({
    name: 'VInput',
    props: { ...ql() },
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { attrs: n, slots: l, emit: a } = t
      const { densityClasses: o } = en(e),
        { dimensionStyles: i } = Ot(e),
        { themeClasses: r } = qe(e),
        { rtlClasses: s } = ct(),
        { InputIcon: c } = im(e),
        u = $t(),
        d = b(() => e.id || `input-${u}`),
        v = b(() => `${d.value}-messages`),
        {
          errorMessages: m,
          isDirty: h,
          isDisabled: g,
          isReadonly: y,
          isPristine: p,
          isValid: _,
          isValidating: C,
          reset: k,
          resetValidation: I,
          validate: P,
          validationClasses: A,
        } = x_(e, 'v-input', d),
        V = b(() => ({
          id: d,
          messagesId: v,
          isDirty: h,
          isDisabled: g,
          isReadonly: y,
          isPristine: p,
          isValid: _,
          isValidating: C,
          reset: k,
          resetValidation: I,
          validate: P,
        })),
        x = b(() => {
          var O
          return ((O = e.errorMessages) != null && O.length) || (!p.value && m.value.length)
            ? m.value
            : e.hint && (e.persistentHint || e.focused)
              ? e.hint
              : e.messages
        })
      return (
        oe(() => {
          var N, q, G, ee
          const O = !!(l.prepend || e.prependIcon),
            T = !!(l.append || e.appendIcon),
            E = x.value.length > 0,
            R = !e.hideDetails || (e.hideDetails === 'auto' && (E || !!l.details))
          return f(
            'div',
            {
              class: [
                'v-input',
                `v-input--${e.direction}`,
                {
                  'v-input--center-affix': e.centerAffix,
                  'v-input--hide-spin-buttons': e.hideSpinButtons,
                },
                o.value,
                r.value,
                s.value,
                A.value,
                e.class,
              ],
              style: [i.value, e.style],
            },
            [
              O &&
                f('div', { key: 'prepend', class: 'v-input__prepend' }, [
                  (N = l.prepend) == null ? void 0 : N.call(l, V.value),
                  e.prependIcon && f(c, { key: 'prepend-icon', name: 'prepend' }, null),
                ]),
              l.default &&
                f('div', { class: 'v-input__control' }, [
                  (q = l.default) == null ? void 0 : q.call(l, V.value),
                ]),
              T &&
                f('div', { key: 'append', class: 'v-input__append' }, [
                  e.appendIcon && f(c, { key: 'append-icon', name: 'append' }, null),
                  (G = l.append) == null ? void 0 : G.call(l, V.value),
                ]),
              R &&
                f('div', { class: 'v-input__details' }, [
                  f(__, { id: v.value, active: E, messages: x.value }, { message: l.message }),
                  (ee = l.details) == null ? void 0 : ee.call(l, V.value),
                ]),
            ],
          )
        }),
        { reset: k, resetValidation: I, validate: P, isValid: _, errorMessages: m }
      )
    },
  }),
  V_ = $({ ...ql(), ...Dt(om(), ['inline']) }, 'VCheckbox'),
  E_ = J()({
    name: 'VCheckbox',
    inheritAttrs: !1,
    props: V_(),
    emits: { 'update:modelValue': (e) => !0, 'update:focused': (e) => !0 },
    setup(e, t) {
      let { attrs: n, slots: l } = t
      const a = Ae(e, 'modelValue'),
        { isFocused: o, focus: i, blur: r } = Yl(e),
        s = $t(),
        c = b(() => e.id || `checkbox-${s}`)
      return (
        oe(() => {
          const [u, d] = Da(n),
            v = yn.filterProps(e),
            m = Po.filterProps(e)
          return f(
            yn,
            ve({ class: ['v-checkbox', e.class] }, u, v, {
              modelValue: a.value,
              'onUpdate:modelValue': (h) => (a.value = h),
              id: c.value,
              focused: o.value,
              style: e.style,
            }),
            {
              ...l,
              default: (h) => {
                let { id: g, messagesId: y, isDisabled: p, isReadonly: _, isValid: C } = h
                return f(
                  Po,
                  ve(
                    m,
                    {
                      id: g.value,
                      'aria-describedby': y.value,
                      disabled: p.value,
                      readonly: _.value,
                    },
                    d,
                    {
                      error: C.value === !1,
                      modelValue: a.value,
                      'onUpdate:modelValue': (k) => (a.value = k),
                      onFocus: i,
                      onBlur: r,
                    },
                  ),
                  l,
                )
              },
            },
          )
        }),
        {}
      )
    },
  })
function P_(e) {
  let { selectedElement: t, containerElement: n, isRtl: l, isHorizontal: a } = e
  const o = Ea(a, n),
    i = sm(a, l, n),
    r = Ea(a, t),
    s = um(a, t),
    c = r * 0.4
  return i > s ? s - c : i + o < s + r ? s - o + r + c : i
}
function A_(e) {
  let { selectedElement: t, containerElement: n, isHorizontal: l } = e
  const a = Ea(l, n),
    o = um(l, t),
    i = Ea(l, t)
  return o - a / 2 + i / 2
}
function jc(e, t) {
  const n = e ? 'scrollWidth' : 'scrollHeight'
  return (t == null ? void 0 : t[n]) || 0
}
function I_(e, t) {
  const n = e ? 'clientWidth' : 'clientHeight'
  return (t == null ? void 0 : t[n]) || 0
}
function sm(e, t, n) {
  if (!n) return 0
  const { scrollLeft: l, offsetWidth: a, scrollWidth: o } = n
  return e ? (t ? o - a + l : l) : n.scrollTop
}
function Ea(e, t) {
  const n = e ? 'offsetWidth' : 'offsetHeight'
  return (t == null ? void 0 : t[n]) || 0
}
function um(e, t) {
  const n = e ? 'offsetLeft' : 'offsetTop'
  return (t == null ? void 0 : t[n]) || 0
}
const T_ = Symbol.for('vuetify:v-slide-group'),
  cm = $(
    {
      centerActive: Boolean,
      direction: { type: String, default: 'horizontal' },
      symbol: { type: null, default: T_ },
      nextIcon: { type: Ee, default: '$next' },
      prevIcon: { type: Ee, default: '$prev' },
      showArrows: {
        type: [Boolean, String],
        validator: (e) => typeof e == 'boolean' || ['always', 'desktop', 'mobile'].includes(e),
      },
      ...ge(),
      ...ss({ mobile: null }),
      ...Te(),
      ...zl({ selectedClass: 'v-slide-group-item--active' }),
    },
    'VSlideGroup',
  ),
  zc = J()({
    name: 'VSlideGroup',
    props: cm(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const { isRtl: l } = ct(),
        { displayClasses: a, mobile: o } = $a(e),
        i = hl(e, e.symbol),
        r = ue(!1),
        s = ue(0),
        c = ue(0),
        u = ue(0),
        d = b(() => e.direction === 'horizontal'),
        { resizeRef: v, contentRect: m } = Vn(),
        { resizeRef: h, contentRect: g } = Vn(),
        y = Op(),
        p = b(() => ({ container: v.el, duration: 200, easing: 'easeOutQuart' })),
        _ = b(() =>
          i.selected.value.length
            ? i.items.value.findIndex((F) => F.id === i.selected.value[0])
            : -1,
        ),
        C = b(() =>
          i.selected.value.length
            ? i.items.value.findIndex((F) => F.id === i.selected.value[i.selected.value.length - 1])
            : -1,
        )
      if (Be) {
        let F = -1
        me(
          () => [i.selected.value, m.value, g.value, d.value],
          () => {
            cancelAnimationFrame(F),
              (F = requestAnimationFrame(() => {
                if (m.value && g.value) {
                  const M = d.value ? 'width' : 'height'
                  ;(c.value = m.value[M]), (u.value = g.value[M]), (r.value = c.value + 1 < u.value)
                }
                if (_.value >= 0 && h.el) {
                  const M = h.el.children[C.value]
                  I(M, e.centerActive)
                }
              }))
          },
        )
      }
      const k = ue(!1)
      function I(F, M) {
        let ne = 0
        M
          ? (ne = A_({ containerElement: v.el, isHorizontal: d.value, selectedElement: F }))
          : (ne = P_({
              containerElement: v.el,
              isHorizontal: d.value,
              isRtl: l.value,
              selectedElement: F,
            })),
          P(ne)
      }
      function P(F) {
        if (!Be || !v.el) return
        const M = Ea(d.value, v.el),
          ne = sm(d.value, l.value, v.el)
        if (!(jc(d.value, v.el) <= M || Math.abs(F - ne) < 16)) {
          if (d.value && l.value && v.el) {
            const { scrollWidth: ie, offsetWidth: pe } = v.el
            F = ie - pe - F
          }
          d.value ? y.horizontal(F, p.value) : y(F, p.value)
        }
      }
      function A(F) {
        const { scrollTop: M, scrollLeft: ne } = F.target
        s.value = d.value ? ne : M
      }
      function V(F) {
        if (((k.value = !0), !(!r.value || !h.el))) {
          for (const M of F.composedPath())
            for (const ne of h.el.children)
              if (ne === M) {
                I(ne)
                return
              }
        }
      }
      function x(F) {
        k.value = !1
      }
      let O = !1
      function T(F) {
        var M
        !O &&
          !k.value &&
          !(F.relatedTarget && (M = h.el) != null && M.contains(F.relatedTarget)) &&
          N(),
          (O = !1)
      }
      function E() {
        O = !0
      }
      function R(F) {
        if (!h.el) return
        function M(ne) {
          F.preventDefault(), N(ne)
        }
        d.value
          ? F.key === 'ArrowRight'
            ? M(l.value ? 'prev' : 'next')
            : F.key === 'ArrowLeft' && M(l.value ? 'next' : 'prev')
          : F.key === 'ArrowDown'
            ? M('next')
            : F.key === 'ArrowUp' && M('prev'),
          F.key === 'Home' ? M('first') : F.key === 'End' && M('last')
      }
      function N(F) {
        var ne, be
        if (!h.el) return
        let M
        if (!F) M = _a(h.el)[0]
        else if (F === 'next') {
          if (
            ((M = (ne = h.el.querySelector(':focus')) == null ? void 0 : ne.nextElementSibling), !M)
          )
            return N('first')
        } else if (F === 'prev') {
          if (
            ((M = (be = h.el.querySelector(':focus')) == null ? void 0 : be.previousElementSibling),
            !M)
          )
            return N('last')
        } else
          F === 'first' ? (M = h.el.firstElementChild) : F === 'last' && (M = h.el.lastElementChild)
        M && M.focus({ preventScroll: !0 })
      }
      function q(F) {
        const M = d.value && l.value ? -1 : 1,
          ne = (F === 'prev' ? -M : M) * c.value
        let be = s.value + ne
        if (d.value && l.value && v.el) {
          const { scrollWidth: ie, offsetWidth: pe } = v.el
          be += ie - pe
        }
        P(be)
      }
      const G = b(() => ({
          next: i.next,
          prev: i.prev,
          select: i.select,
          isSelected: i.isSelected,
        })),
        ee = b(() => {
          switch (e.showArrows) {
            case 'always':
              return !0
            case 'desktop':
              return !o.value
            case !0:
              return r.value || Math.abs(s.value) > 0
            case 'mobile':
              return o.value || r.value || Math.abs(s.value) > 0
            default:
              return !o.value && (r.value || Math.abs(s.value) > 0)
          }
        }),
        X = b(() => Math.abs(s.value) > 1),
        U = b(() => {
          if (!v.value) return !1
          const F = jc(d.value, v.el),
            M = I_(d.value, v.el)
          return F - M - Math.abs(s.value) > 1
        })
      return (
        oe(() =>
          f(
            e.tag,
            {
              class: [
                'v-slide-group',
                {
                  'v-slide-group--vertical': !d.value,
                  'v-slide-group--has-affixes': ee.value,
                  'v-slide-group--is-overflowing': r.value,
                },
                a.value,
                e.class,
              ],
              style: e.style,
              tabindex: k.value || i.selected.value.length ? -1 : 0,
              onFocus: T,
            },
            {
              default: () => {
                var F, M, ne
                return [
                  ee.value &&
                    f(
                      'div',
                      {
                        key: 'prev',
                        class: [
                          'v-slide-group__prev',
                          { 'v-slide-group__prev--disabled': !X.value },
                        ],
                        onMousedown: E,
                        onClick: () => X.value && q('prev'),
                      },
                      [
                        ((F = n.prev) == null ? void 0 : F.call(n, G.value)) ??
                          f(Fc, null, {
                            default: () => [
                              f(je, { icon: l.value ? e.nextIcon : e.prevIcon }, null),
                            ],
                          }),
                      ],
                    ),
                  f(
                    'div',
                    { key: 'container', ref: v, class: 'v-slide-group__container', onScroll: A },
                    [
                      f(
                        'div',
                        {
                          ref: h,
                          class: 'v-slide-group__content',
                          onFocusin: V,
                          onFocusout: x,
                          onKeydown: R,
                        },
                        [(M = n.default) == null ? void 0 : M.call(n, G.value)],
                      ),
                    ],
                  ),
                  ee.value &&
                    f(
                      'div',
                      {
                        key: 'next',
                        class: [
                          'v-slide-group__next',
                          { 'v-slide-group__next--disabled': !U.value },
                        ],
                        onMousedown: E,
                        onClick: () => U.value && q('next'),
                      },
                      [
                        ((ne = n.next) == null ? void 0 : ne.call(n, G.value)) ??
                          f(Fc, null, {
                            default: () => [
                              f(je, { icon: l.value ? e.prevIcon : e.nextIcon }, null),
                            ],
                          }),
                      ],
                    ),
                ]
              },
            },
          ),
        ),
        { selected: i.selected, scrollTo: q, scrollOffset: s, focus: N, hasPrev: X, hasNext: U }
      )
    },
  }),
  dm = Symbol.for('vuetify:v-chip-group'),
  O_ = $(
    {
      column: Boolean,
      filter: Boolean,
      valueComparator: { type: Function, default: vl },
      ...cm(),
      ...ge(),
      ...zl({ selectedClass: 'v-chip--selected' }),
      ...Te(),
      ...$e(),
      ...Yn({ variant: 'tonal' }),
    },
    'VChipGroup',
  ),
  B_ = J()({
    name: 'VChipGroup',
    props: O_(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const { themeClasses: l } = qe(e),
        { isSelected: a, select: o, next: i, prev: r, selected: s } = hl(e, dm)
      return (
        Qt({
          VChip: {
            color: ae(e, 'color'),
            disabled: ae(e, 'disabled'),
            filter: ae(e, 'filter'),
            variant: ae(e, 'variant'),
          },
        }),
        oe(() => {
          const c = zc.filterProps(e)
          return f(
            zc,
            ve(c, {
              class: ['v-chip-group', { 'v-chip-group--column': e.column }, l.value, e.class],
              style: e.style,
            }),
            {
              default: () => {
                var u
                return [
                  (u = n.default) == null
                    ? void 0
                    : u.call(n, { isSelected: a, select: o, next: i, prev: r, selected: s.value }),
                ]
              },
            },
          )
        }),
        {}
      )
    },
  }),
  L_ = $(
    {
      activeClass: String,
      appendAvatar: String,
      appendIcon: Ee,
      closable: Boolean,
      closeIcon: { type: Ee, default: '$delete' },
      closeLabel: { type: String, default: '$vuetify.close' },
      draggable: Boolean,
      filter: Boolean,
      filterIcon: { type: Ee, default: '$complete' },
      label: Boolean,
      link: { type: Boolean, default: void 0 },
      pill: Boolean,
      prependAvatar: String,
      prependIcon: Ee,
      ripple: { type: [Boolean, Object], default: !0 },
      text: String,
      modelValue: { type: Boolean, default: !0 },
      onClick: At(),
      onClickOnce: At(),
      ...Zt(),
      ...ge(),
      ...Ht(),
      ...pt(),
      ...Wl(),
      ...ot(),
      ...Jo(),
      ...gl(),
      ...Te({ tag: 'span' }),
      ...$e(),
      ...Yn({ variant: 'tonal' }),
    },
    'VChip',
  ),
  ti = J()({
    name: 'VChip',
    directives: { Ripple: qn },
    props: L_(),
    emits: {
      'click:close': (e) => !0,
      'update:modelValue': (e) => !0,
      'group:selected': (e) => !0,
      click: (e) => !0,
    },
    setup(e, t) {
      let { attrs: n, emit: l, slots: a } = t
      const { t: o } = Kn(),
        { borderClasses: i } = Jt(e),
        { colorClasses: r, colorStyles: s, variantClasses: c } = Ha(e),
        { densityClasses: u } = en(e),
        { elevationClasses: d } = Et(e),
        { roundedClasses: v } = it(e),
        { sizeClasses: m } = Kl(e),
        { themeClasses: h } = qe(e),
        g = Ae(e, 'modelValue'),
        y = Ul(e, dm, !1),
        p = Zo(e, n),
        _ = b(() => e.link !== !1 && p.isLink.value),
        C = b(() => !e.disabled && e.link !== !1 && (!!y || e.link || p.isClickable.value)),
        k = b(() => ({
          'aria-label': o(e.closeLabel),
          onClick(A) {
            A.preventDefault(), A.stopPropagation(), (g.value = !1), l('click:close', A)
          },
        }))
      function I(A) {
        var V
        l('click', A),
          C.value && ((V = p.navigate) == null || V.call(p, A), y == null || y.toggle())
      }
      function P(A) {
        ;(A.key === 'Enter' || A.key === ' ') && (A.preventDefault(), I(A))
      }
      return () => {
        var q
        const A = p.isLink.value ? 'a' : e.tag,
          V = !!(e.appendIcon || e.appendAvatar),
          x = !!(V || a.append),
          O = !!(a.close || e.closable),
          T = !!(a.filter || e.filter) && y,
          E = !!(e.prependIcon || e.prependAvatar),
          R = !!(E || a.prepend),
          N = !y || y.isSelected.value
        return (
          g.value &&
          Ye(
            f(
              A,
              ve(
                {
                  class: [
                    'v-chip',
                    {
                      'v-chip--disabled': e.disabled,
                      'v-chip--label': e.label,
                      'v-chip--link': C.value,
                      'v-chip--filter': T,
                      'v-chip--pill': e.pill,
                      [`${e.activeClass}`]:
                        e.activeClass && ((q = p.isActive) == null ? void 0 : q.value),
                    },
                    h.value,
                    i.value,
                    N ? r.value : void 0,
                    u.value,
                    d.value,
                    v.value,
                    m.value,
                    c.value,
                    y == null ? void 0 : y.selectedClass.value,
                    e.class,
                  ],
                  style: [N ? s.value : void 0, e.style],
                  disabled: e.disabled || void 0,
                  draggable: e.draggable,
                  tabindex: C.value ? 0 : void 0,
                  onClick: I,
                  onKeydown: C.value && !_.value && P,
                },
                p.linkProps,
              ),
              {
                default: () => {
                  var G
                  return [
                    jl(C.value, 'v-chip'),
                    T &&
                      f(
                        ys,
                        { key: 'filter' },
                        {
                          default: () => [
                            Ye(
                              f('div', { class: 'v-chip__filter' }, [
                                a.filter
                                  ? f(
                                      Me,
                                      {
                                        key: 'filter-defaults',
                                        disabled: !e.filterIcon,
                                        defaults: { VIcon: { icon: e.filterIcon } },
                                      },
                                      a.filter,
                                    )
                                  : f(je, { key: 'filter-icon', icon: e.filterIcon }, null),
                              ]),
                              [[Xt, y.isSelected.value]],
                            ),
                          ],
                        },
                      ),
                    R &&
                      f('div', { key: 'prepend', class: 'v-chip__prepend' }, [
                        a.prepend
                          ? f(
                              Me,
                              {
                                key: 'prepend-defaults',
                                disabled: !E,
                                defaults: {
                                  VAvatar: { image: e.prependAvatar, start: !0 },
                                  VIcon: { icon: e.prependIcon, start: !0 },
                                },
                              },
                              a.prepend,
                            )
                          : f(ke, null, [
                              e.prependIcon &&
                                f(
                                  je,
                                  { key: 'prepend-icon', icon: e.prependIcon, start: !0 },
                                  null,
                                ),
                              e.prependAvatar &&
                                f(
                                  rn,
                                  { key: 'prepend-avatar', image: e.prependAvatar, start: !0 },
                                  null,
                                ),
                            ]),
                      ]),
                    f('div', { class: 'v-chip__content', 'data-no-activator': '' }, [
                      ((G = a.default) == null
                        ? void 0
                        : G.call(a, {
                            isSelected: y == null ? void 0 : y.isSelected.value,
                            selectedClass: y == null ? void 0 : y.selectedClass.value,
                            select: y == null ? void 0 : y.select,
                            toggle: y == null ? void 0 : y.toggle,
                            value: y == null ? void 0 : y.value.value,
                            disabled: e.disabled,
                          })) ?? e.text,
                    ]),
                    x &&
                      f('div', { key: 'append', class: 'v-chip__append' }, [
                        a.append
                          ? f(
                              Me,
                              {
                                key: 'append-defaults',
                                disabled: !V,
                                defaults: {
                                  VAvatar: { end: !0, image: e.appendAvatar },
                                  VIcon: { end: !0, icon: e.appendIcon },
                                },
                              },
                              a.append,
                            )
                          : f(ke, null, [
                              e.appendIcon &&
                                f(je, { key: 'append-icon', end: !0, icon: e.appendIcon }, null),
                              e.appendAvatar &&
                                f(
                                  rn,
                                  { key: 'append-avatar', end: !0, image: e.appendAvatar },
                                  null,
                                ),
                            ]),
                      ]),
                    O &&
                      f(
                        'button',
                        ve(
                          {
                            key: 'close',
                            class: 'v-chip__close',
                            type: 'button',
                            'data-testid': 'close-chip',
                          },
                          k.value,
                        ),
                        [
                          a.close
                            ? f(
                                Me,
                                {
                                  key: 'close-defaults',
                                  defaults: { VIcon: { icon: e.closeIcon, size: 'x-small' } },
                                },
                                a.close,
                              )
                            : f(
                                je,
                                { key: 'close-icon', icon: e.closeIcon, size: 'x-small' },
                                null,
                              ),
                        ],
                      ),
                  ]
                },
              },
            ),
            [[qt('ripple'), C.value && e.ripple, null]],
          )
        )
      }
    },
  }),
  hr = Symbol.for('vuetify:list')
function fm() {
  const e = Ie(hr, { hasPrepend: ue(!1), updateHasPrepend: () => null }),
    t = {
      hasPrepend: ue(!1),
      updateHasPrepend: (n) => {
        n && (t.hasPrepend.value = n)
      },
    }
  return Ze(hr, t), e
}
function vm() {
  return Ie(hr, null)
}
const Ps = (e) => {
    const t = {
      activate: (n) => {
        let { id: l, value: a, activated: o } = n
        return (l = we(l)), (e && !a && o.size === 1 && o.has(l)) || (a ? o.add(l) : o.delete(l)), o
      },
      in: (n, l, a) => {
        let o = new Set()
        if (n != null)
          for (const i of gt(n))
            o = t.activate({ id: i, value: !0, activated: new Set(o), children: l, parents: a })
        return o
      },
      out: (n) => Array.from(n),
    }
    return t
  },
  mm = (e) => {
    const t = Ps(e)
    return {
      activate: (l) => {
        let { activated: a, id: o, ...i } = l
        o = we(o)
        const r = a.has(o) ? new Set([o]) : new Set()
        return t.activate({ ...i, id: o, activated: r })
      },
      in: (l, a, o) => {
        let i = new Set()
        if (l != null) {
          const r = gt(l)
          r.length && (i = t.in(r.slice(0, 1), a, o))
        }
        return i
      },
      out: (l, a, o) => t.out(l, a, o),
    }
  },
  R_ = (e) => {
    const t = Ps(e)
    return {
      activate: (l) => {
        let { id: a, activated: o, children: i, ...r } = l
        return (a = we(a)), i.has(a) ? o : t.activate({ id: a, activated: o, children: i, ...r })
      },
      in: t.in,
      out: t.out,
    }
  },
  F_ = (e) => {
    const t = mm(e)
    return {
      activate: (l) => {
        let { id: a, activated: o, children: i, ...r } = l
        return (a = we(a)), i.has(a) ? o : t.activate({ id: a, activated: o, children: i, ...r })
      },
      in: t.in,
      out: t.out,
    }
  },
  M_ = {
    open: (e) => {
      let { id: t, value: n, opened: l, parents: a } = e
      if (n) {
        const o = new Set()
        o.add(t)
        let i = a.get(t)
        for (; i != null; ) o.add(i), (i = a.get(i))
        return o
      } else return l.delete(t), l
    },
    select: () => null,
  },
  hm = {
    open: (e) => {
      let { id: t, value: n, opened: l, parents: a } = e
      if (n) {
        let o = a.get(t)
        for (l.add(t); o != null && o !== t; ) l.add(o), (o = a.get(o))
        return l
      } else l.delete(t)
      return l
    },
    select: () => null,
  },
  D_ = {
    open: hm.open,
    select: (e) => {
      let { id: t, value: n, opened: l, parents: a } = e
      if (!n) return l
      const o = []
      let i = a.get(t)
      for (; i != null; ) o.push(i), (i = a.get(i))
      return new Set(o)
    },
  },
  As = (e) => {
    const t = {
      select: (n) => {
        let { id: l, value: a, selected: o } = n
        if (((l = we(l)), e && !a)) {
          const i = Array.from(o.entries()).reduce((r, s) => {
            let [c, u] = s
            return u === 'on' && r.push(c), r
          }, [])
          if (i.length === 1 && i[0] === l) return o
        }
        return o.set(l, a ? 'on' : 'off'), o
      },
      in: (n, l, a) => {
        let o = new Map()
        for (const i of n || [])
          o = t.select({ id: i, value: !0, selected: new Map(o), children: l, parents: a })
        return o
      },
      out: (n) => {
        const l = []
        for (const [a, o] of n.entries()) o === 'on' && l.push(a)
        return l
      },
    }
    return t
  },
  gm = (e) => {
    const t = As(e)
    return {
      select: (l) => {
        let { selected: a, id: o, ...i } = l
        o = we(o)
        const r = a.has(o) ? new Map([[o, a.get(o)]]) : new Map()
        return t.select({ ...i, id: o, selected: r })
      },
      in: (l, a, o) => {
        let i = new Map()
        return l != null && l.length && (i = t.in(l.slice(0, 1), a, o)), i
      },
      out: (l, a, o) => t.out(l, a, o),
    }
  },
  $_ = (e) => {
    const t = As(e)
    return {
      select: (l) => {
        let { id: a, selected: o, children: i, ...r } = l
        return (a = we(a)), i.has(a) ? o : t.select({ id: a, selected: o, children: i, ...r })
      },
      in: t.in,
      out: t.out,
    }
  },
  N_ = (e) => {
    const t = gm(e)
    return {
      select: (l) => {
        let { id: a, selected: o, children: i, ...r } = l
        return (a = we(a)), i.has(a) ? o : t.select({ id: a, selected: o, children: i, ...r })
      },
      in: t.in,
      out: t.out,
    }
  },
  H_ = (e) => {
    const t = {
      select: (n) => {
        let { id: l, value: a, selected: o, children: i, parents: r } = n
        l = we(l)
        const s = new Map(o),
          c = [l]
        for (; c.length; ) {
          const d = c.shift()
          o.set(we(d), a ? 'on' : 'off'), i.has(d) && c.push(...i.get(d))
        }
        let u = we(r.get(l))
        for (; u; ) {
          const d = i.get(u),
            v = d.every((h) => o.get(we(h)) === 'on'),
            m = d.every((h) => !o.has(we(h)) || o.get(we(h)) === 'off')
          o.set(u, v ? 'on' : m ? 'off' : 'indeterminate'), (u = we(r.get(u)))
        }
        return e &&
          !a &&
          Array.from(o.entries()).reduce((v, m) => {
            let [h, g] = m
            return g === 'on' && v.push(h), v
          }, []).length === 0
          ? s
          : o
      },
      in: (n, l, a) => {
        let o = new Map()
        for (const i of n || [])
          o = t.select({ id: i, value: !0, selected: new Map(o), children: l, parents: a })
        return o
      },
      out: (n, l) => {
        const a = []
        for (const [o, i] of n.entries()) i === 'on' && !l.has(o) && a.push(o)
        return a
      },
    }
    return t
  },
  Pa = Symbol.for('vuetify:nested'),
  ym = {
    id: ue(),
    root: {
      register: () => null,
      unregister: () => null,
      parents: H(new Map()),
      children: H(new Map()),
      open: () => null,
      openOnSelect: () => null,
      activate: () => null,
      select: () => null,
      activatable: H(!1),
      selectable: H(!1),
      opened: H(new Set()),
      activated: H(new Set()),
      selected: H(new Map()),
      selectedValues: H([]),
      getPath: () => [],
    },
  },
  j_ = $(
    {
      activatable: Boolean,
      selectable: Boolean,
      activeStrategy: [String, Function, Object],
      selectStrategy: [String, Function, Object],
      openStrategy: [String, Object],
      opened: null,
      activated: null,
      selected: null,
      mandatory: Boolean,
    },
    'nested',
  ),
  z_ = (e) => {
    let t = !1
    const n = H(new Map()),
      l = H(new Map()),
      a = Ae(
        e,
        'opened',
        e.opened,
        (h) => new Set(h),
        (h) => [...h.values()],
      ),
      o = b(() => {
        if (typeof e.activeStrategy == 'object') return e.activeStrategy
        if (typeof e.activeStrategy == 'function') return e.activeStrategy(e.mandatory)
        switch (e.activeStrategy) {
          case 'leaf':
            return R_(e.mandatory)
          case 'single-leaf':
            return F_(e.mandatory)
          case 'independent':
            return Ps(e.mandatory)
          case 'single-independent':
          default:
            return mm(e.mandatory)
        }
      }),
      i = b(() => {
        if (typeof e.selectStrategy == 'object') return e.selectStrategy
        if (typeof e.selectStrategy == 'function') return e.selectStrategy(e.mandatory)
        switch (e.selectStrategy) {
          case 'single-leaf':
            return N_(e.mandatory)
          case 'leaf':
            return $_(e.mandatory)
          case 'independent':
            return As(e.mandatory)
          case 'single-independent':
            return gm(e.mandatory)
          case 'classic':
          default:
            return H_(e.mandatory)
        }
      }),
      r = b(() => {
        if (typeof e.openStrategy == 'object') return e.openStrategy
        switch (e.openStrategy) {
          case 'list':
            return D_
          case 'single':
            return M_
          case 'multiple':
          default:
            return hm
        }
      }),
      s = Ae(
        e,
        'activated',
        e.activated,
        (h) => o.value.in(h, n.value, l.value),
        (h) => o.value.out(h, n.value, l.value),
      ),
      c = Ae(
        e,
        'selected',
        e.selected,
        (h) => i.value.in(h, n.value, l.value),
        (h) => i.value.out(h, n.value, l.value),
      )
    ut(() => {
      t = !0
    })
    function u(h) {
      const g = []
      let y = h
      for (; y != null; ) g.unshift(y), (y = l.value.get(y))
      return g
    }
    const d = et('nested'),
      v = new Set(),
      m = {
        id: ue(),
        root: {
          opened: a,
          activatable: ae(e, 'activatable'),
          selectable: ae(e, 'selectable'),
          activated: s,
          selected: c,
          selectedValues: b(() => {
            const h = []
            for (const [g, y] of c.value.entries()) y === 'on' && h.push(g)
            return h
          }),
          register: (h, g, y) => {
            if (v.has(h)) {
              u(h).map(String).join(' -> '), u(g).concat(h).map(String).join(' -> ')
              return
            } else v.add(h)
            g && h !== g && l.value.set(h, g),
              y && n.value.set(h, []),
              g != null && n.value.set(g, [...(n.value.get(g) || []), h])
          },
          unregister: (h) => {
            if (t) return
            v.delete(h), n.value.delete(h)
            const g = l.value.get(h)
            if (g) {
              const y = n.value.get(g) ?? []
              n.value.set(
                g,
                y.filter((p) => p !== h),
              )
            }
            l.value.delete(h)
          },
          open: (h, g, y) => {
            d.emit('click:open', { id: h, value: g, path: u(h), event: y })
            const p = r.value.open({
              id: h,
              value: g,
              opened: new Set(a.value),
              children: n.value,
              parents: l.value,
              event: y,
            })
            p && (a.value = p)
          },
          openOnSelect: (h, g, y) => {
            const p = r.value.select({
              id: h,
              value: g,
              selected: new Map(c.value),
              opened: new Set(a.value),
              children: n.value,
              parents: l.value,
              event: y,
            })
            p && (a.value = p)
          },
          select: (h, g, y) => {
            d.emit('click:select', { id: h, value: g, path: u(h), event: y })
            const p = i.value.select({
              id: h,
              value: g,
              selected: new Map(c.value),
              children: n.value,
              parents: l.value,
              event: y,
            })
            p && (c.value = p), m.root.openOnSelect(h, g, y)
          },
          activate: (h, g, y) => {
            if (!e.activatable) return m.root.select(h, !0, y)
            d.emit('click:activate', { id: h, value: g, path: u(h), event: y })
            const p = o.value.activate({
              id: h,
              value: g,
              activated: new Set(s.value),
              children: n.value,
              parents: l.value,
              event: y,
            })
            p && (s.value = p)
          },
          children: n,
          parents: l,
          getPath: u,
        },
      }
    return Ze(Pa, m), m.root
  },
  bm = (e, t) => {
    const n = Ie(Pa, ym),
      l = Symbol($t()),
      a = b(() => (e.value !== void 0 ? e.value : l)),
      o = {
        ...n,
        id: a,
        open: (i, r) => n.root.open(a.value, i, r),
        openOnSelect: (i, r) => n.root.openOnSelect(a.value, i, r),
        isOpen: b(() => n.root.opened.value.has(a.value)),
        parent: b(() => n.root.parents.value.get(a.value)),
        activate: (i, r) => n.root.activate(a.value, i, r),
        isActivated: b(() => n.root.activated.value.has(we(a.value))),
        select: (i, r) => n.root.select(a.value, i, r),
        isSelected: b(() => n.root.selected.value.get(we(a.value)) === 'on'),
        isIndeterminate: b(() => n.root.selected.value.get(a.value) === 'indeterminate'),
        isLeaf: b(() => !n.root.children.value.get(a.value)),
        isGroupActivator: n.isGroupActivator,
      }
    return (
      $l(() => {
        !n.isGroupActivator && n.root.register(a.value, n.id.value, t)
      }),
      ut(() => {
        !n.isGroupActivator && n.root.unregister(a.value)
      }),
      t && Ze(Pa, o),
      o
    )
  },
  W_ = () => {
    const e = Ie(Pa, ym)
    Ze(Pa, { ...e, isGroupActivator: !0 })
  },
  U_ = un({
    name: 'VListGroupActivator',
    setup(e, t) {
      let { slots: n } = t
      return (
        W_(),
        () => {
          var l
          return (l = n.default) == null ? void 0 : l.call(n)
        }
      )
    },
  }),
  K_ = $(
    {
      activeColor: String,
      baseColor: String,
      color: String,
      collapseIcon: { type: Ee, default: '$collapse' },
      expandIcon: { type: Ee, default: '$expand' },
      prependIcon: Ee,
      appendIcon: Ee,
      fluid: Boolean,
      subgroup: Boolean,
      title: String,
      value: null,
      ...ge(),
      ...Te(),
    },
    'VListGroup',
  ),
  Wc = J()({
    name: 'VListGroup',
    props: K_(),
    setup(e, t) {
      let { slots: n } = t
      const { isOpen: l, open: a, id: o } = bm(ae(e, 'value'), !0),
        i = b(() => `v-list-group--id-${String(o.value)}`),
        r = vm(),
        { isBooted: s } = ml()
      function c(m) {
        m.stopPropagation(), a(!l.value, m)
      }
      const u = b(() => ({ onClick: c, class: 'v-list-group__header', id: i.value })),
        d = b(() => (l.value ? e.collapseIcon : e.expandIcon)),
        v = b(() => ({
          VListItem: {
            active: l.value,
            activeColor: e.activeColor,
            baseColor: e.baseColor,
            color: e.color,
            prependIcon: e.prependIcon || (e.subgroup && d.value),
            appendIcon: e.appendIcon || (!e.subgroup && d.value),
            title: e.title,
            value: e.value,
          },
        }))
      return (
        oe(() =>
          f(
            e.tag,
            {
              class: [
                'v-list-group',
                {
                  'v-list-group--prepend': r == null ? void 0 : r.hasPrepend.value,
                  'v-list-group--fluid': e.fluid,
                  'v-list-group--subgroup': e.subgroup,
                  'v-list-group--open': l.value,
                },
                e.class,
              ],
              style: e.style,
            },
            {
              default: () => [
                n.activator &&
                  f(
                    Me,
                    { defaults: v.value },
                    {
                      default: () => [
                        f(U_, null, {
                          default: () => [n.activator({ props: u.value, isOpen: l.value })],
                        }),
                      ],
                    },
                  ),
                f(
                  Kt,
                  { transition: { component: gs }, disabled: !s.value },
                  {
                    default: () => {
                      var m
                      return [
                        Ye(
                          f(
                            'div',
                            {
                              class: 'v-list-group__items',
                              role: 'group',
                              'aria-labelledby': i.value,
                            },
                            [(m = n.default) == null ? void 0 : m.call(n)],
                          ),
                          [[Xt, l.value]],
                        ),
                      ]
                    },
                  },
                ),
              ],
            },
          ),
        ),
        { isOpen: l }
      )
    },
  }),
  G_ = $({ opacity: [Number, String], ...ge(), ...Te() }, 'VListItemSubtitle'),
  Y_ = J()({
    name: 'VListItemSubtitle',
    props: G_(),
    setup(e, t) {
      let { slots: n } = t
      return (
        oe(() =>
          f(
            e.tag,
            {
              class: ['v-list-item-subtitle', e.class],
              style: [{ '--v-list-item-subtitle-opacity': e.opacity }, e.style],
            },
            n,
          ),
        ),
        {}
      )
    },
  }),
  q_ = Ko('v-list-item-title'),
  X_ = $(
    {
      active: { type: Boolean, default: void 0 },
      activeClass: String,
      activeColor: String,
      appendAvatar: String,
      appendIcon: Ee,
      baseColor: String,
      disabled: Boolean,
      lines: [Boolean, String],
      link: { type: Boolean, default: void 0 },
      nav: Boolean,
      prependAvatar: String,
      prependIcon: Ee,
      ripple: { type: [Boolean, Object], default: !0 },
      slim: Boolean,
      subtitle: [String, Number],
      title: [String, Number],
      value: null,
      onClick: At(),
      onClickOnce: At(),
      ...Zt(),
      ...ge(),
      ...Ht(),
      ...Tt(),
      ...pt(),
      ...ot(),
      ...Jo(),
      ...Te(),
      ...$e(),
      ...Yn({ variant: 'text' }),
    },
    'VListItem',
  ),
  dl = J()({
    name: 'VListItem',
    directives: { Ripple: qn },
    props: X_(),
    emits: { click: (e) => !0 },
    setup(e, t) {
      let { attrs: n, slots: l, emit: a } = t
      const o = Zo(e, n),
        i = b(() => (e.value === void 0 ? o.href.value : e.value)),
        {
          activate: r,
          isActivated: s,
          select: c,
          isOpen: u,
          isSelected: d,
          isIndeterminate: v,
          isGroupActivator: m,
          root: h,
          parent: g,
          openOnSelect: y,
          id: p,
        } = bm(i, !1),
        _ = vm(),
        C = b(() => {
          var ie
          return (
            e.active !== !1 &&
            (e.active ||
              ((ie = o.isActive) == null ? void 0 : ie.value) ||
              (h.activatable.value ? s.value : d.value))
          )
        }),
        k = b(() => e.link !== !1 && o.isLink.value),
        I = b(() => !!_ && (h.selectable.value || h.activatable.value || e.value != null)),
        P = b(() => !e.disabled && e.link !== !1 && (e.link || o.isClickable.value || I.value)),
        A = b(() => e.rounded || e.nav),
        V = b(() => e.color ?? e.activeColor),
        x = b(() => ({
          color: C.value ? (V.value ?? e.baseColor) : e.baseColor,
          variant: e.variant,
        }))
      me(
        () => {
          var ie
          return (ie = o.isActive) == null ? void 0 : ie.value
        },
        (ie) => {
          ie && O()
        },
      ),
        $l(() => {
          var ie
          ;(ie = o.isActive) != null && ie.value && O()
        })
      function O() {
        g.value != null && h.open(g.value, !0), y(!0)
      }
      const { themeClasses: T } = qe(e),
        { borderClasses: E } = Jt(e),
        { colorClasses: R, colorStyles: N, variantClasses: q } = Ha(x),
        { densityClasses: G } = en(e),
        { dimensionStyles: ee } = Ot(e),
        { elevationClasses: X } = Et(e),
        { roundedClasses: U } = it(A),
        F = b(() => (e.lines ? `v-list-item--${e.lines}-line` : void 0)),
        M = b(() => ({
          isActive: C.value,
          select: c,
          isOpen: u.value,
          isSelected: d.value,
          isIndeterminate: v.value,
        }))
      function ne(ie) {
        var pe
        a('click', ie),
          P.value &&
            ((pe = o.navigate) == null || pe.call(o, ie),
            !m &&
              (h.activatable.value
                ? r(!s.value, ie)
                : (h.selectable.value || e.value != null) && c(!d.value, ie)))
      }
      function be(ie) {
        ;(ie.key === 'Enter' || ie.key === ' ') &&
          (ie.preventDefault(), ie.target.dispatchEvent(new MouseEvent('click', ie)))
      }
      return (
        oe(() => {
          const ie = k.value ? 'a' : e.tag,
            pe = l.title || e.title != null,
            j = l.subtitle || e.subtitle != null,
            L = !!(e.appendAvatar || e.appendIcon),
            Y = !!(L || l.append),
            Z = !!(e.prependAvatar || e.prependIcon),
            le = !!(Z || l.prepend)
          return (
            _ == null || _.updateHasPrepend(le),
            e.activeColor && mb('active-color', ['color', 'base-color']),
            Ye(
              f(
                ie,
                ve(
                  {
                    class: [
                      'v-list-item',
                      {
                        'v-list-item--active': C.value,
                        'v-list-item--disabled': e.disabled,
                        'v-list-item--link': P.value,
                        'v-list-item--nav': e.nav,
                        'v-list-item--prepend': !le && (_ == null ? void 0 : _.hasPrepend.value),
                        'v-list-item--slim': e.slim,
                        [`${e.activeClass}`]: e.activeClass && C.value,
                      },
                      T.value,
                      E.value,
                      R.value,
                      G.value,
                      X.value,
                      F.value,
                      U.value,
                      q.value,
                      e.class,
                    ],
                    style: [N.value, ee.value, e.style],
                    tabindex: P.value ? (_ ? -2 : 0) : void 0,
                    'aria-selected': I.value
                      ? h.activatable.value
                        ? s.value
                        : h.selectable.value
                          ? d.value
                          : C.value
                      : void 0,
                    onClick: ne,
                    onKeydown: P.value && !k.value && be,
                  },
                  o.linkProps,
                ),
                {
                  default: () => {
                    var K
                    return [
                      jl(P.value || C.value, 'v-list-item'),
                      le &&
                        f('div', { key: 'prepend', class: 'v-list-item__prepend' }, [
                          l.prepend
                            ? f(
                                Me,
                                {
                                  key: 'prepend-defaults',
                                  disabled: !Z,
                                  defaults: {
                                    VAvatar: { density: e.density, image: e.prependAvatar },
                                    VIcon: { density: e.density, icon: e.prependIcon },
                                    VListItemAction: { start: !0 },
                                  },
                                },
                                {
                                  default: () => {
                                    var de
                                    return [(de = l.prepend) == null ? void 0 : de.call(l, M.value)]
                                  },
                                },
                              )
                            : f(ke, null, [
                                e.prependAvatar &&
                                  f(
                                    rn,
                                    {
                                      key: 'prepend-avatar',
                                      density: e.density,
                                      image: e.prependAvatar,
                                    },
                                    null,
                                  ),
                                e.prependIcon &&
                                  f(
                                    je,
                                    {
                                      key: 'prepend-icon',
                                      density: e.density,
                                      icon: e.prependIcon,
                                    },
                                    null,
                                  ),
                              ]),
                          f('div', { class: 'v-list-item__spacer' }, null),
                        ]),
                      f('div', { class: 'v-list-item__content', 'data-no-activator': '' }, [
                        pe &&
                          f(
                            q_,
                            { key: 'title' },
                            {
                              default: () => {
                                var de
                                return [
                                  ((de = l.title) == null
                                    ? void 0
                                    : de.call(l, { title: e.title })) ?? e.title,
                                ]
                              },
                            },
                          ),
                        j &&
                          f(
                            Y_,
                            { key: 'subtitle' },
                            {
                              default: () => {
                                var de
                                return [
                                  ((de = l.subtitle) == null
                                    ? void 0
                                    : de.call(l, { subtitle: e.subtitle })) ?? e.subtitle,
                                ]
                              },
                            },
                          ),
                        (K = l.default) == null ? void 0 : K.call(l, M.value),
                      ]),
                      Y &&
                        f('div', { key: 'append', class: 'v-list-item__append' }, [
                          l.append
                            ? f(
                                Me,
                                {
                                  key: 'append-defaults',
                                  disabled: !L,
                                  defaults: {
                                    VAvatar: { density: e.density, image: e.appendAvatar },
                                    VIcon: { density: e.density, icon: e.appendIcon },
                                    VListItemAction: { end: !0 },
                                  },
                                },
                                {
                                  default: () => {
                                    var de
                                    return [(de = l.append) == null ? void 0 : de.call(l, M.value)]
                                  },
                                },
                              )
                            : f(ke, null, [
                                e.appendIcon &&
                                  f(
                                    je,
                                    { key: 'append-icon', density: e.density, icon: e.appendIcon },
                                    null,
                                  ),
                                e.appendAvatar &&
                                  f(
                                    rn,
                                    {
                                      key: 'append-avatar',
                                      density: e.density,
                                      image: e.appendAvatar,
                                    },
                                    null,
                                  ),
                              ]),
                          f('div', { class: 'v-list-item__spacer' }, null),
                        ]),
                    ]
                  },
                },
              ),
              [[qt('ripple'), P.value && e.ripple]],
            )
          )
        }),
        {
          activate: r,
          isActivated: s,
          isGroupActivator: m,
          isSelected: d,
          list: _,
          select: c,
          root: h,
          id: p,
        }
      )
    },
  }),
  Q_ = $(
    { color: String, inset: Boolean, sticky: Boolean, title: String, ...ge(), ...Te() },
    'VListSubheader',
  ),
  Z_ = J()({
    name: 'VListSubheader',
    props: Q_(),
    setup(e, t) {
      let { slots: n } = t
      const { textColorClasses: l, textColorStyles: a } = Yt(ae(e, 'color'))
      return (
        oe(() => {
          const o = !!(n.default || e.title)
          return f(
            e.tag,
            {
              class: [
                'v-list-subheader',
                { 'v-list-subheader--inset': e.inset, 'v-list-subheader--sticky': e.sticky },
                l.value,
                e.class,
              ],
              style: [{ textColorStyles: a }, e.style],
            },
            {
              default: () => {
                var i
                return [
                  o &&
                    f('div', { class: 'v-list-subheader__text' }, [
                      ((i = n.default) == null ? void 0 : i.call(n)) ?? e.title,
                    ]),
                ]
              },
            },
          )
        }),
        {}
      )
    },
  }),
  J_ = $(
    {
      color: String,
      inset: Boolean,
      length: [Number, String],
      opacity: [Number, String],
      thickness: [Number, String],
      vertical: Boolean,
      ...ge(),
      ...$e(),
    },
    'VDivider',
  ),
  Is = J()({
    name: 'VDivider',
    props: J_(),
    setup(e, t) {
      let { attrs: n, slots: l } = t
      const { themeClasses: a } = qe(e),
        { textColorClasses: o, textColorStyles: i } = Yt(ae(e, 'color')),
        r = b(() => {
          const s = {}
          return (
            e.length && (s[e.vertical ? 'height' : 'width'] = he(e.length)),
            e.thickness &&
              (s[e.vertical ? 'borderRightWidth' : 'borderTopWidth'] = he(e.thickness)),
            s
          )
        })
      return (
        oe(() => {
          const s = f(
            'hr',
            {
              class: [
                { 'v-divider': !0, 'v-divider--inset': e.inset, 'v-divider--vertical': e.vertical },
                a.value,
                o.value,
                e.class,
              ],
              style: [r.value, i.value, { '--v-border-opacity': e.opacity }, e.style],
              'aria-orientation':
                !n.role || n.role === 'separator'
                  ? e.vertical
                    ? 'vertical'
                    : 'horizontal'
                  : void 0,
              role: `${n.role || 'separator'}`,
            },
            null,
          )
          return l.default
            ? f(
                'div',
                {
                  class: [
                    'v-divider__wrapper',
                    {
                      'v-divider__wrapper--vertical': e.vertical,
                      'v-divider__wrapper--inset': e.inset,
                    },
                  ],
                },
                [s, f('div', { class: 'v-divider__content' }, [l.default()]), s],
              )
            : s
        }),
        {}
      )
    },
  }),
  ew = $({ items: Array, returnObject: Boolean }, 'VListChildren'),
  pm = J()({
    name: 'VListChildren',
    props: ew(),
    setup(e, t) {
      let { slots: n } = t
      return (
        fm(),
        () => {
          var l, a
          return (
            ((l = n.default) == null ? void 0 : l.call(n)) ??
            ((a = e.items) == null
              ? void 0
              : a.map((o) => {
                  var v, m
                  let { children: i, props: r, type: s, raw: c } = o
                  if (s === 'divider')
                    return (
                      ((v = n.divider) == null ? void 0 : v.call(n, { props: r })) ?? f(Is, r, null)
                    )
                  if (s === 'subheader')
                    return (
                      ((m = n.subheader) == null ? void 0 : m.call(n, { props: r })) ??
                      f(Z_, r, null)
                    )
                  const u = {
                      subtitle: n.subtitle
                        ? (h) => {
                            var g
                            return (g = n.subtitle) == null ? void 0 : g.call(n, { ...h, item: c })
                          }
                        : void 0,
                      prepend: n.prepend
                        ? (h) => {
                            var g
                            return (g = n.prepend) == null ? void 0 : g.call(n, { ...h, item: c })
                          }
                        : void 0,
                      append: n.append
                        ? (h) => {
                            var g
                            return (g = n.append) == null ? void 0 : g.call(n, { ...h, item: c })
                          }
                        : void 0,
                      title: n.title
                        ? (h) => {
                            var g
                            return (g = n.title) == null ? void 0 : g.call(n, { ...h, item: c })
                          }
                        : void 0,
                    },
                    d = Wc.filterProps(r)
                  return i
                    ? f(Wc, ve({ value: r == null ? void 0 : r.value }, d), {
                        activator: (h) => {
                          let { props: g } = h
                          const y = { ...r, ...g, value: e.returnObject ? c : r.value }
                          return n.header ? n.header({ props: y }) : f(dl, y, u)
                        },
                        default: () => f(pm, { items: i, returnObject: e.returnObject }, n),
                      })
                    : n.item
                      ? n.item({ props: r })
                      : f(dl, ve(r, { value: e.returnObject ? c : r.value }), u)
                }))
          )
        }
      )
    },
  }),
  Sm = $(
    {
      items: { type: Array, default: () => [] },
      itemTitle: { type: [String, Array, Function], default: 'title' },
      itemValue: { type: [String, Array, Function], default: 'value' },
      itemChildren: { type: [Boolean, String, Array, Function], default: 'children' },
      itemProps: { type: [Boolean, String, Array, Function], default: 'props' },
      returnObject: Boolean,
      valueComparator: { type: Function, default: vl },
    },
    'list-items',
  )
function gr(e, t) {
  const n = Wt(t, e.itemTitle, t),
    l = Wt(t, e.itemValue, n),
    a = Wt(t, e.itemChildren),
    o =
      e.itemProps === !0
        ? typeof t == 'object' && t != null && !Array.isArray(t)
          ? 'children' in t
            ? Dt(t, ['children'])
            : t
          : void 0
        : Wt(t, e.itemProps),
    i = { title: n, value: l, ...o }
  return {
    title: String(i.title ?? ''),
    value: i.value,
    props: i,
    children: Array.isArray(a) ? _m(e, a) : void 0,
    raw: t,
  }
}
function _m(e, t) {
  const n = []
  for (const l of t) n.push(gr(e, l))
  return n
}
function wm(e) {
  const t = b(() => _m(e, e.items)),
    n = b(() => t.value.some((o) => o.value === null))
  function l(o) {
    return (
      n.value || (o = o.filter((i) => i !== null)),
      o.map((i) =>
        e.returnObject && typeof i == 'string'
          ? gr(e, i)
          : t.value.find((r) => e.valueComparator(i, r.value)) || gr(e, i),
      )
    )
  }
  function a(o) {
    return e.returnObject
      ? o.map((i) => {
          let { raw: r } = i
          return r
        })
      : o.map((i) => {
          let { value: r } = i
          return r
        })
  }
  return { items: t, transformIn: l, transformOut: a }
}
function tw(e) {
  return typeof e == 'string' || typeof e == 'number' || typeof e == 'boolean'
}
function nw(e, t) {
  const n = Wt(t, e.itemType, 'item'),
    l = tw(t) ? t : Wt(t, e.itemTitle),
    a = Wt(t, e.itemValue, void 0),
    o = Wt(t, e.itemChildren),
    i = e.itemProps === !0 ? Dt(t, ['children']) : Wt(t, e.itemProps),
    r = { title: l, value: a, ...i }
  return {
    type: n,
    title: r.title,
    value: r.value,
    props: r,
    children: n === 'item' && o ? Cm(e, o) : void 0,
    raw: t,
  }
}
function Cm(e, t) {
  const n = []
  for (const l of t) n.push(nw(e, l))
  return n
}
function lw(e) {
  return { items: b(() => Cm(e, e.items)) }
}
const aw = $(
    {
      baseColor: String,
      activeColor: String,
      activeClass: String,
      bgColor: String,
      disabled: Boolean,
      expandIcon: Ee,
      collapseIcon: Ee,
      lines: { type: [Boolean, String], default: 'one' },
      slim: Boolean,
      nav: Boolean,
      'onClick:open': At(),
      'onClick:select': At(),
      'onUpdate:opened': At(),
      ...j_({ selectStrategy: 'single-leaf', openStrategy: 'list' }),
      ...Zt(),
      ...ge(),
      ...Ht(),
      ...Tt(),
      ...pt(),
      itemType: { type: String, default: 'type' },
      ...Sm(),
      ...ot(),
      ...Te(),
      ...$e(),
      ...Yn({ variant: 'text' }),
    },
    'VList',
  ),
  Ts = J()({
    name: 'VList',
    props: aw(),
    emits: {
      'update:selected': (e) => !0,
      'update:activated': (e) => !0,
      'update:opened': (e) => !0,
      'click:open': (e) => !0,
      'click:activate': (e) => !0,
      'click:select': (e) => !0,
    },
    setup(e, t) {
      let { slots: n } = t
      const { items: l } = lw(e),
        { themeClasses: a } = qe(e),
        { backgroundColorClasses: o, backgroundColorStyles: i } = Je(ae(e, 'bgColor')),
        { borderClasses: r } = Jt(e),
        { densityClasses: s } = en(e),
        { dimensionStyles: c } = Ot(e),
        { elevationClasses: u } = Et(e),
        { roundedClasses: d } = it(e),
        { children: v, open: m, parents: h, select: g, getPath: y } = z_(e),
        p = b(() => (e.lines ? `v-list--${e.lines}-line` : void 0)),
        _ = ae(e, 'activeColor'),
        C = ae(e, 'baseColor'),
        k = ae(e, 'color')
      fm(),
        Qt({
          VListGroup: {
            activeColor: _,
            baseColor: C,
            color: k,
            expandIcon: ae(e, 'expandIcon'),
            collapseIcon: ae(e, 'collapseIcon'),
          },
          VListItem: {
            activeClass: ae(e, 'activeClass'),
            activeColor: _,
            baseColor: C,
            color: k,
            density: ae(e, 'density'),
            disabled: ae(e, 'disabled'),
            lines: ae(e, 'lines'),
            nav: ae(e, 'nav'),
            slim: ae(e, 'slim'),
            variant: ae(e, 'variant'),
          },
        })
      const I = ue(!1),
        P = H()
      function A(R) {
        I.value = !0
      }
      function V(R) {
        I.value = !1
      }
      function x(R) {
        var N
        !I.value &&
          !(R.relatedTarget && (N = P.value) != null && N.contains(R.relatedTarget)) &&
          E()
      }
      function O(R) {
        const N = R.target
        if (!(!P.value || ['INPUT', 'TEXTAREA'].includes(N.tagName))) {
          if (R.key === 'ArrowDown') E('next')
          else if (R.key === 'ArrowUp') E('prev')
          else if (R.key === 'Home') E('first')
          else if (R.key === 'End') E('last')
          else return
          R.preventDefault()
        }
      }
      function T(R) {
        I.value = !0
      }
      function E(R) {
        if (P.value) return da(P.value, R)
      }
      return (
        oe(() =>
          f(
            e.tag,
            {
              ref: P,
              class: [
                'v-list',
                { 'v-list--disabled': e.disabled, 'v-list--nav': e.nav, 'v-list--slim': e.slim },
                a.value,
                o.value,
                r.value,
                s.value,
                u.value,
                p.value,
                d.value,
                e.class,
              ],
              style: [i.value, c.value, e.style],
              tabindex: e.disabled || I.value ? -1 : 0,
              role: 'listbox',
              'aria-activedescendant': void 0,
              onFocusin: A,
              onFocusout: V,
              onFocus: x,
              onKeydown: O,
              onMousedown: T,
            },
            { default: () => [f(pm, { items: l.value, returnObject: e.returnObject }, n)] },
          ),
        ),
        { open: m, select: g, focus: E, children: v, parents: h, getPath: y }
      )
    },
  })
function Ii(e, t) {
  return { x: e.x + t.x, y: e.y + t.y }
}
function ow(e, t) {
  return { x: e.x - t.x, y: e.y - t.y }
}
function Uc(e, t) {
  if (e.side === 'top' || e.side === 'bottom') {
    const { side: n, align: l } = e,
      a = l === 'left' ? 0 : l === 'center' ? t.width / 2 : l === 'right' ? t.width : l,
      o = n === 'top' ? 0 : n === 'bottom' ? t.height : n
    return Ii({ x: a, y: o }, t)
  } else if (e.side === 'left' || e.side === 'right') {
    const { side: n, align: l } = e,
      a = n === 'left' ? 0 : n === 'right' ? t.width : n,
      o = l === 'top' ? 0 : l === 'center' ? t.height / 2 : l === 'bottom' ? t.height : l
    return Ii({ x: a, y: o }, t)
  }
  return Ii({ x: t.width / 2, y: t.height / 2 }, t)
}
const km = { static: sw, connected: cw },
  iw = $(
    {
      locationStrategy: {
        type: [String, Function],
        default: 'static',
        validator: (e) => typeof e == 'function' || e in km,
      },
      location: { type: String, default: 'bottom' },
      origin: { type: String, default: 'auto' },
      offset: [Number, String, Array],
    },
    'VOverlay-location-strategies',
  )
function rw(e, t) {
  const n = H({}),
    l = H()
  Be &&
    Pt(
      () => !!(t.isActive.value && e.locationStrategy),
      (o) => {
        var i, r
        me(() => e.locationStrategy, o),
          bt(() => {
            window.removeEventListener('resize', a), (l.value = void 0)
          }),
          window.addEventListener('resize', a, { passive: !0 }),
          typeof e.locationStrategy == 'function'
            ? (l.value = (i = e.locationStrategy(t, e, n)) == null ? void 0 : i.updateLocation)
            : (l.value = (r = km[e.locationStrategy](t, e, n)) == null ? void 0 : r.updateLocation)
      },
    )
  function a(o) {
    var i
    ;(i = l.value) == null || i.call(l, o)
  }
  return { contentStyles: n, updateLocation: l }
}
function sw() {}
function uw(e, t) {
  const n = ls(e)
  return (
    t ? (n.x += parseFloat(e.style.right || 0)) : (n.x -= parseFloat(e.style.left || 0)),
    (n.y -= parseFloat(e.style.top || 0)),
    n
  )
}
function cw(e, t, n) {
  ;(Array.isArray(e.target.value) || Lb(e.target.value)) &&
    Object.assign(n.value, { position: 'fixed', top: 0, [e.isRtl.value ? 'right' : 'left']: 0 })
  const { preferredAnchor: a, preferredOrigin: o } = es(() => {
      const h = er(t.location, e.isRtl.value),
        g = t.origin === 'overlap' ? h : t.origin === 'auto' ? wi(h) : er(t.origin, e.isRtl.value)
      return h.side === g.side && h.align === Ci(g).align
        ? { preferredAnchor: zu(h), preferredOrigin: zu(g) }
        : { preferredAnchor: h, preferredOrigin: g }
    }),
    [i, r, s, c] = ['minWidth', 'minHeight', 'maxWidth', 'maxHeight'].map((h) =>
      b(() => {
        const g = parseFloat(t[h])
        return isNaN(g) ? 1 / 0 : g
      }),
    ),
    u = b(() => {
      if (Array.isArray(t.offset)) return t.offset
      if (typeof t.offset == 'string') {
        const h = t.offset.split(' ').map(parseFloat)
        return h.length < 2 && h.push(0), h
      }
      return typeof t.offset == 'number' ? [t.offset, 0] : [0, 0]
    })
  let d = !1
  const v = new ResizeObserver(() => {
    d && m()
  })
  me(
    [e.target, e.contentEl],
    (h, g) => {
      let [y, p] = h,
        [_, C] = g
      _ && !Array.isArray(_) && v.unobserve(_),
        y && !Array.isArray(y) && v.observe(y),
        C && v.unobserve(C),
        p && v.observe(p)
    },
    { immediate: !0 },
  ),
    bt(() => {
      v.disconnect()
    })
  function m() {
    if (((d = !1), requestAnimationFrame(() => (d = !0)), !e.target.value || !e.contentEl.value))
      return
    const h = zf(e.target.value),
      g = uw(e.contentEl.value, e.isRtl.value),
      y = Co(e.contentEl.value),
      p = 12
    y.length ||
      (y.push(document.documentElement),
      (e.contentEl.value.style.top && e.contentEl.value.style.left) ||
        ((g.x -= parseFloat(
          document.documentElement.style.getPropertyValue('--v-body-scroll-x') || 0,
        )),
        (g.y -= parseFloat(
          document.documentElement.style.getPropertyValue('--v-body-scroll-y') || 0,
        ))))
    const _ = y.reduce(
      (T, E) => {
        const R = E.getBoundingClientRect(),
          N = new rl({
            x: E === document.documentElement ? 0 : R.x,
            y: E === document.documentElement ? 0 : R.y,
            width: E.clientWidth,
            height: E.clientHeight,
          })
        return T
          ? new rl({
              x: Math.max(T.left, N.left),
              y: Math.max(T.top, N.top),
              width: Math.min(T.right, N.right) - Math.max(T.left, N.left),
              height: Math.min(T.bottom, N.bottom) - Math.max(T.top, N.top),
            })
          : N
      },
      void 0,
    )
    ;(_.x += p), (_.y += p), (_.width -= p * 2), (_.height -= p * 2)
    let C = { anchor: a.value, origin: o.value }
    function k(T) {
      const E = new rl(g),
        R = Uc(T.anchor, h),
        N = Uc(T.origin, E)
      let { x: q, y: G } = ow(R, N)
      switch (T.anchor.side) {
        case 'top':
          G -= u.value[0]
          break
        case 'bottom':
          G += u.value[0]
          break
        case 'left':
          q -= u.value[0]
          break
        case 'right':
          q += u.value[0]
          break
      }
      switch (T.anchor.align) {
        case 'top':
          G -= u.value[1]
          break
        case 'bottom':
          G += u.value[1]
          break
        case 'left':
          q -= u.value[1]
          break
        case 'right':
          q += u.value[1]
          break
      }
      return (
        (E.x += q),
        (E.y += G),
        (E.width = Math.min(E.width, s.value)),
        (E.height = Math.min(E.height, c.value)),
        { overflows: Uu(E, _), x: q, y: G }
      )
    }
    let I = 0,
      P = 0
    const A = { x: 0, y: 0 },
      V = { x: !1, y: !1 }
    let x = -1
    for (; !(x++ > 10); ) {
      const { x: T, y: E, overflows: R } = k(C)
      ;(I += T), (P += E), (g.x += T), (g.y += E)
      {
        const N = Wu(C.anchor),
          q = R.x.before || R.x.after,
          G = R.y.before || R.y.after
        let ee = !1
        if (
          (['x', 'y'].forEach((X) => {
            if ((X === 'x' && q && !V.x) || (X === 'y' && G && !V.y)) {
              const U = { anchor: { ...C.anchor }, origin: { ...C.origin } },
                F = X === 'x' ? (N === 'y' ? Ci : wi) : N === 'y' ? wi : Ci
              ;(U.anchor = F(U.anchor)), (U.origin = F(U.origin))
              const { overflows: M } = k(U)
              ;((M[X].before <= R[X].before && M[X].after <= R[X].after) ||
                M[X].before + M[X].after < (R[X].before + R[X].after) / 2) &&
                ((C = U), (ee = V[X] = !0))
            }
          }),
          ee)
        )
          continue
      }
      R.x.before && ((I += R.x.before), (g.x += R.x.before)),
        R.x.after && ((I -= R.x.after), (g.x -= R.x.after)),
        R.y.before && ((P += R.y.before), (g.y += R.y.before)),
        R.y.after && ((P -= R.y.after), (g.y -= R.y.after))
      {
        const N = Uu(g, _)
        ;(A.x = _.width - N.x.before - N.x.after),
          (A.y = _.height - N.y.before - N.y.after),
          (I += N.x.before),
          (g.x += N.x.before),
          (P += N.y.before),
          (g.y += N.y.before)
      }
      break
    }
    const O = Wu(C.anchor)
    return (
      Object.assign(n.value, {
        '--v-overlay-anchor-origin': `${C.anchor.side} ${C.anchor.align}`,
        transformOrigin: `${C.origin.side} ${C.origin.align}`,
        top: he(Ti(P)),
        left: e.isRtl.value ? void 0 : he(Ti(I)),
        right: e.isRtl.value ? he(Ti(-I)) : void 0,
        minWidth: he(O === 'y' ? Math.min(i.value, h.width) : i.value),
        maxWidth: he(Kc(dt(A.x, i.value === 1 / 0 ? 0 : i.value, s.value))),
        maxHeight: he(Kc(dt(A.y, r.value === 1 / 0 ? 0 : r.value, c.value))),
      }),
      { available: A, contentBox: g }
    )
  }
  return (
    me(
      () => [a.value, o.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight],
      () => m(),
    ),
    Ke(() => {
      const h = m()
      if (!h) return
      const { available: g, contentBox: y } = h
      y.height > g.y &&
        requestAnimationFrame(() => {
          m(),
            requestAnimationFrame(() => {
              m()
            })
        })
    }),
    { updateLocation: m }
  )
}
function Ti(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio
}
function Kc(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio
}
let yr = !0
const Ao = []
function dw(e) {
  !yr || Ao.length ? (Ao.push(e), br()) : ((yr = !1), e(), br())
}
let Gc = -1
function br() {
  cancelAnimationFrame(Gc),
    (Gc = requestAnimationFrame(() => {
      const e = Ao.shift()
      e && e(), Ao.length ? br() : (yr = !0)
    }))
}
const ro = { none: null, close: mw, block: hw, reposition: gw },
  fw = $(
    {
      scrollStrategy: {
        type: [String, Function],
        default: 'block',
        validator: (e) => typeof e == 'function' || e in ro,
      },
    },
    'VOverlay-scroll-strategies',
  )
function vw(e, t) {
  if (!Be) return
  let n
  yt(async () => {
    n == null || n.stop(),
      t.isActive.value &&
        e.scrollStrategy &&
        ((n = Ta()),
        await new Promise((l) => setTimeout(l)),
        n.active &&
          n.run(() => {
            var l
            typeof e.scrollStrategy == 'function'
              ? e.scrollStrategy(t, e, n)
              : (l = ro[e.scrollStrategy]) == null || l.call(ro, t, e, n)
          }))
  }),
    bt(() => {
      n == null || n.stop()
    })
}
function mw(e) {
  function t(n) {
    e.isActive.value = !1
  }
  xm(e.targetEl.value ?? e.contentEl.value, t)
}
function hw(e, t) {
  var i
  const n = (i = e.root.value) == null ? void 0 : i.offsetParent,
    l = [
      ...new Set([
        ...Co(e.targetEl.value, t.contained ? n : void 0),
        ...Co(e.contentEl.value, t.contained ? n : void 0),
      ]),
    ].filter((r) => !r.classList.contains('v-overlay-scroll-blocked')),
    a = window.innerWidth - document.documentElement.offsetWidth,
    o = ((r) => rs(r) && r)(n || document.documentElement)
  o && e.root.value.classList.add('v-overlay--scroll-blocked'),
    l.forEach((r, s) => {
      r.style.setProperty('--v-body-scroll-x', he(-r.scrollLeft)),
        r.style.setProperty('--v-body-scroll-y', he(-r.scrollTop)),
        r !== document.documentElement && r.style.setProperty('--v-scrollbar-offset', he(a)),
        r.classList.add('v-overlay-scroll-blocked')
    }),
    bt(() => {
      l.forEach((r, s) => {
        const c = parseFloat(r.style.getPropertyValue('--v-body-scroll-x')),
          u = parseFloat(r.style.getPropertyValue('--v-body-scroll-y')),
          d = r.style.scrollBehavior
        ;(r.style.scrollBehavior = 'auto'),
          r.style.removeProperty('--v-body-scroll-x'),
          r.style.removeProperty('--v-body-scroll-y'),
          r.style.removeProperty('--v-scrollbar-offset'),
          r.classList.remove('v-overlay-scroll-blocked'),
          (r.scrollLeft = -c),
          (r.scrollTop = -u),
          (r.style.scrollBehavior = d)
      }),
        o && e.root.value.classList.remove('v-overlay--scroll-blocked')
    })
}
function gw(e, t, n) {
  let l = !1,
    a = -1,
    o = -1
  function i(r) {
    dw(() => {
      var u, d
      const s = performance.now()
      ;(d = (u = e.updateLocation).value) == null || d.call(u, r),
        (l = (performance.now() - s) / (1e3 / 60) > 2)
    })
  }
  ;(o = (typeof requestIdleCallback > 'u' ? (r) => r() : requestIdleCallback)(() => {
    n.run(() => {
      xm(e.targetEl.value ?? e.contentEl.value, (r) => {
        l
          ? (cancelAnimationFrame(a),
            (a = requestAnimationFrame(() => {
              a = requestAnimationFrame(() => {
                i(r)
              })
            })))
          : i(r)
      })
    })
  })),
    bt(() => {
      typeof cancelIdleCallback < 'u' && cancelIdleCallback(o), cancelAnimationFrame(a)
    })
}
function xm(e, t) {
  const n = [document, ...Co(e)]
  n.forEach((l) => {
    l.addEventListener('scroll', t, { passive: !0 })
  }),
    bt(() => {
      n.forEach((l) => {
        l.removeEventListener('scroll', t)
      })
    })
}
const pr = Symbol.for('vuetify:v-menu'),
  Os = $({ closeDelay: [Number, String], openDelay: [Number, String] }, 'delay')
function Bs(e, t) {
  let n = () => {}
  function l(i) {
    n == null || n()
    const r = Number(i ? e.openDelay : e.closeDelay)
    return new Promise((s) => {
      n = nb(r, () => {
        t == null || t(i), s(i)
      })
    })
  }
  function a() {
    return l(!0)
  }
  function o() {
    return l(!1)
  }
  return { clearDelay: n, runOpenDelay: a, runCloseDelay: o }
}
const yw = $(
  {
    target: [String, Object],
    activator: [String, Object],
    activatorProps: { type: Object, default: () => ({}) },
    openOnClick: { type: Boolean, default: void 0 },
    openOnHover: Boolean,
    openOnFocus: { type: Boolean, default: void 0 },
    closeOnContentClick: Boolean,
    ...Os(),
  },
  'VOverlay-activator',
)
function bw(e, t) {
  let { isActive: n, isTop: l, contentEl: a } = t
  const o = et('useActivator'),
    i = H()
  let r = !1,
    s = !1,
    c = !0
  const u = b(() => e.openOnFocus || (e.openOnFocus == null && e.openOnHover)),
    d = b(() => e.openOnClick || (e.openOnClick == null && !e.openOnHover && !u.value)),
    { runOpenDelay: v, runCloseDelay: m } = Bs(e, (V) => {
      V === ((e.openOnHover && r) || (u.value && s)) &&
        !(e.openOnHover && n.value && !l.value) &&
        (n.value !== V && (c = !0), (n.value = V))
    }),
    h = H(),
    g = {
      onClick: (V) => {
        V.stopPropagation(),
          (i.value = V.currentTarget || V.target),
          n.value || (h.value = [V.clientX, V.clientY]),
          (n.value = !n.value)
      },
      onMouseenter: (V) => {
        var x
        ;((x = V.sourceCapabilities) != null && x.firesTouchEvents) ||
          ((r = !0), (i.value = V.currentTarget || V.target), v())
      },
      onMouseleave: (V) => {
        ;(r = !1), m()
      },
      onFocus: (V) => {
        Ll(V.target, ':focus-visible') !== !1 &&
          ((s = !0), V.stopPropagation(), (i.value = V.currentTarget || V.target), v())
      },
      onBlur: (V) => {
        ;(s = !1), V.stopPropagation(), m()
      },
    },
    y = b(() => {
      const V = {}
      return (
        d.value && (V.onClick = g.onClick),
        e.openOnHover && ((V.onMouseenter = g.onMouseenter), (V.onMouseleave = g.onMouseleave)),
        u.value && ((V.onFocus = g.onFocus), (V.onBlur = g.onBlur)),
        V
      )
    }),
    p = b(() => {
      const V = {}
      if (
        (e.openOnHover &&
          ((V.onMouseenter = () => {
            ;(r = !0), v()
          }),
          (V.onMouseleave = () => {
            ;(r = !1), m()
          })),
        u.value &&
          ((V.onFocusin = () => {
            ;(s = !0), v()
          }),
          (V.onFocusout = () => {
            ;(s = !1), m()
          })),
        e.closeOnContentClick)
      ) {
        const x = Ie(pr, null)
        V.onClick = () => {
          ;(n.value = !1), x == null || x.closeParents()
        }
      }
      return V
    }),
    _ = b(() => {
      const V = {}
      return (
        e.openOnHover &&
          ((V.onMouseenter = () => {
            c && ((r = !0), (c = !1), v())
          }),
          (V.onMouseleave = () => {
            ;(r = !1), m()
          })),
        V
      )
    })
  me(l, (V) => {
    var x
    V &&
      ((e.openOnHover && !r && (!u.value || !s)) || (u.value && !s && (!e.openOnHover || !r))) &&
      !((x = a.value) != null && x.contains(document.activeElement)) &&
      (n.value = !1)
  }),
    me(
      n,
      (V) => {
        V ||
          setTimeout(() => {
            h.value = void 0
          })
      },
      { flush: 'post' },
    )
  const C = Zi()
  yt(() => {
    C.value &&
      Ke(() => {
        i.value = C.el
      })
  })
  const k = Zi(),
    I = b(() =>
      e.target === 'cursor' && h.value ? h.value : k.value ? k.el : Vm(e.target, o) || i.value,
    ),
    P = b(() => (Array.isArray(I.value) ? void 0 : I.value))
  let A
  return (
    me(
      () => !!e.activator,
      (V) => {
        V && Be
          ? ((A = Ta()),
            A.run(() => {
              pw(e, o, { activatorEl: i, activatorEvents: y })
            }))
          : A && A.stop()
      },
      { flush: 'post', immediate: !0 },
    ),
    bt(() => {
      A == null || A.stop()
    }),
    {
      activatorEl: i,
      activatorRef: C,
      target: I,
      targetEl: P,
      targetRef: k,
      activatorEvents: y,
      contentEvents: p,
      scrimEvents: _,
    }
  )
}
function pw(e, t, n) {
  let { activatorEl: l, activatorEvents: a } = n
  me(
    () => e.activator,
    (s, c) => {
      if (c && s !== c) {
        const u = r(c)
        u && i(u)
      }
      s && Ke(() => o())
    },
    { immediate: !0 },
  ),
    me(
      () => e.activatorProps,
      () => {
        o()
      },
    ),
    bt(() => {
      i()
    })
  function o() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(),
      c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps
    s && ob(s, ve(a.value, c))
  }
  function i() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(),
      c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps
    s && ib(s, ve(a.value, c))
  }
  function r() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator
    const c = Vm(s, t)
    return (l.value = (c == null ? void 0 : c.nodeType) === Node.ELEMENT_NODE ? c : void 0), l.value
  }
}
function Vm(e, t) {
  var l, a
  if (!e) return
  let n
  if (e === 'parent') {
    let o =
      (a = (l = t == null ? void 0 : t.proxy) == null ? void 0 : l.$el) == null
        ? void 0
        : a.parentNode
    for (; o != null && o.hasAttribute('data-no-activator'); ) o = o.parentNode
    n = o
  } else typeof e == 'string' ? (n = document.querySelector(e)) : '$el' in e ? (n = e.$el) : (n = e)
  return n
}
function Sw() {
  if (!Be) return ue(!1)
  const { ssr: e } = $a()
  if (e) {
    const t = ue(!1)
    return (
      Vt(() => {
        t.value = !0
      }),
      t
    )
  } else return ue(!0)
}
const Ls = $({ eager: Boolean }, 'lazy')
function Rs(e, t) {
  const n = ue(!1),
    l = b(() => n.value || e.eager || t.value)
  me(t, () => (n.value = !0))
  function a() {
    e.eager || (n.value = !1)
  }
  return { isBooted: n, hasContent: l, onAfterLeave: a }
}
function za() {
  const t = et('useScopeId').vnode.scopeId
  return { scopeId: t ? { [t]: '' } : void 0 }
}
const Yc = Symbol.for('vuetify:stack'),
  ta = rt([])
function _w(e, t, n) {
  const l = et('useStack'),
    a = !n,
    o = Ie(Yc, void 0),
    i = rt({ activeChildren: new Set() })
  Ze(Yc, i)
  const r = ue(+t.value)
  Pt(e, () => {
    var d
    const u = (d = ta.at(-1)) == null ? void 0 : d[1]
    ;(r.value = u ? u + 10 : +t.value),
      a && ta.push([l.uid, r.value]),
      o == null || o.activeChildren.add(l.uid),
      bt(() => {
        if (a) {
          const v = we(ta).findIndex((m) => m[0] === l.uid)
          ta.splice(v, 1)
        }
        o == null || o.activeChildren.delete(l.uid)
      })
  })
  const s = ue(!0)
  a &&
    yt(() => {
      var d
      const u = ((d = ta.at(-1)) == null ? void 0 : d[0]) === l.uid
      setTimeout(() => (s.value = u))
    })
  const c = b(() => !i.activeChildren.size)
  return { globalTop: Oa(s), localTop: c, stackStyles: b(() => ({ zIndex: r.value })) }
}
function ww(e) {
  return {
    teleportTarget: b(() => {
      const n = e()
      if (n === !0 || !Be) return
      const l = n === !1 ? document.body : typeof n == 'string' ? document.querySelector(n) : n
      if (l == null) return
      let a = [...l.children].find((o) => o.matches('.v-overlay-container'))
      return (
        a ||
          ((a = document.createElement('div')),
          (a.className = 'v-overlay-container'),
          l.appendChild(a)),
        a
      )
    }),
  }
}
function Cw() {
  return !0
}
function Em(e, t, n) {
  if (!e || Pm(e, n) === !1) return !1
  const l = nv(t)
  if (typeof ShadowRoot < 'u' && l instanceof ShadowRoot && l.host === e.target) return !1
  const a = ((typeof n.value == 'object' && n.value.include) || (() => []))()
  return a.push(t), !a.some((o) => (o == null ? void 0 : o.contains(e.target)))
}
function Pm(e, t) {
  return ((typeof t.value == 'object' && t.value.closeConditional) || Cw)(e)
}
function kw(e, t, n) {
  const l = typeof n.value == 'function' ? n.value : n.value.handler
  ;(e.shadowTarget = e.target),
    t._clickOutside.lastMousedownWasOutside &&
      Em(e, t, n) &&
      setTimeout(() => {
        Pm(e, n) && l && l(e)
      }, 0)
}
function qc(e, t) {
  const n = nv(e)
  t(document), typeof ShadowRoot < 'u' && n instanceof ShadowRoot && t(n)
}
const xw = {
  mounted(e, t) {
    const n = (a) => kw(a, e, t),
      l = (a) => {
        e._clickOutside.lastMousedownWasOutside = Em(a, e, t)
      }
    qc(e, (a) => {
      a.addEventListener('click', n, !0), a.addEventListener('mousedown', l, !0)
    }),
      e._clickOutside || (e._clickOutside = { lastMousedownWasOutside: !1 }),
      (e._clickOutside[t.instance.$.uid] = { onClick: n, onMousedown: l })
  },
  beforeUnmount(e, t) {
    e._clickOutside &&
      (qc(e, (n) => {
        var o
        if (!n || !((o = e._clickOutside) != null && o[t.instance.$.uid])) return
        const { onClick: l, onMousedown: a } = e._clickOutside[t.instance.$.uid]
        n.removeEventListener('click', l, !0), n.removeEventListener('mousedown', a, !0)
      }),
      delete e._clickOutside[t.instance.$.uid])
  },
}
function Vw(e) {
  const { modelValue: t, color: n, ...l } = e
  return f(
    Hn,
    { name: 'fade-transition', appear: !0 },
    {
      default: () => [
        e.modelValue &&
          f(
            'div',
            ve(
              {
                class: ['v-overlay__scrim', e.color.backgroundColorClasses.value],
                style: e.color.backgroundColorStyles.value,
              },
              l,
            ),
            null,
          ),
      ],
    },
  )
}
const ni = $(
    {
      absolute: Boolean,
      attach: [Boolean, String, Object],
      closeOnBack: { type: Boolean, default: !0 },
      contained: Boolean,
      contentClass: null,
      contentProps: null,
      disabled: Boolean,
      opacity: [Number, String],
      noClickAnimation: Boolean,
      modelValue: Boolean,
      persistent: Boolean,
      scrim: { type: [Boolean, String], default: !0 },
      zIndex: { type: [Number, String], default: 2e3 },
      ...yw(),
      ...ge(),
      ...Tt(),
      ...Ls(),
      ...iw(),
      ...fw(),
      ...$e(),
      ...Gn(),
    },
    'VOverlay',
  ),
  Dl = J()({
    name: 'VOverlay',
    directives: { ClickOutside: xw },
    inheritAttrs: !1,
    props: { _disableGlobalStack: Boolean, ...ni() },
    emits: {
      'click:outside': (e) => !0,
      'update:modelValue': (e) => !0,
      afterEnter: () => !0,
      afterLeave: () => !0,
    },
    setup(e, t) {
      let { slots: n, attrs: l, emit: a } = t
      const o = et('VOverlay'),
        i = H(),
        r = H(),
        s = H(),
        c = Ae(e, 'modelValue'),
        u = b({
          get: () => c.value,
          set: (j) => {
            ;(j && e.disabled) || (c.value = j)
          },
        }),
        { themeClasses: d } = qe(e),
        { rtlClasses: v, isRtl: m } = ct(),
        { hasContent: h, onAfterLeave: g } = Rs(e, u),
        y = Je(b(() => (typeof e.scrim == 'string' ? e.scrim : null))),
        {
          globalTop: p,
          localTop: _,
          stackStyles: C,
        } = _w(u, ae(e, 'zIndex'), e._disableGlobalStack),
        {
          activatorEl: k,
          activatorRef: I,
          target: P,
          targetEl: A,
          targetRef: V,
          activatorEvents: x,
          contentEvents: O,
          scrimEvents: T,
        } = bw(e, { isActive: u, isTop: _, contentEl: s }),
        { teleportTarget: E } = ww(() => {
          var Y, Z, le
          const j = e.attach || e.contained
          if (j) return j
          const L =
            ((Y = k == null ? void 0 : k.value) == null ? void 0 : Y.getRootNode()) ||
            ((le = (Z = o.proxy) == null ? void 0 : Z.$el) == null ? void 0 : le.getRootNode())
          return L instanceof ShadowRoot ? L : !1
        }),
        { dimensionStyles: R } = Ot(e),
        N = Sw(),
        { scopeId: q } = za()
      me(
        () => e.disabled,
        (j) => {
          j && (u.value = !1)
        },
      )
      const { contentStyles: G, updateLocation: ee } = rw(e, {
        isRtl: m,
        contentEl: s,
        target: P,
        isActive: u,
      })
      vw(e, { root: i, contentEl: s, targetEl: A, isActive: u, updateLocation: ee })
      function X(j) {
        a('click:outside', j), e.persistent ? be() : (u.value = !1)
      }
      function U(j) {
        return (
          u.value &&
          p.value &&
          (!e.scrim ||
            j.target === r.value ||
            (j instanceof MouseEvent && j.shadowTarget === r.value))
        )
      }
      Be &&
        me(
          u,
          (j) => {
            j ? window.addEventListener('keydown', F) : window.removeEventListener('keydown', F)
          },
          { immediate: !0 },
        ),
        ut(() => {
          Be && window.removeEventListener('keydown', F)
        })
      function F(j) {
        var L, Y
        j.key === 'Escape' &&
          p.value &&
          (e.persistent
            ? be()
            : ((u.value = !1),
              (L = s.value) != null &&
                L.contains(document.activeElement) &&
                ((Y = k.value) == null || Y.focus())))
      }
      const M = Gv()
      Pt(
        () => e.closeOnBack,
        () => {
          i_(M, (j) => {
            p.value && u.value ? (j(!1), e.persistent ? be() : (u.value = !1)) : j()
          })
        },
      )
      const ne = H()
      me(
        () => u.value && (e.absolute || e.contained) && E.value == null,
        (j) => {
          if (j) {
            const L = lv(i.value)
            L && L !== document.scrollingElement && (ne.value = L.scrollTop)
          }
        },
      )
      function be() {
        e.noClickAnimation ||
          (s.value &&
            El(
              s.value,
              [
                { transformOrigin: 'center' },
                { transform: 'scale(1.03)' },
                { transformOrigin: 'center' },
              ],
              { duration: 150, easing: wo },
            ))
      }
      function ie() {
        a('afterEnter')
      }
      function pe() {
        g(), a('afterLeave')
      }
      return (
        oe(() => {
          var j
          return f(ke, null, [
            (j = n.activator) == null
              ? void 0
              : j.call(n, {
                  isActive: u.value,
                  targetRef: V,
                  props: ve({ ref: I }, x.value, e.activatorProps),
                }),
            N.value &&
              h.value &&
              f(
                lg,
                { disabled: !E.value, to: E.value },
                {
                  default: () => [
                    f(
                      'div',
                      ve(
                        {
                          class: [
                            'v-overlay',
                            {
                              'v-overlay--absolute': e.absolute || e.contained,
                              'v-overlay--active': u.value,
                              'v-overlay--contained': e.contained,
                            },
                            d.value,
                            v.value,
                            e.class,
                          ],
                          style: [
                            C.value,
                            { '--v-overlay-opacity': e.opacity, top: he(ne.value) },
                            e.style,
                          ],
                          ref: i,
                        },
                        q,
                        l,
                      ),
                      [
                        f(
                          Vw,
                          ve({ color: y, modelValue: u.value && !!e.scrim, ref: r }, T.value),
                          null,
                        ),
                        f(
                          Kt,
                          {
                            appear: !0,
                            persisted: !0,
                            transition: e.transition,
                            target: P.value,
                            onAfterEnter: ie,
                            onAfterLeave: pe,
                          },
                          {
                            default: () => {
                              var L
                              return [
                                Ye(
                                  f(
                                    'div',
                                    ve(
                                      {
                                        ref: s,
                                        class: ['v-overlay__content', e.contentClass],
                                        style: [R.value, G.value],
                                      },
                                      O.value,
                                      e.contentProps,
                                    ),
                                    [(L = n.default) == null ? void 0 : L.call(n, { isActive: u })],
                                  ),
                                  [
                                    [Xt, u.value],
                                    [
                                      qt('click-outside'),
                                      { handler: X, closeConditional: U, include: () => [k.value] },
                                    ],
                                  ],
                                ),
                              ]
                            },
                          },
                        ),
                      ],
                    ),
                  ],
                },
              ),
          ])
        }),
        {
          activatorEl: k,
          scrimEl: r,
          target: P,
          animateClick: be,
          contentEl: s,
          globalTop: p,
          localTop: _,
          updateLocation: ee,
        }
      )
    },
  }),
  Oi = Symbol('Forwarded refs')
function Bi(e, t) {
  let n = e
  for (; n; ) {
    const l = Reflect.getOwnPropertyDescriptor(n, t)
    if (l) return l
    n = Object.getPrototypeOf(n)
  }
}
function An(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
    n[l - 1] = arguments[l]
  return (
    (e[Oi] = n),
    new Proxy(e, {
      get(a, o) {
        if (Reflect.has(a, o)) return Reflect.get(a, o)
        if (!(typeof o == 'symbol' || o.startsWith('$') || o.startsWith('__'))) {
          for (const i of n)
            if (i.value && Reflect.has(i.value, o)) {
              const r = Reflect.get(i.value, o)
              return typeof r == 'function' ? r.bind(i.value) : r
            }
        }
      },
      has(a, o) {
        if (Reflect.has(a, o)) return !0
        if (typeof o == 'symbol' || o.startsWith('$') || o.startsWith('__')) return !1
        for (const i of n) if (i.value && Reflect.has(i.value, o)) return !0
        return !1
      },
      set(a, o, i) {
        if (Reflect.has(a, o)) return Reflect.set(a, o, i)
        if (typeof o == 'symbol' || o.startsWith('$') || o.startsWith('__')) return !1
        for (const r of n) if (r.value && Reflect.has(r.value, o)) return Reflect.set(r.value, o, i)
        return !1
      },
      getOwnPropertyDescriptor(a, o) {
        var r
        const i = Reflect.getOwnPropertyDescriptor(a, o)
        if (i) return i
        if (!(typeof o == 'symbol' || o.startsWith('$') || o.startsWith('__'))) {
          for (const s of n) {
            if (!s.value) continue
            const c =
              Bi(s.value, o) ??
              ('_' in s.value ? Bi((r = s.value._) == null ? void 0 : r.setupState, o) : void 0)
            if (c) return c
          }
          for (const s of n) {
            const c = s.value && s.value[Oi]
            if (!c) continue
            const u = c.slice()
            for (; u.length; ) {
              const d = u.shift(),
                v = Bi(d.value, o)
              if (v) return v
              const m = d.value && d.value[Oi]
              m && u.push(...m)
            }
          }
        }
      },
    })
  )
}
const Am = $(
    {
      id: String,
      submenu: Boolean,
      ...Dt(
        ni({
          closeDelay: 250,
          closeOnContentClick: !0,
          locationStrategy: 'connected',
          location: void 0,
          openDelay: 300,
          scrim: !1,
          scrollStrategy: 'reposition',
          transition: { component: hs },
        }),
        ['absolute'],
      ),
    },
    'VMenu',
  ),
  Io = J()({
    name: 'VMenu',
    props: Am(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const l = Ae(e, 'modelValue'),
        { scopeId: a } = za(),
        { isRtl: o } = ct(),
        i = $t(),
        r = b(() => e.id || `v-menu-${i}`),
        s = H(),
        c = Ie(pr, null),
        u = ue(new Set())
      Ze(pr, {
        register() {
          u.value.add(i)
        },
        unregister() {
          u.value.delete(i)
        },
        closeParents(y) {
          setTimeout(() => {
            var p
            !u.value.size &&
              !e.persistent &&
              (y == null || ((p = s.value) != null && p.contentEl && !lb(y, s.value.contentEl))) &&
              ((l.value = !1), c == null || c.closeParents())
          }, 40)
        },
      }),
        ut(() => {
          c == null || c.unregister(), document.removeEventListener('focusin', d)
        }),
        Dr(() => (l.value = !1))
      async function d(y) {
        var C, k, I
        const p = y.relatedTarget,
          _ = y.target
        await Ke(),
          l.value &&
            p !== _ &&
            (C = s.value) != null &&
            C.contentEl &&
            (k = s.value) != null &&
            k.globalTop &&
            ![document, s.value.contentEl].includes(_) &&
            !s.value.contentEl.contains(_) &&
            ((I = _a(s.value.contentEl)[0]) == null || I.focus())
      }
      me(
        l,
        (y) => {
          y
            ? (c == null || c.register(),
              Be && document.addEventListener('focusin', d, { once: !0 }))
            : (c == null || c.unregister(), Be && document.removeEventListener('focusin', d))
        },
        { immediate: !0 },
      )
      function v(y) {
        c == null || c.closeParents(y)
      }
      function m(y) {
        var p, _, C, k, I
        if (!e.disabled)
          if (y.key === 'Tab' || (y.key === 'Enter' && !e.closeOnContentClick)) {
            if (
              y.key === 'Enter' &&
              (y.target instanceof HTMLTextAreaElement ||
                (y.target instanceof HTMLInputElement && y.target.closest('form')))
            )
              return
            y.key === 'Enter' && y.preventDefault(),
              Hf(
                _a((p = s.value) == null ? void 0 : p.contentEl, !1),
                y.shiftKey ? 'prev' : 'next',
                (A) => A.tabIndex >= 0,
              ) ||
                ((l.value = !1),
                (C = (_ = s.value) == null ? void 0 : _.activatorEl) == null || C.focus())
          } else
            e.submenu &&
              y.key === (o.value ? 'ArrowRight' : 'ArrowLeft') &&
              ((l.value = !1),
              (I = (k = s.value) == null ? void 0 : k.activatorEl) == null || I.focus())
      }
      function h(y) {
        var _
        if (e.disabled) return
        const p = (_ = s.value) == null ? void 0 : _.contentEl
        p && l.value
          ? y.key === 'ArrowDown'
            ? (y.preventDefault(), y.stopImmediatePropagation(), da(p, 'next'))
            : y.key === 'ArrowUp'
              ? (y.preventDefault(), y.stopImmediatePropagation(), da(p, 'prev'))
              : e.submenu &&
                (y.key === (o.value ? 'ArrowRight' : 'ArrowLeft')
                  ? (l.value = !1)
                  : y.key === (o.value ? 'ArrowLeft' : 'ArrowRight') &&
                    (y.preventDefault(), da(p, 'first')))
          : (e.submenu
              ? y.key === (o.value ? 'ArrowLeft' : 'ArrowRight')
              : ['ArrowDown', 'ArrowUp'].includes(y.key)) &&
            ((l.value = !0), y.preventDefault(), setTimeout(() => setTimeout(() => h(y))))
      }
      const g = b(() =>
        ve(
          {
            'aria-haspopup': 'menu',
            'aria-expanded': String(l.value),
            'aria-owns': r.value,
            onKeydown: h,
          },
          e.activatorProps,
        ),
      )
      return (
        oe(() => {
          const y = Dl.filterProps(e)
          return f(
            Dl,
            ve(
              { ref: s, id: r.value, class: ['v-menu', e.class], style: e.style },
              y,
              {
                modelValue: l.value,
                'onUpdate:modelValue': (p) => (l.value = p),
                absolute: !0,
                activatorProps: g.value,
                location: e.location ?? (e.submenu ? 'end' : 'bottom'),
                'onClick:outside': v,
                onKeydown: m,
              },
              a,
            ),
            {
              activator: n.activator,
              default: function () {
                for (var p = arguments.length, _ = new Array(p), C = 0; C < p; C++)
                  _[C] = arguments[C]
                return f(
                  Me,
                  { root: 'VMenu' },
                  {
                    default: () => {
                      var k
                      return [(k = n.default) == null ? void 0 : k.call(n, ..._)]
                    },
                  },
                )
              },
            },
          )
        }),
        An({ id: r, ΨopenChildren: u }, s)
      )
    },
  }),
  Ew = $(
    {
      active: Boolean,
      disabled: Boolean,
      max: [Number, String],
      value: { type: [Number, String], default: 0 },
      ...ge(),
      ...Gn({ transition: { component: $v } }),
    },
    'VCounter',
  ),
  Fs = J()({
    name: 'VCounter',
    functional: !0,
    props: Ew(),
    setup(e, t) {
      let { slots: n } = t
      const l = b(() => (e.max ? `${e.value} / ${e.max}` : String(e.value)))
      return (
        oe(() =>
          f(
            Kt,
            { transition: e.transition },
            {
              default: () => [
                Ye(
                  f(
                    'div',
                    {
                      class: [
                        'v-counter',
                        {
                          'text-error':
                            e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max),
                        },
                        e.class,
                      ],
                      style: e.style,
                    },
                    [
                      n.default
                        ? n.default({ counter: l.value, max: e.max, value: e.value })
                        : l.value,
                    ],
                  ),
                  [[Xt, e.active]],
                ),
              ],
            },
          ),
        ),
        {}
      )
    },
  }),
  Pw = $({ floating: Boolean, ...ge() }, 'VFieldLabel'),
  eo = J()({
    name: 'VFieldLabel',
    props: Pw(),
    setup(e, t) {
      let { slots: n } = t
      return (
        oe(() =>
          f(
            ei,
            {
              class: ['v-field-label', { 'v-field-label--floating': e.floating }, e.class],
              style: e.style,
              'aria-hidden': e.floating || void 0,
            },
            n,
          ),
        ),
        {}
      )
    },
  }),
  Aw = ['underlined', 'outlined', 'filled', 'solo', 'solo-inverted', 'solo-filled', 'plain'],
  li = $(
    {
      appendInnerIcon: Ee,
      bgColor: String,
      clearable: Boolean,
      clearIcon: { type: Ee, default: '$clear' },
      active: Boolean,
      centerAffix: { type: Boolean, default: void 0 },
      color: String,
      baseColor: String,
      dirty: Boolean,
      disabled: { type: Boolean, default: null },
      error: Boolean,
      flat: Boolean,
      label: String,
      persistentClear: Boolean,
      prependInnerIcon: Ee,
      reverse: Boolean,
      singleLine: Boolean,
      variant: { type: String, default: 'filled', validator: (e) => Aw.includes(e) },
      'onClick:clear': At(),
      'onClick:appendInner': At(),
      'onClick:prependInner': At(),
      ...ge(),
      ..._s(),
      ...ot(),
      ...$e(),
    },
    'VField',
  ),
  ai = J()({
    name: 'VField',
    inheritAttrs: !1,
    props: { id: String, ...Vs(), ...li() },
    emits: { 'update:focused': (e) => !0, 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { attrs: n, emit: l, slots: a } = t
      const { themeClasses: o } = qe(e),
        { loaderClasses: i } = ws(e),
        { focusClasses: r, isFocused: s, focus: c, blur: u } = Yl(e),
        { InputIcon: d } = im(e),
        { roundedClasses: v } = it(e),
        { rtlClasses: m } = ct(),
        h = b(() => e.dirty || e.active),
        g = b(() => !e.singleLine && !!(e.label || a.label)),
        y = $t(),
        p = b(() => e.id || `input-${y}`),
        _ = b(() => `${p.value}-messages`),
        C = H(),
        k = H(),
        I = H(),
        P = b(() => ['plain', 'underlined'].includes(e.variant)),
        { backgroundColorClasses: A, backgroundColorStyles: V } = Je(ae(e, 'bgColor')),
        { textColorClasses: x, textColorStyles: O } = Yt(
          b(() => (e.error || e.disabled ? void 0 : h.value && s.value ? e.color : e.baseColor)),
        )
      me(
        h,
        (N) => {
          if (g.value) {
            const q = C.value.$el,
              G = k.value.$el
            requestAnimationFrame(() => {
              const ee = ls(q),
                X = G.getBoundingClientRect(),
                U = X.x - ee.x,
                F = X.y - ee.y - (ee.height / 2 - X.height / 2),
                M = X.width / 0.75,
                ne = Math.abs(M - ee.width) > 1 ? { maxWidth: he(M) } : void 0,
                be = getComputedStyle(q),
                ie = getComputedStyle(G),
                pe = parseFloat(be.transitionDuration) * 1e3 || 150,
                j = parseFloat(ie.getPropertyValue('--v-field-label-scale')),
                L = ie.getPropertyValue('color')
              ;(q.style.visibility = 'visible'),
                (G.style.visibility = 'hidden'),
                El(
                  q,
                  { transform: `translate(${U}px, ${F}px) scale(${j})`, color: L, ...ne },
                  { duration: pe, easing: wo, direction: N ? 'normal' : 'reverse' },
                ).finished.then(() => {
                  q.style.removeProperty('visibility'), G.style.removeProperty('visibility')
                })
            })
          }
        },
        { flush: 'post' },
      )
      const T = b(() => ({ isActive: h, isFocused: s, controlRef: I, blur: u, focus: c }))
      function E(N) {
        N.target !== document.activeElement && N.preventDefault()
      }
      function R(N) {
        var q
        ;(N.key !== 'Enter' && N.key !== ' ') ||
          (N.preventDefault(),
          N.stopPropagation(),
          (q = e['onClick:clear']) == null || q.call(e, new MouseEvent('click')))
      }
      return (
        oe(() => {
          var U, F, M
          const N = e.variant === 'outlined',
            q = !!(a['prepend-inner'] || e.prependInnerIcon),
            G = !!(e.clearable || a.clear),
            ee = !!(a['append-inner'] || e.appendInnerIcon || G),
            X = () =>
              a.label ? a.label({ ...T.value, label: e.label, props: { for: p.value } }) : e.label
          return f(
            'div',
            ve(
              {
                class: [
                  'v-field',
                  {
                    'v-field--active': h.value,
                    'v-field--appended': ee,
                    'v-field--center-affix': e.centerAffix ?? !P.value,
                    'v-field--disabled': e.disabled,
                    'v-field--dirty': e.dirty,
                    'v-field--error': e.error,
                    'v-field--flat': e.flat,
                    'v-field--has-background': !!e.bgColor,
                    'v-field--persistent-clear': e.persistentClear,
                    'v-field--prepended': q,
                    'v-field--reverse': e.reverse,
                    'v-field--single-line': e.singleLine,
                    'v-field--no-label': !X(),
                    [`v-field--variant-${e.variant}`]: !0,
                  },
                  o.value,
                  A.value,
                  r.value,
                  i.value,
                  v.value,
                  m.value,
                  e.class,
                ],
                style: [V.value, e.style],
                onClick: E,
              },
              n,
            ),
            [
              f('div', { class: 'v-field__overlay' }, null),
              f(
                Kv,
                {
                  name: 'v-field',
                  active: !!e.loading,
                  color: e.error ? 'error' : typeof e.loading == 'string' ? e.loading : e.color,
                },
                { default: a.loader },
              ),
              q &&
                f('div', { key: 'prepend', class: 'v-field__prepend-inner' }, [
                  e.prependInnerIcon && f(d, { key: 'prepend-icon', name: 'prependInner' }, null),
                  (U = a['prepend-inner']) == null ? void 0 : U.call(a, T.value),
                ]),
              f('div', { class: 'v-field__field', 'data-no-activator': '' }, [
                ['filled', 'solo', 'solo-inverted', 'solo-filled'].includes(e.variant) &&
                  g.value &&
                  f(
                    eo,
                    {
                      key: 'floating-label',
                      ref: k,
                      class: [x.value],
                      floating: !0,
                      for: p.value,
                      style: O.value,
                    },
                    { default: () => [X()] },
                  ),
                g.value && f(eo, { key: 'label', ref: C, for: p.value }, { default: () => [X()] }),
                (F = a.default) == null
                  ? void 0
                  : F.call(a, {
                      ...T.value,
                      props: { id: p.value, class: 'v-field__input', 'aria-describedby': _.value },
                      focus: c,
                      blur: u,
                    }),
              ]),
              G &&
                f(
                  ys,
                  { key: 'clear' },
                  {
                    default: () => [
                      Ye(
                        f(
                          'div',
                          {
                            class: 'v-field__clearable',
                            onMousedown: (ne) => {
                              ne.preventDefault(), ne.stopPropagation()
                            },
                          },
                          [
                            f(
                              Me,
                              { defaults: { VIcon: { icon: e.clearIcon } } },
                              {
                                default: () => [
                                  a.clear
                                    ? a.clear({
                                        ...T.value,
                                        props: {
                                          onKeydown: R,
                                          onFocus: c,
                                          onBlur: u,
                                          onClick: e['onClick:clear'],
                                        },
                                      })
                                    : f(
                                        d,
                                        { name: 'clear', onKeydown: R, onFocus: c, onBlur: u },
                                        null,
                                      ),
                                ],
                              },
                            ),
                          ],
                        ),
                        [[Xt, e.dirty]],
                      ),
                    ],
                  },
                ),
              ee &&
                f('div', { key: 'append', class: 'v-field__append-inner' }, [
                  (M = a['append-inner']) == null ? void 0 : M.call(a, T.value),
                  e.appendInnerIcon && f(d, { key: 'append-icon', name: 'appendInner' }, null),
                ]),
              f('div', { class: ['v-field__outline', x.value], style: O.value }, [
                N &&
                  f(ke, null, [
                    f('div', { class: 'v-field__outline__start' }, null),
                    g.value &&
                      f('div', { class: 'v-field__outline__notch' }, [
                        f(eo, { ref: k, floating: !0, for: p.value }, { default: () => [X()] }),
                      ]),
                    f('div', { class: 'v-field__outline__end' }, null),
                  ]),
                P.value &&
                  g.value &&
                  f(eo, { ref: k, floating: !0, for: p.value }, { default: () => [X()] }),
              ]),
            ],
          )
        }),
        { controlRef: I }
      )
    },
  })
function Ms(e) {
  const t = Object.keys(ai.props).filter((n) => !Jr(n) && n !== 'class' && n !== 'style')
  return Mf(e, t)
}
const Iw = ['color', 'file', 'time', 'date', 'datetime-local', 'week', 'month'],
  Ds = $(
    {
      autofocus: Boolean,
      counter: [Boolean, Number, String],
      counterValue: [Number, Function],
      prefix: String,
      placeholder: String,
      persistentPlaceholder: Boolean,
      persistentCounter: Boolean,
      suffix: String,
      role: String,
      type: { type: String, default: 'text' },
      modelModifiers: Object,
      ...ql(),
      ...li(),
    },
    'VTextField',
  ),
  Aa = J()({
    name: 'VTextField',
    directives: { Intersect: ps },
    inheritAttrs: !1,
    props: Ds(),
    emits: {
      'click:control': (e) => !0,
      'mousedown:control': (e) => !0,
      'update:focused': (e) => !0,
      'update:modelValue': (e) => !0,
    },
    setup(e, t) {
      let { attrs: n, emit: l, slots: a } = t
      const o = Ae(e, 'modelValue'),
        { isFocused: i, focus: r, blur: s } = Yl(e),
        c = b(() =>
          typeof e.counterValue == 'function'
            ? e.counterValue(o.value)
            : typeof e.counterValue == 'number'
              ? e.counterValue
              : (o.value ?? '').toString().length,
        ),
        u = b(() => {
          if (n.maxlength) return n.maxlength
          if (!(!e.counter || (typeof e.counter != 'number' && typeof e.counter != 'string')))
            return e.counter
        }),
        d = b(() => ['plain', 'underlined'].includes(e.variant))
      function v(P, A) {
        var V, x
        !e.autofocus ||
          !P ||
          (x = (V = A[0].target) == null ? void 0 : V.focus) == null ||
          x.call(V)
      }
      const m = H(),
        h = H(),
        g = H(),
        y = b(() => Iw.includes(e.type) || e.persistentPlaceholder || i.value || e.active)
      function p() {
        var P
        g.value !== document.activeElement && ((P = g.value) == null || P.focus()), i.value || r()
      }
      function _(P) {
        l('mousedown:control', P), P.target !== g.value && (p(), P.preventDefault())
      }
      function C(P) {
        p(), l('click:control', P)
      }
      function k(P) {
        P.stopPropagation(),
          p(),
          Ke(() => {
            ;(o.value = null), ts(e['onClick:clear'], P)
          })
      }
      function I(P) {
        var V
        const A = P.target
        if (
          ((o.value = A.value),
          (V = e.modelModifiers) != null &&
            V.trim &&
            ['text', 'search', 'password', 'tel', 'url'].includes(e.type))
        ) {
          const x = [A.selectionStart, A.selectionEnd]
          Ke(() => {
            ;(A.selectionStart = x[0]), (A.selectionEnd = x[1])
          })
        }
      }
      return (
        oe(() => {
          const P = !!(a.counter || (e.counter !== !1 && e.counter != null)),
            A = !!(P || a.details),
            [V, x] = Da(n),
            { modelValue: O, ...T } = yn.filterProps(e),
            E = Ms(e)
          return f(
            yn,
            ve(
              {
                ref: m,
                modelValue: o.value,
                'onUpdate:modelValue': (R) => (o.value = R),
                class: [
                  'v-text-field',
                  {
                    'v-text-field--prefixed': e.prefix,
                    'v-text-field--suffixed': e.suffix,
                    'v-input--plain-underlined': d.value,
                  },
                  e.class,
                ],
                style: e.style,
              },
              V,
              T,
              { centerAffix: !d.value, focused: i.value },
            ),
            {
              ...a,
              default: (R) => {
                let { id: N, isDisabled: q, isDirty: G, isReadonly: ee, isValid: X } = R
                return f(
                  ai,
                  ve(
                    {
                      ref: h,
                      onMousedown: _,
                      onClick: C,
                      'onClick:clear': k,
                      'onClick:prependInner': e['onClick:prependInner'],
                      'onClick:appendInner': e['onClick:appendInner'],
                      role: e.role,
                    },
                    E,
                    {
                      id: N.value,
                      active: y.value || G.value,
                      dirty: G.value || e.dirty,
                      disabled: q.value,
                      focused: i.value,
                      error: X.value === !1,
                    },
                  ),
                  {
                    ...a,
                    default: (U) => {
                      let {
                        props: { class: F, ...M },
                      } = U
                      const ne = Ye(
                        f(
                          'input',
                          ve(
                            {
                              ref: g,
                              value: o.value,
                              onInput: I,
                              autofocus: e.autofocus,
                              readonly: ee.value,
                              disabled: q.value,
                              name: e.name,
                              placeholder: e.placeholder,
                              size: 1,
                              type: e.type,
                              onFocus: p,
                              onBlur: s,
                            },
                            M,
                            x,
                          ),
                          null,
                        ),
                        [[qt('intersect'), { handler: v }, null, { once: !0 }]],
                      )
                      return f(ke, null, [
                        e.prefix &&
                          f('span', { class: 'v-text-field__prefix' }, [
                            f('span', { class: 'v-text-field__prefix__text' }, [e.prefix]),
                          ]),
                        a.default
                          ? f('div', { class: F, 'data-no-activator': '' }, [a.default(), ne])
                          : kn(ne, { class: F }),
                        e.suffix &&
                          f('span', { class: 'v-text-field__suffix' }, [
                            f('span', { class: 'v-text-field__suffix__text' }, [e.suffix]),
                          ]),
                      ])
                    },
                  },
                )
              },
              details: A
                ? (R) => {
                    var N
                    return f(ke, null, [
                      (N = a.details) == null ? void 0 : N.call(a, R),
                      P &&
                        f(ke, null, [
                          f('span', null, null),
                          f(
                            Fs,
                            {
                              active: e.persistentCounter || i.value,
                              value: c.value,
                              max: u.value,
                              disabled: e.disabled,
                            },
                            a.counter,
                          ),
                        ]),
                    ])
                  }
                : void 0,
            },
          )
        }),
        An({}, m, h, g)
      )
    },
  }),
  Tw = $({ renderless: Boolean, ...ge() }, 'VVirtualScrollItem'),
  Ow = J()({
    name: 'VVirtualScrollItem',
    inheritAttrs: !1,
    props: Tw(),
    emits: { 'update:height': (e) => !0 },
    setup(e, t) {
      let { attrs: n, emit: l, slots: a } = t
      const { resizeRef: o, contentRect: i } = Vn(void 0, 'border')
      me(
        () => {
          var r
          return (r = i.value) == null ? void 0 : r.height
        },
        (r) => {
          r != null && l('update:height', r)
        },
      ),
        oe(() => {
          var r, s
          return e.renderless
            ? f(ke, null, [(r = a.default) == null ? void 0 : r.call(a, { itemRef: o })])
            : f(
                'div',
                ve({ ref: o, class: ['v-virtual-scroll__item', e.class], style: e.style }, n),
                [(s = a.default) == null ? void 0 : s.call(a)],
              )
        })
    },
  }),
  Bw = -1,
  Lw = 1,
  Li = 100,
  Rw = $(
    { itemHeight: { type: [Number, String], default: null }, height: [Number, String] },
    'virtual',
  )
function Fw(e, t) {
  const n = $a(),
    l = ue(0)
  yt(() => {
    l.value = parseFloat(e.itemHeight || 0)
  })
  const a = ue(0),
    o = ue(Math.ceil((parseInt(e.height) || n.height.value) / (l.value || 16)) || 1),
    i = ue(0),
    r = ue(0),
    s = H(),
    c = H()
  let u = 0
  const { resizeRef: d, contentRect: v } = Vn()
  yt(() => {
    d.value = s.value
  })
  const m = b(() => {
      var F
      return s.value === document.documentElement
        ? n.height.value
        : ((F = v.value) == null ? void 0 : F.height) || parseInt(e.height) || 0
    }),
    h = b(() => !!(s.value && c.value && m.value && l.value))
  let g = Array.from({ length: t.value.length }),
    y = Array.from({ length: t.value.length })
  const p = ue(0)
  let _ = -1
  function C(F) {
    return g[F] || l.value
  }
  const k = Qy(() => {
      const F = performance.now()
      y[0] = 0
      const M = t.value.length
      for (let ne = 1; ne <= M - 1; ne++) y[ne] = (y[ne - 1] || 0) + C(ne - 1)
      p.value = Math.max(p.value, performance.now() - F)
    }, p),
    I = me(h, (F) => {
      F &&
        (I(),
        (u = c.value.offsetTop),
        k.immediate(),
        G(),
        ~_ &&
          Ke(() => {
            Be &&
              window.requestAnimationFrame(() => {
                X(_), (_ = -1)
              })
          }))
    })
  bt(() => {
    k.clear()
  })
  function P(F, M) {
    const ne = g[F],
      be = l.value
    ;(l.value = be ? Math.min(l.value, M) : M), (ne !== M || be !== l.value) && ((g[F] = M), k())
  }
  function A(F) {
    return (F = dt(F, 0, t.value.length - 1)), y[F] || 0
  }
  function V(F) {
    return Mw(y, F)
  }
  let x = 0,
    O = 0,
    T = 0
  me(m, (F, M) => {
    M &&
      (G(),
      F < M &&
        requestAnimationFrame(() => {
          ;(O = 0), G()
        }))
  })
  let E = -1
  function R() {
    if (!s.value || !c.value) return
    const F = s.value.scrollTop,
      M = performance.now()
    M - T > 500 ? ((O = Math.sign(F - x)), (u = c.value.offsetTop)) : (O = F - x),
      (x = F),
      (T = M),
      window.clearTimeout(E),
      (E = window.setTimeout(N, 500)),
      G()
  }
  function N() {
    !s.value || !c.value || ((O = 0), (T = 0), window.clearTimeout(E), G())
  }
  let q = -1
  function G() {
    cancelAnimationFrame(q), (q = requestAnimationFrame(ee))
  }
  function ee() {
    if (!s.value || !m.value) return
    const F = x - u,
      M = Math.sign(O),
      ne = Math.max(0, F - Li),
      be = dt(V(ne), 0, t.value.length),
      ie = F + m.value + Li,
      pe = dt(V(ie) + 1, be + 1, t.value.length)
    if ((M !== Bw || be < a.value) && (M !== Lw || pe > o.value)) {
      const j = A(a.value) - A(be),
        L = A(pe) - A(o.value)
      Math.max(j, L) > Li
        ? ((a.value = be), (o.value = pe))
        : (be <= 0 && (a.value = be), pe >= t.value.length && (o.value = pe))
    }
    ;(i.value = A(a.value)), (r.value = A(t.value.length) - A(o.value))
  }
  function X(F) {
    const M = A(F)
    !s.value || (F && !M) ? (_ = F) : (s.value.scrollTop = M)
  }
  const U = b(() =>
    t.value
      .slice(a.value, o.value)
      .map((F, M) => ({
        raw: F,
        index: M + a.value,
        key: Lf(F) && 'value' in F ? F.value : M + a.value,
      })),
  )
  return (
    me(
      t,
      () => {
        ;(g = Array.from({ length: t.value.length })),
          (y = Array.from({ length: t.value.length })),
          k.immediate(),
          G()
      },
      { deep: !0 },
    ),
    {
      calculateVisibleItems: G,
      containerRef: s,
      markerRef: c,
      computedItems: U,
      paddingTop: i,
      paddingBottom: r,
      scrollToIndex: X,
      handleScroll: R,
      handleScrollend: N,
      handleItemResize: P,
    }
  )
}
function Mw(e, t) {
  let n = e.length - 1,
    l = 0,
    a = 0,
    o = null,
    i = -1
  if (e[n] < t) return n
  for (; l <= n; )
    if (((a = (l + n) >> 1), (o = e[a]), o > t)) n = a - 1
    else if (o < t) (i = a), (l = a + 1)
    else return o === t ? a : l
  return i
}
const Dw = $(
    { items: { type: Array, default: () => [] }, renderless: Boolean, ...Rw(), ...ge(), ...Tt() },
    'VVirtualScroll',
  ),
  Im = J()({
    name: 'VVirtualScroll',
    props: Dw(),
    setup(e, t) {
      let { slots: n } = t
      const l = et('VVirtualScroll'),
        { dimensionStyles: a } = Ot(e),
        {
          calculateVisibleItems: o,
          containerRef: i,
          markerRef: r,
          handleScroll: s,
          handleScrollend: c,
          handleItemResize: u,
          scrollToIndex: d,
          paddingTop: v,
          paddingBottom: m,
          computedItems: h,
        } = Fw(e, ae(e, 'items'))
      return (
        Pt(
          () => e.renderless,
          () => {
            function g() {
              var _, C
              const p = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1)
                ? 'addEventListener'
                : 'removeEventListener'
              i.value === document.documentElement
                ? (document[p]('scroll', s, { passive: !0 }), document[p]('scrollend', c))
                : ((_ = i.value) == null || _[p]('scroll', s, { passive: !0 }),
                  (C = i.value) == null || C[p]('scrollend', c))
            }
            Vt(() => {
              ;(i.value = lv(l.vnode.el, !0)), g(!0)
            }),
              bt(g)
          },
        ),
        oe(() => {
          const g = h.value.map((y) =>
            f(
              Ow,
              { key: y.key, renderless: e.renderless, 'onUpdate:height': (p) => u(y.index, p) },
              {
                default: (p) => {
                  var _
                  return (_ = n.default) == null
                    ? void 0
                    : _.call(n, { item: y.raw, index: y.index, ...p })
                },
              },
            ),
          )
          return e.renderless
            ? f(ke, null, [
                f(
                  'div',
                  { ref: r, class: 'v-virtual-scroll__spacer', style: { paddingTop: he(v.value) } },
                  null,
                ),
                g,
                f(
                  'div',
                  { class: 'v-virtual-scroll__spacer', style: { paddingBottom: he(m.value) } },
                  null,
                ),
              ])
            : f(
                'div',
                {
                  ref: i,
                  class: ['v-virtual-scroll', e.class],
                  onScrollPassive: s,
                  onScrollend: c,
                  style: [a.value, e.style],
                },
                [
                  f(
                    'div',
                    {
                      ref: r,
                      class: 'v-virtual-scroll__container',
                      style: { paddingTop: he(v.value), paddingBottom: he(m.value) },
                    },
                    [g],
                  ),
                ],
              )
        }),
        { calculateVisibleItems: o, scrollToIndex: d }
      )
    },
  })
function Tm(e, t) {
  const n = ue(!1)
  let l
  function a(r) {
    cancelAnimationFrame(l),
      (n.value = !0),
      (l = requestAnimationFrame(() => {
        l = requestAnimationFrame(() => {
          n.value = !1
        })
      }))
  }
  async function o() {
    await new Promise((r) => requestAnimationFrame(r)),
      await new Promise((r) => requestAnimationFrame(r)),
      await new Promise((r) => requestAnimationFrame(r)),
      await new Promise((r) => {
        if (n.value) {
          const s = me(n, () => {
            s(), r()
          })
        } else r()
      })
  }
  async function i(r) {
    var u, d
    if (
      (r.key === 'Tab' && ((u = t.value) == null || u.focus()),
      !['PageDown', 'PageUp', 'Home', 'End'].includes(r.key))
    )
      return
    const s = (d = e.value) == null ? void 0 : d.$el
    if (!s) return
    ;(r.key === 'Home' || r.key === 'End') &&
      s.scrollTo({ top: r.key === 'Home' ? 0 : s.scrollHeight, behavior: 'smooth' }),
      await o()
    const c = s.querySelectorAll(':scope > :not(.v-virtual-scroll__spacer)')
    if (r.key === 'PageDown' || r.key === 'Home') {
      const v = s.getBoundingClientRect().top
      for (const m of c)
        if (m.getBoundingClientRect().top >= v) {
          m.focus()
          break
        }
    } else {
      const v = s.getBoundingClientRect().bottom
      for (const m of [...c].reverse())
        if (m.getBoundingClientRect().bottom <= v) {
          m.focus()
          break
        }
    }
  }
  return { onScrollPassive: a, onKeydown: i }
}
const Om = $(
    {
      chips: Boolean,
      closableChips: Boolean,
      closeText: { type: String, default: '$vuetify.close' },
      openText: { type: String, default: '$vuetify.open' },
      eager: Boolean,
      hideNoData: Boolean,
      hideSelected: Boolean,
      listProps: { type: Object },
      menu: Boolean,
      menuIcon: { type: Ee, default: '$dropdown' },
      menuProps: { type: Object },
      multiple: Boolean,
      noDataText: { type: String, default: '$vuetify.noDataText' },
      openOnClear: Boolean,
      itemColor: String,
      ...Sm({ itemChildren: !1 }),
    },
    'Select',
  ),
  $w = $(
    {
      ...Om(),
      ...Dt(Ds({ modelValue: null, role: 'combobox' }), [
        'validationValue',
        'dirty',
        'appendInnerIcon',
      ]),
      ...Gn({ transition: { component: hs } }),
    },
    'VSelect',
  ),
  Nw = J()({
    name: 'VSelect',
    props: $w(),
    emits: {
      'update:focused': (e) => !0,
      'update:modelValue': (e) => !0,
      'update:menu': (e) => !0,
    },
    setup(e, t) {
      let { slots: n } = t
      const { t: l } = Kn(),
        a = H(),
        o = H(),
        i = H(),
        r = Ae(e, 'menu'),
        s = b({
          get: () => r.value,
          set: (U) => {
            var F
            ;(r.value && !U && (F = o.value) != null && F.ΨopenChildren.size) || (r.value = U)
          },
        }),
        { items: c, transformIn: u, transformOut: d } = wm(e),
        v = Ae(
          e,
          'modelValue',
          [],
          (U) => u(U === null ? [null] : gt(U)),
          (U) => {
            const F = d(U)
            return e.multiple ? F : (F[0] ?? null)
          },
        ),
        m = b(() =>
          typeof e.counterValue == 'function'
            ? e.counterValue(v.value)
            : typeof e.counterValue == 'number'
              ? e.counterValue
              : v.value.length,
        ),
        h = Es(e),
        g = b(() => v.value.map((U) => U.value)),
        y = ue(!1),
        p = b(() => (s.value ? e.closeText : e.openText))
      let _ = '',
        C
      const k = b(() =>
          e.hideSelected
            ? c.value.filter((U) => !v.value.some((F) => e.valueComparator(F, U)))
            : c.value,
        ),
        I = b(() => (e.hideNoData && !k.value.length) || h.isReadonly.value || h.isDisabled.value),
        P = b(() => {
          var U
          return {
            ...e.menuProps,
            activatorProps: {
              ...(((U = e.menuProps) == null ? void 0 : U.activatorProps) || {}),
              'aria-haspopup': 'listbox',
            },
          }
        }),
        A = H(),
        V = Tm(A, a)
      function x(U) {
        e.openOnClear && (s.value = !0)
      }
      function O() {
        I.value || (s.value = !s.value)
      }
      function T(U) {
        Ji(U) && E(U)
      }
      function E(U) {
        var be, ie
        if (!U.key || h.isReadonly.value) return
        ;['Enter', ' ', 'ArrowDown', 'ArrowUp', 'Home', 'End'].includes(U.key) &&
          U.preventDefault(),
          ['Enter', 'ArrowDown', ' '].includes(U.key) && (s.value = !0),
          ['Escape', 'Tab'].includes(U.key) && (s.value = !1),
          U.key === 'Home'
            ? (be = A.value) == null || be.focus('first')
            : U.key === 'End' && ((ie = A.value) == null || ie.focus('last'))
        const F = 1e3
        if (e.multiple || !Ji(U)) return
        const M = performance.now()
        M - C > F && (_ = ''), (_ += U.key.toLowerCase()), (C = M)
        const ne = c.value.find((pe) => pe.title.toLowerCase().startsWith(_))
        if (ne !== void 0) {
          v.value = [ne]
          const pe = k.value.indexOf(ne)
          Be &&
            window.requestAnimationFrame(() => {
              var j
              pe >= 0 && ((j = i.value) == null || j.scrollToIndex(pe))
            })
        }
      }
      function R(U) {
        let F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0
        if (!U.props.disabled)
          if (e.multiple) {
            const M = v.value.findIndex((be) => e.valueComparator(be.value, U.value)),
              ne = F ?? !~M
            if (~M) {
              const be = ne ? [...v.value, U] : [...v.value]
              be.splice(M, 1), (v.value = be)
            } else ne && (v.value = [...v.value, U])
          } else {
            const M = F !== !1
            ;(v.value = M ? [U] : []),
              Ke(() => {
                s.value = !1
              })
          }
      }
      function N(U) {
        var F
        ;((F = A.value) != null && F.$el.contains(U.relatedTarget)) || (s.value = !1)
      }
      function q() {
        var U
        e.eager && ((U = i.value) == null || U.calculateVisibleItems())
      }
      function G() {
        var U
        y.value && ((U = a.value) == null || U.focus())
      }
      function ee(U) {
        y.value = !0
      }
      function X(U) {
        if (U == null) v.value = []
        else if (Ll(a.value, ':autofill') || Ll(a.value, ':-webkit-autofill')) {
          const F = c.value.find((M) => M.title === U)
          F && R(F)
        } else a.value && (a.value.value = '')
      }
      return (
        me(s, () => {
          if (!e.hideSelected && s.value && v.value.length) {
            const U = k.value.findIndex((F) =>
              v.value.some((M) => e.valueComparator(M.value, F.value)),
            )
            Be &&
              window.requestAnimationFrame(() => {
                var F
                U >= 0 && ((F = i.value) == null || F.scrollToIndex(U))
              })
          }
        }),
        me(
          () => e.items,
          (U, F) => {
            s.value || (y.value && !F.length && U.length && (s.value = !0))
          },
        ),
        oe(() => {
          const U = !!(e.chips || n.chip),
            F = !!(
              !e.hideNoData ||
              k.value.length ||
              n['prepend-item'] ||
              n['append-item'] ||
              n['no-data']
            ),
            M = v.value.length > 0,
            ne = Aa.filterProps(e),
            be = M || (!y.value && e.label && !e.persistentPlaceholder) ? void 0 : e.placeholder
          return f(
            Aa,
            ve({ ref: a }, ne, {
              modelValue: v.value.map((ie) => ie.props.value).join(', '),
              'onUpdate:modelValue': X,
              focused: y.value,
              'onUpdate:focused': (ie) => (y.value = ie),
              validationValue: v.externalValue,
              counterValue: m.value,
              dirty: M,
              class: [
                'v-select',
                {
                  'v-select--active-menu': s.value,
                  'v-select--chips': !!e.chips,
                  [`v-select--${e.multiple ? 'multiple' : 'single'}`]: !0,
                  'v-select--selected': v.value.length,
                  'v-select--selection-slot': !!n.selection,
                },
                e.class,
              ],
              style: e.style,
              inputmode: 'none',
              placeholder: be,
              'onClick:clear': x,
              'onMousedown:control': O,
              onBlur: N,
              onKeydown: E,
              'aria-label': l(p.value),
              title: l(p.value),
            }),
            {
              ...n,
              default: () =>
                f(ke, null, [
                  f(
                    Io,
                    ve(
                      {
                        ref: o,
                        modelValue: s.value,
                        'onUpdate:modelValue': (ie) => (s.value = ie),
                        activator: 'parent',
                        contentClass: 'v-select__content',
                        disabled: I.value,
                        eager: e.eager,
                        maxHeight: 310,
                        openOnClick: !1,
                        closeOnContentClick: !1,
                        transition: e.transition,
                        onAfterEnter: q,
                        onAfterLeave: G,
                      },
                      P.value,
                    ),
                    {
                      default: () => [
                        F &&
                          f(
                            Ts,
                            ve(
                              {
                                ref: A,
                                selected: g.value,
                                selectStrategy: e.multiple ? 'independent' : 'single-independent',
                                onMousedown: (ie) => ie.preventDefault(),
                                onKeydown: T,
                                onFocusin: ee,
                                tabindex: '-1',
                                'aria-live': 'polite',
                                color: e.itemColor ?? e.color,
                              },
                              V,
                              e.listProps,
                            ),
                            {
                              default: () => {
                                var ie, pe, j
                                return [
                                  (ie = n['prepend-item']) == null ? void 0 : ie.call(n),
                                  !k.value.length &&
                                    !e.hideNoData &&
                                    (((pe = n['no-data']) == null ? void 0 : pe.call(n)) ??
                                      f(dl, { key: 'no-data', title: l(e.noDataText) }, null)),
                                  f(
                                    Im,
                                    { ref: i, renderless: !0, items: k.value },
                                    {
                                      default: (L) => {
                                        var de
                                        let { item: Y, index: Z, itemRef: le } = L
                                        const K = ve(Y.props, {
                                          ref: le,
                                          key: Y.value,
                                          onClick: () => R(Y, null),
                                        })
                                        return (
                                          ((de = n.item) == null
                                            ? void 0
                                            : de.call(n, { item: Y, index: Z, props: K })) ??
                                          f(dl, ve(K, { role: 'option' }), {
                                            prepend: (S) => {
                                              let { isSelected: w } = S
                                              return f(ke, null, [
                                                e.multiple && !e.hideSelected
                                                  ? f(
                                                      Po,
                                                      {
                                                        key: Y.value,
                                                        modelValue: w,
                                                        ripple: !1,
                                                        tabindex: '-1',
                                                      },
                                                      null,
                                                    )
                                                  : void 0,
                                                Y.props.prependAvatar &&
                                                  f(rn, { image: Y.props.prependAvatar }, null),
                                                Y.props.prependIcon &&
                                                  f(je, { icon: Y.props.prependIcon }, null),
                                              ])
                                            },
                                          })
                                        )
                                      },
                                    },
                                  ),
                                  (j = n['append-item']) == null ? void 0 : j.call(n),
                                ]
                              },
                            },
                          ),
                      ],
                    },
                  ),
                  v.value.map((ie, pe) => {
                    function j(le) {
                      le.stopPropagation(), le.preventDefault(), R(ie, !1)
                    }
                    const L = {
                        'onClick:close': j,
                        onKeydown(le) {
                          ;(le.key !== 'Enter' && le.key !== ' ') ||
                            (le.preventDefault(), le.stopPropagation(), j(le))
                        },
                        onMousedown(le) {
                          le.preventDefault(), le.stopPropagation()
                        },
                        modelValue: !0,
                        'onUpdate:modelValue': void 0,
                      },
                      Y = U ? !!n.chip : !!n.selection,
                      Z = Y
                        ? ns(
                            U
                              ? n.chip({ item: ie, index: pe, props: L })
                              : n.selection({ item: ie, index: pe }),
                          )
                        : void 0
                    if (!(Y && !Z))
                      return f('div', { key: ie.value, class: 'v-select__selection' }, [
                        U
                          ? n.chip
                            ? f(
                                Me,
                                {
                                  key: 'chip-defaults',
                                  defaults: {
                                    VChip: {
                                      closable: e.closableChips,
                                      size: 'small',
                                      text: ie.title,
                                    },
                                  },
                                },
                                { default: () => [Z] },
                              )
                            : f(
                                ti,
                                ve(
                                  {
                                    key: 'chip',
                                    closable: e.closableChips,
                                    size: 'small',
                                    text: ie.title,
                                    disabled: ie.props.disabled,
                                  },
                                  L,
                                ),
                                null,
                              )
                          : (Z ??
                            f('span', { class: 'v-select__selection-text' }, [
                              ie.title,
                              e.multiple &&
                                pe < v.value.length - 1 &&
                                f('span', { class: 'v-select__selection-comma' }, [Xe(',')]),
                            ])),
                      ])
                  }),
                ]),
              'append-inner': function () {
                var L
                for (var ie = arguments.length, pe = new Array(ie), j = 0; j < ie; j++)
                  pe[j] = arguments[j]
                return f(ke, null, [
                  (L = n['append-inner']) == null ? void 0 : L.call(n, ...pe),
                  e.menuIcon
                    ? f(je, { class: 'v-select__menu-icon', icon: e.menuIcon }, null)
                    : void 0,
                ])
              },
            },
          )
        }),
        An({ isFocused: y, menu: s, select: R }, a)
      )
    },
  }),
  Hw = (e, t, n) =>
    e == null || t == null
      ? -1
      : e.toString().toLocaleLowerCase().indexOf(t.toString().toLocaleLowerCase()),
  jw = $(
    {
      customFilter: Function,
      customKeyFilter: Object,
      filterKeys: [Array, String],
      filterMode: { type: String, default: 'intersection' },
      noFilter: Boolean,
    },
    'filter',
  )
function zw(e, t, n) {
  var r
  const l = [],
    a = (n == null ? void 0 : n.default) ?? Hw,
    o = n != null && n.filterKeys ? gt(n.filterKeys) : !1,
    i = Object.keys((n == null ? void 0 : n.customKeyFilter) ?? {}).length
  if (!(e != null && e.length)) return l
  e: for (let s = 0; s < e.length; s++) {
    const [c, u = c] = gt(e[s]),
      d = {},
      v = {}
    let m = -1
    if ((t || i > 0) && !(n != null && n.noFilter)) {
      if (typeof c == 'object') {
        const y = o || Object.keys(u)
        for (const p of y) {
          const _ = Wt(u, p),
            C = (r = n == null ? void 0 : n.customKeyFilter) == null ? void 0 : r[p]
          if (((m = C ? C(_, t, c) : a(_, t, c)), m !== -1 && m !== !1)) C ? (d[p] = m) : (v[p] = m)
          else if ((n == null ? void 0 : n.filterMode) === 'every') continue e
        }
      } else (m = a(c, t, c)), m !== -1 && m !== !1 && (v.title = m)
      const h = Object.keys(v).length,
        g = Object.keys(d).length
      if (
        (!h && !g) ||
        ((n == null ? void 0 : n.filterMode) === 'union' && g !== i && !h) ||
        ((n == null ? void 0 : n.filterMode) === 'intersection' && (g !== i || !h))
      )
        continue
    }
    l.push({ index: s, matches: { ...v, ...d } })
  }
  return l
}
function Ww(e, t, n, l) {
  const a = H([]),
    o = H(new Map()),
    i = b(() => nt(t))
  yt(() => {
    const s = typeof n == 'function' ? n() : nt(n),
      c = typeof s != 'string' && typeof s != 'number' ? '' : String(s),
      u = zw(i.value, c, {
        customKeyFilter: { ...e.customKeyFilter, ...nt(l == null ? void 0 : l.customKeyFilter) },
        default: e.customFilter,
        filterKeys: e.filterKeys,
        filterMode: e.filterMode,
        noFilter: e.noFilter,
      }),
      d = nt(t),
      v = [],
      m = new Map()
    u.forEach((h) => {
      let { index: g, matches: y } = h
      const p = d[g]
      v.push(p), m.set(p.value, y)
    }),
      (a.value = v),
      (o.value = m)
  })
  function r(s) {
    return o.value.get(s.value)
  }
  return { filteredItems: a, filteredMatches: o, getMatches: r }
}
function Uw(e, t, n) {
  if (t == null) return e
  if (Array.isArray(t)) throw new Error('Multiple matches is not implemented')
  return typeof t == 'number' && ~t
    ? f(ke, null, [
        f('span', { class: 'v-autocomplete__unmask' }, [e.substr(0, t)]),
        f('span', { class: 'v-autocomplete__mask' }, [e.substr(t, n)]),
        f('span', { class: 'v-autocomplete__unmask' }, [e.substr(t + n)]),
      ])
    : e
}
const Kw = $(
    {
      autoSelectFirst: { type: [Boolean, String] },
      clearOnSelect: Boolean,
      search: String,
      ...jw({ filterKeys: ['title'] }),
      ...Om(),
      ...Dt(Ds({ modelValue: null, role: 'combobox' }), [
        'validationValue',
        'dirty',
        'appendInnerIcon',
      ]),
      ...Gn({ transition: !1 }),
    },
    'VAutocomplete',
  ),
  Gw = J()({
    name: 'VAutocomplete',
    props: Kw(),
    emits: {
      'update:focused': (e) => !0,
      'update:search': (e) => !0,
      'update:modelValue': (e) => !0,
      'update:menu': (e) => !0,
    },
    setup(e, t) {
      let { slots: n } = t
      const { t: l } = Kn(),
        a = H(),
        o = ue(!1),
        i = ue(!0),
        r = ue(!1),
        s = H(),
        c = H(),
        u = Ae(e, 'menu'),
        d = b({
          get: () => u.value,
          set: (K) => {
            var de
            ;(u.value && !K && (de = s.value) != null && de.ΨopenChildren.size) || (u.value = K)
          },
        }),
        v = ue(-1),
        m = b(() => {
          var K
          return (K = a.value) == null ? void 0 : K.color
        }),
        h = b(() => (d.value ? e.closeText : e.openText)),
        { items: g, transformIn: y, transformOut: p } = wm(e),
        { textColorClasses: _, textColorStyles: C } = Yt(m),
        k = Ae(e, 'search', ''),
        I = Ae(
          e,
          'modelValue',
          [],
          (K) => y(K === null ? [null] : gt(K)),
          (K) => {
            const de = p(K)
            return e.multiple ? de : (de[0] ?? null)
          },
        ),
        P = b(() =>
          typeof e.counterValue == 'function'
            ? e.counterValue(I.value)
            : typeof e.counterValue == 'number'
              ? e.counterValue
              : I.value.length,
        ),
        A = Es(e),
        { filteredItems: V, getMatches: x } = Ww(e, g, () => (i.value ? '' : k.value)),
        O = b(() =>
          e.hideSelected
            ? V.value.filter((K) => !I.value.some((de) => de.value === K.value))
            : V.value,
        ),
        T = b(() => !!(e.chips || n.chip)),
        E = b(() => T.value || !!n.selection),
        R = b(() => I.value.map((K) => K.props.value)),
        N = b(() => {
          var de
          return (
            (e.autoSelectFirst === !0 ||
              (e.autoSelectFirst === 'exact' &&
                k.value === ((de = O.value[0]) == null ? void 0 : de.title))) &&
            O.value.length > 0 &&
            !i.value &&
            !r.value
          )
        }),
        q = b(() => (e.hideNoData && !O.value.length) || A.isReadonly.value || A.isDisabled.value),
        G = H(),
        ee = Tm(G, a)
      function X(K) {
        e.openOnClear && (d.value = !0), (k.value = '')
      }
      function U() {
        q.value || (d.value = !0)
      }
      function F(K) {
        q.value || (o.value && (K.preventDefault(), K.stopPropagation()), (d.value = !d.value))
      }
      function M(K) {
        var de
        Ji(K) && ((de = a.value) == null || de.focus())
      }
      function ne(K) {
        var w, B, z
        if (A.isReadonly.value) return
        const de = a.value.selectionStart,
          S = I.value.length
        if (
          ((v.value > -1 || ['Enter', 'ArrowDown', 'ArrowUp'].includes(K.key)) &&
            K.preventDefault(),
          ['Enter', 'ArrowDown'].includes(K.key) && (d.value = !0),
          ['Escape'].includes(K.key) && (d.value = !1),
          N.value &&
            ['Enter', 'Tab'].includes(K.key) &&
            !I.value.some((D) => {
              let { value: W } = D
              return W === O.value[0].value
            }) &&
            le(O.value[0]),
          K.key === 'ArrowDown' && N.value && ((w = G.value) == null || w.focus('next')),
          ['Backspace', 'Delete'].includes(K.key))
        ) {
          if (!e.multiple && E.value && I.value.length > 0 && !k.value) return le(I.value[0], !1)
          if (~v.value) {
            const D = v.value
            le(I.value[v.value], !1), (v.value = D >= S - 1 ? S - 2 : D)
          } else K.key === 'Backspace' && !k.value && (v.value = S - 1)
        }
        if (e.multiple) {
          if (K.key === 'ArrowLeft') {
            if (v.value < 0 && de > 0) return
            const D = v.value > -1 ? v.value - 1 : S - 1
            I.value[D]
              ? (v.value = D)
              : ((v.value = -1),
                a.value.setSelectionRange(
                  (B = k.value) == null ? void 0 : B.length,
                  (z = k.value) == null ? void 0 : z.length,
                ))
          }
          if (K.key === 'ArrowRight') {
            if (v.value < 0) return
            const D = v.value + 1
            I.value[D] ? (v.value = D) : ((v.value = -1), a.value.setSelectionRange(0, 0))
          }
        }
      }
      function be(K) {
        if (Ll(a.value, ':autofill') || Ll(a.value, ':-webkit-autofill')) {
          const de = g.value.find((S) => S.title === K.target.value)
          de && le(de)
        }
      }
      function ie() {
        var K
        e.eager && ((K = c.value) == null || K.calculateVisibleItems())
      }
      function pe() {
        var K
        o.value && ((i.value = !0), (K = a.value) == null || K.focus())
      }
      function j(K) {
        ;(o.value = !0),
          setTimeout(() => {
            r.value = !0
          })
      }
      function L(K) {
        r.value = !1
      }
      function Y(K) {
        ;(K == null || (K === '' && !e.multiple && !E.value)) && (I.value = [])
      }
      const Z = ue(!1)
      function le(K) {
        let de = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0
        if (!(!K || K.props.disabled))
          if (e.multiple) {
            const S = I.value.findIndex((B) => e.valueComparator(B.value, K.value)),
              w = de ?? !~S
            if (~S) {
              const B = w ? [...I.value, K] : [...I.value]
              B.splice(S, 1), (I.value = B)
            } else w && (I.value = [...I.value, K])
            e.clearOnSelect && (k.value = '')
          } else {
            const S = de !== !1
            ;(I.value = S ? [K] : []),
              (k.value = S && !E.value ? K.title : ''),
              Ke(() => {
                ;(d.value = !1), (i.value = !0)
              })
          }
      }
      return (
        me(o, (K, de) => {
          var S
          K !== de &&
            (K
              ? ((Z.value = !0),
                (k.value =
                  e.multiple || E.value
                    ? ''
                    : String(((S = I.value.at(-1)) == null ? void 0 : S.props.title) ?? '')),
                (i.value = !0),
                Ke(() => (Z.value = !1)))
              : (!e.multiple && k.value == null && (I.value = []),
                (d.value = !1),
                I.value.some((w) => {
                  let { title: B } = w
                  return B === k.value
                }) || (k.value = ''),
                (v.value = -1)))
        }),
        me(k, (K) => {
          !o.value || Z.value || (K && (d.value = !0), (i.value = !K))
        }),
        me(d, () => {
          if (!e.hideSelected && d.value && I.value.length) {
            const K = O.value.findIndex((de) => I.value.some((S) => de.value === S.value))
            Be &&
              window.requestAnimationFrame(() => {
                var de
                K >= 0 && ((de = c.value) == null || de.scrollToIndex(K))
              })
          }
        }),
        me(
          () => e.items,
          (K, de) => {
            d.value || (o.value && !de.length && K.length && (d.value = !0))
          },
        ),
        oe(() => {
          const K = !!(
              !e.hideNoData ||
              O.value.length ||
              n['prepend-item'] ||
              n['append-item'] ||
              n['no-data']
            ),
            de = I.value.length > 0,
            S = Aa.filterProps(e)
          return f(
            Aa,
            ve({ ref: a }, S, {
              modelValue: k.value,
              'onUpdate:modelValue': [(w) => (k.value = w), Y],
              focused: o.value,
              'onUpdate:focused': (w) => (o.value = w),
              validationValue: I.externalValue,
              counterValue: P.value,
              dirty: de,
              onChange: be,
              class: [
                'v-autocomplete',
                `v-autocomplete--${e.multiple ? 'multiple' : 'single'}`,
                {
                  'v-autocomplete--active-menu': d.value,
                  'v-autocomplete--chips': !!e.chips,
                  'v-autocomplete--selection-slot': !!E.value,
                  'v-autocomplete--selecting-index': v.value > -1,
                },
                e.class,
              ],
              style: e.style,
              readonly: A.isReadonly.value,
              placeholder: de ? void 0 : e.placeholder,
              'onClick:clear': X,
              'onMousedown:control': U,
              onKeydown: ne,
            }),
            {
              ...n,
              default: () =>
                f(ke, null, [
                  f(
                    Io,
                    ve(
                      {
                        ref: s,
                        modelValue: d.value,
                        'onUpdate:modelValue': (w) => (d.value = w),
                        activator: 'parent',
                        contentClass: 'v-autocomplete__content',
                        disabled: q.value,
                        eager: e.eager,
                        maxHeight: 310,
                        openOnClick: !1,
                        closeOnContentClick: !1,
                        transition: e.transition,
                        onAfterEnter: ie,
                        onAfterLeave: pe,
                      },
                      e.menuProps,
                    ),
                    {
                      default: () => [
                        K &&
                          f(
                            Ts,
                            ve(
                              {
                                ref: G,
                                selected: R.value,
                                selectStrategy: e.multiple ? 'independent' : 'single-independent',
                                onMousedown: (w) => w.preventDefault(),
                                onKeydown: M,
                                onFocusin: j,
                                onFocusout: L,
                                tabindex: '-1',
                                'aria-live': 'polite',
                                color: e.itemColor ?? e.color,
                              },
                              ee,
                              e.listProps,
                            ),
                            {
                              default: () => {
                                var w, B, z
                                return [
                                  (w = n['prepend-item']) == null ? void 0 : w.call(n),
                                  !O.value.length &&
                                    !e.hideNoData &&
                                    (((B = n['no-data']) == null ? void 0 : B.call(n)) ??
                                      f(dl, { key: 'no-data', title: l(e.noDataText) }, null)),
                                  f(
                                    Im,
                                    { ref: c, renderless: !0, items: O.value },
                                    {
                                      default: (D) => {
                                        var Q
                                        let { item: W, index: se, itemRef: te } = D
                                        const re = ve(W.props, {
                                          ref: te,
                                          key: W.value,
                                          active: N.value && se === 0 ? !0 : void 0,
                                          onClick: () => le(W, null),
                                        })
                                        return (
                                          ((Q = n.item) == null
                                            ? void 0
                                            : Q.call(n, { item: W, index: se, props: re })) ??
                                          f(dl, ve(re, { role: 'option' }), {
                                            prepend: (_e) => {
                                              let { isSelected: fe } = _e
                                              return f(ke, null, [
                                                e.multiple && !e.hideSelected
                                                  ? f(
                                                      Po,
                                                      {
                                                        key: W.value,
                                                        modelValue: fe,
                                                        ripple: !1,
                                                        tabindex: '-1',
                                                      },
                                                      null,
                                                    )
                                                  : void 0,
                                                W.props.prependAvatar &&
                                                  f(rn, { image: W.props.prependAvatar }, null),
                                                W.props.prependIcon &&
                                                  f(je, { icon: W.props.prependIcon }, null),
                                              ])
                                            },
                                            title: () => {
                                              var _e, fe
                                              return i.value
                                                ? W.title
                                                : Uw(
                                                    W.title,
                                                    (_e = x(W)) == null ? void 0 : _e.title,
                                                    ((fe = k.value) == null ? void 0 : fe.length) ??
                                                      0,
                                                  )
                                            },
                                          })
                                        )
                                      },
                                    },
                                  ),
                                  (z = n['append-item']) == null ? void 0 : z.call(n),
                                ]
                              },
                            },
                          ),
                      ],
                    },
                  ),
                  I.value.map((w, B) => {
                    function z(te) {
                      te.stopPropagation(), te.preventDefault(), le(w, !1)
                    }
                    const D = {
                        'onClick:close': z,
                        onKeydown(te) {
                          ;(te.key !== 'Enter' && te.key !== ' ') ||
                            (te.preventDefault(), te.stopPropagation(), z(te))
                        },
                        onMousedown(te) {
                          te.preventDefault(), te.stopPropagation()
                        },
                        modelValue: !0,
                        'onUpdate:modelValue': void 0,
                      },
                      W = T.value ? !!n.chip : !!n.selection,
                      se = W
                        ? ns(
                            T.value
                              ? n.chip({ item: w, index: B, props: D })
                              : n.selection({ item: w, index: B }),
                          )
                        : void 0
                    if (!(W && !se))
                      return f(
                        'div',
                        {
                          key: w.value,
                          class: [
                            'v-autocomplete__selection',
                            B === v.value && ['v-autocomplete__selection--selected', _.value],
                          ],
                          style: B === v.value ? C.value : {},
                        },
                        [
                          T.value
                            ? n.chip
                              ? f(
                                  Me,
                                  {
                                    key: 'chip-defaults',
                                    defaults: {
                                      VChip: {
                                        closable: e.closableChips,
                                        size: 'small',
                                        text: w.title,
                                      },
                                    },
                                  },
                                  { default: () => [se] },
                                )
                              : f(
                                  ti,
                                  ve(
                                    {
                                      key: 'chip',
                                      closable: e.closableChips,
                                      size: 'small',
                                      text: w.title,
                                      disabled: w.props.disabled,
                                    },
                                    D,
                                  ),
                                  null,
                                )
                            : (se ??
                              f('span', { class: 'v-autocomplete__selection-text' }, [
                                w.title,
                                e.multiple &&
                                  B < I.value.length - 1 &&
                                  f('span', { class: 'v-autocomplete__selection-comma' }, [
                                    Xe(','),
                                  ]),
                              ])),
                        ],
                      )
                  }),
                ]),
              'append-inner': function () {
                var D
                for (var w = arguments.length, B = new Array(w), z = 0; z < w; z++)
                  B[z] = arguments[z]
                return f(ke, null, [
                  (D = n['append-inner']) == null ? void 0 : D.call(n, ...B),
                  e.menuIcon
                    ? f(
                        je,
                        {
                          class: 'v-autocomplete__menu-icon',
                          icon: e.menuIcon,
                          onMousedown: F,
                          onClick: tb,
                          'aria-label': l(h.value),
                          title: l(h.value),
                          tabindex: '-1',
                        },
                        null,
                      )
                    : void 0,
                ])
              },
            },
          )
        }),
        An({ isFocused: o, isPristine: i, menu: d, search: k, filteredItems: V, select: le }, a)
      )
    },
  }),
  Yw = $(
    {
      bordered: Boolean,
      color: String,
      content: [Number, String],
      dot: Boolean,
      floating: Boolean,
      icon: Ee,
      inline: Boolean,
      label: { type: String, default: '$vuetify.badge' },
      max: [Number, String],
      modelValue: { type: Boolean, default: !0 },
      offsetX: [Number, String],
      offsetY: [Number, String],
      textColor: String,
      ...ge(),
      ...Gl({ location: 'top end' }),
      ...ot(),
      ...Te(),
      ...$e(),
      ...Gn({ transition: 'scale-rotate-transition' }),
    },
    'VBadge',
  ),
  qw = J()({
    name: 'VBadge',
    inheritAttrs: !1,
    props: Yw(),
    setup(e, t) {
      const { backgroundColorClasses: n, backgroundColorStyles: l } = Je(ae(e, 'color')),
        { roundedClasses: a } = it(e),
        { t: o } = Kn(),
        { textColorClasses: i, textColorStyles: r } = Yt(ae(e, 'textColor')),
        { themeClasses: s } = hv(),
        { locationStyles: c } = ja(
          e,
          !0,
          (u) =>
            (e.floating ? (e.dot ? 2 : 4) : e.dot ? 8 : 12) +
            (['top', 'bottom'].includes(u)
              ? +(e.offsetY ?? 0)
              : ['left', 'right'].includes(u)
                ? +(e.offsetX ?? 0)
                : 0),
        )
      return (
        oe(() => {
          const u = Number(e.content),
            d = !e.max || isNaN(u) ? e.content : u <= +e.max ? u : `${e.max}+`,
            [v, m] = Qi(t.attrs, ['aria-atomic', 'aria-label', 'aria-live', 'role', 'title'])
          return f(
            e.tag,
            ve(
              {
                class: [
                  'v-badge',
                  {
                    'v-badge--bordered': e.bordered,
                    'v-badge--dot': e.dot,
                    'v-badge--floating': e.floating,
                    'v-badge--inline': e.inline,
                  },
                  e.class,
                ],
              },
              m,
              { style: e.style },
            ),
            {
              default: () => {
                var h, g
                return [
                  f('div', { class: 'v-badge__wrapper' }, [
                    (g = (h = t.slots).default) == null ? void 0 : g.call(h),
                    f(
                      Kt,
                      { transition: e.transition },
                      {
                        default: () => {
                          var y, p
                          return [
                            Ye(
                              f(
                                'span',
                                ve(
                                  {
                                    class: ['v-badge__badge', s.value, n.value, a.value, i.value],
                                    style: [l.value, r.value, e.inline ? {} : c.value],
                                    'aria-atomic': 'true',
                                    'aria-label': o(e.label, u),
                                    'aria-live': 'polite',
                                    role: 'status',
                                  },
                                  v,
                                ),
                                [
                                  e.dot
                                    ? void 0
                                    : t.slots.badge
                                      ? (p = (y = t.slots).badge) == null
                                        ? void 0
                                        : p.call(y)
                                      : e.icon
                                        ? f(je, { icon: e.icon }, null)
                                        : d,
                                ],
                              ),
                              [[Xt, e.modelValue]],
                            ),
                          ]
                        },
                      },
                    ),
                  ]),
                ]
              },
            },
          )
        }),
        {}
      )
    },
  }),
  Xw = $(
    {
      baseColor: String,
      bgColor: String,
      color: String,
      grow: Boolean,
      mode: { type: String, validator: (e) => !e || ['horizontal', 'shift'].includes(e) },
      height: { type: [Number, String], default: 56 },
      active: { type: Boolean, default: !0 },
      ...Zt(),
      ...ge(),
      ...Ht(),
      ...pt(),
      ...ot(),
      ...Nl({ name: 'bottom-navigation' }),
      ...Te({ tag: 'header' }),
      ...zl({ selectedClass: 'v-btn--selected' }),
      ...$e(),
    },
    'VBottomNavigation',
  ),
  Qw = J()({
    name: 'VBottomNavigation',
    props: Xw(),
    emits: { 'update:active': (e) => !0, 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const { themeClasses: l } = hv(),
        { borderClasses: a } = Jt(e),
        { backgroundColorClasses: o, backgroundColorStyles: i } = Je(ae(e, 'bgColor')),
        { densityClasses: r } = en(e),
        { elevationClasses: s } = Et(e),
        { roundedClasses: c } = it(e),
        { ssrBootStyles: u } = ml(),
        d = b(
          () =>
            Number(e.height) -
            (e.density === 'comfortable' ? 8 : 0) -
            (e.density === 'compact' ? 16 : 0),
        ),
        v = Ae(e, 'active', e.active),
        { layoutItemStyles: m } = Hl({
          id: e.name,
          order: b(() => parseInt(e.order, 10)),
          position: b(() => 'bottom'),
          layoutSize: b(() => (v.value ? d.value : 0)),
          elementSize: d,
          active: v,
          absolute: ae(e, 'absolute'),
        })
      return (
        hl(e, Ss),
        Qt(
          {
            VBtn: {
              baseColor: ae(e, 'baseColor'),
              color: ae(e, 'color'),
              density: ae(e, 'density'),
              stacked: b(() => e.mode !== 'horizontal'),
              variant: 'text',
            },
          },
          { scoped: !0 },
        ),
        oe(() =>
          f(
            e.tag,
            {
              class: [
                'v-bottom-navigation',
                {
                  'v-bottom-navigation--active': v.value,
                  'v-bottom-navigation--grow': e.grow,
                  'v-bottom-navigation--shift': e.mode === 'shift',
                },
                l.value,
                o.value,
                a.value,
                r.value,
                s.value,
                c.value,
                e.class,
              ],
              style: [i.value, m.value, { height: he(d.value) }, u.value, e.style],
            },
            {
              default: () => [
                n.default && f('div', { class: 'v-bottom-navigation__content' }, [n.default()]),
              ],
            },
          ),
        ),
        {}
      )
    },
  }),
  Bm = $(
    {
      fullscreen: Boolean,
      retainFocus: { type: Boolean, default: !0 },
      scrollable: Boolean,
      ...ni({
        origin: 'center center',
        scrollStrategy: 'block',
        transition: { component: hs },
        zIndex: 2400,
      }),
    },
    'VDialog',
  ),
  Sr = J()({
    name: 'VDialog',
    props: Bm(),
    emits: { 'update:modelValue': (e) => !0, afterEnter: () => !0, afterLeave: () => !0 },
    setup(e, t) {
      let { emit: n, slots: l } = t
      const a = Ae(e, 'modelValue'),
        { scopeId: o } = za(),
        i = H()
      function r(u) {
        var m, h
        const d = u.relatedTarget,
          v = u.target
        if (
          d !== v &&
          (m = i.value) != null &&
          m.contentEl &&
          (h = i.value) != null &&
          h.globalTop &&
          ![document, i.value.contentEl].includes(v) &&
          !i.value.contentEl.contains(v)
        ) {
          const g = _a(i.value.contentEl)
          if (!g.length) return
          const y = g[0],
            p = g[g.length - 1]
          d === y ? p.focus() : y.focus()
        }
      }
      ut(() => {
        document.removeEventListener('focusin', r)
      }),
        Be &&
          me(
            () => a.value && e.retainFocus,
            (u) => {
              u
                ? document.addEventListener('focusin', r)
                : document.removeEventListener('focusin', r)
            },
            { immediate: !0 },
          )
      function s() {
        var u
        n('afterEnter'),
          (u = i.value) != null &&
            u.contentEl &&
            !i.value.contentEl.contains(document.activeElement) &&
            i.value.contentEl.focus({ preventScroll: !0 })
      }
      function c() {
        n('afterLeave')
      }
      return (
        me(a, async (u) => {
          var d
          u || (await Ke(), (d = i.value.activatorEl) == null || d.focus({ preventScroll: !0 }))
        }),
        oe(() => {
          const u = Dl.filterProps(e),
            d = ve({ 'aria-haspopup': 'dialog' }, e.activatorProps),
            v = ve({ tabindex: -1 }, e.contentProps)
          return f(
            Dl,
            ve(
              {
                ref: i,
                class: [
                  'v-dialog',
                  { 'v-dialog--fullscreen': e.fullscreen, 'v-dialog--scrollable': e.scrollable },
                  e.class,
                ],
                style: e.style,
              },
              u,
              {
                modelValue: a.value,
                'onUpdate:modelValue': (m) => (a.value = m),
                'aria-modal': 'true',
                activatorProps: d,
                contentProps: v,
                height: e.fullscreen ? void 0 : e.height,
                width: e.fullscreen ? void 0 : e.width,
                maxHeight: e.fullscreen ? void 0 : e.maxHeight,
                maxWidth: e.fullscreen ? void 0 : e.maxWidth,
                role: 'dialog',
                onAfterEnter: s,
                onAfterLeave: c,
              },
              o,
            ),
            {
              activator: l.activator,
              default: function () {
                for (var m = arguments.length, h = new Array(m), g = 0; g < m; g++)
                  h[g] = arguments[g]
                return f(
                  Me,
                  { root: 'VDialog' },
                  {
                    default: () => {
                      var y
                      return [(y = l.default) == null ? void 0 : y.call(l, ...h)]
                    },
                  },
                )
              },
            },
          )
        }),
        An({}, i)
      )
    },
  }),
  Zw = $({ inset: Boolean, ...Bm({ transition: 'bottom-sheet-transition' }) }, 'VBottomSheet'),
  Jw = J()({
    name: 'VBottomSheet',
    props: Zw(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const l = Ae(e, 'modelValue')
      return (
        oe(() => {
          const a = Sr.filterProps(e)
          return f(
            Sr,
            ve(a, {
              contentClass: ['v-bottom-sheet__content', e.contentClass],
              modelValue: l.value,
              'onUpdate:modelValue': (o) => (l.value = o),
              class: ['v-bottom-sheet', { 'v-bottom-sheet--inset': e.inset }, e.class],
              style: e.style,
            }),
            n,
          )
        }),
        {}
      )
    },
  }),
  Lm = J()({
    name: 'VCardActions',
    props: ge(),
    setup(e, t) {
      let { slots: n } = t
      return (
        Qt({ VBtn: { slim: !0, variant: 'text' } }),
        oe(() => {
          var l
          return f('div', { class: ['v-card-actions', e.class], style: e.style }, [
            (l = n.default) == null ? void 0 : l.call(n),
          ])
        }),
        {}
      )
    },
  }),
  eC = $({ opacity: [Number, String], ...ge(), ...Te() }, 'VCardSubtitle'),
  Rm = J()({
    name: 'VCardSubtitle',
    props: eC(),
    setup(e, t) {
      let { slots: n } = t
      return (
        oe(() =>
          f(
            e.tag,
            {
              class: ['v-card-subtitle', e.class],
              style: [{ '--v-card-subtitle-opacity': e.opacity }, e.style],
            },
            n,
          ),
        ),
        {}
      )
    },
  }),
  Fm = Ko('v-card-title'),
  tC = $(
    {
      appendAvatar: String,
      appendIcon: Ee,
      prependAvatar: String,
      prependIcon: Ee,
      subtitle: [String, Number],
      title: [String, Number],
      ...ge(),
      ...Ht(),
    },
    'VCardItem',
  ),
  Mm = J()({
    name: 'VCardItem',
    props: tC(),
    setup(e, t) {
      let { slots: n } = t
      return (
        oe(() => {
          var c
          const l = !!(e.prependAvatar || e.prependIcon),
            a = !!(l || n.prepend),
            o = !!(e.appendAvatar || e.appendIcon),
            i = !!(o || n.append),
            r = !!(e.title != null || n.title),
            s = !!(e.subtitle != null || n.subtitle)
          return f('div', { class: ['v-card-item', e.class], style: e.style }, [
            a &&
              f('div', { key: 'prepend', class: 'v-card-item__prepend' }, [
                n.prepend
                  ? f(
                      Me,
                      {
                        key: 'prepend-defaults',
                        disabled: !l,
                        defaults: {
                          VAvatar: { density: e.density, image: e.prependAvatar },
                          VIcon: { density: e.density, icon: e.prependIcon },
                        },
                      },
                      n.prepend,
                    )
                  : f(ke, null, [
                      e.prependAvatar &&
                        f(
                          rn,
                          { key: 'prepend-avatar', density: e.density, image: e.prependAvatar },
                          null,
                        ),
                      e.prependIcon &&
                        f(
                          je,
                          { key: 'prepend-icon', density: e.density, icon: e.prependIcon },
                          null,
                        ),
                    ]),
              ]),
            f('div', { class: 'v-card-item__content' }, [
              r &&
                f(
                  Fm,
                  { key: 'title' },
                  {
                    default: () => {
                      var u
                      return [((u = n.title) == null ? void 0 : u.call(n)) ?? e.title]
                    },
                  },
                ),
              s &&
                f(
                  Rm,
                  { key: 'subtitle' },
                  {
                    default: () => {
                      var u
                      return [((u = n.subtitle) == null ? void 0 : u.call(n)) ?? e.subtitle]
                    },
                  },
                ),
              (c = n.default) == null ? void 0 : c.call(n),
            ]),
            i &&
              f('div', { key: 'append', class: 'v-card-item__append' }, [
                n.append
                  ? f(
                      Me,
                      {
                        key: 'append-defaults',
                        disabled: !o,
                        defaults: {
                          VAvatar: { density: e.density, image: e.appendAvatar },
                          VIcon: { density: e.density, icon: e.appendIcon },
                        },
                      },
                      n.append,
                    )
                  : f(ke, null, [
                      e.appendIcon &&
                        f(je, { key: 'append-icon', density: e.density, icon: e.appendIcon }, null),
                      e.appendAvatar &&
                        f(
                          rn,
                          { key: 'append-avatar', density: e.density, image: e.appendAvatar },
                          null,
                        ),
                    ]),
              ]),
          ])
        }),
        {}
      )
    },
  }),
  nC = $({ opacity: [Number, String], ...ge(), ...Te() }, 'VCardText'),
  Dm = J()({
    name: 'VCardText',
    props: nC(),
    setup(e, t) {
      let { slots: n } = t
      return (
        oe(() =>
          f(
            e.tag,
            {
              class: ['v-card-text', e.class],
              style: [{ '--v-card-text-opacity': e.opacity }, e.style],
            },
            n,
          ),
        ),
        {}
      )
    },
  }),
  lC = $(
    {
      appendAvatar: String,
      appendIcon: Ee,
      disabled: Boolean,
      flat: Boolean,
      hover: Boolean,
      image: String,
      link: { type: Boolean, default: void 0 },
      prependAvatar: String,
      prependIcon: Ee,
      ripple: { type: [Boolean, Object], default: !0 },
      subtitle: [String, Number],
      text: [String, Number],
      title: [String, Number],
      ...Zt(),
      ...ge(),
      ...Ht(),
      ...Tt(),
      ...pt(),
      ..._s(),
      ...Gl(),
      ...Cs(),
      ...ot(),
      ...Jo(),
      ...Te(),
      ...$e(),
      ...Yn({ variant: 'elevated' }),
    },
    'VCard',
  ),
  aC = J()({
    name: 'VCard',
    directives: { Ripple: qn },
    props: lC(),
    setup(e, t) {
      let { attrs: n, slots: l } = t
      const { themeClasses: a } = qe(e),
        { borderClasses: o } = Jt(e),
        { colorClasses: i, colorStyles: r, variantClasses: s } = Ha(e),
        { densityClasses: c } = en(e),
        { dimensionStyles: u } = Ot(e),
        { elevationClasses: d } = Et(e),
        { loaderClasses: v } = ws(e),
        { locationStyles: m } = ja(e),
        { positionClasses: h } = ks(e),
        { roundedClasses: g } = it(e),
        y = Zo(e, n),
        p = b(() => e.link !== !1 && y.isLink.value),
        _ = b(() => !e.disabled && e.link !== !1 && (e.link || y.isClickable.value))
      return (
        oe(() => {
          const C = p.value ? 'a' : e.tag,
            k = !!(l.title || e.title != null),
            I = !!(l.subtitle || e.subtitle != null),
            P = k || I,
            A = !!(l.append || e.appendAvatar || e.appendIcon),
            V = !!(l.prepend || e.prependAvatar || e.prependIcon),
            x = !!(l.image || e.image),
            O = P || V || A,
            T = !!(l.text || e.text != null)
          return Ye(
            f(
              C,
              ve(
                {
                  class: [
                    'v-card',
                    {
                      'v-card--disabled': e.disabled,
                      'v-card--flat': e.flat,
                      'v-card--hover': e.hover && !(e.disabled || e.flat),
                      'v-card--link': _.value,
                    },
                    a.value,
                    o.value,
                    i.value,
                    c.value,
                    d.value,
                    v.value,
                    h.value,
                    g.value,
                    s.value,
                    e.class,
                  ],
                  style: [r.value, u.value, m.value, e.style],
                  onClick: _.value && y.navigate,
                  tabindex: e.disabled ? -1 : void 0,
                },
                y.linkProps,
              ),
              {
                default: () => {
                  var E
                  return [
                    x &&
                      f('div', { key: 'image', class: 'v-card__image' }, [
                        l.image
                          ? f(
                              Me,
                              {
                                key: 'image-defaults',
                                disabled: !e.image,
                                defaults: { VImg: { cover: !0, src: e.image } },
                              },
                              l.image,
                            )
                          : f(Na, { key: 'image-img', cover: !0, src: e.image }, null),
                      ]),
                    f(
                      Kv,
                      {
                        name: 'v-card',
                        active: !!e.loading,
                        color: typeof e.loading == 'boolean' ? void 0 : e.loading,
                      },
                      { default: l.loader },
                    ),
                    O &&
                      f(
                        Mm,
                        {
                          key: 'item',
                          prependAvatar: e.prependAvatar,
                          prependIcon: e.prependIcon,
                          title: e.title,
                          subtitle: e.subtitle,
                          appendAvatar: e.appendAvatar,
                          appendIcon: e.appendIcon,
                        },
                        {
                          default: l.item,
                          prepend: l.prepend,
                          title: l.title,
                          subtitle: l.subtitle,
                          append: l.append,
                        },
                      ),
                    T &&
                      f(
                        Dm,
                        { key: 'text' },
                        {
                          default: () => {
                            var R
                            return [((R = l.text) == null ? void 0 : R.call(l)) ?? e.text]
                          },
                        },
                      ),
                    (E = l.default) == null ? void 0 : E.call(l),
                    l.actions && f(Lm, null, { default: l.actions }),
                    jl(_.value, 'v-card'),
                  ]
                },
              },
            ),
            [[qt('ripple'), _.value && e.ripple]],
          )
        }),
        {}
      )
    },
  }),
  oC = (e) => {
    const { touchstartX: t, touchendX: n, touchstartY: l, touchendY: a } = e,
      o = 0.5,
      i = 16
    ;(e.offsetX = n - t),
      (e.offsetY = a - l),
      Math.abs(e.offsetY) < o * Math.abs(e.offsetX) &&
        (e.left && n < t - i && e.left(e), e.right && n > t + i && e.right(e)),
      Math.abs(e.offsetX) < o * Math.abs(e.offsetY) &&
        (e.up && a < l - i && e.up(e), e.down && a > l + i && e.down(e))
  }
function iC(e, t) {
  var l
  const n = e.changedTouches[0]
  ;(t.touchstartX = n.clientX),
    (t.touchstartY = n.clientY),
    (l = t.start) == null || l.call(t, { originalEvent: e, ...t })
}
function rC(e, t) {
  var l
  const n = e.changedTouches[0]
  ;(t.touchendX = n.clientX),
    (t.touchendY = n.clientY),
    (l = t.end) == null || l.call(t, { originalEvent: e, ...t }),
    oC(t)
}
function sC(e, t) {
  var l
  const n = e.changedTouches[0]
  ;(t.touchmoveX = n.clientX),
    (t.touchmoveY = n.clientY),
    (l = t.move) == null || l.call(t, { originalEvent: e, ...t })
}
function uC() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
  const t = {
    touchstartX: 0,
    touchstartY: 0,
    touchendX: 0,
    touchendY: 0,
    touchmoveX: 0,
    touchmoveY: 0,
    offsetX: 0,
    offsetY: 0,
    left: e.left,
    right: e.right,
    up: e.up,
    down: e.down,
    start: e.start,
    move: e.move,
    end: e.end,
  }
  return { touchstart: (n) => iC(n, t), touchend: (n) => rC(n, t), touchmove: (n) => sC(n, t) }
}
function cC(e, t) {
  var r
  const n = t.value,
    l = n != null && n.parent ? e.parentElement : e,
    a = (n == null ? void 0 : n.options) ?? { passive: !0 },
    o = (r = t.instance) == null ? void 0 : r.$.uid
  if (!l || !o) return
  const i = uC(t.value)
  ;(l._touchHandlers = l._touchHandlers ?? Object.create(null)),
    (l._touchHandlers[o] = i),
    Ff(i).forEach((s) => {
      l.addEventListener(s, i[s], a)
    })
}
function dC(e, t) {
  var o, i
  const n = (o = t.value) != null && o.parent ? e.parentElement : e,
    l = (i = t.instance) == null ? void 0 : i.$.uid
  if (!(n != null && n._touchHandlers) || !l) return
  const a = n._touchHandlers[l]
  Ff(a).forEach((r) => {
    n.removeEventListener(r, a[r])
  }),
    delete n._touchHandlers[l]
}
const $m = { mounted: cC, unmounted: dC },
  Nm = Symbol.for('vuetify:v-window'),
  Hm = Symbol.for('vuetify:v-window-group'),
  jm = $(
    {
      continuous: Boolean,
      nextIcon: { type: [Boolean, String, Function, Object], default: '$next' },
      prevIcon: { type: [Boolean, String, Function, Object], default: '$prev' },
      reverse: Boolean,
      showArrows: {
        type: [Boolean, String],
        validator: (e) => typeof e == 'boolean' || e === 'hover',
      },
      touch: { type: [Object, Boolean], default: void 0 },
      direction: { type: String, default: 'horizontal' },
      modelValue: null,
      disabled: Boolean,
      selectedClass: { type: String, default: 'v-window-item--active' },
      mandatory: { type: [Boolean, String], default: 'force' },
      ...ge(),
      ...Te(),
      ...$e(),
    },
    'VWindow',
  ),
  Xc = J()({
    name: 'VWindow',
    directives: { Touch: $m },
    props: jm(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const { themeClasses: l } = qe(e),
        { isRtl: a } = ct(),
        { t: o } = Kn(),
        i = hl(e, Hm),
        r = H(),
        s = b(() => (a.value ? !e.reverse : e.reverse)),
        c = ue(!1),
        u = b(() => {
          const k = e.direction === 'vertical' ? 'y' : 'x',
            P = (s.value ? !c.value : c.value) ? '-reverse' : ''
          return `v-window-${k}${P}-transition`
        }),
        d = ue(0),
        v = H(void 0),
        m = b(() => i.items.value.findIndex((k) => i.selected.value.includes(k.id)))
      me(m, (k, I) => {
        const P = i.items.value.length,
          A = P - 1
        P <= 2
          ? (c.value = k < I)
          : k === A && I === 0
            ? (c.value = !0)
            : k === 0 && I === A
              ? (c.value = !1)
              : (c.value = k < I)
      }),
        Ze(Nm, {
          transition: u,
          isReversed: c,
          transitionCount: d,
          transitionHeight: v,
          rootRef: r,
        })
      const h = b(() => e.continuous || m.value !== 0),
        g = b(() => e.continuous || m.value !== i.items.value.length - 1)
      function y() {
        h.value && i.prev()
      }
      function p() {
        g.value && i.next()
      }
      const _ = b(() => {
          const k = [],
            I = {
              icon: a.value ? e.nextIcon : e.prevIcon,
              class: `v-window__${s.value ? 'right' : 'left'}`,
              onClick: i.prev,
              'aria-label': o('$vuetify.carousel.prev'),
            }
          k.push(h.value ? (n.prev ? n.prev({ props: I }) : f(gn, I, null)) : f('div', null, null))
          const P = {
            icon: a.value ? e.prevIcon : e.nextIcon,
            class: `v-window__${s.value ? 'left' : 'right'}`,
            onClick: i.next,
            'aria-label': o('$vuetify.carousel.next'),
          }
          return (
            k.push(
              g.value ? (n.next ? n.next({ props: P }) : f(gn, P, null)) : f('div', null, null),
            ),
            k
          )
        }),
        C = b(() =>
          e.touch === !1
            ? e.touch
            : {
                ...{
                  left: () => {
                    s.value ? y() : p()
                  },
                  right: () => {
                    s.value ? p() : y()
                  },
                  start: (I) => {
                    let { originalEvent: P } = I
                    P.stopPropagation()
                  },
                },
                ...(e.touch === !0 ? {} : e.touch),
              },
        )
      return (
        oe(() =>
          Ye(
            f(
              e.tag,
              {
                ref: r,
                class: [
                  'v-window',
                  { 'v-window--show-arrows-on-hover': e.showArrows === 'hover' },
                  l.value,
                  e.class,
                ],
                style: e.style,
              },
              {
                default: () => {
                  var k, I
                  return [
                    f('div', { class: 'v-window__container', style: { height: v.value } }, [
                      (k = n.default) == null ? void 0 : k.call(n, { group: i }),
                      e.showArrows !== !1 && f('div', { class: 'v-window__controls' }, [_.value]),
                    ]),
                    (I = n.additional) == null ? void 0 : I.call(n, { group: i }),
                  ]
                },
              },
            ),
            [[qt('touch'), C.value]],
          ),
        ),
        { group: i }
      )
    },
  }),
  zm = $(
    {
      reverseTransition: { type: [Boolean, String], default: void 0 },
      transition: { type: [Boolean, String], default: void 0 },
      ...ge(),
      ...Wl(),
      ...Ls(),
    },
    'VWindowItem',
  ),
  Qc = J()({
    name: 'VWindowItem',
    directives: { Touch: $m },
    props: zm(),
    emits: { 'group:selected': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const l = Ie(Nm),
        a = Ul(e, Hm),
        { isBooted: o } = ml()
      if (!l || !a) throw new Error('[Vuetify] VWindowItem must be used inside VWindow')
      const i = ue(!1),
        r = b(
          () => o.value && (l.isReversed.value ? e.reverseTransition !== !1 : e.transition !== !1),
        )
      function s() {
        !i.value ||
          !l ||
          ((i.value = !1),
          l.transitionCount.value > 0 &&
            ((l.transitionCount.value -= 1),
            l.transitionCount.value === 0 && (l.transitionHeight.value = void 0)))
      }
      function c() {
        var h
        i.value ||
          !l ||
          ((i.value = !0),
          l.transitionCount.value === 0 &&
            (l.transitionHeight.value = he(
              (h = l.rootRef.value) == null ? void 0 : h.clientHeight,
            )),
          (l.transitionCount.value += 1))
      }
      function u() {
        s()
      }
      function d(h) {
        i.value &&
          Ke(() => {
            !r.value || !i.value || !l || (l.transitionHeight.value = he(h.clientHeight))
          })
      }
      const v = b(() => {
          const h = l.isReversed.value ? e.reverseTransition : e.transition
          return r.value
            ? {
                name: typeof h != 'string' ? l.transition.value : h,
                onBeforeEnter: c,
                onAfterEnter: s,
                onEnterCancelled: u,
                onBeforeLeave: c,
                onAfterLeave: s,
                onLeaveCancelled: u,
                onEnter: d,
              }
            : !1
        }),
        { hasContent: m } = Rs(e, a.isSelected)
      return (
        oe(() =>
          f(
            Kt,
            { transition: v.value, disabled: !o.value },
            {
              default: () => {
                var h
                return [
                  Ye(
                    f(
                      'div',
                      { class: ['v-window-item', a.selectedClass.value, e.class], style: e.style },
                      [m.value && ((h = n.default) == null ? void 0 : h.call(n))],
                    ),
                    [[Xt, a.isSelected.value]],
                  ),
                ]
              },
            },
          ),
        ),
        { groupItem: a }
      )
    },
  }),
  fC = $(
    {
      color: { type: Object },
      disabled: Boolean,
      dotSize: { type: [Number, String], default: 10 },
      height: { type: [Number, String], default: 150 },
      width: { type: [Number, String], default: 300 },
      ...ge(),
    },
    'VColorPickerCanvas',
  ),
  vC = un({
    name: 'VColorPickerCanvas',
    props: fC(),
    emits: { 'update:color': (e) => !0, 'update:position': (e) => !0 },
    setup(e, t) {
      let { emit: n } = t
      const l = ue(!1),
        a = H(),
        o = ue(parseFloat(e.width)),
        i = ue(parseFloat(e.height)),
        r = H({ x: 0, y: 0 }),
        s = b({
          get: () => r.value,
          set(y) {
            var C, k
            if (!a.value) return
            const { x: p, y: _ } = y
            ;(r.value = y),
              n('update:color', {
                h: ((C = e.color) == null ? void 0 : C.h) ?? 0,
                s: dt(p, 0, o.value) / o.value,
                v: 1 - dt(_, 0, i.value) / i.value,
                a: ((k = e.color) == null ? void 0 : k.a) ?? 1,
              })
          },
        }),
        c = b(() => {
          const { x: y, y: p } = s.value,
            _ = parseInt(e.dotSize, 10) / 2
          return {
            width: he(e.dotSize),
            height: he(e.dotSize),
            transform: `translate(${he(y - _)}, ${he(p - _)})`,
          }
        }),
        { resizeRef: u } = Vn((y) => {
          var C
          if (!((C = u.el) != null && C.offsetParent)) return
          const { width: p, height: _ } = y[0].contentRect
          ;(o.value = p), (i.value = _)
        })
      function d(y, p, _) {
        const { left: C, top: k, width: I, height: P } = _
        s.value = { x: dt(y - C, 0, I), y: dt(p - k, 0, P) }
      }
      function v(y) {
        y.type === 'mousedown' && y.preventDefault(),
          !e.disabled &&
            (m(y),
            window.addEventListener('mousemove', m),
            window.addEventListener('mouseup', h),
            window.addEventListener('touchmove', m),
            window.addEventListener('touchend', h))
      }
      function m(y) {
        if (e.disabled || !a.value) return
        l.value = !0
        const p = eb(y)
        d(p.clientX, p.clientY, a.value.getBoundingClientRect())
      }
      function h() {
        window.removeEventListener('mousemove', m),
          window.removeEventListener('mouseup', h),
          window.removeEventListener('touchmove', m),
          window.removeEventListener('touchend', h)
      }
      function g() {
        var k
        if (!a.value) return
        const y = a.value,
          p = y.getContext('2d')
        if (!p) return
        const _ = p.createLinearGradient(0, 0, y.width, 0)
        _.addColorStop(0, 'hsla(0, 0%, 100%, 1)'),
          _.addColorStop(1, `hsla(${((k = e.color) == null ? void 0 : k.h) ?? 0}, 100%, 50%, 1)`),
          (p.fillStyle = _),
          p.fillRect(0, 0, y.width, y.height)
        const C = p.createLinearGradient(0, 0, 0, y.height)
        C.addColorStop(0, 'hsla(0, 0%, 0%, 0)'),
          C.addColorStop(1, 'hsla(0, 0%, 0%, 1)'),
          (p.fillStyle = C),
          p.fillRect(0, 0, y.width, y.height)
      }
      return (
        me(
          () => {
            var y
            return (y = e.color) == null ? void 0 : y.h
          },
          g,
          { immediate: !0 },
        ),
        me(
          () => [o.value, i.value],
          (y, p) => {
            g(), (r.value = { x: (s.value.x * y[0]) / p[0], y: (s.value.y * y[1]) / p[1] })
          },
          { flush: 'post' },
        ),
        me(
          () => e.color,
          () => {
            if (l.value) {
              l.value = !1
              return
            }
            r.value = e.color
              ? { x: e.color.s * o.value, y: (1 - e.color.v) * i.value }
              : { x: 0, y: 0 }
          },
          { deep: !0, immediate: !0 },
        ),
        Vt(() => g()),
        oe(() =>
          f(
            'div',
            {
              ref: u,
              class: ['v-color-picker-canvas', e.class],
              style: e.style,
              onMousedown: v,
              onTouchstartPassive: v,
            },
            [
              f('canvas', { ref: a, width: o.value, height: i.value }, null),
              e.color &&
                f(
                  'div',
                  {
                    class: [
                      'v-color-picker-canvas__dot',
                      { 'v-color-picker-canvas__dot--disabled': e.disabled },
                    ],
                    style: c.value,
                  },
                  null,
                ),
            ],
          ),
        ),
        {}
      )
    },
  })
function mC(e, t) {
  if (t) {
    const { a: n, ...l } = e
    return l
  }
  return e
}
function hC(e, t) {
  if (t == null || typeof t == 'string') {
    const n = Jf(e)
    return e.a === 1 ? n.slice(0, 7) : n
  }
  if (typeof t == 'object') {
    let n
    return (
      ll(t, ['r', 'g', 'b'])
        ? (n = xn(e))
        : ll(t, ['h', 's', 'l'])
          ? (n = Gf(e))
          : ll(t, ['h', 's', 'v']) && (n = e),
      mC(n, !ll(t, ['a']) && e.a === 1)
    )
  }
  return e
}
const Pl = { h: 0, s: 0, v: 0, a: 1 },
  _r = {
    inputProps: { type: 'number', min: 0 },
    inputs: [
      {
        label: 'R',
        max: 255,
        step: 1,
        getValue: (e) => Math.round(e.r),
        getColor: (e, t) => ({ ...e, r: Number(t) }),
      },
      {
        label: 'G',
        max: 255,
        step: 1,
        getValue: (e) => Math.round(e.g),
        getColor: (e, t) => ({ ...e, g: Number(t) }),
      },
      {
        label: 'B',
        max: 255,
        step: 1,
        getValue: (e) => Math.round(e.b),
        getColor: (e, t) => ({ ...e, b: Number(t) }),
      },
      {
        label: 'A',
        max: 1,
        step: 0.01,
        getValue: (e) => {
          let { a: t } = e
          return t != null ? Math.round(t * 100) / 100 : 1
        },
        getColor: (e, t) => ({ ...e, a: Number(t) }),
      },
    ],
    to: xn,
    from: Uo,
  }
var id
const gC = { ..._r, inputs: (id = _r.inputs) == null ? void 0 : id.slice(0, 3) },
  wr = {
    inputProps: { type: 'number', min: 0 },
    inputs: [
      {
        label: 'H',
        max: 360,
        step: 1,
        getValue: (e) => Math.round(e.h),
        getColor: (e, t) => ({ ...e, h: Number(t) }),
      },
      {
        label: 'S',
        max: 1,
        step: 0.01,
        getValue: (e) => Math.round(e.s * 100) / 100,
        getColor: (e, t) => ({ ...e, s: Number(t) }),
      },
      {
        label: 'L',
        max: 1,
        step: 0.01,
        getValue: (e) => Math.round(e.l * 100) / 100,
        getColor: (e, t) => ({ ...e, l: Number(t) }),
      },
      {
        label: 'A',
        max: 1,
        step: 0.01,
        getValue: (e) => {
          let { a: t } = e
          return t != null ? Math.round(t * 100) / 100 : 1
        },
        getColor: (e, t) => ({ ...e, a: Number(t) }),
      },
    ],
    to: Gf,
    from: os,
  },
  yC = { ...wr, inputs: wr.inputs.slice(0, 3) },
  Wm = {
    inputProps: { type: 'text' },
    inputs: [{ label: 'HEXA', getValue: (e) => e, getColor: (e, t) => t }],
    to: Jf,
    from: Zf,
  },
  bC = { ...Wm, inputs: [{ label: 'HEX', getValue: (e) => e.slice(0, 7), getColor: (e, t) => t }] },
  sl = { rgb: gC, rgba: _r, hsl: yC, hsla: wr, hex: bC, hexa: Wm },
  pC = (e) => {
    let { label: t, ...n } = e
    return f('div', { class: 'v-color-picker-edit__input' }, [
      f('input', n, null),
      f('span', null, [t]),
    ])
  },
  SC = $(
    {
      color: Object,
      disabled: Boolean,
      mode: { type: String, default: 'rgba', validator: (e) => Object.keys(sl).includes(e) },
      modes: {
        type: Array,
        default: () => Object.keys(sl),
        validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(sl).includes(t)),
      },
      ...ge(),
    },
    'VColorPickerEdit',
  ),
  _C = un({
    name: 'VColorPickerEdit',
    props: SC(),
    emits: { 'update:color': (e) => !0, 'update:mode': (e) => !0 },
    setup(e, t) {
      let { emit: n } = t
      const l = b(() => e.modes.map((o) => ({ ...sl[o], name: o }))),
        a = b(() => {
          var r
          const o = l.value.find((s) => s.name === e.mode)
          if (!o) return []
          const i = e.color ? o.to(e.color) : null
          return (r = o.inputs) == null
            ? void 0
            : r.map((s) => {
                let { getValue: c, getColor: u, ...d } = s
                return {
                  ...o.inputProps,
                  ...d,
                  disabled: e.disabled,
                  value: i && c(i),
                  onChange: (v) => {
                    const m = v.target
                    m && n('update:color', o.from(u(i ?? o.to(Pl), m.value)))
                  },
                }
              })
        })
      return (
        oe(() => {
          var o
          return f('div', { class: ['v-color-picker-edit', e.class], style: e.style }, [
            (o = a.value) == null ? void 0 : o.map((i) => f(pC, i, null)),
            l.value.length > 1 &&
              f(
                gn,
                {
                  icon: '$unfold',
                  size: 'x-small',
                  variant: 'plain',
                  onClick: () => {
                    const i = l.value.findIndex((r) => r.name === e.mode)
                    n('update:mode', l.value[(i + 1) % l.value.length].name)
                  },
                },
                null,
              ),
          ])
        }),
        {}
      )
    },
  }),
  $s = Symbol.for('vuetify:v-slider')
function wC(e, t, n) {
  const l = n === 'vertical',
    a = t.getBoundingClientRect(),
    o = 'touches' in e ? e.touches[0] : e
  return l ? o.clientY - (a.top + a.height / 2) : o.clientX - (a.left + a.width / 2)
}
function CC(e, t) {
  return 'touches' in e && e.touches.length
    ? e.touches[0][t]
    : 'changedTouches' in e && e.changedTouches.length
      ? e.changedTouches[0][t]
      : e[t]
}
const kC = $(
    {
      disabled: { type: Boolean, default: null },
      error: Boolean,
      readonly: { type: Boolean, default: null },
      max: { type: [Number, String], default: 100 },
      min: { type: [Number, String], default: 0 },
      step: { type: [Number, String], default: 0 },
      thumbColor: String,
      thumbLabel: {
        type: [Boolean, String],
        default: void 0,
        validator: (e) => typeof e == 'boolean' || e === 'always',
      },
      thumbSize: { type: [Number, String], default: 20 },
      showTicks: {
        type: [Boolean, String],
        default: !1,
        validator: (e) => typeof e == 'boolean' || e === 'always',
      },
      ticks: { type: [Array, Object] },
      tickSize: { type: [Number, String], default: 2 },
      color: String,
      trackColor: String,
      trackFillColor: String,
      trackSize: { type: [Number, String], default: 4 },
      direction: {
        type: String,
        default: 'horizontal',
        validator: (e) => ['vertical', 'horizontal'].includes(e),
      },
      reverse: Boolean,
      ...ot(),
      ...pt({ elevation: 2 }),
      ripple: { type: Boolean, default: !0 },
    },
    'Slider',
  ),
  xC = (e) => {
    const t = b(() => parseFloat(e.min)),
      n = b(() => parseFloat(e.max)),
      l = b(() => (+e.step > 0 ? parseFloat(e.step) : 0)),
      a = b(() => Math.max(Du(l.value), Du(t.value)))
    function o(i) {
      if (((i = parseFloat(i)), l.value <= 0)) return i
      const r = dt(i, t.value, n.value),
        s = t.value % l.value,
        c = Math.round((r - s) / l.value) * l.value + s
      return parseFloat(Math.min(c, n.value).toFixed(a.value))
    }
    return { min: t, max: n, step: l, decimals: a, roundValue: o }
  },
  VC = (e) => {
    let {
      props: t,
      steps: n,
      onSliderStart: l,
      onSliderMove: a,
      onSliderEnd: o,
      getActiveThumb: i,
    } = e
    const { isRtl: r } = ct(),
      s = ae(t, 'reverse'),
      c = b(() => t.direction === 'vertical'),
      u = b(() => c.value !== s.value),
      { min: d, max: v, step: m, decimals: h, roundValue: g } = n,
      y = b(() => parseInt(t.thumbSize, 10)),
      p = b(() => parseInt(t.tickSize, 10)),
      _ = b(() => parseInt(t.trackSize, 10)),
      C = b(() => (v.value - d.value) / m.value),
      k = ae(t, 'disabled'),
      I = b(() => (t.error || t.disabled ? void 0 : (t.thumbColor ?? t.color))),
      P = b(() => (t.error || t.disabled ? void 0 : (t.trackColor ?? t.color))),
      A = b(() => (t.error || t.disabled ? void 0 : (t.trackFillColor ?? t.color))),
      V = ue(!1),
      x = ue(0),
      O = H(),
      T = H()
    function E(j) {
      var B
      const L = t.direction === 'vertical',
        Y = L ? 'top' : 'left',
        Z = L ? 'height' : 'width',
        le = L ? 'clientY' : 'clientX',
        { [Y]: K, [Z]: de } = (B = O.value) == null ? void 0 : B.$el.getBoundingClientRect(),
        S = CC(j, le)
      let w = Math.min(Math.max((S - K - x.value) / de, 0), 1) || 0
      return (
        (L ? u.value : u.value !== r.value) && (w = 1 - w), g(d.value + w * (v.value - d.value))
      )
    }
    const R = (j) => {
        o({ value: E(j) }), (V.value = !1), (x.value = 0)
      },
      N = (j) => {
        ;(T.value = i(j)),
          T.value &&
            (T.value.focus(),
            (V.value = !0),
            T.value.contains(j.target)
              ? (x.value = wC(j, T.value, t.direction))
              : ((x.value = 0), a({ value: E(j) })),
            l({ value: E(j) }))
      },
      q = { passive: !0, capture: !0 }
    function G(j) {
      a({ value: E(j) })
    }
    function ee(j) {
      j.stopPropagation(),
        j.preventDefault(),
        R(j),
        window.removeEventListener('mousemove', G, q),
        window.removeEventListener('mouseup', ee)
    }
    function X(j) {
      var L
      R(j),
        window.removeEventListener('touchmove', G, q),
        (L = j.target) == null || L.removeEventListener('touchend', X)
    }
    function U(j) {
      var L
      N(j),
        window.addEventListener('touchmove', G, q),
        (L = j.target) == null || L.addEventListener('touchend', X, { passive: !1 })
    }
    function F(j) {
      j.preventDefault(),
        N(j),
        window.addEventListener('mousemove', G, q),
        window.addEventListener('mouseup', ee, { passive: !1 })
    }
    const M = (j) => {
        const L = ((j - d.value) / (v.value - d.value)) * 100
        return dt(isNaN(L) ? 0 : L, 0, 100)
      },
      ne = ae(t, 'showTicks'),
      be = b(() =>
        ne.value
          ? t.ticks
            ? Array.isArray(t.ticks)
              ? t.ticks.map((j) => ({ value: j, position: M(j), label: j.toString() }))
              : Object.keys(t.ticks).map((j) => ({
                  value: parseFloat(j),
                  position: M(parseFloat(j)),
                  label: t.ticks[j],
                }))
            : C.value !== 1 / 0
              ? Qr(C.value + 1).map((j) => {
                  const L = d.value + j * m.value
                  return { value: L, position: M(L) }
                })
              : []
          : [],
      ),
      ie = b(() =>
        be.value.some((j) => {
          let { label: L } = j
          return !!L
        }),
      ),
      pe = {
        activeThumbRef: T,
        color: ae(t, 'color'),
        decimals: h,
        disabled: k,
        direction: ae(t, 'direction'),
        elevation: ae(t, 'elevation'),
        hasLabels: ie,
        isReversed: s,
        indexFromEnd: u,
        min: d,
        max: v,
        mousePressed: V,
        numTicks: C,
        onSliderMousedown: F,
        onSliderTouchstart: U,
        parsedTicks: be,
        parseMouseMove: E,
        position: M,
        readonly: ae(t, 'readonly'),
        rounded: ae(t, 'rounded'),
        roundValue: g,
        showTicks: ne,
        startOffset: x,
        step: m,
        thumbSize: y,
        thumbColor: I,
        thumbLabel: ae(t, 'thumbLabel'),
        ticks: ae(t, 'ticks'),
        tickSize: p,
        trackColor: P,
        trackContainerRef: O,
        trackFillColor: A,
        trackSize: _,
        vertical: c,
      }
    return Ze($s, pe), pe
  },
  EC = $(
    {
      focused: Boolean,
      max: { type: Number, required: !0 },
      min: { type: Number, required: !0 },
      modelValue: { type: Number, required: !0 },
      position: { type: Number, required: !0 },
      ripple: { type: [Boolean, Object], default: !0 },
      name: String,
      ...ge(),
    },
    'VSliderThumb',
  ),
  PC = J()({
    name: 'VSliderThumb',
    directives: { Ripple: qn },
    props: EC(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { slots: n, emit: l } = t
      const a = Ie($s),
        { isRtl: o, rtlClasses: i } = ct()
      if (!a)
        throw new Error('[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider')
      const {
          thumbColor: r,
          step: s,
          disabled: c,
          thumbSize: u,
          thumbLabel: d,
          direction: v,
          isReversed: m,
          vertical: h,
          readonly: g,
          elevation: y,
          mousePressed: p,
          decimals: _,
          indexFromEnd: C,
        } = a,
        k = b(() => (c.value ? void 0 : y.value)),
        { elevationClasses: I } = Et(k),
        { textColorClasses: P, textColorStyles: A } = Yt(r),
        { pageup: V, pagedown: x, end: O, home: T, left: E, right: R, down: N, up: q } = qy,
        G = [V, x, O, T, E, R, N, q],
        ee = b(() => (s.value ? [1, 2, 3] : [1, 5, 10]))
      function X(F, M) {
        if (!G.includes(F.key)) return
        F.preventDefault()
        const ne = s.value || 0.1,
          be = (e.max - e.min) / ne
        if ([E, R, N, q].includes(F.key)) {
          const pe = (h.value
              ? [o.value ? E : R, m.value ? N : q]
              : C.value !== o.value
                ? [E, q]
                : [R, q]
            ).includes(F.key)
              ? 1
              : -1,
            j = F.shiftKey ? 2 : F.ctrlKey ? 1 : 0
          M = M + pe * ne * ee.value[j]
        } else if (F.key === T) M = e.min
        else if (F.key === O) M = e.max
        else {
          const ie = F.key === x ? 1 : -1
          M = M - ie * ne * (be > 100 ? be / 10 : 10)
        }
        return Math.max(e.min, Math.min(e.max, M))
      }
      function U(F) {
        const M = X(F, e.modelValue)
        M != null && l('update:modelValue', M)
      }
      return (
        oe(() => {
          const F = he(C.value ? 100 - e.position : e.position, '%')
          return f(
            'div',
            {
              class: [
                'v-slider-thumb',
                {
                  'v-slider-thumb--focused': e.focused,
                  'v-slider-thumb--pressed': e.focused && p.value,
                },
                e.class,
                i.value,
              ],
              style: [
                { '--v-slider-thumb-position': F, '--v-slider-thumb-size': he(u.value) },
                e.style,
              ],
              role: 'slider',
              tabindex: c.value ? -1 : 0,
              'aria-label': e.name,
              'aria-valuemin': e.min,
              'aria-valuemax': e.max,
              'aria-valuenow': e.modelValue,
              'aria-readonly': !!g.value,
              'aria-orientation': v.value,
              onKeydown: g.value ? void 0 : U,
            },
            [
              f(
                'div',
                { class: ['v-slider-thumb__surface', P.value, I.value], style: { ...A.value } },
                null,
              ),
              Ye(f('div', { class: ['v-slider-thumb__ripple', P.value], style: A.value }, null), [
                [qt('ripple'), e.ripple, null, { circle: !0, center: !0 }],
              ]),
              f(
                Dv,
                { origin: 'bottom center' },
                {
                  default: () => {
                    var M
                    return [
                      Ye(
                        f('div', { class: 'v-slider-thumb__label-container' }, [
                          f('div', { class: ['v-slider-thumb__label'] }, [
                            f('div', null, [
                              ((M = n['thumb-label']) == null
                                ? void 0
                                : M.call(n, { modelValue: e.modelValue })) ??
                                e.modelValue.toFixed(s.value ? _.value : 1),
                            ]),
                          ]),
                        ]),
                        [[Xt, (d.value && e.focused) || d.value === 'always']],
                      ),
                    ]
                  },
                },
              ),
            ],
          )
        }),
        {}
      )
    },
  }),
  AC = $(
    { start: { type: Number, required: !0 }, stop: { type: Number, required: !0 }, ...ge() },
    'VSliderTrack',
  ),
  IC = J()({
    name: 'VSliderTrack',
    props: AC(),
    emits: {},
    setup(e, t) {
      let { slots: n } = t
      const l = Ie($s)
      if (!l) throw new Error('[Vuetify] v-slider-track must be inside v-slider or v-range-slider')
      const {
          color: a,
          parsedTicks: o,
          rounded: i,
          showTicks: r,
          tickSize: s,
          trackColor: c,
          trackFillColor: u,
          trackSize: d,
          vertical: v,
          min: m,
          max: h,
          indexFromEnd: g,
        } = l,
        { roundedClasses: y } = it(i),
        { backgroundColorClasses: p, backgroundColorStyles: _ } = Je(u),
        { backgroundColorClasses: C, backgroundColorStyles: k } = Je(c),
        I = b(() => `inset-${v.value ? 'block' : 'inline'}-${g.value ? 'end' : 'start'}`),
        P = b(() => (v.value ? 'height' : 'width')),
        A = b(() => ({ [I.value]: '0%', [P.value]: '100%' })),
        V = b(() => e.stop - e.start),
        x = b(() => ({ [I.value]: he(e.start, '%'), [P.value]: he(V.value, '%') })),
        O = b(() =>
          r.value
            ? (v.value ? o.value.slice().reverse() : o.value).map((E, R) => {
                var q
                const N = E.value !== m.value && E.value !== h.value ? he(E.position, '%') : void 0
                return f(
                  'div',
                  {
                    key: E.value,
                    class: [
                      'v-slider-track__tick',
                      {
                        'v-slider-track__tick--filled':
                          E.position >= e.start && E.position <= e.stop,
                        'v-slider-track__tick--first': E.value === m.value,
                        'v-slider-track__tick--last': E.value === h.value,
                      },
                    ],
                    style: { [I.value]: N },
                  },
                  [
                    (E.label || n['tick-label']) &&
                      f('div', { class: 'v-slider-track__tick-label' }, [
                        ((q = n['tick-label']) == null
                          ? void 0
                          : q.call(n, { tick: E, index: R })) ?? E.label,
                      ]),
                  ],
                )
              })
            : [],
        )
      return (
        oe(() =>
          f(
            'div',
            {
              class: ['v-slider-track', y.value, e.class],
              style: [
                { '--v-slider-track-size': he(d.value), '--v-slider-tick-size': he(s.value) },
                e.style,
              ],
            },
            [
              f(
                'div',
                {
                  class: [
                    'v-slider-track__background',
                    C.value,
                    { 'v-slider-track__background--opacity': !!a.value || !u.value },
                  ],
                  style: { ...A.value, ...k.value },
                },
                null,
              ),
              f(
                'div',
                { class: ['v-slider-track__fill', p.value], style: { ...x.value, ..._.value } },
                null,
              ),
              r.value &&
                f(
                  'div',
                  {
                    class: [
                      'v-slider-track__ticks',
                      { 'v-slider-track__ticks--always-show': r.value === 'always' },
                    ],
                  },
                  [O.value],
                ),
            ],
          ),
        ),
        {}
      )
    },
  }),
  TC = $(
    { ...Vs(), ...kC(), ...ql(), modelValue: { type: [Number, String], default: 0 } },
    'VSlider',
  ),
  Zc = J()({
    name: 'VSlider',
    props: TC(),
    emits: {
      'update:focused': (e) => !0,
      'update:modelValue': (e) => !0,
      start: (e) => !0,
      end: (e) => !0,
    },
    setup(e, t) {
      let { slots: n, emit: l } = t
      const a = H(),
        { rtlClasses: o } = ct(),
        i = xC(e),
        r = Ae(e, 'modelValue', void 0, (P) => i.roundValue(P ?? i.min.value)),
        {
          min: s,
          max: c,
          mousePressed: u,
          roundValue: d,
          onSliderMousedown: v,
          onSliderTouchstart: m,
          trackContainerRef: h,
          position: g,
          hasLabels: y,
          readonly: p,
        } = VC({
          props: e,
          steps: i,
          onSliderStart: () => {
            l('start', r.value)
          },
          onSliderEnd: (P) => {
            let { value: A } = P
            const V = d(A)
            ;(r.value = V), l('end', V)
          },
          onSliderMove: (P) => {
            let { value: A } = P
            return (r.value = d(A))
          },
          getActiveThumb: () => {
            var P
            return (P = a.value) == null ? void 0 : P.$el
          },
        }),
        { isFocused: _, focus: C, blur: k } = Yl(e),
        I = b(() => g(r.value))
      return (
        oe(() => {
          const P = yn.filterProps(e),
            A = !!(e.label || n.label || n.prepend)
          return f(
            yn,
            ve(
              {
                class: [
                  'v-slider',
                  {
                    'v-slider--has-labels': !!n['tick-label'] || y.value,
                    'v-slider--focused': _.value,
                    'v-slider--pressed': u.value,
                    'v-slider--disabled': e.disabled,
                  },
                  o.value,
                  e.class,
                ],
                style: e.style,
              },
              P,
              { focused: _.value },
            ),
            {
              ...n,
              prepend: A
                ? (V) => {
                    var x, O
                    return f(ke, null, [
                      ((x = n.label) == null ? void 0 : x.call(n, V)) ??
                        (e.label
                          ? f(ei, { id: V.id.value, class: 'v-slider__label', text: e.label }, null)
                          : void 0),
                      (O = n.prepend) == null ? void 0 : O.call(n, V),
                    ])
                  }
                : void 0,
              default: (V) => {
                let { id: x, messagesId: O } = V
                return f(
                  'div',
                  {
                    class: 'v-slider__container',
                    onMousedown: p.value ? void 0 : v,
                    onTouchstartPassive: p.value ? void 0 : m,
                  },
                  [
                    f(
                      'input',
                      {
                        id: x.value,
                        name: e.name || x.value,
                        disabled: !!e.disabled,
                        readonly: !!e.readonly,
                        tabindex: '-1',
                        value: r.value,
                      },
                      null,
                    ),
                    f(IC, { ref: h, start: 0, stop: I.value }, { 'tick-label': n['tick-label'] }),
                    f(
                      PC,
                      {
                        ref: a,
                        'aria-describedby': O.value,
                        focused: _.value,
                        min: s.value,
                        max: c.value,
                        modelValue: r.value,
                        'onUpdate:modelValue': (T) => (r.value = T),
                        position: I.value,
                        elevation: e.elevation,
                        onFocus: C,
                        onBlur: k,
                        ripple: e.ripple,
                        name: e.name,
                      },
                      { 'thumb-label': n['thumb-label'] },
                    ),
                  ],
                )
              },
            },
          )
        }),
        {}
      )
    },
  }),
  OC = $(
    { color: { type: Object }, disabled: Boolean, hideAlpha: Boolean, ...ge() },
    'VColorPickerPreview',
  ),
  BC = un({
    name: 'VColorPickerPreview',
    props: OC(),
    emits: { 'update:color': (e) => !0 },
    setup(e, t) {
      let { emit: n } = t
      const l = new AbortController()
      Nr(() => l.abort())
      async function a() {
        if (!Lu) return
        const o = new window.EyeDropper()
        try {
          const i = await o.open({ signal: l.signal }),
            r = Zf(i.sRGBHex)
          n('update:color', { ...(e.color ?? Pl), ...r })
        } catch {}
      }
      return (
        oe(() => {
          var o, i
          return f(
            'div',
            {
              class: [
                'v-color-picker-preview',
                { 'v-color-picker-preview--hide-alpha': e.hideAlpha },
                e.class,
              ],
              style: e.style,
            },
            [
              Lu &&
                f('div', { class: 'v-color-picker-preview__eye-dropper', key: 'eyeDropper' }, [
                  f(
                    gn,
                    { onClick: a, icon: '$eyeDropper', variant: 'plain', density: 'comfortable' },
                    null,
                  ),
                ]),
              f('div', { class: 'v-color-picker-preview__dot' }, [
                f('div', { style: { background: qf(e.color ?? Pl) } }, null),
              ]),
              f('div', { class: 'v-color-picker-preview__sliders' }, [
                f(
                  Zc,
                  {
                    class: 'v-color-picker-preview__track v-color-picker-preview__hue',
                    modelValue: (o = e.color) == null ? void 0 : o.h,
                    'onUpdate:modelValue': (r) => n('update:color', { ...(e.color ?? Pl), h: r }),
                    step: 0,
                    min: 0,
                    max: 360,
                    disabled: e.disabled,
                    thumbSize: 14,
                    trackSize: 8,
                    trackFillColor: 'white',
                    hideDetails: !0,
                  },
                  null,
                ),
                !e.hideAlpha &&
                  f(
                    Zc,
                    {
                      class: 'v-color-picker-preview__track v-color-picker-preview__alpha',
                      modelValue: ((i = e.color) == null ? void 0 : i.a) ?? 1,
                      'onUpdate:modelValue': (r) => n('update:color', { ...(e.color ?? Pl), a: r }),
                      step: 1 / 256,
                      min: 0,
                      max: 1,
                      disabled: e.disabled,
                      thumbSize: 14,
                      trackSize: 8,
                      trackFillColor: 'white',
                      hideDetails: !0,
                    },
                    null,
                  ),
              ]),
            ],
          )
        }),
        {}
      )
    },
  }),
  LC = {
    base: '#f44336',
    lighten5: '#ffebee',
    lighten4: '#ffcdd2',
    lighten3: '#ef9a9a',
    lighten2: '#e57373',
    lighten1: '#ef5350',
    darken1: '#e53935',
    darken2: '#d32f2f',
    darken3: '#c62828',
    darken4: '#b71c1c',
    accent1: '#ff8a80',
    accent2: '#ff5252',
    accent3: '#ff1744',
    accent4: '#d50000',
  },
  RC = {
    base: '#e91e63',
    lighten5: '#fce4ec',
    lighten4: '#f8bbd0',
    lighten3: '#f48fb1',
    lighten2: '#f06292',
    lighten1: '#ec407a',
    darken1: '#d81b60',
    darken2: '#c2185b',
    darken3: '#ad1457',
    darken4: '#880e4f',
    accent1: '#ff80ab',
    accent2: '#ff4081',
    accent3: '#f50057',
    accent4: '#c51162',
  },
  FC = {
    base: '#9c27b0',
    lighten5: '#f3e5f5',
    lighten4: '#e1bee7',
    lighten3: '#ce93d8',
    lighten2: '#ba68c8',
    lighten1: '#ab47bc',
    darken1: '#8e24aa',
    darken2: '#7b1fa2',
    darken3: '#6a1b9a',
    darken4: '#4a148c',
    accent1: '#ea80fc',
    accent2: '#e040fb',
    accent3: '#d500f9',
    accent4: '#aa00ff',
  },
  MC = {
    base: '#673ab7',
    lighten5: '#ede7f6',
    lighten4: '#d1c4e9',
    lighten3: '#b39ddb',
    lighten2: '#9575cd',
    lighten1: '#7e57c2',
    darken1: '#5e35b1',
    darken2: '#512da8',
    darken3: '#4527a0',
    darken4: '#311b92',
    accent1: '#b388ff',
    accent2: '#7c4dff',
    accent3: '#651fff',
    accent4: '#6200ea',
  },
  DC = {
    base: '#3f51b5',
    lighten5: '#e8eaf6',
    lighten4: '#c5cae9',
    lighten3: '#9fa8da',
    lighten2: '#7986cb',
    lighten1: '#5c6bc0',
    darken1: '#3949ab',
    darken2: '#303f9f',
    darken3: '#283593',
    darken4: '#1a237e',
    accent1: '#8c9eff',
    accent2: '#536dfe',
    accent3: '#3d5afe',
    accent4: '#304ffe',
  },
  $C = {
    base: '#2196f3',
    lighten5: '#e3f2fd',
    lighten4: '#bbdefb',
    lighten3: '#90caf9',
    lighten2: '#64b5f6',
    lighten1: '#42a5f5',
    darken1: '#1e88e5',
    darken2: '#1976d2',
    darken3: '#1565c0',
    darken4: '#0d47a1',
    accent1: '#82b1ff',
    accent2: '#448aff',
    accent3: '#2979ff',
    accent4: '#2962ff',
  },
  NC = {
    base: '#03a9f4',
    lighten5: '#e1f5fe',
    lighten4: '#b3e5fc',
    lighten3: '#81d4fa',
    lighten2: '#4fc3f7',
    lighten1: '#29b6f6',
    darken1: '#039be5',
    darken2: '#0288d1',
    darken3: '#0277bd',
    darken4: '#01579b',
    accent1: '#80d8ff',
    accent2: '#40c4ff',
    accent3: '#00b0ff',
    accent4: '#0091ea',
  },
  HC = {
    base: '#00bcd4',
    lighten5: '#e0f7fa',
    lighten4: '#b2ebf2',
    lighten3: '#80deea',
    lighten2: '#4dd0e1',
    lighten1: '#26c6da',
    darken1: '#00acc1',
    darken2: '#0097a7',
    darken3: '#00838f',
    darken4: '#006064',
    accent1: '#84ffff',
    accent2: '#18ffff',
    accent3: '#00e5ff',
    accent4: '#00b8d4',
  },
  jC = {
    base: '#009688',
    lighten5: '#e0f2f1',
    lighten4: '#b2dfdb',
    lighten3: '#80cbc4',
    lighten2: '#4db6ac',
    lighten1: '#26a69a',
    darken1: '#00897b',
    darken2: '#00796b',
    darken3: '#00695c',
    darken4: '#004d40',
    accent1: '#a7ffeb',
    accent2: '#64ffda',
    accent3: '#1de9b6',
    accent4: '#00bfa5',
  },
  zC = {
    base: '#4caf50',
    lighten5: '#e8f5e9',
    lighten4: '#c8e6c9',
    lighten3: '#a5d6a7',
    lighten2: '#81c784',
    lighten1: '#66bb6a',
    darken1: '#43a047',
    darken2: '#388e3c',
    darken3: '#2e7d32',
    darken4: '#1b5e20',
    accent1: '#b9f6ca',
    accent2: '#69f0ae',
    accent3: '#00e676',
    accent4: '#00c853',
  },
  WC = {
    base: '#8bc34a',
    lighten5: '#f1f8e9',
    lighten4: '#dcedc8',
    lighten3: '#c5e1a5',
    lighten2: '#aed581',
    lighten1: '#9ccc65',
    darken1: '#7cb342',
    darken2: '#689f38',
    darken3: '#558b2f',
    darken4: '#33691e',
    accent1: '#ccff90',
    accent2: '#b2ff59',
    accent3: '#76ff03',
    accent4: '#64dd17',
  },
  UC = {
    base: '#cddc39',
    lighten5: '#f9fbe7',
    lighten4: '#f0f4c3',
    lighten3: '#e6ee9c',
    lighten2: '#dce775',
    lighten1: '#d4e157',
    darken1: '#c0ca33',
    darken2: '#afb42b',
    darken3: '#9e9d24',
    darken4: '#827717',
    accent1: '#f4ff81',
    accent2: '#eeff41',
    accent3: '#c6ff00',
    accent4: '#aeea00',
  },
  KC = {
    base: '#ffeb3b',
    lighten5: '#fffde7',
    lighten4: '#fff9c4',
    lighten3: '#fff59d',
    lighten2: '#fff176',
    lighten1: '#ffee58',
    darken1: '#fdd835',
    darken2: '#fbc02d',
    darken3: '#f9a825',
    darken4: '#f57f17',
    accent1: '#ffff8d',
    accent2: '#ffff00',
    accent3: '#ffea00',
    accent4: '#ffd600',
  },
  GC = {
    base: '#ffc107',
    lighten5: '#fff8e1',
    lighten4: '#ffecb3',
    lighten3: '#ffe082',
    lighten2: '#ffd54f',
    lighten1: '#ffca28',
    darken1: '#ffb300',
    darken2: '#ffa000',
    darken3: '#ff8f00',
    darken4: '#ff6f00',
    accent1: '#ffe57f',
    accent2: '#ffd740',
    accent3: '#ffc400',
    accent4: '#ffab00',
  },
  YC = {
    base: '#ff9800',
    lighten5: '#fff3e0',
    lighten4: '#ffe0b2',
    lighten3: '#ffcc80',
    lighten2: '#ffb74d',
    lighten1: '#ffa726',
    darken1: '#fb8c00',
    darken2: '#f57c00',
    darken3: '#ef6c00',
    darken4: '#e65100',
    accent1: '#ffd180',
    accent2: '#ffab40',
    accent3: '#ff9100',
    accent4: '#ff6d00',
  },
  qC = {
    base: '#ff5722',
    lighten5: '#fbe9e7',
    lighten4: '#ffccbc',
    lighten3: '#ffab91',
    lighten2: '#ff8a65',
    lighten1: '#ff7043',
    darken1: '#f4511e',
    darken2: '#e64a19',
    darken3: '#d84315',
    darken4: '#bf360c',
    accent1: '#ff9e80',
    accent2: '#ff6e40',
    accent3: '#ff3d00',
    accent4: '#dd2c00',
  },
  XC = {
    base: '#795548',
    lighten5: '#efebe9',
    lighten4: '#d7ccc8',
    lighten3: '#bcaaa4',
    lighten2: '#a1887f',
    lighten1: '#8d6e63',
    darken1: '#6d4c41',
    darken2: '#5d4037',
    darken3: '#4e342e',
    darken4: '#3e2723',
  },
  QC = {
    base: '#607d8b',
    lighten5: '#eceff1',
    lighten4: '#cfd8dc',
    lighten3: '#b0bec5',
    lighten2: '#90a4ae',
    lighten1: '#78909c',
    darken1: '#546e7a',
    darken2: '#455a64',
    darken3: '#37474f',
    darken4: '#263238',
  },
  ZC = {
    base: '#9e9e9e',
    lighten5: '#fafafa',
    lighten4: '#f5f5f5',
    lighten3: '#eeeeee',
    lighten2: '#e0e0e0',
    lighten1: '#bdbdbd',
    darken1: '#757575',
    darken2: '#616161',
    darken3: '#424242',
    darken4: '#212121',
  },
  JC = { black: '#000000', white: '#ffffff', transparent: '#ffffff00' },
  e1 = {
    red: LC,
    pink: RC,
    purple: FC,
    deepPurple: MC,
    indigo: DC,
    blue: $C,
    lightBlue: NC,
    cyan: HC,
    teal: jC,
    green: zC,
    lightGreen: WC,
    lime: UC,
    yellow: KC,
    amber: GC,
    orange: YC,
    deepOrange: qC,
    brown: XC,
    blueGrey: QC,
    grey: ZC,
    shades: JC,
  },
  t1 = $(
    {
      swatches: { type: Array, default: () => n1(e1) },
      disabled: Boolean,
      color: Object,
      maxHeight: [Number, String],
      ...ge(),
    },
    'VColorPickerSwatches',
  )
function n1(e) {
  return Object.keys(e).map((t) => {
    const n = e[t]
    return n.base
      ? [
          n.base,
          n.darken4,
          n.darken3,
          n.darken2,
          n.darken1,
          n.lighten1,
          n.lighten2,
          n.lighten3,
          n.lighten4,
          n.lighten5,
        ]
      : [n.black, n.white, n.transparent]
  })
}
const l1 = un({
    name: 'VColorPickerSwatches',
    props: t1(),
    emits: { 'update:color': (e) => !0 },
    setup(e, t) {
      let { emit: n } = t
      return (
        oe(() =>
          f(
            'div',
            {
              class: ['v-color-picker-swatches', e.class],
              style: [{ maxHeight: he(e.maxHeight) }, e.style],
            },
            [
              f('div', null, [
                e.swatches.map((l) =>
                  f('div', { class: 'v-color-picker-swatches__swatch' }, [
                    l.map((a) => {
                      const o = Ut(a),
                        i = Uo(o),
                        r = Yf(o)
                      return f(
                        'div',
                        {
                          class: 'v-color-picker-swatches__color',
                          onClick: () => i && n('update:color', i),
                        },
                        [
                          f('div', { style: { background: r } }, [
                            e.color && vl(e.color, i)
                              ? f(
                                  je,
                                  {
                                    size: 'x-small',
                                    icon: '$success',
                                    color: Vb(a, '#FFFFFF') > 2 ? 'white' : 'black',
                                  },
                                  null,
                                )
                              : void 0,
                          ]),
                        ],
                      )
                    }),
                  ]),
                ),
              ]),
            ],
          ),
        ),
        {}
      )
    },
  }),
  Ns = $(
    {
      color: String,
      ...Zt(),
      ...ge(),
      ...Tt(),
      ...pt(),
      ...Gl(),
      ...Cs(),
      ...ot(),
      ...Te(),
      ...$e(),
    },
    'VSheet',
  ),
  Ia = J()({
    name: 'VSheet',
    props: Ns(),
    setup(e, t) {
      let { slots: n } = t
      const { themeClasses: l } = qe(e),
        { backgroundColorClasses: a, backgroundColorStyles: o } = Je(ae(e, 'color')),
        { borderClasses: i } = Jt(e),
        { dimensionStyles: r } = Ot(e),
        { elevationClasses: s } = Et(e),
        { locationStyles: c } = ja(e),
        { positionClasses: u } = ks(e),
        { roundedClasses: d } = it(e)
      return (
        oe(() =>
          f(
            e.tag,
            {
              class: ['v-sheet', l.value, a.value, i.value, s.value, u.value, d.value, e.class],
              style: [o.value, r.value, c.value, e.style],
            },
            n,
          ),
        ),
        {}
      )
    },
  }),
  a1 = $(
    {
      canvasHeight: { type: [String, Number], default: 150 },
      disabled: Boolean,
      dotSize: { type: [Number, String], default: 10 },
      hideCanvas: Boolean,
      hideSliders: Boolean,
      hideInputs: Boolean,
      mode: { type: String, default: 'rgba', validator: (e) => Object.keys(sl).includes(e) },
      modes: {
        type: Array,
        default: () => Object.keys(sl),
        validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(sl).includes(t)),
      },
      showSwatches: Boolean,
      swatches: Array,
      swatchesMaxHeight: { type: [Number, String], default: 150 },
      modelValue: { type: [Object, String] },
      ...Dt(Ns({ width: 300 }), [
        'height',
        'location',
        'minHeight',
        'maxHeight',
        'minWidth',
        'maxWidth',
      ]),
    },
    'VColorPicker',
  ),
  o1 = un({
    name: 'VColorPicker',
    props: a1(),
    emits: { 'update:modelValue': (e) => !0, 'update:mode': (e) => !0 },
    setup(e) {
      const t = Ae(e, 'mode'),
        n = H(null),
        l = Ae(
          e,
          'modelValue',
          void 0,
          (s) => {
            if (s == null || s === '') return null
            let c
            try {
              c = Uo(Ut(s))
            } catch {
              return null
            }
            return c
          },
          (s) => (s ? hC(s, e.modelValue) : null),
        ),
        a = b(() => (l.value ? { ...l.value, h: n.value ?? l.value.h } : null)),
        { rtlClasses: o } = ct()
      let i = !0
      me(
        l,
        (s) => {
          if (!i) {
            i = !0
            return
          }
          s && (n.value = s.h)
        },
        { immediate: !0 },
      )
      const r = (s) => {
        ;(i = !1), (n.value = s.h), (l.value = s)
      }
      return (
        $l(() => {
          e.modes.includes(t.value) || (t.value = e.modes[0])
        }),
        Qt({ VSlider: { color: void 0, trackColor: void 0, trackFillColor: void 0 } }),
        oe(() => {
          const s = Ia.filterProps(e)
          return f(
            Ia,
            ve(
              {
                rounded: e.rounded,
                elevation: e.elevation,
                theme: e.theme,
                class: ['v-color-picker', o.value, e.class],
                style: [
                  { '--v-color-picker-color-hsv': qf({ ...(a.value ?? Pl), a: 1 }) },
                  e.style,
                ],
              },
              s,
              { maxWidth: e.width },
            ),
            {
              default: () => [
                !e.hideCanvas &&
                  f(
                    vC,
                    {
                      key: 'canvas',
                      color: a.value,
                      'onUpdate:color': r,
                      disabled: e.disabled,
                      dotSize: e.dotSize,
                      width: e.width,
                      height: e.canvasHeight,
                    },
                    null,
                  ),
                (!e.hideSliders || !e.hideInputs) &&
                  f('div', { key: 'controls', class: 'v-color-picker__controls' }, [
                    !e.hideSliders &&
                      f(
                        BC,
                        {
                          key: 'preview',
                          color: a.value,
                          'onUpdate:color': r,
                          hideAlpha: !t.value.endsWith('a'),
                          disabled: e.disabled,
                        },
                        null,
                      ),
                    !e.hideInputs &&
                      f(
                        _C,
                        {
                          key: 'edit',
                          modes: e.modes,
                          mode: t.value,
                          'onUpdate:mode': (c) => (t.value = c),
                          color: a.value,
                          'onUpdate:color': r,
                          disabled: e.disabled,
                        },
                        null,
                      ),
                  ]),
                e.showSwatches &&
                  f(
                    l1,
                    {
                      key: 'swatches',
                      color: a.value,
                      'onUpdate:color': r,
                      maxHeight: e.swatchesMaxHeight,
                      swatches: e.swatches,
                      disabled: e.disabled,
                    },
                    null,
                  ),
              ],
            },
          )
        }),
        {}
      )
    },
  }),
  i1 = $(
    {
      fixedHeader: Boolean,
      fixedFooter: Boolean,
      height: [Number, String],
      hover: Boolean,
      ...ge(),
      ...Ht(),
      ...Te(),
      ...$e(),
    },
    'VTable',
  ),
  r1 = J()({
    name: 'VTable',
    props: i1(),
    setup(e, t) {
      let { slots: n, emit: l } = t
      const { themeClasses: a } = qe(e),
        { densityClasses: o } = en(e)
      return (
        oe(() =>
          f(
            e.tag,
            {
              class: [
                'v-table',
                {
                  'v-table--fixed-height': !!e.height,
                  'v-table--fixed-header': e.fixedHeader,
                  'v-table--fixed-footer': e.fixedFooter,
                  'v-table--has-top': !!n.top,
                  'v-table--has-bottom': !!n.bottom,
                  'v-table--hover': e.hover,
                },
                a.value,
                o.value,
                e.class,
              ],
              style: e.style,
            },
            {
              default: () => {
                var i, r, s
                return [
                  (i = n.top) == null ? void 0 : i.call(n),
                  n.default
                    ? f('div', { class: 'v-table__wrapper', style: { height: he(e.height) } }, [
                        f('table', null, [n.default()]),
                      ])
                    : (r = n.wrapper) == null
                      ? void 0
                      : r.call(n),
                  (s = n.bottom) == null ? void 0 : s.call(n),
                ]
              },
            },
          ),
        ),
        {}
      )
    },
  }),
  s1 = $({ fluid: { type: Boolean, default: !1 }, ...ge(), ...Tt(), ...Te() }, 'VContainer'),
  u1 = J()({
    name: 'VContainer',
    props: s1(),
    setup(e, t) {
      let { slots: n } = t
      const { rtlClasses: l } = ct(),
        { dimensionStyles: a } = Ot(e)
      return (
        oe(() =>
          f(
            e.tag,
            {
              class: ['v-container', { 'v-container--fluid': e.fluid }, l.value, e.class],
              style: [a.value, e.style],
            },
            n,
          ),
        ),
        {}
      )
    },
  }),
  Um = Yo.reduce((e, t) => ((e[t] = { type: [Boolean, String, Number], default: !1 }), e), {}),
  Km = Yo.reduce((e, t) => {
    const n = 'offset' + En(t)
    return (e[n] = { type: [String, Number], default: null }), e
  }, {}),
  Gm = Yo.reduce((e, t) => {
    const n = 'order' + En(t)
    return (e[n] = { type: [String, Number], default: null }), e
  }, {}),
  Jc = { col: Object.keys(Um), offset: Object.keys(Km), order: Object.keys(Gm) }
function c1(e, t, n) {
  let l = e
  if (!(n == null || n === !1)) {
    if (t) {
      const a = t.replace(e, '')
      l += `-${a}`
    }
    return (
      e === 'col' && (l = 'v-' + l),
      (e === 'col' && (n === '' || n === !0)) || (l += `-${n}`),
      l.toLowerCase()
    )
  }
}
const d1 = ['auto', 'start', 'end', 'center', 'baseline', 'stretch'],
  f1 = $(
    {
      cols: { type: [Boolean, String, Number], default: !1 },
      ...Um,
      offset: { type: [String, Number], default: null },
      ...Km,
      order: { type: [String, Number], default: null },
      ...Gm,
      alignSelf: { type: String, default: null, validator: (e) => d1.includes(e) },
      ...ge(),
      ...Te(),
    },
    'VCol',
  ),
  v1 = J()({
    name: 'VCol',
    props: f1(),
    setup(e, t) {
      let { slots: n } = t
      const l = b(() => {
        const a = []
        let o
        for (o in Jc)
          Jc[o].forEach((r) => {
            const s = e[r],
              c = c1(o, r, s)
            c && a.push(c)
          })
        const i = a.some((r) => r.startsWith('v-col-'))
        return (
          a.push({
            'v-col': !i || !e.cols,
            [`v-col-${e.cols}`]: e.cols,
            [`offset-${e.offset}`]: e.offset,
            [`order-${e.order}`]: e.order,
            [`align-self-${e.alignSelf}`]: e.alignSelf,
          }),
          a
        )
      })
      return () => {
        var a
        return sn(
          e.tag,
          { class: [l.value, e.class], style: e.style },
          (a = n.default) == null ? void 0 : a.call(n),
        )
      }
    },
  }),
  Hs = ['start', 'end', 'center'],
  Ym = ['space-between', 'space-around', 'space-evenly']
function js(e, t) {
  return Yo.reduce((n, l) => {
    const a = e + En(l)
    return (n[a] = t()), n
  }, {})
}
const m1 = [...Hs, 'baseline', 'stretch'],
  qm = (e) => m1.includes(e),
  Xm = js('align', () => ({ type: String, default: null, validator: qm })),
  h1 = [...Hs, ...Ym],
  Qm = (e) => h1.includes(e),
  Zm = js('justify', () => ({ type: String, default: null, validator: Qm })),
  g1 = [...Hs, ...Ym, 'stretch'],
  Jm = (e) => g1.includes(e),
  eh = js('alignContent', () => ({ type: String, default: null, validator: Jm })),
  ed = { align: Object.keys(Xm), justify: Object.keys(Zm), alignContent: Object.keys(eh) },
  y1 = { align: 'align', justify: 'justify', alignContent: 'align-content' }
function b1(e, t, n) {
  let l = y1[e]
  if (n != null) {
    if (t) {
      const a = t.replace(e, '')
      l += `-${a}`
    }
    return (l += `-${n}`), l.toLowerCase()
  }
}
const p1 = $(
    {
      dense: Boolean,
      noGutters: Boolean,
      align: { type: String, default: null, validator: qm },
      ...Xm,
      justify: { type: String, default: null, validator: Qm },
      ...Zm,
      alignContent: { type: String, default: null, validator: Jm },
      ...eh,
      ...ge(),
      ...Te(),
    },
    'VRow',
  ),
  S1 = J()({
    name: 'VRow',
    props: p1(),
    setup(e, t) {
      let { slots: n } = t
      const l = b(() => {
        const a = []
        let o
        for (o in ed)
          ed[o].forEach((i) => {
            const r = e[i],
              s = b1(o, i, r)
            s && a.push(s)
          })
        return (
          a.push({
            'v-row--no-gutters': e.noGutters,
            'v-row--dense': e.dense,
            [`align-${e.align}`]: e.align,
            [`justify-${e.justify}`]: e.justify,
            [`align-content-${e.alignContent}`]: e.alignContent,
          }),
          a
        )
      })
      return () => {
        var a
        return sn(
          e.tag,
          { class: ['v-row', l.value, e.class], style: e.style },
          (a = n.default) == null ? void 0 : a.call(n),
        )
      }
    },
  }),
  _1 = Ko('v-spacer', 'div', 'VSpacer'),
  To = Symbol.for('vuetify:v-expansion-panel'),
  th = $({ ...ge(), ...Ls() }, 'VExpansionPanelText'),
  td = J()({
    name: 'VExpansionPanelText',
    props: th(),
    setup(e, t) {
      let { slots: n } = t
      const l = Ie(To)
      if (!l)
        throw new Error(
          '[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel',
        )
      const { hasContent: a, onAfterLeave: o } = Rs(e, l.isSelected)
      return (
        oe(() =>
          f(
            gs,
            { onAfterLeave: o },
            {
              default: () => {
                var i
                return [
                  Ye(
                    f('div', { class: ['v-expansion-panel-text', e.class], style: e.style }, [
                      n.default &&
                        a.value &&
                        f('div', { class: 'v-expansion-panel-text__wrapper' }, [
                          (i = n.default) == null ? void 0 : i.call(n),
                        ]),
                    ]),
                    [[Xt, l.isSelected.value]],
                  ),
                ]
              },
            },
          ),
        ),
        {}
      )
    },
  }),
  nh = $(
    {
      color: String,
      expandIcon: { type: Ee, default: '$expand' },
      collapseIcon: { type: Ee, default: '$collapse' },
      hideActions: Boolean,
      focusable: Boolean,
      static: Boolean,
      ripple: { type: [Boolean, Object], default: !1 },
      readonly: Boolean,
      ...ge(),
      ...Tt(),
    },
    'VExpansionPanelTitle',
  ),
  nd = J()({
    name: 'VExpansionPanelTitle',
    directives: { Ripple: qn },
    props: nh(),
    setup(e, t) {
      let { slots: n } = t
      const l = Ie(To)
      if (!l)
        throw new Error(
          '[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel',
        )
      const { backgroundColorClasses: a, backgroundColorStyles: o } = Je(e, 'color'),
        { dimensionStyles: i } = Ot(e),
        r = b(() => ({
          collapseIcon: e.collapseIcon,
          disabled: l.disabled.value,
          expanded: l.isSelected.value,
          expandIcon: e.expandIcon,
          readonly: e.readonly,
        })),
        s = b(() => (l.isSelected.value ? e.collapseIcon : e.expandIcon))
      return (
        oe(() => {
          var c
          return Ye(
            f(
              'button',
              {
                class: [
                  'v-expansion-panel-title',
                  {
                    'v-expansion-panel-title--active': l.isSelected.value,
                    'v-expansion-panel-title--focusable': e.focusable,
                    'v-expansion-panel-title--static': e.static,
                  },
                  a.value,
                  e.class,
                ],
                style: [o.value, i.value, e.style],
                type: 'button',
                tabindex: l.disabled.value ? -1 : void 0,
                disabled: l.disabled.value,
                'aria-expanded': l.isSelected.value,
                onClick: e.readonly ? void 0 : l.toggle,
              },
              [
                f('span', { class: 'v-expansion-panel-title__overlay' }, null),
                (c = n.default) == null ? void 0 : c.call(n, r.value),
                !e.hideActions &&
                  f(
                    Me,
                    { defaults: { VIcon: { icon: s.value } } },
                    {
                      default: () => {
                        var u
                        return [
                          f('span', { class: 'v-expansion-panel-title__icon' }, [
                            ((u = n.actions) == null ? void 0 : u.call(n, r.value)) ??
                              f(je, null, null),
                          ]),
                        ]
                      },
                    },
                  ),
              ],
            ),
            [[qt('ripple'), e.ripple]],
          )
        }),
        {}
      )
    },
  }),
  lh = $(
    {
      title: String,
      text: String,
      bgColor: String,
      ...pt(),
      ...Wl(),
      ...ot(),
      ...Te(),
      ...nh(),
      ...th(),
    },
    'VExpansionPanel',
  ),
  ld = J()({
    name: 'VExpansionPanel',
    props: lh(),
    emits: { 'group:selected': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const l = Ul(e, To),
        { backgroundColorClasses: a, backgroundColorStyles: o } = Je(e, 'bgColor'),
        { elevationClasses: i } = Et(e),
        { roundedClasses: r } = it(e),
        s = b(() => (l == null ? void 0 : l.disabled.value) || e.disabled),
        c = b(() =>
          l.group.items.value.reduce(
            (v, m, h) => (l.group.selected.value.includes(m.id) && v.push(h), v),
            [],
          ),
        ),
        u = b(() => {
          const v = l.group.items.value.findIndex((m) => m.id === l.id)
          return !l.isSelected.value && c.value.some((m) => m - v === 1)
        }),
        d = b(() => {
          const v = l.group.items.value.findIndex((m) => m.id === l.id)
          return !l.isSelected.value && c.value.some((m) => m - v === -1)
        })
      return (
        Ze(To, l),
        oe(() => {
          const v = !!(n.text || e.text),
            m = !!(n.title || e.title),
            h = nd.filterProps(e),
            g = td.filterProps(e)
          return f(
            e.tag,
            {
              class: [
                'v-expansion-panel',
                {
                  'v-expansion-panel--active': l.isSelected.value,
                  'v-expansion-panel--before-active': u.value,
                  'v-expansion-panel--after-active': d.value,
                  'v-expansion-panel--disabled': s.value,
                },
                r.value,
                a.value,
                e.class,
              ],
              style: [o.value, e.style],
            },
            {
              default: () => [
                f('div', { class: ['v-expansion-panel__shadow', ...i.value] }, null),
                f(
                  Me,
                  { defaults: { VExpansionPanelTitle: { ...h }, VExpansionPanelText: { ...g } } },
                  {
                    default: () => {
                      var y
                      return [
                        m &&
                          f(
                            nd,
                            { key: 'title' },
                            { default: () => [n.title ? n.title() : e.title] },
                          ),
                        v &&
                          f(td, { key: 'text' }, { default: () => [n.text ? n.text() : e.text] }),
                        (y = n.default) == null ? void 0 : y.call(n),
                      ]
                    },
                  },
                ),
              ],
            },
          )
        }),
        { groupItem: l }
      )
    },
  }),
  w1 = $(
    {
      app: Boolean,
      appear: Boolean,
      extended: Boolean,
      layout: Boolean,
      offset: Boolean,
      modelValue: { type: Boolean, default: !0 },
      ...Dt(xs({ active: !0 }), ['location']),
      ...Nl(),
      ...Gl(),
      ...Gn({ transition: 'fab-transition' }),
    },
    'VFab',
  ),
  C1 = J()({
    name: 'VFab',
    props: w1(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const l = Ae(e, 'modelValue'),
        a = ue(56),
        o = H(),
        { resizeRef: i } = Vn((d) => {
          d.length && (a.value = d[0].target.clientHeight)
        }),
        r = b(() => e.app || e.absolute),
        s = b(() => {
          var d
          return r.value
            ? (((d = e.location) == null ? void 0 : d.split(' ').shift()) ?? 'bottom')
            : !1
        }),
        c = b(() => {
          var d
          return r.value ? (((d = e.location) == null ? void 0 : d.split(' ')[1]) ?? 'end') : !1
        })
      Pt(
        () => e.app,
        () => {
          const d = Hl({
            id: e.name,
            order: b(() => parseInt(e.order, 10)),
            position: s,
            layoutSize: b(() => (e.layout ? a.value + 24 : 0)),
            elementSize: b(() => a.value + 24),
            active: b(() => e.app && l.value),
            absolute: ae(e, 'absolute'),
          })
          yt(() => {
            o.value = d.layoutItemStyles.value
          })
        },
      )
      const u = H()
      return (
        oe(() => {
          const d = gn.filterProps(e)
          return f(
            'div',
            {
              ref: u,
              class: [
                'v-fab',
                {
                  'v-fab--absolute': e.absolute,
                  'v-fab--app': !!e.app,
                  'v-fab--extended': e.extended,
                  'v-fab--offset': e.offset,
                  [`v-fab--${s.value}`]: r.value,
                  [`v-fab--${c.value}`]: r.value,
                },
                e.class,
              ],
              style: [e.app ? { ...o.value } : { height: 'inherit', width: void 0 }, e.style],
            },
            [
              f('div', { class: 'v-fab__container' }, [
                f(
                  Kt,
                  { appear: e.appear, transition: e.transition },
                  {
                    default: () => [
                      Ye(f(gn, ve({ ref: i }, d, { active: void 0, location: void 0 }), n), [
                        [Xt, e.active],
                      ]),
                    ],
                  },
                ),
              ]),
            ],
          )
        }),
        {}
      )
    },
  }),
  k1 = $(
    {
      chips: Boolean,
      counter: Boolean,
      counterSizeString: { type: String, default: '$vuetify.fileInput.counterSize' },
      counterString: { type: String, default: '$vuetify.fileInput.counter' },
      hideInput: Boolean,
      multiple: Boolean,
      showSize: {
        type: [Boolean, Number, String],
        default: !1,
        validator: (e) => typeof e == 'boolean' || [1e3, 1024].includes(Number(e)),
      },
      ...ql({ prependIcon: '$file' }),
      modelValue: {
        type: [Array, Object],
        default: (e) => (e.multiple ? [] : null),
        validator: (e) => gt(e).every((t) => t != null && typeof t == 'object'),
      },
      ...li({ clearable: !0 }),
    },
    'VFileInput',
  ),
  x1 = J()({
    name: 'VFileInput',
    inheritAttrs: !1,
    props: k1(),
    emits: {
      'click:control': (e) => !0,
      'mousedown:control': (e) => !0,
      'update:focused': (e) => !0,
      'update:modelValue': (e) => !0,
    },
    setup(e, t) {
      let { attrs: n, emit: l, slots: a } = t
      const { t: o } = Kn(),
        i = Ae(
          e,
          'modelValue',
          e.modelValue,
          (x) => gt(x),
          (x) => (!e.multiple && Array.isArray(x) ? x[0] : x),
        ),
        { isFocused: r, focus: s, blur: c } = Yl(e),
        u = b(() => (typeof e.showSize != 'boolean' ? e.showSize : void 0)),
        d = b(() =>
          (i.value ?? []).reduce((x, O) => {
            let { size: T = 0 } = O
            return x + T
          }, 0),
        ),
        v = b(() => Hu(d.value, u.value)),
        m = b(() =>
          (i.value ?? []).map((x) => {
            const { name: O = '', size: T = 0 } = x
            return e.showSize ? `${O} (${Hu(T, u.value)})` : O
          }),
        ),
        h = b(() => {
          var O
          const x = ((O = i.value) == null ? void 0 : O.length) ?? 0
          return e.showSize ? o(e.counterSizeString, x, v.value) : o(e.counterString, x)
        }),
        g = H(),
        y = H(),
        p = H(),
        _ = b(() => r.value || e.active),
        C = b(() => ['plain', 'underlined'].includes(e.variant))
      function k() {
        var x
        p.value !== document.activeElement && ((x = p.value) == null || x.focus()), r.value || s()
      }
      function I(x) {
        var O
        ;(O = p.value) == null || O.click()
      }
      function P(x) {
        l('mousedown:control', x)
      }
      function A(x) {
        var O
        ;(O = p.value) == null || O.click(), l('click:control', x)
      }
      function V(x) {
        x.stopPropagation(),
          k(),
          Ke(() => {
            ;(i.value = []), ts(e['onClick:clear'], x)
          })
      }
      return (
        me(i, (x) => {
          ;(!Array.isArray(x) || !x.length) && p.value && (p.value.value = '')
        }),
        oe(() => {
          const x = !!(a.counter || e.counter),
            O = !!(x || a.details),
            [T, E] = Da(n),
            { modelValue: R, ...N } = yn.filterProps(e),
            q = Ms(e)
          return f(
            yn,
            ve(
              {
                ref: g,
                modelValue: i.value,
                'onUpdate:modelValue': (G) => (i.value = G),
                class: [
                  'v-file-input',
                  {
                    'v-file-input--chips': !!e.chips,
                    'v-file-input--hide': e.hideInput,
                    'v-input--plain-underlined': C.value,
                  },
                  e.class,
                ],
                style: e.style,
                'onClick:prepend': I,
              },
              T,
              N,
              { centerAffix: !C.value, focused: r.value },
            ),
            {
              ...a,
              default: (G) => {
                let { id: ee, isDisabled: X, isDirty: U, isReadonly: F, isValid: M } = G
                return f(
                  ai,
                  ve(
                    {
                      ref: y,
                      'prepend-icon': e.prependIcon,
                      onMousedown: P,
                      onClick: A,
                      'onClick:clear': V,
                      'onClick:prependInner': e['onClick:prependInner'],
                      'onClick:appendInner': e['onClick:appendInner'],
                    },
                    q,
                    {
                      id: ee.value,
                      active: _.value || U.value,
                      dirty: U.value || e.dirty,
                      disabled: X.value,
                      focused: r.value,
                      error: M.value === !1,
                    },
                  ),
                  {
                    ...a,
                    default: (ne) => {
                      var pe
                      let {
                        props: { class: be, ...ie },
                      } = ne
                      return f(ke, null, [
                        f(
                          'input',
                          ve(
                            {
                              ref: p,
                              type: 'file',
                              readonly: F.value,
                              disabled: X.value,
                              multiple: e.multiple,
                              name: e.name,
                              onClick: (j) => {
                                j.stopPropagation(), F.value && j.preventDefault(), k()
                              },
                              onChange: (j) => {
                                if (!j.target) return
                                const L = j.target
                                i.value = [...(L.files ?? [])]
                              },
                              onFocus: k,
                              onBlur: c,
                            },
                            ie,
                            E,
                          ),
                          null,
                        ),
                        f('div', { class: be }, [
                          !!((pe = i.value) != null && pe.length) &&
                            !e.hideInput &&
                            (a.selection
                              ? a.selection({
                                  fileNames: m.value,
                                  totalBytes: d.value,
                                  totalBytesReadable: v.value,
                                })
                              : e.chips
                                ? m.value.map((j) =>
                                    f(ti, { key: j, size: 'small', text: j }, null),
                                  )
                                : m.value.join(', ')),
                        ]),
                      ])
                    },
                  },
                )
              },
              details: O
                ? (G) => {
                    var ee, X
                    return f(ke, null, [
                      (ee = a.details) == null ? void 0 : ee.call(a, G),
                      x &&
                        f(ke, null, [
                          f('span', null, null),
                          f(
                            Fs,
                            {
                              active: !!((X = i.value) != null && X.length),
                              value: h.value,
                              disabled: e.disabled,
                            },
                            a.counter,
                          ),
                        ]),
                    ])
                  }
                : void 0,
            },
          )
        }),
        An({}, g, y, p)
      )
    },
  }),
  V1 = $(
    {
      app: Boolean,
      color: String,
      height: { type: [Number, String], default: 'auto' },
      ...Zt(),
      ...ge(),
      ...pt(),
      ...Nl(),
      ...ot(),
      ...Te({ tag: 'footer' }),
      ...$e(),
    },
    'VFooter',
  ),
  E1 = J()({
    name: 'VFooter',
    props: V1(),
    setup(e, t) {
      let { slots: n } = t
      const l = H(),
        { themeClasses: a } = qe(e),
        { backgroundColorClasses: o, backgroundColorStyles: i } = Je(ae(e, 'color')),
        { borderClasses: r } = Jt(e),
        { elevationClasses: s } = Et(e),
        { roundedClasses: c } = it(e),
        u = ue(32),
        { resizeRef: d } = Vn((m) => {
          m.length && (u.value = m[0].target.clientHeight)
        }),
        v = b(() => (e.height === 'auto' ? u.value : parseInt(e.height, 10)))
      return (
        Pt(
          () => e.app,
          () => {
            const m = Hl({
              id: e.name,
              order: b(() => parseInt(e.order, 10)),
              position: b(() => 'bottom'),
              layoutSize: v,
              elementSize: b(() => (e.height === 'auto' ? void 0 : v.value)),
              active: b(() => e.app),
              absolute: ae(e, 'absolute'),
            })
            yt(() => {
              l.value = m.layoutItemStyles.value
            })
          },
        ),
        oe(() =>
          f(
            e.tag,
            {
              ref: d,
              class: ['v-footer', a.value, o.value, r.value, s.value, c.value, e.class],
              style: [i.value, e.app ? l.value : { height: he(e.height) }, e.style],
            },
            n,
          ),
        ),
        {}
      )
    },
  }),
  P1 = $({ ...ge(), ...w_() }, 'VForm'),
  A1 = J()({
    name: 'VForm',
    props: P1(),
    emits: { 'update:modelValue': (e) => !0, submit: (e) => !0 },
    setup(e, t) {
      let { slots: n, emit: l } = t
      const a = C_(e),
        o = H()
      function i(s) {
        s.preventDefault(), a.reset()
      }
      function r(s) {
        const c = s,
          u = a.validate()
        ;(c.then = u.then.bind(u)),
          (c.catch = u.catch.bind(u)),
          (c.finally = u.finally.bind(u)),
          l('submit', c),
          c.defaultPrevented ||
            u.then((d) => {
              var m
              let { valid: v } = d
              v && ((m = o.value) == null || m.submit())
            }),
          c.preventDefault()
      }
      return (
        oe(() => {
          var s
          return f(
            'form',
            {
              ref: o,
              class: ['v-form', e.class],
              style: e.style,
              novalidate: !0,
              onReset: i,
              onSubmit: r,
            },
            [(s = n.default) == null ? void 0 : s.call(n, a)],
          )
        }),
        An(a, o)
      )
    },
  }),
  I1 = $({ disabled: Boolean, modelValue: { type: Boolean, default: null }, ...Os() }, 'VHover'),
  T1 = J()({
    name: 'VHover',
    props: I1(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const l = Ae(e, 'modelValue'),
        { runOpenDelay: a, runCloseDelay: o } = Bs(e, (i) => !e.disabled && (l.value = i))
      return () => {
        var i
        return (i = n.default) == null
          ? void 0
          : i.call(n, { isHovering: l.value, props: { onMouseenter: a, onMouseleave: o } })
      }
    },
  }),
  ah = Symbol.for('vuetify:v-item-group'),
  O1 = $({ ...ge(), ...zl({ selectedClass: 'v-item--selected' }), ...Te(), ...$e() }, 'VItemGroup'),
  B1 = J()({
    name: 'VItemGroup',
    props: O1(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const { themeClasses: l } = qe(e),
        { isSelected: a, select: o, next: i, prev: r, selected: s } = hl(e, ah)
      return () =>
        f(
          e.tag,
          { class: ['v-item-group', l.value, e.class], style: e.style },
          {
            default: () => {
              var c
              return [
                (c = n.default) == null
                  ? void 0
                  : c.call(n, { isSelected: a, select: o, next: i, prev: r, selected: s.value }),
              ]
            },
          },
        )
    },
  }),
  L1 = J()({
    name: 'VItem',
    props: Wl(),
    emits: { 'group:selected': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const {
        isSelected: l,
        select: a,
        toggle: o,
        selectedClass: i,
        value: r,
        disabled: s,
      } = Ul(e, ah)
      return () => {
        var c
        return (c = n.default) == null
          ? void 0
          : c.call(n, {
              isSelected: l.value,
              selectedClass: i.value,
              select: a,
              toggle: o,
              value: r.value,
              disabled: s.value,
            })
      }
    },
  }),
  R1 = $({ ...ge(), ...Tt(), ...yv() }, 'VLayout'),
  F1 = J()({
    name: 'VLayout',
    props: R1(),
    setup(e, t) {
      let { slots: n } = t
      const { layoutClasses: l, layoutStyles: a, getLayoutItem: o, items: i, layoutRef: r } = bv(e),
        { dimensionStyles: s } = Ot(e)
      return (
        oe(() => {
          var c
          return f(
            'div',
            { ref: r, class: [l.value, e.class], style: [s.value, a.value, e.style] },
            [(c = n.default) == null ? void 0 : c.call(n)],
          )
        }),
        { getLayoutItem: o, items: i }
      )
    },
  }),
  M1 = $({ scrollable: Boolean, ...ge(), ...Tt(), ...Te({ tag: 'main' }) }, 'VMain'),
  D1 = J()({
    name: 'VMain',
    props: M1(),
    setup(e, t) {
      let { slots: n } = t
      const { dimensionStyles: l } = Ot(e),
        { mainStyles: a } = Np(),
        { ssrBootStyles: o } = ml()
      return (
        oe(() =>
          f(
            e.tag,
            {
              class: ['v-main', { 'v-main--scrollable': e.scrollable }, e.class],
              style: [a.value, o.value, l.value, e.style],
            },
            {
              default: () => {
                var i, r
                return [
                  e.scrollable
                    ? f('div', { class: 'v-main__scroller' }, [
                        (i = n.default) == null ? void 0 : i.call(n),
                      ])
                    : (r = n.default) == null
                      ? void 0
                      : r.call(n),
                ]
              },
            },
          ),
        ),
        {}
      )
    },
  })
function $1(e) {
  let { rootEl: t, isSticky: n, layoutItemStyles: l } = e
  const a = ue(!1),
    o = ue(0),
    i = b(() => {
      const c = typeof a.value == 'boolean' ? 'top' : a.value
      return [
        n.value ? { top: 'auto', bottom: 'auto', height: void 0 } : void 0,
        a.value ? { [c]: he(o.value) } : { top: l.value.top },
      ]
    })
  Vt(() => {
    me(
      n,
      (c) => {
        c
          ? window.addEventListener('scroll', s, { passive: !0 })
          : window.removeEventListener('scroll', s)
      },
      { immediate: !0 },
    )
  }),
    ut(() => {
      window.removeEventListener('scroll', s)
    })
  let r = 0
  function s() {
    const c = r > window.scrollY ? 'up' : 'down',
      u = t.value.getBoundingClientRect(),
      d = parseFloat(l.value.top ?? 0),
      v = window.scrollY - Math.max(0, o.value - d),
      m = u.height + Math.max(o.value, d) - window.scrollY - window.innerHeight,
      h = parseFloat(getComputedStyle(t.value).getPropertyValue('--v-body-scroll-y')) || 0
    u.height < window.innerHeight - d
      ? ((a.value = 'top'), (o.value = d))
      : (c === 'up' && a.value === 'bottom') || (c === 'down' && a.value === 'top')
        ? ((o.value = window.scrollY + u.top - h), (a.value = !0))
        : c === 'down' && m <= 0
          ? ((o.value = 0), (a.value = 'bottom'))
          : c === 'up' &&
            v <= 0 &&
            (h
              ? a.value !== 'top' && ((o.value = -v + h + d), (a.value = 'top'))
              : ((o.value = u.top + v), (a.value = 'top'))),
      (r = window.scrollY)
  }
  return { isStuck: a, stickyStyles: i }
}
const N1 = 100,
  H1 = 20
function ad(e) {
  return (e < 0 ? -1 : 1) * Math.sqrt(Math.abs(e)) * 1.41421356237
}
function od(e) {
  if (e.length < 2) return 0
  if (e.length === 2) return e[1].t === e[0].t ? 0 : (e[1].d - e[0].d) / (e[1].t - e[0].t)
  let t = 0
  for (let n = e.length - 1; n > 0; n--) {
    if (e[n].t === e[n - 1].t) continue
    const l = ad(t),
      a = (e[n].d - e[n - 1].d) / (e[n].t - e[n - 1].t)
    ;(t += (a - l) * Math.abs(a)), n === e.length - 1 && (t *= 0.5)
  }
  return ad(t) * 1e3
}
function j1() {
  const e = {}
  function t(a) {
    Array.from(a.changedTouches).forEach((o) => {
      ;(e[o.identifier] ?? (e[o.identifier] = new Jy(H1))).push([a.timeStamp, o])
    })
  }
  function n(a) {
    Array.from(a.changedTouches).forEach((o) => {
      delete e[o.identifier]
    })
  }
  function l(a) {
    var c
    const o = (c = e[a]) == null ? void 0 : c.values().reverse()
    if (!o) throw new Error(`No samples for touch id ${a}`)
    const i = o[0],
      r = [],
      s = []
    for (const u of o) {
      if (i[0] - u[0] > N1) break
      r.push({ t: u[0], d: u[1].clientX }), s.push({ t: u[0], d: u[1].clientY })
    }
    return {
      x: od(r),
      y: od(s),
      get direction() {
        const { x: u, y: d } = this,
          [v, m] = [Math.abs(u), Math.abs(d)]
        return v > m && u >= 0
          ? 'right'
          : v > m && u <= 0
            ? 'left'
            : m > v && d >= 0
              ? 'down'
              : m > v && d <= 0
                ? 'up'
                : z1()
      },
    }
  }
  return { addMovement: t, endTouch: n, getVelocity: l }
}
function z1() {
  throw new Error()
}
function W1(e) {
  let { el: t, isActive: n, isTemporary: l, width: a, touchless: o, position: i } = e
  Vt(() => {
    window.addEventListener('touchstart', _, { passive: !0 }),
      window.addEventListener('touchmove', C, { passive: !1 }),
      window.addEventListener('touchend', k, { passive: !0 })
  }),
    ut(() => {
      window.removeEventListener('touchstart', _),
        window.removeEventListener('touchmove', C),
        window.removeEventListener('touchend', k)
    })
  const r = b(() => ['left', 'right'].includes(i.value)),
    { addMovement: s, endTouch: c, getVelocity: u } = j1()
  let d = !1
  const v = ue(!1),
    m = ue(0),
    h = ue(0)
  let g
  function y(P, A) {
    return (
      (i.value === 'left'
        ? P
        : i.value === 'right'
          ? document.documentElement.clientWidth - P
          : i.value === 'top'
            ? P
            : i.value === 'bottom'
              ? document.documentElement.clientHeight - P
              : wl()) - (A ? a.value : 0)
    )
  }
  function p(P) {
    let A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0
    const V =
      i.value === 'left'
        ? (P - h.value) / a.value
        : i.value === 'right'
          ? (document.documentElement.clientWidth - P - h.value) / a.value
          : i.value === 'top'
            ? (P - h.value) / a.value
            : i.value === 'bottom'
              ? (document.documentElement.clientHeight - P - h.value) / a.value
              : wl()
    return A ? Math.max(0, Math.min(1, V)) : V
  }
  function _(P) {
    if (o.value) return
    const A = P.changedTouches[0].clientX,
      V = P.changedTouches[0].clientY,
      x = 25,
      O =
        i.value === 'left'
          ? A < x
          : i.value === 'right'
            ? A > document.documentElement.clientWidth - x
            : i.value === 'top'
              ? V < x
              : i.value === 'bottom'
                ? V > document.documentElement.clientHeight - x
                : wl(),
      T =
        n.value &&
        (i.value === 'left'
          ? A < a.value
          : i.value === 'right'
            ? A > document.documentElement.clientWidth - a.value
            : i.value === 'top'
              ? V < a.value
              : i.value === 'bottom'
                ? V > document.documentElement.clientHeight - a.value
                : wl())
    ;(O || T || (n.value && l.value)) &&
      ((g = [A, V]),
      (h.value = y(r.value ? A : V, n.value)),
      (m.value = p(r.value ? A : V)),
      (d = h.value > -20 && h.value < 80),
      c(P),
      s(P))
  }
  function C(P) {
    const A = P.changedTouches[0].clientX,
      V = P.changedTouches[0].clientY
    if (d) {
      if (!P.cancelable) {
        d = !1
        return
      }
      const O = Math.abs(A - g[0]),
        T = Math.abs(V - g[1])
      ;(r.value ? O > T && O > 3 : T > O && T > 3)
        ? ((v.value = !0), (d = !1))
        : (r.value ? T : O) > 3 && (d = !1)
    }
    if (!v.value) return
    P.preventDefault(), s(P)
    const x = p(r.value ? A : V, !1)
    ;(m.value = Math.max(0, Math.min(1, x))),
      x > 1 ? (h.value = y(r.value ? A : V, !0)) : x < 0 && (h.value = y(r.value ? A : V, !1))
  }
  function k(P) {
    if (((d = !1), !v.value)) return
    s(P), (v.value = !1)
    const A = u(P.changedTouches[0].identifier),
      V = Math.abs(A.x),
      x = Math.abs(A.y)
    ;(r.value ? V > x && V > 400 : x > V && x > 3)
      ? (n.value =
          A.direction ===
          ({ left: 'right', right: 'left', top: 'down', bottom: 'up' }[i.value] || wl()))
      : (n.value = m.value > 0.5)
  }
  const I = b(() =>
    v.value
      ? {
          transform:
            i.value === 'left'
              ? `translateX(calc(-100% + ${m.value * a.value}px))`
              : i.value === 'right'
                ? `translateX(calc(100% - ${m.value * a.value}px))`
                : i.value === 'top'
                  ? `translateY(calc(-100% + ${m.value * a.value}px))`
                  : i.value === 'bottom'
                    ? `translateY(calc(100% - ${m.value * a.value}px))`
                    : wl(),
          transition: 'none',
        }
      : void 0,
  )
  return (
    Pt(v, () => {
      var V, x
      const P = ((V = t.value) == null ? void 0 : V.style.transform) ?? null,
        A = ((x = t.value) == null ? void 0 : x.style.transition) ?? null
      yt(() => {
        var O, T, E, R
        ;(T = t.value) == null ||
          T.style.setProperty(
            'transform',
            ((O = I.value) == null ? void 0 : O.transform) || 'none',
          ),
          (R = t.value) == null ||
            R.style.setProperty(
              'transition',
              ((E = I.value) == null ? void 0 : E.transition) || null,
            )
      }),
        bt(() => {
          var O, T
          ;(O = t.value) == null || O.style.setProperty('transform', P),
            (T = t.value) == null || T.style.setProperty('transition', A)
        })
    }),
    { isDragging: v, dragProgress: m, dragStyles: I }
  )
}
function wl() {
  throw new Error()
}
const U1 = ['start', 'end', 'left', 'right', 'top', 'bottom'],
  K1 = $(
    {
      color: String,
      disableResizeWatcher: Boolean,
      disableRouteWatcher: Boolean,
      expandOnHover: Boolean,
      floating: Boolean,
      modelValue: { type: Boolean, default: null },
      permanent: Boolean,
      rail: { type: Boolean, default: null },
      railWidth: { type: [Number, String], default: 56 },
      scrim: { type: [Boolean, String], default: !0 },
      image: String,
      temporary: Boolean,
      persistent: Boolean,
      touchless: Boolean,
      width: { type: [Number, String], default: 256 },
      location: { type: String, default: 'start', validator: (e) => U1.includes(e) },
      sticky: Boolean,
      ...Zt(),
      ...ge(),
      ...Os(),
      ...ss({ mobile: null }),
      ...pt(),
      ...Nl(),
      ...ot(),
      ...Te({ tag: 'nav' }),
      ...$e(),
    },
    'VNavigationDrawer',
  ),
  G1 = J()({
    name: 'VNavigationDrawer',
    props: K1(),
    emits: { 'update:modelValue': (e) => !0, 'update:rail': (e) => !0 },
    setup(e, t) {
      let { attrs: n, emit: l, slots: a } = t
      const { isRtl: o } = ct(),
        { themeClasses: i } = qe(e),
        { borderClasses: r } = Jt(e),
        { backgroundColorClasses: s, backgroundColorStyles: c } = Je(ae(e, 'color')),
        { elevationClasses: u } = Et(e),
        { displayClasses: d, mobile: v } = $a(e),
        { roundedClasses: m } = it(e),
        h = Gv(),
        g = Ae(e, 'modelValue', null, (M) => !!M),
        { ssrBootStyles: y } = ml(),
        { scopeId: p } = za(),
        _ = H(),
        C = ue(!1),
        { runOpenDelay: k, runCloseDelay: I } = Bs(e, (M) => {
          C.value = M
        }),
        P = b(() =>
          e.rail && e.expandOnHover && C.value
            ? Number(e.width)
            : Number(e.rail ? e.railWidth : e.width),
        ),
        A = b(() => tr(e.location, o.value)),
        V = b(() => e.persistent),
        x = b(() => !e.permanent && (v.value || e.temporary)),
        O = b(() => e.sticky && !x.value && A.value !== 'bottom')
      Pt(
        () => e.expandOnHover && e.rail != null,
        () => {
          me(C, (M) => l('update:rail', !M))
        },
      ),
        Pt(
          () => !e.disableResizeWatcher,
          () => {
            me(x, (M) => !e.permanent && Ke(() => (g.value = !M)))
          },
        ),
        Pt(
          () => !e.disableRouteWatcher && !!h,
          () => {
            me(h.currentRoute, () => x.value && (g.value = !1))
          },
        ),
        me(
          () => e.permanent,
          (M) => {
            M && (g.value = !0)
          },
        ),
        e.modelValue == null && !x.value && (g.value = e.permanent || !v.value)
      const { isDragging: T, dragProgress: E } = W1({
          el: _,
          isActive: g,
          isTemporary: x,
          width: P,
          touchless: ae(e, 'touchless'),
          position: A,
        }),
        R = b(() => {
          const M = x.value ? 0 : e.rail && e.expandOnHover ? Number(e.railWidth) : P.value
          return T.value ? M * E.value : M
        }),
        N = b(() => (['top', 'bottom'].includes(e.location) ? 0 : P.value)),
        { layoutItemStyles: q, layoutItemScrimStyles: G } = Hl({
          id: e.name,
          order: b(() => parseInt(e.order, 10)),
          position: A,
          layoutSize: R,
          elementSize: N,
          active: b(() => g.value || T.value),
          disableTransitions: b(() => T.value),
          absolute: b(() => e.absolute || (O.value && typeof ee.value != 'string')),
        }),
        { isStuck: ee, stickyStyles: X } = $1({ rootEl: _, isSticky: O, layoutItemStyles: q }),
        U = Je(b(() => (typeof e.scrim == 'string' ? e.scrim : null))),
        F = b(() => ({
          ...(T.value ? { opacity: E.value * 0.2, transition: 'none' } : void 0),
          ...G.value,
        }))
      return (
        Qt({ VList: { bgColor: 'transparent' } }),
        oe(() => {
          const M = a.image || e.image
          return f(ke, null, [
            f(
              e.tag,
              ve(
                {
                  ref: _,
                  onMouseenter: k,
                  onMouseleave: I,
                  class: [
                    'v-navigation-drawer',
                    `v-navigation-drawer--${A.value}`,
                    {
                      'v-navigation-drawer--expand-on-hover': e.expandOnHover,
                      'v-navigation-drawer--floating': e.floating,
                      'v-navigation-drawer--is-hovering': C.value,
                      'v-navigation-drawer--rail': e.rail,
                      'v-navigation-drawer--temporary': x.value,
                      'v-navigation-drawer--persistent': V.value,
                      'v-navigation-drawer--active': g.value,
                      'v-navigation-drawer--sticky': O.value,
                    },
                    i.value,
                    s.value,
                    r.value,
                    d.value,
                    u.value,
                    m.value,
                    e.class,
                  ],
                  style: [
                    c.value,
                    q.value,
                    y.value,
                    X.value,
                    e.style,
                    ['top', 'bottom'].includes(A.value) ? { height: 'auto' } : {},
                  ],
                },
                p,
                n,
              ),
              {
                default: () => {
                  var ne, be, ie
                  return [
                    M &&
                      f('div', { key: 'image', class: 'v-navigation-drawer__img' }, [
                        a.image
                          ? f(
                              Me,
                              {
                                key: 'image-defaults',
                                disabled: !e.image,
                                defaults: {
                                  VImg: { alt: '', cover: !0, height: 'inherit', src: e.image },
                                },
                              },
                              a.image,
                            )
                          : f(
                              Na,
                              {
                                key: 'image-img',
                                alt: '',
                                cover: !0,
                                height: 'inherit',
                                src: e.image,
                              },
                              null,
                            ),
                      ]),
                    a.prepend &&
                      f('div', { class: 'v-navigation-drawer__prepend' }, [
                        (ne = a.prepend) == null ? void 0 : ne.call(a),
                      ]),
                    f('div', { class: 'v-navigation-drawer__content' }, [
                      (be = a.default) == null ? void 0 : be.call(a),
                    ]),
                    a.append &&
                      f('div', { class: 'v-navigation-drawer__append' }, [
                        (ie = a.append) == null ? void 0 : ie.call(a),
                      ]),
                  ]
                },
              },
            ),
            f(
              Hn,
              { name: 'fade-transition' },
              {
                default: () => [
                  x.value &&
                    (T.value || g.value) &&
                    !!e.scrim &&
                    f(
                      'div',
                      ve(
                        {
                          class: ['v-navigation-drawer__scrim', U.backgroundColorClasses.value],
                          style: [F.value, U.backgroundColorStyles.value],
                          onClick: () => {
                            V.value || (g.value = !1)
                          },
                        },
                        p,
                      ),
                      null,
                    ),
                ],
              },
            ),
          ])
        }),
        { isStuck: ee }
      )
    },
  }),
  Y1 = $(
    {
      ...ge(),
      ...Am({
        offset: 8,
        minWidth: 0,
        openDelay: 0,
        closeDelay: 100,
        location: 'top center',
        transition: 'scale-transition',
      }),
    },
    'VSpeedDial',
  ),
  q1 = J()({
    name: 'VSpeedDial',
    props: Y1(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const l = Ae(e, 'modelValue'),
        a = H(),
        o = b(() => {
          var c
          const [r, s = 'center'] = ((c = e.location) == null ? void 0 : c.split(' ')) ?? []
          return `${r} ${s}`
        }),
        i = b(() => ({ [`v-speed-dial__content--${o.value.replace(' ', '-')}`]: !0 }))
      return (
        oe(() => {
          const r = Io.filterProps(e)
          return f(
            Io,
            ve(r, {
              modelValue: l.value,
              'onUpdate:modelValue': (s) => (l.value = s),
              class: e.class,
              style: e.style,
              contentClass: ['v-speed-dial__content', i.value, e.contentClass],
              location: o.value,
              ref: a,
              transition: 'fade-transition',
            }),
            {
              ...n,
              default: (s) =>
                f(
                  Me,
                  { defaults: { VBtn: { size: 'small' } } },
                  {
                    default: () => [
                      f(
                        Kt,
                        { appear: !0, group: !0, transition: e.transition },
                        {
                          default: () => {
                            var c
                            return [(c = n.default) == null ? void 0 : c.call(n, s)]
                          },
                        },
                      ),
                    ],
                  },
                ),
            },
          )
        }),
        {}
      )
    },
  }),
  zs = Symbol.for('vuetify:v-stepper'),
  Ws = $(
    {
      color: String,
      disabled: { type: [Boolean, String], default: !1 },
      prevText: { type: String, default: '$vuetify.stepper.prev' },
      nextText: { type: String, default: '$vuetify.stepper.next' },
    },
    'VStepperActions',
  ),
  Oo = J()({
    name: 'VStepperActions',
    props: Ws(),
    emits: { 'click:prev': () => !0, 'click:next': () => !0 },
    setup(e, t) {
      let { emit: n, slots: l } = t
      const { t: a } = Kn()
      function o() {
        n('click:prev')
      }
      function i() {
        n('click:next')
      }
      return (
        oe(() => {
          const r = { onClick: o },
            s = { onClick: i }
          return f('div', { class: 'v-stepper-actions' }, [
            f(
              Me,
              {
                defaults: {
                  VBtn: {
                    disabled: ['prev', !0].includes(e.disabled),
                    text: a(e.prevText),
                    variant: 'text',
                  },
                },
              },
              {
                default: () => {
                  var c
                  return [
                    ((c = l.prev) == null ? void 0 : c.call(l, { props: r })) ?? f(gn, r, null),
                  ]
                },
              },
            ),
            f(
              Me,
              {
                defaults: {
                  VBtn: {
                    color: e.color,
                    disabled: ['next', !0].includes(e.disabled),
                    text: a(e.nextText),
                    variant: 'tonal',
                  },
                },
              },
              {
                default: () => {
                  var c
                  return [
                    ((c = l.next) == null ? void 0 : c.call(l, { props: s })) ?? f(gn, s, null),
                  ]
                },
              },
            ),
          ])
        }),
        {}
      )
    },
  }),
  oh = Ko('v-stepper-header'),
  ih = $(
    {
      color: String,
      title: String,
      subtitle: String,
      complete: Boolean,
      completeIcon: { type: Ee, default: '$complete' },
      editable: Boolean,
      editIcon: { type: Ee, default: '$edit' },
      error: Boolean,
      errorIcon: { type: Ee, default: '$error' },
      icon: Ee,
      ripple: { type: [Boolean, Object], default: !0 },
      rules: { type: Array, default: () => [] },
    },
    'StepperItem',
  ),
  X1 = $({ ...ih(), ...Wl() }, 'VStepperItem'),
  rh = J()({
    name: 'VStepperItem',
    directives: { Ripple: qn },
    props: X1(),
    emits: { 'group:selected': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const l = Ul(e, zs, !0),
        a = b(() => (l == null ? void 0 : l.value.value) ?? e.value),
        o = b(() => e.rules.every((v) => v() === !0)),
        i = b(() => !e.disabled && e.editable),
        r = b(() => !e.disabled && e.editable),
        s = b(() => e.error || !o.value),
        c = b(() => e.complete || (e.rules.length > 0 && o.value)),
        u = b(() =>
          s.value
            ? e.errorIcon
            : c.value
              ? e.completeIcon
              : l.isSelected.value && e.editable
                ? e.editIcon
                : e.icon,
        ),
        d = b(() => ({
          canEdit: r.value,
          hasError: s.value,
          hasCompleted: c.value,
          title: e.title,
          subtitle: e.subtitle,
          step: a.value,
          value: e.value,
        }))
      return (
        oe(() => {
          var y, p, _
          const v = (!l || l.isSelected.value || c.value || r.value) && !s.value && !e.disabled,
            m = !!(e.title != null || n.title),
            h = !!(e.subtitle != null || n.subtitle)
          function g() {
            l == null || l.toggle()
          }
          return Ye(
            f(
              'button',
              {
                class: [
                  'v-stepper-item',
                  {
                    'v-stepper-item--complete': c.value,
                    'v-stepper-item--disabled': e.disabled,
                    'v-stepper-item--error': s.value,
                  },
                  l == null ? void 0 : l.selectedClass.value,
                ],
                disabled: !e.editable,
                onClick: g,
              },
              [
                i.value && jl(!0, 'v-stepper-item'),
                f(
                  rn,
                  {
                    key: 'stepper-avatar',
                    class: 'v-stepper-item__avatar',
                    color: v ? e.color : void 0,
                    size: 24,
                  },
                  {
                    default: () => {
                      var C
                      return [
                        ((C = n.icon) == null ? void 0 : C.call(n, d.value)) ??
                          (u.value ? f(je, { icon: u.value }, null) : a.value),
                      ]
                    },
                  },
                ),
                f('div', { class: 'v-stepper-item__content' }, [
                  m &&
                    f('div', { key: 'title', class: 'v-stepper-item__title' }, [
                      ((y = n.title) == null ? void 0 : y.call(n, d.value)) ?? e.title,
                    ]),
                  h &&
                    f('div', { key: 'subtitle', class: 'v-stepper-item__subtitle' }, [
                      ((p = n.subtitle) == null ? void 0 : p.call(n, d.value)) ?? e.subtitle,
                    ]),
                  (_ = n.default) == null ? void 0 : _.call(n, d.value),
                ]),
              ],
            ),
            [[qt('ripple'), e.ripple && e.editable, null]],
          )
        }),
        {}
      )
    },
  }),
  Q1 = $(
    { ...Dt(jm(), ['continuous', 'nextIcon', 'prevIcon', 'showArrows', 'touch', 'mandatory']) },
    'VStepperWindow',
  ),
  sh = J()({
    name: 'VStepperWindow',
    props: Q1(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const l = Ie(zs, null),
        a = Ae(e, 'modelValue'),
        o = b({
          get() {
            var i
            return a.value != null || !l
              ? a.value
              : (i = l.items.value.find((r) => l.selected.value.includes(r.id))) == null
                ? void 0
                : i.value
          },
          set(i) {
            a.value = i
          },
        })
      return (
        oe(() => {
          const i = Xc.filterProps(e)
          return f(
            Xc,
            ve({ _as: 'VStepperWindow' }, i, {
              modelValue: o.value,
              'onUpdate:modelValue': (r) => (o.value = r),
              class: ['v-stepper-window', e.class],
              style: e.style,
              mandatory: !1,
              touch: !1,
            }),
            n,
          )
        }),
        {}
      )
    },
  }),
  Z1 = $({ ...zm() }, 'VStepperWindowItem'),
  uh = J()({
    name: 'VStepperWindowItem',
    props: Z1(),
    setup(e, t) {
      let { slots: n } = t
      return (
        oe(() => {
          const l = Qc.filterProps(e)
          return f(
            Qc,
            ve({ _as: 'VStepperWindowItem' }, l, {
              class: ['v-stepper-window-item', e.class],
              style: e.style,
            }),
            n,
          )
        }),
        {}
      )
    },
  }),
  J1 = $(
    {
      altLabels: Boolean,
      bgColor: String,
      completeIcon: Ee,
      editIcon: Ee,
      editable: Boolean,
      errorIcon: Ee,
      hideActions: Boolean,
      items: { type: Array, default: () => [] },
      itemTitle: { type: String, default: 'title' },
      itemValue: { type: String, default: 'value' },
      nonLinear: Boolean,
      flat: Boolean,
      ...ss(),
    },
    'Stepper',
  ),
  ek = $(
    {
      ...J1(),
      ...zl({ mandatory: 'force', selectedClass: 'v-stepper-item--selected' }),
      ...Ns(),
      ...Zr(Ws(), ['prevText', 'nextText']),
    },
    'VStepper',
  ),
  tk = J()({
    name: 'VStepper',
    props: ek(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const { items: l, next: a, prev: o, selected: i } = hl(e, zs),
        { displayClasses: r, mobile: s } = $a(e),
        {
          completeIcon: c,
          editIcon: u,
          errorIcon: d,
          color: v,
          editable: m,
          prevText: h,
          nextText: g,
        } = Ba(e),
        y = b(() =>
          e.items.map((C, k) => {
            const I = Wt(C, e.itemTitle, C),
              P = Wt(C, e.itemValue, k + 1)
            return { title: I, value: P, raw: C }
          }),
        ),
        p = b(() => l.value.findIndex((C) => i.value.includes(C.id))),
        _ = b(() =>
          e.disabled
            ? e.disabled
            : p.value === 0
              ? 'prev'
              : p.value === l.value.length - 1
                ? 'next'
                : !1,
        )
      return (
        Qt({
          VStepperItem: {
            editable: m,
            errorIcon: d,
            completeIcon: c,
            editIcon: u,
            prevText: h,
            nextText: g,
          },
          VStepperActions: { color: v, disabled: _, prevText: h, nextText: g },
        }),
        oe(() => {
          const C = Ia.filterProps(e),
            k = !!(n.header || e.items.length),
            I = e.items.length > 0,
            P = !e.hideActions && !!(I || n.actions)
          return f(
            Ia,
            ve(C, {
              color: e.bgColor,
              class: [
                'v-stepper',
                {
                  'v-stepper--alt-labels': e.altLabels,
                  'v-stepper--flat': e.flat,
                  'v-stepper--non-linear': e.nonLinear,
                  'v-stepper--mobile': s.value,
                },
                r.value,
                e.class,
              ],
              style: e.style,
            }),
            {
              default: () => {
                var A, V
                return [
                  k &&
                    f(
                      oh,
                      { key: 'stepper-header' },
                      {
                        default: () => [
                          y.value.map((x, O) => {
                            let { raw: T, ...E } = x
                            return f(ke, null, [
                              !!O && f(Is, null, null),
                              f(rh, E, {
                                default: n[`header-item.${E.value}`] ?? n.header,
                                icon: n.icon,
                                title: n.title,
                                subtitle: n.subtitle,
                              }),
                            ])
                          }),
                        ],
                      },
                    ),
                  I &&
                    f(
                      sh,
                      { key: 'stepper-window' },
                      {
                        default: () => [
                          y.value.map((x) =>
                            f(
                              uh,
                              { value: x.value },
                              {
                                default: () => {
                                  var O, T
                                  return (
                                    ((O = n[`item.${x.value}`]) == null ? void 0 : O.call(n, x)) ??
                                    ((T = n.item) == null ? void 0 : T.call(n, x))
                                  )
                                },
                              },
                            ),
                          ),
                        ],
                      },
                    ),
                  (A = n.default) == null ? void 0 : A.call(n, { prev: o, next: a }),
                  P &&
                    (((V = n.actions) == null ? void 0 : V.call(n, { next: a, prev: o })) ??
                      f(Oo, { key: 'stepper-actions', 'onClick:prev': o, 'onClick:next': a }, n)),
                ]
              },
            },
          )
        }),
        { prev: o, next: a }
      )
    },
  }),
  nk = $(
    {
      color: String,
      height: [Number, String],
      window: Boolean,
      ...ge(),
      ...pt(),
      ...Nl(),
      ...ot(),
      ...Te(),
      ...$e(),
    },
    'VSystemBar',
  ),
  lk = J()({
    name: 'VSystemBar',
    props: nk(),
    setup(e, t) {
      let { slots: n } = t
      const { themeClasses: l } = qe(e),
        { backgroundColorClasses: a, backgroundColorStyles: o } = Je(ae(e, 'color')),
        { elevationClasses: i } = Et(e),
        { roundedClasses: r } = it(e),
        { ssrBootStyles: s } = ml(),
        c = b(() => e.height ?? (e.window ? 32 : 24)),
        { layoutItemStyles: u } = Hl({
          id: e.name,
          order: b(() => parseInt(e.order, 10)),
          position: ue('top'),
          layoutSize: c,
          elementSize: c,
          active: b(() => !0),
          absolute: ae(e, 'absolute'),
        })
      return (
        oe(() =>
          f(
            e.tag,
            {
              class: [
                'v-system-bar',
                { 'v-system-bar--window': e.window },
                l.value,
                a.value,
                i.value,
                r.value,
                e.class,
              ],
              style: [o.value, u.value, s.value, e.style],
            },
            n,
          ),
        ),
        {}
      )
    },
  }),
  ak = $(
    {
      autoGrow: Boolean,
      autofocus: Boolean,
      counter: [Boolean, Number, String],
      counterValue: Function,
      prefix: String,
      placeholder: String,
      persistentPlaceholder: Boolean,
      persistentCounter: Boolean,
      noResize: Boolean,
      rows: { type: [Number, String], default: 5, validator: (e) => !isNaN(parseFloat(e)) },
      maxRows: { type: [Number, String], validator: (e) => !isNaN(parseFloat(e)) },
      suffix: String,
      modelModifiers: Object,
      ...ql(),
      ...li(),
    },
    'VTextarea',
  ),
  ok = J()({
    name: 'VTextarea',
    directives: { Intersect: ps },
    inheritAttrs: !1,
    props: ak(),
    emits: {
      'click:control': (e) => !0,
      'mousedown:control': (e) => !0,
      'update:focused': (e) => !0,
      'update:modelValue': (e) => !0,
    },
    setup(e, t) {
      let { attrs: n, emit: l, slots: a } = t
      const o = Ae(e, 'modelValue'),
        { isFocused: i, focus: r, blur: s } = Yl(e),
        c = b(() =>
          typeof e.counterValue == 'function'
            ? e.counterValue(o.value)
            : (o.value || '').toString().length,
        ),
        u = b(() => {
          if (n.maxlength) return n.maxlength
          if (!(!e.counter || (typeof e.counter != 'number' && typeof e.counter != 'string')))
            return e.counter
        })
      function d(T, E) {
        var R, N
        !e.autofocus ||
          !T ||
          (N = (R = E[0].target) == null ? void 0 : R.focus) == null ||
          N.call(R)
      }
      const v = H(),
        m = H(),
        h = ue(''),
        g = H(),
        y = b(() => e.persistentPlaceholder || i.value || e.active)
      function p() {
        var T
        g.value !== document.activeElement && ((T = g.value) == null || T.focus()), i.value || r()
      }
      function _(T) {
        p(), l('click:control', T)
      }
      function C(T) {
        l('mousedown:control', T)
      }
      function k(T) {
        T.stopPropagation(),
          p(),
          Ke(() => {
            ;(o.value = ''), ts(e['onClick:clear'], T)
          })
      }
      function I(T) {
        var R
        const E = T.target
        if (((o.value = E.value), (R = e.modelModifiers) != null && R.trim)) {
          const N = [E.selectionStart, E.selectionEnd]
          Ke(() => {
            ;(E.selectionStart = N[0]), (E.selectionEnd = N[1])
          })
        }
      }
      const P = H(),
        A = H(+e.rows),
        V = b(() => ['plain', 'underlined'].includes(e.variant))
      yt(() => {
        e.autoGrow || (A.value = +e.rows)
      })
      function x() {
        e.autoGrow &&
          Ke(() => {
            if (!P.value || !m.value) return
            const T = getComputedStyle(P.value),
              E = getComputedStyle(m.value.$el),
              R =
                parseFloat(T.getPropertyValue('--v-field-padding-top')) +
                parseFloat(T.getPropertyValue('--v-input-padding-top')) +
                parseFloat(T.getPropertyValue('--v-field-padding-bottom')),
              N = P.value.scrollHeight,
              q = parseFloat(T.lineHeight),
              G = Math.max(
                parseFloat(e.rows) * q + R,
                parseFloat(E.getPropertyValue('--v-input-control-height')),
              ),
              ee = parseFloat(e.maxRows) * q + R || 1 / 0,
              X = dt(N ?? 0, G, ee)
            ;(A.value = Math.floor((X - R) / q)), (h.value = he(X))
          })
      }
      Vt(x), me(o, x), me(() => e.rows, x), me(() => e.maxRows, x), me(() => e.density, x)
      let O
      return (
        me(P, (T) => {
          T ? ((O = new ResizeObserver(x)), O.observe(P.value)) : O == null || O.disconnect()
        }),
        ut(() => {
          O == null || O.disconnect()
        }),
        oe(() => {
          const T = !!(a.counter || e.counter || e.counterValue),
            E = !!(T || a.details),
            [R, N] = Da(n),
            { modelValue: q, ...G } = yn.filterProps(e),
            ee = Ms(e)
          return f(
            yn,
            ve(
              {
                ref: v,
                modelValue: o.value,
                'onUpdate:modelValue': (X) => (o.value = X),
                class: [
                  'v-textarea v-text-field',
                  {
                    'v-textarea--prefixed': e.prefix,
                    'v-textarea--suffixed': e.suffix,
                    'v-text-field--prefixed': e.prefix,
                    'v-text-field--suffixed': e.suffix,
                    'v-textarea--auto-grow': e.autoGrow,
                    'v-textarea--no-resize': e.noResize || e.autoGrow,
                    'v-input--plain-underlined': V.value,
                  },
                  e.class,
                ],
                style: e.style,
              },
              R,
              G,
              { centerAffix: A.value === 1 && !V.value, focused: i.value },
            ),
            {
              ...a,
              default: (X) => {
                let { id: U, isDisabled: F, isDirty: M, isReadonly: ne, isValid: be } = X
                return f(
                  ai,
                  ve(
                    {
                      ref: m,
                      style: { '--v-textarea-control-height': h.value },
                      onClick: _,
                      onMousedown: C,
                      'onClick:clear': k,
                      'onClick:prependInner': e['onClick:prependInner'],
                      'onClick:appendInner': e['onClick:appendInner'],
                    },
                    ee,
                    {
                      id: U.value,
                      active: y.value || M.value,
                      centerAffix: A.value === 1 && !V.value,
                      dirty: M.value || e.dirty,
                      disabled: F.value,
                      focused: i.value,
                      error: be.value === !1,
                    },
                  ),
                  {
                    ...a,
                    default: (ie) => {
                      let {
                        props: { class: pe, ...j },
                      } = ie
                      return f(ke, null, [
                        e.prefix && f('span', { class: 'v-text-field__prefix' }, [e.prefix]),
                        Ye(
                          f(
                            'textarea',
                            ve(
                              {
                                ref: g,
                                class: pe,
                                value: o.value,
                                onInput: I,
                                autofocus: e.autofocus,
                                readonly: ne.value,
                                disabled: F.value,
                                placeholder: e.placeholder,
                                rows: e.rows,
                                name: e.name,
                                onFocus: p,
                                onBlur: s,
                              },
                              j,
                              N,
                            ),
                            null,
                          ),
                          [[qt('intersect'), { handler: d }, null, { once: !0 }]],
                        ),
                        e.autoGrow &&
                          Ye(
                            f(
                              'textarea',
                              {
                                class: [pe, 'v-textarea__sizer'],
                                id: `${j.id}-sizer`,
                                'onUpdate:modelValue': (L) => (o.value = L),
                                ref: P,
                                readonly: !0,
                                'aria-hidden': 'true',
                              },
                              null,
                            ),
                            [[Iy, o.value]],
                          ),
                        e.suffix && f('span', { class: 'v-text-field__suffix' }, [e.suffix]),
                      ])
                    },
                  },
                )
              },
              details: E
                ? (X) => {
                    var U
                    return f(ke, null, [
                      (U = a.details) == null ? void 0 : U.call(a, X),
                      T &&
                        f(ke, null, [
                          f('span', null, null),
                          f(
                            Fs,
                            {
                              active: e.persistentCounter || i.value,
                              value: c.value,
                              max: u.value,
                              disabled: e.disabled,
                            },
                            a.counter,
                          ),
                        ]),
                    ])
                  }
                : void 0,
            },
          )
        }),
        An({}, v, m, g)
      )
    },
  }),
  ik = $(
    {
      dotColor: String,
      fillDot: Boolean,
      hideDot: Boolean,
      icon: Ee,
      iconColor: String,
      lineColor: String,
      ...ge(),
      ...ot(),
      ...gl(),
      ...pt(),
    },
    'VTimelineDivider',
  ),
  rk = J()({
    name: 'VTimelineDivider',
    props: ik(),
    setup(e, t) {
      let { slots: n } = t
      const { sizeClasses: l, sizeStyles: a } = Kl(e, 'v-timeline-divider__dot'),
        { backgroundColorStyles: o, backgroundColorClasses: i } = Je(ae(e, 'dotColor')),
        { roundedClasses: r } = it(e, 'v-timeline-divider__dot'),
        { elevationClasses: s } = Et(e),
        { backgroundColorClasses: c, backgroundColorStyles: u } = Je(ae(e, 'lineColor'))
      return (
        oe(() =>
          f(
            'div',
            {
              class: ['v-timeline-divider', { 'v-timeline-divider--fill-dot': e.fillDot }, e.class],
              style: e.style,
            },
            [
              f('div', { class: ['v-timeline-divider__before', c.value], style: u.value }, null),
              !e.hideDot &&
                f(
                  'div',
                  {
                    key: 'dot',
                    class: ['v-timeline-divider__dot', s.value, r.value, l.value],
                    style: a.value,
                  },
                  [
                    f(
                      'div',
                      {
                        class: ['v-timeline-divider__inner-dot', i.value, r.value],
                        style: o.value,
                      },
                      [
                        n.default
                          ? f(
                              Me,
                              {
                                key: 'icon-defaults',
                                disabled: !e.icon,
                                defaults: {
                                  VIcon: { color: e.iconColor, icon: e.icon, size: e.size },
                                },
                              },
                              n.default,
                            )
                          : f(
                              je,
                              { key: 'icon', color: e.iconColor, icon: e.icon, size: e.size },
                              null,
                            ),
                      ],
                    ),
                  ],
                ),
              f('div', { class: ['v-timeline-divider__after', c.value], style: u.value }, null),
            ],
          ),
        ),
        {}
      )
    },
  }),
  ch = $(
    {
      density: String,
      dotColor: String,
      fillDot: Boolean,
      hideDot: Boolean,
      hideOpposite: { type: Boolean, default: void 0 },
      icon: Ee,
      iconColor: String,
      lineInset: [Number, String],
      ...ge(),
      ...Tt(),
      ...pt(),
      ...ot(),
      ...gl(),
      ...Te(),
    },
    'VTimelineItem',
  ),
  sk = J()({
    name: 'VTimelineItem',
    props: ch(),
    setup(e, t) {
      let { slots: n } = t
      const { dimensionStyles: l } = Ot(e),
        a = ue(0),
        o = H()
      return (
        me(
          o,
          (i) => {
            var r
            i &&
              (a.value =
                ((r = i.$el.querySelector('.v-timeline-divider__dot')) == null
                  ? void 0
                  : r.getBoundingClientRect().width) ?? 0)
          },
          { flush: 'post' },
        ),
        oe(() => {
          var i, r
          return f(
            'div',
            {
              class: ['v-timeline-item', { 'v-timeline-item--fill-dot': e.fillDot }, e.class],
              style: [
                {
                  '--v-timeline-dot-size': he(a.value),
                  '--v-timeline-line-inset': e.lineInset
                    ? `calc(var(--v-timeline-dot-size) / 2 + ${he(e.lineInset)})`
                    : he(0),
                },
                e.style,
              ],
            },
            [
              f('div', { class: 'v-timeline-item__body', style: l.value }, [
                (i = n.default) == null ? void 0 : i.call(n),
              ]),
              f(
                rk,
                {
                  ref: o,
                  hideDot: e.hideDot,
                  icon: e.icon,
                  iconColor: e.iconColor,
                  size: e.size,
                  elevation: e.elevation,
                  dotColor: e.dotColor,
                  fillDot: e.fillDot,
                  rounded: e.rounded,
                },
                { default: n.icon },
              ),
              e.density !== 'compact' &&
                f('div', { class: 'v-timeline-item__opposite' }, [
                  !e.hideOpposite && ((r = n.opposite) == null ? void 0 : r.call(n)),
                ]),
            ],
          )
        }),
        {}
      )
    },
  }),
  uk = $(
    {
      align: { type: String, default: 'center', validator: (e) => ['center', 'start'].includes(e) },
      direction: {
        type: String,
        default: 'vertical',
        validator: (e) => ['vertical', 'horizontal'].includes(e),
      },
      justify: { type: String, default: 'auto', validator: (e) => ['auto', 'center'].includes(e) },
      side: { type: String, validator: (e) => e == null || ['start', 'end'].includes(e) },
      lineThickness: { type: [String, Number], default: 2 },
      lineColor: String,
      truncateLine: { type: String, validator: (e) => ['start', 'end', 'both'].includes(e) },
      ...Zr(ch({ lineInset: 0 }), [
        'dotColor',
        'fillDot',
        'hideOpposite',
        'iconColor',
        'lineInset',
        'size',
      ]),
      ...ge(),
      ...Ht(),
      ...Te(),
      ...$e(),
    },
    'VTimeline',
  ),
  ck = J()({
    name: 'VTimeline',
    props: uk(),
    setup(e, t) {
      let { slots: n } = t
      const { themeClasses: l } = qe(e),
        { densityClasses: a } = en(e),
        { rtlClasses: o } = ct()
      Qt({
        VTimelineDivider: { lineColor: ae(e, 'lineColor') },
        VTimelineItem: {
          density: ae(e, 'density'),
          dotColor: ae(e, 'dotColor'),
          fillDot: ae(e, 'fillDot'),
          hideOpposite: ae(e, 'hideOpposite'),
          iconColor: ae(e, 'iconColor'),
          lineColor: ae(e, 'lineColor'),
          lineInset: ae(e, 'lineInset'),
          size: ae(e, 'size'),
        },
      })
      const i = b(() => {
          const s = e.side ? e.side : e.density !== 'default' ? 'end' : null
          return s && `v-timeline--side-${s}`
        }),
        r = b(() => {
          const s = ['v-timeline--truncate-line-start', 'v-timeline--truncate-line-end']
          switch (e.truncateLine) {
            case 'both':
              return s
            case 'start':
              return s[0]
            case 'end':
              return s[1]
            default:
              return null
          }
        })
      return (
        oe(() =>
          f(
            e.tag,
            {
              class: [
                'v-timeline',
                `v-timeline--${e.direction}`,
                `v-timeline--align-${e.align}`,
                `v-timeline--justify-${e.justify}`,
                r.value,
                { 'v-timeline--inset-line': !!e.lineInset },
                l.value,
                a.value,
                i.value,
                o.value,
                e.class,
              ],
              style: [{ '--v-timeline-line-thickness': he(e.lineThickness) }, e.style],
            },
            n,
          ),
        ),
        {}
      )
    },
  }),
  dk = $(
    {
      id: String,
      text: String,
      ...Dt(
        ni({
          closeOnBack: !1,
          location: 'end',
          locationStrategy: 'connected',
          eager: !0,
          minWidth: 0,
          offset: 10,
          openOnClick: !1,
          openOnHover: !0,
          origin: 'auto',
          scrim: !1,
          scrollStrategy: 'reposition',
          transition: !1,
        }),
        ['absolute', 'persistent'],
      ),
    },
    'VTooltip',
  ),
  fk = J()({
    name: 'VTooltip',
    props: dk(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const l = Ae(e, 'modelValue'),
        { scopeId: a } = za(),
        o = $t(),
        i = b(() => e.id || `v-tooltip-${o}`),
        r = H(),
        s = b(() => (e.location.split(' ').length > 1 ? e.location : e.location + ' center')),
        c = b(() =>
          e.origin === 'auto' ||
          e.origin === 'overlap' ||
          e.origin.split(' ').length > 1 ||
          e.location.split(' ').length > 1
            ? e.origin
            : e.origin + ' center',
        ),
        u = b(() =>
          e.transition ? e.transition : l.value ? 'scale-transition' : 'fade-transition',
        ),
        d = b(() => ve({ 'aria-describedby': i.value }, e.activatorProps))
      return (
        oe(() => {
          const v = Dl.filterProps(e)
          return f(
            Dl,
            ve(
              { ref: r, class: ['v-tooltip', e.class], style: e.style, id: i.value },
              v,
              {
                modelValue: l.value,
                'onUpdate:modelValue': (m) => (l.value = m),
                transition: u.value,
                absolute: !0,
                location: s.value,
                origin: c.value,
                persistent: !0,
                role: 'tooltip',
                activatorProps: d.value,
                _disableGlobalStack: !0,
              },
              a,
            ),
            {
              activator: n.activator,
              default: function () {
                var y
                for (var m = arguments.length, h = new Array(m), g = 0; g < m; g++)
                  h[g] = arguments[g]
                return ((y = n.default) == null ? void 0 : y.call(n, ...h)) ?? e.text
              },
            },
          )
        }),
        An({}, r)
      )
    },
  }),
  vk = $({ ...Ws() }, 'VStepperActions'),
  dh = J()({
    name: 'VStepperVerticalActions',
    props: vk(),
    emits: { 'click:prev': () => !0, 'click:next': () => !0 },
    setup(e, t) {
      let { emit: n, slots: l } = t
      function a() {
        n('click:prev')
      }
      function o() {
        n('click:next')
      }
      return (
        oe(() => {
          const i = Oo.filterProps(e)
          return f(
            Oo,
            ve({ class: 'v-stepper-vertical-actions' }, i, {
              'onClick:prev': a,
              'onClick:next': o,
            }),
            l,
          )
        }),
        {}
      )
    },
  }),
  mk = $(
    {
      hideActions: Boolean,
      ...ih(),
      ...Dt(lh({ expandIcon: '', collapseIcon: '' }), ['hideActions']),
    },
    'VStepperVerticalItem',
  ),
  hk = J()({
    name: 'VStepperVerticalItem',
    props: mk(),
    emits: { 'click:next': () => !0, 'click:prev': () => !0, 'click:finish': () => !0 },
    setup(e, t) {
      let { emit: n, slots: l } = t
      const a = H(),
        o = b(() => (isNaN(parseInt(e.value)) ? e.value : Number(e.value))),
        i = b(() => {
          var _
          return (_ = a.value) == null ? void 0 : _.groupItem
        }),
        r = b(() => {
          var _
          return ((_ = i.value) == null ? void 0 : _.isSelected.value) ?? !1
        }),
        s = b(() => (r.value ? e.rules.every((_) => _() === !0) : null)),
        c = b(() => !e.disabled && e.editable),
        u = b(() => e.error || (r.value && !s.value)),
        d = b(() => e.complete || (e.rules.length > 0 && s.value === !0)),
        v = b(() => {
          var _
          return e.disabled ? e.disabled : (_ = i.value) != null && _.isFirst.value ? 'prev' : !1
        }),
        m = b(() => {
          var _
          return u.value
            ? e.errorIcon
            : d.value
              ? e.completeIcon
              : (_ = i.value) != null && _.isSelected.value && e.editable
                ? e.editIcon
                : e.icon
        }),
        h = b(() => ({
          canEdit: c.value,
          hasError: u.value,
          hasCompleted: d.value,
          title: e.title,
          subtitle: e.subtitle,
          step: o.value,
          value: e.value,
        })),
        g = b(() => ({ ...h.value, prev: p, next: y }))
      function y() {
        var _
        n('click:next'), !((_ = i.value) != null && _.isLast.value) && i.value.group.next()
      }
      function p() {
        n('click:prev'), i.value.group.prev()
      }
      return (
        oe(() => {
          var I
          const _ =
              (d.value || ((I = i.value) == null ? void 0 : I.isSelected.value)) &&
              !u.value &&
              !e.disabled,
            C = !e.hideActions || !!l.actions,
            k = ld.filterProps(e)
          return f(
            ld,
            ve({ _as: 'VStepperVerticalItem', ref: a }, k, {
              class: [
                'v-stepper-vertical-item',
                {
                  'v-stepper-vertical-item--complete': d.value,
                  'v-stepper-vertical-item--disabled': e.disabled,
                  'v-stepper-vertical-item--editable': c.value,
                  'v-stepper-vertical-item--error': u.value,
                },
                e.class,
              ],
              readonly: !e.editable,
              style: e.style,
              color: '',
              'hide-actions': !1,
              value: o.value,
            }),
            {
              title: () => {
                var P, A
                return f(ke, null, [
                  f(
                    rn,
                    {
                      key: 'stepper-avatar',
                      class: 'v-stepper-vertical-item__avatar',
                      color: _ ? e.color : void 0,
                      size: 24,
                      start: !0,
                    },
                    {
                      default: () => {
                        var V
                        return [
                          ((V = l.icon) == null ? void 0 : V.call(l, h.value)) ??
                            (m.value ? f(je, { icon: m.value }, null) : o.value),
                        ]
                      },
                    },
                  ),
                  f('div', null, [
                    f('div', { class: 'v-stepper-vertical-item__title' }, [
                      ((P = l.title) == null ? void 0 : P.call(l, h.value)) ?? e.title,
                    ]),
                    f('div', { class: 'v-stepper-vertical-item__subtitle' }, [
                      ((A = l.subtitle) == null ? void 0 : A.call(l, h.value)) ?? e.subtitle,
                    ]),
                  ]),
                ])
              },
              text: () => {
                var P, A
                return f(ke, null, [
                  ((P = l.default) == null ? void 0 : P.call(l, h.value)) ?? e.text,
                  C &&
                    f(
                      Me,
                      {
                        defaults: {
                          VStepperVerticalActions: {
                            disabled: v.value,
                            finish: (A = i.value) == null ? void 0 : A.isLast.value,
                          },
                        },
                      },
                      {
                        default: () => {
                          var V
                          return [
                            ((V = l.actions) == null ? void 0 : V.call(l, g.value)) ??
                              f(
                                dh,
                                { 'onClick:next': y, 'onClick:prev': p },
                                {
                                  prev: l.prev
                                    ? () => {
                                        var x
                                        return (x = l.prev) == null ? void 0 : x.call(l, g.value)
                                      }
                                    : void 0,
                                  next: l.next
                                    ? () => {
                                        var x
                                        return (x = l.next) == null ? void 0 : x.call(l, g.value)
                                      }
                                    : void 0,
                                },
                              ),
                          ]
                        },
                      },
                    ),
                ])
              },
            },
          )
        }),
        {}
      )
    },
  }),
  oi = Fy(P0),
  gk = pv({
    theme: {
      defaultTheme: 'dark',
      themes: {
        light: {
          dark: !1,
          colors: {
            primary: '#2B75B1',
            secondary: '#00CC88',
            tertiary: '#9E3E3B',
            quaternary: '#FFBB00',
            accent: '#82B1FF',
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FFC107',
            d20: '#2B75B1',
            d12: '#00CC88',
            d10: '#9E3E3B',
            d8: '#FFBB00',
            d6: '#82B1FF',
            d4: '#FF5252',
            'background-variant': '#f5f5f5',
            'sta-career': '#FFBB00',
          },
        },
        dark: {
          dark: !0,
          colors: {
            primary: '#2B75B1',
            secondary: '#00CC88',
            tertiary: '#9E3E3B',
            quaternary: '#FFBB00',
            accent: '#82B1FF',
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FFC107',
            d20: '#2B75B1',
            d12: '#00CC88',
            d10: '#9E3E3B',
            d8: '#FFBB00',
            d6: '#82B1FF',
            d4: '#FF5252',
            'sta-career': '#FFBB00',
          },
        },
      },
    },
    icons: {
      defaultSet: 'mdi',
      aliases: {
        ...Up,
        ...zp,
        ...fv,
        tag: 'mdi-tag-outline',
        'no-tag': 'mdi-circle-small',
        tags: 'mdi-tag-multiple',
        'no-tags': 'mdi-tag-multiple-outline',
        event: 'mdi-timeline',
        'no-event': 'mdi-timeline-outline',
        events: 'mdi-calendar-clock',
        'no-events': 'mdi-calendar-clock-outline',
        swatches: 'mdi-palette-swatch',
        'no-swatches': 'mdi-palette-swatch-outline',
        dropper: 'mdi-eyedropper',
        'no-dropper': 'mdi-eyedropper-off',
        dice: 'mdi-dice-multiple',
        'no-dice': 'mdi-dice-multiple-outline',
        d20: 'mdi-dice-d20',
        d12: 'mdi-dice-d12',
        d10: 'mdi-dice-d10',
        d8: 'mdi-dice-d8',
        d6: 'mdi-dice-d6',
        d4: 'mdi-dice-d4',
        challenge: 'mdi-hazard-lights',
        id: 'mdi-account-box-outline',
        name: 'mdi-account-circle-outline',
        space: 'mdi-tag-multiple-outline',
        color: 'mdi-palette',
        home: 'mdi-home',
        icon: 'mdi-label-variant-outline',
        next: 'mdi-arrow-right',
        delete: 'mdi-close',
        clear: 'mdi-close',
        close: 'mdi-close',
        upvote: 'mdi-arrow-up',
        downvote: 'mdi-arrow-down',
        comment: 'mdi-comment',
        favorite: 'mdi-heart',
        share: 'mdi-share',
        addTag: 'mdi-tag-plus',
        primary: 'mdi-cards-spade',
        secondary: 'mdi-cards-club',
        tertiary: 'mdi-cards-heart',
        quaternary: 'mdi-cards-diamond',
        wormhole: 'mdi-atom-variant',
        scarf: '🧣',
        'persona-name': 'mdi-account-circle',
        'sta-attribute': 'md:edit_attributes',
        'sta-department': 'md:toggle_off',
        'sta-trait': 'mdi-star-four-points-outline',
        'sta-talent': 'mdi-star-four-points',
        'sta-value': 'mdi-star-four-points-small',
        'sta-focus': 'mdi-image-filter-center-focus',
        'sta-control': 'mdi-image-filter-center-focus-strong',
        'sta-daring': 'mdi-octagram',
        'sta-fitness': 'mdi-heart-pulse',
        'sta-presence': 'mdi-account-multiple',
        'sta-insight': 'mdi-head-snowflake',
        'sta-reason': 'mdi-brain',
        'sta-command': 'mdi-account-group',
        'sta-conn': 'mdi-gamepad',
        'sta-engineering': 'mdi-wrench',
        'sta-security': 'mdi-shield-account',
        'sta-medicine': 'mdi-hospital-box',
        'sta-science': 'mdi-atom-variant',
        'sta-species': 'mdi-account-box',
        'sta-environment': 'mdi-earth-box',
        'sta-upbringing': 'mdi-home-account',
        'sta-career': 'mdi-map-marker-path',
        'sta-experience': 'mdi-note-edit',
        'sta-event': 'mdi-note-edit',
        'sta-stepone': 'mdi-account-box',
        'sta-steptwo': 'mdi-earth-box',
        'sta-stepthree': 'mdi-home-account',
        'sta-stepfour': 'mdi-map-marker-path',
        'sta-stepfive': 'mdi-note-edit',
        'sta-stepsix': 'mdi-calendar-account',
        'sta-stepseven': 'mdi-checkbox-multiple-marked',
      },
      sets: { mdi: vv, md: Wp, fa: Kp },
    },
    components: {
      VTag: qp,
      VTagItem: rr,
      VApp: LS,
      VAppBar: US,
      VAppBarNavIcon: m_,
      VAppBarTitle: h_,
      VToolbar: fr,
      VToolbarTitle: ms,
      VContainer: u1,
      VMain: D1,
      VLayout: F1,
      VResponsive: dr,
      VBottomNavigation: Qw,
      VNavigationDrawer: G1,
      VList: Ts,
      VListItem: dl,
      VForm: A1,
      VTextarea: ok,
      VTable: r1,
      VFileInput: x1,
      VRow: S1,
      VCol: v1,
      VTextField: Aa,
      VImg: Na,
      VCard: aC,
      VCardItem: Mm,
      VCardTitle: Fm,
      VCardSubtitle: Rm,
      VCardText: Dm,
      VCardActions: Lm,
      VSheet: Ia,
      VIcon: je,
      VBtn: gn,
      VBtnToggle: QS,
      VAvatar: rn,
      VBadge: qw,
      VDialog: Sr,
      VSelect: Nw,
      VAutocomplete: Gw,
      VCheckbox: E_,
      VSpacer: _1,
      VDivider: Is,
      VBottomSheet: Jw,
      VFooter: E1,
      VChip: ti,
      VChipGroup: B_,
      VItem: L1,
      VItemGroup: B1,
      VTooltip: fk,
      VColorPicker: o1,
      VLabel: ei,
      VHover: T1,
      VFab: C1,
      VTimeline: ck,
      VTimelineItem: sk,
      VStepper: tk,
      VStepperActions: Oo,
      VStepperHeader: oh,
      VStepperItem: rh,
      VStepperWindow: sh,
      VStepperWindowItem: uh,
      VStepperVerticalActions: dh,
      VStepperVerticalItem: hk,
      VSpeedDial: q1,
      VSystemBar: lk,
      VScaleTransition: Dv,
      VExpandXTransition: ys,
    },
  })
oi.use(Ny())
oi.use(OS)
oi.use(gk)
oi.mount('#app')
export {
  ke as F,
  nn as T,
  w0 as _,
  ye as a,
  f as b,
  ho as c,
  at as d,
  Zd as e,
  ze as f,
  Nn as g,
  Vt as h,
  nt as i,
  Xe as j,
  fl as k,
  E0 as l,
  Fa as m,
  Pr as n,
  Le as o,
  _v as p,
  H as r,
  zt as t,
  ds as u,
  ce as w,
}
