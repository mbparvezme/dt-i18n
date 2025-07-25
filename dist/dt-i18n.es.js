function i(t, e) {
  return e.replace(/YYYY/g, t.getFullYear().toString()).replace(/MM/g, String(t.getMonth() + 1).padStart(2, "0")).replace(/DD/g, String(t.getDate()).padStart(2, "0"));
}
function c(t, e, r = !0) {
  let n = t.getHours();
  const o = String(t.getMinutes()).padStart(2, "0"), l = String(t.getSeconds()).padStart(2, "0"), s = n >= 12 ? "PM" : "AM";
  return r || (n = n % 12 || 12), e.replace(/HH/g, String(n).padStart(2, "0")).replace(/hh/g, String(n).padStart(2, "0")).replace(/mm/g, o).replace(/MM/g, o).replace(/ss/g, l).replace(/SS/g, l).replace(/a/g, s.toLowerCase()).replace(/A/g, s);
}
const b = {
  numbers: ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"],
  months: [
    "جنوري",
    "فبروري",
    "مارچ",
    "اپریل",
    "می",
    "جون",
    "جولای",
    "اګست",
    "سپتمبر",
    "اکتوبر",
    "نومبر",
    "دسمبر"
  ],
  weekdays: ["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"],
  localizeNumber(t) {
    return String(t).replace(/\d/g, (e) => this.numbers[+e]);
  }
}, g = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: b
}, Symbol.toStringTag, { value: "Module" })), d = {
  numbers: ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"],
  months: [
    "जनवरी",
    "फरवरी",
    "मार्च",
    "अप्रैल",
    "मई",
    "जून",
    "जुलाई",
    "अगस्त",
    "सितंबर",
    "अक्टूबर",
    "नवंबर",
    "दिसंबर"
  ],
  weekdays: ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"],
  localizeNumber(t) {
    return String(t).replace(/\d/g, (e) => this.numbers[+e]);
  }
}, m = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: d
}, Symbol.toStringTag, { value: "Module" })), p = {
  numbers: ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"],
  months: [
    "জানুয়ারি",
    "ফেব্রুয়ারি",
    "মার্চ",
    "এপ্রিল",
    "মে",
    "জুন",
    "জুলাই",
    "আগস্ট",
    "সেপ্টেম্বর",
    "অক্টোবর",
    "নভেম্বর",
    "ডিসেম্বর"
  ],
  weekdays: ["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"],
  localizeNumber(t) {
    return String(t).replace(/\d/g, (e) => this.numbers[+e]);
  }
}, S = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: p
}, Symbol.toStringTag, { value: "Module" })), f = {
  numbers: ["༠", "༡", "༢", "༣", "༤", "༥", "༦", "༧", "༨", "༩"],
  months: [
    "ཟླ་དང་པོ",
    "ཟླ་གཉིས་པ",
    "ཟླ་གསུམ་པ",
    "ཟླ་བཞི་པ",
    "ཟླ་ལྔ་པ",
    "ཟླ་དྲུག་པ",
    "ཟླ་བདུན་པ",
    "ཟླ་བརྒྱད་པ",
    "ཟླ་དགུ་པ",
    "ཟླ་བཅུ་པ",
    "ཟླ་བཅུ་གཅིག་པ",
    "ཟླ་བཅུ་གཉིས་པ"
  ],
  weekdays: ["གཟའ་ཉི་མ་", "གཟའ་ཟླ་བ་", "གཟའ་མིག་དམར་", "གཟའ་ཧཱུར་", "གཟའ་ཕུར་བུ་", "གཟའ་སངས་", "གཟའ་ཉི་མ་སྔ་པོ་"],
  localizeNumber(t) {
    return String(t).replace(/\d/g, (e) => this.numbers[+e]);
  }
}, h = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: f
}, Symbol.toStringTag, { value: "Module" })), y = {
  numbers: ["૦", "૧", "૨", "૩", "૪", "૫", "૬", "૭", "૮", "૯"],
  months: [
    "જાન્યુઆરી",
    "ફેબ્રુઆરી",
    "માર્ચ",
    "એપ્રિલ",
    "મે",
    "જૂન",
    "જુલાઇ",
    "ઑગસ્ટ",
    "સપ્ટેમ્બર",
    "ઓક્ટોબર",
    "નવેમ્બર",
    "ડિસેમ્બર"
  ],
  weekdays: ["રવિવાર", "સોમવાર", "મંગળવાર", "બુધવાર", "ગુરુવાર", "શુક્રવાર", "શનિવાર"],
  localizeNumber(t) {
    return String(t).replace(/\d/g, (e) => this.numbers[+e]);
  }
}, v = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: y
}, Symbol.toStringTag, { value: "Module" })), j = {
  numbers: ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"],
  months: [
    "जनवरी",
    "फ़रवरी",
    "मार्च",
    "अप्रैल",
    "मई",
    "जून",
    "जुलाई",
    "अगस्त",
    "सितंबर",
    "अक्टूबर",
    "नवंबर",
    "दिसंबर"
  ],
  weekdays: ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"],
  localizeNumber(t) {
    return String(t).replace(/\d/g, (e) => this.numbers[+e]);
  }
}, z = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: j
}, Symbol.toStringTag, { value: "Module" })), O = {
  numbers: ["෦", "෧", "෨", "෩", "෪", "෫", "෬", "෭", "෮", "෯"],
  months: [
    "ජනවාරි",
    "පෙබරවාරි",
    "මාර්තු",
    "අප්‍රේල්",
    "මැයි",
    "ජූන්",
    "ජූලි",
    "අගෝස්තු",
    "සැප්තැම්බර්",
    "ඔක්තෝබර්",
    "නොවැම්බර්",
    "දෙසැම්බර්"
  ],
  weekdays: ["ඉරිදා", "සඳුදා", "අඟහරුවාදා", "බදාදා", "බ්‍රහස්පතින්දා", "සිකුරාදා", "සෙනසුරාදා"],
  localizeNumber(t) {
    return String(t).replace(/\d/g, (e) => this.numbers[+e]);
  }
}, M = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: O
}, Symbol.toStringTag, { value: "Module" })), k = {
  numbers: ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"],
  months: [
    "ޖަނަވަރީ",
    "ފެބްރުއަރީ",
    "މާރޗް",
    "އެޕްރީލް",
    "މޭ",
    "ޖޫން",
    "ޖުލައި",
    "އޯގަސްޓް",
    "ސެޕްޓެމްބަރ",
    "އޮކްޓޯބަރ",
    "ނޮވެމްބަރ",
    "ޑިސެމްބަރ"
  ],
  weekdays: ["އާދީއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރަސްފަތި", "ހުކުރު", "ހޮނިހިރު"],
  localizeNumber(t) {
    return String(t).replace(/\d/g, (e) => this.numbers[+e]);
  }
}, w = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: k
}, Symbol.toStringTag, { value: "Module" })), T = {
  numbers: ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"],
  months: [
    "जनवरी",
    "फेब्रुअरी",
    "मार्च",
    "अप्रिल",
    "मे",
    "जुन",
    "जुलाई",
    "अगस्ट",
    "सेप्टेम्बर",
    "अक्टोबर",
    "नोभेम्बर",
    "डिसेम्बर"
  ],
  weekdays: ["आइतवार", "सोमवार", "मंगलवार", "बुधवार", "बिहीवार", "शुक्रवार", "शनिवार"],
  localizeNumber(t) {
    return String(t).replace(/\d/g, (e) => this.numbers[+e]);
  }
}, N = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: T
}, Symbol.toStringTag, { value: "Module" })), P = {
  numbers: ["੦", "੧", "੨", "੩", "੪", "੫", "੬", "੭", "੮", "੯"],
  months: [
    "ਜਨਵਰੀ",
    "ਫ਼ਰਵਰੀ",
    "ਮਾਰਚ",
    "ਅਪ੍ਰੈਲ",
    "ਮਈ",
    "ਜੂਨ",
    "ਜੁਲਾਈ",
    "ਅਗਸਤ",
    "ਸਤੰਬਰ",
    "ਅਕਤੂਬਰ",
    "ਨਵੰਬਰ",
    "ਦਸੰਬਰ"
  ],
  weekdays: ["ਐਤਵਾਰ", "ਸੋਮਵਾਰ", "ਮੰਗਲਵਾਰ", "ਬੁਧਵਾਰ", "ਵੀਰਵਾਰ", "ਸ਼ੁੱਕਰਵਾਰ", "ਸ਼ਨਿੱਚਰਵਾਰ"],
  localizeNumber(t) {
    return String(t).replace(/\d/g, (e) => this.numbers[+e]);
  }
}, D = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: P
}, Symbol.toStringTag, { value: "Module" })), Y = {
  numbers: ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"],
  months: [
    "جنوری",
    "فروری",
    "مارچ",
    "اپریل",
    "مئی",
    "جون",
    "جولائی",
    "اگست",
    "ستمبر",
    "اکتوبر",
    "نومبر",
    "دسمبر"
  ],
  weekdays: ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"],
  localizeNumber(t) {
    return String(t).replace(/\d/g, (e) => this.numbers[+e]);
  }
}, H = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Y
}, Symbol.toStringTag, { value: "Module" })), x = {
  numbers: ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"],
  months: [
    "جنوري",
    "فيبروري",
    "مارچ",
    "اپريل",
    "مئي",
    "جون",
    "جولاءِ",
    "آگسٽ",
    "سيپٽمبر",
    "آڪٽوبر",
    "نومبر",
    "ڊسمبر"
  ],
  weekdays: ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"],
  localizeNumber(t) {
    return String(t).replace(/\d/g, (e) => this.numbers[+e]);
  }
}, A = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: x
}, Symbol.toStringTag, { value: "Module" })), C = {
  numbers: ["௦", "௧", "௨", "௩", "௪", "௫", "௬", "௭", "௮", "௯"],
  months: [
    "ஜனவரி",
    "பிப்ரவரி",
    "மார்ச்",
    "ஏப்ரல்",
    "மே",
    "ஜூன்",
    "ஜூலை",
    "ஆகஸ்ட்",
    "செப்டம்பர்",
    "அக்டோபர்",
    "நவம்பர்",
    "டிசம்பர்"
  ],
  weekdays: ["ஞாயிறு", "திங்கள்", "செவ்வாய்", "புதன்", "வியாழன்", "வெள்ளி", "சனி"],
  localizeNumber(t) {
    return String(t).replace(/\d/g, (e) => this.numbers[+e]);
  }
}, F = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: C
}, Symbol.toStringTag, { value: "Module" })), u = /* @__PURE__ */ Object.assign({ "./af.ts": g, "./bho.ts": m, "./bn.ts": S, "./bt.ts": h, "./gu.ts": v, "./hi.ts": z, "./lk.ts": M, "./mv.ts": w, "./np.ts": N, "./pa.ts": D, "./pk.ts": H, "./sd.ts": A, "./ta.ts": F }), a = {};
for (const t in u) {
  const e = t.match(/\.\/(.*)\.ts$/)?.[1];
  e && e !== "index" && (a[e] = u[t].default);
}
class _ {
  date;
  result = "";
  lang = "en";
  constructor(e) {
    this.date = new Date(e ?? Date.now());
  }
  formatDate(e) {
    return this.result = i(this.date, e), this;
  }
  formatTime(e, r = !0) {
    return this.result = c(this.date, e, r), this;
  }
  translate(e) {
    this.lang = e;
    const r = a[e];
    return r && (this.result = r.localizeNumber(this.result)), this;
  }
  value() {
    return this.result;
  }
}
const L = new _();
L.use = function(t) {
  return new _(t);
};
export {
  _ as DateUtils,
  L as default
};
