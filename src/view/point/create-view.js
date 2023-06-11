import {createPointCreateTemplate} from '../../template/point/create';
import {createElement} from '../../render';

export default class PointCreateView {
  getTemplate() {
    return createPointCreateTemplate();
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
