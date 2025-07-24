export type SupportedLang = 
'af' | 'bho' | 'bn' | 'bt' | 'en' | 'gu' | 'hi' | 'lk' | 'mv' | 'np' | 'pa' | 'pk' | 'sd' | 'ta'

export interface LocaleData {
  lang: SupportedLang
  numbers: string[]
  months: string[]
  weekdays: string[]
  localizeNumber: (input: string | number) => string
}