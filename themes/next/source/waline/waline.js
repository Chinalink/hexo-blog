!(function (e, t) {
  if ("function" == typeof define && define.amd)
    define("Waline", ["exports"], t);
  else if ("undefined" != typeof exports) t(exports);
  else {
    var n = { exports: {} };
    t(n.exports), (e.Waline = n.exports);
  }
})(
  "undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof self
    ? self
    : this,
  function (e) {
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.version =
        e.pageviewCount =
        e.init =
        e.defaultLocales =
        e.commentCount =
        e.UserList =
        e.RecentComments =
          void 0);
    const t = ["nick", "mail", "link"],
      n = (e) => e.filter((e) => t.includes(e)),
      r = ["//unpkg.com/@waline/emojis@1.1.0/weibo"],
      l = "en-US",
      i = [
        "//unpkg.com/@waline/emojis/tieba/tieba_agree.png",
        "//unpkg.com/@waline/emojis/tieba/tieba_look_down.png",
        "//unpkg.com/@waline/emojis/tieba/tieba_sunglasses.png",
        "//unpkg.com/@waline/emojis/tieba/tieba_pick_nose.png",
        "//unpkg.com/@waline/emojis/tieba/tieba_awkward.png",
        "//unpkg.com/@waline/emojis/tieba/tieba_sleep.png",
      ],
      o = (e) =>
        new Promise((t, n) => {
          if (e.size > 128e3)
            return n(new Error("File too large! File size limit 128KB"));
          const r = new FileReader();
          r.readAsDataURL(e),
            (r.onload = () => {
              var e;
              return t(
                (null === (e = r.result) || void 0 === e
                  ? void 0
                  : e.toString()) || ""
              );
            }),
            (r.onerror = n);
        }),
      s = (e) =>
        !0 === e
          ? '<p class="wl-tex">Tex is not available in preview</p>'
          : '<span class="wl-tex">Tex is not available in preview</span>',
      a = (e) => {
        const t = async function (t) {
          return fetch(
            `https://api.giphy.com/v1/gifs/${t}?${new URLSearchParams({
              lang: e,
              limit: "20",
              rating: "g",
              api_key: "6CIMLkNMMOhRcXPoMCPkFy4Ybk2XUiMp",
              ...(arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {}),
            }).toString()}`
          )
            .then((e) => e.json())
            .then((e) => {
              let { data: t } = e;
              return t.map((e) => ({
                title: e.title,
                src: e.images.downsized_medium.url,
              }));
            });
        };
        return {
          search: (e) => t("search", { q: e, offset: "0" }),
          default: () => t("trending", {}),
          more: function (e) {
            return t("search", {
              q: e,
              offset: (arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0
              ).toString(),
            });
          },
        };
      },
      c = new RegExp(
        `(${
          /[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+/
            .source
        }|${/</.source})|((?:${/(?:^|\s)\/\/(.+?)$/gm.source})|(?:${
          /\/\*([\S\s]*?)\*\//gm.source
        }))`,
        "gmi"
      ),
      u = [
        "23AC69",
        "91C132",
        "F19726",
        "E8552D",
        "1AAB8E",
        "E1147F",
        "2980C1",
        "1BA1E6",
        "9FA0A0",
        "F19726",
        "E30B20",
        "E30B20",
        "A3338B",
      ],
      p = {},
      d = (e) => {
        let t = 0;
        return e.replace(c, (e, n, r) => {
          if (r) return `<span style="color: slategray">${r}</span>`;
          if ("<" === n) return "&lt;";
          let l;
          p[n] ? (l = p[n]) : ((l = u[t]), (p[n] = l));
          const i = `<span style="color: #${l}">${n}</span>`;
          return (t = ++t % u.length), i;
        });
      },
      h = [
        "nick",
        "nickError",
        "mail",
        "mailError",
        "link",
        "optional",
        "placeholder",
        "sofa",
        "submit",
        "like",
        "cancelLike",
        "reply",
        "cancelReply",
        "comment",
        "refresh",
        "more",
        "preview",
        "emoji",
        "uploadImage",
        "seconds",
        "minutes",
        "hours",
        "days",
        "now",
        "uploading",
        "login",
        "logout",
        "admin",
        "sticky",
        "word",
        "wordHint",
        "anonymous",
        "level0",
        "level1",
        "level2",
        "level3",
        "level4",
        "level5",
        "gif",
        "gifSearchPlaceholder",
        "profile",
        "approved",
        "waiting",
        "spam",
        "unsticky",
        "oldest",
        "latest",
        "hottest",
        "reactionTitle",
      ],
      f = (e) => Object.fromEntries(e.map((e, t) => [h[t], e]));
    var g = f([
        "NickName",
        "NickName cannot be less than 3 bytes.",
        "E-Mail",
        "Please confirm your email address.",
        "Website",
        "Optional",
        "Comment here...",
        "No comment yet.",
        "Submit",
        "Like",
        "Cancel like",
        "Reply",
        "Cancel reply",
        "Comments",
        "Refresh",
        "Load More...",
        "Preview",
        "Emoji",
        "Upload Image",
        "seconds ago",
        "minutes ago",
        "hours ago",
        "days ago",
        "just now",
        "Uploading",
        "Login",
        "logout",
        "Admin",
        "Sticky",
        "Words",
        "Please input comments between $0 and $1 words!\n Current word number: $2",
        "Anonymous",
        "Dwarves",
        "Hobbits",
        "Ents",
        "Wizards",
        "Elves",
        "Maiar",
        "GIF",
        "Search GIF",
        "Profile",
        "Approved",
        "Waiting",
        "Spam",
        "Unsticky",
        "Oldest",
        "Latest",
        "Hottest",
        "What do you think?",
      ]),
      m = f([
        "ニックネーム",
        "3バイト以上のニックネームをご入力ください.",
        "メールアドレス",
        "メールアドレスをご確認ください.",
        "サイト",
        "オプション",
        "ここにコメント",
        "コメントしましょう~",
        "提出する",
        "Like",
        "Cancel like",
        "返信する",
        "キャンセル",
        "コメント",
        "更新",
        "さらに読み込む",
        "プレビュー",
        "絵文字",
        "画像をアップロード",
        "秒前",
        "分前",
        "時間前",
        "日前",
        "たっだ今",
        "アップロード",
        "ログインする",
        "ログアウト",
        "管理者",
        "トップに置く",
        "ワード",
        "コメントは $0 から $1 ワードの間でなければなりません!\n 現在の単語番号: $2",
        "匿名",
        "うえにん",
        "なかにん",
        "しもおし",
        "特にしもおし",
        "かげ",
        "なぬし",
        "GIF",
        "探す GIF",
        "個人情報",
        "承認済み",
        "待っている",
        "スパム",
        "べたつかない",
        "逆順",
        "正順",
        "人気順",
        "どう思いますか？",
      ]),
      v = f([
        "昵称",
        "昵称不能少于3个字符",
        "邮箱",
        "请填写正确的邮件地址",
        "网址",
        "可选",
        "欢迎评论",
        "来发评论吧~",
        "提交",
        "喜欢",
        "取消喜欢",
        "回复",
        "取消回复",
        "评论",
        "刷新",
        "加载更多...",
        "预览",
        "表情",
        "上传图片",
        "秒前",
        "分钟前",
        "小时前",
        "天前",
        "刚刚",
        "正在上传",
        "登录",
        "退出",
        "博主",
        "置顶",
        "字",
        "评论字数应在 $0 到 $1 字之间！\n当前字数：$2",
        "匿名",
        "潜水",
        "冒泡",
        "吐槽",
        "活跃",
        "话痨",
        "传说",
        "表情包",
        "搜索表情包",
        "个人资料",
        "通过",
        "待审核",
        "垃圾",
        "取消置顶",
        "按倒序",
        "按正序",
        "按热度",
        "你认为这篇文章怎么样？",
      ]),
      y = f([
        "暱稱",
        "暱稱不能少於3個字元",
        "郵箱",
        "請填寫正確的郵件地址",
        "網址",
        "可選",
        "歡迎評論",
        "來發評論吧~",
        "提交",
        "喜歡",
        "取消喜歡",
        "回覆",
        "取消回覆",
        "評論",
        "刷新",
        "載入更多...",
        "預覽",
        "表情",
        "上傳圖片",
        "秒前",
        "分鐘前",
        "小時前",
        "天前",
        "剛剛",
        "正在上傳",
        "登錄",
        "退出",
        "博主",
        "置頂",
        "字",
        "評論字數應在 $0 到 $1 字之間！\n當前字數：$2",
        "匿名",
        "潛水",
        "冒泡",
        "吐槽",
        "活躍",
        "話癆",
        "傳說",
        "表情包",
        "搜索表情包",
        "個人資料",
        "通過",
        "待審核",
        "垃圾",
        "取消置頂",
        "按倒序",
        "按正序",
        "按熱度",
        "你認為這篇文章怎麼樣？",
      ]),
      w = f([
        "Apelido",
        "Apelido não pode ser menor que 3 bytes.",
        "E-Mail",
        "Por favor, confirme seu endereço de e-mail.",
        "Website",
        "Opcional",
        "Comente aqui...",
        "Nenhum comentário, ainda.",
        "Enviar",
        "Like",
        "Cancel like",
        "Responder",
        "Cancelar resposta",
        "Comentários",
        "Refrescar",
        "Carregar Mais...",
        "Visualizar",
        "Emoji",
        "Enviar Imagem",
        "segundos atrás",
        "minutos atrás",
        "horas atrás",
        "dias atrás",
        "agora mesmo",
        "Enviando",
        "Entrar",
        "Sair",
        "Admin",
        "Sticky",
        "Palavras",
        "Favor enviar comentário com $0 a $1 palavras!\n Número de palavras atuais: $2",
        "Anônimo",
        "Dwarves",
        "Hobbits",
        "Ents",
        "Wizards",
        "Elves",
        "Maiar",
        "GIF",
        "Pesquisar GIF",
        "informação pessoal",
        "Aprovado",
        "Espera",
        "Spam",
        "Unsticky",
        "Mais velho",
        "Mais recentes",
        "Mais quente",
        "O que você acha?",
      ]),
      b = f([
        "Псевдоним",
        "Никнейм не может быть меньше 3 байт.",
        "Эл. адрес",
        "Пожалуйста, подтвердите адрес вашей электронной почты.",
        "Веб-сайт",
        "Необязательный",
        "Комментарий здесь...",
        "Пока нет комментариев.",
        "Отправить",
        "Like",
        "Cancel like",
        "Отвечать",
        "Отменить ответ",
        "Комментарии",
        "Обновить",
        "Загрузи больше...",
        "Превью",
        "эмодзи",
        "Загрузить изображение",
        "секунд назад",
        "несколько минут назад",
        "несколько часов назад",
        "дней назад",
        "прямо сейчас",
        "Загрузка",
        "Авторизоваться",
        "Выход из системы",
        "Админ",
        "Липкий",
        "Слова",
        "Пожалуйста, введите комментарии от $0 до $1 слов!\nНомер текущего слова: $2",
        "Анонимный",
        "Dwarves",
        "Hobbits",
        "Ents",
        "Wizards",
        "Elves",
        "Maiar",
        "GIF",
        "Поиск GIF",
        "Персональные данные",
        "Одобренный",
        "Ожидающий",
        "Спам",
        "Нелипкий",
        "самый старый",
        "последний",
        "самый горячий",
        "Что вы думаете?",
      ]);
    const k = {
        zh: v,
        "zh-cn": v,
        "zh-CN": v,
        "zh-tw": y,
        "zh-TW": y,
        en: g,
        "en-US": g,
        "en-us": g,
        jp: m,
        ja: m,
        "jp-jp": m,
        "jp-JP": m,
        "pt-br": w,
        "pt-BR": w,
        ru: b,
        "ru-ru": b,
        "ru-RU": b,
      },
      x = { "Content-Type": "application/json" },
      _ = function (e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if ("object" == typeof e && e.errno)
          throw new TypeError(`${t} failed with ${e.errno}: ${e.errmsg}`);
        return e;
      },
      $ = (e) => {
        let { serverURL: t, lang: n, paths: r, type: l, signal: i } = e;
        return fetch(
          `${t}/article?path=${encodeURIComponent(
            r.join(",")
          )}&type=${encodeURIComponent(l.join(","))}&lang=${n}`,
          { signal: i }
        ).then((e) => e.json());
      },
      C = (e) => {
        let { serverURL: t, lang: n, path: r, type: l, action: i } = e;
        return fetch(`${t}/article?lang=${n}`, {
          method: "POST",
          headers: x,
          body: JSON.stringify({ path: r, type: l, action: i }),
        }).then((e) => e.json());
      },
      S = (e) => {
        let { serverURL: t, lang: n, token: r, objectId: l, comment: i } = e;
        return fetch(`${t}/comment/${l}?lang=${n}`, {
          method: "PUT",
          headers: { ...x, Authorization: `Bearer ${r}` },
          body: JSON.stringify(i),
        })
          .then((e) => e.json())
          .then((e) => _(e, "Update comment"));
      },
      A = (e) => {
        try {
          e = decodeURI(e);
        } catch (e) {}
        return e;
      },
      R = function () {
        return (
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
        ).replace(/\/$/u, "");
      },
      E = (e) => /^(https?:)?\/\//.test(e),
      I = (e) => {
        const t = R(e);
        return E(t) ? t : `https://${t}`;
      },
      L = (e) => (Array.isArray(e) ? e : !!e && [0, e]),
      z = (e, t) => ("function" == typeof e ? e : !1 !== e && t),
      O =
        "{--waline-white:#000;--waline-light-grey:#666;--waline-dark-grey:#999;--waline-color:#888;--waline-bgcolor:#1e1e1e;--waline-bgcolor-light:#272727;--waline-bgcolor-hover: #444;--waline-border-color:#333;--waline-disable-bgcolor:#444;--waline-disable-color:#272727;--waline-bq-color:#272727;--waline-info-bgcolor:#272727;--waline-info-color:#666}",
      j = (e, t) => {
        let n = e.toString();
        for (; n.length < t; ) n = "0" + n;
        return n;
      };
    function T(e, t) {
      const n = Object.create(null),
        r = e.split(",");
      for (let e = 0; e < r.length; e++) n[r[e]] = !0;
      return t ? (e) => !!n[e.toLowerCase()] : (e) => !!n[e];
    }
    function U(e) {
      if (ie(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
          const r = e[n],
            l = ue(r) ? N(r) : U(r);
          if (l) for (const e in l) t[e] = l[e];
        }
        return t;
      }
      return ue(e) || de(e) ? e : void 0;
    }
    e.defaultLocales = k;
    const P = /;(?![^(]*\))/g,
      M = /:([^]+)/,
      F = /\/\*.*?\*\//gs;
    function N(e) {
      const t = {};
      return (
        e
          .replace(F, "")
          .split(P)
          .forEach((e) => {
            if (e) {
              const n = e.split(M);
              n.length > 1 && (t[n[0].trim()] = n[1].trim());
            }
          }),
        t
      );
    }
    function V(e) {
      let t = "";
      if (ue(e)) t = e;
      else if (ie(e))
        for (let n = 0; n < e.length; n++) {
          const r = V(e[n]);
          r && (t += r + " ");
        }
      else if (de(e)) for (const n in e) e[n] && (t += n + " ");
      return t.trim();
    }
    const D = T(
      "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
    );
    function H(e) {
      return !!e || "" === e;
    }
    function B(e, t) {
      if (e === t) return !0;
      let n = ae(e),
        r = ae(t);
      if (n || r) return !(!n || !r) && e.getTime() === t.getTime();
      if (((n = pe(e)), (r = pe(t)), n || r)) return e === t;
      if (((n = ie(e)), (r = ie(t)), n || r))
        return (
          !(!n || !r) &&
          (function (e, t) {
            if (e.length !== t.length) return !1;
            let n = !0;
            for (let r = 0; n && r < e.length; r++) n = B(e[r], t[r]);
            return n;
          })(e, t)
        );
      if (((n = de(e)), (r = de(t)), n || r)) {
        if (!n || !r) return !1;
        if (Object.keys(e).length !== Object.keys(t).length) return !1;
        for (const n in e) {
          const r = e.hasOwnProperty(n),
            l = t.hasOwnProperty(n);
          if ((r && !l) || (!r && l) || !B(e[n], t[n])) return !1;
        }
      }
      return String(e) === String(t);
    }
    function W(e, t) {
      return e.findIndex((e) => B(e, t));
    }
    const q = (e) =>
        ue(e)
          ? e
          : null == e
          ? ""
          : ie(e) || (de(e) && (e.toString === fe || !ce(e.toString)))
          ? JSON.stringify(e, Z, 2)
          : String(e),
      Z = (e, t) =>
        t && t.__v_isRef
          ? Z(e, t.value)
          : oe(t)
          ? {
              [`Map(${t.size})`]: [...t.entries()].reduce((e, t) => {
                let [n, r] = t;
                return (e[`${n} =>`] = r), e;
              }, {}),
            }
          : se(t)
          ? { [`Set(${t.size})`]: [...t.values()] }
          : !de(t) || ie(t) || ve(t)
          ? t
          : String(t),
      Q = {},
      K = [],
      G = () => {},
      J = () => !1,
      X = /^on[^a-z]/,
      Y = (e) => X.test(e),
      ee = (e) => e.startsWith("onUpdate:"),
      te = Object.assign,
      ne = (e, t) => {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      },
      re = Object.prototype.hasOwnProperty,
      le = (e, t) => re.call(e, t),
      ie = Array.isArray,
      oe = (e) => "[object Map]" === ge(e),
      se = (e) => "[object Set]" === ge(e),
      ae = (e) => "[object Date]" === ge(e),
      ce = (e) => "function" == typeof e,
      ue = (e) => "string" == typeof e,
      pe = (e) => "symbol" == typeof e,
      de = (e) => null !== e && "object" == typeof e,
      he = (e) => de(e) && ce(e.then) && ce(e.catch),
      fe = Object.prototype.toString,
      ge = (e) => fe.call(e),
      me = (e) => ge(e).slice(8, -1),
      ve = (e) => "[object Object]" === ge(e),
      ye = (e) =>
        ue(e) && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e,
      we = T(
        ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
      ),
      be = (e) => {
        const t = Object.create(null);
        return (n) => t[n] || (t[n] = e(n));
      },
      ke = /-(\w)/g,
      xe = be((e) => e.replace(ke, (e, t) => (t ? t.toUpperCase() : ""))),
      _e = /\B([A-Z])/g,
      $e = be((e) => e.replace(_e, "-$1").toLowerCase()),
      Ce = be((e) => e.charAt(0).toUpperCase() + e.slice(1)),
      Se = be((e) => (e ? `on${Ce(e)}` : "")),
      Ae = (e, t) => !Object.is(e, t),
      Re = (e, t) => {
        for (let n = 0; n < e.length; n++) e[n](t);
      },
      Ee = (e, t, n) => {
        Object.defineProperty(e, t, {
          configurable: !0,
          enumerable: !1,
          value: n,
        });
      },
      Ie = (e) => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t;
      };
    let Le;
    const ze = () =>
      Le ||
      (Le =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof self
          ? self
          : "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : {});
    let Oe;
    class je {
      constructor() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        (this.detached = e),
          (this._active = !0),
          (this.effects = []),
          (this.cleanups = []),
          (this.parent = Oe),
          !e &&
            Oe &&
            (this.index = (Oe.scopes || (Oe.scopes = [])).push(this) - 1);
      }
      get active() {
        return this._active;
      }
      run(e) {
        if (this._active) {
          const t = Oe;
          try {
            return (Oe = this), e();
          } finally {
            Oe = t;
          }
        }
      }
      on() {
        Oe = this;
      }
      off() {
        Oe = this.parent;
      }
      stop(e) {
        if (this._active) {
          let t, n;
          for (t = 0, n = this.effects.length; t < n; t++)
            this.effects[t].stop();
          for (t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
          if (this.scopes)
            for (t = 0, n = this.scopes.length; t < n; t++)
              this.scopes[t].stop(!0);
          if (!this.detached && this.parent && !e) {
            const e = this.parent.scopes.pop();
            e &&
              e !== this &&
              ((this.parent.scopes[this.index] = e), (e.index = this.index));
          }
          (this.parent = void 0), (this._active = !1);
        }
      }
    }
    function Te() {
      return Oe;
    }
    const Ue = (e) => {
        const t = new Set(e);
        return (t.w = 0), (t.n = 0), t;
      },
      Pe = (e) => (e.w & Ve) > 0,
      Me = (e) => (e.n & Ve) > 0,
      Fe = new WeakMap();
    let Ne = 0,
      Ve = 1;
    const De = 30;
    let He;
    const Be = Symbol(""),
      We = Symbol("");
    class qe {
      constructor(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null,
          n = arguments.length > 2 ? arguments[2] : void 0;
        (this.fn = e),
          (this.scheduler = t),
          (this.active = !0),
          (this.deps = []),
          (this.parent = void 0),
          (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : Oe;
            t && t.active && t.effects.push(e);
          })(this, n);
      }
      run() {
        if (!this.active) return this.fn();
        let e = He,
          t = Qe;
        for (; e; ) {
          if (e === this) return;
          e = e.parent;
        }
        try {
          return (
            (this.parent = He),
            (He = this),
            (Qe = !0),
            (Ve = 1 << ++Ne),
            Ne <= De
              ? ((e) => {
                  let { deps: t } = e;
                  if (t.length) for (let e = 0; e < t.length; e++) t[e].w |= Ve;
                })(this)
              : Ze(this),
            this.fn()
          );
        } finally {
          Ne <= De &&
            ((e) => {
              const { deps: t } = e;
              if (t.length) {
                let n = 0;
                for (let r = 0; r < t.length; r++) {
                  const l = t[r];
                  Pe(l) && !Me(l) ? l.delete(e) : (t[n++] = l),
                    (l.w &= ~Ve),
                    (l.n &= ~Ve);
                }
                t.length = n;
              }
            })(this),
            (Ve = 1 << --Ne),
            (He = this.parent),
            (Qe = t),
            (this.parent = void 0),
            this.deferStop && this.stop();
        }
      }
      stop() {
        He === this
          ? (this.deferStop = !0)
          : this.active &&
            (Ze(this), this.onStop && this.onStop(), (this.active = !1));
      }
    }
    function Ze(e) {
      const { deps: t } = e;
      if (t.length) {
        for (let n = 0; n < t.length; n++) t[n].delete(e);
        t.length = 0;
      }
    }
    let Qe = !0;
    const Ke = [];
    function Ge() {
      Ke.push(Qe), (Qe = !1);
    }
    function Je() {
      const e = Ke.pop();
      Qe = void 0 === e || e;
    }
    function Xe(e, t, n) {
      if (Qe && He) {
        let t = Fe.get(e);
        t || Fe.set(e, (t = new Map()));
        let r = t.get(n);
        r || t.set(n, (r = Ue())), Ye(r);
      }
    }
    function Ye(e, t) {
      let n = !1;
      Ne <= De ? Me(e) || ((e.n |= Ve), (n = !Pe(e))) : (n = !e.has(He)),
        n && (e.add(He), He.deps.push(e));
    }
    function et(e, t, n, r, l, i) {
      const o = Fe.get(e);
      if (!o) return;
      let s = [];
      if ("clear" === t) s = [...o.values()];
      else if ("length" === n && ie(e)) {
        const e = Number(r);
        o.forEach((t, n) => {
          ("length" === n || n >= e) && s.push(t);
        });
      } else
        switch ((void 0 !== n && s.push(o.get(n)), t)) {
          case "add":
            ie(e)
              ? ye(n) && s.push(o.get("length"))
              : (s.push(o.get(Be)), oe(e) && s.push(o.get(We)));
            break;
          case "delete":
            ie(e) || (s.push(o.get(Be)), oe(e) && s.push(o.get(We)));
            break;
          case "set":
            oe(e) && s.push(o.get(Be));
        }
      if (1 === s.length) s[0] && tt(s[0]);
      else {
        const e = [];
        for (const t of s) t && e.push(...t);
        tt(Ue(e));
      }
    }
    function tt(e, t) {
      const n = ie(e) ? e : [...e];
      for (const e of n) e.computed && nt(e);
      for (const e of n) e.computed || nt(e);
    }
    function nt(e, t) {
      (e !== He || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
    }
    const rt = T("__proto__,__v_isRef,__isVue"),
      lt = new Set(
        Object.getOwnPropertyNames(Symbol)
          .filter((e) => "arguments" !== e && "caller" !== e)
          .map((e) => Symbol[e])
          .filter(pe)
      ),
      it = ut(),
      ot = ut(!1, !0),
      st = ut(!0),
      at = (function () {
        const e = {};
        return (
          ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
            e[t] = function () {
              const e = qt(this);
              for (let t = 0, n = this.length; t < n; t++) Xe(e, 0, t + "");
              for (
                var n = arguments.length, r = new Array(n), l = 0;
                l < n;
                l++
              )
                r[l] = arguments[l];
              const i = e[t](...r);
              return -1 === i || !1 === i ? e[t](...r.map(qt)) : i;
            };
          }),
          ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
            e[t] = function () {
              Ge();
              for (
                var e = arguments.length, n = new Array(e), r = 0;
                r < e;
                r++
              )
                n[r] = arguments[r];
              const l = qt(this)[t].apply(this, n);
              return Je(), l;
            };
          }),
          e
        );
      })();
    function ct(e) {
      const t = qt(this);
      return Xe(t, 0, e), t.hasOwnProperty(e);
    }
    function ut() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return function (n, r, l) {
        if ("__v_isReactive" === r) return !e;
        if ("__v_isReadonly" === r) return e;
        if ("__v_isShallow" === r) return t;
        if ("__v_raw" === r && l === (e ? (t ? Mt : Pt) : t ? Ut : Tt).get(n))
          return n;
        const i = ie(n);
        if (!e) {
          if (i && le(at, r)) return Reflect.get(at, r, l);
          if ("hasOwnProperty" === r) return ct;
        }
        const o = Reflect.get(n, r, l);
        return (pe(r) ? lt.has(r) : rt(r))
          ? o
          : (e || Xe(n, 0, r),
            t
              ? o
              : Xt(o)
              ? i && ye(r)
                ? o
                : o.value
              : de(o)
              ? e
                ? Nt(o)
                : Ft(o)
              : o);
      };
    }
    function pt() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return function (t, n, r, l) {
        let i = t[n];
        if (Ht(i) && Xt(i) && !Xt(r)) return !1;
        if (
          !e &&
          (Bt(r) || Ht(r) || ((i = qt(i)), (r = qt(r))),
          !ie(t) && Xt(i) && !Xt(r))
        )
          return (i.value = r), !0;
        const o = ie(t) && ye(n) ? Number(n) < t.length : le(t, n),
          s = Reflect.set(t, n, r, l);
        return (
          t === qt(l) &&
            (o ? Ae(r, i) && et(t, "set", n, r) : et(t, "add", n, r)),
          s
        );
      };
    }
    const dt = {
        get: it,
        set: pt(),
        deleteProperty: function (e, t) {
          const n = le(e, t),
            r = Reflect.deleteProperty(e, t);
          return r && n && et(e, "delete", t, void 0), r;
        },
        has: function (e, t) {
          const n = Reflect.has(e, t);
          return (pe(t) && lt.has(t)) || Xe(e, 0, t), n;
        },
        ownKeys: function (e) {
          return Xe(e, 0, ie(e) ? "length" : Be), Reflect.ownKeys(e);
        },
      },
      ht = { get: st, set: (e, t) => !0, deleteProperty: (e, t) => !0 },
      ft = te({}, dt, { get: ot, set: pt(!0) }),
      gt = (e) => e,
      mt = (e) => Reflect.getPrototypeOf(e);
    function vt(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const l = qt((e = e.__v_raw)),
        i = qt(t);
      n || (t !== i && Xe(l, 0, t), Xe(l, 0, i));
      const { has: o } = mt(l),
        s = r ? gt : n ? Kt : Qt;
      return o.call(l, t)
        ? s(e.get(t))
        : o.call(l, i)
        ? s(e.get(i))
        : void (e !== l && e.get(t));
    }
    function yt(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const n = this.__v_raw,
        r = qt(n),
        l = qt(e);
      return (
        t || (e !== l && Xe(r, 0, e), Xe(r, 0, l)),
        e === l ? n.has(e) : n.has(e) || n.has(l)
      );
    }
    function wt(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return (e = e.__v_raw), !t && Xe(qt(e), 0, Be), Reflect.get(e, "size", e);
    }
    function bt(e) {
      e = qt(e);
      const t = qt(this);
      return mt(t).has.call(t, e) || (t.add(e), et(t, "add", e, e)), this;
    }
    function kt(e, t) {
      t = qt(t);
      const n = qt(this),
        { has: r, get: l } = mt(n);
      let i = r.call(n, e);
      i || ((e = qt(e)), (i = r.call(n, e)));
      const o = l.call(n, e);
      return (
        n.set(e, t),
        i ? Ae(t, o) && et(n, "set", e, t) : et(n, "add", e, t),
        this
      );
    }
    function xt(e) {
      const t = qt(this),
        { has: n, get: r } = mt(t);
      let l = n.call(t, e);
      l || ((e = qt(e)), (l = n.call(t, e))), r && r.call(t, e);
      const i = t.delete(e);
      return l && et(t, "delete", e, void 0), i;
    }
    function _t() {
      const e = qt(this),
        t = 0 !== e.size,
        n = e.clear();
      return t && et(e, "clear", void 0, void 0), n;
    }
    function $t(e, t) {
      return function (n, r) {
        const l = this,
          i = l.__v_raw,
          o = qt(i),
          s = t ? gt : e ? Kt : Qt;
        return (
          !e && Xe(o, 0, Be), i.forEach((e, t) => n.call(r, s(e), s(t), l))
        );
      };
    }
    function Ct(e, t, n) {
      return function () {
        const r = this.__v_raw,
          l = qt(r),
          i = oe(l),
          o = "entries" === e || (e === Symbol.iterator && i),
          s = "keys" === e && i,
          a = r[e](...arguments),
          c = n ? gt : t ? Kt : Qt;
        return (
          !t && Xe(l, 0, s ? We : Be),
          {
            next() {
              const { value: e, done: t } = a.next();
              return t
                ? { value: e, done: t }
                : { value: o ? [c(e[0]), c(e[1])] : c(e), done: t };
            },
            [Symbol.iterator]() {
              return this;
            },
          }
        );
      };
    }
    function St(e) {
      return function () {
        return "delete" !== e && this;
      };
    }
    const [At, Rt, Et, It] = (function () {
      const e = {
          get(e) {
            return vt(this, e);
          },
          get size() {
            return wt(this);
          },
          has: yt,
          add: bt,
          set: kt,
          delete: xt,
          clear: _t,
          forEach: $t(!1, !1),
        },
        t = {
          get(e) {
            return vt(this, e, !1, !0);
          },
          get size() {
            return wt(this);
          },
          has: yt,
          add: bt,
          set: kt,
          delete: xt,
          clear: _t,
          forEach: $t(!1, !0),
        },
        n = {
          get(e) {
            return vt(this, e, !0);
          },
          get size() {
            return wt(this, !0);
          },
          has(e) {
            return yt.call(this, e, !0);
          },
          add: St("add"),
          set: St("set"),
          delete: St("delete"),
          clear: St("clear"),
          forEach: $t(!0, !1),
        },
        r = {
          get(e) {
            return vt(this, e, !0, !0);
          },
          get size() {
            return wt(this, !0);
          },
          has(e) {
            return yt.call(this, e, !0);
          },
          add: St("add"),
          set: St("set"),
          delete: St("delete"),
          clear: St("clear"),
          forEach: $t(!0, !0),
        };
      return (
        ["keys", "values", "entries", Symbol.iterator].forEach((l) => {
          (e[l] = Ct(l, !1, !1)),
            (n[l] = Ct(l, !0, !1)),
            (t[l] = Ct(l, !1, !0)),
            (r[l] = Ct(l, !0, !0));
        }),
        [e, n, t, r]
      );
    })();
    function Lt(e, t) {
      const n = t ? (e ? It : Et) : e ? Rt : At;
      return (t, r, l) =>
        "__v_isReactive" === r
          ? !e
          : "__v_isReadonly" === r
          ? e
          : "__v_raw" === r
          ? t
          : Reflect.get(le(n, r) && r in t ? n : t, r, l);
    }
    const zt = { get: Lt(!1, !1) },
      Ot = { get: Lt(!1, !0) },
      jt = { get: Lt(!0, !1) },
      Tt = new WeakMap(),
      Ut = new WeakMap(),
      Pt = new WeakMap(),
      Mt = new WeakMap();
    function Ft(e) {
      return Ht(e) ? e : Vt(e, !1, dt, zt, Tt);
    }
    function Nt(e) {
      return Vt(e, !0, ht, jt, Pt);
    }
    function Vt(e, t, n, r, l) {
      if (!de(e)) return e;
      if (e.__v_raw && (!t || !e.__v_isReactive)) return e;
      const i = l.get(e);
      if (i) return i;
      const o =
        (s = e).__v_skip || !Object.isExtensible(s)
          ? 0
          : (function (e) {
              switch (e) {
                case "Object":
                case "Array":
                  return 1;
                case "Map":
                case "Set":
                case "WeakMap":
                case "WeakSet":
                  return 2;
                default:
                  return 0;
              }
            })(me(s));
      var s;
      if (0 === o) return e;
      const a = new Proxy(e, 2 === o ? r : n);
      return l.set(e, a), a;
    }
    function Dt(e) {
      return Ht(e) ? Dt(e.__v_raw) : !(!e || !e.__v_isReactive);
    }
    function Ht(e) {
      return !(!e || !e.__v_isReadonly);
    }
    function Bt(e) {
      return !(!e || !e.__v_isShallow);
    }
    function Wt(e) {
      return Dt(e) || Ht(e);
    }
    function qt(e) {
      const t = e && e.__v_raw;
      return t ? qt(t) : e;
    }
    function Zt(e) {
      return Ee(e, "__v_skip", !0), e;
    }
    const Qt = (e) => (de(e) ? Ft(e) : e),
      Kt = (e) => (de(e) ? Nt(e) : e);
    function Gt(e) {
      Qe && He && Ye((e = qt(e)).dep || (e.dep = Ue()));
    }
    function Jt(e, t) {
      const n = (e = qt(e)).dep;
      n && tt(n);
    }
    function Xt(e) {
      return !(!e || !0 !== e.__v_isRef);
    }
    function Yt(e) {
      return tn(e, !1);
    }
    function en(e) {
      return tn(e, !0);
    }
    function tn(e, t) {
      return Xt(e) ? e : new nn(e, t);
    }
    class nn {
      constructor(e, t) {
        (this.__v_isShallow = t),
          (this.dep = void 0),
          (this.__v_isRef = !0),
          (this._rawValue = t ? e : qt(e)),
          (this._value = t ? e : Qt(e));
      }
      get value() {
        return Gt(this), this._value;
      }
      set value(e) {
        const t = this.__v_isShallow || Bt(e) || Ht(e);
        (e = t ? e : qt(e)),
          Ae(e, this._rawValue) &&
            ((this._rawValue = e), (this._value = t ? e : Qt(e)), Jt(this));
      }
    }
    function rn(e) {
      return Xt(e) ? e.value : e;
    }
    const ln = {
      get: (e, t, n) => rn(Reflect.get(e, t, n)),
      set: (e, t, n, r) => {
        const l = e[t];
        return Xt(l) && !Xt(n) ? ((l.value = n), !0) : Reflect.set(e, t, n, r);
      },
    };
    function on(e) {
      return Dt(e) ? e : new Proxy(e, ln);
    }
    var sn;
    class an {
      constructor(e, t, n, r) {
        (this._setter = t),
          (this.dep = void 0),
          (this.__v_isRef = !0),
          (this[sn] = !1),
          (this._dirty = !0),
          (this.effect = new qe(e, () => {
            this._dirty || ((this._dirty = !0), Jt(this));
          })),
          (this.effect.computed = this),
          (this.effect.active = this._cacheable = !r),
          (this.__v_isReadonly = n);
      }
      get value() {
        const e = qt(this);
        return (
          Gt(e),
          (!e._dirty && e._cacheable) ||
            ((e._dirty = !1), (e._value = e.effect.run())),
          e._value
        );
      }
      set value(e) {
        this._setter(e);
      }
    }
    function cn(e, t, n, r) {
      let l;
      try {
        l = r ? e(...r) : e();
      } catch (e) {
        pn(e, t, n);
      }
      return l;
    }
    function un(e, t, n, r) {
      if (ce(e)) {
        const l = cn(e, t, n, r);
        return (
          l &&
            he(l) &&
            l.catch((e) => {
              pn(e, t, n);
            }),
          l
        );
      }
      const l = [];
      for (let i = 0; i < e.length; i++) l.push(un(e[i], t, n, r));
      return l;
    }
    function pn(e, t, n) {
      let r =
        !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if ((t && t.vnode, t)) {
        let r = t.parent;
        const l = t.proxy,
          i = n;
        for (; r; ) {
          const t = r.ec;
          if (t)
            for (let n = 0; n < t.length; n++) if (!1 === t[n](e, l, i)) return;
          r = r.parent;
        }
        const o = t.appContext.config.errorHandler;
        if (o) return void cn(o, null, 10, [e, l, i]);
      }
      !(function (e, t, n) {
        console.error(e);
      })(e, 0, 0, r);
    }
    sn = "__v_isReadonly";
    let dn = !1,
      hn = !1;
    const fn = [];
    let gn = 0;
    const mn = [];
    let vn = null,
      yn = 0;
    const wn = Promise.resolve();
    let bn = null;
    function kn(e) {
      const t = bn || wn;
      return e ? t.then(this ? e.bind(this) : e) : t;
    }
    function xn(e) {
      (fn.length && fn.includes(e, dn && e.allowRecurse ? gn + 1 : gn)) ||
        (null == e.id
          ? fn.push(e)
          : fn.splice(
              (function (e) {
                let t = gn + 1,
                  n = fn.length;
                for (; t < n; ) {
                  const r = (t + n) >>> 1;
                  Sn(fn[r]) < e ? (t = r + 1) : (n = r);
                }
                return t;
              })(e.id),
              0,
              e
            ),
        _n());
    }
    function _n() {
      dn || hn || ((hn = !0), (bn = wn.then(Rn)));
    }
    function $n(e) {
      let t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : dn
          ? gn + 1
          : 0;
      for (; t < fn.length; t++) {
        const e = fn[t];
        e && e.pre && (fn.splice(t, 1), t--, e());
      }
    }
    function Cn(e) {
      if (mn.length) {
        const e = [...new Set(mn)];
        if (((mn.length = 0), vn)) return void vn.push(...e);
        for (
          vn = e, vn.sort((e, t) => Sn(e) - Sn(t)), yn = 0;
          yn < vn.length;
          yn++
        )
          vn[yn]();
        (vn = null), (yn = 0);
      }
    }
    const Sn = (e) => (null == e.id ? 1 / 0 : e.id),
      An = (e, t) => {
        const n = Sn(e) - Sn(t);
        if (0 === n) {
          if (e.pre && !t.pre) return -1;
          if (t.pre && !e.pre) return 1;
        }
        return n;
      };
    function Rn(e) {
      (hn = !1), (dn = !0), fn.sort(An);
      try {
        for (gn = 0; gn < fn.length; gn++) {
          const e = fn[gn];
          e && !1 !== e.active && cn(e, null, 14);
        }
      } finally {
        (gn = 0),
          (fn.length = 0),
          Cn(),
          (dn = !1),
          (bn = null),
          (fn.length || mn.length) && Rn();
      }
    }
    function En(e, t) {
      if (e.isUnmounted) return;
      const n = e.vnode.props || Q;
      for (
        var r = arguments.length, l = new Array(r > 2 ? r - 2 : 0), i = 2;
        i < r;
        i++
      )
        l[i - 2] = arguments[i];
      let o = l;
      const s = t.startsWith("update:"),
        a = s && t.slice(7);
      if (a && a in n) {
        const e = `${"modelValue" === a ? "model" : a}Modifiers`,
          { number: t, trim: r } = n[e] || Q;
        r && (o = l.map((e) => (ue(e) ? e.trim() : e))), t && (o = l.map(Ie));
      }
      let c,
        u = n[(c = Se(t))] || n[(c = Se(xe(t)))];
      !u && s && (u = n[(c = Se($e(t)))]), u && un(u, e, 6, o);
      const p = n[c + "Once"];
      if (p) {
        if (e.emitted) {
          if (e.emitted[c]) return;
        } else e.emitted = {};
        (e.emitted[c] = !0), un(p, e, 6, o);
      }
    }
    function In(e, t) {
      const n = t.emitsCache,
        r = n.get(e);
      if (void 0 !== r) return r;
      const l = e.emits;
      let i = {};
      return l
        ? (ie(l) ? l.forEach((e) => (i[e] = null)) : te(i, l),
          de(e) && n.set(e, i),
          i)
        : (de(e) && n.set(e, null), null);
    }
    function Ln(e, t) {
      return (
        !(!e || !Y(t)) &&
        ((t = t.slice(2).replace(/Once$/, "")),
        le(e, t[0].toLowerCase() + t.slice(1)) || le(e, $e(t)) || le(e, t))
      );
    }
    let zn = null,
      On = null;
    function jn(e) {
      const t = zn;
      return (zn = e), (On = (e && e.type.__scopeId) || null), t;
    }
    function Tn(e) {
      const {
        type: t,
        vnode: n,
        proxy: r,
        withProxy: l,
        props: i,
        propsOptions: [o],
        slots: s,
        attrs: a,
        emit: c,
        render: u,
        renderCache: p,
        data: d,
        setupState: h,
        ctx: f,
        inheritAttrs: g,
      } = e;
      let m, v;
      const y = jn(e);
      try {
        if (4 & n.shapeFlag) {
          const e = l || r;
          (m = Xr(u.call(e, e, p, i, h, d, f))), (v = a);
        } else {
          const e = t;
          (m = Xr(
            e.length > 1 ? e(i, { attrs: a, slots: s, emit: c }) : e(i, null)
          )),
            (v = t.props ? a : Un(a));
        }
      } catch (t) {
        (jr.length = 0), pn(t, e, 1), (m = Qr(zr));
      }
      let w = m;
      if (v && !1 !== g) {
        const e = Object.keys(v),
          { shapeFlag: t } = w;
        e.length &&
          7 & t &&
          (o && e.some(ee) && (v = Pn(v, o)), (w = Kr(w, v)));
      }
      return (
        n.dirs &&
          ((w = Kr(w)), (w.dirs = w.dirs ? w.dirs.concat(n.dirs) : n.dirs)),
        n.transition && (w.transition = n.transition),
        (m = w),
        jn(y),
        m
      );
    }
    const Un = (e) => {
        let t;
        for (const n in e)
          ("class" === n || "style" === n || Y(n)) &&
            ((t || (t = {}))[n] = e[n]);
        return t;
      },
      Pn = (e, t) => {
        const n = {};
        for (const r in e) (ee(r) && r.slice(9) in t) || (n[r] = e[r]);
        return n;
      };
    function Mn(e, t, n) {
      const r = Object.keys(t);
      if (r.length !== Object.keys(e).length) return !0;
      for (let l = 0; l < r.length; l++) {
        const i = r[l];
        if (t[i] !== e[i] && !Ln(n, i)) return !0;
      }
      return !1;
    }
    function Fn(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const r = ll || zn;
      if (r) {
        const l =
          null == r.parent
            ? r.vnode.appContext && r.vnode.appContext.provides
            : r.parent.provides;
        if (l && e in l) return l[e];
        if (arguments.length > 1) return n && ce(t) ? t.call(r.proxy) : t;
      }
    }
    function Nn(e, t) {
      return Hn(e, null, t);
    }
    const Vn = {};
    function Dn(e, t, n) {
      return Hn(e, t, n);
    }
    function Hn(e, t) {
      let {
        immediate: n,
        deep: r,
        flush: l,
        onTrack: i,
        onTrigger: o,
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Q;
      const s = Te() === (null == ll ? void 0 : ll.scope) ? ll : null;
      let a,
        c,
        u = !1,
        p = !1;
      if (
        (Xt(e)
          ? ((a = () => e.value), (u = Bt(e)))
          : Dt(e)
          ? ((a = () => e), (r = !0))
          : ie(e)
          ? ((p = !0),
            (u = e.some((e) => Dt(e) || Bt(e))),
            (a = () =>
              e.map((e) =>
                Xt(e) ? e.value : Dt(e) ? Bn(e) : ce(e) ? cn(e, s, 2) : void 0
              )))
          : (a = ce(e)
              ? t
                ? () => cn(e, s, 2)
                : () => {
                    if (!s || !s.isUnmounted) return c && c(), un(e, s, 3, [h]);
                  }
              : G),
        t && r)
      ) {
        const e = a;
        a = () => Bn(e());
      }
      let d,
        h = (e) => {
          c = v.onStop = () => {
            cn(e, s, 4);
          };
        };
      if (cl) {
        if (
          ((h = G),
          t ? n && un(t, s, 3, [a(), p ? [] : void 0, h]) : a(),
          "sync" !== l)
        )
          return G;
        {
          const e = ml();
          d = e.__watcherHandles || (e.__watcherHandles = []);
        }
      }
      let f = p ? new Array(e.length).fill(Vn) : Vn;
      const g = () => {
        if (v.active)
          if (t) {
            const e = v.run();
            (r || u || (p ? e.some((e, t) => Ae(e, f[t])) : Ae(e, f))) &&
              (c && c(),
              un(t, s, 3, [
                e,
                f === Vn ? void 0 : p && f[0] === Vn ? [] : f,
                h,
              ]),
              (f = e));
          } else v.run();
      };
      let m;
      (g.allowRecurse = !!t),
        "sync" === l
          ? (m = g)
          : "post" === l
          ? (m = () => Sr(g, s && s.suspense))
          : ((g.pre = !0), s && (g.id = s.uid), (m = () => xn(g)));
      const v = new qe(a, m);
      t
        ? n
          ? g()
          : (f = v.run())
        : "post" === l
        ? Sr(v.run.bind(v), s && s.suspense)
        : v.run();
      const y = () => {
        v.stop(), s && s.scope && ne(s.scope.effects, v);
      };
      return d && d.push(y), y;
    }
    function Bn(e, t) {
      if (!de(e) || e.__v_skip) return e;
      if ((t = t || new Set()).has(e)) return e;
      if ((t.add(e), Xt(e))) Bn(e.value, t);
      else if (ie(e)) for (let n = 0; n < e.length; n++) Bn(e[n], t);
      else if (se(e) || oe(e))
        e.forEach((e) => {
          Bn(e, t);
        });
      else if (ve(e)) for (const n in e) Bn(e[n], t);
      return e;
    }
    function Wn(e) {
      return ce(e) ? { setup: e, name: e.name } : e;
    }
    const qn = (e) => !!e.type.__asyncLoader,
      Zn = (e) => e.type.__isKeepAlive,
      Qn = (e) =>
        function (t) {
          return (
            (!cl || "sp" === e) &&
            (function (e, t) {
              let n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : ll,
                r =
                  arguments.length > 3 &&
                  void 0 !== arguments[3] &&
                  arguments[3];
              if (n) {
                const l = n[e] || (n[e] = []),
                  i =
                    t.__weh ||
                    (t.__weh = function () {
                      if (n.isUnmounted) return;
                      Ge(), ol(n);
                      for (
                        var r = arguments.length, l = new Array(r), i = 0;
                        i < r;
                        i++
                      )
                        l[i] = arguments[i];
                      const o = un(t, n, e, l);
                      return sl(), Je(), o;
                    });
                return r ? l.unshift(i) : l.push(i), i;
              }
            })(
              e,
              function () {
                return t(...arguments);
              },
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : ll
            )
          );
        },
      Kn = Qn("m"),
      Gn = Qn("bum"),
      Jn = Qn("um");
    function Xn(e, t) {
      const n = zn;
      if (null === n) return e;
      const r = dl(n) || n.proxy,
        l = e.dirs || (e.dirs = []);
      for (let e = 0; e < t.length; e++) {
        let [n, i, o, s = Q] = t[e];
        n &&
          (ce(n) && (n = { mounted: n, updated: n }),
          n.deep && Bn(i),
          l.push({
            dir: n,
            instance: r,
            value: i,
            oldValue: void 0,
            arg: o,
            modifiers: s,
          }));
      }
      return e;
    }
    function Yn(e, t, n, r) {
      const l = e.dirs,
        i = t && t.dirs;
      for (let o = 0; o < l.length; o++) {
        const s = l[o];
        i && (s.oldValue = i[o].value);
        let a = s.dir[r];
        a && (Ge(), un(a, n, 8, [e.el, s, e, t]), Je());
      }
    }
    const er = "components";
    const tr = Symbol();
    function nr(e, t) {
      return e && (e[t] || e[xe(t)] || e[Ce(xe(t))]);
    }
    function rr(e, t, n, r) {
      let l;
      const i = n && n[r];
      if (ie(e) || ue(e)) {
        l = new Array(e.length);
        for (let n = 0, r = e.length; n < r; n++)
          l[n] = t(e[n], n, void 0, i && i[n]);
      } else if ("number" == typeof e) {
        l = new Array(e);
        for (let n = 0; n < e; n++) l[n] = t(n + 1, n, void 0, i && i[n]);
      } else if (de(e))
        if (e[Symbol.iterator])
          l = Array.from(e, (e, n) => t(e, n, void 0, i && i[n]));
        else {
          const n = Object.keys(e);
          l = new Array(n.length);
          for (let r = 0, o = n.length; r < o; r++) {
            const o = n[r];
            l[r] = t(e[o], o, r, i && i[r]);
          }
        }
      else l = [];
      return n && (n[r] = l), l;
    }
    const lr = (e) => (e ? (al(e) ? dl(e) || e.proxy : lr(e.parent)) : null),
      ir = te(Object.create(null), {
        $: (e) => e,
        $el: (e) => e.vnode.el,
        $data: (e) => e.data,
        $props: (e) => e.props,
        $attrs: (e) => e.attrs,
        $slots: (e) => e.slots,
        $refs: (e) => e.refs,
        $parent: (e) => lr(e.parent),
        $root: (e) => lr(e.root),
        $emit: (e) => e.emit,
        $options: (e) => e.type,
        $forceUpdate: (e) => e.f || (e.f = () => xn(e.update)),
        $nextTick: (e) => e.n || (e.n = kn.bind(e.proxy)),
        $watch: (e) => G,
      }),
      or = (e, t) => e !== Q && !e.__isScriptSetup && le(e, t),
      sr = {
        get(e, t) {
          let { _: n } = e;
          const {
            ctx: r,
            setupState: l,
            data: i,
            props: o,
            accessCache: s,
            type: a,
            appContext: c,
          } = n;
          let u;
          if ("$" !== t[0]) {
            const e = s[t];
            if (void 0 !== e)
              switch (e) {
                case 1:
                  return l[t];
                case 2:
                  return i[t];
                case 4:
                  return r[t];
                case 3:
                  return o[t];
              }
            else {
              if (or(l, t)) return (s[t] = 1), l[t];
              if (i !== Q && le(i, t)) return (s[t] = 2), i[t];
              if ((u = n.propsOptions[0]) && le(u, t)) return (s[t] = 3), o[t];
              if (r !== Q && le(r, t)) return (s[t] = 4), r[t];
              s[t] = 0;
            }
          }
          const p = ir[t];
          let d, h;
          return p
            ? ("$attrs" === t && Xe(n, 0, t), p(n))
            : (d = a.__cssModules) && (d = d[t])
            ? d
            : r !== Q && le(r, t)
            ? ((s[t] = 4), r[t])
            : ((h = c.config.globalProperties), le(h, t) ? h[t] : void 0);
        },
        set(e, t, n) {
          let { _: r } = e;
          const { data: l, setupState: i, ctx: o } = r;
          return or(i, t)
            ? ((i[t] = n), !0)
            : l !== Q && le(l, t)
            ? ((l[t] = n), !0)
            : !(
                le(r.props, t) ||
                ("$" === t[0] && t.slice(1) in r) ||
                ((o[t] = n), 0)
              );
        },
        has(e, t) {
          let n,
            {
              _: {
                data: r,
                setupState: l,
                accessCache: i,
                ctx: o,
                appContext: s,
                propsOptions: a,
              },
            } = e;
          return (
            !!i[t] ||
            (r !== Q && le(r, t)) ||
            or(l, t) ||
            ((n = a[0]) && le(n, t)) ||
            le(o, t) ||
            le(ir, t) ||
            le(s.config.globalProperties, t)
          );
        },
        defineProperty(e, t, n) {
          return (
            null != n.get
              ? (e._.accessCache[t] = 0)
              : le(n, "value") && this.set(e, t, n.value, null),
            Reflect.defineProperty(e, t, n)
          );
        },
      };
    function ar(e, t, n, r) {
      const [l, i] = e.propsOptions;
      let o,
        s = !1;
      if (t)
        for (let a in t) {
          if (we(a)) continue;
          const c = t[a];
          let u;
          l && le(l, (u = xe(a)))
            ? i && i.includes(u)
              ? ((o || (o = {}))[u] = c)
              : (n[u] = c)
            : Ln(e.emitsOptions, a) ||
              (a in r && c === r[a]) ||
              ((r[a] = c), (s = !0));
        }
      if (i) {
        const t = qt(n),
          r = o || Q;
        for (let o = 0; o < i.length; o++) {
          const s = i[o];
          n[s] = cr(l, t, s, r[s], e, !le(r, s));
        }
      }
      return s;
    }
    function cr(e, t, n, r, l, i) {
      const o = e[n];
      if (null != o) {
        const e = le(o, "default");
        if (e && void 0 === r) {
          const e = o.default;
          if (o.type !== Function && ce(e)) {
            const { propsDefaults: i } = l;
            n in i ? (r = i[n]) : (ol(l), (r = i[n] = e.call(null, t)), sl());
          } else r = e;
        }
        o[0] &&
          (i && !e ? (r = !1) : !o[1] || ("" !== r && r !== $e(n)) || (r = !0));
      }
      return r;
    }
    function ur(e, t) {
      const n = t.propsCache,
        r = n.get(e);
      if (r) return r;
      const l = e.props,
        i = {},
        o = [];
      if (!l) return de(e) && n.set(e, K), K;
      if (ie(l))
        for (let e = 0; e < l.length; e++) {
          const t = xe(l[e]);
          pr(t) && (i[t] = Q);
        }
      else if (l)
        for (const e in l) {
          const t = xe(e);
          if (pr(t)) {
            const n = l[e],
              r = (i[t] = ie(n) || ce(n) ? { type: n } : Object.assign({}, n));
            if (r) {
              const e = fr(Boolean, r.type),
                n = fr(String, r.type);
              (r[0] = e > -1),
                (r[1] = n < 0 || e < n),
                (e > -1 || le(r, "default")) && o.push(t);
            }
          }
        }
      const s = [i, o];
      return de(e) && n.set(e, s), s;
    }
    function pr(e) {
      return "$" !== e[0];
    }
    function dr(e) {
      const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
      return t ? t[2] : null === e ? "null" : "";
    }
    function hr(e, t) {
      return dr(e) === dr(t);
    }
    function fr(e, t) {
      return ie(t) ? t.findIndex((t) => hr(t, e)) : ce(t) && hr(t, e) ? 0 : -1;
    }
    const gr = (e) => "_" === e[0] || "$stable" === e,
      mr = (e) => (ie(e) ? e.map(Xr) : [Xr(e)]),
      vr = (e, t, n) => {
        if (t._n) return t;
        const r = (function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zn;
          if (!t) return e;
          if (e._n) return e;
          const n = function () {
            n._d && Mr(-1);
            const r = jn(t);
            let l;
            try {
              l = e(...arguments);
            } finally {
              jn(r), n._d && Mr(1);
            }
            return l;
          };
          return (n._n = !0), (n._c = !0), (n._d = !0), n;
        })(function () {
          return mr(t(...arguments));
        }, n);
        return (r._c = !1), r;
      },
      yr = (e, t, n) => {
        const r = e._ctx;
        for (const n in e) {
          if (gr(n)) continue;
          const l = e[n];
          if (ce(l)) t[n] = vr(0, l, r);
          else if (null != l) {
            const e = mr(l);
            t[n] = () => e;
          }
        }
      },
      wr = (e, t) => {
        const n = mr(t);
        e.slots.default = () => n;
      },
      br = (e, t) => {
        if (32 & e.vnode.shapeFlag) {
          const n = t._;
          n ? ((e.slots = qt(t)), Ee(t, "_", n)) : yr(t, (e.slots = {}));
        } else (e.slots = {}), t && wr(e, t);
        Ee(e.slots, Br, 1);
      },
      kr = (e, t, n) => {
        const { vnode: r, slots: l } = e;
        let i = !0,
          o = Q;
        if (32 & r.shapeFlag) {
          const e = t._;
          e
            ? n && 1 === e
              ? (i = !1)
              : (te(l, t), n || 1 !== e || delete l._)
            : ((i = !t.$stable), yr(t, l)),
            (o = t);
        } else t && (wr(e, t), (o = { default: 1 }));
        if (i) for (const e in l) gr(e) || e in o || delete l[e];
      };
    function xr() {
      return {
        app: null,
        config: {
          isNativeTag: J,
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
      };
    }
    let _r = 0;
    function $r(e, t) {
      return function (n) {
        let r =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        ce(n) || (n = Object.assign({}, n)), null == r || de(r) || (r = null);
        const l = xr(),
          i = new Set();
        let o = !1;
        const s = (l.app = {
          _uid: _r++,
          _component: n,
          _props: r,
          _container: null,
          _context: l,
          _instance: null,
          version: vl,
          get config() {
            return l.config;
          },
          set config(e) {},
          use: function (e) {
            for (
              var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
              r < t;
              r++
            )
              n[r - 1] = arguments[r];
            return (
              i.has(e) ||
                (e && ce(e.install)
                  ? (i.add(e), e.install(s, ...n))
                  : ce(e) && (i.add(e), e(s, ...n))),
              s
            );
          },
          mixin: (e) => s,
          component: (e, t) =>
            t ? ((l.components[e] = t), s) : l.components[e],
          directive: (e, t) =>
            t ? ((l.directives[e] = t), s) : l.directives[e],
          mount(i, a, c) {
            if (!o) {
              const u = Qr(n, r);
              return (
                (u.appContext = l),
                a && t ? t(u, i) : e(u, i, c),
                (o = !0),
                (s._container = i),
                (i.__vue_app__ = s),
                dl(u.component) || u.component.proxy
              );
            }
          },
          unmount() {
            o && (e(null, s._container), delete s._container.__vue_app__);
          },
          provide: (e, t) => ((l.provides[e] = t), s),
        });
        return s;
      };
    }
    function Cr(e, t, n, r) {
      let l = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (ie(e))
        return void e.forEach((e, i) =>
          Cr(e, t && (ie(t) ? t[i] : t), n, r, l)
        );
      if (qn(r) && !l) return;
      const i = 4 & r.shapeFlag ? dl(r.component) || r.component.proxy : r.el,
        o = l ? null : i,
        { i: s, r: a } = e,
        c = t && t.r,
        u = s.refs === Q ? (s.refs = {}) : s.refs,
        p = s.setupState;
      if (
        (null != c &&
          c !== a &&
          (ue(c)
            ? ((u[c] = null), le(p, c) && (p[c] = null))
            : Xt(c) && (c.value = null)),
        ce(a))
      )
        cn(a, s, 12, [o, u]);
      else {
        const t = ue(a),
          r = Xt(a);
        if (t || r) {
          const s = () => {
            if (e.f) {
              const n = t ? (le(p, a) ? p[a] : u[a]) : a.value;
              l
                ? ie(n) && ne(n, i)
                : ie(n)
                ? n.includes(i) || n.push(i)
                : t
                ? ((u[a] = [i]), le(p, a) && (p[a] = u[a]))
                : ((a.value = [i]), e.k && (u[e.k] = a.value));
            } else
              t
                ? ((u[a] = o), le(p, a) && (p[a] = o))
                : r && ((a.value = o), e.k && (u[e.k] = o));
          };
          o ? ((s.id = -1), Sr(s, n)) : s();
        }
      }
    }
    const Sr = function (e, t) {
      var n;
      t && t.pendingBranch
        ? ie(e)
          ? t.effects.push(...e)
          : t.effects.push(e)
        : (ie((n = e))
            ? mn.push(...n)
            : (vn && vn.includes(n, n.allowRecurse ? yn + 1 : yn)) ||
              mn.push(n),
          _n());
    };
    function Ar(e) {
      return (function (e, t) {
        ze().__VUE__ = !0;
        const {
            insert: n,
            remove: r,
            patchProp: l,
            createElement: i,
            createText: o,
            createComment: s,
            setText: a,
            setElementText: c,
            parentNode: u,
            nextSibling: p,
            setScopeId: d = G,
            insertStaticContent: h,
          } = e,
          f = function (e, t, n) {
            let r =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : null,
              l =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : null,
              i =
                arguments.length > 5 && void 0 !== arguments[5]
                  ? arguments[5]
                  : null,
              o =
                arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              s =
                arguments.length > 7 && void 0 !== arguments[7]
                  ? arguments[7]
                  : null,
              a =
                arguments.length > 8 && void 0 !== arguments[8]
                  ? arguments[8]
                  : !!t.dynamicChildren;
            if (e === t) return;
            e && !Hr(e, t) && ((r = N(e)), T(e, l, i, !0), (e = null)),
              -2 === t.patchFlag && ((a = !1), (t.dynamicChildren = null));
            const { type: c, ref: u, shapeFlag: p } = t;
            switch (c) {
              case Lr:
                g(e, t, n, r);
                break;
              case zr:
                m(e, t, n, r);
                break;
              case Or:
                null == e && v(t, n, r, o);
                break;
              case Ir:
                C(e, t, n, r, l, i, o, s, a);
                break;
              default:
                1 & p
                  ? y(e, t, n, r, l, i, o, s, a)
                  : 6 & p
                  ? S(e, t, n, r, l, i, o, s, a)
                  : (64 & p || 128 & p) &&
                    c.process(e, t, n, r, l, i, o, s, a, D);
            }
            null != u && l && Cr(u, e && e.ref, i, t || e, !t);
          },
          g = (e, t, r, l) => {
            if (null == e) n((t.el = o(t.children)), r, l);
            else {
              const n = (t.el = e.el);
              t.children !== e.children && a(n, t.children);
            }
          },
          m = (e, t, r, l) => {
            null == e ? n((t.el = s(t.children || "")), r, l) : (t.el = e.el);
          },
          v = (e, t, n, r) => {
            [e.el, e.anchor] = h(e.children, t, n, r, e.el, e.anchor);
          },
          y = (e, t, n, r, l, i, o, s, a) => {
            (o = o || "svg" === t.type),
              null == e ? w(t, n, r, l, i, o, s, a) : x(e, t, l, i, o, s, a);
          },
          w = (e, t, r, o, s, a, u, p) => {
            let d, h;
            const {
              type: f,
              props: g,
              shapeFlag: m,
              transition: v,
              dirs: y,
            } = e;
            if (
              ((d = e.el = i(e.type, a, g && g.is, g)),
              8 & m
                ? c(d, e.children)
                : 16 & m &&
                  k(
                    e.children,
                    d,
                    null,
                    o,
                    s,
                    a && "foreignObject" !== f,
                    u,
                    p
                  ),
              y && Yn(e, null, o, "created"),
              b(d, e, e.scopeId, u, o),
              g)
            ) {
              for (const t in g)
                "value" === t ||
                  we(t) ||
                  l(d, t, null, g[t], a, e.children, o, s, F);
              "value" in g && l(d, "value", null, g.value),
                (h = g.onVnodeBeforeMount) && tl(h, o, e);
            }
            y && Yn(e, null, o, "beforeMount");
            const w = (!s || (s && !s.pendingBranch)) && v && !v.persisted;
            w && v.beforeEnter(d),
              n(d, t, r),
              ((h = g && g.onVnodeMounted) || w || y) &&
                Sr(() => {
                  h && tl(h, o, e),
                    w && v.enter(d),
                    y && Yn(e, null, o, "mounted");
                }, s);
          },
          b = (e, t, n, r, l) => {
            if ((n && d(e, n), r))
              for (let t = 0; t < r.length; t++) d(e, r[t]);
            if (l && t === l.subTree) {
              const t = l.vnode;
              b(e, t, t.scopeId, t.slotScopeIds, l.parent);
            }
          },
          k = function (e, t, n, r, l, i, o, s) {
            for (
              let a =
                arguments.length > 8 && void 0 !== arguments[8]
                  ? arguments[8]
                  : 0;
              a < e.length;
              a++
            ) {
              const c = (e[a] = s ? Yr(e[a]) : Xr(e[a]));
              f(null, c, t, n, r, l, i, o, s);
            }
          },
          x = (e, t, n, r, i, o, s) => {
            const a = (t.el = e.el);
            let { patchFlag: u, dynamicChildren: p, dirs: d } = t;
            u |= 16 & e.patchFlag;
            const h = e.props || Q,
              f = t.props || Q;
            let g;
            n && Rr(n, !1),
              (g = f.onVnodeBeforeUpdate) && tl(g, n, t, e),
              d && Yn(t, e, n, "beforeUpdate"),
              n && Rr(n, !0);
            const m = i && "foreignObject" !== t.type;
            if (
              (p
                ? _(e.dynamicChildren, p, a, n, r, m, o)
                : s || L(e, t, a, null, n, r, m, o, !1),
              u > 0)
            ) {
              if (16 & u) $(a, t, h, f, n, r, i);
              else if (
                (2 & u &&
                  h.class !== f.class &&
                  l(a, "class", null, f.class, i),
                4 & u && l(a, "style", h.style, f.style, i),
                8 & u)
              ) {
                const o = t.dynamicProps;
                for (let t = 0; t < o.length; t++) {
                  const s = o[t],
                    c = h[s],
                    u = f[s];
                  (u === c && "value" !== s) ||
                    l(a, s, c, u, i, e.children, n, r, F);
                }
              }
              1 & u && e.children !== t.children && c(a, t.children);
            } else s || null != p || $(a, t, h, f, n, r, i);
            ((g = f.onVnodeUpdated) || d) &&
              Sr(() => {
                g && tl(g, n, t, e), d && Yn(t, e, n, "updated");
              }, r);
          },
          _ = (e, t, n, r, l, i, o) => {
            for (let s = 0; s < t.length; s++) {
              const a = e[s],
                c = t[s],
                p =
                  a.el && (a.type === Ir || !Hr(a, c) || 70 & a.shapeFlag)
                    ? u(a.el)
                    : n;
              f(a, c, p, null, r, l, i, o, !0);
            }
          },
          $ = (e, t, n, r, i, o, s) => {
            if (n !== r) {
              if (n !== Q)
                for (const a in n)
                  we(a) ||
                    a in r ||
                    l(e, a, n[a], null, s, t.children, i, o, F);
              for (const a in r) {
                if (we(a)) continue;
                const c = r[a],
                  u = n[a];
                c !== u &&
                  "value" !== a &&
                  l(e, a, u, c, s, t.children, i, o, F);
              }
              "value" in r && l(e, "value", n.value, r.value);
            }
          },
          C = (e, t, r, l, i, s, a, c, u) => {
            const p = (t.el = e ? e.el : o("")),
              d = (t.anchor = e ? e.anchor : o(""));
            let { patchFlag: h, dynamicChildren: f, slotScopeIds: g } = t;
            g && (c = c ? c.concat(g) : g),
              null == e
                ? (n(p, r, l), n(d, r, l), k(t.children, r, d, i, s, a, c, u))
                : h > 0 && 64 & h && f && e.dynamicChildren
                ? (_(e.dynamicChildren, f, r, i, s, a, c),
                  (null != t.key || (i && t === i.subTree)) && Er(e, t, !0))
                : L(e, t, r, d, i, s, a, c, u);
          },
          S = (e, t, n, r, l, i, o, s, a) => {
            (t.slotScopeIds = s),
              null == e
                ? 512 & t.shapeFlag
                  ? l.ctx.activate(t, n, r, o, a)
                  : A(t, n, r, l, i, o, a)
                : R(e, t, a);
          },
          A = (e, t, n, r, l, i, o) => {
            const s = (e.component = (function (e, t, n) {
              const r = e.type,
                l = (t ? t.appContext : e.appContext) || nl,
                i = {
                  uid: rl++,
                  vnode: e,
                  type: r,
                  parent: t,
                  appContext: l,
                  root: null,
                  next: null,
                  subTree: null,
                  effect: null,
                  update: null,
                  scope: new je(!0),
                  render: null,
                  proxy: null,
                  exposed: null,
                  exposeProxy: null,
                  withProxy: null,
                  provides: t ? t.provides : Object.create(l.provides),
                  accessCache: null,
                  renderCache: [],
                  components: null,
                  directives: null,
                  propsOptions: ur(r, l),
                  emitsOptions: In(r, l),
                  emit: null,
                  emitted: null,
                  propsDefaults: Q,
                  inheritAttrs: r.inheritAttrs,
                  ctx: Q,
                  data: Q,
                  props: Q,
                  attrs: Q,
                  slots: Q,
                  refs: Q,
                  setupState: Q,
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
                };
              return (
                (i.ctx = { _: i }),
                (i.root = t ? t.root : i),
                (i.emit = En.bind(null, i)),
                e.ce && e.ce(i),
                i
              );
            })(e, r, l));
            if (
              (Zn(e) && (s.ctx.renderer = D),
              (function (e) {
                let t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                cl = t;
                const { props: n, children: r } = e.vnode,
                  l = al(e);
                (function (e, t, n) {
                  let r =
                    arguments.length > 3 &&
                    void 0 !== arguments[3] &&
                    arguments[3];
                  const l = {},
                    i = {};
                  Ee(i, Br, 1),
                    (e.propsDefaults = Object.create(null)),
                    ar(e, t, l, i);
                  for (const t in e.propsOptions[0]) t in l || (l[t] = void 0);
                  n
                    ? (e.props = r ? l : Vt(l, !1, ft, Ot, Ut))
                    : e.type.props
                    ? (e.props = l)
                    : (e.props = i),
                    (e.attrs = i);
                })(e, n, l, t),
                  br(e, r);
                l &&
                  (function (e, t) {
                    const n = e.type;
                    (e.accessCache = Object.create(null)),
                      (e.proxy = Zt(new Proxy(e.ctx, sr)));
                    const { setup: r } = n;
                    if (r) {
                      const n = (e.setupContext =
                        r.length > 1
                          ? (function (e) {
                              let t;
                              return {
                                get attrs() {
                                  return (
                                    t ||
                                    (t = (function (e) {
                                      return new Proxy(e.attrs, {
                                        get: (t, n) => (
                                          Xe(e, 0, "$attrs"), t[n]
                                        ),
                                      });
                                    })(e))
                                  );
                                },
                                slots: e.slots,
                                emit: e.emit,
                                expose: (t) => {
                                  e.exposed = t || {};
                                },
                              };
                            })(e)
                          : null);
                      ol(e), Ge();
                      const l = cn(r, e, 0, [e.props, n]);
                      if ((Je(), sl(), he(l))) {
                        if ((l.then(sl, sl), t))
                          return l
                            .then((n) => {
                              ul(e, n, t);
                            })
                            .catch((t) => {
                              pn(t, e, 0);
                            });
                        e.asyncDep = l;
                      } else ul(e, l, t);
                    } else pl(e, t);
                  })(e, t);
                cl = !1;
              })(s),
              s.asyncDep)
            ) {
              if ((l && l.registerDep(s, E), !e.el)) {
                const e = (s.subTree = Qr(zr));
                m(null, e, t, n);
              }
            } else E(s, e, t, n, l, i, o);
          },
          R = (e, t, n) => {
            const r = (t.component = e.component);
            if (
              (function (e, t, n) {
                const { props: r, children: l, component: i } = e,
                  { props: o, children: s, patchFlag: a } = t,
                  c = i.emitsOptions;
                if (t.dirs || t.transition) return !0;
                if (!(n && a >= 0))
                  return (
                    !((!l && !s) || (s && s.$stable)) ||
                    (r !== o && (r ? !o || Mn(r, o, c) : !!o))
                  );
                if (1024 & a) return !0;
                if (16 & a) return r ? Mn(r, o, c) : !!o;
                if (8 & a) {
                  const e = t.dynamicProps;
                  for (let t = 0; t < e.length; t++) {
                    const n = e[t];
                    if (o[n] !== r[n] && !Ln(c, n)) return !0;
                  }
                }
                return !1;
              })(e, t, n)
            ) {
              if (r.asyncDep && !r.asyncResolved) return void I(r, t, n);
              (r.next = t),
                (function (e) {
                  const t = fn.indexOf(e);
                  t > gn && fn.splice(t, 1);
                })(r.update),
                r.update();
            } else (t.el = e.el), (r.vnode = t);
          },
          E = (e, t, n, r, l, i, o) => {
            const s = (e.effect = new qe(
                () => {
                  if (e.isMounted) {
                    let t,
                      { next: n, bu: r, u: s, parent: a, vnode: c } = e,
                      p = n;
                    Rr(e, !1),
                      n ? ((n.el = c.el), I(e, n, o)) : (n = c),
                      r && Re(r),
                      (t = n.props && n.props.onVnodeBeforeUpdate) &&
                        tl(t, a, n, c),
                      Rr(e, !0);
                    const d = Tn(e),
                      h = e.subTree;
                    (e.subTree = d),
                      f(h, d, u(h.el), N(h), e, l, i),
                      (n.el = d.el),
                      null === p &&
                        (function (e, t) {
                          let { vnode: n, parent: r } = e;
                          for (; r && r.subTree === n; )
                            ((n = r.vnode).el = t), (r = r.parent);
                        })(e, d.el),
                      s && Sr(s, l),
                      (t = n.props && n.props.onVnodeUpdated) &&
                        Sr(() => tl(t, a, n, c), l);
                  } else {
                    let o;
                    const { el: s, props: a } = t,
                      { bm: c, m: u, parent: p } = e,
                      d = qn(t);
                    if (
                      (Rr(e, !1),
                      c && Re(c),
                      !d && (o = a && a.onVnodeBeforeMount) && tl(o, p, t),
                      Rr(e, !0),
                      s && B)
                    ) {
                      const n = () => {
                        (e.subTree = Tn(e)), B(s, e.subTree, e, l, null);
                      };
                      d
                        ? t.type
                            .__asyncLoader()
                            .then(() => !e.isUnmounted && n())
                        : n();
                    } else {
                      const o = (e.subTree = Tn(e));
                      f(null, o, n, r, e, l, i), (t.el = o.el);
                    }
                    if ((u && Sr(u, l), !d && (o = a && a.onVnodeMounted))) {
                      const e = t;
                      Sr(() => tl(o, p, e), l);
                    }
                    (256 & t.shapeFlag ||
                      (p && qn(p.vnode) && 256 & p.vnode.shapeFlag)) &&
                      e.a &&
                      Sr(e.a, l),
                      (e.isMounted = !0),
                      (t = n = r = null);
                  }
                },
                () => xn(a),
                e.scope
              )),
              a = (e.update = () => s.run());
            (a.id = e.uid), Rr(e, !0), a();
          },
          I = (e, t, n) => {
            t.component = e;
            const r = e.vnode.props;
            (e.vnode = t),
              (e.next = null),
              (function (e, t, n, r) {
                const {
                    props: l,
                    attrs: i,
                    vnode: { patchFlag: o },
                  } = e,
                  s = qt(l),
                  [a] = e.propsOptions;
                let c = !1;
                if (!(r || o > 0) || 16 & o) {
                  let r;
                  ar(e, t, l, i) && (c = !0);
                  for (const i in s)
                    (t && (le(t, i) || ((r = $e(i)) !== i && le(t, r)))) ||
                      (a
                        ? !n ||
                          (void 0 === n[i] && void 0 === n[r]) ||
                          (l[i] = cr(a, s, i, void 0, e, !0))
                        : delete l[i]);
                  if (i !== s)
                    for (const e in i)
                      (t && le(t, e)) || (delete i[e], (c = !0));
                } else if (8 & o) {
                  const n = e.vnode.dynamicProps;
                  for (let r = 0; r < n.length; r++) {
                    let o = n[r];
                    if (Ln(e.emitsOptions, o)) continue;
                    const u = t[o];
                    if (a)
                      if (le(i, o)) u !== i[o] && ((i[o] = u), (c = !0));
                      else {
                        const t = xe(o);
                        l[t] = cr(a, s, t, u, e, !1);
                      }
                    else u !== i[o] && ((i[o] = u), (c = !0));
                  }
                }
                c && et(e, "set", "$attrs");
              })(e, t.props, r, n),
              kr(e, t.children, n),
              Ge(),
              $n(),
              Je();
          },
          L = function (e, t, n, r, l, i, o, s) {
            let a =
              arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
            const u = e && e.children,
              p = e ? e.shapeFlag : 0,
              d = t.children,
              { patchFlag: h, shapeFlag: f } = t;
            if (h > 0) {
              if (128 & h) return void O(u, d, n, r, l, i, o, s, a);
              if (256 & h) return void z(u, d, n, r, l, i, o, s, a);
            }
            8 & f
              ? (16 & p && F(u, l, i), d !== u && c(n, d))
              : 16 & p
              ? 16 & f
                ? O(u, d, n, r, l, i, o, s, a)
                : F(u, l, i, !0)
              : (8 & p && c(n, ""), 16 & f && k(d, n, r, l, i, o, s, a));
          },
          z = (e, t, n, r, l, i, o, s, a) => {
            t = t || K;
            const c = (e = e || K).length,
              u = t.length,
              p = Math.min(c, u);
            let d;
            for (d = 0; d < p; d++) {
              const r = (t[d] = a ? Yr(t[d]) : Xr(t[d]));
              f(e[d], r, n, null, l, i, o, s, a);
            }
            c > u ? F(e, l, i, !0, !1, p) : k(t, n, r, l, i, o, s, a, p);
          },
          O = (e, t, n, r, l, i, o, s, a) => {
            let c = 0;
            const u = t.length;
            let p = e.length - 1,
              d = u - 1;
            for (; c <= p && c <= d; ) {
              const r = e[c],
                u = (t[c] = a ? Yr(t[c]) : Xr(t[c]));
              if (!Hr(r, u)) break;
              f(r, u, n, null, l, i, o, s, a), c++;
            }
            for (; c <= p && c <= d; ) {
              const r = e[p],
                c = (t[d] = a ? Yr(t[d]) : Xr(t[d]));
              if (!Hr(r, c)) break;
              f(r, c, n, null, l, i, o, s, a), p--, d--;
            }
            if (c > p) {
              if (c <= d) {
                const e = d + 1,
                  p = e < u ? t[e].el : r;
                for (; c <= d; )
                  f(
                    null,
                    (t[c] = a ? Yr(t[c]) : Xr(t[c])),
                    n,
                    p,
                    l,
                    i,
                    o,
                    s,
                    a
                  ),
                    c++;
              }
            } else if (c > d) for (; c <= p; ) T(e[c], l, i, !0), c++;
            else {
              const h = c,
                g = c,
                m = new Map();
              for (c = g; c <= d; c++) {
                const e = (t[c] = a ? Yr(t[c]) : Xr(t[c]));
                null != e.key && m.set(e.key, c);
              }
              let v,
                y = 0;
              const w = d - g + 1;
              let b = !1,
                k = 0;
              const x = new Array(w);
              for (c = 0; c < w; c++) x[c] = 0;
              for (c = h; c <= p; c++) {
                const r = e[c];
                if (y >= w) {
                  T(r, l, i, !0);
                  continue;
                }
                let u;
                if (null != r.key) u = m.get(r.key);
                else
                  for (v = g; v <= d; v++)
                    if (0 === x[v - g] && Hr(r, t[v])) {
                      u = v;
                      break;
                    }
                void 0 === u
                  ? T(r, l, i, !0)
                  : ((x[u - g] = c + 1),
                    u >= k ? (k = u) : (b = !0),
                    f(r, t[u], n, null, l, i, o, s, a),
                    y++);
              }
              const _ = b
                ? (function (e) {
                    const t = e.slice(),
                      n = [0];
                    let r, l, i, o, s;
                    const a = e.length;
                    for (r = 0; r < a; r++) {
                      const a = e[r];
                      if (0 !== a) {
                        if (((l = n[n.length - 1]), e[l] < a)) {
                          (t[r] = l), n.push(r);
                          continue;
                        }
                        for (i = 0, o = n.length - 1; i < o; )
                          (s = (i + o) >> 1),
                            e[n[s]] < a ? (i = s + 1) : (o = s);
                        a < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), (n[i] = r));
                      }
                    }
                    for (i = n.length, o = n[i - 1]; i-- > 0; )
                      (n[i] = o), (o = t[o]);
                    return n;
                  })(x)
                : K;
              for (v = _.length - 1, c = w - 1; c >= 0; c--) {
                const e = g + c,
                  p = t[e],
                  d = e + 1 < u ? t[e + 1].el : r;
                0 === x[c]
                  ? f(null, p, n, d, l, i, o, s, a)
                  : b && (v < 0 || c !== _[v] ? j(p, n, d, 2) : v--);
              }
            }
          },
          j = function (e, t, r, l) {
            let i =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : null;
            const {
              el: o,
              type: s,
              transition: a,
              children: c,
              shapeFlag: u,
            } = e;
            if (6 & u) j(e.component.subTree, t, r, l);
            else if (128 & u) e.suspense.move(t, r, l);
            else if (64 & u) s.move(e, t, r, D);
            else if (s !== Ir)
              if (s !== Or)
                if (2 !== l && 1 & u && a)
                  if (0 === l)
                    a.beforeEnter(o), n(o, t, r), Sr(() => a.enter(o), i);
                  else {
                    const { leave: e, delayLeave: l, afterLeave: i } = a,
                      s = () => n(o, t, r),
                      c = () => {
                        e(o, () => {
                          s(), i && i();
                        });
                      };
                    l ? l(o, s, c) : c();
                  }
                else n(o, t, r);
              else
                ((e, t, r) => {
                  let l,
                    { el: i, anchor: o } = e;
                  for (; i && i !== o; ) (l = p(i)), n(i, t, r), (i = l);
                  n(o, t, r);
                })(e, t, r);
            else {
              n(o, t, r);
              for (let e = 0; e < c.length; e++) j(c[e], t, r, l);
              n(e.anchor, t, r);
            }
          },
          T = function (e, t, n) {
            let r =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              l =
                arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            const {
              type: i,
              props: o,
              ref: s,
              children: a,
              dynamicChildren: c,
              shapeFlag: u,
              patchFlag: p,
              dirs: d,
            } = e;
            if ((null != s && Cr(s, null, n, e, !0), 256 & u))
              return void t.ctx.deactivate(e);
            const h = 1 & u && d,
              f = !qn(e);
            let g;
            if ((f && (g = o && o.onVnodeBeforeUnmount) && tl(g, t, e), 6 & u))
              M(e.component, n, r);
            else {
              if (128 & u) return void e.suspense.unmount(n, r);
              h && Yn(e, null, t, "beforeUnmount"),
                64 & u
                  ? e.type.remove(e, t, n, l, D, r)
                  : c && (i !== Ir || (p > 0 && 64 & p))
                  ? F(c, t, n, !1, !0)
                  : ((i === Ir && 384 & p) || (!l && 16 & u)) && F(a, t, n),
                r && U(e);
            }
            ((f && (g = o && o.onVnodeUnmounted)) || h) &&
              Sr(() => {
                g && tl(g, t, e), h && Yn(e, null, t, "unmounted");
              }, n);
          },
          U = (e) => {
            const { type: t, el: n, anchor: l, transition: i } = e;
            if (t === Ir) return void P(n, l);
            if (t === Or)
              return void ((e) => {
                let t,
                  { el: n, anchor: l } = e;
                for (; n && n !== l; ) (t = p(n)), r(n), (n = t);
                r(l);
              })(e);
            const o = () => {
              r(n), i && !i.persisted && i.afterLeave && i.afterLeave();
            };
            if (1 & e.shapeFlag && i && !i.persisted) {
              const { leave: t, delayLeave: r } = i,
                l = () => t(n, o);
              r ? r(e.el, o, l) : l();
            } else o();
          },
          P = (e, t) => {
            let n;
            for (; e !== t; ) (n = p(e)), r(e), (e = n);
            r(t);
          },
          M = (e, t, n) => {
            const { bum: r, scope: l, update: i, subTree: o, um: s } = e;
            r && Re(r),
              l.stop(),
              i && ((i.active = !1), T(o, e, t, n)),
              s && Sr(s, t),
              Sr(() => {
                e.isUnmounted = !0;
              }, t),
              t &&
                t.pendingBranch &&
                !t.isUnmounted &&
                e.asyncDep &&
                !e.asyncResolved &&
                e.suspenseId === t.pendingId &&
                (t.deps--, 0 === t.deps && t.resolve());
          },
          F = function (e, t, n) {
            let r =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              l =
                arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            for (
              let i =
                arguments.length > 5 && void 0 !== arguments[5]
                  ? arguments[5]
                  : 0;
              i < e.length;
              i++
            )
              T(e[i], t, n, r, l);
          },
          N = (e) =>
            6 & e.shapeFlag
              ? N(e.component.subTree)
              : 128 & e.shapeFlag
              ? e.suspense.next()
              : p(e.anchor || e.el),
          V = (e, t, n) => {
            null == e
              ? t._vnode && T(t._vnode, null, null, !0)
              : f(t._vnode || null, e, t, null, null, null, n),
              $n(),
              Cn(),
              (t._vnode = e);
          },
          D = {
            p: f,
            um: T,
            m: j,
            r: U,
            mt: A,
            mc: k,
            pc: L,
            pbc: _,
            n: N,
            o: e,
          };
        let H, B;
        return { render: V, hydrate: H, createApp: $r(V, H) };
      })(e);
    }
    function Rr(e, t) {
      let { effect: n, update: r } = e;
      n.allowRecurse = r.allowRecurse = t;
    }
    function Er(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const r = e.children,
        l = t.children;
      if (ie(r) && ie(l))
        for (let e = 0; e < r.length; e++) {
          const t = r[e];
          let i = l[e];
          1 & i.shapeFlag &&
            !i.dynamicChildren &&
            ((i.patchFlag <= 0 || 32 === i.patchFlag) &&
              ((i = l[e] = Yr(l[e])), (i.el = t.el)),
            n || Er(t, i)),
            i.type === Lr && (i.el = t.el);
        }
    }
    const Ir = Symbol(void 0),
      Lr = Symbol(void 0),
      zr = Symbol(void 0),
      Or = Symbol(void 0),
      jr = [];
    let Tr = null;
    function Ur() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      jr.push((Tr = e ? null : []));
    }
    let Pr = 1;
    function Mr(e) {
      Pr += e;
    }
    function Fr(e) {
      return (
        (e.dynamicChildren = Pr > 0 ? Tr || K : null),
        jr.pop(),
        (Tr = jr[jr.length - 1] || null),
        Pr > 0 && Tr && Tr.push(e),
        e
      );
    }
    function Nr(e, t, n, r, l, i) {
      return Fr(Zr(e, t, n, r, l, i, !0));
    }
    function Vr(e, t, n, r, l) {
      return Fr(Qr(e, t, n, r, l, !0));
    }
    function Dr(e) {
      return !!e && !0 === e.__v_isVNode;
    }
    function Hr(e, t) {
      return e.type === t.type && e.key === t.key;
    }
    const Br = "__vInternal",
      Wr = (e) => {
        let { key: t } = e;
        return null != t ? t : null;
      },
      qr = (e) => {
        let { ref: t, ref_key: n, ref_for: r } = e;
        return null != t
          ? ue(t) || Xt(t) || ce(t)
            ? { i: zn, r: t, k: n, f: !!r }
            : t
          : null;
      };
    function Zr(e) {
      let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        l =
          arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        i =
          arguments.length > 5 && void 0 !== arguments[5]
            ? arguments[5]
            : e === Ir
            ? 0
            : 1,
        o = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        s = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const a = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Wr(t),
        ref: t && qr(t),
        scopeId: On,
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
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: i,
        patchFlag: r,
        dynamicProps: l,
        dynamicChildren: null,
        appContext: null,
        ctx: zn,
      };
      return (
        s
          ? (el(a, n), 128 & i && e.normalize(a))
          : n && (a.shapeFlag |= ue(n) ? 8 : 16),
        Pr > 0 &&
          !o &&
          Tr &&
          (a.patchFlag > 0 || 6 & i) &&
          32 !== a.patchFlag &&
          Tr.push(a),
        a
      );
    }
    const Qr = function (e) {
      let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        l =
          arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        i = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (((e && e !== tr) || (e = zr), Dr(e))) {
        const r = Kr(e, t, !0);
        return (
          n && el(r, n),
          Pr > 0 &&
            !i &&
            Tr &&
            (6 & r.shapeFlag ? (Tr[Tr.indexOf(e)] = r) : Tr.push(r)),
          (r.patchFlag |= -2),
          r
        );
      }
      var o;
      if ((ce((o = e)) && "__vccOpts" in o && (e = e.__vccOpts), t)) {
        t = (function (e) {
          return e ? (Wt(e) || Br in e ? te({}, e) : e) : null;
        })(t);
        let { class: e, style: n } = t;
        e && !ue(e) && (t.class = V(e)),
          de(n) && (Wt(n) && !ie(n) && (n = te({}, n)), (t.style = U(n)));
      }
      return Zr(
        e,
        t,
        n,
        r,
        l,
        ue(e)
          ? 1
          : ((e) => e.__isSuspense)(e)
          ? 128
          : ((e) => e.__isTeleport)(e)
          ? 64
          : de(e)
          ? 4
          : ce(e)
          ? 2
          : 0,
        i,
        !0
      );
    };
    function Kr(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const { props: r, ref: l, patchFlag: i, children: o } = e,
        s = t
          ? (function () {
              const e = {};
              for (let t = 0; t < arguments.length; t++) {
                const n =
                  t < 0 || arguments.length <= t ? void 0 : arguments[t];
                for (const t in n)
                  if ("class" === t)
                    e.class !== n.class && (e.class = V([e.class, n.class]));
                  else if ("style" === t) e.style = U([e.style, n.style]);
                  else if (Y(t)) {
                    const r = e[t],
                      l = n[t];
                    !l ||
                      r === l ||
                      (ie(r) && r.includes(l)) ||
                      (e[t] = r ? [].concat(r, l) : l);
                  } else "" !== t && (e[t] = n[t]);
              }
              return e;
            })(r || {}, t)
          : r;
      return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: s,
        key: s && Wr(s),
        ref:
          t && t.ref
            ? n && l
              ? ie(l)
                ? l.concat(qr(t))
                : [l, qr(t)]
              : qr(t)
            : l,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: o,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== Ir ? (-1 === i ? 16 : 16 | i) : i,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: e.transition,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && Kr(e.ssContent),
        ssFallback: e.ssFallback && Kr(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce,
      };
    }
    function Gr() {
      return Qr(
        Lr,
        null,
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : " ",
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
      );
    }
    function Jr() {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
        ? (Ur(), Vr(zr, null, e))
        : Qr(zr, null, e);
    }
    function Xr(e) {
      return null == e || "boolean" == typeof e
        ? Qr(zr)
        : ie(e)
        ? Qr(Ir, null, e.slice())
        : "object" == typeof e
        ? Yr(e)
        : Qr(Lr, null, String(e));
    }
    function Yr(e) {
      return (null === e.el && -1 !== e.patchFlag) || e.memo ? e : Kr(e);
    }
    function el(e, t) {
      let n = 0;
      const { shapeFlag: r } = e;
      if (null == t) t = null;
      else if (ie(t)) n = 16;
      else if ("object" == typeof t) {
        if (65 & r) {
          const n = t.default;
          return void (
            n && (n._c && (n._d = !1), el(e, n()), n._c && (n._d = !0))
          );
        }
        {
          n = 32;
          const r = t._;
          r || Br in t
            ? 3 === r &&
              zn &&
              (1 === zn.slots._
                ? (t._ = 1)
                : ((t._ = 2), (e.patchFlag |= 1024)))
            : (t._ctx = zn);
        }
      } else
        ce(t)
          ? ((t = { default: t, _ctx: zn }), (n = 32))
          : ((t = String(t)), 64 & r ? ((n = 16), (t = [Gr(t)])) : (n = 8));
      (e.children = t), (e.shapeFlag |= n);
    }
    function tl(e, t, n) {
      un(e, t, 7, [
        n,
        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
      ]);
    }
    const nl = xr();
    let rl = 0,
      ll = null;
    const il = () => ll || zn,
      ol = (e) => {
        (ll = e), e.scope.on();
      },
      sl = () => {
        ll && ll.scope.off(), (ll = null);
      };
    function al(e) {
      return 4 & e.vnode.shapeFlag;
    }
    let cl = !1;
    function ul(e, t, n) {
      ce(t)
        ? e.type.__ssrInlineRender
          ? (e.ssrRender = t)
          : (e.render = t)
        : de(t) && (e.setupState = on(t)),
        pl(e, n);
    }
    function pl(e, t, n) {
      const r = e.type;
      e.render || (e.render = r.render || G);
    }
    function dl(e) {
      if (e.exposed)
        return (
          e.exposeProxy ||
          (e.exposeProxy = new Proxy(on(Zt(e.exposed)), {
            get: (t, n) => (n in t ? t[n] : n in ir ? ir[n](e) : void 0),
            has: (e, t) => t in e || t in ir,
          }))
        );
    }
    const hl = (e, t) =>
      (function (e, t) {
        let n,
          r,
          l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const i = ce(e);
        return (
          i ? ((n = e), (r = G)) : ((n = e.get), (r = e.set)),
          new an(n, r, i || !r, l)
        );
      })(e, 0, cl);
    function fl(e, t, n) {
      const r = arguments.length;
      return 2 === r
        ? de(t) && !ie(t)
          ? Dr(t)
            ? Qr(e, null, [t])
            : Qr(e, t)
          : Qr(e, null, t)
        : (r > 3
            ? (n = Array.prototype.slice.call(arguments, 2))
            : 3 === r && Dr(n) && (n = [n]),
          Qr(e, t, n));
    }
    const gl = Symbol(""),
      ml = () => Fn(gl),
      vl = "3.2.47",
      yl = "undefined" != typeof document ? document : null,
      wl = yl && yl.createElement("template"),
      bl = {
        insert: (e, t, n) => {
          t.insertBefore(e, n || null);
        },
        remove: (e) => {
          const t = e.parentNode;
          t && t.removeChild(e);
        },
        createElement: (e, t, n, r) => {
          const l = t
            ? yl.createElementNS("http://www.w3.org/2000/svg", e)
            : yl.createElement(e, n ? { is: n } : void 0);
          return (
            "select" === e &&
              r &&
              null != r.multiple &&
              l.setAttribute("multiple", r.multiple),
            l
          );
        },
        createText: (e) => yl.createTextNode(e),
        createComment: (e) => yl.createComment(e),
        setText: (e, t) => {
          e.nodeValue = t;
        },
        setElementText: (e, t) => {
          e.textContent = t;
        },
        parentNode: (e) => e.parentNode,
        nextSibling: (e) => e.nextSibling,
        querySelector: (e) => yl.querySelector(e),
        setScopeId(e, t) {
          e.setAttribute(t, "");
        },
        insertStaticContent(e, t, n, r, l, i) {
          const o = n ? n.previousSibling : t.lastChild;
          if (l && (l === i || l.nextSibling))
            for (
              ;
              t.insertBefore(l.cloneNode(!0), n),
                l !== i && (l = l.nextSibling);

            );
          else {
            wl.innerHTML = r ? `<svg>${e}</svg>` : e;
            const l = wl.content;
            if (r) {
              const e = l.firstChild;
              for (; e.firstChild; ) l.appendChild(e.firstChild);
              l.removeChild(e);
            }
            t.insertBefore(l, n);
          }
          return [
            o ? o.nextSibling : t.firstChild,
            n ? n.previousSibling : t.lastChild,
          ];
        },
      },
      kl = /\s*!important$/;
    function xl(e, t, n) {
      if (ie(n)) n.forEach((n) => xl(e, t, n));
      else if ((null == n && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
      else {
        const r = (function (e, t) {
          const n = $l[t];
          if (n) return n;
          let r = xe(t);
          if ("filter" !== r && r in e) return ($l[t] = r);
          r = Ce(r);
          for (let n = 0; n < _l.length; n++) {
            const l = _l[n] + r;
            if (l in e) return ($l[t] = l);
          }
          return t;
        })(e, t);
        kl.test(n)
          ? e.setProperty($e(r), n.replace(kl, ""), "important")
          : (e[r] = n);
      }
    }
    const _l = ["Webkit", "Moz", "ms"],
      $l = {},
      Cl = "http://www.w3.org/1999/xlink";
    function Sl(e, t, n, r) {
      e.addEventListener(t, n, r);
    }
    const Al = /(?:Once|Passive|Capture)$/;
    let Rl = 0;
    const El = Promise.resolve(),
      Il = () => Rl || (El.then(() => (Rl = 0)), (Rl = Date.now())),
      Ll = /^on[a-z]/,
      zl = (e) => {
        const t = e.props["onUpdate:modelValue"] || !1;
        return ie(t) ? (e) => Re(t, e) : t;
      };
    function Ol(e) {
      e.target.composing = !0;
    }
    function jl(e) {
      const t = e.target;
      t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
    }
    const Tl = {
        created(e, t, n) {
          let {
            modifiers: { lazy: r, trim: l, number: i },
          } = t;
          e._assign = zl(n);
          const o = i || (n.props && "number" === n.props.type);
          Sl(e, r ? "change" : "input", (t) => {
            if (t.target.composing) return;
            let n = e.value;
            l && (n = n.trim()), o && (n = Ie(n)), e._assign(n);
          }),
            l &&
              Sl(e, "change", () => {
                e.value = e.value.trim();
              }),
            r ||
              (Sl(e, "compositionstart", Ol),
              Sl(e, "compositionend", jl),
              Sl(e, "change", jl));
        },
        mounted(e, t) {
          let { value: n } = t;
          e.value = null == n ? "" : n;
        },
        beforeUpdate(e, t, n) {
          let {
            value: r,
            modifiers: { lazy: l, trim: i, number: o },
          } = t;
          if (((e._assign = zl(n)), e.composing)) return;
          if (document.activeElement === e && "range" !== e.type) {
            if (l) return;
            if (i && e.value.trim() === r) return;
            if ((o || "number" === e.type) && Ie(e.value) === r) return;
          }
          const s = null == r ? "" : r;
          e.value !== s && (e.value = s);
        },
      },
      Ul = {
        deep: !0,
        created(e, t, n) {
          (e._assign = zl(n)),
            Sl(e, "change", () => {
              const t = e._modelValue,
                n = Vl(e),
                r = e.checked,
                l = e._assign;
              if (ie(t)) {
                const e = W(t, n),
                  i = -1 !== e;
                if (r && !i) l(t.concat(n));
                else if (!r && i) {
                  const n = [...t];
                  n.splice(e, 1), l(n);
                }
              } else if (se(t)) {
                const e = new Set(t);
                r ? e.add(n) : e.delete(n), l(e);
              } else l(Dl(e, r));
            });
        },
        mounted: Pl,
        beforeUpdate(e, t, n) {
          (e._assign = zl(n)), Pl(e, t, n);
        },
      };
    function Pl(e, t, n) {
      let { value: r, oldValue: l } = t;
      (e._modelValue = r),
        ie(r)
          ? (e.checked = W(r, n.props.value) > -1)
          : se(r)
          ? (e.checked = r.has(n.props.value))
          : r !== l && (e.checked = B(r, Dl(e, !0)));
    }
    const Ml = {
        created(e, t, n) {
          let { value: r } = t;
          (e.checked = B(r, n.props.value)),
            (e._assign = zl(n)),
            Sl(e, "change", () => {
              e._assign(Vl(e));
            });
        },
        beforeUpdate(e, t, n) {
          let { value: r, oldValue: l } = t;
          (e._assign = zl(n)), r !== l && (e.checked = B(r, n.props.value));
        },
      },
      Fl = {
        deep: !0,
        created(e, t, n) {
          let {
            value: r,
            modifiers: { number: l },
          } = t;
          const i = se(r);
          Sl(e, "change", () => {
            const t = Array.prototype.filter
              .call(e.options, (e) => e.selected)
              .map((e) => (l ? Ie(Vl(e)) : Vl(e)));
            e._assign(e.multiple ? (i ? new Set(t) : t) : t[0]);
          }),
            (e._assign = zl(n));
        },
        mounted(e, t) {
          let { value: n } = t;
          Nl(e, n);
        },
        beforeUpdate(e, t, n) {
          e._assign = zl(n);
        },
        updated(e, t) {
          let { value: n } = t;
          Nl(e, n);
        },
      };
    function Nl(e, t) {
      const n = e.multiple;
      if (!n || ie(t) || se(t)) {
        for (let r = 0, l = e.options.length; r < l; r++) {
          const l = e.options[r],
            i = Vl(l);
          if (n) ie(t) ? (l.selected = W(t, i) > -1) : (l.selected = t.has(i));
          else if (B(Vl(l), t))
            return void (e.selectedIndex !== r && (e.selectedIndex = r));
        }
        n || -1 === e.selectedIndex || (e.selectedIndex = -1);
      }
    }
    function Vl(e) {
      return "_value" in e ? e._value : e.value;
    }
    function Dl(e, t) {
      const n = t ? "_trueValue" : "_falseValue";
      return n in e ? e[n] : t;
    }
    const Hl = {
      created(e, t, n) {
        Bl(e, t, n, null, "created");
      },
      mounted(e, t, n) {
        Bl(e, t, n, null, "mounted");
      },
      beforeUpdate(e, t, n, r) {
        Bl(e, t, n, r, "beforeUpdate");
      },
      updated(e, t, n, r) {
        Bl(e, t, n, r, "updated");
      },
    };
    function Bl(e, t, n, r, l) {
      const i = (function (e, t) {
        switch (e) {
          case "SELECT":
            return Fl;
          case "TEXTAREA":
            return Tl;
          default:
            switch (t) {
              case "checkbox":
                return Ul;
              case "radio":
                return Ml;
              default:
                return Tl;
            }
        }
      })(e.tagName, n.props && n.props.type)[l];
      i && i(e, t, n, r);
    }
    const Wl = {
      beforeMount(e, t, n) {
        let { value: r } = t,
          { transition: l } = n;
        (e._vod = "none" === e.style.display ? "" : e.style.display),
          l && r ? l.beforeEnter(e) : ql(e, r);
      },
      mounted(e, t, n) {
        let { value: r } = t,
          { transition: l } = n;
        l && r && l.enter(e);
      },
      updated(e, t, n) {
        let { value: r, oldValue: l } = t,
          { transition: i } = n;
        !r != !l &&
          (i
            ? r
              ? (i.beforeEnter(e), ql(e, !0), i.enter(e))
              : i.leave(e, () => {
                  ql(e, !1);
                })
            : ql(e, r));
      },
      beforeUnmount(e, t) {
        let { value: n } = t;
        ql(e, n);
      },
    };
    function ql(e, t) {
      e.style.display = t ? e._vod : "none";
    }
    const Zl = te(
      {
        patchProp: function (e, t, n, r) {
          let l =
              arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            i = arguments.length > 5 ? arguments[5] : void 0,
            o = arguments.length > 6 ? arguments[6] : void 0,
            s = arguments.length > 7 ? arguments[7] : void 0,
            a = arguments.length > 8 ? arguments[8] : void 0;
          "class" === t
            ? (function (e, t, n) {
                const r = e._vtc;
                r && (t = (t ? [t, ...r] : [...r]).join(" ")),
                  null == t
                    ? e.removeAttribute("class")
                    : n
                    ? e.setAttribute("class", t)
                    : (e.className = t);
              })(e, r, l)
            : "style" === t
            ? (function (e, t, n) {
                const r = e.style,
                  l = ue(n);
                if (n && !l) {
                  if (t && !ue(t))
                    for (const e in t) null == n[e] && xl(r, e, "");
                  for (const e in n) xl(r, e, n[e]);
                } else {
                  const i = r.display;
                  l
                    ? t !== n && (r.cssText = n)
                    : t && e.removeAttribute("style"),
                    "_vod" in e && (r.display = i);
                }
              })(e, n, r)
            : Y(t)
            ? ee(t) ||
              (function (e, t, n, r) {
                let l =
                  arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : null;
                const i = e._vei || (e._vei = {}),
                  o = i[t];
                if (r && o) o.value = r;
                else {
                  const [n, s] = (function (e) {
                    let t;
                    if (Al.test(e)) {
                      let n;
                      for (t = {}; (n = e.match(Al)); )
                        (e = e.slice(0, e.length - n[0].length)),
                          (t[n[0].toLowerCase()] = !0);
                    }
                    return [":" === e[2] ? e.slice(3) : $e(e.slice(2)), t];
                  })(t);
                  if (r) {
                    const o = (i[t] = (function (e, t) {
                      const n = (e) => {
                        if (e._vts) {
                          if (e._vts <= n.attached) return;
                        } else e._vts = Date.now();
                        un(
                          (function (e, t) {
                            if (ie(t)) {
                              const n = e.stopImmediatePropagation;
                              return (
                                (e.stopImmediatePropagation = () => {
                                  n.call(e), (e._stopped = !0);
                                }),
                                t.map((e) => (t) => !t._stopped && e && e(t))
                              );
                            }
                            return t;
                          })(e, n.value),
                          t,
                          5,
                          [e]
                        );
                      };
                      return (n.value = e), (n.attached = Il()), n;
                    })(r, l));
                    Sl(e, n, o, s);
                  } else
                    o &&
                      ((function (e, t, n, r) {
                        e.removeEventListener(t, n, r);
                      })(e, n, o, s),
                      (i[t] = void 0));
                }
              })(e, t, 0, r, o)
            : (
                "." === t[0]
                  ? ((t = t.slice(1)), 1)
                  : "^" === t[0]
                  ? ((t = t.slice(1)), 0)
                  : (function (e, t, n, r) {
                      return r
                        ? "innerHTML" === t ||
                            "textContent" === t ||
                            !!(t in e && Ll.test(t) && ce(n))
                        : "spellcheck" !== t &&
                            "draggable" !== t &&
                            "translate" !== t &&
                            "form" !== t &&
                            ("list" !== t || "INPUT" !== e.tagName) &&
                            ("type" !== t || "TEXTAREA" !== e.tagName) &&
                            (!Ll.test(t) || !ue(n)) &&
                            t in e;
                    })(e, t, r, l)
              )
            ? (function (e, t, n, r, l, i, o) {
                if ("innerHTML" === t || "textContent" === t)
                  return r && o(r, l, i), void (e[t] = null == n ? "" : n);
                if (
                  "value" === t &&
                  "PROGRESS" !== e.tagName &&
                  !e.tagName.includes("-")
                ) {
                  e._value = n;
                  const r = null == n ? "" : n;
                  return (
                    (e.value === r && "OPTION" !== e.tagName) || (e.value = r),
                    void (null == n && e.removeAttribute(t))
                  );
                }
                let s = !1;
                if ("" === n || null == n) {
                  const r = typeof e[t];
                  "boolean" === r
                    ? (n = H(n))
                    : null == n && "string" === r
                    ? ((n = ""), (s = !0))
                    : "number" === r && ((n = 0), (s = !0));
                }
                try {
                  e[t] = n;
                } catch (e) {}
                s && e.removeAttribute(t);
              })(e, t, r, i, o, s, a)
            : ("true-value" === t
                ? (e._trueValue = r)
                : "false-value" === t && (e._falseValue = r),
              (function (e, t, n, r, l) {
                if (r && t.startsWith("xlink:"))
                  null == n
                    ? e.removeAttributeNS(Cl, t.slice(6, t.length))
                    : e.setAttributeNS(Cl, t, n);
                else {
                  const r = D(t);
                  null == n || (r && !H(n))
                    ? e.removeAttribute(t)
                    : e.setAttribute(t, r ? "" : n);
                }
              })(e, t, r, l));
        },
      },
      bl
    );
    let Ql;
    const Kl = "undefined" != typeof window,
      Gl = (e) => "function" == typeof e,
      Jl = (e) => "string" == typeof e,
      Xl = () => {};
    function Yl(e) {
      return "function" == typeof e ? e() : rn(e);
    }
    function ei(e, t) {
      return function () {
        for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
          r[l] = arguments[l];
        return new Promise((n, l) => {
          Promise.resolve(
            e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })
          )
            .then(n)
            .catch(l);
        });
      };
    }
    const ti = (e) => e();
    function ni(e) {
      return (
        !!Te() &&
        ((function (e) {
          Oe && Oe.cleanups.push(e);
        })(e),
        !0)
      );
    }
    var ri = Object.getOwnPropertySymbols,
      li = Object.prototype.hasOwnProperty,
      ii = Object.prototype.propertyIsEnumerable,
      oi = (e, t) => {
        var n = {};
        for (var r in e) li.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && ri)
          for (var r of ri(e))
            t.indexOf(r) < 0 && ii.call(e, r) && (n[r] = e[r]);
        return n;
      },
      si = Object.defineProperty,
      ai = Object.defineProperties,
      ci = Object.getOwnPropertyDescriptors,
      ui = Object.getOwnPropertySymbols,
      pi = Object.prototype.hasOwnProperty,
      di = Object.prototype.propertyIsEnumerable,
      hi = (e, t, n) =>
        t in e
          ? si(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[t] = n),
      fi = (e, t) => {
        for (var n in t || (t = {})) pi.call(t, n) && hi(e, n, t[n]);
        if (ui) for (var n of ui(t)) di.call(t, n) && hi(e, n, t[n]);
        return e;
      },
      gi = (e, t) => ai(e, ci(t)),
      mi = (e, t) => {
        var n = {};
        for (var r in e) pi.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && ui)
          for (var r of ui(e))
            t.indexOf(r) < 0 && di.call(e, r) && (n[r] = e[r]);
        return n;
      };
    function vi(e) {
      var t;
      const n = Yl(e);
      return null != (t = null == n ? void 0 : n.$el) ? t : n;
    }
    const yi = Kl ? window : void 0,
      wi = Kl ? window.document : void 0;
    function bi() {
      let e, t, n, r;
      for (var l = arguments.length, i = new Array(l), o = 0; o < l; o++)
        i[o] = arguments[o];
      if (
        (Jl(i[0]) || Array.isArray(i[0])
          ? (([t, n, r] = i), (e = yi))
          : ([e, t, n, r] = i),
        !e)
      )
        return Xl;
      Array.isArray(t) || (t = [t]), Array.isArray(n) || (n = [n]);
      const s = [],
        a = () => {
          s.forEach((e) => e()), (s.length = 0);
        },
        c = Dn(
          () => [vi(e), Yl(r)],
          (e) => {
            let [r, l] = e;
            a(),
              r &&
                s.push(
                  ...t.flatMap((e) =>
                    n.map((t) =>
                      ((e, t, n, r) => (
                        e.addEventListener(t, n, r),
                        () => e.removeEventListener(t, n, r)
                      ))(r, e, t, l)
                    )
                  )
                );
          },
          { immediate: !0, flush: "post" }
        ),
        u = () => {
          c(), a();
        };
      return ni(u), u;
    }
    const ki =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : {},
      xi = "__vueuse_ssr_handlers__";
    ki[xi] = ki[xi] || {};
    const _i = ki[xi];
    var $i = Object.defineProperty,
      Ci = Object.getOwnPropertySymbols,
      Si = Object.prototype.hasOwnProperty,
      Ai = Object.prototype.propertyIsEnumerable,
      Ri = (e, t, n) =>
        t in e
          ? $i(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[t] = n),
      Ei = (e, t) => {
        for (var n in t || (t = {})) Si.call(t, n) && Ri(e, n, t[n]);
        if (Ci) for (var n of Ci(t)) Ai.call(t, n) && Ri(e, n, t[n]);
        return e;
      };
    const Ii = {
        boolean: { read: (e) => "true" === e, write: (e) => String(e) },
        object: { read: (e) => JSON.parse(e), write: (e) => JSON.stringify(e) },
        number: { read: (e) => Number.parseFloat(e), write: (e) => String(e) },
        any: { read: (e) => e, write: (e) => String(e) },
        string: { read: (e) => e, write: (e) => String(e) },
        map: {
          read: (e) => new Map(JSON.parse(e)),
          write: (e) => JSON.stringify(Array.from(e.entries())),
        },
        set: {
          read: (e) => new Set(JSON.parse(e)),
          write: (e) => JSON.stringify(Array.from(e)),
        },
        date: { read: (e) => new Date(e), write: (e) => e.toISOString() },
      },
      Li = "vueuse-storage";
    function zi(e, t, n) {
      let r =
        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      var l;
      const {
          flush: i = "pre",
          deep: o = !0,
          listenToStorageChanges: s = !0,
          writeDefaults: a = !0,
          mergeDefaults: c = !1,
          shallow: u,
          window: p = yi,
          eventFilter: d,
          onError: h = (e) => {
            console.error(e);
          },
        } = r,
        f = (u ? en : Yt)(t);
      if (!n)
        try {
          n = (
            _i.getDefaultStorage ||
            (() => {
              var e;
              return null == (e = yi) ? void 0 : e.localStorage;
            })
          )();
        } catch (e) {
          h(e);
        }
      if (!n) return f;
      const g = Yl(t),
        m = (function (e) {
          return null == e
            ? "any"
            : e instanceof Set
            ? "set"
            : e instanceof Map
            ? "map"
            : e instanceof Date
            ? "date"
            : "boolean" == typeof e
            ? "boolean"
            : "string" == typeof e
            ? "string"
            : "object" == typeof e
            ? "object"
            : Number.isNaN(e)
            ? "any"
            : "number";
        })(g),
        v = null != (l = r.serializer) ? l : Ii[m],
        { pause: y, resume: w } = (function (e, t) {
          const n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            { eventFilter: r } = n,
            l = mi(n, ["eventFilter"]),
            {
              eventFilter: i,
              pause: o,
              resume: s,
              isActive: a,
            } = (function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : ti;
              const t = Yt(!0);
              return {
                isActive: Nt(t),
                pause: function () {
                  t.value = !1;
                },
                resume: function () {
                  t.value = !0;
                },
                eventFilter: function () {
                  t.value && e(...arguments);
                },
              };
            })(r),
            c = (function (e, t) {
              const n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                { eventFilter: r = ti } = n,
                l = oi(n, ["eventFilter"]);
              return Dn(e, ei(r, t), l);
            })(e, t, gi(fi({}, l), { eventFilter: i }));
          return { stop: c, pause: o, resume: s, isActive: a };
        })(
          f,
          () =>
            (function (t) {
              try {
                if (null == t) n.removeItem(e);
                else {
                  const r = v.write(t),
                    l = n.getItem(e);
                  l !== r &&
                    (n.setItem(e, r),
                    p &&
                      p.dispatchEvent(
                        new CustomEvent(Li, {
                          detail: {
                            key: e,
                            oldValue: l,
                            newValue: r,
                            storageArea: n,
                          },
                        })
                      ));
                }
              } catch (e) {
                h(e);
              }
            })(f.value),
          { flush: i, deep: o, eventFilter: d }
        );
      return (
        p &&
          s &&
          (bi(p, "storage", b),
          bi(p, Li, function (e) {
            b(e.detail);
          })),
        b(),
        f
      );
      function b(t) {
        if (!t || t.storageArea === n)
          if (t && null == t.key) f.value = g;
          else if (!t || t.key === e) {
            y();
            try {
              f.value = (function (t) {
                const r = t ? t.newValue : n.getItem(e);
                if (null == r)
                  return a && null !== g && n.setItem(e, v.write(g)), g;
                if (!t && c) {
                  const e = v.read(r);
                  return Gl(c)
                    ? c(e, g)
                    : "object" !== m || Array.isArray(e)
                    ? e
                    : Ei(Ei({}, g), e);
                }
                return "string" != typeof r ? r : v.read(r);
              })(t);
            } catch (e) {
              h(e);
            } finally {
              t ? kn(w) : w();
            }
          }
      }
    }
    var Oi,
      ji,
      Ti = Object.defineProperty,
      Ui = Object.getOwnPropertySymbols,
      Pi = Object.prototype.hasOwnProperty,
      Mi = Object.prototype.propertyIsEnumerable,
      Fi = (e, t, n) =>
        t in e
          ? Ti(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[t] = n),
      Ni = (e, t) => {
        for (var n in t || (t = {})) Pi.call(t, n) && Fi(e, n, t[n]);
        if (Ui) for (var n of Ui(t)) Mi.call(t, n) && Fi(e, n, t[n]);
        return e;
      };
    ((ji = Oi || (Oi = {})).UP = "UP"),
      (ji.RIGHT = "RIGHT"),
      (ji.DOWN = "DOWN"),
      (ji.LEFT = "LEFT"),
      (ji.NONE = "NONE");
    let Vi = 0;
    var Di = Object.defineProperty,
      Hi = Object.getOwnPropertySymbols,
      Bi = Object.prototype.hasOwnProperty,
      Wi = Object.prototype.propertyIsEnumerable,
      qi = (e, t, n) =>
        t in e
          ? Di(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[t] = n);
    ((e, t) => {
      for (var n in t || (t = {})) Bi.call(t, n) && qi(e, n, t[n]);
      if (Hi) for (var n of Hi(t)) Wi.call(t, n) && qi(e, n, t[n]);
    })(
      {
        linear: function (e) {
          return e;
        },
      },
      {
        easeInSine: [0.12, 0, 0.39, 0],
        easeOutSine: [0.61, 1, 0.88, 1],
        easeInOutSine: [0.37, 0, 0.63, 1],
        easeInQuad: [0.11, 0, 0.5, 0],
        easeOutQuad: [0.5, 1, 0.89, 1],
        easeInOutQuad: [0.45, 0, 0.55, 1],
        easeInCubic: [0.32, 0, 0.67, 0],
        easeOutCubic: [0.33, 1, 0.68, 1],
        easeInOutCubic: [0.65, 0, 0.35, 1],
        easeInQuart: [0.5, 0, 0.75, 0],
        easeOutQuart: [0.25, 1, 0.5, 1],
        easeInOutQuart: [0.76, 0, 0.24, 1],
        easeInQuint: [0.64, 0, 0.78, 0],
        easeOutQuint: [0.22, 1, 0.36, 1],
        easeInOutQuint: [0.83, 0, 0.17, 1],
        easeInExpo: [0.7, 0, 0.84, 0],
        easeOutExpo: [0.16, 1, 0.3, 1],
        easeInOutExpo: [0.87, 0, 0.13, 1],
        easeInCirc: [0.55, 0, 1, 0.45],
        easeOutCirc: [0, 0.55, 0.45, 1],
        easeInOutCirc: [0.85, 0, 0.15, 1],
        easeInBack: [0.36, 0, 0.66, -0.56],
        easeOutBack: [0.34, 1.56, 0.64, 1],
        easeInOutBack: [0.68, -0.6, 0.32, 1.6],
      }
    );
    const Zi = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        return `${t ? `${t}/` : ""}${
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ""
        }${e}${n ? `.${n}` : ""}`;
      },
      Qi = (e) => {
        "AbortError" !== e.name && console.error(e.message);
      },
      Ki = (e) =>
        e instanceof HTMLElement
          ? e
          : "string" == typeof e
          ? document.querySelector(e)
          : null,
      Gi = (e) => e.type.includes("image"),
      Ji = (e) => {
        const t = Array.from(e).find(Gi);
        return t ? t.getAsFile() : null;
      };
    let Xi = {
      async: !1,
      baseUrl: null,
      breaks: !1,
      extensions: null,
      gfm: !0,
      headerIds: !0,
      headerPrefix: "",
      highlight: null,
      langPrefix: "language-",
      mangle: !0,
      pedantic: !1,
      renderer: null,
      sanitize: !1,
      sanitizer: null,
      silent: !1,
      smartypants: !1,
      tokenizer: null,
      walkTokens: null,
      xhtml: !1,
    };
    const Yi = /[&<>"']/,
      eo = new RegExp(Yi.source, "g"),
      to = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
      no = new RegExp(to.source, "g"),
      ro = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      },
      lo = (e) => ro[e];
    function io(e, t) {
      if (t) {
        if (Yi.test(e)) return e.replace(eo, lo);
      } else if (to.test(e)) return e.replace(no, lo);
      return e;
    }
    const oo = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
    function so(e) {
      return e.replace(oo, (e, t) =>
        "colon" === (t = t.toLowerCase())
          ? ":"
          : "#" === t.charAt(0)
          ? "x" === t.charAt(1)
            ? String.fromCharCode(parseInt(t.substring(2), 16))
            : String.fromCharCode(+t.substring(1))
          : ""
      );
    }
    const ao = /(^|[^\[])\^/g;
    function co(e, t) {
      (e = "string" == typeof e ? e : e.source), (t = t || "");
      const n = {
        replace: (t, r) => (
          (r = (r = r.source || r).replace(ao, "$1")), (e = e.replace(t, r)), n
        ),
        getRegex: () => new RegExp(e, t),
      };
      return n;
    }
    const uo = /[^\w:]/g,
      po = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
    function ho(e, t, n) {
      if (e) {
        let t;
        try {
          t = decodeURIComponent(so(n)).replace(uo, "").toLowerCase();
        } catch (e) {
          return null;
        }
        if (
          0 === t.indexOf("javascript:") ||
          0 === t.indexOf("vbscript:") ||
          0 === t.indexOf("data:")
        )
          return null;
      }
      t &&
        !po.test(n) &&
        (n = (function (e, t) {
          fo[" " + e] ||
            (go.test(e)
              ? (fo[" " + e] = e + "/")
              : (fo[" " + e] = ko(e, "/", !0)));
          const n = -1 === (e = fo[" " + e]).indexOf(":");
          return "//" === t.substring(0, 2)
            ? n
              ? t
              : e.replace(mo, "$1") + t
            : "/" === t.charAt(0)
            ? n
              ? t
              : e.replace(vo, "$1") + t
            : e + t;
        })(t, n));
      try {
        n = encodeURI(n).replace(/%25/g, "%");
      } catch (e) {
        return null;
      }
      return n;
    }
    const fo = {},
      go = /^[^:]+:\/*[^/]*$/,
      mo = /^([^:]+:)[\s\S]*$/,
      vo = /^([^:]+:\/*[^/]*)[\s\S]*$/,
      yo = { exec: function () {} };
    function wo(e) {
      let t,
        n,
        r = 1;
      for (; r < arguments.length; r++)
        for (n in ((t = arguments[r]), t))
          Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      return e;
    }
    function bo(e, t) {
      const n = e
        .replace(/\|/g, (e, t, n) => {
          let r = !1,
            l = t;
          for (; --l >= 0 && "\\" === n[l]; ) r = !r;
          return r ? "|" : " |";
        })
        .split(/ \|/);
      let r = 0;
      if (
        (n[0].trim() || n.shift(),
        n.length > 0 && !n[n.length - 1].trim() && n.pop(),
        n.length > t)
      )
        n.splice(t);
      else for (; n.length < t; ) n.push("");
      for (; r < n.length; r++) n[r] = n[r].trim().replace(/\\\|/g, "|");
      return n;
    }
    function ko(e, t, n) {
      const r = e.length;
      if (0 === r) return "";
      let l = 0;
      for (; l < r; ) {
        const i = e.charAt(r - l - 1);
        if (i !== t || n) {
          if (i === t || !n) break;
          l++;
        } else l++;
      }
      return e.slice(0, r - l);
    }
    function xo(e) {
      e &&
        e.sanitize &&
        !e.silent &&
        console.warn(
          "marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"
        );
    }
    function _o(e, t) {
      if (t < 1) return "";
      let n = "";
      for (; t > 1; ) 1 & t && (n += e), (t >>= 1), (e += e);
      return n + e;
    }
    function $o(e, t, n, r) {
      const l = t.href,
        i = t.title ? io(t.title) : null,
        o = e[1].replace(/\\([\[\]])/g, "$1");
      if ("!" !== e[0].charAt(0)) {
        r.state.inLink = !0;
        const e = {
          type: "link",
          raw: n,
          href: l,
          title: i,
          text: o,
          tokens: r.inlineTokens(o),
        };
        return (r.state.inLink = !1), e;
      }
      return { type: "image", raw: n, href: l, title: i, text: io(o) };
    }
    class Co {
      constructor(e) {
        this.options = e || Xi;
      }
      space(e) {
        const t = this.rules.block.newline.exec(e);
        if (t && t[0].length > 0) return { type: "space", raw: t[0] };
      }
      code(e) {
        const t = this.rules.block.code.exec(e);
        if (t) {
          const e = t[0].replace(/^ {1,4}/gm, "");
          return {
            type: "code",
            raw: t[0],
            codeBlockStyle: "indented",
            text: this.options.pedantic ? e : ko(e, "\n"),
          };
        }
      }
      fences(e) {
        const t = this.rules.block.fences.exec(e);
        if (t) {
          const e = t[0],
            n = (function (e, t) {
              const n = e.match(/^(\s+)(?:```)/);
              if (null === n) return t;
              const r = n[1];
              return t
                .split("\n")
                .map((e) => {
                  const t = e.match(/^\s+/);
                  if (null === t) return e;
                  const [n] = t;
                  return n.length >= r.length ? e.slice(r.length) : e;
                })
                .join("\n");
            })(e, t[3] || "");
          return {
            type: "code",
            raw: e,
            lang: t[2]
              ? t[2].trim().replace(this.rules.inline._escapes, "$1")
              : t[2],
            text: n,
          };
        }
      }
      heading(e) {
        const t = this.rules.block.heading.exec(e);
        if (t) {
          let e = t[2].trim();
          if (/#$/.test(e)) {
            const t = ko(e, "#");
            this.options.pedantic
              ? (e = t.trim())
              : (t && !/ $/.test(t)) || (e = t.trim());
          }
          return {
            type: "heading",
            raw: t[0],
            depth: t[1].length,
            text: e,
            tokens: this.lexer.inline(e),
          };
        }
      }
      hr(e) {
        const t = this.rules.block.hr.exec(e);
        if (t) return { type: "hr", raw: t[0] };
      }
      blockquote(e) {
        const t = this.rules.block.blockquote.exec(e);
        if (t) {
          const e = t[0].replace(/^ *>[ \t]?/gm, ""),
            n = this.lexer.state.top;
          this.lexer.state.top = !0;
          const r = this.lexer.blockTokens(e);
          return (
            (this.lexer.state.top = n),
            { type: "blockquote", raw: t[0], tokens: r, text: e }
          );
        }
      }
      list(e) {
        let t = this.rules.block.list.exec(e);
        if (t) {
          let n,
            r,
            l,
            i,
            o,
            s,
            a,
            c,
            u,
            p,
            d,
            h,
            f = t[1].trim();
          const g = f.length > 1,
            m = {
              type: "list",
              raw: "",
              ordered: g,
              start: g ? +f.slice(0, -1) : "",
              loose: !1,
              items: [],
            };
          (f = g ? `\\d{1,9}\\${f.slice(-1)}` : `\\${f}`),
            this.options.pedantic && (f = g ? f : "[*+-]");
          const v = new RegExp(`^( {0,3}${f})((?:[\t ][^\\n]*)?(?:\\n|$))`);
          for (
            ;
            e && ((h = !1), (t = v.exec(e))) && !this.rules.block.hr.test(e);

          ) {
            if (
              ((n = t[0]),
              (e = e.substring(n.length)),
              (c = t[2]
                .split("\n", 1)[0]
                .replace(/^\t+/, (e) => " ".repeat(3 * e.length))),
              (u = e.split("\n", 1)[0]),
              this.options.pedantic
                ? ((i = 2), (d = c.trimLeft()))
                : ((i = t[2].search(/[^ ]/)),
                  (i = i > 4 ? 1 : i),
                  (d = c.slice(i)),
                  (i += t[1].length)),
              (s = !1),
              !c &&
                /^ *$/.test(u) &&
                ((n += u + "\n"), (e = e.substring(u.length + 1)), (h = !0)),
              !h)
            ) {
              const t = new RegExp(
                  `^ {0,${Math.min(
                    3,
                    i - 1
                  )}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`
                ),
                r = new RegExp(
                  `^ {0,${Math.min(
                    3,
                    i - 1
                  )}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`
                ),
                l = new RegExp(`^ {0,${Math.min(3, i - 1)}}(?:\`\`\`|~~~)`),
                o = new RegExp(`^ {0,${Math.min(3, i - 1)}}#`);
              for (
                ;
                e &&
                ((p = e.split("\n", 1)[0]),
                (u = p),
                this.options.pedantic &&
                  (u = u.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")),
                !l.test(u)) &&
                !o.test(u) &&
                !t.test(u) &&
                !r.test(e);

              ) {
                if (u.search(/[^ ]/) >= i || !u.trim()) d += "\n" + u.slice(i);
                else {
                  if (s) break;
                  if (c.search(/[^ ]/) >= 4) break;
                  if (l.test(c)) break;
                  if (o.test(c)) break;
                  if (r.test(c)) break;
                  d += "\n" + u;
                }
                s || u.trim() || (s = !0),
                  (n += p + "\n"),
                  (e = e.substring(p.length + 1)),
                  (c = u.slice(i));
              }
            }
            m.loose || (a ? (m.loose = !0) : /\n *\n *$/.test(n) && (a = !0)),
              this.options.gfm &&
                ((r = /^\[[ xX]\] /.exec(d)),
                r &&
                  ((l = "[ ] " !== r[0]), (d = d.replace(/^\[[ xX]\] +/, "")))),
              m.items.push({
                type: "list_item",
                raw: n,
                task: !!r,
                checked: l,
                loose: !1,
                text: d,
              }),
              (m.raw += n);
          }
          (m.items[m.items.length - 1].raw = n.trimRight()),
            (m.items[m.items.length - 1].text = d.trimRight()),
            (m.raw = m.raw.trimRight());
          const y = m.items.length;
          for (o = 0; o < y; o++)
            if (
              ((this.lexer.state.top = !1),
              (m.items[o].tokens = this.lexer.blockTokens(m.items[o].text, [])),
              !m.loose)
            ) {
              const e = m.items[o].tokens.filter((e) => "space" === e.type),
                t = e.length > 0 && e.some((e) => /\n.*\n/.test(e.raw));
              m.loose = t;
            }
          if (m.loose) for (o = 0; o < y; o++) m.items[o].loose = !0;
          return m;
        }
      }
      html(e) {
        const t = this.rules.block.html.exec(e);
        if (t) {
          const e = {
            type: "html",
            raw: t[0],
            pre:
              !this.options.sanitizer &&
              ("pre" === t[1] || "script" === t[1] || "style" === t[1]),
            text: t[0],
          };
          if (this.options.sanitize) {
            const n = this.options.sanitizer
              ? this.options.sanitizer(t[0])
              : io(t[0]);
            (e.type = "paragraph"),
              (e.text = n),
              (e.tokens = this.lexer.inline(n));
          }
          return e;
        }
      }
      def(e) {
        const t = this.rules.block.def.exec(e);
        if (t) {
          const e = t[1].toLowerCase().replace(/\s+/g, " "),
            n = t[2]
              ? t[2]
                  .replace(/^<(.*)>$/, "$1")
                  .replace(this.rules.inline._escapes, "$1")
              : "",
            r = t[3]
              ? t[3]
                  .substring(1, t[3].length - 1)
                  .replace(this.rules.inline._escapes, "$1")
              : t[3];
          return { type: "def", tag: e, raw: t[0], href: n, title: r };
        }
      }
      table(e) {
        const t = this.rules.block.table.exec(e);
        if (t) {
          const e = {
            type: "table",
            header: bo(t[1]).map((e) => ({ text: e })),
            align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
            rows:
              t[3] && t[3].trim()
                ? t[3].replace(/\n[ \t]*$/, "").split("\n")
                : [],
          };
          if (e.header.length === e.align.length) {
            e.raw = t[0];
            let n,
              r,
              l,
              i,
              o = e.align.length;
            for (n = 0; n < o; n++)
              /^ *-+: *$/.test(e.align[n])
                ? (e.align[n] = "right")
                : /^ *:-+: *$/.test(e.align[n])
                ? (e.align[n] = "center")
                : /^ *:-+ *$/.test(e.align[n])
                ? (e.align[n] = "left")
                : (e.align[n] = null);
            for (o = e.rows.length, n = 0; n < o; n++)
              e.rows[n] = bo(e.rows[n], e.header.length).map((e) => ({
                text: e,
              }));
            for (o = e.header.length, r = 0; r < o; r++)
              e.header[r].tokens = this.lexer.inline(e.header[r].text);
            for (o = e.rows.length, r = 0; r < o; r++)
              for (i = e.rows[r], l = 0; l < i.length; l++)
                i[l].tokens = this.lexer.inline(i[l].text);
            return e;
          }
        }
      }
      lheading(e) {
        const t = this.rules.block.lheading.exec(e);
        if (t)
          return {
            type: "heading",
            raw: t[0],
            depth: "=" === t[2].charAt(0) ? 1 : 2,
            text: t[1],
            tokens: this.lexer.inline(t[1]),
          };
      }
      paragraph(e) {
        const t = this.rules.block.paragraph.exec(e);
        if (t) {
          const e =
            "\n" === t[1].charAt(t[1].length - 1) ? t[1].slice(0, -1) : t[1];
          return {
            type: "paragraph",
            raw: t[0],
            text: e,
            tokens: this.lexer.inline(e),
          };
        }
      }
      text(e) {
        const t = this.rules.block.text.exec(e);
        if (t)
          return {
            type: "text",
            raw: t[0],
            text: t[0],
            tokens: this.lexer.inline(t[0]),
          };
      }
      escape(e) {
        const t = this.rules.inline.escape.exec(e);
        if (t) return { type: "escape", raw: t[0], text: io(t[1]) };
      }
      tag(e) {
        const t = this.rules.inline.tag.exec(e);
        if (t)
          return (
            !this.lexer.state.inLink && /^<a /i.test(t[0])
              ? (this.lexer.state.inLink = !0)
              : this.lexer.state.inLink &&
                /^<\/a>/i.test(t[0]) &&
                (this.lexer.state.inLink = !1),
            !this.lexer.state.inRawBlock &&
            /^<(pre|code|kbd|script)(\s|>)/i.test(t[0])
              ? (this.lexer.state.inRawBlock = !0)
              : this.lexer.state.inRawBlock &&
                /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) &&
                (this.lexer.state.inRawBlock = !1),
            {
              type: this.options.sanitize ? "text" : "html",
              raw: t[0],
              inLink: this.lexer.state.inLink,
              inRawBlock: this.lexer.state.inRawBlock,
              text: this.options.sanitize
                ? this.options.sanitizer
                  ? this.options.sanitizer(t[0])
                  : io(t[0])
                : t[0],
            }
          );
      }
      link(e) {
        const t = this.rules.inline.link.exec(e);
        if (t) {
          const e = t[2].trim();
          if (!this.options.pedantic && /^</.test(e)) {
            if (!/>$/.test(e)) return;
            const t = ko(e.slice(0, -1), "\\");
            if ((e.length - t.length) % 2 == 0) return;
          } else {
            const e = (function (e, t) {
              if (-1 === e.indexOf(t[1])) return -1;
              const n = e.length;
              let r = 0,
                l = 0;
              for (; l < n; l++)
                if ("\\" === e[l]) l++;
                else if (e[l] === t[0]) r++;
                else if (e[l] === t[1] && (r--, r < 0)) return l;
              return -1;
            })(t[2], "()");
            if (e > -1) {
              const n = (0 === t[0].indexOf("!") ? 5 : 4) + t[1].length + e;
              (t[2] = t[2].substring(0, e)),
                (t[0] = t[0].substring(0, n).trim()),
                (t[3] = "");
            }
          }
          let n = t[2],
            r = "";
          if (this.options.pedantic) {
            const e = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);
            e && ((n = e[1]), (r = e[3]));
          } else r = t[3] ? t[3].slice(1, -1) : "";
          return (
            (n = n.trim()),
            /^</.test(n) &&
              (n =
                this.options.pedantic && !/>$/.test(e)
                  ? n.slice(1)
                  : n.slice(1, -1)),
            $o(
              t,
              {
                href: n ? n.replace(this.rules.inline._escapes, "$1") : n,
                title: r ? r.replace(this.rules.inline._escapes, "$1") : r,
              },
              t[0],
              this.lexer
            )
          );
        }
      }
      reflink(e, t) {
        let n;
        if (
          (n = this.rules.inline.reflink.exec(e)) ||
          (n = this.rules.inline.nolink.exec(e))
        ) {
          let e = (n[2] || n[1]).replace(/\s+/g, " ");
          if (((e = t[e.toLowerCase()]), !e)) {
            const e = n[0].charAt(0);
            return { type: "text", raw: e, text: e };
          }
          return $o(n, e, n[0], this.lexer);
        }
      }
      emStrong(e, t) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
          r = this.rules.inline.emStrong.lDelim.exec(e);
        if (!r) return;
        if (r[3] && n.match(/[\p{L}\p{N}]/u)) return;
        const l = r[1] || r[2] || "";
        if (!l || (l && ("" === n || this.rules.inline.punctuation.exec(n)))) {
          const n = r[0].length - 1;
          let l,
            i,
            o = n,
            s = 0;
          const a =
            "*" === r[0][0]
              ? this.rules.inline.emStrong.rDelimAst
              : this.rules.inline.emStrong.rDelimUnd;
          for (
            a.lastIndex = 0, t = t.slice(-1 * e.length + n);
            null != (r = a.exec(t));

          ) {
            if (((l = r[1] || r[2] || r[3] || r[4] || r[5] || r[6]), !l))
              continue;
            if (((i = l.length), r[3] || r[4])) {
              o += i;
              continue;
            }
            if ((r[5] || r[6]) && n % 3 && !((n + i) % 3)) {
              s += i;
              continue;
            }
            if (((o -= i), o > 0)) continue;
            i = Math.min(i, i + o + s);
            const t = e.slice(0, n + r.index + (r[0].length - l.length) + i);
            if (Math.min(n, i) % 2) {
              const e = t.slice(1, -1);
              return {
                type: "em",
                raw: t,
                text: e,
                tokens: this.lexer.inlineTokens(e),
              };
            }
            const a = t.slice(2, -2);
            return {
              type: "strong",
              raw: t,
              text: a,
              tokens: this.lexer.inlineTokens(a),
            };
          }
        }
      }
      codespan(e) {
        const t = this.rules.inline.code.exec(e);
        if (t) {
          let e = t[2].replace(/\n/g, " ");
          const n = /[^ ]/.test(e),
            r = /^ /.test(e) && / $/.test(e);
          return (
            n && r && (e = e.substring(1, e.length - 1)),
            (e = io(e, !0)),
            { type: "codespan", raw: t[0], text: e }
          );
        }
      }
      br(e) {
        const t = this.rules.inline.br.exec(e);
        if (t) return { type: "br", raw: t[0] };
      }
      del(e) {
        const t = this.rules.inline.del.exec(e);
        if (t)
          return {
            type: "del",
            raw: t[0],
            text: t[2],
            tokens: this.lexer.inlineTokens(t[2]),
          };
      }
      autolink(e, t) {
        const n = this.rules.inline.autolink.exec(e);
        if (n) {
          let e, r;
          return (
            "@" === n[2]
              ? ((e = io(this.options.mangle ? t(n[1]) : n[1])),
                (r = "mailto:" + e))
              : ((e = io(n[1])), (r = e)),
            {
              type: "link",
              raw: n[0],
              text: e,
              href: r,
              tokens: [{ type: "text", raw: e, text: e }],
            }
          );
        }
      }
      url(e, t) {
        let n;
        if ((n = this.rules.inline.url.exec(e))) {
          let e, r;
          if ("@" === n[2])
            (e = io(this.options.mangle ? t(n[0]) : n[0])), (r = "mailto:" + e);
          else {
            let t;
            do {
              (t = n[0]), (n[0] = this.rules.inline._backpedal.exec(n[0])[0]);
            } while (t !== n[0]);
            (e = io(n[0])), (r = "www." === n[1] ? "http://" + n[0] : n[0]);
          }
          return {
            type: "link",
            raw: n[0],
            text: e,
            href: r,
            tokens: [{ type: "text", raw: e, text: e }],
          };
        }
      }
      inlineText(e, t) {
        const n = this.rules.inline.text.exec(e);
        if (n) {
          let e;
          return (
            (e = this.lexer.state.inRawBlock
              ? this.options.sanitize
                ? this.options.sanitizer
                  ? this.options.sanitizer(n[0])
                  : io(n[0])
                : n[0]
              : io(this.options.smartypants ? t(n[0]) : n[0])),
            { type: "text", raw: n[0], text: e }
          );
        }
      }
    }
    const So = {
      newline: /^(?: *(?:\n|$))+/,
      code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
      fences:
        /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
      hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
      heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
      blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
      list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
      html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
      def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
      table: yo,
      lheading: /^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
      _paragraph:
        /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
      text: /^[^\n]+/,
      _label: /(?!\s*\])(?:\\.|[^\[\]\\])+/,
      _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
    };
    (So.def = co(So.def)
      .replace("label", So._label)
      .replace("title", So._title)
      .getRegex()),
      (So.bullet = /(?:[*+-]|\d{1,9}[.)])/),
      (So.listItemStart = co(/^( *)(bull) */)
        .replace("bull", So.bullet)
        .getRegex()),
      (So.list = co(So.list)
        .replace(/bull/g, So.bullet)
        .replace(
          "hr",
          "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))"
        )
        .replace("def", "\\n+(?=" + So.def.source + ")")
        .getRegex()),
      (So._tag =
        "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul"),
      (So._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/),
      (So.html = co(So.html, "i")
        .replace("comment", So._comment)
        .replace("tag", So._tag)
        .replace(
          "attribute",
          / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
        )
        .getRegex()),
      (So.paragraph = co(So._paragraph)
        .replace("hr", So.hr)
        .replace("heading", " {0,3}#{1,6} ")
        .replace("|lheading", "")
        .replace("|table", "")
        .replace("blockquote", " {0,3}>")
        .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
        .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
        .replace(
          "html",
          "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
        )
        .replace("tag", So._tag)
        .getRegex()),
      (So.blockquote = co(So.blockquote)
        .replace("paragraph", So.paragraph)
        .getRegex()),
      (So.normal = wo({}, So)),
      (So.gfm = wo({}, So.normal, {
        table:
          "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
      })),
      (So.gfm.table = co(So.gfm.table)
        .replace("hr", So.hr)
        .replace("heading", " {0,3}#{1,6} ")
        .replace("blockquote", " {0,3}>")
        .replace("code", " {4}[^\\n]")
        .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
        .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
        .replace(
          "html",
          "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
        )
        .replace("tag", So._tag)
        .getRegex()),
      (So.gfm.paragraph = co(So._paragraph)
        .replace("hr", So.hr)
        .replace("heading", " {0,3}#{1,6} ")
        .replace("|lheading", "")
        .replace("table", So.gfm.table)
        .replace("blockquote", " {0,3}>")
        .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
        .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
        .replace(
          "html",
          "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
        )
        .replace("tag", So._tag)
        .getRegex()),
      (So.pedantic = wo({}, So.normal, {
        html: co(
          "^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))"
        )
          .replace("comment", So._comment)
          .replace(
            /tag/g,
            "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b"
          )
          .getRegex(),
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
        heading: /^(#{1,6})(.*)(?:\n+|$)/,
        fences: yo,
        lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
        paragraph: co(So.normal._paragraph)
          .replace("hr", So.hr)
          .replace("heading", " *#{1,6} *[^\n]")
          .replace("lheading", So.lheading)
          .replace("blockquote", " {0,3}>")
          .replace("|fences", "")
          .replace("|list", "")
          .replace("|html", "")
          .getRegex(),
      }));
    const Ao = {
      escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
      autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
      url: yo,
      tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
      link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
      reflink: /^!?\[(label)\]\[(ref)\]/,
      nolink: /^!?\[(ref)\](?:\[\])?/,
      reflinkSearch: "reflink|nolink(?!\\()",
      emStrong: {
        lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
        rDelimAst:
          /^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,
        rDelimUnd:
          /^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/,
      },
      code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
      br: /^( {2,}|\\)\n(?!\s*$)/,
      del: yo,
      text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
      punctuation: /^([\spunctuation])/,
    };
    function Ro(e) {
      return e
        .replace(/---/g, "—")
        .replace(/--/g, "–")
        .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘")
        .replace(/'/g, "’")
        .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“")
        .replace(/"/g, "”")
        .replace(/\.{3}/g, "…");
    }
    function Eo(e) {
      let t,
        n,
        r = "";
      const l = e.length;
      for (t = 0; t < l; t++)
        (n = e.charCodeAt(t)),
          Math.random() > 0.5 && (n = "x" + n.toString(16)),
          (r += "&#" + n + ";");
      return r;
    }
    (Ao._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"),
      (Ao.punctuation = co(Ao.punctuation)
        .replace(/punctuation/g, Ao._punctuation)
        .getRegex()),
      (Ao.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g),
      (Ao.escapedEmSt = /(?:^|[^\\])(?:\\\\)*\\[*_]/g),
      (Ao._comment = co(So._comment)
        .replace("(?:--\x3e|$)", "--\x3e")
        .getRegex()),
      (Ao.emStrong.lDelim = co(Ao.emStrong.lDelim)
        .replace(/punct/g, Ao._punctuation)
        .getRegex()),
      (Ao.emStrong.rDelimAst = co(Ao.emStrong.rDelimAst, "g")
        .replace(/punct/g, Ao._punctuation)
        .getRegex()),
      (Ao.emStrong.rDelimUnd = co(Ao.emStrong.rDelimUnd, "g")
        .replace(/punct/g, Ao._punctuation)
        .getRegex()),
      (Ao._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
      (Ao._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
      (Ao._email =
        /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
      (Ao.autolink = co(Ao.autolink)
        .replace("scheme", Ao._scheme)
        .replace("email", Ao._email)
        .getRegex()),
      (Ao._attribute =
        /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
      (Ao.tag = co(Ao.tag)
        .replace("comment", Ao._comment)
        .replace("attribute", Ao._attribute)
        .getRegex()),
      (Ao._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
      (Ao._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/),
      (Ao._title =
        /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
      (Ao.link = co(Ao.link)
        .replace("label", Ao._label)
        .replace("href", Ao._href)
        .replace("title", Ao._title)
        .getRegex()),
      (Ao.reflink = co(Ao.reflink)
        .replace("label", Ao._label)
        .replace("ref", So._label)
        .getRegex()),
      (Ao.nolink = co(Ao.nolink).replace("ref", So._label).getRegex()),
      (Ao.reflinkSearch = co(Ao.reflinkSearch, "g")
        .replace("reflink", Ao.reflink)
        .replace("nolink", Ao.nolink)
        .getRegex()),
      (Ao.normal = wo({}, Ao)),
      (Ao.pedantic = wo({}, Ao.normal, {
        strong: {
          start: /^__|\*\*/,
          middle:
            /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
          endAst: /\*\*(?!\*)/g,
          endUnd: /__(?!_)/g,
        },
        em: {
          start: /^_|\*/,
          middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
          endAst: /\*(?!\*)/g,
          endUnd: /_(?!_)/g,
        },
        link: co(/^!?\[(label)\]\((.*?)\)/)
          .replace("label", Ao._label)
          .getRegex(),
        reflink: co(/^!?\[(label)\]\s*\[([^\]]*)\]/)
          .replace("label", Ao._label)
          .getRegex(),
      })),
      (Ao.gfm = wo({}, Ao.normal, {
        escape: co(Ao.escape).replace("])", "~|])").getRegex(),
        _extended_email:
          /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
        url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
        _backpedal:
          /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
        del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
        text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
      })),
      (Ao.gfm.url = co(Ao.gfm.url, "i")
        .replace("email", Ao.gfm._extended_email)
        .getRegex()),
      (Ao.breaks = wo({}, Ao.gfm, {
        br: co(Ao.br).replace("{2,}", "*").getRegex(),
        text: co(Ao.gfm.text)
          .replace("\\b_", "\\b_| {2,}\\n")
          .replace(/\{2,\}/g, "*")
          .getRegex(),
      }));
    class Io {
      constructor(e) {
        (this.tokens = []),
          (this.tokens.links = Object.create(null)),
          (this.options = e || Xi),
          (this.options.tokenizer = this.options.tokenizer || new Co()),
          (this.tokenizer = this.options.tokenizer),
          (this.tokenizer.options = this.options),
          (this.tokenizer.lexer = this),
          (this.inlineQueue = []),
          (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
        const t = { block: So.normal, inline: Ao.normal };
        this.options.pedantic
          ? ((t.block = So.pedantic), (t.inline = Ao.pedantic))
          : this.options.gfm &&
            ((t.block = So.gfm),
            this.options.breaks ? (t.inline = Ao.breaks) : (t.inline = Ao.gfm)),
          (this.tokenizer.rules = t);
      }
      static get rules() {
        return { block: So, inline: Ao };
      }
      static lex(e, t) {
        return new Io(t).lex(e);
      }
      static lexInline(e, t) {
        return new Io(t).inlineTokens(e);
      }
      lex(e) {
        let t;
        for (
          e = e.replace(/\r\n|\r/g, "\n"), this.blockTokens(e, this.tokens);
          (t = this.inlineQueue.shift());

        )
          this.inlineTokens(t.src, t.tokens);
        return this.tokens;
      }
      blockTokens(e) {
        let t,
          n,
          r,
          l,
          i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        for (
          e = this.options.pedantic
            ? e.replace(/\t/g, "    ").replace(/^ +$/gm, "")
            : e.replace(
                /^( *)(\t+)/gm,
                (e, t, n) => t + "    ".repeat(n.length)
              );
          e;

        )
          if (
            !(
              this.options.extensions &&
              this.options.extensions.block &&
              this.options.extensions.block.some(
                (n) =>
                  !!(t = n.call({ lexer: this }, e, i)) &&
                  ((e = e.substring(t.raw.length)), i.push(t), !0)
              )
            )
          )
            if ((t = this.tokenizer.space(e)))
              (e = e.substring(t.raw.length)),
                1 === t.raw.length && i.length > 0
                  ? (i[i.length - 1].raw += "\n")
                  : i.push(t);
            else if ((t = this.tokenizer.code(e)))
              (e = e.substring(t.raw.length)),
                (n = i[i.length - 1]),
                !n || ("paragraph" !== n.type && "text" !== n.type)
                  ? i.push(t)
                  : ((n.raw += "\n" + t.raw),
                    (n.text += "\n" + t.text),
                    (this.inlineQueue[this.inlineQueue.length - 1].src =
                      n.text));
            else if ((t = this.tokenizer.fences(e)))
              (e = e.substring(t.raw.length)), i.push(t);
            else if ((t = this.tokenizer.heading(e)))
              (e = e.substring(t.raw.length)), i.push(t);
            else if ((t = this.tokenizer.hr(e)))
              (e = e.substring(t.raw.length)), i.push(t);
            else if ((t = this.tokenizer.blockquote(e)))
              (e = e.substring(t.raw.length)), i.push(t);
            else if ((t = this.tokenizer.list(e)))
              (e = e.substring(t.raw.length)), i.push(t);
            else if ((t = this.tokenizer.html(e)))
              (e = e.substring(t.raw.length)), i.push(t);
            else if ((t = this.tokenizer.def(e)))
              (e = e.substring(t.raw.length)),
                (n = i[i.length - 1]),
                !n || ("paragraph" !== n.type && "text" !== n.type)
                  ? this.tokens.links[t.tag] ||
                    (this.tokens.links[t.tag] = {
                      href: t.href,
                      title: t.title,
                    })
                  : ((n.raw += "\n" + t.raw),
                    (n.text += "\n" + t.raw),
                    (this.inlineQueue[this.inlineQueue.length - 1].src =
                      n.text));
            else if ((t = this.tokenizer.table(e)))
              (e = e.substring(t.raw.length)), i.push(t);
            else if ((t = this.tokenizer.lheading(e)))
              (e = e.substring(t.raw.length)), i.push(t);
            else {
              if (
                ((r = e),
                this.options.extensions && this.options.extensions.startBlock)
              ) {
                let t = 1 / 0;
                const n = e.slice(1);
                let l;
                this.options.extensions.startBlock.forEach(function (e) {
                  (l = e.call({ lexer: this }, n)),
                    "number" == typeof l && l >= 0 && (t = Math.min(t, l));
                }),
                  t < 1 / 0 && t >= 0 && (r = e.substring(0, t + 1));
              }
              if (this.state.top && (t = this.tokenizer.paragraph(r)))
                (n = i[i.length - 1]),
                  l && "paragraph" === n.type
                    ? ((n.raw += "\n" + t.raw),
                      (n.text += "\n" + t.text),
                      this.inlineQueue.pop(),
                      (this.inlineQueue[this.inlineQueue.length - 1].src =
                        n.text))
                    : i.push(t),
                  (l = r.length !== e.length),
                  (e = e.substring(t.raw.length));
              else if ((t = this.tokenizer.text(e)))
                (e = e.substring(t.raw.length)),
                  (n = i[i.length - 1]),
                  n && "text" === n.type
                    ? ((n.raw += "\n" + t.raw),
                      (n.text += "\n" + t.text),
                      this.inlineQueue.pop(),
                      (this.inlineQueue[this.inlineQueue.length - 1].src =
                        n.text))
                    : i.push(t);
              else if (e) {
                const t = "Infinite loop on byte: " + e.charCodeAt(0);
                if (this.options.silent) {
                  console.error(t);
                  break;
                }
                throw new Error(t);
              }
            }
        return (this.state.top = !0), i;
      }
      inline(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return this.inlineQueue.push({ src: e, tokens: t }), t;
      }
      inlineTokens(e) {
        let t,
          n,
          r,
          l,
          i,
          o,
          s =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          a = e;
        if (this.tokens.links) {
          const e = Object.keys(this.tokens.links);
          if (e.length > 0)
            for (
              ;
              null != (l = this.tokenizer.rules.inline.reflinkSearch.exec(a));

            )
              e.includes(l[0].slice(l[0].lastIndexOf("[") + 1, -1)) &&
                (a =
                  a.slice(0, l.index) +
                  "[" +
                  _o("a", l[0].length - 2) +
                  "]" +
                  a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
        }
        for (; null != (l = this.tokenizer.rules.inline.blockSkip.exec(a)); )
          a =
            a.slice(0, l.index) +
            "[" +
            _o("a", l[0].length - 2) +
            "]" +
            a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
        for (; null != (l = this.tokenizer.rules.inline.escapedEmSt.exec(a)); )
          (a =
            a.slice(0, l.index + l[0].length - 2) +
            "++" +
            a.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex)),
            this.tokenizer.rules.inline.escapedEmSt.lastIndex--;
        for (; e; )
          if (
            (i || (o = ""),
            (i = !1),
            !(
              this.options.extensions &&
              this.options.extensions.inline &&
              this.options.extensions.inline.some(
                (n) =>
                  !!(t = n.call({ lexer: this }, e, s)) &&
                  ((e = e.substring(t.raw.length)), s.push(t), !0)
              )
            ))
          )
            if ((t = this.tokenizer.escape(e)))
              (e = e.substring(t.raw.length)), s.push(t);
            else if ((t = this.tokenizer.tag(e)))
              (e = e.substring(t.raw.length)),
                (n = s[s.length - 1]),
                n && "text" === t.type && "text" === n.type
                  ? ((n.raw += t.raw), (n.text += t.text))
                  : s.push(t);
            else if ((t = this.tokenizer.link(e)))
              (e = e.substring(t.raw.length)), s.push(t);
            else if ((t = this.tokenizer.reflink(e, this.tokens.links)))
              (e = e.substring(t.raw.length)),
                (n = s[s.length - 1]),
                n && "text" === t.type && "text" === n.type
                  ? ((n.raw += t.raw), (n.text += t.text))
                  : s.push(t);
            else if ((t = this.tokenizer.emStrong(e, a, o)))
              (e = e.substring(t.raw.length)), s.push(t);
            else if ((t = this.tokenizer.codespan(e)))
              (e = e.substring(t.raw.length)), s.push(t);
            else if ((t = this.tokenizer.br(e)))
              (e = e.substring(t.raw.length)), s.push(t);
            else if ((t = this.tokenizer.del(e)))
              (e = e.substring(t.raw.length)), s.push(t);
            else if ((t = this.tokenizer.autolink(e, Eo)))
              (e = e.substring(t.raw.length)), s.push(t);
            else if (this.state.inLink || !(t = this.tokenizer.url(e, Eo))) {
              if (
                ((r = e),
                this.options.extensions && this.options.extensions.startInline)
              ) {
                let t = 1 / 0;
                const n = e.slice(1);
                let l;
                this.options.extensions.startInline.forEach(function (e) {
                  (l = e.call({ lexer: this }, n)),
                    "number" == typeof l && l >= 0 && (t = Math.min(t, l));
                }),
                  t < 1 / 0 && t >= 0 && (r = e.substring(0, t + 1));
              }
              if ((t = this.tokenizer.inlineText(r, Ro)))
                (e = e.substring(t.raw.length)),
                  "_" !== t.raw.slice(-1) && (o = t.raw.slice(-1)),
                  (i = !0),
                  (n = s[s.length - 1]),
                  n && "text" === n.type
                    ? ((n.raw += t.raw), (n.text += t.text))
                    : s.push(t);
              else if (e) {
                const t = "Infinite loop on byte: " + e.charCodeAt(0);
                if (this.options.silent) {
                  console.error(t);
                  break;
                }
                throw new Error(t);
              }
            } else (e = e.substring(t.raw.length)), s.push(t);
        return s;
      }
    }
    class Lo {
      constructor(e) {
        this.options = e || Xi;
      }
      code(e, t, n) {
        const r = (t || "").match(/\S*/)[0];
        if (this.options.highlight) {
          const t = this.options.highlight(e, r);
          null != t && t !== e && ((n = !0), (e = t));
        }
        return (
          (e = e.replace(/\n$/, "") + "\n"),
          r
            ? '<pre><code class="' +
              this.options.langPrefix +
              io(r) +
              '">' +
              (n ? e : io(e, !0)) +
              "</code></pre>\n"
            : "<pre><code>" + (n ? e : io(e, !0)) + "</code></pre>\n"
        );
      }
      blockquote(e) {
        return `<blockquote>\n${e}</blockquote>\n`;
      }
      html(e) {
        return e;
      }
      heading(e, t, n, r) {
        return this.options.headerIds
          ? `<h${t} id="${
              this.options.headerPrefix + r.slug(n)
            }">${e}</h${t}>\n`
          : `<h${t}>${e}</h${t}>\n`;
      }
      hr() {
        return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
      }
      list(e, t, n) {
        const r = t ? "ol" : "ul";
        return (
          "<" +
          r +
          (t && 1 !== n ? ' start="' + n + '"' : "") +
          ">\n" +
          e +
          "</" +
          r +
          ">\n"
        );
      }
      listitem(e) {
        return `<li>${e}</li>\n`;
      }
      checkbox(e) {
        return (
          "<input " +
          (e ? 'checked="" ' : "") +
          'disabled="" type="checkbox"' +
          (this.options.xhtml ? " /" : "") +
          "> "
        );
      }
      paragraph(e) {
        return `<p>${e}</p>\n`;
      }
      table(e, t) {
        return (
          t && (t = `<tbody>${t}</tbody>`),
          "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n"
        );
      }
      tablerow(e) {
        return `<tr>\n${e}</tr>\n`;
      }
      tablecell(e, t) {
        const n = t.header ? "th" : "td";
        return (
          (t.align ? `<${n} align="${t.align}">` : `<${n}>`) + e + `</${n}>\n`
        );
      }
      strong(e) {
        return `<strong>${e}</strong>`;
      }
      em(e) {
        return `<em>${e}</em>`;
      }
      codespan(e) {
        return `<code>${e}</code>`;
      }
      br() {
        return this.options.xhtml ? "<br/>" : "<br>";
      }
      del(e) {
        return `<del>${e}</del>`;
      }
      link(e, t, n) {
        if (null === (e = ho(this.options.sanitize, this.options.baseUrl, e)))
          return n;
        let r = '<a href="' + e + '"';
        return t && (r += ' title="' + t + '"'), (r += ">" + n + "</a>"), r;
      }
      image(e, t, n) {
        if (null === (e = ho(this.options.sanitize, this.options.baseUrl, e)))
          return n;
        let r = `<img src="${e}" alt="${n}"`;
        return (
          t && (r += ` title="${t}"`), (r += this.options.xhtml ? "/>" : ">"), r
        );
      }
      text(e) {
        return e;
      }
    }
    class zo {
      strong(e) {
        return e;
      }
      em(e) {
        return e;
      }
      codespan(e) {
        return e;
      }
      del(e) {
        return e;
      }
      html(e) {
        return e;
      }
      text(e) {
        return e;
      }
      link(e, t, n) {
        return "" + n;
      }
      image(e, t, n) {
        return "" + n;
      }
      br() {
        return "";
      }
    }
    class Oo {
      constructor() {
        this.seen = {};
      }
      serialize(e) {
        return e
          .toLowerCase()
          .trim()
          .replace(/<[!\/a-z].*?>/gi, "")
          .replace(
            /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,
            ""
          )
          .replace(/\s/g, "-");
      }
      getNextSafeSlug(e, t) {
        let n = e,
          r = 0;
        if (this.seen.hasOwnProperty(n)) {
          r = this.seen[e];
          do {
            r++, (n = e + "-" + r);
          } while (this.seen.hasOwnProperty(n));
        }
        return t || ((this.seen[e] = r), (this.seen[n] = 0)), n;
      }
      slug(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const n = this.serialize(e);
        return this.getNextSafeSlug(n, t.dryrun);
      }
    }
    class jo {
      constructor(e) {
        (this.options = e || Xi),
          (this.options.renderer = this.options.renderer || new Lo()),
          (this.renderer = this.options.renderer),
          (this.renderer.options = this.options),
          (this.textRenderer = new zo()),
          (this.slugger = new Oo());
      }
      static parse(e, t) {
        return new jo(t).parse(e);
      }
      static parseInline(e, t) {
        return new jo(t).parseInline(e);
      }
      parse(e) {
        let t,
          n,
          r,
          l,
          i,
          o,
          s,
          a,
          c,
          u,
          p,
          d,
          h,
          f,
          g,
          m,
          v,
          y,
          w,
          b =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          k = "";
        const x = e.length;
        for (t = 0; t < x; t++)
          if (
            ((u = e[t]),
            this.options.extensions &&
              this.options.extensions.renderers &&
              this.options.extensions.renderers[u.type] &&
              ((w = this.options.extensions.renderers[u.type].call(
                { parser: this },
                u
              )),
              !1 !== w ||
                ![
                  "space",
                  "hr",
                  "heading",
                  "code",
                  "table",
                  "blockquote",
                  "list",
                  "html",
                  "paragraph",
                  "text",
                ].includes(u.type)))
          )
            k += w || "";
          else
            switch (u.type) {
              case "space":
                continue;
              case "hr":
                k += this.renderer.hr();
                continue;
              case "heading":
                k += this.renderer.heading(
                  this.parseInline(u.tokens),
                  u.depth,
                  so(this.parseInline(u.tokens, this.textRenderer)),
                  this.slugger
                );
                continue;
              case "code":
                k += this.renderer.code(u.text, u.lang, u.escaped);
                continue;
              case "table":
                for (a = "", s = "", l = u.header.length, n = 0; n < l; n++)
                  s += this.renderer.tablecell(
                    this.parseInline(u.header[n].tokens),
                    { header: !0, align: u.align[n] }
                  );
                for (
                  a += this.renderer.tablerow(s),
                    c = "",
                    l = u.rows.length,
                    n = 0;
                  n < l;
                  n++
                ) {
                  for (o = u.rows[n], s = "", i = o.length, r = 0; r < i; r++)
                    s += this.renderer.tablecell(
                      this.parseInline(o[r].tokens),
                      { header: !1, align: u.align[r] }
                    );
                  c += this.renderer.tablerow(s);
                }
                k += this.renderer.table(a, c);
                continue;
              case "blockquote":
                (c = this.parse(u.tokens)), (k += this.renderer.blockquote(c));
                continue;
              case "list":
                for (
                  p = u.ordered,
                    d = u.start,
                    h = u.loose,
                    l = u.items.length,
                    c = "",
                    n = 0;
                  n < l;
                  n++
                )
                  (g = u.items[n]),
                    (m = g.checked),
                    (v = g.task),
                    (f = ""),
                    g.task &&
                      ((y = this.renderer.checkbox(m)),
                      h
                        ? g.tokens.length > 0 &&
                          "paragraph" === g.tokens[0].type
                          ? ((g.tokens[0].text = y + " " + g.tokens[0].text),
                            g.tokens[0].tokens &&
                              g.tokens[0].tokens.length > 0 &&
                              "text" === g.tokens[0].tokens[0].type &&
                              (g.tokens[0].tokens[0].text =
                                y + " " + g.tokens[0].tokens[0].text))
                          : g.tokens.unshift({ type: "text", text: y })
                        : (f += y)),
                    (f += this.parse(g.tokens, h)),
                    (c += this.renderer.listitem(f, v, m));
                k += this.renderer.list(c, p, d);
                continue;
              case "html":
                k += this.renderer.html(u.text);
                continue;
              case "paragraph":
                k += this.renderer.paragraph(this.parseInline(u.tokens));
                continue;
              case "text":
                for (
                  c = u.tokens ? this.parseInline(u.tokens) : u.text;
                  t + 1 < x && "text" === e[t + 1].type;

                )
                  (u = e[++t]),
                    (c +=
                      "\n" + (u.tokens ? this.parseInline(u.tokens) : u.text));
                k += b ? this.renderer.paragraph(c) : c;
                continue;
              default: {
                const e = 'Token with "' + u.type + '" type was not found.';
                if (this.options.silent) return void console.error(e);
                throw new Error(e);
              }
            }
        return k;
      }
      parseInline(e, t) {
        t = t || this.renderer;
        let n,
          r,
          l,
          i = "";
        const o = e.length;
        for (n = 0; n < o; n++)
          if (
            ((r = e[n]),
            this.options.extensions &&
              this.options.extensions.renderers &&
              this.options.extensions.renderers[r.type] &&
              ((l = this.options.extensions.renderers[r.type].call(
                { parser: this },
                r
              )),
              !1 !== l ||
                ![
                  "escape",
                  "html",
                  "link",
                  "image",
                  "strong",
                  "em",
                  "codespan",
                  "br",
                  "del",
                  "text",
                ].includes(r.type)))
          )
            i += l || "";
          else
            switch (r.type) {
              case "escape":
              case "text":
                i += t.text(r.text);
                break;
              case "html":
                i += t.html(r.text);
                break;
              case "link":
                i += t.link(r.href, r.title, this.parseInline(r.tokens, t));
                break;
              case "image":
                i += t.image(r.href, r.title, r.text);
                break;
              case "strong":
                i += t.strong(this.parseInline(r.tokens, t));
                break;
              case "em":
                i += t.em(this.parseInline(r.tokens, t));
                break;
              case "codespan":
                i += t.codespan(r.text);
                break;
              case "br":
                i += t.br();
                break;
              case "del":
                i += t.del(this.parseInline(r.tokens, t));
                break;
              default: {
                const e = 'Token with "' + r.type + '" type was not found.';
                if (this.options.silent) return void console.error(e);
                throw new Error(e);
              }
            }
        return i;
      }
    }
    function To(e, t, n) {
      if (null == e)
        throw new Error("marked(): input parameter is undefined or null");
      if ("string" != typeof e)
        throw new Error(
          "marked(): input parameter is of type " +
            Object.prototype.toString.call(e) +
            ", string expected"
        );
      if (
        ("function" == typeof t && ((n = t), (t = null)),
        xo((t = wo({}, To.defaults, t || {}))),
        n)
      ) {
        const r = t.highlight;
        let l;
        try {
          l = Io.lex(e, t);
        } catch (e) {
          return n(e);
        }
        const i = function (e) {
          let i;
          if (!e)
            try {
              t.walkTokens && To.walkTokens(l, t.walkTokens),
                (i = jo.parse(l, t));
            } catch (t) {
              e = t;
            }
          return (t.highlight = r), e ? n(e) : n(null, i);
        };
        if (!r || r.length < 3) return i();
        if ((delete t.highlight, !l.length)) return i();
        let o = 0;
        return (
          To.walkTokens(l, function (e) {
            "code" === e.type &&
              (o++,
              setTimeout(() => {
                r(e.text, e.lang, function (t, n) {
                  if (t) return i(t);
                  null != n && n !== e.text && ((e.text = n), (e.escaped = !0)),
                    o--,
                    0 === o && i();
                });
              }, 0));
          }),
          void (0 === o && i())
        );
      }
      function r(e) {
        if (
          ((e.message +=
            "\nPlease report this to https://github.com/markedjs/marked."),
          t.silent)
        )
          return (
            "<p>An error occurred:</p><pre>" + io(e.message + "", !0) + "</pre>"
          );
        throw e;
      }
      try {
        const n = Io.lex(e, t);
        if (t.walkTokens) {
          if (t.async)
            return Promise.all(To.walkTokens(n, t.walkTokens))
              .then(() => jo.parse(n, t))
              .catch(r);
          To.walkTokens(n, t.walkTokens);
        }
        return jo.parse(n, t);
      } catch (e) {
        r(e);
      }
    }
    (To.options = To.setOptions =
      function (e) {
        var t;
        return wo(To.defaults, e), (t = To.defaults), (Xi = t), To;
      }),
      (To.getDefaults = function () {
        return {
          async: !1,
          baseUrl: null,
          breaks: !1,
          extensions: null,
          gfm: !0,
          headerIds: !0,
          headerPrefix: "",
          highlight: null,
          langPrefix: "language-",
          mangle: !0,
          pedantic: !1,
          renderer: null,
          sanitize: !1,
          sanitizer: null,
          silent: !1,
          smartypants: !1,
          tokenizer: null,
          walkTokens: null,
          xhtml: !1,
        };
      }),
      (To.defaults = Xi),
      (To.use = function () {
        const e = To.defaults.extensions || { renderers: {}, childTokens: {} };
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
          n[r] = arguments[r];
        n.forEach((t) => {
          const n = wo({}, t);
          if (
            ((n.async = To.defaults.async || n.async),
            t.extensions &&
              (t.extensions.forEach((t) => {
                if (!t.name) throw new Error("extension name required");
                if (t.renderer) {
                  const n = e.renderers[t.name];
                  e.renderers[t.name] = n
                    ? function () {
                        for (
                          var e = arguments.length, r = new Array(e), l = 0;
                          l < e;
                          l++
                        )
                          r[l] = arguments[l];
                        let i = t.renderer.apply(this, r);
                        return !1 === i && (i = n.apply(this, r)), i;
                      }
                    : t.renderer;
                }
                if (t.tokenizer) {
                  if (!t.level || ("block" !== t.level && "inline" !== t.level))
                    throw new Error(
                      "extension level must be 'block' or 'inline'"
                    );
                  e[t.level]
                    ? e[t.level].unshift(t.tokenizer)
                    : (e[t.level] = [t.tokenizer]),
                    t.start &&
                      ("block" === t.level
                        ? e.startBlock
                          ? e.startBlock.push(t.start)
                          : (e.startBlock = [t.start])
                        : "inline" === t.level &&
                          (e.startInline
                            ? e.startInline.push(t.start)
                            : (e.startInline = [t.start])));
                }
                t.childTokens && (e.childTokens[t.name] = t.childTokens);
              }),
              (n.extensions = e)),
            t.renderer)
          ) {
            const e = To.defaults.renderer || new Lo();
            for (const n in t.renderer) {
              const r = e[n];
              e[n] = function () {
                for (
                  var l = arguments.length, i = new Array(l), o = 0;
                  o < l;
                  o++
                )
                  i[o] = arguments[o];
                let s = t.renderer[n].apply(e, i);
                return !1 === s && (s = r.apply(e, i)), s;
              };
            }
            n.renderer = e;
          }
          if (t.tokenizer) {
            const e = To.defaults.tokenizer || new Co();
            for (const n in t.tokenizer) {
              const r = e[n];
              e[n] = function () {
                for (
                  var l = arguments.length, i = new Array(l), o = 0;
                  o < l;
                  o++
                )
                  i[o] = arguments[o];
                let s = t.tokenizer[n].apply(e, i);
                return !1 === s && (s = r.apply(e, i)), s;
              };
            }
            n.tokenizer = e;
          }
          if (t.walkTokens) {
            const e = To.defaults.walkTokens;
            n.walkTokens = function (n) {
              let r = [];
              return (
                r.push(t.walkTokens.call(this, n)),
                e && (r = r.concat(e.call(this, n))),
                r
              );
            };
          }
          To.setOptions(n);
        });
      }),
      (To.walkTokens = function (e, t) {
        let n = [];
        for (const r of e)
          switch (((n = n.concat(t.call(To, r))), r.type)) {
            case "table":
              for (const e of r.header)
                n = n.concat(To.walkTokens(e.tokens, t));
              for (const e of r.rows)
                for (const r of e) n = n.concat(To.walkTokens(r.tokens, t));
              break;
            case "list":
              n = n.concat(To.walkTokens(r.items, t));
              break;
            default:
              To.defaults.extensions &&
              To.defaults.extensions.childTokens &&
              To.defaults.extensions.childTokens[r.type]
                ? To.defaults.extensions.childTokens[r.type].forEach(function (
                    e
                  ) {
                    n = n.concat(To.walkTokens(r[e], t));
                  })
                : r.tokens && (n = n.concat(To.walkTokens(r.tokens, t)));
          }
        return n;
      }),
      (To.parseInline = function (e, t) {
        if (null == e)
          throw new Error(
            "marked.parseInline(): input parameter is undefined or null"
          );
        if ("string" != typeof e)
          throw new Error(
            "marked.parseInline(): input parameter is of type " +
              Object.prototype.toString.call(e) +
              ", string expected"
          );
        xo((t = wo({}, To.defaults, t || {})));
        try {
          const n = Io.lexInline(e, t);
          return (
            t.walkTokens && To.walkTokens(n, t.walkTokens), jo.parseInline(n, t)
          );
        } catch (e) {
          if (
            ((e.message +=
              "\nPlease report this to https://github.com/markedjs/marked."),
            t.silent)
          )
            return (
              "<p>An error occurred:</p><pre>" +
              io(e.message + "", !0) +
              "</pre>"
            );
          throw e;
        }
      }),
      (To.Parser = jo),
      (To.parser = jo.parse),
      (To.Renderer = Lo),
      (To.TextRenderer = zo),
      (To.Lexer = Io),
      (To.lexer = Io.lex),
      (To.Tokenizer = Co),
      (To.Slugger = Oo),
      (To.parse = To);
    const Uo = /\$.*?\$/,
      Po = /^\$(.*?)\$/,
      Mo = /^(?:\s{0,3})\$\$((?:[^\n]|\n[^\n])+?)\n{0,1}\$\$/,
      Fo = function () {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
        ).replace(/:(.+?):/g, (t, n) =>
          e[n] ? `<img class="wl-emoji" src="${e[n]}" alt="${n}">` : t
        );
      },
      No = (e) => e.dataset.path || e.getAttribute("id"),
      Vo = (e) => {
        let {
          serverURL: t,
          path: n = window.location.pathname,
          selector: r = ".waline-comment-count",
          lang: l = navigator.language,
        } = e;
        const i = new AbortController(),
          o = document.querySelectorAll(r);
        return (
          o.length &&
            ((e) => {
              let { serverURL: t, lang: n, paths: r, signal: l } = e;
              return fetch(
                `${t}/comment?type=count&url=${encodeURIComponent(
                  r.join(",")
                )}&lang=${n}`,
                { signal: l }
              )
                .then((e) => e.json())
                .then((e) => (Array.isArray(e) ? e : [e]));
            })({
              serverURL: I(t),
              paths: Array.from(o).map((e) =>
                A(e.dataset.path || e.getAttribute("id") || n)
              ),
              lang: l,
              signal: i.signal,
            })
              .then((e) => {
                o.forEach((t, n) => {
                  t.innerText = e[n].toString();
                });
              })
              .catch(Qi),
          i.abort.bind(i)
        );
      },
      Do = (e) => {
        let { size: t } = e;
        return fl(
          "svg",
          {
            class: "wl-close-icon",
            viewBox: "0 0 1024 1024",
            width: t,
            height: t,
          },
          [
            fl("path", {
              d: "M697.173 85.333h-369.92c-144.64 0-241.92 101.547-241.92 252.587v348.587c0 150.613 97.28 252.16 241.92 252.16h369.92c144.64 0 241.494-101.547 241.494-252.16V337.92c0-151.04-96.854-252.587-241.494-252.587z",
              fill: "currentColor",
            }),
            fl("path", {
              d: "m640.683 587.52-75.947-75.861 75.904-75.862a37.29 37.29 0 0 0 0-52.778 37.205 37.205 0 0 0-52.779 0l-75.946 75.818-75.862-75.946a37.419 37.419 0 0 0-52.821 0 37.419 37.419 0 0 0 0 52.821l75.947 75.947-75.776 75.733a37.29 37.29 0 1 0 52.778 52.821l75.776-75.776 75.947 75.947a37.376 37.376 0 0 0 52.779-52.821z",
              fill: "#888",
            }),
          ]
        );
      },
      Ho = () =>
        fl(
          "svg",
          { viewBox: "0 0 1024 1024", width: "24", height: "24" },
          fl("path", {
            d: "m341.013 394.667 27.755 393.45h271.83l27.733-393.45h64.106l-28.01 397.952a64 64 0 0 1-63.83 59.498H368.768a64 64 0 0 1-63.83-59.52l-28.053-397.93h64.128zm139.307 19.818v298.667h-64V414.485h64zm117.013 0v298.667h-64V414.485h64zM181.333 288h640v64h-640v-64zm453.483-106.667v64h-256v-64h256z",
            fill: "red",
          })
        ),
      Bo = () =>
        fl(
          "svg",
          { viewBox: "0 0 1024 1024", width: "24", height: "24" },
          fl("path", {
            d: "M563.2 463.3 677 540c1.7 1.2 3.7 1.8 5.8 1.8.7 0 1.4-.1 2-.2 2.7-.5 5.1-2.1 6.6-4.4l25.3-37.8c1.5-2.3 2.1-5.1 1.6-7.8s-2.1-5.1-4.4-6.6l-73.6-49.1 73.6-49.1c2.3-1.5 3.9-3.9 4.4-6.6.5-2.7 0-5.5-1.6-7.8l-25.3-37.8a10.1 10.1 0 0 0-6.6-4.4c-.7-.1-1.3-.2-2-.2-2.1 0-4.1.6-5.8 1.8l-113.8 76.6c-9.2 6.2-14.7 16.4-14.7 27.5.1 11 5.5 21.3 14.7 27.4zM387 348.8h-45.5c-5.7 0-10.4 4.7-10.4 10.4v153.3c0 5.7 4.7 10.4 10.4 10.4H387c5.7 0 10.4-4.7 10.4-10.4V359.2c0-5.7-4.7-10.4-10.4-10.4zm333.8 241.3-41-20a10.3 10.3 0 0 0-8.1-.5c-2.6.9-4.8 2.9-5.9 5.4-30.1 64.9-93.1 109.1-164.4 115.2-5.7.5-9.9 5.5-9.5 11.2l3.9 45.5c.5 5.3 5 9.5 10.3 9.5h.9c94.8-8 178.5-66.5 218.6-152.7 2.4-5 .3-11.2-4.8-13.6zm186-186.1c-11.9-42-30.5-81.4-55.2-117.1-24.1-34.9-53.5-65.6-87.5-91.2-33.9-25.6-71.5-45.5-111.6-59.2-41.2-14-84.1-21.1-127.8-21.1h-1.2c-75.4 0-148.8 21.4-212.5 61.7-63.7 40.3-114.3 97.6-146.5 165.8-32.2 68.1-44.3 143.6-35.1 218.4 9.3 74.8 39.4 145 87.3 203.3.1.2.3.3.4.5l36.2 38.4c1.1 1.2 2.5 2.1 3.9 2.6 73.3 66.7 168.2 103.5 267.5 103.5 73.3 0 145.2-20.3 207.7-58.7 37.3-22.9 70.3-51.5 98.1-85 27.1-32.7 48.7-69.5 64.2-109.1 15.5-39.7 24.4-81.3 26.6-123.8 2.4-43.6-2.5-87-14.5-129zm-60.5 181.1c-8.3 37-22.8 72-43 104-19.7 31.1-44.3 58.6-73.1 81.7-28.8 23.1-61 41-95.7 53.4-35.6 12.7-72.9 19.1-110.9 19.1-82.6 0-161.7-30.6-222.8-86.2l-34.1-35.8c-23.9-29.3-42.4-62.2-55.1-97.7-12.4-34.7-18.8-71-19.2-107.9-.4-36.9 5.4-73.3 17.1-108.2 12-35.8 30-69.2 53.4-99.1 31.7-40.4 71.1-72 117.2-94.1 44.5-21.3 94-32.6 143.4-32.6 49.3 0 97 10.8 141.8 32 34.3 16.3 65.3 38.1 92 64.8 26.1 26 47.5 56 63.6 89.2 16.2 33.2 26.6 68.5 31 105.1 4.6 37.5 2.7 75.3-5.6 112.3z",
            fill: "currentColor",
          })
        ),
      Wo = () =>
        fl("svg", { viewBox: "0 0 1024 1024", width: "24", height: "24" }, [
          fl("path", {
            d: "M784 112H240c-88 0-160 72-160 160v480c0 88 72 160 160 160h544c88 0 160-72 160-160V272c0-88-72-160-160-160zm96 640c0 52.8-43.2 96-96 96H240c-52.8 0-96-43.2-96-96V272c0-52.8 43.2-96 96-96h544c52.8 0 96 43.2 96 96v480z",
            fill: "currentColor",
          }),
          fl("path", {
            d: "M352 480c52.8 0 96-43.2 96-96s-43.2-96-96-96-96 43.2-96 96 43.2 96 96 96zm0-128c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm462.4 379.2-3.2-3.2-177.6-177.6c-25.6-25.6-65.6-25.6-91.2 0l-80 80-36.8-36.8c-25.6-25.6-65.6-25.6-91.2 0L200 728c-4.8 6.4-8 14.4-8 24 0 17.6 14.4 32 32 32 9.6 0 16-3.2 22.4-9.6L380.8 640l134.4 134.4c6.4 6.4 14.4 9.6 24 9.6 17.6 0 32-14.4 32-32 0-9.6-4.8-17.6-9.6-24l-52.8-52.8 80-80L769.6 776c6.4 4.8 12.8 8 20.8 8 17.6 0 32-14.4 32-32 0-8-3.2-16-8-20.8z",
            fill: "currentColor",
          }),
        ]),
      qo = (e) => {
        let { active: t = !1 } = e;
        return fl(
          "svg",
          { viewBox: "0 0 1024 1024", width: "24", height: "24" },
          [
            fl("path", {
              d:
                "M850.654 323.804c-11.042-25.625-26.862-48.532-46.885-68.225-20.022-19.61-43.258-34.936-69.213-45.73-26.78-11.124-55.124-16.727-84.375-16.727-40.622 0-80.256 11.123-114.698 32.135A214.79 214.79 0 0 0 512 241.819a214.79 214.79 0 0 0-23.483-16.562c-34.442-21.012-74.076-32.135-114.698-32.135-29.25 0-57.595 5.603-84.375 16.727-25.872 10.711-49.19 26.12-69.213 45.73-20.105 19.693-35.843 42.6-46.885 68.225-11.453 26.615-17.303 54.877-17.303 83.963 0 27.439 5.603 56.03 16.727 85.117 9.31 24.307 22.659 49.52 39.715 74.981 27.027 40.293 64.188 82.316 110.33 124.915 76.465 70.615 152.189 119.394 155.402 121.371l19.528 12.525c8.652 5.52 19.776 5.52 28.427 0l19.529-12.525c3.213-2.06 78.854-50.756 155.401-121.371 46.143-42.6 83.304-84.622 110.33-124.915 17.057-25.46 30.487-50.674 39.716-74.981 11.124-29.087 16.727-57.678 16.727-85.117.082-29.086-5.768-57.348-17.221-83.963z" +
                (t
                  ? ""
                  : "M512 761.5S218.665 573.55 218.665 407.767c0-83.963 69.461-152.023 155.154-152.023 60.233 0 112.473 33.618 138.181 82.727 25.708-49.109 77.948-82.727 138.18-82.727 85.694 0 155.155 68.06 155.155 152.023C805.335 573.551 512 761.5 512 761.5z"),
              fill: t ? "red" : "currentColor",
            }),
          ]
        );
      },
      Zo = () =>
        fl("svg", { viewBox: "0 0 1024 1024", width: "24", height: "24" }, [
          fl("path", {
            d: "M710.816 654.301c70.323-96.639 61.084-230.578-23.705-314.843-46.098-46.098-107.183-71.109-172.28-71.109-65.008 0-126.092 25.444-172.28 71.109-45.227 46.098-70.756 107.183-70.756 172.106 0 64.923 25.444 126.007 71.194 172.106 46.099 46.098 107.184 71.109 172.28 71.109 51.414 0 100.648-16.212 142.824-47.404l126.53 126.006c7.058 7.06 16.297 10.979 26.406 10.979 10.105 0 19.343-3.919 26.402-10.979 14.467-14.467 14.467-38.172 0-52.723L710.816 654.301zm-315.107-23.265c-65.88-65.88-65.88-172.54 0-238.42 32.069-32.07 74.245-49.149 119.471-49.149 45.227 0 87.407 17.603 119.472 49.149 65.88 65.879 65.88 172.539 0 238.42-63.612 63.178-175.242 63.178-238.943 0zm0 0",
            fill: "currentColor",
          }),
          fl("path", {
            d: "M703.319 121.603H321.03c-109.8 0-199.469 89.146-199.469 199.38v382.034c0 109.796 89.236 199.38 199.469 199.38h207.397c20.653 0 37.384-16.645 37.384-37.299 0-20.649-16.731-37.296-37.384-37.296H321.03c-68.582 0-124.352-55.77-124.352-124.267V321.421c0-68.496 55.77-124.267 124.352-124.267h382.289c68.582 0 124.352 55.771 124.352 124.267V524.72c0 20.654 16.736 37.299 37.385 37.299 20.654 0 37.384-16.645 37.384-37.299V320.549c-.085-109.8-89.321-198.946-199.121-198.946zm0 0",
            fill: "currentColor",
          }),
        ]),
      Qo = () =>
        fl(
          "svg",
          { width: "16", height: "16", ariaHidden: "true" },
          fl("path", {
            d: "M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z",
            fill: "currentColor",
          })
        ),
      Ko = () =>
        fl(
          "svg",
          { viewBox: "0 0 1024 1024", width: "24", height: "24" },
          fl("path", {
            d: "M810.667 213.333a64 64 0 0 1 64 64V704a64 64 0 0 1-64 64H478.336l-146.645 96.107a21.333 21.333 0 0 1-33.024-17.856V768h-85.334a64 64 0 0 1-64-64V277.333a64 64 0 0 1 64-64h597.334zm0 64H213.333V704h149.334v63.296L459.243 704h351.424V277.333zm-271.36 213.334v64h-176.64v-64h176.64zm122.026-128v64H362.667v-64h298.666z",
            fill: "currentColor",
          })
        ),
      Go = () =>
        fl(
          "svg",
          { viewBox: "0 0 1024 1024", width: "24", height: "24" },
          fl("path", {
            d: "M813.039 318.772L480.53 651.278H360.718V531.463L693.227 198.961C697.904 194.284 704.027 192 710.157 192C716.302 192 722.436 194.284 727.114 198.961L813.039 284.88C817.72 289.561 820 295.684 820 301.825C820 307.95 817.72 314.093 813.039 318.772ZM710.172 261.888L420.624 551.431V591.376H460.561L750.109 301.825L710.172 261.888ZM490.517 291.845H240.906V771.09H720.156V521.479C720.156 504.947 733.559 491.529 750.109 491.529C766.653 491.529 780.063 504.947 780.063 521.479V791.059C780.063 813.118 762.18 831 740.125 831H220.937C198.882 831 181 813.118 181 791.059V271.872C181 249.817 198.882 231.935 220.937 231.935H490.517C507.06 231.935 520.47 245.352 520.47 261.888C520.47 278.424 507.06 291.845 490.517 291.845Z",
            fill: "currentColor",
          })
        ),
      Jo = () =>
        fl(
          "svg",
          {
            class: "verified-icon",
            viewBox: "0 0 1024 1024",
            width: "14",
            height: "14",
          },
          fl("path", {
            d: "m894.4 461.56-54.4-63.2c-10.4-12-18.8-34.4-18.8-50.4v-68c0-42.4-34.8-77.2-77.2-77.2h-68c-15.6 0-38.4-8.4-50.4-18.8l-63.2-54.4c-27.6-23.6-72.8-23.6-100.8 0l-62.8 54.8c-12 10-34.8 18.4-50.4 18.4h-69.2c-42.4 0-77.2 34.8-77.2 77.2v68.4c0 15.6-8.4 38-18.4 50l-54 63.6c-23.2 27.6-23.2 72.4 0 100l54 63.6c10 12 18.4 34.4 18.4 50v68.4c0 42.4 34.8 77.2 77.2 77.2h69.2c15.6 0 38.4 8.4 50.4 18.8l63.2 54.4c27.6 23.6 72.8 23.6 100.8 0l63.2-54.4c12-10.4 34.4-18.8 50.4-18.8h68c42.4 0 77.2-34.8 77.2-77.2v-68c0-15.6 8.4-38.4 18.8-50.4l54.4-63.2c23.2-27.6 23.2-73.2-.4-100.8zm-216-25.2-193.2 193.2a30 30 0 0 1-42.4 0l-96.8-96.8a30.16 30.16 0 0 1 0-42.4c11.6-11.6 30.8-11.6 42.4 0l75.6 75.6 172-172c11.6-11.6 30.8-11.6 42.4 0 11.6 11.6 11.6 30.8 0 42.4z",
            fill: "#27ae60",
          })
        ),
      Xo = (e) => {
        let { size: t } = e;
        return fl(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 100 100",
            preserveAspectRatio: "xMidYMid",
          },
          fl(
            "circle",
            {
              cx: 50,
              cy: 50,
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "4",
              r: "40",
              "stroke-dasharray": "85 30",
            },
            fl("animateTransform", {
              attributeName: "transform",
              type: "rotate",
              repeatCount: "indefinite",
              dur: "1s",
              values: "0 50 50;360 50 50",
              keyTimes: "0;1",
            })
          )
        );
      },
      Yo = () =>
        fl(
          "svg",
          { width: 24, height: 24, fill: "currentcolor", viewBox: "0 0 24 24" },
          [
            fl("path", {
              style: "transform: translateY(0.5px)",
              d: "M18.968 10.5H15.968V11.484H17.984V12.984H15.968V15H14.468V9H18.968V10.5V10.5ZM8.984 9C9.26533 9 9.49967 9.09367 9.687 9.281C9.87433 9.46833 9.968 9.70267 9.968 9.984V10.5H6.499V13.5H8.468V12H9.968V14.016C9.968 14.2973 9.87433 14.5317 9.687 14.719C9.49967 14.9063 9.26533 15 8.984 15H5.984C5.70267 15 5.46833 14.9063 5.281 14.719C5.09367 14.5317 5 14.2973 5 14.016V9.985C5 9.70367 5.09367 9.46933 5.281 9.282C5.46833 9.09467 5.70267 9.001 5.984 9.001H8.984V9ZM11.468 9H12.968V15H11.468V9V9Z",
            }),
            fl("path", {
              d: "M18.5 3H5.75C3.6875 3 2 4.6875 2 6.75V18C2 20.0625 3.6875 21.75 5.75 21.75H18.5C20.5625 21.75 22.25 20.0625 22.25 18V6.75C22.25 4.6875 20.5625 3 18.5 3ZM20.75 18C20.75 19.2375 19.7375 20.25 18.5 20.25H5.75C4.5125 20.25 3.5 19.2375 3.5 18V6.75C3.5 5.5125 4.5125 4.5 5.75 4.5H18.5C19.7375 4.5 20.75 5.5125 20.75 6.75V18Z",
            }),
          ]
        );
    e.commentCount = Vo;
    let es = null;
    const ts = () => es || (es = zi("WALINE_LIKE", []));
    let ns = null;
    var rs =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : {},
      ls = {},
      is = {},
      os = {},
      ss =
        (rs && rs.__awaiter) ||
        function (e, t, n, r) {
          return new (n || (n = Promise))(function (l, i) {
            function o(e) {
              try {
                a(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              try {
                a(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function a(e) {
              var t;
              e.done
                ? l(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(o, s);
            }
            a((r = r.apply(e, t || [])).next());
          });
        },
      as =
        (rs && rs.__generator) ||
        function (e, t) {
          var n,
            r,
            l,
            i,
            o = {
              label: 0,
              sent: function () {
                if (1 & l[0]) throw l[1];
                return l[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: s(0), throw: s(1), return: s(2) }),
            "function" == typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function s(i) {
            return function (s) {
              return (function (i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; o; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (l =
                          2 & i[0]
                            ? r.return
                            : i[0]
                            ? r.throw || ((l = r.return) && l.call(r), 0)
                            : r.next) &&
                        !(l = l.call(r, i[1])).done)
                    )
                      return l;
                    switch (((r = 0), l && (i = [2 & i[0], l.value]), i[0])) {
                      case 0:
                      case 1:
                        l = i;
                        break;
                      case 4:
                        return o.label++, { value: i[1], done: !1 };
                      case 5:
                        o.label++, (r = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = o.ops.pop()), o.trys.pop();
                        continue;
                      default:
                        if (
                          !(
                            (l = (l = o.trys).length > 0 && l[l.length - 1]) ||
                            (6 !== i[0] && 2 !== i[0])
                          )
                        ) {
                          o = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!l || (i[1] > l[0] && i[1] < l[3]))
                        ) {
                          o.label = i[1];
                          break;
                        }
                        if (6 === i[0] && o.label < l[1]) {
                          (o.label = l[1]), (l = i);
                          break;
                        }
                        if (l && o.label < l[2]) {
                          (o.label = l[2]), o.ops.push(i);
                          break;
                        }
                        l[2] && o.ops.pop(), o.trys.pop();
                        continue;
                    }
                    i = t.call(e, o);
                  } catch (e) {
                    (i = [6, e]), (r = 0);
                  } finally {
                    n = l = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, s]);
            };
          }
        };
    Object.defineProperty(os, "__esModule", { value: !0 }),
      (os.ReCaptchaInstance = void 0);
    var cs = (function () {
      function e(e, t, n) {
        (this.siteKey = e),
          (this.recaptchaID = t),
          (this.recaptcha = n),
          (this.styleContainer = null);
      }
      return (
        (e.prototype.execute = function (e) {
          return ss(this, void 0, void 0, function () {
            return as(this, function (t) {
              return [
                2,
                this.recaptcha.enterprise
                  ? this.recaptcha.enterprise.execute(this.recaptchaID, {
                      action: e,
                    })
                  : this.recaptcha.execute(this.recaptchaID, { action: e }),
              ];
            });
          });
        }),
        (e.prototype.getSiteKey = function () {
          return this.siteKey;
        }),
        (e.prototype.hideBadge = function () {
          null === this.styleContainer &&
            ((this.styleContainer = document.createElement("style")),
            (this.styleContainer.innerHTML =
              ".grecaptcha-badge{visibility:hidden !important;}"),
            document.head.appendChild(this.styleContainer));
        }),
        (e.prototype.showBadge = function () {
          null !== this.styleContainer &&
            (document.head.removeChild(this.styleContainer),
            (this.styleContainer = null));
        }),
        e
      );
    })();
    (os.ReCaptchaInstance = cs),
      Object.defineProperty(is, "__esModule", { value: !0 }),
      (is.getInstance = is.load = void 0);
    var us,
      ps = os;
    !(function (e) {
      (e[(e.NOT_LOADED = 0)] = "NOT_LOADED"),
        (e[(e.LOADING = 1)] = "LOADING"),
        (e[(e.LOADED = 2)] = "LOADED");
    })(us || (us = {}));
    var ds = (function () {
      function e() {}
      return (
        (e.load = function (t, n) {
          if ((void 0 === n && (n = {}), "undefined" == typeof document))
            return Promise.reject(
              new Error("This is a library for the browser!")
            );
          if (e.getLoadingState() === us.LOADED)
            return e.instance.getSiteKey() === t
              ? Promise.resolve(e.instance)
              : Promise.reject(
                  new Error("reCAPTCHA already loaded with different site key!")
                );
          if (e.getLoadingState() === us.LOADING)
            return t !== e.instanceSiteKey
              ? Promise.reject(
                  new Error("reCAPTCHA already loaded with different site key!")
                )
              : new Promise(function (t, n) {
                  e.successfulLoadingConsumers.push(function (e) {
                    return t(e);
                  }),
                    e.errorLoadingRunnable.push(function (e) {
                      return n(e);
                    });
                });
          (e.instanceSiteKey = t), e.setLoadingState(us.LOADING);
          var r = new e();
          return new Promise(function (l, i) {
            r.loadScript(
              t,
              n.useRecaptchaNet || !1,
              n.useEnterprise || !1,
              n.renderParameters ? n.renderParameters : {},
              n.customUrl
            )
              .then(function () {
                e.setLoadingState(us.LOADED);
                var i = r.doExplicitRender(
                    grecaptcha,
                    t,
                    n.explicitRenderParameters
                      ? n.explicitRenderParameters
                      : {},
                    n.useEnterprise || !1
                  ),
                  o = new ps.ReCaptchaInstance(t, i, grecaptcha);
                e.successfulLoadingConsumers.forEach(function (e) {
                  return e(o);
                }),
                  (e.successfulLoadingConsumers = []),
                  n.autoHideBadge && o.hideBadge(),
                  (e.instance = o),
                  l(o);
              })
              .catch(function (t) {
                e.errorLoadingRunnable.forEach(function (e) {
                  return e(t);
                }),
                  (e.errorLoadingRunnable = []),
                  i(t);
              });
          });
        }),
        (e.getInstance = function () {
          return e.instance;
        }),
        (e.setLoadingState = function (t) {
          e.loadingState = t;
        }),
        (e.getLoadingState = function () {
          return null === e.loadingState ? us.NOT_LOADED : e.loadingState;
        }),
        (e.prototype.loadScript = function (t, n, r, l, i) {
          var o = this;
          void 0 === n && (n = !1),
            void 0 === r && (r = !1),
            void 0 === l && (l = {}),
            void 0 === i && (i = "");
          var s = document.createElement("script");
          s.setAttribute("recaptcha-v3-script", "");
          var a = "https://www.google.com/recaptcha/api.js";
          n &&
            (a = r
              ? "https://recaptcha.net/recaptcha/enterprise.js"
              : "https://recaptcha.net/recaptcha/api.js"),
            r && (a = "https://www.google.com/recaptcha/enterprise.js"),
            i && (a = i),
            l.render && (l.render = void 0);
          var c = this.buildQueryString(l);
          return (
            (s.src = a + "?render=explicit" + c),
            new Promise(function (t, n) {
              s.addEventListener(
                "load",
                o.waitForScriptToLoad(function () {
                  t(s);
                }, r),
                !1
              ),
                (s.onerror = function (t) {
                  e.setLoadingState(us.NOT_LOADED), n(t);
                }),
                document.head.appendChild(s);
            })
          );
        }),
        (e.prototype.buildQueryString = function (e) {
          return Object.keys(e).length < 1
            ? ""
            : "&" +
                Object.keys(e)
                  .filter(function (t) {
                    return !!e[t];
                  })
                  .map(function (t) {
                    return t + "=" + e[t];
                  })
                  .join("&");
        }),
        (e.prototype.waitForScriptToLoad = function (t, n) {
          var r = this;
          return function () {
            void 0 === window.grecaptcha
              ? setTimeout(function () {
                  r.waitForScriptToLoad(t, n);
                }, e.SCRIPT_LOAD_DELAY)
              : n
              ? window.grecaptcha.enterprise.ready(function () {
                  t();
                })
              : window.grecaptcha.ready(function () {
                  t();
                });
          };
        }),
        (e.prototype.doExplicitRender = function (e, t, n, r) {
          var l = {
            sitekey: t,
            badge: n.badge,
            size: n.size,
            tabindex: n.tabindex,
          };
          return n.container
            ? r
              ? e.enterprise.render(n.container, l)
              : e.render(n.container, l)
            : r
            ? e.enterprise.render(l)
            : e.render(l);
        }),
        (e.loadingState = null),
        (e.instance = null),
        (e.instanceSiteKey = null),
        (e.successfulLoadingConsumers = []),
        (e.errorLoadingRunnable = []),
        (e.SCRIPT_LOAD_DELAY = 25),
        e
      );
    })();
    (is.load = ds.load),
      (is.getInstance = ds.getInstance),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ReCaptchaInstance = e.getInstance = e.load = void 0);
        var t = is;
        Object.defineProperty(e, "load", {
          enumerable: !0,
          get: function () {
            return t.load;
          },
        }),
          Object.defineProperty(e, "getInstance", {
            enumerable: !0,
            get: function () {
              return t.getInstance;
            },
          });
        var n = os;
        Object.defineProperty(e, "ReCaptchaInstance", {
          enumerable: !0,
          get: function () {
            return n.ReCaptchaInstance;
          },
        });
      })(ls);
    const hs = {};
    let fs = null;
    const gs = () => fs ?? (fs = zi("WALINE_USER", {})),
      ms = { key: 0, class: "wl-reaction" },
      vs = ["textContent"],
      ys = { class: "wl-reaction-list" },
      ws = ["onClick"],
      bs = { class: "wl-reaction-img" },
      ks = ["src", "alt"],
      xs = ["textContent"],
      _s = ["textContent"];
    var $s = Wn({
        __name: "ArticleReaction",
        setup(e, t) {
          let { expose: n } = t;
          n();
          const r = ns ?? (ns = zi("WALINE_REACTION", {})),
            l = Fn("config"),
            i = Yt(-1),
            o = Yt([]),
            s = hl(() => l.value.locale),
            a = hl(() => l.value.reaction.length > 0),
            c = hl(() => {
              const { reaction: e, path: t } = l.value;
              return e.map((e, n) => ({
                icon: e,
                desc: s.value[`reaction${n}`],
                active: r.value[t] === n,
              }));
            });
          let u;
          return (
            Kn(() => {
              Dn(
                () => [l.value.serverURL, l.value.path],
                () => {
                  (async () => {
                    if (a.value) {
                      const {
                          serverURL: e,
                          lang: t,
                          path: n,
                          reaction: r,
                        } = l.value,
                        i = new AbortController();
                      u = i.abort.bind(i);
                      const s = await $({
                        serverURL: e,
                        lang: t,
                        paths: [n],
                        type: r.map((e, t) => `reaction${t}`),
                        signal: i.signal,
                      });
                      if (Array.isArray(s) || "number" == typeof s) return;
                      o.value = r.map((e, t) => s[`reaction${t}`]);
                    }
                  })();
                },
                { immediate: !0 }
              );
            }),
            Jn(() => {
              var e;
              return null === (e = u) || void 0 === e ? void 0 : e();
            }),
            (e, t) =>
              rn(c).length
                ? (Ur(),
                  Nr("div", ms, [
                    Zr(
                      "div",
                      {
                        class: "wl-reaction-title",
                        textContent: q(rn(s).reactionTitle),
                      },
                      null,
                      8,
                      vs
                    ),
                    Zr("ul", ys, [
                      (Ur(!0),
                      Nr(
                        Ir,
                        null,
                        rr(rn(c), (e, t) => {
                          let { active: n, icon: s, desc: a } = e;
                          return (
                            Ur(),
                            Nr(
                              "li",
                              {
                                key: t,
                                class: V(["wl-reaction-item", { active: n }]),
                                onClick: (e) =>
                                  (async (e) => {
                                    if (-1 === i.value) {
                                      const {
                                          serverURL: t,
                                          lang: n,
                                          path: s,
                                        } = l.value,
                                        a = r.value[s];
                                      (i.value = e),
                                        void 0 !== a &&
                                          (await C({
                                            serverURL: t,
                                            lang: n,
                                            path: s,
                                            type: `reaction${a}`,
                                            action: "desc",
                                          }),
                                          (o.value[a] = Math.max(
                                            o.value[a] - 1,
                                            0
                                          ))),
                                        a !== e &&
                                          (await C({
                                            serverURL: t,
                                            lang: n,
                                            path: s,
                                            type: `reaction${e}`,
                                          }),
                                          (o.value[e] = (o.value[e] || 0) + 1)),
                                        a === e
                                          ? delete r.value[s]
                                          : (r.value[s] = e),
                                        (i.value = -1);
                                    }
                                  })(t),
                              },
                              [
                                Zr("div", bs, [
                                  Zr("img", { src: s, alt: a }, null, 8, ks),
                                  i.value === t
                                    ? (Ur(),
                                      Vr(rn(Xo), {
                                        key: 0,
                                        class: "wl-reaction-loading",
                                      }))
                                    : (Ur(),
                                      Nr(
                                        "div",
                                        {
                                          key: 1,
                                          class: "wl-reaction-votes",
                                          textContent: q(o.value[t] || 0),
                                        },
                                        null,
                                        8,
                                        xs
                                      )),
                                ]),
                                Zr(
                                  "div",
                                  {
                                    class: "wl-reaction-text",
                                    textContent: q(a),
                                  },
                                  null,
                                  8,
                                  _s
                                ),
                              ],
                              10,
                              ws
                            )
                          );
                        }),
                        128
                      )),
                    ]),
                  ]))
                : Jr("v-if", !0)
          );
        },
      }),
      Cs = (e, t) => {
        const n = e.__vccOpts || e;
        for (const [e, r] of t) n[e] = r;
        return n;
      },
      Ss = Cs($s, [["__file", "ArticleReaction.vue"]]),
      As = new Map();
    function Rs(e) {
      var t = As.get(e);
      t && t.destroy();
    }
    function Es(e) {
      var t = As.get(e);
      t && t.update();
    }
    var Is = null;
    "undefined" == typeof window
      ? (((Is = function (e) {
          return e;
        }).destroy = function (e) {
          return e;
        }),
        (Is.update = function (e) {
          return e;
        }))
      : (((Is = function (e, t) {
          return (
            e &&
              Array.prototype.forEach.call(e.length ? e : [e], function (e) {
                return (function (e) {
                  if (
                    e &&
                    e.nodeName &&
                    "TEXTAREA" === e.nodeName &&
                    !As.has(e)
                  ) {
                    var t,
                      n = null,
                      r = window.getComputedStyle(e),
                      l =
                        ((t = e.value),
                        function () {
                          o({
                            testForHeightReduction:
                              "" === t || !e.value.startsWith(t),
                            restoreTextAlign: null,
                          }),
                            (t = e.value);
                        }),
                      i = function (t) {
                        e.removeEventListener("autosize:destroy", i),
                          e.removeEventListener("autosize:update", s),
                          e.removeEventListener("input", l),
                          window.removeEventListener("resize", s),
                          Object.keys(t).forEach(function (n) {
                            return (e.style[n] = t[n]);
                          }),
                          As.delete(e);
                      }.bind(e, {
                        height: e.style.height,
                        resize: e.style.resize,
                        textAlign: e.style.textAlign,
                        overflowY: e.style.overflowY,
                        overflowX: e.style.overflowX,
                        wordWrap: e.style.wordWrap,
                      });
                    e.addEventListener("autosize:destroy", i),
                      e.addEventListener("autosize:update", s),
                      e.addEventListener("input", l),
                      window.addEventListener("resize", s),
                      (e.style.overflowX = "hidden"),
                      (e.style.wordWrap = "break-word"),
                      As.set(e, { destroy: i, update: s }),
                      s();
                  }
                  function o(t) {
                    var l,
                      i,
                      s = t.restoreTextAlign,
                      a = void 0 === s ? null : s,
                      c = t.testForHeightReduction,
                      u = void 0 === c || c,
                      p = r.overflowY;
                    if (
                      0 !== e.scrollHeight &&
                      ("vertical" === r.resize
                        ? (e.style.resize = "none")
                        : "both" === r.resize &&
                          (e.style.resize = "horizontal"),
                      u &&
                        ((l = (function (e) {
                          for (
                            var t = [];
                            e &&
                            e.parentNode &&
                            e.parentNode instanceof Element;

                          )
                            e.parentNode.scrollTop &&
                              t.push([e.parentNode, e.parentNode.scrollTop]),
                              (e = e.parentNode);
                          return function () {
                            return t.forEach(function (e) {
                              var t = e[0],
                                n = e[1];
                              (t.style.scrollBehavior = "auto"),
                                (t.scrollTop = n),
                                (t.style.scrollBehavior = null);
                            });
                          };
                        })(e)),
                        (e.style.height = "")),
                      (i =
                        "content-box" === r.boxSizing
                          ? e.scrollHeight -
                            (parseFloat(r.paddingTop) +
                              parseFloat(r.paddingBottom))
                          : e.scrollHeight +
                            parseFloat(r.borderTopWidth) +
                            parseFloat(r.borderBottomWidth)),
                      "none" !== r.maxHeight && i > parseFloat(r.maxHeight)
                        ? ("hidden" === r.overflowY &&
                            (e.style.overflow = "scroll"),
                          (i = parseFloat(r.maxHeight)))
                        : "hidden" !== r.overflowY &&
                          (e.style.overflow = "hidden"),
                      (e.style.height = i + "px"),
                      a && (e.style.textAlign = a),
                      l && l(),
                      n !== i &&
                        (e.dispatchEvent(
                          new Event("autosize:resized", { bubbles: !0 })
                        ),
                        (n = i)),
                      p !== r.overflow && !a)
                    ) {
                      var d = r.textAlign;
                      "hidden" === r.overflow &&
                        (e.style.textAlign = "start" === d ? "end" : "start"),
                        o({ restoreTextAlign: d, testForHeightReduction: !0 });
                    }
                  }
                  function s() {
                    o({ testForHeightReduction: !0, restoreTextAlign: null });
                  }
                })(e);
              }),
            e
          );
        }).destroy = function (e) {
          return e && Array.prototype.forEach.call(e.length ? e : [e], Rs), e;
        }),
        (Is.update = function (e) {
          return e && Array.prototype.forEach.call(e.length ? e : [e], Es), e;
        }));
    var Ls = Is;
    const zs = ["data-index"],
      Os = ["src", "title", "onClick"];
    var js = Wn({
        __name: "ImageWall",
        props: {
          items: { default: () => [] },
          columnWidth: { default: 300 },
          gap: { default: 0 },
        },
        emits: ["insert"],
        setup(e, t) {
          let { expose: n } = t;
          const r = e;
          n();
          let l = null;
          const i = Yt(null),
            o = Yt({}),
            s = Yt([]),
            a = () => {
              const e = Math.floor(
                (i.value.getBoundingClientRect().width + r.gap) /
                  (r.columnWidth + r.gap)
              );
              return e > 0 ? e : 1;
            },
            c = async (e) => {
              var t;
              if (e >= r.items.length) return;
              await kn();
              const n = Array.from(
                (null === (t = i.value) || void 0 === t
                  ? void 0
                  : t.children) || []
              ).reduce((e, t) =>
                t.getBoundingClientRect().height <
                e.getBoundingClientRect().height
                  ? t
                  : e
              );
              s.value[Number(n.dataset.index)].push(e), await c(e + 1);
            },
            u = async function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (s.value.length === a() && !e) return;
              var t;
              s.value = ((t = a()), new Array(t).fill(null).map(() => []));
              const n = window.scrollY;
              await c(0), window.scrollTo({ top: n });
            },
            p = (e) => {
              o.value[e.target.src] = !0;
            };
          return (
            Kn(() => {
              u(!0),
                (l = new ResizeObserver(() => {
                  u();
                })),
                l.observe(i.value),
                Dn(
                  () => [r.items],
                  () => {
                    (o.value = {}), u(!0);
                  }
                ),
                Dn(
                  () => [r.columnWidth, r.gap],
                  () => {
                    u();
                  }
                );
            }),
            Gn(() => l.unobserve(i.value)),
            (t, n) => (
              Ur(),
              Nr(
                "div",
                {
                  ref_key: "wall",
                  ref: i,
                  class: "wl-gallery",
                  style: U({ gap: `${e.gap}px` }),
                },
                [
                  (Ur(!0),
                  Nr(
                    Ir,
                    null,
                    rr(
                      s.value,
                      (n, r) => (
                        Ur(),
                        Nr(
                          "div",
                          {
                            key: r,
                            class: "wl-gallery-column",
                            "data-index": r,
                            style: U({ gap: `${e.gap}px` }),
                          },
                          [
                            (Ur(!0),
                            Nr(
                              Ir,
                              null,
                              rr(
                                n,
                                (n) => (
                                  Ur(),
                                  Nr(
                                    Ir,
                                    { key: n },
                                    [
                                      o.value[e.items[n].src]
                                        ? Jr("v-if", !0)
                                        : (Ur(),
                                          Vr(rn(Xo), {
                                            key: 0,
                                            size: 36,
                                            style: { margin: "20px auto" },
                                          })),
                                      Zr(
                                        "img",
                                        {
                                          class: "wl-gallery-item",
                                          src: e.items[n].src,
                                          title: e.items[n].title,
                                          loading: "lazy",
                                          onLoad: p,
                                          onClick: (r) =>
                                            t.$emit(
                                              "insert",
                                              `![](${e.items[n].src})`
                                            ),
                                        },
                                        null,
                                        40,
                                        Os
                                      ),
                                    ],
                                    64
                                  )
                                )
                              ),
                              128
                            )),
                          ],
                          12,
                          zs
                        )
                      )
                    ),
                    128
                  )),
                ],
                4
              )
            )
          );
        },
      }),
      Ts = Cs(js, [["__file", "ImageWall.vue"]]);
    const Us = { class: "wl-comment" },
      Ps = { key: 0, class: "wl-login-info" },
      Ms = { class: "wl-avatar" },
      Fs = ["title"],
      Ns = ["title"],
      Vs = ["src"],
      Ds = ["title", "textContent"],
      Hs = { class: "wl-panel" },
      Bs = ["for", "textContent"],
      Ws = ["id", "onUpdate:modelValue", "name", "type"],
      qs = ["placeholder"],
      Zs = { class: "wl-preview" },
      Qs = Zr("hr", null, null, -1),
      Ks = ["innerHTML"],
      Gs = { class: "wl-footer" },
      Js = { class: "wl-actions" },
      Xs = {
        href: "https://guides.github.com/features/mastering-markdown/",
        title: "Markdown Guide",
        "aria-label": "Markdown is supported",
        class: "wl-action",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      Ys = ["title"],
      ea = ["title"],
      ta = ["title"],
      na = ["title"],
      ra = { class: "wl-info" },
      la = { class: "wl-text-number" },
      ia = { key: 0 },
      oa = ["textContent"],
      sa = ["textContent"],
      aa = ["disabled"],
      ca = ["placeholder"],
      ua = { key: 0, class: "wl-loading" },
      pa = { key: 0, class: "wl-tab-wrapper" },
      da = ["title", "onClick"],
      ha = ["src", "alt"],
      fa = { key: 0, class: "wl-tabs" },
      ga = ["onClick"],
      ma = ["src", "alt", "title"],
      va = ["title"];
    var ya = Wn({
        __name: "CommentBox",
        props: {
          edit: { default: null },
          rootId: { default: "" },
          replyId: { default: "" },
          replyUser: { default: "" },
        },
        emits: ["log", "cancelEdit", "cancelReply", "submit"],
        setup(e, t) {
          let { expose: n, emit: r } = t;
          const l = e;
          n();
          const i = Fn("config"),
            o = zi("WALINE_COMMENT_BOX_EDITOR", ""),
            s = zi("WALINE_USER_META", { nick: "", mail: "", link: "" }),
            a = gs(),
            c = Yt({}),
            u = Yt(null),
            p = Yt(null),
            d = Yt(null),
            h = Yt(null),
            f = Yt(null),
            g = Yt(null),
            m = Yt(null),
            v = Yt({ tabs: [], map: {} }),
            y = Yt(0),
            w = Yt(!1),
            b = Yt(!1),
            k = Yt(!1),
            x = Yt(""),
            _ = Yt(0),
            $ = Ft({ loading: !0, list: [] }),
            C = Yt(0),
            A = Yt(!1),
            E = Yt(""),
            I = Yt(!1),
            L = Yt(!1),
            z = hl(() => i.value.locale),
            O = hl(() => {
              var e;
              return Boolean(
                null === (e = a.value) || void 0 === e ? void 0 : e.token
              );
            }),
            j = hl(() => !1 !== i.value.imageUploader),
            T = (e) => {
              const t = u.value,
                n = t.selectionStart,
                r = t.selectionEnd || 0,
                l = t.scrollTop;
              (o.value =
                t.value.substring(0, n) +
                e +
                t.value.substring(r, t.value.length)),
                t.focus(),
                (t.selectionStart = n + e.length),
                (t.selectionEnd = n + e.length),
                (t.scrollTop = l);
            },
            U = (e) => {
              const t = e.key;
              (e.ctrlKey || e.metaKey) && "Enter" === t && D();
            },
            P = (e) => {
              const t = `![${i.value.locale.uploading} ${e.name}]()`;
              return (
                T(t),
                Promise.resolve()
                  .then(() => i.value.imageUploader(e))
                  .then((n) => {
                    o.value = o.value.replace(t, `\r\n![${e.name}](${n})`);
                  })
                  .catch((e) => {
                    alert(e.message), (o.value = o.value.replace(t, ""));
                  })
              );
            },
            M = (e) => {
              var t;
              if (null !== (t = e.dataTransfer) && void 0 !== t && t.items) {
                const t = Ji(e.dataTransfer.items);
                t && j.value && (P(t), e.preventDefault());
              }
            },
            F = (e) => {
              if (e.clipboardData) {
                const t = Ji(e.clipboardData.items);
                t && j.value && P(t);
              }
            },
            N = () => {
              const e = p.value;
              e.files &&
                j.value &&
                P(e.files[0]).then(() => {
                  e.value = "";
                });
            },
            D = async () => {
              var e, t, n;
              const {
                serverURL: p,
                lang: d,
                login: h,
                wordLimit: f,
                requiredMeta: g,
              } = i.value;
              let m = "";
              i.value.recaptchaV3Key &&
                (m = await ((e) => {
                  const t =
                    hs[e] ??
                    (hs[e] = ls.load(e, {
                      useRecaptchaNet: !0,
                      autoHideBadge: !0,
                    }));
                  return { execute: (e) => t.then((t) => t.execute(e)) };
                })(i.value.recaptchaV3Key).execute("social"));
              const y = await (async () => {
                  if (!navigator) return "";
                  const { userAgentData: e } = navigator;
                  let t = navigator.userAgent;
                  if (!e || "Windows" !== e.platform) return t;
                  const { platformVersion: n } = await e.getHighEntropyValues([
                    "platformVersion",
                  ]);
                  return n
                    ? (parseInt(n.split(".")[0]) >= 13 &&
                        (t = t.replace("Windows NT 10.0", "Windows NT 11.0")),
                      t)
                    : t;
                })(),
                w = {
                  comment: E.value,
                  nick: s.value.nick,
                  mail: s.value.mail,
                  link: s.value.link,
                  url: i.value.path,
                  recaptchaV3: m,
                  ua: y,
                };
              if (null !== (e = a.value) && void 0 !== e && e.token)
                (w.nick = a.value.display_name),
                  (w.mail = a.value.email),
                  (w.link = a.value.url);
              else {
                var b, k;
                if ("force" === h) return;
                if (g.indexOf("nick") > -1 && !w.nick)
                  return (
                    null !== (b = c.value.nick) && void 0 !== b && b.focus(),
                    alert(z.value.nickError)
                  );
                if (
                  (g.indexOf("mail") > -1 && !w.mail) ||
                  (w.mail &&
                    !/^\w(?:[\w._-]*\w)?@(?:\w(?:[\w-]*\w)?\.)*\w+$/.exec(
                      w.mail
                    ))
                )
                  return (
                    null !== (k = c.value.mail) && void 0 !== k && k.focus(),
                    alert(z.value.mailError)
                  );
                w.nick || (w.nick = z.value.anonymous);
              }
              if (!w.comment)
                return void (
                  null === (t = u.value) ||
                  void 0 === t ||
                  t.focus()
                );
              if (!A.value)
                return alert(
                  z.value.wordHint
                    .replace("$0", f[0].toString())
                    .replace("$1", f[1].toString())
                    .replace("$2", _.value.toString())
                );
              (w.comment = Fo(w.comment, v.value.map)),
                l.replyId &&
                  l.rootId &&
                  ((w.pid = l.replyId),
                  (w.rid = l.rootId),
                  (w.at = l.replyUser)),
                (I.value = !0);
              const $ = {
                serverURL: p,
                lang: d,
                token:
                  null === (n = a.value) || void 0 === n ? void 0 : n.token,
                comment: w,
              };
              (l.edit
                ? S({ objectId: l.edit.objectId, ...$ })
                : ((e) => {
                    let { serverURL: t, lang: n, token: r, comment: l } = e;
                    const i = { "Content-Type": "application/json" };
                    return (
                      r && (i.Authorization = `Bearer ${r}`),
                      fetch(`${t}/comment?lang=${n}`, {
                        method: "POST",
                        headers: i,
                        body: JSON.stringify(l),
                      }).then((e) => e.json())
                    );
                  })($)
              )
                .then((e) => {
                  var t;
                  if (((I.value = !1), e.errmsg)) return alert(e.errmsg);
                  r("submit", e.data),
                    (o.value = ""),
                    (x.value = ""),
                    l.replyId && r("cancelReply"),
                    (null === (t = l.edit) || void 0 === t
                      ? void 0
                      : t.objectId) && r("cancelEdit");
                })
                .catch((e) => {
                  (I.value = !1), alert(e.message);
                });
            },
            H = (e) => {
              e.preventDefault();
              const { lang: t, serverURL: n } = i.value;
              ((e) => {
                let { lang: t, serverURL: n } = e;
                const r = (window.innerWidth - 450) / 2,
                  l = (window.innerHeight - 450) / 2,
                  i = window.open(
                    `${n}/ui/login?lng=${encodeURIComponent(t)}`,
                    "_blank",
                    `width=450,height=450,left=${r},top=${l},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`
                  );
                return (
                  null != i &&
                    i.postMessage({ type: "TOKEN", data: null }, "*"),
                  new Promise((e) => {
                    const t = (n) => {
                      let { data: r } = n;
                      r &&
                        "object" == typeof r &&
                        "userInfo" === r.type &&
                        r.data.token &&
                        (null != i && i.close(),
                        window.removeEventListener("message", t),
                        e(r.data));
                    };
                    window.addEventListener("message", t);
                  })
                );
              })({ serverURL: n, lang: t }).then((e) => {
                (a.value = e),
                  (e.remember ? localStorage : sessionStorage).setItem(
                    "WALINE_USER",
                    JSON.stringify(e)
                  ),
                  r("log");
              });
            },
            B = () => {
              (a.value = {}),
                localStorage.setItem("WALINE_USER", "null"),
                sessionStorage.setItem("WALINE_USER", "null"),
                r("log");
            },
            W = (e) => {
              e.preventDefault();
              const { lang: t, serverURL: n } = i.value,
                r = (window.innerWidth - 800) / 2,
                l = (window.innerHeight - 800) / 2,
                o = new URLSearchParams({ lng: t, token: a.value.token }),
                s = window.open(
                  `${n}/ui/profile?${o.toString()}`,
                  "_blank",
                  `width=800,height=800,left=${r},top=${l},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`
                );
              null == s ||
                s.postMessage({ type: "TOKEN", data: a.value.token }, "*");
            },
            Z = (e) => {
              var t, n, r, l;
              (null !== (t = d.value) &&
                void 0 !== t &&
                t.contains(e.target)) ||
                (null !== (n = h.value) &&
                  void 0 !== n &&
                  n.contains(e.target)) ||
                (w.value = !1),
                (null === (r = f.value) || void 0 === r
                  ? void 0
                  : r.contains(e.target)) ||
                  (null === (l = g.value) || void 0 === l
                    ? void 0
                    : l.contains(e.target)) ||
                  (b.value = !1);
            },
            Q = async (e) => {
              var t;
              const {
                  scrollTop: n,
                  clientHeight: r,
                  scrollHeight: l,
                } = e.target,
                o = (r + n) / l,
                s = i.value.search,
                a =
                  (null === (t = m.value) || void 0 === t ? void 0 : t.value) ||
                  "";
              o < 0.9 ||
                $.loading ||
                L.value ||
                (($.loading = !0),
                (s.more && $.list.length
                  ? await s.more(a, $.list.length)
                  : await s.search(a)
                ).length
                  ? ($.list = [
                      ...$.list,
                      ...(s.more && $.list.length
                        ? await s.more(a, $.list.length)
                        : await s.search(a)),
                    ])
                  : (L.value = !0),
                ($.loading = !1),
                setTimeout(() => {
                  e.target.scrollTop = n;
                }, 50));
            },
            K = (function (e) {
              return ei(
                (function (e) {
                  let t,
                    n,
                    r =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    l = Xl;
                  const i = (e) => {
                    clearTimeout(e), l(), (l = Xl);
                  };
                  return (o) => {
                    const s = Yl(e),
                      a = Yl(r.maxWait);
                    return (
                      t && i(t),
                      s <= 0 || (void 0 !== a && a <= 0)
                        ? (n && (i(n), (n = null)), Promise.resolve(o()))
                        : new Promise((e, c) => {
                            (l = r.rejectOnCancel ? c : e),
                              a &&
                                !n &&
                                (n = setTimeout(() => {
                                  t && i(t), (n = null), e(o());
                                }, a)),
                              (t = setTimeout(() => {
                                n && i(n), (n = null), e(o());
                              }, s));
                          })
                    );
                  };
                })(
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 200,
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {}
                ),
                e
              );
            })((e) => {
              ($.list = []), (L.value = !1), Q(e);
            }, 300);
          Dn(
            [i, _],
            (e) => {
              let [t, n] = e;
              const { wordLimit: r } = t;
              r
                ? n < r[0] && 0 !== r[0]
                  ? ((C.value = r[0]), (A.value = !1))
                  : n > r[1]
                  ? ((C.value = r[1]), (A.value = !1))
                  : ((C.value = r[1]), (A.value = !0))
                : ((C.value = 0), (A.value = !0));
            },
            { immediate: !0 }
          );
          const G = (e) => {
            let { data: t } = e;
            t &&
              "profile" === t.type &&
              ((a.value = { ...a.value, ...t.data }),
              [localStorage, sessionStorage]
                .filter((e) => e.getItem("WALINE_USER"))
                .forEach((e) => e.setItem("WALINE_USER", JSON.stringify(a))));
          };
          return (
            Kn(() => {
              var e;
              document.body.addEventListener("click", Z),
                window.addEventListener("message", G),
                null !== (e = l.edit) &&
                  void 0 !== e &&
                  e.objectId &&
                  (o.value = l.edit.orig),
                Dn(b, async (e) => {
                  if (!e) return;
                  const t = i.value.search;
                  m.value && (m.value.value = ""),
                    ($.loading = !0),
                    ($.list = t.default
                      ? await t.default()
                      : await t.search("")),
                    ($.loading = !1);
                }),
                Dn(
                  () => o.value,
                  (e) => {
                    const { highlighter: t, texRenderer: n } = i.value;
                    (E.value = e),
                      (x.value = ((e, t) => {
                        let { emojiMap: n, highlighter: r, texRenderer: l } = t;
                        if (
                          (To.setOptions({
                            highlight: r || void 0,
                            breaks: !0,
                            smartLists: !0,
                            smartypants: !0,
                          }),
                          l)
                        ) {
                          const e = ((e) => [
                            {
                              name: "blockMath",
                              level: "block",
                              tokenizer(t) {
                                const n = Mo.exec(t);
                                if (null !== n)
                                  return {
                                    type: "html",
                                    raw: n[0],
                                    text: e(!0, n[1]),
                                  };
                              },
                            },
                            {
                              name: "inlineMath",
                              level: "inline",
                              start(e) {
                                const t = e.search(Uo);
                                return -1 !== t ? t : e.length;
                              },
                              tokenizer(t) {
                                const n = Po.exec(t);
                                if (null !== n)
                                  return {
                                    type: "html",
                                    raw: n[0],
                                    text: e(!1, n[1]),
                                  };
                              },
                            },
                          ])(l);
                          To.use({ extensions: e });
                        }
                        return To.parse(Fo(e, n));
                      })(e, {
                        emojiMap: v.value.map,
                        highlighter: t,
                        texRenderer: n,
                      })),
                      (_.value = ((e) => {
                        var t, n;
                        return (
                          ((null ===
                            (t = ((e) =>
                              e.match(
                                /[\w\d\s,.\u00C0-\u024F\u0400-\u04FF]+/giu
                              ))(e)) || void 0 === t
                            ? void 0
                            : t.reduce(
                                (e, t) =>
                                  e +
                                  ("" === t.trim()
                                    ? 0
                                    : t.trim().split(/\s+/u).length),
                                0
                              )) || 0) +
                          ((null ===
                            (n = ((e) => e.match(/[\u4E00-\u9FD5]/gu))(e)) ||
                          void 0 === n
                            ? void 0
                            : n.length) || 0)
                        );
                      })(e)),
                      e ? Ls(u.value) : Ls.destroy(u.value);
                  },
                  { immediate: !0 }
                ),
                Dn(
                  () => i.value.emoji,
                  (e) => {
                    return ((t = e),
                    Promise.all(
                      t.map((e) =>
                        "string" == typeof e
                          ? ((e) => {
                              const t = zi("WALINE_EMOJI", {}),
                                n = Boolean(/@[0-9]+\.[0-9]+\.[0-9]+/.test(e));
                              if (n) {
                                const n = t.value[e];
                                if (n) return Promise.resolve(n);
                              }
                              return fetch(`${e}/info.json`)
                                .then((e) => e.json())
                                .then((r) => {
                                  const l = { folder: e, ...r };
                                  return n && (t.value[e] = l), l;
                                });
                            })(R(e))
                          : Promise.resolve(e)
                      )
                    ).then((e) => {
                      const t = { tabs: [], map: {} };
                      return (
                        e.forEach((e) => {
                          const {
                            name: n,
                            folder: r,
                            icon: l,
                            prefix: i,
                            type: o,
                            items: s,
                          } = e;
                          t.tabs.push({
                            name: n,
                            icon: Zi(l, r, i, o),
                            items: s.map((e) => {
                              const n = `${i || ""}${e}`;
                              return (t.map[n] = Zi(e, r, i, o)), n;
                            }),
                          });
                        }),
                        t
                      );
                    })).then((e) => {
                      v.value = e;
                    });
                    var t;
                  },
                  { immediate: !0 }
                );
            }),
            Jn(() => {
              document.body.removeEventListener("click", Z),
                window.removeEventListener("message", G);
            }),
            (t, n) => {
              var r, l;
              return (
                Ur(),
                Nr("div", Us, [
                  "disable" === rn(i).login ||
                  !rn(O) ||
                  (null !== (r = e.edit) && void 0 !== r && r.objectId)
                    ? Jr("v-if", !0)
                    : (Ur(),
                      Nr("div", Ps, [
                        Zr("div", Ms, [
                          Zr(
                            "button",
                            {
                              type: "submit",
                              class: "wl-logout-btn",
                              title: rn(z).logout,
                              onClick: B,
                            },
                            [Qr(rn(Do), { size: 14 })],
                            8,
                            Fs
                          ),
                          Zr(
                            "a",
                            {
                              href: "#",
                              class: "wl-login-nick",
                              "aria-label": "Profile",
                              title: rn(z).profile,
                              onClick: W,
                            },
                            [
                              Zr(
                                "img",
                                { src: rn(a).avatar, alt: "avatar" },
                                null,
                                8,
                                Vs
                              ),
                            ],
                            8,
                            Ns
                          ),
                        ]),
                        Zr(
                          "a",
                          {
                            href: "#",
                            class: "wl-login-nick",
                            "aria-label": "Profile",
                            title: rn(z).profile,
                            onClick: W,
                            textContent: q(rn(a).display_name),
                          },
                          null,
                          8,
                          Ds
                        ),
                      ])),
                  Zr("div", Hs, [
                    "force" !== rn(i).login && rn(i).meta.length && !rn(O)
                      ? (Ur(),
                        Nr(
                          "div",
                          {
                            key: 0,
                            class: V(["wl-header", `item${rn(i).meta.length}`]),
                          },
                          [
                            (Ur(!0),
                            Nr(
                              Ir,
                              null,
                              rr(
                                rn(i).meta,
                                (e) => (
                                  Ur(),
                                  Nr(
                                    "div",
                                    { key: e, class: "wl-header-item" },
                                    [
                                      Zr(
                                        "label",
                                        {
                                          for: `wl-${e}`,
                                          textContent: q(
                                            rn(z)[e] +
                                              (rn(i).requiredMeta.includes(e) ||
                                              !rn(i).requiredMeta.length
                                                ? ""
                                                : `(${rn(z).optional})`)
                                          ),
                                        },
                                        null,
                                        8,
                                        Bs
                                      ),
                                      Xn(
                                        Zr(
                                          "input",
                                          {
                                            id: `wl-${e}`,
                                            ref_for: !0,
                                            ref: (t) => {
                                              t && (c.value[e] = t);
                                            },
                                            "onUpdate:modelValue": (t) =>
                                              (rn(s)[e] = t),
                                            class: V(["wl-input", `wl-${e}`]),
                                            name: e,
                                            type:
                                              "mail" === e ? "email" : "text",
                                          },
                                          null,
                                          10,
                                          Ws
                                        ),
                                        [[Hl, rn(s)[e]]]
                                      ),
                                    ]
                                  )
                                )
                              ),
                              128
                            )),
                          ],
                          2
                        ))
                      : Jr("v-if", !0),
                    Xn(
                      Zr(
                        "textarea",
                        {
                          id: "wl-edit",
                          ref_key: "editorRef",
                          ref: u,
                          "onUpdate:modelValue":
                            n[0] ||
                            (n[0] = (e) => (Xt(o) ? (o.value = e) : null)),
                          class: "wl-editor",
                          placeholder: e.replyUser
                            ? `@${e.replyUser}`
                            : rn(z).placeholder,
                          onKeydown: U,
                          onDrop: M,
                          onPaste: F,
                        },
                        null,
                        40,
                        qs
                      ),
                      [[Tl, rn(o)]]
                    ),
                    Xn(
                      Zr(
                        "div",
                        Zs,
                        [
                          Qs,
                          Zr("h4", null, q(rn(z).preview) + ":", 1),
                          Zr(
                            "div",
                            { class: "wl-content", innerHTML: x.value },
                            null,
                            8,
                            Ks
                          ),
                        ],
                        512
                      ),
                      [[Wl, k.value]]
                    ),
                    Zr("div", Gs, [
                      Zr("div", Js, [
                        Zr("a", Xs, [Qr(rn(Qo))]),
                        Xn(
                          Zr(
                            "button",
                            {
                              ref_key: "emojiButtonRef",
                              ref: d,
                              type: "button",
                              class: V(["wl-action", { active: w.value }]),
                              title: rn(z).emoji,
                              onClick:
                                n[1] || (n[1] = (e) => (w.value = !w.value)),
                            },
                            [Qr(rn(Bo))],
                            10,
                            Ys
                          ),
                          [[Wl, v.value.tabs.length]]
                        ),
                        rn(i).search
                          ? (Ur(),
                            Nr(
                              "button",
                              {
                                key: 0,
                                ref_key: "gifButtonRef",
                                ref: f,
                                type: "button",
                                class: V(["wl-action", { active: b.value }]),
                                title: rn(z).gif,
                                onClick:
                                  n[2] || (n[2] = (e) => (b.value = !b.value)),
                              },
                              [Qr(rn(Yo))],
                              10,
                              ea
                            ))
                          : Jr("v-if", !0),
                        Zr(
                          "input",
                          {
                            id: "wl-image-upload",
                            ref_key: "imageUploadRef",
                            ref: p,
                            class: "upload",
                            type: "file",
                            accept: ".png,.jpg,.jpeg,.webp,.bmp,.gif",
                            onChange: N,
                          },
                          null,
                          544
                        ),
                        rn(j)
                          ? (Ur(),
                            Nr(
                              "label",
                              {
                                key: 1,
                                for: "wl-image-upload",
                                class: "wl-action",
                                title: rn(z).uploadImage,
                              },
                              [Qr(rn(Wo))],
                              8,
                              ta
                            ))
                          : Jr("v-if", !0),
                        Zr(
                          "button",
                          {
                            type: "button",
                            class: V(["wl-action", { active: k.value }]),
                            title: rn(z).preview,
                            onClick:
                              n[3] || (n[3] = (e) => (k.value = !k.value)),
                          },
                          [Qr(rn(Zo))],
                          10,
                          na
                        ),
                      ]),
                      Zr("div", ra, [
                        Zr("div", la, [
                          Gr(q(_.value) + " ", 1),
                          rn(i).wordLimit
                            ? (Ur(),
                              Nr("span", ia, [
                                Gr("  /  "),
                                Zr(
                                  "span",
                                  {
                                    class: V({ illegal: !A.value }),
                                    textContent: q(C.value),
                                  },
                                  null,
                                  10,
                                  oa
                                ),
                              ]))
                            : Jr("v-if", !0),
                          Gr("  " + q(rn(z).word), 1),
                        ]),
                        "disable" === rn(i).login || rn(O)
                          ? Jr("v-if", !0)
                          : (Ur(),
                            Nr(
                              "button",
                              {
                                key: 0,
                                type: "button",
                                class: "wl-btn",
                                onClick: H,
                                textContent: q(rn(z).login),
                              },
                              null,
                              8,
                              sa
                            )),
                        "force" !== rn(i).login || rn(O)
                          ? (Ur(),
                            Nr(
                              "button",
                              {
                                key: 1,
                                type: "submit",
                                class: "primary wl-btn",
                                title: "Cmd|Ctrl + Enter",
                                disabled: I.value,
                                onClick: D,
                              },
                              [
                                I.value
                                  ? (Ur(), Vr(rn(Xo), { key: 0, size: 16 }))
                                  : (Ur(),
                                    Nr(
                                      Ir,
                                      { key: 1 },
                                      [Gr(q(rn(z).submit), 1)],
                                      64
                                    )),
                              ],
                              8,
                              aa
                            ))
                          : Jr("v-if", !0),
                      ]),
                      Zr(
                        "div",
                        {
                          ref_key: "gifPopupRef",
                          ref: g,
                          class: V(["wl-gif-popup", { display: b.value }]),
                        },
                        [
                          Zr(
                            "input",
                            {
                              ref_key: "gifSearchInputRef",
                              ref: m,
                              type: "text",
                              placeholder: rn(z).gifSearchPlaceholder,
                              onInput:
                                n[4] ||
                                (n[4] = function () {
                                  return rn(K) && rn(K)(...arguments);
                                }),
                            },
                            null,
                            40,
                            ca
                          ),
                          Qr(
                            Ts,
                            {
                              items: $.list,
                              "column-width": 200,
                              gap: 6,
                              onInsert: n[5] || (n[5] = (e) => T(e)),
                              onScroll: Q,
                            },
                            null,
                            8,
                            ["items"]
                          ),
                          $.loading
                            ? (Ur(), Nr("div", ua, [Qr(rn(Xo), { size: 30 })]))
                            : Jr("v-if", !0),
                        ],
                        2
                      ),
                      Zr(
                        "div",
                        {
                          ref_key: "emojiPopupRef",
                          ref: h,
                          class: V(["wl-emoji-popup", { display: w.value }]),
                        },
                        [
                          (Ur(!0),
                          Nr(
                            Ir,
                            null,
                            rr(
                              v.value.tabs,
                              (e, t) => (
                                Ur(),
                                Nr(
                                  Ir,
                                  { key: e.name },
                                  [
                                    t === y.value
                                      ? (Ur(),
                                        Nr("div", pa, [
                                          (Ur(!0),
                                          Nr(
                                            Ir,
                                            null,
                                            rr(
                                              e.items,
                                              (e) => (
                                                Ur(),
                                                Nr(
                                                  "button",
                                                  {
                                                    key: e,
                                                    type: "button",
                                                    title: e,
                                                    onClick: (t) => T(`:${e}:`),
                                                  },
                                                  [
                                                    w.value
                                                      ? (Ur(),
                                                        Nr(
                                                          "img",
                                                          {
                                                            key: 0,
                                                            class: "wl-emoji",
                                                            src: v.value.map[e],
                                                            alt: e,
                                                            loading: "lazy",
                                                            referrerPolicy:
                                                              "no-referrer",
                                                          },
                                                          null,
                                                          8,
                                                          ha
                                                        ))
                                                      : Jr("v-if", !0),
                                                  ],
                                                  8,
                                                  da
                                                )
                                              )
                                            ),
                                            128
                                          )),
                                        ]))
                                      : Jr("v-if", !0),
                                  ],
                                  64
                                )
                              )
                            ),
                            128
                          )),
                          v.value.tabs.length > 1
                            ? (Ur(),
                              Nr("div", fa, [
                                (Ur(!0),
                                Nr(
                                  Ir,
                                  null,
                                  rr(
                                    v.value.tabs,
                                    (e, t) => (
                                      Ur(),
                                      Nr(
                                        "button",
                                        {
                                          key: e.name,
                                          type: "button",
                                          class: V([
                                            "wl-tab",
                                            { active: y.value === t },
                                          ]),
                                          onClick: (e) => (y.value = t),
                                        },
                                        [
                                          Zr(
                                            "img",
                                            {
                                              class: "wl-emoji",
                                              src: e.icon,
                                              alt: e.name,
                                              title: e.name,
                                              loading: "lazy",
                                              referrerPolicy: "no-referrer",
                                            },
                                            null,
                                            8,
                                            ma
                                          ),
                                        ],
                                        10,
                                        ga
                                      )
                                    )
                                  ),
                                  128
                                )),
                              ]))
                            : Jr("v-if", !0),
                        ],
                        2
                      ),
                    ]),
                  ]),
                  e.replyId ||
                  (null !== (l = e.edit) && void 0 !== l && l.objectId)
                    ? (Ur(),
                      Nr(
                        "button",
                        {
                          key: 1,
                          type: "button",
                          class: "wl-close",
                          title: rn(z).cancelReply,
                          onClick:
                            n[6] ||
                            (n[6] = (n) =>
                              t.$emit(
                                e.replyId ? "cancelReply" : "cancelEdit"
                              )),
                        },
                        [Qr(rn(Do), { size: 24 })],
                        8,
                        va
                      ))
                    : Jr("v-if", !0),
                ])
              );
            }
          );
        },
      }),
      wa = Cs(ya, [["__file", "CommentBox.vue"]]);
    const ba = ["id"],
      ka = { class: "wl-user", "aria-hidden": "true" },
      xa = ["src"],
      _a = { class: "wl-card" },
      $a = { class: "wl-head" },
      Ca = ["href"],
      Sa = { key: 1, class: "wl-nick" },
      Aa = ["textContent"],
      Ra = ["textContent"],
      Ea = ["textContent"],
      Ia = ["textContent"],
      La = ["textContent"],
      za = { class: "wl-comment-actions" },
      Oa = ["title"],
      ja = ["textContent"],
      Ta = ["title"],
      Ua = { class: "wl-meta", "aria-hidden": "true" },
      Pa = ["data-value", "textContent"],
      Ma = ["data-value", "textContent"],
      Fa = ["data-value", "textContent"],
      Na = ["innerHTML"],
      Va = { key: 1, class: "wl-admin-actions" },
      Da = { class: "wl-comment-status" },
      Ha = ["disabled", "onClick", "textContent"],
      Ba = { key: 3, class: "wl-quote" };
    var Wa = Cs(
      Wn({
        __name: "CommentCard",
        props: {
          comment: null,
          edit: { default: null },
          rootId: null,
          reply: { default: null },
        },
        emits: [
          "log",
          "submit",
          "delete",
          "edit",
          "like",
          "status",
          "sticky",
          "reply",
        ],
        setup(e) {
          const t = e,
            n = ["approved", "waiting", "spam"],
            r = Fn("config"),
            l = ts(),
            i = (function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              const {
                  controls: t = !1,
                  interval: n = "requestAnimationFrame",
                } = e,
                r = Yt(new Date()),
                l = () => (r.value = new Date()),
                i =
                  "requestAnimationFrame" === n
                    ? (function (e) {
                        let t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {};
                        const { immediate: n = !0, window: r = yi } = t,
                          l = Yt(!1);
                        let i = 0,
                          o = null;
                        function s(t) {
                          l.value &&
                            r &&
                            (e({ delta: t - i, timestamp: t }),
                            (i = t),
                            (o = r.requestAnimationFrame(s)));
                        }
                        function a() {
                          !l.value &&
                            r &&
                            ((l.value = !0), (o = r.requestAnimationFrame(s)));
                        }
                        function c() {
                          (l.value = !1),
                            null != o &&
                              r &&
                              (r.cancelAnimationFrame(o), (o = null));
                        }
                        return (
                          n && a(),
                          ni(c),
                          { isActive: Nt(l), pause: c, resume: a }
                        );
                      })(l, { immediate: !0 })
                    : (function (e) {
                        let t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : 1e3,
                          n =
                            arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : {};
                        const { immediate: r = !0, immediateCallback: l = !1 } =
                          n;
                        let i = null;
                        const o = Yt(!1);
                        function s() {
                          i && (clearInterval(i), (i = null));
                        }
                        function a() {
                          (o.value = !1), s();
                        }
                        function c() {
                          const n = Yl(t);
                          n <= 0 ||
                            ((o.value = !0),
                            l && e(),
                            s(),
                            (i = setInterval(e, n)));
                        }
                        return (
                          r && Kl && c(),
                          (Xt(t) || Gl(t)) &&
                            ni(
                              Dn(t, () => {
                                o.value && Kl && c();
                              })
                            ),
                          ni(a),
                          { isActive: o, pause: a, resume: c }
                        );
                      })(l, n, { immediate: !0 });
              return t ? Ni({ now: r }, i) : r;
            })(),
            o = gs(),
            s = hl(() => r.value.locale),
            a = hl(() => {
              const { link: e } = t.comment;
              return e ? (E(e) ? e : `https://${e}`) : "";
            }),
            c = hl(() => l.value.includes(t.comment.objectId)),
            u = hl(() =>
              ((e, t, n) => {
                if (!e) return "";
                const r =
                    "string" == typeof e
                      ? new Date(
                          -1 !== e.indexOf(" ") ? e.replace(/-/g, "/") : e
                        )
                      : e,
                  l = t.getTime() - r.getTime(),
                  i = Math.floor(l / 864e5);
                if (0 === i) {
                  const e = l % 864e5,
                    t = Math.floor(e / 36e5);
                  if (0 === t) {
                    const t = e % 36e5,
                      r = Math.floor(t / 6e4);
                    if (0 === r) {
                      const e = t % 6e4;
                      return `${Math.round(e / 1e3)} ${n.seconds}`;
                    }
                    return `${r} ${n.minutes}`;
                  }
                  return `${t} ${n.hours}`;
                }
                return i < 0
                  ? n.now
                  : i < 8
                  ? `${i} ${n.days}`
                  : ((e) => {
                      const t = j(e.getDate(), 2),
                        n = j(e.getMonth() + 1, 2);
                      return `${j(e.getFullYear(), 2)}-${n}-${t}`;
                    })(r);
              })(t.comment.insertedAt, i.value, s.value)
            ),
            p = hl(() => "administrator" === o.value.type),
            d = hl(
              () => t.comment.user_id && o.value.objectId === t.comment.user_id
            ),
            h = hl(() => {
              var e;
              return (
                t.comment.objectId ===
                (null === (e = t.reply) || void 0 === e ? void 0 : e.objectId)
              );
            }),
            f = hl(() => {
              var e;
              return (
                t.comment.objectId ===
                (null === (e = t.edit) || void 0 === e ? void 0 : e.objectId)
              );
            });
          return (t, r) => {
            var l;
            const i = (function (e, t) {
              return (
                (function (e, t) {
                  let n =
                    arguments.length > 3 &&
                    void 0 !== arguments[3] &&
                    arguments[3];
                  const r = zn || ll;
                  if (r) {
                    const l = r.type;
                    if (e === er) {
                      const e = (function (e) {
                        let t =
                          !(arguments.length > 1 && void 0 !== arguments[1]) ||
                          arguments[1];
                        return ce(e)
                          ? e.displayName || e.name
                          : e.name || (t && e.__name);
                      })(l, !1);
                      if (e && (e === t || e === xe(t) || e === Ce(xe(t))))
                        return l;
                    }
                    const i = nr(r[e] || l[e], t) || nr(r.appContext[e], t);
                    return !i && n ? l : i;
                  }
                })(er, e, !0, t) || e
              );
            })("CommentCard", !0);
            return (
              Ur(),
              Nr(
                "div",
                { id: e.comment.objectId, class: "wl-card-item" },
                [
                  Zr("div", ka, [
                    e.comment.avatar
                      ? (Ur(),
                        Nr(
                          "img",
                          { key: 0, src: e.comment.avatar },
                          null,
                          8,
                          xa
                        ))
                      : Jr("v-if", !0),
                    e.comment.type
                      ? (Ur(), Vr(rn(Jo), { key: 1 }))
                      : Jr("v-if", !0),
                  ]),
                  Zr("div", _a, [
                    Zr("div", $a, [
                      rn(a)
                        ? (Ur(),
                          Nr(
                            "a",
                            {
                              key: 0,
                              class: "wl-nick",
                              href: rn(a),
                              target: "_blank",
                              rel: "noopener noreferrer",
                            },
                            q(e.comment.nick),
                            9,
                            Ca
                          ))
                        : (Ur(), Nr("span", Sa, q(e.comment.nick), 1)),
                      "administrator" === e.comment.type
                        ? (Ur(),
                          Nr(
                            "span",
                            {
                              key: 2,
                              class: "wl-badge",
                              textContent: q(rn(s).admin),
                            },
                            null,
                            8,
                            Aa
                          ))
                        : Jr("v-if", !0),
                      e.comment.label
                        ? (Ur(),
                          Nr(
                            "span",
                            {
                              key: 3,
                              class: "wl-badge",
                              textContent: q(e.comment.label),
                            },
                            null,
                            8,
                            Ra
                          ))
                        : Jr("v-if", !0),
                      e.comment.sticky
                        ? (Ur(),
                          Nr(
                            "span",
                            {
                              key: 4,
                              class: "wl-badge",
                              textContent: q(rn(s).sticky),
                            },
                            null,
                            8,
                            Ea
                          ))
                        : Jr("v-if", !0),
                      void 0 !== e.comment.level && e.comment.level >= 0
                        ? (Ur(),
                          Nr(
                            "span",
                            {
                              key: 5,
                              class: V(`wl-badge level${e.comment.level}`),
                              textContent: q(
                                rn(s)[`level${e.comment.level}`] ||
                                  `Level ${e.comment.level}`
                              ),
                            },
                            null,
                            10,
                            Ia
                          ))
                        : Jr("v-if", !0),
                      Zr(
                        "span",
                        { class: "wl-time", textContent: q(rn(u)) },
                        null,
                        8,
                        La
                      ),
                      Zr("div", za, [
                        rn(p) || rn(d)
                          ? (Ur(),
                            Nr(
                              "button",
                              {
                                key: 0,
                                type: "button",
                                class: "wl-edit",
                                onClick:
                                  r[0] ||
                                  (r[0] = () => t.$emit("edit", e.comment)),
                              },
                              [Qr(rn(Go))]
                            ))
                          : Jr("v-if", !0),
                        rn(p) || rn(d)
                          ? (Ur(),
                            Nr(
                              "button",
                              {
                                key: 1,
                                type: "button",
                                class: "wl-delete",
                                onClick:
                                  r[1] ||
                                  (r[1] = (n) => t.$emit("delete", e.comment)),
                              },
                              [Qr(rn(Ho))]
                            ))
                          : Jr("v-if", !0),
                        Zr(
                          "button",
                          {
                            type: "button",
                            class: "wl-like",
                            title: rn(c) ? rn(s).cancelLike : rn(s).like,
                            onClick:
                              r[2] ||
                              (r[2] = (n) => t.$emit("like", e.comment)),
                          },
                          [
                            Qr(rn(qo), { active: rn(c) }, null, 8, ["active"]),
                            "like" in e.comment
                              ? (Ur(),
                                Nr(
                                  "span",
                                  { key: 0, textContent: q(e.comment.like) },
                                  null,
                                  8,
                                  ja
                                ))
                              : Jr("v-if", !0),
                          ],
                          8,
                          Oa
                        ),
                        Zr(
                          "button",
                          {
                            type: "button",
                            class: V(["wl-reply", { active: rn(h) }]),
                            title: rn(h) ? rn(s).cancelReply : rn(s).reply,
                            onClick:
                              r[3] ||
                              (r[3] = (n) =>
                                t.$emit("reply", rn(h) ? null : e.comment)),
                          },
                          [Qr(rn(Ko))],
                          10,
                          Ta
                        ),
                      ]),
                    ]),
                    Zr("div", Ua, [
                      e.comment.addr
                        ? (Ur(),
                          Nr(
                            "span",
                            {
                              key: 0,
                              class: "wl-addr",
                              "data-value": e.comment.addr,
                              textContent: q(e.comment.addr),
                            },
                            null,
                            8,
                            Pa
                          ))
                        : Jr("v-if", !0),
                      e.comment.browser
                        ? (Ur(),
                          Nr(
                            "span",
                            {
                              key: 1,
                              class: "wl-browser",
                              "data-value": e.comment.browser,
                              textContent: q(e.comment.browser),
                            },
                            null,
                            8,
                            Ma
                          ))
                        : Jr("v-if", !0),
                      e.comment.os
                        ? (Ur(),
                          Nr(
                            "span",
                            {
                              key: 2,
                              class: "wl-os",
                              "data-value": e.comment.os,
                              textContent: q(e.comment.os),
                            },
                            null,
                            8,
                            Fa
                          ))
                        : Jr("v-if", !0),
                    ]),
                    rn(f)
                      ? Jr("v-if", !0)
                      : (Ur(),
                        Nr(
                          "div",
                          {
                            key: 0,
                            class: "wl-content",
                            innerHTML: e.comment.comment,
                          },
                          null,
                          8,
                          Na
                        )),
                    rn(p) && !rn(f)
                      ? (Ur(),
                        Nr("div", Va, [
                          Zr("span", Da, [
                            (Ur(),
                            Nr(
                              Ir,
                              null,
                              rr(n, (n) =>
                                Zr(
                                  "button",
                                  {
                                    key: n,
                                    type: "submit",
                                    class: V(`wl-btn wl-${n}`),
                                    disabled: e.comment.status === n,
                                    onClick: (r) =>
                                      t.$emit("status", {
                                        status: n,
                                        comment: e.comment,
                                      }),
                                    textContent: q(rn(s)[n]),
                                  },
                                  null,
                                  10,
                                  Ha
                                )
                              ),
                              64
                            )),
                          ]),
                          rn(p) && !e.comment.rid
                            ? (Ur(),
                              Nr(
                                "button",
                                {
                                  key: 0,
                                  type: "submit",
                                  class: "wl-btn wl-sticky",
                                  onClick:
                                    r[4] ||
                                    (r[4] = (n) =>
                                      t.$emit("sticky", e.comment)),
                                },
                                q(
                                  e.comment.sticky
                                    ? rn(s).unsticky
                                    : rn(s).sticky
                                ),
                                1
                              ))
                            : Jr("v-if", !0),
                        ]))
                      : Jr("v-if", !0),
                    rn(h) || rn(f)
                      ? (Ur(),
                        Nr(
                          "div",
                          {
                            key: 2,
                            class: V({
                              "wl-reply-wrapper": rn(h),
                              "wl-edit-wrapper": rn(f),
                            }),
                          },
                          [
                            Qr(
                              wa,
                              {
                                edit: e.edit,
                                "reply-id":
                                  null === (l = e.reply) || void 0 === l
                                    ? void 0
                                    : l.objectId,
                                "reply-user": e.comment.nick,
                                "root-id": e.rootId,
                                onLog: r[5] || (r[5] = (e) => t.$emit("log")),
                                onCancelReply:
                                  r[6] ||
                                  (r[6] = (e) => t.$emit("reply", null)),
                                onCancelEdit:
                                  r[7] || (r[7] = (e) => t.$emit("edit", null)),
                                onSubmit:
                                  r[8] || (r[8] = (e) => t.$emit("submit", e)),
                              },
                              null,
                              8,
                              ["edit", "reply-id", "reply-user", "root-id"]
                            ),
                          ],
                          2
                        ))
                      : Jr("v-if", !0),
                    e.comment.children
                      ? (Ur(),
                        Nr("div", Ba, [
                          (Ur(!0),
                          Nr(
                            Ir,
                            null,
                            rr(
                              e.comment.children,
                              (n) => (
                                Ur(),
                                Vr(
                                  i,
                                  {
                                    key: n.objectId,
                                    comment: n,
                                    reply: e.reply,
                                    edit: e.edit,
                                    "root-id": e.rootId,
                                    onLog:
                                      r[9] || (r[9] = (e) => t.$emit("log")),
                                    onDelete:
                                      r[10] ||
                                      (r[10] = (e) => t.$emit("delete", e)),
                                    onEdit:
                                      r[11] ||
                                      (r[11] = (e) => t.$emit("edit", e)),
                                    onLike:
                                      r[12] ||
                                      (r[12] = (e) => t.$emit("like", e)),
                                    onReply:
                                      r[13] ||
                                      (r[13] = (e) => t.$emit("reply", e)),
                                    onStatus:
                                      r[14] ||
                                      (r[14] = (e) => t.$emit("status", e)),
                                    onSticky:
                                      r[15] ||
                                      (r[15] = (e) => t.$emit("sticky", e)),
                                    onSubmit:
                                      r[16] ||
                                      (r[16] = (e) => t.$emit("submit", e)),
                                  },
                                  null,
                                  8,
                                  ["comment", "reply", "edit", "root-id"]
                                )
                              )
                            ),
                            128
                          )),
                        ]))
                      : Jr("v-if", !0),
                  ]),
                ],
                8,
                ba
              )
            );
          };
        },
      }),
      [["__file", "CommentCard.vue"]]
    );
    const qa = "2.14.9",
      Za = { "data-waline": "" },
      Qa = { class: "wl-meta-head" },
      Ka = { class: "wl-count" },
      Ga = ["textContent"],
      Ja = { class: "wl-sort" },
      Xa = ["onClick"],
      Ya = { class: "wl-cards" },
      ec = { key: 1, class: "wl-operation" },
      tc = ["textContent"],
      nc = { key: 0, class: "wl-loading" },
      rc = ["textContent"],
      lc = { key: 2, class: "wl-operation" },
      ic = ["textContent"],
      oc = { key: 3, class: "wl-power" },
      sc = Zr(
        "a",
        {
          href: "https://github.com/walinejs/waline",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        " Waline ",
        -1
      );
    e.version = qa;
    var ac = Wn({
        __name: "WalineComment",
        props: [
          "serverURL",
          "path",
          "meta",
          "requiredMeta",
          "dark",
          "commentSorting",
          "lang",
          "locale",
          "pageSize",
          "wordLimit",
          "emoji",
          "login",
          "highlighter",
          "texRenderer",
          "imageUploader",
          "search",
          "copyright",
          "recaptchaV3Key",
          "reaction",
        ],
        setup(e) {
          const t = e,
            c = {
              latest: "insertedAt_desc",
              oldest: "insertedAt_asc",
              hottest: "like_desc",
            },
            u = Object.keys(c),
            p = gs(),
            h = ts(),
            f = Yt("loading"),
            g = Yt(0),
            m = Yt(1),
            v = Yt(0),
            y = hl(() =>
              ((e) => {
                let {
                  serverURL: t,
                  path: c = location.pathname,
                  lang: u = "undefined" == typeof navigator
                    ? "en-US"
                    : navigator.language,
                  locale: p,
                  emoji: h = r,
                  meta: f = ["nick", "mail", "link"],
                  requiredMeta: g = [],
                  dark: m = !1,
                  pageSize: v = 10,
                  wordLimit: y,
                  imageUploader: w,
                  highlighter: b,
                  texRenderer: x,
                  copyright: _ = !0,
                  login: $ = "enable",
                  search: C,
                  reaction: S,
                  recaptchaV3Key: R = "",
                  commentSorting: E = "latest",
                  ...O
                } = e;
                return {
                  serverURL: I(t),
                  path: A(c),
                  locale: {
                    ...(k[u] || k[l]),
                    ...("object" == typeof p ? p : {}),
                  },
                  wordLimit: L(y),
                  meta: n(f),
                  requiredMeta: n(g),
                  imageUploader: z(w, o),
                  highlighter: z(b, d),
                  texRenderer: z(x, s),
                  lang: Object.keys(k).includes(u) ? u : "en-US",
                  dark: m,
                  emoji: "boolean" == typeof h ? (h ? r : []) : h,
                  pageSize: v,
                  login: $,
                  copyright: _,
                  search: !1 !== C && ("object" == typeof C ? C : a(u)),
                  recaptchaV3Key: R,
                  reaction: Array.isArray(S) ? S : !0 === S ? i : [],
                  commentSorting: E,
                  ...O,
                };
              })(t)
            ),
            w = Yt(y.value.commentSorting),
            b = Yt([]),
            x = Yt(null),
            $ = Yt(null),
            C = hl(() => {
              return "string" == typeof (e = y.value.dark)
                ? "auto" === e
                  ? `@media(prefers-color-scheme:dark){body${O}}`
                  : `${e}${O}`
                : !0 === e
                ? `:root${O}`
                : "";
              var e;
            }),
            R = hl(() => y.value.locale);
          let E;
          !(function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            const n = Yt(!1),
              {
                document: r = wi,
                immediate: l = !0,
                manual: i = !1,
                id: o = "vueuse_styletag_" + ++Vi,
              } = t,
              s = Yt(e);
            let a = () => {};
            const c = () => {
                if (!r) return;
                const e = r.getElementById(o) || r.createElement("style");
                e.isConnected ||
                  ((e.type = "text/css"),
                  (e.id = o),
                  t.media && (e.media = t.media),
                  r.head.appendChild(e)),
                  n.value ||
                    ((a = Dn(
                      s,
                      (t) => {
                        e.textContent = t;
                      },
                      { immediate: !0 }
                    )),
                    (n.value = !0));
              },
              u = () => {
                r &&
                  n.value &&
                  (a(),
                  r.head.removeChild(r.getElementById(o)),
                  (n.value = !1));
              };
            l &&
              !i &&
              (function (e) {
                let t =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1];
                il() ? Kn(e) : t ? e() : kn(e);
              })(c),
              i || ni(u),
              Nt(n);
          })(C);
          const j = (e) => {
              var t, n;
              const { serverURL: r, path: l, pageSize: i } = y.value,
                o = new AbortController();
              (f.value = "loading"),
                null !== (t = E) && void 0 !== t && t(),
                ((e) => {
                  let {
                    serverURL: t,
                    lang: n,
                    path: r,
                    page: l,
                    pageSize: i,
                    sortBy: o,
                    signal: s,
                    token: a,
                  } = e;
                  const c = {};
                  return (
                    a && (c.Authorization = `Bearer ${a}`),
                    fetch(
                      `${t}/comment?path=${encodeURIComponent(
                        r
                      )}&pageSize=${i}&page=${l}&lang=${n}&sortBy=${o}`,
                      {
                        signal: s,
                        headers: c,
                      }
                    )
                      .then((e) => e.json())
                      .then((e) => _(e, "Get comment data"))
                  );
                })({
                  serverURL: r,
                  lang: y.value.lang,
                  path: l,
                  pageSize: i,
                  sortBy: c[w.value],
                  page: e,
                  signal: o.signal,
                  token:
                    null === (n = p.value) || void 0 === n ? void 0 : n.token,
                })
                  .then((t) => {
                    (f.value = "success"),
                      (g.value = t.count),
                      b.value.push(...t.data),
                      (m.value = e),
                      (v.value = t.totalPages);
                  })
                  .catch((e) => {
                    "AbortError" !== e.name &&
                      (console.error(e.message), (f.value = "error"));
                  }),
                (E = o.abort.bind(o));
            },
            T = () => j(m.value + 1),
            U = () => {
              (g.value = 0), (b.value = []), j(1);
            },
            P = (e) => {
              x.value = e;
            },
            M = (e) => {
              $.value = e;
            },
            F = (e) => {
              if ($.value)
                ($.value.comment = e.comment), ($.value.orig = e.orig);
              else if (e.rid) {
                const t = b.value.find((t) => {
                  let { objectId: n } = t;
                  return n === e.rid;
                });
                if (!t) return;
                Array.isArray(t.children) || (t.children = []),
                  t.children.push(e);
              } else b.value.unshift(e);
            },
            N = async (e) => {
              var t;
              let { comment: n, status: r } = e;
              if (n.status === r) return;
              const { serverURL: l, lang: i } = y.value;
              await S({
                serverURL: l,
                lang: i,
                token:
                  null === (t = p.value) || void 0 === t ? void 0 : t.token,
                objectId: n.objectId,
                comment: { status: r },
              }),
                (n.status = r);
            },
            D = async (e) => {
              var t;
              if (e.rid) return;
              const { serverURL: n, lang: r } = y.value;
              await S({
                serverURL: n,
                lang: r,
                token:
                  null === (t = p.value) || void 0 === t ? void 0 : t.token,
                objectId: e.objectId,
                comment: { sticky: e.sticky ? 0 : 1 },
              }),
                (e.sticky = !e.sticky);
            },
            H = async (e) => {
              var t;
              let { objectId: n } = e;
              if (!confirm("Are you sure you want to delete this comment?"))
                return;
              const { serverURL: r, lang: l } = y.value;
              await ((e) => {
                let { serverURL: t, lang: n, token: r, objectId: l } = e;
                return fetch(`${t}/comment/${l}?lang=${n}`, {
                  method: "DELETE",
                  headers: { Authorization: `Bearer ${r}` },
                })
                  .then((e) => e.json())
                  .then((e) => _(e, "Delete comment"));
              })({
                serverURL: r,
                lang: l,
                token:
                  null === (t = p.value) || void 0 === t ? void 0 : t.token,
                objectId: n,
              }),
                b.value.some((e, t) =>
                  e.objectId === n
                    ? ((b.value = b.value.filter((e, n) => n !== t)), !0)
                    : e.children.some(
                        (r, l) =>
                          r.objectId === n &&
                          ((b.value[t].children = e.children.filter(
                            (e, t) => t !== l
                          )),
                          !0)
                      )
                );
            },
            B = async (e) => {
              var t;
              const { serverURL: n, lang: r } = y.value,
                { objectId: l } = e,
                i = h.value.includes(l);
              await S({
                serverURL: n,
                lang: r,
                objectId: l,
                token:
                  null === (t = p.value) || void 0 === t ? void 0 : t.token,
                comment: { like: !i },
              }),
                i
                  ? (h.value = h.value.filter((e) => e !== l))
                  : ((h.value = [...h.value, l]),
                    h.value.length > 50 && (h.value = h.value.slice(-50))),
                (e.like = (e.like || 0) + (i ? -1 : 1));
            };
          return (
            (function (e, t) {
              if (ll) {
                let e = ll.provides;
                const n = ll.parent && ll.parent.provides;
                n === e && (e = ll.provides = Object.create(n)), (e.config = t);
              }
            })(0, y),
            Kn(() => {
              Dn(
                () => [t.serverURL, t.path],
                () => U(),
                { immediate: !0 }
              );
            }),
            Jn(() => {
              var e;
              return null === (e = E) || void 0 === e ? void 0 : e();
            }),
            (e, t) => (
              Ur(),
              Nr("div", Za, [
                Qr(Ss),
                x.value
                  ? Jr("v-if", !0)
                  : (Ur(), Vr(wa, { key: 0, onLog: U, onSubmit: F })),
                Zr("div", Qa, [
                  Zr("div", Ka, [
                    g.value
                      ? (Ur(),
                        Nr(
                          "span",
                          { key: 0, class: "wl-num", textContent: q(g.value) },
                          null,
                          8,
                          Ga
                        ))
                      : Jr("v-if", !0),
                    Gr(" " + q(rn(R).comment), 1),
                  ]),
                  Zr("ul", Ja, [
                    (Ur(!0),
                    Nr(
                      Ir,
                      null,
                      rr(
                        rn(u),
                        (e) => (
                          Ur(),
                          Nr(
                            "li",
                            {
                              key: e,
                              class: V([e === w.value ? "active" : ""]),
                              onClick: (t) =>
                                ((e) => {
                                  w.value !== e && ((w.value = e), U());
                                })(e),
                            },
                            q(rn(R)[e]),
                            11,
                            Xa
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                ]),
                Zr("div", Ya, [
                  (Ur(!0),
                  Nr(
                    Ir,
                    null,
                    rr(
                      b.value,
                      (e) => (
                        Ur(),
                        Vr(
                          Wa,
                          {
                            key: e.objectId,
                            "root-id": e.objectId,
                            comment: e,
                            reply: x.value,
                            edit: $.value,
                            onLog: U,
                            onReply: P,
                            onEdit: M,
                            onSubmit: F,
                            onStatus: N,
                            onDelete: H,
                            onSticky: D,
                            onLike: B,
                          },
                          null,
                          8,
                          ["root-id", "comment", "reply", "edit"]
                        )
                      )
                    ),
                    128
                  )),
                ]),
                "error" === f.value
                  ? (Ur(),
                    Nr("div", ec, [
                      Zr(
                        "button",
                        {
                          type: "button",
                          class: "wl-btn",
                          onClick: U,
                          textContent: q(rn(R).refresh),
                        },
                        null,
                        8,
                        tc
                      ),
                    ]))
                  : (Ur(),
                    Nr(
                      Ir,
                      { key: 2 },
                      [
                        "loading" === f.value
                          ? (Ur(), Nr("div", nc, [Qr(rn(Xo), { size: 30 })]))
                          : b.value.length
                          ? m.value < v.value
                            ? (Ur(),
                              Nr("div", lc, [
                                Zr(
                                  "button",
                                  {
                                    type: "button",
                                    class: "wl-btn",
                                    onClick: T,
                                    textContent: q(rn(R).more),
                                  },
                                  null,
                                  8,
                                  ic
                                ),
                              ]))
                            : Jr("v-if", !0)
                          : (Ur(),
                            Nr(
                              "div",
                              {
                                key: 1,
                                class: "wl-empty",
                                textContent: q(rn(R).sofa),
                              },
                              null,
                              8,
                              rc
                            )),
                      ],
                      64
                    )),
                rn(y).copyright
                  ? (Ur(),
                    Nr("div", oc, [
                      Gr(" Powered by "),
                      sc,
                      Gr(" v" + q(rn(qa)), 1),
                    ]))
                  : Jr("v-if", !0),
              ])
            )
          );
        },
      }),
      cc = Cs(ac, [["__file", "WalineComment.vue"]]);
    const uc = (e, t) => {
        t.forEach((t, n) => {
          t.innerText = e[n].toString();
        });
      },
      pc = (e) => {
        let {
          serverURL: t,
          path: n = window.location.pathname,
          selector: r = ".waline-pageview-count",
          update: l = !0,
          lang: i = navigator.language,
        } = e;
        const o = new AbortController(),
          s = Array.from(document.querySelectorAll(r)),
          a = (e) => {
            const t = No(e);
            return null !== t && n !== t;
          },
          c = (e) =>
            ((e) => {
              let { serverURL: t, lang: n, paths: r, signal: l } = e;
              return $({
                serverURL: t,
                lang: n,
                paths: r,
                type: ["time"],
                signal: l,
              }).then((e) => (Array.isArray(e) ? e : [e]));
            })({
              serverURL: I(t),
              paths: e.map((e) => No(e) || n),
              lang: i,
              signal: o.signal,
            })
              .then((t) => uc(t, e))
              .catch(Qi);
        if (l) {
          const e = s.filter((e) => !a(e)),
            r = s.filter(a);
          ((u = { serverURL: I(t), path: n, lang: i }),
          C({ ...u, type: "time", action: "inc" })).then((t) =>
            uc(new Array(e.length).fill(t), e)
          ),
            r.length && c(r);
        } else c(s);
        var u;
        return o.abort.bind(o);
      };
    (e.UserList = (e) => {
      let {
        el: t,
        serverURL: n,
        count: r,
        locale: i,
        lang: o = navigator.language,
        mode: s = "list",
      } = e;
      const a = Ki(t),
        c = new AbortController();
      return ((e) => {
        let { serverURL: t, signal: n, pageSize: r, lang: l } = e;
        return fetch(`${t}/user?pageSize=${r}&lang=${l}`, { signal: n })
          .then((e) => e.json())
          .then((e) => _(e, "user list"))
          .then((e) => e.data);
      })({ serverURL: n, pageSize: r, lang: o, signal: c.signal }).then((e) =>
        a && e.length
          ? ((i = { ...(k[o] || k[l]), ...("object" == typeof i ? i : {}) }),
            (a.innerHTML = `<ul class="wl-user-${s}">${e
              .map((e, t) =>
                [
                  `<li class="wl-user-item" aria-label="${e.nick}">`,
                  e.link && `<a href="${e.link}" target="_blank">`,
                  '<div class="wl-user-avatar">',
                  `<img src="${e.avatar}" alt="${e.nick}">`,
                  `<span class="wl-user-badge">${t + 1}</span>`,
                  "</div>",
                  '<div class="wl-user-meta">',
                  '<div class="wl-user-name">',
                  e.nick,
                  e.level &&
                    `<span class="wl-badge">${
                      i ? i[`level${e.level}`] : `Level ${e.level}`
                    }</span>`,
                  e.label && `<span class="wl-badge">${e.label}</span>`,
                  "</div>",
                  e.link && e.link,
                  "</div>",
                  e.link && "</a>",
                  "</li>",
                ]
                  .filter((e) => e)
                  .join("")
              )
              .join("")}</ul>`),
            {
              users: e,
              destroy: () => {
                c.abort(), (a.innerHTML = "");
              },
            })
          : { users: e, destroy: () => c.abort() }
      );
    }),
      (e.RecentComments = (e) => {
        var t;
        let { el: n, serverURL: r, count: l, lang: i = navigator.language } = e;
        const o = gs(),
          s = Ki(n),
          a = new AbortController();
        return ((e) => {
          let { serverURL: t, lang: n, count: r, signal: l, token: i } = e;
          const o = {};
          return (
            i && (o.Authorization = `Bearer ${i}`),
            fetch(`${t}/comment?type=recent&count=${r}&lang=${n}`, {
              signal: l,
              headers: o,
            }).then((e) => e.json())
          );
        })({
          serverURL: r,
          count: l,
          lang: i,
          signal: a.signal,
          token: null === (t = o.value) || void 0 === t ? void 0 : t.token,
        }).then((e) =>
          s && e.length
            ? ((s.innerHTML = `<ul class="wl-recent-list">${e
                .map(
                  (e) =>
                    `<li class="wl-recent-item"><a href="${e.url}">${e.nick}</a>：${e.comment}</li>`
                )
                .join("")}</ul>`),
              {
                comments: e,
                destroy: () => {
                  a.abort(), (s.innerHTML = "");
                },
              })
            : { comments: e, destroy: () => a.abort() }
        );
      }),
      (e.init = (e) => {
        let {
          el: t = "#waline",
          path: n = window.location.pathname,
          comment: r = !1,
          pageview: l = !1,
          ...i
        } = e;
        const o = t ? Ki(t) : null;
        if (t && !o)
          throw new Error("Option 'el' do not match any domElement!");
        if (!i.serverURL) throw new Error("Option 'serverURL' is missing!");
        const s = Ft({ ...i }),
          a = Ft({ comment: r, pageview: l, path: n }),
          c = o
            ? (function () {
                const e = (Ql || (Ql = Ar(Zl))).createApp(...arguments),
                  { mount: t } = e;
                return (
                  (e.mount = (n) => {
                    const r = (function (e) {
                      return ue(e) ? document.querySelector(e) : e;
                    })(n);
                    if (!r) return;
                    const l = e._component;
                    ce(l) ||
                      l.render ||
                      l.template ||
                      (l.template = r.innerHTML),
                      (r.innerHTML = "");
                    const i = t(r, !1, r instanceof SVGElement);
                    return (
                      r instanceof Element &&
                        (r.removeAttribute("v-cloak"),
                        r.setAttribute("data-v-app", "")),
                      i
                    );
                  }),
                  e
                );
              })(() => fl(cc, { path: a.path, ...s }))
            : null;
        c && c.mount(o);
        const u = Nn(() => {
            a.comment &&
              Vo({
                serverURL: s.serverURL,
                path: a.path,
                selector: "string" == typeof a.comment ? a.comment : void 0,
              });
          }),
          p = Nn(() => {
            a.pageview &&
              pc({
                serverURL: s.serverURL,
                path: a.path,
                selector: "string" == typeof a.pageview ? a.pageview : void 0,
              });
          });
        return {
          el: o,
          update: function () {
            let {
              comment: e,
              pageview: t,
              path: n = window.location.pathname,
              ...r
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {};
            Object.entries(r).forEach((e) => {
              let [t, n] = e;
              s[t] = n;
            }),
              (a.path = n),
              void 0 !== e && (a.comment = e),
              void 0 !== t && (a.pageview = t);
          },
          destroy: () => {
            null != c && c.unmount(), u(), p();
          },
        };
      }),
      (e.pageviewCount = pc);
  }
);
