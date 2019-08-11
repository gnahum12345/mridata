parcelRequire = function(e, r, n, t) {
    var i = "function" == typeof parcelRequire && parcelRequire,
        o = "function" == typeof require && require;
    function u(n, t) {
        if (!r[n]) {
            if (!e[n]) {
                var f = "function" == typeof parcelRequire && parcelRequire;
                if (!t && f)
                    return f(n, !0);
                if (i)
                    return i(n, !0);
                if (o && "string" == typeof n)
                    return o(n);
                var c = new Error("Cannot find module '" + n + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            p.resolve = function(r) {
                return e[n][1][r] || r
            }, p.cache = {};
            var l = r[n] = new u.Module(n);
            e[n][0].call(l.exports, p, l, l.exports, this)
        }
        return r[n].exports;
        function p(e) {
            return u(p.resolve(e))
        }
    }
    u.isParcelRequire = !0, u.Module = function(e) {
        this.id = e, this.bundle = u, this.exports = {}
    }, u.modules = e, u.cache = r, u.parent = i, u.register = function(r, n) {
        e[r] = [function(e, r) {
            r.exports = n
        }, {}]
    };
    for (var f = 0; f < n.length; f++)
        u(n[f]);
    if (n.length) {
        var c = u(n[n.length - 1]);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = c : "function" == typeof define && define.amd ? define(function() {
            return c
        }) : t && (this[t] = c)
    }
    return u
}({
    "PhdE": [function(require, module, exports) {
        var define;
        var e;
        !function(n) {
            var o = !1;
            if ("function" == typeof e && e.amd && (e(n), o = !0), "object" == typeof exports && (module.exports = n(), o = !0), !o) {
                var t = window.Cookies,
                    r = window.Cookies = n();
                r.noConflict = function() {
                    return window.Cookies = t, r
                }
            }
        }(function() {
            function e() {
                for (var e = 0, n = {}; e < arguments.length; e++) {
                    var o = arguments[e];
                    for (var t in o)
                        n[t] = o[t]
                }
                return n
            }
            return function n(o) {
                function t(n, r, i) {
                    var c;
                    if ("undefined" != typeof document) {
                        if (arguments.length > 1) {
                            if ("number" == typeof (i = e({
                                path: "/"
                            }, t.defaults, i)).expires) {
                                var a = new Date;
                                a.setMilliseconds(a.getMilliseconds() + 864e5 * i.expires), i.expires = a
                            }
                            i.expires = i.expires ? i.expires.toUTCString() : "";
                            try {
                                c = JSON.stringify(r), /^[\{\[]/.test(c) && (r = c)
                            } catch (g) {}
                            r = o.write ? o.write(r, n) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = (n = (n = encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                            var s = "";
                            for (var p in i)
                                i[p] && (s += "; " + p, !0 !== i[p] && (s += "=" + i[p]));
                            return document.cookie = n + "=" + r + s
                        }
                        n || (c = {});
                        for (var f = document.cookie ? document.cookie.split("; ") : [], u = /(%[0-9A-Z]{2})+/g, d = 0; d < f.length; d++) {
                            var l = f[d].split("="),
                                v = l.slice(1).join("=");
                            this.json || '"' !== v.charAt(0) || (v = v.slice(1, -1));
                            try {
                                var C = l[0].replace(u, decodeURIComponent);
                                if (v = o.read ? o.read(v, C) : o(v, C) || v.replace(u, decodeURIComponent), this.json)
                                    try {
                                        v = JSON.parse(v)
                                    } catch (g) {}
                                if (n === C) {
                                    c = v;
                                    break
                                }
                                n || (c[C] = v)
                            } catch (g) {}
                        }
                        return c
                    }
                }
                return t.set = t, t.get = function(e) {
                    return t.call(t, e)
                }, t.getJSON = function() {
                    return t.apply({
                        json: !0
                    }, [].slice.call(arguments))
                }, t.defaults = {}, t.remove = function(n, o) {
                    t(n, "", e(o, {
                        expires: -1
                    }))
                }, t.withConverter = n, t
            }(function() {})
        });
    }, {}],
    "4Bm0": [function(require, module, exports) {
        "function" == typeof Object.create ? module.exports = function(t, e) {
            t.super_ = e, t.prototype = Object.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })
        } : module.exports = function(t, e) {
            t.super_ = e;
            var o = function() {};
            o.prototype = e.prototype, t.prototype = new o, t.prototype.constructor = t
        };
    }, {}],
    "yh9p": [function(require, module, exports) {
        "use strict";
        exports.byteLength = u, exports.toByteArray = i, exports.fromByteArray = d;
        for (var r = [], t = [], e = "undefined" != typeof Uint8Array ? Uint8Array : Array, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, a = n.length; o < a; ++o)
            r[o] = n[o], t[n.charCodeAt(o)] = o;
        function h(r) {
            var t = r.length;
            if (t % 4 > 0)
                throw new Error("Invalid string. Length must be a multiple of 4");
            var e = r.indexOf("=");
            return -1 === e && (e = t), [e, e === t ? 0 : 4 - e % 4]
        }
        function u(r) {
            var t = h(r),
                e = t[0],
                n = t[1];
            return 3 * (e + n) / 4 - n
        }
        function c(r, t, e) {
            return 3 * (t + e) / 4 - e
        }
        function i(r) {
            for (var n, o = h(r), a = o[0], u = o[1], i = new e(c(r, a, u)), f = 0, A = u > 0 ? a - 4 : a, d = 0; d < A; d += 4)
                n = t[r.charCodeAt(d)] << 18 | t[r.charCodeAt(d + 1)] << 12 | t[r.charCodeAt(d + 2)] << 6 | t[r.charCodeAt(d + 3)], i[f++] = n >> 16 & 255, i[f++] = n >> 8 & 255, i[f++] = 255 & n;
            return 2 === u && (n = t[r.charCodeAt(d)] << 2 | t[r.charCodeAt(d + 1)] >> 4, i[f++] = 255 & n), 1 === u && (n = t[r.charCodeAt(d)] << 10 | t[r.charCodeAt(d + 1)] << 4 | t[r.charCodeAt(d + 2)] >> 2, i[f++] = n >> 8 & 255, i[f++] = 255 & n), i
        }
        function f(t) {
            return r[t >> 18 & 63] + r[t >> 12 & 63] + r[t >> 6 & 63] + r[63 & t]
        }
        function A(r, t, e) {
            for (var n, o = [], a = t; a < e; a += 3)
                n = (r[a] << 16 & 16711680) + (r[a + 1] << 8 & 65280) + (255 & r[a + 2]), o.push(f(n));
            return o.join("")
        }
        function d(t) {
            for (var e, n = t.length, o = n % 3, a = [], h = 0, u = n - o; h < u; h += 16383)
                a.push(A(t, h, h + 16383 > u ? u : h + 16383));
            return 1 === o ? (e = t[n - 1], a.push(r[e >> 2] + r[e << 4 & 63] + "==")) : 2 === o && (e = (t[n - 2] << 8) + t[n - 1], a.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "=")), a.join("")
        }
        t["-".charCodeAt(0)] = 62, t["_".charCodeAt(0)] = 63;
    }, {}],
    "JgNJ": [function(require, module, exports) {
        exports.read = function(a, o, t, r, h) {
            var M,
                p,
                w = 8 * h - r - 1,
                f = (1 << w) - 1,
                e = f >> 1,
                i = -7,
                N = t ? h - 1 : 0,
                n = t ? -1 : 1,
                s = a[o + N];
            for (N += n, M = s & (1 << -i) - 1, s >>= -i, i += w; i > 0; M = 256 * M + a[o + N], N += n, i -= 8)
                ;
            for (p = M & (1 << -i) - 1, M >>= -i, i += r; i > 0; p = 256 * p + a[o + N], N += n, i -= 8)
                ;
            if (0 === M)
                M = 1 - e;
            else {
                if (M === f)
                    return p ? NaN : 1 / 0 * (s ? -1 : 1);
                p += Math.pow(2, r), M -= e
            }
            return (s ? -1 : 1) * p * Math.pow(2, M - r)
        }, exports.write = function(a, o, t, r, h, M) {
            var p,
                w,
                f,
                e = 8 * M - h - 1,
                i = (1 << e) - 1,
                N = i >> 1,
                n = 23 === h ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                s = r ? 0 : M - 1,
                u = r ? 1 : -1,
                l = o < 0 || 0 === o && 1 / o < 0 ? 1 : 0;
            for (o = Math.abs(o), isNaN(o) || o === 1 / 0 ? (w = isNaN(o) ? 1 : 0, p = i) : (p = Math.floor(Math.log(o) / Math.LN2), o * (f = Math.pow(2, -p)) < 1 && (p--, f *= 2), (o += p + N >= 1 ? n / f : n * Math.pow(2, 1 - N)) * f >= 2 && (p++, f /= 2), p + N >= i ? (w = 0, p = i) : p + N >= 1 ? (w = (o * f - 1) * Math.pow(2, h), p += N) : (w = o * Math.pow(2, N - 1) * Math.pow(2, h), p = 0)); h >= 8; a[t + s] = 255 & w, s += u, w /= 256, h -= 8)
                ;
            for (p = p << h | w, e += h; e > 0; a[t + s] = 255 & p, s += u, p /= 256, e -= 8)
                ;
            a[t + s - u] |= 128 * l
        };
    }, {}],
    "REa7": [function(require, module, exports) {
        var r = {}.toString;
        module.exports = Array.isArray || function(t) {
            return "[object Array]" == r.call(t)
        };
    }, {}],
    "peL6": [function(require, module, exports) {

        var global = arguments[3];
        var t = arguments[3],
            r = require("base64-js"),
            e = require("ieee754"),
            n = require("isarray");
        function i() {
            try {
                var t = new Uint8Array(1);
                return t.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function() {
                        return 42
                    }
                }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
            } catch (r) {
                return !1
            }
        }
        function o() {
            return f.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
        }
        function u(t, r) {
            if (o() < r)
                throw new RangeError("Invalid typed array length");
            return f.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(r)).__proto__ = f.prototype : (null === t && (t = new f(r)), t.length = r), t
        }
        function f(t, r, e) {
            if (!(f.TYPED_ARRAY_SUPPORT || this instanceof f))
                return new f(t, r, e);
            if ("number" == typeof t) {
                if ("string" == typeof r)
                    throw new Error("If encoding is specified then the first argument must be a string");
                return c(this, t)
            }
            return s(this, t, r, e)
        }
        function s(t, r, e, n) {
            if ("number" == typeof r)
                throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && r instanceof ArrayBuffer ? g(t, r, e, n) : "string" == typeof r ? l(t, r, e) : y(t, r)
        }
        function h(t) {
            if ("number" != typeof t)
                throw new TypeError('"size" argument must be a number');
            if (t < 0)
                throw new RangeError('"size" argument must not be negative')
        }
        function a(t, r, e, n) {
            return h(r), r <= 0 ? u(t, r) : void 0 !== e ? "string" == typeof n ? u(t, r).fill(e, n) : u(t, r).fill(e) : u(t, r)
        }
        function c(t, r) {
            if (h(r), t = u(t, r < 0 ? 0 : 0 | w(r)), !f.TYPED_ARRAY_SUPPORT)
                for (var e = 0; e < r; ++e)
                    t[e] = 0;
            return t
        }
        function l(t, r, e) {
            if ("string" == typeof e && "" !== e || (e = "utf8"), !f.isEncoding(e))
                throw new TypeError('"encoding" must be a valid string encoding');
            var n = 0 | v(r, e),
                i = (t = u(t, n)).write(r, e);
            return i !== n && (t = t.slice(0, i)), t
        }
        function p(t, r) {
            var e = r.length < 0 ? 0 : 0 | w(r.length);
            t = u(t, e);
            for (var n = 0; n < e; n += 1)
                t[n] = 255 & r[n];
            return t
        }
        function g(t, r, e, n) {
            if (r.byteLength, e < 0 || r.byteLength < e)
                throw new RangeError("'offset' is out of bounds");
            if (r.byteLength < e + (n || 0))
                throw new RangeError("'length' is out of bounds");
            return r = void 0 === e && void 0 === n ? new Uint8Array(r) : void 0 === n ? new Uint8Array(r, e) : new Uint8Array(r, e, n), f.TYPED_ARRAY_SUPPORT ? (t = r).__proto__ = f.prototype : t = p(t, r), t
        }
        function y(t, r) {
            if (f.isBuffer(r)) {
                var e = 0 | w(r.length);
                return 0 === (t = u(t, e)).length ? t : (r.copy(t, 0, 0, e), t)
            }
            if (r) {
                if ("undefined" != typeof ArrayBuffer && r.buffer instanceof ArrayBuffer || "length" in r)
                    return "number" != typeof r.length || W(r.length) ? u(t, 0) : p(t, r);
                if ("Buffer" === r.type && n(r.data))
                    return p(t, r.data)
            }
            throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
        }
        function w(t) {
            if (t >= o())
                throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o().toString(16) + " bytes");
            return 0 | t
        }
        function d(t) {
            return +t != t && (t = 0), f.alloc(+t)
        }
        function v(t, r) {
            if (f.isBuffer(t))
                return t.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer))
                return t.byteLength;
            "string" != typeof t && (t = "" + t);
            var e = t.length;
            if (0 === e)
                return 0;
            for (var n = !1;;)
                switch (r) {
                case "ascii":
                case "latin1":
                case "binary":
                    return e;
                case "utf8":
                case "utf-8":
                case void 0:
                    return $(t).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * e;
                case "hex":
                    return e >>> 1;
                case "base64":
                    return K(t).length;
                default:
                    if (n)
                        return $(t).length;
                    r = ("" + r).toLowerCase(), n = !0
                }
        }
        function E(t, r, e) {
            var n = !1;
            if ((void 0 === r || r < 0) && (r = 0), r > this.length)
                return "";
            if ((void 0 === e || e > this.length) && (e = this.length), e <= 0)
                return "";
            if ((e >>>= 0) <= (r >>>= 0))
                return "";
            for (t || (t = "utf8");;)
                switch (t) {
                case "hex":
                    return x(this, r, e);
                case "utf8":
                case "utf-8":
                    return Y(this, r, e);
                case "ascii":
                    return L(this, r, e);
                case "latin1":
                case "binary":
                    return D(this, r, e);
                case "base64":
                    return S(this, r, e);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return C(this, r, e);
                default:
                    if (n)
                        throw new TypeError("Unknown encoding: " + t);
                    t = (t + "").toLowerCase(), n = !0
                }
        }
        function b(t, r, e) {
            var n = t[r];
            t[r] = t[e], t[e] = n
        }
        function R(t, r, e, n, i) {
            if (0 === t.length)
                return -1;
            if ("string" == typeof e ? (n = e, e = 0) : e > 2147483647 ? e = 2147483647 : e < -2147483648 && (e = -2147483648), e = +e, isNaN(e) && (e = i ? 0 : t.length - 1), e < 0 && (e = t.length + e), e >= t.length) {
                if (i)
                    return -1;
                e = t.length - 1
            } else if (e < 0) {
                if (!i)
                    return -1;
                e = 0
            }
            if ("string" == typeof r && (r = f.from(r, n)), f.isBuffer(r))
                return 0 === r.length ? -1 : _(t, r, e, n, i);
            if ("number" == typeof r)
                return r &= 255, f.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, r, e) : Uint8Array.prototype.lastIndexOf.call(t, r, e) : _(t, [r], e, n, i);
            throw new TypeError("val must be string, number or Buffer")
        }
        function _(t, r, e, n, i) {
            var o,
                u = 1,
                f = t.length,
                s = r.length;
            if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                if (t.length < 2 || r.length < 2)
                    return -1;
                u = 2, f /= 2, s /= 2, e /= 2
            }
            function h(t, r) {
                return 1 === u ? t[r] : t.readUInt16BE(r * u)
            }
            if (i) {
                var a = -1;
                for (o = e; o < f; o++)
                    if (h(t, o) === h(r, -1 === a ? 0 : o - a)) {
                        if (-1 === a && (a = o), o - a + 1 === s)
                            return a * u
                    } else
                        -1 !== a && (o -= o - a), a = -1
            } else
                for (e + s > f && (e = f - s), o = e; o >= 0; o--) {
                    for (var c = !0, l = 0; l < s; l++)
                        if (h(t, o + l) !== h(r, l)) {
                            c = !1;
                            break
                        }
                    if (c)
                        return o
                }
            return -1
        }
        function A(t, r, e, n) {
            e = Number(e) || 0;
            var i = t.length - e;
            n ? (n = Number(n)) > i && (n = i) : n = i;
            var o = r.length;
            if (o % 2 != 0)
                throw new TypeError("Invalid hex string");
            n > o / 2 && (n = o / 2);
            for (var u = 0; u < n; ++u) {
                var f = parseInt(r.substr(2 * u, 2), 16);
                if (isNaN(f))
                    return u;
                t[e + u] = f
            }
            return u
        }
        function m(t, r, e, n) {
            return Q($(r, t.length - e), t, e, n)
        }
        function P(t, r, e, n) {
            return Q(G(r), t, e, n)
        }
        function T(t, r, e, n) {
            return P(t, r, e, n)
        }
        function B(t, r, e, n) {
            return Q(K(r), t, e, n)
        }
        function U(t, r, e, n) {
            return Q(H(r, t.length - e), t, e, n)
        }
        function S(t, e, n) {
            return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n))
        }
        function Y(t, r, e) {
            e = Math.min(t.length, e);
            for (var n = [], i = r; i < e;) {
                var o,
                    u,
                    f,
                    s,
                    h = t[i],
                    a = null,
                    c = h > 239 ? 4 : h > 223 ? 3 : h > 191 ? 2 : 1;
                if (i + c <= e)
                    switch (c) {
                    case 1:
                        h < 128 && (a = h);
                        break;
                    case 2:
                        128 == (192 & (o = t[i + 1])) && (s = (31 & h) << 6 | 63 & o) > 127 && (a = s);
                        break;
                    case 3:
                        o = t[i + 1], u = t[i + 2], 128 == (192 & o) && 128 == (192 & u) && (s = (15 & h) << 12 | (63 & o) << 6 | 63 & u) > 2047 && (s < 55296 || s > 57343) && (a = s);
                        break;
                    case 4:
                        o = t[i + 1], u = t[i + 2], f = t[i + 3], 128 == (192 & o) && 128 == (192 & u) && 128 == (192 & f) && (s = (15 & h) << 18 | (63 & o) << 12 | (63 & u) << 6 | 63 & f) > 65535 && s < 1114112 && (a = s)
                    }
                null === a ? (a = 65533, c = 1) : a > 65535 && (a -= 65536, n.push(a >>> 10 & 1023 | 55296), a = 56320 | 1023 & a), n.push(a), i += c
            }
            return O(n)
        }
        exports.Buffer = f, exports.SlowBuffer = d, exports.INSPECT_MAX_BYTES = 50, f.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : i(), exports.kMaxLength = o(), f.poolSize = 8192, f._augment = function(t) {
            return t.__proto__ = f.prototype, t
        }, f.from = function(t, r, e) {
            return s(null, t, r, e)
        }, f.TYPED_ARRAY_SUPPORT && (f.prototype.__proto__ = Uint8Array.prototype, f.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && f[Symbol.species] === f && Object.defineProperty(f, Symbol.species, {
            value: null,
            configurable: !0
        })), f.alloc = function(t, r, e) {
            return a(null, t, r, e)
        }, f.allocUnsafe = function(t) {
            return c(null, t)
        }, f.allocUnsafeSlow = function(t) {
            return c(null, t)
        }, f.isBuffer = function(t) {
            return !(null == t || !t._isBuffer)
        }, f.compare = function(t, r) {
            if (!f.isBuffer(t) || !f.isBuffer(r))
                throw new TypeError("Arguments must be Buffers");
            if (t === r)
                return 0;
            for (var e = t.length, n = r.length, i = 0, o = Math.min(e, n); i < o; ++i)
                if (t[i] !== r[i]) {
                    e = t[i], n = r[i];
                    break
                }
            return e < n ? -1 : n < e ? 1 : 0
        }, f.isEncoding = function(t) {
            switch (String(t).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1
            }
        }, f.concat = function(t, r) {
            if (!n(t))
                throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === t.length)
                return f.alloc(0);
            var e;
            if (void 0 === r)
                for (r = 0, e = 0; e < t.length; ++e)
                    r += t[e].length;
            var i = f.allocUnsafe(r),
                o = 0;
            for (e = 0; e < t.length; ++e) {
                var u = t[e];
                if (!f.isBuffer(u))
                    throw new TypeError('"list" argument must be an Array of Buffers');
                u.copy(i, o), o += u.length
            }
            return i
        }, f.byteLength = v, f.prototype._isBuffer = !0, f.prototype.swap16 = function() {
            var t = this.length;
            if (t % 2 != 0)
                throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var r = 0; r < t; r += 2)
                b(this, r, r + 1);
            return this
        }, f.prototype.swap32 = function() {
            var t = this.length;
            if (t % 4 != 0)
                throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var r = 0; r < t; r += 4)
                b(this, r, r + 3), b(this, r + 1, r + 2);
            return this
        }, f.prototype.swap64 = function() {
            var t = this.length;
            if (t % 8 != 0)
                throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var r = 0; r < t; r += 8)
                b(this, r, r + 7), b(this, r + 1, r + 6), b(this, r + 2, r + 5), b(this, r + 3, r + 4);
            return this
        }, f.prototype.toString = function() {
            var t = 0 | this.length;
            return 0 === t ? "" : 0 === arguments.length ? Y(this, 0, t) : E.apply(this, arguments)
        }, f.prototype.equals = function(t) {
            if (!f.isBuffer(t))
                throw new TypeError("Argument must be a Buffer");
            return this === t || 0 === f.compare(this, t)
        }, f.prototype.inspect = function() {
            var t = "",
                r = exports.INSPECT_MAX_BYTES;
            return this.length > 0 && (t = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (t += " ... ")), "<Buffer " + t + ">"
        }, f.prototype.compare = function(t, r, e, n, i) {
            if (!f.isBuffer(t))
                throw new TypeError("Argument must be a Buffer");
            if (void 0 === r && (r = 0), void 0 === e && (e = t ? t.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), r < 0 || e > t.length || n < 0 || i > this.length)
                throw new RangeError("out of range index");
            if (n >= i && r >= e)
                return 0;
            if (n >= i)
                return -1;
            if (r >= e)
                return 1;
            if (this === t)
                return 0;
            for (var o = (i >>>= 0) - (n >>>= 0), u = (e >>>= 0) - (r >>>= 0), s = Math.min(o, u), h = this.slice(n, i), a = t.slice(r, e), c = 0; c < s; ++c)
                if (h[c] !== a[c]) {
                    o = h[c], u = a[c];
                    break
                }
            return o < u ? -1 : u < o ? 1 : 0
        }, f.prototype.includes = function(t, r, e) {
            return -1 !== this.indexOf(t, r, e)
        }, f.prototype.indexOf = function(t, r, e) {
            return R(this, t, r, e, !0)
        }, f.prototype.lastIndexOf = function(t, r, e) {
            return R(this, t, r, e, !1)
        }, f.prototype.write = function(t, r, e, n) {
            if (void 0 === r)
                n = "utf8", e = this.length, r = 0;
            else if (void 0 === e && "string" == typeof r)
                n = r, e = this.length, r = 0;
            else {
                if (!isFinite(r))
                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                r |= 0, isFinite(e) ? (e |= 0, void 0 === n && (n = "utf8")) : (n = e, e = void 0)
            }
            var i = this.length - r;
            if ((void 0 === e || e > i) && (e = i), t.length > 0 && (e < 0 || r < 0) || r > this.length)
                throw new RangeError("Attempt to write outside buffer bounds");
            n || (n = "utf8");
            for (var o = !1;;)
                switch (n) {
                case "hex":
                    return A(this, t, r, e);
                case "utf8":
                case "utf-8":
                    return m(this, t, r, e);
                case "ascii":
                    return P(this, t, r, e);
                case "latin1":
                case "binary":
                    return T(this, t, r, e);
                case "base64":
                    return B(this, t, r, e);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return U(this, t, r, e);
                default:
                    if (o)
                        throw new TypeError("Unknown encoding: " + n);
                    n = ("" + n).toLowerCase(), o = !0
                }
        }, f.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        };
        var I = 4096;
        function O(t) {
            var r = t.length;
            if (r <= I)
                return String.fromCharCode.apply(String, t);
            for (var e = "", n = 0; n < r;)
                e += String.fromCharCode.apply(String, t.slice(n, n += I));
            return e
        }
        function L(t, r, e) {
            var n = "";
            e = Math.min(t.length, e);
            for (var i = r; i < e; ++i)
                n += String.fromCharCode(127 & t[i]);
            return n
        }
        function D(t, r, e) {
            var n = "";
            e = Math.min(t.length, e);
            for (var i = r; i < e; ++i)
                n += String.fromCharCode(t[i]);
            return n
        }
        function x(t, r, e) {
            var n = t.length;
            (!r || r < 0) && (r = 0), (!e || e < 0 || e > n) && (e = n);
            for (var i = "", o = r; o < e; ++o)
                i += Z(t[o]);
            return i
        }
        function C(t, r, e) {
            for (var n = t.slice(r, e), i = "", o = 0; o < n.length; o += 2)
                i += String.fromCharCode(n[o] + 256 * n[o + 1]);
            return i
        }
        function M(t, r, e) {
            if (t % 1 != 0 || t < 0)
                throw new RangeError("offset is not uint");
            if (t + r > e)
                throw new RangeError("Trying to access beyond buffer length")
        }
        function k(t, r, e, n, i, o) {
            if (!f.isBuffer(t))
                throw new TypeError('"buffer" argument must be a Buffer instance');
            if (r > i || r < o)
                throw new RangeError('"value" argument is out of bounds');
            if (e + n > t.length)
                throw new RangeError("Index out of range")
        }
        function N(t, r, e, n) {
            r < 0 && (r = 65535 + r + 1);
            for (var i = 0, o = Math.min(t.length - e, 2); i < o; ++i)
                t[e + i] = (r & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i)
        }
        function z(t, r, e, n) {
            r < 0 && (r = 4294967295 + r + 1);
            for (var i = 0, o = Math.min(t.length - e, 4); i < o; ++i)
                t[e + i] = r >>> 8 * (n ? i : 3 - i) & 255
        }
        function F(t, r, e, n, i, o) {
            if (e + n > t.length)
                throw new RangeError("Index out of range");
            if (e < 0)
                throw new RangeError("Index out of range")
        }
        function j(t, r, n, i, o) {
            return o || F(t, r, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), e.write(t, r, n, i, 23, 4), n + 4
        }
        function q(t, r, n, i, o) {
            return o || F(t, r, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), e.write(t, r, n, i, 52, 8), n + 8
        }
        f.prototype.slice = function(t, r) {
            var e,
                n = this.length;
            if ((t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), (r = void 0 === r ? n : ~~r) < 0 ? (r += n) < 0 && (r = 0) : r > n && (r = n), r < t && (r = t), f.TYPED_ARRAY_SUPPORT)
                (e = this.subarray(t, r)).__proto__ = f.prototype;
            else {
                var i = r - t;
                e = new f(i, void 0);
                for (var o = 0; o < i; ++o)
                    e[o] = this[o + t]
            }
            return e
        }, f.prototype.readUIntLE = function(t, r, e) {
            t |= 0, r |= 0, e || M(t, r, this.length);
            for (var n = this[t], i = 1, o = 0; ++o < r && (i *= 256);)
                n += this[t + o] * i;
            return n
        }, f.prototype.readUIntBE = function(t, r, e) {
            t |= 0, r |= 0, e || M(t, r, this.length);
            for (var n = this[t + --r], i = 1; r > 0 && (i *= 256);)
                n += this[t + --r] * i;
            return n
        }, f.prototype.readUInt8 = function(t, r) {
            return r || M(t, 1, this.length), this[t]
        }, f.prototype.readUInt16LE = function(t, r) {
            return r || M(t, 2, this.length), this[t] | this[t + 1] << 8
        }, f.prototype.readUInt16BE = function(t, r) {
            return r || M(t, 2, this.length), this[t] << 8 | this[t + 1]
        }, f.prototype.readUInt32LE = function(t, r) {
            return r || M(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
        }, f.prototype.readUInt32BE = function(t, r) {
            return r || M(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
        }, f.prototype.readIntLE = function(t, r, e) {
            t |= 0, r |= 0, e || M(t, r, this.length);
            for (var n = this[t], i = 1, o = 0; ++o < r && (i *= 256);)
                n += this[t + o] * i;
            return n >= (i *= 128) && (n -= Math.pow(2, 8 * r)), n
        }, f.prototype.readIntBE = function(t, r, e) {
            t |= 0, r |= 0, e || M(t, r, this.length);
            for (var n = r, i = 1, o = this[t + --n]; n > 0 && (i *= 256);)
                o += this[t + --n] * i;
            return o >= (i *= 128) && (o -= Math.pow(2, 8 * r)), o
        }, f.prototype.readInt8 = function(t, r) {
            return r || M(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
        }, f.prototype.readInt16LE = function(t, r) {
            r || M(t, 2, this.length);
            var e = this[t] | this[t + 1] << 8;
            return 32768 & e ? 4294901760 | e : e
        }, f.prototype.readInt16BE = function(t, r) {
            r || M(t, 2, this.length);
            var e = this[t + 1] | this[t] << 8;
            return 32768 & e ? 4294901760 | e : e
        }, f.prototype.readInt32LE = function(t, r) {
            return r || M(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
        }, f.prototype.readInt32BE = function(t, r) {
            return r || M(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
        }, f.prototype.readFloatLE = function(t, r) {
            return r || M(t, 4, this.length), e.read(this, t, !0, 23, 4)
        }, f.prototype.readFloatBE = function(t, r) {
            return r || M(t, 4, this.length), e.read(this, t, !1, 23, 4)
        }, f.prototype.readDoubleLE = function(t, r) {
            return r || M(t, 8, this.length), e.read(this, t, !0, 52, 8)
        }, f.prototype.readDoubleBE = function(t, r) {
            return r || M(t, 8, this.length), e.read(this, t, !1, 52, 8)
        }, f.prototype.writeUIntLE = function(t, r, e, n) {
            (t = +t, r |= 0, e |= 0, n) || k(this, t, r, e, Math.pow(2, 8 * e) - 1, 0);
            var i = 1,
                o = 0;
            for (this[r] = 255 & t; ++o < e && (i *= 256);)
                this[r + o] = t / i & 255;
            return r + e
        }, f.prototype.writeUIntBE = function(t, r, e, n) {
            (t = +t, r |= 0, e |= 0, n) || k(this, t, r, e, Math.pow(2, 8 * e) - 1, 0);
            var i = e - 1,
                o = 1;
            for (this[r + i] = 255 & t; --i >= 0 && (o *= 256);)
                this[r + i] = t / o & 255;
            return r + e
        }, f.prototype.writeUInt8 = function(t, r, e) {
            return t = +t, r |= 0, e || k(this, t, r, 1, 255, 0), f.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[r] = 255 & t, r + 1
        }, f.prototype.writeUInt16LE = function(t, r, e) {
            return t = +t, r |= 0, e || k(this, t, r, 2, 65535, 0), f.TYPED_ARRAY_SUPPORT ? (this[r] = 255 & t, this[r + 1] = t >>> 8) : N(this, t, r, !0), r + 2
        }, f.prototype.writeUInt16BE = function(t, r, e) {
            return t = +t, r |= 0, e || k(this, t, r, 2, 65535, 0), f.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 8, this[r + 1] = 255 & t) : N(this, t, r, !1), r + 2
        }, f.prototype.writeUInt32LE = function(t, r, e) {
            return t = +t, r |= 0, e || k(this, t, r, 4, 4294967295, 0), f.TYPED_ARRAY_SUPPORT ? (this[r + 3] = t >>> 24, this[r + 2] = t >>> 16, this[r + 1] = t >>> 8, this[r] = 255 & t) : z(this, t, r, !0), r + 4
        }, f.prototype.writeUInt32BE = function(t, r, e) {
            return t = +t, r |= 0, e || k(this, t, r, 4, 4294967295, 0), f.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = 255 & t) : z(this, t, r, !1), r + 4
        }, f.prototype.writeIntLE = function(t, r, e, n) {
            if (t = +t, r |= 0, !n) {
                var i = Math.pow(2, 8 * e - 1);
                k(this, t, r, e, i - 1, -i)
            }
            var o = 0,
                u = 1,
                f = 0;
            for (this[r] = 255 & t; ++o < e && (u *= 256);)
                t < 0 && 0 === f && 0 !== this[r + o - 1] && (f = 1), this[r + o] = (t / u >> 0) - f & 255;
            return r + e
        }, f.prototype.writeIntBE = function(t, r, e, n) {
            if (t = +t, r |= 0, !n) {
                var i = Math.pow(2, 8 * e - 1);
                k(this, t, r, e, i - 1, -i)
            }
            var o = e - 1,
                u = 1,
                f = 0;
            for (this[r + o] = 255 & t; --o >= 0 && (u *= 256);)
                t < 0 && 0 === f && 0 !== this[r + o + 1] && (f = 1), this[r + o] = (t / u >> 0) - f & 255;
            return r + e
        }, f.prototype.writeInt8 = function(t, r, e) {
            return t = +t, r |= 0, e || k(this, t, r, 1, 127, -128), f.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[r] = 255 & t, r + 1
        }, f.prototype.writeInt16LE = function(t, r, e) {
            return t = +t, r |= 0, e || k(this, t, r, 2, 32767, -32768), f.TYPED_ARRAY_SUPPORT ? (this[r] = 255 & t, this[r + 1] = t >>> 8) : N(this, t, r, !0), r + 2
        }, f.prototype.writeInt16BE = function(t, r, e) {
            return t = +t, r |= 0, e || k(this, t, r, 2, 32767, -32768), f.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 8, this[r + 1] = 255 & t) : N(this, t, r, !1), r + 2
        }, f.prototype.writeInt32LE = function(t, r, e) {
            return t = +t, r |= 0, e || k(this, t, r, 4, 2147483647, -2147483648), f.TYPED_ARRAY_SUPPORT ? (this[r] = 255 & t, this[r + 1] = t >>> 8, this[r + 2] = t >>> 16, this[r + 3] = t >>> 24) : z(this, t, r, !0), r + 4
        }, f.prototype.writeInt32BE = function(t, r, e) {
            return t = +t, r |= 0, e || k(this, t, r, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), f.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = 255 & t) : z(this, t, r, !1), r + 4
        }, f.prototype.writeFloatLE = function(t, r, e) {
            return j(this, t, r, !0, e)
        }, f.prototype.writeFloatBE = function(t, r, e) {
            return j(this, t, r, !1, e)
        }, f.prototype.writeDoubleLE = function(t, r, e) {
            return q(this, t, r, !0, e)
        }, f.prototype.writeDoubleBE = function(t, r, e) {
            return q(this, t, r, !1, e)
        }, f.prototype.copy = function(t, r, e, n) {
            if (e || (e = 0), n || 0 === n || (n = this.length), r >= t.length && (r = t.length), r || (r = 0), n > 0 && n < e && (n = e), n === e)
                return 0;
            if (0 === t.length || 0 === this.length)
                return 0;
            if (r < 0)
                throw new RangeError("targetStart out of bounds");
            if (e < 0 || e >= this.length)
                throw new RangeError("sourceStart out of bounds");
            if (n < 0)
                throw new RangeError("sourceEnd out of bounds");
            n > this.length && (n = this.length), t.length - r < n - e && (n = t.length - r + e);
            var i,
                o = n - e;
            if (this === t && e < r && r < n)
                for (i = o - 1; i >= 0; --i)
                    t[i + r] = this[i + e];
            else if (o < 1e3 || !f.TYPED_ARRAY_SUPPORT)
                for (i = 0; i < o; ++i)
                    t[i + r] = this[i + e];
            else
                Uint8Array.prototype.set.call(t, this.subarray(e, e + o), r);
            return o
        }, f.prototype.fill = function(t, r, e, n) {
            if ("string" == typeof t) {
                if ("string" == typeof r ? (n = r, r = 0, e = this.length) : "string" == typeof e && (n = e, e = this.length), 1 === t.length) {
                    var i = t.charCodeAt(0);
                    i < 256 && (t = i)
                }
                if (void 0 !== n && "string" != typeof n)
                    throw new TypeError("encoding must be a string");
                if ("string" == typeof n && !f.isEncoding(n))
                    throw new TypeError("Unknown encoding: " + n)
            } else
                "number" == typeof t && (t &= 255);
            if (r < 0 || this.length < r || this.length < e)
                throw new RangeError("Out of range index");
            if (e <= r)
                return this;
            var o;
            if (r >>>= 0, e = void 0 === e ? this.length : e >>> 0, t || (t = 0), "number" == typeof t)
                for (o = r; o < e; ++o)
                    this[o] = t;
            else {
                var u = f.isBuffer(t) ? t : $(new f(t, n).toString()),
                    s = u.length;
                for (o = 0; o < e - r; ++o)
                    this[o + r] = u[o % s]
            }
            return this
        };
        var V = /[^+\/0-9A-Za-z-_]/g;
        function X(t) {
            if ((t = J(t).replace(V, "")).length < 2)
                return "";
            for (; t.length % 4 != 0;)
                t += "=";
            return t
        }
        function J(t) {
            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
        }
        function Z(t) {
            return t < 16 ? "0" + t.toString(16) : t.toString(16)
        }
        function $(t, r) {
            var e;
            r = r || 1 / 0;
            for (var n = t.length, i = null, o = [], u = 0; u < n; ++u) {
                if ((e = t.charCodeAt(u)) > 55295 && e < 57344) {
                    if (!i) {
                        if (e > 56319) {
                            (r -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        if (u + 1 === n) {
                            (r -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        i = e;
                        continue
                    }
                    if (e < 56320) {
                        (r -= 3) > -1 && o.push(239, 191, 189), i = e;
                        continue
                    }
                    e = 65536 + (i - 55296 << 10 | e - 56320)
                } else
                    i && (r -= 3) > -1 && o.push(239, 191, 189);
                if (i = null, e < 128) {
                    if ((r -= 1) < 0)
                        break;
                    o.push(e)
                } else if (e < 2048) {
                    if ((r -= 2) < 0)
                        break;
                    o.push(e >> 6 | 192, 63 & e | 128)
                } else if (e < 65536) {
                    if ((r -= 3) < 0)
                        break;
                    o.push(e >> 12 | 224, e >> 6 & 63 | 128, 63 & e | 128)
                } else {
                    if (!(e < 1114112))
                        throw new Error("Invalid code point");
                    if ((r -= 4) < 0)
                        break;
                    o.push(e >> 18 | 240, e >> 12 & 63 | 128, e >> 6 & 63 | 128, 63 & e | 128)
                }
            }
            return o
        }
        function G(t) {
            for (var r = [], e = 0; e < t.length; ++e)
                r.push(255 & t.charCodeAt(e));
            return r
        }
        function H(t, r) {
            for (var e, n, i, o = [], u = 0; u < t.length && !((r -= 2) < 0); ++u)
                n = (e = t.charCodeAt(u)) >> 8, i = e % 256, o.push(i), o.push(n);
            return o
        }
        function K(t) {
            return r.toByteArray(X(t))
        }
        function Q(t, r, e, n) {
            for (var i = 0; i < n && !(i + e >= r.length || i >= t.length); ++i)
                r[i + e] = t[i];
            return i
        }
        function W(t) {
            return t != t
        }
    }, {
        "base64-js": "yh9p",
        "ieee754": "JgNJ",
        "isarray": "REa7",
        "buffer": "peL6"
    }],
    "38Wu": [function(require, module, exports) {

        var r = require("buffer"),
            e = r.Buffer;
        function n(r, e) {
            for (var n in r)
                e[n] = r[n]
        }
        function o(r, n, o) {
            return e(r, n, o)
        }
        e.from && e.alloc && e.allocUnsafe && e.allocUnsafeSlow ? module.exports = r : (n(r, exports), exports.Buffer = o), n(e, o), o.from = function(r, n, o) {
            if ("number" == typeof r)
                throw new TypeError("Argument must not be a number");
            return e(r, n, o)
        }, o.alloc = function(r, n, o) {
            if ("number" != typeof r)
                throw new TypeError("Argument must be a number");
            var f = e(r);
            return void 0 !== n ? "string" == typeof o ? f.fill(n, o) : f.fill(n) : f.fill(0), f
        }, o.allocUnsafe = function(r) {
            if ("number" != typeof r)
                throw new TypeError("Argument must be a number");
            return e(r)
        }, o.allocUnsafeSlow = function(e) {
            if ("number" != typeof e)
                throw new TypeError("Argument must be a number");
            return r.SlowBuffer(e)
        };
    }, {
        "buffer": "peL6"
    }],
    "VHby": [function(require, module, exports) {

        var t = require("safe-buffer").Buffer;
        function i(i, e) {
            this._block = t.alloc(i), this._finalSize = e, this._blockSize = i, this._len = 0
        }
        i.prototype.update = function(i, e) {
            "string" == typeof i && (e = e || "utf8", i = t.from(i, e));
            for (var s = this._block, o = this._blockSize, l = i.length, h = this._len, r = 0; r < l;) {
                for (var _ = h % o, n = Math.min(l - r, o - _), c = 0; c < n; c++)
                    s[_ + c] = i[r + c];
                r += n, (h += n) % o == 0 && this._update(s)
            }
            return this._len += l, this
        }, i.prototype.digest = function(t) {
            var i = this._len % this._blockSize;
            this._block[i] = 128, this._block.fill(0, i + 1), i >= this._finalSize && (this._update(this._block), this._block.fill(0));
            var e = 8 * this._len;
            if (e <= 4294967295)
                this._block.writeUInt32BE(e, this._blockSize - 4);
            else {
                var s = (4294967295 & e) >>> 0,
                    o = (e - s) / 4294967296;
                this._block.writeUInt32BE(o, this._blockSize - 8), this._block.writeUInt32BE(s, this._blockSize - 4)
            }
            this._update(this._block);
            var l = this._hash();
            return t ? l.toString(t) : l
        }, i.prototype._update = function() {
            throw new Error("_update must be implemented by subclass")
        }, module.exports = i;
    }, {
        "safe-buffer": "38Wu"
    }],
    "j9dE": [function(require, module, exports) {

        var t = require("inherits"),
            i = require("./hash"),
            r = require("safe-buffer").Buffer,
            s = [1518500249, 1859775393, -1894007588, -899497514],
            h = new Array(80);
        function e() {
            this.init(), this._w = h, i.call(this, 64, 56)
        }
        function n(t) {
            return t << 5 | t >>> 27
        }
        function _(t) {
            return t << 30 | t >>> 2
        }
        function a(t, i, r, s) {
            return 0 === t ? i & r | ~i & s : 2 === t ? i & r | i & s | r & s : i ^ r ^ s
        }
        t(e, i), e.prototype.init = function() {
            return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
        }, e.prototype._update = function(t) {
            for (var i = this._w, r = 0 | this._a, h = 0 | this._b, e = 0 | this._c, o = 0 | this._d, u = 0 | this._e, f = 0; f < 16; ++f)
                i[f] = t.readInt32BE(4 * f);
            for (; f < 80; ++f)
                i[f] = i[f - 3] ^ i[f - 8] ^ i[f - 14] ^ i[f - 16];
            for (var c = 0; c < 80; ++c) {
                var d = ~~(c / 20),
                    p = n(r) + a(d, h, e, o) + u + i[c] + s[d] | 0;
                u = o, o = e, e = _(h), h = r, r = p
            }
            this._a = r + this._a | 0, this._b = h + this._b | 0, this._c = e + this._c | 0, this._d = o + this._d | 0, this._e = u + this._e | 0
        }, e.prototype._hash = function() {
            var t = r.allocUnsafe(20);
            return t.writeInt32BE(0 | this._a, 0), t.writeInt32BE(0 | this._b, 4), t.writeInt32BE(0 | this._c, 8), t.writeInt32BE(0 | this._d, 12), t.writeInt32BE(0 | this._e, 16), t
        }, module.exports = e;
    }, {
        "inherits": "4Bm0",
        "./hash": "VHby",
        "safe-buffer": "38Wu"
    }],
    "oPH4": [function(require, module, exports) {

        var t = require("inherits"),
            i = require("./hash"),
            r = require("safe-buffer").Buffer,
            s = [1518500249, 1859775393, -1894007588, -899497514],
            e = new Array(80);
        function h() {
            this.init(), this._w = e, i.call(this, 64, 56)
        }
        function n(t) {
            return t << 1 | t >>> 31
        }
        function _(t) {
            return t << 5 | t >>> 27
        }
        function u(t) {
            return t << 30 | t >>> 2
        }
        function o(t, i, r, s) {
            return 0 === t ? i & r | ~i & s : 2 === t ? i & r | i & s | r & s : i ^ r ^ s
        }
        t(h, i), h.prototype.init = function() {
            return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
        }, h.prototype._update = function(t) {
            for (var i = this._w, r = 0 | this._a, e = 0 | this._b, h = 0 | this._c, a = 0 | this._d, f = 0 | this._e, c = 0; c < 16; ++c)
                i[c] = t.readInt32BE(4 * c);
            for (; c < 80; ++c)
                i[c] = n(i[c - 3] ^ i[c - 8] ^ i[c - 14] ^ i[c - 16]);
            for (var d = 0; d < 80; ++d) {
                var p = ~~(d / 20),
                    w = _(r) + o(p, e, h, a) + f + i[d] + s[p] | 0;
                f = a, a = h, h = u(e), e = r, r = w
            }
            this._a = r + this._a | 0, this._b = e + this._b | 0, this._c = h + this._c | 0, this._d = a + this._d | 0, this._e = f + this._e | 0
        }, h.prototype._hash = function() {
            var t = r.allocUnsafe(20);
            return t.writeInt32BE(0 | this._a, 0), t.writeInt32BE(0 | this._b, 4), t.writeInt32BE(0 | this._c, 8), t.writeInt32BE(0 | this._d, 12), t.writeInt32BE(0 | this._e, 16), t
        }, module.exports = h;
    }, {
        "inherits": "4Bm0",
        "./hash": "VHby",
        "safe-buffer": "38Wu"
    }],
    "IUSb": [function(require, module, exports) {

        var t = require("inherits"),
            i = require("./hash"),
            h = require("safe-buffer").Buffer,
            s = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
            r = new Array(64);
        function _() {
            this.init(), this._w = r, i.call(this, 64, 56)
        }
        function n(t, i, h) {
            return h ^ t & (i ^ h)
        }
        function e(t, i, h) {
            return t & i | h & (t | i)
        }
        function u(t) {
            return (t >>> 2 | t << 30) ^ (t >>> 13 | t << 19) ^ (t >>> 22 | t << 10)
        }
        function f(t) {
            return (t >>> 6 | t << 26) ^ (t >>> 11 | t << 21) ^ (t >>> 25 | t << 7)
        }
        function o(t) {
            return (t >>> 7 | t << 25) ^ (t >>> 18 | t << 14) ^ t >>> 3
        }
        function a(t) {
            return (t >>> 17 | t << 15) ^ (t >>> 19 | t << 13) ^ t >>> 10
        }
        t(_, i), _.prototype.init = function() {
            return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this
        }, _.prototype._update = function(t) {
            for (var i = this._w, h = 0 | this._a, r = 0 | this._b, _ = 0 | this._c, c = 0 | this._d, w = 0 | this._e, B = 0 | this._f, E = 0 | this._g, I = 0 | this._h, d = 0; d < 16; ++d)
                i[d] = t.readInt32BE(4 * d);
            for (; d < 64; ++d)
                i[d] = a(i[d - 2]) + i[d - 7] + o(i[d - 15]) + i[d - 16] | 0;
            for (var p = 0; p < 64; ++p) {
                var b = I + f(w) + n(w, B, E) + s[p] + i[p] | 0,
                    g = u(h) + e(h, r, _) | 0;
                I = E, E = B, B = w, w = c + b | 0, c = _, _ = r, r = h, h = b + g | 0
            }
            this._a = h + this._a | 0, this._b = r + this._b | 0, this._c = _ + this._c | 0, this._d = c + this._d | 0, this._e = w + this._e | 0, this._f = B + this._f | 0, this._g = E + this._g | 0, this._h = I + this._h | 0
        }, _.prototype._hash = function() {
            var t = h.allocUnsafe(32);
            return t.writeInt32BE(this._a, 0), t.writeInt32BE(this._b, 4), t.writeInt32BE(this._c, 8), t.writeInt32BE(this._d, 12), t.writeInt32BE(this._e, 16), t.writeInt32BE(this._f, 20), t.writeInt32BE(this._g, 24), t.writeInt32BE(this._h, 28), t
        }, module.exports = _;
    }, {
        "inherits": "4Bm0",
        "./hash": "VHby",
        "safe-buffer": "38Wu"
    }],
    "MeLE": [function(require, module, exports) {

        var t = require("inherits"),
            i = require("./sha256"),
            e = require("./hash"),
            r = require("safe-buffer").Buffer,
            h = new Array(64);
        function s() {
            this.init(), this._w = h, e.call(this, 64, 56)
        }
        t(s, i), s.prototype.init = function() {
            return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this
        }, s.prototype._hash = function() {
            var t = r.allocUnsafe(28);
            return t.writeInt32BE(this._a, 0), t.writeInt32BE(this._b, 4), t.writeInt32BE(this._c, 8), t.writeInt32BE(this._d, 12), t.writeInt32BE(this._e, 16), t.writeInt32BE(this._f, 20), t.writeInt32BE(this._g, 24), t
        }, module.exports = s;
    }, {
        "inherits": "4Bm0",
        "./sha256": "IUSb",
        "./hash": "VHby",
        "safe-buffer": "38Wu"
    }],
    "sILY": [function(require, module, exports) {

        var h = require("inherits"),
            t = require("./hash"),
            i = require("safe-buffer").Buffer,
            s = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591],
            _ = new Array(160);
        function l() {
            this.init(), this._w = _, t.call(this, 128, 112)
        }
        function r(h, t, i) {
            return i ^ h & (t ^ i)
        }
        function n(h, t, i) {
            return h & t | i & (h | t)
        }
        function e(h, t) {
            return (h >>> 28 | t << 4) ^ (t >>> 2 | h << 30) ^ (t >>> 7 | h << 25)
        }
        function f(h, t) {
            return (h >>> 14 | t << 18) ^ (h >>> 18 | t << 14) ^ (t >>> 9 | h << 23)
        }
        function u(h, t) {
            return (h >>> 1 | t << 31) ^ (h >>> 8 | t << 24) ^ h >>> 7
        }
        function a(h, t) {
            return (h >>> 1 | t << 31) ^ (h >>> 8 | t << 24) ^ (h >>> 7 | t << 25)
        }
        function c(h, t) {
            return (h >>> 19 | t << 13) ^ (t >>> 29 | h << 3) ^ h >>> 6
        }
        function o(h, t) {
            return (h >>> 19 | t << 13) ^ (t >>> 29 | h << 3) ^ (h >>> 6 | t << 26)
        }
        function d(h, t) {
            return h >>> 0 < t >>> 0 ? 1 : 0
        }
        h(l, t), l.prototype.init = function() {
            return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this
        }, l.prototype._update = function(h) {
            for (var t = this._w, i = 0 | this._ah, _ = 0 | this._bh, l = 0 | this._ch, b = 0 | this._dh, g = 0 | this._eh, p = 0 | this._fh, v = 0 | this._gh, w = 0 | this._hh, B = 0 | this._al, y = 0 | this._bl, E = 0 | this._cl, I = 0 | this._dl, q = 0 | this._el, m = 0 | this._fl, x = 0 | this._gl, A = 0 | this._hl, U = 0; U < 32; U += 2)
                t[U] = h.readInt32BE(4 * U), t[U + 1] = h.readInt32BE(4 * U + 4);
            for (; U < 160; U += 2) {
                var j = t[U - 30],
                    k = t[U - 30 + 1],
                    z = u(j, k),
                    C = a(k, j),
                    D = c(j = t[U - 4], k = t[U - 4 + 1]),
                    F = o(k, j),
                    G = t[U - 14],
                    H = t[U - 14 + 1],
                    J = t[U - 32],
                    K = t[U - 32 + 1],
                    L = C + H | 0,
                    M = z + G + d(L, C) | 0;
                M = (M = M + D + d(L = L + F | 0, F) | 0) + J + d(L = L + K | 0, K) | 0, t[U] = M, t[U + 1] = L
            }
            for (var N = 0; N < 160; N += 2) {
                M = t[N], L = t[N + 1];
                var O = n(i, _, l),
                    P = n(B, y, E),
                    Q = e(i, B),
                    R = e(B, i),
                    S = f(g, q),
                    T = f(q, g),
                    V = s[N],
                    W = s[N + 1],
                    X = r(g, p, v),
                    Y = r(q, m, x),
                    Z = A + T | 0,
                    $ = w + S + d(Z, A) | 0;
                $ = ($ = ($ = $ + X + d(Z = Z + Y | 0, Y) | 0) + V + d(Z = Z + W | 0, W) | 0) + M + d(Z = Z + L | 0, L) | 0;
                var hh = R + P | 0,
                    th = Q + O + d(hh, R) | 0;
                w = v, A = x, v = p, x = m, p = g, m = q, g = b + $ + d(q = I + Z | 0, I) | 0, b = l, I = E, l = _, E = y, _ = i, y = B, i = $ + th + d(B = Z + hh | 0, Z) | 0
            }
            this._al = this._al + B | 0, this._bl = this._bl + y | 0, this._cl = this._cl + E | 0, this._dl = this._dl + I | 0, this._el = this._el + q | 0, this._fl = this._fl + m | 0, this._gl = this._gl + x | 0, this._hl = this._hl + A | 0, this._ah = this._ah + i + d(this._al, B) | 0, this._bh = this._bh + _ + d(this._bl, y) | 0, this._ch = this._ch + l + d(this._cl, E) | 0, this._dh = this._dh + b + d(this._dl, I) | 0, this._eh = this._eh + g + d(this._el, q) | 0, this._fh = this._fh + p + d(this._fl, m) | 0, this._gh = this._gh + v + d(this._gl, x) | 0, this._hh = this._hh + w + d(this._hl, A) | 0
        }, l.prototype._hash = function() {
            var h = i.allocUnsafe(64);
            function t(t, i, s) {
                h.writeInt32BE(t, s), h.writeInt32BE(i, s + 4)
            }
            return t(this._ah, this._al, 0), t(this._bh, this._bl, 8), t(this._ch, this._cl, 16), t(this._dh, this._dl, 24), t(this._eh, this._el, 32), t(this._fh, this._fl, 40), t(this._gh, this._gl, 48), t(this._hh, this._hl, 56), h
        }, module.exports = l;
    }, {
        "inherits": "4Bm0",
        "./hash": "VHby",
        "safe-buffer": "38Wu"
    }],
    "V2o3": [function(require, module, exports) {

        var h = require("inherits"),
            t = require("./sha512"),
            i = require("./hash"),
            s = require("safe-buffer").Buffer,
            _ = new Array(160);
        function e() {
            this.init(), this._w = _, i.call(this, 128, 112)
        }
        h(e, t), e.prototype.init = function() {
            return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this
        }, e.prototype._hash = function() {
            var h = s.allocUnsafe(48);
            function t(t, i, s) {
                h.writeInt32BE(t, s), h.writeInt32BE(i, s + 4)
            }
            return t(this._ah, this._al, 0), t(this._bh, this._bl, 8), t(this._ch, this._cl, 16), t(this._dh, this._dl, 24), t(this._eh, this._el, 32), t(this._fh, this._fl, 40), h
        }, module.exports = e;
    }, {
        "inherits": "4Bm0",
        "./sha512": "sILY",
        "./hash": "VHby",
        "safe-buffer": "38Wu"
    }],
    "t0b9": [function(require, module, exports) {
        var e = module.exports = function(r) {
            r = r.toLowerCase();
            var s = e[r];
            if (!s)
                throw new Error(r + " is not supported (we accept pull requests)");
            return new s
        };
        e.sha = require("./sha"), e.sha1 = require("./sha1"), e.sha224 = require("./sha224"), e.sha256 = require("./sha256"), e.sha384 = require("./sha384"), e.sha512 = require("./sha512");
    }, {
        "./sha": "j9dE",
        "./sha1": "oPH4",
        "./sha224": "MeLE",
        "./sha256": "IUSb",
        "./sha384": "V2o3",
        "./sha512": "sILY"
    }],
    "TlVp": [function(require, module, exports) {
        !function() {
            "use strict";
            var t,
                e,
                o,
                r = new Date("2060-10-22"),
                s = 2,
                i = 4,
                n = 5,
                a = 10,
                p = 20,
                u = 30,
                d = [i, u],
                l = [0, s, a],
                h = ["maxConcurrentParts", "logging", "cloudfront", "encodeFilename", "computeContentMd5", "allowS3ExistenceOptimization", "onlyRetryForSameFileName", "timeUrl", "cryptoMd5Method", "cryptoHexEncodedHash256", "awsRegion", "awsSignatureVersion", "evaporateChanged"],
                c = {
                    33: "%21",
                    39: "%27",
                    40: "%28",
                    41: "%29",
                    42: "%2A"
                },
                f = function(r) {
                    if (this.config = _({
                        readableStreams: !1,
                        readableStreamPartMethod: null,
                        bucket: null,
                        logging: !0,
                        maxConcurrentParts: 5,
                        partSize: 6291456,
                        retryBackoffPower: 2,
                        maxRetryBackoffSecs: 300,
                        progressIntervalMS: 1e3,
                        cloudfront: !1,
                        s3Acceleration: !1,
                        mockLocalStorage: !1,
                        encodeFilename: !0,
                        computeContentMd5: !1,
                        allowS3ExistenceOptimization: !1,
                        onlyRetryForSameFileName: !1,
                        timeUrl: null,
                        cryptoMd5Method: null,
                        cryptoHexEncodedHash256: null,
                        aws_key: null,
                        awsRegion: "us-east-1",
                        awsSignatureVersion: "4",
                        sendCanonicalRequestToSignerUrl: !1,
                        s3FileCacheHoursAgo: null,
                        signParams: {},
                        signHeaders: {},
                        customAuthMethod: void 0,
                        maxFileSize: null,
                        signResponseHandler: null,
                        xhrWithCredentials: !1,
                        localTimeOffset: void 0,
                        evaporateChanged: function() {},
                        abortCompletionThrottlingMs: 1e3
                    }, r), "undefined" != typeof window && window.console && ((e = window.console).d = e.log, e.w = window.console.warn ? e.warn : e.d, e.e = window.console.error ? e.error : e.d), this._instantiationError = this.validateEvaporateOptions(), "string" != typeof this._instantiationError) {
                        delete this._instantiationError, this.config.logging || (e = {
                            d: function() {},
                            w: function() {},
                            e: function() {}
                        });
                        var s = new Date;
                        if (t = new Date(s.setHours(s.getHours() - (this.config.s3FileCacheHoursAgo || -100))), "number" == typeof r.localTimeOffset)
                            this.localTimeOffset = r.localTimeOffset;
                        else {
                            var i = this;
                            f.getLocalTimeOffset(this.config).then(function(t) {
                                i.localTimeOffset = t
                            })
                        }
                        this.pendingFiles = {}, this.queuedFiles = [], this.filesInProcess = [], o = new H(this.config.mockLocalStorage)
                    } else
                        this.supported = !1
                };
            function m(t, e, o) {
                this.fileTotalBytesUploaded = 0, this.s3Parts = [], this.partsOnS3 = [], this.partsInProcess = [], this.partsToUpload = [], this.numParts = -1, this.con = _({}, e), this.evaporate = o, this.localTimeOffset = o.localTimeOffset, this.deferredCompletion = I(), _(this, t), this.id = decodeURIComponent(this.con.bucket + "/" + this.name), this.signParams = e.signParams
            }
            function y(t, e) {
                this.fileUpload = t, this.con = t.con, this.attempts = 1, this.localTimeOffset = this.fileUpload.localTimeOffset, this.awsDeferred = I(), this.started = I(), this.awsUrl = function(t) {
                    var e;
                    t.aws_url ? e = [t.aws_url] : (t.s3Acceleration ? (e = ["https://", t.bucket, ".s3-accelerate"], t.cloudfront = !0) : (e = ["https://", t.cloudfront ? t.bucket + "." : "", "s3"], "us-east-1" !== t.awsRegion && e.push("-", t.awsRegion)), e.push(".amazonaws.com"));
                    return e.join("")
                }(this.con), this.awsHost = q(this.awsUrl).hostname;
                var o = _({}, e);
                t.contentType && (o.contentType = t.contentType), this.updateRequest(o)
            }
            function g(t, e) {
                y.call(this, t, e)
            }
            function v(t, e, o) {
                o > -1 && (this.maxRetries = o), y.call(this, t, e)
            }
            function S(t, e) {
                var o = {
                    method: "POST",
                    path: "?uploads",
                    step: "initiate",
                    x_amz_headers: t.xAmzHeadersAtInitiate,
                    not_signed_headers: t.notSignedHeadersAtInitiate,
                    response_match: "<UploadId>(.+)</UploadId>"
                };
                g.call(this, t, o), this.awsKey = e
            }
            function P(t) {
                t.info("will attempt to complete upload");
                var e = {
                    method: "POST",
                    contentType: "application/xml; charset=UTF-8",
                    path: "?uploadId=" + t.uploadId,
                    x_amz_headers: t.xAmzHeadersCommon || t.xAmzHeadersAtComplete,
                    step: "complete"
                };
                g.call(this, t, e)
            }
            function w(t, e) {
                this.awsKey = e, t.info("will attempt to verify existence of the file");
                var o = {
                    method: "HEAD",
                    path: "",
                    x_amz_headers: t.xAmzHeadersCommon,
                    success404: !0,
                    step: "head_object"
                };
                v.call(this, t, o)
            }
            function b(t) {
                v.call(this, t), this.updateRequest(this.setupRequest(0))
            }
            function U(t, e) {
                this.part = e, this.partNumber = e.partNumber, this.start = (this.partNumber - 1) * t.con.partSize, this.end = Math.min(this.partNumber * t.con.partSize, t.sizeBytes);
                var o = {
                    method: "PUT",
                    path: "?partNumber=" + this.partNumber + "&uploadId=" + t.uploadId,
                    step: "upload #" + this.partNumber,
                    x_amz_headers: t.xAmzHeadersCommon || t.xAmzHeadersAtUpload,
                    contentSha256: "UNSIGNED-PAYLOAD",
                    onProgress: this.onProgress.bind(this)
                };
                y.call(this, t, o)
            }
            function T(t) {
                t.info("will attempt to abort the upload"), t.abortParts();
                var e = {
                    method: "DELETE",
                    path: "?uploadId=" + t.uploadId,
                    x_amz_headers: t.xAmzHeadersCommon,
                    success404: !0,
                    step: "abort"
                };
                y.call(this, t, e)
            }
            function q(t) {
                var e,
                    o = t || "/";
                try {
                    e = new URL(o)
                } catch (r) {
                    (e = document.createElement("a")).href = o
                }
                return {
                    protocol: e.protocol,
                    hostname: e.hostname,
                    pathname: e.pathname.replace(/(^\/?)/, "/"),
                    port: e.port,
                    search: "?" === e.search[0] ? e.search.substr(1) : e.search,
                    hash: e.hash,
                    host: e.host
                }
            }
            function x(t) {
                return t ? new Date(t).toISOString() : ""
            }
            function C(t) {
                var e = O(t.responseText, "Code"),
                    o = O(t.responseText, "Message");
                return e.length ? ["AWS Code: ", e, ", Message:", o].join("") : ""
            }
            function O(t, e) {
                var o = t.match(["<", e, ">(.+)</", e, ">"].join(""));
                return o ? o[1] : ""
            }
            function I() {
                var t,
                    e = {};
                return t = new Promise(function(t, o) {
                    e = {
                        resolve: t,
                        reject: o
                    }
                }), {
                    resolve: e.resolve,
                    reject: e.reject,
                    promise: t
                }
            }
            function _(t, e, o) {
                function r(t, e) {
                    if ("object" == typeof e)
                        for (var o in e)
                            e.hasOwnProperty(o) && (t[o] = e[o])
                }
                return t = t || {}, r(e = e || {}, o = o || {}), r(t, e), t
            }
            function F(e) {
                var s = JSON.parse(o.getItem("awsUploads") || "{}");
                if (e) {
                    for (var i in s)
                        if (s.hasOwnProperty(i)) {
                            var n = s[i];
                            new Date(n.completedAt || r) < t && delete s[i]
                        }
                    o.setItem("awsUploads", JSON.stringify(s))
                }
                return s
            }
            function R(t) {
                return [t.file.name, t.file.type, x(t.file.lastModified), t.sizeBytes].join("-")
            }
            function z(t, e) {
                var r = F();
                r[t] = e, o.setItem("awsUploads", JSON.stringify(r))
            }
            function M(t, e) {
                var o = t.indexOf(e);
                if (o > -1)
                    return t.splice(o, 1), !0
            }
            function j(t) {
                for (var e = 0; t >= 1024;)
                    t /= 1024, ++e;
                return [t.toFixed(2).replace(".00", ""), ["B", "Kb", "Mb", "Gb", "Tb", "Pb", "Eb", "Zb", "Yb"][e]].join(" ")
            }
            function H(t) {
                var e = H.supported();
                this.cacheStore = t ? {} : e ? localStorage : void 0
            }
            f.create = function(t) {
                var e = _({}, t);
                return f.getLocalTimeOffset(e).then(function(t) {
                    return e.localTimeOffset = t, new Promise(function(t, o) {
                        var r = new f(e);
                        !0 === r.supported ? t(r) : o(r._instantiationError)
                    })
                })
            }, f.getLocalTimeOffset = function(t) {
                return new Promise(function(o, r) {
                    if ("number" == typeof t.localTimeOffset)
                        return o(t.localTimeOffset);
                    if (t.timeUrl) {
                        var s = new XMLHttpRequest;
                        s.open("GET", t.timeUrl + "?requestTime=" + (new Date).getTime()), s.onreadystatechange = function() {
                            if (4 === s.readyState && 200 === s.status) {
                                var t = new Date(Date.parse(s.responseText)) - new Date;
                                e.d("localTimeOffset is", t, "ms"), o(t)
                            }
                        }, s.onerror = function(t) {
                            e.e("xhr error timeUrl", t), r("Fetching offset time failed with status: " + t.status)
                        }, s.send()
                    } else
                        o(0)
                })
            }, f.prototype.config = {}, f.prototype.localTimeOffset = 0, f.prototype.supported = !1, f.prototype._instantiationError = void 0, f.prototype.evaporatingCount = 0, f.prototype.pendingFiles = {}, f.prototype.filesInProcess = [], f.prototype.queuedFiles = [], f.prototype.startNextFile = function(t) {
                if (this.queuedFiles.length && !(this.evaporatingCount >= this.config.maxConcurrentParts)) {
                    var o = this.queuedFiles.shift();
                    0 === o.status ? (e.d("Starting", decodeURIComponent(o.name), "reason:", t), this.evaporatingCnt(1), o.start()) : (e.d("Requeued", decodeURIComponent(o.name), "status:", o.status, "reason:", t), this.queuedFiles.push(o))
                }
            }, f.prototype.fileCleanup = function(t) {
                M(this.queuedFiles, t), M(this.filesInProcess, t) && this.evaporatingCnt(-1), t.done(), this.consumeRemainingSlots()
            }, f.prototype.queueFile = function(t) {
                this.filesInProcess.push(t), this.queuedFiles.push(t), 1 === this.filesInProcess.length && this.startNextFile("first file")
            }, f.prototype.add = function(t, e) {
                var o,
                    r = this;
                return new Promise(function(s, i) {
                    var n,
                        a,
                        p,
                        u = _(e, {});
                    if (h.forEach(function(t) {
                        delete u[t]
                    }), o = _(r.config, u), void 0 === t || void 0 === t.file)
                        return i("Missing file");
                    if (o.maxFileSize && t.file.size > o.maxFileSize)
                        return i("File size too large. Maximum size allowed is " + o.maxFileSize);
                    if (void 0 === t.name)
                        return i("Missing attribute: name");
                    o.encodeFilename && (t.name = (n = t.name, a = n.split("/"), p = [], a.forEach(function(t) {
                        for (var e = [], o = encodeURIComponent(t), r = 0; r < o.length; r++)
                            e.push(c[o.charCodeAt(r)] || o.charAt(r));
                        p.push(e.join(""))
                    }), p.join("/")));
                    var d = new m(_({
                            started: function() {},
                            uploadInitiated: function() {},
                            progress: function() {},
                            complete: function() {},
                            cancelled: function() {},
                            paused: function() {},
                            resumed: function() {},
                            pausing: function() {},
                            nameChanged: function() {},
                            info: function() {},
                            warn: function() {},
                            error: function() {},
                            beforeSigner: void 0,
                            xAmzHeadersAtInitiate: {},
                            notSignedHeadersAtInitiate: {},
                            xAmzHeadersCommon: null,
                            xAmzHeadersAtUpload: {},
                            xAmzHeadersAtComplete: {}
                        }, t, {
                            status: 0,
                            priority: 0,
                            loadedBytes: 0,
                            sizeBytes: t.file.size,
                            eTag: ""
                        }), o, r),
                        l = d.id;
                    r.pendingFiles[l] = d, r.queueFile(d), d.deferredCompletion.promise.then(function() {
                        r.fileCleanup(d), s(decodeURIComponent(d.name))
                    }, function(t) {
                        r.fileCleanup(d), i(t)
                    })
                })
            }, f.prototype.cancel = function(t) {
                return void 0 === t ? this._cancelAll() : this._cancelOne(t)
            }, f.prototype._cancelAll = function() {
                e.d("Canceling all file uploads");
                var t = [];
                for (var o in this.pendingFiles)
                    if (this.pendingFiles.hasOwnProperty(o)) {
                        var r = this.pendingFiles[o];
                        l.indexOf(r.status) > -1 && t.push(r.stop())
                    }
                return t.length || t.push(Promise.reject("No files to cancel.")), Promise.all(t)
            }, f.prototype._cancelOne = function(t) {
                var e = [];
                return this.pendingFiles[t] ? e.push(this.pendingFiles[t].stop()) : e.push(Promise.reject("File does not exist")), Promise.all(e)
            }, f.prototype.pause = function(t, e) {
                var o = void 0 !== (e = e || {}).force && e.force;
                return void 0 === t ? this._pauseAll(o) : this._pauseOne(t, o)
            }, f.prototype._pauseAll = function(t) {
                e.d("Pausing all file uploads");
                var o = [];
                for (var r in this.pendingFiles)
                    if (this.pendingFiles.hasOwnProperty(r)) {
                        var s = this.pendingFiles[r];
                        l.indexOf(s.status) > -1 && this._pause(s, t, o)
                    }
                return Promise.all(o)
            }, f.prototype._pauseOne = function(t, e) {
                var o = [],
                    r = this.pendingFiles[t];
                return void 0 === r ? o.push(Promise.reject("Cannot pause a file that has not been added.")) : r.status === i && o.push(Promise.reject("Cannot pause a file that is already paused.")), o.length || this._pause(r, e, o), Promise.all(o)
            }, f.prototype._pause = function(t, e, o) {
                o.push(t.pause(e)), M(this.filesInProcess, t), M(this.queuedFiles, t)
            }, f.prototype.resume = function(t) {
                return void 0 === t ? this._resumeAll() : this._resumeOne(t)
            }, f.prototype._resumeAll = function() {
                for (var t in e.d("Resuming all file uploads"), this.pendingFiles)
                    if (this.pendingFiles.hasOwnProperty(t)) {
                        var o = this.pendingFiles[t];
                        d.indexOf(o.status) > -1 && this.resumeFile(o)
                    }
                return Promise.resolve()
            }, f.prototype._resumeOne = function(t) {
                var e = this.pendingFiles[t],
                    o = [];
                return void 0 === e ? o.push(Promise.reject("Cannot pause a file that does not exist.")) : -1 === d.indexOf(e.status) ? o.push(Promise.reject("Cannot resume a file that has not been paused.")) : this.resumeFile(e), Promise.all(o)
            }, f.prototype.resumeFile = function(t) {
                t.resume(), this.queueFile(t)
            }, f.prototype.forceRetry = function() {}, f.prototype.consumeRemainingSlots = function() {
                var t = this.config.maxConcurrentParts - this.evaporatingCount;
                if (t)
                    for (var e = 0; e < this.filesInProcess.length; e++) {
                        var o = this.filesInProcess[e].consumeSlots();
                        if (!(o < 0) && !(t -= o))
                            return
                    }
            }, f.prototype.validateEvaporateOptions = function() {
                if (this.supported = !("undefined" == typeof File || "undefined" == typeof Promise), !this.supported)
                    return "Evaporate requires support for File and Promise";
                if (this.config.readableStreams) {
                    if ("function" != typeof this.config.readableStreamPartMethod)
                        return "Option readableStreamPartMethod is required when readableStreams is set."
                } else if ("undefined" == typeof Blob || void 0 === (Blob.prototype.webkitSlice || Blob.prototype.mozSlice || Blob.prototype.slice))
                    return "Evaporate requires support for Blob [webkitSlice || mozSlice || slice]";
                if (!this.config.signerUrl && "function" != typeof this.config.customAuthMethod)
                    return "Option signerUrl is required unless customAuthMethod is present.";
                if (!this.config.bucket)
                    return "The AWS 'bucket' option must be present.";
                if (this.config.computeContentMd5) {
                    if (this.supported = void 0 !== FileReader.prototype.readAsArrayBuffer, !this.supported)
                        return "The browser's FileReader object does not support readAsArrayBuffer";
                    if ("function" != typeof this.config.cryptoMd5Method)
                        return "Option computeContentMd5 has been set but cryptoMd5Method is not defined.";
                    if ("4" === this.config.awsSignatureVersion && "function" != typeof this.config.cryptoHexEncodedHash256)
                        return "Option awsSignatureVersion is 4 but cryptoHexEncodedHash256 is not defined."
                } else if ("4" === this.config.awsSignatureVersion)
                    return "Option awsSignatureVersion is 4 but computeContentMd5 is not enabled.";
                return !0
            }, f.prototype.evaporatingCnt = function(t) {
                this.evaporatingCount = Math.max(0, this.evaporatingCount + t), this.config.evaporateChanged(this, this.evaporatingCount)
            }, m.prototype.con = void 0, m.prototype.evaporate = void 0, m.prototype.localTimeOffset = 0, m.prototype.id = void 0, m.prototype.status = 0, m.prototype.numParts = -1, m.prototype.fileTotalBytesUploaded = 0, m.prototype.partsInProcess = [], m.prototype.partsToUpload = [], m.prototype.s3Parts = [], m.prototype.partsOnS3 = [], m.prototype.deferredCompletion = void 0, m.prototype.abortedByUser = !1, m.prototype.progressInterval = void 0, m.prototype.startTime = void 0, m.prototype.loaded = 0, m.prototype.totalUploaded = 0, m.prototype.updateLoaded = function(t) {
                this.loaded += t, this.fileTotalBytesUploaded += t
            }, m.prototype.progessStats = function() {
                if (0 === this.fileTotalBytesUploaded)
                    return {
                        speed: 0,
                        readableSpeed: "",
                        loaded: 0,
                        totalUploaded: 0,
                        remainingSize: this.sizeBytes,
                        secondsLeft: -1,
                        fileSize: this.sizeBytes
                    };
                this.totalUploaded += this.loaded;
                var t = (new Date - this.startTime) / 1e3,
                    e = this.totalUploaded / t,
                    o = this.sizeBytes - this.fileTotalBytesUploaded,
                    r = {
                        speed: e,
                        readableSpeed: j(e),
                        loaded: this.loaded,
                        totalUploaded: this.fileTotalBytesUploaded,
                        remainingSize: o,
                        secondsLeft: -1,
                        fileSize: this.sizeBytes
                    };
                return e > 0 && (r.secondsLeft = Math.round(o / e)), r
            }, m.prototype.onProgress = function() {
                -1 === [p, i].indexOf(this.status) && (this.progress(this.fileTotalBytesUploaded / this.sizeBytes, this.progessStats()), this.loaded = 0)
            }, m.prototype.startMonitor = function() {
                clearInterval(this.progressInterval), this.startTime = new Date, this.loaded = 0, this.totalUploaded = 0, this.onProgress(), this.progressInterval = setInterval(this.onProgress.bind(this), this.con.progressIntervalMS)
            }, m.prototype.stopMonitor = function() {
                clearInterval(this.progressInterval)
            }, m.prototype.startNextFile = function(t) {
                this.evaporate.startNextFile(t)
            }, m.prototype.evaporatingCnt = function(t) {
                this.evaporate.evaporatingCnt(t)
            }, m.prototype.consumeRemainingSlots = function() {
                this.evaporate.consumeRemainingSlots()
            }, m.prototype.getRemainingSlots = function() {
                var t = this.evaporate.evaporatingCount;
                return !this.partsInProcess.length && t > 0 && (t -= 1), this.con.maxConcurrentParts - t
            }, m.prototype.lastPartSatisfied = Promise.resolve("onStart"), m.prototype.start = function() {
                if (this.status = s, this.startMonitor(), this.started(this.id), this.uploadId)
                    return e.d("resuming FileUpload ", this.id), this.consumeSlots();
                var t = this.name;
                this.getUnfinishedFileUpload();
                var o = this.con.computeContentMd5 && this.con.allowS3ExistenceOptimization && void 0 !== this.firstMd5Digest && void 0 !== this.eTag;
                if (this.uploadId) {
                    if (o)
                        return this.reuseS3Object(t).then(this.deferredCompletion.resolve).catch(this.uploadFileFromScratch.bind(this));
                    this.resumeInterruptedUpload().then(this._uploadComplete.bind(this)).catch(this.uploadFileFromScratch.bind(this))
                } else
                    this.uploadFileFromScratch("")
            }, m.prototype.uploadFileFromScratch = function(t) {
                if (-1 !== l.indexOf(this.status))
                    return e.d(t), this.uploadId = void 0, this.uploadFile(this.name).then(this._uploadComplete.bind(this)).catch(this._abortUpload.bind(this))
            }, m.prototype._uploadComplete = function() {
                this.completeUpload().then(this.deferredCompletion.resolve)
            }, m.prototype.stop = function() {
                e.d("stopping FileUpload ", this.id), this.setStatus(n), this.info("Canceling uploads..."), this.abortedByUser = !0;
                var t = this;
                return this.abortUpload().then(function() {
                    throw "User aborted the upload"
                }).catch(function(e) {
                    t.deferredCompletion.reject(e)
                })
            }, m.prototype.pause = function(t) {
                e.d("pausing FileUpload, force:", !!t, this.id);
                var o = [];
                return this.info("Pausing uploads..."), this.status = u, t ? this.abortParts(!0) : (o = this.partsInProcess.map(function(t) {
                    return this.s3Parts[t].awsRequest.awsDeferred.promise
                }, this), this.pausing()), Promise.all(o).then(function() {
                    this.stopMonitor(), this.status = i, this.startNextFile("pause"), this.paused()
                }.bind(this))
            }, m.prototype.resume = function() {
                this.status = 0, this.resumed()
            }, m.prototype.done = function() {
                clearInterval(this.progressInterval), this.startNextFile("file done"), this.partsOnS3 = [], this.s3Parts = []
            }, m.prototype._startCompleteUpload = function(t) {
                return function() {
                    (t ? this.completeUpload() : Promise.resolve()).then(this.deferredCompletion.resolve.bind(this))
                }
            }, m.prototype._abortUpload = function() {
                if (!this.abortedByUser) {
                    var t = this;
                    this.abortUpload().then(function() {
                        t.deferredCompletion.reject("File upload aborted due to a part failing to upload")
                    }, this.deferredCompletion.reject.bind(this))
                }
            }, m.prototype.abortParts = function(t) {
                var e = this;
                this.partsInProcess.slice(0).forEach(function(o) {
                    var r = e.s3Parts[o];
                    r && (r.awsRequest.abort(), t && (r.status = 0), M(e.partsInProcess, r.partNumber), e.partsToUpload.length && e.evaporatingCnt(-1))
                })
            }, m.prototype.makeParts = function(t) {
                this.numParts = Math.ceil(this.sizeBytes / this.con.partSize) || 1;
                var e = [],
                    o = this;
                function r(t) {
                    M(o.partsToUpload, t.partNumber), M(o.partsInProcess, t.partNumber), o.partsToUpload.length && o.evaporatingCnt(-1)
                }
                function s(t) {
                    return function() {
                        r(t), o.partsToUpload.length && o.consumeRemainingSlots(), o.partsToUpload.length < o.con.maxConcurrentParts && o.startNextFile("part resolve")
                    }
                }
                function i(t) {
                    return function() {
                        r(t)
                    }
                }
                for (var n = t ? 1 : this.numParts, a = 1; a <= n; a++) {
                    var p = this.s3Parts[a];
                    if (void 0 !== p) {
                        if (3 === p.status)
                            continue
                    } else
                        p = this.makePart(a, 0, this.sizeBytes);
                    p.awsRequest = new U(this, p), p.awsRequest.awsDeferred.promise.then(s(p), i(p)), this.partsToUpload.push(a), e.push(this.s3Parts[a].awsRequest.awsDeferred.promise)
                }
                return e
            }, m.prototype.makePart = function(t, e, o) {
                var r = {
                    status: e,
                    loadedBytes: 0,
                    loadedBytesPrevious: null,
                    isEmpty: 0 === o,
                    md5_digest: null,
                    partNumber: t
                };
                return this.s3Parts[t] = r, r
            }, m.prototype.setStatus = function(t) {
                this.status = t
            }, m.prototype.createUploadFile = function() {
                this.status !== p && z(R(this), {
                    awsKey: this.name,
                    bucket: this.con.bucket,
                    uploadId: this.uploadId,
                    fileSize: this.sizeBytes,
                    fileType: this.file.type,
                    lastModifiedDate: x(this.file.lastModified),
                    partSize: this.con.partSize,
                    signParams: this.con.signParams,
                    createdAt: (new Date).toISOString()
                })
            }, m.prototype.updateUploadFile = function(t) {
                var e = R(this);
                z(e, _({}, F()[e], t))
            }, m.prototype.completeUploadFile = function(t) {
                var e = F(),
                    r = e[R(this)];
                void 0 !== r && (r.completedAt = (new Date).toISOString(), r.eTag = this.eTag, r.firstMd5Digest = this.firstMd5Digest, e[R(this)] = r, o.setItem("awsUploads", JSON.stringify(e))), this.complete(t, this.name, this.progessStats()), this.setStatus(3), this.onProgress()
            }, m.prototype.removeUploadFile = function() {
                void 0 !== this.file && function(t) {
                    var e = F();
                    delete e[t], o.setItem("awsUploads", JSON.stringify(e))
                }(R(this))
            }, m.prototype.getUnfinishedFileUpload = function() {
                var t = F(!0)[R(this)];
                this.canRetryUpload(t) && (this.uploadId = t.uploadId, this.name = t.awsKey, this.eTag = t.eTag, this.firstMd5Digest = t.firstMd5Digest, this.signParams = t.signParams)
            }, m.prototype.canRetryUpload = function(e) {
                if (void 0 === e)
                    return !1;
                var o = new Date(e.completedAt || r);
                return this.con.partSize === e.partSize && o > t && this.con.bucket === e.bucket && (!this.con.onlyRetryForSameFileName || this.name === e.awsKey)
            }, m.prototype.partSuccess = function(t, o) {
                var r = o.part;
                if (e.d(o.request.step, "ETag:", t), r.isEmpty || '"d41d8cd98f00b204e9800998ecf8427e"' !== t)
                    return r.eTag = t, r.status = 3, this.partsOnS3.push(r), !0;
                r.status = a, o.resetLoadedBytes();
                var s = ["eTag matches MD5 of 0 length blob for part #", o.partNumber, "Retrying part."].join(" ");
                e.w(s), this.warn(s)
            }, m.prototype.listPartsSuccess = function(t, e) {
                this.info("uploadId", this.uploadId, "is not complete. Fetching parts from part marker", t.partNumberMarker), e = e.replace(/(\r\n|\n|\r)/gm, "");
                for (var o = /<Part>(.+?)<\/Part\>/g;;) {
                    var r = (o.exec(e) || [])[1];
                    if (!r)
                        break;
                    var s = parseInt(O(r, "Size"), 10);
                    this.fileTotalBytesUploaded += s, this.partsOnS3.push({
                        eTag: O(r, "ETag").replace(/&quot;/g, '"'),
                        partNumber: parseInt(O(r, "PartNumber"), 10),
                        size: s,
                        LastModified: O(r, "LastModified")
                    })
                }
                return "true" === O(e, "IsTruncated") ? O(e, "NextPartNumberMarker") : void 0
            }, m.prototype.makePartsfromPartsOnS3 = function() {
                -1 !== l.indexOf(this.status) && (this.nameChanged(this.name), this.partsOnS3.forEach(function(t) {
                    var e = this.makePart(t.partNumber, 3, t.size);
                    e.eTag = t.eTag, e.loadedBytes = t.size, e.loadedBytesPrevious = t.size, e.finishedUploadingAt = t.LastModified
                }.bind(this)))
            }, m.prototype.completeUpload = function() {
                var t = this;
                return new P(this).send().then(function(e) {
                    t.eTag = O(e.responseText, "ETag").replace(/&quot;/g, '"'), t.completeUploadFile(e)
                })
            }, m.prototype.getCompletedPayload = function() {
                var t = [];
                return t.push("<CompleteMultipartUpload>"), this.s3Parts.forEach(function(e, o) {
                    o > 0 && ["<Part><PartNumber>", o, "</PartNumber><ETag>", e.eTag, "</ETag></Part>"].forEach(function(e) {
                        t.push(e)
                    })
                }), t.push("</CompleteMultipartUpload>"), t.join("")
            }, m.prototype.consumeSlots = function() {
                if (0 === this.partsToUpload.length)
                    return -1;
                if (this.partsToUpload.length !== this.partsInProcess.length && this.status === s) {
                    var t = Math.min(this.getRemainingSlots(), this.partsToUpload.length);
                    if (!t)
                        return -1;
                    for (var e = 0, o = 0; o < this.partsToUpload.length; o++) {
                        var r = this.s3Parts[this.partsToUpload[o]];
                        if (r.status !== s && this.canStartPart(r)) {
                            this.partsInProcess.length && this.partsToUpload.length > 1 && this.evaporatingCnt(1), this.partsInProcess.push(r.partNumber);
                            var i = r.awsRequest;
                            if (this.lastPartSatisfied.then(i.delaySend.bind(i)), this.lastPartSatisfied = i.getStartedPromise(), (e += 1) === t)
                                break
                        }
                    }
                    var n = this.partsToUpload.length === this.partsInProcess.length,
                        a = this.getRemainingSlots();
                    return n && a > 0 && this.startNextFile("consume slots"), a
                }
                return 0
            }, m.prototype.canStartPart = function(t) {
                return -1 === this.partsInProcess.indexOf(t.partNumber) && !t.awsRequest.errorExceptionStatus()
            }, m.prototype.uploadFile = function(t) {
                this.removeUploadFile();
                var e = this;
                return new S(e, t).send().then(function() {
                    return e.uploadInitiated(e.uploadId), e.partsToUpload = [], e.uploadParts().then(function() {}, function(t) {
                        throw t
                    })
                })
            }, m.prototype.uploadParts = function() {
                if (this.loaded = 0, this.totalUploaded = 0, -1 === l.indexOf(this.status))
                    return Promise.reject("Part uploading stopped because the file was canceled");
                var t = this.makeParts();
                return this.setStatus(s), this.startTime = new Date, this.consumeSlots(), Promise.all(t)
            }, m.prototype.abortUpload = function() {
                return new Promise(function(t, e) {
                    void 0 !== this.uploadId ? new T(this).send().then(t, e) : t()
                }.bind(this)).then(function() {
                    this.setStatus(p), this.cancelled(), this.removeUploadFile()
                }.bind(this), this.deferredCompletion.reject.bind(this))
            }, m.prototype.resumeInterruptedUpload = function() {
                return new b(this).send().then(this.uploadParts.bind(this))
            }, m.prototype.reuseS3Object = function(t) {
                var o = this;
                this.makeParts(1), this.partsToUpload = [];
                var r = this.s3Parts[1];
                function s(e) {
                    throw o.name = t, e
                }
                return r.awsRequest.getPartMd5Digest().then(function() {
                    if (o.firstMd5Digest === r.md5_digest)
                        return new w(o, t).send().then(function(t) {
                            e.d("headObject found matching object on S3."), o.completeUploadFile(t), o.nameChanged(o.name)
                        }).catch(s);
                    s(o.con.allowS3ExistenceOptimization ? "File's first part MD5 digest does not match what was stored." : "allowS3ExistenceOptimization is not enabled.")
                })
            }, y.prototype.fileUpload = void 0, y.prototype.con = void 0, y.prototype.awsUrl = void 0, y.prototype.awsHost = void 0, y.prototype.authorize = function() {}, y.prototype.localTimeOffset = 0, y.prototype.awsDeferred = void 0, y.prototype.started = void 0, y.prototype.getPath = function() {
                var t = "/" + this.con.bucket + "/" + this.fileUpload.name;
                return (this.con.cloudfront || this.awsUrl.indexOf("cloudfront") > -1) && (t = "/" + this.fileUpload.name), t
            }, y.prototype.updateRequest = function(t) {
                this.request = t;
                var o = function(t, e) {
                    var o = t.con;
                    function r(t) {
                        this.request = t
                    }
                    function s(t) {
                        r.call(this, t)
                    }
                    function i(t) {
                        this._cr = void 0, r.call(this, t)
                    }
                    return r.prototype.request = {}, r.prototype.error = function() {}, r.prototype.authorizationString = function() {}, r.prototype.stringToSign = function() {}, r.prototype.canonicalRequest = function() {}, r.prototype.setHeaders = function() {}, r.prototype.datetime = function(t) {
                        return new Date((new Date).getTime() + t)
                    }, r.prototype.dateString = function(t) {
                        return this.datetime(t).toISOString().slice(0, 19).replace(/-|:/g, "") + "Z"
                    }, s.prototype = Object.create(r.prototype), s.prototype.constructor = s, s.prototype.authorizationString = function() {
                        return ["AWS ", o.aws_key, ":", this.request.auth].join("")
                    }, s.prototype.stringToSign = function() {
                        var r,
                            s = "",
                            i = [];
                        for (var n in this.request.x_amz_headers)
                            this.request.x_amz_headers.hasOwnProperty(n) && i.push(n);
                        return i.sort(), i.forEach(function(t) {
                            s += t + ":" + this.request.x_amz_headers[t] + "\n"
                        }.bind(this)), r = this.request.method + "\n" + (this.request.md5_digest || "") + "\n" + (this.request.contentType || "") + "\n\n" + s + (o.cloudfront ? "/" + o.bucket : "") + t.getPath() + this.request.path, e.d("V2 stringToSign:", r), r
                    }, s.prototype.dateString = function(t) {
                        return this.datetime(t).toUTCString()
                    }, s.prototype.getPayload = function() {
                        return Promise.resolve()
                    }, i.prototype = Object.create(r.prototype), i.prototype.constructor = i, i.prototype._cr = void 0, i.prototype.payload = null, i.prototype.error = function() {
                        this._cr = void 0
                    }, i.prototype.getPayload = function() {
                        return t.getPayload().then(function(t) {
                            this.payload = t
                        }.bind(this))
                    }, i.prototype.authorizationString = function() {
                        var t = [],
                            e = this.credentialString(),
                            r = this.canonicalHeaders();
                        return t.push(["AWS4-HMAC-SHA256 Credential=", o.aws_key, "/", e].join("")), t.push("SignedHeaders=" + r.signedHeaders), t.push("Signature=" + this.request.auth), t.join(", ")
                    }, i.prototype.stringToSign = function() {
                        var t = [];
                        t.push("AWS4-HMAC-SHA256"), t.push(this.request.dateString), t.push(this.credentialString()), t.push(o.cryptoHexEncodedHash256(this.canonicalRequest()));
                        var r = t.join("\n");
                        return e.d("V4 stringToSign:", r), r
                    }, i.prototype.credentialString = function() {
                        var t = [];
                        return t.push(this.request.dateString.slice(0, 8)), t.push(o.awsRegion), t.push("s3"), t.push("aws4_request"), t.join("/")
                    }, i.prototype.canonicalQueryString = function() {
                        var e,
                            o,
                            r = t.request.query_string || "",
                            s = q([t.awsUrl, this.request.path, r].join("")).search,
                            i = s.length ? s.split("&") : [],
                            n = [];
                        for (o = 0; o < i.length; o++)
                            e = i[o].split("="), n.push({
                                name: encodeURIComponent(e[0]),
                                value: e.length > 1 ? encodeURIComponent(e[1]) : null
                            });
                        var a = n.sort(function(t, e) {
                                return t.name < e.name ? -1 : t.name > e.name ? 1 : 0
                            }),
                            p = [];
                        for (o = 0; o < a.length; o++)
                            e = a[o].value ? [a[o].name, a[o].value].join("=") : a[o].name + "=", p.push(e);
                        return p.join("&")
                    }, i.prototype.getPayloadSha256Content = function() {
                        var t = this.request.contentSha256 || o.cryptoHexEncodedHash256(this.payload || "");
                        return e.d(this.request.step, "getPayloadSha256Content:", t), t
                    }, i.prototype.canonicalHeaders = function() {
                        var e,
                            o = [],
                            r = [];
                        function s(t, e) {
                            var s = t.toLowerCase();
                            r.push(s), o[s] = e.replace(/\s+/g, " ")
                        }
                        this.request.md5_digest && s("Content-Md5", this.request.md5_digest), s("Host", t.awsHost), this.request.contentType && s("Content-Type", this.request.contentType || "");
                        var i = this.request.x_amz_headers || {};
                        for (var n in i)
                            i.hasOwnProperty(n) && s(n, i[n]);
                        var a = r.sort(function(t, e) {
                                return t < e ? -1 : t > e ? 1 : 0
                            }),
                            p = [],
                            u = [],
                            d = this.request.not_signed_headers || [],
                            l = [];
                        for (e = 0; e < d.length; e++)
                            u.push(d[e].toLowerCase());
                        for (e = 0; e < a.length; e++) {
                            var h = a[e];
                            p.push([h, o[h]].join(":")), -1 === u.indexOf(h) && l.push(h)
                        }
                        return {
                            canonicalHeaders: p.join("\n"),
                            signedHeaders: l.join(";")
                        }
                    }, i.prototype.canonicalRequest = function() {
                        if (void 0 !== this._cr)
                            return this._cr;
                        var o = [];
                        o.push(this.request.method), o.push(q([t.awsUrl, t.getPath(), this.request.path].join("")).pathname), o.push(this.canonicalQueryString() || "");
                        var r = this.canonicalHeaders();
                        return o.push(r.canonicalHeaders + "\n"), o.push(r.signedHeaders), o.push(this.getPayloadSha256Content()), this._cr = o.join("\n"), e.d(this.request.step, "V4 CanonicalRequest:", this._cr), this._cr
                    }, i.prototype.setHeaders = function(t) {
                        t.setRequestHeader("x-amz-content-sha256", this.getPayloadSha256Content())
                    }, "4" === o.awsSignatureVersion ? i : s
                }(this, e);
                this.signer = new o(t)
            }, y.prototype.success = function() {
                this.awsDeferred.resolve(this.currentXhr)
            }, y.prototype.backOffWait = function() {
                return 1 === this.attempts ? 0 : 1e3 * Math.min(this.con.maxRetryBackoffSecs, Math.pow(this.con.retryBackoffPower, this.attempts - 2))
            }, y.prototype.error = function(t) {
                if (!this.errorExceptionStatus() && (this.signer.error(), e.d(this.request.step, "error:", this.fileUpload.id, t), void 0 === this.errorHandler(t))) {
                    this.fileUpload.warn("Error in ", this.request.step, t), this.fileUpload.setStatus(a);
                    var o = this,
                        r = this.backOffWait();
                    this.attempts += 1, setTimeout(function() {
                        o.errorExceptionStatus() || o.trySend()
                    }, r)
                }
            }, y.prototype.errorHandler = function() {}, y.prototype.errorExceptionStatus = function() {
                return !1
            }, y.prototype.getPayload = function() {
                return Promise.resolve(null)
            }, y.prototype.success_status = function(t) {
                return t.status >= 200 && t.status <= 299 || this.request.success404 && 404 === t.status
            }, y.prototype.stringToSign = function() {
                return encodeURIComponent(this.signer.stringToSign())
            }, y.prototype.canonicalRequest = function() {
                return this.signer.canonicalRequest()
            }, y.prototype.signResponse = function(t, e, o) {
                var r = this;
                return new Promise(function(s) {
                    if ("function" == typeof r.con.signResponseHandler)
                        return r.con.signResponseHandler(t, e, o).then(s);
                    s(t)
                })
            }, y.prototype.sendRequestToAWS = function() {
                var t = this;
                return new Promise(function(e, o) {
                    var r = new XMLHttpRequest;
                    t.currentXhr = r;
                    var s = [t.awsUrl, t.getPath(), t.request.path].join(""),
                        i = {};
                    for (var n in t.request.query_string && (s += t.request.query_string), _(i, t.request.not_signed_headers), _(i, t.request.x_amz_headers), r.onreadystatechange = function() {
                        if (4 === r.readyState)
                            if (t.success_status(r))
                                t.request.response_match && void 0 === r.response.match(new RegExp(t.request.response_match)) ? o("AWS response does not match set pattern: " + t.request.response_match) : e();
                            else {
                                var s = r.responseText ? C(r) : " ";
                                s += "status:" + r.status, o(s)
                            }
                    }, r.open(t.request.method, s), r.setRequestHeader("Authorization", t.signer.authorizationString()), i)
                        i.hasOwnProperty(n) && r.setRequestHeader(n, i[n]);
                    t.signer.setHeaders(r), t.request.contentType && r.setRequestHeader("Content-Type", t.request.contentType), t.request.md5_digest && r.setRequestHeader("Content-MD5", t.request.md5_digest), r.onerror = function(t) {
                        var e = t.responseText ? C(t) : "transport error";
                        o(e)
                    }, "function" == typeof t.request.onProgress && (r.upload.onprogress = t.request.onProgress), t.getPayload().then(r.send.bind(r), o), setTimeout(function() {
                        t.started.resolve("request sent " + t.request.step)
                    }, 20), t.signer.payload = null, t.payloadPromise = void 0
                })
            }, y.prototype.authorize = function() {
                return this.request.dateString = this.signer.dateString(this.localTimeOffset), this.request.x_amz_headers = _(this.request.x_amz_headers, {
                    "x-amz-date": this.request.dateString
                }), this.signer.getPayload().then(function() {
                    return function(t) {
                        var e = t.fileUpload,
                            o = e.con,
                            r = t.request;
                        function s() {
                            this.request = r
                        }
                        function i() {
                            s.call(this)
                        }
                        if (s.prototype = Object.create(s.prototype), s.prototype.request = {}, s.makeSignParamsObject = function(t) {
                            var e = {};
                            for (var o in t)
                                t.hasOwnProperty(o) && ("function" == typeof t[o] ? e[o] = t[o]() : e[o] = t[o]);
                            return e
                        }, s.prototype.authorize = function() {
                            return new Promise(function(i, n) {
                                var a = new XMLHttpRequest;
                                t.currentXhr = a;
                                var p = t.stringToSign(),
                                    u = [o.signerUrl, "?to_sign=", p, "&datetime=", r.dateString];
                                o.sendCanonicalRequestToSignerUrl && (u.push("&canonical_request="), u.push(encodeURIComponent(t.canonicalRequest()))), u = u.join("");
                                var d = s.makeSignParamsObject(e.signParams);
                                for (var l in d)
                                    d.hasOwnProperty(l) && (u += "&" + encodeURIComponent(l) + "=" + encodeURIComponent(d[l]));
                                o.xhrWithCredentials && (a.withCredentials = !0), a.onreadystatechange = function() {
                                    if (4 === a.readyState)
                                        if (200 === a.status)
                                            t.signResponse(a.response, p, r.dateString).then(i);
                                        else {
                                            if ([401, 403].indexOf(a.status) > -1) {
                                                var o = "status:" + a.status;
                                                return e.deferredCompletion.reject("Permission denied " + o), n(o)
                                            }
                                            n("Signature fetch returned status: " + a.status)
                                        }
                                }, a.onerror = function(t) {
                                    n("authorizedSend transport error: " + t.responseText)
                                }, a.open("GET", u);
                                var h = s.makeSignParamsObject(o.signHeaders);
                                for (var c in h)
                                    h.hasOwnProperty(c) && a.setRequestHeader(c, h[c]);
                                "function" == typeof e.beforeSigner && e.beforeSigner(a, u), a.send()
                            })
                        }, i.prototype = Object.create(s.prototype), i.prototype.authorize = function() {
                            return o.customAuthMethod(s.makeSignParamsObject(e.signParams), s.makeSignParamsObject(o.signHeaders), t.stringToSign(), r.dateString, t.canonicalRequest()).catch(function(t) {
                                throw e.deferredCompletion.reject(t), t
                            })
                        }, "function" == typeof o.customAuthMethod)
                            return new i;
                        return new s
                    }(this).authorize()
                }.bind(this))
            }, y.prototype.authorizationSuccess = function(t) {
                e.d(this.request.step, "signature:", t), this.request.auth = t
            }, y.prototype.trySend = function() {
                var t = this;
                return this.authorize().then(function(e) {
                    t.authorizationSuccess(e), t.fileUpload.status !== p && t.sendRequestToAWS().then(t.success.bind(t), t.error.bind(t))
                }, t.error.bind(t))
            }, y.prototype.send = function() {
                return this.trySend(), this.awsDeferred.promise
            }, g.prototype = Object.create(y.prototype), g.prototype.constructor = g, g.prototype.errorExceptionStatus = function() {
                return [p, n].indexOf(this.fileUpload.status) > -1
            }, v.prototype = Object.create(g.prototype), v.prototype.constructor = v, v.prototype.maxRetries = 1, v.prototype.errorHandler = function(t) {
                if (this.attempts > this.maxRetries) {
                    var o = ["MaxRetries exceeded. Will re-upload file id ", this.fileUpload.id, ", ", t].join("");
                    return e.w(o), this.awsDeferred.reject(o), !0
                }
            }, v.prototype.rejectedSuccess = function() {
                var t = Array.prototype.slice.call(arguments, 1).join("");
                return this.awsDeferred.reject(t), !1
            }, S.prototype = Object.create(g.prototype), S.prototype.constructor = S, S.prototype.success = function() {
                var t = this.currentXhr.response.match(new RegExp(this.request.response_match));
                this.fileUpload.uploadId = t[1], this.fileUpload.awsKey = this.awsKey, e.d("InitiateMultipartUpload ID is", this.fileUpload.uploadId), this.fileUpload.createUploadFile(), this.awsDeferred.resolve(this.currentXhr)
            }, P.prototype = Object.create(g.prototype), P.prototype.constructor = P, P.prototype.getPayload = function() {
                return Promise.resolve(this.fileUpload.getCompletedPayload())
            }, w.prototype = Object.create(v.prototype), w.prototype.constructor = w, w.prototype.awsKey = void 0, w.prototype.success = function() {
                (this.currentXhr.getResponseHeader("Etag") === this.fileUpload.eTag || this.rejectedSuccess("uploadId ", this.fileUpload.id, " found on S3 but the Etag doesn't match.")) && this.awsDeferred.resolve(this.currentXhr)
            }, b.prototype = Object.create(v.prototype), b.prototype.constructor = b, b.prototype.awsKey = void 0, b.prototype.partNumberMarker = 0, b.prototype.setupRequest = function(t) {
                var o = ["setupRequest() for uploadId:", this.fileUpload.uploadId, "for part marker:", t].join(" ");
                e.d(o), this.fileUpload.info(o), this.awsKey = this.fileUpload.name, this.partNumberMarker = t;
                var r = {
                    method: "GET",
                    path: ["?uploadId=", this.fileUpload.uploadId].join(""),
                    query_string: "&part-number-marker=" + t,
                    x_amz_headers: this.fileUpload.xAmzHeadersCommon,
                    step: "get upload parts",
                    success404: !0
                };
                return this.request = r, r
            }, b.prototype.success = function() {
                if (404 !== this.currentXhr.status) {
                    var t = this.fileUpload.listPartsSuccess(this, this.currentXhr.responseText);
                    if (t) {
                        var e = this.setupRequest(t);
                        this.updateRequest(e), this.trySend()
                    } else
                        this.fileUpload.makePartsfromPartsOnS3(), this.awsDeferred.resolve(this.currentXhr)
                } else
                    this.rejectedSuccess("uploadId ", this.fileUpload.id, " not found on S3.") && this.awsDeferred.resolve(this.currentXhr)
            }, U.prototype = Object.create(y.prototype), U.prototype.constructor = U, U.prototype.part = 1, U.prototype.payloadPromise = void 0, U.prototype.start = 0, U.prototype.end = 0, U.prototype.partNumber = void 0, U.prototype.getPartMd5Digest = function() {
                var t = this,
                    o = this.part;
                return new Promise(function(e, r) {
                    t.con.computeContentMd5 && !o.md5_digest ? t.getPayload().then(function(o) {
                        var r = t.con.cryptoMd5Method(o);
                        1 === t.partNumber && t.con.computeContentMd5 && void 0 === t.fileUpload.firstMd5Digest && (t.fileUpload.firstMd5Digest = r, t.fileUpload.updateUploadFile({
                            firstMd5Digest: r
                        })), e(r)
                    }, r) : e(o.md5_digest)
                }).then(function(o) {
                    o && (e.d(t.request.step, "MD5 digest:", o), t.request.md5_digest = o, t.part.md5_digest = o)
                })
            }, U.prototype.sendRequestToAWS = function() {
                return this.stalledInterval = setInterval(this.stalledPartMonitor(), 12e4), this.stalledPartMonitor(), y.prototype.sendRequestToAWS.call(this)
            }, U.prototype.send = function() {
                if (3 !== this.part.status && -1 === [p, i, n].indexOf(this.fileUpload.status)) {
                    e.d("uploadPart #", this.partNumber, 1 === this.attempts ? "submitting" : "retrying"), this.part.status = s, this.attempts += 1, this.part.loadedBytesPrevious = null;
                    var t = this;
                    return this.getPartMd5Digest().then(function() {
                        e.d("Sending", t.request.step), y.prototype.send.call(t)
                    })
                }
            }, U.prototype.success = function() {
                clearInterval(this.stalledInterval);
                var t = this.currentXhr.getResponseHeader("ETag");
                this.currentXhr = null, this.fileUpload.partSuccess(t, this) && this.awsDeferred.resolve(this.currentXhr)
            }, U.prototype.onProgress = function(t) {
                if (t.loaded > 0) {
                    var e = t.loaded - this.part.loadedBytes;
                    e && (this.part.loadedBytes = t.loaded, this.fileUpload.updateLoaded(e))
                }
            }, U.prototype.stalledPartMonitor = function() {
                var t = this.part.loadedBytes,
                    o = this;
                return function() {
                    clearInterval(o.stalledInterval), -1 === [s, a, u, i].indexOf(o.fileUpload.status) && o.part.status !== p && o.part.loadedBytes < this.size && (t === o.part.loadedBytes ? (e.w("Part stalled. Will abort and retry:", o.partNumber, decodeURIComponent(o.fileUpload.name)), o.abort(), o.errorExceptionStatus() || o.delaySend()) : o.stalledInterval = setInterval(o.stalledPartMonitor(), 12e4))
                }
            }, U.prototype.resetLoadedBytes = function() {
                this.fileUpload.updateLoaded(-this.part.loadedBytes), this.part.loadedBytes = 0, this.fileUpload.onProgress()
            }, U.prototype.errorExceptionStatus = function() {
                return [n, p, i, u].indexOf(this.fileUpload.status) > -1
            }, U.prototype.delaySend = function() {
                var t = this.backOffWait();
                this.attempts += 1, setTimeout(this.send.bind(this), t)
            }, U.prototype.errorHandler = function(t) {
                if (clearInterval(this.stalledInterval), t.match(/status:404/)) {
                    var o = "404 error on part PUT. The part and the file will abort. " + t;
                    return e.w(o), this.fileUpload.error(o), this.part.status = p, this.awsDeferred.reject(o), !0
                }
                return this.resetLoadedBytes(), this.part.status = a, this.errorExceptionStatus() || this.delaySend(), !0
            }, U.prototype.abort = function() {
                this.currentXhr && this.currentXhr.abort(), this.resetLoadedBytes(), this.attempts = 1
            }, U.size = 0, U.prototype.streamToArrayBuffer = function(t) {
                return new Promise(function(e, o) {
                    if (!t.readable)
                        return e([]);
                    var r = new Uint8Array(Math.min(this.con.partSize, this.end - this.start)),
                        s = 0;
                    function i(t) {
                        1 !== t.byteLength && (r.set(t, s), s += t.byteLength)
                    }
                    function n(t) {
                        t ? o(t) : e(r), p()
                    }
                    function a() {
                        e(r), p()
                    }
                    function p() {
                        r = null, t.removeListener("data", i), t.removeListener("end", n), t.removeListener("error", n), t.removeListener("close", a)
                    }
                    t.on("data", i), t.on("end", n), t.on("error", n), t.on("close", a)
                }.bind(this))
            }, U.prototype.getPayload = function() {
                return void 0 === this.payloadPromise && (this.payloadPromise = this.con.readableStreams ? this.payloadFromStream() : this.payloadFromBlob()), this.payloadPromise
            }, U.prototype.payloadFromStream = function() {
                var t = this.con.readableStreamPartMethod(this.fileUpload.file, this.start, this.end - 1);
                return new Promise(function(e, o) {
                    this.streamToArrayBuffer(t).then(function(t) {
                        e(t)
                    }.bind(this), o)
                }.bind(this))
            }, U.prototype.payloadFromBlob = function() {
                var t = this.fileUpload.file,
                    e = t[t.slice ? "slice" : t.mozSlice ? "mozSlice" : "webkitSlice"](this.start, this.end);
                return this.con.computeContentMd5 ? new Promise(function(t) {
                    var o = new FileReader;
                    o.onloadend = function() {
                        var e = this.result && void 0 !== this.result.buffer ? new Uint8Array(this.result.buffer) : this.result;
                        t(e)
                    }, o.readAsArrayBuffer(e)
                }) : Promise.resolve(e)
            }, U.prototype.stalledInterval = -1, U.prototype.getStartedPromise = function() {
                return this.started.promise
            }, T.prototype = Object.create(y.prototype), T.prototype.constructor = T, T.prototype.maxRetries = 1, T.prototype.success = function() {
                this.fileUpload.setStatus(p), this.awsDeferred.resolve(this.currentXhr)
            }, T.prototype.errorHandler = function(t) {
                if (this.attempts > this.maxRetries) {
                    var o = "Error aborting upload, Exceeded retries deleting the file upload: " + t;
                    return e.w(o), this.fileUpload.error(o), this.awsDeferred.reject(o), !0
                }
            }, H.prototype.supported = !1, H.prototype.cacheStore = void 0, H.prototype.getItem = function(t) {
                if (this.cacheStore)
                    return this.cacheStore[t]
            }, H.prototype.setItem = function(t, e) {
                this.cacheStore && (this.cacheStore[t] = e)
            }, H.prototype.removeItem = function(t) {
                if (this.cacheStore)
                    return delete this.cacheStore[t]
            }, H.supported = function() {
                if ("undefined" == typeof window)
                    return !1;
                if (!("localStorage" in window))
                    return !1;
                try {
                    var t = "___test";
                    localStorage[t] = "OK";
                    var e = localStorage[t];
                    return delete localStorage[t], "OK" === e
                } catch (o) {
                    return !1
                }
            }, e = {
                d: function() {},
                w: function() {},
                e: function() {}
            }, "undefined" != typeof module && module.exports ? module.exports = f : "undefined" != typeof window && (window.Evaporate = f)
        }();
    }, {}],
    "13nb": [function(require, module, exports) {
        var define;
        var t;
        !function(r) {
            if ("object" == typeof exports)
                module.exports = r();
            else if ("function" == typeof t && t.amd)
                t(r);
            else {
                var e;
                try {
                    e = window
                } catch (n) {
                    e = self
                }
                e.SparkMD5 = r()
            }
        }(function(t) {
            "use strict";
            var r = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
            function e(t, r) {
                var e = t[0],
                    n = t[1],
                    f = t[2],
                    i = t[3];
                n = ((n += ((f = ((f += ((i = ((i += ((e = ((e += (n & f | ~n & i) + r[0] - 680876936 | 0) << 7 | e >>> 25) + n | 0) & n | ~e & f) + r[1] - 389564586 | 0) << 12 | i >>> 20) + e | 0) & e | ~i & n) + r[2] + 606105819 | 0) << 17 | f >>> 15) + i | 0) & i | ~f & e) + r[3] - 1044525330 | 0) << 22 | n >>> 10) + f | 0, n = ((n += ((f = ((f += ((i = ((i += ((e = ((e += (n & f | ~n & i) + r[4] - 176418897 | 0) << 7 | e >>> 25) + n | 0) & n | ~e & f) + r[5] + 1200080426 | 0) << 12 | i >>> 20) + e | 0) & e | ~i & n) + r[6] - 1473231341 | 0) << 17 | f >>> 15) + i | 0) & i | ~f & e) + r[7] - 45705983 | 0) << 22 | n >>> 10) + f | 0, n = ((n += ((f = ((f += ((i = ((i += ((e = ((e += (n & f | ~n & i) + r[8] + 1770035416 | 0) << 7 | e >>> 25) + n | 0) & n | ~e & f) + r[9] - 1958414417 | 0) << 12 | i >>> 20) + e | 0) & e | ~i & n) + r[10] - 42063 | 0) << 17 | f >>> 15) + i | 0) & i | ~f & e) + r[11] - 1990404162 | 0) << 22 | n >>> 10) + f | 0, n = ((n += ((f = ((f += ((i = ((i += ((e = ((e += (n & f | ~n & i) + r[12] + 1804603682 | 0) << 7 | e >>> 25) + n | 0) & n | ~e & f) + r[13] - 40341101 | 0) << 12 | i >>> 20) + e | 0) & e | ~i & n) + r[14] - 1502002290 | 0) << 17 | f >>> 15) + i | 0) & i | ~f & e) + r[15] + 1236535329 | 0) << 22 | n >>> 10) + f | 0, n = ((n += ((f = ((f += ((i = ((i += ((e = ((e += (n & i | f & ~i) + r[1] - 165796510 | 0) << 5 | e >>> 27) + n | 0) & f | n & ~f) + r[6] - 1069501632 | 0) << 9 | i >>> 23) + e | 0) & n | e & ~n) + r[11] + 643717713 | 0) << 14 | f >>> 18) + i | 0) & e | i & ~e) + r[0] - 373897302 | 0) << 20 | n >>> 12) + f | 0, n = ((n += ((f = ((f += ((i = ((i += ((e = ((e += (n & i | f & ~i) + r[5] - 701558691 | 0) << 5 | e >>> 27) + n | 0) & f | n & ~f) + r[10] + 38016083 | 0) << 9 | i >>> 23) + e | 0) & n | e & ~n) + r[15] - 660478335 | 0) << 14 | f >>> 18) + i | 0) & e | i & ~e) + r[4] - 405537848 | 0) << 20 | n >>> 12) + f | 0, n = ((n += ((f = ((f += ((i = ((i += ((e = ((e += (n & i | f & ~i) + r[9] + 568446438 | 0) << 5 | e >>> 27) + n | 0) & f | n & ~f) + r[14] - 1019803690 | 0) << 9 | i >>> 23) + e | 0) & n | e & ~n) + r[3] - 187363961 | 0) << 14 | f >>> 18) + i | 0) & e | i & ~e) + r[8] + 1163531501 | 0) << 20 | n >>> 12) + f | 0, n = ((n += ((f = ((f += ((i = ((i += ((e = ((e += (n & i | f & ~i) + r[13] - 1444681467 | 0) << 5 | e >>> 27) + n | 0) & f | n & ~f) + r[2] - 51403784 | 0) << 9 | i >>> 23) + e | 0) & n | e & ~n) + r[7] + 1735328473 | 0) << 14 | f >>> 18) + i | 0) & e | i & ~e) + r[12] - 1926607734 | 0) << 20 | n >>> 12) + f | 0, n = ((n += ((f = ((f += ((i = ((i += ((e = ((e += (n ^ f ^ i) + r[5] - 378558 | 0) << 4 | e >>> 28) + n | 0) ^ n ^ f) + r[8] - 2022574463 | 0) << 11 | i >>> 21) + e | 0) ^ e ^ n) + r[11] + 1839030562 | 0) << 16 | f >>> 16) + i | 0) ^ i ^ e) + r[14] - 35309556 | 0) << 23 | n >>> 9) + f | 0, n = ((n += ((f = ((f += ((i = ((i += ((e = ((e += (n ^ f ^ i) + r[1] - 1530992060 | 0) << 4 | e >>> 28) + n | 0) ^ n ^ f) + r[4] + 1272893353 | 0) << 11 | i >>> 21) + e | 0) ^ e ^ n) + r[7] - 155497632 | 0) << 16 | f >>> 16) + i | 0) ^ i ^ e) + r[10] - 1094730640 | 0) << 23 | n >>> 9) + f | 0, n = ((n += ((f = ((f += ((i = ((i += ((e = ((e += (n ^ f ^ i) + r[13] + 681279174 | 0) << 4 | e >>> 28) + n | 0) ^ n ^ f) + r[0] - 358537222 | 0) << 11 | i >>> 21) + e | 0) ^ e ^ n) + r[3] - 722521979 | 0) << 16 | f >>> 16) + i | 0) ^ i ^ e) + r[6] + 76029189 | 0) << 23 | n >>> 9) + f | 0, n = ((n += ((f = ((f += ((i = ((i += ((e = ((e += (n ^ f ^ i) + r[9] - 640364487 | 0) << 4 | e >>> 28) + n | 0) ^ n ^ f) + r[12] - 421815835 | 0) << 11 | i >>> 21) + e | 0) ^ e ^ n) + r[15] + 530742520 | 0) << 16 | f >>> 16) + i | 0) ^ i ^ e) + r[2] - 995338651 | 0) << 23 | n >>> 9) + f | 0, n = ((n += ((i = ((i += (n ^ ((e = ((e += (f ^ (n | ~i)) + r[0] - 198630844 | 0) << 6 | e >>> 26) + n | 0) | ~f)) + r[7] + 1126891415 | 0) << 10 | i >>> 22) + e | 0) ^ ((f = ((f += (e ^ (i | ~n)) + r[14] - 1416354905 | 0) << 15 | f >>> 17) + i | 0) | ~e)) + r[5] - 57434055 | 0) << 21 | n >>> 11) + f | 0, n = ((n += ((i = ((i += (n ^ ((e = ((e += (f ^ (n | ~i)) + r[12] + 1700485571 | 0) << 6 | e >>> 26) + n | 0) | ~f)) + r[3] - 1894986606 | 0) << 10 | i >>> 22) + e | 0) ^ ((f = ((f += (e ^ (i | ~n)) + r[10] - 1051523 | 0) << 15 | f >>> 17) + i | 0) | ~e)) + r[1] - 2054922799 | 0) << 21 | n >>> 11) + f | 0, n = ((n += ((i = ((i += (n ^ ((e = ((e += (f ^ (n | ~i)) + r[8] + 1873313359 | 0) << 6 | e >>> 26) + n | 0) | ~f)) + r[15] - 30611744 | 0) << 10 | i >>> 22) + e | 0) ^ ((f = ((f += (e ^ (i | ~n)) + r[6] - 1560198380 | 0) << 15 | f >>> 17) + i | 0) | ~e)) + r[13] + 1309151649 | 0) << 21 | n >>> 11) + f | 0, n = ((n += ((i = ((i += (n ^ ((e = ((e += (f ^ (n | ~i)) + r[4] - 145523070 | 0) << 6 | e >>> 26) + n | 0) | ~f)) + r[11] - 1120210379 | 0) << 10 | i >>> 22) + e | 0) ^ ((f = ((f += (e ^ (i | ~n)) + r[2] + 718787259 | 0) << 15 | f >>> 17) + i | 0) | ~e)) + r[9] - 343485551 | 0) << 21 | n >>> 11) + f | 0, t[0] = e + t[0] | 0, t[1] = n + t[1] | 0, t[2] = f + t[2] | 0, t[3] = i + t[3] | 0
            }
            function n(t) {
                var r,
                    e = [];
                for (r = 0; r < 64; r += 4)
                    e[r >> 2] = t.charCodeAt(r) + (t.charCodeAt(r + 1) << 8) + (t.charCodeAt(r + 2) << 16) + (t.charCodeAt(r + 3) << 24);
                return e
            }
            function f(t) {
                var r,
                    e = [];
                for (r = 0; r < 64; r += 4)
                    e[r >> 2] = t[r] + (t[r + 1] << 8) + (t[r + 2] << 16) + (t[r + 3] << 24);
                return e
            }
            function i(t) {
                var r,
                    f,
                    i,
                    h,
                    o,
                    s,
                    a = t.length,
                    u = [1732584193, -271733879, -1732584194, 271733878];
                for (r = 64; r <= a; r += 64)
                    e(u, n(t.substring(r - 64, r)));
                for (f = (t = t.substring(r - 64)).length, i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], r = 0; r < f; r += 1)
                    i[r >> 2] |= t.charCodeAt(r) << (r % 4 << 3);
                if (i[r >> 2] |= 128 << (r % 4 << 3), r > 55)
                    for (e(u, i), r = 0; r < 16; r += 1)
                        i[r] = 0;
                return h = (h = 8 * a).toString(16).match(/(.*?)(.{0,8})$/), o = parseInt(h[2], 16), s = parseInt(h[1], 16) || 0, i[14] = o, i[15] = s, e(u, i), u
            }
            function h(t) {
                var e,
                    n = "";
                for (e = 0; e < 4; e += 1)
                    n += r[t >> 8 * e + 4 & 15] + r[t >> 8 * e & 15];
                return n
            }
            function o(t) {
                var r;
                for (r = 0; r < t.length; r += 1)
                    t[r] = h(t[r]);
                return t.join("")
            }
            function s(t) {
                return /[\u0080-\uFFFF]/.test(t) && (t = unescape(encodeURIComponent(t))), t
            }
            function a(t) {
                var r,
                    e = [],
                    n = t.length;
                for (r = 0; r < n - 1; r += 2)
                    e.push(parseInt(t.substr(r, 2), 16));
                return String.fromCharCode.apply(String, e)
            }
            function u() {
                this.reset()
            }
            return "5d41402abc4b2a76b9719d911017c592" !== o(i("hello")) && function(t, r) {
                var e = (65535 & t) + (65535 & r);
                return (t >> 16) + (r >> 16) + (e >> 16) << 16 | 65535 & e
            }, "undefined" == typeof ArrayBuffer || ArrayBuffer.prototype.slice || function() {
                function r(t, r) {
                    return (t = 0 | t || 0) < 0 ? Math.max(t + r, 0) : Math.min(t, r)
                }
                ArrayBuffer.prototype.slice = function(e, n) {
                    var f,
                        i,
                        h,
                        o,
                        s = this.byteLength,
                        a = r(e, s),
                        u = s;
                    return n !== t && (u = r(n, s)), a > u ? new ArrayBuffer(0) : (f = u - a, i = new ArrayBuffer(f), h = new Uint8Array(i), o = new Uint8Array(this, a, f), h.set(o), i)
                }
            }(), u.prototype.append = function(t) {
                return this.appendBinary(s(t)), this
            }, u.prototype.appendBinary = function(t) {
                this._buff += t, this._length += t.length;
                var r,
                    f = this._buff.length;
                for (r = 64; r <= f; r += 64)
                    e(this._hash, n(this._buff.substring(r - 64, r)));
                return this._buff = this._buff.substring(r - 64), this
            }, u.prototype.end = function(t) {
                var r,
                    e,
                    n = this._buff,
                    f = n.length,
                    i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                for (r = 0; r < f; r += 1)
                    i[r >> 2] |= n.charCodeAt(r) << (r % 4 << 3);
                return this._finish(i, f), e = o(this._hash), t && (e = a(e)), this.reset(), e
            }, u.prototype.reset = function() {
                return this._buff = "", this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this
            }, u.prototype.getState = function() {
                return {
                    buff: this._buff,
                    length: this._length,
                    hash: this._hash
                }
            }, u.prototype.setState = function(t) {
                return this._buff = t.buff, this._length = t.length, this._hash = t.hash, this
            }, u.prototype.destroy = function() {
                delete this._hash, delete this._buff, delete this._length
            }, u.prototype._finish = function(t, r) {
                var n,
                    f,
                    i,
                    h = r;
                if (t[h >> 2] |= 128 << (h % 4 << 3), h > 55)
                    for (e(this._hash, t), h = 0; h < 16; h += 1)
                        t[h] = 0;
                n = (n = 8 * this._length).toString(16).match(/(.*?)(.{0,8})$/), f = parseInt(n[2], 16), i = parseInt(n[1], 16) || 0, t[14] = f, t[15] = i, e(this._hash, t)
            }, u.hash = function(t, r) {
                return u.hashBinary(s(t), r)
            }, u.hashBinary = function(t, r) {
                var e = o(i(t));
                return r ? a(e) : e
            }, u.ArrayBuffer = function() {
                this.reset()
            }, u.ArrayBuffer.prototype.append = function(t) {
                var r,
                    n,
                    i,
                    h,
                    o,
                    s = (n = this._buff.buffer, i = t, h = !0, (o = new Uint8Array(n.byteLength + i.byteLength)).set(new Uint8Array(n)), o.set(new Uint8Array(i), n.byteLength), h ? o : o.buffer),
                    a = s.length;
                for (this._length += t.byteLength, r = 64; r <= a; r += 64)
                    e(this._hash, f(s.subarray(r - 64, r)));
                return this._buff = r - 64 < a ? new Uint8Array(s.buffer.slice(r - 64)) : new Uint8Array(0), this
            }, u.ArrayBuffer.prototype.end = function(t) {
                var r,
                    e,
                    n = this._buff,
                    f = n.length,
                    i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                for (r = 0; r < f; r += 1)
                    i[r >> 2] |= n[r] << (r % 4 << 3);
                return this._finish(i, f), e = o(this._hash), t && (e = a(e)), this.reset(), e
            }, u.ArrayBuffer.prototype.reset = function() {
                return this._buff = new Uint8Array(0), this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this
            }, u.ArrayBuffer.prototype.getState = function() {
                var t,
                    r = u.prototype.getState.call(this);
                return r.buff = (t = r.buff, String.fromCharCode.apply(null, new Uint8Array(t))), r
            }, u.ArrayBuffer.prototype.setState = function(t) {
                return t.buff = function(t, r) {
                    var e,
                        n = t.length,
                        f = new ArrayBuffer(n),
                        i = new Uint8Array(f);
                    for (e = 0; e < n; e += 1)
                        i[e] = t.charCodeAt(e);
                    return r ? i : f
                }(t.buff, !0), u.prototype.setState.call(this, t)
            }, u.ArrayBuffer.prototype.destroy = u.prototype.destroy, u.ArrayBuffer.prototype._finish = u.prototype._finish, u.ArrayBuffer.hash = function(t, r) {
                var n = o(function(t) {
                    var r,
                        n,
                        i,
                        h,
                        o,
                        s,
                        a = t.length,
                        u = [1732584193, -271733879, -1732584194, 271733878];
                    for (r = 64; r <= a; r += 64)
                        e(u, f(t.subarray(r - 64, r)));
                    for (n = (t = r - 64 < a ? t.subarray(r - 64) : new Uint8Array(0)).length, i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], r = 0; r < n; r += 1)
                        i[r >> 2] |= t[r] << (r % 4 << 3);
                    if (i[r >> 2] |= 128 << (r % 4 << 3), r > 55)
                        for (e(u, i), r = 0; r < 16; r += 1)
                            i[r] = 0;
                    return h = (h = 8 * a).toString(16).match(/(.*?)(.{0,8})$/), o = parseInt(h[2], 16), s = parseInt(h[1], 16) || 0, i[14] = o, i[15] = s, e(u, i), u
                }(new Uint8Array(t)));
                return r ? a(n) : n
            }, u
        });
    }, {}],
    "MiSu": [function(require, module, exports) {

    }, {
        "./../img/glyphicons-halflings.png": [["glyphicons-halflings.21499243.png", "cxU3"], "cxU3"],
        "./../img/glyphicons-halflings-white.png": [["glyphicons-halflings-white.da002663.png", "QCsr"], "QCsr"]
    }],
    "/krr": [function(require, module, exports) {

    }, {}],
    "Focm": [function(require, module, exports) {
        "use strict";
        var e = o(require("js-cookie")),
            t = o(require("sha.js")),
            n = o(require("evaporate")),
            r = o(require("spark-md5"));
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        require("./css/bootstrap.css"), require("./css/styles.css");
        var a = function(e, t, n, r, o, a) {
                var i = new XMLHttpRequest;
                i.open(e, t, !0), Object.keys(r).forEach(function(e) {
                    i.setRequestHeader(e, r[e])
                }), i.onload = function() {
                    a(i.status, i.responseText)
                }, i.onerror = i.onabort = function() {
                    d(!1), s(o, "Sorry, failed to upload file.")
                }, i.send(n)
            },
            i = function(e) {
                return decodeURIComponent((e + "").replace(/\+/g, "%20"))
            },
            c = function(e) {
                var t;
                try {
                    t = JSON.parse(e)
                } catch (n) {
                    t = null
                }
                return t
            },
            u = function(e, t) {
                e.querySelector(".bar").style.width = Math.round(100 * t) + "%"
            },
            s = function(e, t) {
                e.className = "s3direct form-active", e.querySelector(".file-input").value = "", alert(t)
            },
            l = 0,
            d = function(e) {
                var t = document.querySelector(".submit-row");
                if (t) {
                    var n = t.querySelectorAll("input[type=submit],button[type=submit]");
                    !0 === e ? l++ : l--, [].forEach.call(n, function(e) {
                        e.disabled = 0 !== l
                    })
                }
            },
            f = function(e) {
                d(!0), e.className = "s3direct progress-active"
            },
            p = function(e, t, n, r) {
                var o = e.querySelector(".file-link"),
                    a = e.querySelector(".file-url");
                a.value = t + "/" + n + "/" + r, o.setAttribute("href", a.value), o.innerHTML = i(a.value).split("/").pop(), e.className = "s3direct link-active", e.querySelector(".bar").style.width = "0%", d(!1)
            },
            m = function(e) {
                return btoa(r.default.ArrayBuffer.hash(e, !0))
            },
            y = function(e) {
                return (0, t.default)("sha256").update(e, "utf-8").digest("hex")
            },
            v = function(t) {
                var n = t.querySelector(".csrf-cookie-name"),
                    r = document.querySelector("input[name=csrfmiddlewaretoken]");
                return r ? r.value : e.default.get(n.value)
            },
            S = function(e, t, n) {
                var r = {};
                return e && (r["x-amz-acl"] = e), n && (r["x-amz-security-token"] = n), t && (r["x-amz-server-side-encryption"] = t), r
            },
            h = function(e) {
                var t = {};
                return e && (t["x-amz-security-token"] = e), t
            },
            q = function(e, t, n) {
                return function(r, o, i, u, s) {
                    return new Promise(function(r, o) {
                        var s = new FormData,
                            l = {
                                "X-CSRFToken": v(e)
                            };
                        s.append("to_sign", i), s.append("datetime", u), s.append("dest", n), a("POST", t, s, l, e, function(e, t) {
                            var n = c(t);
                            switch (e) {
                            case 200:
                                r(n.s3ObjKey);
                                break;
                            case 403:
                            default:
                                o(n.error)
                            }
                        })
                    })
                }
            },
            g = function(e, t, r, o, a) {
                var i = {
                        customAuthMethod: q(e, t, a),
                        aws_key: r.access_key_id,
                        bucket: r.bucket,
                        aws_url: r.endpoint,
                        awsRegion: r.region,
                        computeContentMd5: !0,
                        cryptoMd5Method: m,
                        cryptoHexEncodedHash256: y,
                        partSize: 20971520,
                        logging: !0,
                        allowS3ExistenceOptimization: r.allow_existence_optimization,
                        s3FileCacheHoursAgo: r.allow_existence_optimization ? 12 : 0
                    },
                    c = {
                        name: r.object_key,
                        file: o,
                        contentType: o.type,
                        xAmzHeadersCommon: h(r.session_token),
                        xAmzHeadersAtInitiate: S(r.acl, r.server_side_encryption, r.session_token),
                        progress: function(t, n) {
                            u(e, t)
                        },
                        warn: function(t, n, r) {
                            r.includes("InvalidAccessKeyId") && s(e, r)
                        }
                    },
                    l = {};
                r.cache_control && (l["Cache-Control"] = r.cache_control), r.content_disposition && (l["Content-Disposition"] = r.content_disposition), c.notSignedHeadersAtInitiate = l, n.default.create(i).then(function(t) {
                    f(e), t.add(c).then(function(t) {
                        p(e, r.endpoint, r.bucket, t)
                    }, function(t) {
                        return s(e, t)
                    })
                })
            },
            k = function(e) {
                var t = e.target.parentElement,
                    n = t.querySelector(".file-input").files[0],
                    r = t.querySelector(".file-dest").value,
                    o = t.getAttribute("data-policy-url"),
                    i = t.getAttribute("data-signing-url"),
                    u = new FormData,
                    l = {
                        "X-CSRFToken": v(t)
                    };
                u.append("dest", r), u.append("name", n.name), u.append("type", n.type), u.append("size", n.size), a("POST", o, u, l, t, function(e, o) {
                    var a = c(o);
                    switch (e) {
                    case 200:
                        g(t, i, a, n, r);
                        break;
                    case 400:
                    case 403:
                    case 500:
                        s(t, a.error);
                        break;
                    default:
                        s(t, "Sorry, could not get upload URL.")
                    }
                })
            },
            b = function(e) {
                e.preventDefault();
                var t = e.target.parentElement;
                t.querySelector(".file-url").value = "", t.querySelector(".file-input").value = "", t.className = "s3direct form-active"
            },
            _ = function(e) {
                var t = e.querySelector(".file-url"),
                    n = e.querySelector(".file-input"),
                    r = e.querySelector(".file-remove"),
                    o = "" === t.value ? "form" : "link";
                e.className = "s3direct " + o + "-active", r.addEventListener("click", b, !1), n.addEventListener("change", k, !1)
            };
        document.addEventListener("DOMContentLoaded", function(e) {
            [].forEach.call(document.querySelectorAll(".s3direct"), _)
        }), document.addEventListener("DOMNodeInserted", function(e) {
            if (e.target.tagName) {
                var t = e.target.querySelectorAll(".s3direct");
                [].forEach.call(t, function(e, t, n) {
                    _(e)
                })
            }
        });
    }, {
        "js-cookie": "PhdE",
        "sha.js": "t0b9",
        "evaporate": "TlVp",
        "spark-md5": "13nb",
        "./css/bootstrap.css": "MiSu",
        "./css/styles.css": "/krr"
    }]
}, {}, ["Focm"], null)

