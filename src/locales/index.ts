import type { LocaleData } from '../types/index'

const modules = import.meta.glob<LocaleData>('./*.ts', { eager: true })

const locales: Record<string, LocaleData> = {}

for (const path in modules) {
  const key = path.match(/\.\/(.*)\.ts$/)?.[1]
  if (key && key !== 'index') {
    locales[key] = modules[path].default
  }
}

export default locales
