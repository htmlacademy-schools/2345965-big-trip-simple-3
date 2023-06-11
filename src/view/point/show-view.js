import {createPointShowTemplate} from '../../template/point/show';
import {createElement} from '../../render';

export default class PointShowView {
  getTemplate() {
    return createPointShowTemplate();
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
