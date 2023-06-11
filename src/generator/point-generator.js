import {getRandomByInterval} from '../lib/utils.js';


export const taskGenerator = () => ({
  basePrice: getRandomByInterval(100, 2000),
  dateFrom: '2019-07-10T14:55:56.845Z',
  dateTo: '2019-07-10T15:22:13.375Z',
  destination: 1,
  id: '0',
  offers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  type: 'bus'
});
