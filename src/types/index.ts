export type TimeUnit =
  | 'year'    | 'years'
  | 'month'   | 'months'
  | 'day'     | 'days'
  | 'hour'    | 'hours'
  | 'minute'  | 'minutes'
  | 'second'  | 'seconds'

export interface LocaleData {
  numbers: string[]
  months: string[]
  weekdays: string[]
}