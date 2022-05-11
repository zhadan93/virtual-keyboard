import '../css/style.css';
import { getLocalStorage } from './localStorage';
import Page from './Page';

const lang = getLocalStorage('keyboardLanguage', 'en');

const page = new Page(lang);
page.renderPage();
