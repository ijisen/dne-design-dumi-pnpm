import isBrowser from '../isBrowser'

/**
 * 获取系统语言
 * @param[storageName]: string localStorage 存储语言的关键字, 默认 'umi_locale'
 * @param[defaultLang]: string 系统默认语言
 * description： 语言读取优先级： isBrowser > localStorage > navigator.language
 * */
export const getLanguage = (storageName: string, defaultLang: string): string => {

  // support ssr
  if (!isBrowser()) return defaultLang;

  const lang = window.localStorage.getItem(storageName);
  return lang || navigator.language;
};


export type LocaleType = {
  [propName: string]: { [propName: string]: string }
}


/**
 * 根据系统语言获取当前语言包
 * @param[language]: string 当前系统语言
 * @param[storageName]: localStorage 储存语言的关键字
 * @param[locales]: {} 语言包
 * */
export type GetLocaleObjectType = {
<<<<<<< HEAD
  language?: LocaleType;
=======
  language?: string;
>>>>>>> 021635d54c863f1756e15adda30698edbdd1c68e
  storageName?: string;
  locales: LocaleType;
}
export const getLocaleObject = (options: GetLocaleObjectType): Record<string, string> => {
  const defaultLang = 'zh-CN'
  const defaultStorageName = 'umi_locale'
  const {language, storageName, locales} = options || {};
  if (language) {
    // @ts-ignore
    return locales[language] || locales[defaultLang];
  }
  const storageLang = getLanguage(storageName || defaultStorageName, defaultLang)
  // @ts-ignore
  return locales[storageLang] || locales[defaultLang];
};


