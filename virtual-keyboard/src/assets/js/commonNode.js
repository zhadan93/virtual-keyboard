export function createElement(tag, content, classNames, attributes) {
  let element = null;

  try {
    element = document.createElement(tag);
  } catch (err) {
    throw new Error('Unable to create HTMLElement! Invalid tag name.');
  }

  if (content) {
    element.innerHTML = content;
  }

  if (classNames) {
    const classes = Array.isArray(classNames) ? classNames : classNames.split(' ');

    element.classList.add(...classes);
  }

  if (attributes) {
    attributes.forEach(([name, value]) => element.setAttribute(name, value));
  }

  return element;
}

export function addElement(elements, container) {
  try {
    if (!elements || typeof (elements) !== 'object') {
      throw new Error('You\'re trying to insert invalid element datatype.');
    }

    if (!container || typeof (container) !== 'object') {
      throw new Error('You\'re trying to insert invalid container datatype.');
    }

    if (Array.isArray(elements)) {
      elements.forEach((element) => container.append(element));
    } else {
      container.append(elements);
    }
  } catch (err) {
    throw new Error(err.message);
  }
}
