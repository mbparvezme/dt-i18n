# dt-i18n
Tired of wrestling with date and time formatting across different languages? dt-i18n is here to help. It's a lightweight, zero-dependency JavaScript library designed to make formatting and translating dates simple, elegant, and fast.

## Why You'll Love dt-i18n
- 🌍 Go Global: Instantly support over 57 languages, from Spanish to Swahili.
- 🚀 Lightweight & Fast: With zero dependencies, dt-i18n adds minimal weight to your project.
- 🌲 Smart Bundling: Thanks to tree-shaking, only the locales you actually use get included in your final build.
- ✨ Simple API: We believe in clean, fluent, and intuitive APIs that you can learn in minutes.
- 🔧 Built to Extend: Adding a new language or customizing an existing one is a breeze.
- 💻 Universal: dt-i18n feels right at home in both Node.js and modern browsers.

## Installation
Getting started is as simple as installing the package via npm:

```sh
npm install dt-i18n
```

## Getting Started
The API is designed to be straightforward. Just import the main `dt` function and the specific locales you need.

### Basic Formatting
```js
import { dt } from 'dt-i18n';

// Format the current date (defaults to English)
const today = dt().format('DDDD, MMMM DD, YYYY');
// => "Saturday, July 26, 2025"
```

### Formatting with a Locale
To translate a date, import a locale and pass it to the `.locale()` method. It's that easy.
```js
import { dt } from 'dt-i18n';
import { bn, es } from 'dt-i18n/locales';

// Translate to Bengali
const bengaliDate = dt().locale(bn).format('DDDD, DD MMMM, YYYY');
// => "শনিবার, ২৬ জুলাই, ২০২৫"

// Translate to Spanish
// Note: You can escape text by wrapping it in brackets []
const spanishDate = dt().locale(es).format('DDDD, DD [de] MMMM [de] YYYY');
// => "sábado, 26 de julio de 2025"
```

Formatting a Specific Date
You can pass a date string, a timestamp, or a `Date` object directly to the `dt` function.

```js
import { dt } from 'dt-i18n';
import { ja } from 'dt-i18n/locales';

const specificDate = '2026-01-15T14:30:00';

const japaneseDate = dt(specificDate).locale(ja).format('YYYY年M月D日 HH:mm');
// => "2026年1月15日 14:30"
```
Alternate Usage
For convenience, you can also pass the locale as the second argument.

```js
import { dt } from 'dt-i18n';
import { fr } from 'dt-i18n/locales';

// Passing an empty string for the date uses the current date
const frenchDate = dt('', fr).format('DD MMMM YYYY');
// => "26 juillet 2025"
```

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

## Author
This package was developed by M B Parvez.

- GitHub: [@mbparvezme](https://github.com/mbparvezme)
- Website: [www.mbparvez.me](https://www.mbparvez.me)

## License
dt-i18n is open-source software licensed under the [MIT License](https://github.com/mbparvezme/dt-i18n?tab=MIT-1-ov-file).