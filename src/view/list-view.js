import { createElement } from '../render.js';
import {createTripListTemplate} from '../template/list';

export default class ListView {
  getTemplate() {
    return createTripListTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
