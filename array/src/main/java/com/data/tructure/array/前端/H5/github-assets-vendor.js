System.register([], (function (t) {
    "use strict";
    return {
        execute: function () {
            t({
                S: B, a: function () {
                    var t;
                    return (t = Ut()).observe.apply(t, arguments)
                }, b: function (t, n, i) {
                    const s = i || HTMLElement, r = t.querySelector(n);
                    if (r instanceof s) return r;
                    throw new e(`Element not found: <${s.name}> ${n}`)
                }, c: function (t, n, i) {
                    const s = i || HTMLElement, r = t.closest(n);
                    if (r instanceof s) return r;
                    throw new e(`Element not found: <${s.name}> ${n}`)
                }, d: N, f: function (t, e, n) {
                    return t.dispatchEvent(new CustomEvent(e, {bubbles: !0, cancelable: !0, detail: n}))
                }
                /**
                 * @license
                 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
                 * This code may only be used under the BSD style license found at
                 * http://polymer.github.io/LICENSE.txt
                 * The complete set of authors may be found at
                 * http://polymer.github.io/AUTHORS.txt
                 * The complete set of contributors may be found at
                 * http://polymer.github.io/CONTRIBUTORS.txt
                 * Code distributed by Google as part of the polymer project is also
                 * subject to an additional IP rights grant found at
                 * http://polymer.github.io/PATENTS.txt
                 */, g: function (t, n) {
                    const i = t.getAttribute(n);
                    if (null != i) return i;
                    throw new e(`Attribute not found on element: ${n}`)
                }
                /**
                 * @license
                 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
                 * This code may only be used under the BSD style license found at
                 * http://polymer.github.io/LICENSE.txt
                 * The complete set of authors may be found at
                 * http://polymer.github.io/AUTHORS.txt
                 * The complete set of contributors may be found at
                 * http://polymer.github.io/CONTRIBUTORS.txt
                 * Code distributed by Google as part of the polymer project is also
                 * subject to an additional IP rights grant found at
                 * http://polymer.github.io/PATENTS.txt
                 */, k: function (t = 0, e = {}) {
                    return (n, i, s) => {
                        if (!s || "function" != typeof s.value) throw new Error("debounce can only decorate functions");
                        const r = s.value;
                        s.value = N(r, t, e), Object.defineProperty(n, i, s)
                    }
                }, n: function (t, n, i) {
                    const s = i || HTMLInputElement, r = t.elements.namedItem(n);
                    if (r instanceof s) return r;
                    throw new e(`Element not found by name: <${s.name}> ${n}`)
                }, o: function (t, e, n) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, s = !!i.capture,
                        r = s ? z : Y, o = r[t];
                    o || (o = new B, r[t] = o, document.addEventListener(t, st, s));
                    o.add(e, n)
                }, q: function (t, e, n) {
                    const i = n || HTMLElement, s = [];
                    for (const r of t.querySelectorAll(e)) r instanceof i && s.push(r);
                    return s
                }, t: q
            });

            class e extends Error {
                constructor(t) {
                    super(t), this.name = "QueryError", this.framesToPop = 1
                }
            }

            const n = new WeakMap, i = t => "function" == typeof t && n.has(t),
                s = void 0 !== window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback,
                r = (t, e, n = null) => {
                    for (; e !== n;) {
                        const n = e.nextSibling;
                        t.removeChild(e), e = n
                    }
                }, o = {}, a = {}, c = `{{lit-${String(Math.random()).slice(2)}}}`, l = `\x3c!--${c}--\x3e`,
                u = new RegExp(`${c}|${l}`);

            class d {
                constructor(t, e) {
                    this.parts = [], this.element = e;
                    const n = [], i = [], s = document.createTreeWalker(e.content, 133, null, !1);
                    let r = 0, o = -1, a = 0;
                    const {strings: l, values: {length: d}} = t;
                    for (; a < d;) {
                        const t = s.nextNode();
                        if (null !== t) {
                            if (o++, 1 === t.nodeType) {
                                if (t.hasAttributes()) {
                                    const e = t.attributes, {length: n} = e;
                                    let i = 0;
                                    for (let t = 0; t < n; t++) h(e[t].name, "$lit$") && i++;
                                    for (; i-- > 0;) {
                                        const e = l[a], n = p.exec(e)[2], i = n.toLowerCase() + "$lit$",
                                            s = t.getAttribute(i);
                                        t.removeAttribute(i);
                                        const r = s.split(u);
                                        this.parts.push({
                                            type: "attribute",
                                            index: o,
                                            name: n,
                                            strings: r
                                        }), a += r.length - 1
                                    }
                                }
                                "TEMPLATE" === t.tagName && (i.push(t), s.currentNode = t.content)
                            } else if (3 === t.nodeType) {
                                const e = t.data;
                                if (e.indexOf(c) >= 0) {
                                    const i = t.parentNode, s = e.split(u), r = s.length - 1;
                                    for (let e = 0; e < r; e++) {
                                        let n, r = s[e];
                                        if ("" === r) n = f(); else {
                                            const t = p.exec(r);
                                            null !== t && h(t[2], "$lit$") && (r = r.slice(0, t.index) + t[1] + t[2].slice(0, -"$lit$".length) + t[3]), n = document.createTextNode(r)
                                        }
                                        i.insertBefore(n, t), this.parts.push({type: "node", index: ++o})
                                    }
                                    "" === s[r] ? (i.insertBefore(f(), t), n.push(t)) : t.data = s[r], a += r
                                }
                            } else if (8 === t.nodeType) if (t.data === c) {
                                const e = t.parentNode;
                                null !== t.previousSibling && o !== r || (o++, e.insertBefore(f(), t)), r = o, this.parts.push({
                                    type: "node",
                                    index: o
                                }), null === t.nextSibling ? t.data = "" : (n.push(t), o--), a++
                            } else {
                                let e = -1;
                                for (; -1 !== (e = t.data.indexOf(c, e + 1));) this.parts.push({
                                    type: "node",
                                    index: -1
                                }), a++
                            }
                        } else s.currentNode = i.pop()
                    }
                    for (const c of n) c.parentNode.removeChild(c)
                }
            }

            const h = (t, e) => {
                    const n = t.length - e.length;
                    return n >= 0 && t.slice(n) === e
                }, m = t => -1 !== t.index, f = () => document.createComment(""),
                p = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;

            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            class g {
                constructor(t, e, n) {
                    this.__parts = [], this.template = t, this.processor = e, this.options = n
                }

                update(t) {
                    let e = 0;
                    for (const n of this.__parts) void 0 !== n && n.setValue(t[e]), e++;
                    for (const n of this.__parts) void 0 !== n && n.commit()
                }

                _clone() {
                    const t = s ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0),
                        e = [], n = this.template.parts, i = document.createTreeWalker(t, 133, null, !1);
                    let r, o = 0, a = 0, c = i.nextNode();
                    for (; o < n.length;) if (r = n[o], m(r)) {
                        for (; a < r.index;) a++, "TEMPLATE" === c.nodeName && (e.push(c), i.currentNode = c.content), null === (c = i.nextNode()) && (i.currentNode = e.pop(), c = i.nextNode());
                        if ("node" === r.type) {
                            const t = this.processor.handleTextExpression(this.options);
                            t.insertAfterNode(c.previousSibling), this.__parts.push(t)
                        } else this.__parts.push(...this.processor.handleAttributeExpressions(c, r.name, r.strings, this.options));
                        o++
                    } else this.__parts.push(void 0), o++;
                    return s && (document.adoptNode(t), customElements.upgrade(t)), t
                }
            }

            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */const v = ` ${c} `;

            class b {
                constructor(t, e, n, i) {
                    this.strings = t, this.values = e, this.type = n, this.processor = i
                }

                getHTML() {
                    const t = this.strings.length - 1;
                    let e = "", n = !1;
                    for (let i = 0; i < t; i++) {
                        const t = this.strings[i], s = t.lastIndexOf("\x3c!--");
                        n = (s > -1 || n) && -1 === t.indexOf("--\x3e", s + 1);
                        const r = p.exec(t);
                        e += null === r ? t + (n ? v : l) : t.substr(0, r.index) + r[1] + r[2] + "$lit$" + r[3] + c
                    }
                    return e += this.strings[t], e
                }

                getTemplateElement() {
                    const t = document.createElement("template");
                    return t.innerHTML = this.getHTML(), t
                }
            }

            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */const E = t => null === t || !("object" == typeof t || "function" == typeof t),
                w = t => Array.isArray(t) || !(!t || !t[Symbol.iterator]);

            class y {
                constructor(t, e, n) {
                    this.dirty = !0, this.element = t, this.name = e, this.strings = n, this.parts = [];
                    for (let i = 0; i < n.length - 1; i++) this.parts[i] = this._createPart()
                }

                _createPart() {
                    return new x(this)
                }

                _getValue() {
                    const t = this.strings, e = t.length - 1;
                    let n = "";
                    for (let i = 0; i < e; i++) {
                        n += t[i];
                        const e = this.parts[i];
                        if (void 0 !== e) {
                            const t = e.value;
                            if (E(t) || !w(t)) n += "string" == typeof t ? t : String(t); else for (const e of t) n += "string" == typeof e ? e : String(e)
                        }
                    }
                    return n += t[e], n
                }

                commit() {
                    this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()))
                }
            }

            class x {
                constructor(t) {
                    this.value = void 0, this.committer = t
                }

                setValue(t) {
                    t === o || E(t) && t === this.value || (this.value = t, i(t) || (this.committer.dirty = !0))
                }

                commit() {
                    for (; i(this.value);) {
                        const t = this.value;
                        this.value = o, t(this)
                    }
                    this.value !== o && this.committer.commit()
                }
            }

            class A {
                constructor(t) {
                    this.value = void 0, this.__pendingValue = void 0, this.options = t
                }

                appendInto(t) {
                    this.startNode = t.appendChild(f()), this.endNode = t.appendChild(f())
                }

                insertAfterNode(t) {
                    this.startNode = t, this.endNode = t.nextSibling
                }

                appendIntoPart(t) {
                    t.__insert(this.startNode = f()), t.__insert(this.endNode = f())
                }

                insertAfterPart(t) {
                    t.__insert(this.startNode = f()), this.endNode = t.endNode, t.endNode = this.startNode
                }

                setValue(t) {
                    this.__pendingValue = t
                }

                commit() {
                    for (; i(this.__pendingValue);) {
                        const t = this.__pendingValue;
                        this.__pendingValue = o, t(this)
                    }
                    const t = this.__pendingValue;
                    t !== o && (E(t) ? t !== this.value && this.__commitText(t) : t instanceof b ? this.__commitTemplateResult(t) : t instanceof Node ? this.__commitNode(t) : w(t) ? this.__commitIterable(t) : t === a ? (this.value = a, this.clear()) : this.__commitText(t))
                }

                __insert(t) {
                    this.endNode.parentNode.insertBefore(t, this.endNode)
                }

                __commitNode(t) {
                    this.value !== t && (this.clear(), this.__insert(t), this.value = t)
                }

                __commitText(t) {
                    const e = this.startNode.nextSibling,
                        n = "string" == typeof (t = null == t ? "" : t) ? t : String(t);
                    e === this.endNode.previousSibling && 3 === e.nodeType ? e.data = n : this.__commitNode(document.createTextNode(n)), this.value = t
                }

                __commitTemplateResult(t) {
                    const e = this.options.templateFactory(t);
                    if (this.value instanceof g && this.value.template === e) this.value.update(t.values); else {
                        const n = new g(e, t.processor, this.options), i = n._clone();
                        n.update(t.values), this.__commitNode(i), this.value = n
                    }
                }

                __commitIterable(t) {
                    Array.isArray(this.value) || (this.value = [], this.clear());
                    const e = this.value;
                    let n, i = 0;
                    for (const s of t) n = e[i], void 0 === n && (n = new A(this.options), e.push(n), 0 === i ? n.appendIntoPart(this) : n.insertAfterPart(e[i - 1])), n.setValue(s), n.commit(), i++;
                    i < e.length && (e.length = i, this.clear(n && n.endNode))
                }

                clear(t = this.startNode) {
                    r(this.startNode.parentNode, t.nextSibling, this.endNode)
                }
            }

            class k {
                constructor(t, e, n) {
                    if (this.value = void 0, this.__pendingValue = void 0, 2 !== n.length || "" !== n[0] || "" !== n[1]) throw new Error("Boolean attributes can only contain a single expression");
                    this.element = t, this.name = e, this.strings = n
                }

                setValue(t) {
                    this.__pendingValue = t
                }

                commit() {
                    for (; i(this.__pendingValue);) {
                        const t = this.__pendingValue;
                        this.__pendingValue = o, t(this)
                    }
                    if (this.__pendingValue === o) return;
                    const t = !!this.__pendingValue;
                    this.value !== t && (t ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = t), this.__pendingValue = o
                }
            }

            class T extends y {
                constructor(t, e, n) {
                    super(t, e, n), this.single = 2 === n.length && "" === n[0] && "" === n[1]
                }

                _createPart() {
                    return new M(this)
                }

                _getValue() {
                    return this.single ? this.parts[0].value : super._getValue()
                }

                commit() {
                    this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue())
                }
            }

            class M extends x {
            }

            let L = !1;
            try {
                const t = {
                    get capture() {
                        return L = !0, !1
                    }
                };
                window.addEventListener("test", t, t), window.removeEventListener("test", t, t)
            } catch (Fi) {
            }

            class C {
                constructor(t, e, n) {
                    this.value = void 0, this.__pendingValue = void 0, this.element = t, this.eventName = e, this.eventContext = n, this.__boundHandleEvent = t => this.handleEvent(t)
                }

                setValue(t) {
                    this.__pendingValue = t
                }

                commit() {
                    for (; i(this.__pendingValue);) {
                        const t = this.__pendingValue;
                        this.__pendingValue = o, t(this)
                    }
                    if (this.__pendingValue === o) return;
                    const t = this.__pendingValue, e = this.value,
                        n = null == t || null != e && (t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive),
                        s = null != t && (null == e || n);
                    n && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), s && (this.__options = S(t), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = t, this.__pendingValue = o
                }

                handleEvent(t) {
                    "function" == typeof this.value ? this.value.call(this.eventContext || this.element, t) : this.value.handleEvent(t)
                }
            }

            const S = t => t && (L ? {capture: t.capture, passive: t.passive, once: t.once} : t.capture)
                /**
                 * @license
                 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
                 * This code may only be used under the BSD style license found at
                 * http://polymer.github.io/LICENSE.txt
                 * The complete set of authors may be found at
                 * http://polymer.github.io/AUTHORS.txt
                 * The complete set of contributors may be found at
                 * http://polymer.github.io/CONTRIBUTORS.txt
                 * Code distributed by Google as part of the polymer project is also
                 * subject to an additional IP rights grant found at
                 * http://polymer.github.io/PATENTS.txt
                 */;
            const _ = new class {
                handleAttributeExpressions(t, e, n, i) {
                    const s = e[0];
                    if ("." === s) {
                        return new T(t, e.slice(1), n).parts
                    }
                    return "@" === s ? [new C(t, e.slice(1), i.eventContext)] : "?" === s ? [new k(t, e.slice(1), n)] : new y(t, e, n).parts
                }

                handleTextExpression(t) {
                    return new A(t)
                }
            };

            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */function I(t) {
                let e = D.get(t.type);
                void 0 === e && (e = {stringsArray: new WeakMap, keyString: new Map}, D.set(t.type, e));
                let n = e.stringsArray.get(t.strings);
                if (void 0 !== n) return n;
                const i = t.strings.join(c);
                return n = e.keyString.get(i), void 0 === n && (n = new d(t, t.getTemplateElement()), e.keyString.set(i, n)), e.stringsArray.set(t.strings, n), n
            }

            const D = new Map, H = new WeakMap;
            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */t("r", (t, e, n) => {
                let i = H.get(e);
                void 0 === i && (r(e, e.firstChild), H.set(e, i = new A(Object.assign({templateFactory: I}, n))), i.appendInto(e)), i.setValue(t), i.commit()
            });
            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.1.2");
            t("h", (t, ...e) => new b(t, e, "html", _));

            function q(t, e = 0, {start: n = !0, middle: i = !0, once: s = !1} = {}) {
                let r, o = 0, a = !1;

                function c(...l) {
                    if (a) return;
                    const u = Date.now() - o;
                    o = Date.now(), n ? (n = !1, t.apply(this, l), s && c.cancel()) : (i && u < e || !i) && (clearTimeout(r), r = setTimeout(() => {
                        o = Date.now(), t.apply(this, l), s && c.cancel()
                    }, i ? e - u : e))
                }

                return c.cancel = () => {
                    clearTimeout(r), a = !0
                }, c
            }

            function N(t, e = 0, {start: n = !1, middle: i = !1, once: s = !1} = {}) {
                return q(t, e, {start: n, middle: i, once: s})
            }

            function B() {
                if (!(this instanceof B)) return new B;
                this.size = 0, this.uid = 0, this.selectors = [], this.indexes = Object.create(this.indexes), this.activeIndexes = []
            }

            var F = window.document.documentElement,
                P = F.matches || F.webkitMatchesSelector || F.mozMatchesSelector || F.oMatchesSelector || F.msMatchesSelector;
            B.prototype.matchesSelector = function (t, e) {
                return P.call(t, e)
            }, B.prototype.querySelectorAll = function (t, e) {
                return e.querySelectorAll(t)
            }, B.prototype.indexes = [];
            var O = /^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
            B.prototype.indexes.push({
                name: "ID", selector: function (t) {
                    var e;
                    if (e = t.match(O)) return e[0].slice(1)
                }, element: function (t) {
                    if (t.id) return [t.id]
                }
            });
            var R = /^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
            B.prototype.indexes.push({
                name: "CLASS", selector: function (t) {
                    var e;
                    if (e = t.match(R)) return e[0].slice(1)
                }, element: function (t) {
                    var e = t.className;
                    if (e) {
                        if ("string" == typeof e) return e.split(/\s/);
                        if ("object" == typeof e && "baseVal" in e) return e.baseVal.split(/\s/)
                    }
                }
            });
            var W, V = /^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
            B.prototype.indexes.push({
                name: "TAG", selector: function (t) {
                    var e;
                    if (e = t.match(V)) return e[0].toUpperCase()
                }, element: function (t) {
                    return [t.nodeName.toUpperCase()]
                }
            }), B.prototype.indexes.default = {
                name: "UNIVERSAL", selector: function () {
                    return !0
                }, element: function () {
                    return [!0]
                }
            }, W = "function" == typeof window.Map ? window.Map : function () {
                function t() {
                    this.map = {}
                }

                return t.prototype.get = function (t) {
                    return this.map[t + " "]
                }, t.prototype.set = function (t, e) {
                    this.map[t + " "] = e
                }, t
            }();
            var j = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;

            function $(t, e) {
                var n, i, s, r, o, a, c = (t = t.slice(0).concat(t.default)).length, l = e, u = [];
                do {
                    if (j.exec(""), (s = j.exec(l)) && (l = s[3], s[2] || !l)) for (n = 0; n < c; n++) if (o = (a = t[n]).selector(s[1])) {
                        for (i = u.length, r = !1; i--;) if (u[i].index === a && u[i].key === o) {
                            r = !0;
                            break
                        }
                        r || u.push({index: a, key: o});
                        break
                    }
                } while (s);
                return u
            }

            function U(t, e) {
                var n, i, s;
                for (n = 0, i = t.length; n < i; n++) if (s = t[n], e.isPrototypeOf(s)) return s
            }

            function K(t, e) {
                return t.id - e.id
            }

            B.prototype.logDefaultIndexUsed = function () {
            }, B.prototype.add = function (t, e) {
                var n, i, s, r, o, a, c, l, u = this.activeIndexes, d = this.selectors;
                if ("string" == typeof t) {
                    for (n = {
                        id: this.uid++,
                        selector: t,
                        data: e
                    }, c = $(this.indexes, t), i = 0; i < c.length; i++) r = (l = c[i]).key, (o = U(u, s = l.index)) || ((o = Object.create(s)).map = new W, u.push(o)), s === this.indexes.default && this.logDefaultIndexUsed(n), (a = o.map.get(r)) || (a = [], o.map.set(r, a)), a.push(n);
                    this.size++, d.push(t)
                }
            }, B.prototype.remove = function (t, e) {
                if ("string" == typeof t) {
                    var n, i, s, r, o, a, c, l, u = this.activeIndexes, d = {}, h = 1 === arguments.length;
                    for (n = $(this.indexes, t), s = 0; s < n.length; s++) for (i = n[s], r = u.length; r--;) if (a = u[r], i.index.isPrototypeOf(a)) {
                        if (c = a.map.get(i.key)) for (o = c.length; o--;) (l = c[o]).selector !== t || !h && l.data !== e || (c.splice(o, 1), d[l.id] = !0);
                        break
                    }
                    this.size -= Object.keys(d).length
                }
            }, B.prototype.queryAll = function (t) {
                if (!this.selectors.length) return [];
                var e, n, i, s, r, o, a, c, l = {}, u = [], d = this.querySelectorAll(this.selectors.join(", "), t);
                for (e = 0, i = d.length; e < i; e++) for (r = d[e], n = 0, s = (o = this.matches(r)).length; n < s; n++) l[(c = o[n]).id] ? a = l[c.id] : (a = {
                    id: c.id,
                    selector: c.selector,
                    data: c.data,
                    elements: []
                }, l[c.id] = a, u.push(a)), a.elements.push(r);
                return u.sort(K)
            }, B.prototype.matches = function (t) {
                if (!t) return [];
                var e, n, i, s, r, o, a, c, l, u, d, h = this.activeIndexes, m = {}, f = [];
                for (e = 0, s = h.length; e < s; e++) if (c = (a = h[e]).element(t)) for (n = 0, r = c.length; n < r; n++) if (l = a.map.get(c[n])) for (i = 0, o = l.length; i < o; i++) !m[d = (u = l[i]).id] && this.matchesSelector(t, u.selector) && (m[d] = !0, f.push(u));
                return f.sort(K)
            };
            var Y = {}, z = {}, X = new WeakMap, Q = new WeakMap, G = new WeakMap,
                Z = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");

            function J(t, e, n) {
                var i = t[e];
                return t[e] = function () {
                    return n.apply(t, arguments), i.apply(t, arguments)
                }, t
            }

            function tt() {
                X.set(this, !0)
            }

            function et() {
                X.set(this, !0), Q.set(this, !0)
            }

            function nt() {
                return G.get(this) || null
            }

            function it(t, e) {
                Z && Object.defineProperty(t, "currentTarget", {configurable: !0, enumerable: !0, get: e || Z.get})
            }

            function st(t) {
                if (function (t) {
                    try {
                        return t.eventPhase, !0
                    } catch (e) {
                        return !1
                    }
                }(t)) {
                    var e = (1 === t.eventPhase ? z : Y)[t.type];
                    if (e) {
                        var n = function (t, e, n) {
                            var i = [], s = e;
                            do {
                                if (1 !== s.nodeType) break;
                                var r = t.matches(s);
                                if (r.length) {
                                    var o = {node: s, observers: r};
                                    n ? i.unshift(o) : i.push(o)
                                }
                            } while (s = s.parentElement);
                            return i
                        }(e, t.target, 1 === t.eventPhase);
                        if (n.length) {
                            J(t, "stopPropagation", tt), J(t, "stopImmediatePropagation", et), it(t, nt);
                            for (var i = 0, s = n.length; i < s && !X.get(t); i++) {
                                var r = n[i];
                                G.set(t, r.node);
                                for (var o = 0, a = r.observers.length; o < a && !Q.get(t); o++) r.observers[o].data.call(r.node, t)
                            }
                            G.delete(t), it(t)
                        }
                    }
                }
            }

            const rt = new WeakMap;
            t("u", (ot = (...t) => e => {
                let n = rt.get(e);
                void 0 === n && (n = {lastRenderedIndex: 2147483647, values: []}, rt.set(e, n));
                const i = n.values;
                let s = i.length;
                n.values = t;
                for (let r = 0; r < t.length && !(r > n.lastRenderedIndex); r++) {
                    const o = t[r];
                    if (E(o) || "function" != typeof o.then) {
                        e.setValue(o), n.lastRenderedIndex = r;
                        break
                    }
                    r < s && o === i[r] || (n.lastRenderedIndex = 2147483647, s = 0, Promise.resolve(o).then(t => {
                        const i = n.values.indexOf(o);
                        i > -1 && i < n.lastRenderedIndex && (n.lastRenderedIndex = i, e.setValue(t), e.commit())
                    }))
                }
            }, (...t) => {
                const e = ot(...t);
                return n.set(e, !0), e
            }));
            var ot;
            const at = !!navigator.userAgent.match(/Macintosh/);

            class ct {
                constructor(t, e) {
                    this.input = t, this.list = e, this.isComposing = !1, e.id || (e.id = `combobox-${Math.random().toString().slice(2, 6)}`), this.keyboardEventHandler = t => function (t, e) {
                        if (t.shiftKey || t.metaKey || t.altKey) return;
                        if (!at && t.ctrlKey) return;
                        if (e.isComposing) return;
                        switch (t.key) {
                            case"Enter":
                            case"Tab":
                                (function (t, e) {
                                    const n = e.querySelector('[aria-selected="true"]');
                                    return !!n && ("true" === n.getAttribute("aria-disabled") || (n.click(), !0))
                                })(e.input, e.list) && t.preventDefault();
                                break;
                            case"Escape":
                                e.clearSelection();
                                break;
                            case"ArrowDown":
                                e.navigate(1), t.preventDefault();
                                break;
                            case"ArrowUp":
                                e.navigate(-1), t.preventDefault();
                                break;
                            case"n":
                                at && t.ctrlKey && (e.navigate(1), t.preventDefault());
                                break;
                            case"p":
                                at && t.ctrlKey && (e.navigate(-1), t.preventDefault());
                                break;
                            default:
                                if (t.ctrlKey) break;
                                e.clearSelection()
                        }
                    }(t, this), this.compositionEventHandler = t => function (t, e) {
                        if (e.isComposing = "compositionstart" === t.type, !document.getElementById(e.input.getAttribute("aria-controls") || "")) return;
                        e.clearSelection()
                    }(t, this), this.inputHandler = this.clearSelection.bind(this), t.setAttribute("role", "combobox"), t.setAttribute("aria-controls", e.id), t.setAttribute("aria-expanded", "false"), t.setAttribute("aria-autocomplete", "list"), t.setAttribute("aria-haspopup", "listbox")
                }

                destroy() {
                    this.clearSelection(), this.stop(), this.input.removeAttribute("role"), this.input.removeAttribute("aria-controls"), this.input.removeAttribute("aria-expanded"), this.input.removeAttribute("aria-autocomplete"), this.input.removeAttribute("aria-haspopup")
                }

                start() {
                    this.input.setAttribute("aria-expanded", "true"), this.input.addEventListener("compositionstart", this.compositionEventHandler), this.input.addEventListener("compositionend", this.compositionEventHandler), this.input.addEventListener("input", this.inputHandler), this.input.addEventListener("keydown", this.keyboardEventHandler), this.list.addEventListener("click", lt)
                }

                stop() {
                    this.clearSelection(), this.input.setAttribute("aria-expanded", "false"), this.input.removeEventListener("compositionstart", this.compositionEventHandler), this.input.removeEventListener("compositionend", this.compositionEventHandler), this.input.removeEventListener("input", this.inputHandler), this.input.removeEventListener("keydown", this.keyboardEventHandler), this.list.removeEventListener("click", lt)
                }

                navigate(t = 1) {
                    const e = Array.from(this.list.querySelectorAll('[aria-selected="true"]')).filter(ut)[0],
                        n = Array.from(this.list.querySelectorAll('[role="option"]')).filter(ut), i = n.indexOf(e);
                    if (i === n.length - 1 && 1 === t || 0 === i && -1 === t) return this.clearSelection(), void this.input.focus();
                    let s = 1 === t ? 0 : n.length - 1;
                    if (e && i >= 0) {
                        const e = i + t;
                        e >= 0 && e < n.length && (s = e)
                    }
                    const r = n[s];
                    if (r) for (const o of n) r === o ? (this.input.setAttribute("aria-activedescendant", r.id), r.setAttribute("aria-selected", "true"), dt(this.list, r)) : o.setAttribute("aria-selected", "false")
                }

                clearSelection() {
                    this.input.removeAttribute("aria-activedescendant");
                    for (const t of this.list.querySelectorAll('[aria-selected="true"]')) t.setAttribute("aria-selected", "false")
                }
            }

            function lt(t) {
                if (!(t.target instanceof Element)) return;
                const e = t.target.closest('[role="option"]');
                e && "true" !== e.getAttribute("aria-disabled") && function (t) {
                    t.dispatchEvent(new CustomEvent("combobox-commit", {bubbles: !0}))
                }(e)
            }

            function ut(t) {
                return !t.hidden && !(t instanceof HTMLInputElement && "hidden" === t.type) && (t.offsetWidth > 0 || t.offsetHeight > 0)
            }

            function dt(t, e) {
                (function (t, e) {
                    const n = t.scrollTop, i = n + t.clientHeight, s = e.offsetTop, r = s + e.clientHeight;
                    return s >= n && r <= i
                })(t, e) || (t.scrollTop = e.offsetTop)
            }

            t("C", ct);
            var ht = null, mt = null, ft = [];

            function pt(t, e) {
                var n = [];

                function i() {
                    var t = n;
                    n = [], e(t)
                }

                return function () {
                    for (var e = arguments.length, s = Array(e), r = 0; r < e; r++) s[r] = arguments[r];
                    n.push(s), 1 === n.length && gt(t, i)
                }
            }

            function gt(t, e) {
                mt || (mt = new MutationObserver(vt)), ht || (ht = t.createElement("div"), mt.observe(ht, {attributes: !0})), ft.push(e), ht.setAttribute("data-twiddle", "" + Date.now())
            }

            function vt() {
                var t = ft;
                ft = [];
                for (var e = 0; e < t.length; e++) try {
                    t[e]()
                } catch (n) {
                    setTimeout((function () {
                        throw n
                    }), 0)
                }
            }

            var bt = new WeakMap, Et = new WeakMap, wt = new WeakMap, yt = new WeakMap;

            function xt(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n], s = i[0], r = i[1], o = i[2];
                    s === St ? (At(o, r), kt(o, r)) : s === _t ? Tt(o, r) : s === It && Mt(t.observers, r)
                }
            }

            function At(t, e) {
                if (e instanceof t.elementConstructor) {
                    var n = bt.get(e);
                    if (n || (n = [], bt.set(e, n)), -1 === n.indexOf(t.id)) {
                        var i = void 0;
                        if (t.initialize && (i = t.initialize.call(void 0, e)), i) {
                            var s = Et.get(e);
                            s || (s = {}, Et.set(e, s)), s["" + t.id] = i
                        }
                        n.push(t.id)
                    }
                }
            }

            function kt(t, e) {
                if (e instanceof t.elementConstructor) {
                    var n = yt.get(e);
                    if (n || (n = [], yt.set(e, n)), -1 === n.indexOf(t.id)) {
                        t.elements.push(e);
                        var i = Et.get(e), s = i ? i["" + t.id] : null;
                        if (s && s.add && s.add.call(void 0, e), t.subscribe) {
                            var r = t.subscribe.call(void 0, e);
                            if (r) {
                                var o = wt.get(e);
                                o || (o = {}, wt.set(e, o)), o["" + t.id] = r
                            }
                        }
                        t.add && t.add.call(void 0, e), n.push(t.id)
                    }
                }
            }

            function Tt(t, e) {
                if (e instanceof t.elementConstructor) {
                    var n = yt.get(e);
                    if (n) {
                        var i = t.elements.indexOf(e);
                        if (-1 !== i && t.elements.splice(i, 1), -1 !== (i = n.indexOf(t.id))) {
                            var s = Et.get(e), r = s ? s["" + t.id] : null;
                            if (r && r.remove && r.remove.call(void 0, e), t.subscribe) {
                                var o = wt.get(e), a = o ? o["" + t.id] : null;
                                a && a.unsubscribe && a.unsubscribe()
                            }
                            t.remove && t.remove.call(void 0, e), n.splice(i, 1)
                        }
                        0 === n.length && yt.delete(e)
                    }
                }
            }

            function Mt(t, e) {
                var n = yt.get(e);
                if (n) {
                    for (var i = n.slice(0), s = 0; s < i.length; s++) {
                        var r = t[i[s]];
                        if (r) {
                            var o = r.elements.indexOf(e);
                            -1 !== o && r.elements.splice(o, 1);
                            var a = Et.get(e), c = a ? a["" + r.id] : null;
                            c && c.remove && c.remove.call(void 0, e);
                            var l = wt.get(e), u = l ? l["" + r.id] : null;
                            u && u.unsubscribe && u.unsubscribe(), r.remove && r.remove.call(void 0, e)
                        }
                    }
                    yt.delete(e)
                }
            }

            var Lt = null;

            function Ct(t) {
                return "matches" in t || "webkitMatchesSelector" in t || "mozMatchesSelector" in t || "oMatchesSelector" in t || "msMatchesSelector" in t
            }

            var St = 1, _t = 2, It = 3;

            function Dt(t, e, n) {
                for (var i = 0; i < n.length; i++) {
                    var s = n[i];
                    "childList" === s.type ? (Ht(t, e, s.addedNodes), qt(t, e, s.removedNodes)) : "attributes" === s.type && Nt(t, e, s.target)
                }
                (function (t) {
                    if (null === Lt) {
                        var e = t.createElement("div"), n = t.createElement("div"), i = t.createElement("div");
                        e.appendChild(n), n.appendChild(i), e.innerHTML = "", Lt = i.parentNode !== n
                    }
                    return Lt
                })(t.ownerDocument) && function (t, e) {
                    for (var n = 0; n < t.observers.length; n++) {
                        var i = t.observers[n];
                        if (i) for (var s = i.elements, r = 0; r < s.length; r++) {
                            var o = s[r];
                            o.parentNode || e.push([It, o])
                        }
                    }
                }(t, e)
            }

            function Ht(t, e, n) {
                for (var i = 0; i < n.length; i++) {
                    var s = n[i];
                    if (Ct(s)) for (var r = t.selectorSet.matches(s), o = 0; o < r.length; o++) {
                        var a = r[o].data;
                        e.push([St, s, a])
                    }
                    if ("querySelectorAll" in s) for (var c = t.selectorSet.queryAll(s), l = 0; l < c.length; l++) for (var u = c[l], d = u.data, h = u.elements, m = 0; m < h.length; m++) e.push([St, h[m], d])
                }
            }

            function qt(t, e, n) {
                for (var i = 0; i < n.length; i++) {
                    var s = n[i];
                    if ("querySelectorAll" in s) {
                        e.push([It, s]);
                        for (var r = s.querySelectorAll("*"), o = 0; o < r.length; o++) e.push([It, r[o]])
                    }
                }
            }

            function Nt(t, e, n) {
                if (Ct(n)) for (var i = t.selectorSet.matches(n), s = 0; s < i.length; s++) {
                    var r = i[s].data;
                    e.push([St, n, r])
                }
                if ("querySelectorAll" in n) {
                    var o = yt.get(n);
                    if (o) for (var a = 0; a < o.length; a++) {
                        var c = t.observers[o[a]];
                        c && (t.selectorSet.matchesSelector(n, c.selector) || e.push([_t, n, c]))
                    }
                }
            }

            var Bt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, Ft = 0;

            function Pt(t) {
                this.rootNode = 9 === t.nodeType ? t.documentElement : t, this.ownerDocument = 9 === t.nodeType ? t : t.ownerDocument, this.observers = [], this.selectorSet = new B, this.mutationObserver = new MutationObserver(Wt.bind(this, this)), this._scheduleAddRootNodes = pt(this.ownerDocument, Rt.bind(this, this)), this._handleThrottledChangedTargets = pt(this.ownerDocument, jt.bind(this, this)), this.rootNode.addEventListener("change", Vt.bind(this, this), !1), function (t, e) {
                    var n = t.readyState;
                    "interactive" === n || "complete" === n ? gt(t, e) : t.addEventListener("DOMContentLoaded", gt(t, e))
                }(this.ownerDocument, Ot.bind(this, this))
            }

            function Ot(t) {
                t.mutationObserver.observe(t.rootNode, {
                    childList: !0,
                    attributes: !0,
                    subtree: !0
                }), t._scheduleAddRootNodes()
            }

            function Rt(t) {
                var e = [];
                Ht(t, e, [t.rootNode]), xt(t, e)
            }

            function Wt(t, e) {
                var n = [];
                Dt(t, n, e), xt(t, n)
            }

            function Vt(t, e) {
                t._handleThrottledChangedTargets(e.target)
            }

            function jt(t, e) {
                var n = [];
                !function (t, e, n) {
                    for (var i = 0; i < n.length; i++) for (var s = n[i], r = s.form ? s.form.elements : t.rootNode.querySelectorAll("input"), o = 0; o < r.length; o++) Nt(t, e, r[o])
                }(t, n, e), xt(t, n)
            }

            Pt.prototype.disconnect = function () {
                this.mutationObserver.disconnect()
            }, Pt.prototype.observe = function (t, e) {
                var n = void 0;
                "function" == typeof e ? n = {
                    selector: t,
                    initialize: e
                } : "object" === (void 0 === e ? "undefined" : Bt(e)) ? (n = e).selector = t : n = t;
                var i = this, s = {
                    id: Ft++,
                    selector: n.selector,
                    initialize: n.initialize,
                    add: n.add,
                    remove: n.remove,
                    subscribe: n.subscribe,
                    elements: [],
                    elementConstructor: n.hasOwnProperty("constructor") ? n.constructor : this.ownerDocument.defaultView.Element,
                    abort: function () {
                        i._abortObserving(s)
                    }
                };
                return this.selectorSet.add(s.selector, s), this.observers[s.id] = s, this._scheduleAddRootNodes(), s
            }, Pt.prototype._abortObserving = function (t) {
                for (var e = t.elements, n = 0; n < e.length; n++) Tt(t, e[n]);
                this.selectorSet.remove(t.selector, t), delete this.observers[t.id]
            }, Pt.prototype.triggerObservers = function (t) {
                var e = [];
                !function (t, e, n) {
                    if ("querySelectorAll" in n) {
                        Nt(t, e, n);
                        for (var i = n.querySelectorAll("*"), s = 0; s < i.length; s++) Nt(t, e, i[s])
                    }
                }(this, e, t), xt(this, e)
            };
            var $t = void 0;

            function Ut() {
                return $t || ($t = new Pt(window.document)), $t
            }

            function Kt(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, {
                    start: n = !0,
                    middle: i = !0,
                    once: s = !1
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                var r, o = 0, a = !1, c = function c() {
                    for (var l = arguments.length, u = new Array(l), d = 0; d < l; d++) u[d] = arguments[d];
                    if (!a) {
                        var h = Date.now() - o;
                        o = Date.now(), n ? (n = !1, t(...u), s && c.cancel()) : (i && h < e || !i) && (clearTimeout(r), r = setTimeout((function () {
                            o = Date.now(), t(...u), s && c.cancel()
                        }), i ? e - h : e))
                    }
                };
                return c.cancel = function () {
                    clearTimeout(r), a = !0
                }, c
            }

            const Yt = new WeakMap;

            class AutoCheckElement extends HTMLElement {
                connectedCallback() {
                    const t = this.input;
                    if (!t) return;
                    const e = function (t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, {
                            start: n = !1,
                            middle: i = !1,
                            once: s = !1
                        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return Kt(t, e, {start: n, middle: i, once: s})
                    }(Xt.bind(null, this), 300), n = {check: e, controller: null};
                    Yt.set(this, n), t.addEventListener("input", zt), t.addEventListener("input", e), t.autocomplete = "off", t.spellcheck = !1
                }

                disconnectedCallback() {
                    const t = this.input;
                    if (!t) return;
                    const e = Yt.get(this);
                    e && (Yt.delete(this), t.removeEventListener("input", zt), t.removeEventListener("input", e.check), t.setCustomValidity(""))
                }

                attributeChangedCallback(t) {
                    if ("required" === t) {
                        const t = this.input;
                        if (!t) return;
                        t.required = this.required
                    }
                }

                static get observedAttributes() {
                    return ["required"]
                }

                get input() {
                    const t = this.querySelector("input");
                    return t instanceof HTMLInputElement ? t : null
                }

                get src() {
                    const t = this.getAttribute("src");
                    if (!t) return "";
                    const e = this.ownerDocument.createElement("a");
                    return e.href = t, e.href
                }

                set src(t) {
                    this.setAttribute("src", t)
                }

                get csrf() {
                    const t = this.querySelector("[data-csrf]");
                    return this.getAttribute("csrf") || t instanceof HTMLInputElement && t.value || ""
                }

                set csrf(t) {
                    this.setAttribute("csrf", t)
                }

                get required() {
                    return this.hasAttribute("required")
                }

                set required(t) {
                    t ? this.setAttribute("required", "") : this.removeAttribute("required")
                }
            }

            function zt(t) {
                const e = t.currentTarget;
                if (!(e instanceof HTMLInputElement)) return;
                const n = e.closest("auto-check");
                if (!(n instanceof AutoCheckElement)) return;
                const i = n.src, s = n.csrf, r = Yt.get(n);
                if (!i || !s || !r) return;
                let o = "Verifying鈥�";
                e.dispatchEvent(new CustomEvent("auto-check-start", {
                    bubbles: !0,
                    detail: {setValidity: t => o = t}
                })), n.required && e.setCustomValidity(o)
            }

            async function Xt(t) {
                const e = t.input;
                if (!e) return;
                const n = t.src, i = t.csrf, s = Yt.get(t);
                if (!n || !i || !s) return void (t.required && e.setCustomValidity(""));
                if (!e.value.trim()) return void (t.required && e.setCustomValidity(""));
                const r = new FormData;
                r.append("authenticity_token", i), r.append("value", e.value), e.dispatchEvent(new CustomEvent("auto-check-send", {
                    bubbles: !0,
                    detail: {body: r}
                })), s.controller ? s.controller.abort() : t.dispatchEvent(new CustomEvent("loadstart")), s.controller = "AbortController" in window ? new AbortController : {
                    signal: null,
                    abort() {
                    }
                };
                try {
                    const i = await async function (t, e, n) {
                        try {
                            const i = await fetch(e, n);
                            return t.dispatchEvent(new CustomEvent("load")), t.dispatchEvent(new CustomEvent("loadend")), i
                        } catch (i) {
                            throw"AbortError" !== i.name && (t.dispatchEvent(new CustomEvent("error")), t.dispatchEvent(new CustomEvent("loadend"))), i
                        }
                    }(t, n, {credentials: "same-origin", signal: s.controller.signal, method: "POST", body: r});
                    i.ok ? function (t, e, n) {
                        n && e.setCustomValidity("");
                        e.dispatchEvent(new CustomEvent("auto-check-success", {
                            bubbles: !0,
                            detail: {response: t.clone()}
                        }))
                    }(i, e, t.required) : function (t, e, n) {
                        let i = "Validation failed";
                        e.dispatchEvent(new CustomEvent("auto-check-error", {
                            bubbles: !0,
                            detail: {response: t.clone(), setValidity: t => i = t}
                        })), n && e.setCustomValidity(i)
                    }(i, e, t.required), s.controller = null, e.dispatchEvent(new CustomEvent("auto-check-complete", {bubbles: !0}))
                } catch (o) {
                    "AbortError" !== o.name && (s.controller = null, e.dispatchEvent(new CustomEvent("auto-check-complete", {bubbles: !0})))
                }
            }

            window.customElements.get("auto-check") || (window.AutoCheckElement = AutoCheckElement, window.customElements.define("auto-check", AutoCheckElement));

            class Qt extends CustomEvent {
                constructor(t, e) {
                    super(t, e), this.relatedTarget = e.relatedTarget
                }
            }

            const Gt = new WeakMap;

            function Zt(t, e) {
                const n = new XMLHttpRequest;
                return n.open("GET", e, !0), n.setRequestHeader("Accept", "text/fragment+html"), function (t, e) {
                    const n = Gt.get(t);
                    n && n.abort();
                    Gt.set(t, e);
                    const i = () => Gt.delete(t), s = function (t) {
                        return new Promise((e, n) => {
                            t.onload = function () {
                                t.status >= 200 && t.status < 300 ? e(t.responseText) : n(new Error(t.responseText))
                            }, t.onerror = n, t.send()
                        })
                    }(e);
                    return s.then(i, i), s
                }(t, n)
            }

            class Jt {
                constructor(t, e, n) {
                    this.container = t, this.input = e, this.results = n, this.combobox = new ct(e, n), this.results.hidden = !0, this.input.setAttribute("autocomplete", "off"), this.input.setAttribute("spellcheck", "false"), this.interactingWithList = !1, this.onInputChange = function (t, e) {
                        let n;
                        return function () {
                            for (var i = arguments.length, s = new Array(i), r = 0; r < i; r++) s[r] = arguments[r];
                            clearTimeout(n), n = setTimeout(() => {
                                clearTimeout(n), t(...s)
                            }, e)
                        }
                    }(this.onInputChange.bind(this), 300), this.onResultsMouseDown = this.onResultsMouseDown.bind(this), this.onInputBlur = this.onInputBlur.bind(this), this.onInputFocus = this.onInputFocus.bind(this), this.onKeydown = this.onKeydown.bind(this), this.onCommit = this.onCommit.bind(this), this.input.addEventListener("keydown", this.onKeydown), this.input.addEventListener("focus", this.onInputFocus), this.input.addEventListener("blur", this.onInputBlur), this.input.addEventListener("input", this.onInputChange), this.results.addEventListener("mousedown", this.onResultsMouseDown), this.results.addEventListener("combobox-commit", this.onCommit)
                }

                destroy() {
                    this.input.removeEventListener("keydown", this.onKeydown), this.input.removeEventListener("focus", this.onInputFocus), this.input.removeEventListener("blur", this.onInputBlur), this.input.removeEventListener("input", this.onInputChange), this.results.removeEventListener("mousedown", this.onResultsMouseDown), this.results.removeEventListener("combobox-commit", this.onCommit)
                }

                onKeydown(t) {
                    if ("Escape" === t.key && this.container.open) this.container.open = !1, t.stopPropagation(), t.preventDefault(); else if (t.altKey && "ArrowUp" === t.key && this.container.open) this.container.open = !1, t.stopPropagation(), t.preventDefault(); else if (t.altKey && "ArrowDown" === t.key && !this.container.open) {
                        if (!this.input.value.trim()) return;
                        this.container.open = !0, t.stopPropagation(), t.preventDefault()
                    }
                }

                onInputFocus() {
                    this.fetchResults()
                }

                onInputBlur() {
                    this.interactingWithList ? this.interactingWithList = !1 : this.container.open = !1
                }

                onCommit(t) {
                    let {target: e} = t;
                    const n = e;
                    if (!(n instanceof HTMLElement)) return;
                    if (this.container.open = !1, n instanceof HTMLAnchorElement) return;
                    const i = n.getAttribute("data-autocomplete-value") || n.textContent;
                    this.container.value = i
                }

                onResultsMouseDown() {
                    this.interactingWithList = !0
                }

                onInputChange() {
                    this.container.removeAttribute("value"), this.fetchResults()
                }

                identifyOptions() {
                    let t = 0;
                    for (const e of this.results.querySelectorAll('[role="option"]:not([id])')) e.id = "".concat(this.results.id, "-option-").concat(t++)
                }

                fetchResults() {
                    const t = this.input.value.trim();
                    if (!t) return void (this.container.open = !1);
                    const e = this.container.src;
                    if (!e) return;
                    const n = new URL(e, window.location.href), i = new URLSearchParams(n.search.slice(1));
                    i.append("q", t), n.search = i.toString(), this.container.dispatchEvent(new CustomEvent("loadstart")), Zt(this.input, n.toString()).then(t => {
                        this.results.innerHTML = t, this.identifyOptions();
                        const e = !!this.results.querySelector('[role="option"]');
                        this.container.open = e, this.container.dispatchEvent(new CustomEvent("load")), this.container.dispatchEvent(new CustomEvent("loadend"))
                    }).catch(() => {
                        this.container.dispatchEvent(new CustomEvent("error")), this.container.dispatchEvent(new CustomEvent("loadend"))
                    })
                }

                open() {
                    this.results.hidden && (this.combobox.start(), this.results.hidden = !1)
                }

                close() {
                    this.results.hidden || (this.combobox.stop(), this.results.hidden = !0)
                }
            }

            const te = new WeakMap;

            class AutocompleteElement extends HTMLElement {
                constructor() {
                    super()
                }

                connectedCallback() {
                    const t = this.getAttribute("for");
                    if (!t) return;
                    const e = this.querySelector("input"), n = document.getElementById(t);
                    e instanceof HTMLInputElement && n && (te.set(this, new Jt(this, e, n)), n.setAttribute("role", "listbox"))
                }

                disconnectedCallback() {
                    const t = te.get(this);
                    t && (t.destroy(), te.delete(this))
                }

                get src() {
                    return this.getAttribute("src") || ""
                }

                set src(t) {
                    this.setAttribute("src", t)
                }

                get value() {
                    return this.getAttribute("value") || ""
                }

                set value(t) {
                    this.setAttribute("value", t)
                }

                get open() {
                    return this.hasAttribute("open")
                }

                set open(t) {
                    t ? this.setAttribute("open", "") : this.removeAttribute("open")
                }

                static get observedAttributes() {
                    return ["open", "value"]
                }

                attributeChangedCallback(t, e, n) {
                    if (e === n) return;
                    const i = te.get(this);
                    if (i) switch (t) {
                        case"open":
                            null === n ? i.close() : i.open();
                            break;
                        case"value":
                            null !== n && (i.input.value = n), this.dispatchEvent(new Qt("auto-complete-change", {
                                bubbles: !0,
                                relatedTarget: i.input
                            }))
                    }
                }
            }

            function ee(t) {
                if ("clipboard" in navigator) return navigator.clipboard.writeText(t.textContent);
                const e = getSelection();
                if (null == e) return Promise.reject(new Error);
                e.removeAllRanges();
                const n = document.createRange();
                return n.selectNodeContents(t), e.addRange(n), document.execCommand("copy"), e.removeAllRanges(), Promise.resolve()
            }

            function ne(t) {
                if ("clipboard" in navigator) return navigator.clipboard.writeText(t);
                const e = document.body;
                if (!e) return Promise.reject(new Error);
                const n = function (t) {
                    const e = document.createElement("pre");
                    return e.style.width = "1px", e.style.height = "1px", e.style.position = "fixed", e.style.top = "5px", e.textContent = t, e
                }(t);
                return e.appendChild(n), ee(n), e.removeChild(n), Promise.resolve()
            }

            function ie(t) {
                const e = t.getAttribute("for"), n = t.getAttribute("value");

                function i() {
                    t.dispatchEvent(new CustomEvent("clipboard-copy", {bubbles: !0}))
                }

                if (n) ne(n).then(i); else if (e) {
                    const n = t.ownerDocument.getElementById(e);
                    n && (s = n, s instanceof HTMLInputElement || s instanceof HTMLTextAreaElement ? "hidden" === s.type ? ne(s.value) : function (t) {
                        if ("clipboard" in navigator) return navigator.clipboard.writeText(t.value);
                        t.select(), document.execCommand("copy");
                        const e = getSelection();
                        return null != e && e.removeAllRanges(), Promise.resolve()
                    }(s) : s instanceof HTMLAnchorElement && s.hasAttribute("href") ? ne(s.href) : ee(s)).then(i)
                }
                var s
            }

            function se(t) {
                const e = t.currentTarget;
                e instanceof HTMLElement && ie(e)
            }

            function re(t) {
                if (" " === t.key || "Enter" === t.key) {
                    const e = t.currentTarget;
                    e instanceof HTMLElement && (t.preventDefault(), ie(e))
                }
            }

            function oe(t) {
                t.currentTarget.addEventListener("keydown", re)
            }

            function ae(t) {
                t.currentTarget.removeEventListener("keydown", re)
            }

            window.customElements.get("auto-complete") || (window.AutocompleteElement = AutocompleteElement, window.customElements.define("auto-complete", AutocompleteElement)), t("A", AutocompleteElement);

            class ClipboardCopyElement extends HTMLElement {
                constructor() {
                    super(), this.addEventListener("click", se), this.addEventListener("focus", oe), this.addEventListener("blur", ae)
                }

                connectedCallback() {
                    this.hasAttribute("tabindex") || this.setAttribute("tabindex", "0"), this.hasAttribute("role") || this.setAttribute("role", "button")
                }

                get value() {
                    return this.getAttribute("value") || ""
                }

                set value(t) {
                    this.setAttribute("value", t)
                }
            }

            window.customElements.get("clipboard-copy") || (window.ClipboardCopyElement = ClipboardCopyElement, window.customElements.define("clipboard-copy", ClipboardCopyElement)), t("i", ClipboardCopyElement);

            function ce(t) {
                let e = Array.from(t.querySelectorAll("[autofocus]")).filter(ue)[0];
                e || (e = t, t.setAttribute("tabindex", "-1")), e.focus()
            }

            function le(t) {
                const e = t.currentTarget;
                e instanceof Element && ("Escape" === t.key || "Esc" === t.key ? (fe(e, !1), t.stopPropagation()) : "Tab" === t.key && function (t) {
                    if (!(t.currentTarget instanceof Element)) return;
                    const e = t.currentTarget.querySelector("details-dialog");
                    if (!e) return;
                    t.preventDefault();
                    const n = Array.from(e.querySelectorAll("*")).filter(ue);
                    if (0 === n.length) return;
                    const i = t.shiftKey ? -1 : 1,
                        s = e.contains(document.activeElement) ? document.activeElement : null;
                    let r = -1 === i ? -1 : 0;
                    if (s) {
                        const t = n.indexOf(s);
                        -1 !== t && (r = t + i)
                    }
                    r < 0 ? r = n.length - 1 : r %= n.length;
                    n[r].focus()
                }(t))
            }

            function ue(t) {
                return t.tabIndex >= 0 && !t.disabled && function (t) {
                    return !t.hidden && (!t.type || "hidden" !== t.type) && (t.offsetWidth > 0 || t.offsetHeight > 0)
                }(t)
            }

            function de(t) {
                const e = t.querySelector("details-dialog");
                return !(e instanceof DetailsDialogElement) || e.dispatchEvent(new CustomEvent("details-dialog-close", {
                    bubbles: !0,
                    cancelable: !0
                }))
            }

            function he(t) {
                if (!(t.currentTarget instanceof Element)) return;
                const e = t.currentTarget.closest("details");
                e && e.hasAttribute("open") && (de(e) || (t.preventDefault(), t.stopPropagation()))
            }

            function me(t) {
                const e = t.currentTarget;
                if (!(e instanceof Element)) return;
                const n = e.querySelector("details-dialog");
                if (n instanceof DetailsDialogElement) if (e.hasAttribute("open")) document.activeElement && be.set(n, {
                    details: e,
                    activeElement: document.activeElement
                }), ce(n), e.addEventListener("keydown", le); else {
                    for (const e of n.querySelectorAll("form")) e instanceof HTMLFormElement && e.reset();
                    const t = function (t, e) {
                        const n = be.get(e);
                        return n && n.activeElement instanceof HTMLElement ? n.activeElement : t.querySelector("summary")
                    }(e, n);
                    t && t.focus(), e.removeEventListener("keydown", le)
                }
            }

            function fe(t, e) {
                e !== t.hasAttribute("open") && (e ? t.setAttribute("open", "") : de(t) && t.removeAttribute("open"))
            }

            function pe(t) {
                const e = t.currentTarget;
                if (!(e instanceof Element)) return;
                const n = e.querySelector("details-dialog");
                if (!(n instanceof DetailsDialogElement)) return;
                const i = n.querySelector("include-fragment:not([src])");
                if (!i) return;
                const s = n.src;
                null !== s && (i.addEventListener("loadend", () => {
                    e.hasAttribute("open") && ce(n)
                }), i.setAttribute("src", s))
            }

            function ge(t, e, n) {
                ve(t), e && t.addEventListener("toggle", pe, {once: !0}), e && n && t.addEventListener("mouseover", pe, {once: !0})
            }

            function ve(t) {
                t.removeEventListener("toggle", pe), t.removeEventListener("mouseover", pe)
            }

            const be = new WeakMap;

            class DetailsDialogElement extends HTMLElement {
                static get CLOSE_ATTR() {
                    return "data-close-dialog"
                }

                static get CLOSE_SELECTOR() {
                    return "[data-close-dialog]"
                }

                constructor() {
                    super(), be.set(this, {
                        details: null,
                        activeElement: null
                    }), this.addEventListener("click", (function (t) {
                        let e = t.target;
                        if (!(e instanceof Element)) return;
                        const n = e.closest("details");
                        n && e.closest("[data-close-dialog]") && fe(n, !1)
                    }))
                }

                get src() {
                    return this.getAttribute("src")
                }

                set src(t) {
                    this.setAttribute("src", t)
                }

                get preload() {
                    return this.hasAttribute("preload")
                }

                set preload(t) {
                    t ? this.setAttribute("preload", "") : this.removeAttribute("preload")
                }

                connectedCallback() {
                    this.setAttribute("role", "dialog"), this.setAttribute("aria-modal", "true");
                    const t = be.get(this);
                    if (!t) return;
                    const e = this.parentElement;
                    if (!e) return;
                    const n = e.querySelector("summary");
                    n && (n.hasAttribute("role") || n.setAttribute("role", "button"), n.addEventListener("click", he, {capture: !0})), e.addEventListener("toggle", me), t.details = e, ge(e, this.src, this.preload)
                }

                disconnectedCallback() {
                    const t = be.get(this);
                    if (!t) return;
                    const e = t.details;
                    if (!e) return;
                    e.removeEventListener("toggle", me), ve(e);
                    const n = e.querySelector("summary");
                    n && n.removeEventListener("click", he, {capture: !0}), t.details = null
                }

                toggle(t) {
                    const e = be.get(this);
                    if (!e) return;
                    const n = e.details;
                    n && fe(n, t)
                }

                static get observedAttributes() {
                    return ["src", "preload"]
                }

                attributeChangedCallback() {
                    const t = be.get(this);
                    if (!t) return;
                    const e = t.details;
                    e && ge(e, this.src, this.preload)
                }
            }

            t("D", DetailsDialogElement), window.customElements.get("details-dialog") || (window.DetailsDialogElement = DetailsDialogElement, window.customElements.define("details-dialog", DetailsDialogElement));

            class DetailsMenuElement extends HTMLElement {
                constructor() {
                    super()
                }

                get preload() {
                    return this.hasAttribute("preload")
                }

                set preload(t) {
                    t ? this.setAttribute("preload", "") : this.removeAttribute("preload")
                }

                get src() {
                    return this.getAttribute("src") || ""
                }

                set src(t) {
                    this.setAttribute("src", t)
                }

                connectedCallback() {
                    this.hasAttribute("role") || this.setAttribute("role", "menu");
                    const t = this.parentElement;
                    if (!t) return;
                    const e = t.querySelector("summary");
                    e && (e.setAttribute("aria-haspopup", "menu"), e.hasAttribute("role") || e.setAttribute("role", "button"));
                    const n = [ye(t, "compositionstart", t => Ie(this, t)), ye(t, "compositionend", t => Ie(this, t)), ye(t, "click", e => Le(t, this, e)), ye(t, "change", e => Le(t, this, e)), ye(t, "keydown", e => function (t, e, n) {
                        if (!(n instanceof KeyboardEvent)) return;
                        if (t.querySelector("details[open]")) return;
                        const i = Ee.get(e);
                        if (!i || i.isComposing) return;
                        const s = n.target instanceof Element && "SUMMARY" === n.target.tagName;
                        switch (n.key) {
                            case"Escape":
                                t.hasAttribute("open") && (_e(t), n.preventDefault(), n.stopPropagation());
                                break;
                            case"ArrowDown": {
                                s && !t.hasAttribute("open") && t.setAttribute("open", "");
                                const e = Te(t, !0);
                                e && e.focus(), n.preventDefault()
                            }
                                break;
                            case"ArrowUp": {
                                s && !t.hasAttribute("open") && t.setAttribute("open", "");
                                const e = Te(t, !1);
                                e && e.focus(), n.preventDefault()
                            }
                                break;
                            case"n":
                                if (Me && n.ctrlKey) {
                                    const e = Te(t, !0);
                                    e && e.focus(), n.preventDefault()
                                }
                                break;
                            case"p":
                                if (Me && n.ctrlKey) {
                                    const e = Te(t, !1);
                                    e && e.focus(), n.preventDefault()
                                }
                                break;
                            case" ":
                            case"Enter": {
                                const e = document.activeElement;
                                e && Se(e) && e.closest("details") === t && (n.preventDefault(), n.stopPropagation(), e.click())
                            }
                        }
                    }(t, this, e)), ye(t, "toggle", () => xe(t, this), {once: !0}), ye(t, "toggle", () => function (t) {
                        if (!t.hasAttribute("open")) return;
                        for (const e of document.querySelectorAll("details[open] > details-menu")) {
                            const n = e.closest("details");
                            n && n !== t && !n.contains(t) && n.removeAttribute("open")
                        }
                    }(t)), this.preload ? ye(t, "mouseover", () => xe(t, this), {once: !0}) : we, ...Ae(t)];
                    Ee.set(this, {subscriptions: n, loaded: !1, isComposing: !1})
                }

                disconnectedCallback() {
                    const t = Ee.get(this);
                    if (t) {
                        Ee.delete(this);
                        for (const e of t.subscriptions) e.unsubscribe()
                    }
                }
            }

            const Ee = new WeakMap, we = {
                unsubscribe() {
                }
            };

            function ye(t, e, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                return t.addEventListener(e, n, i), {
                    unsubscribe: () => {
                        t.removeEventListener(e, n, i)
                    }
                }
            }

            function xe(t, e) {
                const n = e.getAttribute("src");
                if (!n) return;
                const i = Ee.get(e);
                if (!i) return;
                if (i.loaded) return;
                i.loaded = !0;
                const s = e.querySelector("include-fragment");
                s && !s.hasAttribute("src") && (s.addEventListener("loadend", () => ke(t)), s.setAttribute("src", n))
            }

            function Ae(t) {
                let e = !1;
                return [ye(t, "mousedown", () => e = !0), ye(t, "keydown", () => e = !1), ye(t, "toggle", () => {
                    t.hasAttribute("open") && (ke(t) || e || function (t) {
                        const e = document.activeElement;
                        if (e && Se(e) && t.contains(e)) return;
                        const n = Te(t, !0);
                        n && n.focus()
                    }(t))
                })]
            }

            function ke(t) {
                if (!t.hasAttribute("open")) return !1;
                const e = t.querySelector("[autofocus]");
                return !!e && (e.focus(), !0)
            }

            function Te(t, e) {
                const n = Array.from(t.querySelectorAll('[role^="menuitem"]:not([hidden]):not([disabled]):not([aria-disabled="true"])')),
                    i = document.activeElement, s = n.indexOf(i), r = e ? n[s + 1] : n[s - 1],
                    o = e ? n[0] : n[n.length - 1];
                return r || o
            }

            const Me = navigator.userAgent.match(/Macintosh/);

            function Le(t, e, n) {
                const i = n.target;
                if (i instanceof Element && i.closest("details") === t) if ("click" === n.type) {
                    const e = i.closest('[role="menuitem"], [role="menuitemradio"]'),
                        n = e && "LABEL" === e.tagName && e.querySelector("input");
                    e && !n && Ce(e, t)
                } else if ("change" === n.type) {
                    const e = i.closest('[role="menuitemradio"], [role="menuitemcheckbox"]');
                    e && Ce(e, t)
                }
            }

            function Ce(t, e) {
                if (t.hasAttribute("disabled") || "true" === t.getAttribute("aria-disabled")) return;
                const n = t.closest("details-menu");
                n && n.dispatchEvent(new CustomEvent("details-menu-select", {
                    cancelable: !0,
                    detail: {relatedTarget: t}
                })) && (!function (t, e) {
                    const n = e.querySelector("[data-menu-button]");
                    if (!n) return;
                    const i = function (t) {
                        if (!t) return null;
                        const e = t.hasAttribute("data-menu-button-text") ? t : t.querySelector("[data-menu-button-text]");
                        return e ? e.getAttribute("data-menu-button-text") || e.textContent : null
                    }(t);
                    if (i) n.textContent = i; else {
                        const e = function (t) {
                            if (!t) return null;
                            const e = t.hasAttribute("data-menu-button-contents") ? t : t.querySelector("[data-menu-button-contents]");
                            return e ? e.innerHTML : null
                        }(t);
                        e && (n.innerHTML = e)
                    }
                }(t, e), function (t, e) {
                    for (const n of e.querySelectorAll('[role="menuitemradio"], [role="menuitemcheckbox"]')) {
                        const e = n.querySelector('input[type="radio"], input[type="checkbox"]');
                        let i = n === t;
                        e instanceof HTMLInputElement && (i = e.indeterminate ? "mixed" : e.checked), n.setAttribute("aria-checked", i.toString())
                    }
                }(t, e), "menuitemcheckbox" !== t.getAttribute("role") && _e(e), n.dispatchEvent(new CustomEvent("details-menu-selected", {detail: {relatedTarget: t}})))
            }

            function Se(t) {
                const e = t.getAttribute("role");
                return "menuitem" === e || "menuitemcheckbox" === e || "menuitemradio" === e
            }

            function _e(t) {
                if (!t.hasAttribute("open")) return;
                t.removeAttribute("open");
                const e = t.querySelector("summary");
                e && e.focus()
            }

            function Ie(t, e) {
                const n = Ee.get(t);
                n && (n.isComposing = "compositionstart" === e.type)
            }

            window.customElements.get("details-menu") || (window.DetailsMenuElement = DetailsMenuElement, window.customElements.define("details-menu", DetailsMenuElement));

            class De {
                constructor(t, e) {
                    this.file = t, this.directory = e, this.state = "pending", this.id = null, this.href = null, this.name = null, this.percent = 0
                }

                static traverse(t, e) {
                    return function (t, e) {
                        if (e && function (t) {
                            return t.items && Array.from(t.items).some(t => {
                                const e = t.webkitGetAsEntry && t.webkitGetAsEntry();
                                return e && e.isDirectory
                            })
                        }(t)) return async function t(e, n) {
                            const i = [];
                            for (const s of He(n)) if (s.isDirectory) i.push(...await t(s.fullPath, await Ne(s))); else {
                                const t = await qe(s);
                                i.push(new De(t, e))
                            }
                            return i
                        }("", function (t) {
                            return Array.from(t.items).map(t => t.webkitGetAsEntry()).filter(t => null != t)
                        }(t));
                        return Promise.resolve(He(Array.from(t.files || [])).map(t => new De(t)))
                    }(t, e)
                }

                static from(t) {
                    const e = [];
                    for (const n of t) if (n instanceof File) e.push(new De(n)); else {
                        if (!(n instanceof De)) throw new Error("Unexpected type");
                        e.push(n)
                    }
                    return e
                }

                get fullPath() {
                    return this.directory ? `${this.directory}/${this.file.name}` : this.file.name
                }

                isImage() {
                    return ["image/gif", "image/png", "image/jpg", "image/jpeg"].indexOf(this.file.type) > -1
                }

                saving(t) {
                    if ("pending" !== this.state && "saving" !== this.state) throw new Error(`Unexpected transition from ${this.state} to saving`);
                    this.state = "saving", this.percent = t
                }

                saved(t) {
                    var e, n, i;
                    if ("pending" !== this.state && "saving" !== this.state) throw new Error(`Unexpected transition from ${this.state} to saved`);
                    this.state = "saved", this.id = null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : null, this.href = null !== (n = null == t ? void 0 : t.href) && void 0 !== n ? n : null, this.name = null !== (i = null == t ? void 0 : t.name) && void 0 !== i ? i : null
                }

                isPending() {
                    return "pending" === this.state
                }

                isSaving() {
                    return "saving" === this.state
                }

                isSaved() {
                    return "saved" === this.state
                }
            }

            function He(t) {
                return Array.from(t).filter(t => !function (t) {
                    return t.name.startsWith(".")
                }(t))
            }

            function qe(t) {
                return new Promise((function (e, n) {
                    t.file(e, n)
                }))
            }

            function Ne(t) {
                return new Promise((function (e, n) {
                    const i = [], s = t.createReader(), r = () => {
                        s.readEntries(t => {
                            t.length > 0 ? (i.push(...t), r()) : e(i)
                        }, n)
                    };
                    r()
                }))
            }

            t("l", De);

            class FileAttachmentElement extends HTMLElement {
                constructor() {
                    super(), this.addEventListener("dragenter", Pe), this.addEventListener("dragover", Pe), this.addEventListener("dragleave", Oe), this.addEventListener("drop", Re), this.addEventListener("paste", Ve), this.addEventListener("change", je)
                }

                get directory() {
                    return this.hasAttribute("directory")
                }

                set directory(t) {
                    t ? this.setAttribute("directory", "") : this.removeAttribute("directory")
                }

                async attach(t) {
                    const e = t instanceof DataTransfer ? await De.traverse(t, this.directory) : De.from(t);
                    this.dispatchEvent(new CustomEvent("file-attachment-accept", {
                        bubbles: !0,
                        cancelable: !0,
                        detail: {attachments: e}
                    })) && e.length && this.dispatchEvent(new CustomEvent("file-attachment-accepted", {
                        bubbles: !0,
                        detail: {attachments: e}
                    }))
                }
            }

            function Be(t) {
                return Array.from(t.types).indexOf("Files") >= 0
            }

            let Fe = null;

            function Pe(t) {
                const e = t.currentTarget;
                Fe && clearTimeout(Fe), Fe = window.setTimeout(() => e.removeAttribute("hover"), 200);
                const n = t.dataTransfer;
                n && Be(n) && (n.dropEffect = "copy", e.setAttribute("hover", ""), t.stopPropagation(), t.preventDefault())
            }

            function Oe(t) {
                t.dataTransfer && (t.dataTransfer.dropEffect = "none"), t.currentTarget.removeAttribute("hover"), t.stopPropagation(), t.preventDefault()
            }

            function Re(t) {
                const e = t.currentTarget;
                if (!(e instanceof FileAttachmentElement)) return;
                e.removeAttribute("hover");
                const n = t.dataTransfer;
                n && Be(n) && (e.attach(n), t.stopPropagation(), t.preventDefault())
            }

            const We = /^image\/(gif|png|jpeg)$/;

            function Ve(t) {
                if (!t.clipboardData) return;
                if (!t.clipboardData.items) return;
                const e = t.currentTarget;
                if (!(e instanceof FileAttachmentElement)) return;
                const n = function (t) {
                    for (const e of t) if (We.test(e.type)) return e.getAsFile();
                    return null
                }(t.clipboardData.items);
                if (!n) return;
                const i = [n];
                e.attach(i), t.preventDefault()
            }

            function je(t) {
                const e = t.currentTarget;
                if (!(e instanceof FileAttachmentElement)) return;
                const n = t.target;
                if (!(n instanceof HTMLInputElement)) return;
                const i = e.getAttribute("input");
                if (!i || n.id !== i) return;
                const s = n.files;
                s && 0 !== s.length && (e.attach(s), n.value = "")
            }

            window.customElements.get("file-attachment") || (window.FileAttachmentElement = FileAttachmentElement, window.customElements.define("file-attachment", FileAttachmentElement)), t("m", FileAttachmentElement);

            class FilterInputElement extends HTMLElement {
                constructor() {
                    super(), this.currentQuery = null, this.filter = null, this.debounceInputChange = function (t) {
                        let e;
                        return function () {
                            clearTimeout(e), e = setTimeout(() => {
                                clearTimeout(e), t()
                            }, 300)
                        }
                    }(() => $e(this, !0)), this.boundFilterResults = () => {
                        $e(this, !1)
                    }
                }

                static get observedAttributes() {
                    return ["aria-owns"]
                }

                attributeChangedCallback(t, e) {
                    e && "aria-owns" === t && $e(this, !1)
                }

                connectedCallback() {
                    const t = this.input;
                    t && (t.setAttribute("autocomplete", "off"), t.setAttribute("spellcheck", "false"), t.addEventListener("focus", this.boundFilterResults), t.addEventListener("change", this.boundFilterResults), t.addEventListener("input", this.debounceInputChange))
                }

                disconnectedCallback() {
                    const t = this.input;
                    t && (t.removeEventListener("focus", this.boundFilterResults), t.removeEventListener("change", this.boundFilterResults), t.removeEventListener("input", this.debounceInputChange))
                }

                get input() {
                    const t = this.querySelector("input");
                    return t instanceof HTMLInputElement ? t : null
                }

                reset() {
                    const t = this.input;
                    t && (t.value = "", t.dispatchEvent(new Event("change", {bubbles: !0})))
                }
            }

            async function $e(t, e = !1) {
                const n = t.input;
                if (!n) return;
                const i = n.value.trim(), s = t.getAttribute("aria-owns");
                if (!s) return;
                const r = document.getElementById(s);
                if (!r) return;
                const o = r.hasAttribute("data-filter-list") ? r : r.querySelector("[data-filter-list]");
                if (!o) return;
                if (t.dispatchEvent(new CustomEvent("filter-input-start", {bubbles: !0})), e && t.currentQuery === i) return;
                t.currentQuery = i;
                const a = t.filter || Ue, c = o.childElementCount;
                let l = 0, u = !1;
                for (const m of Array.from(o.children)) {
                    if (!(m instanceof HTMLElement)) continue;
                    const t = a(m, Ke(m), i);
                    !0 === t.hideNew && (u = t.hideNew), m.hidden = !t.match, t.match && l++
                }
                const d = r.querySelector("[data-filter-new-item]"), h = !!d && i.length > 0 && !u;
                d instanceof HTMLElement && (d.hidden = !h, h && function (t, e) {
                    const n = t.querySelector("[data-filter-new-item-text]");
                    n && (n.textContent = e);
                    const i = t.querySelector("[data-filter-new-item-value]");
                    (i instanceof HTMLInputElement || i instanceof HTMLButtonElement) && (i.value = e)
                }(d, i)), function (t, e) {
                    const n = t.querySelector("[data-filter-empty-state]");
                    n instanceof HTMLElement && (n.hidden = e)
                }(r, l > 0 || h), t.dispatchEvent(new CustomEvent("filter-input-updated", {
                    bubbles: !0,
                    detail: {count: l, total: c}
                }))
            }

            function Ue(t, e, n) {
                return {match: -1 !== e.toLowerCase().indexOf(n.toLowerCase()), hideNew: e === n}
            }

            function Ke(t) {
                return ((t.querySelector("[data-filter-item-text]") || t).textContent || "").trim()
            }

            t("F", FilterInputElement), window.customElements.get("filter-input") || (window.FilterInputElement = FilterInputElement, window.customElements.define("filter-input", FilterInputElement));
            const Ye = new Set(["馃憢", "馃", "馃枑锔�", "鉁�", "馃枛", "馃憣", "馃", "鉁岋笍", "馃", "馃", "馃", "馃", "馃憟", "馃憠", "馃憜", "馃枙", "馃憞", "鈽濓笍", "馃憤", "馃憥", "鉁�", "馃憡", "馃", "馃", "馃憦", "馃檶", "馃憪", "馃げ", "馃檹", "鉁嶏笍", "馃拝", "馃こ", "馃挭", "馃Φ", "馃Χ", "馃憘", "馃", "馃憙", "馃懚", "馃", "馃懄", "馃懅", "馃", "馃懕", "馃懆", "馃", "馃懕鈥嶁檪锔�", "馃懆鈥嶐煢�", "馃懆鈥嶐煢�", "馃懆鈥嶐煢�", "馃懆鈥嶐煢�", "馃懇", "馃懕鈥嶁檧锔�", "馃懇鈥嶐煢�", "馃懇鈥嶐煢�", "馃懇鈥嶐煢�", "馃懇鈥嶐煢�", "馃", "馃懘", "馃懙", "馃檷", "馃檷鈥嶁檪锔�", "馃檷鈥嶁檧锔�", "馃檸", "馃檸鈥嶁檪锔�", "馃檸鈥嶁檧锔�", "馃檯", "馃檯鈥嶁檪锔�", "馃檯鈥嶁檧锔�", "馃檰", "馃檰鈥嶁檪锔�", "馃檰鈥嶁檧锔�", "馃拋", "馃拋鈥嶁檪锔�", "馃拋鈥嶁檧锔�", "馃檵", "馃檵鈥嶁檪锔�", "馃檵鈥嶁檧锔�", "馃", "馃鈥嶁檪锔�", "馃鈥嶁檧锔�", "馃檱", "馃檱鈥嶁檪锔�", "馃檱鈥嶁檧锔�", "馃う", "馃う鈥嶁檪锔�", "馃う鈥嶁檧锔�", "馃し", "馃し鈥嶁檪锔�", "馃し鈥嶁檧锔�", "馃懆鈥嶁殨锔�", "馃懇鈥嶁殨锔�", "馃懆鈥嶐煄�", "馃懇鈥嶐煄�", "馃懆鈥嶐煆�", "馃懇鈥嶐煆�", "馃懆鈥嶁殩锔�", "馃懇鈥嶁殩锔�", "馃懆鈥嶐煂�", "馃懇鈥嶐煂�", "馃懆鈥嶐煃�", "馃懇鈥嶐煃�", "馃懆鈥嶐煍�", "馃懇鈥嶐煍�", "馃懆鈥嶐煆�", "馃懇鈥嶐煆�", "馃懆鈥嶐煉�", "馃懇鈥嶐煉�", "馃懆鈥嶐煍�", "馃懇鈥嶐煍�", "馃懆鈥嶐煉�", "馃懇鈥嶐煉�", "馃懆鈥嶐煄�", "馃懇鈥嶐煄�", "馃懆鈥嶐煄�", "馃懇鈥嶐煄�", "馃懆鈥嶁湀锔�", "馃懇鈥嶁湀锔�", "馃懆鈥嶐煔€", "馃懇鈥嶐煔€", "馃懆鈥嶐煔�", "馃懇鈥嶐煔�", "馃懏", "馃懏鈥嶁檪锔�", "馃懏鈥嶁檧锔�", "馃暤锔�", "馃暤锔忊€嶁檪锔�", "馃暤锔忊€嶁檧锔�", "馃拏", "馃拏鈥嶁檪锔�", "馃拏鈥嶁檧锔�", "馃懛", "馃懛鈥嶁檪锔�", "馃懛鈥嶁檧锔�", "馃ご", "馃懜", "馃懗", "馃懗鈥嶁檪锔�", "馃懗鈥嶁檧锔�", "馃懖", "馃", "馃さ", "馃懓", "馃ぐ", "馃け", "馃懠", "馃巺", "馃ざ", "馃Ω", "馃Ω鈥嶁檪锔�", "馃Ω鈥嶁檧锔�", "馃", "馃鈥嶁檪锔�", "馃鈥嶁檧锔�", "馃", "馃鈥嶁檪锔�", "馃鈥嶁檧锔�", "馃", "馃鈥嶁檪锔�", "馃鈥嶁檧锔�", "馃", "馃鈥嶁檪锔�", "馃鈥嶁檧锔�", "馃", "馃鈥嶁檪锔�", "馃鈥嶁檧锔�", "馃", "馃鈥嶁檪锔�", "馃鈥嶁檧锔�", "馃拞", "馃拞鈥嶁檪锔�", "馃拞鈥嶁檧锔�", "馃拠", "馃拠鈥嶁檪锔�", "馃拠鈥嶁檧锔�", "馃毝", "馃毝鈥嶁檪锔�", "馃毝鈥嶁檧锔�", "馃", "馃鈥嶁檪锔�", "馃鈥嶁檧锔�", "馃", "馃鈥嶁檪锔�", "馃鈥嶁檧锔�", "馃懆鈥嶐煢�", "馃懇鈥嶐煢�", "馃懆鈥嶐煢�", "馃懇鈥嶐煢�", "馃懆鈥嶐煢�", "馃懇鈥嶐煢�", "馃弮", "馃弮鈥嶁檪锔�", "馃弮鈥嶁檧锔�", "馃拑", "馃暫", "馃暣锔�", "馃", "馃鈥嶁檪锔�", "馃鈥嶁檧锔�", "馃", "馃鈥嶁檪锔�", "馃鈥嶁檧锔�", "馃弴", "馃弬", "馃弻锔�", "馃弻锔忊€嶁檪锔�", "馃弻锔忊€嶁檧锔�", "馃弰", "馃弰鈥嶁檪锔�", "馃弰鈥嶁檧锔�", "馃殻", "馃殻鈥嶁檪锔�", "馃殻鈥嶁檧锔�", "馃強", "馃強鈥嶁檪锔�", "馃強鈥嶁檧锔�", "鉀癸笍", "鉀癸笍鈥嶁檪锔�", "鉀癸笍鈥嶁檧锔�", "馃弸锔�", "馃弸锔忊€嶁檪锔�", "馃弸锔忊€嶁檧锔�", "馃毚", "馃毚鈥嶁檪锔�", "馃毚鈥嶁檧锔�", "馃毜", "馃毜鈥嶁檪锔�", "馃毜鈥嶁檧锔�", "馃じ", "馃じ鈥嶁檪锔�", "馃じ鈥嶁檧锔�", "馃そ", "馃そ鈥嶁檪锔�", "馃そ鈥嶁檧锔�", "馃ぞ", "馃ぞ鈥嶁檪锔�", "馃ぞ鈥嶁檧锔�", "馃す", "馃す鈥嶁檪锔�", "馃す鈥嶁檧锔�", "馃", "馃鈥嶁檪锔�", "馃鈥嶁檧锔�", "馃泙", "馃泴", "馃鈥嶐煠濃€嶐煣�", "馃懎", "馃懌", "馃懍"]);

            function ze(t) {
                return Ye.has(t)
            }

            function Xe(t) {
                return [...t].filter(t => !Ge(t.codePointAt(0))).join("")
            }

            function Qe(t, e) {
                const n = [...t].map(t => t.codePointAt(0));
                return n[1] && (Ge(n[1]) || 65039 === n[1]) ? n[1] = e : n.splice(1, 0, e), String.fromCodePoint(...n)
            }

            function Ge(t) {
                return t >= 127995 && t <= 127999
            }

            function Ze(t) {
                switch (t) {
                    case 1:
                        return 127995;
                    case 2:
                        return 127996;
                    case 3:
                        return 127997;
                    case 4:
                        return 127998;
                    case 5:
                        return 127999;
                    default:
                        return null
                }
            }

            class GEmojiElement extends HTMLElement {
                get image() {
                    return this.firstElementChild instanceof HTMLImageElement ? this.firstElementChild : null
                }

                get tone() {
                    return (this.getAttribute("tone") || "").split(" ").map(t => {
                        const e = parseInt(t, 10);
                        return e >= 0 && e <= 5 ? e : 0
                    }).join(" ")
                }

                set tone(t) {
                    this.setAttribute("tone", t)
                }

                connectedCallback() {
                    if (null === this.image && !function () {
                        const t = /\bWindows NT 6.1\b/.test(navigator.userAgent),
                            e = /\bWindows NT 6.2\b/.test(navigator.userAgent),
                            n = /\bWindows NT 6.3\b/.test(navigator.userAgent),
                            i = /\bFreeBSD\b/.test(navigator.userAgent), s = /\bLinux\b/.test(navigator.userAgent);
                        return !(t || e || n || s || i)
                    }()) {
                        this.textContent = "";
                        const t = function (t) {
                            const e = document.createElement("img");
                            return e.className = "emoji", e.alt = t.getAttribute("alias") || "", e.height = 20, e.width = 20, e
                        }(this);
                        t.src = this.getAttribute("fallback-src") || "", this.appendChild(t)
                    }
                    this.hasAttribute("tone") && Je(this)
                }

                static get observedAttributes() {
                    return ["tone"]
                }

                attributeChangedCallback(t) {
                    switch (t) {
                        case"tone":
                            Je(this)
                    }
                }
            }

            function Je(t) {
                if (t.image) return;
                const e = t.tone.split(" ").map(t => parseInt(t, 10));
                if (0 === e.length) t.textContent = Xe(t.textContent); else if (1 === e.length) {
                    const n = e[0];
                    t.textContent = 0 === n ? Xe(t.textContent) : function (t, e) {
                        const n = Xe(t);
                        if (!ze(n)) return t;
                        const i = Ze(e);
                        return i ? n.split("鈥�").map(t => ze(t) ? Qe(t, i) : t).join("鈥�") : t
                    }(t.textContent, n)
                } else t.textContent = function (t, e) {
                    const n = Xe(t);
                    if (!ze(n)) return t;
                    const i = e.map(t => Ze(t));
                    return n.split("鈥�").map(t => {
                        if (!ze(t)) return t;
                        const e = i.shift();
                        return e ? Qe(t, e) : t
                    }).join("鈥�")
                }(t.textContent, e)
            }

            window.customElements.get("g-emoji") || (window.GEmojiElement = GEmojiElement, window.customElements.define("g-emoji", GEmojiElement));
            const tn = document.createElement("template");
            tn.innerHTML = '\n  <div class="crop-wrapper">\n    <img width="100%" class="crop-image" alt="">\n    <div class="crop-container">\n      <div data-crop-box class="crop-box">\n        <div class="crop-outline"></div>\n        <div data-direction="nw" class="handle nw"></div>\n        <div data-direction="ne" class="handle ne"></div>\n        <div data-direction="sw" class="handle sw"></div>\n        <div data-direction="se" class="handle se"></div>\n      </div>\n    </div>\n  </div>\n';
            const en = new WeakMap, nn = new WeakMap, sn = new WeakMap;

            function rn(t) {
                const e = t.currentTarget;
                if (!(e instanceof ImageCropElement)) return;
                const {box: n, image: i} = sn.get(e) || {};
                let s = 0, r = 0;
                if ("keydown" === t.type) "ArrowUp" === t.key ? r = -1 : "ArrowDown" === t.key ? r = 1 : "ArrowLeft" === t.key ? s = -1 : "ArrowRight" === t.key && (s = 1); else if (nn.has(e) && t instanceof MouseEvent) {
                    const n = nn.get(e);
                    if (!n) return;
                    s = t.pageX - n.dragStartX, r = t.pageY - n.dragStartY
                }
                if (0 !== s || 0 !== r) {
                    const t = Math.min(Math.max(0, n.offsetLeft + s), i.width - n.offsetWidth),
                        o = Math.min(Math.max(0, n.offsetTop + r), i.height - n.offsetHeight);
                    n.style.left = "".concat(t, "px"), n.style.top = "".concat(o, "px"), hn(e, {
                        x: t,
                        y: o,
                        width: n.offsetWidth,
                        height: n.offsetHeight
                    })
                }
                t instanceof MouseEvent && nn.set(e, {dragStartX: t.pageX, dragStartY: t.pageY})
            }

            function on(t) {
                const e = t.target;
                if (!(e instanceof HTMLElement)) return;
                const n = e.closest("image-crop");
                if (!(n instanceof ImageCropElement)) return;
                const {box: i} = sn.get(n) || {}, s = n.getBoundingClientRect();
                let r, o, a;
                if (t.key) {
                    if ("Escape" === t.key) return un(n);
                    if ("-" === t.key && (a = -10), "=" === t.key && (a = 10), !a) return;
                    r = i.offsetWidth + a, o = i.offsetHeight + a, en.set(n, {
                        startX: i.offsetLeft,
                        startY: i.offsetTop
                    })
                } else if (t instanceof MouseEvent) {
                    const e = en.get(n);
                    if (!e) return;
                    r = t.pageX - e.startX - s.left - window.pageXOffset, o = t.pageY - e.startY - s.top - window.pageYOffset
                }
                r && o && cn(n, r, o, !(t instanceof KeyboardEvent))
            }

            function an(t) {
                const e = t.currentTarget;
                if (!(e instanceof HTMLElement)) return;
                const n = e.closest("image-crop");
                if (!(n instanceof ImageCropElement)) return;
                const {box: i} = sn.get(n) || {}, s = t.target;
                if (s instanceof HTMLElement) if (s.hasAttribute("data-direction")) {
                    const e = s.getAttribute("data-direction");
                    n.addEventListener("mousemove", on), ["nw", "se"].indexOf(e) >= 0 && n.classList.add("nwse"), ["ne", "sw"].indexOf(e) >= 0 && n.classList.add("nesw"), en.set(n, {
                        startX: i.offsetLeft + (["se", "ne"].indexOf(e) >= 0 ? 0 : i.offsetWidth),
                        startY: i.offsetTop + (["se", "sw"].indexOf(e) >= 0 ? 0 : i.offsetHeight)
                    }), on(t)
                } else n.addEventListener("mousemove", rn)
            }

            function cn(t, e, n) {
                let i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                    s = Math.max(Math.abs(e), Math.abs(n), 10);
                const r = en.get(t);
                if (!r) return;
                const {box: o, image: a} = sn.get(t) || {};
                s = Math.min(s, n > 0 ? a.height - r.startY : r.startY, e > 0 ? a.width - r.startX : r.startX);
                const c = i ? Math.round(Math.max(0, e > 0 ? r.startX : r.startX - s)) : o.offsetLeft,
                    l = i ? Math.round(Math.max(0, n > 0 ? r.startY : r.startY - s)) : o.offsetTop;
                o.style.left = "".concat(c, "px"), o.style.top = "".concat(l, "px"), o.style.width = "".concat(s, "px"), o.style.height = "".concat(s, "px"), hn(t, {
                    x: c,
                    y: l,
                    width: s,
                    height: s
                })
            }

            function ln(t) {
                const e = t.currentTarget;
                if (!(e instanceof HTMLElement)) return;
                const n = e.closest("image-crop");
                n instanceof ImageCropElement && (n.loaded = !0, un(n))
            }

            function un(t) {
                const {image: e} = sn.get(t) || {},
                    n = Math.round(e.clientWidth > e.clientHeight ? e.clientHeight : e.clientWidth);
                en.set(t, {startX: (e.clientWidth - n) / 2, startY: (e.clientHeight - n) / 2}), cn(t, n, n)
            }

            function dn(t) {
                const e = t.currentTarget;
                e instanceof ImageCropElement && (nn.delete(e), e.classList.remove("nwse", "nesw"), e.removeEventListener("mousemove", on), e.removeEventListener("mousemove", rn))
            }

            function hn(t, e) {
                const {image: n} = sn.get(t) || {}, i = n.naturalWidth / n.width;
                for (const s in e) {
                    const n = Math.round(e[s] * i);
                    e[s] = n;
                    const r = t.querySelector("[data-image-crop-input='".concat(s, "']"));
                    r instanceof HTMLInputElement && (r.value = n.toString())
                }
                t.dispatchEvent(new CustomEvent("image-crop-change", {bubbles: !0, detail: e}))
            }

            class ImageCropElement extends HTMLElement {
                connectedCallback() {
                    if (sn.has(this)) return;
                    this.appendChild(document.importNode(tn.content, !0));
                    const t = this.querySelector("[data-crop-box]");
                    if (!(t instanceof HTMLElement)) return;
                    const e = this.querySelector("img");
                    e instanceof HTMLImageElement && (sn.set(this, {
                        box: t,
                        image: e
                    }), e.addEventListener("load", ln), this.addEventListener("mouseleave", dn), this.addEventListener("mouseup", dn), t.addEventListener("mousedown", an), this.addEventListener("keydown", rn), this.addEventListener("keydown", on), this.src && (e.src = this.src))
                }

                static get observedAttributes() {
                    return ["src"]
                }

                get src() {
                    return this.getAttribute("src")
                }

                set src(t) {
                    t ? this.setAttribute("src", t) : this.removeAttribute("src")
                }

                get loaded() {
                    return this.hasAttribute("loaded")
                }

                set loaded(t) {
                    t ? this.setAttribute("loaded", "") : this.removeAttribute("loaded")
                }

                attributeChangedCallback(t, e, n) {
                    const {image: i} = sn.get(this) || {};
                    "src" === t && (this.loaded = !1, i && (i.src = n))
                }
            }

            window.customElements.get("image-crop") || (window.ImageCropElement = ImageCropElement, window.customElements.define("image-crop", ImageCropElement));
            const mn = new WeakMap;

            function fn(t, e) {
                setTimeout((function () {
                    e.dispatchEvent(new Event(t))
                }), 0)
            }

            function pn(t) {
                return gn(t).then((function (e) {
                    const n = t.parentNode;
                    n && (t.insertAdjacentHTML("afterend", e), n.removeChild(t))
                }), (function () {
                    t.classList.add("is-error")
                }))
            }

            function gn(t) {
                const e = t.src;
                let n = mn.get(t);
                return n && n.src === e ? n.data : (n = e ? t.load() : Promise.reject(new Error("missing src")), mn.set(t, {
                    src: e,
                    data: n
                }), n)
            }

            class IncludeFragmentElement extends HTMLElement {
                constructor() {
                    super()
                }

                static get observedAttributes() {
                    return ["src"]
                }

                get src() {
                    const t = this.getAttribute("src");
                    if (t) {
                        const e = this.ownerDocument.createElement("a");
                        return e.href = t, e.href
                    }
                    return ""
                }

                set src(t) {
                    this.setAttribute("src", t)
                }

                get accept() {
                    return this.getAttribute("accept")
                }

                set accept(t) {
                    this.setAttribute("accept", t)
                }

                get data() {
                    return gn(this)
                }

                attributeChangedCallback(t) {
                    "src" === t && this._attached && pn(this)
                }

                connectedCallback() {
                    this._attached = !0, this.src && pn(this)
                }

                disconnectedCallback() {
                    this._attached = !1
                }

                request() {
                    const t = this.src;
                    if (!t) throw new Error("missing src");
                    return new Request(t, {
                        method: "GET",
                        credentials: "same-origin",
                        headers: {Accept: this.accept || "text/html"}
                    })
                }

                load() {
                    return Promise.resolve().then(() => (fn("loadstart", this), this.fetch(this.request()))).then(t => {
                        if (200 !== t.status) throw new Error("Failed to load resource: the server responded with a status of ".concat(t.status));
                        const e = t.headers.get("Content-Type");
                        if (!(n = this.accept, n && n.split(",").find(t => t.match(/^\s*\*\/\*/)) || e && e.includes(this.accept ? this.accept : "text/html"))) throw new Error("Failed to load resource: expected ".concat(this.accept || "text/html", " but was ").concat(e));
                        var n;
                        return t
                    }).then(t => t.text()).then(t => (fn("load", this), fn("loadend", this), t), t => {
                        throw fn("error", this), fn("loadend", this), t
                    })
                }

                fetch(t) {
                    return fetch(t)
                }
            }

            function vn(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            t("I", IncludeFragmentElement), window.customElements.get("include-fragment") || (window.IncludeFragmentElement = IncludeFragmentElement, window.customElements.define("include-fragment", IncludeFragmentElement));
            const bn = ["[data-md-button]", "md-header", "md-bold", "md-italic", "md-quote", "md-code", "md-link", "md-image", "md-unordered-list", "md-ordered-list", "md-task-list", "md-mention", "md-ref"];

            function En(t) {
                const e = [];
                for (const n of t.querySelectorAll(bn.join(", "))) n.hidden || n.offsetWidth <= 0 && n.offsetHeight <= 0 || n.closest("markdown-toolbar") === t && e.push(n);
                return e
            }

            const wn = new WeakMap;

            class MarkdownButtonElement extends HTMLElement {
                constructor() {
                    super();
                    const t = () => {
                        const t = wn.get(this);
                        t && Hn(this, t)
                    };
                    var e;
                    this.addEventListener("keydown", (e = t, function (t) {
                        " " !== t.key && "Enter" !== t.key || (t.preventDefault(), e(t))
                    })), this.addEventListener("click", t)
                }

                connectedCallback() {
                    this.hasAttribute("role") || this.setAttribute("role", "button")
                }

                click() {
                    const t = wn.get(this);
                    t && Hn(this, t)
                }
            }

            class MarkdownHeaderButtonElement extends MarkdownButtonElement {
                constructor() {
                    super();
                    const t = parseInt(this.getAttribute("level") || 3, 10);
                    if (t < 1 || t > 6) return;
                    const e = "".concat("#".repeat(t), " ");
                    wn.set(this, {prefix: e})
                }
            }

            window.customElements.get("md-header") || (window.MarkdownHeaderButtonElement = MarkdownHeaderButtonElement, window.customElements.define("md-header", MarkdownHeaderButtonElement));

            class MarkdownBoldButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), wn.set(this, {prefix: "**", suffix: "**", trimFirst: !0})
                }

                connectedCallback() {
                    super.connectedCallback(), this.setAttribute("hotkey", "b")
                }
            }

            window.customElements.get("md-bold") || (window.MarkdownBoldButtonElement = MarkdownBoldButtonElement, window.customElements.define("md-bold", MarkdownBoldButtonElement));

            class MarkdownItalicButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), wn.set(this, {prefix: "_", suffix: "_", trimFirst: !0})
                }

                connectedCallback() {
                    super.connectedCallback(), this.setAttribute("hotkey", "i")
                }
            }

            window.customElements.get("md-italic") || (window.MarkdownItalicButtonElement = MarkdownItalicButtonElement, window.customElements.define("md-italic", MarkdownItalicButtonElement));

            class MarkdownQuoteButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), wn.set(this, {prefix: "> ", multiline: !0, surroundWithNewlines: !0})
                }
            }

            window.customElements.get("md-quote") || (window.MarkdownQuoteButtonElement = MarkdownQuoteButtonElement, window.customElements.define("md-quote", MarkdownQuoteButtonElement));

            class MarkdownCodeButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), wn.set(this, {prefix: "`", suffix: "`", blockPrefix: "```", blockSuffix: "```"})
                }
            }

            window.customElements.get("md-code") || (window.MarkdownCodeButtonElement = MarkdownCodeButtonElement, window.customElements.define("md-code", MarkdownCodeButtonElement));

            class MarkdownLinkButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), wn.set(this, {prefix: "[", suffix: "](url)", replaceNext: "url", scanFor: "https?://"})
                }

                connectedCallback() {
                    super.connectedCallback(), this.setAttribute("hotkey", "k")
                }
            }

            window.customElements.get("md-link") || (window.MarkdownLinkButtonElement = MarkdownLinkButtonElement, window.customElements.define("md-link", MarkdownLinkButtonElement));

            class MarkdownImageButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), wn.set(this, {prefix: "![", suffix: "](url)", replaceNext: "url", scanFor: "https?://"})
                }
            }

            window.customElements.get("md-image") || (window.MarkdownImageButtonElement = MarkdownImageButtonElement, window.customElements.define("md-image", MarkdownImageButtonElement));

            class MarkdownUnorderedListButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), wn.set(this, {prefix: "- ", multiline: !0, surroundWithNewlines: !0})
                }
            }

            window.customElements.get("md-unordered-list") || (window.MarkdownUnorderedListButtonElement = MarkdownUnorderedListButtonElement, window.customElements.define("md-unordered-list", MarkdownUnorderedListButtonElement));

            class MarkdownOrderedListButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), wn.set(this, {prefix: "1. ", multiline: !0, orderedList: !0})
                }
            }

            window.customElements.get("md-ordered-list") || (window.MarkdownOrderedListButtonElement = MarkdownOrderedListButtonElement, window.customElements.define("md-ordered-list", MarkdownOrderedListButtonElement));

            class MarkdownTaskListButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), wn.set(this, {prefix: "- [ ] ", multiline: !0, surroundWithNewlines: !0})
                }

                connectedCallback() {
                    super.connectedCallback(), this.setAttribute("hotkey", "L")
                }
            }

            window.customElements.get("md-task-list") || (window.MarkdownTaskListButtonElement = MarkdownTaskListButtonElement, window.customElements.define("md-task-list", MarkdownTaskListButtonElement));

            class MarkdownMentionButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), wn.set(this, {prefix: "@", prefixSpace: !0})
                }
            }

            window.customElements.get("md-mention") || (window.MarkdownMentionButtonElement = MarkdownMentionButtonElement, window.customElements.define("md-mention", MarkdownMentionButtonElement));

            class MarkdownRefButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), wn.set(this, {prefix: "#", prefixSpace: !0})
                }
            }

            window.customElements.get("md-ref") || (window.MarkdownRefButtonElement = MarkdownRefButtonElement, window.customElements.define("md-ref", MarkdownRefButtonElement));
            const yn = navigator.userAgent.match(/Macintosh/) ? "Meta" : "Control";

            class MarkdownToolbarElement extends HTMLElement {
                constructor() {
                    super()
                }

                connectedCallback() {
                    this.hasAttribute("role") || this.setAttribute("role", "toolbar"), this.addEventListener("keydown", An);
                    const t = Tn.bind(null, this);
                    this.field && (this.field.addEventListener("keydown", t), kn.set(this, t)), this.setAttribute("tabindex", "0"), this.addEventListener("focus", xn, {once: !0})
                }

                disconnectedCallback() {
                    const t = kn.get(this);
                    t && this.field && (this.field.removeEventListener("keydown", t), kn.delete(this)), this.removeEventListener("keydown", An)
                }

                get field() {
                    const t = this.getAttribute("for");
                    if (!t) return;
                    const e = document.getElementById(t);
                    return e instanceof HTMLTextAreaElement ? e : null
                }
            }

            function xn(t) {
                let {target: e} = t;
                if (!(e instanceof Element)) return;
                e.removeAttribute("tabindex");
                let n = "0";
                for (const i of En(e)) i.setAttribute("tabindex", n), "0" === n && (i.focus(), n = "-1")
            }

            function An(t) {
                const e = t.key;
                if ("ArrowRight" !== e && "ArrowLeft" !== e && "Home" !== e && "End" !== e) return;
                const n = t.currentTarget;
                if (!(n instanceof HTMLElement)) return;
                const i = En(n), s = i.indexOf(t.target), r = i.length;
                if (-1 === s) return;
                let o = 0;
                "ArrowLeft" === e && (o = s - 1), "ArrowRight" === e && (o = s + 1), "End" === e && (o = r - 1), o < 0 && (o = r - 1), o > r - 1 && (o = 0);
                for (let a = 0; a < r; a += 1) i[a].setAttribute("tabindex", a === o ? "0" : "-1");
                t.preventDefault(), i[o].focus()
            }

            const kn = new WeakMap;

            function Tn(t, e) {
                if (e.metaKey && "Meta" === yn || e.ctrlKey && "Control" === yn) {
                    const n = t.querySelector('[hotkey="'.concat(e.key, '"]'));
                    n && (n.click(), e.preventDefault())
                }
            }

            function Mn(t) {
                return t.trim().split("\n").length > 1
            }

            function Ln(t, e) {
                return Array(e + 1).join(t)
            }

            function Cn(t, e) {
                let n = e;
                for (; t[n] && null != t[n - 1] && !t[n - 1].match(/\s/);) n--;
                return n
            }

            function Sn(t, e, n) {
                let i = e;
                const s = n ? /\n/ : /\s/;
                for (; t[i] && !t[i].match(s);) i++;
                return i
            }

            window.customElements.get("markdown-toolbar") || (window.MarkdownToolbarElement = MarkdownToolbarElement, window.customElements.define("markdown-toolbar", MarkdownToolbarElement));
            let _n = null;

            function In(t, e) {
                const n = t.value.slice(t.selectionStart, t.selectionEnd);
                let i;
                i = e.orderedList ? function (t) {
                    const e = /^\d+\.\s+/, n = t.selectionStart === t.selectionEnd;
                    let i, s, r, o, a = t.value.slice(t.selectionStart, t.selectionEnd), c = a, l = a.split("\n");
                    if (n) {
                        const e = t.value.slice(0, t.selectionStart).split(/\n/);
                        r = t.selectionStart - e[e.length - 1].length, o = Sn(t.value, t.selectionStart, !0), c = t.value.slice(r, o)
                    }
                    const u = c.split("\n");
                    if (u.every(t => e.test(t))) {
                        if (l = u.map(t => t.replace(e, "")), a = l.join("\n"), n && r && o) {
                            const e = u[0].length - l[0].length;
                            s = i = t.selectionStart - e, t.selectionStart = r, t.selectionEnd = o
                        }
                    } else {
                        l = function () {
                            let t, e, n;
                            const i = [];
                            for (n = t = 0, e = l.length; t < e; n = ++t) {
                                const t = l[n];
                                i.push("".concat(n + 1, ". ").concat(t))
                            }
                            return i
                        }(), a = l.join("\n");
                        const {newlinesToAppend: e, newlinesToPrepend: r} = Dn(t);
                        s = t.selectionStart + e.length, i = s + a.length, n && (s = i), a = e + a + r
                    }
                    return {text: a, selectionStart: s, selectionEnd: i}
                }(t) : e.multiline && Mn(n) ? function (t, e) {
                    const {prefix: n, suffix: i, surroundWithNewlines: s} = e;
                    let r = t.value.slice(t.selectionStart, t.selectionEnd), o = t.selectionStart, a = t.selectionEnd;
                    const c = r.split("\n");
                    if (c.every(t => t.startsWith(n) && t.endsWith(i))) r = c.map(t => t.slice(n.length, t.length - i.length)).join("\n"), a = o + r.length; else if (r = c.map(t => n + t + i).join("\n"), s) {
                        const {newlinesToAppend: e, newlinesToPrepend: n} = Dn(t);
                        o += e.length, a = o + r.length, r = e + r + n
                    }
                    return {text: r, selectionStart: o, selectionEnd: a}
                }(t, e) : function (t, e) {
                    let n, i;
                    const {
                        prefix: s,
                        suffix: r,
                        blockPrefix: o,
                        blockSuffix: a,
                        replaceNext: c,
                        prefixSpace: l,
                        scanFor: u,
                        surroundWithNewlines: d
                    } = e, h = t.selectionStart, m = t.selectionEnd;
                    let f = t.value.slice(t.selectionStart, t.selectionEnd),
                        p = Mn(f) && o.length > 0 ? "".concat(o, "\n") : s,
                        g = Mn(f) && a.length > 0 ? "\n".concat(a) : r;
                    if (l) {
                        const e = t.value[t.selectionStart - 1];
                        0 === t.selectionStart || null == e || e.match(/\s/) || (p = " ".concat(p))
                    }
                    f = function (t, e, n) {
                        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        if (t.selectionStart === t.selectionEnd) t.selectionStart = Cn(t.value, t.selectionStart), t.selectionEnd = Sn(t.value, t.selectionEnd, i); else {
                            const i = t.selectionStart - e.length, s = t.selectionEnd + n.length,
                                r = t.value.slice(i, t.selectionStart) === e,
                                o = t.value.slice(t.selectionEnd, s) === n;
                            r && o && (t.selectionStart = i, t.selectionEnd = s)
                        }
                        return t.value.slice(t.selectionStart, t.selectionEnd)
                    }(t, p, g, e.multiline);
                    let v = t.selectionStart, b = t.selectionEnd;
                    const E = c.length > 0 && g.indexOf(c) > -1 && f.length > 0;
                    if (d) {
                        const e = Dn(t);
                        n = e.newlinesToAppend, i = e.newlinesToPrepend, p = n + s, g += i
                    }
                    if (f.startsWith(p) && f.endsWith(g)) {
                        const t = f.slice(p.length, f.length - g.length);
                        if (h === m) {
                            let e = h - p.length;
                            e = Math.max(e, v), e = Math.min(e, v + t.length), v = b = e
                        } else b = v + t.length;
                        return {text: t, selectionStart: v, selectionEnd: b}
                    }
                    if (E) {
                        if (u.length > 0 && f.match(u)) {
                            g = g.replace(c, f);
                            const t = p + g;
                            return v = b = v + p.length, {text: t, selectionStart: v, selectionEnd: b}
                        }
                        {
                            const t = p + f + g;
                            return v = v + p.length + f.length + g.indexOf(c), b = v + c.length, {
                                text: t,
                                selectionStart: v,
                                selectionEnd: b
                            }
                        }
                    }
                    {
                        let t = p + f + g;
                        v = h + p.length, b = m + p.length;
                        const n = f.match(/^\s*|\s*$/g);
                        if (e.trimFirst && n) {
                            const e = n[0] || "", i = n[1] || "";
                            t = e + p + f.trim() + g + i, v += e.length, b -= i.length
                        }
                        return {text: t, selectionStart: v, selectionEnd: b}
                    }
                }(t, e), function (t, e) {
                    let {text: n, selectionStart: i, selectionEnd: s} = e;
                    const r = t.selectionStart, o = t.value.slice(0, r), a = t.value.slice(t.selectionEnd);
                    if (null === _n || !0 === _n) {
                        t.contentEditable = "true";
                        try {
                            _n = document.execCommand("insertText", !1, n)
                        } catch (c) {
                            _n = !1
                        }
                        t.contentEditable = "false"
                    }
                    if (_n && !t.value.slice(0, t.selectionStart).endsWith(n) && (_n = !1), !_n) {
                        try {
                            document.execCommand("ms-beginUndoUnit")
                        } catch (l) {
                        }
                        t.value = o + n + a;
                        try {
                            document.execCommand("ms-endUndoUnit")
                        } catch (l) {
                        }
                        t.dispatchEvent(new CustomEvent("input", {bubbles: !0, cancelable: !0}))
                    }
                    null != i && null != s ? t.setSelectionRange(i, s) : t.setSelectionRange(r, t.selectionEnd)
                }(t, i)
            }

            function Dn(t) {
                const e = t.value.slice(0, t.selectionStart), n = t.value.slice(t.selectionEnd), i = e.match(/\n*$/),
                    s = n.match(/^\n*/), r = i ? i[0].length : 0, o = s ? s[0].length : 0;
                let a, c;
                return e.match(/\S/) && r < 2 && (a = Ln("\n", 2 - r)), n.match(/\S/) && o < 2 && (c = Ln("\n", 2 - o)), null == a && (a = ""), null == c && (c = ""), {
                    newlinesToAppend: a,
                    newlinesToPrepend: c
                }
            }

            function Hn(t, e) {
                const n = t.closest("markdown-toolbar");
                if (!(n instanceof MarkdownToolbarElement)) return;
                const i = function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {}, i = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function (t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        })))), i.forEach((function (e) {
                            vn(t, e, n[e])
                        }))
                    }
                    return t
                }({}, {
                    prefix: "",
                    suffix: "",
                    blockPrefix: "",
                    blockSuffix: "",
                    multiline: !1,
                    replaceNext: "",
                    prefixSpace: !1,
                    scanFor: "",
                    surroundWithNewlines: !1,
                    orderedList: !1,
                    trimFirst: !1
                }, e), s = n.field;
                s && (s.focus(), In(s, i))
            }

            t("M", MarkdownToolbarElement);
            const qn = new WeakMap;

            class RemoteInputElement extends HTMLElement {
                constructor() {
                    super();
                    const t = Nn.bind(null, this, !0),
                        e = {currentQuery: null, oninput: Bn(t), fetch: t, controller: null};
                    qn.set(this, e)
                }

                static get observedAttributes() {
                    return ["src"]
                }

                attributeChangedCallback(t, e) {
                    e && "src" === t && Nn(this, !1)
                }

                connectedCallback() {
                    const t = this.input;
                    if (!t) return;
                    t.setAttribute("autocomplete", "off"), t.setAttribute("spellcheck", "false");
                    const e = qn.get(this);
                    e && (t.addEventListener("focus", e.fetch), t.addEventListener("change", e.fetch), t.addEventListener("input", e.oninput))
                }

                disconnectedCallback() {
                    const t = this.input;
                    if (!t) return;
                    const e = qn.get(this);
                    e && (t.removeEventListener("focus", e.fetch), t.removeEventListener("change", e.fetch), t.removeEventListener("input", e.oninput))
                }

                get input() {
                    const t = this.querySelector("input, textarea");
                    return t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement ? t : null
                }

                get src() {
                    return this.getAttribute("src") || ""
                }

                set src(t) {
                    this.setAttribute("src", t)
                }
            }

            async function Nn(t, e) {
                const n = t.input;
                if (!n) return;
                const i = qn.get(t);
                if (!i) return;
                const s = n.value;
                if (e && i.currentQuery === s) return;
                i.currentQuery = s;
                const r = t.src;
                if (!r) return;
                const o = document.getElementById(t.getAttribute("aria-owns") || "");
                if (!o) return;
                const a = new URL(r, window.location.href), c = new URLSearchParams(a.search);
                let l;
                c.append(t.getAttribute("param") || "q", s), a.search = c.toString(), i.controller ? i.controller.abort() : (t.dispatchEvent(new CustomEvent("loadstart")), t.setAttribute("loading", "")), i.controller = "AbortController" in window ? new AbortController : {
                    signal: null,
                    abort() {
                    }
                };
                let u = "";
                try {
                    l = await async function (t, e, n) {
                        try {
                            const i = await fetch(e, n);
                            return t.dispatchEvent(new CustomEvent("load")), t.dispatchEvent(new CustomEvent("loadend")), i
                        } catch (i) {
                            throw"AbortError" !== i.name && (t.dispatchEvent(new CustomEvent("error")), t.dispatchEvent(new CustomEvent("loadend"))), i
                        }
                    }(t, a.toString(), {
                        signal: i.controller.signal,
                        credentials: "same-origin",
                        headers: {accept: "text/fragment+html"}
                    }), u = await l.text(), t.removeAttribute("loading"), i.controller = null
                } catch (d) {
                    return void ("AbortError" !== d.name && (t.removeAttribute("loading"), i.controller = null))
                }
                l && l.ok ? (o.innerHTML = u, t.dispatchEvent(new CustomEvent("remote-input-success", {bubbles: !0}))) : t.dispatchEvent(new CustomEvent("remote-input-error", {bubbles: !0}))
            }

            function Bn(t) {
                let e;
                return function () {
                    clearTimeout(e), e = setTimeout(() => {
                        clearTimeout(e), t()
                    }, 300)
                }
            }

            t("R", RemoteInputElement), window.customElements.get("remote-input") || (window.RemoteInputElement = RemoteInputElement, window.customElements.define("remote-input", RemoteInputElement));

            class TabContainerElement extends HTMLElement {
                constructor() {
                    super(), this.addEventListener("keydown", t => {
                        const e = t.target;
                        if (!(e instanceof HTMLElement)) return;
                        if ("tab" !== e.getAttribute("role") && !e.closest('[role="tablist"]')) return;
                        const n = Array.from(this.querySelectorAll('[role="tablist"] [role="tab"]')),
                            i = n.indexOf(n.find(t => t.matches('[aria-selected="true"]')));
                        if ("ArrowRight" === t.code) {
                            let t = i + 1;
                            t >= n.length && (t = 0), Fn(this, t)
                        } else if ("ArrowLeft" === t.code) {
                            let t = i - 1;
                            t < 0 && (t = n.length - 1), Fn(this, t)
                        } else "Home" === t.code ? (Fn(this, 0), t.preventDefault()) : "End" === t.code && (Fn(this, n.length - 1), t.preventDefault())
                    }), this.addEventListener("click", t => {
                        const e = Array.from(this.querySelectorAll('[role="tablist"] [role="tab"]'));
                        if (!(t.target instanceof Element)) return;
                        const n = t.target.closest('[role="tab"]');
                        n && n.closest('[role="tablist"]') && Fn(this, e.indexOf(n))
                    })
                }

                connectedCallback() {
                    for (const t of this.querySelectorAll('[role="tablist"] [role="tab"]')) t.hasAttribute("aria-selected") || t.setAttribute("aria-selected", "false"), t.hasAttribute("tabindex") || ("true" === t.getAttribute("aria-selected") ? t.setAttribute("tabindex", "0") : t.setAttribute("tabindex", "-1"))
                }
            }

            function Fn(t, e) {
                const n = t.querySelectorAll('[role="tablist"] [role="tab"]'),
                    i = t.querySelectorAll('[role="tabpanel"]'), s = n[e], r = i[e];
                if (!!t.dispatchEvent(new CustomEvent("tab-container-change", {
                    bubbles: !0,
                    cancelable: !0,
                    detail: {relatedTarget: r}
                }))) {
                    for (const t of n) t.setAttribute("aria-selected", "false"), t.setAttribute("tabindex", "-1");
                    for (const t of i) t.hidden = !0, t.hasAttribute("tabindex") || t.hasAttribute("data-tab-container-no-tabstop") || t.setAttribute("tabindex", "0");
                    s.setAttribute("aria-selected", "true"), s.setAttribute("tabindex", "0"), s.focus(), r.hidden = !1, t.dispatchEvent(new CustomEvent("tab-container-changed", {
                        bubbles: !0,
                        detail: {relatedTarget: r}
                    }))
                }
            }

            t("e", TabContainerElement), window.customElements.get("tab-container") || (window.TabContainerElement = TabContainerElement, window.customElements.define("tab-container", TabContainerElement));
            const Pn = new WeakMap;
            let On = null;

            function Rn(t, e) {
                return t.closest("task-lists") === e.closest("task-lists")
            }

            function Wn(t) {
                if (t.currentTarget !== t.target) return;
                const e = t.currentTarget;
                if (!(e instanceof Element)) return;
                const n = e.closest(".contains-task-list");
                if (!n) return;
                if (e.classList.add("is-ghost"), t.dataTransfer && t.dataTransfer.setData("text/plain", e.textContent.trim()), !e.parentElement) return;
                const i = Array.from(e.parentElement.children), s = i.indexOf(e), r = Pn.get(e);
                r && r.sortStarted(n), On = {
                    didDrop: !1,
                    dragging: e,
                    dropzone: e,
                    sourceList: n,
                    sourceSibling: i[s + 1] || null,
                    sourceIndex: s
                }
            }

            function Vn(t) {
                if (!On) return;
                const e = t.currentTarget;
                e instanceof Element && (Rn(On.dragging, e) ? (t.preventDefault(), t.dataTransfer && (t.dataTransfer.dropEffect = "move"), On.dropzone !== e && (On.dragging.classList.add("is-dragging"), On.dropzone = e, !function (t, e) {
                    if (t.parentNode === e.parentNode) {
                        let n = t;
                        for (; n;) {
                            if (n === e) return !0;
                            n = n.previousElementSibling
                        }
                    }
                    return !1
                }(On.dragging, e) ? e.after(On.dragging) : e.before(On.dragging))) : t.stopPropagation())
            }

            function jn(t) {
                if (!On) return;
                t.preventDefault(), t.stopPropagation();
                const e = t.currentTarget;
                if (!(e instanceof Element)) return;
                if (On.didDrop = !0, !On.dragging.parentElement) return;
                let n = Array.from(On.dragging.parentElement.children).indexOf(On.dragging);
                const i = e.closest(".contains-task-list");
                if (!i) return;
                if (On.sourceIndex === n && On.sourceList === i) return;
                On.sourceList === i && On.sourceIndex < n && n++;
                const s = {list: On.sourceList, index: On.sourceIndex}, r = {list: i, index: n},
                    o = Pn.get(On.dragging);
                o && o.sortFinished({src: s, dst: r})
            }

            function $n() {
                On && (On.dragging.classList.remove("is-dragging"), On.dragging.classList.remove("is-ghost"), On.didDrop || On.sourceList.insertBefore(On.dragging, On.sourceSibling), On = null)
            }

            function Un(t) {
                if (!On) return;
                const e = t.currentTarget;
                e instanceof Element && (Rn(On.dragging, e) ? (t.preventDefault(), t.dataTransfer && (t.dataTransfer.dropEffect = "move")) : t.stopPropagation())
            }

            const Kn = new WeakMap;

            class TaskListsElement extends HTMLElement {
                constructor() {
                    super(), this.addEventListener("change", t => {
                        const e = t.target;
                        e instanceof HTMLInputElement && e.classList.contains("task-list-item-checkbox") && this.dispatchEvent(new CustomEvent("task-lists-check", {
                            bubbles: !0,
                            detail: {position: Zn(e), checked: e.checked}
                        }))
                    }), Kn.set(this, new MutationObserver(ei.bind(null, this)))
                }

                connectedCallback() {
                    const t = Kn.get(this);
                    t && t.observe(this, {childList: !0, subtree: !0}), ei(this)
                }

                disconnectedCallback() {
                    const t = Kn.get(this);
                    t && t.disconnect()
                }

                get disabled() {
                    return this.hasAttribute("disabled")
                }

                set disabled(t) {
                    t ? this.setAttribute("disabled", "") : this.removeAttribute("disabled")
                }

                get sortable() {
                    return this.hasAttribute("sortable")
                }

                set sortable(t) {
                    t ? this.setAttribute("sortable", "") : this.removeAttribute("sortable")
                }

                static get observedAttributes() {
                    return ["disabled"]
                }

                attributeChangedCallback(t, e, n) {
                    if (e !== n) switch (t) {
                        case"disabled":
                            ni(this)
                    }
                }
            }

            const Yn = document.createElement("template");
            Yn.innerHTML = '\n  <span class="handle">\n    <svg class="drag-handle" aria-hidden="true" width="16" height="15" version="1.1" viewBox="0 0 16 15">\n      <path d="M12,4V5H4V4h8ZM4,8h8V7H4V8Zm0,3h8V10H4v1Z"></path>\n    </svg>\n  </span>';
            const zn = new WeakMap;

            function Xn(t) {
                if (zn.get(t)) return;
                zn.set(t, !0);
                const e = t.closest("task-lists");
                if (!(e instanceof TaskListsElement)) return;
                if (e.querySelectorAll(".task-list-item").length <= 1) return;
                const n = Yn.content.cloneNode(!0), i = n.querySelector(".handle");
                if (t.prepend(n), !i) throw new Error("handle not found");
                i.addEventListener("mouseenter", ai), i.addEventListener("mouseleave", ci), function (t, e, n) {
                    Pn.set(t, {
                        sortStarted: e,
                        sortFinished: n
                    }), t.addEventListener("dragstart", Wn), t.addEventListener("dragenter", Vn), t.addEventListener("dragend", $n), t.addEventListener("drop", jn), t.addEventListener("dragover", Un)
                }(t, ri, oi), t.addEventListener("mouseenter", Qn), t.addEventListener("mouseleave", Gn)
            }

            function Qn(t) {
                const e = t.currentTarget;
                if (!(e instanceof Element)) return;
                const n = e.closest("task-lists");
                n instanceof TaskListsElement && n.sortable && !n.disabled && e.classList.add("hovered")
            }

            function Gn(t) {
                const e = t.currentTarget;
                e instanceof Element && e.classList.remove("hovered")
            }

            function Zn(t) {
                const e = Jn(t);
                if (!e) throw new Error(".contains-task-list not found");
                const n = Array.from(e.children).indexOf(t.closest(".task-list-item"));
                return [ii(e), n]
            }

            function Jn(t) {
                const e = t.parentElement;
                return e ? e.closest(".contains-task-list") : null
            }

            function ti(t) {
                return Jn(t) === function t(e) {
                    const n = Jn(e);
                    return n ? t(n) || n : null
                }(t)
            }

            function ei(t) {
                const e = t.querySelectorAll(".contains-task-list > .task-list-item");
                for (const n of e) ti(n) && Xn(n);
                ni(t)
            }

            function ni(t) {
                for (const e of t.querySelectorAll(".task-list-item")) e.classList.toggle("enabled", !t.disabled);
                for (const e of t.querySelectorAll(".task-list-item-checkbox")) e instanceof HTMLInputElement && (e.disabled = t.disabled)
            }

            function ii(t) {
                const e = t.closest("task-lists");
                if (!e) throw new Error("parent not found");
                return Array.from(e.querySelectorAll("ol, ul")).indexOf(t)
            }

            const si = new WeakMap;

            function ri(t) {
                const e = t.closest("task-lists");
                if (!e) throw new Error("parent not found");
                si.set(e, Array.from(e.querySelectorAll("ol, ul")))
            }

            function oi(t) {
                let {src: e, dst: n} = t;
                const i = e.list.closest("task-lists");
                if (!i) return;
                const s = si.get(i);
                s && (si.delete(i), i.dispatchEvent(new CustomEvent("task-lists-move", {
                    bubbles: !0,
                    detail: {src: [s.indexOf(e.list), e.index], dst: [s.indexOf(n.list), n.index]}
                })))
            }

            function ai(t) {
                const e = t.currentTarget;
                if (!(e instanceof Element)) return;
                const n = e.closest(".task-list-item");
                if (!n) return;
                const i = n.closest("task-lists");
                i instanceof TaskListsElement && i.sortable && !i.disabled && n.setAttribute("draggable", "true")
            }

            function ci(t) {
                if (On) return;
                const e = t.currentTarget;
                if (!(e instanceof Element)) return;
                const n = e.closest(".task-list-item");
                n && n.setAttribute("draggable", "false")
            }

            window.customElements.get("task-lists") || (window.TaskListsElement = TaskListsElement, window.customElements.define("task-lists", TaskListsElement)), t("T", TaskListsElement);
            const li = /\s|\(|\[/;

            function ui(t, e, n) {
                const i = t.lastIndexOf(e, n - 1);
                if (-1 === i) return;
                if (t.lastIndexOf(" ", n - 1) > i) return;
                const s = t[i - 1];
                return !s || li.test(s) ? {word: t.substring(i + e.length, n), position: i + e.length} : void 0
            }

            const di = ["position:absolute;", "overflow:auto;", "word-wrap:break-word;", "top:0px;", "left:-9999px;"],
                hi = ["box-sizing", "font-family", "font-size", "font-style", "font-variant", "font-weight", "height", "letter-spacing", "line-height", "max-height", "min-height", "padding-bottom", "padding-left", "padding-right", "padding-top", "border-bottom", "border-left", "border-right", "border-top", "text-decoration", "text-indent", "text-transform", "width", "word-spacing"],
                mi = new WeakMap;

            function fi(t, e = t.selectionEnd) {
                const {mirror: n, marker: i} = function (t, e) {
                    const n = t.nodeName.toLowerCase();
                    if ("textarea" !== n && "input" !== n) throw new Error("expected textField to a textarea or input");
                    let i = mi.get(t);
                    if (i && i.parentElement === t.parentElement) i.innerHTML = ""; else {
                        i = document.createElement("div"), mi.set(t, i);
                        const e = window.getComputedStyle(t), s = di.slice(0);
                        "textarea" === n ? s.push("white-space:pre-wrap;") : s.push("white-space:nowrap;");
                        for (let t = 0, n = hi.length; t < n; t++) {
                            const n = hi[t];
                            s.push(`${n}:${e.getPropertyValue(n)};`)
                        }
                        i.style.cssText = s.join(" ")
                    }
                    const s = document.createElement("span");
                    let r, o;
                    if (s.style.cssText = "position: absolute;", s.innerHTML = "&nbsp;", "number" == typeof e) {
                        let n = t.value.substring(0, e);
                        n && (r = document.createTextNode(n)), n = t.value.substring(e), n && (o = document.createTextNode(n))
                    } else {
                        const e = t.value;
                        e && (r = document.createTextNode(e))
                    }
                    if (r && i.appendChild(r), i.appendChild(s), o && i.appendChild(o), !i.parentElement) {
                        if (!t.parentElement) throw new Error("textField must have a parentElement to mirror");
                        t.parentElement.insertBefore(i, t)
                    }
                    return i.scrollTop = t.scrollTop, i.scrollLeft = t.scrollLeft, {mirror: i, marker: s}
                }(t, e), s = n.getBoundingClientRect(), r = i.getBoundingClientRect();
                return setTimeout(() => {
                    n.remove()
                }, 5e3), {top: r.top - s.top, left: r.left - s.left}
            }

            const pi = new WeakMap;

            class gi {
                constructor(t, e) {
                    this.expander = t, this.input = e, this.combobox = null, this.menu = null, this.match = null, this.justPasted = !1, this.oninput = this.onInput.bind(this), this.onpaste = this.onPaste.bind(this), this.onkeydown = this.onKeydown.bind(this), this.oncommit = this.onCommit.bind(this), this.onmousedown = this.onMousedown.bind(this), this.onblur = this.onBlur.bind(this), this.interactingWithList = !1, e.addEventListener("paste", this.onpaste), e.addEventListener("input", this.oninput), e.addEventListener("keydown", this.onkeydown), e.addEventListener("blur", this.onblur)
                }

                destroy() {
                    this.input.removeEventListener("paste", this.onpaste), this.input.removeEventListener("input", this.oninput), this.input.removeEventListener("keydown", this.onkeydown), this.input.removeEventListener("blur", this.onblur)
                }

                activate(t, e) {
                    if (this.input !== document.activeElement) return;
                    this.deactivate(), this.menu = e, e.id || (e.id = `text-expander-${Math.floor(1e5 * Math.random()).toString()}`), this.expander.append(e), this.combobox = new ct(this.input, e);
                    const {top: n, left: i} = fi(this.input, t.position);
                    e.style.top = `${n}px`, e.style.left = `${i}px`, this.combobox.start(), e.addEventListener("combobox-commit", this.oncommit), e.addEventListener("mousedown", this.onmousedown), this.combobox.navigate(1)
                }

                deactivate() {
                    const t = this.menu;
                    t && this.combobox && (this.menu = null, t.removeEventListener("combobox-commit", this.oncommit), t.removeEventListener("mousedown", this.onmousedown), this.combobox.destroy(), t.remove())
                }

                onCommit({target: t}) {
                    const e = t;
                    if (!(e instanceof HTMLElement)) return;
                    if (!this.combobox) return;
                    const n = this.match;
                    if (!n) return;
                    const i = this.input.value.substring(0, n.position - n.key.length),
                        s = this.input.value.substring(n.position + n.text.length),
                        r = {item: e, key: n.key, value: null};
                    if (!this.expander.dispatchEvent(new CustomEvent("text-expander-value", {
                        cancelable: !0,
                        detail: r
                    }))) return;
                    if (!r.value) return;
                    const o = `${r.value} `;
                    this.input.value = i + o + s, this.deactivate(), this.input.focus();
                    const a = i.length + o.length;
                    this.input.selectionStart = a, this.input.selectionEnd = a
                }

                onBlur() {
                    this.interactingWithList ? this.interactingWithList = !1 : this.deactivate()
                }

                onPaste() {
                    this.justPasted = !0
                }

                async onInput() {
                    if (this.justPasted) return void (this.justPasted = !1);
                    const t = this.findMatch();
                    if (t) {
                        this.match = t;
                        const e = await this.notifyProviders(t);
                        if (!this.match) return;
                        e ? this.activate(t, e) : this.deactivate()
                    } else this.match = null, this.deactivate()
                }

                findMatch() {
                    const t = this.input.selectionEnd, e = this.input.value;
                    for (const n of this.expander.keys) {
                        const i = ui(e, n, t);
                        if (i) return {text: i.word, key: n, position: i.position}
                    }
                }

                async notifyProviders(t) {
                    const e = [];
                    if (this.expander.dispatchEvent(new CustomEvent("text-expander-change", {
                        cancelable: !0,
                        detail: {provide: t => e.push(t), text: t.text, key: t.key}
                    }))) return (await Promise.all(e)).filter(t => t.matched).map(t => t.fragment)[0]
                }

                onMousedown() {
                    this.interactingWithList = !0
                }

                onKeydown(t) {
                    "Escape" === t.key && (this.deactivate(), t.stopImmediatePropagation(), t.preventDefault())
                }
            }

            class TextExpanderElement extends HTMLElement {
                get keys() {
                    const t = this.getAttribute("keys");
                    return t ? t.split(" ") : []
                }

                connectedCallback() {
                    const t = this.querySelector('input[type="text"], textarea');
                    if (!(t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement)) return;
                    const e = new gi(this, t);
                    pi.set(this, e)
                }

                disconnectedCallback() {
                    const t = pi.get(this);
                    t && (t.destroy(), pi.delete(this))
                }
            }

            window.customElements.get("text-expander") || (window.TextExpanderElement = TextExpanderElement, window.customElements.define("text-expander", TextExpanderElement));
            const vi = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                bi = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            function Ei(t) {
                return "0".concat(t).slice(-2)
            }

            function wi(t, e) {
                const n = t.getDay(), i = t.getDate(), s = t.getMonth(), r = t.getFullYear(), o = t.getHours(),
                    a = t.getMinutes(), c = t.getSeconds();
                return e.replace(/%([%aAbBcdeHIlmMpPSwyYZz])/g, (function (e) {
                    let l;
                    switch (e[1]) {
                        case"%":
                            return "%";
                        case"a":
                            return vi[n].slice(0, 3);
                        case"A":
                            return vi[n];
                        case"b":
                            return bi[s].slice(0, 3);
                        case"B":
                            return bi[s];
                        case"c":
                            return t.toString();
                        case"d":
                            return Ei(i);
                        case"e":
                            return String(i);
                        case"H":
                            return Ei(o);
                        case"I":
                            return Ei(wi(t, "%l"));
                        case"l":
                            return String(0 === o || 12 === o ? 12 : (o + 12) % 12);
                        case"m":
                            return Ei(s + 1);
                        case"M":
                            return Ei(a);
                        case"p":
                            return o > 11 ? "PM" : "AM";
                        case"P":
                            return o > 11 ? "pm" : "am";
                        case"S":
                            return Ei(c);
                        case"w":
                            return String(n);
                        case"y":
                            return Ei(r % 100);
                        case"Y":
                            return String(r);
                        case"Z":
                            return l = t.toString().match(/\((\w+)\)$/), l ? l[1] : "";
                        case"z":
                            return l = t.toString().match(/\w([+-]\d\d\d\d) /), l ? l[1] : ""
                    }
                    return ""
                }))
            }

            function yi(t) {
                let e;
                return function () {
                    if (e) return e;
                    if ("Intl" in window) try {
                        return e = new Intl.DateTimeFormat(void 0, t), e
                    } catch (n) {
                        if (!(n instanceof RangeError)) throw n
                    }
                }
            }

            let xi = null;
            const Ai = yi({day: "numeric", month: "short"});

            function ki() {
                if (null !== xi) return xi;
                const t = Ai();
                if (t) {
                    const e = t.format(new Date(0));
                    return xi = !!e.match(/^\d/), xi
                }
                return !1
            }

            let Ti = null;
            const Mi = yi({day: "numeric", month: "short", year: "numeric"});

            function Li(t) {
                const e = t.closest("[lang]");
                return e instanceof HTMLElement && e.lang ? e.lang : "default"
            }

            const Ci = new WeakMap;

            class ExtendedTimeElement extends HTMLElement {
                static get observedAttributes() {
                    return ["datetime", "day", "format", "lang", "hour", "minute", "month", "second", "title", "weekday", "year"]
                }

                connectedCallback() {
                    const t = this.getFormattedTitle();
                    t && !this.hasAttribute("title") && this.setAttribute("title", t);
                    const e = this.getFormattedDate();
                    e && (this.textContent = e)
                }

                attributeChangedCallback(t, e, n) {
                    const i = this.getFormattedTitle();
                    if ("datetime" === t) {
                        const t = Date.parse(n);
                        isNaN(t) ? Ci.delete(this) : Ci.set(this, new Date(t))
                    }
                    const s = this.getFormattedTitle(), r = this.getAttribute("title");
                    "title" === t || !s || r && r !== i || this.setAttribute("title", s);
                    const o = this.getFormattedDate();
                    o && (this.textContent = o)
                }

                get date() {
                    return Ci.get(this)
                }

                getFormattedTitle() {
                    const t = this.date;
                    if (!t) return;
                    const e = Si();
                    if (e) return e.format(t);
                    try {
                        return t.toLocaleString()
                    } catch (n) {
                        if (n instanceof RangeError) return t.toString();
                        throw n
                    }
                }

                getFormattedDate() {
                }
            }

            const Si = yi({
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                timeZoneName: "short"
            }), _i = new WeakMap;

            class LocalTimeElement extends ExtendedTimeElement {
                attributeChangedCallback(t, e, n) {
                    "hour" !== t && "minute" !== t && "second" !== t && "time-zone-name" !== t || _i.delete(this), super.attributeChangedCallback(t, e, n)
                }

                getFormattedDate() {
                    const t = this.date;
                    if (!t) return;
                    const e = function (t, e) {
                        const n = {
                            weekday: {short: "%a", long: "%A"},
                            day: {numeric: "%e", "2-digit": "%d"},
                            month: {short: "%b", long: "%B"},
                            year: {numeric: "%Y", "2-digit": "%y"}
                        };
                        let i = ki() ? "weekday day month year" : "weekday month day, year";
                        for (const s in n) {
                            const e = n[s][t.getAttribute(s)];
                            i = i.replace(s, e || "")
                        }
                        return i = i.replace(/(\s,)|(,\s$)/, ""), wi(e, i).replace(/\s+/, " ").trim()
                    }(this, t) || "", n = function (t, e) {
                        const n = {}, i = t.getAttribute("hour");
                        "numeric" !== i && "2-digit" !== i || (n.hour = i);
                        const s = t.getAttribute("minute");
                        "numeric" !== s && "2-digit" !== s || (n.minute = s);
                        const r = t.getAttribute("second");
                        "numeric" !== r && "2-digit" !== r || (n.second = r);
                        const o = t.getAttribute("time-zone-name");
                        "short" !== o && "long" !== o || (n.timeZoneName = o);
                        if (0 === Object.keys(n).length) return;
                        let a = _i.get(t);
                        a || (a = yi(n), _i.set(t, a));
                        const c = a();
                        if (c) return c.format(e);
                        {
                            const t = n.second ? "%H:%M:%S" : "%H:%M";
                            return wi(e, t)
                        }
                    }(this, t) || "";
                    return "".concat(e, " ").concat(n).trim()
                }
            }

            window.customElements.get("local-time") || (window.LocalTimeElement = LocalTimeElement, window.customElements.define("local-time", LocalTimeElement));

            class Ii {
                constructor(t, e) {
                    this.date = t, this.locale = e
                }

                toString() {
                    const t = this.timeElapsed();
                    if (t) return t;
                    {
                        const t = this.timeAhead();
                        return t || "on ".concat(this.formatDate())
                    }
                }

                timeElapsed() {
                    const t = (new Date).getTime() - this.date.getTime(), e = Math.round(t / 1e3),
                        n = Math.round(e / 60), i = Math.round(n / 60), s = Math.round(i / 24);
                    return t >= 0 && s < 30 ? this.timeAgoFromMs(t) : null
                }

                timeAhead() {
                    const t = this.date.getTime() - (new Date).getTime(), e = Math.round(t / 1e3),
                        n = Math.round(e / 60), i = Math.round(n / 60), s = Math.round(i / 24);
                    return t >= 0 && s < 30 ? this.timeUntil() : null
                }

                timeAgo() {
                    const t = (new Date).getTime() - this.date.getTime();
                    return this.timeAgoFromMs(t)
                }

                timeAgoFromMs(t) {
                    const e = Math.round(t / 1e3), n = Math.round(e / 60), i = Math.round(n / 60),
                        s = Math.round(i / 24), r = Math.round(s / 30), o = Math.round(r / 12);
                    return t < 0 ? Di(this.locale, 0, "second") : e < 10 ? Di(this.locale, 0, "second") : e < 45 ? Di(this.locale, -e, "second") : e < 90 ? Di(this.locale, -n, "minute") : n < 45 ? Di(this.locale, -n, "minute") : n < 90 ? Di(this.locale, -i, "hour") : i < 24 ? Di(this.locale, -i, "hour") : i < 36 ? Di(this.locale, -s, "day") : s < 30 ? Di(this.locale, -s, "day") : r < 18 ? Di(this.locale, -r, "month") : Di(this.locale, -o, "year")
                }

                microTimeAgo() {
                    const t = (new Date).getTime() - this.date.getTime(), e = Math.round(t / 1e3),
                        n = Math.round(e / 60), i = Math.round(n / 60), s = Math.round(i / 24), r = Math.round(s / 30),
                        o = Math.round(r / 12);
                    return n < 1 ? "1m" : n < 60 ? "".concat(n, "m") : i < 24 ? "".concat(i, "h") : s < 365 ? "".concat(s, "d") : "".concat(o, "y")
                }

                timeUntil() {
                    const t = this.date.getTime() - (new Date).getTime();
                    return this.timeUntilFromMs(t)
                }

                timeUntilFromMs(t) {
                    const e = Math.round(t / 1e3), n = Math.round(e / 60), i = Math.round(n / 60),
                        s = Math.round(i / 24), r = Math.round(s / 30), o = Math.round(r / 12);
                    return r >= 18 ? Di(this.locale, o, "year") : r >= 12 ? Di(this.locale, o, "year") : s >= 45 ? Di(this.locale, r, "month") : s >= 30 ? Di(this.locale, r, "month") : i >= 36 ? Di(this.locale, s, "day") : i >= 24 ? Di(this.locale, s, "day") : n >= 90 ? Di(this.locale, i, "hour") : n >= 45 ? Di(this.locale, i, "hour") : e >= 90 ? Di(this.locale, n, "minute") : e >= 45 ? Di(this.locale, n, "minute") : Di(this.locale, e >= 10 ? e : 0, "second")
                }

                microTimeUntil() {
                    const t = this.date.getTime() - (new Date).getTime(), e = Math.round(t / 1e3),
                        n = Math.round(e / 60), i = Math.round(n / 60), s = Math.round(i / 24), r = Math.round(s / 30),
                        o = Math.round(r / 12);
                    return s >= 365 ? "".concat(o, "y") : i >= 24 ? "".concat(s, "d") : n >= 60 ? "".concat(i, "h") : n > 1 ? "".concat(n, "m") : "1m"
                }

                formatDate() {
                    let t = ki() ? "%e %b" : "%b %e";
                    var e;
                    return e = this.date, (new Date).getUTCFullYear() !== e.getUTCFullYear() && (t += function () {
                        if (null !== Ti) return Ti;
                        const t = Mi();
                        if (t) {
                            const e = t.format(new Date(0));
                            return Ti = !!e.match(/\d,/), Ti
                        }
                        return !0
                    }() ? ", %Y" : " %Y"), wi(this.date, t)
                }

                formatTime() {
                    const t = Hi();
                    return t ? t.format(this.date) : wi(this.date, "%l:%M%P")
                }
            }

            function Di(t, e, n) {
                const i = function (t, e) {
                    if ("Intl" in window && "RelativeTimeFormat" in window.Intl) try {
                        return new Intl.RelativeTimeFormat(t, e)
                    } catch (n) {
                        if (!(n instanceof RangeError)) throw n
                    }
                }(t, {numeric: "auto"});
                return i ? i.format(e, n) : function (t, e) {
                    if (0 === t) switch (e) {
                        case"year":
                        case"quarter":
                        case"month":
                        case"week":
                            return "this ".concat(e);
                        case"day":
                            return "today";
                        case"hour":
                        case"minute":
                            return "in 0 ".concat(e, "s");
                        case"second":
                            return "now"
                    } else if (1 === t) switch (e) {
                        case"year":
                        case"quarter":
                        case"month":
                        case"week":
                            return "next ".concat(e);
                        case"day":
                            return "tomorrow";
                        case"hour":
                        case"minute":
                        case"second":
                            return "in 1 ".concat(e)
                    } else if (-1 === t) switch (e) {
                        case"year":
                        case"quarter":
                        case"month":
                        case"week":
                            return "last ".concat(e);
                        case"day":
                            return "yesterday";
                        case"hour":
                        case"minute":
                        case"second":
                            return "1 ".concat(e, " ago")
                    } else if (t > 1) switch (e) {
                        case"year":
                        case"quarter":
                        case"month":
                        case"week":
                        case"day":
                        case"hour":
                        case"minute":
                        case"second":
                            return "in ".concat(t, " ").concat(e, "s")
                    } else if (t < -1) switch (e) {
                        case"year":
                        case"quarter":
                        case"month":
                        case"week":
                        case"day":
                        case"hour":
                        case"minute":
                        case"second":
                            return "".concat(-t, " ").concat(e, "s ago")
                    }
                    throw new RangeError("Invalid unit argument for format() '".concat(e, "'"))
                }(e, n)
            }

            const Hi = yi({hour: "numeric", minute: "2-digit"});

            class RelativeTimeElement extends ExtendedTimeElement {
                getFormattedDate() {
                    const t = this.date;
                    if (t) return new Ii(t, Li(this)).toString()
                }

                connectedCallback() {
                    qi.push(this), Ni || (Bi(), Ni = setInterval(Bi, 6e4)), super.connectedCallback()
                }

                disconnectedCallback() {
                    const t = qi.indexOf(this);
                    -1 !== t && qi.splice(t, 1), qi.length || Ni && (clearInterval(Ni), Ni = null)
                }
            }

            t("j", RelativeTimeElement);
            const qi = [];
            let Ni;

            function Bi() {
                let t, e, n;
                for (e = 0, n = qi.length; e < n; e++) t = qi[e], t.textContent = t.getFormattedDate() || ""
            }

            window.customElements.get("relative-time") || (window.RelativeTimeElement = RelativeTimeElement, window.customElements.define("relative-time", RelativeTimeElement));

            class TimeAgoElement extends RelativeTimeElement {
                getFormattedDate() {
                    const t = this.getAttribute("format"), e = this.date;
                    if (e) return "micro" === t ? new Ii(e, Li(this)).microTimeAgo() : new Ii(e, Li(this)).timeAgo()
                }
            }

            window.customElements.get("time-ago") || (window.TimeAgoElement = TimeAgoElement, window.customElements.define("time-ago", TimeAgoElement));

            class TimeUntilElement extends RelativeTimeElement {
                getFormattedDate() {
                    const t = this.getAttribute("format"), e = this.date;
                    if (e) return "micro" === t ? new Ii(e, Li(this)).microTimeUntil() : new Ii(e, Li(this)).timeUntil()
                }
            }

            window.customElements.get("time-until") || (window.TimeUntilElement = TimeUntilElement, window.customElements.define("time-until", TimeUntilElement))
        }
    }
}));
//# sourceMappingURL=vendor-c584da42.js.map