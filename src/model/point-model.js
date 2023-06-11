import {taskGenerator} from '../generator/point-generator.js';

export default class PointModel {
  points = Array.from({length: 10}, taskGenerator);
  getTasks = () => this.points;
}
