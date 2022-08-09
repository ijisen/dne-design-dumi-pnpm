/** Hooks */
export { default as isBrowser } from './isBrowser';
export type { LocaleType, GetLocaleObjectType } from './getLanguage';
export { getLanguage, getLocaleObject } from './getLanguage';

export const getName = (name: string) => {
  console.log('getName')
}
