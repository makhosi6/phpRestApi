/* Version 8c4a6dc76aa95fe7a1f821862569a8b8 v:4.3.5.0, c:7e2be94a56437f719c0650d90dd272675969a526, b:9372 n:3-4.3.5.next-build */ (function () {
  new (function () {
    if (!window.ADRUM && !0 !== window["adrum-disable"]) {
      var g = (window.ADRUM = {});
      window["adrum-start-time"] =
        window["adrum-start-time"] || new Date().getTime();
      (function (a) {
        (function (a) {
          a.Cd = function () {
            for (var a = [], b = 0; b < arguments.length; b++)
              a[b - 0] = arguments[b];
            for (b = 0; b < a.length; b++) {
              var c = a[b];
              c && c.setUp();
            }
          };
        })(a.monitor || (a.monitor = {}));
      })(g || (g = {}));
      (function (a) {
        (function (b) {
          function f(a) {
            return "undefined" !== typeof a && null !== a;
          }
          function e(a) {
            return "object" == typeof a && !b.isArray(a) && null !== a;
          }
          function c(a) {
            return "function" == typeof a || !1;
          }
          function d(a) {
            return "string" == typeof a;
          }
          function h(a, c) {
            for (var d in c) {
              var p = c[d];
              if (q(c, d)) {
                var f = a[d];
                e(p) && e(f)
                  ? h(f, p)
                  : b.isArray(f) && b.isArray(p)
                  ? (a[d] = f.concat(p))
                  : (a[d] = p);
              }
            }
            return a;
          }
          function q(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b) && f(a[b]);
          }
          function p(a) {
            return d(a) ? a.replace(/^\s*/, "").replace(/\s*$/, "") : a;
          }
          function k(a, b) {
            var c = Array.prototype[a];
            return c ? r(c) : m(a, b);
          }
          function r(a) {
            var b = Array.prototype.slice;
            return function (c) {
              return a.apply(c, b.call(arguments, 1));
            };
          }
          function m(a, b) {
            return function (d, q) {
              if (!f(d))
                throw new TypeError(a + " called on null or undefined");
              if (!c(q)) throw new TypeError(q + " is not a function");
              return b.apply(null, arguments);
            };
          }
          function g(a, b, c) {
            var d = Object(a),
              q = d.length >>> 0,
              h = 0;
            if (3 > arguments.length) {
              for (; h < q && !(h in d); ) h++;
              if (h >= q)
                throw new TypeError(
                  "Reduce of empty array with no initial value"
                );
              c = d[h++];
            }
            for (; h < q; h++) h in d && (c = b(c, d[h], h, d));
            return c;
          }
          function s(a, c, d) {
            return b.reduce(
              a,
              function (a, b, q, h) {
                a[q] = c.call(d, b, q, h);
                return a;
              },
              Array(a.length >>> 0)
            );
          }
          function t(a, c, d) {
            return b.reduce(
              a,
              function (a, b, q, h) {
                c.call(d, b, q, h) && a.push(b);
                return a;
              },
              []
            );
          }
          var n = Array.isArray,
            z = Object.prototype.toString;
          b.isDefined = f;
          b.isArray =
            c(n) && c(n.bind)
              ? n.bind(Array)
              : function (a) {
                  return z.call(a) === z.call([]);
                };
          b.isObject = e;
          b.isFunction = c;
          b.isString = d;
          b.isNumber = function (a) {
            return "number" == typeof a;
          };
          b.isBoolean = function (a) {
            return "boolean" == typeof a;
          };
          b.lb = function (a) {
            setTimeout(a, 0);
          };
          b.addEventListener = function (b, c, d) {
            function q() {
              try {
                return d.apply(this, Array.prototype.slice.call(arguments));
              } catch (h) {
                a.exception(h, "M1", c, b, h);
              }
            }
            a.isDebug && a.log("M0", c, b);
            b.addEventListener
              ? b.addEventListener(c, q, !1)
              : b.attachEvent && b.attachEvent("on" + c, q);
          };
          b.loadScriptAsync = function (b) {
            var c = document.createElement("script");
            c.async = !0;
            c.src = b;
            var d = document.getElementsByTagName("script")[0];
            d
              ? (d.parentNode.insertBefore(c, d), a.log("M2", b))
              : a.log("M3", b);
          };
          b.mergeJSON = h;
          b.hasOwnPropertyDefined = q;
          b.Vh = function (a) {
            var c = [];
            f(a) && (c = b.isArray(a) ? a : [a]);
            return c;
          };
          b.generateGUID =
            (function (a) {
              return (
                f(a) &&
                c(a.getRandomValues) &&
                function () {
                  function b(a) {
                    a = a.toString(16);
                    return "0000".substr(a.length) + a;
                  }
                  var c = new Uint16Array(8);
                  a.getRandomValues(c);
                  return (
                    b(c[0]) +
                    b(c[1]) +
                    "_" +
                    b(c[2]) +
                    "_" +
                    b(c[3]) +
                    "_" +
                    b(c[4]) +
                    "_" +
                    b(c[5]) +
                    b(c[6]) +
                    b(c[7])
                  );
                }
              );
            })(window.crypto || window.msCrypto) ||
            function () {
              return "xxxxxxxx_xxxx_4xxx_yxxx_xxxxxxxxxxxx".replace(
                /[xy]/g,
                function (a) {
                  var b = (16 * Math.random()) | 0;
                  return ("x" == a ? b : (b & 3) | 8).toString(16);
                }
              );
            };
          b.Ld = function (a) {
            return a
              ? (a = a.stack) && "string" === typeof a
                ? a
                : null
              : null;
          };
          b.trim = p;
          b.fh = function (a) {
            var b = {},
              c,
              d;
            if (!a) return b;
            var q = a.split("\n");
            for (d = 0; d < q.length; d++) {
              var h = q[d];
              c = h.indexOf(":");
              a = p(h.substr(0, c)).toLowerCase();
              c = p(h.substr(c + 1));
              a && (b[a] = b[a] ? b[a] + (", " + c) : c);
            }
            return b;
          };
          b.tryPeriodically = function (a, b, c, d) {
            function q() {
              if (b()) c && c();
              else {
                var e = a(++h);
                0 < e ? setTimeout(q, e) : d && d();
              }
            }
            var h = 0;
            q();
          };
          b.kc = function (a) {
            return a.charAt(0).toUpperCase() + a.slice(1);
          };
          b.gd = function (a) {
            for (var b = [], c = 1; c < arguments.length; c++)
              b[c - 1] = arguments[c];
            return function () {
              for (var c = [], d = 0; d < arguments.length; d++)
                c[d - 0] = arguments[d];
              return a.apply(this, b.concat(c));
            };
          };
          b.now = function () {
            return new Date().getTime();
          };
          b.li = g;
          b.reduce = k("reduce", g);
          b.ki = s;
          b.map = k("map", s);
          b.ji = t;
          b.filter = k("filter", t);
          b.Ff = function (a) {
            return b.filter(a, f);
          };
          b.wf = function (a) {
            return [].concat.apply([], a);
          };
        })(a.utils || (a.utils = {}));
      })(g || (g = {}));
      (function (a) {
        var b = a.conf || (a.conf = {});
        b.userConf = window["adrum-config"] || {};
        b.useHTTPSAlways = !0 === b.userConf.useHTTPSAlways;
        b.beaconUrlHttp = a.utils.isDefined(b.userConf.beaconUrlHttp)
          ? b.userConf.beaconUrlHttp
          : "http://col.eum-appdynamics.com";
        b.beaconUrlHttps = a.utils.isDefined(b.userConf.beaconUrlHttps)
          ? b.userConf.beaconUrlHttps
          : "https://col.eum-appdynamics.com";
        b.corsEndpointPath = "/eumcollector/beacons/browser/v1";
        b.imageEndpointPath = "/eumcollector/adrum.gif?";
        b.appKey =
          b.userConf.appKey || window["adrum-app-key"] || "APP_KEY_NOT_SET";
        a = b.useHTTPSAlways || "https:" === document.location.protocol;
        var f = b.userConf.adrumExtUrlHttp || "http://cdn.appdynamics.com",
          e = b.userConf.adrumExtUrlHttps || "https://cdn.appdynamics.com";
        b.adrumExtUrl =
          (a ? e : f) + "/adrum-ext.8c4a6dc76aa95fe7a1f821862569a8b8.js";
        b.adrumXdUrl = e + "/adrum-xd.8c4a6dc76aa95fe7a1f821862569a8b8.html";
        b.agentVer = "4.3.5.0";
        b.sendImageBeacon =
          (b.userConf.beacon && b.userConf.beacon.sendImageBeacon) ||
          window["adrum-send-image-beacon"];
        window["adrum-geo-resolver-url"]
          ? ((f = window["adrum-geo-resolver-url"]),
            (e = f.indexOf("://")),
            -1 != e && (f = f.substring(e + 3)),
            (f = (a ? "https://" : "http://") + f))
          : ((f = b.userConf.geoResolverUrlHttps || ""),
            (e = b.userConf.geoResolverUrlHttp || ""),
            (f = a ? f : e));
        b.geoResolverUrl = f;
        b.useStrictDomainCookies =
          !0 === window["adrum-use-strict-domain-cookies"];
        b.Fe = 10;
      })(g || (g = {}));
      (function (a) {
        function b(b, c, d, h) {
          b =
            a.conf.beaconUrlHttps +
            "/eumcollector/error.gif?version=1&appKey=" +
            d +
            "&msg=" +
            encodeURIComponent(b.substring(0, 500));
          h &&
            ((b += "&stack="),
            (b += encodeURIComponent(h.substring(0, 1500 - b.length))));
          return b;
        }
        function f(c, d) {
          2 <= h ||
            ((document.createElement("img").src = b(c, 0, a.conf.appKey, d)),
            h++);
        }
        function e(a) {
          return (
            0 <= a.location.search.indexOf("ADRUM_debug=true") ||
            0 <= a.cookie.search(/(^|;)\s*ADRUM_debug=true/)
          );
        }
        a.iDR = e;
        (function (a) {
          a[(a.API_ERROR = 0)] = "API_ERROR";
          a[(a.API_ERROR_INVALID_PARAMS = 1)] = "API_ERROR_INVALID_PARAMS";
          a[(a.API_ERROR_INVALID_CONFIG = 2)] = "API_ERROR_INVALID_CONFIG";
          a[(a.API_WARNING = 3)] = "API_WARNING";
          a[(a.API_WARNING_INEFFECTIVE_CONFIG = 4)] =
            "API_WARNING_INEFFECTIVE_CONFIG";
        })(a.$d || (a.$d = {}));
        a.ja = [
          "JS Agent API Error:",
          "JS Agent API Error Invalid Parameters: ",
          "JS Agent API Error Invalid Configs: ",
          "JS Agent API Warning:",
          "JS Agent API Warning Ineffective Config:",
        ];
        a.W =
          " a constructor is called as a function. Don't forget keyword new.";
        a.isDebug = e(document);
        a.apiMessageConsoleOut =
          a.utils.isDefined(a.conf.userConf) &&
          a.utils.isDefined(a.conf.userConf.log) &&
          !0 === a.conf.userConf.log.apiMessageConsoleOut
            ? !0
            : !1;
        var c = [],
          d = [];
        a.logMessages = c;
        a.apiMessages = d;
        a.log = function (b) {
          for (var d = 1; d < arguments.length; d++);
          a.isDebug &&
            c.push(Array.prototype.slice.call(arguments).join(" | "));
        };
        a.Pg = function (a) {
          for (var b = 1; b < arguments.length; b++);
          d.push(Array.prototype.slice.call(arguments).join(" | "));
        };
        a.error = function (b) {
          for (var c = 1; c < arguments.length; c++);
          c = Array.prototype.slice.call(arguments).join(" | ");
          a.log(c);
          f(c, null);
        };
        a.reportAPIMessage = function (b, c, d, h) {
          var e = a.ih.apply(this, arguments);
          a.Pg(e);
          a.apiMessageConsoleOut &&
            "undefined" !== typeof console &&
            "undefined" !== typeof console.log &&
            console.log(e);
          return e;
        };
        a.exception = function () {
          for (var b = [], c = 0; c < arguments.length; c++)
            b[c - 0] = arguments[c];
          1 > arguments.length ||
            ((b = Array.prototype.slice.call(arguments)),
            (c = a.utils.Ld(b[0])),
            (b = b.slice(1).join(" | ")),
            a.log(b),
            f(b, c));
        };
        a.assert = function (b, c) {
          b || a.error("Assert fail: " + c);
        };
        a.dumpLog = a.isDebug
          ? function () {
              for (var a = "", b = 0; b < c.length; b++)
                a += c[b].replace(RegExp("<br/>", "g"), "\n\t") + "\n";
              return a;
            }
          : function () {};
        a.ih = function (b, c, d, h) {
          var e = "",
            e = "",
            f = new window.Error().stack,
            g,
            f = a.utils.isString(f) ? f.substring(5) : f + "";
          a.utils.isDefined(g) ||
            (g = a.utils.map(h, function (a) {
              return null === a
                ? "null"
                : void 0 == a
                ? "undefined"
                : "" === a
                ? "''"
                : a;
            }));
          switch (b) {
            case 0:
            case 3:
              e = a.ja[b];
              e = a.utils.isDefined(d)
                ? "" + e + c + "\n in " + d + "(" + g.join(", ") + ")\n" + f
                : "" + e + c + "\n" + f;
              break;
            case 1:
              e = a.ja[b];
              e = "" + e + c + "\nin " + d + "(" + g.join(", ") + ")\n" + f;
              break;
            case 2:
            case 4:
              e = a.ja[b];
              e = "" + e + c + ", but " + d + "=" + g.join(", ") + "\n" + f;
              break;
            default:
              (e = a.ja[0]),
                (e = "" + e + c + "\nin " + d + "(" + g.join(", ") + ")\n" + f);
          }
          return e;
        };
        a.cIEBU = b;
        var h = 0;
        a.log("M4");
      })(g || (g = {}));
      (function (a) {
        var b = (function () {
            function a(b) {
              this.max = b;
              this.Ma = 0;
            }
            a.prototype.tg = function () {
              this.wa() || this.Ma++;
            };
            a.prototype.wa = function () {
              return this.Ma >= this.max;
            };
            a.prototype.reset = function () {
              this.Ma = 0;
            };
            return a;
          })(),
          f = (function () {
            function e() {
              this.pa = [];
              this.pb = new b(e.Pe);
              this.ab = new b(e.Ie);
            }
            e.prototype.submit = function (b) {
              this.push(b) && a.initEXTDone && this.processQ();
            };
            e.prototype.processQ = function () {
              for (var b = this.If(), d = 0; d < b.length; d++) {
                var h = b[d];
                "function" === typeof a.commands[h[0]]
                  ? (a.isDebug && a.log("M5", h[0], h.slice(1).join(", ")),
                    a.commands[h[0]].apply(a, h.slice(1)))
                  : a.error("M6", h[0]);
              }
            };
            e.prototype.Ig = function (a) {
              return "reportXhr" === a || "reportPageError" === a;
            };
            e.prototype.push = function (b) {
              var d = b[0],
                h = this.Ig(d),
                e = h ? this.pb : this.ab;
              if (e.wa())
                return (
                  a.log("M7", h ? "spontaneous" : "non spontaneous", d), !1
                );
              this.pa.push(b);
              e.tg();
              return !0;
            };
            e.prototype.If = function () {
              var a = this.pa;
              this.reset();
              return a;
            };
            e.prototype.size = function () {
              return this.pa.length;
            };
            e.prototype.reset = function () {
              this.pa = [];
              this.pb.reset();
              this.ab.reset();
            };
            e.prototype.isSpontaneousQueueDead = function () {
              return this.pb.wa();
            };
            e.prototype.isNonSpontaneousQueueDead = function () {
              return this.ab.wa();
            };
            e.Pe = 100;
            e.Ie = 100;
            return e;
          })();
        a.ge = f;
      })(g || (g = {}));
      (function (a) {
        a.q = new a.ge();
        a.command = function (b) {
          for (var f = 1; f < arguments.length; f++);
          a.isDebug &&
            a.log(
              "M8",
              b,
              Array.prototype.slice.call(arguments).slice(1).join(", ")
            );
          a.q.submit(Array.prototype.slice.call(arguments));
        };
      })(g || (g = {}));
      (function (a) {
        (function (a) {
          var f = (function () {
            function a() {
              this.status = {};
            }
            a.prototype.setUp = function () {};
            a.prototype.set = function (a, b) {
              this.status[a] = b;
            };
            return a;
          })();
          a.Hb = f;
        })(a.monitor || (a.monitor = {}));
      })(g || (g = {}));
      (function (a) {
        (function (b) {
          window.ADRUM.aop = b;
          b.support = function (a) {
            return !a || "apply" in a;
          };
          b.around = function (f, e, c, d, h) {
            a.assert(
              b.support(f),
              "aop.around called on a function which does not support interception"
            );
            f = f || function () {};
            return function () {
              a.isDebug &&
                a.log(
                  "M9",
                  d,
                  Array.prototype.slice.call(arguments).join(", ")
                );
              var b = Array.prototype.slice.call(arguments),
                p;
              try {
                e && (p = e.apply(this, b));
              } catch (k) {
                a.exception(k, "M10", d, k);
              }
              a.assert(
                !p || "[object Array]" === Object.prototype.toString.call(p)
              );
              var g = void 0;
              try {
                g = f.apply(this, p || b);
              } catch (m) {
                throw (h && h(m), m);
              } finally {
                try {
                  c && c.apply(this, b);
                } catch (l) {
                  a.exception(l, "M11", d, l);
                }
              }
              return g;
            };
          };
          b.before = function (a, e, c) {
            return b.around(a, e, null, c);
          };
          b.after = function (a, e, c) {
            return b.around(a, null, e, c);
          };
        })(a.aop || (a.aop = {}));
      })(g || (g = {}));
      (function (a) {
        a = a.EventType || (a.EventType = {});
        a[(a.PageView = 0)] = "PageView";
        a[(a.Ajax = 2)] = "Ajax";
        a[(a.VPageView = 3)] = "VPageView";
        a[(a.Error = 4)] = "Error";
        a[(a.IFRAME = 1)] = "IFRAME";
        a[(a.ABSTRACT = 100)] = "ABSTRACT";
        a[(a.ADRUM_XHR = 101)] = "ADRUM_XHR";
        a[(a.NG_VIRTUAL_PAGE = 102)] = "NG_VIRTUAL_PAGE";
      })(g || (g = {}));
      (function (a) {
        a = a.events || (a.events = {});
        a.w = {};
        a.w[100] = {
          guid: "string",
          url: "string",
          parentGUID: "string",
          parentUrl: "string",
          parentType: "number",
          timestamp: "number",
        };
        a.w[3] = { resTiming: "object" };
        a.w[102] = { digestCount: "number" };
        a.w[2] = {
          method: "string",
          parentPhase: "string",
          parentPhaseId: "number",
          error: "object",
          parameter: "object",
          xhrStatus: "number",
        };
        a.w[101] = { allResponseHeaders: "string" };
        a.w[4] = { msg: "string", line: "number", stack: "string" };
      })(g || (g = {}));
      (function (a) {
        var b = (function () {
          function a() {
            this.D = {};
          }
          a.prototype.mark = function (a, b) {
            f.mark.apply(this, arguments);
          };
          a.prototype.getTiming = function (a) {
            return (a = this.getEntryByName(a)) && a.startTime;
          };
          a.prototype.measure = function (a, b, h) {
            f.measure.apply(this, arguments);
          };
          a.prototype.getEntryByName = function (a) {
            return f.getEntryByName.call(this, a);
          };
          a.La = function (a) {
            return f.La(a);
          };
          return a;
        })();
        a.PerformanceTracker = b;
        var f;
        (function (b) {
          var c = a.utils.hasOwnPropertyDefined,
            d =
              window.performance ||
              window.mozPerformance ||
              window.msPerformance ||
              window.webkitPerformance,
            h =
              a.utils.isObject(d) &&
              a.utils.isObject(d.timing) &&
              a.utils.isNumber(d.timing.navigationStart)
                ? d.timing.navigationStart
                : window["adrum-start-time"],
            q = a.utils.now;
          b.mark = function (b, c) {
            this.D[b] = {
              name: b,
              entryType: "mark",
              startTime: a.utils.isDefined(c) ? c : q(),
              duration: 0,
            };
          };
          b.measure = function (b, d, e) {
            c(this.D, d) && c(this.D, e)
              ? (this.D[b] = {
                  name: b,
                  entryType: "measure",
                  startTime: d ? this.D[d].startTime : h,
                  duration:
                    (e ? this.D[e].startTime : q()) -
                    (d ? this.D[d].startTime : h),
                })
              : a.error("M12", c(this.D, d) ? e : d);
          };
          b.getEntryByName = function (a) {
            return this.D[a] || null;
          };
          b.La = function (a) {
            return a + h;
          };
        })(f || (f = {}));
      })(g || (g = {}));
      (function (a) {
        (function (b) {
          function f(b, c) {
            b = b || {};
            for (var e in b)
              c[e] = (function () {
                var c = e,
                  h = b[e];
                return function (b) {
                  var d = "_" + c,
                    e = this[d];
                  if (a.utils.isDefined(b))
                    if (typeof b === h) this[d] = b;
                    else
                      throw (
                        ((d =
                          "wrong type of " +
                          c +
                          " value, " +
                          typeof b +
                          " passed in but should be a " +
                          h +
                          "."),
                        a.reportAPIMessage(
                          1,
                          d,
                          "ADRUM.report",
                          Array.prototype.slice.call(arguments)
                        ),
                        TypeError(d))
                      );
                  return e;
                };
              })();
          }
          function e(a) {
            var b = {},
              c;
            for (c in a) {
              var e = a[c];
              b[e.start] = !0;
              b[e.end] = !0;
            }
            return b;
          }
          var c = (function () {
            function b(c) {
              this.perf = new a.PerformanceTracker();
              "Object" === this.constructor.name && a.reportAPIMessage(0, a.W);
              this.timestamp(a.utils.now());
              this.guid(a.utils.generateGUID());
              this.url(document.URL);
              this.nb(c);
            }
            b.prototype.type = function () {
              return 100;
            };
            b.prototype.nb = function (b) {
              if (a.utils.isObject(b))
                for (var c in b) {
                  var d = this[c] || this["mark" + a.utils.kc(c)];
                  d && a.utils.isFunction(d) && d.call(this, b[c]);
                }
            };
            b.fc = function (a, b, c) {
              return {
                guid: function () {
                  return a;
                },
                url: function () {
                  return b;
                },
                type: function () {
                  return c;
                },
              };
            };
            b.prototype.hg = function () {
              return b.fc(
                this.parentGUID(),
                this.parentUrl(),
                this.parentType()
              );
            };
            b.prototype.parent = function (b) {
              var c = this.hg();
              a.utils.isDefined(b) &&
                (a.utils.isFunction(b.guid) &&
                a.utils.isFunction(b.url) &&
                a.utils.isFunction(b.type)
                  ? (this.parentGUID(b.guid()),
                    this.parentUrl(b.url()),
                    this.parentType(b.type()))
                  : a.reportAPIMessage(
                      0,
                      "object is not a valid EventIdentifier",
                      "EventTracker.parent",
                      Array.prototype.slice.call(arguments)
                    ));
              return c;
            };
            return b;
          })();
          b.EventTracker = c;
          b.aa = f;
          b.gc = function (b, c) {
            b = b || {};
            var q = e(b),
              f;
            for (f in q)
              (q = a.utils.kc(f)),
                (c["mark" + q] = a.utils.gd(function (a, b) {
                  this.perf.mark(a, b);
                }, f)),
                (c["get" + q] = a.utils.gd(function (a) {
                  return this.perf.getTiming(a);
                }, f));
          };
          f(b.w[100], c.prototype);
        })(a.events || (a.events = {}));
      })(g || (g = {}));
      var u =
        this.ff ||
        function (a, b) {
          function f() {
            this.constructor = a;
          }
          for (var e in b) b.hasOwnProperty(e) && (a[e] = b[e]);
          f.prototype = b.prototype;
          a.prototype = new f();
        };
      (function (a) {
        (function (b) {
          var f = (function (b) {
            function c(d) {
              this.constructor != c
                ? a.reportAPIMessage(0, a.W, "ADRUM.events.Error", [])
                : b.call(this, d);
            }
            u(c, b);
            c.prototype.type = function () {
              return 4;
            };
            return c;
          })(b.EventTracker);
          b.Error = f;
          b.aa(b.w[4], f.prototype);
        })(a.events || (a.events = {}));
      })(g || (g = {}));
      (function (a) {
        (function (b) {
          var f = (function (b) {
            function c() {
              b.apply(this, arguments);
            }
            u(c, b);
            c.prototype.setUp = function () {
              var c = this;
              b.prototype.setUp.call(this);
              a.listenForErrors = function () {
                c.Wc();
              };
              this.Wc();
            };
            c.prototype.qd = function (b, h, e, f) {
              c.errorsSent >= a.conf.Fe
                ? a.log("M13")
                : ((f = a.utils.Ld(f)),
                  a.command(
                    "reportPageError",
                    new a.events.Error(
                      a.utils.mergeJSON(
                        {
                          msg: b + "",
                          url: a.utils.isString(h) ? h : void 0,
                          line: a.utils.isNumber(e) ? e : void 0,
                          stack: f,
                        },
                        this.status
                      )
                    )
                  ),
                  c.errorsSent++);
            };
            c.prototype.Wc = function () {
              var b = this;
              a.aop.support(window.onerror)
                ? ((window.onerror = a.aop.around(
                    window.onerror,
                    function (a, e, f, g, r) {
                      c.Ya || (b.qd(a, e, f, r), (c.Ya = !0));
                    },
                    function () {
                      c.Ya = !1;
                    },
                    "onerror"
                  )),
                  a.log("M14"))
                : a.log("M15");
            };
            c.Ya = !1;
            c.errorsSent = 0;
            return c;
          })(b.Hb);
          b.ErrorMonitor = f;
          b.Ra = new b.ErrorMonitor();
        })(a.monitor || (a.monitor = {}));
      })(g || (g = {}));
      (function (a) {
        var b = (function () {
          function b() {
            this.Fa = [];
            this.Ba(b.Ia, 0);
          }
          b.prototype.Wg = function (a) {
            this.Ba(b.$b, a);
          };
          b.prototype.Yg = function (a) {
            this.Ba(b.hc, a);
          };
          b.prototype.Xg = function (a) {
            this.Ba(b.bc, a);
          };
          b.prototype.Ba = function (a, b) {
            this.Fa.push({ Vg: new Date().getTime(), Ug: b, hd: a });
            this.Cf = a;
          };
          b.prototype.getPhaseName = function () {
            return this.Cf;
          };
          b.prototype.getPhaseID = function (a) {
            for (var c = 0; c < b.ec.length; c++) if (b.ec[c] === a) return c;
            return null;
          };
          b.prototype.getPhaseCallbackTime = function (a) {
            for (var b = this.Fa, d = 0; d < b.length; d++)
              if (b[d].hd === a) return b[d].Vg;
            return null;
          };
          b.prototype.findPhaseAtNominalTime = function (e) {
            a.assert(0 <= e);
            for (var c = this.Fa, d = c.length - 1; 0 <= d; d--)
              if (e >= c[d].Ug) return c[d].hd;
            a.error("M16", e, a.utils.Jf(c));
            return b.Ia;
          };
          b.Ia = "AFTER_FIRST_BYTE";
          b.$b = "AFTER_DOM_INTERACTIVE";
          b.hc = "AT_ONLOAD";
          b.bc = "AFTER_ONLOAD";
          b.ec = [b.Ia, b.$b, b.hc, b.bc];
          return b;
        })();
        a.ei = b;
        a.lifecycle = new b();
        a.lifecycle = a.lifecycle;
      })(g || (g = {}));
      (function (a) {
        (function (a) {
          var f = (function (a) {
            function b() {
              a.apply(this, arguments);
            }
            u(b, a);
            b.prototype.type = function () {
              return 0;
            };
            return b;
          })(a.EventTracker);
          a.PageView = f;
        })(a.events || (a.events = {}));
      })(g || (g = {}));
      (function (a) {
        (function (b) {
          var f = a.utils.now,
            e = (function () {
              function c() {}
              c.prototype.setUp = function () {
                var b = document.readyState;
                if ("loading" === b) a.log("M17"), c.wh(), c.Dd();
                else {
                  var h = { timeStamp: f() };
                  c.X(h);
                  "interactive" === b
                    ? (a.log("M18"), c.Dd())
                    : (a.log("M19"), c.ca(h), c.fd(h));
                }
              };
              c.Dd = function () {
                a.utils.addEventListener(window, "load", c.ca);
                a.utils.addEventListener(window, "load", c.fd);
              };
              c.fd = function (d) {
                c.currentBasePage = new a.events.PageView();
                a.lifecycle.Yg(d && d.timeStamp);
                a.utils.lb(function () {
                  var d = f();
                  a.lifecycle.Xg(d);
                  a.command("mark", "onload", d);
                  b.PerformanceMonitor.perf &&
                    (b.perfMonitor.xf(), b.perfMonitor.yf());
                  a.command("reportOnload", c.currentBasePage);
                  a.utils.loadScriptAsync(a.conf.adrumExtUrl);
                });
                a.log("M20");
              };
              c.wh = function () {
                if (a.utils.isFunction(document.addEventListener))
                  document.addEventListener("DOMContentLoaded", c.X, !1);
                else if (a.utils.isObject(document.attachEvent)) {
                  document.attachEvent("onreadystatechange", c.X);
                  var b = null;
                  try {
                    b =
                      null === window.frameElement
                        ? document.documentElement
                        : null;
                  } catch (h) {}
                  null != b &&
                    b.doScroll &&
                    (function p() {
                      if (!c.isReady) {
                        try {
                          b.doScroll("left");
                        } catch (a) {
                          setTimeout(p, 10);
                          return;
                        }
                        c.ca();
                      }
                    })();
                } else a.exception("M21");
                a.log("M22");
              };
              c.ca = function (b) {
                c.Zc ||
                  (a.lifecycle.Wg(b && b.timeStamp),
                  a.command("mark", "onready", f()),
                  (c.Zc = !0));
              };
              c.X = function (a) {
                document.addEventListener
                  ? (document.removeEventListener("DOMContentLoaded", c.X, !1),
                    c.ca(a))
                  : "complete" === document.readyState &&
                    (document.detachEvent("onreadystatechange", c.X), c.ca(a));
              };
              c.isReady = !1;
              c.Zc = !1;
              return c;
            })();
          b.DOMEventsMonitor = e;
          b.Hf = new b.DOMEventsMonitor();
        })(a.monitor || (a.monitor = {}));
      })(g || (g = {}));
      (function (a) {
        (function (b) {
          var f = (function () {
            function b() {
              this.navTiming = this.resTiming = null;
            }
            b.prototype.setUp = function () {
              b.perf =
                window.performance ||
                window.mozPerformance ||
                window.msPerformance ||
                window.webkitPerformance;
              (a.utils.isObject(b.perf) && a.utils.isObject(b.perf.timing)) ||
                (b.perf = void 0);
              this.setResourceTimingBufferSize();
            };
            b.prototype.setResourceTimingBufferSize = function () {
              var c = b.perf,
                d =
                  a.conf.userConf &&
                  a.conf.userConf.resTiming &&
                  a.conf.userConf.resTiming.bufSize;
              !a.utils.isNumber(d) || 0 >= d
                ? a.log("M23")
                : c && a.utils.isFunction(c.setResourceTimingBufferSize)
                ? c.setResourceTimingBufferSize(d)
                : a.log("M24setResourceTimingBufferSize is not supported");
            };
            b.prototype.xf = function () {
              var c = b.perf;
              if ((c = c && c.timing))
                if (c.navigationStart && c.navigationStart <= c.loadEventEnd) {
                  var d = {},
                    h;
                  for (h in c) {
                    var q = c[h];
                    "number" === typeof q && (d[h] = q);
                  }
                  this.navTiming = d;
                } else a.log("M26");
              else a.log("M25");
            };
            b.prototype.yf = function () {
              this.resTiming = this.Dc();
            };
            b.prototype.Dc = function () {
              var c = b.perf,
                d = [];
              c &&
                c.getEntriesByType &&
                (c = c.getEntriesByType("resource")) &&
                c.length &&
                0 < c.length &&
                c.unshift &&
                (d = c);
              0 == d.length && a.log("M27");
              return d;
            };
            b.perf = null;
            return b;
          })();
          b.PerformanceMonitor = f;
          b.perfMonitor = new b.PerformanceMonitor();
        })(a.monitor || (a.monitor = {}));
      })(g || (g = {}));
      (function (a) {
        (function (b) {
          b.parseURI = function (a) {
            var b = String(a)
              .replace(/^\s+|\s+$/g, "")
              .match(
                /^([^:\/?#]+:)?(?:\/\/(?:([^:@\/?#]*)(?::([^:@\/?#]*))?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/
              );
            a = b && null != a.match(b[1] + "//");
            return (
              b && {
                href: b[0] || "",
                protocol: b[1] || "",
                ob: a ? "//" : "",
                wb: b[2] || "",
                gb: b[3] || "",
                host: b[4] || "",
                hostname: b[5] || "",
                port: b[6] || "",
                pathname: b[7] || "",
                search: b[8] || "",
                hash: b[9] || "",
              }
            );
          };
          b.absolutizeURI = function (a, e) {
            function c(a) {
              var b = [];
              a.replace(/^(\.\.?(\/|$))+/, "")
                .replace(/\/(\.(\/|$))+/g, "/")
                .replace(/\/\.\.$/, "/../")
                .replace(/\/?[^\/]*/g, function (a) {
                  "/.." === a ? b.pop() : b.push(a);
                });
              return b.join("").replace(/^\//, "/" === a.charAt(0) ? "/" : "");
            }
            var d, h, q, p, g, r, m, l;
            l = e ? b.parseURI(e) : {};
            m = a ? b.parseURI(a) : {};
            l.protocol
              ? ((d = l.protocol),
                (h = l.ob),
                (q = l.wb),
                (p = l.gb),
                (g = l.host),
                (r = c(l.pathname)),
                (m = l.search))
              : l.host
              ? ((d = m.protocol),
                (h = m.ob),
                (q = l.wb),
                (p = l.gb),
                (g = l.host),
                (r = c(l.pathname)),
                (m = l.search))
              : ((d = m.protocol),
                (h = m.ob),
                (q = m.wb),
                (p = m.gb),
                (g = m.host),
                l.pathname
                  ? ("/" === l.pathname.charAt(0)
                      ? (r = c(l.pathname))
                      : ((r = m.pathname
                          ? m.pathname.slice(
                              0,
                              m.pathname.lastIndexOf("/") + 1
                            ) + l.pathname
                          : h
                          ? "/" + l.pathname
                          : l.pathname),
                        (r = c(r))),
                    (m = l.search))
                  : ((r = c(m.pathname)), (m = l.search || m.search)));
            return (
              d +
              h +
              (q ? q + (p ? ":" + p : "") + "@" : "") +
              g +
              r +
              m +
              (l.hash ? l.hash : "")
            );
          };
          b.getFullyQualifiedUrl = function (f) {
            try {
              var e,
                c = document.location.href,
                d;
              a: {
                for (
                  var h = document.getElementsByTagName("base"), q = 0;
                  q < h.length;
                  q++
                ) {
                  var p = h[q].href;
                  if (p) {
                    d = p;
                    break a;
                  }
                }
                d = void 0;
              }
              e = d ? b.absolutizeURI(c, d) : c;
              return b.absolutizeURI(e, f);
            } catch (g) {
              return a.exception(g, "M28", f, e), f;
            }
          };
        })(a.utils || (a.utils = {}));
      })(g || (g = {}));
      (function (a) {
        a = a.events || (a.events = {});
        a = a.b || (a.b = {});
        a.navigationStart = "navigationStart";
        a.domainLookupStart = "domainLookupStart";
        a.domainLookupEnd = "domainLookupEnd";
        a.connectStart = "connectStart";
        a.secureConnectionStart = "secureConnectionStart";
        a.connectEnd = "connectEnd";
        a.requestStart = "requestStart";
        a.responseStart = "responseStart";
        a.responseEnd = "responseEnd";
        a.domContentLoadedEventStart = "domContentLoadedEventStart";
        a.loadEventEnd = "loadEventEnd";
        a.Ad = "sendTime";
        a.xc = "firstByteTime";
        a.vd = "respAvailTime";
        a.wd = "respProcTime";
        a.yb = "viewChangeStart";
        a.Qd = "viewChangeEnd";
        a.zb = "viewDOMLoaded";
        a.Vd = "xhrRequestsCompleted";
        a.Oi = "viewFragmentsLoaded";
        a.Pi = "viewResourcesLoaded";
        a.Ab = "virtualPageStart";
        a.Sh = "virtualPageEnd";
      })(g || (g = {}));
      (function (a) {
        a = a.events || (a.events = {});
        a.metricSpec = {};
        a.metricSpec[0] = {
          Of: {
            start: a.b.navigationStart,
            end: a.b.loadEventEnd,
            name: "PLT",
          },
          Vf: {
            start: a.b.navigationStart,
            end: a.b.responseStart,
            name: "FBT",
          },
          Ki: {
            start: a.b.navigationStart,
            end: a.b.requestStart,
            name: "SCT",
          },
          Li: {
            start: a.b.secureConnectionStart,
            end: a.b.connectEnd,
            name: "SHT",
          },
          ri: {
            start: a.b.domainLookupStart,
            end: a.b.domainLookupEnd,
            name: "DLT",
          },
          Ni: { start: a.b.connectStart, end: a.b.connectEnd, name: "TCP" },
          Ii: { start: a.b.requestStart, end: a.b.responseStart, name: "RAT" },
          ti: { start: a.b.responseStart, end: a.b.loadEventEnd, name: "FET" },
          vi: {
            start: a.b.responseStart,
            end: a.b.domContentLoadedEventStart,
            name: "DRT",
          },
          ii: { start: a.b.responseStart, end: a.b.responseEnd, name: "DDT" },
          pi: {
            start: a.b.responseEnd,
            end: a.b.domContentLoadedEventStart,
            name: "DPT",
          },
          Hi: {
            start: a.b.domContentLoadedEventStart,
            end: a.b.loadEventEnd,
            name: "PRT",
          },
          qi: {
            start: a.b.navigationStart,
            end: a.b.domContentLoadedEventStart,
            name: "DOM",
          },
        };
        a.metricSpec[2] = {
          Vf: { start: a.b.Ad, end: a.b.xc, name: "FBT" },
          ui: { start: a.b.xc, end: a.b.vd, name: "DDT" },
          hi: { start: a.b.vd, end: a.b.wd, name: "DPT" },
          Of: { start: a.b.Ad, end: a.b.wd, name: "PLT" },
        };
        a.metricSpec[3] = {
          Bi: { start: a.b.Ab, end: a.b.Sh, name: "PLT" },
          ni: { start: a.b.yb, end: a.b.Qd, name: "DDT" },
          yi: { start: a.b.yb, end: a.b.zb, name: "DRT" },
          Zh: { start: a.b.Qd, end: a.b.zb, name: "DPT" },
          $h: { start: a.b.yb, end: a.b.zb, name: "DOM" },
          Gi: {
            start: "viewChangeEnd",
            end: "xhrRequestsCompleted",
            name: null,
          },
          zi: { start: "viewChangeEnd", end: "viewPartialsLoaded", name: null },
          xi: {
            start: "viewPartialsLoaded",
            end: "viewFragmentsLoaded",
            name: null,
          },
          Ai: {
            start: "viewPartialsLoaded",
            end: "viewResourcesLoaded",
            name: null,
          },
        };
        a.metricSpec[102] = a.metricSpec[3];
      })(g || (g = {}));
      (function (a) {
        (function (b) {
          var f = (function (e) {
            function c(d) {
              this.constructor != c && this.constructor != b.AdrumAjax
                ? a.reportAPIMessage(0, a.W, "ADRUM.events.Ajax", [])
                : e.call(this, d);
            }
            u(c, e);
            c.prototype.type = function () {
              return 2;
            };
            return c;
          })(b.EventTracker);
          b.Ajax = f;
          b.aa(b.w[2], f.prototype);
          b.gc(b.metricSpec[2], f.prototype);
        })(a.events || (a.events = {}));
      })(g || (g = {}));
      (function (a) {
        (function (a) {
          var f = (function (a) {
            function b(c) {
              a.call(this, c);
            }
            u(b, a);
            b.prototype.type = function () {
              return 2;
            };
            return b;
          })(a.Ajax);
          a.AdrumAjax = f;
          a.aa(a.w[101], f.prototype);
        })(a.events || (a.events = {}));
      })(g || (g = {}));
      (function (a) {
        (function (b) {
          var f = a.utils.isObject,
            e = a.utils.isDefined,
            c = a.utils.map,
            d = a.utils.reduce,
            h = a.utils.filter,
            q = a.utils.Vh,
            p = a.utils.isString,
            g = a.utils.Ff,
            r = a.utils.wf,
            m = a.utils.isFunction,
            l = a.utils.mergeJSON,
            s = (function (b) {
              function n() {
                b.call(this);
                this.conf = null;
                this.qb = !1;
                this.Ja = 0;
                !0 === window["adrum-xhr-disable"]
                  ? a.log("M29")
                  : window.XMLHttpRequest
                  ? ((this.conf = {
                      exclude: [
                        {
                          urls: [
                            {
                              pattern:
                                a.conf.beaconUrlHttp + a.conf.corsEndpointPath,
                            },
                            {
                              pattern:
                                a.conf.beaconUrlHttps + a.conf.corsEndpointPath,
                            },
                          ],
                        },
                      ],
                      include: [],
                      maxPerPageView: n.Fb,
                    }),
                    n.nd(this.conf, a.conf.userConf && a.conf.userConf.xhr),
                    (this.g = window.XMLHttpRequest.prototype)
                      ? "open" in this.g && "send" in this.g
                        ? (this.qb =
                            a.aop.support(this.g.open) &&
                            a.aop.support(this.g.send)) || a.log("M33")
                        : a.log("M32")
                      : a.log("M31"))
                  : a.log("M30");
              }
              u(n, b);
              n.nd = function (b, c) {
                var d = n.Fb;
                if (c) {
                  var h = c.maxPerPageView;
                  a.utils.isNumber(h) && 0 < h
                    ? (d = h)
                    : a.reportAPIMessage(
                        4,
                        "value is not valid; don't limit xhr",
                        "xhr.maxPerPageView",
                        [h]
                      );
                }
                b.maxPerPageView = d;
                b.exclude = n.xb(n.Pd, "exclude", b, c);
                b.include = n.xb(n.Pd, "include", b, c);
                b.parameter = n.xb(n.Qh, "parameter", c);
              };
              n.xb = function (a, b) {
                for (var d = [], e = 2; e < arguments.length; e++)
                  d[e - 2] = arguments[e];
                return g(
                  c(
                    h(
                      r(
                        c(g(d), function (a) {
                          return q(a[b]);
                        })
                      ),
                      n.Eg(b)
                    ),
                    a
                  )
                );
              };
              n.Pd = function (a) {
                var b = n.ld(a);
                a = n.md(a);
                return b || a;
              };
              n.Eg = function (b) {
                return function (c) {
                  return (
                    f(c) ||
                    a.reportAPIMessage(
                      2,
                      "Filter object must be an object",
                      "xhr." + b,
                      [c]
                    )
                  );
                };
              };
              n.md = function (a) {
                var b = a.urls;
                if (
                  b &&
                  0 < b.length &&
                  ((a.urls = n.Af(b)), 0 < a.urls.length)
                )
                  return a;
              };
              n.ld = function (b) {
                var c = b.method;
                if (e(c)) {
                  if (p(c)) return b;
                  a.error("M34");
                }
              };
              n.Qh = function (a) {
                var b = n.md(a);
                n.ld(a);
                return n.jh(a) && b;
              };
              n.jh = function (b) {
                if (m(b.getFromBody)) return b;
                a.error("M35");
              };
              n.Af = function (b) {
                for (var c = [], d = 0; d < b.length; d++) {
                  var h = b[d].pattern;
                  if ("string" === typeof h)
                    try {
                      c.push(new RegExp(h));
                    } catch (e) {
                      a.exception(e, "Parse regex pattern failed.");
                    }
                  else a.error("xhr filter pattern should be a string");
                }
                return c;
              };
              n.Ed = function (a, b, c) {
                var d = c && c.include;
                c = c && c.exclude;
                return (
                  (d && 0 < d.length && !n.Tc(b, a, d)) ||
                  (c && 0 < c.length && n.Tc(b, a, c))
                );
              };
              n.uc = function (b) {
                var c = b.message || b.description,
                  d = b.fileName || b.filename,
                  h = b.lineNumber;
                a.utils.isString(b.description) &&
                  0 <= b.description.indexOf("Access is denied.") &&
                  (c += ": maybe you have CORS XHR error in IE");
                a.monitor.Ra.qd(c, d, h, b);
              };
              n.prototype.setUp = function () {
                if (this.qb) {
                  a.log("M36");
                  a.xhrConstructor = window.XMLHttpRequest;
                  a.xhrOpen = this.xhrOpen = this.g.open;
                  a.xhrSend = this.xhrSend = this.g.send;
                  var b = this;
                  this.g.open = a.aop.around(
                    this.g.open,
                    function () {
                      n.Gg(this) &&
                        (4 === this.readyState
                          ? (a.log("M37"),
                            n.Pf(this._adrumAjaxT),
                            n.a(this, this._adrumAjaxT))
                          : a.log(
                              "M38" + this._adrumAjaxT.url() + "' is reported."
                            ));
                      var c = 1 <= arguments.length ? String(arguments[0]) : "",
                        d = 2 <= arguments.length ? String(arguments[1]) : "",
                        d = a.utils.getFullyQualifiedUrl(d);
                      b.Ja >= b.conf.maxPerPageView ||
                        n.Ed(d, c, b.conf) ||
                        (this._adrumAjaxT = new a.events.AdrumAjax(
                          a.utils.mergeJSON({ method: c, url: d }, b.status)
                        ));
                    },
                    null,
                    "XHR.open",
                    n.uc
                  );
                  this.g.send = a.aop.around(
                    this.g.send,
                    function (c) {
                      var d = this,
                        h = this._adrumAjaxT;
                      if (h && !(++b.Ja > b.conf.maxPerPageView)) {
                        var e = a.utils.now(),
                          q = h.getSendTime();
                        a.assert(null === q, "M39");
                        h.timestamp(e);
                        h.markSendTime(q || e);
                        h.parentPhase(a.lifecycle.getPhaseName());
                        n.Rc(h.url())
                          ? d.setRequestHeader("ADRUM", "isAjax:true")
                          : a.log("M40", document.location.href, h.url());
                        c = n.gg(h.url(), b.conf.parameter, c);
                        h.parameter(c);
                        var f = 0,
                          p = function () {
                            if (4 == d.readyState) a.log("M41"), b.Ga(d);
                            else {
                              var c = null;
                              try {
                                c = d.onreadystatechange;
                              } catch (h) {
                                a.log("M42", h);
                                b.Ga(d);
                                return;
                              }
                              f++;
                              c
                                ? a.aop.support(c)
                                  ? ((d.onreadystatechange = b.pc(
                                      c,
                                      d,
                                      "XHR.onReadyStateChange"
                                    )),
                                    a.log("M43", f))
                                  : (a.log("M44"), b.Ga(d))
                                : f < n.df
                                ? a.utils.lb(p)
                                : (a.log("M45"), b.Ga(d));
                            }
                          };
                        p();
                      }
                    },
                    null,
                    "XHR.send",
                    n.uc
                  );
                  "addEventListener" in this.g &&
                  "removeEventListener" in this.g &&
                  a.aop.support(this.g.addEventListener) &&
                  a.aop.support(this.g.removeEventListener)
                    ? ((this.g.addEventListener = a.aop.around(
                        this.g.addEventListener,
                        this.Bf(),
                        null,
                        "XHR.addEventListener"
                      )),
                      (this.g.removeEventListener = a.aop.around(
                        this.g.removeEventListener,
                        function (b, c) {
                          if (this._adrumAjaxT) {
                            var d = Array.prototype.slice.call(arguments);
                            c.__adrumInterceptor
                              ? ((d[1] = c.__adrumInterceptor), a.log("M46"))
                              : a.log("M47");
                            return d;
                          }
                        },
                        null,
                        "XHR.removeEventListener"
                      )))
                    : a.log("M48");
                  a.log("M49");
                }
              };
              n.prototype.td = function () {
                this.Ja = 0;
              };
              n.$c = function (a, b) {
                for (var c = !1, d = 0; d < b.length; d++) {
                  var h = b[d];
                  if (h && h.test(a)) {
                    c = !0;
                    break;
                  }
                }
                return c;
              };
              n.Tc = function (a, b, c) {
                var d = !1;
                if (b && c)
                  for (var h = 0; h < c.length; h++) {
                    var e = c[h];
                    if (
                      !(
                        (e.method && a !== e.method) ||
                        (e.urls && !n.$c(b, e.urls))
                      )
                    ) {
                      d = !0;
                      break;
                    }
                  }
                return d;
              };
              n.gh = function (a, b, c) {
                return (b || a) === (c || a);
              };
              n.Rc = function (a) {
                var b = document.createElement("a");
                b.href = a;
                a = document.location;
                var c = a.protocol;
                return (
                  b.protocol === c &&
                  b.hostname === a.hostname &&
                  n.gh(n.Ef[c], b.port, a.port)
                );
              };
              n.gg = function (a, b, e) {
                if (
                  b &&
                  ((b = h(
                    c(
                      h(b, function (b) {
                        return n.$c(a, b.urls);
                      }),
                      function (a) {
                        return a.getFromBody(e);
                      }
                    ),
                    f
                  )),
                  0 < b.length)
                )
                  return d(b, l, {});
              };
              n.Ic = function (b) {
                var c = b._adrumAjaxT;
                if (c) {
                  var d = new Date().getTime();
                  2 == b.readyState
                    ? c.markFirstByteTime(c.getFirstByteTime() || d)
                    : 4 == b.readyState &&
                      (a.assert(null === c.getRespAvailTime(), "M50"),
                      c.markRespAvailTime(c.getRespAvailTime() || d),
                      c.markFirstByteTime(c.getFirstByteTime() || d));
                }
              };
              n.prototype.pc = function (b, c, d) {
                return n.Xh(
                  b,
                  function () {
                    n.Ic(this);
                  },
                  function () {
                    var b = c._adrumAjaxT;
                    if (b && 4 == c.readyState) {
                      var d = new Date().getTime();
                      a.assert(null === b.getRespProcTime(), "M51");
                      b.markRespProcTime(b.getRespProcTime() || d);
                      n.a(c, b);
                    }
                  },
                  d
                );
              };
              n.Gg = function (b) {
                return (
                  a.utils.isDefined(b._adrumAjaxT) &&
                  a.utils.isString(b._adrumAjaxT._url)
                );
              };
              n.Pf = function (a) {
                var b = new Date().getTime();
                a.markRespAvailTime(a.getRespAvailTime() || b);
                a.markFirstByteTime(a.getFirstByteTime() || b);
                a.markRespProcTime(a.getRespProcTime() || b);
              };
              n.a = function (b, c) {
                var d = b.status,
                  h;
                c.xhrStatus(d);
                c.allResponseHeaders(b.getAllResponseHeaders());
                400 <= d
                  ? ((h =
                      "blob" == b.responseType
                        ? "blob"
                        : p(b.responseText)
                        ? b.responseText
                        : ""),
                    c.error({ status: d, msg: h }))
                  : 0 !== d ||
                    n.Rc(c.url()) ||
                    c.error({
                      status: d,
                      msg:
                        "Cannot load requested resource. The cause may be: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin is therefore not allowed access",
                    });
                a.command("reportXhr", c);
              };
              n.prototype.Ga = function (b) {
                if (b._adrumAjaxT) {
                  var c = new Date().getTime() + 3e4,
                    d = function () {
                      n.Ic(b);
                      var h = b._adrumAjaxT;
                      if (h) {
                        var e = new Date().getTime();
                        4 == b.readyState
                          ? (a.assert(null === h.getRespProcTime(), "M52"),
                            h.markRespProcTime(h.getRespProcTime() || e),
                            a.log("M53"),
                            n.a(b, h),
                            delete b._adrumAjaxT)
                          : e < c
                          ? setTimeout(d, n.Gb)
                          : (delete b._adrumAjaxT, a.log("M54"));
                      }
                    };
                  d();
                }
              };
              n.Xh = function (b, c, d, h) {
                var e = b;
                b &&
                  "object" === typeof b &&
                  "toString" in b &&
                  "[xpconnect wrapped nsIDOMEventListener]" === b.toString() &&
                  "handleEvent" in b &&
                  (e = function () {
                    b.handleEvent.apply(
                      this,
                      Array.prototype.slice.call(arguments)
                    );
                  });
                return a.aop.around(e, c, d, h);
              };
              n.prototype.Bf = function () {
                for (var b = 0; b < arguments.length; b++);
                var c = this;
                return function (b, d) {
                  if (
                    ("load" === b || "error" === b) &&
                    d &&
                    this._adrumAjaxT
                  ) {
                    var h;
                    h = d;
                    if (h.__adrumInterceptor) h = h.__adrumInterceptor;
                    else if (a.aop.support(h)) {
                      var e = c.pc(h, this, "XHR.invokeEventListener");
                      h = h.__adrumInterceptor = e;
                    } else h = null;
                    if (h)
                      return (
                        (e = Array.prototype.slice.call(arguments)),
                        (e[1] = h),
                        a.log("M55"),
                        e
                      );
                    a.log("M56", b, d);
                  }
                };
              };
              n.df = 5;
              n.Gb = 50;
              n.Fb = 50;
              n.Ef = { "http:": "80", "https:": "443" };
              return n;
            })(b.Hb);
          b.na = s;
          b.ia = new b.na();
        })(a.monitor || (a.monitor = {}));
      })(g || (g = {}));
      (function (a) {
        (function (b) {
          function f(a, b) {
            var c = [],
              e = /^\s*(ADRUM_BT\w*)=(.*)\s*$/i.exec(a);
            if (e) {
              var f = e[1],
                e = e[2].replace(/^"|"$/g, ""),
                e = decodeURIComponent(e).split("|"),
                g = e[0].split(":");
              if ("R" === g[0] && Number(g[1]) === b)
                for (d(f), f = 1; f < e.length; f++) c.push(e[f]);
            }
            return c;
          }
          function e(a, b) {
            var c = /^\s*(ADRUM_(\d+)_(\d+)_(\d+))=(.*)\s*$/i.exec(a);
            if (c) {
              var e = c[1],
                f = c[4],
                g = c[5];
              if (Number(c[3]) === b)
                return d(e), { index: Number(f), value: g };
            }
            return null;
          }
          function c(b) {
            var c = /^\s*ADRUM=s=([\d]+)&r=(.*)\s*/.exec(b);
            if (c) {
              a.log("M59", b);
              if (3 === c.length)
                return d("ADRUM"), { startTime: Number(c[1]), startPage: c[2] };
              a.error("M60", b);
              return null;
            }
          }
          function d(b) {
            a.log("M58", b);
            var c = new Date();
            c.setTime(c.getTime() - 1e3);
            document.cookie = b + "=;Expires=" + c.toUTCString();
          }
          b.startTimeCookie = null;
          b.cookieMetadataChunks = null;
          b.sc = function (d, q) {
            a.log("M57");
            for (
              var g = q ? q.length : 0, k = [], r = d.split(";"), m = 0;
              m < r.length;
              m++
            ) {
              var l = r[m],
                s = e(l, g);
              s
                ? k.push(s)
                : ((l = c(l)), null != l && (b.startTimeCookie = l));
            }
            Array.prototype.sort.call(k, function (a, b) {
              return a.index - b.index;
            });
            l = [];
            for (m = 0; m < k.length; m++) l.push(k[m].value);
            for (m = 0; m < r.length; m++)
              (k = f(r[m], g)) && 0 < k.length && (l = l.concat(k));
            b.cookieMetadataChunks = l;
          };
          a.correlation.eck = b.sc;
        })(a.correlation || (a.correlation = {}));
      })(g || (g = {}));
      (function (a) {
        a.report = function (b) {
          a.utils.isObject(b) && a.utils.isFunction(b.type)
            ? -1 == [0, 2, 3, 4].indexOf(b.type())
              ? a.reportAPIMessage(
                  0,
                  b.type() + "is not a valid external event type",
                  "ADRUM.report",
                  Array.prototype.slice.call(arguments)
                )
              : a.utils.lb(function () {
                  a.command("reportEvent", b);
                })
            : a.reportAPIMessage(
                1,
                "",
                "ADRUM.report",
                Array.prototype.slice.call(arguments)
              );
        };
      })(g || (g = {}));
      (function (a) {
        "APP_KEY_NOT_SET" === a.conf.appKey &&
          "undefined" !== typeof console &&
          "undefined" !== typeof console.log &&
          console.log(
            "AppDynamics EUM cloud application key missing. Please specify window['adrum-app-key']"
          );
        a.correlation.sc(document.cookie, document.referrer);
        a.command("mark", "firstbyte", window["adrum-start-time"]);
        a.monitor.Cd(
          a.monitor.Ra,
          a.monitor.Hf,
          a.monitor.perfMonitor,
          a.monitor.ia
        );
      })(g || (g = {}));
      (function (a) {
        a = a.ng || (a.ng = {});
        a = a.c || (a.c = {});
        a.Xc = "locationChangeStart";
        a.Og = "locationChangeSuccess";
        a.yd = "routeChangeStart";
        a.zd = "routeChangeSuccess";
        a.Gd = "stateChangeStart";
        a.Hd = "stateChangeSuccess";
        a.Rd = "viewContentLoaded";
        a.qg = "includeContentRequested";
        a.pg = "includeContentLoaded";
        a.qc = "digest";
        a.Di = "outstandingRequestsComplete";
        a.jc = "beforeNgXhrRequested";
        a.ac = "afterNgXhrRequested";
        a.Ci = "ngXhrLoaded";
        a.mc = "$$completeOutstandingRequest";
      })(g || (g = {}));
      (function (a) {
        (function (b) {
          function f(a, c, e, f, g, r) {
            if (c)
              try {
                return c.apply(a, [e, f, g].concat(r));
              } catch (m) {
                return a.error(
                  e,
                  f,
                  g,
                  r,
                  b.Error.re,
                  "an exception occurred in a caller-provided callback function",
                  m
                );
              }
          }
          function e(a, c) {
            return function () {
              var e = this.current,
                g = c[e] || c[b.ma] || e,
                k = Array.prototype.slice.call(arguments);
              if (this.uf(a))
                return this.error(
                  a,
                  e,
                  g,
                  k,
                  b.Error.se,
                  "event " +
                    a +
                    " inappropriate in current state " +
                    this.current
                );
              if (!1 === f(this, this["onbefore" + a], a, e, g, k))
                return b.la.Cb;
              g === b.ma && (g = e);
              if (e === g)
                return (
                  f(this, this["onafter" + a] || this["on" + a], a, e, g, k),
                  b.la.Qe
                );
              var r = this;
              this.transition = function () {
                r.transition = null;
                r.current = g;
                f(r, r["onenter" + g] || r["on" + g], a, e, g, k);
                f(r, r["onafter" + a] || r["on" + a], a, e, g, k);
                return b.la.Ye;
              };
              if (!1 === f(this, this["onleave" + e], a, e, g, k))
                return (this.transition = null), b.la.Cb;
              if (this.transition) return this.transition();
            };
          }
          var c = a.utils.hasOwnPropertyDefined;
          b.VERSION = "2.3.5";
          b.la = { Ye: 1, Qe: 2, Cb: 3, ci: 4 };
          b.Error = { se: 100, di: 200, re: 300 };
          b.ma = "*";
          b.create = function (a, h) {
            function f(a) {
              var c =
                a.from instanceof Array ? a.from : a.from ? [a.from] : [b.ma];
              l[a.name] = l[a.name] || {};
              for (var d = 0; d < c.length; d++)
                (s[c[d]] = s[c[d]] || []),
                  s[c[d]].push(a.name),
                  (l[a.name][c[d]] = a.to || c[d]);
            }
            var g =
                "string" == typeof a.initial ? { state: a.initial } : a.initial,
              k = h || a.target || {},
              r = a.events || [],
              m = a.callbacks || {},
              l = {},
              s = {};
            g &&
              ((g.event = g.event || "startup"),
              f({ name: g.event, from: "none", to: g.state }));
            for (var u = 0; u < r.length; u++) f(r[u]);
            for (var n in l) c(l, n) && (k[n] = e(n, l[n]));
            for (n in m) c(m, n) && (k[n] = m[n]);
            k.current = "none";
            k.wi = function (a) {
              return a instanceof Array
                ? 0 <= a.indexOf(this.current)
                : this.current === a;
            };
            k.tf = function (a) {
              return (
                !this.transition && (c(l[a], this.current) || c(l[a], b.ma))
              );
            };
            k.uf = function (a) {
              return !this.tf(a);
            };
            k.Fa = function () {
              return s[this.current];
            };
            k.error =
              a.error ||
              function (a, b, c, d, h, e, f) {
                throw f || e;
              };
            if (g && !g.defer) k[g.event]();
            return k;
          };
        })(a.Vb || (a.Vb = {}));
      })(g || (g = {}));
      (function (a) {
        (function (b) {
          var f = (function (e) {
            function c(b) {
              this.constructor != a.ng.NgVPageView && this.constructor != c
                ? a.reportAPIMessage(0, a.W, "ADRUM.events.VPageView", [])
                : (e.call(this, b),
                  (this.perf = new a.PerformanceTracker()),
                  this.start(),
                  a.monitor.ia.td());
            }
            u(c, e);
            c.prototype.type = function () {
              return 3;
            };
            c.prototype.cg = function () {
              return b.EventTracker.fc(this.guid(), this.url(), this.type());
            };
            c.prototype.Fd = function (b) {
              var c = this.cg();
              b.set("parent", c);
              a.log("M61", c.guid(), c.url());
            };
            c.prototype.startCorrelatingXhrs = function () {
              a.log("M62");
              this.Fd(a.monitor.ia);
            };
            c.prototype.stopCorrelatingXhrs = function () {
              a.monitor.ia.set("parent", null);
              a.log("M63");
            };
            c.prototype.zh = function () {
              a.log("M64");
              this.Fd(a.monitor.Ra);
            };
            c.prototype.start = function () {
              this.markVirtualPageStart();
              this.startCorrelatingXhrs();
            };
            c.prototype.end = function () {
              this.markVirtualPageEnd();
              this.stopCorrelatingXhrs();
            };
            return c;
          })(b.EventTracker);
          b.VPageView = f;
          b.aa(b.w[3], f.prototype);
          b.gc(b.metricSpec[3], f.prototype);
        })(a.events || (a.events = {}));
      })(g || (g = {}));
      (function (a) {
        var b = a.ng || (a.ng = {}),
          b = b.conf || (b.conf = {});
        b.disabled =
          a.conf.userConf &&
          a.conf.userConf.spa &&
          a.conf.userConf.spa.angular &&
          a.conf.userConf.spa.angular.disable;
        b.distinguishVPwithItsTemplateUrl =
          a.conf.userConf &&
          a.conf.userConf.spa &&
          a.conf.userConf.spa.angular &&
          !0 === a.conf.userConf.spa.angular.distinguishVPwithItsTemplateUrl
            ? !0
            : !1;
        b.xhr = {};
        b.metrics = { includeResTimingInEndUserResponseTiming: !0 };
        a.conf.userConf &&
          a.conf.userConf.spa &&
          a.conf.userConf.spa.angular &&
          a.conf.userConf.spa.angular.vp &&
          (a.conf.userConf.spa.angular.vp.xhr &&
            a.monitor.na.nd(b.xhr, a.conf.userConf.spa.angular.vp.xhr),
          a.conf.userConf.spa.angular.vp.metrics &&
            a.utils.mergeJSON(
              b.metrics,
              a.conf.userConf.spa.angular.vp.metrics
            ));
      })(g || (g = {}));
      (function (a) {
        (function (b) {
          var f = (function (e) {
            function c(b) {
              e.call(this, b);
              this.Qc = !0;
              this.da = {};
              this.V = 0;
              this.constructor != c
                ? a.reportAPIMessage(0, a.W, "ADRUM.events.Ajax", [])
                : this.stopCorrelatingXhrs();
            }
            u(c, e);
            c.prototype.type = function () {
              return 3;
            };
            c.prototype.Ab = function () {
              this.markViewChangeStart();
              this.markVirtualPageStart(this.getViewChangeStart());
              this.timestamp(this.getViewChangeStart());
            };
            c.prototype.rg = function () {
              this.digestCount(this.digestCount() + 1);
            };
            c.prototype.sg = function () {
              this.V++;
              a.log("increasing xhr count " + this.V + " pending xhr requests");
            };
            c.prototype.Df = function () {
              this.V--;
              a.log("decreasing xhr count " + this.V + " pending xhr requests");
            };
            c.prototype.lg = function () {
              var b = this.perf.getEntryByName(a.events.b.Vd);
              a.log("xhrCount " + this.V + " xhrReuqestCompleted " + b);
              return 0 < this.V;
            };
            c.prototype.qf = function () {
              var a = { Ea: 0 },
                b = document.querySelectorAll(
                  "ng-view, [ng-view], .ng-view, [ui-view]"
                );
              if (b && 0 < b.length)
                for (var e in c.ud)
                  for (var f = 0; f < b.length; f++) {
                    var g = angular.element(b[f]).find(e);
                    if (0 < g.length)
                      for (var r = 0; r < g.length; r++) {
                        var m = g[r][c.ud[e].sb];
                        (m = m ? decodeURIComponent(m) : null) &&
                          !a[m] &&
                          ((a[m] = e), a.Ea++);
                      }
                  }
              this.da = a;
            };
            c.prototype.pf = function (a) {
              return !!this.da[decodeURIComponent(a.name)];
            };
            c.prototype.rf = function () {
              var b = [],
                c = this;
              0 < this.da.Ea &&
                (b = a.monitor.perfMonitor.Dc().filter(function (a) {
                  return c.pf(a);
                }));
              this.resTiming(b);
            };
            c.Sf = function (c) {
              for (var h = [], e = 0; e < c.length; e++) {
                var f = c[e];
                (2 !== c[e].eventType && 101 !== c[e].eventType) ||
                  a.monitor.na.Ed(f.eventUrl, f.method, b.conf.xhr) ||
                  h.push(c[e]);
              }
              return h;
            };
            c.dg = function (a) {
              var b,
                c,
                e = -1;
              b = 0;
              for (c = a.length; b < c; b++)
                e = Math.max(e, a[b].timestamp + a[b].metrics.PLT);
              return e;
            };
            c.prototype.kf = function () {
              if (b.conf.xhr) {
                var d = c.Sf(a.channel.getEventsWithParentGUID(this.guid())),
                  d = c.dg(d);
                if (0 < d) {
                  var e = this.perf.getEntryByName(a.events.b.Vd);
                  this.markXhrRequestsCompleted(
                    Math.min((e && e.startTime) || Number.MAX_VALUE, d)
                  );
                }
              }
            };
            c.prototype.adjustTimings = function () {
              this.kf();
              var c = this.getViewDOMLoaded(),
                e = this.getXhrRequestsCompleted(),
                c = Math.max(c, e);
              b.conf.metrics.includeResTimingInEndUserResponseTiming &&
                (this.jf(),
                (e = this.getViewResourcesLoaded()),
                (e = Math.max(c, e)),
                a.log("adjust this.end from %s to %s", c, e),
                (c = e));
              this.markVirtualPageEnd(c);
            };
            c.prototype.jf = function () {
              if (0 < this.da.Ea) {
                this.rf();
                var b = this.resTiming();
                if (b && b.length >= this.da.Ea) {
                  for (var c = [], e = 0; e < b.length; e++)
                    c.push(b[e].responseEnd);
                  b = Math.max.apply(Math, c);
                  this.markViewResourcesLoaded(a.PerformanceTracker.La(b));
                }
              }
            };
            c.prototype.identifier = function (b) {
              var e = this.Td;
              a.utils.isDefined(b) &&
                ((this.Td = c.Qf(b)), this.url(this.Td.url));
              return e;
            };
            c.Qf = function (b) {
              var c = {};
              b && b.j
                ? ((c.j = { eb: "" }),
                  a.utils.mergeJSON(c.j, {
                    eb: b.j.originalPath,
                    ea: b.j.template,
                    fa: b.j.templateUrl,
                  }))
                : b &&
                  b.state &&
                  ((c.state = { url: "" }),
                  a.utils.mergeJSON(c.state, {
                    url: b.state.url,
                    name: b.state.name,
                    ea: b.state.template,
                    fa: b.state.templateUrl,
                  }));
              return c;
            };
            c.ud = {
              img: { sb: "src" },
              script: { sb: "src" },
              link: { sb: "href" },
            };
            return c;
          })(a.events.VPageView);
          b.NgVPageView = f;
          a.events.aa(a.events.w[102], f.prototype);
        })(a.ng || (a.ng = {}));
      })(g || (g = {}));
      (function (a) {
        (function (b) {
          var f = (function () {
            function e() {
              this.h = new b.NgVPageView();
            }
            e.prototype.qh = function () {
              var c = this;
              b.conf.metrics.includeResTimingInEndUserResponseTiming
                ? (a.log("M65"),
                  setTimeout(function () {
                    c.hb();
                  }, e.$e))
                : setTimeout(function () {
                    c.hb();
                  }, e.af);
            };
            e.prototype.hb = function () {
              a.log("M66");
              var b = this.h;
              b.parent(a.monitor.DOMEventsMonitor.currentBasePage);
              a.command("call", function () {
                b.adjustTimings();
                a.reporter.reportEvent(b);
              });
            };
            e.prototype.vh = function (a) {
              this.h = a;
            };
            e.$e = 5e3;
            e.af = 2 * a.monitor.na.Gb;
            return e;
          })();
          b.VirtualPageStateMachine = f;
          a.Vb.create(
            {
              events: [
                { name: "start", from: "none", to: "ChangeView" },
                { name: "viewLoaded", from: "ChangeView", to: "XhrPending" },
                { name: "xhrCompleted", from: "XhrPending", to: "End" },
                { name: "abort", from: "*", to: "none" },
                { name: "init", from: "*", to: "none" },
                { name: "locChange", from: "*", to: "*" },
                { name: "beforeXhrReq", from: "*", to: "*" },
                { name: "afterXhrReq", from: "*", to: "*" },
              ],
              error: function (b) {
                a.log("M67" + b);
              },
              callbacks: {
                onChangeView: function () {
                  this.h.Ab();
                  this.h.zh();
                },
                onviewLoaded: function () {
                  this.h.markViewDOMLoaded();
                },
                onXhrPending: function () {
                  this.h.Qc && this.xhrCompleted();
                },
                onleaveXhrPending: function (a, b, d) {
                  if ("abort" === a) return this.hb(), !0;
                  if ("xhrCompleted" === a && "End" === d) {
                    if (this.h.lg()) return !1;
                    this.h.markXhrRequestsCompleted();
                    return !0;
                  }
                },
                onEnd: function () {
                  this.h.qf();
                  this.qh();
                },
                oninit: function (b, c, d, h) {
                  this.vh(h);
                  a.monitor.ia.td();
                },
                onlocChange: function (a, b, d, h) {
                  this.h.identifier.url = h;
                  this.h.nb({ url: h });
                },
                onbeforeXhrReq: function (b, c, d, h) {
                  var f = this.h;
                  f.Qc = !1;
                  a.log("M68", (h && h[1]) || "", f.guid());
                  f.sg();
                  f.startCorrelatingXhrs();
                  h[3] &&
                    (h[3] = a.aop.before(h[3], function (b, c, d) {
                      a.log("M69");
                      f.Df();
                      d &&
                        (b = a.utils.fh(d)["content-type"]) &&
                        0 <= b.indexOf("text/html") &&
                        f.markViewFragmentsLoaded();
                    }));
                  return h;
                },
                onafterXhrReq: function () {
                  this.h.stopCorrelatingXhrs();
                },
              },
            },
            f.prototype
          );
        })(a.ng || (a.ng = {}));
      })(g || (g = {}));
      (function (a) {
        (function (b) {
          var f = (function () {
            function e() {
              this.n = new b.VirtualPageStateMachine();
              this.distinguishVPwithItsTemplateUrl =
                a.ng.conf.distinguishVPwithItsTemplateUrl;
            }
            e.prototype.k = function (c, d) {
              a.log("M70", c);
              switch (c) {
                case b.c.yd:
                case b.c.Gd:
                  this.n.start();
                  var h = d.next.url || document.URL,
                    f = new b.NgVPageView({ url: h, identifier: d.next });
                  this.distinguishVPwithItsTemplateUrl && e.Ag(this.n.h, f)
                    ? this.n.h.nb({ url: h, identifier: d.next })
                    : this.Fh(f);
                  break;
                case b.c.zd:
                case b.c.Hd:
                  this.n.h.markViewChangeEnd();
                  break;
                case b.c.Rd:
                  this.n.viewLoaded();
                  break;
                case b.c.jc:
                  this.n.beforeXhrReq(d);
                  break;
                case b.c.ac:
                  this.n.afterXhrReq();
                  break;
                case b.c.mc:
                  this.n.xhrCompleted();
                  break;
                case b.c.Xc:
                  this.n.locChange(d.next.url);
                  break;
                case b.c.qc:
                  this.n.h.rg();
              }
            };
            e.prototype.Fh = function (a) {
              this.n.abort();
              this.n.init(a);
              this.n.start();
            };
            e.Ag = function (b, d) {
              var e = b.identifier(),
                f = d.identifier(),
                g = !1;
              return (g =
                (!a.utils.isDefined(e) && !a.utils.isDefined(f)) || e === f
                  ? !0
                  : a.utils.isDefined(e) && a.utils.isDefined(f)
                  ? e.state || f.state
                    ? a.utils.isDefined(e.state) && a.utils.isDefined(f.state)
                      ? e.state.name === f.state.name &&
                        e.state.ea === f.state.ea &&
                        e.state.fa === f.state.fa &&
                        e.state.url === f.state.url
                      : !1
                    : e.j && f.j
                    ? e.j.eb === f.j.eb &&
                      e.j.ea === f.j.ea &&
                      e.j.fa === f.j.fa
                    : e.url === f.url
                  : !1);
            };
            return e;
          })();
          b.bf = f;
        })(a.ng || (a.ng = {}));
      })(g || (g = {}));
      (function (a) {
        (function (b) {
          var f = a.utils.addEventListener,
            e = (function () {
              function c() {
                this.l = new b.bf();
                this.Oc = !1;
              }
              c.prototype.setUp = function () {
                function b(d) {
                  return function () {
                    a.log(d);
                    c.init();
                  };
                }
                var c = this;
                b("M71")();
                f(document, "DOMContentLoaded", b("M72"));
                f(window, "load", b("M73"));
              };
              c.prototype.init = function () {
                if ("undefined" != typeof angular && !this.Oc) {
                  this.Oc = !0;
                  a.log("M74");
                  var b = this,
                    c = angular.module("ng");
                  c.config([
                    "$provide",
                    function (a) {
                      b.xg(a);
                      b.wg(a);
                    },
                  ]);
                  c.run([
                    "$browser",
                    function (a) {
                      b.vg(a);
                    },
                  ]);
                  a.log("M75");
                }
              };
              c.prototype.wg = function (c) {
                var e = a.aop,
                  f = this;
                c.decorator("$httpBackend", [
                  "$delegate",
                  function (a) {
                    return (a = e.around(
                      a,
                      function () {
                        var a = Array.prototype.slice.call(arguments);
                        f.l.k(b.c.jc, a);
                        return a;
                      },
                      function () {
                        f.l.k(b.c.ac);
                      },
                      "ng.httpBackend"
                    ));
                  },
                ]);
              };
              c.prototype.xg = function (c) {
                var e = a.aop,
                  f = this;
                c.decorator("$rootScope", [
                  "$delegate",
                  function (a) {
                    a.$digest = e.after(
                      a.$digest,
                      function () {
                        f.l.k(b.c.qc);
                      },
                      "ngevents.digest"
                    );
                    a.$on("$locationChangeStart", function (a, c) {
                      var e = { url: c },
                        d = a && a.ba && a.ba.$state && a.ba.$state.current;
                      d && (e.state = d);
                      f.l.k(b.c.Xc, { next: e });
                    });
                    a.$on("$locationChangeSuccess", function () {
                      f.l.k(b.c.Og);
                    });
                    a.$on("$routeChangeStart", function (a, c) {
                      var e = { url: location.href },
                        d = c && c.$$route;
                      d && (e.j = d);
                      f.l.k(b.c.yd, { next: e });
                    });
                    a.$on("$routeChangeSuccess", function () {
                      f.l.k(b.c.zd);
                    });
                    a.$on("$stateChangeStart", function (a, c) {
                      f.l.k(b.c.Gd, { next: { state: c } });
                    });
                    a.$on("$stateChangeSuccess", function () {
                      f.l.k(b.c.Hd);
                    });
                    a.$on("$viewContentLoaded", function (a) {
                      var c = { url: location.href };
                      if ((a = a && a.ba && a.ba.$state && a.ba.$state.current))
                        c.state = a;
                      f.l.k(b.c.Rd, { next: c });
                    });
                    a.$on("$includeContentRequested", function () {
                      f.l.k(b.c.qg);
                    });
                    a.$on("$includeContentLoaded", function () {
                      f.l.k(b.c.pg);
                    });
                    return a;
                  },
                ]);
              };
              c.prototype.vg = function (c) {
                var e = this;
                c.$$completeOutstandingRequest = a.aop.before(
                  c.$$completeOutstandingRequest,
                  function () {
                    e.l.k(b.c.mc);
                  }
                );
              };
              return c;
            })();
          b.Yh = e;
          b.ngMonitor = new e();
        })(a.ng || (a.ng = {}));
      })(g || (g = {}));
      (function (a) {
        var b = a.ng || (a.ng = {});
        b.conf.disabled || a.monitor.Cd(b.ngMonitor);
      })(g || (g = {}));
    }
  })();
})();
