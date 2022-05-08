import { createElement, addElement } from './Common';
import Keyboard from './Keyboard';

export default class Page {
  constructor() {
    this.body = document.body;
    this.elements = [];
  }

  renderPage() {
    const head = createElement('head', null, 'head');
    const title = createElement('h1', 'RSS Virtual Keyboard', 'title');
    addElement(title, head);

    const main = createElement('main', null, 'main');
    const subtitle = createElement('h3', 'The virtual keyboard was created in Windows operation system', 'subtitle');
    const hint = createElement('p', 'Switch between English and Russian languages: Shift + Alt', 'hint');
    const textarea = createElement('textarea', null, 'keyboard__output', [
      ['autocomplete', 'off'],
      ['autocorrect', 'off'],
      ['cols', 140],
      ['placeholder', 'You '],
      ['rows', 10],
      ['spellcheck', 'false'],
    ]);
    this.elements.push(textarea);

    const keyBoard = new Keyboard();
    const keys = keyBoard.renderKeyboard();

    addElement([subtitle, hint, textarea, keys], main);
    addElement([head, main], this.body);
  }
}
