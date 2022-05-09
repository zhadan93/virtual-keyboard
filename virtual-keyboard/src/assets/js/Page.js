import { createElement, addElement } from './common';
import { setLocalStorage } from './localStorage';
import Keyboard from './Keyboard';
import keys from './keys';

export default class Page {
  constructor(lang) {
    this.language = lang;
    this.body = document.body;
    this.textarea = null;
    this.elements = null;
    this.pressedKey = {};
    this.capsLock = false;
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

    const keyBoard = new Keyboard(this.language);
    const { keyboardContainer, elements } = keyBoard.renderKeyboard();
    this.elements = elements;

    addElement([subtitle, hint, this.textarea, keyboardContainer], main);
    addElement([head, main], this.body);

    window.addEventListener('beforeunload', () => {
      setLocalStorage('keyboardLanguage', this.language);
    });

    document.addEventListener('keydown', this.handleKeydownEvent);
    document.addEventListener('keyup', this.handleKeyUpEvent);
  }

  handleKeydownEvent = (event) => {
    const { code } = event;

    const isPresent = this.elements[code];

    if (isPresent) {
      this.pressedKey[code] = isPresent;
      const key = isPresent.innerHTML;

      event.preventDefault();
      this.textarea.focus();

      if (code === 'CapsLock') {
        this.capsLock = !this.capsLock;
        isPresent.classList.toggle('active');
        this.changeLetterCase();
        return;
      }

      if (/Alt[a-z]*/i.test(code) && (this.pressedKey.ShiftLeft || this.pressedKey.ShiftRight)) {
        this.language = this.language === 'en' ? 'ru' : 'en';
        this.changeLanguage();
        isPresent.classList.add('active');
        return;
      }

      isPresent.classList.add('active');
      this.outputResultToTextarea(code, key);
    }
  };

  handleKeyUpEvent = (event) => {
    const { code } = event;

    if (code !== 'CapsLock') {
      this.pressedKey[code].classList.remove('active');
    }

    delete this.pressedKey[code];
  };

  changeLetterCase = () => {
    const elements = Object.entries(this.elements);
    let letters = elements.filter(([key]) => /Key[A-Z]/.test(key));
    letters = letters.map((letter) => letter[1]);

    letters.forEach((letter) => {
      const val = letter;

      if (this.capsLock) {
        val.innerHTML = val.innerHTML.toUpperCase();
      } else {
        val.innerHTML = val.innerHTML.toLowerCase();
      }
    });
  };

  changeLanguage = () => {
    keys.forEach(({ main, code }) => {
      if (main[this.language]) {
        this.elements[code].innerHTML = main[this.language];
      }
    });
  };

  outputResultToTextarea = (eventCode, eventKey) => {
    const { value, selectionStart } = this.textarea;

    const pointerPosition = selectionStart;
    const textToLeftOfPointer = value.slice(0, pointerPosition);
    const textToRightOfPointer = value.slice(pointerPosition);
    const reg = eventCode.match(/(Key[A-Za-z])|(Digit[0-9])|[a-z]*quote|Minus|Equal|Bracket[a-z]*|[a-z]*slash|Semicolon|Comma|Period|Space/i);

    switch (eventCode) {
      case 'Backspace':
        this.textarea.value = `${textToLeftOfPointer.slice(0, -1)}${textToRightOfPointer}`;
        break;

      case 'Tab':
        this.textarea.value = `${textToLeftOfPointer}\t${textToRightOfPointer}`;
        break;

      case 'Enter':
        this.textarea.value = `${textToLeftOfPointer}\n${textToRightOfPointer}`;
        break;

      case 'Delete':
        this.textarea.value = `${textToLeftOfPointer}${textToRightOfPointer.slice(1)}`;
        break;

      case (reg ? reg[0] : null):
        this.textarea.value = `${textToLeftOfPointer}${eventKey}${textToRightOfPointer}`;
        break;

      default:
        this.textarea.value = `${textToLeftOfPointer}${textToRightOfPointer}`;
        break;
    }

    this.movePointer(eventCode, pointerPosition);
  };

  movePointer = (eventCode, pointerPosition) => {
    let position = pointerPosition;

    switch (eventCode) {
      case 'Backspace':
      case 'ArrowLeft':
        position -= position > 0 ? 1 : 0;
        break;

      case 'ArrowUp':
        console.log();
        break;

      case 'ArrowDown':
        console.log();
        break;

      case 'Delete':
        position += 0;
        break;

      case 'Tab':
      case 'Enter':
      case 'ArrowRight':
      case 'Space':
      default:
        position += 1;
        break;
    }

    this.textarea.setSelectionRange(position, position);
  };
}
