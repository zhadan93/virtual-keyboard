import { createElement, addElement } from './commonNode';
import Key from './Key';
import keys from './keys';

export default class Keyboard {
  constructor(lang, textarea) {
    this.language = lang;
    this.elements = {};
    this.textarea = textarea;
  }

  renderKeyboard() {
    keys.forEach((key) => {
      const keyInit = new Key(this.language);

      this.elements[key.code] = keyInit.createKey(key);
    });

    const keyboardContainer = createElement('div', null, 'keyboard');

    addElement(Object.values(this.elements), keyboardContainer);

    return {
      keyboardContainer,
      elements: this.elements,
    };
  }
}
