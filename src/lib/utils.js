import dayjs from 'dayjs';

function getRandomByInterval(begin, end) {
  //будем считать, что если begin > end, то пользователь хочет получить результат в [end , begin]
  //если begin == end, то функция должна возвращать само число
  //если оба числа отрицательные, то возвращаем 0
  if (begin > end) {
    [begin, end] = [end, begin];
  }

  begin = Math.max(Math.ceil(begin), 0);
  end = Math.max(Math.floor(end), 0);

  return Math.floor(Math.random() * (end - begin + 1) + begin);
}

const firstSymbolToUpperCase = (str) => str.replace(/^\w/, (match) => match.toUpperCase());

const dateTimeFormat = (dueDate) => dayjs(dueDate).format('DD.MM.YY HH:mm');

const datePoint = (dueData) => dayjs(dueData).format('MMMM DD');
const dateFormat = (dueData) => dayjs(dueData).format('YYYY-MM-DD');
const dateFromDateTime = (dueData) => dayjs(dueData).format('YYYY-MM-DDTHH:mm');
const timeFromDateTime = (data) => data.slice(-5);

export {
  getRandomByInterval,
  firstSymbolToUpperCase,
  dateTimeFormat,
  datePoint,
  dateFormat,
  dateFromDateTime,
  timeFromDateTime
};
