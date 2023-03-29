const e = ["nick", "mail", "link"],
  t = (t) => t.filter((t) => e.includes(t)),
  n = ["//unpkg.com/@waline/emojis@1.1.0/weibo"],
  r = "en-US",
  l = [
    "//unpkg.com/@waline/emojis/tieba/tieba_agree.png",
    "//unpkg.com/@waline/emojis/tieba/tieba_look_down.png",
    "//unpkg.com/@waline/emojis/tieba/tieba_sunglasses.png",
    "//unpkg.com/@waline/emojis/tieba/tieba_pick_nose.png",
    "//unpkg.com/@waline/emojis/tieba/tieba_awkward.png",
    "//unpkg.com/@waline/emojis/tieba/tieba_sleep.png",
  ],
  i = (e) =>
    new Promise((t, n) => {
      if (e.size > 128e3)
        return n(new Error("File too large! File size limit 128KB"));
      const r = new FileReader();
      r.readAsDataURL(e),
        (r.onload = () => t(r.result?.toString() || "")),
        (r.onerror = n);
    }),
  s = (e) =>
    !0 === e
      ? '<p class="wl-tex">Tex is not available in preview</p>'
      : '<span class="wl-tex">Tex is not available in preview</span>',
  o = (e) => {
    const t = async (t, n = {}) =>
      fetch(
        `https://api.giphy.com/v1/gifs/${t}?${new URLSearchParams({
          lang: e,
          limit: "20",
          rating: "g",
          api_key: "6CIMLkNMMOhRcXPoMCPkFy4Ybk2XUiMp",
          ...n,
        }).toString()}`
      )
        .then((e) => e.json())
        .then(({ data: e }) =>
          e.map((e) => ({ title: e.title, src: e.images.downsized_medium.url }))
        );
    return {
      search: (e) => t("search", { q: e, offset: "0" }),
      default: () => t("trending", {}),
      more: (e, n = 0) => t("search", { q: e, offset: n.toString() }),
    };
  },
  a = new RegExp(
    `(${
      /[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+/
        .source
    }|${/</.source})|((?:${/(?:^|\s)\/\/(.+?)$/gm.source})|(?:${
      /\/\*([\S\s]*?)\*\//gm.source
    }))`,
    "gmi"
  ),
  c = [
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
  u = {},
  p = (e) => {
    let t = 0;
    return e.replace(a, (e, n, r) => {
      if (r) return `<span style="color: slategray">${r}</span>`;
      if ("<" === n) return "&lt;";
      let l;
      u[n] ? (l = u[n]) : ((l = c[t]), (u[n] = l));
      const i = `<span style="color: #${l}">${n}</span>`;
      return (t = ++t % c.length), i;
    });
  },
  d = [
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
  h = (e) => Object.fromEntries(e.map((e, t) => [d[t], e]));
var f = h([
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
  g = h([
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
  m = h([
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
  v = h([
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
  y = h([
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
  b = h([
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
const w = {
    zh: m,
    "zh-cn": m,
    "zh-CN": m,
    "zh-tw": v,
    "zh-TW": v,
    en: f,
    "en-US": f,
    "en-us": f,
    jp: g,
    ja: g,
    "jp-jp": g,
    "jp-JP": g,
    "pt-br": y,
    "pt-BR": y,
    ru: b,
    "ru-ru": b,
    "ru-RU": b,
  },
  k = { "Content-Type": "application/json" },
  x = (e, t = "") => {
    if ("object" == typeof e && e.errno)
      throw new TypeError(`${t} failed with ${e.errno}: ${e.errmsg}`);
    return e;
  },
  _ = ({ serverURL: e, lang: t, paths: n, type: r, signal: l }) =>
    fetch(
      `${e}/article?path=${encodeURIComponent(
        n.join(",")
      )}&type=${encodeURIComponent(r.join(","))}&lang=${t}`,
      { signal: l }
    ).then((e) => e.json()),
  $ = ({ serverURL: e, lang: t, path: n, type: r, action: l }) =>
    fetch(`${e}/article?lang=${t}`, {
      method: "POST",
      headers: k,
      body: JSON.stringify({ path: n, type: r, action: l }),
    }).then((e) => e.json()),
  C = ({ serverURL: e, lang: t, token: n, objectId: r, comment: l }) =>
    fetch(`${e}/comment/${r}?lang=${t}`, {
      method: "PUT",
      headers: { ...k, Authorization: `Bearer ${n}` },
      body: JSON.stringify(l),
    })
      .then((e) => e.json())
      .then((e) => x(e, "Update comment")),
  S = (e) => {
    try {
      e = decodeURI(e);
    } catch (e) {}
    return e;
  },
  R = (e = "") => e.replace(/\/$/u, ""),
  A = (e) => /^(https?:)?\/\//.test(e),
  E = (e) => {
    const t = R(e);
    return A(t) ? t : `https://${t}`;
  },
  I = (e) => (Array.isArray(e) ? e : !!e && [0, e]),
  L = (e, t) => ("function" == typeof e ? e : !1 !== e && t),
  z =
    "{--waline-white:#000;--waline-light-grey:#666;--waline-dark-grey:#999;--waline-color:#888;--waline-bgcolor:#1e1e1e;--waline-bgcolor-light:#272727;--waline-bgcolor-hover: #444;--waline-border-color:#333;--waline-disable-bgcolor:#444;--waline-disable-color:#272727;--waline-bq-color:#272727;--waline-info-bgcolor:#272727;--waline-info-color:#666}",
  O = (e, t) => {
    let n = e.toString();
    for (; n.length < t; ) n = "0" + n;
    return n;
  },
  j = (e, t, n) => {
    if (!e) return "";
    const r =
        "string" == typeof e
          ? new Date(-1 !== e.indexOf(" ") ? e.replace(/-/g, "/") : e)
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
          const t = O(e.getDate(), 2),
            n = O(e.getMonth() + 1, 2);
          return `${O(e.getFullYear(), 2)}-${n}-${t}`;
        })(r);
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
      : se(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (e, [t, n]) => ((e[`${t} =>`] = n), e),
            {}
          ),
        }
      : oe(t)
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
  se = (e) => "[object Map]" === ge(e),
  oe = (e) => "[object Set]" === ge(e),
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
  be = T(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  we = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  ke = /-(\w)/g,
  xe = we((e) => e.replace(ke, (e, t) => (t ? t.toUpperCase() : ""))),
  _e = /\B([A-Z])/g,
  $e = we((e) => e.replace(_e, "-$1").toLowerCase()),
  Ce = we((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Se = we((e) => (e ? `on${Ce(e)}` : "")),
  Re = (e, t) => !Object.is(e, t),
  Ae = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  Ee = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
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
  constructor(e = !1) {
    (this.detached = e),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Oe),
      !e && Oe && (this.index = (Oe.scopes || (Oe.scopes = [])).push(this) - 1);
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
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
      for (t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].stop(!0);
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
  constructor(e, t = null, n) {
    (this.fn = e),
      (this.scheduler = t),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      (function (e, t = Oe) {
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
          ? (({ deps: e }) => {
              if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= Ve;
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
  const s = Fe.get(e);
  if (!s) return;
  let o = [];
  if ("clear" === t) o = [...s.values()];
  else if ("length" === n && ie(e)) {
    const e = Number(r);
    s.forEach((t, n) => {
      ("length" === n || n >= e) && o.push(t);
    });
  } else
    switch ((void 0 !== n && o.push(s.get(n)), t)) {
      case "add":
        ie(e)
          ? ye(n) && o.push(s.get("length"))
          : (o.push(s.get(Be)), se(e) && o.push(s.get(We)));
        break;
      case "delete":
        ie(e) || (o.push(s.get(Be)), se(e) && o.push(s.get(We)));
        break;
      case "set":
        se(e) && o.push(s.get(Be));
    }
  if (1 === o.length) o[0] && tt(o[0]);
  else {
    const e = [];
    for (const t of o) t && e.push(...t);
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
  it = pt(),
  st = pt(!1, !0),
  ot = pt(!0),
  at = ct();
function ct() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...e) {
        const n = Qt(this);
        for (let e = 0, t = this.length; e < t; e++) Xe(n, 0, e + "");
        const r = n[t](...e);
        return -1 === r || !1 === r ? n[t](...e.map(Qt)) : r;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...e) {
        Ge();
        const n = Qt(this)[t].apply(this, e);
        return Je(), n;
      };
    }),
    e
  );
}
function ut(e) {
  const t = Qt(this);
  return Xe(t, 0, e), t.hasOwnProperty(e);
}
function pt(e = !1, t = !1) {
  return function (n, r, l) {
    if ("__v_isReactive" === r) return !e;
    if ("__v_isReadonly" === r) return e;
    if ("__v_isShallow" === r) return t;
    if ("__v_raw" === r && l === (e ? (t ? Nt : Ft) : t ? Mt : Pt).get(n))
      return n;
    const i = ie(n);
    if (!e) {
      if (i && le(at, r)) return Reflect.get(at, r, l);
      if ("hasOwnProperty" === r) return ut;
    }
    const s = Reflect.get(n, r, l);
    return (pe(r) ? lt.has(r) : rt(r))
      ? s
      : (e || Xe(n, 0, r),
        t
          ? s
          : en(s)
          ? i && ye(r)
            ? s
            : s.value
          : de(s)
          ? e
            ? Dt(s)
            : Vt(s)
          : s);
  };
}
function dt(e = !1) {
  return function (t, n, r, l) {
    let i = t[n];
    if (Wt(i) && en(i) && !en(r)) return !1;
    if (
      !e &&
      (qt(r) || Wt(r) || ((i = Qt(i)), (r = Qt(r))), !ie(t) && en(i) && !en(r))
    )
      return (i.value = r), !0;
    const s = ie(t) && ye(n) ? Number(n) < t.length : le(t, n),
      o = Reflect.set(t, n, r, l);
    return (
      t === Qt(l) && (s ? Re(r, i) && et(t, "set", n, r) : et(t, "add", n, r)),
      o
    );
  };
}
const ht = {
    get: it,
    set: dt(),
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
  ft = { get: ot, set: (e, t) => !0, deleteProperty: (e, t) => !0 },
  gt = te({}, ht, { get: st, set: dt(!0) }),
  mt = (e) => e,
  vt = (e) => Reflect.getPrototypeOf(e);
function yt(e, t, n = !1, r = !1) {
  const l = Qt((e = e.__v_raw)),
    i = Qt(t);
  n || (t !== i && Xe(l, 0, t), Xe(l, 0, i));
  const { has: s } = vt(l),
    o = r ? mt : n ? Jt : Gt;
  return s.call(l, t)
    ? o(e.get(t))
    : s.call(l, i)
    ? o(e.get(i))
    : void (e !== l && e.get(t));
}
function bt(e, t = !1) {
  const n = this.__v_raw,
    r = Qt(n),
    l = Qt(e);
  return (
    t || (e !== l && Xe(r, 0, e), Xe(r, 0, l)),
    e === l ? n.has(e) : n.has(e) || n.has(l)
  );
}
function wt(e, t = !1) {
  return (e = e.__v_raw), !t && Xe(Qt(e), 0, Be), Reflect.get(e, "size", e);
}
function kt(e) {
  e = Qt(e);
  const t = Qt(this);
  return vt(t).has.call(t, e) || (t.add(e), et(t, "add", e, e)), this;
}
function xt(e, t) {
  t = Qt(t);
  const n = Qt(this),
    { has: r, get: l } = vt(n);
  let i = r.call(n, e);
  i || ((e = Qt(e)), (i = r.call(n, e)));
  const s = l.call(n, e);
  return (
    n.set(e, t), i ? Re(t, s) && et(n, "set", e, t) : et(n, "add", e, t), this
  );
}
function _t(e) {
  const t = Qt(this),
    { has: n, get: r } = vt(t);
  let l = n.call(t, e);
  l || ((e = Qt(e)), (l = n.call(t, e))), r && r.call(t, e);
  const i = t.delete(e);
  return l && et(t, "delete", e, void 0), i;
}
function $t() {
  const e = Qt(this),
    t = 0 !== e.size,
    n = e.clear();
  return t && et(e, "clear", void 0, void 0), n;
}
function Ct(e, t) {
  return function (n, r) {
    const l = this,
      i = l.__v_raw,
      s = Qt(i),
      o = t ? mt : e ? Jt : Gt;
    return !e && Xe(s, 0, Be), i.forEach((e, t) => n.call(r, o(e), o(t), l));
  };
}
function St(e, t, n) {
  return function (...r) {
    const l = this.__v_raw,
      i = Qt(l),
      s = se(i),
      o = "entries" === e || (e === Symbol.iterator && s),
      a = "keys" === e && s,
      c = l[e](...r),
      u = n ? mt : t ? Jt : Gt;
    return (
      !t && Xe(i, 0, a ? We : Be),
      {
        next() {
          const { value: e, done: t } = c.next();
          return t
            ? { value: e, done: t }
            : { value: o ? [u(e[0]), u(e[1])] : u(e), done: t };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Rt(e) {
  return function (...t) {
    return "delete" !== e && this;
  };
}
function At() {
  const e = {
      get(e) {
        return yt(this, e);
      },
      get size() {
        return wt(this);
      },
      has: bt,
      add: kt,
      set: xt,
      delete: _t,
      clear: $t,
      forEach: Ct(!1, !1),
    },
    t = {
      get(e) {
        return yt(this, e, !1, !0);
      },
      get size() {
        return wt(this);
      },
      has: bt,
      add: kt,
      set: xt,
      delete: _t,
      clear: $t,
      forEach: Ct(!1, !0),
    },
    n = {
      get(e) {
        return yt(this, e, !0);
      },
      get size() {
        return wt(this, !0);
      },
      has(e) {
        return bt.call(this, e, !0);
      },
      add: Rt("add"),
      set: Rt("set"),
      delete: Rt("delete"),
      clear: Rt("clear"),
      forEach: Ct(!0, !1),
    },
    r = {
      get(e) {
        return yt(this, e, !0, !0);
      },
      get size() {
        return wt(this, !0);
      },
      has(e) {
        return bt.call(this, e, !0);
      },
      add: Rt("add"),
      set: Rt("set"),
      delete: Rt("delete"),
      clear: Rt("clear"),
      forEach: Ct(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((l) => {
      (e[l] = St(l, !1, !1)),
        (n[l] = St(l, !0, !1)),
        (t[l] = St(l, !1, !0)),
        (r[l] = St(l, !0, !0));
    }),
    [e, n, t, r]
  );
}
const [Et, It, Lt, zt] = At();
function Ot(e, t) {
  const n = t ? (e ? zt : Lt) : e ? It : Et;
  return (t, r, l) =>
    "__v_isReactive" === r
      ? !e
      : "__v_isReadonly" === r
      ? e
      : "__v_raw" === r
      ? t
      : Reflect.get(le(n, r) && r in t ? n : t, r, l);
}
const jt = { get: Ot(!1, !1) },
  Tt = { get: Ot(!1, !0) },
  Ut = { get: Ot(!0, !1) },
  Pt = new WeakMap(),
  Mt = new WeakMap(),
  Ft = new WeakMap(),
  Nt = new WeakMap();
function Vt(e) {
  return Wt(e) ? e : Ht(e, !1, ht, jt, Pt);
}
function Dt(e) {
  return Ht(e, !0, ft, Ut, Ft);
}
function Ht(e, t, n, r, l) {
  if (!de(e)) return e;
  if (e.__v_raw && (!t || !e.__v_isReactive)) return e;
  const i = l.get(e);
  if (i) return i;
  const s =
    (o = e).__v_skip || !Object.isExtensible(o)
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
        })(me(o));
  var o;
  if (0 === s) return e;
  const a = new Proxy(e, 2 === s ? r : n);
  return l.set(e, a), a;
}
function Bt(e) {
  return Wt(e) ? Bt(e.__v_raw) : !(!e || !e.__v_isReactive);
}
function Wt(e) {
  return !(!e || !e.__v_isReadonly);
}
function qt(e) {
  return !(!e || !e.__v_isShallow);
}
function Zt(e) {
  return Bt(e) || Wt(e);
}
function Qt(e) {
  const t = e && e.__v_raw;
  return t ? Qt(t) : e;
}
function Kt(e) {
  return Ee(e, "__v_skip", !0), e;
}
const Gt = (e) => (de(e) ? Vt(e) : e),
  Jt = (e) => (de(e) ? Dt(e) : e);
function Xt(e) {
  Qe && He && Ye((e = Qt(e)).dep || (e.dep = Ue()));
}
function Yt(e, t) {
  const n = (e = Qt(e)).dep;
  n && tt(n);
}
function en(e) {
  return !(!e || !0 !== e.__v_isRef);
}
function tn(e) {
  return rn(e, !1);
}
function nn(e) {
  return rn(e, !0);
}
function rn(e, t) {
  return en(e) ? e : new ln(e, t);
}
class ln {
  constructor(e, t) {
    (this.__v_isShallow = t),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = t ? e : Qt(e)),
      (this._value = t ? e : Gt(e));
  }
  get value() {
    return Xt(this), this._value;
  }
  set value(e) {
    const t = this.__v_isShallow || qt(e) || Wt(e);
    (e = t ? e : Qt(e)),
      Re(e, this._rawValue) &&
        ((this._rawValue = e), (this._value = t ? e : Gt(e)), Yt(this));
  }
}
function sn(e) {
  return en(e) ? e.value : e;
}
const on = {
  get: (e, t, n) => sn(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const l = e[t];
    return en(l) && !en(n) ? ((l.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function an(e) {
  return Bt(e) ? e : new Proxy(e, on);
}
var cn;
class un {
  constructor(e, t, n, r) {
    (this._setter = t),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this[cn] = !1),
      (this._dirty = !0),
      (this.effect = new qe(e, () => {
        this._dirty || ((this._dirty = !0), Yt(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !r),
      (this.__v_isReadonly = n);
  }
  get value() {
    const e = Qt(this);
    return (
      Xt(e),
      (!e._dirty && e._cacheable) ||
        ((e._dirty = !1), (e._value = e.effect.run())),
      e._value
    );
  }
  set value(e) {
    this._setter(e);
  }
}
function pn(e, t, n, r) {
  let l;
  try {
    l = r ? e(...r) : e();
  } catch (e) {
    hn(e, t, n);
  }
  return l;
}
function dn(e, t, n, r) {
  if (ce(e)) {
    const l = pn(e, t, n, r);
    return (
      l &&
        he(l) &&
        l.catch((e) => {
          hn(e, t, n);
        }),
      l
    );
  }
  const l = [];
  for (let i = 0; i < e.length; i++) l.push(dn(e[i], t, n, r));
  return l;
}
function hn(e, t, n, r = !0) {
  t && t.vnode;
  if (t) {
    let r = t.parent;
    const l = t.proxy,
      i = n;
    for (; r; ) {
      const t = r.ec;
      if (t)
        for (let n = 0; n < t.length; n++) if (!1 === t[n](e, l, i)) return;
      r = r.parent;
    }
    const s = t.appContext.config.errorHandler;
    if (s) return void pn(s, null, 10, [e, l, i]);
  }
  !(function (e, t, n, r = !0) {
    console.error(e);
  })(e, 0, 0, r);
}
cn = "__v_isReadonly";
let fn = !1,
  gn = !1;
const mn = [];
let vn = 0;
const yn = [];
let bn = null,
  wn = 0;
const kn = Promise.resolve();
let xn = null;
function _n(e) {
  const t = xn || kn;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function $n(e) {
  (mn.length && mn.includes(e, fn && e.allowRecurse ? vn + 1 : vn)) ||
    (null == e.id
      ? mn.push(e)
      : mn.splice(
          (function (e) {
            let t = vn + 1,
              n = mn.length;
            for (; t < n; ) {
              const r = (t + n) >>> 1;
              An(mn[r]) < e ? (t = r + 1) : (n = r);
            }
            return t;
          })(e.id),
          0,
          e
        ),
    Cn());
}
function Cn() {
  fn || gn || ((gn = !0), (xn = kn.then(In)));
}
function Sn(e, t = fn ? vn + 1 : 0) {
  for (; t < mn.length; t++) {
    const e = mn[t];
    e && e.pre && (mn.splice(t, 1), t--, e());
  }
}
function Rn(e) {
  if (yn.length) {
    const e = [...new Set(yn)];
    if (((yn.length = 0), bn)) return void bn.push(...e);
    for (bn = e, bn.sort((e, t) => An(e) - An(t)), wn = 0; wn < bn.length; wn++)
      bn[wn]();
    (bn = null), (wn = 0);
  }
}
const An = (e) => (null == e.id ? 1 / 0 : e.id),
  En = (e, t) => {
    const n = An(e) - An(t);
    if (0 === n) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function In(e) {
  (gn = !1), (fn = !0), mn.sort(En);
  try {
    for (vn = 0; vn < mn.length; vn++) {
      const e = mn[vn];
      e && !1 !== e.active && pn(e, null, 14);
    }
  } finally {
    (vn = 0),
      (mn.length = 0),
      Rn(),
      (fn = !1),
      (xn = null),
      (mn.length || yn.length) && In();
  }
}
function Ln(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Q;
  let l = n;
  const i = t.startsWith("update:"),
    s = i && t.slice(7);
  if (s && s in r) {
    const e = `${"modelValue" === s ? "model" : s}Modifiers`,
      { number: t, trim: i } = r[e] || Q;
    i && (l = n.map((e) => (ue(e) ? e.trim() : e))), t && (l = n.map(Ie));
  }
  let o,
    a = r[(o = Se(t))] || r[(o = Se(xe(t)))];
  !a && i && (a = r[(o = Se($e(t)))]), a && dn(a, e, 6, l);
  const c = r[o + "Once"];
  if (c) {
    if (e.emitted) {
      if (e.emitted[o]) return;
    } else e.emitted = {};
    (e.emitted[o] = !0), dn(c, e, 6, l);
  }
}
function zn(e, t, n = !1) {
  const r = t.emitsCache,
    l = r.get(e);
  if (void 0 !== l) return l;
  const i = e.emits;
  let s = {};
  return i
    ? (ie(i) ? i.forEach((e) => (s[e] = null)) : te(s, i),
      de(e) && r.set(e, s),
      s)
    : (de(e) && r.set(e, null), null);
}
function On(e, t) {
  return (
    !(!e || !Y(t)) &&
    ((t = t.slice(2).replace(/Once$/, "")),
    le(e, t[0].toLowerCase() + t.slice(1)) || le(e, $e(t)) || le(e, t))
  );
}
let jn = null,
  Tn = null;
function Un(e) {
  const t = jn;
  return (jn = e), (Tn = (e && e.type.__scopeId) || null), t;
}
function Pn(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: l,
    props: i,
    propsOptions: [s],
    slots: o,
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
  const y = Un(e);
  try {
    if (4 & n.shapeFlag) {
      const e = l || r;
      (m = ll(u.call(e, e, p, i, h, d, f))), (v = a);
    } else {
      const e = t;
      (m = ll(
        e.length > 1 ? e(i, { attrs: a, slots: o, emit: c }) : e(i, null)
      )),
        (v = t.props ? a : Mn(a));
    }
  } catch (t) {
    (Nr.length = 0), hn(t, e, 1), (m = el(Mr));
  }
  let b = m;
  if (v && !1 !== g) {
    const e = Object.keys(v),
      { shapeFlag: t } = b;
    e.length && 7 & t && (s && e.some(ee) && (v = Fn(v, s)), (b = tl(b, v)));
  }
  return (
    n.dirs && ((b = tl(b)), (b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (b.transition = n.transition),
    (m = b),
    Un(y),
    m
  );
}
const Mn = (e) => {
    let t;
    for (const n in e)
      ("class" === n || "style" === n || Y(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Fn = (e, t) => {
    const n = {};
    for (const r in e) (ee(r) && r.slice(9) in t) || (n[r] = e[r]);
    return n;
  };
function Nn(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let l = 0; l < r.length; l++) {
    const i = r[l];
    if (t[i] !== e[i] && !On(n, i)) return !0;
  }
  return !1;
}
const Vn = (e) => e.__isSuspense;
function Dn(e, t, n = !1) {
  const r = ul || jn;
  if (r) {
    const l =
      null == r.parent
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides;
    if (l && e in l) return l[e];
    if (arguments.length > 1) return n && ce(t) ? t.call(r.proxy) : t;
  }
}
function Hn(e, t) {
  return qn(e, null, t);
}
const Bn = {};
function Wn(e, t, n) {
  return qn(e, t, n);
}
function qn(
  e,
  t,
  { immediate: n, deep: r, flush: l, onTrack: i, onTrigger: s } = Q
) {
  const o = Te() === (null == ul ? void 0 : ul.scope) ? ul : null;
  let a,
    c,
    u = !1,
    p = !1;
  if (
    (en(e)
      ? ((a = () => e.value), (u = qt(e)))
      : Bt(e)
      ? ((a = () => e), (r = !0))
      : ie(e)
      ? ((p = !0),
        (u = e.some((e) => Bt(e) || qt(e))),
        (a = () =>
          e.map((e) =>
            en(e) ? e.value : Bt(e) ? Zn(e) : ce(e) ? pn(e, o, 2) : void 0
          )))
      : (a = ce(e)
          ? t
            ? () => pn(e, o, 2)
            : () => {
                if (!o || !o.isUnmounted) return c && c(), dn(e, o, 3, [h]);
              }
          : G),
    t && r)
  ) {
    const e = a;
    a = () => Zn(e());
  }
  let d,
    h = (e) => {
      c = v.onStop = () => {
        pn(e, o, 4);
      };
    };
  if (gl) {
    if (
      ((h = G),
      t ? n && dn(t, o, 3, [a(), p ? [] : void 0, h]) : a(),
      "sync" !== l)
    )
      return G;
    {
      const e = xl();
      d = e.__watcherHandles || (e.__watcherHandles = []);
    }
  }
  let f = p ? new Array(e.length).fill(Bn) : Bn;
  const g = () => {
    if (v.active)
      if (t) {
        const e = v.run();
        (r || u || (p ? e.some((e, t) => Re(e, f[t])) : Re(e, f))) &&
          (c && c(),
          dn(t, o, 3, [e, f === Bn ? void 0 : p && f[0] === Bn ? [] : f, h]),
          (f = e));
      } else v.run();
  };
  let m;
  (g.allowRecurse = !!t),
    "sync" === l
      ? (m = g)
      : "post" === l
      ? (m = () => Lr(g, o && o.suspense))
      : ((g.pre = !0), o && (g.id = o.uid), (m = () => $n(g)));
  const v = new qe(a, m);
  t
    ? n
      ? g()
      : (f = v.run())
    : "post" === l
    ? Lr(v.run.bind(v), o && o.suspense)
    : v.run();
  const y = () => {
    v.stop(), o && o.scope && ne(o.scope.effects, v);
  };
  return d && d.push(y), y;
}
function Zn(e, t) {
  if (!de(e) || e.__v_skip) return e;
  if ((t = t || new Set()).has(e)) return e;
  if ((t.add(e), en(e))) Zn(e.value, t);
  else if (ie(e)) for (let n = 0; n < e.length; n++) Zn(e[n], t);
  else if (oe(e) || se(e))
    e.forEach((e) => {
      Zn(e, t);
    });
  else if (ve(e)) for (const n in e) Zn(e[n], t);
  return e;
}
function Qn(e) {
  return ce(e) ? { setup: e, name: e.name } : e;
}
const Kn = (e) => !!e.type.__asyncLoader,
  Gn = (e) => e.type.__isKeepAlive;
const Jn =
    (e) =>
    (t, n = ul) =>
      (!gl || "sp" === e) &&
      (function (e, t, n = ul, r = !1) {
        if (n) {
          const l = n[e] || (n[e] = []),
            i =
              t.__weh ||
              (t.__weh = (...r) => {
                if (n.isUnmounted) return;
                Ge(), dl(n);
                const l = dn(t, n, e, r);
                return hl(), Je(), l;
              });
          return r ? l.unshift(i) : l.push(i), i;
        }
      })(e, (...e) => t(...e), n),
  Xn = Jn("m"),
  Yn = Jn("bum"),
  er = Jn("um");
function tr(e, t) {
  const n = jn;
  if (null === n) return e;
  const r = yl(n) || n.proxy,
    l = e.dirs || (e.dirs = []);
  for (let e = 0; e < t.length; e++) {
    let [n, i, s, o = Q] = t[e];
    n &&
      (ce(n) && (n = { mounted: n, updated: n }),
      n.deep && Zn(i),
      l.push({
        dir: n,
        instance: r,
        value: i,
        oldValue: void 0,
        arg: s,
        modifiers: o,
      }));
  }
  return e;
}
function nr(e, t, n, r) {
  const l = e.dirs,
    i = t && t.dirs;
  for (let s = 0; s < l.length; s++) {
    const o = l[s];
    i && (o.oldValue = i[s].value);
    let a = o.dir[r];
    a && (Ge(), dn(a, n, 8, [e.el, o, e, t]), Je());
  }
}
const rr = "components";
function lr(e, t) {
  return (
    (function (e, t, n = !0, r = !1) {
      const l = jn || ul;
      if (l) {
        const n = l.type;
        if (e === rr) {
          const e = (function (e, t = !0) {
            return ce(e) ? e.displayName || e.name : e.name || (t && e.__name);
          })(n, !1);
          if (e && (e === t || e === xe(t) || e === Ce(xe(t)))) return n;
        }
        const i = sr(l[e] || n[e], t) || sr(l.appContext[e], t);
        return !i && r ? n : i;
      }
    })(rr, e, !0, t) || e
  );
}
const ir = Symbol();
function sr(e, t) {
  return e && (e[t] || e[xe(t)] || e[Ce(xe(t))]);
}
function or(e, t, n, r) {
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
      for (let r = 0, s = n.length; r < s; r++) {
        const s = n[r];
        l[r] = t(e[s], s, r, i && i[r]);
      }
    }
  else l = [];
  return n && (n[r] = l), l;
}
const ar = (e) => (e ? (fl(e) ? yl(e) || e.proxy : ar(e.parent)) : null),
  cr = te(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ar(e.parent),
    $root: (e) => ar(e.root),
    $emit: (e) => e.emit,
    $options: (e) => e.type,
    $forceUpdate: (e) => e.f || (e.f = () => $n(e.update)),
    $nextTick: (e) => e.n || (e.n = _n.bind(e.proxy)),
    $watch: (e) => G,
  }),
  ur = (e, t) => e !== Q && !e.__isScriptSetup && le(e, t),
  pr = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: r,
        data: l,
        props: i,
        accessCache: s,
        type: o,
        appContext: a,
      } = e;
      let c;
      if ("$" !== t[0]) {
        const o = s[t];
        if (void 0 !== o)
          switch (o) {
            case 1:
              return r[t];
            case 2:
              return l[t];
            case 4:
              return n[t];
            case 3:
              return i[t];
          }
        else {
          if (ur(r, t)) return (s[t] = 1), r[t];
          if (l !== Q && le(l, t)) return (s[t] = 2), l[t];
          if ((c = e.propsOptions[0]) && le(c, t)) return (s[t] = 3), i[t];
          if (n !== Q && le(n, t)) return (s[t] = 4), n[t];
          s[t] = 0;
        }
      }
      const u = cr[t];
      let p, d;
      return u
        ? ("$attrs" === t && Xe(e, 0, t), u(e))
        : (p = o.__cssModules) && (p = p[t])
        ? p
        : n !== Q && le(n, t)
        ? ((s[t] = 4), n[t])
        : ((d = a.config.globalProperties), le(d, t) ? d[t] : void 0);
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: l, ctx: i } = e;
      return ur(l, t)
        ? ((l[t] = n), !0)
        : r !== Q && le(r, t)
        ? ((r[t] = n), !0)
        : !le(e.props, t) &&
          ("$" !== t[0] || !(t.slice(1) in e)) &&
          ((i[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: r,
          appContext: l,
          propsOptions: i,
        },
      },
      s
    ) {
      let o;
      return (
        !!n[s] ||
        (e !== Q && le(e, s)) ||
        ur(t, s) ||
        ((o = i[0]) && le(o, s)) ||
        le(r, s) ||
        le(cr, s) ||
        le(l.config.globalProperties, s)
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
function dr(e, t, n, r = !1) {
  const l = {},
    i = {};
  Ee(i, Gr, 1), (e.propsDefaults = Object.create(null)), hr(e, t, l, i);
  for (const t in e.propsOptions[0]) t in l || (l[t] = void 0);
  n
    ? (e.props = r ? l : Ht(l, !1, gt, Tt, Mt))
    : e.type.props
    ? (e.props = l)
    : (e.props = i),
    (e.attrs = i);
}
function hr(e, t, n, r) {
  const [l, i] = e.propsOptions;
  let s,
    o = !1;
  if (t)
    for (let a in t) {
      if (be(a)) continue;
      const c = t[a];
      let u;
      l && le(l, (u = xe(a)))
        ? i && i.includes(u)
          ? ((s || (s = {}))[u] = c)
          : (n[u] = c)
        : On(e.emitsOptions, a) ||
          (a in r && c === r[a]) ||
          ((r[a] = c), (o = !0));
    }
  if (i) {
    const t = Qt(n),
      r = s || Q;
    for (let s = 0; s < i.length; s++) {
      const o = i[s];
      n[o] = fr(l, t, o, r[o], e, !le(r, o));
    }
  }
  return o;
}
function fr(e, t, n, r, l, i) {
  const s = e[n];
  if (null != s) {
    const e = le(s, "default");
    if (e && void 0 === r) {
      const e = s.default;
      if (s.type !== Function && ce(e)) {
        const { propsDefaults: i } = l;
        n in i ? (r = i[n]) : (dl(l), (r = i[n] = e.call(null, t)), hl());
      } else r = e;
    }
    s[0] &&
      (i && !e ? (r = !1) : !s[1] || ("" !== r && r !== $e(n)) || (r = !0));
  }
  return r;
}
function gr(e, t, n = !1) {
  const r = t.propsCache,
    l = r.get(e);
  if (l) return l;
  const i = e.props,
    s = {},
    o = [];
  if (!i) return de(e) && r.set(e, K), K;
  if (ie(i))
    for (let e = 0; e < i.length; e++) {
      const t = xe(i[e]);
      mr(t) && (s[t] = Q);
    }
  else if (i)
    for (const e in i) {
      const t = xe(e);
      if (mr(t)) {
        const n = i[e],
          r = (s[t] = ie(n) || ce(n) ? { type: n } : Object.assign({}, n));
        if (r) {
          const e = br(Boolean, r.type),
            n = br(String, r.type);
          (r[0] = e > -1),
            (r[1] = n < 0 || e < n),
            (e > -1 || le(r, "default")) && o.push(t);
        }
      }
    }
  const a = [s, o];
  return de(e) && r.set(e, a), a;
}
function mr(e) {
  return "$" !== e[0];
}
function vr(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : null === e ? "null" : "";
}
function yr(e, t) {
  return vr(e) === vr(t);
}
function br(e, t) {
  return ie(t) ? t.findIndex((t) => yr(t, e)) : ce(t) && yr(t, e) ? 0 : -1;
}
const wr = (e) => "_" === e[0] || "$stable" === e,
  kr = (e) => (ie(e) ? e.map(ll) : [ll(e)]),
  xr = (e, t, n) => {
    if (t._n) return t;
    const r = (function (e, t = jn, n) {
      if (!t) return e;
      if (e._n) return e;
      const r = (...n) => {
        r._d && Br(-1);
        const l = Un(t);
        let i;
        try {
          i = e(...n);
        } finally {
          Un(l), r._d && Br(1);
        }
        return i;
      };
      return (r._n = !0), (r._c = !0), (r._d = !0), r;
    })((...e) => kr(t(...e)), n);
    return (r._c = !1), r;
  },
  _r = (e, t, n) => {
    const r = e._ctx;
    for (const n in e) {
      if (wr(n)) continue;
      const l = e[n];
      if (ce(l)) t[n] = xr(0, l, r);
      else if (null != l) {
        const e = kr(l);
        t[n] = () => e;
      }
    }
  },
  $r = (e, t) => {
    const n = kr(t);
    e.slots.default = () => n;
  },
  Cr = (e, t) => {
    if (32 & e.vnode.shapeFlag) {
      const n = t._;
      n ? ((e.slots = Qt(t)), Ee(t, "_", n)) : _r(t, (e.slots = {}));
    } else (e.slots = {}), t && $r(e, t);
    Ee(e.slots, Gr, 1);
  },
  Sr = (e, t, n) => {
    const { vnode: r, slots: l } = e;
    let i = !0,
      s = Q;
    if (32 & r.shapeFlag) {
      const e = t._;
      e
        ? n && 1 === e
          ? (i = !1)
          : (te(l, t), n || 1 !== e || delete l._)
        : ((i = !t.$stable), _r(t, l)),
        (s = t);
    } else t && ($r(e, t), (s = { default: 1 }));
    if (i) for (const e in l) wr(e) || e in s || delete l[e];
  };
function Rr() {
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
let Ar = 0;
function Er(e, t) {
  return function (n, r = null) {
    ce(n) || (n = Object.assign({}, n)), null == r || de(r) || (r = null);
    const l = Rr(),
      i = new Set();
    let s = !1;
    const o = (l.app = {
      _uid: Ar++,
      _component: n,
      _props: r,
      _container: null,
      _context: l,
      _instance: null,
      version: _l,
      get config() {
        return l.config;
      },
      set config(e) {},
      use: (e, ...t) => (
        i.has(e) ||
          (e && ce(e.install)
            ? (i.add(e), e.install(o, ...t))
            : ce(e) && (i.add(e), e(o, ...t))),
        o
      ),
      mixin: (e) => o,
      component: (e, t) => (t ? ((l.components[e] = t), o) : l.components[e]),
      directive: (e, t) => (t ? ((l.directives[e] = t), o) : l.directives[e]),
      mount(i, a, c) {
        if (!s) {
          const u = el(n, r);
          return (
            (u.appContext = l),
            a && t ? t(u, i) : e(u, i, c),
            (s = !0),
            (o._container = i),
            (i.__vue_app__ = o),
            yl(u.component) || u.component.proxy
          );
        }
      },
      unmount() {
        s && (e(null, o._container), delete o._container.__vue_app__);
      },
      provide: (e, t) => ((l.provides[e] = t), o),
    });
    return o;
  };
}
function Ir(e, t, n, r, l = !1) {
  if (ie(e))
    return void e.forEach((e, i) => Ir(e, t && (ie(t) ? t[i] : t), n, r, l));
  if (Kn(r) && !l) return;
  const i = 4 & r.shapeFlag ? yl(r.component) || r.component.proxy : r.el,
    s = l ? null : i,
    { i: o, r: a } = e,
    c = t && t.r,
    u = o.refs === Q ? (o.refs = {}) : o.refs,
    p = o.setupState;
  if (
    (null != c &&
      c !== a &&
      (ue(c)
        ? ((u[c] = null), le(p, c) && (p[c] = null))
        : en(c) && (c.value = null)),
    ce(a))
  )
    pn(a, o, 12, [s, u]);
  else {
    const t = ue(a),
      r = en(a);
    if (t || r) {
      const o = () => {
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
            ? ((u[a] = s), le(p, a) && (p[a] = s))
            : r && ((a.value = s), e.k && (u[e.k] = s));
      };
      s ? ((o.id = -1), Lr(o, n)) : o();
    }
  }
}
const Lr = function (e, t) {
  var n;
  t && t.pendingBranch
    ? ie(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : (ie((n = e))
        ? yn.push(...n)
        : (bn && bn.includes(n, n.allowRecurse ? wn + 1 : wn)) || yn.push(n),
      Cn());
};
function zr(e) {
  return (function (e, t) {
    ze().__VUE__ = !0;
    const {
        insert: n,
        remove: r,
        patchProp: l,
        createElement: i,
        createText: s,
        createComment: o,
        setText: a,
        setElementText: c,
        parentNode: u,
        nextSibling: p,
        setScopeId: d = G,
        insertStaticContent: h,
      } = e,
      f = (
        e,
        t,
        n,
        r = null,
        l = null,
        i = null,
        s = !1,
        o = null,
        a = !!t.dynamicChildren
      ) => {
        if (e === t) return;
        e && !Kr(e, t) && ((r = D(e)), P(e, l, i, !0), (e = null)),
          -2 === t.patchFlag && ((a = !1), (t.dynamicChildren = null));
        const { type: c, ref: u, shapeFlag: p } = t;
        switch (c) {
          case Pr:
            g(e, t, n, r);
            break;
          case Mr:
            m(e, t, n, r);
            break;
          case Fr:
            null == e && v(t, n, r, s);
            break;
          case Ur:
            R(e, t, n, r, l, i, s, o, a);
            break;
          default:
            1 & p
              ? w(e, t, n, r, l, i, s, o, a)
              : 6 & p
              ? A(e, t, n, r, l, i, s, o, a)
              : (64 & p || 128 & p) && c.process(e, t, n, r, l, i, s, o, a, B);
        }
        null != u && l && Ir(u, e && e.ref, i, t || e, !t);
      },
      g = (e, t, r, l) => {
        if (null == e) n((t.el = s(t.children)), r, l);
        else {
          const n = (t.el = e.el);
          t.children !== e.children && a(n, t.children);
        }
      },
      m = (e, t, r, l) => {
        null == e ? n((t.el = o(t.children || "")), r, l) : (t.el = e.el);
      },
      v = (e, t, n, r) => {
        [e.el, e.anchor] = h(e.children, t, n, r, e.el, e.anchor);
      },
      y = ({ el: e, anchor: t }, r, l) => {
        let i;
        for (; e && e !== t; ) (i = p(e)), n(e, r, l), (e = i);
        n(t, r, l);
      },
      b = ({ el: e, anchor: t }) => {
        let n;
        for (; e && e !== t; ) (n = p(e)), r(e), (e = n);
        r(t);
      },
      w = (e, t, n, r, l, i, s, o, a) => {
        (s = s || "svg" === t.type),
          null == e ? k(t, n, r, l, i, s, o, a) : $(e, t, l, i, s, o, a);
      },
      k = (e, t, r, s, o, a, u, p) => {
        let d, h;
        const { type: f, props: g, shapeFlag: m, transition: v, dirs: y } = e;
        if (
          ((d = e.el = i(e.type, a, g && g.is, g)),
          8 & m
            ? c(d, e.children)
            : 16 & m &&
              _(e.children, d, null, s, o, a && "foreignObject" !== f, u, p),
          y && nr(e, null, s, "created"),
          x(d, e, e.scopeId, u, s),
          g)
        ) {
          for (const t in g)
            "value" === t ||
              be(t) ||
              l(d, t, null, g[t], a, e.children, s, o, V);
          "value" in g && l(d, "value", null, g.value),
            (h = g.onVnodeBeforeMount) && ol(h, s, e);
        }
        y && nr(e, null, s, "beforeMount");
        const b = (!o || (o && !o.pendingBranch)) && v && !v.persisted;
        b && v.beforeEnter(d),
          n(d, t, r),
          ((h = g && g.onVnodeMounted) || b || y) &&
            Lr(() => {
              h && ol(h, s, e), b && v.enter(d), y && nr(e, null, s, "mounted");
            }, o);
      },
      x = (e, t, n, r, l) => {
        if ((n && d(e, n), r)) for (let t = 0; t < r.length; t++) d(e, r[t]);
        if (l) {
          if (t === l.subTree) {
            const t = l.vnode;
            x(e, t, t.scopeId, t.slotScopeIds, l.parent);
          }
        }
      },
      _ = (e, t, n, r, l, i, s, o, a = 0) => {
        for (let c = a; c < e.length; c++) {
          const a = (e[c] = o ? il(e[c]) : ll(e[c]));
          f(null, a, t, n, r, l, i, s, o);
        }
      },
      $ = (e, t, n, r, i, s, o) => {
        const a = (t.el = e.el);
        let { patchFlag: u, dynamicChildren: p, dirs: d } = t;
        u |= 16 & e.patchFlag;
        const h = e.props || Q,
          f = t.props || Q;
        let g;
        n && Or(n, !1),
          (g = f.onVnodeBeforeUpdate) && ol(g, n, t, e),
          d && nr(t, e, n, "beforeUpdate"),
          n && Or(n, !0);
        const m = i && "foreignObject" !== t.type;
        if (
          (p
            ? C(e.dynamicChildren, p, a, n, r, m, s)
            : o || O(e, t, a, null, n, r, m, s, !1),
          u > 0)
        ) {
          if (16 & u) S(a, t, h, f, n, r, i);
          else if (
            (2 & u && h.class !== f.class && l(a, "class", null, f.class, i),
            4 & u && l(a, "style", h.style, f.style, i),
            8 & u)
          ) {
            const s = t.dynamicProps;
            for (let t = 0; t < s.length; t++) {
              const o = s[t],
                c = h[o],
                u = f[o];
              (u === c && "value" !== o) ||
                l(a, o, c, u, i, e.children, n, r, V);
            }
          }
          1 & u && e.children !== t.children && c(a, t.children);
        } else o || null != p || S(a, t, h, f, n, r, i);
        ((g = f.onVnodeUpdated) || d) &&
          Lr(() => {
            g && ol(g, n, t, e), d && nr(t, e, n, "updated");
          }, r);
      },
      C = (e, t, n, r, l, i, s) => {
        for (let o = 0; o < t.length; o++) {
          const a = e[o],
            c = t[o],
            p =
              a.el && (a.type === Ur || !Kr(a, c) || 70 & a.shapeFlag)
                ? u(a.el)
                : n;
          f(a, c, p, null, r, l, i, s, !0);
        }
      },
      S = (e, t, n, r, i, s, o) => {
        if (n !== r) {
          if (n !== Q)
            for (const a in n)
              be(a) || a in r || l(e, a, n[a], null, o, t.children, i, s, V);
          for (const a in r) {
            if (be(a)) continue;
            const c = r[a],
              u = n[a];
            c !== u && "value" !== a && l(e, a, u, c, o, t.children, i, s, V);
          }
          "value" in r && l(e, "value", n.value, r.value);
        }
      },
      R = (e, t, r, l, i, o, a, c, u) => {
        const p = (t.el = e ? e.el : s("")),
          d = (t.anchor = e ? e.anchor : s(""));
        let { patchFlag: h, dynamicChildren: f, slotScopeIds: g } = t;
        g && (c = c ? c.concat(g) : g),
          null == e
            ? (n(p, r, l), n(d, r, l), _(t.children, r, d, i, o, a, c, u))
            : h > 0 && 64 & h && f && e.dynamicChildren
            ? (C(e.dynamicChildren, f, r, i, o, a, c),
              (null != t.key || (i && t === i.subTree)) && jr(e, t, !0))
            : O(e, t, r, d, i, o, a, c, u);
      },
      A = (e, t, n, r, l, i, s, o, a) => {
        (t.slotScopeIds = o),
          null == e
            ? 512 & t.shapeFlag
              ? l.ctx.activate(t, n, r, s, a)
              : E(t, n, r, l, i, s, a)
            : I(e, t, a);
      },
      E = (e, t, n, r, l, i, s) => {
        const o = (e.component = (function (e, t, n) {
          const r = e.type,
            l = (t ? t.appContext : e.appContext) || al,
            i = {
              uid: cl++,
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
              propsOptions: gr(r, l),
              emitsOptions: zn(r, l),
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
          (i.ctx = { _: i }),
            (i.root = t ? t.root : i),
            (i.emit = Ln.bind(null, i)),
            e.ce && e.ce(i);
          return i;
        })(e, r, l));
        if (
          (Gn(e) && (o.ctx.renderer = B),
          (function (e, t = !1) {
            gl = t;
            const { props: n, children: r } = e.vnode,
              l = fl(e);
            dr(e, n, l, t), Cr(e, r);
            const i = l
              ? (function (e, t) {
                  const n = e.type;
                  (e.accessCache = Object.create(null)),
                    (e.proxy = Kt(new Proxy(e.ctx, pr)));
                  const { setup: r } = n;
                  if (r) {
                    const n = (e.setupContext =
                      r.length > 1
                        ? (function (e) {
                            const t = (t) => {
                              e.exposed = t || {};
                            };
                            let n;
                            return {
                              get attrs() {
                                return (
                                  n ||
                                  (n = (function (e) {
                                    return new Proxy(e.attrs, {
                                      get: (t, n) => (Xe(e, 0, "$attrs"), t[n]),
                                    });
                                  })(e))
                                );
                              },
                              slots: e.slots,
                              emit: e.emit,
                              expose: t,
                            };
                          })(e)
                        : null);
                    dl(e), Ge();
                    const l = pn(r, e, 0, [e.props, n]);
                    if ((Je(), hl(), he(l))) {
                      if ((l.then(hl, hl), t))
                        return l
                          .then((n) => {
                            ml(e, n, t);
                          })
                          .catch((t) => {
                            hn(t, e, 0);
                          });
                      e.asyncDep = l;
                    } else ml(e, l, t);
                  } else vl(e, t);
                })(e, t)
              : void 0;
            gl = !1;
          })(o),
          o.asyncDep)
        ) {
          if ((l && l.registerDep(o, L), !e.el)) {
            const e = (o.subTree = el(Mr));
            m(null, e, t, n);
          }
        } else L(o, e, t, n, l, i, s);
      },
      I = (e, t, n) => {
        const r = (t.component = e.component);
        if (
          (function (e, t, n) {
            const { props: r, children: l, component: i } = e,
              { props: s, children: o, patchFlag: a } = t,
              c = i.emitsOptions;
            if (t.dirs || t.transition) return !0;
            if (!(n && a >= 0))
              return (
                !((!l && !o) || (o && o.$stable)) ||
                (r !== s && (r ? !s || Nn(r, s, c) : !!s))
              );
            if (1024 & a) return !0;
            if (16 & a) return r ? Nn(r, s, c) : !!s;
            if (8 & a) {
              const e = t.dynamicProps;
              for (let t = 0; t < e.length; t++) {
                const n = e[t];
                if (s[n] !== r[n] && !On(c, n)) return !0;
              }
            }
            return !1;
          })(e, t, n)
        ) {
          if (r.asyncDep && !r.asyncResolved) return void z(r, t, n);
          (r.next = t),
            (function (e) {
              const t = mn.indexOf(e);
              t > vn && mn.splice(t, 1);
            })(r.update),
            r.update();
        } else (t.el = e.el), (r.vnode = t);
      },
      L = (e, t, n, r, l, i, s) => {
        const o = () => {
            if (e.isMounted) {
              let t,
                { next: n, bu: r, u: o, parent: a, vnode: c } = e,
                p = n;
              Or(e, !1),
                n ? ((n.el = c.el), z(e, n, s)) : (n = c),
                r && Ae(r),
                (t = n.props && n.props.onVnodeBeforeUpdate) && ol(t, a, n, c),
                Or(e, !0);
              const d = Pn(e),
                h = e.subTree;
              (e.subTree = d),
                f(h, d, u(h.el), D(h), e, l, i),
                (n.el = d.el),
                null === p &&
                  (function ({ vnode: e, parent: t }, n) {
                    for (; t && t.subTree === e; )
                      ((e = t.vnode).el = n), (t = t.parent);
                  })(e, d.el),
                o && Lr(o, l),
                (t = n.props && n.props.onVnodeUpdated) &&
                  Lr(() => ol(t, a, n, c), l);
            } else {
              let s;
              const { el: o, props: a } = t,
                { bm: c, m: u, parent: p } = e,
                d = Kn(t);
              if (
                (Or(e, !1),
                c && Ae(c),
                !d && (s = a && a.onVnodeBeforeMount) && ol(s, p, t),
                Or(e, !0),
                o && q)
              ) {
                const n = () => {
                  (e.subTree = Pn(e)), q(o, e.subTree, e, l, null);
                };
                d
                  ? t.type.__asyncLoader().then(() => !e.isUnmounted && n())
                  : n();
              } else {
                const s = (e.subTree = Pn(e));
                f(null, s, n, r, e, l, i), (t.el = s.el);
              }
              if ((u && Lr(u, l), !d && (s = a && a.onVnodeMounted))) {
                const e = t;
                Lr(() => ol(s, p, e), l);
              }
              (256 & t.shapeFlag ||
                (p && Kn(p.vnode) && 256 & p.vnode.shapeFlag)) &&
                e.a &&
                Lr(e.a, l),
                (e.isMounted = !0),
                (t = n = r = null);
            }
          },
          a = (e.effect = new qe(o, () => $n(c), e.scope)),
          c = (e.update = () => a.run());
        (c.id = e.uid), Or(e, !0), c();
      },
      z = (e, t, n) => {
        t.component = e;
        const r = e.vnode.props;
        (e.vnode = t),
          (e.next = null),
          (function (e, t, n, r) {
            const {
                props: l,
                attrs: i,
                vnode: { patchFlag: s },
              } = e,
              o = Qt(l),
              [a] = e.propsOptions;
            let c = !1;
            if (!(r || s > 0) || 16 & s) {
              let r;
              hr(e, t, l, i) && (c = !0);
              for (const i in o)
                (t && (le(t, i) || ((r = $e(i)) !== i && le(t, r)))) ||
                  (a
                    ? !n ||
                      (void 0 === n[i] && void 0 === n[r]) ||
                      (l[i] = fr(a, o, i, void 0, e, !0))
                    : delete l[i]);
              if (i !== o)
                for (const e in i) (t && le(t, e)) || (delete i[e], (c = !0));
            } else if (8 & s) {
              const n = e.vnode.dynamicProps;
              for (let r = 0; r < n.length; r++) {
                let s = n[r];
                if (On(e.emitsOptions, s)) continue;
                const u = t[s];
                if (a)
                  if (le(i, s)) u !== i[s] && ((i[s] = u), (c = !0));
                  else {
                    const t = xe(s);
                    l[t] = fr(a, o, t, u, e, !1);
                  }
                else u !== i[s] && ((i[s] = u), (c = !0));
              }
            }
            c && et(e, "set", "$attrs");
          })(e, t.props, r, n),
          Sr(e, t.children, n),
          Ge(),
          Sn(),
          Je();
      },
      O = (e, t, n, r, l, i, s, o, a = !1) => {
        const u = e && e.children,
          p = e ? e.shapeFlag : 0,
          d = t.children,
          { patchFlag: h, shapeFlag: f } = t;
        if (h > 0) {
          if (128 & h) return void T(u, d, n, r, l, i, s, o, a);
          if (256 & h) return void j(u, d, n, r, l, i, s, o, a);
        }
        8 & f
          ? (16 & p && V(u, l, i), d !== u && c(n, d))
          : 16 & p
          ? 16 & f
            ? T(u, d, n, r, l, i, s, o, a)
            : V(u, l, i, !0)
          : (8 & p && c(n, ""), 16 & f && _(d, n, r, l, i, s, o, a));
      },
      j = (e, t, n, r, l, i, s, o, a) => {
        t = t || K;
        const c = (e = e || K).length,
          u = t.length,
          p = Math.min(c, u);
        let d;
        for (d = 0; d < p; d++) {
          const r = (t[d] = a ? il(t[d]) : ll(t[d]));
          f(e[d], r, n, null, l, i, s, o, a);
        }
        c > u ? V(e, l, i, !0, !1, p) : _(t, n, r, l, i, s, o, a, p);
      },
      T = (e, t, n, r, l, i, s, o, a) => {
        let c = 0;
        const u = t.length;
        let p = e.length - 1,
          d = u - 1;
        for (; c <= p && c <= d; ) {
          const r = e[c],
            u = (t[c] = a ? il(t[c]) : ll(t[c]));
          if (!Kr(r, u)) break;
          f(r, u, n, null, l, i, s, o, a), c++;
        }
        for (; c <= p && c <= d; ) {
          const r = e[p],
            c = (t[d] = a ? il(t[d]) : ll(t[d]));
          if (!Kr(r, c)) break;
          f(r, c, n, null, l, i, s, o, a), p--, d--;
        }
        if (c > p) {
          if (c <= d) {
            const e = d + 1,
              p = e < u ? t[e].el : r;
            for (; c <= d; )
              f(null, (t[c] = a ? il(t[c]) : ll(t[c])), n, p, l, i, s, o, a),
                c++;
          }
        } else if (c > d) for (; c <= p; ) P(e[c], l, i, !0), c++;
        else {
          const h = c,
            g = c,
            m = new Map();
          for (c = g; c <= d; c++) {
            const e = (t[c] = a ? il(t[c]) : ll(t[c]));
            null != e.key && m.set(e.key, c);
          }
          let v,
            y = 0;
          const b = d - g + 1;
          let w = !1,
            k = 0;
          const x = new Array(b);
          for (c = 0; c < b; c++) x[c] = 0;
          for (c = h; c <= p; c++) {
            const r = e[c];
            if (y >= b) {
              P(r, l, i, !0);
              continue;
            }
            let u;
            if (null != r.key) u = m.get(r.key);
            else
              for (v = g; v <= d; v++)
                if (0 === x[v - g] && Kr(r, t[v])) {
                  u = v;
                  break;
                }
            void 0 === u
              ? P(r, l, i, !0)
              : ((x[u - g] = c + 1),
                u >= k ? (k = u) : (w = !0),
                f(r, t[u], n, null, l, i, s, o, a),
                y++);
          }
          const _ = w
            ? (function (e) {
                const t = e.slice(),
                  n = [0];
                let r, l, i, s, o;
                const a = e.length;
                for (r = 0; r < a; r++) {
                  const a = e[r];
                  if (0 !== a) {
                    if (((l = n[n.length - 1]), e[l] < a)) {
                      (t[r] = l), n.push(r);
                      continue;
                    }
                    for (i = 0, s = n.length - 1; i < s; )
                      (o = (i + s) >> 1), e[n[o]] < a ? (i = o + 1) : (s = o);
                    a < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), (n[i] = r));
                  }
                }
                (i = n.length), (s = n[i - 1]);
                for (; i-- > 0; ) (n[i] = s), (s = t[s]);
                return n;
              })(x)
            : K;
          for (v = _.length - 1, c = b - 1; c >= 0; c--) {
            const e = g + c,
              p = t[e],
              d = e + 1 < u ? t[e + 1].el : r;
            0 === x[c]
              ? f(null, p, n, d, l, i, s, o, a)
              : w && (v < 0 || c !== _[v] ? U(p, n, d, 2) : v--);
          }
        }
      },
      U = (e, t, r, l, i = null) => {
        const { el: s, type: o, transition: a, children: c, shapeFlag: u } = e;
        if (6 & u) return void U(e.component.subTree, t, r, l);
        if (128 & u) return void e.suspense.move(t, r, l);
        if (64 & u) return void o.move(e, t, r, B);
        if (o === Ur) {
          n(s, t, r);
          for (let e = 0; e < c.length; e++) U(c[e], t, r, l);
          return void n(e.anchor, t, r);
        }
        if (o === Fr) return void y(e, t, r);
        if (2 !== l && 1 & u && a)
          if (0 === l) a.beforeEnter(s), n(s, t, r), Lr(() => a.enter(s), i);
          else {
            const { leave: e, delayLeave: l, afterLeave: i } = a,
              o = () => n(s, t, r),
              c = () => {
                e(s, () => {
                  o(), i && i();
                });
              };
            l ? l(s, o, c) : c();
          }
        else n(s, t, r);
      },
      P = (e, t, n, r = !1, l = !1) => {
        const {
          type: i,
          props: s,
          ref: o,
          children: a,
          dynamicChildren: c,
          shapeFlag: u,
          patchFlag: p,
          dirs: d,
        } = e;
        if ((null != o && Ir(o, null, n, e, !0), 256 & u))
          return void t.ctx.deactivate(e);
        const h = 1 & u && d,
          f = !Kn(e);
        let g;
        if ((f && (g = s && s.onVnodeBeforeUnmount) && ol(g, t, e), 6 & u))
          N(e.component, n, r);
        else {
          if (128 & u) return void e.suspense.unmount(n, r);
          h && nr(e, null, t, "beforeUnmount"),
            64 & u
              ? e.type.remove(e, t, n, l, B, r)
              : c && (i !== Ur || (p > 0 && 64 & p))
              ? V(c, t, n, !1, !0)
              : ((i === Ur && 384 & p) || (!l && 16 & u)) && V(a, t, n),
            r && M(e);
        }
        ((f && (g = s && s.onVnodeUnmounted)) || h) &&
          Lr(() => {
            g && ol(g, t, e), h && nr(e, null, t, "unmounted");
          }, n);
      },
      M = (e) => {
        const { type: t, el: n, anchor: l, transition: i } = e;
        if (t === Ur) return void F(n, l);
        if (t === Fr) return void b(e);
        const s = () => {
          r(n), i && !i.persisted && i.afterLeave && i.afterLeave();
        };
        if (1 & e.shapeFlag && i && !i.persisted) {
          const { leave: t, delayLeave: r } = i,
            l = () => t(n, s);
          r ? r(e.el, s, l) : l();
        } else s();
      },
      F = (e, t) => {
        let n;
        for (; e !== t; ) (n = p(e)), r(e), (e = n);
        r(t);
      },
      N = (e, t, n) => {
        const { bum: r, scope: l, update: i, subTree: s, um: o } = e;
        r && Ae(r),
          l.stop(),
          i && ((i.active = !1), P(s, e, t, n)),
          o && Lr(o, t),
          Lr(() => {
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
      V = (e, t, n, r = !1, l = !1, i = 0) => {
        for (let s = i; s < e.length; s++) P(e[s], t, n, r, l);
      },
      D = (e) =>
        6 & e.shapeFlag
          ? D(e.component.subTree)
          : 128 & e.shapeFlag
          ? e.suspense.next()
          : p(e.anchor || e.el),
      H = (e, t, n) => {
        null == e
          ? t._vnode && P(t._vnode, null, null, !0)
          : f(t._vnode || null, e, t, null, null, null, n),
          Sn(),
          Rn(),
          (t._vnode = e);
      },
      B = { p: f, um: P, m: U, r: M, mt: E, mc: _, pc: O, pbc: C, n: D, o: e };
    let W, q;
    t && ([W, q] = t(B));
    return { render: H, hydrate: W, createApp: Er(H, W) };
  })(e);
}
function Or({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function jr(e, t, n = !1) {
  const r = e.children,
    l = t.children;
  if (ie(r) && ie(l))
    for (let e = 0; e < r.length; e++) {
      const t = r[e];
      let i = l[e];
      1 & i.shapeFlag &&
        !i.dynamicChildren &&
        ((i.patchFlag <= 0 || 32 === i.patchFlag) &&
          ((i = l[e] = il(l[e])), (i.el = t.el)),
        n || jr(t, i)),
        i.type === Pr && (i.el = t.el);
    }
}
const Tr = (e) => e.__isTeleport,
  Ur = Symbol(void 0),
  Pr = Symbol(void 0),
  Mr = Symbol(void 0),
  Fr = Symbol(void 0),
  Nr = [];
let Vr = null;
function Dr(e = !1) {
  Nr.push((Vr = e ? null : []));
}
let Hr = 1;
function Br(e) {
  Hr += e;
}
function Wr(e) {
  return (
    (e.dynamicChildren = Hr > 0 ? Vr || K : null),
    Nr.pop(),
    (Vr = Nr[Nr.length - 1] || null),
    Hr > 0 && Vr && Vr.push(e),
    e
  );
}
function qr(e, t, n, r, l, i) {
  return Wr(Yr(e, t, n, r, l, i, !0));
}
function Zr(e, t, n, r, l) {
  return Wr(el(e, t, n, r, l, !0));
}
function Qr(e) {
  return !!e && !0 === e.__v_isVNode;
}
function Kr(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Gr = "__vInternal",
  Jr = ({ key: e }) => (null != e ? e : null),
  Xr = ({ ref: e, ref_key: t, ref_for: n }) =>
    null != e
      ? ue(e) || en(e) || ce(e)
        ? { i: jn, r: e, k: t, f: !!n }
        : e
      : null;
function Yr(
  e,
  t = null,
  n = null,
  r = 0,
  l = null,
  i = e === Ur ? 0 : 1,
  s = !1,
  o = !1
) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Jr(t),
    ref: t && Xr(t),
    scopeId: Tn,
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
    ctx: jn,
  };
  return (
    o
      ? (sl(a, n), 128 & i && e.normalize(a))
      : n && (a.shapeFlag |= ue(n) ? 8 : 16),
    Hr > 0 &&
      !s &&
      Vr &&
      (a.patchFlag > 0 || 6 & i) &&
      32 !== a.patchFlag &&
      Vr.push(a),
    a
  );
}
const el = function (e, t = null, n = null, r = 0, l = null, i = !1) {
  (e && e !== ir) || (e = Mr);
  if (Qr(e)) {
    const r = tl(e, t, !0);
    return (
      n && sl(r, n),
      Hr > 0 &&
        !i &&
        Vr &&
        (6 & r.shapeFlag ? (Vr[Vr.indexOf(e)] = r) : Vr.push(r)),
      (r.patchFlag |= -2),
      r
    );
  }
  (s = e), ce(s) && "__vccOpts" in s && (e = e.__vccOpts);
  var s;
  if (t) {
    t = (function (e) {
      return e ? (Zt(e) || Gr in e ? te({}, e) : e) : null;
    })(t);
    let { class: e, style: n } = t;
    e && !ue(e) && (t.class = V(e)),
      de(n) && (Zt(n) && !ie(n) && (n = te({}, n)), (t.style = U(n)));
  }
  const o = ue(e) ? 1 : Vn(e) ? 128 : Tr(e) ? 64 : de(e) ? 4 : ce(e) ? 2 : 0;
  return Yr(e, t, n, r, l, o, i, !0);
};
function tl(e, t, n = !1) {
  const { props: r, ref: l, patchFlag: i, children: s } = e,
    o = t
      ? (function (...e) {
          const t = {};
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            for (const e in r)
              if ("class" === e)
                t.class !== r.class && (t.class = V([t.class, r.class]));
              else if ("style" === e) t.style = U([t.style, r.style]);
              else if (Y(e)) {
                const n = t[e],
                  l = r[e];
                !l ||
                  n === l ||
                  (ie(n) && n.includes(l)) ||
                  (t[e] = n ? [].concat(n, l) : l);
              } else "" !== e && (t[e] = r[e]);
          }
          return t;
        })(r || {}, t)
      : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: o,
    key: o && Jr(o),
    ref:
      t && t.ref
        ? n && l
          ? ie(l)
            ? l.concat(Xr(t))
            : [l, Xr(t)]
          : Xr(t)
        : l,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: s,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Ur ? (-1 === i ? 16 : 16 | i) : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && tl(e.ssContent),
    ssFallback: e.ssFallback && tl(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  };
}
function nl(e = " ", t = 0) {
  return el(Pr, null, e, t);
}
function rl(e = "", t = !1) {
  return t ? (Dr(), Zr(Mr, null, e)) : el(Mr, null, e);
}
function ll(e) {
  return null == e || "boolean" == typeof e
    ? el(Mr)
    : ie(e)
    ? el(Ur, null, e.slice())
    : "object" == typeof e
    ? il(e)
    : el(Pr, null, String(e));
}
function il(e) {
  return (null === e.el && -1 !== e.patchFlag) || e.memo ? e : tl(e);
}
function sl(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (null == t) t = null;
  else if (ie(t)) n = 16;
  else if ("object" == typeof t) {
    if (65 & r) {
      const n = t.default;
      return void (n && (n._c && (n._d = !1), sl(e, n()), n._c && (n._d = !0)));
    }
    {
      n = 32;
      const r = t._;
      r || Gr in t
        ? 3 === r &&
          jn &&
          (1 === jn.slots._ ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
        : (t._ctx = jn);
    }
  } else
    ce(t)
      ? ((t = { default: t, _ctx: jn }), (n = 32))
      : ((t = String(t)), 64 & r ? ((n = 16), (t = [nl(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function ol(e, t, n, r = null) {
  dn(e, t, 7, [n, r]);
}
const al = Rr();
let cl = 0;
let ul = null;
const pl = () => ul || jn,
  dl = (e) => {
    (ul = e), e.scope.on();
  },
  hl = () => {
    ul && ul.scope.off(), (ul = null);
  };
function fl(e) {
  return 4 & e.vnode.shapeFlag;
}
let gl = !1;
function ml(e, t, n) {
  ce(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : de(t) && (e.setupState = an(t)),
    vl(e, n);
}
function vl(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || G);
}
function yl(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(an(Kt(e.exposed)), {
        get: (t, n) => (n in t ? t[n] : n in cr ? cr[n](e) : void 0),
        has: (e, t) => t in e || t in cr,
      }))
    );
}
const bl = (e, t) =>
  (function (e, t, n = !1) {
    let r, l;
    const i = ce(e);
    return (
      i ? ((r = e), (l = G)) : ((r = e.get), (l = e.set)),
      new un(r, l, i || !l, n)
    );
  })(e, 0, gl);
function wl(e, t, n) {
  const r = arguments.length;
  return 2 === r
    ? de(t) && !ie(t)
      ? Qr(t)
        ? el(e, null, [t])
        : el(e, t)
      : el(e, null, t)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : 3 === r && Qr(n) && (n = [n]),
      el(e, t, n));
}
const kl = Symbol(""),
  xl = () => Dn(kl),
  _l = "3.2.47",
  $l = "undefined" != typeof document ? document : null,
  Cl = $l && $l.createElement("template"),
  Sl = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const l = t
        ? $l.createElementNS("http://www.w3.org/2000/svg", e)
        : $l.createElement(e, n ? { is: n } : void 0);
      return (
        "select" === e &&
          r &&
          null != r.multiple &&
          l.setAttribute("multiple", r.multiple),
        l
      );
    },
    createText: (e) => $l.createTextNode(e),
    createComment: (e) => $l.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => $l.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, r, l, i) {
      const s = n ? n.previousSibling : t.lastChild;
      if (l && (l === i || l.nextSibling))
        for (
          ;
          t.insertBefore(l.cloneNode(!0), n), l !== i && (l = l.nextSibling);

        );
      else {
        Cl.innerHTML = r ? `<svg>${e}</svg>` : e;
        const l = Cl.content;
        if (r) {
          const e = l.firstChild;
          for (; e.firstChild; ) l.appendChild(e.firstChild);
          l.removeChild(e);
        }
        t.insertBefore(l, n);
      }
      return [
        s ? s.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  };
const Rl = /\s*!important$/;
function Al(e, t, n) {
  if (ie(n)) n.forEach((n) => Al(e, t, n));
  else if ((null == n && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const r = (function (e, t) {
      const n = Il[t];
      if (n) return n;
      let r = xe(t);
      if ("filter" !== r && r in e) return (Il[t] = r);
      r = Ce(r);
      for (let n = 0; n < El.length; n++) {
        const l = El[n] + r;
        if (l in e) return (Il[t] = l);
      }
      return t;
    })(e, t);
    Rl.test(n)
      ? e.setProperty($e(r), n.replace(Rl, ""), "important")
      : (e[r] = n);
  }
}
const El = ["Webkit", "Moz", "ms"],
  Il = {};
const Ll = "http://www.w3.org/1999/xlink";
function zl(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Ol(e, t, n, r, l = null) {
  const i = e._vei || (e._vei = {}),
    s = i[t];
  if (r && s) s.value = r;
  else {
    const [n, o] = (function (e) {
      let t;
      if (jl.test(e)) {
        let n;
        for (t = {}; (n = e.match(jl)); )
          (e = e.slice(0, e.length - n[0].length)),
            (t[n[0].toLowerCase()] = !0);
      }
      const n = ":" === e[2] ? e.slice(3) : $e(e.slice(2));
      return [n, t];
    })(t);
    if (r) {
      const s = (i[t] = (function (e, t) {
        const n = (e) => {
          if (e._vts) {
            if (e._vts <= n.attached) return;
          } else e._vts = Date.now();
          dn(
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
        return (n.value = e), (n.attached = Pl()), n;
      })(r, l));
      zl(e, n, s, o);
    } else
      s &&
        (!(function (e, t, n, r) {
          e.removeEventListener(t, n, r);
        })(e, n, s, o),
        (i[t] = void 0));
  }
}
const jl = /(?:Once|Passive|Capture)$/;
let Tl = 0;
const Ul = Promise.resolve(),
  Pl = () => Tl || (Ul.then(() => (Tl = 0)), (Tl = Date.now()));
const Ml = /^on[a-z]/;
const Fl = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ie(t) ? (e) => Ae(t, e) : t;
};
function Nl(e) {
  e.target.composing = !0;
}
function Vl(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
}
const Dl = {
    created(e, { modifiers: { lazy: t, trim: n, number: r } }, l) {
      e._assign = Fl(l);
      const i = r || (l.props && "number" === l.props.type);
      zl(e, t ? "change" : "input", (t) => {
        if (t.target.composing) return;
        let r = e.value;
        n && (r = r.trim()), i && (r = Ie(r)), e._assign(r);
      }),
        n &&
          zl(e, "change", () => {
            e.value = e.value.trim();
          }),
        t ||
          (zl(e, "compositionstart", Nl),
          zl(e, "compositionend", Vl),
          zl(e, "change", Vl));
    },
    mounted(e, { value: t }) {
      e.value = null == t ? "" : t;
    },
    beforeUpdate(
      e,
      { value: t, modifiers: { lazy: n, trim: r, number: l } },
      i
    ) {
      if (((e._assign = Fl(i)), e.composing)) return;
      if (document.activeElement === e && "range" !== e.type) {
        if (n) return;
        if (r && e.value.trim() === t) return;
        if ((l || "number" === e.type) && Ie(e.value) === t) return;
      }
      const s = null == t ? "" : t;
      e.value !== s && (e.value = s);
    },
  },
  Hl = {
    deep: !0,
    created(e, t, n) {
      (e._assign = Fl(n)),
        zl(e, "change", () => {
          const t = e._modelValue,
            n = Ql(e),
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
          } else if (oe(t)) {
            const e = new Set(t);
            r ? e.add(n) : e.delete(n), l(e);
          } else l(Kl(e, r));
        });
    },
    mounted: Bl,
    beforeUpdate(e, t, n) {
      (e._assign = Fl(n)), Bl(e, t, n);
    },
  };
function Bl(e, { value: t, oldValue: n }, r) {
  (e._modelValue = t),
    ie(t)
      ? (e.checked = W(t, r.props.value) > -1)
      : oe(t)
      ? (e.checked = t.has(r.props.value))
      : t !== n && (e.checked = B(t, Kl(e, !0)));
}
const Wl = {
    created(e, { value: t }, n) {
      (e.checked = B(t, n.props.value)),
        (e._assign = Fl(n)),
        zl(e, "change", () => {
          e._assign(Ql(e));
        });
    },
    beforeUpdate(e, { value: t, oldValue: n }, r) {
      (e._assign = Fl(r)), t !== n && (e.checked = B(t, r.props.value));
    },
  },
  ql = {
    deep: !0,
    created(e, { value: t, modifiers: { number: n } }, r) {
      const l = oe(t);
      zl(e, "change", () => {
        const t = Array.prototype.filter
          .call(e.options, (e) => e.selected)
          .map((e) => (n ? Ie(Ql(e)) : Ql(e)));
        e._assign(e.multiple ? (l ? new Set(t) : t) : t[0]);
      }),
        (e._assign = Fl(r));
    },
    mounted(e, { value: t }) {
      Zl(e, t);
    },
    beforeUpdate(e, t, n) {
      e._assign = Fl(n);
    },
    updated(e, { value: t }) {
      Zl(e, t);
    },
  };
function Zl(e, t) {
  const n = e.multiple;
  if (!n || ie(t) || oe(t)) {
    for (let r = 0, l = e.options.length; r < l; r++) {
      const l = e.options[r],
        i = Ql(l);
      if (n) ie(t) ? (l.selected = W(t, i) > -1) : (l.selected = t.has(i));
      else if (B(Ql(l), t))
        return void (e.selectedIndex !== r && (e.selectedIndex = r));
    }
    n || -1 === e.selectedIndex || (e.selectedIndex = -1);
  }
}
function Ql(e) {
  return "_value" in e ? e._value : e.value;
}
function Kl(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Gl = {
  created(e, t, n) {
    Jl(e, t, n, null, "created");
  },
  mounted(e, t, n) {
    Jl(e, t, n, null, "mounted");
  },
  beforeUpdate(e, t, n, r) {
    Jl(e, t, n, r, "beforeUpdate");
  },
  updated(e, t, n, r) {
    Jl(e, t, n, r, "updated");
  },
};
function Jl(e, t, n, r, l) {
  const i = (function (e, t) {
    switch (e) {
      case "SELECT":
        return ql;
      case "TEXTAREA":
        return Dl;
      default:
        switch (t) {
          case "checkbox":
            return Hl;
          case "radio":
            return Wl;
          default:
            return Dl;
        }
    }
  })(e.tagName, n.props && n.props.type)[l];
  i && i(e, t, n, r);
}
const Xl = {
  beforeMount(e, { value: t }, { transition: n }) {
    (e._vod = "none" === e.style.display ? "" : e.style.display),
      n && t ? n.beforeEnter(e) : Yl(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n &&
      (r
        ? t
          ? (r.beforeEnter(e), Yl(e, !0), r.enter(e))
          : r.leave(e, () => {
              Yl(e, !1);
            })
        : Yl(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Yl(e, t);
  },
};
function Yl(e, t) {
  e.style.display = t ? e._vod : "none";
}
const ei = te(
  {
    patchProp: (e, t, n, r, l = !1, i, s, o, a) => {
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
              if (t && !ue(t)) for (const e in t) null == n[e] && Al(r, e, "");
              for (const e in n) Al(r, e, n[e]);
            } else {
              const i = r.display;
              l ? t !== n && (r.cssText = n) : t && e.removeAttribute("style"),
                "_vod" in e && (r.display = i);
            }
          })(e, n, r)
        : Y(t)
        ? ee(t) || Ol(e, t, 0, r, s)
        : (
            "." === t[0]
              ? ((t = t.slice(1)), 1)
              : "^" === t[0]
              ? ((t = t.slice(1)), 0)
              : (function (e, t, n, r) {
                  if (r)
                    return (
                      "innerHTML" === t ||
                      "textContent" === t ||
                      !!(t in e && Ml.test(t) && ce(n))
                    );
                  if (
                    "spellcheck" === t ||
                    "draggable" === t ||
                    "translate" === t
                  )
                    return !1;
                  if ("form" === t) return !1;
                  if ("list" === t && "INPUT" === e.tagName) return !1;
                  if ("type" === t && "TEXTAREA" === e.tagName) return !1;
                  if (Ml.test(t) && ue(n)) return !1;
                  return t in e;
                })(e, t, r, l)
          )
        ? (function (e, t, n, r, l, i, s) {
            if ("innerHTML" === t || "textContent" === t)
              return r && s(r, l, i), void (e[t] = null == n ? "" : n);
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
            let o = !1;
            if ("" === n || null == n) {
              const r = typeof e[t];
              "boolean" === r
                ? (n = H(n))
                : null == n && "string" === r
                ? ((n = ""), (o = !0))
                : "number" === r && ((n = 0), (o = !0));
            }
            try {
              e[t] = n;
            } catch (e) {}
            o && e.removeAttribute(t);
          })(e, t, r, i, s, o, a)
        : ("true-value" === t
            ? (e._trueValue = r)
            : "false-value" === t && (e._falseValue = r),
          (function (e, t, n, r, l) {
            if (r && t.startsWith("xlink:"))
              null == n
                ? e.removeAttributeNS(Ll, t.slice(6, t.length))
                : e.setAttributeNS(Ll, t, n);
            else {
              const r = D(t);
              null == n || (r && !H(n))
                ? e.removeAttribute(t)
                : e.setAttribute(t, r ? "" : n);
            }
          })(e, t, r, l));
    },
  },
  Sl
);
let ti;
const ni = (...e) => {
  const t = (ti || (ti = zr(ei))).createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (e) => {
      const r = (function (e) {
        if (ue(e)) {
          return document.querySelector(e);
        }
        return e;
      })(e);
      if (!r) return;
      const l = t._component;
      ce(l) || l.render || l.template || (l.template = r.innerHTML),
        (r.innerHTML = "");
      const i = n(r, !1, r instanceof SVGElement);
      return (
        r instanceof Element &&
          (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")),
        i
      );
    }),
    t
  );
};
const ri = "undefined" != typeof window,
  li = (e) => "function" == typeof e,
  ii = (e) => "string" == typeof e,
  si = () => {};
function oi(e) {
  return "function" == typeof e ? e() : sn(e);
}
function ai(e, t) {
  return function (...n) {
    return new Promise((r, l) => {
      Promise.resolve(
        e(() => t.apply(this, n), { fn: t, thisArg: this, args: n })
      )
        .then(r)
        .catch(l);
    });
  };
}
const ci = (e) => e();
function ui(e) {
  return (
    !!Te() &&
    ((function (e) {
      Oe && Oe.cleanups.push(e);
    })(e),
    !0)
  );
}
function pi(e, t = 200, n = {}) {
  return ai(
    (function (e, t = {}) {
      let n,
        r,
        l = si;
      const i = (e) => {
        clearTimeout(e), l(), (l = si);
      };
      return (s) => {
        const o = oi(e),
          a = oi(t.maxWait);
        return (
          n && i(n),
          o <= 0 || (void 0 !== a && a <= 0)
            ? (r && (i(r), (r = null)), Promise.resolve(s()))
            : new Promise((e, c) => {
                (l = t.rejectOnCancel ? c : e),
                  a &&
                    !r &&
                    (r = setTimeout(() => {
                      n && i(n), (r = null), e(s());
                    }, a)),
                  (n = setTimeout(() => {
                    r && i(r), (r = null), e(s());
                  }, o));
              })
        );
      };
    })(t, n),
    e
  );
}
var di = Object.getOwnPropertySymbols,
  hi = Object.prototype.hasOwnProperty,
  fi = Object.prototype.propertyIsEnumerable,
  gi = (e, t) => {
    var n = {};
    for (var r in e) hi.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (null != e && di)
      for (var r of di(e)) t.indexOf(r) < 0 && fi.call(e, r) && (n[r] = e[r]);
    return n;
  };
var mi = Object.defineProperty,
  vi = Object.defineProperties,
  yi = Object.getOwnPropertyDescriptors,
  bi = Object.getOwnPropertySymbols,
  wi = Object.prototype.hasOwnProperty,
  ki = Object.prototype.propertyIsEnumerable,
  xi = (e, t, n) =>
    t in e
      ? mi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  _i = (e, t) => {
    for (var n in t || (t = {})) wi.call(t, n) && xi(e, n, t[n]);
    if (bi) for (var n of bi(t)) ki.call(t, n) && xi(e, n, t[n]);
    return e;
  },
  $i = (e, t) => vi(e, yi(t)),
  Ci = (e, t) => {
    var n = {};
    for (var r in e) wi.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (null != e && bi)
      for (var r of bi(e)) t.indexOf(r) < 0 && ki.call(e, r) && (n[r] = e[r]);
    return n;
  };
function Si(e, t, n = {}) {
  const r = n,
    { eventFilter: l } = r,
    i = Ci(r, ["eventFilter"]),
    {
      eventFilter: s,
      pause: o,
      resume: a,
      isActive: c,
    } = (function (e = ci) {
      const t = tn(!0);
      return {
        isActive: Dt(t),
        pause: function () {
          t.value = !1;
        },
        resume: function () {
          t.value = !0;
        },
        eventFilter: (...n) => {
          t.value && e(...n);
        },
      };
    })(l),
    u = (function (e, t, n = {}) {
      const r = n,
        { eventFilter: l = ci } = r,
        i = gi(r, ["eventFilter"]);
      return Wn(e, ai(l, t), i);
    })(e, t, $i(_i({}, i), { eventFilter: s }));
  return { stop: u, pause: o, resume: a, isActive: c };
}
function Ri(e) {
  var t;
  const n = oi(e);
  return null != (t = null == n ? void 0 : n.$el) ? t : n;
}
const Ai = ri ? window : void 0,
  Ei = ri ? window.document : void 0;
function Ii(...e) {
  let t, n, r, l;
  if (
    (ii(e[0]) || Array.isArray(e[0])
      ? (([n, r, l] = e), (t = Ai))
      : ([t, n, r, l] = e),
    !t)
  )
    return si;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const i = [],
    s = () => {
      i.forEach((e) => e()), (i.length = 0);
    },
    o = Wn(
      () => [Ri(t), oi(l)],
      ([e, t]) => {
        s(),
          e &&
            i.push(
              ...n.flatMap((n) =>
                r.map((r) =>
                  ((e, t, n, r) => (
                    e.addEventListener(t, n, r),
                    () => e.removeEventListener(t, n, r)
                  ))(e, n, r, t)
                )
              )
            );
      },
      { immediate: !0, flush: "post" }
    ),
    a = () => {
      o(), s();
    };
  return ui(a), a;
}
const Li =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : {},
  zi = "__vueuse_ssr_handlers__";
Li[zi] = Li[zi] || {};
const Oi = Li[zi];
var ji = Object.defineProperty,
  Ti = Object.getOwnPropertySymbols,
  Ui = Object.prototype.hasOwnProperty,
  Pi = Object.prototype.propertyIsEnumerable,
  Mi = (e, t, n) =>
    t in e
      ? ji(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Fi = (e, t) => {
    for (var n in t || (t = {})) Ui.call(t, n) && Mi(e, n, t[n]);
    if (Ti) for (var n of Ti(t)) Pi.call(t, n) && Mi(e, n, t[n]);
    return e;
  };
const Ni = {
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
  Vi = "vueuse-storage";
function Di(e, t, n, r = {}) {
  var l;
  const {
      flush: i = "pre",
      deep: s = !0,
      listenToStorageChanges: o = !0,
      writeDefaults: a = !0,
      mergeDefaults: c = !1,
      shallow: u,
      window: p = Ai,
      eventFilter: d,
      onError: h = (e) => {
        console.error(e);
      },
    } = r,
    f = (u ? nn : tn)(t);
  if (!n)
    try {
      n = (function (e, t) {
        return Oi[e] || t;
      })("getDefaultStorage", () => {
        var e;
        return null == (e = Ai) ? void 0 : e.localStorage;
      })();
    } catch (e) {
      h(e);
    }
  if (!n) return f;
  const g = oi(t),
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
    v = null != (l = r.serializer) ? l : Ni[m],
    { pause: y, resume: b } = Si(
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
                    new CustomEvent(Vi, {
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
      { flush: i, deep: s, eventFilter: d }
    );
  return (
    p &&
      o &&
      (Ii(p, "storage", w),
      Ii(p, Vi, function (e) {
        w(e.detail);
      })),
    w(),
    f
  );
  function w(t) {
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
              return li(c)
                ? c(e, g)
                : "object" !== m || Array.isArray(e)
                ? e
                : Fi(Fi({}, g), e);
            }
            return "string" != typeof r ? r : v.read(r);
          })(t);
        } catch (e) {
          h(e);
        } finally {
          t ? _n(b) : b();
        }
      }
  }
}
var Hi,
  Bi,
  Wi = Object.defineProperty,
  qi = Object.getOwnPropertySymbols,
  Zi = Object.prototype.hasOwnProperty,
  Qi = Object.prototype.propertyIsEnumerable,
  Ki = (e, t, n) =>
    t in e
      ? Wi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Gi = (e, t) => {
    for (var n in t || (t = {})) Zi.call(t, n) && Ki(e, n, t[n]);
    if (qi) for (var n of qi(t)) Qi.call(t, n) && Ki(e, n, t[n]);
    return e;
  };
function Ji(e = {}) {
  const { controls: t = !1, interval: n = "requestAnimationFrame" } = e,
    r = tn(new Date()),
    l = () => (r.value = new Date()),
    i =
      "requestAnimationFrame" === n
        ? (function (e, t = {}) {
            const { immediate: n = !0, window: r = Ai } = t,
              l = tn(!1);
            let i = 0,
              s = null;
            function o(t) {
              l.value &&
                r &&
                (e({ delta: t - i, timestamp: t }),
                (i = t),
                (s = r.requestAnimationFrame(o)));
            }
            function a() {
              !l.value &&
                r &&
                ((l.value = !0), (s = r.requestAnimationFrame(o)));
            }
            function c() {
              (l.value = !1),
                null != s && r && (r.cancelAnimationFrame(s), (s = null));
            }
            return n && a(), ui(c), { isActive: Dt(l), pause: c, resume: a };
          })(l, { immediate: !0 })
        : (function (e, t = 1e3, n = {}) {
            const { immediate: r = !0, immediateCallback: l = !1 } = n;
            let i = null;
            const s = tn(!1);
            function o() {
              i && (clearInterval(i), (i = null));
            }
            function a() {
              (s.value = !1), o();
            }
            function c() {
              const n = oi(t);
              n <= 0 ||
                ((s.value = !0), l && e(), o(), (i = setInterval(e, n)));
            }
            r && ri && c(),
              (en(t) || li(t)) &&
                ui(
                  Wn(t, () => {
                    s.value && ri && c();
                  })
                );
            return ui(a), { isActive: s, pause: a, resume: c };
          })(l, n, { immediate: !0 });
  return t ? Gi({ now: r }, i) : r;
}
((Bi = Hi || (Hi = {})).UP = "UP"),
  (Bi.RIGHT = "RIGHT"),
  (Bi.DOWN = "DOWN"),
  (Bi.LEFT = "LEFT"),
  (Bi.NONE = "NONE");
let Xi = 0;
function Yi(e, t = {}) {
  const n = tn(!1),
    {
      document: r = Ei,
      immediate: l = !0,
      manual: i = !1,
      id: s = "vueuse_styletag_" + ++Xi,
    } = t,
    o = tn(e);
  let a = () => {};
  const c = () => {
      if (!r) return;
      const e = r.getElementById(s) || r.createElement("style");
      e.isConnected ||
        ((e.type = "text/css"),
        (e.id = s),
        t.media && (e.media = t.media),
        r.head.appendChild(e)),
        n.value ||
          ((a = Wn(
            o,
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
        (a(), r.head.removeChild(r.getElementById(s)), (n.value = !1));
    };
  return (
    l &&
      !i &&
      (function (e, t = !0) {
        pl() ? Xn(e) : t ? e() : _n(e);
      })(c),
    i || ui(u),
    { id: s, css: o, unload: u, load: c, isLoaded: Dt(n) }
  );
}
var es = Object.defineProperty,
  ts = Object.getOwnPropertySymbols,
  ns = Object.prototype.hasOwnProperty,
  rs = Object.prototype.propertyIsEnumerable,
  ls = (e, t, n) =>
    t in e
      ? es(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
((e, t) => {
  for (var n in t || (t = {})) ns.call(t, n) && ls(e, n, t[n]);
  if (ts) for (var n of ts(t)) rs.call(t, n) && ls(e, n, t[n]);
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
const is = (e) => {
    const t = Di("WALINE_EMOJI", {}),
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
  },
  ss = (e, t = "", n = "", r = "") =>
    `${t ? `${t}/` : ""}${n}${e}${r ? `.${r}` : ""}`,
  os = (e) => {
    "AbortError" !== e.name && console.error(e.message);
  },
  as = (e) =>
    e instanceof HTMLElement
      ? e
      : "string" == typeof e
      ? document.querySelector(e)
      : null,
  cs = (e) => e.type.includes("image"),
  us = (e) => {
    const t = Array.from(e).find(cs);
    return t ? t.getAsFile() : null;
  };
function ps() {
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
}
let ds = {
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
const hs = /[&<>"']/,
  fs = new RegExp(hs.source, "g"),
  gs = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
  ms = new RegExp(gs.source, "g"),
  vs = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" },
  ys = (e) => vs[e];
function bs(e, t) {
  if (t) {
    if (hs.test(e)) return e.replace(fs, ys);
  } else if (gs.test(e)) return e.replace(ms, ys);
  return e;
}
const ws = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
function ks(e) {
  return e.replace(ws, (e, t) =>
    "colon" === (t = t.toLowerCase())
      ? ":"
      : "#" === t.charAt(0)
      ? "x" === t.charAt(1)
        ? String.fromCharCode(parseInt(t.substring(2), 16))
        : String.fromCharCode(+t.substring(1))
      : ""
  );
}
const xs = /(^|[^\[])\^/g;
function _s(e, t) {
  (e = "string" == typeof e ? e : e.source), (t = t || "");
  const n = {
    replace: (t, r) => (
      (r = (r = r.source || r).replace(xs, "$1")), (e = e.replace(t, r)), n
    ),
    getRegex: () => new RegExp(e, t),
  };
  return n;
}
const $s = /[^\w:]/g,
  Cs = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function Ss(e, t, n) {
  if (e) {
    let e;
    try {
      e = decodeURIComponent(ks(n)).replace($s, "").toLowerCase();
    } catch (e) {
      return null;
    }
    if (
      0 === e.indexOf("javascript:") ||
      0 === e.indexOf("vbscript:") ||
      0 === e.indexOf("data:")
    )
      return null;
  }
  t &&
    !Cs.test(n) &&
    (n = (function (e, t) {
      Rs[" " + e] ||
        (As.test(e) ? (Rs[" " + e] = e + "/") : (Rs[" " + e] = js(e, "/", !0)));
      e = Rs[" " + e];
      const n = -1 === e.indexOf(":");
      return "//" === t.substring(0, 2)
        ? n
          ? t
          : e.replace(Es, "$1") + t
        : "/" === t.charAt(0)
        ? n
          ? t
          : e.replace(Is, "$1") + t
        : e + t;
    })(t, n));
  try {
    n = encodeURI(n).replace(/%25/g, "%");
  } catch (e) {
    return null;
  }
  return n;
}
const Rs = {},
  As = /^[^:]+:\/*[^/]*$/,
  Es = /^([^:]+:)[\s\S]*$/,
  Is = /^([^:]+:\/*[^/]*)[\s\S]*$/;
const Ls = { exec: function () {} };
function zs(e) {
  let t,
    n,
    r = 1;
  for (; r < arguments.length; r++)
    for (n in ((t = arguments[r]), t))
      Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
  return e;
}
function Os(e, t) {
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
function js(e, t, n) {
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
function Ts(e) {
  e &&
    e.sanitize &&
    !e.silent &&
    console.warn(
      "marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"
    );
}
function Us(e, t) {
  if (t < 1) return "";
  let n = "";
  for (; t > 1; ) 1 & t && (n += e), (t >>= 1), (e += e);
  return n + e;
}
function Ps(e, t, n, r) {
  const l = t.href,
    i = t.title ? bs(t.title) : null,
    s = e[1].replace(/\\([\[\]])/g, "$1");
  if ("!" !== e[0].charAt(0)) {
    r.state.inLink = !0;
    const e = {
      type: "link",
      raw: n,
      href: l,
      title: i,
      text: s,
      tokens: r.inlineTokens(s),
    };
    return (r.state.inLink = !1), e;
  }
  return { type: "image", raw: n, href: l, title: i, text: bs(s) };
}
class Ms {
  constructor(e) {
    this.options = e || ds;
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
        text: this.options.pedantic ? e : js(e, "\n"),
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
        const t = js(e, "#");
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
        s,
        o,
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
          (o = !1),
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
            s = new RegExp(`^ {0,${Math.min(3, i - 1)}}#`);
          for (
            ;
            e &&
            ((p = e.split("\n", 1)[0]),
            (u = p),
            this.options.pedantic &&
              (u = u.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")),
            !l.test(u)) &&
            !s.test(u) &&
            !t.test(u) &&
            !r.test(e);

          ) {
            if (u.search(/[^ ]/) >= i || !u.trim()) d += "\n" + u.slice(i);
            else {
              if (o) break;
              if (c.search(/[^ ]/) >= 4) break;
              if (l.test(c)) break;
              if (s.test(c)) break;
              if (r.test(c)) break;
              d += "\n" + u;
            }
            o || u.trim() || (o = !0),
              (n += p + "\n"),
              (e = e.substring(p.length + 1)),
              (c = u.slice(i));
          }
        }
        m.loose || (a ? (m.loose = !0) : /\n *\n *$/.test(n) && (a = !0)),
          this.options.gfm &&
            ((r = /^\[[ xX]\] /.exec(d)),
            r && ((l = "[ ] " !== r[0]), (d = d.replace(/^\[[ xX]\] +/, "")))),
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
      for (s = 0; s < y; s++)
        if (
          ((this.lexer.state.top = !1),
          (m.items[s].tokens = this.lexer.blockTokens(m.items[s].text, [])),
          !m.loose)
        ) {
          const e = m.items[s].tokens.filter((e) => "space" === e.type),
            t = e.length > 0 && e.some((e) => /\n.*\n/.test(e.raw));
          m.loose = t;
        }
      if (m.loose) for (s = 0; s < y; s++) m.items[s].loose = !0;
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
          : bs(t[0]);
        (e.type = "paragraph"), (e.text = n), (e.tokens = this.lexer.inline(n));
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
        header: Os(t[1]).map((e) => ({ text: e })),
        align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
        rows:
          t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split("\n") : [],
      };
      if (e.header.length === e.align.length) {
        e.raw = t[0];
        let n,
          r,
          l,
          i,
          s = e.align.length;
        for (n = 0; n < s; n++)
          /^ *-+: *$/.test(e.align[n])
            ? (e.align[n] = "right")
            : /^ *:-+: *$/.test(e.align[n])
            ? (e.align[n] = "center")
            : /^ *:-+ *$/.test(e.align[n])
            ? (e.align[n] = "left")
            : (e.align[n] = null);
        for (s = e.rows.length, n = 0; n < s; n++)
          e.rows[n] = Os(e.rows[n], e.header.length).map((e) => ({ text: e }));
        for (s = e.header.length, r = 0; r < s; r++)
          e.header[r].tokens = this.lexer.inline(e.header[r].text);
        for (s = e.rows.length, r = 0; r < s; r++)
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
    if (t) return { type: "escape", raw: t[0], text: bs(t[1]) };
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
              : bs(t[0])
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
        const t = js(e.slice(0, -1), "\\");
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
        Ps(
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
      return Ps(n, e, n[0], this.lexer);
    }
  }
  emStrong(e, t, n = "") {
    let r = this.rules.inline.emStrong.lDelim.exec(e);
    if (!r) return;
    if (r[3] && n.match(/[\p{L}\p{N}]/u)) return;
    const l = r[1] || r[2] || "";
    if (!l || (l && ("" === n || this.rules.inline.punctuation.exec(n)))) {
      const n = r[0].length - 1;
      let l,
        i,
        s = n,
        o = 0;
      const a =
        "*" === r[0][0]
          ? this.rules.inline.emStrong.rDelimAst
          : this.rules.inline.emStrong.rDelimUnd;
      for (
        a.lastIndex = 0, t = t.slice(-1 * e.length + n);
        null != (r = a.exec(t));

      ) {
        if (((l = r[1] || r[2] || r[3] || r[4] || r[5] || r[6]), !l)) continue;
        if (((i = l.length), r[3] || r[4])) {
          s += i;
          continue;
        }
        if ((r[5] || r[6]) && n % 3 && !((n + i) % 3)) {
          o += i;
          continue;
        }
        if (((s -= i), s > 0)) continue;
        i = Math.min(i, i + s + o);
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
        (e = bs(e, !0)),
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
          ? ((e = bs(this.options.mangle ? t(n[1]) : n[1])),
            (r = "mailto:" + e))
          : ((e = bs(n[1])), (r = e)),
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
        (e = bs(this.options.mangle ? t(n[0]) : n[0])), (r = "mailto:" + e);
      else {
        let t;
        do {
          (t = n[0]), (n[0] = this.rules.inline._backpedal.exec(n[0])[0]);
        } while (t !== n[0]);
        (e = bs(n[0])), (r = "www." === n[1] ? "http://" + n[0] : n[0]);
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
              : bs(n[0])
            : n[0]
          : bs(this.options.smartypants ? t(n[0]) : n[0])),
        { type: "text", raw: n[0], text: e }
      );
    }
  }
}
const Fs = {
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
  table: Ls,
  lheading: /^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  _paragraph:
    /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/,
  _label: /(?!\s*\])(?:\\.|[^\[\]\\])+/,
  _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
};
(Fs.def = _s(Fs.def)
  .replace("label", Fs._label)
  .replace("title", Fs._title)
  .getRegex()),
  (Fs.bullet = /(?:[*+-]|\d{1,9}[.)])/),
  (Fs.listItemStart = _s(/^( *)(bull) */)
    .replace("bull", Fs.bullet)
    .getRegex()),
  (Fs.list = _s(Fs.list)
    .replace(/bull/g, Fs.bullet)
    .replace(
      "hr",
      "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))"
    )
    .replace("def", "\\n+(?=" + Fs.def.source + ")")
    .getRegex()),
  (Fs._tag =
    "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul"),
  (Fs._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/),
  (Fs.html = _s(Fs.html, "i")
    .replace("comment", Fs._comment)
    .replace("tag", Fs._tag)
    .replace(
      "attribute",
      / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
    )
    .getRegex()),
  (Fs.paragraph = _s(Fs._paragraph)
    .replace("hr", Fs.hr)
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
    .replace("tag", Fs._tag)
    .getRegex()),
  (Fs.blockquote = _s(Fs.blockquote)
    .replace("paragraph", Fs.paragraph)
    .getRegex()),
  (Fs.normal = zs({}, Fs)),
  (Fs.gfm = zs({}, Fs.normal, {
    table:
      "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
  })),
  (Fs.gfm.table = _s(Fs.gfm.table)
    .replace("hr", Fs.hr)
    .replace("heading", " {0,3}#{1,6} ")
    .replace("blockquote", " {0,3}>")
    .replace("code", " {4}[^\\n]")
    .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
    .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
    .replace(
      "html",
      "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
    )
    .replace("tag", Fs._tag)
    .getRegex()),
  (Fs.gfm.paragraph = _s(Fs._paragraph)
    .replace("hr", Fs.hr)
    .replace("heading", " {0,3}#{1,6} ")
    .replace("|lheading", "")
    .replace("table", Fs.gfm.table)
    .replace("blockquote", " {0,3}>")
    .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
    .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
    .replace(
      "html",
      "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
    )
    .replace("tag", Fs._tag)
    .getRegex()),
  (Fs.pedantic = zs({}, Fs.normal, {
    html: _s(
      "^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))"
    )
      .replace("comment", Fs._comment)
      .replace(
        /tag/g,
        "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b"
      )
      .getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: Ls,
    lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    paragraph: _s(Fs.normal._paragraph)
      .replace("hr", Fs.hr)
      .replace("heading", " *#{1,6} *[^\n]")
      .replace("lheading", Fs.lheading)
      .replace("blockquote", " {0,3}>")
      .replace("|fences", "")
      .replace("|list", "")
      .replace("|html", "")
      .getRegex(),
  }));
const Ns = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: Ls,
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
  del: Ls,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/,
};
function Vs(e) {
  return e
    .replace(/---/g, "—")
    .replace(/--/g, "–")
    .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘")
    .replace(/'/g, "’")
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“")
    .replace(/"/g, "”")
    .replace(/\.{3}/g, "…");
}
function Ds(e) {
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
(Ns._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"),
  (Ns.punctuation = _s(Ns.punctuation)
    .replace(/punctuation/g, Ns._punctuation)
    .getRegex()),
  (Ns.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g),
  (Ns.escapedEmSt = /(?:^|[^\\])(?:\\\\)*\\[*_]/g),
  (Ns._comment = _s(Fs._comment).replace("(?:--\x3e|$)", "--\x3e").getRegex()),
  (Ns.emStrong.lDelim = _s(Ns.emStrong.lDelim)
    .replace(/punct/g, Ns._punctuation)
    .getRegex()),
  (Ns.emStrong.rDelimAst = _s(Ns.emStrong.rDelimAst, "g")
    .replace(/punct/g, Ns._punctuation)
    .getRegex()),
  (Ns.emStrong.rDelimUnd = _s(Ns.emStrong.rDelimUnd, "g")
    .replace(/punct/g, Ns._punctuation)
    .getRegex()),
  (Ns._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
  (Ns._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
  (Ns._email =
    /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
  (Ns.autolink = _s(Ns.autolink)
    .replace("scheme", Ns._scheme)
    .replace("email", Ns._email)
    .getRegex()),
  (Ns._attribute =
    /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
  (Ns.tag = _s(Ns.tag)
    .replace("comment", Ns._comment)
    .replace("attribute", Ns._attribute)
    .getRegex()),
  (Ns._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
  (Ns._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/),
  (Ns._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
  (Ns.link = _s(Ns.link)
    .replace("label", Ns._label)
    .replace("href", Ns._href)
    .replace("title", Ns._title)
    .getRegex()),
  (Ns.reflink = _s(Ns.reflink)
    .replace("label", Ns._label)
    .replace("ref", Fs._label)
    .getRegex()),
  (Ns.nolink = _s(Ns.nolink).replace("ref", Fs._label).getRegex()),
  (Ns.reflinkSearch = _s(Ns.reflinkSearch, "g")
    .replace("reflink", Ns.reflink)
    .replace("nolink", Ns.nolink)
    .getRegex()),
  (Ns.normal = zs({}, Ns)),
  (Ns.pedantic = zs({}, Ns.normal, {
    strong: {
      start: /^__|\*\*/,
      middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
      endAst: /\*\*(?!\*)/g,
      endUnd: /__(?!_)/g,
    },
    em: {
      start: /^_|\*/,
      middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
      endAst: /\*(?!\*)/g,
      endUnd: /_(?!_)/g,
    },
    link: _s(/^!?\[(label)\]\((.*?)\)/)
      .replace("label", Ns._label)
      .getRegex(),
    reflink: _s(/^!?\[(label)\]\s*\[([^\]]*)\]/)
      .replace("label", Ns._label)
      .getRegex(),
  })),
  (Ns.gfm = zs({}, Ns.normal, {
    escape: _s(Ns.escape).replace("])", "~|])").getRegex(),
    _extended_email:
      /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
    url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
    _backpedal:
      /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
  })),
  (Ns.gfm.url = _s(Ns.gfm.url, "i")
    .replace("email", Ns.gfm._extended_email)
    .getRegex()),
  (Ns.breaks = zs({}, Ns.gfm, {
    br: _s(Ns.br).replace("{2,}", "*").getRegex(),
    text: _s(Ns.gfm.text)
      .replace("\\b_", "\\b_| {2,}\\n")
      .replace(/\{2,\}/g, "*")
      .getRegex(),
  }));
class Hs {
  constructor(e) {
    (this.tokens = []),
      (this.tokens.links = Object.create(null)),
      (this.options = e || ds),
      (this.options.tokenizer = this.options.tokenizer || new Ms()),
      (this.tokenizer = this.options.tokenizer),
      (this.tokenizer.options = this.options),
      (this.tokenizer.lexer = this),
      (this.inlineQueue = []),
      (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
    const t = { block: Fs.normal, inline: Ns.normal };
    this.options.pedantic
      ? ((t.block = Fs.pedantic), (t.inline = Ns.pedantic))
      : this.options.gfm &&
        ((t.block = Fs.gfm),
        this.options.breaks ? (t.inline = Ns.breaks) : (t.inline = Ns.gfm)),
      (this.tokenizer.rules = t);
  }
  static get rules() {
    return { block: Fs, inline: Ns };
  }
  static lex(e, t) {
    return new Hs(t).lex(e);
  }
  static lexInline(e, t) {
    return new Hs(t).inlineTokens(e);
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
  blockTokens(e, t = []) {
    let n, r, l, i;
    for (
      e = this.options.pedantic
        ? e.replace(/\t/g, "    ").replace(/^ +$/gm, "")
        : e.replace(/^( *)(\t+)/gm, (e, t, n) => t + "    ".repeat(n.length));
      e;

    )
      if (
        !(
          this.options.extensions &&
          this.options.extensions.block &&
          this.options.extensions.block.some(
            (r) =>
              !!(n = r.call({ lexer: this }, e, t)) &&
              ((e = e.substring(n.raw.length)), t.push(n), !0)
          )
        )
      )
        if ((n = this.tokenizer.space(e)))
          (e = e.substring(n.raw.length)),
            1 === n.raw.length && t.length > 0
              ? (t[t.length - 1].raw += "\n")
              : t.push(n);
        else if ((n = this.tokenizer.code(e)))
          (e = e.substring(n.raw.length)),
            (r = t[t.length - 1]),
            !r || ("paragraph" !== r.type && "text" !== r.type)
              ? t.push(n)
              : ((r.raw += "\n" + n.raw),
                (r.text += "\n" + n.text),
                (this.inlineQueue[this.inlineQueue.length - 1].src = r.text));
        else if ((n = this.tokenizer.fences(e)))
          (e = e.substring(n.raw.length)), t.push(n);
        else if ((n = this.tokenizer.heading(e)))
          (e = e.substring(n.raw.length)), t.push(n);
        else if ((n = this.tokenizer.hr(e)))
          (e = e.substring(n.raw.length)), t.push(n);
        else if ((n = this.tokenizer.blockquote(e)))
          (e = e.substring(n.raw.length)), t.push(n);
        else if ((n = this.tokenizer.list(e)))
          (e = e.substring(n.raw.length)), t.push(n);
        else if ((n = this.tokenizer.html(e)))
          (e = e.substring(n.raw.length)), t.push(n);
        else if ((n = this.tokenizer.def(e)))
          (e = e.substring(n.raw.length)),
            (r = t[t.length - 1]),
            !r || ("paragraph" !== r.type && "text" !== r.type)
              ? this.tokens.links[n.tag] ||
                (this.tokens.links[n.tag] = { href: n.href, title: n.title })
              : ((r.raw += "\n" + n.raw),
                (r.text += "\n" + n.raw),
                (this.inlineQueue[this.inlineQueue.length - 1].src = r.text));
        else if ((n = this.tokenizer.table(e)))
          (e = e.substring(n.raw.length)), t.push(n);
        else if ((n = this.tokenizer.lheading(e)))
          (e = e.substring(n.raw.length)), t.push(n);
        else {
          if (
            ((l = e),
            this.options.extensions && this.options.extensions.startBlock)
          ) {
            let t = 1 / 0;
            const n = e.slice(1);
            let r;
            this.options.extensions.startBlock.forEach(function (e) {
              (r = e.call({ lexer: this }, n)),
                "number" == typeof r && r >= 0 && (t = Math.min(t, r));
            }),
              t < 1 / 0 && t >= 0 && (l = e.substring(0, t + 1));
          }
          if (this.state.top && (n = this.tokenizer.paragraph(l)))
            (r = t[t.length - 1]),
              i && "paragraph" === r.type
                ? ((r.raw += "\n" + n.raw),
                  (r.text += "\n" + n.text),
                  this.inlineQueue.pop(),
                  (this.inlineQueue[this.inlineQueue.length - 1].src = r.text))
                : t.push(n),
              (i = l.length !== e.length),
              (e = e.substring(n.raw.length));
          else if ((n = this.tokenizer.text(e)))
            (e = e.substring(n.raw.length)),
              (r = t[t.length - 1]),
              r && "text" === r.type
                ? ((r.raw += "\n" + n.raw),
                  (r.text += "\n" + n.text),
                  this.inlineQueue.pop(),
                  (this.inlineQueue[this.inlineQueue.length - 1].src = r.text))
                : t.push(n);
          else if (e) {
            const t = "Infinite loop on byte: " + e.charCodeAt(0);
            if (this.options.silent) {
              console.error(t);
              break;
            }
            throw new Error(t);
          }
        }
    return (this.state.top = !0), t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  inlineTokens(e, t = []) {
    let n,
      r,
      l,
      i,
      s,
      o,
      a = e;
    if (this.tokens.links) {
      const e = Object.keys(this.tokens.links);
      if (e.length > 0)
        for (
          ;
          null != (i = this.tokenizer.rules.inline.reflinkSearch.exec(a));

        )
          e.includes(i[0].slice(i[0].lastIndexOf("[") + 1, -1)) &&
            (a =
              a.slice(0, i.index) +
              "[" +
              Us("a", i[0].length - 2) +
              "]" +
              a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; null != (i = this.tokenizer.rules.inline.blockSkip.exec(a)); )
      a =
        a.slice(0, i.index) +
        "[" +
        Us("a", i[0].length - 2) +
        "]" +
        a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; null != (i = this.tokenizer.rules.inline.escapedEmSt.exec(a)); )
      (a =
        a.slice(0, i.index + i[0].length - 2) +
        "++" +
        a.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex)),
        this.tokenizer.rules.inline.escapedEmSt.lastIndex--;
    for (; e; )
      if (
        (s || (o = ""),
        (s = !1),
        !(
          this.options.extensions &&
          this.options.extensions.inline &&
          this.options.extensions.inline.some(
            (r) =>
              !!(n = r.call({ lexer: this }, e, t)) &&
              ((e = e.substring(n.raw.length)), t.push(n), !0)
          )
        ))
      )
        if ((n = this.tokenizer.escape(e)))
          (e = e.substring(n.raw.length)), t.push(n);
        else if ((n = this.tokenizer.tag(e)))
          (e = e.substring(n.raw.length)),
            (r = t[t.length - 1]),
            r && "text" === n.type && "text" === r.type
              ? ((r.raw += n.raw), (r.text += n.text))
              : t.push(n);
        else if ((n = this.tokenizer.link(e)))
          (e = e.substring(n.raw.length)), t.push(n);
        else if ((n = this.tokenizer.reflink(e, this.tokens.links)))
          (e = e.substring(n.raw.length)),
            (r = t[t.length - 1]),
            r && "text" === n.type && "text" === r.type
              ? ((r.raw += n.raw), (r.text += n.text))
              : t.push(n);
        else if ((n = this.tokenizer.emStrong(e, a, o)))
          (e = e.substring(n.raw.length)), t.push(n);
        else if ((n = this.tokenizer.codespan(e)))
          (e = e.substring(n.raw.length)), t.push(n);
        else if ((n = this.tokenizer.br(e)))
          (e = e.substring(n.raw.length)), t.push(n);
        else if ((n = this.tokenizer.del(e)))
          (e = e.substring(n.raw.length)), t.push(n);
        else if ((n = this.tokenizer.autolink(e, Ds)))
          (e = e.substring(n.raw.length)), t.push(n);
        else if (this.state.inLink || !(n = this.tokenizer.url(e, Ds))) {
          if (
            ((l = e),
            this.options.extensions && this.options.extensions.startInline)
          ) {
            let t = 1 / 0;
            const n = e.slice(1);
            let r;
            this.options.extensions.startInline.forEach(function (e) {
              (r = e.call({ lexer: this }, n)),
                "number" == typeof r && r >= 0 && (t = Math.min(t, r));
            }),
              t < 1 / 0 && t >= 0 && (l = e.substring(0, t + 1));
          }
          if ((n = this.tokenizer.inlineText(l, Vs)))
            (e = e.substring(n.raw.length)),
              "_" !== n.raw.slice(-1) && (o = n.raw.slice(-1)),
              (s = !0),
              (r = t[t.length - 1]),
              r && "text" === r.type
                ? ((r.raw += n.raw), (r.text += n.text))
                : t.push(n);
          else if (e) {
            const t = "Infinite loop on byte: " + e.charCodeAt(0);
            if (this.options.silent) {
              console.error(t);
              break;
            }
            throw new Error(t);
          }
        } else (e = e.substring(n.raw.length)), t.push(n);
    return t;
  }
}
class Bs {
  constructor(e) {
    this.options = e || ds;
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
          bs(r) +
          '">' +
          (n ? e : bs(e, !0)) +
          "</code></pre>\n"
        : "<pre><code>" + (n ? e : bs(e, !0)) + "</code></pre>\n"
    );
  }
  blockquote(e) {
    return `<blockquote>\n${e}</blockquote>\n`;
  }
  html(e) {
    return e;
  }
  heading(e, t, n, r) {
    if (this.options.headerIds) {
      return `<h${t} id="${
        this.options.headerPrefix + r.slug(n)
      }">${e}</h${t}>\n`;
    }
    return `<h${t}>${e}</h${t}>\n`;
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
    return (t.align ? `<${n} align="${t.align}">` : `<${n}>`) + e + `</${n}>\n`;
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
    if (null === (e = Ss(this.options.sanitize, this.options.baseUrl, e)))
      return n;
    let r = '<a href="' + e + '"';
    return t && (r += ' title="' + t + '"'), (r += ">" + n + "</a>"), r;
  }
  image(e, t, n) {
    if (null === (e = Ss(this.options.sanitize, this.options.baseUrl, e)))
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
class Ws {
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
class qs {
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
  slug(e, t = {}) {
    const n = this.serialize(e);
    return this.getNextSafeSlug(n, t.dryrun);
  }
}
class Zs {
  constructor(e) {
    (this.options = e || ds),
      (this.options.renderer = this.options.renderer || new Bs()),
      (this.renderer = this.options.renderer),
      (this.renderer.options = this.options),
      (this.textRenderer = new Ws()),
      (this.slugger = new qs());
  }
  static parse(e, t) {
    return new Zs(t).parse(e);
  }
  static parseInline(e, t) {
    return new Zs(t).parseInline(e);
  }
  parse(e, t = !0) {
    let n,
      r,
      l,
      i,
      s,
      o,
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
      b,
      w,
      k = "";
    const x = e.length;
    for (n = 0; n < x; n++)
      if (
        ((p = e[n]),
        this.options.extensions &&
          this.options.extensions.renderers &&
          this.options.extensions.renderers[p.type] &&
          ((w = this.options.extensions.renderers[p.type].call(
            { parser: this },
            p
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
            ].includes(p.type)))
      )
        k += w || "";
      else
        switch (p.type) {
          case "space":
            continue;
          case "hr":
            k += this.renderer.hr();
            continue;
          case "heading":
            k += this.renderer.heading(
              this.parseInline(p.tokens),
              p.depth,
              ks(this.parseInline(p.tokens, this.textRenderer)),
              this.slugger
            );
            continue;
          case "code":
            k += this.renderer.code(p.text, p.lang, p.escaped);
            continue;
          case "table":
            for (c = "", a = "", i = p.header.length, r = 0; r < i; r++)
              a += this.renderer.tablecell(
                this.parseInline(p.header[r].tokens),
                { header: !0, align: p.align[r] }
              );
            for (
              c += this.renderer.tablerow(a), u = "", i = p.rows.length, r = 0;
              r < i;
              r++
            ) {
              for (o = p.rows[r], a = "", s = o.length, l = 0; l < s; l++)
                a += this.renderer.tablecell(this.parseInline(o[l].tokens), {
                  header: !1,
                  align: p.align[l],
                });
              u += this.renderer.tablerow(a);
            }
            k += this.renderer.table(c, u);
            continue;
          case "blockquote":
            (u = this.parse(p.tokens)), (k += this.renderer.blockquote(u));
            continue;
          case "list":
            for (
              d = p.ordered,
                h = p.start,
                f = p.loose,
                i = p.items.length,
                u = "",
                r = 0;
              r < i;
              r++
            )
              (m = p.items[r]),
                (v = m.checked),
                (y = m.task),
                (g = ""),
                m.task &&
                  ((b = this.renderer.checkbox(v)),
                  f
                    ? m.tokens.length > 0 && "paragraph" === m.tokens[0].type
                      ? ((m.tokens[0].text = b + " " + m.tokens[0].text),
                        m.tokens[0].tokens &&
                          m.tokens[0].tokens.length > 0 &&
                          "text" === m.tokens[0].tokens[0].type &&
                          (m.tokens[0].tokens[0].text =
                            b + " " + m.tokens[0].tokens[0].text))
                      : m.tokens.unshift({ type: "text", text: b })
                    : (g += b)),
                (g += this.parse(m.tokens, f)),
                (u += this.renderer.listitem(g, y, v));
            k += this.renderer.list(u, d, h);
            continue;
          case "html":
            k += this.renderer.html(p.text);
            continue;
          case "paragraph":
            k += this.renderer.paragraph(this.parseInline(p.tokens));
            continue;
          case "text":
            for (
              u = p.tokens ? this.parseInline(p.tokens) : p.text;
              n + 1 < x && "text" === e[n + 1].type;

            )
              (p = e[++n]),
                (u += "\n" + (p.tokens ? this.parseInline(p.tokens) : p.text));
            k += t ? this.renderer.paragraph(u) : u;
            continue;
          default: {
            const e = 'Token with "' + p.type + '" type was not found.';
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
    const s = e.length;
    for (n = 0; n < s; n++)
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
function Qs(e, t, n) {
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
    Ts((t = zs({}, Qs.defaults, t || {}))),
    n)
  ) {
    const r = t.highlight;
    let l;
    try {
      l = Hs.lex(e, t);
    } catch (e) {
      return n(e);
    }
    const i = function (e) {
      let i;
      if (!e)
        try {
          t.walkTokens && Qs.walkTokens(l, t.walkTokens), (i = Zs.parse(l, t));
        } catch (t) {
          e = t;
        }
      return (t.highlight = r), e ? n(e) : n(null, i);
    };
    if (!r || r.length < 3) return i();
    if ((delete t.highlight, !l.length)) return i();
    let s = 0;
    return (
      Qs.walkTokens(l, function (e) {
        "code" === e.type &&
          (s++,
          setTimeout(() => {
            r(e.text, e.lang, function (t, n) {
              if (t) return i(t);
              null != n && n !== e.text && ((e.text = n), (e.escaped = !0)),
                s--,
                0 === s && i();
            });
          }, 0));
      }),
      void (0 === s && i())
    );
  }
  function r(e) {
    if (
      ((e.message +=
        "\nPlease report this to https://github.com/markedjs/marked."),
      t.silent)
    )
      return (
        "<p>An error occurred:</p><pre>" + bs(e.message + "", !0) + "</pre>"
      );
    throw e;
  }
  try {
    const n = Hs.lex(e, t);
    if (t.walkTokens) {
      if (t.async)
        return Promise.all(Qs.walkTokens(n, t.walkTokens))
          .then(() => Zs.parse(n, t))
          .catch(r);
      Qs.walkTokens(n, t.walkTokens);
    }
    return Zs.parse(n, t);
  } catch (e) {
    r(e);
  }
}
(Qs.options = Qs.setOptions =
  function (e) {
    var t;
    return zs(Qs.defaults, e), (t = Qs.defaults), (ds = t), Qs;
  }),
  (Qs.getDefaults = ps),
  (Qs.defaults = ds),
  (Qs.use = function (...e) {
    const t = Qs.defaults.extensions || { renderers: {}, childTokens: {} };
    e.forEach((e) => {
      const n = zs({}, e);
      if (
        ((n.async = Qs.defaults.async || n.async),
        e.extensions &&
          (e.extensions.forEach((e) => {
            if (!e.name) throw new Error("extension name required");
            if (e.renderer) {
              const n = t.renderers[e.name];
              t.renderers[e.name] = n
                ? function (...t) {
                    let r = e.renderer.apply(this, t);
                    return !1 === r && (r = n.apply(this, t)), r;
                  }
                : e.renderer;
            }
            if (e.tokenizer) {
              if (!e.level || ("block" !== e.level && "inline" !== e.level))
                throw new Error("extension level must be 'block' or 'inline'");
              t[e.level]
                ? t[e.level].unshift(e.tokenizer)
                : (t[e.level] = [e.tokenizer]),
                e.start &&
                  ("block" === e.level
                    ? t.startBlock
                      ? t.startBlock.push(e.start)
                      : (t.startBlock = [e.start])
                    : "inline" === e.level &&
                      (t.startInline
                        ? t.startInline.push(e.start)
                        : (t.startInline = [e.start])));
            }
            e.childTokens && (t.childTokens[e.name] = e.childTokens);
          }),
          (n.extensions = t)),
        e.renderer)
      ) {
        const t = Qs.defaults.renderer || new Bs();
        for (const n in e.renderer) {
          const r = t[n];
          t[n] = (...l) => {
            let i = e.renderer[n].apply(t, l);
            return !1 === i && (i = r.apply(t, l)), i;
          };
        }
        n.renderer = t;
      }
      if (e.tokenizer) {
        const t = Qs.defaults.tokenizer || new Ms();
        for (const n in e.tokenizer) {
          const r = t[n];
          t[n] = (...l) => {
            let i = e.tokenizer[n].apply(t, l);
            return !1 === i && (i = r.apply(t, l)), i;
          };
        }
        n.tokenizer = t;
      }
      if (e.walkTokens) {
        const t = Qs.defaults.walkTokens;
        n.walkTokens = function (n) {
          let r = [];
          return (
            r.push(e.walkTokens.call(this, n)),
            t && (r = r.concat(t.call(this, n))),
            r
          );
        };
      }
      Qs.setOptions(n);
    });
  }),
  (Qs.walkTokens = function (e, t) {
    let n = [];
    for (const r of e)
      switch (((n = n.concat(t.call(Qs, r))), r.type)) {
        case "table":
          for (const e of r.header) n = n.concat(Qs.walkTokens(e.tokens, t));
          for (const e of r.rows)
            for (const r of e) n = n.concat(Qs.walkTokens(r.tokens, t));
          break;
        case "list":
          n = n.concat(Qs.walkTokens(r.items, t));
          break;
        default:
          Qs.defaults.extensions &&
          Qs.defaults.extensions.childTokens &&
          Qs.defaults.extensions.childTokens[r.type]
            ? Qs.defaults.extensions.childTokens[r.type].forEach(function (e) {
                n = n.concat(Qs.walkTokens(r[e], t));
              })
            : r.tokens && (n = n.concat(Qs.walkTokens(r.tokens, t)));
      }
    return n;
  }),
  (Qs.parseInline = function (e, t) {
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
    Ts((t = zs({}, Qs.defaults, t || {})));
    try {
      const n = Hs.lexInline(e, t);
      return (
        t.walkTokens && Qs.walkTokens(n, t.walkTokens), Zs.parseInline(n, t)
      );
    } catch (e) {
      if (
        ((e.message +=
          "\nPlease report this to https://github.com/markedjs/marked."),
        t.silent)
      )
        return (
          "<p>An error occurred:</p><pre>" + bs(e.message + "", !0) + "</pre>"
        );
      throw e;
    }
  }),
  (Qs.Parser = Zs),
  (Qs.parser = Zs.parse),
  (Qs.Renderer = Bs),
  (Qs.TextRenderer = Ws),
  (Qs.Lexer = Hs),
  (Qs.lexer = Hs.lex),
  (Qs.Tokenizer = Ms),
  (Qs.Slugger = qs),
  (Qs.parse = Qs);
const Ks = /\$.*?\$/,
  Gs = /^\$(.*?)\$/,
  Js = /^(?:\s{0,3})\$\$((?:[^\n]|\n[^\n])+?)\n{0,1}\$\$/,
  Xs = (e = "", t = {}) =>
    e.replace(/:(.+?):/g, (e, n) =>
      t[n] ? `<img class="wl-emoji" src="${t[n]}" alt="${n}">` : e
    ),
  Ys = (e, { emojiMap: t, highlighter: n, texRenderer: r }) => {
    if (
      (Qs.setOptions({
        highlight: n || void 0,
        breaks: !0,
        smartLists: !0,
        smartypants: !0,
      }),
      r)
    ) {
      const e = ((e) => [
        {
          name: "blockMath",
          level: "block",
          tokenizer(t) {
            const n = Js.exec(t);
            if (null !== n)
              return { type: "html", raw: n[0], text: e(!0, n[1]) };
          },
        },
        {
          name: "inlineMath",
          level: "inline",
          start(e) {
            const t = e.search(Ks);
            return -1 !== t ? t : e.length;
          },
          tokenizer(t) {
            const n = Gs.exec(t);
            if (null !== n)
              return { type: "html", raw: n[0], text: e(!1, n[1]) };
          },
        },
      ])(r);
      Qs.use({ extensions: e });
    }
    return Qs.parse(Xs(e, t));
  },
  eo = (e) => e.dataset.path || e.getAttribute("id"),
  to = ({
    serverURL: e,
    path: t = window.location.pathname,
    selector: n = ".waline-comment-count",
    lang: r = navigator.language,
  }) => {
    const l = new AbortController(),
      i = document.querySelectorAll(n);
    return (
      i.length &&
        (({ serverURL: e, lang: t, paths: n, signal: r }) =>
          fetch(
            `${e}/comment?type=count&url=${encodeURIComponent(
              n.join(",")
            )}&lang=${t}`,
            { signal: r }
          )
            .then((e) => e.json())
            .then((e) => (Array.isArray(e) ? e : [e])))({
          serverURL: E(e),
          paths: Array.from(i).map((e) =>
            S(e.dataset.path || e.getAttribute("id") || t)
          ),
          lang: r,
          signal: l.signal,
        })
          .then((e) => {
            i.forEach((t, n) => {
              t.innerText = e[n].toString();
            });
          })
          .catch(os),
      l.abort.bind(l)
    );
  },
  no = ({ size: e }) =>
    wl(
      "svg",
      { class: "wl-close-icon", viewBox: "0 0 1024 1024", width: e, height: e },
      [
        wl("path", {
          d: "M697.173 85.333h-369.92c-144.64 0-241.92 101.547-241.92 252.587v348.587c0 150.613 97.28 252.16 241.92 252.16h369.92c144.64 0 241.494-101.547 241.494-252.16V337.92c0-151.04-96.854-252.587-241.494-252.587z",
          fill: "currentColor",
        }),
        wl("path", {
          d: "m640.683 587.52-75.947-75.861 75.904-75.862a37.29 37.29 0 0 0 0-52.778 37.205 37.205 0 0 0-52.779 0l-75.946 75.818-75.862-75.946a37.419 37.419 0 0 0-52.821 0 37.419 37.419 0 0 0 0 52.821l75.947 75.947-75.776 75.733a37.29 37.29 0 1 0 52.778 52.821l75.776-75.776 75.947 75.947a37.376 37.376 0 0 0 52.779-52.821z",
          fill: "#888",
        }),
      ]
    ),
  ro = () =>
    wl(
      "svg",
      { viewBox: "0 0 1024 1024", width: "24", height: "24" },
      wl("path", {
        d: "m341.013 394.667 27.755 393.45h271.83l27.733-393.45h64.106l-28.01 397.952a64 64 0 0 1-63.83 59.498H368.768a64 64 0 0 1-63.83-59.52l-28.053-397.93h64.128zm139.307 19.818v298.667h-64V414.485h64zm117.013 0v298.667h-64V414.485h64zM181.333 288h640v64h-640v-64zm453.483-106.667v64h-256v-64h256z",
        fill: "red",
      })
    ),
  lo = () =>
    wl(
      "svg",
      { viewBox: "0 0 1024 1024", width: "24", height: "24" },
      wl("path", {
        d: "M563.2 463.3 677 540c1.7 1.2 3.7 1.8 5.8 1.8.7 0 1.4-.1 2-.2 2.7-.5 5.1-2.1 6.6-4.4l25.3-37.8c1.5-2.3 2.1-5.1 1.6-7.8s-2.1-5.1-4.4-6.6l-73.6-49.1 73.6-49.1c2.3-1.5 3.9-3.9 4.4-6.6.5-2.7 0-5.5-1.6-7.8l-25.3-37.8a10.1 10.1 0 0 0-6.6-4.4c-.7-.1-1.3-.2-2-.2-2.1 0-4.1.6-5.8 1.8l-113.8 76.6c-9.2 6.2-14.7 16.4-14.7 27.5.1 11 5.5 21.3 14.7 27.4zM387 348.8h-45.5c-5.7 0-10.4 4.7-10.4 10.4v153.3c0 5.7 4.7 10.4 10.4 10.4H387c5.7 0 10.4-4.7 10.4-10.4V359.2c0-5.7-4.7-10.4-10.4-10.4zm333.8 241.3-41-20a10.3 10.3 0 0 0-8.1-.5c-2.6.9-4.8 2.9-5.9 5.4-30.1 64.9-93.1 109.1-164.4 115.2-5.7.5-9.9 5.5-9.5 11.2l3.9 45.5c.5 5.3 5 9.5 10.3 9.5h.9c94.8-8 178.5-66.5 218.6-152.7 2.4-5 .3-11.2-4.8-13.6zm186-186.1c-11.9-42-30.5-81.4-55.2-117.1-24.1-34.9-53.5-65.6-87.5-91.2-33.9-25.6-71.5-45.5-111.6-59.2-41.2-14-84.1-21.1-127.8-21.1h-1.2c-75.4 0-148.8 21.4-212.5 61.7-63.7 40.3-114.3 97.6-146.5 165.8-32.2 68.1-44.3 143.6-35.1 218.4 9.3 74.8 39.4 145 87.3 203.3.1.2.3.3.4.5l36.2 38.4c1.1 1.2 2.5 2.1 3.9 2.6 73.3 66.7 168.2 103.5 267.5 103.5 73.3 0 145.2-20.3 207.7-58.7 37.3-22.9 70.3-51.5 98.1-85 27.1-32.7 48.7-69.5 64.2-109.1 15.5-39.7 24.4-81.3 26.6-123.8 2.4-43.6-2.5-87-14.5-129zm-60.5 181.1c-8.3 37-22.8 72-43 104-19.7 31.1-44.3 58.6-73.1 81.7-28.8 23.1-61 41-95.7 53.4-35.6 12.7-72.9 19.1-110.9 19.1-82.6 0-161.7-30.6-222.8-86.2l-34.1-35.8c-23.9-29.3-42.4-62.2-55.1-97.7-12.4-34.7-18.8-71-19.2-107.9-.4-36.9 5.4-73.3 17.1-108.2 12-35.8 30-69.2 53.4-99.1 31.7-40.4 71.1-72 117.2-94.1 44.5-21.3 94-32.6 143.4-32.6 49.3 0 97 10.8 141.8 32 34.3 16.3 65.3 38.1 92 64.8 26.1 26 47.5 56 63.6 89.2 16.2 33.2 26.6 68.5 31 105.1 4.6 37.5 2.7 75.3-5.6 112.3z",
        fill: "currentColor",
      })
    ),
  io = () =>
    wl("svg", { viewBox: "0 0 1024 1024", width: "24", height: "24" }, [
      wl("path", {
        d: "M784 112H240c-88 0-160 72-160 160v480c0 88 72 160 160 160h544c88 0 160-72 160-160V272c0-88-72-160-160-160zm96 640c0 52.8-43.2 96-96 96H240c-52.8 0-96-43.2-96-96V272c0-52.8 43.2-96 96-96h544c52.8 0 96 43.2 96 96v480z",
        fill: "currentColor",
      }),
      wl("path", {
        d: "M352 480c52.8 0 96-43.2 96-96s-43.2-96-96-96-96 43.2-96 96 43.2 96 96 96zm0-128c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm462.4 379.2-3.2-3.2-177.6-177.6c-25.6-25.6-65.6-25.6-91.2 0l-80 80-36.8-36.8c-25.6-25.6-65.6-25.6-91.2 0L200 728c-4.8 6.4-8 14.4-8 24 0 17.6 14.4 32 32 32 9.6 0 16-3.2 22.4-9.6L380.8 640l134.4 134.4c6.4 6.4 14.4 9.6 24 9.6 17.6 0 32-14.4 32-32 0-9.6-4.8-17.6-9.6-24l-52.8-52.8 80-80L769.6 776c6.4 4.8 12.8 8 20.8 8 17.6 0 32-14.4 32-32 0-8-3.2-16-8-20.8z",
        fill: "currentColor",
      }),
    ]),
  so = ({ active: e = !1 }) =>
    wl("svg", { viewBox: "0 0 1024 1024", width: "24", height: "24" }, [
      wl("path", {
        d:
          "M850.654 323.804c-11.042-25.625-26.862-48.532-46.885-68.225-20.022-19.61-43.258-34.936-69.213-45.73-26.78-11.124-55.124-16.727-84.375-16.727-40.622 0-80.256 11.123-114.698 32.135A214.79 214.79 0 0 0 512 241.819a214.79 214.79 0 0 0-23.483-16.562c-34.442-21.012-74.076-32.135-114.698-32.135-29.25 0-57.595 5.603-84.375 16.727-25.872 10.711-49.19 26.12-69.213 45.73-20.105 19.693-35.843 42.6-46.885 68.225-11.453 26.615-17.303 54.877-17.303 83.963 0 27.439 5.603 56.03 16.727 85.117 9.31 24.307 22.659 49.52 39.715 74.981 27.027 40.293 64.188 82.316 110.33 124.915 76.465 70.615 152.189 119.394 155.402 121.371l19.528 12.525c8.652 5.52 19.776 5.52 28.427 0l19.529-12.525c3.213-2.06 78.854-50.756 155.401-121.371 46.143-42.6 83.304-84.622 110.33-124.915 17.057-25.46 30.487-50.674 39.716-74.981 11.124-29.087 16.727-57.678 16.727-85.117.082-29.086-5.768-57.348-17.221-83.963z" +
          (e
            ? ""
            : "M512 761.5S218.665 573.55 218.665 407.767c0-83.963 69.461-152.023 155.154-152.023 60.233 0 112.473 33.618 138.181 82.727 25.708-49.109 77.948-82.727 138.18-82.727 85.694 0 155.155 68.06 155.155 152.023C805.335 573.551 512 761.5 512 761.5z"),
        fill: e ? "red" : "currentColor",
      }),
    ]),
  oo = () =>
    wl("svg", { viewBox: "0 0 1024 1024", width: "24", height: "24" }, [
      wl("path", {
        d: "M710.816 654.301c70.323-96.639 61.084-230.578-23.705-314.843-46.098-46.098-107.183-71.109-172.28-71.109-65.008 0-126.092 25.444-172.28 71.109-45.227 46.098-70.756 107.183-70.756 172.106 0 64.923 25.444 126.007 71.194 172.106 46.099 46.098 107.184 71.109 172.28 71.109 51.414 0 100.648-16.212 142.824-47.404l126.53 126.006c7.058 7.06 16.297 10.979 26.406 10.979 10.105 0 19.343-3.919 26.402-10.979 14.467-14.467 14.467-38.172 0-52.723L710.816 654.301zm-315.107-23.265c-65.88-65.88-65.88-172.54 0-238.42 32.069-32.07 74.245-49.149 119.471-49.149 45.227 0 87.407 17.603 119.472 49.149 65.88 65.879 65.88 172.539 0 238.42-63.612 63.178-175.242 63.178-238.943 0zm0 0",
        fill: "currentColor",
      }),
      wl("path", {
        d: "M703.319 121.603H321.03c-109.8 0-199.469 89.146-199.469 199.38v382.034c0 109.796 89.236 199.38 199.469 199.38h207.397c20.653 0 37.384-16.645 37.384-37.299 0-20.649-16.731-37.296-37.384-37.296H321.03c-68.582 0-124.352-55.77-124.352-124.267V321.421c0-68.496 55.77-124.267 124.352-124.267h382.289c68.582 0 124.352 55.771 124.352 124.267V524.72c0 20.654 16.736 37.299 37.385 37.299 20.654 0 37.384-16.645 37.384-37.299V320.549c-.085-109.8-89.321-198.946-199.121-198.946zm0 0",
        fill: "currentColor",
      }),
    ]),
  ao = () =>
    wl(
      "svg",
      { width: "16", height: "16", ariaHidden: "true" },
      wl("path", {
        d: "M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z",
        fill: "currentColor",
      })
    ),
  co = () =>
    wl(
      "svg",
      { viewBox: "0 0 1024 1024", width: "24", height: "24" },
      wl("path", {
        d: "M810.667 213.333a64 64 0 0 1 64 64V704a64 64 0 0 1-64 64H478.336l-146.645 96.107a21.333 21.333 0 0 1-33.024-17.856V768h-85.334a64 64 0 0 1-64-64V277.333a64 64 0 0 1 64-64h597.334zm0 64H213.333V704h149.334v63.296L459.243 704h351.424V277.333zm-271.36 213.334v64h-176.64v-64h176.64zm122.026-128v64H362.667v-64h298.666z",
        fill: "currentColor",
      })
    ),
  uo = () =>
    wl(
      "svg",
      { viewBox: "0 0 1024 1024", width: "24", height: "24" },
      wl("path", {
        d: "M813.039 318.772L480.53 651.278H360.718V531.463L693.227 198.961C697.904 194.284 704.027 192 710.157 192C716.302 192 722.436 194.284 727.114 198.961L813.039 284.88C817.72 289.561 820 295.684 820 301.825C820 307.95 817.72 314.093 813.039 318.772ZM710.172 261.888L420.624 551.431V591.376H460.561L750.109 301.825L710.172 261.888ZM490.517 291.845H240.906V771.09H720.156V521.479C720.156 504.947 733.559 491.529 750.109 491.529C766.653 491.529 780.063 504.947 780.063 521.479V791.059C780.063 813.118 762.18 831 740.125 831H220.937C198.882 831 181 813.118 181 791.059V271.872C181 249.817 198.882 231.935 220.937 231.935H490.517C507.06 231.935 520.47 245.352 520.47 261.888C520.47 278.424 507.06 291.845 490.517 291.845Z",
        fill: "currentColor",
      })
    ),
  po = () =>
    wl(
      "svg",
      {
        class: "verified-icon",
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14",
      },
      wl("path", {
        d: "m894.4 461.56-54.4-63.2c-10.4-12-18.8-34.4-18.8-50.4v-68c0-42.4-34.8-77.2-77.2-77.2h-68c-15.6 0-38.4-8.4-50.4-18.8l-63.2-54.4c-27.6-23.6-72.8-23.6-100.8 0l-62.8 54.8c-12 10-34.8 18.4-50.4 18.4h-69.2c-42.4 0-77.2 34.8-77.2 77.2v68.4c0 15.6-8.4 38-18.4 50l-54 63.6c-23.2 27.6-23.2 72.4 0 100l54 63.6c10 12 18.4 34.4 18.4 50v68.4c0 42.4 34.8 77.2 77.2 77.2h69.2c15.6 0 38.4 8.4 50.4 18.8l63.2 54.4c27.6 23.6 72.8 23.6 100.8 0l63.2-54.4c12-10.4 34.4-18.8 50.4-18.8h68c42.4 0 77.2-34.8 77.2-77.2v-68c0-15.6 8.4-38.4 18.8-50.4l54.4-63.2c23.2-27.6 23.2-73.2-.4-100.8zm-216-25.2-193.2 193.2a30 30 0 0 1-42.4 0l-96.8-96.8a30.16 30.16 0 0 1 0-42.4c11.6-11.6 30.8-11.6 42.4 0l75.6 75.6 172-172c11.6-11.6 30.8-11.6 42.4 0 11.6 11.6 11.6 30.8 0 42.4z",
        fill: "#27ae60",
      })
    ),
  ho = ({ size: e }) =>
    wl(
      "svg",
      {
        width: e,
        height: e,
        viewBox: "0 0 100 100",
        preserveAspectRatio: "xMidYMid",
      },
      wl(
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
        wl("animateTransform", {
          attributeName: "transform",
          type: "rotate",
          repeatCount: "indefinite",
          dur: "1s",
          values: "0 50 50;360 50 50",
          keyTimes: "0;1",
        })
      )
    ),
  fo = () =>
    wl(
      "svg",
      { width: 24, height: 24, fill: "currentcolor", viewBox: "0 0 24 24" },
      [
        wl("path", {
          style: "transform: translateY(0.5px)",
          d: "M18.968 10.5H15.968V11.484H17.984V12.984H15.968V15H14.468V9H18.968V10.5V10.5ZM8.984 9C9.26533 9 9.49967 9.09367 9.687 9.281C9.87433 9.46833 9.968 9.70267 9.968 9.984V10.5H6.499V13.5H8.468V12H9.968V14.016C9.968 14.2973 9.87433 14.5317 9.687 14.719C9.49967 14.9063 9.26533 15 8.984 15H5.984C5.70267 15 5.46833 14.9063 5.281 14.719C5.09367 14.5317 5 14.2973 5 14.016V9.985C5 9.70367 5.09367 9.46933 5.281 9.282C5.46833 9.09467 5.70267 9.001 5.984 9.001H8.984V9ZM11.468 9H12.968V15H11.468V9V9Z",
        }),
        wl("path", {
          d: "M18.5 3H5.75C3.6875 3 2 4.6875 2 6.75V18C2 20.0625 3.6875 21.75 5.75 21.75H18.5C20.5625 21.75 22.25 20.0625 22.25 18V6.75C22.25 4.6875 20.5625 3 18.5 3ZM20.75 18C20.75 19.2375 19.7375 20.25 18.5 20.25H5.75C4.5125 20.25 3.5 19.2375 3.5 18V6.75C3.5 5.5125 4.5125 4.5 5.75 4.5H18.5C19.7375 4.5 20.75 5.5125 20.75 6.75V18Z",
        }),
      ]
    );
let go = null;
const mo = () => go || (go = Di("WALINE_LIKE", []));
let vo = null;
const yo = () => vo ?? (vo = Di("WALINE_REACTION", {}));
var bo =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : {},
  wo = {},
  ko = {},
  xo = {},
  _o =
    (bo && bo.__awaiter) ||
    function (e, t, n, r) {
      return new (n || (n = Promise))(function (l, i) {
        function s(e) {
          try {
            a(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function o(e) {
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
                  })).then(s, o);
        }
        a((r = r.apply(e, t || [])).next());
      });
    },
  $o =
    (bo && bo.__generator) ||
    function (e, t) {
      var n,
        r,
        l,
        i,
        s = {
          label: 0,
          sent: function () {
            if (1 & l[0]) throw l[1];
            return l[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (i = { next: o(0), throw: o(1), return: o(2) }),
        "function" == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function o(i) {
        return function (o) {
          return (function (i) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; s; )
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
                    return s.label++, { value: i[1], done: !1 };
                  case 5:
                    s.label++, (r = i[1]), (i = [0]);
                    continue;
                  case 7:
                    (i = s.ops.pop()), s.trys.pop();
                    continue;
                  default:
                    if (
                      !((l = s.trys),
                      (l = l.length > 0 && l[l.length - 1]) ||
                        (6 !== i[0] && 2 !== i[0]))
                    ) {
                      s = 0;
                      continue;
                    }
                    if (3 === i[0] && (!l || (i[1] > l[0] && i[1] < l[3]))) {
                      s.label = i[1];
                      break;
                    }
                    if (6 === i[0] && s.label < l[1]) {
                      (s.label = l[1]), (l = i);
                      break;
                    }
                    if (l && s.label < l[2]) {
                      (s.label = l[2]), s.ops.push(i);
                      break;
                    }
                    l[2] && s.ops.pop(), s.trys.pop();
                    continue;
                }
                i = t.call(e, s);
              } catch (e) {
                (i = [6, e]), (r = 0);
              } finally {
                n = l = 0;
              }
            if (5 & i[0]) throw i[1];
            return { value: i[0] ? i[1] : void 0, done: !0 };
          })([i, o]);
        };
      }
    };
Object.defineProperty(xo, "__esModule", { value: !0 }),
  (xo.ReCaptchaInstance = void 0);
var Co = (function () {
  function e(e, t, n) {
    (this.siteKey = e),
      (this.recaptchaID = t),
      (this.recaptcha = n),
      (this.styleContainer = null);
  }
  return (
    (e.prototype.execute = function (e) {
      return _o(this, void 0, void 0, function () {
        return $o(this, function (t) {
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
(xo.ReCaptchaInstance = Co),
  Object.defineProperty(ko, "__esModule", { value: !0 }),
  (ko.getInstance = ko.load = void 0);
var So,
  Ro = xo;
!(function (e) {
  (e[(e.NOT_LOADED = 0)] = "NOT_LOADED"),
    (e[(e.LOADING = 1)] = "LOADING"),
    (e[(e.LOADED = 2)] = "LOADED");
})(So || (So = {}));
var Ao = (function () {
  function e() {}
  return (
    (e.load = function (t, n) {
      if ((void 0 === n && (n = {}), "undefined" == typeof document))
        return Promise.reject(new Error("This is a library for the browser!"));
      if (e.getLoadingState() === So.LOADED)
        return e.instance.getSiteKey() === t
          ? Promise.resolve(e.instance)
          : Promise.reject(
              new Error("reCAPTCHA already loaded with different site key!")
            );
      if (e.getLoadingState() === So.LOADING)
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
      (e.instanceSiteKey = t), e.setLoadingState(So.LOADING);
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
            e.setLoadingState(So.LOADED);
            var i = r.doExplicitRender(
                grecaptcha,
                t,
                n.explicitRenderParameters ? n.explicitRenderParameters : {},
                n.useEnterprise || !1
              ),
              s = new Ro.ReCaptchaInstance(t, i, grecaptcha);
            e.successfulLoadingConsumers.forEach(function (e) {
              return e(s);
            }),
              (e.successfulLoadingConsumers = []),
              n.autoHideBadge && s.hideBadge(),
              (e.instance = s),
              l(s);
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
      return null === e.loadingState ? So.NOT_LOADED : e.loadingState;
    }),
    (e.prototype.loadScript = function (t, n, r, l, i) {
      var s = this;
      void 0 === n && (n = !1),
        void 0 === r && (r = !1),
        void 0 === l && (l = {}),
        void 0 === i && (i = "");
      var o = document.createElement("script");
      o.setAttribute("recaptcha-v3-script", "");
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
        (o.src = a + "?render=explicit" + c),
        new Promise(function (t, n) {
          o.addEventListener(
            "load",
            s.waitForScriptToLoad(function () {
              t(o);
            }, r),
            !1
          ),
            (o.onerror = function (t) {
              e.setLoadingState(So.NOT_LOADED), n(t);
            }),
            document.head.appendChild(o);
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
(ko.load = Ao.load),
  (ko.getInstance = Ao.getInstance),
  (function (e) {
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.ReCaptchaInstance = e.getInstance = e.load = void 0);
    var t = ko;
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
    var n = xo;
    Object.defineProperty(e, "ReCaptchaInstance", {
      enumerable: !0,
      get: function () {
        return n.ReCaptchaInstance;
      },
    });
  })(wo);
const Eo = {};
let Io = null;
const Lo = () => Io ?? (Io = Di("WALINE_USER", {})),
  zo = { key: 0, class: "wl-reaction" },
  Oo = ["textContent"],
  jo = { class: "wl-reaction-list" },
  To = ["onClick"],
  Uo = { class: "wl-reaction-img" },
  Po = ["src", "alt"],
  Mo = ["textContent"],
  Fo = ["textContent"];
var No = Qn({
    __name: "ArticleReaction",
    setup(e, { expose: t }) {
      t();
      const n = yo(),
        r = Dn("config"),
        l = tn(-1),
        i = tn([]),
        s = bl(() => r.value.locale),
        o = bl(() => r.value.reaction.length > 0),
        a = bl(() => {
          const { reaction: e, path: t } = r.value;
          return e.map((e, r) => ({
            icon: e,
            desc: s.value[`reaction${r}`],
            active: n.value[t] === r,
          }));
        });
      let c;
      return (
        Xn(() => {
          Wn(
            () => [r.value.serverURL, r.value.path],
            () => {
              (async () => {
                if (o.value) {
                  const {
                      serverURL: e,
                      lang: t,
                      path: n,
                      reaction: l,
                    } = r.value,
                    s = new AbortController();
                  c = s.abort.bind(s);
                  const o = await _({
                    serverURL: e,
                    lang: t,
                    paths: [n],
                    type: l.map((e, t) => `reaction${t}`),
                    signal: s.signal,
                  });
                  if (Array.isArray(o) || "number" == typeof o) return;
                  i.value = l.map((e, t) => o[`reaction${t}`]);
                }
              })();
            },
            { immediate: !0 }
          );
        }),
        er(() => c?.()),
        (e, t) =>
          sn(a).length
            ? (Dr(),
              qr("div", zo, [
                Yr(
                  "div",
                  {
                    class: "wl-reaction-title",
                    textContent: q(sn(s).reactionTitle),
                  },
                  null,
                  8,
                  Oo
                ),
                Yr("ul", jo, [
                  (Dr(!0),
                  qr(
                    Ur,
                    null,
                    or(
                      sn(a),
                      ({ active: e, icon: t, desc: s }, o) => (
                        Dr(),
                        qr(
                          "li",
                          {
                            key: o,
                            class: V(["wl-reaction-item", { active: e }]),
                            onClick: (e) =>
                              (async (e) => {
                                if (-1 === l.value) {
                                  const {
                                      serverURL: t,
                                      lang: s,
                                      path: o,
                                    } = r.value,
                                    a = n.value[o];
                                  (l.value = e),
                                    void 0 !== a &&
                                      (await $({
                                        serverURL: t,
                                        lang: s,
                                        path: o,
                                        type: `reaction${a}`,
                                        action: "desc",
                                      }),
                                      (i.value[a] = Math.max(
                                        i.value[a] - 1,
                                        0
                                      ))),
                                    a !== e &&
                                      (await $({
                                        serverURL: t,
                                        lang: s,
                                        path: o,
                                        type: `reaction${e}`,
                                      }),
                                      (i.value[e] = (i.value[e] || 0) + 1)),
                                    a === e
                                      ? delete n.value[o]
                                      : (n.value[o] = e),
                                    (l.value = -1);
                                }
                              })(o),
                          },
                          [
                            Yr("div", Uo, [
                              Yr("img", { src: t, alt: s }, null, 8, Po),
                              l.value === o
                                ? (Dr(),
                                  Zr(sn(ho), {
                                    key: 0,
                                    class: "wl-reaction-loading",
                                  }))
                                : (Dr(),
                                  qr(
                                    "div",
                                    {
                                      key: 1,
                                      class: "wl-reaction-votes",
                                      textContent: q(i.value[o] || 0),
                                    },
                                    null,
                                    8,
                                    Mo
                                  )),
                            ]),
                            Yr(
                              "div",
                              { class: "wl-reaction-text", textContent: q(s) },
                              null,
                              8,
                              Fo
                            ),
                          ],
                          10,
                          To
                        )
                      )
                    ),
                    128
                  )),
                ]),
              ]))
            : rl("v-if", !0)
      );
    },
  }),
  Vo = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [e, r] of t) n[e] = r;
    return n;
  },
  Do = Vo(No, [["__file", "ArticleReaction.vue"]]),
  Ho = new Map();
function Bo(e) {
  var t = Ho.get(e);
  t && t.destroy();
}
function Wo(e) {
  var t = Ho.get(e);
  t && t.update();
}
var qo = null;
"undefined" == typeof window
  ? (((qo = function (e) {
      return e;
    }).destroy = function (e) {
      return e;
    }),
    (qo.update = function (e) {
      return e;
    }))
  : (((qo = function (e, t) {
      return (
        e &&
          Array.prototype.forEach.call(e.length ? e : [e], function (e) {
            return (function (e) {
              if (e && e.nodeName && "TEXTAREA" === e.nodeName && !Ho.has(e)) {
                var t,
                  n = null,
                  r = window.getComputedStyle(e),
                  l =
                    ((t = e.value),
                    function () {
                      s({
                        testForHeightReduction:
                          "" === t || !e.value.startsWith(t),
                        restoreTextAlign: null,
                      }),
                        (t = e.value);
                    }),
                  i = function (t) {
                    e.removeEventListener("autosize:destroy", i),
                      e.removeEventListener("autosize:update", o),
                      e.removeEventListener("input", l),
                      window.removeEventListener("resize", o),
                      Object.keys(t).forEach(function (n) {
                        return (e.style[n] = t[n]);
                      }),
                      Ho.delete(e);
                  }.bind(e, {
                    height: e.style.height,
                    resize: e.style.resize,
                    textAlign: e.style.textAlign,
                    overflowY: e.style.overflowY,
                    overflowX: e.style.overflowX,
                    wordWrap: e.style.wordWrap,
                  });
                e.addEventListener("autosize:destroy", i),
                  e.addEventListener("autosize:update", o),
                  e.addEventListener("input", l),
                  window.addEventListener("resize", o),
                  (e.style.overflowX = "hidden"),
                  (e.style.wordWrap = "break-word"),
                  Ho.set(e, { destroy: i, update: o }),
                  o();
              }
              function s(t) {
                var l,
                  i,
                  o = t.restoreTextAlign,
                  a = void 0 === o ? null : o,
                  c = t.testForHeightReduction,
                  u = void 0 === c || c,
                  p = r.overflowY;
                if (
                  0 !== e.scrollHeight &&
                  ("vertical" === r.resize
                    ? (e.style.resize = "none")
                    : "both" === r.resize && (e.style.resize = "horizontal"),
                  u &&
                    ((l = (function (e) {
                      for (
                        var t = [];
                        e && e.parentNode && e.parentNode instanceof Element;

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
                        (parseFloat(r.paddingTop) + parseFloat(r.paddingBottom))
                      : e.scrollHeight +
                        parseFloat(r.borderTopWidth) +
                        parseFloat(r.borderBottomWidth)),
                  "none" !== r.maxHeight && i > parseFloat(r.maxHeight)
                    ? ("hidden" === r.overflowY &&
                        (e.style.overflow = "scroll"),
                      (i = parseFloat(r.maxHeight)))
                    : "hidden" !== r.overflowY && (e.style.overflow = "hidden"),
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
                    s({ restoreTextAlign: d, testForHeightReduction: !0 });
                }
              }
              function o() {
                s({ testForHeightReduction: !0, restoreTextAlign: null });
              }
            })(e);
          }),
        e
      );
    }).destroy = function (e) {
      return e && Array.prototype.forEach.call(e.length ? e : [e], Bo), e;
    }),
    (qo.update = function (e) {
      return e && Array.prototype.forEach.call(e.length ? e : [e], Wo), e;
    }));
var Zo = qo;
const Qo = ["data-index"],
  Ko = ["src", "title", "onClick"];
var Go = Qn({
    __name: "ImageWall",
    props: {
      items: { default: () => [] },
      columnWidth: { default: 300 },
      gap: { default: 0 },
    },
    emits: ["insert"],
    setup(e, { expose: t }) {
      const n = e;
      t();
      let r = null;
      const l = tn(null),
        i = tn({}),
        s = tn([]),
        o = () => {
          const e = Math.floor(
            (l.value.getBoundingClientRect().width + n.gap) /
              (n.columnWidth + n.gap)
          );
          return e > 0 ? e : 1;
        },
        a = async (e) => {
          if (e >= n.items.length) return;
          await _n();
          const t = Array.from(l.value?.children || []).reduce((e, t) =>
            t.getBoundingClientRect().height < e.getBoundingClientRect().height
              ? t
              : e
          );
          s.value[Number(t.dataset.index)].push(e), await a(e + 1);
        },
        c = async (e = !1) => {
          if (s.value.length === o() && !e) return;
          var t;
          s.value = ((t = o()), new Array(t).fill(null).map(() => []));
          const n = window.scrollY;
          await a(0), window.scrollTo({ top: n });
        },
        u = (e) => {
          i.value[e.target.src] = !0;
        };
      return (
        Xn(() => {
          c(!0),
            (r = new ResizeObserver(() => {
              c();
            })),
            r.observe(l.value),
            Wn(
              () => [n.items],
              () => {
                (i.value = {}), c(!0);
              }
            ),
            Wn(
              () => [n.columnWidth, n.gap],
              () => {
                c();
              }
            );
        }),
        Yn(() => r.unobserve(l.value)),
        (t, n) => (
          Dr(),
          qr(
            "div",
            {
              ref_key: "wall",
              ref: l,
              class: "wl-gallery",
              style: U({ gap: `${e.gap}px` }),
            },
            [
              (Dr(!0),
              qr(
                Ur,
                null,
                or(
                  s.value,
                  (n, r) => (
                    Dr(),
                    qr(
                      "div",
                      {
                        key: r,
                        class: "wl-gallery-column",
                        "data-index": r,
                        style: U({ gap: `${e.gap}px` }),
                      },
                      [
                        (Dr(!0),
                        qr(
                          Ur,
                          null,
                          or(
                            n,
                            (n) => (
                              Dr(),
                              qr(
                                Ur,
                                { key: n },
                                [
                                  i.value[e.items[n].src]
                                    ? rl("v-if", !0)
                                    : (Dr(),
                                      Zr(sn(ho), {
                                        key: 0,
                                        size: 36,
                                        style: { margin: "20px auto" },
                                      })),
                                  Yr(
                                    "img",
                                    {
                                      class: "wl-gallery-item",
                                      src: e.items[n].src,
                                      title: e.items[n].title,
                                      loading: "lazy",
                                      onLoad: u,
                                      onClick: (r) =>
                                        t.$emit(
                                          "insert",
                                          `![](${e.items[n].src})`
                                        ),
                                    },
                                    null,
                                    40,
                                    Ko
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
                      Qo
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
  Jo = Vo(Go, [["__file", "ImageWall.vue"]]);
const Xo = { class: "wl-comment" },
  Yo = { key: 0, class: "wl-login-info" },
  ea = { class: "wl-avatar" },
  ta = ["title"],
  na = ["title"],
  ra = ["src"],
  la = ["title", "textContent"],
  ia = { class: "wl-panel" },
  sa = ["for", "textContent"],
  oa = ["id", "onUpdate:modelValue", "name", "type"],
  aa = ["placeholder"],
  ca = { class: "wl-preview" },
  ua = Yr("hr", null, null, -1),
  pa = ["innerHTML"],
  da = { class: "wl-footer" },
  ha = { class: "wl-actions" },
  fa = {
    href: "https://guides.github.com/features/mastering-markdown/",
    title: "Markdown Guide",
    "aria-label": "Markdown is supported",
    class: "wl-action",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  ga = ["title"],
  ma = ["title"],
  va = ["title"],
  ya = ["title"],
  ba = { class: "wl-info" },
  wa = { class: "wl-text-number" },
  ka = { key: 0 },
  xa = ["textContent"],
  _a = ["textContent"],
  $a = ["disabled"],
  Ca = ["placeholder"],
  Sa = { key: 0, class: "wl-loading" },
  Ra = { key: 0, class: "wl-tab-wrapper" },
  Aa = ["title", "onClick"],
  Ea = ["src", "alt"],
  Ia = { key: 0, class: "wl-tabs" },
  La = ["onClick"],
  za = ["src", "alt", "title"],
  Oa = ["title"];
var ja = Qn({
    __name: "CommentBox",
    props: {
      edit: { default: null },
      rootId: { default: "" },
      replyId: { default: "" },
      replyUser: { default: "" },
    },
    emits: ["log", "cancelEdit", "cancelReply", "submit"],
    setup(e, { expose: t, emit: n }) {
      const r = e;
      t();
      const l = Dn("config"),
        i = Di("WALINE_COMMENT_BOX_EDITOR", ""),
        s = Di("WALINE_USER_META", { nick: "", mail: "", link: "" }),
        o = Lo(),
        a = tn({}),
        c = tn(null),
        u = tn(null),
        p = tn(null),
        d = tn(null),
        h = tn(null),
        f = tn(null),
        g = tn(null),
        m = tn({ tabs: [], map: {} }),
        v = tn(0),
        y = tn(!1),
        b = tn(!1),
        w = tn(!1),
        k = tn(""),
        x = tn(0),
        _ = Vt({ loading: !0, list: [] }),
        $ = tn(0),
        S = tn(!1),
        A = tn(""),
        E = tn(!1),
        I = tn(!1),
        L = bl(() => l.value.locale),
        z = bl(() => Boolean(o.value?.token)),
        O = bl(() => !1 !== l.value.imageUploader),
        j = (e) => {
          const t = c.value,
            n = t.selectionStart,
            r = t.selectionEnd || 0,
            l = t.scrollTop;
          (i.value =
            t.value.substring(0, n) + e + t.value.substring(r, t.value.length)),
            t.focus(),
            (t.selectionStart = n + e.length),
            (t.selectionEnd = n + e.length),
            (t.scrollTop = l);
        },
        T = (e) => {
          const t = e.key;
          (e.ctrlKey || e.metaKey) && "Enter" === t && N();
        },
        U = (e) => {
          const t = `![${l.value.locale.uploading} ${e.name}]()`;
          return (
            j(t),
            Promise.resolve()
              .then(() => l.value.imageUploader(e))
              .then((n) => {
                i.value = i.value.replace(t, `\r\n![${e.name}](${n})`);
              })
              .catch((e) => {
                alert(e.message), (i.value = i.value.replace(t, ""));
              })
          );
        },
        P = (e) => {
          if (e.dataTransfer?.items) {
            const t = us(e.dataTransfer.items);
            t && O.value && (U(t), e.preventDefault());
          }
        },
        M = (e) => {
          if (e.clipboardData) {
            const t = us(e.clipboardData.items);
            t && O.value && U(t);
          }
        },
        F = () => {
          const e = u.value;
          e.files &&
            O.value &&
            U(e.files[0]).then(() => {
              e.value = "";
            });
        },
        N = async () => {
          const {
            serverURL: e,
            lang: t,
            login: u,
            wordLimit: p,
            requiredMeta: d,
          } = l.value;
          let h = "";
          l.value.recaptchaV3Key &&
            (h = await ((e) => {
              const t =
                Eo[e] ??
                (Eo[e] = wo.load(e, {
                  useRecaptchaNet: !0,
                  autoHideBadge: !0,
                }));
              return { execute: (e) => t.then((t) => t.execute(e)) };
            })(l.value.recaptchaV3Key).execute("social"));
          const f = await (async () => {
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
            g = {
              comment: A.value,
              nick: s.value.nick,
              mail: s.value.mail,
              link: s.value.link,
              url: l.value.path,
              recaptchaV3: h,
              ua: f,
            };
          if (o.value?.token)
            (g.nick = o.value.display_name),
              (g.mail = o.value.email),
              (g.link = o.value.url);
          else {
            if ("force" === u) return;
            if (d.indexOf("nick") > -1 && !g.nick)
              return a.value.nick?.focus(), alert(L.value.nickError);
            if (
              (d.indexOf("mail") > -1 && !g.mail) ||
              (g.mail &&
                !/^\w(?:[\w._-]*\w)?@(?:\w(?:[\w-]*\w)?\.)*\w+$/.exec(g.mail))
            )
              return a.value.mail?.focus(), alert(L.value.mailError);
            g.nick || (g.nick = L.value.anonymous);
          }
          if (!g.comment) return void c.value?.focus();
          if (!S.value)
            return alert(
              L.value.wordHint
                .replace("$0", p[0].toString())
                .replace("$1", p[1].toString())
                .replace("$2", x.value.toString())
            );
          (g.comment = Xs(g.comment, m.value.map)),
            r.replyId &&
              r.rootId &&
              ((g.pid = r.replyId), (g.rid = r.rootId), (g.at = r.replyUser)),
            (E.value = !0);
          const v = {
            serverURL: e,
            lang: t,
            token: o.value?.token,
            comment: g,
          };
          (r.edit
            ? C({ objectId: r.edit.objectId, ...v })
            : (({ serverURL: e, lang: t, token: n, comment: r }) => {
                const l = { "Content-Type": "application/json" };
                return (
                  n && (l.Authorization = `Bearer ${n}`),
                  fetch(`${e}/comment?lang=${t}`, {
                    method: "POST",
                    headers: l,
                    body: JSON.stringify(r),
                  }).then((e) => e.json())
                );
              })(v)
          )
            .then((e) => {
              if (((E.value = !1), e.errmsg)) return alert(e.errmsg);
              n("submit", e.data),
                (i.value = ""),
                (k.value = ""),
                r.replyId && n("cancelReply"),
                r.edit?.objectId && n("cancelEdit");
            })
            .catch((e) => {
              (E.value = !1), alert(e.message);
            });
        },
        D = (e) => {
          e.preventDefault();
          const { lang: t, serverURL: r } = l.value;
          (({ lang: e, serverURL: t }) => {
            const n = (window.innerWidth - 450) / 2,
              r = (window.innerHeight - 450) / 2,
              l = window.open(
                `${t}/ui/login?lng=${encodeURIComponent(e)}`,
                "_blank",
                `width=450,height=450,left=${n},top=${r},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`
              );
            return (
              l?.postMessage({ type: "TOKEN", data: null }, "*"),
              new Promise((e) => {
                const t = ({ data: n }) => {
                  n &&
                    "object" == typeof n &&
                    "userInfo" === n.type &&
                    n.data.token &&
                    (l?.close(),
                    window.removeEventListener("message", t),
                    e(n.data));
                };
                window.addEventListener("message", t);
              })
            );
          })({ serverURL: r, lang: t }).then((e) => {
            (o.value = e),
              (e.remember ? localStorage : sessionStorage).setItem(
                "WALINE_USER",
                JSON.stringify(e)
              ),
              n("log");
          });
        },
        H = () => {
          (o.value = {}),
            localStorage.setItem("WALINE_USER", "null"),
            sessionStorage.setItem("WALINE_USER", "null"),
            n("log");
        },
        B = (e) => {
          e.preventDefault();
          const { lang: t, serverURL: n } = l.value,
            r = (window.innerWidth - 800) / 2,
            i = (window.innerHeight - 800) / 2,
            s = new URLSearchParams({ lng: t, token: o.value.token }),
            a = window.open(
              `${n}/ui/profile?${s.toString()}`,
              "_blank",
              `width=800,height=800,left=${r},top=${i},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`
            );
          a?.postMessage({ type: "TOKEN", data: o.value.token }, "*");
        },
        W = (e) => {
          p.value?.contains(e.target) ||
            d.value?.contains(e.target) ||
            (y.value = !1),
            h.value?.contains(e.target) ||
              f.value?.contains(e.target) ||
              (b.value = !1);
        },
        Z = async (e) => {
          const { scrollTop: t, clientHeight: n, scrollHeight: r } = e.target,
            i = (n + t) / r,
            s = l.value.search,
            o = g.value?.value || "";
          if (i < 0.9 || _.loading || I.value) return;
          _.loading = !0;
          (s.more && _.list.length
            ? await s.more(o, _.list.length)
            : await s.search(o)
          ).length
            ? (_.list = [
                ..._.list,
                ...(s.more && _.list.length
                  ? await s.more(o, _.list.length)
                  : await s.search(o)),
              ])
            : (I.value = !0),
            (_.loading = !1),
            setTimeout(() => {
              e.target.scrollTop = t;
            }, 50);
        },
        Q = pi((e) => {
          (_.list = []), (I.value = !1), Z(e);
        }, 300);
      Wn(
        [l, x],
        ([e, t]) => {
          const { wordLimit: n } = e;
          n
            ? t < n[0] && 0 !== n[0]
              ? (($.value = n[0]), (S.value = !1))
              : t > n[1]
              ? (($.value = n[1]), (S.value = !1))
              : (($.value = n[1]), (S.value = !0))
            : (($.value = 0), (S.value = !0));
        },
        { immediate: !0 }
      );
      const K = ({ data: e }) => {
        e &&
          "profile" === e.type &&
          ((o.value = { ...o.value, ...e.data }),
          [localStorage, sessionStorage]
            .filter((e) => e.getItem("WALINE_USER"))
            .forEach((e) => e.setItem("WALINE_USER", JSON.stringify(o))));
      };
      return (
        Xn(() => {
          document.body.addEventListener("click", W),
            window.addEventListener("message", K),
            r.edit?.objectId && (i.value = r.edit.orig),
            Wn(b, async (e) => {
              if (!e) return;
              const t = l.value.search;
              g.value && (g.value.value = ""),
                (_.loading = !0),
                (_.list = t.default ? await t.default() : await t.search("")),
                (_.loading = !1);
            }),
            Wn(
              () => i.value,
              (e) => {
                const { highlighter: t, texRenderer: n } = l.value;
                (A.value = e),
                  (k.value = Ys(e, {
                    emojiMap: m.value.map,
                    highlighter: t,
                    texRenderer: n,
                  })),
                  (x.value = ((e) =>
                    (((e) =>
                      e.match(/[\w\d\s,.\u00C0-\u024F\u0400-\u04FF]+/giu))(
                      e
                    )?.reduce(
                      (e, t) =>
                        e +
                        ("" === t.trim() ? 0 : t.trim().split(/\s+/u).length),
                      0
                    ) || 0) +
                    (((e) => e.match(/[\u4E00-\u9FD5]/gu))(e)?.length || 0))(
                    e
                  )),
                  e ? Zo(c.value) : Zo.destroy(c.value);
              },
              { immediate: !0 }
            ),
            Wn(
              () => l.value.emoji,
              (e) => {
                return ((t = e),
                Promise.all(
                  t.map((e) =>
                    "string" == typeof e ? is(R(e)) : Promise.resolve(e)
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
                        type: s,
                        items: o,
                      } = e;
                      t.tabs.push({
                        name: n,
                        icon: ss(l, r, i, s),
                        items: o.map((e) => {
                          const n = `${i || ""}${e}`;
                          return (t.map[n] = ss(e, r, i, s)), n;
                        }),
                      });
                    }),
                    t
                  );
                })).then((e) => {
                  m.value = e;
                });
                var t;
              },
              { immediate: !0 }
            );
        }),
        er(() => {
          document.body.removeEventListener("click", W),
            window.removeEventListener("message", K);
        }),
        (t, n) => (
          Dr(),
          qr("div", Xo, [
            "disable" !== sn(l).login && sn(z) && !e.edit?.objectId
              ? (Dr(),
                qr("div", Yo, [
                  Yr("div", ea, [
                    Yr(
                      "button",
                      {
                        type: "submit",
                        class: "wl-logout-btn",
                        title: sn(L).logout,
                        onClick: H,
                      },
                      [el(sn(no), { size: 14 })],
                      8,
                      ta
                    ),
                    Yr(
                      "a",
                      {
                        href: "#",
                        class: "wl-login-nick",
                        "aria-label": "Profile",
                        title: sn(L).profile,
                        onClick: B,
                      },
                      [
                        Yr(
                          "img",
                          { src: sn(o).avatar, alt: "avatar" },
                          null,
                          8,
                          ra
                        ),
                      ],
                      8,
                      na
                    ),
                  ]),
                  Yr(
                    "a",
                    {
                      href: "#",
                      class: "wl-login-nick",
                      "aria-label": "Profile",
                      title: sn(L).profile,
                      onClick: B,
                      textContent: q(sn(o).display_name),
                    },
                    null,
                    8,
                    la
                  ),
                ]))
              : rl("v-if", !0),
            Yr("div", ia, [
              "force" !== sn(l).login && sn(l).meta.length && !sn(z)
                ? (Dr(),
                  qr(
                    "div",
                    {
                      key: 0,
                      class: V(["wl-header", `item${sn(l).meta.length}`]),
                    },
                    [
                      (Dr(!0),
                      qr(
                        Ur,
                        null,
                        or(
                          sn(l).meta,
                          (e) => (
                            Dr(),
                            qr("div", { key: e, class: "wl-header-item" }, [
                              Yr(
                                "label",
                                {
                                  for: `wl-${e}`,
                                  textContent: q(
                                    sn(L)[e] +
                                      (sn(l).requiredMeta.includes(e) ||
                                      !sn(l).requiredMeta.length
                                        ? ""
                                        : `(${sn(L).optional})`)
                                  ),
                                },
                                null,
                                8,
                                sa
                              ),
                              tr(
                                Yr(
                                  "input",
                                  {
                                    id: `wl-${e}`,
                                    ref_for: !0,
                                    ref: (t) => {
                                      t && (a.value[e] = t);
                                    },
                                    "onUpdate:modelValue": (t) =>
                                      (sn(s)[e] = t),
                                    class: V(["wl-input", `wl-${e}`]),
                                    name: e,
                                    type: "mail" === e ? "email" : "text",
                                  },
                                  null,
                                  10,
                                  oa
                                ),
                                [[Gl, sn(s)[e]]]
                              ),
                            ])
                          )
                        ),
                        128
                      )),
                    ],
                    2
                  ))
                : rl("v-if", !0),
              tr(
                Yr(
                  "textarea",
                  {
                    id: "wl-edit",
                    ref_key: "editorRef",
                    ref: c,
                    "onUpdate:modelValue":
                      n[0] || (n[0] = (e) => (en(i) ? (i.value = e) : null)),
                    class: "wl-editor",
                    placeholder: e.replyUser
                      ? `@${e.replyUser}`
                      : sn(L).placeholder,
                    onKeydown: T,
                    onDrop: P,
                    onPaste: M,
                  },
                  null,
                  40,
                  aa
                ),
                [[Dl, sn(i)]]
              ),
              tr(
                Yr(
                  "div",
                  ca,
                  [
                    ua,
                    Yr("h4", null, q(sn(L).preview) + ":", 1),
                    Yr(
                      "div",
                      { class: "wl-content", innerHTML: k.value },
                      null,
                      8,
                      pa
                    ),
                  ],
                  512
                ),
                [[Xl, w.value]]
              ),
              Yr("div", da, [
                Yr("div", ha, [
                  Yr("a", fa, [el(sn(ao))]),
                  tr(
                    Yr(
                      "button",
                      {
                        ref_key: "emojiButtonRef",
                        ref: p,
                        type: "button",
                        class: V(["wl-action", { active: y.value }]),
                        title: sn(L).emoji,
                        onClick: n[1] || (n[1] = (e) => (y.value = !y.value)),
                      },
                      [el(sn(lo))],
                      10,
                      ga
                    ),
                    [[Xl, m.value.tabs.length]]
                  ),
                  sn(l).search
                    ? (Dr(),
                      qr(
                        "button",
                        {
                          key: 0,
                          ref_key: "gifButtonRef",
                          ref: h,
                          type: "button",
                          class: V(["wl-action", { active: b.value }]),
                          title: sn(L).gif,
                          onClick: n[2] || (n[2] = (e) => (b.value = !b.value)),
                        },
                        [el(sn(fo))],
                        10,
                        ma
                      ))
                    : rl("v-if", !0),
                  Yr(
                    "input",
                    {
                      id: "wl-image-upload",
                      ref_key: "imageUploadRef",
                      ref: u,
                      class: "upload",
                      type: "file",
                      accept: ".png,.jpg,.jpeg,.webp,.bmp,.gif",
                      onChange: F,
                    },
                    null,
                    544
                  ),
                  sn(O)
                    ? (Dr(),
                      qr(
                        "label",
                        {
                          key: 1,
                          for: "wl-image-upload",
                          class: "wl-action",
                          title: sn(L).uploadImage,
                        },
                        [el(sn(io))],
                        8,
                        va
                      ))
                    : rl("v-if", !0),
                  Yr(
                    "button",
                    {
                      type: "button",
                      class: V(["wl-action", { active: w.value }]),
                      title: sn(L).preview,
                      onClick: n[3] || (n[3] = (e) => (w.value = !w.value)),
                    },
                    [el(sn(oo))],
                    10,
                    ya
                  ),
                ]),
                Yr("div", ba, [
                  Yr("div", wa, [
                    nl(q(x.value) + " ", 1),
                    sn(l).wordLimit
                      ? (Dr(),
                        qr("span", ka, [
                          nl("  /  "),
                          Yr(
                            "span",
                            {
                              class: V({ illegal: !S.value }),
                              textContent: q($.value),
                            },
                            null,
                            10,
                            xa
                          ),
                        ]))
                      : rl("v-if", !0),
                    nl("  " + q(sn(L).word), 1),
                  ]),
                  "disable" === sn(l).login || sn(z)
                    ? rl("v-if", !0)
                    : (Dr(),
                      qr(
                        "button",
                        {
                          key: 0,
                          type: "button",
                          class: "wl-btn",
                          onClick: D,
                          textContent: q(sn(L).login),
                        },
                        null,
                        8,
                        _a
                      )),
                  "force" !== sn(l).login || sn(z)
                    ? (Dr(),
                      qr(
                        "button",
                        {
                          key: 1,
                          type: "submit",
                          class: "primary wl-btn",
                          title: "Cmd|Ctrl + Enter",
                          disabled: E.value,
                          onClick: N,
                        },
                        [
                          E.value
                            ? (Dr(), Zr(sn(ho), { key: 0, size: 16 }))
                            : (Dr(),
                              qr(Ur, { key: 1 }, [nl(q(sn(L).submit), 1)], 64)),
                        ],
                        8,
                        $a
                      ))
                    : rl("v-if", !0),
                ]),
                Yr(
                  "div",
                  {
                    ref_key: "gifPopupRef",
                    ref: f,
                    class: V(["wl-gif-popup", { display: b.value }]),
                  },
                  [
                    Yr(
                      "input",
                      {
                        ref_key: "gifSearchInputRef",
                        ref: g,
                        type: "text",
                        placeholder: sn(L).gifSearchPlaceholder,
                        onInput:
                          n[4] || (n[4] = (...e) => sn(Q) && sn(Q)(...e)),
                      },
                      null,
                      40,
                      Ca
                    ),
                    el(
                      Jo,
                      {
                        items: _.list,
                        "column-width": 200,
                        gap: 6,
                        onInsert: n[5] || (n[5] = (e) => j(e)),
                        onScroll: Z,
                      },
                      null,
                      8,
                      ["items"]
                    ),
                    _.loading
                      ? (Dr(), qr("div", Sa, [el(sn(ho), { size: 30 })]))
                      : rl("v-if", !0),
                  ],
                  2
                ),
                Yr(
                  "div",
                  {
                    ref_key: "emojiPopupRef",
                    ref: d,
                    class: V(["wl-emoji-popup", { display: y.value }]),
                  },
                  [
                    (Dr(!0),
                    qr(
                      Ur,
                      null,
                      or(
                        m.value.tabs,
                        (e, t) => (
                          Dr(),
                          qr(
                            Ur,
                            { key: e.name },
                            [
                              t === v.value
                                ? (Dr(),
                                  qr("div", Ra, [
                                    (Dr(!0),
                                    qr(
                                      Ur,
                                      null,
                                      or(
                                        e.items,
                                        (e) => (
                                          Dr(),
                                          qr(
                                            "button",
                                            {
                                              key: e,
                                              type: "button",
                                              title: e,
                                              onClick: (t) => j(`:${e}:`),
                                            },
                                            [
                                              y.value
                                                ? (Dr(),
                                                  qr(
                                                    "img",
                                                    {
                                                      key: 0,
                                                      class: "wl-emoji",
                                                      src: m.value.map[e],
                                                      alt: e,
                                                      loading: "lazy",
                                                      referrerPolicy:
                                                        "no-referrer",
                                                    },
                                                    null,
                                                    8,
                                                    Ea
                                                  ))
                                                : rl("v-if", !0),
                                            ],
                                            8,
                                            Aa
                                          )
                                        )
                                      ),
                                      128
                                    )),
                                  ]))
                                : rl("v-if", !0),
                            ],
                            64
                          )
                        )
                      ),
                      128
                    )),
                    m.value.tabs.length > 1
                      ? (Dr(),
                        qr("div", Ia, [
                          (Dr(!0),
                          qr(
                            Ur,
                            null,
                            or(
                              m.value.tabs,
                              (e, t) => (
                                Dr(),
                                qr(
                                  "button",
                                  {
                                    key: e.name,
                                    type: "button",
                                    class: V([
                                      "wl-tab",
                                      { active: v.value === t },
                                    ]),
                                    onClick: (e) => (v.value = t),
                                  },
                                  [
                                    Yr(
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
                                      za
                                    ),
                                  ],
                                  10,
                                  La
                                )
                              )
                            ),
                            128
                          )),
                        ]))
                      : rl("v-if", !0),
                  ],
                  2
                ),
              ]),
            ]),
            e.replyId || e.edit?.objectId
              ? (Dr(),
                qr(
                  "button",
                  {
                    key: 1,
                    type: "button",
                    class: "wl-close",
                    title: sn(L).cancelReply,
                    onClick:
                      n[6] ||
                      (n[6] = (n) =>
                        t.$emit(e.replyId ? "cancelReply" : "cancelEdit")),
                  },
                  [el(sn(no), { size: 24 })],
                  8,
                  Oa
                ))
              : rl("v-if", !0),
          ])
        )
      );
    },
  }),
  Ta = Vo(ja, [["__file", "CommentBox.vue"]]);
const Ua = ["id"],
  Pa = { class: "wl-user", "aria-hidden": "true" },
  Ma = ["src"],
  Fa = { class: "wl-card" },
  Na = { class: "wl-head" },
  Va = ["href"],
  Da = { key: 1, class: "wl-nick" },
  Ha = ["textContent"],
  Ba = ["textContent"],
  Wa = ["textContent"],
  qa = ["textContent"],
  Za = ["textContent"],
  Qa = { class: "wl-comment-actions" },
  Ka = ["title"],
  Ga = ["textContent"],
  Ja = ["title"],
  Xa = { class: "wl-meta", "aria-hidden": "true" },
  Ya = ["data-value", "textContent"],
  ec = ["data-value", "textContent"],
  tc = ["data-value", "textContent"],
  nc = ["innerHTML"],
  rc = { key: 1, class: "wl-admin-actions" },
  lc = { class: "wl-comment-status" },
  ic = ["disabled", "onClick", "textContent"],
  sc = { key: 3, class: "wl-quote" };
var oc = Vo(
  Qn({
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
        r = Dn("config"),
        l = mo(),
        i = Ji(),
        s = Lo(),
        o = bl(() => r.value.locale),
        a = bl(() => {
          const { link: e } = t.comment;
          return e ? (A(e) ? e : `https://${e}`) : "";
        }),
        c = bl(() => l.value.includes(t.comment.objectId)),
        u = bl(() => j(t.comment.insertedAt, i.value, o.value)),
        p = bl(() => "administrator" === s.value.type),
        d = bl(
          () => t.comment.user_id && s.value.objectId === t.comment.user_id
        ),
        h = bl(() => t.comment.objectId === t.reply?.objectId),
        f = bl(() => t.comment.objectId === t.edit?.objectId);
      return (t, r) => {
        const l = lr("CommentCard", !0);
        return (
          Dr(),
          qr(
            "div",
            { id: e.comment.objectId, class: "wl-card-item" },
            [
              Yr("div", Pa, [
                e.comment.avatar
                  ? (Dr(),
                    qr("img", { key: 0, src: e.comment.avatar }, null, 8, Ma))
                  : rl("v-if", !0),
                e.comment.type
                  ? (Dr(), Zr(sn(po), { key: 1 }))
                  : rl("v-if", !0),
              ]),
              Yr("div", Fa, [
                Yr("div", Na, [
                  sn(a)
                    ? (Dr(),
                      qr(
                        "a",
                        {
                          key: 0,
                          class: "wl-nick",
                          href: sn(a),
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        q(e.comment.nick),
                        9,
                        Va
                      ))
                    : (Dr(), qr("span", Da, q(e.comment.nick), 1)),
                  "administrator" === e.comment.type
                    ? (Dr(),
                      qr(
                        "span",
                        {
                          key: 2,
                          class: "wl-badge",
                          textContent: q(sn(o).admin),
                        },
                        null,
                        8,
                        Ha
                      ))
                    : rl("v-if", !0),
                  e.comment.label
                    ? (Dr(),
                      qr(
                        "span",
                        {
                          key: 3,
                          class: "wl-badge",
                          textContent: q(e.comment.label),
                        },
                        null,
                        8,
                        Ba
                      ))
                    : rl("v-if", !0),
                  e.comment.sticky
                    ? (Dr(),
                      qr(
                        "span",
                        {
                          key: 4,
                          class: "wl-badge",
                          textContent: q(sn(o).sticky),
                        },
                        null,
                        8,
                        Wa
                      ))
                    : rl("v-if", !0),
                  void 0 !== e.comment.level && e.comment.level >= 0
                    ? (Dr(),
                      qr(
                        "span",
                        {
                          key: 5,
                          class: V(`wl-badge level${e.comment.level}`),
                          textContent: q(
                            sn(o)[`level${e.comment.level}`] ||
                              `Level ${e.comment.level}`
                          ),
                        },
                        null,
                        10,
                        qa
                      ))
                    : rl("v-if", !0),
                  Yr(
                    "span",
                    { class: "wl-time", textContent: q(sn(u)) },
                    null,
                    8,
                    Za
                  ),
                  Yr("div", Qa, [
                    sn(p) || sn(d)
                      ? (Dr(),
                        qr(
                          "button",
                          {
                            key: 0,
                            type: "button",
                            class: "wl-edit",
                            onClick:
                              r[0] || (r[0] = () => t.$emit("edit", e.comment)),
                          },
                          [el(sn(uo))]
                        ))
                      : rl("v-if", !0),
                    sn(p) || sn(d)
                      ? (Dr(),
                        qr(
                          "button",
                          {
                            key: 1,
                            type: "button",
                            class: "wl-delete",
                            onClick:
                              r[1] ||
                              (r[1] = (n) => t.$emit("delete", e.comment)),
                          },
                          [el(sn(ro))]
                        ))
                      : rl("v-if", !0),
                    Yr(
                      "button",
                      {
                        type: "button",
                        class: "wl-like",
                        title: sn(c) ? sn(o).cancelLike : sn(o).like,
                        onClick:
                          r[2] || (r[2] = (n) => t.$emit("like", e.comment)),
                      },
                      [
                        el(sn(so), { active: sn(c) }, null, 8, ["active"]),
                        "like" in e.comment
                          ? (Dr(),
                            qr(
                              "span",
                              { key: 0, textContent: q(e.comment.like) },
                              null,
                              8,
                              Ga
                            ))
                          : rl("v-if", !0),
                      ],
                      8,
                      Ka
                    ),
                    Yr(
                      "button",
                      {
                        type: "button",
                        class: V(["wl-reply", { active: sn(h) }]),
                        title: sn(h) ? sn(o).cancelReply : sn(o).reply,
                        onClick:
                          r[3] ||
                          (r[3] = (n) =>
                            t.$emit("reply", sn(h) ? null : e.comment)),
                      },
                      [el(sn(co))],
                      10,
                      Ja
                    ),
                  ]),
                ]),
                Yr("div", Xa, [
                  e.comment.addr
                    ? (Dr(),
                      qr(
                        "span",
                        {
                          key: 0,
                          class: "wl-addr",
                          "data-value": e.comment.addr,
                          textContent: q(e.comment.addr),
                        },
                        null,
                        8,
                        Ya
                      ))
                    : rl("v-if", !0),
                  e.comment.browser
                    ? (Dr(),
                      qr(
                        "span",
                        {
                          key: 1,
                          class: "wl-browser",
                          "data-value": e.comment.browser,
                          textContent: q(e.comment.browser),
                        },
                        null,
                        8,
                        ec
                      ))
                    : rl("v-if", !0),
                  e.comment.os
                    ? (Dr(),
                      qr(
                        "span",
                        {
                          key: 2,
                          class: "wl-os",
                          "data-value": e.comment.os,
                          textContent: q(e.comment.os),
                        },
                        null,
                        8,
                        tc
                      ))
                    : rl("v-if", !0),
                ]),
                sn(f)
                  ? rl("v-if", !0)
                  : (Dr(),
                    qr(
                      "div",
                      {
                        key: 0,
                        class: "wl-content",
                        innerHTML: e.comment.comment,
                      },
                      null,
                      8,
                      nc
                    )),
                sn(p) && !sn(f)
                  ? (Dr(),
                    qr("div", rc, [
                      Yr("span", lc, [
                        (Dr(),
                        qr(
                          Ur,
                          null,
                          or(n, (n) =>
                            Yr(
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
                                textContent: q(sn(o)[n]),
                              },
                              null,
                              10,
                              ic
                            )
                          ),
                          64
                        )),
                      ]),
                      sn(p) && !e.comment.rid
                        ? (Dr(),
                          qr(
                            "button",
                            {
                              key: 0,
                              type: "submit",
                              class: "wl-btn wl-sticky",
                              onClick:
                                r[4] ||
                                (r[4] = (n) => t.$emit("sticky", e.comment)),
                            },
                            q(e.comment.sticky ? sn(o).unsticky : sn(o).sticky),
                            1
                          ))
                        : rl("v-if", !0),
                    ]))
                  : rl("v-if", !0),
                sn(h) || sn(f)
                  ? (Dr(),
                    qr(
                      "div",
                      {
                        key: 2,
                        class: V({
                          "wl-reply-wrapper": sn(h),
                          "wl-edit-wrapper": sn(f),
                        }),
                      },
                      [
                        el(
                          Ta,
                          {
                            edit: e.edit,
                            "reply-id": e.reply?.objectId,
                            "reply-user": e.comment.nick,
                            "root-id": e.rootId,
                            onLog: r[5] || (r[5] = (e) => t.$emit("log")),
                            onCancelReply:
                              r[6] || (r[6] = (e) => t.$emit("reply", null)),
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
                  : rl("v-if", !0),
                e.comment.children
                  ? (Dr(),
                    qr("div", sc, [
                      (Dr(!0),
                      qr(
                        Ur,
                        null,
                        or(
                          e.comment.children,
                          (n) => (
                            Dr(),
                            Zr(
                              l,
                              {
                                key: n.objectId,
                                comment: n,
                                reply: e.reply,
                                edit: e.edit,
                                "root-id": e.rootId,
                                onLog: r[9] || (r[9] = (e) => t.$emit("log")),
                                onDelete:
                                  r[10] ||
                                  (r[10] = (e) => t.$emit("delete", e)),
                                onEdit:
                                  r[11] || (r[11] = (e) => t.$emit("edit", e)),
                                onLike:
                                  r[12] || (r[12] = (e) => t.$emit("like", e)),
                                onReply:
                                  r[13] || (r[13] = (e) => t.$emit("reply", e)),
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
                  : rl("v-if", !0),
              ]),
            ],
            8,
            Ua
          )
        );
      };
    },
  }),
  [["__file", "CommentCard.vue"]]
);
const ac = "2.14.9",
  cc = { "data-waline": "" },
  uc = { class: "wl-meta-head" },
  pc = { class: "wl-count" },
  dc = ["textContent"],
  hc = { class: "wl-sort" },
  fc = ["onClick"],
  gc = { class: "wl-cards" },
  mc = { key: 1, class: "wl-operation" },
  vc = ["textContent"],
  yc = { key: 0, class: "wl-loading" },
  bc = ["textContent"],
  wc = { key: 2, class: "wl-operation" },
  kc = ["textContent"],
  xc = { key: 3, class: "wl-power" },
  _c = Yr(
    "a",
    {
      href: "https://github.com/walinejs/waline",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    " Waline ",
    -1
  );
var $c = Qn({
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
      const a = e,
        c = {
          latest: "insertedAt_desc",
          oldest: "insertedAt_asc",
          hottest: "like_desc",
        },
        u = Object.keys(c),
        d = Lo(),
        h = mo(),
        f = tn("loading"),
        g = tn(0),
        m = tn(1),
        v = tn(0),
        y = bl(() =>
          (({
            serverURL: e,
            path: a = location.pathname,
            lang: c = "undefined" == typeof navigator
              ? "en-US"
              : navigator.language,
            locale: u,
            emoji: d = n,
            meta: h = ["nick", "mail", "link"],
            requiredMeta: f = [],
            dark: g = !1,
            pageSize: m = 10,
            wordLimit: v,
            imageUploader: y,
            highlighter: b,
            texRenderer: k,
            copyright: x = !0,
            login: _ = "enable",
            search: $,
            reaction: C,
            recaptchaV3Key: R = "",
            commentSorting: A = "latest",
            ...z
          }) => ({
            serverURL: E(e),
            path: S(a),
            locale: { ...(w[c] || w[r]), ...("object" == typeof u ? u : {}) },
            wordLimit: I(v),
            meta: t(h),
            requiredMeta: t(f),
            imageUploader: L(y, i),
            highlighter: L(b, p),
            texRenderer: L(k, s),
            lang: Object.keys(w).includes(c) ? c : "en-US",
            dark: g,
            emoji: "boolean" == typeof d ? (d ? n : []) : d,
            pageSize: m,
            login: _,
            copyright: x,
            search: !1 !== $ && ("object" == typeof $ ? $ : o(c)),
            recaptchaV3Key: R,
            reaction: Array.isArray(C) ? C : !0 === C ? l : [],
            commentSorting: A,
            ...z,
          }))(a)
        ),
        b = tn(y.value.commentSorting),
        k = tn([]),
        _ = tn(null),
        $ = tn(null),
        R = bl(() => {
          return "string" == typeof (e = y.value.dark)
            ? "auto" === e
              ? `@media(prefers-color-scheme:dark){body${z}}`
              : `${e}${z}`
            : !0 === e
            ? `:root${z}`
            : "";
          var e;
        }),
        A = bl(() => y.value.locale);
      let O;
      Yi(R);
      const j = (e) => {
          const { serverURL: t, path: n, pageSize: r } = y.value,
            l = new AbortController();
          (f.value = "loading"),
            O?.(),
            (({
              serverURL: e,
              lang: t,
              path: n,
              page: r,
              pageSize: l,
              sortBy: i,
              signal: s,
              token: o,
            }) => {
              const a = {};
              return (
                o && (a.Authorization = `Bearer ${o}`),
                fetch(
                  `${e}/comment?path=${encodeURIComponent(
                    n
                  )}&pageSize=${l}&page=${r}&lang=${t}&sortBy=${i}`,
                  { signal: s, headers: a }
                )
                  .then((e) => e.json())
                  .then((e) => x(e, "Get comment data"))
              );
            })({
              serverURL: t,
              lang: y.value.lang,
              path: n,
              pageSize: r,
              sortBy: c[b.value],
              page: e,
              signal: l.signal,
              token: d.value?.token,
            })
              .then((t) => {
                (f.value = "success"),
                  (g.value = t.count),
                  k.value.push(...t.data),
                  (m.value = e),
                  (v.value = t.totalPages);
              })
              .catch((e) => {
                "AbortError" !== e.name &&
                  (console.error(e.message), (f.value = "error"));
              }),
            (O = l.abort.bind(l));
        },
        T = () => j(m.value + 1),
        U = () => {
          (g.value = 0), (k.value = []), j(1);
        },
        P = (e) => {
          _.value = e;
        },
        M = (e) => {
          $.value = e;
        },
        F = (e) => {
          if ($.value) ($.value.comment = e.comment), ($.value.orig = e.orig);
          else if (e.rid) {
            const t = k.value.find(({ objectId: t }) => t === e.rid);
            if (!t) return;
            Array.isArray(t.children) || (t.children = []), t.children.push(e);
          } else k.value.unshift(e);
        },
        N = async ({ comment: e, status: t }) => {
          if (e.status === t) return;
          const { serverURL: n, lang: r } = y.value;
          await C({
            serverURL: n,
            lang: r,
            token: d.value?.token,
            objectId: e.objectId,
            comment: { status: t },
          }),
            (e.status = t);
        },
        D = async (e) => {
          if (e.rid) return;
          const { serverURL: t, lang: n } = y.value;
          await C({
            serverURL: t,
            lang: n,
            token: d.value?.token,
            objectId: e.objectId,
            comment: { sticky: e.sticky ? 0 : 1 },
          }),
            (e.sticky = !e.sticky);
        },
        H = async ({ objectId: e }) => {
          if (!confirm("Are you sure you want to delete this comment?")) return;
          const { serverURL: t, lang: n } = y.value;
          await (({ serverURL: e, lang: t, token: n, objectId: r }) =>
            fetch(`${e}/comment/${r}?lang=${t}`, {
              method: "DELETE",
              headers: { Authorization: `Bearer ${n}` },
            })
              .then((e) => e.json())
              .then((e) => x(e, "Delete comment")))({
            serverURL: t,
            lang: n,
            token: d.value?.token,
            objectId: e,
          }),
            k.value.some((t, n) =>
              t.objectId === e
                ? ((k.value = k.value.filter((e, t) => t !== n)), !0)
                : t.children.some(
                    (r, l) =>
                      r.objectId === e &&
                      ((k.value[n].children = t.children.filter(
                        (e, t) => t !== l
                      )),
                      !0)
                  )
            );
        },
        B = async (e) => {
          const { serverURL: t, lang: n } = y.value,
            { objectId: r } = e,
            l = h.value.includes(r);
          await C({
            serverURL: t,
            lang: n,
            objectId: r,
            token: d.value?.token,
            comment: { like: !l },
          }),
            l
              ? (h.value = h.value.filter((e) => e !== r))
              : ((h.value = [...h.value, r]),
                h.value.length > 50 && (h.value = h.value.slice(-50))),
            (e.like = (e.like || 0) + (l ? -1 : 1));
        };
      return (
        (function (e, t) {
          if (ul) {
            let n = ul.provides;
            const r = ul.parent && ul.parent.provides;
            r === n && (n = ul.provides = Object.create(r)), (n[e] = t);
          }
        })("config", y),
        Xn(() => {
          Wn(
            () => [a.serverURL, a.path],
            () => U(),
            { immediate: !0 }
          );
        }),
        er(() => O?.()),
        (e, t) => (
          Dr(),
          qr("div", cc, [
            el(Do),
            _.value
              ? rl("v-if", !0)
              : (Dr(), Zr(Ta, { key: 0, onLog: U, onSubmit: F })),
            Yr("div", uc, [
              Yr("div", pc, [
                g.value
                  ? (Dr(),
                    qr(
                      "span",
                      { key: 0, class: "wl-num", textContent: q(g.value) },
                      null,
                      8,
                      dc
                    ))
                  : rl("v-if", !0),
                nl(" " + q(sn(A).comment), 1),
              ]),
              Yr("ul", hc, [
                (Dr(!0),
                qr(
                  Ur,
                  null,
                  or(
                    sn(u),
                    (e) => (
                      Dr(),
                      qr(
                        "li",
                        {
                          key: e,
                          class: V([e === b.value ? "active" : ""]),
                          onClick: (t) =>
                            ((e) => {
                              b.value !== e && ((b.value = e), U());
                            })(e),
                        },
                        q(sn(A)[e]),
                        11,
                        fc
                      )
                    )
                  ),
                  128
                )),
              ]),
            ]),
            Yr("div", gc, [
              (Dr(!0),
              qr(
                Ur,
                null,
                or(
                  k.value,
                  (e) => (
                    Dr(),
                    Zr(
                      oc,
                      {
                        key: e.objectId,
                        "root-id": e.objectId,
                        comment: e,
                        reply: _.value,
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
              ? (Dr(),
                qr("div", mc, [
                  Yr(
                    "button",
                    {
                      type: "button",
                      class: "wl-btn",
                      onClick: U,
                      textContent: q(sn(A).refresh),
                    },
                    null,
                    8,
                    vc
                  ),
                ]))
              : (Dr(),
                qr(
                  Ur,
                  { key: 2 },
                  [
                    "loading" === f.value
                      ? (Dr(), qr("div", yc, [el(sn(ho), { size: 30 })]))
                      : k.value.length
                      ? m.value < v.value
                        ? (Dr(),
                          qr("div", wc, [
                            Yr(
                              "button",
                              {
                                type: "button",
                                class: "wl-btn",
                                onClick: T,
                                textContent: q(sn(A).more),
                              },
                              null,
                              8,
                              kc
                            ),
                          ]))
                        : rl("v-if", !0)
                      : (Dr(),
                        qr(
                          "div",
                          {
                            key: 1,
                            class: "wl-empty",
                            textContent: q(sn(A).sofa),
                          },
                          null,
                          8,
                          bc
                        )),
                  ],
                  64
                )),
            sn(y).copyright
              ? (Dr(),
                qr("div", xc, [
                  nl(" Powered by "),
                  _c,
                  nl(" v" + q(sn(ac)), 1),
                ]))
              : rl("v-if", !0),
          ])
        )
      );
    },
  }),
  Cc = Vo($c, [["__file", "WalineComment.vue"]]);
const Sc = (e, t) => {
    t.forEach((t, n) => {
      t.innerText = e[n].toString();
    });
  },
  Rc = ({
    serverURL: e,
    path: t = window.location.pathname,
    selector: n = ".waline-pageview-count",
    update: r = !0,
    lang: l = navigator.language,
  }) => {
    const i = new AbortController(),
      s = Array.from(document.querySelectorAll(n)),
      o = (e) => {
        const n = eo(e);
        return null !== n && t !== n;
      },
      a = (n) =>
        (({ serverURL: e, lang: t, paths: n, signal: r }) =>
          _({
            serverURL: e,
            lang: t,
            paths: n,
            type: ["time"],
            signal: r,
          }).then((e) => (Array.isArray(e) ? e : [e])))({
          serverURL: E(e),
          paths: n.map((e) => eo(e) || t),
          lang: l,
          signal: i.signal,
        })
          .then((e) => Sc(e, n))
          .catch(os);
    if (r) {
      const n = s.filter((e) => !o(e)),
        r = s.filter(o);
      ((c = { serverURL: E(e), path: t, lang: l }),
      $({ ...c, type: "time", action: "inc" })).then((e) =>
        Sc(new Array(n.length).fill(e), n)
      ),
        r.length && a(r);
    } else a(s);
    var c;
    return i.abort.bind(i);
  },
  Ac = ({
    el: e = "#waline",
    path: t = window.location.pathname,
    comment: n = !1,
    pageview: r = !1,
    ...l
  }) => {
    const i = e ? as(e) : null;
    if (e && !i) throw new Error("Option 'el' do not match any domElement!");
    if (!l.serverURL) throw new Error("Option 'serverURL' is missing!");
    const s = Vt({ ...l }),
      o = Vt({ comment: n, pageview: r, path: t }),
      a = i ? ni(() => wl(Cc, { path: o.path, ...s })) : null;
    a && a.mount(i);
    const c = Hn(() => {
        o.comment &&
          to({
            serverURL: s.serverURL,
            path: o.path,
            selector: "string" == typeof o.comment ? o.comment : void 0,
          });
      }),
      u = Hn(() => {
        o.pageview &&
          Rc({
            serverURL: s.serverURL,
            path: o.path,
            selector: "string" == typeof o.pageview ? o.pageview : void 0,
          });
      });
    return {
      el: i,
      update: ({
        comment: e,
        pageview: t,
        path: n = window.location.pathname,
        ...r
      } = {}) => {
        Object.entries(r).forEach(([e, t]) => {
          s[e] = t;
        }),
          (o.path = n),
          void 0 !== e && (o.comment = e),
          void 0 !== t && (o.pageview = t);
      },
      destroy: () => {
        a?.unmount(), c(), u();
      },
    };
  },
  Ec = ({ el: e, serverURL: t, count: n, lang: r = navigator.language }) => {
    const l = Lo(),
      i = as(e),
      s = new AbortController();
    return (({ serverURL: e, lang: t, count: n, signal: r, token: l }) => {
      const i = {};
      return (
        l && (i.Authorization = `Bearer ${l}`),
        fetch(`${e}/comment?type=recent&count=${n}&lang=${t}`, {
          signal: r,
          headers: i,
        }).then((e) => e.json())
      );
    })({
      serverURL: t,
      count: n,
      lang: r,
      signal: s.signal,
      token: l.value?.token,
    }).then((e) =>
      i && e.length
        ? ((i.innerHTML = `<ul class="wl-recent-list">${e
            .map(
              (e) =>
                `<li class="wl-recent-item"><a href="${e.url}">${e.nick}</a>：${e.comment}</li>`
            )
            .join("")}</ul>`),
          {
            comments: e,
            destroy: () => {
              s.abort(), (i.innerHTML = "");
            },
          })
        : { comments: e, destroy: () => s.abort() }
    );
  },
  Ic = ({
    el: e,
    serverURL: t,
    count: n,
    locale: l,
    lang: i = navigator.language,
    mode: s = "list",
  }) => {
    const o = as(e),
      a = new AbortController();
    return (({ serverURL: e, signal: t, pageSize: n, lang: r }) =>
      fetch(`${e}/user?pageSize=${n}&lang=${r}`, { signal: t })
        .then((e) => e.json())
        .then((e) => x(e, "user list"))
        .then((e) => e.data))({
      serverURL: t,
      pageSize: n,
      lang: i,
      signal: a.signal,
    }).then((e) =>
      o && e.length
        ? ((l = { ...(w[i] || w[r]), ...("object" == typeof l ? l : {}) }),
          (o.innerHTML = `<ul class="wl-user-${s}">${e
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
                    l ? l[`level${e.level}`] : `Level ${e.level}`
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
              a.abort(), (o.innerHTML = "");
            },
          })
        : { users: e, destroy: () => a.abort() }
    );
  };
export {
  Ec as RecentComments,
  Ic as UserList,
  to as commentCount,
  w as defaultLocales,
  Ac as init,
  Rc as pageviewCount,
  ac as version,
};
