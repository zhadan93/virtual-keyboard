import { createElement } from './Common';

export default class Key {
  constructor(language) {
    this.language = language;
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
