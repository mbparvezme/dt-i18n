import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'DTI18N',
      fileName: (format) => `dt-i18n.${format}.js`,
    },
    outDir: 'dist',
  },
})
