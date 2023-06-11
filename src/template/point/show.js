import {destinationGenerator} from '../../generator/destination-generator';
import {offersGenerator} from '../../generator/group/offers-generator';
import {create} from '../offer/create';
import {
  dateFormat,
  dateFromDateTime,
  timeFromDateTime,
  datePoint
} from '../../lib/utils';


export const createPointShowTemplate = (point) => {
  const { basePrice, dateFrom, dateTo, offers, type, destination } = point;
  const startDateForHuman = datePoint(dateFrom);
  const dateForDateTimeWithoutTime = dateFormat(dateFrom);
  const dateForDateTimeWithStartTime = dateFromDateTime(dateFrom);
  const dateForDateTimeStartTime = timeFromDateTime(dateForDateTimeWithStartTime);
  const dateForDateTimeWithEndTime = dateFromDateTime(dateTo);
  const dateForDateTimeEndTime = timeFromDateTime(dateForDateTimeWithEndTime);
  const offersTemplate = create(offersGenerator(offers));
  return (`<li class="trip-events__item">
  <div class="event">
    <time class="event__date" datetime="${dateForDateTimeWithoutTime}">${startDateForHuman}</time>
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
    </div>
    <h3 class="event__title">${type} ${destinationGenerator(destination).name}</h3>
    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="${dateForDateTimeWithStartTime}">${dateForDateTimeStartTime}</time>
        &mdash;
        <time class="event__end-time" datetime="${dateForDateTimeWithEndTime}">${dateForDateTimeEndTime}</time>
      </p>
    </div>
    <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
    </p>
    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
      <li class="event__offer">
        ${offersTemplate}
      </li>
    </ul>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>
  </li>`);
};
