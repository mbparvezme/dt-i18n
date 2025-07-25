import { DateUtils } from './core/DateUtils'

const dt = new DateUtils() as DateUtils & {
  use: (date?: Date | string | number) => DateUtils
}

dt.use = function (date?: Date | string | number) {
  return new DateUtils(date)
}

export { DateUtils }
export default dt
