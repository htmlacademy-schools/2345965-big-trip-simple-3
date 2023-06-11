import {POINT_TYPES} from '../../lib/enum';
import {firstSymbolToUpperCase} from '../../lib/utils';

export const typeGenerator = (type) => POINT_TYPES.map((typeNow)=>
  `<div class="event__type-item">
    <input id="event-type-${typeNow}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${typeNow}" ${type === typeNow ? 'checked' : ''}>
    <label class="event__type-label  event__type-label--${typeNow}" for="event-type-${typeNow}-1">${firstSymbolToUpperCase(typeNow)}</label>
  </div>`).join('');
