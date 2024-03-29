"use strict";
function ownKeys(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function _objectSpread(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? ownKeys(Object(n), !0).forEach(function (t) {
          _defineProperty(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : ownKeys(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
  }
  return e;
}
function _defineProperty(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function _typeof(e) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            "function" == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        })(e);
}
!(function (e, t) {
  "function" == typeof define && define.amd
    ? define([], function () {
        return t(e);
      })
    : "object" ===
        ("undefined" == typeof module ? "undefined" : _typeof(module)) &&
      "object" === _typeof(module.exports)
    ? (module.exports = t(e))
    : (e.Fnon = t(e));
})(
  "undefined" != typeof global
    ? global
    : "undefined" != typeof window
    ? window
    : void 0,
  function (e) {
    var t;
    if (void 0 === e && void 0 === e.document) return !1;
    var n = function (e) {
        for (
          var t = "",
            n =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            r = n.length,
            a = 0;
          a < e;
          a++
        )
          t += n.charAt(Math.floor(Math.random() * r));
        return "Fnon" + t;
      },
      r =
        '<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="ani"><path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z" class=""></path></svg>',
      a =
        '<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="ani"><path fill="currentColor" d="M248.747 204.705l6.588 112c.373 6.343 5.626 11.295 11.979 11.295h41.37a12 12 0 0 0 11.979-11.295l6.588-112c.405-6.893-5.075-12.705-11.979-12.705h-54.547c-6.903 0-12.383 5.812-11.978 12.705zM330 384c0 23.196-18.804 42-42 42s-42-18.804-42-42 18.804-42 42-42 42 18.804 42 42zm-.423-360.015c-18.433-31.951-64.687-32.009-83.154 0L6.477 440.013C-11.945 471.946 11.118 512 48.054 512H527.94c36.865 0 60.035-39.993 41.577-71.987L329.577 23.985zM53.191 455.002L282.803 57.008c2.309-4.002 8.085-4.002 10.394 0l229.612 397.993c2.308 4-.579 8.998-5.197 8.998H58.388c-4.617.001-7.504-4.997-5.197-8.997z" class=""></path></svg>',
      o =
        '<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="ani"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z" class=""></path></svg>',
      i =
        '<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="ani"><path fill="currentColor" d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-36 344h12V232h-12c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h48c6.627 0 12 5.373 12 12v140h12c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12h-72c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12zm36-240c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32z" class=""></path></svg>',
      c = "#029eff",
      l = "#39DA8A",
      s = "#fdd347",
      d = "#f55260",
      f = "#56b6f7",
      u = "#222f3e",
      m = "#fff",
      p = g(c, 9),
      y = "'Quicksand', sans-serif";
    function b(e) {
      return new DOMParser().parseFromString(e, "text/html").body.firstChild;
    }
    function g(t, n) {
      for (
        var r = (function (t) {
            var n = document.createElement("div");
            (n.style.color = t),
              (n.style.display = "none"),
              document.body.appendChild(n);
            var r = e.getComputedStyle(n).getPropertyValue("color");
            return document.body.removeChild(n), r;
          })(t),
          a = r
            .replace("rgb(", "")
            .replace(")", "")
            .split(",")
            .map(function (e) {
              return e.trim();
            }),
          o = a[0] % 256,
          i = a[1] % 256,
          c = a[2] % 256,
          l = [r],
          s = 0;
        s < n;
        s++
      )
        (o -= 33),
          (i -= 33),
          (c -= 33),
          l.push("rgb(" + o + "," + i + "," + c + ")");
      return l;
    }
    function v(e, t) {
      return t && "object" === _typeof(t)
        ? _objectSpread(_objectSpread({}, e), t)
        : e;
    }
    var k = function (e, t) {
        return console.error(
          "%c " + e + " ",
          "padding:2px;border-radius:6px;color:#fff;background:red",
          "\n" + t + "\n Visit www.url.com to learn more.."
        );
      },
      h = {
        text: "Button",
        color: u,
        background: m,
        shadow: "rgba(0, 0, 0, 0.1)",
        borderColor: "#d4d4d4",
        css: void 0,
      },
      w =
        (_defineProperty(
          (t = {
            fontFamily: y,
            width: "nl",
            closeButton: !0,
            animation: "slide-top",
          }),
          "closeButton",
          !1
        ),
        _defineProperty(t, "callback", void 0),
        _defineProperty(t, "cancelCallback", void 0),
        _defineProperty(t, "icon", void 0),
        _defineProperty(t, "iconColor", u),
        _defineProperty(t, "showIcon", !1),
        _defineProperty(t, "message", ""),
        _defineProperty(t, "title", ""),
        _defineProperty(t, "titleColor", u),
        _defineProperty(t, "titleBackground", m),
        _defineProperty(t, "btnOkText", "Ok"),
        _defineProperty(t, "btnOkColor", u),
        _defineProperty(t, "btnOkBackground", m),
        _defineProperty(t, "btnOkShadow", "rgba(0, 0, 0, 0.2)"),
        _defineProperty(t, "btnOkBorderColor", "#d4d4d4"),
        _defineProperty(t, "btnCancelText", "Cancel"),
        _defineProperty(t, "btnCancelColor", u),
        _defineProperty(t, "btnCancelBackground", m),
        _defineProperty(t, "btnCancelShadow", "rgba(0, 0, 0, 0.1)"),
        _defineProperty(t, "btnCancelBorderColor", "#d4d4d4"),
        _defineProperty(t, "color", "#2b2b2b"),
        _defineProperty(t, "background", "rgba(0, 0, 0, 0.4)"),
        _defineProperty(t, "zIndex", 4e3),
        _defineProperty(t, "beforeShow", void 0),
        _defineProperty(t, "afterShow", void 0),
        _defineProperty(t, "delButtons", !1),
        t),
      x = {
        Primary: {
          titleColor: m,
          titleBackground: c,
          btnOkColor: m,
          btnOkBackground: c,
          btnOkBorderColor: "transparent",
        },
        Success: {
          titleColor: m,
          titleBackground: l,
          btnOkColor: m,
          btnOkBackground: l,
          btnOkBorderColor: "transparent",
          icon: r,
          iconColor: l,
        },
        Warning: {
          titleColor: u,
          titleBackground: s,
          btnOkColor: u,
          btnOkBackground: s,
          btnOkBorderColor: "transparent",
          icon: a,
          iconColor: s,
        },
        Danger: {
          titleColor: m,
          titleBackground: d,
          btnOkColor: m,
          btnOkBackground: d,
          btnOkBorderColor: "transparent",
          icon: o,
          iconColor: d,
        },
        Info: {
          titleColor: m,
          titleBackground: f,
          btnOkColor: m,
          btnOkBackground: f,
          btnOkBorderColor: "transparent",
          icon: i,
          iconColor: f,
        },
        Dark: {
          titleColor: m,
          titleBackground: u,
          btnOkColor: m,
          btnOkBackground: u,
          btnOkBorderColor: "transparent",
          btnOkShadow: "rgba(255, 255, 255, 0.1)",
        },
        Light: {},
      },
      C = _objectSpread({}, w),
      _ = _objectSpread({}, w),
      L = _objectSpread({}, w);
    function S(e) {
      document.body.classList.remove("f__of_hidden"),
        (e.style.pointerEvents = "none"),
        (e.style.opacity = 0),
        setTimeout(function () {
          e.remove();
        }, 400);
    }
    function T(e, t) {
      var n =
          "dialogue" == t
            ? ""
            : "".concat(
                e.showIcon && e.icon
                  ? '<div class="askicon" style="--icon-c:'
                      .concat(e.iconColor, '">')
                      .concat(e.icon, "</div>")
                  : ""
              ),
        r =
          "dialogue" === t &&
          e.buttons &&
          Array.isArray(e.buttons) &&
          e.buttons.length > 0,
        a = "";
      a = r
        ? '<div class="f__m__f">'.concat(
            e.buttons.reduce(function (e, t, n) {
              var r,
                a = _objectSpread({}, h);
              t.style &&
                "Light" != t.style &&
                x[t.style] &&
                ((a.color = x[t.style].btnOkColor),
                (a.background = x[t.style].btnOkBackground),
                (a.borderColor = x[t.style].btnOkBorderColor));
              var o = _objectSpread(_objectSpread({}, a), t);
              return (e += '<button class="f__btn '
                .concat(
                  null !== (r = o.css) && void 0 !== r ? r : "",
                  '" data-i="'
                )
                .concat(n, '" style="background:')
                .concat(o.background, ";color:")
                .concat(o.color, ";--b-sh:")
                .concat(o.shadow, ";border-color:")
                .concat(o.borderColor, ';">')
                .concat(o.text, "</button>"));
            }, ""),
            "</div>"
          )
        : '<div class="f__m__f">'
            .concat(
              "alert" != t
                ? '<button class="f__btn" data-evt="ccl" style="background:'
                    .concat(e.btnCancelBackground, ";color:")
                    .concat(e.btnCancelColor, ";--b-sh:")
                    .concat(e.btnCancelShadow, ";border-color:")
                    .concat(e.btnCancelBorderColor, ';">')
                    .concat(e.btnCancelText, "</button>")
                : "",
              '<button class="f__btn" data-al="true" data-evt="tr" style="background:'
            )
            .concat(e.btnOkBackground, ";color:")
            .concat(e.btnOkColor, ";--b-sh:")
            .concat(e.btnOkShadow, ";border-color:")
            .concat(e.btnOkBorderColor, ';">')
            .concat(e.btnOkText, "</button></div>");
      var o = '<div class="f__cm'
        .concat("fl" === e.width ? " fl" : "", '" style="--f-f:')
        .concat(e.fontFamily, ";--m-bg:")
        .concat(e.background, ";--fnon-scroll-color:")
        .concat(e.titleBackground, ";z-index:")
        .concat(e.zIndex, ';"><div class="f__m f__m__')
        .concat(e.width, " ")
        .concat(e.animation, '">')
        .concat(
          "" == e.title
            ? ""
            : '<div class="f__m__h" style="background:'
                .concat(
                  e.titleBackground,
                  ';"><h5 class="f__m__h__ttl" style="color:'
                )
                .concat(e.titleColor, ';">')
                .concat(e.title, "</h5>")
                .concat(
                  e.closeButton
                    ? '<button type="button" data-al="true" data-evt="ccl" class="cls"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:'.concat(
                        e.titleColor,
                        ';"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>'
                      )
                    : "",
                  "</div>"
                ),
          '<div class="f__m__b">'
        )
        .concat(n, '<div class="f__m__b__ask ')
        .concat("dialogue" == t ? "" : "ico", '" styel="--color:')
        .concat(e.color, '">')
        .concat(e.message, "</div></div>")
        .concat(e.delButtons ? "" : a, "</div></div>");
      if (((o = b(o)), "alert" != t)) {
        var i = o.querySelectorAll('[data-evt="ccl"]');
        if (
          (i &&
            Array.from(i).forEach(function (n) {
              "dialogue" == t
                ? n.addEventListener("click", function () {
                    if (
                      e.cancelCallback &&
                      "function" == typeof e.cancelCallback
                    ) {
                      var t = e.cancelCallback(function () {
                        S(o);
                      }, o.querySelector("div.f__m__b__ask"));
                      (null != t && !0 !== t) || S(o);
                    } else S(o);
                  })
                : n.addEventListener("click", function () {
                    S(o),
                      e.callback &&
                        "function" == typeof e.callback &&
                        e.callback(!1);
                  });
            }),
          r)
        )
          o.querySelectorAll(".f__m__f button").forEach(function (t) {
            var n = e.buttons[t.dataset.i];
            n && n.callback && "function" == typeof n.callback
              ? t.addEventListener("click", function (e) {
                  var t = n.callback(function () {
                    S(o);
                  }, o.querySelector("div.f__m__b__ask"));
                  (null != t && !0 !== t) || S(o);
                })
              : t.addEventListener("click", function () {
                  return S(o);
                });
          });
        else {
          var c = o.querySelector('[data-evt="tr"]');
          c &&
            c.addEventListener("click", function () {
              if (e.callback && "function" == typeof e.callback)
                if ("dialogue" == t) {
                  var n = e.callback(function () {
                    S(o);
                  }, o.querySelector("div.f__m__b__ask"));
                  (null != n && !0 !== n) || S(o);
                } else e.callback(!0), S(o);
              else S(o);
            });
        }
      } else {
        var l = o.querySelectorAll('[data-al="true"]');
        Array.from(l).forEach(function (t) {
          t.addEventListener("click", function () {
            e.callback && "function" == typeof e.callback && e.callback(), S(o);
          });
        });
      }
      return (
        e.beforeShow && "function" == typeof e.beforeShow && e.beforeShow(o),
        document.body.classList.add("f__of_hidden"),
        document.body.appendChild(o),
        e.afterShow && "function" == typeof e.afterShow && e.afterShow(o),
        o
      );
    }
    var M = {
      Init: function (e) {
        return (C = v(C, e));
      },
    };
    Object.keys(x).forEach(function (e) {
      return (M[e] = function (t, n, r, a, o) {
        if (t && "" != t) {
          var i = _objectSpread(_objectSpread({}, C), x[e]);
          t && "object" === _typeof(t)
            ? (i = _objectSpread(_objectSpread({}, i), t))
            : ((i.message = t),
              n && (i.title = n),
              r && (i.btnOkText = r),
              a && (i.btnCancelText = a),
              o && (i.callback = o));
          var c = T(i);
          if (i.delButtons)
            return function () {
              S(c);
            };
        } else k("Message Null", "Message Can not be null !!!");
      });
    });
    var B = {
      Init: function (e) {
        return (_ = v(_, e));
      },
    };
    Object.keys(x).forEach(function (e) {
      return (B[e] = function (t, n, r, a, o, i) {
        if (t && "" != t) {
          var c = _objectSpread(_objectSpread({}, _), x[e]);
          t && "object" === _typeof(t)
            ? (c = _objectSpread(_objectSpread({}, c), t))
            : ((c.message = t),
              n && (c.title = n),
              r && (c.btnOkText = r),
              a && (c.btnCancelText = a),
              o && (c.callback = o),
              i && (c.cancelCallback = i));
          var l = T(c, "dialogue");
          if (c.delButtons)
            return function () {
              S(l);
            };
        } else k("Message Null", "Body not be null !!!");
      });
    });
    var A = {
      Init: function (e) {
        return (L = v(L, e));
      },
    };
    Object.keys(x).forEach(function (e) {
      return (A[e] = function (t, n, r, a) {
        if (t && "" != t) {
          var o = _objectSpread(_objectSpread({}, L), x[e]);
          t && "object" === _typeof(t)
            ? (o = _objectSpread(_objectSpread({}, o), t))
            : ((o.message = t),
              n && (o.title = n),
              r && (o.btnOkText = r),
              a && (o.callback = a));
          var i = T(o, "alert");
          if (o.delButtons)
            return function () {
              S(i);
            };
        } else k("Message Null", "Message Can not be null !!!");
      });
    });
    var j = {
      fontFamily: y,
      position: "right-top",
      spacing: "16px",
      svgSize: { w: "16px", h: "16px" },
      textColor: "#fff",
      fontSize: "14px",
      backgroundColor: "#029eff",
      shadowColor: "rgba(2, 158, 255, 0.3)",
      width: "300px",
      zindex: 4e3,
      animation: "slide-left",
      animationDuration: 500,
      displayDuration: 3e3,
      progressColor: "rgba(255,255,255,0.9)",
      callback: void 0,
      title: void 0,
    };
    var O = {
        Primary: {
          textColor: "#fff",
          backgroundColor: c,
          shadowColor: "rgba(2, 158, 255, 0.3)",
          svg: null,
        },
        Light: {
          textColor: u,
          backgroundColor: m,
          shadowColor: "rgba(34, 47, 62, 0.3)",
          svg: null,
        },
        Dark: {
          textColor: "#fff",
          backgroundColor: u,
          shadowColor: "rgba(34, 47, 62, 0.3)",
          svg: null,
        },
        Success: {
          textColor: "#fff",
          backgroundColor: l,
          shadowColor: "rgba(57, 218, 138, 0.3)",
          svg: r,
        },
        Warning: {
          textColor: "#fff",
          backgroundColor: s,
          shadowColor: "rgba(253, 211, 71, 0.3)",
          svg: a,
        },
        Danger: {
          textColor: "#fff",
          backgroundColor: d,
          shadowColor: "rgba(245, 82, 96, 0.3)",
          svg: o,
        },
        Info: {
          textColor: "#fff",
          backgroundColor: f,
          shadowColor: "rgba(86, 182, 247, 0.3)",
          svg: i,
        },
      },
      N = {
        Init: function (e) {
          return (j = v(j, e));
        },
      };
    Object.keys(O).forEach(function (e) {
      return (N[e] = function (t, n) {
        if (t) {
          var r = O[e],
            a =
              n && "object" === _typeof(n)
                ? _objectSpread(_objectSpread(_objectSpread({}, j), r), n)
                : _objectSpread(_objectSpread({}, j), r);
          n && "function" == typeof n && (a.callback = n),
            n &&
              "object" !== _typeof(n) &&
              "function" != typeof n &&
              (a.title = n),
            (function (e, t) {
              var n = t.title
                  ? '<span style="font-weight:bold;font-size:1.025em;">'.concat(
                      t.title,
                      "</span><br/>"
                    )
                  : "",
                r = '<div class="f__h '
                  .concat(
                    t.animation ? t.animation : "",
                    '" style="--hint-color:'
                  )
                  .concat(t.textColor, ";--hint-bg-color:")
                  .concat(t.backgroundColor, ";--hint-shadow-color:")
                  .concat(t.shadowColor, ";font-size:")
                  .concat(t.fontSize, ";--svg-h:")
                  .concat(t.svgSize.h, ";--svg-w:")
                  .concat(t.svgSize.w, ";--h-width:")
                  .concat(t.width, ";--ani-dura:")
                  .concat(t.animationDuration, "ms;--display-dur:")
                  .concat(t.displayDuration, "ms;--prog-color:")
                  .concat(t.progressColor, '">')
                  .concat(t.svg ? t.svg : "", '<span style="font-family:')
                  .concat(t.fontFamily, ';">')
                  .concat(n + e, "</span></div>");
              r = b(r);
              var a = ".f__ch." + t.position,
                o = document.querySelector(a);
              o ||
                ((o = b(
                  '<div class="f__ch '
                    .concat(t.position, '" style="--h-spacing:')
                    .concat(t.spacing, '"></div>')
                )),
                document.body.appendChild(o)),
                o.appendChild(r),
                setTimeout(function () {
                  r.remove(),
                    t.callback &&
                      "function" == typeof t.callback &&
                      t.callback(),
                    setTimeout(function () {
                      0 === o.children.length && o.remove();
                    }, t.displayDuration);
                }, t.displayDuration + t.animationDuration);
            })(t, a);
        } else
          k(
            "Message Empty!",
            "Hint body can not be displayed if message is null."
          );
      });
    });
    var P = {
        cid: n(12),
        svgSize: { w: "100px", h: "100px" },
        svgColor: "#029eff",
        textColor: "#029eff",
        textSize: "16px",
        clickToClose: !0,
        fontFamily: y,
        background: "rgba(255,255,255,0.5)",
        zindex: 4e3,
        containerSize: "350px",
      },
      z = _defineProperty(
        {
          Infinity: function () {
            return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><path fill="none" stroke="'.concat(
              p[0],
              '" stroke-width="4" stroke-dasharray="133.42624267578125 123.162685546875" d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z" stroke-linecap="round" style="transform:scale(0.8);transform-origin:50px 50px"><animate attributeName="stroke-dashoffset" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0;256"></animate></path></svg>'
            );
          },
          Ripple: function () {
            return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="50" cy="50" r="0" fill="none" stroke="'
              .concat(
                p[0],
                '" stroke-width="6"><animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.5s"></animate><animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.5s"></animate></circle><circle cx="50" cy="50" r="0" fill="none" stroke="'
              )
              .concat(
                p[1],
                '" stroke-width="6"><animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline"></animate><animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline"></animate></circle></svg>'
              );
          },
          Liquid: function () {
            return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="50" cy="50" r="43" stroke="'
              .concat(
                p[0],
                '" stroke-width="5" fill="none"></circle><path d="M12 50 Q31 40 50 50 Q69 60 88 50 A38 38 0 0 1 12 50" fill="'
              )
              .concat(
                p[3],
                '"><animate attributeName="d" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="M12 50 Q31 40 50 50 Q69 60 88 50 A38 38 0 0 1 12 50;M12 50 Q31 60 50 50 Q69 40 88 50 A38 38 0 0 1 12 50;M12 50 Q31 40 50 50 Q69 60 88 50 A38 38 0 0 1 12 50" keySplines="0.5 0 0.5 1;0.5 0 0.5 1"></animate></path></svg>'
              );
          },
          ColorBar: function () {
            return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><defs><clipPath id="ldio-4jm8omtt4e-cp" x="0" y="0" width="100" height="100"><path d="M81.3,58.7H18.7c-4.8,0-8.7-3.9-8.7-8.7v0c0-4.8,3.9-8.7,8.7-8.7h62.7c4.8,0,8.7,3.9,8.7,8.7v0C90,54.8,86.1,58.7,81.3,58.7z"></path></clipPath></defs><path fill="none" stroke="'
              .concat(
                p[0],
                '" stroke-width="2.7928" d="M82 63H18c-7.2,0-13-5.8-13-13v0c0-7.2,5.8-13,13-13h64c7.2,0,13,5.8,13,13v0C95,57.2,89.2,63,82,63z"></path><g clip-path="url(#ldio-4jm8omtt4e-cp)"><g><rect x="-100" y="0" width="25" height="100" fill="'
              )
              .concat(
                p[4],
                '"></rect><rect x="-75" y="0" width="25" height="100" fill="'
              )
              .concat(
                p[3],
                '"></rect><rect x="-50" y="0" width="25" height="100" fill="'
              )
              .concat(
                p[2],
                '"></rect><rect x="-25" y="0" width="25" height="100" fill="'
              )
              .concat(
                p[1],
                '"></rect><rect x="0" y="0" width="25" height="100" fill="'
              )
              .concat(
                p[4],
                '"></rect><rect x="25" y="0" width="25" height="100" fill="'
              )
              .concat(
                p[3],
                '"></rect><rect x="50" y="0" width="25" height="100" fill="'
              )
              .concat(
                p[2],
                '"></rect><rect x="75" y="0" width="25" height="100" fill="'
              )
              .concat(
                p[1],
                '"></rect><animateTransform attributeName="transform" type="translate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0;100"></animateTransform></g></g></svg>'
              );
          },
          ProgressBar: function () {
            return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><defs><clipPath id="ldio-93bom2a7rr-cp" x="0" y="0" width="100" height="100"><rect x="0" y="0" width="0" height="100"><animate attributeName="width" repeatCount="indefinite" dur="1s" values="0;100;100" keyTimes="0;0.5;1"></animate><animate attributeName="x" repeatCount="indefinite" dur="1s" values="0;0;100" keyTimes="0;0.5;1"></animate></rect></clipPath></defs><path fill="none" stroke="'
              .concat(
                p[0],
                '" stroke-width="2.7928" d="M82 63H18c-7.2 0-13-5.8-13-13v0c0-7.2 5.8-13 13-13h64c7.2 0 13 5.8 13 13v0C95 57.2 89.2 63 82 63z"></path><path fill="'
              )
              .concat(
                p[1],
                '" clip-path="url(#ldio-93bom2a7rr-cp)" d="M81.3 58.7H18.7c-4.8 0-8.7-3.9-8.7-8.7v0c0-4.8 3.9-8.7 8.7-8.7h62.7c4.8 0 8.7 3.9 8.7 8.7v0C90 54.8 86.1 58.7 81.3 58.7z"></path></svg>'
              );
          },
          CurveBar: function () {
            return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g transform="translate(50,50)"><circle cx="0" cy="0" r="8.333333333333334" fill="none" stroke="'
              .concat(
                p[0],
                '" stroke-width="4" stroke-dasharray="26.179938779914945 26.179938779914945"><animateTransform attributeName="transform" type="rotate" values="0 0 0;-360 0 0" times="0;1" dur="1s" calcMode="spline" keySplines="0.2 0 0.8 1" begin="0" repeatCount="indefinite"></animateTransform></circle><circle cx="0" cy="0" r="16.666666666666668" fill="none" stroke="'
              )
              .concat(
                p[1],
                '" stroke-width="4" stroke-dasharray="52.35987755982989 52.35987755982989"><animateTransform attributeName="transform" type="rotate" values="0 0 0;360 0 0" times="0;1" dur="1s" calcMode="spline" keySplines="0.2 0 0.8 1" begin="-0.2" repeatCount="indefinite"></animateTransform></circle><circle cx="0" cy="0" r="25" fill="none" stroke="'
              )
              .concat(
                p[2],
                '" stroke-width="4" stroke-dasharray="78.53981633974483 78.53981633974483"><animateTransform attributeName="transform" type="rotate" values="0 0 0;-360 0 0" times="0;1" dur="1s" calcMode="spline" keySplines="0.2 0 0.8 1" begin="-0.4" repeatCount="indefinite"></animateTransform></circle><circle cx="0" cy="0" r="33.333333333333336" fill="none" stroke="'
              )
              .concat(
                p[3],
                '" stroke-width="4" stroke-dasharray="104.71975511965978 104.71975511965978"><animateTransform attributeName="transform" type="rotate" values="0 0 0;360 0 0" times="0;1" dur="1s" calcMode="spline" keySplines="0.2 0 0.8 1" begin="-0.6" repeatCount="indefinite"></animateTransform></circle><circle cx="0" cy="0" r="41.666666666666664" fill="none" stroke="'
              )
              .concat(
                p[4],
                '" stroke-width="4" stroke-dasharray="130.89969389957471 130.89969389957471"><animateTransform attributeName="transform" type="rotate" values="0 0 0;-360 0 0" times="0;1" dur="1s" calcMode="spline" keySplines="0.2 0 0.8 1" begin="-0.8" repeatCount="indefinite"></animateTransform></circle></g></svg>'
              );
          },
          LineDots: function () {
            return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g transform="translate(20 50)"><circle cx="0" cy="0" r="6" fill="'
              .concat(
                p[0],
                '"><animateTransform attributeName="transform" type="scale" begin="-0.375s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform></circle></g><g transform="translate(40 50)"><circle cx="0" cy="0" r="6" fill="'
              )
              .concat(
                p[1],
                '"><animateTransform attributeName="transform" type="scale" begin="-0.25s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform></circle></g><g transform="translate(60 50)"><circle cx="0" cy="0" r="6" fill="'
              )
              .concat(
                p[2],
                '"><animateTransform attributeName="transform" type="scale" begin="-0.125s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform></circle></g><g transform="translate(80 50)"><circle cx="0" cy="0" r="6" fill="'
              )
              .concat(
                p[3],
                '"><animateTransform attributeName="transform" type="scale" begin="0s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform></circle></g></svg>'
              );
          },
          Circle: function () {
            return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="50" cy="50" fill="none" stroke="'.concat(
              p[0],
              '" stroke-width="3" r="23" stroke-dasharray="108.38494654884786 38.12831551628262"><animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform></circle></svg>'
            );
          },
          CircleDots: function () {
            return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g><circle cx="73.801" cy="68.263" fill="'
              .concat(
                p[0],
                '" r="3"><animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s" begin="0s"></animateTransform></circle><circle cx="68.263" cy="73.801" fill="'
              )
              .concat(
                p[1],
                '" r="3"><animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s" begin="-0.062s"></animateTransform></circle><circle cx="61.481" cy="77.716" fill="'
              )
              .concat(
                p[2],
                '" r="3"><animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s" begin="-0.125s"></animateTransform></circle><circle cx="53.916" cy="79.743" fill="'
              )
              .concat(
                p[3],
                '" r="3"><animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s" begin="-0.187s"></animateTransform></circle><circle cx="46.084" cy="79.743" fill="'
              )
              .concat(
                p[4],
                '" r="3"><animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s" begin="-0.25s"></animateTransform></circle><circle cx="38.519" cy="77.716" fill="'
              )
              .concat(
                p[5],
                '" r="3"><animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s" begin="-0.312s"></animateTransform></circle><circle cx="31.737" cy="73.801" fill="'
              )
              .concat(
                p[6],
                '" r="3"><animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s" begin="-0.375s"></animateTransform></circle><circle cx="26.199" cy="68.263" fill="'
              )
              .concat(
                p[7],
                '" r="3"><animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s" begin="-0.437s"></animateTransform></circle><animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;0 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s"></animateTransform></g></svg>'
              );
          },
          Bricks: function () {
            return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><rect fill="'
              .concat(
                p[0],
                '" x="15" y="15" width="30" height="30" rx="3" ry="3"><animate attributeName="x" dur="2s" repeatCount="indefinite" keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1" values="15;55;55;55;55;15;15;15;15" begin="-1.8333333333333333s"></animate><animate attributeName="y" dur="2s" repeatCount="indefinite" keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1" values="15;55;55;55;55;15;15;15;15" begin="-1.3333333333333333s"></animate></rect><rect fill="'
              )
              .concat(
                p[1],
                '" x="15" y="15" width="30" height="30" rx="3" ry="3"><animate attributeName="x" dur="2s" repeatCount="indefinite" keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1" values="15;55;55;55;55;15;15;15;15" begin="-1.1666666666666667s"></animate><animate attributeName="y" dur="2s" repeatCount="indefinite" keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1" values="15;55;55;55;55;15;15;15;15" begin="-0.6666666666666666s"></animate></rect><rect fill="'
              )
              .concat(
                p[2],
                '" x="15" y="15" width="30" height="30" rx="3" ry="3"><animate attributeName="x" dur="2s" repeatCount="indefinite" keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1" values="15;55;55;55;55;15;15;15;15" begin="-0.5s"></animate><animate attributeName="y" dur="2s" repeatCount="indefinite" keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1" values="15;55;55;55;55;15;15;15;15" begin="0s"></animate></rect></svg>'
              );
          },
          Interwind: function () {
            return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g transform="translate(0 -7.5)"><circle cx="50" cy="41" r="10" fill="'
              .concat(
                p[0],
                '"><animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform><animate attributeName="r" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" values="0;15;0" keySplines="0.2 0 0.8 1;0.2 0 0.8 1"></animate></circle><circle cx="50" cy="41" r="10" fill="'
              )
              .concat(
                p[1],
                '"><animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="180 50 50;540 50 50"></animateTransform><animate attributeName="r" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" values="15;0;15" keySplines="0.2 0 0.8 1;0.2 0 0.8 1"></animate></circle></g></svg>'
              );
          },
          Typing: function () {
            return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="27.5" cy="57.5" r="5" fill="'
              .concat(
                p[0],
                '"><animate attributeName="cy" calcMode="spline" keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5" repeatCount="indefinite" values="57.5;42.5;57.5;57.5" keyTimes="0;0.3;0.6;1" dur=".7s" begin="-0.6s"></animate></circle> <circle cx="42.5" cy="57.5" r="5" fill="'
              )
              .concat(
                p[1],
                '"><animate attributeName="cy" calcMode="spline" keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5" repeatCount="indefinite" values="57.5;42.5;57.5;57.5" keyTimes="0;0.3;0.6;1" dur=".7s" begin="-0.44999999999999996s"></animate></circle> <circle cx="57.5" cy="57.5" r="5" fill="'
              )
              .concat(
                p[2],
                '"><animate attributeName="cy" calcMode="spline" keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5" repeatCount="indefinite" values="57.5;42.5;57.5;57.5" keyTimes="0;0.3;0.6;1" dur=".7s" begin="-0.3s"></animate></circle> <circle cx="72.5" cy="57.5" r="5" fill="'
              )
              .concat(
                p[3],
                '89bff8"><animate attributeName="cy" calcMode="spline" keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5" repeatCount="indefinite" values="57.5;42.5;57.5;57.5" keyTimes="0;0.3;0.6;1" dur=".7s" begin="-0.15s"></animate></circle></svg>'
              );
          },
          Gear: function () {
            return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g transform="translate(50 50)"><g><animateTransform attributeName="transform" type="rotate" values="0;32.72727272727273" keyTimes="0;1" dur="0.2785515320334262s" repeatCount="indefinite"></animateTransform><path d="M29.491524206117255 -5.5 L37.491524206117255 -5.5 L37.491524206117255 5.5 L29.491524206117255 5.5 A30 30 0 0 1 27.783373422978222 11.31742732423528 L27.783373422978222 11.31742732423528 L34.51340168562767 15.64255386388006 L28.5663526936161 24.896342725023054 L21.836324430966652 20.571216185378272 A30 30 0 0 1 17.254197885979497 24.54165143814614 L17.254197885979497 24.54165143814614 L20.57751798999459 31.818707400982287 L10.57156604109489 36.38827254400304 L7.2482459370797985 29.111216581166893 A30 30 0 0 1 1.246936432518882 29.974074623468482 L1.246936432518882 29.974074623468482 L0.1084177263326025 37.892646158515944 L-10.779618134357655 36.327182937509804 L-9.641099428171374 28.408611402462345 A30 30 0 0 1 -15.15621852783466 25.88994090253049 L-15.15621852783466 25.88994090253049 L-20.395104399396942 31.935937497364556 L-28.708349717293792 24.732469423966418 L-23.46946384573151 18.686472829132352 A30 30 0 0 1 -26.74738119432351 13.58593387462007 L-26.74738119432351 13.58593387462007 L-34.42332498323949 15.839794329351507 L-37.52238310849522 5.285371619592024 L-29.84643931957924 3.031511164860587 A30 30 0 0 1 -29.84643931957924 -3.0315111648605795 L-29.84643931957924 -3.0315111648605795 L-37.52238310849522 -5.285371619592015 L-34.423324983239496 -15.839794329351498 L-26.747381194323513 -13.585933874620062 A30 30 0 0 1 -23.469463845731514 -18.686472829132345 L-23.469463845731514 -18.686472829132345 L-28.7083497172938 -24.73246942396641 L-20.395104399396963 -31.93593749736455 L-15.156218527834678 -25.889940902530483 A30 30 0 0 1 -9.641099428171389 -28.40861140246234 L-9.641099428171389 -28.40861140246234 L-10.779618134357671 -36.327182937509804 L0.1084177263325996 -37.892646158515944 L1.2469364325188814 -29.974074623468482 A30 30 0 0 1 7.248245937079778 -29.111216581166897 L7.248245937079778 -29.111216581166897 L10.571566041094865 -36.388272544003044 L20.57751798999458 -31.81870740098229 L17.25419788597949 -24.541651438146143 A30 30 0 0 1 21.83632443096665 -20.571216185378276 L21.83632443096665 -20.571216185378276 L28.566352693616096 -24.896342725023057 L34.51340168562768 -15.642553863880053 L27.783373422978226 -11.317427324235274 A30 30 0 0 1 29.491524206117255 -5.500000000000013 M0 -20A20 20 0 1 0 0 20 A20 20 0 1 0 0 -20" fill="'.concat(
              p[0],
              '"></path></g></g></svg>'
            );
          },
          Gears: function () {
            return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g transform="translate(50 50)">  <g transform="translate(-19 -19) scale(0.6)"> <g><animateTransform attributeName="transform" type="rotate" values="0;45" keyTimes="0;1" dur="0.2s" begin="0s" repeatCount="indefinite"></animateTransform><path d="M31.359972760794346 21.46047782418268 L38.431040572659825 28.531545636048154 L28.531545636048154 38.431040572659825 L21.46047782418268 31.359972760794346 A38 38 0 0 1 7.0000000000000036 37.3496987939662 L7.0000000000000036 37.3496987939662 L7.000000000000004 47.3496987939662 L-6.999999999999999 47.3496987939662 L-7 37.3496987939662 A38 38 0 0 1 -21.46047782418268 31.35997276079435 L-21.46047782418268 31.35997276079435 L-28.531545636048154 38.431040572659825 L-38.43104057265982 28.531545636048158 L-31.359972760794346 21.460477824182682 A38 38 0 0 1 -37.3496987939662 7.000000000000007 L-37.3496987939662 7.000000000000007 L-47.3496987939662 7.000000000000008 L-47.3496987939662 -6.9999999999999964 L-37.3496987939662 -6.999999999999997 A38 38 0 0 1 -31.35997276079435 -21.460477824182675 L-31.35997276079435 -21.460477824182675 L-38.431040572659825 -28.531545636048147 L-28.53154563604818 -38.4310405726598 L-21.4604778241827 -31.35997276079433 A38 38 0 0 1 -6.999999999999992 -37.3496987939662 L-6.999999999999992 -37.3496987939662 L-6.999999999999994 -47.3496987939662 L6.999999999999977 -47.3496987939662 L6.999999999999979 -37.3496987939662 A38 38 0 0 1 21.460477824182686 -31.359972760794342 L21.460477824182686 -31.359972760794342 L28.531545636048158 -38.43104057265982 L38.4310405726598 -28.53154563604818 L31.35997276079433 -21.4604778241827 A38 38 0 0 1 37.3496987939662 -6.999999999999995 L37.3496987939662 -6.999999999999995 L47.3496987939662 -6.999999999999997 L47.349698793966205 6.999999999999973 L37.349698793966205 6.999999999999976 A38 38 0 0 1 31.359972760794346 21.460477824182686 M0 -23A23 23 0 1 0 0 23 A23 23 0 1 0 0 -23" fill="'
              .concat(
                p[0],
                '"></path></g></g> <g transform="translate(19 19) scale(0.6)"> <g><animateTransform attributeName="transform" type="rotate" values="45;0" keyTimes="0;1" dur="0.2s" begin="-0.1s" repeatCount="indefinite"></animateTransform><path d="M-31.35997276079435 -21.460477824182675 L-38.431040572659825 -28.531545636048147 L-28.53154563604818 -38.4310405726598 L-21.4604778241827 -31.35997276079433 A38 38 0 0 1 -6.999999999999992 -37.3496987939662 L-6.999999999999992 -37.3496987939662 L-6.999999999999994 -47.3496987939662 L6.999999999999977 -47.3496987939662 L6.999999999999979 -37.3496987939662 A38 38 0 0 1 21.460477824182686 -31.359972760794342 L21.460477824182686 -31.359972760794342 L28.531545636048158 -38.43104057265982 L38.4310405726598 -28.53154563604818 L31.35997276079433 -21.4604778241827 A38 38 0 0 1 37.3496987939662 -6.999999999999995 L37.3496987939662 -6.999999999999995 L47.3496987939662 -6.999999999999997 L47.349698793966205 6.999999999999973 L37.349698793966205 6.999999999999976 A38 38 0 0 1 31.359972760794346 21.460477824182686 L31.359972760794346 21.460477824182686 L38.431040572659825 28.531545636048158 L28.53154563604818 38.4310405726598 L21.460477824182703 31.35997276079433 A38 38 0 0 1 6.9999999999999964 37.3496987939662 L6.9999999999999964 37.3496987939662 L6.999999999999995 47.3496987939662 L-7.000000000000009 47.3496987939662 L-7.000000000000007 37.3496987939662 A38 38 0 0 1 -21.46047782418263 31.359972760794385 L-21.46047782418263 31.359972760794385 L-28.531545636048097 38.43104057265987 L-38.431040572659796 28.531545636048186 L-31.35997276079433 21.460477824182703 A38 38 0 0 1 -37.34969879396619 7.000000000000032 L-37.34969879396619 7.000000000000032 L-47.34969879396619 7.0000000000000355 L-47.3496987939662 -7.000000000000002 L-37.3496987939662 -7.000000000000005 A38 38 0 0 1 -31.359972760794346 -21.46047782418268 M0 -23A23 23 0 1 0 0 23 A23 23 0 1 0 0 -23" fill="'
              )
              .concat(p[2], '"></path></g></g></g></svg>');
          },
          Rainbow: function () {
            return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><clipPath id="cp"><path d="M0 -44 A44 44 0 0 1 0 44 A44 44 0 0 1 0 -44 M24 -1L24 1L32 1L32 -1Z"></path></clipPath><g transform="translate(50,50)"><circle clip-path="url(#cp)" cx="0" cy="0" fill="none" r="27" stroke="'
              .concat(
                p[0],
                '" stroke-width="6" stroke-dasharray="42.411500823462205 0 0 0 0 169.64600329384882"><animate attributeName="stroke-dasharray" dur="1.6949152542372878s" repeatCount="indefinite" begin="-0.16949152542372878s" keyTimes="0;0.2;0.4;0.6;0.8;1" values="0 0 0 0 0 169.64600329384882;0 0 0 0 0 169.64600329384882;0 0 84.82300164692441 0 0 169.64600329384882;0 0 169.64600329384882 0 0 169.64600329384882;0 0 84.82300164692441 0 0 169.64600329384882;0 0 0 0 0 169.64600329384882"></animate><animateTransform attributeName="transform" type="rotate" dur="1.6949152542372878s" repeatCount="indefinite" begin="-0.16949152542372878s" values="0;0;0;0;180;360"></animateTransform></circle><circle cx="0" cy="0" fill="none" r="34" stroke="'
              )
              .concat(
                p[1],
                '" stroke-width="6" stroke-dasharray="106.81415022205297 0 0 213.62830044410595"><animate attributeName="stroke-dasharray" dur="1.6949152542372878s" repeatCount="indefinite" begin="0s" values="0 0 0 0 0 213.62830044410595;0 0 106.81415022205297 0 0 213.62830044410595;0 0 106.81415022205297 0 0 213.62830044410595;0 0 106.81415022205297 0 0 213.62830044410595;0 0 106.81415022205297 0 0 213.62830044410595;0 0 0 0 0 213.62830044410595"></animate><animateTransform attributeName="transform" type="rotate" dur="1.6949152542372878s" repeatCount="indefinite" begin="0s" values="0;0;0;180;180;360"></animateTransform></circle><circle cx="0" cy="0" fill="none" r="41" stroke="'
              )
              .concat(
                p[3],
                '" stroke-width="6" stroke-dasharray="128.8052987971815 0 0 257.610597594363" transform="rotate(45)"><animate attributeName="stroke-dasharray" dur="1.6949152542372878s" repeatCount="indefinite" begin="0s" keyTimes="0;0.06;0.1;0.3;0.45;0.5;0.7;0.90;1" values="0 0 96.60397409788612 0 0 257.610597594363;0 0 96.60397409788612 0 0 257.610597594363;0 0 128.8052987971815 0 0 257.610597594363;0 0 128.8052987971815 0 0 257.610597594363;0 0 32.20132469929538 0 0 257.610597594363;0 0 32.20132469929538 0 0 257.610597594363;0 0 128.8052987971815 0 0 257.610597594363;0 0 128.8052987971815 0 0 257.610597594363;0 0 96.60397409788612 0 0 257.610597594363"></animate><animateTransform attributeName="transform" type="rotate" dur="1.6949152542372878s" repeatCount="indefinite" begin="0s" keyTimes="0;0.06;0.1;0.3;0.5;0.6;0.8;0.90;1" values="-60;0;0;0;180;180;180;180;300"></animateTransform></circle></g></svg>'
              );
          },
        },
        "CurveBar",
        function () {
          return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g transform="translate(50,50)"><circle cx="0" cy="0" r="8.333333333333334" fill="none" stroke="'
            .concat(
              p[0],
              '" stroke-width="4" stroke-dasharray="26.179938779914945 26.179938779914945"><animateTransform attributeName="transform" type="rotate" values="0 0 0;-360 0 0" times="0;1" dur="1s" calcMode="spline" keySplines="0.2 0 0.8 1" begin="0" repeatCount="indefinite"></animateTransform></circle><circle cx="0" cy="0" r="16.666666666666668" fill="none" stroke="'
            )
            .concat(
              p[1],
              '" stroke-width="4" stroke-dasharray="52.35987755982989 52.35987755982989"><animateTransform attributeName="transform" type="rotate" values="0 0 0;360 0 0" times="0;1" dur="1s" calcMode="spline" keySplines="0.2 0 0.8 1" begin="-0.2" repeatCount="indefinite"></animateTransform></circle><circle cx="0" cy="0" r="25" fill="none" stroke="'
            )
            .concat(
              p[2],
              '" stroke-width="4" stroke-dasharray="78.53981633974483 78.53981633974483"><animateTransform attributeName="transform" type="rotate" values="0 0 0;-360 0 0" times="0;1" dur="1s" calcMode="spline" keySplines="0.2 0 0.8 1" begin="-0.4" repeatCount="indefinite"></animateTransform></circle><circle cx="0" cy="0" r="33.333333333333336" fill="none" stroke="'
            )
            .concat(
              p[3],
              '" stroke-width="4" stroke-dasharray="104.71975511965978 104.71975511965978"><animateTransform attributeName="transform" type="rotate" values="0 0 0;360 0 0" times="0;1" dur="1s" calcMode="spline" keySplines="0.2 0 0.8 1" begin="-0.6" repeatCount="indefinite"></animateTransform></circle><circle cx="0" cy="0" r="41.666666666666664" fill="none" stroke="'
            )
            .concat(
              p[4],
              '" stroke-width="4" stroke-dasharray="130.89969389957471 130.89969389957471"><animateTransform attributeName="transform" type="rotate" values="0 0 0;-360 0 0" times="0;1" dur="1s" calcMode="spline" keySplines="0.2 0 0.8 1" begin="-0.8" repeatCount="indefinite"></animateTransform></circle></g></svg>'
            );
        }
      );
    var E = {
      Init: function (e) {
        return (P = v(P, e));
      },
    };
    Object.keys(z).forEach(function (e) {
      return (E[e] = function (t, n) {
        var r = n ? _objectSpread(_objectSpread({}, P), n) : P;
        (p = g(r.svgColor, 9)),
          (function (e, t, n) {
            if (document.getElementById(P.cid))
              k(
                "Waiting Existed!",
                "Waiting box is already existed. you need to call Change function instead."
              );
            else {
              var r =
                  t && "object" === _typeof(t)
                    ? _objectSpread(_objectSpread({}, P), t)
                    : P,
                a = "<div id="
                  .concat(P.cid, ' class="f f__cw" style="background:')
                  .concat(r.background, '"><div class="f__w" style="width:')
                  .concat(r.containerSize, '"><div style="width:')
                  .concat(r.svgSize.w, ";height:")
                  .concat(r.svgSize.h, ';">')
                  .concat(n, "</div>")
                  .concat(
                    e
                      ? '<p style="font-size:' +
                          r.textSize +
                          ";color:" +
                          r.textColor +
                          ";font-family:" +
                          r.fontFamily +
                          '">' +
                          e +
                          "</p>"
                      : "",
                    "</div></div>"
                  );
              (a = b(a)),
                r.clickToClose &&
                  a.addEventListener("click", function () {
                    return E.Remove();
                  }),
                document.body.appendChild(a);
            }
          })(t, n, z[e]());
      });
    }),
      (E.Change = function (e) {
        var t = document.getElementById(P.cid);
        if (t) {
          var n = t.querySelector("p");
          if (n) e ? (n.innerHTML = e) : n.remove();
          else
            ((n = b(
              '<p style="font-size:'
                .concat(P.textSize, ";color:")
                .concat(P.textColor, '"></p>')
            )).innerHTML = e),
              t.querySelector(".f__w").appendChild(n);
        }
      }),
      (E.Remove = function (e) {
        var t = document.getElementById(P.cid),
          n = function () {
            t.remove();
          };
        t &&
          ("number" == typeof e
            ? setTimeout(function () {
                n();
              }, e)
            : n());
      });
    var R = {
      cid: n(12),
      fontFamily: y,
      svgSize: { w: "100px", h: "100px" },
      svgColor: c,
      background: "rgba(255,255,255,0.8)",
      zindex: 4e3,
      textColor: "#029eff",
      textSize: "16px",
    };
    var D = {
      Init: function (e) {
        return (R = v(R, e));
      },
    };
    return (
      Object.keys(z).forEach(function (e) {
        return (D[e] = function (t, n, r) {
          var a = r ? _objectSpread(_objectSpread({}, R), r) : R;
          (p = g(a.svgColor, 9)),
            (function (e, t, n, r) {
              var a =
                "object" === _typeof(e)
                  ? e
                  : "string" == typeof e
                  ? document.querySelector(e)
                  : null;
              if (a) {
                a.setAttribute("data-pos", a.style.position),
                  (a.style.position = "relative");
                var o =
                    n && "object" === _typeof(n)
                      ? _objectSpread(_objectSpread({}, R), n)
                      : R,
                  i = '<div data-id="'
                    .concat(R.cid, '" class="f f__cb" style="background:')
                    .concat(
                      o.background,
                      '"><div class="f__w"><div style="width:'
                    )
                    .concat(o.svgSize.w, ";height:")
                    .concat(o.svgSize.h, ';">')
                    .concat(r, "</div>")
                    .concat(
                      t
                        ? '<p style="font-size:' +
                            o.textSize +
                            ";color:" +
                            o.textColor +
                            ";font-family:" +
                            o.fontFamily +
                            '">' +
                            t +
                            "</p>"
                        : "",
                      "</div></div>"
                    );
                (i = b(i)), a.appendChild(i);
              } else
                k(
                  "Invalid Selector!",
                  e +
                    " is invalid selector or no element found by this selector."
                );
            })(t, n, r, z[e]());
        });
      }),
      (D.Remove = function (e, t) {
        var n =
          "object" === _typeof(e)
            ? e.querySelector('div[data-id="'.concat(R.cid, '"]'))
            : "string" == typeof e
            ? document.querySelector(e + ' div[data-id="'.concat(R.cid, '"]'))
            : null;
        if (n) {
          var r = n.parentElement,
            a = function () {
              (n.style.opacity = 0),
                setTimeout(function () {
                  n.remove();
                  var e = r.getAttribute("data-pos");
                  (r.style.position = e || ""), r.removeAttribute("data-pos");
                }, 100);
            };
          n &&
            ("number" == typeof t
              ? setTimeout(function () {
                  a();
                }, t)
              : a());
        } else
          k(
            "Invalid Selector",
            sel + " is invalid selector or no element found by this selector."
          );
      }),
      { Ask: M, Alert: A, Dialogue: B, Hint: N, Wait: E, Box: D }
    );
  }
);

$(function () {
  $("#icon1").click(function () {
    $("#icon").show();
    $("#icon1").hide();
    $(".float").show();
  });
  $("#icon").click(function () {
    $("#icon1").show();
    $("#icon").hide();
    $(".float").hide();
  });
});

function submitForm() {
  var frm = document.getElementsByName("contact-form")[0];
  frm.submit(); // Submit the form
  frm.reset(); // Reset all form data
  Fnon.Alert.Light({
    message:
      "Vielen Dank für ihre Anfrage. Ich werde mich so schnell wie möglich bei Ihnen melden.",
    callback: () => {
      // callback
    },
  });
  return false; // Prevent page refresh
}
