/**
 * 获取系统语言
 * @param[storageName]: string localStorage 存储语言的关键字, 默认 'umi_locale'
 * @param[defaultLang]: string 系统默认语言
 * description： 语言读取优先级： isBrowser > localStorage > navigator.language
 * */
export declare const getLanguage: (storageName: string, defaultLang: string) => string;
export declare type LocaleType = {
    [propName: string]: {
        [propName: string]: string;
    };
};
/**
 * 根据系统语言获取当前语言包
 * @param[language]: string 当前系统语言
 * @param[storageName]: localStorage 储存语言的关键字
 * @param[locales]: {} 语言包
 * */
export declare type GetLocaleObjectType = {
    language?: string;
    storageName?: string;
    locales: LocaleType;
};
export declare const getLocaleObject: (options: GetLocaleObjectType) => Record<string, string>;
