/*! jQuery v1.11.2 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */ ! function(a, b) { "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) { if (!a.document) throw new Error("jQuery requires a window with a document"); return b(a) } : b(a) }("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = {},
        l = "1.11.2",
        m = function(a, b) { return new m.fn.init(a, b) },
        n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        o = /^-ms-/,
        p = /-([\da-z])/gi,
        q = function(a, b) { return b.toUpperCase() };
    m.fn = m.prototype = {
        jquery: l,
        constructor: m,
        selector: "",
        length: 0,
        toArray: function() { return d.call(this) },
        get: function(a) { return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this) },
        pushStack: function(a) { var b = m.merge(this.constructor(), a); return b.prevObject = this, b.context = this.context, b },
        each: function(a, b) { return m.each(this, a, b) },
        map: function(a) { return this.pushStack(m.map(this, function(b, c) { return a.call(b, c, b) })) },
        slice: function() { return this.pushStack(d.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() { return this.prevObject || this.constructor(null) },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, m.extend = m.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, m.extend({
        expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) { throw new Error(a) },
        noop: function() {},
        isFunction: function(a) { return "function" === m.type(a) },
        isArray: Array.isArray || function(a) { return "array" === m.type(a) },
        isWindow: function(a) { return null != a && a == a.window },
        isNumeric: function(a) { return !m.isArray(a) && a - parseFloat(a) + 1 >= 0 },
        isEmptyObject: function(a) { var b; for (b in a) return !1; return !0 },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) return !1;
            try { if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (c) { return !1 }
            if (k.ownLast)
                for (b in a) return j.call(a, b);
            for (b in a);
            return void 0 === b || j.call(a, b)
        },
        type: function(a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a },
        globalEval: function(b) { b && m.trim(b) && (a.execScript || function(b) { a.eval.call(a, b) })(b) },
        camelCase: function(a) { return a.replace(o, "ms-").replace(p, q) },
        nodeName: function(a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() },
        each: function(a, b, c) {
            var d, e = 0,
                f = a.length,
                g = r(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c), d === !1) break
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c), d === !1) break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]), d === !1) break
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d === !1) break; return a
        },
        trim: function(a) { return null == a ? "" : (a + "").replace(n, "") },
        makeArray: function(a, b) { var c = b || []; return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (g) return g.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;
            while (c > d) a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function(a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]); return e },
        map: function(a, b, c) {
            var d, f = 0,
                g = a.length,
                h = r(a),
                i = [];
            if (h)
                for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
            else
                for (f in a) d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) { var c, e, f; return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function() { return a.apply(b || this, c.concat(d.call(arguments))) }, e.guid = a.guid = a.guid || m.guid++, e) : void 0 },
        now: function() { return +new Date },
        support: k
    }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) { h["[object " + b + "]"] = b.toLowerCase() });

    function r(a) {
        var b = a.length,
            c = m.type(a);
        return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var s = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = hb(),
            z = hb(),
            A = hb(),
            B = function(a, b) { return a === b && (l = !0), 0 },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = M.replace("w", "w#"),
            O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
            P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
            Q = new RegExp(L + "+", "g"),
            R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            S = new RegExp("^" + L + "*," + L + "*"),
            T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            V = new RegExp(P),
            W = new RegExp("^" + N + "$"),
            X = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M.replace("w", "w*") + ")"), ATTR: new RegExp("^" + O), PSEUDO: new RegExp("^" + P), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") },
            Y = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            $ = /^[^{]+\{\s*\[native \w/,
            _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ab = /[+~]/,
            bb = /'|\\/g,
            cb = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            db = function(a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) },
            eb = function() { m() };
        try { H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType } catch (fb) {
            H = {
                apply: E.length ? function(a, b) { G.apply(a, I.call(b)) } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function gb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a)))
                    if (j = f[1]) { if (9 === k) { if (h = b.getElementById(j), !h || !h.parentNode) return d; if (h.id === j) return d.push(h), d } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d } else { if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d; if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--) o[l] = s + rb(o[l]);
                        w = ab.test(a) && pb(b.parentNode) || b, x = o.join(",")
                    }
                    if (x) try { return H.apply(d, w.querySelectorAll(x)), d } catch (y) {} finally { r || b.removeAttribute("id") }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function hb() {
            var a = [];

            function b(c, e) { return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e }
            return b
        }

        function ib(a) { return a[u] = !0, a }

        function jb(a) { var b = n.createElement("div"); try { return !!a(b) } catch (c) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } }

        function kb(a, b) {
            var c = a.split("|"),
                e = a.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function lb(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function mb(a) { return function(b) { var c = b.nodeName.toLowerCase(); return "input" === c && b.type === a } }

        function nb(a) { return function(b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } }

        function ob(a) {
            return ib(function(b) {
                return b = +b, ib(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function pb(a) { return a && "undefined" != typeof a.getElementsByTagName && a }
        c = gb.support = {}, f = gb.isXML = function(a) { var b = a && (a.ownerDocument || a).documentElement; return b ? "HTML" !== b.nodeName : !1 }, m = gb.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", eb, !1) : e.attachEvent && e.attachEvent("onunload", eb)), p = !f(g), c.attributes = jb(function(a) { return a.className = "i", !a.getAttribute("className") }), c.getElementsByTagName = jb(function(a) { return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = jb(function(a) { return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length }), c.getById ? (d.find.ID = function(a, b) { if ("undefined" != typeof b.getElementById && p) { var c = b.getElementById(a); return c && c.parentNode ? [c] : [] } }, d.filter.ID = function(a) { var b = a.replace(cb, db); return function(a) { return a.getAttribute("id") === b } }) : (delete d.find.ID, d.filter.ID = function(a) { var b = a.replace(cb, db); return function(a) { var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id"); return c && c.value === b } }), d.find.TAG = c.getElementsByTagName ? function(a, b) { return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0 } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) { while (c = f[e++]) 1 === c.nodeType && d.push(c); return d }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) { return p ? b.getElementsByClassName(a) : void 0 }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (jb(function(a) { o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]") }), jb(function(a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && jb(function(a) { c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P) }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) { if (a === b) return l = !0, 0; var d = !a.compareDocumentPosition - !b.compareDocumentPosition; return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1) } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    h = [a],
                    i = [b];
                if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return lb(a, b);
                c = a;
                while (c = c.parentNode) h.unshift(c);
                c = b;
                while (c = c.parentNode) i.unshift(c);
                while (h[d] === i[d]) d++;
                return d ? lb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, g) : n
        }, gb.matches = function(a, b) { return gb(a, null, null, b) }, gb.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try { var d = s.call(a, b); if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (e) {}
            return gb(b, n, null, [a]).length > 0
        }, gb.contains = function(a, b) { return (a.ownerDocument || a) !== n && m(a), t(a, b) }, gb.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, gb.error = function(a) { throw new Error("Syntax error, unrecognized expression: " + a) }, gb.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) { while (b = a[f++]) b === a[f] && (e = d.push(f)); while (e--) a.splice(d[e], 1) }
            return k = null, a
        }, e = gb.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) { if (1 === f || 9 === f || 11 === f) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling) c += e(a) } else if (3 === f || 4 === f) return a.nodeValue } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = gb.selectors = {
            cacheLength: 50,
            createPseudo: ib,
            match: X,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: { ATTR: function(a) { return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function(a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || gb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && gb.error(a[0]), a }, PSEUDO: function(a) { var b, c = !a[6] && a[2]; return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } },
            filter: {
                TAG: function(a) { var b = a.replace(cb, db).toLowerCase(); return "*" === a ? function() { return !0 } : function(a) { return a.nodeName && a.nodeName.toLowerCase() === b } },
                CLASS: function(a) { var b = y[a + " "]; return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) { return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "") }) },
                ATTR: function(a, b, c) { return function(d) { var e = gb.attr(d, a); return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0 } },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) { return !!a.parentNode } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) { k[a] = [w, n, m]; break }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break; return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || gb.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ib(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) { return e(a, 0, c) }) : e
                }
            },
            pseudos: {
                not: ib(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(R, "$1"));
                    return d[u] ? ib(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) { return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop() }
                }),
                has: ib(function(a) { return function(b) { return gb(a, b).length > 0 } }),
                contains: ib(function(a) {
                    return a = a.replace(cb, db),
                        function(b) { return (b.textContent || b.innerText || e(b)).indexOf(a) > -1 }
                }),
                lang: ib(function(a) {
                    return W.test(a || "") || gb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id },
                root: function(a) { return a === o },
                focus: function(a) { return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) },
                enabled: function(a) { return a.disabled === !1 },
                disabled: function(a) { return a.disabled === !0 },
                checked: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected },
                selected: function(a) { return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) { return !d.pseudos.empty(a) },
                header: function(a) { return Z.test(a.nodeName) },
                input: function(a) { return Y.test(a.nodeName) },
                button: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b },
                text: function(a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) },
                first: ob(function() { return [0] }),
                last: ob(function(a, b) { return [b - 1] }),
                eq: ob(function(a, b, c) { return [0 > c ? c + b : c] }),
                even: ob(function(a, b) { for (var c = 0; b > c; c += 2) a.push(c); return a }),
                odd: ob(function(a, b) { for (var c = 1; b > c; c += 2) a.push(c); return a }),
                lt: ob(function(a, b, c) { for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d); return a }),
                gt: ob(function(a, b, c) { for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d); return a })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = mb(b);
        for (b in { submit: !0, reset: !0 }) d.pseudos[b] = nb(b);

        function qb() {}
        qb.prototype = d.filters = d.pseudos, d.setFilters = new qb, g = gb.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(R, " ") }), h = h.slice(c.length));
                for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? gb.error(a) : z(a, i).slice(0)
        };

        function rb(a) { for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value; return d }

        function sb(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) { if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2]; if (i[d] = j, j[2] = a(b, c, g)) return !0 }
            }
        }

        function tb(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function ub(a, b, c) { for (var d = 0, e = b.length; e > d; d++) gb(a, b[d], c); return c }

        function vb(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h)); return g }

        function wb(a, b, c, d, e, f) {
            return d && !d[u] && (d = wb(d)), e && !e[u] && (e = wb(e, f)), ib(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ub(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : vb(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) { j = vb(r, n), d(j, [], h, i), k = j.length; while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l)) }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = vb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function xb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sb(function(a) { return a === b }, h, !0), l = sb(function(a) { return J(b, a) > -1 }, h, !0), m = [function(a, c, d) { var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d)); return b = null, e }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [sb(tb(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return wb(i > 1 && tb(m), i > 1 && rb(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(R, "$1"), c, e > i && xb(a.slice(i, e)), f > e && xb(a = a.slice(e)), f > e && rb(a))
                    }
                    m.push(c)
                }
            return tb(m)
        }

        function yb(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, m, o, p = 0,
                        q = "0",
                        r = f && [],
                        s = [],
                        t = j,
                        u = f || e && d.find.TAG("*", k),
                        v = w += null == t ? 1 : Math.random() || .1,
                        x = u.length;
                    for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                        if (e && l) {
                            m = 0;
                            while (o = a[m++])
                                if (o(l, g, h)) { i.push(l); break }
                            k && (w = v)
                        }
                        c && ((l = !o && l) && p--, f && r.push(l))
                    }
                    if (p += q, c && q !== p) {
                        m = 0;
                        while (o = b[m++]) o(r, s, g, h);
                        if (f) {
                            if (p > 0)
                                while (q--) r[q] || s[q] || (s[q] = F.call(i));
                            s = vb(s)
                        }
                        H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && gb.uniqueSort(i)
                    }
                    return k && (w = v, j = t), r
                };
            return c ? ib(f) : f
        }
        return h = gb.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = xb(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, yb(e, d)), f.selector = a
            }
            return f
        }, i = gb.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) { if (k = j[i], d.relative[l = k.type]) break; if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && pb(b.parentNode) || b))) { if (j.splice(i, 1), a = f.length && rb(j), !a) return H.apply(e, f), e; break } }
            }
            return (n || h(a, o))(f, b, !p, e, ab.test(a) && pb(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = jb(function(a) { return 1 & a.compareDocumentPosition(n.createElement("div")) }), jb(function(a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || kb("type|href|height|width", function(a, b, c) { return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), c.attributes && jb(function(a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || kb("value", function(a, b, c) { return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue }), jb(function(a) { return null == a.getAttribute("disabled") }) || kb(K, function(a, b, c) { var d; return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), gb
    }(a);
    m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
    var t = m.expr.match.needsContext,
        u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        v = /^.[^:#\[\.,]*$/;

    function w(a, b, c) {
        if (m.isFunction(b)) return m.grep(a, function(a, d) { return !!b.call(a, d, a) !== c });
        if (b.nodeType) return m.grep(a, function(a) { return a === b !== c });
        if ("string" == typeof b) {
            if (v.test(b)) return m.filter(b, a, c);
            b = m.filter(b, a)
        }
        return m.grep(a, function(a) { return m.inArray(a, b) >= 0 !== c })
    }
    m.filter = function(a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function(a) { return 1 === a.nodeType })) }, m.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(m(a).filter(function() {
                for (b = 0; e > b; b++)
                    if (m.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) m.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) { return this.pushStack(w(this, a || [], !1)) },
        not: function(a) { return this.pushStack(w(this, a || [], !0)) },
        is: function(a) { return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length }
    });
    var x, y = a.document,
        z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        A = m.fn.init = function(a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b))
                        for (c in b) m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                if (d = y.getElementById(c[2]), d && d.parentNode) {
                    if (d.id !== c[2]) return x.find(a);
                    this.length = 1, this[0] = d
                }
                return this.context = y, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this))
        };
    A.prototype = m.fn, x = m(y);
    var B = /^(?:parents|prev(?:Until|All))/,
        C = { children: !0, contents: !0, next: !0, prev: !0 };
    m.extend({
        dir: function(a, b, c) {
            var d = [],
                e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) 1 === e.nodeType && d.push(e), e = e[b];
            return d
        },
        sibling: function(a, b) { for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a); return c }
    }), m.fn.extend({
        has: function(a) {
            var b, c = m(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (m.contains(this, c[b])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) { f.push(c); break }
            return this.pushStack(f.length > 1 ? m.unique(f) : f)
        },
        index: function(a) { return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(a, b) { return this.pushStack(m.unique(m.merge(this.get(), m(a, b)))) },
        addBack: function(a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) }
    });

    function D(a, b) { do a = a[b]; while (a && 1 !== a.nodeType); return a }
    m.each({ parent: function(a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null }, parents: function(a) { return m.dir(a, "parentNode") }, parentsUntil: function(a, b, c) { return m.dir(a, "parentNode", c) }, next: function(a) { return D(a, "nextSibling") }, prev: function(a) { return D(a, "previousSibling") }, nextAll: function(a) { return m.dir(a, "nextSibling") }, prevAll: function(a) { return m.dir(a, "previousSibling") }, nextUntil: function(a, b, c) { return m.dir(a, "nextSibling", c) }, prevUntil: function(a, b, c) { return m.dir(a, "previousSibling", c) }, siblings: function(a) { return m.sibling((a.parentNode || {}).firstChild, a) }, children: function(a) { return m.sibling(a.firstChild) }, contents: function(a) { return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes) } }, function(a, b) { m.fn[a] = function(c, d) { var e = m.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e) } });
    var E = /\S+/g,
        F = {};

    function G(a) { var b = F[a] = {}; return m.each(a.match(E) || [], function(a, c) { b[c] = !0 }), b }
    m.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
        var b, c, d, e, f, g, h = [],
            i = !a.once && [],
            j = function(l) {
                for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)
                    if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) { c = !1; break }
                b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
            },
            k = { add: function() { if (h) { var d = h.length;! function f(b) { m.each(b, function(b, c) { var d = m.type(c); "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c) }) }(arguments), b ? e = h.length : c && (g = d, j(c)) } return this }, remove: function() { return h && m.each(arguments, function(a, c) { var d; while ((d = m.inArray(c, h, d)) > -1) h.splice(d, 1), b && (e >= d && e--, f >= d && f--) }), this }, has: function(a) { return a ? m.inArray(a, h) > -1 : !(!h || !h.length) }, empty: function() { return h = [], e = 0, this }, disable: function() { return h = i = c = void 0, this }, disabled: function() { return !h }, lock: function() { return i = void 0, c || k.disable(), this }, locked: function() { return !i }, fireWith: function(a, c) { return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this }, fire: function() { return k.fireWith(this, arguments), this }, fired: function() { return !!d } };
        return k
    }, m.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", m.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", m.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", m.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() { return c },
                    always: function() { return e.done(arguments).fail(arguments), this },
                    then: function() {
                        var a = arguments;
                        return m.Deferred(function(c) {
                            m.each(b, function(b, f) {
                                var g = m.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) { return null != a ? m.extend(a, d) : d }
                },
                e = {};
            return d.pipe = d.then, m.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() { c = h }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() { return e[f[0] + "With"](this === e ? d : this, arguments), this }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && m.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : m.Deferred(),
                h = function(a, b, c) { return function(e) { b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c) } },
                i, j, k;
            if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    m.fn.ready = function(a) { return m.ready.promise().done(a), this }, m.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) { a ? m.readyWait++ : m.ready(!0) },
        ready: function(a) {
            if (a === !0 ? !--m.readyWait : !m.isReady) {
                if (!y.body) return setTimeout(m.ready);
                m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")))
            }
        }
    });

    function I() { y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J)) }

    function J() {
        (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready())
    }
    m.ready.promise = function(b) {
        if (!H)
            if (H = m.Deferred(), "complete" === y.readyState) setTimeout(m.ready);
            else if (y.addEventListener) y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1);
        else {
            y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
            var c = !1;
            try { c = null == a.frameElement && y.documentElement } catch (d) {}
            c && c.doScroll && ! function e() {
                if (!m.isReady) {
                    try { c.doScroll("left") } catch (a) { return setTimeout(e, 50) }
                    I(), m.ready()
                }
            }()
        }
        return H.promise(b)
    };
    var K = "undefined",
        L;
    for (L in m(k)) break;
    k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function() {
            var a, b, c, d;
            c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
        }),
        function() {
            var a = y.createElement("div");
            if (null == k.deleteExpando) { k.deleteExpando = !0; try { delete a.test } catch (b) { k.deleteExpando = !1 } }
            a = null
        }(), m.acceptData = function(a) {
            var b = m.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        };
    var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        N = /([A-Z])/g;

    function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try { c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c } catch (e) {}
                m.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function P(a) {
        var b;
        for (b in a)
            if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f, g, h = m.expando,
                i = a.nodeType,
                j = i ? m.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : { toJSON: m.noop }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f
        }
    }

    function R(a, b, c) {
        if (m.acceptData(a)) {
            var d, e, f = a.nodeType,
                g = f ? m.cache : a,
                h = f ? a[m.expando] : m.expando;
            if (g[h]) { if (b && (d = c ? g[h] : g[h].data)) { m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length; while (e--) delete d[b[e]]; if (c ? !P(d) : !m.isEmptyObject(d)) return }(c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null) }
        }
    }
    m.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function(a) { return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a) }, data: function(a, b, c) { return Q(a, b, c) }, removeData: function(a, b) { return R(a, b) }, _data: function(a, b, c) { return Q(a, b, c, !0) }, _removeData: function(a, b) { return R(a, b, !0) } }), m.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));
                    m._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() { m.data(this, a) }) : arguments.length > 1 ? this.each(function() { m.data(this, a, b) }) : f ? O(f, a, m.data(f, a)) : void 0
        },
        removeData: function(a) { return this.each(function() { m.removeData(this, a) }) }
    }), m.extend({
        queue: function(a, b, c) { var d; return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0 },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = m.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = m._queueHooks(a, b),
                g = function() { m.dequeue(a, b) };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) { var c = b + "queueHooks"; return m._data(a, c) || m._data(a, c, { empty: m.Callbacks("once memory").add(function() { m._removeData(a, b + "queue"), m._removeData(a, c) }) }) }
    }), m.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
            })
        },
        dequeue: function(a) { return this.each(function() { m.dequeue(this, a) }) },
        clearQueue: function(a) { return this.queue(a || "fx", []) },
        promise: function(a, b) {
            var c, d = 1,
                e = m.Deferred(),
                f = this,
                g = this.length,
                h = function() {--d || e.resolveWith(f, [f]) };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = ["Top", "Right", "Bottom", "Left"],
        U = function(a, b) { return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a) },
        V = m.access = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === m.type(c)) { e = !0; for (h in c) m.access(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) { return j.call(m(a), c) })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        W = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = y.createElement("input"),
            b = y.createElement("div"),
            c = y.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function() { k.noCloneEvent = !1 }), b.cloneNode(!0).click()), null == k.deleteExpando) { k.deleteExpando = !0; try { delete b.test } catch (d) { k.deleteExpando = !1 } }
    }(),
    function() {
        var b, c, d = y.createElement("div");
        for (b in { submit: !0, change: !0, focusin: !0 }) c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null
    }();
    var X = /^(?:input|select|textarea)$/i,
        Y = /^key/,
        Z = /^(?:mouse|pointer|contextmenu)|click/,
        $ = /^(?:focusinfocus|focusoutblur)$/,
        _ = /^([^.]*)(?:\.(.+)|)$/;

    function ab() { return !0 }

    function bb() { return !1 }

    function cb() { try { return y.activeElement } catch (a) {} }
    m.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) { return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments) }, k.elem = a), b = (b || "").match(E) || [""], h = b.length;
                while (h--) f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && m.expr.match.needsContext.test(e), namespace: p.join(".") }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--)
                    if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;
                        while (f--) g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o])
                    } else
                        for (o in k) m.event.remove(a, o + b[j], c, d, !0);
                m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, l, n, o = [d || y],
                p = j.call(b, "type") ? b.type : b,
                q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !m.isWindow(d)) {
                    for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), l = h;
                    l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
                }
                n = 0;
                while ((h = o[n++]) && !b.isPropagationStopped()) b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                    l = d[g], l && (d[g] = null), m.event.triggered = p;
                    try { d[p]() } catch (r) {}
                    m.event.triggered = void 0, l && (d[g] = l)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = m.event.fix(a);
            var b, c, e, f, g, h = [],
                i = d.call(arguments),
                j = (m._data(this, "events") || {})[a.type] || [],
                k = m.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) { h = m.event.handlers.call(this, a, j), b = 0; while ((f = h[b++]) && !a.isPropagationStopped()) { a.currentTarget = f.elem, g = 0; while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation())) } return k.postDispatch && k.postDispatch.call(this, a), a.result }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d);
                        e.length && g.push({ elem: i, handlers: e })
                    }
            return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g
        },
        fix: function(a) {
            if (a[m.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;
            while (b--) c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(a, b) { return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a } },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button,
                    g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== cb() && this.focus) try { return this.focus(), !1 } catch (a) {} }, delegateType: "focusin" }, blur: { trigger: function() { return this === cb() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function() { return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0 }, _default: function(a) { return m.nodeName(a.target, "a") } }, beforeunload: { postDispatch: function(a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result) } } },
        simulate: function(a, b, c, d) {
            var e = m.extend(new m.Event, c, { type: a, isSimulated: !0, originalEvent: {} });
            d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, m.removeEvent = y.removeEventListener ? function(a, b, c) { a.removeEventListener && a.removeEventListener(b, c, !1) } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c))
    }, m.Event = function(a, b) { return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ab : bb) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void(this[m.expando] = !0)) : new m.Event(a, b) }, m.Event.prototype = {
        isDefaultPrevented: bb,
        isPropagationStopped: bb,
        isImmediatePropagationStopped: bb,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ab, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ab, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ab, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, m.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(a, b) {
        m.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.submitBubbles || (m.event.special.submit = {
        setup: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target,
                    c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
                c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function(a) { a._submit_bubble = !0 }), m._data(c, "submitBubbles", !0))
            })
        },
        postDispatch: function(a) { a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0)) },
        teardown: function() { return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit") }
    }), k.changeBubbles || (m.event.special.change = {
        setup: function() {
            return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function(a) { "checked" === a.originalEvent.propertyName && (this._just_changed = !0) }), m.event.add(this, "click._change", function(a) { this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0) })), !1) : void m.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function(a) {!this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0) }), m._data(b, "changeBubbles", !0))
            })
        },
        handle: function(a) { var b = a.target; return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0 },
        teardown: function() { return m.event.remove(this, "._change"), !X.test(this.nodeName) }
    }), k.focusinBubbles || m.each({ focus: "focusin", blur: "focusout" }, function(a, b) {
        var c = function(a) { m.event.simulate(b, a.target, m.event.fix(a), !0) };
        m.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = m._data(d, b);
                e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = m._data(d, b) - 1;
                e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b))
            }
        }
    }), m.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) { "string" != typeof b && (c = c || b, b = void 0); for (f in a) this.on(f, b, c, a[f], e); return this }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = bb;
            else if (!d) return this;
            return 1 === e && (g = d, d = function(a) { return m().off(a), g.apply(this, arguments) }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function() { m.event.add(this, a, d, c, b) })
        },
        one: function(a, b, c, d) { return this.on(a, b, c, d, 1) },
        off: function(a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this; if ("object" == typeof a) { for (e in a) this.off(e, b, a[e]); return this } return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = bb), this.each(function() { m.event.remove(this, a, c, b) }) },
        trigger: function(a, b) { return this.each(function() { m.event.trigger(a, b, this) }) },
        triggerHandler: function(a, b) { var c = this[0]; return c ? m.event.trigger(a, b, c, !0) : void 0 }
    });

    function db(a) {
        var b = eb.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }
    var eb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        fb = / jQuery\d+="(?:null|\d+)"/g,
        gb = new RegExp("<(?:" + eb + ")[\\s/>]", "i"),
        hb = /^\s+/,
        ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        jb = /<([\w:]+)/,
        kb = /<tbody/i,
        lb = /<|&#?\w+;/,
        mb = /<(?:script|style|link)/i,
        nb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ob = /^$|\/(?:java|ecma)script/i,
        pb = /^true\/(.*)/,
        qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        rb = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] },
        sb = db(y),
        tb = sb.appendChild(y.createElement("div"));
    rb.optgroup = rb.option, rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead, rb.th = rb.td;

    function ub(a, b) {
        var c, d, e = 0,
            f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ub(d, b));
        return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
    }

    function vb(a) { W.test(a.type) && (a.defaultChecked = a.checked) }

    function wb(a, b) { return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a }

    function xb(a) { return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a }

    function yb(a) { var b = pb.exec(a.type); return b ? a.type = b[1] : a.removeAttribute("type"), a }

    function zb(a, b) { for (var c, d = 0; null != (c = a[d]); d++) m._data(c, "globalEval", !b || m._data(b[d], "globalEval")) }

    function Ab(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
            var c, d, e, f = m._data(a),
                g = m._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) m.event.add(b, c, h[c][d])
            }
            g.data && (g.data = m.extend({}, g.data))
        }
    }

    function Bb(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
                e = m._data(b);
                for (d in e.events) m.removeEvent(b, d, e.handle);
                b.removeAttribute(m.expando)
            }
            "script" === c && b.text !== a.text ? (xb(b).text = a.text, yb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    m.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
            if (k.html5Clone || m.isXMLDoc(a) || !gb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (tb.innerHTML = a.outerHTML, tb.removeChild(f = tb.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a)))
                for (d = ub(f), h = ub(a), g = 0; null != (e = h[g]); ++g) d[g] && Bb(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ub(a), d = d || ub(f), g = 0; null != (e = h[g]); g++) Ab(e, d[g]);
                else Ab(a, f);
            return d = ub(f, "script"), d.length > 0 && zb(d, !i && ub(a, "script")), d = h = e = null, f
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, l, n = a.length, o = db(b), p = [], q = 0; n > q; q++)
                if (f = a[q], f || 0 === f)
                    if ("object" === m.type(f)) m.merge(p, f.nodeType ? [f] : f);
                    else if (lb.test(f)) {
                h = h || o.appendChild(b.createElement("div")), i = (jb.exec(f) || ["", ""])[1].toLowerCase(), l = rb[i] || rb._default, h.innerHTML = l[1] + f.replace(ib, "<$1></$2>") + l[2], e = l[0];
                while (e--) h = h.lastChild;
                if (!k.leadingWhitespace && hb.test(f) && p.push(b.createTextNode(hb.exec(f)[0])), !k.tbody) { f = "table" !== i || kb.test(f) ? "<table>" !== l[1] || kb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length; while (e--) m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j) }
                m.merge(p, h.childNodes), h.textContent = "";
                while (h.firstChild) h.removeChild(h.firstChild);
                h = o.lastChild
            } else p.push(b.createTextNode(f));
            h && o.removeChild(h), k.appendChecked || m.grep(ub(p, "input"), vb), q = 0;
            while (f = p[q++])
                if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ub(o.appendChild(f), "script"), g && zb(h), c)) { e = 0; while (f = h[e++]) ob.test(f.type || "") && c.push(f) }
            return h = null, o
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++)
                if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events) n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f))
                }
        }
    }), m.fn.extend({
        text: function(a) { return V(this, function(a) { return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a)) }, null, a, arguments.length) },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() { return this.domManip(arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this) }) },
        after: function() { return this.domManip(arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) },
        remove: function(a, b) { for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || m.cleanData(ub(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && zb(ub(c, "script")), c.parentNode.removeChild(c)); return this },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && m.cleanData(ub(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && m.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) { return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() { return m.clone(this, a, b) }) },
        html: function(a) {
            return V(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(fb, "") : void 0;
                if (!("string" != typeof a || mb.test(a) || !k.htmlSerialize && gb.test(a) || !k.leadingWhitespace && hb.test(a) || rb[(jb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(ib, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ub(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() { var a = arguments[0]; return this.domManip(arguments, function(b) { a = this.parentNode, m.cleanData(ub(this)), a && a.replaceChild(b, this) }), a && (a.length || a.nodeType) ? this : this.remove() },
        detach: function(a) { return this.remove(a, !0) },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0,
                l = this.length,
                n = this,
                o = l - 1,
                p = a[0],
                q = m.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && nb.test(p)) return this.each(function(c) {
                var d = n.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
                for (g = m.map(ub(i, "script"), xb), f = g.length; l > j; j++) d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ub(d, "script"))), b.call(this[j], d, j);
                if (f)
                    for (h = g[g.length - 1].ownerDocument, m.map(g, yb), j = 0; f > j; j++) d = g[j], ob.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qb, "")));
                i = c = null
            }
            return this
        }
    }), m.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(a, b) { m.fn[a] = function(a) { for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get()); return this.pushStack(e) } });
    var Cb, Db = {};

    function Eb(b, c) {
        var d, e = m(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
        return e.detach(), f
    }

    function Fb(a) {
        var b = y,
            c = Db[a];
        return c || (c = Eb(a, b), "none" !== c && c || (Cb = (Cb || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Cb[0].contentWindow || Cb[0].contentDocument).document, b.write(), b.close(), c = Eb(a, b), Cb.detach()), Db[a] = c), c
    }! function() {
        var a;
        k.shrinkWrapBlocks = function() {
            if (null != a) return a;
            a = !1;
            var b, c, d;
            return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
        }
    }();
    var Gb = /^margin/,
        Hb = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Ib, Jb, Kb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ib = function(b) { return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null) }, Jb = function(a, b, c) { var d, e, f, g, h = a.style; return c = c || Ib(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Hb.test(g) && Gb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + "" }) : y.documentElement.currentStyle && (Ib = function(a) { return a.currentStyle }, Jb = function(a, b, c) { var d, e, f, g, h = a.style; return c = c || Ib(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Hb.test(g) && !Kb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto" });

    function Lb(a, b) { return { get: function() { var c = a(); if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments) } } }! function() {
        var b, c, d, e, f, g, h;
        if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
            c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, { reliableHiddenOffsets: function() { return null == g && i(), g }, boxSizingReliable: function() { return null == f && i(), f }, pixelPosition: function() { return null == e && i(), e }, reliableMarginRight: function() { return null == h && i(), h } });

            function i() {
                var b, c, d, i;
                c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || { width: "4px" }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight), b.removeChild(i)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d))
            }
        }
    }(), m.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var Mb = /alpha\([^)]*\)/i,
        Nb = /opacity\s*=\s*([^)]*)/,
        Ob = /^(none|table(?!-c[ea]).+)/,
        Pb = new RegExp("^(" + S + ")(.*)$", "i"),
        Qb = new RegExp("^([+-])=(" + S + ")", "i"),
        Rb = { position: "absolute", visibility: "hidden", display: "block" },
        Sb = { letterSpacing: "0", fontWeight: "400" },
        Tb = ["Webkit", "O", "Moz", "ms"];

    function Ub(a, b) {
        if (b in a) return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1),
            d = b,
            e = Tb.length;
        while (e--)
            if (b = Tb[e] + c, b in a) return b;
        return d
    }

    function Vb(a, b) { for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fb(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display")))); for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none")); return a }

    function Wb(a, b, c) { var d = Pb.exec(b); return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b }

    function Xb(a, b, c, d, e) { for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e))); return g }

    function Yb(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ib(a),
            g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Jb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Hb.test(e)) return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Xb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    m.extend({
        cssHooks: { opacity: { get: function(a, b) { if (b) { var c = Jb(a, "opacity"); return "" === c ? "1" : c } } } },
        cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: { "float": k.cssFloat ? "cssFloat" : "styleFloat" },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = m.camelCase(b),
                    i = a.style;
                if (b = m.cssProps[h] || (m.cssProps[h] = Ub(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = Qb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try { i[b] = c } catch (j) {}
            }
        },
        css: function(a, b, c, d) { var e, f, g, h = m.camelCase(b); return b = m.cssProps[h] || (m.cssProps[h] = Ub(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Jb(a, b, d)), "normal" === f && b in Sb && (f = Sb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f }
    }), m.each(["height", "width"], function(a, b) { m.cssHooks[b] = { get: function(a, c, d) { return c ? Ob.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Rb, function() { return Yb(a, b, d) }) : Yb(a, b, d) : void 0 }, set: function(a, c, d) { var e = d && Ib(a); return Wb(a, c, d ? Xb(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0) } } }), k.opacity || (m.cssHooks.opacity = {
        get: function(a, b) { return Nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "" },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Mb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Mb.test(f) ? f.replace(Mb, e) : f + " " + e)
        }
    }), m.cssHooks.marginRight = Lb(k.reliableMarginRight, function(a, b) { return b ? m.swap(a, { display: "inline-block" }, Jb, [a, "marginRight"]) : void 0 }), m.each({ margin: "", padding: "", border: "Width" }, function(a, b) { m.cssHooks[a + b] = { expand: function(c) { for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + T[d] + b] = f[d] || f[d - 2] || f[0]; return e } }, Gb.test(a) || (m.cssHooks[a + b].set = Wb) }), m.fn.extend({
        css: function(a, b) {
            return V(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (m.isArray(b)) { for (d = Ib(a), e = b.length; e > g; g++) f[b[g]] = m.css(a, b[g], !1, d); return f }
                return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() { return Vb(this, !0) },
        hide: function() { return Vb(this) },
        toggle: function(a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() { U(this) ? m(this).show() : m(this).hide() }) }
    });

    function Zb(a, b, c, d, e) {
        return new Zb.prototype.init(a, b, c, d, e)
    }
    m.Tween = Zb, Zb.prototype = { constructor: Zb, init: function(a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px") }, cur: function() { var a = Zb.propHooks[this.prop]; return a && a.get ? a.get(this) : Zb.propHooks._default.get(this) }, run: function(a) { var b, c = Zb.propHooks[this.prop]; return this.pos = b = this.options.duration ? m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Zb.propHooks._default.set(this), this } }, Zb.prototype.init.prototype = Zb.prototype, Zb.propHooks = { _default: { get: function(a) { var b; return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop] }, set: function(a) { m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now } } }, Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft = { set: function(a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, m.easing = { linear: function(a) { return a }, swing: function(a) { return .5 - Math.cos(a * Math.PI) / 2 } }, m.fx = Zb.prototype.init, m.fx.step = {};
    var $b, _b, ac = /^(?:toggle|show|hide)$/,
        bc = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        cc = /queueHooks$/,
        dc = [ic],
        ec = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = bc.exec(b),
                    f = e && e[3] || (m.cssNumber[a] ? "" : "px"),
                    g = (m.cssNumber[a] || "px" !== f && +d) && bc.exec(m.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, m.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };

    function fc() { return setTimeout(function() { $b = void 0 }), $b = m.now() }

    function gc(a, b) {
        var c, d = { height: a },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = T[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function hc(a, b, c) {
        for (var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function ic(a, b, c) {
        var d, e, f, g, h, i, j, l, n = this,
            o = {},
            p = a.style,
            q = a.nodeType && U(a),
            r = m._data(a, "fxshow");
        c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() { h.unqueued || i() }), h.unqueued++, n.always(function() { n.always(function() { h.unqueued--, m.queue(a, "fx").length || h.empty.fire() }) })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fb(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fb(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function() { p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2] }));
        for (d in b)
            if (e = b[d], ac.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0
                }
                o[d] = r && r[d] || m.style(a, d)
            } else j = void 0;
        if (m.isEmptyObject(o)) "inline" === ("none" === j ? Fb(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function() { m(a).hide() }), n.done(function() {
                var b;
                m._removeData(a, "fxshow");
                for (b in o) m.style(a, b, o[b])
            });
            for (d in o) g = hc(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function jc(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) { f = g.expand(f), delete a[d]; for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e
    }

    function kc(a, b, c) {
        var d, e, f = 0,
            g = dc.length,
            h = m.Deferred().always(function() { delete i.elem }),
            i = function() { if (e) return !1; for (var b = $b || fc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1) },
            j = h.promise({
                elem: a,
                props: m.extend({}, b),
                opts: m.extend(!0, { specialEasing: {} }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: $b || fc(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) { var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (jc(k, j.opts.specialEasing); g > f; f++)
            if (d = dc[f].call(j, a, k, j.opts)) return d;
        return m.map(k, hc, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    m.Animation = m.extend(kc, { tweener: function(a, b) { m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" "); for (var c, d = 0, e = a.length; e > d; d++) c = a[d], ec[c] = ec[c] || [], ec[c].unshift(b) }, prefilter: function(a, b) { b ? dc.unshift(a) : dc.push(a) } }), m.speed = function(a, b, c) { var d = a && "object" == typeof a ? m.extend({}, a) : { complete: c || !c && b || m.isFunction(a) && a, duration: a, easing: c && b || b && !m.isFunction(b) && b }; return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() { m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue) }, d }, m.fn.extend({
            fadeTo: function(a, b, c, d) { return this.filter(U).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) },
            animate: function(a, b, c, d) {
                var e = m.isEmptyObject(a),
                    f = m.speed(b, c, d),
                    g = function() {
                        var b = kc(this, m.extend({}, a), f);
                        (e || m._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = m.timers,
                        g = m._data(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && cc.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && m.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = m._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = m.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), m.each(["toggle", "show", "hide"], function(a, b) {
            var c = m.fn[b];
            m.fn[b] = function(a, d, e) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gc(b, !0), a, d, e) }
        }), m.each({ slideDown: gc("show"), slideUp: gc("hide"), slideToggle: gc("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(a, b) { m.fn[a] = function(a, c, d) { return this.animate(b, a, c, d) } }), m.timers = [], m.fx.tick = function() {
            var a, b = m.timers,
                c = 0;
            for ($b = m.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || m.fx.stop(), $b = void 0
        }, m.fx.timer = function(a) { m.timers.push(a), a() ? m.fx.start() : m.timers.pop() }, m.fx.interval = 13, m.fx.start = function() { _b || (_b = setInterval(m.fx.tick, m.fx.interval)) }, m.fx.stop = function() { clearInterval(_b), _b = null }, m.fx.speeds = { slow: 600, fast: 200, _default: 400 }, m.fn.delay = function(a, b) {
            return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() { clearTimeout(d) }
            })
        },
        function() {
            var a, b, c, d, e;
            b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value
        }();
    var lc = /\r/g;
    m.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = m.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function(a) { return null == a ? "" : a + "" })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lc, "") : null == c ? "" : c)
            }
        }
    }), m.extend({
        valHooks: {
            option: { get: function(a) { var b = m.find.attr(a, "value"); return null != b ? b : m.trim(m.text(a)) } },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                            if (b = m(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = m.makeArray(b),
                        g = e.length;
                    while (g--)
                        if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) try { d.selected = c = !0 } catch (h) { d.scrollHeight } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), m.each(["radio", "checkbox"], function() { m.valHooks[this] = { set: function(a, b) { return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0 } }, k.checkOn || (m.valHooks[this].get = function(a) { return null === a.getAttribute("value") ? "on" : a.value }) });
    var mc, nc, oc = m.expr.attrHandle,
        pc = /^(?:checked|selected)$/i,
        qc = k.getSetAttribute,
        rc = k.input;
    m.fn.extend({ attr: function(a, b) { return V(this, m.attr, a, b, arguments.length > 1) }, removeAttr: function(a) { return this.each(function() { m.removeAttr(this, a) }) } }), m.extend({
        attr: function(a, b, c) { var d, e, f = a.nodeType; if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nc : mc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b)) },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(E);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rc && qc || !pc.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qc ? c : d)
        },
        attrHooks: { type: { set: function(a, b) { if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b } } } }
    }), nc = { set: function(a, b, c) { return b === !1 ? m.removeAttr(a, c) : rc && qc || !pc.test(c) ? a.setAttribute(!qc && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c } }, m.each(m.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = oc[b] || m.find.attr;
        oc[b] = rc && qc || !pc.test(b) ? function(a, b, d) { var e, f; return d || (f = oc[b], oc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, oc[b] = f), e } : function(a, b, c) { return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null }
    }), rc && qc || (m.attrHooks.value = { set: function(a, b, c) { return m.nodeName(a, "input") ? void(a.defaultValue = b) : mc && mc.set(a, b, c) } }), qc || (mc = { set: function(a, b, c) { var d = a.getAttributeNode(c); return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0 } }, oc.id = oc.name = oc.coords = function(a, b, c) { var d; return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null }, m.valHooks.button = { get: function(a, b) { var c = a.getAttributeNode(b); return c && c.specified ? c.value : void 0 }, set: mc.set }, m.attrHooks.contenteditable = { set: function(a, b, c) { mc.set(a, "" === b ? !1 : b, c) } }, m.each(["width", "height"], function(a, b) { m.attrHooks[b] = { set: function(a, c) { return "" === c ? (a.setAttribute(b, "auto"), c) : void 0 } } })), k.style || (m.attrHooks.style = { get: function(a) { return a.style.cssText || void 0 }, set: function(a, b) { return a.style.cssText = b + "" } });
    var sc = /^(?:input|select|textarea|button|object)$/i,
        tc = /^(?:a|area)$/i;
    m.fn.extend({ prop: function(a, b) { return V(this, m.prop, a, b, arguments.length > 1) }, removeProp: function(a) { return a = m.propFix[a] || a, this.each(function() { try { this[a] = void 0, delete this[a] } catch (b) {} }) } }), m.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function(a, b, c) { var d, e, f, g = a.nodeType; if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b] }, propHooks: { tabIndex: { get: function(a) { var b = m.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : sc.test(a.nodeName) || tc.test(a.nodeName) && a.href ? 0 : -1 } } } }), k.hrefNormalized || m.each(["href", "src"], function(a, b) { m.propHooks[b] = { get: function(a) { return a.getAttribute(b, 4) } } }), k.optSelected || (m.propHooks.selected = { get: function(a) { var b = a.parentNode; return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null } }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { m.propFix[this.toLowerCase()] = this }), k.enctype || (m.propFix.enctype = "encoding");
    var uc = /[\t\r\n\f]/g;
    m.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = "string" == typeof a && a;
            if (m.isFunction(a)) return this.each(function(b) { m(this).addClass(a.call(this, b, this.className)) });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : " ")) {
                        f = 0;
                        while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = m.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = 0 === arguments.length || "string" == typeof a && a;
            if (m.isFunction(a)) return this.each(function(b) { m(this).removeClass(a.call(this, b, this.className)) });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                        g = a ? m.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function(c) { m(this).toggleClass(a.call(this, c, this.className, b), b) } : function() {
                if ("string" === c) {
                    var b, d = 0,
                        e = m(this),
                        f = a.match(E) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else(c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(uc, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) { m.fn[b] = function(a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), m.fn.extend({ hover: function(a, b) { return this.mouseenter(a).mouseleave(b || a) }, bind: function(a, b, c) { return this.on(a, null, b, c) }, unbind: function(a, b) { return this.off(a, null, b) }, delegate: function(a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function(a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) } });
    var vc = m.now(),
        wc = /\?/,
        xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    m.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = m.trim(b + "");
        return e && !m.trim(e.replace(xc, function(a, b, e, f) { return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "") })) ? Function("return " + e)() : m.error("Invalid JSON: " + b)
    }, m.parseXML = function(b) { var c, d; if (!b || "string" != typeof b) return null; try { a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b)) } catch (e) { c = void 0 } return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c };
    var yc, zc, Ac = /#.*$/,
        Bc = /([?&])_=[^&]*/,
        Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ec = /^(?:GET|HEAD)$/,
        Fc = /^\/\//,
        Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Hc = {},
        Ic = {},
        Jc = "*/".concat("*");
    try { zc = location.href } catch (Kc) { zc = y.createElement("a"), zc.href = "", zc = zc.href }
    yc = Gc.exec(zc.toLowerCase()) || [];

    function Lc(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(E) || [];
            if (m.isFunction(c))
                while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Mc(a, b, c, d) {
        var e = {},
            f = a === Ic;

        function g(h) { var i; return e[h] = !0, m.each(a[h] || [], function(a, h) { var j = h(b, c, d); return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1) }), i }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Nc(a, b) { var c, d, e = m.ajaxSettings.flatOptions || {}; for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]); return c && m.extend(!0, a, c), a }

    function Oc(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) { i.unshift(g); break }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) { f = g; break }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Pc(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) { g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1])); break }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try { b = g(b) } catch (l) { return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f } }
        }
        return { state: "success", data: b }
    }
    m.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: zc, type: "GET", isLocal: Dc.test(yc[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Jc, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": m.parseJSON, "text xml": m.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(a, b) { return b ? Nc(Nc(a, m.ajaxSettings), b) : Nc(m.ajaxSettings, a) },
        ajaxPrefilter: Lc(Hc),
        ajaxTransport: Lc(Ic),
        ajax: function(a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b),
                l = k.context || k,
                n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event,
                o = m.Deferred(),
                p = m.Callbacks("once memory"),
                q = k.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!j) { j = {}; while (b = Cc.exec(f)) j[b[1].toLowerCase()] = b[2] }
                            b = j[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() { return 2 === t ? f : null },
                    setRequestHeader: function(a, b) { var c = a.toLowerCase(); return t || (a = s[c] = s[c] || a, r[a] = b), this },
                    overrideMimeType: function(a) { return t || (k.mimeType = a), this },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function(a) { var b = a || u; return i && i.abort(b), x(0, b), this }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zc) + "").replace(Ac, "").replace(Fc, yc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yc[1] && c[2] === yc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yc[3] || ("http:" === yc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mc(Hc, k, b, v), 2 === t) return v;
            h = m.event && k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Ec.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bc.test(e) ? e.replace(Bc, "$1_=" + vc++) : e + (wc.test(e) ? "&" : "?") + "_=" + vc++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jc + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (d in { success: 1, error: 1, complete: 1 }) v[d](k[d]);
            if (i = Mc(Ic, k, b, v)) {
                v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() { v.abort("timeout") }, k.timeout));
                try { t = 1, i.send(r, x) } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");

            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Oc(k, v, c)), u = Pc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function(a, b, c) { return m.get(a, b, c, "json") },
        getScript: function(a, b) { return m.get(a, void 0, b, "script") }
    }), m.each(["get", "post"], function(a, b) { m[b] = function(a, c, d, e) { return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({ url: a, type: b, dataType: e, data: c, success: d }) } }), m._evalUrl = function(a) { return m.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) }, m.fn.extend({
        wrapAll: function(a) {
            if (m.isFunction(a)) return this.each(function(b) { m(this).wrapAll(a.call(this, b)) });
            if (this[0]) {
                var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() { var a = this; while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild; return a }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return this.each(m.isFunction(a) ? function(b) { m(this).wrapInner(a.call(this, b)) } : function() {
                var b = m(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) { var b = m.isFunction(a); return this.each(function(c) { m(this).wrapAll(b ? a.call(this, c) : a) }) },
        unwrap: function() { return this.parent().each(function() { m.nodeName(this, "body") || m(this).replaceWith(this.childNodes) }).end() }
    }), m.expr.filters.hidden = function(a) { return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display")) }, m.expr.filters.visible = function(a) { return !m.expr.filters.hidden(a) };
    var Qc = /%20/g,
        Rc = /\[\]$/,
        Sc = /\r?\n/g,
        Tc = /^(?:submit|button|image|reset|file)$/i,
        Uc = /^(?:input|select|textarea|keygen)/i;

    function Vc(a, b, c, d) {
        var e;
        if (m.isArray(b)) m.each(b, function(b, e) { c || Rc.test(a) ? d(a, e) : Vc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d) });
        else if (c || "object" !== m.type(b)) d(a, b);
        else
            for (e in b) Vc(a + "[" + e + "]", b[e], c, d)
    }
    m.param = function(a, b) {
        var c, d = [],
            e = function(a, b) { b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b) };
        if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) m.each(a, function() { e(this.name, this.value) });
        else
            for (c in a) Vc(c, a[c], b, e);
        return d.join("&").replace(Qc, "+")
    }, m.fn.extend({ serialize: function() { return m.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var a = m.prop(this, "elements"); return a ? m.makeArray(a) : this }).filter(function() { var a = this.type; return this.name && !m(this).is(":disabled") && Uc.test(this.nodeName) && !Tc.test(a) && (this.checked || !W.test(a)) }).map(function(a, b) { var c = m(this).val(); return null == c ? null : m.isArray(c) ? m.map(c, function(a) { return { name: b.name, value: a.replace(Sc, "\r\n") } }) : { name: b.name, value: c.replace(Sc, "\r\n") } }).get() } }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() { return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zc() || $c() } : Zc;
    var Wc = 0,
        Xc = {},
        Yc = m.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() { for (var a in Xc) Xc[a](void 0, !0) }), k.cors = !!Yc && "withCredentials" in Yc, Yc = k.ajax = !!Yc, Yc && m.ajaxTransport(function(a) {
        if (!a.crossDomain || k.cors) {
            var b;
            return {
                send: function(c, d) {
                    var e, f = a.xhr(),
                        g = ++Wc;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                        for (e in a.xhrFields) f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null), b = function(c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState))
                            if (delete Xc[g], b = void 0, f.onreadystatechange = m.noop, e) 4 !== f.readyState && f.abort();
                            else {
                                j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                try { i = f.statusText } catch (k) { i = "" }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xc[g] = b : b()
                },
                abort: function() { b && b(void 0, !0) }
            }
        }
    });

    function Zc() { try { return new a.XMLHttpRequest } catch (b) {} }

    function $c() { try { return new a.ActiveXObject("Microsoft.XMLHTTP") } catch (b) {} }
    m.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function(a) { return m.globalEval(a), a } } }), m.ajaxPrefilter("script", function(a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1) }), m.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = y.head || m("head")[0] || y.documentElement;
            return {
                send: function(d, e) {
                    b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function() { b && b.onload(void 0, !0) }
            }
        }
    });
    var _c = [],
        ad = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var a = _c.pop() || m.expando + "_" + vc++; return this[a] = !0, a } }), m.ajaxPrefilter("json jsonp", function(b, c, d) { var e, f, g, h = b.jsonp !== !1 && (ad.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ad.test(b.data) && "data"); return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ad, "$1" + e) : b.jsonp !== !1 && (b.url += (wc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() { return g || m.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function() { g = arguments }, d.always(function() { a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _c.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0 }), "script") : void 0 }), m.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || y;
        var d = u.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes))
    };
    var bd = m.fn.load;
    m.fn.load = function(a, b, c) {
        if ("string" != typeof a && bd) return bd.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({ url: a, type: f, dataType: "html", data: b }).done(function(a) { e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a) }).complete(c && function(a, b) { g.each(c, e || [a.responseText, b, a]) }), this
    }, m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) { m.fn[b] = function(a) { return this.on(b, a) } }), m.expr.filters.animated = function(a) { return m.grep(m.timers, function(b) { return a === b.elem }).length };
    var cd = a.document.documentElement;

    function dd(a) { return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1 }
    m.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = m.css(a, "position"),
                l = m(a),
                n = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n)
        }
    }, m.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) { m.offset.setOffset(this, a, b) });
            var b, c, d = { top: 0, left: 0 },
                e = this[0],
                f = e && e.ownerDocument;
            if (f) return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dd(f), { top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0), left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0) }) : d
        },
        position: function() {
            if (this[0]) {
                var a, b, c = { top: 0, left: 0 },
                    d = this[0];
                return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), { top: b.top - c.top - m.css(d, "marginTop", !0), left: b.left - c.left - m.css(d, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { var a = this.offsetParent || cd; while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position")) a = a.offsetParent; return a || cd }) }
    }), m.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function(d) { return V(this, function(a, d, e) { var f = dd(a); return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e) }, a, d, arguments.length, null) }
    }), m.each(["top", "left"], function(a, b) { m.cssHooks[b] = Lb(k.pixelPosition, function(a, c) { return c ? (c = Jb(a, b), Hb.test(c) ? m(a).position()[b] + "px" : c) : void 0 }) }), m.each({ Height: "height", Width: "width" }, function(a, b) {
        m.each({ padding: "inner" + a, content: b, "": "outer" + a }, function(c, d) {
            m.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return V(this, function(b, c, d) { var e; return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g) }, b, f ? d : void 0, f, null)
            }
        })
    }), m.fn.size = function() { return this.length }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() { return m });
    var ed = a.jQuery,
        fd = a.$;
    return m.noConflict = function(b) { return a.$ === m && (a.$ = fd), b && a.jQuery === m && (a.jQuery = ed), m }, typeof b === K && (a.jQuery = a.$ = m), m
});


/*! VelocityJS.org (1.5.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
! function(a) {
    "use strict";

    function b(a) {
        var b = a.length,
            d = c.type(a);
        return "function" !== d && !c.isWindow(a) && (!(1 !== a.nodeType || !b) || ("array" === d || 0 === b || "number" == typeof b && b > 0 && b - 1 in a))
    }
    if (!a.jQuery) {
        var c = function(a, b) { return new c.fn.init(a, b) };
        c.isWindow = function(a) { return a && a === a.window }, c.type = function(a) { return a ? "object" == typeof a || "function" == typeof a ? e[g.call(a)] || "object" : typeof a : a + "" }, c.isArray = Array.isArray || function(a) { return "array" === c.type(a) }, c.isPlainObject = function(a) { var b; if (!a || "object" !== c.type(a) || a.nodeType || c.isWindow(a)) return !1; try { if (a.constructor && !f.call(a, "constructor") && !f.call(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (d) { return !1 } for (b in a); return b === undefined || f.call(a, b) }, c.each = function(a, c, d) {
            var e = 0,
                f = a.length,
                g = b(a);
            if (d) {
                if (g)
                    for (; e < f && c.apply(a[e], d) !== !1; e++);
                else
                    for (e in a)
                        if (a.hasOwnProperty(e) && c.apply(a[e], d) === !1) break
            } else if (g)
                for (; e < f && c.call(a[e], e, a[e]) !== !1; e++);
            else
                for (e in a)
                    if (a.hasOwnProperty(e) && c.call(a[e], e, a[e]) === !1) break; return a
        }, c.data = function(a, b, e) {
            if (e === undefined) {
                var f = a[c.expando],
                    g = f && d[f];
                if (b === undefined) return g;
                if (g && b in g) return g[b]
            } else if (b !== undefined) { var h = a[c.expando] || (a[c.expando] = ++c.uuid); return d[h] = d[h] || {}, d[h][b] = e, e }
        }, c.removeData = function(a, b) {
            var e = a[c.expando],
                f = e && d[e];
            f && (b ? c.each(b, function(a, b) { delete f[b] }) : delete d[e])
        }, c.extend = function() {
            var a, b, d, e, f, g, h = arguments[0] || {},
                i = 1,
                j = arguments.length,
                k = !1;
            for ("boolean" == typeof h && (k = h, h = arguments[i] || {}, i++), "object" != typeof h && "function" !== c.type(h) && (h = {}), i === j && (h = this, i--); i < j; i++)
                if (f = arguments[i])
                    for (e in f) f.hasOwnProperty(e) && (a = h[e], d = f[e], h !== d && (k && d && (c.isPlainObject(d) || (b = c.isArray(d))) ? (b ? (b = !1, g = a && c.isArray(a) ? a : []) : g = a && c.isPlainObject(a) ? a : {}, h[e] = c.extend(k, g, d)) : d !== undefined && (h[e] = d)));
            return h
        }, c.queue = function(a, d, e) {
            if (a) {
                d = (d || "fx") + "queue";
                var f = c.data(a, d);
                return e ? (!f || c.isArray(e) ? f = c.data(a, d, function(a, c) {
                    var d = c || [];
                    return a && (b(Object(a)) ? function(a, b) {
                        for (var c = +b.length, d = 0, e = a.length; d < c;) a[e++] = b[d++];
                        if (c !== c)
                            for (; b[d] !== undefined;) a[e++] = b[d++];
                        a.length = e, a
                    }(d, "string" == typeof a ? [a] : a) : [].push.call(d, a)), d
                }(e)) : f.push(e), f) : f || []
            }
        }, c.dequeue = function(a, b) {
            c.each(a.nodeType ? [a] : a, function(a, d) {
                b = b || "fx";
                var e = c.queue(d, b),
                    f = e.shift();
                "inprogress" === f && (f = e.shift()), f && ("fx" === b && e.unshift("inprogress"), f.call(d, function() { c.dequeue(d, b) }))
            })
        }, c.fn = c.prototype = {
            init: function(a) { if (a.nodeType) return this[0] = a, this; throw new Error("Not a DOM node.") },
            offset: function() { var b = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : { top: 0, left: 0 }; return { top: b.top + (a.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0), left: b.left + (a.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0) } },
            position: function() {
                var a = this[0],
                    b = function(a) { for (var b = a.offsetParent; b && "html" !== b.nodeName.toLowerCase() && b.style && "static" === b.style.position;) b = b.offsetParent; return b || document }(a),
                    d = this.offset(),
                    e = /^(?:body|html)$/i.test(b.nodeName) ? { top: 0, left: 0 } : c(b).offset();
                return d.top -= parseFloat(a.style.marginTop) || 0, d.left -= parseFloat(a.style.marginLeft) || 0, b.style && (e.top += parseFloat(b.style.borderTopWidth) || 0, e.left += parseFloat(b.style.borderLeftWidth) || 0), { top: d.top - e.top, left: d.left - e.left }
            }
        };
        var d = {};
        c.expando = "velocity" + (new Date).getTime(), c.uuid = 0;
        for (var e = {}, f = e.hasOwnProperty, g = e.toString, h = "Boolean Number String Function Array Date RegExp Object Error".split(" "), i = 0; i < h.length; i++) e["[object " + h[i] + "]"] = h[i].toLowerCase();
        c.fn.init.prototype = c.fn, a.Velocity = { Utilities: c }
    }
}(window),
function(a) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = a() : "function" == typeof define && define.amd ? define(a) : a() }(function() {
    "use strict";
    return function(a, b, c, d) {
        function e(a) {
            for (var b = -1, c = a ? a.length : 0, d = []; ++b < c;) {
                var e = a[b];
                e && d.push(e)
            }
            return d
        }

        function f(a) { return u.isWrapped(a) ? a = s.call(a) : u.isNode(a) && (a = [a]), a }

        function g(a) { var b = o.data(a, "velocity"); return null === b ? d : b }

        function h(a, b) {
            var c = g(a);
            c && c.delayTimer && !c.delayPaused && (c.delayRemaining = c.delay - b + c.delayBegin, c.delayPaused = !0, clearTimeout(c.delayTimer.setTimeout))
        }

        function i(a, b) {
            var c = g(a);
            c && c.delayTimer && c.delayPaused && (c.delayPaused = !1, c.delayTimer.setTimeout = setTimeout(c.delayTimer.next, c.delayRemaining))
        }

        function j(a) { return function(b) { return Math.round(b * a) * (1 / a) } }

        function k(a, c, d, e) {
            function f(a, b) { return 1 - 3 * b + 3 * a }

            function g(a, b) { return 3 * b - 6 * a }

            function h(a) { return 3 * a }

            function i(a, b, c) { return ((f(b, c) * a + g(b, c)) * a + h(b)) * a }

            function j(a, b, c) { return 3 * f(b, c) * a * a + 2 * g(b, c) * a + h(b) }

            function k(b, c) {
                for (var e = 0; e < p; ++e) {
                    var f = j(c, a, d);
                    if (0 === f) return c;
                    c -= (i(c, a, d) - b) / f
                }
                return c
            }

            function l() { for (var b = 0; b < t; ++b) x[b] = i(b * u, a, d) }

            function m(b, c, e) {
                var f, g, h = 0;
                do { g = c + (e - c) / 2, f = i(g, a, d) - b, f > 0 ? e = g : c = g } while (Math.abs(f) > r && ++h < s);
                return g
            }

            function n(b) {
                for (var c = 0, e = 1, f = t - 1; e !== f && x[e] <= b; ++e) c += u;
                --e;
                var g = (b - x[e]) / (x[e + 1] - x[e]),
                    h = c + g * u,
                    i = j(h, a, d);
                return i >= q ? k(b, h) : 0 === i ? h : m(b, c, c + u)
            }

            function o() { y = !0, a === c && d === e || l() }
            var p = 4,
                q = .001,
                r = 1e-7,
                s = 10,
                t = 11,
                u = 1 / (t - 1),
                v = "Float32Array" in b;
            if (4 !== arguments.length) return !1;
            for (var w = 0; w < 4; ++w)
                if ("number" != typeof arguments[w] || isNaN(arguments[w]) || !isFinite(arguments[w])) return !1;
            a = Math.min(a, 1), d = Math.min(d, 1), a = Math.max(a, 0), d = Math.max(d, 0);
            var x = v ? new Float32Array(t) : new Array(t),
                y = !1,
                z = function(b) { return y || o(), a === c && d === e ? b : 0 === b ? 0 : 1 === b ? 1 : i(n(b), c, e) };
            z.getControlPoints = function() { return [{ x: a, y: c }, { x: d, y: e }] };
            var A = "generateBezier(" + [a, c, d, e] + ")";
            return z.toString = function() { return A }, z
        }

        function l(a, b) { var c = a; return u.isString(a) ? y.Easings[a] || (c = !1) : c = u.isArray(a) && 1 === a.length ? j.apply(null, a) : u.isArray(a) && 2 === a.length ? z.apply(null, a.concat([b])) : !(!u.isArray(a) || 4 !== a.length) && k.apply(null, a), c === !1 && (c = y.Easings[y.defaults.easing] ? y.defaults.easing : x), c }

        function m(a) {
            if (a) {
                var b = y.timestamp && a !== !0 ? a : r.now(),
                    c = y.State.calls.length;
                c > 1e4 && (y.State.calls = e(y.State.calls), c = y.State.calls.length);
                for (var f = 0; f < c; f++)
                    if (y.State.calls[f]) {
                        var h = y.State.calls[f],
                            i = h[0],
                            j = h[2],
                            k = h[3],
                            l = !!k,
                            q = null,
                            s = h[5],
                            t = h[6];
                        if (k || (k = y.State.calls[f][3] = b - 16), s) {
                            if (s.resume !== !0) continue;
                            k = h[3] = Math.round(b - t - 16), h[5] = null
                        }
                        t = h[6] = b - k;
                        for (var v = Math.min(t / j.duration, 1), w = 0, x = i.length; w < x; w++) {
                            var z = i[w],
                                B = z.element;
                            if (g(B)) {
                                var D = !1;
                                if (j.display !== d && null !== j.display && "none" !== j.display) {
                                    if ("flex" === j.display) {
                                        var E = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                        o.each(E, function(a, b) { A.setPropertyValue(B, "display", b) })
                                    }
                                    A.setPropertyValue(B, "display", j.display)
                                }
                                j.visibility !== d && "hidden" !== j.visibility && A.setPropertyValue(B, "visibility", j.visibility);
                                for (var F in z)
                                    if (z.hasOwnProperty(F) && "element" !== F) {
                                        var G, H = z[F],
                                            I = u.isString(H.easing) ? y.Easings[H.easing] : H.easing;
                                        if (u.isString(H.pattern)) {
                                            var J = 1 === v ? function(a, b, c) { var d = H.endValue[b]; return c ? Math.round(d) : d } : function(a, b, c) {
                                                var d = H.startValue[b],
                                                    e = H.endValue[b] - d,
                                                    f = d + e * I(v, j, e);
                                                return c ? Math.round(f) : f
                                            };
                                            G = H.pattern.replace(/{(\d+)(!)?}/g, J)
                                        } else if (1 === v) G = H.endValue;
                                        else {
                                            var K = H.endValue - H.startValue;
                                            G = H.startValue + K * I(v, j, K)
                                        }
                                        if (!l && G === H.currentValue) continue;
                                        if (H.currentValue = G, "tween" === F) q = G;
                                        else {
                                            var L;
                                            if (A.Hooks.registered[F]) {
                                                L = A.Hooks.getRoot(F);
                                                var M = g(B).rootPropertyValueCache[L];
                                                M && (H.rootPropertyValue = M)
                                            }
                                            var N = A.setPropertyValue(B, F, H.currentValue + (p < 9 && 0 === parseFloat(G) ? "" : H.unitType), H.rootPropertyValue, H.scrollData);
                                            A.Hooks.registered[F] && (A.Normalizations.registered[L] ? g(B).rootPropertyValueCache[L] = A.Normalizations.registered[L]("extract", null, N[1]) : g(B).rootPropertyValueCache[L] = N[1]), "transform" === N[0] && (D = !0)
                                        }
                                    }
                                j.mobileHA && g(B).transformCache.translate3d === d && (g(B).transformCache.translate3d = "(0px, 0px, 0px)", D = !0), D && A.flushTransformCache(B)
                            }
                        }
                        j.display !== d && "none" !== j.display && (y.State.calls[f][2].display = !1), j.visibility !== d && "hidden" !== j.visibility && (y.State.calls[f][2].visibility = !1), j.progress && j.progress.call(h[1], h[1], v, Math.max(0, k + j.duration - b), k, q), 1 === v && n(f)
                    }
            }
            y.State.isTicking && C(m)
        }

        function n(a, b) {
            if (!y.State.calls[a]) return !1;
            for (var c = y.State.calls[a][0], e = y.State.calls[a][1], f = y.State.calls[a][2], h = y.State.calls[a][4], i = !1, j = 0, k = c.length; j < k; j++) {
                var l = c[j].element;
                b || f.loop || ("none" === f.display && A.setPropertyValue(l, "display", f.display), "hidden" === f.visibility && A.setPropertyValue(l, "visibility", f.visibility));
                var m = g(l);
                if (f.loop !== !0 && (o.queue(l)[1] === d || !/\.velocityQueueEntryFlag/i.test(o.queue(l)[1])) && m) {
                    m.isAnimating = !1, m.rootPropertyValueCache = {};
                    var n = !1;
                    o.each(A.Lists.transforms3D, function(a, b) {
                        var c = /^scale/.test(b) ? 1 : 0,
                            e = m.transformCache[b];
                        m.transformCache[b] !== d && new RegExp("^\\(" + c + "[^.]").test(e) && (n = !0, delete m.transformCache[b])
                    }), f.mobileHA && (n = !0, delete m.transformCache.translate3d), n && A.flushTransformCache(l), A.Values.removeClass(l, "velocity-animating")
                }
                if (!b && f.complete && !f.loop && j === k - 1) try { f.complete.call(e, e) } catch (r) { setTimeout(function() { throw r }, 1) }
                h && f.loop !== !0 && h(e), m && f.loop === !0 && !b && (o.each(m.tweensContainer, function(a, b) {
                    if (/^rotate/.test(a) && (parseFloat(b.startValue) - parseFloat(b.endValue)) % 360 == 0) {
                        var c = b.startValue;
                        b.startValue = b.endValue, b.endValue = c
                    }
                    /^backgroundPosition/.test(a) && 100 === parseFloat(b.endValue) && "%" === b.unitType && (b.endValue = 0, b.startValue = 100)
                }), y(l, "reverse", { loop: !0, delay: f.delay })), f.queue !== !1 && o.dequeue(l, f.queue)
            }
            y.State.calls[a] = !1;
            for (var p = 0, q = y.State.calls.length; p < q; p++)
                if (y.State.calls[p] !== !1) { i = !0; break }
            i === !1 && (y.State.isTicking = !1, delete y.State.calls, y.State.calls = [])
        }
        var o, p = function() { if (c.documentMode) return c.documentMode; for (var a = 7; a > 4; a--) { var b = c.createElement("div"); if (b.innerHTML = "<!--[if IE " + a + "]><span></span><![endif]-->", b.getElementsByTagName("span").length) return b = null, a } return d }(),
            q = function() { var a = 0; return b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || function(b) { var c, d = (new Date).getTime(); return c = Math.max(0, 16 - (d - a)), a = d + c, setTimeout(function() { b(d + c) }, c) } }(),
            r = function() {
                var a = b.performance || {};
                if ("function" != typeof a.now) {
                    var c = a.timing && a.timing.navigationStart ? a.timing.navigationStart : (new Date).getTime();
                    a.now = function() { return (new Date).getTime() - c }
                }
                return a
            }(),
            s = function() {
                var a = Array.prototype.slice;
                try { return a.call(c.documentElement), a } catch (b) {
                    return function(b, c) {
                        var d = this.length;
                        if ("number" != typeof b && (b = 0), "number" != typeof c && (c = d), this.slice) return a.call(this, b, c);
                        var e, f = [],
                            g = b >= 0 ? b : Math.max(0, d + b),
                            h = c < 0 ? d + c : Math.min(c, d),
                            i = h - g;
                        if (i > 0)
                            if (f = new Array(i), this.charAt)
                                for (e = 0; e < i; e++) f[e] = this.charAt(g + e);
                            else
                                for (e = 0; e < i; e++) f[e] = this[g + e];
                        return f
                    }
                }
            }(),
            t = function() {
                return Array.prototype.includes ? function(a, b) { return a.includes(b) } : Array.prototype.indexOf ? function(a, b) { return a.indexOf(b) >= 0 } : function(a, b) {
                    for (var c = 0; c < a.length; c++)
                        if (a[c] === b) return !0;
                    return !1
                }
            },
            u = {
                isNumber: function(a) { return "number" == typeof a },
                isString: function(a) { return "string" == typeof a },
                isArray: Array.isArray || function(a) { return "[object Array]" === Object.prototype.toString.call(a) },
                isFunction: function(a) { return "[object Function]" === Object.prototype.toString.call(a) },
                isNode: function(a) { return a && a.nodeType },
                isWrapped: function(a) { return a && a !== b && u.isNumber(a.length) && !u.isString(a) && !u.isFunction(a) && !u.isNode(a) && (0 === a.length || u.isNode(a[0])) },
                isSVG: function(a) { return b.SVGElement && a instanceof b.SVGElement },
                isEmptyObject: function(a) {
                    for (var b in a)
                        if (a.hasOwnProperty(b)) return !1;
                    return !0
                }
            },
            v = !1;
        if (a.fn && a.fn.jquery ? (o = a, v = !0) : o = b.Velocity.Utilities, p <= 8 && !v) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (p <= 7) return void(jQuery.fn.velocity = jQuery.fn.animate);
        var w = 400,
            x = "swing",
            y = {
                State: { isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), isAndroid: /Android/i.test(navigator.userAgent), isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent), isChrome: b.chrome, isFirefox: /Firefox/i.test(navigator.userAgent), prefixElement: c.createElement("div"), prefixMatches: {}, scrollAnchor: null, scrollPropertyLeft: null, scrollPropertyTop: null, isTicking: !1, calls: [], delayedElements: { count: 0 } },
                CSS: {},
                Utilities: o,
                Redirects: {},
                Easings: {},
                Promise: b.Promise,
                defaults: { queue: "", duration: w, easing: x, begin: d, complete: d, progress: d, display: d, visibility: d, loop: !1, delay: !1, mobileHA: !0, _cacheValues: !0, promiseRejectEmpty: !0 },
                init: function(a) { o.data(a, "velocity", { isSVG: u.isSVG(a), isAnimating: !1, computedStyle: null, tweensContainer: null, rootPropertyValueCache: {}, transformCache: {} }) },
                hook: null,
                mock: !1,
                version: { major: 1, minor: 5, patch: 0 },
                debug: !1,
                timestamp: !0,
                pauseAll: function(a) {
                    var b = (new Date).getTime();
                    o.each(y.State.calls, function(b, c) {
                        if (c) {
                            if (a !== d && (c[2].queue !== a || c[2].queue === !1)) return !0;
                            c[5] = { resume: !1 }
                        }
                    }), o.each(y.State.delayedElements, function(a, c) { c && h(c, b) })
                },
                resumeAll: function(a) {
                    var b = (new Date).getTime();
                    o.each(y.State.calls, function(b, c) {
                        if (c) {
                            if (a !== d && (c[2].queue !== a || c[2].queue === !1)) return !0;
                            c[5] && (c[5].resume = !0)
                        }
                    }), o.each(y.State.delayedElements, function(a, c) { c && i(c, b) })
                }
            };
        b.pageYOffset !== d ? (y.State.scrollAnchor = b, y.State.scrollPropertyLeft = "pageXOffset", y.State.scrollPropertyTop = "pageYOffset") : (y.State.scrollAnchor = c.documentElement || c.body.parentNode || c.body, y.State.scrollPropertyLeft = "scrollLeft", y.State.scrollPropertyTop = "scrollTop");
        var z = function() {
            function a(a) { return -a.tension * a.x - a.friction * a.v }

            function b(b, c, d) { var e = { x: b.x + d.dx * c, v: b.v + d.dv * c, tension: b.tension, friction: b.friction }; return { dx: e.v, dv: a(e) } }

            function c(c, d) {
                var e = { dx: c.v, dv: a(c) },
                    f = b(c, .5 * d, e),
                    g = b(c, .5 * d, f),
                    h = b(c, d, g),
                    i = 1 / 6 * (e.dx + 2 * (f.dx + g.dx) + h.dx),
                    j = 1 / 6 * (e.dv + 2 * (f.dv + g.dv) + h.dv);
                return c.x = c.x + i * d, c.v = c.v + j * d, c
            }
            return function d(a, b, e) {
                var f, g, h, i = { x: -1, v: 0, tension: null, friction: null },
                    j = [0],
                    k = 0;
                for (a = parseFloat(a) || 500, b = parseFloat(b) || 20, e = e || null, i.tension = a, i.friction = b, f = null !== e, f ? (k = d(a, b), g = k / e * .016) : g = .016;;)
                    if (h = c(h || i, g), j.push(1 + h.x), k += 16, !(Math.abs(h.x) > 1e-4 && Math.abs(h.v) > 1e-4)) break;
                return f ? function(a) { return j[a * (j.length - 1) | 0] } : k
            }
        }();
        y.Easings = { linear: function(a) { return a }, swing: function(a) { return .5 - Math.cos(a * Math.PI) / 2 }, spring: function(a) { return 1 - Math.cos(4.5 * a * Math.PI) * Math.exp(6 * -a) } }, o.each([
            ["ease", [.25, .1, .25, 1]],
            ["ease-in", [.42, 0, 1, 1]],
            ["ease-out", [0, 0, .58, 1]],
            ["ease-in-out", [.42, 0, .58, 1]],
            ["easeInSine", [.47, 0, .745, .715]],
            ["easeOutSine", [.39, .575, .565, 1]],
            ["easeInOutSine", [.445, .05, .55, .95]],
            ["easeInQuad", [.55, .085, .68, .53]],
            ["easeOutQuad", [.25, .46, .45, .94]],
            ["easeInOutQuad", [.455, .03, .515, .955]],
            ["easeInCubic", [.55, .055, .675, .19]],
            ["easeOutCubic", [.215, .61, .355, 1]],
            ["easeInOutCubic", [.645, .045, .355, 1]],
            ["easeInQuart", [.895, .03, .685, .22]],
            ["easeOutQuart", [.165, .84, .44, 1]],
            ["easeInOutQuart", [.77, 0, .175, 1]],
            ["easeInQuint", [.755, .05, .855, .06]],
            ["easeOutQuint", [.23, 1, .32, 1]],
            ["easeInOutQuint", [.86, 0, .07, 1]],
            ["easeInExpo", [.95, .05, .795, .035]],
            ["easeOutExpo", [.19, 1, .22, 1]],
            ["easeInOutExpo", [1, 0, 0, 1]],
            ["easeInCirc", [.6, .04, .98, .335]],
            ["easeOutCirc", [.075, .82, .165, 1]],
            ["easeInOutCirc", [.785, .135, .15, .86]]
        ], function(a, b) { y.Easings[b[0]] = k.apply(null, b[1]) });
        var A = y.CSS = {
            RegEx: { isHex: /^#([A-f\d]{3}){1,2}$/i, valueUnwrap: /^[A-z]+\((.*)\)$/i, wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/, valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi },
            Lists: { colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"], transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"], transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"], units: ["%", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "cm", "mm", "Q", "in", "pc", "pt", "px", "deg", "grad", "rad", "turn", "s", "ms"], colorNames: { aliceblue: "240,248,255", antiquewhite: "250,235,215", aquamarine: "127,255,212", aqua: "0,255,255", azure: "240,255,255", beige: "245,245,220", bisque: "255,228,196", black: "0,0,0", blanchedalmond: "255,235,205", blueviolet: "138,43,226", blue: "0,0,255", brown: "165,42,42", burlywood: "222,184,135", cadetblue: "95,158,160", chartreuse: "127,255,0", chocolate: "210,105,30", coral: "255,127,80", cornflowerblue: "100,149,237", cornsilk: "255,248,220", crimson: "220,20,60", cyan: "0,255,255", darkblue: "0,0,139", darkcyan: "0,139,139", darkgoldenrod: "184,134,11", darkgray: "169,169,169", darkgrey: "169,169,169", darkgreen: "0,100,0", darkkhaki: "189,183,107", darkmagenta: "139,0,139", darkolivegreen: "85,107,47", darkorange: "255,140,0", darkorchid: "153,50,204", darkred: "139,0,0", darksalmon: "233,150,122", darkseagreen: "143,188,143", darkslateblue: "72,61,139", darkslategray: "47,79,79", darkturquoise: "0,206,209", darkviolet: "148,0,211", deeppink: "255,20,147", deepskyblue: "0,191,255", dimgray: "105,105,105", dimgrey: "105,105,105", dodgerblue: "30,144,255", firebrick: "178,34,34", floralwhite: "255,250,240", forestgreen: "34,139,34", fuchsia: "255,0,255", gainsboro: "220,220,220", ghostwhite: "248,248,255", gold: "255,215,0", goldenrod: "218,165,32", gray: "128,128,128", grey: "128,128,128", greenyellow: "173,255,47", green: "0,128,0", honeydew: "240,255,240", hotpink: "255,105,180", indianred: "205,92,92", indigo: "75,0,130", ivory: "255,255,240", khaki: "240,230,140", lavenderblush: "255,240,245", lavender: "230,230,250", lawngreen: "124,252,0", lemonchiffon: "255,250,205", lightblue: "173,216,230", lightcoral: "240,128,128", lightcyan: "224,255,255", lightgoldenrodyellow: "250,250,210", lightgray: "211,211,211", lightgrey: "211,211,211", lightgreen: "144,238,144", lightpink: "255,182,193", lightsalmon: "255,160,122", lightseagreen: "32,178,170", lightskyblue: "135,206,250", lightslategray: "119,136,153", lightsteelblue: "176,196,222", lightyellow: "255,255,224", limegreen: "50,205,50", lime: "0,255,0", linen: "250,240,230", magenta: "255,0,255", maroon: "128,0,0", mediumaquamarine: "102,205,170", mediumblue: "0,0,205", mediumorchid: "186,85,211", mediumpurple: "147,112,219", mediumseagreen: "60,179,113", mediumslateblue: "123,104,238", mediumspringgreen: "0,250,154", mediumturquoise: "72,209,204", mediumvioletred: "199,21,133", midnightblue: "25,25,112", mintcream: "245,255,250", mistyrose: "255,228,225", moccasin: "255,228,181", navajowhite: "255,222,173", navy: "0,0,128", oldlace: "253,245,230", olivedrab: "107,142,35", olive: "128,128,0", orangered: "255,69,0", orange: "255,165,0", orchid: "218,112,214", palegoldenrod: "238,232,170", palegreen: "152,251,152", paleturquoise: "175,238,238", palevioletred: "219,112,147", papayawhip: "255,239,213", peachpuff: "255,218,185", peru: "205,133,63", pink: "255,192,203", plum: "221,160,221", powderblue: "176,224,230", purple: "128,0,128", red: "255,0,0", rosybrown: "188,143,143", royalblue: "65,105,225", saddlebrown: "139,69,19", salmon: "250,128,114", sandybrown: "244,164,96", seagreen: "46,139,87", seashell: "255,245,238", sienna: "160,82,45", silver: "192,192,192", skyblue: "135,206,235", slateblue: "106,90,205", slategray: "112,128,144", snow: "255,250,250", springgreen: "0,255,127", steelblue: "70,130,180", tan: "210,180,140", teal: "0,128,128", thistle: "216,191,216", tomato: "255,99,71", turquoise: "64,224,208", violet: "238,130,238", wheat: "245,222,179", whitesmoke: "245,245,245", white: "255,255,255", yellowgreen: "154,205,50", yellow: "255,255,0" } },
            Hooks: {
                templates: { textShadow: ["Color X Y Blur", "black 0px 0px 0px"], boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"], clip: ["Top Right Bottom Left", "0px 0px 0px 0px"], backgroundPosition: ["X Y", "0% 0%"], transformOrigin: ["X Y Z", "50% 50% 0px"], perspectiveOrigin: ["X Y", "50% 50%"] },
                registered: {},
                register: function() {
                    for (var a = 0; a < A.Lists.colors.length; a++) {
                        var b = "color" === A.Lists.colors[a] ? "0 0 0 1" : "255 255 255 1";
                        A.Hooks.templates[A.Lists.colors[a]] = ["Red Green Blue Alpha", b]
                    }
                    var c, d, e;
                    if (p)
                        for (c in A.Hooks.templates)
                            if (A.Hooks.templates.hasOwnProperty(c)) { d = A.Hooks.templates[c], e = d[0].split(" "); var f = d[1].match(A.RegEx.valueSplit); "Color" === e[0] && (e.push(e.shift()), f.push(f.shift()), A.Hooks.templates[c] = [e.join(" "), f.join(" ")]) }
                    for (c in A.Hooks.templates)
                        if (A.Hooks.templates.hasOwnProperty(c)) {
                            d = A.Hooks.templates[c], e = d[0].split(" ");
                            for (var g in e)
                                if (e.hasOwnProperty(g)) {
                                    var h = c + e[g],
                                        i = g;
                                    A.Hooks.registered[h] = [c, i]
                                }
                        }
                },
                getRoot: function(a) { var b = A.Hooks.registered[a]; return b ? b[0] : a },
                getUnit: function(a, b) { var c = (a.substr(b || 0, 5).match(/^[a-z%]+/) || [])[0] || ""; return c && t(A.Lists.units, c) ? c : "" },
                fixColors: function(a) { return a.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function(a, b, c) { return A.Lists.colorNames.hasOwnProperty(c) ? (b ? b : "rgba(") + A.Lists.colorNames[c] + (b ? "" : ",1)") : b + c }) },
                cleanRootPropertyValue: function(a, b) { return A.RegEx.valueUnwrap.test(b) && (b = b.match(A.RegEx.valueUnwrap)[1]), A.Values.isCSSNullValue(b) && (b = A.Hooks.templates[a][1]), b },
                extractValue: function(a, b) {
                    var c = A.Hooks.registered[a];
                    if (c) {
                        var d = c[0],
                            e = c[1];
                        return b = A.Hooks.cleanRootPropertyValue(d, b), b.toString().match(A.RegEx.valueSplit)[e]
                    }
                    return b
                },
                injectValue: function(a, b, c) {
                    var d = A.Hooks.registered[a];
                    if (d) {
                        var e, f = d[0],
                            g = d[1];
                        return c = A.Hooks.cleanRootPropertyValue(f, c), e = c.toString().match(A.RegEx.valueSplit), e[g] = b, e.join(" ")
                    }
                    return c
                }
            },
            Normalizations: {
                registered: {
                    clip: function(a, b, c) {
                        switch (a) {
                            case "name":
                                return "clip";
                            case "extract":
                                var d;
                                return A.RegEx.wrappedValueAlreadyExtracted.test(c) ? d = c : (d = c.toString().match(A.RegEx.valueUnwrap), d = d ? d[1].replace(/,(\s+)?/g, " ") : c), d;
                            case "inject":
                                return "rect(" + c + ")"
                        }
                    },
                    blur: function(a, b, c) {
                        switch (a) {
                            case "name":
                                return y.State.isFirefox ? "filter" : "-webkit-filter";
                            case "extract":
                                var d = parseFloat(c);
                                if (!d && 0 !== d) {
                                    var e = c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                    d = e ? e[1] : 0
                                }
                                return d;
                            case "inject":
                                return parseFloat(c) ? "blur(" + c + ")" : "none"
                        }
                    },
                    opacity: function(a, b, c) {
                        if (p <= 8) switch (a) {
                            case "name":
                                return "filter";
                            case "extract":
                                var d = c.toString().match(/alpha\(opacity=(.*)\)/i);
                                return c = d ? d[1] / 100 : 1;
                            case "inject":
                                return b.style.zoom = 1, parseFloat(c) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(c), 10) + ")"
                        } else switch (a) {
                            case "name":
                                return "opacity";
                            case "extract":
                                return c;
                            case "inject":
                                return c
                        }
                    }
                },
                register: function() {
                    function a(a, b, c) {
                        if ("border-box" === A.getPropertyValue(b, "boxSizing").toString().toLowerCase() === (c || !1)) {
                            var d, e, f = 0,
                                g = "width" === a ? ["Left", "Right"] : ["Top", "Bottom"],
                                h = ["padding" + g[0], "padding" + g[1], "border" + g[0] + "Width", "border" + g[1] + "Width"];
                            for (d = 0; d < h.length; d++) e = parseFloat(A.getPropertyValue(b, h[d])), isNaN(e) || (f += e);
                            return c ? -f : f
                        }
                        return 0
                    }

                    function b(b, c) {
                        return function(d, e, f) {
                            switch (d) {
                                case "name":
                                    return b;
                                case "extract":
                                    return parseFloat(f) + a(b, e, c);
                                case "inject":
                                    return parseFloat(f) - a(b, e, c) + "px"
                            }
                        }
                    }
                    p && !(p > 9) || y.State.isGingerbread || (A.Lists.transformsBase = A.Lists.transformsBase.concat(A.Lists.transforms3D));
                    for (var c = 0; c < A.Lists.transformsBase.length; c++) ! function() {
                        var a = A.Lists.transformsBase[c];
                        A.Normalizations.registered[a] = function(b, c, e) {
                            switch (b) {
                                case "name":
                                    return "transform";
                                case "extract":
                                    return g(c) === d || g(c).transformCache[a] === d ? /^scale/i.test(a) ? 1 : 0 : g(c).transformCache[a].replace(/[()]/g, "");
                                case "inject":
                                    var f = !1;
                                    switch (a.substr(0, a.length - 1)) {
                                        case "translate":
                                            f = !/(%|px|em|rem|vw|vh|\d)$/i.test(e);
                                            break;
                                        case "scal":
                                        case "scale":
                                            y.State.isAndroid && g(c).transformCache[a] === d && e < 1 && (e = 1), f = !/(\d)$/i.test(e);
                                            break;
                                        case "skew":
                                            f = !/(deg|\d)$/i.test(e);
                                            break;
                                        case "rotate":
                                            f = !/(deg|\d)$/i.test(e)
                                    }
                                    return f || (g(c).transformCache[a] = "(" + e + ")"), g(c).transformCache[a]
                            }
                        }
                    }();
                    for (var e = 0; e < A.Lists.colors.length; e++) ! function() {
                        var a = A.Lists.colors[e];
                        A.Normalizations.registered[a] = function(b, c, e) {
                            switch (b) {
                                case "name":
                                    return a;
                                case "extract":
                                    var f;
                                    if (A.RegEx.wrappedValueAlreadyExtracted.test(e)) f = e;
                                    else { var g, h = { black: "rgb(0, 0, 0)", blue: "rgb(0, 0, 255)", gray: "rgb(128, 128, 128)", green: "rgb(0, 128, 0)", red: "rgb(255, 0, 0)", white: "rgb(255, 255, 255)" }; /^[A-z]+$/i.test(e) ? g = h[e] !== d ? h[e] : h.black : A.RegEx.isHex.test(e) ? g = "rgb(" + A.Values.hexToRgb(e).join(" ") + ")" : /^rgba?\(/i.test(e) || (g = h.black), f = (g || e).toString().match(A.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ") }
                                    return (!p || p > 8) && 3 === f.split(" ").length && (f += " 1"), f;
                                case "inject":
                                    return /^rgb/.test(e) ? e : (p <= 8 ? 4 === e.split(" ").length && (e = e.split(/\s+/).slice(0, 3).join(" ")) : 3 === e.split(" ").length && (e += " 1"), (p <= 8 ? "rgb" : "rgba") + "(" + e.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")")
                            }
                        }
                    }();
                    A.Normalizations.registered.innerWidth = b("width", !0), A.Normalizations.registered.innerHeight = b("height", !0), A.Normalizations.registered.outerWidth = b("width"), A.Normalizations.registered.outerHeight = b("height")
                }
            },
            Names: { camelCase: function(a) { return a.replace(/-(\w)/g, function(a, b) { return b.toUpperCase() }) }, SVGAttribute: function(a) { var b = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2"; return (p || y.State.isAndroid && !y.State.isChrome) && (b += "|transform"), new RegExp("^(" + b + ")$", "i").test(a) }, prefixCheck: function(a) { if (y.State.prefixMatches[a]) return [y.State.prefixMatches[a], !0]; for (var b = ["", "Webkit", "Moz", "ms", "O"], c = 0, d = b.length; c < d; c++) { var e; if (e = 0 === c ? a : b[c] + a.replace(/^\w/, function(a) { return a.toUpperCase() }), u.isString(y.State.prefixElement.style[e])) return y.State.prefixMatches[a] = e, [e, !0] } return [a, !1] } },
            Values: {
                hexToRgb: function(a) { var b, c = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i; return a = a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(a, b, c, d) { return b + b + c + c + d + d }), b = c.exec(a), b ? [parseInt(b[1], 16), parseInt(b[2], 16), parseInt(b[3], 16)] : [0, 0, 0] },
                isCSSNullValue: function(a) { return !a || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a) },
                getUnitType: function(a) { return /^(rotate|skew)/i.test(a) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a) ? "" : "px" },
                getDisplayType: function(a) { var b = a && a.tagName.toString().toLowerCase(); return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b) ? "inline" : /^(li)$/i.test(b) ? "list-item" : /^(tr)$/i.test(b) ? "table-row" : /^(table)$/i.test(b) ? "table" : /^(tbody)$/i.test(b) ? "table-row-group" : "block" },
                addClass: function(a, b) {
                    if (a)
                        if (a.classList) a.classList.add(b);
                        else if (u.isString(a.className)) a.className += (a.className.length ? " " : "") + b;
                    else {
                        var c = a.getAttribute(p <= 7 ? "className" : "class") || "";
                        a.setAttribute("class", c + (c ? " " : "") + b)
                    }
                },
                removeClass: function(a, b) {
                    if (a)
                        if (a.classList) a.classList.remove(b);
                        else if (u.isString(a.className)) a.className = a.className.toString().replace(new RegExp("(^|\\s)" + b.split(" ").join("|") + "(\\s|$)", "gi"), " ");
                    else {
                        var c = a.getAttribute(p <= 7 ? "className" : "class") || "";
                        a.setAttribute("class", c.replace(new RegExp("(^|s)" + b.split(" ").join("|") + "(s|$)", "gi"), " "))
                    }
                }
            },
            getPropertyValue: function(a, c, e, f) {
                function h(a, c) {
                    var e = 0;
                    if (p <= 8) e = o.css(a, c);
                    else {
                        var i = !1;
                        /^(width|height)$/.test(c) && 0 === A.getPropertyValue(a, "display") && (i = !0, A.setPropertyValue(a, "display", A.Values.getDisplayType(a)));
                        var j = function() { i && A.setPropertyValue(a, "display", "none") };
                        if (!f) { if ("height" === c && "border-box" !== A.getPropertyValue(a, "boxSizing").toString().toLowerCase()) { var k = a.offsetHeight - (parseFloat(A.getPropertyValue(a, "borderTopWidth")) || 0) - (parseFloat(A.getPropertyValue(a, "borderBottomWidth")) || 0) - (parseFloat(A.getPropertyValue(a, "paddingTop")) || 0) - (parseFloat(A.getPropertyValue(a, "paddingBottom")) || 0); return j(), k } if ("width" === c && "border-box" !== A.getPropertyValue(a, "boxSizing").toString().toLowerCase()) { var l = a.offsetWidth - (parseFloat(A.getPropertyValue(a, "borderLeftWidth")) || 0) - (parseFloat(A.getPropertyValue(a, "borderRightWidth")) || 0) - (parseFloat(A.getPropertyValue(a, "paddingLeft")) || 0) - (parseFloat(A.getPropertyValue(a, "paddingRight")) || 0); return j(), l } }
                        var m;
                        m = g(a) === d ? b.getComputedStyle(a, null) : g(a).computedStyle ? g(a).computedStyle : g(a).computedStyle = b.getComputedStyle(a, null), "borderColor" === c && (c = "borderTopColor"), e = 9 === p && "filter" === c ? m.getPropertyValue(c) : m[c], "" !== e && null !== e || (e = a.style[c]), j()
                    }
                    if ("auto" === e && /^(top|right|bottom|left)$/i.test(c)) {
                        var n = h(a, "position");
                        ("fixed" === n || "absolute" === n && /top|left/i.test(c)) && (e = o(a).position()[c] + "px")
                    }
                    return e
                }
                var i;
                if (A.Hooks.registered[c]) {
                    var j = c,
                        k = A.Hooks.getRoot(j);
                    e === d && (e = A.getPropertyValue(a, A.Names.prefixCheck(k)[0])), A.Normalizations.registered[k] && (e = A.Normalizations.registered[k]("extract", a, e)), i = A.Hooks.extractValue(j, e)
                } else if (A.Normalizations.registered[c]) {
                    var l, m;
                    l = A.Normalizations.registered[c]("name", a), "transform" !== l && (m = h(a, A.Names.prefixCheck(l)[0]), A.Values.isCSSNullValue(m) && A.Hooks.templates[c] && (m = A.Hooks.templates[c][1])), i = A.Normalizations.registered[c]("extract", a, m)
                }
                if (!/^[\d-]/.test(i)) {
                    var n = g(a);
                    if (n && n.isSVG && A.Names.SVGAttribute(c))
                        if (/^(height|width)$/i.test(c)) try { i = a.getBBox()[c] } catch (q) { i = 0 } else i = a.getAttribute(c);
                        else i = h(a, A.Names.prefixCheck(c)[0])
                }
                return A.Values.isCSSNullValue(i) && (i = 0), y.debug >= 2 && console.log("Get " + c + ": " + i), i
            },
            setPropertyValue: function(a, c, d, e, f) {
                var h = c;
                if ("scroll" === c) f.container ? f.container["scroll" + f.direction] = d : "Left" === f.direction ? b.scrollTo(d, f.alternateValue) : b.scrollTo(f.alternateValue, d);
                else if (A.Normalizations.registered[c] && "transform" === A.Normalizations.registered[c]("name", a)) A.Normalizations.registered[c]("inject", a, d), h = "transform", d = g(a).transformCache[c];
                else {
                    if (A.Hooks.registered[c]) {
                        var i = c,
                            j = A.Hooks.getRoot(c);
                        e = e || A.getPropertyValue(a, j), d = A.Hooks.injectValue(i, d, e), c = j
                    }
                    if (A.Normalizations.registered[c] && (d = A.Normalizations.registered[c]("inject", a, d), c = A.Normalizations.registered[c]("name", a)), h = A.Names.prefixCheck(c)[0], p <= 8) try { a.style[h] = d } catch (l) { y.debug && console.log("Browser does not support [" + d + "] for [" + h + "]") } else {
                        var k = g(a);
                        k && k.isSVG && A.Names.SVGAttribute(c) ? a.setAttribute(c, d) : a.style[h] = d
                    }
                    y.debug >= 2 && console.log("Set " + c + " (" + h + "): " + d)
                }
                return [h, d]
            },
            flushTransformCache: function(a) {
                var b = "",
                    c = g(a);
                if ((p || y.State.isAndroid && !y.State.isChrome) && c && c.isSVG) {
                    var d = function(b) { return parseFloat(A.getPropertyValue(a, b)) },
                        e = { translate: [d("translateX"), d("translateY")], skewX: [d("skewX")], skewY: [d("skewY")], scale: 1 !== d("scale") ? [d("scale"), d("scale")] : [d("scaleX"), d("scaleY")], rotate: [d("rotateZ"), 0, 0] };
                    o.each(g(a).transformCache, function(a) { /^translate/i.test(a) ? a = "translate" : /^scale/i.test(a) ? a = "scale" : /^rotate/i.test(a) && (a = "rotate"), e[a] && (b += a + "(" + e[a].join(" ") + ") ", delete e[a]) })
                } else {
                    var f, h;
                    o.each(g(a).transformCache, function(c) {
                        if (f = g(a).transformCache[c], "transformPerspective" === c) return h = f, !0;
                        9 === p && "rotateZ" === c && (c = "rotate"), b += c + f + " "
                    }), h && (b = "perspective" + h + " " + b)
                }
                A.setPropertyValue(a, "transform", b)
            }
        };
        A.Hooks.register(), A.Normalizations.register(), y.hook = function(a, b, c) {
            var e;
            return a = f(a), o.each(a, function(a, f) {
                if (g(f) === d && y.init(f), c === d) e === d && (e = A.getPropertyValue(f, b));
                else { var h = A.setPropertyValue(f, b, c); "transform" === h[0] && y.CSS.flushTransformCache(f), e = h }
            }), e
        };
        var B = function() {
            function a() { return k ? z.promise || null : p }

            function e(a, e) {
                function f(f) {
                    var k, n;
                    if (i.begin && 0 === D) try { i.begin.call(r, r) } catch (V) { setTimeout(function() { throw V }, 1) }
                    if ("scroll" === G) {
                        var p, q, w, x = /^x$/i.test(i.axis) ? "Left" : "Top",
                            B = parseFloat(i.offset) || 0;
                        i.container ? u.isWrapped(i.container) || u.isNode(i.container) ? (i.container = i.container[0] || i.container, p = i.container["scroll" + x], w = p + o(a).position()[x.toLowerCase()] + B) : i.container = null : (p = y.State.scrollAnchor[y.State["scrollProperty" + x]], q = y.State.scrollAnchor[y.State["scrollProperty" + ("Left" === x ? "Top" : "Left")]], w = o(a).offset()[x.toLowerCase()] + B), j = { scroll: { rootPropertyValue: !1, startValue: p, currentValue: p, endValue: w, unitType: "", easing: i.easing, scrollData: { container: i.container, direction: x, alternateValue: q } }, element: a }, y.debug && console.log("tweensContainer (scroll): ", j.scroll, a)
                    } else if ("reverse" === G) {
                        if (!(k = g(a))) return;
                        if (!k.tweensContainer) return void o.dequeue(a, i.queue);
                        "none" === k.opts.display && (k.opts.display = "auto"), "hidden" === k.opts.visibility && (k.opts.visibility = "visible"), k.opts.loop = !1, k.opts.begin = null, k.opts.complete = null, v.easing || delete i.easing, v.duration || delete i.duration, i = o.extend({}, k.opts, i), n = o.extend(!0, {}, k ? k.tweensContainer : null);
                        for (var E in n)
                            if (n.hasOwnProperty(E) && "element" !== E) {
                                var F = n[E].startValue;
                                n[E].startValue = n[E].currentValue = n[E].endValue, n[E].endValue = F, u.isEmptyObject(v) || (n[E].easing = i.easing), y.debug && console.log("reverse tweensContainer (" + E + "): " + JSON.stringify(n[E]), a)
                            }
                        j = n
                    } else if ("start" === G) {
                        k = g(a), k && k.tweensContainer && k.isAnimating === !0 && (n = k.tweensContainer);
                        var H = function(e, f) {
                            var g, l = A.Hooks.getRoot(e),
                                m = !1,
                                p = f[0],
                                q = f[1],
                                r = f[2];
                            if (!(k && k.isSVG || "tween" === l || A.Names.prefixCheck(l)[1] !== !1 || A.Normalizations.registered[l] !== d)) return void(y.debug && console.log("Skipping [" + l + "] due to a lack of browser support."));
                            (i.display !== d && null !== i.display && "none" !== i.display || i.visibility !== d && "hidden" !== i.visibility) && /opacity|filter/.test(e) && !r && 0 !== p && (r = 0), i._cacheValues && n && n[e] ? (r === d && (r = n[e].endValue + n[e].unitType), m = k.rootPropertyValueCache[l]) : A.Hooks.registered[e] ? r === d ? (m = A.getPropertyValue(a, l), r = A.getPropertyValue(a, e, m)) : m = A.Hooks.templates[l][1] : r === d && (r = A.getPropertyValue(a, e));
                            var s, t, v, w = !1,
                                x = function(a, b) { var c, d; return d = (b || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(a) { return c = a, "" }), c || (c = A.Values.getUnitType(a)), [d, c] };
                            if (r !== p && u.isString(r) && u.isString(p)) {
                                g = "";
                                var z = 0,
                                    B = 0,
                                    C = [],
                                    D = [],
                                    E = 0,
                                    F = 0,
                                    G = 0;
                                for (r = A.Hooks.fixColors(r), p = A.Hooks.fixColors(p); z < r.length && B < p.length;) {
                                    var H = r[z],
                                        I = p[B];
                                    if (/[\d\.-]/.test(H) && /[\d\.-]/.test(I)) {
                                        for (var J = H, K = I, L = ".", N = "."; ++z < r.length;) {
                                            if ((H = r[z]) === L) L = "..";
                                            else if (!/\d/.test(H)) break;
                                            J += H
                                        }
                                        for (; ++B < p.length;) {
                                            if ((I = p[B]) === N) N = "..";
                                            else if (!/\d/.test(I)) break;
                                            K += I
                                        }
                                        var O = A.Hooks.getUnit(r, z),
                                            P = A.Hooks.getUnit(p, B);
                                        if (z += O.length, B += P.length, O === P) J === K ? g += J + O : (g += "{" + C.length + (F ? "!" : "") + "}" + O, C.push(parseFloat(J)), D.push(parseFloat(K)));
                                        else {
                                            var Q = parseFloat(J),
                                                R = parseFloat(K);
                                            g += (E < 5 ? "calc" : "") + "(" + (Q ? "{" + C.length + (F ? "!" : "") + "}" : "0") + O + " + " + (R ? "{" + (C.length + (Q ? 1 : 0)) + (F ? "!" : "") + "}" : "0") + P + ")", Q && (C.push(Q), D.push(0)), R && (C.push(0), D.push(R))
                                        }
                                    } else {
                                        if (H !== I) { E = 0; break }
                                        g += H, z++, B++, 0 === E && "c" === H || 1 === E && "a" === H || 2 === E && "l" === H || 3 === E && "c" === H || E >= 4 && "(" === H ? E++ : (E && E < 5 || E >= 4 && ")" === H && --E < 5) && (E = 0), 0 === F && "r" === H || 1 === F && "g" === H || 2 === F && "b" === H || 3 === F && "a" === H || F >= 3 && "(" === H ? (3 === F && "a" === H && (G = 1), F++) : G && "," === H ? ++G > 3 && (F = G = 0) : (G && F < (G ? 5 : 4) || F >= (G ? 4 : 3) && ")" === H && --F < (G ? 5 : 4)) && (F = G = 0)
                                    }
                                }
                                z === r.length && B === p.length || (y.debug && console.error('Trying to pattern match mis-matched strings ["' + p + '", "' + r + '"]'), g = d), g && (C.length ? (y.debug && console.log('Pattern found "' + g + '" -> ', C, D, "[" + r + "," + p + "]"), r = C, p = D, t = v = "") : g = d)
                            }
                            g || (s = x(e, r), r = s[0], v = s[1], s = x(e, p), p = s[0].replace(/^([+-\/*])=/, function(a, b) { return w = b, "" }), t = s[1], r = parseFloat(r) || 0, p = parseFloat(p) || 0, "%" === t && (/^(fontSize|lineHeight)$/.test(e) ? (p /= 100, t = "em") : /^scale/.test(e) ? (p /= 100, t = "") : /(Red|Green|Blue)$/i.test(e) && (p = p / 100 * 255, t = "")));
                            if (/[\/*]/.test(w)) t = v;
                            else if (v !== t && 0 !== r)
                                if (0 === p) t = v;
                                else {
                                    h = h || function() {
                                        var d = { myParent: a.parentNode || c.body, position: A.getPropertyValue(a, "position"), fontSize: A.getPropertyValue(a, "fontSize") },
                                            e = d.position === M.lastPosition && d.myParent === M.lastParent,
                                            f = d.fontSize === M.lastFontSize;
                                        M.lastParent = d.myParent, M.lastPosition = d.position, M.lastFontSize = d.fontSize;
                                        var g = {};
                                        if (f && e) g.emToPx = M.lastEmToPx, g.percentToPxWidth = M.lastPercentToPxWidth, g.percentToPxHeight = M.lastPercentToPxHeight;
                                        else {
                                            var h = k && k.isSVG ? c.createElementNS("http://www.w3.org/2000/svg", "rect") : c.createElement("div");
                                            y.init(h), d.myParent.appendChild(h), o.each(["overflow", "overflowX", "overflowY"], function(a, b) { y.CSS.setPropertyValue(h, b, "hidden") }), y.CSS.setPropertyValue(h, "position", d.position), y.CSS.setPropertyValue(h, "fontSize", d.fontSize), y.CSS.setPropertyValue(h, "boxSizing", "content-box"), o.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(a, b) { y.CSS.setPropertyValue(h, b, "100%") }), y.CSS.setPropertyValue(h, "paddingLeft", "100em"), g.percentToPxWidth = M.lastPercentToPxWidth = (parseFloat(A.getPropertyValue(h, "width", null, !0)) || 1) / 100, g.percentToPxHeight = M.lastPercentToPxHeight = (parseFloat(A.getPropertyValue(h, "height", null, !0)) || 1) / 100, g.emToPx = M.lastEmToPx = (parseFloat(A.getPropertyValue(h, "paddingLeft")) || 1) / 100, d.myParent.removeChild(h)
                                        }
                                        return null === M.remToPx && (M.remToPx = parseFloat(A.getPropertyValue(c.body, "fontSize")) || 16), null === M.vwToPx && (M.vwToPx = parseFloat(b.innerWidth) / 100, M.vhToPx = parseFloat(b.innerHeight) / 100), g.remToPx = M.remToPx, g.vwToPx = M.vwToPx, g.vhToPx = M.vhToPx, y.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(g), a), g
                                    }();
                                    var S = /margin|padding|left|right|width|text|word|letter/i.test(e) || /X$/.test(e) || "x" === e ? "x" : "y";
                                    switch (v) {
                                        case "%":
                                            r *= "x" === S ? h.percentToPxWidth : h.percentToPxHeight;
                                            break;
                                        case "px":
                                            break;
                                        default:
                                            r *= h[v + "ToPx"]
                                    }
                                    switch (t) {
                                        case "%":
                                            r *= 1 / ("x" === S ? h.percentToPxWidth : h.percentToPxHeight);
                                            break;
                                        case "px":
                                            break;
                                        default:
                                            r *= 1 / h[t + "ToPx"]
                                    }
                                }
                            switch (w) {
                                case "+":
                                    p = r + p;
                                    break;
                                case "-":
                                    p = r - p;
                                    break;
                                case "*":
                                    p *= r;
                                    break;
                                case "/":
                                    p = r / p
                            }
                            j[e] = { rootPropertyValue: m, startValue: r, currentValue: r, endValue: p, unitType: t, easing: q }, g && (j[e].pattern = g), y.debug && console.log("tweensContainer (" + e + "): " + JSON.stringify(j[e]), a)
                        };
                        for (var I in s)
                            if (s.hasOwnProperty(I)) {
                                var J = A.Names.camelCase(I),
                                    K = function(b, c) { var d, f, g; return u.isFunction(b) && (b = b.call(a, e, C)), u.isArray(b) ? (d = b[0], !u.isArray(b[1]) && /^[\d-]/.test(b[1]) || u.isFunction(b[1]) || A.RegEx.isHex.test(b[1]) ? g = b[1] : u.isString(b[1]) && !A.RegEx.isHex.test(b[1]) && y.Easings[b[1]] || u.isArray(b[1]) ? (f = c ? b[1] : l(b[1], i.duration), g = b[2]) : g = b[1] || b[2]) : d = b, c || (f = f || i.easing), u.isFunction(d) && (d = d.call(a, e, C)), u.isFunction(g) && (g = g.call(a, e, C)), [d || 0, f, g] }(s[I]);
                                if (t(A.Lists.colors, J)) {
                                    var L = K[0],
                                        O = K[1],
                                        P = K[2];
                                    if (A.RegEx.isHex.test(L)) {
                                        for (var Q = ["Red", "Green", "Blue"], R = A.Values.hexToRgb(L), S = P ? A.Values.hexToRgb(P) : d, T = 0; T < Q.length; T++) {
                                            var U = [R[T]];
                                            O && U.push(O), S !== d && U.push(S[T]), H(J + Q[T], U)
                                        }
                                        continue
                                    }
                                }
                                H(J, K)
                            }
                        j.element = a
                    }
                    j.element && (A.Values.addClass(a, "velocity-animating"), N.push(j), k = g(a), k && ("" === i.queue && (k.tweensContainer = j, k.opts = i), k.isAnimating = !0), D === C - 1 ? (y.State.calls.push([N, r, i, null, z.resolver, null, 0]), y.State.isTicking === !1 && (y.State.isTicking = !0, m())) : D++)
                }
                var h, i = o.extend({}, y.defaults, v),
                    j = {};
                switch (g(a) === d && y.init(a), parseFloat(i.delay) && i.queue !== !1 && o.queue(a, i.queue, function(b) {
                    y.velocityQueueEntryFlag = !0;
                    var c = y.State.delayedElements.count++;
                    y.State.delayedElements[c] = a;
                    var d = function(a) { return function() { y.State.delayedElements[a] = !1, b() } }(c);
                    g(a).delayBegin = (new Date).getTime(), g(a).delay = parseFloat(i.delay), g(a).delayTimer = { setTimeout: setTimeout(b, parseFloat(i.delay)), next: d }
                }), i.duration.toString().toLowerCase()) {
                    case "fast":
                        i.duration = 200;
                        break;
                    case "normal":
                        i.duration = w;
                        break;
                    case "slow":
                        i.duration = 600;
                        break;
                    default:
                        i.duration = parseFloat(i.duration) || 1
                }
                if (y.mock !== !1 && (y.mock === !0 ? i.duration = i.delay = 1 : (i.duration *= parseFloat(y.mock) || 1, i.delay *= parseFloat(y.mock) || 1)), i.easing = l(i.easing, i.duration), i.begin && !u.isFunction(i.begin) && (i.begin = null), i.progress && !u.isFunction(i.progress) && (i.progress = null), i.complete && !u.isFunction(i.complete) && (i.complete = null), i.display !== d && null !== i.display && (i.display = i.display.toString().toLowerCase(), "auto" === i.display && (i.display = y.CSS.Values.getDisplayType(a))), i.visibility !== d && null !== i.visibility && (i.visibility = i.visibility.toString().toLowerCase()), i.mobileHA = i.mobileHA && y.State.isMobile && !y.State.isGingerbread, i.queue === !1)
                    if (i.delay) {
                        var k = y.State.delayedElements.count++;
                        y.State.delayedElements[k] = a;
                        var n = function(a) { return function() { y.State.delayedElements[a] = !1, f() } }(k);
                        g(a).delayBegin = (new Date).getTime(), g(a).delay = parseFloat(i.delay), g(a).delayTimer = { setTimeout: setTimeout(f, parseFloat(i.delay)), next: n }
                    } else f();
                else o.queue(a, i.queue, function(a, b) {
                    if (b === !0) return z.promise && z.resolver(r), !0;
                    y.velocityQueueEntryFlag = !0, f(a)
                });
                "" !== i.queue && "fx" !== i.queue || "inprogress" === o.queue(a)[0] || o.dequeue(a)
            }
            var j, k, p, q, r, s, v, x = arguments[0] && (arguments[0].p || o.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || u.isString(arguments[0].properties));
            u.isWrapped(this) ? (k = !1, q = 0, r = this, p = this) : (k = !0, q = 1, r = x ? arguments[0].elements || arguments[0].e : arguments[0]);
            var z = { promise: null, resolver: null, rejecter: null };
            if (k && y.Promise && (z.promise = new y.Promise(function(a, b) { z.resolver = a, z.rejecter = b })), x ? (s = arguments[0].properties || arguments[0].p, v = arguments[0].options || arguments[0].o) : (s = arguments[q], v = arguments[q + 1]), !(r = f(r))) return void(z.promise && (s && v && v.promiseRejectEmpty === !1 ? z.resolver() : z.rejecter()));
            var C = r.length,
                D = 0;
            if (!/^(stop|finish|finishAll|pause|resume)$/i.test(s) && !o.isPlainObject(v)) {
                var E = q + 1;
                v = {};
                for (var F = E; F < arguments.length; F++) u.isArray(arguments[F]) || !/^(fast|normal|slow)$/i.test(arguments[F]) && !/^\d/.test(arguments[F]) ? u.isString(arguments[F]) || u.isArray(arguments[F]) ? v.easing = arguments[F] : u.isFunction(arguments[F]) && (v.complete = arguments[F]) : v.duration = arguments[F]
            }
            var G;
            switch (s) {
                case "scroll":
                    G = "scroll";
                    break;
                case "reverse":
                    G = "reverse";
                    break;
                case "pause":
                    var H = (new Date).getTime();
                    return o.each(r, function(a, b) { h(b, H) }), o.each(y.State.calls, function(a, b) {
                        var c = !1;
                        b && o.each(b[1], function(a, e) { var f = v === d ? "" : v; return f !== !0 && b[2].queue !== f && (v !== d || b[2].queue !== !1) || (o.each(r, function(a, d) { if (d === e) return b[5] = { resume: !1 }, c = !0, !1 }), !c && void 0) })
                    }), a();
                case "resume":
                    return o.each(r, function(a, b) { i(b, H) }), o.each(y.State.calls, function(a, b) {
                        var c = !1;
                        b && o.each(b[1], function(a, e) { var f = v === d ? "" : v; return f !== !0 && b[2].queue !== f && (v !== d || b[2].queue !== !1) || (!b[5] || (o.each(r, function(a, d) { if (d === e) return b[5].resume = !0, c = !0, !1 }), !c && void 0)) })
                    }), a();
                case "finish":
                case "finishAll":
                case "stop":
                    o.each(r, function(a, b) { g(b) && g(b).delayTimer && (clearTimeout(g(b).delayTimer.setTimeout), g(b).delayTimer.next && g(b).delayTimer.next(), delete g(b).delayTimer), "finishAll" !== s || v !== !0 && !u.isString(v) || (o.each(o.queue(b, u.isString(v) ? v : ""), function(a, b) { u.isFunction(b) && b() }), o.queue(b, u.isString(v) ? v : "", [])) });
                    var I = [];
                    return o.each(y.State.calls, function(a, b) {
                        b && o.each(b[1], function(c, e) {
                            var f = v === d ? "" : v;
                            if (f !== !0 && b[2].queue !== f && (v !== d || b[2].queue !== !1)) return !0;
                            o.each(r, function(c, d) {
                                if (d === e)
                                    if ((v === !0 || u.isString(v)) && (o.each(o.queue(d, u.isString(v) ? v : ""), function(a, b) { u.isFunction(b) && b(null, !0) }), o.queue(d, u.isString(v) ? v : "", [])), "stop" === s) {
                                        var h = g(d);
                                        h && h.tweensContainer && f !== !1 && o.each(h.tweensContainer, function(a, b) { b.endValue = b.currentValue }), I.push(a)
                                    } else "finish" !== s && "finishAll" !== s || (b[2].duration = 1)
                            })
                        })
                    }), "stop" === s && (o.each(I, function(a, b) { n(b, !0) }), z.promise && z.resolver(r)), a();
                default:
                    if (!o.isPlainObject(s) || u.isEmptyObject(s)) {
                        if (u.isString(s) && y.Redirects[s]) {
                            j = o.extend({}, v);
                            var J = j.duration,
                                K = j.delay || 0;
                            return j.backwards === !0 && (r = o.extend(!0, [], r).reverse()), o.each(r, function(a, b) { parseFloat(j.stagger) ? j.delay = K + parseFloat(j.stagger) * a : u.isFunction(j.stagger) && (j.delay = K + j.stagger.call(b, a, C)), j.drag && (j.duration = parseFloat(J) || (/^(callout|transition)/.test(s) ? 1e3 : w), j.duration = Math.max(j.duration * (j.backwards ? 1 - a / C : (a + 1) / C), .75 * j.duration, 200)), y.Redirects[s].call(b, b, j || {}, a, C, r, z.promise ? z : d) }), a()
                        }
                        var L = "Velocity: First argument (" + s + ") was not a property map, a known action, or a registered redirect. Aborting.";
                        return z.promise ? z.rejecter(new Error(L)) : b.console && console.log(L), a()
                    }
                    G = "start"
            }
            var M = { lastParent: null, lastPosition: null, lastFontSize: null, lastPercentToPxWidth: null, lastPercentToPxHeight: null, lastEmToPx: null, remToPx: null, vwToPx: null, vhToPx: null },
                N = [];
            o.each(r, function(a, b) { u.isNode(b) && e(b, a) }), j = o.extend({}, y.defaults, v), j.loop = parseInt(j.loop, 10);
            var O = 2 * j.loop - 1;
            if (j.loop)
                for (var P = 0; P < O; P++) {
                    var Q = { delay: j.delay, progress: j.progress };
                    P === O - 1 && (Q.display = j.display, Q.visibility = j.visibility, Q.complete = j.complete), B(r, "reverse", Q)
                }
            return a()
        };
        y = o.extend(B, y), y.animate = B;
        var C = b.requestAnimationFrame || q;
        if (!y.State.isMobile && c.hidden !== d) {
            var D = function() { c.hidden ? (C = function(a) { return setTimeout(function() { a(!0) }, 16) }, m()) : C = b.requestAnimationFrame || q };
            D(), c.addEventListener("visibilitychange", D)
        }
        return a.Velocity = y, a !== b && (a.fn.velocity = B, a.fn.velocity.defaults = y.defaults), o.each(["Down", "Up"], function(a, b) {
            y.Redirects["slide" + b] = function(a, c, e, f, g, h) {
                var i = o.extend({}, c),
                    j = i.begin,
                    k = i.complete,
                    l = {},
                    m = { height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: "" };
                i.display === d && (i.display = "Down" === b ? "inline" === y.CSS.Values.getDisplayType(a) ? "inline-block" : "block" : "none"), i.begin = function() {
                    0 === e && j && j.call(g, g);
                    for (var c in m)
                        if (m.hasOwnProperty(c)) {
                            l[c] = a.style[c];
                            var d = A.getPropertyValue(a, c);
                            m[c] = "Down" === b ? [d, 0] : [0, d]
                        }
                    l.overflow = a.style.overflow, a.style.overflow = "hidden"
                }, i.complete = function() {
                    for (var b in l) l.hasOwnProperty(b) && (a.style[b] = l[b]);
                    e === f - 1 && (k && k.call(g, g), h && h.resolver(g))
                }, y(a, m, i)
            }
        }), o.each(["In", "Out"], function(a, b) {
            y.Redirects["fade" + b] = function(a, c, e, f, g, h) {
                var i = o.extend({}, c),
                    j = i.complete,
                    k = { opacity: "In" === b ? 1 : 0 };
                0 !== e && (i.begin = null), i.complete = e !== f - 1 ? null : function() { j && j.call(g, g), h && h.resolver(g) }, i.display === d && (i.display = "In" === b ? "auto" : "none"), y(this, k, i)
            }
        }), y
    }(window.jQuery || window.Zepto || window, window, window ? window.document : undefined)
});


/*! iCheck v1.0.2 by Damir Sultanov, http://git.io/arlzeA, MIT Licensed */
(function(f) {
    function A(a, b, d) {
        var c = a[0],
            g = /er/.test(d) ? _indeterminate : /bl/.test(d) ? n : k,
            e = d == _update ? { checked: c[k], disabled: c[n], indeterminate: "true" == a.attr(_indeterminate) || "false" == a.attr(_determinate) } : c[g];
        if (/^(ch|di|in)/.test(d) && !e) x(a, g);
        else if (/^(un|en|de)/.test(d) && e) q(a, g);
        else if (d == _update)
            for (var f in e) e[f] ? x(a, f, !0) : q(a, f, !0);
        else if (!b || "toggle" == d) {
            if (!b) a[_callback]("ifClicked");
            e ? c[_type] !== r && q(a, g) : x(a, g)
        }
    }

    function x(a, b, d) {
        var c = a[0],
            g = a.parent(),
            e = b == k,
            u = b == _indeterminate,
            v = b == n,
            s = u ? _determinate : e ? y : "enabled",
            F = l(a, s + t(c[_type])),
            B = l(a, b + t(c[_type]));
        if (!0 !== c[b]) {
            if (!d && b == k && c[_type] == r && c.name) {
                var w = a.closest("form"),
                    p = 'input[name="' + c.name + '"]',
                    p = w.length ? w.find(p) : f(p);
                p.each(function() { this !== c && f(this).data(m) && q(f(this), b) })
            }
            u ? (c[b] = !0, c[k] && q(a, k, "force")) : (d || (c[b] = !0), e && c[_indeterminate] && q(a, _indeterminate, !1));
            D(a, e, b, d)
        }
        c[n] && l(a, _cursor, !0) && g.find("." + C).css(_cursor, "default");
        g[_add](B || l(a, b) || "");
        g.attr("role") && !u && g.attr("aria-" + (v ? n : k), "true");
        g[_remove](F || l(a, s) || "")
    }

    function q(a, b, d) {
        var c = a[0],
            g = a.parent(),
            e = b == k,
            f = b == _indeterminate,
            m = b == n,
            s = f ? _determinate : e ? y : "enabled",
            q = l(a, s + t(c[_type])),
            r = l(a, b + t(c[_type]));
        if (!1 !== c[b]) {
            if (f || !d || "force" == d) c[b] = !1;
            D(a, e, s, d)
        }!c[n] && l(a, _cursor, !0) && g.find("." + C).css(_cursor, "pointer");
        g[_remove](r || l(a, b) || "");
        g.attr("role") && !f && g.attr("aria-" + (m ? n : k), "false");
        g[_add](q || l(a, s) || "")
    }

    function E(a, b) {
        if (a.data(m)) {
            a.parent().html(a.attr("style", a.data(m).s || ""));
            if (b) a[_callback](b);
            a.off(".i").unwrap();
            f(_label + '[for="' + a[0].id + '"]').add(a.closest(_label)).off(".i")
        }
    }

    function l(a, b, f) { if (a.data(m)) return a.data(m).o[b + (f ? "" : "Class")] }

    function t(a) { return a.charAt(0).toUpperCase() + a.slice(1) }

    function D(a, b, f, c) {
        if (!c) {
            if (b) a[_callback]("ifToggled");
            a[_callback]("ifChanged")[_callback]("if" + t(f))
        }
    }
    var m = "iCheck",
        C = m + "-helper",
        r = "radio",
        k = "checked",
        y = "un" + k,
        n = "disabled";
    _determinate = "determinate";
    _indeterminate = "in" + _determinate;
    _update = "update";
    _type = "type";
    _click = "click";
    _touch = "touchbegin.i touchend.i";
    _add = "addClass";
    _remove = "removeClass";
    _callback = "trigger";
    _label = "label";
    _cursor = "cursor";
    _mobile = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);
    f.fn[m] = function(a, b) {
        var d = 'input[type="checkbox"], input[type="' + r + '"]',
            c = f(),
            g = function(a) {
                a.each(function() {
                    var a = f(this);
                    c = a.is(d) ? c.add(a) : c.add(a.find(d))
                })
            };
        if (/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(a)) return a = a.toLowerCase(), g(this), c.each(function() {
            var c =
                f(this);
            "destroy" == a ? E(c, "ifDestroyed") : A(c, !0, a);
            f.isFunction(b) && b()
        });
        if ("object" != typeof a && a) return this;
        var e = f.extend({ checkedClass: k, disabledClass: n, indeterminateClass: _indeterminate, labelHover: !0 }, a),
            l = e.handle,
            v = e.hoverClass || "hover",
            s = e.focusClass || "focus",
            t = e.activeClass || "active",
            B = !!e.labelHover,
            w = e.labelHoverClass || "hover",
            p = ("" + e.increaseArea).replace("%", "") | 0;
        if ("checkbox" == l || l == r) d = 'input[type="' + l + '"]'; - 50 > p && (p = -50);
        g(this);
        return c.each(function() {
            var a = f(this);
            E(a);
            var c = this,
                b = c.id,
                g = -p + "%",
                d = 100 + 2 * p + "%",
                d = { position: "absolute", top: g, left: g, display: "block", width: d, height: d, margin: 0, padding: 0, background: "#fff", border: 0, opacity: 0 },
                g = _mobile ? { position: "absolute", visibility: "hidden" } : p ? d : { position: "absolute", opacity: 0 },
                l = "checkbox" == c[_type] ? e.checkboxClass || "icheckbox" : e.radioClass || "i" + r,
                z = f(_label + '[for="' + b + '"]').add(a.closest(_label)),
                u = !!e.aria,
                y = m + "-" + Math.random().toString(36).substr(2, 6),
                h = '<div class="' + l + '" ' + (u ? 'role="' + c[_type] + '" ' : "");
            u && z.each(function() {
                h +=
                    'aria-labelledby="';
                this.id ? h += this.id : (this.id = y, h += y);
                h += '"'
            });
            h = a.wrap(h + "/>")[_callback]("ifCreated").parent().append(e.insert);
            d = f('<ins class="' + C + '"/>').css(d).appendTo(h);
            a.data(m, { o: e, s: a.attr("style") }).css(g);
            e.inheritClass && h[_add](c.className || "");
            e.inheritID && b && h.attr("id", m + "-" + b);
            "static" == h.css("position") && h.css("position", "relative");
            A(a, !0, _update);
            if (z.length) z.on(_click + ".i mouseover.i mouseout.i " + _touch, function(b) {
                var d = b[_type],
                    e = f(this);
                if (!c[n]) {
                    if (d == _click) {
                        if (f(b.target).is("a")) return;
                        A(a, !1, !0)
                    } else B && (/ut|nd/.test(d) ? (h[_remove](v), e[_remove](w)) : (h[_add](v), e[_add](w)));
                    if (_mobile) b.stopPropagation();
                    else return !1
                }
            });
            a.on(_click + ".i focus.i blur.i keyup.i keydown.i keypress.i", function(b) {
                var d = b[_type];
                b = b.keyCode;
                if (d == _click) return !1;
                if ("keydown" == d && 32 == b) return c[_type] == r && c[k] || (c[k] ? q(a, k) : x(a, k)), !1;
                if ("keyup" == d && c[_type] == r) !c[k] && x(a, k);
                else if (/us|ur/.test(d)) h["blur" == d ? _remove : _add](s)
            });
            d.on(_click + " mousedown mouseup mouseover mouseout " + _touch, function(b) {
                var d =
                    b[_type],
                    e = /wn|up/.test(d) ? t : v;
                if (!c[n]) {
                    if (d == _click) A(a, !1, !0);
                    else {
                        if (/wn|er|in/.test(d)) h[_add](e);
                        else h[_remove](e + " " + t);
                        if (z.length && B && e == v) z[/ut|nd/.test(d) ? _remove : _add](w)
                    }
                    if (_mobile) b.stopPropagation();
                    else return !1
                }
            })
        })
    }
})(window.jQuery || window.Zepto);


$(function() {
    // 底部更多菜单
    $(".tabbar_more").click(function() {
        if ($(this).hasClass("active")) {
            $(".tabbarmore").velocity("reverse");
            $(".tabbar_more span").velocity("reverse");
            $(".curtain").velocity("reverse");
            $(this).removeClass("active");
        } else {
            $(".curtain").velocity("fadeIn", { duration: 300 })
            $(".tabbar_more span").velocity({ rotateZ: "45deg" }, { duration: 300 });
            $(".tabbarmore").velocity({ bottom: 70 }, { duration: 300 });
            $(this).addClass("active");
        }
    });
    // 说说 图片初始化
    $.each($(".centerimg"), function(n, v) {
        if ($(v).find("a").length == 2) {
            $(v).addClass("twoimg");
        } else if ($(v).find("a").length > 2) {
            $(v).addClass("moreimg");
        }
    });
    $.each($(".centerimg a"), function(n, v) {
        $(v).css("height", $(v).width());
    });

    // 点击搜索框
    $(".search input").click(function() {
        if ($(".search").hasClass("active")) { return }
        $(".search div").css("width", $(window).width() - 70 + "px");
        var curtain = "<div id='curtain' style='z-index:2;position:absolute;top:0;right:0;bottom:0;left:0;background:#fff;'></div>";
        $("body").append(curtain);
        toggleClass([{ e: ".search .icon-cuo", c: "hide" }, { e: ".searchlist", c: "hide" }, { e: ".search", c: "active" }, { e: ".search span", c: "hide" }]);
    });
    // 清空输入
    $(".search .icon-cuo").click(function() {
        $(".search input").val("");
    });
    // 取消搜索
    $(".search span").click(function() {
        $(".search div").css("width", "100%");
        $("#curtain").remove();
        toggleClass([{ e: ".search .icon-cuo", c: "hide" }, { e: ".searchlist", c: "hide" }, { e: ".search", c: "active" }, { e: ".search span", c: "hide" }]);
    });

    //输入搜索
    $(".search input").keyup(function() { selsearch(); });

    // 选择 找人 分享 群组 学校 班级
    $(".searchhead li").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
        selsearch();
    });

    $(".navhader .dcnav.disable").click(function() {
        return false;
    });

});

var Option = { Seach_H: $(window).height() - 100 }
var opt = { c: '', str: '' };

function selsearch() {
    $(".searchheaditem").remove();
    if ($(".search input").val().trim() == "") { return; }
    // ajax 判断是否有数据 

    if (false) {
        $(".searchlist").append("<div class='noserch searchheaditem'><span style=\"background-image:url(/img/nonefile.png)\"></span><p>抱歉！没有找到与“" + $(".search input").val().trim() + "”相关分享你可以尝试更换关键词搜索</p></div>");
        return;
    }

    switch ($(".searchhead li.active").data("id")) {
        case 1:
            opt["c"] = 'list';
            opt["str"] = "<li><div class='user_info'><div><img src='item/item1.jpg'></div><p>中文字体</p><span>2分钟前<i>发表说说</i></span></div><div class='center'>          <p>WeUI 是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一</p></div><ul class='met'><li><i class='icon iconfont icon-sc'></i>24</li><li><i class='icon iconfont icon-pl'></i>24</li><li><i class='icon iconfont icon-link'></i>24</li></ul></li>";
            break;
        case 2:
            opt['c'] = 'grouplist';
            opt['str'] = "<li><div class='user_info'><div><img src='item/item1.jpg'></div><p>Ayo</p><span>这个人很帅，什么都没有留下</span></div></li>";
            break;
        case 3:
        case 4:
        case 5:
            opt['c'] = 'grouplist';
            opt['str'] = "<li><div class='user_info'><div><img src='item/item1.jpg'></div><p>Ayo</p><span>成员数：30<i>分享数：30</i></span></div></li>";
            break;
    }
    $(".searchlist").append("<ul class='searchheaditem " + opt.c + "'>" + opt.str + "</ul>");
    $(".searchheaditem").css("height", Option.Seach_H);
}

function toggleClass(obj) { $.each(obj, function(n, v) { $(v.e).toggleClass(v.c); }); }