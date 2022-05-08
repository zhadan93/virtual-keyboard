import { createElement, addElement } from './Common';
import Keyboard from './Keyboard';

export default class Page {
  constructor() {
    this.body = document.body;
    this.textarea = null;
    this.elements = null;
    this.pressKey = null;
    this.pointerPosition = 0;
  }

  renderPage() {
    const head = createElement('head', null, 'head');
    const title = createElement('h1', 'RSS Virtual Keyboard', 'title');
    addElement(title, head);

    const main = createElement('main', null, 'main');
    const subtitle = createElement('h3', 'The virtual keyboard was created in Windows operation system', 'subtitle');
    const hint = createElement('p', 'Switch between English and Russian languages: Shift + Alt', 'hint');
    this.textarea = createElement('textarea', null, 'keyboard__output', [
      ['autocomplete', 'off'],
      ['autocorrect', 'off'],
      ['cols', 140],
      ['placeholder', 'You '],
      ['rows', 10],
      ['spellcheck', 'false'],
    ]);

    const keyBoard = new Keyboard();
    const { keyboardContainer, elements } = keyBoard.renderKeyboard();
    this.elements = elements;

    addElement([subtitle, hint, this.textarea, keyboardContainer], main);
    addElement([head, main], this.body);

    document.addEventListener('keydown', this.handleKeydownEvent);
    document.addEventListener('keyup', this.handleKeyUpEvent);
  }

  handleKeydownEvent = (event) => {
    const { code } = event;

    this.pressKey = this.elements[code];

    if (this.pressKey) {
      event.preventDefault();
      this.textarea.focus();
      this.pressKey.classList.add('active');
    }
  };

  handleKeyUpEvent = () => {
    if (this.pressKey) {
      this.pressKey.classList.remove('active');
    }
  };
}
