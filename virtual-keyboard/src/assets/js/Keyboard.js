import { createElement, addElement } from './Common';
import Key from './Key';
import keys from './keys';

export default class Keyboard {
  constructor() {
    this.language = 'en';
    this.elements = [];
  }

  renderKeyboard() {
    const keyData = new Key(this.language);

    keys.forEach((key) => this.elements.push(keyData.createKey(key)));

    const keyboard = createElement('div', null, 'keyboard');

    addElement(this.elements, keyboard);

    return keyboard;
  }
}
