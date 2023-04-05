import { each, map } from "lodash";

export default class Page {
  constructor({ element, elements, id }) {
    this.selector = element;
    this.selectorChildren = {
      ...elements,
    };

    this.id = id;
  }

  create() {
    this.element = document.querySelector(this.selector);
    this.elements = {};

    each(this.selectorChildren, (child, key) => {
      if (
        child instanceof window.HTMLElement ||
        child instanceof window.NodeList ||
        Array.isArray(child)
      ) {
        this.elements[key] = child;
      } else {
        this.elements[key] = document.querySelectorAll(child);

        if (this.elements[key].length === 0) {
          this.elements[key] = null;
        } else if (this.elements[key].length === 1) {
          this.elements[key] = document.querySelector(child);
        }
      }
    });
  }

  destroy() {
    this.removeEventListeners();
  }

  onResize() {}
}
