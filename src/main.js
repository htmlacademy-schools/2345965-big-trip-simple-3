import { render } from './render.js';
import FilterView from './view/filter-view.js';
import SortView from './view/sort-view.js';
import PointListPresenter from './presenter/list-presenter.js';
import PointModel from './model/point-model';

const filters = document.querySelector('.trip-controls__filters');
const events = document.querySelector('.trip-events');

const model = new PointModel();
const pointListPresenter = new PointListPresenter({pointListContainer: events});

render(new FilterView(), filters);
render(new SortView(), events);

pointListPresenter.init(events, model);
