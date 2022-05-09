import { createElement, addElement } from './common';
import Key from './Key';
import keys from './keys';

export default class Keyboard {
  constructor(lang) {
    this.language = lang;
    this.elements = {};
  }

  renderKeyboard() {
    const keyData = new Key(this.language);

    keys.forEach((key) => {
      this.elements[key.code] = keyData.createKey(key);
    });

    const keyboardContainer = createElement('div', null, 'keyboard');

    addElement(Object.values(this.elements), keyboardContainer);

    return {
      keyboardContainer,
      elements: this.elements,
    };
  }
}
