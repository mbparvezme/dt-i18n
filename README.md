# dt-i18n

  [![npm version](https://img.shields.io/npm/v/dt-i18n?style=for-the-badge&logo=npm&logoColor=red&color=red&labelColor=FFEFEF)](https://www.npmjs.com/package/dt-i18n)
  [![NPM Downloads](https://img.shields.io/npm/d18m/dt-i18n?style=for-the-badge&&labelColor=EFFFEF)](https://www.npmjs.com/package/dt-i18n)
  [![GitHub issues](https://img.shields.io/github/issues/mbparvezme/dt-i18n?style=for-the-badge&logo=github&logoColor=black&color=orange&labelColor=FFF5E8)](https://github.com/mbparvezme/dt-i18n/issues)

Tired of wrestling with date and time formatting across different languages? dt-i18n is here to help. It's a lightweight, zero-dependency JavaScript library designed to make formatting and translating dates simple, elegant, and fast.

<br>

## Why You'll Love dt-i18n
- **🌍 Go Global:** Instantly support over 57 languages, from Spanish to Swahili.
- **🚀 Lightweight & Fast:** With zero dependencies, `dt-i18n` adds minimal weight to your project.
- **🌲 Smart Bundling:** Thanks to tree-shaking, only the locales you actually use get included in your final build.
- **✨ Simple & Powerful API:** A clean, fluent, and chainable API that is easy to learn and powerful to use.
- **🔧 Built to Extend:** Adding a new language or customizing an existing one is a breeze.
- **💻 Universal:** `dt-i18n` feels right at home in both Node.js and modern browsers.

<br>

## Installation
Getting started is as simple as installing the package via npm:

```sh
npm install dt-i18n
```

<br>

## API & Examples
The API is designed to be straightforward. Just import the main `dt` function and the specific locales you need.


### 1. Creating an Instance
Create a `dt` instance in several ways:

```js
import { dt } from 'dt-i18n';
import { fr } from 'dt-i18n/locales';

// Current date and time
dt();

// From a specific date string
dt('2025-07-26');

// From a timestamp
dt(1753548600000);

// With a locale
dt(new Date(), fr);
```

### 2. Custom Format Parsing
Parse date strings that are in a non-standard format.

```js
import { dt } from 'dt-i18n';

const date = dt('26/07/2025 03:30 PM', 'DD/MM/YYYY hh:mm A');

console.log(date.format('YYYY-MM-DD HH:mm'));
// => "2025-07-26 15:30"
```

### 3. Formatting
Use `.format()` to get a string representation of the date.

```js
import { dt } from 'dt-i18n';
import { bn } from 'dt-i18n/locales';

// Default (English)
dt('2025-07-26').format('DDDD, MMMM DD, YYYY');
// => "Saturday, July 26, 2025"

// With a locale
dt('2025-07-26', bn).format('DDDD, DD MMMM, YYYY');
// => "শনিবার, ২৬ জুলাই, ২০২৫"
```

### 4. Timezones
Display a date in any timezone using the .tz() method.

```js
import { dt } from 'dt-i18n';

const utcDate = '2025-07-26T14:00:00Z'; // 2:00 PM in UTC

dt(utcDate).tz('America/New_York').format('h:mm A'); // => "10:00 AM"
dt(utcDate).tz('Asia/Tokyo').format('h:mm A');       // => "11:00 PM"
```

### 5. Manipulation
Easily add, subtract, and jump to the start or end of a time period.

```js
import { dt } from 'dt-i18n';

// Add/Subtract
dt('2025-01-10').add(5, 'days').format('YYYY-MM-DD');      // => "2025-01-15"
dt('2025-01-10').subtract(1, 'month').format('YYYY-MM-DD'); // => "2024-12-10"

// Start/End of
dt('2025-07-26').startOf('month').format('YYYY-MM-DD'); // => "2025-07-01"
dt('2025-07-26').endOf('month').format('YYYY-MM-DD');   // => "2025-07-31"
```

### 6. Comparison & Querying
Check if a date is before, after, or the same as another.

```js
import { dt } from 'dt-i18n';

const dateA = dt('2025-10-10');
const dateB = dt('2025-11-11');
const dateC = dt('2025-10-10T23:00:00');

dateA.isBefore(dateB);    // => true
dateB.isAfter(dateA);     // => true
dateA.isSameDay(dateC);   // => true
dateA.isSameMonth(dateB); // => false
```

### 7. Duration and Intervals
Work with spans of time using Duration and Interval objects.

```js
import { dt } from 'dt-i18n';

const start = dt('2025-01-01');
const end = dt('2025-01-11');

// Get the difference as a Duration object
const duration = end.diff(start);
console.log(duration.as('days'));  // => 10
console.log(duration.as('hours')); // => 240

// Create an Interval to see if a date falls within a range
const event = dt.interval(start, end);
event.contains('2025-01-05'); // => true
```

### 8. Calendar Generation
Instantly generate a 6x7 calendar grid for any month.

```js
import { dt } from 'dt-i18n';

// Get the calendar for July 2025
const julyCalendar = dt('2025-07-01').calendar();

// The result is a 2D array of dt objects, perfect for building a UI
julyCalendar.forEach(week => {
  const weekString = week.map(day => day.format('DD')).join(' ');
  console.log(weekString);
});

// Output:
// 29 30 01 02 03 04 05
// 06 07 08 09 10 11 12
// ...and so on
```

<br>

## Formatting Tokens
Here are all the tokens you can use in your format string.
| Token  | Output Example      | Description                  |
| :----- | :------------------ | :--------------------------- |
| `YYYY` | `2025`              | 4-digit year                 |
| `YY`   | `25`                | 2-digit year                 |
| `MMMM` | `July`              | Full month name              |
| `MM`   | `07`                | 2-digit month (01-12)        |
| `M`    | `7`                 | 1 or 2-digit month (1-12)    |
| `DDDD` | `Saturday`          | Full weekday name (1-31)     |
| `DD`   | `26`                | 2-digit day of month (01-31) |
| `D`    | `26`                | 1 or 2-digit day of month    |
| `HH`   | `15`                | 2-digit hour (00-23)         |
| `H`    | `15`                | 1 or 2-digit hour (0-23)     |
| `hh`   | `03`                | 2-digit hour (01-12)         |
| `h`    | `3`                 | 1 or 2-digit hour (1-12)     |
| `mm`   | `05`                | 2-digit minute (00-59)       |
| `m`    | `5`                 | 1 or 2-digit minute          |
| `ss`   | `08`                | 2-digit second (00-59)       |
| `s`    | `8`                 | 1 or 2-digit second          |
| `A`    | `PM`                | Uppercase AM/PM              |
| `a`    | `pm`                | Lowercase am/pm              |

<br>

## Supported Languages
| Language   | Code      | Language   | Code      | Language   | Code      |
| :--------- | :-------- | :--------- | :-------- | :--------- | :-------- |
| Afrikaans  | `af`      | Hebrew     | `he`      | Portuguese (BR) | `ptBR` |
| Arabic     | `ar`      | Hindi      | `hi`      | Romanian   | `ro`      |
| Bulgarian  | `bg`      | Croatian   | `hr`      | Russian    | `ru`      |
| Bhojpuri   | `bho`     | Hungarian  | `hu`      | Sindhi     | `sd`      |
| Bengali    | `bn`      | Indonesian | `id`      | Sinhala    | `si`      |
| Catalan    | `ca`      | Italian    | `it`      | Slovak     | `sk`      |
| Czech      | `cs`      | Japanese   | `ja`      | Slovenian  | `sl`      |
| Danish     | `da`      | Javanese   | `jv`      | Serbian    | `sr`      |
| German     | `de`      | Korean     | `ko`      | Swedish    | `sv`      |
| Dhivehi    | `dv`      | Lithuanian | `lt`      | Swahili    | `sw`      |
| Dzongkha   | `dz`      | Latvian    | `lv`      | Tamil      | `ta`      |
| Greek      | `el`      | Marathi    | `mr`      | Telugu     | `te`      |
| English    | `en`      | Malay      | `ms`      | Thai       | `th`      |
| Spanish    | `es`      | Nepali     | `ne`      | Filipino   | `tl`      |
| Estonian   | `et`      | Dutch      | `nl`      | Turkish    | `tr`      |
| Persian    | `fa`      | Norwegian  | `no`      | Ukrainian  | `uk`      |
| Finnish    | `fi`      | Punjabi    | `pa`      | Urdu       | `ur`      |
| French     | `fr`      | Polish     | `pl`      | Vietnamese | `vi`      |
| Gujarati   | `gu`      | Pashto     | `ps`      | Chinese (Simp.) | `zh` |

<br>

## Contributing
Want to help make `dt-i18n` even better? We'd love your help! Contributions from the community are welcome and appreciated.

### Reporting Issues
Found a bug or have an idea for a new feature? Please open an issue on the [GitHub](https://github.com/mbparvezme/dt-i18n/issues) repository and provide as much detail as possible.

### Adding a New Language
This is the easiest way to contribute and help the community.

1. **Fork the repository** and create a new branch for your changes.
2. **Create a new locale file** in `src/locales/`. Use the 2-letter ISO 639-1 language code as the filename (e.g., `xx.ts`).
3. **Copy the content** from an existing locale file (like `en.ts`) to use as a template.
4. **Translate the `months` and `weekdays` arrays**.
5. If the language uses non-standard digits (like `٠١٢`), add them to the `numbers` array. Otherwise, you can leave it empty (`[]`).
6. **Run the build script**. This will automatically update all necessary entry files.
```sh
npm run build
```
7. Submit a Pull Request with a clear description of your changes.

<br>

## Author
This package was developed by M B Parvez.

- GitHub: [@mbparvezme](https://github.com/mbparvezme)
- Website: [www.mbparvez.me](https://www.mbparvez.me)

<br>

## License
dt-i18n is open-source software licensed under the [MIT License](https://github.com/mbparvezme/dt-i18n?tab=MIT-1-ov-file).