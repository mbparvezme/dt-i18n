// sd.ts - Sindhi (Pakistan/India)
import type { LocaleData } from '../types/index';
const sd: LocaleData = {
  lang: 'sd',
  numbers: ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'],
  months: [
    'جنوري', 'فيبروري', 'مارچ', 'اپريل', 'مئي', 'جون',
    'جولاءِ', 'آگسٽ', 'سيپٽمبر', 'آڪٽوبر', 'نومبر', 'ڊسمبر'
  ],
  weekdays: ['آچر', 'سومر', 'اڱارو', 'اربع', 'خميس', 'جمع', 'ڇنڇر'],
  localizeNumber(input: string | number): string {
    return String(input).replace(/\d/g, d => this.numbers[+d]);
  }
};
export default sd;