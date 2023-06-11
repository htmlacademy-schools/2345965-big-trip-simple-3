import ListView from '../view/list-view';
import PointShowView from '../view/point/show-view';
import PointCreateView from '../view/point/create-view';
import PointEditView from '../view/point/edit-view';
import { render } from '../render';

export default class PointListPresenter {
  pointList = new ListView();

  constructor({pointListContainer}) {
    this.pointListContainer = pointListContainer;
  }

  init() {
    render(this.pointList, this.pointListContainer);
    render(new PointEditView, this.pointList.getElement());
    render(new PointCreateView, this.pointList.getElement());
    for (let i = 0; i < 10; i++) {
      render(new PointShowView, this.pointList.getElement());
    }
  }
}
