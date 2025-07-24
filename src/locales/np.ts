// np.ts - Nepali (Nepal)
import type { LocaleData } from '../types/index';
const np: LocaleData = {
  lang: 'np',
  numbers: ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'],
  months: [
    'जनवरी', 'फेब्रुअरी', 'मार्च', 'अप्रिल', 'मे', 'जुन',
    'जुलाई', 'अगस्ट', 'सेप्टेम्बर', 'अक्टोबर', 'नोभेम्बर', 'डिसेम्बर'
  ],
  weekdays: ['आइतवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'बिहीवार', 'शुक्रवार', 'शनिवार'],
  localizeNumber(input: string | number): string {
    return String(input).replace(/\d/g, d => this.numbers[+d]);
  }
};
export default np;