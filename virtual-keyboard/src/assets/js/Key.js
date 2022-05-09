import { createElement } from './common';

export default class Key {
  constructor(lang) {
    this.language = lang;
    this.key = null;
  }

  createKey({ main, fn }) {
    const className = 'key';
    const classNames = fn ? `${className} fn-key` : className;

    const context = main[this.language] || main;

    this.key = createElement('div', context, classNames);

    return this.key;
  }
}
