import { t as e } from "./rolldown-runtime.DhnBybyj.mjs";
import {
  A as t,
  C as n,
  D as r,
  I as i,
  M as a,
  N as o,
  O as s,
  P as c,
  R as l,
  T as u,
  b as d,
  c as f,
  f as p,
  g as m,
  k as h,
  l as g,
  o as _,
  s as v,
  v as ee,
  w as y,
  y as te,
} from "./react.DXfOPtms.mjs";
import { S as b, a as x, r as ne, t as S } from "./motion.BV3t3wQO.mjs";
import {
  $ as re,
  J as ie,
  L as C,
  M as w,
  Q as T,
  T as E,
  X as ae,
  Z as oe,
  _ as se,
  a as ce,
  at as D,
  b as le,
  c as ue,
  ct as de,
  d as fe,
  et as pe,
  g as me,
  it as he,
  j as O,
  m as ge,
  n as _e,
  ot as ve,
  q as ye,
  r as k,
  rt as A,
  s as be,
  st as xe,
  t as Se,
  tt as j,
  v as Ce,
  w as M,
  x as N,
  y as we,
} from "./framer.CEOdz4_K.mjs";
function P(e) {
  for (
    var t = `https://reactjs.org/docs/error-decoder.html?invariant=` + e, n = 1;
    n < arguments.length;
    n++
  )
    t += `&args[]=` + encodeURIComponent(arguments[n]);
  return (
    `Minified React error #` +
    e +
    `; visit ` +
    t +
    ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
  );
}
function Te(e) {
  return K.call(rr, e)
    ? !0
    : K.call(nr, e)
      ? !1
      : tr.test(e)
        ? (rr[e] = !0)
        : ((nr[e] = !0), !1);
}
function F(e, t, n, r, i, a, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = o));
}
function Ee(e) {
  return e[1].toUpperCase();
}
function I(e) {
  if (typeof e == `boolean` || typeof e == `number`) return `` + e;
  e = `` + e;
  var t = sr.exec(e);
  if (t) {
    var n,
      r = ``,
      i = 0;
    for (n = t.index; n < e.length; n++) {
      switch (e.charCodeAt(n)) {
        case 34:
          t = `&quot;`;
          break;
        case 38:
          t = `&amp;`;
          break;
        case 39:
          t = `&#x27;`;
          break;
        case 60:
          t = `&lt;`;
          break;
        case 62:
          t = `&gt;`;
          break;
        default:
          continue;
      }
      (i !== n && (r += e.substring(i, n)), (i = n + 1), (r += t));
    }
    e = i === n ? r : r + e.substring(i, n);
  }
  return e;
}
function De(e, t) {
  return { insertionMode: e, selectedValue: t };
}
function Oe(e, t, n) {
  switch (t) {
    case `select`:
      return De(1, n.value == null ? n.defaultValue : n.value);
    case `svg`:
      return De(2, null);
    case `math`:
      return De(3, null);
    case `foreignObject`:
      return De(1, null);
    case `table`:
      return De(4, null);
    case `thead`:
    case `tbody`:
    case `tfoot`:
      return De(5, null);
    case `colgroup`:
      return De(7, null);
    case `tr`:
      return De(6, null);
  }
  return 4 <= e.insertionMode || e.insertionMode === 0 ? De(1, null) : e;
}
function ke(e, t, n) {
  if (typeof n != `object`) throw Error(P(62));
  for (var r in ((t = !0), n))
    if (K.call(n, r)) {
      var i = n[r];
      if (i != null && typeof i != `boolean` && i !== ``) {
        if (r.indexOf(`--`) === 0) {
          var a = I(r);
          i = I((`` + i).trim());
        } else {
          a = r;
          var o = dr.get(a);
          (o !== void 0 ||
            ((o = I(a.replace(cr, `-$1`).toLowerCase().replace(lr, `-ms-`))),
            dr.set(a, o)),
            (a = o),
            (i =
              typeof i == `number`
                ? i === 0 || K.call(ar, r)
                  ? `` + i
                  : i + `px`
                : I((`` + i).trim())));
        }
        t ? ((t = !1), e.push(` style="`, a, `:`, i)) : e.push(`;`, a, `:`, i);
      }
    }
  t || e.push(`"`);
}
function L(e, t, n, r) {
  switch (n) {
    case `style`:
      ke(e, t, r);
      return;
    case `defaultValue`:
    case `defaultChecked`:
    case `innerHTML`:
    case `suppressContentEditableWarning`:
    case `suppressHydrationWarning`:
      return;
  }
  if (
    !(2 < n.length) ||
    (n[0] !== `o` && n[0] !== `O`) ||
    (n[1] !== `n` && n[1] !== `N`)
  ) {
    if (((t = q.hasOwnProperty(n) ? q[n] : null), t !== null)) {
      switch (typeof r) {
        case `function`:
        case `symbol`:
          return;
        case `boolean`:
          if (!t.acceptsBooleans) return;
      }
      switch (((n = t.attributeName), t.type)) {
        case 3:
          r && e.push(` `, n, `=""`);
          break;
        case 4:
          !0 === r
            ? e.push(` `, n, `=""`)
            : !1 !== r && e.push(` `, n, `="`, I(r), `"`);
          break;
        case 5:
          isNaN(r) || e.push(` `, n, `="`, I(r), `"`);
          break;
        case 6:
          !isNaN(r) && 1 <= r && e.push(` `, n, `="`, I(r), `"`);
          break;
        default:
          (t.sanitizeURL && (r = `` + r), e.push(` `, n, `="`, I(r), `"`));
      }
    } else if (Te(n)) {
      switch (typeof r) {
        case `function`:
        case `symbol`:
          return;
        case `boolean`:
          if (
            ((t = n.toLowerCase().slice(0, 5)), t !== `data-` && t !== `aria-`)
          )
            return;
      }
      e.push(` `, n, `="`, I(r), `"`);
    }
  }
}
function Ae(e, t, n) {
  if (t != null) {
    if (n != null) throw Error(P(60));
    if (typeof t != `object` || !(`__html` in t)) throw Error(P(61));
    ((t = t.__html), t != null && e.push(`` + t));
  }
}
function je(e) {
  var t = ``;
  return (
    er.Children.forEach(e, function (e) {
      e != null && (t += e);
    }),
    t
  );
}
function Me(e, t, n, r) {
  e.push(R(n));
  var i,
    a = (n = null);
  for (i in t)
    if (K.call(t, i)) {
      var o = t[i];
      if (o != null)
        switch (i) {
          case `children`:
            n = o;
            break;
          case `dangerouslySetInnerHTML`:
            a = o;
            break;
          default:
            L(e, r, i, o);
        }
    }
  return (
    e.push(`>`),
    Ae(e, a, n),
    typeof n == `string` ? (e.push(I(n)), null) : n
  );
}
function R(e) {
  var t = pr.get(e);
  if (t === void 0) {
    if (!fr.test(e)) throw Error(P(65, e));
    ((t = `<` + e), pr.set(e, t));
  }
  return t;
}
function Ne(e, t, n, r, i) {
  switch (t) {
    case `select`:
      e.push(R(`select`));
      var a = null,
        o = null;
      for (u in n)
        if (K.call(n, u)) {
          var s = n[u];
          if (s != null)
            switch (u) {
              case `children`:
                a = s;
                break;
              case `dangerouslySetInnerHTML`:
                o = s;
                break;
              case `defaultValue`:
              case `value`:
                break;
              default:
                L(e, r, u, s);
            }
        }
      return (e.push(`>`), Ae(e, o, a), a);
    case `option`:
      ((o = i.selectedValue), e.push(R(`option`)));
      var c = (s = null),
        l = null,
        u = null;
      for (a in n)
        if (K.call(n, a)) {
          var d = n[a];
          if (d != null)
            switch (a) {
              case `children`:
                s = d;
                break;
              case `selected`:
                l = d;
                break;
              case `dangerouslySetInnerHTML`:
                u = d;
                break;
              case `value`:
                c = d;
              default:
                L(e, r, a, d);
            }
        }
      if (o != null)
        if (((n = c === null ? je(s) : `` + c), ur(o))) {
          for (r = 0; r < o.length; r++)
            if (`` + o[r] === n) {
              e.push(` selected=""`);
              break;
            }
        } else `` + o === n && e.push(` selected=""`);
      else l && e.push(` selected=""`);
      return (e.push(`>`), Ae(e, u, s), s);
    case `textarea`:
      for (s in (e.push(R(`textarea`)), (u = o = a = null), n))
        if (K.call(n, s) && ((c = n[s]), c != null))
          switch (s) {
            case `children`:
              u = c;
              break;
            case `value`:
              a = c;
              break;
            case `defaultValue`:
              o = c;
              break;
            case `dangerouslySetInnerHTML`:
              throw Error(P(91));
            default:
              L(e, r, s, c);
          }
      if ((a === null && o !== null && (a = o), e.push(`>`), u != null)) {
        if (a != null) throw Error(P(92));
        if (ur(u) && 1 < u.length) throw Error(P(93));
        a = `` + u;
      }
      return (
        typeof a == `string` &&
          a[0] ===
            `
` &&
          e.push(`
`),
        a !== null && e.push(I(`` + a)),
        null
      );
    case `input`:
      for (o in (e.push(R(`input`)), (c = u = s = a = null), n))
        if (K.call(n, o) && ((l = n[o]), l != null))
          switch (o) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(P(399, `input`));
            case `defaultChecked`:
              c = l;
              break;
            case `defaultValue`:
              s = l;
              break;
            case `checked`:
              u = l;
              break;
            case `value`:
              a = l;
              break;
            default:
              L(e, r, o, l);
          }
      return (
        u === null
          ? c !== null && L(e, r, `checked`, c)
          : L(e, r, `checked`, u),
        a === null ? s !== null && L(e, r, `value`, s) : L(e, r, `value`, a),
        e.push(`/>`),
        null
      );
    case `menuitem`:
      for (var f in (e.push(R(`menuitem`)), n))
        if (K.call(n, f) && ((a = n[f]), a != null))
          switch (f) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(P(400));
            default:
              L(e, r, f, a);
          }
      return (e.push(`>`), null);
    case `title`:
      for (d in (e.push(R(`title`)), (a = null), n))
        if (K.call(n, d) && ((o = n[d]), o != null))
          switch (d) {
            case `children`:
              a = o;
              break;
            case `dangerouslySetInnerHTML`:
              throw Error(P(434));
            default:
              L(e, r, d, o);
          }
      return (e.push(`>`), a);
    case `listing`:
    case `pre`:
      for (c in (e.push(R(t)), (o = a = null), n))
        if (K.call(n, c) && ((s = n[c]), s != null))
          switch (c) {
            case `children`:
              a = s;
              break;
            case `dangerouslySetInnerHTML`:
              o = s;
              break;
            default:
              L(e, r, c, s);
          }
      if ((e.push(`>`), o != null)) {
        if (a != null) throw Error(P(60));
        if (typeof o != `object` || !(`__html` in o)) throw Error(P(61));
        ((n = o.__html),
          n != null &&
            (typeof n == `string` &&
            0 < n.length &&
            n[0] ===
              `
`
              ? e.push(
                  `
`,
                  n,
                )
              : e.push(`` + n)));
      }
      return (
        typeof a == `string` &&
          a[0] ===
            `
` &&
          e.push(`
`),
        a
      );
    case `area`:
    case `base`:
    case `br`:
    case `col`:
    case `embed`:
    case `hr`:
    case `img`:
    case `keygen`:
    case `link`:
    case `meta`:
    case `param`:
    case `source`:
    case `track`:
    case `wbr`:
      for (var p in (e.push(R(t)), n))
        if (K.call(n, p) && ((a = n[p]), a != null))
          switch (p) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(P(399, t));
            default:
              L(e, r, p, a);
          }
      return (e.push(`/>`), null);
    case `annotation-xml`:
    case `color-profile`:
    case `font-face`:
    case `font-face-src`:
    case `font-face-uri`:
    case `font-face-format`:
    case `font-face-name`:
    case `missing-glyph`:
      return Me(e, n, t, r);
    case `html`:
      return (
        i.insertionMode === 0 && e.push(`<!DOCTYPE html>`),
        Me(e, n, t, r)
      );
    default:
      if (t.indexOf(`-`) === -1 && typeof n.is != `string`)
        return Me(e, n, t, r);
      for (l in (e.push(R(t)), (o = a = null), n))
        if (K.call(n, l) && ((s = n[l]), s != null))
          switch (l) {
            case `children`:
              a = s;
              break;
            case `dangerouslySetInnerHTML`:
              o = s;
              break;
            case `style`:
              ke(e, r, s);
              break;
            case `suppressContentEditableWarning`:
            case `suppressHydrationWarning`:
              break;
            default:
              Te(l) &&
                typeof s != `function` &&
                typeof s != `symbol` &&
                e.push(` `, l, `="`, I(s), `"`);
          }
      return (e.push(`>`), Ae(e, o, a), a);
  }
}
function Pe(e, t, n) {
  if ((e.push(`<!--$?--><template id="`), n === null)) throw Error(P(395));
  return (e.push(n), e.push(`"></template>`));
}
function Fe(e, t, n, r) {
  switch (n.insertionMode) {
    case 0:
    case 1:
      return (
        e.push(`<div hidden id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    case 2:
      return (
        e.push(`<svg aria-hidden="true" style="display:none" id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    case 3:
      return (
        e.push(`<math aria-hidden="true" style="display:none" id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    case 4:
      return (
        e.push(`<table hidden id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    case 5:
      return (
        e.push(`<table hidden><tbody id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    case 6:
      return (
        e.push(`<table hidden><tr id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    case 7:
      return (
        e.push(`<table hidden><colgroup id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    default:
      throw Error(P(397));
  }
}
function Ie(e, t) {
  switch (t.insertionMode) {
    case 0:
    case 1:
      return e.push(`</div>`);
    case 2:
      return e.push(`</svg>`);
    case 3:
      return e.push(`</math>`);
    case 4:
      return e.push(`</table>`);
    case 5:
      return e.push(`</tbody></table>`);
    case 6:
      return e.push(`</tr></table>`);
    case 7:
      return e.push(`</colgroup></table>`);
    default:
      throw Error(P(397));
  }
}
function Le(e) {
  return JSON.stringify(e).replace(mr, function (e) {
    switch (e) {
      case `<`:
        return `\\u003c`;
      case `\u2028`:
        return `\\u2028`;
      case `\u2029`:
        return `\\u2029`;
      default:
        throw Error(
          `escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React`,
        );
    }
  });
}
function Re(e, t) {
  return (
    (t = t === void 0 ? `` : t),
    {
      bootstrapChunks: [],
      startInlineScript: `<script>`,
      placeholderPrefix: t + `P:`,
      segmentPrefix: t + `S:`,
      boundaryPrefix: t + `B:`,
      idPrefix: t,
      nextSuspenseID: 0,
      sentCompleteSegmentFunction: !1,
      sentCompleteBoundaryFunction: !1,
      sentClientRenderFunction: !1,
      generateStaticMarkup: e,
    }
  );
}
function ze(e, t, n, r) {
  return n.generateStaticMarkup
    ? (e.push(I(t)), !1)
    : (t === `` ? (e = r) : (r && e.push(`<!-- -->`), e.push(I(t)), (e = !0)),
      e);
}
function Be(e) {
  if (e == null) return null;
  if (typeof e == `function`) return e.displayName || e.name || null;
  if (typeof e == `string`) return e;
  switch (e) {
    case vr:
      return `Fragment`;
    case _r:
      return `Portal`;
    case br:
      return `Profiler`;
    case yr:
      return `StrictMode`;
    case wr:
      return `Suspense`;
    case Tr:
      return `SuspenseList`;
  }
  if (typeof e == `object`)
    switch (e.$$typeof) {
      case Sr:
        return (e.displayName || `Context`) + `.Consumer`;
      case xr:
        return (e._context.displayName || `Context`) + `.Provider`;
      case Cr:
        var t = e.render;
        return (
          (e = e.displayName),
          (e ||=
            ((e = t.displayName || t.name || ``),
            e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
          e
        );
      case Er:
        return (
          (t = e.displayName || null),
          t === null ? Be(e.type) || `Memo` : t
        );
      case Dr:
        ((t = e._payload), (e = e._init));
        try {
          return Be(e(t));
        } catch {}
    }
  return null;
}
function Ve(e, t) {
  if (((e = e.contextTypes), !e)) return Nr;
  var n,
    r = {};
  for (n in e) r[n] = t[n];
  return r;
}
function He(e, t) {
  if (e !== t) {
    ((e.context._currentValue2 = e.parentValue), (e = e.parent));
    var n = t.parent;
    if (e === null) {
      if (n !== null) throw Error(P(401));
    } else {
      if (n === null) throw Error(P(401));
      He(e, n);
    }
    t.context._currentValue2 = t.value;
  }
}
function Ue(e) {
  ((e.context._currentValue2 = e.parentValue),
    (e = e.parent),
    e !== null && Ue(e));
}
function We(e) {
  var t = e.parent;
  (t !== null && We(t), (e.context._currentValue2 = e.value));
}
function Ge(e, t) {
  if (((e.context._currentValue2 = e.parentValue), (e = e.parent), e === null))
    throw Error(P(402));
  e.depth === t.depth ? He(e, t) : Ge(e, t);
}
function Ke(e, t) {
  var n = t.parent;
  if (n === null) throw Error(P(402));
  (e.depth === n.depth ? He(e, n) : Ke(e, n),
    (t.context._currentValue2 = t.value));
}
function qe(e) {
  var t = Pr;
  t !== e &&
    (t === null
      ? We(e)
      : e === null
        ? Ue(t)
        : t.depth === e.depth
          ? He(t, e)
          : t.depth > e.depth
            ? Ge(t, e)
            : Ke(t, e),
    (Pr = e));
}
function Je(e, t, n, r) {
  var i = e.state === void 0 ? null : e.state;
  ((e.updater = Fr), (e.props = n), (e.state = i));
  var a = { queue: [], replace: !1 };
  e._reactInternals = a;
  var o = t.contextType;
  if (
    ((e.context = typeof o == `object` && o ? o._currentValue2 : r),
    (o = t.getDerivedStateFromProps),
    typeof o == `function` &&
      ((o = o(n, i)), (i = o == null ? i : hr({}, i, o)), (e.state = i)),
    typeof t.getDerivedStateFromProps != `function` &&
      typeof e.getSnapshotBeforeUpdate != `function` &&
      (typeof e.UNSAFE_componentWillMount == `function` ||
        typeof e.componentWillMount == `function`))
  )
    if (
      ((t = e.state),
      typeof e.componentWillMount == `function` && e.componentWillMount(),
      typeof e.UNSAFE_componentWillMount == `function` &&
        e.UNSAFE_componentWillMount(),
      t !== e.state && Fr.enqueueReplaceState(e, e.state, null),
      a.queue !== null && 0 < a.queue.length)
    )
      if (
        ((t = a.queue),
        (o = a.replace),
        (a.queue = null),
        (a.replace = !1),
        o && t.length === 1)
      )
        e.state = t[0];
      else {
        for (a = o ? t[0] : e.state, i = !0, o = o ? 1 : 0; o < t.length; o++) {
          var s = t[o];
          ((s = typeof s == `function` ? s.call(e, a, n, r) : s),
            s != null && (i ? ((i = !1), (a = hr({}, a, s))) : hr(a, s)));
        }
        e.state = a;
      }
    else a.queue = null;
}
function Ye(e, t, n) {
  var r = e.id;
  e = e.overflow;
  var i = 32 - Lr(r) - 1;
  ((r &= ~(1 << i)), (n += 1));
  var a = 32 - Lr(t) + i;
  if (30 < a) {
    var o = i - (i % 5);
    return (
      (a = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      { id: (1 << (32 - Lr(t) + i)) | (n << i) | r, overflow: a + e }
    );
  }
  return { id: (1 << a) | (n << i) | r, overflow: e };
}
function Xe(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Rr(e) / zr) | 0)) | 0);
}
function Ze(e, t) {
  return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
}
function Qe() {
  if (Vr === null) throw Error(P(321));
  return Vr;
}
function $e() {
  if (0 < Jr) throw Error(P(312));
  return { memoizedState: null, queue: null, next: null };
}
function et() {
  return (
    J === null
      ? Ur === null
        ? ((Wr = !1), (Ur = J = $e()))
        : ((Wr = !0), (J = Ur))
      : J.next === null
        ? ((Wr = !1), (J = J.next = $e()))
        : ((Wr = !0), (J = J.next)),
    J
  );
}
function tt() {
  ((Hr = Vr = null), (Gr = !1), (Ur = null), (Jr = 0), (J = qr = null));
}
function nt(e, t) {
  return typeof t == `function` ? t(e) : t;
}
function rt(e, t, n) {
  if (((Vr = Qe()), (J = et()), Wr)) {
    var r = J.queue;
    if (((t = r.dispatch), qr !== null && ((n = qr.get(r)), n !== void 0))) {
      (qr.delete(r), (r = J.memoizedState));
      do ((r = e(r, n.action)), (n = n.next));
      while (n !== null);
      return ((J.memoizedState = r), [r, t]);
    }
    return [J.memoizedState, t];
  }
  return (
    (e =
      e === nt ? (typeof t == `function` ? t() : t) : n === void 0 ? t : n(t)),
    (J.memoizedState = e),
    (e = J.queue = { last: null, dispatch: null }),
    (e = e.dispatch = at.bind(null, Vr, e)),
    [J.memoizedState, e]
  );
}
function it(e, t) {
  if (((Vr = Qe()), (J = et()), (t = t === void 0 ? null : t), J !== null)) {
    var n = J.memoizedState;
    if (n !== null && t !== null) {
      var r = n[1];
      e: if (r === null) r = !1;
      else {
        for (var i = 0; i < r.length && i < t.length; i++)
          if (!Br(t[i], r[i])) {
            r = !1;
            break e;
          }
        r = !0;
      }
      if (r) return n[0];
    }
  }
  return ((e = e()), (J.memoizedState = [e, t]), e);
}
function at(e, t, n) {
  if (25 <= Jr) throw Error(P(301));
  if (e === Vr)
    if (
      ((Gr = !0),
      (e = { action: n, next: null }),
      qr === null && (qr = new Map()),
      (n = qr.get(t)),
      n === void 0)
    )
      qr.set(t, e);
    else {
      for (t = n; t.next !== null;) t = t.next;
      t.next = e;
    }
}
function ot() {
  throw Error(P(394));
}
function st() {}
function ct(e) {
  return (console.error(e), null);
}
function lt() {}
function ut(e, t, n, r, i, a, o, s, c) {
  var l = [],
    u = new Set();
  return (
    (t = {
      destination: null,
      responseState: t,
      progressiveChunkSize: r === void 0 ? 12800 : r,
      status: 0,
      fatalError: null,
      nextSegmentId: 0,
      allPendingTasks: 0,
      pendingRootTasks: 0,
      completedRootSegment: null,
      abortableTasks: u,
      pingedTasks: l,
      clientRenderedBoundaries: [],
      completedBoundaries: [],
      partialBoundaries: [],
      onError: i === void 0 ? ct : i,
      onAllReady: a === void 0 ? lt : a,
      onShellReady: o === void 0 ? lt : o,
      onShellError: s === void 0 ? lt : s,
      onFatalError: c === void 0 ? lt : c,
    }),
    (n = ft(t, 0, null, n, !1, !1)),
    (n.parentFlushed = !0),
    (e = dt(t, e, null, n, u, Nr, null, Ir)),
    l.push(e),
    t
  );
}
function dt(e, t, n, r, i, a, o, s) {
  (e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++);
  var c = {
    node: t,
    ping: function () {
      var t = e.pingedTasks;
      (t.push(c), t.length === 1 && Et(e));
    },
    blockedBoundary: n,
    blockedSegment: r,
    abortSet: i,
    legacyContext: a,
    context: o,
    treeContext: s,
  };
  return (i.add(c), c);
}
function ft(e, t, n, r, i, a) {
  return {
    status: 0,
    id: -1,
    index: t,
    parentFlushed: !1,
    chunks: [],
    children: [],
    formatContext: r,
    boundary: n,
    lastPushedText: i,
    textEmbedded: a,
  };
}
function pt(e, t) {
  if (((e = e.onError(t)), e != null && typeof e != `string`))
    throw Error(
      `onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "` +
        typeof e +
        `" instead`,
    );
  return e;
}
function mt(e, t) {
  var n = e.onShellError;
  (n(t),
    (n = e.onFatalError),
    n(t),
    e.destination === null
      ? ((e.status = 1), (e.fatalError = t))
      : ((e.status = 2), e.destination.destroy(t)));
}
function ht(e, t, n, r, i) {
  for (Vr = {}, Hr = t, Kr = 0, e = n(r, i); Gr;)
    ((Gr = !1), (Kr = 0), (Jr += 1), (J = null), (e = n(r, i)));
  return (tt(), e);
}
function gt(e, t, n, r) {
  var i = n.render(),
    a = r.childContextTypes;
  if (a != null) {
    var o = t.legacyContext;
    if (typeof n.getChildContext != `function`) r = o;
    else {
      for (var s in ((n = n.getChildContext()), n))
        if (!(s in a)) throw Error(P(108, Be(r) || `Unknown`, s));
      r = hr({}, o, n);
    }
    ((t.legacyContext = r), yt(e, t, i), (t.legacyContext = o));
  } else yt(e, t, i);
}
function _t(e, t) {
  if (e && e.defaultProps) {
    for (var n in ((t = hr({}, t)), (e = e.defaultProps), e))
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function vt(e, t, n, r, i) {
  if (typeof n == `function`)
    if (n.prototype && n.prototype.isReactComponent) {
      i = Ve(n, t.legacyContext);
      var a = n.contextType;
      ((a = new n(r, typeof a == `object` && a ? a._currentValue2 : i)),
        Je(a, n, r, i),
        gt(e, t, a, n));
    } else {
      ((a = Ve(n, t.legacyContext)), (i = ht(e, t, n, r, a)));
      var o = Kr !== 0;
      if (
        typeof i == `object` &&
        i &&
        typeof i.render == `function` &&
        i.$$typeof === void 0
      )
        (Je(i, n, r, a), gt(e, t, i, n));
      else if (o) {
        ((r = t.treeContext), (t.treeContext = Ye(r, 1, 0)));
        try {
          yt(e, t, i);
        } finally {
          t.treeContext = r;
        }
      } else yt(e, t, i);
    }
  else {
    if (typeof n != `string`) {
      switch (n) {
        case Ar:
        case kr:
        case yr:
        case br:
        case vr:
          yt(e, t, r.children);
          return;
        case Tr:
          yt(e, t, r.children);
          return;
        case Or:
          throw Error(P(343));
        case wr:
          e: {
            ((n = t.blockedBoundary),
              (i = t.blockedSegment),
              (a = r.fallback),
              (r = r.children),
              (o = new Set()));
            var s = {
                id: null,
                rootSegmentID: -1,
                parentFlushed: !1,
                pendingTasks: 0,
                forceClientRender: !1,
                completedSegments: [],
                byteSize: 0,
                fallbackAbortableTasks: o,
                errorDigest: null,
              },
              c = ft(e, i.chunks.length, s, i.formatContext, !1, !1);
            (i.children.push(c), (i.lastPushedText = !1));
            var l = ft(e, 0, null, i.formatContext, !1, !1);
            ((l.parentFlushed = !0),
              (t.blockedBoundary = s),
              (t.blockedSegment = l));
            try {
              if (
                (xt(e, t, r),
                e.responseState.generateStaticMarkup ||
                  (l.lastPushedText &&
                    l.textEmbedded &&
                    l.chunks.push(`<!-- -->`)),
                (l.status = 1),
                wt(s, l),
                s.pendingTasks === 0)
              )
                break e;
            } catch (t) {
              ((l.status = 4),
                (s.forceClientRender = !0),
                (s.errorDigest = pt(e, t)));
            } finally {
              ((t.blockedBoundary = n), (t.blockedSegment = i));
            }
            ((t = dt(e, a, n, c, o, t.legacyContext, t.context, t.treeContext)),
              e.pingedTasks.push(t));
          }
          return;
      }
      if (typeof n == `object` && n)
        switch (n.$$typeof) {
          case Cr:
            if (((r = ht(e, t, n.render, r, i)), Kr !== 0)) {
              ((n = t.treeContext), (t.treeContext = Ye(n, 1, 0)));
              try {
                yt(e, t, r);
              } finally {
                t.treeContext = n;
              }
            } else yt(e, t, r);
            return;
          case Er:
            ((n = n.type), (r = _t(n, r)), vt(e, t, n, r, i));
            return;
          case xr:
            if (
              ((i = r.children),
              (n = n._context),
              (r = r.value),
              (a = n._currentValue2),
              (n._currentValue2 = r),
              (o = Pr),
              (Pr = r =
                {
                  parent: o,
                  depth: o === null ? 0 : o.depth + 1,
                  context: n,
                  parentValue: a,
                  value: r,
                }),
              (t.context = r),
              yt(e, t, i),
              (e = Pr),
              e === null)
            )
              throw Error(P(403));
            ((r = e.parentValue),
              (e.context._currentValue2 =
                r === jr ? e.context._defaultValue : r),
              (e = Pr = e.parent),
              (t.context = e));
            return;
          case Sr:
            ((r = r.children), (r = r(n._currentValue2)), yt(e, t, r));
            return;
          case Dr:
            ((i = n._init),
              (n = i(n._payload)),
              (r = _t(n, r)),
              vt(e, t, n, r, void 0));
            return;
        }
      throw Error(P(130, n == null ? n : typeof n, ``));
    }
    switch (
      ((i = t.blockedSegment),
      (a = Ne(i.chunks, n, r, e.responseState, i.formatContext)),
      (i.lastPushedText = !1),
      (o = i.formatContext),
      (i.formatContext = Oe(o, n, r)),
      xt(e, t, a),
      (i.formatContext = o),
      n)
    ) {
      case `area`:
      case `base`:
      case `br`:
      case `col`:
      case `embed`:
      case `hr`:
      case `img`:
      case `input`:
      case `keygen`:
      case `link`:
      case `meta`:
      case `param`:
      case `source`:
      case `track`:
      case `wbr`:
        break;
      default:
        i.chunks.push(`</`, n, `>`);
    }
    i.lastPushedText = !1;
  }
}
function yt(e, t, n) {
  if (((t.node = n), typeof n == `object` && n)) {
    switch (n.$$typeof) {
      case gr:
        vt(e, t, n.type, n.props, n.ref);
        return;
      case _r:
        throw Error(P(257));
      case Dr:
        var r = n._init;
        ((n = r(n._payload)), yt(e, t, n));
        return;
    }
    if (ur(n)) {
      bt(e, t, n);
      return;
    }
    if (
      (typeof n != `object` || !n
        ? (r = null)
        : ((r = (Mr && n[Mr]) || n[`@@iterator`]),
          (r = typeof r == `function` ? r : null)),
      (r &&= r.call(n)))
    ) {
      if (((n = r.next()), !n.done)) {
        var i = [];
        do (i.push(n.value), (n = r.next()));
        while (!n.done);
        bt(e, t, i);
      }
      return;
    }
    throw (
      (e = Object.prototype.toString.call(n)),
      Error(
        P(
          31,
          e === `[object Object]`
            ? `object with keys {` + Object.keys(n).join(`, `) + `}`
            : e,
        ),
      )
    );
  }
  typeof n == `string`
    ? ((r = t.blockedSegment),
      (r.lastPushedText = ze(
        t.blockedSegment.chunks,
        n,
        e.responseState,
        r.lastPushedText,
      )))
    : typeof n == `number` &&
      ((r = t.blockedSegment),
      (r.lastPushedText = ze(
        t.blockedSegment.chunks,
        `` + n,
        e.responseState,
        r.lastPushedText,
      )));
}
function bt(e, t, n) {
  for (var r = n.length, i = 0; i < r; i++) {
    var a = t.treeContext;
    t.treeContext = Ye(a, r, i);
    try {
      xt(e, t, n[i]);
    } finally {
      t.treeContext = a;
    }
  }
}
function xt(e, t, n) {
  var r = t.blockedSegment.formatContext,
    i = t.legacyContext,
    a = t.context;
  try {
    return yt(e, t, n);
  } catch (c) {
    if ((tt(), typeof c != `object` || !c || typeof c.then != `function`))
      throw (
        (t.blockedSegment.formatContext = r),
        (t.legacyContext = i),
        (t.context = a),
        qe(a),
        c
      );
    n = c;
    var o = t.blockedSegment,
      s = ft(e, o.chunks.length, null, o.formatContext, o.lastPushedText, !0);
    (o.children.push(s),
      (o.lastPushedText = !1),
      (e = dt(
        e,
        t.node,
        t.blockedBoundary,
        s,
        t.abortSet,
        t.legacyContext,
        t.context,
        t.treeContext,
      ).ping),
      n.then(e, e),
      (t.blockedSegment.formatContext = r),
      (t.legacyContext = i),
      (t.context = a),
      qe(a));
  }
}
function St(e) {
  var t = e.blockedBoundary;
  ((e = e.blockedSegment), (e.status = 3), Tt(this, t, e));
}
function Ct(e, t, n) {
  var r = e.blockedBoundary;
  ((e.blockedSegment.status = 3),
    r === null
      ? (t.allPendingTasks--,
        t.status !== 2 &&
          ((t.status = 2), t.destination !== null && t.destination.push(null)))
      : (r.pendingTasks--,
        r.forceClientRender ||
          ((r.forceClientRender = !0),
          (e = n === void 0 ? Error(P(432)) : n),
          (r.errorDigest = t.onError(e)),
          r.parentFlushed && t.clientRenderedBoundaries.push(r)),
        r.fallbackAbortableTasks.forEach(function (e) {
          return Ct(e, t, n);
        }),
        r.fallbackAbortableTasks.clear(),
        t.allPendingTasks--,
        t.allPendingTasks === 0 && ((r = t.onAllReady), r())));
}
function wt(e, t) {
  if (
    t.chunks.length === 0 &&
    t.children.length === 1 &&
    t.children[0].boundary === null
  ) {
    var n = t.children[0];
    ((n.id = t.id), (n.parentFlushed = !0), n.status === 1 && wt(e, n));
  } else e.completedSegments.push(t);
}
function Tt(e, t, n) {
  if (t === null) {
    if (n.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(P(389));
      e.completedRootSegment = n;
    }
    (e.pendingRootTasks--,
      e.pendingRootTasks === 0 &&
        ((e.onShellError = lt), (t = e.onShellReady), t()));
  } else
    (t.pendingTasks--,
      t.forceClientRender ||
        (t.pendingTasks === 0
          ? (n.parentFlushed && n.status === 1 && wt(t, n),
            t.parentFlushed && e.completedBoundaries.push(t),
            t.fallbackAbortableTasks.forEach(St, e),
            t.fallbackAbortableTasks.clear())
          : n.parentFlushed &&
            n.status === 1 &&
            (wt(t, n),
            t.completedSegments.length === 1 &&
              t.parentFlushed &&
              e.partialBoundaries.push(t))));
  (e.allPendingTasks--, e.allPendingTasks === 0 && ((e = e.onAllReady), e()));
}
function Et(e) {
  if (e.status !== 2) {
    var t = Pr,
      n = Zr.current;
    Zr.current = Yr;
    var r = Xr;
    Xr = e.responseState;
    try {
      var i,
        a = e.pingedTasks;
      for (i = 0; i < a.length; i++) {
        var o = a[i],
          s = e,
          c = o.blockedSegment;
        if (c.status === 0) {
          qe(o.context);
          try {
            (yt(s, o, o.node),
              s.responseState.generateStaticMarkup ||
                (c.lastPushedText &&
                  c.textEmbedded &&
                  c.chunks.push(`<!-- -->`)),
              o.abortSet.delete(o),
              (c.status = 1),
              Tt(s, o.blockedBoundary, c));
          } catch (e) {
            if (
              (tt(), typeof e == `object` && e && typeof e.then == `function`)
            ) {
              var l = o.ping;
              e.then(l, l);
            } else {
              (o.abortSet.delete(o), (c.status = 4));
              var u = o.blockedBoundary,
                d = e,
                f = pt(s, d);
              if (
                (u === null
                  ? mt(s, d)
                  : (u.pendingTasks--,
                    u.forceClientRender ||
                      ((u.forceClientRender = !0),
                      (u.errorDigest = f),
                      u.parentFlushed && s.clientRenderedBoundaries.push(u))),
                s.allPendingTasks--,
                s.allPendingTasks === 0)
              ) {
                var p = s.onAllReady;
                p();
              }
            }
          }
        }
      }
      (a.splice(0, i), e.destination !== null && Mt(e, e.destination));
    } catch (t) {
      (pt(e, t), mt(e, t));
    } finally {
      ((Xr = r), (Zr.current = n), n === Yr && qe(t));
    }
  }
}
function Dt(e, t, n) {
  switch (((n.parentFlushed = !0), n.status)) {
    case 0:
      var r = (n.id = e.nextSegmentId++);
      return (
        (n.lastPushedText = !1),
        (n.textEmbedded = !1),
        (e = e.responseState),
        t.push(`<template id="`),
        t.push(e.placeholderPrefix),
        (e = r.toString(16)),
        t.push(e),
        t.push(`"></template>`)
      );
    case 1:
      n.status = 2;
      var i = !0;
      r = n.chunks;
      var a = 0;
      n = n.children;
      for (var o = 0; o < n.length; o++) {
        for (i = n[o]; a < i.index; a++) t.push(r[a]);
        i = Ot(e, t, i);
      }
      for (; a < r.length - 1; a++) t.push(r[a]);
      return (a < r.length && (i = t.push(r[a])), i);
    default:
      throw Error(P(390));
  }
}
function Ot(e, t, n) {
  var r = n.boundary;
  if (r === null) return Dt(e, t, n);
  if (((r.parentFlushed = !0), r.forceClientRender))
    return (
      e.responseState.generateStaticMarkup ||
        ((r = r.errorDigest),
        t.push(`<!--$!-->`),
        t.push(`<template`),
        r && (t.push(` data-dgst="`), (r = I(r)), t.push(r), t.push(`"`)),
        t.push(`></template>`)),
      Dt(e, t, n),
      (e = !!e.responseState.generateStaticMarkup || t.push(`<!--/$-->`)),
      e
    );
  if (0 < r.pendingTasks) {
    ((r.rootSegmentID = e.nextSegmentId++),
      0 < r.completedSegments.length && e.partialBoundaries.push(r));
    var i = e.responseState,
      a = i.nextSuspenseID++;
    return (
      (i = i.boundaryPrefix + a.toString(16)),
      (r = r.id = i),
      Pe(t, e.responseState, r),
      Dt(e, t, n),
      t.push(`<!--/$-->`)
    );
  }
  if (r.byteSize > e.progressiveChunkSize)
    return (
      (r.rootSegmentID = e.nextSegmentId++),
      e.completedBoundaries.push(r),
      Pe(t, e.responseState, r.id),
      Dt(e, t, n),
      t.push(`<!--/$-->`)
    );
  if (
    (e.responseState.generateStaticMarkup || t.push(`<!--$-->`),
    (n = r.completedSegments),
    n.length !== 1)
  )
    throw Error(P(391));
  return (
    Ot(e, t, n[0]),
    (e = !!e.responseState.generateStaticMarkup || t.push(`<!--/$-->`)),
    e
  );
}
function kt(e, t, n) {
  return (
    Fe(t, e.responseState, n.formatContext, n.id),
    Ot(e, t, n),
    Ie(t, n.formatContext)
  );
}
function At(e, t, n) {
  for (var r = n.completedSegments, i = 0; i < r.length; i++) jt(e, t, n, r[i]);
  if (
    ((r.length = 0),
    (e = e.responseState),
    (r = n.id),
    (n = n.rootSegmentID),
    t.push(e.startInlineScript),
    e.sentCompleteBoundaryFunction
      ? t.push(`$RC("`)
      : ((e.sentCompleteBoundaryFunction = !0),
        t.push(
          `function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("`,
        )),
    r === null)
  )
    throw Error(P(395));
  return (
    (n = n.toString(16)),
    t.push(r),
    t.push(`","`),
    t.push(e.segmentPrefix),
    t.push(n),
    t.push(`")<\/script>`)
  );
}
function jt(e, t, n, r) {
  if (r.status === 2) return !0;
  var i = r.id;
  if (i === -1) {
    if ((r.id = n.rootSegmentID) === -1) throw Error(P(392));
    return kt(e, t, r);
  }
  return (
    kt(e, t, r),
    (e = e.responseState),
    t.push(e.startInlineScript),
    e.sentCompleteSegmentFunction
      ? t.push(`$RS("`)
      : ((e.sentCompleteSegmentFunction = !0),
        t.push(
          `function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("`,
        )),
    t.push(e.segmentPrefix),
    (i = i.toString(16)),
    t.push(i),
    t.push(`","`),
    t.push(e.placeholderPrefix),
    t.push(i),
    t.push(`")<\/script>`)
  );
}
function Mt(e, t) {
  try {
    var n = e.completedRootSegment;
    if (n !== null && e.pendingRootTasks === 0) {
      (Ot(e, t, n), (e.completedRootSegment = null));
      var r = e.responseState.bootstrapChunks;
      for (n = 0; n < r.length - 1; n++) t.push(r[n]);
      n < r.length && t.push(r[n]);
    }
    var i,
      a = e.clientRenderedBoundaries;
    for (i = 0; i < a.length; i++) {
      var o = a[i];
      r = t;
      var s = e.responseState,
        c = o.id,
        l = o.errorDigest,
        u = o.errorMessage,
        d = o.errorComponentStack;
      if (
        (r.push(s.startInlineScript),
        s.sentClientRenderFunction
          ? r.push(`$RX("`)
          : ((s.sentClientRenderFunction = !0),
            r.push(
              `function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("`,
            )),
        c === null)
      )
        throw Error(P(395));
      if ((r.push(c), r.push(`"`), l || u || d)) {
        r.push(`,`);
        var f = Le(l || ``);
        r.push(f);
      }
      if (u || d) {
        r.push(`,`);
        var p = Le(u || ``);
        r.push(p);
      }
      if (d) {
        r.push(`,`);
        var m = Le(d);
        r.push(m);
      }
      if (!r.push(`)<\/script>`)) {
        ((e.destination = null), i++, a.splice(0, i));
        return;
      }
    }
    a.splice(0, i);
    var h = e.completedBoundaries;
    for (i = 0; i < h.length; i++)
      if (!At(e, t, h[i])) {
        ((e.destination = null), i++, h.splice(0, i));
        return;
      }
    h.splice(0, i);
    var g = e.partialBoundaries;
    for (i = 0; i < g.length; i++) {
      var _ = g[i];
      e: {
        ((a = e), (o = t));
        var v = _.completedSegments;
        for (s = 0; s < v.length; s++)
          if (!jt(a, o, _, v[s])) {
            (s++, v.splice(0, s));
            var ee = !1;
            break e;
          }
        (v.splice(0, s), (ee = !0));
      }
      if (!ee) {
        ((e.destination = null), i++, g.splice(0, i));
        return;
      }
    }
    g.splice(0, i);
    var y = e.completedBoundaries;
    for (i = 0; i < y.length; i++)
      if (!At(e, t, y[i])) {
        ((e.destination = null), i++, y.splice(0, i));
        return;
      }
    y.splice(0, i);
  } finally {
    e.allPendingTasks === 0 &&
      e.pingedTasks.length === 0 &&
      e.clientRenderedBoundaries.length === 0 &&
      e.completedBoundaries.length === 0 &&
      t.push(null);
  }
}
function Nt(e, t) {
  try {
    var n = e.abortableTasks;
    (n.forEach(function (n) {
      return Ct(n, e, t);
    }),
      n.clear(),
      e.destination !== null && Mt(e, e.destination));
  } catch (t) {
    (pt(e, t), mt(e, t));
  }
}
function Pt() {}
function Ft(e, t, n, r) {
  var i = !1,
    a = null,
    o = ``,
    s = {
      push: function (e) {
        return (e !== null && (o += e), !0);
      },
      destroy: function (e) {
        ((i = !0), (a = e));
      },
    },
    c = !1;
  if (
    ((e = ut(
      e,
      Re(n, t ? t.identifierPrefix : void 0),
      { insertionMode: 1, selectedValue: null },
      1 / 0,
      Pt,
      void 0,
      function () {
        c = !0;
      },
      void 0,
      void 0,
    )),
    Et(e),
    Nt(e, r),
    e.status === 1)
  )
    ((e.status = 2), s.destroy(e.fatalError));
  else if (e.status !== 2 && e.destination === null) {
    e.destination = s;
    try {
      Mt(e, s);
    } catch (t) {
      (pt(e, t), mt(e, t));
    }
  }
  if (i) throw a;
  if (!c) throw Error(P(426));
  return o;
}
function z(e) {
  for (
    var t = `https://reactjs.org/docs/error-decoder.html?invariant=` + e, n = 1;
    n < arguments.length;
    n++
  )
    t += `&args[]=` + encodeURIComponent(arguments[n]);
  return (
    `Minified React error #` +
    e +
    `; visit ` +
    t +
    ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
  );
}
function B(e, t) {
  if (t.length !== 0)
    if (512 < t.length)
      (0 < X &&
        (e.enqueue(new Uint8Array(Y.buffer, 0, X)),
        (Y = new Uint8Array(512)),
        (X = 0)),
        e.enqueue(t));
    else {
      var n = Y.length - X;
      (n < t.length &&
        (n === 0
          ? e.enqueue(Y)
          : (Y.set(t.subarray(0, n), X), e.enqueue(Y), (t = t.subarray(n))),
        (Y = new Uint8Array(512)),
        (X = 0)),
        Y.set(t, X),
        (X += t.length));
    }
}
function V(e, t) {
  return (B(e, t), !0);
}
function It(e) {
  Y &&
    0 < X &&
    (e.enqueue(new Uint8Array(Y.buffer, 0, X)), (Y = null), (X = 0));
}
function H(e) {
  return ti.encode(e);
}
function U(e) {
  return ti.encode(e);
}
function Lt(e, t) {
  typeof e.error == `function` ? e.error(t) : e.close();
}
function Rt(e) {
  return Z.call(ii, e)
    ? !0
    : Z.call(ri, e)
      ? !1
      : ni.test(e)
        ? (ii[e] = !0)
        : ((ri[e] = !0), !1);
}
function W(e, t, n, r, i, a, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = o));
}
function zt(e) {
  return e[1].toUpperCase();
}
function G(e) {
  if (typeof e == `boolean` || typeof e == `number`) return `` + e;
  e = `` + e;
  var t = ci.exec(e);
  if (t) {
    var n,
      r = ``,
      i = 0;
    for (n = t.index; n < e.length; n++) {
      switch (e.charCodeAt(n)) {
        case 34:
          t = `&quot;`;
          break;
        case 38:
          t = `&amp;`;
          break;
        case 39:
          t = `&#x27;`;
          break;
        case 60:
          t = `&lt;`;
          break;
        case 62:
          t = `&gt;`;
          break;
        default:
          continue;
      }
      (i !== n && (r += e.substring(i, n)), (i = n + 1), (r += t));
    }
    e = i === n ? r : r + e.substring(i, n);
  }
  return e;
}
function Bt(e, t, n, r) {
  return t + (n === `s` ? `\\u0073` : `\\u0053`) + r;
}
function Vt(e, t, n, r, i) {
  ((e = e === void 0 ? `` : e),
    (t = t === void 0 ? fi : U(`<script nonce="` + G(t) + `">`)));
  var a = [];
  if (
    (n !== void 0 && a.push(t, H((`` + n).replace(_i, Bt)), pi), r !== void 0)
  )
    for (n = 0; n < r.length; n++) a.push(mi, H(G(r[n])), gi);
  if (i !== void 0) for (r = 0; r < i.length; r++) a.push(hi, H(G(i[r])), gi);
  return {
    bootstrapChunks: a,
    startInlineScript: t,
    placeholderPrefix: U(e + `P:`),
    segmentPrefix: U(e + `S:`),
    boundaryPrefix: e + `B:`,
    idPrefix: e,
    nextSuspenseID: 0,
    sentCompleteSegmentFunction: !1,
    sentCompleteBoundaryFunction: !1,
    sentClientRenderFunction: !1,
  };
}
function Ht(e, t) {
  return { insertionMode: e, selectedValue: t };
}
function Ut(e) {
  return Ht(
    e === `http://www.w3.org/2000/svg`
      ? 2
      : e === `http://www.w3.org/1998/Math/MathML`
        ? 3
        : 0,
    null,
  );
}
function Wt(e, t, n) {
  switch (t) {
    case `select`:
      return Ht(1, n.value == null ? n.defaultValue : n.value);
    case `svg`:
      return Ht(2, null);
    case `math`:
      return Ht(3, null);
    case `foreignObject`:
      return Ht(1, null);
    case `table`:
      return Ht(4, null);
    case `thead`:
    case `tbody`:
    case `tfoot`:
      return Ht(5, null);
    case `colgroup`:
      return Ht(7, null);
    case `tr`:
      return Ht(6, null);
  }
  return 4 <= e.insertionMode || e.insertionMode === 0 ? Ht(1, null) : e;
}
function Gt(e, t, n, r) {
  return t === `` ? r : (r && e.push(vi), e.push(H(G(t))), !0);
}
function Kt(e, t, n) {
  if (typeof n != `object`) throw Error(z(62));
  for (var r in ((t = !0), n))
    if (Z.call(n, r)) {
      var i = n[r];
      if (i != null && typeof i != `boolean` && i !== ``) {
        if (r.indexOf(`--`) === 0) {
          var a = H(G(r));
          i = H(G((`` + i).trim()));
        } else {
          a = r;
          var o = yi.get(a);
          (o !== void 0 ||
            ((o = U(G(a.replace(li, `-$1`).toLowerCase().replace(ui, `-ms-`)))),
            yi.set(a, o)),
            (a = o),
            (i =
              typeof i == `number`
                ? i === 0 || Z.call(oi, r)
                  ? H(`` + i)
                  : H(i + `px`)
                : H(G((`` + i).trim()))));
        }
        t ? ((t = !1), e.push(bi, a, xi, i)) : e.push(Si, a, xi, i);
      }
    }
  t || e.push(Ti);
}
function qt(e, t, n, r) {
  switch (n) {
    case `style`:
      Kt(e, t, r);
      return;
    case `defaultValue`:
    case `defaultChecked`:
    case `innerHTML`:
    case `suppressContentEditableWarning`:
    case `suppressHydrationWarning`:
      return;
  }
  if (
    !(2 < n.length) ||
    (n[0] !== `o` && n[0] !== `O`) ||
    (n[1] !== `n` && n[1] !== `N`)
  ) {
    if (((t = Q.hasOwnProperty(n) ? Q[n] : null), t !== null)) {
      switch (typeof r) {
        case `function`:
        case `symbol`:
          return;
        case `boolean`:
          if (!t.acceptsBooleans) return;
      }
      switch (((n = H(t.attributeName)), t.type)) {
        case 3:
          r && e.push(Ci, n, Ei);
          break;
        case 4:
          !0 === r
            ? e.push(Ci, n, Ei)
            : !1 !== r && e.push(Ci, n, wi, H(G(r)), Ti);
          break;
        case 5:
          isNaN(r) || e.push(Ci, n, wi, H(G(r)), Ti);
          break;
        case 6:
          !isNaN(r) && 1 <= r && e.push(Ci, n, wi, H(G(r)), Ti);
          break;
        default:
          (t.sanitizeURL && (r = `` + r), e.push(Ci, n, wi, H(G(r)), Ti));
      }
    } else if (Rt(n)) {
      switch (typeof r) {
        case `function`:
        case `symbol`:
          return;
        case `boolean`:
          if (
            ((t = n.toLowerCase().slice(0, 5)), t !== `data-` && t !== `aria-`)
          )
            return;
      }
      e.push(Ci, H(n), wi, H(G(r)), Ti);
    }
  }
}
function Jt(e, t, n) {
  if (t != null) {
    if (n != null) throw Error(z(60));
    if (typeof t != `object` || !(`__html` in t)) throw Error(z(61));
    ((t = t.__html), t != null && e.push(H(`` + t)));
  }
}
function Yt(e) {
  var t = ``;
  return (
    ei.Children.forEach(e, function (e) {
      e != null && (t += e);
    }),
    t
  );
}
function Xt(e, t, n, r) {
  e.push(Zt(n));
  var i,
    a = (n = null);
  for (i in t)
    if (Z.call(t, i)) {
      var o = t[i];
      if (o != null)
        switch (i) {
          case `children`:
            n = o;
            break;
          case `dangerouslySetInnerHTML`:
            a = o;
            break;
          default:
            qt(e, r, i, o);
        }
    }
  return (
    e.push(Di),
    Jt(e, a, n),
    typeof n == `string` ? (e.push(H(G(n))), null) : n
  );
}
function Zt(e) {
  var t = Mi.get(e);
  if (t === void 0) {
    if (!ji.test(e)) throw Error(z(65, e));
    ((t = U(`<` + e)), Mi.set(e, t));
  }
  return t;
}
function Qt(e, t, n, r, i) {
  switch (t) {
    case `select`:
      e.push(Zt(`select`));
      var a = null,
        o = null;
      for (u in n)
        if (Z.call(n, u)) {
          var s = n[u];
          if (s != null)
            switch (u) {
              case `children`:
                a = s;
                break;
              case `dangerouslySetInnerHTML`:
                o = s;
                break;
              case `defaultValue`:
              case `value`:
                break;
              default:
                qt(e, r, u, s);
            }
        }
      return (e.push(Di), Jt(e, o, a), a);
    case `option`:
      ((o = i.selectedValue), e.push(Zt(`option`)));
      var c = (s = null),
        l = null,
        u = null;
      for (a in n)
        if (Z.call(n, a)) {
          var d = n[a];
          if (d != null)
            switch (a) {
              case `children`:
                s = d;
                break;
              case `selected`:
                l = d;
                break;
              case `dangerouslySetInnerHTML`:
                u = d;
                break;
              case `value`:
                c = d;
              default:
                qt(e, r, a, d);
            }
        }
      if (o != null)
        if (((n = c === null ? Yt(s) : `` + c), di(o))) {
          for (r = 0; r < o.length; r++)
            if (`` + o[r] === n) {
              e.push(ki);
              break;
            }
        } else `` + o === n && e.push(ki);
      else l && e.push(ki);
      return (e.push(Di), Jt(e, u, s), s);
    case `textarea`:
      for (s in (e.push(Zt(`textarea`)), (u = o = a = null), n))
        if (Z.call(n, s) && ((c = n[s]), c != null))
          switch (s) {
            case `children`:
              u = c;
              break;
            case `value`:
              a = c;
              break;
            case `defaultValue`:
              o = c;
              break;
            case `dangerouslySetInnerHTML`:
              throw Error(z(91));
            default:
              qt(e, r, s, c);
          }
      if ((a === null && o !== null && (a = o), e.push(Di), u != null)) {
        if (a != null) throw Error(z(92));
        if (di(u) && 1 < u.length) throw Error(z(93));
        a = `` + u;
      }
      return (
        typeof a == `string` &&
          a[0] ===
            `
` &&
          e.push(Ai),
        a !== null && e.push(H(G(`` + a))),
        null
      );
    case `input`:
      for (o in (e.push(Zt(`input`)), (c = u = s = a = null), n))
        if (Z.call(n, o) && ((l = n[o]), l != null))
          switch (o) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(z(399, `input`));
            case `defaultChecked`:
              c = l;
              break;
            case `defaultValue`:
              s = l;
              break;
            case `checked`:
              u = l;
              break;
            case `value`:
              a = l;
              break;
            default:
              qt(e, r, o, l);
          }
      return (
        u === null
          ? c !== null && qt(e, r, `checked`, c)
          : qt(e, r, `checked`, u),
        a === null ? s !== null && qt(e, r, `value`, s) : qt(e, r, `value`, a),
        e.push(Oi),
        null
      );
    case `menuitem`:
      for (var f in (e.push(Zt(`menuitem`)), n))
        if (Z.call(n, f) && ((a = n[f]), a != null))
          switch (f) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(z(400));
            default:
              qt(e, r, f, a);
          }
      return (e.push(Di), null);
    case `title`:
      for (d in (e.push(Zt(`title`)), (a = null), n))
        if (Z.call(n, d) && ((o = n[d]), o != null))
          switch (d) {
            case `children`:
              a = o;
              break;
            case `dangerouslySetInnerHTML`:
              throw Error(z(434));
            default:
              qt(e, r, d, o);
          }
      return (e.push(Di), a);
    case `listing`:
    case `pre`:
      for (c in (e.push(Zt(t)), (o = a = null), n))
        if (Z.call(n, c) && ((s = n[c]), s != null))
          switch (c) {
            case `children`:
              a = s;
              break;
            case `dangerouslySetInnerHTML`:
              o = s;
              break;
            default:
              qt(e, r, c, s);
          }
      if ((e.push(Di), o != null)) {
        if (a != null) throw Error(z(60));
        if (typeof o != `object` || !(`__html` in o)) throw Error(z(61));
        ((n = o.__html),
          n != null &&
            (typeof n == `string` &&
            0 < n.length &&
            n[0] ===
              `
`
              ? e.push(Ai, H(n))
              : e.push(H(`` + n))));
      }
      return (
        typeof a == `string` &&
          a[0] ===
            `
` &&
          e.push(Ai),
        a
      );
    case `area`:
    case `base`:
    case `br`:
    case `col`:
    case `embed`:
    case `hr`:
    case `img`:
    case `keygen`:
    case `link`:
    case `meta`:
    case `param`:
    case `source`:
    case `track`:
    case `wbr`:
      for (var p in (e.push(Zt(t)), n))
        if (Z.call(n, p) && ((a = n[p]), a != null))
          switch (p) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(z(399, t));
            default:
              qt(e, r, p, a);
          }
      return (e.push(Oi), null);
    case `annotation-xml`:
    case `color-profile`:
    case `font-face`:
    case `font-face-src`:
    case `font-face-uri`:
    case `font-face-format`:
    case `font-face-name`:
    case `missing-glyph`:
      return Xt(e, n, t, r);
    case `html`:
      return (i.insertionMode === 0 && e.push(Ni), Xt(e, n, t, r));
    default:
      if (t.indexOf(`-`) === -1 && typeof n.is != `string`)
        return Xt(e, n, t, r);
      for (l in (e.push(Zt(t)), (o = a = null), n))
        if (Z.call(n, l) && ((s = n[l]), s != null))
          switch (l) {
            case `children`:
              a = s;
              break;
            case `dangerouslySetInnerHTML`:
              o = s;
              break;
            case `style`:
              Kt(e, r, s);
              break;
            case `suppressContentEditableWarning`:
            case `suppressHydrationWarning`:
              break;
            default:
              Rt(l) &&
                typeof s != `function` &&
                typeof s != `symbol` &&
                e.push(Ci, H(l), wi, H(G(s)), Ti);
          }
      return (e.push(Di), Jt(e, o, a), a);
  }
}
function $t(e, t, n) {
  if ((B(e, zi), n === null)) throw Error(z(395));
  return (B(e, n), V(e, Bi));
}
function en(e, t, n, r) {
  switch (n.insertionMode) {
    case 0:
    case 1:
      return (
        B(e, qi),
        B(e, t.segmentPrefix),
        B(e, H(r.toString(16))),
        V(e, Ji)
      );
    case 2:
      return (
        B(e, Xi),
        B(e, t.segmentPrefix),
        B(e, H(r.toString(16))),
        V(e, Zi)
      );
    case 3:
      return (
        B(e, $i),
        B(e, t.segmentPrefix),
        B(e, H(r.toString(16))),
        V(e, ea)
      );
    case 4:
      return (
        B(e, na),
        B(e, t.segmentPrefix),
        B(e, H(r.toString(16))),
        V(e, ra)
      );
    case 5:
      return (
        B(e, aa),
        B(e, t.segmentPrefix),
        B(e, H(r.toString(16))),
        V(e, oa)
      );
    case 6:
      return (
        B(e, ca),
        B(e, t.segmentPrefix),
        B(e, H(r.toString(16))),
        V(e, la)
      );
    case 7:
      return (
        B(e, da),
        B(e, t.segmentPrefix),
        B(e, H(r.toString(16))),
        V(e, fa)
      );
    default:
      throw Error(z(397));
  }
}
function tn(e, t) {
  switch (t.insertionMode) {
    case 0:
    case 1:
      return V(e, Yi);
    case 2:
      return V(e, Qi);
    case 3:
      return V(e, ta);
    case 4:
      return V(e, ia);
    case 5:
      return V(e, sa);
    case 6:
      return V(e, ua);
    case 7:
      return V(e, pa);
    default:
      throw Error(z(397));
  }
}
function nn(e) {
  return JSON.stringify(e).replace(Da, function (e) {
    switch (e) {
      case `<`:
        return `\\u003c`;
      case `\u2028`:
        return `\\u2028`;
      case `\u2029`:
        return `\\u2029`;
      default:
        throw Error(
          `escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React`,
        );
    }
  });
}
function rn(e) {
  if (e == null) return null;
  if (typeof e == `function`) return e.displayName || e.name || null;
  if (typeof e == `string`) return e;
  switch (e) {
    case ja:
      return `Fragment`;
    case Aa:
      return `Portal`;
    case Na:
      return `Profiler`;
    case Ma:
      return `StrictMode`;
    case La:
      return `Suspense`;
    case Ra:
      return `SuspenseList`;
  }
  if (typeof e == `object`)
    switch (e.$$typeof) {
      case Fa:
        return (e.displayName || `Context`) + `.Consumer`;
      case Pa:
        return (e._context.displayName || `Context`) + `.Provider`;
      case Ia:
        var t = e.render;
        return (
          (e = e.displayName),
          (e ||=
            ((e = t.displayName || t.name || ``),
            e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
          e
        );
      case za:
        return (
          (t = e.displayName || null),
          t === null ? rn(e.type) || `Memo` : t
        );
      case Ba:
        ((t = e._payload), (e = e._init));
        try {
          return rn(e(t));
        } catch {}
    }
  return null;
}
function an(e, t) {
  if (((e = e.contextTypes), !e)) return Ka;
  var n,
    r = {};
  for (n in e) r[n] = t[n];
  return r;
}
function on(e, t) {
  if (e !== t) {
    ((e.context._currentValue = e.parentValue), (e = e.parent));
    var n = t.parent;
    if (e === null) {
      if (n !== null) throw Error(z(401));
    } else {
      if (n === null) throw Error(z(401));
      on(e, n);
    }
    t.context._currentValue = t.value;
  }
}
function sn(e) {
  ((e.context._currentValue = e.parentValue),
    (e = e.parent),
    e !== null && sn(e));
}
function cn(e) {
  var t = e.parent;
  (t !== null && cn(t), (e.context._currentValue = e.value));
}
function ln(e, t) {
  if (((e.context._currentValue = e.parentValue), (e = e.parent), e === null))
    throw Error(z(402));
  e.depth === t.depth ? on(e, t) : ln(e, t);
}
function un(e, t) {
  var n = t.parent;
  if (n === null) throw Error(z(402));
  (e.depth === n.depth ? on(e, n) : un(e, n),
    (t.context._currentValue = t.value));
}
function dn(e) {
  var t = qa;
  t !== e &&
    (t === null
      ? cn(e)
      : e === null
        ? sn(t)
        : t.depth === e.depth
          ? on(t, e)
          : t.depth > e.depth
            ? ln(t, e)
            : un(t, e),
    (qa = e));
}
function fn(e, t, n, r) {
  var i = e.state === void 0 ? null : e.state;
  ((e.updater = Ja), (e.props = n), (e.state = i));
  var a = { queue: [], replace: !1 };
  e._reactInternals = a;
  var o = t.contextType;
  if (
    ((e.context = typeof o == `object` && o ? o._currentValue : r),
    (o = t.getDerivedStateFromProps),
    typeof o == `function` &&
      ((o = o(n, i)), (i = o == null ? i : Oa({}, i, o)), (e.state = i)),
    typeof t.getDerivedStateFromProps != `function` &&
      typeof e.getSnapshotBeforeUpdate != `function` &&
      (typeof e.UNSAFE_componentWillMount == `function` ||
        typeof e.componentWillMount == `function`))
  )
    if (
      ((t = e.state),
      typeof e.componentWillMount == `function` && e.componentWillMount(),
      typeof e.UNSAFE_componentWillMount == `function` &&
        e.UNSAFE_componentWillMount(),
      t !== e.state && Ja.enqueueReplaceState(e, e.state, null),
      a.queue !== null && 0 < a.queue.length)
    )
      if (
        ((t = a.queue),
        (o = a.replace),
        (a.queue = null),
        (a.replace = !1),
        o && t.length === 1)
      )
        e.state = t[0];
      else {
        for (a = o ? t[0] : e.state, i = !0, o = o ? 1 : 0; o < t.length; o++) {
          var s = t[o];
          ((s = typeof s == `function` ? s.call(e, a, n, r) : s),
            s != null && (i ? ((i = !1), (a = Oa({}, a, s))) : Oa(a, s)));
        }
        e.state = a;
      }
    else a.queue = null;
}
function pn(e, t, n) {
  var r = e.id;
  e = e.overflow;
  var i = 32 - Xa(r) - 1;
  ((r &= ~(1 << i)), (n += 1));
  var a = 32 - Xa(t) + i;
  if (30 < a) {
    var o = i - (i % 5);
    return (
      (a = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      { id: (1 << (32 - Xa(t) + i)) | (n << i) | r, overflow: a + e }
    );
  }
  return { id: (1 << a) | (n << i) | r, overflow: e };
}
function mn(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Za(e) / Qa) | 0)) | 0);
}
function hn(e, t) {
  return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
}
function gn() {
  if (eo === null) throw Error(z(321));
  return eo;
}
function _n() {
  if (0 < so) throw Error(z(312));
  return { memoizedState: null, queue: null, next: null };
}
function vn() {
  return (
    $ === null
      ? no === null
        ? ((ro = !1), (no = $ = _n()))
        : ((ro = !0), ($ = no))
      : $.next === null
        ? ((ro = !1), ($ = $.next = _n()))
        : ((ro = !0), ($ = $.next)),
    $
  );
}
function yn() {
  ((to = eo = null), (io = !1), (no = null), (so = 0), ($ = oo = null));
}
function bn(e, t) {
  return typeof t == `function` ? t(e) : t;
}
function xn(e, t, n) {
  if (((eo = gn()), ($ = vn()), ro)) {
    var r = $.queue;
    if (((t = r.dispatch), oo !== null && ((n = oo.get(r)), n !== void 0))) {
      (oo.delete(r), (r = $.memoizedState));
      do ((r = e(r, n.action)), (n = n.next));
      while (n !== null);
      return (($.memoizedState = r), [r, t]);
    }
    return [$.memoizedState, t];
  }
  return (
    (e =
      e === bn ? (typeof t == `function` ? t() : t) : n === void 0 ? t : n(t)),
    ($.memoizedState = e),
    (e = $.queue = { last: null, dispatch: null }),
    (e = e.dispatch = Cn.bind(null, eo, e)),
    [$.memoizedState, e]
  );
}
function Sn(e, t) {
  if (((eo = gn()), ($ = vn()), (t = t === void 0 ? null : t), $ !== null)) {
    var n = $.memoizedState;
    if (n !== null && t !== null) {
      var r = n[1];
      e: if (r === null) r = !1;
      else {
        for (var i = 0; i < r.length && i < t.length; i++)
          if (!$a(t[i], r[i])) {
            r = !1;
            break e;
          }
        r = !0;
      }
      if (r) return n[0];
    }
  }
  return ((e = e()), ($.memoizedState = [e, t]), e);
}
function Cn(e, t, n) {
  if (25 <= so) throw Error(z(301));
  if (e === eo)
    if (
      ((io = !0),
      (e = { action: n, next: null }),
      oo === null && (oo = new Map()),
      (n = oo.get(t)),
      n === void 0)
    )
      oo.set(t, e);
    else {
      for (t = n; t.next !== null;) t = t.next;
      t.next = e;
    }
}
function wn() {
  throw Error(z(394));
}
function Tn() {}
function En(e) {
  return (console.error(e), null);
}
function Dn() {}
function On(e, t, n, r, i, a, o, s, c) {
  var l = [],
    u = new Set();
  return (
    (t = {
      destination: null,
      responseState: t,
      progressiveChunkSize: r === void 0 ? 12800 : r,
      status: 0,
      fatalError: null,
      nextSegmentId: 0,
      allPendingTasks: 0,
      pendingRootTasks: 0,
      completedRootSegment: null,
      abortableTasks: u,
      pingedTasks: l,
      clientRenderedBoundaries: [],
      completedBoundaries: [],
      partialBoundaries: [],
      onError: i === void 0 ? En : i,
      onAllReady: a === void 0 ? Dn : a,
      onShellReady: o === void 0 ? Dn : o,
      onShellError: s === void 0 ? Dn : s,
      onFatalError: c === void 0 ? Dn : c,
    }),
    (n = An(t, 0, null, n, !1, !1)),
    (n.parentFlushed = !0),
    (e = kn(t, e, null, n, u, Ka, null, Ya)),
    l.push(e),
    t
  );
}
function kn(e, t, n, r, i, a, o, s) {
  (e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++);
  var c = {
    node: t,
    ping: function () {
      var t = e.pingedTasks;
      (t.push(c), t.length === 1 && Wn(e));
    },
    blockedBoundary: n,
    blockedSegment: r,
    abortSet: i,
    legacyContext: a,
    context: o,
    treeContext: s,
  };
  return (i.add(c), c);
}
function An(e, t, n, r, i, a) {
  return {
    status: 0,
    id: -1,
    index: t,
    parentFlushed: !1,
    chunks: [],
    children: [],
    formatContext: r,
    boundary: n,
    lastPushedText: i,
    textEmbedded: a,
  };
}
function jn(e, t) {
  if (((e = e.onError(t)), e != null && typeof e != `string`))
    throw Error(
      `onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "` +
        typeof e +
        `" instead`,
    );
  return e;
}
function Mn(e, t) {
  var n = e.onShellError;
  (n(t),
    (n = e.onFatalError),
    n(t),
    e.destination === null
      ? ((e.status = 1), (e.fatalError = t))
      : ((e.status = 2), Lt(e.destination, t)));
}
function Nn(e, t, n, r, i) {
  for (eo = {}, to = t, ao = 0, e = n(r, i); io;)
    ((io = !1), (ao = 0), (so += 1), ($ = null), (e = n(r, i)));
  return (yn(), e);
}
function Pn(e, t, n, r) {
  var i = n.render(),
    a = r.childContextTypes;
  if (a != null) {
    var o = t.legacyContext;
    if (typeof n.getChildContext != `function`) r = o;
    else {
      for (var s in ((n = n.getChildContext()), n))
        if (!(s in a)) throw Error(z(108, rn(r) || `Unknown`, s));
      r = Oa({}, o, n);
    }
    ((t.legacyContext = r), Ln(e, t, i), (t.legacyContext = o));
  } else Ln(e, t, i);
}
function Fn(e, t) {
  if (e && e.defaultProps) {
    for (var n in ((t = Oa({}, t)), (e = e.defaultProps), e))
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function In(e, t, n, r, i) {
  if (typeof n == `function`)
    if (n.prototype && n.prototype.isReactComponent) {
      i = an(n, t.legacyContext);
      var a = n.contextType;
      ((a = new n(r, typeof a == `object` && a ? a._currentValue : i)),
        fn(a, n, r, i),
        Pn(e, t, a, n));
    } else {
      ((a = an(n, t.legacyContext)), (i = Nn(e, t, n, r, a)));
      var o = ao !== 0;
      if (
        typeof i == `object` &&
        i &&
        typeof i.render == `function` &&
        i.$$typeof === void 0
      )
        (fn(i, n, r, a), Pn(e, t, i, n));
      else if (o) {
        ((r = t.treeContext), (t.treeContext = pn(r, 1, 0)));
        try {
          Ln(e, t, i);
        } finally {
          t.treeContext = r;
        }
      } else Ln(e, t, i);
    }
  else {
    if (typeof n != `string`) {
      switch (n) {
        case Ua:
        case Ha:
        case Ma:
        case Na:
        case ja:
          Ln(e, t, r.children);
          return;
        case Ra:
          Ln(e, t, r.children);
          return;
        case Va:
          throw Error(z(343));
        case La:
          e: {
            ((n = t.blockedBoundary),
              (i = t.blockedSegment),
              (a = r.fallback),
              (r = r.children),
              (o = new Set()));
            var s = {
                id: null,
                rootSegmentID: -1,
                parentFlushed: !1,
                pendingTasks: 0,
                forceClientRender: !1,
                completedSegments: [],
                byteSize: 0,
                fallbackAbortableTasks: o,
                errorDigest: null,
              },
              c = An(e, i.chunks.length, s, i.formatContext, !1, !1);
            (i.children.push(c), (i.lastPushedText = !1));
            var l = An(e, 0, null, i.formatContext, !1, !1);
            ((l.parentFlushed = !0),
              (t.blockedBoundary = s),
              (t.blockedSegment = l));
            try {
              if (
                (zn(e, t, r),
                l.lastPushedText && l.textEmbedded && l.chunks.push(vi),
                (l.status = 1),
                Hn(s, l),
                s.pendingTasks === 0)
              )
                break e;
            } catch (t) {
              ((l.status = 4),
                (s.forceClientRender = !0),
                (s.errorDigest = jn(e, t)));
            } finally {
              ((t.blockedBoundary = n), (t.blockedSegment = i));
            }
            ((t = kn(e, a, n, c, o, t.legacyContext, t.context, t.treeContext)),
              e.pingedTasks.push(t));
          }
          return;
      }
      if (typeof n == `object` && n)
        switch (n.$$typeof) {
          case Ia:
            if (((r = Nn(e, t, n.render, r, i)), ao !== 0)) {
              ((n = t.treeContext), (t.treeContext = pn(n, 1, 0)));
              try {
                Ln(e, t, r);
              } finally {
                t.treeContext = n;
              }
            } else Ln(e, t, r);
            return;
          case za:
            ((n = n.type), (r = Fn(n, r)), In(e, t, n, r, i));
            return;
          case Pa:
            if (
              ((i = r.children),
              (n = n._context),
              (r = r.value),
              (a = n._currentValue),
              (n._currentValue = r),
              (o = qa),
              (qa = r =
                {
                  parent: o,
                  depth: o === null ? 0 : o.depth + 1,
                  context: n,
                  parentValue: a,
                  value: r,
                }),
              (t.context = r),
              Ln(e, t, i),
              (e = qa),
              e === null)
            )
              throw Error(z(403));
            ((r = e.parentValue),
              (e.context._currentValue =
                r === Wa ? e.context._defaultValue : r),
              (e = qa = e.parent),
              (t.context = e));
            return;
          case Fa:
            ((r = r.children), (r = r(n._currentValue)), Ln(e, t, r));
            return;
          case Ba:
            ((i = n._init),
              (n = i(n._payload)),
              (r = Fn(n, r)),
              In(e, t, n, r, void 0));
            return;
        }
      throw Error(z(130, n == null ? n : typeof n, ``));
    }
    switch (
      ((i = t.blockedSegment),
      (a = Qt(i.chunks, n, r, e.responseState, i.formatContext)),
      (i.lastPushedText = !1),
      (o = i.formatContext),
      (i.formatContext = Wt(o, n, r)),
      zn(e, t, a),
      (i.formatContext = o),
      n)
    ) {
      case `area`:
      case `base`:
      case `br`:
      case `col`:
      case `embed`:
      case `hr`:
      case `img`:
      case `input`:
      case `keygen`:
      case `link`:
      case `meta`:
      case `param`:
      case `source`:
      case `track`:
      case `wbr`:
        break;
      default:
        i.chunks.push(Pi, H(n), Fi);
    }
    i.lastPushedText = !1;
  }
}
function Ln(e, t, n) {
  if (((t.node = n), typeof n == `object` && n)) {
    switch (n.$$typeof) {
      case ka:
        In(e, t, n.type, n.props, n.ref);
        return;
      case Aa:
        throw Error(z(257));
      case Ba:
        var r = n._init;
        ((n = r(n._payload)), Ln(e, t, n));
        return;
    }
    if (di(n)) {
      Rn(e, t, n);
      return;
    }
    if (
      (typeof n != `object` || !n
        ? (r = null)
        : ((r = (Ga && n[Ga]) || n[`@@iterator`]),
          (r = typeof r == `function` ? r : null)),
      (r &&= r.call(n)))
    ) {
      if (((n = r.next()), !n.done)) {
        var i = [];
        do (i.push(n.value), (n = r.next()));
        while (!n.done);
        Rn(e, t, i);
      }
      return;
    }
    throw (
      (e = Object.prototype.toString.call(n)),
      Error(
        z(
          31,
          e === `[object Object]`
            ? `object with keys {` + Object.keys(n).join(`, `) + `}`
            : e,
        ),
      )
    );
  }
  typeof n == `string`
    ? ((r = t.blockedSegment),
      (r.lastPushedText = Gt(
        t.blockedSegment.chunks,
        n,
        e.responseState,
        r.lastPushedText,
      )))
    : typeof n == `number` &&
      ((r = t.blockedSegment),
      (r.lastPushedText = Gt(
        t.blockedSegment.chunks,
        `` + n,
        e.responseState,
        r.lastPushedText,
      )));
}
function Rn(e, t, n) {
  for (var r = n.length, i = 0; i < r; i++) {
    var a = t.treeContext;
    t.treeContext = pn(a, r, i);
    try {
      zn(e, t, n[i]);
    } finally {
      t.treeContext = a;
    }
  }
}
function zn(e, t, n) {
  var r = t.blockedSegment.formatContext,
    i = t.legacyContext,
    a = t.context;
  try {
    return Ln(e, t, n);
  } catch (c) {
    if ((yn(), typeof c != `object` || !c || typeof c.then != `function`))
      throw (
        (t.blockedSegment.formatContext = r),
        (t.legacyContext = i),
        (t.context = a),
        dn(a),
        c
      );
    n = c;
    var o = t.blockedSegment,
      s = An(e, o.chunks.length, null, o.formatContext, o.lastPushedText, !0);
    (o.children.push(s),
      (o.lastPushedText = !1),
      (e = kn(
        e,
        t.node,
        t.blockedBoundary,
        s,
        t.abortSet,
        t.legacyContext,
        t.context,
        t.treeContext,
      ).ping),
      n.then(e, e),
      (t.blockedSegment.formatContext = r),
      (t.legacyContext = i),
      (t.context = a),
      dn(a));
  }
}
function Bn(e) {
  var t = e.blockedBoundary;
  ((e = e.blockedSegment), (e.status = 3), Un(this, t, e));
}
function Vn(e, t, n) {
  var r = e.blockedBoundary;
  ((e.blockedSegment.status = 3),
    r === null
      ? (t.allPendingTasks--,
        t.status !== 2 &&
          ((t.status = 2), t.destination !== null && t.destination.close()))
      : (r.pendingTasks--,
        r.forceClientRender ||
          ((r.forceClientRender = !0),
          (e = n === void 0 ? Error(z(432)) : n),
          (r.errorDigest = t.onError(e)),
          r.parentFlushed && t.clientRenderedBoundaries.push(r)),
        r.fallbackAbortableTasks.forEach(function (e) {
          return Vn(e, t, n);
        }),
        r.fallbackAbortableTasks.clear(),
        t.allPendingTasks--,
        t.allPendingTasks === 0 && ((r = t.onAllReady), r())));
}
function Hn(e, t) {
  if (
    t.chunks.length === 0 &&
    t.children.length === 1 &&
    t.children[0].boundary === null
  ) {
    var n = t.children[0];
    ((n.id = t.id), (n.parentFlushed = !0), n.status === 1 && Hn(e, n));
  } else e.completedSegments.push(t);
}
function Un(e, t, n) {
  if (t === null) {
    if (n.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(z(389));
      e.completedRootSegment = n;
    }
    (e.pendingRootTasks--,
      e.pendingRootTasks === 0 &&
        ((e.onShellError = Dn), (t = e.onShellReady), t()));
  } else
    (t.pendingTasks--,
      t.forceClientRender ||
        (t.pendingTasks === 0
          ? (n.parentFlushed && n.status === 1 && Hn(t, n),
            t.parentFlushed && e.completedBoundaries.push(t),
            t.fallbackAbortableTasks.forEach(Bn, e),
            t.fallbackAbortableTasks.clear())
          : n.parentFlushed &&
            n.status === 1 &&
            (Hn(t, n),
            t.completedSegments.length === 1 &&
              t.parentFlushed &&
              e.partialBoundaries.push(t))));
  (e.allPendingTasks--, e.allPendingTasks === 0 && ((e = e.onAllReady), e()));
}
function Wn(e) {
  if (e.status !== 2) {
    var t = qa,
      n = uo.current;
    uo.current = co;
    var r = lo;
    lo = e.responseState;
    try {
      var i,
        a = e.pingedTasks;
      for (i = 0; i < a.length; i++) {
        var o = a[i],
          s = e,
          c = o.blockedSegment;
        if (c.status === 0) {
          dn(o.context);
          try {
            (Ln(s, o, o.node),
              c.lastPushedText && c.textEmbedded && c.chunks.push(vi),
              o.abortSet.delete(o),
              (c.status = 1),
              Un(s, o.blockedBoundary, c));
          } catch (e) {
            if (
              (yn(), typeof e == `object` && e && typeof e.then == `function`)
            ) {
              var l = o.ping;
              e.then(l, l);
            } else {
              (o.abortSet.delete(o), (c.status = 4));
              var u = o.blockedBoundary,
                d = e,
                f = jn(s, d);
              if (
                (u === null
                  ? Mn(s, d)
                  : (u.pendingTasks--,
                    u.forceClientRender ||
                      ((u.forceClientRender = !0),
                      (u.errorDigest = f),
                      u.parentFlushed && s.clientRenderedBoundaries.push(u))),
                s.allPendingTasks--,
                s.allPendingTasks === 0)
              ) {
                var p = s.onAllReady;
                p();
              }
            }
          }
        }
      }
      (a.splice(0, i), e.destination !== null && Xn(e, e.destination));
    } catch (t) {
      (jn(e, t), Mn(e, t));
    } finally {
      ((lo = r), (uo.current = n), n === co && dn(t));
    }
  }
}
function Gn(e, t, n) {
  switch (((n.parentFlushed = !0), n.status)) {
    case 0:
      var r = (n.id = e.nextSegmentId++);
      return (
        (n.lastPushedText = !1),
        (n.textEmbedded = !1),
        (e = e.responseState),
        B(t, Ii),
        B(t, e.placeholderPrefix),
        (e = H(r.toString(16))),
        B(t, e),
        V(t, Li)
      );
    case 1:
      n.status = 2;
      var i = !0;
      r = n.chunks;
      var a = 0;
      n = n.children;
      for (var o = 0; o < n.length; o++) {
        for (i = n[o]; a < i.index; a++) B(t, r[a]);
        i = Kn(e, t, i);
      }
      for (; a < r.length - 1; a++) B(t, r[a]);
      return (a < r.length && (i = V(t, r[a])), i);
    default:
      throw Error(z(390));
  }
}
function Kn(e, t, n) {
  var r = n.boundary;
  if (r === null) return Gn(e, t, n);
  if (((r.parentFlushed = !0), r.forceClientRender))
    ((r = r.errorDigest),
      V(t, Vi),
      B(t, Ui),
      r && (B(t, Gi), B(t, H(G(r))), B(t, Wi)),
      V(t, Ki),
      Gn(e, t, n));
  else if (0 < r.pendingTasks) {
    ((r.rootSegmentID = e.nextSegmentId++),
      0 < r.completedSegments.length && e.partialBoundaries.push(r));
    var i = e.responseState,
      a = i.nextSuspenseID++;
    ((i = U(i.boundaryPrefix + a.toString(16))),
      (r = r.id = i),
      $t(t, e.responseState, r),
      Gn(e, t, n));
  } else if (r.byteSize > e.progressiveChunkSize)
    ((r.rootSegmentID = e.nextSegmentId++),
      e.completedBoundaries.push(r),
      $t(t, e.responseState, r.id),
      Gn(e, t, n));
  else {
    if ((V(t, Ri), (n = r.completedSegments), n.length !== 1))
      throw Error(z(391));
    Kn(e, t, n[0]);
  }
  return V(t, Hi);
}
function qn(e, t, n) {
  return (
    en(t, e.responseState, n.formatContext, n.id),
    Kn(e, t, n),
    tn(t, n.formatContext)
  );
}
function Jn(e, t, n) {
  for (var r = n.completedSegments, i = 0; i < r.length; i++) Yn(e, t, n, r[i]);
  if (
    ((r.length = 0),
    (e = e.responseState),
    (r = n.id),
    (n = n.rootSegmentID),
    B(t, e.startInlineScript),
    e.sentCompleteBoundaryFunction
      ? B(t, ya)
      : ((e.sentCompleteBoundaryFunction = !0), B(t, va)),
    r === null)
  )
    throw Error(z(395));
  return (
    (n = H(n.toString(16))),
    B(t, r),
    B(t, ba),
    B(t, e.segmentPrefix),
    B(t, n),
    V(t, xa)
  );
}
function Yn(e, t, n, r) {
  if (r.status === 2) return !0;
  var i = r.id;
  if (i === -1) {
    if ((r.id = n.rootSegmentID) === -1) throw Error(z(392));
    return qn(e, t, r);
  }
  return (
    qn(e, t, r),
    (e = e.responseState),
    B(t, e.startInlineScript),
    e.sentCompleteSegmentFunction
      ? B(t, ha)
      : ((e.sentCompleteSegmentFunction = !0), B(t, ma)),
    B(t, e.segmentPrefix),
    (i = H(i.toString(16))),
    B(t, i),
    B(t, ga),
    B(t, e.placeholderPrefix),
    B(t, i),
    V(t, _a)
  );
}
function Xn(e, t) {
  ((Y = new Uint8Array(512)), (X = 0));
  try {
    var n = e.completedRootSegment;
    if (n !== null && e.pendingRootTasks === 0) {
      (Kn(e, t, n), (e.completedRootSegment = null));
      var r = e.responseState.bootstrapChunks;
      for (n = 0; n < r.length - 1; n++) B(t, r[n]);
      n < r.length && V(t, r[n]);
    }
    var i,
      a = e.clientRenderedBoundaries;
    for (i = 0; i < a.length; i++) {
      var o = a[i];
      r = t;
      var s = e.responseState,
        c = o.id,
        l = o.errorDigest,
        u = o.errorMessage,
        d = o.errorComponentStack;
      if (
        (B(r, s.startInlineScript),
        s.sentClientRenderFunction
          ? B(r, Ca)
          : ((s.sentClientRenderFunction = !0), B(r, Sa)),
        c === null)
      )
        throw Error(z(395));
      if (
        (B(r, c),
        B(r, wa),
        (l || u || d) && (B(r, Ea), B(r, H(nn(l || ``)))),
        (u || d) && (B(r, Ea), B(r, H(nn(u || ``)))),
        d && (B(r, Ea), B(r, H(nn(d)))),
        !V(r, Ta))
      ) {
        ((e.destination = null), i++, a.splice(0, i));
        return;
      }
    }
    a.splice(0, i);
    var f = e.completedBoundaries;
    for (i = 0; i < f.length; i++)
      if (!Jn(e, t, f[i])) {
        ((e.destination = null), i++, f.splice(0, i));
        return;
      }
    (f.splice(0, i), It(t), (Y = new Uint8Array(512)), (X = 0));
    var p = e.partialBoundaries;
    for (i = 0; i < p.length; i++) {
      var m = p[i];
      e: {
        ((a = e), (o = t));
        var h = m.completedSegments;
        for (s = 0; s < h.length; s++)
          if (!Yn(a, o, m, h[s])) {
            (s++, h.splice(0, s));
            var g = !1;
            break e;
          }
        (h.splice(0, s), (g = !0));
      }
      if (!g) {
        ((e.destination = null), i++, p.splice(0, i));
        return;
      }
    }
    p.splice(0, i);
    var _ = e.completedBoundaries;
    for (i = 0; i < _.length; i++)
      if (!Jn(e, t, _[i])) {
        ((e.destination = null), i++, _.splice(0, i));
        return;
      }
    _.splice(0, i);
  } finally {
    (It(t),
      e.allPendingTasks === 0 &&
        e.pingedTasks.length === 0 &&
        e.clientRenderedBoundaries.length === 0 &&
        e.completedBoundaries.length === 0 &&
        t.close());
  }
}
function Zn(e, t) {
  try {
    var n = e.abortableTasks;
    (n.forEach(function (n) {
      return Vn(n, e, t);
    }),
      n.clear(),
      e.destination !== null && Xn(e, e.destination));
  } catch (t) {
    (jn(e, t), Mn(e, t));
  }
}
var Qn,
  $n,
  er,
  K,
  tr,
  nr,
  rr,
  q,
  ir,
  ar,
  or,
  sr,
  cr,
  lr,
  ur,
  dr,
  fr,
  pr,
  mr,
  hr,
  gr,
  _r,
  vr,
  yr,
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  Dr,
  Or,
  kr,
  Ar,
  jr,
  Mr,
  Nr,
  Pr,
  Fr,
  Ir,
  Lr,
  Rr,
  zr,
  Br,
  Vr,
  Hr,
  Ur,
  J,
  Wr,
  Gr,
  Kr,
  qr,
  Jr,
  Yr,
  Xr,
  Zr,
  Qr,
  $r,
  ei,
  Y,
  X,
  ti,
  Z,
  ni,
  ri,
  ii,
  Q,
  ai,
  oi,
  si,
  ci,
  li,
  ui,
  di,
  fi,
  pi,
  mi,
  hi,
  gi,
  _i,
  vi,
  yi,
  bi,
  xi,
  Si,
  Ci,
  wi,
  Ti,
  Ei,
  Di,
  Oi,
  ki,
  Ai,
  ji,
  Mi,
  Ni,
  Pi,
  Fi,
  Ii,
  Li,
  Ri,
  zi,
  Bi,
  Vi,
  Hi,
  Ui,
  Wi,
  Gi,
  Ki,
  qi,
  Ji,
  Yi,
  Xi,
  Zi,
  Qi,
  $i,
  ea,
  ta,
  na,
  ra,
  ia,
  aa,
  oa,
  sa,
  ca,
  la,
  ua,
  da,
  fa,
  pa,
  ma,
  ha,
  ga,
  _a,
  va,
  ya,
  ba,
  xa,
  Sa,
  Ca,
  wa,
  Ta,
  Ea,
  Da,
  Oa,
  ka,
  Aa,
  ja,
  Ma,
  Na,
  Pa,
  Fa,
  Ia,
  La,
  Ra,
  za,
  Ba,
  Va,
  Ha,
  Ua,
  Wa,
  Ga,
  Ka,
  qa,
  Ja,
  Ya,
  Xa,
  Za,
  Qa,
  $a,
  eo,
  to,
  no,
  $,
  ro,
  io,
  ao,
  oo,
  so,
  co,
  lo,
  uo,
  fo,
  po,
  mo,
  ho,
  go = e(() => {
    (n(),
      (Qn = `default` in u ? d : u),
      ($n = {}),
      (er = Qn),
      (K = Object.prototype.hasOwnProperty),
      (tr =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/),
      (nr = {}),
      (rr = {}),
      (q = {}),
      `children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`
        .split(` `)
        .forEach(function (e) {
          q[e] = new F(e, 0, !1, e, null, !1, !1);
        }),
      [
        [`acceptCharset`, `accept-charset`],
        [`className`, `class`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
      ].forEach(function (e) {
        var t = e[0];
        q[t] = new F(t, 1, !1, e[1], null, !1, !1);
      }),
      [`contentEditable`, `draggable`, `spellCheck`, `value`].forEach(
        function (e) {
          q[e] = new F(e, 2, !1, e.toLowerCase(), null, !1, !1);
        },
      ),
      [
        `autoReverse`,
        `externalResourcesRequired`,
        `focusable`,
        `preserveAlpha`,
      ].forEach(function (e) {
        q[e] = new F(e, 2, !1, e, null, !1, !1);
      }),
      `allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`
        .split(` `)
        .forEach(function (e) {
          q[e] = new F(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
      [`checked`, `multiple`, `muted`, `selected`].forEach(function (e) {
        q[e] = new F(e, 3, !0, e, null, !1, !1);
      }),
      [`capture`, `download`].forEach(function (e) {
        q[e] = new F(e, 4, !1, e, null, !1, !1);
      }),
      [`cols`, `rows`, `size`, `span`].forEach(function (e) {
        q[e] = new F(e, 6, !1, e, null, !1, !1);
      }),
      [`rowSpan`, `start`].forEach(function (e) {
        q[e] = new F(e, 5, !1, e.toLowerCase(), null, !1, !1);
      }),
      (ir = /[\-:]([a-z])/g),
      `accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(ir, Ee);
          q[t] = new F(t, 1, !1, e, null, !1, !1);
        }),
      `xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(ir, Ee);
          q[t] = new F(t, 1, !1, e, `http://www.w3.org/1999/xlink`, !1, !1);
        }),
      [`xml:base`, `xml:lang`, `xml:space`].forEach(function (e) {
        var t = e.replace(ir, Ee);
        q[t] = new F(
          t,
          1,
          !1,
          e,
          `http://www.w3.org/XML/1998/namespace`,
          !1,
          !1,
        );
      }),
      [`tabIndex`, `crossOrigin`].forEach(function (e) {
        q[e] = new F(e, 1, !1, e.toLowerCase(), null, !1, !1);
      }),
      (q.xlinkHref = new F(
        `xlinkHref`,
        1,
        !1,
        `xlink:href`,
        `http://www.w3.org/1999/xlink`,
        !0,
        !1,
      )),
      [`src`, `href`, `action`, `formAction`].forEach(function (e) {
        q[e] = new F(e, 1, !1, e.toLowerCase(), null, !0, !0);
      }),
      (ar = {
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
      }),
      (or = [`Webkit`, `ms`, `Moz`, `O`]),
      Object.keys(ar).forEach(function (e) {
        or.forEach(function (t) {
          ((t = t + e.charAt(0).toUpperCase() + e.substring(1)),
            (ar[t] = ar[e]));
        });
      }),
      (sr = /["'&<>]/),
      (cr = /([A-Z])/g),
      (lr = /^ms-/),
      (ur = Array.isArray),
      (dr = new Map()),
      (fr = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/),
      (pr = new Map()),
      (mr = /[<\u2028\u2029]/g),
      (hr = Object.assign),
      (gr = Symbol.for(`react.element`)),
      (_r = Symbol.for(`react.portal`)),
      (vr = Symbol.for(`react.fragment`)),
      (yr = Symbol.for(`react.strict_mode`)),
      (br = Symbol.for(`react.profiler`)),
      (xr = Symbol.for(`react.provider`)),
      (Sr = Symbol.for(`react.context`)),
      (Cr = Symbol.for(`react.forward_ref`)),
      (wr = Symbol.for(`react.suspense`)),
      (Tr = Symbol.for(`react.suspense_list`)),
      (Er = Symbol.for(`react.memo`)),
      (Dr = Symbol.for(`react.lazy`)),
      (Or = Symbol.for(`react.scope`)),
      (kr = Symbol.for(`react.debug_trace_mode`)),
      (Ar = Symbol.for(`react.legacy_hidden`)),
      (jr = Symbol.for(`react.default_value`)),
      (Mr = Symbol.iterator),
      (Nr = {}),
      (Pr = null),
      (Fr = {
        isMounted: function () {
          return !1;
        },
        enqueueSetState: function (e, t) {
          ((e = e._reactInternals), e.queue !== null && e.queue.push(t));
        },
        enqueueReplaceState: function (e, t) {
          ((e = e._reactInternals), (e.replace = !0), (e.queue = [t]));
        },
        enqueueForceUpdate: function () {},
      }),
      (Ir = { id: 1, overflow: `` }),
      (Lr = Math.clz32 ? Math.clz32 : Xe),
      (Rr = Math.log),
      (zr = Math.LN2),
      (Br = typeof Object.is == `function` ? Object.is : Ze),
      (Vr = null),
      (Hr = null),
      (Ur = null),
      (J = null),
      (Wr = !1),
      (Gr = !1),
      (Kr = 0),
      (qr = null),
      (Jr = 0),
      (Yr = {
        readContext: function (e) {
          return e._currentValue2;
        },
        useContext: function (e) {
          return (Qe(), e._currentValue2);
        },
        useMemo: it,
        useReducer: rt,
        useRef: function (e) {
          ((Vr = Qe()), (J = et()));
          var t = J.memoizedState;
          return t === null ? ((e = { current: e }), (J.memoizedState = e)) : t;
        },
        useState: function (e) {
          return rt(nt, e);
        },
        useInsertionEffect: st,
        useLayoutEffect: function () {},
        useCallback: function (e, t) {
          return it(function () {
            return e;
          }, t);
        },
        useImperativeHandle: st,
        useEffect: st,
        useDebugValue: st,
        useDeferredValue: function (e) {
          return (Qe(), e);
        },
        useTransition: function () {
          return (Qe(), [!1, ot]);
        },
        useId: function () {
          var e = Hr.treeContext,
            t = e.overflow;
          ((e = e.id), (e = (e & ~(1 << (32 - Lr(e) - 1))).toString(32) + t));
          var n = Xr;
          if (n === null) throw Error(P(404));
          return (
            (t = Kr++),
            (e = `:` + n.idPrefix + `R` + e),
            0 < t && (e += `H` + t.toString(32)),
            e + `:`
          );
        },
        useMutableSource: function (e, t) {
          return (Qe(), t(e._source));
        },
        useSyncExternalStore: function (e, t, n) {
          if (n === void 0) throw Error(P(407));
          return n();
        },
      }),
      (Xr = null),
      (Zr =
        er.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
          .ReactCurrentDispatcher),
      ($n.renderToNodeStream = function () {
        throw Error(P(207));
      }),
      ($n.renderToStaticMarkup = function (e, t) {
        return Ft(
          e,
          t,
          !0,
          `The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server`,
        );
      }),
      ($n.renderToStaticNodeStream = function () {
        throw Error(P(208));
      }),
      ($n.renderToString = function (e, t) {
        return Ft(
          e,
          t,
          !1,
          `The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server`,
        );
      }),
      ($n.version = `18.2.0`),
      (Qr = `default` in u ? d : u),
      ($r = {}),
      (ei = Qr),
      (Y = null),
      (X = 0),
      (ti = new TextEncoder()),
      (Z = Object.prototype.hasOwnProperty),
      (ni =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/),
      (ri = {}),
      (ii = {}),
      (Q = {}),
      `children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`
        .split(` `)
        .forEach(function (e) {
          Q[e] = new W(e, 0, !1, e, null, !1, !1);
        }),
      [
        [`acceptCharset`, `accept-charset`],
        [`className`, `class`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
      ].forEach(function (e) {
        var t = e[0];
        Q[t] = new W(t, 1, !1, e[1], null, !1, !1);
      }),
      [`contentEditable`, `draggable`, `spellCheck`, `value`].forEach(
        function (e) {
          Q[e] = new W(e, 2, !1, e.toLowerCase(), null, !1, !1);
        },
      ),
      [
        `autoReverse`,
        `externalResourcesRequired`,
        `focusable`,
        `preserveAlpha`,
      ].forEach(function (e) {
        Q[e] = new W(e, 2, !1, e, null, !1, !1);
      }),
      `allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`
        .split(` `)
        .forEach(function (e) {
          Q[e] = new W(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
      [`checked`, `multiple`, `muted`, `selected`].forEach(function (e) {
        Q[e] = new W(e, 3, !0, e, null, !1, !1);
      }),
      [`capture`, `download`].forEach(function (e) {
        Q[e] = new W(e, 4, !1, e, null, !1, !1);
      }),
      [`cols`, `rows`, `size`, `span`].forEach(function (e) {
        Q[e] = new W(e, 6, !1, e, null, !1, !1);
      }),
      [`rowSpan`, `start`].forEach(function (e) {
        Q[e] = new W(e, 5, !1, e.toLowerCase(), null, !1, !1);
      }),
      (ai = /[\-:]([a-z])/g),
      `accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(ai, zt);
          Q[t] = new W(t, 1, !1, e, null, !1, !1);
        }),
      `xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(ai, zt);
          Q[t] = new W(t, 1, !1, e, `http://www.w3.org/1999/xlink`, !1, !1);
        }),
      [`xml:base`, `xml:lang`, `xml:space`].forEach(function (e) {
        var t = e.replace(ai, zt);
        Q[t] = new W(
          t,
          1,
          !1,
          e,
          `http://www.w3.org/XML/1998/namespace`,
          !1,
          !1,
        );
      }),
      [`tabIndex`, `crossOrigin`].forEach(function (e) {
        Q[e] = new W(e, 1, !1, e.toLowerCase(), null, !1, !1);
      }),
      (Q.xlinkHref = new W(
        `xlinkHref`,
        1,
        !1,
        `xlink:href`,
        `http://www.w3.org/1999/xlink`,
        !0,
        !1,
      )),
      [`src`, `href`, `action`, `formAction`].forEach(function (e) {
        Q[e] = new W(e, 1, !1, e.toLowerCase(), null, !0, !0);
      }),
      (oi = {
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
      }),
      (si = [`Webkit`, `ms`, `Moz`, `O`]),
      Object.keys(oi).forEach(function (e) {
        si.forEach(function (t) {
          ((t = t + e.charAt(0).toUpperCase() + e.substring(1)),
            (oi[t] = oi[e]));
        });
      }),
      (ci = /["'&<>]/),
      (li = /([A-Z])/g),
      (ui = /^ms-/),
      (di = Array.isArray),
      (fi = U(`<script>`)),
      (pi = U(`<\/script>`)),
      (mi = U(`<script src="`)),
      (hi = U(`<script type="module" src="`)),
      (gi = U(`" async=""><\/script>`)),
      (_i = /(<\/|<)(s)(cript)/gi),
      (vi = U(`<!-- -->`)),
      (yi = new Map()),
      (bi = U(` style="`)),
      (xi = U(`:`)),
      (Si = U(`;`)),
      (Ci = U(` `)),
      (wi = U(`="`)),
      (Ti = U(`"`)),
      (Ei = U(`=""`)),
      (Di = U(`>`)),
      (Oi = U(`/>`)),
      (ki = U(` selected=""`)),
      (Ai = U(`
`)),
      (ji = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/),
      (Mi = new Map()),
      (Ni = U(`<!DOCTYPE html>`)),
      (Pi = U(`</`)),
      (Fi = U(`>`)),
      (Ii = U(`<template id="`)),
      (Li = U(`"></template>`)),
      (Ri = U(`<!--$-->`)),
      (zi = U(`<!--$?--><template id="`)),
      (Bi = U(`"></template>`)),
      (Vi = U(`<!--$!-->`)),
      (Hi = U(`<!--/$-->`)),
      (Ui = U(`<template`)),
      (Wi = U(`"`)),
      (Gi = U(` data-dgst="`)),
      U(` data-msg="`),
      U(` data-stck="`),
      (Ki = U(`></template>`)),
      (qi = U(`<div hidden id="`)),
      (Ji = U(`">`)),
      (Yi = U(`</div>`)),
      (Xi = U(`<svg aria-hidden="true" style="display:none" id="`)),
      (Zi = U(`">`)),
      (Qi = U(`</svg>`)),
      ($i = U(`<math aria-hidden="true" style="display:none" id="`)),
      (ea = U(`">`)),
      (ta = U(`</math>`)),
      (na = U(`<table hidden id="`)),
      (ra = U(`">`)),
      (ia = U(`</table>`)),
      (aa = U(`<table hidden><tbody id="`)),
      (oa = U(`">`)),
      (sa = U(`</tbody></table>`)),
      (ca = U(`<table hidden><tr id="`)),
      (la = U(`">`)),
      (ua = U(`</tr></table>`)),
      (da = U(`<table hidden><colgroup id="`)),
      (fa = U(`">`)),
      (pa = U(`</colgroup></table>`)),
      (ma = U(
        `function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("`,
      )),
      (ha = U(`$RS("`)),
      (ga = U(`","`)),
      (_a = U(`")<\/script>`)),
      (va = U(
        `function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("`,
      )),
      (ya = U(`$RC("`)),
      (ba = U(`","`)),
      (xa = U(`")<\/script>`)),
      (Sa = U(
        `function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("`,
      )),
      (Ca = U(`$RX("`)),
      (wa = U(`"`)),
      (Ta = U(`)<\/script>`)),
      (Ea = U(`,`)),
      (Da = /[<\u2028\u2029]/g),
      (Oa = Object.assign),
      (ka = Symbol.for(`react.element`)),
      (Aa = Symbol.for(`react.portal`)),
      (ja = Symbol.for(`react.fragment`)),
      (Ma = Symbol.for(`react.strict_mode`)),
      (Na = Symbol.for(`react.profiler`)),
      (Pa = Symbol.for(`react.provider`)),
      (Fa = Symbol.for(`react.context`)),
      (Ia = Symbol.for(`react.forward_ref`)),
      (La = Symbol.for(`react.suspense`)),
      (Ra = Symbol.for(`react.suspense_list`)),
      (za = Symbol.for(`react.memo`)),
      (Ba = Symbol.for(`react.lazy`)),
      (Va = Symbol.for(`react.scope`)),
      (Ha = Symbol.for(`react.debug_trace_mode`)),
      (Ua = Symbol.for(`react.legacy_hidden`)),
      (Wa = Symbol.for(`react.default_value`)),
      (Ga = Symbol.iterator),
      (Ka = {}),
      (qa = null),
      (Ja = {
        isMounted: function () {
          return !1;
        },
        enqueueSetState: function (e, t) {
          ((e = e._reactInternals), e.queue !== null && e.queue.push(t));
        },
        enqueueReplaceState: function (e, t) {
          ((e = e._reactInternals), (e.replace = !0), (e.queue = [t]));
        },
        enqueueForceUpdate: function () {},
      }),
      (Ya = { id: 1, overflow: `` }),
      (Xa = Math.clz32 ? Math.clz32 : mn),
      (Za = Math.log),
      (Qa = Math.LN2),
      ($a = typeof Object.is == `function` ? Object.is : hn),
      (eo = null),
      (to = null),
      (no = null),
      ($ = null),
      (ro = !1),
      (io = !1),
      (ao = 0),
      (oo = null),
      (so = 0),
      (co = {
        readContext: function (e) {
          return e._currentValue;
        },
        useContext: function (e) {
          return (gn(), e._currentValue);
        },
        useMemo: Sn,
        useReducer: xn,
        useRef: function (e) {
          ((eo = gn()), ($ = vn()));
          var t = $.memoizedState;
          return t === null ? ((e = { current: e }), ($.memoizedState = e)) : t;
        },
        useState: function (e) {
          return xn(bn, e);
        },
        useInsertionEffect: Tn,
        useLayoutEffect: function () {},
        useCallback: function (e, t) {
          return Sn(function () {
            return e;
          }, t);
        },
        useImperativeHandle: Tn,
        useEffect: Tn,
        useDebugValue: Tn,
        useDeferredValue: function (e) {
          return (gn(), e);
        },
        useTransition: function () {
          return (gn(), [!1, wn]);
        },
        useId: function () {
          var e = to.treeContext,
            t = e.overflow;
          ((e = e.id), (e = (e & ~(1 << (32 - Xa(e) - 1))).toString(32) + t));
          var n = lo;
          if (n === null) throw Error(z(404));
          return (
            (t = ao++),
            (e = `:` + n.idPrefix + `R` + e),
            0 < t && (e += `H` + t.toString(32)),
            e + `:`
          );
        },
        useMutableSource: function (e, t) {
          return (gn(), t(e._source));
        },
        useSyncExternalStore: function (e, t, n) {
          if (n === void 0) throw Error(z(407));
          return n();
        },
      }),
      (lo = null),
      (uo =
        ei.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
          .ReactCurrentDispatcher),
      ($r.renderToReadableStream = function (e, t) {
        return new Promise(function (n, r) {
          var i,
            a,
            o = new Promise(function (e, t) {
              ((a = e), (i = t));
            }),
            s = On(
              e,
              Vt(
                t ? t.identifierPrefix : void 0,
                t ? t.nonce : void 0,
                t ? t.bootstrapScriptContent : void 0,
                t ? t.bootstrapScripts : void 0,
                t ? t.bootstrapModules : void 0,
              ),
              Ut(t ? t.namespaceURI : void 0),
              t ? t.progressiveChunkSize : void 0,
              t ? t.onError : void 0,
              a,
              function () {
                var e = new ReadableStream(
                  {
                    type: `bytes`,
                    pull: function (e) {
                      if (s.status === 1) ((s.status = 2), Lt(e, s.fatalError));
                      else if (s.status !== 2 && s.destination === null) {
                        s.destination = e;
                        try {
                          Xn(s, e);
                        } catch (e) {
                          (jn(s, e), Mn(s, e));
                        }
                      }
                    },
                    cancel: function () {
                      Zn(s);
                    },
                  },
                  { highWaterMark: 0 },
                );
                ((e.allReady = o), n(e));
              },
              function (e) {
                (o.catch(function () {}), r(e));
              },
              i,
            );
          if (t && t.signal) {
            var c = t.signal,
              l = function () {
                (Zn(s, c.reason), c.removeEventListener(`abort`, l));
              };
            c.addEventListener(`abort`, l);
          }
          Wn(s);
        });
      }),
      ($r.version = `18.2.0`),
      (fo = {}),
      (po = $n),
      (mo = $r),
      (fo.version = po.version),
      (fo.renderToString = po.renderToString),
      (fo.renderToStaticMarkup = po.renderToStaticMarkup),
      (fo.renderToNodeStream = po.renderToNodeStream),
      (fo.renderToStaticNodeStream = po.renderToStaticNodeStream),
      (fo.renderToReadableStream = mo.renderToReadableStream),
      fo.version,
      fo.renderToString,
      fo.renderToStaticMarkup,
      fo.renderToNodeStream,
      fo.renderToStaticNodeStream,
      (ho = fo.renderToReadableStream));
  });
function _o(e, t, n) {
  return Math.max(e, Math.min(t, n));
}
function vo(e, t, n) {
  return (1 - n) * e + n * t;
}
function yo(e, t, n, r) {
  return vo(e, t, 1 - Math.exp(-n * r));
}
function bo(e, t) {
  return ((e % t) + t) % t;
}
function xo(e, t) {
  let n;
  return function (...r) {
    (clearTimeout(n),
      (n = setTimeout(() => {
        ((n = void 0), e.apply(this, r));
      }, t)));
  };
}
function So(e, t) {
  return e === 1 ? Do : e === 2 ? t : 1;
}
var Co,
  wo,
  To,
  Eo,
  Do,
  Oo,
  ko,
  Ao,
  jo,
  Mo = e(() => {
    (i(),
      (Co = `1.3.23`),
      (wo = class {
        isRunning = !1;
        value = 0;
        from = 0;
        to = 0;
        currentTime = 0;
        lerp;
        duration;
        easing;
        onUpdate;
        advance(e) {
          if (!this.isRunning) return;
          let t = !1;
          if (this.duration && this.easing) {
            this.currentTime += e;
            let n = _o(0, this.currentTime / this.duration, 1);
            t = n >= 1;
            let r = t ? 1 : this.easing(n);
            this.value = this.from + (this.to - this.from) * r;
          } else
            this.lerp
              ? ((this.value = yo(this.value, this.to, this.lerp * 60, e)),
                Math.round(this.value) === Math.round(this.to) &&
                  ((this.value = this.to), (t = !0)))
              : ((this.value = this.to), (t = !0));
          (t && this.stop(), this.onUpdate?.(this.value, t));
        }
        stop() {
          this.isRunning = !1;
        }
        fromTo(
          e,
          t,
          { lerp: n, duration: r, easing: i, onStart: a, onUpdate: o },
        ) {
          ((this.from = this.value = e),
            (this.to = t),
            (this.lerp = n),
            (this.duration = r),
            (this.easing = i),
            (this.currentTime = 0),
            (this.isRunning = !0),
            a?.(),
            (this.onUpdate = o));
        }
      }),
      (To = class {
        width = 0;
        height = 0;
        scrollHeight = 0;
        scrollWidth = 0;
        debouncedResize;
        wrapperResizeObserver;
        contentResizeObserver;
        constructor(e, t, { autoResize: n = !0, debounce: r = 250 } = {}) {
          ((this.wrapper = e),
            (this.content = t),
            n &&
              ((this.debouncedResize = xo(this.resize, r)),
              this.wrapper instanceof Window
                ? l.addEventListener(`resize`, this.debouncedResize)
                : ((this.wrapperResizeObserver = new ResizeObserver(
                    this.debouncedResize,
                  )),
                  this.wrapperResizeObserver.observe(this.wrapper)),
              (this.contentResizeObserver = new ResizeObserver(
                this.debouncedResize,
              )),
              this.contentResizeObserver.observe(this.content)),
            this.resize());
        }
        destroy() {
          (this.wrapperResizeObserver?.disconnect(),
            this.contentResizeObserver?.disconnect(),
            this.wrapper === l &&
              this.debouncedResize &&
              l.removeEventListener(`resize`, this.debouncedResize));
        }
        resize = () => {
          (this.onWrapperResize(), this.onContentResize());
        };
        onWrapperResize = () => {
          this.wrapper instanceof Window
            ? ((this.width = l.innerWidth), (this.height = l.innerHeight))
            : ((this.width = this.wrapper.clientWidth),
              (this.height = this.wrapper.clientHeight));
        };
        onContentResize = () => {
          this.wrapper instanceof Window
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth));
        };
        get limit() {
          return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height,
          };
        }
      }),
      (Eo = class {
        events = {};
        emit(e, ...t) {
          let n = this.events[e] || [];
          for (let e = 0, r = n.length; e < r; e++) n[e]?.(...t);
        }
        on(e, t) {
          return (
            this.events[e] ? this.events[e].push(t) : (this.events[e] = [t]),
            () => {
              this.events[e] = this.events[e]?.filter((e) => t !== e);
            }
          );
        }
        off(e, t) {
          this.events[e] = this.events[e]?.filter((e) => t !== e);
        }
        destroy() {
          this.events = {};
        }
      }),
      (Do = 100 / 6),
      (Oo = { passive: !1 }),
      (ko = class {
        touchStart = { x: 0, y: 0 };
        lastDelta = { x: 0, y: 0 };
        window = { width: 0, height: 0 };
        emitter = new Eo();
        constructor(e, t = { wheelMultiplier: 1, touchMultiplier: 1 }) {
          ((this.element = e),
            (this.options = t),
            l.addEventListener(`resize`, this.onWindowResize),
            this.onWindowResize(),
            this.element.addEventListener(`wheel`, this.onWheel, Oo),
            this.element.addEventListener(`touchstart`, this.onTouchStart, Oo),
            this.element.addEventListener(`touchmove`, this.onTouchMove, Oo),
            this.element.addEventListener(`touchend`, this.onTouchEnd, Oo));
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        destroy() {
          (this.emitter.destroy(),
            l.removeEventListener(`resize`, this.onWindowResize),
            this.element.removeEventListener(`wheel`, this.onWheel, Oo),
            this.element.removeEventListener(
              `touchstart`,
              this.onTouchStart,
              Oo,
            ),
            this.element.removeEventListener(`touchmove`, this.onTouchMove, Oo),
            this.element.removeEventListener(`touchend`, this.onTouchEnd, Oo));
        }
        onTouchStart = (e) => {
          let { clientX: t, clientY: n } = e.targetTouches
            ? e.targetTouches[0]
            : e;
          ((this.touchStart.x = t),
            (this.touchStart.y = n),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit(`scroll`, { deltaX: 0, deltaY: 0, event: e }));
        };
        onTouchMove = (e) => {
          let { clientX: t, clientY: n } = e.targetTouches
              ? e.targetTouches[0]
              : e,
            r = -(t - this.touchStart.x) * this.options.touchMultiplier,
            i = -(n - this.touchStart.y) * this.options.touchMultiplier;
          ((this.touchStart.x = t),
            (this.touchStart.y = n),
            (this.lastDelta = { x: r, y: i }),
            this.emitter.emit(`scroll`, { deltaX: r, deltaY: i, event: e }));
        };
        onTouchEnd = (e) => {
          this.emitter.emit(`scroll`, {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: e,
          });
        };
        onWheel = (e) => {
          let { deltaX: t, deltaY: n, deltaMode: r } = e,
            i = So(r, this.window.width),
            a = So(r, this.window.height);
          ((t *= i),
            (n *= a),
            (t *= this.options.wheelMultiplier),
            (n *= this.options.wheelMultiplier),
            this.emitter.emit(`scroll`, { deltaX: t, deltaY: n, event: e }));
        };
        onWindowResize = () => {
          this.window = { width: l.innerWidth, height: l.innerHeight };
        };
      }),
      (Ao = (e) => Math.min(1, 1.001 - 2 ** (-10 * e))),
      (jo = class {
        _isScrolling = !1;
        _isStopped = !1;
        _isLocked = !1;
        _preventNextNativeScrollEvent = !1;
        _resetVelocityTimeout = null;
        _rafId = null;
        isTouching;
        time = 0;
        userData = {};
        lastVelocity = 0;
        velocity = 0;
        direction = 0;
        options;
        targetScroll;
        animatedScroll;
        animate = new wo();
        emitter = new Eo();
        dimensions;
        virtualScroll;
        constructor({
          wrapper: e = l,
          content: t = document.documentElement,
          eventsTarget: n = e,
          smoothWheel: r = !0,
          syncTouch: i = !1,
          syncTouchLerp: a = 0.075,
          touchInertiaExponent: o = 1.7,
          duration: s,
          easing: c,
          lerp: u = 0.1,
          infinite: d = !1,
          orientation: f = `vertical`,
          gestureOrientation: p = f === `horizontal` ? `both` : `vertical`,
          touchMultiplier: m = 1,
          wheelMultiplier: h = 1,
          autoResize: g = !0,
          prevent: _,
          virtualScroll: v,
          overscroll: ee = !0,
          autoRaf: y = !1,
          anchors: te = !1,
          autoToggle: b = !1,
          allowNestedScroll: x = !1,
          __experimental__naiveDimensions: ne = !1,
          naiveDimensions: S = ne,
          stopInertiaOnNavigate: re = !1,
        } = {}) {
          ((l.lenisVersion = Co),
            (l.lenis ||= {}),
            (l.lenis.version = Co),
            f === `horizontal` && (l.lenis.horizontal = !0),
            i === !0 && (l.lenis.touch = !0),
            (!e || e === document.documentElement) && (e = l),
            typeof s == `number` && typeof c != `function`
              ? (c = Ao)
              : typeof c == `function` && typeof s != `number` && (s = 1),
            (this.options = {
              wrapper: e,
              content: t,
              eventsTarget: n,
              smoothWheel: r,
              syncTouch: i,
              syncTouchLerp: a,
              touchInertiaExponent: o,
              duration: s,
              easing: c,
              lerp: u,
              infinite: d,
              gestureOrientation: p,
              orientation: f,
              touchMultiplier: m,
              wheelMultiplier: h,
              autoResize: g,
              prevent: _,
              virtualScroll: v,
              overscroll: ee,
              autoRaf: y,
              anchors: te,
              autoToggle: b,
              allowNestedScroll: x,
              naiveDimensions: S,
              stopInertiaOnNavigate: re,
            }),
            (this.dimensions = new To(e, t, { autoResize: g })),
            this.updateClassName(),
            (this.targetScroll = this.animatedScroll = this.actualScroll),
            this.options.wrapper.addEventListener(
              `scroll`,
              this.onNativeScroll,
            ),
            this.options.wrapper.addEventListener(
              `scrollend`,
              this.onScrollEnd,
              { capture: !0 },
            ),
            (this.options.anchors || this.options.stopInertiaOnNavigate) &&
              this.options.wrapper.addEventListener(`click`, this.onClick),
            this.options.wrapper.addEventListener(
              `pointerdown`,
              this.onPointerDown,
            ),
            (this.virtualScroll = new ko(n, {
              touchMultiplier: m,
              wheelMultiplier: h,
            })),
            this.virtualScroll.on(`scroll`, this.onVirtualScroll),
            this.options.autoToggle &&
              (this.checkOverflow(),
              this.rootElement.addEventListener(
                `transitionend`,
                this.onTransitionEnd,
              )),
            this.options.autoRaf &&
              (this._rafId = requestAnimationFrame(this.raf)));
        }
        destroy() {
          (this.emitter.destroy(),
            this.options.wrapper.removeEventListener(
              `scroll`,
              this.onNativeScroll,
            ),
            this.options.wrapper.removeEventListener(
              `scrollend`,
              this.onScrollEnd,
              { capture: !0 },
            ),
            this.options.wrapper.removeEventListener(
              `pointerdown`,
              this.onPointerDown,
            ),
            (this.options.anchors || this.options.stopInertiaOnNavigate) &&
              this.options.wrapper.removeEventListener(`click`, this.onClick),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.cleanUpClassName(),
            this._rafId && cancelAnimationFrame(this._rafId));
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        off(e, t) {
          return this.emitter.off(e, t);
        }
        onScrollEnd = (e) => {
          e instanceof CustomEvent ||
            ((this.isScrolling === `smooth` || this.isScrolling === !1) &&
              e.stopPropagation());
        };
        dispatchScrollendEvent = () => {
          this.options.wrapper.dispatchEvent(
            new CustomEvent(`scrollend`, {
              bubbles: this.options.wrapper === l,
              detail: { lenisScrollEnd: !0 },
            }),
          );
        };
        get overflow() {
          let e = this.isHorizontal ? `overflow-x` : `overflow-y`;
          return getComputedStyle(this.rootElement)[e];
        }
        checkOverflow() {
          [`hidden`, `clip`].includes(this.overflow)
            ? this.internalStop()
            : this.internalStart();
        }
        onTransitionEnd = (e) => {
          e.propertyName?.includes(`overflow`) &&
            e.target === this.rootElement &&
            this.checkOverflow();
        };
        setScroll(e) {
          this.isHorizontal
            ? this.options.wrapper.scrollTo({ left: e, behavior: `instant` })
            : this.options.wrapper.scrollTo({ top: e, behavior: `instant` });
        }
        onClick = (e) => {
          let t = e
              .composedPath()
              .filter((e) => e instanceof HTMLAnchorElement && e.href)
              .map((e) => new URL(e.href)),
            n = new URL(l.location.href);
          if (this.options.anchors) {
            let e = t.find(
              (e) => n.host === e.host && n.pathname === e.pathname && e.hash,
            );
            if (e) {
              let t =
                  typeof this.options.anchors == `object` &&
                  this.options.anchors
                    ? this.options.anchors
                    : void 0,
                n = `#${e.hash.split(`#`)[1]}`;
              this.scrollTo(n, t);
              return;
            }
          }
          if (
            this.options.stopInertiaOnNavigate &&
            t.some((e) => n.host === e.host && n.pathname !== e.pathname)
          ) {
            this.reset();
            return;
          }
        };
        onPointerDown = (e) => {
          e.button === 1 && this.reset();
        };
        onVirtualScroll = (e) => {
          if (
            typeof this.options.virtualScroll == `function` &&
            this.options.virtualScroll(e) === !1
          )
            return;
          let { deltaX: t, deltaY: n, event: r } = e;
          if (
            (this.emitter.emit(`virtual-scroll`, {
              deltaX: t,
              deltaY: n,
              event: r,
            }),
            r.ctrlKey || r.lenisStopPropagation)
          )
            return;
          let i = r.type.includes(`touch`),
            a = r.type.includes(`wheel`);
          this.isTouching = r.type === `touchstart` || r.type === `touchmove`;
          let o = t === 0 && n === 0;
          if (
            this.options.syncTouch &&
            i &&
            r.type === `touchstart` &&
            o &&
            !this.isStopped &&
            !this.isLocked
          ) {
            this.reset();
            return;
          }
          let s =
            (this.options.gestureOrientation === `vertical` && n === 0) ||
            (this.options.gestureOrientation === `horizontal` && t === 0);
          if (o || s) return;
          let c = r.composedPath();
          c = c.slice(0, c.indexOf(this.rootElement));
          let u = this.options.prevent,
            d = Math.abs(t) >= Math.abs(n) ? `horizontal` : `vertical`;
          if (
            c.find(
              (e) =>
                e instanceof HTMLElement &&
                ((typeof u == `function` && u?.(e)) ||
                  e.hasAttribute?.(`data-lenis-prevent`) ||
                  (d === `vertical` &&
                    e.hasAttribute?.(`data-lenis-prevent-vertical`)) ||
                  (d === `horizontal` &&
                    e.hasAttribute?.(`data-lenis-prevent-horizontal`)) ||
                  (i && e.hasAttribute?.(`data-lenis-prevent-touch`)) ||
                  (a && e.hasAttribute?.(`data-lenis-prevent-wheel`)) ||
                  (this.options.allowNestedScroll &&
                    this.hasNestedScroll(e, { deltaX: t, deltaY: n }))),
            )
          )
            return;
          if (this.isStopped || this.isLocked) {
            r.cancelable && r.preventDefault();
            return;
          }
          if (!(
            (this.options.syncTouch && i) ||
            (this.options.smoothWheel && a)
          )) {
            ((this.isScrolling = `native`),
              this.animate.stop(),
              (r.lenisStopPropagation = !0));
            return;
          }
          let f = n;
          (this.options.gestureOrientation === `both`
            ? (f = Math.abs(n) > Math.abs(t) ? n : t)
            : this.options.gestureOrientation === `horizontal` && (f = t),
            (!this.options.overscroll ||
              this.options.infinite ||
              (this.options.wrapper !== l &&
                this.limit > 0 &&
                ((this.animatedScroll > 0 &&
                  this.animatedScroll < this.limit) ||
                  (this.animatedScroll === 0 && n > 0) ||
                  (this.animatedScroll === this.limit && n < 0)))) &&
              (r.lenisStopPropagation = !0),
            r.cancelable && r.preventDefault());
          let p = i && this.options.syncTouch,
            m = i && r.type === `touchend`;
          (m &&
            (f =
              Math.sign(f) *
              Math.abs(this.velocity) ** this.options.touchInertiaExponent),
            this.scrollTo(this.targetScroll + f, {
              programmatic: !1,
              ...(p
                ? { lerp: m ? this.options.syncTouchLerp : 1 }
                : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing,
                  }),
            }));
        };
        resize() {
          (this.dimensions.resize(),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            this.emit());
        }
        emit() {
          this.emitter.emit(`scroll`, this);
        }
        onNativeScroll = () => {
          if (
            (this._resetVelocityTimeout !== null &&
              (clearTimeout(this._resetVelocityTimeout),
              (this._resetVelocityTimeout = null)),
            this._preventNextNativeScrollEvent)
          ) {
            this._preventNextNativeScrollEvent = !1;
            return;
          }
          if (this.isScrolling === !1 || this.isScrolling === `native`) {
            let e = this.animatedScroll;
            ((this.animatedScroll = this.targetScroll = this.actualScroll),
              (this.lastVelocity = this.velocity),
              (this.velocity = this.animatedScroll - e),
              (this.direction = Math.sign(this.animatedScroll - e)),
              this.isStopped || (this.isScrolling = `native`),
              this.emit(),
              this.velocity !== 0 &&
                (this._resetVelocityTimeout = setTimeout(() => {
                  ((this.lastVelocity = this.velocity),
                    (this.velocity = 0),
                    (this.isScrolling = !1),
                    this.emit());
                }, 400)));
          }
        };
        reset() {
          ((this.isLocked = !1),
            (this.isScrolling = !1),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.lastVelocity = this.velocity = 0),
            this.animate.stop());
        }
        start() {
          if (this.isStopped) {
            if (this.options.autoToggle) {
              this.rootElement.style.removeProperty(`overflow`);
              return;
            }
            this.internalStart();
          }
        }
        internalStart() {
          this.isStopped && (this.reset(), (this.isStopped = !1), this.emit());
        }
        stop() {
          if (!this.isStopped) {
            if (this.options.autoToggle) {
              this.rootElement.style.setProperty(`overflow`, `clip`);
              return;
            }
            this.internalStop();
          }
        }
        internalStop() {
          this.isStopped || (this.reset(), (this.isStopped = !0), this.emit());
        }
        raf = (e) => {
          let t = e - (this.time || e);
          ((this.time = e),
            this.animate.advance(t * 0.001),
            this.options.autoRaf &&
              (this._rafId = requestAnimationFrame(this.raf)));
        };
        scrollTo(
          e,
          {
            offset: t = 0,
            immediate: n = !1,
            lock: r = !1,
            programmatic: i = !0,
            lerp: a = i ? this.options.lerp : void 0,
            duration: o = i ? this.options.duration : void 0,
            easing: s = i ? this.options.easing : void 0,
            onStart: c,
            onComplete: u,
            force: d = !1,
            userData: f,
          } = {},
        ) {
          if ((this.isStopped || this.isLocked) && !d) return;
          let p = e,
            m = t;
          if (typeof p == `string` && [`top`, `left`, `start`, `#`].includes(p))
            p = 0;
          else if (
            typeof p == `string` &&
            [`bottom`, `right`, `end`].includes(p)
          )
            p = this.limit;
          else {
            let e = null;
            if (
              (typeof p == `string`
                ? ((e = document.querySelector(p)),
                  e ||
                    (p === `#top`
                      ? (p = 0)
                      : console.warn(`Lenis: Target not found`, p)))
                : p instanceof HTMLElement && p?.nodeType && (e = p),
              e)
            ) {
              if (this.options.wrapper !== l) {
                let e = this.rootElement.getBoundingClientRect();
                m -= this.isHorizontal ? e.left : e.top;
              }
              let t = e.getBoundingClientRect(),
                n = getComputedStyle(e),
                r = this.isHorizontal
                  ? Number.parseFloat(n.scrollMarginLeft)
                  : Number.parseFloat(n.scrollMarginTop),
                i = getComputedStyle(this.rootElement),
                a = this.isHorizontal
                  ? Number.parseFloat(i.scrollPaddingLeft)
                  : Number.parseFloat(i.scrollPaddingTop);
              p =
                (this.isHorizontal ? t.left : t.top) +
                this.animatedScroll -
                (Number.isNaN(r) ? 0 : r) -
                (Number.isNaN(a) ? 0 : a);
            }
          }
          if (typeof p == `number`) {
            if (((p += m), this.options.infinite)) {
              if (i) {
                this.targetScroll = this.animatedScroll = this.scroll;
                let e = p - this.animatedScroll;
                e > this.limit / 2
                  ? (p -= this.limit)
                  : e < -this.limit / 2 && (p += this.limit);
              }
            } else p = _o(0, p, this.limit);
            if (p === this.targetScroll) {
              (c?.(this), u?.(this));
              return;
            }
            if (((this.userData = f ?? {}), n)) {
              ((this.animatedScroll = this.targetScroll = p),
                this.setScroll(this.scroll),
                this.reset(),
                this.preventNextNativeScrollEvent(),
                this.emit(),
                u?.(this),
                (this.userData = {}),
                requestAnimationFrame(() => {
                  this.dispatchScrollendEvent();
                }));
              return;
            }
            (i || (this.targetScroll = p),
              typeof o == `number` && typeof s != `function`
                ? (s = Ao)
                : typeof s == `function` && typeof o != `number` && (o = 1),
              this.animate.fromTo(this.animatedScroll, p, {
                duration: o,
                easing: s,
                lerp: a,
                onStart: () => {
                  (r && (this.isLocked = !0),
                    (this.isScrolling = `smooth`),
                    c?.(this));
                },
                onUpdate: (e, t) => {
                  ((this.isScrolling = `smooth`),
                    (this.lastVelocity = this.velocity),
                    (this.velocity = e - this.animatedScroll),
                    (this.direction = Math.sign(this.velocity)),
                    (this.animatedScroll = e),
                    this.setScroll(this.scroll),
                    i && (this.targetScroll = e),
                    t || this.emit(),
                    t &&
                      (this.reset(),
                      this.emit(),
                      u?.(this),
                      (this.userData = {}),
                      requestAnimationFrame(() => {
                        this.dispatchScrollendEvent();
                      }),
                      this.preventNextNativeScrollEvent()));
                },
              }));
          }
        }
        preventNextNativeScrollEvent() {
          ((this._preventNextNativeScrollEvent = !0),
            requestAnimationFrame(() => {
              this._preventNextNativeScrollEvent = !1;
            }));
        }
        hasNestedScroll(e, { deltaX: t, deltaY: n }) {
          let r = Date.now();
          e._lenis ||= {};
          let i = e._lenis,
            a,
            o,
            s,
            c,
            u,
            d,
            f,
            p,
            m,
            h;
          if (r - (i.time ?? 0) > 2e3) {
            i.time = Date.now();
            let t = l.getComputedStyle(e);
            if (
              ((i.computedStyle = t),
              (a = [`auto`, `overlay`, `scroll`].includes(t.overflowX)),
              (o = [`auto`, `overlay`, `scroll`].includes(t.overflowY)),
              (u = [`auto`].includes(t.overscrollBehaviorX)),
              (d = [`auto`].includes(t.overscrollBehaviorY)),
              (i.hasOverflowX = a),
              (i.hasOverflowY = o),
              !(a || o))
            )
              return !1;
            ((f = e.scrollWidth),
              (p = e.scrollHeight),
              (m = e.clientWidth),
              (h = e.clientHeight),
              (s = f > m),
              (c = p > h),
              (i.isScrollableX = s),
              (i.isScrollableY = c),
              (i.scrollWidth = f),
              (i.scrollHeight = p),
              (i.clientWidth = m),
              (i.clientHeight = h),
              (i.hasOverscrollBehaviorX = u),
              (i.hasOverscrollBehaviorY = d));
          } else
            ((s = i.isScrollableX),
              (c = i.isScrollableY),
              (a = i.hasOverflowX),
              (o = i.hasOverflowY),
              (f = i.scrollWidth),
              (p = i.scrollHeight),
              (m = i.clientWidth),
              (h = i.clientHeight),
              (u = i.hasOverscrollBehaviorX),
              (d = i.hasOverscrollBehaviorY));
          if (!((a && s) || (o && c))) return !1;
          let g = Math.abs(t) >= Math.abs(n) ? `horizontal` : `vertical`,
            _,
            v,
            ee,
            y,
            te,
            b;
          if (g === `horizontal`)
            ((_ = Math.round(e.scrollLeft)),
              (v = f - m),
              (ee = t),
              (y = a),
              (te = s),
              (b = u));
          else if (g === `vertical`)
            ((_ = Math.round(e.scrollTop)),
              (v = p - h),
              (ee = n),
              (y = o),
              (te = c),
              (b = d));
          else return !1;
          return !b && (_ >= v || _ <= 0)
            ? !0
            : (ee > 0 ? _ < v : _ > 0) && y && te;
        }
        get rootElement() {
          return this.options.wrapper === l
            ? document.documentElement
            : this.options.wrapper;
        }
        get limit() {
          return this.options.naiveDimensions
            ? this.isHorizontal
              ? this.rootElement.scrollWidth - this.rootElement.clientWidth
              : this.rootElement.scrollHeight - this.rootElement.clientHeight
            : this.dimensions.limit[this.isHorizontal ? `x` : `y`];
        }
        get isHorizontal() {
          return this.options.orientation === `horizontal`;
        }
        get actualScroll() {
          let e = this.options.wrapper;
          return this.isHorizontal
            ? (e.scrollX ?? e.scrollLeft)
            : (e.scrollY ?? e.scrollTop);
        }
        get scroll() {
          return this.options.infinite
            ? bo(this.animatedScroll, this.limit)
            : this.animatedScroll;
        }
        get progress() {
          return this.limit === 0 ? 1 : this.scroll / this.limit;
        }
        get isScrolling() {
          return this._isScrolling;
        }
        set isScrolling(e) {
          this._isScrolling !== e &&
            ((this._isScrolling = e), this.updateClassName());
        }
        get isStopped() {
          return this._isStopped;
        }
        set isStopped(e) {
          this._isStopped !== e &&
            ((this._isStopped = e), this.updateClassName());
        }
        get isLocked() {
          return this._isLocked;
        }
        set isLocked(e) {
          this._isLocked !== e &&
            ((this._isLocked = e), this.updateClassName());
        }
        get isSmooth() {
          return this.isScrolling === `smooth`;
        }
        get className() {
          let e = `lenis`;
          return (
            this.options.autoToggle && (e += ` lenis-autoToggle`),
            this.isStopped && (e += ` lenis-stopped`),
            this.isLocked && (e += ` lenis-locked`),
            this.isScrolling && (e += ` lenis-scrolling`),
            this.isScrolling === `smooth` && (e += ` lenis-smooth`),
            e
          );
        }
        updateClassName() {
          (this.cleanUpClassName(),
            this.className.split(` `).forEach((e) => {
              this.rootElement.classList.add(e);
            }));
        }
        cleanUpClassName() {
          for (let e of Array.from(this.rootElement.classList))
            (e === `lenis` || e.startsWith(`lenis-`)) &&
              this.rootElement.classList.remove(e);
        }
      }));
  });
function No(e, t) {
  let n;
  return function (...r) {
    (clearTimeout(n),
      (n = setTimeout(() => {
        ((n = void 0), e.apply(this, r));
      }, t)));
  };
}
function Po(e) {
  (getComputedStyle(e).position === `sticky` &&
    (e.style.setProperty(`position`, `static`), (e.dataset.sticky = `true`)),
    e.offsetParent && Po(e.offsetParent));
}
function Fo(e) {
  (e?.dataset?.sticky === `true` &&
    (e.style.removeProperty(`position`), delete e.dataset.sticky),
    e.offsetParent && Fo(e.offsetParent));
}
function Io(e, t = 0) {
  let n = t + e.offsetTop;
  return e.offsetParent ? Io(e.offsetParent, n) : n;
}
function Lo(e, t = 0) {
  let n = t + e.offsetLeft;
  return e.offsetParent ? Lo(e.offsetParent, n) : n;
}
function Ro(e, t = 0) {
  let n = t + e.scrollTop;
  return e.offsetParent ? Ro(e.offsetParent, n) : n + l.scrollY;
}
function zo(e, t = 0) {
  let n = t + e.scrollLeft;
  return e.offsetParent ? zo(e.offsetParent, n) : n + l.scrollX;
}
function Bo() {
  return Ho++;
}
var Vo,
  Ho,
  Uo,
  Wo = e(() => {
    (i(),
      (Vo = class {
        element;
        options;
        align;
        rect = {};
        wrapperResizeObserver;
        resizeObserver;
        debouncedWrapperResize;
        constructor(
          e,
          {
            align: t = [`start`],
            ignoreSticky: n = !0,
            ignoreTransform: r = !1,
          } = {},
        ) {
          ((this.element = e),
            (this.options = { align: t, ignoreSticky: n, ignoreTransform: r }),
            (this.align = [t].flat()),
            (this.debouncedWrapperResize = No(this.onWrapperResize, 500)),
            (this.wrapperResizeObserver = new ResizeObserver(
              this.debouncedWrapperResize,
            )),
            this.wrapperResizeObserver.observe(document.body),
            this.onWrapperResize(),
            (this.resizeObserver = new ResizeObserver(this.onResize)),
            this.resizeObserver.observe(this.element),
            this.setRect({
              width: this.element.offsetWidth,
              height: this.element.offsetHeight,
            }));
        }
        destroy() {
          (this.wrapperResizeObserver.disconnect(),
            this.resizeObserver.disconnect());
        }
        setRect({ top: e, left: t, width: n, height: r, element: i } = {}) {
          ((e ??= this.rect.top),
            (t ??= this.rect.left),
            (n ??= this.rect.width),
            (r ??= this.rect.height),
            (i ??= this.rect.element),
            !(
              e === this.rect.top &&
              t === this.rect.left &&
              n === this.rect.width &&
              r === this.rect.height &&
              i === this.rect.element
            ) &&
              ((this.rect.top = e),
              (this.rect.y = e),
              (this.rect.width = n),
              (this.rect.height = r),
              (this.rect.left = t),
              (this.rect.x = t),
              (this.rect.bottom = e + r),
              (this.rect.right = t + n)));
        }
        onWrapperResize = () => {
          let e, t;
          if (
            (this.options.ignoreSticky && Po(this.element),
            this.options.ignoreTransform)
          )
            ((e = Io(this.element)), (t = Lo(this.element)));
          else {
            let n = this.element.getBoundingClientRect();
            ((e = n.top + Ro(this.element)), (t = n.left + zo(this.element)));
          }
          (this.options.ignoreSticky && Fo(this.element),
            this.setRect({ top: e, left: t }));
        };
        onResize = ([e]) => {
          if (!e?.borderBoxSize[0]) return;
          let t = e.borderBoxSize[0].inlineSize,
            n = e.borderBoxSize[0].blockSize;
          this.setRect({ width: t, height: n });
        };
      }),
      (Ho = 0),
      (Uo = class {
        options;
        elements = new Map();
        snaps = new Map();
        viewport = { width: l.innerWidth, height: l.innerHeight };
        isStopped = !1;
        onSnapDebounced;
        currentSnapIndex;
        constructor(
          e,
          {
            type: t = `proximity`,
            lerp: n,
            easing: r,
            duration: i,
            distanceThreshold: a = `50%`,
            debounce: o = 500,
            onSnapStart: s,
            onSnapComplete: c,
          } = {},
        ) {
          ((this.lenis = e),
            (l.lenis ||= {}),
            (l.lenis.snap = !0),
            (this.options = {
              type: t,
              lerp: n,
              easing: r,
              duration: i,
              distanceThreshold: a,
              debounce: o,
              onSnapStart: s,
              onSnapComplete: c,
            }),
            this.onWindowResize(),
            l.addEventListener(`resize`, this.onWindowResize),
            (this.onSnapDebounced = No(this.onSnap, this.options.debounce)),
            this.lenis.on(`virtual-scroll`, this.onSnapDebounced));
        }
        destroy() {
          (this.lenis.off(`virtual-scroll`, this.onSnapDebounced),
            l.removeEventListener(`resize`, this.onWindowResize),
            this.elements.forEach((e) => {
              e.destroy();
            }));
        }
        start() {
          this.isStopped = !1;
        }
        stop() {
          this.isStopped = !0;
        }
        add(e) {
          let t = Bo();
          return (this.snaps.set(t, { value: e }), () => this.snaps.delete(t));
        }
        addElement(e, t = {}) {
          let n = Bo();
          return (
            this.elements.set(n, new Vo(e, t)),
            () => this.elements.delete(n)
          );
        }
        addElements(e, t = {}) {
          let n = [...e].map((e) => this.addElement(e, t));
          return () => {
            n.forEach((e) => {
              e();
            });
          };
        }
        onWindowResize = () => {
          ((this.viewport.width = l.innerWidth),
            (this.viewport.height = l.innerHeight));
        };
        computeSnaps = () => {
          let { isHorizontal: e } = this.lenis,
            t = [...this.snaps.values()];
          return (
            this.elements.forEach(({ rect: n, align: r }) => {
              let i;
              r.forEach((r) => {
                (r === `start`
                  ? (i = n.top)
                  : r === `center`
                    ? (i = e
                        ? n.left + n.width / 2 - this.viewport.width / 2
                        : n.top + n.height / 2 - this.viewport.height / 2)
                    : r === `end` &&
                      (i = e
                        ? n.left + n.width - this.viewport.width
                        : n.top + n.height - this.viewport.height),
                  typeof i == `number` && t.push({ value: Math.ceil(i) }));
              });
            }),
            (t = t.sort((e, t) => Math.abs(e.value) - Math.abs(t.value))),
            t
          );
        };
        previous() {
          this.goTo((this.currentSnapIndex ?? 0) - 1);
        }
        next() {
          this.goTo((this.currentSnapIndex ?? 0) + 1);
        }
        goTo(e) {
          let t = this.computeSnaps();
          if (t.length === 0) return;
          this.currentSnapIndex = Math.max(0, Math.min(e, t.length - 1));
          let n = t[this.currentSnapIndex];
          n !== void 0 &&
            this.lenis.scrollTo(n.value, {
              duration: this.options.duration,
              easing: this.options.easing,
              lerp: this.options.lerp,
              lock: this.options.type === `lock`,
              userData: { initiator: `snap` },
              onStart: () => {
                this.options.onSnapStart?.({
                  index: this.currentSnapIndex,
                  ...n,
                });
              },
              onComplete: () => {
                this.options.onSnapComplete?.({
                  index: this.currentSnapIndex,
                  ...n,
                });
              },
            });
        }
        get distanceThreshold() {
          let e = 1 / 0;
          if (this.options.type === `mandatory`) return 1 / 0;
          let { isHorizontal: t } = this.lenis,
            n = t ? `width` : `height`;
          return (
            (e =
              typeof this.options.distanceThreshold == `string` &&
              this.options.distanceThreshold.endsWith(`%`)
                ? (Number(this.options.distanceThreshold.replace(`%`, ``)) /
                    100) *
                  this.viewport[n]
                : typeof this.options.distanceThreshold == `number`
                  ? this.options.distanceThreshold
                  : this.viewport[n]),
            e
          );
        }
        onSnap = (e) => {
          if (
            this.isStopped ||
            e.event.type === `touchmove` ||
            (this.options.type === `lock` &&
              this.lenis.userData?.initiator === `snap`)
          )
            return;
          let { scroll: t, isHorizontal: n } = this.lenis,
            r = n ? e.deltaX : e.deltaY;
          t = Math.ceil(this.lenis.scroll + r);
          let i = this.computeSnaps();
          if (i.length === 0) return;
          let a,
            o = i.findLastIndex(({ value: e }) => e < t),
            s = i.findIndex(({ value: e }) => e > t);
          if (this.options.type === `lock`) r > 0 ? (a = s) : r < 0 && (a = o);
          else {
            let e = i[o],
              n = e ? Math.abs(t - e.value) : 1 / 0,
              r = i[s];
            a = n < (r ? Math.abs(t - r.value) : 1 / 0) ? o : s;
          }
          if (a === void 0 || a === -1) return;
          a = Math.max(0, Math.min(a, i.length - 1));
          let c = i[a];
          Math.abs(t - c.value) <= this.distanceThreshold && this.goTo(a);
        };
        resize() {
          this.elements.forEach((e) => {
            e.onWrapperResize();
          });
        }
      }));
  });
function Go({
  smooth: e,
  infinite: t,
  orientation: n,
  intensity: i,
  children: o,
  snap: c,
}) {
  let u = r(),
    d = r(),
    m = r();
  return (
    a(() => {
      if (o && (!u.current || !d.current)) return;
      u.current &&
        d.current &&
        (n === `horizontal`
          ? u.current.style.setProperty(`overflowX`, `auto`)
          : u.current.style.setProperty(`overflowY`, `auto`));
      let r = new jo({
        smoothWheel: e,
        infinite: t,
        orientation: n,
        gestureOrientation: n === `horizontal` ? `both` : `vertical`,
        autoRaf: !0,
        autoToggle: !0,
        anchors: !0,
        allowNestedScroll: !0,
        wrapper: u.current,
        content: d.current,
        syncTouch: !!t || n === `horizontal`,
        stopInertiaOnNavigate: !0,
      });
      m.current = r;
      let i;
      return (
        c &&
          c.snaps.length > 0 &&
          ((i = new Uo(r, {
            type: c.type,
            distanceThreshold: c.threshold + `%`,
          })),
          c.snaps.forEach((e) => {
            if (!e.target?.current) return;
            let t = e.target.current.id;
            document.querySelectorAll(`#${t}`).forEach((t) => {
              i.addElement(t, { align: e.align });
            });
          })),
        (l.lenis = r),
        (l.lenisSnap = c),
        () => {
          (r && r.destroy(), i && i.destroy());
        }
      );
    }, [e, t, n, i, o, c]),
    g(v, {
      children: [
        f(`link`, {
          href: `https://unpkg.com/lenis@1.3.23/dist/lenis.css`,
          rel: `stylesheet`,
        }),
        o &&
          f(v, {
            children: f(`div`, {
              ref: u,
              style:
                n === `horizontal`
                  ? { overflowX: `auto`, width: `100%` }
                  : { overflowY: `auto`, height: `100%` },
              children: f(`div`, {
                ref: d,
                style: { width: `100%` },
                children: y.map(o, (e) =>
                  p(e)
                    ? s(e, { style: { ...e.props.style, width: `100%` } })
                    : e,
                ),
              }),
            }),
          }),
      ],
    })
  );
}
var Ko = e(() => {
    (i(),
      _(),
      C(),
      Mo(),
      Wo(),
      n(),
      (Go.displayName = `Lenis`),
      N(Go, {
        smooth: { type: k.Boolean, title: `Smooth`, defaultValue: !0 },
        intensity: {
          type: k.Number,
          title: `Intensity`,
          defaultValue: 12,
          step: 1,
          min: 1,
          max: 100,
          hidden(e) {
            return e.smooth === !1;
          },
          description: `This will be ignored on mobile.`,
        },
        infinite: {
          type: k.Boolean,
          title: `Infinite`,
          defaultValue: !1,
          hidden(e) {
            return e.smooth === !1;
          },
        },
        orientation: {
          type: k.Enum,
          defaultValue: `Vertical`,
          displaySegmentedControl: !0,
          options: [`vertical`, `horizontal`],
          optionTitles: [`Vertical`, `Horizontal`],
          hidden(e) {
            return e.smooth === !1;
          },
        },
        children: { type: k.ComponentInstance, title: `Content` },
        snap: {
          type: k.Object,
          optional: !0,
          description: `Cooked and served by [darkroom.engineering](https://darkroom.engineering).`,
          controls: {
            type: {
              type: k.Enum,
              defaultValue: `proximity`,
              displaySegmentedControl: !0,
              segmentedControlDirection: `vertical`,
              options: [`proximity`, `mandatory`, `lock`],
              optionTitles: [`Proximity`, `Mandatory`, `Lock`],
            },
            threshold: {
              type: k.Number,
              defaultValue: 50,
              min: 0,
              max: 100,
              unit: `%`,
              hidden: (e) => e.snap.type === `mandatory`,
            },
            snaps: {
              type: k.Array,
              control: {
                type: k.Object,
                controls: {
                  target: { title: `Target`, type: k.ScrollSectionRef },
                  align: {
                    type: k.Enum,
                    defaultValue: `center`,
                    displaySegmentedControl: !0,
                    segmentedControlDirection: `horizontal`,
                    options: [`start`, `center`, `end`],
                    optionIcons: [`align-top`, `align-middle`, `align-bottom`],
                  },
                },
              },
            },
          },
        },
      }));
  }),
  qo,
  Jo,
  Yo,
  Xo,
  Zo,
  Qo,
  $o,
  es,
  ts = e(() => {
    (_(),
      C(),
      n(),
      (qo = `var(--framer-icon-mask)`),
      (Jo = m(function (e, t) {
        return f(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Yo = b.create(Jo)),
      (Xo = m((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? f(Yo, { ...a, layoutId: r, ref: t, children: i })
          : f(`svg`, { ...a, ref: t, children: i });
      })),
      (Zo = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 1.861 6.615 C 1.564 5.279 1.972 3.884 2.94 2.917 C 3.909 1.95 5.305 1.546 6.641 1.845 C 7.376 0.696 8.646 0 10.011 0 C 11.375 0 12.646 0.696 13.381 1.845 C 14.719 1.544 16.117 1.95 17.087 2.919 C 18.056 3.889 18.462 5.287 18.161 6.625 C 19.311 7.36 20.006 8.631 20.006 9.995 C 20.006 11.36 19.311 12.63 18.161 13.365 C 18.46 14.701 18.056 16.097 17.089 17.066 C 16.122 18.035 14.727 18.442 13.391 18.145 C 12.657 19.299 11.384 19.998 10.016 19.998 C 8.648 19.998 7.375 19.299 6.641 18.145 C 5.305 18.445 3.909 18.04 2.94 17.073 C 1.972 16.107 1.564 14.711 1.861 13.375 C 0.702 12.642 0 11.366 0 9.995 C 0 8.624 0.702 7.348 1.861 6.615 Z" fill="transparent" height="19.998269123192628px" id="LUVgBlWOK" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(1.989 2.005)" width="20.00614941146023px"/><path d="M 0 4 L 0 0" fill="transparent" height="4px" id="tmY0ADzdY" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(12 12)" width="1px"/><path d="M 0 0 L 0.01 0" fill="transparent" height="1px" id="zZ4soq_6D" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(12 8)" width="1px"/></svg>`),
      (Qo = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        JEeZYcamG: i ?? a.JEeZYcamG ?? 2,
        P_DcoRcrY: e ?? a.P_DcoRcrY ?? `rgb(0, 0, 0)`,
      })),
      ($o = D(
        m(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              P_DcoRcrY: o,
              JEeZYcamG: s,
              ...c
            } = Qo(e),
            l = A(`1443637572`, Zo);
          return f(Xo, {
            ...c,
            className: M(`framer-uuDSz`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m973uw": o, "--js9iwy": s, ...n },
            viewBox: `0 0 24 24`,
            children: f(`use`, { href: l }),
          });
        }),
        [
          `.framer-uuDSz { -webkit-mask: ${qo}; aspect-ratio: 1; display: block; mask: ${qo}; width: 24px; }`,
        ],
        `framer-uuDSz`,
      )),
      ($o.displayName = `Badge Info`),
      (es = $o),
      N($o, {
        P_DcoRcrY: {
          defaultValue: `rgb(0, 0, 0)`,
          hidden: !1,
          title: `Color`,
          type: k.Color,
        },
        JEeZYcamG: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 16,
          min: 1,
          title: `Width`,
          type: k.Number,
        },
      }));
  });
function ns(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var rs,
  is,
  as,
  os,
  ss,
  cs,
  ls,
  us,
  ds,
  fs,
  ps,
  ms,
  hs,
  gs = e(() => {
    (_(),
      C(),
      S(),
      n(),
      ts(),
      (rs = O(es)),
      (is = [`fsPfuRQ9T`, `WupFptG3Q`]),
      (as = `framer-5vtez`),
      (os = { fsPfuRQ9T: `framer-v-zqot8x`, WupFptG3Q: `framer-v-18x86a0` }),
      (ss = { bounce: 0.1, delay: 0, duration: 0.6, type: `spring` }),
      (cs = (e, t) => `translateY(-50%) ${t}`),
      (ls = ({ value: e, children: n }) => {
        let r = h(x),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(x.Provider, { value: a, children: n });
      }),
      (us = { Close: `WupFptG3Q`, Open: `fsPfuRQ9T` }),
      (ds = b.create(o)),
      (fs = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: us[r.variant] ?? r.variant ?? `fsPfuRQ9T`,
      })),
      (ps = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (ms = D(
        m(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = ee(),
            { activeLocale: s, setLocale: c } = re();
          ie();
          let { style: l, className: u, layoutId: d, variant: p, ...m } = fs(e),
            {
              baseVariant: h,
              classNames: _,
              clearLoadingGesture: v,
              gestureHandlers: y,
              gestureVariant: te,
              isLoading: x,
              setGestureState: S,
              setVariant: C,
              variants: w,
            } = he({
              cycleOrder: is,
              defaultVariant: `fsPfuRQ9T`,
              ref: i,
              variant: p,
              variantClassNames: os,
            }),
            T = ps(e, w),
            { activeVariantCallback: E, delay: ae } = ye(h),
            oe = E(async (...e) => {
              (S({ isHovered: !1 }), C(`WupFptG3Q`));
            }),
            ce = E(async (...e) => {
              (S({ isHovered: !0 }), C(`fsPfuRQ9T`));
            }),
            D = M(as);
          return f(ne, {
            id: d ?? a,
            children: f(ds, {
              animate: w,
              initial: !1,
              children: f(ls, {
                value: ss,
                children: g(b.div, {
                  ...m,
                  ...y,
                  className: M(D, `framer-zqot8x`, u, _),
                  "data-framer-name": `Open`,
                  "data-highlight": !0,
                  layoutDependency: T,
                  layoutId: `fsPfuRQ9T`,
                  onMouseLeave: oe,
                  ref: i,
                  style: {
                    backgroundColor: `rgb(0, 0, 0)`,
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    ...l,
                  },
                  ...ns(
                    {
                      WupFptG3Q: {
                        "data-framer-name": `Close`,
                        onMouseEnter: ce,
                        onMouseLeave: void 0,
                      },
                    },
                    h,
                    te,
                  ),
                  children: [
                    f(es, {
                      animated: !0,
                      className: `framer-14qzk8q`,
                      layoutDependency: T,
                      layoutId: `yYAPf7HK2`,
                      style: {
                        "--1m973uw": `rgb(255, 255, 255)`,
                        "--js9iwy": 2,
                      },
                    }),
                    f(se, {
                      __fromCanvasComponent: !0,
                      children: f(o, {
                        children: f(b.p, {
                          dir: `auto`,
                          style: {
                            "--font-selector": `SW50ZXItTWVkaXVt`,
                            "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.8)`,
                            "--framer-font-weight": `500`,
                            "--framer-letter-spacing": `-0.02em`,
                            "--framer-line-height": `1em`,
                            "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                          },
                          children: `The card layout design is an example - you can fully customize it to fit your needs.`,
                        }),
                      }),
                      className: `framer-v8iql4`,
                      fonts: [`Inter-Medium`],
                      layoutDependency: T,
                      layoutId: `P4QqKSln1`,
                      style: {
                        "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                        opacity: 1,
                      },
                      variants: { WupFptG3Q: { opacity: 0 } },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...ns({ WupFptG3Q: { transformTemplate: cs } }, h, te),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-5vtez.framer-1gjqlq9, .framer-5vtez .framer-1gjqlq9 { display: block; }`,
          `.framer-5vtez.framer-zqot8x { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 5px 6px 5px 5px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-5vtez .framer-14qzk8q { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 23px); position: relative; width: 23px; }`,
          `.framer-5vtez .framer-v8iql4 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-5vtez.framer-v-18x86a0.framer-zqot8x { padding: 5px; }`,
          `.framer-5vtez.framer-v-18x86a0 .framer-v8iql4 { left: 30px; position: absolute; top: 48%; z-index: 1; }`,
        ],
        `framer-5vtez`,
      )),
      (hs = ms),
      (ms.displayName = `info button`),
      (ms.defaultProps = { height: 33, width: 516.5 }),
      N(ms, {
        variant: {
          options: [`fsPfuRQ9T`, `WupFptG3Q`],
          optionTitles: [`Open`, `Close`],
          title: `Variant`,
          type: k.Enum,
        },
      }),
      le(
        ms,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/UjlFhCnUjxhNfep4oYBPqnEssyo.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2`,
                weight: `500`,
              },
            ],
          },
          ...rs,
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
function _s(e) {
  return m((t, n) =>
    f(e, {
      ref: n,
      ...t,
      style: {
        ...(t.style || {}),
        transformStyle: `preserve-3d`,
        WebkitTransformStyle: `preserve-3d`,
      },
    }),
  );
}
var vs = e(() => {
    (_(), n());
  }),
  ys,
  bs,
  xs,
  Ss,
  Cs,
  ws = e(() => {
    (_(),
      C(),
      n(),
      (ys = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="M 66.667 0 L 0 0 L 0 66.667 L 66.667 66.667 Z" fill="var(--1c2dmy6, rgb(0, 0, 0))" height="66.6667px" id="udhJKyH6i" transform="translate(133.333 0)" width="66.667px"/><path d="M 0 0 L 66.666 0 L 66.666 66.666 L 0 66.666 Z" fill="var(--1c2dmy6, rgb(0, 0, 0))" height="66.6664px" id="EK1rVPT_u" transform="translate(66.667 66.667)" width="66.6664px"/><path d="M 0 0 L 66.667 0 L 66.667 66.667 L 0 66.667 Z" fill="var(--1c2dmy6, rgb(0, 0, 0))" height="66.667px" id="cX8zUpawr" transform="translate(0 133.333)" width="66.6667px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (bs = m((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? f(b.div, { ...a, layoutId: r, ref: t })
          : f(`div`, { ...a, ref: t });
      })),
      (xs = ({ fill: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        QmQcq56SU: e ?? a.QmQcq56SU ?? `rgb(0, 0, 0)`,
        rHwATwiyc: i ?? a.rHwATwiyc ?? 24,
      })),
      (Ss = D(
        m(function (e, t) {
          let {
            style: n,
            className: r,
            layoutId: i,
            variant: a,
            QmQcq56SU: o,
            rHwATwiyc: s,
            ...c
          } = xs(e);
          return f(bs, {
            ...c,
            className: M(`framer-Nxbdl`, r),
            layoutId: i,
            ref: t,
            style: { "--1c2dmy6": o, ...n },
          });
        }),
        [
          `.framer-Nxbdl { -webkit-mask: ${ys}; aspect-ratio: 1; background-color: var(--1c2dmy6); mask: ${ys}; width: 200px; }`,
        ],
        `framer-Nxbdl`,
      )),
      (Ss.displayName = `Shape  858`),
      (Cs = Ss),
      N(Ss, {
        QmQcq56SU: {
          defaultValue: `rgb(0, 0, 0)`,
          hidden: !1,
          title: `Fill`,
          type: k.Color,
        },
        rHwATwiyc: {
          defaultValue: 24,
          hidden: !0,
          min: 0,
          title: `Width`,
          type: k.Number,
        },
      }));
  }),
  Ts,
  Es,
  Ds,
  Os,
  ks,
  As = e(() => {
    (_(),
      C(),
      n(),
      (Ts = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><g d="M 0 200 L 0 0 L 200 0 L 200 200 Z M 100 173.738 C 24.364 236.944 -36.944 175.636 26.262 100 C -36.944 24.364 24.364 -36.944 100 26.262 C 175.621 -36.944 236.944 24.364 173.738 100 C 236.944 175.578 175.621 236.944 100 173.738 Z" fill="transparent" height="200.00018935737072px" id="uCR8YaC89" width="200px"><path d="M 0 200 L 0 0 L 200 0 L 200 200 Z" fill="transparent" height="200px" id="VVQDLQSbm" width="200px"/><path d="M 100 173.738 C 24.364 236.944 -36.944 175.636 26.262 100 C -36.944 24.364 24.364 -36.944 100 26.262 C 175.621 -36.944 236.944 24.364 173.738 100 C 236.944 175.578 175.621 236.944 100 173.738 Z" fill="var(--1c2dmy6, rgb(0, 0, 0))" height="200.00018314848913px" id="VKi95fGTy" transform="translate(0 0)" width="199.99747604739073px"/></g></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (Es = m((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? f(b.div, { ...a, layoutId: r, ref: t })
          : f(`div`, { ...a, ref: t });
      })),
      (Ds = ({ fill: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        QmQcq56SU: e ?? a.QmQcq56SU ?? `rgb(0, 0, 0)`,
        rHwATwiyc: i ?? a.rHwATwiyc ?? 24,
      })),
      (Os = D(
        m(function (e, t) {
          let {
            style: n,
            className: r,
            layoutId: i,
            variant: a,
            QmQcq56SU: o,
            rHwATwiyc: s,
            ...c
          } = Ds(e);
          return f(Es, {
            ...c,
            className: M(`framer-qU1gn`, r),
            layoutId: i,
            ref: t,
            style: { "--1c2dmy6": o, ...n },
          });
        }),
        [
          `.framer-qU1gn { -webkit-mask: ${Ts}; aspect-ratio: 1; background-color: var(--1c2dmy6); mask: ${Ts}; width: 200px; }`,
        ],
        `framer-qU1gn`,
      )),
      (Os.displayName = `Shape  975`),
      (ks = Os),
      N(Os, {
        QmQcq56SU: {
          defaultValue: `rgb(0, 0, 0)`,
          hidden: !1,
          title: `Fill`,
          type: k.Color,
        },
        rHwATwiyc: {
          defaultValue: 24,
          hidden: !0,
          min: 0,
          title: `Width`,
          type: k.Number,
        },
      }));
  }),
  js,
  Ms,
  Ns,
  Ps,
  Fs,
  Is = e(() => {
    (_(),
      C(),
      n(),
      (js = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><g d="M 0 200 L 0 0 L 200 0 L 200 200 Z M 100.254 200 C 97.1 200 94.434 197.716 93.67 194.656 C 91.235 184.903 86.574 174.531 79.688 163.542 C 71.528 150.347 59.896 138.108 44.792 126.823 C 31.655 116.894 18.518 110.123 5.381 106.511 C 2.27 105.656 0 102.897 0 99.67 C 0 96.507 2.183 93.779 5.225 92.911 C 18.105 89.234 30.512 83.263 42.448 75 C 56.163 65.451 67.621 53.993 76.823 40.625 C 84.963 28.716 90.551 16.939 93.586 5.292 C 94.382 2.241 97.068 0 100.221 0 C 103.409 0 106.114 2.291 106.89 5.383 C 108.642 12.365 111.38 19.512 115.104 26.823 C 119.792 35.851 125.781 44.531 133.073 52.865 C 140.538 61.024 148.872 68.403 158.073 75 C 170.097 83.523 182.32 89.511 194.744 92.964 C 197.792 93.811 200 96.524 200 99.687 C 200 102.898 197.725 105.634 194.629 106.483 C 186.754 108.642 178.648 112.124 170.313 116.927 C 160.243 122.83 150.868 129.861 142.187 138.021 C 133.507 146.007 126.389 154.427 120.833 163.281 C 113.933 174.293 109.267 184.745 106.837 194.639 C 106.083 197.708 103.413 200 100.254 200 Z" fill="transparent" height="200px" id="znf9ubjjs" width="200px"><path d="M 0 200 L 0 0 L 200 0 L 200 200 Z" fill="transparent" height="200px" id="dAzhAx_K2" width="200px"/><path d="M 100.254 200 C 97.1 200 94.434 197.716 93.67 194.656 C 91.235 184.903 86.574 174.531 79.688 163.542 C 71.528 150.347 59.896 138.108 44.792 126.823 C 31.655 116.894 18.518 110.123 5.381 106.511 C 2.27 105.656 0 102.897 0 99.67 C 0 96.507 2.183 93.779 5.225 92.911 C 18.105 89.234 30.512 83.263 42.448 75 C 56.163 65.451 67.621 53.993 76.823 40.625 C 84.963 28.716 90.551 16.939 93.586 5.292 C 94.382 2.241 97.068 0 100.221 0 C 103.409 0 106.114 2.291 106.89 5.383 C 108.642 12.365 111.38 19.512 115.104 26.823 C 119.792 35.851 125.781 44.531 133.073 52.865 C 140.538 61.024 148.872 68.403 158.073 75 C 170.097 83.523 182.32 89.511 194.744 92.964 C 197.792 93.811 200 96.524 200 99.687 C 200 102.898 197.725 105.634 194.629 106.483 C 186.754 108.642 178.648 112.124 170.313 116.927 C 160.243 122.83 150.868 129.861 142.187 138.021 C 133.507 146.007 126.389 154.427 120.833 163.281 C 113.933 174.293 109.267 184.745 106.837 194.639 C 106.083 197.708 103.413 200 100.254 200 Z" fill="var(--1c2dmy6, rgb(0, 0, 0))" height="200px" id="v3FD2dkke" width="200px"/></g></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (Ms = m((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? f(b.div, { ...a, layoutId: r, ref: t })
          : f(`div`, { ...a, ref: t });
      })),
      (Ns = ({ fill: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        QmQcq56SU: e ?? a.QmQcq56SU ?? `rgb(0, 0, 0)`,
        rHwATwiyc: i ?? a.rHwATwiyc ?? 24,
      })),
      (Ps = D(
        m(function (e, t) {
          let {
            style: n,
            className: r,
            layoutId: i,
            variant: a,
            QmQcq56SU: o,
            rHwATwiyc: s,
            ...c
          } = Ns(e);
          return f(Ms, {
            ...c,
            className: M(`framer-m353T`, r),
            layoutId: i,
            ref: t,
            style: { "--1c2dmy6": o, ...n },
          });
        }),
        [
          `.framer-m353T { -webkit-mask: ${js}; aspect-ratio: 1; background-color: var(--1c2dmy6); mask: ${js}; width: 200px; }`,
        ],
        `framer-m353T`,
      )),
      (Ps.displayName = `Shape  1121`),
      (Fs = Ps),
      N(Ps, {
        QmQcq56SU: {
          defaultValue: `rgb(0, 0, 0)`,
          hidden: !1,
          title: `Fill`,
          type: k.Color,
        },
        rHwATwiyc: {
          defaultValue: 24,
          hidden: !0,
          min: 0,
          title: `Width`,
          type: k.Number,
        },
      }));
  });
function Ls(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Rs,
  zs,
  Bs,
  Vs,
  Hs,
  Us,
  Ws,
  Gs,
  Ks,
  qs = e(() => {
    (_(),
      C(),
      S(),
      n(),
      ws(),
      As(),
      Is(),
      (Rs = [`QiM9i8_Bc`, `vf1BFm9f3`, `ITIGYR7JF`]),
      (zs = `framer-QJIp9`),
      (Bs = {
        ITIGYR7JF: `framer-v-1gs6ri2`,
        QiM9i8_Bc: `framer-v-11lhjgr`,
        vf1BFm9f3: `framer-v-p48uus`,
      }),
      (Vs = { First: `QiM9i8_Bc`, Second: `vf1BFm9f3`, Third: `ITIGYR7JF` }),
      (Hs = b.create(o)),
      (Us = ({
        height: e,
        id: t,
        serviceName1: n,
        serviceName2: r,
        serviceName3: i,
        width: a,
        ...o
      }) => ({
        ...o,
        FCQnGWhRP: n ?? o.FCQnGWhRP ?? `Branding & Identity`,
        i2S_CHuMj: i ?? o.i2S_CHuMj ?? `Creative Production`,
        ph6f_YLsV: r ?? o.ph6f_YLsV ?? `Web Design & Dev`,
        variant: Vs[o.variant] ?? o.variant ?? `QiM9i8_Bc`,
      })),
      (Ws = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Gs = D(
        m(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = ee(),
            { activeLocale: s, setLocale: c } = re();
          ie();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              FCQnGWhRP: m,
              ph6f_YLsV: h,
              i2S_CHuMj: _,
              ...v
            } = Us(e),
            {
              baseVariant: y,
              classNames: te,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: C,
              isLoading: w,
              setGestureState: T,
              setVariant: E,
              variants: ae,
            } = he({
              cycleOrder: Rs,
              defaultVariant: `QiM9i8_Bc`,
              ref: i,
              variant: p,
              variantClassNames: Bs,
            }),
            oe = Ws(e, ae),
            ce = M(zs);
          return f(ne, {
            id: d ?? a,
            children: f(Hs, {
              animate: ae,
              initial: !1,
              children: g(b.div, {
                ...v,
                ...S,
                className: M(ce, `framer-11lhjgr`, u, te),
                "data-framer-name": `First`,
                layoutDependency: oe,
                layoutId: `QiM9i8_Bc`,
                ref: i,
                style: {
                  backdropFilter: `blur(2px)`,
                  background: `linear-gradient(180deg, rgb(239, 156, 60) 0%, rgb(196, 125, 43) 100%)`,
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  WebkitBackdropFilter: `blur(2px)`,
                  ...l,
                },
                variants: {
                  ITIGYR7JF: {
                    background: `linear-gradient(180deg, rgb(109, 230, 69) 0%, rgb(76, 176, 42) 100%)`,
                  },
                  vf1BFm9f3: {
                    background: `linear-gradient(180deg, rgb(60, 138, 240) 0%, rgb(54, 120, 207) 100%)`,
                  },
                },
                ...Ls(
                  {
                    ITIGYR7JF: { "data-framer-name": `Third` },
                    vf1BFm9f3: { "data-framer-name": `Second` },
                  },
                  y,
                  C,
                ),
                children: [
                  f(b.div, {
                    className: `framer-sidl0y`,
                    "data-framer-name": `Top Decorative`,
                    layoutDependency: oe,
                    layoutId: `EyuMuMds4`,
                    children: f(Ce, {
                      className: `framer-gy91go`,
                      "data-framer-name": `Subtract`,
                      layout: `position`,
                      layoutDependency: oe,
                      layoutId: `anylaM3NT`,
                      opacity: 1,
                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 418 189"><path d="M 215.154 9.612 C 223.288 4.878 234.868 4.501 243.836 7.109 C 256.432 10.773 267.27 20.786 273.522 32.141 C 276.352 37.335 279.924 45.985 280.858 51.808 C 282.524 62.225 282.234 73.309 280.796 83.711 C 280.26 87.332 278.45 92.624 277.494 96.275 C 281.718 96.46 286.3 97.136 290.526 97.556 C 295.358 98.008 300.206 98.262 305.054 98.317 C 312.642 98.403 320.18 97.81 327.718 97.03 C 364.154 93.26 388.614 80.91 418 59.955 L 418 71.189 C 415.416 72.545 409.486 76.837 406.38 78.795 C 399.354 83.144 392.116 87.136 384.688 90.756 C 364.82 100.453 339.55 106.047 317.446 106.921 C 303.252 107.483 288.574 107.31 274.578 104.688 C 266.73 122.987 256.35 139.823 238.75 150.107 C 225.784 157.681 209.582 159.131 195.141 155.666 C 181.062 152.288 166.809 144.163 153.901 137.684 C 146.317 133.877 139.409 131.065 131.616 127.931 C 131.034 142.18 126.172 152.987 115.61 163.542 C 99.854 179.401 64.559 177.361 64.831 149.843 C 64.911 141.713 69.993 133.057 75.85 127.7 C 87.93 116.65 104.781 113.66 120.63 116.346 C 111.291 91.026 87.912 85.973 64.331 94.292 C 35.819 104.35 15.512 127.637 3.713 154.855 C 2.835 156.88 0.984 162.744 0 164.159 L 0 141.717 C 0.744 140.609 1.673 138.741 2.313 137.53 C 15.801 111.988 38.86 92.826 66.444 84.233 C 80.043 80.041 95.133 80.102 107.802 87.357 C 120.586 94.677 126.381 104.542 130.527 118.213 C 138.903 121.205 145.967 123.665 153.982 127.687 C 162.472 132.201 171.247 136.353 179.848 140.58 C 220.11 160.367 249.324 141.29 265.824 102.566 C 259.532 101.204 256.23 100.244 250.24 98.011 C 232.794 91.506 216.9 81.166 206.76 65.26 C 195.482 47.566 195.242 21.182 215.154 9.612 Z M 122.216 125.582 C 118.154 124.738 109.998 123.914 106.036 124.561 C 95.253 125.625 85.755 129.017 78.847 137.705 C 68.925 150.185 73.579 164.072 90.304 164.839 C 105.181 164.241 115.828 153.132 120.628 139.699 C 121.965 135.956 122.385 129.577 122.216 125.582 Z M 245.652 15.889 C 241.216 13.932 234.704 12.316 229.78 12.973 C 223.792 13.627 216.884 16.158 213.252 21.277 C 200.418 39.363 212.654 62.222 228.082 74.13 C 236.47 80.602 245.61 85.478 255.594 89.008 C 259.664 90.574 264.192 91.244 268.492 92.85 C 270.546 87.951 270.656 85.825 271.588 80.834 C 273.448 70.888 273.76 61.916 271.742 51.91 C 270.956 48.011 270.822 46.607 269.3 42.681 C 264.892 31.294 257.066 20.921 245.652 15.889 Z" fill="rgba(255, 198, 132, 0.65)" opacity="0.57"></path></svg>`,
                      svgContentId: 12842939445,
                      withExternalLayout: !0,
                      ...Ls(
                        {
                          ITIGYR7JF: {
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 418 189"><path d="M 215.154 9.612 C 223.288 4.878 234.868 4.501 243.836 7.109 C 256.432 10.773 267.27 20.786 273.522 32.141 C 276.352 37.335 279.924 45.985 280.858 51.808 C 282.524 62.225 282.234 73.309 280.796 83.711 C 280.26 87.332 278.45 92.624 277.494 96.275 C 281.718 96.46 286.3 97.136 290.526 97.556 C 295.358 98.008 300.206 98.262 305.054 98.317 C 312.642 98.403 320.18 97.81 327.718 97.03 C 364.154 93.26 388.614 80.91 418 59.955 L 418 71.189 C 415.416 72.545 409.486 76.837 406.38 78.795 C 399.354 83.144 392.116 87.136 384.688 90.756 C 364.82 100.453 339.55 106.047 317.446 106.921 C 303.252 107.483 288.574 107.31 274.578 104.688 C 266.73 122.987 256.35 139.823 238.75 150.107 C 225.784 157.681 209.582 159.131 195.141 155.666 C 181.062 152.288 166.809 144.163 153.901 137.684 C 146.317 133.877 139.409 131.065 131.616 127.931 C 131.034 142.18 126.172 152.987 115.61 163.542 C 99.854 179.401 64.559 177.361 64.831 149.843 C 64.911 141.713 69.993 133.057 75.85 127.7 C 87.93 116.65 104.781 113.66 120.63 116.346 C 111.291 91.026 87.912 85.973 64.331 94.292 C 35.819 104.35 15.512 127.637 3.713 154.855 C 2.835 156.88 0.984 162.744 0 164.159 L 0 141.717 C 0.744 140.609 1.673 138.741 2.313 137.53 C 15.801 111.988 38.86 92.826 66.444 84.233 C 80.043 80.041 95.133 80.102 107.802 87.357 C 120.586 94.677 126.381 104.542 130.527 118.213 C 138.903 121.205 145.967 123.665 153.982 127.687 C 162.472 132.201 171.247 136.353 179.848 140.58 C 220.11 160.367 249.324 141.29 265.824 102.566 C 259.532 101.204 256.23 100.244 250.24 98.011 C 232.794 91.506 216.9 81.166 206.76 65.26 C 195.482 47.566 195.242 21.182 215.154 9.612 Z M 122.216 125.582 C 118.154 124.738 109.998 123.914 106.036 124.561 C 95.253 125.625 85.755 129.017 78.847 137.705 C 68.925 150.185 73.579 164.072 90.304 164.839 C 105.181 164.241 115.828 153.132 120.628 139.699 C 121.965 135.956 122.385 129.577 122.216 125.582 Z M 245.652 15.889 C 241.216 13.932 234.704 12.316 229.78 12.973 C 223.792 13.627 216.884 16.158 213.252 21.277 C 200.418 39.363 212.654 62.222 228.082 74.13 C 236.47 80.602 245.61 85.478 255.594 89.008 C 259.664 90.574 264.192 91.244 268.492 92.85 C 270.546 87.951 270.656 85.825 271.588 80.834 C 273.448 70.888 273.76 61.916 271.742 51.91 C 270.956 48.011 270.822 46.607 269.3 42.681 C 264.892 31.294 257.066 20.921 245.652 15.889 Z" fill="rgba(169, 255, 140, 0.65)" opacity="0.57"></path></svg>`,
                            svgContentId: 9987464777,
                          },
                          vf1BFm9f3: {
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 418 189"><path d="M 215.154 9.612 C 223.288 4.878 234.868 4.501 243.836 7.109 C 256.432 10.773 267.27 20.786 273.522 32.141 C 276.352 37.335 279.924 45.985 280.858 51.808 C 282.524 62.225 282.234 73.309 280.796 83.711 C 280.26 87.332 278.45 92.624 277.494 96.275 C 281.718 96.46 286.3 97.136 290.526 97.556 C 295.358 98.008 300.206 98.262 305.054 98.317 C 312.642 98.403 320.18 97.81 327.718 97.03 C 364.154 93.26 388.614 80.91 418 59.955 L 418 71.189 C 415.416 72.545 409.486 76.837 406.38 78.795 C 399.354 83.144 392.116 87.136 384.688 90.756 C 364.82 100.453 339.55 106.047 317.446 106.921 C 303.252 107.483 288.574 107.31 274.578 104.688 C 266.73 122.987 256.35 139.823 238.75 150.107 C 225.784 157.681 209.582 159.131 195.141 155.666 C 181.062 152.288 166.809 144.163 153.901 137.684 C 146.317 133.877 139.409 131.065 131.616 127.931 C 131.034 142.18 126.172 152.987 115.61 163.542 C 99.854 179.401 64.559 177.361 64.831 149.843 C 64.911 141.713 69.993 133.057 75.85 127.7 C 87.93 116.65 104.781 113.66 120.63 116.346 C 111.291 91.026 87.912 85.973 64.331 94.292 C 35.819 104.35 15.512 127.637 3.713 154.855 C 2.835 156.88 0.984 162.744 0 164.159 L 0 141.717 C 0.744 140.609 1.673 138.741 2.313 137.53 C 15.801 111.988 38.86 92.826 66.444 84.233 C 80.043 80.041 95.133 80.102 107.802 87.357 C 120.586 94.677 126.381 104.542 130.527 118.213 C 138.903 121.205 145.967 123.665 153.982 127.687 C 162.472 132.201 171.247 136.353 179.848 140.58 C 220.11 160.367 249.324 141.29 265.824 102.566 C 259.532 101.204 256.23 100.244 250.24 98.011 C 232.794 91.506 216.9 81.166 206.76 65.26 C 195.482 47.566 195.242 21.182 215.154 9.612 Z M 122.216 125.582 C 118.154 124.738 109.998 123.914 106.036 124.561 C 95.253 125.625 85.755 129.017 78.847 137.705 C 68.925 150.185 73.579 164.072 90.304 164.839 C 105.181 164.241 115.828 153.132 120.628 139.699 C 121.965 135.956 122.385 129.577 122.216 125.582 Z M 245.652 15.889 C 241.216 13.932 234.704 12.316 229.78 12.973 C 223.792 13.627 216.884 16.158 213.252 21.277 C 200.418 39.363 212.654 62.222 228.082 74.13 C 236.47 80.602 245.61 85.478 255.594 89.008 C 259.664 90.574 264.192 91.244 268.492 92.85 C 270.546 87.951 270.656 85.825 271.588 80.834 C 273.448 70.888 273.76 61.916 271.742 51.91 C 270.956 48.011 270.822 46.607 269.3 42.681 C 264.892 31.294 257.066 20.921 245.652 15.889 Z" fill="rgba(138, 189, 255, 0.65)" opacity="0.57"></path></svg>`,
                            svgContentId: 9138837504,
                          },
                        },
                        y,
                        C,
                      ),
                    }),
                  }),
                  g(b.div, {
                    className: `framer-9d4bpf`,
                    "data-framer-name": `Middle`,
                    layoutDependency: oe,
                    layoutId: `konDwOcp2`,
                    children: [
                      f(ue, {
                        animated: !0,
                        className: `framer-md18sr`,
                        Component: Fs,
                        "data-framer-name": `Shape`,
                        layoutDependency: oe,
                        layoutId: `THN4JdDFZ`,
                        style: {
                          "--1c2dmy6": `rgba(255, 255, 255, 0.7)`,
                          "--clsckg": 24,
                          "--framer-icon-mask-mode": `intersect`,
                          "--framer-icon-mask": `linear-gradient(0deg, rgba(0,0,0,0) -66%, rgba(0,0,0,1) 100%) add`,
                        },
                        ...Ls(
                          {
                            ITIGYR7JF: { Component: ks },
                            vf1BFm9f3: { Component: Cs },
                          },
                          y,
                          C,
                        ),
                      }),
                      f(se, {
                        __fromCanvasComponent: !0,
                        children: f(o, {
                          children: f(b.p, {
                            dir: `auto`,
                            style: {
                              "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                              "--framer-font-size": `25px`,
                              "--framer-font-weight": `600`,
                              "--framer-letter-spacing": `-0.04em`,
                              "--framer-line-height": `100%`,
                              "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                            },
                            children: `Branding & Identity`,
                          }),
                        }),
                        className: `framer-16z1mai`,
                        "data-framer-name": `Service Name`,
                        fonts: [`Inter-SemiBold`],
                        layoutDependency: oe,
                        layoutId: `xFiUHA3WP`,
                        style: {
                          "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                          "--framer-paragraph-spacing": `0px`,
                        },
                        text: m,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...Ls(
                          {
                            ITIGYR7JF: {
                              children: f(o, {
                                children: f(b.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                    "--framer-font-size": `25px`,
                                    "--framer-font-weight": `600`,
                                    "--framer-letter-spacing": `-0.04em`,
                                    "--framer-line-height": `100%`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                  },
                                  children: `Creative Production`,
                                }),
                              }),
                              text: _,
                            },
                            vf1BFm9f3: {
                              children: f(o, {
                                children: f(b.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                    "--framer-font-size": `25px`,
                                    "--framer-font-weight": `600`,
                                    "--framer-letter-spacing": `-0.04em`,
                                    "--framer-line-height": `100%`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                  },
                                  children: `Web Design & Dev`,
                                }),
                              }),
                              text: h,
                            },
                          },
                          y,
                          C,
                        ),
                      }),
                    ],
                  }),
                  f(b.div, {
                    className: `framer-g4ywtw`,
                    "data-framer-name": `Bottom Decorative`,
                    layoutDependency: oe,
                    layoutId: `nTkpm8PAg`,
                    children: f(Ce, {
                      className: `framer-n7tigu`,
                      "data-framer-name": `Vector`,
                      layout: `position`,
                      layoutDependency: oe,
                      layoutId: `T0cTODWqY`,
                      opacity: 1,
                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 362 214"><path d="M 353.331 106.497 L 353.264 107.127 C 352.426 109.254 351.831 110.308 349.711 111.401 C 347.653 112.46 344.497 111.441 343.353 109.53 C 338.262 101.031 332.574 93.875 325.307 86.976 C 316.75 78.904 307.315 71.801 297.175 65.801 C 270.72 49.979 226.348 33.449 196.131 45.654 C 200.235 48.48 204.193 52.55 207.77 55.941 C 222.557 69.961 232.868 94.483 220.51 113.048 C 216.445 119.153 209.049 123.417 201.765 124.584 C 179.825 128.304 154.725 114.44 150.771 91.715 C 148.791 80.349 153.164 68.87 159.678 59.681 C 163.078 54.879 170.222 47.407 175.342 44.331 C 169.701 41.41 165.845 39 159.697 36.444 C 136.626 26.851 113.113 24.684 89.173 32.131 C 63.239 39.893 43.692 58.896 31.641 82.566 C 22.07 101.365 16.617 122.462 15.415 143.531 C 15.179 152.103 15.401 160.36 17.089 168.812 C 17.765 172.202 19.415 175.423 19.406 178.849 C 19.395 183.042 15.011 184.692 11.513 183.122 C 9.375 182.009 8.58 179.313 7.937 177.25 C 4.823 167.286 4.154 157.05 4.372 146.696 C 4.431 143.965 5.103 138.604 4.852 136.34 L 5.313 131.974 C 5.765 130.747 5.987 127.683 6.228 126.263 C 6.723 123.364 7.201 120.449 7.8 117.566 C 10.302 105.587 14.154 93.928 19.282 82.807 C 37.097 44.866 67.687 20.686 109.926 17.047 C 111.954 16.873 118.138 17.082 119.498 16.516 L 139.847 18.667 C 140.156 18.923 140.813 19.227 141.197 19.305 C 157.612 22.65 171.638 29.093 185.783 38.121 C 191.642 35.231 198.086 33.178 204.508 31.974 C 239.91 25.338 284.056 43.44 312.882 62.967 C 326.193 71.983 338.389 83.112 347.797 96.133 C 350.023 99.213 352.613 102.741 353.331 106.497 Z M 185.159 50.928 C 176.829 55.747 168.477 64.315 164.482 73.069 C 161.398 80.239 160.001 87.531 163.104 95 C 169.163 109.589 189.159 118.29 204.007 112.664 C 212.294 109.524 214.666 102.144 214.762 94.072 C 215.43 84.82 209.317 74.1 203.377 67.293 C 197.938 61.181 191.827 55.692 185.159 50.928 Z" fill="rgba(255, 198, 133, 0.65)" opacity="0.57"></path></svg>`,
                      svgContentId: 8615034065,
                      withExternalLayout: !0,
                      ...Ls(
                        {
                          ITIGYR7JF: {
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 362 214"><path d="M 353.331 106.497 L 353.264 107.127 C 352.426 109.254 351.831 110.308 349.711 111.401 C 347.653 112.46 344.497 111.441 343.353 109.53 C 338.262 101.031 332.574 93.875 325.307 86.976 C 316.75 78.904 307.315 71.801 297.175 65.801 C 270.72 49.979 226.348 33.449 196.131 45.654 C 200.235 48.48 204.193 52.55 207.77 55.941 C 222.557 69.961 232.868 94.483 220.51 113.048 C 216.445 119.153 209.049 123.417 201.765 124.584 C 179.825 128.304 154.725 114.44 150.771 91.715 C 148.791 80.349 153.164 68.87 159.678 59.681 C 163.078 54.879 170.222 47.407 175.342 44.331 C 169.701 41.41 165.845 39 159.697 36.444 C 136.626 26.851 113.113 24.684 89.173 32.131 C 63.239 39.893 43.692 58.896 31.641 82.566 C 22.07 101.365 16.617 122.462 15.415 143.531 C 15.179 152.103 15.401 160.36 17.089 168.812 C 17.765 172.202 19.415 175.423 19.406 178.849 C 19.395 183.042 15.011 184.692 11.513 183.122 C 9.375 182.009 8.58 179.313 7.937 177.25 C 4.823 167.286 4.154 157.05 4.372 146.696 C 4.431 143.965 5.103 138.604 4.852 136.34 L 5.313 131.974 C 5.765 130.747 5.987 127.683 6.228 126.263 C 6.723 123.364 7.201 120.449 7.8 117.566 C 10.302 105.587 14.154 93.928 19.282 82.807 C 37.097 44.866 67.687 20.686 109.926 17.047 C 111.954 16.873 118.138 17.082 119.498 16.516 L 139.847 18.667 C 140.156 18.923 140.813 19.227 141.197 19.305 C 157.612 22.65 171.638 29.093 185.783 38.121 C 191.642 35.231 198.086 33.178 204.508 31.974 C 239.91 25.338 284.056 43.44 312.882 62.967 C 326.193 71.983 338.389 83.112 347.797 96.133 C 350.023 99.213 352.613 102.741 353.331 106.497 Z M 185.159 50.928 C 176.829 55.747 168.477 64.315 164.482 73.069 C 161.398 80.239 160.001 87.531 163.104 95 C 169.163 109.589 189.159 118.29 204.007 112.664 C 212.294 109.524 214.666 102.144 214.762 94.072 C 215.43 84.82 209.317 74.1 203.377 67.293 C 197.938 61.181 191.827 55.692 185.159 50.928 Z" fill="rgba(169, 255, 140, 0.65)" opacity="0.57"></path></svg>`,
                            svgContentId: 9480399929,
                          },
                          vf1BFm9f3: {
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 362 214"><path d="M 353.331 106.497 L 353.264 107.127 C 352.426 109.254 351.831 110.308 349.711 111.401 C 347.653 112.46 344.497 111.441 343.353 109.53 C 338.262 101.031 332.574 93.875 325.307 86.976 C 316.75 78.904 307.315 71.801 297.175 65.801 C 270.72 49.979 226.348 33.449 196.131 45.654 C 200.235 48.48 204.193 52.55 207.77 55.941 C 222.557 69.961 232.868 94.483 220.51 113.048 C 216.445 119.153 209.049 123.417 201.765 124.584 C 179.825 128.304 154.725 114.44 150.771 91.715 C 148.791 80.349 153.164 68.87 159.678 59.681 C 163.078 54.879 170.222 47.407 175.342 44.331 C 169.701 41.41 165.845 39 159.697 36.444 C 136.626 26.851 113.113 24.684 89.173 32.131 C 63.239 39.893 43.692 58.896 31.641 82.566 C 22.07 101.365 16.617 122.462 15.415 143.531 C 15.179 152.103 15.401 160.36 17.089 168.812 C 17.765 172.202 19.415 175.423 19.406 178.849 C 19.395 183.042 15.011 184.692 11.513 183.122 C 9.375 182.009 8.58 179.313 7.937 177.25 C 4.823 167.286 4.154 157.05 4.372 146.696 C 4.431 143.965 5.103 138.604 4.852 136.34 L 5.313 131.974 C 5.765 130.747 5.987 127.683 6.228 126.263 C 6.723 123.364 7.201 120.449 7.8 117.566 C 10.302 105.587 14.154 93.928 19.282 82.807 C 37.097 44.866 67.687 20.686 109.926 17.047 C 111.954 16.873 118.138 17.082 119.498 16.516 L 139.847 18.667 C 140.156 18.923 140.813 19.227 141.197 19.305 C 157.612 22.65 171.638 29.093 185.783 38.121 C 191.642 35.231 198.086 33.178 204.508 31.974 C 239.91 25.338 284.056 43.44 312.882 62.967 C 326.193 71.983 338.389 83.112 347.797 96.133 C 350.023 99.213 352.613 102.741 353.331 106.497 Z M 185.159 50.928 C 176.829 55.747 168.477 64.315 164.482 73.069 C 161.398 80.239 160.001 87.531 163.104 95 C 169.163 109.589 189.159 118.29 204.007 112.664 C 212.294 109.524 214.666 102.144 214.762 94.072 C 215.43 84.82 209.317 74.1 203.377 67.293 C 197.938 61.181 191.827 55.692 185.159 50.928 Z" fill="rgba(138, 189, 255, 0.65)" opacity="0.57"></path></svg>`,
                            svgContentId: 10705887847,
                          },
                        },
                        y,
                        C,
                      ),
                    }),
                  }),
                ],
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-QJIp9.framer-18zewl, .framer-QJIp9 .framer-18zewl { display: block; }`,
          `.framer-QJIp9.framer-11lhjgr { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 409px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 308px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-QJIp9 .framer-sidl0y { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: -32px; overflow: visible; padding: 0px; position: absolute; top: -75px; width: min-content; z-index: 1; }`,
          `.framer-QJIp9 .framer-gy91go { flex: none; height: 189px; position: relative; width: 418px; }`,
          `.framer-QJIp9 .framer-9d4bpf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-QJIp9 .framer-md18sr { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 102px); position: relative; width: 102px; }`,
          `.framer-QJIp9 .framer-16z1mai { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-QJIp9 .framer-g4ywtw { align-content: center; align-items: center; bottom: -151px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: absolute; right: -103px; width: min-content; z-index: 1; }`,
          `.framer-QJIp9 .framer-n7tigu { flex: none; height: 214px; position: relative; width: 362px; }`,
        ],
        `framer-QJIp9`,
      )),
      (Ks = Gs),
      (Gs.displayName = `Front`),
      (Gs.defaultProps = { height: 409, width: 308 }),
      N(Gs, {
        variant: {
          options: [`QiM9i8_Bc`, `vf1BFm9f3`, `ITIGYR7JF`],
          optionTitles: [`First`, `Second`, `Third`],
          title: `Variant`,
          type: k.Enum,
        },
        FCQnGWhRP: {
          defaultValue: `Branding & Identity`,
          displayTextArea: !1,
          title: `Service Name 1`,
          type: k.String,
        },
        onFCQnGWhRPChange: { changes: `FCQnGWhRP`, type: k.ChangeHandler },
        ph6f_YLsV: {
          defaultValue: `Web Design & Dev`,
          displayTextArea: !1,
          title: `Service Name 2`,
          type: k.String,
        },
        onph6f_YLsVChange: { changes: `ph6f_YLsV`, type: k.ChangeHandler },
        i2S_CHuMj: {
          defaultValue: `Creative Production`,
          displayTextArea: !1,
          title: `Service Name 3`,
          type: k.String,
        },
        oni2S_CHuMjChange: { changes: `i2S_CHuMj`, type: k.ChangeHandler },
      }),
      le(
        Gs,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/yDtI2UI8XcEg1W2je9XPN3Noo.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2`,
                weight: `600`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
function Js(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ys,
  Xs,
  Zs,
  Qs,
  $s,
  ec,
  tc,
  nc,
  rc,
  ic,
  ac,
  oc,
  sc = e(() => {
    (_(),
      C(),
      S(),
      n(),
      ws(),
      As(),
      Is(),
      (Ys = [`fjYqEBVPY`, `TfOlBX2oj`, `oNu5J8jbT`, `jega7zOCl`]),
      (Xs = `framer-5jjmS`),
      (Zs = {
        fjYqEBVPY: `framer-v-197nmk9`,
        jega7zOCl: `framer-v-191pllx`,
        oNu5J8jbT: `framer-v-jt2yz6`,
        TfOlBX2oj: `framer-v-1h0ge0m`,
      }),
      (Qs = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      ($s = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (ec = ({ value: e, children: n }) => {
        let r = h(x),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(x.Provider, { value: a, children: n });
      }),
      (tc = {
        "Variant 4": `jega7zOCl`,
        First: `fjYqEBVPY`,
        Second: `TfOlBX2oj`,
        Third: `oNu5J8jbT`,
      }),
      (nc = b.create(o)),
      (rc = ({
        cTAButton: e,
        height: t,
        id: n,
        image1: r,
        image2: i,
        image3: a,
        link1: o,
        link2: s,
        link3: c,
        newTab: l,
        serviceContent1: u,
        serviceContent2: d,
        serviceContent3: f,
        serviceName1: p,
        serviceName2: m,
        serviceName3: h,
        width: g,
        ..._
      }) => ({
        ..._,
        AdOmNOw8H: e ?? _.AdOmNOw8H ?? `Know More`,
        bEPEa6AkL:
          d ??
          _.bEPEa6AkL ??
          `Design and develop modern websites with seamless experiences that engage visitors and turn interactions into growth at scale.`,
        BoO_BCD0I: c ?? _.BoO_BCD0I,
        fJoZHx05D: i ??
          _.fJoZHx05D ?? {
            alt: ``,
            pixelHeight: 673,
            pixelWidth: 1200,
            src: `https://framerusercontent.com/images/A4kZ4JKrKRQB47BZsV6CXyJCwA.png?width=1200&height=673`,
            srcSet: `https://framerusercontent.com/images/A4kZ4JKrKRQB47BZsV6CXyJCwA.png?scale-down-to=512&width=1200&height=673 512w,https://framerusercontent.com/images/A4kZ4JKrKRQB47BZsV6CXyJCwA.png?scale-down-to=1024&width=1200&height=673 1024w,https://framerusercontent.com/images/A4kZ4JKrKRQB47BZsV6CXyJCwA.png?width=1200&height=673 1200w`,
          },
        HeW94dJbG: a ??
          _.HeW94dJbG ?? {
            alt: ``,
            pixelHeight: 799,
            pixelWidth: 1200,
            src: `https://framerusercontent.com/images/aX7OzhXTeeu9KoHilGJmEuZTbY.png?width=1200&height=799`,
            srcSet: `https://framerusercontent.com/images/aX7OzhXTeeu9KoHilGJmEuZTbY.png?scale-down-to=512&width=1200&height=799 512w,https://framerusercontent.com/images/aX7OzhXTeeu9KoHilGJmEuZTbY.png?scale-down-to=1024&width=1200&height=799 1024w,https://framerusercontent.com/images/aX7OzhXTeeu9KoHilGJmEuZTbY.png?width=1200&height=799 1200w`,
          },
        jRbA5RsT_:
          u ??
          _.jRbA5RsT_ ??
          `Build distinctive brands through strategy, identity, and messaging that create trust and meaningful audience connections now.`,
        l0Sg1qdto: o ?? _.l0Sg1qdto,
        nnDpJtdL9: h ?? _.nnDpJtdL9 ?? `Creative Production`,
        ofIgmwkLK:
          f ??
          _.ofIgmwkLK ??
          `Create impactful visual content through storytelling and production that captures attention across every platform every day.`,
        qUm0unYtW: l ?? _.qUm0unYtW ?? !0,
        rFjOB1my8: s ?? _.rFjOB1my8,
        variant: tc[_.variant] ?? _.variant ?? `fjYqEBVPY`,
        xL1jjtylo: r ??
          _.xL1jjtylo ?? {
            alt: ``,
            pixelHeight: 755,
            pixelWidth: 686,
            src: `https://framerusercontent.com/images/tUkDeSIXGHUoQm8mfXzM7PvqB8Q.png?width=686&height=755`,
            srcSet: `https://framerusercontent.com/images/tUkDeSIXGHUoQm8mfXzM7PvqB8Q.png?width=686&height=755 686w`,
          },
        XTuzR3jeI: p ?? _.XTuzR3jeI ?? `Branding & Identity`,
        YSOxW0bAK: m ?? _.YSOxW0bAK ?? `Web Design & Dev`,
      })),
      (ic = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (ac = D(
        m(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = ee(),
            { activeLocale: s, setLocale: c } = re(),
            l = ie(),
            {
              style: u,
              className: d,
              layoutId: p,
              variant: m,
              XTuzR3jeI: h,
              jRbA5RsT_: _,
              xL1jjtylo: v,
              l0Sg1qdto: y,
              YSOxW0bAK: te,
              bEPEa6AkL: x,
              fJoZHx05D: S,
              rFjOB1my8: C,
              nnDpJtdL9: T,
              ofIgmwkLK: E,
              HeW94dJbG: ae,
              BoO_BCD0I: oe,
              AdOmNOw8H: ce,
              qUm0unYtW: D,
              ...le
            } = rc(e),
            {
              baseVariant: de,
              classNames: pe,
              clearLoadingGesture: me,
              gestureHandlers: O,
              gestureVariant: ge,
              isLoading: _e,
              setGestureState: ve,
              setVariant: ye,
              variants: k,
            } = he({
              cycleOrder: Ys,
              defaultVariant: `fjYqEBVPY`,
              ref: i,
              variant: m,
              variantClassNames: Zs,
            }),
            A = ic(e, k),
            xe = M(Xs);
          return f(ne, {
            id: p ?? a,
            children: f(nc, {
              animate: k,
              initial: !1,
              children: f(ec, {
                value: Qs,
                children: f(b.div, {
                  ...le,
                  ...O,
                  className: M(xe, `framer-197nmk9`, d, pe),
                  "data-framer-name": `First`,
                  layoutDependency: A,
                  layoutId: `fjYqEBVPY`,
                  ref: i,
                  style: {
                    backgroundColor: `rgba(0, 0, 0, 0)`,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    ...u,
                  },
                  ...Js(
                    {
                      jega7zOCl: { "data-framer-name": `Variant 4` },
                      oNu5J8jbT: { "data-framer-name": `Third` },
                      TfOlBX2oj: { "data-framer-name": `Second` },
                    },
                    de,
                    ge,
                  ),
                  children: g(b.div, {
                    className: `framer-12boqyb`,
                    "data-framer-name": `Wrap`,
                    layoutDependency: A,
                    layoutId: `GqN31ltvu`,
                    style: {
                      background: `linear-gradient(180deg, rgb(223, 139, 43) 0%, rgb(223, 139, 43) 100%)`,
                      backgroundColor: `rgb(223, 139, 43)`,
                      borderBottomLeftRadius: 15.84,
                      borderBottomRightRadius: 15.84,
                      borderTopLeftRadius: 15.84,
                      borderTopRightRadius: 15.84,
                    },
                    variants: {
                      jega7zOCl: {
                        background: `linear-gradient(180deg, rgb(84, 184, 51) 0%, rgb(61, 158, 28) 100%)`,
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                      },
                      oNu5J8jbT: {
                        background: `linear-gradient(180deg, rgb(84, 184, 51) 0%, rgb(61, 158, 28) 100%)`,
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                      },
                      TfOlBX2oj: {
                        background: `linear-gradient(180deg, rgb(60, 138, 240) 0%, rgb(54, 120, 207) 100%)`,
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                      },
                    },
                    children: [
                      g(b.div, {
                        className: `framer-18t99xl`,
                        "data-framer-name": `Top Wrap`,
                        layoutDependency: A,
                        layoutId: `QpBX1NLgO`,
                        children: [
                          f(ue, {
                            animated: !0,
                            className: `framer-jxahud`,
                            Component: Fs,
                            "data-framer-name": `Shape`,
                            layoutDependency: A,
                            layoutId: `looJ04VDD`,
                            style: {
                              "--1c2dmy6": `rgba(255, 255, 255, 0.7)`,
                              "--clsckg": 24,
                              "--framer-icon-mask-mode": `intersect`,
                              "--framer-icon-mask": `linear-gradient(0deg, rgba(0,0,0,0) -66%, rgba(0,0,0,1) 100%) add`,
                            },
                            ...Js(
                              {
                                jega7zOCl: { Component: ks },
                                oNu5J8jbT: { Component: ks },
                                TfOlBX2oj: { Component: Cs },
                              },
                              de,
                              ge,
                            ),
                          }),
                          g(b.div, {
                            className: `framer-n8e5tl`,
                            "data-framer-name": `Content Wrap`,
                            layoutDependency: A,
                            layoutId: `Wk_gNKO6D`,
                            children: [
                              f(se, {
                                __fromCanvasComponent: !0,
                                children: f(o, {
                                  children: f(b.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                      "--framer-font-size": `20px`,
                                      "--framer-font-weight": `600`,
                                      "--framer-letter-spacing": `-0.04em`,
                                      "--framer-line-height": `1.1em`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                    },
                                    children: `Branding & Identity`,
                                  }),
                                }),
                                className: `framer-1afj7ye`,
                                "data-framer-name": `Title`,
                                fonts: [`Inter-SemiBold`],
                                layoutDependency: A,
                                layoutId: `R4oA8S1Yu`,
                                style: {
                                  "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                                  "--framer-paragraph-spacing": `0px`,
                                },
                                text: h,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...Js(
                                  {
                                    jega7zOCl: {
                                      children: f(o, {
                                        children: f(b.p, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                            "--framer-font-size": `20px`,
                                            "--framer-font-weight": `600`,
                                            "--framer-letter-spacing": `-0.04em`,
                                            "--framer-line-height": `1.1em`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                          },
                                          children: `Creative Production`,
                                        }),
                                      }),
                                      text: T,
                                    },
                                    oNu5J8jbT: {
                                      children: f(o, {
                                        children: f(b.p, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                            "--framer-font-size": `20px`,
                                            "--framer-font-weight": `600`,
                                            "--framer-letter-spacing": `-0.04em`,
                                            "--framer-line-height": `1.1em`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                          },
                                          children: `Creative Production`,
                                        }),
                                      }),
                                      text: T,
                                    },
                                    TfOlBX2oj: {
                                      children: f(o, {
                                        children: f(b.p, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                            "--framer-font-size": `20px`,
                                            "--framer-font-weight": `600`,
                                            "--framer-letter-spacing": `-0.04em`,
                                            "--framer-line-height": `1.1em`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                          },
                                          children: `Web Design & Dev`,
                                        }),
                                      }),
                                      text: te,
                                    },
                                  },
                                  de,
                                  ge,
                                ),
                              }),
                              f(se, {
                                __fromCanvasComponent: !0,
                                children: f(o, {
                                  children: f(b.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                      "--framer-font-size": `12px`,
                                      "--framer-font-weight": `500`,
                                      "--framer-letter-spacing": `-0.04em`,
                                      "--framer-line-height": `1.15em`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.86))`,
                                    },
                                    children: `Asics went 11 with their hello Asics went 11 with their hello Asics went 11 with their helloAsics went 11 with their hello`,
                                  }),
                                }),
                                className: `framer-7q6fhl`,
                                "data-framer-name": `Content`,
                                fonts: [`Inter-Medium`],
                                layoutDependency: A,
                                layoutId: `BVwJSfQrf`,
                                style: {
                                  "--extracted-r6o4lv": `rgba(255, 255, 255, 0.86)`,
                                  "--framer-paragraph-spacing": `0px`,
                                },
                                text: _,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...Js(
                                  {
                                    jega7zOCl: { text: E },
                                    oNu5J8jbT: { text: E },
                                    TfOlBX2oj: { text: x },
                                  },
                                  de,
                                  ge,
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      f(be, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 755,
                          intrinsicWidth: 686,
                          loading: w(
                            (l?.y || 0) +
                              (0 +
                                ((l?.height || 400) -
                                  0 -
                                  ((l?.height || 400) - 0) * 1) /
                                  2) +
                              0 +
                              (344.34 +
                                ((((l?.height || 400) - 0) * 1 - 0 - 556.15) /
                                  1) *
                                  1),
                          ),
                          pixelHeight: 755,
                          pixelWidth: 686,
                          sizes: `max(${l?.width || `100vw`}, 1px)`,
                          ...$s(v),
                        },
                        className: `framer-44m4ud`,
                        "data-framer-name": `Image`,
                        layoutDependency: A,
                        layoutId: `xY_Wd55kw`,
                        style: {
                          borderBottomLeftRadius: 16,
                          borderBottomRightRadius: 16,
                          borderTopLeftRadius: 16,
                          borderTopRightRadius: 16,
                        },
                        ...Js(
                          {
                            jega7zOCl: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 799,
                                intrinsicWidth: 1200,
                                loading: w(
                                  (l?.y || 0) +
                                    (0 +
                                      ((l?.height || 400) -
                                        0 -
                                        ((l?.height || 400) - 0) * 1) /
                                        2) +
                                    0 +
                                    (344.34 +
                                      ((((l?.height || 400) - 0) * 1 -
                                        0 -
                                        556.15) /
                                        1) *
                                        1),
                                ),
                                pixelHeight: 799,
                                pixelWidth: 1200,
                                sizes: `max(${l?.width || `100vw`}, 1px)`,
                                ...$s(ae),
                              },
                            },
                            oNu5J8jbT: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 799,
                                intrinsicWidth: 1200,
                                loading: w(
                                  (l?.y || 0) +
                                    (0 +
                                      ((l?.height || 400) -
                                        0 -
                                        ((l?.height || 400) - 0) * 1) /
                                        2) +
                                    0 +
                                    (344.34 +
                                      ((((l?.height || 400) - 0) * 1 -
                                        0 -
                                        556.15) /
                                        1) *
                                        1),
                                ),
                                pixelHeight: 799,
                                pixelWidth: 1200,
                                sizes: `max(${l?.width || `100vw`}, 1px)`,
                                ...$s(ae),
                              },
                            },
                            TfOlBX2oj: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 673,
                                intrinsicWidth: 1200,
                                loading: w(
                                  (l?.y || 0) +
                                    (0 +
                                      ((l?.height || 400) -
                                        0 -
                                        ((l?.height || 400) - 0) * 1) /
                                        2) +
                                    0 +
                                    (344.34 +
                                      ((((l?.height || 400) - 0) * 1 -
                                        0 -
                                        556.15) /
                                        1) *
                                        1),
                                ),
                                pixelHeight: 673,
                                pixelWidth: 1200,
                                sizes: `max(${l?.width || `100vw`}, 1px)`,
                                ...$s(S),
                              },
                            },
                          },
                          de,
                          ge,
                        ),
                        children: f(fe, {
                          href: y,
                          motionChild: !0,
                          nodeId: `PQFVxJHZg`,
                          openInNewTab: D,
                          scopeId: `Q3FCRcZVF`,
                          ...Js(
                            {
                              jega7zOCl: { href: oe, openInNewTab: !0 },
                              oNu5J8jbT: { href: oe, openInNewTab: !0 },
                              TfOlBX2oj: { href: C, openInNewTab: !0 },
                            },
                            de,
                            ge,
                          ),
                          children: f(b.a, {
                            className: `framer-16qoqft framer-kvceea`,
                            "data-framer-name": `Button`,
                            layoutDependency: A,
                            layoutId: `PQFVxJHZg`,
                            style: {
                              backgroundColor: `rgb(255, 255, 255)`,
                              borderBottomLeftRadius: 15.56,
                              borderBottomRightRadius: 15.56,
                              borderTopLeftRadius: 15.56,
                              borderTopRightRadius: 15.56,
                              opacity: 0.9,
                            },
                            children: f(se, {
                              __fromCanvasComponent: !0,
                              children: f(o, {
                                children: f(b.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                    "--framer-font-size": `9px`,
                                    "--framer-font-weight": `500`,
                                    "--framer-letter-spacing": `-0.04em`,
                                    "--framer-line-height": `100%`,
                                  },
                                  children: `Know More`,
                                }),
                              }),
                              className: `framer-idjk81`,
                              "data-framer-name": `Text`,
                              fonts: [`Inter-Medium`],
                              layoutDependency: A,
                              layoutId: `UgBNtq0ad`,
                              style: { "--framer-paragraph-spacing": `0px` },
                              text: ce,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-5jjmS.framer-kvceea, .framer-5jjmS .framer-kvceea { display: block; }`,
          `.framer-5jjmS.framer-197nmk9 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 400px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 290px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-5jjmS .framer-12boqyb { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 100%; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-5jjmS .framer-18t99xl { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 23.75px; height: min-content; justify-content: center; overflow: visible; padding: 23.75px 19.8px 0px 19.8px; position: relative; width: 100%; }`,
          `.framer-5jjmS .framer-jxahud { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 40px); position: relative; width: 40px; }`,
          `.framer-5jjmS .framer-n8e5tl { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15.84px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-5jjmS .framer-1afj7ye, .framer-5jjmS .framer-7q6fhl { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-5jjmS .framer-44m4ud { flex: none; gap: 0px; height: 212px; overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-5jjmS .framer-16qoqft { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 24px; justify-content: center; left: 18px; overflow: visible; padding: 5.94px 9.9px 5.94px 9.9px; position: absolute; text-decoration: none; top: 168px; width: 69px; }`,
          `.framer-5jjmS .framer-idjk81 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-5jjmS.framer-v-191pllx .framer-jxahud { height: var(--framer-aspect-ratio-supported, 102px); }`,
        ],
        `framer-5jjmS`,
      )),
      (oc = ac),
      (ac.displayName = `Back`),
      (ac.defaultProps = { height: 400, width: 290 }),
      N(ac, {
        variant: {
          options: [`fjYqEBVPY`, `TfOlBX2oj`, `oNu5J8jbT`, `jega7zOCl`],
          optionTitles: [`First`, `Second`, `Third`, `Variant 4`],
          title: `Variant`,
          type: k.Enum,
        },
        XTuzR3jeI: {
          defaultValue: `Branding & Identity`,
          displayTextArea: !1,
          title: `Service Name 1`,
          type: k.String,
        },
        onXTuzR3jeIChange: { changes: `XTuzR3jeI`, type: k.ChangeHandler },
        jRbA5RsT_: {
          defaultValue: `Build distinctive brands through strategy, identity, and messaging that create trust and meaningful audience connections now.`,
          displayTextArea: !0,
          title: `Service Content 1`,
          type: k.String,
        },
        onjRbA5RsT_Change: { changes: `jRbA5RsT_`, type: k.ChangeHandler },
        xL1jjtylo: {
          __defaultAssetReference: `data:framer/asset-reference,tUkDeSIXGHUoQm8mfXzM7PvqB8Q.png?originalFilename=image.png&width=686&height=755`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,tUkDeSIXGHUoQm8mfXzM7PvqB8Q.png?originalFilename=image.png&width=686&height=755`,
          },
          title: `Image 1`,
          type: k.ResponsiveImage,
        },
        l0Sg1qdto: { title: `Link 1`, type: k.Link },
        YSOxW0bAK: {
          defaultValue: `Web Design & Dev`,
          displayTextArea: !1,
          title: `Service Name 2`,
          type: k.String,
        },
        onYSOxW0bAKChange: { changes: `YSOxW0bAK`, type: k.ChangeHandler },
        bEPEa6AkL: {
          defaultValue: `Design and develop modern websites with seamless experiences that engage visitors and turn interactions into growth at scale.`,
          displayTextArea: !0,
          title: `Service Content 2`,
          type: k.String,
        },
        onbEPEa6AkLChange: { changes: `bEPEa6AkL`, type: k.ChangeHandler },
        fJoZHx05D: {
          __defaultAssetReference: `data:framer/asset-reference,A4kZ4JKrKRQB47BZsV6CXyJCwA.png?originalFilename=QmS2HmAfw6QG5qBNhy42PAumHfquXv2fBTa8MjvzetLDNy%3Fauto%3Dformat%26w%3D1200.png&width=1200&height=673`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,A4kZ4JKrKRQB47BZsV6CXyJCwA.png?originalFilename=QmS2HmAfw6QG5qBNhy42PAumHfquXv2fBTa8MjvzetLDNy%3Fauto%3Dformat%26w%3D1200.png&width=1200&height=673`,
          },
          title: `Image 2`,
          type: k.ResponsiveImage,
        },
        rFjOB1my8: { title: `Link 2`, type: k.Link },
        nnDpJtdL9: {
          defaultValue: `Creative Production`,
          displayTextArea: !1,
          title: `Service Name 3`,
          type: k.String,
        },
        onnnDpJtdL9Change: { changes: `nnDpJtdL9`, type: k.ChangeHandler },
        ofIgmwkLK: {
          defaultValue: `Create impactful visual content through storytelling and production that captures attention across every platform every day.`,
          displayTextArea: !0,
          title: `Service Content 3`,
          type: k.String,
        },
        onofIgmwkLKChange: { changes: `ofIgmwkLK`, type: k.ChangeHandler },
        HeW94dJbG: {
          __defaultAssetReference: `data:framer/asset-reference,aX7OzhXTeeu9KoHilGJmEuZTbY.png?originalFilename=QmQ1PTpuFGXa3diTad4giqm9vKjucPji4GyEz8LM9ot9pn%3Fauto%3Dformat%26w%3D1200.png&width=1200&height=799`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,aX7OzhXTeeu9KoHilGJmEuZTbY.png?originalFilename=QmQ1PTpuFGXa3diTad4giqm9vKjucPji4GyEz8LM9ot9pn%3Fauto%3Dformat%26w%3D1200.png&width=1200&height=799`,
          },
          title: `Image 3`,
          type: k.ResponsiveImage,
        },
        BoO_BCD0I: { title: `Link 3`, type: k.Link },
        AdOmNOw8H: {
          defaultValue: `Know More`,
          displayTextArea: !1,
          title: `CTA Button`,
          type: k.String,
        },
        onAdOmNOw8HChange: { changes: `AdOmNOw8H`, type: k.ChangeHandler },
        qUm0unYtW: { defaultValue: !0, title: `New Tab`, type: k.Boolean },
        onqUm0unYtWChange: { changes: `qUm0unYtW`, type: k.ChangeHandler },
      }),
      le(
        ac,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/yDtI2UI8XcEg1W2je9XPN3Noo.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/UjlFhCnUjxhNfep4oYBPqnEssyo.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2`,
                weight: `500`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
function cc(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var lc,
  uc,
  dc,
  fc,
  pc,
  mc,
  hc,
  gc,
  _c,
  vc,
  yc,
  bc,
  xc,
  Sc,
  Cc,
  wc,
  Tc,
  Ec = e(() => {
    (_(),
      C(),
      S(),
      n(),
      vs(),
      qs(),
      sc(),
      (lc = O(Ks)),
      (uc = O(oc)),
      (dc = ve(b.div, {
        nodeId: `jtoJiMks3`,
        override: _s,
        scopeId: `S1fWa2Wkj`,
      })),
      (fc = [
        `jtoJiMks3`,
        `NwXfoNbge`,
        `iSoBmCH55`,
        `LrkCYv9bP`,
        `qHGk0G_bg`,
        `cSK_6_6ak`,
      ]),
      (pc = `framer-jqElm`),
      (mc = {
        cSK_6_6ak: `framer-v-15wt6ei`,
        iSoBmCH55: `framer-v-1xysici`,
        jtoJiMks3: `framer-v-1igy0z`,
        LrkCYv9bP: `framer-v-1ryjkn`,
        NwXfoNbge: `framer-v-1uz095x`,
        qHGk0G_bg: `framer-v-u36gi1`,
      }),
      (hc = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (gc = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (_c = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (vc = ({ value: e, children: n }) => {
        let r = h(x),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(x.Provider, { value: a, children: n });
      }),
      (yc = {
        "First Card - Back": `LrkCYv9bP`,
        "First Card - Front": `jtoJiMks3`,
        "Second Card - Back": `qHGk0G_bg`,
        "Second Card - Front": `NwXfoNbge`,
        "Third Card - Back": `cSK_6_6ak`,
        "Third Card - Front": `iSoBmCH55`,
      }),
      (bc = b.create(o)),
      (xc = (e, t) => {
        let [n, r] = c(e),
          [i, a] = c(e);
        return t ? [e, t] : (e !== i && (r(e), a(e)), [n, r]);
      }),
      (Sc = ({
        cTAButton: e,
        height: t,
        id: n,
        image1: r,
        image2: i,
        image3: a,
        link1: o,
        link2: s,
        link3: c,
        newTab: l,
        serviceContent1: u,
        serviceContent2: d,
        serviceContent3: f,
        serviceName1: p,
        serviceName2: m,
        serviceName3: h,
        width: g,
        ..._
      }) => ({
        ..._,
        bHAFaIL6x: h ?? _.bHAFaIL6x ?? `Creative Production`,
        ChqSxOsiW: m ?? _.ChqSxOsiW ?? `Web Design & Dev`,
        E3heAdqO0: a ??
          _.E3heAdqO0 ?? {
            pixelHeight: 799,
            pixelWidth: 1200,
            src: `https://framerusercontent.com/images/aX7OzhXTeeu9KoHilGJmEuZTbY.png?width=1200&height=799`,
            srcSet: `https://framerusercontent.com/images/aX7OzhXTeeu9KoHilGJmEuZTbY.png?scale-down-to=512&width=1200&height=799 512w,https://framerusercontent.com/images/aX7OzhXTeeu9KoHilGJmEuZTbY.png?scale-down-to=1024&width=1200&height=799 1024w,https://framerusercontent.com/images/aX7OzhXTeeu9KoHilGJmEuZTbY.png?width=1200&height=799 1200w`,
          },
        F5dxZeWeY: r ??
          _.F5dxZeWeY ?? {
            pixelHeight: 755,
            pixelWidth: 686,
            src: `https://framerusercontent.com/images/tUkDeSIXGHUoQm8mfXzM7PvqB8Q.png?width=686&height=755`,
            srcSet: `https://framerusercontent.com/images/tUkDeSIXGHUoQm8mfXzM7PvqB8Q.png?width=686&height=755 686w`,
          },
        fALVpL9rl: p ?? _.fALVpL9rl ?? `Branding & Identity`,
        G8Lsht7iZ:
          u ??
          _.G8Lsht7iZ ??
          `Build distinctive brands through strategy, identity, and messaging that create trust and meaningful audience connections now.`,
        gN53GihA5: o ?? _.gN53GihA5,
        H9QNOLhMo: l ?? _.H9QNOLhMo ?? !0,
        IBaWzeI9Z:
          f ??
          _.IBaWzeI9Z ??
          `Create impactful visual content through storytelling and production that captures attention across every platform every day.`,
        n3_0W7muj:
          d ??
          _.n3_0W7muj ??
          `Design and develop modern websites with seamless experiences that engage visitors and turn interactions into growth at scale.`,
        qYGkNGCLz: i ??
          _.qYGkNGCLz ?? {
            pixelHeight: 673,
            pixelWidth: 1200,
            src: `https://framerusercontent.com/images/A4kZ4JKrKRQB47BZsV6CXyJCwA.png?width=1200&height=673`,
            srcSet: `https://framerusercontent.com/images/A4kZ4JKrKRQB47BZsV6CXyJCwA.png?scale-down-to=512&width=1200&height=673 512w,https://framerusercontent.com/images/A4kZ4JKrKRQB47BZsV6CXyJCwA.png?scale-down-to=1024&width=1200&height=673 1024w,https://framerusercontent.com/images/A4kZ4JKrKRQB47BZsV6CXyJCwA.png?width=1200&height=673 1200w`,
          },
        STJFnlkMo: c ?? _.STJFnlkMo,
        um_tX3Ry9: e ?? _.um_tX3Ry9 ?? `Know More`,
        V7HSEOkmb: s ?? _.V7HSEOkmb,
        variant: yc[_.variant] ?? _.variant ?? `jtoJiMks3`,
      })),
      (Cc = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (wc = D(
        m(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = ee(),
            { activeLocale: o, setLocale: s } = re(),
            c = ie(),
            {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              fALVpL9rl: m,
              onfALVpL9rlChange: h,
              G8Lsht7iZ: _,
              onG8Lsht7iZChange: v,
              F5dxZeWeY: y,
              gN53GihA5: te,
              ChqSxOsiW: x,
              onChqSxOsiWChange: S,
              n3_0W7muj: C,
              onn3_0W7mujChange: w,
              qYGkNGCLz: T,
              V7HSEOkmb: E,
              bHAFaIL6x: ae,
              onbHAFaIL6xChange: oe,
              IBaWzeI9Z: se,
              onIBaWzeI9ZChange: ce,
              E3heAdqO0: D,
              STJFnlkMo: le,
              um_tX3Ry9: ue,
              onum_tX3Ry9Change: de,
              H9QNOLhMo: fe,
              onH9QNOLhMoChange: pe,
              ...me
            } = Sc(e),
            [O, ge] = xc(m, h),
            [_e, ve] = xc(_, v),
            [ye, k] = xc(x, S),
            [A, be] = xc(C, w),
            [xe, j] = xc(ae, oe),
            [Ce, N] = xc(se, ce),
            [P, Te] = xc(ue, de),
            [F, Ee] = xc(fe, pe),
            {
              baseVariant: I,
              classNames: De,
              clearLoadingGesture: Oe,
              gestureHandlers: ke,
              gestureVariant: L,
              isLoading: Ae,
              setGestureState: je,
              setVariant: Me,
              variants: R,
            } = he({
              cycleOrder: fc,
              defaultVariant: `jtoJiMks3`,
              ref: i,
              variant: p,
              variantClassNames: mc,
            }),
            Ne = Cc(e, R),
            Pe = M(pc);
          return f(ne, {
            id: d ?? a,
            children: f(bc, {
              animate: R,
              initial: !1,
              children: f(vc, {
                value: hc,
                children: f(dc, {
                  ...me,
                  ...ke,
                  className: M(Pe, `framer-1igy0z`, u, De),
                  "data-framer-name": `First Card - Front`,
                  layoutDependency: Ne,
                  layoutId: `jtoJiMks3`,
                  ref: i,
                  style: { ...l },
                  ...cc(
                    {
                      cSK_6_6ak: { "data-framer-name": `Third Card - Back` },
                      iSoBmCH55: { "data-framer-name": `Third Card - Front` },
                      LrkCYv9bP: { "data-framer-name": `First Card - Back` },
                      NwXfoNbge: { "data-framer-name": `Second Card - Front` },
                      qHGk0G_bg: { "data-framer-name": `Second Card - Back` },
                    },
                    I,
                    L,
                  ),
                  children: g(b.div, {
                    className: `framer-zvpewg`,
                    "data-framer-name": `Card`,
                    layoutDependency: Ne,
                    layoutId: `k16gWF0nf`,
                    style: { rotateY: 0, transformPerspective: 1e3 },
                    variants: {
                      cSK_6_6ak: { rotateY: 180 },
                      LrkCYv9bP: { rotateY: 180 },
                      qHGk0G_bg: { rotateY: 180 },
                    },
                    children: [
                      f(b.div, {
                        className: `framer-1nlvvbc`,
                        "data-framer-name": `Front`,
                        layoutDependency: Ne,
                        layoutId: `VlJamnDSj`,
                        children: f(Se, {
                          height: 400,
                          width: `290px`,
                          y:
                            (c?.y || 0) +
                            (0 + ((c?.height || 400) - 0 - 400) / 2) +
                            0 +
                            0 +
                            0,
                          ...cc(
                            {
                              cSK_6_6ak: {
                                y:
                                  (c?.y || 0) +
                                  (0 + ((c?.height || 200) - 0 - 400) / 2) +
                                  0 +
                                  0 +
                                  0,
                              },
                              iSoBmCH55: {
                                y:
                                  (c?.y || 0) +
                                  (0 + ((c?.height || 200) - 0 - 400) / 2) +
                                  0 +
                                  0 +
                                  0,
                              },
                            },
                            I,
                            L,
                          ),
                          children: f(we, {
                            className: `framer-1oig0zh-container`,
                            "data-framer-name": `Front`,
                            layoutDependency: Ne,
                            layoutId: `KuIKO2FT8-container`,
                            name: `Front`,
                            nodeId: `KuIKO2FT8`,
                            rendersWithMotion: !0,
                            scopeId: `S1fWa2Wkj`,
                            children: f(Ks, {
                              FCQnGWhRP: O,
                              height: `100%`,
                              i2S_CHuMj: xe,
                              id: `KuIKO2FT8`,
                              layoutId: `KuIKO2FT8`,
                              name: `Front`,
                              onFCQnGWhRPChange: ge,
                              oni2S_CHuMjChange: j,
                              onph6f_YLsVChange: k,
                              ph6f_YLsV: ye,
                              style: { height: `100%`, width: `100%` },
                              variant: gc(`QiM9i8_Bc`),
                              width: `100%`,
                              ...cc(
                                {
                                  cSK_6_6ak: { variant: gc(`ITIGYR7JF`) },
                                  iSoBmCH55: { variant: gc(`ITIGYR7JF`) },
                                  NwXfoNbge: { variant: gc(`vf1BFm9f3`) },
                                  qHGk0G_bg: { variant: gc(`vf1BFm9f3`) },
                                },
                                I,
                                L,
                              ),
                            }),
                          }),
                        }),
                      }),
                      f(b.div, {
                        className: `framer-152bjlz`,
                        "data-framer-name": `Back`,
                        layoutDependency: Ne,
                        layoutId: `KwfkgdyZ1`,
                        style: { rotateY: 180 },
                        children: f(Se, {
                          height: 400,
                          width: `290px`,
                          y:
                            (c?.y || 0) +
                            (0 + ((c?.height || 400) - 0 - 400) / 2) +
                            0 +
                            0,
                          ...cc(
                            {
                              cSK_6_6ak: {
                                y:
                                  (c?.y || 0) +
                                  (0 + ((c?.height || 200) - 0 - 400) / 2) +
                                  0 +
                                  0,
                              },
                              iSoBmCH55: {
                                y:
                                  (c?.y || 0) +
                                  (0 + ((c?.height || 200) - 0 - 400) / 2) +
                                  0 +
                                  0,
                              },
                            },
                            I,
                            L,
                          ),
                          children: f(we, {
                            className: `framer-yprezc-container`,
                            layoutDependency: Ne,
                            layoutId: `ApmnAu3dA-container`,
                            nodeId: `ApmnAu3dA`,
                            rendersWithMotion: !0,
                            scopeId: `S1fWa2Wkj`,
                            children: f(oc, {
                              AdOmNOw8H: P,
                              bEPEa6AkL: A,
                              BoO_BCD0I: le,
                              fJoZHx05D: _c(T),
                              height: `100%`,
                              HeW94dJbG: _c(D),
                              id: `ApmnAu3dA`,
                              jRbA5RsT_: _e,
                              l0Sg1qdto: te,
                              layoutId: `ApmnAu3dA`,
                              nnDpJtdL9: xe,
                              ofIgmwkLK: Ce,
                              onAdOmNOw8HChange: Te,
                              onbEPEa6AkLChange: be,
                              onjRbA5RsT_Change: ve,
                              onnnDpJtdL9Change: j,
                              onofIgmwkLKChange: N,
                              onqUm0unYtWChange: Ee,
                              onXTuzR3jeIChange: ge,
                              onYSOxW0bAKChange: k,
                              qUm0unYtW: F,
                              rFjOB1my8: E,
                              style: { height: `100%`, width: `100%` },
                              variant: gc(`fjYqEBVPY`),
                              width: `100%`,
                              xL1jjtylo: _c(y),
                              XTuzR3jeI: O,
                              YSOxW0bAK: ye,
                              ...cc(
                                {
                                  cSK_6_6ak: { variant: gc(`oNu5J8jbT`) },
                                  iSoBmCH55: { variant: gc(`oNu5J8jbT`) },
                                  NwXfoNbge: { variant: gc(`TfOlBX2oj`) },
                                  qHGk0G_bg: { variant: gc(`TfOlBX2oj`) },
                                },
                                I,
                                L,
                              ),
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-jqElm.framer-nu7uat, .framer-jqElm .framer-nu7uat { display: block; }`,
          `.framer-jqElm.framer-1igy0z { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-jqElm .framer-zvpewg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 400px; justify-content: center; overflow: visible; padding: 0px; position: relative; transform-style: preserve-3d; width: 290px; }`,
          `.framer-jqElm .framer-1nlvvbc { align-content: center; align-items: center; backface-visibility: hidden; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; z-index: 2; }`,
          `.framer-jqElm .framer-1oig0zh-container, .framer-jqElm .framer-yprezc-container { flex: none; height: 400px; position: relative; width: 290px; }`,
          `.framer-jqElm .framer-152bjlz { align-content: center; align-items: center; backface-visibility: hidden; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
          `.framer-jqElm.framer-v-1ryjkn .framer-1nlvvbc, .framer-jqElm.framer-v-u36gi1 .framer-1nlvvbc, .framer-jqElm.framer-v-15wt6ei .framer-1nlvvbc { z-index: 1; }`,
          `.framer-jqElm.framer-v-1ryjkn .framer-152bjlz, .framer-jqElm.framer-v-u36gi1 .framer-152bjlz, .framer-jqElm.framer-v-15wt6ei .framer-152bjlz { z-index: 2; }`,
        ],
        `framer-jqElm`,
      )),
      (Tc = wc),
      (wc.displayName = `Card Wrap`),
      (wc.defaultProps = { height: 400, width: 290 }),
      N(wc, {
        variant: {
          options: [
            `jtoJiMks3`,
            `NwXfoNbge`,
            `iSoBmCH55`,
            `LrkCYv9bP`,
            `qHGk0G_bg`,
            `cSK_6_6ak`,
          ],
          optionTitles: [
            `First Card - Front`,
            `Second Card - Front`,
            `Third Card - Front`,
            `First Card - Back`,
            `Second Card - Back`,
            `Third Card - Back`,
          ],
          title: `Variant`,
          type: k.Enum,
        },
        fALVpL9rl: {
          defaultValue: `Branding & Identity`,
          displayTextArea: !1,
          title: `Service Name 1`,
          type: k.String,
        },
        onfALVpL9rlChange: { changes: `fALVpL9rl`, type: k.ChangeHandler },
        G8Lsht7iZ: {
          defaultValue: `Build distinctive brands through strategy, identity, and messaging that create trust and meaningful audience connections now.`,
          displayTextArea: !0,
          title: `Service Content 1`,
          type: k.String,
        },
        onG8Lsht7iZChange: { changes: `G8Lsht7iZ`, type: k.ChangeHandler },
        F5dxZeWeY: {
          __defaultAssetReference: `data:framer/asset-reference,tUkDeSIXGHUoQm8mfXzM7PvqB8Q.png?originalFilename=image.png&width=686&height=755`,
          title: `Image 1`,
          type: k.ResponsiveImage,
        },
        gN53GihA5: { title: `Link 1`, type: k.Link },
        ChqSxOsiW: {
          defaultValue: `Web Design & Dev`,
          displayTextArea: !1,
          title: `Service Name 2`,
          type: k.String,
        },
        onChqSxOsiWChange: { changes: `ChqSxOsiW`, type: k.ChangeHandler },
        n3_0W7muj: {
          defaultValue: `Design and develop modern websites with seamless experiences that engage visitors and turn interactions into growth at scale.`,
          displayTextArea: !0,
          title: `Service Content 2`,
          type: k.String,
        },
        onn3_0W7mujChange: { changes: `n3_0W7muj`, type: k.ChangeHandler },
        qYGkNGCLz: {
          __defaultAssetReference: `data:framer/asset-reference,A4kZ4JKrKRQB47BZsV6CXyJCwA.png?originalFilename=QmS2HmAfw6QG5qBNhy42PAumHfquXv2fBTa8MjvzetLDNy%3Fauto%3Dformat%26w%3D1200.png&width=1200&height=673`,
          title: `Image 2`,
          type: k.ResponsiveImage,
        },
        V7HSEOkmb: { title: `Link 2`, type: k.Link },
        bHAFaIL6x: {
          defaultValue: `Creative Production`,
          displayTextArea: !1,
          title: `Service Name 3`,
          type: k.String,
        },
        onbHAFaIL6xChange: { changes: `bHAFaIL6x`, type: k.ChangeHandler },
        IBaWzeI9Z: {
          defaultValue: `Create impactful visual content through storytelling and production that captures attention across every platform every day.`,
          displayTextArea: !0,
          title: `Service Content 3`,
          type: k.String,
        },
        onIBaWzeI9ZChange: { changes: `IBaWzeI9Z`, type: k.ChangeHandler },
        E3heAdqO0: {
          __defaultAssetReference: `data:framer/asset-reference,aX7OzhXTeeu9KoHilGJmEuZTbY.png?originalFilename=QmQ1PTpuFGXa3diTad4giqm9vKjucPji4GyEz8LM9ot9pn%3Fauto%3Dformat%26w%3D1200.png&width=1200&height=799`,
          title: `Image 3`,
          type: k.ResponsiveImage,
        },
        STJFnlkMo: { title: `Link 3`, type: k.Link },
        um_tX3Ry9: {
          defaultValue: `Know More`,
          displayTextArea: !1,
          title: `CTA Button`,
          type: k.String,
        },
        onum_tX3Ry9Change: { changes: `um_tX3Ry9`, type: k.ChangeHandler },
        H9QNOLhMo: { defaultValue: !0, title: `New Tab`, type: k.Boolean },
        onH9QNOLhMoChange: { changes: `H9QNOLhMo`, type: k.ChangeHandler },
      }),
      le(wc, [{ explicitInter: !0, fonts: [] }, ...lc, ...uc], {
        supportsExplicitInterCodegen: !0,
      }),
      (wc.loader = {
        load: (e, t) => (
          t.locale,
          Promise.allSettled([E(Ks, {}, t), E(oc, {}, t)])
        ),
      }));
  });
function Dc(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Oc,
  kc,
  Ac,
  jc,
  Mc,
  Nc,
  Pc,
  Fc,
  Ic,
  Lc,
  Rc,
  zc,
  Bc,
  Vc,
  Hc,
  Uc,
  Wc,
  Gc,
  Kc,
  qc,
  Jc = e(() => {
    (_(),
      C(),
      S(),
      n(),
      Ec(),
      (Oc = O(Tc)),
      (kc = xe(we)),
      (Ac = [`NJ2mYgZiy`, `TpR7tx10J`, `yEk2784iI`]),
      (jc = `framer-gxEXg`),
      (Mc = {
        NJ2mYgZiy: `framer-v-1qbd4kt`,
        TpR7tx10J: `framer-v-151ums2`,
        yEk2784iI: `framer-v-qq7o9z`,
      }),
      (Nc = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Pc = {
        delay: 0,
        duration: 1.5,
        ease: [0.44, 0, 0.56, 1],
        type: `tween`,
      }),
      (Fc = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: -8,
      }),
      (Ic = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Lc = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Rc = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 5,
      }),
      (zc = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: -6,
      }),
      (Bc = ({ value: e, children: n }) => {
        let r = h(x),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(x.Provider, { value: a, children: n });
      }),
      (Vc = { Desktop: `NJ2mYgZiy`, Phone: `yEk2784iI`, Tablet: `TpR7tx10J` }),
      (Hc = b.create(o)),
      (Uc = (e, t) => {
        let [n, r] = c(e),
          [i, a] = c(e);
        return t ? [e, t] : (e !== i && (r(e), a(e)), [n, r]);
      }),
      (Wc = ({
        _1ScrollSection1: e,
        _1ScrollSection2: t,
        _1ScrollSection3: n,
        _1ScrollSection4: r,
        _2ScrollSection1: i,
        _2ScrollSection2: a,
        _2ScrollSection3: o,
        _2ScrollSection4: s,
        _3ScrollSection1: c,
        _3ScrollSection2: l,
        _3ScrollSection3: u,
        _3ScrollSection4: d,
        cTAButton: f,
        height: p,
        id: m,
        image1: h,
        image2: g,
        image3: _,
        link1: v,
        link2: ee,
        link3: y,
        newTabLinkOpen: te,
        serviceContent1: b,
        serviceContent2: x,
        serviceContent3: ne,
        serviceName1: S,
        serviceName2: re,
        serviceName3: ie,
        width: C,
        ...w
      }) => ({
        ...w,
        bT7VFLkwN: ie ?? w.bT7VFLkwN ?? `Creative Production`,
        c9JDpgSaj: ee ?? w.c9JDpgSaj,
        FQrrRv3Xn: c ?? w.FQrrRv3Xn,
        G07aaR7mP:
          x ??
          w.G07aaR7mP ??
          `Design and develop modern websites with seamless experiences that engage visitors and turn interactions into growth at scale.`,
        gyWOQ3Y5L: te ?? w.gyWOQ3Y5L ?? !0,
        I1EwIDyNd: i ?? w.I1EwIDyNd,
        IjTSo9v8a: h ??
          w.IjTSo9v8a ?? {
            pixelHeight: 755,
            pixelWidth: 686,
            src: `https://framerusercontent.com/images/tUkDeSIXGHUoQm8mfXzM7PvqB8Q.png?width=686&height=755`,
            srcSet: `https://framerusercontent.com/images/tUkDeSIXGHUoQm8mfXzM7PvqB8Q.png?width=686&height=755 686w`,
          },
        jbnk6z7au: y ?? w.jbnk6z7au,
        kmAs_AL71: t ?? w.kmAs_AL71,
        KoyyAx70J: l ?? w.KoyyAx70J,
        kVkM2Vize: g ??
          w.kVkM2Vize ?? {
            pixelHeight: 673,
            pixelWidth: 1200,
            src: `https://framerusercontent.com/images/A4kZ4JKrKRQB47BZsV6CXyJCwA.png?width=1200&height=673`,
            srcSet: `https://framerusercontent.com/images/A4kZ4JKrKRQB47BZsV6CXyJCwA.png?scale-down-to=512&width=1200&height=673 512w,https://framerusercontent.com/images/A4kZ4JKrKRQB47BZsV6CXyJCwA.png?scale-down-to=1024&width=1200&height=673 1024w,https://framerusercontent.com/images/A4kZ4JKrKRQB47BZsV6CXyJCwA.png?width=1200&height=673 1200w`,
          },
        lb_NSLyCc: f ?? w.lb_NSLyCc ?? `Know More`,
        MAolvu_Uz: _ ??
          w.MAolvu_Uz ?? {
            pixelHeight: 799,
            pixelWidth: 1200,
            src: `https://framerusercontent.com/images/aX7OzhXTeeu9KoHilGJmEuZTbY.png?width=1200&height=799`,
            srcSet: `https://framerusercontent.com/images/aX7OzhXTeeu9KoHilGJmEuZTbY.png?scale-down-to=512&width=1200&height=799 512w,https://framerusercontent.com/images/aX7OzhXTeeu9KoHilGJmEuZTbY.png?scale-down-to=1024&width=1200&height=799 1024w,https://framerusercontent.com/images/aX7OzhXTeeu9KoHilGJmEuZTbY.png?width=1200&height=799 1200w`,
          },
        NQUvPF0Ed: re ?? w.NQUvPF0Ed ?? `Web Design & Dev`,
        q5JoCbVah: v ?? w.q5JoCbVah,
        qk_7shWiw: a ?? w.qk_7shWiw,
        QZeLnSM0X: s ?? w.QZeLnSM0X,
        ry4V6X50J: n ?? w.ry4V6X50J,
        TkbnSs_QY: S ?? w.TkbnSs_QY ?? `Branding & Identity`,
        tUK9QKRfm:
          ne ??
          w.tUK9QKRfm ??
          `Create impactful visual content through storytelling and production that captures attention across every platform every day.`,
        tWgYBJMqd: u ?? w.tWgYBJMqd,
        u5H2OkbTf: d ?? w.u5H2OkbTf,
        uJ3k_3FrD: r ?? w.uJ3k_3FrD,
        variant: Vc[w.variant] ?? w.variant ?? `NJ2mYgZiy`,
        WrxRQnwtW: e ?? w.WrxRQnwtW,
        YsJaFxlxJ:
          b ??
          w.YsJaFxlxJ ??
          `Build distinctive brands through strategy, identity, and messaging that create trust and meaningful audience connections now.`,
        yz6Azgs5e: o ?? w.yz6Azgs5e,
      })),
      (Gc = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Kc = D(
        m(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = ee(),
            { activeLocale: o, setLocale: s } = re(),
            c = ie(),
            {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              TkbnSs_QY: m,
              onTkbnSs_QYChange: h,
              YsJaFxlxJ: _,
              onYsJaFxlxJChange: v,
              IjTSo9v8a: y,
              q5JoCbVah: te,
              NQUvPF0Ed: x,
              onNQUvPF0EdChange: S,
              G07aaR7mP: C,
              onG07aaR7mPChange: w,
              kVkM2Vize: T,
              c9JDpgSaj: E,
              bT7VFLkwN: ae,
              onbT7VFLkwNChange: oe,
              tUK9QKRfm: se,
              ontUK9QKRfmChange: ce,
              MAolvu_Uz: D,
              lb_NSLyCc: le,
              onlb_NSLyCcChange: ue,
              jbnk6z7au: de,
              gyWOQ3Y5L: fe,
              ongyWOQ3Y5LChange: pe,
              WrxRQnwtW: me,
              kmAs_AL71: O,
              ry4V6X50J: ge,
              uJ3k_3FrD: _e,
              I1EwIDyNd: ve,
              qk_7shWiw: ye,
              yz6Azgs5e: k,
              QZeLnSM0X: A,
              FQrrRv3Xn: be,
              KoyyAx70J: xe,
              tWgYBJMqd: j,
              u5H2OkbTf: Ce,
              ...N
            } = Wc(e),
            [we, P] = Uc(m, h),
            [Te, F] = Uc(_, v),
            [Ee, I] = Uc(x, S),
            [De, Oe] = Uc(C, w),
            [ke, L] = Uc(ae, oe),
            [Ae, je] = Uc(se, ce),
            [Me, R] = Uc(le, ue),
            [Ne, Pe] = Uc(fe, pe),
            {
              baseVariant: Fe,
              classNames: Ie,
              clearLoadingGesture: Le,
              gestureHandlers: Re,
              gestureVariant: ze,
              isLoading: Be,
              setGestureState: Ve,
              setVariant: He,
              variants: Ue,
            } = he({
              cycleOrder: Ac,
              defaultVariant: `NJ2mYgZiy`,
              ref: i,
              variant: p,
              variantClassNames: Mc,
            }),
            We = Gc(e, Ue),
            Ge = M(jc);
          return f(ne, {
            id: d ?? a,
            children: f(Hc, {
              animate: Ue,
              initial: !1,
              children: f(Bc, {
                value: Nc,
                children: f(b.div, {
                  ...N,
                  ...Re,
                  className: M(Ge, `framer-1qbd4kt`, u, Ie),
                  "data-framer-name": `Desktop`,
                  layoutDependency: We,
                  layoutId: `NJ2mYgZiy`,
                  ref: i,
                  style: { ...l },
                  ...Dc(
                    {
                      TpR7tx10J: { "data-framer-name": `Tablet` },
                      yEk2784iI: { "data-framer-name": `Phone` },
                    },
                    Fe,
                    ze,
                  ),
                  children: g(b.div, {
                    className: `framer-j600ed`,
                    "data-framer-name": `Card Wrap`,
                    layoutDependency: We,
                    layoutId: `GnHm1vzvG`,
                    style: { scale: 1 },
                    variants: {
                      TpR7tx10J: { scale: 0.9 },
                      yEk2784iI: { scale: 1 },
                    },
                    children: [
                      f(Se, {
                        height: 400,
                        y:
                          (c?.y || 0) +
                          (30 + ((c?.height || 800) - 60 - 400) / 2) +
                          -52,
                        ...Dc(
                          {
                            yEk2784iI: {
                              y:
                                (c?.y || 0) +
                                (30 + ((c?.height || 1340) - 60 - 1280) / 2) +
                                0 +
                                880,
                            },
                          },
                          Fe,
                          ze,
                        ),
                        children: f(kc, {
                          __framer__loop: Fc,
                          __framer__loopEffectEnabled: !0,
                          __framer__loopPauseOffscreen: !0,
                          __framer__loopRepeatDelay: 1,
                          __framer__loopRepeatType: `mirror`,
                          __framer__loopTransition: Pc,
                          __framer__spring: {
                            damping: 60,
                            delay: 0,
                            duration: 0.3,
                            ease: [0.44, 0, 0.56, 1],
                            mass: 1,
                            stagger: 0,
                            stiffness: 500,
                            type: `spring`,
                          },
                          __framer__styleTransformEffectEnabled: !0,
                          __framer__transformTargets: [
                            {
                              target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 0.8,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: -20,
                              },
                            },
                            {
                              ref: be,
                              target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 0.9,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 270,
                              },
                            },
                            {
                              ref: xe,
                              target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 230,
                              },
                            },
                            {
                              ref: j,
                              target: {
                                opacity: 1,
                                rotate: -2,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 92,
                              },
                            },
                            {
                              ref: Ce,
                              target: {
                                opacity: 1,
                                rotate: -7,
                                rotateX: 0,
                                rotateY: -180,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 610,
                                y: 52,
                              },
                            },
                          ],
                          __framer__transformTrigger: `onScrollTarget`,
                          __framer__transformViewportThreshold: 1,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: `framer-8xdv0f-container`,
                          "data-framer-name": `Card Wrap 3`,
                          layoutDependency: We,
                          layoutId: `bY4P1sx3I-container`,
                          name: `Card Wrap 3`,
                          nodeId: `bY4P1sx3I`,
                          rendersWithMotion: !0,
                          scopeId: `wKkGQAcuS`,
                          style: { originX: 0, rotate: 7 },
                          variants: {
                            yEk2784iI: { originX: void 0, rotate: -2 },
                          },
                          ...Dc(
                            {
                              TpR7tx10J: {
                                __framer__transformTargets: [
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 0.8,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: -20,
                                    },
                                  },
                                  {
                                    ref: be,
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 0.9,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 270,
                                    },
                                  },
                                  {
                                    ref: xe,
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 230,
                                    },
                                  },
                                  {
                                    ref: j,
                                    target: {
                                      opacity: 1,
                                      rotate: -2,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 92,
                                    },
                                  },
                                  {
                                    ref: Ce,
                                    target: {
                                      opacity: 1,
                                      rotate: -7,
                                      rotateX: 0,
                                      rotateY: -180,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 550,
                                      y: 52,
                                    },
                                  },
                                ],
                              },
                              yEk2784iI: {
                                __framer__loopEffectEnabled: void 0,
                                __framer__styleTransformEffectEnabled: void 0,
                              },
                            },
                            Fe,
                            ze,
                          ),
                          children: f(Tc, {
                            bHAFaIL6x: ke,
                            ChqSxOsiW: Ee,
                            E3heAdqO0: Ic(D),
                            F5dxZeWeY: Ic(y),
                            fALVpL9rl: we,
                            G8Lsht7iZ: Te,
                            gN53GihA5: te,
                            H9QNOLhMo: Ne,
                            height: `100%`,
                            IBaWzeI9Z: Ae,
                            id: `bY4P1sx3I`,
                            layoutId: `bY4P1sx3I`,
                            n3_0W7muj: De,
                            name: `Card Wrap 3`,
                            onbHAFaIL6xChange: L,
                            onChqSxOsiWChange: I,
                            onfALVpL9rlChange: P,
                            onG8Lsht7iZChange: F,
                            onH9QNOLhMoChange: Pe,
                            onIBaWzeI9ZChange: je,
                            onn3_0W7mujChange: Oe,
                            onum_tX3Ry9Change: R,
                            qYGkNGCLz: Ic(T),
                            STJFnlkMo: de,
                            um_tX3Ry9: Me,
                            V7HSEOkmb: E,
                            variant: Lc(`iSoBmCH55`),
                            width: `100%`,
                            ...Dc(
                              { yEk2784iI: { variant: Lc(`cSK_6_6ak`) } },
                              Fe,
                              ze,
                            ),
                          }),
                        }),
                      }),
                      f(Se, {
                        height: 400,
                        y:
                          (c?.y || 0) +
                          (30 + ((c?.height || 800) - 60 - 400) / 2) +
                          0,
                        ...Dc(
                          {
                            yEk2784iI: {
                              y:
                                (c?.y || 0) +
                                (30 + ((c?.height || 1340) - 60 - 1280) / 2) +
                                0 +
                                440,
                            },
                          },
                          Fe,
                          ze,
                        ),
                        children: f(kc, {
                          __framer__loop: Rc,
                          __framer__loopEffectEnabled: !0,
                          __framer__loopPauseOffscreen: !0,
                          __framer__loopRepeatDelay: 0.25,
                          __framer__loopRepeatType: `mirror`,
                          __framer__loopTransition: Pc,
                          __framer__spring: {
                            bounce: 0.2,
                            damping: 60,
                            delay: 0,
                            duration: 0.3,
                            durationBasedSpring: !0,
                            ease: [0.44, 0, 0.56, 1],
                            mass: 1,
                            stagger: 0,
                            stiffness: 500,
                            type: `spring`,
                          },
                          __framer__styleTransformEffectEnabled: !0,
                          __framer__transformTargets: [
                            {
                              target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 0.8,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 0,
                              },
                            },
                            {
                              ref: ve,
                              target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 0.9,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 210,
                              },
                            },
                            {
                              ref: ye,
                              target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 140,
                              },
                            },
                            {
                              ref: k,
                              target: {
                                opacity: 1,
                                rotate: -2,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 20,
                              },
                            },
                            {
                              ref: A,
                              target: {
                                opacity: 1,
                                rotate: -3,
                                rotateX: 0,
                                rotateY: -180,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 290,
                                y: 0,
                              },
                            },
                          ],
                          __framer__transformTrigger: `onScrollTarget`,
                          __framer__transformViewportThreshold: 1,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: `framer-jxagyo-container`,
                          "data-framer-name": `Card Wrap 2`,
                          layoutDependency: We,
                          layoutId: `oFZ_l4b8b-container`,
                          name: `Card Wrap 2`,
                          nodeId: `oFZ_l4b8b`,
                          rendersWithMotion: !0,
                          scopeId: `wKkGQAcuS`,
                          style: { originX: 0, rotate: 3, z: 1 },
                          variants: {
                            yEk2784iI: { originX: void 0, rotate: 2 },
                          },
                          ...Dc(
                            {
                              yEk2784iI: {
                                __framer__loopEffectEnabled: void 0,
                                __framer__styleTransformEffectEnabled: void 0,
                              },
                            },
                            Fe,
                            ze,
                          ),
                          children: f(Tc, {
                            bHAFaIL6x: ke,
                            ChqSxOsiW: Ee,
                            E3heAdqO0: Ic(D),
                            F5dxZeWeY: Ic(y),
                            fALVpL9rl: we,
                            G8Lsht7iZ: Te,
                            gN53GihA5: te,
                            H9QNOLhMo: Ne,
                            height: `100%`,
                            IBaWzeI9Z: Ae,
                            id: `oFZ_l4b8b`,
                            layoutId: `oFZ_l4b8b`,
                            n3_0W7muj: De,
                            name: `Card Wrap 2`,
                            onbHAFaIL6xChange: L,
                            onChqSxOsiWChange: I,
                            onfALVpL9rlChange: P,
                            onG8Lsht7iZChange: F,
                            onH9QNOLhMoChange: Pe,
                            onIBaWzeI9ZChange: je,
                            onn3_0W7mujChange: Oe,
                            onum_tX3Ry9Change: R,
                            qYGkNGCLz: Ic(T),
                            STJFnlkMo: de,
                            um_tX3Ry9: Me,
                            V7HSEOkmb: E,
                            variant: Lc(`NwXfoNbge`),
                            width: `100%`,
                            ...Dc(
                              { yEk2784iI: { variant: Lc(`qHGk0G_bg`) } },
                              Fe,
                              ze,
                            ),
                          }),
                        }),
                      }),
                      f(Se, {
                        height: 400,
                        y:
                          (c?.y || 0) +
                          (30 + ((c?.height || 800) - 60 - 400) / 2) +
                          400 -
                          340,
                        ...Dc(
                          {
                            yEk2784iI: {
                              y:
                                (c?.y || 0) +
                                (30 + ((c?.height || 1340) - 60 - 1280) / 2) +
                                0 +
                                0,
                            },
                          },
                          Fe,
                          ze,
                        ),
                        children: f(kc, {
                          __framer__loop: zc,
                          __framer__loopEffectEnabled: !0,
                          __framer__loopPauseOffscreen: !0,
                          __framer__loopRepeatDelay: 0,
                          __framer__loopRepeatType: `mirror`,
                          __framer__loopTransition: Pc,
                          __framer__spring: {
                            damping: 60,
                            delay: 0,
                            duration: 0.3,
                            ease: [0.44, 0, 0.56, 1],
                            mass: 1,
                            stagger: 0,
                            stiffness: 500,
                            type: `spring`,
                          },
                          __framer__styleTransformEffectEnabled: !0,
                          __framer__transformTargets: [
                            {
                              target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 0.8,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 20,
                              },
                            },
                            {
                              ref: me,
                              target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 0.9,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 170,
                              },
                            },
                            {
                              ref: O,
                              target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 70,
                              },
                            },
                            {
                              ref: ge,
                              target: {
                                opacity: 1,
                                rotate: 1,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: -30,
                              },
                            },
                            {
                              ref: _e,
                              target: {
                                opacity: 1,
                                rotate: 4,
                                rotateX: 0,
                                rotateY: -180,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: -30,
                                y: -60,
                              },
                            },
                          ],
                          __framer__transformTrigger: `onScrollTarget`,
                          __framer__transformViewportThreshold: 1,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: `framer-12dkhc1-container`,
                          "data-framer-name": `Card Wrap 1`,
                          layoutDependency: We,
                          layoutId: `xVo6_Bqdk-container`,
                          name: `Card Wrap 1`,
                          nodeId: `xVo6_Bqdk`,
                          rendersWithMotion: !0,
                          scopeId: `wKkGQAcuS`,
                          style: { originX: 0, rotate: -4, z: 2 },
                          variants: {
                            yEk2784iI: { originX: void 0, rotate: -3 },
                          },
                          ...Dc(
                            {
                              TpR7tx10J: {
                                __framer__transformTargets: [
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 0.8,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 20,
                                    },
                                  },
                                  {
                                    ref: me,
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 0.9,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 170,
                                    },
                                  },
                                  {
                                    ref: O,
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 70,
                                    },
                                  },
                                  {
                                    ref: ge,
                                    target: {
                                      opacity: 1,
                                      rotate: 1,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: -30,
                                    },
                                  },
                                  {
                                    ref: _e,
                                    target: {
                                      opacity: 1,
                                      rotate: 4,
                                      rotateX: 0,
                                      rotateY: -180,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 30,
                                      y: -60,
                                    },
                                  },
                                ],
                              },
                              yEk2784iI: {
                                __framer__loopEffectEnabled: void 0,
                                __framer__styleTransformEffectEnabled: void 0,
                              },
                            },
                            Fe,
                            ze,
                          ),
                          children: f(Tc, {
                            bHAFaIL6x: ke,
                            ChqSxOsiW: Ee,
                            E3heAdqO0: Ic(D),
                            F5dxZeWeY: Ic(y),
                            fALVpL9rl: we,
                            G8Lsht7iZ: Te,
                            gN53GihA5: te,
                            H9QNOLhMo: Ne,
                            height: `100%`,
                            IBaWzeI9Z: Ae,
                            id: `xVo6_Bqdk`,
                            layoutId: `xVo6_Bqdk`,
                            n3_0W7muj: De,
                            name: `Card Wrap 1`,
                            onbHAFaIL6xChange: L,
                            onChqSxOsiWChange: I,
                            onfALVpL9rlChange: P,
                            onG8Lsht7iZChange: F,
                            onH9QNOLhMoChange: Pe,
                            onIBaWzeI9ZChange: je,
                            onn3_0W7mujChange: Oe,
                            onum_tX3Ry9Change: R,
                            qYGkNGCLz: Ic(T),
                            STJFnlkMo: de,
                            um_tX3Ry9: Me,
                            V7HSEOkmb: E,
                            variant: Lc(`jtoJiMks3`),
                            width: `100%`,
                            ...Dc(
                              { yEk2784iI: { variant: Lc(`LrkCYv9bP`) } },
                              Fe,
                              ze,
                            ),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-gxEXg.framer-1bm6dzr, .framer-gxEXg .framer-1bm6dzr { display: block; }`,
          `.framer-gxEXg.framer-1qbd4kt { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; min-height: calc(var(--framer-viewport-height, 100vh) * 1); overflow: visible; padding: 30px 20px 30px 20px; position: relative; width: 1200px; }`,
          `.framer-gxEXg .framer-j600ed { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 52px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; transform-style: preserve-3d; width: min-content; }`,
          `.framer-gxEXg .framer-8xdv0f-container { flex: none; height: auto; position: absolute; right: -59px; top: -52px; transform-style: preserve-3d; width: auto; z-index: 1; }`,
          `.framer-gxEXg .framer-jxagyo-container { flex: none; height: auto; position: relative; transform-style: preserve-3d; width: auto; z-index: 2; }`,
          `.framer-gxEXg .framer-12dkhc1-container { bottom: -60px; flex: none; height: auto; left: -60px; position: absolute; transform-style: preserve-3d; width: auto; z-index: 3; }`,
          `.framer-gxEXg.framer-v-151ums2.framer-1qbd4kt { width: 810px; }`,
          `.framer-gxEXg.framer-v-qq7o9z.framer-1qbd4kt { width: 390px; }`,
          `.framer-gxEXg.framer-v-qq7o9z .framer-j600ed { flex-direction: column; gap: 40px; }`,
          `.framer-gxEXg.framer-v-qq7o9z .framer-8xdv0f-container { order: 2; position: relative; right: unset; top: unset; }`,
          `.framer-gxEXg.framer-v-qq7o9z .framer-jxagyo-container { order: 1; }`,
          `.framer-gxEXg.framer-v-qq7o9z .framer-12dkhc1-container { bottom: unset; left: unset; order: 0; position: relative; }`,
        ],
        `framer-gxEXg`,
      )),
      (qc = Kc),
      (Kc.displayName = `Scroll Flip Card`),
      (Kc.defaultProps = { height: 800, width: 1200 }),
      N(Kc, {
        variant: {
          options: [`NJ2mYgZiy`, `TpR7tx10J`, `yEk2784iI`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: k.Enum,
        },
        TkbnSs_QY: {
          defaultValue: `Branding & Identity`,
          displayTextArea: !1,
          title: `Service Name 1`,
          type: k.String,
        },
        onTkbnSs_QYChange: { changes: `TkbnSs_QY`, type: k.ChangeHandler },
        YsJaFxlxJ: {
          defaultValue: `Build distinctive brands through strategy, identity, and messaging that create trust and meaningful audience connections now.`,
          displayTextArea: !0,
          title: `Service Content 1`,
          type: k.String,
        },
        onYsJaFxlxJChange: { changes: `YsJaFxlxJ`, type: k.ChangeHandler },
        IjTSo9v8a: {
          __defaultAssetReference: `data:framer/asset-reference,tUkDeSIXGHUoQm8mfXzM7PvqB8Q.png?originalFilename=image.png&width=686&height=755`,
          title: `Image 1`,
          type: k.ResponsiveImage,
        },
        q5JoCbVah: {
          description: `_________________`,
          title: `Link 1`,
          type: k.Link,
        },
        NQUvPF0Ed: {
          defaultValue: `Web Design & Dev`,
          displayTextArea: !1,
          title: `Service Name 2`,
          type: k.String,
        },
        onNQUvPF0EdChange: { changes: `NQUvPF0Ed`, type: k.ChangeHandler },
        G07aaR7mP: {
          defaultValue: `Design and develop modern websites with seamless experiences that engage visitors and turn interactions into growth at scale.`,
          displayTextArea: !0,
          title: `Service Content 2`,
          type: k.String,
        },
        onG07aaR7mPChange: { changes: `G07aaR7mP`, type: k.ChangeHandler },
        kVkM2Vize: {
          __defaultAssetReference: `data:framer/asset-reference,A4kZ4JKrKRQB47BZsV6CXyJCwA.png?originalFilename=QmS2HmAfw6QG5qBNhy42PAumHfquXv2fBTa8MjvzetLDNy%3Fauto%3Dformat%26w%3D1200.png&width=1200&height=673`,
          title: `Image 2`,
          type: k.ResponsiveImage,
        },
        c9JDpgSaj: {
          description: `_________________`,
          title: `Link 2`,
          type: k.Link,
        },
        bT7VFLkwN: {
          defaultValue: `Creative Production`,
          displayTextArea: !1,
          title: `Service Name 3`,
          type: k.String,
        },
        onbT7VFLkwNChange: { changes: `bT7VFLkwN`, type: k.ChangeHandler },
        tUK9QKRfm: {
          defaultValue: `Create impactful visual content through storytelling and production that captures attention across every platform every day.`,
          displayTextArea: !0,
          title: `Service Content 3`,
          type: k.String,
        },
        ontUK9QKRfmChange: { changes: `tUK9QKRfm`, type: k.ChangeHandler },
        MAolvu_Uz: {
          __defaultAssetReference: `data:framer/asset-reference,aX7OzhXTeeu9KoHilGJmEuZTbY.png?originalFilename=QmQ1PTpuFGXa3diTad4giqm9vKjucPji4GyEz8LM9ot9pn%3Fauto%3Dformat%26w%3D1200.png&width=1200&height=799`,
          title: `Image 3`,
          type: k.ResponsiveImage,
        },
        lb_NSLyCc: {
          defaultValue: `Know More`,
          displayTextArea: !1,
          title: `CTA Button`,
          type: k.String,
        },
        onlb_NSLyCcChange: { changes: `lb_NSLyCc`, type: k.ChangeHandler },
        jbnk6z7au: {
          description: `_________________`,
          title: `Link 3`,
          type: k.Link,
        },
        gyWOQ3Y5L: {
          defaultValue: !0,
          description: `_________________

Made with ❤️ by [Soyeb](https://framer.link/project)`,
          title: `New Tab - Link Open`,
          type: k.Boolean,
        },
        ongyWOQ3Y5LChange: { changes: `gyWOQ3Y5L`, type: k.ChangeHandler },
        WrxRQnwtW: { title: `1 - Scroll Section 1`, type: k.ScrollSectionRef },
        kmAs_AL71: { title: `1 - Scroll Section 2`, type: k.ScrollSectionRef },
        ry4V6X50J: { title: `1 - Scroll Section 3`, type: k.ScrollSectionRef },
        uJ3k_3FrD: { title: `1 - Scroll Section 4`, type: k.ScrollSectionRef },
        I1EwIDyNd: { title: `2 - Scroll Section 1`, type: k.ScrollSectionRef },
        qk_7shWiw: { title: `2 - Scroll Section 2`, type: k.ScrollSectionRef },
        yz6Azgs5e: { title: `2 - Scroll Section 3`, type: k.ScrollSectionRef },
        QZeLnSM0X: { title: `2 - Scroll Section 4`, type: k.ScrollSectionRef },
        FQrrRv3Xn: { title: `3 - Scroll Section 1`, type: k.ScrollSectionRef },
        KoyyAx70J: { title: `3 - Scroll Section 2`, type: k.ScrollSectionRef },
        tWgYBJMqd: { title: `3 - Scroll Section 3`, type: k.ScrollSectionRef },
        u5H2OkbTf: { title: `3 - Scroll Section 4`, type: k.ScrollSectionRef },
      }),
      le(Kc, [{ explicitInter: !0, fonts: [] }, ...Oc], {
        supportsExplicitInterCodegen: !0,
      }),
      (Kc.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([E(Tc, {}, t)])),
      }));
  });
function Yc(e, t) {
  return {
    description: `Scroll Flip Card Framer Component - Made with Framer`,
    robots: `max-image-preview:large`,
    title: `Scroll Flip Card - Framer Component`,
  };
}
var Xc = e(() => {});
function Zc(e, t) {
  return {
    breakpoints: [
      { hash: `72rtr7`, mediaQuery: `(min-width: 1200px)` },
      {
        hash: `1fbucps`,
        mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)`,
      },
      { hash: `o0xdyy`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: Yc(e, t).description,
    elements: {
      egT7cUq_L: `backtocenter3`,
      Ep4tVzs7Y: `littleup3`,
      fC9WMYolh: `flip3`,
      H2ldHO8cr: `first-trigger`,
      hYV89UA9v: `flip2`,
      jw6Yg7F0L: `flip1`,
      LBD2Vk6BI: `littleup2`,
      LNisK4opJ: `backtocenter2`,
      nr_nU1Tha: `littleUp1`,
      YhHFjKzkP: `backToCenter1`,
    },
    robots: `max-image-preview:large`,
    serializationId: `framer-nKSbz`,
    title: Yc(e, t).title || `Home`,
    viewport: `width=device-width`,
  };
}
var Qc,
  $c,
  el = e(() => {
    (Xc(),
      (Qc = 1),
      ($c = {
        exports: {
          metadataVersion: {
            type: `variable`,
            annotations: { framerContractVersion: `1` },
          },
          default: {
            type: `function`,
            annotations: { framerContractVersion: `1` },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }),
  tl,
  nl,
  rl,
  il,
  al,
  ol,
  sl,
  cl,
  ll,
  ul,
  dl,
  fl,
  pl,
  ml,
  hl,
  gl,
  _l,
  vl,
  yl,
  bl = e(() => {
    (_(),
      C(),
      S(),
      n(),
      Ko(),
      gs(),
      Jc(),
      el(),
      (tl = xe(se)),
      (nl = O(qc)),
      (rl = O(Go)),
      (il = O(hs)),
      (al = {
        mgZWEfXZV: `(min-width: 810px) and (max-width: 1199.98px)`,
        WQLkyLRf1: `(min-width: 1200px)`,
        y01nTAaQS: `(max-width: 809.98px)`,
      }),
      (ol = () => typeof document < `u`),
      (sl = []),
      (cl = `framer-nKSbz`),
      (ll = {
        mgZWEfXZV: `framer-v-1fbucps`,
        WQLkyLRf1: `framer-v-72rtr7`,
        y01nTAaQS: `framer-v-o0xdyy`,
      }),
      (ul = (e, t, n) => (e && t ? `position` : n)),
      (dl = {
        delay: 0,
        duration: 1,
        ease: [0.67, 0.18, 0.32, 1.16],
        type: `tween`,
      }),
      (fl = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 10,
      }),
      (pl = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (ml = { Desktop: `WQLkyLRf1`, Phone: `y01nTAaQS`, Tablet: `mgZWEfXZV` }),
      (hl = ({ value: e }) =>
        T()
          ? null
          : f(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (gl = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: ml[r.variant] ?? r.variant ?? `WQLkyLRf1`,
      })),
      (_l = D(
        m(function (e, n) {
          let i = r(null),
            a = n ?? i,
            s = ee(),
            { activeLocale: c, setLocale: l } = re(),
            u = ie(),
            { style: d, className: p, layoutId: m, variant: _, ...v } = gl(e);
          pe(t(() => Zc({}, c), [c]));
          let [y, te] = oe(_, al, !1),
            S = M(cl),
            C = h(ce)?.isLayoutTemplate,
            w = ul(C, !!h(x)?.transition?.layout),
            T = r(null),
            E = r(null),
            D = r(null),
            le = r(null),
            ue = r(null),
            de = r(null),
            fe = r(null),
            me = r(null),
            he = r(null),
            O = r(null),
            ve = () => (ol() ? y !== `y01nTAaQS` : !0),
            ye = j(`H2ldHO8cr`),
            k = j(`nr_nU1Tha`),
            A = j(`LBD2Vk6BI`),
            be = j(`Ep4tVzs7Y`),
            xe = j(`YhHFjKzkP`),
            Ce = j(`LNisK4opJ`),
            N = j(`egT7cUq_L`),
            we = j(`jw6Yg7F0L`),
            P = j(`hYV89UA9v`),
            Te = j(`fC9WMYolh`);
          return (
            ae({}),
            f(ce.Provider, {
              value: {
                activeVariantId: y,
                humanReadableVariantMap: ml,
                primaryVariantId: `WQLkyLRf1`,
                variantClassNames: ll,
              },
              children: g(ne, {
                id: m ?? s,
                children: [
                  f(hl, {
                    value: `html body { background: rgb(250, 250, 250); }`,
                  }),
                  g(b.div, {
                    ...v,
                    className: M(S, `framer-72rtr7`, p),
                    ref: a,
                    style: { ...d },
                    children: [
                      f(b.div, {
                        className: `framer-ndyeas`,
                        "data-framer-name": `Section - Hero`,
                        layout: w,
                        children: g(`div`, {
                          className: `framer-1umgldr`,
                          "data-framer-name": `Scroll Down Text`,
                          children: [
                            f(tl, {
                              __framer__loop: fl,
                              __framer__loopEffectEnabled: !0,
                              __framer__loopPauseOffscreen: !0,
                              __framer__loopRepeatDelay: 0,
                              __framer__loopRepeatType: `mirror`,
                              __framer__loopTransition: dl,
                              __fromCanvasComponent: !0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              children: f(o, {
                                children: f(`p`, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                    "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 3)`,
                                    "--framer-font-weight": `500`,
                                    "--framer-letter-spacing": `-0.05em`,
                                    "--framer-line-height": `1.1em`,
                                    "--framer-text-alignment": `center`,
                                  },
                                  children: `↓`,
                                }),
                              }),
                              className: `framer-1brb9bz`,
                              "data-framer-name": `Arrow`,
                              fonts: [`Inter-Medium`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            f(se, {
                              __fromCanvasComponent: !0,
                              children: f(o, {
                                children: f(`p`, {
                                  dir: `auto`,
                                  style: {
                                    "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 3)`,
                                    "--framer-letter-spacing": `-0.05em`,
                                    "--framer-line-height": `1.1em`,
                                    "--framer-text-alignment": `center`,
                                  },
                                  children: `Scroll Down`,
                                }),
                              }),
                              className: `framer-1ik32cv`,
                              "data-framer-name": `Text`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            f(tl, {
                              __framer__loop: fl,
                              __framer__loopEffectEnabled: !0,
                              __framer__loopPauseOffscreen: !0,
                              __framer__loopRepeatDelay: 0,
                              __framer__loopRepeatType: `mirror`,
                              __framer__loopTransition: dl,
                              __fromCanvasComponent: !0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              children: f(o, {
                                children: f(`p`, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                    "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 3)`,
                                    "--framer-font-weight": `500`,
                                    "--framer-letter-spacing": `-0.05em`,
                                    "--framer-line-height": `1em`,
                                    "--framer-text-alignment": `center`,
                                  },
                                  children: `↓`,
                                }),
                              }),
                              className: `framer-edtrym`,
                              "data-framer-name": `Arrow`,
                              fonts: [`Inter-Medium`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      }),
                      g(b.section, {
                        className: `framer-cnnx81`,
                        "data-framer-name": `Section - Main`,
                        layout: w,
                        children: [
                          f(Se, {
                            height: 800,
                            width: u?.width || `100vw`,
                            y: (u?.y || 0) + 0 + 800 + 0 + 0,
                            children: f(_e, {
                              className: `framer-1ma8w6u-container`,
                              nodeId: `wackGZxCb`,
                              rendersWithMotion: !0,
                              scopeId: `augiA20Il`,
                              style: { transformPerspective: 1e3 },
                              children: f(ge, {
                                breakpoint: y,
                                overrides: {
                                  mgZWEfXZV: { variant: pl(`TpR7tx10J`) },
                                  y01nTAaQS: { variant: pl(`yEk2784iI`) },
                                },
                                children: f(qc, {
                                  bT7VFLkwN: `Creative Production`,
                                  c9JDpgSaj: `https://framer.link/preview`,
                                  FQrrRv3Xn: T,
                                  G07aaR7mP: `Design and develop modern websites with seamless experiences that engage visitors and turn interactions into growth at scale.`,
                                  gyWOQ3Y5L: !0,
                                  height: `100%`,
                                  I1EwIDyNd: T,
                                  id: `wackGZxCb`,
                                  jbnk6z7au: `https://framer.link/preview`,
                                  kmAs_AL71: E,
                                  KoyyAx70J: me,
                                  layoutId: `wackGZxCb`,
                                  lb_NSLyCc: `Know More`,
                                  NQUvPF0Ed: `Web Design & Dev`,
                                  q5JoCbVah: `https://framer.link/preview`,
                                  qk_7shWiw: ue,
                                  QZeLnSM0X: fe,
                                  ry4V6X50J: D,
                                  style: { width: `100%` },
                                  TkbnSs_QY: `Branding & Identity`,
                                  tUK9QKRfm: `Create impactful visual content through storytelling and production that captures attention across every platform every day.`,
                                  tWgYBJMqd: he,
                                  u5H2OkbTf: O,
                                  uJ3k_3FrD: le,
                                  variant: pl(`NJ2mYgZiy`),
                                  width: `100%`,
                                  WrxRQnwtW: T,
                                  YsJaFxlxJ: `Build distinctive brands through strategy, identity, and messaging that create trust and meaningful audience connections now.`,
                                  yz6Azgs5e: de,
                                }),
                              }),
                            }),
                          }),
                          ve() &&
                            g(`div`, {
                              className: `framer-tpbeob hidden-o0xdyy`,
                              "data-framer-name": `Triggers`,
                              children: [
                                f(`div`, {
                                  className: `framer-b0z8jy`,
                                  "data-framer-name": `First Trigger`,
                                  id: ye,
                                  ref: T,
                                }),
                                g(`div`, {
                                  className: `framer-ojm8zy`,
                                  "data-framer-name": `Second Triggers Wrap`,
                                  children: [
                                    f(`div`, {
                                      className: `framer-1x7gugo`,
                                      "data-framer-name": `littleUp1`,
                                      id: k,
                                      ref: E,
                                    }),
                                    f(`div`, {
                                      className: `framer-dmf241`,
                                      "data-framer-name": `littleUp2`,
                                      id: A,
                                      ref: ue,
                                    }),
                                    f(`div`, {
                                      className: `framer-1ylz5oe`,
                                      "data-framer-name": `littleUp3`,
                                      id: be,
                                      ref: me,
                                    }),
                                  ],
                                }),
                                g(`div`, {
                                  className: `framer-m1q33d`,
                                  "data-framer-name": `Third Triggers Wrap`,
                                  children: [
                                    f(`div`, {
                                      className: `framer-5kv2ep`,
                                      "data-framer-name": `backToCenter1`,
                                      id: xe,
                                      ref: D,
                                    }),
                                    f(`div`, {
                                      className: `framer-1x8a6kp`,
                                      "data-framer-name": `backToCenter2`,
                                      id: Ce,
                                      ref: de,
                                    }),
                                    f(`div`, {
                                      className: `framer-1u6awjt`,
                                      "data-framer-name": `backToCenter3`,
                                      id: N,
                                      ref: he,
                                    }),
                                  ],
                                }),
                                g(`div`, {
                                  className: `framer-1oaa3sx`,
                                  "data-framer-name": `Forth Triggers Wrap`,
                                  children: [
                                    f(`div`, {
                                      className: `framer-jxbf6p`,
                                      "data-framer-name": `Flip1`,
                                      id: we,
                                      ref: le,
                                    }),
                                    f(`div`, {
                                      className: `framer-pokatd`,
                                      "data-framer-name": `Flip2`,
                                      id: P,
                                      ref: fe,
                                    }),
                                    f(`div`, {
                                      className: `framer-1lsj2ka`,
                                      "data-framer-name": `Flip3`,
                                      id: Te,
                                      ref: O,
                                    }),
                                  ],
                                }),
                                f(`div`, {
                                  className: `framer-lo3tqp`,
                                  "data-framer-name": `Spacer`,
                                }),
                              ],
                            }),
                        ],
                      }),
                      f(b.div, {
                        className: `framer-1gdvrqb`,
                        "data-framer-name": `Section - End`,
                        layout: w,
                        children: f(se, {
                          __fromCanvasComponent: !0,
                          children: f(o, {
                            children: f(`p`, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `RlI7SW50ZXJEaXNwbGF5LU1lZGl1bQ==`,
                                "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 3)`,
                                "--framer-font-weight": `500`,
                                "--framer-letter-spacing": `-0.03em`,
                              },
                              children: `The End`,
                            }),
                          }),
                          className: `framer-pw7xgv`,
                          fonts: [`FR;InterDisplay-Medium`],
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      }),
                      f(Se, {
                        children: f(_e, {
                          className: `framer-2bwvgl-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layout: w,
                          nodeId: `LFPKUj1W8`,
                          scopeId: `augiA20Il`,
                          children: f(Go, {
                            height: `100%`,
                            id: `LFPKUj1W8`,
                            infinite: !1,
                            intensity: 20,
                            layoutId: `LFPKUj1W8`,
                            orientation: `vertical`,
                            smooth: !0,
                            width: `100%`,
                          }),
                        }),
                      }),
                      f(Se, {
                        height: 33,
                        y: (u?.y || 0) + 20,
                        children: f(_e, {
                          className: `framer-ed12ey-container`,
                          layout: w,
                          nodeId: `BMY6mwxEg`,
                          scopeId: `augiA20Il`,
                          children: f(hs, {
                            height: `100%`,
                            id: `BMY6mwxEg`,
                            layoutId: `BMY6mwxEg`,
                            variant: pl(`WupFptG3Q`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    ],
                  }),
                  f(`div`, { id: `overlay` }),
                ],
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-nKSbz.framer-lux5qc, .framer-nKSbz .framer-lux5qc { display: block; }`,
          `.framer-nKSbz.framer-72rtr7 { align-content: center; align-items: center; background-color: #fafafa; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
          `.framer-nKSbz .framer-ndyeas { align-content: center; align-items: center; background: linear-gradient(180deg, #dbe7ff 0%, rgb(247, 247, 247) 100%); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 80vh; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
          `.framer-nKSbz .framer-1umgldr { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; max-width: 800px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-nKSbz .framer-1brb9bz, .framer-nKSbz .framer-1ik32cv, .framer-nKSbz .framer-edtrym, .framer-nKSbz .framer-pw7xgv { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-nKSbz .framer-cnnx81 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-nKSbz .framer-1ma8w6u-container { flex: none; height: auto; position: sticky; top: 0px; transform-style: preserve-3d; width: 100%; z-index: 2; }`,
          `.framer-nKSbz .framer-tpbeob { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; z-index: 0; }`,
          `.framer-nKSbz .framer-b0z8jy { flex: none; height: 75vh; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
          `.framer-nKSbz .framer-ojm8zy, .framer-nKSbz .framer-1oaa3sx { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-nKSbz .framer-1x7gugo { flex: 1 0 0px; height: 50vh; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; }`,
          `.framer-nKSbz .framer-dmf241 { flex: 1 0 0px; height: 30vh; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; }`,
          `.framer-nKSbz .framer-1ylz5oe { flex: 1 0 0px; height: 18.25vh; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; }`,
          `.framer-nKSbz .framer-m1q33d { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-nKSbz .framer-5kv2ep { flex: 1 0 0px; gap: 10px; height: 27.26027724665392vh; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; }`,
          `.framer-nKSbz .framer-1x8a6kp { flex: 1 0 0px; gap: 10px; height: 33.875vh; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; }`,
          `.framer-nKSbz .framer-1u6awjt { flex: 1 0 0px; gap: 10px; height: 37.75vh; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; }`,
          `.framer-nKSbz .framer-jxbf6p { flex: none; gap: 10px; height: 74.125vh; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 400px; }`,
          `.framer-nKSbz .framer-pokatd { flex: none; gap: 10px; height: 60.106087470449175vh; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 400px; }`,
          `.framer-nKSbz .framer-1lsj2ka { flex: none; gap: 10px; height: 46.75vh; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 400px; }`,
          `.framer-nKSbz .framer-lo3tqp { flex: none; gap: 0px; height: 50vh; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
          `.framer-nKSbz .framer-1gdvrqb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100vh; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-nKSbz .framer-2bwvgl-container { flex: none; height: auto; left: 0px; position: absolute; top: 0px; width: auto; z-index: 1; }`,
          `.framer-nKSbz .framer-ed12ey-container { flex: none; height: auto; left: 20px; position: absolute; top: 20px; width: auto; z-index: 1; }`,
          `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-nKSbz.framer-72rtr7 { width: 810px; }}`,
          `@media (max-width: 809.98px) { .framer-nKSbz.framer-72rtr7 { width: 390px; }}`,
        ],
        `framer-nKSbz`,
      )),
      (vl = _l),
      (_l.displayName = `Home`),
      (_l.defaultProps = { height: 4535, width: 1200 }),
      le(
        _l,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/UjlFhCnUjxhNfep4oYBPqnEssyo.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/ePuN3mCjzajIHnyCdvKBFiZkyY0.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/V3j1L0o5vPFKe26Sw4HcpXCfHo.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/F3kdpd2N0cToWV5huaZjjgM.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/0iDmxkizU9goZoclqIqsV5rvETU.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/r0mv3NegmA0akcQsNFotG32Las.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/iwWTDc49ENF2tCHbqlNARXw6Ug.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/Ii21jnSJkulBKsHHXKlapi7fv9w.woff2`,
                weight: `500`,
              },
            ],
          },
          ...nl,
          ...rl,
          ...il,
        ],
        { supportsExplicitInterCodegen: !0 },
      ),
      (_l.loader = {
        load: (e, t) => (
          t.locale,
          Promise.allSettled([E(qc, {}, t), E(hs, {}, t)])
        ),
      }),
      (yl = {
        exports: {
          queryParamNames: {
            type: `variable`,
            annotations: { framerContractVersion: `1` },
          },
          default: {
            type: `reactComponent`,
            name: `FrameraugiA20Il`,
            slots: [],
            annotations: {
              framerIntrinsicWidth: `1200`,
              framerAutoSizeImages: `true`,
              framerAcceptsLayoutTemplate: `true`,
              framerContractVersion: `1`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"mgZWEfXZV":{"layout":["fixed","auto"]},"y01nTAaQS":{"layout":["fixed","auto"]}}}`,
              framerScrollSections: `{"H2ldHO8cr":{"pattern":":H2ldHO8cr","name":"first-trigger"},"nr_nU1Tha":{"pattern":":nr_nU1Tha","name":"littleUp1"},"LBD2Vk6BI":{"pattern":":LBD2Vk6BI","name":"littleup2"},"Ep4tVzs7Y":{"pattern":":Ep4tVzs7Y","name":"littleup3"},"YhHFjKzkP":{"pattern":":YhHFjKzkP","name":"backToCenter1"},"LNisK4opJ":{"pattern":":LNisK4opJ","name":"backtocenter2"},"egT7cUq_L":{"pattern":":egT7cUq_L","name":"backtocenter3"},"jw6Yg7F0L":{"pattern":":jw6Yg7F0L","name":"flip1"},"hYV89UA9v":{"pattern":":hYV89UA9v","name":"flip2"},"fC9WMYolh":{"pattern":":fC9WMYolh","name":"flip3"}}`,
              framerColorSyntax: `true`,
              framerResponsiveScreen: `true`,
              framerImmutableVariables: `true`,
              framerComponentViewportWidth: `true`,
              framerLayoutTemplateFlowEffect: `true`,
              framerIntrinsicHeight: `4535`,
              framerDisplayContentsDiv: `false`,
            },
          },
          Props: {
            type: `tsType`,
            annotations: { framerContractVersion: `1` },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
async function xl(e, t, n) {
  let r = Cl[e],
    i = r ? await r(t, n) : void 0,
    a = { bodyEnd: [], bodyStart: [], headEnd: [], headStart: [] };
  for (let t of Sl) {
    if (t.pageIds && !t.pageIds.has(e)) continue;
    let n = t.code(i);
    n && a[t.placement].push({ ...t, code: n });
  }
  return a;
}
var Sl,
  Cl,
  wl,
  Tl,
  El = e(() => {
    ((Sl = []),
      (Cl = {}),
      (wl = { bodyEnd: [], bodyStart: [], headEnd: [], headStart: [] }),
      (Tl = {
        exports: {
          snippetsSorting: {
            type: `variable`,
            annotations: { framerContractVersion: `1` },
          },
          getSnippets: {
            type: `function`,
            annotations: { framerContractVersion: `1` },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }),
  Dl,
  Ol,
  kl,
  Al,
  jl = e(() => {
    (_(),
      n(),
      C(),
      (Dl = () => (
        a(() => {
          let e = document.querySelector(`meta[name="robots"]`);
          e
            ? e.setAttribute(`content`, `noindex`)
            : ((e = document.createElement(`meta`)),
              e.setAttribute(`name`, `robots`),
              e.setAttribute(`content`, `noindex`),
              document.head.appendChild(e));
        }, []),
        f(`div`, {
          className: `__framer-not-found-page`,
          style: {
            display: `flex`,
            height: `100vh`,
            alignItems: `center`,
            justifyContent: `center`,
            backgroundColor: `var(--color-primary)`,
            background: `var(--color-background)`,
            fontSize: `var(--font-size-body)`,
            boxSizing: `border-box`,
            fontFeatureSettings: `"liga", "clig"`,
            fontVariantLigatures: `common-ligatures`,
            textRendering: `optimizeLegibility`,
          },
          children: g(`main`, {
            style: {
              boxSizing: `border-box`,
              fontFamily: `"Inter", sans-serif`,
              fontWeight: 500,
              maxWidth: `240px`,
              width: `100%`,
              display: `flex`,
              alignItems: `center`,
              flexDirection: `column`,
              padding: `0 20px`,
              textWrap: `balance`,
            },
            children: [
              f(`svg`, {
                xmlns: `http://www.w3.org/2000/svg`,
                width: `14`,
                height: `21`,
                style: {
                  verticalAlign: `middle`,
                  color: `var(--color-primary)`,
                  marginBottom: `20px`,
                },
                children: f(`path`, {
                  d: `M 14 0 L 14 7 L 7 7 L 0 0 Z M 14 14 L 7 14 L 7 21 L 0 14 L 0 7 L 7 7 Z`,
                  fill: `currentColor`,
                }),
              }),
              f(`h1`, {
                style: {
                  margin: `0 0 10px 0`,
                  fontSize: `var(--font-size-title)`,
                  color: `var(--color-primary)`,
                  textAlign: `center`,
                },
                children: `Page Not Found`,
              }),
              f(`div`, {
                style: {
                  color: `var(--color-secondary)`,
                  marginBottom: `20px`,
                  lineHeight: `1.5em`,
                  textAlign: `center`,
                },
                children: `The page you are looking for does not exist or may have been moved.`,
              }),
              f(`a`, {
                href: `/`,
                role: `button`,
                style: {
                  backgroundColor: `var(--color-tint)`,
                  color: `#ffffff`,
                  paddingLeft: `8px`,
                  paddingRight: `8px`,
                  borderRadius: `8px`,
                  lineHeight: `30px`,
                  height: `30px`,
                  textDecoration: `none`,
                  verticalAlign: `baseline`,
                },
                children: `Back to Home`,
              }),
            ],
          }),
        })
      )),
      (Ol = D(Dl, [
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
        U+FE2E-FE2F;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+1F00-1FFF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0370-03FF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
        U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/1ZFS7N918ojhhd0nQWdj3jz4w.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
        U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
        U+2212, U+2215, U+FEFF, U+FFFD;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
        U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
        U+FE2E-FE2F;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+1F00-1FFF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0370-03FF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
        U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/d3tHnaQIAeqiE5hGcRw4mmgWYU.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
        U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
        U+2212, U+2215, U+FEFF, U+FFFD;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
        U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }`,
        `@font-face {
      font-family: Inter Placeholder;
      src: local("Arial");
      ascent-override: 89.79%;
      descent-override: 22.36%;
      line-gap-override: 0%;
      size-adjust: 107.89%;
    }`,
        `.__framer-not-found-page {
      --color-background: #ffffff;
      --color-primary: #333;
      --color-secondary: #888;
      --color-tint: #0099ff;
      --font-size-body: 12px;
      --font-size-title: 12px;
    }`,
        `@media (prefers-color-scheme: dark) {
      .__framer-not-found-page {
        --color-background: #000000;
        --color-primary: #fff;
        --color-secondary: #888;
      }
    }`,
      ])),
      (kl = Ol),
      (Al = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `component`,
            slots: [],
            annotations: { framerContractVersion: `1` },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }),
  Ml = e(() => {
    (jl(), jl());
  });
function Nl() {
  let e = !1;
  try {
    e = l.self !== l.top;
  } catch {
    e = !0;
  }
  if (!e) return !1;
  let t = null,
    n = !1;
  if (l.location.ancestorOrigins && l.location.ancestorOrigins.length > 0) {
    let e = l.location.ancestorOrigins[0];
    try {
      t = new URL(e).host;
    } catch {}
  } else if (document.referrer)
    try {
      t = new URL(document.referrer).host;
    } catch {}
  return (t && (n = t === Il || t.endsWith(`.${Il}`)), n);
}
function Pl(e) {
  return m((t, n) => {
    let r = te(Ll, Rl, zl),
      i = me.current() === me.canvas;
    return r && !i
      ? null
      : f(e, {
          ...t,
          ref: n,
          onClick: (e) => {
            (e.preventDefault(),
              l.open(
                `https://www.framer.com/r/badge/?utm_campaign=freeplanbadge&utm_source=${encodeURIComponent(l?.location?.origin)}`,
              ));
          },
          style: { ...t.style, pointerEvents: `auto` },
          title: `Create a free website with Framer, the website builder loved by startups, designers and agencies.`,
          className: t.className + ` __framer-badge`,
        });
  });
}
function Fl(e) {
  return m((t, n) =>
    g(v, {
      children: [
        f(`p`, {
          style: { position: `absolute`, transform: `scale(0.001)` },
          children: `Create a free website with Framer, the website builder loved by startups, designers and agencies.`,
        }),
        f(e, { ...t, ref: n }),
      ],
    }),
  );
}
var Il,
  Ll,
  Rl,
  zl,
  Bl = e(() => {
    (i(),
      _(),
      n(),
      C(),
      (Il = `framer.com`),
      (Ll = () => () => {}),
      (Rl = () => Nl()),
      (zl = () => !1));
  }),
  Vl,
  Hl,
  Ul,
  Wl,
  Gl,
  Kl,
  ql,
  Jl,
  Yl,
  Xl = e(() => {
    (_(),
      C(),
      n(),
      (Vl = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 97 10" xmlns="http://www.w3.org/2000/svg"><path d="M 91.736 9.781 L 91.736 2.818 L 93.316 2.818 L 93.316 3.98 L 93.374 3.98 C 93.501 3.577 93.714 3.269 94.014 3.053 C 94.328 2.833 94.704 2.72 95.087 2.729 C 95.185 2.729 95.287 2.733 95.392 2.742 C 95.498 2.75 95.587 2.759 95.659 2.767 L 95.659 4.253 C 95.552 4.23 95.444 4.215 95.335 4.209 C 95.188 4.192 95.039 4.184 94.891 4.184 C 94.603 4.184 94.343 4.247 94.11 4.374 C 93.882 4.497 93.702 4.674 93.57 4.907 C 93.434 5.16 93.366 5.445 93.374 5.732 L 93.374 9.782 L 91.736 9.782 Z M 87.286 9.927 C 86.588 9.927 85.985 9.779 85.477 9.483 C 84.969 9.183 84.577 8.761 84.303 8.22 C 84.032 7.678 83.897 7.048 83.897 6.328 C 83.897 5.618 84.032 4.988 84.303 4.443 C 84.56 3.917 84.96 3.475 85.458 3.167 C 85.953 2.858 86.531 2.704 87.191 2.704 C 87.64 2.704 88.059 2.78 88.448 2.932 C 88.841 3.08 89.186 3.305 89.482 3.605 C 89.779 3.901 90.009 4.272 90.174 4.715 C 90.344 5.155 90.428 5.67 90.428 6.258 L 90.428 6.748 L 84.627 6.748 L 84.627 5.629 L 89.609 5.629 L 88.86 5.946 C 88.868 5.594 88.801 5.243 88.664 4.918 C 88.549 4.641 88.355 4.404 88.105 4.238 C 87.86 4.074 87.559 3.991 87.204 3.991 C 86.852 3.991 86.55 4.074 86.296 4.239 C 86.042 4.404 85.847 4.629 85.712 4.912 C 85.576 5.213 85.509 5.54 85.515 5.87 L 85.515 6.62 C 85.515 7.047 85.587 7.413 85.731 7.717 C 85.879 8.017 86.089 8.248 86.359 8.409 C 86.63 8.566 86.948 8.644 87.312 8.644 C 87.562 8.644 87.786 8.608 87.984 8.536 C 88.177 8.467 88.353 8.356 88.499 8.212 C 88.642 8.072 88.749 7.906 88.816 7.711 L 90.326 7.921 C 90.228 8.313 90.032 8.673 89.756 8.968 C 89.476 9.268 89.125 9.503 88.702 9.672 C 88.282 9.842 87.811 9.926 87.286 9.926 Z M 72.643 9.781 L 72.643 2.818 L 74.191 2.818 L 74.235 4.443 L 74.115 4.443 C 74.225 4.041 74.385 3.713 74.597 3.459 C 74.798 3.212 75.055 3.016 75.347 2.888 C 75.63 2.761 75.928 2.698 76.241 2.698 C 76.753 2.698 77.177 2.854 77.511 3.167 C 77.849 3.48 78.074 3.922 78.184 4.494 L 77.987 4.494 C 78.066 4.132 78.232 3.795 78.469 3.51 C 78.691 3.248 78.972 3.041 79.289 2.907 C 79.615 2.766 79.968 2.695 80.323 2.697 C 80.746 2.697 81.127 2.79 81.465 2.977 C 81.808 3.159 82.077 3.429 82.272 3.789 C 82.47 4.149 82.57 4.591 82.57 5.116 L 82.57 9.781 L 80.939 9.781 L 80.939 5.363 C 80.939 4.923 80.818 4.602 80.577 4.398 C 80.333 4.19 80.021 4.08 79.701 4.088 C 79.434 4.088 79.204 4.145 79.009 4.258 C 78.816 4.371 78.66 4.536 78.559 4.735 C 78.449 4.953 78.394 5.195 78.399 5.439 L 78.399 9.781 L 76.813 9.781 L 76.813 5.287 C 76.813 4.923 76.698 4.633 76.47 4.417 C 76.246 4.197 75.958 4.087 75.606 4.087 C 75.366 4.087 75.143 4.145 74.94 4.259 C 74.737 4.374 74.569 4.543 74.458 4.748 C 74.339 4.963 74.28 5.23 74.28 5.548 L 74.28 9.781 L 72.642 9.781 Z M 67.291 9.915 C 66.724 9.915 66.221 9.771 65.781 9.483 C 65.344 9.191 65 8.776 64.746 8.239 C 64.496 7.701 64.371 7.059 64.371 6.309 C 64.371 5.552 64.498 4.904 64.752 4.367 C 65.01 3.829 65.359 3.419 65.799 3.135 C 66.244 2.851 66.763 2.703 67.291 2.71 C 67.668 2.71 67.987 2.771 68.25 2.894 C 68.516 3.013 68.736 3.164 68.91 3.351 C 69.083 3.533 69.22 3.719 69.322 3.91 L 69.38 3.91 L 69.38 2.818 L 70.998 2.818 L 70.998 9.781 L 69.38 9.781 L 69.38 8.696 L 69.322 8.696 C 69.211 8.908 69.07 9.102 68.903 9.273 C 68.726 9.46 68.503 9.614 68.237 9.737 C 67.938 9.863 67.615 9.923 67.291 9.915 Z M 67.723 8.563 C 68.078 8.563 68.383 8.469 68.637 8.283 C 68.901 8.079 69.101 7.804 69.215 7.49 C 69.35 7.147 69.418 6.751 69.418 6.303 C 69.418 5.85 69.35 5.456 69.214 5.123 C 69.103 4.811 68.902 4.539 68.637 4.341 C 68.387 4.155 68.083 4.062 67.723 4.062 C 67.363 4.062 67.058 4.155 66.809 4.342 C 66.559 4.528 66.369 4.788 66.237 5.122 C 66.107 5.456 66.041 5.85 66.041 6.302 C 66.041 6.752 66.106 7.145 66.237 7.483 C 66.369 7.822 66.559 8.086 66.809 8.277 C 67.063 8.467 67.367 8.563 67.723 8.563 Z M 59.909 9.781 L 59.909 2.818 L 61.489 2.818 L 61.489 3.98 L 61.546 3.98 C 61.673 3.577 61.887 3.269 62.188 3.053 C 62.488 2.837 62.846 2.729 63.26 2.729 C 63.358 2.729 63.46 2.733 63.565 2.742 C 63.671 2.75 63.76 2.759 63.832 2.767 L 63.832 4.253 C 63.725 4.23 63.617 4.215 63.508 4.209 C 63.361 4.192 63.212 4.184 63.064 4.184 C 62.776 4.184 62.516 4.247 62.283 4.374 C 62.054 4.497 61.875 4.674 61.743 4.907 C 61.607 5.16 61.539 5.445 61.546 5.732 L 61.546 9.782 L 59.909 9.782 Z M 52.647 9.781 L 52.647 0.323 L 58.804 0.323 L 58.804 1.758 L 54.336 1.758 L 54.336 4.513 L 58.411 4.513 L 58.411 5.928 L 54.336 5.928 L 54.336 9.781 Z M 43.265 5.744 L 43.265 9.781 L 41.628 9.781 L 41.628 2.818 L 43.195 2.818 L 43.215 4.551 L 43.024 4.551 C 43.223 3.946 43.517 3.489 43.906 3.18 C 44.296 2.867 44.78 2.71 45.36 2.71 C 45.842 2.71 46.263 2.814 46.623 3.021 C 46.987 3.228 47.268 3.531 47.467 3.929 C 47.67 4.322 47.772 4.805 47.772 5.376 L 47.772 9.781 L 46.141 9.781 L 46.141 5.63 C 46.141 5.147 46.018 4.775 45.773 4.513 C 45.531 4.246 45.195 4.113 44.763 4.113 C 44.475 4.113 44.217 4.176 43.989 4.303 C 43.762 4.429 43.576 4.619 43.456 4.849 C 43.329 5.09 43.266 5.389 43.266 5.744 Z M 38.353 9.781 L 38.353 2.818 L 39.99 2.818 L 39.99 9.781 L 38.352 9.781 Z M 39.171 1.815 C 38.919 1.821 38.675 1.728 38.491 1.555 C 38.31 1.389 38.208 1.153 38.212 0.907 C 38.208 0.663 38.31 0.43 38.492 0.267 C 38.674 0.091 38.918 -0.005 39.171 0 C 39.438 0 39.664 0.088 39.851 0.266 C 40.041 0.44 40.136 0.653 40.136 0.907 C 40.136 1.161 40.041 1.377 39.85 1.555 C 39.667 1.728 39.423 1.821 39.171 1.815 Z M 30.741 9.927 C 30.043 9.927 29.44 9.779 28.932 9.483 C 28.426 9.185 28.018 8.746 27.758 8.22 C 27.488 7.678 27.352 7.048 27.352 6.328 C 27.352 5.618 27.487 4.988 27.758 4.443 C 28.015 3.917 28.415 3.475 28.913 3.167 C 29.408 2.858 29.986 2.704 30.646 2.704 C 31.095 2.704 31.514 2.78 31.903 2.932 C 32.293 3.079 32.646 3.308 32.938 3.605 C 33.234 3.901 33.464 4.272 33.629 4.715 C 33.799 5.155 33.883 5.67 33.883 6.258 L 33.883 6.748 L 28.083 6.748 L 28.083 5.629 L 33.066 5.629 L 32.316 5.946 C 32.316 5.553 32.251 5.21 32.12 4.918 C 32.005 4.641 31.811 4.404 31.561 4.238 C 31.316 4.074 31.015 3.991 30.66 3.991 C 30.34 3.983 30.024 4.069 29.752 4.239 C 29.498 4.404 29.303 4.629 29.168 4.912 C 29.032 5.213 28.965 5.54 28.971 5.87 L 28.971 6.62 C 28.971 7.047 29.043 7.413 29.187 7.717 C 29.335 8.017 29.545 8.248 29.816 8.409 C 30.086 8.566 30.404 8.644 30.768 8.644 C 31.018 8.644 31.242 8.608 31.441 8.536 C 31.634 8.467 31.809 8.356 31.955 8.212 C 32.099 8.072 32.205 7.906 32.272 7.711 L 33.782 7.921 C 33.684 8.313 33.488 8.673 33.212 8.968 C 32.932 9.268 32.581 9.503 32.158 9.672 C 31.707 9.847 31.226 9.934 30.742 9.926 Z M 22.312 9.915 C 21.777 9.924 21.251 9.774 20.801 9.483 C 20.361 9.191 20.016 8.776 19.766 8.239 C 19.516 7.701 19.392 7.059 19.392 6.309 C 19.392 5.552 19.519 4.904 19.772 4.367 C 20.027 3.829 20.374 3.419 20.814 3.135 C 21.254 2.852 21.751 2.71 22.305 2.71 C 22.682 2.71 23.001 2.771 23.264 2.894 C 23.53 3.013 23.748 3.164 23.918 3.351 C 24.091 3.533 24.228 3.721 24.33 3.916 L 24.381 3.916 L 24.381 0.323 L 26.019 0.323 L 26.019 9.781 L 24.413 9.781 L 24.413 8.689 L 24.343 8.689 C 24.233 8.904 24.091 9.101 23.923 9.273 C 23.734 9.468 23.51 9.626 23.263 9.737 C 23.001 9.855 22.684 9.915 22.312 9.915 Z M 22.737 8.563 C 23.092 8.563 23.397 8.469 23.651 8.283 C 23.915 8.079 24.115 7.804 24.229 7.49 C 24.364 7.147 24.432 6.751 24.432 6.303 C 24.432 5.85 24.364 5.456 24.229 5.123 C 24.118 4.811 23.917 4.539 23.651 4.341 C 23.385 4.151 23.064 4.053 22.737 4.062 C 22.41 4.053 22.089 4.152 21.823 4.342 C 21.573 4.528 21.383 4.79 21.252 5.128 C 21.118 5.505 21.054 5.903 21.062 6.303 C 21.062 6.751 21.127 7.145 21.258 7.483 C 21.389 7.822 21.58 8.086 21.829 8.277 C 22.079 8.467 22.381 8.563 22.737 8.563 Z M 14.352 9.915 C 13.817 9.924 13.291 9.774 12.841 9.483 C 12.405 9.191 12.061 8.776 11.806 8.239 C 11.556 7.701 11.432 7.059 11.432 6.309 C 11.432 5.552 11.559 4.904 11.812 4.367 C 12.071 3.829 12.42 3.419 12.86 3.135 C 13.3 2.852 13.797 2.71 14.352 2.71 C 14.728 2.71 15.048 2.771 15.31 2.894 C 15.577 3.013 15.797 3.164 15.97 3.351 C 16.144 3.533 16.281 3.719 16.383 3.91 L 16.44 3.91 L 16.44 2.818 L 18.059 2.818 L 18.059 9.781 L 16.44 9.781 L 16.44 8.696 L 16.383 8.696 C 16.272 8.908 16.131 9.102 15.964 9.273 C 15.786 9.46 15.564 9.614 15.298 9.737 C 14.999 9.863 14.676 9.923 14.352 9.915 Z M 14.783 8.563 C 15.139 8.563 15.443 8.469 15.697 8.283 C 15.951 8.093 16.144 7.828 16.275 7.49 C 16.41 7.147 16.478 6.751 16.478 6.303 C 16.478 5.85 16.41 5.456 16.275 5.123 C 16.164 4.811 15.963 4.539 15.697 4.341 C 15.447 4.155 15.143 4.062 14.783 4.062 C 14.423 4.062 14.119 4.155 13.869 4.342 C 13.608 4.543 13.41 4.813 13.298 5.122 C 13.167 5.456 13.101 5.85 13.101 6.302 C 13.101 6.752 13.167 7.145 13.298 7.483 C 13.429 7.822 13.62 8.086 13.869 8.277 C 14.123 8.467 14.428 8.563 14.783 8.563 Z M 0 9.781 L 0 0.323 L 2.507 0.323 L 4.322 5.236 C 4.382 5.418 4.452 5.646 4.532 5.922 C 4.612 6.197 4.695 6.493 4.779 6.811 C 4.864 7.124 4.942 7.428 5.014 7.725 C 5.09 8.017 5.154 8.273 5.204 8.493 L 4.843 8.493 C 5.045 7.633 5.267 6.778 5.509 5.928 C 5.589 5.648 5.662 5.418 5.725 5.236 L 7.509 0.323 L 10.023 0.323 L 10.023 9.781 L 8.347 9.781 L 8.347 4.989 C 8.35 4.443 8.358 3.897 8.372 3.351 L 8.398 2.38 C 8.406 2.054 8.412 1.743 8.417 1.447 L 8.563 1.447 C 8.473 1.773 8.379 2.107 8.277 2.45 L 7.979 3.446 C 7.886 3.764 7.795 4.056 7.706 4.322 C 7.636 4.546 7.561 4.768 7.483 4.989 L 5.719 9.781 L 4.303 9.781 L 2.513 4.989 L 2.291 4.329 C 2.198 4.04 2.107 3.75 2.018 3.459 L 1.713 2.469 C 1.613 2.129 1.514 1.788 1.415 1.447 L 1.593 1.447 C 1.597 1.73 1.603 2.035 1.612 2.361 C 1.62 2.682 1.627 3.006 1.631 3.332 C 1.639 3.654 1.646 3.958 1.65 4.246 C 1.658 4.534 1.663 4.781 1.663 4.989 L 1.663 9.781 Z" fill="var(--1bd4d3i, rgb(0, 0, 0))" height="9.927205036163329px" id="LLqmOOyHA" transform="translate(0 -0.25)" width="95.65900006103517px"/></svg>'), var(--framer-icon-mask, none)`),
      (Hl = `alpha, var(--framer-icon-mask-mode, add)`),
      (Ul = `no-repeat`),
      (Wl = `center`),
      (Gl = `auto`),
      (Kl = m((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? f(b.div, { ...a, layoutId: r, ref: t })
          : f(`div`, { ...a, ref: t });
      })),
      (ql = ({ fill: e, fill2: t, height: n, id: r, width: i, ...a }) => ({
        ...a,
        vtL2DrqsL: t ?? a.vtL2DrqsL ?? `rgb(0, 0, 0)`,
        Z1QnXqTEb: e ?? a.Z1QnXqTEb ?? `rgb(0, 0, 0)`,
      })),
      (Jl = D(
        m(function (e, t) {
          let {
            style: n,
            className: r,
            layoutId: i,
            variant: a,
            Z1QnXqTEb: o,
            vtL2DrqsL: s,
            ...c
          } = ql(e);
          return f(Kl, {
            ...c,
            className: M(`framer-g7oZR`, r),
            layoutId: i,
            ref: t,
            style: { "--1bd4d3i": o, ...n },
          });
        }),
        [
          `.framer-g7oZR { -webkit-mask-image: ${Vl}; -webkit-mask-position: ${Wl}; -webkit-mask-repeat: ${Ul}; -webkit-mask-size: ${Gl}; aspect-ratio: 9.7; background-color: var(--1bd4d3i); mask-image: ${Vl}; mask-mode: ${Hl}; mask-position: ${Wl}; mask-repeat: ${Ul}; mask-size: ${Gl}; width: 97px; }`,
        ],
        `framer-g7oZR`,
      )),
      (Jl.displayName = `Text`),
      (Yl = Jl),
      N(Jl, {
        Z1QnXqTEb: {
          defaultValue: `rgb(0, 0, 0)`,
          hidden: !1,
          title: `Fill`,
          type: k.Color,
        },
        vtL2DrqsL: {
          defaultValue: `rgb(0, 0, 0)`,
          hidden: !0,
          title: `Fill 2`,
          type: k.Color,
        },
      }));
  }),
  Zl,
  Ql,
  $l,
  eu,
  tu,
  nu,
  ru,
  iu,
  au,
  ou = e(() => {
    (_(),
      C(),
      n(),
      (Zl = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 12 20" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 12 0 L 12 6 L 6 6 Z M 0 6 L 6 6 L 12 12 L 6 12 L 6 18 L 0 12 Z" fill="var(--1bd4d3i, rgb(0, 0, 0))" height="18px" id="td4SVg2I8" transform="translate(0 1.5)" width="12px"/></svg>'), var(--framer-icon-mask, none)`),
      (Ql = `alpha, var(--framer-icon-mask-mode, add)`),
      ($l = `no-repeat`),
      (eu = `center`),
      (tu = `auto`),
      (nu = m((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? f(b.div, { ...a, layoutId: r, ref: t })
          : f(`div`, { ...a, ref: t });
      })),
      (ru = ({ fill: e, fill2: t, height: n, id: r, width: i, ...a }) => ({
        ...a,
        vtL2DrqsL: t ?? a.vtL2DrqsL ?? `rgb(0, 0, 0)`,
        Z1QnXqTEb: e ?? a.Z1QnXqTEb ?? `rgb(0, 0, 0)`,
      })),
      (iu = D(
        m(function (e, t) {
          let {
            style: n,
            className: r,
            layoutId: i,
            variant: a,
            Z1QnXqTEb: o,
            vtL2DrqsL: s,
            ...c
          } = ru(e);
          return f(nu, {
            ...c,
            className: M(`framer-hcsc7`, r),
            layoutId: i,
            ref: t,
            style: { "--1bd4d3i": o, ...n },
          });
        }),
        [
          `.framer-hcsc7 { -webkit-mask-image: ${Zl}; -webkit-mask-position: ${eu}; -webkit-mask-repeat: ${$l}; -webkit-mask-size: ${tu}; aspect-ratio: 0.6; background-color: var(--1bd4d3i); mask-image: ${Zl}; mask-mode: ${Ql}; mask-position: ${eu}; mask-repeat: ${$l}; mask-size: ${tu}; width: 12px; }`,
        ],
        `framer-hcsc7`,
      )),
      (iu.displayName = `Framer`),
      (au = iu),
      N(iu, {
        Z1QnXqTEb: {
          defaultValue: `rgb(0, 0, 0)`,
          hidden: !1,
          title: `Fill`,
          type: k.Color,
        },
        vtL2DrqsL: {
          defaultValue: `rgb(0, 0, 0)`,
          hidden: !0,
          title: `Fill 2`,
          type: k.Color,
        },
      }));
  }),
  su,
  cu,
  lu,
  uu,
  du,
  fu,
  pu,
  mu,
  hu,
  gu,
  _u,
  vu,
  yu,
  bu,
  xu,
  Su,
  Cu,
  wu,
  Tu = e(() => {
    (_(),
      C(),
      S(),
      n(),
      Bl(),
      Xl(),
      ou(),
      (su = O(au)),
      (cu = O(Yl)),
      (lu = ve(Yl, {
        nodeId: `pBR1Ew0r8`,
        override: Fl,
        scopeId: `PX9hIOIVM`,
      })),
      (uu = de(
        xe(
          ve(b.a, { nodeId: `HK2sXlagE`, override: Pl, scopeId: `PX9hIOIVM` }),
        ),
      )),
      (du = `framer-6jWyo`),
      (fu = { HK2sXlagE: `framer-v-n0ccwk` }),
      (pu = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: {
          damping: 40,
          delay: 1,
          mass: 1.5,
          stiffness: 350,
          type: `spring`,
        },
        x: 0,
        y: 0,
      }),
      (mu = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 10,
      }),
      (hu = { duration: 0, type: `tween` }),
      (gu = (e, t) => `translate(-50%, -50%) ${t}`),
      (_u = (e, t) => `translateX(-50%) ${t}`),
      (vu = ({ value: e, children: n }) => {
        let r = h(x),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(x.Provider, { value: a, children: n });
      }),
      (yu = b.create(o)),
      (bu = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (xu = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Su = D(
        m(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = ee(),
            { activeLocale: o, setLocale: s } = re();
          ie();
          let { style: c, className: l, layoutId: u, variant: d, ...p } = bu(e),
            {
              baseVariant: m,
              classNames: h,
              clearLoadingGesture: _,
              gestureHandlers: v,
              gestureVariant: y,
              isLoading: te,
              setGestureState: x,
              setVariant: S,
              variants: C,
            } = he({
              defaultVariant: `HK2sXlagE`,
              ref: i,
              variant: d,
              variantClassNames: fu,
            }),
            w = xu(e, C),
            T = M(du);
          return f(ne, {
            id: u ?? a,
            children: f(yu, {
              animate: C,
              initial: !1,
              children: f(vu, {
                value: hu,
                children: f(fe, {
                  href: `https://www.framer.com`,
                  motionChild: !0,
                  nodeId: `HK2sXlagE`,
                  openInNewTab: !1,
                  relValues: [],
                  scopeId: `PX9hIOIVM`,
                  children: g(uu, {
                    ...p,
                    ...v,
                    __framer__presenceAnimate: pu,
                    __framer__presenceInitial: mu,
                    __perspectiveFX: !1,
                    __smartComponentFX: !0,
                    __targetOpacity: 1,
                    className: `${M(T, `framer-n0ccwk`, l, h)} framer-bmpgw8`,
                    "data-framer-appear-id": `n0ccwk`,
                    "data-framer-name": `Light`,
                    "data-nosnippet": !0,
                    layoutDependency: w,
                    layoutId: `HK2sXlagE`,
                    optimized: !0,
                    ref: i,
                    style: { ...c },
                    children: [
                      f(b.div, {
                        className: `framer-13yxzio`,
                        "data-framer-name": `Backdrop`,
                        layoutDependency: w,
                        layoutId: `IH1cvP0s5`,
                        style: {
                          backgroundColor: `rgb(255, 255, 255)`,
                          borderBottomLeftRadius: 10,
                          borderBottomRightRadius: 10,
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                          boxShadow: `0px 0.6021873017743928px 1.5656869846134214px -1.5px rgba(0, 0, 0, 0.17), 0px 2.288533303243457px 5.950186588432988px -3px rgba(0, 0, 0, 0.14), 0px 10px 26px -4.5px rgba(0, 0, 0, 0.02)`,
                        },
                      }),
                      g(b.div, {
                        className: `framer-19yaanm`,
                        "data-framer-name": `Content`,
                        layoutDependency: w,
                        layoutId: `U6HIU1IEW`,
                        transformTemplate: gu,
                        children: [
                          f(b.div, {
                            className: `framer-1kflzx5`,
                            layoutDependency: w,
                            layoutId: `roMJYXHnO`,
                            children: f(au, {
                              animated: !0,
                              className: `framer-e50co`,
                              "data-framer-name": `Logo`,
                              layoutDependency: w,
                              layoutId: `O3s3GcxMZ`,
                              style: {
                                "--1bd4d3i": `rgb(0, 0, 0)`,
                                "--otdjsv": `rgb(0, 0, 0)`,
                              },
                              transformTemplate: _u,
                            }),
                          }),
                          f(lu, {
                            animated: !0,
                            className: `framer-1um7t9d`,
                            "data-framer-name": `Text`,
                            layoutDependency: w,
                            layoutId: `pBR1Ew0r8`,
                            style: {
                              "--1bd4d3i": `rgb(0, 0, 0)`,
                              "--otdjsv": `rgb(0, 0, 0)`,
                            },
                          }),
                        ],
                      }),
                      f(b.div, {
                        className: `framer-j4ugry`,
                        "data-framer-name": `Bottom`,
                        layoutDependency: w,
                        layoutId: `vCwsHyUh8`,
                        style: {
                          borderBottomLeftRadius: 11,
                          borderBottomRightRadius: 11,
                          borderTopLeftRadius: 11,
                          borderTopRightRadius: 11,
                          boxShadow: `inset 0px 0px 0px 1px rgb(0, 0, 0)`,
                          mask: `linear-gradient(180deg, rgba(0,0,0,0) 65%, rgba(0,0,0,1) 100%) add`,
                          opacity: 0.06,
                          WebkitMask: `linear-gradient(180deg, rgba(0,0,0,0) 65%, rgba(0,0,0,1) 100%) add`,
                        },
                      }),
                      f(b.div, {
                        className: `framer-jnuwbw`,
                        "data-framer-name": `Border`,
                        layoutDependency: w,
                        layoutId: `ZirFGX8Eh`,
                        style: {
                          borderBottomLeftRadius: 11,
                          borderBottomRightRadius: 11,
                          borderTopLeftRadius: 11,
                          borderTopRightRadius: 11,
                          boxShadow: `inset 0px 0px 0px 1px rgb(0, 0, 0)`,
                          opacity: 0.04,
                        },
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-6jWyo.framer-bmpgw8, .framer-6jWyo .framer-bmpgw8 { display: block; }`,
          `.framer-6jWyo.framer-n0ccwk { gap: 10px; height: 38px; overflow: visible; position: relative; text-decoration: none; width: 140px; }`,
          `.framer-6jWyo .framer-13yxzio { bottom: 1px; flex: none; left: 1px; overflow: hidden; position: absolute; right: 1px; top: 1px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-6jWyo .framer-19yaanm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; left: 50%; overflow: visible; padding: 0px; position: absolute; top: 50%; width: min-content; }`,
          `.framer-6jWyo .framer-1kflzx5 { flex: none; height: 16px; overflow: visible; position: relative; width: 12px; }`,
          `.framer-6jWyo .framer-e50co { flex: none; height: var(--framer-aspect-ratio-supported, 20px); left: 50%; position: absolute; top: -2px; }`,
          `.framer-6jWyo .framer-1um7t9d { flex: none; height: var(--framer-aspect-ratio-supported, 10px); position: relative; }`,
          `.framer-6jWyo .framer-j4ugry, .framer-6jWyo .framer-jnuwbw { bottom: 0px; flex: none; left: 0px; overflow: visible; pointer-events: none; position: absolute; right: 0px; top: 0px; }`,
        ],
        `framer-6jWyo`,
      )),
      (Cu = Su),
      (Su.displayName = `Badge`),
      (Su.defaultProps = { height: 38, width: 140 }),
      le(Su, [{ explicitInter: !0, fonts: [] }, ...su, ...cu], {
        supportsExplicitInterCodegen: !0,
      }),
      (wu = {
        exports: {
          Props: {
            type: `tsType`,
            annotations: { framerContractVersion: `1` },
          },
          default: {
            type: `reactComponent`,
            name: `FramerPX9hIOIVM`,
            slots: [],
            annotations: {
              framerAutoSizeImages: `true`,
              framerContractVersion: `1`,
              framerComponentViewportWidth: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]}}}`,
              framerIntrinsicWidth: `140`,
              framerIntrinsicHeight: `38`,
              framerColorSyntax: `true`,
              framerDisplayContentsDiv: `false`,
              framerImmutableVariables: `true`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
export {
  Zc as _,
  kl as a,
  go as b,
  xl as c,
  yl as d,
  vl as f,
  el as g,
  $c as h,
  Ml as i,
  El as l,
  sl as m,
  wu as n,
  Al as o,
  bl as p,
  Tu as r,
  Tl as s,
  Cu as t,
  wl as u,
  Qc as v,
  ho as y,
};
//# sourceMappingURL=shared-lib.Dy49MtNI.mjs.map
