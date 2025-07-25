import { formatDate, formatTime } from './formatter'
import locales from '../locales/index'
import type { SupportedLang } from '../types/index'

export class DateUtils {
  private date: Date
  private result: string = ''
  private lang: SupportedLang = 'en'

  constructor(date?: Date | string | number) {
    this.date = new Date(date ?? Date.now());
  }

  formatDate(format: string): this {
    this.result = formatDate(this.date, format)
    return this
  }

  formatTime(format: string, is24: boolean = true): this {
    this.result = formatTime(this.date, format, is24)
    return this
  }

  translate(lang: SupportedLang): this {
    this.lang = lang
    const locale = locales[lang]
    if (locale) {
      this.result = locale.localizeNumber(this.result)
    }
    return this
  }

  value(): string {
    return this.result
  }
}
