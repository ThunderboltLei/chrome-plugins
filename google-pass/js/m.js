(function() {
  const r = {
      E: function(t, e) {
          if (t = String(t), e = String(e), 0 == t.length) return "";
          var n = r.strToLongs(r.utf8Encode(t)),
              o = r.strToLongs(r.utf8Encode(e).slice(0, 16));
          n.length;
          return n = r.encode(n, o),
              r.longsToStr(n)
      },
      D: function(t, e) {
          if (t = String(t), e = String(e), 0 == t.length) return "";
          var n = r.strToLongs(t),
              o = r.strToLongs(r.utf8Encode(e).slice(0, 16));
          n.length;
          n = r.decode(n, o);
          var i = r.longsToStr(n);
          return r.utf8Decode((i = i.replace(/\0+$/, "")))
      },
      P: function(t, e) {
          for (var n = (t + e).replace("T", ""), r = [], o = 0; o < 16; o++) r.push(String.fromCharCode(parseInt(n.charCodeAt(o) + n.charCodeAt(o + 16) + n.charCodeAt(o + 32)) / 3));
          return r.join("")
      },
      G: function() {
          function t() {
              return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
          }
          return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
      },
      M: function(t) {
          function e(t, e) {
              var n = t[0],
                  u = t[1],
                  c = t[2],
                  s = t[3];
              u = a(u = a(u = a(u = a(u = i(u = i(u = i(u = i(u = o(u = o(u = o(u = o(u = r(u = r(u = r(u = r(u, c = r(c, s = r(s, n = r(n, u, c, s, e[0], 7, -680876936), u, c, e[1], 12, -389564586), n, u, e[2], 17, 606105819), s, n, e[3], 22, -1044525330), c = r(c, s = r(s, n = r(n, u, c, s, e[4], 7, -176418897), u, c, e[5], 12, 1200080426), n, u, e[6], 17, -1473231341), s, n, e[7], 22, -45705983), c = r(c, s = r(s, n = r(n, u, c, s, e[8], 7, 1770035416), u, c, e[9], 12, -1958414417), n, u, e[10], 17, -42063), s, n, e[11], 22, -1990404162), c = r(c, s = r(s, n = r(n, u, c, s, e[12], 7, 1804603682), u, c, e[13], 12, -40341101), n, u, e[14], 17, -1502002290), s, n, e[15], 22, 1236535329), c = o(c, s = o(s, n = o(n, u, c, s, e[1], 5, -165796510), u, c, e[6], 9, -1069501632), n, u, e[11], 14, 643717713), s, n, e[0], 20, -373897302), c = o(c, s = o(s, n = o(n, u, c, s, e[5], 5, -701558691), u, c, e[10], 9, 38016083), n, u, e[15], 14, -660478335), s, n, e[4], 20, -405537848), c = o(c, s = o(s, n = o(n, u, c, s, e[9], 5, 568446438), u, c, e[14], 9, -1019803690), n, u, e[3], 14, -187363961), s, n, e[8], 20, 1163531501), c = o(c, s = o(s, n = o(n, u, c, s, e[13], 5, -1444681467), u, c, e[2], 9, -51403784), n, u, e[7], 14, 1735328473), s, n, e[12], 20, -1926607734), c = i(c, s = i(s, n = i(n, u, c, s, e[5], 4, -378558), u, c, e[8], 11, -2022574463), n, u, e[11], 16, 1839030562), s, n, e[14], 23, -35309556), c = i(c, s = i(s, n = i(n, u, c, s, e[1], 4, -1530992060), u, c, e[4], 11, 1272893353), n, u, e[7], 16, -155497632), s, n, e[10], 23, -1094730640), c = i(c, s = i(s, n = i(n, u, c, s, e[13], 4, 681279174), u, c, e[0], 11, -358537222), n, u, e[3], 16, -722521979), s, n, e[6], 23, 76029189), c = i(c, s = i(s, n = i(n, u, c, s, e[9], 4, -640364487), u, c, e[12], 11, -421815835), n, u, e[15], 16, 530742520), s, n, e[2], 23, -995338651), c = a(c, s = a(s, n = a(n, u, c, s, e[0], 6, -198630844), u, c, e[7], 10, 1126891415), n, u, e[14], 15, -1416354905), s, n, e[5], 21, -57434055), c = a(c, s = a(s, n = a(n, u, c, s, e[12], 6, 1700485571), u, c, e[3], 10, -1894986606), n, u, e[10], 15, -1051523), s, n, e[1], 21, -2054922799), c = a(c, s = a(s, n = a(n, u, c, s, e[8], 6, 1873313359), u, c, e[15], 10, -30611744), n, u, e[6], 15, -1560198380), s, n, e[13], 21, 1309151649), c = a(c, s = a(s, n = a(n, u, c, s, e[4], 6, -145523070), u, c, e[11], 10, -1120210379), n, u, e[2], 15, 718787259), s, n, e[9], 21, -343485551),
                  t[0] = l(n, t[0]),
                  t[1] = l(u, t[1]),
                  t[2] = l(c, t[2]),
                  t[3] = l(s, t[3])
          }

          function n(t, e, n, r, o, i) {
              return l((e = l(l(e, t), l(r, i))) << o | e >>> 32 - o, n)
          }

          function r(t, e, r, o, i, a, u) {
              return n(e & r | ~e & o, t, e, i, a, u)
          }

          function o(t, e, r, o, i, a, u) {
              return n(e & o | r & ~o, t, e, i, a, u)
          }

          function i(t, e, r, o, i, a, u) {
              return n(e ^ r ^ o, t, e, i, a, u)
          }

          function a(t, e, r, o, i, a, u) {
              return n(r ^ (e | ~o), t, e, i, a, u)
          }

          function u(t) {
              var e, n = [];
              for (e = 0; e < 64; e += 4) n[e >> 2] = t.charCodeAt(e) + (t.charCodeAt(e + 1) << 8) + (t.charCodeAt(e + 2) << 16) + (t.charCodeAt(e + 3) << 24);
              return n
          }
          var c = "0123456789abcdef".split("");

          function s(t) {
              for (var e = "",
                      n = 0; n < 4; n++) e += c[t >> 8 * n + 4 & 15] + c[t >> 8 * n & 15];
              return e
          }

          function l(t, e) {
              return t + e & 4294967295
          }
          return function(t) {
              for (var e = 0; e < t.length; e++) t[e] = s(t[e]);
              return t.join("")
          }(function(t) {
              var n, r = t.length,
                  o = [1732584193, -271733879, -1732584194, 271733878];
              for (n = 64; n <= t.length; n += 64) e(o, u(t.substring(n - 64, n)));
              t = t.substring(n - 64);
              var i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
              for (n = 0; n < t.length; n++) i[n >> 2] |= t.charCodeAt(n) << (n % 4 << 3);
              if (i[n >> 2] |= 128 << (n % 4 << 3), n > 55)
                  for (e(o, i), n = 0; n < 16; n++) i[n] = 0;
              return i[14] = 8 * r,
                  e(o, i),
                  o
          }(t))
      },
      encode: function(t, e) {
          t.length < 2 && (t[1] = 0);
          for (var n, r, o = t.length,
                  i = t[o - 1], a = t[0], u = Math.floor(6 + 52 / o), c = 0; u-- > 0;) {
              r = (c += 2654435769) >>> 2 & 3;
              for (var s = 0; s < o; s++) n = (i >>> 5 ^ (a = t[(s + 1) % o]) << 2) + (a >>> 3 ^ i << 4) ^ (c ^ a) + (e[3 & s ^ r] ^ i),
                  i = t[s] += n
          }
          return t
      },
      decode: function(t, e) {
          for (var n, r, o = t.length,
                  i = t[o - 1], a = t[0], u = 2654435769 * Math.floor(6 + 52 / o); 0 != u;) {
              r = u >>> 2 & 3;
              for (var c = o - 1; c >= 0; c--) n = ((i = t[c > 0 ? c - 1 : o - 1]) >>> 5 ^ a << 2) + (a >>> 3 ^ i << 4) ^ (u ^ a) + (e[3 & c ^ r] ^ i),
                  a = t[c] -= n;
              u -= 2654435769
          }
          return t
      },
      strToLongs: function(t) {
          for (var e = new Array(Math.ceil(t.length / 4)), n = 0; n < e.length; n++) e[n] = t.charCodeAt(4 * n) + (t.charCodeAt(4 * n + 1) << 8) + (t.charCodeAt(4 * n + 2) << 16) + (t.charCodeAt(4 * n + 3) << 24);
          return e
      },
      longsToStr: function(t) {
          for (var e = new Array(t.length), n = 0; n < t.length; n++) e[n] = String.fromCharCode(255 & t[n], t[n] >>> 8 & 255, t[n] >>> 16 & 255, t[n] >>> 24 & 255);
          return e.join("")
      },
      utf8Encode: function(str) {
          return unescape(encodeURIComponent(str));
      },
      utf8Decode: function(str) {
          try {
              return decodeURIComponent(escape(str))
          } catch (t) {
              return str
          }
      },
      offlineTime: function() {
        return (new Date).toISOString().substr(0, 19).replace(/-/g, "").replace(/:/g, "")
      }
  };
  window.m = r;
})();
