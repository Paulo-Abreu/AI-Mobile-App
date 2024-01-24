import moment from 'moment';

import i18n from '../i18n';

class DateHelper {
  constructor(date) {
    this.createdAt = moment(date * 1000).locale('pt-br');
    this.now = moment();
    this.diffInMinutes = this.now.diff(this.createdAt, 'minutes');
    this.diffInHours = this.now.diff(this.createdAt, 'hours');
    this.diffInDays = this.now.diff(this.createdAt, 'days');
  }

  format() {
    if (this.diffInMinutes < 1) {
      return i18n.t('CONVERSATION.NOW');
    } else if (this.diffInMinutes < 60) {
      return `${this.diffInMinutes} ${i18n.t('CONVERSATION.MINUTES_AGO', {
        count: this.diffInMinutes,
      })}`;
    } else if (this.diffInHours < 24) {
      return `${this.diffInHours} ${i18n.t('CONVERSATION.HOURS_AGO', {
        count: this.diffInHours,
      })}`;
    } else {
      return `${this.diffInDays} ${i18n.t('CONVERSATION.DAYS_AGO', {
        count: this.diffInDays,
      })}`;
    }
  }
}
export default DateHelper;
