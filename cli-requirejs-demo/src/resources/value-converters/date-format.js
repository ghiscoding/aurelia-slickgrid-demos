import moment from 'moment-mini';

export class DateFormatValueConverter {
  toView(value, format) {
    return moment(value).format(format);
  }
}
