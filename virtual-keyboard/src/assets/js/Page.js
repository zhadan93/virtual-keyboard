import { createElement, addElement } from './commonNode';
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
    this.shift = false;
  }

  renderPage() {
    const head = createElement('head', null, 'head');
    const title = createElement('h1', 'RSS Virtual Keyboard', 'title');
    addElement(title, head);

    const main = createElement('main', null, 'main');
    const subtitle = createElement('h3', 'The virtual keyboard was created in Windows operation system', 'subtitle');
    const hint = createElement('p', 'Switch between English and Russian languages: Ctrl + Alt', 'hint');
    this.textarea = createElement('textarea', null, 'keyboard__output', [
      ['autocomplete', 'off'],
      ['autocorrect', 'off'],
      ['cols', 140],
      ['placeholder', 'Start typing…'],
      ['rows', 10],
      ['spellcheck', 'false'],
    ]);

    const keyBoard = new Keyboard(this.language, this.textarea);
    const { keyboardContainer, elements } = keyBoard.renderKeyboard();
    this.elements = elements;

    addElement([subtitle, hint, this.textarea, keyboardContainer], main);
    addElement([head, main], this.body);

    window.addEventListener('beforeunload', () => {
      setLocalStorage('keyboardLanguage', this.language);
    });

    document.addEventListener('keydown', this.handleDownEvent);
    document.addEventListener('keyup', this.handleUpEvent);
    // document.addEventListener('mousedown', this.handleMouseEvent);
    // document.addEventListener('mouseup', this.handleMouseEvent);
  }

  /* handleMouseEvent = (event) => {
    const { target, type } = event;

    if (target.closest('.key')) {
      const keyCode = this.findActiveKey(target);
      const mouseEvent = {
        code: keyCode,
        type,
        mouseEvent: event,
      };

      if (type === 'mousedown') {
        target.addEventListener('mouseout', this.resetKeyState);
        this.handleDownEvent(mouseEvent);
      } else if (type === 'mouseup') {
        this.handleUpEvent(mouseEvent);
      }
    }
  };

  resetKeyState = (event) => {
    const { target, type } = event;
    const keyCode = this.findActiveKey(target);

    if (!/Shift/.test(keyCode)) {
       const mouseEvent = {
        code: keyCode,
        type,
      };
    } else if (/Shift/.test(keyCode) && this.capsLock) {
      this.capsLock = !this.capsLock;
      this.changeLetterCase(false);
    }

    target.removeEventListener('mouseout', this.resetKeyState);
  }; */

  handleDownEvent = (event) => {
    const { code, type, mouseEvent } = event;
    const isPresent = this.elements[code];

    if (isPresent && !event.repeat) {
      if (/key/.test(type)) {
        event.preventDefault();
      } else if (/mouse/.test(type)) {
        mouseEvent.preventDefault();
      }

      this.textarea.focus();
      this.pressedKey[code] = isPresent;
      const key = isPresent.textContent;

      if (code === 'CapsLock') {
        isPresent.classList.toggle('active');
        let stateLetterCase = null;

        if (this.shift) {
          stateLetterCase = this.capsLock || false;
        } else {
          stateLetterCase = !this.capsLock;
        }

        this.capsLock = !this.capsLock;
        this.changeLetterCase(stateLetterCase);
        return;
      }

      if ((/Alt/.test(code) && (this.pressedKey.ControlLeft || this.pressedKey.ControlRight)) || (/Control/i.test(code) && (this.pressedKey.AltLeft || this.pressedKey.AltRight))) {
        this.language = this.language === 'en' ? 'ru' : 'en';
        this.changeLanguage();
      } else if (/Shift/.test(code)) {
        this.shift = !this.shift;
        this.addShiftText();
      } else {
        this.outputResultToTextarea(code, key);
      }

      isPresent.classList.add('active');
    }
  };

  handleUpEvent = (event) => {
    const { code } = event;

    const pressedKey = this.pressedKey[code];

    if (code !== 'CapsLock' && pressedKey) {
      pressedKey.classList.remove('active');
    }

    if (/Shift/.test(code)) {
      this.shift = !this.shift;
      this.removeShiftText();
    }

    delete this.pressedKey[code];
  };

  changeLetterCase = (isUpperCase) => {
    const elements = Object.entries(this.elements);
    const regExp = this.language === 'en' ? /Key/ : /Key|Backquote|Bracket|Semicolon|Quote|Comma|Period/;

    let letters = elements.filter(([key]) => regExp.test(key));
    letters = letters.map((letter) => letter[1]);

    letters.forEach((letter) => {
      const val = letter;

      if (isUpperCase) {
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

    if (this.capsLock) {
      this.changeLetterCase(true);
    }
  };

  addShiftText = () => {
    keys.forEach(({ shift, code }) => {
      if (shift) {
        this.elements[code].innerHTML = shift[this.language] || shift;
      }
    });

    if (this.capsLock) {
      this.changeLetterCase(false);
    }
  };

  removeShiftText = () => {
    keys.forEach(({ main, shift, code }) => {
      if (shift) {
        this.elements[code].innerHTML = main[this.language] || main;
      }
    });

    if (this.capsLock) {
      this.changeLetterCase(true);
    }
  };

  outputResultToTextarea = (eventCode, eventKey) => {
    const { value, selectionStart } = this.textarea;

    const pointerPosition = selectionStart;
    const textToLeftOfPointer = value.slice(0, pointerPosition);
    const textToRightOfPointer = value.slice(pointerPosition);
    const reg = eventCode.match(/(Key[A-Za-z])|(Digit[0-9])|[a-z]*quote|Minus|Equal|Bracket[a-z]*|[a-z]*slash|Semicolon|Comma|Period|Space|ArrowUp|ArrowDown/i);

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

      case 'Delete':
        position += 0;
        break;

      case 'ArrowUp':
      case 'ArrowDown':
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

  findActiveKey = (activeKey) => {
    const elements = Object.entries(this.elements);
    const [keyCode] = elements.find(([, value]) => value === activeKey);

    return keyCode;
  };
}
