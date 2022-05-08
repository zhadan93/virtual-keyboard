import { createElement } from './Common';

export default class Key {
  constructor(language) {
    this.language = language;
  }

  createKey({ main, fn }) {
    const className = 'key';
    const classNames = fn ? `${className} fn-key` : className;

    const context = main[this.language] || main;

    const element = createElement('div', context, classNames);

    return element;
  }
}
