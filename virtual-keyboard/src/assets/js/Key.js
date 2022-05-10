import { createElement } from './commonNode';

export default class Key {
  constructor(lang) {
    this.language = lang;
    this.key = null;
  }

  createKey({ main, fn, code }) {
    const className = 'key';
    let classNames = fn ? `${className} fn-key` : className;

    if (!/Key|Digit/.test(code)) {
      const letters = code.split('');

      letters[0] = letters[0].toLowerCase();

      const indexUpperCaseLetter = code.search(/[a-z][A-Z].*$/);

      if (indexUpperCaseLetter !== -1) {
        letters[indexUpperCaseLetter + 1] = `-${letters[indexUpperCaseLetter + 1].toLowerCase()}`;
      }

      classNames += ` ${letters.join('')}`;
    }

    const context = main[this.language] || main;

    this.key = createElement('div', context, classNames);

    return this.key;
  }
}
