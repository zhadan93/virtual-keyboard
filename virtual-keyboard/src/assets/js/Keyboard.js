import { createElement, addElement } from './Common';
import Key from './Key';
import keys from './keys';

export default class Keyboard {
  constructor() {
    this.language = 'en';
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
