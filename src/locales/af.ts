// af.ts - Pashto (Afghanistan)
import type { LocaleData } from '../types/index';
const af: LocaleData = {
  lang: 'af',
  numbers: ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'],
  months: [
    'جنوري', 'فبروري', 'مارچ', 'اپریل', 'می', 'جون',
    'جولای', 'اګست', 'سپتمبر', 'اکتوبر', 'نومبر', 'دسمبر'
  ],
  weekdays: ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'],
  localizeNumber(input: string | number): string {
    return String(input).replace(/\d/g, d => this.numbers[+d]);
  }
};
export default af;