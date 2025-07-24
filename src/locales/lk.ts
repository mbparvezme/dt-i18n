// lk.ts - Sinhala (Sri Lanka)
import type { LocaleData } from '../types/index';
const lk: LocaleData = {
  lang: 'lk',
  numbers: ['෦', '෧', '෨', '෩', '෪', '෫', '෬', '෭', '෮', '෯'],
  months: [
    'ජනවාරි', 'පෙබරවාරි', 'මාර්තු', 'අප්‍රේල්', 'මැයි', 'ජූන්',
    'ජූලි', 'අගෝස්තු', 'සැප්තැම්බර්', 'ඔක්තෝබර්', 'නොවැම්බර්', 'දෙසැම්බර්'
  ],
  weekdays: ['ඉරිදා', 'සඳුදා', 'අඟහරුවාදා', 'බදාදා', 'බ්‍රහස්පතින්දා', 'සිකුරාදා', 'සෙනසුරාදා'],
  localizeNumber(input: string | number): string {
    return String(input).replace(/\d/g, d => this.numbers[+d]);
  }
};
export default lk;