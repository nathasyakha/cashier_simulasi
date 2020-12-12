! function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).Sweetalert2 = e()
}(this, function () {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function a(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function c(t, e, n) {
        return e && o(t.prototype, e), n && o(t, n), t
    }

    function s() {
        return (s = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function u(t) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function l(t, e) {
        return (l = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function d() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
        } catch (t) {
            return !1
        }
    }

    function i(t, e, n) {
        return (i = d() ? Reflect.construct : function (t, e, n) {
            var o = [null];
            o.push.apply(o, e);
            var i = new(Function.bind.apply(t, o));
            return n && l(i, n.prototype), i
        }).apply(null, arguments)
    }

    function p(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function f(t, e, n) {
        return (f = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
            var o = function (t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = u(t)););
                return t
            }(t, e);
            if (o) {
                var i = Object.getOwnPropertyDescriptor(o, e);
                return i.get ? i.get.call(n) : i.value
            }
        })(t, e, n || t)
    }

    function m(e) {
        return Object.keys(e).map(function (t) {
            return e[t]
        })
    }

    function h(t) {
        return Array.prototype.slice.call(t)
    }

    function v(t) {
        console.error("".concat(N, " ").concat(t))
    }

    function g(t, e) {
        var n;
        n = '"'.concat(t, '" is deprecated and will be removed in the next major release. Please use "').concat(e, '" instead.'), -1 === _.indexOf(n) && (_.push(n), U(n))
    }

    function b(t) {
        return t && Promise.resolve(t) === t
    }

    function y(t) {
        return t instanceof Element || "object" === r(e = t) && e.jquery;
        var e
    }

    function t(t) {
        var e = {};
        for (var n in t) e[t[n]] = "swal2-" + t[n];
        return e
    }

    function w(t) {
        var e = Y();
        return e ? e.querySelector(t) : null
    }

    function e(t) {
        return w(".".concat(t))
    }

    function n() {
        var t = Z();
        return h(t.querySelectorAll(".".concat(W.icon)))
    }

    function C() {
        var t = n().filter(function (t) {
            return ht(t)
        });
        return t.length ? t[0] : null
    }

    function k() {
        return e(W.title)
    }

    function x() {
        return e(W.content)
    }

    function P() {
        return e(W.image)
    }

    function A() {
        return e(W["progress-steps"])
    }

    function B() {
        return e(W["validation-message"])
    }

    function S() {
        return w(".".concat(W.actions, " .").concat(W.confirm))
    }

    function E() {
        return w(".".concat(W.actions, " .").concat(W.cancel))
    }

    function O() {
        return e(W.actions)
    }

    function T() {
        return e(W.header)
    }

    function L() {
        return e(W.footer)
    }

    function q() {
        return e(W["timer-progress-bar"])
    }

    function I() {
        return e(W.close)
    }

    function j() {
        var t = h(Z().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function (t, e) {
                return t = parseInt(t.getAttribute("tabindex")), (e = parseInt(e.getAttribute("tabindex"))) < t ? 1 : t < e ? -1 : 0
            }),
            e = h(Z().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter(function (t) {
                return "-1" !== t.getAttribute("tabindex")
            });
        return function (t) {
            for (var e = [], n = 0; n < t.length; n++) - 1 === e.indexOf(t[n]) && e.push(t[n]);
            return e
        }(t.concat(e)).filter(function (t) {
            return ht(t)
        })
    }

    function M() {
        return !Q() && !document.body.classList.contains(W["no-backdrop"])
    }

    function V() {
        return Z().hasAttribute("data-loading")
    }

    function R(e, t) {
        var n;
        e.textContent = "", t && (n = (new DOMParser).parseFromString(t, "text/html"), h(n.querySelector("head").childNodes).forEach(function (t) {
            e.appendChild(t)
        }), h(n.querySelector("body").childNodes).forEach(function (t) {
            e.appendChild(t)
        }))
    }

    function H(t, e) {
        if (e) {
            for (var n = e.split(/\s+/), o = 0; o < n.length; o++)
                if (!t.classList.contains(n[o])) return;
            return 1
        }
    }

    function D(t, e, n) {
        var o, i;
        if (i = e, h((o = t).classList).forEach(function (t) {
                -1 === m(W).indexOf(t) && -1 === m(K).indexOf(t) && -1 === m(i.showClass).indexOf(t) && o.classList.remove(t)
            }), e.customClass && e.customClass[n]) {
            if ("string" != typeof e.customClass[n] && !e.customClass[n].forEach) return U("Invalid type of customClass.".concat(n, '! Expected string or iterable object, got "').concat(r(e.customClass[n]), '"'));
            pt(t, e.customClass[n])
        }
    }
    var N = "SweetAlert2:",
        U = function (t) {
            console.warn("".concat(N, " ").concat(t))
        },
        _ = [],
        F = function (t) {
            return "function" == typeof t ? t() : t
        },
        z = Object.freeze({
            cancel: "cancel",
            backdrop: "backdrop",
            close: "close",
            esc: "esc",
            timer: "timer"
        }),
        W = t(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "toast-column", "show", "hide", "close", "title", "header", "content", "html-container", "actions", "confirm", "cancel", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error"]),
        K = t(["success", "warning", "info", "question", "error"]),
        Y = function () {
            return document.body.querySelector(".".concat(W.container))
        },
        Z = function () {
            return e(W.popup)
        },
        Q = function () {
            return document.body.classList.contains(W["toast-shown"])
        },
        $ = {
            previousBodyPadding: null
        };

    function J(t, e) {
        if (!e) return null;
        switch (e) {
            case "select":
            case "textarea":
            case "file":
                return mt(t, W[e]);
            case "checkbox":
                return t.querySelector(".".concat(W.checkbox, " input"));
            case "radio":
                return t.querySelector(".".concat(W.radio, " input:checked")) || t.querySelector(".".concat(W.radio, " input:first-child"));
            case "range":
                return t.querySelector(".".concat(W.range, " input"));
            default:
                return mt(t, W.input)
        }
    }

    function X(t) {
        var e;
        t.focus(), "file" !== t.type && (e = t.value, t.value = "", t.value = e)
    }

    function G(t, e, n) {
        t && e && ("string" == typeof e && (e = e.split(/\s+/).filter(Boolean)), e.forEach(function (e) {
            t.forEach ? t.forEach(function (t) {
                n ? t.classList.add(e) : t.classList.remove(e)
            }) : n ? t.classList.add(e) : t.classList.remove(e)
        }))
    }

    function tt(t, e, n) {
        n || 0 === parseInt(n) ? t.style[e] = "number" == typeof n ? "".concat(n, "px") : n : t.style.removeProperty(e)
    }

    function et(t, e) {
        var n = 1 < arguments.length && void 0 !== e ? e : "flex";
        t.style.opacity = "", t.style.display = n
    }

    function nt(t) {
        t.style.opacity = "", t.style.display = "none"
    }

    function ot(t, e, n) {
        e ? et(t, n) : nt(t)
    }

    function it(t) {
        return !!(t.scrollHeight > t.clientHeight)
    }

    function rt(t) {
        var e = window.getComputedStyle(t),
            n = parseFloat(e.getPropertyValue("animation-duration") || "0"),
            o = parseFloat(e.getPropertyValue("transition-duration") || "0");
        return 0 < n || 0 < o
    }

    function at(t, e) {
        var n = 1 < arguments.length && void 0 !== e && e,
            o = q();
        ht(o) && (n && (o.style.transition = "none", o.style.width = "100%"), setTimeout(function () {
            o.style.transition = "width ".concat(t / 1e3, "s linear"), o.style.width = "0%"
        }, 10))
    }

    function ct() {
        return "undefined" == typeof window || "undefined" == typeof document
    }

    function st(t) {
        on.isVisible() && dt !== t.target.value && on.resetValidationMessage(), dt = t.target.value
    }

    function ut(t, e) {
        t instanceof HTMLElement ? e.appendChild(t) : "object" === r(t) ? bt(t, e) : t && R(e, t)
    }

    function lt(t, e) {
        var n = O(),
            o = S(),
            i = E();
        e.showConfirmButton || e.showCancelButton || nt(n), D(n, e, "actions"), Ct(o, "confirm", e), Ct(i, "cancel", e), e.buttonsStyling ? function (t, e, n) {
            pt([t, e], W.styled), n.confirmButtonColor && (t.style.backgroundColor = n.confirmButtonColor);
            n.cancelButtonColor && (e.style.backgroundColor = n.cancelButtonColor); {
                var o;
                V() || (o = window.getComputedStyle(t).getPropertyValue("background-color"), t.style.borderLeftColor = o, t.style.borderRightColor = o)
            }
        }(o, i, e) : (ft([o, i], W.styled), o.style.backgroundColor = o.style.borderLeftColor = o.style.borderRightColor = "", i.style.backgroundColor = i.style.borderLeftColor = i.style.borderRightColor = ""), e.reverseButtons && o.parentNode.insertBefore(i, o)
    }
    var dt, pt = function (t, e) {
            G(t, e, !0)
        },
        ft = function (t, e) {
            G(t, e, !1)
        },
        mt = function (t, e) {
            for (var n = 0; n < t.childNodes.length; n++)
                if (H(t.childNodes[n], e)) return t.childNodes[n]
        },
        ht = function (t) {
            return !(!t || !(t.offsetWidth || t.offsetHeight || t.getClientRects().length))
        },
        gt = '\n <div aria-labelledby="'.concat(W.title, '" aria-describedby="').concat(W.content, '" class="').concat(W.popup, '" tabindex="-1">\n   <div class="').concat(W.header, '">\n     <ul class="').concat(W["progress-steps"], '"></ul>\n     <div class="').concat(W.icon, " ").concat(K.error, '"></div>\n     <div class="').concat(W.icon, " ").concat(K.question, '"></div>\n     <div class="').concat(W.icon, " ").concat(K.warning, '"></div>\n     <div class="').concat(W.icon, " ").concat(K.info, '"></div>\n     <div class="').concat(W.icon, " ").concat(K.success, '"></div>\n     <img class="').concat(W.image, '" />\n     <h2 class="').concat(W.title, '" id="').concat(W.title, '"></h2>\n     <button type="button" class="').concat(W.close, '"></button>\n   </div>\n   <div class="').concat(W.content, '">\n     <div id="').concat(W.content, '" class="').concat(W["html-container"], '"></div>\n     <input class="').concat(W.input, '" />\n     <input type="file" class="').concat(W.file, '" />\n     <div class="').concat(W.range, '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat(W.select, '"></select>\n     <div class="').concat(W.radio, '"></div>\n     <label for="').concat(W.checkbox, '" class="').concat(W.checkbox, '">\n       <input type="checkbox" />\n       <span class="').concat(W.label, '"></span>\n     </label>\n     <textarea class="').concat(W.textarea, '"></textarea>\n     <div class="').concat(W["validation-message"], '" id="').concat(W["validation-message"], '"></div>\n   </div>\n   <div class="').concat(W.actions, '">\n     <button type="button" class="').concat(W.confirm, '">OK</button>\n     <button type="button" class="').concat(W.cancel, '">Cancel</button>\n   </div>\n   <div class="').concat(W.footer, '"></div>\n   <div class="').concat(W["timer-progress-bar-container"], '">\n     <div class="').concat(W["timer-progress-bar"], '"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, ""),
        vt = function (t) {
            var e, n, o, i, r, a, c, s, u, l, d, p, f, m, h, g = !!(e = Y()) && (e.parentNode.removeChild(e), ft([document.documentElement, document.body], [W["no-backdrop"], W["toast-shown"], W["has-column"]]), !0);
            ct() ? v("SweetAlert2 requires document to initialize") : ((n = document.createElement("div")).className = W.container, g && pt(n, W["no-transition"]), R(n, gt), (o = "string" == typeof (i = t.target) ? document.querySelector(i) : i).appendChild(n), r = t, (a = Z()).setAttribute("role", r.toast ? "alert" : "dialog"), a.setAttribute("aria-live", r.toast ? "polite" : "assertive"), r.toast || a.setAttribute("aria-modal", "true"), c = o, "rtl" === window.getComputedStyle(c).direction && pt(Y(), W.rtl), s = x(), u = mt(s, W.input), l = mt(s, W.file), d = s.querySelector(".".concat(W.range, " input")), p = s.querySelector(".".concat(W.range, " output")), f = mt(s, W.select), m = s.querySelector(".".concat(W.checkbox, " input")), h = mt(s, W.textarea), u.oninput = st, l.onchange = st, f.onchange = st, m.onchange = st, h.oninput = st, d.oninput = function (t) {
                st(t), p.value = d.value
            }, d.onchange = function (t) {
                st(t), d.nextSibling.value = d.value
            })
        },
        bt = function (t, e) {
            t.jquery ? yt(e, t) : R(e, t.toString())
        },
        yt = function (t, e) {
            if (t.textContent = "", 0 in e)
                for (var n = 0; n in e; n++) t.appendChild(e[n].cloneNode(!0));
            else t.appendChild(e.cloneNode(!0))
        },
        wt = function () {
            if (ct()) return !1;
            var t = document.createElement("div"),
                e = {
                    WebkitAnimation: "webkitAnimationEnd",
                    OAnimation: "oAnimationEnd oanimationend",
                    animation: "animationend"
                };
            for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n) && void 0 !== t.style[n]) return e[n];
            return !1
        }();

    function Ct(t, e, n) {
        var o;
        ot(t, n["show".concat((o = e).charAt(0).toUpperCase() + o.slice(1), "Button")], "inline-block"), R(t, n["".concat(e, "ButtonText")]), t.setAttribute("aria-label", n["".concat(e, "ButtonAriaLabel")]), t.className = W[e], D(t, n, "".concat(e, "Button")), pt(t, n["".concat(e, "ButtonClass")])
    }

    function kt(t, e) {
        var n, o, i, r, a, c, s, u, l = Y();
        l && (n = l, "string" == typeof (o = e.backdrop) ? n.style.background = o : o || pt([document.documentElement, document.body], W["no-backdrop"]), !e.backdrop && e.allowOutsideClick && U('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'), i = l, (r = e.position) in W ? pt(i, W[r]) : (U('The "position" parameter is not valid, defaulting to "center"'), pt(i, W.center)), a = l, !(c = e.grow) || "string" != typeof c || (s = "grow-".concat(c)) in W && pt(a, W[s]), D(l, e, "container"), (u = document.body.getAttribute("data-swal2-queue-step")) && (l.setAttribute("data-queue-step", u), document.body.removeAttribute("data-swal2-queue-step")))
    }

    function xt(t, e) {
        t.placeholder && !e.inputPlaceholder || (t.placeholder = e.inputPlaceholder)
    }
    var Pt = {
            promise: new WeakMap,
            innerParams: new WeakMap,
            domCache: new WeakMap
        },
        At = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
        Bt = function (t) {
            if (!Tt[t.input]) return v('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(t.input, '"'));
            var e = Ot(t.input),
                n = Tt[t.input](e, t);
            et(n), setTimeout(function () {
                X(n)
            })
        },
        St = function (t, e) {
            var n = J(x(), t);
            if (n)
                for (var o in ! function (t) {
                        for (var e = 0; e < t.attributes.length; e++) {
                            var n = t.attributes[e].name; - 1 === ["type", "value", "style"].indexOf(n) && t.removeAttribute(n)
                        }
                    }(n), e) "range" === t && "placeholder" === o || n.setAttribute(o, e[o])
        },
        Et = function (t) {
            var e = Ot(t.input);
            t.customClass && pt(e, t.customClass.input)
        },
        Ot = function (t) {
            var e = W[t] ? W[t] : W.input;
            return mt(x(), e)
        },
        Tt = {};
    Tt.text = Tt.email = Tt.password = Tt.number = Tt.tel = Tt.url = function (t, e) {
        return "string" == typeof e.inputValue || "number" == typeof e.inputValue ? t.value = e.inputValue : b(e.inputValue) || U('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(r(e.inputValue), '"')), xt(t, e), t.type = e.input, t
    }, Tt.file = function (t, e) {
        return xt(t, e), t
    }, Tt.range = function (t, e) {
        var n = t.querySelector("input"),
            o = t.querySelector("output");
        return n.value = e.inputValue, n.type = e.input, o.value = e.inputValue, t
    }, Tt.select = function (t, e) {
        var n;
        return t.textContent = "", e.inputPlaceholder && (n = document.createElement("option"), R(n, e.inputPlaceholder), n.value = "", n.disabled = !0, n.selected = !0, t.appendChild(n)), t
    }, Tt.radio = function (t) {
        return t.textContent = "", t
    }, Tt.checkbox = function (t, e) {
        var n = J(x(), "checkbox");
        n.value = 1, n.id = W.checkbox, n.checked = Boolean(e.inputValue);
        var o = t.querySelector("span");
        return R(o, e.inputPlaceholder), t
    }, Tt.textarea = function (e, t) {
        var n, o;
        return e.value = t.inputValue, xt(e, t), "MutationObserver" in window && (n = parseInt(window.getComputedStyle(Z()).width), o = parseInt(window.getComputedStyle(Z()).paddingLeft) + parseInt(window.getComputedStyle(Z()).paddingRight), new MutationObserver(function () {
            var t = e.offsetWidth + o;
            Z().style.width = n < t ? "".concat(t, "px") : null
        }).observe(e, {
            attributes: !0,
            attributeFilter: ["style"]
        })), e
    };

    function Lt(t, e) {
        var n, o, i, r, a, c = x().querySelector("#".concat(W.content));
        e.html ? (ut(e.html, c), et(c, "block")) : e.text ? (c.textContent = e.text, et(c, "block")) : nt(c), n = t, o = e, i = x(), r = Pt.innerParams.get(n), a = !r || o.input !== r.input, At.forEach(function (t) {
            var e = W[t],
                n = mt(i, e);
            St(t, o.inputAttributes), n.className = e, a && nt(n)
        }), o.input && (a && Bt(o), Et(o)), D(x(), e, "content")
    }

    function qt() {
        return Y() && Y().getAttribute("data-queue-step")
    }

    function It(t, s) {
        var u = A();
        if (!s.progressSteps || 0 === s.progressSteps.length) return nt(u);
        et(u), u.textContent = "";
        var l = parseInt(void 0 === s.currentProgressStep ? qt() : s.currentProgressStep);
        l >= s.progressSteps.length && U("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), s.progressSteps.forEach(function (t, e) {
            var n, o, i, r, a, c = (n = t, o = document.createElement("li"), pt(o, W["progress-step"]), R(o, n), o);
            u.appendChild(c), e === l && pt(c, W["active-progress-step"]), e !== s.progressSteps.length - 1 && (r = t, a = document.createElement("li"), pt(a, W["progress-step-line"]), r.progressStepsDistance && (a.style.width = r.progressStepsDistance), i = a, u.appendChild(i))
        })
    }

    function jt(t, e) {
        var n, o, i, r, a, c, s, u, l = T();
        D(l, e, "header"), It(0, e), n = t, o = e, (r = Pt.innerParams.get(n)) && o.icon === r.icon && C() ? D(C(), o, "icon") : (Rt(), o.icon && (-1 !== Object.keys(K).indexOf(o.icon) ? (i = w(".".concat(W.icon, ".").concat(K[o.icon])), et(i), Dt(i, o), Ht(), D(i, o, "icon"), pt(i, o.showClass.icon)) : v('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(o.icon, '"')))),
            function (t) {
                var e = P();
                if (!t.imageUrl) return nt(e);
                et(e), e.setAttribute("src", t.imageUrl), e.setAttribute("alt", t.imageAlt), tt(e, "width", t.imageWidth), tt(e, "height", t.imageHeight), e.className = W.image, D(e, t, "image")
            }(e), a = e, c = k(), ot(c, a.title || a.titleText), a.title && ut(a.title, c), a.titleText && (c.innerText = a.titleText), D(c, a, "title"), s = e, u = I(), R(u, s.closeButtonHtml), D(u, s, "closeButton"), ot(u, s.showCloseButton), u.setAttribute("aria-label", s.closeButtonAriaLabel)
    }

    function Mt(t, e) {
        var n, o, i, r;
        n = e, o = Z(), tt(o, "width", n.width), tt(o, "padding", n.padding), n.background && (o.style.background = n.background), _t(o, n), kt(0, e), jt(t, e), Lt(t, e), lt(0, e), i = e, r = L(), ot(r, i.footer), i.footer && ut(i.footer, r), D(r, i, "footer"), "function" == typeof e.onRender && e.onRender(Z())
    }

    function Vt() {
        return S() && S().click()
    }
    var Rt = function () {
            for (var t = n(), e = 0; e < t.length; e++) nt(t[e])
        },
        Ht = function () {
            for (var t = Z(), e = window.getComputedStyle(t).getPropertyValue("background-color"), n = t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"), o = 0; o < n.length; o++) n[o].style.backgroundColor = e
        },
        Dt = function (t, e) {
            t.textContent = "", e.iconHtml ? R(t, Nt(e.iconHtml)) : "success" === e.icon ? R(t, '\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    ') : "error" === e.icon ? R(t, '\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    ') : R(t, Nt({
                question: "?",
                warning: "!",
                info: "i"
            } [e.icon]))
        },
        Nt = function (t) {
            return '<div class="'.concat(W["icon-content"], '">').concat(t, "</div>")
        },
        Ut = [],
        _t = function (t, e) {
            t.className = "".concat(W.popup, " ").concat(ht(t) ? e.showClass.popup : ""), e.toast ? (pt([document.documentElement, document.body], W["toast-shown"]), pt(t, W.toast)) : pt(t, W.modal), D(t, e, "popup"), "string" == typeof e.customClass && pt(t, e.customClass), e.icon && pt(t, W["icon-".concat(e.icon)])
        };

    function Ft() {
        var t = Z();
        t || on.fire(), t = Z();
        var e = O(),
            n = S();
        et(e), et(n, "inline-block"), pt([t, e], W.loading), n.disabled = !0, t.setAttribute("data-loading", !0), t.setAttribute("aria-busy", !0), t.focus()
    }

    function zt() {
        return new Promise(function (t) {
            var e = window.scrollX,
                n = window.scrollY;
            Qt.restoreFocusTimeout = setTimeout(function () {
                Qt.previousActiveElement && Qt.previousActiveElement.focus ? (Qt.previousActiveElement.focus(), Qt.previousActiveElement = null) : document.body && document.body.focus(), t()
            }, 100), void 0 !== e && void 0 !== n && window.scrollTo(e, n)
        })
    }

    function Wt() {
        if (Qt.timeout) return function () {
            var t = q(),
                e = parseInt(window.getComputedStyle(t).width);
            t.style.removeProperty("transition"), t.style.width = "100%";
            var n = parseInt(window.getComputedStyle(t).width),
                o = parseInt(e / n * 100);
            t.style.removeProperty("transition"), t.style.width = "".concat(o, "%")
        }(), Qt.timeout.stop()
    }

    function Kt() {
        if (Qt.timeout) {
            var t = Qt.timeout.start();
            return at(t), t
        }
    }

    function Yt(t) {
        return Object.prototype.hasOwnProperty.call($t, t)
    }

    function Zt(t) {
        return Xt[t]
    }
    var Qt = {},
        $t = {
            title: "",
            titleText: "",
            text: "",
            html: "",
            footer: "",
            icon: void 0,
            iconHtml: void 0,
            toast: !1,
            animation: !0,
            showClass: {
                popup: "swal2-show",
                backdrop: "swal2-backdrop-show",
                icon: "swal2-icon-show"
            },
            hideClass: {
                popup: "swal2-hide",
                backdrop: "swal2-backdrop-hide",
                icon: "swal2-icon-hide"
            },
            customClass: void 0,
            target: "body",
            backdrop: !0,
            heightAuto: !0,
            allowOutsideClick: !0,
            allowEscapeKey: !0,
            allowEnterKey: !0,
            stopKeydownPropagation: !0,
            keydownListenerCapture: !1,
            showConfirmButton: !0,
            showCancelButton: !1,
            preConfirm: void 0,
            confirmButtonText: "OK",
            confirmButtonAriaLabel: "",
            confirmButtonColor: void 0,
            cancelButtonText: "Cancel",
            cancelButtonAriaLabel: "",
            cancelButtonColor: void 0,
            buttonsStyling: !0,
            reverseButtons: !1,
            focusConfirm: !0,
            focusCancel: !1,
            showCloseButton: !1,
            closeButtonHtml: "&times;",
            closeButtonAriaLabel: "Close this dialog",
            showLoaderOnConfirm: !1,
            imageUrl: void 0,
            imageWidth: void 0,
            imageHeight: void 0,
            imageAlt: "",
            timer: void 0,
            timerProgressBar: !1,
            width: void 0,
            padding: void 0,
            background: void 0,
            input: void 0,
            inputPlaceholder: "",
            inputValue: "",
            inputOptions: {},
            inputAutoTrim: !0,
            inputAttributes: {},
            inputValidator: void 0,
            validationMessage: void 0,
            grow: !1,
            position: "center",
            progressSteps: [],
            currentProgressStep: void 0,
            progressStepsDistance: void 0,
            onBeforeOpen: void 0,
            onOpen: void 0,
            onRender: void 0,
            onClose: void 0,
            onAfterClose: void 0,
            onDestroy: void 0,
            scrollbarPadding: !0
        },
        Jt = ["title", "titleText", "text", "html", "icon", "hideClass", "customClass", "allowOutsideClick", "allowEscapeKey", "showConfirmButton", "showCancelButton", "confirmButtonText", "confirmButtonAriaLabel", "confirmButtonColor", "cancelButtonText", "cancelButtonAriaLabel", "cancelButtonColor", "buttonsStyling", "reverseButtons", "imageUrl", "imageWidth", "imageHeight", "imageAlt", "progressSteps", "currentProgressStep"],
        Xt = {
            animation: 'showClass" and "hideClass'
        },
        Gt = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusCancel", "heightAuto", "keydownListenerCapture"],
        te = Object.freeze({
            isValidParameter: Yt,
            isUpdatableParameter: function (t) {
                return -1 !== Jt.indexOf(t)
            },
            isDeprecatedParameter: Zt,
            argsToParams: function (o) {
                var i = {};
                return "object" !== r(o[0]) || y(o[0]) ? ["title", "html", "icon"].forEach(function (t, e) {
                    var n = o[e];
                    "string" == typeof n || y(n) ? i[t] = n : void 0 !== n && v("Unexpected type of ".concat(t, '! Expected "string" or "Element", got ').concat(r(n)))
                }) : s(i, o[0]), i
            },
            isVisible: function () {
                return ht(Z())
            },
            clickConfirm: Vt,
            clickCancel: function () {
                return E() && E().click()
            },
            getContainer: Y,
            getPopup: Z,
            getTitle: k,
            getContent: x,
            getHtmlContainer: function () {
                return e(W["html-container"])
            },
            getImage: P,
            getIcon: C,
            getIcons: n,
            getCloseButton: I,
            getActions: O,
            getConfirmButton: S,
            getCancelButton: E,
            getHeader: T,
            getFooter: L,
            getTimerProgressBar: q,
            getFocusableElements: j,
            getValidationMessage: B,
            isLoading: V,
            fire: function () {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return i(this, e)
            },
            mixin: function (r) {
                return function (t) {
                    ! function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && l(t, e)
                    }(i, t);
                    var n, o, e = (n = i, o = d(), function () {
                        var t, e = u(n);
                        return p(this, o ? (t = u(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments))
                    });

                    function i() {
                        return a(this, i), e.apply(this, arguments)
                    }
                    return c(i, [{
                        key: "_main",
                        value: function (t) {
                            return f(u(i.prototype), "_main", this).call(this, s({}, r, t))
                        }
                    }]), i
                }(this)
            },
            queue: function (t) {
                var r = this;
                Ut = t;

                function a(t, e) {
                    Ut = [], t(e)
                }
                var c = [];
                return new Promise(function (i) {
                    ! function e(n, o) {
                        n < Ut.length ? (document.body.setAttribute("data-swal2-queue-step", n), r.fire(Ut[n]).then(function (t) {
                            void 0 !== t.value ? (c.push(t.value), e(n + 1, o)) : a(i, {
                                dismiss: t.dismiss
                            })
                        })) : a(i, {
                            value: c
                        })
                    }(0)
                })
            },
            getQueueStep: qt,
            insertQueueStep: function (t, e) {
                return e && e < Ut.length ? Ut.splice(e, 0, t) : Ut.push(t)
            },
            deleteQueueStep: function (t) {
                void 0 !== Ut[t] && Ut.splice(t, 1)
            },
            showLoading: Ft,
            enableLoading: Ft,
            getTimerLeft: function () {
                return Qt.timeout && Qt.timeout.getTimerLeft()
            },
            stopTimer: Wt,
            resumeTimer: Kt,
            toggleTimer: function () {
                var t = Qt.timeout;
                return t && (t.running ? Wt : Kt)()
            },
            increaseTimer: function (t) {
                if (Qt.timeout) {
                    var e = Qt.timeout.increase(t);
                    return at(e, !0), e
                }
            },
            isTimerRunning: function () {
                return Qt.timeout && Qt.timeout.isRunning()
            }
        });

    function ee() {
        var t, e = Pt.innerParams.get(this);
        e && (t = Pt.domCache.get(this), e.showConfirmButton || (nt(t.confirmButton), e.showCancelButton || nt(t.actions)), ft([t.popup, t.actions], W.loading), t.popup.removeAttribute("aria-busy"), t.popup.removeAttribute("data-loading"), t.confirmButton.disabled = !1, t.cancelButton.disabled = !1)
    }

    function ne() {
        null === $.previousBodyPadding && document.body.scrollHeight > window.innerHeight && ($.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = "".concat($.previousBodyPadding + function () {
            var t = document.createElement("div");
            t.className = W["scrollbar-measure"], document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t), e
        }(), "px"))
    }

    function oe() {
        return !!window.MSInputMethodContext && !!document.documentMode
    }

    function ie() {
        var t = Y(),
            e = Z();
        t.style.removeProperty("align-items"), e.offsetTop < 0 && (t.style.alignItems = "flex-start")
    }
    var re = function () {
            var e, t = Y();
            t.ontouchstart = function (t) {
                e = ae(t.target)
            }, t.ontouchmove = function (t) {
                e && (t.preventDefault(), t.stopPropagation())
            }
        },
        ae = function (t) {
            var e = Y();
            return t === e || !(it(e) || "INPUT" === t.tagName || it(x()) && x().contains(t))
        },
        ce = {
            swalPromiseResolve: new WeakMap
        };

    function se(t, e, n, o) {
        var i;
        n ? de(t, o) : (zt().then(function () {
            return de(t, o)
        }), Qt.keydownTarget.removeEventListener("keydown", Qt.keydownHandler, {
            capture: Qt.keydownListenerCapture
        }), Qt.keydownHandlerAdded = !1), e.parentNode && !document.body.getAttribute("data-swal2-queue-step") && e.parentNode.removeChild(e), M() && (null !== $.previousBodyPadding && (document.body.style.paddingRight = "".concat($.previousBodyPadding, "px"), $.previousBodyPadding = null), H(document.body, W.iosfix) && (i = parseInt(document.body.style.top, 10), ft(document.body, W.iosfix), document.body.style.top = "", document.body.scrollTop = -1 * i), "undefined" != typeof window && oe() && window.removeEventListener("resize", ie), h(document.body.children).forEach(function (t) {
            t.hasAttribute("data-previous-aria-hidden") ? (t.setAttribute("aria-hidden", t.getAttribute("data-previous-aria-hidden")), t.removeAttribute("data-previous-aria-hidden")) : t.removeAttribute("aria-hidden")
        })), ft([document.documentElement, document.body], [W.shown, W["height-auto"], W["no-backdrop"], W["toast-shown"], W["toast-column"]])
    }

    function ue(t) {
        var e, n, o, i = Z();
        i && (e = Pt.innerParams.get(this)) && !H(i, e.hideClass.popup) && (n = ce.swalPromiseResolve.get(this), ft(i, e.showClass.popup), pt(i, e.hideClass.popup), o = Y(), ft(o, e.showClass.backdrop), pt(o, e.hideClass.backdrop), function (t, e, n) {
            var o = Y(),
                i = wt && rt(e),
                r = n.onClose,
                a = n.onAfterClose;
            if (r !== null && typeof r === "function") {
                r(e)
            }
            if (i) {
                le(t, e, o, a)
            } else {
                se(t, o, Q(), a)
            }
        }(this, i, e), n(t || {}))
    }
    var le = function (t, e, n, o) {
            Qt.swalCloseEventFinishedCallback = se.bind(null, t, n, Q(), o), e.addEventListener(wt, function (t) {
                t.target === e && (Qt.swalCloseEventFinishedCallback(), delete Qt.swalCloseEventFinishedCallback)
            })
        },
        de = function (t, e) {
            setTimeout(function () {
                "function" == typeof e && e(), t._destroy()
            })
        };

    function pe(t, e, n) {
        var o = Pt.domCache.get(t);
        e.forEach(function (t) {
            o[t].disabled = n
        })
    }

    function fe(t, e) {
        if (!t) return !1;
        if ("radio" === t.type)
            for (var n = t.parentNode.parentNode.querySelectorAll("input"), o = 0; o < n.length; o++) n[o].disabled = e;
        else t.disabled = e
    }
    var me = function () {
            function n(t, e) {
                a(this, n), this.callback = t, this.remaining = e, this.running = !1, this.start()
            }
            return c(n, [{
                key: "start",
                value: function () {
                    return this.running || (this.running = !0, this.started = new Date, this.id = setTimeout(this.callback, this.remaining)), this.remaining
                }
            }, {
                key: "stop",
                value: function () {
                    return this.running && (this.running = !1, clearTimeout(this.id), this.remaining -= new Date - this.started), this.remaining
                }
            }, {
                key: "increase",
                value: function (t) {
                    var e = this.running;
                    return e && this.stop(), this.remaining += t, e && this.start(), this.remaining
                }
            }, {
                key: "getTimerLeft",
                value: function () {
                    return this.running && (this.stop(), this.start()), this.remaining
                }
            }, {
                key: "isRunning",
                value: function () {
                    return this.running
                }
            }]), n
        }(),
        he = {
            email: function (t, e) {
                return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t) ? Promise.resolve() : Promise.resolve(e || "Invalid email address")
            },
            url: function (t, e) {
                return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t) ? Promise.resolve() : Promise.resolve(e || "Invalid URL")
            }
        };

    function ge(t) {
        var e, n;
        (e = t).inputValidator || Object.keys(he).forEach(function (t) {
            e.input === t && (e.inputValidator = he[t])
        }), t.showLoaderOnConfirm && !t.preConfirm && U("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"), t.animation = F(t.animation), (n = t).target && ("string" != typeof n.target || document.querySelector(n.target)) && ("string" == typeof n.target || n.target.appendChild) || (U('Target parameter is not valid, defaulting to "body"'), n.target = "body"), "string" == typeof t.title && (t.title = t.title.split("\n").join("<br />")), vt(t)
    }

    function ve(t) {
        var e = Y(),
            n = Z();
        "function" == typeof t.onBeforeOpen && t.onBeforeOpen(n), Ee(e, n, t), Be(e, n), M() && Se(e, t.scrollbarPadding), Q() || Qt.previousActiveElement || (Qt.previousActiveElement = document.activeElement), "function" == typeof t.onOpen && setTimeout(function () {
            return t.onOpen(n)
        }), ft(e, W["no-transition"])
    }

    function be(t) {
        var e, n = Z();
        t.target === n && (e = Y(), n.removeEventListener(wt, be), e.style.overflowY = "auto")
    }

    function ye(t, e) {
        "select" === e.input || "radio" === e.input ? qe(t, e) : -1 !== ["text", "email", "number", "tel", "textarea"].indexOf(e.input) && b(e.inputValue) && Ie(t, e)
    }

    function we(t, e) {
        t.disableButtons(), e.input ? Ve(t, e) : Re(t, e, !0)
    }

    function Ce(t, e) {
        t.disableButtons(), e(z.cancel)
    }

    function ke(t, e) {
        t.closePopup({
            value: e
        })
    }

    function xe(e, t, n, o) {
        t.keydownTarget && t.keydownHandlerAdded && (t.keydownTarget.removeEventListener("keydown", t.keydownHandler, {
            capture: t.keydownListenerCapture
        }), t.keydownHandlerAdded = !1), n.toast || (t.keydownHandler = function (t) {
            return Ne(e, t, o)
        }, t.keydownTarget = n.keydownListenerCapture ? window : Z(), t.keydownListenerCapture = n.keydownListenerCapture, t.keydownTarget.addEventListener("keydown", t.keydownHandler, {
            capture: t.keydownListenerCapture
        }), t.keydownHandlerAdded = !0)
    }

    function Pe(t, e, n) {
        var o = j(),
            i = 0;
        if (i < o.length) return (e += n) === o.length ? e = 0 : -1 === e && (e = o.length - 1), o[e].focus();
        Z().focus()
    }

    function Ae(t, e, n) {
        Pt.innerParams.get(t).toast ? We(t, e, n) : (Ye(e), Ze(e), Qe(t, e, n))
    }
    var Be = function (t, e) {
            wt && rt(e) ? (t.style.overflowY = "hidden", e.addEventListener(wt, be)) : t.style.overflowY = "auto"
        },
        Se = function (t, e) {
            var n;
            (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints) && !H(document.body, W.iosfix) && (n = document.body.scrollTop, document.body.style.top = "".concat(-1 * n, "px"), pt(document.body, W.iosfix), re()), "undefined" != typeof window && oe() && (ie(), window.addEventListener("resize", ie)), h(document.body.children).forEach(function (t) {
                t === Y() || function (t, e) {
                    if ("function" == typeof t.contains) return t.contains(e)
                }(t, Y()) || (t.hasAttribute("aria-hidden") && t.setAttribute("data-previous-aria-hidden", t.getAttribute("aria-hidden")), t.setAttribute("aria-hidden", "true"))
            }), e && ne(), setTimeout(function () {
                t.scrollTop = 0
            })
        },
        Ee = function (t, e, n) {
            pt(t, n.showClass.backdrop), et(e), pt(e, n.showClass.popup), pt([document.documentElement, document.body], W.shown), n.heightAuto && n.backdrop && !n.toast && pt([document.documentElement, document.body], W["height-auto"])
        },
        Oe = function (t) {
            return t.checked ? 1 : 0
        },
        Te = function (t) {
            return t.checked ? t.value : null
        },
        Le = function (t) {
            return t.files.length ? null !== t.getAttribute("multiple") ? t.files : t.files[0] : null
        },
        qe = function (e, n) {
            function o(t) {
                return je[n.input](i, Me(t), n)
            }
            var i = x();
            b(n.inputOptions) ? (Ft(), n.inputOptions.then(function (t) {
                e.hideLoading(), o(t)
            })) : "object" === r(n.inputOptions) ? o(n.inputOptions) : v("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(r(n.inputOptions)))
        },
        Ie = function (e, n) {
            var o = e.getInput();
            nt(o), n.inputValue.then(function (t) {
                o.value = "number" === n.input ? parseFloat(t) || 0 : "".concat(t), et(o), o.focus(), e.hideLoading()
            }).catch(function (t) {
                v("Error in inputValue promise: ".concat(t)), o.value = "", et(o), o.focus(), e.hideLoading()
            })
        },
        je = {
            select: function (t, e, i) {
                var r = mt(t, W.select);
                e.forEach(function (t) {
                    var e = t[0],
                        n = t[1],
                        o = document.createElement("option");
                    o.value = e, R(o, n), i.inputValue.toString() === e.toString() && (o.selected = !0), r.appendChild(o)
                }), r.focus()
            },
            radio: function (t, e, a) {
                var c = mt(t, W.radio);
                e.forEach(function (t) {
                    var e = t[0],
                        n = t[1],
                        o = document.createElement("input"),
                        i = document.createElement("label");
                    o.type = "radio", o.name = W.radio, o.value = e, a.inputValue.toString() === e.toString() && (o.checked = !0);
                    var r = document.createElement("span");
                    R(r, n), r.className = W.label, i.appendChild(o), i.appendChild(r), c.appendChild(i)
                });
                var n = c.querySelectorAll("input");
                n.length && n[0].focus()
            }
        },
        Me = function (e) {
            var n = [];
            return "undefined" != typeof Map && e instanceof Map ? e.forEach(function (t, e) {
                n.push([e, t])
            }) : Object.keys(e).forEach(function (t) {
                n.push([t, e[t]])
            }), n
        },
        Ve = function (e, n) {
            var o = function (t, e) {
                var n = t.getInput();
                if (!n) return null;
                switch (e.input) {
                    case "checkbox":
                        return Oe(n);
                    case "radio":
                        return Te(n);
                    case "file":
                        return Le(n);
                    default:
                        return e.inputAutoTrim ? n.value.trim() : n.value
                }
            }(e, n);
            n.inputValidator ? (e.disableInput(), Promise.resolve().then(function () {
                return n.inputValidator(o, n.validationMessage)
            }).then(function (t) {
                e.enableButtons(), e.enableInput(), t ? e.showValidationMessage(t) : Re(e, n, o)
            })) : e.getInput().checkValidity() ? Re(e, n, o) : (e.enableButtons(), e.showValidationMessage(n.validationMessage))
        },
        Re = function (e, t, n) {
            t.showLoaderOnConfirm && Ft(), t.preConfirm ? (e.resetValidationMessage(), Promise.resolve().then(function () {
                return t.preConfirm(n, t.validationMessage)
            }).then(function (t) {
                ht(B()) || !1 === t ? e.hideLoading() : ke(e, void 0 === t ? n : t)
            })) : ke(e, n)
        },
        He = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Left", "Right", "Up", "Down"],
        De = ["Escape", "Esc"],
        Ne = function (t, e, n) {
            var o = Pt.innerParams.get(t);
            o.stopKeydownPropagation && e.stopPropagation(), "Enter" === e.key ? Ue(t, e, o) : "Tab" === e.key ? _e(e, o) : -1 !== He.indexOf(e.key) ? Fe() : -1 !== De.indexOf(e.key) && ze(e, o, n)
        },
        Ue = function (t, e, n) {
            if (!e.isComposing && e.target && t.getInput() && e.target.outerHTML === t.getInput().outerHTML) {
                if (-1 !== ["textarea", "file"].indexOf(n.input)) return;
                Vt(), e.preventDefault()
            }
        },
        _e = function (t) {
            for (var e = t.target, n = j(), o = -1, i = 0; i < n.length; i++)
                if (e === n[i]) {
                    o = i;
                    break
                } t.shiftKey ? Pe(0, o, -1) : Pe(0, o, 1), t.stopPropagation(), t.preventDefault()
        },
        Fe = function () {
            var t = S(),
                e = E();
            document.activeElement === t && ht(e) ? e.focus() : document.activeElement === e && ht(t) && t.focus()
        },
        ze = function (t, e, n) {
            F(e.allowEscapeKey) && (t.preventDefault(), n(z.esc))
        },
        We = function (e, t, n) {
            t.popup.onclick = function () {
                var t = Pt.innerParams.get(e);
                t.showConfirmButton || t.showCancelButton || t.showCloseButton || t.input || n(z.close)
            }
        },
        Ke = !1,
        Ye = function (e) {
            e.popup.onmousedown = function () {
                e.container.onmouseup = function (t) {
                    e.container.onmouseup = void 0, t.target === e.container && (Ke = !0)
                }
            }
        },
        Ze = function (e) {
            e.container.onmousedown = function () {
                e.popup.onmouseup = function (t) {
                    e.popup.onmouseup = void 0, t.target !== e.popup && !e.popup.contains(t.target) || (Ke = !0)
                }
            }
        },
        Qe = function (n, o, i) {
            o.container.onclick = function (t) {
                var e = Pt.innerParams.get(n);
                Ke ? Ke = !1 : t.target === o.container && F(e.allowOutsideClick) && i(z.backdrop)
            }
        };
    var $e = function (t, e, n) {
            var o = q();
            nt(o), e.timer && (t.timeout = new me(function () {
                n("timer"), delete t.timeout
            }, e.timer), e.timerProgressBar && (et(o), setTimeout(function () {
                t.timeout.running && at(e.timer)
            })))
        },
        Je = function (t, e) {
            if (!e.toast) return F(e.allowEnterKey) ? e.focusCancel && ht(t.cancelButton) ? t.cancelButton.focus() : e.focusConfirm && ht(t.confirmButton) ? t.confirmButton.focus() : void Pe(0, -1, 1) : Xe()
        },
        Xe = function () {
            document.activeElement && "function" == typeof document.activeElement.blur && document.activeElement.blur()
        };
    var Ge, tn = function (t) {
            for (var e in t) t[e] = new WeakMap
        },
        en = Object.freeze({
            hideLoading: ee,
            disableLoading: ee,
            getInput: function (t) {
                var e = Pt.innerParams.get(t || this),
                    n = Pt.domCache.get(t || this);
                return n ? J(n.content, e.input) : null
            },
            close: ue,
            closePopup: ue,
            closeModal: ue,
            closeToast: ue,
            enableButtons: function () {
                pe(this, ["confirmButton", "cancelButton"], !1)
            },
            disableButtons: function () {
                pe(this, ["confirmButton", "cancelButton"], !0)
            },
            enableInput: function () {
                return fe(this.getInput(), !1)
            },
            disableInput: function () {
                return fe(this.getInput(), !0)
            },
            showValidationMessage: function (t) {
                var e = Pt.domCache.get(this);
                R(e.validationMessage, t);
                var n = window.getComputedStyle(e.popup);
                e.validationMessage.style.marginLeft = "-".concat(n.getPropertyValue("padding-left")), e.validationMessage.style.marginRight = "-".concat(n.getPropertyValue("padding-right")), et(e.validationMessage);
                var o = this.getInput();
                o && (o.setAttribute("aria-invalid", !0), o.setAttribute("aria-describedBy", W["validation-message"]), X(o), pt(o, W.inputerror))
            },
            resetValidationMessage: function () {
                var t = Pt.domCache.get(this);
                t.validationMessage && nt(t.validationMessage);
                var e = this.getInput();
                e && (e.removeAttribute("aria-invalid"), e.removeAttribute("aria-describedBy"), ft(e, W.inputerror))
            },
            getProgressSteps: function () {
                return Pt.domCache.get(this).progressSteps
            },
            _main: function (t) {
                ! function (t) {
                    for (var e in t) Yt(i = e) || U('Unknown parameter "'.concat(i, '"')), t.toast && (o = e, -1 !== Gt.indexOf(o) && U('The parameter "'.concat(o, '" is incompatible with toasts'))), Zt(n = e) && g(n, Zt(n));
                    var n, o, i
                }(t), Qt.currentInstance && Qt.currentInstance._destroy(), Qt.currentInstance = this;
                var e = function (t) {
                    var e = s({}, $t.showClass, t.showClass),
                        n = s({}, $t.hideClass, t.hideClass),
                        o = s({}, $t, t);
                    if (o.showClass = e, o.hideClass = n, t.animation === false) {
                        o.showClass = {
                            popup: "swal2-noanimation",
                            backdrop: "swal2-noanimation"
                        };
                        o.hideClass = {}
                    }
                    return o
                }(t);
                ge(e), Object.freeze(e), Qt.timeout && (Qt.timeout.stop(), delete Qt.timeout), clearTimeout(Qt.restoreFocusTimeout);
                var n = function (t) {
                    var e = {
                        popup: Z(),
                        container: Y(),
                        content: x(),
                        actions: O(),
                        confirmButton: S(),
                        cancelButton: E(),
                        closeButton: I(),
                        validationMessage: B(),
                        progressSteps: A()
                    };
                    return Pt.domCache.set(t, e), e
                }(this);
                return Mt(this, e), Pt.innerParams.set(this, e),
                    function (n, o, i) {
                        return new Promise(function (t) {
                            var e = function t(e) {
                                n.closePopup({
                                    dismiss: e
                                })
                            };
                            ce.swalPromiseResolve.set(n, t);
                            o.confirmButton.onclick = function () {
                                return we(n, i)
                            };
                            o.cancelButton.onclick = function () {
                                return Ce(n, e)
                            };
                            o.closeButton.onclick = function () {
                                return e(z.close)
                            };
                            Ae(n, o, e);
                            xe(n, Qt, i, e);
                            if (i.toast && (i.input || i.footer || i.showCloseButton)) {
                                pt(document.body, W["toast-column"])
                            } else {
                                ft(document.body, W["toast-column"])
                            }
                            ye(n, i);
                            ve(i);
                            $e(Qt, i, e);
                            Je(o, i);
                            setTimeout(function () {
                                o.container.scrollTop = 0
                            })
                        })
                    }(this, n, e)
            },
            update: function (e) {
                var t = Z(),
                    n = Pt.innerParams.get(this);
                if (!t || H(t, n.hideClass.popup)) return U("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
                var o = {};
                Object.keys(e).forEach(function (t) {
                    on.isUpdatableParameter(t) ? o[t] = e[t] : U('Invalid parameter to update: "'.concat(t, '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js'))
                });
                var i = s({}, n, o);
                Mt(this, i), Pt.innerParams.set(this, i), Object.defineProperties(this, {
                    params: {
                        value: s({}, this.params, e),
                        writable: !1,
                        enumerable: !0
                    }
                })
            },
            _destroy: function () {
                var t = Pt.domCache.get(this),
                    e = Pt.innerParams.get(this);
                e && (t.popup && Qt.swalCloseEventFinishedCallback && (Qt.swalCloseEventFinishedCallback(), delete Qt.swalCloseEventFinishedCallback), Qt.deferDisposalTimer && (clearTimeout(Qt.deferDisposalTimer), delete Qt.deferDisposalTimer), "function" == typeof e.onDestroy && e.onDestroy(), delete this.params, delete Qt.keydownHandler, delete Qt.keydownTarget, tn(Pt), tn(ce))
            }
        }),
        nn = function () {
            function r() {
                if (a(this, r), "undefined" != typeof window) {
                    "undefined" == typeof Promise && v("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"), Ge = this;
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    var o = Object.freeze(this.constructor.argsToParams(e));
                    Object.defineProperties(this, {
                        params: {
                            value: o,
                            writable: !1,
                            enumerable: !0,
                            configurable: !0
                        }
                    });
                    var i = this._main(this.params);
                    Pt.promise.set(this, i)
                }
            }
            return c(r, [{
                key: "then",
                value: function (t) {
                    return Pt.promise.get(this).then(t)
                }
            }, {
                key: "finally",
                value: function (t) {
                    return Pt.promise.get(this).finally(t)
                }
            }]), r
        }();
    s(nn.prototype, en), s(nn, te), Object.keys(en).forEach(function (t) {
        nn[t] = function () {
            if (Ge) return Ge[t].apply(Ge, arguments)
        }
    }), nn.DismissReason = z, nn.version = "9.10.13";
    var on = nn;
    return on.default = on
}), void 0 !== this && this.Sweetalert2 && (this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2);
"undefined" != typeof document && function (e, t) {
    var n = e.createElement("style");
    if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t);
    else try {
        n.innerHTML = t
    } catch (e) {
        n.innerText = t
    }
}(document, ".swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-no-transition{transition:none!important}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-actions.swal2-loading .swal2-styled.swal2-confirm{box-sizing:border-box;width:2.5em;height:2.5em;margin:.46875em;padding:0;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent!important;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{content:\"\";display:inline-block;width:15px;height:15px;margin-left:5px;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#fca311;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;height:.25em;overflow:hidden;border-bottom-right-radius:.3125em;border-bottom-left-radius:.3125em}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;align-items:center;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:0;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close::-moz-focus-inner{border:0}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-file::-webkit-input-placeholder,.swal2-input::-webkit-input-placeholder,.swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::-ms-input-placeholder,.swal2-input::-ms-input-placeholder,.swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#fca311;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#fca311}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#fca311}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}");