import moment from 'moment';
import fromUnixTime from 'date-fns/fromUnixTime';
import format from 'date-fns/format';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export const messageStamp = ({ time, dateFormat = 'h:mm a' }) => {
  const unixTime = fromUnixTime(time);
  return format(unixTime, dateFormat);
};

export const dynamicTime = ({ time }) => {
  const unixTime = fromUnixTime(time);
  return formatDistanceToNow(unixTime, { addSuffix: true });
};

export const timeAgo = ({ time }) => {
  const createdAt = moment(time * 1000).locale('pt-br');
  const now = moment();

  const diffInMinutes = now.diff(createdAt, 'minutes');
  const diffInHours = now.diff(createdAt, 'hours');
  const diffInDays = now.diff(createdAt, 'days');

  if (diffInMinutes < 1) {
    return 'agora';
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} ${diffInMinutes === 1 ? 'minuto' : 'minutos'} atrás`;
  } else if (diffInHours < 24) {
    return `${diffInHours} ${diffInHours === 1 ? 'hora' : 'horas'} atrás`;
  } else {
    return `${diffInDays} ${diffInDays === 1 ? 'dia' : 'dias'} atrás`;
  }
};
