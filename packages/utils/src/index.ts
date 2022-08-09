/** Hooks */
export { default as isBrowser } from './isBrowser';
<<<<<<< HEAD
export type { LocaleType, GetLocaleObjectType } from './getLanguage';
export { getLanguage, getLocaleObject } from './getLanguage';

export const getName = (name: string) => {
  console.log('getName')
=======
export { getLocaleObject } from './getLanguage';

export const getName = (name: string) => {
  console.log(`name is: ${name}`)
>>>>>>> 021635d54c863f1756e15adda30698edbdd1c68e
}
