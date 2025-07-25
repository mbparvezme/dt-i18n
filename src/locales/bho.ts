// bho.ts - Bhojpuri (India/Nepal)
import type { LocaleData } from '../types';
const bho: LocaleData = {
  numbers: ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'],
  months: [
    'जनवरी', 'फरवरी', 'मार्च', 'अप्रैल', 'मई', 'जून',
    'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर'
  ],
  weekdays: ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार'],
  localizeNumber(input: string | number): string {
    return String(input).replace(/\d/g, d => this.numbers[+d]);
  }
};
export default bho;