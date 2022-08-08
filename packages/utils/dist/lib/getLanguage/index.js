var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/getLanguage/index.ts
var getLanguage_exports = {};
__export(getLanguage_exports, {
  getLanguage: () => getLanguage,
  getLocaleObject: () => getLocaleObject
});
module.exports = __toCommonJS(getLanguage_exports);
var import_isBrowser = __toESM(require("../isBrowser"));
var getLanguage = (storageName, defaultLang) => {
  if (!(0, import_isBrowser.default)())
    return defaultLang;
  const lang = window.localStorage.getItem(storageName);
  return lang || navigator.language;
};
var getLocaleObject = (options) => {
  const defaultLang = "zh-CN";
  const defaultStorageName = "umi_locale";
  const { language, storageName, locales } = options || {};
  if (language) {
    return locales[language] || locales[defaultLang];
  }
  const storageLang = getLanguage(storageName || defaultStorageName, defaultLang);
  return locales[storageLang] || locales[defaultLang];
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getLanguage,
  getLocaleObject
});
