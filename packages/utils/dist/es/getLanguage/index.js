import isBrowser from "../isBrowser";
/**
 * 获取系统语言
 * @param[storageName]: string localStorage 存储语言的关键字, 默认 'umi_locale'
 * @param[defaultLang]: string 系统默认语言
 * description： 语言读取优先级： isBrowser > localStorage > navigator.language
 * */

export var getLanguage = function getLanguage(storageName, defaultLang) {
  // support ssr
  if (!isBrowser()) return defaultLang;
  var lang = window.localStorage.getItem(storageName);
  return lang || navigator.language;
};
export var getLocaleObject = function getLocaleObject(options) {
  var defaultLang = 'zh-CN';
  var defaultStorageName = 'umi_locale';

  var _ref = options || {},
      language = _ref.language,
      storageName = _ref.storageName,
      locales = _ref.locales;

  if (language) {
    // @ts-ignore
    return locales[language] || locales[defaultLang];
  }

  var storageLang = getLanguage(storageName || defaultStorageName, defaultLang); // @ts-ignore

  return locales[storageLang] || locales[defaultLang];
};